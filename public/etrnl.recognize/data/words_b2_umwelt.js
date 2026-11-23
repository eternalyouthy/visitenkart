/* Curated German B2 vocabulary. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_umwelt', items: [
  {
    id: 'b2-umwelt-ressourcenverbrauch', level: 'b2', pos: 'noun', de: "Ressourcenverbrauch",
    article: 'der',
    ru: "потребление ресурсов", en: "resource consumption",
    examples: [
      { de: "Die Werkstatt misst ihren [[Ressourcenverbrauch]], bevor sie neue Geräte anschafft.", ru: "Мастерская измеряет объём потребления ресурсов, прежде чем закупать новое оборудование.", en: "The workshop measures its resource consumption before buying new equipment." }
    ]
  },
  {
    id: 'b2-umwelt-mehrwegverpackung', level: 'b2', pos: 'noun', de: "Mehrwegverpackung",
    article: 'die', plural: "die Mehrwegverpackungen",
    ru: "многоразовая упаковка", en: "reusable packaging",
    examples: [
      { de: "Kundinnen und Kunden können die [[Mehrwegverpackungen]] beim nächsten Einkauf zurückgeben.", ru: "Покупатели могут вернуть многоразовую упаковку при следующей покупке.", en: "Customers can return the reusable packaging the next time they shop." }
    ],
    note: "Mehrwegverpackung можно вернуть для повторного использования. Einwegverpackung рассчитана на одно использование.",
    i18n: { en: { note: "Mehrwegverpackung can be returned for reuse. Einwegverpackung is designed for a single use." } }
  },
  {
    id: 'b2-umwelt-abfallvermeidung', level: 'b2', pos: 'noun', de: "Abfallvermeidung",
    article: 'die',
    ru: "предотвращение образования отходов", en: "waste prevention",
    examples: [
      { de: "Für die [[Abfallvermeidung]] will die Mensa kleinere Portionen zur Auswahl anbieten.", ru: "Чтобы сократить количество отходов, столовая хочет предложить на выбор порции поменьше.", en: "To prevent waste, the canteen wants to offer smaller portions." }
    ],
    note: "Abfallvermeidung начинается до образования отходов, например когда берут только столько еды, сколько смогут съесть.",
    i18n: { en: { note: "Abfallvermeidung starts before waste is created, for example by taking only as much food as you can eat." } }
  },
  {
    id: 'b2-umwelt-energieeffizienz', level: 'b2', pos: 'noun', de: "Energieeffizienz",
    article: 'die',
    ru: "энергоэффективность", en: "energy efficiency",
    examples: [
      { de: "Bei der Auswahl der neuen Geräte achten wir besonders auf die [[Energieeffizienz]].", ru: "При выборе новых приборов мы уделяем особое внимание энергоэффективности.", en: "We pay particular attention to energy efficiency when choosing new appliances." }
    ]
  },
  {
    id: 'b2-umwelt-waermedaemmung', level: 'b2', pos: 'noun', de: "Wärmedämmung",
    article: 'die', plural: "die Wärmedämmungen",
    ru: "теплоизоляция, утепление", en: "thermal insulation",
    examples: [
      { de: "Eine bessere [[Wärmedämmung]] kann den Heizbedarf des Hauses senken.", ru: "Более качественная теплоизоляция может снизить потребность дома в отоплении.", en: "Better insulation can reduce how much heating the house needs." }
    ]
  },
  {
    id: 'b2-umwelt-nachhaltigkeit', level: 'b2', pos: 'noun', de: "Nachhaltigkeit",
    article: 'die',
    ru: "устойчивость, бережное отношение к ресурсам в долгосрочной перспективе", en: "sustainability",
    examples: [
      { de: "Bei der Beschaffung spielt [[Nachhaltigkeit]] eine Rolle, etwa wenn Geräte reparierbar sind.", ru: "При закупках учитывают устойчивость, например возможность ремонта устройств.", en: "Sustainability matters in purchasing decisions, for example when considering whether devices can be repaired." }
    ]
  },
  {
    id: 'b2-umwelt-umweltbilanz', level: 'b2', pos: 'noun', de: "Umweltbilanz",
    article: 'die', plural: "die Umweltbilanzen",
    ru: "суммарное воздействие на окружающую среду", en: "overall environmental impact, environmental footprint",
    examples: [
      { de: "Zur [[Umweltbilanz]] eines Geräts gehören auch Herstellung und Transport.", ru: "При оценке воздействия прибора на окружающую среду учитывают также производство и транспортировку.", en: "An appliance’s overall environmental impact also includes its manufacture and transport." }
    ]
  },
  {
    id: 'b2-umwelt-ausstoss', level: 'b2', pos: 'noun', de: "Ausstoß",
    article: 'der',
    ru: "выбросы, объём выбросов", en: "emissions, amount emitted",
    examples: [
      { de: "Mit dem Umbau soll der [[Ausstoß]] von Abgasen sinken.", ru: "После модернизации объём выхлопных газов должен снизиться.", en: "The upgrade is intended to reduce exhaust emissions." }
    ]
  },
  {
    id: 'b2-umwelt-senken', level: 'b2', pos: 'verb', de: "senken",
    forms: { praes: "senkt", praet: "senkte", perf: "hat gesenkt" }, gov: "+ Akk.",
    ru: "снижать, уменьшать", en: "to reduce, to lower",
    examples: [
      { de: "Mit einer besseren Dämmung wollen wir den Energieverbrauch [[senken]].", ru: "Улучшив теплоизоляцию, мы хотим снизить энергопотребление.", en: "We want to reduce energy consumption with better insulation." }
    ],
    note: "Den Verbrauch senken — кто-то его снижает. Der Verbrauch sinkt — он снижается сам как показатель.",
    i18n: { en: { note: "Den Verbrauch senken means to reduce consumption. Der Verbrauch sinkt means consumption is falling." } }
  },
  {
    id: 'b2-umwelt-einsparen', level: 'b2', pos: 'verb', de: "einsparen",
    forms: { praes: "spart ein", praet: "sparte ein", perf: "hat eingespart" }, gov: "+ Akk.",
    ru: "экономить, сокращать расход", en: "to save, to cut consumption",
    examples: [
      { de: "Seit der Umstellung hat die Werkstatt viel Strom [[eingespart]].", ru: "После перехода на новую систему мастерская сэкономила много электроэнергии.", en: "The workshop has saved a lot of electricity since the changeover." }
    ]
  },
  {
    id: 'b2-umwelt-wiederverwenden', level: 'b2', pos: 'verb', de: "wiederverwenden",
    forms: { praes: "verwendet wieder", praet: "verwendete wieder", perf: "hat wiederverwendet" }, gov: "+ Akk.",
    ru: "использовать повторно", en: "to reuse",
    examples: [
      { de: "Einige Teile lassen sich nach der Reparatur [[wiederverwenden]].", ru: "Некоторые детали после ремонта можно использовать повторно.", en: "Some parts can be reused after repair." }
    ]
  },
  {
    id: 'b2-umwelt-langlebig', level: 'b2', pos: 'adj', de: "langlebig",
    ru: "долговечный", en: "durable, long-lasting",
    examples: [
      { de: "Wir suchen ein [[langlebiges]] Gerät, für das es Ersatzteile gibt.", ru: "Мы ищем долговечный прибор, для которого есть запчасти.", en: "We’re looking for a durable appliance with spare parts available." }
    ]
  }
] });
