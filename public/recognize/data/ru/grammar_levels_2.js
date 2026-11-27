/* RUSSIAN GRAMMAR · B2 lessons (prefixed verbs of motion, participles, verbal adverbs, чтобы) + C1 starter (word order).
 * Explanations en + de inline; drill sentences in Russian. "+" marks stress. */

/* ---------- B2 · Prefixed verbs of motion ---------- */
GT.registerGrammar({
  id: 'motion_prefixes',
  level: 'B2',
  title: { en: 'Prefixed verbs of motion: прийти, уйти, выйти…', de: 'Bewegungsverben mit Präfix: прийти, уйти, выйти…' },
  summary: { en: 'A prefix adds direction; the -идти/-ехать form becomes perfective, the -ходить/-езжать form imperfective.', de: 'Das Präfix gibt die Richtung; die -идти/-ехать-Form wird perfektiv, die -ходить/-езжать-Form imperfektiv.' },
  explanation: {
    en: '<p>Add a prefix to a verb of motion and two things happen: it gains a <b>direction</b>, and the uni/multidirectional pair becomes an <b>aspect pair</b>:</p>' +
      '<p><em>идт+и → прийт+и</em> (<b>perfective</b>: to arrive), <em>ход+ить → приход+ить</em> (<b>imperfective</b>: to arrive, regularly / in process). By vehicle: <em>приех+ать / приезж+ать</em>.</p>' +
      '<ul><li><b>при-</b> arrive · <b>у-</b> leave · <b>в(о)-</b> enter · <b>вы-</b> exit · <b>под(о)-</b> approach · <b>от(о)-</b> move away · <b>пере-</b> cross · <b>за-</b> drop in · <b>про-</b> pass by/through · <b>об(о)-</b> go round · <b>до-</b> reach</li></ul>' +
      '<p>The prefix often matches a preposition: <em><b>в</b>ойт+и <b>в</b> к+омнату, <b>вы</b>йти <b>из</b> д+ома, <b>под</b>ойт+и <b>к</b> окн+у, <b>от</b>ойт+и <b>от</b> двер+и, <b>до</b>ехать <b>до</b> ц+ентра</em>.</p>' +
      '<p>Spelling: идти → <b>-йти</b> after a vowel (прийт+и, уйт+и, найт+и), <b>-ойти</b> after a consonant (войт+и, подойт+и, отойт+и).</p>',
    de: '<p>Mit einem Präfix bekommt ein Bewegungsverb eine <b>Richtung</b>, und aus dem Paar bestimmt/unbestimmt wird ein <b>Aspektpaar</b> — ähnlich wie deutsche Präfixverben (ankommen, weggehen, eintreten):</p>' +
      '<p><em>идт+и → прийт+и</em> (<b>perfektiv</b>: ankommen), <em>ход+ить → приход+ить</em> (<b>imperfektiv</b>: ankommen, regelmäßig / im Verlauf). Mit Fahrzeug: <em>приех+ать / приезж+ать</em>.</p>' +
      '<ul><li><b>при-</b> an- · <b>у-</b> weg- · <b>в(о)-</b> hinein- · <b>вы-</b> hinaus- · <b>под(о)-</b> heran- · <b>от(о)-</b> weg von · <b>пере-</b> über- · <b>за-</b> vorbei-(kurz besuchen) · <b>про-</b> vorbei/durch · <b>об(о)-</b> um … herum · <b>до-</b> bis zu</li></ul>' +
      '<p>Das Präfix passt oft zur Präposition: <em><b>в</b>ойт+и <b>в</b> к+омнату, <b>вы</b>йти <b>из</b> д+ома, <b>под</b>ойт+и <b>к</b> окн+у, <b>до</b>ехать <b>до</b> ц+ентра</em>.</p>' +
      '<p>Schreibung: идти → <b>-йти</b> nach Vokal (прийт+и, уйт+и), <b>-ойти</b> nach Konsonant (войт+и, подойт+и, отойт+и).</p>'
  },
  tables: [
    { caption: { en: 'Main prefixes', de: 'Wichtige Präfixe' },
      head: { en: ['Prefix', 'Meaning', 'pf. / impf. (on foot)', 'pf. / impf. (by vehicle)'], de: ['Präfix', 'Bedeutung', 'pf. / ipf. (zu Fuß)', 'pf. / ipf. (Fahrzeug)'] },
      deCols: [2, 3],
      rows: { en: [['при-', 'arrive', 'прийт+и / приход+ить', 'приех+ать / приезж+ать'], ['у-', 'leave', 'уйт+и / уход+ить', 'у+ехать / уезж+ать'], ['в-', 'go in', 'войт+и / вход+ить', 'въ+ехать / въезж+ать'], ['вы-', 'go out', 'в+ыйти / выход+ить', 'в+ыехать / выезж+ать'], ['пере-', 'cross, move', 'перейт+и / переход+ить', 'переех+ать / переезж+ать'], ['за-', 'drop in', 'зайт+и / заход+ить', 'за+ехать / заезж+ать']],
              de: [['при-', 'ankommen', 'прийт+и / приход+ить', 'приех+ать / приезж+ать'], ['у-', 'weggehen', 'уйт+и / уход+ить', 'у+ехать / уезж+ать'], ['в-', 'hineingehen', 'войт+и / вход+ить', 'въ+ехать / въезж+ать'], ['вы-', 'hinausgehen', 'в+ыйти / выход+ить', 'в+ыехать / выезж+ать'], ['пере-', 'überqueren, umziehen', 'перейт+и / переход+ить', 'переех+ать / переезж+ать'], ['за-', 'vorbeischauen', 'зайт+и / заход+ить', 'за+ехать / заезж+ать']] } }
  ],
  examples: [
    { t: 'Когд+а ты [[придёшь]] дом+ой?', en: 'When will you get home?', de: 'Wann kommst du nach Hause?' },
    { t: 'Он [[ушёл]] с раб+оты в шесть.', en: 'He left work at six.', de: 'Er ist um sechs von der Arbeit gegangen.' },
    { t: 'Мы [[переех+али]] в Берл+ин в пр+ошлом год+у.', en: 'We moved to Berlin last year.', de: 'Wir sind letztes Jahr nach Berlin gezogen.' },
    { t: '[[Зайд+и]] ко мне п+осле раб+оты.', en: 'Drop by after work.', de: 'Komm nach der Arbeit bei mir vorbei.' },
    { t: 'Он к+аждый день [[ух+одит]] в в+осемь.', en: 'He leaves at eight every day.', de: 'Er geht jeden Tag um acht los.' }
  ],
  pitfalls: [
    { title: { en: 'Same prefix, different aspect', de: 'Gleiches Präfix, anderer Aspekt' },
      html: { en: '<span class="right">Он пришёл</span> — he has arrived (and is here). <span class="right">Он приход+ил</span> — he came (and left again), or used to come.', de: '<span class="right">Он пришёл</span> — er ist gekommen (und ist da). <span class="right">Он приход+ил</span> — er war da (und ist wieder weg) oder kam regelmäßig.' } },
    { title: { en: 'пере- = move house', de: 'пере- = umziehen' },
      html: { en: '“to move (flat/city)” is <span class="right">переех+ать</span>, not <span class="wrong">дв+игаться</span>.', de: '„umziehen“ heißt <span class="right">переех+ать</span>, nicht <span class="wrong">дв+игаться</span>.' } }
  ],
  drills: [
    { id: 'ru-g-mp-1', kind: 'choice', q: 'Г+ости уж+е ___ — откр+ой дверь!', options: ['пришл+и', 'приход+или', 'ушл+и'], answer: 0, explain: { en: 'They have arrived (result) → perfective пришл+и.', de: 'Sie sind angekommen (Ergebnis) → perfektiv пришл+и.' } },
    { id: 'ru-g-mp-2', kind: 'choice', q: 'Осторожно, не ___ д+орогу на кр+асный!', options: ['переход+и', 'перейд+и', 'перешёл'], answer: 0, explain: { en: 'не + imperative → imperfective переход+и.', de: 'не + Imperativ → imperfektiv переход+и.' } },
    { id: 'ru-g-mp-3', kind: 'gap', q: { en: 'Мы ___ из д+ома в семь утр+а. (выйти, мы, past)', de: 'Мы ___ из д+ома в семь утр+а. (выйти, мы, Präteritum)' }, answer: 'в+ышли', explain: { en: 'вы- = out, stress on вы-: в+ышли.', de: 'вы- = hinaus, Betonung auf вы-: в+ышли.' } },
    { id: 'ru-g-mp-4', kind: 'choice', q: 'Я ___ в апт+еку и куп+ил лек+арство.', options: ['зашёл', 'ушёл', 'обошёл'], answer: 0, explain: { en: 'Drop in somewhere → за-.', de: 'Kurz irgendwo hineingehen → за-.' } },
    { id: 'ru-g-mp-5', kind: 'choice', q: 'П+оезд ___ из Москв+ы к+аждый час.', options: ['отх+одит', 'отойдёт', 'ушёл'], answer: 0, explain: { en: 'Regular → imperfective отх+одит.', de: 'Regelmäßig → imperfektiv отх+одит.' } }
  ]
});

