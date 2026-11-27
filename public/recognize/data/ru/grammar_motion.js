/* RUSSIAN GRAMMAR · Verbs of motion: идти / ходить, ехать / ездить. */
GT.registerGrammar({
  id: 'motion',
  title: { en: 'Verbs of motion: идти / ходить, ехать / ездить', de: 'Bewegungsverben: идти / ходить, ехать / ездить' },
  summary: { en: 'Russian distinguishes on foot vs by vehicle, and one direction vs habits / round trips.', de: 'Das Russische unterscheidet zu Fuß vs. mit Fahrzeug und eine Richtung vs. Gewohnheit / hin und zurück.' },
  explanation: {
    en: '<p>English “go” and German “gehen / fahren” split into four Russian verbs:</p>' +
      '<ul><li><b>on foot</b>: идти́ (one direction, now) — ходи́ть (habit, round trip, around)</li>' +
      '<li><b>by vehicle</b>: е́хать (one direction, now) — е́здить (habit, round trip, around)</li></ul>' +
      '<p><b>Unidirectional</b> (идти, ехать): a single trip towards a goal, in progress or planned: <em>Я иду́ в о́фис</em> — I’m on my way to the office.</p>' +
      '<p><b>Multidirectional</b> (ходить, ездить): habits, repeated trips, a completed round trip in the past, moving around: <em>Я хожу́ в спортза́л</em> (I go to the gym regularly), <em>Вчера́ я ходи́л к врачу́</em> (yesterday I went to the doctor and came back).</p>' +
      '<p>With prefixes they build the -ХОД- family: приходить / прийти, уходить / уйти … (see Roots).</p>',
    de: '<p>Deutsches „gehen / fahren“ teilt sich im Russischen in vier Verben:</p>' +
      '<ul><li><b>zu Fuß</b>: идти́ (eine Richtung, jetzt) — ходи́ть (Gewohnheit, hin und zurück, umher)</li>' +
      '<li><b>mit Fahrzeug</b>: е́хать (eine Richtung, jetzt) — е́здить (Gewohnheit, hin und zurück, umher)</li></ul>' +
      '<p>Die Unterscheidung gehen / fahren kennt das Deutsche schon — neu ist nur die Richtung.</p>' +
      '<p><b>Bestimmt</b> (идти, ехать): eine einzelne Bewegung zu einem Ziel, gerade oder geplant: <em>Я иду́ в о́фис</em> — ich bin auf dem Weg ins Büro.</p>' +
      '<p><b>Unbestimmt</b> (ходить, ездить): Gewohnheit, Wiederholung, abgeschlossenes Hin und Zurück, Umherbewegen: <em>Я хожу́ в спортза́л</em> (ich gehe regelmäßig ins Fitnessstudio), <em>Вчера́ я ходи́л к врачу́</em> (gestern war ich beim Arzt).</p>' +
      '<p>Mit Präfixen entsteht die Familie -ХОД-: приходить / прийти, уходить / уйти … (siehe Roots).</p>'
  },
  tables: [
    { caption: { en: 'Present tense', de: 'Präsens' },
      head: { en: ['', 'идти́', 'ходи́ть', 'е́хать', 'е́здить'], de: ['', 'идти́', 'ходи́ть', 'е́хать', 'е́здить'] },
      deCols: [1, 2, 3, 4],
      rows: [['я', 'иду́', 'хожу́', 'е́ду', 'е́зжу'], ['ты', 'идёшь', 'хо́дишь', 'е́дешь', 'е́здишь'], ['он / она́', 'идёт', 'хо́дит', 'е́дет', 'е́здит'], ['мы', 'идём', 'хо́дим', 'е́дем', 'е́здим'], ['они́', 'иду́т', 'хо́дят', 'е́дут', 'е́здят']] },
    { caption: { en: 'Past tense', de: 'Vergangenheit' },
      head: { en: ['', 'идти́', 'ходи́ть', 'е́хать', 'е́здить'], de: ['', 'идти́', 'ходи́ть', 'е́хать', 'е́здить'] },
      deCols: [1, 2, 3, 4],
      rows: [['он', 'шёл', 'ходи́л', 'е́хал', 'е́здил'], ['она́', 'шла', 'ходи́ла', 'е́хала', 'е́здила'], ['они́', 'шли', 'ходи́ли', 'е́хали', 'е́здили']] }
  ],
  examples: [
    { t: 'Я [[иду́]] на ку́хню, тебе́ принести́ ко́фе?', en: 'I’m going to the kitchen, shall I bring you a coffee?', de: 'Ich gehe in die Küche, soll ich dir einen Kaffee mitbringen?' },
    { t: 'По пя́тницам мы [[хо́дим]] в бар.', en: 'On Fridays we go to a bar.', de: 'Freitags gehen wir in eine Bar.' },
    { t: 'В про́шлом году́ я [[е́здил]] в Казахста́н.', en: 'Last year I went to Kazakhstan (and came back).', de: 'Letztes Jahr bin ich nach Kasachstan gefahren.' }
  ],
  pitfalls: [
    { title: { en: 'Going to another city = ехать', de: 'In eine andere Stadt = ехать' },
      html: { en: 'If the distance needs transport, use ехать / ездить even if English says “go”: <em>Я е́ду в Мю́нхен</em>.', de: 'Braucht man ein Verkehrsmittel, dann ехать / ездить — wie „fahren“: <em>Я е́ду в Мю́нхен</em>.' } },
    { title: { en: 'Past round trip = multidirectional', de: 'Vergangenes Hin und Zurück = unbestimmt' },
      html: { en: '<em>Вчера́ я ходи́л в кино́</em> = I went to the cinema (and I am back). <em>Я шёл в кино́</em> = I was on my way to the cinema (background for another event).', de: '<em>Вчера́ я ходи́л в кино́</em> = ich war gestern im Kino. <em>Я шёл в кино́</em> = ich war auf dem Weg ins Kino (Hintergrund für ein anderes Ereignis).' } },
    { title: { en: 'The past of идти is irregular', de: 'Die Vergangenheit von идти ist unregelmäßig' },
      html: { en: 'шёл, шла, шло, шли — and in prefixed verbs: пришёл, ушёл, вышел.', de: 'шёл, шла, шло, шли — und mit Präfix: пришёл, ушёл, вышел.' } }
  ],
  drills: [
    { id: 'ru-g-motion-1', kind: 'choice', q: 'Смотри́, вон ___ наш нача́льник.', options: ['идёт', 'хо́дит'], answer: 0,
      explain: { en: 'Moving right now in one direction → идёт.', de: 'Bewegt sich gerade in eine Richtung → идёт.' } },
    { id: 'ru-g-motion-2', kind: 'choice', q: 'Я ___ на рабо́ту пешко́м ка́ждый день.', options: ['иду́', 'хожу́'], answer: 1,
      explain: { en: '“Every day” = habit → хожу.', de: '„Jeden Tag“ = Gewohnheit → хожу.' } },
    { id: 'ru-g-motion-3', kind: 'choice', q: 'За́втра мы ___ в Мю́нхен на конфере́нцию.', options: ['идём', 'е́дем'], answer: 1,
      explain: { en: 'Another city → by vehicle; one planned trip → е́дем.', de: 'Andere Stadt → mit Fahrzeug; eine geplante Fahrt → е́дем.' } },
    { id: 'ru-g-motion-4', kind: 'choice', q: 'В про́шлом ме́сяце я ___ в командиро́вку в Ри́гу.', options: ['е́хал', 'е́здил'], answer: 1,
      explain: { en: 'A completed round trip in the past → е́здил.', de: 'Eine abgeschlossene Hin- und Rückreise in der Vergangenheit → е́здил.' } },
    { id: 'ru-g-motion-5', kind: 'gap', q: { en: 'Когда́ я ___ домо́й, мне позвони́ла сестра́. (идти́, он-form, past)', de: 'Когда́ я ___ домо́й, мне позвони́ла сестра́. (идти́, он-Form, Präteritum)' }, answer: 'шёл',
      hint: { en: 'One direction, in progress, past — and the past of идти is irregular.', de: 'Eine Richtung, im Verlauf, Vergangenheit — Vergangenheit von идти ist unregelmäßig.' },
      explain: { en: 'Background process (“was walking home”) → unidirectional past шёл.', de: 'Hintergrundvorgang („war auf dem Heimweg“) → bestimmte Vergangenheit шёл.' } },
    { id: 'ru-g-motion-6', kind: 'gap', q: { en: 'Ты ча́сто ___ к роди́телям? (е́здить, ты-form)', de: 'Ты ча́сто ___ к роди́телям? (е́здить, ты-Form)' }, answer: 'е́здишь',
      hint: { en: 'Habit, by vehicle.', de: 'Gewohnheit, mit Fahrzeug.' },
      explain: { en: '“Often” = repeated trips → е́здить → ты е́здишь.', de: '„Oft“ = wiederholte Fahrten → е́здить → ты е́здишь.' } },
    { id: 'ru-g-motion-7', kind: 'choice', q: 'Ребёнок ещё ма́ленький, он то́лько учи́тся ___.', options: ['идти́', 'ходи́ть'], answer: 1,
      explain: { en: 'Walking as an ability (no direction) → ходить.', de: 'Gehen als Fähigkeit (ohne Richtung) → ходить.' } },
    { id: 'ru-g-motion-8', kind: 'choice', q: 'Куда́ ты ___? — В апте́ку.', options: ['идёшь', 'хо́дишь'], answer: 0,
      explain: { en: 'Asking about the current trip → идёшь.', de: 'Frage nach dem aktuellen Weg → идёшь.' } }
  ]
});
