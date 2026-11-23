/* RUSSIAN GRAMMAR — Genitive: absence, quantity and origin. */
GT.registerGrammar({
  id: 'genitive',
  title: { en: "Genitive: absence, quantity and origin", de: "Genitiv: Fehlen, Menge und Herkunft" },
  summary: { en: "Form the genitive after нет, for quantities, and after из, с and от.", de: "Bilde den Genitiv nach нет, bei Mengenangaben und nach из, с und от." },
  explanation: {
    en: "<p>The <b>genitive</b> often marks what is absent (нет воды), a relationship (ключ от квартиры, дверь комнаты) or an amount (стакан воды, много книг).</p>" +
        "<p>For origin, use <b>из</b> with a source expressed by в (в магазин → из магазина), <b>с</b> with one expressed by на (на работу → с работы), and <b>от</b> for a person or point you move away from (от врача).</p>" +
        "<p>In simple counting phrases: два билета, пять билетов. Genitive plural endings vary: -ов, -ей, and zero are common.</p>",
    de: "<p>Der <b>Genitiv</b> bezeichnet unter anderem Fehlendes (нет воды), eine Beziehung (ключ от квартиры, дверь комнаты) oder eine Menge (стакан воды, много книг).</p>" +
        "<p>Für die Herkunft steht <b>из</b> bei einem mit в bezeichneten Ort (в магазин → из магазина), <b>с</b> bei einem Ort mit на (на работу → с работы) und <b>от</b> bei einer Person oder einem Ausgangspunkt (от врача).</p>" +
        "<p>In einfachen Zahlwortgruppen: два билета, пять билетов. Häufige Genitiv-Pluralendungen sind -ов, -ей und die Nullendung.</p>"
  },
  tables: [{
    caption: { en: "Common noun forms", de: "Häufige Substantivformen" },
    head: { en: ["Nominative","Genitive singular","Genitive plural"], de: ["Nominativ","Genitiv Singular","Genitiv Plural"] },
    deCols: [0,1,2],
    rows: [
        ["бил+ет","бил+ета","бил+етов"],
        ["кн+ига","кн+иги","книг"],
        ["окн+о","окн+а","+окон"],
        ["дв+ерь","дв+ери","двер+ей"]
    ]
  }],
  examples: [
    { t: "У мен+я нет [[бил+ета]].", en: "I don’t have a ticket.", de: "Ich habe keine Fahrkarte." },
    { t: "Он+а верн+улась [[с раб+оты]].", en: "She came back from work.", de: "Sie ist von der Arbeit zurückgekommen." },
    { t: "Возьм+и бут+ылку [[вод+ы]].", en: "Take a bottle of water.", de: "Nimm eine Flasche Wasser mit." }
  ],
  pitfalls: [
    { title: { en: "Possessor follows the noun", de: "Der Besitzer steht nach dem Substantiv" },
      html: { en: "In <em>телефон брата</em>, брат changes to брата; телефон is the noun you are identifying.", de: "In <em>телефон брата</em> wird брат zu брата; телефон ist das Bezugswort." } },
    { title: { en: "Choose the preposition with the source", de: "Die Präposition richtet sich nach dem Ausgangspunkt" },
      html: { en: "Memorise pairs like <em>на вокзал → с вокзала</em> and <em>в офис → из офиса</em>.", de: "Lerne Paare wie <em>на вокзал → с вокзала</em> und <em>в офис → из офиса</em>." } }
  ],
  drills: [
    {
      id: 'ru-g-genitive-1', kind: 'choice', q: "У нас нет ___.",
      options: ["бил+ет","бил+ета","бил+ету"], answer: 1,
      explain: { en: "нет takes the genitive.", de: "Nach нет steht der Genitiv." }
    },
    {
      id: 'ru-g-genitive-2', kind: 'choice', q: "Мы в+ышли ___ магаз+ина.",
      options: ["из","на","к"], answer: 0,
      explain: { en: "Use из for coming out of a shop.", de: "Für die Bewegung aus dem Geschäft steht из." }
    },
    {
      id: 'ru-g-genitive-3', kind: 'choice', q: "На стол+е пять ___.",
      options: ["ч+ашка","ч+ашки","ч+ашек"], answer: 2,
      explain: { en: "After пять, use the genitive plural чашек.", de: "Nach пять steht der Genitiv Plural чашек." }
    },
    {
      id: 'ru-g-genitive-4', kind: 'choice', q: "Мы верн+улись с ___.",
      options: ["раб+оте","раб+оту","раб+оты"], answer: 2,
      explain: { en: "с работы uses the genitive and names the starting point.", de: "с работы steht im Genitiv und bezeichnet den Ausgangspunkt." }
    },
    {
      id: 'ru-g-genitive-5', kind: 'gap', q: "У нег+о нет ___. (ключ)",
      answer: "ключ+а",
      hint: { en: "Put ключ in the genitive singular.", de: "Setze ключ in den Genitiv Singular." },
      explain: { en: "ключ adds -а.", de: "ключ bekommt die Endung -а." }
    },
    {
      id: 'ru-g-genitive-6', kind: 'gap', q: "Д+айте, пож+алуйста, стак+ан ___. (вод+а)",
      answer: "вод+ы",
      hint: { en: "Inflect the substance being measured.", de: "Dekliniere die Stoffbezeichnung." },
      explain: { en: "The measured substance takes the genitive.", de: "Die Stoffbezeichnung steht im Genitiv." }
    },
    {
      id: 'ru-g-genitive-7', kind: 'gap', q: "Я жду письм+а от ___. (сестр+а)",
      answer: "сестр+ы",
      hint: { en: "Put сестра in the genitive singular.", de: "Setze сестра in den Genitiv Singular." },
      explain: { en: "от takes the genitive.", de: "от steht mit Genitiv." }
    },
    {
      id: 'ru-g-genitive-8', kind: 'gap', q: "Мы куп+или два ___. (бил+ет)",
      answer: "бил+ета",
      hint: { en: "Which form follows два here?", de: "Welche Form folgt hier auf два?" },
      explain: { en: "In this construction два takes the genitive singular.", de: "In dieser Konstruktion steht nach два der Genitiv Singular." }
    }
  ]
});
