/* RUSSIAN GRAMMAR · C1 lessons: aspect in infinitives, verb government, declining numerals, impersonal sentences,
 * the passive (+ extra drills for the word-order starter). Explanations en + de inline; "+" marks stress. */

/* ---------- C1 · Aspect in infinitives: нельзя войти / нельзя входить ---------- */
GT.registerGrammar({
  id: 'aspect_infinitive',
  level: 'C1',
  title: { en: 'Aspect after нельзя, не надо, не стоит', de: 'Aspekt nach нельзя, не надо, не стоит' },
  summary: { en: 'нельзя войти = it’s impossible to get in; нельзя входить = you mustn’t go in. Negation flips the usual aspect choice.', de: 'нельзя войти = man kann nicht hinein; нельзя входить = man darf nicht hinein. Die Verneinung kehrt die Aspektwahl um.' },
  explanation: {
    en: '<p>In the infinitive, aspect changes the <b>meaning of the modal word</b>, not just the view of the action:</p>' +
      '<ul><li><b>нельз+я + perfective</b> = it is <b>impossible</b>: <em>Дверь заперт+а, нельз+я войт+и.</em> (You can’t get in.)</li>' +
      '<li><b>нельз+я + imperfective</b> = it is <b>forbidden</b>: <em>Туд+а нельз+я вход+ить.</em> (You mustn’t go in there.)</li>' +
      '<li><b>не н+адо / не н+ужно / не ст+оит + imperfective</b> = there’s no need, don’t: <em>Не н+адо звон+ить, я сам+а напиш+у.</em></li>' +
      '<li><b>н+адо / н+ужно + perfective</b> = a concrete task to complete: <em>Н+адо позвон+ить вр+ачу.</em> <b>+ imperfective</b> = a regular duty or “time to start”: <em>Н+адо звон+ить мам+е ч+аще. Пор+а идт+и.</em></li>' +
      '<li><b>не</b> + perfective infinitive often means “can’t / won’t manage”: <em>Тебе не пон+ять.</em> (You’ll never understand.) <b>Не + perfective</b> with a warning: <em>Смотр+и не упад+и!</em></li></ul>' +
      '<p>Rule of thumb: <b>negation pulls towards the imperfective</b> (no action at all), except when it means impossibility.</p>',
    de: '<p>Im Infinitiv ändert der Aspekt die <b>Bedeutung des Modalworts</b>:</p>' +
      '<ul><li><b>нельз+я + perfektiv</b> = es ist <b>unmöglich</b> (man kann nicht): <em>Дверь заперт+а, нельз+я войт+и.</em></li>' +
      '<li><b>нельз+я + imperfektiv</b> = es ist <b>verboten</b> (man darf nicht): <em>Туд+а нельз+я вход+ить.</em></li>' +
      '<li><b>не н+адо / не н+ужно / не ст+оит + imperfektiv</b> = nicht nötig, lass es: <em>Не н+адо звон+ить, я сам+а напиш+у.</em></li>' +
      '<li><b>н+адо / н+ужно + perfektiv</b> = eine konkrete Aufgabe: <em>Н+адо позвон+ить вр+ачу.</em> <b>+ imperfektiv</b> = regelmäßige Pflicht oder „Zeit, anzufangen“: <em>Пор+а идт+и.</em></li>' +
      '<li><b>не</b> + perfektiver Infinitiv bedeutet oft „nicht schaffen“: <em>Тебе не пон+ять.</em> (Du wirst es nie verstehen.)</li></ul>' +
      '<p>Faustregel: <b>Verneinung zieht zum imperfektiven Aspekt</b>, außer wenn sie Unmöglichkeit ausdrückt.</p>'
  },
  tables: [
    { caption: { en: 'Same verb, different meaning', de: 'Gleiches Verb, andere Bedeutung' },
      head: { en: ['Phrase', 'Meaning'], de: ['Wendung', 'Bedeutung'] },
      deCols: [0],
      rows: { en: [['нельз+я откр+ыть', 'it can’t be opened'], ['нельз+я открыв+ать', 'you mustn’t open it'], ['н+адо куп+ить хлеб', 'we need to buy bread (task)'], ['не н+адо покуп+ать хлеб', 'no need to buy bread'], ['не ст+оит волнов+аться', 'there’s no point worrying']],
              de: [['нельз+я откр+ыть', 'lässt sich nicht öffnen'], ['нельз+я открыв+ать', 'darf nicht geöffnet werden'], ['н+адо куп+ить хлеб', 'wir müssen Brot kaufen (Aufgabe)'], ['не н+адо покуп+ать хлеб', 'man muss kein Brot kaufen'], ['не ст+оит волнов+аться', 'kein Grund zur Sorge']] } }
  ],
  examples: [
    { t: 'Здесь [[нельз+я кур+ить]].', en: 'Smoking is not allowed here.', de: 'Hier darf man nicht rauchen.' },
    { t: 'Без п+аспорта [[нельз+я получ+ить]] в+изу.', en: 'You can’t get a visa without a passport.', de: 'Ohne Pass kann man kein Visum bekommen.' },
    { t: '[[Не н+адо извин+яться]], всё в п+орядке.', en: 'No need to apologise, it’s fine.', de: 'Du musst dich nicht entschuldigen, alles ist gut.' },
    { t: 'З+автра [[н+ужно отд+ать]] отчёт.', en: 'The report has to be handed in tomorrow.', de: 'Morgen muss der Bericht abgegeben werden.' }
  ],
  pitfalls: [
    { title: { en: 'не надо + perfective', de: 'не надо + perfektiv' },
      html: { en: '<span class="wrong">Не н+адо позвон+ить.</span> → <span class="right">Не н+адо звон+ить.</span> “No need to call” denies the action altogether → imperfective.', de: '<span class="wrong">Не н+адо позвон+ить.</span> → <span class="right">Не н+адо звон+ить.</span> Die Handlung wird ganz verneint → imperfektiv.' } }
  ],
  drills: [
    { id: 'ru-g-ai-1', kind: 'choice', q: 'Ключ слом+ался, дверь ___.', options: ['нельз+я откр+ыть', 'нельз+я открыв+ать'], answer: 0, explain: { en: 'Impossible → perfective.', de: 'Unmöglich → perfektiv.' } },
    { id: 'ru-g-ai-2', kind: 'choice', q: 'Это ч+ужая п+очта, её ___.', options: ['нельз+я чит+ать', 'нельз+я прочит+ать'], answer: 0, explain: { en: 'Forbidden → imperfective.', de: 'Verboten → imperfektiv.' } },
    { id: 'ru-g-ai-3', kind: 'choice', q: 'Не н+адо ___ мне +утром, я сам+а позвон+ю.', options: ['звон+ить', 'позвон+ить'], answer: 0, explain: { en: 'не надо + imperfective.', de: 'не надо + imperfektiv.' } },
    { id: 'ru-g-ai-4', kind: 'choice', q: 'Мне н+ужно ___ +этот докум+ент до п+ятницы.', options: ['подпис+ать', 'подп+исывать'], answer: 0, explain: { en: 'A concrete task with a deadline → perfective.', de: 'Konkrete Aufgabe mit Frist → perfektiv.' } },
    { id: 'ru-g-ai-5', kind: 'choice', q: 'Уж+е п+оздно, пор+а ___ дом+ой.', options: ['идт+и', 'пойт+и'], answer: 0, explain: { en: 'пора + imperfective = time to start doing it.', de: 'пора + imperfektiv = Zeit, damit anzufangen.' } }
  ]
});

/* ---------- C1 · Verb government ---------- */
GT.registerGrammar({
  id: 'government',
  level: 'C1',
  title: { en: 'Verb government: which case after which verb', de: 'Rektion: welcher Kasus nach welchem Verb' },
  summary: { en: 'благодар+ить за, жаловаться на, скуч+ать по, удивл+яться чему, боя́ться чего — learn the verb with its case.', de: 'благодарить за, жаловаться на, скучать по, удивляться чему, бояться чего — das Verb mit seinem Kasus lernen.' },
  explanation: {
    en: '<p>Many Russian verbs take a case or preposition that English and German speakers would not guess. Learn them as chunks:</p>' +
      '<ul><li><b>Genitive</b>: <em>бо+яться, избег+ать, доб+иться, достиг+ать</em>: <em>бо+юсь <b>соб+ак</b></em>, <em>доб+иться <b>усп+еха</b></em>.</li>' +
      '<li><b>Dative</b>: <em>пом+очь, меш+ать, звон+ить, сов+етовать, удивл+яться, р+адоваться, зав+идовать</em>: <em>удивл+яюсь <b>теб+е</b></em>, <em>р+адуюсь <b>встр+ече</b></em>.</li>' +
      '<li><b>Instrumental</b>: <em>заним+аться, интерес+оваться, горд+иться, руковод+ить, вл+адеть, польз+оваться, восхищ+аться</em>: <em>горж+усь <b>сын+ом</b></em>, <em>руковож+у <b>отд+елом</b></em>.</li>' +
      '<li><b>за + Acc</b>: <em>благодар+ить за, отвеч+ать за, голосов+ать за</em>; <b>на + Acc</b>: <em>жал+оваться на, серд+иться на, наде+яться на</em>; <b>по + Dat</b>: <em>скуч+ать по</em>; <b>в + Acc</b>: <em>в+ерить в</em>; <b>о + Prep</b>: <em>мечт+ать о, забот+иться о</em>.</li></ul>',
    de: '<p>Viele russische Verben verlangen einen Kasus oder eine Präposition, die man nicht erraten kann — wie die deutschen Verben mit Präposition. Als Einheit lernen:</p>' +
      '<ul><li><b>Genitiv</b>: <em>бо+яться, избег+ать, доб+иться</em>: <em>бо+юсь <b>соб+ак</b></em> (ich habe Angst vor Hunden).</li>' +
      '<li><b>Dativ</b>: <em>пом+очь, меш+ать, звон+ить, сов+етовать, удивл+яться, р+адоваться</em>: <em>р+адуюсь <b>встр+ече</b></em> (ich freue mich über das Treffen).</li>' +
      '<li><b>Instrumental</b>: <em>заним+аться, интерес+оваться, горд+иться, руковод+ить, польз+оваться</em>: <em>интерес+уюсь <b>иск+усством</b></em> (ich interessiere mich für Kunst).</li>' +
      '<li><b>за + Akk</b>: <em>благодар+ить за</em> (danken für); <b>на + Akk</b>: <em>жал+оваться на</em> (sich beschweren über), <em>серд+иться на</em>; <b>по + Dat</b>: <em>скуч+ать по</em> (vermissen); <b>в + Akk</b>: <em>в+ерить в</em> (glauben an); <b>о + Präp</b>: <em>мечт+ать о</em> (träumen von).</li></ul>'
  },
  tables: [
    { caption: { en: 'Common verbs', de: 'Häufige Verben' },
      head: { en: ['Verb', 'Case', 'Example'], de: ['Verb', 'Kasus', 'Beispiel'] },
      deCols: [0, 2],
      rows: { en: [['бо+яться', 'Gen.', 'бо+юсь темнот+ы'], ['пом+очь', 'Dat.', 'пом+очь сос+еду'], ['интерес+оваться', 'Instr.', 'интерес+уюсь ист+орией'], ['благодар+ить за', 'за + Acc.', 'спас+ибо за п+омощь'], ['жал+оваться на', 'на + Acc.', 'ж+алуется на ш+ум'], ['скуч+ать по', 'по + Dat.', 'скуч+аю по д+ому'], ['в+ерить в', 'в + Acc.', 'в+ерю в теб+я']],
              de: [['бо+яться', 'Gen.', 'бо+юсь темнот+ы'], ['пом+очь', 'Dat.', 'пом+очь сос+еду'], ['интерес+оваться', 'Instr.', 'интерес+уюсь ист+орией'], ['благодар+ить за', 'за + Akk.', 'спас+ибо за п+омощь'], ['жал+оваться на', 'на + Akk.', 'ж+алуется на ш+ум'], ['скуч+ать по', 'по + Dat.', 'скуч+аю по д+ому'], ['в+ерить в', 'в + Akk.', 'в+ерю в теб+я']] } }
  ],
  examples: [
    { t: 'Я +очень скуч+аю [[по семь+е]].', en: 'I miss my family a lot.', de: 'Ich vermisse meine Familie sehr.' },
    { t: 'Он+а руковод+ит [[больш+им отд+елом]].', en: 'She runs a large department.', de: 'Sie leitet eine große Abteilung.' },
    { t: 'Спас+ибо [[за приглаш+ение]]!', en: 'Thanks for the invitation!', de: 'Danke für die Einladung!' },
    { t: 'Не меш+ай [[мне]] раб+отать.', en: 'Don’t disturb me while I’m working.', de: 'Stör mich nicht beim Arbeiten.' },
    { t: 'Мы горд+имся [[н+ашей ком+андой]].', en: 'We are proud of our team.', de: 'Wir sind stolz auf unser Team.' }
  ],
  pitfalls: [
    { title: { en: 'Not a literal translation', de: 'Nicht wörtlich übersetzen' },
      html: { en: '“help <b>him</b>” = <span class="right">пом+очь ем+у</span> (dative), not <span class="wrong">пом+очь ег+о</span>. “miss <b>you</b>” = <span class="right">скуч+аю по теб+е</span>.', de: '„stolz <b>auf</b>“ = <span class="right">горд+иться + Instr.</span>, nicht <span class="wrong">горд+иться на</span>. „sich interessieren <b>für</b>“ = <span class="right">интерес+оваться + Instr.</span>, ohne Präposition.' } }
  ],
  drills: [
    { id: 'ru-g-gov-1', kind: 'choice', q: 'Он+а интерес+уется ___.', options: ['пол+итикой', 'пол+итику', 'о пол+итике'], answer: 0, explain: { en: 'интересоваться + instrumental.', de: 'интересоваться + Instrumental.' } },
    { id: 'ru-g-gov-2', kind: 'choice', q: 'Сос+еди ж+алуются ___ ш+ум.', options: ['на', 'о', 'за'], answer: 0, explain: { en: 'жаловаться на + accusative.', de: 'жаловаться на + Akkusativ.' } },
    { id: 'ru-g-gov-3', kind: 'gap', q: 'Ребёнок бо+ится ___. (темнот+а)', answer: 'темнот+ы', explain: { en: 'бояться + genitive.', de: 'бояться + Genitiv.' } },
    { id: 'ru-g-gov-4', kind: 'gap', q: 'Я +очень скуч+аю по ___. (вы)', answer: 'вас', explain: { en: 'скучать по + dative; with pronouns по вас / по вам are both used, по вас is traditional.', de: 'скучать по + Dativ; bei Pronomen ist по вас traditionell, по вам auch üblich.' } },
    { id: 'ru-g-gov-5', kind: 'choice', q: 'Мы благодар+им вас ___ п+омощь.', options: ['за', 'на', 'для'], answer: 0, explain: { en: 'благодарить за + accusative.', de: 'благодарить за + Akkusativ.' } }
  ]
});

/* ---------- C1 · Declining numerals ---------- */
GT.registerGrammar({
  id: 'numerals_case',
  level: 'C1',
  title: { en: 'Declining numerals: с пятью́ друзья́ми, о́коло ты́сячи', de: 'Zahlwörter deklinieren: с пятью́ друзья́ми, о́коло ты́сячи' },
  summary: { en: 'In oblique cases the numeral itself declines and the noun follows the case in the plural.', de: 'In den obliquen Kasus wird das Zahlwort selbst dekliniert, und das Nomen steht im Plural desselben Kasus.' },
  explanation: {
    en: '<p>In the nominative/accusative, numbers govern the noun (<em>пять друз+ей</em>). In <b>all other cases</b> it’s the other way round: the <b>numeral declines</b>, and the noun takes the <b>same case in the plural</b>:</p>' +
      '<ul><li>Genitive: <em>от пят+и друз+ей, +около двух час+ов</em></li>' +
      '<li>Dative: <em>к пят+и друзь+ям, по трём сторон+ам</em></li>' +
      '<li>Instrumental: <em>с пять+ю друзь+ями, с двум+я колл+егами</em></li>' +
      '<li>Prepositional: <em>о пят+и друзь+ях, в двух город+ах</em></li></ul>' +
      '<p><b>Two, three, four</b> decline like adjectives in the plural: <em>двух, двум, двумя, (о) двух</em>. <b>5–20, 30</b> decline like <em>тетрадь</em>: <em>пят+и, пять+ю</em>. <b>40, 90, 100</b> have only two forms: <em>сорок / сорок+а, сто / ст+а</em>. <b>тысяча</b> is a feminine noun: <em>с т+ысячей</em> (or <em>т+ысячью</em>), <em>+около т+ысячи</em>. In compound numbers <b>every part</b> declines: <em>с двадцать+ю пять+ю</em>.</p>' +
      '<p>In speech, people often simplify long numbers; in writing, full declension is expected.</p>',
    de: '<p>Im Nominativ/Akkusativ regiert die Zahl das Nomen (<em>пять друз+ей</em>). In <b>allen anderen Kasus</b> ist es umgekehrt: das <b>Zahlwort wird dekliniert</b>, und das Nomen steht im <b>selben Kasus Plural</b>:</p>' +
      '<ul><li>Genitiv: <em>от пят+и друз+ей, +около двух час+ов</em></li>' +
      '<li>Dativ: <em>к пят+и друзь+ям</em></li>' +
      '<li>Instrumental: <em>с пять+ю друзь+ями, с двум+я колл+егами</em></li>' +
      '<li>Präpositiv: <em>о пят+и друзь+ях, в двух город+ах</em></li></ul>' +
      '<p><b>2, 3, 4</b> deklinieren wie Adjektive im Plural: <em>двух, двум, двумя</em>. <b>5–20, 30</b> wie <em>тетрадь</em>: <em>пят+и, пять+ю</em>. <b>40, 90, 100</b> haben nur zwei Formen: <em>сорок / сорок+а, сто / ст+а</em>. <b>тысяча</b> ist ein feminines Nomen: <em>+около т+ысячи</em>. Bei zusammengesetzten Zahlen wird <b>jeder Teil</b> dekliniert.</p>'
  },
  tables: [
    { caption: { en: 'Case forms', de: 'Kasusformen' },
      head: { en: ['Case', '2', '3', '5', '100'], de: ['Kasus', '2', '3', '5', '100'] },
      deCols: [1, 2, 3, 4],
      rows: [['Nom.', 'два / две', 'три', 'пять', 'сто'], ['Gen.', 'двух', 'трёх', 'пят+и', 'ст+а'], ['Dat.', 'двум', 'трём', 'пят+и', 'ст+а'], ['Instr.', 'двум+я', 'трем+я', 'пять+ю', 'ст+а'], ['Prep.', 'о двух', 'о трёх', 'о пят+и', 'о ст+а']] }
  ],
  examples: [
    { t: 'Я разгов+аривал [[с трем+я]] кли+ентами.', en: 'I spoke with three clients.', de: 'Ich habe mit drei Kunden gesprochen.' },
    { t: 'Он+а жил+а [[в пят+и]] стр+анах.', en: 'She has lived in five countries.', de: 'Sie hat in fünf Ländern gelebt.' },
    { t: 'Нас было [[+около двадцат+и]] челов+ек.', en: 'There were about twenty of us.', de: 'Wir waren etwa zwanzig Leute.' },
    { t: 'Ц+ены в+ыросли [[на сто]] рубл+ей.', en: 'Prices rose by a hundred roubles.', de: 'Die Preise stiegen um hundert Rubel.' }
  ],
  pitfalls: [
    { title: { en: 'Don’t keep the nominative', de: 'Nicht im Nominativ lassen' },
      html: { en: '<span class="wrong">с пять друз+ей</span> → <span class="right">с пять+ю друзь+ями</span>.', de: '<span class="wrong">с пять друз+ей</span> → <span class="right">с пять+ю друзь+ями</span>.' } },
    { title: { en: 'около, более, менее + genitive', de: 'около, более, менее + Genitiv' },
      html: { en: '<span class="right">+около пят+и мин+ут, б+олее ст+а челов+ек</span> — the number goes into the genitive.', de: '<span class="right">+около пят+и мин+ут, б+олее ст+а челов+ек</span> — die Zahl steht im Genitiv.' } }
  ],
  drills: [
    { id: 'ru-g-nc-1', kind: 'choice', q: 'Я зн+аю +этого челов+ека уж+е б+олее ___ лет.', options: ['десят+и', 'д+есять', 'десять+ю'], answer: 0, explain: { en: 'более + genitive → десяти.', de: 'более + Genitiv → десяти.' } },
    { id: 'ru-g-nc-2', kind: 'choice', q: 'Мы встр+етились с ___ колл+егами.', options: ['двум+я', 'два', 'двух'], answer: 0, explain: { en: 'с + instrumental → двумя.', de: 'с + Instrumental → двумя.' } },
    { id: 'ru-g-nc-3', kind: 'gap', q: 'Я пишу о ___ город+ах. (пять)', answer: 'пят+и', explain: { en: 'Prepositional → о пяти.', de: 'Präpositiv → о пяти.' } },
    { id: 'ru-g-nc-4', kind: 'choice', q: 'Поезд приб+ыл с опозд+анием +около ___ мин+ут.', options: ['сорок+а', 'с+орок', 'сорок+ами'], answer: 0, explain: { en: 'около + genitive; сорок → сорока.', de: 'около + Genitiv; сорок → сорока.' } }
  ]
});

