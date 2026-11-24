/* German definition for the shared "Which form?" engine (js/whichform.js): Articles.
 * Route: #/articles (reference) · #/articles/play (game). German pack only.
 * Data: data/grammar_artikel.js (GT.ARTIKEL). Answers are computed from the tables below,
 * so a sentence only states family + noun + gender + case + reason.
 * Games: 'case' (sentences, filtered by case) and 'end' (gender by ending — a separate mode, never in All cases).
 * GT.artikel stays as a small alias for console checks: GT.artikel.check(), GT.artikel.form(fam, case, gender). */
(function () {
  'use strict';

  var CASES = ['n', 'a', 'd', 'g'];
  var GENDERS = ['m', 'f', 'n', 'pl'];
  var DEF = {
    n: { m: 'der', f: 'die', n: 'das', pl: 'die' },
    a: { m: 'den', f: 'die', n: 'das', pl: 'die' },
    d: { m: 'dem', f: 'der', n: 'dem', pl: 'den' },
    g: { m: 'des', f: 'der', n: 'des', pl: 'der' }
  };
  // der-words copy the ending of der/die/das; ein-words do the same except in three "gaps".
  var END = { der: 'er', die: 'e', das: 'es', den: 'en', dem: 'em', des: 'es' };
  function ending(c, g) { return END[DEF[c][g]]; }
  function einGap(c, g) { return (c === 'n' && (g === 'm' || g === 'n')) || (c === 'a' && g === 'n'); }

  var FAM = {
    der: { type: 'def' },
    dieser: { type: 'dies', stem: 'dies' },
    jeder: { type: 'dies', stem: 'jed', noPl: true },
    welcher: { type: 'dies', stem: 'welch' },
    ein: { type: 'ein', stem: 'ein', noPl: true },
    kein: { type: 'ein', stem: 'kein' },
    mein: { type: 'ein', stem: 'mein' },
    dein: { type: 'ein', stem: 'dein' },
    sein: { type: 'ein', stem: 'sein' },
    ihr: { type: 'ein', stem: 'ihr' },
    unser: { type: 'ein', stem: 'unser' },
    euer: { type: 'ein', stem: 'euer', short: 'eur' }
  };
  function form(fam, c, g) {
    var F = FAM[fam];
    if (!F) return null;
    if (F.type === 'def') return DEF[c][g];
    if (F.noPl && g === 'pl') return null;
    var end = F.type === 'ein' && einGap(c, g) ? '' : ending(c, g);
    return (end && F.short ? F.short : F.stem) + end;
  }
  function options(fam) {
    var seen = {}, out = [];
    CASES.forEach(function (c) { GENDERS.forEach(function (g) { var f = form(fam, c, g); if (f && !seen[f]) { seen[f] = 1; out.push(f); } }); });
    var order = { der: 0, die: 1, das: 2, den: 3, dem: 4, des: 5 };
    return out.sort(function (a, b) {
      if (fam === 'der') return order[a] - order[b];
      return a.length - b.length || a.localeCompare(b);
    });
  }
  function slotsOf(fam, f) {
    var out = [];
    CASES.forEach(function (c) { GENDERS.forEach(function (g) { if (form(fam, c, g) === f) out.push([c, g]); }); });
    return out;
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---------------- texts (known language: ru, otherwise en) ---------------- */
  function ru() { return GT.know === 'ru'; }
  function L(r, e) { return ru() ? r : e; }
  var CASE_NAME = { n: 'Nominativ', a: 'Akkusativ', d: 'Dativ', g: 'Genitiv' };
  var CASE_Q = { n: 'wer? was?', a: 'wen? was?', d: 'wem?', g: 'wessen?' };
  function gName(g) {
    return ru() ? { m: 'мужской род', f: 'женский род', n: 'средний род', pl: 'множественное число' }[g]
      : { m: 'masculine', f: 'feminine', n: 'neuter', pl: 'plural' }[g];
  }
  function gShort(g) { return ru() ? { m: 'м. р.', f: 'ж. р.', n: 'ср. р.', pl: 'мн. ч.' }[g] : { m: 'masc.', f: 'fem.', n: 'neut.', pl: 'plural' }[g]; }
  var PREP = {
    a: ['durch', 'für', 'gegen', 'ohne', 'um'],
    d: ['aus', 'bei', 'mit', 'nach', 'seit', 'von', 'zu', 'gegenüber'],
    g: ['wegen', 'trotz', 'während', 'statt'],
    two: ['an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen']
  };
  function b(s) { return '<b>' + s + '</b>'; }
  function escHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function de(s) { return '<em lang="de">' + s + '</em>'; }

  function reasonHTML(r, c) {
    var cn = b(CASE_NAME[c]);
    if (r === 'subj') return L('Это подлежащее — тот, кто действует (' + de('wer? was?') + ') → ' + cn + '.', 'It is the subject — who or what does the action (' + de('wer? was?') + ') → ' + cn + '.');
    if (r === 'pred') return L('После ' + de('sein / werden / bleiben') + ' (' + de('Das ist …') + ') существительное тоже в ' + cn + '.', 'After ' + de('sein / werden / bleiben') + ' (' + de('Das ist …') + ') the noun is ' + cn + ' too.');
    if (r === 'obj') return L('Прямое дополнение — кого? что? (' + de('wen? was?') + ') → ' + cn + '.', 'Direct object — whom? what? (' + de('wen? was?') + ') → ' + cn + '.');
    if (r === 'esgibt') return L(de('es gibt') + ' всегда с ' + cn + '.', de('es gibt') + ' always takes the ' + cn + '.');
    if (r === 'time') return L('Время без предлога (' + de('jeden Tag, diese Woche') + ') → ' + cn + '.', 'A time phrase without a preposition (' + de('jeden Tag, diese Woche') + ') → ' + cn + '.');
    if (r === 'iobj') return L('Адресат — кому? (' + de('wem?') + ') → ' + cn + '. Сама вещь при этом в Akkusativ: ' + de('Ich gebe dem Kollegen den Schlüssel') + '.', 'The person who receives — to whom? (' + de('wem?') + ') → ' + cn + '. The thing itself is Akkusativ: ' + de('Ich gebe dem Kollegen den Schlüssel') + '.');
    if (r === 'gen') return L('Принадлежность — чей? (' + de('wessen?') + ') → ' + cn + '.', 'Possession — whose? (' + de('wessen?') + ') → ' + cn + '.');
    var m = /^(v|vp|p):(.+)$/.exec(r);
    if (!m) return '';
    if (m[1] === 'v') return L('Глагол ' + de(m[2]) + ' всегда требует ' + cn + ' (как ' + de('helfen, danken, gehören, gefallen, glauben, folgen') + ').', 'The verb ' + de(m[2]) + ' always takes the ' + cn + ' (like ' + de('helfen, danken, gehören, gefallen, glauben, folgen') + ').');
    if (m[1] === 'vp') return L('Устойчивое сочетание ' + de(m[2] + ' + ' + CASE_NAME[c]) + ' — его учат целиком.', 'Fixed verb + preposition: ' + de(m[2] + ' + ' + CASE_NAME[c]) + ' — learn it as one block.');
    var pp = m[2].split('+'), p = pp[0], where = pp[1];
    if (where === 'wo') return L(de(p) + ' — двойной предлог. Здесь место (' + de('wo?') + ') → ' + cn + '.', de(p) + ' is a two-way preposition. Here it is a location (' + de('wo?') + ') → ' + cn + '.');
    if (where === 'wohin') return L(de(p) + ' — двойной предлог. Здесь направление, движение куда-то (' + de('wohin?') + ') → ' + cn + '.', de(p) + ' is a two-way preposition. Here it is a direction (' + de('wohin?') + ') → ' + cn + '.');
    var list = PREP[c] ? PREP[c].join(', ') : '';
    return L(de(p) + ' — предлог только с ' + cn + ' (' + de(list) + ').', de(p) + ' always takes the ' + cn + ' (' + de(list) + ').');
  }

  var GROUP_TEXT = {
    days: ['Дни недели — всегда der.', 'Days of the week are always der.'],
    months: ['Месяцы — всегда der.', 'Months are always der.'],
    seasons: ['Времена года — всегда der.', 'Seasons are always der.'],
    weather: ['Погода и осадки (Regen, Schnee, Wind) — der.', 'Weather words (Regen, Schnee, Wind) are der.'],
    infinitive: ['Глагол как существительное (essen → das Essen) — всегда das.', 'A verb used as a noun (essen → das Essen) is always das.'],
    male: ['Мужчина — der: род по смыслу.', 'A male person is der: gender follows meaning.'],
    female: ['Женщина — die: род по смыслу.', 'A female person is die: gender follows meaning.']
  };
  function patternFor(noun, g) {
    var A = GT.ARTIKEL, low = noun.toLowerCase(), hit = null, miss = null;
    (A.groups || []).forEach(function (gr) { if (!hit && gr.words.indexOf(noun) >= 0 && gr.g === g) hit = { group: gr.key }; });
    if (hit) return hit;
    (A.patterns || []).forEach(function (pt) {
      var cands = [];
      if (pt.p && noun.indexOf(pt.p) === 0 && noun.length > pt.p.length + 2) cands.push({ pre: pt.p, strong: false });
      (pt.s || []).forEach(function (s) {
        if (low.length > s.length + 1 && low.slice(-s.length) === s) cands.push({ suf: s, strong: (pt.strong || []).indexOf(s) >= 0 });
      });
      cands.forEach(function (x) {
        x.g = pt.g; x.mostly = !!pt.mostly;
        var len = (x.suf || x.pre).length;
        if (pt.g === g) { if (!hit || len > hit.len) { x.len = len; hit = x; } }
        else if ((x.strong || x.mostly) && (!miss || len > miss.len)) { x.len = len; miss = x; }
      });
    });
    return hit || (miss ? { miss: miss } : null);
  }
  function patternHTML(noun, g) {
    if (g === 'pl') return '';
    var p = patternFor(noun, g);
    if (!p) return '';
    var art = DEF.n[g];
    if (p.group) return GROUP_TEXT[p.group][ru() ? 0 : 1].replace(/\b(der|die|das)\b(?=[\s.:])/, function (x) { return '<b class="a-' + x + '">' + x + '</b>'; });
    if (p.miss) {
      var mk = p.miss.suf ? '-' + p.miss.suf : p.miss.pre + '-', ma = DEF.n[p.miss.g];
      return L('Осторожно: ' + b(mk) + ' обычно ' + b(ma) + ', но это слово — исключение: ' + de(art + ' ' + noun) + '.', 'Careful: ' + b(mk) + ' is usually ' + b(ma) + ', but this word is an exception: ' + de(art + ' ' + noun) + '.');
    }
    var mark = p.suf ? '-' + p.suf : p.pre + '-';
    var how = p.strong ? L('всегда', 'always') : p.mostly ? L('обычно', 'usually') : L('как правило', 'as a rule');
    return L('Закономерность: ' + b(mark) + ' → ' + how + ' <b class="a-' + art + '">' + art + '</b>.', 'Pattern: ' + b(mark) + ' → ' + how + ' <b class="a-' + art + '">' + art + '</b>.');
  }
  function headHTML(noun, g, head) {
    if (!head || g === 'pl') return '';
    var art = DEF.n[g];
    return L('Сложное слово: род даёт последняя часть — ' + de(art + ' ' + head) + ' → ' + de(art + ' ' + noun) + '.', 'Compound noun: the last part decides — ' + de(art + ' ' + head) + ' → ' + de(art + ' ' + noun) + '.');
  }
  function genderHTML(noun, g) {
    if (g === 'pl') return L(b(noun) + ' — множественное число (' + de('die ' + noun) + '). Во мн. ч. у всех родов одни формы.', b(noun) + ' is plural (' + de('die ' + noun) + '). The plural has one set of forms for all genders.');
    return L(b(noun) + ' — ' + gName(g) + ': ' + de(DEF.n[g] + ' ' + noun) + '.', b(noun) + ' is ' + gName(g) + ': ' + de(DEF.n[g] + ' ' + noun) + '.');
  }
  function formHTML(fam, c, g) {
    var F = FAM[fam], ans = form(fam, c, g), cn = CASE_NAME[c], gn = gShort(g), d = DEF[c][g];
    if (F.type === 'def') return L(cn + ' + ' + gn + ' → ' + b(ans) + '.', cn + ' + ' + gn + ' → ' + b(ans) + '.');
    if (F.type === 'ein' && einGap(c, g)) return L(cn + ' + ' + gn + ': у определённого артикля ' + de(d) + ', но у ' + de('ein / kein / mein …') + ' здесь одна из трёх «дыр» — окончания нет → ' + b(ans) + '.', cn + ' + ' + gn + ': the definite article is ' + de(d) + ', but ' + de('ein / kein / mein …') + ' has one of its three gaps here — no ending → ' + b(ans) + '.');
    return L(cn + ' + ' + gn + ' → ' + de(d) + ' → окончание ' + b('-' + ending(c, g)) + ' → ' + b(ans) + '.', cn + ' + ' + gn + ' → ' + de(d) + ' → ending ' + b('-' + ending(c, g)) + ' → ' + b(ans) + '.');
  }
  function extraHTML(c, g) {
    if (c === 'd' && g === 'pl') return L('В Dativ мн. ч. и существительное получает ' + b('-n') + ': ' + de('Kinder → den Kindern') + '.', 'In the Dativ plural the noun adds ' + b('-n') + ' too: ' + de('Kinder → den Kindern') + '.');
    if (c === 'g' && (g === 'm' || g === 'n')) return L('В Genitiv м. и ср. р. существительное получает ' + b('-(e)s') + ': ' + de('des Vaters, des Hauses') + '.', 'In the Genitiv masculine/neuter the noun adds ' + b('-(e)s') + ': ' + de('des Vaters, des Hauses') + '.');
    if (c === 'a' && g === 'm') return L('Akkusativ меняет только мужской род: ' + de('der → den, ein → einen') + '.', 'The Akkusativ changes only the masculine: ' + de('der → den, ein → einen') + '.');
    if (c === 'a') return L('В Akkusativ ж. р., ср. р. и мн. ч. выглядят так же, как в Nominativ.', 'In the Akkusativ, feminine, neuter and plural look exactly like the Nominativ.');
    return '';
  }
  function wrongHTML(fam, chosen) {
    var sl = slotsOf(fam, chosen.toLowerCase());
    if (!sl.length) return '';
    var where = sl.map(function (x) { return CASE_NAME[x[0]] + ' ' + gShort(x[1]); }).join(' · ');
    return L('Вы выбрали ' + b(escHTML(chosen)) + ' — эта форма подходит для: ' + where, 'You picked ' + b(escHTML(chosen)) + ' — that form is for: ' + where).replace(/\.?$/, '.');
  }

  /* ---------------- tables ---------------- */
  function familyTable(fam, esc) {
    var head = ru() ? ['Падеж', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'] : ['Case', 'Masc.', 'Fem.', 'Neut.', 'Plural'];
    return '<div class="table-wrap"><table class="ag-table"><thead><tr>' + head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      CASES.map(function (c) {
        return '<tr><td>' + CASE_NAME[c] + ' <span class="ag-q">' + CASE_Q[c] + '</span></td>' + GENDERS.map(function (g) {
          var f = form(fam, c, g);
          var gap = FAM[fam].type === 'ein' && einGap(c, g);
          return '<td class="de' + (gap ? ' ag-gap' : '') + '" lang="de">' + (f ? esc(f) : '—') + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }

  /* ---------------- reference page ---------------- */
  function sectionTitle(t, id) { return GT.whichForm.sectionTitle(t, id); }
  // Sections of the reference page (sidebar jump links).
  var SECTIONS = [['der', 'der · die · das'], ['ein', 'ein · mein · kein'], ['dieser', 'dieser · jeder · welcher'], ['poss', 'Possessives'],
    ['forms', 'Form patterns'], ['cases', 'Which case?'], ['gender', 'Gender by ending']];
  function viewReference(api) {
    var esc = api.esc;
    var h = '<header class="page-head"><h1>' + L('Артикли и их формы', 'Articles & their forms') + '</h1><p class="lead">' +
      L('Все формы der / ein / kein / mein / dieser на одной странице, главные закономерности рода и падежа — и игра, где по предложению нужно выбрать правильную форму.',
        'Every form of der / ein / kein / mein / dieser on one page, the main gender and case patterns — and a game where you pick the right form in a real sentence.') +
      '</p></header>';
    h += '<div class="actions-row"><a class="btn primary" href="#/articles/play">' + 'Play · Which form?' + '</a><a class="btn" href="#/grammar/kasus">' + 'Cases lesson' + '</a><a class="btn" href="#/cases">Cases across your languages</a></div>';

    h += sectionTitle(L('Определённый артикль · der / die / das', 'Definite article · der / die / das'), 'der') + familyTable('der', esc);
    h += sectionTitle(L('ein-слова · ein, kein, mein, dein, sein, ihr, unser, euer', 'ein-words · ein, kein, mein, dein, sein, ihr, unser, euer'), 'ein') + familyTable('mein', esc) +
      '<p class="note muted ag-note">' + L('Так же склоняются ' + de('ein, kein, dein, sein, ihr, unser, euer') + ' (у ' + de('ein') + ' нет мн. ч. — там ' + de('keine / meine') + '). ' + de('euer') + ' теряет -e-: ' + de('eure, eurem') + '. Выделены три «дыры» без окончания.',
        'Same endings for ' + de('ein, kein, dein, sein, ihr, unser, euer') + ' (' + de('ein') + ' has no plural — use ' + de('keine / meine') + '). ' + de('euer') + ' drops its -e-: ' + de('eure, eurem') + '. The three endless "gaps" are highlighted.') + '</p>';
    h += sectionTitle(L('der-слова · dieser, jeder, welcher', 'der-words · dieser, jeder, welcher'), 'dieser') + familyTable('dieser', esc) +
      '<p class="note muted ag-note">' + L('Окончание копирует артикль: ' + de('der → dies<b>er</b>, das → dies<b>es</b>, dem → dies<b>em</b>') + '. ' + de('jeder') + ' — только ед. ч.', 'The ending copies the article: ' + de('der → dies<b>er</b>, das → dies<b>es</b>, dem → dies<b>em</b>') + '. ' + de('jeder') + ' is singular only.') + '</p>';

    var poss = [['ich', 'mein'], ['du', 'dein'], ['er / es', 'sein'], ['sie', 'ihr'], ['wir', 'unser'], ['ihr', 'euer'], ['sie / Sie', 'ihr / Ihr']];
    h += sectionTitle(L('Притяжательные: чей?', 'Possessives: whose?'), 'poss') + '<div class="table-wrap"><table><thead><tr><th>' + L('Лицо', 'Person') + '</th><th>' + L('Слово', 'Word') + '</th><th>' + L('Пример', 'Example') + '</th></tr></thead><tbody>' +
      poss.map(function (p) { return '<tr><td class="de" lang="de">' + p[0] + '</td><td class="de" lang="de">' + p[1] + '</td><td class="de" lang="de">' + esc(cap(p[1].split(' / ')[0]) + 'e Tasche · mit ' + (p[1] === 'euer' ? 'eurem' : p[1].split(' / ')[0] + 'em') + ' Auto') + '</td></tr>'; }).join('') + '</tbody></table></div>';

    var rules = ru() ? [
      'Akkusativ меняет <b>только мужской род</b>: ' + de('der → den, ein → einen') + '. Ж. р., ср. р. и мн. ч. в Akkusativ = Nominativ.',
      'Dativ узнаётся по <b>-m</b> (м./ср. р.), <b>-r</b> (ж. р.) и <b>-n</b> (мн. ч. — и у существительного: ' + de('den Kindern') + ').',
      'Genitiv: <b>-s</b> у м./ср. р. (существительное тоже +(e)s: ' + de('des Vaters') + '), <b>-r</b> у ж. р. и мн. ч.',
      'Ж. р. и мн. ч. выглядят одинаково везде, кроме Dativ: ' + de('der Frau / den Kindern') + '.',
      'der-слова (' + de('dieser, jeder, welcher') + ') копируют окончание артикля: ' + de('der → dieser') + '.',
      'ein-слова = то же самое, но в <b>трёх местах без окончания</b>: Nom. м. р., Nom. и Akk. ср. р. (' + de('ein Mann, ein Kind') + ').',
      'Окончания-подсказки: <b>r · e · s · n · m</b> — запомните их, и таблица не нужна.'
    ] : [
      'The Akkusativ changes <b>only the masculine</b>: ' + de('der → den, ein → einen') + '. Feminine, neuter and plural Akkusativ = Nominativ.',
      'Spot the Dativ by <b>-m</b> (masc./neut.), <b>-r</b> (fem.) and <b>-n</b> (plural — the noun too: ' + de('den Kindern') + ').',
      'Genitiv: <b>-s</b> for masc./neut. (the noun adds -(e)s: ' + de('des Vaters') + '), <b>-r</b> for fem. and plural.',
      'Feminine and plural look the same everywhere except the Dativ: ' + de('der Frau / den Kindern') + '.',
      'der-words (' + de('dieser, jeder, welcher') + ') copy the article’s ending: ' + de('der → dieser') + '.',
      'ein-words do the same but have <b>three places without an ending</b>: masc. Nom., neut. Nom. and Akk. (' + de('ein Mann, ein Kind') + ').',
      'The signal endings are <b>r · e · s · n · m</b> — know them and you rarely need the table.'
    ];
    h += sectionTitle(L('Главные закономерности форм', 'Key patterns of the forms'), 'forms') + '<div class="box prose"><ul>' + rules.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul></div>';

    var caseRows = ru() ? [
      ['Nominativ', 'wer? was?', 'подлежащее; после sein / werden', 'Mein Bruder ist Arzt.'],
      ['Akkusativ', 'wen? was?', 'прямое дополнение; es gibt; время (jeden Tag); durch, für, gegen, ohne, um; wohin?', 'Ich suche meinen Schlüssel.'],
      ['Dativ', 'wem?', 'адресат; helfen, danken, gehören, gefallen …; aus, bei, mit, nach, seit, von, zu; wo?', 'Ich helfe meinem Bruder.'],
      ['Genitiv', 'wessen?', 'принадлежность; wegen, trotz, während, statt', 'das Auto meines Vaters']
    ] : [
      ['Nominativ', 'wer? was?', 'subject; after sein / werden', 'Mein Bruder ist Arzt.'],
      ['Akkusativ', 'wen? was?', 'direct object; es gibt; time (jeden Tag); durch, für, gegen, ohne, um; wohin?', 'Ich suche meinen Schlüssel.'],
      ['Dativ', 'wem?', 'recipient; helfen, danken, gehören, gefallen …; aus, bei, mit, nach, seit, von, zu; wo?', 'Ich helfe meinem Bruder.'],
      ['Genitiv', 'wessen?', 'possession; wegen, trotz, während, statt', 'das Auto meines Vaters']
    ];
    h += sectionTitle(L('Какой падеж?', 'Which case?'), 'cases') + '<div class="table-wrap"><table><thead><tr><th>' + L('Падеж', 'Case') + '</th><th>' + L('Вопрос', 'Question') + '</th><th>' + L('Когда', 'When') + '</th><th>' + L('Пример', 'Example') + '</th></tr></thead><tbody>' +
      caseRows.map(function (r) { return '<tr><td>' + r[0] + '</td><td class="de" lang="de">' + r[1] + '</td><td>' + esc(r[2]) + '</td><td class="de" lang="de">' + esc(r[3]) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<p class="note muted ag-note">' + L('Двойные предлоги ' + de(PREP.two.join(', ')) + ': место (' + de('wo?') + ') → Dativ, направление (' + de('wohin?') + ') → Akkusativ.', 'Two-way prepositions ' + de(PREP.two.join(', ')) + ': location (' + de('wo?') + ') → Dativ, direction (' + de('wohin?') + ') → Akkusativ.') + '</p>';

    h += sectionTitle(L('Род по окончанию', 'Gender from the ending'), 'gender') + gendersHTML(esc);
    h += '<div class="actions"><a class="btn primary" href="#/articles/play">Try it yourself →</a></div>';
    return h;
  }
  function gendersHTML(esc) {
    var h = '';
    var cols = { m: [], f: [], n: [] };
    GT.ARTIKEL.patterns.forEach(function (pt) {
      var marks = pt.p ? [pt.p + '-'] : pt.s.map(function (s) { return '-' + s; });
      cols[pt.g].push('<li><span class="ag-sufs">' + marks.map(function (m) { return '<span class="ag-suf">' + m + '</span>'; }).join(' ') + '</span>' + (pt.mostly ? ' <span class="ag-mostly">' + L('обычно', 'mostly') + '</span>' : '') + '<br><span class="ag-ex" lang="de">' + esc(pt.ex) + '</span></li>');
    });
    var meaning = {
      m: L('Мужчины, дни, месяцы, времена года, погода', 'Male persons, days, months, seasons, weather'),
      f: L('Женщины (-in), большинство слов на -e', 'Female persons (-in), most nouns in -e'),
      n: L('Глагол как существительное (das Essen), -chen/-lein, металлы, цвета', 'Verbs as nouns (das Essen), -chen/-lein, metals, colours')
    };
    h += '<div class="ag-genders">' + ['m', 'f', 'n'].map(function (g) {
      var art = DEF.n[g];
      return '<div class="box ag-gcol"><h4 class="a-' + art + '" lang="de">' + art + '</h4><ul>' + cols[g].join('') + '</ul><p class="note muted">' + esc(meaning[g]) + '</p></div>';
    }).join('') + '</div>' +
      '<div class="box prose ag-tip"><p>' + L('<b>Сложные слова:</b> род даёт последняя часть — ' + de('das Haus + die Tür → die Haustür') + ', ' + de('die Hand + der Schuh → der Handschuh') + '.', '<b>Compounds:</b> the last part decides — ' + de('das Haus + die Tür → die Haustür') + ', ' + de('die Hand + der Schuh → der Handschuh') + '.') +
      '</p><p>' + L('Исключения есть, но редкие — правила выше покрывают большинство слов. Для остальных учите существительное сразу с артиклем.', 'There are exceptions, but they are rare — the rules above cover most words. For the rest, learn every noun together with its article.') + '</p></div>';

    return h;
  }

  /* ---------------- games ---------------- */
  function sentTask(s) { return { text: s[0], fam: s[1], noun: s[2], g: s[3], c: s[4], r: s[5], head: s[6] }; }
  function startCap(s) { return /^___/.test(s.text); }
  function caseAnswer(s) { var a = form(s.fam, s.c, s.g); return startCap(s) ? cap(a) : a; }
  function explainHTML(s, chosen) {
    var lines = [reasonHTML(s.r, s.c), genderHTML(s.noun, s.g), headHTML(s.noun, s.g, s.head), patternHTML(s.noun, s.g), formHTML(s.fam, s.c, s.g), extraHTML(s.c, s.g)];
    if (chosen && chosen !== caseAnswer(s)) lines.unshift(wrongHTML(s.fam, chosen));
    return '<ul class="ag-why">' + lines.filter(Boolean).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }
  var caseGame = {
    items: function () { return GT.ARTIKEL.sentences; },
    match: function (s, mode) { return mode === 'x' ? GT.whichForm.isTrap('de', sentTask(s)) : mode === 'all' || s[4] === mode; },
    task: sentTask,
    answer: caseAnswer,
    options: function (s) { return options(s.fam).map(function (o) { return startCap(s) ? cap(o) : o; }); },
    kind: function (s) { return 'Pick the form · ' + (s.fam === 'der' ? 'der / die / das' : s.fam); },
    question: function (s, ctx) { return ctx.esc(s.text).replace('___', ctx.blank); },
    hintLabels: ['Hint · case', 'More hint · gender'],
    hint: function (s, level, esc) {
      var parts = ['<b>' + CASE_NAME[s.c] + '</b> <span class="ag-q">' + CASE_Q[s.c] + '</span>'];
      if (level >= 2) parts.push(s.g === 'pl' ? '<b>plural</b>' : de(DEF.n[s.g] + ' ' + esc(s.noun)));
      return parts.join(' · ');
    },
    explain: explainHTML,
    forms: {
      show: 'All forms', hide: 'Hide forms',
      html: function (s, esc) {
        var h = '<h3 class="section-title">' + esc(s.fam === 'der' ? 'der / die / das' : s.fam + ' · all forms') + '</h3>' + familyTable(s.fam, esc);
        if (s.fam !== 'der') h += '<h3 class="section-title">Compare · der / die / das</h3>' + familyTable('der', esc);
        return h;
      }
    },
    next: 'Next sentence →'
  };

  /* ---- gender-by-ending mode ---- */
  var GROUP_HINT = {
    days: ['день недели', 'a day of the week'], months: ['месяц', 'a month'], seasons: ['время года', 'a season'],
    weather: ['погода', 'weather'], infinitive: ['глагол, ставший существительным', 'a verb used as a noun'],
    male: ['мужчина', 'a male person'], female: ['женщина', 'a female person']
  };
  function markOf(noun, g) {
    var p = patternFor(noun, g);
    if (!p || p.miss) return null;
    if (p.group) return { group: p.group };
    return p.suf ? { suf: p.suf, label: '-' + p.suf } : { pre: p.pre, label: p.pre + '-' };
  }
  function nounMarked(noun, g, esc) {
    var m = markOf(noun, g);
    if (m && m.suf) return esc(noun.slice(0, -m.suf.length)) + '<u class="ag-end">' + esc(noun.slice(-m.suf.length)) + '</u>';
    if (m && m.pre) return '<u class="ag-end">' + esc(noun.slice(0, m.pre.length)) + '</u>' + esc(noun.slice(m.pre.length));
    return esc(noun);
  }
  function similar(noun, g) {
    var m = markOf(noun, g), out = [];
    if (!m) return out;
    GT.ARTIKEL.endings.forEach(function (e) {
      if (e[0] === noun || e[1] !== g || out.length >= 3) return;
      var m2 = markOf(e[0], e[1]);
      if (m2 && (m.group ? m2.group === m.group : m2.label === m.label)) out.push(e[0]);
    });
    return out;
  }
  function endExplainHTML(s, chosen) {
    var lines = [], m = markOf(s.noun, s.g), art = DEF.n[s.g];
    if (chosen && chosen !== art) lines.push(L('Вы выбрали ' + b(escHTML(chosen)) + ' — это ' + gName({ der: 'm', die: 'f', das: 'n' }[chosen]) + '.', 'You picked ' + b(escHTML(chosen)) + ' — that is for ' + gName({ der: 'm', die: 'f', das: 'n' }[chosen]) + ' nouns.'));
    lines.push(genderHTML(s.noun, s.g));
    lines.push(patternHTML(s.noun, s.g));
    var sim = similar(s.noun, s.g);
    if (sim.length) lines.push(L('Так же: ', 'Same pattern: ') + de(sim.map(function (x) { return art + ' ' + x; }).join(', ')) + '.');
    var pt = m && (m.suf || m.pre) ? GT.ARTIKEL.patterns.filter(function (p) { return p.g === s.g && ((p.s || []).indexOf(m.suf) >= 0 || p.p === m.pre); })[0] : null;
    if (pt && pt.mostly) lines.push(L('У этого правила есть исключения, но их немного.', 'This rule has some exceptions, but not many.'));
    return '<ul class="ag-why">' + lines.filter(Boolean).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }
  var endGame = {
    items: function () { return GT.ARTIKEL.endings; },
    task: function (e) { return { end: true, noun: e[0], g: e[1] }; },
    answer: function (s) { return DEF.n[s.g]; },
    options: function () { return ['der', 'die', 'das']; },
    optClass: function (o) { return 'opt-' + o; },
    kind: function () { return 'Pick the article · by the ending'; },
    qClass: 'ag-end-q',
    question: function (s, ctx) { return ctx.blank + ' ' + (ctx.revealed || ctx.hint ? nounMarked(s.noun, s.g, ctx.esc) : ctx.esc(s.noun)); },
    hintLabels: ['Hint · ending'],
    hint: function (s, level, esc) {
      var m = markOf(s.noun, s.g), parts = [];
      parts.push(m && m.group ? b(GROUP_HINT[m.group][ru() ? 0 : 1]) + ' → ' + b(DEF.n[s.g])
        : patternHTML(s.noun, s.g));
      var sim = similar(s.noun, s.g);
      if (sim.length) parts.push(L('так же: ', 'same as: ') + de(sim.map(esc).join(', ')));
      return parts.join(' · ');
    },
    verdict: function (s, ans, esc) { return ans + ' ' + esc(s.noun); },
    explain: endExplainHTML,
    forms: { show: 'Patterns', hide: 'Hide patterns', html: function (s, esc) { return '<h3 class="section-title">Ending patterns</h3>' + gendersHTML(esc); } },
    keys: 'patterns',
    next: 'Next word →'
  };

  /* ---- gender traps (I know Russian): German nouns whose gender differs from Russian ---- */
  var RG = { m: 'мужской', f: 'женский', n: 'средний' };
  function trapItems() { return (GT.FORMS_CROSS && GT.FORMS_CROSS.genderTraps) || []; }
  var trapGame = {
    items: trapItems,
    task: function (x) { return { noun: x[1], g: { der: 'm', die: 'f', das: 'n' }[x[0]], ru: x[2], rg: x[3] }; },
    answer: function (s) { return DEF.n[s.g]; },
    options: function () { return ['der', 'die', 'das']; },
    optClass: function (o) { return 'opt-' + o; },
    kind: function () { return 'Pick the article · not like in Russian'; },
    qClass: 'ag-end-q',
    question: function (s, ctx) { return ctx.blank + ' ' + ctx.esc(s.noun) + ' <span class="ag-q" lang="ru">' + ctx.esc(GT.whichForm.stressMarks(s.ru)) + '</span>'; },
    hintLabels: ['Hint · Russian gender', 'More hint · German rule'],
    hint: function (s, level) {
      var parts = [L('по-русски ' + RG[s.rg] + ' род — в немецком он другой', 'in Russian it is ' + gName(s.rg) + ' — German is different')];
      if (level >= 2) parts.push(patternHTML(s.noun, s.g) || L('правила нет — учите с артиклем', 'no rule — learn it with the article'));
      return parts.join(' · ');
    },
    verdict: function (s, ans, esc) { return ans + ' ' + esc(s.noun); },
    explain: function (s, chosen) {
      var lines = [];
      if (chosen && chosen !== DEF.n[s.g]) lines.push(chosen === DEF.n[s.rg] ? L('Вы выбрали ' + b(escHTML(chosen)) + ' — так было бы по русскому роду.', 'You picked ' + b(escHTML(chosen)) + ' — that is the Russian gender.') : L('Вы выбрали ' + b(escHTML(chosen)) + '.', 'You picked ' + b(escHTML(chosen)) + '.'));
      lines.push(genderHTML(s.noun, s.g));
      lines.push(L('По-русски ' + GT.whichForm.stressMarks(s.ru) + ' — ' + RG[s.rg] + ' род, по-немецки ' + de(DEF.n[s.g] + ' ' + s.noun) + '. Род из языка в язык не переносится.', 'In Russian ' + GT.whichForm.stressMarks(s.ru) + ' is ' + gName(s.rg) + '; in German it is ' + de(DEF.n[s.g] + ' ' + s.noun) + '. Gender does not carry over.'));
      lines.push(patternHTML(s.noun, s.g));
      return '<ul class="ag-why">' + lines.filter(Boolean).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    },
    next: 'Next word →'
  };

  function check() {
    var bad = GT.ARTIKEL.endings.filter(function (e) { return !markOf(e[0], e[1]); }).map(function (e) { return 'ending: ' + e[0]; });
    var seen = {};
    GT.ARTIKEL.endings.forEach(function (e) { if (seen[e[0]]) bad.push('dup ending: ' + e[0]); seen[e[0]] = 1; });
    seen = {};
    GT.ARTIKEL.sentences.forEach(function (s) { if (seen[s[0]]) bad.push('dup sentence: ' + s[0]); seen[s[0]] = 1; });
    return bad.concat(GT.ARTIKEL.sentences.map(function (s, i) {
      var ok = FAM[s[1]] && form(s[1], s[4], s[3]) && (s[0].match(/___/g) || []).length === 1 && CASES.indexOf(s[4]) >= 0;
      var r = s[5], want = { subj: 'n', pred: 'n', obj: 'a', esgibt: 'a', time: 'a', iobj: 'd', gen: 'g' }[r];
      var m = /^p:([^+]+)(?:\+(wo|wohin))?$/.exec(r);
      if (/^v:/.test(r)) want = 'd';
      else if (m && m[2]) want = m[2] === 'wo' ? 'd' : 'a';
      else if (m) want = ['a', 'd', 'g'].filter(function (c) { return PREP[c].indexOf(m[1]) >= 0; })[0] || '?';
      if (want && want !== s[4]) ok = false;
      return ok ? null : i + ': ' + s[0];
    }).filter(Boolean));
  }

  GT.whichForm.define('de', {
    route: 'articles',
    label: 'Articles',
    ready: function () { return !!GT.ARTIKEL; },
    sections: SECTIONS,
    reference: viewReference,
    game: {
      title: 'Which form?',
      lead: function () { return L('Вставьте правильную форму артикля или притяжательного слова. Подсказка покажет падеж, а после ответа — почему именно так.', 'Fill in the right form of the article or possessive. The hint shows the case; after you answer you see why.'); }
    },
    practice: { label: 'Articles · Which form? ↗', help: 'Opens the Articles game: pick der / den / meinem … in real sentences, with hints and explanations.' },
    modes: function () {
      return [
        { id: 'all', label: 'All cases', game: 'case' },
        { id: 'n', label: 'Nominativ', game: 'case' },
        { id: 'a', label: 'Akkusativ', game: 'case' },
        { id: 'd', label: 'Dativ', game: 'case' },
        { id: 'g', label: 'Genitiv', game: 'case' },
        { id: 'end', label: 'Ending patterns', game: 'end', solo: true },
        { id: 'x', label: 'Interference', game: 'case', solo: true }
      ].concat(GT.know === 'ru' && trapItems().length ? [{ id: 'gt', label: 'Gender traps', game: 'gtrap', solo: true }] : []);
    },
    modeNote: function (m) {
      if (m === 'x') return 'Interference: sentences where ' + GT.LANGS[GT.know].name + ' pushes you towards a wrong form. The note under each answer compares the two languages.';
      if (m === 'gt') return 'Gender traps: German nouns whose gender is not the same as in Russian. Pick der / die / das.';
      return m === 'end' ? 'Ending patterns: guess der / die / das from how the noun ends. These words are not part of All cases.'
        : 'All cases covers the four cases. Guessing the gender from a noun’s ending is a separate game: Ending patterns.';
    },
    games: { 'case': caseGame, end: endGame, gtrap: trapGame },
    check: check
  });

  GT.artikel = { sections: SECTIONS, check: check, form: form };
})();
