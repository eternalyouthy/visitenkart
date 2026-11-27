/* Russian definition for the shared "Which form?" engine (js/whichform.js): Endings.
 * Route: #/endings (reference) · #/endings/play (game). Russian pack only.
 * Data: data/ru/grammar_endings.js (GT.RU_ENDINGS). Every answer is computed here:
 *   determiners (мой, твой, свой, наш, ваш, этот) from the tables in DET,
 *   adjectives from the hard / soft endings + the two spelling rules + stress type,
 *   nouns (singular) from the ending classes + spelling rules + stress type (a = stem, b = ending).
 * Stress: '+' before the stressed vowel in data and forms; shown as an accent mark. One-syllable forms are not marked.
 * Games: 'case' (sentences, filtered by case) and 'gender' (он / она / оно from the ending — separate, never in All cases).
 * Texts follow the "I know" language: ru / en / de. */
(function () {
  'use strict';

  var CASES = ['n', 'g', 'd', 'a', 'i', 'p'];
  var GENDERS = ['m', 'n', 'f', 'pl'];
  var VOW = 'аеиоуыэюяёАЕИОУЫЭЮЯЁ';
  function T(o) { return GT.whichForm.tx(o); }
  function D() { return GT.RU_ENDINGS; }
  function b(s) { return '<b>' + s + '</b>'; }
  function escHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function plain(s) { return String(s).replace(/\+/g, ''); }
  function show(s) { return String(s).replace(/\+([аеиоуыэюяАЕИОУЫЭЮЯ])/g, '$1́'); }
  function ru(s) { return '<em lang="ru">' + show(s) + '</em>'; }
  function vowels(s) { var n = 0; for (var i = 0; i < s.length; i++) if (VOW.indexOf(s[i]) >= 0) n++; return n; }
  function isV(ch) { return !!ch && VOW.indexOf(ch) >= 0; }
  /** index of the stressed vowel in the plain word, or -1 */
  function stressIdx(s) {
    var i = s.indexOf('+');
    if (i >= 0) return i;
    var p = plain(s), e = p.search(/[ёЁ]/);
    if (e >= 0) return e;
    if (vowels(p) === 1) for (var k = 0; k < p.length; k++) if (isV(p[k])) return k;
    return -1;
  }
  /** put '+' before position idx (not before ё, not in one-syllable words) */
  function mark(p, idx) {
    if (idx < 0 || vowels(p) <= 1 || /[ёЁ]/.test(p) || !isV(p[idx])) return p;
    return p.slice(0, idx) + '+' + p.slice(idx);
  }
  function cap(s) { return s.replace(/^(\+?)(.)/, function (m, a, c) { return a + c.toUpperCase(); }); }
  var VELAR = 'гкх', SIB = 'жшщч';

  /* ---------------- determiners ---------------- */
  // order of cases: n g d a i p; null in the Acc column = like Nom (inanimate) or Gen (animate)
  var MOY = { m: ['мой', 'моег+о', 'моем+у', null, 'мо+им', 'моём'], n: ['моё', 'моег+о', 'моем+у', 'моё', 'мо+им', 'моём'],
    f: ['мо+я', 'мо+ей', 'мо+ей', 'мо+ю', 'мо+ей', 'мо+ей'], pl: ['мо+и', 'мо+их', 'мо+им', null, 'мо+ими', 'мо+их'] };
  var NASH = { m: ['наш', 'н+ашего', 'н+ашему', null, 'н+ашим', 'н+ашем'], n: ['н+аше', 'н+ашего', 'н+ашему', 'н+аше', 'н+ашим', 'н+ашем'],
    f: ['н+аша', 'н+ашей', 'н+ашей', 'н+ашу', 'н+ашей', 'н+ашей'], pl: ['н+аши', 'н+аших', 'н+ашим', null, 'н+ашими', 'н+аших'] };
  var ETOT = { m: ['+этот', '+этого', '+этому', null, '+этим', '+этом'], n: ['+это', '+этого', '+этому', '+это', '+этим', '+этом'],
    f: ['+эта', '+этой', '+этой', '+эту', '+этой', '+этой'], pl: ['+эти', '+этих', '+этим', null, '+этими', '+этих'] };
  function swap(tbl, from, to) {
    var o = {};
    Object.keys(tbl).forEach(function (g) { o[g] = tbl[g].map(function (f) { return f == null ? null : f.replace(new RegExp('^(\\+?)' + from), '$1' + to); }); });
    return o;
  }
  var DET = { 'мой': MOY, 'твой': swap(MOY, 'мо', 'тво'), 'свой': swap(MOY, 'мо', 'сво'), 'наш': NASH, 'ваш': swap(NASH, 'н', 'в'), 'этот': ETOT };
  function detForm(w, c, g, anim) {
    var t = DET[w][g], ci = CASES.indexOf(c), f = t[ci];
    if (f == null) f = anim ? t[1] : t[0];
    return { form: f };
  }

  /* ---------------- adjectives ---------------- */
  var HARD = { m: ['ый', 'ого', 'ому', null, 'ым', 'ом'], n: ['ое', 'ого', 'ому', 'ое', 'ым', 'ом'], f: ['ая', 'ой', 'ой', 'ую', 'ой', 'ой'], pl: ['ые', 'ых', 'ым', null, 'ыми', 'ых'] };
  var SOFT = { m: ['ий', 'его', 'ему', null, 'им', 'ем'], n: ['ее', 'его', 'ему', 'ее', 'им', 'ем'], f: ['яя', 'ей', 'ей', 'юю', 'ей', 'ей'], pl: ['ие', 'их', 'им', null, 'ими', 'их'] };
  function adjInfo(lemma) {
    var p = plain(lemma), stem = p.slice(0, -2), last = stem.slice(-1);
    return { p: p, stem: stem, soft: /ний$/.test(p), endStress: /ой$/.test(p), velar: VELAR.indexOf(last) >= 0, sib: SIB.indexOf(last) >= 0, idx: stressIdx(lemma) };
  }
  function adjForm(lemma, c, g, anim) {
    var A = adjInfo(lemma), tbl = A.soft ? SOFT : HARD, ci = CASES.indexOf(c), end = tbl[g][ci], r7 = false, r5 = false;
    if (end == null) end = anim ? tbl[g][1] : tbl[g][0];
    if (A.endStress && end === 'ый') end = 'ой';
    if (!A.soft && (A.velar || A.sib) && end[0] === 'ы') { end = 'и' + end.slice(1); r7 = true; }
    if (!A.soft && A.sib && !A.endStress && end[0] === 'о') { end = 'е' + end.slice(1); r5 = true; }
    var p = A.stem + end;
    return { form: mark(p, A.endStress ? A.stem.length : A.idx), end: end, r7: r7, r5: r5, soft: A.soft, endStress: A.endStress };
  }

  /* ---------------- nouns (singular) ---------------- */
  var NEND = { a: ['а', 'ы', 'е', 'у', 'ой', 'е'], ya: ['я', 'и', 'е', 'ю', 'ей', 'е'], ia: ['я', 'и', 'и', 'ю', 'ей', 'и'],
    cons: ['', 'а', 'у', null, 'ом', 'е'], j: ['й', 'я', 'ю', null, 'ем', 'е'], msoft: ['ь', 'я', 'ю', null, 'ем', 'е'],
    fsoft: ['ь', 'и', 'и', 'ь', 'ью', 'и'], o: ['о', 'а', 'у', 'о', 'ом', 'е'], e: ['е', 'я', 'ю', 'е', 'ем', 'е'], ie: ['е', 'я', 'ю', 'е', 'ем', 'и'] };
  function nounInfo(key) {
    var N = D().nouns[key];
    if (!N) return null;
    var p = plain(N[0]), g = N[1], last = p.slice(-1), cls, stem;
    if (/ия$/.test(p)) { cls = 'ia'; stem = p.slice(0, -1); }
    else if (last === 'а') { cls = 'a'; stem = p.slice(0, -1); }
    else if (last === 'я') { cls = 'ya'; stem = p.slice(0, -1); }
    else if (g === 'n' && last === 'о') { cls = 'o'; stem = p.slice(0, -1); }
    else if (g === 'n' && /ие$/.test(p)) { cls = 'ie'; stem = p.slice(0, -1); }
    else if (g === 'n' && last === 'е') { cls = 'e'; stem = p.slice(0, -1); }
    else if (last === 'ь') { cls = g === 'f' ? 'fsoft' : 'msoft'; stem = p.slice(0, -1); }
    else if (last === 'й') { cls = 'j'; stem = p.slice(0, -1); }
    else { cls = 'cons'; stem = p; }
    return { key: key, nom: N[0], p: p, g: g, st: N[2], anim: !!N[3], cls: cls, stem: stem, idx: stressIdx(N[0]) };
  }
  function nounForm(key, c) {
    var I = nounInfo(key), ci = CASES.indexOf(c), end = NEND[I.cls][ci], r7 = false, r5 = false;
    if (end == null) end = I.anim ? NEND[I.cls][1] : NEND[I.cls][0];
    var stressedEnd = I.st === 'b' && /[аеиоуыэюяё]/.test(end), last = I.stem.slice(-1);
    if (I.cls === 'a' && end === 'ы' && (VELAR + SIB).indexOf(last) >= 0) { end = 'и'; r7 = true; }
    if ((I.cls === 'a' || I.cls === 'cons') && end[0] === 'о' && (SIB + 'ц').indexOf(last) >= 0 && !stressedEnd) { end = 'е' + end.slice(1); r5 = true; }
    if (I.cls === 'msoft' && end === 'ем' && stressedEnd) end = 'ём';
    var p = I.stem + end, idx = stressedEnd ? I.stem.length : I.idx;
    return { form: mark(p, idx), end: end, r7: r7, r5: r5, info: I };
  }

  /* ---------------- word kinds ---------------- */
  function kindOf(w) {
    if (DET[w]) return 'det';
    if (D().nouns[w]) return 'noun';
    if (D().adjectives.indexOf(w) >= 0) return 'adj';
    return null;
  }
  function formOf(w, c, g, anim) {
    var k = kindOf(w);
    if (k === 'det') return detForm(w, c, g, anim);
    if (k === 'adj') return adjForm(w, c, g, anim);
    if (k === 'noun') return nounForm(w, c);
    return null;
  }
  /** every slot of a word: [{ c, g, anim, form }] (nouns: singular only) */
  function slots(w) {
    var out = [];
    if (kindOf(w) === 'noun') { CASES.forEach(function (c) { out.push({ c: c, form: nounForm(w, c).form }); }); return out; }
    GENDERS.forEach(function (g) {
      CASES.forEach(function (c) {
        if (c === 'a' && (g === 'm' || g === 'pl')) {
          out.push({ c: c, g: g, anim: false, form: formOf(w, c, g, false).form });
          out.push({ c: c, g: g, anim: true, form: formOf(w, c, g, true).form });
        } else out.push({ c: c, g: g, form: formOf(w, c, g, false).form });
      });
    });
    return out;
  }

  /* ---------------- texts ---------------- */
  var CN = { n: { ru: 'именительный', en: 'nominative', de: 'Nominativ' }, g: { ru: 'родительный', en: 'genitive', de: 'Genitiv' },
    d: { ru: 'дательный', en: 'dative', de: 'Dativ' }, a: { ru: 'винительный', en: 'accusative', de: 'Akkusativ' },
    i: { ru: 'творительный', en: 'instrumental', de: 'Instrumental' }, p: { ru: 'предложный', en: 'prepositional', de: 'Präpositiv' } };
  var CQ = { n: 'кто? что?', g: 'кого? чего?', d: 'кому? чему?', a: 'кого? что?', i: 'кем? чем?', p: 'о ком? о чём?' };
  var GN = { m: { ru: 'мужской род', en: 'masculine', de: 'maskulin' }, f: { ru: 'женский род', en: 'feminine', de: 'feminin' },
    n: { ru: 'средний род', en: 'neuter', de: 'neutrum' }, pl: { ru: 'множественное число', en: 'plural', de: 'Plural' } };
  var GS = { m: { ru: 'м. р.', en: 'masc.', de: 'mask.' }, f: { ru: 'ж. р.', en: 'fem.', de: 'fem.' }, n: { ru: 'ср. р.', en: 'neut.', de: 'neutr.' }, pl: { ru: 'мн. ч.', en: 'plural', de: 'Plural' } };
  var ANIM = [{ ru: 'неодуш.', en: 'inanimate', de: 'unbelebt' }, { ru: 'одуш.', en: 'animate', de: 'belebt' }];
  function cn(c) { return b(cap(T(CN[c]))); }
  var VERB = { 'помогать': 'd', 'звонить': 'd', 'нравиться': 'd', 'заниматься': 'i', 'интересоваться': 'i', 'гордиться': 'i' };
  var PREP = { g: ['у', 'из', 'без', 'для', 'до', 'от', 'после', 'около'], d: ['к', 'по'], a: ['через', 'про'], i: ['с', 'над', 'под', 'перед', 'за'], p: ['о'] };
  var REASON_CASE = { subj: 'n', pred: 'n', net: 'g', poss: 'g', qty: 'g', iobj: 'd', age: 'd', need: 'd', obj: 'a', time: 'a', job: 'i', tool: 'i', transport: 'p' };
  function wantCase(r) {
    if (REASON_CASE[r]) return REASON_CASE[r];
    var m = /^(v|p):([^+]+)(?:\+(где|куда))?$/.exec(r);
    if (!m) return null;
    if (m[1] === 'v') return VERB[m[2]] || null;
    if (m[3]) return m[3] === 'где' ? 'p' : 'a';
    return CASES.filter(function (c) { return (PREP[c] || []).indexOf(m[2]) >= 0; })[0] || null;
  }
  function reasonHTML(r, c) {
    var C = cn(c);
    if (r === 'subj') return T({ ru: 'Подлежащее — кто? что? действует → ' + C + '.', en: 'The subject — who or what does it (кто? что?) → ' + C + '.', de: 'Das Subjekt — wer oder was handelt (кто? что?) → ' + C + '.' });
    if (r === 'pred') return T({ ru: 'После ' + ru('+это') + ' или тире (' + ru('Мой брат — врач') + ') — тоже ' + C + '.', en: 'After ' + ru('+это') + ' or a dash (' + ru('Мой брат — врач') + ') it is ' + C + ' too.', de: 'Nach ' + ru('+это') + ' oder einem Gedankenstrich (' + ru('Мой брат — врач') + ') ebenfalls ' + C + '.' });
    if (r === 'net') return T({ ru: ru('нет') + ' (отсутствие) всегда требует ' + C + ': ' + ru('нет вр+емени, нет молок+а') + '.', en: ru('нет') + ' (“there is no”) always takes the ' + C + ': ' + ru('нет вр+емени, нет молок+а') + '.', de: ru('нет') + ' („es gibt kein“) verlangt immer den ' + C + ': ' + ru('нет вр+емени, нет молок+а') + '.' });
    if (r === 'poss') return T({ ru: 'Чей? Принадлежность — второе существительное в ' + C + ' и стоит после первого: ' + ru('маш+ина бр+ата') + '.', en: 'Whose? The owner goes into the ' + C + ' and comes after the thing: ' + ru('маш+ина бр+ата') + ' (“the brother’s car”).', de: 'Wessen? Der Besitzer steht im ' + C + ' nach dem Ding: ' + ru('маш+ина бр+ата') + ' („das Auto des Bruders“).' });
    if (r === 'qty') return T({ ru: ru('мн+ого, м+ало, н+есколько, ск+олько') + ' + ' + C + ' мн. ч.', en: ru('мн+ого, м+ало, н+есколько, ск+олько') + ' (much / many, few, some, how many) + ' + C + ' plural.', de: ru('мн+ого, м+ало, н+есколько, ск+олько') + ' (viel, wenig, einige, wie viel) + ' + C + ' Plural.' });
    if (r === 'iobj') return T({ ru: 'Кому? Адресат (дать, подарить, написать, показать, объяснить кому) → ' + C + '.', en: 'To whom? The person who receives (дать, подарить, написать, показать, объяснить кому) → ' + C + '.', de: 'Wem? Der Empfänger (дать, подарить, написать, показать, объяснить кому) → ' + C + '.' });
    if (r === 'age') return T({ ru: 'Возраст: кому сколько лет → ' + C + ' (' + ru('Мне дв+адцать лет') + ').', en: 'Age: the person is in the ' + C + ' (' + ru('Мне дв+адцать лет') + ' = “to me twenty years”).', de: 'Alter: die Person steht im ' + C + ' (' + ru('Мне дв+адцать лет') + ' = „mir zwanzig Jahre“).' });
    if (r === 'need') return T({ ru: ru('н+ужно, н+адо, н+ужен') + ' — кому? → ' + C + ' (' + ru('Мне н+ужно') + ').', en: ru('н+ужно, н+адо, н+ужен') + ' (need): the person who needs is in the ' + C + ' (' + ru('Мне н+ужно') + ').', de: ru('н+ужно, н+адо, н+ужен') + ' (brauchen): wer etwas braucht, steht im ' + C + ' (' + ru('Мне н+ужно') + ').' });
    if (r === 'obj') return T({ ru: 'Прямое дополнение — кого? что? → ' + C + '.', en: 'Direct object — whom? what? (кого? что?) → ' + C + '.', de: 'Direktes Objekt — wen? was? (кого? что?) → ' + C + '.' });
    if (r === 'time') return T({ ru: 'Когда? ' + ru('в') + ' + день недели / день → ' + C + ': ' + ru('в субб+оту, в посл+едний день') + '.', en: 'When? ' + ru('в') + ' + a day → ' + C + ': ' + ru('в субб+оту, в посл+едний день') + ' (on Saturday, on the last day).', de: 'Wann? ' + ru('в') + ' + Tag → ' + C + ': ' + ru('в субб+оту, в посл+едний день') + ' (am Samstag, am letzten Tag).' });
    if (r === 'job') return T({ ru: ru('раб+отать, быть, стать') + ' кем? → ' + C + ': ' + ru('Он раб+отает врач+ом') + '.', en: ru('раб+отать, быть, стать') + ' (work as, be, become) + ' + C + ': ' + ru('Он раб+отает врач+ом') + '.', de: ru('раб+отать, быть, стать') + ' (arbeiten als, sein, werden) + ' + C + ': ' + ru('Он раб+отает врач+ом') + '.' });
    if (r === 'transport') return T({ ru: ru('на') + ' + транспорт (на чём?) → ' + C + ': ' + ru('на авт+обусе, на п+оезде') + '.', en: ru('на') + ' + a vehicle (by bus, by train) → ' + C + ': ' + ru('на авт+обусе, на п+оезде') + '.', de: ru('на') + ' + Verkehrsmittel (mit dem Bus, mit dem Zug) → ' + C + ': ' + ru('на авт+обусе, на п+оезде') + '.' });
    if (r === 'tool') return T({ ru: 'Чем? Инструмент, средство → ' + C + ' без предлога: ' + ru('пис+ать р+учкой, р+езать нож+ом') + '.', en: 'With what? A tool is in the ' + C + ' without a preposition: ' + ru('пис+ать р+учкой, р+езать нож+ом') + '.', de: 'Womit? Ein Werkzeug steht im ' + C + ' ohne Präposition: ' + ru('пис+ать р+учкой, р+езать нож+ом') + '.' });
    var m = /^(v|p):([^+]+)(?:\+(где|куда))?$/.exec(r);
    if (!m) return '';
    if (m[1] === 'v') {
      var vlist = CASES.filter(function (x) { return x === c; }).map(function (x) { return Object.keys(VERB).filter(function (v) { return VERB[v] === x; }).join(', '); })[0];
      if (m[2] === 'нравиться') return T({ ru: ru('нр+авиться') + ': тот, кому нравится, — в ' + C + ' (' + ru('Мне нр+авится') + ').', en: ru('нр+авиться') + ' (to please): the person who likes it is in the ' + C + ' (' + ru('Мне нр+авится') + ' = “it pleases me”).', de: ru('нр+авиться') + ' (gefallen): wem etwas gefällt, steht im ' + C + ' (' + ru('Мне нр+авится') + ' = „mir gefällt“).' });
      return T({ ru: 'Глагол ' + ru(m[2]) + ' требует ' + C + ' (как ' + ru(vlist) + ').', en: 'The verb ' + ru(m[2]) + ' takes the ' + C + ' (like ' + ru(vlist) + ').', de: 'Das Verb ' + ru(m[2]) + ' verlangt den ' + C + ' (wie ' + ru(vlist) + ').' });
    }
    var p = m[2];
    if (m[3] === 'где') return T({ ru: ru(p) + ' + где? (место) → ' + C + '. Куда? (направление) — винительный.', en: ru(p) + ' + where? (location, где?) → ' + C + '. Where to? (куда?) would be accusative.', de: ru(p) + ' + wo? (Ort, где?) → ' + C + '. Wohin? (куда?) wäre Akkusativ.' });
    if (m[3] === 'куда') return T({ ru: ru(p) + ' + куда? (направление) → ' + C + '. Где? (место) — предложный.', en: ru(p) + ' + where to? (direction, куда?) → ' + C + '. Where? (где?) would be prepositional.', de: ru(p) + ' + wohin? (Richtung, куда?) → ' + C + '. Wo? (где?) wäre Präpositiv.' });
    if (p === 'у') return T({ ru: ru('у') + ' + ' + C + '; ' + ru('у бр+ата есть …') + ' = «у брата есть» (принадлежность).', en: ru('у') + ' + ' + C + '; ' + ru('у бр+ата есть …') + ' = “the brother has …”.', de: ru('у') + ' + ' + C + '; ' + ru('у бр+ата есть …') + ' = „der Bruder hat …“.' });
    if (p === 'о') return T({ ru: ru('о') + ' (перед гласной ' + ru('об') + ': ' + ru('об +этом') + ') + ' + C + '.', en: ru('о') + ' (about; ' + ru('об') + ' before a vowel: ' + ru('об +этом') + ') + ' + C + '.', de: ru('о') + ' (über; vor Vokal ' + ru('об') + ': ' + ru('об +этом') + ') + ' + C + '.' });
    var list = PREP[c] ? PREP[c].map(show).join(', ') : '';
    return T({ ru: 'Предлог ' + ru(p) + ' требует ' + C + ' (' + list + ').', en: 'The preposition ' + ru(p) + ' takes the ' + C + ' (' + list + ').', de: 'Die Präposition ' + ru(p) + ' verlangt den ' + C + ' (' + list + ').' });
  }
  var CLS_NOTE = {
    a: { ru: 'Существительные на -а (как ' + 'м+ама' + ')', en: 'Nouns in -а (like м+ама)', de: 'Nomen auf -а (wie м+ама)' },
    ya: { ru: 'Существительные на -я (как нед+еля)', en: 'Nouns in -я (like нед+еля)', de: 'Nomen auf -я (wie нед+еля)' },
    ia: { ru: 'На -ия: дательный и предложный на -ии (в Росс+ии)', en: 'Nouns in -ия: dative and prepositional end in -ии (в Росс+ии)', de: 'Nomen auf -ия: Dativ und Präpositiv auf -ии (в Росс+ии)' },
    cons: { ru: 'Мужской род на согласный (как стол, брат)', en: 'Masculine nouns ending in a consonant (like стол, брат)', de: 'Maskulina auf Konsonant (wie стол, брат)' },
    j: { ru: 'Мужской род на -й (как муз+ей)', en: 'Masculine nouns in -й (like муз+ей)', de: 'Maskulina auf -й (wie муз+ей)' },
    msoft: { ru: 'Мужской род на -ь (как уч+итель)', en: 'Masculine nouns in -ь (like уч+итель)', de: 'Maskulina auf -ь (wie уч+итель)' },
    fsoft: { ru: 'Женский род на -ь: -и в родительном, дательном, предложном, -ью в творительном', en: 'Feminine nouns in -ь: -и in genitive, dative, prepositional, -ью in instrumental', de: 'Feminina auf -ь: -и im Genitiv, Dativ, Präpositiv, -ью im Instrumental' },
    o: { ru: 'Средний род на -о (как окн+о)', en: 'Neuter nouns in -о (like окн+о)', de: 'Neutra auf -о (wie окн+о)' },
    e: { ru: 'Средний род на -е (как м+оре)', en: 'Neuter nouns in -е (like м+оре)', de: 'Neutra auf -е (wie м+оре)' },
    ie: { ru: 'Средний род на -ие: предложный на -ии (в зд+ании)', en: 'Neuter nouns in -ие: prepositional in -ии (в зд+ании)', de: 'Neutra auf -ие: Präpositiv auf -ии (в зд+ании)' }
  };
  var R7 = { ru: 'Правило написания: после г, к, х, ж, ш, щ, ч пишется и, а не ы.', en: 'Spelling rule: after г, к, х, ж, ш, щ, ч write и, never ы.', de: 'Schreibregel: nach г, к, х, ж, ш, щ, ч steht и, nie ы.' };
  var R5 = { ru: 'Правило написания: после ж, ш, щ, ч, ц безударное о → е.', en: 'Spelling rule: after ж, ш, щ, ч, ц an unstressed о becomes е.', de: 'Schreibregel: nach ж, ш, щ, ч, ц wird unbetontes о zu е.' };

  function slotLabel(sl) {
    return cap(T(CN[sl.c])) + (sl.g ? ' ' + T(GS[sl.g]) : '') + (sl.anim != null ? ' (' + T(ANIM[sl.anim ? 1 : 0]) + ')' : '');
  }
  function formHTML(s) {
    var k = kindOf(s.w), F = formOf(s.w, s.c, s.g, s.anim), lines = [];
    if (k === 'noun') {
      var I = F.info;
      lines.push(T(CLS_NOTE[I.cls]).replace(/(\S*\+\S*)/g, function (x) { return ru(x); }) + ': ' + ru(I.nom) + ' → ' + cn(s.c) + ' ' + b(show(F.form)) + (F.end ? ' (-' + F.end + ')' : '') + '.');
      if (I.st === 'b' && /[аеиоуыэюяё]/.test(F.end)) lines.push(T({ ru: 'Ударение переходит на окончание.', en: 'The stress moves to the ending.', de: 'Die Betonung wandert auf die Endung.' }));
      if (I.g === 'm' && I.cls === 'a') lines.push(T({ ru: ru(I.nom) + ' — мужской род, но склоняется как ' + ru('м+ама') + '. Прилагательные и ' + ru('мой') + ' — мужского рода: ' + ru('моем+у п+апе') + '.', en: ru(I.nom) + ' is masculine but declines like ' + ru('м+ама') + '. Adjectives and ' + ru('мой') + ' stay masculine: ' + ru('моем+у п+апе') + '.', de: ru(I.nom) + ' ist maskulin, wird aber wie ' + ru('м+ама') + ' dekliniert. Adjektive und ' + ru('мой') + ' bleiben maskulin: ' + ru('моем+у п+апе') + '.' }));
    } else {
      lines.push(T({ ru: 'Согласуется с существительным: ', en: 'It agrees with the noun: ', de: 'Es richtet sich nach dem Nomen: ' }) + cn(s.c) + ' · ' + T(GN[s.g]) + ' → ' + b(show(F.form)) + '.');
      if (s.w === 'свой') lines.push(T({ ru: ru('свой') + ' = «принадлежащий подлежащему» (здесь — тому, кто звонит); склоняется как ' + ru('мой') + '.', en: ru('свой') + ' means “one’s own” — it points back to the subject (here: the person who calls); it declines like ' + ru('мой') + '.', de: ru('свой') + ' heißt „sein eigener“ — es bezieht sich auf das Subjekt (hier: wer anruft); dekliniert wie ' + ru('мой') + '.' }));
      if (k === 'adj') {
        if (F.soft) lines.push(T({ ru: 'Мягкая основа (-ний): окончания с е / я / ю — ' + ru('с+инего, с+инюю') + '.', en: 'Soft stem (-ний): endings with е / я / ю — ' + ru('с+инего, с+инюю') + '.', de: 'Weicher Stamm (-ний): Endungen mit е / я / ю — ' + ru('с+инего, с+инюю') + '.' }));
        if (F.endStress) lines.push(T({ ru: 'Ударение на окончании: ' + ru('больш+ой → больш+ого') + '.', en: 'The stress is on the ending: ' + ru('больш+ой → больш+ого') + '.', de: 'Die Betonung liegt auf der Endung: ' + ru('больш+ой → больш+ого') + '.' }));
      }
    }
    if (F.r7) lines.push(T(R7));
    if (F.r5) lines.push(T(R5));
    if (s.c === 'a' && (s.g === 'm' || s.g === 'pl') && k !== 'noun') lines.push(s.anim
      ? T({ ru: 'Одушевлённое (люди, животные): в м. р. и мн. ч. винительный = родительный.', en: 'Animate (people, animals): in the masculine and plural the accusative = genitive.', de: 'Belebt (Menschen, Tiere): im Maskulinum und Plural ist der Akkusativ = Genitiv.' })
      : T({ ru: 'Неодушевлённое: в м. р. и мн. ч. винительный = именительный.', en: 'Inanimate: in the masculine and plural the accusative = nominative.', de: 'Unbelebt: im Maskulinum und Plural ist der Akkusativ = Nominativ.' }));
    if (s.c === 'a' && k === 'noun' && (F.info.cls === 'cons' || F.info.cls === 'j' || F.info.cls === 'msoft')) lines.push(F.info.anim
      ? T({ ru: 'Одушевлённое мужского рода: винительный = родительный (' + ru('в+ижу бр+ата') + ').', en: 'Animate masculine: accusative = genitive (' + ru('в+ижу бр+ата') + ').', de: 'Belebtes Maskulinum: Akkusativ = Genitiv (' + ru('в+ижу бр+ата') + ').' })
      : T({ ru: 'Неодушевлённое мужского рода: винительный = именительный (' + ru('в+ижу стол') + ').', en: 'Inanimate masculine: accusative = nominative (' + ru('в+ижу стол') + ').', de: 'Unbelebtes Maskulinum: Akkusativ = Nominativ (' + ru('в+ижу стол') + ').' }));
    return lines;
  }
  function wrongHTML(s, chosen) {
    var low = chosen.toLowerCase(), sl = slots(s.w).filter(function (x) { return x.form.toLowerCase() === low; });
    if (!sl.length) return '';
    var seen = {}, labels = sl.map(slotLabel).filter(function (x) { if (seen[x]) return false; seen[x] = 1; return true; });
    return T({ ru: 'Вы выбрали ', en: 'You picked ', de: 'Du hast ' }) + b(show(escHTML(chosen))) + T({ ru: ' — эта форма для: ', en: ' — that form is for: ', de: ' gewählt — diese Form steht für: ' }) + labels.join(' · ') + '.';
  }

  /* ---------------- tasks ---------------- */
  function task(s) { return { text: s[0], w: s[1], c: s[2], g: s[3], r: s[4], anim: !!s[5] }; }
  function startCap(s) { return /^___/.test(s.text); }
  function answer(s) { var f = formOf(s.w, s.c, s.g, s.anim).form; return startCap(s) ? cap(f) : f; }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function options(s) {
    var all = slots(s.w), order = [], ans = formOf(s.w, s.c, s.g, s.anim).form;
    all.forEach(function (x) { if (order.indexOf(x.form) < 0) order.push(x.form); });
    var cand;
    if (kindOf(s.w) === 'noun') cand = order.slice();
    else {
      cand = [];
      all.forEach(function (x) { if ((x.g === s.g || x.c === s.c) && cand.indexOf(x.form) < 0) cand.push(x.form); });
    }
    cand = cand.filter(function (f) { return f !== ans; });
    var seed = hash(s.text);
    for (var i = cand.length - 1; i > 0; i--) { seed = (Math.imul(seed, 1103515245) + 12345) >>> 0; var j = seed % (i + 1), t = cand[i]; cand[i] = cand[j]; cand[j] = t; }
    var pick = cand.slice(0, 5).concat([ans]);
    return order.filter(function (f) { return pick.indexOf(f) >= 0; }).map(function (f) { return startCap(s) ? cap(f) : f; });
  }
  function explainHTML(s, chosen) {
    var lines = [reasonHTML(s.r, s.c)].concat(formHTML(s));
    if (chosen && chosen !== answer(s)) lines.unshift(wrongHTML(s, chosen));
    return '<ul class="ag-why">' + lines.filter(Boolean).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }

  /* ---------------- gender by ending ---------------- */
  var GROUPS = {
    male: { g: 'm', words: ['папа', 'дедушка', 'мужчина', 'дядя'], text: { ru: 'Мужчина — мужской род, хотя на -а / -я (' + 'п+апа, д+едушка, мужч+ина, д+ядя' + ').', en: 'A male person is masculine even in -а / -я (п+апа, д+едушка, мужч+ина, д+ядя).', de: 'Ein Mann ist maskulin, auch auf -а / -я (п+апа, д+едушка, мужч+ина, д+ядя).' }, hint: { ru: 'смотрите на смысл: мужчина', en: 'look at the meaning: a man', de: 'auf die Bedeutung achten: ein Mann' } },
    months: { g: 'm', words: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'], text: { ru: 'Месяцы — всегда мужской род.', en: 'Months are always masculine.', de: 'Monate sind immer maskulin.' }, hint: { ru: 'это месяц', en: 'a month', de: 'ein Monat' } }
  };
  // [ending, gender ('soft' = the ending alone doesn't decide), strength: 'always' | 'mostly' | '']
  var GRULES = [['мя', 'n', 'always'], ['ость', 'f', 'always'], ['тель', 'm', 'always'], ['жь', 'f', 'always'], ['шь', 'f', 'always'], ['чь', 'f', 'always'], ['щь', 'f', 'always'],
    ['арь', 'm', 'mostly'], ['а', 'f', ''], ['я', 'f', ''], ['о', 'n', 'always'], ['е', 'n', ''], ['й', 'm', 'always'], ['ь', 'soft', '']];
  function gRule(noun) {
    var p = plain(noun);
    for (var k in GROUPS) if (GROUPS[k].words.indexOf(p) >= 0) return { group: k, g: GROUPS[k].g };
    for (var i = 0; i < GRULES.length; i++) if (p.length > GRULES[i][0].length && p.slice(-GRULES[i][0].length) === GRULES[i][0]) return { end: GRULES[i][0], g: GRULES[i][1], how: GRULES[i][2] };
    if (!isV(p.slice(-1))) return { end: 'cons', g: 'm', how: 'always' };
    return null;
  }
  var PRON = { m: 'он', f: 'он+а', n: 'он+о' };
  function endLabel(r) { return r.end === 'cons' ? T({ ru: 'согласный', en: 'a consonant', de: 'Konsonant' }) : '-' + r.end; }
  function gMarked(noun, esc) {
    var r = gRule(noun);
    if (!r || r.group || r.end === 'cons') return esc(show(noun));
    // cut the raw '+' string so that the last r.end.length letters (and a stress mark inside them) are the ending
    var cut = noun.length, n = 0;
    while (cut > 0 && n < r.end.length) { cut--; if (noun[cut] !== '+') n++; }
    if (cut > 0 && noun[cut - 1] === '+') cut--;
    return esc(show(noun.slice(0, cut))) + '<u class="ag-end">' + esc(show(noun.slice(cut))) + '</u>';
  }
  function gSimilar(noun, g) {
    var r = gRule(noun), out = [];
    D().genders.forEach(function (e) {
      if (e[0] === noun || out.length >= 3) return;
      var r2 = gRule(e[0]);
      if (r2 && e[1] === g && (r.group ? r2.group === r.group : r2.end === r.end)) out.push(e[0]);
    });
    return out;
  }
  function gExplain(s, chosen) {
    var r = gRule(s.noun), lines = [], gname = T(GN[s.g]);
    var ans = PRON[s.g];
    if (chosen && chosen !== ans) lines.push(T({ ru: 'Вы выбрали ', en: 'You picked ', de: 'Du hast ' }) + b(show(escHTML(chosen))) + T({ ru: '.', en: '.', de: ' gewählt.' }));
    lines.push(ru(s.noun) + ' — ' + gname + ': ' + ru((s.g === 'm' ? 'мой ' : s.g === 'f' ? 'мо+я ' : 'моё ') + s.noun) + '.');
    if (r.group) lines.push(show(T(GROUPS[r.group].text)));
    else if (r.g === 'soft') lines.push(T({ ru: 'На -ь бывают оба рода: ' + ru('мой день, мой слов+арь') + ' — но ' + ru('мо+я тетр+адь, мо+я дверь') + '. Подсказки: -тель, -арь, месяцы → м. р.; -ость и -жь, -шь, -чь, -щь → ж. р. Остальные учите с ' + ru('мой / мо+я') + '.',
      en: 'Nouns in -ь can be either: ' + ru('мой день, мой слов+арь') + ' but ' + ru('мо+я тетр+адь, мо+я дверь') + '. Clues: -тель, -арь, months → masculine; -ость and -жь, -шь, -чь, -щь → feminine. Learn the rest with ' + ru('мой / мо+я') + '.',
      de: 'Nomen auf -ь können beides sein: ' + ru('мой день, мой слов+арь') + ', aber ' + ru('мо+я тетр+адь, мо+я дверь') + '. Hinweise: -тель, -арь, Monate → maskulin; -ость und -жь, -шь, -чь, -щь → feminin. Den Rest mit ' + ru('мой / мо+я') + ' lernen.' }));
    else {
      var how = r.how === 'always' ? T({ ru: 'всегда', en: 'always', de: 'immer' }) : r.how === 'mostly' ? T({ ru: 'обычно', en: 'usually', de: 'meistens' }) : T({ ru: 'как правило', en: 'as a rule', de: 'in der Regel' });
      lines.push(T({ ru: 'Закономерность: ', en: 'Pattern: ', de: 'Regel: ' }) + b(endLabel(r)) + ' → ' + how + ' ' + T(GN[r.g]) + '.');
      if (r.end === 'а' || r.end === 'я') lines.push(T({ ru: 'Исключение — мужчины: ' + ru('п+апа, д+едушка, мужч+ина') + ' (м. р.).', en: 'Exception: male persons — ' + ru('п+апа, д+едушка, мужч+ина') + ' are masculine.', de: 'Ausnahme: männliche Personen — ' + ru('п+апа, д+едушка, мужч+ина') + ' sind maskulin.' }));
      if (r.end === 'мя') lines.push(T({ ru: 'На -мя — около десятка слов, все среднего рода: ' + ru('вр+емя, +имя') + '.', en: 'Only about ten nouns end in -мя, all neuter: ' + ru('вр+емя, +имя') + '.', de: 'Nur etwa zehn Nomen enden auf -мя, alle neutrum: ' + ru('вр+емя, +имя') + '.' }));
    }
    var sim = gSimilar(s.noun, s.g);
    if (sim.length) lines.push(T({ ru: 'Так же: ', en: 'Same: ', de: 'Genauso: ' }) + sim.map(ru).join(', ') + '.');
    return '<ul class="ag-why">' + lines.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }

  /* ---------------- reference ---------------- */
  var REF_NOUNS = ['брат', 'стол', 'мама', 'неделя', 'окно', 'море', 'тетрадь'];
  var SECTIONS = [['nouns', 'Noun endings'], ['adj', 'Adjectives'], ['poss', 'мой · наш · этот'], ['cases', 'Which case?'],
    ['anim', 'Animate accusative'], ['spelling', 'Spelling rules'], ['gender', 'Gender by ending']];
  function title(o, id) { return GT.whichForm.sectionTitle(T(o), id); }
  function caseCell(c) { return '<td>' + escHTML(cap(T(CN[c]))) + ' <span class="ag-q">' + CQ[c] + '</span></td>'; }
  function wordTable(w, esc) {
    var head = [T({ ru: 'Падеж', en: 'Case', de: 'Kasus' })].concat(GENDERS.map(function (g) { return T(GS[g]); }));
    return '<div class="table-wrap"><table class="ag-table"><thead><tr>' + head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      CASES.map(function (c) {
        return '<tr>' + caseCell(c) + GENDERS.map(function (g) {
          var f = (c === 'a' && (g === 'm' || g === 'pl')) ? formOf(w, c, g, false).form + ' / ' + formOf(w, c, g, true).form : formOf(w, c, g, false).form;
          return '<td class="de" lang="ru">' + esc(show(f)) + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }
  function nounTable(keys, esc) {
    return '<div class="table-wrap"><table class="ag-table"><thead><tr><th>' + esc(T({ ru: 'Падеж', en: 'Case', de: 'Kasus' })) + '</th>' +
      keys.map(function (k) { return '<th lang="ru">' + esc(show(D().nouns[k][0])) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      CASES.map(function (c) { return '<tr>' + caseCell(c) + keys.map(function (k) { return '<td class="de" lang="ru">' + esc(show(nounForm(k, c).form)) + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
  }
  function list(items) { return '<div class="box prose"><ul>' + items.map(function (x) { return '<li>' + T(x) + '</li>'; }).join('') + '</ul></div>'; }
  function gendersHTML(esc) {
    var col = {
      m: [['-' + T({ ru: 'согласный', en: 'consonant', de: 'Konsonant' }) + ', -й', 'стол, дом, муз+ей, чай'], ['-тель', 'уч+итель, пис+атель'], ['-арь', 'слов+арь, календ+арь'], [T({ ru: 'месяцы', en: 'months', de: 'Monate' }), 'янв+арь, сент+ябрь'], [T({ ru: 'мужчины на -а / -я', en: 'male persons in -а / -я', de: 'Männer auf -а / -я' }), 'п+апа, д+едушка, мужч+ина']],
      f: [['-а, -я', 'кн+ига, нед+еля'], ['-ия', 'л+екция, ист+ория'], ['-ость', 'н+овость, р+адость'], ['-жь, -шь, -чь, -щь', 'ночь, вещь, п+омощь']],
      n: [['-о', 'окн+о, м+есто'], ['-е, -ие, -ье', 'м+оре, зд+ание, пл+атье'], ['-мя', 'вр+емя, +имя']]
    };
    var h = '<div class="ag-genders">' + ['m', 'f', 'n'].map(function (g) {
      return '<div class="box ag-gcol"><h4 lang="ru">' + show(PRON[g]) + ' · ' + esc(T(GN[g])) + '</h4><ul>' + col[g].map(function (x) {
        return '<li><span class="ag-suf">' + esc(x[0]) + '</span><br><span class="ag-ex" lang="ru">' + esc(show(x[1])) + '</span></li>';
      }).join('') + '</ul></div>';
    }).join('') + '</div>';
    h += '<div class="box prose ag-tip"><p>' + T({ ru: '<b>-ь — проверяйте:</b> ' + ru('мой день, мой рубль') + ', но ' + ru('мо+я тетр+адь, мо+я дверь') + '. Учите такие слова сразу с ' + ru('мой / мо+я') + '.',
      en: '<b>-ь — check it:</b> ' + ru('мой день, мой рубль') + ' but ' + ru('мо+я тетр+адь, мо+я дверь') + '. Learn these nouns together with ' + ru('мой / мо+я') + '.',
      de: '<b>-ь — prüfen:</b> ' + ru('мой день, мой рубль') + ', aber ' + ru('мо+я тетр+адь, мо+я дверь') + '. Diese Nomen gleich mit ' + ru('мой / мо+я') + ' lernen.' }) + '</p></div>';
    return h;
  }
  function reference(api) {
    var esc = api.esc, h = '';
    h += '<header class="page-head"><h1>' + T({ ru: 'Падежные окончания', en: 'Case endings', de: 'Kasusendungen' }) + '</h1><p class="lead">' +
      T({ ru: 'Окончания существительных, прилагательных, ' + ru('мой / наш / +этот') + ' в шести падежах, правила написания и род по окончанию — и игра, где нужно выбрать форму в предложении.',
        en: 'Endings of nouns, adjectives and ' + ru('мой / наш / +этот') + ' in all six cases, the spelling rules and gender by ending — plus a game where you pick the right form in a sentence.',
        de: 'Endungen von Nomen, Adjektiven und ' + ru('мой / наш / +этот') + ' in allen sechs Fällen, die Schreibregeln und das Genus nach der Endung — dazu ein Spiel, in dem du die richtige Form im Satz wählst.' }) + '</p></header>';
    h += '<div class="actions-row"><a class="btn primary" href="#/endings/play">Play · Which ending?</a><a class="btn" href="#/grammar/cases">Cases lesson</a><a class="btn" href="#/cases">Cases across your languages</a></div>';

    h += title({ ru: 'Существительные · единственное число', en: 'Nouns · singular', de: 'Nomen · Singular' }, 'nouns') + nounTable(REF_NOUNS, esc);
    h += '<p class="note muted ag-note">' + T({ ru: 'Предложный почти всегда на -е; на -и — у слов на -ь (ж. р.) и на -ия / -ие: ' + ru('в тетр+ади, в Росс+ии, в зд+ании') + '. У ' + ru('стол, окн+о') + ' ударение уходит на окончание.',
      en: 'The prepositional almost always ends in -е; -и for feminine nouns in -ь and nouns in -ия / -ие: ' + ru('в тетр+ади, в Росс+ии, в зд+ании') + '. In ' + ru('стол, окн+о') + ' the stress moves to the ending.',
      de: 'Der Präpositiv endet fast immer auf -е; auf -и bei Feminina auf -ь und bei Nomen auf -ия / -ие: ' + ru('в тетр+ади, в Росс+ии, в зд+ании') + '. Bei ' + ru('стол, окн+о') + ' wandert die Betonung auf die Endung.' }) + '</p>';

    h += title({ ru: 'Прилагательные', en: 'Adjectives', de: 'Adjektive' }, 'adj') + wordTable('н+овый', esc);
    var types = [['хор+оший', { ru: 'основа на ж, ш, щ, ч', en: 'stem in ж, ш, щ, ч', de: 'Stamm auf ж, ш, щ, ч' }], ['р+усский', { ru: 'основа на г, к, х', en: 'stem in г, к, х', de: 'Stamm auf г, к, х' }],
      ['больш+ой', { ru: 'ударное окончание', en: 'stressed ending', de: 'betonte Endung' }], ['с+иний', { ru: 'мягкая основа -ний', en: 'soft stem -ний', de: 'weicher Stamm -ний' }]];
    h += '<div class="table-wrap"><table class="ag-table"><thead><tr><th>' + esc(T({ ru: 'Тип', en: 'Type', de: 'Typ' })) + '</th><th>' + esc(T(CN.n)) + '</th><th>' + esc(T(CN.g)) + ' ' + esc(T(GS.m)) + '</th><th>' + esc(T(CN.i)) + ' ' + esc(T(GS.f)) + '</th><th>' + esc(T(GS.pl)) + '</th></tr></thead><tbody>' +
      types.map(function (t) { return '<tr><td>' + esc(T(t[1])) + '</td>' + [['n', 'm'], ['g', 'm'], ['i', 'f'], ['n', 'pl']].map(function (x) { return '<td class="de" lang="ru">' + esc(show(adjForm(t[0], x[0], x[1], false).form)) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';

    h += title({ ru: 'мой · наш · этот', en: 'мой · наш · этот', de: 'мой · наш · этот' }, 'poss') + wordTable('мой', esc);
    h += '<p class="note muted ag-note">' + T({ ru: 'Так же: ' + ru('твой, свой') + ' (как ' + ru('мой') + '), ' + ru('ваш') + ' (как ' + ru('наш') + '). ' + ru('ег+о, её, их') + ' не изменяются: ' + ru('с ег+о бр+атом') + '.',
      en: 'The same: ' + ru('твой, свой') + ' (like ' + ru('мой') + '), ' + ru('ваш') + ' (like ' + ru('наш') + '). ' + ru('ег+о, её, их') + ' (his, her, their) never change: ' + ru('с ег+о бр+атом') + '.',
      de: 'Genauso: ' + ru('твой, свой') + ' (wie ' + ru('мой') + '), ' + ru('ваш') + ' (wie ' + ru('наш') + '). ' + ru('ег+о, её, их') + ' (sein, ihr, ihr) bleiben unverändert: ' + ru('с ег+о бр+атом') + '.' }) + '</p>' + wordTable('наш', esc) + wordTable('этот', esc);

    var rows = [
      ['n', { ru: 'подлежащее; после это / тире', en: 'subject; after это / a dash', de: 'Subjekt; nach это / Gedankenstrich' }, 'Мой брат — врач.'],
      ['g', { ru: 'нет; чей?; много / мало; у, из, без, для, до, от, после, около', en: 'нет (there is no); whose?; много / мало; у, из, без, для, до, от, после, около', de: 'нет (es gibt kein); wessen?; много / мало; у, из, без, для, до, от, после, около' }, 'У мо+ей сестр+ы нет маш+ины.'],
      ['d', { ru: 'кому? (дать, написать); помогать, звонить, нравиться; возраст; нужно; к, по', en: 'to whom? (give, write); помогать, звонить, нравиться; age; нужно; к, по', de: 'wem? (geben, schreiben); помогать, звонить, нравиться; Alter; нужно; к, по' }, 'Я помог+аю моем+у бр+ату.'],
      ['a', { ru: 'прямое дополнение; в / на + куда?; в + день; через, про', en: 'direct object; в / на + where to?; в + a day; через, про', de: 'direktes Objekt; в / на + wohin?; в + Tag; через, про' }, 'Я ид+у в шк+олу.'],
      ['i', { ru: 'с; чем? (инструмент); работать / быть / стать кем?; заниматься, интересоваться; над, под, перед, за', en: 'с (with); a tool; работать / быть / стать (as / be / become); заниматься, интересоваться; над, под, перед, за', de: 'с (mit); Werkzeug; работать / быть / стать (als / sein / werden); заниматься, интересоваться; над, под, перед, за' }, 'Он раб+отает врач+ом.'],
      ['p', { ru: 'в / на + где?; о (об)', en: 'в / на + where?; о (about)', de: 'в / на + wo?; о (über)' }, 'Я жив+у в Москв+е.']
    ];
    h += title({ ru: 'Какой падеж?', en: 'Which case?', de: 'Welcher Fall?' }, 'cases') + '<div class="table-wrap"><table><thead><tr><th>' + esc(T({ ru: 'Падеж', en: 'Case', de: 'Kasus' })) + '</th><th>' + esc(T({ ru: 'Когда', en: 'When', de: 'Wann' })) + '</th><th>' + esc(T({ ru: 'Пример', en: 'Example', de: 'Beispiel' })) + '</th></tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + caseCell(r[0]) + '<td>' + esc(T(r[1])) + '</td><td class="de" lang="ru">' + esc(show(r[2])) + '</td></tr>'; }).join('') + '</tbody></table></div>';

    h += title({ ru: 'Одушевлённость в винительном', en: 'Animate accusative', de: 'Belebtheit im Akkusativ' }, 'anim') + list([
      { ru: 'Мужской род и мн. ч.: одушевлённые (люди, животные) — винительный = родительный: ' + ru('в+ижу бр+ата, моег+о др+уга, н+аших дет+ей') + '.', en: 'Masculine and plural: for people and animals the accusative = genitive: ' + ru('в+ижу бр+ата, моег+о др+уга, н+аших дет+ей') + '.', de: 'Maskulinum und Plural: bei Menschen und Tieren ist Akkusativ = Genitiv: ' + ru('в+ижу бр+ата, моег+о др+уга, н+аших дет+ей') + '.' },
      { ru: 'Неодушевлённые — винительный = именительный: ' + ru('в+ижу стол, мой ключ, н+овые кн+иги') + '.', en: 'Things: accusative = nominative: ' + ru('в+ижу стол, мой ключ, н+овые кн+иги') + '.', de: 'Dinge: Akkusativ = Nominativ: ' + ru('в+ижу стол, мой ключ, н+овые кн+иги') + '.' },
      { ru: 'Женский род на -а / -я всегда -у / -ю: ' + ru('мо+ю сестр+у, мо+ю кн+игу') + '. Средний род: винительный = именительный.', en: 'Feminine in -а / -я always takes -у / -ю: ' + ru('мо+ю сестр+у, мо+ю кн+игу') + '. Neuter: accusative = nominative.', de: 'Feminina auf -а / -я immer -у / -ю: ' + ru('мо+ю сестр+у, мо+ю кн+игу') + '. Neutrum: Akkusativ = Nominativ.' }
    ].map(function (x) { return { ru: x.ru, en: x.en, de: x.de }; }));

    h += title({ ru: 'Правила написания', en: 'Spelling rules', de: 'Schreibregeln' }, 'spelling') + list([
      { ru: 'После <b>г, к, х, ж, ш, щ, ч</b> пишется <b>и</b>, а не ы: ' + ru('кн+иги, р+усские, хор+ошие') + '.', en: 'After <b>г, к, х, ж, ш, щ, ч</b> write <b>и</b>, never ы: ' + ru('кн+иги, р+усские, хор+ошие') + '.', de: 'Nach <b>г, к, х, ж, ш, щ, ч</b> steht <b>и</b>, nie ы: ' + ru('кн+иги, р+усские, хор+ошие') + '.' },
      { ru: 'После <b>ж, ш, щ, ч, ц</b> безударное о → <b>е</b>: ' + ru('хор+ошего, тов+арищем, +улицей') + '; под ударением о остаётся: ' + ru('больш+ого, нож+ом') + '.', en: 'After <b>ж, ш, щ, ч, ц</b> an unstressed о → <b>е</b>: ' + ru('хор+ошего, тов+арищем, +улицей') + '; stressed о stays: ' + ru('больш+ого, нож+ом') + '.', de: 'Nach <b>ж, ш, щ, ч, ц</b> wird unbetontes о → <b>е</b>: ' + ru('хор+ошего, тов+арищем, +улицей') + '; betontes о bleibt: ' + ru('больш+ого, нож+ом') + '.' },
      { ru: 'После <b>г, к, х</b> о остаётся: ' + ru('р+усского, м+аленького') + '.', en: 'After <b>г, к, х</b> о stays: ' + ru('р+усского, м+аленького') + '.', de: 'Nach <b>г, к, х</b> bleibt о: ' + ru('р+усского, м+аленького') + '.' }
    ]);

    h += title({ ru: 'Род по окончанию', en: 'Gender from the ending', de: 'Genus nach der Endung' }, 'gender') + gendersHTML(esc);
    h += '<div class="actions"><a class="btn primary" href="#/endings/play">Try it yourself →</a></div>';
    return h;
  }

  /* ---------------- games ---------------- */
  var caseGame = {
    items: function () { return D().sentences; },
    match: function (s, mode) { return mode === 'x' ? GT.whichForm.isTrap('ru', task(s)) : mode === 'all' || s[2] === mode; },
    task: task, answer: answer, options: options, show: show,
    kind: function (s) { var k = kindOf(s.w); return 'Pick the form · ' + show(k === 'noun' ? D().nouns[s.w][0] : k === 'det' ? DET[s.w].m[0] : s.w); },
    question: function (s, ctx) { return ctx.esc(show(s.text)).replace('___', ctx.blank); },
    hintLabels: ['Hint · case', 'More hint · gender'],
    hint: function (s, level, esc) {
      var parts = [cn(s.c) + ' <span class="ag-q">' + CQ[s.c] + '</span>'];
      if (level >= 2) {
        if (kindOf(s.w) === 'noun') { var I = nounInfo(s.w); parts.push(ru(I.nom) + ' — ' + esc(T(GN[I.g]))); }
        else parts.push(esc(T(GN[s.g])) + (s.c === 'a' && (s.g === 'm' || s.g === 'pl') ? ', ' + esc(T(ANIM[s.anim ? 1 : 0])) : ''));
      }
      return parts.join(' · ');
    },
    explain: explainHTML,
    forms: {
      show: 'All forms', hide: 'Hide forms',
      html: function (s, esc) {
        if (kindOf(s.w) === 'noun') return '<h3 class="section-title">' + esc(show(D().nouns[s.w][0])) + ' · all forms</h3>' + nounTable([s.w], esc);
        return '<h3 class="section-title">' + esc(show(DET[s.w] ? DET[s.w].m[0] : s.w)) + ' · all forms</h3>' + wordTable(s.w, esc);
      }
    },
    next: 'Next sentence →'
  };
  var genderGame = {
    items: function () { return D().genders; },
    match: function (e) { var rule = gRule(e[0]); return rule && rule.g === e[1]; },
    task: function (e) { return { noun: e[0], g: e[1] }; },
    answer: function (s) { return PRON[s.g]; },
    options: function () { return ['он', 'он+а', 'он+о']; },
    show: show,
    kind: function () { return 'Pick он / она / оно · by the ending'; },
    qClass: 'ag-end-q',
    question: function (s, ctx) { return (ctx.revealed || ctx.hint ? gMarked(s.noun, ctx.esc) : ctx.esc(show(s.noun))) + ' — ' + ctx.blank; },
    hintLabels: ['Hint · ending'],
    hint: function (s) {
      var r = gRule(s.noun), parts = [];
      var clue = r.group ? T(GROUPS[r.group].hint) : b(endLabel(r));
      var frequency = r.group || r.how === 'always' ? '' : T({ ru: 'обычно ', en: 'usually ', de: 'meistens ' });
      parts.push(clue + ' → ' + frequency + T(GN[s.g]) + ' (' + ru(PRON[s.g]) + ')');
      var sim = gSimilar(s.noun, s.g);
      if (sim.length) parts.push(T({ ru: 'так же: ', en: 'same as: ', de: 'genauso: ' }) + sim.map(ru).join(', '));
      return parts.join(' · ');
    },
    verdict: function (s, ans, esc) { return esc(show(s.noun)) + ' — ' + esc(show(ans)); },
    explain: gExplain,
    forms: { show: 'Patterns', hide: 'Hide patterns', html: function (s, esc) { return '<h3 class="section-title">Gender by ending</h3>' + gendersHTML(esc); } },
    keys: 'patterns',
    next: 'Next word →'
  };

  /* ---- gender traps (I know German): Russian nouns whose gender differs from German ---- */
  var DG = { m: 'maskulin', f: 'feminin', n: 'neutrum' };
  function trapItems() { return (GT.FORMS_CROSS && GT.FORMS_CROSS.genderTraps) || []; }
  var trapGame = {
    items: trapItems,
    task: function (x) { return { noun: x[2], g: x[3], de: x[0] + ' ' + x[1], dg: { der: 'm', die: 'f', das: 'n' }[x[0]] }; },
    answer: function (s) { return PRON[s.g]; },
    options: function () { return ['он', 'он+а', 'он+о']; },
    show: show,
    kind: function () { return 'Pick он / она / оно · not like in German'; },
    qClass: 'ag-end-q',
    question: function (s, ctx) { return (ctx.revealed || ctx.hint >= 2 ? gMarked(s.noun, ctx.esc) : ctx.esc(show(s.noun))) + ' <span class="ag-q" lang="de">' + ctx.esc(s.de) + '</span> — ' + ctx.blank; },
    hintLabels: ['Hint · German gender', 'More hint · Russian ending'],
    hint: function (s, level) {
      var parts = [T({ ru: 'по-немецки ' + s.de + ' — в русском род другой', en: 'German says ' + s.de + ' — Russian is different', de: 'auf Deutsch ' + s.de + ' — im Russischen anders' })];
      if (level >= 2) { var r = gRule(s.noun); parts.push(r.group ? T(GROUPS[r.group].hint) : T({ ru: 'смотрите на окончание ', en: 'look at the ending ', de: 'auf die Endung achten: ' }) + '<b>' + endLabel(r) + '</b>'); }
      return parts.join(' · ');
    },
    verdict: function (s, ans, esc) { return esc(show(s.noun)) + ' — ' + esc(show(ans)); },
    explain: function (s, chosen) {
      var lines = gExplain(s, chosen).replace(/^<ul class="ag-why">|<\/ul>$/g, '');
      var t = T({ ru: 'По-немецки ' + s.de + ', по-русски ' + ru(s.noun) + ' — ' + T(GN[s.g]) + '. Род не переносится.', en: 'German: ' + s.de + ' (' + T(GN[s.dg]) + '); Russian: ' + ru(s.noun) + ' is ' + T(GN[s.g]) + '. Gender does not carry over.', de: 'Deutsch: ' + s.de + ' (' + DG[s.dg] + '); Russisch: ' + ru(s.noun) + ' ist ' + T(GN[s.g]) + '. Das Genus lässt sich nicht übertragen.' });
      return '<ul class="ag-why">' + lines + '<li>' + t + '</li></ul>';
    },
    next: 'Next word →'
  };

  var LOCATIVE_U = ['лес', 'сад', 'мост', 'шкаф', 'угол', 'год', 'пол', 'берег', 'аэропорт', 'край', 'снег', 'нос', 'лёд', 'глаз', 'порт', 'ряд', 'Крым', 'дым', 'рот', 'лоб', 'час', 'бок', 'круг'];
  function check() {
    var bad = [], seen = {}, A = D();
    REF_NOUNS.forEach(function (k) { if (!A.nouns[k]) bad.push('reference noun missing: ' + k); });
    Object.keys(A.nouns).forEach(function (k) {
      var I = nounInfo(k);
      if (plain(A.nouns[k][0]) !== k) bad.push('noun key ≠ form: ' + k);
      if (I.idx < 0) bad.push('noun without stress: ' + k);
      if (I.st === 'a' && I.idx >= I.stem.length) bad.push('stress type a but stressed ending: ' + k);
      if (I.st === 'b' && ['ya', 'ia', 'fsoft', 'e', 'ie', 'j'].indexOf(I.cls) >= 0) bad.push('stress type b not supported for this class: ' + k);
      if (LOCATIVE_U.indexOf(k) >= 0) bad.push('locative -у noun: ' + k);
    });
    A.adjectives.forEach(function (a) { var I = adjInfo(a); if (!/(ый|ий|ой)$/.test(I.p)) bad.push('adjective: ' + a); if (!I.endStress && I.idx < 0) bad.push('adjective without stress: ' + a); if (I.endStress && a.indexOf('+ой') < 0) bad.push('-ой adjective needs stress on о: ' + a); });
    A.sentences.forEach(function (s, i) {
      var where = i + ': ' + s[0];
      if (seen[s[0]]) bad.push('dup sentence: ' + s[0]); seen[s[0]] = 1;
      if ((s[0].match(/___/g) || []).length !== 1) bad.push('blank: ' + where);
      var k = kindOf(s[1]);
      if (!k) { bad.push('unknown word ' + s[1] + ': ' + where); return; }
      if (CASES.indexOf(s[2]) < 0) bad.push('case: ' + where);
      if (GENDERS.indexOf(s[3]) < 0) bad.push('gender: ' + where);
      if (k === 'noun' && A.nouns[s[1]][1] !== s[3]) bad.push('noun gender: ' + where);
      var want = wantCase(s[4]);
      if (!want) bad.push('reason: ' + where); else if (want !== s[2]) bad.push('case ≠ reason: ' + where);
      if (/\S\+[^аеиоуыэюяАЕИОУЫЭЮЯ]/.test(s[0]) || /\+ё/.test(s[0])) bad.push('stress mark: ' + where);
      s[0].replace('___', ' ').split(/[^А-Яа-яЁё+-]+/).forEach(function (wd) { if (wd && vowels(plain(wd)) > 1 && stressIdx(wd) < 0) bad.push('unstressed word "' + wd + '": ' + where); });
      var f = formOf(s[1], s[2], s[3], !!s[5]);
      if (!f || !f.form) bad.push('no form: ' + where);
      var opts = options(task(s));
      if (opts.indexOf(answer(task(s))) < 0) bad.push('answer not in options: ' + where);
    });
    trapItems().forEach(function (x) { var r = gRule(x[2]); if (!r || (r.g !== 'soft' && r.g !== x[3])) bad.push('gender trap: rule ≠ gender for ' + x[2]); if (vowels(plain(x[2])) > 1 && stressIdx(x[2]) < 0) bad.push('gender trap without stress: ' + x[2]); });
    seen = {};
    A.genders.forEach(function (e) {
      if (seen[e[0]]) bad.push('dup gender word: ' + e[0]); seen[e[0]] = 1;
      var r = gRule(e[0]);
      if (!r) bad.push('gender: no rule ' + e[0]);
      else if (r.g !== 'soft' && r.g !== e[1]) bad.push('gender: rule says ' + r.g + ' for ' + e[0]);
      if (vowels(plain(e[0])) > 1 && stressIdx(e[0]) < 0) bad.push('gender word without stress: ' + e[0]);
    });
    return bad;
  }

  GT.whichForm.define('ru', {
    route: 'endings',
    label: 'Endings',
    ready: function () { return !!GT.RU_ENDINGS; },
    sections: SECTIONS,
    reference: reference,
    game: {
      title: 'Which ending?',
      lead: function () { return T({ ru: 'Выберите правильную форму слова в предложении. Подсказка покажет падеж, потом род; после ответа — почему именно так.', en: 'Pick the right form of the word in the sentence. The hint shows the case, then the gender; after you answer you see why.', de: 'Wähle die richtige Form des Wortes im Satz. Der Tipp zeigt den Fall, dann das Genus; nach der Antwort siehst du, warum.' }); }
    },
    practice: { label: 'Endings · Which ending? ↗', help: 'Opens the Endings game: pick моему / книгу / в Москве … in real sentences, with hints and explanations.' },
    modes: function () {
      return [
        { id: 'all', label: 'All cases', game: 'case' },
        { id: 'n', label: 'Nom', game: 'case' }, { id: 'g', label: 'Gen', game: 'case' }, { id: 'd', label: 'Dat', game: 'case' },
        { id: 'a', label: 'Acc', game: 'case' }, { id: 'i', label: 'Instr', game: 'case' }, { id: 'p', label: 'Prep', game: 'case' },
        { id: 'gender', label: 'Ending patterns', game: 'gender', solo: true },
        { id: 'x', label: 'Interference', game: 'case', solo: true }
      ].concat(GT.know === 'de' && trapItems().length ? [{ id: 'gt', label: 'Gender traps', game: 'gtrap', solo: true }] : []);
    },
    modeNote: function (m) {
      if (m === 'x') return 'Interference: sentences where ' + GT.LANGS[GT.know].name + ' pushes you towards a wrong form. The note under each answer compares the two languages.';
      if (m === 'gt') return 'Gender traps: Russian nouns whose gender is not the same as in German. Pick он / она / оно.';
      return m === 'gender' ? 'Ending patterns: guess он / она / оно (the gender) from how the noun ends. These words are not part of All cases.'
        : 'All cases covers the six cases (Nom · Gen · Dat · Acc · Instr · Prep). Guessing the gender from the ending is a separate game: Ending patterns.';
    },
    games: { 'case': caseGame, gender: genderGame, gtrap: trapGame },
    check: check
  });
  // console helpers: GT.ruForms.noun('стол', 'p'), GT.ruForms.adj('хор+оший', 'g', 'm'), GT.ruForms.det('мой', 'd', 'f')
  GT.ruForms = { noun: function (k, c) { return show(nounForm(k, c).form); }, adj: function (a, c, g, an) { return show(adjForm(a, c, g, an).form); }, det: function (w, c, g, an) { return show(detForm(w, c, g, an).form); } };
})();
