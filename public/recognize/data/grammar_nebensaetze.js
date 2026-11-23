GT.registerGrammar({
  id: 'nebensaetze',
  title: 'Nebensätze',
  summary: 'weil, dass, obwohl, wenn vs als, damit vs um … zu, косвенные вопросы с ob и W-словами.',
  explanation:
    '<p>В придаточном предложении (Nebensatz) <b>спрягаемый глагол стоит в конце</b>:</p>' +
    '<ul>' +
    '<li><em>Ich bleibe zu Hause, weil ich krank bin.</em></li>' +
    '<li>Отделяемые глаголы снова «склеиваются»: <em>…, dass er morgen anruft.</em></li>' +
    '<li>С модальным глаголом или Perfekt последним стоит спрягаемый глагол: <em>…, weil ich arbeiten muss.</em> / <em>…, dass ich ihn gesehen habe.</em></li>' +
    '</ul>' +
    '<p>Если придаточное стоит <b>первым</b>, оно занимает первое место, и главное предложение начинается сразу с глагола: <em>Weil ich krank bin, bleibe ich zu Hause.</em></p>' +
    '<p>Между главным и придаточным всегда запятая — как в русском.</p>' +
    '<p>Позиции глагола в главном предложении разбираются в <a href="#/grammar/wortstellung">Wortstellung</a>, а формы прошедшего времени — в <a href="#/grammar/perfekt">Perfekt vs Präteritum</a>.</p>',
  tables: [
    {
      caption: 'Союзы',
      head: ['Союз', 'Значение', 'Пример'],
      deCols: [0, 2],
      rows: [
        ['weil', 'потому что', 'Ich bleibe zu Hause, weil ich krank bin.'],
        ['dass', 'что', 'Ich glaube, dass das Update fertig ist.'],
        ['obwohl', 'хотя', 'Obwohl es regnet, fahre ich mit dem Rad.'],
        ['wenn', 'если; когда (повторяющееся, в т. ч. в прошлом)', 'Wenn ich Zeit habe, rufe ich dich an.'],
        ['als', 'когда (одно событие в прошлом)', 'Als ich nach Deutschland kam, sprach ich kaum Deutsch.'],
        ['damit', 'чтобы (подлежащие могут быть разными)', 'Ich erkläre es langsam, damit alle es verstehen.'],
        ['um … zu', 'чтобы (одно и то же подлежащее)', 'Ich lerne Deutsch, um im Job besser zu kommunizieren.'],
        ['ob', 'ли (вопрос «да/нет»)', 'Weißt du, ob der Server läuft?'],
        ['W-слово', 'косвенный W-вопрос', 'Kannst du mir sagen, wann das Meeting anfängt?']
      ]
    }
  ],
  examples: [
    { de: 'Ich kann heute nicht kommen, [[weil]] ich einen Arzttermin habe.', ru: 'Я не смогу сегодня прийти, потому что я записан к врачу.' },
    { de: 'Der Chef hat gesagt, [[dass]] wir das Projekt verschieben.', ru: 'Шеф сказал, что мы переносим проект.' },
    { de: '[[Als]] ich gestern nach Hause kam, war der Strom weg.', ru: 'Когда я вчера пришёл домой, не было электричества.' },
    { de: 'Ich schreibe eine Anleitung, [[damit]] die Kollegen das Tool selbst nutzen können.', ru: 'Я пишу инструкцию, чтобы коллеги могли сами пользоваться инструментом.' },
    { de: 'Ich mache den Kurs, [[um]] mich beruflich weiterzuentwickeln.', ru: 'Я прохожу курс, чтобы развиваться профессионально.' },
    { de: 'Weißt du, [[ob]] das Backup heute Nacht gelaufen ist?', ru: 'Ты не знаешь, прошёл ли бэкап сегодня ночью?' },
    { de: 'Kannst du mir sagen, [[wer]] für die Firewall zuständig ist?', ru: 'Можешь сказать, кто отвечает за файрвол?' }
  ],
  pitfalls: [
    { title: 'Глагол в конце, а не на втором месте', html: 'В русском после «потому что» порядок слов не меняется. В немецком меняется: <span class="wrong">…, weil ich bin krank.</span> → <span class="right">…, weil ich krank bin.</span> (В разговорной речи немцы иногда говорят «weil ich bin …», но на письме и на экзамене это ошибка.)' },
    { title: '«Когда» = wenn ИЛИ als', html: 'Одно событие в прошлом → <span class="right">als</span>: «Als ich Kind war, …». Настоящее, будущее или повторяющееся (и в прошлом: «каждый раз, когда») → <span class="right">wenn</span>: «Immer wenn ich ihn besuchte, …».' },
    { title: '«ли» → ob (а не wenn)', html: '«Я не знаю, работает ли сервер» → <span class="right">Ich weiß nicht, ob der Server läuft.</span> А не <span class="wrong">…, wenn der Server läuft</span> (сюда же толкает английское «if»).' },
    { title: 'В косвенном вопросе нет вопросительного порядка слов', html: '<span class="wrong">Kannst du mir sagen, wo ist der Bahnhof?</span> → <span class="right">Kannst du mir sagen, wo der Bahnhof ist?</span>' },
    { title: '«Чтобы» = damit или um … zu', html: 'Одно и то же подлежащее → <span class="right">um … zu</span> + инфинитив: «Ich spare, um ein Auto zu kaufen». Разные подлежащие → <span class="right">damit</span>: «Ich spare, damit meine Kinder studieren können».' }
  ],
  drills: [
    { id: 'g-ns-d1', kind: 'gap', q: 'Ich kann heute nicht kommen, weil ich arbeiten ___. (müssen)', answer: 'muss', explain: 'Спрягаемый модальный глагол — в самом конце.' },
    { id: 'g-ns-d2', kind: 'reorder', q: 'Составьте: «Я не знаю, работает ли сервер».', tokens: ['Ich', 'weiß', 'nicht,', 'ob', 'der', 'Server', 'läuft.'], answer: 'Ich weiß nicht, ob der Server läuft.', explain: 'ob = ли; глагол (läuft) в конце.' },
    { id: 'g-ns-d3', kind: 'choice', q: '___ ich gestern nach Hause kam, war das Licht an.', options: ['Wenn', 'Als', 'Ob'], answer: 1, explain: 'Одно событие в прошлом → als.' },
    { id: 'g-ns-d4', kind: 'choice', q: 'Ich lerne jeden Tag, ___ die B1-Prüfung zu bestehen.', options: ['damit', 'um', 'dass'], answer: 1, explain: 'То же подлежащее + инфинитив с zu → um … zu.' },
    { id: 'g-ns-d5', kind: 'choice', q: 'Ich schreibe eine Anleitung, ___ die Kollegen sie nutzen können.', options: ['damit', 'um', 'weil'], answer: 0, explain: 'Другое подлежащее (die Kollegen) → damit.' },
    { id: 'g-ns-d6', kind: 'gap', q: 'Kannst du mir sagen, wann das Meeting ___? (anfangen)', answer: 'anfängt', explain: 'Косвенный вопрос: отделяемый глагол склеивается в конце.' },
    { id: 'g-ns-d7', kind: 'reorder', q: 'Составьте: «Хотя было поздно, мы продолжали работать».', tokens: ['Obwohl', 'es', 'spät', 'war,', 'haben', 'wir', 'weitergearbeitet.'], answer: 'Obwohl es spät war, haben wir weitergearbeitet.', explain: 'Придаточное первое → главное начинается с глагола (haben).' },
    { id: 'g-ns-d8', kind: 'choice', q: 'Immer ___ ich Stress habe, schlafe ich schlecht.', options: ['als', 'wenn'], answer: 1, explain: 'Повторяющаяся ситуация → wenn.' }
  ]
});
