/* WHICH FORM? — shared engine for the per-language "pick the right form" sections.
 * German: Articles (#/articles), later English articles and Russian endings use the same engine.
 *
 * A language registers one definition with GT.whichForm.define(lang, def). The engine owns the route,
 * the sidebar jump links, the game screen (mode tabs, card, options, hints, Show answer, All forms,
 * Next, score, keyboard) and the per-language game state. The definition owns everything that is about
 * the language: the reference page, the modes and the "games" that produce tasks.
 *
 * def = {
 *   route: 'articles',              // #/<route> = reference page, #/<route>/play = game
 *   label: 'Articles',              // Language menu item, crumbs, sidebar label
 *   ready(): bool,                  // pack data loaded (e.g. !!GT.ARTIKEL)
 *   sections: [[id, label], …],     // reference page sections → sidebar jump links (#/<route>?s=<id>)
 *   reference(api): html,           // reference page body (section titles via GT.whichForm.sectionTitle)
 *   game: { title, lead(): html },  // game page head
 *   practice: { label, help },      // Practice → What to train → Rules
 *   modes: [{ id, label, game, solo? }] or a function returning them (modes can depend on the "I know" language),
 *                                   // solo modes are drawn as a separate button
 *   modeNote(modeId): text,         // short line under the mode buttons
 *   games: { <id>: {
 *     items(): [],                  // raw items
 *     match(raw, modeId): bool,     // item belongs to the mode (optional)
 *     task(raw): task,              // normalised task object
 *     options(task): [string], answer(task): string,
 *     kind(task): text,             // small label at the top of the card
 *     question(task, ctx): html,    // ctx = { revealed, hint, ans, esc, blank }
 *     hintLabels: [first, ...],     // one label per available hint level
 *     hint(task, level, esc): html, // shown after "Hint:" while not revealed
 *     verdict(task, ans, esc): html,// text after "✓ Correct — "
 *     explain(task, chosen): html,  // after a pick or Show answer
 *     forms: { show, hide, html(task, esc) },
 *     next: 'Next sentence →', keys: 'forms', optClass(o): string, qClass: '',
 *     show(o): text } },            // how an option / answer is displayed (e.g. Russian '+' → stress mark); default = as is
 *   check(): [problems]             // consistency check, must return []
 * }
 * Cross-language (data/links/forms_cross.js, GT.FORMS_CROSS):
 *   notes[learn][key][know] — a contrastive note shown under the explanation; key = 't:' + sentence text, a reason,
 *   'p:*+wo' style wildcards or 'v:*'. A note starting with '=' says "the same as in your language" (not a trap);
 *   every other note marks interference, and GT.whichForm.isTrap(learn, task) puts the sentence into a pack's
 *   Interference mode. GT.whichForm.renderCases(api) draws #/cases ("Cases across your languages").
 * app.js calls GT.whichForm.render(route, sub, api, params), api = { page, esc, crumbs, setKeys }. */