/* ---------- B2 · Participles ---------- */
GT.registerGrammar({
  id: 'participles',
  level: 'B2',
  title: { en: 'Participles: читающий, прочитанный', de: 'Partizipien: читающий, прочитанный' },
  summary: { en: 'Four participles replace a который-clause in written Russian: -ущий/-ящий, -вший, -емый/-имый, -нный/-тый.', de: 'Vier Partizipien ersetzen im geschriebenen Russisch einen который-Satz: -ущий/-ящий, -вший, -емый/-имый, -нный/-тый.' },
  explanation: {
    en: '<p>Participles are verb-adjectives. They agree with the noun like adjectives and replace <em>который</em> in formal and written style:</p>' +
      '<p><em>студ+ент, кот+орый чит+ает</em> → <em>студ+ент, <b>чит+ающий</b></em> (the student reading…)</p>' +
      '<ul><li><b>Active present</b>: они-form minus -т + <b>-щий</b>: <em>чит+ают → чит+ающий, говор+ят → говор+ящий</em></li>' +
      '<li><b>Active past</b>: past stem + <b>-вший</b> (-ший after a consonant): <em>чит+ал → чит+авший, принёс → принёсший</em></li>' +
      '<li><b>Passive present</b> (bookish): мы-form + <b>-ый</b>: <em>чит+аем → чит+аемый, люб+им → люб+имый</em></li>' +
      '<li><b>Passive past</b> (very common, usually perfective): <b>-нный / -енный / -тый</b>: <em>прочит+ать → прочит+анный, реш+ить → решённый, закр+ыть → закр+ытый</em></li></ul>' +
      '<p><b>Short passive participles</b> act like a passive voice: <em>Магаз+ин <b>закр+ыт</b>. Письм+о <b>напис+ано</b>. Раб+ота <b>зак+ончена</b>.</em></p>',
    de: '<p>Partizipien sind Verbaladjektive. Sie werden wie Adjektive dekliniert und ersetzen im Schriftstil <em>который</em> — wie das deutsche erweiterte Attribut:</p>' +
      '<p><em>студ+ент, кот+орый чит+ает</em> → <em>студ+ент, <b>чит+ающий</b></em> (der lesende Student)</p>' +
      '<ul><li><b>Aktiv Präsens</b> (≈ Partizip I): они-Form ohne -т + <b>-щий</b>: <em>чит+ают → чит+ающий, говор+ят → говор+ящий</em></li>' +
      '<li><b>Aktiv Präteritum</b>: Vergangenheitsstamm + <b>-вший</b>: <em>чит+ал → чит+авший</em> (der gelesen hat)</li>' +
      '<li><b>Passiv Präsens</b> (buchsprachlich): мы-Form + <b>-ый</b>: <em>чит+аемый, люб+имый</em></li>' +
      '<li><b>Passiv Präteritum</b> (≈ Partizip II, sehr häufig): <b>-нный / -енный / -тый</b>: <em>прочит+анный, решённый, закр+ытый</em></li></ul>' +
      '<p><b>Kurzformen</b> des passiven Partizips bilden ein Zustandspassiv (≈ sein + Partizip II): <em>Магаз+ин <b>закр+ыт</b>.</em> (Der Laden ist geschlossen.) <em>Раб+ота <b>зак+ончена</b>.</em></p>'
  },
  tables: [
    { caption: { en: 'Four participles of читать / прочитать', de: 'Vier Partizipien von читать / прочитать' },
      head: { en: ['Type', 'Form', 'Meaning'], de: ['Typ', 'Form', 'Bedeutung'] },
      deCols: [1],
      rows: { en: [['active present', 'чит+ающий', 'who is reading'], ['active past', 'чит+авший / прочит+авший', 'who was reading / has read'], ['passive present', 'чит+аемый', 'being read'], ['passive past', 'прочит+анный (short: прочит+ан)', 'read, finished']],
              de: [['Aktiv Präsens', 'чит+ающий', 'der liest'], ['Aktiv Präteritum', 'чит+авший / прочит+авший', 'der las / gelesen hat'], ['Passiv Präsens', 'чит+аемый', 'der gelesen wird'], ['Passiv Präteritum', 'прочит+анный (kurz: прочит+ан)', 'gelesen']] } }
  ],
  examples: [
    { t: 'Л+юди, [[жив+ущие]] в ц+ентре, пл+атят б+ольше.', en: 'People living in the centre pay more.', de: 'Menschen, die im Zentrum wohnen, zahlen mehr.' },
    { t: 'Сотр+удник, [[напис+авший]] отчёт, в +отпуске.', en: 'The employee who wrote the report is on holiday.', de: 'Der Mitarbeiter, der den Bericht geschrieben hat, ist im Urlaub.' },
    { t: 'Это [[решённый]] вопр+ос.', en: 'That’s a settled question.', de: 'Das ist eine erledigte Frage.' },
    { t: 'Двери [[закр+ыты]] до девят+и.', en: 'The doors are closed until nine.', de: 'Die Türen sind bis neun geschlossen.' },
    { t: 'Догов+ор уж+е [[подп+исан]].', en: 'The contract has already been signed.', de: 'Der Vertrag ist schon unterschrieben.' }
  ],
  pitfalls: [
    { title: { en: '-нн- long, -н- short', de: '-нн- lang, -н- kurz' },
      html: { en: 'Full form: <span class="right">напис+анное письм+о</span>; short form: <span class="right">письм+о напис+ано</span> — one н.', de: 'Langform: <span class="right">напис+анное письм+о</span>; Kurzform: <span class="right">письм+о напис+ано</span> — ein н.' } },
    { title: { en: 'Speech prefers который', de: 'Gesprochen lieber который' },
      html: { en: 'Active participles sound bookish in conversation. Say <span class="right">челов+ек, кот+орый звон+ил</span> rather than <span class="wrong">звон+ивший челов+ек</span> in a chat. Short passives (закрыт, сделано) are fine everywhere.', de: 'Aktive Partizipien klingen im Gespräch buchsprachlich. Sagen Sie eher <span class="right">челов+ек, кот+орый звон+ил</span>. Kurze Passivformen (закрыт, сделано) passen überall.' } }
  ],
  drills: [
    { id: 'ru-g-prt-1', kind: 'choice', q: 'Магаз+ин ___ на рем+онт.', options: ['закр+ыт', 'закр+ытый', 'закрыв+ающий'], answer: 0, explain: { en: 'A predicate state → short passive participle.', de: 'Zustand als Prädikat → kurzes Passivpartizip.' } },
    { id: 'ru-g-prt-2', kind: 'choice', q: 'Д+ети, ___ во двор+е, +очень шумят.', options: ['игр+ающие', 'с+ыгранные', 'игр+авший'], answer: 0, explain: { en: 'Who are playing (now), plural → игр+ающие.', de: 'Die (gerade) spielen, Plural → игр+ающие.' } },
    { id: 'ru-g-prt-3', kind: 'gap', q: { en: 'Письм+о уж+е ___. (напис+ать, short form)', de: 'Письм+о уж+е ___. (напис+ать, Kurzform)' }, answer: 'напис+ано', explain: { en: 'Neuter short passive: напис+ано.', de: 'Neutrale Kurzform: напис+ано.' } },
    { id: 'ru-g-prt-4', kind: 'choice', q: '«Студ+ент, сд+авший экз+амен» = студ+ент, ___', options: ['кот+орый сдал экз+амен', 'кот+орый сдаёт экз+амен', 'кот+орому сд+али экз+амен'], answer: 0, explain: { en: '-вший = active past.', de: '-вший = Aktiv Präteritum.' } }
  ]
});