/* ---------- C1 · Impersonal sentences ---------- */
GT.registerGrammar({
  id: 'impersonal',
  level: 'C1',
  title: { en: 'Impersonal sentences: мне не спится, его ранило', de: 'Unpersönliche Sätze: мне не спится, его ранило' },
  summary: { en: 'No subject at all: states, feelings, nature and “it happened to me” — very Russian, very common.', de: 'Ganz ohne Subjekt: Zustände, Gefühle, Natur und „es ist mir passiert“ — sehr russisch und sehr häufig.' },
  explanation: {
    en: '<p>Russian often expresses states and events <b>without a grammatical subject</b>. The person is in the <b>dative</b> (experiencer) or <b>accusative</b>; the verb is in the <b>3rd person singular</b> or <b>neuter past</b>.</p>' +
      '<ul><li><b>Dative + adverb</b> (state): <em>Мне х+олодно. Ем+у ск+учно. Нам пор+а.</em></li>' +
      '<li><b>Dative + -ся verb</b> (involuntary feeling, “I don’t feel like”): <em>Мне не сп+ится.</em> (I can’t sleep.) <em>Ей не р+аботается.</em> <em>Х+очется ч+аю.</em></li>' +
      '<li><b>Nature and time</b>: <em>Свет+ает. Темн+еет. Похолод+ало.</em></li>' +
      '<li><b>Natural force + accusative</b>: <em>Ег+о ран+ило.</em> (He was wounded.) <em>Л+одку унесл+о в+етром.</em> <em>Д+орогу занесл+о сн+егом.</em></li>' +
      '<li><b>Modal words</b>: <em>мне н+адо / н+ужно / м+ожно / нельз+я / пор+а / прих+одится</em> + infinitive.</li>' +
      '<li><b>Negated existence + genitive</b>: <em>Ег+о нет д+ома. Не б+ыло вр+емени.</em></li></ul>' +
      '<p>English needs “it”, “I” or the passive; Russian does not: <em>Мне повезл+о</em> = I was lucky.</p>',
    de: '<p>Russisch drückt Zustände und Ereignisse oft <b>ohne grammatisches Subjekt</b> aus — ähnlich wie deutsch „mir ist kalt“, aber viel häufiger. Die Person steht im <b>Dativ</b> oder <b>Akkusativ</b>; das Verb in der <b>3. Person Singular</b> oder im <b>Neutrum Präteritum</b>.</p>' +
      '<ul><li><b>Dativ + Adverb</b>: <em>Мне х+олодно</em> (mir ist kalt). <em>Ем+у ск+учно.</em></li>' +
      '<li><b>Dativ + -ся-Verb</b> (unwillkürliches Gefühl): <em>Мне не сп+ится.</em> (Ich kann nicht schlafen.) <em>Х+очется ч+аю.</em> (Ich hätte Lust auf Tee.)</li>' +
      '<li><b>Natur und Zeit</b>: <em>Свет+ает</em> (es dämmert). <em>Похолод+ало.</em></li>' +
      '<li><b>Naturkraft + Akkusativ</b>: <em>Ег+о ран+ило.</em> (Er wurde verwundet.) <em>Д+орогу занесл+о сн+егом.</em></li>' +
      '<li><b>Modalwörter</b>: <em>мне н+адо / м+ожно / нельз+я / прих+одится</em> + Infinitiv.</li>' +
      '<li><b>Verneinte Existenz + Genitiv</b>: <em>Ег+о нет д+ома.</em></li></ul>' +
      '<p><em>Мне повезл+о</em> = ich hatte Glück.</p>'
  },
  examples: [
    { t: '[[Мне]] сег+одня не р+аботается.', en: 'I just can’t get any work done today.', de: 'Heute will es mit der Arbeit einfach nicht klappen.' },
    { t: 'Н+очью [[похолод+ало]].', en: 'It got colder in the night.', de: 'In der Nacht ist es kälter geworden.' },
    { t: '[[Ем+у]] повезл+о с н+овой раб+отой.', en: 'He was lucky with his new job.', de: 'Er hatte Glück mit der neuen Arbeit.' },
    { t: '[[Нам]] пришл+ось ждать два час+а.', en: 'We had to wait two hours.', de: 'Wir mussten zwei Stunden warten.' }
  ],
  pitfalls: [
    { title: { en: 'Don’t add a subject', de: 'Kein Subjekt hinzufügen' },
      html: { en: '<span class="wrong">Я х+олодно.</span> → <span class="right">Мне х+олодно.</span> <span class="wrong">Оно свет+ает.</span> → <span class="right">Свет+ает.</span>', de: '<span class="wrong">Я х+олодно.</span> → <span class="right">Мне х+олодно.</span> Kein „es“: <span class="wrong">Оно свет+ает.</span> → <span class="right">Свет+ает.</span>' } },
    { title: { en: 'Past tense is neuter', de: 'Präteritum im Neutrum' },
      html: { en: '<span class="wrong">Мне пришёлся</span> / <span class="wrong">Ей повезл+а</span> → <span class="right">Мне пришл+ось, Ей повезл+о</span>.', de: '<span class="wrong">Ей повезл+а</span> → <span class="right">Ей повезл+о</span>.' } }
  ],
  drills: [
    { id: 'ru-g-imp-c1-1', kind: 'choice', q: '___ ск+учно на +этой лекции.', options: ['Мне', 'Я', 'Мен+я'], answer: 0, explain: { en: 'State → dative experiencer.', de: 'Zustand → Dativ der Person.' } },
    { id: 'ru-g-imp-c1-2', kind: 'choice', q: 'Вчер+а нам ___ повезл+о.', options: ['+очень', 'был', 'он+о'], answer: 0, explain: { en: 'Impersonal: no subject, neuter verb повезло.', de: 'Unpersönlich: kein Subjekt, Verb im Neutrum.' } },
    { id: 'ru-g-imp-c1-3', kind: 'gap', q: { en: 'Мне ___ уйт+и р+аньше. (прийт+ись, past)', de: 'Мне ___ уйт+и р+аньше. (прийт+ись, Präteritum)' }, answer: 'пришл+ось', explain: { en: 'Neuter past: пришлось.', de: 'Neutrum Präteritum: пришлось.' } },
    { id: 'ru-g-imp-c1-4', kind: 'choice', q: 'Что-то мне не ___ сег+одня.', options: ['сп+ится', 'сплю', 'спал'], answer: 0, explain: { en: 'Involuntary state: dative + -ся verb.', de: 'Unwillkürlicher Zustand: Dativ + -ся-Verb.' } }
  ]
});

/* ---------- C1 · The passive ---------- */
GT.registerGrammar({
  id: 'passive_ru',
  level: 'C1',
  title: { en: 'The passive: -ся, short participles, “they say”', de: 'Passiv: -ся, Kurzpartizipien, „man sagt“' },
  summary: { en: 'Three ways to avoid naming the doer: строится (impf.), построен (pf.), строят (3rd plural).', de: 'Drei Wege, den Handelnden nicht zu nennen: строится (ipf.), построен (pf.), строят (3. Plural).' },
  explanation: {
    en: '<p>Russian forms the passive according to <b>aspect</b>:</p>' +
      '<ul><li><b>Imperfective → -ся</b>: <em>Дом стр+оится.</em> (is being built) <em>Здесь прод+аются бил+еты.</em> Typical for processes, rules, repeated actions.</li>' +
      '<li><b>Perfective → short passive participle</b> + <b>быть</b> (past/future): <em>Дом постр+оен.</em> <em>Дом был постр+оен в 1990 г+оду.</em> <em>Реш+ение б+удет пр+инято з+автра.</em></li>' +
      '<li><b>Doer</b> in the <b>instrumental</b>: <em>Письм+о подп+исано дир+ектором.</em> <em>Зак+оны приним+аются парл+аментом.</em></li>' +
      '<li><b>In speech</b>, an indefinite-personal sentence (3rd person plural, no subject) is far more common: <em>Здесь стр+оят дом. Мне сказ+али, что…</em> (I was told…)</li></ul>' +
      '<p>Official style uses the passive heavily; everyday speech prefers the active or the “они”-form.</p>',
    de: '<p>Das russische Passiv richtet sich nach dem <b>Aspekt</b>:</p>' +
      '<ul><li><b>Imperfektiv → -ся</b>: <em>Дом стр+оится.</em> (wird gebaut) <em>Здесь прод+аются бил+еты.</em> Für Vorgänge, Regeln, Wiederholungen.</li>' +
      '<li><b>Perfektiv → kurzes Passivpartizip</b> + <b>быть</b>: <em>Дом постр+оен.</em> (ist gebaut) <em>Дом был постр+оен в 1990 г+оду.</em> (wurde gebaut)</li>' +
      '<li><b>Handelnder</b> im <b>Instrumental</b> (= von): <em>Письм+о подп+исано дир+ектором.</em></li>' +
      '<li><b>Gesprochen</b> ist der unbestimmt-persönliche Satz (3. Plural ohne Subjekt) viel häufiger — wie deutsch „man“: <em>Здесь стр+оят дом.</em> (Hier baut man ein Haus.) <em>Мне сказ+али…</em> (Man hat mir gesagt…)</li></ul>'
  },
  tables: [
    { caption: { en: 'Three options', de: 'Drei Möglichkeiten' },
      head: { en: ['Form', 'Example', 'Use'], de: ['Form', 'Beispiel', 'Gebrauch'] },
      deCols: [1],
      rows: { en: [['impf. + -ся', 'Мост стр+оится.', 'process, written'], ['pf. short participle', 'Мост постр+оен.', 'result, written'], ['3rd plural', 'Мост стр+оят / постр+оили.', 'speech']],
              de: [['ipf. + -ся', 'Мост стр+оится.', 'Vorgang, schriftlich'], ['pf. Kurzpartizip', 'Мост постр+оен.', 'Ergebnis, schriftlich'], ['3. Plural', 'Мост стр+оят / постр+оили.', 'gesprochen']] } }
  ],
  examples: [
    { t: 'Зак+аз [[б+ыл отпр+авлен]] вчер+а.', en: 'The order was sent yesterday.', de: 'Die Bestellung wurde gestern verschickt.' },
    { t: 'Т+акие вопр+осы [[реш+аются]] на совещ+ании.', en: 'Such questions are decided at the meeting.', de: 'Solche Fragen werden in der Besprechung entschieden.' },
    { t: '[[Говор+ят]], ск+оро откр+оют н+овую л+инию метр+о.', en: 'They say a new metro line will open soon.', de: 'Man sagt, bald wird eine neue U-Bahn-Linie eröffnet.' },
    { t: 'Карт+ина [[нап+исана]] изв+естным худ+ожником.', en: 'The painting was painted by a famous artist.', de: 'Das Bild wurde von einem bekannten Maler gemalt.' }
  ],
  pitfalls: [
    { title: { en: 'Perfective -ся is not a passive', de: 'Perfektives -ся ist kein Passiv' },
      html: { en: '<span class="wrong">Дом постр+оился рабочими.</span> → <span class="right">Дом был постр+оен рабочими.</span> With a perfective verb use the short participle.', de: '<span class="wrong">Дом постр+оился рабочими.</span> → <span class="right">Дом был постр+оен рабочими.</span> Bei perfektiven Verben das Kurzpartizip.' } },
    { title: { en: 'Doer in the instrumental, no preposition', de: 'Handelnder im Instrumental, ohne Präposition' },
      html: { en: '“by the director” = <span class="right">дир+ектором</span>, not <span class="wrong">от дир+ектора</span>.', de: '„vom Direktor“ = <span class="right">дир+ектором</span>, nicht <span class="wrong">от дир+ектора</span>.' } }
  ],
  drills: [
    { id: 'ru-g-pas-1', kind: 'choice', q: 'Мост ___ в пр+ошлом год+у.', options: ['был постр+оен', 'стр+оился постр+оен', 'постр+оился'], answer: 0, explain: { en: 'Perfective, completed → был построен.', de: 'Perfektiv, abgeschlossen → был построен.' } },
    { id: 'ru-g-pas-2', kind: 'choice', q: 'В +этом магаз+ине ___ св+ежий хлеб.', options: ['прод+аётся', 'пр+одан', 'продалс+я'], answer: 0, explain: { en: 'Regular process → imperfective -ся.', de: 'Regelmäßiger Vorgang → imperfektiv -ся.' } },
    { id: 'ru-g-pas-3', kind: 'gap', q: 'Догов+ор подп+исан ___. (дир+ектор)', answer: 'дир+ектором', explain: { en: 'Doer in the instrumental.', de: 'Handelnder im Instrumental.' } },
    { id: 'ru-g-pas-4', kind: 'choice', q: { en: '“I was told to wait.” →', de: '„Mir wurde gesagt zu warten.“ →' }, options: ['Мне сказ+али подожд+ать.', 'Я был сказ+ан подожд+ать.', 'Я сказ+ался подожд+ать.'], answer: 0, explain: { en: 'Indefinite-personal: 3rd person plural without a subject.', de: 'Unbestimmt-persönlich: 3. Plural ohne Subjekt.' } }
  ]
});

/* ---------- extra drills for the word-order starter ---------- */
(function () {
  var wo = GT._target.grammar.word_order;
  if (!wo) return;
  [
    { id: 'ru-g-wo-4', kind: 'choice', q: { en: '“The guests arrived at seven.” (we were expecting them) →', de: '„Die Gäste kamen um sieben.“ (wir haben sie erwartet) →' }, options: ['Г+ости пришл+и в семь.', 'В семь пришл+и г+ости.'], answer: 0, explain: { en: 'Known guests → theme at the start; the time is new.', de: 'Bekannte Gäste → Thema am Anfang; die Zeit ist neu.' } },
    { id: 'ru-g-wo-5', kind: 'choice', q: 'Что случ+илось? — ___', options: ['Слом+ался лифт.', 'Лифт слом+ался.'], answer: 0, explain: { en: 'The whole event is new → verb first, subject last is natural.', de: 'Das ganze Ereignis ist neu → Verb vorne, Subjekt am Ende ist natürlich.' } }
  ].forEach(function (d) { GT.registerDrill(d, 'grammar', 'word_order'); wo.drills.push(d); });
  wo.tables = [{ caption: { en: 'Theme → rheme', de: 'Thema → Rhema' },
    head: { en: ['Question', 'Natural answer'], de: ['Frage', 'Natürliche Antwort'] }, deCols: [0, 1],
    rows: [['Кто пришёл?', 'Пришёл Ив+ан.'], ['Что сд+елал Ив+ан?', 'Ив+ан ушёл.'], ['Где кн+ига?', 'Кн+ига на стол+е.'], ['Что на стол+е?', 'На стол+е кн+ига.']] }];
})();

