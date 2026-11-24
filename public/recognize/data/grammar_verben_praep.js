/* German GRAMMAR · Verben mit Präpositionen, da-/wo-Wörter.
 * Explanations ru + en inline, original examples, 8 drills. */
GT.registerGrammar({
  id: 'verben_praep',
  title: { ru: 'Глаголы с предлогами, da-/wo- · Verben mit Präpositionen', en: 'Verbs + prepositions, da-/wo- · Verben mit Präpositionen' },
  summary: {
    ru: 'Многие глаголы жёстко связаны с предлогом и падежом. Для предметов вместо «предлог + местоимение» используют da(r)- и wo(r)-.',
    en: 'Many German verbs lock in a fixed preposition and case. For things instead of people, use da(r)- and wo(r)- compounds.'
  },
  explanation: {
    ru: '<p><b>Учить глагол нужно сразу с предлогом и падежом.</b> Русский и немецкий предлоги часто не совпадают: «ждать автобус» (без предлога) = <em>warten <b>auf</b> + Akk.</em>, «думать о проекте» = <em>denken <b>an</b> + Akk.</em>, «интересоваться музыкой» = <em>sich interessieren <b>für</b> + Akk.</em></p>' +
      '<p><b>Два предлога меняют смысл одного глагола:</b> <em>sich freuen <b>auf</b> + Akk.</em> — радоваться тому, что <b>ещё будет</b> (отпуск завтра); <em>sich freuen <b>über</b> + Akk.</em> — радоваться тому, что <b>уже есть или случилось</b> (подарок). Похожая пара: <em>bitten <b>um</b></em> (просить о) vs <em>danken <b>für</b></em> (благодарить за).</p>' +
      '<p><b>Предметы vs люди: правило da(r)- и wo(r)-.</b></p>' +
      '<p>• Для <b>людей</b> остаётся предлог + местоимение: <em>Ich warte auf <b>ihn</b>.</em> / <em>Auf <b>wen</b> wartest du?</em><br>' +
      '• Для <b>вещей и фактов</b> ставится <b>da(r) + предлог</b> или <b>wo(r) + предлог</b>: <em>Ich warte <b>darauf</b>.</em> / <em><b>Worauf</b> wartest du?</em> (Если предлог начинается на гласный — <em>auf, an, über, um, aus, in</em> — вставляется <b>-r-</b>: <em>darauf, daran, darüber, worauf</em>.)</p>' +
      '<p><b>da-слова перед придаточным с dass / ob / zu-инфинитивом:</b> <em>Ich freue mich <b>darauf</b>, dass du kommst.</em> / <em>Ich danke Ihnen <b>dafür</b>, mir zu helfen.</em></p>',
    en: '<p><b>Learn the verb together with its preposition and case.</b> Prepositions rarely match English directly: “wait for” = <em>warten <b>auf</b> + Akk.</em>, “think about” = <em>denken <b>an</b> + Akk.</em>, “be interested in” = <em>sich interessieren <b>für</b> + Akk.</em></p>' +
      '<p><b>Two prepositions can change the meaning:</b> <em>sich freuen <b>auf</b> + Akk.</em> = look forward to something in the <b>future</b>; <em>sich freuen <b>über</b> + Akk.</em> = be glad about something <b>now or already happened</b>.</p>' +
      '<p><b>Things vs people: da(r)- and wo(r)- compounds.</b></p>' +
      '<p>• For <b>people</b>, keep preposition + pronoun: <em>Ich warte auf <b>ihn</b>.</em> / <em>Auf <b>wen</b> wartest du?</em><br>' +
      '• For <b>things, ideas or clauses</b>, use <b>da(r) + preposition</b> or <b>wo(r) + preposition</b>: <em>Ich warte <b>darauf</b>.</em> / <em><b>Worauf</b> wartest du?</em> (Insert <b>-r-</b> before a vowel: <em>darauf, daran, darüber, woran</em>.)</p>' +
      '<p><b>Placeholder before a dass-clause or zu-infinitive:</b> <em>Ich freue mich <b>darauf</b>, dass du kommst.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Частые глаголы с предлогами (B1)', en: 'High-frequency verbs + prepositions (B1)' },
      head: { ru: ['Глагол + предлог', 'Падеж', 'da-/wo-', 'Пример'], en: ['Verb + preposition', 'Case', 'da-/wo-', 'Example'] },
      deCols: [0, 2, 3],
      rows: {
        ru: [
          ['warten auf', 'Akk.', 'darauf / worauf', 'Ich warte auf den Bus.'],
          ['denken an', 'Akk.', 'daran / woran', 'Denk bitte an den Termin!'],
          ['sich freuen auf', 'Akk.', 'darauf / worauf', 'Wir freuen uns auf den Urlaub.'],
          ['sich freuen über', 'Akk.', 'darüber / worüber', 'Ich freue mich über deine Mail.'],
          ['sich interessieren für', 'Akk.', 'dafür / wofür', 'Er interessiert sich für IT.'],
          ['sprechen über', 'Akk.', 'darüber / worüber', 'Wir sprechen über das Projekt.'],
          ['teilnehmen an', 'Dat.', 'daran / woran', 'Sie nimmt an dem Kurs teil.'],
          ['sprechen mit', 'Dat.', 'damit / womit', 'Ich spreche mit der Chefin.'],
          ['fragen nach', 'Dat.', 'danach / wonach', 'Er fragt nach dem Weg.'],
          ['träumen von', 'Dat.', 'davon / wovon', 'Ich träume von einem Haus.']
        ],
        en: [
          ['warten auf', 'Akk.', 'darauf / worauf', 'Ich warte auf den Bus.'],
          ['denken an', 'Akk.', 'daran / woran', 'Denk bitte an den Termin!'],
          ['sich freuen auf', 'Akk.', 'darauf / worauf', 'Wir freuen uns auf den Urlaub.'],
          ['sich freuen über', 'Akk.', 'darüber / worüber', 'Ich freue mich über deine Mail.'],
          ['sich interessieren für', 'Akk.', 'dafür / wofür', 'Er interessiert sich für IT.'],
          ['sprechen über', 'Akk.', 'darüber / worüber', 'Wir sprechen über das Projekt.'],
          ['teilnehmen an', 'Dat.', 'daran / woran', 'Sie nimmt an dem Kurs teil.'],
          ['sprechen mit', 'Dat.', 'damit / womit', 'Ich spreche mit der Chefin.'],
          ['fragen nach', 'Dat.', 'danach / wonach', 'Er fragt nach dem Weg.'],
          ['träumen von', 'Dat.', 'davon / wovon', 'Ich träume von einem Haus.']
        ]
      }
    },
    {
      caption: { ru: 'Люди vs предметы и события', en: 'People vs things and events' },
      head: { ru: ['О чём речь?', 'Вопрос', 'Ответ с местоимением'], en: ['Referring to…', 'Question', 'Pronoun answer'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['Человек (warten auf)', 'Auf wen wartest du?', 'Ich warte auf ihn / auf meine Kollegin.'],
          ['Предмет / событие (warten auf)', 'Worauf wartest du?', 'Ich warte darauf (auf das Paket).'],
          ['Человек (sprechen mit)', 'Mit wem sprichst du?', 'Ich spreche mit ihm / mit dem Arzt.'],
          ['Факт / целая фраза (sich freuen über)', 'Worüber freust du dich?', 'Ich freue mich darüber, dass alles klappt.']
        ],
        en: [
          ['Person (warten auf)', 'Auf wen wartest du?', 'Ich warte auf ihn / auf meine Kollegin.'],
          ['Thing / event (warten auf)', 'Worauf wartest du?', 'Ich warte darauf (auf das Paket).'],
          ['Person (sprechen mit)', 'Mit wem sprichst du?', 'Ich spreche mit ihm / mit dem Arzt.'],
          ['Fact / whole clause (sich freuen über)', 'Worüber freust du dich?', 'Ich freue mich darüber, dass alles klappt.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Wir [[warten auf]] die Antwort vom Support.', ru: 'Мы ждём ответа от поддержки.', en: 'We’re waiting for the reply from support.' },
    { de: '[[Woran]] denkst du gerade?', ru: 'О чём ты сейчас думаешь?', en: 'What are you thinking about right now?' },
    { de: '[[An wen]] denkst du?', ru: 'О ком ты думаешь?', en: 'Who are you thinking about?' },
    { de: 'Ich danke dir herzlich [[für]] deine Hilfe.', ru: 'Сердечно благодарю тебя за помощь.', en: 'Thank you very much for your help.' },
    { de: 'Er hat sich [[darüber]] beschwert, dass der Zug ausgefallen ist.', ru: 'Он пожаловался на то, что поезд отменили.', en: 'He complained that the train was cancelled.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Не путайте warten auf и erwarten', en: 'Don’t mix up warten auf and erwarten' },
      html: {
        ru: '<em>Warten</em> требует <b>auf</b>: <span class="right">Ich warte auf dich</span>. Глагол <em>erwarten</em> (ожидать) идёт без предлога: <span class="right">Ich erwarte einen Anruf</span>.',
        en: '<em>Warten</em> needs <b>auf</b>: <span class="right">Ich warte auf dich</span>. <em>Erwarten</em> takes a direct object: <span class="right">Ich erwarte einen Anruf</span>.'
      }
    },
    {
      title: { ru: 'da-слова нельзя использовать для людей', en: 'Never use da-compounds for people' },
      html: {
        ru: 'Про друга нельзя сказать <span class="wrong">Ich warte darauf</span> — только <span class="right">Ich warte auf ihn</span>.',
        en: 'Never refer to a person with <span class="wrong">Ich warte darauf</span> — say <span class="right">Ich warte auf ihn</span>.'
      }
    },
    {
      title: { ru: 'sich freuen auf vs über', en: 'sich freuen auf vs über' },
      html: {
        ru: 'Отпуск завтра — <span class="right">Ich freue mich auf den Urlaub</span>. Отпуск уже начался или был хорош — <span class="right">Ich freue mich über das schöne Wetter</span>.',
        en: 'Upcoming holiday: <span class="right">Ich freue mich auf den Urlaub</span>. Happening now or already happened: <span class="right">Ich freue mich über das schöne Wetter</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-vp-d1', kind: 'choice',
      q: 'Ich warte schon zwanzig Minuten ___ den Bus.',
      options: ['für', 'auf', 'über'],
      answer: 1,
      explain: { ru: 'Устойчивое управление: warten auf + Akkusativ.', en: 'Fixed preposition: warten auf + Akkusativ.' }
    },
    {
      id: 'g-vp-d2', kind: 'choice',
      q: 'Am Montag beginnt mein Urlaub! Ich freue mich sehr ___.',
      options: ['darauf', 'darüber', 'daran'],
      answer: 0,
      explain: { ru: 'Отпуск ещё впереди → sich freuen auf → для события используем darauf.', en: 'The holiday is in the future → sich freuen auf → for an event, use darauf.' }
    },
    {
      id: 'g-vp-d3', kind: 'choice',
      q: '___ interessiert sich deine Schwester? — Für Fotografie.',
      options: ['Für wen', 'Wofür', 'Worüber'],
      answer: 1,
      explain: { ru: 'Речь о занятии (не о человеке) + предлог für → wofür.', en: 'Asking about a thing/topic (not a person) + für → wofür.' }
    },
    {
      id: 'g-vp-d4', kind: 'choice',
      q: '___ wartest du hier vor dem Büro? — Auf meinen Chef.',
      options: ['Worauf', 'Auf wem', 'Auf wen'],
      answer: 2,
      explain: { ru: 'Вопрос о человеке с warten auf + Akkusativ → Auf wen.', en: 'Asking about a person with warten auf + Akkusativ → Auf wen.' }
    },
    {
      id: 'g-vp-d5', kind: 'choice',
      q: 'Alle Kolleginnen nehmen ___ dem Workshop teil.',
      options: ['an', 'auf', 'bei'],
      answer: 0,
      explain: { ru: 'teilnehmen an + Dativ — участвовать в чём-либо.', en: 'teilnehmen an + Dativ — to take part in something.' }
    },
    {
      id: 'g-vp-d6', kind: 'gap',
      q: 'Hast du dich schon ___ den neuen Computer gewöhnt? (предлог)',
      hint: { ru: 'sich gewöhnen + ... + Akk.', en: 'sich gewöhnen + ... + Akk.' },
      answer: 'an',
      explain: { ru: 'sich gewöhnen an + Akkusativ — привыкать к чему-либо.', en: 'sich gewöhnen an + Akkusativ — to get used to something.' }
    },
    {
      id: 'g-vp-d7', kind: 'gap',
      q: 'Morgen ist die Prüfung. Ich denke die ganze Zeit ___. (da-слово для an)',
      hint: { ru: 'da + r + an', en: 'da + r + an' },
      answer: 'daran',
      explain: { ru: 'denken an + событие → daran (вставляется -r-, так как an начинается на гласную).', en: 'denken an + event → daran (insert -r- before the vowel in an).' }
    },
    {
      id: 'g-vp-d8', kind: 'reorder',
      q: { ru: 'Соберите вопрос о деле. «О чём вы говорили на встрече?»', en: 'Build the question. “What did you talk about at the meeting?”' },
      tokens: ['Worüber', 'habt', 'ihr', 'im Meeting', 'gesprochen?'],
      answer: 'Worüber habt ihr im Meeting gesprochen?',
      explain: { ru: 'sprechen über (о теме/предмете) → Worüber стоит на первом месте, затем глагол.', en: 'sprechen über (a topic) → Worüber comes first, followed by the verb.' }
    },
    {
      id: 'g-vp-d9', kind: 'choice',
      q: 'Ich habe mich beim Vermieter ___ die laute Musik beschwert.',
      options: ['über', 'auf', 'an'],
      answer: 0,
      explain: { ru: 'sich beschweren über + Akk.', en: 'sich beschweren über + Akk.' }
    },
    {
      id: 'g-vp-d10', kind: 'choice',
      q: 'Wer kümmert sich ___ die Katze, wenn wir im Urlaub sind?',
      options: ['um', 'für', 'über'],
      answer: 0,
      explain: { ru: 'sich kümmern um + Akk.', en: 'sich kümmern um + Akk.' }
    },
    {
      id: 'g-vp-d11', kind: 'gap',
      q: 'Ich bewerbe mich ___ eine Stelle als Krankenpfleger.',
      hint: { ru: 'Предлог', en: 'Preposition' },
      answer: 'um',
      explain: { ru: 'sich bewerben um + Akk (на должность).', en: 'sich bewerben um + Akk (for a job).' }
    },
    {
      id: 'g-vp-d12', kind: 'choice',
      q: 'Vielen Dank! Ich bedanke mich ___ Ihre Hilfe.',
      options: ['für', 'um', 'an'],
      answer: 0,
      explain: { ru: 'sich bedanken für + Akk.', en: 'sich bedanken für + Akk.' }
    },
    {
      id: 'g-vp-d13', kind: 'choice',
      q: '___ denkst du gerade? — An meine Oma.',
      options: ['An wen', 'Woran', 'An wem'],
      answer: 0,
      explain: { ru: 'О человеке: предлог + wen (an + Akk). Woran — о вещах.', en: 'For a person: preposition + wen (an + Akk). Woran is for things.' }
    },
    {
      id: 'g-vp-d14', kind: 'gap',
      q: 'Die Heizung ist kaputt. Hast du dich schon ___ beschwert? (da- + über)',
      answer: 'darüber',
      explain: { ru: 'sich beschweren über + вещь → darüber (вставляется -r-).', en: 'sich beschweren über + a thing → darüber (with -r-).' }
    },
    {
      id: 'g-vp-d15', kind: 'choice',
      q: 'Ich träume schon lange ___ einem Haus am Meer.',
      options: ['von', 'über', 'auf'],
      answer: 0,
      explain: { ru: 'träumen von + Dat.', en: 'träumen von + Dat.' }
    },
    {
      id: 'g-vp-d16', kind: 'choice',
      q: 'Ob wir grillen, hängt ___ Wetter ab.',
      options: ['vom', 'am', 'mit dem'],
      answer: 0,
      explain: { ru: 'abhängen von + Dat; von + dem = vom.', en: 'abhängen von + Dat; von + dem = vom.' }
    },
    {
      id: 'g-vp-d17', kind: 'reorder',
      q: { ru: 'Соберите вопрос. «Чему ты радуешься больше всего?» (о будущем)', en: 'Build the question. “What are you looking forward to most?”' },
      tokens: ['Worauf', 'freust', 'du', 'dich', 'am meisten?'],
      answer: 'Worauf freust du dich am meisten?',
      explain: { ru: 'sich freuen auf (будущее) → Worauf; dich сразу после подлежащего.', en: 'sich freuen auf (future) → Worauf; dich right after the subject.' }
    }
  ]
});
