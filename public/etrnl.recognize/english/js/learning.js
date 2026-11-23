(function (E) {
  'use strict';
  E.shuffle = function (items, random = Math.random) {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
    return result;
  };
  E.accepted = function (answer) {
    const values = [answer];
    const contractions = [["it's", 'it is'], ["we'll", 'we will'], ["I'll", 'I will'], ["I'm", 'I am'], ["you're", 'you are'], ["we're", 'we are'], ["that's", 'that is'], ["don't", 'do not'], ["isn't", 'is not']];
    let expanded = answer, contracted = answer;
    contractions.forEach(([short, full]) => {
      expanded = expanded.replace(new RegExp('\\b' + short + '\\b', 'gi'), full);
      contracted = contracted.replace(new RegExp('\\b' + full + '\\b', 'gi'), short);
    });
    values.push(expanded, contracted);
    if (/organiz/i.test(answer)) values.push(answer.replace(/organiz/gi, 'organis'));
    if (/behaviour/i.test(answer)) values.push(answer.replace(/behaviour/gi, 'behavior'));
    if (/neighbour/i.test(answer)) values.push(answer.replace(/neighbour/gi, 'neighbor'));
    if (/enquire/i.test(answer)) values.push(answer.replace(/enquire/gi, 'inquire'));
    if (/re-evaluat/i.test(answer)) values.push(answer.replace(/re-evaluat/gi, 'reevaluat'));
    if (answer === 're-create') values.push('recreate');
    if (answer === 'usable') values.push('useable');
    if (answer === 'reuse') values.push('re-use');
    return values;
  };
  E.checkAnswer = (question, answer) => E.accepted(question.answer).concat(question.acceptedAnswers || []).some(a => E.normalize(a) === E.normalize(answer));
  E.question = function (entry, kind) {
    const ex = entry.examples[0], parent = E.entries[entry.morphology.parentId];
    const surface = E.answers(ex.en)[0];
    const context = ex.en.replace(/\[\[[^\]]+\]\]/g, '________');
    const q = { id: entry.id, entryId: entry.id, kind, direction: kind === 'recognition' ? 'rec' : 'prod',
      answer: surface, options: null, translation: ex.ru, context, prompt: entry.ru,
      explain: `${entry.ru}. ${entry.morphology.note} ${entry.semantic !== entry.ru ? 'Смысловая связь: ' + entry.semantic + '.' : ''}` };
    if (kind === 'recognition') {
      q.prompt = E.plain(ex.en); q.context = ''; q.translation = '';
      q.answer = entry.ru;
      const peers = Object.values(E.entries).filter(w => w.id !== entry.id && w.pos === entry.pos && w.ru !== entry.ru);
      const distractors = [...new Set(E.shuffle(peers).map(w => w.ru))].slice(0, 3);
      q.options = E.shuffle([q.answer, ...distractors]);
    } else if (kind === 'derivative') {
      q.base = parent ? parent.headword : (entry.familyId ? E.entries[E.families.find(f => f.id === entry.familyId).base.entryId].headword : entry.headword);
      q.prompt = entry.ru;
    } else if (kind === 'cloze') {
      q.prompt = parent ? `Образуйте подходящую форму от «${parent.headword}».` : 'Восстановите слово или выражение по контексту.';
    }
    q.cardKey = `${q.id}#${q.direction}`;
    return q;
  };
  E.referenceQuestion = function (item, direction = 'rec') {
    const isAffix = !!item.exercise;
    const dir = !isAffix && direction === 'prod' && item.production ? 'prod' : 'rec';
    const data = isAffix ? item.exercise : dir === 'prod' ? item.production : item;
    return { id: item.id, entryId: null, kind: isAffix ? 'affix' : 'grammar', direction: dir,
      prompt: data.question, answer: data.answer, options: dir === 'rec' ? E.shuffle(data.options) : null,
      acceptedAnswers: data.acceptedAnswers || [], explain: data.explain,
      cardKey: `${item.id}#${dir}`, context: '', translation: '' };
  };
  const referenceQuestions = item => item.production ? [E.referenceQuestion(item), E.referenceQuestion(item, 'prod')] : [E.referenceQuestion(item)];
  E.makePool = function ({ family = 'all', topic = 'all', kind = 'mixed', level = 'all', direction = 'both', dueOnly = false, limit = 12 } = {}) {
    const topicIds = topic === 'all' ? null : new Set(E.topicEntries(topic).map(w => w.id));
    let entries = Object.values(E.entries).filter(w => (!topicIds || topicIds.has(w.id)) && (family === 'all' || w.familyId === family) && (level === 'all' ? dueOnly || E.isCoreLevel(w) : w.cefr.level === level));
    const pool = [];
    if (kind === 'affix') pool.push(...E.affixes.flatMap(referenceQuestions));
    else if (kind === 'grammar') pool.push(...E.grammar.flatMap(referenceQuestions));
    else {
      E.shuffle(entries).forEach(w => {
        const types = kind === 'mixed' ? ['recognition', E.shuffle(w.morphology.parentId ? ['translation', 'derivative', 'cloze'] : ['translation', 'cloze'])[0]] : [kind];
        types.forEach(type => { if (type !== 'derivative' || w.morphology.parentId) pool.push(E.question(w, type)); });
      });
    }
    if (kind === 'mixed' && dueOnly && family === 'all' && topic === 'all' && level === 'all') pool.push(...E.affixes.concat(E.grammar).flatMap(referenceQuestions));
    const now = Date.now();
    return E.shuffle(pool.filter(q => {
      const card = E.store.data.cards[q.cardKey];
      return (direction === 'both' || direction === q.direction) && (!dueOnly || (card && !card.known && card.due <= now));
    })).slice(0, Math.max(1, Math.min(limit, 50)));
  };

  const KEY = 'etrnl.english.progress.v1', DAY = 86400000;
  const fresh = () => ({ schemaVersion: 1, language: 'en', cards: {}, completed: 0, later: {} });
  const knownId = id => !!E.entries[id] || E.affixes.some(a => a.id === id) || E.grammar.some(g => g.id === id);
  const supportsDirection = (id, dir) => knownId(id) && (dir === 'rec' || dir === 'prod' && (!!E.entries[id] || E.grammar.some(g => g.id === id && g.production)));
  function validateProgress(value) {
    if (!value || value.schemaVersion !== 1 || value.language !== 'en' || !value.cards || typeof value.cards !== 'object' || Array.isArray(value.cards)) throw new Error('Expected an English progress export, version 1.');
    if (!Number.isSafeInteger(value.completed) || value.completed < 0 || value.completed > 100000000) throw new Error('Invalid review count.');
    const keys = Object.keys(value.cards);
    if (keys.length > 50000) throw new Error('Too many cards in the file.');
    const safe = fresh(); safe.completed = value.completed;
    keys.forEach(key => {
      const m = /^(.+)#(rec|prod)$/.exec(key), c = value.cards[key];
      if (!m || !knownId(m[1])) throw new Error('The file contains unknown cards.');
      if (!supportsDirection(m[1], m[2])) throw new Error('Invalid reference-card direction.');
      if (!c || typeof c !== 'object' || !Number.isFinite(c.due) || c.due < 0 || c.due > 8640000000000000 || !Number.isFinite(c.interval) || c.interval < 0 || c.interval > 3650 || !Number.isSafeInteger(c.reps) || c.reps < 0 || c.reps > 100000000 || !Number.isSafeInteger(c.lapses) || c.lapses < 0 || c.lapses > c.reps || ![1, 2, 3, 4].includes(c.grade)) throw new Error('Invalid card data.');
      safe.cards[key] = { due: c.due, interval: c.interval, reps: c.reps, lapses: c.lapses, grade: c.grade };
      if (c.known !== undefined && typeof c.known !== 'boolean') throw new Error('Invalid known-card status.');
      if (c.known && !E.entries[m[1]]) throw new Error('Known status is only supported for vocabulary.');
      if (c.known) safe.cards[key].known = true;
    });
    if (value.later !== undefined) {
      if (!value.later || typeof value.later !== 'object' || Array.isArray(value.later) || Object.keys(value.later).length > 50000) throw new Error('Invalid deferred items.');
      Object.entries(value.later).forEach(([id, time]) => {
        if (!E.entries[id] || !Number.isSafeInteger(time) || time < 0 || time > 8640000000000000) throw new Error('Invalid deferred item.');
        safe.later[id] = time;
      });
    }
    return safe;
  }
  E.store = {
    key: KEY, data: fresh(), persistent: true, warning: '',
    load() {
      try { const raw = localStorage.getItem(KEY); if (raw) this.data = validateProgress(JSON.parse(raw)); }
      catch (err) { this.persistent = false; this.warning = 'Saved progress could not be read. Progress is in memory only; export it before closing.'; }
    },
    save() {
      if (!this.persistent) return false;
      try { localStorage.setItem(KEY, JSON.stringify(this.data)); return true; }
      catch (err) { this.persistent = false; this.warning = 'Browser storage is unavailable. Progress is in memory only; use Export progress.'; return false; }
    },
    grade(key, grade, now = Date.now()) {
      const m = /^(.+)#(rec|prod)$/.exec(key);
      if (!m || !supportsDirection(m[1], m[2]) || ![1, 2, 3, 4].includes(grade)) throw new Error('Invalid review card or grade.');
      const old = this.data.cards[key] || { reps: 0, lapses: 0, interval: 0 };
      const interval = grade === 1 ? 0 : grade === 2 ? Math.max(1, old.interval * 1.2) : grade === 3 ? Math.max(3, old.interval * 2) : Math.max(7, old.interval * 3);
      this.data.cards[key] = { due: now + (grade === 1 ? 60000 : Math.min(3650, interval) * DAY), interval: Math.min(3650, interval), grade, reps: old.reps + 1, lapses: old.lapses + (grade === 1 ? 1 : 0) };
      delete this.data.later[m[1]];
      this.data.completed++; this.save();
    },
    enroll(id, direction = 'both') {
      if (!knownId(id)) throw new Error('Unknown learning item.');
      const directions = direction === 'both' ? ['rec', 'prod'].filter(dir => supportsDirection(id, dir)) : [direction];
      if (directions.some(dir => !supportsDirection(id, dir))) throw new Error('Invalid learning direction.');
      directions.forEach(dir => {
        const key = `${id}#${dir}`;
        if (!this.data.cards[key]) this.data.cards[key] = { due: Date.now(), interval: 0, reps: 0, lapses: 0, grade: 1 };
        else if (this.data.cards[key].known) { delete this.data.cards[key].known; this.data.cards[key].due = Date.now(); }
      });
      delete this.data.later[id];
      this.save();
    },
    markKnown(id) {
      if (!E.entries[id]) throw new Error('Unknown vocabulary item.');
      for (const dir of ['rec', 'prod']) {
        const key = `${id}#${dir}`;
        this.data.cards[key] = { ...(this.data.cards[key] || { due: 0, interval: 0, reps: 0, lapses: 0, grade: 4 }), known: true };
      }
      delete this.data.later[id]; this.save();
    },
    defer(id) {
      if (!E.entries[id]) throw new Error('Unknown vocabulary item.');
      this.data.later[id] = Date.now(); this.save();
    },
    stats(now = Date.now()) {
      const result = { rec: 0, prod: 0, dueRec: 0, dueProd: 0, completed: this.data.completed };
      Object.entries(this.data.cards).forEach(([key, c]) => { const dir = key.endsWith('#rec') ? 'rec' : 'prod'; result[dir]++; if (!c.known && c.due <= now) result[dir === 'rec' ? 'dueRec' : 'dueProd']++; });
      return result;
    },
    export() { return JSON.stringify(this.data, null, 2); },
    import(raw) {
      if (typeof raw !== 'string' || raw.length > 2000000) throw new Error('File exceeds the 2 MB limit.');
      const next = validateProgress(JSON.parse(raw));
      this.data = next; this.save();
    }
  };
  E.itemState = id => {
    const rec = E.store.data.cards[id + '#rec'], prod = E.store.data.cards[id + '#prod'];
    return rec?.known && prod?.known ? 'known' : rec || prod ? 'learning' : 'new';
  };
  E.topicStats = (key, now = Date.now()) => E.topicEntries(key).reduce((counts, w) => {
    const state = E.itemState(w.id); counts[state]++; counts.total++;
    if (state === 'new' && E.isCoreLevel(w)) counts.learnable++;
    if (['rec', 'prod'].some(dir => { const c = E.store.data.cards[w.id + '#' + dir]; return c && !c.known && c.due <= now; })) counts.due++;
    return counts;
  }, { new: 0, learning: 0, known: 0, due: 0, total: 0, learnable: 0 });
  E.learnQueue = (key, limit = 10) => E.topicEntries(key).filter(w => E.itemState(w.id) === 'new' && E.isCoreLevel(w))
    .sort((a, b) => Number(!!E.store.data.later[a.id]) - Number(!!E.store.data.later[b.id]) || (E.store.data.later[a.id] || 0) - (E.store.data.later[b.id] || 0))
    .slice(0, Math.max(1, Math.min(50, limit))).map(w => w.id);
  E.store.load();
})(ETEnglish);
