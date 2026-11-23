/* RUSSIAN WORD FAMILY -НОС- / -НЕС-. */
GT.registerRoot({
  id: 'нос', verb: "нос+ить", t: "нос+ить", label: '-НОС- / -НЕС-',
  en: "to carry on oneself or by hand; to wear", de: "tragen; anhaben",
  note: {
    en: "Нести describes carrying something in one direction. Носить describes repeated carrying and also means “to wear”. Both are imperfective. Compare носить → приносить and нести → принести.",
    de: "Нести bezeichnet das Tragen in eine Richtung. Носить bezeichnet wiederholtes Tragen und bedeutet auch „anhaben“. Beide Formen sind imperfektiv. Vergleiche носить → приносить und нести → принести."
  },
  words: [
    {
      id: 'ru-r-nos-nosit', base: true, core: true, pos: 'verb', aspect: 'impf', level: 'A2', t: "нос+ить",
      forms: { praes: "нош+у, н+осишь", praet: "нос+ил" },
      en: "to carry regularly; to wear", de: "regelmäßig tragen; anhaben",
      examples: [{ t: "Он+а об+ычно [[н+осит]] очк+и.", en: "She usually wears glasses.", de: "Sie trägt normalerweise eine Brille." }]
    },
    {
      id: 'ru-r-nos-nesti', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "нест+и",
      forms: { praes: "нес+у, несёшь", praet: "нёс, несл+а" },
      en: "to be carrying (in one direction)", de: "gerade tragen (in eine Richtung)",
      examples: [{ t: "Я [[нес+у]] пак+еты на к+ухню.", en: "I’m carrying the bags to the kitchen.", de: "Ich trage die Tüten gerade in die Küche." }]
    },
    {
      id: 'ru-r-nos-prinosit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "принос+ить", prefix: 'при',
      forms: { praes: "принош+у, прин+осишь", praet: "принос+ил", perf: "pf. принест+и (принес+у, принёс)" },
      en: "to bring (by hand); to bring about", de: "mitbringen; bringen",
      examples: [{ t: "[[Принес+и]], пож+алуйста, ст+ул.", en: "Bring a chair, please.", de: "Bring bitte einen Stuhl mit." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "при- marks bringing the chair to the speaker’s location.", de: "при- zeigt, dass der Stuhl zum Sprecher gebracht wird."
      } }
    },
    {
      id: 'ru-r-nos-unosit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "унос+ить", prefix: 'у',
      forms: { praes: "унош+у, ун+осишь", praet: "унос+ил", perf: "pf. унест+и (унес+у, унёс)" },
      en: "to carry away", de: "wegtragen",
      examples: [{ t: "Он [[унёс]] пуст+ые кор+обки.", en: "He carried the empty boxes away.", de: "Er hat die leeren Kartons weggetragen." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "у- marks taking the boxes away.", de: "у- zeigt, dass die Kartons weggetragen werden."
      } }
    },
    {
      id: 'ru-r-nos-vynosit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "вынос+ить", prefix: 'вы',
      forms: { praes: "вынош+у, вын+осишь", praet: "вынос+ил", perf: "pf. в+ынести (в+ынесу, в+ынес)" },
      en: "to carry out; to take out", de: "hinaustragen, hinausbringen",
      examples: [{ t: "М+ожешь [[в+ынести]] м+усор?", en: "Can you take the rubbish out?", de: "Kannst du den Müll rausbringen?" }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "вы- marks movement out of the home.", de: "вы- markiert die Bewegung aus der Wohnung hinaus."
      } }
    },
    {
      id: 'ru-r-nos-perenosit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "перенос+ить", prefix: 'пере',
      forms: { praes: "перенош+у, перен+осишь", praet: "перенос+ил", perf: "pf. перенест+и (перенес+у, перенёс)" },
      en: "to carry over; to move or reschedule", de: "hinübertragen; verlegen",
      examples: [{ t: "Дав+ай [[перенесём]] встр+ечу на п+ятницу.", en: "Let’s reschedule the meeting for Friday.", de: "Lass uns das Treffen auf Freitag verschieben." }],
      prefixDrill: { ex: 0, meaning: 2, explain: {
        en: "пере- marks the move to another date.", de: "пере- kennzeichnet die Verschiebung auf einen anderen Termin."
      } }
    },
    {
      id: 'ru-r-nos-otnosit', core: true, pos: 'verb', aspect: 'impf', level: 'B1', t: "относ+ить", prefix: 'от',
      forms: { praes: "отнош+у, отн+осишь", praet: "относ+ил", perf: "pf. отнест+и (отнес+у, отнёс)" },
      en: "to take (on foot); to carry to", de: "hinbringen, hintragen",
      examples: [{ t: "Я [[отнес+у]] кн+иги в библиот+еку.", en: "I’ll take the books to the library.", de: "Ich bringe die Bücher zur Bibliothek." }],
      prefixDrill: { ex: 0, meaning: 0, explain: {
        en: "от- shows movement away from the starting point to a destination.", de: "от- markiert die Bewegung vom Ausgangspunkt weg zu einem Ziel."
      } }
    },
    {
      id: 'ru-r-nos-nosilki', pos: 'noun', gender: 'pl', level: 'B1', t: "нос+илки",
      en: "stretcher", de: "die Trage",
      examples: [{ t: "Пострад+авшего полож+или на [[нос+илки]].", en: "They put the injured person on a stretcher.", de: "Sie legten den Verletzten auf eine Trage." }]
    }
  ]
});
