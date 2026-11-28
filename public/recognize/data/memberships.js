/* Extra topic memberships for cards defined in files that load late (roots). Loaded last in the German pack,
 * so every id exists. One card, shared progress — no duplicate headwords. */
GT.addMember('r-setzen-umsetzen', 'it', 'dev');           // umsetzen — to implement
GT.addMember('r-laufen-ablaufen', 'it', 'security');    // ablaufen — to expire / proceed
GT.addMember('pro-office-abstimmen', 'it', 'b2_arbeitswelt'); // abstimmen — to coordinate / vote
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

GT.addMember("telc26-einzelunternehmer", "it", "clients");

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

GT.addMember("b2-m3-handwerklich", "it", "ops_trades");

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

/* === Content expansion 2026-11-27 (12 new German root families: 7 verb + 5 word-building) === */
(function () {
  'use strict';
  var P = GT.packs.de;
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function byHead(de) {
    var k = String(de || '').replace(/^(der|die|das|sich)\s+/i, '').trim().toLowerCase();
    return P.items.filter(function (x) {
      return String(x.t || x.de || '').replace(/^(der|die|das|sich)\s+/i, '').trim().toLowerCase() === k;
    })[0] || null;
  }
  function v(id, de, forms, ru, en, e, opts) {
    var exst = byHead(de);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: id, pos: 'verb', de: de,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] },
      ru: ru, en: en, examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.prefix) o.prefix = opts.prefix;
    if (opts.sep) o.sep = opts.sep;
    if (opts.stress) o.stress = opts.stress;
    if (opts.tr) o.transparency = opts.tr;
    if (opts.morph) o.morph = opts.morph;
    if (opts.gov) o.gov = opts.gov;
    if (opts.note) { o.note = opts.note[0]; o.i18n = { en: { note: opts.note[1] } }; }
    return o;
  }
  function n(id, article, de, plural, ru, en, e, opts) {
    var exst = byHead(de);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: id, pos: 'noun', article: article, de: de, plural: plural || undefined,
      ru: ru, en: en, examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.morph) o.morph = opts.morph;
    return o;
  }
  function adj(id, de, ru, en, e, opts) {
    var exst = byHead(de);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: id, pos: 'adj', de: de, ru: ru, en: en,
      examples: Array.isArray(e) ? e : [e], level: opts.level || 'B2'
    };
    if (opts.core) o.core = true;
    if (opts.morph) o.morph = opts.morph;
    return o;
  }
  function regRoot(id, verb, ru, en, note, words, extra) {
    extra = extra || {};
    GT.registerRoot(Object.assign({
      id: id, verb: verb, t: verb, ru: ru, en: en,
      note: { ru: note[0], en: note[1] },
      words: words
    }, extra));
    if (P.config.ROOT_PLAN.indexOf(id) < 0) P.config.ROOT_PLAN.push(id);
  }

  /* 1. lassen */
  regRoot('lassen', 'lassen', 'оставлять; позволять; велеть сделать', 'to leave; to let; to have done',
    ['Сильный глагол: lässt — ließ — hat gelassen. С другим глаголом даёт конструкции «позволить» (lass mich reden) и «заказать/поручить» (das Auto reparieren lassen).',
     'Strong verb: lässt — ließ — hat gelassen. With another infinitive it expresses permission (lass mich reden) or having something done (reparieren lassen).'], [
    v('r-lassen-lassen', 'lassen', ['lässt', 'ließ', 'hat gelassen'], 'оставлять; позволять; поручать сделать', 'to leave; to let; to have something done',
      ex('Ich habe meinen Regenschirm aus Versehen im Büro [[gelassen]].', 'Я по ошибке оставил свой зонт в офисе.', 'I accidentally left my umbrella at the office.'),
      { base: true, level: 'B1', morph: 'lass-en' }),
    v('r-lassen-verlassen', 'verlassen', ['verlässt', 'verließ', 'hat verlassen'], 'покидать, уходить; (sich auf + Akk.) полагаться на', 'to leave (a place/person); (sich auf) to rely on',
      ex('Bitte [[verlassen]] Sie das Gebäude im Brandfall über den Notausgang.', 'Пожалуйста, покиньте здание в случае пожара через запасной выход.', 'Please leave the building via the emergency exit in case of fire.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'figurative', morph: 'ver-lass-en' }),
    v('r-lassen-entlassen', 'entlassen', ['entlässt', 'entließ', 'hat entlassen'], 'увольнять; выписывать (из больницы)', 'to dismiss, lay off; to discharge (from hospital)',
      ex('Nach dem Eingriff wurde der Patient bereits am nächsten Tag [[entlassen]].', 'После операции пациента выписали уже на следующий день.', 'After the procedure, the patient was discharged the very next day.'),
      { core: true, prefix: 'ent', sep: 'untrennbar', tr: 'transparent', morph: 'ent-lass-en' }),
    v('r-lassen-zulassen', 'zulassen', ['lässt zu', 'ließ zu', 'hat zugelassen'], 'допускать, разрешать; регистрировать (авто)', 'to admit, permit; to register (a vehicle)',
      ex('Die Prüfungsordnung [[lässt]] in diesem Jahr nur ein Wörterbuch [[zu]].', 'Правила экзамена в этом году допускают только один словарь.', 'The exam regulations permit only one dictionary this year.'),
      { core: true, prefix: 'zu', sep: 'trennbar', tr: 'transparent', morph: 'zu-lass-en' }),
    v('r-lassen-auslassen', 'auslassen', ['lässt aus', 'ließ aus', 'hat ausgelassen'], 'пропускать, опускать (пункт, слово)', 'to omit, leave out, skip',
      ex('Bei der Umfrage dürfen Sie die Frage zum Einkommen [[auslassen]].', 'В опросе вы можете пропустить вопрос о доходе.', 'In the survey you may skip the question about income.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'transparent', morph: 'aus-lass-en' }),
    v('r-lassen-ueberlassen', 'überlassen', ['überlässt', 'überließ', 'hat überlassen'], 'уступать, предоставлять (выбор, место)', 'to leave to, hand over (a choice, space)',
      ex('Die Wahl des Termins [[überlasse]] ich ganz Ihnen.', 'Выбор даты я полностью оставляю за вами.', 'I will leave the choice of date entirely up to you.'),
      { core: true, prefix: 'über', sep: 'untrennbar', tr: 'figurative', morph: 'über-lass-en' }),
    v('r-lassen-unterlassen', 'unterlassen', ['unterlässt', 'unterließ', 'hat unterlassen'], 'воздерживаться от чего-то, прекратить (нежелательное действие)', 'to refrain from, cease doing',
      ex('Bitte [[unterlassen]] Sie das Fotografieren im Labor.', 'Пожалуйста, воздержитесь от съёмки в лаборатории.', 'Please refrain from taking photos in the laboratory.'),
      { sep: 'untrennbar', tr: 'opaque', morph: 'unter-lass-en', level: 'C1' }),
    v('r-lassen-nachlassen', 'nachlassen', ['lässt nach', 'ließ nach', 'hat nachgelassen'], 'ослабевать, спадать', 'to subside, slacken',
      ex('Gegen Abend hat der starke Regen endlich [[nachgelassen]].', 'К вечеру сильный дождь наконец ослаб.', 'Towards evening the heavy rain finally eased up.')),
    n('r-lassen-anlass', 'der', 'Anlass', 'die Anlässe', 'повод, причина; торжественный случай', 'occasion, reason',
      ex('Aus aktuellem [[Anlass]] lädt das Team zu einer kurzen Besprechung ein.', 'По текущему поводу команда приглашает на короткое совещание.', 'On this occasion, the team invites everyone to a brief meeting.'), { morph: 'An-lass' }),
    n('r-lassen-zulassung', 'die', 'Zulassung', 'die Zulassungen', 'допуск, лицензия, регистрация', 'admission, licence, registration',
      ex('Für die [[Zulassung]] zum Kurs braucht man ein B1-Zertifikat.', 'Для допуска на курс нужен сертификат B1.', 'You need a B1 certificate for admission to the course.'))
  ]);

  /* 2. binden */
  regRoot('binden', 'binden', 'связывать, завязывать', 'to tie, bind',
    ['Сильный глагол: bindet — band — hat gebunden. Вся семья строится вокруг идеи связи и обязательств: verbinden (соединять), Verbindung (связь), verbindlich (обязательный).',
     'Strong verb: bindet — band — hat gebunden. The family revolves around connection and obligation: verbinden, Verbindung, verbindlich.'], [
    v('r-binden-binden', 'binden', ['bindet', 'band', 'hat gebunden'], 'связывать, завязывать', 'to tie, bind',
      ex('Er [[band]] das Paket mit einer festen Schnur zusammen.', 'Он перевязал посылку прочным шпагатом.', 'He tied the parcel together with strong string.'),
      { base: true, level: 'B1', morph: 'bind-en' }),
    v('r-binden-verbinden', 'verbinden', ['verbindet', 'verband', 'hat verbunden'], 'соединять (по телефону, провода); связывать; перевязывать (рану)', 'to connect, link; to put through; to bandage',
      ex('Können Sie mich bitte mit Frau Klein in der Buchhaltung [[verbinden]]?', 'Соедините меня, пожалуйста, с фрау Кляйн из бухгалтерии.', 'Could you please put me through to Ms Klein in accounting?'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'transparent', morph: 'ver-bind-en', level: 'B1' }),
    v('r-binden-einbinden', 'einbinden', ['bindet ein', 'band ein', 'hat eingebunden'], 'вовлекать (команду); интегрировать, встраивать', 'to involve, integrate, embed',
      ex('Wir sollten den Betriebsrat frühzeitig in die Planung [[einbinden]].', 'Нам стоит заранее вовлечь производственный совет в планирование.', 'We should involve the works council in the planning early on.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'figurative', morph: 'ein-bind-en' }),
    v('r-binden-anbinden', 'anbinden', ['bindet an', 'band an', 'hat angebunden'], 'привязывать; подключать к сети / системе', 'to tie up; to connect (to a network/system)',
      ex('Der neue Stadtteil wird bald besser an die S-Bahn [[angebunden]].', 'Новый район скоро лучше свяжут со скоростной электричкой.', 'The new district will soon be better connected to the S-Bahn.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'transparent', morph: 'an-bind-en' }),
    v('r-binden-abbinden', 'abbinden', ['bindet ab', 'band ab', 'hat abgebunden'], 'перетягивать (жгутом), перевязывать; загустевать', 'to tie off (a bleeding vessel); to thicken, set',
      ex('Der Ersthelfer musste die tiefe Wunde am Arm vorläufig [[abbinden]].', 'Спасателю пришлось временно перетянуть глубокую рану на руке.', 'The first aider had to temporarily tie off the deep wound on the arm.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'transparent', morph: 'ab-bind-en' }),
    v('r-binden-entbinden', 'entbinden', ['entbindet', 'entband', 'hat entbunden'], 'освобождать (от обязанности, тайны); принимать роды', 'to release (from a duty); to deliver (a baby)',
      ex('Der Patient kann seine Ärztin schriftlich von der Schweigepflicht [[entbinden]].', 'Пациент может письменно освободить врача от врачебной тайны.', 'The patient can release his doctor from confidentiality in writing.'),
      { core: true, prefix: 'ent', sep: 'untrennbar', tr: 'figurative', morph: 'ent-bind-en', level: 'C1' }),
    n('r-binden-buendnis', 'das', 'Bündnis', 'die Bündnisse', 'союз, альянс', 'alliance, coalition',
      ex('Mehrere Gemeinden gründeten ein [[Bündnis]] für bezahlbares Wohnen.', 'Несколько общин создали союз за доступное жильё.', 'Several municipalities formed an alliance for affordable housing.'), { morph: 'Bünd-nis' }),
    n('r-binden-verbindung', 'die', 'Verbindung', 'die Verbindungen', 'связь, соединение, пересадка', 'connection, link',
      ex('Die [[Verbindung]] zum Server war kurz unterbrochen.', 'Связь с сервером была ненадолго прервана.', 'The connection to the server was briefly interrupted.')),
    adj('r-binden-verbindlich', 'verbindlich', 'обязательный, обязывающий', 'binding',
      ex('Eine [[verbindliche]] Anmeldung ist bis Freitag möglich.', 'Обязательная регистрация возможна до пятницы.', 'Binding registration is possible until Friday.'))
  ]);

  /* 3. finden */
  regRoot('finden', 'finden', 'находить; считать, находить (каким-л.)', 'to find; to consider',
    ['Сильный глагол: findet — fand — hat gefunden. От «найти» идут erfinden (изобрести), empfinden (ощущать), sich befinden (находиться) и der Befund (заключение/результат).',
     'Strong verb: findet — fand — hat gefunden. Derivatives cover inventing (erfinden), feeling (empfinden), being located (sich befinden) and findings (Befund).'], [
    v('r-finden-finden', 'finden', ['findet', 'fand', 'hat gefunden'], 'находить; считать', 'to find; to think, consider',
      ex('Ich [[finde]] deinen Vorschlag für den Zeitplan sehr realistisch.', 'Я считаю твоё предложение по графику вполне реалистичным.', 'I find your proposal for the schedule very realistic.'),
      { base: true, level: 'B1', morph: 'find-en' }),
    v('r-finden-erfinden', 'erfinden', ['erfindet', 'erfand', 'hat erfunden'], 'изобретать; выдумывать', 'to invent; to make up',
      ex('Man muss das Rad nicht bei jedem Projekt neu [[erfinden]].', 'Не нужно изобретать колесо заново в каждом проекте.', 'You don’t need to reinvent the wheel in every project.'),
      { core: true, prefix: 'er', sep: 'untrennbar', tr: 'transparent', morph: 'er-find-en', level: 'B1' }),
    v('r-finden-empfinden', 'empfinden', ['empfindet', 'empfand', 'hat empfunden'], 'испытывать, ощущать (чувство)', 'to feel, perceive',
      ex('Viele [[empfinden]] ständige Erreichbarkeit nach Feierabend als Belastung.', 'Многие ощущают постоянную доступность после работы как нагрузку.', 'Many people perceive constant availability after hours as a burden.'),
      { sep: 'untrennbar', tr: 'figurative', morph: 'emp-find-en' }),
    v('r-finden-befinden', 'sich befinden', ['befindet sich', 'befand sich', 'hat sich befunden'], 'находиться, располагаться', 'to be located, be situated',
      ex('Die Beratungsstelle [[befindet sich]] im zweiten Stock links.', 'Консультационный центр находится на втором этаже слева.', 'The advice centre is located on the second floor on the left.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'transparent', morph: 'be-find-en', level: 'B1' }),
    v('r-finden-abfinden', 'sich abfinden', ['findet sich ab', 'fand sich ab', 'hat sich abgefunden'], 'смиряться (с чем-то — mit + Dat.)', 'to come to terms with, accept',
      ex('Mit der längeren Wartezeit mussten sich alle Fahrgäste [[abfinden]].', 'Всем пассажирам пришлось смириться с более долгим ожиданием.', 'All passengers had to come to terms with the longer wait.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-find-en' }),
    v('r-finden-vorfinden', 'vorfinden', ['findet vor', 'fand vor', 'hat vorgefunden'], 'заставать, обнаруживать (на месте)', 'to find, encounter (on arrival)',
      ex('Am Montagmorgen [[fanden]] wir im Lager ein völliges Durcheinander [[vor]].', 'В понедельник утром мы застали на складе полный беспорядок.', 'On Monday morning we found complete chaos in the warehouse.'),
      { core: true, prefix: 'vor', sep: 'trennbar', tr: 'transparent', morph: 'vor-find-en' }),
    v('r-finden-herausfinden', 'herausfinden', ['findet heraus', 'fand heraus', 'hat herausgefunden'], 'выяснять, доискиваться до сути', 'to find out, figure out',
      ex('Die Techniker konnten schnell [[herausfinden]], warum der Druck abfiel.', 'Техники смогли быстро выяснить, почему упало давление.', 'The technicians were quickly able to find out why the pressure dropped.'),
      { morph: 'heraus-find-en', level: 'B1' }),
    n('r-finden-erfindung', 'die', 'Erfindung', 'die Erfindungen', 'изобретение; выдумка', 'invention',
      ex('Diese kleine [[Erfindung]] spart in der Werkstatt jeden Tag zwanzig Minuten.', 'Это небольшое изобретение экономит в мастерской двадцать минут каждый день.', 'This small invention saves twenty minutes every day in the workshop.'), { morph: 'Er-find-ung' }),
    adj('r-finden-empfindlich', 'empfindlich', 'чувствительный; ранимый', 'sensitive; delicate',
      ex('Die Sensoren reagieren sehr [[empfindlich]] auf Temperaturschwankungen.', 'Датчики очень чувствительно реагируют на колебания температуры.', 'The sensors react very sensitively to temperature fluctuations.'), { morph: 'emp-find-lich' }),
    n('r-finden-befund', 'der', 'Befund', 'die Befunde', 'результат обследования, заключение, вывод', 'finding, medical result',
      ex('Die Ärztin besprach den [[Befund]] der Laboruntersuchung in Ruhe mit ihm.', 'Врач спокойно обсудила с ним результат лабораторного обследования.', 'The doctor calmly discussed the laboratory finding with him.'), { morph: 'Be-fund' })
  ]);

  /* 4. richten */
  regRoot('richten', 'richten', 'направлять; налаживать; судить', 'to direct; to fix; to judge',
    ['Слабый глагол: richtet — richtete — hat gerichtet. Корневое значение «делать прямым, направлять» даёт einrichten (обставить/настроить), berichten (сообщать), errichten (возвести) и die Richtung (направление).',
     'Weak verb: richtet — richtete — hat gerichtet. The core sense “make straight, direct” yields einrichten (set up/furnish), berichten (report), errichten (erect) and Richtung (direction).'], [
    v('r-richten-richten', 'richten', ['richtet', 'richtete', 'hat gerichtet'], 'направлять (внимание, вопрос); (sich nach + Dat.) ориентироваться на', 'to direct, address; (sich nach) to follow, be guided by',
      ex('Unsere Preise [[richten]] sich nach dem tatsächlichen Aufwand.', 'Наши цены зависят от фактических затрат.', 'Our prices are guided by the actual effort involved.'),
      { base: true, morph: 'richt-en' }),
    v('r-richten-berichten', 'berichten', ['berichtet', 'berichtete', 'hat berichtet'], 'сообщать, докладывать, рассказывать', 'to report',
      ex('Im Meeting [[berichtete]] die Projektleiterin über den aktuellen Stand.', 'На встрече руководитель проекта доложила о текущем положении дел.', 'In the meeting, the project manager reported on the current status.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'transparent', morph: 'be-richt-en', level: 'B1' }),
    v('r-richten-errichten', 'errichten', ['errichtet', 'errichtete', 'hat errichtet'], 'возводить, строить, учреждать', 'to erect, build, establish',
      ex('Auf dem ehemaligen Fabrikgelände wird ein neues Wohnviertel [[errichtet]].', 'На бывшей фабричной территории возводят новый жилой квартал.', 'A new residential district is being built on the former factory site.'),
      { core: true, prefix: 'er', sep: 'untrennbar', tr: 'transparent', morph: 'er-richt-en' }),
    v('r-richten-unterrichten', 'unterrichten', ['unterrichtet', 'unterrichtete', 'hat unterrichtet'], 'преподавать; уведомлять', 'to teach; to inform',
      ex('Sie [[unterrichtet]] seit fünf Jahren Deutsch für Berufstätige.', 'Она уже пять лет преподаёт немецкий для работающих взрослых.', 'She has been teaching German for working professionals for five years.'),
      { sep: 'untrennbar', tr: 'figurative', morph: 'unter-richt-en', level: 'B1' }),
    v('r-richten-aufrichten', 'aufrichten', ['richtet auf', 'richtete auf', 'hat aufgerichtet'], 'поднимать вертикально; приободрять', 'to raise upright; to cheer up',
      ex('Nach dem Sturz halfen zwei Kollegen ihm, sich langsam [[aufzurichten]].', 'После падения двое коллег помогли ему медленно подняться.', 'After the fall, two colleagues helped him get back upright slowly.'),
      { core: true, prefix: 'auf', sep: 'trennbar', tr: 'transparent', morph: 'auf-richt-en' }),
    v('r-richten-einrichten', 'einrichten', ['richtet ein', 'richtete ein', 'hat eingerichtet'], 'обставлять (квартиру); настраивать', 'to furnish; to set up'),
    v('r-richten-ausrichten', 'ausrichten', ['richtet aus', 'richtete aus', 'hat ausgerichtet'], 'передавать (сообщение); выравнивать', 'to pass on; to align'),
    v('r-richten-anrichten', 'anrichten', ['richtet an', 'richtete an', 'hat angerichtet'], 'наносить (ущерб); подавать на стол', 'to cause (damage); to plate up'),
    n('r-richten-richtung', 'die', 'Richtung', 'die Richtungen', 'направление', 'direction',
      ex('Gehen Sie am Ausgang nach rechts in [[Richtung]] Innenstadt.', 'У выхода идите направо в сторону центра города.', 'At the exit, turn right in the direction of the city centre.'), { morph: 'Richt-ung', level: 'B1' }),
    n('r-richten-bericht', 'der', 'Bericht', 'die Berichte', 'отчёт, доклад', 'report',
      ex('Der monatliche [[Bericht]] liegt bis Freitag vor.', 'Ежемесячный отчёт будет готов до пятницы.', 'The monthly report is ready by Friday.')),
    n('r-richten-gericht', 'das', 'Gericht', 'die Gerichte', 'блюдо; суд', 'dish; court',
      ex('Heute gibt es ein leichtes [[Gericht]] mit Gemüse.', 'Сегодня на обед лёгкое блюдо с овощами.', 'Today there is a light dish with vegetables.'))
  ]);

  /* 5. schließen */
  regRoot('schließen', 'schließen', 'закрывать; заключать (договор, вывод)', 'to close; to conclude',
    ['Сильный глагол: schließt — schloss — hat geschlossen. Через приставки даёт ключевые глаголы: abschließen (закрыть на ключ / завершить / заключить договор), beschließen (решить), ausschließen (исключать), anschließen (подключить).',
     'Strong verb: schließt — schloss — hat geschlossen. Key derivatives include abschließen (lock/complete/sign), beschließen (decide), ausschließen (exclude) and anschließen (connect).'], [
    v('r-schliessen-schliessen', 'schließen', ['schließt', 'schloss', 'hat geschlossen'], 'закрывать; делать вывод', 'to close; to conclude, infer',
      ex('Aus den Zahlen lässt sich [[schließen]], dass das Interesse weiter steigt.', 'Из цифр можно заключить, что интерес продолжает расти.', 'From the figures one can conclude that interest continues to rise.'),
      { base: true, level: 'B1', morph: 'schließ-en' }),
    v('r-schliessen-abschliessen', 'abschließen', ['schließt ab', 'schloss ab', 'hat abgeschlossen'], 'запирать на ключ; завершать; заключать (договор, страховку)', 'to lock; to complete; to take out / conclude',
      ex('Sie hat ihre Berufsausbildung im Sommer mit sehr guten Noten [[abgeschlossen]].', 'Она завершила профессиональное обучение летом с очень хорошими оценками.', 'She completed her vocational training in the summer with very good grades.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-schließ-en', level: 'B1' }),
    v('r-schliessen-beschliessen', 'beschließen', ['beschließt', 'beschloss', 'hat beschlossen'], 'решать, постановлять (совместно)', 'to decide, resolve',
      ex('Der Vorstand hat [[beschlossen]], zwei neue Ausbildungsplätze zu schaffen.', 'Правление постановило создать два новых места для обучения.', 'The board resolved to create two new apprenticeship places.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'figurative', morph: 'be-schließ-en', level: 'B1' }),
    v('r-schliessen-einschliessen', 'einschließen', ['schließt ein', 'schloss ein', 'hat eingeschlossen'], 'включать в себя; запирать внутри', 'to include; to lock in',
      ex('Die Garantie [[schließt]] auch kostenlose Reparaturen im ersten Jahr [[ein]].', 'Гарантия включает в себя и бесплатный ремонт в первый год.', 'The warranty also includes free repairs in the first year.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'transparent', morph: 'ein-schließ-en' }),
    v('r-schliessen-ausschliessen', 'ausschließen', ['schließt aus', 'schloss aus', 'hat ausgeschlossen'], 'исключать (возможность, участника)', 'to rule out, exclude',
      ex('Einen technischen Fehler können wir im Moment noch nicht [[ausschließen]].', 'Техническую ошибку мы на данный момент ещё не можем исключить.', 'We cannot rule out a technical error at this stage.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'figurative', morph: 'aus-schließ-en' }),
    v('r-schliessen-anschliessen', 'anschließen', ['schließt an', 'schloss an', 'hat angeschlossen'], 'подключать; (sich + Dat.) присоединяться к', 'to connect, plug in; (sich) to join',
      ex('Ich möchte mich der Meinung meiner Kollegin ausdrücklich [[anschließen]].', 'Я хотел бы однозначно присоединиться к мнению своей коллеги.', 'I would like to explicitly align myself with my colleague’s opinion.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'transparent', morph: 'an-schließ-en' }),
    v('r-schliessen-verschliessen', 'verschließen', ['verschließt', 'verschloss', 'hat verschlossen'], 'плотно закрывать, запирать; запечатывать', 'to lock up, seal',
      ex('Bitte [[verschließen]] Sie den Aktenschrank nach Feierabend immer sorgfältig.', 'Пожалуйста, всегда тщательно запирайте шкаф с документами после работы.', 'Please always lock the filing cabinet carefully after work.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'transparent', morph: 'ver-schließ-en' }),
    v('r-schliessen-erschliessen', 'erschließen', ['erschließt', 'erschloss', 'hat erschlossen'], 'осваивать (рынок, территорию); выводить смысл', 'to open up, tap (a market); to infer',
      ex('Mit dem neuen Angebot möchte der Betrieb weitere Kundengruppen [[erschließen]].', 'С новым предложением компания хочет освоить новые группы клиентов.', 'With the new offer, the business wants to tap into additional customer groups.'),
      { core: true, prefix: 'er', sep: 'untrennbar', tr: 'figurative', morph: 'er-schließ-en', level: 'C1' }),
    n('r-schliessen-beschluss', 'der', 'Beschluss', 'die Beschlüsse', 'решение, постановление', 'decision, resolution',
      ex('Der gemeinsame [[Beschluss]] tritt sofort nach der Sitzung in Kraft.', 'Совместное постановление вступает в силу сразу после заседания.', 'The joint resolution takes effect immediately after the meeting.'), { morph: 'Be-schluss' }),
    n('r-schliessen-anschluss', 'der', 'Anschluss', 'die Anschlüsse', 'подключение; пересадка (на поезд)', 'connection (transport/device)',
      ex('Wegen der Verspätung verpasste er leider seinen [[Anschluss]].', 'Из-за опоздания он, к сожалению, пропустил пересадку.', 'Because of the delay, he unfortunately missed his connection.')),
    adj('r-schliessen-ausschliesslich', 'ausschließlich', 'исключительный, исключительно', 'exclusive, exclusively',
      ex('Dieses Archiv steht [[ausschließlich]] Mitarbeitenden mit Berechtigung offen.', 'Этот архив открыт исключительно для сотрудников с допуском.', 'This archive is open exclusively to authorised staff.'), { morph: 'aus-schließ-lich' })
  ]);

  /* 6. weisen */
  regRoot('weisen', 'weisen', 'указывать, показывать (путь)', 'to point, show (the way)',
    ['Сильный глагол: weist — wies — hat gewiesen. В современном языке почти всегда с приставкой: beweisen (доказывать), nachweisen (подтверждать документально), überweisen (переводить деньги / направлять к врачу), ausweisen (удостоверять).',
     'Strong verb: weist — wies — hat gewiesen. Mostly used with prefixes: beweisen (prove), nachweisen (document/prove), überweisen (transfer/refer), ausweisen (identify).'], [
    v('r-weisen-weisen', 'weisen', ['weist', 'wies', 'hat gewiesen'], 'указывать (путь, направление)', 'to point, direct',
      ex('Große gelbe Schilder [[weisen]] den Weg zur Sammelstelle.', 'Большие жёлтые таблички указывают путь к месту сбора.', 'Large yellow signs point the way to the assembly point.'),
      { base: true, morph: 'weis-en' }),
    v('r-weisen-beweisen', 'beweisen', ['beweist', 'bewies', 'hat bewiesen'], 'доказывать; проявлять (терпение, смелость)', 'to prove; to demonstrate',
      ex('Durch das Projekt hat sie [[bewiesen]], dass sie ein Team führen kann.', 'Этим проектом она доказала, что умеет руководить командой.', 'Through the project she proved that she can lead a team.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'transparent', morph: 'be-weis-en', level: 'B1' }),
    v('r-weisen-abweisen', 'abweisen', ['weist ab', 'wies ab', 'hat abgewiesen'], 'отклонять (просьбу, жалобу); не пускать', 'to reject, turn away',
      ex('Das Gericht hat die unbegründete Beschwerde sofort [[abgewiesen]].', 'Суд сразу отклонил необоснованную жалобу.', 'The court immediately dismissed the unfounded complaint.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-weis-en' }),
    v('r-weisen-anweisen', 'anweisen', ['weist an', 'wies an', 'hat angewiesen'], 'поручать, инструктировать; перечислять (выплату)', 'to instruct; to remit (payment)',
      ex('Die Buchhaltung hat die Erstattung bereits gestern [[angewiesen]].', 'Бухгалтерия уже вчера отправила возмещение.', 'Accounting already authorised the reimbursement yesterday.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'figurative', morph: 'an-weis-en' }),
    v('r-weisen-ausweisen', 'sich ausweisen', ['weist sich aus', 'wies sich aus', 'hat sich ausgewiesen'], 'предъявлять удостоверение личности; (ausweisen) выдворять', 'to prove one’s identity; to expel',
      ex('Am Werkstor muss sich jeder Besuch mit einem Dokument [[ausweisen]].', 'На проходной каждый посетитель должен подтвердить личность документом.', 'At the factory gate, every visitor must show ID.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'transparent', morph: 'aus-weis-en' }),
    v('r-weisen-ueberweisen', 'überweisen', ['überweist', 'überwies', 'hat überwiesen'], 'переводить (деньги); направлять (к специалисту)', 'to transfer (money); to refer (to a specialist)',
      ex('Ich habe den Rechnungsbetrag heute Vormittag [[überwiesen]].', 'Я перевёл сумму по счёту сегодня в первой половине дня.', 'I transferred the invoice amount this morning.'),
      { core: true, prefix: 'über', sep: 'untrennbar', tr: 'figurative', morph: 'über-weis-en', level: 'B1' }),
    v('r-weisen-hinweisen', 'hinweisen', ['weist hin', 'wies hin', 'hat hingewiesen'], 'указывать, обращать внимание (auf + Akk.)', 'to point out, draw attention to',
      ex('Ich möchte ausdrücklich auf die geänderte Frist [[hinweisen]].', 'Я хотел бы особо указать на изменившийся срок.', 'I would like to explicitly point out the revised deadline.'),
      { morph: 'hin-weis-en' }),
    v('r-weisen-nachweisen', 'nachweisen', ['weist nach', 'wies nach', 'hat nachgewiesen'], 'подтверждать документально, доказывать', 'to prove, document'),
    n('r-weisen-beweis', 'der', 'Beweis', 'die Beweise', 'доказательство, улика', 'proof, evidence',
      ex('Für diese Behauptung fehlt jeder schriftliche [[Beweis]].', 'Для этого утверждения нет ни одного письменного доказательства.', 'There is no written proof at all for this claim.'), { morph: 'Be-weis' }),
    n('r-weisen-hinweis', 'der', 'Hinweis', 'die Hinweise', 'указание, подсказка, примечание', 'note, hint, instruction',
      ex('Bitte lesen Sie die wichtigen [[Hinweise]] auf der Rückseite.', 'Пожалуйста, прочтите важные примечания на обороте.', 'Please read the important notes on the back.')),
    n('r-weisen-ausweis', 'der', 'Ausweis', 'die Ausweise', 'удостоверение личности, пропуск', 'ID card, pass',
      ex('Zeigen Sie am Eingang bitte Ihren [[Ausweis]].', 'Покажите, пожалуйста, удостоверение на входе.', 'Please show your ID card at the entrance.'))
  ]);

  /* 7. wenden */
  regRoot('wenden', 'wenden', 'поворачивать, обращать', 'to turn, reverse',
    ['Смешанный глагол: wendet — wandte (или wendete) — hat gewandt (или gewendet). Ключевые слова: sich an jdn. wenden (обратиться к кому-то), anwenden (применять), verwenden (использовать), der Einwand (возражение).',
     'Mixed verb: wendet — wandte/wendete — hat gewandt/gewendet. Core words: sich wenden an (contact), anwenden (apply), verwenden (use), der Einwand (objection).'], [
    v('r-wenden-wenden', 'wenden', ['wendet', 'wandte', 'hat gewandt'], 'поворачивать; (sich an + Akk.) обращаться к кому-то', 'to turn; (sich an) to turn to, contact',
      ex('Bei Fragen zur Rechnung [[wenden]] Sie sich bitte direkt an den Kundenservice.', 'По вопросам счёта обращайтесь, пожалуйста, напрямую в службу поддержки.', 'For invoice questions, please contact customer service directly.'),
      { base: true, level: 'B1', morph: 'wend-en' }),
    v('r-wenden-anwenden', 'anwenden', ['wendet an', 'wandte an', 'hat angewandt'], 'применять (правило, метод, знания)', 'to apply (a rule, method)',
      ex('Im Projektkurs konnten wir die Theorie sofort praktisch [[anwenden]].', 'На проектном курсе мы сразу смогли применить теорию на практике.', 'In the project course we could apply the theory practically right away.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'transparent', morph: 'an-wend-en' }),
    v('r-wenden-verwenden', 'verwenden', ['verwendet', 'verwandte', 'hat verwandt'], 'использовать, употреблять', 'to use, employ',
      ex('Für die Fassade werden nur witterungsbeständige Materialien [[verwendet]].', 'Для фасада используются только устойчивые к погоде материалы.', 'Only weather-resistant materials are used for the facade.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'transparent', morph: 'ver-wend-en', level: 'B1' }),
    v('r-wenden-abwenden', 'abwenden', ['wendet ab', 'wandte ab', 'hat abgewandt'], 'отводить (взгляд), предотвращать (ущерб, кризис)', 'to avert (harm/crisis); to turn away',
      ex('Durch die schnelle Reaktion ließ sich ein größerer Schaden [[abwenden]].', 'Благодаря быстрой реакции удалось предотвратить более крупный ущерб.', 'Thanks to the quick response, greater damage could be averted.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-wend-en' }),
    v('r-wenden-einwenden', 'einwenden', ['wendet ein', 'wandte ein', 'hat eingewandt'], 'возражать, приводить контраргумент', 'to object, raise an objection',
      ex('Gegen diesen Zeitplan lässt sich kaum etwas [[einwenden]].', 'Против такого графика вряд ли можно что-то возразить.', 'There is hardly anything to object to in this schedule.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'figurative', morph: 'ein-wend-en', level: 'C1' }),
    v('r-wenden-zuwenden', 'sich zuwenden', ['wendet sich zu', 'wandte sich zu', 'hat sich zugewandt'], 'поворачиваться к, обращаться (к новой теме)', 'to turn toward (a person or topic)',
      ex('Nach diesem Punkt sollten wir uns dem Budget [[zuwenden]].', 'После этого пункта нам стоит обратиться к вопросу бюджета.', 'After this point we should turn our attention to the budget.'),
      { core: true, prefix: 'zu', sep: 'trennbar', tr: 'transparent', morph: 'zu-wend-en' }),
    v('r-wenden-aufwenden', 'aufwenden', ['wendet auf', 'wandte auf', 'hat aufgewandt'], 'затрачивать (время, средства, усилия)', 'to spend, expend (time, effort, money)',
      ex('Für die sorgfältige Prüfung mussten wir drei Stunden [[aufwenden]].', 'На тщательную проверку нам пришлось затратить три часа.', 'We had to spend three hours on the careful review.'),
      { core: true, prefix: 'auf', sep: 'trennbar', tr: 'figurative', morph: 'auf-wend-en' }),
    n('r-wenden-anwendung', 'die', 'Anwendung', 'die Anwendungen', 'применение; приложение (программа)', 'application, use; software app',
      ex('Diese [[Anwendung]] erleichtert die Zeiterfassung im Außendienst.', 'Это приложение упрощает учёт рабочего времени на выезде.', 'This application makes time tracking in field service easier.'), { morph: 'An-wend-ung' }),
    n('r-wenden-aufwand', 'der', 'Aufwand', '', 'затраты (времени, сил, средств)', 'effort, expenditure',
      ex('Der finanzielle [[Aufwand]] lohnt sich auf längere Sicht.', 'Финансовые затраты окупаются в долгосрочной перспективе.', 'The financial effort pays off in the longer run.'), { morph: 'Auf-wand' }),
    n('r-wenden-einwand', 'der', 'Einwand', 'die Einwände', 'возражение, довод против', 'objection',
      ex('Ihr berechtigter [[Einwand]] führte zu einer besseren Lösung.', 'Ваше обоснованное возражение привело к лучшему решению.', 'Your valid objection led to a better solution.'))
  ]);

  /* 8. Arbeit (Word-building family, mapVerbs: false) */
  regRoot('Arbeit', 'Arbeit', 'работа, труд', 'work, labour',
    ['Словообразовательное гнездо вокруг die Arbeit / arbeiten: bearbeitung (обработка), verarbeiten (перерабатывать), erarbeiten (вырабатывать), Zusammenarbeit (сотрудничество).',
     'Word-building family around die Arbeit / arbeiten: bearbeiten (edit/process), verarbeiten (process), erarbeiten (work out), Zusammenarbeit (collaboration).'], [
    n('r-arbeit-arbeit', 'die', 'Arbeit', 'die Arbeiten', 'работа, труд', 'work, job, labour',
      ex('Nach der [[Arbeit]] treffe ich mich noch kurz mit Freunden im Park.', 'После работы я ещё ненадолго встречусь с друзьями в парке.', 'After work I’ll meet friends briefly in the park.'),
      { base: true, level: 'B1', morph: 'Arbeit' }),
    v('r-arbeit-arbeiten', 'arbeiten', ['arbeitet', 'arbeitete', 'hat gearbeitet'], 'работать', 'to work',
      ex('Sie [[arbeitet]] seit drei Jahren in einem internationalen Team.', 'Она уже три года работает в международной команде.', 'She has been working in an international team for three years.'),
      { core: true, level: 'B1', morph: 'arbeit-en' }),
    v('r-arbeit-bearbeiten', 'bearbeiten', ['bearbeitet', 'bearbeitete', 'hat bearbeitet'], 'обрабатывать (запрос, текст, файл), редактировать', 'to process (an application/file), edit',
      ex('Die Behörde [[bearbeitet]] Ihren Antrag innerhalb von vierzehn Tagen.', 'Ведомство обработает ваше заявление в течение четырнадцати дней.', 'The authority will process your application within fourteen days.'),
      { core: true, morph: 'be-arbeit-en', level: 'B1' }),
    v('r-arbeit-verarbeiten', 'verarbeiten', ['verarbeitet', 'verarbeitete', 'hat verarbeitet'], 'перерабатывать (сырьё, данные); переваривать (опыт)', 'to process (materials/data); to come to terms with',
      ex('Der Betrieb [[verarbeitet]] nur zertifizierte Rohstoffe aus der Region.', 'Предприятие перерабатывает только сертифицированное сырьё из региона.', 'The business processes only certified raw materials from the region.'),
      { core: true, morph: 'ver-arbeit-en' }),
    v('r-arbeit-erarbeiten', 'erarbeiten', ['erarbeitet', 'erarbeitete', 'hat erarbeitet'], 'разрабатывать, вырабатывать (концепцию, решение)', 'to work out, develop (a plan/concept)',
      ex('Gemeinsam haben wir einen klaren Leitfaden für neue Kräfte [[erarbeitet]].', 'Вместе мы разработали чёткое руководство для новых сотрудников.', 'Together we worked out a clear guideline for new staff.'),
      { core: true, morph: 'er-arbeit-en' }),
    v('r-arbeit-mitarbeiten', 'mitarbeiten', ['arbeitet mit', 'arbeitete mit', 'hat mitgearbeitet'], 'сотрудничать, участвовать в общей работе', 'to collaborate, contribute',
      ex('Alle Abteilungen haben aktiv an der Umsetzung [[mitgearbeitet]].', 'Все отделы активно участвовали в реализации проекта.', 'All departments actively collaborated on the implementation.'),
      { core: true, morph: 'mit-arbeit-en', level: 'B1' }),
    n('r-arbeit-zusammenarbeit', 'die', 'Zusammenarbeit', '', 'сотрудничество, совместная работа', 'collaboration, cooperation',
      ex('Ich bedanke mich herzlich für die angenehme [[Zusammenarbeit]].', 'Сердечно благодарю за приятное сотрудничество.', 'I thank you warmly for the pleasant collaboration.'),
      { core: true, morph: 'Zusammen-arbeit', level: 'B1' }),
    adj('r-arbeit-arbeitslos', 'arbeitslos', 'безработный', 'unemployed',
      ex('Wer [[arbeitslos]] wird, sollte sich frühzeitig melden.', 'Тот, кто становится безработным, должен вовремя встать на учёт.', 'Anyone who becomes unemployed should register early.')),
    n('r-arbeit-arbeitsplatz', 'der', 'Arbeitsplatz', 'die Arbeitsplätze', 'рабочее место', 'workplace',
      ex('Ein ergonomischer [[Arbeitsplatz]] schont den Rücken.', 'Эргономичное рабочее место бережёт спину.', 'An ergonomic workplace protects your back.'))
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 9. Recht (Word-building family, mapVerbs: false) */
  regRoot('Recht', 'Recht', 'право; справедливость', 'right; law',
    ['Словообразовательное гнездо вокруг das Recht: gerecht (справедливый), berechtigen (давать право), rechtfertigen (оправдывать), die Gerechtigkeit (справедливость).',
     'Word-building family around das Recht: gerecht (fair/just), berechtigen (entitle), rechtfertigen (justify), Gerechtigkeit (justice).'], [
    n('r-recht-recht', 'das', 'Recht', 'die Rechte', 'право; закон', 'right; law',
      ex('Jeder Mensch hat das [[Recht]] auf eine faire Anhörung.', 'Каждый человек имеет право на справедливое рассмотрение дела.', 'Everyone has the right to a fair hearing.'),
      { base: true, level: 'B1', morph: 'Recht' }),
    adj('r-recht-gerecht', 'gerecht', 'справедливый', 'fair, just',
      ex('Im Team achten wir auf eine [[gerechte]] Verteilung.', 'В команде мы следим за справедливым распределением.', 'In the team we ensure a fair distribution.')),
    adj('r-recht-ungerecht', 'ungerecht', 'несправедливый', 'unfair, unjust',
      ex('Viele fanden die Entscheidung [[ungerecht]].', 'Многие сочли решение несправедливым.', 'Many felt the decision was unfair.')),
    v('r-recht-berechtigen', 'berechtigen', ['berechtigt', 'berechtigte', 'hat berechtigt'], 'давать право, уполномочивать (zu + Dat.)', 'to entitle, authorise',
      ex('Dieser Ausweis [[berechtigt]] Sie zur kostenlosen Nutzung der Bibliothek.', 'Это удостоверение даёт вам право бесплатно пользоваться библиотекой.', 'This card entitles you to free use of the library.'),
      { core: true, morph: 'be-recht-ig-en' }),
    v('r-recht-rechtfertigen', 'rechtfertigen', ['rechtfertigt', 'rechtfertigte', 'hat gerechtfertigt'], 'оправдывать, обосновывать', 'to justify',
      ex('Der geringe Nutzen [[rechtfertigt]] den hohen Aufwand nicht.', 'Небольшая польза не оправдывает столь высоких затрат.', 'The small benefit does not justify the high expenditure.'),
      { core: true, morph: 'recht-fert-ig-en' }),
    adj('r-recht-rechtlich', 'rechtlich', 'правовой, юридический', 'legal, statutory',
      ex('Vor der Unterschrift klären wir alle [[rechtlichen]] Fragen.', 'Перед подписью мы проясняем все юридические вопросы.', 'Before signing, we clarify all legal questions.'),
      { core: true, morph: 'recht-lich' }),
    n('r-recht-gerechtigkeit', 'die', 'Gerechtigkeit', '', 'справедливость', 'justice, fairness',
      ex('Das Gefühl für [[Gerechtigkeit]] prägt das Klima im Betrieb.', 'Чувство справедливости формирует атмосферу в компании.', 'A sense of fairness shapes the atmosphere in the company.'),
      { core: true, morph: 'Ge-recht-ig-keit' }),
    n('r-recht-vorrecht', 'das', 'Vorrecht', 'die Vorrechte', 'привилегия, преимущественное право', 'privilege, prerogative',
      ex('Weiterbildung darf kein [[Vorrecht]] weniger Abteilungen sein.', 'Повышение квалификации не должно быть привилегией лишь нескольких отделов.', 'Further training must not be the privilege of a few departments.'),
      { morph: 'Vor-recht', level: 'C1' })
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 10. Sinn (Word-building family, mapVerbs: false) */
  regRoot('Sinn', 'Sinn', 'смысл; чувство (орган чувств)', 'sense, meaning',
    ['Словообразовательное гнездо вокруг der Sinn: sinnvoll (осмысленный), sinnlos (бессмысленный), Unsinn (ерунда), sich besinnen (одуматься / сосредоточиться).',
     'Word-building family around der Sinn: sinnvoll (meaningful), sinnlos (pointless), Unsinn (nonsense), sich besinnen (reflect/reconsider).'], [
    n('r-sinn-sinn', 'der', 'Sinn', 'die Sinne', 'смысл; чувство', 'sense, meaning',
      ex('Ohne klares Ziel hat diese zusätzliche Sitzung wenig [[Sinn]].', 'Без чёткой цели это дополнительное совещание имеет мало смысла.', 'Without a clear goal, this extra meeting makes little sense.'),
      { base: true, level: 'B1', morph: 'Sinn' }),
    adj('r-sinn-sinnvoll', 'sinnvoll', 'разумный, осмысленный, целесообразный', 'meaningful, sensible',
      ex('Eine kurze Zusammenfassung am Ende des Gesprächs ist sehr [[sinnvoll]].', 'Короткое резюме в конце разговора очень разумно и полезно.', 'A short summary at the end of the talk is very sensible.'),
      { core: true, morph: 'sinn-voll', level: 'B1' }),
    adj('r-sinn-sinnlos', 'sinnlos', 'бессмысленный, напрасный', 'pointless, senseless',
      ex('Es wäre [[sinnlos]], das ganze Dokument noch einmal von vorn zu schreiben.', 'Было бы бессмысленно переписывать весь документ с самого начала.', 'It would be pointless to rewrite the entire document from scratch.'),
      { core: true, morph: 'sinn-los' }),
    n('r-sinn-unsinn', 'der', 'Unsinn', '', 'чепуха, ерунда, вздор', 'nonsense',
      ex('Glaub nicht jeden [[Unsinn]], der in den sozialen Medien kursiert.', 'Не верь всякой ерунде, которая ходит по соцсетям.', 'Don’t believe every bit of nonsense circulating on social media.'),
      { core: true, morph: 'Un-sinn', level: 'B1' }),
    adj('r-sinn-unsinnig', 'unsinnig', 'нелепый, абсурдный', 'absurd, nonsensical',
      ex('Eine so komplizierte Regel wirkt im Alltag völlig [[unsinnig]].', 'Столь запутанное правило в повседневной жизни выглядит совершенно нелепым.', 'Such a complicated rule seems completely absurd in everyday life.'),
      { core: true, morph: 'un-sinn-ig' }),
    v('r-sinn-besinnen', 'sich besinnen', ['besinnt sich', 'besann sich', 'hat sich besonnen'], 'одуматься, вспомнить, прийти в себя', 'to reflect, think better of it',
      ex('Nach dem ersten Ärger [[besann er sich]] und entschuldigte sich.', 'После первой вспышки гнева он одумался и извинился.', 'After his initial anger, he thought better of it and apologised.'),
      { core: true, morph: 'be-sinn-en', level: 'C1' }),
    n('r-sinn-wahnsinn', 'der', 'Wahnsinn', '', 'безумие; (разг.) невероятно круто', 'madness; (coll.) awesome/crazy',
      ex('Bei diesem Verkehr noch pünktlich anzukommen ist reiner [[Wahnsinn]].', 'Успеть вовремя при таком трафике — просто безумие.', 'Arriving on time in traffic like this is sheer madness.'),
      { morph: 'Wahn-sinn' }),
    n('r-sinn-besinnung', 'die', 'Besinnung', '', 'сознание; осмысление, раздумье', 'consciousness; reflection',
      ex('Nach dem kurzen Schwindel kam er sofort wieder zur [[Besinnung]].', 'После короткого головокружения он сразу пришёл в сознание.', 'After the brief spell of dizziness, he immediately regained consciousness.'),
      { morph: 'Be-sinn-ung', level: 'C1' })
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 11. Kraft (Word-building family, mapVerbs: false) */
  regRoot('Kraft', 'Kraft', 'сила, мощь, энергия', 'strength, power, force',
    ['Словообразовательное гнездо вокруг die Kraft: kräftig (сильный/крепкий), bekräftigen (подтверждать/подкреплять), entkräften (опровергать/обессиливать), kraftlos (бессильный), das Kraftwerk (электростанция).',
     'Word-building family around die Kraft: kräftig (strong), bekräftigen (affirm), entkräften (refute/weaken), kraftlos (powerless), Kraftwerk (power plant).'], [
    n('r-kraft-kraft', 'die', 'Kraft', 'die Kräfte', 'сила, энергия; сотрудник (Fachkraft)', 'strength, power, force',
      ex('Nach dem Urlaub hat sie wieder neue [[Kraft]] für das Projekt.', 'После отпуска у неё снова появились силы для проекта.', 'After the holiday she has fresh energy for the project again.'),
      { base: true, level: 'B1', morph: 'Kraft' }),
    adj('r-kraft-kraeftig', 'kräftig', 'сильный, мощный, крепкий', 'strong, vigorous, hearty',
      ex('Nach der Wanderung gab es eine [[kräftige]] Gemüsesuppe.', 'После похода подали наваристый овощной суп.', 'After the hike there was a hearty vegetable soup.'),
      { core: true, morph: 'kräft-ig', level: 'B1' }),
    v('r-kraft-kraeftigen', 'kräftigen', ['kräftigt', 'kräftigte', 'hat gekräftigt'], 'укреплять, придавать сил', 'to strengthen, invigorate',
      ex('Regelmäßiges Schwimmen [[kräftigt]] die Rückenmuskulatur.', 'Регулярное плавание укрепляет мышцы спины.', 'Regular swimming strengthens the back muscles.'),
      { core: true, morph: 'kräft-ig-en' }),
    v('r-kraft-bekraeftigen', 'bekräftigen', ['bekräftigt', 'bekräftigte', 'hat bekräftigt'], 'подтверждать, подчёркивать, скреплять', 'to reaffirm, confirm',
      ex('Beide Seiten [[bekräftigten]] ihr Interesse an einer weiteren Zusammenarbeit.', 'Обе стороны подтвердили свою заинтересованность в дальнейшем сотрудничестве.', 'Both sides reaffirmed their interest in further collaboration.'),
      { core: true, morph: 'be-kräft-ig-en', level: 'C1' }),
    v('r-kraft-entkraeften', 'entkräften', ['entkräftet', 'entkräftete', 'hat entkräftet'], 'опровергать (аргумент); истощать', 'to refute, invalidate; to weaken'),
    adj('r-kraft-kraftlos', 'kraftlos', 'бессильный, обессиленный', 'weak, powerless',
      ex('Nach dem langen Fieber fühlte er sich noch tagelang [[kraftlos]].', 'После долгой температуры он ещё несколько дней чувствовал себя обессиленным.', 'After the long fever he still felt weak for days.'),
      { core: true, morph: 'kraft-los' }),
    n('r-kraft-kraftwerk', 'das', 'Kraftwerk', 'die Kraftwerke', 'электростанция', 'power plant',
      ex('Das alte [[Kraftwerk]] wird schrittweise durch Solaranlagen ersetzt.', 'Старую электростанцию постепенно заменяют солнечными установками.', 'The old power plant is gradually being replaced by solar arrays.'),
      { morph: 'Kraft-werk' }),
    n('r-kraft-tatkraft', 'die', 'Tatkraft', '', 'энергичность, деятельная сила', 'energy, drive, vigour',
      ex('Mit viel [[Tatkraft]] brachte das neue Team die Renovierung voran.', 'С большой энергией новая команда продвигала ремонт вперёд.', 'With great drive, the new team pushed the renovation forward.'),
      { morph: 'Tat-kraft', level: 'C1' })
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 12. Hand (Word-building family, mapVerbs: false) */
  regRoot('Hand', 'Hand', 'рука (кисть); действие, торговля', 'hand; action, trade',
    ['Словообразовательное гнездо от die Hand: handeln (действовать / торговать), behandeln (лечить / обходиться / рассматривать тему), verhandeln (вести переговоры), der Handel (торговля), handlich (удобный в руке).',
     'Word-building family from die Hand: handeln (act/trade), behandeln (treat/discuss), verhandeln (negotiate), Handel (trade), handlich (handy).'], [
    n('r-hand-hand', 'die', 'Hand', 'die Hände', 'рука (кисть)', 'hand',
      ex('Bitte waschen Sie sich vor dem Essen gründlich die [[Hände]].', 'Пожалуйста, тщательно вымойте руки перед едой.', 'Please wash your hands thoroughly before eating.'),
      { base: true, level: 'B1', morph: 'Hand' }),
    v('r-hand-handeln', 'handeln', ['handelt', 'handelte', 'hat gehandelt'], 'действовать; торговать; (es handelt sich um) речь идёт о', 'to act; to trade; to be about',
      ex('Bei einem Brand muss man ruhig und schnell [[handeln]].', 'При пожаре нужно действовать спокойно и быстро.', 'In a fire you have to act calmly and quickly.'),
      { core: true, morph: 'hand-el-n', level: 'B1' }),
    v('r-hand-behandeln', 'behandeln', ['behandelt', 'behandelte', 'hat behandelt'], 'лечить; обращаться с; рассматривать (тему)', 'to treat; to handle (a topic)'),
    v('r-hand-verhandeln', 'verhandeln', ['verhandelt', 'verhandelte', 'hat verhandelt'], 'вести переговоры, торговаться', 'to negotiate',
      ex('Über das Gehalt und den Urlaubsanspruch können Sie offen [[verhandeln]].', 'О зарплате и отпуске вы можете открыто вести переговоры.', 'You can openly negotiate salary and holiday entitlement.'),
      { core: true, morph: 'ver-hand-el-n' }),
    n('r-hand-handel', 'der', 'Handel', '', 'торговля, коммерция', 'trade, commerce',
      ex('Der internationale [[Handel]] reagiert empfindlich auf lange Lieferzeiten.', 'Международная торговля чувствительно реагирует на долгие сроки поставки.', 'International trade reacts sensitively to long delivery times.'),
      { core: true, morph: 'Hand-el' }),
    adj('r-hand-handlich', 'handlich', 'удобный, компактный (по размеру для руки)', 'handy, compact',
      ex('Das neue Messgerät ist leicht und besonders [[handlich]].', 'Новый измерительный прибор лёгкий и особенно удобный.', 'The new measuring device is light and particularly handy.'),
      { core: true, morph: 'hand-lich' }),
    n('r-hand-handlung', 'die', 'Handlung', 'die Handlungen', 'действие, поступок; сюжет (книги/фильма)', 'action, act; plot',
      ex('Die [[Handlung]] des Romans spielt im Berlin der Zwanzigerjahre.', 'Действие романа разворачивается в Берлине двадцатых годов.', 'The plot of the novel is set in Berlin in the nineteen-twenties.'),
      { morph: 'Hand-l-ung' }),
    n('r-hand-behandlung', 'die', 'Behandlung', 'die Behandlungen', 'лечение; обращение', 'treatment, handling',
      ex('Die zahnärztliche [[Behandlung]] dauerte nur zwanzig Minuten.', 'Лечение у стоматолога длилось всего двадцать минут.', 'The dental treatment lasted only twenty minutes.'),
      { morph: 'Be-hand-l-ung', level: 'B1' }),
    n('r-hand-verhandlung', 'die', 'Verhandlung', 'die Verhandlungen', 'переговоры; судебное разбирательство', 'negotiation; hearing',
      ex('Nach langen [[Verhandlungen]] einigten sich beide Unternehmen auf einen Vertrag.', 'После долгих переговоров обе компании договорились о контракте.', 'After long negotiations, both companies agreed on a contract.'),
      { morph: 'Ver-hand-l-ung' })
  ], { mapVerbs: false, group: 'Word-building families' });
})();

/* === Content expansion Wave 2 (2026-11-27): +10 DE verb root families === */
(function () {
  'use strict';
  var P = GT.packs.de;
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function byHead(de) {
    var k = String(de || '').replace(/^(der|die|das|sich)\s+/i, '').trim().toLowerCase();
    return P.items.filter(function (x) {
      return String(x.t || x.de || '').replace(/^(der|die|das|sich)\s+/i, '').trim().toLowerCase() === k;
    })[0] || null;
  }
  function v(id, de, forms, ru, en, e, opts) {
    var exst = byHead(de);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: 'r2-' + id, pos: 'verb', de: de,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] },
      ru: ru, en: en, examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.prefix) o.prefix = opts.prefix;
    if (opts.sep) o.sep = opts.sep;
    if (opts.stress) o.stress = opts.stress;
    if (opts.tr) o.transparency = opts.tr;
    if (opts.morph) o.morph = opts.morph;
    if (opts.gov) o.gov = opts.gov;
    return o;
  }
  function n(id, article, de, plural, ru, en, e, opts) {
    var exst = byHead(de);
    if (exst) return exst;
    opts = opts || {};
    var o = {
      id: 'r2-' + id, pos: 'noun', article: article, de: de, plural: plural || undefined,
      ru: ru, en: en, examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.morph) o.morph = opts.morph;
    return o;
  }
  function regRoot(id, verb, ru, en, note, words) {
    GT.registerRoot({
      id: id, verb: verb, t: verb, ru: ru, en: en,
      note: { ru: note[0], en: note[1] },
      words: words
    });
    if (P.config.ROOT_PLAN.indexOf(id) < 0) P.config.ROOT_PLAN.push(id);
  }

  /* 1. greifen */
  regRoot('greifen', 'greifen', 'хватать, браться; действовать (о мере)', 'to grasp, reach; to take effect',
    ['Сильный корень greifen — griff — gegriffen: от физического захвата переходит к пониманию (begreifen), вмешательству (eingreifen) и применению мер (greifen).',
     'Strong root greifen — griff — gegriffen: spans physical grasping, understanding (begreifen), intervening (eingreifen), and taking measures (ergreifen).'], [
    v('greifen-base', 'greifen', ['greift', 'griff', 'hat gegriffen'], 'хватать(ся); начинать действовать (о мерах)', 'to reach for, grasp; to take effect',
      ex('Er musste nach dem Geländer [[greifen]], um nicht auszurutschen.', 'Ему пришлось схватиться за перила, чтобы не поскользнуться.', 'He had to grab the handrail so as not to slip.'),
      { base: true, level: 'B1', morph: 'greif-en' }),
    v('greifen-begreifen', 'begreifen', ['begreift', 'begriff', 'hat begriffen'], 'постигать, осознавать, понимать', 'to grasp mentally, comprehend',
      ex('Erst nach der Diskussion [[begriff]] das Team die volle Tragweite.', 'Лишь после обсуждения команда осознала весь масштаб ситуации.', 'Only after the discussion did the team grasp the full scope.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'figurative', morph: 'be-greif-en' }),
    v('greifen-ergreifen', 'ergreifen', ['ergreift', 'ergriff', 'hat ergriffen'], 'принимать (меры), брать (слово, инициативу)', 'to take (measures, initiative), seize',
      ex('Bei solchen Warnzeichen muss der Betrieb sofort Maßnahmen [[ergreifen]].', 'При таких тревожных сигналах предприятие должно немедленно принять меры.', 'At such warning signs, the company must immediately take action.'),
      { core: true, prefix: 'er', sep: 'untrennbar', tr: 'figurative', morph: 'er-greif-en' }),
    v('greifen-eingreifen', 'eingreifen', ['greift ein', 'griff ein', 'hat eingegriffen'], 'вмешиваться (в процесс, конфликт)', 'to intervene, step in',
      ex('Die Moderation musste ruhig [[eingreifen]], als die Debatte abdriftete.', 'Модерации пришлось спокойно вмешаться, когда дебаты ушли в сторону.', 'The moderator had to step in calmly when the debate drifted off track.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'transparent', morph: 'ein-greif-en' }),
    v('greifen-angreifen', 'angreifen', ['greift an', 'griff an', 'hat angegriffen'], 'нападать, атаковать; разъедать', 'to attack; to corrode',
      ex('Scharfe Reiniger können empfindliche Oberflächen dauerhaft [[angreifen]].', 'Едкие чистящие средства могут необратимо повредить чувствительные поверхности.', 'Harsh cleaners can permanently damage sensitive surfaces.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'transparent', morph: 'an-greif-en' }),
    v('greifen-aufgreifen', 'aufgreifen', ['greift auf', 'griff auf', 'hat aufgegriffen'], 'подхватывать, развивать (тему, идею)', 'to pick up on, take up (a topic, idea)',
      ex('Die Redaktion will Ihren Hinweis in der nächsten Ausgabe [[aufgreifen]].', 'Редакция хочет поднять ваш вопрос в следующем выпуске.', 'The editorial team wants to take up your point in the next issue.'),
      { core: true, prefix: 'auf', sep: 'trennbar', tr: 'figurative', morph: 'auf-greif-en', level: 'C1' }),
    n('greifen-begriff', 'der', 'Begriff', 'die Begriffe', 'понятие, термин', 'concept, term',
      ex('Dieser juristische [[Begriff]] wird im Glossar genau definiert.', 'Этот юридический термин точно определяется в глоссарии.', 'This legal term is defined precisely in the glossary.'),
      { morph: 'Be-griff' }),
    n('greifen-zugriff', 'der', 'Zugriff', 'die Zugriffe', 'доступ (к данным, ресурсу)', 'access',
      ex('Nach dem Update haben nur Projektleiter direkten [[Zugriff]] auf das Archiv.', 'После обновления прямой доступ к архиву есть только у руководителей проектов.', 'After the update, only project leads have direct access to the archive.'),
      { morph: 'Zu-griff' })
  ]);

  /* 2. machen */
  regRoot('machen', 'machen', 'делать, производить; открывать/закрывать/договариваться', 'to make, do; combine everyday separable senses',
    ['Глагол machen с разными приставками покрывает десятки бытовых действий: aufmachen (открыть), zumachen (закрыть), ausmachen (выключить / договориться / составить долю), mitmachen (участвовать).',
     'With separable prefixes, machen covers core daily actions: aufmachen (open), zumachen (close), ausmachen (turn off / agree / account for), mitmachen (join in).'], [
    v('machen-base', 'machen', ['macht', 'machte', 'hat gemacht'], 'делать, изготавливать', 'to make, do',
      ex('Vor der Abfahrt müssen wir noch eine kurze Pause [[machen]].', 'Перед отъездом нам нужно сделать ещё один короткий перерыв.', 'Before setting off, we still need to take a short break.'),
      { base: true, level: 'B1', morph: 'mach-en' }),
    v('machen-aufmachen', 'aufmachen', ['macht auf', 'machte auf', 'hat aufgemacht'], 'открывать (дверь, коробку, дело)', 'to open (door, box, shop)',
      ex('Könnten Sie bitte kurz das Fenster [[aufmachen]]?', 'Не могли бы вы, пожалуйста, ненадолго открыть окно?', 'Could you please open the window for a moment?'),
      { core: true, prefix: 'auf', sep: 'trennbar', tr: 'transparent', morph: 'auf-mach-en', level: 'B1' }),
    v('machen-zumachen', 'zumachen', ['macht zu', 'machte zu', 'hat zugemacht'], 'закрывать; заканчивать работу на день', 'to close, shut',
      ex('Bitte beim Gehen die Tür hinter sich [[zumachen]].', 'Пожалуйста, уходя, закройте за собой дверь.', 'Please shut the door behind you when leaving.'),
      { core: true, prefix: 'zu', sep: 'trennbar', tr: 'transparent', morph: 'zu-mach-en', level: 'B1' }),
    v('machen-ausmachen', 'ausmachen', ['macht aus', 'machte aus', 'hat ausgemacht'], 'выключать; составлять (долю); договариваться', 'to turn off; to account for; to arrange',
      ex('Materialkosten [[machen]] fast die Hälfte des Gesamtpreises [[aus]].', 'Затраты на материалы составляют почти половину общей цены.', 'Material costs account for nearly half of the total price.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'figurative', morph: 'aus-mach-en' }),
    v('machen-anmachen', 'anmachen', ['macht an', 'machte an', 'hat angemacht'], 'включать (свет, плиту)', 'to turn on, switch on',
      ex('Im Flur war es dunkel, also musste ich zuerst das Licht [[anmachen]].', 'В коридоре было темно, поэтому я сначала включил свет.', 'It was dark in the hall, so I had to switch on the light first.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'transparent', morph: 'an-mach-en', level: 'B1' }),
    v('machen-mitmachen', 'mitmachen', ['macht mit', 'machte mit', 'hat mitgemacht'], 'участвовать, присоединяться', 'to participate, join in',
      ex('Alle Abteilungen können bei dem Sommerprojekt freiwillig [[mitmachen]].', 'Все отделы могут добровольно поучаствовать в летнем проекте.', 'All departments may voluntarily participate in the summer project.'),
      { core: true, prefix: 'mit', sep: 'trennbar', tr: 'transparent', morph: 'mit-mach-en', level: 'B1' }),
    v('machen-nachmachen', 'nachmachen', ['macht nach', 'machte nach', 'hat nachgemacht'], 'повторять за кем-то, подражать, подделывать', 'to imitate, copy',
      ex('Diesen Handgriff kann man nach zweimaligem Zuschauen leicht [[nachmachen]].', 'Этот приём легко повторить, посмотрев два раза.', 'You can easily imitate this technique after watching twice.'),
      { core: true, prefix: 'nach', sep: 'trennbar', tr: 'transparent', morph: 'nach-mach-en' }),
    v('machen-vormachen', 'vormachen', ['macht vor', 'machte vor', 'hat vorgemacht'], 'показывать наглядно; (dat.+etw.) обманывать, пускать пыль в глаза', 'to demonstrate; to fool someone',
      ex('Der Trainer will den Ablauf einmal langsam [[vormachen]].', 'Тренер хочет один раз медленно показать порядок действий.', 'The coach wants to demonstrate the sequence slowly once.'),
      { prefix: 'vor', sep: 'trennbar', tr: 'figurative', morph: 'vor-mach-en' })
  ]);

  /* 3. drücken */
  regRoot('drücken', 'drücken', 'жать, давить; выражать(ся), подавлять, производить впечатление', 'to press, squeeze; express, impress, suppress',
    ['Слабый глагол drücken даёт ключевые абстрактные слова речи и психологии: ausdrücken (выражать) / Ausdruck (выражение), eindrücken / Eindruck (впечатление), unterdrücken (подавлять).',
     'Weak verb drücken builds core abstract nouns and verbs: ausdrücken (express) / Ausdruck, Eindruck (impression), unterdrücken (suppress).'], [
    v('druecken-base', 'drücken', ['drückt', 'drückte', 'hat gedrückt'], 'нажимать, давить, прижимать', 'to press, push, squeeze',
      ex('Um die Tür zu öffnen, müssen Sie fest auf den grünen Knopf [[drücken]].', 'Чтобы открыть дверь, нужно крепко нажать на зелёную кнопку.', 'To open the door, you have to press firmly on the green button.'),
      { base: true, level: 'B1', morph: 'drück-en' }),
    v('druecken-ausdruecken', 'ausdrücken', ['drückt aus', 'drückte aus', 'hat ausgedrückt'], 'выражать (мысль, благодарность); выжимать', 'to express; to squeeze out',
      ex('Mit knappen Worten konnte sie ihre Sorge sehr präzise [[ausdrücken]].', 'В нескольких словах она сумела очень точно выразить свою тревогу.', 'In brief words she was able to express her concern very precisely.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'figurative', morph: 'aus-drück-en' }),
    v('druecken-unterdruecken', 'unterdrücken', ['unterdrückt', 'unterdrückte', 'hat unterdrückt'], 'подавлять, сдерживать (эмоцию, критику)', 'to suppress, stifle',
      ex('Er konnte ein leises Lächeln kaum [[unterdrücken]].', 'Он едва сумел сдержать лёгкую улыбку.', 'He could barely suppress a quiet smile.'),
      { sep: 'untrennbar', tr: 'figurative', morph: 'unter-drück-en', level: 'C1' }),
    v('druecken-bedruecken', 'bedrücken', ['bedrückt', 'bedrückte', 'hat bedrückt'], 'угнетать, тяготить (о мыслях, атмосфере)', 'to weigh down, depress',
      ex('Die Ungewissheit über den Umzug [[bedrückte]] die Familie wochenlang.', 'Неопределённость насчёт переезда неделями угнетала семью.', 'Uncertainty about the move weighed on the family for weeks.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'figurative', morph: 'be-drück-en', level: 'C1' }),
    v('druecken-abdruecken', 'abdrücken', ['drückt ab', 'drückte ab', 'hat abgedrückt'], 'отжимать, нажимать на спуск; оттискивать', 'to press down/trigger; imprint',
      ex('Beim Erstellen der Form muss man den Stempel gleichmäßig [[abdrücken]].', 'При изготовлении формы штамп нужно прижимать равномерно.', 'When making the mould, you need to press the stamp down evenly.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'transparent', morph: 'ab-drück-en' }),
    v('druecken-eindruecken', 'eindrücken', ['drückt ein', 'drückte ein', 'hat eingedrückt'], 'вдавливать, продавливать', 'to press in, dent',
      ex('Bitte den weichen Deckel der Verpackung nicht [[eindrücken]].', 'Пожалуйста, не продавливайте мягкую крышку упаковки.', 'Please do not press in the soft lid of the packaging.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'transparent', morph: 'ein-drück-en' }),
    n('druecken-ausdruck', 'der', 'Ausdruck', 'die Ausdrücke', 'выражение, формулировка', 'expression, phrase',
      ex('Dieser umgangssprachliche [[Ausdruck]] passt nicht in einen offiziellen Brief.', 'Это разговорное выражение не подходит для официального письма.', 'This colloquial expression does not fit in a formal letter.'),
      { morph: 'Aus-druck' }),
    n('druecken-eindruck', 'der', 'Eindruck', 'die Eindrücke', 'впечатление', 'impression',
      ex('Beim ersten Gespräch hinterließ die Bewerberin einen sehr ruhigen [[Eindruck]].', 'На первом собеседовании кандидатка произвела очень спокойное впечатление.', 'In the first interview the applicant left a very calm impression.'),
      { morph: 'Ein-druck' })
  ]);

  /* 4. denken */
  regRoot('denken', 'denken', 'думать, полагать; обдумывать, переосмысливать', 'to think; reflect, reconsider, rethink',
    ['Смешанный глагол denken — dachte — gedacht: nachdenken (размышлять), überdenken (пересматривать/обдумывать заново), umdenken (менять образ мыслей), bedenken (учитывать).',
     'Mixed verb denken — dachte — gedacht: nachdenken (ponder), überdenken (reconsider), umdenken (rethink one’s approach), bedenken (bear in mind).'], [
    v('denken-base', 'denken', ['denkt', 'dachte', 'hat gedacht'], 'думать, считать', 'to think, suppose',
      ex('Was [[denken]] Sie über den neuen Entwurf für den Eingangsbereich?', 'Что вы думаете о новом проекте входной зоны?', 'What do you think about the new design for the entrance area?'),
      { base: true, level: 'B1', morph: 'denk-en' }),
    v('denken-nachdenken', 'nachdenken', ['denkt nach', 'dachte nach', 'hat nachgedacht'], 'размышлять, задумываться (über + Akk.)', 'to reflect, think carefully about',
      ex('Über dieses Angebot muss ich erst eine Nacht ruhig [[nachdenken]].', 'Над этим предложением мне нужно спокойно поразмыслить до утра.', 'I need to sleep on this offer and think carefully about it.'),
      { core: true, prefix: 'nach', sep: 'trennbar', tr: 'transparent', morph: 'nach-denk-en', level: 'B1' }),
    v('denken-bedenken', 'bedenken', ['bedenkt', 'bedachte', 'hat bedacht'], 'принимать во внимание, учитывать (риски, последствия)', 'to bear in mind, consider',
      ex('Bei der Terminwahl sollte man auch die Schulferien [[bedenken]].', 'При выборе даты стоит учитывать также школьные каникулы.', 'When choosing the date, one should also bear school holidays in mind.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'figurative', morph: 'be-denk-en' }),
    v('denken-ueberdenken', 'überdenken', ['überdenkt', 'überdachte', 'hat überdacht'], 'пересматривать, основательно переосмыслять (решение)', 'to reconsider, think through again',
      ex('Angesichts der steigenden Kosten will der Rat seine Strategie [[überdenken]].', 'Ввиду растущих расходов совет хочет пересмотреть свою стратегию.', 'In view of rising costs, the council wants to reconsider its strategy.'),
      { core: true, prefix: 'über', sep: 'untrennbar', tr: 'transparent', morph: 'über-denk-en', level: 'C1' }),
    v('denken-umdenken', 'umdenken', ['denkt um', 'dachte um', 'hat umgedacht'], 'перестраивать мышление, менять подход', 'to rethink, shift one’s mindset',
      ex('In der Energiefrage müssen Industrie und Haushalte gemeinsam [[umdenken]].', 'В энергетическом вопросе промышленность и домохозяйства должны изменить подход.', 'On energy issues, industry and households must rethink together.'),
      { core: true, prefix: 'um', sep: 'trennbar', tr: 'transparent', morph: 'um-denk-en' }),
    v('denken-ausdenken', 'ausdenken', ['denkt aus', 'dachte aus', 'hat ausgedacht'], 'придумывать, изобретать (план, предлог)', 'to devise, make up',
      ex('Für die Einführungswoche haben sich die Mentoren ein Quiz [[ausgedacht]].', 'Для вводной недели наставники придумали викторину.', 'The mentors came up with a quiz for induction week.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'transparent', morph: 'aus-denk-en' }),
    v('denken-verdenken', 'verdenken', ['verdenkt', 'verdachte', 'hat verdacht'], 'ставить в вину, осуждать за что-либо (jmdm. etw.)', 'to blame someone for, begrudge',
      ex('Nach den vielen Überstunden kann man ihr den frühen Feierabend kaum [[verdenken]].', 'После стольких переработок её трудно винить за ранний уход с работы.', 'After so much overtime, one can hardly blame her for clocking off early.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'opaque', morph: 'ver-denk-en', level: 'C1' }),
    n('denken-gedanke', 'der', 'Gedanke', 'die Gedanken', 'мысль, идея', 'thought, idea',
      ex('Ein guter [[Gedanke]] ging mir auf dem Heimweg nicht mehr aus dem Kopf.', 'Одна удачная мысль по дороге домой никак не выходила у меня из головы.', 'A good thought stayed in my head all the way home.'),
      { morph: 'Ge-dank-e' })
  ]);

  /* 5. sagen */
  regRoot('sagen', 'sagen', 'говорить, сказать; отменять, обещать, объявлять, подводить', 'to say; cancel, promise, announce, fail',
    ['Слабый глагол sagen меняет смысл на противоположный или деловой за счёт приставок: absagen (отменить), zusagen (дать согласие / прийтись по душе), ansagen (объявить), versagen (отказать в работе / не справиться).',
     'Weak verb sagen turns administrative and idiomatic with prefixes: absagen (cancel), zusagen (accept/suit), ansagen (announce), versagen (fail/break down).'], [
    v('sagen-base', 'sagen', ['sagt', 'sagte', 'hat gesagt'], 'говорить, сказать', 'to say, tell',
      ex('Könnten Sie mir kurz [[sagen]], an welchem Gleis der Zug abfährt?', 'Не могли бы вы сказать, с какого пути отправляется поезд?', 'Could you briefly tell me which platform the train departs from?'),
      { base: true, level: 'B1', morph: 'sag-en' }),
    v('sagen-absagen', 'absagen', ['sagt ab', 'sagte ab', 'hat abgesagt'], 'отменять (встречу); отказываться от участия', 'to cancel; decline an invitation',
      ex('Wegen einer Erkältung musste der Referent den Termin leider [[absagen]].', 'Из-за простуды докладчику, к сожалению, пришлось отменить встречу.', 'Due to a cold, the speaker unfortunately had to cancel the appointment.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-sag-en', level: 'B1' }),
    v('sagen-zusagen', 'zusagen', ['sagt zu', 'sagte zu', 'hat zugesagt'], 'давать согласие, подтверждать участие; (dat.) нравиться', 'to accept, confirm; to appeal to',
      ex('Bis Dienstag sollen alle Eingeladenen fest antworten — wir hoffen, dass Sie [[zusagen]].', 'До вторника все приглашённые должны дать точный ответ — надеемся, вы согласитесь.', 'All invitees should respond firmly by Tuesday — we hope you will confirm attendance.'),
      { core: true, prefix: 'zu', sep: 'trennbar', tr: 'figurative', morph: 'zu-sag-en' }),
    v('sagen-ansagen', 'ansagen', ['sagt an', 'sagte an', 'hat angesagt'], 'объявлять (остановку, номер, программу)', 'to announce (on intercom, stage)',
      ex('Im Zug wurden alle Anschlüsse rechtzeitig über den Lautsprecher [[angesagt]].', 'В поезде все пересадки вовремя объявляли по громкой связи.', 'On the train, all connections were announced over the loudspeaker in good time.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'transparent', morph: 'an-sag-en' }),
    v('sagen-aussagen', 'aussagen', ['sagt aus', 'sagte aus', 'hat ausgesagt'], 'утверждать, означать; давать показания', 'to state, indicate; testify',
      ex('Was genau soll diese Kennzahl im Quartalsbericht [[aussagen]]?', 'Что именно должен показывать этот показатель в квартальном отчёте?', 'What exactly is this metric meant to indicate in the quarterly report?'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'figurative', morph: 'aus-sag-en' }),
    v('sagen-versagen', 'versagen', ['versagt', 'versagte', 'hat versagt'], 'отказать (о технике, нервах); потерпеть неудачу', 'to fail, break down',
      ex('Kurz vor dem Gipfel [[versagte]] ausgerechnet der Akku seines Navis.', 'Незадолго до вершины, как назло, отказал аккумулятор его навигатора.', 'Just before the summit, of all things, his GPS battery failed.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'opaque', morph: 'ver-sag-en', level: 'C1' }),
    v('sagen-besagen', 'besagen', ['besagt', 'besagte', 'hat besagt'], 'гласить, означать (о правиле, источнике)', 'to state, stipulate (of a rule/study)',
      ex('Die Vorschrift [[besagt]], dass jede Lieferung doppelt geprüft wird.', 'Инструкция гласит, что каждая поставка проверяется дважды.', 'The regulation states that every delivery is inspected twice.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'figurative', morph: 'be-sag-en', level: 'C1' }),
    n('sagen-aussage', 'die', 'Aussage', 'die Aussagen', 'высказывание, тезис; показание', 'statement, claim; testimony',
      ex('Diese [[Aussage]] deckt sich vollständig mit unseren Messwerten.', 'Это утверждение полностью совпадает с нашими измерениями.', 'This statement aligns completely with our measured readings.'),
      { morph: 'Aus-sag-e' })
  ]);

  /* 6. werfen */
  regRoot('werfen', 'werfen', 'бросать, кидать; проектировать, упрекать, отвергать', 'to throw; design, reproach, reject',
    ['Сильный корень werfen — wirft — warf — geworfen образует абстрактные деловые слова: entwerfen (проектировать) / Entwurf, vorwerfen (упрекать), verwerfen (отвергать план).',
     'Strong root werfen — wirft — warf — geworfen builds key abstract vocabulary: entwerfen (draft/design) / Entwurf, vorwerfen (reproach), verwerfen (discard).'], [
    v('werfen-base', 'werfen', ['wirft', 'warf', 'hat geworfen'], 'бросать, кидать', 'to throw, cast',
      ex('[[Werfen]] Sie einen Blick auf die Karte, bevor wir abbiegen.', 'Взгляните на карту, прежде чем мы свернём.', 'Cast a glance at the map before we turn.'),
      { base: true, level: 'B1', morph: 'werf-en' }),
    v('werfen-entwerfen', 'entwerfen', ['entwirft', 'entwarf', 'hat entworfen'], 'разрабатывать проект, составлять эскиз / набросок', 'to design, draft',
      ex('Das Architekturbüro soll einen hellen Campus [[entwerfen]].', 'Архитектурное бюро должно спроектировать светлый кампус.', 'The architecture firm is tasked with designing a bright campus.'),
      { core: true, prefix: 'ent', sep: 'untrennbar', tr: 'figurative', morph: 'ent-werf-en' }),
    v('werfen-vorwerfen', 'vorwerfen', ['wirft vor', 'warf vor', 'hat vorgeworfen'], 'упрекать, ставить в вину (jmdm. etw.)', 'to reproach, accuse of',
      ex('Niemand kann dem Team fehlende Sorgfalt [[vorwerfen]].', 'Никто не может упрекнуть команду в нехватке тщательности.', 'Nobody can accuse the team of lacking diligence.'),
      { core: true, prefix: 'vor', sep: 'trennbar', tr: 'figurative', morph: 'vor-werf-en' }),
    v('werfen-verwerfen', 'verwerfen', ['verwirft', 'verwarf', 'hat verworfen'], 'отвергать, отказываться от идеи / плана', 'to reject, discard (an idea)',
      ex('Nach zwei Testläufen mussten wir den alten Ansatz wieder [[verwerfen]].', 'После двух тестов нам пришлось отвергнуть старый подход.', 'After two test runs, we had to discard the old approach.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'figurative', morph: 'ver-werf-en', level: 'C1' }),
    v('werfen-wegwerfen', 'wegwerfen', ['wirft weg', 'warf weg', 'hat weggeworfen'], 'выбрасывать (как ненужное)', 'to throw away, discard',
      ex('Alte Garantiescheine sollte man nicht sofort [[wegwerfen]].', 'Старые гарантийные талоны не стоит выбрасывать сразу.', 'You should not throw away old warranty certificates straight away.'),
      { sep: 'trennbar', tr: 'transparent', morph: 'weg-werf-en', level: 'B1' }),
    v('werfen-abwerfen', 'abwerfen', ['wirft ab', 'warf ab', 'hat abgeworfen'], 'приносить прибыль; сбрасывать', 'to yield (profit); drop, shed',
      ex('Die Solaranlage soll schon im dritten Jahr Gewinn [[abwerfen]].', 'Солнечная установка должна начать приносить прибыль уже на третий год.', 'The solar system is expected to yield a profit by year three.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-werf-en', level: 'C1' }),
    v('werfen-einwerfen', 'einwerfen', ['wirft ein', 'warf ein', 'hat eingeworfen'], 'опускать в ящик (письмо); вставлять реплику', 'to drop in (letterbox); interject',
      ex('Sie können die Unterlagen bis zwölf Uhr in den Briefkasten [[einwerfen]].', 'Вы можете опустить документы в почтовый ящик до двенадцати часов.', 'You can drop the documents into the letterbox until noon.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'transparent', morph: 'ein-werf-en' }),
    n('werfen-entwurf', 'der', 'Entwurf', 'die Entwürfe', 'проект, набросок, черновик', 'draft, design',
      ex('Bitte senden Sie Ihre Anmerkungen direkt an meinen zweiten [[Entwurf]].', 'Пожалуйста, пришлите ваши замечания прямо к моему второму черновику.', 'Please send your comments directly to my second draft.'),
      { morph: 'Ent-wurf' })
  ]);

  /* 7. schneiden */
  regRoot('schneiden', 'schneiden', 'резать; пересекаться, показывать результат, нарезать', 'to cut; intersect, perform/fare, slice',
    ['Сильный глагол schneiden — schnitt — geschnitten даёт wichtige переносные значения: abschneiden (хорошо/плохо показать себя), überschneiden (пересекаться), Abschnitt (раздел/отрезок).',
     'Strong verb schneiden — schnitt — geschnitten builds key figurative meanings: abschneiden (fare well/poorly), sich überschneiden (overlap), Abschnitt (section).'], [
    v('schneiden-base', 'schneiden', ['schneidet', 'schnitt', 'hat geschnitten'], 'резать, нарезать; стричь', 'to cut, slice; trim',
      ex('Die Zwiebeln bitte vor dem Anbraten in feine Würfel [[schneiden]].', 'Пожалуйста, перед обжаркой нарежьте лук мелкими кубиками.', 'Please cut the onions into fine cubes before frying.'),
      { base: true, level: 'B1', morph: 'schneid-en' }),
    v('schneiden-abschneiden', 'abschneiden', ['schneidet ab', 'schnitt ab', 'hat abgeschnitten'], 'отрезать; показать (хороший/плохой) результат', 'to cut off; perform/fare (well/badly)',
      ex('Im Praxistest hat das günstigste Gerät erstaunlich gut [[abgeschnitten]].', 'В практическом тесте самый недорогой прибор показал себя удивительно хорошо.', 'In practical testing, the least expensive device performed surprisingly well.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'figurative', morph: 'ab-schneid-en' }),
    v('schneiden-ueberschneiden', 'überschneiden', ['überschneidet', 'überschnitt', 'hat überschnitten'], 'пересекаться, накладываться (о сроках, темах)', 'to overlap, intersect',
      ex('Leider [[überschneiden]] sich unsere beiden Schulungen am Donnerstagnachmittag.', 'К сожалению, оба наших тренинга пересекаются в четверг после обеда.', 'Unfortunately our two training sessions overlap on Thursday afternoon.'),
      { core: true, prefix: 'über', sep: 'untrennbar', tr: 'figurative', morph: 'über-schneid-en' }),
    v('schneiden-anschneiden', 'anschneiden', ['schneidet an', 'schnitt an', 'hat angeschnitten'], 'надрезать; слегка затронуть (тему)', 'to slice into; touch on (a topic)',
      ex('Diesen wichtigen Punkt konnte der Moderator am Ende nur kurz [[anschneiden]].', 'Этот важный вопрос ведущий в конце смог лишь кратко затронуть.', 'The host could only touch briefly on this important point at the end.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'figurative', morph: 'an-schneid-en' }),
    v('schneiden-ausschneiden', 'ausschneiden', ['schneidet aus', 'schnitt aus', 'hat ausgeschnitten'], 'вырезать (ножницами, фрагмент в редакторе)', 'to cut out',
      ex('Für die Collage kann jedes Kind drei geometrische Formen [[ausschneiden]].', 'Для коллажа каждый ребёнок может вырезать три геометрические фигуры.', 'For the collage, every child can cut out three geometric shapes.'),
      { core: true, prefix: 'aus', sep: 'trennbar', tr: 'transparent', morph: 'aus-schneid-en', level: 'B1' }),
    v('schneiden-einschneiden', 'einschneiden', ['schneidet ein', 'schnitt ein', 'hat eingeschnitten'], 'надрезать, врезаться; глубоко затрагивать привычный уклад', 'to cut into; deeply affect',
      ex('Der schwere Trageriemen [[schneidet]] nach einer Stunde unangenehm in die Schulter [[ein]].', 'Тяжёлый ремень через час неприятно врезается в плечо.', 'After an hour, the heavy strap cuts uncomfortably into the shoulder.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'figurative', morph: 'ein-schneid-en', level: 'C1' }),
    n('schneiden-abschnitt', 'der', 'Abschnitt', 'die Abschnitte', 'раздел, отрезок, участок (пути, текста)', 'section, stretch, segment',
      ex('Im dritten [[Abschnitt]] der Anleitung werden alle Anschlüsse erklärt.', 'В третьем разделе инструкции объясняются все подключения.', 'In the third section of the manual, all connections are explained.'),
      { morph: 'Ab-schnitt' }),
    n('schneiden-schnitt', 'der', 'Schnitt', 'die Schnitte', 'разрез; крой; в среднем (im Schnitt)', 'cut, slice; average (im Schnitt)',
      ex('Im [[Schnitt]] dauert die Bearbeitung eines Antrags vier Werktage.', 'В среднем обработка заявления занимает четыре рабочих дня.', 'On average, processing an application takes four working days.'),
      { morph: 'Schnitt' })
  ]);

  /* 8. teilen */
  regRoot('teilen', 'teilen', 'делить, разделять; сообщать, распределять, оценивать', 'to divide, share; inform, allocate, judge',
    ['Корень teilen объединяет физическое деление и суждение: mitteilen (сообщать), verteilen (распределять), einteilen (разбивать на части/распределять время), beurteilen (оценивать, от Urteil).',
     'The root teilen links sharing/dividing and judging: mitteilen (inform), verteilen (distribute), einteilen (allocate/schedule), beurteilen (assess, via Urteil).'], [
    v('teilen-base', 'teilen', ['teilt', 'teilte', 'hat geteilt'], 'делить; разделять (мнение); делиться', 'to share, divide',
      ex('Viele Anwohner [[teilen]] die Bedenken gegen die geplante Umgehungsstraße.', 'Многие жители разделяют опасения по поводу планируемой объездной дороги.', 'Many local residents share the concerns about the planned bypass road.'),
      { base: true, level: 'B1', morph: 'teil-en' }),
    v('teilen-mitteilen', 'mitteilen', ['teilt mit', 'teilte mit', 'hat mitgeteilt'], 'сообщать, уведомлять (jmdm. etw.)', 'to inform, notify',
      ex('Bitte [[teilen]] Sie uns jede Adressänderung schriftlich [[mit]].', 'Пожалуйста, письменно сообщайте нам о каждом изменении адреса.', 'Please notify us of any change of address in writing.'),
      { core: true, prefix: 'mit', sep: 'trennbar', tr: 'figurative', morph: 'mit-teil-en', level: 'B1' }),
    v('teilen-verteilen', 'verteilen', ['verteilt', 'verteilte', 'hat verteilt'], 'распределять, раздавать', 'to distribute, hand out',
      ex('Die Aufgaben lassen sich gerecht auf alle vier Schichten [[verteilen]].', 'Задачи можно справедливо распределить на все четыре смены.', 'The tasks can be distributed fairly across all four shifts.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'transparent', morph: 'ver-teil-en' }),
    v('teilen-einteilen', 'einteilen', ['teilt ein', 'teilte ein', 'hat eingeteilt'], 'распределять (время, персонал), классифицировать', 'to schedule, divide up, assign',
      ex('Bei langen Klausuren muss man sich die Zeit klug [[einteilen]].', 'На длинных экзаменах нужно грамотно распределять своё время.', 'In long exams you have to budget your time wisely.'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'transparent', morph: 'ein-teil-en' }),
    v('teilen-aufteilen', 'aufteilen', ['teilt auf', 'teilte auf', 'hat aufgeteilt'], 'разбивать, разделять на доли / группы', 'to split up, apportion',
      ex('Wir sollten den umfangreichen Bericht in drei handliche Module [[aufteilen]].', 'Нам стоит разбить объёмный отчёт на три удобных модуля.', 'We should split up the extensive report into three manageable modules.'),
      { core: true, prefix: 'auf', sep: 'trennbar', tr: 'transparent', morph: 'auf-teil-en' }),
    v('teilen-beurteilen', 'beurteilen', ['beurteilt', 'beurteilte', 'hat beurteilt'], 'оценивать, выносить суждение о чём-либо', 'to assess, evaluate, judge',
      ex('Ohne Einsicht in die Rohdaten lässt sich die Studie schwer [[beurteilen]].', 'Без доступа к исходным данным исследование трудно оценить.', 'Without access to raw data, the study is hard to evaluate.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'figurative', morph: 'be-ur-teil-en' }),
    n('teilen-anteil', 'der', 'Anteil', 'die Anteile', 'доля, часть; участие (Anteil nehmen)', 'share, proportion',
      ex('Der [[Anteil]] erneuerbarer Energien steigt in diesem Quartal weiter an.', 'Доля возобновляемой энергии в этом квартале продолжает расти.', 'The share of renewable energy keeps rising this quarter.'),
      { morph: 'An-teil' })
  ]);

  /* 9. rechnen */
  regRoot('rechnen', 'rechnen', 'считать, вычислять; рассчитывать (auf/mit), учитывать', 'to calculate; count on, reckon with, charge',
    ['Глагол rechnen — ключевой в экономике и быту: mit etw. rechnen (рассчитывать на / ожидать), berechnen (рассчитывать цену/нагрузку), abrechnen (сводить расчёты), anrechnen (засчитывать).',
     'Verb rechnen powers finance and everyday expectation: mit etw. rechnen (expect), berechnen (calculate/charge), abrechnen (settle accounts), anrechnen (credit).'], [
    v('rechnen-base', 'rechnen', ['rechnet', 'rechnete', 'hat gerechnet'], 'считать; (mit + Dat.) рассчитывать, ожидать чего-то', 'to calculate; expect, reckon with',
      ex('Im Berufsverkehr muss man morgens mit zehn Minuten Verspätung [[rechnen]].', 'В утренний час пик приходится закладывать десять минут задержки.', 'In morning rush-hour traffic you have to reckon with a ten-minute delay.'),
      { base: true, level: 'B1', morph: 'rechn-en' }),
    v('rechnen-berechnen', 'berechnen', ['berechnet', 'berechnete', 'hat berechnet'], 'вычислять; начислять (стоимость, плату)', 'to calculate; charge (a fee)',
      ex('Für den Expressversand wird ein kleiner Aufschlag [[berechnet]].', 'За экспресс-доставку начисляется небольшая доплата.', 'A small surcharge is calculated for express delivery.'),
      { core: true, prefix: 'be', sep: 'untrennbar', tr: 'transparent', morph: 'be-rechn-en' }),
    v('rechnen-abrechnen', 'abrechnen', ['rechnet ab', 'rechnete ab', 'hat abgerechnet'], 'проводить расчёт, закрывать счёт / смету', 'to settle accounts, bill',
      ex('Reisekosten werden immer am Monatsende über das Portal [[abgerechnet]].', 'Командировочные расходы всегда оформляются в расчёт в конце месяца через портал.', 'Travel expenses are always billed via the portal at month-end.'),
      { core: true, prefix: 'ab', sep: 'trennbar', tr: 'transparent', morph: 'ab-rechn-en' }),
    v('rechnen-anrechnen', 'anrechnen', ['rechnet an', 'rechnete an', 'hat angerechnet'], 'засчитывать (стаж, зачёты, предоплату)', 'to credit, count towards',
      ex('Bereits bestandene Prüfungen werden im neuen Studiengang voll [[angerechnet]].', 'Уже сданные экзамены полностью засчитываются на новой программе обучения.', 'Previously passed exams are fully credited towards the new degree programme.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'figurative', morph: 'an-rechn-en' }),
    v('rechnen-einrechnen', 'einrechnen', ['rechnet ein', 'rechnete ein', 'hat eingerechnet'], 'включать в расчёт / смету (запас времени, расходы)', 'to factor in, include in budget',
      ex('Haben Sie die Anfahrtszeit bei der Kalkulation schon [[eingerechnet]]?', 'Вы уже включили время на дорогу в калькуляцию?', 'Did you already factor in travel time in the estimate?'),
      { core: true, prefix: 'ein', sep: 'trennbar', tr: 'transparent', morph: 'ein-rechn-en' }),
    v('rechnen-verrechnen', 'verrechnen', ['verrechnet', 'verrechnete', 'hat verrechnet'], 'зачитывать взаимно (суммы); (sich) обсчитаться', 'to offset (amounts); (sich) miscalculate',
      ex('Den Vorschuss können wir direkt mit der Schlussrechnung [[verrechnen]].', 'Аванс мы можем сразу зачесть при окончательном расчёте.', 'We can offset the advance payment directly against the final invoice.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', tr: 'figurative', morph: 'ver-rechn-en' }),
    n('rechnen-rechnung', 'die', 'Rechnung', 'die Rechnungen', 'счёт (к оплате), расчёт', 'invoice, bill; calculation',
      ex('Bitte prüfen Sie Position drei auf der [[Rechnung]] vor der Überweisung.', 'Пожалуйста, проверьте третью позицию в счёте перед переводом.', 'Please check line three on the invoice before transferring.') ,
      { morph: 'Rechn-ung' })
  ]);

  /* 10. hören */
  regRoot('hören', 'hören', 'слышать, слушать; принадлежать, переставать, прослушивать', 'to hear, listen; belong, stop, fail to hear',
    ['Корень hören связывает восприятие с принадлежностью и завершением действия: zuhören (внимательно слушать), aufhören (прекращать), gehören (принадлежать / подобать), überhören (не расслышать/проигнорировать).',
     'Root hören connects listening with belonging and stopping: zuhören (listen attentively), aufhören (stop), gehören (belong / be proper), überhören (miss / ignore).'], [
    v('hoeren-base', 'hören', ['hört', 'hörte', 'hat gehört'], 'слышать; слушать', 'to hear; listen to',
      ex('Aus dem Nachbarraum konnte man leise Klaviermusik [[hören]].', 'Из соседней комнаты была слышна тихая фортепианная музыка.', 'Quiet piano music could be heard from the neighbouring room.'),
      { base: true, level: 'B1', morph: 'hör-en' }),
    v('hoeren-zuhoeren', 'zuhören', ['hört zu', 'hörte zu', 'hat zugehört'], 'внимательно слушать (jmdm.)', 'to listen attentively to',
      ex('Gute Berater reden wenig und können geduldig [[zuhören]].', 'Хорошие консультанты говорят мало и умеют терпеливо выслушать.', 'Good advisers speak little and know how to listen patiently.'),
      { core: true, prefix: 'zu', sep: 'trennbar', tr: 'transparent', morph: 'zu-hör-en', level: 'B1' }),
    v('hoeren-aufhoeren', 'aufhören', ['hört auf', 'hörte auf', 'hat aufgehört'], 'прекращать, переставать (mit + Dat. / zu + Inf.)', 'to stop, cease',
      ex('Zum Glück hat der starke Wind gegen Mitternacht [[aufgehört]].', 'К счастью, сильный ветер прекратился ближе к полуночи.', 'Fortunately, the strong wind stopped around midnight.'),
      { core: true, prefix: 'auf', sep: 'trennbar', tr: 'opaque', morph: 'auf-hör-en', level: 'B1' }),
    v('hoeren-gehoeren', 'gehören', ['gehört', 'gehörte', 'hat gehört'], 'принадлежать (dat.); (zu) относиться к числу', 'to belong to; be part of',
      ex('Sorgfalt und Verlässlichkeit [[gehören]] zu den wichtigsten Stärken im Betrieb.', 'Тщательность и надёжность относятся к главным сильным сторонам компании.', 'Diligence and reliability belong among the company’s key strengths.'),
      { core: true, prefix: 'ge', sep: 'untrennbar', tr: 'opaque', morph: 'ge-hör-en', level: 'B1' }),
    v('hoeren-anhoeren', 'anhören', ['hört an', 'hörte an', 'hat angehört'], 'выслушивать; (sich) звучать как', 'to listen to; (sich) sound like',
      ex('Ihr Vorschlag [[hört]] sich für den ersten Entwurf sehr vernünftig [[an]].', 'Ваше предложение звучит весьма разумно для первого наброска.', 'Your proposal sounds very sensible for a first draft.'),
      { core: true, prefix: 'an', sep: 'trennbar', tr: 'figurative', morph: 'an-hör-en' }),
    v('hoeren-ueberhoeren', 'überhören', ['überhört', 'überhörte', 'hat überhört'], 'не расслышать, прослушать; сделать вид, что не слышал', 'to miss (hearing), fail to hear; ignore',
      ex('In dem lauten Bahnhof hat er die Durchsage komplett [[überhört]].', 'На шумном вокзале он полностью прослушал объявление.', 'In the noisy station, he completely missed the announcement.'),
      { core: true, prefix: 'über', sep: 'untrennbar', tr: 'figurative', morph: 'über-hör-en' }),
    n('hoeren-gehoer', 'das', 'Gehör', '', 'слух; внимание, аудитория (Gehör finden)', 'hearing; attentive audience',
      ex('Mit konkreten Zahlen fand ihr Anliegen beim Vorstand sofort [[Gehör]].', 'С конкретными цифрами её просьба сразу нашла отклик у правления.', 'With concrete figures, her request immediately gained a hearing from the board.'),
      { morph: 'Ge-hör' })
  ]);
})();
