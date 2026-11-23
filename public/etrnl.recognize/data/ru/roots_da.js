/* RUSSIAN WORD FAMILY -ДА-. */
GT.registerRoot({
  id: 'да', verb: "дав+ать", t: "дав+ать", label: '-ДА-',
  en: "to give", de: "geben",
  note: {
    en: "The pair давать → дать recurs in отдавать → отдать and передавать → передать. Давать has the imperfective suffix -ва- after -да-. Compare the imperfective present даю, даёшь with the perfective future дам, дашь.",
    de: "Das Paar давать → дать wiederholt sich in отдавать → отдать und передавать → передать. In давать steht das imperfektive Suffix -ва- nach -да-. Vergleiche das imperfektive Präsens даю, даёшь mit dem perfektiven Futur дам, дашь."
  },
  words: [
    {
      id: 'ru-r-da-davat', base: true, core: true, pos: 'verb', aspect: 'impf', level: 'A2', t: "дав+ать",
      forms: { praes: "да+ю, даёшь", praet: "дав+ал", perf: "pf. д+ать (д+ам, д+ашь)" },
      en: "to give, hand over", de: "geben, reichen",
      examples: [{ t: "[[Д+ай]] мне, пож+алуйста, р+учку.", en: "Give me a pen, please.", de: "Gib mir bitte einen Stift." }]
    },
    {
      id: 'ru-r-da-otdavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "отдав+ать", prefix: 'от',
      forms: { praes: "отда+ю, отдаёшь", praet: "отдав+ал", perf: "pf. отд+ать (отд+ам, отд+ашь)" },
      en: "to give back; to hand over", de: "zurückgeben; abgeben",
      examples: [{ t: "Ты дал мне ключ+и на день. Я [[отд+ам]] их з+автра.", en: "You lent me the keys for a day. I’ll give them back tomorrow.", de: "Du hast mir die Schlüssel für einen Tag geliehen. Ich gebe sie dir morgen zurück." }],
      prefixDrill: { ex: 0, meaning: 1, explain: {
        en: 'от- marks giving the keys back to the person who lent them.',
        de: 'от- zeigt, dass die Schlüssel an die Person zurückgehen, die sie verliehen hat.'
      } }
    },
    {
      id: 'ru-r-da-peredavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "передав+ать", prefix: 'пере',
      forms: { praes: "переда+ю, передаёшь", praet: "передав+ал", perf: "pf. перед+ать (перед+ам, перед+ашь)" },
      en: "to pass on, relay; to hand over", de: "weitergeben, ausrichten; übergeben",
      examples: [{ t: "[[Перед+ай]] ей, что я опозд+аю.", en: "Tell her I’ll be late.", de: "Richte ihr bitte aus, dass ich mich verspäte." }],
      prefixDrill: { ex: 0, meaning: 2, explain: {
        en: "пере- marks a message passing from one person to another.", de: "пере- zeigt, dass eine Nachricht an eine andere Person weitergegeben wird."
      } }
    },
    {
      id: 'ru-r-da-prodavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "продав+ать",
      forms: { praes: "прода+ю, продаёшь", praet: "продав+ал", perf: "pf. прод+ать (прод+ам, прод+ашь)" },
      en: "to sell", de: "verkaufen",
      examples: [{ t: "Мы реш+или [[прод+ать]] маш+ину.", en: "We decided to sell the car.", de: "Wir haben beschlossen, das Auto zu verkaufen." }]
    },
    {
      id: 'ru-r-da-sdavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "сдав+ать",
      forms: { praes: "сда+ю, сдаёшь", praet: "сдав+ал", perf: "pf. сд+ать (сд+ам, сд+ашь)" },
      en: "to hand in; to take an exam; to rent out", de: "abgeben; eine Prüfung ablegen; vermieten",
      examples: [{ t: "Он [[сдаёт]] кварт+иру студ+ентам.", en: "He rents out the flat to students.", de: "Er vermietet die Wohnung an Studierende." }]
    },
    {
      id: 'ru-r-da-vydavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "выдав+ать", prefix: 'вы',
      forms: { praes: "выда+ю, выдаёшь", praet: "выдав+ал", perf: "pf. в+ыдать (в+ыдам, в+ыдашь)" },
      en: "to issue, hand out", de: "ausstellen, ausgeben",
      examples: [{ t: "Мне [[в+ыдали]] н+овый п+аспорт.", en: "I was issued a new passport.", de: "Mir wurde ein neuer Reisepass ausgestellt." }]
    },
    {
      id: 'ru-r-da-razdavat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "раздав+ать",
      forms: { praes: "разда+ю, раздаёшь", praet: "раздав+ал", perf: "pf. разд+ать (разд+ам, разд+ашь)" },
      en: "to hand out, distribute", de: "austeilen, verteilen",
      examples: [{ t: "Уч+итель [[раздаёт]] лист+ы с зад+аниями.", en: "The teacher is handing out worksheets.", de: "Der Lehrer teilt die Arbeitsblätter aus." }]
    },
    {
      id: 'ru-r-da-prodazha', pos: 'noun', gender: 'f', level: 'B1', t: "прод+ажа",
      en: "sale, selling", de: "der Verkauf",
      examples: [{ t: "Бил+еты поступ+ят в [[прод+ажу]] в п+ятницу.", en: "Tickets will go on sale on Friday.", de: "Die Karten gehen am Freitag in den Verkauf." }]
    }
  ]
});
