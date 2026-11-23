/* RUSSIAN WORD FAMILY -ВОЗ- / -ВЕЗ-. */
GT.registerRoot({
  id: 'воз', verb: "воз+ить", t: "воз+ить", label: '-ВОЗ- / -ВЕЗ-',
  en: "to transport by vehicle", de: "mit einem Fahrzeug befördern",
  note: {
    en: "Везти describes carrying someone or something by vehicle in one direction, возить describes repeated or non-directional trips. Both are imperfective. In pairs such as привозить → привезти the prefix adds a destination and the two forms contrast in aspect.",
    de: "Везти bezeichnet das Befördern mit einem Fahrzeug in eine Richtung, возить wiederholte Fahrten oder Fahrten ohne feste Richtung. Beide Formen sind imperfektiv. In Paaren wie привозить → привезти gibt das Präfix ein Ziel an und die beiden Formen unterscheiden sich im Aspekt."
  },
  words: [
    {
      id: 'ru-r-voz-vozit', base: true, core: true, pos: 'verb', aspect: 'impf', level: 'A2', t: "воз+ить",
      forms: { praes: "вож+у, в+озишь", praet: "воз+ил" },
      en: "to transport, take (regularly by vehicle)", de: "regelmäßig fahren, befördern",
      examples: [{ t: "Он [[в+озит]] д+очку в шк+олу на маш+ине.", en: "He drives his daughter to school.", de: "Er fährt seine Tochter mit dem Auto zur Schule." }]
    },
    {
      id: 'ru-r-voz-vezti', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "везт+и",
      forms: { praes: "вез+у, везёшь", praet: "вёз, везл+а" },
      en: "to be taking or transporting (by vehicle)", de: "gerade fahren, befördern",
      examples: [{ t: "Я [[вез+у]] в+ещи на н+овую кварт+иру.", en: "I’m taking my things to the new flat.", de: "Ich bringe gerade meine Sachen in die neue Wohnung." }]
    },
    {
      id: 'ru-r-voz-privozit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "привоз+ить", prefix: 'при',
      forms: { praes: "привож+у, прив+озишь", praet: "привоз+ил", perf: "pf. привезт+и (привез+у, привёз)" },
      en: "to bring (by vehicle), to deliver", de: "mit einem Fahrzeug bringen, liefern",
      examples: [{ t: "Курь+ер [[привёз]] зак+аз к об+еду.", en: "The courier delivered the order by lunchtime.", de: "Der Kurier hat die Bestellung bis zum Mittag geliefert." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "при- marks arrival at the destination.", de: "при- markiert die Ankunft am Ziel."
      } }
    },
    {
      id: 'ru-r-voz-uvozit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "увоз+ить", prefix: 'у',
      forms: { praes: "увож+у, ув+озишь", praet: "увоз+ил", perf: "pf. увезт+и (увез+у, увёз)" },
      en: "to take away (by vehicle)", de: "wegbringen, abtransportieren",
      examples: [{ t: "Маш+ина [[увезл+а]] ст+арую м+ебель.", en: "The vehicle took the old furniture away.", de: "Das Fahrzeug hat die alten Möbel abtransportiert." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "у- marks movement away from the starting point.", de: "у- markiert die Bewegung vom Ausgangspunkt weg."
      } }
    },
    {
      id: 'ru-r-voz-vyvozit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "вывоз+ить", prefix: 'вы',
      forms: { praes: "вывож+у, выв+озишь", praet: "вывоз+ил", perf: "pf. в+ывезти (в+ывезу, в+ывез)" },
      en: "to take out (by vehicle); to export", de: "hinausbringen, abtransportieren; exportieren",
      examples: [{ t: "З+автра [[в+ывезут]] м+усор из двор+а.", en: "They’ll take the rubbish out of the courtyard tomorrow.", de: "Morgen wird der Müll aus dem Hof abgeholt." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "вы- marks movement from inside the courtyard to the outside.", de: "вы- kennzeichnet die Bewegung aus dem Hof hinaus."
      } }
    },
    {
      id: 'ru-r-voz-perevozit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "перевоз+ить", prefix: 'пере',
      forms: { praes: "перевож+у, перев+озишь", praet: "перевоз+ил", perf: "pf. перевезт+и (перевез+у, перевёз)" },
      en: "to transport, to move (by vehicle)", de: "transportieren, befördern",
      examples: [{ t: "Н+ужно [[перевезт+и]] м+ебель в н+овый +офис.", en: "We need to move the furniture to the new office.", de: "Wir müssen die Möbel ins neue Büro transportieren." }],
      prefixDrill: { ex: 0, meaning: 2, explain: {
        en: "пере- indicates a transfer to another location.", de: "пере- zeigt den Transport an einen anderen Ort an."
      } }
    },
    {
      id: 'ru-r-voz-otvozit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "отвоз+ить", prefix: 'от',
      forms: { praes: "отвож+у, отв+озишь", praet: "отвоз+ил", perf: "pf. отвезт+и (отвез+у, отвёз)" },
      en: "to take someone or something somewhere (by vehicle)", de: "hinbringen, hinfahren",
      examples: [{ t: "Я [[отвез+у]] теб+я на вокз+ал.", en: "I’ll drive you to the station.", de: "Ich fahre dich zum Bahnhof." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "от- marks taking someone away from here to another place.", de: "от- zeigt, dass jemand von hier an einen anderen Ort gebracht wird."
      } }
    },
    {
      id: 'ru-r-voz-perevozka', pos: 'noun', gender: 'f', level: 'B1', t: "перев+озка",
      en: "transport, transportation", de: "der Transport, die Beförderung",
      examples: [{ t: "Мы заказ+али [[перев+озку]] м+ебели.", en: "We booked a furniture removal service.", de: "Wir haben einen Möbeltransport gebucht." }]
    }
  ]
});
