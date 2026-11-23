/* Curated German B2 vocabulary · B2 everyday topics: Travel & Getting Around. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_reisen', items: [
  {
    id: 'b2-reisen-verbindung', level: 'b2', pos: 'noun', de: "Verbindung",
    article: 'die', plural: "die Verbindungen",
    ru: "сообщение, маршрут (поездом, автобусом); связь", en: "connection (route); link",
    examples: [
      { de: "Die schnellste [[Verbindung]] nach Hamburg geht über Hannover.", ru: "Самый быстрый маршрут в Гамбург идёт через Ганновер.", en: "The fastest connection to Hamburg goes via Hanover." }
    ],
    note: "Не путать с Anschluss — пересадка на следующий поезд: «Ich habe meinen Anschluss verpasst».",
    i18n: { en: { note: "Don’t confuse with Anschluss — the onward train you change to: “Ich habe meinen Anschluss verpasst.”" } }
  },
  {
    id: 'b2-reisen-ermaessigung', level: 'b2', pos: 'noun', de: "Ermäßigung",
    article: 'die', plural: "die Ermäßigungen",
    ru: "скидка, льгота", en: "reduction, concession",
    examples: [
      { de: "Studierende bekommen mit Ausweis eine [[Ermäßigung]] von 25 Prozent.", ru: "Студенты по удостоверению получают скидку 25 процентов.", en: "Students get a 25 per cent reduction with their ID." }
    ],
    note: "Ermäßigung — льгота для групп (студенты, пенсионеры). Rabatt — скидка в магазине.",
    i18n: { en: { note: "Ermäßigung is a concession for groups (students, pensioners). Rabatt is a shop discount." } }
  },
  {
    id: 'b2-reisen-zuschlag', level: 'b2', pos: 'noun', de: "Zuschlag",
    article: 'der', plural: "die Zuschläge",
    ru: "доплата, надбавка", en: "surcharge, supplement",
    examples: [
      { de: "Für die Sitzplatzreservierung zahlt man einen kleinen [[Zuschlag]].", ru: "За резервирование места платят небольшую доплату.", en: "You pay a small supplement for a seat reservation." }
    ]
  },
  {
    id: 'b2-reisen-buchungsbestaetigung', level: 'b2', pos: 'noun', de: "Buchungsbestätigung",
    article: 'die', plural: "die Buchungsbestätigungen",
    ru: "подтверждение бронирования", en: "booking confirmation",
    examples: [
      { de: "Die [[Buchungsbestätigung]] ist noch nicht in meinem Postfach angekommen.", ru: "Подтверждение бронирования ещё не пришло мне на почту.", en: "The booking confirmation hasn’t arrived in my inbox yet." }
    ],
    parts: [["Buchung", { ru: "бронирование", en: "booking" }], ["-s-", { ru: "соединительный звук", en: "linking sound" }], ["Bestätigung", { ru: "подтверждение", en: "confirmation" }]]
  },
  {
    id: 'b2-reisen-stornieren', level: 'b2', pos: 'verb', de: "stornieren",
    forms: { praes: "storniert", praet: "stornierte", perf: "hat storniert" }, gov: "+ Akk.",
    ru: "отменить (бронь, заказ)", en: "to cancel (a booking, an order)",
    examples: [
      { de: "Bis 24 Stunden vorher kann man das Zimmer kostenlos [[stornieren]].", ru: "Номер можно бесплатно отменить за 24 часа.", en: "You can cancel the room free of charge up to 24 hours in advance." }
    ],
    note: "Stornieren — про бронь и заказ. Встречу отменяют словом absagen, рейс — streichen.",
    i18n: { en: { note: "Stornieren is for bookings and orders. You absagen an appointment; an airline streicht a flight." } }
  },
  {
    id: 'b2-reisen-umleitung', level: 'b2', pos: 'noun', de: "Umleitung",
    article: 'die', plural: "die Umleitungen",
    ru: "объезд", en: "diversion, detour",
    examples: [
      { de: "Wegen der Baustelle fährt der Bus eine [[Umleitung]].", ru: "Из-за стройки автобус едет в объезд.", en: "The bus is taking a diversion because of the roadworks." }
    ]
  },
  {
    id: 'b2-reisen-sperrung', level: 'b2', pos: 'noun', de: "Sperrung",
    article: 'die', plural: "die Sperrungen",
    ru: "перекрытие (дороги, участка пути)", en: "closure (of a road or line)",
    examples: [
      { de: "Wegen einer [[Sperrung]] zwischen Köln und Bonn fallen mehrere Züge aus.", ru: "Из-за перекрытия участка между Кёльном и Бонном отменено несколько поездов.", en: "Several trains are cancelled because of a closure between Cologne and Bonn." }
    ],
    note: "Глагол: eine Straße sperren — перекрыть улицу; die Straße ist gesperrt.",
    i18n: { en: { note: "Verb: eine Straße sperren — to close a road; die Straße ist gesperrt." } }
  },
  {
    id: 'b2-reisen-pauschalreise', level: 'b2', pos: 'noun', de: "Pauschalreise",
    article: 'die', plural: "die Pauschalreisen",
    ru: "пакетный тур", en: "package holiday",
    examples: [
      { de: "Bei einer [[Pauschalreise]] sind Flug, Hotel und Transfer schon im Preis enthalten.", ru: "В пакетный тур уже входят перелёт, отель и трансфер.", en: "With a package holiday, the flight, hotel and transfer are already included in the price." }
    ]
  },
  {
    id: 'b2-reisen-einreisebestimmungen', level: 'b2', pos: 'noun', de: "Einreisebestimmungen",
    article: 'die', plural: "die Einreisebestimmungen",
    ru: "правила въезда", en: "entry requirements",
    examples: [
      { de: "Informieren Sie sich vor der Buchung über die aktuellen [[Einreisebestimmungen]].", ru: "Перед бронированием узнайте актуальные правила въезда.", en: "Check the current entry requirements before you book." }
    ],
    parts: [["Einreise", { ru: "въезд", en: "entry (into a country)" }], ["Bestimmungen", { ru: "положения, правила", en: "regulations" }]]
  },
  {
    id: 'b2-reisen-entschaedigung', level: 'b2', pos: 'noun', de: "Entschädigung",
    article: 'die', plural: "die Entschädigungen",
    ru: "компенсация", en: "compensation",
    examples: [
      { de: "Ab einer Stunde Verspätung steht Ihnen eine [[Entschädigung]] zu.", ru: "При опоздании от часа вам положена компенсация.", en: "You’re entitled to compensation for a delay of an hour or more." }
    ],
    note: "Устойчиво: jemandem steht eine Entschädigung zu — кому-то положена компенсация.",
    i18n: { en: { note: "Set phrase: jemandem steht eine Entschädigung zu — someone is entitled to compensation." } }
  },
  {
    id: 'b2-reisen-ueberbucht', level: 'b2', pos: 'adj', de: "überbucht",
    ru: "с перебронированием (мест продано больше, чем есть)", en: "overbooked",
    examples: [
      { de: "Der Flug war [[überbucht]], deshalb sollte ich einen späteren nehmen.", ru: "На рейс продали больше билетов, чем мест, поэтому мне предложили лететь позже.", en: "The flight was overbooked, so I was asked to take a later one." }
    ]
  },
  {
    id: 'b2-reisen-verfahren', level: 'b2', pos: 'verb', de: "sich verfahren",
    forms: { praes: "verfährt sich", praet: "verfuhr sich", perf: "hat sich verfahren" },
    ru: "заблудиться (на машине, велосипеде)", en: "to get lost (driving or cycling)",
    examples: [
      { de: "Ohne Navi haben wir uns in der Altstadt zweimal [[verfahren]].", ru: "Без навигатора мы дважды заблудились в старом городе.", en: "Without satnav we got lost twice in the old town." }
    ],
    note: "Пешком — sich verlaufen, на машине — sich verfahren. Приставка ver- здесь значит «ошибиться при действии»: sich verschreiben, sich versprechen.",
    i18n: { en: { note: "On foot it is sich verlaufen, by car sich verfahren. The prefix ver- here means “to do it wrongly”: sich verschreiben, sich versprechen." } }
  }
] });
