/* Curated German B2 vocabulary · B2 everyday topics: Rights & Paperwork. Original examples and translations. */
GT.register({ tab: 'words', topic: 'b2_recht', items: [
  {
    id: 'b2-recht-anspruch', level: 'b2', pos: 'noun', de: "Anspruch",
    article: 'der', plural: "die Ansprüche", gov: "auf + Akk.",
    ru: "право (на что-то), притязание", en: "entitlement, right (to something)",
    examples: [
      { de: "Als Arbeitnehmer haben Sie [[Anspruch]] auf mindestens 20 Urlaubstage.", ru: "Как работник вы имеете право минимум на 20 дней отпуска.", en: "As an employee, you’re entitled to at least 20 days of holiday." }
    ],
    note: "Anspruch haben auf + Akk. Во мн. ч. также «требования»: hohe Ansprüche haben — быть требовательным.",
    i18n: { en: { note: "Anspruch haben auf + Akk. In the plural it can also mean standards: hohe Ansprüche haben — to be demanding." } }
  },
  {
    id: 'b2-recht-bearbeitungszeit', level: 'b2', pos: 'noun', de: "Bearbeitungszeit",
    article: 'die', plural: "die Bearbeitungszeiten",
    ru: "срок рассмотрения (заявления)", en: "processing time",
    examples: [
      { de: "Die [[Bearbeitungszeit]] für den neuen Pass beträgt etwa sechs Wochen.", ru: "Срок оформления нового паспорта — около шести недель.", en: "The processing time for the new passport is about six weeks." }
    ]
  },
  {
    id: 'b2-recht-vollmacht', level: 'b2', pos: 'noun', de: "Vollmacht",
    article: 'die', plural: "die Vollmachten",
    ru: "доверенность", en: "power of attorney, authorisation",
    examples: [
      { de: "Mit einer schriftlichen [[Vollmacht]] kann meine Frau das Paket für mich abholen.", ru: "По письменной доверенности моя жена может забрать посылку за меня.", en: "With written authorisation, my wife can pick up the parcel for me." }
    ]
  },
  {
    id: 'b2-recht-aufenthaltstitel', level: 'b2', pos: 'noun', de: "Aufenthaltstitel",
    article: 'der', plural: "die Aufenthaltstitel",
    ru: "вид на жительство (общее название)", en: "residence permit",
    examples: [
      { de: "Ich muss meinen [[Aufenthaltstitel]] bei der Ausländerbehörde verlängern lassen.", ru: "Мне нужно продлить вид на жительство в ведомстве по делам иностранцев.", en: "I need to get my residence permit extended at the immigration office." }
    ],
    note: "Официальный общий термин: к нему относятся Aufenthaltserlaubnis, Niederlassungserlaubnis, Blaue Karte EU и др.",
    i18n: { en: { note: "The official umbrella term, covering the Aufenthaltserlaubnis, Niederlassungserlaubnis, EU Blue Card and others." } }
  },
  {
    id: 'b2-recht-beglaubigung', level: 'b2', pos: 'noun', de: "Beglaubigung",
    article: 'die', plural: "die Beglaubigungen",
    ru: "заверение (копии, подписи)", en: "certification (of a copy or signature)",
    examples: [
      { de: "Für die Anerkennung meines Diploms brauche ich eine [[Beglaubigung]] der Kopien.", ru: "Для признания диплома мне нужно заверить копии.", en: "To have my degree recognised, I need the copies certified." }
    ],
    note: "Часто как прилагательное: eine beglaubigte Kopie — заверенная копия.",
    i18n: { en: { note: "Often used as an adjective: eine beglaubigte Kopie — a certified copy." } }
  },
  {
    id: 'b2-recht-bussgeld', level: 'b2', pos: 'noun', de: "Bußgeld",
    article: 'das', plural: "die Bußgelder",
    ru: "административный штраф", en: "fine (for an administrative offence)",
    examples: [
      { de: "Wer zu schnell fährt, muss mit einem [[Bußgeld]] rechnen.", ru: "Тому, кто превышает скорость, грозит штраф.", en: "Anyone who speeds can expect a fine." }
    ],
    note: "Bußgeld — за нарушения (ПДД и т. п.). Geldstrafe — наказание по уголовному делу по решению суда.",
    i18n: { en: { note: "Bußgeld is for minor offences such as traffic violations. A Geldstrafe is a fine imposed by a criminal court." } }
  },
  {
    id: 'b2-recht-einspruch', level: 'b2', pos: 'noun', de: "Einspruch",
    article: 'der', plural: "die Einsprüche", gov: "gegen + Akk.",
    ru: "возражение, обжалование", en: "objection, appeal",
    examples: [
      { de: "Gegen den Steuerbescheid können Sie innerhalb eines Monats [[Einspruch]] einlegen.", ru: "Налоговое уведомление можно обжаловать в течение месяца.", en: "You can lodge an objection to the tax assessment within one month." }
    ],
    note: "Einspruch einlegen — например, против налогового уведомления или штрафа. Против многих других решений ведомств подают Widerspruch.",
    i18n: { en: { note: "Einspruch einlegen is used, for example, against a tax assessment or a fine. Against many other official decisions you file a Widerspruch." } }
  },
  {
    id: 'b2-recht-haftpflichtversicherung', level: 'b2', pos: 'noun', de: "Haftpflichtversicherung",
    article: 'die', plural: "die Haftpflichtversicherungen",
    ru: "страхование гражданской ответственности", en: "personal liability insurance",
    examples: [
      { de: "Als mir das Handy der Kollegin runtergefallen ist, hat meine [[Haftpflichtversicherung]] den Schaden bezahlt.", ru: "Когда я уронил телефон коллеги, ущерб оплатила моя страховка ответственности.", en: "When I dropped my colleague’s phone, my liability insurance paid for the damage." }
    ],
    parts: [["Haftpflicht", { ru: "обязанность возместить ущерб", en: "liability for damage" }], ["Versicherung", { ru: "страховка", en: "insurance" }]]
  },
  {
    id: 'b2-recht-haften', level: 'b2', pos: 'verb', de: "haften",
    forms: { praes: "haftet", praet: "haftete", perf: "hat gehaftet" }, gov: "für + Akk.",
    ru: "нести ответственность (за ущерб)", en: "to be liable",
    examples: [
      { de: "Eltern [[haften]] für ihre Kinder — so steht es auf vielen Baustellenschildern.", ru: "Родители отвечают за своих детей — так написано на многих табличках у строек.", en: "Parents are liable for their children — that’s what many building-site signs say." }
    ],
    note: "Буквальное значение — «прилипать, держаться»: Der Aufkleber haftet gut.",
    i18n: { en: { note: "The literal meaning is “to stick”: Der Aufkleber haftet gut." } }
  },
  {
    id: 'b2-recht-zustimmen', level: 'b2', pos: 'verb', de: "zustimmen",
    forms: { praes: "stimmt zu", praet: "stimmte zu", perf: "hat zugestimmt" }, gov: "+ Dat.",
    ru: "соглашаться, давать согласие", en: "to agree, to consent",
    examples: [
      { de: "Der Vermieter muss der Untervermietung erst [[zustimmen]].", ru: "Сначала арендодатель должен дать согласие на субаренду.", en: "The landlord has to consent to the sublet first." }
    ],
    note: "Управляет дательным: einem Vorschlag zustimmen. Существительное — die Zustimmung.",
    i18n: { en: { note: "Takes the dative: einem Vorschlag zustimmen. The noun is die Zustimmung." } }
  },
  {
    id: 'b2-recht-verpflichtet', level: 'b2', pos: 'adj', de: "verpflichtet",
    gov: "zu + Dat.",
    ru: "обязанный", en: "obliged, required",
    examples: [
      { de: "Arbeitgeber sind [[verpflichtet]], die Arbeitszeit zu erfassen.", ru: "Работодатели обязаны учитывать рабочее время.", en: "Employers are required to record working hours." }
    ],
    note: "Две конструкции: zu etwas verpflichtet sein или verpflichtet sein, etwas zu tun.",
    i18n: { en: { note: "Two patterns: zu etwas verpflichtet sein, or verpflichtet sein, etwas zu tun." } }
  },
  {
    id: 'b2-recht-fristgerecht', level: 'b2', pos: 'adj', de: "fristgerecht",
    ru: "в установленный срок", en: "on time, within the deadline",
    examples: [
      { de: "Die Unterlagen sind [[fristgerecht]] eingegangen, Ihr Antrag wird jetzt bearbeitet.", ru: "Документы поступили в срок, ваше заявление сейчас рассматривается.", en: "The documents arrived within the deadline; your application is now being processed." }
    ],
    parts: [["Frist", { ru: "срок", en: "deadline" }], ["gerecht", { ru: "соответствующий", en: "in line with" }]]
  }
] });
