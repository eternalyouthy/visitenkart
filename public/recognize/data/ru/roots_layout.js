/* RUSSIAN roots — learner-facing layout. Loaded after all roots_*.js and affixes.js.
 *  1. Families are titled by their verbs (ХОДИТЬ / ИДТИ), the root morpheme is a subtitle.
 *  2. Every prefixed verb shows its aspect partner (приходить → прийти) on the map and in the card,
 *     taken from forms.perf ("pf. прийт+и (…)" / "one direction: идт+и (…)").
 *  3. One-direction verbs (вести, везти, нести) move from the map to the chips: the base node already shows them.
 *  4. Prefixes that the families use but that had no page: до-, с-, раз-, о-, про-, по-, пред-.
 *     Meaning indices (prefixDrill.meaning):
 *       до: 0 reaching a point      с: 0 together · 1 down/off, handing over
 *       раз: 0 apart, to many · 1 thoroughly        о: 0 all around, all over
 *       про: 0 through, past · 1 missing, overlooking    по: 0 setting off · 1 a little, for a while
 *       пред: 0 before, in front */
(function () {
  'use strict';
  var P = GT.packs.ru;
  function plain(s) { return String(s || '').replace(/[+́]/g, ''); }
  function byPlain(t) { return P.items.filter(function (x) { return plain(x.t) === t; })[0] || null; }
  function ex(t, en, de) { return { t: t, en: en, de: de }; }

  /* 1. titles */
  var TITLES = {
    'ход': ['ХОДИТЬ / ИДТИ', 'root -ход- / -й-'], 'пис': ['ПИСАТЬ', 'root -пис-'], 'вод': ['ВОДИТЬ / ВЕСТИ', 'root -вод- / -вед-'],
    'став': ['СТАВИТЬ', 'root -став-'], 'воз': ['ВОЗИТЬ / ВЕЗТИ', 'root -воз- / -вез-'], 'нос': ['НОСИТЬ / НЕСТИ', 'root -нос- / -нес-'],
    'да': ['ДАВАТЬ / ДАТЬ', 'root -да-'], 'зна': ['ЗНАТЬ', 'root -зна-'], 'бр': ['БРАТЬ / ВЗЯТЬ', 'root -бр- / -бер- / -бир-']
  };
  Object.keys(TITLES).forEach(function (id) {
    var r = P.roots[id];
    if (r) { r.label = TITLES[id][0]; r.sub = TITLES[id][1]; }
  });
  ['езд', 'смотр', 'лож', 'говор', 'дел', 'прос', 'жив', 'би'].forEach(function (id) { if (P.config.ROOT_PLAN.indexOf(id) < 0 && P.roots[id]) P.config.ROOT_PLAN.push(id); });

  /* 2. aspect partners */
  P.items.forEach(function (w) {
    if (!w.rootId || w.pos !== 'verb' || !w.forms || w.pair) return;
    var m = /^(pf\.|impf\.|one direction:)\s*([^\s(,]+)/.exec(String(w.forms.perf || ''));
    if (!m) return;
    w.pair = m[2];
    w.pairLabel = m[1] === 'one direction:' ? 'One direction' : m[1] === 'impf.' ? 'Imperfective' : 'Perfective';
  });

  /* 3. one-direction verbs as chips */
  ['вести', 'везти', 'нести'].forEach(function (t) { var w = byPlain(t); if (w && !w.base) w.mapAs = 'chip'; });

  /* 4. prefixes */
  var ASPECT = P.prefixes['при'] && P.prefixes['при'].grammar;
  function prefix(id, label, en, de, meanings, match) {
    if (P.prefixes[id]) return;
    GT.registerPrefix({ id: id, label: label, en: en, de: de, meanings: meanings, match: match, grammar: ASPECT });
    if (P.config.PREFIX_PLAN.indexOf(id) < 0) P.config.PREFIX_PLAN.push(id);
  }
  function M(en, de, examples) { return { en: en, de: de, examples: examples }; }
  prefix('до', 'до-', 'up to, reaching a point', 'bis zu, ein Ziel erreichen', [
    M('reaching a point or limit', 'bis zu einem Punkt, ans Ziel', [ex('дойт+и', 'to reach (on foot)', 'hingelangen'), ex('до+ехать', 'to get to (by vehicle)', 'hinfahren, ankommen'), ex('дост+авить', 'to deliver', 'liefern'), ex('доход+ить', 'to reach; to dawn on', 'ankommen; klar werden')])
  ], { en: '<p>Usually with the preposition <b>до</b>: дойти <b>до</b> дома — to get as far as the house.</p>', de: '<p>Meist mit der Präposition <b>до</b>: дойти <b>до</b> дома — bis zum Haus kommen. Deutsch oft <b>hin-</b> / <b>an-</b> + bis: bis nach Hause kommen.</p>' });
  prefix('с', 'с- (со-)', 'together; down, off; handing over', 'zusammen; herunter, ab; abgeben', [
    M('together, into one place', 'zusammen, an einen Ort', [ex('собр+ать', 'to gather, to collect', 'sammeln'), ex('сост+авить', 'to put together, to compile', 'zusammenstellen'), ex('съ+ехаться', 'to gather (arriving)', 'zusammenkommen')]),
    M('down, off; handing over', 'herunter, ab; abgeben', [ex('сдать', 'to hand in; to rent out', 'abgeben; vermieten'), ex('снять', 'to take off; to rent', 'abnehmen; mieten'), ex('съ+ехать', 'to move out; to drive down', 'ausziehen; herunterfahren')])
  ], { en: '<p>Two opposite pictures: <b>together</b> (собрать — collect) and <b>down / away</b> (снять — take off). Before a vowel or a cluster it becomes <b>со-</b> / <b>съ-</b>: собрать, съехать.</p>', de: '<p>Zwei Bilder: <b>zusammen</b> (собрать — sammeln, wie zusammen-) und <b>herunter / ab</b> (снять — abnehmen, wie ab-). Vor Konsonantengruppen <b>со-</b>, vor е <b>съ-</b>: собрать, съехать.</p>' });
  prefix('раз', 'раз- (рас-)', 'apart, in all directions; thoroughly', 'auseinander, verteilen; gründlich', [
    M('apart, to many people or places', 'auseinander, an viele verteilen', [ex('разд+ать', 'to hand out', 'austeilen'), ex('разъ+ехаться', 'to go separate ways', 'auseinanderfahren'), ex('разобр+ать', 'to take apart', 'auseinandernehmen')]),
    M('thoroughly, in detail', 'gründlich, im Detail', [ex('рассмотр+еть', 'to examine', 'prüfen, betrachten'), ex('распозн+ать', 'to recognise, to identify', 'erkennen'), ex('разобр+аться', 'to figure out', 'durchblicken')])
  ], { en: '<p>Spelled <b>рас-</b> before a voiceless consonant: <b>рас</b>смотреть, <b>рас</b>писание. English often has <b>dis-</b> or a particle: distribute, hand <i>out</i>, take <i>apart</i>.</p>', de: '<p>Vor stimmlosen Konsonanten <b>рас-</b>: <b>рас</b>смотреть. Deutsch meist <b>aus-</b>, <b>ver-</b> oder <b>auseinander-</b>: austeilen (раздать), verteilen, auseinandernehmen (разобрать).</p>' });
  prefix('о', 'о- (об-)', 'around, all over', 'um, rundherum', [
    M('around, covering the whole object', 'rundherum, das ganze Objekt', [ex('осмотр+еть', 'to examine, to look round', 'untersuchen, besichtigen'), ex('опис+ать', 'to describe', 'beschreiben'), ex('объ+ехать', 'to drive around', 'umfahren')])
  ], { en: '<p>Before a vowel <b>об-</b>: объехать — to drive around. Many о-verbs are idiomatic (оставить — to leave), so learn them with the example.</p>', de: '<p>Vor Vokal <b>об-</b>: объехать — umfahren. Deutsch oft <b>be-</b> oder <b>um-</b>: beschreiben (описать), besichtigen (осмотреть), umfahren (объехать).</p>' });
  prefix('про', 'про-', 'through, past; missing', 'durch, vorbei; verpassen', [
    M('through, past', 'durch, vorbei', [ex('про+ехать', 'to drive through / past', 'durchfahren, vorbeifahren'), ex('просмотр+еть', 'to look through', 'durchsehen'), ex('пройт+и', 'to go through; to pass', 'durchgehen; vergehen')]),
    M('missing, overlooking', 'verpassen, übersehen', [ex('про+ехать остан+овку', 'to miss one’s stop', 'die Haltestelle verpassen'), ex('просп+ать', 'to oversleep', 'verschlafen'), ex('пропуст+ить', 'to miss, to skip', 'verpassen, auslassen')])
  ], { en: '<p>English <b>through / past</b> and <b>over-</b> (oversleep — проспать). продать “to sell” is an old, opaque formation: learn it as a word.</p>', de: '<p>Deutsch <b>durch-</b> und <b>ver-</b>: durchsehen (просмотреть), verschlafen (проспать), verpassen (пропустить). продать „verkaufen“ ist alt und undurchsichtig.</p>' });
  prefix('по', 'по-', 'setting off; a little, for a while', 'losgehen; ein wenig, eine Weile', [
    M('setting off (motion verbs)', 'Aufbruch (Bewegungsverben)', [ex('пойт+и', 'to set off (on foot)', 'losgehen'), ex('по+ехать', 'to set off (by vehicle)', 'losfahren')]),
    M('a little, for a while', 'ein wenig, eine Weile', [ex('поговор+ить', 'to have a talk', 'sich kurz unterhalten'), ex('посид+еть', 'to sit for a while', 'eine Weile sitzen'), ex('посмотр+еть', 'to have a look', 'kurz anschauen')])
  ], { en: '<p>по- is the most common way to make a perfective with little change of meaning: смотреть → посмотреть.</p>', de: '<p>по- ist der häufigste Weg zum Perfektiv fast ohne Bedeutungsänderung: смотреть → посмотреть.</p>' });
  prefix('на', 'на-', 'onto; a large amount', 'auf; eine Menge', [
    M('onto, on the surface', 'auf, an die Oberfläche', [ex('над+еть', 'to put on (clothes)', 'anziehen'), ex('нап+исать', 'to write (down)', 'aufschreiben')]),
    M('a large amount, plenty', 'eine große Menge', [ex('над+елать ош+ибок', 'to make lots of mistakes', 'viele Fehler machen'), ex('накуп+ить', 'to buy a lot', 'viel einkaufen'), ex('наговор+ить', 'to say a lot (of things)', 'viel daherreden')])
  ], { en: '<p>English often uses <b>on</b> (put on) or a quantity word: наделать ошибок — make <i>loads</i> of mistakes.</p>', de: '<p>Deutsch oft <b>auf-/an-</b> (anziehen — надеть) oder ein Mengenwort: наделать ошибок — <i>jede Menge</i> Fehler machen.</p>' });
  prefix('пред', 'пред-', 'before, in front of', 'vor', [
    M('before, in front of', 'vor, voraus', [ex('предст+авить', 'to present, to introduce; to imagine', 'vorstellen'), ex('предупред+ить', 'to warn', 'vorwarnen'), ex('предсказ+ать', 'to predict', 'vorhersagen')])
  ], { en: '<p>Like Latin <b>pre-</b> / English <b>fore-</b>: предсказать — foretell, predict.</p>', de: '<p>Wie deutsch <b>vor-</b>: представить — vorstellen, предсказать — vorhersagen. Fast eine wörtliche Entsprechung.</p>' });

  /* 5. prefix + drill for family members that lacked them (only where the meaning is transparent) */
  function drill(t, pfx, meaning, en, de, tr) {
    var w = byPlain(t);
    if (!w) return;
    w.prefix = pfx;
    if (meaning != null && !w.prefixDrill && w.examples && w.examples.length) w.prefixDrill = { ex: 0, meaning: meaning, explain: { en: en, de: de } };
    if (tr) w.transparency = tr;
  }
  drill('доходить', 'до', 0, 'до- = reaching the destination: the letter got as far as the recipient (or didn’t).', 'до- = das Ziel erreichen: der Brief ist (nicht) bis zum Empfänger gekommen.');
  drill('доставлять', 'до', 0, 'до- = all the way to the customer: the order is delivered.', 'до- = bis zum Kunden: die Bestellung wird geliefert.');
  drill('собирать', 'с', 0, 'с(о)- = together: things are gathered into one suitcase.', 'с(о)- = zusammen: die Sachen kommen in einen Koffer.');
  drill('составлять', 'с', 0, 'с(о)- = together: parts are put together into a whole.', 'с(о)- = zusammen: Teile werden zu einem Ganzen zusammengestellt.');
  drill('сдавать', 'с', 1, 'с- = handing over: the flat is handed over to tenants.', 'с- = abgeben: die Wohnung wird an Mieter abgegeben.', 'figurative');
  drill('разбирать', 'раз', 1, 'раз- = in detail: we take the cause apart, piece by piece.', 'раз- = im Detail: wir nehmen die Ursache Stück für Stück auseinander.', 'figurative');
  drill('раздавать', 'раз', 0, 'раз- = to many people: each student gets a sheet.', 'раз- = an viele: jeder bekommt ein Blatt.');
  drill('распознавать', 'раз', 1, 'рас- = in detail: the program tells sounds apart and recognises words.', 'рас- = genau: das Programm unterscheidet Laute und erkennt Wörter.', 'figurative');
  drill('описывать', 'о', 0, 'о- = all over: the description covers the whole problem.', 'о- = rundherum: die Beschreibung erfasst das ganze Problem.', 'figurative');
  drill('продавать', 'про', null, '', '', 'opaque');
  drill('оставлять', 'о', null, '', '', 'opaque');
  drill('представлять', 'пред', 0, 'пред- = in front of: you present something before an audience.', 'пред- = vor: man stellt etwas vor Publikum vor.', 'figurative');
  drill('выдавать', 'вы', 0, 'вы- = out: the document is handed out to you.', 'вы- = heraus: das Dokument wird herausgegeben.');
  drill('выбирать', 'вы', 0, 'вы- = out of many: you pick one out.', 'вы- = aus vielen heraus: man nimmt eins heraus.');
  drill('забирать', 'за', 0, 'за- = a stop on the way: you call in and collect something.', 'за- = ein kurzer Halt: man kommt vorbei und holt etwas ab.');
  // со- before a consonant cluster: blank the whole prefix so the pattern stays readable.
  [['собирать', '___бирать'], ['составлять', '___ставлять']].forEach(function (x) { var w = byPlain(x[0]); if (w) w.drill = { t: x[1] }; });
})();

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.registerPrefix({
  "id": "из",
  "label": "из- (ис-)",
  "en": "out of, exhaustion; thoroughly, changed state",
  "de": "heraus, erschöpfend; gründlich, veränderter Zustand",
  "meanings": [
    {
      "en": "thorough action or transformation (word-specific)",
      "de": "gründliche Handlung oder Veränderung (wortabhängig)",
      "examples": [
        {
          "t": "изуч+ить",
          "en": "to study thoroughly",
          "de": "gründlich studieren"
        },
        {
          "t": "измен+ить",
          "en": "to change",
          "de": "verändern"
        }
      ]
    },
    {
      "en": "taking out of something; using up completely",
      "de": "herausnehmen; vollständig verbrauchen",
      "examples": [
        {
          "t": "извл+ечь",
          "en": "to extract, to draw out",
          "de": "herausziehen, gewinnen"
        },
        {
          "t": "израсх+одовать",
          "en": "to use up, to spend completely",
          "de": "vollständig verbrauchen"
        }
      ]
    }
  ],
  "match": {
    "en": "<p>Compare изучать → изучить and изменять → изменить. These are separate verbs with their own aspect pairs. The prefix is not a general substitute for English change or German ver-.</p>",
    "de": "<p>Vergleiche изучать → изучить und изменять → изменить. Das sind eigene Verben mit eigenen Aspektpaaren. Das Präfix entspricht nicht allgemein dem englischen change oder deutschen ver-.</p>"
  },
  "grammar": GT.packs.ru.prefixes["при"] && GT.packs.ru.prefixes["при"].grammar
});
GT.packs.ru.config.PREFIX_PLAN.push("из");

GT.registerRoot({
"id": "чит",
"verb": "чит+ать",
"t": "чит+ать",
"label": "ЧИТАТЬ",
"sub": "root -чит- / -чт-",
"en": "to read",
"de": "lesen",
"note": {
  "en": "Читать describes reading as an activity; прочитать normally presents a finished text. Prefixes add a new lexical meaning: перечитать = read again, дочитать = finish the remaining text. Related nouns are shown as chips, as in the German families.",
  "de": "Читать bezeichnet das Lesen als Tätigkeit; прочитать stellt normalerweise einen fertig gelesenen Text dar. Präfixe ergänzen Bedeutungen: перечитать = noch einmal lesen, дочитать = den Rest zu Ende lesen. Verwandte Nomen erscheinen wie in den deutschen Familien als Chips."
},
"words": [
{
  "id": "ru-content26-root-chitat",
  "t": "чит+ать",
  "pos": "verb",
  "aspect": "impf",
  "level": "A2",
  "en": "read",
  "de": "lesen",
  "core": true,
  "forms": {
    "praes": "чит+аю, чит+аешь",
    "praet": "чит+ал",
    "perf": "pf. прочит+ать"
  },
  "pair": "прочит+ать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Я [[чит+аю]] кн+игу по вечер+ам.",
      "en": "I read a book in the evenings.",
      "de": "Ich lese abends ein Buch."
    }
  ],
  "base": true,
  "tab": "roots",
  "topic": "чит"
},
{
  "id": "ru-content26-root-prochitat",
  "t": "прочит+ать",
  "pos": "verb",
  "aspect": "pf",
  "level": "B1",
  "en": "read through",
  "de": "durchlesen",
  "core": true,
  "forms": {
    "praes": "прочит+аю, прочит+аешь",
    "praet": "прочит+ал",
    "perf": "impf. чит+ать"
  },
  "pair": "чит+ать",
  "pairLabel": "Imperfective",
  "examples": [
    {
      "t": "Я усп+ел [[прочит+ать]] весь отчёт до встр+ечи.",
      "en": "I managed to read through the whole report before the meeting.",
      "de": "Ich habe es geschafft, vor dem Treffen den ganzen Bericht durchzulesen."
    }
  ],
  "prefix": "про",
  "tab": "roots",
  "topic": "чит"
},
{
  "id": "ru-content26-root-perechityvat",
  "t": "переч+итывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "reread",
  "de": "erneut lesen",
  "core": true,
  "forms": {
    "praes": "переч+итываю, переч+итываешь",
    "praet": "переч+итывал",
    "perf": "pf. перечит+ать"
  },
  "pair": "перечит+ать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Я ч+асто [[переч+итываю]] +этот ром+ан.",
      "en": "I often reread this novel.",
      "de": "Ich lese diesen Roman oft erneut."
    }
  ],
  "prefix": "пере",
  "tab": "roots",
  "topic": "чит",
  "transparency": "transparent",
  "prefixDrill": {
    "ex": 0,
    "meaning": 1,
    "explain": {
      "en": "пере- = doing the reading again.",
      "de": "пере- = noch einmal lesen."
    }
  }
},
{
  "id": "ru-content26-root-dochityvat",
  "t": "доч+итывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "finish reading",
  "de": "zu Ende lesen",
  "core": true,
  "forms": {
    "praes": "доч+итываю, доч+итываешь",
    "praet": "доч+итывал",
    "perf": "pf. дочит+ать"
  },
  "pair": "дочит+ать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Я [[доч+итываю]] посл+еднюю глав+у.",
      "en": "I am finishing reading the last chapter.",
      "de": "Ich lese gerade das letzte Kapitel zu Ende."
    }
  ],
  "prefix": "до",
  "tab": "roots",
  "topic": "чит",
  "transparency": "transparent",
  "prefixDrill": {
    "ex": 0,
    "meaning": 0,
    "explain": {
      "en": "до- = reaching the end of the remaining text.",
      "de": "до- = bis zum Ende des verbleibenden Textes lesen."
    }
  }
},
{
  "id": "ru-content26-root-zachityvat",
  "t": "зач+итывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "read out",
  "de": "vorlesen",
  "core": true,
  "forms": {
    "praes": "зач+итываю, зач+итываешь",
    "praet": "зач+итывал",
    "perf": "pf. зачит+ать"
  },
  "pair": "зачит+ать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Секрет+арь [[зач+итывает]] реш+ение ком+иссии.",
      "en": "The secretary reads out the committee's decision.",
      "de": "Die Sekretärin liest die Entscheidung der Kommission vor."
    }
  ],
  "prefix": "за",
  "tab": "roots",
  "topic": "чит"
},
{
  "id": "ru-content26-root-vchityvatsya",
  "t": "вч+итываться",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "read closely",
  "de": "sich in einen Text vertiefen",
  "core": true,
  "forms": {
    "praes": "вч+итываюсь, вч+итываешься",
    "praet": "вч+итывался",
    "perf": "pf. вчит+аться"
  },
  "pair": "вчит+аться",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Он д+олго [[вч+итывался]] в усл+овия догов+ора.",
      "en": "He spent a long time reading the contract terms closely.",
      "de": "Er vertiefte sich lange in die Vertragsbedingungen."
    }
  ],
  "prefix": "в",
  "tab": "roots",
  "topic": "чит"
},
{
  "id": "ru-content26-root-chitatel",
  "t": "чит+атель",
  "pos": "noun",
  "level": "B1",
  "en": "reader",
  "de": "der Leser",
  "examples": [
    {
      "t": "К+аждый [[чит+атель]] м+ожет продл+ить срок в+ыдачи кн+иги.",
      "en": "Every reader can extend the book's loan period.",
      "de": "Jeder Leser kann die Leihfrist des Buches verlängern."
    }
  ],
  "gender": "m",
  "tab": "roots",
  "topic": "чит",
  "plural": "чит+атели"
},
{
  "id": "ru-content26-root-chtenie",
  "t": "чт+ение",
  "pos": "noun",
  "level": "B1",
  "en": "reading",
  "de": "das Lesen",
  "examples": [
    {
      "t": "Ежедн+евное [[чт+ение]] помог+ает расшир+ять слов+арь.",
      "en": "Daily reading helps expand vocabulary.",
      "de": "Tägliches Lesen hilft, den Wortschatz zu erweitern."
    }
  ],
  "gender": "n",
  "tab": "roots",
  "topic": "чит",
  "note": {
    "en": "Normally used in the singular in this sense; other senses may differ.",
    "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
  }
},
{
  "id": "ru-content26-root-chitabelny",
  "t": "чит+абельный",
  "pos": "adj",
  "level": "B2",
  "en": "readable",
  "de": "lesbar",
  "examples": [
    {
      "t": "П+осле редакт+уры текст стал [[чит+абельным]].",
      "en": "After editing, the text became readable.",
      "de": "Nach der Bearbeitung wurde der Text lesbar."
    }
  ],
  "note": {
    "en": "Colloquial / editorial adjective for a text that is easy or pleasant to read.",
    "de": "Umgangssprachlich bzw. redaktionell für einen gut lesbaren Text."
  },
  "tab": "roots",
  "topic": "чит"
},
{
  "id": "ru-content26-root-nachitanny",
  "t": "нач+итанный",
  "pos": "adj",
  "level": "B2",
  "en": "well-read",
  "de": "belesen",
  "examples": [
    {
      "t": "Мой собес+едник — [[нач+итанный]] челов+ек.",
      "en": "The person I am talking to is well-read.",
      "de": "Mein Gesprächspartner ist ein belesener Mensch."
    }
  ],
  "tab": "roots",
  "topic": "чит"
}
]
});
GT.packs.ru.config.ROOT_PLAN.push("чит");

