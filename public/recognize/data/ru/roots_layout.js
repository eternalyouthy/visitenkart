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
  "t": "Она обсужд+ает план+ируемую [[подраб+отку]] с отд+елом к+адров.",
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
  "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein.\n\nIn dieser Bedeutung meist im Singular.",
  "en": "Normally used in the singular in this sense; other senses may differ.\n\nNormally singular in this sense."
};

GT.packs.ru.byId["ru-w3-rabochiy-den"].note = {
  "de": "Flüchtiges e fällt im Genitiv weg: в конце́ рабо́чего дня.\n\nHier bezeichnet Werktag eine Einheit der Lieferfrist, nicht die Dauer einer Schicht. Welche Tage zählen, ergibt sich aus den konkreten Bedingungen.",
  "en": "Fleeting е drops in oblique cases: в тече́ние рабо́чего дня (during the workday).\n\nHere a working day is used to state a delivery period, not the length of a shift. Read the actual terms for which days count."
};

GT.packs.ru.byId["ru-r-da-peredavat"].note = {
  "de": "Hier bedeutet ausrichten, jemandem eine Nachricht weiterzugeben.",
  "en": "Here ausrichten means to pass a message on to someone."
};
