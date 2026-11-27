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
