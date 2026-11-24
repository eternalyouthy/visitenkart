/* German GRAMMAR · C1 · Extended participle attributes (erweiterte Partizipialattribute).
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'partizipattribut',
  level: 'C1',
  title: { ru: 'Распространённое причастное определение', en: 'Extended participle attributes' },
  summary: {
    ru: 'die seit Jahren steigenden Mieten, der vom Team entwickelte Prototyp — как читать «зажатые» между артиклем и существительным группы.',
    en: 'die seit Jahren steigenden Mieten, der vom Team entwickelte Prototyp — reading phrases packed between article and noun.'
  },
  explanation: {
    ru: '<p>В научных, юридических и газетных текстах относительное придаточное часто «сворачивают» в определение <b>перед существительным</b>. Всё, что относится к причастию, стоит между артиклем и существительным:</p>' +
      '<p><em>die Mieten, <b>die seit Jahren steigen</b></em> → <em>die <b>seit Jahren steigenden</b> Mieten</em></p>' +
      '<p><em>der Prototyp, <b>der vom Team entwickelt wurde</b></em> → <em>der <b>vom Team entwickelte</b> Prototyp</em></p>' +
      '<ul>' +
      '<li><b>Partizip I</b> (инфинитив + d) — активное, одновременное действие: <em>steigend, wachsend, fehlend</em>.</li>' +
      '<li><b>Partizip II</b> — пассивное или завершённое: <em>entwickelt, genannt, angekommen</em>.</li>' +
      '<li><b>zu + Partizip I</b> — «который нужно/можно»: <em>die <b>zu erledigenden</b> Aufgaben</em> = задачи, которые нужно выполнить.</li>' +
      '</ul>' +
      '<p><b>Как читать:</b> увидев артикль, ищите его существительное — оно после причастия. Затем читайте группу с конца: <em>der [im letzten Jahr von der Regierung beschlossene] Plan</em> → «план, принятый правительством в прошлом году».</p>',
    en: '<p>Academic, legal and news texts often fold a relative clause into an attribute <b>before the noun</b>. Everything belonging to the participle sits between the article and the noun:</p>' +
      '<p><em>die Mieten, <b>die seit Jahren steigen</b></em> → <em>die <b>seit Jahren steigenden</b> Mieten</em> (“the rents that have been rising for years”)</p>' +
      '<p><em>der Prototyp, <b>der vom Team entwickelt wurde</b></em> → <em>der <b>vom Team entwickelte</b> Prototyp</em> (“the prototype developed by the team”)</p>' +
      '<ul>' +
      '<li><b>Partizip I</b> (infinitive + d) — active, simultaneous: <em>steigend, wachsend, fehlend</em> (≈ English -ing).</li>' +
      '<li><b>Partizip II</b> — passive or completed: <em>entwickelt, genannt, angekommen</em> (≈ English -ed).</li>' +
      '<li><b>zu + Partizip I</b> — “to be done”: <em>die <b>zu erledigenden</b> Aufgaben</em> = the tasks to be done.</li>' +
      '</ul>' +
      '<p><b>How to read it:</b> when you see an article, look for its noun — it comes after the participle. Then read the block from the end: <em>der [im letzten Jahr von der Regierung beschlossene] Plan</em> → “the plan passed by the government last year”. English puts this information after the noun.</p>'
  },
  tables: [
    {
      caption: { ru: 'Придаточное → определение', en: 'Relative clause → attribute' },
      head: { ru: ['Относительное придаточное', 'Причастное определение'], en: ['Relative clause', 'Participle attribute'] },
      deCols: [0, 1],
      rows: [
        ['das Kind, das schläft', 'das schlafende Kind'],
        ['die Kosten, die ständig steigen', 'die ständig steigenden Kosten'],
        ['der Brief, der gestern geschickt wurde', 'der gestern geschickte Brief'],
        ['die Gäste, die spät angekommen sind', 'die spät angekommenen Gäste'],
        ['die Probleme, die gelöst werden müssen', 'die zu lösenden Probleme']
      ]
    }
  ],
  examples: [
    { de: 'Die [[seit Jahren steigenden]] Mieten belasten viele Familien.', ru: 'Растущая годами арендная плата тяжела для многих семей.', en: 'Rents that have been rising for years are a burden for many families.' },
    { de: 'Der [[vom Team entwickelte]] Prototyp wird nächste Woche getestet.', ru: 'Прототип, разработанный командой, протестируют на следующей неделе.', en: 'The prototype developed by the team will be tested next week.' },
    { de: 'Die [[noch zu klärenden]] Fragen besprechen wir morgen.', ru: 'Вопросы, которые ещё нужно прояснить, обсудим завтра.', en: 'We’ll discuss the questions still to be clarified tomorrow.' },
    { de: 'Die [[am Wochenende angekommenen]] Gäste bleiben bis Montag.', ru: 'Гости, приехавшие в выходные, останутся до понедельника.', en: 'The guests who arrived at the weekend are staying until Monday.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Окончание прилагательного обязательно', en: 'The adjective ending is required' },
      html: {
        ru: 'Причастие склоняется как прилагательное: <span class="right">der entwickelte Prototyp, mit dem entwickelten Prototyp</span>. <span class="wrong">der entwickelt Prototyp</span> — ошибка.',
        en: 'The participle declines like an adjective: <span class="right">der entwickelte Prototyp, mit dem entwickelten Prototyp</span>. <span class="wrong">der entwickelt Prototyp</span> is wrong.'
      }
    },
    {
      title: { ru: 'Partizip I или II', en: 'Partizip I or II' },
      html: {
        ru: '<span class="right">die wachsende Stadt</span> — город растёт сам; <span class="right">die gewachsene Stadt</span> — город уже вырос. <span class="right">der geschriebene Text</span> — текст написали (пассив).',
        en: '<span class="right">die wachsende Stadt</span> — the growing city; <span class="right">die gewachsene Stadt</span> — the city that has grown. <span class="right">der geschriebene Text</span> — the written text (passive).'
      }
    }
  ],
  drills: [
    {
      id: 'g-pt-d1', kind: 'choice',
      q: 'die Preise, die ständig steigen → die ständig ___ Preise',
      options: ['steigenden', 'gestiegenen', 'steigende'],
      answer: 0,
      explain: { ru: 'Одновременно, активно → Partizip I; после die во мн. ч. → -en.', en: 'Simultaneous, active → Partizip I; after plural die → -en.' }
    },
    {
      id: 'g-pt-d2', kind: 'choice',
      q: 'der Vertrag, der gestern unterschrieben wurde → der gestern ___ Vertrag',
      options: ['unterschreibende', 'unterschriebene', 'unterschriebenen'],
      answer: 1,
      explain: { ru: 'Пассив → Partizip II; der + Nom. м. р. → -e.', en: 'Passive → Partizip II; der + masc. nominative → -e.' }
    },
    {
      id: 'g-pt-d3', kind: 'gap',
      q: 'die Aufgaben, die erledigt werden müssen → die zu ___ Aufgaben (erledigen)',
      answer: 'erledigenden',
      explain: { ru: 'zu + Partizip I: zu erledigenden.', en: 'zu + Partizip I: zu erledigenden.' }
    },
    {
      id: 'g-pt-d4', kind: 'choice',
      q: '„Der im Mai eröffnete Laden“ bedeutet:',
      options: ['Der Laden, der im Mai eröffnet wurde.', 'Der Laden, der im Mai eröffnet.', 'Der Laden, der im Mai eröffnen wird.'],
      answer: 0,
      explain: { ru: 'Partizip II → пассив, прошлое.', en: 'Partizip II → passive, past.' }
    },
    {
      id: 'g-pt-d5', kind: 'gap',
      q: 'die Kinder, die im Garten spielen → die im Garten ___ Kinder (spielen)',
      answer: 'spielenden',
      explain: { ru: 'Активно, одновременно → Partizip I; die + мн. ч. → -en.', en: 'Active, simultaneous → Partizip I; die + plural → -en.' }
    },
    {
      id: 'g-pt-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Ответы, полученные вчера, были полезными».', en: 'Build the sentence. “The answers received yesterday were useful.”' },
      tokens: ['Die', 'gestern', 'erhaltenen', 'Antworten', 'waren', 'hilfreich.'],
      answer: 'Die gestern erhaltenen Antworten waren hilfreich.',
      explain: { ru: 'Всё, что относится к причастию, — между артиклем и существительным.', en: 'Everything belonging to the participle goes between article and noun.' }
    }
  ]
});
