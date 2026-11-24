/* RUSSIAN GRAMMAR — Instrumental: tools, company and roles. */
GT.registerGrammar({
  id: 'instrumental',
  title: { en: "Instrumental: tools, company and roles", de: "Instrumental: Mittel, Begleitung und Rollen" },
  summary: { en: "Describe what you use, who is with you and what role someone has.", de: "Beschreibe das verwendete Mittel, die Begleitung und die Rolle einer Person." },
  explanation: {
    en: "<p>Use the <b>instrumental</b> without a preposition for a tool or means (<em>писать ручкой, ехать поездом</em>). Use <b>с + instrumental</b> for company or an accompaniment (<em>с другом, чай с лимоном</em>).</p>" +
        "<p>The instrumental also names roles with <em>работать</em> and <em>стать</em>: <em>работать врачом</em>. Several verbs govern it, including <em>заниматься спортом</em> and <em>интересоваться музыкой</em>.</p>",
    de: "<p>Der <b>Instrumental</b> ohne Präposition bezeichnet ein Werkzeug oder Mittel (<em>писать ручкой, ехать поездом</em>). <b>с + Instrumental</b> bezeichnet Begleitung oder eine Zugabe (<em>с другом, чай с лимоном</em>).</p>" +
        "<p>Bei <em>работать</em> und <em>стать</em> bezeichnet der Instrumental auch eine Rolle: <em>работать врачом</em>. Einige Verben verlangen diesen Kasus, etwa <em>заниматься спортом</em> und <em>интересоваться музыкой</em>.</p>"
  },
  tables: [{
    caption: { en: "Common noun forms", de: "Häufige Substantivformen" },
    head: { en: ["Nominative","Instrumental singular","Instrumental plural"], de: ["Nominativ","Instrumental Singular","Instrumental Plural"] },
    deCols: [0,1,2],
    rows: [
        ["врач","врач+ом","врач+ами"],
        ["р+учка","р+учкой","р+учками"],
        ["м+оре","м+орем","мор+ями"],
        ["дв+ерь","дв+ерью","двер+ями"]
    ]
  }],
  examples: [
    { t: "Мы +едем [[п+оездом]].", en: "We’re travelling by train.", de: "Wir fahren mit dem Zug." },
    { t: "Он живёт [[с сёстрами]].", en: "He lives with his sisters.", de: "Er wohnt mit seinen Schwestern zusammen." },
    { t: "Он+а раб+отает [[врач+ом]].", en: "She works as a doctor.", de: "Sie arbeitet als Ärztin." }
  ],
  pitfalls: [
    { title: { en: "Tools and company use different constructions", de: "Mittel und Begleitung haben verschiedene Konstruktionen" },
      html: { en: "Compare <em>писать ручкой</em> (tool) and <em>идти с другом</em> (company).", de: "Vergleiche <em>писать ручкой</em> (Werkzeug) und <em>идти с другом</em> (Begleitung)." } },
    { title: { en: "The case after с changes with the meaning", de: "Die Bedeutung bestimmt den Kasus nach с" },
      html: { en: "Compare <em>с работы</em> (from work, genitive) and <em>с коллегой</em> (with a colleague, instrumental).", de: "Vergleiche <em>с работы</em> (von der Arbeit, Genitiv) und <em>с коллегой</em> (mit einem Kollegen, Instrumental)." } }
  ],
  drills: [
    {
      id: 'ru-g-instrumental-1', kind: 'choice', q: "Я пиш+у ___.",
      options: ["р+учку","р+учкой","р+учке"], answer: 1,
      explain: { en: "A writing tool takes the instrumental without a preposition.", de: "Das Schreibwerkzeug steht ohne Präposition im Instrumental." }
    },
    {
      id: 'ru-g-instrumental-2', kind: 'choice', q: "Хоч+у ч+ай с ___.",
      options: ["лим+она","лим+он","лим+оном"], answer: 2,
      explain: { en: "An accompaniment uses с and the instrumental.", de: "Eine Zugabe steht mit с und Instrumental." }
    },
    {
      id: 'ru-g-instrumental-3', kind: 'choice', q: "Он раб+отает ___.",
      options: ["врач+ом","врач+у","врач+а"], answer: 0,
      explain: { en: "Работать as someone takes the instrumental.", de: "Nach работать steht die Berufsbezeichnung im Instrumental." }
    },
    {
      id: 'ru-g-instrumental-4', kind: 'choice', q: "Мы +едем ___.",
      options: ["п+оезда","п+оездом"], answer: 1,
      explain: { en: "The means of transport takes the instrumental here.", de: "Das Verkehrsmittel steht hier im Instrumental." }
    },
    {
      id: 'ru-g-instrumental-5', kind: 'gap', q: "Он+а заним+ается ___. (сп+орт)",
      answer: "сп+ортом",
      hint: { en: "Which case does заниматься govern?", de: "Welchen Kasus verlangt заниматься?" },
      explain: { en: "заниматься + instrumental.", de: "заниматься + Instrumental." }
    },
    {
      id: 'ru-g-instrumental-6', kind: 'gap', q: "Я ид+у в кин+о с ___. (друг)",
      answer: "др+угом",
      hint: { en: "Express company with с.", de: "Drücke die Begleitung mit с aus." },
      explain: { en: "с + instrumental for company.", de: "с + Instrumental für die Begleitung." }
    },
    {
      id: 'ru-g-instrumental-7', kind: 'gap', q: "Он ст+ал ___. (инжен+ер)",
      answer: "инжен+ером",
      hint: { en: "Inflect the new role after стал.", de: "Dekliniere die neue Rolle nach стал." },
      explain: { en: "стать + instrumental for a new role.", de: "Nach стать steht die neue Rolle im Instrumental." }
    },
    {
      id: 'ru-g-instrumental-8', kind: 'gap', q: "Я закр+ыл дв+ерь ___. (кл+юч)",
      answer: "ключ+ом",
      hint: { en: "Inflect the tool.", de: "Dekliniere das Werkzeug." },
      explain: { en: "The tool is ключом, with no preposition.", de: "Das Werkzeug steht als ключом ohne Präposition." }
    }
  ]
});
