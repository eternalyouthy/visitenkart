/* Extra topic memberships for cards defined in files that load late (roots). Loaded last in the German pack,
 * so every id exists. One card, shared progress — no duplicate headwords. */
GT.addMember('r-setzen-umsetzen', 'it', 'dev');           // umsetzen — to implement
GT.addMember('r-halten-aufenthalt', 'words', 'b2_reisen'); // der Aufenthalt — stay
GT.addMember('pro-office-schnittstelle', 'it', 'dev');    // die Schnittstelle — API / interface
GT.addMember('b2-wiss-stichprobe', 'it', 'ai_data');      // die Stichprobe — statistical sample

// Batch 7 · Cross-topic memberships reusing existing German B1–B2 cards in new Professional tracks
GT.addMember('b1-m2-auslaenderbehoerde', 'it', 'bureau_offices');
GT.addMember('b2-m2-einbuergerung', 'it', 'bureau_offices');
GT.addMember('b2-recht-aufenthaltstitel', 'it', 'bureau_offices');
GT.addMember('pro-m4-zustaendigkeit', 'it', 'bureau_offices');

GT.addMember('b1-authorities-bescheid', 'it', 'bureau_docs');
GT.addMember('b2-recht-vollmacht', 'it', 'bureau_docs');
GT.addMember('b2-recht-beglaubigung', 'it', 'bureau_docs');
GT.addMember('b2-recht-einspruch', 'it', 'bureau_docs');
GT.addMember('it-sec-nachweis', 'it', 'bureau_docs');

GT.addMember('b2-m2-schadensersatz', 'it', 'legal_contracts');
GT.addMember('b2-wirtschaft-gewaehrleistung', 'it', 'legal_contracts');

GT.addMember('b2-recht-bussgeld', 'it', 'legal_criminal');

GT.addMember('b2-beruf-arbeitszeugnis', 'it', 'legal_labour');
GT.addMember('b2-beruf-betriebsrat', 'it', 'legal_labour');
GT.addMember('b2-beruf-kuendigungsfrist', 'it', 'legal_labour');
GT.addMember('pro-m4-kurzarbeit', 'it', 'legal_labour');
GT.addMember('pro-m3-befristung', 'it', 'legal_labour');
GT.addMember('pro-b5-abmahnung', 'it', 'legal_labour');

GT.addMember('it-sec-datenschutz', 'it', 'legal_corporate');
GT.addMember('b2-gesellschaft-interessenkonflikt', 'it', 'legal_corporate');

GT.addMember('b2-reisen-ueberbucht', 'it', 'svc_hotel');

GT.addMember('b1-m2-umtausch', 'it', 'svc_retail');
GT.addMember('b2-wirtschaft-rueckerstattung', 'it', 'svc_retail');

GT.addMember('pro-new-zielgruppe', 'it', 'fin_marketing');
GT.addMember('pro-m4-kundenbindung', 'it', 'fin_marketing');
GT.addMember('b2-medien-reichweite', 'it', 'fin_marketing');

GT.addMember('pro-m3-stellenbeschreibung', 'it', 'fin_hr');
GT.addMember('pro-m3-mitarbeiterbindung', 'it', 'fin_hr');
GT.addMember('pro-m3-fluktuation', 'it', 'fin_hr');
GT.addMember('pro-m4-stellenausschreibung', 'it', 'fin_hr');
GT.addMember('b2-beruf-gehaltsverhandlung', 'it', 'fin_hr');

GT.addMember('b2-ges-vorsorgeuntersuchung', 'it', 'med_clinical');

GT.addMember('it-sec-lieferkette', 'it', 'ops_logistics');

GT.addMember('pro-new-kostenvoranschlag', 'it', 'ops_trades');

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.packs.de.byId["b2-m3-lehrgang"].examples.push({
  "t": "Der [[Lehrgang]] endet mit einer praktischen Prüfung.",
  "en": "The training course ends with a practical examination.",
  "ru": "Учебный курс заканчивается практическим экзаменом.",
  "de": "Der [[Lehrgang]] endet mit einer praktischen Prüfung.",
  "sense": {
    "ru": "учебный курс",
    "en": "training course"
  }
});

