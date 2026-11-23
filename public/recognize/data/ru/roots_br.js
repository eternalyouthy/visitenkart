/* RUSSIAN WORD FAMILY -БР- / -БЕР- / -БИР-. */
GT.registerRoot({
  id: 'бр', verb: "бр+ать", t: "бр+ать", label: '-БР- / -БЕР- / -БИР-',
  en: "to take", de: "nehmen",
  note: {
    en: "The stem alternates between бр- (брать), бер- (беру, заберу) and бир- (забирать). Learn the prefix together with its context: выбирать = choose, забирать = pick up, подбирать = select something suitable or pick something up.",
    de: "Der Stamm wechselt zwischen бр- (брать), бер- (беру, заберу) und бир- (забирать). Lerne das Präfix im Kontext: выбирать = auswählen, забирать = abholen, подбирать = etwas Passendes auswählen oder etwas aufheben."
  },
  words: [
    {
      id: 'ru-r-br-brat', base: true, core: true, pos: 'verb', aspect: 'impf', level: 'A2', t: "бр+ать",
      forms: { praes: "бер+у, берёшь", praet: "бр+ал, брал+а", perf: "pf. вз+ять (возьм+у, возьмёшь)" },
      en: "to take", de: "nehmen",
      examples: [{ t: "В дождь я всегд+а [[бер+у]] зонт.", en: "I always take an umbrella when it rains.", de: "Bei Regen nehme ich immer einen Schirm mit." }]
    },
    {
      id: 'ru-r-br-zabirat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "забир+ать", prefix: 'за',
      forms: { praes: "забир+аю, забир+аешь", praet: "забир+ал", perf: "pf. забр+ать (забер+у, заберёшь)" },
      en: "to pick up, collect; to take away", de: "abholen; mitnehmen, wegnehmen",
      examples: [{ t: "Я [[забер+у]] теб+я п+осле раб+оты.", en: "I’ll pick you up after work.", de: "Ich hole dich nach der Arbeit ab." }]
    },
    {
      id: 'ru-r-br-vybirat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "выбир+ать", prefix: 'вы',
      forms: { praes: "выбир+аю, выбир+аешь", praet: "выбир+ал", perf: "pf. в+ыбрать (в+ыберу, в+ыберешь)" },
      en: "to choose, select", de: "auswählen",
      examples: [{ t: "Н+ам н+ужно [[в+ыбрать]] од+ин вари+ант.", en: "We need to choose one option.", de: "Wir müssen uns für eine Variante entscheiden." }]
    },
    {
      id: 'ru-r-br-podbirat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "подбир+ать", prefix: 'под',
      forms: { praes: "подбир+аю, подбир+аешь", praet: "подбир+ал", perf: "pf. подобр+ать (подбер+у, подберёшь)" },
      en: "to pick up; to select a good match", de: "aufheben; etwas Passendes auswählen",
      examples: [{ t: "Помог+и мне [[подобр+ать]] цвет для стен.", en: "Help me pick a suitable colour for the walls.", de: "Hilf mir, eine passende Farbe für die Wände zu finden." }]
    },
    {
      id: 'ru-r-br-otbirat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "отбир+ать", prefix: 'от',
      forms: { praes: "отбир+аю, отбир+аешь", praet: "отбир+ал", perf: "pf. отобр+ать (отбер+у, отберёшь)" },
      en: "to take away; to select candidates or material", de: "wegnehmen; Bewerber oder Material auswählen",
      examples: [{ t: "У н+ас [[отобр+али]] телеф+оны.", en: "They took our phones away.", de: "Man hat uns die Handys weggenommen." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "от- marks taking the phones away from their owners.", de: "от- zeigt, dass den Besitzern die Handys weggenommen werden."
      } }
    },
    {
      id: 'ru-r-br-sobirat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "собир+ать",
      forms: { praes: "собир+аю, собир+аешь", praet: "собир+ал", perf: "pf. собр+ать (собер+у, соберёшь)" },
      en: "to collect; to pack; to assemble", de: "sammeln; packen; zusammenbauen",
      examples: [{ t: "Я [[собир+аю]] чемод+ан.", en: "I’m packing my suitcase.", de: "Ich packe gerade meinen Koffer." }]
    },
    {
      id: 'ru-r-br-razbirat', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "разбир+ать",
      forms: { praes: "разбир+аю, разбир+аешь", praet: "разбир+ал", perf: "pf. разобр+ать (разбер+у, разберёшь)" },
      en: "to take apart; to analyse", de: "auseinandernehmen; analysieren",
      examples: [{ t: "Дав+ай [[разберём]] прич+ину ош+ибки.", en: "Let’s look into what caused the error.", de: "Schauen wir uns an, was den Fehler verursacht hat." }]
    },
    {
      id: 'ru-r-br-vybor', pos: 'noun', gender: 'm', level: 'B1', t: "в+ыбор",
      en: "choice, selection", de: "die Wahl; die Auswahl",
      examples: [{ t: "Спас+ибо за [[в+ыбор]] н+ашего серв+иса.", en: "Thank you for choosing our service.", de: "Vielen Dank, dass Sie sich für unseren Dienst entschieden haben." }]
    }
  ]
});
