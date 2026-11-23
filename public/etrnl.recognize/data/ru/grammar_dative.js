/* RUSSIAN GRAMMAR — Dative: recipients and experiencers. */
GT.registerGrammar({
  id: 'dative',
  title: { en: "Dative: recipients and experiencers", de: "Dativ: Empfänger und persönliches Empfinden" },
  summary: { en: "Use the dative for a recipient, with certain verbs and in expressions such as мне холодно.", de: "Verwende den Dativ für Empfänger, bei bestimmten Verben und in Ausdrücken wie мне холодно." },
  explanation: {
    en: "<p>Use the <b>dative</b> for a recipient: <em>Я дал сестре ключ</em>. The thing given is the direct object, and the recipient is in the dative. Some verbs govern it directly: <em>помогать, звонить, доверять</em>.</p>" +
        "<p>The dative also identifies who experiences something (<em>мне холодно, ей нравится фильм</em>) and who is a certain age (<em>ему двадцать лет</em>). The preposition <b>к</b> uses the dative for movement towards someone or something.</p>",
    de: "<p>Der <b>Dativ</b> bezeichnet den Empfänger: <em>Я дал сестре ключ</em>. Das Übergebene ist das direkte Objekt, der Empfänger steht im Dativ. Einige Verben verlangen direkt den Dativ: <em>помогать, звонить, доверять</em>.</p>" +
        "<p>Der Dativ bezeichnet auch die Person, die etwas empfindet (<em>мне холодно, ей нравится фильм</em>) oder ein bestimmtes Alter hat (<em>ему двадцать лет</em>). Die Präposition <b>к</b> verlangt den Dativ und bezeichnet eine Bewegung auf jemanden oder etwas zu.</p>"
  },
  tables: [{
    caption: { en: "Common noun and pronoun forms", de: "Häufige Substantiv- und Pronomenformen" },
    head: { en: ["Nominative","Dative"], de: ["Nominativ","Dativ"] },
    deCols: [0,1],
    rows: [
        ["др+уг","др+угу"],
        ["сестр+а","сестр+е"],
        ["дв+ерь","дв+ери"],
        ["друзь+я","друзь+ям"],
        ["я / ты","мне / теб+е"],
        ["он / он+а","ем+у / ей"]
    ]
  }],
  examples: [
    { t: "Я отправл+ю [[сестр+е]] фотогр+афию.", en: "I’ll send my sister a photo.", de: "Ich schicke meiner Schwester ein Foto." },
    { t: "[[Мне]] нр+авится +этот фильм.", en: "I like this film.", de: "Mir gefällt dieser Film." },
    { t: "З+автра ид+у [[к врач+у]].", en: "I’m going to the doctor tomorrow.", de: "Ich gehe morgen zum Arzt." }
  ],
  pitfalls: [
    { title: { en: "The thing liked controls agreement", de: "Was gefällt, bestimmt den Numerus" },
      html: { en: "Compare <em>мне нравится фильм</em> and <em>мне нравятся фильмы</em>. The dative remains <em>мне</em>.", de: "Vergleiche <em>мне нравится фильм</em> und <em>мне нравятся фильмы</em>. Der Dativ bleibt <em>мне</em>." } },
    { title: { en: "Use н- after к with third-person pronouns", de: "Nach к steht н- beim Pronomen der dritten Person" },
      html: { en: "Say <em>к нему</em>, <em>к ней</em>, <em>к ним</em>. Without к: <em>ему</em>, <em>ей</em>, <em>им</em>.", de: "Beispiele mit к: <em>к нему</em>, <em>к ней</em>, <em>к ним</em>. Ohne к: <em>ему</em>, <em>ей</em>, <em>им</em>." } }
  ],
  drills: [
    {
      id: 'ru-g-dative-1', kind: 'choice', q: "Я позвон+ю ___ п+осле об+еда.",
      options: ["сестр+у","сестр+е","сестр+ой"], answer: 1,
      explain: { en: "Позвонить governs the dative of the person called.", de: "Позвонить verlangt den Dativ der angerufenen Person." }
    },
    {
      id: 'ru-g-dative-2', kind: 'choice', q: "___ х+олодно. Закр+ой окн+о.",
      options: ["Я","Мен+я","Мне"], answer: 2,
      explain: { en: "Use мне to identify who feels cold.", de: "Мне bezeichnet die Person, der kalt ist." }
    },
    {
      id: 'ru-g-dative-3', kind: 'choice', q: "З+автра я ид+у к ___.",
      options: ["врач+у","врач+а","врач+ом"], answer: 0,
      explain: { en: "к takes the dative.", de: "к verlangt den Dativ." }
    },
    {
      id: 'ru-g-dative-4', kind: 'choice', q: "Мне ___ +эти песн+и.",
      options: ["нр+авятся","нр+авится"], answer: 0,
      explain: { en: "The plural subject эти песни requires нравятся.", de: "Zum Pluralsubjekt эти песни gehört нравятся." }
    },
    {
      id: 'ru-g-dative-5', kind: 'gap', q: "Я дал ключ ___. (сос+ед)",
      answer: "сос+еду",
      hint: { en: "Inflect the recipient.", de: "Dekliniere den Empfänger." },
      explain: { en: "сосед takes -у here.", de: "сосед bekommt hier die Endung -у." }
    },
    {
      id: 'ru-g-dative-6', kind: 'gap', q: "Я довер+яю ___. (он+а)",
      answer: "ей",
      hint: { en: "Use the dative form of она.", de: "Setze она in den Dativ." },
      explain: { en: "The dative of она is ей.", de: "Der Dativ von она lautet ей." }
    },
    {
      id: 'ru-g-dative-7', kind: 'gap', q: "Мы пришл+и к ___. (он)",
      answer: "нем+у",
      hint: { en: "Use the pronoun after к.", de: "Setze das passende Pronomen nach к ein." },
      explain: { en: "к нему combines к with the dative form in н-.", de: "Nach к steht die Dativform mit н-: к нему." }
    },
    {
      id: 'ru-g-dative-8', kind: 'gap', q: "Я звон+ю ___. (друзь+я)",
      answer: "друзь+ям",
      hint: { en: "Use the plural dative.", de: "Verwende den Dativ Plural." },
      explain: { en: "друзья → друзьям.", de: "друзья → друзьям." }
    }
  ]
});
