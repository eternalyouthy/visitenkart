/* RUSSIAN prefixes, suffixes and classical elements (Roots tab).
 * Prefix meaning indices (used by prefixDrill.meaning in roots_*.js):
 *   при: 0 arrival · 1 adding        у: 0 away
 *   вы: 0 out · 1 result             в: 0 into
 *   пере: 0 across · 1 again · 2 to another place/state · 3 excess
 *   за: 0 brief visit · 1 beginning · 2 fixing/recording · 3 closing
 *   под: 0 under · 1 approach · 2 slightly/additionally
 *   от: 0 away/detach · 1 response · 2 finishing */
(function () {
  var ASPECT = {
    en: '<p>Many prefixes form <b>perfective</b> verbs (писать → записать). A prefixed perfective often has an imperfective partner with a suffix (записать → записывать). Directional prefixes commonly form motion pairs such as приходить → прийти, привозить → привезти and приносить → принести. Check each verb: походить “to walk for a while” is perfective even though ходить is imperfective.</p>',
    de: '<p>Viele Präfixe bilden <b>perfektive</b> Verben (писать → записать). Ein perfektives Präfixverb hat oft einen imperfektiven Partner mit Suffix (записать → записывать). Richtungspräfixe bilden häufig Bewegungspaare wie приходить → прийти, привозить → привезти und приносить → принести. Prüfe das einzelne Verb: походить „eine Weile gehen“ ist perfektiv, obwohl ходить imperfektiv ist.</p>'
  };
  function ex(t, en, de) { return { t: t, en: en, de: de }; }

  GT.registerPrefix({ id: 'при', label: 'при-', en: 'arrival, approach; adding, attaching', de: 'Ankunft, Annäherung; Hinzufügen',
    meanings: [
      { en: 'arrival, reaching a place', de: 'Ankunft, ein Ziel erreichen', examples: [ex('приход+ить', 'to come, to arrive', 'ankommen'), ex('привод+ить', 'to bring (someone)', 'mitbringen'), ex('прие́хать', 'to arrive (by vehicle)', 'ankommen (fahrend)')] },
      { en: 'adding, attaching', de: 'Hinzufügen, Anfügen', examples: [ex('прип+исывать', 'to add in writing', 'dazuschreiben'), ex('прикрепи́ть', 'to attach (a file)', 'anhängen (Datei)')] }
    ],
    match: { en: '<p>English: <b>ar-/at-</b> (arrive, attach) or a particle: come <i>over</i>, bring <i>along</i>.</p>', de: '<p>Deutsch: oft <b>an-</b> / <b>mit-</b> / <b>bei-</b>: ankommen (прийти), mitbringen (привести), anhängen (прикрепить), beifügen (приложить).</p>' },
    grammar: ASPECT });
  GT.registerPrefix({ id: 'у', label: 'у-', en: 'away, removal', de: 'weg, Entfernung',
    meanings: [
      { en: 'away from a place, removal', de: 'weg von einem Ort, Entfernung', examples: [ex('уход+ить', 'to leave', 'weggehen'), ex('убр+ать', 'to tidy away', 'wegräumen'), ex('ут+ечка', 'leak', 'das Leck')] }
    ],
    match: { en: '<p>English: <b>away / off</b> (go away, take away).</p>', de: '<p>Deutsch: <b>weg-</b> / <b>fort-</b>: weggehen (уйти), wegräumen (убрать).</p>' },
    grammar: ASPECT });
  GT.registerPrefix({ id: 'вы', label: 'вы-', en: 'out; achieving a result', de: 'hinaus; ein Ergebnis erreichen',
    meanings: [
      { en: 'out of, outwards', de: 'hinaus, heraus', examples: [ex('выход+ить', 'to go out', 'hinausgehen'), ex('вывод+ить', 'to lead out, to output', 'hinausführen, ausgeben'), ex('вып+исывать', 'to write out (a document)', 'ausstellen')] },
      { en: 'achieving a result through effort', de: 'ein Ergebnis durch Mühe erreichen', examples: [ex('в+ыучить', 'to learn (by heart)', 'auswendig lernen'), ex('в+ыиграть', 'to win', 'gewinnen')] }
    ],
    match: { en: '<p>English: <b>out</b> (go out, write out); Latin <b>ex-</b> (exit).</p>', de: '<p>Deutsch: <b>aus-</b> / <b>hinaus-</b>: ausgehen, ausstellen (выписать), aussteigen (выйти). Im Perfektiv ist вы́- <b>immer betont</b>.</p>' },
    grammar: { en: '<p>In perfective verbs вы́- always carries the stress: вы́йти, вы́писать, вы́ставить; the imperfective partner does not: выходи́ть, выпи́сывать.</p>' + ASPECT.en, de: '<p>In perfektiven Verben ist вы́- immer betont: вы́йти, вы́писать, вы́ставить; im imperfektiven Partner nicht: выходи́ть, выпи́сывать.</p>' + ASPECT.de } });
  GT.registerPrefix({ id: 'в', label: 'в- (во-)', en: 'into', de: 'hinein',
    meanings: [
      { en: 'movement into', de: 'Bewegung hinein', examples: [ex('вход+ить', 'to enter; to log in', 'eintreten; sich anmelden'), ex('ввод+ить', 'to enter (data)', 'eingeben')] }
    ],
    match: { en: '<p>English: <b>in / into</b> (go in, type in); Latin <b>in-</b> (introduce).</p>', de: '<p>Deutsch: <b>ein-</b> / <b>hinein-</b>: eintreten (войти), eingeben (ввести). Vor Konsonantengruppen во-: войти, вошёл.</p>' },
    grammar: ASPECT });
  GT.registerPrefix({ id: 'пере', label: 'пере-', en: 'across; again; to another place; too much', de: 'hinüber; noch einmal; woandershin; zu viel',
    meanings: [
      { en: 'across, from one side to the other', de: 'hinüber, von einer Seite zur anderen', examples: [ex('переход+ить', 'to cross', 'überqueren')] },
      { en: 'again, redo', de: 'noch einmal, neu', examples: [ex('переп+исывать', 'to rewrite', 'neu schreiben'), ex('перезвон+ить', 'to call back', 'zurückrufen')] },
      { en: 'to another place, state or system', de: 'an einen anderen Ort, Zustand, ein anderes System', examples: [ex('перевод+ить', 'to translate; to transfer', 'übersetzen; überweisen'), ex('переставл+ять', 'to move, to rearrange', 'umstellen')] },
      { en: 'too much, excess', de: 'zu viel, Übermaß', examples: [ex('перее́сть', 'to overeat', 'sich überessen'), ex('переплати́ть', 'to overpay', 'zu viel bezahlen')] }
    ],
    match: { en: '<p>English: <b>trans-</b> (translate, transfer), <b>re-</b> (rewrite), <b>over-</b> (overpay).</p>', de: '<p>Deutsch: <b>über-</b> (übersetzen, überweisen, überqueren), <b>um-</b> (umstellen, umsteigen — пересесть), <b>zurück-</b> (zurückrufen).</p>' },
    grammar: ASPECT });
  GT.registerPrefix({ id: 'за', label: 'за-', en: 'brief visit; beginning; fixing; closing', de: 'kurzer Besuch; Beginn; Festhalten; Schließen',
    meanings: [
      { en: 'brief visit, going in on the way', de: 'kurzer Abstecher', examples: [ex('заход+ить', 'to drop in', 'vorbeischauen')] },
      { en: 'beginning of an action', de: 'Beginn einer Handlung', examples: [ex('завод+ить', 'to start (an engine)', 'anlassen'), ex('заработать', 'to start working (of a device)', 'anfangen zu funktionieren')] },
      { en: 'fixing, recording', de: 'Festhalten, Aufzeichnen', examples: [ex('зап+исывать', 'to write down, to record', 'notieren, aufnehmen'), ex('зап+исываться', 'to sign up', 'sich anmelden')] },
      { en: 'closing, covering', de: 'Schließen, Bedecken', examples: [ex('закр+ыть', 'to close', 'schließen'), ex('заблоки́ровать', 'to block', 'sperren')] }
    ],
    match: { en: '<p>No single English equivalent: <b>drop in</b>, <b>start</b>, <b>write down</b>, <b>close up</b>. Learn each verb with its meaning.</p>', de: '<p>Kein festes deutsches Gegenstück: <b>vorbei-</b> (vorbeikommen), <b>an-</b> (anlassen), <b>auf-</b> (aufschreiben), <b>zu-</b> (zumachen).</p>' },
    grammar: ASPECT });
  GT.registerPrefix({ id: 'под', label: 'под-', en: 'under; approach; slightly, in addition', de: 'unter; Annäherung; etwas, zusätzlich',
    meanings: [
      { en: 'under, from below', de: 'unter, von unten', examples: [ex('подп+исывать', 'to sign (write under)', 'unterschreiben')] },
      { en: 'approaching, coming close', de: 'Annäherung, nahe heran', examples: [ex('подход+ить', 'to approach', 'herangehen'), ex('подъ+езд', 'entrance (where you drive up)', 'Hauseingang')] },
      { en: 'slightly, secretly, in addition', de: 'ein wenig, heimlich, zusätzlich', examples: [ex('подработать', 'to earn on the side', 'dazuverdienen'), ex('подсказ+ать', 'to prompt, to give a hint', 'einen Tipp geben')] }
    ],
    match: { en: '<p>English: <b>under-/sub-</b> (underwrite, subscribe — подписаться!), <b>up to</b> (come up to).</p>', de: '<p>Deutsch: <b>unter-</b> (unterschreiben), <b>heran-</b> (herangehen), <b>dazu-</b> (dazuverdienen).</p>' },
    grammar: ASPECT });
  GT.registerPrefix({ id: 'от', label: 'от- (ото-)', en: 'away, off; in response; finishing', de: 'weg, ab; als Antwort; Abschluss',
    meanings: [
      { en: 'away, off, detaching', de: 'weg, ab, Ablösung', examples: [ex('отход+ить', 'to step away', 'sich entfernen'), ex('отвод+ить', 'to take (someone) away', 'wegbringen'), ex('отх+оды', 'waste', 'Abfälle')] },
      { en: 'in response, giving back', de: 'als Antwort, zurück', examples: [ex('отв+етить', 'to answer', 'antworten'), ex('отчёт', 'report (account given back)', 'Bericht')] },
      { en: 'finishing an action', de: 'Abschluss einer Handlung', examples: [ex('отработать', 'to work off (a shift)', 'abarbeiten'), ex('отремонти́ровать', 'to repair completely', 'fertig reparieren')] }
    ],
    match: { en: '<p>English: <b>off / away</b> (step away), <b>re-/back</b> (respond, report back).</p>', de: '<p>Deutsch: <b>ab-</b> / <b>weg-</b> (abarbeiten, weggehen), <b>ant-/zurück-</b> (antworten — ответить).</p>' },
    grammar: ASPECT });

  /* ---------------- suffixes ---------------- */
  GT.registerSuffix({ id: 'ost', label: '-ость', gender: 'fem.', en: 'abstract quality (from adjectives)', de: 'abstrakte Eigenschaft (aus Adjektiven)',
    posChange: { en: 'adjective → feminine noun', de: 'Adjektiv → feminines Substantiv' },
    pattern: { en: 'adjective stem + -ость: уязвимый → уязвимость, новый → новость.', de: 'Adjektivstamm + -ость: уязвимый → уязвимость, новый → новость.' },
    spelling: { en: 'After soft stems and sibilants -есть is not a separate suffix: свежесть (fresh) is свеж- + -есть, a spelling variant.', de: 'Nach Zischlauten erscheint die Schreibvariante -есть: свежесть (свеж- + -есть).' },
    exceptions: { en: 'новость means “a piece of news”, not “newness” — a lexicalised meaning.', de: 'новость heißt „Nachricht“, nicht „Neuheit“ — lexikalisiert.' },
    limitations: { en: 'Not every adjective forms an -ость noun; some use -ота (красота) or -ство.', de: 'Nicht jedes Adjektiv bildet -ость; manche nutzen -ота (красота) oder -ство.' },
    productivity: { en: 'Very productive, especially in technical and abstract vocabulary (доступность, надёжность, безопасность).', de: 'Sehr produktiv, besonders im Fach- und Abstraktwortschatz (доступность, надёжность, безопасность).' },
    examples: [ex('уязв+имость', 'vulnerability', 'die Schwachstelle'), ex('безоп+асность', 'security, safety', 'die Sicherheit'), ex('надёжность', 'reliability', 'die Zuverlässigkeit'), ex('н+овость', 'news', 'die Nachricht')],
    exercise: {
      question: { en: 'What gender is «надёжность» and what does -ость add?', de: 'Welches Genus hat «надёжность» und was bedeutet -ость?' },
      answer: { en: 'feminine · abstract quality', de: 'feminin · abstrakte Eigenschaft' },
      options: { en: ['feminine · abstract quality', 'masculine · a person', 'neuter · an action', 'feminine · a small thing'], de: ['feminin · abstrakte Eigenschaft', 'maskulin · eine Person', 'neutrum · eine Handlung', 'feminin · etwas Kleines'] },
      explain: { en: 'All nouns in -ость are feminine soft-sign nouns naming a quality: надёжный (reliable) → надёжность (reliability).', de: 'Alle Substantive auf -ость sind feminin (auf -ь) und bezeichnen eine Eigenschaft: надёжный → надёжность (Zuverlässigkeit).' } } });
  GT.registerSuffix({ id: 'nie', label: '-ние / -ение', gender: 'neut.', en: 'action or its result (from verbs)', de: 'Handlung oder ihr Ergebnis (aus Verben)',
    posChange: { en: 'verb → neuter noun', de: 'Verb → neutrales Substantiv' },
    pattern: { en: 'verb stem + -ние / -ение: описать → описание, обновить → обновление.', de: 'Verbstamm + -ние / -ение: описать → описание, обновить → обновление.' },
    spelling: { en: 'Consonant changes from the verb are kept: обновить (обновлю) → обновление, решить → решение.', de: 'Konsonantenwechsel des Verbs bleibt: обновить (обновлю) → обновление, решить → решение.' },
    exceptions: { en: 'Some have a concrete meaning: здание (building), расписание (timetable).', de: 'Manche sind konkret: здание (Gebäude), расписание (Fahrplan).' },
    limitations: { en: 'Many verbs prefer other noun forms: -ка (доставка), zero suffix (переход).', de: 'Viele Verben bevorzugen andere Formen: -ка (доставка), Nullsuffix (переход).' },
    productivity: { en: 'Productive in formal and technical style — like German -ung and English -tion.', de: 'Produktiv im formellen und technischen Stil — wie deutsch -ung.' },
    examples: [ex('опис+ание', 'description', 'die Beschreibung'), ex('обновл+ение', 'update', 'die Aktualisierung'), ex('реш+ение', 'decision; solution', 'die Entscheidung; die Lösung'), ex('совещ+ание', 'meeting', 'die Besprechung')],
    exercise: {
      question: { en: 'Which noun is formed from «решить» (to decide / to solve)?', de: 'Welches Substantiv wird aus «решить» (entscheiden / lösen) gebildet?' },
      answer: { en: 'решение (neuter)', de: 'решение (neutrum)' },
      options: { en: ['решение (neuter)', 'решность (feminine)', 'решитель (masculine)', 'решка (feminine)'], de: ['решение (neutrum)', 'решность (feminin)', 'решитель (maskulin)', 'решка (feminin)'] },
      explain: { en: '-ение turns a verb into a neuter noun for the action or its result: решить → решение (decision, solution) — like German entscheiden → Entscheidung.', de: '-ение macht aus einem Verb ein Neutrum für Handlung oder Ergebnis: решить → решение — wie entscheiden → Entscheidung.' } } });
  GT.registerSuffix({ id: 'tel', label: '-тель', gender: 'masc.', en: 'agent: person or device that does something', de: 'Täter: Person oder Gerät, das etwas tut',
    posChange: { en: 'verb → masculine noun', de: 'Verb → maskulines Substantiv' },
    pattern: { en: 'verb stem + -тель: водить → водитель, руководить → руководитель.', de: 'Verbstamm + -тель: водить → водитель, руководить → руководитель.' },
    spelling: { en: 'The verb’s theme vowel stays: читать → читатель, писать → писатель.', de: 'Der Themavokal bleibt: читать → читатель, писать → писатель.' },
    exceptions: { en: 'Some name devices: выключатель (switch), двигатель (engine).', de: 'Manche bezeichnen Geräte: выключатель (Schalter), двигатель (Motor).' },
    limitations: { en: 'Female forms add -ница: учительница, руководительница (the latter is rare; руководитель is used for women too).', de: 'Weibliche Formen mit -ница: учительница; руководитель wird meist auch für Frauen benutzt.' },
    productivity: { en: 'Productive, like English -er and German -er.', de: 'Produktiv, wie deutsch -er.' },
    examples: [ex('вод+итель', 'driver', 'der Fahrer'), ex('руковод+итель', 'manager', 'der Leiter'), ex('пис+атель', 'writer', 'der Schriftsteller'), ex('пользователь', 'user', 'der Benutzer')],
    exercise: {
      question: { en: 'What is a «пользователь» (from пользоваться, to use)?', de: 'Was ist ein «пользователь» (von пользоваться, benutzen)?' },
      answer: { en: 'a user (the person who uses)', de: 'ein Benutzer (die Person, die benutzt)' },
      options: { en: ['a user (the person who uses)', 'usefulness', 'the process of using', 'a small useful thing'], de: ['ein Benutzer (die Person, die benutzt)', 'die Nützlichkeit', 'der Vorgang des Benutzens', 'ein kleines nützliches Ding'] },
      explain: { en: '-тель names the doer of the verb’s action: пользоваться → пользователь (user), like German benutzen → Benutzer.', de: '-тель bezeichnet den Täter: пользоваться → пользователь, wie benutzen → Benutzer.' } } });
  GT.registerSuffix({ id: 'nik', label: '-ник / -чик', gender: 'masc.', en: 'person connected with something', de: 'Person, die mit etwas zu tun hat',
    posChange: { en: 'noun / verb → masculine noun (person)', de: 'Substantiv / Verb → maskulines Substantiv (Person)' },
    pattern: { en: 'stem + -ник: наставить → наставник, начало → начальник; stem + -чик after д/т: переводить → переводчик, разработать → разработчик.', de: 'Stamm + -ник: наставить → наставник, начало → начальник; nach д/т -чик: переводить → переводчик, разработать → разработчик.' },
    spelling: { en: '-чик appears after д, т (and some others); -щик after other consonants: подписчик is an exception with -чик after с.', de: '-чик nach д, т; -щик nach anderen Konsonanten; подписчик ist eine Ausnahme mit -чик nach с.' },
    exceptions: { en: '-ник can also name things: чайник (kettle), будильник (alarm clock).', de: '-ник kann auch Dinge benennen: чайник (Wasserkocher), будильник (Wecker).' },
    limitations: { en: 'Women: -ница / -чица: переводчица, начальница.', de: 'Frauen: -ница / -чица: переводчица, начальница.' },
    productivity: { en: 'Productive for professions and roles.', de: 'Produktiv für Berufe und Rollen.' },
    examples: [ex('перев+одчик', 'translator', 'der Übersetzer'), ex('разраб+отчик', 'developer', 'der Entwickler'), ex('наст+авник', 'mentor', 'der Mentor'), ex('злоум+ышленник', 'attacker', 'der Angreifer')],
    exercise: {
      question: { en: 'From «переводить» (to translate), who is a «переводчик»?', de: 'Von «переводить» (übersetzen): wer ist ein «переводчик»?' },
      answer: { en: 'a translator', de: 'ein Übersetzer' },
      options: { en: ['a translator', 'a translation', 'a small transfer', 'translatability'], de: ['ein Übersetzer', 'eine Übersetzung', 'eine kleine Überweisung', 'die Übersetzbarkeit'] },
      explain: { en: '-чик (after д/т) names a person doing the action: переводчик = translator. The action noun is перевод.', de: '-чик (nach д/т) bezeichnet die handelnde Person: переводчик = Übersetzer. Die Handlung heißt перевод.' } } });
  GT.registerSuffix({ id: 'ka', label: '-к(а)', gender: 'fem.', en: 'action/result noun; colloquial short form; diminutive', de: 'Handlungs-/Ergebnisnomen; umgangssprachliche Kurzform; Verkleinerung',
    posChange: { en: 'verb / phrase → feminine noun', de: 'Verb / Wortgruppe → feminines Substantiv' },
    pattern: { en: 'verb stem + -ка: доставить → доставка, выставить → выставка; phrase → colloquial noun: удалённая работа → удалёнка.', de: 'Verbstamm + -ка: доставить → доставка, выставить → выставка; Wortgruppe → umgangssprachlich: удалённая работа → удалёнка.' },
    spelling: { en: 'Fleeting vowel in the genitive plural: доставка → доставок.', de: 'Flüchtiger Vokal im Genitiv Plural: доставка → доставок.' },
    exceptions: { en: 'With nouns -ка can be diminutive or feminine: книжка (little book), студентка (female student).', de: 'Bei Substantiven verkleinernd oder weiblich: книжка (Büchlein), студентка (Studentin).' },
    limitations: { en: 'The colloquial clippings (удалёнка, учётка, электричка) are informal — avoid them in official texts.', de: 'Umgangssprachliche Kurzformen (удалёнка, учётка) sind informell — nicht in offiziellen Texten.' },
    productivity: { en: 'One of the most productive suffixes in modern colloquial Russian.', de: 'Eines der produktivsten Suffixe im heutigen umgangssprachlichen Russisch.' },
    examples: [ex('дост+авка', 'delivery', 'die Lieferung'), ex('в+ыставка', 'exhibition', 'die Ausstellung'), ex('удалёнка', 'remote work (colloq.)', 'Homeoffice (ugs.)'), ex('перес+адка', 'change (of trains)', 'das Umsteigen')],
    exercise: {
      question: { en: 'What is «удалёнка» compared with «удалённая работа»?', de: 'Was ist «удалёнка» im Vergleich zu «удалённая работа»?' },
      answer: { en: 'the same meaning, but colloquial', de: 'dieselbe Bedeutung, aber umgangssprachlich' },
      options: { en: ['the same meaning, but colloquial', 'a small remote job', 'a remote worker (person)', 'a formal legal term'], de: ['dieselbe Bedeutung, aber umgangssprachlich', 'ein kleiner Remote-Job', 'eine Remote-Mitarbeiterin', 'ein formeller Rechtsbegriff'] },
      explain: { en: '-ка clips an adjective + noun phrase into one informal noun: удалённая работа → удалёнка, учётная запись → учётка.', de: '-ка verkürzt eine Wortgruppe zu einem informellen Substantiv: удалённая работа → удалёнка, учётная запись → учётка.' } } });
  GT.registerSuffix({ id: 'sk', label: '-ск(ий)', gender: 'adj.', en: 'relational adjective: belonging to, connected with', de: 'Beziehungsadjektiv: zugehörig, bezogen auf',
    posChange: { en: 'noun → adjective', de: 'Substantiv → Adjektiv' },
    pattern: { en: 'noun stem + -ский: Германия → немецкий (irregular), Москва → московский, город → городской.', de: 'Substantivstamm + -ский: Москва → московский, город → городской.' },
    spelling: { en: 'Consonant changes: к/ц + -ский → -цкий: немецкий, турецкий.', de: 'Konsonantenwechsel: к/ц + -ский → -цкий: немецкий, турецкий.' },
    exceptions: { en: 'Nationality adjectives are written with a small letter: русский, немецкий, английский.', de: 'Nationalitätsadjektive werden kleingeschrieben: русский, немецкий, английский.' },
    limitations: { en: 'Not gradable: no comparative (*более московский).', de: 'Nicht steigerbar: kein Komparativ (*более московский).' },
    productivity: { en: 'Productive for place names, institutions and fields.', de: 'Produktiv für Ortsnamen, Institutionen und Fachgebiete.' },
    examples: [ex('р+усский', 'Russian', 'russisch'), ex('неме́цкий', 'German', 'deutsch'), ex('городск+ой', 'urban, city', 'städtisch'), ex('д+етский', 'children’s', 'Kinder-')],
    exercise: {
      question: { en: 'Which adjective means “city, urban” (from город)?', de: 'Welches Adjektiv bedeutet „städtisch“ (von город)?' },
      answer: { en: 'городской', de: 'городской' },
      options: { en: ['городской', 'городость', 'городитель', 'городение'], de: ['городской', 'городость', 'городитель', 'городение'] },
      explain: { en: '-ск- forms relational adjectives: город → городской (городской транспорт — city transport).', de: '-ск- bildet Beziehungsadjektive: город → городской (городской транспорт — Stadtverkehr).' } } });

  /* ---------------- classical elements ---------------- */
  GT.registerClassical({ id: 'tele', label: 'теле-', origin: 'Greek', en: 'far, at a distance (Greek tēle)', de: 'fern, in der Ferne (griech. tēle)',
    history: { en: 'From Greek tēle “far”; entered Russian in the 19th–20th centuries through international technical words (телеграф, телефон, телевизор).', de: 'Von griech. tēle „fern“; kam im 19.–20. Jh. über internationale Fachwörter ins Russische (телеграф, телефон, телевизор).' },
    limitations: { en: 'In modern Russian теле- also means “television” (телеканал, телеведущий) — not “distance”. Do not build new words with it freely.', de: 'Im heutigen Russisch heißt теле- auch „Fernsehen“ (телеканал, телеведущий) — nicht „Ferne“. Nicht frei neue Wörter bilden.' },
    examples: [ex('телеф+он', 'telephone', 'das Telefon'), ex('телев+изор', 'TV set', 'der Fernseher'), ex('телем+етрия', 'telemetry', 'die Telemetrie')],
    source: 'Vasmer, Etymological Dictionary of Russian; Greek τῆλε' });
  GT.registerClassical({ id: 'avto', label: 'авто-', origin: 'Greek', en: 'self; (modern) automobile', de: 'selbst; (modern) Auto',
    history: { en: 'From Greek autos “self” (автомат, автономный). In the 20th century авто- also became short for автомобиль (автосервис).', de: 'Von griech. autos „selbst“ (автомат, автономный). Im 20. Jh. wurde авто- auch Kurzform für автомобиль (автосервис).' },
    limitations: { en: 'False friends inside the family: автор (author) and авторизация (authorisation) come from Latin auctor, NOT from autos.', de: 'Falsche Verwandte: автор (Autor) und авторизация (Autorisierung) kommen von lat. auctor, NICHT von autos.' },
    examples: [ex('автом+ат', 'automatic machine', 'der Automat'), ex('автон+омный', 'autonomous', 'autonom'), ex('автосе́рвис', 'car service', 'die Autowerkstatt')],
    source: 'Vasmer, Etymological Dictionary of Russian; Greek αὐτός; Latin auctor' });
  GT.registerClassical({ id: 'logiya', label: '-л+огия', origin: 'Greek', en: 'study, science of (Greek -logia)', de: 'Lehre, Wissenschaft von (griech. -logia)',
    history: { en: 'From Greek -logia (logos “word, reason”), via Latin and French into the names of sciences: биология, технология, экология.', de: 'Von griech. -logia (logos „Wort, Vernunft“), über Latein und Französisch in Wissenschaftsnamen: биология, технология, экология.' },
    limitations: { en: 'Stress is on -ло́гия: биоло́гия, техноло́гия. The person ends in -лог (биолог), the adjective in -логический.', de: 'Betonung auf -ло́гия: биоло́гия, техноло́гия. Die Person endet auf -лог (биолог), das Adjektiv auf -логический.' },
    examples: [ex('технол+огия', 'technology', 'die Technologie'), ex('экол+огия', 'ecology', 'die Ökologie'), ex('психол+огия', 'psychology', 'die Psychologie')],
    source: 'Greek -λογία; standard dictionaries of foreign words' });
})();
