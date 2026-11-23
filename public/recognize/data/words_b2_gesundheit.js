/* Curated German B2 vocabulary · B2 everyday topics: Health & Care. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_gesundheit', items: [
  {
    id: 'b2-ges-vorsorgeuntersuchung', level: 'b2', pos: 'noun', de: "Vorsorgeuntersuchung",
    article: 'die', plural: "die Vorsorgeuntersuchungen",
    ru: "профилактический осмотр", en: "check-up, screening",
    examples: [
      { de: "Ab 35 übernimmt die Krankenkasse alle drei Jahre eine [[Vorsorgeuntersuchung]].", ru: "С 35 лет больничная касса раз в три года оплачивает профилактический осмотр.", en: "From the age of 35, health insurance covers a check-up every three years." }
    ],
    parts: [["Vorsorge", { ru: "профилактика, забота заранее", en: "prevention, provision" }], ["Untersuchung", { ru: "обследование", en: "examination" }]]
  },
  {
    id: 'b2-ges-beschwerden', level: 'b2', pos: 'noun', de: "Beschwerden",
    article: 'die', plural: "die Beschwerden",
    ru: "жалобы (на здоровье), недомогание", en: "symptoms, complaints (health)",
    examples: [
      { de: "Seit wann haben Sie diese [[Beschwerden]]?", ru: "С какого времени вас это беспокоит?", en: "How long have you had these symptoms?" }
    ],
    note: "У врача почти всегда во множественном числе. В единственном числе die Beschwerde — жалоба (на сервис, соседа).",
    i18n: { en: { note: "At the doctor’s it is almost always plural. The singular die Beschwerde means a complaint (about a service or a neighbour)." } }
  },
  {
    id: 'b2-ges-nebenwirkung', level: 'b2', pos: 'noun', de: "Nebenwirkung",
    article: 'die', plural: "die Nebenwirkungen",
    ru: "побочное действие", en: "side effect",
    examples: [
      { de: "Müdigkeit ist eine häufige [[Nebenwirkung]] dieses Medikaments.", ru: "Усталость — частое побочное действие этого лекарства.", en: "Tiredness is a common side effect of this medication." }
    ],
    note: "Из рекламы лекарств: «Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker».",
    i18n: { en: { note: "From German medicine adverts: “Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.”" } }
  },
  {
    id: 'b2-ges-unvertraeglichkeit', level: 'b2', pos: 'noun', de: "Unverträglichkeit",
    article: 'die', plural: "die Unverträglichkeiten",
    ru: "непереносимость", en: "intolerance (food, medication)",
    examples: [
      { de: "Wegen einer [[Unverträglichkeit]] verzichte ich auf Milchprodukte.", ru: "Из-за непереносимости я отказываюсь от молочных продуктов.", en: "I avoid dairy products because of an intolerance." }
    ],
    parts: [["un-", { ru: "не-", en: "un-, not" }], ["verträglich", { ru: "переносимый", en: "tolerable" }], ["-keit", { ru: "суффикс существительного", en: "noun suffix" }]]
  },
  {
    id: 'b2-ges-facharzt', level: 'b2', pos: 'noun', de: "Facharzt",
    article: 'der', plural: "die Fachärzte",
    ru: "врач-специалист", en: "specialist (doctor)",
    examples: [
      { de: "Auf einen Termin beim [[Facharzt]] wartet man oft mehrere Wochen.", ru: "Записи к специалисту часто ждут несколько недель.", en: "You often wait several weeks for an appointment with a specialist." }
    ],
    note: "Обычно сначала Hausarzt, который даёт Überweisung — направление к Facharzt. Женская форма — die Fachärztin.",
    i18n: { en: { note: "Usually you see your GP (Hausarzt) first, who gives you a referral (Überweisung) to the specialist. Female form: die Fachärztin." } }
  },
  {
    id: 'b2-ges-krankschreibung', level: 'b2', pos: 'noun', de: "Krankschreibung",
    article: 'die', plural: "die Krankschreibungen",
    ru: "больничный лист", en: "sick note, medical certificate",
    examples: [
      { de: "Ab dem vierten Krankheitstag braucht mein Arbeitgeber eine [[Krankschreibung]].", ru: "С четвёртого дня болезни работодателю нужен больничный.", en: "From the fourth day of illness, my employer needs a sick note." }
    ],
    note: "Глагол — jemanden krankschreiben: «Die Ärztin hat mich für eine Woche krankgeschrieben». Официально — Arbeitsunfähigkeitsbescheinigung (AU).",
    i18n: { en: { note: "The verb is jemanden krankschreiben: “Die Ärztin hat mich für eine Woche krankgeschrieben.” The official term is Arbeitsunfähigkeitsbescheinigung (AU)." } }
  },
  {
    id: 'b2-ges-zuzahlung', level: 'b2', pos: 'noun', de: "Zuzahlung",
    article: 'die', plural: "die Zuzahlungen",
    ru: "доплата (пациента)", en: "co-payment, prescription charge",
    examples: [
      { de: "Für das Rezept musste ich in der Apotheke fünf Euro [[Zuzahlung]] leisten.", ru: "За лекарство по рецепту мне пришлось доплатить в аптеке пять евро.", en: "I had to pay a five-euro prescription charge at the pharmacy." }
    ]
  },
  {
    id: 'b2-ges-impfung', level: 'b2', pos: 'noun', de: "Impfung",
    article: 'die', plural: "die Impfungen",
    ru: "прививка, вакцинация", en: "vaccination",
    examples: [
      { de: "Vor der Reise sollte man prüfen, ob die [[Impfungen]] noch aktuell sind.", ru: "Перед поездкой стоит проверить, действительны ли ещё прививки.", en: "Before travelling, you should check that your vaccinations are up to date." }
    ],
    note: "Глагол: sich impfen lassen — сделать прививку. Документ — der Impfpass.",
    i18n: { en: { note: "Verb: sich impfen lassen — to get vaccinated. The record is the Impfpass." } }
  },
  {
    id: 'b2-ges-reha', level: 'b2', pos: 'noun', de: "Reha",
    article: 'die', plural: "die Rehas",
    ru: "реабилитация (курс восстановления)", en: "rehab, rehabilitation",
    examples: [
      { de: "Nach der Knieoperation war mein Vater drei Wochen in der [[Reha]].", ru: "После операции на колене мой отец три недели проходил реабилитацию.", en: "After his knee operation, my father spent three weeks in rehab." }
    ],
    note: "Разговорное сокращение от Rehabilitation. Типично: in die Reha gehen, eine Reha beantragen.",
    i18n: { en: { note: "Colloquial short form of Rehabilitation. Typical: in die Reha gehen, eine Reha beantragen." } }
  },
  {
    id: 'b2-ges-chronisch', level: 'b2', pos: 'adj', de: "chronisch",
    ru: "хронический", en: "chronic",
    examples: [
      { de: "Bei [[chronischen]] Rückenschmerzen hilft oft regelmäßige Bewegung.", ru: "При хронических болях в спине часто помогает регулярное движение.", en: "Regular exercise often helps with chronic back pain." }
    ]
  },
  {
    id: 'b2-ges-vorbeugen', level: 'b2', pos: 'verb', de: "vorbeugen",
    forms: { praes: "beugt vor", praet: "beugte vor", perf: "hat vorgebeugt" }, gov: "+ Dat.",
    ru: "предотвращать, предупреждать (болезнь)", en: "to prevent",
    examples: [
      { de: "Mit ausreichend Schlaf kann man vielen Infekten [[vorbeugen]].", ru: "Достаточный сон помогает предотвратить многие инфекции.", en: "Getting enough sleep can help prevent many infections." }
    ],
    note: "С дательным падежом: einer Krankheit vorbeugen. Существительное — die Vorbeugung.",
    i18n: { en: { note: "Takes the dative: einer Krankheit vorbeugen. The noun is die Vorbeugung." } }
  },
  {
    id: 'b2-ges-krankmelden', level: 'b2', pos: 'verb', de: "sich krankmelden",
    forms: { praes: "meldet sich krank", praet: "meldete sich krank", perf: "hat sich krankgemeldet" },
    ru: "сообщить (на работу), что заболел", en: "to call in sick",
    examples: [
      { de: "Ich habe mich heute Morgen bei meiner Chefin [[krankgemeldet]].", ru: "Сегодня утром я сообщил начальнице, что заболел.", en: "I called in sick to my boss this morning." }
    ]
  }
] });
