/* RUSSIAN GRAMMAR · A2–B1 lessons: present conjugation, past tense, imperative, numerals + nouns, relative который.
 * Explanations en + de inline (Russian can be learnt from English or German); drill sentences in Russian. "+" marks stress. */

/* ---------- A2 · Present tense: two conjugations ---------- */
GT.registerGrammar({
  id: 'conjugation',
  level: 'A2',
  title: { en: 'Present tense: the two conjugations', de: 'Präsens: die zwei Konjugationen' },
  summary: { en: 'Verbs in -ешь / -ет (1st) and -ишь / -ит (2nd): чита́ю, чита́ешь — говорю́, говори́шь.', de: 'Verben auf -ешь / -ет (1.) und -ишь / -ит (2.): чита́ю, чита́ешь — говорю́, говори́шь.' },
  explanation: {
    en: '<p>Russian verbs change their ending for each person. There are two patterns:</p>' +
      '<ul><li><b>1st conjugation</b> (most verbs in -ать, -ять, -овать): endings <b>-ю/-у, -ешь, -ет, -ем, -ете, -ют/-ут</b>: <em>чит+аю, чит+аешь, чит+ает</em>.</li>' +
      '<li><b>2nd conjugation</b> (most verbs in -ить, plus a few in -еть/-ать like смотр+еть, сл+ышать): <b>-ю/-у, -ишь, -ит, -им, -ите, -ят/-ат</b>: <em>говор+ю, говор+ишь, говор+ит</em>.</li></ul>' +
      '<p>Verbs in <b>-овать</b> swap -ова- for -у-: <em>рисов+ать → рис+ую, рис+уешь</em>. In the 2nd conjugation the <b>я</b>-form often changes the consonant: <em>ход+ить → хож+у, люб+ить → любл+ю, сид+еть → сиж+у</em> — only in the я-form.</p>' +
      '<p>After ж, ш, ч, щ write <b>-у / -ат</b>, not -ю / -ят: <em>слыш+у, сл+ышат</em>.</p>',
    de: '<p>Russische Verben ändern die Endung für jede Person. Es gibt zwei Muster:</p>' +
      '<ul><li><b>1. Konjugation</b> (die meisten Verben auf -ать, -ять, -овать): Endungen <b>-ю/-у, -ешь, -ет, -ем, -ете, -ют/-ут</b>: <em>чит+аю, чит+аешь, чит+ает</em>.</li>' +
      '<li><b>2. Konjugation</b> (die meisten Verben auf -ить, dazu einige auf -еть/-ать wie смотр+еть, сл+ышать): <b>-ю/-у, -ишь, -ит, -им, -ите, -ят/-ат</b>: <em>говор+ю, говор+ишь, говор+ит</em>.</li></ul>' +
      '<p>Verben auf <b>-овать</b> tauschen -ова- gegen -у-: <em>рисов+ать → рис+ую</em>. In der 2. Konjugation ändert die <b>я</b>-Form oft den Konsonanten: <em>ход+ить → хож+у, люб+ить → любл+ю</em> — nur in der я-Form.</p>' +
      '<p>Nach ж, ш, ч, щ schreibt man <b>-у / -ат</b>: <em>слыш+у, сл+ышат</em>.</p>'
  },
  tables: [
    { caption: { en: 'Endings', de: 'Endungen' },
      head: { en: ['', 'чита́ть (1st)', 'говори́ть (2nd)', 'рисова́ть (1st, -ова-)'], de: ['', 'чита́ть (1.)', 'говори́ть (2.)', 'рисова́ть (1., -ова-)'] },
      deCols: [1, 2, 3],
      rows: [['я', 'чит+аю', 'говор+ю', 'рис+ую'], ['ты', 'чит+аешь', 'говор+ишь', 'рис+уешь'], ['он / он+а', 'чит+ает', 'говор+ит', 'рис+ует'], ['мы', 'чит+аем', 'говор+им', 'рис+уем'], ['вы', 'чит+аете', 'говор+ите', 'рис+уете'], ['он+и', 'чит+ают', 'говор+ят', 'рис+уют']] }
  ],
  examples: [
    { t: 'Я [[чит+аю]] нов+ости к+аждое +утро.', en: 'I read the news every morning.', de: 'Ich lese jeden Morgen die Nachrichten.' },
    { t: 'Ты [[говор+ишь]] по-нем+ецки?', en: 'Do you speak German?', de: 'Sprichst du Deutsch?' },
    { t: 'Он+и [[раб+отают]] в одн+ой комп+ании.', en: 'They work at the same company.', de: 'Sie arbeiten in derselben Firma.' },
    { t: 'Я ч+асто [[хож+у]] пешк+ом.', en: 'I often walk.', de: 'Ich gehe oft zu Fuß.' },
    { t: 'Мы [[рис+уем]] сх+ему на д+оске.', en: 'We’re drawing a diagram on the board.', de: 'Wir zeichnen ein Schema an die Tafel.' }
  ],
  pitfalls: [
    { title: { en: 'The я-form change stays in the я-form', de: 'Der Konsonantenwechsel bleibt in der я-Form' },
      html: { en: '<em>люб+ить</em>: <span class="right">я любл+ю</span>, but <span class="right">ты л+юбишь</span> — not <span class="wrong">ты любл+ишь</span>.', de: '<em>люб+ить</em>: <span class="right">я любл+ю</span>, aber <span class="right">ты л+юбишь</span> — nicht <span class="wrong">ты любл+ишь</span>.' } },
    { title: { en: '-овать loses -ова-', de: '-овать verliert -ова-' },
      html: { en: '<span class="wrong">я рисов+аю</span> → <span class="right">я рис+ую</span>; <span class="wrong">я организов+аю</span> → <span class="right">я организ+ую</span>.', de: '<span class="wrong">я рисов+аю</span> → <span class="right">я рис+ую</span>; <span class="wrong">я организов+аю</span> → <span class="right">я организ+ую</span>.' } }
  ],
  drills: [
    { id: 'ru-g-conj-1', kind: 'choice', q: 'Ты ___ +эту п+есню?', options: ['зн+аешь', 'зн+аишь', 'зн+ает'], answer: 0, explain: { en: 'знать — 1st conjugation: ты зн+аешь.', de: 'знать — 1. Konjugation: ты зн+аешь.' } },
    { id: 'ru-g-conj-2', kind: 'choice', q: 'Он+и ___ +очень б+ыстро.', options: ['говор+ят', 'говор+ют', 'говор+ит'], answer: 0, explain: { en: '2nd conjugation, они → -ят.', de: '2. Konjugation, они → -ят.' } },
    { id: 'ru-g-conj-3', kind: 'gap', q: 'Я ___ кн+иги по-р+усски. (люб+ить)', answer: 'любл+ю', explain: { en: 'б → бл in the я-form: любл+ю.', de: 'б → бл in der я-Form: любл+ю.' } },
    { id: 'ru-g-conj-4', kind: 'gap', q: 'Мы ___ встр+ечу на п+ятницу. (организов+ать)', answer: 'организ+уем', explain: { en: '-ова- → -у-: организ+уем.', de: '-ова- → -у-: организ+уем.' } },
    { id: 'ru-g-conj-5', kind: 'choice', q: 'Вы ___ м+узыку?', options: ['сл+ышите', 'сл+ышете', 'сл+ышаете'], answer: 0, explain: { en: 'сл+ышать is 2nd conjugation: вы сл+ышите.', de: 'сл+ышать gehört zur 2. Konjugation: вы сл+ышите.' } }
  ]
});

