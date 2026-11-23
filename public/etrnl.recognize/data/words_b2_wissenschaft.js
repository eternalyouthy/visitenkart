/* Curated German B2 vocabulary · B2 everyday topics: Science & Technology. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_wissenschaft', items: [
  {
    id: 'b2-wiss-forschung', level: 'b2', pos: 'noun', de: "Forschung",
    article: 'die', plural: "die Forschungen",
    ru: "исследования, научная работа", en: "research",
    examples: [
      { de: "In die [[Forschung]] zu neuen Batterien fließt viel Geld.", ru: "В исследования новых аккумуляторов вкладывают много денег.", en: "A lot of money goes into research on new batteries." }
    ]
  },
  {
    id: 'b2-wiss-erkenntnis', level: 'b2', pos: 'noun', de: "Erkenntnis",
    article: 'die', plural: "die Erkenntnisse",
    ru: "вывод, новое знание, понимание", en: "finding, insight",
    examples: [
      { de: "Nach neuesten [[Erkenntnissen]] schlafen Jugendliche zu wenig.", ru: "По последним данным, подростки спят слишком мало.", en: "According to the latest findings, teenagers don’t get enough sleep." }
    ],
    note: "Устойчиво: nach neuesten Erkenntnissen, zu der Erkenntnis kommen, dass…",
    i18n: { en: { note: "Set phrases: nach neuesten Erkenntnissen, zu der Erkenntnis kommen, dass…" } }
  },
  {
    id: 'b2-wiss-studie', level: 'b2', pos: 'noun', de: "Studie",
    article: 'die', plural: "die Studien",
    ru: "исследование (конкретная работа с результатами)", en: "study (a piece of research)",
    examples: [
      { de: "Eine aktuelle [[Studie]] zeigt, dass Homeoffice die Pendelzeit deutlich reduziert.", ru: "Недавнее исследование показывает, что удалённая работа заметно сокращает время на дорогу.", en: "A recent study shows that working from home cuts commuting time significantly." }
    ],
    note: "Не путать: die Studie — научная работа, das Studium — учёба в вузе.",
    i18n: { en: { note: "Don’t confuse: die Studie is a research study, das Studium is university studies." } }
  },
  {
    id: 'b2-wiss-ki', level: 'b2', pos: 'phrase', de: "künstliche Intelligenz",
    article: 'die',
    ru: "искусственный интеллект (KI)", en: "artificial intelligence (AI)",
    examples: [
      { de: "Viele Firmen setzen [[künstliche Intelligenz]] im Kundenservice ein.", ru: "Многие компании используют искусственный интеллект в клиентской поддержке.", en: "Many companies use artificial intelligence in customer service." }
    ],
    note: "Сокращение — die KI. Прилагательное склоняется: mit künstlicher Intelligenz.",
    i18n: { en: { note: "The abbreviation is die KI. The adjective declines: mit künstlicher Intelligenz." } }
  },
  {
    id: 'b2-wiss-fortschritt', level: 'b2', pos: 'noun', de: "Fortschritt",
    article: 'der', plural: "die Fortschritte",
    ru: "прогресс; успехи", en: "progress, advance",
    examples: [
      { de: "Der technische [[Fortschritt]] macht viele Geräte billiger, aber auch kurzlebiger.", ru: "Технический прогресс делает многие устройства дешевле, но и менее долговечными.", en: "Technological progress makes many devices cheaper, but also shorter-lived." }
    ],
    note: "Во множественном числе — личные успехи: Fortschritte machen.",
    i18n: { en: { note: "In the plural it often means personal progress: Fortschritte machen." } }
  },
  {
    id: 'b2-wiss-durchbruch', level: 'b2', pos: 'noun', de: "Durchbruch",
    article: 'der', plural: "die Durchbrüche",
    ru: "прорыв", en: "breakthrough",
    examples: [
      { de: "Die Entwicklung des Impfstoffs galt als wissenschaftlicher [[Durchbruch]].", ru: "Разработка вакцины считалась научным прорывом.", en: "The development of the vaccine was considered a scientific breakthrough." }
    ],
    parts: [["durch", { ru: "сквозь", en: "through" }], ["Bruch", { ru: "пролом, разрыв", en: "break, breach" }]]
  },
  {
    id: 'b2-wiss-auswirkung', level: 'b2', pos: 'noun', de: "Auswirkung",
    article: 'die', plural: "die Auswirkungen", gov: "auf + Akk.",
    ru: "влияние, последствие", en: "effect, impact",
    examples: [
      { de: "Welche [[Auswirkungen]] hat die ständige Handynutzung auf die Konzentration?", ru: "Как постоянное использование телефона влияет на концентрацию?", en: "What effect does constant phone use have on concentration?" }
    ],
    note: "Чаще во множественном числе: Auswirkungen auf + Akk. haben.",
    i18n: { en: { note: "Mostly used in the plural: Auswirkungen auf + Akk. haben." } }
  },
  {
    id: 'b2-wiss-abhaengigkeit', level: 'b2', pos: 'noun', de: "Abhängigkeit",
    article: 'die', plural: "die Abhängigkeiten", gov: "von + Dat.",
    ru: "зависимость", en: "dependence, dependency",
    examples: [
      { de: "Die [[Abhängigkeit]] von wenigen Tech-Konzernen sehen viele Experten kritisch.", ru: "Многие эксперты критически относятся к зависимости от нескольких технологических корпораций.", en: "Many experts are critical of the dependence on a few tech giants." }
    ]
  },
  {
    id: 'b2-wiss-erforschen', level: 'b2', pos: 'verb', de: "erforschen",
    forms: { praes: "erforscht", praet: "erforschte", perf: "hat erforscht" }, gov: "+ Akk.",
    ru: "исследовать, изучать", en: "to research, to explore",
    examples: [
      { de: "Das Team [[erforscht]], wie sich Mikroplastik im Körper verteilt.", ru: "Команда исследует, как микропластик распространяется в организме.", en: "The team is researching how microplastics spread through the body." }
    ]
  },
  {
    id: 'b2-wiss-ueberpruefen', level: 'b2', pos: 'verb', de: "überprüfen",
    forms: { praes: "überprüft", praet: "überprüfte", perf: "hat überprüft" }, gov: "+ Akk.",
    ru: "проверять, перепроверять", en: "to check, to verify",
    examples: [
      { de: "Die Ergebnisse müssen von einem zweiten Labor [[überprüft]] werden.", ru: "Результаты должна перепроверить вторая лаборатория.", en: "The results have to be verified by a second laboratory." }
    ],
    note: "Неотделяемая приставка über-: er überprüft, hat überprüft.",
    i18n: { en: { note: "Inseparable prefix über-: er überprüft, hat überprüft." } }
  },
  {
    id: 'b2-wiss-bahnbrechend', level: 'b2', pos: 'adj', de: "bahnbrechend",
    ru: "новаторский, прорывной", en: "groundbreaking, pioneering",
    examples: [
      { de: "Ihre Arbeit zur Genschere war [[bahnbrechend]] für die Medizin.", ru: "Её работа о генетических ножницах стала прорывом для медицины.", en: "Her work on gene editing was groundbreaking for medicine." }
    ],
    parts: [["Bahn", { ru: "путь", en: "path, way" }], ["brechend", { ru: "прокладывающий, пробивающий", en: "breaking (open)" }]]
  },
  {
    id: 'b2-wiss-ethisch', level: 'b2', pos: 'adj', de: "ethisch",
    ru: "этический; этичный", en: "ethical",
    examples: [
      { de: "Ob Maschinen über Bewerbungen entscheiden dürfen, ist vor allem eine [[ethische]] Frage.", ru: "Можно ли машинам решать судьбу заявок на работу — прежде всего этический вопрос.", en: "Whether machines should decide on job applications is above all an ethical question." }
    ]
  }
] });
