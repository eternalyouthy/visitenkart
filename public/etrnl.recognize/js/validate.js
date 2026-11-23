/* Data validator for any language pack. Runs after a pack loads; results appear in Settings → Data
 * and in the console as GT.pack.validation. Checks mirror the authoring rules in README.md. */
(function () {
  'use strict';
  function has(v) { return v != null && v !== '' && !(typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length); }
  GT.validatePack = function (p) {
    var errs = [], cfg = p.config, base = cfg.baseKnown || 'ru', lang = p.lang;
    function e(id, msg) { errs.push(id + ': ' + msg); }
    Object.keys(p.byId).forEach(function (id) {
      var it = p.byId[id];
      if (it.type === 'drill') {
        if (it.kind === 'choice' && !(it.options && it.options[it.answer] != null)) e(id, 'choice drill answer out of range');
        if (it.kind === 'gap' && !has(it.answer)) e(id, 'gap drill without answer');
        return;
      }
      if (!has(it.t)) e(id, 'missing target text');
      if (!has(it[base])) e(id, 'missing ' + base + ' meaning');
      if (lang === 'de' && it.pos === 'noun' && !it.article) e(id, 'noun without article');
      if (lang === 'ru' && it.pos === 'noun' && !it.gender) e(id, 'noun without gender');
      if (lang !== 'en' && it.pos === 'verb' && !it.forms) e(id, 'verb without forms');
      (it.examples || []).forEach(function (x, i) {
        if (!/\[\[.+?\]\]/.test(x.t || '')) e(id, 'example ' + i + ' without [[target]]');
        if (!has(x[base])) e(id, 'example ' + i + ' without ' + base + ' translation');
      });
      if (it.why && typeof it.why === 'object') {
        if (['high', 'medium'].indexOf(it.why.confidence) < 0 || !has(it.why.source) || !has(it.why.evidence)) e(id, 'WHY? needs confidence + source + evidence');
      }
      if (it.meaningType) {
        if (['polysemous', 'figurative', 'colloquial'].indexOf(it.meaningType) < 0) e(id, 'unknown meaningType');
        if (!has(it.meaningExplanation) || !(it.meaningExamples && it.meaningExamples.length)) e(id, 'meaningType without explanation/examples');
      }
      (Array.isArray(it.prefixDrill) ? it.prefixDrill : it.prefixDrill ? [it.prefixDrill] : []).forEach(function (pd) {
        var pf = p.prefixes[it.prefix];
        if (pf && pf.meanings && !pf.meanings[pd.meaning]) e(id, 'prefixDrill.meaning out of range');
        if (!(it.examples || [])[pd.ex]) e(id, 'prefixDrill.ex out of range');
      });
    });
    (cfg.ROOT_PLAN || []).forEach(function (r) { if (!p.roots[r]) errs.push('root plan: ' + r + ' not loaded (shown as "soon")'); });
    (GT.links || []).forEach(function (g, idx) {
      if (!g.langs || g.langs.length < 2) errs.push('link #' + idx + ': needs at least 2 languages');
      var cur = g.entries && g.entries[lang];
      if (!cur) return;
      var target = p.byId[cur.id];
      if (!target) errs.push('link #' + idx + ': ' + lang + ' id "' + cur.id + '" not found in pack');
      else if (target.type === 'drill') errs.push('link #' + idx + ': ' + lang + ' id "' + cur.id + '" is a drill');
      if (!has(cur.text)) errs.push('link #' + idx + ': ' + lang + ' id "' + cur.id + '" missing display text');
      g.langs.forEach(function (ol) {
        if (ol === lang) return;
        var op = GT.packs && GT.packs[ol];
        if (op && op.loaded && !op.byId[g.entries[ol].id]) {
          errs.push('link #' + idx + ' (' + cur.id + '): ' + ol + ' id "' + g.entries[ol].id + '" not found in ' + ol + ' pack');
        }
      });
    });
    p.validation = errs;
    return errs;
  };
  /** Load all packs and verify every cross-language link id across all packs. */
  GT.validateLinks = function () {
    var langs = Object.keys(self.GT_PACKS || {});
    return Promise.all(langs.map(function (l) { return GT.loadPack(l); })).then(function () {
      var errs = [];
      (GT.links || []).forEach(function (g, idx) {
        if (!g.langs || g.langs.length < 2) errs.push('link #' + idx + ': needs at least 2 languages');
        (g.langs || []).forEach(function (l) {
          var e = g.entries[l], pk = GT.packs[l];
          if (!pk || !pk.byId[e.id]) errs.push('link #' + idx + ': ' + l + ' id "' + (e && e.id) + '" not found');
          else if (pk.byId[e.id].type === 'drill') errs.push('link #' + idx + ': ' + l + ' id "' + e.id + '" is a drill');
          if (!has(e && e.text)) errs.push('link #' + idx + ': ' + l + ' id "' + (e && e.id) + '" missing display text');
        });
      });
      langs.forEach(function (l) { if (GT.packs[l]) GT.validatePack(GT.packs[l]); });
      return errs;
    });
  };
})();