/* ---------- A2 · Past tense ---------- */
GT.registerGrammar({
  id: 'past',
  level: 'A2',
  title: { en: 'Past tense: -л, -ла, -ло, -ли', de: 'Vergangenheit: -л, -ла, -ло, -ли' },
  summary: { en: 'The past agrees with gender and number, not with person: я был / я был+а.', de: 'Die Vergangenheit richtet sich nach Genus und Numerus, nicht nach der Person: я был / я был+а.' },
  explanation: {
    en: '<p>The Russian past is easy: take the infinitive, drop <b>-ть</b>, add <b>-л</b> (masculine), <b>-ла</b> (feminine), <b>-ло</b> (neuter), <b>-ли</b> (plural). It shows <b>gender</b>, not person — so a woman says <em>я раб+отала</em>, a man <em>я раб+отал</em>.</p>' +
      '<p><b>вы</b> always takes the plural, even when you speak politely to one person: <em>Вы б+ыли в Москв+е?</em></p>' +
      '<p>Irregular: <em>идт+и → шёл, шл+а, шл+и; есть → ел; мочь → мог, могл+а; нест+и → нёс, несл+а</em>. Stress often moves to the ending in the feminine: <em>был — был+а, жил — жил+а, дал — дал+а</em>.</p>' +
      '<p>Choose imperfective or perfective as in the aspect lesson: <em>чит+ала</em> (was reading) — <em>прочит+ала</em> (read through).</p>',
    de: '<p>Die russische Vergangenheit ist einfach: Infinitiv ohne <b>-ть</b> + <b>-л</b> (maskulin), <b>-ла</b> (feminin), <b>-ло</b> (neutral), <b>-ли</b> (Plural). Sie zeigt das <b>Genus</b>, nicht die Person — eine Frau sagt <em>я раб+отала</em>, ein Mann <em>я раб+отал</em>.</p>' +
      '<p><b>вы</b> steht immer im Plural, auch beim Siezen einer Person: <em>Вы б+ыли в Москв+е?</em></p>' +
      '<p>Unregelmäßig: <em>идт+и → шёл, шл+а, шл+и; есть → ел; мочь → мог, могл+а; нест+и → нёс, несл+а</em>. Im Femininum wandert die Betonung oft auf die Endung: <em>был — был+а, жил — жил+а</em>.</p>' +
      '<p>Den Aspekt wählt man wie in der Aspekt-Lektion: <em>чит+ала</em> (las gerade) — <em>прочит+ала</em> (hat zu Ende gelesen).</p>'
  },
  tables: [
    { caption: { en: 'Forms', de: 'Formen' },
      head: { en: ['Infinitive', 'он', 'она', 'оно', 'они'], de: ['Infinitiv', 'он', 'она', 'оно', 'они'] },
      deCols: [0, 1, 2, 3, 4],
      rows: [['раб+отать', 'раб+отал', 'раб+отала', 'раб+отало', 'раб+отали'], ['быть', 'был', 'был+а', 'б+ыло', 'б+ыли'], ['идт+и', 'шёл', 'шл+а', 'шл+о', 'шл+и'], ['мочь', 'мог', 'могл+а', 'могл+о', 'могл+и'], ['есть', 'ел', '+ела', '+ело', '+ели']] }
  ],
  examples: [
    { t: 'Вчер+а я [[раб+отала]] до в+осьми.', en: 'Yesterday I (f.) worked until eight.', de: 'Gestern habe ich (w.) bis acht gearbeitet.' },
    { t: 'Где ты [[был]] в+ечером?', en: 'Where were you (m.) in the evening?', de: 'Wo warst du (m.) am Abend?' },
    { t: 'Мы [[шл+и]] д+олго, но не уст+али.', en: 'We walked for a long time but weren’t tired.', de: 'Wir gingen lange, waren aber nicht müde.' },
    { t: 'Он+а не [[могл+а]] прийт+и.', en: 'She couldn’t come.', de: 'Sie konnte nicht kommen.' },
    { t: 'Вы уж+е [[б+ыли]] у врач+а?', en: 'Have you already been to the doctor?', de: 'Waren Sie schon beim Arzt?' }
  ],
  pitfalls: [
    { title: { en: 'Agree with the speaker’s gender', de: 'Nach dem Geschlecht der Person' },
      html: { en: 'A woman: <span class="right">Я уст+ала</span>, not <span class="wrong">Я уст+ал</span>. The verb follows the person, not the word я.', de: 'Eine Frau: <span class="right">Я уст+ала</span>, nicht <span class="wrong">Я уст+ал</span>.' } },
    { title: { en: 'вы → plural', de: 'вы → Plural' },
      html: { en: '<span class="wrong">Вы был</span> → <span class="right">Вы б+ыли</span>, even talking to one person.', de: '<span class="wrong">Вы был</span> → <span class="right">Вы б+ыли</span>, auch beim Siezen.' } }
  ],
  drills: [
    { id: 'ru-g-past-1', kind: 'choice', q: '+Анна вчер+а ___ в кин+о.', options: ['был+а', 'был', 'б+ыли'], answer: 0, explain: { en: 'Анна is feminine → был+а.', de: 'Анна ist feminin → был+а.' } },
    { id: 'ru-g-past-2', kind: 'gap', q: 'Он ___ дом+ой п+оздно. (идт+и)', answer: 'шёл', explain: { en: 'идти → шёл (irregular).', de: 'идти → шёл (unregelmäßig).' } },
    { id: 'ru-g-past-3', kind: 'choice', q: 'Вы ___ м+ой отчёт?', options: ['чит+али', 'чит+ал', 'чит+ала'], answer: 0, explain: { en: 'вы always takes -ли.', de: 'вы verlangt immer -ли.' } },
    { id: 'ru-g-past-4', kind: 'gap', q: 'Мы не ___ найт+и адрес. (мочь)', answer: 'могл+и', explain: { en: 'мочь → могл+и.', de: 'мочь → могл+и.' } },
    { id: 'ru-g-past-5', kind: 'choice', q: 'Окн+о ___ откр+ыто всю ночь.', options: ['б+ыло', 'был', 'был+а'], answer: 0, explain: { en: 'окно is neuter → б+ыло.', de: 'окно ist neutral → б+ыло.' } }
  ]
});