/* === Content expansion 2026-11-27 (+5 C1 & +4 B1/B2 RU grammar lessons) === */
(function () {
  var cfg = GT._target && GT._target.config;
  var topics = cfg && cfg.TOPICS && cfg.TOPICS.grammar;
  function addTopic(id, name, level) {
    if (topics && !topics.some(function (t) { return t.id === id; })) {
      topics.push({ id: id, name: name, level: level, group: 'Grammar topics' });
    }
  }

  // 1. C1: Discourse particles (же, ведь, -то, ли, разве, неужели, вроде, всё-таки)
  addTopic('particles_ru', 'Discourse particles (же, ведь, -то, разве, неужели) · C1', 'C1');
  GT.registerGrammar({
    id: 'particles_ru',
    level: 'C1',
    title: { en: 'Discourse particles: же, ведь, -то, разве, неужели, всё-таки', de: 'Diskurspartikeln: же, ведь, -то, разве, неужели, всё-таки' },
    summary: {
      en: 'Ты же знал! / Разве это далеко? / Неужели ты забыл? — the small words that carry Russian tone, shared knowledge and surprise.',
      de: 'Ты же знал! / Разве это далеко? / Неужели ты забыл? — die kleinen Wörter für Ton, Vorwissen und Staunen.'
    },
    explanation: {
      en: '<p>Unstressed particles carry nuance that English puts into intonation or modal adverbs:</p>' +
        '<ul><li><b>же</b> — stands right after the emphasised word; reminds of an obvious/shared fact (“after all / didn’t you know?”): <em>Мы же догов+аривались!</em></li>' +
        '<li><b>ведь</b> — usually opens or sits early in an explanation (“you know / after all”): <em>Ведь без сн+а никт+о не выдержит.</em></li>' +
        '<li><b>р+азве</b> vs. <b>неуж+ели</b> in questions: <em>Р+азве</em> checks mild doubt (“is that really so?”), while <em>неуж+ели</em> conveys strong disbelief (“can it really be?!”).</li>' +
        '<li><b>всё-таки</b> — “nevertheless / after all / in the end”: <em>Он всё-таки согл+асился.</em></li></ul>',
      de: '<p>Unbetonte Partikeln tragen Nuancen, die im Deutschen oft durch Modalpartikeln (<em>doch, ja, denn, etwa</em>) ausgedrückt werden:</p>' +
        '<ul><li><b>же</b> — direkt hinter dem betonten Wort (= „doch“): <em>Мы же догов+аривались!</em></li>' +
        '<li><b>ведь</b> — begründendes „ja / schließlich“: <em>Ведь вр+емени м+ало.</em></li>' +
        '<li><b>р+азве</b> vs. <b>неуж+ели</b> in Fragen: <em>р+азве</em> („etwa?“) äußert Zweifel; <em>неуж+ели</em> („wirklich?“) starkes Staunen.</li>' +
        '<li><b>всё-таки</b> — „trotzdem / letztlich / immerhin“: <em>Он всё-таки при+ехал.</em></li></ul>'
    },
    tables: [{
      caption: { en: 'Key Russian particles compared', de: 'Wichtige russische Partikeln im Vergleich' },
      head: { en: ['Particle', 'Nuance', 'Example'], de: ['Partikel', 'Nuance', 'Beispiel'] },
      deCols: [2],
      rows: {
        en: [
          ['же', 'shared fact / impatience', 'Ты же обещал позвонить!'],
          ['ведь', 'obvious reason (“after all”)', 'Ведь никто не запрещал пробовать.'],
          ['разве', 'questioning doubt (“really?”)', 'Разве ты ещё не дома?'],
          ['неужели', 'strong disbelief (“no way!”)', 'Неужели поезд уже ушёл?'],
          ['всё-таки', 'despite hesitation / after all', 'Мы всё-таки рискнули и выиграли.']
        ],
        de: [
          ['же', 'Vorwissen / Nachdruck („doch“)', 'Ты же обещал позвонить!'],
          ['ведь', 'Begründung („ja / schließlich“)', 'Ведь никто не запрещал пробовать.'],
          ['разве', 'Zweifel („etwa?“)', 'Разве ты ещё не дома?'],
          ['неужели', 'Staunen („wirklich?“)', 'Неужели поезд уже ушёл?'],
          ['всё-таки', 'am Ende doch / trotzdem', 'Мы всё-таки рискнули и выиграли.']
        ]
      }
    }],
    examples: [
      { t: 'Ты [[же]] сам сказ+ал, что встр+еча в п+олдень!', en: 'You yourself said the meeting is at noon!', de: 'Du hast doch selbst gesagt, das Treffen sei mittags!' },
      { t: '[[Р+азве]] магаз+ин не раб+отает по воскрес+еньям?', en: 'Wait, isn’t the shop open on Sundays?', de: 'Hat der Laden sonntags etwa nicht geöffnet?' },
      { t: '[[Неуж+ели]] вы прочитали всю кн+игу за одн+у ночь?', en: 'Can you really have read the whole book in one night?!', de: 'Haben Sie tatsächlich das ganze Buch in einer Nacht gelesen?!' },
      { t: 'Пог+ода была плох+ая, но мы [[всё-таки]] пошл+и гул+ять.', en: 'The weather was bad, yet we went for a walk all the same.', de: 'Das Wetter war schlecht, aber wir sind trotzdem spazieren gegangen.' }
    ],
    pitfalls: [{
      title: { en: 'же cannot start a sentence', de: 'же steht nie ganz am Satzanfang' },
      html: {
        en: '<span class="wrong">Же ты знал!</span> → <span class="right">Ты же знал!</span> Place же immediately after the stressed word.',
        de: '<span class="wrong">Же ты знал!</span> → <span class="right">Ты же знал!</span> же steht direkt hinter dem betonten Wort.'
      }
    }],
    drills: [
      { id: 'ru-g-x27-part-1', kind: 'choice', q: 'Я ___ тебе говор+ил, что л+учше взять з+онт!', options: ['же', 'ли', 'разве'], answer: 0, explain: { en: 'Reminding of an obvious earlier warning → же.', de: 'Erinnerung an früheren Hinweis („doch“) → же.' } },
      { id: 'ru-g-x27-part-2', kind: 'choice', q: '___ ты не видишь, что здесь ош+ибка? (недоумение, удивление)', options: ['Неуж+ели', 'Ведь', 'Вроде'], answer: 0, explain: { en: 'Strong disbelief in a question → неужели.', de: 'Starkes Staunen / Unverständnis → неужели.' } },
      { id: 'ru-g-x27-part-3', kind: 'gap', q: 'Он не хот+ел спорить, но ___ сказ+ал правду. (тем не менее / всё-таки)', answer: 'всё-таки', explain: { en: '“Did it in the end despite reluctance” → всё-таки.', de: '„am Ende doch“ → всё-таки.' } },
      { id: 'ru-g-x27-part-4', kind: 'choice', q: '___ завтра суббота? Я д+умал, сегодня четв+ерг!', options: ['Р+азве', 'Же', 'Ведь'], answer: 0, explain: { en: 'Surprised check of a fact (“is tomorrow really…?”) → Разве.', de: 'Zweifelnde Rückfrage („etwa?“) → Разве.' } },
      { id: 'ru-g-x27-part-5', kind: 'choice', q: 'Не сто+ит спеш+ить: у нас ___ есть ещё полчас+а.', options: ['ведь', 'неужели', 'ли'], answer: 0, explain: { en: 'Explanatory reason (“after all / you know”) → ведь.', de: 'Begründung („schließlich / ja“) → ведь.' } },
      { id: 'ru-g-x27-part-6', kind: 'gap', q: 'Я спрос+ил, при+едет ___ он вовремя.', answer: 'ли', explain: { en: 'Yes/no indirect question uses ли right after the verb.', de: 'Indirekte Ja/Nein-Frage verwendet ли direkt nach dem Verb.' } },
      { id: 'ru-g-x27-part-7', kind: 'choice', q: 'Дор+ога ___ своб+одная — пр+обок пок+а не в+идно.', options: ['вр+оде', 'неуж+ели', 'же'], answer: 0, explain: { en: 'Tentative assessment (“seems / appears to be”) → вроде.', de: 'Vorsichtige Einschätzung („scheint so“) → вроде.' } },
      { id: 'ru-g-x27-part-8', kind: 'choice', q: { en: 'Which emphasises “this very thing / specifically that”?', de: 'Was betont „genau dieses“?' }, options: ['+Именно он всё нал+адил.', 'Разве он всё нал+адил.', 'Вр+оде он всё нал+адил.'], answer: 0, explain: { en: 'Именно pinpoints exact focus (“specifically / precisely he”).', de: 'Именно hebt präzise hervor („genau er“).' } }
    ]
  });

  // 2. C1: Concessive clauses with бы ... ни
  addTopic('concessive_ni', 'Concessive кто бы ни / как бы ни · C1', 'C1');
  GT.registerGrammar({
    id: 'concessive_ni',
    level: 'C1',
    title: { en: 'Generalised concessives: кто бы ни, как бы ни, сколько бы ни', de: 'Verallgemeinernde Konzessivsätze: кто бы ни, как бы ни' },
    summary: {
      en: 'Кто бы ни пришёл… / Как бы трудно ни было… / Где бы вы ни жили… — “no matter who / how / where”, always with ни + бы.',
      de: 'Кто бы ни пришёл… / Как бы трудно ни было… — „wer auch immer / wie sehr auch“, immer mit бы und ни.'
    },
    explanation: {
      en: '<p>To express “whoever, whatever, however, wherever…”, Russian builds a fixed frame: <b>Question word + бы + … + ни + past-form / infinitive verb</b>.</p>' +
        '<ul><li><b>Critical spelling rule</b>: use <b>ни</b> (affirmative emphasis, “any/no matter”), NEVER <b>не</b>! Notice <em>Как бы то <b>ни</b> было</em> vs. negative <em>не</em>.</li>' +
        '<li><b>Adverb / adjective splits the frame</b>: <em><b>Как бы тр+удно</b> это <b>ни</b> б+ыло…</em> / <em><b>Ск+олько бы вр+емени</b> ни прошл+о…</em></li>' +
        '<li><b>Without бы</b> (real generalisation in present/future): <em>Куда ни посм+отришь — везд+е сн+ег.</em></li></ul>',
      de: '<p>Für „wer auch immer, wie auch immer, wohin auch“ nutzt das Russische den Rahmen: <b>Fragewort + бы + … + ни + Präteritumsform</b>.</p>' +
        '<ul><li><b>Wichtigste Schreibregel</b>: immer <b>ни</b>, niemals <b>не</b>!</li>' +
        '<li><b>Einschub</b>: Adjektive, Adverbien und Nomen stehen zwischen <em>бы</em> und <em>ни</em>: <em><b>Какой бы сл+ожной</b> ни была зад+ача…</em></li>' +
        '<li><b>Ohne бы</b> für reale Alltagsfälle: <em>Что ни скажи — всё не так.</em></li></ul>'
    },
    tables: [{
      caption: { en: 'Concessive patterns with ни', de: 'Konzessive Muster mit ни' },
      head: { en: ['Pattern', 'Meaning', 'Example'], de: ['Muster', 'Bedeutung', 'Beispiel'] },
      deCols: [2],
      rows: {
        en: [
          ['кто бы ни + Verb', 'whoever', 'Кто бы ни позвонил, передай сообщение.'],
          ['что бы ни + Verb', 'whatever', 'Что бы ни случилось, не паникуй.'],
          ['как бы + Adv. + ни', 'however / no matter how', 'Как бы дорого это ни стоило, мы купим.'],
          ['сколько бы ни + Verb', 'no matter how much/long', 'Сколько бы он ни спорил, итог один.'],
          ['куда бы ни + Verb', 'wherever (to)', 'Куда бы ты ни поехал, бери паспорт.']
        ],
        de: [
          ['кто бы ни + Verb', 'wer auch immer', 'Кто бы ни позвонил, передай сообщение.'],
          ['что бы ни + Verb', 'was auch immer', 'Что бы ни случилось, не паникуй.'],
          ['как бы + Adv. + ни', 'wie auch immer', 'Как бы дорого это ни стоило, мы купим.'],
          ['сколько бы ни + Verb', 'wie viel/lange auch', 'Сколько бы он ни спорил, итог один.'],
          ['куда бы ни + Verb', 'wohin auch immer', 'Куда бы ты ни поехал, бери паспорт.']
        ]
      }
    }],
    examples: [
      { t: '[[Что бы ни]] случ+илось, мы найдём выход.', en: 'Whatever happens, we’ll find a way out.', de: 'Was auch immer geschieht, wir finden einen Ausweg.' },
      { t: '[[Как бы]] п+оздно он [[ни]] при+ехал, дверь всегд+а открыта.', en: 'No matter how late he arrives, the door is always open.', de: 'Wie spät er auch ankommt, die Tür ist immer offen.' },
      { t: '[[Ск+олько бы]] мы [[ни]] провер+яли текст, опечатку нашли т+олько +утром.', en: 'No matter how many times we checked the text, the typo showed up only in the morning.', de: 'So oft wir den Text auch prüften, den Tippfehler fanden wir erst morgens.' },
      { t: '[[Кто бы ни]] в+ыиграл тендер, ср+оки оста+ются жёсткими.', en: 'Whoever wins the tender, the deadlines remain tight.', de: 'Wer auch immer die Ausschreibung gewinnt, die Fristen bleiben knapp.' }
    ],
    pitfalls: [{
      title: { en: 'ни vs. не', de: 'ни statt не' },
      html: {
        en: '<span class="wrong">Кто бы не пришёл…</span> (would mean “who didn’t come”) → <span class="right">Кто бы ни пришёл…</span> (“whoever comes”).',
        de: '<span class="wrong">Кто бы не пришёл…</span> → <span class="right">Кто бы ни пришёл…</span> („wer auch immer kommt“).'
      }
    }],
    drills: [
      { id: 'ru-g-x27-ni-1', kind: 'choice', q: 'Что бы она ___ говор+ила, д+ействует она иначе.', options: ['ни', 'не', 'ли'], answer: 0, explain: { en: 'Generalised concession (“whatever she may say”) always takes ни.', de: 'Verallgemeinernde Konzessive brauchen immer ни.' } },
      { id: 'ru-g-x27-ni-2', kind: 'choice', q: 'Как бы ___ ни была сд+елка, её нужно согласов+ать.', options: ['выг+одна', 'выг+одная', 'выг+одно'], answer: 0, explain: { en: 'сд+елка (fem.) → short predicate adjective выгодна.', de: 'сд+елка (fem.) verlangt Kurzform выгодна.' } },
      { id: 'ru-g-x27-ni-3', kind: 'gap', q: 'Куда ___ ты ни пере+ехал, сохран+яй контакты.', answer: 'бы', explain: { en: 'Frame: куда + бы + подлежащее + ни + глагол.', de: 'Rahmen: куда + бы + Subjekt + ни + Verb.' } },
      { id: 'ru-g-x27-ni-4', kind: 'choice', q: 'Кто бы ни ___ в +офис, все хвалят вид из окн+а.', options: ['заход+ил', 'заход+ить', 'зайдёт'], answer: 0, explain: { en: 'After бы, the verb takes past tense form (заходил).', de: 'Nach бы steht das Verb in der Präteritumsform (заходил).' } },
      { id: 'ru-g-x27-ni-5', kind: 'choice', q: 'Ск+олько бы д+енег ни ___, всё равн+о нужно счит+ать бюдж+ет.', options: ['б+ыло', 'есть', 'б+удет'], answer: 0, explain: { en: 'Ск+олько бы ни + прошлое (было).', de: 'Ск+олько бы ни + Präteritumsform (было).' } },
      { id: 'ru-g-x27-ni-6', kind: 'gap', q: 'Какая бы погода ___ стояла, по+ездку не отм+енят.', answer: 'ни', explain: { en: '“No matter what weather…” → Какая бы погода ни стояла.', de: '„Egal welches Wetter“ → Какая бы погода ни стояла.' } },
      { id: 'ru-g-x27-ni-7', kind: 'choice', q: '___ бы ни случилось, звон+и мне ср+азу.', options: ['Что', 'Кто', 'Как'], answer: 0, explain: { en: '“Whatever happens” → Что бы ни случилось.', de: '„Was auch immer passiert“ → Что бы ни случилось.' } },
      { id: 'ru-g-x27-ni-8', kind: 'choice', q: { en: 'Notice the difference! Which means “Whoever hasn’t signed up yet” (actual negation)?', de: 'Welcher Satz bedeutet echte Verneinung („wer sich noch nicht…“)?' }, options: ['Кто ещё не запис+ался, поспеш+ите.', 'Кто бы ни запис+ался, поспеш+ите.', 'Кто бы не запис+ался ни, поспеш+ите.'], answer: 0, explain: { en: 'Simple negation without concession uses не and no бы … ни.', de: 'Reine Verneinung ohne Konzession benutzt не ohne бы … ни.' } }
    ]
  });

  // 3. C1: Derived prepositions & case
  addTopic('prepositions_c1', 'Derived prepositions & cases (благодаря, вопреки…) · C1', 'C1');
  GT.registerGrammar({
    id: 'prepositions_c1',
    level: 'C1',
    title: { en: 'Derived prepositions & cases: благодаря, вопреки, несмотря на…', de: 'Abgeleitete Präpositionen: благодаря, вопреки, несмотря на…' },
    summary: {
      en: 'благодаря + Dat. / вопреки + Dat. / несмотря на + Acc. / ввиду, вследствие, в течение + Gen. — precision in essays and formal speech.',
      de: 'благодаря + Dat. / вопреки + Dat. / несмотря на + Akk. / ввиду, вследствие, в течение + Gen. — sicher in Sachtexten.'
    },
    explanation: {
      en: '<p>C1 reading and writing rely on formal prepositions derived from nouns, verbs and adverbs — each locks onto one fixed case:</p>' +
        '<ul><li><b>Dative</b>: <b>благодар+я</b> (positive cause, “thanks to”), <b>вопрек+и</b> (“contrary to / despite”), <b>согл+асно</b> (“according to”). Never *благодаря болезни (wrong if negative — use <em>из-за</em>!).</li>' +
        '<li><b>Accusative</b>: <b>несмотр+я на</b> (“despite”; written in two words!).</li>' +
        '<li><b>Genitive</b>: <b>ввид+у</b> (“in view of”), <b>всл+едствие</b> (“as a consequence of”), <b>в теч+ение / на протяж+ении</b> (“during / throughout”).</li></ul>',
      de: '<p>Formelle Sachtexte nutzen abgeleitete Präpositionen mit festem Kasus:</p>' +
        '<ul><li><b>Dativ</b>: <b>благодар+я</b> (nur positive Ursache: „dank“), <b>вопрек+и</b> („entgegen“), <b>согл+асно</b> („gemäß“).</li>' +
        '<li><b>Akkusativ</b>: <b>несмотр+я на</b> („trotz“, getrennt!).</li>' +
        '<li><b>Genitiv</b>: <b>ввид+у</b> („angesichts“), <b>всл+едствие</b> („infolge“), <b>в теч+ение</b> („im Laufe von“, mit -е!).</li></ul>'
    },
    tables: [{
      caption: { en: 'Derived prepositions and their cases', de: 'Abgeleitete Präpositionen und ihre Fälle' },
      head: { en: ['Preposition', 'Case', 'Meaning'], de: ['Präposition', 'Kasus', 'Bedeutung'] },
      deCols: [0],
      rows: {
        en: [
          ['благодаря', '+ Dative', 'thanks to (positive cause only!)'],
          ['вопреки', '+ Dative', 'contrary to / in spite of'],
          ['согласно', '+ Dative', 'according to (rules/schedule)'],
          ['несмотря на', '+ Accusative', 'despite (in spite of)'],
          ['в течение', '+ Genitive', 'during / for the course of (time)'],
          ['вследствие', '+ Genitive', 'as a result of (neutral/negative)']
        ],
        de: [
          ['благодаря', '+ Dativ', 'dank (nur positive Ursache!)'],
          ['вопреки', '+ Dativ', 'entgegen / trotz'],
          ['согласно', '+ Dativ', 'gemäß / laut'],
          ['несмотря на', '+ Akkusativ', 'trotz'],
          ['в течение', '+ Genitiv', 'während / innerhalb (Zeitdauer)'],
          ['вследствие', '+ Genitiv', 'infolge']
        ]
      }
    }],
    examples: [
      { t: '[[Благодар+я]] опытному врачу паци+ент б+ыстро попр+авился.', en: 'Thanks to an experienced doctor, the patient recovered quickly.', de: 'Dank eines erfahrenen Arztes erholte sich der Patient schnell.' },
      { t: '[[Вопрек+и]] прогнозам, курс валюты ост+ался стаб+ильным.', en: 'Contrary to forecasts, the exchange rate stayed stable.', de: 'Entgegen den Prognosen blieb der Wechselkurs stabil.' },
      { t: '[[Несмотр+я на]] пробки, мы усп+ели к нач+алу совещ+ания.', en: 'Despite the traffic jams, we arrived in time for the start of the meeting.', de: 'Trotz der Staus kamen wir rechtzeitig zu Beginn der Sitzung an.' },
      { t: 'Ответ придёт [[в теч+ение]] трёх раб+очих дней.', en: 'The reply will arrive within three working days.', de: 'Die Antwort trifft innerhalb von drei Werktagen ein.' }
    ],
    pitfalls: [{
      title: { en: 'благодаря requires Dative & positive outcome', de: 'благодаря steht mit Dativ & positiver Folge' },
      html: {
        en: '<span class="wrong">благодар+я дождя я промок</span> → <span class="right">из-за дожд+я</span> (negative cause) and <span class="right">благодар+я п+омощи</span> (Dative, never Genitive).',
        de: '<span class="wrong">благодар+я дождя</span> → <span class="right">из-за дожд+я</span> (negativ) und <span class="right">благодар+я п+омощи</span> (Dativ, nie Genitiv).'
      }
    }],
    drills: [
      { id: 'ru-g-x27-prp-1', kind: 'choice', q: 'Благодар+я ___ ком+анды про+ект сд+али в срок. (раб+ота)', options: ['сл+аженной раб+оте', 'сл+аженной раб+оты', 'сл+аженную раб+оту'], answer: 0, explain: { en: 'благодаря governs Dative → слаженной работе.', de: 'благодаря regiert den Dativ → слаженной работе.' } },
      { id: 'ru-g-x27-prp-2', kind: 'choice', q: 'Вопрек+и ___ скептиков, старт+ап окупился за год. (мн+ения)', options: ['мн+ениям', 'мн+ений', 'мн+ениях'], answer: 0, explain: { en: 'вопреки governs Dative plural → мнениям.', de: 'вопреки verlangt den Dativ Plural → мнениям.' } },
      { id: 'ru-g-x27-prp-3', kind: 'gap', q: 'Согласно ___ распис+анию, п+оезд отпр+авится в восемь. (уточнение: н+овый)', answer: 'н+овому', explain: { en: 'согласно governs Dative: новому расписанию.', de: 'согласно steht mit Dativ: новому расписанию.' } },
      { id: 'ru-g-x27-prp-4', kind: 'choice', q: 'Несмотр+я на сильную ___, она закончила презент+ацию. (уст+алость)', options: ['уст+алость', 'уст+алости', 'уст+алостью'], answer: 0, explain: { en: 'несмотря на takes Accusative → усталость.', de: 'несмотря на verlangt Akkusativ → усталость.' } },
      { id: 'ru-g-x27-prp-5', kind: 'choice', q: '___ сбоя электричества с+ервер отключ+ился на пять мин+ут.', options: ['Всл+едствие', 'Благодар+я', 'Согл+асно'], answer: 0, explain: { en: 'Negative/technical cause + Genitive (сбоя) → Вследствие.', de: 'Technische Ursache + Genitiv (сбоя) → Вследствие.' } },
      { id: 'ru-g-x27-prp-6', kind: 'gap', q: 'Мы изуч+али эти докум+енты в теч+ение всего ___. (м+есяц)', answer: 'м+есяца', explain: { en: 'в течение governs Genitive → всего месяца.', de: 'в течение verlangt den Genitiv → всего месяца.' } },
      { id: 'ru-g-x27-prp-7', kind: 'choice', q: 'Ввид+у ___ обсто+ятельств ср+оки перенес+ут.', options: ['н+овых', 'н+овым', 'н+овые'], answer: 0, explain: { en: 'ввиду + Genitive plural → новых обстоятельств.', de: 'ввиду + Genitiv Plural → новых обстоятельств.' } },
      { id: 'ru-g-x27-prp-8', kind: 'choice', q: { en: 'Choose the right spelling & case for “within an hour”:', de: 'Wähle die richtige Form für „innerhalb einer Stunde“:' }, options: ['в теч+ение ч+аса', 'в теч+ении ч+аса', 'в теч+ение ч+асу'], answer: 0, explain: { en: 'Preposition of time always ends in -е: в течение + Gen. (часа).', de: 'Die Zeitpräposition endet immer auf -е: в течение часа.' } }
    ]
  });

  // 4. C1: Advanced aspect nuances
  addTopic('aspect_nuances_c1', 'Aspect nuances: negation, modals & cancelled results · C1', 'C1');
  GT.registerGrammar({
    id: 'aspect_nuances_c1',
    level: 'C1',
    title: { en: 'Advanced aspect: negation, cancelled results & modals', de: 'Aspektfeinheiten: Verneinung, rückgängige Handlung & Modalwörter' },
    summary: {
      en: 'не чит+ал vs. не прочит+ал / открыв+ал окн+о (= потом закрыл) / нельз+я входить vs. нельз+я войт+и.',
      de: 'не чит+ал vs. не прочит+ал / открыв+ал окн+о / нельз+я вход+ить vs. нельз+я войт+и.'
    },
    explanation: {
      en: '<p>Beyond “single vs. repeated”, C1 Russian relies on aspect to signal intention, reversal, and prohibition:</p>' +
        '<ul><li><b>не + Impf. vs. не + Perf.</b>: <em>не чит+ал</em> = never even touched it / didn’t do the action; <em>не прочит+ал</em> = tried or meant to finish, but failed to reach the end!</li>' +
        '<li><b>Two-way (cancelled-result) imperfective</b>: <em>Кто открыв+ал окно?</em> = it was opened and then closed again (state reversed!). <em>Кто откр+ыл окно?</em> = it is still open now.</li>' +
        '<li><b>нельз+я + Impf.</b> = forbidden (prohibition: <em>Здесь нельз+я кур+ить</em>). <b>нельз+я + Perf.</b> = physically/logically impossible (<em>Дверь нельз+я откр+ыть</em>).</li></ul>',
      de: '<p>Auf C1 drückt der Aspekt zusätzlich Absicht, Rückgängigmachung und Verbotsarten aus:</p>' +
        '<ul><li><b>не + ipf. vs. не + pf.</b>: <em>не звон+ил</em> (hat gar nicht angerufen) vs. <em>не дозвон+ился</em> (hat es versucht, aber nicht erreicht).</li>' +
        '<li><b>Zweiseitige Handlung (ipf.)</b>: <em>Кто открыв+ал окно?</em> = war offen, ist jetzt wieder zu! <em>Кто откр+ыл окно?</em> = steht noch offen.</li>' +
        '<li><b>нельз+я + ipf.</b> = Verbot; <b>нельз+я + pf.</b> = Unmöglichkeit.</li></ul>'
    },
    tables: [{
      caption: { en: 'High-value aspect contrasts', de: 'Wichtige Aspektgegensätze' },
      head: { en: ['Imperfective', 'Perfective'], de: ['Imperfektiv', 'Perfektiv'] },
      deCols: [0, 1],
      rows: {
        en: [
          ['нельзя снимать (просто запрет)', 'нельзя снять (технически невозможно)'],
          ['он не решал задачу (не брался)', 'он не решил задачу (не смог дорешать)'],
          ['к нам приходил курьер (пришёл и ушёл)', 'к нам пришёл курьер (он ещё здесь!)'],
          ['не берите билеты (отмена намерения)', 'не возьмите чужой (предупреждение)']
        ],
        de: [
          ['нельзя снимать (Verbot)', 'нельзя снять (Unmöglichkeit)'],
          ['не читал (hat gar nicht gelesen)', 'не прочитал (hat es nicht zu Ende geschafft)'],
          ['приходил (kam und ging wieder)', 'пришёл (ist noch da)'],
          ['не берите (Absicht abraten)', 'не забудьте (Warnung vor Versehen)']
        ]
      }
    }],
    examples: [
      { t: 'Кто [[брал]] мой маркер? Он лежал здесь, а теперь на другом столе.', en: 'Who took my marker (and put it back / moved it)?', de: 'Wer hatte meinen Marker (in der Hand)?' },
      { t: 'В зал [[нельз+я занос+ить]] напитки — таковы пр+авила.', en: 'Drinks must not be brought into the hall — those are the rules.', de: 'Man darf keine Getränke in den Saal mitnehmen — das sind die Regeln.' },
      { t: 'С+ейф заблокирован, его [[нельз+я откр+ыть]] без к+ода.', en: 'The safe is locked; it’s impossible to open it without the code.', de: 'Der Safe ist gesperrt, man kann ihn ohne Code nicht öffnen.' },
      { t: 'Мы не [[дозвон+ились]] в +офис, хотя пр+обовали тр+ижды.', en: 'We failed to get through to the office, though we tried three times.', de: 'Wir haben das Büro nicht erreicht, obwohl wir es dreimal versucht haben.' }
    ],
    pitfalls: [{
      title: { en: 'не + impf. vs. не + perf. in excuses', de: 'не + ipf. vs. не + pf.' },
      html: {
        en: '<em>Я не сдав+ал отчёт</em> = I never submitted / didn’t take it. <em>Я не успел сд+ать</em> / <em>не сдал</em> = I tried or had an obligation and didn’t finish.',
        de: '<em>не звон+ил</em> = hat es gar nicht versucht; <em>не дозвон+ился</em> = hat es versucht, ohne Ergebnis.'
      }
    }],
    drills: [
      { id: 'ru-g-x27-asp-1', kind: 'choice', q: 'В +этом музее ___ фотограф+ировать со вспышкой (запрещено правилами).', options: ['нельз+я сним+ать', 'нельз+я снять', 'не в+ышло снять'], answer: 0, explain: { en: 'Rule/prohibition → нельзя + imperfective (снимать).', de: 'Verbot → нельзя + Imperfektiv (снимать).' } },
      { id: 'ru-g-x27-asp-2', kind: 'choice', q: 'Окн+о сейч+ас закр+ыто, но в комнате х+олодно. Кто ___ окн+о р+аньше?', options: ['открыв+ал', 'откр+ыл', 'будет откр+ыть'], answer: 0, explain: { en: 'Reversed action (opened earlier, now closed again) → imperfective открывал.', de: 'Rückgängige Handlung (aufgemacht und wieder zu) → Imperfektiv открывал.' } },
      { id: 'ru-g-x27-asp-3', kind: 'gap', q: 'Не ___ ключ+и в маш+ине — они нам ещё пригодятся! (предупреждение: заб+ыть)', answer: 'заб+удь', explain: { en: 'Warning against an accidental mistake → не + perfective imperative (забудь).', de: 'Warnung vor Versehen → не + Perfektiv-Imperativ (забудь).' } },
      { id: 'ru-g-x27-asp-4', kind: 'choice', q: 'Пож+алуйста, не ___ мен+я, когд+а я объясн+яю (просьба об общем поведении).', options: ['перебив+айте', 'переб+ейте', 'переб+или'], answer: 0, explain: { en: 'General negation / polite request → imperfective imperative (не перебивайте).', de: 'Allgemeine Bitte / Unterlassung → Imperfektiv (не перебивайте).' } },
      { id: 'ru-g-x27-asp-5', kind: 'choice', q: 'Вчера ко мне ___ друг, но попил ч+аю и ушёл.', options: ['заход+ил', 'зашёл', 'придёт'], answer: 0, explain: { en: 'Came and left again (round-trip) → imperfective заходил.', de: 'Kam vorbei und ging wieder → Imperfektiv заходил.' } },
      { id: 'ru-g-x27-asp-6', kind: 'gap', q: 'Эту кр+ышку без отвёртки нельз+я ___. (невозможно — откр+ыть)', answer: 'откр+ыть', explain: { en: 'Physical impossibility → нельзя + perfective (открыть).', de: 'Physische Unmöglichkeit → нельзя + Perfektiv (открыть).' } },
      { id: 'ru-g-x27-asp-7', kind: 'choice', q: 'Я д+олго искал докум+ент, но так и не ___.', options: ['нашёл', 'искал', 'нах+одил'], answer: 0, explain: { en: 'Failed to achieve expected result despite trying → так и не + perfective (нашёл).', de: 'Ausgebliebenes Ergebnis trotz Versuchs → так и не + Perfektiv (нашёл).' } },
      { id: 'ru-g-x27-asp-8', kind: 'choice', q: { en: 'Which means “the parcel is still here at reception right now”?', de: 'Welcher Satz zeigt, dass die Lieferung noch da ist?' }, options: ['Курь+ер принёс пос+ылку и ждёт в х+олле.', 'Курь+ер принос+ил пос+ылку +утром.', 'Пос+ылку унос+или вчер+а.'], answer: 0, explain: { en: 'Perfective принёс leaves the result active right now.', de: 'Perfektives принёс hält das Ergebnis bis jetzt aufrecht.' } }
    ]
  });

  // 5. C1: Participial & adverbial-participle syntax
  addTopic('participle_syntax_c1', 'Participial & adverbial-participle syntax · C1', 'C1');
  GT.registerGrammar({
    id: 'participle_syntax_c1',
    level: 'C1',
    title: { en: 'Participial & adverbial-participle syntax (причастный и деепричастный оборот)', de: 'Partizipial- und Gerundialkonstruktionen' },
    summary: {
      en: 'Прочит+ав письм+о, он отв+етил… / Пр+очитанное письм+о… — replacing который cleanly and avoiding dangling деепричастия.',
      de: 'Прочит+ав письм+о, он отв+етил… / Пр+очитанное письм+о… — elegante Ersetzung von который ohne Subjektfehler.'
    },
    explanation: {
      en: '<p>C1 Russian replaces heavy <em>который</em> and <em>когда/после того как</em> clauses with participial (<em>причастный</em>) and adverbial-participle (<em>деепричастный</em>) phrases — with strict agreement rules:</p>' +
        '<ul><li><b>Same-subject rule for деепричастие</b>: the doer of the main verb MUST be the same person doing the <em>-а/-я / -в</em> action! Wrong: <em>*Подъезж+ая к ст+анции, у мен+я слет+ела шл+япа</em> (the hat isn’t driving!).</li>' +
        '<li><b>Comma rule for причастный оборот</b>: BEFORE the noun → NO comma (<em>пр+очитанный мной отчёт</em>); AFTER the noun → commas on both sides (<em>отчёт, пр+очитанный мной, лежит на стол+е</em>).</li>' +
        '<li><b>Деепричастие is ALWAYS set off by commas</b>, no matter where it stands.</li></ul>',
      de: '<p>Auf C1 werden schwerfällige <em>который</em>- oder <em>когда</em>-Sätze durch Partizipien und Adverbialpartizipien (<em>деепричастия</em>) verkürzt:</p>' +
        '<ul><li><b>Subjektgleichheit beim деепричастие</b>: Das Subjekt des Hauptsatzes muss die Handlung des <em>-а/-я / -в</em>-Worts ausführen!</li>' +
        '<li><b>Kommaregel bei причастие</b>: VOR dem Bezugsnomen → KEIN Komma; HINTER dem Bezugsnomen → Kommas beidseitig.</li>' +
        '<li><b>Деепричастие</b> steht IMMER durch Komma abgetrennt.</li></ul>'
    },
    tables: [{
      caption: { en: 'Which form fits?', de: 'Welche Form passt?' },
      head: { en: ['Need', 'Form', 'Example'], de: ['Ziel', 'Form', 'Beispiel'] },
      deCols: [2],
      rows: {
        en: [
          ['describe a noun (who/which)', 'причастие (agrees in case/gender)', 'Сотрудник, отправивший файл, уже ушёл.'],
          ['simultaneous action by same S', 'деепричастие несов. (-а/-я)', 'Проверяя таблицу, он нашёл две ошибки.'],
          ['prior action by same S', 'деепричастие сов. (-в/-ши)', 'Проверив таблицу, он отправил отчёт.']
        ],
        de: [
          ['Nomen näher bestimmen', 'причастие (Kongruenz)', 'Сотрудник, отправивший файл, уже ушёл.'],
          ['gleichzeitige Handlung (gleiches S)', 'деепричастие ipf. (-а/-я)', 'Проверяя таблицу, он нашёл две ошибки.'],
          ['vorzeitige Handlung (gleiches S)', 'деепричастие pf. (-в/-ши)', 'Проверив таблицу, он отправил отчёт.']
        ]
      }
    }],
    examples: [
      { t: '[[Зак+ончив]] работу, колл+еги в+ыключили свет.', en: 'Having finished their work, the colleagues turned off the light.', de: 'Nachdem sie die Arbeit beendet hatten, machten die Kollegen das Licht aus.' },
      { t: 'Отчёт, [[подгот+овленный]] вчер+а, уж+е у дир+ектора.', en: 'The report prepared yesterday is already with the director.', de: 'Der gestern vorbereitete Bericht liegt bereits beim Direktor.' },
      { t: 'Мы обсуд+или [[поступ+ившие]] сег+одня предлож+ения.', en: 'We discussed the proposals received today.', de: 'Wir haben die heute eingegangenen Vorschläge besprochen.' },
      { t: '[[Сл+ушая]] докл+ад, она вел+а подр+обные з+аписи.', en: 'While listening to the talk, she took detailed notes.', de: 'Während sie dem Vortrag zuhörte, machte sie ausführliche Notizen.' }
    ],
    pitfalls: [{
      title: { en: 'Dangling деепричастие in passive/impersonal clauses', de: 'Subjektfehler im деепричастный оборот' },
      html: {
        en: '<span class="wrong">Открыв дверь, мне стало прохладно.</span> → <span class="right">Когда я открыл дверь, мне стало прохладно.</span> (<em>мне стало</em> has no nominative doer!).',
        de: '<span class="wrong">Открыв дверь, мне стало прохладно.</span> → <span class="right">Когда я открыл дверь, мне стало прохладно.</span>'
      }
    }],
    drills: [
      { id: 'ru-g-x27-ps-1', kind: 'choice', q: 'Какое предложение грамматически правильно?', options: ['Выйдя из метр+о, я сразу ув+идел вывеску.', 'Выйдя из метр+о, передо мной откр+ылся парк.', 'Выйдя из метр+о, мне позвон+ил друг.'], answer: 0, explain: { en: 'Only “я увидел” has the same nominative subject (“I”) who exited the metro.', de: 'Nur „я увидел“ teilt dasselbe Nominativsubjekt („ich“) mit вышел.' } },
      { id: 'ru-g-x27-ps-2', kind: 'choice', q: 'Письм+о, ___ вчер+а, так и осталось без отв+ета.', options: ['отпр+авленное', 'отпр+авив', 'отпр+авляющее'], answer: 0, explain: { en: 'Passive participle agreeing with письм+о (neuter nom.) → отправленное.', de: 'Passivpartizip zu письм+о (Neutrum) → отправленное.' } },
      { id: 'ru-g-x27-ps-3', kind: 'gap', q: '___ все дет+али догов+ора, мы подпис+али акт. (обсуд+ить, дееприч.)', answer: 'Обсуд+ив', explain: { en: 'Completed prior action → perfective adverbial participle Обсудив.', de: 'Abgeschlossene Vorhandlung → perfektives Adverbialpartizip Обсудив.' } },
      { id: 'ru-g-x27-ps-4', kind: 'choice', q: 'Где не нужна запятая при причастном обороте?', options: ['Подгот+овленный юр+истом про+ект одобрили ср+азу.', 'Про+ект, подгот+овленный юр+истом, одобрили ср+азу.', 'Юр+ист, подгот+овивший про+ект, ушёл.'], answer: 0, explain: { en: 'When the participial phrase stands BEFORE the noun (проект), no comma separates them.', de: 'Steht die Partizipgruppe VOR dem Nomen, entfällt das Komma.' } },
      { id: 'ru-g-x27-ps-5', kind: 'choice', q: 'Не ___ в +этом районе, он попрос+ил п+омощи у прох+ожего. (ориент+ироваться)', options: ['ориент+ируясь', 'ориент+ировав', 'ориент+ированный'], answer: 0, explain: { en: 'Simultaneous ongoing state → imperfective reflexive adverbial participle ориентируясь.', de: 'Gleichzeitiger Zustand → imperfektives reflexives Деепричастие ориентируясь.' } },
      { id: 'ru-g-x27-ps-6', kind: 'gap', q: 'Студ+енты, ___ экз+амен, получ+или сертификаты. (сдать, действит. прич. прош. вр.)', answer: 'сд+авшие', explain: { en: 'Plural active past participle modifying студенты → сдавшие.', de: 'Aktives Partizip Vergangenheit Plural → сдавшие.' } },
      { id: 'ru-g-x27-ps-7', kind: 'choice', q: 'Исправьте деепричастный оборот в пассиве: «Прочитав статью, статья была сохранена».', options: ['Прочит+ав стать+ю, он сохран+ил её.', 'Прочит+ав стать+ю, ему сохран+или её.', 'Прочит+анная стать+я был сохранён.'], answer: 0, explain: { en: 'The reader (“он”) must be the grammatical subject of the main active clause.', de: 'Der Handelnde („он“) muss Nominativsubjekt im aktiven Hauptsatz sein.' } },
      { id: 'ru-g-x27-ps-8', kind: 'choice', q: { en: 'Which correctly replaces который in: «дом, который строят на углу»?', de: 'Welche Form ersetzt richtig: «дом, который строят на углу»?' }, options: ['дом, стр+оящийся на угл+у', 'дом, постр+оивший на угл+у', 'дом, стр+оя на угл+у'], answer: 0, explain: { en: 'Present passive-reflexive active form agreeing with дом → строящийся.', de: 'Gegenwärtiges Partizip zu строиться → строящийся.' } }
    ]
  });

  // 6. B1: Double negation & genitive of negation
  addTopic('negation_ru', 'Negation: никто / ничто / нет + Gen. · B1', 'B1');
  GT.registerGrammar({
    id: 'negation_ru',
    level: 'B1',
    title: { en: 'Double negation, нет + Genitive & некого/нечего', de: 'Doppelte Verneinung, нет + Genitiv & некого/нечего' },
    summary: {
      en: 'Никто не пришёл / У меня нет времени / Некого спросить — why Russian keeps ни- AND не together.',
      de: 'Никто не пришёл / У меня нет времени / Некого спросить — warum doppelte Verneinung im Russischen Pflicht ist.'
    },
    explanation: {
      en: '<p>Unlike English or German, negative pronouns require <b>не</b> on the verb — skipping <em>не</em> is ungrammatical!</p>' +
        '<ul><li><b>Negative pronouns (ни- + … + не)</b>: <em><b>Никт+о</b> <b>не</b> звон+ил.</em> / <em>Я <b>никогд+а</b> там <b>не</b> был.</em> Prepositions split ни-: <em>ни у кого, ни о чём, ни с кем</em>.</li>' +
        '<li><b>Absence uses Genitive</b>: <em>Есть ключ → <b>Нет ключ+а</b>.</em> In past/future: <em>не б+ыло ключ+а</em> (always neuter!), <em>не б+удет вр+емени</em>.</li>' +
        '<li><b>Impersonal не- + Infinitive</b> (“nobody/nothing to…”): <em>Мне <b>н+екому</b> позвон+ить. / Здесь <b>н+ечего</b> д+елать.</em> Notice the stress stays on <b>н+е-</b> and NO verb <em>не</em> appears!</li></ul>',
      de: '<p>Im Gegensatz zum Deutschen braucht jede Verneinung mit <em>ни-</em> ein zusätzliches <b>не</b> vor dem Verb:</p>' +
        '<ul><li><b>ни-Pronomen + не</b>: <em><b>Никт+о не</b> знает.</em> / <em>Я <b>никогд+а не</b> видел.</em> Präpositionen treten dazwischen: <em>ни с кем, ни о чём</em>.</li>' +
        '<li><b>Abwesenheit mit Genitiv</b>: <em>нет вр+емени, не б+ыло отв+ета</em> (im Präteritum immer Neutrum <em>было</em>!).</li>' +
        '<li><b>н+екого / н+ечего + Infinitiv</b> („es gibt niemanden/nichts zu…“): betontes <b>н+е-</b> ohne zusätzliches Verb-<em>не</em>!</li></ul>'
    },
    tables: [{
      caption: { en: 'ни- (negative concord) vs. не- (missing object + infinitive)', de: 'ни- + не vs. betontes н+е- + Infinitiv' },
      head: { en: ['Type', 'Case / Form', 'Example'], de: ['Typ', 'Kasus / Form', 'Beispiel'] },
      deCols: [2],
      rows: {
        en: [
          ['ни- + verb не', 'negates whole clause', 'Она никому ничего не сказала.'],
          ['ни + prep. + Gen./Instr.', '3 separate words', 'Он ни к кому не заходил.'],
          ['нет / не было / не будет', '+ Genitive', 'Вчера в городе не было света.'],
          ['н+екого / н+ечего', '+ Dat. person + Inf.', 'Мне нечего добавить.']
        ],
        de: [
          ['ни- + Verb не', 'Satzverneinung', 'Она никому ничего не сказала.'],
          ['ни + Präp. + Kasus', 'getrennt geschrieben', 'Он ни к кому не заходил.'],
          ['нет / не было / не будет', '+ Genitiv', 'Вчера в городе не было света.'],
          ['н+екого / н+ечего', '+ Dat. Person + Inf.', 'Мне нечего добавить.']
        ]
      }
    }],
    examples: [
      { t: '[[Никт+о]] так и [[не]] отв+етил на моё письм+о.', en: 'Nobody ever replied to my email.', de: 'Niemand hat auf meine E-Mail geantwortet.' },
      { t: 'Вчера на складе [[не б+ыло]] с+иней кр+аски.', en: 'Yesterday there was no blue paint in the warehouse.', de: 'Gestern gab es im Lager keine blaue Farbe.' },
      { t: 'Мы [[ни о чём]] не спорили — всё реш+или б+ыстро.', en: 'We didn’t argue about anything — we settled everything fast.', de: 'Wir haben über nichts gestritten — alles war schnell geklärt.' },
      { t: 'В +этом отд+еле сейчас [[н+екого]] спрос+ить про скидки.', en: 'There’s nobody to ask about discounts in this department right now.', de: 'In dieser Abteilung gibt es gerade niemanden, den man nach Rabatten fragen könnte.' }
    ],
    pitfalls: [{
      title: { en: 'не было never agrees in gender or number', de: 'не было bleibt immer sächlich Singular' },
      html: {
        en: '<span class="wrong">Ключ+и не были на стол+е</span> (for non-existence) → <span class="right">Ключ+ей не б+ыло на стол+е.</span>',
        de: '<span class="wrong">Не была вода.</span> → <span class="right">Не было вод+ы.</span>'
      }
    }],
    drills: [
      { id: 'ru-g-x27-neg-1', kind: 'choice', q: 'Я сегодня ещё ни с ___ не разговаривал.', options: ['кем', 'кого', 'кому'], answer: 0, explain: { en: 'с governs Instrumental → ни с кем.', de: 'с verlangt den Instrumental → ни с кем.' } },
      { id: 'ru-g-x27-neg-2', kind: 'choice', q: 'На пр+ошлой нед+еле у нас ___ своб+одного дня.', options: ['не б+ыло', 'не был', 'нет'], answer: 0, explain: { en: 'Past absence always uses impersonal не было + Genitive.', de: 'Vergangene Abwesenheit nutzt immer unpersönliches не было + Genitiv.' } },
      { id: 'ru-g-x27-neg-3', kind: 'gap', q: 'В холод+ильнике совсем нет ___. (молок+о)', answer: 'молок+а', explain: { en: 'нет governs Genitive → молока.', de: 'нет verlangt Genitiv → молока.' } },
      { id: 'ru-g-x27-neg-4', kind: 'choice', q: 'Здесь темн+о и ___, пойдём домой.', options: ['н+ечего д+елать', 'ничего д+елать', 'нечего не д+елать'], answer: 0, explain: { en: 'Impersonal “nothing to do” → нечего делать (stressed н+е-, no verb не).', de: 'Unpersönliches „nichts zu tun“ → нечего делать (ohne Verb-не).' } },
      { id: 'ru-g-x27-neg-5', kind: 'choice', q: 'Ни од+ин уч+астник ___ опоздал на регистр+ацию.', options: ['не', 'ни', 'нет'], answer: 0, explain: { en: 'Main clause verb always takes не with ни- subjects.', de: 'Bei ни-Subjekt steht vor dem Verb immer не.' } },
      { id: 'ru-g-x27-neg-6', kind: 'gap', q: 'Я ___ не в+идел в х+олле — там было пусто. (никт+о, вин. п.)', answer: 'никог+о', explain: { en: 'Animate Accusative of никто = никого.', de: 'Belebter Akkusativ von никто = никого.' } },
      { id: 'ru-g-x27-neg-7', kind: 'choice', q: 'Опозд+ания нет — ___ волнов+аться!', options: ['н+е о чем', 'ни о чем', 'нет о чем'], answer: 0, explain: { en: '“Nothing to worry about” (infinitive construction) → не о чем волноваться.', de: '„Kein Grund zur Sorge“ → не о чем волноваться.' } },
      { id: 'ru-g-x27-neg-8', kind: 'choice', q: { en: 'Choose the right 3-word phrase for “about anything (negative)”:', de: 'Welche dreiteilige Form bedeutet „über nichts“?' }, options: ['ни о чём', 'о ничём', 'неочём'], answer: 0, explain: { en: 'Preposition sits between ни and чём: ни о чём.', de: 'Die Präposition steht zwischen ни und чём: ни о чём.' } }
    ]
  });

  // 7. B1: Short adjectives
  addTopic('short_adjectives', 'Short adjectives (готов, должен, рад, нужен…) · B1', 'B1');
  GT.registerGrammar({
    id: 'short_adjectives',
    level: 'B1',
    title: { en: 'Short adjectives: готов, должен, рад, нужен, уверен, прав', de: 'Kurzadjektive: готов, должен, рад, нужен, уверен, прав' },
    summary: {
      en: 'Заказ готов / Я должен идти / Мы очень рады / Мне нужен совет — predicate adjectives that decline ONLY by gender & number.',
      de: 'Заказ готов / Я должен идти / Мы очень рады / Мне нужен совет — Prädikatsadjektive mit Genus- und Numeruskongruenz.'
    },
    explanation: {
      en: '<p>Short adjectives act strictly as predicates (after a subject, never before a noun!) and take only four endings: <b>Ø</b> (masc.), <b>-а</b> (fem.), <b>-о</b> (neuter), <b>-ы/-и</b> (plural).</p>' +
        '<ul><li><b>Always/mostly short in predicates</b>: <em>рад</em> (no long form!), <em>д+олжен / должн+а</em> (obligation), <em>пр+ав / прав+а</em> (right), <em>винов+ат</em> (at fault).</li>' +
        '<li><b>State vs. permanent trait</b>: <em>Он сч+астлив</em> / <em>Она ув+ерена</em> / <em>Вход закр+ыт</em> / <em>Отчёт гот+ов</em>.</li>' +
        '<li><b>Dative subject with нужен</b>: <em>Мне н+ужен билет</em> (masc.), <em>Мне нужн+а виза</em> (fem.), <em>Мне нужн+ы очк+и</em> (pl.).</li></ul>',
      de: '<p>Kurzadjektive stehen nur als Prädikat und ändern sich ausschließlich nach Genus und Numerus (<b>Ø / -а / -о / -ы</b>):</p>' +
        '<ul><li><b>Fest als Kurzform</b>: <em>рад</em> (keine Langform!), <em>д+олжен / должн+а</em> (müssen), <em>пр+ав</em> (recht haben).</li>' +
        '<li><b>Ergebnis oder aktueller Zustand</b>: <em>Обед гот+ов. Магаз+ин откр+ыт. Я ув+ерен.</em></li>' +
        '<li><b>н+ужен + Dativ</b> richtet sich nach der benötigten Sache: <em>Мне нужн+а к+арта / н+ужен отв+ет / нужн+ы д+анные.</em></li></ul>'
    },
    tables: [{
      caption: { en: 'Four endings of short adjectives', de: 'Die vier Formen der Kurzadjektive' },
      head: { en: ['Masculine', 'Feminine', 'Neuter', 'Plural'], de: ['Maskulin', 'Feminin', 'Neutrum', 'Plural'] },
      deCols: [0, 1, 2, 3],
      rows: {
        en: [
          ['гот+ов', 'гот+ова', 'гот+ово', 'гот+овы'],
          ['д+олжен', 'должн+а', 'должн+о', 'должн+ы'],
          ['н+ужен', 'нужн+а', 'н+ужно', 'нужн+ы'],
          ['прав', 'прав+а', 'пр+аво', 'пр+авы'],
          ['рад', 'р+ада', 'р+адо', 'р+ады'],
          ['ув+ерен', 'ув+ерена', 'ув+ерено', 'ув+ерены']
        ],
        de: [
          ['гот+ов', 'гот+ова', 'гот+ово', 'гот+овы'],
          ['д+олжен', 'должн+а', 'должн+о', 'должн+ы'],
          ['н+ужен', 'нужн+а', 'н+ужно', 'нужн+ы'],
          ['прав', 'прав+а', 'пр+аво', 'пр+авы'],
          ['рад', 'р+ада', 'р+адо', 'р+ады'],
          ['ув+ерен', 'ув+ерена', 'ув+ерено', 'ув+ерены']
        ]
      }
    }],
    examples: [
      { t: 'Письм+о уже [[гот+ово]], м+ожно отправлять.', en: 'The letter is already ready; you can send it.', de: 'Der Brief ist schon fertig, man kann ihn abschicken.' },
      { t: '+Анна [[должн+а]] сд+ать ключи на рес+епшене.', en: 'Anna has to hand in the keys at reception.', de: 'Anna muss die Schlüssel an der Rezeption abgeben.' },
      { t: 'Мы +очень [[р+ады]], что вы смогл+и при+ехать!', en: 'We are very glad you could come!', de: 'Wir freuen uns sehr, dass Sie kommen konnten!' },
      { t: 'Для по+ездки вам [[нужн+ы]] уд+обные ботинки.', en: 'For the trip you need comfortable boots.', de: 'Für die Reise brauchen Sie bequeme Schuhe.' }
    ],
    pitfalls: [{
      title: { en: 'н+ужен agrees with the thing needed, not the person', de: 'н+ужен kongruiert mit der Sache, nicht mit der Person' },
      html: {
        en: '<span class="wrong">Мне нужен виза.</span> → <span class="right">Мне нужн+а в+иза.</span> (виза is feminine).',
        de: '<span class="wrong">Мне нужен виза.</span> → <span class="right">Мне нужн+а в+иза.</span>'
      }
    }],
    drills: [
      { id: 'ru-g-x27-sa-1', kind: 'choice', q: 'Каф+е сег+одня ___, приход+ите в любое вр+емя.', options: ['откр+ыто', 'откр+ытый', 'откр+ыта'], answer: 0, explain: { en: 'Кафе is neuter → short neuter form открыто.', de: 'Кафе ist Neutrum → Kurzform открыто.' } },
      { id: 'ru-g-x27-sa-2', kind: 'choice', q: 'Мои колл+еги ещё не ___ к пере+езду.', options: ['гот+овы', 'гот+ов', 'гот+овые'], answer: 0, explain: { en: 'Plural subject коллеги → готовы.', de: 'Plural Subjekt коллеги → готовы.' } },
      { id: 'ru-g-x27-sa-3', kind: 'gap', q: 'Для про+екта мне ___ т+олько три мин+уты в+ашего вр+емени. (нужный, мн. ч.)', answer: 'нужн+ы', explain: { en: 'три минуты uses plural agreement → нужны.', de: 'три минуты verlangt Plural → нужны.' } },
      { id: 'ru-g-x27-sa-4', kind: 'choice', q: 'К+атя, ты ___? В счёте и пр+авда ош+ибка!', options: ['прав+а', 'пр+авый', 'правы'], answer: 0, explain: { en: 'Addressing feminine Катя → права.', de: 'Für weibliches Subjekt Катя → права.' } },
      { id: 'ru-g-x27-sa-5', kind: 'choice', q: 'Я ___ в том, что мы усп+еем до в+ечера. (муж. р.)', options: ['ув+ерен', 'ув+ерена', 'ув+еренный'], answer: 0, explain: { en: 'Masculine short predicate → уверен (в + Prep.).', de: 'Maskulin Prädikat → уверен.' } },
      { id: 'ru-g-x27-sa-6', kind: 'gap', q: 'Секрет+арь ___ в+ыслать копию по п+очте. (обяз+ательство, жен. р. Марина)', answer: 'должн+а', explain: { en: 'Feminine short predicate for obligation → должна.', de: 'Feminine Verpflichtungsform → должна.' } },
      { id: 'ru-g-x27-sa-7', kind: 'choice', q: 'Она так ___ встр+ече, что при+ехала заранее.', options: ['р+ада', 'р+адая', 'рад'], answer: 0, explain: { en: 'рад has no long form; feminine singular → рада.', de: 'рад hat keine Langform; feminin → рада.' } },
      { id: 'ru-g-x27-sa-8', kind: 'choice', q: { en: 'Why does *хороший say something different from хорош here?', de: 'Unterschied: Он хороший vs. Он хорош собой?' }, options: ['Кр+аткая форма ч+асто описывает оц+енку или состо+яние, а не т+ип.', 'Кр+аткая форма всегд+а значит пр+ошлое.', 'Кр+аткие формы не склоняются по род+ам.'], answer: 0, explain: { en: 'Short forms focus on a situation/evaluation; long forms classify.', de: 'Kurzformen betonen Zustand/Wertung.' } }
    ]
  });

  // 8. B2: Indefinite pronouns (-то, -нибудь, кое-, -либо)
  addTopic('indefinite_pronouns_ru', 'Indefinite pronouns (-то vs. -нибудь vs. кое-) · B2', 'B2');
  GT.registerGrammar({
    id: 'indefinite_pronouns_ru',
    level: 'B2',
    title: { en: 'Indefinite pronouns: -то vs. -нибудь vs. кое- vs. -либо', de: 'Indefinitpronomen: -то, -нибудь, кое-, -либо' },
    summary: {
      en: 'Кто-то звонил vs. Позвони кому-нибудь / Кое-кто уже знает — knowing exactly which indefinite suffix fits reality vs. hypothesis.',
      de: 'Кто-то звонил vs. Позвони кому-нибудь / Кое-кто уже знает — sicher wählen zwischen real, offen und bekannt.'
    },
    explanation: {
      en: '<p>Choosing between <em>-то</em>, <em>-нибудь</em> and <em>кое-</em> is one of the clearest markers of natural B2/C1 Russian:</p>' +
        '<ul><li><b>-то</b> — specific real event/thing/person, just <b>unknown to the speaker</b> (common in past & real present): <em><b>Кто-то</b> ост+авил зонт.</em></li>' +
        '<li><b>-нибудь</b> — <b>hypothetical, non-specific, any one of a set</b> (questions, future, imperatives, conditionals, general advice): <em>Спроси <b>кого-нибудь</b>. / Бывал ли ты <b>когда-нибудь</b> в Перм+и?</em></li>' +
        '<li><b>кое-</b> — known to the speaker, kept vague or selective on purpose (“certain / a few / I happen to know who”): <em>У меня есть <b>кое-какие</b> вопр+осы.</em> (Preposition splits кое-: <em>кое с кем, кое о чём</em>!)</li>' +
        '<li><b>-либо</b> — formal equivalent of <em>-нибудь</em> in laws, docs and negatives.</li></ul>',
      de: '<p>Die Wahl zwischen <em>-то</em>, <em>-нибудь</em> und <em>кое-</em> entscheidet über Natürlichkeit:</p>' +
        '<ul><li><b>-то</b> — konkret passiert, aber dem Sprecher unbekannt (Präteritum / reale Gegenwart): <em><b>Кто-то</b> стучит.</em></li>' +
        '<li><b>-нибудь</b> — beliebig / offen (Fragen, Zukunft, Imperativ, Bedingung): <em>Выбери <b>что-нибудь</b> вкусное.</em></li>' +
        '<li><b>кое-</b> — dem Sprecher bekannt, aber nicht genau benannt: <em><b>Кое-кто</b> уже ушёл.</em> (Präposition steht dazwischen: <em>кое о чём</em>!)</li>' +
        '<li><b>-либо</b> — gehobene Variante von <em>-нибудь</em> in Verträgen und Sachtexten.</li></ul>'
    },
    tables: [{
      caption: { en: '-то vs. -нибудь vs. кое-', de: '-то vs. -нибудь vs. кое-' },
      head: { en: ['Prefix / Suffix', 'Speaker knows?', 'Typical context'], de: ['Form', 'Sprecher weiß es?', 'Typischer Kontext'] },
      deCols: [0],
      rows: {
        en: [
          ['-то', 'specific fact, speaker doesn’t know who/what', 'past tense, concrete ongoing present'],
          ['-нибудь', 'not specific / any one will do', 'questions, imperatives, future, если'],
          ['кое-', 'speaker DOES know (or keeps quiet)', 'hints, selective plans (“a thing or two”)'],
          ['-либо', 'formal “any … whatsoever”', 'contracts, policies, technical writing']
        ],
        de: [
          ['-то', 'konkret geschehen, Sprecher weiß nicht wer', 'Präteritum, konkrete Gegenwart'],
          ['-нибудь', 'irgendein beliebiges', 'Fragen, Imperativ, Zukunft, wenn-Satz'],
          ['кое-', 'Sprecher weiß es (nennt es nicht)', 'Andeutungen („so manches“)'],
          ['-либо', 'formell „irgendetwas überhaupt“', 'Verträge, Sachtexte']
        ]
      }
    }],
    examples: [
      { t: 'Только что [[кто-то]] в+ышел из приёмной.', en: 'Someone just walked out of the reception.', de: 'Gerade eben hat jemand den Empfang verlassen.' },
      { t: 'Если [[чт+о-нибудь]] пойдёт не так, набер+и меня.', en: 'If anything goes wrong, call me.', de: 'Falls irgendetwas schiefgeht, ruf mich an.' },
      { t: 'Мне нужно рассказать тебе [[кое о чём]] по секрету.', en: 'I need to tell you about something in confidence.', de: 'Ich muss dir unter vier Augen etwas erzählen.' },
      { t: 'Запрещен+о передавать п+аспорт [[кому-либо]] третьему.', en: 'It is forbidden to hand the passport to any third party.', de: 'Es ist untersagt, den Pass an irgendeinen Dritten weiterzugeben.' }
    ],
    pitfalls: [{
      title: { en: 'Don’t use -то for general “ever?” questions', de: 'Kein -то in allgemeinen „je?“-Fragen' },
      html: {
        en: '<span class="wrong">Ты когда-то был в Казани?</span> → <span class="right">Ты когд+а-нибудь был в Каз+ани?</span>',
        de: '<span class="wrong">Ты когда-то был в Казани?</span> → <span class="right">Ты когд+а-нибудь был в Каз+ани?</span>'
      }
    }],
    drills: [
      { id: 'ru-g-x27-ind-1', kind: 'choice', q: 'У меня проп+ал файл — его ___ случайно удал+ил.', options: ['кт+о-то', 'кт+о-нибудь', 'кое-кт+о ли'], answer: 0, explain: { en: 'Real past event by a specific unknown actor → кто-то.', de: 'Konkretes Ereignis in der Vergangenheit → кто-то.' } },
      { id: 'ru-g-x27-ind-2', kind: 'choice', q: 'Принес+и, пож+алуйста, ___ выпить со стол+а.', options: ['чт+о-нибудь', 'кое-что уже', 'чт+о-то ни'], answer: 0, explain: { en: 'Request / imperative (“anything to drink”) → что-нибудь.', de: 'Bitte / Imperativ („irgendetwas zu trinken“) → что-нибудь.' } },
      { id: 'ru-g-x27-ind-3', kind: 'gap', q: 'Ты ___ (когда) пробовал работать в ночн+ую смену?', answer: 'когд+а-нибудь', explain: { en: 'Open yes/no experience question (“ever?”) → когда-нибудь.', de: 'Erfahrungsfrage („jemals?“) → когда-нибудь.' } },
      { id: 'ru-g-x27-ind-4', kind: 'choice', q: 'Задерж+ись на пять мин+ут, я хочу с тобой кое ___ обменяться.', options: ['чем', 'с кем', 'о чём'], answer: 0, explain: { en: 'кое + Instrumental (обменяться чем? без предлога) → кое-чем.', de: 'обменяться verlangt Instrumental → кое-чем.' } },
      { id: 'ru-g-x27-ind-5', kind: 'choice', q: 'О +этом секрете ___ в отд+еле уже зн+ает (говорящий знает, но не называет).', options: ['кое-кт+о', 'кт+о-нибудь', 'кт+о-либо'], answer: 0, explain: { en: 'Speaker knows who, hinting selectively → кое-кто.', de: 'Sprecher weiß wen, nennt es aber nicht → кое-кто.' } },
      { id: 'ru-g-x27-ind-6', kind: 'gap', q: 'Если появятся ___ измен+ения, сообщ+ите ср+азу. (как+ой-либо)', answer: 'как+ие-либо', explain: { en: 'Formal conditional (“any changes whatsoever”) → какие-либо.', de: 'Formell („irgendwelche Änderungen“) → какие-либо.' } },
      { id: 'ru-g-x27-ind-7', kind: 'choice', q: 'Мы ___ уже реш+али пох+ожую задачу пару лет наз+ад.', options: ['когд+а-то', 'когд+а-нибудь', 'кое-когд+а'], answer: 0, explain: { en: '“Once upon a time / at some point in the past” → когда-то.', de: '„Vor einiger Zeit einmal“ (Vergangenheit) → когда-то.' } },
      { id: 'ru-g-x27-ind-8', kind: 'choice', q: { en: 'How do you write кое + на + что?', de: 'Wie schreibt man кое + на + что?' }, options: ['кое на что', 'кое-на-что', 'коеначто'], answer: 0, explain: { en: 'Preposition sits between кое and the pronoun as 3 separate words.', de: 'Mit Präposition getrennt in 3 Wörtern: кое на что.' } }
    ]
  });

  // 9. B2: Complex connectors (благодаря тому что, из-за того что, несмотря на то что...)
  addTopic('complex_connectors_ru', 'Complex connectors (несмотря на то что…) · B2', 'B2');
  GT.registerGrammar({
    id: 'complex_connectors_ru',
    level: 'B2',
    title: { en: 'Complex clause connectors: несмотря на то что, благодаря тому что…', de: 'Mehrteilige Konjunktionen: несмотря на то что, благодаря тому что…' },
    summary: {
      en: 'несмотря на то что / благодаря тому что / из-за того что / для того чтобы / прежде чем — building multi-clause Russian sentences cleanly.',
      de: 'несмотря на то что / благодаря тому что / из-за того что / для того чтобы / прежде чем — komplexe Sätze sicher verbinden.'
    },
    explanation: {
      en: '<p>Many Russian conjunctions are built from <b>preposition + то (in the right case!) + что / чтобы</b>:</p>' +
        '<ul><li><b>Positive vs. negative cause</b>: <em>благодар+я том+у, что…</em> (positive cause) ↔ <em>из-за тог+о, что…</em> (negative cause / obstacle).</li>' +
        '<li><b>Concession</b>: <em>несмотр+я на то, что…</em> (“even though / despite the fact that”).</li>' +
        '<li><b>Time sequence</b>: <em>п+осле тог+о, как…</em> (“after”), <em>до тог+о, как…</em> / <em>пр+ежде чем…</em> (“before”). Notice <em>пр+ежде чем + Infinitive</em> works when the subject is the same!</li>' +
        '<li><b>Comma note</b>: at the start of a sentence, the whole complex conjunction stays unbroken (no comma before <em>что</em>): <em>Несмотря на то что шёл дождь, мы пошли гулять.</em> Inside a sentence, a comma splits before <em>что</em> or before the whole phrase.</li></ul>',
      de: '<p>Viele russische Nebensätze entstehen aus <b>Präposition + то (passender Kasus) + что / чтобы</b>:</p>' +
        '<ul><li><b>Ursache positiv vs. negativ</b>: <em>благодар+я том+у, что…</em> (dank…) ↔ <em>из-за тог+о, что…</em> (weil [störend]…).</li>' +
        '<li><b>Konzession</b>: <em>несмотр+я на то, что…</em> („obwohl / trotz der Tatsache, dass“).</li>' +
        '<li><b>Zeitfolge</b>: <em>п+осле тог+о как…</em>, <em>пр+ежде чем + Infinitiv</em> (bei gleichem Subjekt).</li></ul>'
    },
    tables: [{
      caption: { en: 'Compound conjunctions at B2', de: 'Zusammengesetzte Konjunktionen auf B2' },
      head: { en: ['Conjunction', 'Relation', 'Example'], de: ['Konjunktion', 'Beziehung', 'Beispiel'] },
      deCols: [2],
      rows: {
        en: [
          ['благодаря тому, что', 'positive cause', 'Благодаря тому что тесты писали сразу, багов почти нет.'],
          ['из-за того, что', 'negative cause', 'Рейс отложили из-за того, что поднялся ветер.'],
          ['несмотря на то, что', 'concession', 'Несмотря на то что было поздно, работа кипела.'],
          ['прежде чем + Inf./clause', 'prior step (“before”)', 'Прежде чем подписывать договор, проверь даты.'],
          ['по мере того как', 'gradual parallel change', 'По мере того как проект рос, команда менялась.']
        ],
        de: [
          ['благодаря тому, что', 'positive Ursache', 'Благодаря тому что тесты писали сразу, багов почти нет.'],
          ['из-за того, что', 'negative Ursache', 'Рейс отложили из-за того, что поднялся ветер.'],
          ['несмотря на то, что', 'Konzession', 'Несмотря на то что было поздно, работа кипела.'],
          ['прежде чем + Inf./Satz', 'Vorzeitigkeit („bevor“)', 'Прежде чем подписывать договор, проверь даты.'],
          ['по мере того как', 'allmähliche Entwicklung', 'По мере того как проект рос, команда менялась.']
        ]
      }
    }],
    examples: [
      { t: 'Мы не усп+ели на паром [[из-за тог+о, что]] закр+ыли мост.', en: 'We missed the ferry because the bridge was closed.', de: 'Wir haben die Fähre verpasst, weil die Brücke gesperrt war.' },
      { t: '[[Благодар+я том+у что]] он знал немецкий, перегов+оры прошл+и легко.', en: 'Thanks to his knowing German, the talks went smoothly.', de: 'Dank der Tatsache, dass er Deutsch konnte, liefen die Gespräche leicht.' },
      { t: '[[Несмотр+я на то что]] билеты дорогие, зал полон.', en: 'Even though the tickets are expensive, the hall is full.', de: 'Obwohl die Tickets teuer sind, ist der Saal voll.' },
      { t: '[[Пр+ежде чем]] отправлять анкету, еще раз пров+ерьте телеф+он.', en: 'Before submitting the form, double-check your phone number.', de: 'Bevor du das Formular abschickst, prüfe nochmals deine Telefonnummer.' }
    ],
    pitfalls: [{
      title: { en: 'Match the case of то to the preposition!', de: 'Kasus von то an Präposition anpassen!' },
      html: {
        en: '<em>благодар+я <b>тому</b></em> (Dat.), <em>из-за <b>того</b></em> (Gen.), <em>несмотря на <b>то</b></em> (Acc.). Never swap them!',
        de: '<em>благодар+я <b>тому</b></em> (Dat.), <em>из-за <b>того</b></em> (Gen.), <em>несмотря на <b>то</b></em> (Akk.).'
      }
    }],
    drills: [
      { id: 'ru-g-x27-cc-1', kind: 'choice', q: 'Он опозд+ал ___ пробка растянулась на пять километров.', options: ['из-за тог+о, что', 'благодар+я том+у, что', 'для тог+о чтобы'], answer: 0, explain: { en: 'Negative cause (being late due to traffic) → из-за того, что.', de: 'Negative Ursache (Stau) → из-за того, что.' } },
      { id: 'ru-g-x27-cc-2', kind: 'choice', q: 'Благодар+я ___, что колл+ега вовремя заметил ошибку, отчёт спасли.', options: ['том+у', 'тог+о', 'то'], answer: 0, explain: { en: 'благодаря governs Dative → тому.', de: 'благодаря steht mit Dativ → тому.' } },
      { id: 'ru-g-x27-cc-3', kind: 'gap', q: 'Несмотр+я на ___, что погода испортилась, забег не отмен+или.', answer: 'то', explain: { en: 'несмотря на takes Accusative → то.', de: 'несмотря на regiert Akkusativ → то.' } },
      { id: 'ru-g-x27-cc-4', kind: 'choice', q: '___ уход+ить из +офиса, выключите монитор.', options: ['Пр+ежде чем', 'П+осле тог+о как', 'Из-за тог+о что'], answer: 0, explain: { en: '“Before leaving” with infinitive → Прежде чем + уходить.', de: '„Bevor man geht“ + Infinitiv → Прежде чем уходить.' } },
      { id: 'ru-g-x27-cc-5', kind: 'choice', q: '___ как вы подписали акт, мы передали копию в архив.', options: ['П+осле тог+о', 'Из-за тог+о', 'Для тог+о'], answer: 0, explain: { en: '“After you signed…” → После того как…', de: '„Nachdem Sie unterschrieben hatten…“ → После того как…' } },
      { id: 'ru-g-x27-cc-6', kind: 'gap', q: 'Он встал пораньше для тог+о, ___ успеть к открытию. (цель)', answer: 'чт+обы', explain: { en: 'Purpose clause → для того, чтобы.', de: 'Finalsatz → для того, чтобы.' } },
      { id: 'ru-g-x27-cc-7', kind: 'choice', q: 'По ___ того как курс подход+ил к концу, темп разговоров рос.', options: ['м+ере', 'причине', 'вр+емени'], answer: 0, explain: { en: 'Parallel gradual change (“as / the further…”) → по мере того как.', de: 'Parallele Entwicklung („in dem Maße, wie“) → по мере того как.' } },
      { id: 'ru-g-x27-cc-8', kind: 'choice', q: { en: 'Which is grammatically wrong?', de: 'Welcher Satz ist falsch?' }, options: ['Мы попрос+или п+омощи из-за том+у, что не успев+али.', 'Про+ект сдали вовремя благодар+я том+у, что все помогли.', 'До тог+о как уехать, он оставил адрес.'], answer: 0, explain: { en: 'из-за takes Genitive (того), never Dative (*тому).', de: 'из-за verlangt Genitiv (того), nicht Dativ.' } }
    ]
  });
})();

