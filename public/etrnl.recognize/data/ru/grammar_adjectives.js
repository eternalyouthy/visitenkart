/* RUSSIAN GRAMMAR — Adjective agreement and declension. */
GT.registerGrammar({
  id: 'adjectives',
  title: { en: "Adjective agreement and declension", de: "Kongruenz und Deklination der Adjektive" },
  summary: { en: "Match the full adjective to the noun’s gender, number and case.", de: "Passe die Langform des Adjektivs an Genus, Numerus und Kasus des Substantivs an." },
  explanation: {
    en: "<p>A full adjective agrees with its noun in <b>gender, number and case</b>: <em>новый дом, новая квартира, новое здание, новые дома</em>. Change both words when the construction requires another case: <em>в новой квартире, из нового дома</em>.</p>" +
        "<p>In the masculine singular and in the plural, an <b>animate</b> direct object uses the genitive forms for the accusative (<em>вижу нового студента / новых студентов</em>). An inanimate direct object uses the nominative forms (<em>вижу новый дом / новые дома</em>).</p>" +
        "<p>The table uses the hard-stem adjective <em>новый</em>. Compare a soft-stem adjective: <em>синий → синяя, синее, синие</em>.</p>",
    de: "<p>Die Langform des Adjektivs stimmt in <b>Genus, Numerus und Kasus</b> mit dem Substantiv überein: <em>новый дом, новая квартира, новое здание, новые дома</em>. Wenn die Konstruktion einen anderen Kasus verlangt, ändern sich beide Wörter: <em>в новой квартире, из нового дома</em>.</p>" +
        "<p>Im Maskulinum Singular und im Plural hat ein <b>belebtes</b> direktes Objekt im Akkusativ die Genitivformen (<em>вижу нового студента / новых студентов</em>). Ein unbelebtes direktes Objekt hat die Nominativformen (<em>вижу новый дом / новые дома</em>).</p>" +
        "<p>Die Tabelle zeigt das Adjektiv <em>новый</em> mit hartem Stamm. Zum Vergleich ein weicher Stamm: <em>синий → синяя, синее, синие</em>.</p>"
  },
  tables: [{
    caption: { en: "Full forms of новый", de: "Langformen von новый" },
    head: { en: ["Case","Masculine singular","Feminine singular","Neuter singular","Plural"], de: ["Kasus","Maskulinum Singular","Femininum Singular","Neutrum Singular","Plural"] },
    deCols: [1,2,3,4],
    rows: {
      en: [
        ["Nominative","н+овый","н+овая","н+овое","н+овые"],
        ["Genitive","н+ового","н+овой","н+ового","н+овых"],
        ["Dative","н+овому","н+овой","н+овому","н+овым"],
        ["Accusative","н+овый / н+ового","н+овую","н+овое","н+овые / н+овых"],
        ["Instrumental","н+овым","н+овой","н+овым","н+овыми"],
        ["Prepositional","н+овом","н+овой","н+овом","н+овых"]
      ],
      de: [
        ["Nominativ","н+овый","н+овая","н+овое","н+овые"],
        ["Genitiv","н+ового","н+овой","н+ового","н+овых"],
        ["Dativ","н+овому","н+овой","н+овому","н+овым"],
        ["Akkusativ","н+овый / н+ового","н+овую","н+овое","н+овые / н+овых"],
        ["Instrumental","н+овым","н+овой","н+овым","н+овыми"],
        ["Präpositiv","н+овом","н+овой","н+овом","н+овых"]
      ]
    }
  }],
  examples: [
    { t: "Мы ищ+ем [[н+овую кварт+иру]].", en: "We’re looking for a new flat.", de: "Wir suchen eine neue Wohnung." },
    { t: "Я ув+идел [[н+ового студ+ента]].", en: "I saw a new student.", de: "Ich habe einen neuen Studenten gesehen." },
    { t: "Он+и жив+ут [[в н+овом д+оме]].", en: "They live in a new house.", de: "Sie wohnen in einem neuen Haus." }
  ],
  pitfalls: [
    { title: { en: "Inanimate and animate forms in the plural", de: "Unbelebte und belebte Formen im Plural" },
      html: { en: "Compare <em>купи́ли но́вые сту́лья</em> and <em>встре́тили но́вых сосе́дей</em>.", de: "Vergleiche <em>купи́ли но́вые сту́лья</em> und <em>встре́тили но́вых сосе́дей</em>." } },
    { title: { en: "Same adjective ending, different cases", de: "Gleiche Adjektivendung, verschiedene Kasus" },
      html: { en: "<em>Новой</em> appears in <em>из новой квартиры</em> and <em>в новой квартире</em>. The preposition and the noun help identify the case.", de: "<em>Новой</em> steht in <em>из новой квартиры</em> und <em>в новой квартире</em>. Präposition und Substantiv helfen, den Kasus zu erkennen." } }
  ],
  drills: [
    {
      id: 'ru-g-adjectives-1', kind: 'choice', q: "+Это ___ кварт+ира.",
      options: ["н+овое","н+овая","н+овый"], answer: 1,
      explain: { en: "квартира is feminine singular.", de: "квартира ist feminin und steht im Singular." }
    },
    {
      id: 'ru-g-adjectives-2', kind: 'choice', q: "Я в+ижу ___ дом.",
      options: ["н+ового","н+овым","н+овый"], answer: 2,
      explain: { en: "Masculine singular and inanimate: the accusative matches the nominative.", de: "Maskulinum Singular und unbelebt: Der Akkusativ entspricht dem Nominativ." }
    },
    {
      id: 'ru-g-adjectives-3', kind: 'choice', q: "Мы ждём ___ колл+ег.",
      options: ["н+овых","н+овые","н+овым"], answer: 0,
      explain: { en: "Animate plural: the accusative forms match the genitive.", de: "Belebter Plural: Die Akkusativformen entsprechen dem Genitiv." }
    },
    {
      id: 'ru-g-adjectives-4', kind: 'choice', q: "Он живёт в ___ д+оме.",
      options: ["н+овому","н+овом","н+овый"], answer: 1,
      explain: { en: "The location uses the prepositional.", de: "Die Ortsangabe steht im Präpositiv." }
    },
    {
      id: 'ru-g-adjectives-5', kind: 'gap', q: "Мы сн+яли ___ кварт+иру. (н+овый)",
      answer: "н+овую",
      hint: { en: "Agree with the feminine accusative noun.", de: "Passe das Adjektiv an den Akkusativ Femininum an." },
      explain: { en: "Feminine singular accusative ends in -ую here.", de: "Der Akkusativ Femininum Singular endet hier auf -ую." }
    },
    {
      id: 'ru-g-adjectives-6', kind: 'gap', q: "Кн+ига леж+ит на ___ стол+е. (больш+ой)",
      answer: "больш+ом",
      hint: { en: "Use the masculine prepositional.", de: "Verwende den Präpositiv Maskulinum." },
      explain: { en: "This masculine prepositional form ends in -ом.", de: "Die maskuline Präpositivform endet hier auf -ом." }
    },
    {
      id: 'ru-g-adjectives-7', kind: 'gap', q: "Мне нр+авятся ___ +окна. (с+иний)",
      answer: "с+иние",
      hint: { en: "Use nominative plural.", de: "Verwende den Nominativ Plural." },
      explain: { en: "окна is the plural subject here; синий has the plural form синие.", de: "окна ist hier das Subjekt im Plural; der Plural von синий lautet синие." }
    },
    {
      id: 'ru-g-adjectives-8', kind: 'gap', q: "Я позвон+ю ___ сос+еду. (н+овый)",
      answer: "н+овому",
      hint: { en: "Agree with the masculine dative noun.", de: "Passe das Adjektiv an den Dativ Maskulinum an." },
      explain: { en: "The masculine singular dative form is новому.", de: "Der Dativ Maskulinum Singular lautet новому." }
    }
  ]
});