/* ---------- B1 · Imperative ---------- */
GT.registerGrammar({
  id: 'imperative',
  level: 'B1',
  title: { en: 'Imperative: читай!, скажите!, давайте…', de: 'Imperativ: читай!, скажите!, давайте…' },
  summary: { en: 'Forming commands and requests, and which aspect to use: Скажите, пожалуйста… / Не говорите!', de: 'Bitten und Aufforderungen bilden und den richtigen Aspekt wählen: Скажите, пожалуйста… / Не говорите!' },
  explanation: {
    en: '<p>Take the <b>они</b>-form, drop the ending: <em>чит+ают → чита-</em>. Then:</p>' +
      '<ul><li>stem ends in a vowel → <b>-й</b>: <em>чит+ай!</em></li>' +
      '<li>stressed ending in the я-form or two consonants → <b>-и</b>: <em>говор+и! пиш+и! п+омни!</em></li>' +
      '<li>stem stress in the я-form → <b>-ь</b>: <em>вст+ань! б+удь! отв+еть!</em></li></ul>' +
      '<p>Add <b>-те</b> for вы: <em>чит+айте, скаж+ите</em>. <b>Давай(те) + infinitive / мы-form</b> = “let’s”: <em>Дав+айте начнём!</em></p>' +
      '<p><b>Aspect:</b> a single concrete request → <b>perfective</b> (<em>Закр+ойте дверь, пож+алуйста</em>); an invitation, general advice or “go ahead” → <b>imperfective</b> (<em>Проход+ите, сад+итесь!</em>). With <b>не</b> use the imperfective: <em>Не закрыв+айте!</em> Negative perfective is a warning: <em>Не упад+и!</em> (Don’t fall!)</p>',
    de: '<p>Man nimmt die <b>они</b>-Form ohne Endung: <em>чит+ают → чита-</em>. Dann:</p>' +
      '<ul><li>Stamm auf Vokal → <b>-й</b>: <em>чит+ай!</em></li>' +
      '<li>betonte Endung in der я-Form oder zwei Konsonanten → <b>-и</b>: <em>говор+и! пиш+и! п+омни!</em></li>' +
      '<li>Stammbetonung in der я-Form → <b>-ь</b>: <em>вст+ань! б+удь! отв+еть!</em></li></ul>' +
      '<p>Für вы kommt <b>-те</b> dazu: <em>чит+айте, скаж+ите</em>. <b>Давай(те) + Infinitiv / мы-Form</b> = „lass(t) uns“: <em>Дав+айте начнём!</em></p>' +
      '<p><b>Aspekt:</b> eine einmalige konkrete Bitte → <b>perfektiv</b> (<em>Закр+ойте дверь, пож+алуйста</em>); Einladung, allgemeiner Rat, „bitte sehr“ → <b>imperfektiv</b> (<em>Проход+ите, сад+итесь!</em>). Mit <b>не</b> steht der imperfektive Aspekt: <em>Не закрыв+айте!</em> Verneinter perfektiver Imperativ ist eine Warnung: <em>Не упад+и!</em></p>'
  },
  tables: [
    { caption: { en: 'Formation', de: 'Bildung' },
      head: { en: ['Infinitive', 'они', 'ты', 'вы'], de: ['Infinitiv', 'они', 'ты', 'вы'] },
      deCols: [0, 1, 2, 3],
      rows: [['чит+ать', 'чит+ают', 'чит+ай', 'чит+айте'], ['сказ+ать', 'ск+ажут', 'скаж+и', 'скаж+ите'], ['вст+ать', 'вст+анут', 'вст+ань', 'вст+аньте'], ['быть', 'б+удут', 'будь', 'б+удьте'], ['дать', 'дад+ут', 'дай', 'д+айте']] }
  ],
  examples: [
    { t: '[[Скаж+ите]], пож+алуйста, где вокз+ал?', en: 'Could you tell me where the station is, please?', de: 'Sagen Sie bitte, wo ist der Bahnhof?' },
    { t: '[[Проход+ите]], [[сад+итесь]]!', en: 'Come in, sit down!', de: 'Kommen Sie herein, setzen Sie sich!' },
    { t: '[[Не забыв+ай]] пар+оль!', en: 'Don’t forget the password!', de: 'Vergiss das Passwort nicht!' },
    { t: '[[Дав+ай]] встр+етимся з+автра.', en: 'Let’s meet tomorrow.', de: 'Lass uns morgen treffen.' },
    { t: '[[Позвон+и]] мне, когд+а приед+ешь.', en: 'Call me when you arrive.', de: 'Ruf mich an, wenn du ankommst.' }
  ],
  pitfalls: [
    { title: { en: 'Negation → imperfective', de: 'Verneinung → imperfektiv' },
      html: { en: '<span class="wrong">Не скаж+и ем+у!</span> → <span class="right">Не говор+и ем+у!</span> (Don’t tell him!)', de: '<span class="wrong">Не скаж+и ем+у!</span> → <span class="right">Не говор+и ем+у!</span> (Sag es ihm nicht!)' } },
    { title: { en: 'Polite ≠ imperfective only', de: 'Höflich ist nicht nur imperfektiv' },
      html: { en: 'A concrete request with <em>пожалуйста</em> is normally perfective: <span class="right">Откр+ойте окн+о, пож+алуйста.</span> The imperfective can sound like urging: <span class="right">Открыв+айте!</span> = “Go on, open it!”', de: 'Eine konkrete Bitte mit <em>пожалуйста</em> ist meist perfektiv: <span class="right">Откр+ойте окн+о, пож+алуйста.</span> Imperfektiv kann drängend klingen: <span class="right">Открыв+айте!</span>' } }
  ],
  drills: [
    { id: 'ru-g-imp-1', kind: 'choice', q: { en: '___, пож+алуйста, дв+ерь. (one request)', de: '___, пож+алуйста, дв+ерь. (einmalige Bitte)' }, options: ['Закр+ойте', 'Закрыв+айте', 'Закр+оете'], answer: 0, explain: { en: 'A single concrete request → perfective.', de: 'Einmalige konkrete Bitte → perfektiv.' } },
    { id: 'ru-g-imp-2', kind: 'choice', q: 'Не ___ +этот файл!', options: ['удал+яй', 'удал+и', 'удал+ишь'], answer: 0, explain: { en: 'не + imperfective imperative.', de: 'не + imperfektiver Imperativ.' } },
    { id: 'ru-g-imp-3', kind: 'gap', q: '___ мне +адрес, пож+алуйста. (дать, ты)', answer: 'Дай', explain: { en: 'дать → дай.', de: 'дать → дай.' } },
    { id: 'ru-g-imp-4', kind: 'gap', q: '___ здор+овы! (быть, вы)', answer: 'Б+удьте', explain: { en: 'быть → будь / б+удьте.', de: 'быть → будь / б+удьте.' } },
    { id: 'ru-g-imp-5', kind: 'choice', q: '___ поужин+аем вм+есте!', options: ['Дав+ай', 'Дай', 'Дав+ать'], answer: 0, explain: { en: '“Let’s” → дав+ай + мы-form.', de: '„Lass uns“ → дав+ай + мы-Form.' } }
  ]
});