GT.registerRoot({
"id": "уч",
"verb": "уч+ить",
"t": "уч+ить",
"label": "УЧИТЬ",
"sub": "root -уч-",
"en": "to learn; to teach",
"de": "lernen; lehren",
"note": {
  "en": "Учить слова = learn words; учить ребёнка читать = teach a child to read. Изучать usually means systematic study. Prefixes are not interchangeable aspect markers: изучить, выучить and научиться describe different results. Разучивать a song means rehearse or learn it; разучиться means lose a skill.",
  "de": "Учить слова heißt Wörter lernen; учить ребёнка читать heißt einem Kind das Lesen beibringen. Изучать bezeichnet meist systematisches Studieren. Präfixe sind keine austauschbaren Aspektmarker: изучить, выучить und научиться beschreiben verschiedene Ergebnisse. Разучивать песню heißt ein Lied einüben; разучиться heißt eine Fähigkeit verlernen."
},
"words": [
{
  "id": "ru-content26-root-uchit",
  "t": "уч+ить",
  "pos": "verb",
  "aspect": "impf",
  "level": "A2",
  "en": "learn; teach",
  "de": "lernen; lehren",
  "core": true,
  "forms": {
    "praes": "уч+у, +учишь",
    "praet": "уч+ил",
    "perf": "pf. в+ыучить"
  },
  "pair": "в+ыучить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Я [[уч+у]] н+овые слов+а к+аждый день.",
      "en": "I learn new words every day.",
      "de": "Ich lerne jeden Tag neue Wörter."
    },
    {
      "t": "Он+а [[+учит]] ребёнка чит+ать.",
      "en": "She teaches the child to read.",
      "de": "Sie bringt dem Kind das Lesen bei."
    }
  ],
  "base": true,
  "tab": "roots",
  "topic": "уч"
},
{
  "id": "ru-content26-root-izuchat",
  "t": "изуч+ать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "study",
  "de": "untersuchen; studieren",
  "core": true,
  "forms": {
    "praes": "изуч+аю, изуч+аешь",
    "praet": "изуч+ал",
    "perf": "pf. изуч+ить"
  },
  "pair": "изуч+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "На к+урсе мы [[изуч+аем]] осн+овы экон+омики.",
      "en": "On the course we study the basics of economics.",
      "de": "Im Kurs studieren wir die Grundlagen der Wirtschaft."
    }
  ],
  "prefix": "из",
  "tab": "roots",
  "topic": "уч"
},
{
  "id": "ru-content26-root-vyuchit",
  "t": "в+ыучить",
  "pos": "verb",
  "aspect": "pf",
  "level": "B1",
  "en": "learn by heart",
  "de": "auswendig lernen",
  "core": true,
  "forms": {
    "praes": "в+ыучу, в+ыучишь",
    "praet": "в+ыучил",
    "perf": "impf. уч+ить"
  },
  "pair": "уч+ить",
  "pairLabel": "Imperfective",
  "examples": [
    {
      "t": "Мне н+ужно [[в+ыучить]] +эти слов+а до п+ятницы.",
      "en": "I need to learn these words by heart by Friday.",
      "de": "Ich muss diese Wörter bis Freitag auswendig lernen."
    }
  ],
  "prefix": "вы",
  "tab": "roots",
  "topic": "уч",
  "transparency": "transparent",
  "prefixDrill": {
    "ex": 0,
    "meaning": 1,
    "explain": {
      "en": "вы- highlights an achieved learning result.",
      "de": "вы- betont das erreichte Lernergebnis."
    }
  }
},
Object.assign(GT.packs.ru.byId["ru-pro4-obuchat"], {
  "core": true,
  "prefix": "о",
  "pair": "обуч+ить",
  "pairLabel": "Perfective"
}),
{
  "id": "ru-content26-root-nauchitsya",
  "t": "науч+иться",
  "pos": "verb",
  "aspect": "pf",
  "level": "B1",
  "en": "learn how to",
  "de": "lernen, etwas zu tun",
  "core": true,
  "forms": {
    "praes": "науч+усь, на+учишься",
    "praet": "науч+ился",
    "perf": "impf. уч+иться"
  },
  "pair": "уч+иться",
  "pairLabel": "Imperfective",
  "examples": [
    {
      "t": "Я хоч+у [[науч+иться]] вест+и перегов+оры.",
      "en": "I want to learn how to conduct negotiations.",
      "de": "Ich möchte lernen, Verhandlungen zu führen."
    }
  ],
  "prefix": "на",
  "tab": "roots",
  "topic": "уч"
},
{
  "id": "ru-content26-root-pereuchivat",
  "t": "пере+учивать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "retrain",
  "de": "umschulen",
  "core": true,
  "forms": {
    "praes": "пере+учиваю, пере+учиваешь",
    "praet": "пере+учивал",
    "perf": "pf. переуч+ить"
  },
  "pair": "переуч+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Комп+ания [[пере+учивает]] сотр+удников для н+овых зад+ач.",
      "en": "The company retrains employees for new tasks.",
      "de": "Das Unternehmen schult Mitarbeitende für neue Aufgaben um."
    }
  ],
  "prefix": "пере",
  "tab": "roots",
  "topic": "уч"
},
{
  "id": "ru-content26-root-razuchivat",
  "t": "раз+учивать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "rehearse",
  "de": "einüben",
  "core": true,
  "forms": {
    "praes": "раз+учиваю, раз+учиваешь",
    "praet": "раз+учивал",
    "perf": "pf. разуч+ить"
  },
  "pair": "разуч+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Хор [[раз+учивает]] н+овую п+есню.",
      "en": "The choir rehearses a new song.",
      "de": "Der Chor übt ein neues Lied ein."
    }
  ],
  "prefix": "раз",
  "tab": "roots",
  "topic": "уч"
},
{
  "id": "ru-content26-root-uchenik",
  "t": "учен+ик",
  "pos": "noun",
  "level": "B1",
  "en": "pupil",
  "de": "der Schüler",
  "examples": [
    {
      "t": "К+аждый [[учен+ик]] получ+ил отд+ельное зад+ание.",
      "en": "Every pupil received an individual task.",
      "de": "Jeder Schüler bekam eine eigene Aufgabe."
    }
  ],
  "gender": "m",
  "tab": "roots",
  "topic": "уч",
  "plural": "ученик+и"
},
{
  "id": "ru-content26-root-uchitel",
  "t": "уч+итель",
  "pos": "noun",
  "level": "B1",
  "en": "teacher",
  "de": "der Lehrer",
  "examples": [
    {
      "t": "[[Уч+итель]] объясн+ил пр+авило на прим+ере.",
      "en": "The teacher explained the rule with an example.",
      "de": "Der Lehrer erklärte die Regel an einem Beispiel."
    }
  ],
  "gender": "m",
  "tab": "roots",
  "topic": "уч",
  "plural": "учител+я"
},
{
  "id": "ru-content26-root-uchyoba",
  "t": "учёба",
  "pos": "noun",
  "level": "B1",
  "en": "studies",
  "de": "das Lernen",
  "examples": [
    {
      "t": "[[Учёба]] заним+ает почт+и всё моё вр+емя.",
      "en": "My studies take up almost all my time.",
      "de": "Das Lernen nimmt fast meine gesamte Zeit in Anspruch."
    }
  ],
  "gender": "f",
  "tab": "roots",
  "topic": "уч",
  "note": {
    "en": "Normally used in the singular in this sense; other senses may differ.",
    "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
  }
}
]
});
GT.packs.ru.config.ROOT_PLAN.push("уч");

