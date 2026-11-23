/* Curated German B2 vocabulary · B2 everyday topics: Housing & Neighbourhood. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_wohnen', items: [
  {
    id: 'b2-wohnen-nebenkostenabrechnung', level: 'b2', pos: 'noun', de: "Nebenkostenabrechnung",
    article: 'die', plural: "die Nebenkostenabrechnungen",
    ru: "годовой расчёт коммунальных платежей", en: "annual utility bill statement",
    examples: [
      { de: "Laut der [[Nebenkostenabrechnung]] müssen wir 240 Euro nachzahlen.", ru: "Согласно расчёту коммунальных платежей, нам нужно доплатить 240 евро.", en: "According to the utility bill statement, we have to pay an extra 240 euros." }
    ],
    note: "Обычно приходит раз в год: если авансовых платежей не хватило — Nachzahlung, если переплатили — Guthaben.",
    i18n: { en: { note: "It usually arrives once a year: if the advance payments were too low, you pay a Nachzahlung; if you paid too much, you get a Guthaben." } }
  },
  {
    id: 'b2-wohnen-kaution', level: 'b2', pos: 'noun', de: "Kaution",
    article: 'die', plural: "die Kautionen",
    ru: "залог за квартиру", en: "rental deposit",
    examples: [
      { de: "Die [[Kaution]] bekommen wir erst zurück, wenn die Wohnung abgenommen wurde.", ru: "Залог нам вернут только после приёмки квартиры.", en: "We only get the deposit back once the flat has been inspected and handed over." }
    ]
  },
  {
    id: 'b2-wohnen-mieterhoehung', level: 'b2', pos: 'noun', de: "Mieterhöhung",
    article: 'die', plural: "die Mieterhöhungen",
    ru: "повышение арендной платы", en: "rent increase",
    examples: [
      { de: "Die [[Mieterhöhung]] muss der Vermieter schriftlich begründen.", ru: "Повышение арендной платы арендодатель должен обосновать письменно.", en: "The landlord has to justify the rent increase in writing." }
    ]
  },
  {
    id: 'b2-wohnen-mietpreisbremse', level: 'b2', pos: 'noun', de: "Mietpreisbremse",
    article: 'die',
    ru: "ограничение роста арендной платы (закон)", en: "rent cap, rent control rule",
    examples: [
      { de: "In vielen Großstädten gilt die [[Mietpreisbremse]], trotzdem steigen die Preise weiter.", ru: "Во многих крупных городах действует ограничение арендной платы, но цены всё равно растут.", en: "The rent cap applies in many big cities, but prices are still rising." }
    ],
    parts: [["Miete", { ru: "аренда", en: "rent" }], ["Preis", { ru: "цена", en: "price" }], ["Bremse", { ru: "тормоз", en: "brake" }]]
  },
  {
    id: 'b2-wohnen-eigenbedarf', level: 'b2', pos: 'noun', de: "Eigenbedarf",
    article: 'der',
    ru: "собственная потребность владельца (основание для выселения)", en: "owner occupation (as grounds for ending a tenancy)",
    examples: [
      { de: "Der Vermieter hat uns wegen [[Eigenbedarfs]] gekündigt, weil seine Tochter einziehen will.", ru: "Арендодатель расторг с нами договор из-за собственной потребности: в квартиру хочет въехать его дочь.", en: "The landlord gave us notice because he needs the flat himself — his daughter wants to move in." }
    ],
    note: "Устойчиво: Eigenbedarf anmelden, wegen Eigenbedarfs kündigen.",
    i18n: { en: { note: "Common collocations: Eigenbedarf anmelden, wegen Eigenbedarfs kündigen." } }
  },
  {
    id: 'b2-wohnen-untermiete', level: 'b2', pos: 'noun', de: "Untermiete",
    article: 'die',
    ru: "субаренда", en: "subletting, sublet",
    examples: [
      { de: "Während meines Auslandssemesters wohnt eine Kommilitonin bei mir zur [[Untermiete]].", ru: "Пока я учусь семестр за границей, в моей квартире на субаренде живёт однокурсница.", en: "A fellow student is subletting my flat while I’m on my semester abroad." }
    ],
    note: "Для субаренды обычно нужно разрешение арендодателя.",
    i18n: { en: { note: "Subletting usually requires the landlord’s permission." } }
  },
  {
    id: 'b2-wohnen-wohnungsmangel', level: 'b2', pos: 'noun', de: "Wohnungsmangel",
    article: 'der',
    ru: "нехватка жилья", en: "housing shortage",
    examples: [
      { de: "Wegen des [[Wohnungsmangels]] bewerben sich auf eine Wohnung oft hundert Leute.", ru: "Из-за нехватки жилья на одну квартиру часто претендуют сто человек.", en: "Because of the housing shortage, a hundred people often apply for one flat." }
    ]
  },
  {
    id: 'b2-wohnen-laermbelaestigung', level: 'b2', pos: 'noun', de: "Lärmbelästigung",
    article: 'die', plural: "die Lärmbelästigungen",
    ru: "шумовое беспокойство, шум, мешающий соседям", en: "noise nuisance",
    examples: [
      { de: "Nach mehreren Partys bis drei Uhr haben sich die Nachbarn wegen [[Lärmbelästigung]] beschwert.", ru: "После нескольких вечеринок до трёх ночи соседи пожаловались на шум.", en: "After several parties that went on until 3 a.m., the neighbours complained about the noise." }
    ]
  },
  {
    id: 'b2-wohnen-hausordnung', level: 'b2', pos: 'noun', de: "Hausordnung",
    article: 'die',
    ru: "правила проживания в доме", en: "house rules",
    examples: [
      { de: "Laut [[Hausordnung]] dürfen Fahrräder nicht im Treppenhaus stehen.", ru: "По правилам дома велосипеды нельзя оставлять на лестничной клетке.", en: "According to the house rules, bicycles must not be left in the stairwell." }
    ]
  },
  {
    id: 'b2-wohnen-sanieren', level: 'b2', pos: 'verb', de: "sanieren",
    forms: { praes: "saniert", praet: "sanierte", perf: "hat saniert" }, gov: "+ Akk.",
    ru: "капитально ремонтировать, модернизировать (здание)", en: "to renovate, to refurbish (a building)",
    examples: [
      { de: "Das Haus wird nächstes Jahr komplett [[saniert]], deshalb steigt danach die Miete.", ru: "В следующем году дом полностью отремонтируют, поэтому потом вырастет аренда.", en: "The building is being completely renovated next year, so the rent will go up afterwards." }
    ],
    note: "Sanieren — крупная работа (крыша, окна, отопление). Renovieren — косметический ремонт: покрасить, поклеить обои.",
    i18n: { en: { note: "Sanieren is major work (roof, windows, heating). Renovieren is cosmetic: painting, wallpapering." } }
  },
  {
    id: 'b2-wohnen-renovierungsbeduerftig', level: 'b2', pos: 'adj', de: "renovierungsbedürftig",
    ru: "требующий ремонта", en: "in need of renovation",
    examples: [
      { de: "Die Wohnung ist günstig, aber ziemlich [[renovierungsbedürftig]].", ru: "Квартира недорогая, но ей явно нужен ремонт.", en: "The flat is cheap, but it’s badly in need of renovation." }
    ],
    parts: [["Renovierung", { ru: "ремонт", en: "renovation" }], ["-s-", { ru: "соединительный звук", en: "linking sound" }], ["bedürftig", { ru: "нуждающийся", en: "in need of" }]]
  },
  {
    id: 'b2-wohnen-verkehrsguenstig', level: 'b2', pos: 'adj', de: "verkehrsgünstig",
    ru: "с удобным транспортным сообщением", en: "conveniently located for transport",
    examples: [
      { de: "Die Wohnung liegt [[verkehrsgünstig]]: Bis zur S-Bahn sind es nur drei Minuten.", ru: "У квартиры удобное расположение: до электрички всего три минуты.", en: "The flat is well connected: it’s only three minutes to the S-Bahn." }
    ],
    note: "Типично для объявлений: verkehrsgünstig gelegen.",
    i18n: { en: { note: "Typical in property ads: verkehrsgünstig gelegen." } }
  }
] });
