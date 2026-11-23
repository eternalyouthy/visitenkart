/* RUSSIAN WORD FAMILY -ЗНА-. */
GT.registerRoot({
  id: 'зна', verb: "зн+ать", t: "зн+ать", label: '-ЗНА-',
  en: "to know", de: "wissen, kennen",
  note: {
    en: "Знать describes an existing state of knowledge. Узнавать → узнать describes finding something out or recognising someone. The forms are related, but узнать is paired with узнавать in these meanings.",
    de: "Знать beschreibt vorhandenes Wissen. Узнавать → узнать bedeutet, etwas zu erfahren oder jemanden wiederzuerkennen. In diesen Bedeutungen bildet узнать sein Aspektpaar mit узнавать."
  },
  words: [
    {
      id: 'ru-r-zna-znat', base: true, core: true, pos: 'verb', aspect: 'impf', level: 'A2', t: "зн+ать",
      forms: { praes: "зн+аю, зн+аешь", praet: "зн+ал" },
      en: "to know (a fact, a person or a place)", de: "wissen; kennen",
      examples: [{ t: "Я [[зн+аю]], где он живёт.", en: "I know where he lives.", de: "Ich weiß, wo er wohnt." }]
    },
    {
      id: 'ru-r-zna-uznavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "узнав+ать", prefix: 'у',
      forms: { praes: "узна+ю, узнаёшь", praet: "узнав+ал", perf: "pf. узн+ать (узн+аю, узн+аешь)" },
      en: "to find out; to recognise", de: "erfahren, herausfinden; wiedererkennen",
      examples: [{ t: "Я ср+азу [[узн+ал]] её по г+олосу.", en: "I recognised her by her voice right away.", de: "Ich habe sie sofort an ihrer Stimme erkannt." }]
    },
    {
      id: 'ru-r-zna-priznavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "признав+ать", prefix: 'при',
      forms: { praes: "призна+ю, признаёшь", praet: "признав+ал", perf: "pf. призн+ать (призн+аю, призн+аешь)" },
      en: "to acknowledge, admit; to recognise officially", de: "eingestehen; anerkennen",
      examples: [{ t: "Он [[призн+ал]] сво+ю ош+ибку.", en: "He admitted his mistake.", de: "Er hat seinen Fehler eingestanden." }]
    },
    {
      id: 'ru-r-zna-raspoznavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "распознав+ать",
      forms: { praes: "распозна+ю, распознаёшь", praet: "распознав+ал", perf: "pf. распозн+ать (распозн+аю, распозн+аешь)" },
      en: "to identify, recognise", de: "erkennen, identifizieren",
      examples: [{ t: "Прогр+амма [[распознаёт]] речь.", en: "The software recognises speech.", de: "Die Software erkennt Sprache." }]
    },
    {
      id: 'ru-r-zna-poznavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "познав+ать", prefix: 'по',
      forms: { praes: "позна+ю, познаёшь", praet: "познав+ал", perf: "pf. позн+ать (позн+аю, позн+аешь)" },
      en: "to get to know, discover through experience", de: "kennenlernen, entdecken",
      examples: [{ t: "Д+ети [[позна+ют]] мир ч+ерез игр+у.", en: "Children discover the world through play.", de: "Kinder entdecken die Welt beim Spielen." }]
    },
    {
      id: 'ru-r-zna-znanie', pos: 'noun', gender: 'n', level: 'B1', t: "зн+ание",
      en: "knowledge", de: "das Wissen; die Kenntnis",
      examples: [{ t: "Для раб+оты н+ужно [[зн+ание]] нем+ецкого язык+а.", en: "The job requires knowledge of German.", de: "Für die Stelle braucht man Deutschkenntnisse." }]
    },
    {
      id: 'ru-r-zna-neznanie', pos: 'noun', gender: 'n', level: 'B1', t: "незн+ание",
      en: "lack of knowledge, ignorance", de: "die Unkenntnis",
      examples: [{ t: "Он сосл+ался на [[незн+ание]] пр+авил.", en: "He said he hadn’t known the rules.", de: "Er berief sich darauf, die Regeln nicht gekannt zu haben." }]
    },
    {
      id: 'ru-r-zna-znatok', pos: 'noun', gender: 'm', level: 'B1', t: "знат+ок",
      en: "expert, connoisseur", de: "der Kenner",
      examples: [{ t: "Он [[знат+ок]] р+усской литерат+уры.", en: "He’s an expert on Russian literature.", de: "Er ist ein Kenner der russischen Literatur." }]
    }
  ]
});
