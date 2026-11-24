/* ETRNL app (multilingual): routing, views, learn/review (#rec + #prod), roots, drills, WHY?, stats, settings.
 * Works on the ACTIVE language pack (GT.items, GT.TOPICS ... are getters). Target text = .t, glosses via GT.gl(),
 * explanations via GT.lx(). Interface strings stay English; learning hints come from GT.hint() (js/i18n.js). */
(function () {
  'use strict';
  var S = GT.store, F = GT.fsrs, DAY = F.DAY;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var mainEl = $('#main'), sideEl = $('#sidebar'), scrimEl = $('#scrim');
  var ui = { chunkTag: '', drillState: {}, keyHandler: null, lastPrompt: '', rootSel: {}, rootAll: {}, rootDrillMode: 'mix' };

  /* ---------------- icons ---------------- */
  var ICONS = {
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    quote: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    roots: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="13" r="1.5"/><line x1="12" y1="7" x2="12" y2="11.5"/><line x1="11" y1="14.2" x2="6.3" y2="17.6"/><line x1="13" y1="14.2" x2="17.7" y2="17.6"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    repeat: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h.01"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    spark: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    chev: '<polyline points="6 9 12 15 18 9"/>',
    globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5c2.6 2.7 3.9 5.9 3.9 9.5s-1.3 6.8-3.9 9.5c-2.6-2.7-3.9-5.9-3.9-9.5S9.4 5.2 12 2.5z"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  };
  function icon(n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + '</svg>';
  }

  /* ---------------- text helpers ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // [[target]] -> highlighted, [slot] -> slot pill
  function rich(s) {
    return esc(s).replace(/\[\[(.+?)\]\]/g, '<mark class="hl">$1</mark>').replace(/\[([^\[\]]+?)\]/g, '<span class="slot">$1</span>');
  }
  function clozeHTML(s) {
    return esc(s).replace(/\[\[(.+?)\]\]/g, '<span class="blank">$1</span>').replace(/\[([^\[\]]+?)\]/g, '<span class="slot">$1</span>');
  }
  function clozeAnswers(s) {
    var out = [], re = /\[\[(.+?)\]\]/g, m;
    while ((m = re.exec(s))) out.push(m[1]);
    return out;
  }
  function plain(s) { return String(s || '').replace(/\[\[|\]\]/g, '').replace(/\[([^\[\]]+?)\]/g, '…'); }
  function norm(s) {
    return String(s || '').normalize('NFD').replace(/\u0301/g, '').normalize('NFC').toLowerCase().replace(/ё/g, 'е').replace(/[.,!?;:„“”"'()…–—]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function fmtDate(ts) { return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); }
  function fmtDateTime(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + ', ' +
      d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function endOfToday() { var d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime(); }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }

  /* ---------------- toast ---------------- */
  var toastTimer;
  GT.toast = function (msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  };

  /* ---------------- speech ---------------- */
  var tts = { ok: 'speechSynthesis' in window, voice: null, activeEl: null, cur: null };
  /* Voice selection: the original heuristic, parameterised by the learned language
   * (German: /^de/ + /de[-_]DE/ exactly as before). Cloud voices win automatically. */
  function voiceKeyFor(lang) { return (lang || GT.learn) === 'de' ? 'speechVoice' : 'speechVoice_' + (lang || GT.learn); }
  function voiceKey() { return voiceKeyFor(GT.learn); }
  function langMeta(lang) { return GT.LANGS[lang || GT.learn] || GT.LANGS.de; }
  function LS() { return langMeta().short; }
  function KS() { return (GT.LANGS[GT.know] || GT.LANGS.ru).short; }
  function visibleTopic(t) { return !t.hidden; }
  function getGermanVoices() {
    if (!tts.ok) return [];
    var L = langMeta();
    return (speechSynthesis.getVoices() || []).filter(function (v) { return L.voiceLang.test(v.lang); });
  }
  function pickVoiceFor(lang) {
    var vs = speechSynthesis.getVoices();
    if (!vs.length) return null;
    var L = langMeta(lang);
    var de = vs.filter(function (v) { return L.voiceLang.test(v.lang); });
    var pref = S.settings[voiceKeyFor(lang)] || 'auto';
    var chosen = pref !== 'auto' ? de.find(function (v) { return v.voiceURI === pref || v.name === pref; }) : null;
    return chosen ||
      de.find(function (v) { return L.voiceRegion.test(v.lang) && /natural|online|google|premium|enhanced/i.test(v.name); }) ||
      de.find(function (v) { return L.voiceRegion.test(v.lang); }) || de[0] || null;
  }
  function pickVoice() {
    var vs = speechSynthesis.getVoices();
    if (!vs.length) return;
    tts.voice = pickVoiceFor(GT.learn);
    document.body.classList.toggle('no-tts', !tts.voice);
    var selEl = $('#voiceSelect');
    if (selEl) refreshVoiceSelect(selEl);
  }
  function refreshVoiceSelect(selEl) {
    var de = getGermanVoices(), cur = S.settings[voiceKey()] || 'auto';
    selEl.innerHTML = '<option value="auto"' + (cur === 'auto' ? ' selected' : '') + '>Auto</option>' +
      de.map(function (v) {
        var val = v.voiceURI || v.name;
        return '<option value="' + esc(val) + '"' + (cur === val ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>';
      }).join('');
    var info = $('#voiceInfo');
    if (info) info.textContent = tts.voice ? 'Voice: ' + tts.voice.name + ' · ' + de.length + ' ' + langMeta().name + ' voices' : 'No ' + langMeta().name + ' voice found yet.';
  }
  function resetSpeakUI() {
    if (tts.activeEl) {
      tts.activeEl.classList.remove('speaking');
      if (tts.activeEl.dataset && tts.activeEl.dataset.act === 'test-voice') tts.activeEl.textContent = 'Test';
      tts.activeEl = null;
    }
    tts.cur = null;
  }
  function stopSpeak() {
    resetSpeakUI();
    if (tts.ok) { try { speechSynthesis.cancel(); } catch (e) {} }
  }
  if (tts.ok) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; } else document.body.classList.add('no-tts');
  function speak(text, el, lang) {
    if (!tts.ok) return;
    if (el && tts.activeEl === el && (speechSynthesis.speaking || speechSynthesis.pending)) {
      stopSpeak();
      return;
    }
    stopSpeak();
    var targetLang = lang || GT.learn;
    var L = langMeta(targetLang);
    var voice = targetLang === GT.learn ? tts.voice : pickVoiceFor(targetLang);
    var u = new SpeechSynthesisUtterance(plain(text).replace(/\u0301/g, ''));
    u.lang = L.speech;
    if (voice) u.voice = voice;
    u.rate = Number(S.settings.speechRate) || 0.9;
    tts.cur = u;
    if (el) {
      tts.activeEl = el;
      el.classList.add('speaking');
      if (el.dataset && el.dataset.act === 'test-voice') el.textContent = 'Stop';
    }
    u.onend = u.onerror = function () { if (tts.cur === u) resetSpeakUI(); };
    speechSynthesis.speak(u);
  }
  function speakBtn(text, size, lang) {
    var cls = size === true || size === 'lg' ? ' lg' : size === 'sm' ? ' sm' : size === 'xs' ? ' xs' : '';
    var langAttr = lang ? ' data-speak-lang="' + esc(lang) + '"' : '';
    return '<button class="speak' + cls + '" type="button" data-speak="' + esc(text) + '"' + langAttr + ' aria-label="Pronounce" title="Pronounce">' + icon('volume') + '</button>';
  }

  /* ---------------- theme ---------------- */
  var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  function applyTheme() {
    var t = S.settings.theme;
    if (t === 'system') t = mql && mql.matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'light' ? '#f4f6fa' : '#04060a');
  }
  if (mql && mql.addEventListener) mql.addEventListener('change', applyTheme);

  /* ---------------- data access & split rec/prod progress ---------------- */
  function topicOf(it) { return GT.topic(it.tab, it.topic); }
  function chunkMatches(it, func) {
    return GT.inTab(it, 'chunks') && (func === 'all' || GT.inTopic(it, 'chunks', func)) &&
      (!ui.chunkTag || (it.topics || []).indexOf(ui.chunkTag) >= 0);
  }
  function itemsFor(tab, topic) {
    if (tab === 'chunks') return GT.items.filter(function (it) { return chunkMatches(it, topic); });
    if (tab === 'literature' && topic === 'all') return GT.items.filter(function (it) { return GT.inTab(it, 'literature'); });
    if (tab === 'all') return GT.items.slice();
    return (GT.members[tab + '.' + topic] || []).slice();
  }
  function matchFilter(it, f) {
    if (!f || f === 'all') return true;
    var p = f.split('.');
    return p[1] ? GT.inTopic(it, p[0], p[1]) : GT.inTab(it, p[0]);
  }
  function isKnownCard(c) { return !!(c && (c.state === 'known' || c.state === 'review')); }
  function itemCardsList(id) {
    var it = GT.byId[id];
    if (it && it.type === 'drill') { var dc = S.card(id); return dc ? [dc] : []; }
    var pair = S.cardsForItem(id), out = [];
    if (pair.rec) out.push(pair.rec);
    if (pair.prod) out.push(pair.prod);
    return out;
  }
  function isItemKnown(id) {
    var cs = itemCardsList(id);
    return cs.length > 0 && cs.every(isKnownCard);
  }
  function itemLastActivity(id) {
    var cs = itemCardsList(id);
    return cs.reduce(function (m, c) { return Math.max(m, c.last || c.added || 0); }, 0);
  }
  function matchesDir(dir, dirFilter) {
    if (!dirFilter || dirFilter === 'both') return true;
    if (dirFilter === 'rec') return dir === 'rec';
    if (dirFilter === 'prod') return dir === 'prod' || dir === null; // grammar drills are production
    return true;
  }
  function dueKeys(filter, dirFilter) {
    var eod = endOfToday(), cards = S.data.cards, out = [];
    Object.keys(cards).forEach(function (key) {
      var parsed = GT.parseCardKey(key);
      var c = cards[key], it = GT.byId[parsed.id];
      if (!it || !c || c.state === 'known' || !(c.due <= eod)) return;
      if (!matchesDir(parsed.dir, dirFilter)) return;
      if (matchFilter(it, filter)) out.push(key);
    });
    return out;
  }
  function counts(items) {
    var r = { total: items.length, fresh: 0, learning: 0, known: 0, due: 0, recKnown: 0, prodKnown: 0 }, eod = endOfToday();
    items.forEach(function (it) {
      var cs = itemCardsList(it.id);
      if (!cs.length) r.fresh++;
      else if (cs.every(isKnownCard)) r.known++;
      else r.learning++;
      cs.forEach(function (c) { if (c.state !== 'known' && c.due <= eod) r.due++; });
      if (isKnownCard(S.card(it.id + '#rec'))) r.recKnown++;
      if (isKnownCard(S.card(it.id + '#prod'))) r.prodKnown++;
    });
    return r;
  }
  function stateClass(id) {
    var cs = itemCardsList(id);
    if (!cs.length) return '';
    if (cs.every(function (c) { return c.state === 'known'; })) return 'known';
    if (cs.every(isKnownCard)) return 'review';
    return 'learning';
  }
  function dirStats(dir) {
    var cards = S.data.cards, eod = endOfToday(), r = { total: 0, known: 0, learning: 0, due: 0 };
    Object.keys(cards).forEach(function (key) {
      var parsed = GT.parseCardKey(key);
      if (parsed.dir !== dir) return;
      var c = cards[key], it = GT.byId[parsed.id];
      if (!it || !c) return;
      r.total++;
      if (isKnownCard(c)) r.known++; else r.learning++;
      if (c.state !== 'known' && c.due <= eod) r.due++;
    });
    return r;
  }

  /* ---------------- shell: nav + sidebar ---------------- */
  var userBtn = $('#userBtn');
  $('#menuBtn').innerHTML = icon('menu');
  userBtn.innerHTML = icon('user');
  $('#settingsBtn').innerHTML = icon('sliders');
  function openSidebar() { sideEl.classList.add('open'); scrimEl.classList.add('open'); }
  function closeSidebar() { sideEl.classList.remove('open'); scrimEl.classList.remove('open'); }
  $('#menuBtn').addEventListener('click', function () { sideEl.classList.contains('open') ? closeSidebar() : openSidebar(); });
  scrimEl.addEventListener('click', closeSidebar);
  function pad2(n) { return String(n).padStart(2, '0'); }

  function proSubFor(tab, topic) {
    return (GT.PRO_SUBS || []).find(function (s) { return s.tab === tab && s.topic === topic; }) || null;
  }
  function navGroupFor(tab, p) {
    p = p || [];
    if (tab === 'professional' || tab === 'it' || proSubFor(tab, p[1])) return 'professional';
    if (p[0] === 'item' && GT.byId[p[1]] && (GT.byId[p[1]].tab === 'it' || proSubFor(GT.byId[p[1]].tab, GT.byId[p[1]].topic))) return 'professional';
    if (tab === 'expressions' || tab === 'chunks' || tab === 'literature') return 'expressions';
    if (tab === 'practice') return 'practice';
    if (tab === 'start' || tab === 'about') return 'start';
    if (tab === 'user' || tab === 'review' || tab === 'stats') return 'user';
    return 'language';
  }
  function isNavItemActive(item, tab, p) {
    if (item.tab && item.topic) {
      if (p[0] === 'item' && GT.byId[p[1]]) return GT.byId[p[1]].tab === item.tab && GT.byId[p[1]].topic === item.topic;
      return tab === item.tab && p[1] === item.topic;
    }
    if (item.match) return item.match.indexOf(tab) >= 0 && !proSubFor(tab, p[1]);
    return false;
  }
  function closeNavMenus() {
    document.querySelectorAll('.tab-drop.open').forEach(function (d) { d.classList.remove('open'); });
  }
  function renderNav(active, p) {
    p = p || curPath();
    var group = navGroupFor(active, p);
    userBtn.classList.toggle('active', group === 'user');
    if (active === 'user') userBtn.setAttribute('aria-current', 'page'); else userBtn.removeAttribute('aria-current');
    var brand = $('.brand');
    if (group === 'start') brand.setAttribute('aria-current', 'page'); else brand.removeAttribute('aria-current');
    $('#tabs').innerHTML = GT.NAV.map(function (g, i) {
      var actCls = g.id === group ? ' active' : '';
      if (g.items && g.items.length) {
        return '<div class="tab-drop">' +
          '<a class="tab' + actCls + '" href="' + g.href + '" data-nav-drop="' + g.id + '" aria-haspopup="true"><span class="num">' + pad2(i + 1) + '</span>' + esc(g.label) + '<span class="chev">' + icon('chev') + '</span></a>' +
          '<div class="tab-menu" role="menu">' + g.items.map(function (sub) {
            return '<a class="tab-menu-item' + (isNavItemActive(sub, active, p) ? ' active' : '') + '" href="' + sub.href + '" role="menuitem">' + esc(sub.label) + '</a>';
          }).join('') + '</div></div>';
      }
      return '<a class="tab' + actCls + '" href="' + g.href + '"><span class="num">' + pad2(i + 1) + '</span>' + esc(g.label) + '</a>';
    }).join('');
    $('#bottomnav').innerHTML = GT.NAV.map(function (g) {
      return '<a class="bnav' + (g.id === group ? ' active' : '') + '" href="' + g.href + '">' + icon(g.icon) + '<span>' + esc(g.short) + '</span></a>';
    }).join('');
    renderBrand();
  }

  function todaysItems() {
    var start = new Date(); start.setHours(0, 0, 0, 0);
    var t0 = start.getTime(), cards = S.data.cards, seen = {}, out = [];
    Object.keys(cards).forEach(function (key) {
      var parsed = GT.parseCardKey(key), c = cards[key], it = GT.byId[parsed.id];
      if (!it || it.type === 'drill' || seen[parsed.id]) return;
      if ((c.added || c.known || 0) >= t0) { seen[parsed.id] = true; out.push(it); }
    });
    return out;
  }
  function sidePractice() {
    if (S.settings.hideSidePractice) return '';
    var items = todaysItems(), d = S.data;
    var text, enabled = items.length > 0;
    if (items.length) {
      text = plural(items.length, 'new card') + ' today. Use them in a real conversation before they fade.';
    } else if (Object.keys(d.cards).length) {
      var days = Math.floor((Date.now() - (d.lastPractice || d.created)) / DAY);
      text = days >= 2 ? 'No speaking practice for ' + days + ' days. Learn a few cards, then copy a role-play prompt.' : 'Learn a few new cards today, then copy a role-play prompt for your AI chat.';
    } else {
      text = 'Learn your first cards, then copy a role-play prompt for your AI chat.';
    }
    return '<div class="side-spacer"></div><div class="side-practice"><div class="side-practice-head"><span class="label ice">Practice now</span>' +
      '<button class="side-practice-close" type="button" data-act="hide-side-practice" aria-label="Close" title="Close">' + icon('x') + '</button></div><p>' + esc(text) + '</p>' +
      '<button class="btn small" data-act="copy-today"' + (enabled ? '' : ' disabled') + '>Copy practice prompt →</button></div>';
  }

  function sideLink(href, n, label, right, opts) {
    opts = opts || {};
    return '<a class="side-link' + (opts.active ? ' active' : '') + (opts.dim ? ' dim' : '') + (opts.sub ? ' sub' : '') + '" href="' + href + '">' +
      (n != null ? '<span class="n">' + n + '</span>' : '') + '<span class="nm">' + esc(label) + '</span>' +
      (right !== '' && right != null ? '<span class="ct' + (opts.due ? ' due' : '') + '">' + right + '</span>' : '') + '</a>';
  }

  function renderSidebar(tab, p) {
    var html = '', cur = p[1];
    if (p[0] === 'item') { var it = GT.byId[p[1]]; cur = it ? it.topic : null; }
    var inPro = tab === 'professional' || tab === 'it' || (tab === 'words' && proSubFor('words', cur));
    var inExp = tab === 'expressions' || tab === 'chunks' || tab === 'literature';
    if (inPro) {
      html += '<div class="side-label">Professional</div>';
      var b2Label = false;
      GT.PRO_SUBS.forEach(function (s, i) {
        var st = GT.topic(s.tab, s.topic);
        if (st && st.level === 'b2' && !b2Label) { b2Label = true; html += '<div class="side-label">B2</div>'; }
        var items = itemsFor(s.tab, s.topic), c = counts(items);
        var actSub = (tab === s.tab && cur === s.topic) || (p[0] === 'item' && GT.byId[p[1]] && GT.byId[p[1]].tab === s.tab && GT.byId[p[1]].topic === s.topic);
        html += sideLink('#/' + s.tab + '/' + s.topic, pad2(i + 1), s.name, items.length ? c.known + '/' + items.length : '', { active: actSub, dim: !items.length });
      });
      var px = GT.cfg('proExtra');
      if (px) {
        var workItems = itemsFor(px.tab, px.topic), wc = counts(workItems);
        if (workItems.length) html += '<div class="side-label">' + esc(px.label) + '</div>' +
          sideLink('#/' + px.tab + '/' + px.topic, '—', px.name, wc.known + '/' + workItems.length, { active: tab === px.tab && cur === px.topic });
      }
      html += sidePractice();
    } else if (inExp) {
      html += '<div class="side-label">Expressions</div>';
      GT.TOPICS.expressions.filter(visibleTopic).forEach(function (t, i) {
        var items = itemsFor('expressions', t.id), c = counts(items);
        html += sideLink('#/expressions/' + t.id, pad2(i + 1), t.name, items.length ? c.known + '/' + items.length : '', { active: tab === 'expressions' && cur === t.id, dim: !items.length });
      });
      var litTopics = (GT.TOPICS.literature || []).filter(visibleTopic);
      if (litTopics.length) {
        html += '<div class="side-label">Literary Phrases</div>' +
          sideLink('#/literature/all', '—', 'All literary', itemsFor('literature', 'all').length, { active: tab === 'literature' && cur === 'all' });
        litTopics.forEach(function (t, i) {
          var items = itemsFor('literature', t.id), c = counts(items);
          html += sideLink('#/literature/' + t.id, pad2(i + 1), t.name, items.length ? c.known + '/' + items.length : '', { active: tab === 'literature' && cur === t.id, dim: !items.length });
        });
      }
      html += '<div class="side-label">Chunks</div>' + sideLink('#/chunks/all', '—', 'All chunks', itemsFor('chunks', 'all').length, { active: tab === 'chunks' && cur === 'all' });
      var groupE = null, nE = 0;
      GT.TOPICS.chunks.forEach(function (t) {
        if (t.group !== groupE) { groupE = t.group; nE = 0; html += '<div class="side-label">' + esc(groupE) + '</div>'; }
        nE++;
        var items = itemsFor('chunks', t.id), c = counts(items);
        html += sideLink('#/chunks/' + t.id, pad2(nE), t.name, items.length ? c.known + '/' + items.length : '', { active: tab === 'chunks' && cur === t.id, dim: !items.length });
      });
      html += sidePractice();
    } else if (tab === 'words' || tab === 'grammar') {
      var group = null, n = 0;
      GT.TOPICS[tab].filter(visibleTopic).forEach(function (t) {
        if (t.group !== group) { group = t.group; n = 0; html += '<div class="side-label">' + esc(group.replace(' · Goethe list', ' topics')) + '</div>'; }
        n++;
        var due = dueKeys(tab + '.' + t.id, 'both').length, right, dim;
        if (tab === 'grammar') {
          dim = !GT.grammar[t.id];
          right = due ? due + ' due' : '';
        } else {
          var items = itemsFor(tab, t.id), c = counts(items);
          dim = !items.length;
          right = items.length ? c.known + '/' + items.length : '';
        }
        html += sideLink('#/' + tab + '/' + t.id, pad2(n), t.name, right, { active: cur === t.id, dim: dim, due: tab === 'grammar' && !!due });
      });
      html += sidePractice();
    } else if (tab === 'roots') {
      html += rootsSidebar(p);
    } else if (tab === 'user' || tab === 'review' || tab === 'stats') {
      var dir = S.settings.reviewDirection || 'both';
      var dueTotal = dueKeys('all', dir).length;
      html += '<div class="side-label">User</div>' +
        sideLink('#/user', '01', 'Sync & Backup', '', { active: tab === 'user' }) +
        sideLink('#/review', '02', 'Review', dueTotal || '', { active: tab === 'review', due: !!dueTotal }) +
        sideLink('#/stats', '03', 'Stats', '', { active: tab === 'stats' });
      if (tab === 'review') {
        var f = p[1] || 'all';
        html += '<div class="side-label">Review filter</div>';
        html += sideLink('#/review/all', null, 'Everything', dueTotal || '', { active: f === 'all', due: true });
        ['words', 'it', 'chunks', 'expressions', 'literature', 'grammar', 'roots'].forEach(function (tb) {
          var tabDef = GT.TABS.find(function (x) { return x.id === tb; });
          html += '<div class="side-label">' + esc(tabDef.label) + '</div>';
          html += sideLink('#/review/' + tb, null, 'All ' + tabDef.label, dueKeys(tb, dir).length || '', { active: f === tb, due: true });
          GT.TOPICS[tb].filter(visibleTopic).forEach(function (t) {
            var n2 = dueKeys(tb + '.' + t.id, dir).length;
            var inDeck = Object.keys(S.data.cards).some(function (k) { var x = GT.byId[GT.parseCardKey(k).id]; return x && GT.inTopic(x, tb, t.id); });
            if (n2 || inDeck) html += sideLink('#/review/' + tb + '.' + t.id, null, t.name, n2 || '', { active: f === tb + '.' + t.id, due: true, sub: true });
          });
        });
      }
    }
    sideEl.innerHTML = html;
    sideEl.classList.toggle('hidden', !html);
    $('#menuBtn').classList.toggle('hidden', !html);
  }

  function page(html, cls) {
    mainEl.innerHTML = '<div class="page ' + (cls || '') + '">' + html + '</div>';
  }

  /* Start page (logo): "Before You Start" article on the left, language pair + where-to-go panel on the right.
   * On phones the panel comes first (it is what you need when you tap the logo), the article follows. */
  function startSections() {
    var due = dueKeys('all', 'both').length;
    var nWords = GT.items.filter(function (it) { return GT.inTab(it, 'words'); }).length;
    var nPro = GT.items.filter(function (it) { return GT.inTab(it, 'it'); }).length;
    var nExp = GT.items.filter(function (it) { return GT.inTab(it, 'expressions') || GT.inTab(it, 'chunks') || GT.inTab(it, 'literature'); }).length;
    var nGr = Object.keys(GT.grammar || {}).length, nRoots = Object.keys(GT.roots || {}).length;
    return [
      { href: '#/words', name: 'Words', ct: nWords ? nWords + ' cards' : '', desc: 'Everyday vocabulary by topic, from core B1 lists to B2 discussion themes.' },
      { href: '#/grammar', name: 'Grammar', ct: nGr ? nGr + ' lessons' : '', desc: 'Short lessons with tables, typical mistakes and drills you can send to Review.' },
      { href: '#/roots', name: 'Roots', ct: nRoots ? nRoots + ' families' : '', desc: 'Learn one root, prefix or suffix and recognise a whole family of words.' },
      { href: '#/professional', name: 'Professional', ct: nPro ? nPro + ' cards' : '', desc: 'Language for work: office, IT, infrastructure, security and B2 career themes.' },
      { href: '#/expressions', name: 'Expressions', ct: nExp ? nExp + ' phrases' : '', desc: 'Chunks, idioms, everyday phrases and classic literary lines with breakdowns.' },
      { href: '#/practice', name: 'Practice', ct: '', desc: 'Drills on recognition, recall and word building, plus a role-play prompt for an AI chat.' },
      { href: '#/review', name: 'Review', ct: due ? due + ' due' : '', due: !!due, desc: 'Spaced repetition: come back to the cards you added when they are due.' }
    ];
  }
  function viewStart(requested) {
    var languages = GT.KNOW_ORDER.filter(function (lang) { return GT.ABOUT[lang]; });
    var lang = languages.indexOf(requested) >= 0 ? requested : GT.know;
    if (languages.indexOf(lang) < 0) lang = 'en';
    var about = GT.ABOUT[lang];
    var picker = languages.map(function (code) {
      var active = code === lang;
      return '<a class="seg-tab' + (active ? ' active' : '') + '" href="#/start?lang=' + code + '" data-act="bys-lang" data-code="' + code + '" lang="' + code +
        '"' + (active ? ' aria-current="page"' : '') + '>' + esc(GT.LANGS[code].native) + '</a>';
    }).join('');
    var restoreFocus = document.activeElement && document.activeElement.closest && document.activeElement.closest('.about-languages');
    var panel = '<aside class="start-panel" aria-label="Start learning">' +
      '<div class="start-box"><span class="label ice">Languages</span>' +
      '<div class="start-langs"><label class="lang-field"><span class="label">I know</span>' + langSelect('know') + '</label>' +
      '<span class="start-arrow" aria-hidden="true">→</span>' +
      '<label class="lang-field"><span class="label">I learn</span>' + langSelect('learn') + '</label></div>' +
      '<p class="start-hint">Meanings and explanations follow <b>I know</b>. You can change this any time with the globe button.</p></div>' +
      '<div class="start-box"><span class="label ice">Where to go</span><ul class="start-list">' + startSections().map(function (s) {
        return '<li><a class="start-link" href="' + s.href + '"><span class="start-link-top"><span class="nm">' + esc(s.name) + '</span>' +
          (s.ct ? '<span class="ct' + (s.due ? ' due' : '') + '">' + esc(s.ct) + '</span>' : '') + '<span class="go" aria-hidden="true">→</span></span>' +
          '<span class="desc">' + esc(s.desc) + '</span></a></li>';
      }).join('') + '</ul></div></aside>';
    /* Phones: the article sits above the panel, collapsed to its first paragraph (Read More / Show Less),
     * Desktop ignores all of this via CSS. */
    var expanded = !!ui.bysExpanded;
    var article = '<article class="prose about-article' + (expanded ? '' : ' bys-collapsed') + '" id="bys" lang="' + lang + '"><header class="page-head"><span class="eyebrow" lang="en">Before You Start<span class="bys-must"> · Must Read</span></span>' +
      '<nav class="seg-tabs about-languages" lang="en" aria-label="Article language">' + picker + '</nav></header>' +
      '<h1 class="about-title">' + esc(about.title) + '</h1><div class="about-body" id="bysBody">' + about.body + '</div>' +
      '<div class="bys-controls" lang="en"><button class="bys-btn bys-toggle" type="button" data-act="bys-toggle" aria-controls="bysBody" aria-expanded="' + expanded + '">' +
      (expanded ? 'Show Less ↑' : 'Read More ↓') + '</button></div></article>';
    var authorHref = location.protocol === 'file:' ? '../index.html' : '../';
    var author = '<footer class="start-author"><a class="btn ghost" href="' + authorHref + '">About the author <span aria-hidden="true">→</span></a></footer>';
    page('<div class="start-grid">' + panel + article + '</div>' + author, 'start');
    if (restoreFocus) $('.about-languages [aria-current="page"]', mainEl).focus({ preventScroll: true });
  }

  /* ---------------- reminders ---------------- */
  function notice(ic, html, cls) {
    return '<div class="notice ' + (cls || '') + '">' + icon(ic) + '<div class="grow">' + html + '</div></div>';
  }
  function reminders() {
    var d = S.data, n = Object.keys(d.cards).length, out = '';
    if (n) {
      var since = d.lastPractice || d.created;
      var days = Math.floor((Date.now() - since) / DAY);
      if (days >= 2) {
        out += notice('chat', (d.lastPractice ? 'It’s been <b>' + days + ' days</b> since you last practised speaking.' : 'You haven’t practised speaking with your words yet.') +
          ' Open a topic and use <b>Practice now</b> to get a ready-made role-play prompt for your AI chat.');
      }
    }
    if (n >= 20 && (!d.lastExport || Date.now() - d.lastExport > 14 * DAY)) {
      out += notice('download', 'Your progress is stored only in this browser. <button class="link-btn" data-act="export">Export a backup</button>' +
        (d.lastExport ? ' (last one: ' + fmtDate(d.lastExport) + ').' : '.'), 'subtle');
    }
    if (!S.storageOk()) out += notice('info', 'This browser is blocking local storage, so progress can’t be saved. Try another browser or host the app.', 'subtle');
    return out;
  }

  /* ---------------- practice prompt ---------------- */
  function wordLine(it) {
    if (it.type === 'chunk') return '- ' + plain(it.t) + ' (' + plain(meaningOf(it)) + ')';
    var s = '- ' + (it.article ? it.article + ' ' : '') + it.t;
    if (it.gov) s += ' (' + it.gov + ')';
    return s + ' (' + meaningOf(it) + ')';
  }
  function buildPrompt(o) {
    var words = o.items.filter(function (i) { return i.type === 'word'; });
    var chunks = o.items.filter(function (i) { return i.type === 'chunk'; });
    var H = function (k) { return GT.hint('prompt.' + k, { LVL: o.b2 ? 'B1–B2' : (GT.cfg('levelName') || 'B1') }); };
    var L = [];
    L.push(H('intro'));
    L.push('');
    L.push(H('topic') + o.topic);
    L.push(H('scenario') + (o.scenario || H('scenarioDefault')));
    if (words.length) { L.push(''); L.push(H('words')); words.forEach(function (w) { L.push(wordLine(w)); }); }
    if (chunks.length) { L.push(''); L.push(H('chunks')); chunks.forEach(function (c) { L.push(wordLine(c)); }); }
    L.push('');
    L.push(H('rules'));
    ['r1', 'r2', 'r3', 'r4', 'r5'].forEach(function (k) { L.push(H(k)); });
    L.push('');
    L.push(H('start'));
    return L.join('\n');
  }
  function practicePanel(o, title) {
    ui.lastPrompt = buildPrompt(o);
    return '<section class="practice"><span class="label ice">Practice now</span>' +
      '<h3>' + esc(title || 'You’ve learned these. Now go use them in conversation.') + '</h3>' +
      '<p>Copy this prompt into your AI chat. It sets up a role-play on <b>' + esc(o.topic) + '</b> and makes you use ' + plural(o.items.length, 'item') + ', with short corrections at the end of each exchange.</p>' +
      '<button class="btn primary" data-act="copy-prompt">Copy practice prompt →</button>' +
      '<details><summary>Show prompt</summary><pre>' + esc(ui.lastPrompt) + '</pre></details>' +
      '</section>';
  }
  function relatedChunks(topicId) {
    return GT.items.filter(function (it) { return it.type === 'chunk' && (it.topics || []).indexOf(topicId) >= 0; });
  }
  function practiceFromItems(items, fallbackTopicId) {
    var freq = {};
    items.forEach(function (it) { var k = it.tab + '.' + it.topic; freq[k] = (freq[k] || 0) + 1; });
    var top = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; })[0] || '';
    var tp = top.split('.'), t = GT.topic(tp[0], tp[1]) || GT.topic('words', fallbackTopicId);
    var extra = [];
    if (t && tp[0] !== 'chunks') {
      var have = items.filter(function (i) { return i.type === 'chunk'; }).length;
      if (have < 3) extra = shuffle(relatedChunks(t.id).filter(function (c) { return items.indexOf(c) < 0; })).slice(0, 4 - have);
    }
    return {
      topic: t ? t.name : 'mixed topics',
      scenario: t ? GT.lx(t, 'scenario') || '' : '',
      b2: t && t.level === 'b2',
      items: items.slice(0, 15).concat(extra)
    };
  }

  /* ---------------- card rendering ---------------- */
  var USAGE_LABEL = { english: 'English word', german: 'German word', both: 'Both' };
  var RU_LABEL = { loan_in_russian: 'Loan in Russian', internationalism: 'Internationalism', shared_ancient_root: 'Shared root', false_friend: 'False friend' };
  function transparencyOf(it) { return it.transparency || (it.lost ? 'opaque' : ''); }
  function tooltipBadgeHTML(opts) {
    var exHtml = opts.examples && opts.examples.length ? '<ul class="mtag-ex">' + opts.examples.map(function (ex) {
      return '<li><em lang="' + GT.learn + '">' + esc(ex.t) + '</em> — <span lang="' + GT.know + '">' + esc(ex.tr || trOf(ex)) + '</span></li>';
    }).join('') + '</ul>' : '';
    return '<span class="mtag-wrap">' +
      '<button class="tag mtag ' + opts.cls + '" type="button" data-act="mtag-toggle" aria-expanded="false" aria-describedby="' + esc(opts.tid) + '" lang="' + GT.know + '">' +
        esc(opts.label) + '<span class="mtag-q" aria-hidden="true">?</span>' +
      '</button>' +
      '<span class="mtag-tip" id="' + esc(opts.tid) + '" role="tooltip" lang="' + GT.know + '">' +
        '<span class="mtag-tip-head"><strong>' + esc(opts.heading) + '</strong>' +
        '<button class="mtag-close" type="button" data-act="mtag-close" aria-label="Close">' + icon('x') + '</button></span>' +
        '<span class="mtag-tip-def">' + esc(opts.summary) + '</span>' +
        '<span class="mtag-tip-body">' + esc(opts.explanation) + '</span>' +
        exHtml +
      '</span></span>';
  }
  function meaningBadgeHTML(it) {
    var m = GT.meaningInfo(it);
    if (!m) return '';
    return tooltipBadgeHTML({
      tid: 'mtip-' + it.id,
      cls: m.cls,
      label: m.label,
      heading: m.heading,
      summary: m.summary,
      explanation: m.explanation,
      examples: m.examples
    });
  }
  function rootOf(it) { return it && it.rootId && GT.roots[it.rootId] ? GT.roots[it.rootId] : null; }
  function rootName(r) { return r ? (r.label || String(r.t || r.verb || r.id).toUpperCase()) : ''; }
  function opaqueRootBadgeHTML(it) {
    if (!it || !it.rootId || transparencyOf(it) !== 'opaque') return '';
    var r = rootOf(it);
    var meta = GT.OPAQUE_ROOT_META;
    var expl = r
      ? GT.hint('opaque', { W: it.t, M: meaningOf(it), B: r.t || r.verb, BM: GT.gl(r) })
      : GT.hint('opaqueGeneric', { W: it.t });
    return tooltipBadgeHTML({
      tid: 'otip-' + it.id,
      cls: 'gold',
      label: meta.label,
      heading: meta.heading,
      summary: meta.summary,
      explanation: expl,
      examples: (it.examples && it.examples[0]) ? [{ t: plain(it.examples[0].t), tr: trOf(it.examples[0]) }] : []
    });
  }
  function allMeaningBadgesHTML(it) {
    return meaningBadgeHTML(it) + opaqueRootBadgeHTML(it);
  }
  function closeAllTooltips() {
    document.querySelectorAll('.mtag-wrap.open').forEach(function (w) {
      w.classList.remove('open');
      var btn = w.querySelector('[data-act="mtag-toggle"]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }
  function positionTooltip(wrap) {
    var tip = wrap && wrap.querySelector('.mtag-tip');
    if (!tip) return;
    tip.classList.remove('below');
    tip.style.left = '';
    tip.style.right = '';
    tip.style.top = '';
    tip.style.bottom = '';
    var vw = document.documentElement.clientWidth || window.innerWidth;
    var vh = window.innerHeight;
    var wr = wrap.getBoundingClientRect();
    var th = tip.offsetHeight || 220;
    var container = wrap.closest('.word-main, .rdetail, .recall, .review-col');
    var hwRow = container && container.querySelector('.hw-row');
    var hwRect = hwRow ? hwRow.getBoundingClientRect() : null;

    if (vw <= 860) {
      var topMin = 70;
      var botMax = vh - 80;
      var desiredTop = (hwRect && hwRect.bottom > wr.bottom) ? Math.round(hwRect.bottom + 10) : Math.round(wr.bottom + 10);
      var top = Math.max(topMin, Math.min(desiredTop, botMax - th));
      tip.style.top = top + 'px';
      return;
    }

    var tw = Math.min(340, vw - 24);
    if (wr.top - th - 14 >= 76) {
      tip.style.bottom = 'calc(100% + 10px)';
    } else if (hwRect && hwRect.bottom > wr.bottom && hwRect.top < wr.bottom + th + 24) {
      tip.classList.add('below');
      tip.style.top = Math.round(hwRect.bottom - wr.top + 10) + 'px';
    } else {
      tip.classList.add('below');
      tip.style.top = 'calc(100% + 10px)';
    }

    var shift = 0;
    if (wr.left + tw > vw - 12) shift = (vw - 12) - (wr.left + tw);
    if (wr.left + shift < 12) shift = 12 - wr.left;
    tip.style.left = Math.round(shift) + 'px';
  }
  function levelLabel(it) {
    if (it.tab === 'literature') return 'Literary Phrases';
    if (it.level && typeof it.level === 'string' && /^[ABC][12]/i.test(it.level)) return it.level.toUpperCase();
    var t = topicOf(it);
    if (t && t.level === 'b2' && (it.tab === 'words' || it.tab === 'it')) return 'B2';
    if (it.tab === 'words') return GT.cfg('levelName') || 'B1';
    return it.tab === 'it' ? 'Professional' : it.tab === 'chunks' ? 'Chunks' : it.tab === 'expressions' ? 'Expressions' : it.tab === 'roots' ? 'Roots' : 'Grammar';
  }
  function headword(it) {
    if (it.type === 'chunk') return rich(it.t);
    return (it.article ? '<span class="a-' + it.article + '">' + it.article + '</span> ' : '') + esc(it.t);
  }
  function hwSize(w) { return w.length > 16 ? ' xlong' : w.length > 10 ? ' long' : ''; }
  function meaningOf(it) { return GT.gl(it); }
  function trOf(e) { return e ? GT.gl(e) : ''; }
  /** Marker shown when a gloss/explanation falls back to another language (missing translation). */
  function fbTag(lang) {
    if (!lang || lang === GT.know) return '';
    return '<span class="fb-tag" title="' + esc(GT.hint('missing')) + '">' + esc((GT.LANGS[lang] || {}).short || lang) + '</span>';
  }
  function lxText(o, f) { var v = GT.lx(o, f); return v == null ? '' : v; }
  function litMeta(it) {
    var lit = it.lit;
    return { author: lxText(lit, 'author'), work: lxText(lit, 'work'), workOrig: lit.workOrig, year: lit.year };
  }
  function litBylineHTML(it, cls) {
    if (!it.lit) return '';
    var src = litMeta(it);
    return '<p class="' + (cls || 'lit-byline') + '" lang="' + GT.know + '">' + esc(src.author) + ' · ' + esc(src.work) + ' (' + esc(src.year) + ')</p>';
  }
  function litSearchTerms(it) {
    if (!it.lit) return '';
    return ['author', 'authorOrig', 'work', 'workOrig', 'year'].map(function (key) {
      var val = it.lit[key];
      return val && typeof val === 'object' ? Object.keys(val).map(function (lang) { return val[lang]; }).join(' ') : val;
    }).join(' ');
  }
  function glossText(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) return v[GT.know] || v[GT.cfg('baseKnown', 'ru')] || '';
    return v || '';
  }
  var GENDER_TAG = { m: ['der', 'm.'], f: ['die', 'f.'], n: ['das', 'n.'], pl: ['outline', 'pl.'] };
  function plainHead(it) { return it.type === 'chunk' ? plain(it.t) : (it.article ? it.article + ' ' : '') + it.t; }
  function articleChip(s) {
    var m = /^(der|die|das)\s+(.+)$/.exec(s);
    return m ? '<span class="a-' + m[1] + '">' + m[1] + '</span> ' + esc(m[2]) : esc(s);
  }
  function wordTags(it, opts) {
    opts = opts || {};
    var h = '<div class="word-tags">';
    if (it.article) h += '<span class="tag ' + it.article + '">' + it.article + '</span>';
    else if (it.gender && GENDER_TAG[it.gender]) h += '<span class="tag ' + GENDER_TAG[it.gender][0] + '">' + GENDER_TAG[it.gender][1] + '</span>';
    else if (it.pos) h += '<span class="tag outline">' + esc(it.pos) + '</span>';
    if (it.aspect) h += '<span class="tag dim">' + esc(it.aspect === 'pf' ? 'perfective' : it.aspect === 'impf' ? 'imperfective' : it.aspect) + '</span>';
    if (it.pos === 'noun' && (it.article || it.gender || it.plural)) h += '<span class="mono-muted upper">' + (it.plural ? 'Pl. ' + esc(it.plural) : 'No plural') + '</span>';
    if (it.forms) h += '<span class="forms">' + [it.forms.praes, it.forms.praet, it.forms.perf].filter(Boolean).map(esc).join('<span class="sep">·</span>') + '</span>';
    if (it.gov) h += '<span class="gov">' + esc(it.gov) + '</span>';
    if (it.region) h += '<span class="tag dim">' + esc(it.region) + ' only</span>';
    if (it.sep) h += '<span class="tag dim">' + esc(it.sep) + '</span>';
    if (it.stress) h += '<span class="mono-muted">' + esc(it.stress) + '</span>';
    if (it.level && /^[ABC][12]/i.test(it.level) && it.tab !== 'words') h += '<span class="tag dim">' + esc(it.level) + '</span>';
    if (!opts.hideRu) {
      h += allMeaningBadgesHTML(it);
    }
    return h + '</div>';
  }
  function meanings(it) {
    var fmt = it.type === 'chunk' ? rich : esc;
    return '<p class="mean-en" lang="' + GT.glLang(it) + '">' + fmt(meaningOf(it)) + fbTag(GT.glLang(it)) + '</p>';
  }
  function exampleItemHTML(e, hideTr) {
    return '<li class="ex"><div class="grow">' +
      (e.sense && !hideTr ? '<span class="ex-sense" lang="' + GT.know + '">' + esc(lxText(e, 'sense')) + '</span>' : '') +
      '<p class="ex-de" lang="' + GT.learn + '">' + rich(e.t) + '</p>' +
      (!hideTr && trOf(e) ? '<p class="ex-tr" lang="' + GT.glLang(e) + '">' + esc(trOf(e)) + fbTag(GT.glLang(e)) + '</p>' : '') +
      '</div>' + speakBtn(e.t) + '</li>';
  }
  function examplesHTML(list) {
    if (!list || !list.length) return '';
    return '<ul class="examples">' + list.map(function (e) { return exampleItemHTML(e, false); }).join('') + '</ul>';
  }
  function segClass(p) {
    if (/^-.+-$/.test(p)) return 'link';
    if (/-$/.test(p)) return 'pre';
    if (/^-/.test(p)) return 'suf';
    return 'root';
  }
  function structureBox(it) {
    var segs, dl = '';
    if (it.parts && it.parts.length) {
      segs = it.parts.map(function (x) { return '<span class="seg ' + segClass(x[0]) + '">' + esc(x[0].replace(/^-|-$/g, '')) + '</span>'; }).join('');
      if (it.parts.some(function (x) { return glossText(x[1]); })) dl = '<dl class="parts">' + it.parts.map(function (x) { return '<dt class="' + segClass(x[0]) + '">' + esc(x[0]) + '</dt><dd>' + esc(glossText(x[1])) + '</dd>'; }).join('') + '</dl>';
    } else if (it.morph && it.morph.indexOf('-') >= 0) {
      segs = it.morph.split('-').map(function (x) { return '<span class="seg root">' + esc(x) + '</span>'; }).join('');
    } else return '';
    var sn = lxText(it, 'structNote');
    return '<div class="box"><span class="label">Structure</span><div class="segs" lang="' + GT.learn + '">' + segs + '</div>' + dl + (sn ? '<p class="note muted" style="margin-top:14px">' + esc(sn) + '</p>' : '') + '</div>';
  }
  function familyBox(it) {
    if (!it.family || !it.family.length) return '';
    return '<div class="box"><span class="label">Word family' + (it.root ? ' · ' + esc(it.root) : '') + '</span><div class="fam" lang="' + GT.learn + '">' +
      it.family.map(function (f) { return '<span class="chip chip-speak"><span>' + articleChip(f) + '</span>' + speakBtn(f, 'xs') + '</span>'; }).join('') + '</div></div>';
  }
  function ruLinkBox(it) {
    if (GT.know !== 'ru') return '';
    if (it.ru_link && it.ru_link.text) {
      return '<div class="box navy rulink"><div class="box-head"><span class="label">RU link</span><span class="tag ' + (it.ru_link.type === 'false_friend' ? 'gold' : 'outline') + '">' + (RU_LABEL[it.ru_link.type] || esc(it.ru_link.type)) + '</span></div><p>' + esc(it.ru_link.text) + '</p></div>';
    }
    if (!GT.feature('ruLink')) return '';
    return '<div class="box dashed rulink empty"><span class="label">RU link</span><p>No well-established connection. Left empty on purpose.</p></div>';
  }
  function linkWordHTML(disp, lang) {
    if (lang === 'de' && /^(der|die|das)\s+/.test(disp)) return articleChip(disp);
    if (disp.indexOf('[') >= 0) return rich(disp);
    return esc(disp);
  }
  function linksBox(it) {
    var groups = GT.linksFor ? GT.linksFor(it.id, GT.learn) : [];
    if (!groups.length) return '';
    var order = GT.LEARN_ORDER || ['de', 'en', 'ru'];
    var inner = groups.map(function (g) {
      var rows = order.filter(function (l) { return l !== GT.learn && g.entries[l]; }).map(function (l) {
        var e = g.entries[l];
        var loadedIt = GT.packs[l] && GT.packs[l].byId && GT.packs[l].byId[e.id];
        var disp = e.text || (loadedIt ? plainHead(loadedIt) : e.id);
        var L = GT.LANGS[l] || { short: l.toUpperCase(), name: l };
        return '<div class="xlink-row">' +
          '<a class="xlink-item" href="#/item/' + encodeURIComponent(e.id) + '" data-act="open-link" data-lang="' + esc(l) + '" data-id="' + esc(e.id) + '" title="Open in ' + esc(L.name) + ' pack">' +
            '<span class="tag outline xlink-lang">' + esc(L.short) + '</span>' +
            '<span class="xlink-word" lang="' + esc(l) + '">' + linkWordHTML(disp, l) + '</span>' +
          '</a>' +
          speakBtn(plain(disp), 'sm', l) +
        '</div>';
      }).join('');
      var note = g.note ? '<p class="note muted xlink-note" lang="' + GT.lxLang(g, 'note') + '">' + esc(lxText(g, 'note')) + fbTag(GT.lxLang(g, 'note')) + '</p>' : '';
      return '<div class="xlink-group">' + rows + note + '</div>';
    }).join('');
    return '<div class="box xlinks"><span class="label">In other languages</span>' + inner + '</div>';
  }
  function levelBox(it) {
    if (!it.cefrInfo) return '';
    var c = it.cefrInfo;
    return '<details class="box"><summary class="label">Level & sources</summary><div style="margin-top:12px">' +
      '<p class="note muted">' + esc(c.summary) + '</p>' +
      (c.sources || []).map(function (src) { return '<p class="mono-muted" style="font-size:12px;margin-top:8px">' + (src.url ? '<a href="' + esc(src.url) + '" target="_blank" rel="noopener">' + esc(src.title || src.url) + '</a>' : esc(src.title)) + '</p>'; }).join('') +
      '</div></details>';
  }
  function crumbsHTML(left, pct) {
    return '<div class="crumbs"><span class="eyebrow">' + left + '</span>' +
      (pct != null ? '<div class="crumb-progress"><div class="track"><i style="width:' + pct + '%"></i></div><span>' + pct + '%</span></div>' : '') + '</div>';
  }
  function itemCrumb(it, extra) {
    var t = topicOf(it);
    return esc(levelLabel(it)) + ' · <a href="#/' + it.tab + '/' + it.topic + '">' + esc(t ? t.name : it.topic) + '</a>' + (extra ? ' · ' + extra : '');
  }

  function literatureSide(it) {
    var src = litMeta(it), lit = it.lit;
    var original = src.workOrig && src.workOrig !== src.work ? '<p class="lit-orig" lang="' + GT.learn + '">' + esc(src.workOrig) + '</p>' : '';
    var quote = '<div class="lit-quote-row"><blockquote class="lit-quote" lang="' + GT.learn + '">' + rich(lit.quote) + '</blockquote>' + speakBtn(lit.quote, 'sm') + '</div>';
    var parts = (it.parts || []).map(function (part) {
      return '<dt lang="' + GT.learn + '">' + esc(part[0]) + '</dt><dd lang="' + GT.know + '">' + esc(glossText(part[1])) + '</dd>';
    }).join('');
    return '<div class="box navy lit-box"><span class="label">Source</span><p class="lit-src-author" lang="' + GT.know + '">' + esc(src.author) + '</p>' +
      '<p class="lit-src-work" lang="' + GT.know + '">' + esc(src.work) + ' · ' + esc(src.year) + '</p>' + original + quote +
      '<p class="note" lang="' + GT.know + '">' + esc(lxText(lit, 'context')) + '</p></div>' +
      (parts ? '<div class="box"><span class="label">Key words &amp; grammar</span><dl class="parts lit-parts">' + parts + '</dl></div>' : '') +
      '<div class="box"><span class="label">Tone &amp; usage</span><p class="note muted" lang="' + GT.know + '">' +
      esc(lxText(lit, 'tone') || GT.hint('register.' + (it.register || 'neutral'))) + '</p></div>' + linksBox(it);
  }

  /** Full word/chunk view. actions = HTML placed under the note */
  function renderItem(it, actions) {
    var main = '', side = '';
    if (it.type === 'chunk') {
      var fn = GT.topic(it.tab, it.topic), lit = it.lit;
      main += '<div class="word-tags"><span class="tag outline">' + esc(it.register || 'neutral') + '</span><span class="mono-muted upper">' + esc(fn ? fn.name : it.topic) + '</span>' +
        (lit && it.level ? '<span class="tag dim">' + esc(it.level) + '</span>' : '') + meaningBadgeHTML(it) + '</div>';
      main += '<div class="hw-row"><h1 class="hw chunk" lang="' + GT.learn + '">' + rich(it.t) + '</h1>' + speakBtn(it.t, true) + whyBtn(it) + '</div>';
      main += litBylineHTML(it) + meanings(it);
      if (lit) main += '<hr class="rule"><span class="label">Breakdown</span><p class="lit-literal" lang="' + GT.know + '">' + esc(lxText(lit, 'literal')) + '</p>' +
        '<p class="note lit-sub" lang="' + GT.know + '">' + esc(lxText(lit, 'breakdown')) + '</p>';
      if (it.examples && it.examples.length) main += '<hr class="rule"><span class="label">' + (lit ? 'In use today' : 'Examples') + '</span><div style="margin-top:18px">' + examplesHTML(it.examples) + '</div>';
      if (it.variations && it.variations.length) {
        main += '<hr class="rule"><span class="label">Variations</span><ul class="examples" style="margin-top:18px">' + it.variations.map(function (v) {
          var vt = typeof v === 'string' ? v : v.t, vtr = typeof v === 'string' ? '' : trOf(v);
          return '<li class="ex"><div class="grow"><p class="ex-de" lang="' + GT.learn + '">' + rich(vt) + '</p>' + (vtr ? '<p class="ex-tr" lang="' + GT.glLang(v) + '">' + esc(vtr) + '</p>' : '') + '</div>' + speakBtn(vt) + '</li>';
        }).join('') + '</ul>';
      }
      if (it.note) main += '<hr class="rule"><span class="label">Note</span><p class="note" style="margin-top:14px" lang="' + GT.lxLang(it, 'note') + '">' + esc(lxText(it, 'note')) + fbTag(GT.lxLang(it, 'note')) + '</p>';
      if (lit) side += literatureSide(it);
      else {
        side += '<div class="box"><span class="label">Register</span><p class="note muted">' + esc(GT.hint('register.' + (it.register || 'neutral')) || GT.hint('register.neutral')) + '</p></div>';
        var tags = (it.topics || []).map(function (id) { var t = GT.anyTopic(id); return t ? t.topic.name : null; }).filter(Boolean);
        side += linksBox(it) + levelBox(it);
        if (tags.length) side += '<div class="box"><span class="label">Useful for</span><div class="fam">' + tags.map(function (t) { return '<span class="chip small">' + esc(t) + '</span>'; }).join('') + '</div></div>';
      }
    } else {
      main += wordTags(it);
      main += '<div class="hw-row"><h1 class="hw' + hwSize(it.t) + '" lang="' + GT.learn + '">' + esc(it.t) + '</h1>' + speakBtn(plainHead(it), true) + whyBtn(it) + '</div>';
      main += meanings(it) + parallelLine(it);
      if (it.usage && it.usage.says) main += '<div class="usage"><span class="tag ' + esc(it.usage.says) + '">' + (USAGE_LABEL[it.usage.says] || esc(it.usage.says)) + '</span><p>' + esc(lxText(it.usage, 'note')) + '</p></div>';
      if (it.examples && it.examples.length) main += '<hr class="rule"><span class="label">Examples</span><div style="margin-top:18px">' + examplesHTML(it.examples) + '</div>';
      if (it.note) main += '<hr class="rule"><span class="label">Note</span><p class="note" style="margin-top:14px" lang="' + GT.lxLang(it, 'note') + '">' + esc(lxText(it, 'note')) + fbTag(GT.lxLang(it, 'note')) + '</p>';
      side += structureBox(it) + familyBox(it) + ruLinkBox(it) + linksBox(it) + levelBox(it);
    }
    if (actions) main += actions;
    return '<div class="word-layout"><section class="word-main">' + main + '</section><aside class="word-side">' + side + '</aside></div>';
  }

  /* ---------------- views: landing / topic / browse / item ---------------- */
  function intro(tab) { var i = GT.cfg('intro') || {}; return esc(i[tab] || ''); }
  function viewProfessionalLanding() {
    var h = '<header class="page-head"><span class="eyebrow">02 · Professional</span><h1>Professional</h1><p class="lead">' + intro('it') + '</p></header>' + reminders();
    h += '<h3 class="section-title">Topics</h3><div class="grid">' + GT.PRO_SUBS.map(function (s, i) {
      var items = itemsFor(s.tab, s.topic), c = counts(items), pct = c.total ? Math.round(c.known / c.total * 100) : 0;
      return '<a class="tile' + (c.total ? '' : ' empty') + '" href="#/' + s.tab + '/' + s.topic + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + (c.total ? c.known + '/' + c.total + (c.due ? ' · ' + c.due + ' due' : '') : 'soon') + '</span></div>' +
        '<h4>' + esc(s.name) + '</h4><p>' + esc(s.desc) + '</p><div class="track"><i style="width:' + pct + '%"></i></div></a>';
    }).join('') + '</div>';
    h += '<div class="actions"><a class="btn primary" href="#/practice?scope=professional">Practice Professional →</a></div>';
    page(h);
  }
  function viewExpressionsLanding() {
    var h = '<header class="page-head"><span class="eyebrow">03 · Expressions</span><h1>Expressions</h1><p class="lead">' + intro('expressions') + '</p></header>' + reminders();
    var expTopics = GT.TOPICS.expressions.filter(visibleTopic);
    h += '<h3 class="section-title">Idioms & Everyday Phrases</h3><div class="grid">' +
      expTopics.map(function (t, i) { return tile('expressions', t, i + 1); }).join('') +
      expressionSectionTile('chunks', 'Chunks', expTopics.length + 1) +
      expressionSectionTile('literature', 'Literary Phrases', expTopics.length + 2) + '</div>';
    h += '<div class="actions actions-split"><a class="btn primary" href="#/practice?scope=expressions">Practice Expressions →</a>' +
      luckyBtn('phrases', 'Idioms & phrases') + luckyBtn('chunks', 'Chunks') + '</div>';
    // Your phrases (already in the deck) first, then the ones you haven't met yet.
    var all = expressionPool();
    var mine = all.filter(function (it) { return S.hasAnyCard(it.id); }), fresh = all.filter(function (it) { return !S.hasAnyCard(it.id); });
    if (mine.length) h += '<h3 class="section-title">Your phrases · ' + mine.length + '</h3>' + tilesHTML(mine, 'mineGrid');
    if (fresh.length) h += '<h3 class="section-title">New phrases · ' + fresh.length + '</h3>' + tilesHTML(fresh, 'newGrid');
    page(h);
  }
  function expressionSectionTile(tab, label, n) {
    var c = counts(itemsFor(tab, 'all')), pct = c.total ? Math.round(c.known / c.total * 100) : 0;
    return '<a class="tile" href="#/' + tab + '"><div class="tile-top"><span>' + pad2(n) + '</span><span class="ct">' + c.known + '/' + c.total + '</span></div><h4>' + label + '</h4><p>' + intro(tab) + '</p><div class="track"><i style="width:' + pct + '%"></i></div></a>';
  }
  /* "I'm feeling lucky", phrased in the language being learned. */
  var LUCKY = { de: 'Glück!', en: 'Feeling lucky', ru: 'Наудачу' };
  function luckyBtn(kind, label) {
    var name = { chunks: 'chunk', literature: 'quote', phrases: 'idiom or everyday phrase' };
    return '<button class="btn btn-lucky" data-act="lucky" data-v="' + kind + '" title="Open a random ' + name[kind] + '">' +
      '<span class="lucky-tag" lang="' + GT.learn + '">' + (LUCKY[GT.learn] || 'Feeling lucky') + '</span>' +
      '<span class="lucky-sep" aria-hidden="true">·</span>' +
      '<span class="lucky-lbl">' + esc(label) + '</span></button>';
  }
  /** Return a section of Expressions, or all sections without duplicates. */
  function expressionPool(kind) {
    var seen = {}, out = [];
    if (!kind || kind === 'phrases') GT.TOPICS.expressions.filter(visibleTopic).forEach(function (t) { itemsFor('expressions', t.id).forEach(add); });
    if (!kind || kind === 'chunks') itemsFor('chunks', 'all').forEach(add);
    if (!kind || kind === 'literature') itemsFor('literature', 'all').forEach(add);
    function add(it) { if (it && !seen[it.id]) { seen[it.id] = 1; out.push(it); } }
    return out;
  }
  function tagFilter() {
    var groups = [['words', 'Words'], ['it', 'IT & Security']];
    var opts = '<option value="">Any situation</option>';
    groups.forEach(function (g) {
      var list = GT.TOPICS[g[0]].filter(function (t) { return relatedChunks(t.id).length; });
      if (!list.length) return;
      opts += '<optgroup label="' + g[1] + '">' + list.map(function (t) {
        return '<option value="' + t.id + '"' + (ui.chunkTag === t.id ? ' selected' : '') + '>' + esc(t.name) + ' (' + relatedChunks(t.id).length + ')</option>';
      }).join('') + '</optgroup>';
    });
    return '<div class="box" style="margin-bottom:32px"><div class="setting"><div><div class="lbl">Show phrases for</div><div class="help">Filters every chunk list and Learn session.</div></div><select data-act="chunktag" aria-label="Filter chunks by topic">' + opts + '</select></div></div>';
  }
  function tile(tab, t, n) {
    var items = itemsFor(tab, t.id), c = counts(items), pct = c.total ? Math.round(c.known / c.total * 100) : 0;
    return '<a class="tile' + (c.total ? '' : ' empty') + '" href="#/' + tab + '/' + t.id + '"><div class="tile-top"><span>' + pad2(n) + '</span><span class="ct">' + (c.total ? c.known + '/' + c.total + (c.due ? ' · ' + c.due + ' due' : '') : 'soon') + '</span></div>' +
      '<h4>' + esc(t.name) + '</h4>' + (t.desc ? '<p>' + esc(t.desc) + '</p>' : '') + '<div class="track"><i style="width:' + pct + '%"></i></div></a>';
  }
  function viewLanding(tab) {
    var tdef = GT.TABS.find(function (x) { return x.id === tab; });
    var eyebrow = tab === 'literature' ? '03 · Expressions · Literary Phrases' : pad2(GT.TABS.indexOf(tdef) + 1) + ' · Overview';
    var h = '<header class="page-head"><span class="eyebrow">' + eyebrow + '</span><h1>' + esc(tdef.label) + '</h1><p class="lead">' + intro(tab) + '</p></header>' + reminders();
    if (tab === 'literature') h += '<div class="actions actions-split"><a class="btn primary" href="#/practice?scope=literature">Practice Literary Phrases →</a>' +
      '<a class="btn" href="#/literature/all/browse">Browse all</a><button class="btn" type="button" data-act="lucky" data-v="literature">Random quote</button></div>';
    if (tab === 'chunks') h += tagFilter();
    if (tab === 'words') h += '<div class="actions-row" style="margin-bottom:28px"><a class="btn" href="#/vocabulary">Search the whole catalogue (' + GT.items.length + ')</a></div>';
    var group = null, n = 0, list = GT.TOPICS[tab].filter(visibleTopic);
    list.forEach(function (t, i) {
      if (t.group !== group) {
        if (group !== null) h += '</div>';
        group = t.group; n = 0;
        h += '<h3 class="section-title">' + esc(group || '') + '</h3><div class="grid">';
      }
      h += tile(tab, t, ++n);
      if (i === list.length - 1) h += '</div>';
    });
    page(h);
  }
  function findTopic(tab, id) {
    if (tab === 'chunks' && id === 'all') return { id: 'all', name: 'All chunks', desc: 'Every phrase, across all functions.' };
    if (tab === 'literature' && id === 'all') return { id: 'all', name: 'All literary phrases', desc: 'Every quote, across all five themes.' };
    if (tab === 'all') return { id: 'all', name: 'Whole catalogue', desc: 'Every word and phrase of this language, searchable.' };
    return GT.topic(tab, id);
  }
  function reviewFilterFor(tab, id) { return id === 'all' && (tab === 'chunks' || tab === 'literature') ? tab : tab + '.' + id; }
  function topicCrumb(tab, t, extra) {
    var tdef = GT.TABS.find(function (x) { return x.id === tab; }) || { label: 'Catalogue' };
    var lvl = tab === 'words' ? (t.level === 'b2' ? 'B2' : (GT.cfg('levelName') || 'B1')) : tdef.label;
    return '<a href="#/' + tab + '">' + esc(lvl) + '</a> · ' + (extra ? '<a href="#/' + tab + '/' + t.id + '">' + esc(t.name) + '</a> · ' + extra : esc(t.name));
  }

  function viewTopic(tab, id) {
    var t = findTopic(tab, id);
    if (!t) return notFound();
    var items = itemsFor(tab, id), c = counts(items);
    var pct = c.total ? Math.round(c.known / c.total * 100) : 0;
    var h = crumbsHTML(topicCrumb(tab, t), c.total ? pct : null);
    h += '<header class="page-head"><h1>' + esc(t.name) + '</h1>' + (t.desc ? '<p class="lead">' + esc(t.desc) + '</p>' : '') + '</header>';
    if (tab === 'chunks') h += tagFilter();
    if (!items.length) {
      h += '<div class="empty-state"><h3>No entries yet</h3><p>' + (tab === 'chunks' && ui.chunkTag ? 'No phrases match this filter.' : 'This topic arrives in a later data batch. Drop the file into <code>data/</code> and list it in <code>data/manifest.js</code>.') + '</p></div>';
      return page(h, 'mid');
    }
    // Actions on top (left-aligned); the full word list below, so known words can simply be skimmed.
    h += '<div class="topic-bar"><div class="topic-actions">' +
      (c.fresh ? '<a class="btn primary" href="#/' + tab + '/' + id + '/learn">Start in order →</a>' : '') +
      (c.due ? '<a class="btn" href="#/review/' + reviewFilterFor(tab, id) + '/go">Review ' + c.due + ' due</a>' : '') +
      '<button class="btn" data-act="practice-topic" data-tab="' + tab + '" data-id="' + id + '">Practice now</button></div>' +
      '<p class="topic-stats mono-muted">' + c.fresh + ' new · ' + c.learning + ' learning · ' + c.known + ' known' + (c.due ? ' · ' + c.due + ' due' : '') + '</p></div>';
    if (!c.fresh) h += notice('info', 'Everything in this topic is already in your deck.', 'subtle');
    h += '<div id="practiceSlot"></div>';
    h += searchBox() + tilesHTML(items);
    page(h, 'mid');
  }
  /* Topic page word list: same tile grid as the topic overview (number · state, headword, gloss, progress line). */
  function tilesHTML(items, gridId) {
    var W = { '': 0, learning: 35, review: 70, known: 100 };
    return '<div class="grid word-grid" id="' + (gridId || 'rows') + '">' + items.map(function (it, i) {
      var hay = norm([plain(it.t), meaningOf(it), it.plural, it.ru, it.en, it.de, litSearchTerms(it)].join(' '));
      var st = stateClass(it.id);
      return '<a class="tile word-tile' + (st === 'known' ? ' is-known' : '') + '" href="#/item/' + encodeURIComponent(it.id) + '" data-hay="' + esc(hay) + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + (st || 'new') + '</span></div>' +
        '<h4 lang="' + GT.learn + '">' + headword(it) + '</h4>' + litBylineHTML(it, 'tile-source') + '<p lang="' + GT.glLang(it) + '">' + esc(plain(meaningOf(it))) + '</p><div class="track"><i style="width:' + (W[st] || 0) + '%"></i></div></a>';
    }).join('') + '</div>';
  }
  function searchBox() {
    return '<input class="search" type="search" placeholder="Search ' + langMeta().name + ' or ' + GT.LANGS[GT.know].name + '…" data-act="search" aria-label="Search">';
  }
  function rowsHTML(items) {
    return '<div class="rows" id="rows">' + items.map(function (it, i) {
      var hay = norm([plain(it.t), meaningOf(it), it.plural, it.ru, it.en, it.de, litSearchTerms(it)].join(' '));
      var st = stateClass(it.id);
      return '<a class="row" href="#/item/' + encodeURIComponent(it.id) + '" data-hay="' + esc(hay) + '"><span class="n">' + pad2(i + 1) + '</span><div class="row-main"><div class="row-de" lang="' + GT.learn + '">' + headword(it) + '</div>' + litBylineHTML(it, 'row-src') + '<div class="row-en" lang="' + GT.glLang(it) + '">' + esc(plain(meaningOf(it))) + '</div></div>' + speakBtn(plainHead(it), 'sm') + '<span class="state ' + st + '">' + (st || 'new') + '</span></a>';
    }).join('') + '</div>';
  }

  function viewBrowse(tab, id) {
    var t = findTopic(tab, id);
    if (!t) return notFound();
    var items = itemsFor(tab, id);
    var h = crumbsHTML(topicCrumb(tab, t, 'Browse'));
    h += '<header class="page-head"><h1>' + esc(t.name) + '</h1></header>';
    if (tab === 'chunks') h += tagFilter();
    h += searchBox() + rowsHTML(items);
    if (!items.length) h += '<div class="empty-state"><p>No entries.</p></div>';
    page(h, 'mid');
  }

  function cardStatusText(c, now) {
    if (!c) return 'Not in deck';
    if (c.state === 'known') return 'Known · ' + fmtDate(c.known || c.last || now);
    var when = c.due <= now ? 'due now' : 'next in ' + F.label(c.due - now);
    return (c.state === 'review' ? 'Review' : 'Learning') + ' · ' + when + ' · ' + plural(c.reps || 0, 'review');
  }

  function viewItem(id) {
    var it = GT.byId[id];
    if (!it || it.type === 'drill') return notFound();
    var pair = S.cardsForItem(id), now = Date.now(), list = itemsFor(it.tab, it.topic), idx = list.indexOf(it);
    var tc = counts(list), pct = tc.total ? Math.round(tc.known / tc.total * 100) : 0;
    var actions;
    if (!pair.rec && !pair.prod) {
      actions = '<div class="actions actions-pair"><button class="btn primary" data-act="item-know" data-id="' + esc(id) + '">Know it</button><button class="btn outline" data-act="item-learn" data-id="' + esc(id) + '">Learn it</button></div>';
    } else if (pair.rec && pair.prod && pair.rec.state === 'known' && pair.prod.state === 'known') {
      actions = '<div class="actions actions-pair"><p class="mono-muted" style="width:100%">Marked as known (recognition + production) · ' + fmtDate(pair.prod.known || pair.prod.last || now) + ' · not in reviews</p><button class="btn" data-act="item-learn" data-id="' + esc(id) + '">Add to reviews</button><button class="btn ghost" data-act="item-reset" data-id="' + esc(id) + '">Remove from deck</button></div>';
    } else {
      actions = '<div class="actions actions-pair"><div class="dir-status">' +
        '<div class="dir-row"><div><span class="label">Recognition · ' + LS() + ' → ' + KS() + '</span><p class="mono-muted">' + esc(cardStatusText(pair.rec, now)) + '</p></div>' +
        (!pair.rec ? '<button class="btn small" data-act="item-add-dir" data-id="' + esc(id) + '" data-dir="rec">+ Add</button>' : '') + '</div>' +
        '<div class="dir-row"><div><span class="label">Production · ' + KS() + ' → ' + LS() + '</span><p class="mono-muted">' + esc(cardStatusText(pair.prod, now)) + '</p></div>' +
        (!pair.prod ? '<button class="btn small" data-act="item-add-dir" data-id="' + esc(id) + '" data-dir="prod">+ Add</button>' : '') + '</div>' +
        '</div><button class="btn" data-act="item-know" data-id="' + esc(id) + '">Mark known</button><button class="btn ghost" data-act="item-reset" data-id="' + esc(id) + '">Remove from deck</button></div>';
    }
    var h = crumbsHTML(itemCrumb(it, (idx + 1) + ' / ' + list.length), pct);
    h += renderItem(it, actions);
    page(h);
  }

  function notFound() {
    page('<div class="empty-state"><h3>Not found</h3><p>This page doesn’t exist (anymore). <a class="link-btn" href="#/words">Go to Words</a></p></div>', 'mid');
  }

  /* ---------------- learn session ---------------- */
  var learn = null;
  function viewLearn(tab, id) {
    var t = findTopic(tab, id);
    if (!t) return notFound();
    var later = S.data.later;
    var fresh = itemsFor(tab, id).filter(function (it) { return !S.hasAnyCard(it.id) && it.learnable !== false; });
    fresh = fresh.filter(function (it) { return !later[it.id]; }).concat(
      fresh.filter(function (it) { return later[it.id]; }).sort(function (a, b) { return later[a.id] - later[b.id]; }));
    learn = { tab: tab, id: id, topic: t, queue: fresh.slice(0, S.settings.newPerSession).map(function (i) { return i.id; }), i: 0, learned: [], known: [], later: [] };
    if (!learn.queue.length) {
      return page(crumbsHTML(topicCrumb(tab, t)) + '<div class="empty-state"><h3>Nothing new here</h3><p>All entries are in your deck. <a class="link-btn" href="#/' + tab + '/' + id + '">Back to topic</a></p></div>', 'mid');
    }
    drawLearn();
  }
  function drawLearn() {
    var L = learn;
    if (L.i >= L.queue.length) return drawLearnDone();
    var it = GT.byId[L.queue[L.i]];
    var pct = Math.round(L.i / L.queue.length * 100);
    var h = crumbsHTML(topicCrumb(L.tab, L.topic, 'Learn · ' + (L.i + 1) + ' / ' + L.queue.length), pct);
    var actions = '<div class="actionbar"><div class="actions"><button class="btn primary" data-act="l-know">Know it</button><button class="btn outline" data-act="l-learn">Learn it</button><button class="btn ghost" data-act="l-later">Later</button></div>' +
      '<p class="kbd-hint">1 Know it · 2 Learn it · 3 Later · P pronounce · Esc end</p></div>';
    h += renderItem(it, actions);
    page(h);
    window.scrollTo(0, 0);
    ui.keyHandler = function (e) {
      if (e.key === '1') act('l-know'); else if (e.key === '2') act('l-learn'); else if (e.key === '3') act('l-later');
      else if (e.key === 'p' || e.key === 'P') speak(plainHead(it));
      else if (e.key === 'Escape') location.hash = '#/' + L.tab + '/' + L.id;
    };
  }
  function drawLearnDone() {
    var L = learn;
    ui.keyHandler = null;
    renderNav(L.tab);
    renderSidebar(L.tab, [L.tab, L.id]);
    var studied = L.learned.concat(L.known).map(function (id) { return GT.byId[id]; });
    var h = crumbsHTML(topicCrumb(L.tab, L.topic, 'Session done'), 100);
    h += '<header class="page-head"><h1>Session done</h1><p class="lead">' + L.learned.length + ' added to reviews (recognition + production) · ' + L.known.length + ' marked as known · ' + L.later.length + ' for later.</p></header>';
    var due = dueKeys(reviewFilterFor(L.tab, L.id), 'both').length;
    h += '<div class="actions-row actions-split">';
    if (due) h += '<a class="btn primary" href="#/review/' + reviewFilterFor(L.tab, L.id) + '/go">Review them now (' + due + ')</a>';
    if (itemsFor(L.tab, L.id).some(function (it) { return !S.hasAnyCard(it.id); })) h += '<button class="btn" data-act="learn-more">Learn more</button>';
    h += '<a class="btn ghost" href="#/' + L.tab + '/' + L.id + '">Back to topic</a></div>';
    if (studied.length) {
      var o = practiceFromItems(studied, L.id);
      var scenario = (L.tab === 'chunks' || L.tab === 'literature') && GT.lx(L.topic, 'scenario');
      if (scenario) { o.topic = L.topic.name; o.scenario = scenario; }
      h += practicePanel(o);
    }
    page(h, 'mid');
  }

  /* ---------------- review session (#rec + #prod + drills) ---------------- */
  var rev = null;
  function makeQ(key) {
    var parsed = GT.parseCardKey(key);
    var it = GT.byId[parsed.id];
    var q = { key: key, id: parsed.id, dir: parsed.dir, mode: 'meaning', ex: null, sense: '' };
    if (it.type === 'drill') { q.mode = 'drill'; return q; }
    if (parsed.dir === 'rec') { q.mode = 'rec'; return q; }

    var exs = it.examples || [];
    var clozeable = exs.map(function (e, i) { return e.t.indexOf('[[') >= 0 ? i : -1; }).filter(function (i) { return i >= 0; });
    var sensed = exs.map(function (e, i) { return e.sense ? i : -1; }).filter(function (i) { return i >= 0; });
    var m = S.settings.reviewModes;
    var useCloze = clozeable.length && (m === 'cloze' || (m === 'mix' && Math.random() < 0.5));
    if (useCloze) {
      q.mode = 'cloze';
      q.ex = clozeable[Math.floor(Math.random() * clozeable.length)];
      q.sense = lxText(exs[q.ex], 'sense') || '';
      q.answers = clozeAnswers(exs[q.ex].t);
    } else if (sensed.length) {
      q.ex = sensed[Math.floor(Math.random() * sensed.length)];
      q.sense = lxText(exs[q.ex], 'sense');
    }
    return q;
  }
  function filterLabel(f) {
    if (!f || f === 'all') return 'Everything';
    var p = f.split('.'), tdef = GT.TABS.find(function (x) { return x.id === p[0]; });
    if (!p[1]) return tdef ? tdef.label : f;
    var t = GT.topic(p[0], p[1]);
    return (tdef ? tdef.label + ' · ' : '') + (t ? t.name : p[1]);
  }
  function viewReviewLanding(filter) {
    var dir = S.settings.reviewDirection || 'both';
    var nBoth = dueKeys(filter, 'both').length;
    var nRec = dueKeys(filter, 'rec').length;
    var nProd = dueKeys(filter, 'prod').length;
    var keys = dueKeys(filter, dir);
    var h = '<header class="page-head"><span class="eyebrow">05 · User · ' + esc(filterLabel(filter)) + '</span><h1>Review</h1><p class="lead">Active recall with FSRS-5. Recognition (' + LS() + ' → ' + KS() + ') and Production (' + KS() + ' / cloze → ' + LS() + ') are tracked separately.</p></header>' + reminders();
    h += '<div class="seg-tabs" role="tablist" aria-label="Review direction">' +
      [['both', 'Both (' + nBoth + ')'], ['rec', 'Recognition (' + nRec + ')'], ['prod', 'Production (' + nProd + ')']].map(function (o) {
        return '<button class="seg-tab' + (dir === o[0] ? ' active' : '') + '" type="button" data-act="rev-dir" data-v="' + o[0] + '" data-filter="' + esc(filter) + '">' + o[1] + '</button>';
      }).join('') + '</div>';
    h += '<div class="box" style="padding:40px 32px"><span class="label">Due today · ' + ({ both: 'Recognition + Production', rec: 'Recognition (' + LS() + ' → ' + KS() + ')', prod: 'Production (' + KS() + ' → ' + LS() + ')' }[dir]) + '</span>' +
      '<p style="font-family:var(--font-display);font-size:88px;line-height:1;margin:14px 0 6px;color:var(--ice)">' + keys.length + '</p>';
    if (dir === 'both' && nBoth) h += '<p class="mono-muted" style="margin-top:8px">' + nRec + ' recognition · ' + nProd + ' production</p>';
    if (keys.length) h += '<a class="btn primary big" style="margin-top:24px" href="#/review/' + encodeURIComponent(filter) + '/go">Start review →</a>';
    else {
      var next = Object.keys(S.data.cards).filter(function (k) {
        return matchesDir(GT.parseCardKey(k).dir, dir);
      }).map(function (k) { return S.data.cards[k]; }).filter(function (c) { return c.state !== 'known' && c.due; })
        .reduce(function (m, c) { return Math.min(m, c.due); }, Infinity);
      h += '<p class="note muted" style="margin-top:12px">' + (next < Infinity ? 'Nothing due in this filter. Next card ' + (next - Date.now() < DAY ? 'later today' : 'on ' + fmtDate(next)) + '.' : 'No cards in this filter yet. Learn some new words first.') + '</p>';
    }
    h += '</div>';
    var s = S.settings;
    h += '<p class="mono-muted" style="margin-top:18px">Production mode: ' + ({ mix: 'meaning + cloze', meaning: 'meaning → German', cloze: 'cloze only' }[s.reviewModes]) + ' · Typing: ' + (s.typing ? 'on' : 'off') + ' · <button class="link-btn" type="button" data-act="open-settings">Change</button></p>';
    page(h, 'narrow');
  }
  function viewReviewSession(filter) {
    var dir = S.settings.reviewDirection || 'both';
    var keys = dueKeys(filter, dir);
    if (!keys.length && dir !== 'both') keys = dueKeys(filter, 'both');
    keys = shuffle(keys);
    keys.sort(function (a, b) { var ca = S.card(a), cb = S.card(b); return (ca.state === 'review' ? 1 : 0) - (cb.state === 'review' ? 1 : 0); });
    rev = { filter: filter, queue: keys.map(makeQ), i: 0, revealed: false, typed: null, verdict: null, ds: {}, done: 0, counts: { 1: 0, 2: 0, 3: 0, 4: 0 }, seen: [] };
    if (!rev.queue.length) return viewReviewLanding(filter);
    drawReview();
  }
  function expected(it, q) {
    if (q.mode === 'cloze') return [q.answers.join(' ')];
    if (it.type === 'drill') return [it.answer].concat(it.accepted || []);
    var a = [it.article ? it.article + ' ' + it.t : it.t];
    if (/^sich /.test(it.t)) a.push(it.t.slice(5));
    return a;
  }
  function canType(it, q) {
    if (!S.settings.typing) return false;
    if (q.mode === 'rec') return false;
    if (q.mode === 'cloze') return true;
    if (it.type === 'drill') return it.kind === 'gap';
    return it.type === 'word';
  }
  function recallHTML(it, q) {
    if (q.mode === 'drill') return '<div class="recall">' + drillWidget(it, rev.ds, 'review') + '</div>';
    var h = '<div class="recall">';
    if (q.mode === 'rec') {
      h += '<span class="label">Recognition · Recall the meaning</span>';
      if (it.type === 'chunk') {
        h += '<div class="word-tags"><span class="tag outline">' + esc(it.register || 'neutral') + '</span></div>';
        h += '<div class="hw-row"><p class="hw chunk" lang="' + GT.learn + '">' + rich(it.t) + '</p>' + speakBtn(it.t, true) + '</div>';
      } else {
        h += wordTags(it, { hideRu: true });
        h += '<div class="hw-row"><p class="hw' + (hwSize(it.t) || ' long') + '" lang="' + GT.learn + '">' + esc(it.t) + '</p>' + speakBtn(plainHead(it), true) + '</div>';
      }
    } else if (q.mode === 'cloze') {
      var ex = it.examples[q.ex];
      h += '<span class="label">Production · Fill the gap</span>';
      if (q.sense) h += '<span class="ex-sense" lang="' + GT.know + '">' + esc(q.sense) + '</span>';
      h += '<p class="prompt-de" lang="' + GT.learn + '">' + clozeHTML(ex.t) + '</p>' + (trOf(ex) ? '<p class="mean-ru" lang="' + GT.know + '" style="font-size:17px;margin-top:10px">' + esc(trOf(ex)) + '</p>' : '');
    } else {
      h += '<span class="label">Production · ' + (it.type === 'chunk' ? 'Say the phrase in ' + langMeta().name + '' : 'Recall the ' + langMeta().name + '') + '</span>';
      if (q.sense) {
        h += '<p class="mean-en" lang="' + GT.know + '">' + esc(q.sense) + '</p>';
      } else {
        h += meanings(it);
      }
      var hintParts = [];
      if (it.type === 'chunk') hintParts.push((it.register || 'neutral') + ' register');
      else if (it.pos === 'noun') hintParts.push(GT.cfg('nounHint', 'noun'));
      else if (it.pos) hintParts.push(it.pos);
      if (rootOf(it)) hintParts.push('root ' + rootName(rootOf(it)));
      if (hintParts.length) h += '<p class="hint">' + esc(hintParts.join(' · ')) + '</p>';
    }
    return h + '</div>';
  }
  function answerHTML(it, q) {
    var h = '';
    if (rev.verdict !== null) {
      h += rev.verdict ? '<div class="verdict ok">✓ Correct</div>' : '<div class="verdict bad">You typed: <span class="yours">' + esc(rev.typed || '—') + '</span></div>';
    }
    if (q.mode === 'drill') return h;
    if (q.mode === 'rec') {
      h += '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px">' + meanings(it) + (it.type !== 'chunk' ? whyBtn(it) : '') + '</div>';
      h += litBylineHTML(it);
      var badges = allMeaningBadgesHTML(it);
      if (badges) h += '<div class="word-tags" style="margin-top:12px">' + badges + '</div>';
      if (it.type !== 'chunk') {
        h += parallelLine(it);
      }
      if (it.examples && it.examples.length) h += '<div style="margin-top:20px">' + examplesHTML(it.examples) + '</div>';
      if (it.ru_link && it.ru_link.text) h += '<div style="margin-top:24px">' + ruLinkBox(it) + '</div>';
      h += '<details class="full"><summary class="label">Full card</summary><div style="margin-top:24px">' + renderItem(it) + '</div></details>';
      return h;
    }
    if (it.type === 'chunk') {
      h += '<div class="word-tags"><span class="tag outline">' + esc(it.register || 'neutral') + '</span></div>';
      h += '<div class="hw-row"><p class="hw chunk" lang="' + GT.learn + '">' + rich(it.t) + '</p>' + speakBtn(it.t, true) + '</div>';
    } else {
      h += wordTags(it);
      h += '<div class="hw-row"><p class="hw' + (hwSize(it.t) || ' long') + '" lang="' + GT.learn + '">' + esc(it.t) + '</p>' + speakBtn(plainHead(it), true) + whyBtn(it) + '</div>';
    }
    h += litBylineHTML(it);
    if (q.sense && q.mode === 'meaning') h += '<p class="note muted" lang="' + GT.know + '" style="margin-bottom:14px">' + esc(GT.hint('allMeanings')) + ' ' + esc(meaningOf(it)) + '</p>';
    var ex = q.ex != null ? it.examples[q.ex] : (it.examples || [])[0];
    if (ex) {
      h += '<div class="ex"><div class="grow">' + (ex.sense && q.mode !== 'cloze' ? '<span class="ex-sense" lang="' + GT.know + '">' + esc(lxText(ex, 'sense')) + '</span>' : '') +
        '<p class="ex-de" lang="' + GT.learn + '">' + rich(ex.t) + '</p>' + (q.mode === 'cloze' ? '' : '<p class="ex-tr" lang="' + GT.know + '">' + esc(trOf(ex)) + '</p>') + '</div>' + speakBtn(ex.t) + '</div>';
    }
    if (it.ru_link && it.ru_link.text) h += '<div style="margin-top:28px">' + ruLinkBox(it) + '</div>';
    h += '<details class="full"><summary class="label">Full card</summary><div style="margin-top:24px">' + renderItem(it) + '</div></details>';
    return h;
  }
  function drawReview() {
    var R = rev;
    if (R.i >= R.queue.length) return drawReviewDone();
    var q = R.queue[R.i], it = GT.byId[q.id];
    var dirLabel = q.mode === 'drill' ? 'Review · Drill' : q.dir === 'rec' ? 'Review · Recognition' : 'Review · Production';
    var h = '<div class="review-col"><div class="sess-top"><span class="label ice">' + dirLabel + '</span><span class="mono-muted">' + pad2(R.i + 1) + ' / ' + pad2(R.queue.length) + ' · <button class="link-btn" data-act="r-end" style="font-family:inherit;letter-spacing:inherit">End</button></span></div>' +
      '<div class="sess-line"><i style="width:' + Math.round(R.i / R.queue.length * 100) + '%"></i></div>';
    h += recallHTML(it, q);
    if (!R.revealed) {
      if (canType(it, q)) {
        h += '<form class="typing" data-act="type-check" autocomplete="off"><input id="typeInput" lang="' + GT.learn + '" placeholder="Type the ' + langMeta().name + '…" autocapitalize="off" spellcheck="false" aria-label="Your answer"><button class="btn" type="submit">Check</button></form>';
      }
      h += '<div class="actionbar"><button class="btn primary big" data-act="reveal">Show answer</button><p class="kbd-hint">Space to show · then 1–4 to rate</p></div>';
    } else {
      h += answerHTML(it, q);
      var pv = F.preview(S.card(q.key), Date.now(), S.settings.retention);
      var sug = R.verdict === true ? 3 : R.verdict === false ? 1 : 0;
      var names = { 1: 'Again', 2: 'Hard', 3: 'Good', 4: 'Easy' }, cls = { 1: 'again', 2: 'hard', 3: 'good', 4: 'easy' };
      h += '<div class="actionbar"><div class="rate-grid' + (sug && sug !== 3 ? ' has-suggest' : '') + '">' + [1, 2, 3, 4].map(function (g) {
        return '<button class="rate ' + cls[g] + (sug === g && g !== 3 ? ' suggest' : '') + '" data-act="rate" data-g="' + g + '">' + names[g] + '<small>' + pv[g].label + '</small></button>';
      }).join('') + '</div><p class="kbd-hint">1 Again · 2 Hard · 3 Good · 4 Easy</p></div>';
    }
    h += '</div>';
    page(h);
    var inp = $('#typeInput');
    if (inp && window.matchMedia('(min-width: 861px)').matches) inp.focus();
    ui.keyHandler = function (e) {
      if (!rev.revealed && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); act('reveal'); }
      else if (rev.revealed && /^[1-4]$/.test(e.key)) act('rate', { dataset: { g: e.key } });
    };
  }
  function reveal() {
    var R = rev, q = R.queue[R.i], it = GT.byId[q.id];
    if (q.mode === 'drill' && it.kind === 'reorder' && R.ds.built && R.ds.built.length) {
      R.ds.verdict = norm(R.ds.built.map(function (i) { return it.tokens[i]; }).join(' ')) === norm(it.answer);
      R.verdict = R.ds.verdict;
    }
    R.ds.revealed = true;
    R.revealed = true;
    drawReview();
  }
  function rate(g) {
    var R = rev, q = R.queue[R.i], now = Date.now();
    var prev = S.card(q.key);
    var nc = F.rate(prev, g, now, S.settings.retention);
    nc.added = prev && prev.added;
    S.setCard(q.key, nc);
    S.logActivity('reviews');
    R.counts[g]++; R.done++;
    if (R.seen.indexOf(q.id) < 0) R.seen.push(q.id);
    if (nc.due - now < 20 * 60 * 1000) R.queue.splice(Math.min(R.queue.length, R.i + 4), 0, makeQ(q.key));
    R.i++; R.revealed = false; R.typed = null; R.verdict = null; R.ds = {};
    renderNav('review');
    drawReview();
    window.scrollTo(0, 0);
  }
  function drawReviewDone() {
    var R = rev;
    ui.keyHandler = null;
    renderNav('review');
    renderSidebar('review', ['review', R.filter]);
    var h = '<header class="page-head"><span class="eyebrow">Review · ' + esc(filterLabel(R.filter)) + '</span><h1>' + (R.done ? 'Review done' : 'Session ended') + '</h1><p class="lead">' +
      plural(R.done, 'review') + ' · Again ' + R.counts[1] + ' · Hard ' + R.counts[2] + ' · Good ' + R.counts[3] + ' · Easy ' + R.counts[4] + '</p></header>';
    var left = dueKeys(R.filter, S.settings.reviewDirection || 'both').length;
    h += '<div class="actions-row actions-pair">' + (left ? '<a class="btn primary" href="#/review/' + encodeURIComponent(R.filter) + '">' + left + ' still due</a>' : '') + '<a class="btn" href="#/stats">Stats</a></div>';
    var items = R.seen.map(function (id) { return GT.byId[id]; }).filter(function (it) { return it && it.type !== 'drill'; });
    if (items.length >= 3) h += practicePanel(practiceFromItems(items), 'You’ve reviewed these. Now use them in conversation.');
    page(h, 'mid');
  }

  /* ---------------- drills (grammar page + review) ---------------- */
  function drillQ(d) {
    return esc(lxText(d, 'q')).replace(/___/g, '<span class="blank">____</span>');
  }
  function drillOptions(d) { return lxText(d, 'options') || d.options || []; }
  function drillAnswerText(d) { var opts = drillOptions(d); return d.kind === 'choice' ? opts[d.answer] : d.answer; }
  function drillWidget(d, st, ctx) {
    var kind = { gap: 'Fill the gap', choice: 'Choose', reorder: 'Put the words in order' }[d.kind] || '';
    var a = ' data-id="' + esc(d.id) + '" data-ctx="' + ctx + '"';
    var h = (ctx === 'page' ? '<div class="drill" data-drill="' + esc(d.id) + '">' : '<div>') + '<p class="drill-kind">' + kind + '</p>';
    if (d.kind !== 'reorder') h += (d.hint ? '<p class="hint" lang="' + GT.lxLang(d, 'hint') + '">' + esc(lxText(d, 'hint')) + '</p>' : '') + '<p class="drill-q" lang="' + GT.learn + '">' + drillQ(d) + '</p>';
    else if (d.q) h += '<p class="drill-q">' + esc(lxText(d, 'q')) + '</p>';
    if (d.kind === 'choice') {
      var opts = drillOptions(d), optLang = GT.lxLang(d, 'options') === GT.know && d.i18n && d.i18n[GT.know] && d.i18n[GT.know].options ? GT.know : GT.learn;
      h += '<div class="options">' + opts.map(function (o, i) {
        var cls = '';
        if (st.revealed) { if (i === d.answer) cls = ' ok'; else if (i === st.chosen) cls = ' bad'; }
        return '<button class="opt' + cls + '" data-act="d-opt" data-i="' + i + '"' + a + (st.revealed ? ' disabled' : '') + ' lang="' + optLang + '">' + esc(o) + '</button>';
      }).join('') + '</div>';
    }
    if (d.kind === 'reorder') {
      if (!st.order) st.order = shuffle(d.tokens.map(function (_, i) { return i; }));
      st.built = st.built || [];
      h += '<div class="built">' + st.built.map(function (i) {
        return '<button class="opt token" data-act="d-unbuild" data-i="' + i + '"' + a + (st.revealed ? ' disabled' : '') + ' lang="' + GT.learn + '">' + esc(d.tokens[i]) + '</button>';
      }).join('') + '</div>';
      if (!st.revealed) {
        h += '<div class="options">' + st.order.filter(function (i) { return st.built.indexOf(i) < 0; }).map(function (i) {
          return '<button class="opt token" data-act="d-build" data-i="' + i + '"' + a + ' lang="' + GT.learn + '">' + esc(d.tokens[i]) + '</button>';
        }).join('') + '</div>';
      }
    }
    if (st.revealed) {
      var verdict = st.verdict === true ? '✓ ' : st.verdict === false ? '✗ ' : '';
      h += '<div class="drill-answer"><div class="a" lang="' + GT.learn + '">' + esc(verdict) + esc(drillAnswerText(d)) + '</div>' + (d.explain ? '<div class="x" lang="' + GT.lxLang(d, 'explain') + '">' + esc(lxText(d, 'explain')) + '</div>' : '') + '</div>';
    } else if (ctx === 'page' && d.kind !== 'choice') {
      h += '<div class="drill-actions"><button class="btn small" data-act="d-show"' + a + '>' + (d.kind === 'reorder' ? 'Check' : 'Show answer') + '</button></div>';
    }
    return h + '</div>';
  }
  function drillStateFor(ctx, id) {
    if (ctx === 'review') return rev.ds;
    return ui.drillState[id] || (ui.drillState[id] = {});
  }
  function redrawDrill(ctx, id) {
    if (ctx === 'review') return drawReview();
    var el = document.querySelector('[data-drill="' + CSS.escape(id) + '"]');
    if (el) el.outerHTML = drillWidget(GT.byId[id], drillStateFor('page', id), 'page');
  }

  /* ---------------- grammar ---------------- */
  function viewGrammarLanding() {
    var h = '<header class="page-head"><span class="eyebrow">04 · Overview</span><h1>Grammar</h1><p class="lead">' + intro('grammar') + '</p></header>';
    h += '<div class="grid">' + GT.TOPICS.grammar.filter(visibleTopic).map(function (t, i) {
      var pg = GT.grammar[t.id];
      return '<a class="tile' + (pg ? '' : ' empty') + '" href="#/grammar/' + t.id + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + (pg ? pg.drills.filter(function (d) { return S.card(d.id); }).length + '/' + pg.drills.length + ' drills' : 'soon') + '</span></div><h4>' + esc(t.name) + '</h4><p>' + (pg ? esc(lxText(pg, 'summary') || '') : 'Coming in a grammar batch.') + '</p></a>';
    }).join('') + '</div>';
    page(h);
  }
  function tableHTML(tb) {
    return (tb.caption ? '<h3 class="section-title">' + esc(lxText(tb, 'caption')) + '</h3>' : '') + '<div class="table-wrap"><table><thead><tr>' + (lxText(tb, 'head') || []).map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      (lxText(tb, 'rows') || []).map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td' + ((tb.deCols || []).indexOf(i) >= 0 ? ' class="de" lang="' + GT.learn + '"' : '') + '>' + rich(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  function viewGrammar(id) {
    var t = GT.topic('grammar', id);
    if (!t) return notFound();
    var pg = GT.grammar[id];
    var h = crumbsHTML('<a href="#/grammar">Grammar</a> · ' + esc(t.name));
    h += '<header class="page-head"><h1>' + esc(pg ? lxText(pg, 'title') : t.name) + '</h1>' + (pg && pg.summary ? '<p class="lead">' + esc(lxText(pg, 'summary')) + '</p>' : '') + '</header>';
    if (!pg) return page(h + '<div class="empty-state"><h3>Coming soon</h3><p>This grammar page arrives in a later batch.</p></div>', 'mid');
    var exLang = GT.lxLang(pg, 'explanation');
    h += (exLang !== GT.know ? '<p class="mono-muted" style="margin-bottom:12px">' + fbTag(exLang) + ' ' + esc(GT.hint('missing')) + '</p>' : '') + '<div class="prose" lang="' + exLang + '">' + lxText(pg, 'explanation') + '</div>';
    (pg.tables || []).forEach(function (tb) { h += tableHTML(tb); });
    if (pg.examples && pg.examples.length) h += '<h3 class="section-title">Examples</h3>' + examplesHTML(pg.examples);
    if (pg.pitfalls && pg.pitfalls.length) {
      h += '<h3 class="section-title">' + (GT.know === 'ru' ? 'Pitfalls for Russian speakers' : 'Pitfalls') + '</h3><ul class="pitfalls">' + pg.pitfalls.map(function (p) {
        return '<li class="pitfall"><h5>' + esc(lxText(p, 'title')) + '</h5><p>' + lxText(p, 'html') + '</p></li>';
      }).join('') + '</ul>';
    }
    var notIn = pg.drills.filter(function (d) { return !S.card(d.id); }).length;
    h += '<h3 class="section-title">Drills</h3>';
    h += pg.drills.map(function (d) { return drillWidget(d, drillStateFor('page', d.id), 'page'); }).join('');
    h += '<div class="actions">' + (notIn ? '<button class="btn primary" data-act="add-drills" data-id="' + id + '">Add ' + plural(notIn, 'drill') + ' to Review</button>' : '<p class="mono-muted">All drills of this page are in your Review deck.</p>') +
      '<button class="btn ghost" data-act="reset-drills">Reset answers</button></div>';
    page(h, 'mid');
  }

  /* ---------------- stats ---------------- */
  function streak() {
    var log = S.data.log, n = 0, d = new Date();
    var has = function (k) { return log[k] && (log[k].reviews || log[k].learned); };
    if (!has(S.dayKey(d.getTime()))) d.setDate(d.getDate() - 1);
    while (has(S.dayKey(d.getTime()))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function viewStats() {
    var cards = S.data.cards, keys = Object.keys(cards);
    var recSt = dirStats('rec'), prodSt = dirStats('prod');
    var knownItems = GT.items.filter(function (it) { return isItemKnown(it.id); }).length;
    var todayLog = S.data.log[S.dayKey()] || {};
    var h = '<header class="page-head"><span class="eyebrow">05 · User · ' + esc(langMeta().name) + '</span><h1>Stats</h1></header>';
    h += '<div class="stat-row"><div class="stat accent"><b>' + dueKeys('all', 'both').length + '</b><span>due today</span></div><div class="stat"><b>' + (todayLog.reviews || 0) + '</b><span>reviews today</span></div><div class="stat"><b>' + knownItems + '</b><span>known items</span></div><div class="stat"><b>' + streak() + '</b><span>day streak</span></div></div>';

    h += '<div class="box"><span class="label">Recognition vs Production</span><div class="rec-split">' +
      '<div class="rec-card"><span class="label">Recognition · ' + LS() + ' → ' + KS() + '</span><p class="big">' + recSt.known + '</p><p class="mono-muted">' + recSt.learning + ' learning · ' + recSt.due + ' due · ' + recSt.total + ' total</p></div>' +
      '<div class="rec-card"><span class="label">Production · ' + KS() + ' → ' + LS() + '</span><p class="big">' + prodSt.known + '</p><p class="mono-muted">' + prodSt.learning + ' learning · ' + prodSt.due + ' due · ' + prodSt.total + ' total</p></div>' +
      '</div></div>';

    if (GT.feature('goetheB1')) {
      var b1Topics = GT.TOPICS.words.filter(function (t) { return t.level === 'b1'; });
      var b1Known = GT.items.filter(function (it) {
        return b1Topics.some(function (t) { return GT.inTopic(it, 'words', t.id); }) && isItemKnown(it.id);
      }).length;
      var pct = Math.min(100, b1Known / (GT.B1_TOTAL || 1) * 100);
      h += '<div class="box"><div class="box-head"><span class="label">Goethe B1 list</span><span class="mono-muted">' + b1Known + ' / ~' + GT.B1_TOTAL.toLocaleString('en') + '</span></div><div class="track-lg"><i style="width:' + pct.toFixed(1) + '%"></i></div></div>';
    }

    var days = [], max = 1;
    for (var i = 13; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var e = S.data.log[S.dayKey(d.getTime())] || {};
      var v = (e.reviews || 0) + (e.learned || 0);
      max = Math.max(max, v); days.push({ v: v, d: d });
    }
    h += '<div class="box"><div class="box-head"><span class="label">Last 14 days</span><span class="mono-muted">reviews + new cards</span></div><div class="activity">' +
      days.map(function (x) { return '<div class="' + (x.v ? '' : 'zero') + '" style="height:' + Math.max(3, x.v / max * 100) + '%" title="' + fmtDate(x.d) + ': ' + x.v + '"></div>'; }).join('') +
      '</div><div class="activity-labels"><span>' + fmtDate(days[0].d) + '</span><span>today</span></div></div>';

    ['words', 'it', 'chunks', 'expressions', 'literature', 'roots'].forEach(function (tab) {
      var tdef = GT.TABS.find(function (x) { return x.id === tab; });
      var rows = '', empty = 0;
      GT.TOPICS[tab].filter(visibleTopic).forEach(function (t) {
        var items = (GT.members[tab + '.' + t.id] || []);
        if (!items.length) { empty++; return; }
        var c = counts(items);
        rows += '<div class="topic-stat"><div class="line"><span>' + esc(t.name) + '</span><span class="mono">rec ' + c.recKnown + ' · prod ' + c.prodKnown + ' / ' + c.total + '</span></div><div class="track"><i style="width:' + (c.known / c.total * 100).toFixed(1) + '%"></i></div></div>';
      });
      h += '<h3 class="section-title">' + esc(tdef.label) + '</h3><div class="box">' + (rows || '<p class="note muted">No data yet.</p>') + (empty ? '<p class="mono-muted" style="margin-top:16px;font-size:12px">' + plural(empty, 'topic') + ' without data yet</p>' : '') + '</div>';
    });
    var drillsIn = keys.filter(function (k) { var it = GT.byId[k]; return it && it.type === 'drill'; }).length;
    h += '<h3 class="section-title">Grammar</h3><div class="box"><p class="note muted">' + plural(drillsIn, 'drill') + ' in your Review deck · ' + Object.keys(GT.grammar).length + ' of ' + GT.TOPICS.grammar.filter(visibleTopic).length + ' pages available.</p></div>';
    page(h, 'mid');
  }

  /* ---------------- USER tab (#/user: Sync & Backup first, then Review & Stats) + settings ---------------- */
  function gdriveBoxHTML() {
    var gd = S.gdrive ? S.gdrive.state : { isHttp: false, connected: false };
    var cid = S.settings.gdriveClientId || '';
    var badge = gd.connected ? '<span class="tag outline">Connected</span>' : '<span class="tag dim">OAuth · appDataFolder</span>';
    return '<div class="box-head" style="margin-bottom:10px"><span class="label ice" style="margin:0">Google Drive (Cloud OAuth)</span>' + badge + '</div>' +
      '<p class="note muted">Syncs <code>etrnl-progress.json</code> into your private Google Drive <code>appDataFolder</code> across desktop and mobile (requires HTTPS or <code>http://localhost</code>).</p>' +
      '<div class="gd-row" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">' +
        '<input type="text" class="gd-input" data-set="gdriveClientId" value="' + esc(cid) + '" placeholder="Google OAuth Client ID (…apps.googleusercontent.com)" spellcheck="false" autocomplete="off" style="flex:1;min-width:240px;min-height:44px;padding:8px 12px;border:1px solid var(--line-2);background:var(--bg);color:var(--text);font-family:var(--font-mono);font-size:12.5px">' +
        '<button class="btn primary small" type="button" data-act="gdrive-sync"' + (!gd.isHttp || gd.busy ? ' disabled' : '') + '>' + icon('repeat') + (gd.busy ? 'Syncing…' : 'Sync with Google Drive') + '</button>' +
        (gd.connected ? '<button class="btn ghost small" type="button" data-act="gdrive-disconnect">Disconnect</button>' : '') +
      '</div>' +
      (gd.lastSync ? '<p class="mono-muted" style="font-size:12px;margin-top:8px">Last synced with Google Drive: ' + fmtDateTime(gd.lastSync) + '</p>' : '') +
      (!gd.isHttp ? '<p class="note" style="color:var(--gold);margin-top:8px">Google OAuth does not work on <code>file://</code>. Open the hosted site or use a local HTTP server.</p>' : '') +
      (gd.error ? '<p class="note" style="color:var(--gold);margin-top:8px">' + esc(gd.error) + '</p>' : '') +
      '<details style="margin-top:12px"><summary class="mono-muted" style="font-size:12px;cursor:pointer">How to get a Google OAuth Client ID (once)</summary>' +
      '<p class="note muted" style="font-size:13.5px;margin-top:8px">1. Open Google Cloud Console → enable <b>Google Drive API</b>.<br>2. In <b>OAuth consent screen</b> add scope <code>.../auth/drive.appdata</code> and your Google email as test user.<br>3. In <b>Credentials → Create Credentials → OAuth client ID (Web application)</b> add this site’s origin (for example, <code>https://example.com</code>) to <b>Authorized JavaScript origins</b>, then paste the Client ID above.</p></details>';
  }
  function syncBoxHTML() {
    var st = S.sync ? S.sync.state : { supported: false };
    if (!st.supported) {
      return '<div class="box-head" style="margin-bottom:10px"><span class="label" style="margin:0">Google Drive Desktop / OneDrive folder</span><span class="tag dim">Desktop Chrome / Edge</span></div>' +
        '<p class="note muted">Local folder auto-sync uses the File System Access API in Chrome or Edge on desktop. On this browser or device, use Import & Export or Google Drive Cloud OAuth.</p>';
    }
    if (!st.connected) {
      return '<div class="box-head" style="margin-bottom:10px"><span class="label" style="margin:0">Google Drive Desktop / OneDrive folder</span><span class="tag dim">Local file auto-sync</span></div>' +
        '<p class="note muted">Or link a local JSON file directly inside your Google Drive Desktop or OneDrive folder on PC. Every review and new card automatically merges and saves to that file.</p>' +
        '<div class="actions-row"><button class="btn" type="button" data-act="sync-open">' + icon('upload') + 'Connect existing sync file…</button>' +
        '<button class="btn" type="button" data-act="sync-create">' + icon('download') + 'Create new sync file…</button></div>';
    }
    var granted = st.permission === 'granted';
    var badge = granted ? '<span class="tag outline">Auto-sync on</span>' : '<span class="tag gold">Permission needed</span>';
    return '<div class="box-head" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span class="label ice" style="margin:0">Synced folder file</span><code>' + esc(st.fileName || 'etrnl-sync.json') + '</code></div>' + badge + '</div>' +
      '<p class="note muted">' + (granted ? 'Changes auto-merge and save to this file.' : 'Click Resume sync to grant file access for this browser session.') +
      (st.lastSync ? ' Last synced: ' + fmtDateTime(st.lastSync) + '.' : '') + '</p>' +
      (st.error ? '<p class="note" style="color:var(--gold);margin-top:8px">' + esc(st.error) + '</p>' : '') +
      '<div class="actions-row actions-split">' +
        '<button class="btn primary small" type="button" data-act="sync-now"' + (st.busy ? ' disabled' : '') + '>' + icon('repeat') + (st.busy ? 'Syncing…' : (granted ? 'Sync now' : 'Resume sync')) + '</button>' +
        '<button class="btn small" type="button" data-act="sync-open">Change file…</button>' +
        '<button class="btn ghost small" type="button" data-act="sync-disconnect">Disconnect</button>' +
      '</div>';
  }
  function syncAndBackupCardsHTML() {
    var d = S.data;
    return '<div class="box">' +
      '<div class="box-head" style="margin-bottom:10px"><span class="label ice" style="margin:0">Import & Export</span><span class="mono-muted" style="font-size:12px">All languages · non-destructive merge</span></div>' +
      '<p class="note muted">Export saves every language in one JSON file. <b>Import & merge</b> combines cards by latest review without losing Known items.' + (d.lastExport ? ' Last export: ' + fmtDate(d.lastExport) + '.' : '') + '</p>' +
      '<div class="actions-row"><button class="btn primary" type="button" data-act="export">' + icon('download') + 'Export progress</button>' +
      '<label class="btn">' + icon('upload') + 'Import & merge<input type="file" id="importFile" accept=".json,application/json" hidden></label>' +
      '<label class="btn ghost small">' + icon('upload') + 'Replace from file<input type="file" id="importReplaceFile" accept=".json,application/json" hidden></label></div>' +
      '</div>' +
      '<div class="box" id="gdriveBox">' + gdriveBoxHTML() + '</div>' +
      '<div class="box" id="syncBox">' + syncBoxHTML() + '</div>';
  }
  function refreshSyncBox() {
    var el = $('#syncBox');
    if (el) el.innerHTML = syncBoxHTML();
    var gdEl = $('#gdriveBox');
    if (gdEl) gdEl.innerHTML = gdriveBoxHTML();
  }
  if (S.sync && S.sync.onChange) {
    S.sync.onChange(function (_st, dataChanged) {
      refreshSyncBox();
      if (dataChanged && ready) redrawInPlace();
    });
  }
  function viewUser() {
    var dir = S.settings.reviewDirection || 'both';
    var due = dueKeys('all', dir).length;
    var nRec = dueKeys('all', 'rec').length, nProd = dueKeys('all', 'prod').length;
    var knownItems = GT.items.filter(function (it) { return isItemKnown(it.id); }).length;
    var todayLog = S.data.log[S.dayKey()] || {};
    var h = '<header class="page-head"><span class="eyebrow">05 · User · ' + esc(langMeta().name) + '</span><h1>User</h1><p class="lead">Import & export, Google Drive sync, spaced-repetition Review and Stats.</p></header>';
    h += '<h3 class="section-title" style="margin-top:0">01 · Import, Export & Google Drive Sync</h3>';
    h += syncAndBackupCardsHTML();
    h += '<h3 class="section-title">02 · Review (' + esc(langMeta().name) + ')</h3>';
    h += '<div class="box"><div class="box-head"><span class="label ice">Due today</span><span class="mono-muted">' + nRec + ' rec · ' + nProd + ' prod</span></div>' +
      '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:20px;flex-wrap:wrap">' +
        '<p style="font-family:var(--font-display);font-size:56px;line-height:1;color:var(--ice)">' + due + '</p>' +
        '<div class="actions-row" style="margin-top:0">' +
          (due ? '<a class="btn primary" href="#/review/all/go">Start review (' + due + ') →</a>' : '') +
          '<a class="btn" href="#/review">Open Review →</a>' +
        '</div>' +
      '</div></div>';
    h += '<h3 class="section-title">03 · Stats (' + esc(langMeta().name) + ')</h3>';
    h += '<div class="stat-row" style="margin-bottom:18px"><div class="stat accent"><b>' + due + '</b><span>due today</span></div><div class="stat"><b>' + (todayLog.reviews || 0) + '</b><span>reviews today</span></div><div class="stat"><b>' + knownItems + '</b><span>known items</span></div><div class="stat"><b>' + streak() + '</b><span>day streak</span></div></div>' +
      '<div class="actions-row"><a class="btn" href="#/stats">Open full Stats →</a></div>';
    page(h, 'mid');
  }

  function settingsBodyHTML() {
    var s = S.settings, d = S.data;
    function sel(key, opts) {
      return '<select data-set="' + key + '">' + opts.map(function (o) { return '<option value="' + o[0] + '"' + (String(s[key]) === String(o[0]) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>';
    }
    function sw(key) { return '<label class="switch"><input type="checkbox" data-set="' + key + '"' + (s[key] ? ' checked' : '') + '><span></span></label>'; }
    function row(label, help, control) { return '<div class="setting"><div><div class="lbl">' + label + '</div>' + (help ? '<div class="help">' + help + '</div>' : '') + '</div>' + control + '</div>'; }
    var h = '<h3 class="section-title" style="margin-top:0">Languages</h3><div class="box">' +
      row('I know', 'Language of meanings, translations and explanations.', langSelect('know')) +
      row('I learn', 'Language you are studying. Progress is kept separately per language.', langSelect('learn')) +
      '</div>';
    h += '<h3 class="section-title">Learning</h3><div class="box">' +
      row('New cards per session', 'How many cards "Learn new" shows.', '<input type="number" min="1" max="50" data-set="newPerSession" value="' + s.newPerSession + '">') +
      row('Review direction', 'Review recognition (' + LS() + ' → ' + KS() + '), production (' + KS() + ' → ' + LS() + '), or both.', sel('reviewDirection', [['both', 'Both'], ['rec', 'Recognition only'], ['prod', 'Production only']])) +
      row('Production mode', 'How production cards are asked.', sel('reviewModes', [['mix', 'Mixed'], ['meaning', 'Meaning → ' + langMeta().name + ''], ['cloze', 'Cloze sentences']])) +
      row('Typing mode', 'Type your ' + langMeta().name + ' answer on production cards before revealing it.', sw('typing')) +
      row('WHY? with medium confidence', 'Also show etymology notes marked as less certain.', sw('showMediumWhy')) +
      row('Target retention', 'Higher means more reviews but fewer forgotten cards.', sel('retention', [['0.85', '85%'], ['0.9', '90% (recommended)'], ['0.95', '95%']])) +
      '</div>';
    h += '<h3 class="section-title">Look & sound</h3><div class="box">' +
      row('Theme', 'The design is made for dark.', sel('theme', [['dark', 'Dark'], ['light', 'Light'], ['system', 'System']])) +
      row('Hide sidebar Practice box', 'Hide the "Practice now" card in the sidebar.', sw('hideSidePractice')) +
      row('' + langMeta().name + ' voice', '<span id="voiceInfo">' + (tts.ok ? 'Loading voices…' : 'Speech is not supported in this browser.') + '</span>',
        tts.ok ? '<select id="voiceSelect" data-set="' + voiceKey() + '" style="max-width:240px"></select>' : '<span class="mono-muted">—</span>') +
      row('Speech rate', 'Applied to all pronunciation buttons.', '<div style="display:flex;gap:8px;align-items:center">' + sel('speechRate', [['0.75', 'Slow'], ['0.9', 'Normal'], ['1', 'Fast']]) + '<button class="btn small" type="button" data-act="test-voice">Test</button></div>') +
      '</div>';
    var files = GT.packFiles(GT.learn), errs = GT.pack.loadErrors;
    h += '<h3 class="section-title">Data · ' + esc(langMeta().name) + '</h3><div class="box"><p class="note muted">' + plural(files.length - errs.length, 'data file') + ' loaded · ' + GT.items.length + ' words & chunks · ' + Object.keys(GT.grammar).length + ' grammar pages · ' + Object.keys(GT.roots).length + ' word families · ' + (GT.links ? GT.links.length : 0) + ' cross-language links · schema v' + d.version + '.</p>' +
      (GT.pack.missingOverlay && GT.pack.missingOverlay.length ? '<p class="note" style="color:var(--gold);margin-top:8px">Overlay ids not found: ' + GT.pack.missingOverlay.map(esc).join(', ') + '</p>' : '') +
      ((GT.pack.validation || []).length ? '<details style="margin-top:8px"><summary class="note" style="color:var(--gold)">' + plural(GT.pack.validation.length, 'data warning') + '</summary><p class="mono-muted" style="font-size:11.5px;margin-top:8px">' + GT.pack.validation.slice(0, 60).map(esc).join('<br>') + '</p></details>' : '<p class="note muted" style="margin-top:8px">Validation: 0 data warnings.</p>') +
      (errs.length ? '<p class="note" style="color:var(--bad);margin-top:8px">Missing files: ' + errs.map(esc).join(', ') + '</p>' : '') +
      (GT.duplicates.length ? '<p class="note" style="color:var(--gold);margin-top:8px">Duplicate ids skipped: ' + GT.duplicates.map(esc).join(', ') + '</p>' : '') +
      '<p class="note muted" style="margin-top:8px">To add a batch: copy the file into the pack folder and list it in <code>data/manifest.js</code>.</p></div>';
    h += '<h3 class="section-title">Danger zone</h3><div class="box"><button class="btn danger" data-act="reset-all">Reset ' + esc(langMeta().name) + ' progress</button></div>';
    return h;
  }
  function openSettings() {
    sheetEl.classList.add('sheet-wide');
    sheetEl.dataset.mode = 'settings';
    sheetEl.setAttribute('aria-label', 'Settings');
    sheetEl.innerHTML = '<div class="sheet-head"><span class="label ice">Settings</span><button class="icon-btn" type="button" data-act="sheet-close" aria-label="Close">' + icon('x') + '</button></div>' +
      '<div class="sheet-body">' + settingsBodyHTML() + '</div>';
    sheetEl.classList.add('open');
    sheetScrim.classList.add('open');
    $('#settingsBtn').classList.add('active');
    var voiceSel = $('#voiceSelect');
    if (voiceSel) refreshVoiceSelect(voiceSel);
    var b = sheetEl.querySelector('[data-act="sheet-close"]');
    if (b) b.focus();
  }
  function viewSettings() {
    var h = '<header class="page-head"><span class="eyebrow">Settings</span><h1>Settings</h1></header>' + settingsBodyHTML();
    page(h, 'narrow');
    var voiceSel = $('#voiceSelect');
    if (voiceSel) refreshVoiceSelect(voiceSel);
  }

  /* ---------------- actions ---------------- */
  function copyText(t) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t).then(function () { return true; }, fallback);
    return Promise.resolve(fallback());
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove();
      return ok;
    }
  }
  function copyPrompt(text) {
    copyText(text).then(function (ok) {
      S.markPracticed();
      GT.toast(ok ? 'Prompt copied. Paste it into your AI chat.' : 'Copy failed. Open "Show prompt" and copy it manually.');
    });
  }
  function refreshChrome(tab) { var p = curPath(); renderNav(tab, p); renderSidebar(tab, p); }

  function act(name, el) {
    el = el || { dataset: {} };
    var now = Date.now(), id = el.dataset.id;
    switch (name) {
      case 'l-later': learn.later.push(learn.queue[learn.i]); S.markLater(learn.queue[learn.i]); learn.i++; drawLearn(); break;
      case 'l-know':
        learn.known.push(learn.queue[learn.i]);
        S.setItemKnown(learn.queue[learn.i], now);
        S.logActivity('learned');
        learn.i++; refreshChrome(learn.tab); drawLearn();
        break;
      case 'l-learn':
        learn.learned.push(learn.queue[learn.i]);
        S.addItemToReview(learn.queue[learn.i], now);
        S.logActivity('learned');
        learn.i++; refreshChrome(learn.tab); drawLearn();
        break;
      case 'learn-more': viewLearn(learn.tab, learn.id); break;
      case 'item-know': S.setItemKnown(id, now); S.logActivity('learned'); refreshChrome(GT.byId[id].tab); viewItem(id); break;
      case 'item-learn': S.addItemToReview(id, now); S.logActivity('learned'); refreshChrome(GT.byId[id].tab); viewItem(id); GT.toast('Added to reviews (recognition + production)'); break;
      case 'item-add-dir': S.addItemToReview(id, now, [el.dataset.dir]); refreshChrome(GT.byId[id].tab); viewItem(id); GT.toast('Card added'); break;
      case 'item-reset': if (confirm('Remove this item from your deck? Its review history is lost.')) { S.removeItem(id); refreshChrome(GT.byId[id].tab); viewItem(id); } break;
      case 'rev-dir':
        S.setSetting('reviewDirection', el.dataset.v);
        renderSidebar('review', ['review', el.dataset.filter || 'all']);
        viewReviewLanding(el.dataset.filter || 'all');
        break;
      case 'show-ru': el.outerHTML = '<p class="mean-ru" lang="' + GT.know + '">' + esc(el.dataset.ru) + '</p>'; break;
      case 'reveal': reveal(); break;
      case 'rate': rate(Number(el.dataset.g)); break;
      case 'r-end': rev.queue = rev.queue.slice(0, rev.i); drawReviewDone(); break;
      case 'practice-topic': {
        var tab = el.dataset.tab, tid = el.dataset.id, items = itemsFor(tab, tid).filter(function (it) { return S.hasAnyCard(it.id); });
        items.sort(function (a, b) { return itemLastActivity(b.id) - itemLastActivity(a.id); });
        if (!items.length) { GT.toast('Learn a few cards in this topic first.'); break; }
        var t = findTopic(tab, tid), o = practiceFromItems(items.slice(0, 12), tid);
        var scenario = (tab === 'chunks' || tab === 'literature') && GT.lx(t, 'scenario');
        if (scenario) { o.topic = t.name; o.scenario = scenario; }
        $('#practiceSlot').innerHTML = practicePanel(o, 'Practice ' + t.name);
        break;
      }
      case 'copy-prompt': copyPrompt(ui.lastPrompt); break;
      /* Article language tabs = the "I know" language (kept in sync both ways). */
      case 'bys-lang': setLanguages('know', el.dataset.code); break;
      case 'bys-toggle': {
        var art = $('#bys');
        ui.bysExpanded = !ui.bysExpanded;
        art.classList.toggle('bys-collapsed', !ui.bysExpanded);
        el.setAttribute('aria-expanded', String(ui.bysExpanded));
        el.textContent = ui.bysExpanded ? 'Show Less ↑' : 'Read More ↓';
        /* Show Less: return to the top of the page (on phones the article is the first block), heading included. */
        if (!ui.bysExpanded) window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      }
      case 'hide-side-practice': {
        S.setSetting('hideSidePractice', true);
        var box = sideEl.querySelector('.side-practice');
        if (box) box.remove();
        break;
      }
      case 'copy-today': {
        var today = todaysItems();
        if (!today.length) { GT.toast('Learn a few cards first.'); break; }
        copyPrompt(buildPrompt(practiceFromItems(today)));
        break;
      }
      case 'export': S.exportJSON(); refreshSyncBox(); GT.toast('Progress exported'); break;
      case 'sync-open':
        S.sync.pickExisting().then(function (msg) { if (msg) GT.toast('Synced · ' + msg); }).catch(function (err) {
          if (err && err.name !== 'AbortError') GT.toast(err.message || 'Sync failed');
        });
        break;
      case 'sync-create':
        S.sync.createNew().then(function (msg) { if (msg) GT.toast('Sync file ready · ' + msg); }).catch(function (err) {
          if (err && err.name !== 'AbortError') GT.toast(err.message || 'Sync failed');
        });
        break;
      case 'sync-now':
        S.sync.syncNow({ silent: false }).then(function (msg) { if (msg) GT.toast('Synced · ' + msg); }).catch(function (err) {
          GT.toast(err && err.message ? err.message : 'Sync failed');
        });
        break;
      case 'sync-disconnect':
        S.sync.disconnect().then(function () { GT.toast('Sync file disconnected'); });
        break;
      case 'gdrive-sync': {
        var cidInp = document.querySelector('[data-set="gdriveClientId"]');
        if (cidInp && cidInp.value.trim() !== (S.settings.gdriveClientId || '')) {
          S.setSetting('gdriveClientId', cidInp.value.trim());
        }
        S.gdrive.syncNow({ silent: false }).then(function (msg) {
          if (msg) GT.toast('Google Drive · ' + msg);
        }).catch(function (err) {
          GT.toast(err && err.message ? err.message : 'Google Drive sync failed');
        });
        break;
      }
      case 'gdrive-disconnect':
        S.gdrive.disconnect();
        GT.toast('Google Drive disconnected');
        break;
      case 'reset-all':
        if (confirm('Reset ALL ' + langMeta().name + ' progress? Other languages are kept. This cannot be undone. Export first if unsure.') && confirm('Really delete all ' + langMeta().name + ' progress?')) { S.reset(); applyTheme(); route(); GT.toast('Progress reset'); }
        break;
      case 'test-voice': speak(langMeta().testPhrase, el); break;
      case 'add-drills': {
        var pg = GT.grammar[id], n = 0;
        pg.drills.forEach(function (d) { if (!S.card(d.id)) { var c3 = F.newCard(now); c3.added = now; S.setCard(d.id, c3); n++; } });
        GT.toast(plural(n, 'drill') + ' added to Review');
        refreshChrome('grammar'); viewGrammar(id);
        break;
      }
      case 'why': openWhy(id); break;
      case 'open-settings': openSettings(); break;
      case 'toggle-settings':
        if (sheetEl.classList.contains('open') && sheetEl.dataset.mode === 'settings') closeSheet();
        else openSettings();
        break;
      case 'sheet-close': closeSheet(); break;
      case 'lang-close': closeLangPop(true); break;
      case 'lucky': {
        var pool = expressionPool(el.dataset.v);
        if (pool.length) location.hash = '#/item/' + encodeURIComponent(pool[Math.floor(Math.random() * pool.length)].id);
        break;
      }
      case 'mtag-toggle': {
        var wrap = el.closest('.mtag-wrap');
        if (!wrap) break;
        var wasOpen = wrap.classList.contains('open');
        closeAllTooltips();
        if (!wasOpen) {
          wrap.classList.remove('dismissed');
          wrap.classList.add('open');
          el.setAttribute('aria-expanded', 'true');
          positionTooltip(wrap);
        } else {
          wrap.classList.add('dismissed');
          el.blur();
        }
        break;
      }
      case 'mtag-close': {
        var cWrap = el.closest('.mtag-wrap');
        closeAllTooltips();
        if (cWrap) cWrap.classList.add('dismissed');
        if (document.activeElement && document.activeElement.closest('.mtag-wrap')) document.activeElement.blur();
        break;
      }
      case 'root-select': ui.rootSel[el.dataset.root] = id; drawRootDetail(el.dataset.root); break;
      case 'root-toggle-all': ui.rootAll[id] = !ui.rootAll[id]; viewRoot(id); break;
      case 'root-add': {
        S.addItemToReview(id, now);
        S.logActivity('learned');
        refreshChrome('roots'); GT.toast('Added to Review (rec + prod)');
        if (el.dataset.root) { drawRootDetail(el.dataset.root); var dot = document.querySelector('.rnode[data-id="' + CSS.escape(id) + '"]'); if (dot && !dot.querySelector('.rn-dot')) dot.insertAdjacentHTML('beforeend', '<i class="rn-dot"></i>'); }
        else if (rd) drawRootDrill();
        break;
      }
      case 'root-add-all': {
        var nAdd = 0;
        GT.roots[id].ids.forEach(function (wid) { if (!S.hasAnyCard(wid)) { S.addItemToReview(wid, now); nAdd++; } });
        if (nAdd) S.logActivity('learned', nAdd);
        refreshChrome('roots'); GT.toast(plural(nAdd, 'word') + ' added to Review'); viewRoot(id);
        break;
      }
      case 'rd-mode': ui.rootDrillMode = el.dataset.v; viewRootDrill(rd ? rd.rootId : ''); break;
      case 'rd-opt': rootDrillAnswer(el.dataset.v); break;
      case 'rd-next': rd.i++; rd.answered = null; rd.given = null; drawRootDrill(); break;
      case 'rd-again': viewRootDrill(rd.rootId); break;
      case 'reset-drills': ui.drillState = {}; viewGrammar(location.hash.split('/')[2]); break;
      case 'd-opt': {
        var d = GT.byId[id], st = drillStateFor(el.dataset.ctx, id);
        st.chosen = Number(el.dataset.i); st.verdict = st.chosen === d.answer; st.revealed = true;
        if (el.dataset.ctx === 'review') { rev.verdict = st.verdict; rev.revealed = true; }
        redrawDrill(el.dataset.ctx, id);
        break;
      }
      case 'd-build': case 'd-unbuild': {
        var st2 = drillStateFor(el.dataset.ctx, id), i = Number(el.dataset.i);
        if (name === 'd-build') st2.built.push(i); else st2.built = st2.built.filter(function (x) { return x !== i; });
        redrawDrill(el.dataset.ctx, id);
        break;
      }
      case 'd-show': {
        var dd = GT.byId[id], st3 = drillStateFor('page', id);
        if (dd.kind === 'reorder' && st3.built && st3.built.length) st3.verdict = norm(st3.built.map(function (k) { return dd.tokens[k]; }).join(' ')) === norm(dd.answer);
        st3.revealed = true;
        redrawDrill('page', id);
        break;
      }
      case 'st-choice': studioAnswer(el.dataset.v); break;
      case 'st-reveal': studioAnswer(null); break;
      case 'st-rate': studioRate(Number(el.dataset.g)); break;
      case 'st-next': if (studio) { studio.i++; studio.checked = false; studio.isCorrect = false; studio.input = ''; drawPractice(); window.scrollTo(0, 0); } break;
      case 'st-end': if (studio) { studio.i = studio.questions.length; drawPractice(); } break;
      case 'st-again': studio = null; viewPractice(ui.lastStudioParams || {}); break;
      case 'open-link':
        if (el.dataset.lang && el.dataset.id) {
          setLanguages('learn', el.dataset.lang, '#/item/' + encodeURIComponent(el.dataset.id));
        }
        break;
    }
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.mtag-wrap')) closeAllTooltips();
    if (!e.target.closest('.tab-drop')) closeNavMenus();
    var navDrop = e.target.closest('[data-nav-drop]');
    if (navDrop && window.matchMedia && window.matchMedia('(hover: none)').matches) {
      var dd = navDrop.closest('.tab-drop');
      if (dd && !dd.classList.contains('open')) {
        e.preventDefault();
        closeNavMenus();
        dd.classList.add('open');
        return;
      }
    }
    if (e.target.closest('.tab-menu-item')) closeNavMenus();
    var sp = e.target.closest('[data-speak]');
    if (sp) { e.preventDefault(); e.stopPropagation(); speak(sp.dataset.speak, sp, sp.dataset.speakLang); return; }
    var el = e.target.closest('[data-act]');
    if (!el || el.tagName === 'SELECT' || el.tagName === 'INPUT' || el.tagName === 'FORM') return;
    e.preventDefault();
    act(el.dataset.act, el);
  });
  document.addEventListener('submit', function (e) {
    if (e.target.dataset.act === 'studio-start') { e.preventDefault(); startStudioFromForm(e.target); return; }
    if (e.target.dataset.act === 'st-type') { e.preventDefault(); studioAnswer(($('#stInput') || {}).value || ''); return; }
    if (e.target.dataset.act === 'rd-type') { e.preventDefault(); rootDrillAnswer(($('#rdInput') || {}).value || ''); return; }
    if (e.target.dataset.act !== 'type-check') return;
    e.preventDefault();
    var R = rev, q = R.queue[R.i], it = GT.byId[q.id], val = $('#typeInput').value;
    R.typed = val;
    R.verdict = expected(it, q).some(function (x) { return norm(x) === norm(val); });
    if (it.type === 'drill') { R.ds.verdict = R.verdict; R.ds.revealed = true; }
    R.revealed = true;
    drawReview();
  });
  document.addEventListener('input', function (e) {
    if (e.target.dataset.act !== 'search') return;
    var qv = norm(e.target.value);
    document.querySelectorAll('#rows [data-hay]').forEach(function (r) { r.style.display = !qv || r.dataset.hay.indexOf(qv) >= 0 ? '' : 'none'; });
  });
  document.addEventListener('change', function (e) {
    var el = e.target;
    if (el.id === 'stKind') { syncStudioHelp(); return; }
    if (el.dataset.set) {
      var k = el.dataset.set, v = el.type === 'checkbox' ? el.checked : el.value;
      if (k === 'newPerSession') { v = Math.max(1, Math.min(50, Math.round(Number(v) || 10))); el.value = v; }
      if (k === 'retention' || k === 'speechRate') v = Number(v);
      S.setSetting(k, v);
      if (k === 'theme') applyTheme();
      if (k === 'hideSidePractice') {
        var curP = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
        var curTab = curP[0] === 'item' && GT.byId[curP[1]] ? GT.byId[curP[1]].tab : (curP[0] || 'words');
        renderSidebar(curTab, curP);
      }
      if (/^speechVoice/.test(k) || k === 'speechRate') {
        stopSpeak();
        if (/^speechVoice/.test(k)) pickVoice();
      }
      GT.toast('Saved');
    } else if (el.dataset.act === 'chunktag') {
      ui.chunkTag = el.value;
      route();
    } else if ((el.id === 'importFile' || el.id === 'importReplaceFile') && el.files && el.files[0]) {
      var replaceMode = el.id === 'importReplaceFile';
      var reader = new FileReader();
      reader.onload = function () {
        if (replaceMode && !confirm('Replace your current progress with this file? Existing cards not in the file will be removed.')) return;
        try {
          var msg = S.importJSON(reader.result, { replace: replaceMode });
          applyTheme();
          route();
          GT.toast(msg);
        } catch (err) { alert('Import failed: ' + err.message); }
      };
      reader.readAsText(el.files[0]);
      el.value = '';
    }
  });
  document.addEventListener('mouseover', function (e) {
    var wrap = e.target.closest && e.target.closest('.mtag-wrap');
    if (wrap) positionTooltip(wrap);
  });
  document.addEventListener('mouseout', function (e) {
    var wrap = e.target.closest && e.target.closest('.mtag-wrap');
    if (wrap && (!e.relatedTarget || !wrap.contains(e.relatedTarget))) wrap.classList.remove('dismissed');
  });
  document.addEventListener('focusin', function (e) {
    var wrap = e.target.closest && e.target.closest('.mtag-wrap');
    if (wrap) { wrap.classList.remove('dismissed'); positionTooltip(wrap); }
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.mtag-wrap.open').forEach(positionTooltip);
  });
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'Escape' && document.querySelector('.mtag-wrap.open, .mtag-wrap:focus-within')) {
      document.querySelectorAll('.mtag-wrap.open, .mtag-wrap:focus-within').forEach(function (w) { w.classList.add('dismissed'); });
      closeAllTooltips();
      if (document.activeElement && document.activeElement.closest('.mtag-wrap')) document.activeElement.blur();
      return;
    }
    if (sheetEl.classList.contains('open')) { if (e.key === 'Escape') closeSheet(); return; }
    if (e.key === 'Escape' && sideEl.classList.contains('open')) { closeSidebar(); return; }
    if (ui.keyHandler && !(e.target && /INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName) && e.key !== 'Escape')) ui.keyHandler(e);
  });

  /* ---------------- WHY? & Settings overlay sheet ---------------- */
  var sheetScrim = document.createElement('div');
  sheetScrim.className = 'sheet-scrim';
  var sheetEl = document.createElement('aside');
  sheetEl.className = 'sheet';
  sheetEl.setAttribute('role', 'dialog');
  sheetEl.setAttribute('aria-modal', 'true');
  sheetEl.setAttribute('aria-label', 'Почему так');
  document.body.appendChild(sheetScrim);
  document.body.appendChild(sheetEl);
  sheetScrim.addEventListener('click', closeSheet);
  function closeSheet() {
    var wasSettings = sheetEl.dataset.mode === 'settings';
    if (wasSettings) stopSpeak();
    if (sheetEl.contains(document.activeElement)) document.activeElement.blur();
    sheetEl.classList.remove('open', 'sheet-wide');
    sheetEl.dataset.mode = '';
    sheetScrim.classList.remove('open');
    if (wasSettings && location.hash.replace(/^#\/?/, '').split('/')[0] !== 'settings') {
      $('#settingsBtn').classList.remove('active');
    }
  }

  /** The WHY? note to show, or null. Only confidence 'high' unless the setting allows 'medium'. */
  function whyOf(it) {
    var w = it && it.why;
    if (!w || typeof w !== 'object' || !w.text) return null;
    if (w.confidence !== 'high' && !S.settings.showMediumWhy) return null;
    return w;
  }
  function whyBtn(it) {
    return whyOf(it) ? '<button class="why-btn" type="button" data-act="why" data-id="' + esc(it.id) + '" aria-label="Why? Etymology">Why?</button>' : '';
  }
  function fmtWhyPara(p) {
    var safe = esc(p);
    return safe.replace(/^(Состав|Морфология|Происхождение|Этимология|Прозрачность|Мнемоника \(не этимология\)|Composition|Morphology|Origin|Etymology|Transparency|Mnemonic \(not etymology\)|Aufbau|Morphologie|Herkunft|Etymologie|Durchsichtigkeit|Eselsbrücke \(keine Etymologie\)):/, '<strong>$1:</strong>');
  }
  function openWhy(id) {
    var it = GT.byId[id], w = whyOf(it);
    if (!w) return;
    var root = w.root && GT.roots[w.root];
    var srcHtml = '';
    if (w.source || w.evidence) {
      srcHtml = '<div class="sheet-src"><span class="label">Source & evidence</span>' +
        (w.source ? '<p class="src-ref">' + esc(w.source) + '</p>' : '') +
        (w.evidence ? '<p lang="' + GT.lxLang(w, 'evidence') + '">' + esc(lxText(w, 'evidence')) + '</p>' : '') +
        '<p class="mono-muted" style="margin-top:10px;font-size:11.5px">Confidence: ' + esc(w.confidence || 'high') + '</p></div>';
    } else {
      srcHtml = '<p class="mono-muted" style="margin-top:18px">Confidence: ' + esc(w.confidence || 'high') + '</p>';
    }
    sheetEl.classList.remove('sheet-wide');
    sheetEl.dataset.mode = 'why';
    var whyHead = { ru: 'Почему так', en: 'Why it is so', de: 'Warum ist das so' }[GT.know] || 'Why?';
    var wl = GT.lxLang(w, 'text');
    sheetEl.setAttribute('aria-label', whyHead);
    sheetEl.innerHTML = '<div class="sheet-head"><span class="label ice">Why? · ' + esc(it.t) + '</span><button class="icon-btn" data-act="sheet-close" aria-label="Close">' + icon('x') + '</button></div>' +
      '<h3 class="sheet-title" lang="' + GT.know + '">' + esc(whyHead) + fbTag(wl) + '</h3>' +
      String(lxText(w, 'text')).split('\n').filter(Boolean).map(function (p) { return '<p class="sheet-p" lang="' + wl + '">' + fmtWhyPara(p) + '</p>'; }).join('') +
      srcHtml +
      (root ? '<a class="btn small" style="margin-top:18px" href="#/roots/' + esc(root.id) + '">→ Open root ' + esc(rootName(root)) + '</a>' : '');
    sheetEl.classList.add('open');
    sheetScrim.classList.add('open');
    var b = sheetEl.querySelector('[data-act="sheet-close"]');
    if (b) b.focus();
  }
  function fmtParallel(s) { return esc(s).replace(/(^|[\s\/(,])([A-ZÄÖÜА-ЯЁ]{2,}-?)/g, '$1<b>$2</b>'); }
  function parallelLine(it) {
    // `parallel` is a Russian string (German pack) or { ru, de, … } keyed by the known language.
    var par = it.parallel, txt = typeof par === 'string' ? (GT.know === 'ru' ? par : '') : par && par[GT.know];
    if (txt) return '<p class="parallel"><span class="label">' + esc(GT.LANGS[GT.know].short) + ' parallel</span><span lang="' + GT.know + '">' + fmtParallel(txt) + '</span></p>';
    return '';
  }

  /* ---------------- ROOTS tab (Word Families, Prefixes, Suffixes, Classical Roots) ---------------- */
  function rootWords(id) { return (GT.roots[id] ? GT.roots[id].ids : []).map(function (x) { return GT.byId[x]; }); }
  function rootsSidebar(p) {
    var cur = p[1] || '', h = '', n = 0;
    rootGroups().forEach(function (g) {
      h += '<div class="side-label">' + esc(g.name) + '</div>';
      n = 0;
      g.ids.forEach(function (id) {
        var r = GT.roots[id], c = r ? counts(rootWords(id)) : null;
        h += sideLink('#/roots/' + id, pad2(++n), r ? rootName(r) : id.toUpperCase(), r ? c.known + '/' + c.total : '', { active: cur === id, dim: !r });
      });
    });
    prefixGroups().forEach(function (g) {
      h += '<div class="side-label">' + esc(g.name) + '</div>';
      n = 0;
      g.ids.forEach(function (id) {
        var pf = GT.prefixes[id];
        h += sideLink('#/roots/p-' + id, pad2(++n), pf ? pf.label : id + '-', '', { active: cur === 'p-' + id, dim: !pf });
      });
    });
    if (GT.suffixOrder.length) {
      h += '<div class="side-label">Suffixes</div>';
      n = 0;
      GT.suffixOrder.forEach(function (id) {
        var sf = GT.suffixes[id], sfg = lxText(sf, 'gender');
        h += sideLink('#/roots/s-' + id, pad2(++n), sf.label, sfg && sfg !== '—' ? sfg : '', { active: cur === 's-' + id });
      });
    }
    if (GT.classicalOrder.length) {
      h += '<div class="side-label">Classical Roots</div>';
      n = 0;
      GT.classicalOrder.forEach(function (id) {
        var cl = GT.classical[id];
        h += sideLink('#/roots/c-' + id, pad2(++n), cl.label, cl.origin, { active: cur === 'c-' + id });
      });
    }
    h += '<div class="side-label">Trainer</div>' +
      (GT.feature('prefixDrill') ? sideLink('#/roots/drill', null, PW() + ' drill', '', { active: cur === 'drill' }) : '') +
      sideLink('#/practice?scope=roots', null, 'Practice Studio →', '', {});
    return h + sidePractice();
  }
  /** Families grouped by `group` (e.g. verb families with particles first, then word-building families). */
  function rootGroups() {
    var ids = GT.ROOT_PLAN.concat(Object.keys(GT.roots).filter(function (r) { return GT.ROOT_PLAN.indexOf(r) < 0; }));
    var out = [], byName = {};
    ids.forEach(function (id) {
      var r = GT.roots[id], name = (r && r.group) || 'Word Families';
      if (!byName[name]) { byName[name] = { name: name, ids: [] }; out.push(byName[name]); }
      byName[name].ids.push(id);
    });
    return out;
  }
  function prefixGroups() {
    var out = [], byName = {};
    GT.PREFIX_PLAN.forEach(function (id) {
      var pf = GT.prefixes[id], name = pf && pf.kind === 'particle' ? 'Particles' : 'Prefixes';
      if (!byName[name]) { byName[name] = { name: name, ids: [] }; out.push(byName[name]); }
      byName[name].ids.push(id);
    });
    return out;
  }
  function rootsSubTabs(active) {
    var loadedRoots = Object.keys(GT.roots).length;
    var loadedPfx = Object.keys(GT.prefixes).length;
    return '<div class="seg-tabs" role="tablist" aria-label="Roots sections">' +
      [
        ['families', 'Word Families (' + loadedRoots + ')', '#/roots'],
        ['prefixes', GT.cfg('prefixTab', 'Prefixes') + ' (' + loadedPfx + ')', '#/roots/prefixes'],
        ['suffixes', 'Suffixes (' + GT.suffixOrder.length + ')', '#/roots/suffixes'],
        ['classical', 'Classical Roots (' + GT.classicalOrder.length + ')', '#/roots/classical']
      ].map(function (o) {
        return '<a class="seg-tab' + (active === o[0] ? ' active' : '') + '" href="' + o[2] + '">' + esc(o[1]) + '</a>';
      }).join('') + '</div>';
  }
  function affixTagText(a) {
    if (a.sep) return a.sep;
    if (a.gender && a.gender !== '—') return lxText(a, 'gender');
    return a.kind || (a.posChangeShort || '');
  }
  function viewRootsLanding(section) {
    section = section || 'families';
    var h = '<header class="page-head"><span class="eyebrow">Language · Roots</span><h1>Roots & Word Formation</h1><p class="lead">' + intro('roots') + '</p></header>';
    h += rootsSubTabs(section);
    if (section === 'families') {
      var groupIntro = GT.cfg('rootGroupIntro') || {};
      rootGroups().forEach(function (g, gi) {
        var gIntro = groupIntro[g.name] ? GT.gl(groupIntro[g.name]) : '';
        h += '<h3 class="section-title"' + (gi ? '' : ' style="margin-top:0"') + '>' + esc(g.name) + '</h3>' + (gIntro ? '<p class="note muted" style="margin:-6px 0 18px">' + esc(gIntro) + '</p>' : '') + '<div class="grid">' + g.ids.map(function (id, i) {
          var r = GT.roots[id];
          if (!r) return '<a class="tile empty" href="#/roots/' + id + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">soon</span></div><h4>' + esc(id.toUpperCase()) + '</h4></a>';
          var c = counts(rootWords(id)), sub = r.sub ? '<span class="mono-muted"> · ' + esc(r.sub) + '</span>' : '';
          return '<a class="tile" href="#/roots/' + id + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + c.known + '/' + c.total + '</span></div><h4>' + esc(rootName(r)) + '</h4><p lang="' + GT.glLang(r) + '">' + esc(GT.gl(r)) + sub + '</p><div class="track"><i style="width:' + (c.total ? c.known / c.total * 100 : 0) + '%"></i></div></a>';
        }).join('') + '</div>';
      });
      h += '<div class="actions">' + (GT.feature('prefixDrill') ? '<a class="btn primary" href="#/roots/drill">' + PW() + ' drill →</a>' : '') + '<a class="btn' + (GT.feature('prefixDrill') ? '' : ' primary') + '" href="#/practice?scope=roots">Practice in Studio →</a></div>';
    } else if (section === 'prefixes') {
      prefixGroups().forEach(function (g, gi) {
        h += '<h3 class="section-title"' + (gi ? '' : ' style="margin-top:0"') + '>' + esc(g.name) + '</h3><div class="grid">' + g.ids.map(function (id, i) {
          var pf = GT.prefixes[id];
          return '<a class="tile' + (pf ? '' : ' empty') + '" href="#/roots/p-' + id + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + (pf ? esc(affixTagText(pf)) : 'soon') + '</span></div><h4>' + esc(pf ? pf.label : id + '-') + '</h4>' + (pf ? '<p lang="' + GT.glLang(pf) + '">' + esc(GT.gl(pf)) + '</p>' : '') + '</a>';
        }).join('') + '</div>';
      });
      h += '<div class="actions">' + (GT.feature('prefixDrill') ? '<a class="btn primary" href="#/roots/drill">' + PW() + ' drill →</a>' : '') + '<a class="btn" href="#/practice?kind=affix">Practice affixes →</a></div>';
    } else if (section === 'suffixes') {
      h += '<h3 class="section-title" style="margin-top:0">Suffixes · Word Formation</h3><div class="grid">' + GT.suffixOrder.map(function (id, i) {
        var sf = GT.suffixes[id];
        return '<a class="tile" href="#/roots/s-' + esc(id) + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + esc(affixTagText(sf) || 'suffix') + '</span></div><h4>' + esc(sf.label) + '</h4><p lang="' + GT.glLang(sf) + '">' + esc(GT.gl(sf)) + '</p></a>';
      }).join('') + '</div>';
      h += '<div class="actions"><a class="btn primary" href="#/practice?kind=affix">Practice suffixes & prefixes →</a></div>';
    } else if (section === 'classical') {
      h += '<h3 class="section-title" style="margin-top:0">Classical Roots · Latin & Greek</h3><div class="grid">' + GT.classicalOrder.map(function (id, i) {
        var cl = GT.classical[id];
        return '<a class="tile" href="#/roots/c-' + esc(id) + '"><div class="tile-top"><span>' + pad2(i + 1) + '</span><span class="ct">' + esc(cl.origin) + '</span></div><h4>' + esc(cl.label) + '</h4><p lang="' + GT.glLang(cl) + '">' + esc(GT.gl(cl)) + '</p></a>';
      }).join('') + '</div>';
    }
    page(h);
  }
  function exChip(e) {
    var hit = e.entryId && GT.byId[e.entryId];
    var inner = '<span lang="' + GT.learn + '">' + articleChip(e.t) + '</span>' + (trOf(e) ? ' <span class="mono-muted">—</span> <span lang="' + GT.glLang(e) + '">' + esc(trOf(e)) + '</span>' : '');
    return hit ? '<a class="chip chip-speak" href="#/item/' + encodeURIComponent(hit.id) + '"><span>' + inner + '</span>' + speakBtn(e.t, 'xs') + '</a>'
      : '<span class="chip chip-speak"><span>' + inner + '</span>' + speakBtn(e.t, 'xs') + '</span>';
  }
  /** Reference view for an affix with pattern/spelling/... fields (all suffixes; prefixes without meaning lists). */
  function viewAffixReference(a, kindLabel, backHref, backLabel) {
    var gen = lxText(a, 'gender');
    var gTag = gen === 'die' ? '<span class="tag die">die</span>' : gen === 'das' ? '<span class="tag das">das</span>' : gen === 'der' ? '<span class="tag der">der</span>' : gen && gen !== '—' ? '<span class="tag outline">' + esc(gen) + '</span>' : '';
    var h = crumbsHTML('<a href="#/roots">Roots</a> · <a href="' + backHref + '">' + esc(backLabel) + '</a> · ' + esc(a.label));
    h += '<div class="word-tags">' + gTag + (a.sep ? '<span class="tag outline">' + esc(a.sep) + '</span>' : '') + '<span class="tag dim">' + esc(kindLabel) + '</span>' + (a.posChange ? '<span class="mono-muted" lang="' + GT.lxLang(a, 'posChange') + '">' + esc(lxText(a, 'posChange')) + '</span>' : '') + '</div>' +
      '<div class="hw-row"><h1 class="hw">' + esc(a.label) + '</h1></div><p class="mean-en" lang="' + GT.glLang(a) + '">' + esc(GT.gl(a)) + fbTag(GT.glLang(a)) + '</p>';
    if (a.examples && a.examples.length) h += '<h3 class="section-title">Examples</h3><div class="box"><div class="fam">' + a.examples.map(exChip).join('') + '</div></div>';
    var fields = [['Pattern', 'pattern'], ['Spelling & sound changes', 'spelling'], ['Exceptions', 'exceptions'], ['Limitations', 'limitations'], ['Productivity', 'productivity']];
    var rows = fields.filter(function (f) { return a[f[1]]; });
    if (rows.length) h += '<h3 class="section-title">Word formation rules</h3><div class="box">' + rows.map(function (f) {
      return '<div class="ref-field"><span class="label">' + esc(f[0]) + '</span><p class="note" lang="' + GT.lxLang(a, f[1]) + '">' + esc(lxText(a, f[1])) + '</p></div>';
    }).join('') + '</div>';
    h += '<div class="actions"><a class="btn primary" href="#/practice?kind=affix">Practice affixes in Studio →</a><a class="btn" href="' + backHref + '">All ' + esc(backLabel.toLowerCase()) + '</a></div>';
    page(h, 'mid');
  }
  function viewSuffix(id) {
    var sf = GT.suffixes[id];
    if (!sf) return notFound();
    viewAffixReference(sf, 'suffix', '#/roots/suffixes', 'Suffixes');
  }
  function viewClassical(id) {
    var cl = GT.classical[id];
    if (!cl) return notFound();
    var h = crumbsHTML('<a href="#/roots">Roots</a> · <a href="#/roots/classical">Classical Roots</a> · ' + esc(cl.label));
    h += '<div class="word-tags"><span class="tag outline">' + esc(cl.origin) + '</span><span class="tag dim">historical element</span></div>' +
      '<div class="hw-row"><h1 class="hw">' + esc(cl.label) + '</h1></div><p class="mean-en" lang="' + GT.glLang(cl) + '">' + esc(GT.gl(cl)) + '</p>';
    if (cl.examples && cl.examples.length) h += '<h3 class="section-title">Examples</h3><div class="box"><div class="fam">' + cl.examples.map(exChip).join('') + '</div></div>';
    h += '<h3 class="section-title">Historical evidence & limitations</h3><div class="box">' +
      '<div class="ref-field"><span class="label">Historical evidence</span><p class="note" lang="' + GT.lxLang(cl, 'history') + '">' + esc(lxText(cl, 'history')) + '</p></div>' +
      '<div class="ref-field"><span class="label">Limitations & pitfalls</span><p class="note" lang="' + GT.lxLang(cl, 'limitations') + '">' + esc(lxText(cl, 'limitations')) + '</p></div>' +
      (cl.source ? '<p class="mono-muted" style="margin-top:16px;font-size:12px">Source: ' + esc(cl.source) + '</p>' : '') +
      '</div>';
    h += '<div class="actions"><a class="btn" href="#/roots/classical">All classical roots</a><a class="btn" href="#/roots">Word families</a></div>';
    page(h, 'mid');
  }
  function isVerbPos(p) { return p === 'verb' || p === 'phrasal verb'; }
  function PW() { return GT.cfg('prefixWord', 'Prefix'); }
  /** Short translation under a map node: the first sense of the gloss in the known language ("to come, to arrive (on foot)" → "to come"). */
  function nodeGloss(w) {
    var g = String(GT.gl(w) || '').split(/[;,(]/)[0].trim();
    return g ? '<span class="rn-gl" lang="' + GT.glLang(w) + '">' + esc(g) + '</span>' : '';
  }
  function pfLabel(id) { var pf = GT.prefixes[id]; return pf ? pf.label : id + '-'; }
  /** Words of a family shown once per headword (a headword with several senses gets one node; the others are listed in its detail). */
  function uniqueByHead(list, skipT) {
    var seen = {};
    if (skipT) seen[skipT] = true;
    return list.filter(function (w) { if (seen[w.t]) return false; seen[w.t] = true; return true; });
  }
  function splitPrefix(w) {
    var d = w.t, sich = '';
    if (w.particle && w.prefix) {
      var pl = String(pfLabel(w.prefix)).replace(/^…\s*/, '');
      var re = new RegExp('(^|\\s)(' + pl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?=\\s|$)', 'i');
      var m = re.exec(d);
      if (m) { var at = m.index + m[1].length; return esc(d.slice(0, at)) + '<span class="pfx">' + esc(m[2]) + '</span>' + esc(d.slice(at + m[2].length)); }
      return esc(d);
    }
    if (/^sich /.test(d)) { sich = 'sich '; d = d.slice(5); }
    if (w.prefix && d.toLowerCase().indexOf(w.prefix.toLowerCase()) === 0) {
      return esc(sich) + '<span class="pfx">' + esc(d.slice(0, w.prefix.length)) + '</span>' + esc(d.slice(w.prefix.length));
    }
    return esc(w.t);
  }
  function viewRoot(id) {
    var r = GT.roots[id];
    if (!r) {
      if (GT.ROOT_PLAN.indexOf(id) >= 0) return page(crumbsHTML('<a href="#/roots">Roots</a> · ' + esc(id.toUpperCase())) + '<div class="empty-state"><h3>' + esc(id.toUpperCase()) + ' · coming soon</h3><p>This root arrives in a later batch.</p></div>', 'mid');
      return notFound();
    }
    var words = rootWords(id), base = words.filter(function (w) { return w.base; })[0] || words[0];
    // German maps derived verbs (prefix + verb); other packs map every derived member of the family.
    var verbsOnly = r.mapVerbs != null ? r.mapVerbs : GT.feature('rootMapVerbs');
    var derived = uniqueByHead(words.filter(function (w) { return !w.base; }), base.t);
    var allVerbs = derived.filter(function (w) { return w.mapAs !== 'chip' && (!verbsOnly || isVerbPos(w.pos)); });
    if (verbsOnly && !allVerbs.length) { verbsOnly = false; allVerbs = derived; }
    var coreVerbs = allVerbs.filter(function (w) { return w.core; });
    var hasExtra = coreVerbs.length > 0 && coreVerbs.length < allVerbs.length;
    var showAll = !!ui.rootAll[id];
    var verbs = hasExtra && !showAll ? coreVerbs : allVerbs;
    var others = derived.filter(function (w) { return w.mapAs === 'chip' || (verbsOnly && !isVerbPos(w.pos)); });
    var c = counts(words);
    var h = crumbsHTML('<a href="#/roots">Roots</a> · ' + esc(rootName(r)) + ' · ' + words.length + ' words', c.total ? Math.round(c.known / c.total * 100) : 0);
    // constellation map
    var n = verbs.length, lines = '', nodes = '';
    verbs.forEach(function (w, i) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / n;
      var x = 50 + 41 * Math.cos(a), y = 50 + 40 * Math.sin(a);
      var tr = transparencyOf(w);
      var cls = tr === 'opaque' ? ' opaque' : tr === 'figurative' ? ' figurative' : '';
      lines += '<line x1="50" y1="50" x2="' + x.toFixed(2) + '" y2="' + y.toFixed(2) + '"' + (cls ? ' class="' + cls.trim() + '"' : '') + '/>';
      nodes += '<button class="rnode' + cls + '" style="left:' + x.toFixed(2) + '%;top:' + y.toFixed(2) + '%" data-act="root-select" data-root="' + esc(id) + '" data-id="' + esc(w.id) + '" lang="' + GT.learn + '"><span class="rn-de">' + splitPrefix(w) + '</span>' + nodeGloss(w) + (S.hasAnyCard(w.id) ? '<i class="rn-dot"></i>' : '') + '</button>';
    });
    h += '<div class="rmap"><svg class="rmap-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' + lines + '</svg>' +
      '<button class="rnode center" style="left:50%;top:50%" data-act="root-select" data-root="' + esc(id) + '" data-id="' + esc(base.id) + '" lang="' + GT.learn + '"><span class="rn-de">' + esc(r.t || r.verb) + '</span>' + (base.pair ? '<span class="rn-pair">' + esc(base.pair) + '</span>' : '') + '<span class="rn-ru" lang="' + GT.glLang(r) + '">' + esc(GT.gl(r)) + '</span></button>' + nodes + '</div>';
    if (hasExtra) {
      var what = verbsOnly ? 'derived verbs' : 'family members';
      h += '<div class="rmap-bar"><span class="mono-muted">' + (showAll ? 'Showing all ' + allVerbs.length + ' ' + what : 'Showing ' + coreVerbs.length + ' core ' + what) + '</span>' +
        '<button class="btn small" data-act="root-toggle-all" data-id="' + esc(id) + '">' + (showAll ? 'Show core (' + coreVerbs.length + ')' : 'Show all (' + allVerbs.length + ')') + '</button></div>';
    }
    if (others.length) {
      h += '<div class="rnouns"><span class="label">Nouns & more</span><div class="fam">' + others.map(function (w) {
        return '<button class="chip rchip" data-act="root-select" data-root="' + esc(id) + '" data-id="' + esc(w.id) + '" lang="' + GT.learn + '">' + (w.article ? '<span class="a-' + w.article + '">' + w.article + '</span> ' : '') + esc(w.t) + '</button>';
      }).join('') + '</div></div>';
    }
    var rnote = lxText(r, 'note');
    if (rnote) h += '<p class="note muted" style="margin:18px 0" lang="' + GT.lxLang(r, 'note') + '">' + esc(rnote) + '</p>';
    h += '<div id="rdetail"></div>';
    if (r.pairs && r.pairs.length) {
      h += '<h3 class="section-title">' + esc(r.pairsTitle || 'Stress pairs · trennbar vs untrennbar') + '</h3><div class="pairs">' + r.pairs.map(function (pr) {
        return '<div class="pair">' + [pr.a, pr.b].map(function (x) {
          return '<div class="pair-side"><div class="word-tags"><span class="tag dim">' + esc(x.sep) + '</span></div>' +
            '<div class="pair-head"><p class="pair-de" lang="' + GT.learn + '">' + esc(x.stress) + '</p>' + speakBtn(x.stress, 'sm') + '</div>' +
            '<p class="mean-ru" lang="' + GT.glLang(x) + '">' + esc(GT.gl(x)) + '</p>' +
            (x.ex ? '<div class="ex" style="margin-top:12px"><div class="grow"><p class="ex-de" lang="' + GT.learn + '" style="font-size:17px">' + rich(x.ex.t) + '</p><p class="ex-tr" lang="' + GT.glLang(x.ex) + '">' + esc(trOf(x.ex)) + '</p></div>' + speakBtn(x.ex.t, 'sm') + '</div>' : '') + '</div>';
        }).join('') + '</div>';
      }).join('') + '</div>';
    }
    var notIn = words.filter(function (w) { return !S.hasAnyCard(w.id); }).length;
    h += '<div class="actions">' + (GT.feature('prefixDrill') ? '<a class="btn primary" href="#/roots/drill/' + esc(id) + '">Drill ' + esc(rootName(r)) + ' →</a>' : '') +
      '<a class="btn' + (GT.feature('prefixDrill') ? '' : ' primary') + '" href="#/practice?scope=root:' + encodeURIComponent(id) + '">Practice in Studio</a>' +
      (notIn ? '<button class="btn" data-act="root-add-all" data-id="' + esc(id) + '">Add all to Review (' + notIn + ')</button>' : '') + '</div>';
    page(h);
    drawRootDetail(id);
  }
  function drawRootDetail(rootId) {
    var box = $('#rdetail');
    if (!box) return;
    var words = rootWords(rootId);
    var sel = GT.byId[ui.rootSel[rootId]];
    var w = sel || words.filter(function (x) { return x.base; })[0] || words[0];
    document.querySelectorAll('.rnode, .rchip').forEach(function (n) { n.classList.toggle('active', n.dataset.id === w.id); });
    var inDeck = S.hasAnyCard(w.id);
    var exs = w.examples || [];
    var showExs = exs.some(function (e) { return e.sense; }) ? exs : exs.slice(0, 1);
    var wn = lxText(w, 'note');
    var sameHead = words.filter(function (x) { return x !== w && x.t === w.t; });
    var pairLine = w.pair ? '<p class="parallel"><span class="label">' + esc(w.pairLabel || (w.aspect === 'pf' ? 'Imperfective' : 'Perfective')) + '</span><span lang="' + GT.learn + '"><b>' + esc(w.pair) + '</b></span>' + speakBtn(w.pair, 'xs') + '</p>' : '';
    var sensesLine = sameHead.length ? '<div class="rsenses"><span class="label">Other senses</span><div class="fam">' + sameHead.map(function (x) {
      return '<button class="chip rchip" data-act="root-select" data-root="' + esc(rootId) + '" data-id="' + esc(x.id) + '"><span class="mono-muted">' + esc(x.pos || '') + '</span> <span lang="' + GT.glLang(x) + '">' + esc(meaningOf(x)) + '</span></button>';
    }).join('') + '</div></div>' : '';
    box.innerHTML = '<div class="box rdetail">' + wordTags(w) +
      '<div class="hw-row"><h2 class="hw' + (hwSize(w.t) || ' long') + '" lang="' + GT.learn + '">' + esc(w.t) + '</h2>' + speakBtn(plainHead(w), true) + whyBtn(w) + '</div>' +
      meanings(w) + pairLine + parallelLine(w) + sensesLine +
      (showExs.length ? '<div style="margin-top:22px">' + examplesHTML(showExs) + '</div>' : '') +
      (wn ? '<p class="note" style="margin-top:20px" lang="' + GT.lxLang(w, 'note') + '">' + esc(wn) + '</p>' : '') +
      linksBox(w) +
      '<div class="actions actions-pair" style="margin-top:28px">' + (inDeck ? '<span class="mono-muted">✓ In Review</span>' : '<button class="btn primary" data-act="root-add" data-root="' + esc(rootId) + '" data-id="' + esc(w.id) + '">+ Review</button>') +
      '<a class="btn" href="#/item/' + encodeURIComponent(w.id) + '">Open card</a></div></div>';
  }

  function prefixExampleLink(e) {
    var hit = e.entryId ? GT.byId[e.entryId] : GT.items.filter(function (x) { return x.rootId && x.t === e.t; })[0];
    var inner = '<span lang="' + GT.learn + '">' + esc(e.t) + '</span>' + (trOf(e) ? ' <span class="mono-muted">—</span> <span lang="' + GT.glLang(e) + '">' + esc(trOf(e)) + '</span>' : '');
    return hit ? '<a class="chip chip-speak" href="#/item/' + encodeURIComponent(hit.id) + '"><span>' + inner + '</span>' + speakBtn(e.t, 'xs') + '</a>' : '<span class="chip chip-speak"><span>' + inner + '</span>' + speakBtn(e.t, 'xs') + '</span>';
  }
  function viewPrefix(id) {
    var pf = GT.prefixes[id];
    var crumb = crumbsHTML('<a href="#/roots">Roots</a> · ' + (pf && pf.kind === 'particle' ? 'Particle' : 'Prefix') + ' · ' + esc(pf ? pf.label : id.toUpperCase() + '-'));
    if (!pf) {
      if (GT.PREFIX_PLAN.indexOf(id) >= 0) return page(crumb + '<div class="empty-state"><h3>' + esc(id) + '- · coming soon</h3><p>This prefix arrives in a later batch.</p></div>', 'mid');
      return notFound();
    }
    if (!pf.meanings) return viewAffixReference(pf, 'prefix', '#/roots/prefixes', 'Prefixes');
    var h = crumb + '<div class="word-tags">' + (pf.sep ? '<span class="tag outline">' + esc(pf.sep) + '</span>' : '') + (pf.stress ? '<span class="mono-muted" lang="' + GT.lxLang(pf, 'stress') + '">' + esc(lxText(pf, 'stress')) + '</span>' : '') + '</div>' +
      '<div class="hw-row"><h1 class="hw">' + esc(pf.label) + '</h1></div><p class="mean-en" lang="' + GT.glLang(pf) + '">' + esc(GT.gl(pf)) + fbTag(GT.glLang(pf)) + '</p>';
    h += '<h3 class="section-title">Meanings</h3><div class="pmeanings">' + pf.meanings.map(function (m, i) {
      var parPfx = GT.know === 'ru' ? m.ruPrefix : GT.know === 'de' ? m.dePrefix : '', showRuPfx = !!parPfx;
      return '<div class="box"><div class="box-head"><span class="label">' + pad2(i + 1) + '</span>' + (showRuPfx ? '<span class="tag outline" lang="' + GT.know + '">' + esc(parPfx) + '</span>' : '') + '</div>' +
        '<p class="note" lang="' + GT.glLang(m) + '" style="margin-bottom:16px"><b>' + esc(GT.gl(m)) + '</b>' + (m.note ? ' — ' + esc(lxText(m, 'note')) : '') + '</p><div class="fam">' + m.examples.map(prefixExampleLink).join('') + '</div></div>';
    }).join('') + '</div>';
    if (pf.match && (GT.know === 'ru' || GT.lxLang(pf, 'match') === GT.know)) {
      var matchTitle = GT.lx(pf, 'matchTitle') || GT.cfg('prefixMatchTitle', GT.know === 'ru' ? 'Russian prefixes: match / no match' : 'Patterns & false friends');
      h += '<h3 class="section-title">' + esc(matchTitle) + '</h3><div class="box"><div class="prose" lang="' + GT.lxLang(pf, 'match') + '">' + lxText(pf, 'match') + '</div></div>';
    }
    if (pf.grammar) h += '<h3 class="section-title">Grammar</h3><div class="box"><div class="prose" lang="' + GT.lxLang(pf, 'grammar') + '">' + fbTag(GT.lxLang(pf, 'grammar')) + lxText(pf, 'grammar') + '</div></div>';
    var rootsWith = Object.keys(GT.roots).filter(function (rid) { return rootWords(rid).some(function (w) { return w.prefix === id; }); });
    if (rootsWith.length) h += '<div class="actions actions-grid">' + rootsWith.map(function (rid) { return '<a class="btn" href="#/roots/' + rid + '">' + esc(pf.label) + ' with ' + esc(rootName(GT.roots[rid])) + '</a>'; }).join('') + '</div>';
    page(h, 'mid');
  }

  /* Bidirectional prefix drill: (a) RU -> prefix; (b) DE sentence -> prefix meaning */
  var rd = null;
  function buildRootDrillPool(rootId, mode) {
    var ids = rootId && GT.roots[rootId] ? [rootId] : Object.keys(GT.roots);
    var pool = [];
    ids.forEach(function (rid) {
      rootWords(rid).forEach(function (w) {
        if (!isVerbPos(w.pos) || !w.prefix || transparencyOf(w) === 'opaque' || w.rootId !== rid) return;
        if (mode === 'mix' || mode === 'ru2pfx') {
          var sensed = (w.examples || []).map(function (e, i) { return e.sense ? i : -1; }).filter(function (i) { return i >= 0; });
          var exIdx = sensed.length ? sensed[Math.floor(Math.random() * sensed.length)] : 0;
          pool.push({ kind: 'ru2pfx', w: w, exIdx: exIdx });
        }
        if ((mode === 'mix' || mode === 'sent2mean') && w.prefixDrill && GT.prefixes[w.prefix]) {
          var pf = GT.prefixes[w.prefix];
          var pdList = Array.isArray(w.prefixDrill) ? w.prefixDrill : [w.prefixDrill];
          pdList.forEach(function (pd) {
            if (pf.meanings[pd.meaning] && w.examples[pd.ex]) {
              pool.push({ kind: 'sent2mean', w: w, pd: pd, pf: pf });
            }
          });
        }
        if (mode === 'mix' || mode === 'cloze') {
          var cIdx = (w.examples || []).map(function (e, i) { return /\[\[/.test(e.t || '') ? i : -1; }).filter(function (i) { return i >= 0; })[0];
          if (cIdx != null && clozeSiblings(w).length >= 2) pool.push({ kind: 'cloze', w: w, exIdx: cIdx });
        }
      });
    });
    return pool;
  }
  function viewRootDrill(rootId) {
    var mode = ui.rootDrillMode || 'mix';
    var pool = buildRootDrillPool(rootId, mode);
    rd = { rootId: rootId, mode: mode, queue: shuffle(pool).slice(0, 12), i: 0, right: 0, answered: null, given: null, opts: null };
    drawRootDrill();
  }
  function drillPattern(w) {
    if (w.drill && w.drill.t) return w.drill.t;
    if (w.particle) {
      var pl = String(pfLabel(w.prefix)).replace(/^…\s*/, '');
      return w.t.replace(new RegExp('(^|\\s)' + pl + '(?=\\s|$)', 'i'), '$1___');
    }
    var d = w.t.replace(/^sich /, '');
    return (/^sich /.test(w.t) ? 'sich ' : '') + '___' + d.slice(w.prefix.length);
  }
  /* Cloze distractors: other verbs of the same family (one per headword), e.g. take up / take on / take over. */
  function clozeSiblings(w) {
    var seen = {}; seen[plainHead(w)] = 1;
    return rootWords(w.rootId).filter(function (x) {
      if (x.id === w.id || x.rootId !== w.rootId || !isVerbPos(x.pos) || !x.prefix) return false;
      var k = plainHead(x);
      if (seen[k]) return false;
      seen[k] = 1; return true;
    });
  }
  function clozeVerbWord() { return GT.learn === 'en' ? 'phrasal verb' : 'verb'; }
  function modeTabsHTML(mode) {
    return '<div class="seg-tabs" role="tablist" aria-label="Drill direction">' +
      [['mix', 'Mixed'], ['ru2pfx', KS() + ' → ' + PW()], ['sent2mean', 'Sentence → ' + PW() + ' meaning'], ['cloze', 'Gap → ' + clozeVerbWord()]].map(function (o) {
        return '<button class="seg-tab' + (mode === o[0] ? ' active' : '') + '" type="button" data-act="rd-mode" data-v="' + o[0] + '">' + o[1] + '</button>';
      }).join('') + '</div>';
  }
  function drawRootDrill() {
    var R = rd;
    var crumbBase = '<a href="#/roots">Roots</a> · ' + PW() + ' drill' + (R.rootId ? ' · ' + esc(R.rootId.toUpperCase()) : '');
    if (!R.queue.length) {
      ui.keyHandler = null;
      return page(crumbsHTML(crumbBase) + modeTabsHTML(R.mode) + '<div class="empty-state"><h3>No items for this mode yet</h3><p>Sentence → meaning uses derived verbs linked to a loaded prefix page; Gap → verb needs at least three verbs in the family.</p></div>', 'mid');
    }
    if (R.i >= R.queue.length) {
      ui.keyHandler = null;
      return page(crumbsHTML(crumbBase, 100) + '<header class="page-head"><h1>Drill done</h1><p class="lead">' + R.right + ' of ' + R.queue.length + ' correct.</p></header>' +
        '<div class="actions actions-pair"><button class="btn primary" data-act="rd-again">Again</button><a class="btn" href="#/roots' + (R.rootId ? '/' + R.rootId : '') + '">Back</a></div>', 'narrow');
    }
    var item = R.queue[R.i], w = item.w, r = GT.roots[w.rootId];
    var keyId = R.i + ':' + item.kind + ':' + w.id;
    var opts = R.opts && R.opts.key === keyId ? R.opts.list : null;
    if (!opts) {
      if (item.kind === 'cloze') {
        opts = shuffle(shuffle(clozeSiblings(w)).slice(0, 3).map(function (x) { return x.id; }).concat([w.id]));
      } else if (item.kind === 'ru2pfx') {
        var pfx = [];
        rootWords(w.rootId).forEach(function (x) { if (x.prefix && pfx.indexOf(x.prefix) < 0 && x.prefix !== w.prefix) pfx.push(x.prefix); });
        opts = shuffle(shuffle(pfx).slice(0, 3).concat([w.prefix]));
      } else {
        var idxs = item.pf.meanings.map(function (_, idx) { return idx; }).filter(function (idx) { return idx !== item.pd.meaning; });
        opts = shuffle(shuffle(idxs).slice(0, 3).concat([item.pd.meaning]));
      }
      R.opts = { key: keyId, list: opts };
    }
    var h = crumbsHTML(crumbBase, Math.round(R.i / R.queue.length * 100)) + '<div class="review-col">' + modeTabsHTML(R.mode);

    if (item.kind === 'cloze') {
      var cex = w.examples[item.exIdx];
      var gapped = esc(String(cex.t).replace(/\[\[(.+?)\]\]/g, '\u0000')).replace(/\u0000/g, '<span class="blank">____</span>');
      h += '<div class="recall"><span class="label">Gap → ' + clozeVerbWord() + ' · ' + esc(rootName(r)) + ' — ' + esc(GT.gl(r)) + '</span>' +
        '<p class="prompt-de" lang="' + GT.learn + '">' + gapped + '</p>' +
        '<p class="hint" style="margin-top:14px">Which ' + clozeVerbWord() + ' fits the gap?</p></div>';
      if (R.answered === null) {
        h += '<div class="options">' + opts.map(function (oid, i) { var x = GT.byId[oid] || {}; return '<button class="opt" data-act="rd-opt" data-v="' + esc(oid) + '" lang="' + GT.learn + '">' + (i + 1) + ' · ' + esc(plainHead(x)) + '</button>'; }).join('') + '</div>';
      } else {
        var okC = R.answered, givenW = GT.byId[R.given];
        h += '<div class="verdict ' + (okC ? 'ok' : 'bad') + '">' + (okC ? '✓ Correct' : '✗ ' + esc(givenW ? plainHead(givenW) : '—') + ' is wrong · ' + esc(plainHead(w))) + '</div>';
        h += wordTags(w) + '<div class="hw-row"><p class="hw long" lang="' + GT.learn + '">' + splitPrefix(w) + '</p>' + speakBtn(plainHead(w), true) + whyBtn(w) + '</div>' +
          '<p class="mean-en" lang="' + GT.glLang(w) + '">' + esc(meaningOf(w)) + '</p>' + parallelLine(w);
        if (!okC && givenW) h += '<p class="note muted" lang="' + GT.glLang(givenW) + '" style="margin-top:10px"><span lang="' + GT.learn + '">' + esc(plainHead(givenW)) + '</span> = ' + esc(meaningOf(givenW)) + '</p>';
        h += '<div class="ex" style="margin-top:18px"><div class="grow"><p class="ex-de" lang="' + GT.learn + '">' + rich(cex.t) + '</p><p class="ex-tr" lang="' + GT.glLang(cex) + '">' + esc(trOf(cex)) + '</p></div>' + speakBtn(cex.t) + '</div>';
        h += '<div class="actionbar"><div class="actions">' + (S.hasAnyCard(w.id) ? '' : '<button class="btn" data-act="root-add" data-id="' + esc(w.id) + '">+ Review</button>') + '<button class="btn primary" data-act="rd-next">Next →</button></div><p class="kbd-hint">Enter · next</p></div>';
      }
    } else if (item.kind === 'ru2pfx') {
      var ex = (w.examples || [])[item.exIdx] || (w.examples || [])[0];
      var promptRu = w.drill && GT.gl(w.drill) ? GT.gl(w.drill) : (ex && ex.sense ? lxText(ex, 'sense') : meaningOf(w));
      h += '<div class="recall"><span class="label">' + KS() + ' → ' + PW() + ' · ' + esc(rootName(r)) + ' — ' + esc(GT.gl(r)) + '</span>' +
        '<p class="mean-en" lang="' + GT.know + '">' + esc(promptRu) + '</p>' +
        '<p class="rd-pattern" lang="' + GT.learn + '">' + esc(drillPattern(w)).replace('___', '<span class="blank">____</span>') + '</p></div>';
      if (R.answered === null) {
        h += '<div class="options">' + opts.map(function (o, i) { return '<button class="opt" data-act="rd-opt" data-v="' + esc(o) + '" lang="' + GT.learn + '">' + (i + 1) + ' · ' + esc(String(pfLabel(o)).replace(/^…\s*/, '')) + '</button>'; }).join('') + '</div>';
        if (S.settings.typing) h += '<form class="typing" data-act="rd-type" autocomplete="off"><input id="rdInput" lang="' + GT.learn + '" placeholder="Type the ' + PW().toLowerCase() + '…" autocapitalize="off" spellcheck="false"><button class="btn" type="submit">Check</button></form>';
      } else {
        var ok = R.answered;
        h += '<div class="verdict ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '✓ Correct' : '✗ ' + esc(R.given ? pfLabel(R.given) : '—') + ' is wrong · ' + esc(pfLabel(w.prefix))) + '</div>';
        h += wordTags(w) + '<div class="hw-row"><p class="hw long" lang="' + GT.learn + '">' + splitPrefix(w) + '</p>' + speakBtn(plainHead(w), true) + whyBtn(w) + '</div>' + parallelLine(w);
        if (ex) h += '<div class="ex" style="margin-top:18px"><div class="grow">' + (ex.sense ? '<span class="ex-sense" lang="' + GT.know + '">' + esc(lxText(ex, 'sense')) + '</span>' : '') + '<p class="ex-de" lang="' + GT.learn + '">' + rich(ex.t) + '</p><p class="ex-tr" lang="' + GT.glLang(ex) + '">' + esc(trOf(ex)) + '</p></div>' + speakBtn(ex.t) + '</div>';
        h += '<div class="actionbar"><div class="actions">' + (S.hasAnyCard(w.id) ? '' : '<button class="btn" data-act="root-add" data-id="' + esc(w.id) + '">+ Review</button>') + '<button class="btn primary" data-act="rd-next">Next →</button></div><p class="kbd-hint">Enter · next</p></div>';
      }
    } else {
      var ex2 = w.examples[item.pd.ex];
      var correctM = item.pf.meanings[item.pd.meaning];
      h += '<div class="recall"><span class="label">Explain prefix · ' + esc(item.pf.label) + ' in ' + esc(w.t) + '</span>' +
        '<div class="ex"><div class="grow"><p class="prompt-de" lang="' + GT.learn + '">' + rich(ex2.t) + '</p></div>' + speakBtn(ex2.t) + '</div>' +
        '<p class="hint" lang="' + GT.know + '" style="margin-top:14px">' + esc(GT.hint(item.pf.kind === 'particle' ? 'particleQ' : 'prefixQ', { P: item.pf.label })) + '</p></div>';
      if (R.answered === null) {
        h += '<div class="options">' + opts.map(function (mIdx, i) {
          var m = item.pf.meanings[mIdx];
          return '<button class="opt wide" data-act="rd-opt" data-v="' + mIdx + '" lang="' + GT.know + '"><span class="mono-muted" style="margin-right:10px">' + (i + 1) + '</span>' + esc(GT.gl(m)) + (GT.know === 'ru' && m.ruPrefix && m.ruPrefix !== '—' ? ' <span class="mono-muted">(' + esc(m.ruPrefix) + ')</span>' : '') + '</button>';
        }).join('') + '</div>';
      } else {
        var ok2 = R.answered;
        h += '<div class="verdict ' + (ok2 ? 'ok' : 'bad') + '">' + (ok2 ? '✓ Correct' : '✗ Correct meaning: ' + esc(GT.gl(correctM))) + '</div>';
        h += '<div class="drill-answer"><div class="a" lang="' + GT.know + '">' + esc(item.pf.label) + ' → ' + esc(GT.gl(correctM)) + (GT.know === 'ru' && correctM.ruPrefix && correctM.ruPrefix !== '—' ? ' (' + esc(correctM.ruPrefix) + ')' : '') + '</div>' +
          '<div class="x" lang="' + GT.lxLang(item.pd, 'explain') + '">' + esc(lxText(item.pd, 'explain')) + '</div></div>';
        h += '<p class="ex-tr" lang="' + GT.glLang(ex2) + '" style="margin-top:16px">' + esc(trOf(ex2)) + '</p>';
        h += '<div class="actions-row actions-inline" style="margin-top:16px">' + whyBtn(w) + '<a class="btn small" href="#/roots/p-' + esc(w.prefix) + '">Open ' + esc(item.pf.label) + '</a></div>';
        h += '<div class="actionbar"><div class="actions">' + (S.hasAnyCard(w.id) ? '' : '<button class="btn" data-act="root-add" data-id="' + esc(w.id) + '">+ Review</button>') + '<button class="btn primary" data-act="rd-next">Next →</button></div><p class="kbd-hint">Enter · next</p></div>';
      }
    }
    h += '</div>';
    page(h);
    var inp = $('#rdInput');
    if (inp && window.matchMedia('(min-width: 861px)').matches) inp.focus();
    ui.keyHandler = function (e) {
      if (rd.answered === null && /^[1-4]$/.test(e.key) && opts[Number(e.key) - 1] != null) rootDrillAnswer(opts[Number(e.key) - 1]);
      else if (rd.answered !== null && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); act('rd-next'); }
    };
  }
  function rootDrillAnswer(v) {
    var item = rd.queue[rd.i];
    if (item.kind === 'cloze') {
      rd.given = String(v || '');
      rd.answered = rd.given === item.w.id;
    } else if (item.kind === 'ru2pfx') {
      rd.given = String(v || '').trim().replace(/-$/, '');
      // Typed answers may be the particle itself ("up") while ids are namespaced ("pv-up").
      var typedId = Object.keys(GT.prefixes).filter(function (k) { return String(GT.prefixes[k].label).replace(/^…\s*|-$/g, '').toLowerCase() === rd.given.toLowerCase(); })[0];
      if (typedId && !GT.prefixes[rd.given]) rd.given = typedId;
      rd.answered = rd.given.toLowerCase() === item.w.prefix.toLowerCase();
    } else {
      rd.given = Number(v);
      rd.answered = rd.given === item.pd.meaning;
    }
    if (rd.answered) rd.right++;
    drawRootDrill();
  }

  /* ---------------- PRACTICE / LEARNING STUDIO (ported from English ETRNL) ---------------- */
  var studio = null;
  var STUDIO_MODES = {
    mixed: 'Mixed practice',
    recognition: 'Meaning in context',
    translation: 'Meaning → word',
    derivative: 'Root base → derivative',
    cloze: 'Cloze in context',
    affix: 'Prefixes & Suffixes',
    grammar: 'Grammar in context'
  };
  function studioModeName(k) {
    if (k === 'recognition') return 'Meaning in context (' + LS() + ' → ' + KS() + ')';
    if (k === 'translation') return GT.LANGS[GT.know].name + ' → ' + langMeta().name;
    return STUDIO_MODES[k] || k;
  }
  function proScopeItem(it) {
    return GT.inTab(it, 'it') || (GT.PRO_SUBS || []).some(function (s) { return GT.inTopic(it, s.tab, s.topic); }) ||
      (GT.cfg('proExtra') && GT.inTopic(it, GT.cfg('proExtra').tab, GT.cfg('proExtra').topic));
  }
  function studioScopeItems(scope) {
    var all = GT.items.filter(function (it) { return it.learnable !== false; });
    if (!scope || scope === 'all') return all;
    if (scope === 'words') return all.filter(function (it) { return GT.inTab(it, 'words') && !(GT.PRO_SUBS || []).some(function (s) { return s.tab === 'words' && GT.inTopic(it, 'words', s.topic); }); });
    if (scope === 'professional') return all.filter(proScopeItem);
    if (scope === 'expressions') return all.filter(function (it) { return GT.inTab(it, 'chunks') || GT.inTab(it, 'expressions') || GT.inTab(it, 'literature'); });
    if (scope === 'literature') return all.filter(function (it) { return GT.inTab(it, 'literature'); });
    if (scope === 'roots') return all.filter(function (it) { return !!it.rootId; });
    if (scope.indexOf('root:') === 0) {
      var rid = scope.slice(5);
      return all.filter(function (it) { return GT.inTopic(it, 'roots', rid); });
    }
    if (scope.indexOf('topic:') === 0) {
      var tp = scope.slice(6).split('.');
      return all.filter(function (it) { return GT.inTopic(it, tp[0], tp[1]); });
    }
    return all;
  }
  /** Base word for a "root base → derivative" question, or null. */
  function derivBaseOf(it) {
    if (it.derivFrom && GT.byId[it.derivFrom]) { var b = GT.byId[it.derivFrom]; return { t: b.t, gloss: meaningOf(b) }; }
    var r = rootOf(it);
    if (r && !it.base && it.pos === 'verb' && it.prefix) return { t: r.t || r.verb, gloss: GT.gl(r) };
    if (r && !it.base && !GT.feature('rootMapVerbs')) return { t: r.t || r.verb, gloss: GT.gl(r) };
    return null;
  }
  function makeStudioEntryQuestion(it, kind) {
    var exs = it.examples || [];
    var clozeEx = exs.filter(function (e) { return e.t && e.t.indexOf('[[') >= 0; });
    var ex = (clozeEx.length ? clozeEx[Math.floor(Math.random() * clozeEx.length)] : exs[0]) || null;
    var surface = ex ? clozeAnswers(ex.t).join(' ') : '';
    var q = {
      id: it.id, entry: it, kind: kind,
      direction: kind === 'recognition' ? 'rec' : 'prod',
      cardKey: GT.cardKey(it.id, kind === 'recognition' ? 'rec' : 'prod'),
      prompt: '', context: '', translation: '', base: '',
      answer: '', accepted: [], options: null,
      explain: lxText(it, 'note') || lxText(it, 'meaningExplanation') || lxText(it.lit, 'breakdown') || '',
      ex: ex
    };
    if (kind === 'recognition') {
      q.prompt = ex ? ex.t : plainHead(it);
      q.answer = (ex && ex.sense) ? lxText(ex, 'sense') : meaningOf(it);
      var sameType = GT.items.filter(function (w) { return w.id !== it.id && w.type === it.type && (!it.pos || w.pos === it.pos) && meaningOf(w) !== q.answer; });
      if (sameType.length < 3) sameType = GT.items.filter(function (w) { return w.id !== it.id && meaningOf(w) !== q.answer; });
      var dist = [];
      shuffle(sameType).forEach(function (w) {
        var m = meaningOf(w);
        if (m && m !== q.answer && dist.indexOf(m) < 0 && dist.length < 3) dist.push(m);
      });
      q.options = shuffle([q.answer].concat(dist));
    } else if (kind === 'derivative') {
      var db = derivBaseOf(it);
      q.base = db ? String(db.t).toUpperCase() + ' — ' + db.gloss : (it.root || '').toUpperCase();
      q.prompt = (ex && ex.sense) ? lxText(ex, 'sense') : meaningOf(it);
      q.context = ex ? ex.t.replace(/\[\[(.+?)\]\]/g, '________') : '';
      q.translation = ex ? trOf(ex) : '';
      q.answer = plainHead(it);
      q.accepted = [it.t, plainHead(it)];
      if (surface) q.accepted.push(surface);
      if (/^sich /.test(it.t)) q.accepted.push(it.t.slice(5));
    } else if (kind === 'cloze' && ex && surface) {
      q.prompt = GT.hint('restoreWord');
      q.context = ex.t.replace(/\[\[(.+?)\]\]/g, '________');
      q.translation = trOf(ex);
      q.answer = surface;
      q.accepted = [surface, it.t, plainHead(it)];
    } else {
      q.kind = 'translation';
      q.prompt = (ex && ex.sense) ? lxText(ex, 'sense') : meaningOf(it);
      q.context = it.type === 'chunk' ? (it.register || 'neutral') + ' · phrase' : (it.pos === 'noun' ? GT.cfg('nounHint', 'noun') : (it.pos || ''));
      q.answer = plainHead(it);
      q.accepted = [plainHead(it), it.t];
      if (/^sich /.test(it.t)) q.accepted.push(it.t.slice(5));
      if (it.type === 'chunk') q.accepted.push(plain(it.t));
    }
    return q;
  }
  function buildAffixQuestions() {
    var out = [];
    // Affix exercises (suffixes, and prefixes that carry a reference exercise)
    function fromAffix(a, kind, href) {
      if (!a || !a.exercise) return;
      var ex = a.exercise, opts = lxText(ex, 'options') || [];
      var drill = a.drillId && GT.byId[a.drillId];
      out.push({
        id: kind + ':' + a.id, entry: null, kind: 'affix', direction: 'rec', cardKey: drill ? drill.id : null,
        badge: (kind === 'sf' ? 'Suffix · ' : 'Prefix · ') + a.label,
        prompt: lxText(ex, 'question'),
        answer: lxText(ex, 'answer'),
        options: shuffle(opts),
        explain: lxText(ex, 'explain'),
        linkHref: href, linkLabel: 'Open ' + a.label
      });
    }
    GT.suffixOrder.forEach(function (sid) { fromAffix(GT.suffixes[sid], 'sf', '#/roots/s-' + sid); });
    Object.keys(GT.prefixes).forEach(function (pid) { fromAffix(GT.prefixes[pid], 'pfx', '#/roots/p-' + pid); });
    // Prefix meaning-in-context questions from roots
    Object.keys(GT.roots).forEach(function (rid) {
      rootWords(rid).forEach(function (w) {
        if (!w.prefixDrill || !GT.prefixes[w.prefix] || w.rootId !== rid) return;
        var pf = GT.prefixes[w.prefix];
        var list = Array.isArray(w.prefixDrill) ? w.prefixDrill : [w.prefixDrill];
        list.forEach(function (pd) {
          var ex = (w.examples || [])[pd.ex], cm = pf.meanings && pf.meanings[pd.meaning];
          if (!ex || !cm) return;
          var dist = shuffle(pf.meanings.filter(function (_, idx) { return idx !== pd.meaning; })).slice(0, 3).map(function (m) { return GT.gl(m); });
          out.push({
            id: 'pf:' + w.id + ':' + pd.ex, entry: w, kind: 'affix', direction: 'rec', cardKey: null,
            badge: 'Prefix · ' + pf.label + ' in ' + w.t,
            prompt: GT.hint('prefixQ', { P: pf.label }),
            contextDe: ex.t, translation: trOf(ex),
            answer: GT.gl(cm),
            options: shuffle([GT.gl(cm)].concat(dist)),
            explain: lxText(pd, 'explain'),
            linkHref: '#/roots/p-' + w.prefix, linkLabel: 'Open ' + pf.label
          });
        });
      });
    });
    return out;
  }
  function buildGrammarQuestions() {
    var out = [];
    Object.keys(GT.grammar).forEach(function (gid) {
      var pg = GT.grammar[gid];
      (pg.drills || []).forEach(function (d) {
        if (d.kind === 'choice') {
          var dOpts = drillOptions(d);
          out.push({
            id: d.id, entry: d, kind: 'grammar', direction: 'rec', cardKey: d.id,
            badge: 'Grammar · ' + lxText(pg, 'title'),
            prompt: String(lxText(d, 'q')).replace(/___/g, '________'),
            answer: dOpts[d.answer],
            options: dOpts.slice(),
            explain: lxText(d, 'explain') || '',
            linkHref: '#/grammar/' + gid, linkLabel: 'Open ' + lxText(pg, 'title')
          });
        } else if (d.kind === 'gap') {
          out.push({
            id: d.id, entry: d, kind: 'grammar', direction: 'prod', cardKey: d.id,
            badge: 'Grammar · ' + lxText(pg, 'title'),
            prompt: d.hint ? lxText(d, 'hint') : GT.hint('fillGrammar'),
            context: String(lxText(d, 'q')).replace(/___/g, '________'),
            answer: d.answer,
            accepted: [d.answer].concat(d.accepted || []),
            options: null,
            explain: lxText(d, 'explain') || '',
            linkHref: '#/grammar/' + gid, linkLabel: 'Open ' + lxText(pg, 'title')
          });
        }
      });
    });
    return out;
  }
  function buildStudioPool(opts) {
    var kind = opts.kind || 'mixed';
    var dir = opts.direction || 'both';
    var limit = Math.max(4, Math.min(25, Number(opts.limit) || 12));
    var pool = [];
    if (kind === 'affix') {
      pool = buildAffixQuestions();
    } else if (kind === 'grammar') {
      pool = buildGrammarQuestions().filter(function (q) { return dir === 'both' || q.direction === dir; });
    } else {
      var items = shuffle(studioScopeItems(opts.scope));
      items.forEach(function (it) {
        var canDer = !!derivBaseOf(it);
        var hasCloze = (it.examples || []).some(function (e) { return e.t && e.t.indexOf('[[') >= 0; });
        var types;
        if (kind === 'mixed') {
          var prodChoices = [];
          if (hasCloze) prodChoices.push('cloze');
          if (canDer) prodChoices.push('derivative');
          prodChoices.push('translation');
          types = [];
          if (dir === 'both' || dir === 'rec') types.push('recognition');
          if (dir === 'both' || dir === 'prod') types.push(prodChoices[Math.floor(Math.random() * prodChoices.length)]);
        } else {
          if (kind === 'derivative' && !canDer) return;
          if (kind === 'cloze' && !hasCloze) return;
          types = [kind];
        }
        types.forEach(function (tp) {
          var q = makeStudioEntryQuestion(it, tp);
          if (dir === 'both' || q.direction === dir) pool.push(q);
        });
      });
    }
    return shuffle(pool).slice(0, limit);
  }
  function syncStudioHelp() {
    var kindEl = $('#stKind'), dirEl = $('#stDir'), scopeEl = $('#stScope'), helpEl = $('#stHelp');
    if (!kindEl) return;
    var k = kindEl.value;
    if (dirEl) {
      if (k === 'recognition' || k === 'affix') { dirEl.value = 'rec'; dirEl.disabled = true; }
      else if (k === 'translation' || k === 'derivative' || k === 'cloze') { dirEl.value = 'prod'; dirEl.disabled = true; }
      else { dirEl.disabled = false; }
    }
    if (scopeEl) scopeEl.disabled = (k === 'affix' || k === 'grammar');
    if (helpEl) { helpEl.textContent = GT.hint('studio.' + k) || ''; helpEl.lang = GT.know; }
  }
  function viewPractice(params) {
    params = params || {};
    ui.lastStudioParams = params;
    studio = null;
    var defKind = params.kind && STUDIO_MODES[params.kind] ? params.kind : 'mixed';
    var defScope = params.scope || (params.root ? 'root:' + params.root : 'all');
    var dueAll = dueKeys('all', 'both').length;
    var recSt = dirStats('rec'), prodSt = dirStats('prod');
    var rootOpts = Object.keys(GT.roots).map(function (rid) {
      return '<option value="root:' + esc(rid) + '"' + (defScope === 'root:' + rid ? ' selected' : '') + '>Root · ' + esc(rootName(GT.roots[rid])) + ' (' + GT.roots[rid].ids.length + ')</option>';
    }).join('');
    var topicOpts = ['words', 'it', 'chunks', 'expressions', 'literature'].map(function (tb) {
      var list = GT.TOPICS[tb].filter(function (t) { return (GT.members[tb + '.' + t.id] || []).length; });
      if (!list.length) return '';
      var tdef = GT.TABS.find(function (x) { return x.id === tb; });
      return '<optgroup label="' + esc(tdef ? tdef.label : tb) + ' topics">' + list.map(function (t) {
        var v = 'topic:' + tb + '.' + t.id;
        return '<option value="' + esc(v) + '"' + (defScope === v ? ' selected' : '') + '>' + esc(t.name) + '</option>';
      }).join('') + '</optgroup>';
    }).join('');
    var h = '<header class="page-head"><span class="eyebrow">04 · Learning Studio · ' + esc(langMeta().name) + '</span><h1>Practice</h1><p class="lead">Active recall across words, word families, prefixes/suffixes, grammar and expressions. Check your answer first, then optionally schedule it directly into FSRS-5 Review.</p></header>';
    h += '<div class="stat-row"><div class="stat accent"><b>' + dueAll + '</b><span>due in review</span></div><div class="stat"><b>' + GT.items.length + '</b><span>words & phrases</span></div><div class="stat"><b>' + recSt.known + '</b><span>rec known</span></div><div class="stat"><b>' + prodSt.known + '</b><span>prod known</span></div></div>';
    h += '<form class="box" data-act="studio-start">' +
      '<span class="label ice">Session settings</span>' +
      '<div class="studio-grid">' +
        '<label class="st-field"><span class="label">Exercise type</span><select id="stKind" name="kind">' +
          Object.keys(STUDIO_MODES).map(function (k) { return '<option value="' + k + '"' + (defKind === k ? ' selected' : '') + '>' + esc(studioModeName(k)) + '</option>'; }).join('') +
        '</select></label>' +
        '<label class="st-field"><span class="label">Direction</span><select id="stDir" name="direction">' +
          '<option value="both">Both directions</option><option value="rec">Recognition (' + LS() + ' → ' + KS() + ')</option><option value="prod">Production (' + KS() + ' → ' + LS() + ')</option>' +
        '</select></label>' +
        '<label class="st-field"><span class="label">Scope</span><select id="stScope" name="scope">' +
          '<option value="all"' + (defScope === 'all' ? ' selected' : '') + '>Whole catalogue</option>' +
          '<option value="words"' + (defScope === 'words' ? ' selected' : '') + '>Language · Words</option>' +
          '<option value="professional"' + (defScope === 'professional' ? ' selected' : '') + '>Professional (Work, IT, Security)</option>' +
          '<option value="expressions"' + (defScope === 'expressions' ? ' selected' : '') + '>Expressions · All sections</option>' +
          '<option value="literature"' + (defScope === 'literature' ? ' selected' : '') + '>Literary Phrases · All themes</option>' +
          '<option value="roots"' + (defScope === 'roots' ? ' selected' : '') + '>Roots · All word families</option>' +
          '<optgroup label="Specific word family">' + rootOpts + '</optgroup>' + topicOpts +
        '</select></label>' +
        '<label class="st-field"><span class="label">Questions</span><select id="stLimit" name="limit">' +
          '<option value="8">8 questions</option><option value="12" selected>12 questions</option><option value="20">20 questions</option>' +
        '</select></label>' +
      '</div>' +
      '<p class="note muted" id="stHelp" lang="' + GT.know + '" style="margin-top:18px"></p>' +
      '<div class="actions" style="margin-top:24px"><button class="btn primary" type="submit">Start practice →</button><a class="btn" href="#/review">Go to due Review (' + dueAll + ')</a></div>' +
      '</form><div id="studioMsg"></div>';
    page(h, 'mid');
    syncStudioHelp();
  }
  function startStudioFromForm(form) {
    var opts = {
      kind: form.elements.kind.value,
      direction: form.elements.direction.value,
      scope: form.elements.scope.value,
      limit: form.elements.limit.value
    };
    var qs = buildStudioPool(opts);
    if (!qs.length) {
      var msg = $('#studioMsg');
      if (msg) msg.innerHTML = '<div class="empty-state"><h3>No matching questions</h3><p>Try a broader scope or switch to Mixed practice (e.g. Derivative mode uses Roots word families).</p></div>';
      return;
    }
    studio = { opts: opts, questions: qs, i: 0, correct: 0, graded: 0, checked: false, isCorrect: false, input: '', seen: [] };
    drawPractice();
    window.scrollTo(0, 0);
  }
  function studioAnswer(val) {
    var S2 = studio;
    if (!S2 || S2.checked) return;
    var q = S2.questions[S2.i];
    if (val === null) {
      S2.input = '';
      S2.isCorrect = false;
    } else {
      S2.input = String(val || '').trim();
      if (q.options) {
        S2.isCorrect = norm(S2.input) === norm(q.answer);
      } else {
        S2.isCorrect = (q.accepted && q.accepted.length ? q.accepted : [q.answer]).some(function (a) { return norm(a) === norm(S2.input); });
      }
    }
    S2.checked = true;
    if (S2.isCorrect) S2.correct++;
    if (q.entry && q.entry.type !== 'drill' && S2.seen.indexOf(q.entry.id) < 0) S2.seen.push(q.entry.id);
    drawPractice();
  }
  function studioRate(g) {
    var S2 = studio;
    if (!S2 || !S2.checked) return;
    var q = S2.questions[S2.i], now = Date.now();
    if (q.cardKey) {
      var prev = S.card(q.cardKey);
      var nc = F.rate(prev, g, now, S.settings.retention);
      nc.added = (prev && prev.added) || now;
      S.setCard(q.cardKey, nc);
      S.logActivity('reviews');
      S2.graded++;
      renderNav('practice');
    }
    S2.i++; S2.checked = false; S2.isCorrect = false; S2.input = '';
    drawPractice();
    window.scrollTo(0, 0);
  }
  function drawPractice() {
    var S2 = studio;
    if (!S2) return viewPractice(ui.lastStudioParams || {});
    if (S2.i >= S2.questions.length) return drawPracticeDone();
    var q = S2.questions[S2.i];
    var pct = Math.round(S2.i / S2.questions.length * 100);
    var dirTag = q.direction === 'rec' ? 'Recognition · ' + LS() + ' → ' + KS() + '' : 'Production · ' + KS() + ' → ' + LS() + '';
    var h = '<div class="review-col"><div class="sess-top"><span class="label ice">Practice · ' + esc(studioModeName(q.kind)) + '</span>' +
      '<span class="mono-muted">' + pad2(S2.i + 1) + ' / ' + pad2(S2.questions.length) + ' · <button class="link-btn" type="button" data-act="st-end" style="font-family:inherit;letter-spacing:inherit">End</button></span></div>' +
      '<div class="sess-line"><i style="width:' + pct + '%"></i></div>';

    h += '<div class="recall"><div class="word-tags" style="margin-bottom:14px"><span class="tag outline">' + esc(dirTag) + '</span>' + (q.badge ? '<span class="tag dim">' + esc(q.badge) + '</span>' : '') + '</div>';
    if (q.base) h += '<span class="label ice" style="display:block;margin-bottom:8px">Base · ' + esc(q.base) + '</span>';
    if (q.kind === 'recognition') {
      h += '<div class="ex"><div class="grow"><p class="prompt-de" lang="' + GT.learn + '">' + rich(q.prompt) + '</p></div>' + speakBtn(q.prompt) + '</div>';
      h += '<p class="hint" lang="' + GT.know + '" style="margin-top:12px">' + esc(GT.hint('pickMeaning')) + '</p>';
    } else if (q.contextDe) {
      h += '<div class="ex"><div class="grow"><p class="prompt-de" lang="' + GT.learn + '">' + rich(q.contextDe) + '</p></div>' + speakBtn(q.contextDe) + '</div>';
      h += '<p class="hint" lang="' + GT.know + '" style="margin-top:12px">' + esc(q.prompt) + '</p>';
    } else {
      h += '<p class="mean-en" lang="' + GT.know + '">' + esc(q.prompt) + '</p>';
      if (q.context) h += '<p class="prompt-de" lang="' + GT.learn + '" style="margin-top:14px">' + esc(q.context).replace(/________/g, '<span class="blank">____</span>') + '</p>';
      if (q.translation) h += '<p class="ex-tr" lang="' + GT.know + '" style="margin-top:8px">' + esc(q.translation) + '</p>';
    }
    h += '</div>';

    if (!S2.checked) {
      if (q.options) {
        h += '<div class="options">' + q.options.map(function (o, idx) {
          return '<button class="opt wide" type="button" data-act="st-choice" data-v="' + esc(o) + '" lang="' + (q.kind === 'grammar' ? GT.learn : GT.know) + '"><span class="mono-muted" style="margin-right:10px">' + (idx + 1) + '</span>' + esc(o) + '</button>';
        }).join('') + '</div><p class="kbd-hint">Keys 1–4 to choose</p>';
      } else {
        h += '<form class="typing" data-act="st-type" autocomplete="off"><input id="stInput" lang="' + GT.learn + '" placeholder="Type the ' + langMeta().name + ' answer…" autocapitalize="off" spellcheck="false" required><button class="btn primary" type="submit">Check</button></form>' +
          '<div class="actions-row"><button class="btn ghost small" type="button" data-act="st-reveal">Show answer</button></div>';
      }
    } else {
      h += '<div class="verdict ' + (S2.isCorrect ? 'ok' : 'bad') + '">' +
        (S2.isCorrect ? '✓ Correct' : (S2.input ? '✗ Your answer: <span class="yours">' + esc(S2.input) + '</span>' : 'Answer revealed')) + '</div>';
      if (q.entry && q.entry.type !== 'drill') {
        var it = q.entry;
        h += (it.type === 'word' ? wordTags(it) : '<div class="word-tags">' + meaningBadgeHTML(it) + '</div>');
        h += '<div class="hw-row"><p class="hw' + (it.type === 'chunk' ? ' chunk' : (hwSize(it.t) || ' long')) + '" lang="' + GT.learn + '">' + (it.type === 'chunk' ? rich(it.t) : esc(it.t)) + '</p>' + speakBtn(plainHead(it), true) + whyBtn(it) + '</div>';
        h += litBylineHTML(it) + '<p class="mean-en" lang="' + GT.glLang(it) + '">' + esc(meaningOf(it)) + '</p>';
      } else {
        h += '<div class="drill-answer"><div class="a">' + esc(q.answer) + '</div></div>';
      }
      if (q.explain) h += '<p class="note muted" lang="' + GT.know + '" style="margin-top:14px">' + esc(q.explain) + '</p>';
      if (q.ex) {
        h += '<div class="ex" style="margin-top:18px"><div class="grow">' + (q.ex.sense ? '<span class="ex-sense" lang="' + GT.know + '">' + esc(lxText(q.ex, 'sense')) + '</span>' : '') +
          '<p class="ex-de" lang="' + GT.learn + '">' + rich(q.ex.t) + '</p><p class="ex-tr" lang="' + GT.glLang(q.ex) + '">' + esc(trOf(q.ex)) + '</p></div>' + speakBtn(q.ex.t) + '</div>';
      } else if (q.translation) {
        h += '<p class="ex-tr" lang="' + GT.know + '" style="margin-top:12px">' + esc(q.translation) + '</p>';
      }
      if (q.linkHref) h += '<div class="actions-row" style="margin-top:14px"><a class="btn small" href="' + esc(q.linkHref) + '">' + esc(q.linkLabel || 'Open reference') + '</a></div>';

      if (q.cardKey) {
        var pv = F.preview(S.card(q.cardKey), Date.now(), S.settings.retention);
        var sug = S2.isCorrect ? 3 : 1;
        var names = { 1: 'Again', 2: 'Hard', 3: 'Good', 4: 'Easy' }, cls = { 1: 'again', 2: 'hard', 3: 'good', 4: 'easy' };
        h += '<div class="actionbar"><span class="label" style="display:block;margin-bottom:10px">Schedule into FSRS Review</span>' +
          '<div class="rate-grid' + (sug !== 3 ? ' has-suggest' : '') + '">' + [1, 2, 3, 4].map(function (g) {
            var dis = !S2.isCorrect && g >= 3 ? ' disabled' : '';
            return '<button class="rate ' + cls[g] + (sug === g && g !== 3 ? ' suggest' : '') + '" type="button" data-act="st-rate" data-g="' + g + '"' + dis + '>' + names[g] + '<small>' + pv[g].label + '</small></button>';
          }).join('') + '</div>' +
          '<div class="actions-row" style="margin-top:12px"><button class="btn ghost small" type="button" data-act="st-next">Skip rating · Next →</button></div>' +
          '<p class="kbd-hint">1–4 schedule · Enter next</p></div>';
      } else {
        h += '<div class="actionbar"><div class="actions"><button class="btn primary" type="button" data-act="st-next">Next →</button></div><p class="kbd-hint">Enter · next</p></div>';
      }
    }
    h += '</div>';
    page(h);
    var inp = $('#stInput');
    if (inp && window.matchMedia('(min-width: 861px)').matches) inp.focus();
    ui.keyHandler = function (e) {
      if (!studio.checked && q.options && /^[1-4]$/.test(e.key) && q.options[Number(e.key) - 1] != null) {
        studioAnswer(q.options[Number(e.key) - 1]);
      } else if (studio.checked) {
        if (e.key === 'Enter') { e.preventDefault(); act('st-next'); }
        else if (q.cardKey && /^[1-4]$/.test(e.key)) {
          var g = Number(e.key);
          if (studio.isCorrect || g <= 2) studioRate(g);
        }
      }
    };
  }
  function drawPracticeDone() {
    var S2 = studio;
    ui.keyHandler = null;
    var h = '<header class="page-head"><span class="eyebrow">Practice · Done</span><h1>Session complete</h1><p class="lead">' +
      S2.correct + ' of ' + S2.questions.length + ' correct · ' + plural(S2.graded, 'card') + ' scheduled into FSRS Review.</p></header>';
    h += '<div class="actions-row actions-split"><button class="btn primary" type="button" data-act="st-again">New practice session</button><a class="btn" href="#/review">Review due</a><a class="btn ghost" href="#/stats">Stats</a></div>';
    var items = S2.seen.map(function (id) { return GT.byId[id]; }).filter(Boolean);
    if (items.length >= 3) h += practicePanel(practiceFromItems(items), 'Now use these in a real ' + langMeta().name + ' conversation.');
    page(h, 'mid');
  }

  /* ---------------- router ---------------- */
  function parseQuery(qs) {
    var out = {};
    if (!qs) return out;
    qs.split('&').forEach(function (pair) {
      if (!pair) return;
      var i = pair.indexOf('=');
      var k = decodeURIComponent(i >= 0 ? pair.slice(0, i) : pair);
      var v = i >= 0 ? decodeURIComponent(pair.slice(i + 1)) : '';
      out[k] = v;
    });
    return out;
  }
  /** Old standalone-English URLs and shortcuts → unified routes. Returns a replacement hash or null. */
  function legacyRoute(p) {
    var t = p[0];
    if (t === 'expressions' && p[1] === 'literature') return '#/literature';
    if (p[2] === 'item' && p[3]) return '#/item/' + encodeURIComponent(p[3]);
    if (t === 'professional' && p[1]) return '#/it/' + p.slice(1).map(encodeURIComponent).join('/');
    if (t === 'idioms') return '#/expressions/' + (p[1] ? 'idioms-' + p[1] : 'idioms') + (p[2] ? '/' + p[2] : '');
    if (t === 'everyday-phrases') return '#/expressions/' + (p[1] ? 'everyday-' + p[1] : 'everyday') + (p[2] ? '/' + p[2] : '');
    if (t === 'family' && p[1]) return '#/roots/' + encodeURIComponent(p[1]);
    if (t === 'prefixes' || t === 'suffixes' || t === 'classical') return '#/roots/' + t;
    if (t === 'progress') return '#/stats';
    // Work-related B2 themes moved from Words to Professional.
    if (t === 'words' && /^(b2_beruf|b2_arbeitswelt|career-paths|world-of-work|b2_work)$/.test(p[1] || '')) return '#/it/' + p.slice(1).map(encodeURIComponent).join('/');
    if (t === 'review' && /^words\.(b2_beruf|b2_arbeitswelt|career-paths|world-of-work|b2_work)$/.test(p[1] || '')) return '#/review/' + p[1].replace(/^words\./, 'it.');
    return null;
  }
  function route(opts) {
    opts = opts || {};
    if (!ready) return;
    if (!opts.keep) { closeSidebar(); closeSheet(); }
    closeNavMenus();
    ui.keyHandler = null;
    var raw = location.hash.replace(/^#\/?/, '');
    var qIdx = raw.indexOf('?');
    var pathStr = qIdx >= 0 ? raw.slice(0, qIdx) : raw;
    var params = qIdx >= 0 ? parseQuery(raw.slice(qIdx + 1)) : {};
    var p = curPath(pathStr);
    var legacy = legacyRoute(p);
    if (legacy) { location.replace(legacy); return; }
    var tab = p[0];
    if (p[0] === 'item') { var it = GT.byId[p[1]]; tab = it ? it.tab : 'words'; }
    renderNav(tab, p);
    $('#settingsBtn').classList.toggle('active', p[0] === 'settings');
    renderSidebar(tab, p);
    switch (p[0]) {
      case 'professional': viewProfessionalLanding(); break;
      case 'expressions':
        if (!p[1]) viewExpressionsLanding();
        else if (p[1] === 'chunks') { location.replace('#/chunks'); return; }
        else if (p[2] === 'browse') viewBrowse('expressions', p[1]);
        else if (p[2] === 'learn') viewLearn('expressions', p[1]);
        else viewTopic('expressions', p[1]);
        break;
      case 'words': case 'it': case 'chunks': case 'literature':
        if (!p[1]) viewLanding(p[0]);
        else if (p[2] === 'browse') viewBrowse(p[0], p[1]);
        else if (p[2] === 'learn') viewLearn(p[0], p[1]);
        else viewTopic(p[0], p[1]);
        break;
      case 'vocabulary': case 'catalogue': viewBrowse('all', 'all'); break;
      case 'grammar': if (p[1]) viewGrammar(p[1]); else viewGrammarLanding(); break;
      case 'roots':
        if (!p[1]) viewRootsLanding('families');
        else if (p[1] === 'prefixes') viewRootsLanding('prefixes');
        else if (p[1] === 'suffixes') viewRootsLanding('suffixes');
        else if (p[1] === 'classical') viewRootsLanding('classical');
        else if (p[1] === 'drill') viewRootDrill(p[2] || '');
        else if (p[1].indexOf('p-') === 0 && (GT.prefixes[p[1].slice(2)] || GT.PREFIX_PLAN.indexOf(p[1].slice(2)) >= 0)) viewPrefix(p[1].slice(2));
        else if (p[1].indexOf('s-') === 0 && GT.suffixes[p[1].slice(2)]) viewSuffix(p[1].slice(2));
        else if (p[1].indexOf('c-') === 0 && GT.classical[p[1].slice(2)]) viewClassical(p[1].slice(2));
        else viewRoot(p[1]);
        break;
      case 'practice': viewPractice(params); break;
      case 'start': viewStart(params.lang); break;
      case 'about': location.replace('#/start' + (params.lang ? '?lang=' + encodeURIComponent(params.lang) : '')); return;
      case 'item': viewItem(p[1]); break;
      case 'user': viewUser(); break;
      case 'review': if (p[2] === 'go') viewReviewSession(p[1] || 'all'); else viewReviewLanding(p[1] || 'all'); break;
      case 'stats': viewStats(); break;
      case 'settings': viewSettings(); break;
      default: location.replace('#/words'); return;
    }
    if (!opts.keep) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () { route(); });

  /* ---------------- PWA (only when served over http/https) ---------------- */
  if (/^https?:$/.test(location.protocol)) {
    var link = document.createElement('link');
    link.rel = 'manifest'; link.href = 'manifest.webmanifest';
    document.head.appendChild(link);
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js', { scope: './' }).catch(function () {});
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
  }

  /* ================= LANGUAGES: "I know" / "I learn" ================= */
  var ready = false;
  var sessions = {};   // learned language -> { hash, learn, rev, studio, rd, params }

  function renderBrand() {
    var L = langMeta();
    $('.logo-lang').textContent = L.brand;
    $('.logo-code').textContent = L.short;
    document.title = 'ETRNL / ' + L.brand;
    var pair = $('#langPair');
    if (pair) pair.textContent = KS() + ' → ' + LS();
  }
  function langOptions(which) {
    var order = which === 'know' ? GT.KNOW_ORDER : GT.LEARN_ORDER;
    var cur = which === 'know' ? GT.know : GT.learn;
    return order.map(function (c) {
      return '<option value="' + c + '"' + (c === cur ? ' selected' : '') + '>' + esc(GT.LANGS[c].name) + '</option>';
    }).join('');
  }
  function langSelect(which) {
    return '<select data-lang="' + which + '" aria-label="' + (which === 'know' ? 'I know' : 'I learn') + '">' + langOptions(which) + '</select>';
  }
  /** Share of items of the active pack that have a gloss in the known language. */
  function glossCoverage() {
    var items = GT.items, n = 0;
    if (!items.length) return 1;
    items.forEach(function (it) { if (it[GT.know]) n++; });
    return n / items.length;
  }
  function renderLangPop() {
    var pop = $('#langPop');
    if (!pop) return;
    var cov = glossCoverage(), base = GT.cfg('baseKnown', 'ru');
    var note = '';
    if (GT.pack && GT.pack.loaded && cov < 0.995) {
      note = '<p class="lang-note">' + Math.round(cov * 100) + '% of ' + esc(langMeta().name) + ' entries have ' + esc(GT.LANGS[GT.know].name) + ' meanings so far. Missing ones fall back to ' + esc(GT.LANGS[base].name) + ', marked <span class="fb-tag">' + esc(GT.LANGS[base].short) + '</span>.</p>';
    }
    pop.innerHTML = '<div class="lang-pop-head"><span class="label ice">Languages</span><button class="icon-btn" type="button" data-act="lang-close" aria-label="Close">' + icon('x') + '</button></div>' +
      '<label class="lang-field"><span class="label">I know</span>' + langSelect('know') + '</label>' +
      '<label class="lang-field"><span class="label">I learn</span>' + langSelect('learn') + '</label>' +
      note + '<p class="lang-loading" id="langLoading" hidden>Loading…</p>';
  }
  function openLangPop() {
    var pop = $('#langPop');
    renderLangPop();
    pop.hidden = false;
    $('#langBtn').setAttribute('aria-expanded', 'true');
    $('#langBtn').classList.add('active');
    var first = pop.querySelector('select');
    if (first) first.focus();
  }
  function closeLangPop(focusBtn) {
    var pop = $('#langPop');
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    $('#langBtn').setAttribute('aria-expanded', 'false');
    $('#langBtn').classList.remove('active');
    if (focusBtn) $('#langBtn').focus();
  }
  function curPath(pathStr) {
    if (pathStr === undefined) pathStr = location.hash.replace(/^#\/?/, '').split('?')[0];
    var path = pathStr.split('/').filter(Boolean).map(decodeURIComponent);
    return path.length ? path : ['start'];
  }

  /** Re-render the current screen in place (known-language change): keeps sessions, answers and scroll. */
  function redrawInPlace() {
    var y = window.scrollY, p = curPath(), settingsOpen = sheetEl.classList.contains('open') && sheetEl.dataset.mode === 'settings';
    var whyOpen = sheetEl.classList.contains('open') && sheetEl.dataset.mode === 'why';
    renderBrand();
    if (p[2] === 'learn' && learn && learn.tab === p[0] && learn.id === p[1] && learn.i < learn.queue.length) {
      renderNav(p[0], p); renderSidebar(p[0], p); drawLearn();
    } else if (p[0] === 'review' && p[2] === 'go' && rev) {
      rev.queue.forEach(function (q, i) {
        if (i < rev.i || q.ex == null) return;
        var it = GT.byId[q.id], ex = it && it.examples && it.examples[q.ex];
        if (ex && ex.sense) q.sense = lxText(ex, 'sense');
      });
      renderNav('review', p); renderSidebar('review', p); drawReview();
    } else if (p[0] === 'practice' && studio) {
      studio.questions = studio.questions.map(function (q, i) {
        if ((i === studio.i && studio.checked) || i < studio.i || !q.entry || q.entry.type === 'drill' || q.kind === 'affix' || q.kind === 'grammar') return q;
        return makeStudioEntryQuestion(q.entry, q.kind);
      });
      renderNav('practice', p); drawPractice();
    } else if (p[0] === 'roots' && p[1] === 'drill' && rd) {
      renderNav('roots', p); renderSidebar('roots', p); drawRootDrill();
    } else {
      route({ keep: true });
    }
    if (settingsOpen) openSettings();
    else if (whyOpen) closeSheet();
    window.scrollTo(0, y);
  }

  function activatePack(lang) {
    GT.setActive(lang);
    S.use(lang);
    var pk = GT.pack;
    if (!pk.rootsTopicsBuilt) {
      GT.TOPICS.roots = Object.keys(GT.roots).map(function (id) { return { id: id, name: rootName(GT.roots[id]), group: 'Roots' }; });
      pk.rootsTopicsBuilt = true;
    }
    stopSpeak();
    if (tts.ok) pickVoice();
    renderBrand();
  }
  /** Map the current hash to the nearest route that exists in the active pack. */
  function nearestValidHash() {
    var p = curPath(), t = p[0];
    if (t === 'item') return GT.byId[p[1]] ? null : '#/words';
    if ((t === 'words' || t === 'it' || t === 'chunks' || t === 'expressions' || t === 'literature') && p[1]) {
      if ((t === 'chunks' || t === 'literature') && p[1] === 'all') return null;
      return GT.topic(t, p[1]) ? null : '#/' + t;
    }
    if (t === 'grammar' && p[1]) return GT.topic('grammar', p[1]) ? null : '#/grammar';
    if (t === 'roots' && p[1] && ['prefixes', 'suffixes', 'classical', 'drill'].indexOf(p[1]) < 0) {
      var id = p[1];
      if (/^p-/.test(id)) return GT.prefixes[id.slice(2)] ? null : '#/roots/prefixes';
      if (/^s-/.test(id)) return GT.suffixes[id.slice(2)] ? null : '#/roots/suffixes';
      if (/^c-/.test(id)) return GT.classical[id.slice(2)] ? null : '#/roots/classical';
      return GT.roots[id] || GT.ROOT_PLAN.indexOf(id) >= 0 ? null : '#/roots';
    }
    if (t === 'roots' && p[1] === 'drill' && !GT.feature('prefixDrill')) return '#/roots';
    if (t === 'practice' && /scope=root(:|%3A)/.test(location.hash)) return '#/practice';
    return null;
  }
  function switchLearn(lang, targetHash) {
    var prev = GT.learn;
    if (lang === prev) {
      if (targetHash && location.hash !== targetHash) { location.hash = targetHash; route(); }
      return Promise.resolve();
    }
    sessions[prev] = { hash: location.hash, learn: learn, rev: rev, studio: studio, rd: rd, params: ui.lastStudioParams };
    var loading = $('#langLoading');
    if (loading) loading.hidden = false;
    document.body.classList.add('pack-loading');
    return GT.loadPack(lang).then(function () {
      document.body.classList.remove('pack-loading');
      if (loading) loading.hidden = true;
      activatePack(lang);
      learn = null; rev = null; studio = null; rd = null;
      if (targetHash) {
        if (location.hash !== targetHash) location.hash = targetHash;
        route();
        return;
      }
      var saved = sessions[lang];
      var fix = nearestValidHash();
      if (fix) { location.replace(fix); return; }   // hashchange re-routes
      var p = curPath();
      if (saved && saved.hash === location.hash) {
        // same screen as when we left this language: resume its session
        learn = saved.learn; rev = saved.rev; studio = saved.studio; rd = saved.rd; ui.lastStudioParams = saved.params;
        if (p[2] === 'learn' && learn && learn.i < learn.queue.length) { renderNav(p[0], p); renderSidebar(p[0], p); drawLearn(); return; }
        if (p[0] === 'review' && p[2] === 'go' && rev) { renderNav('review', p); renderSidebar('review', p); drawReview(); return; }
        if (p[0] === 'practice' && studio) { renderNav('practice', p); renderSidebar('practice', p); drawPractice(); return; }
        if (p[0] === 'roots' && p[1] === 'drill' && rd) { renderNav('roots', p); renderSidebar('roots', p); drawRootDrill(); return; }
      }
      var settingsOpen = sheetEl.classList.contains('open') && sheetEl.dataset.mode === 'settings';
      route({ keep: true });
      if (settingsOpen) openSettings();
    });
  }
  /** Apply a new language pair. Either side may change; equal languages are swapped automatically. */
  function setLanguages(which, value, targetHash) {
    var know = GT.know, learnL = GT.learn;
    if (which === 'know') { if (value === learnL) learnL = know; know = value; }
    else { if (value === know) know = learnL; learnL = value; }
    var knowChanged = know !== GT.know;
    GT.know = know;
    // Start page: a ?lang= article override would pin the old language; drop it so the article follows "I know".
    if (knowChanged && !targetHash && curPath()[0] === 'start' && location.hash.indexOf('?') >= 0) {
      history.replaceState(null, '', location.pathname + location.search + '#/start');
    }
    S.settings.knowLang = know;
    S.settings.learnLang = learnL;
    S.saveSettings();
    var done = learnL !== GT.learn ? switchLearn(learnL, targetHash)
      : Promise.resolve(targetHash ? (location.hash !== targetHash ? (location.hash = targetHash, route()) : route()) : (knowChanged ? redrawInPlace() : null));
    return done.then(function () {
      var pop = $('#langPop');
      if (pop && !pop.hidden) {
        var focusKey = which;
        renderLangPop();
        var sel = pop.querySelector('[data-lang="' + focusKey + '"]');
        if (sel) sel.focus();
      }
      document.querySelectorAll('.sheet [data-lang]').forEach(function (s) { s.innerHTML = langOptions(s.dataset.lang); });
      GT.toast(GT.LANGS[know].name + ' → ' + GT.LANGS[learnL].name);
    });
  }
  GT.setLanguages = setLanguages;   // for QA / console

  function initLanguageUI() {
    var btn = $('#langBtn');
    if (!btn) return;
    btn.insertAdjacentHTML('afterbegin', icon('globe'));
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if ($('#langPop').hidden) openLangPop(); else closeLangPop();
    });
    document.addEventListener('click', function (e) {
      var pop = $('#langPop');
      if (pop && !pop.hidden && !e.target.closest('#langPop') && !e.target.closest('#langBtn')) closeLangPop();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('#langPop').hidden) { e.stopImmediatePropagation(); closeLangPop(true); }
    }, true);
    document.addEventListener('change', function (e) {
      var el = e.target;
      if (el && el.dataset && el.dataset.lang) setLanguages(el.dataset.lang, el.value);
    });
  }

  /* ---------------- stress marks (Russian) ----------------
   * Web-font subsets put U+0301 in a different file from Cyrillic letters, so the combining accent renders
   * misplaced. Visible text "а́" is shown as <span class="stress">а</span> with a CSS accent instead.
   * Data, speech, answers and copied prompts keep the original characters. */
  var STRESS_SPLIT = /([^\s\u0301])\u0301/;
  function decorateStress(root) {
    if (!root) return;
    if (root.nodeType === 3) { stressTextNode(root); return; }
    if (root.nodeType !== 1 || /^(PRE|TEXTAREA|SCRIPT|STYLE|OPTION|SELECT)$/.test(root.tagName)) return;
    if (root.textContent.indexOf('\u0301') < 0) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), list = [], n;
    while ((n = walker.nextNode())) if (n.nodeValue.indexOf('\u0301') >= 0) list.push(n);
    list.forEach(stressTextNode);
  }
  function stressTextNode(node) {
    var par = node.parentNode;
    if (!par || node.nodeValue.indexOf('\u0301') < 0 || (par.closest && par.closest('pre, textarea, option, select, .stress'))) return;
    var parts = node.nodeValue.split(STRESS_SPLIT), frag = document.createDocumentFragment();
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) { if (parts[i]) frag.appendChild(document.createTextNode(parts[i].replace(/\u0301/g, ''))); }
      else { var sp = document.createElement('span'); sp.className = 'stress'; sp.textContent = parts[i]; frag.appendChild(sp); }
    }
    par.replaceChild(frag, node);
  }
  if (window.MutationObserver) {
    new MutationObserver(function (muts) {
      muts.forEach(function (m) { for (var i = 0; i < m.addedNodes.length; i++) decorateStress(m.addedNodes[i]); });
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ---------------- start ---------------- */
  (function start() {
    var s = S.settings;
    var learnL = GT.LANGS[s.learnLang] ? s.learnLang : 'de';
    var knowL = GT.LANGS[s.knowLang] && s.knowLang !== learnL ? s.knowLang : (learnL === 'ru' ? 'en' : 'ru');
    GT.know = knowL;
    applyTheme();
    initLanguageUI();
    GT.loadPack(learnL).then(function () {
      activatePack(learnL);
      ready = true;
      route();
      if (S.sync && S.sync.init) S.sync.init();
    });
  })();
})();