(GT.packs.de.byId["b2-m3-lehrgang"].sourceRefs || (GT.packs.de.byId["b2-m3-lehrgang"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 5,
  "headword": "Lehrgang",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-bildung-vorkenntnisse"].examples.push({
  "t": "Für diesen Kurs brauchen Sie keine [[Vorkenntnisse]].",
  "en": "You do not need any prior knowledge for this course.",
  "ru": "Для этого курса не нужны предварительные знания.",
  "de": "Für diesen Kurs brauchen Sie keine [[Vorkenntnisse]].",
  "sense": {
    "ru": "предварительные знания",
    "en": "prior knowledge"
  }
});

(GT.packs.de.byId["b2-bildung-vorkenntnisse"].sourceRefs || (GT.packs.de.byId["b2-bildung-vorkenntnisse"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 5,
  "headword": "Vorkenntnisse",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-fachwortschatz"].examples.push({
  "t": "Im Praktikum erweitert sie ihren [[Fachwortschatz]].",
  "en": "She is expanding her specialist vocabulary during the placement.",
  "ru": "Во время практики она расширяет свою профессиональную лексику.",
  "de": "Im Praktikum erweitert sie ihren [[Fachwortschatz]].",
  "sense": {
    "ru": "профессиональная лексика",
    "en": "specialist vocabulary"
  }
});

(GT.packs.de.byId["b2-m3-fachwortschatz"].sourceRefs || (GT.packs.de.byId["b2-m3-fachwortschatz"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 5,
  "headword": "Fachwortschatz",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-fachwortschatz"].plural = "die Fachwortschätze";

GT.packs.de.byId["pro-m4-gehaltsvorstellung"].examples.push({
  "t": "Im Gespräch erklärte sie ihre [[Gehaltsvorstellung]].",
  "en": "During the interview, she explained her salary expectation.",
  "ru": "На собеседовании она объяснила свои зарплатные ожидания.",
  "de": "Im Gespräch erklärte sie ihre [[Gehaltsvorstellung]].",
  "sense": {
    "ru": "зарплатные ожидания",
    "en": "salary expectation"
  }
});

(GT.packs.de.byId["pro-m4-gehaltsvorstellung"].sourceRefs || (GT.packs.de.byId["pro-m4-gehaltsvorstellung"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 8,
  "headword": "Gehaltsvorstellung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-verschwiegenheitspflicht"].examples.push({
  "t": "Bei der Einarbeitung wird die [[Verschwiegenheitspflicht]] erklärt.",
  "en": "The duty of confidentiality is explained during induction.",
  "ru": "Во время вводного обучения объясняют обязанность сохранять конфиденциальность.",
  "de": "Bei der Einarbeitung wird die [[Verschwiegenheitspflicht]] erklärt.",
  "sense": {
    "ru": "обязанность сохранять конфиденциальность",
    "en": "duty of confidentiality"
  }
});

(GT.packs.de.byId["b2-m3-verschwiegenheitspflicht"].sourceRefs || (GT.packs.de.byId["b2-m3-verschwiegenheitspflicht"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 9,
  "headword": "Verschwiegenheitspflicht",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-gehoerschutz"].examples.push({
  "t": "Für den Besuch der lauten Werkhalle liegt [[Gehörschutz]] bereit.",
  "en": "Hearing protection is available for the visit to the noisy workshop.",
  "ru": "Для посещения шумного цеха подготовлены средства защиты слуха.",
  "de": "Für den Besuch der lauten Werkhalle liegt [[Gehörschutz]] bereit.",
  "sense": {
    "ru": "средства защиты слуха",
    "en": "hearing protection"
  }
});

(GT.packs.de.byId["b2-m3-gehoerschutz"].sourceRefs || (GT.packs.de.byId["b2-m3-gehoerschutz"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 33,
  "headword": "Gehörschutz",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["it-sec-richtlinie"].examples.push({
  "t": "Die neue [[Richtlinie]] beschreibt den Umgang mit vertraulichen Unterlagen.",
  "en": "The new guideline describes how to handle confidential documents.",
  "ru": "Новый руководящий принцип описывает работу с конфиденциальными документами.",
  "de": "Die neue [[Richtlinie]] beschreibt den Umgang mit vertraulichen Unterlagen.",
  "sense": {
    "ru": "руководящий принцип",
    "en": "guideline"
  }
});

(GT.packs.de.byId["it-sec-richtlinie"].sourceRefs || (GT.packs.de.byId["it-sec-richtlinie"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 20,
  "headword": "Richtlinien",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-datenblatt"].examples.push({
  "t": "Die technischen Maße stehen im [[Datenblatt]].",
  "en": "The technical dimensions are listed in the datasheet.",
  "ru": "Технические размеры указаны в техническом описании.",
  "de": "Die technischen Maße stehen im [[Datenblatt]].",
  "sense": {
    "ru": "техническое описание",
    "en": "datasheet"
  }
});

(GT.packs.de.byId["b2-m3-datenblatt"].sourceRefs || (GT.packs.de.byId["b2-m3-datenblatt"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 21,
  "headword": "Datenblatt",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["it-infra-wartung"].examples.push({
  "t": "Die Maschine ist während der [[Wartung]] nicht verfügbar.",
  "en": "The machine is unavailable during maintenance.",
  "ru": "Во время технического обслуживания станок недоступен.",
  "de": "Die Maschine ist während der [[Wartung]] nicht verfügbar.",
  "sense": {
    "ru": "техническое обслуживание",
    "en": "maintenance"
  }
});

(GT.packs.de.byId["it-infra-wartung"].sourceRefs || (GT.packs.de.byId["it-infra-wartung"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 23,
  "headword": "Wartung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-preisnachlass"].examples.push({
  "t": "Für die größere Bestellung wurde ein [[Preisnachlass]] vereinbart.",
  "en": "A price reduction was agreed for the larger order.",
  "ru": "Для более крупного заказа согласовали снижение цены.",
  "de": "Für die größere Bestellung wurde ein [[Preisnachlass]] vereinbart.",
  "sense": {
    "ru": "снижение цены",
    "en": "price reduction"
  }
});

(GT.packs.de.byId["b2-m3-preisnachlass"].sourceRefs || (GT.packs.de.byId["b2-m3-preisnachlass"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 11,
  "headword": "Preisnachlass",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-eilzuschlag"].examples.push({
  "t": "Für die schnellere Lieferung steht ein [[Eilzuschlag]] im Angebot.",
  "en": "The quote includes an express surcharge for faster delivery.",
  "ru": "В предложении указана доплата за срочность доставки.",
  "de": "Für die schnellere Lieferung steht ein [[Eilzuschlag]] im Angebot.",
  "sense": {
    "ru": "доплата за срочность",
    "en": "express surcharge"
  }
});

(GT.packs.de.byId["b2-m3-eilzuschlag"].sourceRefs || (GT.packs.de.byId["b2-m3-eilzuschlag"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 24,
  "headword": "Eilzuschlag",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["pro-new-vorauszahlung"].examples.push({
  "t": "Die [[Vorauszahlung]] wird mit der Schlussrechnung verrechnet.",
  "en": "The advance payment will be offset against the final invoice.",
  "ru": "Предоплата будет учтена в окончательном счёте.",
  "de": "Die [[Vorauszahlung]] wird mit der Schlussrechnung verrechnet.",
  "sense": {
    "ru": "предоплата",
    "en": "advance payment"
  }
});

(GT.packs.de.byId["pro-new-vorauszahlung"].sourceRefs || (GT.packs.de.byId["pro-new-vorauszahlung"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 25,
  "headword": "Vorauszahlung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["pro-b6-mahnung"].examples.push({
  "t": "Die [[Mahnung]] bezieht sich auf die noch offene Rechnung.",
  "en": "The payment demand concerns the outstanding invoice.",
  "ru": "Требование об оплате относится к ещё не оплаченному счёту.",
  "de": "Die [[Mahnung]] bezieht sich auf die noch offene Rechnung.",
  "sense": {
    "ru": "требование об оплате",
    "en": "payment demand"
  }
});

(GT.packs.de.byId["pro-b6-mahnung"].sourceRefs || (GT.packs.de.byId["pro-b6-mahnung"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 26,
  "headword": "Mahnung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-pflegeversicherung"].examples.push({
  "t": "Die Unterlagen enthalten Informationen zur [[Pflegeversicherung]].",
  "en": "The documents contain information about long-term care insurance.",
  "ru": "В документах есть информация про страхование на случай потребности в уходе.",
  "de": "Die Unterlagen enthalten Informationen zur [[Pflegeversicherung]].",
  "sense": {
    "ru": "страхование на случай потребности в уходе",
    "en": "long-term care insurance"
  }
});

(GT.packs.de.byId["b2-m3-pflegeversicherung"].sourceRefs || (GT.packs.de.byId["b2-m3-pflegeversicherung"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 36,
  "headword": "Pflegeversicherung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-werkvertrag"].examples.push({
  "t": "Der [[Werkvertrag]] beschreibt das vereinbarte Arbeitsergebnis.",
  "en": "The contract for work and services describes the agreed result.",
  "ru": "Договор подряда описывает согласованный результат работы.",
  "de": "Der [[Werkvertrag]] beschreibt das vereinbarte Arbeitsergebnis.",
  "sense": {
    "ru": "договор подряда",
    "en": "contract for work and services"
  }
});

(GT.packs.de.byId["b2-m3-werkvertrag"].sourceRefs || (GT.packs.de.byId["b2-m3-werkvertrag"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 35,
  "headword": "Werkvertrag",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["pro-m3-nebentaetigkeit"].examples.push({
  "t": "Sie bespricht ihre geplante [[Nebentätigkeit]] mit der Personalabteilung.",
  "en": "She is discussing her planned secondary employment with HR.",
  "ru": "Она обсуждает планируемую подработку с отделом кадров.",
  "de": "Sie bespricht ihre geplante [[Nebentätigkeit]] mit der Personalabteilung.",
  "sense": {
    "ru": "подработка",
    "en": "secondary employment"
  }
});

(GT.packs.de.byId["pro-m3-nebentaetigkeit"].sourceRefs || (GT.packs.de.byId["pro-m3-nebentaetigkeit"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 35,
  "headword": "Nebentätigkeit",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-reisen-buchungsbestaetigung"].examples.push({
  "t": "Die [[Buchungsbestätigung]] enthält die Adresse des Tagungshotels.",
  "en": "The booking confirmation contains the conference hotel’s address.",
  "ru": "Подтверждение бронирования содержит адрес гостиницы для конференции.",
  "de": "Die [[Buchungsbestätigung]] enthält die Adresse des Tagungshotels.",
  "sense": {
    "ru": "подтверждение бронирования",
    "en": "booking confirmation"
  }
});

(GT.packs.de.byId["b2-reisen-buchungsbestaetigung"].sourceRefs || (GT.packs.de.byId["b2-reisen-buchungsbestaetigung"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 19,
  "headword": "Buchungsbestätigung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-fahrgemeinschaft"].examples.push({
  "t": "Für die Fahrt zur Messe bilden wir eine [[Fahrgemeinschaft]].",
  "en": "We are forming a carpool for the trip to the trade fair.",
  "ru": "Для поездки на выставку мы организуем совместные поездки на машине.",
  "de": "Für die Fahrt zur Messe bilden wir eine [[Fahrgemeinschaft]].",
  "sense": {
    "ru": "совместные поездки на машине",
    "en": "carpool"
  }
});

(GT.packs.de.byId["b2-m3-fahrgemeinschaft"].sourceRefs || (GT.packs.de.byId["b2-m3-fahrgemeinschaft"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 19,
  "headword": "Fahrgemeinschaft",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["pro-m2-tagesordnungspunkt"].examples.push({
  "t": "Die Lieferprobleme sind der erste [[Tagesordnungspunkt]].",
  "en": "The delivery problems are the first agenda item.",
  "ru": "Проблемы с доставкой — первый пункт повестки дня.",
  "de": "Die Lieferprobleme sind der erste [[Tagesordnungspunkt]].",
  "sense": {
    "ru": "пункт повестки дня",
    "en": "agenda item"
  }
});

(GT.packs.de.byId["pro-m2-tagesordnungspunkt"].sourceRefs || (GT.packs.de.byId["pro-m2-tagesordnungspunkt"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 30,
  "headword": "Tagesordnungspunkt",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-handwerklich"].examples.push({
  "t": "Diese Aufgabe erfordert [[handwerkliche]] Fähigkeiten.",
  "en": "This task requires manual skills.",
  "ru": "Для этой задачи нужны ремесленные навыки.",
  "de": "Diese Aufgabe erfordert [[handwerkliche]] Fähigkeiten.",
  "sense": {
    "ru": "ремесленный",
    "en": "manual"
  }
});

(GT.packs.de.byId["b2-m3-handwerklich"].sourceRefs || (GT.packs.de.byId["b2-m3-handwerklich"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 1,
  "headword": "handwerklich",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-absolvieren"].examples.push({
  "t": "Sie hat einen Lehrgang zur Buchhaltung [[absolviert]].",
  "en": "She has completed a bookkeeping course.",
  "ru": "Она прошла курс по бухгалтерскому учёту.",
  "de": "Sie hat einen Lehrgang zur Buchhaltung [[absolviert]].",
  "sense": {
    "ru": "пройти",
    "en": "complete"
  }
});

(GT.packs.de.byId["b2-m3-absolvieren"].sourceRefs || (GT.packs.de.byId["b2-m3-absolvieren"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 15,
  "headword": "absolvieren",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["it-sec-protokollieren"].examples.push({
  "t": "Die Kollegin [[protokolliert]] die Besprechung.",
  "en": "The colleague takes minutes at the meeting.",
  "ru": "Коллега протоколирует совещание.",
  "de": "Die Kollegin [[protokolliert]] die Besprechung.",
  "sense": {
    "ru": "протоколировать",
    "en": "take minutes"
  }
});

(GT.packs.de.byId["it-sec-protokollieren"].sourceRefs || (GT.packs.de.byId["it-sec-protokollieren"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 31,
  "headword": "protokollieren",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-nachvollziehen"].examples.push({
  "t": "Sie [[vollzog]] die Argumentation Schritt für Schritt [[nach]].",
  "en": "She followed the reasoning step by step.",
  "ru": "Она поняла логику рассуждений, проследив каждый шаг.",
  "de": "Sie [[vollzog]] die Argumentation Schritt für Schritt [[nach]].",
  "sense": {
    "ru": "понять",
    "en": "follow the reasoning"
  }
});

(GT.packs.de.byId["b2-m3-nachvollziehen"].sourceRefs || (GT.packs.de.byId["b2-m3-nachvollziehen"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 31,
  "headword": "nachvollziehen",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["r-sprechen-widersprechen"].examples.push({
  "t": "Die neuen Zahlen [[widersprechen]] dem bisherigen Bericht.",
  "en": "The new figures contradict the previous report.",
  "ru": "Новые данные противоречат прежнему отчёту.",
  "de": "Die neuen Zahlen [[widersprechen]] dem bisherigen Bericht.",
  "sense": {
    "ru": "противоречить",
    "en": "contradict"
  }
});

(GT.packs.de.byId["r-sprechen-widersprechen"].sourceRefs || (GT.packs.de.byId["r-sprechen-widersprechen"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 31,
  "headword": "widersprechen",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-recht-zustimmen"].examples.push({
  "t": "Sie [[stimmt]] dem vorgeschlagenen Zeitplan [[zu]].",
  "en": "She agrees to the proposed schedule.",
  "ru": "Она соглашается с предложенным графиком.",
  "de": "Sie [[stimmt]] dem vorgeschlagenen Zeitplan [[zu]].",
  "sense": {
    "ru": "соглашаться",
    "en": "agree"
  }
});

(GT.packs.de.byId["b2-recht-zustimmen"].sourceRefs || (GT.packs.de.byId["b2-recht-zustimmen"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 31,
  "headword": "zustimmen",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.de.byId["b2-m3-einbehalten"].examples.push({
  "t": "Die Bank [[behielt]] eine Gebühr [[ein]].",
  "en": "The bank withheld a fee.",
  "ru": "Банк удержал комиссию.",
  "de": "Die Bank [[behielt]] eine Gebühr [[ein]].",
  "sense": {
    "ru": "удержать",
    "en": "withhold"
  }
});

(GT.packs.de.byId["b2-m3-einbehalten"].sourceRefs || (GT.packs.de.byId["b2-m3-einbehalten"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 36,
  "headword": "einbehalten",
  "selection": "telc-b2-2026-11-26"
});

GT.addMember("b2-m3-lehrgang", "it", "b2_beruf");

GT.addMember("b2-bildung-vorkenntnisse", "it", "b2_beruf");

GT.addMember("telc26-zulassung", "it", "b2_beruf");

GT.addMember("b2-m3-fachwortschatz", "it", "b2_beruf");

GT.addMember("pro-m4-gehaltsvorstellung", "it", "fin_hr");

GT.addMember("b2-m3-verschwiegenheitspflicht", "it", "legal_corporate");

GT.addMember("telc26-arbeitsablauf", "it", "ops_trades");

GT.addMember("b2-m3-gehoerschutz", "it", "ops_trades");

GT.addMember("telc26-qualitaetssicherung", "it", "dev");

GT.addMember("it-sec-richtlinie", "it", "ops_trades");

GT.addMember("b2-m3-datenblatt", "it", "dev");

GT.addMember("b2-m3-datenblatt", "it", "ops_trades");

GT.addMember("it-infra-wartung", "it", "ops_trades");

GT.addMember("b2-m3-preisnachlass", "it", "clients");

GT.addMember("b2-m3-eilzuschlag", "it", "ops_logistics");

GT.addMember("b2-m3-eilzuschlag", "it", "clients");

GT.addMember("telc26-nettopreis", "it", "clients");

GT.addMember("telc26-bruttopreis", "it", "clients");

GT.addMember("telc26-skonto", "it", "clients");

GT.addMember("pro-new-vorauszahlung", "it", "fin_accounting");

GT.addMember("b2-m3-pflegeversicherung", "it", "bureau_tax");

GT.addMember("b2-m3-werkvertrag", "it", "legal_contracts");

GT.addMember("pro-m3-nebentaetigkeit", "it", "legal_labour");

GT.addMember("b2-reisen-buchungsbestaetigung", "it", "svc_hotel");

GT.addMember("b2-m3-fahrgemeinschaft", "it", "svc_hotel");

GT.addMember("b2-m3-handwerklich", "it", "b2_beruf");

GT.addMember("telc26-belastbar", "it", "b2_beruf");

GT.addMember("telc26-lernbereit", "it", "b2_beruf");

GT.addMember("telc26-fehlerhaft", "words", "b2_medien");

GT.addMember("telc26-angemessen", "it", "workcomm");

GT.addMember("b2-m3-absolvieren", "it", "b2_beruf");

GT.addMember("it-sec-protokollieren", "it", "workcomm");

GT.addMember("b2-m3-nachvollziehen", "it", "workcomm");

GT.addMember("r-sprechen-widersprechen", "it", "workcomm");

GT.addMember("b2-recht-zustimmen", "it", "workcomm");

GT.addMember("b2-m3-einbehalten", "it", "bureau_tax");

GT.addMember("telc26-verallgemeinern", "it", "presentations");

GT.addMember("telc26-bedingungen", "it", "clients");

GT.addMember("telc26-ch-rechtzeitig-bescheid", "it", "workcomm");

GT.addMember("telc26-ch-rechnung-begleichen", "it", "fin_accounting");

GT.addMember("telc26-ch-schriftform", "it", "legal_contracts");

GT.addMember("telc26-ch-ab-werk", "it", "ops_logistics");

GT.addMember("telc26-ch-nachfrage", "it", "clients");

GT.addMember("telc26-ch-gegenvorschlag", "it", "workcomm");

GT.addMember("telc26-ch-verstaendnis", "it", "clients");

if (GT.packs.de.roots["laufen"].ids.indexOf("telc26-arbeitsablauf") < 0) { GT.packs.de.roots["laufen"].words.push(GT.packs.de.byId["telc26-arbeitsablauf"]); GT.registerRoot(GT.packs.de.roots["laufen"]); }

if (GT.packs.de.roots["stellen"].ids.indexOf("pro-m4-gehaltsvorstellung") < 0) { GT.packs.de.roots["stellen"].words.push(GT.packs.de.byId["pro-m4-gehaltsvorstellung"]); GT.registerRoot(GT.packs.de.roots["stellen"]); }

if (GT.packs.de.roots["schlagen"].ids.indexOf("telc26-verbesserungsvorschlag") < 0) { GT.packs.de.roots["schlagen"].words.push(GT.packs.de.byId["telc26-verbesserungsvorschlag"]); GT.registerRoot(GT.packs.de.roots["schlagen"]); }

if (GT.packs.de.roots["gehen"].ids.indexOf("telc26-vorgehen") < 0) { GT.packs.de.roots["gehen"].words.push(GT.packs.de.byId["telc26-vorgehen"]); GT.registerRoot(GT.packs.de.roots["gehen"]); }

if (GT.packs.de.roots["stellen"].ids.indexOf("telc26-freistellung") < 0) { GT.packs.de.roots["stellen"].words.push(GT.packs.de.byId["telc26-freistellung"]); GT.registerRoot(GT.packs.de.roots["stellen"]); }

if (GT.packs.de.roots["kommen"].ids.indexOf("telc26-entgegenkommen") < 0) { GT.packs.de.roots["kommen"].words.push(GT.packs.de.byId["telc26-entgegenkommen"]); GT.registerRoot(GT.packs.de.roots["kommen"]); }
