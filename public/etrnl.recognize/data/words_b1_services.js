/* Goethe-Zertifikat B1 Wortliste, alphabetical section. The page comments identify
 * the headword entries. Example sentences and translations were written for ETRNL. */

GT.register({ tab: 'words', topic: 'authorities', items: [
  {
    // Wortliste p. 24
    id: 'b1-authorities-behoerde', pos: 'noun', de: "Behörde",
    article: 'die', plural: "die Behörden",
    ru: "госорган, ведомство", en: "government authority, agency",
    examples: [
      { de: "Welche [[Behörde]] ist für die Anmeldung zuständig?", ru: "Какое ведомство занимается регистрацией?", en: "Which authority handles the registration?" }
    ]
  },
  {
    // Wortliste p. 41
    id: 'b1-authorities-formular', pos: 'noun', de: "Formular",
    article: 'das', plural: "die Formulare",
    ru: "бланк, форма", en: "form",
    examples: [
      { de: "Kann ich das [[Formular]] auch online ausfüllen?", ru: "Можно заполнить форму и онлайн?", en: "Can I fill in the form online too?" }
    ]
  },
  {
    // Wortliste p. 22
    id: 'b1-authorities-ausweis', pos: 'noun', de: "Ausweis",
    article: 'der', plural: "die Ausweise",
    ru: "удостоверение личности; удостоверение", en: "ID, identity document",
    examples: [
      { de: "Zur Abholung brauchen Sie Ihren [[Ausweis]].", ru: "При получении нужно предъявить удостоверение личности.", en: "You’ll need your ID when you come to pick it up." }
    ]
  },
  {
    // Wortliste p. 86
    id: 'b1-authorities-termin', pos: 'noun', de: "Termin",
    article: 'der', plural: "die Termine",
    ru: "назначенное время; запись на приём", en: "appointment",
    examples: [
      { de: "Ich möchte meinen [[Termin]] auf nächste Woche verschieben.", ru: "Я хочу перенести запись на следующую неделю.", en: "I’d like to move my appointment to next week." }
    ]
  },
  {
    // Wortliste p. 43
    id: 'b1-authorities-gebuehr', pos: 'noun', de: "Gebühr",
    article: 'die', plural: "die Gebühren",
    ru: "сбор, пошлина, плата", en: "fee, charge",
    examples: [
      { de: "Muss ich die [[Gebühr]] gleich am Schalter bezahlen?", ru: "Нужно ли сразу оплатить сбор у окошка?", en: "Do I have to pay the fee at the counter right away?" }
    ]
  },
  {
    // Wortliste p. 56
    id: 'b1-authorities-konto', pos: 'noun', de: "Konto",
    article: 'das', plural: "die Konten",
    ru: "банковский счёт; учётная запись", en: "bank account; account",
    examples: [
      { de: "Ich möchte bei dieser Bank ein [[Konto]] eröffnen.", ru: "Я хочу открыть счёт в этом банке.", en: "I’d like to open an account with this bank." }
    ]
  },
  {
    // Wortliste p. 25
    id: 'b1-authorities-bescheid', pos: 'noun', de: "Bescheid",
    article: 'der', plural: "die Bescheide",
    ru: "официальное уведомление, решение ведомства", en: "official notice, administrative decision",
    examples: [
      { de: "Den schriftlichen [[Bescheid]] erhalten Sie per Post.", ru: "Письменное решение вы получите по почте.", en: "You’ll receive the written decision by post." }
    ],
    note: "В выражении Bescheid geben слово означает «сообщить, дать знать»: Gib mir bitte morgen Bescheid.",
    i18n: { en: { note: "The fixed expression Bescheid geben means to let someone know, as in Gib mir bitte morgen Bescheid." } }
  },
  {
    // Wortliste p. 21
    id: 'b1-authorities-ausfuellen', pos: 'verb', de: "ausfüllen",
    forms: { praes: "füllt aus", praet: "füllte aus", perf: "hat ausgefüllt" }, gov: "+ Akk.",
    ru: "заполнять (форму)", en: "to fill in, fill out",
    examples: [
      { de: "Auf Seite zwei müssen Sie nur die oberen Felder [[ausfüllen]].", ru: "На второй странице нужно заполнить только верхние поля.", en: "On page two, you only need to fill in the fields at the top." },
      { de: "Ich habe das Formular schon [[ausgefüllt]].", ru: "Я уже заполнил бланк.", en: "I’ve already filled in the form." }
    ]
  },
  {
    // Wortliste p. 90
    id: 'b1-authorities-unterlagen', pos: 'noun', de: "Unterlagen",
    article: 'die', plural: "die Unterlagen",
    ru: "документы, материалы", en: "documents, paperwork",
    examples: [
      { de: "Bitte bringen Sie alle [[Unterlagen]] zum Termin mit.", ru: "Пожалуйста, принесите все документы на приём.", en: "Please bring all the paperwork to the appointment." }
    ],
    note: "В значении «комплект документов» обычно используют множественное число.",
    i18n: { en: { note: "Use the plural for a set of documents." } }
  },
  {
    // Wortliste p. 47
    id: 'b1-authorities-gueltig', pos: 'adj', de: "gültig",
    ru: "действительный; действующий", en: "valid",
    examples: [
      { de: "Mein Pass ist noch bis Ende Juni [[gültig]].", ru: "Мой паспорт действителен до конца июня.", en: "My passport is still valid until the end of June." }
    ]
  }
] });