(function () {
  'use strict';

  var DEFS = {}, ORDER = [], STATES = {}, lastApi = null, lastRoute = null;

  function def(lang) { var d = DEFS[lang]; return d && (!d.ready || d.ready()) ? d : null; }
  function active() { return def(GT.learn); }
  function state(lang) {
    if (!STATES[lang]) STATES[lang] = { cur: -1, mode: null, chosen: null, revealed: false, hint: 0, forms: false, recent: [], ok: 0, bad: 0, streak: 0, best: 0 };
    return STATES[lang];
  }
  /** Pick the text for the "I know" language: tx({ ru, en, de }) — falls back to English. */
  function tx(o) { if (o == null || typeof o === 'string') return o || ''; return o[GT.know] != null ? o[GT.know] : (o.en != null ? o.en : o.ru || ''); }
  function sectionTitle(t, id) {
    var safeId = id ? String(id).replace(/[^a-zA-Z0-9_-]/g, '') : '';
    return '<h3 class="section-title"' + (safeId ? ' id="ag-' + safeId + '"' : '') + '>' + t + '</h3>';
  }

  function stressMarks(s) { return String(s).replace(/\+([аеиоуыэюяАЕИОУЫЭЮЯ])/g, '$1́'); }

  /* ---------------- cross-language notes ---------------- */
  function noteFor(lang, s, know) {
    var X = GT.FORMS_CROSS && GT.FORMS_CROSS.notes && GT.FORMS_CROSS.notes[lang];
    if (!X || !s || !s.text) return null;
    know = know || GT.know;
    var r = s.r || '', keys = ['t:' + s.text, r, r.replace(/^p:[^+]+/, 'p:*'), r.split(':')[0] + ':*'];
    for (var i = 0; i < keys.length; i++) {
      var n = X[keys[i]];
      if (n && n[know]) { var t = n[know], same = t.charAt(0) === '='; return { text: stressMarks(same ? t.slice(1) : t), trap: !same }; }
    }
    return null;
  }
  var VS = { ru: 'Сравнение с русским', en: 'Compared with English', de: 'Im Vergleich zum Deutschen' };
  function contrastHTML(s) {
    var n = noteFor(GT.learn, s);
    if (!n) return '';
    return '<div class="ag-contrast' + (n.trap ? ' trap' : '') + '"><p class="ag-contrast-head">' + (n.trap ? '⚠ ' : '') + VS[GT.know] + '</p><p>' + n.text + '</p></div>';
  }

  /* ---------------- game ---------------- */
  function modesOf(d) { return typeof d.modes === 'function' ? d.modes() : d.modes; }
  function comparisonMode(m) { return m.id === 'x' || m.id === 'gt'; }
  function modeOf(d, id) { return modesOf(d).filter(function (m) { return m.id === id; })[0] || modesOf(d)[0]; }
  function gameOf(d, G) { return d.games[modeOf(d, G.mode).game]; }
  function poolOf(d, G) {
    var m = modeOf(d, G.mode), gm = d.games[m.game], all = gm.items(), out = [];
    for (var i = 0; i < all.length; i++) if (!gm.match || gm.match(all[i], m.id)) out.push(i);
    return out;
  }
  function nextTask(d, G) {
    var pool = poolOf(d, G).filter(function (i) { return G.recent.indexOf(i) < 0 && i !== G.cur; });
    if (!pool.length) {
      if (!G.recent.length) { G.recent = []; pool = poolOf(d, G); if (!pool.length) { G.cur = -1; return; } }
      else { G.recent = []; return nextTask(d, G); }
    }
    G.cur = pool[Math.floor(Math.random() * pool.length)];
    G.recent.push(G.cur);
    if (G.recent.length > Math.min(30, Math.floor(pool.length / 2))) G.recent.shift();
    G.chosen = null; G.revealed = false; G.hint = 0;
  }
  function taskOf(d, G) { var gm = gameOf(d, G); return gm.task(gm.items()[G.cur]); }

  function gameHTML(d, G, api) {
    var esc = api.esc, lang = GT.learn, m = modeOf(d, G.mode), gm = d.games[m.game];
    function tab(mo) { return '<button class="seg-tab' + (G.mode === mo.id ? ' active' : '') + '" type="button" data-ag="mode" data-v="' + esc(mo.id) + '">' + esc(mo.label) + '</button>'; }
    var modes = modesOf(d), main = modes.filter(function (x) { return !x.solo; });
    var patterns = modes.find(function (x) { return x.solo && !comparisonMode(x); });
    var patternButton = patterns ? '<button type="button" class="seg-tab ag-patterns' + (m.id === patterns.id ? ' active' : '') +
      '" data-ag="mode" data-v="' + esc(patterns.id) + '" aria-pressed="' + (m.id === patterns.id) + '">' + esc(patterns.label) + '</button>' : '';
    var h = '<div class="ag-modes"><div class="seg-tabs ag-filter" role="tablist">' + main.map(tab).join('') + '</div>' +
      patternButton + '</div>';
    var note = d.modeNote ? d.modeNote(m.id) : '';
    if (note) h += '<p class="mono-muted ag-mode-note">' + esc(note) + '</p>';
    if (G.cur < 0) return h + '<div class="empty-state"><p>No tasks in this mode yet.</p></div>';

    var s = taskOf(d, G), ans = gm.answer(s), opts = gm.options(s), total = G.ok + G.bad, show = gm.show || String;
    h += '<div class="drill ag-card"><div class="ag-top"><p class="drill-kind">' + esc(gm.kind(s)) + '</p><p class="drill-kind ag-score">✓ ' + G.ok + ' · ✗ ' + G.bad + (total ? ' · streak ' + G.streak : '') + '</p></div>';
    var blank = G.revealed ? '<mark class="hl">' + esc(show(ans)) + '</mark>' : '<span class="blank">____</span>';
    h += '<p class="drill-q ag-q-text' + (gm.qClass ? ' ' + gm.qClass : '') + '" lang="' + lang + '">' + gm.question(s, { revealed: G.revealed, hint: G.hint, ans: ans, esc: esc, blank: blank }) + '</p>';
    if (G.hint && !G.revealed) h += '<p class="ag-hint">Hint: ' + gm.hint(s, G.hint, esc) + '</p>';
    h += '<div class="options">' + opts.map(function (o, i) {
      var cls = gm.optClass ? ' ' + gm.optClass(o) : '';
      if (G.revealed) { if (o === ans) cls += ' ok'; else if (o === G.chosen) cls += ' bad'; }
      return '<button class="opt' + cls + '" data-ag="opt" data-v="' + esc(o) + '"' + (G.revealed ? ' disabled' : '') + ' lang="' + lang + '"><span class="ag-key">' + (i + 1) + '</span><span>' + esc(show(o)) + '</span></button>';
    }).join('') + '</div>';
    if (G.revealed) {
      var verdict = G.chosen === ans ? '✓ Correct' : G.chosen ? '✗ Not quite' : 'Answer';
      h += '<div class="drill-answer"><div class="a">' + verdict + ' — <span lang="' + lang + '">' + (gm.verdict ? gm.verdict(s, ans, esc) : esc(show(ans))) + '</span></div><div class="x">' + gm.explain(s, G.chosen) + contrastHTML(s) + '</div></div>';
    }
    h += '</div><div class="actions-row ag-actions">';
    var hl = gm.hintLabels || ['Hint', 'More hint'];
    if (!G.revealed) {
      if (G.hint < hl.length || hl.length > 1) {
        h += '<button class="btn small" data-ag="hint"' + (G.hint >= hl.length ? ' disabled' : '') + '>' + esc(hl[Math.min(G.hint, hl.length - 1)]) + '</button>';
      }
      h += '<button class="btn small" data-ag="show">Show answer</button>';
    }
    if (gm.forms) h += '<button class="btn small' + (G.forms ? ' active' : '') + '" data-ag="forms" aria-pressed="' + G.forms + '">' + esc(G.forms ? gm.forms.hide : gm.forms.show) + '</button>';
    h += '<button class="btn small primary" data-ag="next">' + esc(gm.next || 'Next →') + '</button></div>';
    h += '<p class="mono-muted ag-keys">1–' + opts.length + ' · H hint' + (gm.forms ? ' · F ' + (gm.keys || 'forms') : '') + ' · Enter next</p>';
    if (G.forms && gm.forms) h += '<div class="ag-forms">' + gm.forms.html(s, esc) + '</div>';
    return h;
  }
  function drawGame() {
    var el = document.getElementById('agGame'), d = active();
    if (el && lastApi && d) el.innerHTML = gameHTML(d, state(GT.learn), lastApi);
  }
  function viewGame(d, api, requestedMode) {
    var G = state(GT.learn);
    var mode = modeOf(d, requestedMode || G.mode);
    if (mode.id !== G.mode) { G.mode = mode.id; G.cur = -1; G.recent = []; }
    var gm = gameOf(d, G), items = gm.items();
    if (G.cur < 0 || G.cur >= items.length || (gm.match && !gm.match(items[G.cur], G.mode))) nextTask(d, G);
    var h = api.crumbs('Language · <a href="#/' + d.route + '">' + api.esc(d.label) + '</a> · Game');
    h += '<header class="page-head"><h1>' + api.esc(d.game.title) + '</h1><p class="lead">' + d.game.lead() + '</p></header>';
    h += '<div id="agGame">' + gameHTML(d, G, api) + '</div>';
    api.page(h, 'mid');
    api.setKeys(function (e) {
      var k = e.key, G2 = state(GT.learn);
      if (/^[1-9]$/.test(k)) { var bt = document.querySelectorAll('#agGame [data-ag="opt"]')[Number(k) - 1]; if (bt && !G2.revealed) { e.preventDefault(); act('opt', bt); } }
      else if (k === 'h' || k === 'H') { e.preventDefault(); act('hint'); }
      else if (k === 'f' || k === 'F') { e.preventDefault(); act('forms'); }
      else if (k === 'Enter' || k === 'n' || k === 'N') { e.preventDefault(); act(G2.revealed || k !== 'Enter' ? 'next' : 'show'); }
    });
  }
  function act(name, el) {
    var d = active();
    if (!d) return;
    var G = state(GT.learn), gm = gameOf(d, G);
    switch (name) {
      case 'opt':
        if (G.revealed || G.cur < 0) return;
        G.chosen = el.dataset.v; G.revealed = true;
        if (G.chosen === gm.answer(taskOf(d, G))) { G.ok++; G.streak++; G.best = Math.max(G.best, G.streak); } else { G.bad++; G.streak = 0; }
        break;
      case 'show': if (G.revealed || G.cur < 0) return; G.revealed = true; G.bad++; G.streak = 0; break;
      case 'hint': if (G.revealed || G.hint >= (gm.hintLabels || [0, 0]).length) return; G.hint++; break;
      case 'forms': if (!gm.forms) return; G.forms = !G.forms; break;
      case 'next': nextTask(d, G); break;
      case 'mode': {
        var nextMode = modeOf(d, el.dataset.v);
        if (G.mode !== nextMode.id) { G.mode = nextMode.id; G.cur = -1; G.recent = []; }
        if (location.hash.indexOf('?mode=') >= 0) history.replaceState(history.state, '', '#/' + d.route + '/play');
        nextTask(d, G);
        break;
      }
      default: return;
    }
    drawGame();
  }

  /* ---------------- reference page + jump links ---------------- */
  function jumpTo(id, smooth) {
    var t = document.getElementById('ag-' + id);
    if (t) t.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    return !!t;
  }
  document.addEventListener('click', function (e) {
    var j = e.target.closest('[data-ag-jump]');
    if (j && document.getElementById('ag-' + j.dataset.agJump)) {
      e.preventDefault();
      var scrim = document.getElementById('scrim');
      if (scrim && scrim.classList.contains('open')) scrim.click();
      jumpTo(j.dataset.agJump, true);
      try { if (lastRoute) history.replaceState(history.state, '', '#/' + lastRoute + '?s=' + encodeURIComponent(j.dataset.agJump)); } catch (err) {}
      return;
    }
    var el = e.target.closest('[data-ag]');
    if (!el || !document.getElementById('agGame')) return;
    e.preventDefault();
    act(el.dataset.ag, el);
  });

  GT.whichForm = {
    define: function (lang, d) { if (!DEFS[lang]) ORDER.push(lang); DEFS[lang] = d; },
    /** Definition for a language if its data is loaded (default: the learned language). */
    get: function (lang) { return def(lang || GT.learn); },
    active: active,
    /** Every route any language uses (app.js routes them all here). */
    routes: function () { var r = []; ORDER.forEach(function (l) { if (r.indexOf(DEFS[l].route) < 0) r.push(DEFS[l].route); }); return r; },
    tx: tx,
    sectionTitle: sectionTitle,
    stressMarks: stressMarks,
    noteFor: noteFor,
    /** true when the known language pushes towards a wrong answer in this task (Interference mode) */
    isTrap: function (lang, s) { var n = noteFor(lang, s); return !!(n && n.trap); },
    /** #/cases — "Cases across your languages" (drawn by data/links/forms_cross.js: GT.FORMS_CROSS.casesPage) */
    renderCases: function (api, params) {
      lastApi = api; lastRoute = 'cases';
      var X = GT.FORMS_CROSS;
      if (!X || !X.casesPage) return api.page('<div class="empty-state"><h3>Not available</h3></div>', 'mid');
      api.page(api.crumbs('Language · Cases across your languages') + X.casesPage(api), 'mid');
      if (params && params.s) setTimeout(function () { jumpTo(params.s, false); }, 40);
    },
    casesSections: function () { return GT.FORMS_CROSS && GT.FORMS_CROSS.casesSections || []; },
    render: function (route, sub, api, params) {
      lastApi = api;
      var d = active();
      if (!d || d.route !== route) return api.page('<div class="empty-state"><h3>Not in this language</h3><p>This page belongs to another language pack.</p></div>', 'mid');
      lastRoute = d.route;
      if (sub === 'play') return viewGame(d, api, params && params.mode);
      var comparisons = modesOf(d).filter(comparisonMode);
      var links = comparisons.map(function (m) {
        return '<a class="btn" href="#/' + d.route + '/play?mode=' + encodeURIComponent(m.id) + '">Play · ' + api.esc(m.label) + '</a>';
      }).join('');
      api.page(api.crumbs('Language · ' + api.esc(d.label)) + d.reference(api) + (links ? '<div class="actions-row">' + links + '</div>' : ''), 'mid');
      if (params && params.s) setTimeout(function () { jumpTo(params.s, false); }, 40);
    },
    /** Consistency check for every language whose data is loaded (or one language). Must return []. */
    check: function (lang) {
      var out = [];
      (lang ? [lang] : ORDER).forEach(function (l) {
        var d = def(l);
        if (d && d.check) d.check().forEach(function (x) { out.push(l + ': ' + x); });
        // contrastive notes keyed by sentence text must point to an existing sentence
        var X = d && GT.FORMS_CROSS && GT.FORMS_CROSS.notes[l];
        if (X) {
          var texts = {};
          Object.keys(d.games).forEach(function (g) { d.games[g].items().forEach(function (it) { if (Array.isArray(it)) texts[it[0]] = 1; }); });
          Object.keys(X).forEach(function (k) { if (k.indexOf('t:') === 0 && !texts[k.slice(2)]) out.push(l + ': note for a missing sentence: ' + k.slice(2)); });
        }
      });
      return out;
    }
  };
})();