/* === Content expansion Wave 2 (2026-11-27): +5 RU B2 grammar lessons (40 drills) === */
(function () {
  var cfg = GT._target && GT._target.config;
  var topics = cfg && cfg.TOPICS && cfg.TOPICS.grammar;
  function addTopic(id, name) {
    if (topics && !topics.some(function (t) { return t.id === id; })) {
      topics.push({ id: id, name: name, level: 'B2', group: 'Grammar topics' });
    }
  }

  // 1. B2: Introductory words & parentheticals
  addTopic('introductory_words_ru', 'Introductory words (к счастью, по-видимому, впрочем…) · B2');
  GT.registerGrammar({
    id: 'introductory_words_ru',
    level: 'B2',
    title: { en: 'Introductory words: к счастью, по-видимому, впрочем, итак', de: 'Schaltwörter: к счастью, по-видимому, впрочем, итак' },
    summary: {
      en: 'К сч+астью / По-в+идимому / Впр+очем / Короче говор+я / Одн+ако — parenthetical words set off by commas that frame speaker attitude.',
      de: 'К сч+астью / По-в+идимому / Впр+очем / Короче говор+я — Einschubwörter mit Komma für Haltung und Gesprächsführung.'
    },
    explanation: {
      en: '<p>Russian marks stance and discourse structure using <b>introductory words (вв+одные слов+а)</b>, always separated by commas and outside syntactic structure:</p>' +
        '<ul><li><b>Attitude / luck</b>: <em>к сч+астью</em> (fortunately), <em>к сожал+ению</em> (unfortunately), <em>как ни стр+анно</em> (oddly enough).</li>' +
        '<li><b>Certainty</b>: <em>кон+ечно</em> (of course), <em>безусл+овно</em> (undoubtedly), <em>по-в+идимому / веро+ятно</em> (apparently / probably), <em>к+ажется</em> (it seems).</li>' +
        '<li><b>Ordering & summary</b>: <em>во-п+ервых, во-втор+ых</em> (firstly, secondly), <em>впр+очем</em> (though / mind you), <em>након+ец</em> (finally [argument!]), <em>итак / кор+оче говор+я</em> (so / in short).</li>' +
        '<li><b>False friends with commas</b>: <em>всё-таки, вр+оде, д+аже, +именно, ведь, почт+и, пр+осто</em> are particles/adverbs — NEVER introductory words!</li></ul>',
      de: '<p>Das Russische steuert Haltung und Textstruktur über <b>Schaltwörter (вв+одные слов+а)</b>, die immer durch Komma abgetrennt werden:</p>' +
        '<ul><li><b>Bewertung</b>: <em>к сч+астью</em> (zum Glück), <em>к сожал+ению</em> (leider).</li>' +
        '<li><b>Gewissheit</b>: <em>по-в+идимому</em> (offenbar), <em>веро+ятно</em> (wahrscheinlich), <em>кон+ечно</em> (natürlich).</li>' +
        '<li><b>Gliederung</b>: <em>во-п+ервых, во-втор+ых</em>, <em>впр+очем</em> (übrigens/allerdings), <em>итак</em> (also/kurzum).</li>' +
        '<li><b>Keine Schaltwörter</b>: <em>всё-таки, ведь, д+аже, почт+и, пр+осто</em> bekommen kein Komma!</li></ul>'
    },
    tables: [{
      caption: { en: 'Common introductory words vs. non-parenthetical lookalikes', de: 'Häufige Schaltwörter vs. Wörter ohne Komma' },
      head: { en: ['Introductory (commas!)', 'Function', 'Note'], de: ['Schaltwort (Komma!)', 'Funktion', 'Hinweis'] },
      deCols: [0],
      rows: {
        en: [
          ['к счастью / к сожалению', 'speaker feeling', 'к + Dat.; never skip commas'],
          ['по-видимому / вероятно', 'probability', 'shows inference, not full proof'],
          ['во-первых / во-вторых', 'listing reasons', 'no hyphen after commas'],
          ['впрочем', 'soft second thought', 'unlike однако at start, softens contrast'],
          ['казалось бы / кажется', 'tentative impression', 'compare verb он кажется уставшим (no comma!)']
        ],
        de: [
          ['к счастью / к сожалению', 'Haltung', 'immer mit Komma abgetrennt'],
          ['по-видимому / вероятно', 'Vermutung', 'zeigt Schlussfolgerung'],
          ['во-первых / во-вторых', 'Aufzählung', 'erstens / zweitens'],
          ['впрочем', 'Abschwächung', '„allerdings / übrigens“'],
          ['кажется', 'Eindruck', 'Verb он кажется… ohne Komma!']
        ]
      }
    }],
    examples: [
      { t: '[[К сч+астью]], посл+едний п+оезд задерж+али на д+есять мин+ут.', en: 'Fortunately, the last train was delayed by ten minutes.', de: 'Zum Glück hatte der letzte Zug zehn Minuten Verspätung.' },
      { t: '[[По-в+идимому]], курь+ер ост+авил кор+обку у охр+аны.', en: 'Apparently, the courier left the box with security.', de: 'Offenbar hat der Kurier das Paket beim Pförtner abgegeben.' },
      { t: '[[Во-п+ервых]], ср+оки горят, а [[во-втор+ых]], нет бюджета.', en: 'Firstly, deadlines are tight, and secondly, there is no budget.', de: 'Erstens drängen die Fristen, und zweitens fehlt das Budget.' },
      { t: 'Билет дорогой; [[впр+очем]], перелёт экономит целый день.', en: 'The ticket is pricey; mind you, flying saves a whole day.', de: 'Das Ticket ist teuer; allerdings spart der Flug einen ganzen Tag.' }
    ],
    pitfalls: [{
      title: { en: 'однако at the start vs. inside a sentence', de: 'однако am Satzanfang vs. im Satzinneren' },
      html: {
        en: 'At the start of a clause, <em>Одн+ако он ушёл</em> acts as “but” (no comma after <em>однако</em>). Inside a clause, <em>Он, одн+ако, ушёл</em> takes commas on both sides.',
        de: 'Am Satzanfang bedeutet <em>Одн+ако</em> „jedoch / aber“ (ohne Komma danach); im Satzinneren bekommt es zwei Kommas.'
      }
    }],
    drills: [
      { id: 'ru-g-w2-intro-1', kind: 'choice', q: '___, никт+о не пострад+ал при ав+арии.', options: ['К сч+астью', 'Вроде', 'Почти'], answer: 0, explain: { en: '“Fortunately” → К счастью (+ comma).', de: '„Zum Glück“ → К счастью (+ Komma).' } },
      { id: 'ru-g-w2-intro-2', kind: 'choice', q: '___, нам придётся перенест+и встр+ечу на п+ятницу (оценка вероятности).', options: ['По-в+идимому', 'Даже', 'Ведь'], answer: 0, explain: { en: 'Tentative inference (“apparently / seemingly”) → По-видимому.', de: 'Vermutung („offenbar“) → По-видимому.' } },
      { id: 'ru-g-w2-intro-3', kind: 'gap', q: 'У меня две причины: ___-первых, не хват+ает вр+емени…', answer: 'во', explain: { en: 'во-первых (“firstly”) is written with во- and hyphen.', de: 'во-первых („erstens“) steht immer mit во- und Bindestrich.' } },
      { id: 'ru-g-w2-intro-4', kind: 'choice', q: 'В каком предложении выделенное слово является вводным и требует запятых?', options: ['Он, к+ажется, забыл ключи.', 'Вечер к+ажется слишком прохладным.', 'Мы всё-таки усп+ели.'], answer: 0, explain: { en: 'кажется as a parenthetical comment requires commas; он кажется прохладным is a predicate verb.', de: 'Einschub кажется braucht Kommas; das Verb он кажется… nicht.' } },
      { id: 'ru-g-w2-intro-5', kind: 'choice', q: '___ говор+я, без резервной копии не обойтись.', options: ['Кор+оче', 'Прямо', 'Однако ли'], answer: 0, explain: { en: '“In short” → Короче говоря.', de: '„Kurz gesagt“ → Короче говоря.' } },
      { id: 'ru-g-w2-intro-6', kind: 'gap', q: 'Рейс отмен+или; ___, гостиница вернула деньги сразу. (в значении «впрочем»)', answer: 'впр+очем', explain: { en: 'Soft balancing thought (“though / all the same”) → впрочем.', de: 'Relativierender Nachtrag → впрочем.' } },
      { id: 'ru-g-w2-intro-7', kind: 'choice', q: 'Какое слово НЕ бывает вводным и НЕ выделяется запятыми?', options: ['всё-таки', 'безусл+овно', 'к сожал+ению'], answer: 0, explain: { en: 'всё-таки is a particle, never set off by commas.', de: 'всё-таки ist eine Partikel und steht nie in Kommas.' } },
      { id: 'ru-g-w2-intro-8', kind: 'choice', q: '___, подвод+я ит+оги: все задачи сд+аны в срок.', options: ['Ит+ак', 'Ведь', 'Аж'], answer: 0, explain: { en: 'Introducing the final summary → Итак.', de: 'Zusammenfassendes Ergebnis → Итак.' } }
    ]
  });

  // 2. B2: Collective numerals & оба/обе
  addTopic('collective_numerals_ru', 'Collective numerals & оба / обе (двое, трое…) · B2');
  GT.registerGrammar({
    id: 'collective_numerals_ru',
    level: 'B2',
    title: { en: 'Collective numerals (двое, трое, четверо) & оба / обе', de: 'Sammelzahlwörter (двое, трое, четверо) & оба / обе' },
    summary: {
      en: 'двое друзей / четверо суток / обе стороны / оба варианта — when Russian prefers дво́е instead of два and distinguishes оба vs. обе.',
      de: 'двое друзей / четверо суток / обе стороны / оба варианта — wann дво́е statt два steht und оба vs. обе.'
    },
    explanation: {
      en: '<p>Collective numerals (<b>дв+ое, тр+ое, ч+етверо, п+ятеро, ш+естеро, с+емеро</b>) govern the <b>Genitive plural</b> and follow strict usage rules:</p>' +
        '<ul><li><b>Where collective numerals are REQUIRED</b>: with plural-only nouns (<em>дв+ое с+уток, тр+ое ножниц, ч+етверо час+ов</em> [watches]), paired items (<em>дв+ое перч+аток</em>), and young animals/kids (<em>дв+ое дет+ей</em>).</li>' +
        '<li><b>Masculine / mixed groups & people</b>: <em>тр+ое студ+ентов, дв+ое мужч+ин, нас б+ыло ч+етверо</em>. NEVER use collective numerals with female nouns! (*двое подруг — ошибка! Only <em>две подр+уги</em>!).</li>' +
        '<li><b>оба vs. обе (“both”)</b>: <b>+оба</b> for masculine/neuter (<em>+оба д+ома, об+оих отчётов</em>), <b>+обе</b> strictly for feminine (<em>+обе сторон+ы, об+еих рук</em>). Notice stem vowel changes: <b>обо-</b> vs. <b>обе-</b>!</li></ul>',
      de: '<p>Sammelzahlwörter (<b>дв+ое, тр+ое, ч+етверо, п+ятеро…</b>) verlangen immer den <b>Genitiv Plural</b>:</p>' +
        '<ul><li><b>Pflichtfälle</b>: Pluraliatantum (<em>дв+ое с+уток, тр+ое брюк</em>), Paarobjekte, <em>дв+ое дет+ей / ребя́т</em>.</li>' +
        '<li><b>Menschen (männlich / gemischt)</b>: <em>нас п+ятеро, дв+ое колл+ег (m.)</em>. Niemals für weibliche Substantive (*двое девушек → <em>две д+евушки</em>!).</li>' +
        '<li><b>+оба (m./n.) vs. +обе (f.)</b>: <em>+оба сл+ова / об+оих сл+ов</em> vs. <em>+обе кн+иги / об+еих кн+иг</em>.</li></ul>'
    },
    tables: [{
      caption: { en: 'Collective numerals & оба/обе declension', de: 'Sammelzahlwörter und оба/обе' },
      head: { en: ['Rule', 'Correct', 'Avoid'], de: ['Regel', 'Richtig', 'Vermeiden'] },
      deCols: [1, 2],
      rows: {
        en: [
          ['plural-only noun (сутки)', 'тр+ое с+уток (Gen. pl.)', '*три сутки / *три суток'],
          ['women / female nouns', 'три подр+уги', '*трое подруг'],
          ['both masc./neut.', '+оба письм+а / об+оих п+исем', '*обе письма'],
          ['both feminine', '+обе сд+елки / об+еим сторон+ам', '*обоим сторонам']
        ],
        de: [
          ['Pluralwort (сутки)', 'тр+ое с+уток (Gen. Pl.)', '*три сутки'],
          ['weibliche Nomen', 'три подр+уги', '*трое подруг'],
          ['beide (m./n.)', '+оба отчёта / в об+оих отчётах', '*в обеих отчётах'],
          ['beide (f.)', '+обе сторон+ы / об+еих стор+он', '*обоих сторон']
        ]
      }
    }],
    examples: [
      { t: 'Мы жд+али отв+ета [[тр+ое с+уток]].', en: 'We waited for a reply for three days (72 hours).', de: 'Wir haben drei Tage lang auf Antwort gewartet.' },
      { t: 'На встрече присутствовали [[ч+етверо]] инжен+еров и [[две]] дизайн+ерши.', en: 'Four male/mixed engineers and two female designers attended the meeting.', de: 'An der Sitzung nahmen vier Ingenieure und zwei Designerinnen teil.' },
      { t: '[[+Обе]] комп+ании подпис+али соглаш+ение; у [[об+еих]] стор+он одинаковые пр+ава.', en: 'Both companies signed the agreement; both sides have equal rights.', de: 'Beide Unternehmen haben unterzeichnet; beide Seiten haben gleiche Rechte.' },
      { t: 'У [[об+оих]] вари+антов есть пл+юсы и м+инусы.', en: 'Both options have pros and cons.', de: 'Beide Varianten haben Vor- und Nachteile.' }
    ],
    pitfalls: [{
      title: { en: 'обоим (m./n.) vs. обеим (f.)', de: 'обоим (m./n.) vs. обеим (f.)' },
      html: {
        en: '<span class="wrong">по обоим сторонам улицы</span> → <span class="right">по об+еим сторон+ам +улицы</span> (сторон+а is feminine!).',
        de: '<span class="wrong">по обоим сторонам</span> → <span class="right">по об+еим сторон+ам</span>.'
      }
    }],
    drills: [
      { id: 'ru-g-w2-col-1', kind: 'choice', q: 'Поездка заняла ___ суток.', options: ['дв+ое', 'две', 'два'], answer: 0, explain: { en: 'сутки is plural-only → requires collective двое + Gen. pl. суток.', de: 'сутки (Pluralwort) verlangt двое + Gen. Pl.' } },
      { id: 'ru-g-w2-col-2', kind: 'choice', q: 'У стол+а стояли ___ подр+уги (жен. род).', options: ['три', 'тр+ое', 'трёх'], answer: 0, explain: { en: 'Never use collective numerals with female nouns → три подруги.', de: 'Sammelzahlwörter stehen nicht bei weiblichen Nomen → три подруги.' } },
      { id: 'ru-g-w2-col-3', kind: 'gap', q: 'Мы согласов+али усл+овия с ___ сторон+ами. (+обе, творит. п.)', answer: 'об+еими', explain: { en: 'сторона is feminine; с + Instrumental of обе → обеими.', de: 'сторона ist feminin; с + Instrumental von обе → обеими.' } },
      { id: 'ru-g-w2-col-4', kind: 'choice', q: 'В ___ отчётах (муж. р.) ук+азана одинаковая с+умма.', options: ['об+оих', 'об+еих', '+оба'], answer: 0, explain: { en: 'отчёт is masculine → Prepositional plural of оба is обоих.', de: 'отчёт ist maskulin → Präpositiv von оба lautet обоих.' } },
      { id: 'ru-g-w2-col-5', kind: 'choice', q: 'В семье растут ___ дет+ей.', options: ['тр+ое', 'три', 'тр+оими'], answer: 0, explain: { en: 'дети normally pairs with collective numerals → трое детей.', de: 'дети steht meist mit Sammelzahlwort → трое детей.' } },
      { id: 'ru-g-w2-col-6', kind: 'gap', q: 'Колл+еги при+ехали вчера; нас в отделе теперь ___. (5 человек — собират. числ.)', answer: 'п+ятеро', explain: { en: 'Standalone group count of people → пятеро.', de: 'Personengruppe ohne Substantiv → пятеро.' } },
      { id: 'ru-g-w2-col-7', kind: 'choice', q: 'Мастер держ+ал провод+а ___ рук+ами.', options: ['об+еими', 'об+оими', 'дв+оими'], answer: 0, explain: { en: 'рук+а is feminine → обеими руками.', de: 'рук+а ist feminin → обеими руками.' } },
      { id: 'ru-g-w2-col-8', kind: 'choice', q: 'Мы осмотрели ___ зд+ания (ср. р.: зд+ание).', options: ['+оба', '+обе', '+обое'], answer: 0, explain: { en: 'Neuter nouns (здание) take оба (+ Gen. sg. здания).', de: 'Neutrum (здание) verwendet оба.' } }
    ]
  });

  // 3. B2: Oblique case forms of numerals
  addTopic('numerals_oblique_ru', 'Numerals in oblique cases (двух, пятидесяти, двухсот…) · B2');
  GT.registerGrammar({
    id: 'numerals_oblique_ru',
    level: 'B2',
    title: { en: 'Declension of numerals: двух, пятидесяти, двухсот', de: 'Deklination von Zahlen: двух, пятидесяти, двухсот' },
    summary: {
      en: 'более пятидесяти стран / с двумястами участниками / в двух тысячах метров — declining 50–80, 200–900, and compound numbers cleanly.',
      de: 'более пятидесяти стран / с двумястами участниками — sichere Zahlformen in Genitiv, Dativ, Instrumental und Präpositiv.'
    },
    explanation: {
      en: '<p>In B2/C1 texts, numerals appear with prepositions and verbs — requiring oblique endings inside EVERY part of compound words:</p>' +
        '<ul><li><b>40, 90, 100</b> have only TWO forms: Nom./Acc. <em>сорок, девяносто, сто</em>; ALL other cases end in <b>-а</b>: <em>сорок+а, девян+оста, ста</em>!</li>' +
        '<li><b>50–80 (пятьдес+ят… в+осемьдесят)</b> decline BOTH halves inside one word: <em>пятидесят+и</em> (Gen./Dat./Prep.), <em>пятьюдесят+ью</em> (Instr.).</li>' +
        '<li><b>200, 300, 400, 500–900</b> decline BOTH parts too: <em>двухс+от / двумст+ам / двумяст+ами / о двухст+ах</em>; <em>пятис+от / пятист+ам / пятьюст+ами</em>.</li>' +
        '<li><b>Remember noun agreement</b>: after Gen./Dat./Instr./Prep. of a numeral, the noun matches THAT case in PLURAL (not Gen. sg.!): <em>нет <b>двух стол+ов</b></em>, <em>к <b>трём час+ам</b></em>, <em>с <b>пятью рубл+ями</b></em>.</li></ul>',
      de: '<p>In schriftsprachlichen Fällen werden bei zusammengesetzten Zahlen oft <b>beide Wortteile</b> gebeugt:</p>' +
        '<ul><li><b>40, 90, 100</b> kennen nur zwei Formen: <em>сорок, девяносто, сто</em> vs. <em>сорок+а, девян+оста, ста</em> (Gen./Dat./Instr./Präp.).</li>' +
        '<li><b>50–80</b> beugen beide Hälften: <em>пятидесят+и, пятьюдесят+ью</em>.</li>' +
        '<li><b>200–900</b> ebenso: <em>двухс+от, двумст+ам, двумяст+ами</em>; <em>пятис+от</em>.</li>' +
        '<li><b>Substantiv</b> folgt in den obliquen Kasus im jeweiligen Pluralkasus: <em>около двух час+ов, с трем+я друг+ими колл+егами</em>.</li></ul>'
    },
    tables: [{
      caption: { en: 'High-frequency oblique numeral forms', de: 'Wichtige Zahlformen in obliquen Fällen' },
      head: { en: ['Number', 'Gen. / Prep.', 'Dat.', 'Instr.'], de: ['Zahl', 'Gen. / Präp.', 'Dat.', 'Instr.'] },
      deCols: [1, 2, 3],
      rows: {
        en: [
          ['2 / 3 / 4', 'двух / трёх / четырёх', 'двум / трём / четырём', 'двумя / тремя / четырьмя'],
          ['40 / 90 / 100', 'сорока / девяноста / ста', 'сорока / девяноста / ста', 'сорока / девяноста / ста'],
          ['50', 'пятидесяти', 'пятидесяти', 'пятьюдесятью'],
          ['200', 'двухсот / о двухстах', 'двумстам', 'двумястами'],
          ['500', 'пятисот / о пятистах', 'пятистам', 'пятьюстами']
        ],
        de: [
          ['2 / 3 / 4', 'двух / трёх / четырёх', 'двум / трём / четырём', 'двумя / тремя / четырьмя'],
          ['40 / 90 / 100', 'сорока / девяноста / ста', 'сорока / девяноста / ста', 'сорока / девяноста / ста'],
          ['50', 'пятидесяти', 'пятидесяти', 'пятьюдесятью'],
          ['200', 'двухсот / о двухстах', 'двумстам', 'двумястами'],
          ['500', 'пятисот / о пятистах', 'пятистам', 'пятьюстами']
        ]
      }
    }],
    examples: [
      { t: 'На форуме выступали эксперты из более чем [[пятидесят+и]] стран.', en: 'Experts from more than fifty countries spoke at the forum.', de: 'Auf dem Forum sprachen Experten aus über fünfzig Ländern.' },
      { t: 'Цех рассчитан на выпуск [[двухс+от]] деталей в смену.', en: 'The workshop is rated to produce two hundred parts per shift.', de: 'Die Werkhalle ist auf zweihundert Teile pro Schicht ausgelegt.' },
      { t: 'В отчёте нет [[сорок+а]] обязательных страниц.', en: 'Forty required pages are missing from the report.', de: 'Im Bericht fehlen vierzig vorgeschriebene Seiten.' },
      { t: 'Мы встретимся с [[тремя]] заказчиками до обеда.', en: 'We will meet with three clients before lunch.', de: 'Wir treffen uns vor dem Mittagessen mit drei Auftraggebern.' }
    ],
    pitfalls: [{
      title: { en: '*более ста метров, not *более сто метров', de: 'сорок+а / ста statt *сорок / *сто nach Präpositionen' },
      html: {
        en: '<span class="wrong">около сто людей</span> → <span class="right">+около ста челов+ек</span> (Genitive after около).',
        de: '<span class="wrong">около сто людей</span> → <span class="right">+около ста челов+ек</span>.'
      }
    }],
    drills: [
      { id: 'ru-g-w2-no-1', kind: 'choice', q: 'На конфер+енцию при+ехало более ___ гостей. (100)', options: ['ста', 'сто', 'стах'], answer: 0, explain: { en: 'более governs Genitive; Genitive of сто is ста.', de: 'более verlangt Genitiv → ста.' } },
      { id: 'ru-g-w2-no-2', kind: 'choice', q: 'Наш офис расположен в ___ м+етрах от вокзала. (200, Предл. п.)', options: ['двухст+ах', 'двухс+от', 'двухсто'], answer: 0, explain: { en: 'Prepositional of 200 (в … метрах) is двухстах.', de: 'Präpositiv von 200 lautet двухстах.' } },
      { id: 'ru-g-w2-no-3', kind: 'gap', q: 'Статья посвящена ___ лучшим про+ектам года. (50, Дат. п.)', answer: 'пятидесят+и', explain: { en: 'посвящена governs Dative → пятидесяти.', de: 'посвящена regiert Dativ → пятидесяти.' } },
      { id: 'ru-g-w2-no-4', kind: 'choice', q: 'Он владеет тремя языками, а коллега — только ___. (2, Твор. п.)', options: ['двумя', 'двум', 'двух'], answer: 0, explain: { en: 'владеть governs Instrumental → двумя.', de: 'владеть verlangt Instrumental → двумя.' } },
      { id: 'ru-g-w2-no-5', kind: 'choice', q: 'Около ___ лет назад здесь построили мост. (40)', options: ['сорок+а', 'сорок', 'сорок+ом'], answer: 0, explain: { en: 'около + Genitive of сорок → сорока.', de: 'около + Genitiv von сорок → сорока.' } },
      { id: 'ru-g-w2-no-6', kind: 'gap', q: 'До сд+ачи проекта осталось меньше ___ дней. (3, Род. п.)', answer: 'трёх', explain: { en: 'меньше + Genitive of три → трёх.', de: 'меньше + Genitiv von три → трёх.' } },
      { id: 'ru-g-w2-no-7', kind: 'choice', q: 'Договор согласов+али с ___ поставщик+ами. (4, Твор. п.)', options: ['четырьмя', 'четыр+емя', 'четырёх'], answer: 0, explain: { en: 'Instrumental of четыре is четырьмя.', de: 'Instrumental von четыре lautet четырьмя.' } },
      { id: 'ru-g-w2-no-8', kind: 'choice', q: 'Стоимость выросла с ___ до семисот евро. (500, Род. п.)', options: ['пятис+от', 'пятист+ах', 'пятьсот'], answer: 0, explain: { en: 'с … до governs Genitive → с пятисот.', de: 'с … до verlangt Genitiv → с пятисот.' } }
    ]
  });

  // 4. B2: Nuances of -ся verbs
  addTopic('reflexive_nuances_ru', 'Verbs in -ся: reciprocal, impersonal & passive · B2');
  GT.registerGrammar({
    id: 'reflexive_nuances_ru',
    level: 'B2',
    title: { en: 'Meanings of -ся beyond “oneself”: reciprocal, impersonal, passive', de: 'Verben auf -ся: reziprok, unpersönlich, passivisch' },
    summary: {
      en: 'договариваться (each other) / мне не спится (impersonal) / дверь открывается (middle/passive) — decoding -ся accurately at B2.',
      de: 'договариваться / мне не спится / дверь открывается — die Bedeutungsfunktionen von -ся richtig einordnen.'
    },
    explanation: {
      en: '<p>Only a fraction of Russian <b>-ся / -сь</b> verbs mean doing something to yourself. At B2 you encounter four big non-reflexive groups:</p>' +
        '<ul><li><b>Reciprocal (“each other”)</b>: <em>договор+иться с кем, встр+етиться с кем, посс+ориться, обним+аться, перед+аваться</em>.</li>' +
        '<li><b>Impersonal state (Dative experiencer + 3rd sg. / neuter past)</b>: <em>мне не сп+ится</em> (I can’t sleep), <em>ему х+очется</em>, <em>к+ажется</em>, <em>мне не верится</em>.</li>' +
        '<li><b>Intransitive change / middle voice</b> (no direct object allowed!): <em>откр+ыть дверь → дверь откр+ылась</em>; <em>нач+ать курс → курс началс+я</em>.</li>' +
        '<li><b>Active propensity / trait</b>: <em>соб+ака кус+ается</em> (bites), <em>стекло бьётся</em> (breaks easily).</li></ul>',
      de: '<p>Nur wenige Verben auf <b>-ся / -сь</b> sind echt reflexiv. Auf B2 überwiegen vier Funktionen:</p>' +
        '<ul><li><b>Reziprok („einander“)</b>: <em>договор+иться, встр+етиться, сс+ориться</em>.</li>' +
        '<li><b>Unpersönliches Empfinden (+ Dativ)</b>: <em>мне не сп+ится</em>, <em>ему х+очется</em>, <em>мне не верится</em>.</li>' +
        '<li><b>Intransitiver Vorgang</b> (ohne Akkusativobjekt!): <em>встреча начал+ась, дверь закр+ылась</em>.</li>' +
        '<li><b>Eigenschaft</b>: <em>соб+ака кус+ается, посуда бьётся</em>.</li></ul>'
    },
    tables: [{
      caption: { en: 'Five core roles of -ся verbs', de: 'Fünf Hauptfunktionen von -ся' },
      head: { en: ['Type', 'Example', 'Grammar tip'], de: ['Funktion', 'Beispiel', 'Grammatik-Tipp'] },
      deCols: [1],
      rows: {
        en: [
          ['true reflexive (“self”)', 'одев+аться, умыв+аться', 'replaces себя on physical routines'],
          ['reciprocal (“each other”)', 'встреч+аться, переп+исываться', 'often takes с + Instrumental'],
          ['middle / change of state', 'начин+аться, конч+аться, откр+ыться', 'never takes a direct Accusative object'],
          ['impersonal + Dative', 'мне не раб+отается, ей к+ажется', 'always 3rd sg. / neuter past -лось'],
          ['characteristic trait', 'крап+ива жжётся, дверь закрыв+ается плотно', 'habitual property of the subject']
        ],
        de: [
          ['echt reflexiv', 'одев+аться, умыв+аться', 'ersetzt себя'],
          ['reziprok („einander“)', 'встреч+аться, переп+исываться', 'oft mit с + Instrumental'],
          ['Vorgang ohne Objekt', 'начин+аться, откр+ыться', 'nie mit Akkusativobjekt'],
          ['unpersönlich + Dativ', 'мне не сп+ится, ей х+очется', 'immer 3. Sg. / -лось'],
          ['Eigenschaft', 'соб+ака кус+ается', 'typische Neigung']
        ]
      }
    }],
    examples: [
      { t: 'Мы [[договор+ились]] созвон+иться завтра после об+еда.', en: 'We agreed with each other to have a call tomorrow after lunch.', de: 'Wir haben vereinbart, morgen nach dem Mittagessen zu telefonieren.' },
      { t: 'П+осле крепкого к+офе мне до полуночи [[не сп+алось]].', en: 'After strong coffee I couldn’t fall asleep until midnight.', de: 'Nach dem starken Kaffee konnte ich bis Mitternacht nicht einschlafen.' },
      { t: 'Совещ+ание [[начал+ось]] ровно в д+есять.', en: 'The meeting began right at ten.', de: 'Die Sitzung begann pünktlich um zehn.' },
      { t: 'Будь осторожен: острая бум+ага [[р+ежется]]!', en: 'Be careful: sharp paper cuts!', de: 'Vorsicht: scharfes Papier schneidet!' }
    ],
    pitfalls: [{
      title: { en: 'Never put a direct object after a -ся verb!', de: 'Nie ein Akkusativobjekt nach einem -ся-Verb!' },
      html: {
        en: '<span class="wrong">Урок началс+я тест.</span> → <span class="right">Уч+итель н+ачал тест</span> (with object) or <span class="right">Тест началс+я</span> (no object).',
        de: '<span class="wrong">Урок началс+я тест.</span> → <span class="right">Тест началс+я.</span>'
      }
    }],
    drills: [
      { id: 'ru-g-w2-ref-1', kind: 'choice', q: 'Л+екция ___ ровно в полдень.', options: ['начал+ась', 'начал+а', 'н+ачал'], answer: 0, explain: { en: 'No direct object → intransitive начал+ась (fem. agrees with лекция).', de: 'Kein Akkusativobjekt → intransitives начал+ась.' } },
      { id: 'ru-g-w2-ref-2', kind: 'choice', q: '___ почему-то совсем не сп+ится сегодня.', options: ['Мне', 'Я', 'Мен+я'], answer: 0, explain: { en: 'Impersonal не спится takes Dative experiencer Мне.', de: 'Unpersönliches не спится steht mit Dativ Мне.' } },
      { id: 'ru-g-w2-ref-3', kind: 'gap', q: 'Студ+енты ___ новую тему вместе с преподав+ателем. (начин+ать — есть прямое дополнение!)', answer: 'начин+ают', explain: { en: 'Presence of object новую тему blocks -ся → transitive начинают.', de: 'Bei direktem Objekt новую тему kein -ся → начинают.' } },
      { id: 'ru-g-w2-ref-4', kind: 'choice', q: 'Мы регулярно ___ по поводу новых проектов.', options: ['переп+исываемся', 'переп+исываем нас', 'переп+исываются я'], answer: 0, explain: { en: 'Mutual correspondence (“write to each other”) → переписываемся.', de: 'Gegenseitiger Austausch → переписываемся.' } },
      { id: 'ru-g-w2-ref-5', kind: 'choice', q: 'Мне д+аже не ___ , что отпуск уже завтра!', options: ['в+ерится', 'в+ерит', 'в+ерюсь'], answer: 0, explain: { en: 'Impersonal phrase “I can hardly believe it” → мне не верится.', de: 'Unpersönliches „ich kann es kaum glauben“ → мне не верится.' } },
      { id: 'ru-g-w2-ref-6', kind: 'gap', q: 'Осторожнее с коробкой — внутри хр+упкое стекло, оно легко ___. (глагол бить в форме с -ся)', answer: 'бьётся', explain: { en: 'Fragile property (“breaks easily”) → бьётся.', de: 'Eigenschaft („geht leicht kaputt“) → бьётся.' } },
      { id: 'ru-g-w2-ref-7', kind: 'choice', q: 'Какое предложение верно?', options: ['Окн+о откр+ылось от ветра.', 'Окн+о откр+ылось форточку.', 'Окн+о откр+ыла от ветра.'], answer: 0, explain: { en: 'открылось is intransitive (“opened by itself”); needs no Accusative object.', de: 'открылось ist intransitiv ohne Akkusativobjekt.' } },
      { id: 'ru-g-w2-ref-8', kind: 'choice', q: 'П+осле шумного дня ей просто хот+елось тишин+ы — здесь глаг+ол:', options: ['безл+ичный (дат. п., суффикс -лось)', 'вза+имный', 'возвр+атный к себе'], answer: 0, explain: { en: 'ей хотелось (neuter -ось, Dative subject) is impersonal.', de: 'ей хотелось ist unpersönlich mit Dativ.' } }
    ]
  });

  // 5. B2: Adjective & noun government
  addTopic('adj_noun_government_ru', 'Adjective & noun government (доволен чем, склонен к…) · B2');
  GT.registerGrammar({
    id: 'adj_noun_government_ru',
    level: 'B2',
    title: { en: 'Adjective & noun government: доволен, уверен, склонен, интерес к', de: 'Rektion der Adjektive & Nomen: доволен, уверен, интерес к' },
    summary: {
      en: 'доволен результатом / уверен в успехе / склонен к риску / спрос на услуги — fixed cases and prepositions after key adjectives and nouns.',
      de: 'доволен результатом / уверен в успехе / склонен к риску / спрос на — feste Kasus und Präpositionen.'
    },
    explanation: {
      en: '<p>Just as verbs lock onto prepositions and cases, high-frequency B2 adjectives and nouns require fixed partners (often different from English/German!):</p>' +
        '<ul><li><b>Instrumental (no preposition)</b>: <em>дов+олен чем</em> (pleased with), <em>бог+ат чем</em> (rich in), <em>изв+естен чем</em> (famous for).</li>' +
        '<li><b>в + Prepositional</b>: <em>ув+ерен в чём</em> (sure of), <em>заинтерес+ован в чём</em> (interested in), <em>ув+еренность в чём</em>.</li>' +
        '<li><b>к + Dative</b>: <em>скл+онен к чему</em> (prone to), <em>гот+ов к чему</em> (ready for), <em>равнод+ушен к</em> (indifferent to), <em>интер+ес к</em> (interest in — NEVER *интер+ес в!).</li>' +
        '<li><b>на + Accusative</b>: <em>спрос на что</em> (demand for), <em>отв+ет на что</em> (reply to), <em>пр+аво на что</em> (right to), <em>пох+ож на кого/что</em> (similar to!).</li></ul>',
      de: '<p>Wichtige Adjektive und Nomen auf B2/C1 verlangen feste Präpositionen und Fälle (oft anders als im Deutschen!):</p>' +
        '<ul><li><b>Instrumental ohne Präposition</b>: <em>дов+олен чем</em> (zufrieden mit), <em>бог+ат чем</em> (reich an).</li>' +
        '<li><b>в + Präpositiv</b>: <em>ув+ерен в чём</em> (sicher in), <em>заинтерес+ован в чём</em> (interessiert an).</li>' +
        '<li><b>к + Dativ</b>: <em>скл+онен к чему</em>, <em>гот+ов к чему</em>, <em>интер+ес к чему</em> (Interesse an + Dativ, nie *в!).</li>' +
        '<li><b>на + Akkusativ</b>: <em>спрос на что</em> (Nachfrage nach), <em>пох+ож на кого</em> (ähnlich wie), <em>ре+акция на что</em>.</li></ul>'
    },
    tables: [{
      caption: { en: 'Essential B2/C1 adjective & noun pairings', de: 'Wichtige Rektionspaare auf B2/C1' },
      head: { en: ['Word', 'Prep. + Case', 'Example'], de: ['Wort', 'Präp. + Kasus', 'Beispiel'] },
      deCols: [0, 2],
      rows: {
        en: [
          ['дов+олен', 'Instr. (no prep.)', 'Клиент доволен качеством.'],
          ['ув+ерен / ув+еренность', 'в + Prep.', 'Мы уверены в успехе.'],
          ['интер+ес / спос+обность / гот+ов', 'к + Dat.', 'Большой интерес к курсу.'],
          ['спрос / пох+ож / ре+акция', 'на + Acc.', 'Растёт спрос на специалистов.'],
          ['благод+арен', 'за + Acc. (to whom: Dat.)', 'Я благодарен вам за помощь.']
        ],
        de: [
          ['дов+олен', 'Instrumental', 'Клиент доволен качеством.'],
          ['ув+ерен / ув+еренность', 'в + Präpositiv', 'Мы уверены в успехе.'],
          ['интер+ес / спос+обность / гот+ов', 'к + Dativ', 'Большой интерес к курсу.'],
          ['спрос / пох+ож / ре+акция', 'на + Akkusativ', 'Растёт спрос на специалистов.'],
          ['благод+арен', 'Dat. (wem) + за + Akk.', 'Я благодарен вам за помощь.']
        ]
      }
    }],
    examples: [
      { t: 'Заказчик п+олностью [[дов+олен результ+атом]] работы.', en: 'The client is completely pleased with the result of the work.', de: 'Der Auftraggeber ist mit dem Ergebnis völlig zufrieden.' },
      { t: 'К+аждый год растёт [[интер+ес к изуч+ению]] языков.', en: 'Every year interest in learning languages grows.', de: 'Jedes Jahr wächst das Interesse am Sprachenlernen.' },
      { t: 'В+аша сх+ема очень [[пох+ожа на]] наш прошлый план.', en: 'Your diagram is very similar to our previous plan.', de: 'Ihr Schema ähnelt unserem früheren Plan sehr.' },
      { t: 'В этом году высокий [[спрос на]] переводчиков.', en: 'There is high demand for translators this year.', de: 'Dieses Jahr gibt es eine hohe Nachfrage nach Übersetzern.' }
    ],
    pitfalls: [{
      title: { en: 'интер+ес к (Dat.), never *интер+ес в / *на', de: 'интер+ес к (+ Dativ), nicht *в / *на' },
      html: {
        en: '<span class="wrong">интерес в музыке</span> → <span class="right">интер+ес к м+узыке</span> (but adjective <em>заинтерес+ован в</em> uses <b>в + Prep.</b>!).',
        de: '<span class="wrong">интерес в музыке</span> → <span class="right">интер+ес к м+узыке</span> (aber <em>заинтересован в музыке</em>).'
      }
    }],
    drills: [
      { id: 'ru-g-w2-ag-1', kind: 'choice', q: 'Мы очень довольны ___ последнего тестирования.', options: ['итог+ами', 'о итог+ах', 'с итог+ами'], answer: 0, explain: { en: 'доволен governs bare Instrumental → итогами.', de: 'доволен verlangt präpositionslosen Instrumental → итогами.' } },
      { id: 'ru-g-w2-ag-2', kind: 'choice', q: 'Колл+еги проявили живой интерес ___ новому методу.', options: ['к', 'в', 'на'], answer: 0, explain: { en: 'интерес + к + Dative.', de: 'интерес + к + Dativ.' } },
      { id: 'ru-g-w2-ag-3', kind: 'gap', q: 'Этот город чем-то пох+ож ___ северную Венецию. (предлог)', answer: 'на', explain: { en: 'похож governs на + Accusative.', de: 'похож verlangt на + Akkusativ.' } },
      { id: 'ru-g-w2-ag-4', kind: 'choice', q: 'Я вам искренне благодарен ___ быструю поддержку!', options: ['за', 'к', 'на'], answer: 0, explain: { en: 'благодарен кому (Dat.) за что (Acc.) → за поддержку.', de: 'благодарен (+ Dat.) за (+ Akk.) → за поддержку.' } },
      { id: 'ru-g-w2-ag-5', kind: 'choice', q: 'Сег+одня особенно высокий спрос ___ инженеров данных.', options: ['на', 'в', 'к'], answer: 0, explain: { en: 'спрос всегда идёт с на + Accusative.', de: 'спрос steht immer mit на + Akkusativ.' } },
      { id: 'ru-g-w2-ag-6', kind: 'gap', q: 'Партнёры крайне заинтересованы ___ долгосрочном сотрудничестве. (предлог)', answer: 'в', explain: { en: 'заинтересован governs в + Prepositional.', de: 'заинтересован verlangt в + Präpositiv.' } },
      { id: 'ru-g-w2-ag-7', kind: 'choice', q: 'Команда п+олностью гот+ова ___ завтрашней проверке.', options: ['к', 'в', 'о'], answer: 0, explain: { en: 'готов + к + Dative.', de: 'готов + к + Dativ.' } },
      { id: 'ru-g-w2-ag-8', kind: 'choice', q: 'Этот регион богат ___ минеральными источниками — правильно ли?', options: ['Нет, нужно: богат минеральными источниками (без «на»).', 'Да, правильно.', 'Нужно: богат к источникам.'], answer: 0, explain: { en: 'богат governs bare Instrumental without a preposition.', de: 'богат steht ohne Präposition im Instrumental.' } }
    ]
  });
})();
