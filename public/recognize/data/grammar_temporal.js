/* German GRAMMAR · B1 · Temporal clauses (als, wenn, während, bevor, nachdem, seit, bis, sobald) + Plusquamperfekt.
 * Explanations ru + en inline, original examples. */
GT.registerGrammar({
  id: 'temporal',
  level: 'B1',
  title: { ru: 'Временные придаточные и Plusquamperfekt', en: 'Time clauses and the Plusquamperfekt' },
  summary: {
    ru: 'als / wenn, während, bevor, nachdem, seit, bis, sobald — и Plusquamperfekt для того, что случилось раньше.',
    en: 'als / wenn, während, bevor, nachdem, seit, bis, sobald — and the Plusquamperfekt for what happened earlier.'
  },
  explanation: {
    ru: '<p>Временные союзы открывают <b>придаточное</b>: спрягаемый глагол уходит в конец (<em>…, nachdem ich gegessen <b>hatte</b></em>). Если придаточное стоит первым, главное начинается с глагола: <em>Als ich ankam, <b>regnete</b> es.</em></p>' +
      '<ul>' +
      '<li><b>als</b> — один раз в прошлом; <b>wenn</b> — повторялось в прошлом («каждый раз, когда») или относится к настоящему/будущему.</li>' +
      '<li><b>während</b> — одновременно; <b>bevor</b> — до того как; <b>nachdem</b> — после того как.</li>' +
      '<li><b>seit(dem)</b> — с тех пор как (часто + Präsens, если длится до сих пор); <b>bis</b> — до тех пор пока; <b>sobald</b> — как только.</li>' +
      '</ul>' +
      '<p><b>Plusquamperfekt</b> = <b>hatte / war + Partizip II</b>. Он показывает действие, которое произошло <b>раньше</b> другого прошедшего: <em>Als ich anrief, <b>war</b> sie schon <b>gegangen</b>.</em> Выбор hatte/war — как в Perfekt.</p>' +
      '<p><b>nachdem</b> требует сдвига времени: придаточное на шаг «раньше» главного. Präteritum/Perfekt в главном → Plusquamperfekt в придаточном; Präsens/Futur в главном → Perfekt в придаточном.</p>',
    en: '<p>Time conjunctions open a <b>subordinate clause</b>: the finite verb goes to the end (<em>…, nachdem ich gegessen <b>hatte</b></em>). If the clause comes first, the main clause starts with its verb: <em>Als ich ankam, <b>regnete</b> es.</em></p>' +
      '<ul>' +
      '<li><b>als</b> — one occasion in the past; <b>wenn</b> — repeated in the past (“whenever”) or present/future.</li>' +
      '<li><b>während</b> — while; <b>bevor</b> — before; <b>nachdem</b> — after.</li>' +
      '<li><b>seit(dem)</b> — since (often + present tense if it is still true); <b>bis</b> — until; <b>sobald</b> — as soon as.</li>' +
      '</ul>' +
      '<p>The <b>Plusquamperfekt</b> (past perfect) = <b>hatte / war + Partizip II</b>. It marks an action that happened <b>before</b> another past action: <em>Als ich anrief, <b>war</b> sie schon <b>gegangen</b>.</em> Choose hatte/war as in the Perfekt.</p>' +
      '<p><b>nachdem</b> needs a tense shift: the clause is one step “earlier” than the main clause. Präteritum/Perfekt in the main clause → Plusquamperfekt after nachdem; Präsens/Futur → Perfekt.</p>'
  },
  tables: [
    {
      caption: { ru: 'Союзы времени', en: 'Time conjunctions' },
      head: { ru: ['Союз', 'Значение', 'Пример'], en: ['Conjunction', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['als', 'один раз в прошлом', 'Als ich klein war, wohnten wir in Kiew.'],
          ['wenn', 'каждый раз / в будущем', 'Wenn es regnete, blieben wir drinnen.'],
          ['während', 'пока, в то время как', 'Während er kocht, deckt sie den Tisch.'],
          ['bevor', 'до того как', 'Bevor du gehst, mach das Licht aus.'],
          ['nachdem', 'после того как', 'Nachdem er gegessen hatte, schlief er ein.'],
          ['seit(dem)', 'с тех пор как', 'Seit ich hier wohne, fahre ich Rad.'],
          ['bis', 'пока не, до тех пор', 'Warte, bis ich zurück bin.'],
          ['sobald', 'как только', 'Sobald ich Zeit habe, rufe ich an.']
        ],
        en: [
          ['als', 'one occasion in the past', 'Als ich klein war, wohnten wir in Kiew.'],
          ['wenn', 'whenever / in the future', 'Wenn es regnete, blieben wir drinnen.'],
          ['während', 'while', 'Während er kocht, deckt sie den Tisch.'],
          ['bevor', 'before', 'Bevor du gehst, mach das Licht aus.'],
          ['nachdem', 'after', 'Nachdem er gegessen hatte, schlief er ein.'],
          ['seit(dem)', 'since', 'Seit ich hier wohne, fahre ich Rad.'],
          ['bis', 'until', 'Warte, bis ich zurück bin.'],
          ['sobald', 'as soon as', 'Sobald ich Zeit habe, rufe ich an.']
        ]
      }
    },
    {
      caption: { ru: 'Сдвиг времени после nachdem', en: 'Tense shift after nachdem' },
      head: { ru: ['Главное предложение', 'nachdem-придаточное'], en: ['Main clause', 'nachdem clause'] },
      deCols: [0, 1],
      rows: [
        ['… ging ich nach Hause. (Präteritum)', 'Nachdem ich gearbeitet hatte, … (Plusquamperfekt)'],
        ['… bin ich nach Hause gegangen. (Perfekt)', 'Nachdem ich gearbeitet hatte, … (Plusquamperfekt)'],
        ['… gehe ich nach Hause. (Präsens)', 'Nachdem ich gearbeitet habe, … (Perfekt)']
      ]
    }
  ],
  examples: [
    { de: '[[Als]] ich in Berlin ankam, regnete es.', ru: 'Когда я приехал в Берлин, шёл дождь.', en: 'When I arrived in Berlin, it was raining.' },
    { de: '[[Wenn]] wir Oma besuchten, gab es immer Kuchen.', ru: 'Каждый раз, когда мы навещали бабушку, был пирог.', en: 'Whenever we visited Grandma, there was always cake.' },
    { de: '[[Nachdem]] ich die Mail geschickt [[hatte]], merkte ich den Fehler.', ru: 'Отправив письмо, я заметил ошибку.', en: 'After I had sent the email, I noticed the mistake.' },
    { de: 'Als die Polizei kam, [[war]] der Dieb schon [[geflohen]].', ru: 'Когда приехала полиция, вор уже сбежал.', en: 'When the police arrived, the thief had already fled.' },
    { de: '[[Seit]] ich Deutsch lerne, verstehe ich die Nachrichten besser.', ru: 'С тех пор как я учу немецкий, я лучше понимаю новости.', en: 'Since I started learning German, I understand the news better.' },
    { de: 'Ich bleibe im Büro, [[bis]] das Update fertig ist.', ru: 'Я останусь в офисе, пока обновление не будет готово.', en: 'I’m staying in the office until the update is done.' },
    { de: '[[Sobald]] du ankommst, schreib mir bitte.', ru: 'Как только приедешь, напиши мне, пожалуйста.', en: 'As soon as you arrive, please text me.' }
  ],
  pitfalls: [
    {
      title: { ru: '«когда» = als или wenn?', en: '“When” = als or wenn?' },
      html: {
        ru: 'Одно событие в прошлом — только <span class="right">als</span>: <span class="right">Als ich 18 war, …</span>, а не <span class="wrong">Wenn ich 18 war</span>. Повторение в прошлом и всё в настоящем/будущем — <span class="right">wenn</span>. Вопрос «когда?» — <em>wann</em>, но это не союз времени, а вопросительное слово.',
        en: 'One past occasion is always <span class="right">als</span>: <span class="right">Als ich 18 war, …</span>, not <span class="wrong">Wenn ich 18 war</span>. Repeated past events and present/future use <span class="right">wenn</span>. The question “when?” is <em>wann</em> — a question word, not a time conjunction.'
      }
    },
    {
      title: { ru: 'nachdem + то же время', en: 'nachdem with the same tense' },
      html: {
        ru: '<span class="wrong">Nachdem ich aß, ging ich spazieren.</span> → <span class="right">Nachdem ich gegessen hatte, ging ich spazieren.</span> Действие после nachdem всегда «на шаг раньше».',
        en: '<span class="wrong">Nachdem ich aß, ging ich spazieren.</span> → <span class="right">Nachdem ich gegessen hatte, ging ich spazieren.</span> The nachdem action is always one tense “earlier”.'
      }
    },
    {
      title: { ru: 'während: союз или предлог', en: 'während: conjunction or preposition' },
      html: {
        ru: 'С придаточным: <span class="right">während ich arbeite</span>. С существительным это предлог с Genitiv: <span class="right">während der Arbeit</span>. То же для <em>bevor</em> ↔ <em>vor</em> и <em>nachdem</em> ↔ <em>nach</em>: <span class="right">nach dem Essen</span>, но <span class="wrong">nachdem dem Essen</span>.',
        en: 'With a clause it is a conjunction: <span class="right">während ich arbeite</span>. With a noun it is a preposition + Genitiv: <span class="right">während der Arbeit</span>. Likewise <em>bevor</em> ↔ <em>vor</em> and <em>nachdem</em> ↔ <em>nach</em>: <span class="right">nach dem Essen</span>, not <span class="wrong">nachdem dem Essen</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-tp-d1', kind: 'choice',
      q: '___ ich gestern nach Hause kam, war niemand da.',
      options: ['Als', 'Wenn', 'Wann'],
      answer: 0,
      explain: { ru: 'Одно событие в прошлом → als.', en: 'A single past event → als.' }
    },
    {
      id: 'g-tp-d2', kind: 'choice',
      q: 'Immer ___ ich Kopfschmerzen hatte, trank ich Tee.',
      options: ['als', 'wenn', 'wann'],
      answer: 1,
      explain: { ru: 'immer + повторение в прошлом → wenn.', en: 'immer + a repeated past event → wenn.' }
    },
    {
      id: 'g-tp-d3', kind: 'gap',
      q: 'Nachdem wir das Ticket gekauft ___, stiegen wir in den Zug. (haben)',
      hint: { ru: 'Главное в Präteritum → Plusquamperfekt.', en: 'Main clause in Präteritum → Plusquamperfekt.' },
      answer: 'hatten',
      explain: { ru: 'wir + hatte → hatten, глагол в конце придаточного.', en: 'wir + hatte → hatten, verb at the end of the clause.' }
    },
    {
      id: 'g-tp-d4', kind: 'gap',
      q: 'Als ich am Bahnhof ankam, ___ der Zug schon abgefahren. (sein)',
      hint: { ru: 'Plusquamperfekt с sein, 3-е лицо ед. ч.', en: 'Plusquamperfekt with sein, 3rd person singular.' },
      answer: 'war',
      explain: { ru: 'abfahren — движение → sein: war abgefahren.', en: 'abfahren is movement → sein: war abgefahren.' }
    },
    {
      id: 'g-tp-d5', kind: 'choice',
      q: 'Bitte warte hier, ___ ich zurückkomme.',
      options: ['bis', 'seit', 'bevor'],
      answer: 0,
      explain: { ru: '«пока я не вернусь» → bis.', en: '“until I come back” → bis.' }
    },
    {
      id: 'g-tp-d6', kind: 'choice',
      q: '___ dem Essen putze ich mir die Zähne.',
      options: ['Nachdem', 'Nach', 'Danach'],
      answer: 1,
      explain: { ru: 'Перед существительным нужен предлог nach + Dativ.', en: 'Before a noun you need the preposition nach + Dativ.' }
    },
    {
      id: 'g-tp-d7', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Как только я закончу, я позвоню тебе».', en: 'Build the sentence. “As soon as I’m finished, I’ll call you.”' },
      tokens: ['Sobald', 'ich', 'fertig', 'bin,', 'rufe', 'ich', 'dich', 'an.'],
      answer: 'Sobald ich fertig bin, rufe ich dich an.',
      explain: { ru: 'Придаточное первым → главное начинается с глагола rufe.', en: 'Clause first → the main clause starts with the verb rufe.' }
    },
    {
      id: 'g-tp-d8', kind: 'choice',
      q: '___ ich in Deutschland wohne, fahre ich mehr Fahrrad.',
      options: ['Seit', 'Als', 'Während'],
      answer: 0,
      explain: { ru: 'Длится до сих пор → seit + Präsens.', en: 'Still true now → seit + present tense.' }
    }
  ]
});