/* ---------- B1 · Numerals + nouns ---------- */
GT.registerGrammar({
  id: 'numerals',
  level: 'B1',
  title: { en: 'Numbers + nouns: 1 час, 2 часа, 5 часов', de: 'Zahlen + Nomen: 1 час, 2 часа, 5 часов' },
  summary: { en: 'After 1 — nominative; 2, 3, 4 — genitive singular; 5–20 and “many” — genitive plural.', de: 'Nach 1 — Nominativ; 2, 3, 4 — Genitiv Singular; 5–20 und „viele“ — Genitiv Plural.' },
  explanation: {
    en: '<p>The noun’s form depends on the <b>last word</b> of the number:</p>' +
      '<ul><li><b>1</b> (21, 31, 101 …) → nominative singular: <em>одн+а мин+ута, дв+адцать од+ин год</em></li>' +
      '<li><b>2, 3, 4</b> (22, 33, 104 …) → <b>genitive singular</b>: <em>две мин+уты, три г+ода, чет+ыре час+а</em></li>' +
      '<li><b>5–20</b>, 25, 30, 100 … and <b>мн+ого, м+ало, ск+олько, неск+олько</b> → <b>genitive plural</b>: <em>пять мин+ут, двен+адцать лет, мн+ого люд+ей</em></li></ul>' +
      '<p>11–14 always take the genitive plural: <em>од+иннадцать час+ов</em> (not “one”!). <b>Один / два</b> agree in gender: <em>од+ин стол, одн+а кн+ига, одн+о окн+о; два стол+а, две кн+иги</em>.</p>' +
      '<p>Irregular: <em>год → лет</em> (5 лет), <em>челов+ек → челов+ек</em> (5 челов+ек), <em>раз → раз</em>.</p>',
    de: '<p>Die Form des Nomens hängt vom <b>letzten Wort</b> der Zahl ab:</p>' +
      '<ul><li><b>1</b> (21, 31, 101 …) → Nominativ Singular: <em>одн+а мин+ута, дв+адцать од+ин год</em></li>' +
      '<li><b>2, 3, 4</b> (22, 33, 104 …) → <b>Genitiv Singular</b>: <em>две мин+уты, три г+ода, чет+ыре час+а</em></li>' +
      '<li><b>5–20</b>, 25, 30, 100 … und <b>мн+ого, м+ало, ск+олько, неск+олько</b> → <b>Genitiv Plural</b>: <em>пять мин+ут, двен+адцать лет, мн+ого люд+ей</em></li></ul>' +
      '<p>11–14 haben immer Genitiv Plural: <em>од+иннадцать час+ов</em>. <b>Один / два</b> richten sich nach dem Genus: <em>од+ин стол, одн+а кн+ига; два стол+а, две кн+иги</em>.</p>' +
      '<p>Unregelmäßig: <em>год → лет</em> (5 лет), <em>челов+ек → челов+ек</em> (5 челов+ек), <em>раз → раз</em>.</p>'
  },
  tables: [
    { caption: { en: 'Three forms', de: 'Drei Formen' },
      head: { en: ['', '1 / 21', '2–4 / 22–24', '5–20 / 25–30, many'], de: ['', '1 / 21', '2–4 / 22–24', '5–20 / 25–30, viele'] },
      deCols: [1, 2, 3],
      rows: [['час', 'од+ин час', 'два час+а', 'пять час+ов'], ['мин+ута', 'одн+а мин+ута', 'две мин+уты', 'пять мин+ут'], ['год', 'од+ин год', 'два г+ода', 'пять лет'], ['рубль', 'од+ин рубль', 'два рубл+я', 'пять рубл+ей'], ['челов+ек', 'од+ин челов+ек', 'два челов+ека', 'пять челов+ек']] }
  ],
  examples: [
    { t: 'Я жд+у уж+е [[двадцать мин+ут]].', en: 'I’ve been waiting for twenty minutes already.', de: 'Ich warte schon zwanzig Minuten.' },
    { t: 'Ем+у [[тр+идцать од+ин год]].', en: 'He is thirty-one.', de: 'Er ist einunddreißig.' },
    { t: 'Мы ж+или там [[три г+ода]].', en: 'We lived there for three years.', de: 'Wir haben dort drei Jahre gewohnt.' },
    { t: 'На встр+ече б+ыло [[мн+ого люд+ей]].', en: 'There were lots of people at the meeting.', de: 'Beim Treffen waren viele Leute.' },
    { t: 'Бил+ет ст+оит [[пятьс+от рубл+ей]].', en: 'The ticket costs five hundred roubles.', de: 'Das Ticket kostet fünfhundert Rubel.' }
  ],
  pitfalls: [
    { title: { en: '11 ≠ 1', de: '11 ≠ 1' },
      html: { en: '<span class="wrong">од+иннадцать час</span> → <span class="right">од+иннадцать час+ов</span>. Only the teens 11–14 break the last-digit rule.', de: '<span class="wrong">од+иннадцать час</span> → <span class="right">од+иннадцать час+ов</span>. Nur 11–14 brechen die Regel der letzten Ziffer.' } },
    { title: { en: '5 years = пять лет', de: '5 Jahre = пять лет' },
      html: { en: '<span class="wrong">пять год+ов</span> → <span class="right">пять лет</span>.', de: '<span class="wrong">пять год+ов</span> → <span class="right">пять лет</span>.' } }
  ],
  drills: [
    { id: 'ru-g-num-1', kind: 'choice', q: 'Ур+ок дл+ится два ___.', options: ['час+а', 'час', 'час+ов'], answer: 0, explain: { en: '2 → genitive singular.', de: '2 → Genitiv Singular.' } },
    { id: 'ru-g-num-2', kind: 'choice', q: 'Мне дв+адцать пять ___.', options: ['лет', 'год', 'г+ода'], answer: 0, explain: { en: 'Ends in 5 → лет.', de: 'Endet auf 5 → лет.' } },
    { id: 'ru-g-num-3', kind: 'gap', q: 'В гр+уппе од+иннадцать ___. (студ+ент)', answer: 'студ+ентов', explain: { en: '11–14 → genitive plural.', de: '11–14 → Genitiv Plural.' } },
    { id: 'ru-g-num-4', kind: 'choice', q: 'У мен+я ___ сестр+а.', options: ['одн+а', 'од+ин', 'одн+о'], answer: 0, explain: { en: 'сестра is feminine → одн+а.', de: 'сестра ist feminin → одн+а.' } },
    { id: 'ru-g-num-5', kind: 'gap', q: 'Подожд+и три ___. (мин+ута)', answer: 'мин+уты', explain: { en: '3 → genitive singular: мин+уты.', de: '3 → Genitiv Singular: мин+уты.' } }
  ]
});