/* ---------- B2 · Verbal adverbs ---------- */
GT.registerGrammar({
  id: 'gerunds',
  level: 'B2',
  title: { en: 'Verbal adverbs: читая, прочитав', de: 'Adverbialpartizipien: читая, прочитав' },
  summary: { en: 'читая = while reading (impf.); прочитав = having read (pf.). Same subject as the main verb!', de: 'читая = beim Lesen (ipf.); прочитав = nachdem man gelesen hat (pf.). Gleiches Subjekt wie im Hauptsatz!' },
  explanation: {
    en: '<p>A verbal adverb (деепричастие) turns a second action into a short phrase — like English <em>-ing</em> clauses:</p>' +
      '<ul><li><b>Imperfective → simultaneous</b>: они-form minus ending + <b>-я / -а</b>: <em>чит+ают → чит+ая, говор+ят → говор+я, сл+ышат → сл+ыша</em>. “While reading”.</li>' +
      '<li><b>Perfective → completed before</b>: past stem + <b>-в</b> (or -вшись for -ся verbs): <em>прочит+ал → прочит+ав, верн+улся → верн+увшись</em>. “Having read”.</li></ul>' +
      '<p>The verbal adverb has <b>no subject of its own</b>: it must be the same person as the main verb. It doesn’t change for gender, number or tense.</p>' +
      '<p>Common fixed ones: <em>несмотр+я на</em> (despite), <em>суд+я по</em> (judging by), <em>честно говор+я</em> (honestly speaking).</p>',
    de: '<p>Das Adverbialpartizip (деепричастие) verkürzt eine Nebenhandlung — ähnlich wie deutsche Konstruktionen mit „indem / während / nachdem“ oder englisches <em>-ing</em>:</p>' +
      '<ul><li><b>Imperfektiv → gleichzeitig</b>: они-Form ohne Endung + <b>-я / -а</b>: <em>чит+ая, говор+я, сл+ыша</em>. „Beim Lesen“.</li>' +
      '<li><b>Perfektiv → vorzeitig</b>: Vergangenheitsstamm + <b>-в</b> (-вшись bei -ся-Verben): <em>прочит+ав, верн+увшись</em>. „Nachdem er gelesen hatte“.</li></ul>' +
      '<p>Das Adverbialpartizip hat <b>kein eigenes Subjekt</b>: es muss dieselbe Person sein wie beim Hauptverb. Es ist unveränderlich.</p>' +
      '<p>Feste Wendungen: <em>несмотр+я на</em> (trotz), <em>суд+я по</em> (nach … zu urteilen), <em>честно говор+я</em> (ehrlich gesagt).</p>'
  },
  tables: [
    { caption: { en: 'Formation', de: 'Bildung' },
      head: { en: ['Verb', 'Verbal adverb', 'Meaning'], de: ['Verb', 'Adverbialpartizip', 'Bedeutung'] },
      deCols: [0, 1],
      rows: { en: [['чит+ать (impf.)', 'чит+ая', 'while reading'], ['говор+ить (impf.)', 'говор+я', 'while speaking'], ['прочит+ать (pf.)', 'прочит+ав', 'having read'], ['верн+уться (pf.)', 'верн+увшись', 'having returned'], ['прийт+и (pf.)', 'прид+я', 'having arrived']],
              de: [['чит+ать (ipf.)', 'чит+ая', 'beim Lesen'], ['говор+ить (ipf.)', 'говор+я', 'beim Sprechen'], ['прочит+ать (pf.)', 'прочит+ав', 'nachdem … gelesen'], ['верн+уться (pf.)', 'верн+увшись', 'nach der Rückkehr'], ['прийт+и (pf.)', 'прид+я', 'nach dem Ankommen']] } }
  ],
  examples: [
    { t: '[[Чит+ая]] нов+ости, я пью к+офе.', en: 'I drink coffee while reading the news.', de: 'Beim Zeitunglesen trinke ich Kaffee.' },
    { t: '[[Зак+ончив]] раб+оту, он пошёл дом+ой.', en: 'Having finished work, he went home.', de: 'Nachdem er die Arbeit beendet hatte, ging er nach Hause.' },
    { t: '[[Верн+увшись]] из +отпуска, он+а сраз+у позвон+ила.', en: 'After coming back from holiday, she called straight away.', de: 'Nach ihrer Rückkehr aus dem Urlaub rief sie sofort an.' },
    { t: '[[Несмотр+я на]] д+ождь, мы пошл+и гул+ять.', en: 'Despite the rain, we went for a walk.', de: 'Trotz des Regens gingen wir spazieren.' }
  ],
  pitfalls: [
    { title: { en: 'Same subject only', de: 'Nur gleiches Subjekt' },
      html: { en: '<span class="wrong">Подъезж+ая к ст+анции, у мен+я слет+ела шл+япа.</span> (my hat was approaching the station!) → <span class="right">Когд+а я подъезж+ал к ст+анции, у мен+я слет+ела шл+япа.</span>', de: '<span class="wrong">Подъезж+ая к ст+анции, у мен+я слет+ела шл+япа.</span> (der Hut fuhr zum Bahnhof!) → <span class="right">Когд+а я подъезж+ал к ст+анции, …</span>' } }
  ],
  drills: [
    { id: 'ru-g-ger-1', kind: 'choice', q: 'Он+а пьёт к+офе, ___ нов+ости.', options: ['чит+ая', 'прочит+ав', 'прочит+анный'], answer: 0, explain: { en: 'Two actions at the same time → imperfective чит+ая.', de: 'Gleichzeitige Handlungen → imperfektiv чит+ая.' } },
    { id: 'ru-g-ger-2', kind: 'choice', q: '___ дом+ой, я сн+ял к+уртку.', options: ['Прид+я', 'Приход+я', 'Пришедший'], answer: 0, explain: { en: 'First arrived, then took off → perfective придя.', de: 'Erst angekommen, dann ausgezogen → perfektiv придя.' } },
    { id: 'ru-g-ger-3', kind: 'gap', q: '___ по пог+оде, з+автра б+удет снег. (суд+ить)', answer: 'Суд+я', explain: { en: 'Fixed phrase: суд+я по.', de: 'Feste Wendung: суд+я по.' } },
    { id: 'ru-g-ger-4', kind: 'gap', q: 'Он говор+ит по телеф+ону, ___ маш+ину. (вест+и)', answer: 'вед+я', explain: { en: 'вед+ут → вед+я (simultaneous).', de: 'вед+ут → вед+я (gleichzeitig).' } }
  ]
});

