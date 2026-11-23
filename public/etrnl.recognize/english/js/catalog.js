/* Independent English registry. No dependency on the German application. */
(function (root) {
  'use strict';
  const E = root.ETEnglish = {
    version: 1, entries: Object.create(null), families: [], affixes: [], classical: [],
    grammar: [], categories: [], sections: [], batches: [], errors: [],
    target: { A2: 10, B1: 45, B2: 45 }
  };
  E.id = (word, pos, sense = 'main') => `en:${word.toLowerCase().replace(/\s+/g, '-')}:${pos}:${sense}`;
  E.dictionary = word => `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(word.replace(/\s+/g, '-'))}`;
  E.addEntry = function (entry) {
    if (E.entries[entry.id]) throw new Error(`Duplicate English entry: ${entry.id}`);
    E.entries[entry.id] = entry;
    return entry.id;
  };
  /* Rows: word, POS, CEFR target, Russian sense, marked example, translation,
     analysis, teaching parent, usage, optional transparency, optional sense key. */
  E.family = function (meta, text) {
    const rows = text.trim().split('\n').map(line => line.trim().split('|'));
    const ids = Object.create(null);
    rows.forEach(r => { ids[r[0] + (r[10] ? '~' + r[10] : '')] = E.id(r[0], r[1], r[10] || 'main'); });
    const family = Object.assign({ base: { kind: 'modern-base', ru: meta.ru }, entryIds: [], coverage: 'editorial-draft' }, meta);
    rows.forEach((r, i) => {
      const [headword, pos, level, ru, en, exru, analysis, parent, usage, transparency, sense] = r;
      if (r.length < 9) throw new Error(`Incomplete row: ${meta.id}/${headword}`);
      const id = ids[headword + (sense ? '~' + sense : '')];
      const parentId = parent ? ids[parent] : null;
      if (parent && !parentId) throw new Error(`Missing parent: ${meta.id}/${parent}`);
      const parts = analysis.split(' + ');
      const entry = {
        id, headword, pos, sense: sense || 'main', ru,
        cefr: { level, status: 'estimate', source: null },
        examples: [{ en, ru: exru }],
        morphology: {
          parts, parentId, relation: parent ? 'lexical-family' : 'base',
          note: parent ? `Учебная связь: ${parent.replace(/~.*/, '')} → ${headword}. ${usage}` : `Самостоятельная современная основа. ${usage}`
        },
        semantic: parent ? `${rows.find(x => ids[x[0] + (x[10] ? '~' + x[10] : '')] === parentId)[3]} → ${ru}` : ru,
        transparency: transparency || 'transparent', usage,
        categories: meta.categories.slice(), familyId: meta.id, core: i < 8,
        sources: [{ title: `Cambridge Dictionary: ${headword}`, url: E.dictionary(headword), status: 'reference-link' }]
      };
      E.addEntry(entry); family.entryIds.push(id);
      if (i === 0) family.base.entryId = id;
    });
    E.families.push(family);
    return family;
  };
  E.categoryEntries = category => Object.values(E.entries).filter(w => w.categories.includes(category));
  E.plain = text => text.replace(/\[\[|\]\]/g, '');
  E.answers = text => [...text.matchAll(/\[\[([^\]]+)\]\]/g)].map(m => m[1]);
  E.normalize = text => String(text).normalize('NFKC').toLowerCase().replace(/[’‘]/g, "'").replace(/[‐‑–]/g, '-').trim().replace(/\s+/g, ' ');
  E.escape = text => String(text == null ? '' : text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  E.validate = function () {
    const errors = [], ids = new Set();
    E.families.forEach(f => {
      if (ids.has(f.id)) errors.push(`Duplicate family ${f.id}`); ids.add(f.id);
      if (!E.entries[f.base.entryId]) errors.push(`Missing base ${f.id}`);
      f.related.forEach(id => { if (!E.families.some(other => other.id === id)) errors.push(`Broken family link ${f.id}/${id}`); });
      f.entryIds.forEach(id => { if (!E.entries[id]) errors.push(`Missing entry ${id}`); });
    });
    Object.values(E.entries).forEach(w => {
      if (!w.ru || !w.usage || !w.morphology.parts.length || !w.sources.length) errors.push(`Incomplete entry ${w.id}`);
      if (!['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(w.cefr.level) && !(w.cefr.level === null && w.cefr.status === 'unrated')) errors.push(`Invalid CEFR ${w.id}`);
      if (!['estimate', 'referenced', 'unrated'].includes(w.cefr.status)) errors.push(`Invalid evidence ${w.id}`);
      if (w.cefr.status === 'referenced' && !w.cefr.source) errors.push(`Missing CEFR evidence ${w.id}`);
      if (w.cefr.status === 'unrated' && w.cefr.level !== null) errors.push(`Unrated entry has a fabricated level ${w.id}`);
      if (w.morphology.parentId && !E.entries[w.morphology.parentId]) errors.push(`Broken parent ${w.id}`);
      if (!['transparent', 'figurative', 'opaque'].includes(w.transparency)) errors.push(`Invalid transparency ${w.id}`);
      w.examples.forEach(ex => { if (!ex.ru || E.answers(ex.en).length !== 1) errors.push(`Invalid example ${w.id}`); });
      w.categories.forEach(id => { if (!E.categories.some(c => c.id === id)) errors.push(`Missing category ${w.id}/${id}`); });
    });
    const referenceIds = new Set();
    E.affixes.concat(E.classical, E.grammar).forEach(item => {
      if (referenceIds.has(item.id)) errors.push(`Duplicate reference ${item.id}`); referenceIds.add(item.id);
      (item.entryIds || []).forEach(id => { if (!E.entries[id]) errors.push(`Broken reference ${item.id}/${id}`); });
    });
    E.affixes.forEach(a => {
      ['ru', 'pattern', 'posChange', 'spelling', 'exceptions', 'limitations', 'productivity'].forEach(k => { if (!a[k]) errors.push(`Missing affix field ${a.id}/${k}`); });
      if (!a.exercise || !a.exercise.explain || !a.exercise.options.includes(a.exercise.answer)) errors.push(`Invalid affix exercise ${a.id}`);
    });
    E.grammar.forEach(g => {
      if (!g.question || !g.explain || !g.options?.includes(g.answer) || !g.source?.startsWith('https://')) errors.push(`Invalid grammar exercise ${g.id}`);
      if (g.production && (!g.production.question || !g.production.answer || !g.production.explain)) errors.push(`Invalid grammar production ${g.id}`);
    });
    const topicKeys = new Set();
    E.sections.forEach(section => section.topics.forEach(t => {
      if (topicKeys.has(t.key)) errors.push(`Duplicate topic ${t.key}`); topicKeys.add(t.key);
      if (!t.label || !t.description || !t.scenario || !t.entryIds.length) errors.push(`Incomplete topic ${t.key}`);
      t.entryIds.forEach(id => { if (!E.entries[id]) errors.push(`Broken topic reference ${t.key}/${id}`); });
    }));
    E.errors = errors;
    return errors;
  };
})(typeof window === 'undefined' ? globalThis : window);
