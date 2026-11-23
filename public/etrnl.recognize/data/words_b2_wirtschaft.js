/* Curated German B2 vocabulary. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_wirtschaft', items: [
  {
    id: 'b2-wirtschaft-kaufkraft', level: 'b2', pos: 'noun', de: "Kaufkraft",
    article: 'die',
    ru: "покупательная способность", en: "purchasing power",
    examples: [
      { de: "Wenn Preise schneller steigen als Einkommen, sinkt die [[Kaufkraft]].", ru: "Если цены растут быстрее доходов, покупательная способность снижается.", en: "If prices rise faster than incomes, purchasing power falls." }
    ]
  },
  {
    id: 'b2-wirtschaft-preisanstieg', level: 'b2', pos: 'noun', de: "Preisanstieg",
    article: 'der', plural: "die Preisanstiege",
    ru: "рост цен, повышение цены", en: "price increase, rise in prices",
    examples: [
      { de: "Beim Strom fiel der [[Preisanstieg]] stärker aus als erwartet.", ru: "Электричество подорожало сильнее, чем ожидалось.", en: "Electricity prices rose more than expected." }
    ]
  },
  {
    id: 'b2-wirtschaft-nachfrage', level: 'b2', pos: 'noun', de: "Nachfrage",
    article: 'die', plural: "die Nachfragen",
    ru: "спрос (на товары или услуги)", en: "demand (for goods or services)",
    examples: [
      { de: "Die [[Nachfrage]] nach reparierbaren Geräten ist in diesem Laden gestiegen.", ru: "В этом магазине вырос спрос на устройства, которые можно ремонтировать.", en: "Demand for repairable devices has increased at this shop." }
    ],
    note: "Для экономического значения типично die Nachfrage nach + Dativ. В другой ситуации eine Nachfrage stellen означает задать уточняющий вопрос.",
    i18n: { en: { note: "For the economic sense, use die Nachfrage nach + dative. In another context, eine Nachfrage stellen means to ask a follow-up question." } }
  },
  {
    id: 'b2-wirtschaft-lieferengpass', level: 'b2', pos: 'noun', de: "Lieferengpass",
    article: 'der', plural: "die Lieferengpässe",
    ru: "перебои с поставками, дефицит поставок", en: "supply shortage, supply bottleneck",
    examples: [
      { de: "Wegen eines [[Lieferengpasses]] sind die Ersatzteile erst nächste Woche verfügbar.", ru: "Из-за перебоев с поставками запчасти будут доступны только на следующей неделе.", en: "The spare parts won’t be available until next week because of a supply shortage." }
    ]
  },
  {
    id: 'b2-wirtschaft-wettbewerb', level: 'b2', pos: 'noun', de: "Wettbewerb",
    article: 'der', plural: "die Wettbewerbe",
    ru: "конкуренция; конкурс", en: "competition; contest",
    examples: [
      { de: "Neue Anbieter haben den [[Wettbewerb]] auf dem Markt verstärkt.", ru: "Новые поставщики усилили конкуренцию на рынке.", en: "New providers have increased competition in the market." }
    ]
  },
  {
    id: 'b2-wirtschaft-preisspanne', level: 'b2', pos: 'noun', de: "Preisspanne",
    article: 'die', plural: "die Preisspannen",
    ru: "диапазон цен, разброс цен", en: "price range",
    examples: [
      { de: "Die [[Preisspanne]] für vergleichbare Geräte ist überraschend groß.", ru: "Разброс цен на сопоставимые устройства оказался на удивление большим.", en: "The price range for comparable devices is surprisingly wide." }
    ]
  },
  {
    id: 'b2-wirtschaft-folgekosten', level: 'b2', pos: 'noun', de: "Folgekosten",
    article: 'die', plural: "die Folgekosten",
    ru: "последующие расходы, дополнительные затраты в ходе использования", en: "follow-on costs, ongoing costs",
    examples: [
      { de: "Der Drucker ist günstig, aber die [[Folgekosten]] für Patronen sind hoch.", ru: "Принтер недорогой, но картриджи потом обходятся дорого.", en: "The printer is cheap, but the ongoing cost of cartridges is high." }
    ]
  },
  {
    id: 'b2-wirtschaft-preis-leistungs-verhaeltnis', level: 'b2', pos: 'noun', de: "Preis-Leistungs-Verhältnis",
    article: 'das', plural: "die Preis-Leistungs-Verhältnisse",
    ru: "соотношение цены и качества или возможностей", en: "value for money, price-performance ratio",
    examples: [
      { de: "Von den drei Tarifen hat der mittlere das beste [[Preis-Leistungs-Verhältnis]].", ru: "Из трёх тарифов средний предлагает лучшее соотношение цены и возможностей.", en: "Of the three plans, the mid-range one offers the best value for money." }
    ]
  },
  {
    id: 'b2-wirtschaft-rueckerstattung', level: 'b2', pos: 'noun', de: "Rückerstattung",
    article: 'die', plural: "die Rückerstattungen",
    ru: "возврат уплаченных денег", en: "refund, reimbursement",
    examples: [
      { de: "Nach der Absage des Konzerts hat der Veranstalter eine [[Rückerstattung]] angekündigt.", ru: "После отмены концерта организатор объявил о возврате денег.", en: "After the concert was cancelled, the organiser announced a refund." }
    ]
  },
  {
    id: 'b2-wirtschaft-reklamieren', level: 'b2', pos: 'verb', de: "reklamieren",
    forms: { praes: "reklamiert", praet: "reklamierte", perf: "hat reklamiert" }, gov: "+ Akk. / bei + Dat.",
    ru: "предъявлять претензию по поводу дефекта товара или услуги", en: "to complain about a faulty product or service",
    examples: [
      { de: "Ich habe das defekte Gerät beim Händler [[reklamiert]].", ru: "Я предъявил продавцу претензию по поводу неисправного устройства.", en: "I complained to the retailer about the faulty device." }
    ],
    note: "Beim Händler reklamieren — обратиться к продавцу по поводу недостатка. Umtauschen описывает сам обмен товара.",
    i18n: { en: { note: "Beim Händler reklamieren means to complain to the retailer about a defect. Umtauschen describes the exchange itself." } }
  },
  {
    id: 'b2-wirtschaft-abwaegen', level: 'b2', pos: 'verb', de: "abwägen",
    forms: { praes: "wägt ab", praet: "wog ab", perf: "hat abgewogen" }, gov: "+ Akk. / gegen + Akk.",
    ru: "взвешивать, сопоставлять доводы или варианты", en: "to weigh up, to weigh against",
    examples: [
      { de: "Vor dem Wechsel sollten wir die möglichen Einsparungen gegen den Aufwand [[abwägen]].", ru: "Перед переходом стоит сопоставить возможную экономию с затратами сил и времени.", en: "Before switching, we should weigh the possible savings against the effort involved." }
    ],
    note: "Типичные сочетания — Vor- und Nachteile abwägen и Nutzen gegen Aufwand abwägen. В прошедшем употребляют также wägte ab и hat abgewägt.",
    i18n: { en: { note: "Common combinations include Vor- und Nachteile abwägen and Nutzen gegen Aufwand abwägen. The past forms wägte ab and hat abgewägt are also used." } }
  },
  {
    id: 'b2-wirtschaft-lohnen', level: 'b2', pos: 'verb', de: "sich lohnen",
    forms: { praes: "lohnt sich", praet: "lohnte sich", perf: "hat sich gelohnt" }, gov: "für + Akk.",
    ru: "окупаться, быть оправданным, стоить усилий", en: "to pay off, to be worth it",
    examples: [
      { de: "Die Reparatur [[lohnt]] sich, wenn das Gerät danach noch mehrere Jahre hält.", ru: "Ремонт имеет смысл, если устройство после этого прослужит ещё несколько лет.", en: "The repair is worth it if the device lasts several more years afterward." }
    ]
  }
] });