GT.registerRoot({
"id": "дум",
"verb": "д+умать",
"t": "д+умать",
"label": "ДУМАТЬ",
"sub": "root -дум-",
"en": "to think",
"de": "denken",
"note": {
  "en": "The root stays recognisable, but each verb has its own use: придумать = come up with, передумать = change your mind, продумать = think through. In выдумывать the ordinary sense here is inventing an untrue story. Learn the meaning from the example rather than translating a prefix mechanically.",
  "de": "Die Wurzel bleibt erkennbar, doch jedes Verb hat seinen eigenen Gebrauch: придумать = sich ausdenken, передумать = es sich anders überlegen, продумать = durchdenken. Выдумывать bedeutet hier eine unwahre Geschichte erfinden. Die Bedeutung ergibt sich aus dem Beispiel, nicht aus einer mechanischen Präfixübersetzung."
},
"words": [
{
  "id": "ru-content26-root-dumat",
  "t": "д+умать",
  "pos": "verb",
  "aspect": "impf",
  "level": "A2",
  "en": "think",
  "de": "denken",
  "core": true,
  "forms": {
    "praes": "д+умаю, д+умаешь",
    "praet": "д+умал",
    "perf": "pf. под+умать"
  },
  "pair": "под+умать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Я [[д+умаю]] о сл+едующем ш+аге.",
      "en": "I am thinking about the next step.",
      "de": "Ich denke über den nächsten Schritt nach."
    }
  ],
  "base": true,
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-podumat",
  "t": "под+умать",
  "pos": "verb",
  "aspect": "pf",
  "level": "B1",
  "en": "think for a while",
  "de": "eine Weile nachdenken",
  "core": true,
  "forms": {
    "praes": "под+умаю, под+умаешь",
    "praet": "под+умал",
    "perf": "impf. д+умать"
  },
  "pair": "д+умать",
  "pairLabel": "Imperfective",
  "examples": [
    {
      "t": "Мне н+ужно [[под+умать]] п+еред отв+етом.",
      "en": "I need to think for a while before answering.",
      "de": "Ich muss eine Weile nachdenken, bevor ich antworte."
    }
  ],
  "prefix": "по",
  "tab": "roots",
  "topic": "дум",
  "transparency": "transparent",
  "prefixDrill": {
    "ex": 0,
    "meaning": 1,
    "explain": {
      "en": "по- limits the thinking to a period of time.",
      "de": "по- begrenzt das Nachdenken auf eine gewisse Zeit."
    }
  }
},
{
  "id": "ru-content26-root-obdumyvat",
  "t": "обд+умывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "consider carefully",
  "de": "überdenken",
  "core": true,
  "forms": {
    "praes": "обд+умываю, обд+умываешь",
    "praet": "обд+умывал",
    "perf": "pf. обд+умать"
  },
  "pair": "обд+умать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Мы [[обд+умываем]] все возм+ожные вари+анты.",
      "en": "We are considering all possible options carefully.",
      "de": "Wir überdenken alle möglichen Optionen."
    }
  ],
  "prefix": "о",
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-pridumyvat",
  "t": "прид+умывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "come up with",
  "de": "sich ausdenken",
  "core": true,
  "forms": {
    "praes": "прид+умываю, прид+умываешь",
    "praet": "прид+умывал",
    "perf": "pf. прид+умать"
  },
  "pair": "прид+умать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Ком+анда [[прид+умывает]] назв+ание для про+екта.",
      "en": "The team is coming up with a name for the project.",
      "de": "Das Team denkt sich einen Namen für das Projekt aus."
    }
  ],
  "prefix": "при",
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-zadumyvatsya",
  "t": "зад+умываться",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "reflect on",
  "de": "nachdenken über",
  "core": true,
  "forms": {
    "praes": "зад+умываюсь, зад+умываешься",
    "praet": "зад+умывался",
    "perf": "pf. зад+уматься"
  },
  "pair": "зад+уматься",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Я ч+асто [[зад+умываюсь]] о см+ене проф+ессии.",
      "en": "I often reflect on changing careers.",
      "de": "Ich denke oft über einen Berufswechsel nach."
    }
  ],
  "prefix": "за",
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-peredumyvat",
  "t": "перед+умывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "change one's mind",
  "de": "es sich anders überlegen",
  "core": true,
  "forms": {
    "praes": "перед+умываю, перед+умываешь",
    "praet": "перед+умывал",
    "perf": "pf. перед+умать"
  },
  "pair": "перед+умать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Он ч+асто [[перед+умывает]] в посл+едний мом+ент.",
      "en": "He often changes his mind at the last moment.",
      "de": "Er überlegt es sich oft im letzten Moment anders."
    }
  ],
  "prefix": "пере",
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-produmyvat",
  "t": "прод+умывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "think through",
  "de": "durchdenken",
  "core": true,
  "forms": {
    "praes": "прод+умываю, прод+умываешь",
    "praet": "прод+умывал",
    "perf": "pf. прод+умать"
  },
  "pair": "прод+умать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Мы [[прод+умываем]] план на сл+учай сб+оя.",
      "en": "We are thinking through a plan in case of a failure.",
      "de": "Wir durchdenken einen Plan für den Fall eines Ausfalls."
    }
  ],
  "prefix": "про",
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-vydumyvat",
  "t": "выд+умывать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "make up a story",
  "de": "eine Geschichte erfinden",
  "core": false,
  "forms": {
    "praes": "выд+умываю, выд+умываешь",
    "praet": "выд+умывал",
    "perf": "pf. в+ыдумать"
  },
  "pair": "в+ыдумать",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Не н+адо [[выд+умывать]] оправд+ания.",
      "en": "There is no need to make up excuses.",
      "de": "Du brauchst keine Ausreden zu erfinden."
    }
  ],
  "prefix": "вы",
  "tab": "roots",
  "topic": "дум"
},
{
  "id": "ru-content26-root-zadumka",
  "t": "зад+умка",
  "pos": "noun",
  "level": "B2",
  "en": "idea, concept (informal)",
  "de": "die Idee, der Einfall (ugs.)",
  "examples": [
    {
      "t": "В +этом про+екте мне нр+авится сам+а [[зад+умка]].",
      "en": "What I like about this project is the idea itself.",
      "de": "An diesem Projekt gefällt mir die Idee an sich."
    }
  ],
  "gender": "f",
  "tab": "roots",
  "topic": "дум",
  "plural": "зад+умки"
},
{
  "id": "ru-content26-root-razdumye",
  "t": "разд+умье",
  "pos": "noun",
  "level": "B2",
  "en": "reflection",
  "de": "das Nachdenken",
  "examples": [
    {
      "t": "Он погруз+ился в [[разд+умье]].",
      "en": "He sank into reflection.",
      "de": "Er versank ins Nachdenken."
    }
  ],
  "gender": "n",
  "tab": "roots",
  "topic": "дум",
  "plural": "разд+умья"
}
]
});
GT.packs.ru.config.ROOT_PLAN.push("дум");

GT.registerRoot({
"id": "мен",
"verb": "мен+ять",
"t": "мен+ять",
"label": "МЕНЯТЬ",
"sub": "root -мен-",
"en": "to change; to exchange",
"de": "ändern; tauschen",
"note": {
  "en": "Менять планы = change plans; менять деньги = exchange money. Prefixes make useful distinctions: заменить = replace, обменять = exchange, отменить = cancel, разменять = break a banknote. These are related words, not interchangeable translations of change.",
  "de": "Менять планы heißt Pläne ändern; менять деньги heißt Geld wechseln. Präfixe unterscheiden ersetzen (заменить), umtauschen (обменять), absagen (отменить) und einen Geldschein wechseln (разменять). Die verwandten Wörter sind keine austauschbaren Übersetzungen von ändern."
},
"words": [
{
  "id": "ru-content26-root-menyat",
  "t": "мен+ять",
  "pos": "verb",
  "aspect": "impf",
  "level": "A2",
  "en": "change",
  "de": "ändern",
  "core": true,
  "forms": {
    "praes": "мен+яю, мен+яешь",
    "praet": "мен+ял",
    "perf": "pf. помен+ять"
  },
  "pair": "помен+ять",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Мы [[мен+яем]] план из-за пог+оды.",
      "en": "We are changing the plan because of the weather.",
      "de": "Wir ändern den Plan wegen des Wetters."
    }
  ],
  "base": true,
  "tab": "roots",
  "topic": "мен"
},
{
  "id": "ru-content26-root-zamenyat",
  "t": "замен+ять",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "replace",
  "de": "ersetzen",
  "core": true,
  "forms": {
    "praes": "замен+яю, замен+яешь",
    "praet": "замен+ял",
    "perf": "pf. замен+ить"
  },
  "pair": "замен+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Мы [[замен+яем]] ст+арое обор+удование.",
      "en": "We are replacing the old equipment.",
      "de": "Wir ersetzen die alten Geräte."
    }
  ],
  "prefix": "за",
  "tab": "roots",
  "topic": "мен"
},
{
  "id": "ru-content26-root-obmenivat",
  "t": "обм+енивать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "exchange",
  "de": "wechseln; umtauschen",
  "core": true,
  "forms": {
    "praes": "обм+ениваю, обм+ениваешь",
    "praet": "обм+енивал",
    "perf": "pf. обмен+ять"
  },
  "pair": "обмен+ять",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "В +этом п+ункте [[обм+енивают]] вал+юту.",
      "en": "Currency is exchanged at this office.",
      "de": "In dieser Wechselstube wird Währung gewechselt."
    }
  ],
  "prefix": "о",
  "tab": "roots",
  "topic": "мен"
},
{
  "id": "ru-content26-root-izmenyat",
  "t": "измен+ять",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "modify",
  "de": "verändern",
  "core": true,
  "forms": {
    "praes": "измен+яю, измен+яешь",
    "praet": "измен+ял",
    "perf": "pf. измен+ить"
  },
  "pair": "измен+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Н+овые д+анные [[измен+яют]] н+аше представл+ение о пробл+еме.",
      "en": "The new data modify our understanding of the problem.",
      "de": "Die neuen Daten verändern unsere Vorstellung des Problems."
    }
  ],
  "prefix": "из",
  "tab": "roots",
  "topic": "мен"
},
{
  "id": "ru-content26-root-otmenyat",
  "t": "отмен+ять",
  "pos": "verb",
  "aspect": "impf",
  "level": "B1",
  "en": "cancel",
  "de": "absagen",
  "core": true,
  "forms": {
    "praes": "отмен+яю, отмен+яешь",
    "praet": "отмен+ял",
    "perf": "pf. отмен+ить"
  },
  "pair": "отмен+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "Организ+аторы [[отмен+яют]] встр+ечу из-за пог+оды.",
      "en": "The organisers are cancelling the meeting because of the weather.",
      "de": "Die Veranstalter sagen das Treffen wegen des Wetters ab."
    }
  ],
  "prefix": "от",
  "tab": "roots",
  "topic": "мен"
},
{
  "id": "ru-content26-root-razmenivat",
  "t": "разм+енивать",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "break a banknote",
  "de": "einen Geldschein wechseln",
  "core": true,
  "forms": {
    "praes": "разм+ениваю, разм+ениваешь",
    "praet": "разм+енивал",
    "perf": "pf. размен+ять"
  },
  "pair": "размен+ять",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "В к+ассе [[разм+енивают]] кр+упные куп+юры.",
      "en": "Large banknotes are broken into smaller denominations at the till.",
      "de": "An der Kasse werden große Geldscheine gewechselt."
    }
  ],
  "prefix": "раз",
  "tab": "roots",
  "topic": "мен",
  "transparency": "transparent",
  "prefixDrill": {
    "ex": 0,
    "meaning": 0,
    "explain": {
      "en": "раз- = splitting a large banknote into smaller denominations.",
      "de": "раз- = einen großen Geldschein in kleinere Einheiten aufteilen."
    }
  }
},
{
  "id": "ru-content26-root-smenyat",
  "t": "смен+ять",
  "pos": "verb",
  "aspect": "impf",
  "level": "B2",
  "en": "relieve someone on a shift",
  "de": "ablösen",
  "core": true,
  "forms": {
    "praes": "смен+яю, смен+яешь",
    "praet": "смен+ял",
    "perf": "pf. смен+ить"
  },
  "pair": "смен+ить",
  "pairLabel": "Perfective",
  "examples": [
    {
      "t": "В в+осемь час+ов я [[смен+яю]] колл+егу.",
      "en": "At eight o'clock I relieve my colleague on the shift.",
      "de": "Um acht Uhr löse ich meinen Kollegen ab."
    }
  ],
  "prefix": "с",
  "tab": "roots",
  "topic": "мен"
},
{
  "id": "ru-content26-root-peremena",
  "t": "перем+ена",
  "pos": "noun",
  "level": "B1",
  "en": "change",
  "de": "die Veränderung",
  "examples": [
    {
      "t": "П+осле пере+езда в ж+изни произошл+и больш+ие [[перем+ены]].",
      "en": "After the move, big changes took place in life.",
      "de": "Nach dem Umzug gab es große Veränderungen im Leben."
    }
  ],
  "gender": "f",
  "tab": "roots",
  "topic": "мен",
  "plural": "перем+ены"
},
{
  "id": "ru-content26-root-zamena",
  "t": "зам+ена",
  "pos": "noun",
  "level": "B1",
  "en": "replacement",
  "de": "der Ersatz",
  "examples": [
    {
      "t": "Н+овая дет+аль подойдёт как [[зам+ена]] ст+арой.",
      "en": "The new part will work as a replacement for the old one.",
      "de": "Das neue Teil eignet sich als Ersatz für das alte."
    }
  ],
  "gender": "f",
  "tab": "roots",
  "topic": "мен",
  "plural": "зам+ены"
},
{
  "id": "ru-content26-root-obmen",
  "t": "обм+ен",
  "pos": "noun",
  "level": "B1",
  "en": "exchange",
  "de": "der Austausch",
  "examples": [
    {
      "t": "[[Обм+ен]] +опытом пол+езен об+еим ком+андам.",
      "en": "An exchange of experience benefits both teams.",
      "de": "Ein Erfahrungsaustausch ist für beide Teams nützlich."
    }
  ],
  "gender": "m",
  "tab": "roots",
  "topic": "мен",
  "plural": "обм+ены"
}
]
});
GT.packs.ru.config.ROOT_PLAN.push("мен");

/* Late memberships: all referenced RU cards have now loaded. */
GT.addMember("ru-r-stav-vystavka", "words", "leisure");
GT.addMember("ru-r-zna-znanie", "words", "society");
GT.addMember("ru-pro2-obratnaya-svyaz", "words", "b2_education");
GT.addMember("ru-r-vod-vyvod", "words", "b2_science");
GT.addMember("ru-pro5-pogreshnost", "words", "b2_science");
GT.addMember("ru-pro4-ubeditelny", "words", "c1_argumentation");
GT.addMember("ru-w-zayavlenie", "it", "bureau_offices");
GT.addMember("ru-w-registraciya", "it", "bureau_offices");
GT.addMember("ru-w-nalog", "it", "bureau_tax");
GT.addMember("ru-pro2-otchyotnost", "it", "bureau_tax");
GT.addMember("ru-w3-doverennost", "it", "bureau_docs");
GT.addMember("ru-w4-zaverennaya-kopiya", "it", "bureau_docs");
GT.addMember("ru-r-govor-dogovor", "it", "legal_contracts");
GT.addMember("ru-pro5-nda", "it", "legal_contracts");
GT.addMember("ru-content26-sci-dokazatelstvo", "it", "legal_criminal");
GT.addMember("ru-pro3-ispytatelny", "it", "legal_labour");
GT.addMember("ru-w2-vyhodnoe-posobie", "it", "legal_labour");
GT.addMember("ru-w4-konflikt-interesov", "it", "legal_corporate");
GT.addMember("ru-pro3-konfidentsialnost", "it", "legal_corporate");
GT.addMember("ru-w-gostinica", "it", "svc_hotel");
GT.addMember("ru-w-menyu", "it", "svc_gastro");
GT.addMember("ru-w4-grafik-smen", "it", "svc_gastro");
GT.addMember("ru-w-vozvrat", "it", "svc_retail");
GT.addMember("ru-w-kassa", "it", "svc_retail");
GT.addMember("ru-pro5-prosrochka", "it", "fin_accounting");
GT.addMember("ru-pro4-konversiya", "it", "fin_marketing");
GT.addMember("ru-w4-okhvat", "it", "fin_marketing");
GT.addMember("ru-pro3-tekuchest", "it", "fin_hr");
GT.addMember("ru-w-trudoustroystvo", "it", "fin_hr");
GT.addMember("ru-w3-diagnoz", "it", "med_clinical");
GT.addMember("ru-w3-lechenie", "it", "med_clinical");
GT.addMember("ru-r-stav-dostavka", "it", "ops_logistics");
GT.addMember("ru-r-voz-perevozka", "it", "ops_logistics");
GT.addMember("ru-pro4-smeta", "it", "ops_trades");
GT.addMember("ru-pro5-akt-priyomki", "it", "ops_trades");

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.packs.ru.byId["ru-content26-trade-maintenance"].examples.push({
  "t": "Во вр+емя [[техн+ического обсл+уживания]] стан+ок недост+упен.",
  "de": "Die Maschine ist während der Wartung nicht verfügbar.",
  "en": "The machine is unavailable during maintenance.",
  "sense": {
    "en": "maintenance",
    "de": "die Wartung"
  }
});