GT.register({ tab: 'words', topic: 'travel', items: [
  {
    // Wortliste p. 23
    id: 'b1-travel-bahnhof', pos: 'noun', de: "Bahnhof",
    article: 'der', plural: "die Bahnhöfe",
    ru: "железнодорожный вокзал, станция", en: "railway station",
    examples: [
      { de: "Wir treffen uns vor dem [[Bahnhof]].", ru: "Встретимся перед вокзалом.", en: "We’ll meet outside the station." }
    ]
  },
  {
    // Wortliste p. 23
    id: 'b1-travel-bahnsteig', pos: 'noun', de: "Bahnsteig",
    article: 'der', plural: "die Bahnsteige",
    ru: "платформа, перрон", en: "platform",
    examples: [
      { de: "Der Aufzug zum [[Bahnsteig]] ist außer Betrieb.", ru: "Лифт на платформу не работает.", en: "The lift to the platform is out of service." }
    ],
    note: "Bahnsteig — платформа, на которой ждут пассажиры. Gleis — путь, по которому идёт поезд.",
    i18n: { en: { note: "Bahnsteig is the platform where passengers wait. Gleis is the track the train runs on." } }
  },
  {
    // Wortliste p. 46
    id: 'b1-travel-gleis', pos: 'noun', de: "Gleis",
    article: 'das', plural: "die Gleise",
    ru: "железнодорожный путь (в том числе номер пути на вокзале)", en: "railway track (platform number in announcements)",
    examples: [
      { de: "Der Zug fährt heute von [[Gleis]] sieben ab.", ru: "Сегодня поезд отправляется с седьмого пути.", en: "Today the train leaves from platform seven." }
    ],
    note: "В объявлении von Gleis 7 означает «с 7-го пути». В английских объявлениях для пассажиров обычно говорят from platform 7.",
    i18n: { en: { note: "German announcements use von Gleis 7. English announcements normally say from platform 7." } }
  },
  {
    // Wortliste p. 93
    id: 'b1-travel-verspaetung', pos: 'noun', de: "Verspätung",
    article: 'die', plural: "die Verspätungen",
    ru: "задержка, опоздание", en: "delay",
    examples: [
      { de: "Unser Zug hat zwanzig Minuten [[Verspätung]].", ru: "Наш поезд задерживается на двадцать минут.", en: "Our train is running twenty minutes late." }
    ]
  },
  {
    // Wortliste p. 19
    id: 'b1-travel-anschluss', pos: 'noun', de: "Anschluss",
    article: 'der', plural: "die Anschlüsse",
    ru: "стыковка; поезд или автобус, на который пересаживаются", en: "connection, connecting service",
    examples: [
      { de: "Bei fünf Minuten Umsteigezeit erreichen wir den [[Anschluss]] vielleicht nicht.", ru: "Пяти минут на пересадку может не хватить.", en: "With only five minutes to change, we might miss the connection." }
    ]
  },
  {
    // Wortliste p. 39
    id: 'b1-travel-fahrkarte', pos: 'noun', de: "Fahrkarte",
    article: 'die', plural: "die Fahrkarten",
    ru: "проездной билет", en: "ticket (for public transport)",
    examples: [
      { de: "Ich habe die [[Fahrkarte]] am Automaten gekauft.", ru: "Я купил билет в автомате.", en: "I bought the ticket at the machine." }
    ]
  },
  {
    // Wortliste p. 39
    id: 'b1-travel-fahrplan', pos: 'noun', de: "Fahrplan",
    article: 'der', plural: "die Fahrpläne",
    ru: "расписание движения", en: "timetable, schedule",
    examples: [
      { de: "Laut [[Fahrplan]] fährt der letzte Bus um halb zwölf.", ru: "По расписанию последний автобус отправляется в половине двенадцатого.", en: "According to the timetable, the last bus leaves at half past eleven." }
    ]
  },
  {
    // Wortliste p. 48
    id: 'b1-travel-haltestelle', pos: 'noun', de: "Haltestelle",
    article: 'die', plural: "die Haltestellen",
    ru: "остановка (автобуса, трамвая)", en: "stop (bus or tram)",
    examples: [
      { de: "An welcher [[Haltestelle]] müssen wir aussteigen?", ru: "На какой остановке нам нужно выйти?", en: "Which stop should we get off at?" }
    ]
  },
  {
    // Wortliste p. 45
    id: 'b1-travel-gepaeck', pos: 'noun', de: "Gepäck",
    article: 'das',
    ru: "багаж", en: "luggage, baggage",
    examples: [
      { de: "Wir können unser [[Gepäck]] bis zum Abend im Hotel lassen.", ru: "Мы можем оставить багаж в гостинице до вечера.", en: "We can leave our luggage at the hotel until this evening." }
    ]
  },
  {
    // Wortliste p. 90
    id: 'b1-travel-unterkunft', pos: 'noun', de: "Unterkunft",
    article: 'die', plural: "die Unterkünfte",
    ru: "жильё; место для ночлега", en: "accommodation, place to stay",
    examples: [
      { de: "Für die erste Nacht haben wir bereits eine [[Unterkunft]].", ru: "На первую ночь мы уже нашли жильё.", en: "We already have somewhere to stay for the first night." }
    ]
  },
  {
    // Wortliste p. 41
    id: 'b1-travel-flughafen', pos: 'noun', de: "Flughafen",
    article: 'der', plural: "die Flughäfen",
    ru: "аэропорт", en: "airport",
    examples: [
      { de: "Wie komme ich früh am Morgen zum [[Flughafen]]?", ru: "Как мне рано утром добраться до аэропорта?", en: "How do I get to the airport early in the morning?" }
    ]
  },
  {
    // Wortliste p. 16
    id: 'b1-travel-abfahren', pos: 'verb', de: "abfahren",
    forms: { praes: "fährt ab", praet: "fuhr ab", perf: "ist abgefahren" },
    ru: "отправляться, отъезжать", en: "to depart, to leave",
    examples: [
      { de: "Unser Zug ist heute zehn Minuten später [[abgefahren]].", ru: "Наш поезд сегодня отправился на десять минут позже.", en: "Our train left ten minutes later today." }
    ]
  },
  {
    // Wortliste p. 90
    id: 'b1-travel-umsteigen', pos: 'verb', de: "umsteigen",
    forms: { praes: "steigt um", praet: "stieg um", perf: "ist umgestiegen" }, gov: "in + Akk. / auf + Akk.",
    ru: "пересаживаться; переходить на другой транспорт", en: "to change trains or buses; to switch to another mode of transport",
    examples: [
      { de: "Wir sind in Köln in einen anderen Zug [[umgestiegen]].", ru: "В Кёльне мы пересели на другой поезд.", en: "We changed to another train in Cologne." },
      { de: "Auf dieser Strecke muss ich zweimal [[umsteigen]].", ru: "На этом маршруте мне нужно дважды пересесть.", en: "I have to change twice on this route." }
    ]
  },
  {
    // Wortliste p. 93
    id: 'b1-travel-verpassen', pos: 'verb', de: "verpassen",
    forms: { praes: "verpasst", praet: "verpasste", perf: "hat verpasst" }, gov: "+ Akk.",
    ru: "опоздать на; пропустить", en: "to miss",
    examples: [
      { de: "Wir haben den Bus um eine Minute [[verpasst]].", ru: "Мы опоздали на автобус на одну минуту.", en: "We missed the bus by one minute." }
    ]
  }
] });
