/* ENGLISH vocabulary · third batch (4 per topic × 16 Words topics = 64 cards).
 * Checked against existing pack inventory for zero duplicates.
 * Glosses ru / de inline; examples with [[…]]; editorial CEFR study targets. Original examples. */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };
    return { id: 'en:m3:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'words', topic); });
    GT.register({ tab: 'words', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  reg('everyday', [
    W('sort-out', 'phrasal verb', 'sort out', 'B1', 'разобраться, уладить, привести в порядок', 'regeln, klären, ordnen',
      ex('We need to [[sort out]] the seating plan before the guests arrive.', 'Нам нужно уладить вопрос с рассадкой до прихода гостей.', 'Wir müssen die Sitzordnung regeln, bevor die Gäste kommen.'),
      ['Разделяемый фразовый глагол: sort the issue out или sort out the issue.', 'Trennbares Phrasal Verb: sort the issue out oder sort out the issue.']),
    W('urgent', 'adj', 'urgent', 'B1', 'срочный', 'dringend',
      ex('I’ve got an [[urgent]] message from the bank.', 'Мне пришло срочное сообщение из банка.', 'Ich habe eine dringende Nachricht von der Bank bekommen.'),
      ['Срочно — urgently; «в срочном порядке» — as a matter of urgency.', 'Adverb: urgently (= dringend); häufig: urgent request / reply.']),
    W('essential', 'adj', 'essential', 'B1', 'необходимый, крайне важный', 'wesentlich, unerlässlich',
      ex('Good backups are [[essential]] for any server.', 'Надёжные резервные копии необходимы для любого сервера.', 'Gute Backups sind für jeden Server unerlässlich.'),
      ['Не путать степень: essential (жизненно необходимо) сильнее, чем useful / important.', 'Stärker als important (= unverzichtbar); Konstruktion: it is essential to / that.']),
    W('meanwhile', 'adv', 'meanwhile', 'B1', 'тем временем, между тем', 'inzwischen, währenddessen',
      ex('Tom booked the hotel; [[meanwhile]], I checked the train times.', 'Том забронировал отель; тем временем я проверил расписание поездов.', 'Tom hat das Hotel gebucht; währenddessen habe ich die Zugzeiten geprüft.'),
      ['Вводное наречие в начале предложения (обычно с запятой); ср. нем. währenddessen.', 'Satzadverb am Satzanfang (oft mit Komma); entspricht dt. währenddessen.'])
  ]);

  reg('people', [
    W('patient', 'adj', 'patient', 'B1', 'терпеливый', 'geduldig',
      ex('Be [[patient]] — the new process takes time to learn.', 'Будь терпеливым — на освоение нового процесса нужно время.', 'Sei geduldig — es braucht Zeit, den neuen Ablauf zu lernen.'),
      ['Существительное patient (пациент) — другое значение. Антоним: impatient.', 'Substantiv patient (Patient) ist eine andere Bedeutung. Gegenteil: impatient.']),
    W('jealous', 'adj', 'jealous', 'B1', 'ревнивый; завидующий', 'eifersüchtig; neidisch',
      ex('He felt [[jealous]] when his colleague got the corner office.', 'Он позавидовал, когда коллега получил угловой кабинет.', 'Er wurde neidisch, als sein Kollege das Eckbüro bekam.'),
      ['Предлог — of: jealous of someone’s success (отличие от нем. eifersüchtig auf + Akk.).', 'Präposition ist of (jealous of someone), nicht auf/for — anders als dt. eifersüchtig auf.']),
    W('stubborn', 'adj', 'stubborn', 'B2', 'упрямый', 'stur, eigensinnig',
      ex('She’s too [[stubborn]] to admit she took the wrong turn.', 'Она слишком упрямая, чтобы признать, что повернула не туда.', 'Sie ist zu stur, um zuzugeben, dass sie falsch abgebogen ist.'),
      ['Чаще несёт негативный оттенок («упёртый»); упрямо — stubbornly.', 'Meist negativ gefärbt (stur / unbelehrbar); positives „zielstrebig“ heißt determined.']),
    W('sympathy', 'noun', 'sympathy', 'B2', 'сочувствие, соболезнование', 'Mitgefühl, Anteilnahme',
      ex('I have a lot of [[sympathy]] for people working night shifts.', 'Я искренне сочувствую людям, работающим в ночную смену.', 'Ich habe viel Mitgefühl mit Menschen in der Nachtschicht.'),
      ['Ложный друг для нем. Sympathie! «Симпатия» — liking / fondness; sympathy = сочувствие.', 'Falscher Freund zu dt. Sympathie! Sympathy heißt Mitgefühl, nicht Zuneigung.'])
  ]);

  reg('home', [
    W('fridge', 'noun', 'fridge', 'A2', 'холодильник', 'Kühlschrank',
      ex('Put the milk back in the [[fridge]] before it goes off.', 'Убери молоко обратно в холодильник, пока не прокисло.', 'Stell die Milch wieder in den Kühlschrank, bevor sie schlecht wird.'),
      ['Разговорное сокращение от refrigerator (холодильник); морозилка — freezer.', 'Kurzform von refrigerator; das Gefrierfach heißt freezer.']),
    W('washing-machine', 'noun', 'washing machine', 'A2', 'стиральная машина', 'Waschmaschine',
      ex('The [[washing machine]] is leaking on the kitchen floor.', 'Стиральная машина подтекает на пол кухни.', 'Die Waschmaschine tropft auf den Küchenboden.'),
      ['Стирать бельё — do the washing / laundry (не wash the clothes каждый день).', 'Wäsche waschen: do the laundry / do the washing (Waschmittel = detergent).']),
    W('radiator', 'noun', 'radiator', 'B1', 'батарея, радиатор отопления', 'Heizkörper',
      ex('The [[radiator]] in the bedroom stays cold even at level five.', 'Батарея в спальне остаётся холодной даже на пятёрке.', 'Der Heizkörper im Schlafzimmer bleibt selbst auf Stufe fünf kalt.'),
      ['Также радиатор охлаждения в автомобиле; спустить воздух из батареи — bleed a radiator.', 'Auch Autokühler; Heizkörper entlüften = bleed a radiator.']),
    W('move-in', 'phrasal verb', 'move in', 'A2', 'въехать, заселиться', 'einziehen',
      ex('Our new neighbours [[moved in]] over the weekend.', 'Наши новые соседи заехали на выходных.', 'Unsere neuen Nachbarn sind am Wochenende eingezogen.'),
      ['Антоним: move out (съехать).', 'Gegenteil: move out (ausziehen).'])
  ]);

  reg('food', [
    W('starter', 'noun', 'starter', 'B1', 'закуска (первое блюдо перед основным)', 'Vorspeise',
      ex('I’ll have the soup as a [[starter]].', 'На закуску я возьму суп.', 'Als Vorspeise nehme ich die Suppe.'),
      ['Брит. starter, амер. appetizer.', 'Brit. starter, US appetizer.']),
    W('main-course', 'noun', 'main course', 'B1', 'основное блюдо', 'Hauptgericht',
      ex('For the [[main course]], we ordered grilled salmon.', 'На основное блюдо мы заказали лосося на гриле.', 'Als Hauptgericht haben wir gegrillten Lachs bestellt.'),
      ['Course в ресторане — это подача/блюдо (three-course meal = обед из трёх блюд), не курс лекций.', 'Course heißt im Restaurant „Gang“ (a three-course meal), nicht Kurs.']),
    W('special-offer', 'noun', 'special offer', 'B1', 'спецпредложение, акция', 'Sonderangebot',
      ex('Olive oil is on [[special offer]] this week.', 'На оливковое масло на этой неделе акция.', 'Olivenöl ist diese Woche im Sonderangebot.'),
      ['Предлог на акции — on: be on special offer (ср. нем. im Sonderangebot).', 'Präposition: on special offer (im Gegensatz zu dt. im Sonderangebot).']),
    W('waiter', 'noun', 'waiter', 'A2', 'официант', 'Kellner',
      ex('The [[waiter]] brought the bill right away.', 'Официант сразу принёс счёт.', 'Der Kellner hat die Rechnung sofort gebracht.'),
      ['Женский род — waitress; гендерно-нейтральный вариант — server (чаще в США).', 'Weiblich: waitress; neutral in den USA oft server.'])
  ]);

  reg('health', [
    W('fever', 'noun', 'fever', 'B1', 'температура, лихорадка', 'Fieber',
      ex('She stayed in bed because she had a high [[fever]].', 'Она осталась в постели из-за высокой температуры.', 'Sie blieb im Bett, weil sie hohes Fieber hatte.'),
      ['В брит. английском чаще говорят high temperature.', 'Im britischen Englisch sagt man oft auch high temperature.']),
    W('headache', 'noun', 'headache', 'A2', 'головная боль', 'Kopfschmerzen',
      ex('Staring at the screen all day gave me a [[headache]].', 'Из-за работы за экраном весь день у меня заболела голова.', 'Das Starren auf den Bildschirm hat mir Kopfschmerzen gemacht.'),
      ['Исчисляемое (have a headache с артиклем a!), в отличие от нем. мн. ч. Kopfschmerzen.', 'Zählbar im Singular mit Artikel: have a headache (anders als dt. Plural Kopfschmerzen).']),
    W('sore-throat', 'noun', 'sore throat', 'B1', 'боль в горле', 'Halsschmerzen',
      ex('I woke up with a [[sore throat]] and could barely speak.', 'Я проснулся с болью в горле и еле мог говорить.', 'Ich bin mit Halsschmerzen aufgewacht und konnte kaum sprechen.'),
      ['Всегда с артиклем a: have a sore throat; sore = ноющий, болезненный.', 'Immer mit Artikel: have a sore throat (sore = wund / schmerzend).']),
    W('pharmacy', 'noun', 'pharmacy', 'B1', 'аптека', 'Apotheke',
      ex('Is there a [[pharmacy]] open near the station?', 'Рядом с вокзалом есть открытая аптека?', 'Hat in der Nähe des Bahnhofs eine Apotheke geöffnet?'),
      ['В Британии также говорят chemist’s; в США — drugstore (где продают и бытовые товары).', 'In Großbritannien oft auch chemist’s, in den USA drugstore.'])
  ]);

  reg('work', [
    W('cv', 'noun', 'CV', 'B1', 'резюме', 'Lebenslauf',
      ex('Remember to update your [[CV]] before applying.', 'Не забудь обновить резюме перед откликом.', 'Vergiss nicht, deinen Lebenslauf vor der Bewerbung zu aktualisieren.'),
      ['Брит. CV (curriculum vitae), амер. чаще résumé.', 'Brit. CV, US häufiger résumé.']),
    W('working-hours', 'noun', 'working hours', 'B1', 'рабочие часы, график работы', 'Arbeitszeiten',
      ex('Our [[working hours]] are from nine to five.', 'Наши рабочие часы — с девяти до пяти.', 'Unsere Arbeitszeiten sind von neun bis fünf.'),
      ['Используется во множественном числе; с гибким графиком — flexible working hours.', 'Steht meist im Plural (wie dt. Arbeitszeiten); Gleitzeit = flexible working hours.']),
    W('punctual', 'adj', 'punctual', 'B1', 'пунктуальный', 'pünktlich',
      ex('Please try to be [[punctual]] for the client call.', 'Пожалуйста, постарайтесь быть пунктуальным к звонку с клиентом.', 'Bitte seien Sie beim Kundengespräch pünktlich.'),
      ['В обычной речи чаще говорят be on time; punctual звучит чуть более официально.', 'Im Alltag häufiger be on time; punctual klingt etwas förmlicher.']),
    W('teamwork', 'noun', 'teamwork', 'B1', 'командная работа', 'Teamarbeit',
      ex('Good [[teamwork]] helped us fix the outage in twenty minutes.', 'Слаженная командная работа помогла устранить сбой за двадцать минут.', 'Gute Teamarbeit hat uns geholfen, den Ausfall in zwanzig Minuten zu beheben.'),
      ['Неисчисляемое, пишется слитно; ср. нем. Teamarbeit.', 'Unzählbar (ohne Artikel), zusammengeschrieben wie dt. Teamarbeit.'])
  ]);

  reg('authorities', [
    W('passport', 'noun', 'passport', 'A2', 'загранпаспорт, паспорт', 'Reisepass',
      ex('Check that your [[passport]] is valid for at least six months.', 'Проверьте, что паспорт действителен ещё минимум шесть месяцев.', 'Prüfen Sie, ob Ihr Reisepass noch mindestens sechs Monate gültig ist.'),
      ['В англоязычных странах passport — это именно загранпаспорт для поездок (внутри страны — ID).', 'Bezeichnet immer den Reisepass; im Inland reicht meist ID / driving licence.']),
    W('visa', 'noun', 'visa', 'B1', 'виза', 'Visum',
      ex('How long did it take to get your work [[visa]]?', 'Сколько времени заняло получение рабочей визы?', 'Wie lange hat es gedauert, dein Arbeitsvisum zu bekommen?'),
      ['Запомните род и форму: нем. das Visum, англ. visa (мн. ч. visas).', 'Genus-/Pluralvergleich: dt. das Visum (Pl. Visa), engl. a visa (Pl. visas).']),
    W('apply-for', 'phrasal verb', 'apply for', 'B1', 'подавать заявление на (визу, работу, пособие)', 'beantragen; sich bewerben um',
      ex('You can [[apply for]] a new card online.', 'Подать заявление на новую карту можно онлайн.', 'Man kann eine neue Karte online beantragen.'),
      ['Объединяет два разных нем. глагола: beantragen (пособие/виза) и sich bewerben um (вакансия).', 'Deckt im Deutschen zwei Verben ab: etwas beantragen (Visum) und sich bewerben um (Stelle).']),
    W('renew', 'verb', 'renew', 'B1', 'продлевать, обновлять (документ, подписку)', 'verlängern, erneuern',
      ex('I need to [[renew]] my residence card next month.', 'В следующем месяце мне нужно продлить карту резидента.', 'Nächsten Monat muss ich meinen Aufenthaltstitel verlängern.'),
      ['Для виз, абонементов, контрактов — renew (не «extend» для пластиковых карт/подписок).', 'Für Pässe, Abos und Lizenzen typisch renew; bei Zeiträumen auch extend.'])
  ]);

  reg('travel', [
    W('boarding-pass', 'noun', 'boarding pass', 'B1', 'посадочный талон', 'Bordkarte',
      ex('Show your [[boarding pass]] and ID at the gate.', 'Предъявите посадочный талон и паспорт у выхода на посадку.', 'Zeigen Sie am Gate Ihre Bordkarte und Ihren Ausweis vor.'),
      ['Посадка на борт — boarding; место в самолёте у прохода/окна — aisle / window seat.', 'Einsteigen = boarding; Gang-/Fensterplatz = aisle / window seat.']),
    W('customs', 'noun', 'customs', 'B1', 'таможня', 'Zoll',
      ex('We walked straight through [[customs]] with nothing to declare.', 'Мы спокойно прошли таможню, так как декларировать было нечего.', 'Wir sind einfach durch den Zoll gegangen, weil wir nichts anzumelden hatten.'),
      ['В значении «таможня» всегда с -s (но обычно ед. ч. без артикля: go through customs); таможенная пошлина — customs duty.', 'In dieser Bedeutung immer Pluralform customs (ohne Artikel: pass through customs).']),
    W('check-in', 'phrasal verb', 'check in', 'B1', 'регистрироваться (на рейс / в отель)', 'einchecken',
      ex('You can [[check in]] online 24 hours before your flight.', 'Зарегистрироваться на рейс онлайн можно за 24 часа до вылета.', 'Man kann 24 Stunden vor Abflug online einchecken.'),
      ['Как существительное пишется через дефис или в одно слово: check-in desk / online check-in.', 'Als Nomen oft mit Bindestrich: check-in desk (Schalter), Check-out = check out.']),
    W('detour', 'noun', 'detour', 'B2', 'объезд, обходной путь', 'Umleitung, Umweg',
      ex('Because of roadworks we had to take a long [[detour]].', 'Из-за дорожных работ нам пришлось ехать в большой объезд.', 'Wegen einer Baustelle mussten wir eine lange Umleitung fahren.'),
      ['Сочетание: make / take a detour (не drive a detour); в США чаще ударение DE-tour.', 'Verb: take / make a detour (= eine Umleitung fahren); im Deutschen auch Umweg.'])
  ]);

  reg('leisure', [
    W('day-pass', 'noun', 'day pass', 'B1', 'дневной абонемент, билет на один день', 'Tageskarte',
      ex('A [[day pass]] lets you visit all three galleries.', 'Дневной билет позволяет посетить все три галереи.', 'Mit einer Tageskarte kann man alle drei Galerien besuchen.'),
      ['Подходит для транспорта, музеев и спортклубов; ср. нем. Tageskarte.', 'Für ÖPNV, Museen und Fitnessstudios üblich; entspricht genau dt. Tageskarte.']),
    W('sightseeing', 'noun', 'sightseeing', 'A2', 'осмотр достопримечательностей', 'Sightseeing, Stadtbesichtigung',
      ex('We spent Saturday afternoon [[sightseeing]] in the old town.', 'Субботний день мы провели за осмотром старого города.', 'Wir haben den Samstagnachmittag mit Sightseeing in der Altstadt verbracht.'),
      ['Неисчисляемое (go sightseeing, no plural); сами достопримечательности — the sights.', 'Unzählbar (go sightseeing); einzelne Sehenswürdigkeiten heißen the sights.']),
    W('swimming-pool', 'noun', 'swimming pool', 'A2', 'бассейн', 'Schwimmbad',
      ex('The local [[swimming pool]] opens at seven in the morning.', 'Местный бассейн открывается в семь утра.', 'Das örtliche Schwimmbad öffnet morgens um sieben.'),
      ['Часто сокращается просто до pool; крытый / открытый — indoor / outdoor pool.', 'Im Gespräch oft nur the pool; Hallen-/Freibad = indoor / outdoor pool.']),
    W('board-game', 'noun', 'board game', 'B1', 'настольная игра', 'Brettspiel',
      ex('On rainy Sundays we play a [[board game]] with friends.', 'В дождливые воскресенья мы играем с друзьями в настольные игры.', 'An regnerischen Sonntagen spielen wir mit Freunden ein Brettspiel.'),
      ['Буквально «игра на доске» (board = доска), ср. нем. Brettspiel.', 'Wörtlich „Spiel auf einem Brett“, wie dt. Brettspiel.'])
  ]);

  reg('society', [
    W('charity', 'noun', 'charity', 'B1', 'благотворительность; благотворительный фонд', 'Wohltätigkeit; Hilfsorganisation',
      ex('She donates ten euros a month to an animal [[charity]].', 'Она жертвует десять евро в месяц фонду помощи животным.', 'Sie spendet zehn Euro im Monat an eine Tierschutzorganisation.'),
      ['Без артикля = благотворительность (give money to charity); с артиклем (a charity) = конкретный фонд.', 'Ohne Artikel: Wohltätigkeit allgemein; mit Artikel (a charity): konkrete Hilfsorganisation.']),
    W('petition', 'noun', 'petition', 'B2', 'петиция', 'Petition',
      ex('Over five thousand residents signed the [[petition]] for safer crossings.', 'Более пяти тысяч жителей подписали петицию за безопасные переходы.', 'Über fünftausend Anwohner haben die Petition für sicherere Übergänge unterschrieben.'),
      ['Типичный глагол: sign / launch / start a petition (ср. нем. unterschreiben).', 'Typische Verben: sign / start / launch a petition (= eine Petition unterschreiben).']),
    W('freedom-of-speech', 'noun', 'freedom of speech', 'B2', 'свобода слова', 'Meinungsfreiheit',
      ex('[[Freedom of speech]] is a cornerstone of democracy.', 'Свобода слова — краеугольный камень демократии.', 'Die Meinungsfreiheit ist ein Grundpfeiler der Demokratie.'),
      ['Также freedom of expression; без артикля the (обобщённое понятие).', 'Eng verwandt mit freedom of expression; ohne Artikel (Abstraktum).']),
    W('pension', 'noun', 'pension', 'B1', 'пенсия', 'Rente, Pension',
      ex('After forty years of work, he’s finally receiving his [[pension]].', 'После сорока лет работы он наконец получает пенсию.', 'Nach vierzig Arbeitsjahren bekommt er endlich seine Rente.'),
      ['Выйти на пенсию — retire (not get on pension!); в Германии Pension бывает у госслужащих (Beamte), иначе — Rente.', 'In Rente gehen = retire; nicht verwechseln mit Pension (Hotel) oder Rente vs. Pension.'])
  ]);

  reg('wellbeing', [
    W('exhaustion', 'noun', 'exhaustion', 'B2', 'истощение, полное изнеможение', 'Erschöpfung',
      ex('Two weeks without a day off left him in complete [[exhaustion]].', 'Две недели без выходных довели его до полного истощения.', 'Zwei Wochen ohne freien Tag führten bei ihm zu völliger Erschöpfung.'),
      ['От глагола exhaust (изматывать); h не читается (/ɪɡˈzɔːstʃən/).', 'Zu exhausted (völlig erschöpft); stummes h in der Aussprache: /ɪɡˈzɔːstʃən/.']),
    W('resilience', 'noun', 'resilience', 'B2', 'психологическая устойчивость, стойкость', 'Resilienz, Belastbarkeit',
      ex('Regular sleep and clear boundaries build [[resilience]] at work.', 'Регулярный сон и чёткие границы укрепляют стрессоустойчивость на работе.', 'Regelmäßiger Schlaf und klare Grenzen stärken die Belastbarkeit im Beruf.'),
      ['В психологии и IT (отказоустойчивость систем — system resilience); прил. resilient.', 'In Psychologie und IT (Ausfallsicherheit) gebräuchlich; Adjektiv: resilient.']),
    W('mindfulness', 'noun', 'mindfulness', 'B2', 'осознанность', 'Achtsamkeit',
      ex('Ten minutes of [[mindfulness]] helps me switch off after work.', 'Десять минут осознанности помогают мне переключиться после работы.', 'Zehn Minuten Achtsamkeit helfen mir, nach der Arbeit abzuschalten.'),
      ['Производное от mindful (внимательный); ср. нем. Achtsamkeit.', 'Abgeleitet von mindful („achtsam“); entspricht dt. Achtsamkeit.']),
    W('overwhelmed', 'adj', 'overwhelmed', 'B2', 'перегруженный, подавленный (делами, эмоциями)', 'überfordert, überwältigt',
      ex('I felt completely [[overwhelmed]] by the number of unread emails.', 'Меня совершенно подавило количество непрочитанных писем.', 'Ich fühlte mich von der Menge ungelesener Mails völlig überfordert.'),
      ['Предлог — by или with: overwhelmed by emails / with work.', 'Meist mit by oder with (overwhelmed by work); aktiv: overwhelming (überwältigend).'])
  ]);

  reg('digital-life', [
    W('conspiracy-theory', 'noun', 'conspiracy theory', 'B2', 'теория заговора', 'Verschwörungstheorie',
      ex('Videos pushing a [[conspiracy theory]] often get more clicks than facts.', 'Видео с теориями заговора часто набирают больше кликов, чем факты.', 'Videos mit Verschwörungstheorien bekommen oft mehr Klicks als Fakten.'),
      ['Сторонник теории заговора — conspiracy theorist.', 'Anhänger einer solchen Theorie: conspiracy theorist (Verschwörungstheoretiker).']),
    W('censorship', 'noun', 'censorship', 'B2', 'цензура', 'Zensur',
      ex('Independent journalists pushed back against online [[censorship]].', 'Независимые журналисты выступили против цензуры в интернете.', 'Unabhängige Journalisten wehrten sich gegen Online-Zensur.'),
      ['Глагол «подвергать цензуре» — censor; неисчисляемое существительное.', 'Verb: censor (zensieren); Nomen steht ohne Artikel (Unzählbares).']),
    W('algorithm', 'noun', 'algorithm', 'B2', 'алгоритм', 'Algorithmus',
      ex('The feed [[algorithm]] keeps showing me clips I’ve already seen.', 'Алгоритм ленты продолжает показывать мне ролики, которые я уже видел.', 'Der Feed-Algorithmus zeigt mir ständig Clips, die ich schon gesehen habe.'),
      ['Обратите внимание на -thm на конце (/ˈælɡərɪðəm/); ср. нем. der Algorithmus (Pl. Algorithmen).', 'Schreibweise mit -thm (/ˈælɡərɪðəm/); dt. Plural beachten: die Algorithmen.']),
    W('data-leak', 'noun', 'data leak', 'B2', 'утечка данных', 'Datenleck',
      ex('The company notified users immediately after the [[data leak]].', 'Компания сразу уведомила пользователей после утечки данных.', 'Das Unternehmen informierte die Nutzer sofort nach dem Datenleck.'),
      ['Синоним — data breach (чаще при взломе); утечка и das Leck — родственные германские слова.', 'Eng verwandt mit data breach; Leck und leak sind germanische Kognaten.'])
  ]);

  reg('environment', [
    W('pollutant', 'noun', 'pollutant', 'B2', 'загрязнитель, вредное вещество', 'Schadstoff',
      ex('Modern filters trap most airborne [[pollutants]].', 'Современные фильтры задерживают большинство вредных веществ в воздухе.', 'Moderne Filter fangen die meisten Schadstoffe aus der Luft ab.'),
      ['В отличие от неисчисляемого pollution, конкретное вещество — исчисляемое (pollutants).', 'Anders als pollution ist pollutant zählbar (Pl. pollutants = die Schadstoffe).']),
    W('green-energy', 'noun', 'green energy', 'B1', 'экологичная («зелёная») энергия', 'Ökostrom, grüne Energie',
      ex('Our office switched to 100% [[green energy]] last year.', 'Наш офис в прошлом году полностью перешёл на «зелёную» энергию.', 'Unser Büro ist letztes Jahr komplett auf Ökostrom umgestiegen.'),
      ['Близко к clean / renewable energy; в быту по-немецки часто точнее Ökostrom («экоток»).', 'Umgangssprachlich wie renewable energy; im Deutschen oft gezielt Ökostrom (für Strom).']),
    W('solar-panel', 'noun', 'solar panel', 'B2', 'солнечная панель', 'Solarmodul, Solaranlage',
      ex('They installed [[solar panels]] on the garage roof.', 'Они установили солнечные панели на крыше гаража.', 'Sie haben Solarmodule auf dem Garagendach installiert.'),
      ['Обычно во множественном числе (solar panels) или в названии целой установки.', 'Meist im Plural (solar panels) für eine komplette Anlage auf dem Dach.']),
    W('wildlife', 'noun', 'wildlife', 'B1', 'дикая природа, дикие животные', 'Tierwelt, wilde Tiere',
      ex('Leaving part of the garden wild helps local [[wildlife]].', 'Если оставить часть сада нетронутой, это помогает местной дикой природе.', 'Einen Teil des Gartens wild zu lassen hilft der heimischen Tierwelt.'),
      ['Всегда неисчисляемое единственное число (без артикля и без -s: watch wildlife).', 'Immer unzählbar im Singular (ohne Artikel/-s): native wildlife (= heimische Tierwelt).'])
  ]);

  reg('economy', [
    W('minimum-wage', 'noun', 'minimum wage', 'B2', 'минимальная заработная плата', 'Mindestlohn',
      ex('Parliament voted to raise the [[minimum wage]] in January.', 'Парламент проголосовал за повышение минимальной зарплаты в январе.', 'Das Parlament hat beschlossen, den Mindestlohn im Januar anzuheben.'),
      ['Почасовая/сдельная оплата — wage; месячный оклад — salary (не путать!).', 'Wage = Stunden-/Wochenlohn (mindestlohn); festes Monatsgehalt = salary.']),
    W('cost-of-living', 'noun', 'cost of living', 'B2', 'стоимость жизни', 'Lebenshaltungskosten',
      ex('The [[cost of living]] in the capital has risen sharply.', 'Стоимость жизни в столице резко выросла.', 'Die Lebenshaltungskosten in der Hauptstadt sind stark gestiegen.'),
      ['Согласуется с глаголом в единственном числе (the cost of living is rising — отличие от нем. мн. ч. Kosten!).', 'Steht im Singular (the cost of living has risen) — anders als dt. Plural Lebenshaltungskosten!']),
    W('profit', 'noun', 'profit', 'B1', 'прибыль', 'Gewinn',
      ex('The shop made a modest [[profit]] in its first year.', 'В первый год магазин получил скромную прибыль.', 'Der Laden machte im ersten Jahr einen bescheidenen Gewinn.'),
      ['Глагол «делать прибыль» — make a profit (не do!); некоммерческий — non-profit.', 'Kollokation: make a profit (nicht do!); gemeinnützig = non-profit.']),
    W('tax-return', 'noun', 'tax return', 'B2', 'налоговая декларация', 'Steuererklärung',
      ex('Don’t forget to file your [[tax return]] before July.', 'Не забудьте подать налоговую декларацию до июля.', 'Vergessen Sie nicht, Ihre Steuererklärung vor Juli abzugeben.'),
      ['Подавать декларацию — file / submit a tax return; возврат налога — tax refund (ложные друзья!).', 'Abgeben = file a tax return; die Steuererstattung heißt dagegen tax refund!'])
  ]);

  reg('society-politics', [
    W('immigration', 'noun', 'immigration', 'B2', 'иммиграция', 'Zuwanderung, Einwanderung',
      ex('The debate focused on skilled [[immigration]] and housing.', 'Дискуссия была сосредоточена на квалифицированной иммиграции и жилье.', 'Die Debatte konzentrierte sich auf qualifizierte Zuwanderung und Wohnraum.'),
      ['Въезд в страну — immigration; выезд из страны — emigration.', 'Einwanderung = immigration (in), Auswanderung = emigration (out/ex).']),
    W('citizenship', 'noun', 'citizenship', 'B2', 'гражданство', 'Staatsangehörigkeit, Einbürgerung',
      ex('After five years she applied for German [[citizenship]].', 'Через пять лет она подала заявление на немецкое гражданство.', 'Nach fünf Jahren beantragte sie die deutsche Staatsangehörigkeit.'),
      ['Синоним в документах — nationality; в Германии процесс получения также — naturalisation.', 'Im Ausweis oft nationality; der Prozess der Einbürgerung heißt naturalisation.']),
    W('minority', 'noun', 'minority', 'B2', 'меньшинство', 'Minderheit',
      ex('Democratic laws protect the rights of every [[minority]].', 'Демократические законы защищают права каждого меньшинства.', 'Demokratische Gesetze schützen die Rechte jeder Minderheit.'),
      ['Антоним — majority; выражение in the minority (быть в меньшинстве).', 'Gegenteil: majority; Wendung: to be in the minority (= in der Minderheit sein).']),
    W('compromise', 'noun', 'compromise', 'B2', 'компромисс', 'Kompromiss',
      ex('Both sides reached a [[compromise]] after three hours of talks.', 'После трёх часов переговоров обе стороны пришли к компромиссу.', 'Nach drei Stunden Verhandlung fanden beide Seiten einen Kompromiss.'),
      ['Сочетания: reach / find a compromise; как глагол также — compromise on something.', 'Kollokationen: reach / strike a compromise; als Verb: compromise on something.'])
  ]);

  reg('education', [
    W('retraining', 'noun', 'retraining', 'B2', 'переквалификация, переобучение', 'Umschulung',
      ex('He completed a six-month [[retraining]] course in IT support.', 'Он прошёл шестимесячный курс переобучения в IT-поддержке.', 'Er hat eine sechsmonatige Umschulung im IT-Support abgeschlossen.'),
      ['Соответствует нем. Umschulung; глагол — retrain as (переучиться на кого-то).', 'Entspricht genau dt. Umschulung; Verb: retrain for / as something.']),
    W('degree', 'noun', 'degree', 'B1', 'диплом, учёная степень (вуз)', 'Hochschulabschluss, Studienabschluss',
      ex('She has a [[degree]] in computer science.', 'У неё высшее образование в области компьютерных наук.', 'Sie hat einen Abschluss in Informatik.'),
      ['Не только «градус» (20 degrees), но и диплом университета.', 'Nicht nur „Grad“ (20 degrees), sondern auch Universitätsabschluss.']),
    W('tutoring', 'noun', 'tutoring', 'B2', 'репетиторство, дополнительные занятия', 'Nachhilfe',
      ex('Extra [[tutoring]] helped him pass the maths exam.', 'Дополнительные занятия с репетитором помогли ему сдать математику.', 'Zusätzliche Nachhilfe half ihm, die Matheprüfung zu bestehen.'),
      ['Неисчисляемое (give / get tutoring); преподаватель-репетитор — private tutor.', 'Unzählbar (wie dt. Nachhilfe); die Lehrkraft heißt private tutor.']),
    W('lifelong-learning', 'noun', 'lifelong learning', 'B2', 'непрерывное обучение (всю жизнь)', 'lebenslanges Lernen',
      ex('In tech, [[lifelong learning]] is simply part of the job.', 'В IT постоянное обучение — просто часть профессии.', 'In der IT gehört lebenslanges Lernen einfach zum Beruf.'),
      ['Калька, общая с нем. lebenslanges Lernen; пишется слитно lifelong (без пробела).', 'Parallele zu dt. lebenslanges Lernen; lifelong wird zusammengeschrieben.'])
  ]);
})();