/* ---------- B1 · Relative clauses with который ---------- */
GT.registerGrammar({
  id: 'kotoryj',
  level: 'B1',
  title: { en: 'Relative clauses with кото́рый', de: 'Relativsätze mit кото́рый' },
  summary: { en: 'который takes gender and number from the noun, but its case from its role in the clause.', de: 'который übernimmt Genus und Numerus vom Nomen, den Kasus aber aus seiner Rolle im Nebensatz.' },
  explanation: {
    en: '<p><b>кот+орый</b> = who / which / that. It works exactly like German <em>der / die / das</em> as a relative pronoun:</p>' +
      '<ul><li><b>Gender and number</b> come from the noun it refers to: <em>друг, кот+орый…; подр+уга, кот+орая…; друзь+я, кот+орые…</em></li>' +
      '<li><b>Case</b> comes from its job inside the relative clause: <em>Друг, <b>кот+орому</b> я позвон+ил</em> (позвонить кому? → dative). <em>Кн+ига, <b>о кот+орой</b> я говор+ил</em> (о чём? → prepositional).</li></ul>' +
      '<p>A comma always comes before который. It declines like an adjective (кот+орого, кот+орому, кот+орым, о кот+ором…).</p>' +
      '<p>For “whose” use <b>чей</b> or the genitive <b>кот+орого / кот+орой</b> after the noun: <em>сос+ед, маш+ина кот+орого…</em> (the neighbour whose car…).</p>',
    de: '<p><b>кот+орый</b> = der / die / das (Relativpronomen). Es funktioniert genau wie im Deutschen:</p>' +
      '<ul><li><b>Genus und Numerus</b> vom Bezugswort: <em>друг, кот+орый…; подр+уга, кот+орая…; друзь+я, кот+орые…</em></li>' +
      '<li><b>Kasus</b> aus der Rolle im Nebensatz: <em>Друг, <b>кот+орому</b> я позвон+ил</em> (dem ich angerufen habe → Dativ). <em>Кн+ига, <b>о кот+орой</b> я говор+ил</em> (über das ich sprach → Präpositiv).</li></ul>' +
      '<p>Vor который steht immer ein Komma. Es wird wie ein Adjektiv dekliniert (кот+орого, кот+орому, кот+орым, о кот+ором…).</p>' +
      '<p>„dessen / deren“ = Genitiv <b>кот+орого / кот+орой</b> hinter dem Nomen: <em>сос+ед, маш+ина кот+орого…</em> (der Nachbar, dessen Auto…).</p>'
  },
  tables: [
    { caption: { en: 'Key forms', de: 'Wichtige Formen' },
      head: { en: ['Case', 'm. / n.', 'f.', 'pl.'], de: ['Kasus', 'm. / n.', 'f.', 'Pl.'] },
      deCols: [1, 2, 3],
      rows: { en: [['Nom.', 'кот+орый / кот+орое', 'кот+орая', 'кот+орые'], ['Acc.', 'кот+орый / кот+орого (anim.)', 'кот+орую', 'кот+орые / кот+орых'], ['Gen.', 'кот+орого', 'кот+орой', 'кот+орых'], ['Dat.', 'кот+орому', 'кот+орой', 'кот+орым'], ['Instr.', 'кот+орым', 'кот+орой', 'кот+орыми'], ['Prep.', 'о кот+ором', 'о кот+орой', 'о кот+орых']],
              de: [['Nom.', 'кот+орый / кот+орое', 'кот+орая', 'кот+орые'], ['Akk.', 'кот+орый / кот+орого (belebt)', 'кот+орую', 'кот+орые / кот+орых'], ['Gen.', 'кот+орого', 'кот+орой', 'кот+орых'], ['Dat.', 'кот+орому', 'кот+орой', 'кот+орым'], ['Instr.', 'кот+орым', 'кот+орой', 'кот+орыми'], ['Präp.', 'о кот+ором', 'о кот+орой', 'о кот+орых']] } }
  ],
  examples: [
    { t: 'Это колл+ега, [[кот+орый]] мне помог+ал.', en: 'This is the colleague who helped me.', de: 'Das ist der Kollege, der mir geholfen hat.' },
    { t: 'Кв+артира, [[кот+орую]] мы сним+аем, +очень св+етлая.', en: 'The flat we rent is very bright.', de: 'Die Wohnung, die wir mieten, ist sehr hell.' },
    { t: 'Друг, [[кот+орому]] я позвон+ил, не отв+етил.', en: 'The friend I called didn’t answer.', de: 'Der Freund, den ich angerufen habe, ging nicht ran.' },
    { t: 'Это фильм, [[о кот+ором]] все говор+ят.', en: 'This is the film everyone is talking about.', de: 'Das ist der Film, über den alle reden.' },
    { t: 'Л+юди, [[с кот+орыми]] я раб+отаю, +очень дружел+юбные.', en: 'The people I work with are very friendly.', de: 'Die Leute, mit denen ich arbeite, sind sehr freundlich.' }
  ],
  pitfalls: [
    { title: { en: 'Case from the clause, not the noun', de: 'Kasus aus dem Nebensatz' },
      html: { en: '<span class="wrong">Друг, кот+орый я встр+етил</span> → <span class="right">Друг, кот+орого я встр+етил</span> (встретить кого? — animate accusative).', de: '<span class="wrong">Друг, кот+орый я встр+етил</span> → <span class="right">Друг, кот+орого я встр+етил</span> (встретить кого? — belebter Akkusativ).' } },
    { title: { en: 'No dropping', de: 'Nicht weglassen' },
      html: { en: 'English can drop “that” (<em>the film I saw</em>); Russian can’t: <span class="right">фильм, кот+орый я в+идел</span>.', de: 'Im Russischen wie im Deutschen ist das Relativpronomen Pflicht: <span class="right">фильм, кот+орый я в+идел</span>.' } }
  ],
  drills: [
    { id: 'ru-g-kot-1', kind: 'choice', q: 'Это д+евушка, ___ раб+отает в б+анке.', options: ['кот+орая', 'кот+орый', 'кот+орую'], answer: 0, explain: { en: 'Feminine subject → кот+орая.', de: 'Feminines Subjekt → кот+орая.' } },
    { id: 'ru-g-kot-2', kind: 'choice', q: 'Кн+ига, ___ ты мне дал, +очень интер+есная.', options: ['кот+орую', 'кот+орая', 'кот+орой'], answer: 0, explain: { en: 'дать что? → accusative f. кот+орую.', de: 'дать что? → Akkusativ f. кот+орую.' } },
    { id: 'ru-g-kot-3', kind: 'choice', q: 'Г+ород, в ___ я родилс+я, на юг+е.', options: ['кот+ором', 'кот+орый', 'кот+орого'], answer: 0, explain: { en: 'в + prepositional (where?) → в кот+ором.', de: 'в + Präpositiv (wo?) → в кот+ором.' } },
    { id: 'ru-g-kot-4', kind: 'gap', q: 'Колл+еги, с ___ я +езжу на раб+оту, жив+ут р+ядом.', answer: 'кот+орыми', explain: { en: 'с + instrumental plural → кот+орыми.', de: 'с + Instrumental Plural → кот+орыми.' } }
  ]
});