(GT.packs.ru.byId["ru-content26-trade-maintenance"].sourceRefs || (GT.packs.ru.byId["ru-content26-trade-maintenance"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 23,
  "headword": "Wartung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-pro4-predoplata"].examples.push({
  "t": "[[Предопл+ата]] б+удет учтен+а в оконч+ательном счёте.",
  "de": "Die Vorauszahlung wird mit der Schlussrechnung verrechnet.",
  "en": "The advance payment will be offset against the final invoice.",
  "sense": {
    "en": "advance payment",
    "de": "die Vorauszahlung"
  }
});

(GT.packs.ru.byId["ru-pro4-predoplata"].sourceRefs || (GT.packs.ru.byId["ru-pro4-predoplata"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 25,
  "headword": "Vorauszahlung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-pro4-predoplata"].plural = "предопл+аты";

GT.packs.ru.byId["ru-w3-rabochiy-den"].examples.push({
  "t": "В предлож+ении срок дост+авки ук+азан в [[раб+очих днях]].",
  "de": "Die Lieferzeit wird im Angebot in Werktagen angegeben.",
  "en": "The quote states the delivery time in working days.",
  "sense": {
    "en": "working day",
    "de": "der Werktag"
  }
});

(GT.packs.ru.byId["ru-w3-rabochiy-den"].sourceRefs || (GT.packs.ru.byId["ru-w3-rabochiy-den"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 25,
  "headword": "Werktag",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-w3-rabochiy-den"].plural = "раб+очие дни";

GT.packs.ru.byId["ru-pro5-otgul"].examples.push({
  "t": "В пл+ане учтён [[отг+ул]] за отраб+отанные сверхур+очные час+ы.",
  "de": "Die geleisteten Überstunden werden im Plan als Freizeitausgleich berücksichtigt.",
  "en": "The plan accounts for the overtime as time off in lieu.",
  "sense": {
    "en": "time off in lieu",
    "de": "der Freizeitausgleich"
  }
});

(GT.packs.ru.byId["ru-pro5-otgul"].sourceRefs || (GT.packs.ru.byId["ru-pro5-otgul"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 33,
  "headword": "Freizeitausgleich",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-pro5-otgul"].plural = "отг+улы";

GT.packs.ru.byId["ru-w2-podrabotka"].examples.push({
  "t": "Он+а обсужд+ает план+ируемую [[подраб+отку]] с отд+елом к+адров.",
  "de": "Sie bespricht ihre geplante Nebentätigkeit mit der Personalabteilung.",
  "en": "She is discussing her planned secondary employment with HR.",
  "sense": {
    "en": "secondary employment",
    "de": "die Nebentätigkeit"
  }
});

(GT.packs.ru.byId["ru-w2-podrabotka"].sourceRefs || (GT.packs.ru.byId["ru-w2-podrabotka"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 35,
  "headword": "Nebentätigkeit",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-w2-podrabotka"].plural = "подраб+отки";

GT.packs.ru.byId["ru-r-pros-prosba"].examples.push({
  "t": "Он в+ежливо излож+ил сво+ю [[пр+осьбу]] по телеф+ону.",
  "de": "Er schilderte sein Anliegen höflich am Telefon.",
  "en": "He politely explained his request on the phone.",
  "sense": {
    "en": "request",
    "de": "das Anliegen"
  }
});

(GT.packs.ru.byId["ru-r-pros-prosba"].sourceRefs || (GT.packs.ru.byId["ru-r-pros-prosba"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 16,
  "headword": "Anliegen",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-r-pros-prosba"].plural = "пр+осьбы";

GT.packs.ru.byId["ru-w4-retain"].examples.push({
  "t": "Банк [[удерж+ал]] ком+иссию.",
  "de": "Die Bank behielt eine Gebühr ein.",
  "en": "The bank withheld a fee.",
  "sense": {
    "en": "withhold",
    "de": "einbehalten"
  }
});

(GT.packs.ru.byId["ru-w4-retain"].sourceRefs || (GT.packs.ru.byId["ru-w4-retain"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 36,
  "headword": "einbehalten",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.ru.byId["ru-r-da-peredavat"].examples.push({
  "t": "Колл+ега [[передаёт]] в+аше сообщ+ение.",
  "de": "Die Kollegin richtet Ihre Nachricht aus.",
  "en": "The colleague passes on your message.",
  "sense": {
    "en": "pass on",
    "de": "ausrichten"
  }
});

(GT.packs.ru.byId["ru-r-da-peredavat"].sourceRefs || (GT.packs.ru.byId["ru-r-da-peredavat"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 26,
  "headword": "ausrichten",
  "selection": "telc-b2-2026-11-26"
});

GT.addMember("ru-telc26-lehrgang", "it", "b2_work");

GT.addMember("ru-telc26-vorkenntnisse", "it", "b2_work");

GT.addMember("ru-telc26-zulassung", "it", "b2_work");

GT.addMember("ru-telc26-fachwortschatz", "it", "b2_work");

GT.addMember("ru-telc26-einzelunternehmer", "it", "clients");

GT.addMember("ru-telc26-gehaltsvorstellung", "it", "fin_hr");

GT.addMember("ru-telc26-arbeitsablauf", "it", "ops_trades");

GT.addMember("ru-telc26-qualitaetssicherung", "it", "dev");

GT.addMember("ru-telc26-richtlinie", "it", "security");

GT.addMember("ru-telc26-datenblatt", "it", "ops_trades");

GT.addMember("ru-content26-trade-maintenance", "it", "infra");

GT.addMember("ru-telc26-eilzuschlag", "it", "clients");

GT.addMember("ru-telc26-nettopreis", "it", "clients");

GT.addMember("ru-telc26-bruttopreis", "it", "clients");

GT.addMember("ru-telc26-skonto", "it", "clients");

GT.addMember("ru-pro4-predoplata", "it", "fin_accounting");

GT.addMember("ru-w3-rabochiy-den", "it", "ops_logistics");

GT.addMember("ru-pro5-otgul", "it", "legal_labour");

GT.addMember("ru-w2-podrabotka", "it", "legal_labour");

GT.addMember("ru-r-pros-prosba", "it", "workcomm");

GT.addMember("ru-telc26-buchungsbestaetigung", "it", "svc_hotel");

GT.addMember("ru-telc26-fahrgemeinschaft", "it", "svc_hotel");

GT.addMember("ru-telc26-handwerklich", "it", "b2_work");

GT.addMember("ru-telc26-handwerklich", "it", "ops_trades");

GT.addMember("ru-telc26-belastbar", "it", "b2_work");

GT.addMember("ru-telc26-lernbereit", "it", "b2_work");

GT.addMember("ru-telc26-fehlerhaft", "words", "b2_media");

GT.addMember("ru-telc26-angemessen", "it", "workcomm");

GT.addMember("ru-telc26-absolvieren", "it", "b2_work");

GT.addMember("ru-w4-retain", "it", "bureau_tax");

GT.addMember("ru-r-da-peredavat", "it", "workcomm");

GT.addMember("ru-telc26-verallgemeinern", "it", "presentations");

GT.addMember("ru-telc26-bedingungen", "it", "clients");

GT.addMember("ru-telc26-ch-rechtzeitig-bescheid", "it", "workcomm");

GT.addMember("ru-telc26-ch-rechnung-begleichen", "it", "fin_accounting");

GT.addMember("ru-telc26-ch-schriftform", "it", "legal_contracts");

GT.addMember("ru-telc26-ch-ab-werk", "it", "ops_logistics");

GT.addMember("ru-telc26-ch-nachfrage", "it", "clients");

GT.addMember("ru-telc26-ch-gegenvorschlag", "it", "workcomm");

GT.addMember("ru-telc26-ch-verstaendnis", "it", "clients");

GT.packs.ru.byId["ru-content26-trade-maintenance"].note = {
  "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein.",
  "en": "Normally used in the singular in this sense; other senses may differ."
};

GT.packs.ru.byId["ru-w3-rabochiy-den"].note = {
  "de": "Flüchtiges e fällt im Genitiv weg: в конце́ рабо́чего дня.\n\nHier bezeichnet рабо́чий день eine Einheit der Lieferfrist, nicht die Dauer einer Schicht. Welche Tage zählen, ergibt sich aus den konkreten Bedingungen.",
  "en": "Fleeting е drops in oblique cases: в тече́ние рабо́чего дня (during the workday).\n\nHere a working day is used to state a delivery period, not the length of a shift. Read the actual terms for which days count."
};

GT.packs.ru.byId["ru-r-da-peredavat"].note = {
  "de": "Hier bedeutet передава́ть, jemandem eine Nachricht weiterzugeben.",
  "en": "Here передава́ть means to pass a message on to someone."
};

/* === Content expansion 2026-11-27 (8 new Russian root families: 5 verb + 3 word-building) === */
(function () {
  'use strict';
  var P = GT.packs.ru;
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function plain(s) { return String(s || '').replace(/[+́]/g, '').trim().toLowerCase(); }
  function existing(t) {
    var k = plain(t);
    return P.items.filter(function (x) { return plain(x.t) === k; })[0] || null;
  }
  function v(id, t, aspect, forms, en, de, e, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: 'ru-r27-' + id, pos: 'verb', t: t, aspect: aspect,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] },
      en: en, de: de, examples: [e], level: opts.level || 'B1'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.prefix) o.prefix = opts.prefix;
    if (opts.pair) o.pair = opts.pair;
    if (opts.pairLabel) o.pairLabel = opts.pairLabel;
    if (opts.tr) o.transparency = opts.tr;
    if (opts.pd) o.prefixDrill = opts.pd;
    if (opts.note) o.note = { en: opts.note[0], de: opts.note[1] };
    return o;
  }
  function n(id, t, gender, plural, en, de, e, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: 'ru-r27-' + id, pos: 'noun', t: t, gender: gender,
      plural: plural || undefined, en: en, de: de, examples: [e], level: opts.level || 'B1'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    return o;
  }
  function adj(id, t, en, de, e, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = { id: 'ru-r27-' + id, pos: 'adj', t: t, en: en, de: de, examples: [e], level: opts.level || 'B1' };
    if (opts.core) o.core = true;
    return o;
  }
  function addRoot(id, t, label, sub, en, de, note, words, extra) {
    extra = extra || {};
    GT.registerRoot(Object.assign({
      id: id, verb: t, t: t, label: label, sub: sub, en: en, de: de,
      note: { en: note[0], de: note[1] },
      words: words
    }, extra));
    if (P.config.ROOT_PLAN.indexOf(id) < 0) P.config.ROOT_PLAN.push(id);
  }

  /* 1. крыть */
  addRoot('кры', 'крыть', 'КРЫТЬ', 'root -кры-', 'to cover; roof', 'decken, bedecken',
    ['The bare verb крыть (“to cover a roof”) is rare on its own, while its prefixed derivatives are everywhere: открыть (open), закрыть (close), раскрыть (reveal/unfold), скрыть (hide), накрыть (cover/set the table).',
     'Das Grundverb крыть („ein Dach decken“) ist allein selten, seine Präfixverben sind allgegenwärtig: открыть (öffnen), закрыть (schließen), раскрыть (aufdecken), скрыть (verbergen), накрыть (bedecken/den Tisch decken).'], [
    v('kry-kryt', 'крыть', 'impf', ['кр+ою, кр+оешь', 'крыл', 'pf. покр+ыть'], 'to cover, roof', 'decken, bedecken',
      ex('Р+аньше крыши [[кр+ыли]] жёлтой череп+ицей.', 'In the past, roofs were covered with yellow tiles.', 'Früher deckte man Dächer mit gelben Ziegeln.'),
      { base: true }),
    v('kry-otkryt', 'откр+ыть', 'pf', ['откр+ою, откр+оешь', 'откр+ыл', 'impf. открыв+ать'], 'to open; to discover', 'öffnen; entdecken',
      ex('Не заб+удь [[откр+ыть]] окн+о после уб+орки.', 'Don’t forget to open the window after cleaning.', 'Vergiss nicht, nach dem Putzen das Fenster zu öffnen.'),
      { core: true, prefix: 'от', pair: 'открыв+ать', pairLabel: 'Imperfective', tr: 'transparent', pd: { ex: 0, meaning: 0, explain: { en: 'от- marks moving a cover away -> open.', de: 'от- steht für Wegnehmen/Öffnen.' } } }),
    v('kry-zakryt', 'закр+ыть', 'pf', ['закр+ою, закр+оешь', 'закр+ыл', 'impf. закрыв+ать'], 'to close, shut', 'schließen, zumachen',
      ex('[[Закр+ой]] дверь плотн+ее, на +улице х+олодно.', 'Shut the door tightly, it’s cold outside.', 'Mach die Tür fest zu, draußen ist es kalt.'),
      { core: true, prefix: 'за', pair: 'закрыв+ать', pairLabel: 'Imperfective', tr: 'transparent', pd: { ex: 0, meaning: 3, explain: { en: 'за- means closing or covering shut.', de: 'за- bedeutet Schließen, Zumachen.' } } }),
    v('kry-prikryt', 'прикр+ыть', 'pf', ['прикр+ою, прикр+оешь', 'прикр+ыл', 'impf. прикрыв+ать'], 'to cover lightly; to shelter, shield', 'leicht bedecken; decken, schützen',
      ex('Она [[прикр+ыла]] кастрюлю кр+ышкой, чтобы вода не выкипела.', 'She put the lid loosely on the pot so the water wouldn’t boil off.', 'Sie legte den Deckel locker auf den Topf, damit das Wasser nicht verkocht.'),
      { core: true, prefix: 'при', pair: 'прикрыв+ать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('kry-raskryt', 'раскр+ыть', 'pf', ['раскр+ою, раскр+оешь', 'раскр+ыл', 'impf. раскрыв+ать'], 'to uncover, reveal; to open wide', 'aufdecken, enthüllen; weit öffnen',
      ex('Журналистам удал+ось [[раскр+ыть]] сл+ожную схему обм+ана.', 'Journalists managed to uncover a complex fraud scheme.', 'Journalisten gelang es, ein komplexes Betrugsschema aufzudecken.'),
      { core: true, prefix: 'раз', pair: 'раскрыв+ать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2' }),
    v('kry-skryt', 'скрыть', 'pf', ['скр+ою, скр+оешь', 'скрыл', 'impf. скрыв+ать'], 'to hide, conceal', 'verbergen, verheimlichen',
      ex('От ауд+ита тр+удно [[скрыть]] такие расхожд+ения.', 'It is hard to conceal such discrepancies from an audit.', 'Vor einem Audit lassen sich solche Abweichungen kaum verbergen.'),
      { core: true, prefix: 'с', pair: 'скрыв+ать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2' }),
    v('kry-nakryt', 'накр+ыть', 'pf', ['накр+ою, накр+оешь', 'накр+ыл', 'impf. накрыв+ать'], 'to cover (over); to set (the table)', 'bedecken; (den Tisch) decken',
      ex('Гости придут через полчаса — пор+а [[накр+ыть]] на стол.', 'The guests arrive in half an hour — time to set the table.', 'Die Gäste kommen in einer halben Stunde — Zeit, den Tisch zu decken.'),
      { core: true, prefix: 'на', pair: 'накрыв+ать', pairLabel: 'Imperfective', tr: 'transparent' }),
    n('kry-krysha', 'кр+ыша', 'f', 'кр+ыши', 'roof', 'das Dach',
      ex('После бури на [[кр+ыше]] пришлось менять н+есколько лист+ов.', 'After the storm, several sheets on the roof had to be replaced.', 'Nach dem Sturm mussten einige Dachplatten ersetzt werden.')),
    n('kry-otkrytie', 'откр+ытие', 'n', 'откр+ытия', 'discovery; opening', 'die Entdeckung; Eröffnung',
      ex('Эта в+ыставка стала настоящим научным открытием.', 'This exhibition was a true discovery.', 'Diese Ausstellung war eine echte Entdeckung.'))
  ]);

  /* 2. держать */
  addRoot('держ', 'держ+ать', 'ДЕРЖАТЬ', 'root -держ-', 'to hold, keep', 'halten',
    ['Base verb держать (to hold/keep) gives key B1/B2 verbs: поддержать (support), удержать (hold back/retain), задержать (delay/detain), содержать (contain/maintain), выдержать (endure/withstand).',
     'Das Basisverb держать (halten) bildet wichtige B1/B2-Verben: поддержать (unterstützen), удержать (zurückhalten), задержать (aufhalten/festnehmen), содержать (enthalten/unterhalten), выдержать (aushalten).'], [
    v('derzh-derzhat', 'держ+ать', 'impf', ['держ+у, д+ержишь', 'держ+ал', 'pf. подерж+ать'], 'to hold, keep', 'halten',
      ex('[[Держ+и]] чашку двумя рук+ами, он+а горячая.', 'Hold the cup with both hands, it’s hot.', 'Halt die Tasse mit beiden Händen, sie ist heiß.'),
      { base: true }),
    v('derzh-podderzhat', 'поддерж+ать', 'pf', ['поддерж+у, подд+ержишь', 'поддерж+ал', 'impf. подд+ерживать'], 'to support, back up', 'unterstützen',
      ex('Коллеги [[поддерж+али]] её идею сократить лишние созв+оны.', 'Colleagues backed her idea to cut unnecessary calls.', 'Die Kollegen unterstützten ihre Idee, unnötige Calls zu kürzen.'),
      { core: true, prefix: 'под', pair: 'подд+ерживать', pairLabel: 'Imperfective', tr: 'figurative', pd: { ex: 0, meaning: 0, explain: { en: 'под- means holding from underneath -> support.', de: 'под- bedeutet von unten stützen -> unterstützen.' } } }),
    v('derzh-zaderzhat', 'задерж+ать', 'pf', ['задерж+у, зад+ержишь', 'задерж+ал', 'impf. зад+ерживать'], 'to delay, hold up; to detain', 'aufhalten, verzögern; festnehmen',
      ex('Непогода [[задерж+ала]] вылет самолёта на два часа.', 'Bad weather delayed the flight departure by two hours.', 'Schlechtes Wetter verzögerte den Abflug um zwei Stunden.'),
      { core: true, prefix: 'за', pair: 'зад+ерживать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2' }),
    v('derzh-soderzhat', 'содерж+ать', 'impf', ['содерж+у, сод+ержишь', 'содерж+ал', '—'], 'to contain; to maintain, support financially', 'enthalten; unterhalten, versorgen',
      ex('Отчёт [[сод+ержит]] все точные цифры за прошлый год.', 'The report contains all the exact figures for last year.', 'Der Bericht enthält alle genauen Zahlen für das letzte Jahr.'),
      { core: true, prefix: 'с', tr: 'figurative', level: 'B2' }),
    v('derzh-vyderzhat', 'в+ыдержать', 'pf', ['в+ыдержу, в+ыдержишь', 'в+ыдержал', 'impf. выд+ерживать'], 'to withstand, endure; to pass (a test)', 'aushalten, standhalten; bestehen',
      ex('Мост спокойно [[в+ыдержал]] проверку тяжелыми грузов+иками.', 'The bridge easily withstood testing with heavy lorries.', 'Die Brücke hielt der Prüfung mit schweren Lkws problemlos stand.'),
      { core: true, prefix: 'вы', pair: 'выд+ерживать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2' }),
    v('derzh-priderzhat', 'придерж+ать', 'pf', ['придерж+у, прид+ержишь', 'придерж+ал', 'impf. прид+ерживать'], 'to hold briefly (e.g. a door); to hold back', 'kurz aufhalten (z.B. die Tür); zurückhalten',
      ex('[[Придерж+и]] лифт, пож+алуйста, я бегу!', 'Hold the lift for a second, please, I’m running!', 'Halt bitte den Aufzug kurz auf, ich komme!'),
      { core: true, prefix: 'при', pair: 'прид+ерживать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('derzh-uderzhat', 'удерж+ать', 'pf', ['удерж+у, уд+ержишь', 'удерж+ал', 'impf. уд+ерживать'], 'to keep back, retain', 'zurückhalten, einbehalten'),
    n('derzh-podderzhka', 'подд+ержка', 'f', 'подд+ержки', 'support, backing', 'die Unterstützung',
      ex('Техническая [[подд+ержка]] отвечает в течение пятнадцати минут.', 'Technical support replies within fifteen minutes.', 'Der technische Support antwortet innerhalb von fünfzehn Minuten.')),
    n('derzh-soderzhanie', 'содерж+ание', 'n', 'содерж+ания', 'content, table of contents', 'der Inhalt',
      ex('В начале книги дано краткое [[содерж+ание]] глав.', 'A brief summary of contents is given at the front of the book.', 'Am Anfang des Buches steht eine kurze Inhaltsangabe.'))
  ]);

  /* 3. казать */
  addRoot('каз', 'каз+ать', 'КАЗАТЬ', 'root -каз-', 'to show, tell (bound root)', 'zeigen, sagen (gebundene Wurzel)',
    ['The root -каз- never appears unprefixed in everyday Russian, yet forms some of the most common verbs in the language: сказать (say), показать (show), рассказать (tell a story), доказать (prove), указать (indicate), отказать (refuse), заказать (order).',
     'Die Wurzel -каз- kommt ohne Präfix im Alltag nicht vor, bildet aber zentrale Verben: сказать (sagen), показать (zeigen), рассказать (erzählen), доказать (beweisen), указать (angeben), отказать (ablehnen), заказать (bestellen).'], [
    v('kaz-pokazat', 'показ+ать', 'pf', ['покаж+у, пок+ажешь', 'показ+ал', 'impf. пок+азывать'], 'to show, demonstrate', 'zeigen',
      ex('[[Покаж+и]] мне, где на схеме находится запасной в+ыход.', 'Show me where the emergency exit is on the diagram.', 'Zeig mir, wo auf dem Plan der Notausgang ist.'),
      { base: true, core: true, prefix: 'по', pair: 'пок+азывать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('kaz-skazat', 'сказ+ать', 'pf', ['скаж+у, ск+ажешь', 'сказ+ал', 'impf. говор+ить'], 'to say, tell', 'sagen',
      ex('Сл+ожно ср+азу [[сказ+ать]], сколько времени займёт ремонт.', 'It’s hard to say right away how long the repair will take.', 'Es ist schwer sofort zu sagen, wie lange die Reparatur dauert.'),
      { core: true, prefix: 'с', pair: 'говор+ить', pairLabel: 'Imperfective', tr: 'opaque' }),
    v('kaz-rasskazat', 'рассказ+ать', 'pf', ['расскаж+у, расск+ажешь', 'рассказ+ал', 'impf. расск+азывать'], 'to tell (a story), recount', 'erzählen',
      ex('Коллега подробно [[рассказ+ала]] о своей поездке на конференцию.', 'My colleague told us in detail about her trip to the conference.', 'Die Kollegin erzählte ausführlich von ihrer Reise zur Konferenz.'),
      { core: true, prefix: 'раз', pair: 'расск+азывать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('kaz-dokazat', 'доказ+ать', 'pf', ['докаж+у, док+ажешь', 'доказ+ал', 'impf. док+азывать'], 'to prove', 'beweisen',
      ex('Тесты помогл+и [[доказ+ать]], что ошибка была в старой версии.', 'Tests helped prove that the bug was in the old version.', 'Tests halfen zu beweisen, dass der Fehler in der alten Version lag.'),
      { core: true, prefix: 'до', pair: 'док+азывать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2' }),
    v('kaz-ukazat', 'указ+ать', 'pf', ['укаж+у, ук+ажешь', 'указ+ал', 'impf. ук+азывать'], 'to indicate, point out, specify', 'angeben, hinweisen auf',
      ex('В анкете нужно [[указ+ать]] актуальный адрес электронной почты.', 'In the form you need to state your current email address.', 'Im Formular muss man die aktuelle E-Mail-Adresse angeben.'),
      { core: true, prefix: 'у', pair: 'ук+азывать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2' }),
    v('kaz-otkazat', 'отказ+ать', 'pf', ['откаж+у, отк+ажешь', 'отказ+ал', 'impf. отк+азывать'], 'to refuse, turn down', 'ablehnen, verweigern',
      ex('Банк [[отказ+ал]] в кредите из-за неполного пакета справок.', 'The bank refused the loan due to an incomplete set of documents.', 'Die Bank lehnte den Kredit wegen unvollständiger Unterlagen ab.'),
      { core: true, prefix: 'от', pair: 'отк+азывать', pairLabel: 'Imperfective', tr: 'figurative', pd: { ex: 0, meaning: 1, explain: { en: 'от- in response -> turn down/refuse.', de: 'от- als Antwort -> ablehnen.' } } }),
    v('kaz-zakazat', 'заказ+ать', 'pf', ['закаж+у, зак+ажешь', 'заказ+ал', 'impf. зак+азывать'], 'to order, book', 'bestellen',
      ex('Мы [[заказ+али]] новые кресла для переговорной комнаты.', 'We ordered new chairs for the meeting room.', 'Wir haben neue Stühle für den Besprechungsraum bestellt.'),
      { core: true, prefix: 'за', pair: 'зак+азывать', pairLabel: 'Imperfective', tr: 'opaque' }),
    n('kaz-otkaz', 'отк+аз', 'm', 'отк+азы', 'refusal, rejection; failure (of a device)', 'die Ablehnung, Absage; der Ausfall',
      ex('После [[отк+аза]] они переработали заявку и подали её повторно.', 'After the rejection, they reworked the application and resubmitted it.', 'Nach der Absage überarbeiteten sie den Antrag und reichten ihn erneut ein.')),
    n('kaz-dokazatelstvo', 'доказ+ательство', 'n', 'доказ+ательства', 'proof, evidence', 'der Beweis',
      ex('Нужны надёжные [[доказ+ательства]] этого вывода.', 'Solid evidence for this conclusion is needed.', 'Für diesen Schluss braucht man belastbare Beweise.'))
  ]);

  /* 4. вязать */
  addRoot('вяз', 'вяз+ать', 'ВЯЗАТЬ', 'root -вяз- / -обяз-', 'to tie, bind; to knit', 'binden, verknüpfen; stricken',
    ['Note the consonant alternation з/ж (вязать → вяжу) and the Church Slavonic cognate об-язать (“oblige”, obligation). Key words: связать (connect), привязать (tie to), связь (connection), обязанность (duty).',
     'Beachte den Wechsel з/ж (вязать → вяжу) und das verwandte обязать („verpflichten“). Wichtige Wörter: связать (verbinden), связь (Verbindung), обязанность (Pflicht).'], [
    v('vyaz-vyazat', 'вяз+ать', 'impf', ['вяж+у, в+яжешь', 'вяз+ал', 'pf. связ+ать'], 'to tie, bind; to knit', 'binden; stricken',
      ex('Бабушка зимой любит [[вяз+ать]] тёплые шерстяные шарфы.', 'In winter, grandmother likes to knit warm woollen scarves.', 'Im Winter strickt Großmutter gern warme Wollschals.'),
      { base: true }),
    v('vyaz-svyazat', 'связ+ать', 'pf', ['свяж+у, св+яжешь', 'связ+ал', 'impf. св+язывать'], 'to connect, link, tie together', 'verbinden, verknüpfen',
      ex('Две ветки метро скоро [[св+яжут]] прямым переходом.', 'Two metro lines will soon be linked by a direct transfer corridor.', 'Zwei U-Bahn-Linien werden bald durch einen direkten Übergang verbunden.'),
      { core: true, prefix: 'с', pair: 'св+язывать', pairLabel: 'Imperfective', tr: 'transparent', pd: { ex: 0, meaning: 0, explain: { en: 'с- means bringing together -> connect.', de: 'с- bedeutet zusammen -> verbinden.' } } }),
    v('vyaz-privyazat', 'привяз+ать', 'pf', ['привяж+у, прив+яжешь', 'привяз+ал', 'impf. прив+язывать'], 'to tie to; to link (a card/account)', 'anbinden; verknüpfen (Konto/Karte)',
      ex('К аккаунту лучше сразу [[привяз+ать]] резервный номер телефона.', 'It is better to link a backup phone number to the account right away.', 'Mit dem Konto sollte man gleich eine Ersatznummer verknüpfen.'),
      { core: true, prefix: 'при', pair: 'прив+язывать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('vyaz-razvyazat', 'развяз+ать', 'pf', ['развяж+у, разв+яжешь', 'развяз+ал', 'impf. разв+язывать'], 'to untie, unfasten', 'aufbinden, lösen',
      ex('Узел затянули так туго, что его едва удалось [[развяз+ать]].', 'The knot was pulled so tight that it could barely be untied.', 'Der Knoten war so fest gezogen, dass er sich kaum lösen ließ.'),
      { core: true, prefix: 'раз', pair: 'разв+язывать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('vyaz-zavyazat', 'завяз+ать', 'pf', ['завяж+у, зав+яжешь', 'завяз+ал', 'impf. зав+язывать'], 'to tie up (laces); to strike up (a friendship/talk)', 'zubinden; anknüpfen',
      ex('Остановись на минуту, чтобы [[завяз+ать]] шнурки на ботинках.', 'Stop for a moment to tie your shoelaces.', 'Bleib kurz stehen, um deine Schnürsenkel zuzubinden.'),
      { core: true, prefix: 'за', pair: 'зав+язывать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('vyaz-obyazat', 'обяз+ать', 'pf', ['обяж+у, об+яжешь', 'обяз+ал', 'impf. об+язывать'], 'to oblige, require legally', 'verpflichten',
      ex('Новый закон [[обяз+ал]] банки предупреждать клиентов о комиссиях заранее.', 'The new law obliged banks to warn clients about fees in advance.', 'Das neue Gesetz verpflichtete Banken, Kunden vorab über Gebühren zu informieren.'),
      { core: true, prefix: 'о', pair: 'об+язывать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2' }),
    n('vyaz-svyaz', 'связь', 'f', 'св+язи', 'connection, link; communication', 'die Verbindung; Kommunikation',
      ex('В поезде за городом мобильная [[связь]] иногда пропадает.', 'On the train outside the city, mobile reception sometimes drops out.', 'Im Zug außerhalb der Stadt bricht die Mobilfunkverbindung manchmal ab.'), { core: true }),
    n('vyaz-obyazannost', 'об+язанность', 'f', 'об+язанности', 'duty, obligation', 'die Pflicht',
      ex('В его [[об+язанности]] входит проверка отчётов.', 'His duties include checking reports.', 'Zu seinen Pflichten gehört das Prüfen von Berichten.'))
  ]);

  /* 5. видеть */
  addRoot('вид', 'в+идеть', 'ВИДЕТЬ', 'root -вид-', 'to see', 'sehen',
    ['Important irregular-looking stem in 1sg (вижу, видишь). Key family members: увидеть (catch sight of), предвидеть (foresee), ненавидеть (hate — no prefix in roulette), завидовать (envy), вид (view/aspect), свидетель (witness).',
     'Wichtiger Wechsel in der 1. Person Singular (вижу, видишь). Zur Familie gehören: увидеть (erblicken), предвидеть (voraussehen), ненавидеть (hassen), завидовать (beneiden), вид (Anblick/Art), свидетель (Zeuge).'], [
    v('vid-videt', 'в+идеть', 'impf', ['в+ижу, в+идишь', 'в+идел', 'pf. ув+идеть'], 'to see', 'sehen',
      ex('С верхнего этажа хорошо [[в+идно]] весь исторический центр.', 'From the top floor you can clearly see the entire historic centre.', 'Vom obersten Stockwerk sieht man das ganze historische Zentrum gut.'),
      { base: true }),
    v('vid-uvidet', 'ув+идеть', 'pf', ['ув+ижу, ув+идишь', 'ув+идел', 'impf. в+идеть'], 'to catch sight of, see', 'erblicken, sehen',
      ex('В толпе на перроне он сразу [[ув+идел]] знакомое лицо.', 'In the crowd on the platform he immediately spotted a familiar face.', 'In der Menge auf dem Bahnsteig erblickte er sofort ein bekanntes Gesicht.'),
      { core: true, prefix: 'у', pair: 'в+идеть', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('vid-predvidet', 'предв+идеть', 'impf', ['предв+ижу, предв+идишь', 'предв+идел', '—'], 'to foresee, anticipate', 'vorhersehen, absehen',
      ex('Трудно было [[предв+идеть]] такой резкий рост спроса.', 'It was difficult to foresee such a sharp rise in demand.', 'Es war schwer, einen so starken Nachfrageanstieg vorherzusehen.'),
      { core: true, prefix: 'пред', tr: 'transparent', level: 'B2', pd: { ex: 0, meaning: 0, explain: { en: 'пред- = before -> see in advance.', de: 'пред- = vor -> vorhersehen.' } } }),
    v('vid-nenavidet', 'ненав+идеть', 'impf', ['ненав+ижу, ненав+идишь', 'ненав+идел', '—'], 'to hate, detest', 'hassen',
      ex('Он [[ненав+идит]] стоять в утренних пробках на выезде из города.', 'He hates sitting in morning traffic jams on the way out of town.', 'Er hasst es, morgens bei der Stadtausfahrt im Stau zu stehen.'),
      { level: 'B1' }),
    v('vid-zavidovat', 'зав+идовать', 'impf', ['зав+идую, зав+идуешь', 'зав+идовал', 'pf. позав+идовать'], 'to envy (+ Dat.)', 'beneiden (+ Dat.)',
      ex('Не стоит [[зав+идовать]] чужому успеху, не зная цены усилий.', 'There is no point envying someone else’s success without knowing the effort behind it.', 'Es lohnt nicht, fremden Erfolg zu beneiden, ohne den Preis dafür zu kennen.'),
      { level: 'B2' }),
    n('vid-vid', 'вид', 'm', 'в+иды', 'view; appearance; kind, type', 'der Ausblick; das Aussehen; die Art',
      ex('Из окна отеля открывается чудесный [[вид]] на залив.', 'From the hotel window there is a wonderful view of the bay.', 'Vom Hotelfenster bietet sich ein wunderbarer Blick auf die Bucht.'), { core: true }),
    n('vid-svidetel', 'свид+етель', 'm', 'свид+етели', 'witness', 'der Zeuge',
      ex('Главный [[свид+етель]] дал показания на заседании.', 'The main witness gave testimony at the hearing.', 'Der Hauptzeuge sagte in der Verhandlung aus.'))
  ]);

  /* 6. прав (Word-building family, mapVerbs: false) */
  addRoot('прав', 'пр+аво / пр+авить', 'ПРАВО / ПРАВИТЬ', 'root -прав-', 'right, rule; to steer, correct', 'Recht; steuern, korrigieren',
    ['One of Russian’s richest word-building roots (-прав-): исправить (correct), отправить (send), направить (direct), управлять (manage), правило (rule), справедливый (fair).',
     'Eine der reichsten russischen Wortfamilien (-прав-): исправить (korrigieren), отправить (schicken), направить (lenken), управлять (leiten), правило (Regel), справедливый (gerecht).'], [
    n('r-prav-pravo', 'пр+аво', 'n', 'прав+а', 'right; law', 'das Recht',
      ex('Каждый имеет [[пр+аво]] на отдых.', 'Everyone has the right to rest.', 'Jeder hat das Recht auf Erholung.'), { base: true }),
    v('r-prav-pravit', 'пр+авить', 'impf', ['пр+авлю, пр+авишь', 'пр+авил', 'pf. попр+авить'], 'to drive, steer; to edit, correct', 'lenken, steuern; korrigieren',
      ex('Редактор сам [[пр+авит]] заголовки перед печатью.', 'The editor personally edits the headlines before print.', 'Der Redakteur korrigiert die Überschriften vor dem Druck selbst.'),
      { core: true }),
    v('r-prav-ispravit', 'испр+авить', 'pf', ['испр+авлю, испр+авишь', 'испр+авил', 'impf. исправл+ять'], 'to correct, fix', 'korrigieren, beheben',
      ex('Разработчики быстро [[испр+авили]] ошибку в форме оплаты.', 'The developers quickly fixed the bug in the payment form.', 'Die Entwickler behoben den Fehler im Zahlungsformular schnell.'),
      { core: true }),
    v('r-prav-otpravit', 'отпр+авить', 'pf', ['отпр+авлю, отпр+авишь', 'отпр+авил', 'impf. отправл+ять'], 'to send, dispatch', 'schicken, absenden',
      ex('Не забудь [[отпр+авить]] подписанный акт по почте сегодня.', 'Don’t forget to send the signed certificate by post today.', 'Vergiss nicht, das unterschriebene Protokoll heute per Post abzuschicken.'),
      { core: true }),
    v('r-prav-napravit', 'напр+авить', 'pf', ['напр+авлю, напр+авишь', 'напр+авил', 'impf. направл+ять'], 'to direct, refer, forward', 'lenken, überweisen, weiterleiten',
      ex('Клиента [[напр+авили]] в профильный отдел поддержки.', 'The customer was directed to the specialist support desk.', 'Der Kunde wurde an den Fachsupport weitergeleitet.'),
      { core: true }),
    v('r-prav-upravlyat', 'управл+ять', 'impf', ['управл+яю, управл+яешь', 'управл+ял', '—'], 'to manage, steer, control (+ Instr.)', 'leiten, steuern (+ Instr.)',
      ex('Она [[управл+яет]] командой из двенадцати аналитиков.', 'She manages a team of twelve analysts.', 'Sie leitet ein Team von zwölf Analysten.'),
      { core: true, level: 'B2' }),
    n('r-prav-pravilo', 'пр+авило', 'n', 'пр+авила', 'rule', 'die Regel',
      ex('Важно соблюдать общие [[пр+авила]] безопасности.', 'It is important to follow the general safety rules.', 'Es ist wichtig, die allgemeinen Sicherheitsregeln einzuhalten.')),
    adj('r-prav-spravedlivyy', 'справедл+ивый', 'fair, just', 'gerecht',
      ex('Коллектив оценил это решение как [[справедл+ивое]].', 'The staff regarded the decision as fair.', 'Die Belegschaft bewertete diese Entscheidung als gerecht.'),
      { core: true, level: 'B2' }),
    n('r-prav-upravlenie', 'управл+ение', 'n', 'управл+ения', 'management, administration, control', 'die Leitung, Verwaltung, Steuerung',
      ex('[[Управл+ение]] крупными проектами требует ясных сроков.', 'Managing large projects requires clear deadlines.', 'Die Leitung großer Projekte erfordert klare Fristen.'),
      { level: 'B2' })
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 7. род (Word-building family, mapVerbs: false) */
  addRoot('род', 'род', 'РОД', 'root -род-', 'kin, birth, origin, nature', 'Geschlecht, Geburt, Herkunft',
    ['The root -род- links family, birthplace and nature: родить (give birth), родители (parents), родина (homeland), народ (people/nation), природа (nature), родной (native/dear), родственник (relative).',
     'Die Wurzel -род- verbindet Familie, Heimat und Natur: родить (gebären), родители (Eltern), родина (Heimat), народ (Volk), природа (Natur), родной (heimisch/eigen), родственник (Verwandter).'], [
    n('r-rod-rod', 'род', 'm', 'род+ы', 'kin, lineage; gender; kind, sort', 'das Geschlecht; die Art, Gattung',
      ex('У существительного «время» средний [[род]].', 'The noun “время” is neuter in gender.', 'Das Substantiv „время“ hat neutrales Geschlecht.'),
      { base: true }),
    v('r-rod-rodit', 'род+ить', 'pf', ['рож+у, род+ишь', 'род+ил / родил+а', 'impf. рожд+ать'], 'to give birth to', 'gebären',
      ex('Сестра [[родил+а]] второго сына прошлой весной.', 'My sister gave birth to her second son last spring.', 'Meine Schwester hat im letzten Frühjahr ihren zweiten Sohn zur Welt gebracht.'),
      { core: true }),
    n('r-rod-roditeli', 'род+ители', 'pl', 'род+ители', 'parents', 'die Eltern',
      ex('Мои [[род+ители]] живут в другом городе.', 'My parents live in another city.', 'Meine Eltern wohnen in einer anderen Stadt.')),
    n('r-rod-rodina', 'р+одина', 'f', 'р+одины', 'homeland', 'die Heimat',
      ex('Он часто вспоминает свою [[р+одину]].', 'He often thinks back to his homeland.', 'Er erinnert sich oft an seine Heimat.')),
    n('r-rod-narod', 'нар+од', 'm', 'нар+оды', 'people, nation; crowd (coll.)', 'das Volk; die Leute',
      ex('В пятницу вечером на пл+ощади собралось много [[нар+ода]].', 'On Friday evening many people gathered in the square.', 'Am Freitagabend versammelten sich viele Leute auf dem Platz.'),
      { core: true }),
    n('r-rod-priroda', 'прир+ода', 'f', '', 'nature', 'die Natur',
      ex('На выходных мы часто выезжаем на [[прир+оду]].', 'At weekends we often head out into nature.', 'Am Wochenende fahren wir oft in die Natur.')),
    adj('r-rod-rodnoy', 'родн+ой', 'native; closely related, dear', 'Heimat-, leiblich, vertraut',
      ex('В [[родн+ом]] городе она знает каждую тихую улочку.', 'In her home town she knows every quiet street.', 'In ihrer Heimatstadt kennt sie jede ruhige Straße.'),
      { core: true }),
    n('r-rod-rodstvennik', 'р+одственник', 'm', 'р+одственники', 'relative', 'der Verwandte',
      ex('На праздник приехали все близкие [[р+одственники]].', 'All close relatives came for the celebration.', 'Zum Fest kamen alle nahen Verwandten.')),
    n('r-rod-urozhay', 'урож+ай', 'm', 'урож+аи', 'harvest, crop', 'die Ernte',
      ex('После тёплого лета фермеры собрали богатый [[урож+ай]].', 'After the warm summer, farmers brought in a rich harvest.', 'Nach dem warmen Sommer fuhren die Bauern eine reiche Ernte ein.'),
      { level: 'B2' })
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 8. мир (Word-building family, mapVerbs: false) */
  addRoot('мир', 'мир', 'МИР', 'root -мир-', 'peace; world', 'Frieden; Welt',
    ['Russian мир means both “peace” and “the world” (written identically today). Key derivatives: мирить / помирить (reconcile), мирный (peaceful), всемирный (worldwide), перемирие (truce).',
     'Russisch мир bedeutet sowohl „Frieden“ als auch „Welt“. Ableitungen: мирить / помирить (versöhnen), мирный (friedlich), всемирный (weltweit), перемирие (Waffenstillstand).'], [
    n('r-mir-mir', 'мир', 'm', 'мир+ы', 'peace; world', 'der Frieden; die Welt',
      ex('После долгого спора друзья наконец заключили [[мир]].', 'After a long argument, the friends finally made peace.', 'Nach dem langen Streit schlossen die Freunde endlich Frieden.'),
      { base: true }),
    v('r-mir-mirit', 'мир+ить', 'impf', ['мир+ю, мир+ишь', 'мир+ил', 'pf. помир+ить'], 'to reconcile (others)', 'versöhnen',
      ex('Старшему коллеге часто приходилось [[мир+ить]] спорящие отделы.', 'The senior colleague often had to reconcile arguing departments.', 'Der erfahrene Kollege musste oft streitende Abteilungen versöhnen.'),
      { core: true }),
    v('r-mir-pomirit', 'помир+ить', 'pf', ['помир+ю, пом+иришь', 'помир+ил', 'impf. мир+ить'], 'to reconcile; (помириться) to make up', 'versöhnen; (помириться) sich vertragen',
      ex('Спокойный разговор помог [[помир+ить]] обоих партнёров.', 'A calm conversation helped reconcile both partners.', 'Ein ruhiges Gespräch half, beide Partner zu versöhnen.'),
      { core: true }),
    adj('r-mir-mirnyy', 'м+ирный', 'peaceful', 'friedlich',
      ex('Переговоры закончились [[м+ирным]] соглашением.', 'The negotiations ended with a peaceful agreement.', 'Die Verhandlungen endeten mit einer friedlichen Einigung.'),
      { core: true }),
    adj('r-mir-vsemirnyy', 'всем+ирный', 'worldwide, global', 'weltweit',
      ex('[[Всем+ирная]] сеть изменила способы обмена знаниями.', 'The worldwide web changed how knowledge is shared.', 'Das weltweite Netz veränderte den Wissensaustausch.'),
      { core: true, level: 'B2' }),
    n('r-mir-peremirie', 'перем+ирие', 'n', 'перем+ирия', 'truce, ceasefire', 'der Waffenstillstand',
      ex('Стороны объявили временное [[перем+ирие]] для переговоров.', 'The sides announced a temporary truce for talks.', 'Die Seiten erklärten einen vorübergehenden Waffenstillstand für Gespräche.'),
      { level: 'B2' }),
    n('r-mir-mirovozzrenie', 'мировоззр+ение', 'n', 'мировоззр+ения', 'worldview', 'die Weltanschauung',
      ex('Книги и путешествия заметно расширяют [[мировоззр+ение]].', 'Books and travel noticeably broaden one’s worldview.', 'Bücher und Reisen erweitern die Weltanschauung spürbar.'),
      { level: 'C1' })
  ], { mapVerbs: false, group: 'Word-building families' });
})();

/* === Content expansion Wave 2 (2026-11-27): +8 RU root families === */
(function () {
  'use strict';
  var P = GT.packs.ru;
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function plain(s) { return String(s || '').replace(/[+́]/g, '').trim().toLowerCase(); }
  function existing(t) {
    var k = plain(t);
    return P.items.filter(function (x) { return plain(x.t) === k; })[0] || null;
  }
  function v(id, t, aspect, forms, en, de, e, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: 'ru-r28-' + id, pos: 'verb', t: t, aspect: aspect,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] },
      en: en, de: de, examples: [e], level: opts.level || 'B1'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.prefix) o.prefix = opts.prefix;
    if (opts.pair) o.pair = opts.pair;
    if (opts.pairLabel) o.pairLabel = opts.pairLabel;
    if (opts.tr) o.transparency = opts.tr;
    return o;
  }
  function n(id, t, gender, plural, en, de, e, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: 'ru-r28-' + id, pos: 'noun', t: t, gender: gender,
      plural: plural || undefined, en: en, de: de, examples: [e], level: opts.level || 'B1'
    };
    if (opts.core) o.core = true;
    return o;
  }
  function adj(id, t, en, de, e, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = { id: 'ru-r28-' + id, pos: 'adj', t: t, en: en, de: de, examples: [e], level: opts.level || 'B1' };
    if (opts.core) o.core = true;
    return o;
  }
  function addRoot(id, t, label, sub, en, de, note, words, extra) {
    extra = extra || {};
    GT.registerRoot(Object.assign({
      id: id, verb: t, t: t, label: label, sub: sub, en: en, de: de,
      note: { en: note[0], de: note[1] },
      words: words
    }, extra));
    if (P.config.ROOT_PLAN.indexOf(id) < 0) P.config.ROOT_PLAN.push(id);
  }

  /* 1. стан / стать */
  addRoot('стан', 'стать', 'СТАТЬ', 'root -стан- / -ста-', 'to become; stand up; remain; stop', 'werden; aufstehen; bleiben; aufhören',
    ['The stem стать / -стан- (-ста-) yields high-frequency verbs for change of state and stopping: встать (get up / stop), остаться (stay), достать (reach / get), перестать (cease), устать (tire).',
     'Der Stamm стать / -стан- bildet zentrale Alltagsverben: встать (aufstehen), остаться (bleiben), достать (hervorholen), перестать (aufhören), устать (müde werden).'], [
    v('stan-stat', 'стать', 'pf', ['ст+ану, ст+анешь', 'стал', 'impf. станов+иться'], 'to become; take up position', 'werden; sich hinstellen',
      ex('Погода быстро [[ст+ала]] тёплой к концу мая.', 'The weather quickly turned warm by late May.', 'Das Wetter wurde bis Ende Mai schnell warm.'),
      { base: true }),
    v('stan-vstat', 'встать', 'pf', ['вст+ану, вст+анешь', 'встал', 'impf. встав+ать'], 'to get up, stand up', 'aufstehen',
      ex('Завтра нужно [[встать]] пораньше к первому поезду.', 'Tomorrow we need to get up early for the first train.', 'Morgen müssen wir zum ersten Zug früh aufstehen.'),
      { core: true, prefix: 'в', tr: 'transparent', pd: 'B1' }),
    v('stan-ostatsya', 'ост+аться', 'pf', ['ост+анусь, ост+анешься', 'ост+ался', 'impf. оставаться'], 'to stay, remain', 'bleiben',
      ex('После лекции мы решили [[ост+аться]] ещё на полчаса.', 'After the lecture we decided to stay for another half hour.', 'Nach der Vorlesung beschlossen wir, noch eine halbe Stunde zu bleiben.'),
      { core: true, prefix: 'о', tr: 'figurative', pd: 'B1' }),
    v('stan-dostat', 'дост+ать', 'pf', ['дост+ану, дост+анешь', 'дост+ал', 'impf. достав+ать'], 'to reach; pull out, get hold of', 'hervorholen; erreichen; besorgen',
      ex('Он [[дост+ал]] ключи из верхнего ящика стола.', 'He pulled the keys out of the top desk drawer.', 'Er holte die Schlüssel aus der oberen Schreibtischschublade.'),
      { core: true, prefix: 'до', tr: 'transparent', pd: 'B1' }),
    v('stan-perestat', 'перест+ать', 'pf', ['перест+ану, перест+анешь', 'перест+ал', 'impf. перестав+ать'], 'to stop, cease (+ impf. inf.)', 'aufhören',
      ex('К вечеру дождь наконец [[перест+ал]] лить.', 'Towards evening the rain finally stopped pouring.', 'Gegen Abend hörte der Regen endlich auf zu schütten.'),
      { core: true, prefix: 'пере', tr: 'figurative', pd: 'B1' }),
    v('stan-ustat', 'уст+ать', 'pf', ['уст+ану, уст+анешь', 'уст+ал', 'impf. устав+ать'], 'to get tired', 'müde werden',
      ex('После долгой дороги дети заметно [[уст+али]].', 'After the long journey the children got noticeably tired.', 'Nach der langen Fahrt wurden die Kinder spürbar müde.'),
      { core: true, prefix: 'у', tr: 'figurative', pd: 'B1' }),
    n('stan-ostanovka', 'остан+овка', 'f', 'остан+овки', 'bus/tram stop; pause, halt', 'die Haltestelle; der Halt',
      ex('Следующая [[остан+овка]] — прямо у центрального входа.', 'The next stop is right by the main entrance.', 'Die nächste Haltestelle ist direkt am Haupteingang.')),
    n('stan-sostoyanie', 'состо+яние', 'n', 'состо+яния', 'state, condition; wealth', 'der Zustand',
      ex('Техник подробно проверил [[состо+яние]] тормозной системы.', 'The technician thoroughly checked the condition of the brake system.', 'Der Techniker prüfte den Zustand des Bremssystems gründlich.'),
      { level: 'B2' })
  ]);

  /* 2. тян / тянуть */
  addRoot('тян', 'тянуть', 'ТЯНУТЬ', 'root -тян- / -тяж-', 'to pull, stretch, drag', 'ziehen, spannen, dehnen',
    ['The root -тян-/-тяг- handles pulling, attraction, stretching, and dragging things out: притянуть (attract/pull near), вытянуть (stretch out), затянуть (delay / tighten), протянуть (extend / lend a hand).',
     'Die Wurzel -тян-/-тяг- deckt Ziehen, Spannen und Verzögern ab: притянуть (anziehen), вытянуть (herausziehen/strecken), затянуть (anziehen/verzögern), протянуть (ausstrecken).'], [
    v('tyan-tyanut', 'тян+уть', 'impf', ['тян+у, т+янешь', 'тян+ул', 'pf. потян+уть'], 'to pull, drag; linger', 'ziehen; dehnen',
      ex('Не надо [[тян+уть]] дверь на себя — она открывается от себя.', 'Do not pull the door towards you — it pushes outward.', 'Zieh die Tür nicht zu dir — sie öffnet nach außen.'),
      { base: true }),
    v('tyan-prityanut', 'притян+уть', 'pf', ['притян+у, прит+янешь', 'притян+ул', 'impf. прит+ягивать'], 'to pull closer, draw in', 'heranziehen, anziehen',
      ex('Магнит легко [[притян+ул]] рассыпанные скрепки со стола.', 'The magnet easily pulled the scattered paperclips off the desk.', 'Der Magnet zog die verstreuten Büroklammern mühelos vom Tisch.'),
      { core: true, prefix: 'при', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('tyan-vytyanut', 'в+ытянуть', 'pf', ['в+ытяну, в+ытянешь', 'в+ытянул', 'impf. выт+ягивать'], 'to pull out; stretch out (legs, arm)', 'herausziehen; ausstrecken',
      ex('Он [[в+ытянул]] руку, чтобы достать книгу с верхней полки.', 'He stretched out his arm to reach the book on the top shelf.', 'Er streckte den Arm aus, um das Buch vom oberen Regal zu holen.'),
      { core: true, prefix: 'вы', tr: 'transparent', pd: 'B1' }),
    v('tyan-zatyanut', 'затян+уть', 'pf', ['затян+у, зат+янешь', 'затян+ул', 'impf. зат+ягивать'], 'to tighten (belt, bolt); drag out, delay', 'festziehen; in die Länge ziehen',
      ex('Согласование бюджета не стоит лишний раз [[зат+ягивать]].', 'Budget approval should not be dragged out unnecessarily.', 'Die Budgetabstimmung sollte man nicht unnötig in die Länge ziehen.'),
      { core: true, prefix: 'за', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('tyan-protyanut', 'протян+уть', 'pf', ['протян+у, прот+янешь', 'протян+ул', 'impf. прот+ягивать'], 'to hold out (hand), stretch (cable)', 'ausstrecken, reichen; verlegen',
      ex('Она [[протян+ула]] коллеге папку с готовыми чертежами.', 'She held out the folder of finished drawings to her colleague.', 'Sie reichte dem Kollegen die Mappe mit den fertigen Zeichnungen.'),
      { core: true, prefix: 'про', tr: 'transparent', pd: 'B1' }),
    v('tyan-natyanut', 'натян+уть', 'pf', ['натян+у, нат+янешь', 'натян+ул', 'impf. нат+ягивать'], 'to stretch tight, pull taut', 'straffen, spannen',
      ex('Перед дождём туристы туго [[натян+ули]] тент над лагерем.', 'Before the rain, the hikers pulled the tarp tight over camp.', 'Vor dem Regen spannten die Wanderer die Plane fest über das Lager.'),
      { core: true, prefix: 'на', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('tyan-ottyanut', 'оттян+уть', 'pf', ['оттян+у, отт+янешь', 'оттян+ул', 'impf. отт+ягивать'], 'to pull aside; postpone, stall', 'wegziehen; hinauszögern',
      ex('Никто не хочет [[отт+ягивать]] запуск проекта ещё на месяц.', 'Nobody wants to stall the project launch for another month.', 'Niemand möchte den Projektstart noch einen Monat hinauszögern.'),
      { core: true, prefix: 'от', tr: 'figurative', pd: 'B2', level: 'B2' }),
    n('tyan-natyazhenie', 'натяж+ение', 'n', '', 'tension, tightness (cable, tone)', 'die Spannung',
      ex('Датчик постоянно измеряет [[натяж+ение]] стального троса.', 'The sensor continuously measures the tension of the steel cable.', 'Der Sensor misst ständig die Spannung des Stahlseils.'),
      { level: 'C1' })
  ]);

  /* 3. клад / класть */
  addRoot('клад', 'класть', 'КЛАСТЬ', 'root -клад- / -кла-', 'to place, put flat; fold, invest, postpone', 'legen; falten; anlegen; verschieben',
    ['Note the classic root alternation in Russian: the imperfective uses -клад- (класть / складывать / вкладывать), while its perfective partner uses -лож- (положить / сложить / вложить)!',
     'Wichtiger russischer Stammwechsel: Imperfektiv mit -клад- (класть / складывать / вкладывать), Perfektiv mit -лож- (положить / сложить / вложить)!'], [
    v('klad-klast', 'класть', 'impf', ['клад+у, кладёшь', 'клал', 'pf. полож+ить'], 'to put, lay flat', 'legen',
      ex('Я всегда [[клад+у]] пропуск в передний карман рюкзака.', 'I always put my pass in the front pocket of my backpack.', 'Ich lege meinen Ausweis immer in die Vordertasche des Rucksacks.'),
      { base: true }),
    v('klad-skladyvat', 'скл+адывать', 'impf', ['скл+адываю, скл+адываешь', 'скл+адывал', 'pf. слож+ить'], 'to fold; stack; add up', 'zusammenlegen, falten; addieren',
      ex('После смены инструменты нужно аккуратно [[скл+адывать]] в ящик.', 'After the shift, tools must be neatly stacked into the box.', 'Nach der Schicht muss man Werkzeuge ordentlich in die Kiste legen.'),
      { core: true, prefix: 'с', tr: 'transparent', pd: 'B1' }),
    v('klad-vkladyvat', 'вкл+адывать', 'impf', ['вкл+адываю, вкл+адываешь', 'вкл+адывал', 'pf. влож+ить'], 'to put inside, insert; invest (funds, effort)', 'hineinlegen; investieren',
      ex('Город продолжает [[вкл+адывать]] средства в обновление трамваев.', 'The city keeps investing funds in upgrading trams.', 'Die Stadt investiert weiter Mittel in die Erneuerung der Straßenbahnen.'),
      { core: true, prefix: 'в', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('klad-otkladyvat', 'откл+адывать', 'impf', ['откл+адываю, откл+адываешь', 'откл+адывал', 'pf. отлож+ить'], 'to postpone, put off; set aside money', 'verschieben; zurücklegen',
      ex('Если план уже готов, не стоит [[откл+адывать]] звонок на понедельник.', 'If the plan is ready, do not put the call off until Monday.', 'Wenn der Plan steht, lohnt es nicht, das Gespräch auf Montag zu verschieben.'),
      { core: true, prefix: 'от', tr: 'figurative', pd: 'B1' }),
    v('klad-perekladyvat', 'перекл+адывать', 'impf', ['перекл+адываю, перекл+адываешь', 'перекл+адывал', 'pf. перелож+ить'], 'to move/re-pack; shift responsibility', 'umlegen; abwälzen',
      ex('Нельзя просто [[перекл+адывать]] свою задачу на нового стажёра.', 'You cannot simply shift your own task onto the new intern.', 'Man darf seine eigene Aufgabe nicht einfach auf den neuen Praktikanten abwälzen.'),
      { core: true, prefix: 'пере', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('klad-dokladyvat', 'докл+адывать', 'impf', ['докл+адываю, докл+адываешь', 'докл+адывал', 'pf. долож+ить'], 'to report formally; add more', 'berichten, melden; nachlegen',
      ex('Начальник участка должен еженедельно [[докл+адывать]] о ходе ремонта.', 'The site manager must report weekly on repair progress.', 'Der Bauleiter muss wöchentlich über den Reparaturfortschritt berichten.'),
      { core: true, prefix: 'до', tr: 'figurative', pd: 'B2', level: 'B2' }),
    n('klad-vklad', 'вклад', 'm', 'вкл+ады', 'bank deposit; personal contribution', 'die Einlage; der Beitrag',
      ex('Каждый редактор внёс заметный [[вклад]] в обновление словаря.', 'Every editor made a noticeable contribution to updating the dictionary.', 'Jede Redakteurin leistete einen spürbaren Beitrag zur Aktualisierung.'),
      { level: 'B2' }),
    n('klad-sklad', 'склад', 'm', 'скл+ады', 'warehouse, storage depot', 'das Lager',
      ex('Посылки уже готовы к отгрузке и ждут на [[скл+аде]].', 'The parcels are ready for dispatch and waiting in the warehouse.', 'Die Pakete sind versandfertig und warten im Lager.')),
  ]);

  /* 4. рез / резать */
  addRoot('рез', 'резать', 'РЕЗАТЬ', 'root -рез-', 'to cut, slice, carve', 'schneiden',
    ['The stem -рез- builds concrete cutting verbs cleanly using spatial prefixes: отрезать (cut off a piece), вырезать (cut out / paste), нарезать (slice up), перерезать (cut across / sever), срезать (trim off / take a shortcut).',
     'Der Stamm -рез- bildet klare Verben des Schneidens: отрезать (abschneiden), вырезать (ausschneiden), нарезать (auf-/kleinschneiden), перерезать (durchtrennen), срезать (abschneiden/abkürzen).'], [
    v('rez-rezat', 'р+езать', 'impf', ['р+ежу, р+ежешь', 'р+езал', 'pf. пор+езать'], 'to cut, slice', 'schneiden',
      ex('Острый нож легко [[р+ежет]] даже твёрдый сыр.', 'A sharp knife easily cuts even hard cheese.', 'Ein scharfes Messer schneidet mühelos selbst harten Käse.'),
      { base: true }),
    v('rez-otrezat', 'отр+езать', 'pf', ['отр+ежу, отр+ежешь', 'отр+езал', 'impf. отрез+ать'], 'to cut off (a portion, piece)', 'abschneiden',
      ex('От рулона ленты нужно [[отр+езать]] ровно три метра.', 'From the roll of tape we need to cut off exactly three metres.', 'Von der Bandrolle muss man genau drei Meter abschneiden.'),
      { core: true, prefix: 'от', tr: 'transparent', pd: 'B1' }),
    v('rez-vyrezat', 'в+ырезать', 'pf', ['в+ырежу, в+ырежешь', 'в+ырезал', 'impf. вырез+ать'], 'to cut out (shape, clip, paragraph)', 'ausschneiden',
      ex('Из старого текста пришлось [[в+ырезать]] два длинных повтора.', 'We had to cut two long repetitions out of the old text.', 'Aus dem alten Text mussten zwei lange Wiederholungen herausgeschnitten werden.'),
      { core: true, prefix: 'вы', tr: 'transparent', pd: 'B1' }),
    v('rez-narezat', 'нар+езать', 'pf', ['нар+ежу, нар+ежешь', 'нар+езал', 'impf. нарез+ать'], 'to slice up (bread, vegetables)', 'in Scheiben/Stücke schneiden',
      ex('Перед подачей [[нар+ежьте]] хлеб тонкими ломтиками.', 'Before serving, slice the bread into thin pieces.', 'Schneiden Sie das Brot vor dem Servieren in dünne Scheiben.'),
      { core: true, prefix: 'на', tr: 'transparent', pd: 'B1' }),
    v('rez-pererezat', 'перер+езать', 'pf', ['перер+ежу, перер+ежешь', 'перер+езал', 'impf. перерез+ать'], 'to cut across, sever (cable, ribbon)', 'durchschneiden, durchtrennen',
      ex('На открытии моста мэр торжественно [[перер+езал]] ленту.', 'At the bridge opening, the mayor ceremonially cut the ribbon.', 'Bei der Brückeneröffnung schnitt der Bürgermeister feierlich das Band durch.'),
      { core: true, prefix: 'пере', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('rez-srezat', 'ср+езать', 'pf', ['ср+ежу, ср+ежешь', 'ср+езал', 'impf. срез+ать'], 'to trim off; take a shortcut', 'abschneiden, kappen; abkürzen',
      ex('Через небольшой парк можно [[ср+езать]] путь к станции на пять минут.', 'Through the small park you can cut five minutes off the walk to the station.', 'Durch den kleinen Park kann man den Weg zur Station um fünf Minuten abkürzen.'),
      { core: true, prefix: 'с', tr: 'figurative', pd: 'B2', level: 'B2' }),
    n('rez-razrez', 'разр+ез', 'm', 'разр+езы', 'slit, incision; cross-section', 'der Schnitt, Querschnitt',
      ex('На схеме показан подробный [[разр+ез]] внешней стены здания.', 'The diagram shows a detailed cross-section of the building’s exterior wall.', 'Das Schema zeigt einen detaillierten Querschnitt der Außenwand.'),
      { level: 'B2' })
  ]);

  /* 5. пуск / пускать */
  addRoot('пуск', 'пускать', 'ПУСКАТЬ', 'root -пуск- / -пуст-', 'to let go, launch, release, miss', 'lassen, starten, freigeben, verpassen',
    ['Imperfective -пускать pairs with perfective -пустить: пропускать/пропустить (miss / let through), выпускать/выпустить (release / graduate), запускать/запустить (launch), отпускать/отпустить (let go).',
     'Imperfektiv -пускать wechselt mit Perfektiv -пустить: пропускать (verpassen / durchlassen), выпускать (herausbringen), запускать (starten), отпускать (freigeben).'], [
    v('pusk-puskat', 'пуск+ать', 'impf', ['пуск+аю, пуск+аешь', 'пуск+ал', 'pf. пуст+ить'], 'to let in/out; start running', 'lassen, einlassen; laufen lassen',
      ex('После девяти вечера охрана [[пуск+ает]] в корпус только по пропуску.', 'After nine p.m., security only lets people into the building with a pass.', 'Nach einundzwanzig Uhr lässt der Wachdienst nur mit Ausweis ins Gebäude.'),
      { base: true }),
    v('pusk-propuskat', 'пропуск+ать', 'impf', ['пропуск+аю, пропуск+аешь', 'пропуск+ал', 'pf. пропуст+ить'], 'to miss (bus, deadline); let through', 'verpassen, auslassen; durchlassen',
      ex('Лучше выйти заранее, чтобы не [[пропуск+ать]] утреннюю электричку.', 'Better leave early so as not to miss the morning commuter train.', 'Besser früh losgehen, um den morgendlichen Vorortzug nicht zu verpassen.'),
      { core: true, prefix: 'про', tr: 'figurative', pd: 'B1' }),
    v('pusk-vypuskat', 'выпуск+ать', 'impf', ['выпуск+аю, выпуск+аешь', 'выпуск+ал', 'pf. в+ыпустить'], 'to manufacture, release, publish', 'herausbringen, produzieren, freigeben',
      ex('Разработчики планируют [[выпуск+ать]] обновления безопасности раз в месяц.', 'The developers plan to release security updates once a month.', 'Die Entwickler planen, monatlich Sicherheitsupdates herauszubringen.'),
      { core: true, prefix: 'вы', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('pusk-zapuskat', 'запуск+ать', 'impf', ['запуск+аю, запуск+аешь', 'запуск+ал', 'pf. запуст+ить'], 'to launch (service, program), neglect (an affair)', 'starten, in Betrieb nehmen; vernachlässigen',
      ex('Перед тем как [[запуск+ать]] рассылку, проверьте адреса получателей.', 'Before launching the mailing, check the recipient addresses.', 'Prüfen Sie vor dem Starten des Versands die Empfängeradressen.'),
      { core: true, prefix: 'за', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('pusk-otpuskat', 'отпуск+ать', 'impf', ['отпуск+аю, отпуск+аешь', 'отпуск+ал', 'pf. отпуст+ить'], 'to let go, release; dispense (goods)', 'loslassen, freilassen; abgeben',
      ex('Руководитель пообещал [[отпуск+ать]] сотрудников в пятницу пораньше.', 'The manager promised to let staff leave early on Fridays.', 'Die Leitung versprach, Mitarbeitende freitags früher gehen zu lassen.'),
      { core: true, prefix: 'от', tr: 'transparent', pd: 'B1' }),
    v('pusk-vpuskat', 'впуск+ать', 'impf', ['впуск+аю, впуск+аешь', 'впуск+ал', 'pf. впуст+ить'], 'to let inside (into a room, hall)', 'hereinlassen',
      ex('Зрителей начнут [[впуск+ать]] в зал за двадцать минут до начала.', 'They will start letting spectators into the hall twenty minutes before the start.', 'Zuschauer werden zwanzig Minuten vor Beginn in den Saal gelassen.'),
      { core: true, prefix: 'в', tr: 'transparent', pd: 'B1' }),
    n('pusk-propusk', 'пр+опуск', 'm', 'пр+опуски / пропуск+а', 'entry pass; omission / absence', 'der Ausweis, Passierschein; das Fehlen',
      ex('Гостевой [[пр+опуск]] оформляется на стойке регистрации за минуту.', 'A visitor pass is issued at the reception desk in a minute.', 'Ein Besucherausweis wird am Empfang binnen einer Minute ausgestellt.'),
      { level: 'B2' })
  ]);

  /* 6. слыш / слышать */
  addRoot('слыш', 'слышать', 'СЛЫШАТЬ', 'root -слыш- / -слух-', 'to hear; catch, listen closely, mishear', 'hören; vernehmen, hinhören, sich verhören',
    ['Note the difference between passive hearing (слышать / услышать) and attentive listening (слушать / прислушаться) alongside the noun слух (hearing / rumour).',
     'Wichtige Unterscheidung zwischen Hören (слышать / услышать) und Zuhören (слушать / прислушаться) sowie слух (Gehör / Gerücht).'], [
    v('slysh-slyshat', 'сл+ышать', 'impf', ['сл+ышу, сл+ышишь', 'сл+ышал', 'pf. усл+ышать'], 'to hear', 'hören',
      ex('Из-за шума поезда я почти не [[сл+ышал]] объявления диктора.', 'Because of the train noise I could barely hear the announcer.', 'Wegen des Zuglärms hörte ich die Durchsage kaum.'),
      { base: true }),
    v('slysh-uslyshat', 'усл+ышать', 'pf', ['усл+ышу, усл+ышишь', 'усл+ышал', 'impf. сл+ышать'], 'to hear suddenly, catch a sound', 'vernehmen, plötzlich hören',
      ex('Как только я [[усл+ышал]] звонок, сразу снял трубку.', 'As soon as I heard the ring, I picked up immediately.', 'Sobald ich das Klingeln hörte, nahm ich sofort ab.'),
      { core: true, prefix: 'у', tr: 'transparent', pd: 'B1' }),
    v('slysh-prislushatsya', 'присл+ушаться', 'pf', ['присл+ушаюсь, присл+ушаешься', 'присл+ушался', 'impf. присл+ушиваться'], 'to listen closely; heed (advice)', 'genau hinhören; beherzigen',
      ex('К мнению опытного мастера стоит [[присл+ушаться]].', 'It is worth heeding the experienced technician’s advice.', 'Auf den Rat des erfahrenen Meisters sollte man hören.'),
      { core: true, prefix: 'при', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('slysh-podslushat', 'подсл+ушать', 'pf', ['подсл+ушаю, подсл+ушаешь', 'подсл+ушал', 'impf. подсл+ушивать'], 'to overhear secretly, eavesdrop', 'belauschen',
      ex('В тихом коридоре кто-то мог случайно [[подсл+ушать]] разговор.', 'In the quiet corridor, someone could accidentally overhear the conversation.', 'Im stillen Flur hätte jemand das Gespräch zufällig mithören können.'),
      { core: true, prefix: 'под', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('slysh-oslyshatsya', 'осл+ышаться', 'pf', ['осл+ышусь, осл+ышишься', 'осл+ышался', 'impf. осл+ышиваться'], 'to mishear', 'sich verhören',
      ex('Простите, вы сказали «во вторник» или я [[осл+ышался]]?', 'Excuse me, did you say “on Tuesday” or did I mishear?', 'Entschuldigung, sagten Sie „am Dienstag“ oder habe ich mich verhört?'),
      { core: true, prefix: 'о', tr: 'transparent', pd: 'B2', level: 'B2' }),
    n('slysh-sluh', 'слух', 'm', 'сл+ухи', 'sense of hearing; rumour (pl.)', 'das Gehör; das Gerücht (Pl.)',
      ex('Свежие цифры полностью опровергли вчерашний [[слух]] о закрытии.', 'Fresh figures completely refuted yesterday’s rumour about a closure.', 'Neue Zahlen widerlegten das gestrige Gerücht einer Schließung völlig.'),
      { level: 'B2' }),
    adj('slysh-neslyhannyy', 'несл+ыханный', 'unheard-of, unprecedented', 'unerhört, beispiellos',
      ex('В тот год город пережил [[несл+ыханный]] наплыв гостей.', 'That year the city experienced an unprecedented influx of visitors.', 'In jenem Jahr erlebte die Stadt einen beispiellosen Besucherzustrom.'),
      { level: 'C1' })
  ]);

  /* 7. работ / работать */
  addRoot('работ', 'работать', 'РАБОТАТЬ', 'root -работ-', 'to work; earn, process, refine, develop', 'arbeiten; verdienen, überarbeiten, entwickeln',
    ['Around работать (“to work”) cluster the key career and project verbs: заработать (earn / start running), переработать (rework / overwork), доработать (polish/finish off), выработать (formulate), разработать (develop).',
     'Rund um работать („arbeiten“) gruppieren sich zentrale Berufsverben: заработать (verdienen), переработать (überarbeiten), доработать (feinschleifen), выработать (ausarbeiten), разработать (entwickeln).'], [
    v('rabot-rabotat', 'раб+отать', 'impf', ['раб+отаю, раб+отаешь', 'раб+отал', 'pf. пораб+отать'], 'to work, operate', 'arbeiten, funktionieren',
      ex('После замены кабеля принтер снова [[раб+отает]] без перебоев.', 'After replacing the cable, the printer works smoothly again.', 'Nach dem Kabeltausch funktioniert der Drucker wieder störungsfrei.'),
      { base: true }),
    v('rabot-zarabotat', 'зараб+отать', 'pf', ['зараб+отаю, зараб+отаешь', 'зараб+отал', 'impf. зараб+атывать'], 'to earn (money); start operating', 'verdienen; anspringen, anfangen zu laufen',
      ex('Нажатием одной кнопки резервная система [[зараб+отала]] сразу.', 'At the press of a button, the backup system started working immediately.', 'Auf Knopfdruck sprang das Reservesystem sofort an.'),
      { core: true, prefix: 'за', tr: 'figurative', pd: 'B1' }),
    v('rabot-pererabotat', 'перераб+отать', 'pf', ['перераб+отаю, перераб+отаешь', 'перераб+отал', 'impf. перераб+атывать'], 'to rework, revise; recycle; work overtime', 'überarbeiten; recyceln; Überstunden machen',
      ex('После отзывов редакции автор [[перераб+отал]] вторую главу.', 'After editorial feedback, the author revised the second chapter.', 'Nach Rückmeldung der Redaktion überarbeitete der Autor das zweite Kapitel.'),
      { core: true, prefix: 'пере', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('rabot-dorabotat', 'дораб+отать', 'pf', ['дораб+отаю, дораб+отаешь', 'дораб+отал', 'impf. дораб+атывать'], 'to refine, finish off remaining flaws', 'nachbessern, fertigstellen',
      ex('Дизайн формы хороший, но подписи к полям нужно [[дораб+отать]].', 'The form design is good, though field labels still need refining.', 'Das Formulardesign ist gut, nur die Feldbeschriftungen müssen nachgebessert werden.'),
      { core: true, prefix: 'до', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('rabot-vyrabotat', 'в+ыработать', 'pf', ['в+ыработаю, в+ыработаешь', 'в+ыработал', 'impf. выраб+атывать'], 'to work out (habits, policy); generate (power)', 'ausarbeiten (Regel); erzeugen (Strom)',
      ex('Команда смогла [[в+ыработать]] единый стандарт оформления отчётов.', 'The team managed to formulate a single standard for formatting reports.', 'Das Team konnte einen einheitlichen Standard für Berichte ausarbeiten.'),
      { core: true, prefix: 'вы', tr: 'figurative', pd: 'C1', level: 'C1' }),
    v('rabot-razrabotat', 'разраб+отать', 'pf', ['разраб+отаю, разраб+отаешь', 'разраб+отал', 'impf. разраб+атывать'], 'to develop, design (a system, plan)', 'entwickeln, ausarbeiten',
      ex('Инженеры помогли [[разраб+отать]] более лёгкий корпус прибора.', 'Engineers helped develop a lighter housing for the device.', 'Ingenieure halfen mit, ein leichteres Gerätegehäuse zu entwickeln.'),
      { core: true, prefix: 'раз', tr: 'figurative', pd: 'B2', level: 'B2' }),
    n('rabot-zarabotok', 'з+аработок', 'm', 'з+аработки', 'earnings, income', 'der Verdienst, Erwerb',
      ex('Сезонный [[з+аработок]] помог студентам оплатить аренду комнаты.', 'Seasonal earnings helped the students pay for their room rent.', 'Ein Saisonverdienst half den Studierenden bei der Zimmermiete.'),
      { level: 'B2' })
  ]);

  /* 8. свет / светить */
  addRoot('свет', 'светить', 'СВЕТИТЬ', 'root -свет- / -свеч-', 'to shine; illuminate, highlight, clarify', 'leuchten; beleuchten, hervorheben, aufklären',
    ['Root alternation -свет- / -свеч-: sve-tit (to shine) gives освет+ить (light up / shed light on), подсветить (backlight / highlight), высветить (spotlight an issue), освещение (lighting / media coverage).',
     'Stammwechsel -свет- / -свеч-: светить (leuchten), осветить (beleuchten), подсветить (hinterleuchten/hervorheben), высветить (ans Licht bringen), освещение (Beleuchtung/Berichterstattung).'], [
    v('svet-svetit', 'свет+ить', 'impf', ['свеч+у, св+етишь', 'свет+ил', 'pf. посвет+ить'], 'to shine, emit light', 'leuchten, scheinen',
      ex('Фонарь у крыльца ярко [[св+етит]] всю ночь.', 'The lamp by the porch shines brightly all night.', 'Die Laterne am Eingang leuchtet die ganze Nacht hell.'),
      { base: true }),
    v('svet-osvetit', 'освет+ить', 'pf', ['освещ+у, освет+ишь', 'освет+ил', 'impf. освещ+ать'], 'to light up; cover/explain (a topic)', 'beleuchten; ein Thema behandeln',
      ex('Докладчик сумел ясно [[освет+ить]] все спорные стороны реформы.', 'The speaker managed to shed clear light on every contested side of the reform.', 'Der Redner konnte alle strittigen Seiten der Reform klar beleuchten.'),
      { core: true, prefix: 'о', tr: 'figurative', pd: 'B2', level: 'B2' }),
    v('svet-podsvetit', 'подсвет+ить', 'pf', ['подсвеч+у, подсв+етишь', 'подсвет+ил', 'impf. подсв+ечивать'], 'to illuminate from behind/below, highlight', 'anstrahlen, hinterleuchten; hervorheben',
      ex('Тёплые лампы мягко [[подсвет+или]] фасад старинного вокзала.', 'Warm lamps softly illuminated the facade of the historic station.', 'Warme Lampen beleuchteten sanft die Fassade des historischen Bahnhofs.'),
      { core: true, prefix: 'под', tr: 'transparent', pd: 'B2', level: 'B2' }),
    v('svet-vysvetit', 'в+ысветить', 'pf', ['в+ысвечу, в+ысветишь', 'в+ысветил', 'impf. высв+ечивать'], 'to bring to light, spotlight (an issue)', 'ans Licht bringen, aufdecken',
      ex('Обычная проверка сразу [[в+ысветила]] слабое место в графике.', 'A routine check immediately spotlighted a weak spot in the schedule.', 'Eine Routineprüfung deckte sofort die Schwachstelle im Zeitplan auf.'),
      { core: true, prefix: 'вы', tr: 'figurative', pd: 'C1', level: 'C1' }),
    v('svet-prosvetit', 'просвет+ить', 'pf', ['просвещ+у, просвет+ишь', 'просвет+ил', 'impf. просвещ+ать'], 'to X-ray / shine through; enlighten, educate', 'durchleuchten; aufklären',
      ex('На таможне чемодан быстро [[просвет+или]] через сканер.', 'At customs, the suitcase was quickly X-rayed through the scanner.', 'Am Zoll wurde der Koffer rasch durchleuchtet.'),
      { core: true, prefix: 'про', tr: 'figurative', pd: 'C1', level: 'C1' }),
    adj('svet-svetlyy', 'св+етлый', 'bright, light-coloured', 'hell, licht',
      ex('Мы выбрали [[св+етлую]] комнату с окнами во внутренний двор.', 'We chose a bright room overlooking the inner courtyard.', 'Wir wählten ein helles Zimmer zum Innenhof.'),
      {}),
    n('svet-osveshchenie', 'освещ+ение', 'n', '', 'lighting; media coverage', 'die Beleuchtung; Berichterstattung',
      ex('Вдоль новой велодорожки уже смонтировали уличное [[освещ+ение]].', 'Street lighting has already been installed along the new cycle path.', 'Entlang des neuen Radwegs wurde bereits Straßenbeleuchtung montiert.'),
      { level: 'B2' })
  ]);
  GT.addMember('ru-r27-r-prav-ispravit', 'it', 'dev');
  GT.addMember('ru-r28-rabot-dorabotat', 'it', 'product');
})();
