/* Additional practice for existing lessons, followed by new lessons. */
(function () {
  'use strict';
  var pack = GT._target;
  function practice(topic, drill) {
    GT.registerDrill(drill, 'grammar', topic);
    pack.grammar[topic].drills.push(drill);
  }

  practice("perfect", {
    id: "en-g-perfect-practice", kind: "gap",
    q: "We ___ the flat last Tuesday. (view)",
    answer: "viewed",
    explain: "Last Tuesday указывает на законченное прошлое. У view форма Past Simple оканчивается на -ed."
  });
  practice("conditionals", {
    id: "en-g-conditionals-practice", kind: "choice",
    q: "If I lived nearer, I ___ walk to work every day.",
    options: ["will", "would", "am"],
    answer: 1,
    explain: "Lived задаёт воображаемое условие в настоящем. В главной части используется would + инфинитив."
  });
  practice("passive", {
    id: "en-g-passive-practice", kind: "gap",
    q: "The spare keys were ___ to reception. (take)",
    answer: "taken",
    explain: "После were нужен Past Participle. У take это taken."
  });
  practice("modals", {
    id: "en-g-modals-practice", kind: "choice",
    q: "Entry is free. You ___ buy a ticket.",
    options: ["mustn't", "don't have to", "can't"],
    answer: 1,
    explain: "Билет покупать необязательно. Don’t have to снимает обязанность."
  });
  practice("patterns", {
    id: "en-g-patterns-practice", kind: "gap",
    q: "Would you mind ___ the window? (close)",
    answer: "closing",
    explain: "После mind используется форма на -ing."
  });
  practice("relative", {
    id: "en-g-relative-practice", kind: "choice",
    q: "That's the bakery ___ my sister works.",
    options: ["whose", "where", "which"],
    answer: 1,
    explain: "В придаточном пропущено обстоятельство места. Where соответствует at which."
  });
  practice("deduction", {
    id: "en-g-deduction-practice", kind: "choice",
    q: "The pavement is wet. It might ___ rained while we were inside.",
    options: ["be", "have", "has"],
    answer: 1,
    explain: "Might have + причастие выражает предположение о прошлом."
  });
  practice("hedging", {
    id: "en-g-hedging-practice", kind: "choice",
    q: "Which wording presents a possible explanation?",
    options: ["Traffic definitely caused the delay.", "The delay may be due to traffic.", "Traffic always causes delays."],
    answer: 1,
    explain: "May показывает, что причина пока только предполагается."
  });
  practice("perfect-continuous", {
    id: "en-g-perfect-continuous-practice", kind: "gap",
    q: "My hands are covered in paint. I've been ___ the hallway. (paint)",
    answer: "painting",
    explain: "Have been painting связывает недавнее занятие с заметным сейчас результатом."
  });
  practice("past-perfect", {
    id: "en-g-past-perfect-practice", kind: "gap",
    q: "By the time we arrived, the doors had already ___. (close)",
    answer: "closed",
    explain: "После had стоит причастие. Двери закрылись до нашего прихода."
  });
  practice("future-perfect", {
    id: "en-g-future-perfect-practice", kind: "gap",
    q: "By six tomorrow we will have ___ all the boxes. (pack)",
    answer: "packed",
    explain: "Will have packed описывает результат к будущему сроку."
  });
  practice("third-conditional", {
    id: "en-g-third-conditional-practice", kind: "gap",
    q: "If you had called, I would have ___ you at the station. (meet)",
    answer: "met",
    explain: "Для нереализованного результата в прошлом нужно would have + причастие."
  });
  practice("wish", {
    id: "en-g-wish-practice", kind: "choice",
    q: "I missed the concert. I wish I ___ booked the tickets earlier.",
    options: ["have", "had", "will"],
    answer: 1,
    explain: "Сожаление о прошлом выражается через wish + Past Perfect."
  });
  practice("reported-statements", {
    id: "en-g-reported-statements-practice", kind: "choice",
    q: "On Monday Jo said, “I am tired.” Reporting that evening: Jo said she ___ tired.",
    options: ["is being", "was", "were"],
    answer: 1,
    explain: "При переносе точки отсчёта в прошлое am переходит в was, а I — в she."
  });
  practice("reported-questions", {
    id: "en-g-reported-questions-practice", kind: "choice",
    q: "He asked where ___.",
    options: ["was the parcel", "the parcel was", "did the parcel be"],
    answer: 1,
    explain: "После asked where сохраняется порядок подлежащее + глагол."
  });
  practice("relative-nondefining", {
    id: "en-g-relative-nondefining-practice", kind: "choice",
    q: "My bike, ___ I bought second-hand, still works well.",
    options: ["that", "which", "what"],
    answer: 1,
    explain: "В добавочном придаточном между запятыми предмет обозначается which."
  });
  practice("deduction-present", {
    id: "en-g-deduction-present-practice", kind: "choice",
    q: "That ___ be Nina at the door. She's still on the plane.",
    options: ["must", "can't", "should"],
    answer: 1,
    explain: "Говорящий располагает фактом, который исключает Нину. Для такого вывода подходит can’t."
  });
  practice("past-ability", {
    id: "en-g-past-ability-practice", kind: "choice",
    q: "Despite the ice, she managed ___ the car on time.",
    options: ["stopping", "to stop", "stop"],
    answer: 1,
    explain: "Managed to + инфинитив указывает, что в конкретный раз ей удалось остановить машину."
  });
  practice("used-to", {
    id: "en-g-used-to-practice", kind: "gap",
    q: "I am used to ___ early. (get up)",
    answer: "getting up",
    explain: "В be used to частица to — предлог. После него возможна форма на -ing."
  });
  practice("articles", {
    id: "en-g-articles-practice", kind: "choice",
    q: "We saw a fox and a hare. ___ hare ran off first.",
    options: ["A", "The", "An"],
    answer: 1,
    explain: "Заяц уже назван и однозначно опознаётся."
  });
  practice("quantifiers", {
    id: "en-g-quantifiers-practice", kind: "choice",
    q: "There is very ___ flour left. We'll need another bag.",
    options: ["few", "little", "many"],
    answer: 1,
    explain: "Flour обозначает вещество. Very little значит «совсем мало»."
  });
  practice("ed-ing", {
    id: "en-g-ed-ing-practice", kind: "choice",
    q: "The instructions were ___, so I asked for help.",
    options: ["confused", "confusing"],
    answer: 1,
    explain: "Инструкции вызывают замешательство. Причину ощущения описывает форма на -ing."
  });
  practice("contrast", {
    id: "en-g-contrast-practice", kind: "choice",
    q: "___ the heavy rain, the match went ahead.",
    options: ["Although", "Despite", "Even though"],
    answer: 1,
    explain: "The heavy rain — именная группа. Перед ней подходит despite."
  });
  practice("zero-conditional", {
    id: "en-g-zero-conditional-practice", kind: "gap",
    q: "As a rule, if this sensor detects smoke, the alarm ___. (ring)",
    answer: "rings",
    explain: "Речь о штатном поведении прибора. В обеих частях стоит Present Simple."
  });
  practice("polite-indirect", {
    id: "en-g-polite-indirect-practice", kind: "choice",
    q: "Could you tell me what time ___?",
    options: ["does the shop close", "the shop closes", "closes the shop"],
    answer: 1,
    explain: "Во вложенном вопросе подлежащее the shop стоит перед closes."
  });
  practice("future-time-clauses", {
    id: "en-g-future-time-clauses-practice", kind: "gap",
    q: "I'll call as soon as the train ___. (arrive)",
    answer: "arrives",
    explain: "После as soon as о будущем говорят с Present Simple."
  });
  practice("causative-have", {
    id: "en-g-causative-have-practice", kind: "gap",
    q: "We had the lock ___ yesterday. (replace)",
    answer: "replaced",
    explain: "Had + предмет + причастие означает, что работу выполнил кто-то другой."
  });
  practice("so-such", {
    id: "en-g-so-such-practice", kind: "choice",
    q: "It was ___ a long queue that we came back later.",
    options: ["so", "such", "very"],
    answer: 1,
    explain: "В конструкции such a long queue слово such относится ко всей именной группе."
  });
  practice("preposition-ing", {
    id: "en-g-preposition-ing-practice", kind: "gap",
    q: "Thanks for ___ my keys. (find)",
    answer: "finding",
    explain: "После предлога for глагол принимает форму на -ing."
  });
  practice("modified-comparatives", {
    id: "en-g-modified-comparatives-practice", kind: "choice",
    q: "This route is ___ shorter than the old one.",
    options: ["very", "much", "more"],
    answer: 1,
    explain: "Much усиливает сравнительную степень shorter."
  });

  pack.config.TOPICS.grammar.push({ id: "frequency-position", name: "Position of frequency adverbs · A2", group: "Grammar topics" });
  GT.registerGrammar({
    id: "frequency-position", level: "A2", title: "Куда поставить usually и never",
    summary: "Сравните место наречия при смысловом глаголе, be и вспомогательном глаголе.",
    explanation: "<p>В нейтральном утверждении <b>usually, often, never</b> обычно стоят перед смысловым глаголом, но после личной формы <b>be</b>. Если есть вспомогательный или модальный глагол, наречие часто ставят сразу после него.</p><p><em>I usually walk. I am usually early. I have never driven there.</em> Слово <em>never</em> уже выражает отрицание.</p>",
    examples: [
      { t: "The neighbours often share a taxi.", ru: "Соседи часто ездят вместе на такси." },
      { t: "The last train is usually empty.", ru: "Последний поезд обычно пустой." }
    ],
    drills: [
      {
        id: "en-g-frequency-position-walk", kind: "reorder",
        tokens: ["I", "often", "cycle to work."],
        answer: "I often cycle to work.",
        explain: "В нейтральной фразе often ставится перед cycle."
      },
      {
        id: "en-g-frequency-position-be", kind: "choice",
        q: "The kitchen ___ cold in the morning.",
        options: ["usually has", "is usually", "usually be"],
        answer: 1,
        explain: "При be наречие usually обычно стоит после is."
      },
      {
        id: "en-g-frequency-position-never", kind: "choice",
        q: "I have ___ flown in a helicopter, so this is my first time.",
        options: ["often", "always", "never"],
        answer: 2,
        explain: "Это первый полёт. Never ставится между have и flown."
      },
      {
        id: "en-g-frequency-position-modal", kind: "reorder",
        tokens: ["You can", "always", "leave a message", "if nobody answers."],
        answer: "You can always leave a message if nobody answers.",
        explain: "После can перед leave можно поставить always."
      }
    ]
  });

  pack.config.TOPICS.grammar.push({ id: "duration-for-since", name: "Duration with for and since · B1", group: "Grammar topics" });
  GT.registerGrammar({
    id: "duration-for-since", level: "B1", title: "Длительность с for и since",
    summary: "Отличайте длину периода от его начальной точки.",
    explanation: "<p><b>For</b> вводит длительность, <b>since</b> — момент начала или придаточное о начале. Если состояние продолжается до настоящего момента, обычно нужен Present Perfect.</p><p><em>I have known Mira since we were children.</em> Глагол состояния <em>know</em> здесь употребляется в простой форме. Для завершённого периода подходит Past Simple с <em>for</em>.</p>",
    examples: [
      { t: "We've lived upstairs since September.", ru: "Мы живём этажом выше с сентября." },
      { t: "We lived upstairs for a year before we moved here.", ru: "До переезда сюда мы год жили этажом выше." }
    ],
    drills: [
      {
        id: "en-g-duration-for-since-start", kind: "choice",
        q: "I've had this number ___ 2019.",
        options: ["for", "since"],
        answer: 1,
        explain: "2019 — точка отсчёта."
      },
      {
        id: "en-g-duration-for-since-span", kind: "choice",
        q: "We've been waiting ___ half an hour.",
        options: ["since", "for"],
        answer: 1,
        explain: "Полчаса — длительность ожидания."
      },
      {
        id: "en-g-duration-for-since-clause", kind: "choice",
        q: "I haven't seen her ___ she moved away.",
        options: ["for", "since"],
        answer: 1,
        explain: "Придаточное сообщает, с какого события они не виделись."
      },
      {
        id: "en-g-duration-for-since-state", kind: "gap",
        q: "We have ___ each other for years. (know)",
        answer: "known",
        explain: "Know описывает состояние. После have нужно причастие known."
      }
    ]
  });

  pack.config.TOPICS.grammar.push({ id: "past-habitual", name: "Past habits with would · B2", group: "Grammar topics" });
  GT.registerGrammar({
    id: "past-habitual", level: "B2", title: "Привычки в прошлом с would",
    summary: "Отделяйте повторявшиеся события от длительных состояний.",
    explanation: "<p>Когда период прошлого уже установлен, <b>would + инфинитив</b> может описывать повторявшееся действие. <em>When we were children, we would race home after school.</em></p><p><b>Used to</b> подходит и для прошлых привычек, и для состояний, которые изменились. Для прежнего владения домом естественно <em>used to own</em>. Для единственного датированного события используйте Past Simple.</p>",
    examples: [
      { t: "During those summers, Grandpa would read to us every night.", ru: "В те летние каникулы дедушка каждый вечер читал нам вслух." },
      { t: "We used to own a small boat.", ru: "Раньше у нас была небольшая лодка." }
    ],
    drills: [
      {
        id: "en-g-past-habitual-action", kind: "gap",
        q: "On those winter evenings, Mum would ___ us stories. (tell)",
        answer: "tell",
        explain: "После would стоит инфинитив без to."
      },
      {
        id: "en-g-past-habitual-state", kind: "choice",
        q: "We ___ own this cottage. We sold it years ago.",
        options: ["would to", "used to", "used"],
        answer: 1,
        explain: "Владение было состоянием. Used to own выражает прежнее положение дел."
      },
      {
        id: "en-g-past-habitual-single", kind: "gap",
        q: "On 4 May 2018 we ___ the boat for the first and only time. (launch)",
        answer: "launched",
        explain: "Это единичное событие с датой. Нужен Past Simple."
      },
      {
        id: "en-g-past-habitual-did", kind: "choice",
        q: "Did your aunt ___ to live on this street?",
        options: ["used", "uses", "use"],
        answer: 2,
        explain: "В вопросе прошедшее время уже выражено формой did. На письме обычно use to."
      }
    ]
  });

})();
