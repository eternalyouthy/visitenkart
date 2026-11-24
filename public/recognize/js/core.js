/* ETRNL core: language packs + data registration + localisation helpers.
 *
 * One shared app, many learnable languages. Every learnable language is a PACK:
 *   GT.packs.de / GT.packs.en / GT.packs.ru  -> { items, byId, grammar, roots, prefixes, suffixes, classical, config, ... }
 * The app always works on the ACTIVE pack. GT.items, GT.byId, GT.TOPICS, GT.roots ... are getters that point
 * to the active pack, so view code never needs to know which language it is rendering.
 *
 * Data files call GT.register(...), GT.registerRoot(...), etc. They are loaded by GT.loadPack(lang)
 * (see index.html), which sets the "loading pack" first, so data files never name their language.
 *
 * Field conventions (see README.md → "Data model"):
 *   t                 target-language text (the thing being learned). Legacy German files use `de`,
 *                     which is aliased to `t` on registration (config.targetKey = 'de').
 *   ru / en / de      short GLOSS (meaning) in that known language. Read with GT.gl(obj).
 *   note, explain ... explanations. A plain string is written in the pack's base explanation language
 *                     (config.baseKnown); an object { en: '…', de: '…' } holds several languages;
 *                     obj.i18n[lang][field] holds overlay translations. Read with GT.lx(obj, field).
 */
