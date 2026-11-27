/* ROOT ROULETTE — sandbox word-building game for Roots (#/roots/roulette).
 * Reuses the visual layout and controls of js/whichform.js (Endings / Articles "Which form?").
 * Modes:
 *   build — meaning + base root -> pick the right prefix/particle
 *   same  — one root stays fixed while meanings rotate -> pick the right prefix/particle
 * Sandbox only: never writes to GT.store / FSRS Review. */
(function () {
  'use strict';

  var STATES = {}, lastApi = null;
  var MODES = [
    { id: 'build', label: 'Build the word' },
    { id: 'same', label: 'Same root' }
  ];

  function state(lang) {
    if (!STATES[lang]) {
      STATES[lang] = {
        mode: 'build',
        cur: null,
        lockedRoot: null,
        chosen: null,
        revealed: false,
        hint: 0,
        recent: [],
        ok: 0,
        bad: 0,
        streak: 0,
        best: 0,
        spinSeq: 0,
        drawnSpinSeq: -1
      };
    }
    return STATES[lang];
  }

  function escHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function richHTML(s, esc) {
    return esc(s).replace(/\[\[(.+?)\]\]/g, '<mark class="hl">$1</mark>');
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function normKey(s) { return String(s || '').trim().toLowerCase(); }
  function PW() { return GT.cfg('prefixWord', 'Prefix'); }
  function pwLower() { return PW().toLowerCase(); }
  function isVerbPos(p) { return p === 'verb' || p === 'phrasal verb'; }
  function pfLabel(id) { var pf = GT.prefixes[id]; return pf ? pf.label : id + '-'; }

  function pfxDisplayOf(w, r) {
    if (w.particle) {
      var base = String((r && (r.t || r.verb)) || '').trim();
      var target = String(w.t || '').trim();
      if (base && target.toLowerCase().indexOf(base.toLowerCase() + ' ') === 0) {
        return target.slice(base.length + 1).trim();
      }
      return String(pfLabel(w.prefix)).replace(/^…\s*/, '');
    }
    var tLow = String(w.t || '').toLowerCase();
    var bLow = String((r && (r.t || r.verb)) || '').toLowerCase();
    if (w.prefix === 'о' && tLow.indexOf('об') === 0 && bLow.indexOf('б') !== 0) return 'об-';
    if (w.prefix === 'be' && tLow.indexOf('bean') === 0) return 'bean-';
    return String(pfLabel(w.prefix)).replace(/\s*\([^)]*\)/g, '').trim();
  }

  function reflSuffix(w, r) {
    if (w.particle) return '';
    var base = String((r && (r.t || r.verb)) || '');
    var t = String(w.t || '');
    if (/^sich /.test(t) && !/^sich /.test(base)) return ' (sich)';
    if (/(ся|сь)$/.test(t) && !/(ся|сь)$/.test(base)) return ' (-ся)';
    return '';
  }

  function shortGloss(w) {
    var g = String(GT.gl(w) || '').trim();
    var parts = g.split(/\s*;\s*/).filter(Boolean);
    if (parts.length > 1 && (parts[0] + '; ' + parts[1]).length <= 72) return parts[0] + '; ' + parts[1];
    return parts[0] || g;
  }

  function buildPool() {
    var all = [], byRoot = Object.create(null), multiRoots = [];
    Object.keys(GT.roots).forEach(function (rid) {
      var r = GT.roots[rid];
      var words = (r.ids || []).map(function (id) { return GT.byId[id]; }).filter(Boolean);
      var seenT = Object.create(null), list = [];
      words.forEach(function (w) {
        if (w.base || !w.prefix || !isVerbPos(w.pos) || w.rootId !== rid || !GT.gl(w)) return;
        if (seenT[w.t]) return;
        seenT[w.t] = 1;
        list.push(w);
      });
      if (list.length) {
        byRoot[rid] = list;
        all = all.concat(list);
        if (list.length >= 3) multiRoots.push(rid);
      }
    });
    return { all: all, byRoot: byRoot, multiRoots: multiRoots };
  }

  function pickLockedRoot(pool, excludeRid) {
    var fourPlus = pool.multiRoots.filter(function (rid) { return rid !== excludeRid && pool.byRoot[rid].length >= 4; });
    var cands = fourPlus.length ? fourPlus : pool.multiRoots.filter(function (rid) { return rid !== excludeRid; });
    if (!cands.length) cands = pool.multiRoots;
    return cands.length ? cands[Math.floor(Math.random() * cands.length)] : null;
  }

  function makeOptions(w, r, pool) {
    var siblings = pool.byRoot[w.rootId] || [];
    var ans = pfxDisplayOf(w, r);
    var used = Object.create(null);
    used[normKey(ans)] = 1;
    var opts = [ans];
    shuffle(siblings).forEach(function (x) {
      if (opts.length >= 4) return;
      var d = pfxDisplayOf(x, r), k = normKey(d);
      if (!used[k]) { used[k] = 1; opts.push(d); }
    });
    if (opts.length < 4) {
      shuffle(pool.all).forEach(function (x) {
        if (opts.length >= 4) return;
        var d = pfxDisplayOf(x, GT.roots[x.rootId]), k = normKey(d);
        if (!used[k]) { used[k] = 1; opts.push(d); }
      });
    }
    return { optPfx: shuffle(opts) };
  }

  function nextTask(G) {
    var pool = buildPool();
    if (!pool.all.length) { G.cur = null; return; }
    var candidates;
    if (G.mode === 'same') {
      if (!G.lockedRoot || !pool.byRoot[G.lockedRoot] || pool.byRoot[G.lockedRoot].length < 3) {
        G.lockedRoot = pickLockedRoot(pool, null);
      }
      candidates = (G.lockedRoot && pool.byRoot[G.lockedRoot]) || pool.all;
    } else {
      candidates = pool.all;
    }
    var curId = G.cur && G.cur.wid;
    var avail = candidates.filter(function (w) { return G.recent.indexOf(w.id) < 0 && w.id !== curId; });
    if (!avail.length) {
      G.recent = [];
      avail = candidates.filter(function (w) { return w.id !== curId; });
      if (!avail.length) avail = candidates;
    }
    var w = avail[Math.floor(Math.random() * avail.length)];
    var r = GT.roots[w.rootId];
    G.recent.push(w.id);
    var cap = Math.min(30, Math.floor(candidates.length / 2));
    if (G.recent.length > cap) G.recent.shift();
    var built = makeOptions(w, r, pool);
    G.cur = {
      wid: w.id,
      rid: w.rootId,
      pfxKey: w.prefix,
      pfxDisplay: pfxDisplayOf(w, r),
      optPfx: built.optPfx
    };
    G.chosen = null;
    G.revealed = false;
    G.hint = 0;
    G.spinSeq++;
  }

  function prefixHintText(w) {
    var pf = GT.prefixes[w.prefix];
    if (!pf) return '';
    var pd = Array.isArray(w.prefixDrill) ? w.prefixDrill[0] : w.prefixDrill;
    if (pd && pf.meanings && pf.meanings[pd.meaning]) {
      var mg = GT.gl(pf.meanings[pd.meaning]);
      if (mg) return mg;
    }
    return GT.gl(pf) || '';
  }

  function prefixExplainInfo(w) {
    var pd = Array.isArray(w.prefixDrill) ? w.prefixDrill[0] : w.prefixDrill;
    if (pd && pd.explain) {
      var txt = GT.lx(pd, 'explain');
      if (txt) return { text: txt, lang: GT.lxLang(pd, 'explain') };
    }
    var pf = GT.prefixes[w.prefix];
    if (pf) {
      if (pd && pf.meanings && pf.meanings[pd.meaning]) {
        var m = pf.meanings[pd.meaning], mg = GT.gl(m);
        if (mg) return { text: mg, lang: GT.glLang(m) };
      }
      var g = GT.gl(pf);
      if (g) return { text: g, lang: GT.glLang(pf) };
    }
    return null;
  }

  function hintsFor(w, pfxDisplay) {
    var hints = [];
    var pfxHint = prefixHintText(w);
    if (pfxHint) {
      hints.push({
        label: 'Hint · ' + pwLower(),
        html: escHTML(PW()) + ' meaning: <b>' + escHTML(pfxHint) + '</b>'
      });
    }
    var ch = pfxDisplay.replace(/^…\s*/, '').charAt(0);
    if (ch) {
      hints.push({
        label: 'Hint · first letter',
        html: escHTML(PW()) + ' starts with <b>' + escHTML(ch) + '…</b>'
      });
    }
    return hints;
  }

  function modeNote(modeId) {
    if (modeId === 'same') return 'One root stays fixed while meanings rotate — pick the ' + pwLower() + ' that builds each word.';
    return 'The translation and base verb are shown — pick the ' + pwLower() + ' that builds the word.';
  }

  function modeOf(id) {
    for (var i = 0; i < MODES.length; i++) if (MODES[i].id === id) return MODES[i];
    return MODES[0];
  }

  function answerKeyOf(G) {
    return G.cur.pfxDisplay;
  }

  function gameHTML(G, api) {
    var esc = api.esc, lang = GT.learn;
    var h = '<div class="ag-modes rr-modes"><div class="seg-tabs ag-filter" role="tablist">' +
      MODES.map(function (mo) {
        var active = G.mode === mo.id;
        return '<button class="seg-tab' + (active ? ' active' : '') + '" type="button" role="tab" aria-selected="' + active + '" data-rr="mode" data-v="' + esc(mo.id) + '">' + esc(mo.label) + '</button>';
      }).join('') + '</div></div>';
    h += '<p class="mono-muted ag-mode-note">' + esc(modeNote(G.mode)) + '</p>';

    if (!G.cur) return h + '<div class="empty-state"><p>No root tasks available in this language pack.</p></div>';
    var w = GT.byId[G.cur.wid], r = GT.roots[G.cur.rid];
    if (!w || !r) return h + '<div class="empty-state"><p>No root tasks available in this language pack.</p></div>';

    var baseVerb = r.t || r.verb || r.id;
    var pfxDisplay = G.cur.pfxDisplay;
    var refl = reflSuffix(w, r);
    var total = G.ok + G.bad;
    var kindLabel = G.mode === 'same' ? 'Same root · ' + baseVerb : 'Root · ' + baseVerb;

    var spinCls = G.spinSeq !== G.drawnSpinSeq ? ' rr-spin' : '';
    G.drawnSpinSeq = G.spinSeq;

    h += '<div class="drill ag-card"><div class="ag-top"><p class="drill-kind">' + esc(kindLabel) + '</p>' +
      '<p class="drill-kind ag-score">✓ ' + G.ok + ' · ✗ ' + G.bad + (total ? ' · streak ' + G.streak : '') + '</p></div>';

    var pfxBlank = G.revealed ? '<mark class="hl" lang="' + lang + '">' + esc(pfxDisplay) + '</mark>' : '<span class="blank">____</span>';
    h += '<p class="rr-prompt-mean" lang="' + GT.glLang(w) + '">' + esc(shortGloss(w)) + '</p>';
    h += '<p class="drill-q ag-q-text" lang="' + lang + '">';
    if (w.particle) {
      h += '<span class="rr-base">' + esc(baseVerb) + '</span> <span class="rr-op">+</span> <span class="rr-slot' + spinCls + '">' + pfxBlank + '</span>';
    } else {
      h += '<span class="rr-slot' + spinCls + '">' + pfxBlank + '</span> <span class="rr-op">+</span> <span class="rr-base">' + esc(baseVerb) + '</span>' +
        (refl ? ' <span class="mono-muted">' + esc(refl) + '</span>' : '');
    }
    h += '</p>';
    if (GT.gl(r)) h += '<p class="rr-base-gl" lang="' + GT.glLang(r) + '">' + esc(baseVerb) + ' = ' + esc(GT.gl(r)) + '</p>';

    var hints = hintsFor(w, pfxDisplay);
    if (G.hint && !G.revealed && hints.length) {
      h += '<p class="ag-hint" lang="' + GT.know + '">Hint: ' + hints.slice(0, G.hint).map(function (x) { return x.html; }).join(' · ') + '</p>';
    }

    var ans = answerKeyOf(G);
    var opts = (G.cur.optPfx || []).map(function (p) { return { val: p, label: p, lang: lang }; });

    h += '<div class="options rr-opts rr-opts-pfx">' + opts.map(function (o, i) {
      var cls = '';
      if (G.revealed) {
        if (o.val === ans) cls = ' ok';
        else if (o.val === G.chosen) cls = ' bad';
      }
      return '<button class="opt' + cls + '" type="button" data-rr="opt" data-v="' + esc(o.val) + '"' + (G.revealed ? ' disabled' : '') + ' lang="' + esc(o.lang) + '"><span class="ag-key">' + (i + 1) + '</span><span>' + esc(o.label) + '</span></button>';
    }).join('') + '</div>';

    if (G.revealed) {
      var verdict = G.chosen === ans ? '✓ Correct' : G.chosen ? '✗ Not quite' : 'Answer';
      var pd = Array.isArray(w.prefixDrill) ? w.prefixDrill[0] : w.prefixDrill;
      var ex = (pd && w.examples && w.examples[pd.ex]) || (w.examples && w.examples[0]);
      var pfxExp = prefixExplainInfo(w);
      h += '<div class="drill-answer"><div class="a">' + verdict + ' — <span lang="' + lang + '">' + esc(w.t) + '</span></div>' +
        '<div class="x">' +
        '<p class="rr-ans-tr" lang="' + GT.glLang(w) + '">' + esc(GT.gl(w)) + '</p>' +
        (pfxExp ? '<p class="rr-ans-pfx" lang="' + esc(pfxExp.lang) + '"><b lang="' + lang + '">' + esc(pfxDisplay) + '</b> — ' + esc(pfxExp.text) + '</p>' : '') +
        (ex ? '<div class="rr-ans-ex"><p class="rr-ex-t" lang="' + lang + '">' + richHTML(ex.t, esc) + '</p>' +
          (GT.gl(ex) ? '<p class="rr-ex-tr" lang="' + GT.glLang(ex) + '">' + esc(GT.gl(ex)) + '</p>' : '') + '</div>' : '') +
        '</div></div>';
    }

    h += '</div><div class="actions-row ag-actions">';
    if (!G.revealed) {
      if (hints.length) {
        var hintLbl = G.hint === 0 ? 'Hint' : (hints.length > 1 ? 'More hint' : 'Hint');
        h += '<button class="btn small" type="button" data-rr="hint"' + (G.hint >= hints.length ? ' disabled' : '') + '>' + esc(hintLbl) + '</button>';
      }
      h += '<button class="btn small" type="button" data-rr="show">Show answer</button>';
    }
    if (G.mode === 'same') {
      h += '<button class="btn small" type="button" data-rr="newroot">Switch root ↻</button>';
    }
    h += '<button class="btn small primary" type="button" data-rr="next">Next →</button></div>';
    h += '<p class="mono-muted ag-keys">1–' + opts.length + ' · H hint · Enter next</p>';
    return h;
  }

  function drawGame() {
    var el = document.getElementById('rrGame');
    if (el && lastApi) {
      el.innerHTML = gameHTML(state(GT.learn), lastApi);
    }
  }

  function act(name, el) {
    var G = state(GT.learn);
    switch (name) {
      case 'opt':
        if (G.revealed || !G.cur) return;
        G.chosen = el.dataset.v;
        G.revealed = true;
        if (G.chosen === answerKeyOf(G)) { G.ok++; G.streak++; G.best = Math.max(G.best, G.streak); }
        else { G.bad++; G.streak = 0; }
        break;
      case 'show':
        if (G.revealed || !G.cur) return;
        G.revealed = true;
        G.bad++;
        G.streak = 0;
        break;
      case 'hint': {
        if (G.revealed || !G.cur) return;
        var w = GT.byId[G.cur.wid];
        var maxH = w ? hintsFor(w, G.cur.pfxDisplay).length : 0;
        if (G.hint >= maxH) return;
        G.hint++;
        break;
      }
      case 'next':
        nextTask(G);
        break;
      case 'newroot': {
        var pool = buildPool();
        G.lockedRoot = pickLockedRoot(pool, G.lockedRoot);
        G.recent = [];
        nextTask(G);
        break;
      }
      case 'mode': {
        var nextMode = modeOf(el.dataset.v).id;
        if (G.mode !== nextMode) {
          G.mode = nextMode;
          G.cur = null;
          G.recent = [];
          if (nextMode === 'same' && !G.lockedRoot) G.lockedRoot = pickLockedRoot(buildPool(), null);
        }
        nextTask(G);
        break;
      }
      default:
        return;
    }
    drawGame();
  }

  function render(api) {
    lastApi = api;
    var G = state(GT.learn);
    if (!G.cur || !GT.byId[G.cur.wid] || !GT.roots[G.cur.rid]) nextTask(G);
    G.drawnSpinSeq = -1;
    var h = api.crumbs('<a href="#/roots">Roots</a> · Root roulette');
    h += '<header class="page-head"><h1>Root roulette</h1><p class="lead">See the meaning and base root — pick the right ' + api.esc(pwLower()) + ' to build the word. Endless sandbox: nothing is saved to Review.</p></header>';
    h += '<div id="rrGame">' + gameHTML(G, api) + '</div>';
    api.page(h, 'mid');
    api.setKeys(function (e) {
      var k = e.key, G2 = state(GT.learn);
      if (/^[1-4]$/.test(k)) {
        var bt = document.querySelectorAll('#rrGame [data-rr="opt"]')[Number(k) - 1];
        if (bt && !G2.revealed) { e.preventDefault(); act('opt', bt); }
      } else if (k === 'h' || k === 'H') {
        e.preventDefault(); act('hint');
      } else if (k === 'Enter' || k === 'n' || k === 'N') {
        e.preventDefault(); act(G2.revealed || k !== 'Enter' ? 'next' : 'show');
      }
    });
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-rr]');
    if (!el || !document.getElementById('rrGame')) return;
    e.preventDefault();
    act(el.dataset.rr, el);
  });

  GT.roulette = {
    render: render,
    state: function () { return state(GT.learn); }
  };
})();
