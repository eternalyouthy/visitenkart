/* English definition for the shared "Which form?" engine (js/whichform.js): Articles a / an / the / — (zero).
 * Route: #/articles (reference) · #/articles/play (game). English pack only.
 * Data: data/en/grammar_articles.js (GT.EN_ARTICLES). a vs an and capitals are computed, never typed by hand.
 * Games: 'art' (sentences, filtered by topic) and 'aan' (a or an by SOUND — a separate mode, never in All).
 * Texts (hints, explanations, reference) follow the "I know" language: ru / en / de. */
(function () {
  'use strict';

  function T(o) { return GT.whichForm.tx(o); }
  function b(s) { return '<b>' + s + '</b>'; }
  function escHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function en(s) { return '<em lang="en">' + s + '</em>'; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function D() { return GT.EN_ARTICLES; }

  /* ---------------- sound: a or an ---------------- */
  var RISKY = /^(uni|use|usu|eu|one|once|hour|hon|heir|x-)/i;
  function firstWord(s) { return String(s).split(/\s+/)[0].replace(/[^\w'-]+$/, ''); }
  function soundInfo(word) {
    var w = firstWord(word), S = D().sounds, hit = S[w] || S[w.toLowerCase()];
    if (hit) return { v: hit[0] === 'v', ipa: hit[1], listed: true, word: w };
    return { v: /^[aeiou]/i.test(w), listed: false, word: w };
  }
  function aOrAn(word) { return soundInfo(word).v ? 'an' : 'a'; }
  function nextWord(text) { var m = /___\s+([^\s]+)/.exec(text); return m ? firstWord(m[1]) : ''; }

  /* ---------------- reasons ---------------- */
  var R = {
    first: { art: 'a', group: 'mention',
      hint: { ru: 'упоминается впервые — один из многих', en: 'first mention — one of many', de: 'zum ersten Mal erwähnt — einer von vielen' },
      text: { ru: 'Предмет упоминается впервые: собеседник ещё не знает, какой именно, — это просто один из многих → ' + b('a / an') + '.',
        en: 'First mention: the listener doesn’t know which one yet — it is just one of many → ' + b('a / an') + '.',
        de: 'Zum ersten Mal erwähnt: Der Hörer weiß noch nicht, welcher — einfach einer von vielen → ' + b('a / an') + '.' } },
    one: { art: 'a', group: 'mention',
      hint: { ru: 'значит «один»', en: 'means “one”', de: 'bedeutet „ein(s)“' },
      text: { ru: b('a / an') + ' здесь значит «один»: ' + en('an hour, a hundred, a minute') + '.',
        en: b('a / an') + ' means “one” here: ' + en('an hour, a hundred, a minute') + '.',
        de: b('a / an') + ' bedeutet hier „ein(s)“: ' + en('an hour, a hundred, a minute') + '.' } },
    job: { art: 'a', group: 'mention',
      hint: { ru: 'профессия, роль', en: 'a job or role', de: 'Beruf oder Rolle' },
      text: { ru: 'Профессия или роль после ' + en('be') + ' / ' + en('work as') + ' — в английском обязательно ' + b('a / an') + ': ' + en('He is a teacher. She works as a nurse.'),
        en: 'A job or role after ' + en('be') + ' / ' + en('work as') + ' always takes ' + b('a / an') + ': ' + en('He is a teacher. She works as a nurse.'),
        de: 'Beruf oder Rolle nach ' + en('be') + ' / ' + en('work as') + ' braucht im Englischen immer ' + b('a / an') + ': ' + en('He is a teacher. She works as a nurse.') } },
    'class': { art: 'a', group: 'mention',
      hint: { ru: 'говорим, что это за предмет', en: 'says what kind of thing it is', de: 'sagt, was für ein Ding es ist' },
      text: { ru: 'Мы говорим, что это за предмет, к какому виду он относится (часто с прилагательным): ' + en('It’s a good idea. This is an old house.') + ' → ' + b('a / an') + '.',
        en: 'It says what kind of thing something is (often with an adjective): ' + en('It’s a good idea. This is an old house.') + ' → ' + b('a / an') + '.',
        de: 'Es sagt, was für ein Ding etwas ist (oft mit Adjektiv): ' + en('It’s a good idea. This is an old house.') + ' → ' + b('a / an') + '.' } },
    rate: { art: 'a', group: 'fixed',
      hint: { ru: 'значит «в / за каждый»', en: 'means “per”', de: 'bedeutet „pro“' },
      text: { ru: b('a / an') + ' = «в / за каждый»: ' + en('three times a week, 50 km an hour, two euros a kilo') + '.',
        en: b('a / an') + ' = “per”: ' + en('three times a week, 50 km an hour, two euros a kilo') + '.',
        de: b('a / an') + ' = „pro“: ' + en('three times a week, 50 km an hour, two euros a kilo') + '.' } },
    whata: { art: 'a', group: 'fixed',
      hint: { ru: 'восклицание What …!', en: 'an exclamation: What …!', de: 'Ausruf: What …!' },
      text: { ru: 'Восклицание ' + en('What …!') + ': с исчисляемым в ед. ч. — ' + en('What a beautiful day!') + ', с неисчисляемым и мн. ч. — без артикля: ' + en('What terrible weather! What nice people!'),
        en: 'The exclamation ' + en('What …!') + ': a countable singular noun takes a / an — ' + en('What a beautiful day!') + '; uncountable and plural nouns take none: ' + en('What terrible weather! What nice people!'),
        de: 'Der Ausruf ' + en('What …!') + ': zählbar im Singular mit a / an — ' + en('What a beautiful day!') + '; nicht zählbar und Plural ohne Artikel: ' + en('What terrible weather! What nice people!') } },
    known: { art: 'the', group: 'mention',
      hint: { ru: 'уже упоминался — оба знают какой', en: 'already mentioned — both know which', de: 'schon erwähnt — beide wissen, welcher' },
      text: { ru: 'Предмет уже упоминался (сначала ' + en('a jacket') + ', потом ' + en('the jacket') + ') — теперь оба знают, о каком речь → ' + b('the') + '.',
        en: 'It was mentioned before (first ' + en('a jacket') + ', then ' + en('the jacket') + ') — now both people know which one → ' + b('the') + '.',
        de: 'Es wurde schon erwähnt (erst ' + en('a jacket') + ', dann ' + en('the jacket') + ') — jetzt wissen beide, welcher gemeint ist → ' + b('the') + '.' } },
    defined: { art: 'the', group: 'mention',
      hint: { ru: 'слова после существительного уточняют, какой именно', en: 'the words after the noun say which one', de: 'die Wörter nach dem Nomen sagen, welcher' },
      text: { ru: 'Слова после существительного точно говорят, какой именно (' + en('the woman in the red coat, the capital of France, the keys that you gave me') + ') → ' + b('the') + '.',
        en: 'The words after the noun say exactly which one (' + en('the woman in the red coat, the capital of France, the keys that you gave me') + ') → ' + b('the') + '.',
        de: 'Die Wörter nach dem Nomen sagen genau, welcher (' + en('the woman in the red coat, the capital of France, the keys that you gave me') + ') → ' + b('the') + '.' } },
    situation: { art: 'the', group: 'mention',
      hint: { ru: 'ясно из ситуации — тот, что здесь', en: 'clear from the situation — the one here', de: 'aus der Situation klar — der hier' },
      text: { ru: 'Из ситуации ясно, какой именно: окно в этой комнате, соль на этом столе → ' + b('the') + ' (' + en('Close the window. Pass the salt.') + ').',
        en: 'The situation makes it clear which one: the window in this room, the salt on this table → ' + b('the') + ' (' + en('Close the window. Pass the salt.') + ').',
        de: 'Aus der Situation ist klar, welcher: das Fenster in diesem Raum, das Salz auf diesem Tisch → ' + b('the') + ' (' + en('Close the window. Pass the salt.') + ').' } },
    unique: { art: 'the', group: 'general',
      hint: { ru: 'он такой один', en: 'there is only one', de: 'es gibt nur einen' },
      text: { ru: 'Такой предмет один на всех: ' + en('the sun, the moon, the sky, the world, the internet') + ' → ' + b('the') + '.',
        en: 'There is only one of it for everybody: ' + en('the sun, the moon, the sky, the world, the internet') + ' → ' + b('the') + '.',
        de: 'Davon gibt es nur einen für alle: ' + en('the sun, the moon, the sky, the world, the internet') + ' → ' + b('the') + '.' } },
    super: { art: 'the', group: 'general',
      hint: { ru: 'превосходная степень, first, same, only', en: 'superlative, first, same, only', de: 'Superlativ, first, same, only' },
      text: { ru: 'Превосходная степень и слова ' + en('first, last, same, only') + ' выделяют один-единственный предмет → ' + b('the') + ': ' + en('the best, the first, the same, the only') + '.',
        en: 'Superlatives and ' + en('first, last, same, only') + ' pick out exactly one → ' + b('the') + ': ' + en('the best, the first, the same, the only') + '.',
        de: 'Superlativ und ' + en('first, last, same, only') + ' heben genau einen hervor → ' + b('the') + ': ' + en('the best, the first, the same, the only') + '.' } },
    geo: { art: 'the', group: 'names',
      hint: { ru: 'реки, моря, океаны, горные цепи, страны-«союзы»', en: 'rivers, seas, oceans, mountain ranges, “union” countries', de: 'Flüsse, Meere, Ozeane, Gebirge, „Union“-Länder' },
      text: { ru: b('the') + ' у рек, морей, океанов, горных цепей и пустынь (' + en('the Thames, the Mediterranean, the Atlantic, the Alps, the Sahara') + ') и у стран во мн. ч. или со словами ' + en('States, Kingdom, Republic') + ' (' + en('the USA, the UK, the Netherlands') + '). Города и большинство стран — без артикля.',
        en: b('the') + ' with rivers, seas, oceans, mountain ranges and deserts (' + en('the Thames, the Mediterranean, the Atlantic, the Alps, the Sahara') + ') and with plural country names or names with ' + en('States, Kingdom, Republic') + ' (' + en('the USA, the UK, the Netherlands') + '). Cities and most countries take no article.',
        de: b('the') + ' bei Flüssen, Meeren, Ozeanen, Gebirgen und Wüsten (' + en('the Thames, the Mediterranean, the Atlantic, the Alps, the Sahara') + ') und bei Ländernamen im Plural oder mit ' + en('States, Kingdom, Republic') + ' (' + en('the USA, the UK, the Netherlands') + '). Städte und die meisten Länder ohne Artikel.' } },
    fixedthe: { art: 'the', group: 'fixed',
      hint: { ru: 'устойчивое выражение с the', en: 'a fixed phrase with the', de: 'feste Wendung mit the' },
      text: { ru: 'Устойчивое выражение с ' + b('the') + ': ' + en('in the morning, in the evening, go to the cinema, on the right') + '. Его учат целиком.',
        en: 'A fixed phrase with ' + b('the') + ': ' + en('in the morning, in the evening, go to the cinema, on the right') + '. Learn it as one block.',
        de: 'Feste Wendung mit ' + b('the') + ': ' + en('in the morning, in the evening, go to the cinema, on the right') + '. Als Ganzes lernen.' } },
    instrument: { art: 'the', group: 'fixed',
      hint: { ru: 'play + музыкальный инструмент', en: 'play + musical instrument', de: 'play + Musikinstrument' },
      text: { ru: 'play + музыкальный инструмент → ' + b('the') + ': ' + en('play the piano, play the guitar') + '. Но спорт и игры без артикля: ' + en('play football, play chess') + '.',
        en: 'play + a musical instrument → ' + b('the') + ': ' + en('play the piano, play the guitar') + '. But sports and games take none: ' + en('play football, play chess') + '.',
        de: 'play + Musikinstrument → ' + b('the') + ': ' + en('play the piano, play the guitar') + '. Aber Sport und Spiele ohne Artikel: ' + en('play football, play chess') + '.' } },
    general: { art: '0', group: 'general',
      hint: { ru: 'вообще, в целом / неопределённое количество', en: 'in general / an unspecified amount', de: 'allgemein / unbestimmte Menge' },
      text: { ru: 'Множественное число или неисчисляемое существительное в общем смысле (' + en('Dogs are loyal. I love music.') + ') или неопределённое количество (' + en('We need more information.') + ') → ' + b('без артикля') + '.',
        en: 'A plural or uncountable noun in general (' + en('Dogs are loyal. I love music.') + ') or an unspecified amount (' + en('We need more information.') + ') → ' + b('no article') + '.',
        de: 'Plural oder nicht zählbares Nomen im allgemeinen Sinn (' + en('Dogs are loyal. I love music.') + ') oder eine unbestimmte Menge (' + en('We need more information.') + ') → ' + b('kein Artikel') + '.' } },
    names: { art: '0', group: 'names',
      hint: { ru: 'имя, город, страна, улица, озеро, гора', en: 'a person, city, country, street, lake, mountain', de: 'Person, Stadt, Land, Straße, See, Berg' },
      text: { ru: 'Имена людей, города, большинство стран, континенты, улицы, отдельные озёра и горы → ' + b('без артикля') + ': ' + en('Anna, London, Germany, Asia, Oxford Street, Lake Geneva, Mount Everest') + '.',
        en: 'Names of people, cities, most countries, continents, streets, single lakes and mountains → ' + b('no article') + ': ' + en('Anna, London, Germany, Asia, Oxford Street, Lake Geneva, Mount Everest') + '.',
        de: 'Namen von Personen, Städten, den meisten Ländern, Kontinenten, Straßen, einzelnen Seen und Bergen → ' + b('kein Artikel') + ': ' + en('Anna, London, Germany, Asia, Oxford Street, Lake Geneva, Mount Everest') + '.' } },
    fixed: { art: '0', group: 'fixed',
      hint: { ru: 'устойчивое выражение без артикля', en: 'a fixed phrase without an article', de: 'feste Wendung ohne Artikel' },
      text: { ru: 'Устойчивое выражение без артикля: место по его назначению или способ — ' + en('at school, go to bed, at home, go to work, by bus, at night, in prison') + '.',
        en: 'A fixed phrase without an article: a place used for its purpose, or a means of travel — ' + en('at school, go to bed, at home, go to work, by bus, at night, in prison') + '.',
        de: 'Feste Wendung ohne Artikel: ein Ort in seiner Funktion oder ein Verkehrsmittel — ' + en('at school, go to bed, at home, go to work, by bus, at night, in prison') + '.' } },
    meals: { art: '0', group: 'fixed',
      hint: { ru: 'приём пищи', en: 'a meal', de: 'eine Mahlzeit' },
      text: { ru: 'Приёмы пищи — без артикля: ' + en('have breakfast, for lunch, Dinner is ready.'),
        en: 'Meals take no article: ' + en('have breakfast, for lunch, Dinner is ready.'),
        de: 'Mahlzeiten ohne Artikel: ' + en('have breakfast, for lunch, Dinner is ready.') } },
    langsub: { art: '0', group: 'fixed',
      hint: { ru: 'язык, предмет, спорт, игра', en: 'a language, subject, sport or game', de: 'Sprache, Fach, Sport oder Spiel' },
      text: { ru: 'Языки, школьные предметы, виды спорта и игры — без артикля: ' + en('speak French, study history, play football, play chess') + '.',
        en: 'Languages, school subjects, sports and games take no article: ' + en('speak French, study history, play football, play chess') + '.',
        de: 'Sprachen, Schulfächer, Sportarten und Spiele ohne Artikel: ' + en('speak French, study history, play football, play chess') + '.' } },
    days: { art: '0', group: 'fixed',
      hint: { ru: 'день недели, месяц, год', en: 'a day, month or year', de: 'Wochentag, Monat oder Jahr' },
      text: { ru: 'Дни недели, месяцы и годы — без артикля: ' + en('on Monday, in May, in 1995') + '.',
        en: 'Days, months and years take no article: ' + en('on Monday, in May, in 1995') + '.',
        de: 'Wochentage, Monate und Jahre ohne Artikel: ' + en('on Monday, in May, in 1995') + '.' } },
    next: { art: '0', group: 'fixed',
      hint: { ru: 'next / last + время', en: 'next / last + time', de: 'next / last + Zeit' },
      text: { ru: en('next / last') + ' + время, считая от сегодня, — без артикля и без предлога: ' + en('next month, last year') + '.',
        en: en('next / last') + ' + a time counted from now takes no article and no preposition: ' + en('next month, last year') + '.',
        de: en('next / last') + ' + Zeitangabe ab heute: kein Artikel, keine Präposition: ' + en('next month, last year') + '.' } }
  };
  var COUNT = {
    c: { ru: 'исчисляемое, ед. ч.', en: 'countable, singular', de: 'zählbar, Singular' },
    u: { ru: 'неисчисляемое', en: 'uncountable', de: 'nicht zählbar' },
    pl: { ru: 'множественное число', en: 'plural', de: 'Plural' },
    name: { ru: 'имя собственное / название', en: 'a name', de: 'ein Name' }
  };
  var GROUPS = [['mention', 'First or known'], ['general', 'General or specific'], ['names', 'Names & places'], ['fixed', 'Fixed phrases']];

  /* ---------------- tasks ---------------- */
  function task(s) { return { text: s[0], art: s[1], noun: s[2], count: s[3], r: s[4] }; }
  function startCap(s) { return /^___/.test(s.text); }
  function answer(s) {
    var a = s.art === '0' ? '—' : s.art === 'a' ? aOrAn(nextWord(s.text)) : 'the';
    return startCap(s) ? cap(a) : a;
  }
  function options(s) { return ['a', 'an', 'the', '—'].map(function (o) { return startCap(s) ? cap(o) : o; }); }

  function countHTML(s) {
    var n = b(s.noun);
    if (s.count === 'c') return T({ ru: n + ' — исчисляемое в ед. ч.: одно оно не стоит, ему нужен артикль (a / an, the) или слово вроде my, this.',
      en: n + ' is countable and singular: it can’t stand alone — it needs an article (a / an, the) or a word like my, this.',
      de: n + ' ist zählbar und Singular: Es steht nie allein — es braucht einen Artikel (a / an, the) oder ein Wort wie my, this.' });
    if (s.count === 'u') return T({ ru: n + ' — неисчисляемое: с ним не бывает ' + en('a / an') + ' и мн. ч.',
      en: n + ' is uncountable: it never takes ' + en('a / an') + ' and has no plural.',
      de: n + ' ist nicht zählbar: nie mit ' + en('a / an') + ', kein Plural.' });
    if (s.count === 'pl') return T({ ru: n + ' — множественное число: ' + en('a / an') + ' невозможен, выбор между ' + en('the') + ' и отсутствием артикля.',
      en: n + ' is plural: ' + en('a / an') + ' is impossible — the choice is between ' + en('the') + ' and no article.',
      de: n + ' ist Plural: ' + en('a / an') + ' geht nicht — die Wahl ist ' + en('the') + ' oder kein Artikel.' });
    return T({ ru: n + ' — имя собственное или название.', en: n + ' is a name.', de: n + ' ist ein Name.' });
  }
  function soundHTML(word) {
    var si = soundInfo(word), w = en(si.word), art = si.v ? 'an' : 'a';
    if (si.listed && si.v !== /^[aeiou]/i.test(si.word)) return T({
      ru: b(art) + ', потому что важен звук, а не буква: ' + w + ' начинается со звука ' + si.ipa + (si.v ? ' (гласный)' : ' (согласный)') + '.',
      en: b(art) + ' because the sound counts, not the letter: ' + w + ' starts with ' + si.ipa + (si.v ? ' (a vowel sound)' : ' (a consonant sound)') + '.',
      de: b(art) + ', weil der Laut zählt, nicht der Buchstabe: ' + w + ' beginnt mit ' + si.ipa + (si.v ? ' (Vokal)' : ' (Konsonant)') + '.' });
    return T({
      ru: b(art) + ': ' + w + ' начинается с ' + (si.v ? 'гласного' : 'согласного') + ' звука. ' + en('an') + ' — перед гласным звуком, ' + en('a') + ' — перед согласным.',
      en: b(art) + ': ' + w + ' starts with a ' + (si.v ? 'vowel' : 'consonant') + ' sound. ' + en('an') + ' goes before a vowel sound, ' + en('a') + ' before a consonant sound.',
      de: b(art) + ': ' + w + ' beginnt mit einem ' + (si.v ? 'Vokal' : 'Konsonanten') + '. ' + en('an') + ' steht vor einem Vokallaut, ' + en('a') + ' vor einem Konsonantenlaut.' });
  }
  function wrongHTML(s, chosen) {
    var c = chosen.toLowerCase(), ans = answer(s).toLowerCase();
    if ((c === 'a' || c === 'an') && (ans === 'a' || ans === 'an')) return T({
      ru: 'Артикль неопределённый — верно, но ' + en('a') + ' или ' + en('an') + ' решает первый звук следующего слова.',
      en: 'Indefinite is right, but ' + en('a') + ' or ' + en('an') + ' depends on the first sound of the next word.',
      de: 'Unbestimmt ist richtig, aber ob ' + en('a') + ' oder ' + en('an') + ', entscheidet der erste Laut des nächsten Wortes.' });
    if ((c === 'a' || c === 'an') && (s.count === 'u' || s.count === 'pl')) return T({
      ru: en('a / an') + ' бывает только с исчисляемым в ед. ч. (буквально «один»).',
      en: en('a / an') + ' only goes with a countable singular noun (it means “one”).',
      de: en('a / an') + ' steht nur bei zählbaren Nomen im Singular (es heißt „ein“).' });
    if (c === 'a' || c === 'an') return T({
      ru: en('a / an') + ' представил бы предмет как «один из многих», впервые упомянутый.',
      en: en('a / an') + ' would present it as “one of many”, mentioned for the first time.',
      de: en('a / an') + ' würde es als „einen von vielen“ einführen, zum ersten Mal erwähnt.' });
    if (c === 'the' && s.art === '0' && s.r === 'general') return T({
      ru: en('the') + ' означал бы конкретные, известные нам предметы, а здесь речь о них вообще.',
      en: en('the') + ' would mean particular ones we both know; here it is about them in general.',
      de: en('the') + ' würde bestimmte, bekannte Dinge meinen; hier geht es um sie allgemein.' });
    if (c === 'the' && s.art === 'a') return T({
      ru: en('the') + ' означал бы, что собеседник уже знает, какой именно.',
      en: en('the') + ' would mean the listener already knows which one.',
      de: en('the') + ' würde bedeuten, dass der Hörer schon weiß, welcher.' });
    if (c === 'the') return T({ ru: 'Здесь ' + en('the') + ' не ставят — см. правило ниже.', en: en('the') + ' is not used here — see the rule below.', de: en('the') + ' steht hier nicht — siehe die Regel unten.' });
    if (c === '—' && s.count === 'c' && s.art !== '0') return T({
      ru: 'Исчисляемое в ед. ч. не может стоять совсем без артикля.',
      en: 'A countable singular noun can’t stand with no article at all.',
      de: 'Ein zählbares Nomen im Singular kann nicht ganz ohne Artikel stehen.' });
    return T({ ru: 'Здесь артикль нужен — см. правило ниже.', en: 'An article is needed here — see the rule below.', de: 'Hier braucht man einen Artikel — siehe die Regel unten.' });
  }
  function explainHTML(s, chosen) {
    var lines = [];
    if (chosen && chosen !== answer(s)) lines.push(T({ ru: 'Вы выбрали ', en: 'You picked ', de: 'Du hast ' }) + b(escHTML(chosen)) + T({ ru: ': ', en: ': ', de: ' gewählt: ' }) + wrongHTML(s, chosen));
    lines.push(countHTML(s));
    lines.push(T(R[s.r].text));
    if (s.art === 'a') lines.push(soundHTML(nextWord(s.text)));
    return '<ul class="ag-why">' + lines.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }

  /* ---------------- reference ---------------- */
  var SECTIONS = [['overview', 'a / an · the · —'], ['count', 'Countable or not'], ['aan', 'a or an'], ['the', 'When “the”'],
    ['zero', 'No article'], ['places', 'Names & places'], ['fixed', 'Fixed phrases']];
  function title(o, id) { return GT.whichForm.sectionTitle(T(o), id); }
  function table(head, rows, esc, enCols) {
    return '<div class="table-wrap"><table><thead><tr>' + head.map(function (x) { return '<th>' + esc(T(x)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return typeof c === 'string' && (enCols || []).indexOf(i) >= 0 ? '<td class="de" lang="en">' + esc(c) + '</td>' : '<td' + (T(c) === '✗' || /^✗/.test(T(c)) ? ' class="muted"' : '') + '>' + esc(T(c)) + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
  }
  function list(items) { return '<div class="box prose"><ul>' + items.map(function (x) { return '<li>' + T(x) + '</li>'; }).join('') + '</ul></div>'; }
  function overviewHTML(esc) {
    return table([{ ru: 'Артикль', en: 'Article', de: 'Artikel' }, { ru: 'Когда', en: 'When', de: 'Wann' }, { ru: 'Пример', en: 'Example', de: 'Beispiel' }], [
      ['a / an', { ru: 'один из многих, впервые; профессия; «что это за предмет»; = «один», «в / за»', en: 'one of many, first mention; jobs; what kind of thing; = “one”, “per”', de: 'einer von vielen, erste Erwähnung; Beruf; was für ein Ding; = „ein“, „pro“' }, 'I saw a fox. He is a teacher.'],
      ['the', { ru: 'оба знают какой: уже упоминался, уточнён, ясен из ситуации, единственный; превосходная степень; реки, моря, горные цепи', en: 'both know which: mentioned before, defined, clear from the situation, the only one; superlatives; rivers, seas, mountain ranges', de: 'beide wissen, welcher: schon erwähnt, näher bestimmt, aus der Situation klar, einzig; Superlativ; Flüsse, Meere, Gebirge' }, 'The jacket was cheap. The sun is hot.'],
      ['—', { ru: 'мн. ч. и неисчисляемые в общем смысле; имена, города, большинство стран; еда, языки, спорт, дни; at school, by bus', en: 'plural and uncountable nouns in general; names, cities, most countries; meals, languages, sports, days; at school, by bus', de: 'Plural und nicht Zählbares allgemein; Namen, Städte, die meisten Länder; Mahlzeiten, Sprachen, Sport, Tage; at school, by bus' }, 'Dogs are loyal. I live in Berlin.']
    ], esc, [0, 2]);
  }
  function reference(api) {
    var esc = api.esc, h = '';
    h += '<header class="page-head"><h1>' + T({ ru: 'Артикли: a / an · the · без артикля', en: 'Articles: a / an · the · no article', de: 'Artikel: a / an · the · kein Artikel' }) + '</h1><p class="lead">' +
      T({ ru: 'Три варианта — и почти всё решают два вопроса: исчисляемое ли существительное и знает ли собеседник, о каком предмете речь. Ниже правила и устойчивые случаи, в игре — настоящие предложения.',
        en: 'Three choices — and two questions decide almost everything: is the noun countable, and does the listener know which one you mean? Below are the rules and the fixed cases; the game uses real sentences.',
        de: 'Drei Möglichkeiten — und fast alles entscheiden zwei Fragen: Ist das Nomen zählbar, und weiß der Hörer, welches gemeint ist? Unten die Regeln und festen Fälle; im Spiel echte Sätze.' }) + '</p></header>';
    h += '<div class="actions-row"><a class="btn primary" href="#/articles/play">Play · Which article?</a><a class="btn" href="#/grammar/articles">Articles lesson</a><a class="btn" href="#/cases">Cases across your languages</a></div>';

    h += title({ ru: 'Обзор · a / an · the · —', en: 'Overview · a / an · the · —', de: 'Überblick · a / an · the · —' }, 'overview') + overviewHTML(esc);
    h += '<p class="note muted ag-note">' + T({ ru: 'Два вопроса по порядку: 1) исчисляемое в ед. ч., неисчисляемое или мн. ч.? 2) один из многих — или собеседник знает, какой именно?',
      en: 'Two questions in order: 1) countable singular, uncountable or plural? 2) one of many — or does the listener know which one?',
      de: 'Zwei Fragen der Reihe nach: 1) zählbar im Singular, nicht zählbar oder Plural? 2) einer von vielen — oder weiß der Hörer, welcher?' }) + '</p>';

    h += title({ ru: 'Исчисляемое или нет', en: 'Countable or not', de: 'Zählbar oder nicht' }, 'count') +
      table([{ ru: 'Тип', en: 'Type', de: 'Art' }, 'a / an', 'the', '—'], [
        [{ ru: 'исчисляемое, ед. ч.', en: 'countable, singular', de: 'zählbar, Singular' }, 'a car', 'the car', { ru: '✗ никогда', en: '✗ never', de: '✗ nie' }],
        [{ ru: 'мн. ч.', en: 'plural', de: 'Plural' }, { ru: '✗', en: '✗', de: '✗' }, 'the cars', 'cars'],
        [{ ru: 'неисчисляемое', en: 'uncountable', de: 'nicht zählbar' }, { ru: '✗', en: '✗', de: '✗' }, 'the water', 'water']
      ], esc, [1, 2, 3]);
    h += '<p class="note muted ag-note">' + T({
      ru: 'Неисчисляемые в английском — их легко принять за исчисляемые (по-русски есть «советы», «новости», «деньги»): ' + en('advice, information, news, furniture, luggage, equipment, homework, work, money, hair, weather') + '. Нельзя ' + en('an advice, informations') + ' — говорят ' + en('a piece of advice, some information') + '.',
      en: 'Uncountable in English even if they can be counted in other languages: ' + en('advice, information, news, furniture, luggage, equipment, homework, work, money, hair, weather') + '. Not ' + en('an advice, informations') + ' — say ' + en('a piece of advice, some information') + '.',
      de: 'Im Englischen nicht zählbar, obwohl man sie im Deutschen zählen kann: ' + en('advice, information, news, furniture, luggage, equipment, homework') + ' (der Rat → die Ratschläge, die Informationen, die Möbel). Nicht ' + en('an advice, informations') + ' — sondern ' + en('a piece of advice, some information') + '.' }) + '</p>';

    h += title({ ru: 'a или an — по звуку', en: 'a or an — by sound', de: 'a oder an — nach dem Laut' }, 'aan') + aanRulesHTML(esc);

    h += title({ ru: 'Когда нужен the', en: 'When to use “the”', de: 'Wann „the“' }, 'the') + list([
      { ru: 'Уже упоминался: ' + en('I bought a shirt and a jacket. The jacket was cheap.'), en: 'Mentioned before: ' + en('I bought a shirt and a jacket. The jacket was cheap.'), de: 'Schon erwähnt: ' + en('I bought a shirt and a jacket. The jacket was cheap.') },
      { ru: 'Уточнён словами после: ' + en('the woman in the red coat, the capital of France'), en: 'Defined by the words after it: ' + en('the woman in the red coat, the capital of France'), de: 'Durch die Wörter danach bestimmt: ' + en('the woman in the red coat, the capital of France') },
      { ru: 'Ясно из ситуации: ' + en('Close the window. Pass the salt.'), en: 'Clear from the situation: ' + en('Close the window. Pass the salt.'), de: 'Aus der Situation klar: ' + en('Close the window. Pass the salt.') },
      { ru: 'Один на всех: ' + en('the sun, the moon, the sky, the world, the internet'), en: 'Only one exists: ' + en('the sun, the moon, the sky, the world, the internet'), de: 'Es gibt nur einen: ' + en('the sun, the moon, the sky, the world, the internet') },
      { ru: 'Превосходная степень, ' + en('first, last, same, only') + ': ' + en('the best, the same'), en: 'Superlatives, ' + en('first, last, same, only') + ': ' + en('the best, the same'), de: 'Superlativ, ' + en('first, last, same, only') + ': ' + en('the best, the same') },
      { ru: 'Музыкальные инструменты: ' + en('play the piano') + ' (но ' + en('play football') + ')', en: 'Musical instruments: ' + en('play the piano') + ' (but ' + en('play football') + ')', de: 'Musikinstrumente: ' + en('play the piano') + ' (aber ' + en('play football') + ')' }
    ]);

    h += title({ ru: 'Без артикля', en: 'No article', de: 'Kein Artikel' }, 'zero') + list([
      { ru: 'Мн. ч. и неисчисляемые в общем смысле: ' + en('Dogs are loyal. I love music. Time is money.'), en: 'Plural and uncountable nouns in general: ' + en('Dogs are loyal. I love music. Time is money.'), de: 'Plural und nicht Zählbares allgemein: ' + en('Dogs are loyal. I love music. Time is money.') },
      { ru: 'Сравните: ' + en('I love music') + ' (вообще) — ' + en('I love the music in this film') + ' (конкретная).', en: 'Compare: ' + en('I love music') + ' (in general) — ' + en('I love the music in this film') + ' (particular).', de: 'Vergleich: ' + en('I love music') + ' (allgemein) — ' + en('I love the music in this film') + ' (bestimmt).' },
      { ru: 'Приёмы пищи: ' + en('have breakfast, for lunch'), en: 'Meals: ' + en('have breakfast, for lunch'), de: 'Mahlzeiten: ' + en('have breakfast, for lunch') },
      { ru: 'Языки, предметы, спорт, игры: ' + en('speak French, study history, play football'), en: 'Languages, subjects, sports, games: ' + en('speak French, study history, play football'), de: 'Sprachen, Fächer, Sport, Spiele: ' + en('speak French, study history, play football') },
      { ru: 'Дни, месяцы, годы; ' + en('next / last') + ': ' + en('on Monday, in May, next week, last year'), en: 'Days, months, years; ' + en('next / last') + ': ' + en('on Monday, in May, next week, last year'), de: 'Tage, Monate, Jahre; ' + en('next / last') + ': ' + en('on Monday, in May, next week, last year') }
    ]);

    h += title({ ru: 'Имена и места', en: 'Names & places', de: 'Namen & Orte' }, 'places') +
      table([{ ru: 'Без артикля', en: 'No article', de: 'Kein Artikel' }, { ru: 'С the', en: 'With the', de: 'Mit the' }], [
        ['Anna, Mr Smith', 'the Smiths (= the family)'],
        ['London, Berlin', 'the Thames, the Rhine, the Danube'],
        ['Germany, Italy, France', 'the USA, the UK, the Netherlands'],
        ['Europe, Asia', 'the Atlantic, the Mediterranean'],
        ['Lake Geneva, Mount Everest', 'the Alps, the Sahara'],
        ['Oxford Street, Heathrow Airport', 'the British Museum, the Eiffel Tower']
      ], esc, [0, 1]);
    h += '<p class="note muted ag-note">' + T({
      ru: 'Города, страны, континенты, улицы, отдельные озёра и горы — без артикля. Реки, моря, океаны, горные цепи, пустыни и страны-«союзы» (' + en('States, Kingdom') + ', мн. ч.) — с ' + en('the') + '.',
      en: 'Cities, countries, continents, streets, single lakes and mountains: no article. Rivers, seas, oceans, mountain ranges, deserts and “union” or plural countries (' + en('States, Kingdom') + '): ' + en('the') + '.',
      de: 'Städte, Länder, Kontinente, Straßen, einzelne Seen und Berge: kein Artikel. Flüsse, Meere, Ozeane, Gebirge, Wüsten und Länder mit ' + en('States, Kingdom') + ' oder im Plural: ' + en('the') + '.' }) + '</p>';

    h += title({ ru: 'Устойчивые выражения', en: 'Fixed phrases', de: 'Feste Wendungen' }, 'fixed') +
      table([{ ru: 'Без артикля', en: 'No article', de: 'Kein Artikel' }, { ru: 'С артиклем', en: 'With an article', de: 'Mit Artikel' }], [
        ['at school, go to bed', 'in the morning, in the evening'],
        ['at home, go to work', 'go to the cinema, go to the theatre'],
        ['by bus, by car, at night', 'on the left, on the right'],
        ['in prison, go to church', 'play the piano, the guitar'],
        ['have lunch, play chess', 'three times a week, 50 km an hour']
      ], esc, [0, 1]);
    h += '<p class="note muted ag-note">' + T({
      ru: en('at school, in bed, in prison') + ' — когда место используется по назначению (учиться, спать). Если говорим о здании: ' + en('The meeting is at the school.'),
      en: en('at school, in bed, in prison') + ' — the place is used for its purpose (to study, to sleep). For the building itself: ' + en('The meeting is at the school.'),
      de: en('at school, in bed, in prison') + ' — der Ort in seiner Funktion (lernen, schlafen). Für das Gebäude selbst: ' + en('The meeting is at the school.') }) + '</p>';
    h += '<div class="actions"><a class="btn primary" href="#/articles/play">Try it yourself →</a></div>';
    return h;
  }
  function aanRulesHTML(esc) {
    return table([{ ru: 'Звук в начале', en: 'First sound', de: 'Erster Laut' }, 'a', 'an'], [
      [{ ru: 'обычное правило', en: 'the usual case', de: 'der Normalfall' }, 'a car, a big apple', 'an apple, an old car'],
      [{ ru: 'h не читается', en: 'silent h', de: 'stummes h' }, 'a hotel, a house', 'an hour, an honest man'],
      [{ ru: 'u / eu = /juː/, one = /wʌn/', en: 'u / eu = /juː/, one = /wʌn/', de: 'u / eu = /juː/, one = /wʌn/' }, 'a university, a European city, a one-way ticket', 'an umbrella, an uncle'],
      [{ ru: 'аббревиатуры: по названию буквы', en: 'abbreviations: by the letter name', de: 'Abkürzungen: nach dem Buchstabennamen' }, 'a USB stick, a UK passport', 'an MBA, an FBI agent, an X-ray']
    ], esc, [1, 2]) + '<p class="note muted ag-note">' + T({
      ru: 'Решает звук, а не буква. ' + en('a / an') + ' смотрит на следующее слово, даже если это прилагательное: ' + en('an old car, a new car') + '.',
      en: 'The sound decides, not the letter. ' + en('a / an') + ' looks at the next word, even an adjective: ' + en('an old car, a new car') + '.',
      de: 'Der Laut entscheidet, nicht der Buchstabe. ' + en('a / an') + ' richtet sich nach dem nächsten Wort, auch nach einem Adjektiv: ' + en('an old car, a new car') + '.' }) + '</p>';
  }

  /* ---------------- games ---------------- */
  var artGame = {
    items: function () { return D().sentences; },
    match: function (s, mode) { return mode === 'x' ? GT.whichForm.isTrap('en', task(s)) : mode === 'all' || R[s[4]].group === mode; },
    task: task,
    answer: answer,
    options: options,
    kind: function () { return 'Pick the article · a / an / the / —'; },
    question: function (s, ctx) { return ctx.esc(s.text).replace('___', ctx.blank); },
    hintLabels: ['Hint · countable?', 'More hint · which one?'],
    hint: function (s, level) {
      var parts = [en(s.noun) + ' — <b>' + T(COUNT[s.count]) + '</b>'];
      if (level >= 2) parts.push(T(R[s.r].hint));
      return parts.join(' · ');
    },
    verdict: function (s, ans, esc) { return ans === '—' ? T({ ru: 'без артикля', en: 'no article', de: 'kein Artikel' }) + ' (—)' : esc(ans); },
    explain: explainHTML,
    forms: { show: 'All rules', hide: 'Hide rules', html: function (s, esc) { return '<h3 class="section-title">a / an · the · —</h3>' + overviewHTML(esc); } },
    keys: 'rules',
    next: 'Next sentence →'
  };
  var aanGame = {
    items: function () { return D().aan; },
    task: function (w) { return { word: w }; },
    answer: function (s) { return aOrAn(s.word); },
    options: function () { return ['a', 'an']; },
    kind: function () { return 'a or an · by the sound'; },
    qClass: 'ag-end-q',
    question: function (s, ctx) { return ctx.blank + ' ' + ctx.esc(s.word); },
    hintLabels: ['Hint · sound'],
    hint: function (s) {
      var si = soundInfo(s.word);
      var parts = [T({ ru: 'Согласный звук → <b>a</b>. Гласный звук → <b>an</b>. Произнесите первое слово вслух.',
        en: 'Consonant sound → <b>a</b>. Vowel sound → <b>an</b>. Say the first word aloud.',
        de: 'Konsonantenlaut → <b>a</b>. Vokallaut → <b>an</b>. Sprich das erste Wort laut aus.' })];
      parts.push((si.ipa ? si.ipa + ' — ' : '') + '<b>' + T(si.v ? { ru: 'гласный звук', en: 'a vowel sound', de: 'ein Vokallaut' } : { ru: 'согласный звук', en: 'a consonant sound', de: 'ein Konsonantenlaut' }) + '</b>');
      return parts.join(' · ');
    },
    verdict: function (s, ans, esc) { return ans + ' ' + esc(s.word); },
    explain: function (s, chosen) {
      var lines = [];
      if (chosen && chosen !== aOrAn(s.word)) lines.push(T({ ru: 'Вы выбрали ', en: 'You picked ', de: 'Du hast ' }) + b(escHTML(chosen)) + T({ ru: ' — ориентир на букву, а не на звук.', en: ' — that follows the letter, not the sound.', de: ' gewählt — das folgt dem Buchstaben, nicht dem Laut.' }));
      lines.push(soundHTML(s.word));
      return '<ul class="ag-why">' + lines.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    },
    forms: { show: 'Patterns', hide: 'Hide patterns', html: function (s, esc) { return '<h3 class="section-title">a or an</h3>' + aanRulesHTML(esc); } },
    keys: 'patterns',
    next: 'Next word →'
  };

  function check() {
    var bad = [], seen = {}, A = D();
    function risky(w, where) {
      if ((RISKY.test(w) || /^[A-Z]{2,}/.test(w)) && !(A.sounds[w] || A.sounds[w.toLowerCase()])) bad.push('sound not listed: ' + w + ' (' + where + ')');
    }
    A.sentences.forEach(function (s, i) {
      var where = i + ': ' + s[0];
      if (seen[s[0]]) bad.push('dup sentence: ' + s[0]); seen[s[0]] = 1;
      if ((s[0].match(/___/g) || []).length !== 1) bad.push('blank: ' + where);
      var r = R[s[4]];
      if (!r) { bad.push('reason: ' + where); return; }
      if (!COUNT[s[3]]) bad.push('count: ' + where);
      var want = s[4] === 'whata' ? (s[3] === 'c' ? 'a' : '0') : r.art;
      if (s[1] !== want) bad.push('article ≠ reason: ' + where);
      if (s[1] === 'a' && s[3] !== 'c') bad.push('a / an needs a countable singular: ' + where);
      if (s[1] === 'a') { var nw = nextWord(s[0]); if (!nw) bad.push('no word after blank: ' + where); else risky(nw, where); }
    });
    seen = {};
    A.aan.forEach(function (w) { if (seen[w]) bad.push('dup a/an word: ' + w); seen[w] = 1; risky(firstWord(w), 'a/an'); });
    return bad;
  }

  GT.whichForm.define('en', {
    route: 'articles',
    label: 'Articles',
    ready: function () { return !!GT.EN_ARTICLES; },
    sections: SECTIONS,
    reference: reference,
    game: {
      title: 'Which article?',
      lead: function () { return T({ ru: 'Выберите a, an, the или — (без артикля). Подсказка сначала спросит, исчисляемое ли слово, потом — знает ли собеседник, о каком предмете речь.', en: 'Pick a, an, the or — (no article). The hint first asks whether the noun is countable, then whether the listener knows which one.', de: 'Wähle a, an, the oder — (kein Artikel). Der Tipp fragt zuerst, ob das Nomen zählbar ist, dann, ob der Hörer weiß, welches gemeint ist.' }); }
    },
    practice: { label: 'Articles · a / an / the ↗', help: 'Opens the Articles game: pick a, an, the or no article in real sentences, with hints and explanations.' },
    modes: [{ id: 'all', label: 'All', game: 'art' }].concat(GROUPS.map(function (g) { return { id: g[0], label: g[1], game: 'art' }; }))
      .concat([{ id: 'aan', label: 'a or an', game: 'aan', solo: true }, { id: 'x', label: 'Interference', game: 'art', solo: true }]),
    modeNote: function (m) {
      if (m === 'x') return 'Interference: sentences where ' + GT.LANGS[GT.know].name + ' pushes you towards a wrong form. The note under each answer compares the two languages.';
      return m === 'aan' ? 'a or an: choose by the first SOUND of the word, not the letter. These words are not part of All.'
        : 'All mixes every topic. Choosing between a and an by sound is a separate game: a or an.';
    },
    games: { art: artGame, aan: aanGame },
    check: check
  });
})();