(function () {
  'use strict';
  var GT = (self.GT = self.GT || {});
  var LANG_CODES = ['ru', 'en', 'de'];

  GT.packs = {};
  GT.learn = 'de';   // language being learned (active pack)
  GT.know = 'ru';    // language the learner already knows (glosses & explanations)
  GT.loadErrors = GT.loadErrors || [];

  function blankPack(lang) {
    return {
      lang: lang, loaded: false, loading: null,
      items: [], byId: {}, grammar: {}, roots: {}, prefixes: {}, suffixes: {}, classical: {},
      suffixOrder: [], classicalOrder: [], duplicates: [], loadErrors: [], members: {},
      config: { TOPICS: {}, NAV: [], PRO_SUBS: [], ROOT_PLAN: [], PREFIX_PLAN: [], baseKnown: 'ru', features: {}, intro: {} }
    };
  }
  GT.pack = null;      // active pack
  GT._target = null;   // pack receiving registrations while its files load

  /** Create or extend a pack's config (navigation, topics, plans, feature flags, texts). */
  GT.definePack = function (lang, config) {
    var p = GT.packs[lang] || (GT.packs[lang] = blankPack(lang));
    Object.keys(config || {}).forEach(function (k) { p.config[k] = config[k]; });
    var T = p.config.TOPICS;
    ['words', 'it', 'expressions', 'chunks', 'literature', 'grammar', 'roots'].forEach(function (tab) { if (!T[tab]) T[tab] = []; });
    if (!GT.pack) GT.pack = p;
    return p;
  };
  GT.setActive = function (lang) {
    GT.pack = GT.packs[lang] || GT.definePack(lang, {});
    GT.learn = lang;
  };
  function target() {
    if (!GT._target) GT._target = GT.pack || GT.definePack('de', {});
    return GT._target;
  }

  /* Active-pack getters: existing view code keeps using GT.items, GT.roots, GT.TOPICS ... */
  ['items', 'byId', 'grammar', 'roots', 'prefixes', 'suffixes', 'classical', 'suffixOrder', 'classicalOrder', 'duplicates', 'members'].forEach(function (k) {
    Object.defineProperty(GT, k, { configurable: true, get: function () { return (GT.pack || target())[k]; } });
  });
  ['TOPICS', 'NAV', 'PRO_SUBS', 'ROOT_PLAN', 'PREFIX_PLAN', 'B1_TOTAL'].forEach(function (k) {
    Object.defineProperty(GT, k, {
      configurable: true,
      get: function () { return (GT.pack || target()).config[k]; },
      set: function (v) { (GT.pack || target()).config[k] = v; }
    });
  });
  GT.cfg = function (k, dflt) { var c = (GT.pack || target()).config; return c[k] != null ? c[k] : dflt; };
  GT.feature = function (k) { return !!(GT.pack && GT.pack.config.features && GT.pack.config.features[k]); };

  /* ---------- target-text alias (legacy `de` -> `t`) ---------- */
  function aliasDeep(o, key, depth) {
    if (!o || typeof o !== 'object' || depth > 6) return;
    if (Array.isArray(o)) { o.forEach(function (x) { aliasDeep(x, key, depth + 1); }); return; }
    if (typeof o[key] === 'string' && o.t == null) o.t = o[key];
    Object.keys(o).forEach(function (k) { if (k !== 'i18n' && o[k] && typeof o[k] === 'object') aliasDeep(o[k], key, depth + 1); });
  }
  function normalize(p, o) { if (p.config.targetKey) aliasDeep(o, p.config.targetKey, 0); return o; }

  function addMember(p, it, tab, topic) {
    var key = tab + '.' + topic;
    it.memberOf = it.memberOf || {};
    it.tabs = it.tabs || {};
    if (it.memberOf[key]) return;
    it.memberOf[key] = true;
    it.tabs[tab] = true;
    (p.members[key] || (p.members[key] = [])).push(it);
  }
  GT.addMember = function (id, tab, topic) {
    var p = target(), it = p.byId[id];
    if (it) addMember(p, it, tab, topic);
  };
  GT.inTopic = function (it, tab, topic) { return !!(it && it.memberOf && it.memberOf[tab + '.' + topic]); };
  GT.inTab = function (it, tab) { return !!(it && it.tabs && it.tabs[tab]); };

  /**
   * GT.register({ tab: 'words', topic: 'health', items: [...] })
   * tab: 'words' | 'it' | 'chunks' | 'expressions'. For chunks, topic is the function id (e.g. 'opinion').
   * Optional item.alsoIn: [['it','security'], ...] — extra topic memberships (shared progress, one card).
   */
  GT.register = function (pack) {
    var p = target();
    (pack.items || []).forEach(function (it) {
      it.tab = it.tab || pack.tab;
      it.topic = it.topic || pack.topic;
      it.type = it.type || pack.type || (it.tab === 'chunks' || it.tab === 'literature' ? 'chunk' : 'word');
      if (p.byId[it.id]) { p.duplicates.push(it.id); return; }
      normalize(p, it);
      p.items.push(it);
      p.byId[it.id] = it;
      addMember(p, it, it.tab, it.topic);
      (it.alsoIn || []).forEach(function (m) { addMember(p, it, m[0], m[1]); });
    });
  };

  /* ---------- Expressions: sections (Idioms, Slang, Everyday Phrases) with categories ----------
   * Same structure in every pack. A section is a topic of tab `expressions` (e.g. `idioms`); its categories are
   * topics too (`idioms-people`, parent: 'idioms'). Category membership comes from GT.classifyExpressions (a map
   * per pack) or from items registered with a category as their topic. Every category member is also a member
   * of its section, so "All idioms" = the section topic. Names are interface text (English). */
  GT.EXP_SECTIONS = [
    { id: 'idioms', name: 'Idioms', desc: 'Figurative expressions with literal vs real meaning.', cats: [
      { id: 'idioms-people', name: 'People & Feelings', desc: 'Relationships, getting along, moods, nerves and happiness.' },
      { id: 'idioms-talk', name: 'Talking & Understanding', desc: 'Speaking plainly, gossip, jokes, getting it — or not getting it at all.' },
      { id: 'idioms-work', name: 'Work & Effort', desc: 'Being busy, getting started, putting things off and working smart.' },
      { id: 'idioms-situations', name: 'Problems & Luck', desc: 'Trouble, hidden problems, good luck and staying afloat.' },
      { id: 'idioms-decisions', name: 'Decisions & Risk', desc: 'Risky bets, hard choices, staying calm and keeping perspective.' }
    ] },
    { id: 'slang', name: 'Slang', desc: 'Street and youth slang: what people actually say among friends.', cats: [
      { id: 'slang-crew', name: 'Greetings & Crew', desc: 'How friends address and greet each other on the street.' },
      { id: 'slang-react', name: 'Reactions & Hype', desc: 'Wow, cool, cringe, no way: reacting like a local.' },
      { id: 'slang-people', name: 'People & Attitude', desc: 'Labels for people, respect, showing off and drama.' },
      { id: 'slang-life', name: 'Money, Chilling & Street', desc: 'Cash, food, hanging out, partying and getting out of trouble.' },
      { id: 'slang-rude', name: 'Swearing & Insults (18+)', desc: 'Swear words and fighting words. Know them so you understand them; say them and you may get hit.' }
    ] },
    { id: 'everyday', name: 'Everyday Phrases', desc: 'Short high-frequency replies for everyday conversation.', cats: [
      { id: 'everyday-respond', name: 'Reacting & Replying', desc: 'Really? I see. Exactly. No idea. Quick reactions in conversation.' },
      { id: 'everyday-opinion', name: 'Agreeing & Doubting', desc: 'It depends, why not, no way, it’s a matter of taste.' },
      { id: 'everyday-arrange', name: 'Plans & Arrangements', desc: 'We’ll see, sounds good, let me know, I’ll be right back.' },
      { id: 'everyday-comfort', name: 'Reassuring & Comforting', desc: 'Never mind, don’t worry, we’ll manage, no offence.' },
      { id: 'everyday-social', name: 'Wishes & Politeness', desc: 'Thanks, you’re welcome, sorry, good luck, get well soon.' }
    ] }
  ];
  /* Chunk functions grouped for the sidebar (ids with - or _). */
  GT.CHUNK_GROUPS = [
    { name: 'Discussion', ids: ['opinion', 'agree', 'clarify'] },
    { name: 'Problems & Services', ids: ['complain', 'problem', 'appointments'] },
    { name: 'Calls, Emails & Small Talk', ids: ['phone', 'email', 'smalltalk'] },
    { name: 'IT & Work', ids: ['it_standup', 'it_bug', 'it_help', 'it_meeting'] }
  ];
  /** GT.classifyExpressions({ 'idioms-people': [ids], ... }, { slang: { desc, scenario } }) — per pack. */
  GT.classifyExpressions = function (map, topics) {
    var p = target();
    p.expCats = p.expCats || {};
    Object.keys(map || {}).forEach(function (k) { p.expCats[k] = (p.expCats[k] || []).concat(map[k]); });
    p.expTopics = p.expTopics || {};
    Object.keys(topics || {}).forEach(function (k) { p.expTopics[k] = topics[k]; });
  };
  function dropMember(p, it, key) {
    if (!it.memberOf || !it.memberOf[key]) return;
    delete it.memberOf[key];
    var list = p.members[key];
    if (list) { var i = list.indexOf(it); if (i >= 0) list.splice(i, 1); }
  }
  /** Rebuild TOPICS.expressions, category memberships, the Expressions menu and chunk groups (after a pack loads). */
  GT.setupExpressions = function (p) {
    var T = p.config.TOPICS;
    if (!T) return;
    var old = {}, parentOf = {}, list = [], extra = p.expTopics || {};
    (T.expressions || []).forEach(function (t) { old[t.id] = t; });
    GT.EXP_SECTIONS.forEach(function (sec) {
      var o = old[sec.id] || {}, x = extra[sec.id] || {};
      var u = Object.assign({}, o, x, { id: sec.id, name: sec.name, group: sec.name, hidden: false, section: true,
        cats: sec.cats.map(function (c) { return c.id; }) });
      u.desc = x.desc || o.desc || sec.desc;
      list.push(u);
      sec.cats.forEach(function (c) {
        parentOf[c.id] = sec.id;
        var oc = old[c.id] || {};
        list.push(Object.assign({}, oc, extra[c.id] || {}, { id: c.id, name: c.name, desc: c.desc, parent: sec.id, group: sec.name, hidden: false,
          scenario: (extra[c.id] && extra[c.id].scenario) || oc.scenario || u.scenario }));
      });
    });
    var map = p.expCats || {}, seen = {};
    Object.keys(map).forEach(function (cat) {
      if (!parentOf[cat]) { p.loadErrors.push('expressions: unknown category ' + cat); return; }
      map[cat].forEach(function (id) {
        var it = p.byId[id];
        if (!it) { p.loadErrors.push('expressions: unknown id ' + id + ' in ' + cat); return; }
        if (seen[id]) return;
        seen[id] = true;
        Object.keys(it.memberOf || {}).forEach(function (k) { if (parentOf[k.slice(12)] && k.indexOf('expressions.') === 0) dropMember(p, it, k); });
      });
    });
    var placed = {};
    Object.keys(map).forEach(function (cat) {
      if (!parentOf[cat]) return;
      map[cat].forEach(function (id) {
        var it = p.byId[id];
        if (!it) return;
        addMember(p, it, 'expressions', cat);
        if (it.tab === 'expressions' && !placed[id]) { it.topic = cat; placed[id] = true; }   // breadcrumbs show the category
      });
    });
    p.items.forEach(function (it) {
      Object.keys(it.memberOf || {}).forEach(function (k) {
        if (k.indexOf('expressions.') === 0 && parentOf[k.slice(12)]) addMember(p, it, 'expressions', parentOf[k.slice(12)]);
      });
    });
    T.expressions = list;
    // Menu: Idioms · Slang · Everyday Phrases · Chunks · Literary Phrases
    (p.config.NAV || []).forEach(function (g) {
      if (g.id !== 'expressions') return;
      g.items = GT.EXP_SECTIONS.map(function (sec) { return { label: sec.name, href: '#/expressions/' + sec.id, tab: 'expressions', topic: sec.id }; })
        .concat([{ label: 'Chunks', href: '#/chunks', match: ['chunks'] }, { label: 'Literary Phrases', href: '#/literature', match: ['literature'] }]);
    });
    (T.chunks || []).forEach(function (t) {
      var k = t.id.replace(/-/g, '_');
      GT.CHUNK_GROUPS.forEach(function (g) { if (g.ids.indexOf(k) >= 0) t.group = g.name; });
    });
  };

  /**
   * GT.registerRoot({ id, verb, ru, label?, words: [ word entries ], pairs: [...] })
   * Each word gets tab 'roots' (unless it already belongs to a topic) and rootId = root id.
   * Extra word fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill.
   */
  GT.registerRoot = function (root) {
    var p = target();
    normalize(p, root);
    root.ids = root.ids || [];
    (root.words || []).forEach(function (w) {
      w.type = w.type || 'word';
      if (w.lost && !w.transparency) w.transparency = 'opaque';
      var existing = p.byId[w.id];
      if (existing && existing !== w) { p.duplicates.push(w.id); return; }
      if (!existing) {
        w.tab = w.tab || 'roots'; w.topic = w.topic || root.id;
        p.items.push(w); p.byId[w.id] = w;
      }
      w.rootId = w.rootId || root.id;
      addMember(p, w, 'roots', root.id);
      (w.alsoIn || []).forEach(function (m) { addMember(p, w, m[0], m[1]); });
      if (root.ids.indexOf(w.id) < 0) root.ids.push(w.id);
    });
    p.roots[root.id] = root;
  };
  /** GT.registerPrefix({ id: 'ab', label: 'ab-', sep, ru, meanings: [...], match, grammar }) */
  GT.registerPrefix = function (pf) { var p = target(); normalize(p, pf); p.prefixes[pf.id] = pf; };
  /** GT.registerSuffix({ id: 'ung', label: '-ung', gender, posChange, ru, pattern, spelling, exceptions, limitations, productivity, examples, exercise }) */
  GT.registerSuffix = function (s) {
    var p = target();
    normalize(p, s);
    if (!p.suffixes[s.id]) p.suffixOrder.push(s.id);
    p.suffixes[s.id] = s;
  };
  /** GT.registerClassical({ id: 'tele', label: 'tele-', origin, ru, history, limitations, examples, source }) */
  GT.registerClassical = function (c) {
    var p = target();
    normalize(p, c);
    if (!p.classical[c.id]) p.classicalOrder.push(c.id);
    p.classical[c.id] = c;
  };

  /** GT.registerGrammar({ id: 'passiv', title, ... drills: [...] }) */
  GT.registerGrammar = function (page) {
    var p = target();
    normalize(p, page);
    p.grammar[page.id] = page;
    (page.drills || []).forEach(function (d) {
      d.type = 'drill';
      d.tab = d.tab || 'grammar';
      d.topic = d.topic || page.id;
      if (p.byId[d.id]) { p.duplicates.push(d.id); return; }
      p.byId[d.id] = d;
      d.memberOf = {}; d.memberOf[d.tab + '.' + d.topic] = true;
      d.tabs = {}; d.tabs[d.tab] = true;
    });
  };
  /** Stand-alone reviewable drill (e.g. an affix exercise that has its own schedule). */
  GT.registerDrill = function (d, tab, topic) {
    var p = target();
    d.type = 'drill'; d.tab = tab; d.topic = topic;
    if (p.byId[d.id]) { p.duplicates.push(d.id); return; }
    p.byId[d.id] = d;
    d.memberOf = {}; d.memberOf[tab + '.' + topic] = true;
    d.tabs = {}; d.tabs[tab] = true;
  };

  /**
   * Overlay translations for an already registered pack (e.g. English glosses for German words).
   * GT.localize('en', { 'b1-health-praxis': { gloss: 'doctor's practice', examples: ['…', '…'], note: '…' } })
   *   gloss -> item[lang]; examples[i] -> item.examples[i][lang]; any other field -> item.i18n[lang][field].
   * Topic texts: GT.localize('en', {}, { 'words.health': { scenario: '…' } }).
   */
  GT.localize = function (lang, map, topics) {
    var p = target();
    Object.keys(map || {}).forEach(function (id) {
      var it = p.byId[id], o = map[id];
      if (!it) { (p.missingOverlay || (p.missingOverlay = [])).push(id); return; }
      Object.keys(o).forEach(function (k) {
        if (k === 'gloss') it[lang] = o.gloss;
        else if (k === 'examples') (o.examples || []).forEach(function (s, i) { if (s && it.examples && it.examples[i]) it.examples[i][lang] = s; });
        else if (k === 'meaningExamples') (o.meaningExamples || []).forEach(function (s, i) { if (s && it.meaningExamples && it.meaningExamples[i]) it.meaningExamples[i][lang] = s; });
        else if (k === 'senses') (o.senses || []).forEach(function (s, i) { if (s && it.examples && it.examples[i]) { it.examples[i].i18n = it.examples[i].i18n || {}; (it.examples[i].i18n[lang] = it.examples[i].i18n[lang] || {}).sense = s; } });
        else if (k === 'variations') (o.variations || []).forEach(function (s, i) { if (s && it.variations && it.variations[i]) it.variations[i][lang] = s; });
        else if (k === 'parts') (o.parts || []).forEach(function (s, i) {
          if (s && it.parts && it.parts[i]) {
            var cur = it.parts[i][1];
            if (cur && typeof cur === 'object') cur[lang] = s;
            else { var m = { ru: cur || '' }; m[lang] = s; it.parts[i][1] = m; }
          }
        });
        else if (k === 'why' && it.why && typeof it.why === 'object') {
          it.why.i18n = it.why.i18n || {};
          it.why.i18n[lang] = Object.assign(it.why.i18n[lang] || {}, o.why);
        }
        else if (k === 'usageNote' && it.usage && typeof it.usage === 'object') {
          it.usage.i18n = it.usage.i18n || {};
          (it.usage.i18n[lang] = it.usage.i18n[lang] || {}).note = o.usageNote;
        }
        else if (k === 'drill' && it.drill && typeof it.drill === 'object') {
          it.drill[lang] = o.drill;
        }
        else if (k === 'prefixDrill' && it.prefixDrill) {
          var pdList = Array.isArray(it.prefixDrill) ? it.prefixDrill : [it.prefixDrill];
          var srcList = Array.isArray(o.prefixDrill) ? o.prefixDrill : [o.prefixDrill];
          srcList.forEach(function (s, i) {
            if (s && pdList[i]) { pdList[i].i18n = pdList[i].i18n || {}; (pdList[i].i18n[lang] = pdList[i].i18n[lang] || {}).explain = s; }
          });
        }
        else { it.i18n = it.i18n || {}; (it.i18n[lang] = it.i18n[lang] || {})[k] = o[k]; }
      });
    });
    Object.keys(topics || {}).forEach(function (key) {
      var parts = key.split('.'), list = p.config.TOPICS[parts[0]] || [];
      var t = list.find(function (x) { return x.id === parts[1]; });
      if (!t) return;
      t.i18n = t.i18n || {};
      t.i18n[lang] = Object.assign(t.i18n[lang] || {}, topics[key]);
    });
  };

  /* ---------- cross-language links (always loaded; see data/links/*.js) ---------- */
  var RU_VOWELS = 'аеиоуыэюяАЕИОУЫЭЮЯ';
  var RU_STRESS_RE = new RegExp('\\+([' + RU_VOWELS + '])', 'g');
  function normLinkStress(s) {
    return typeof s === 'string' && s.indexOf('+') >= 0 ? s.replace(RU_STRESS_RE, '$1\u0301') : String(s || '');
  }
  GT.links = [];
  GT.linksByKey = {};
  /**
   * GT.link([{ de: ['it-sec-schwachstelle', 'die Schwachstelle'], en: ['en:vulnerability:n:main', 'vulnerability'], ru: ['ru-pro-uyazvimost', 'уязв+имость'], note? }, ...])
   * Value per language may be [id, displayText] or a bare id string.
   */
  GT.link = function (list) {
    (list || []).forEach(function (raw) {
      if (!raw || typeof raw !== 'object') return;
      var entries = {}, langs = [];
      LANG_CODES.forEach(function (l) {
        var v = raw[l];
        if (!v) return;
        var id = Array.isArray(v) ? v[0] : v;
        var text = Array.isArray(v) ? normLinkStress(v[1]) : '';
        if (!id) return;
        entries[l] = { id: String(id), text: text };
        langs.push(l);
      });
      var sig = langs.map(function (l) { return l + ':' + entries[l].id; }).join('|');
      if (!sig || GT.links.some(function (g) { return g._sig === sig; })) return;
      var group = { _sig: sig, entries: entries, langs: langs };
      if (raw.note) group.note = raw.note;
      if (raw.i18n) group.i18n = raw.i18n;
      GT.links.push(group);
      langs.forEach(function (l) {
        var k = l + ':' + entries[l].id;
        (GT.linksByKey[k] || (GT.linksByKey[k] = [])).push(group);
      });
    });
  };
  /** Returns all cross-language link groups containing `id` in `lang` (defaults to GT.learn). */
  GT.linksFor = function (id, lang) {
    return GT.linksByKey[(lang || GT.learn) + ':' + id] || [];
  };

  /* ---------- localisation helpers ---------- */
  function baseKnown() { return (GT.pack && GT.pack.config.baseKnown) || 'ru'; }
  /** Which known language a gloss on `o` resolves to (K, else base, else any non-target language). */
  GT.glLang = function (o) {
    if (!o) return GT.know;
    if (o[GT.know]) return GT.know;
    var b = baseKnown();
    if (b !== GT.learn && o[b]) return b;
    for (var i = 0; i < LANG_CODES.length; i++) if (LANG_CODES[i] !== GT.learn && o[LANG_CODES[i]]) return LANG_CODES[i];
    return GT.know;
  };
  /** Short meaning/translation of `o` in the known language, with graceful fallback. */
  GT.gl = function (o) {
    if (!o) return '';
    var l = GT.glLang(o);
    return l === GT.learn ? '' : (o[l] || '');
  };
  function isLangMap(v) {
    return v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length && Object.keys(v).every(function (k) { return LANG_CODES.indexOf(k) >= 0; });
  }
  GT.lxLang = function (o, field) {
    if (!o) return GT.know;
    var v = o[field];
    if (isLangMap(v)) return v[GT.know] != null ? GT.know : v[baseKnown()] != null ? baseKnown() : Object.keys(v)[0];
    if (GT.know === baseKnown()) return GT.know;
    if (o.i18n && o.i18n[GT.know] && o.i18n[GT.know][field] != null) return GT.know;
    return baseKnown();
  };
  /** Explanation field `field` of `o` in the known language (object map, i18n overlay, or base-language fallback). */
  GT.lx = function (o, field) {
    if (!o) return '';
    var v = o[field];
    if (v == null) return v === undefined ? undefined : null;
    if (isLangMap(v)) return v[GT.know] != null ? v[GT.know] : v[baseKnown()] != null ? v[baseKnown()] : v[Object.keys(v)[0]];
    if (GT.know === baseKnown()) return v;
    var tr = o.i18n && o.i18n[GT.know] && o.i18n[GT.know][field];
    return tr != null ? tr : v;
  };

  /** Split review key helpers: words & chunks have <id>#rec and <id>#prod; grammar drills use <id>. */
  GT.isDualCard = function (it) { return !!(it && it.type !== 'drill'); };
  GT.cardKey = function (id, dir) { return dir ? id + '#' + dir : id; };
  GT.parseCardKey = function (key) {
    var m = /^(.+)#(rec|prod)$/.exec(key);
    return m ? { id: m[1], dir: m[2] } : { id: key, dir: null };
  };

  /**
   * Lexical meaning categories & tooltip definitions, per known language.
   * Separate from morphological root-link transparency ('transparent'|'figurative'|'opaque').
   */
  GT.MEANING_CATEGORIES_I18N = {
    ru: {
      polysemous: { label: 'Многозначное', heading: 'Почему многозначное?', summary: 'У слова есть несколько самостоятельных словарных значений — это не обязательно метафора.', cls: 'poly' },
      figurative: { label: 'Переносное', heading: 'Почему переносное?', summary: 'Слово используется не в буквальном, а в образном или метафорическом смысле.', cls: 'fig' },
      colloquial: { label: 'Разговорное', heading: 'Почему разговорное?', summary: 'Слово или это его значение характерно для неформальной повседневной речи.', cls: 'colloq' }
    },
    en: {
      polysemous: { label: 'Polysemous', heading: 'Why polysemous?', summary: 'The word has several established dictionary meanings — not necessarily a metaphor.', cls: 'poly' },
      figurative: { label: 'Figurative', heading: 'Why figurative?', summary: 'The word is used in a figurative or metaphorical sense, not literally.', cls: 'fig' },
      colloquial: { label: 'Colloquial', heading: 'Why colloquial?', summary: 'The word or this meaning of it belongs to informal everyday speech.', cls: 'colloq' }
    },
    de: {
      polysemous: { label: 'Mehrdeutig', heading: 'Warum mehrdeutig?', summary: 'Das Wort hat mehrere feste Wörterbuchbedeutungen — das ist nicht unbedingt eine Metapher.', cls: 'poly' },
      figurative: { label: 'Übertragen', heading: 'Warum übertragen?', summary: 'Das Wort wird nicht wörtlich, sondern bildlich oder metaphorisch verwendet.', cls: 'fig' },
      colloquial: { label: 'Umgangssprachlich', heading: 'Warum umgangssprachlich?', summary: 'Das Wort oder diese Bedeutung gehört zur informellen Alltagssprache.', cls: 'colloq' }
    }
  };
  GT.OPAQUE_ROOT_META_I18N = {
    ru: { label: 'Смысл ушёл', heading: 'Почему «смысл ушёл»?', summary: 'Современное значение нельзя напрямую вывести из базового слова корня (даже если историческая связь сохраняется).' },
    en: { label: 'Meaning drifted', heading: 'Why “meaning drifted”?', summary: 'The modern meaning cannot be derived directly from the base word of the family (even if the historical link remains).' },
    de: { label: 'Bedeutung verblasst', heading: 'Warum „Bedeutung verblasst“?', summary: 'Die heutige Bedeutung lässt sich nicht direkt aus dem Grundwort der Familie ableiten (auch wenn der historische Zusammenhang besteht).' }
  };
  Object.defineProperty(GT, 'MEANING_CATEGORIES', { configurable: true, get: function () { return GT.MEANING_CATEGORIES_I18N[GT.know] || GT.MEANING_CATEGORIES_I18N.ru; } });
  Object.defineProperty(GT, 'OPAQUE_ROOT_META', { configurable: true, get: function () { return GT.OPAQUE_ROOT_META_I18N[GT.know] || GT.OPAQUE_ROOT_META_I18N.ru; } });

  /** Returns curated meaning-category badge metadata for an item, or null if absent/incomplete. */
  GT.meaningInfo = function (it) {
    if (!it || !it.meaningType || !it.meaningExplanation) return null;
    var cat = GT.MEANING_CATEGORIES[it.meaningType];
    if (!cat) return null;
    return {
      type: it.meaningType,
      label: cat.label,
      heading: cat.heading,
      summary: cat.summary,
      cls: cat.cls,
      explanation: GT.lx(it, 'meaningExplanation'),
      examples: Array.isArray(it.meaningExamples) ? it.meaningExamples : []
    };
  };
})();