/* ---------- B2 · чтобы ---------- */
GT.registerGrammar({
  id: 'chtoby',
  level: 'B2',
  title: { en: 'чтобы: purpose and wishes', de: 'чтобы: Zweck und Wünsche' },
  summary: { en: 'чтобы + infinitive (same subject) or + past tense (different subject): Я хочу, чтобы ты пришёл.', de: 'чтобы + Infinitiv (gleiches Subjekt) oder + Präteritum (anderes Subjekt): Я хочу, чтобы ты пришёл.' },
  explanation: {
    en: '<p><b>чтобы</b> introduces <b>purpose</b> (“in order to / so that”) and what someone <b>wants, asks or demands</b> of another person.</p>' +
      '<ul><li><b>Same subject → infinitive</b>: <em>Я уч+у нем+ецкий, <b>чт+обы</b> раб+отать в Герм+ании.</em> <em>Я хоч+у раб+отать.</em> (no чтобы after хотеть with same subject)</li>' +
      '<li><b>Different subject → past tense form</b> (it doesn’t mean past!): <em>Я хоч+у, <b>чт+обы</b> ты <b>пришёл</b>.</em> <em>Он+а попрос+ила, <b>чт+обы</b> я позвон+ил.</em></li></ul>' +
      '<p>Verbs that trigger чтобы + past: <em>хот+еть, проси́ть, треб+овать, сов+етовать, нужн+о, в+ажно, сказ+ать</em> (= order). Compare: <em>Он сказ+ал, <b>что</b> я позвон+ил</em> (reported fact) vs <em>Он сказ+ал, <b>чт+обы</b> я позвон+ил</em> (he told me to call).</p>',
    de: '<p><b>чтобы</b> leitet einen <b>Zweck</b> ein („um … zu / damit“) und das, was jemand von einer anderen Person <b>will, verlangt oder erbittet</b>.</p>' +
      '<ul><li><b>Gleiches Subjekt → Infinitiv</b> (≈ um … zu): <em>Я уч+у нем+ецкий, <b>чт+обы</b> раб+отать в Герм+ании.</em></li>' +
      '<li><b>Anderes Subjekt → Präteritumform</b> (bedeutet keine Vergangenheit!) (≈ damit / dass): <em>Я хоч+у, <b>чт+обы</b> ты <b>пришёл</b>.</em> — Ich will, dass du kommst.</li></ul>' +
      '<p>Auslöser: <em>хот+еть, просить, треб+овать, сов+етовать, нужн+о, в+ажно, сказ+ать</em> (= auffordern). Vergleich: <em>Он сказ+ал, <b>что</b> я позвон+ил</em> (er sagte, dass ich angerufen habe) vs <em>Он сказ+ал, <b>чт+обы</b> я позвон+ил</em> (er sagte, ich solle anrufen).</p>'
  },
  examples: [
    { t: 'Я встал р+ано, [[чт+обы]] успеть на п+оезд.', en: 'I got up early to catch the train.', de: 'Ich bin früh aufgestanden, um den Zug zu erreichen.' },
    { t: 'Мам+а х+очет, [[чт+обы]] я [[приех+ал]] на Рождеств+о.', en: 'Mum wants me to come for Christmas.', de: 'Mama will, dass ich zu Weihnachten komme.' },
    { t: 'Нач+альник попрос+ил, [[чт+обы]] мы [[зак+ончили]] к п+ятнице.', en: 'The boss asked us to finish by Friday.', de: 'Der Chef bat uns, bis Freitag fertig zu werden.' },
    { t: 'В+ажно, [[чт+обы]] все [[зн+али]] пр+авила.', en: 'It’s important that everyone knows the rules.', de: 'Es ist wichtig, dass alle die Regeln kennen.' }
  ],
  pitfalls: [
    { title: { en: 'Not future after чтобы', de: 'Kein Futur nach чтобы' },
      html: { en: '<span class="wrong">Я хоч+у, чт+обы ты придёшь.</span> → <span class="right">Я хоч+у, чт+обы ты пришёл.</span>', de: '<span class="wrong">Я хоч+у, чт+обы ты придёшь.</span> → <span class="right">Я хоч+у, чт+обы ты пришёл.</span>' } },
    { title: { en: 'хотеть + infinitive with the same subject', de: 'хотеть + Infinitiv bei gleichem Subjekt' },
      html: { en: '<span class="wrong">Я хоч+у, чт+обы я поех+ал.</span> → <span class="right">Я хоч+у по+ехать.</span>', de: '<span class="wrong">Я хоч+у, чт+обы я поех+ал.</span> → <span class="right">Я хоч+у по+ехать.</span>' } }
  ],
  drills: [
    { id: 'ru-g-cht-1', kind: 'choice', q: 'Я хоч+у, чт+обы ты ___ мне правду.', options: ['сказ+ал', 'ск+ажешь', 'сказ+ать'], answer: 0, explain: { en: 'Different subject → past form.', de: 'Anderes Subjekt → Präteritumform.' } },
    { id: 'ru-g-cht-2', kind: 'choice', q: 'Он к+упит велосип+ед, чт+обы ___ на раб+оту.', options: ['+ездить', '+ездил', '+ездит'], answer: 0, explain: { en: 'Same subject → infinitive.', de: 'Gleiches Subjekt → Infinitiv.' } },
    { id: 'ru-g-cht-3', kind: 'choice', q: 'Вр+ач сказ+ал, ___ я б+ольше сп+ал.', options: ['чт+обы', 'что', 'чем'], answer: 0, explain: { en: 'An instruction (he told me to) → чтобы.', de: 'Eine Aufforderung → чтобы.' } },
    { id: 'ru-g-cht-4', kind: 'gap', q: { en: 'Н+ужно, чт+обы вы ___ ф+орму. (зап+олнить → past, вы)', de: 'Н+ужно, чт+обы вы ___ ф+орму. (зап+олнить → Präteritum, вы)' }, answer: 'зап+олнили', explain: { en: 'вы → plural past: зап+олнили.', de: 'вы → Plural Präteritum: зап+олнили.' } }
  ]
});

/* ---------- C1 (starter) · Word order and information structure ---------- */
GT.registerGrammar({
  id: 'word_order',
  level: 'C1',
  title: { en: 'Word order: old information first, new last', de: 'Wortstellung: Bekanntes zuerst, Neues zuletzt' },
  summary: { en: 'Russian word order is free in grammar but not in meaning: the new, important part goes to the end.', de: 'Die russische Wortstellung ist grammatisch frei, aber nicht bedeutungsneutral: das Neue steht am Ende.' },
  explanation: {
    en: '<p>Because cases show who does what, Russian can move words around. But the order carries meaning: the start of the sentence is the <b>theme</b> (what we already know), the end is the <b>rheme</b> (the new information, the answer).</p>' +
      '<ul><li><em>Кто пришёл? — Пришёл <b>Ив+ан</b>.</em> (new: Ivan → at the end)</li>' +
      '<li><em>Что сд+елал Ив+ан? — Ив+ан <b>пришёл</b>.</em> (new: arrived)</li>' +
      '<li><em>В к+омнату вошл+а <b>ж+енщина</b>.</em> = A woman came into the room. <em>Ж+енщина вошл+а в к+омнату.</em> = The woman came into the room.</li></ul>' +
      '<p>So word order does the job of English <b>a / the</b>: a new noun at the end ≈ “a”, a known noun at the start ≈ “the”. In speech, intonation can put the stress elsewhere; in writing, word order is your main tool.</p>',
    de: '<p>Da die Kasus zeigen, wer was tut, ist die russische Wortstellung beweglich. Aber sie trägt Bedeutung: Am Satzanfang steht das <b>Thema</b> (Bekanntes), am Ende das <b>Rhema</b> (das Neue, die Antwort).</p>' +
      '<ul><li><em>Кто пришёл? — Пришёл <b>Ив+ан</b>.</em> (neu: Iwan → am Ende)</li>' +
      '<li><em>Что сд+елал Ив+ан? — Ив+ан <b>пришёл</b>.</em> (neu: gekommen)</li>' +
      '<li><em>В к+омнату вошл+а <b>ж+енщина</b>.</em> = Eine Frau kam ins Zimmer. <em>Ж+енщина вошл+а в к+омнату.</em> = Die Frau kam ins Zimmer.</li></ul>' +
      '<p>Die Wortstellung übernimmt so die Rolle des deutschen Artikels: ein neues Nomen am Ende ≈ „ein“, ein bekanntes am Anfang ≈ „der/die/das“.</p>'
  },
  examples: [
    { t: 'На стол+е леж+ит [[кн+ига]].', en: 'There is a book on the table.', de: 'Auf dem Tisch liegt ein Buch.' },
    { t: '[[Кн+ига]] леж+ит на стол+е.', en: 'The book is on the table.', de: 'Das Buch liegt auf dem Tisch.' },
    { t: 'Этот д+ом постр+оил [[мой дед]].', en: 'This house was built by my grandfather.', de: 'Dieses Haus hat mein Großvater gebaut.' }
  ],
  pitfalls: [
    { title: { en: 'Copying English order', de: 'Englische Reihenfolge übernehmen' },
      html: { en: '“A man is standing at the door.” <span class="wrong">Мужч+ина сто+ит у двер+и</span> sounds like “the man”. Better: <span class="right">У двер+и сто+ит мужч+ина.</span>', de: '„Ein Mann steht an der Tür.“ <span class="wrong">Мужч+ина сто+ит у двер+и</span> klingt nach „der Mann“. Besser: <span class="right">У двер+и сто+ит мужч+ина.</span>' } }
  ],
  drills: [
    { id: 'ru-g-wo-1', kind: 'choice', q: 'Кто звон+ил? — ___', options: ['Звон+ил Пётр.', 'Пётр звон+ил.'], answer: 0, explain: { en: 'The answer (new) goes last.', de: 'Die Antwort (neu) steht am Ende.' } },
    { id: 'ru-g-wo-2', kind: 'choice', q: { en: '“A letter came for you.” →', de: '„Für dich ist ein Brief gekommen.“ →' }, options: ['Теб+е пришл+о письм+о.', 'Письм+о пришл+о теб+е.'], answer: 0, explain: { en: 'A new noun (“a letter”) goes at the end.', de: 'Neues Nomen („ein Brief“) ans Ende.' } },
    { id: 'ru-g-wo-3', kind: 'choice', q: 'Где ключ+и? — ___', options: ['Ключ+и на стол+е.', 'На стол+е ключ+и.'], answer: 0, explain: { en: 'The keys are known; the new part is “on the table”.', de: 'Die Schlüssel sind bekannt; neu ist „auf dem Tisch“.' } }
  ]
});
