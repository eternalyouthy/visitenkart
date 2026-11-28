/* RUSSIAN vocabulary · third batch: A2–B1 (4 × 8 = 32), B2 themes (6 × 2 = 12), B2 everyday (4 × 4 = 16) = 60 cards.
 * Stress marked with "+" before the stressed vowel (never before ё). Checked against inventory for zero duplicates.
 * Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) {
    return { id: 'ru-w3-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function V(id, t, aspect, level, forms, en, de, e, note) {
    return { id: 'ru-w3-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: nt(note) };
  }
  function A(id, pos, t, level, en, de, e, note) {
    return { id: 'ru-w3-' + id, pos: pos, t: t, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  // A2–B1 topics (8 × 4 = 32)
  reg('everyday', [
    A('sluchayno', 'adv', 'случ+айно', 'B1', 'accidentally; by any chance', 'zufällig, versehentlich',
      ex('Я [[случ+айно]] удал+ил н+ужный файл.', 'I accidentally deleted an important file.', 'Ich habe versehentlich eine wichtige Datei gelöscht.'),
      ['From сл+учай (“chance/incident”); also “by any chance?” in questions.', 'Zu сл+учай („Zufall / Vorfall“); in Fragen auch „zufällig / etwa?“']),
    A('vnezapno', 'adv', 'внез+апно', 'B1', 'suddenly', 'plötzlich',
      ex('[[Внез+апно]] пошёл с+ильный дождь.', 'Suddenly it started raining heavily.', 'Plötzlich fing es stark an zu regnen.'),
      ['Stronger and slightly more vivid than вдруг; adj: внез+апный (“sudden”).', 'Etwas dramatischer als вдруг („plötzlich / schlagartig“); Adj.: внез+апный.']),
    A('kstati', 'adv', 'кст+ати', 'B1', 'by the way', 'übrigens',
      ex('[[Кст+ати]], ты уж+е в+идел н+овое распис+ание?', 'By the way, have you seen the new timetable yet?', 'Übrigens, hast du schon den neuen Fahrplan gesehen?'),
      ['Always set off by a comma as a filler (“by the way”), or means “timely / apropos”.', 'Mit Komma abgetrennt (= übrigens); ohne Komma auch „ganz gelegen / passend“.']),
    A('obychno', 'adv', 'об+ычно', 'A2', 'usually, normally', 'normalerweise, gewöhnlich',
      ex('[[Об+ычно]] я вста+ю в семь час+ов.', 'Usually I get up at seven o’clock.', 'Normalerweise stehe ich um sieben Uhr auf.'),
      ['Stress on ы (об+ычно); typical pairing: как об+ычно (“as usual”).', 'Betonung auf ы (об+ычно); häufige Wendung: как об+ычно (= wie üblich).'])
  ]);

  reg('people', [
    A('terpelivy', 'adj', 'терпел+ивый', 'B1', 'patient', 'geduldig',
      ex('Наш уч+итель +очень [[терпел+ивый]].', 'Our teacher is very patient.', 'Unser Lehrer ist sehr geduldig.'),
      ['From терп+еть (“to endure/wait patiently”); noun терп+ение (“patience”).', 'Zu терп+еть („ertragen / Geduld haben“); Substantiv: терп+ение (= Geduld).']),
    A('shchedry', 'adj', 'щ+едрый', 'B1', 'generous', 'großzügig',
      ex('Он [[щ+едрый]] челов+ек и всегд+а помог+ает друзь+ям.', 'He is a generous person and always helps his friends.', 'Er ist ein großzügiger Mensch und hilft Freunden immer.'),
      ['Short feminine/plural stress shifts: щедр+а, щ+едры; noun: щ+едрость.', 'Im Prädikat Kurzf.: он щедр, он+а щедр+а; Substantiv: щ+едрость (= Großzügigkeit).']),
    V('ssoritsya', 'сс+ориться', 'impf', 'B1', ['сс+орюсь, сс+оришься', 'сс+орился', 'pf. посс+ориться'], 'to quarrel, to argue', 'sich streiten',
      ex('Мы р+едко [[сс+оримся]] из-за мелоч+ей.', 'We rarely argue over small things.', 'Wir streiten uns selten wegen Kleinigkeiten.'),
      ['Followed by с + Instrumental (ссориться с другом) and из-за + Genitive (over something).', 'Mit с + Instrumental (mit jemandem) und из-за + Genitiv (wegen etwas).']),
    V('skuchat', 'скуч+ать', 'impf', 'A2', ['скуч+аю, скуч+аешь', 'скуч+ал', 'pf. соск+учиться'], 'to miss (someone); to be bored', 'vermissen; sich langweilen',
      ex('Я +очень [[скуч+аю]] по семь+е.', 'I miss my family very much.', 'Ich vermisse meine Familie sehr.'),
      ['Miss someone: скучать по + Dat. (по дому, по тебе).', 'Jemanden vermissen: скучать по + Dat. (по дому, по тебе).'])
  ]);

  reg('home', [
    N('holodilnik', 'холод+ильник', 'm', 'A2', 'fridge', 'der Kühlschrank',
      ex('Пост+авь молок+о в [[холод+ильник]].', 'Put the milk in the fridge.', 'Stell die Milch in den Kühlschrank.'),
      ['From х+олод (“cold”); freezer compartment = мороз+илка.', 'Zu х+олод („Kälte“); das Gefrierfach heißt мороз+илка.']),
    N('stiralnaya', 'стир+альная маш+ина', 'f', 'A2', 'washing machine', 'die Waschmaschine',
      ex('[[Стир+альная маш+ина]] сто+ит в в+анной.', 'The washing machine is in the bathroom.', 'Die Waschmaschine steht im Badezimmer.'),
      ['In everyday chat often shortened to стир+алка; verb “wash clothes” = стир+ать.', 'Umgangssprachlich oft kurz стир+алка; Verb für Wäschewaschen: стир+ать.']),
    N('batareya', 'батар+ея', 'f', 'B1', 'radiator; battery', 'der Heizkörper; die Batterie',
      ex('Зим+ой [[батар+ея]] в к+омнате едв+а тёплая.', 'In winter the radiator in the room is barely warm.', 'Im Winter ist der Heizkörper im Zimmer kaum warm.'),
      ['Big room radiator or car battery = батар+ея; small AA/phone battery = батар+ейка.', 'Heizkörper oder Autobatterie = батар+ея; kleine Batterie (AA) = батар+ейка.']),
    N('balkon', 'балк+он', 'm', 'A2', 'balcony', 'der Balkon',
      ex('Л+етом мы з+автракаем на [[балк+оне]].', 'In summer we have breakfast on the balcony.', 'Im Sommer frühstücken wir auf dem Balkon.'),
      ['Uses preposition на (на балк+оне = on the balcony); glazed enclosed balcony = л+оджия.', 'Immer mit Präposition на (на балк+оне); verglast in Wohnblocks oft л+оджия.'])
  ]);

  reg('food', [
    N('zakuska', 'зак+уска', 'f', 'B1', 'starter, appetiser, snack', 'die Vorspeise, der Snack',
      ex('На [[зак+уску]] мы заказ+али сал+ат и сыр.', 'For a starter we ordered salad and cheese.', 'Als Vorspeise haben wir Salat und Käse bestellt.'),
      ['From закус+ить (“take a bite”); plural зак+уски = starters / hors d’oeuvres.', 'Zu закус+ить („etwas nachbeißen“); im Plural зак+уски klassische Vorspeisen.']),
    N('desert', 'дес+ерт', 'm', 'A2', 'dessert', 'das Dessert, der Nachtisch',
      ex('Что ты х+очешь на [[дес+ерт]] — торт +или мор+оженое?', 'What do you want for dessert — cake or ice cream?', 'Was möchtest du zum Dessert — Torte oder Eis?'),
      ['Note single -с- (unlike English two s’s!); usually with на: что на дес+ерт?', 'Mit nur einem s (anders als engl. dessert); meist mit на: что на дес+ерт?']),
    N('ofitsiant', 'офици+ант', 'm', 'A2', 'waiter', 'der Kellner',
      ex('[[Офици+ант]] б+ыстро принёс мен+ю и в+оду.', 'The waiter quickly brought the menu and water.', 'Der Kellner brachte schnell die Speisekarte und Wasser.'),
      ['Female form: офици+антка; call a server politely with «Извин+ите, пож+алуйста…»', 'Weiblich: офици+антка; ruft man höflich mit «Прост+ите / Извин+ите…».']),
    A('vkusny', 'adj', 'вк+усный', 'A2', 'tasty, delicious', 'lecker',
      ex('Суп сег+одня +очень [[вк+усный]].', 'The soup is really delicious today.', 'Die Suppe ist heute sehr lecker.'),
      ['Literally “with taste” (вкус); opposite: невк+усный.', 'Zu вкус („Geschmack“); Gegenteil: невк+усный (= schmeckt nicht).'])
  ]);

  reg('health', [
    N('golovnaya-bol', 'головн+ая боль', 'f', 'A2', 'headache', 'die Kopfschmerzen',
      ex('От д+олгого сид+ения за компью́тером появ+илась [[головн+ая боль]].', 'Sitting at the computer for so long gave me a headache.', 'Vom langen Sitzen am Computer bekam ich Kopfschmerzen.'),
      ['Singular in Russian (unlike plural Kopfschmerzen); in conversation often: у меня болит голова.', 'Singular (anders als dt. Plural Kopfschmerzen); alltäglicher: у меня бол+ит голов+а.']),
    N('nasmork', 'н+асморк', 'm', 'B1', 'runny nose, head cold', 'der Schnupfen',
      ex('У мен+я с+ильный [[н+асморк]] и сад+ится г+олос.', 'I have a bad runny nose and my voice is going.', 'Ich habe starken Schnupfen und werde heiser.'),
      ['Masculine noun, first-syllable stress; typical verb: у меня н+асморк (I have a cold).', 'Maskulinum mit Erstbetonung; Wendung: у мен+я с+ильный н+асморк.']),
    N('angina', 'анг+ина', 'f', 'B1', 'tonsillitis, severe sore throat', 'die Mandelentzündung, Angina',
      ex('Врач сказ+ал, что +это [[анг+ина]], и в+ыписал антиби+отики.', 'The doctor said it was tonsillitis and prescribed antibiotics.', 'Der Arzt sagte, es sei Angina, und verschrieb Antibiotika.'),
      ['In Russian means acute throat/tonsil infection (tonsillitis), not heart angina!', 'Bedeutet im Russ. meist akute Mandelentzündung (nicht Angina pectoris).']),
    N('allergiya', 'аллерг+ия', 'f', 'B1', 'allergy', 'die Allergie',
      ex('Весн+ой у нег+о [[аллерг+ия]] на пыльц+у.', 'In spring he has a pollen allergy.', 'Im Frühling hat er eine Pollenallergie.'),
      ['аллергия на + Acc. (на кошек, на орехи).', 'аллергия на + Akk. (на кошек, на орехи).'])
  ]);

  reg('travel', [
    N('posadochny', 'пос+адочный тал+он', 'm', 'B1', 'boarding pass', 'die Bordkarte',
      ex('Не заб+удь сохран+ить [[пос+адочный тал+он]] в телеф+оне.', 'Don’t forget to save your boarding pass on your phone.', 'Vergiss nicht, die Bordkarte auf dem Handy zu speichern.'),
      ['Often shortened at the airport to просто пос+адочный; noun is пос+адка (boarding).', 'Am Flughafen oft verkürzt zu пос+адочный; zu пос+адка (= Einsteigen).']),
    N('vagon', 'ваг+он', 'm', 'A2', 'railway carriage, coach', 'der Waggon, der Wagen',
      ex('Наш [[ваг+он]] — четвёртый с голов+ы п+оезда.', 'Our carriage is the fourth from the front of the train.', 'Unser Waggon ist der vierte von vorn.'),
      ['Counting cars: нумерация с голов+ы / хвост+а п+оезда (from front / tail).', 'Wagenreihung: с голов+ы (= von vorn) oder с хвост+а (= von hinten) п+оезда.']),
    N('provodnik', 'проводн+ик', 'm', 'B1', 'train attendant, conductor', 'der Schaffner, der Zugbegleiter',
      ex('[[Проводн+ик]] пров+ерил бил+еты и паспорт+а.', 'The conductor checked the tickets and passports.', 'Der Schaffner kontrollierte die Fahrkarten und Pässe.'),
      ['Female form: проводн+ица; in physics also “electrical conductor”.', 'Weiblich: проводн+ица; in der Physik auch „elektrischer Leiter“.'])
  ]);

  reg('work', [
    N('rabochiy-den', 'раб+очий день', 'm', 'A2', 'working day', 'der Arbeitstag',
      ex('Наш [[раб+очий день]] начин+ается в д+евять утр+а.', 'Our working day starts at nine in the morning.', 'Unser Arbeitstag beginnt um neun Uhr morgens.'),
      ['Fleeting е drops in oblique cases: в теч+ение раб+очего дня (during the workday).', 'Flüchtiges e fällt im Genitiv weg: в конц+е раб+очего дня.']),
    N('punktuallnost', 'пункту+альность', 'f', 'B1', 'punctuality', 'die Pünktlichkeit',
      ex('На встр+ечах с кли+ентами важн+а [[пункту+альность]].', 'Punctuality is important in meetings with clients.', 'Bei Kundenterminen ist Pünktlichkeit wichtig.'),
      ['Adjective: пункту+альный; opposite: опаздывать (be late).', 'Lehnwort aus dem Lat./Dt. (pünktlich); Gegenteil im Gespräch: вечно оп+аздывать.']),
    N('navyk', 'н+авык', 'm', 'B1', 'skill', 'die Fähigkeit, das Können',
      ex('Курс помог+ает разв+ить [[н+авык]] делов+ой переп+иски.', 'The course helps develop business-writing skills.', 'Der Kurs hilft, die Fähigkeit zur Geschäftskorrespondenz zu entwickeln.'),
      ['Trained skill (soft / hard skills = гибкие и профессиональные н+авыки).', 'Erlernte Fertigkeit (Soft Skills = г+ибкие н+авыки).']),
    N('sotrudnichestvo', 'сотр+удничество', 'n', 'B2', 'cooperation, collaboration', 'die Zusammenarbeit',
      ex('Спас+ибо за плодотв+орное [[сотр+удничество]]!', 'Thank you for the fruitful cooperation!', 'Vielen Dank für die gute Zusammenarbeit!'),
      ['From сотр+удник (“co-worker”); verb: сотр+удничать с + Instrumental.', 'Zu сотр+удник („Mitarbeiter“); Verb: сотр+удничать с + Instrumental.'])
  ]);

  reg('authorities', [
    N('poshlina', 'п+ошлина', 'f', 'B2', 'state fee, duty', 'die Gebühr, der Zoll',
      ex('Перед под+ачей докум+ентов н+ужно оплат+ить [[п+ошлину]].', 'Before submitting the documents you need to pay the state fee.', 'Vor der Abgabe der Unterlagen muss man die Gebühr zahlen.'),
      ['Official fee for passports, visas, courts (госп+ошлина = state duty).', 'Amtliche Gebühr (госп+ошлина) für Pass, Gericht oder Zölle.']),
    N('vnzh', 'вид на ж+ительство', 'm', 'B2', 'residence permit', 'die Aufenthaltserlaubnis',
      ex('Срок д+ействия ег+о [[в+ида на ж+ительство]] зак+анчивается в м+ае.', 'His residence permit expires in May.', 'Seine Aufenthaltserlaubnis läuft im Mai ab.'),
      ['Short: ВНЖ (вэ-эн-жэ).', 'Kurz: ВНЖ.']),
    N('doverennost', 'дов+еренность', 'f', 'B2', 'power of attorney', 'die Vollmacht',
      ex('Без [[дов+еренности]] чуж+ое письм+о на п+очте не в+ыдадут.', 'Without a power of attorney the post office won’t hand over someone else’s letter.', 'Ohne Vollmacht wird ein fremder Brief bei der Post nicht ausgehändigt.'),
      ['From довер+ять (“trust”); act on a proxy = д+ействовать по дов+еренности.', 'Zu довер+ять („vertrauen“); mit Vollmacht handeln = по дов+еренности.']),
    N('svidetelstvo', 'свид+етельство', 'n', 'B2', 'certificate (official)', 'die Urkunde, die Bescheinigung',
      ex('Для регистр+ации пон+адобится [[свид+етельство]] о рожд+ении.', 'You will need a birth certificate for registration.', 'Für die Anmeldung braucht man die Geburtsurkunde.'),
      ['Used for civil records: о рожд+ении (birth), о бр+аке (marriage); takes о + Prep.', 'Amtliche Urkunde: о рожд+ении (Geburts-), о бр+аке (Heiratsurkunde).'])
  ]);

  // B2 themes (2 × 6 = 12)
  reg('b2_media', [
    N('algoritm', 'алгор+итм', 'm', 'B2', 'algorithm', 'der Algorithmus',
      ex('[[Алгор+итм]] л+енты пок+азывает т+олько пох+ожие н+овости.', 'The feed algorithm only shows similar news.', 'Der Feed-Algorithmus zeigt nur ähnliche Nachrichten.'),
      ['Stress falls on -и- (алгори́тм); plural алгор+итмы is regular masculine.', 'Betonung auf i (алгори́тм); regelmäßiger Plural алгор+итмы.']),
    N('redaktsiya', 'ред+акция', 'f', 'B2', 'editorial office, newsroom; edition', 'die Redaktion; die Fassung',
      ex('[[Ред+акция]] провер+яет к+аждый факт п+еред публик+ацией.', 'The newsroom checks every fact before publication.', 'Die Redaktion prüft jeden Fakt vor der Veröffentlichung.'),
      ['Means both newsroom team and version of a text/law (в н+овой ред+акции).', 'Bezeichnet die Redaktion sowie die überarbeitete Fassung eines Textes/Gesetzes.']),
    N('reportazh', 'репорт+аж', 'm', 'B2', 'report, coverage', 'die Reportage, der Bericht',
      ex('В+ечером пок+ажут [[репорт+аж]] с м+еста соб+ытий.', 'In the evening they’ll show a report from the scene.', 'Am Abend zeigen sie eine Reportage vom Ort des Geschehens.'),
      ['Masculine (unlike German die Reportage!); reporter = репортёр.', 'Maskulinum im Russischen (anders als dt. die Reportage); Person: репортёр.']),
    N('podpiska', 'подп+иска', 'f', 'B1', 'subscription', 'das Abonnement',
      ex('У мен+я пл+атная [[подп+иска]] на электр+онную газ+ету.', 'I have a paid subscription to the digital newspaper.', 'Ich habe ein bezahltes Abo für die Online-Zeitung.'),
      ['Subscribe to something: подпис+аться на + Accusative (на канал / рассылку).', 'Abonnieren / folgen: подпис+аться на + Akk. (на кан+ал, на газ+ету).']),
    N('blokirovka', 'блокир+овка', 'f', 'B2', 'blocking, suspension', 'die Sperrung, die Blockade',
      ex('П+осле [[блокир+овки]] акк+аунта он напис+ал в подд+ержку.', 'After his account was blocked, he wrote to support.', 'Nach der Kontosperrung schrieb er an den Support.'),
      ['Applies to websites, bank cards, and accounts; verb: заблок+ировать.', 'Für Konten, Karten und Websites; Verb: блок+ировать / заблок+ировать.']),
    N('dostovernost', 'достов+ерность', 'f', 'B2', 'reliability, authenticity', 'die Glaubwürdigkeit, die Zuverlässigkeit',
      ex('[[Достов+ерность]] +этой информ+ации пок+а не подтвержден+а.', 'The reliability of this information has not been confirmed yet.', 'Die Glaubwürdigkeit dieser Information ist noch nicht bestätigt.'),
      ['Built on в+ера (“truth/faith”), “worthy of trust”; adj: достов+ерный.', 'Zu в+ера („Glaube/Vertrauen“); Adjektiv: достов+ерный (= verlässlich).'])
  ]);

  reg('b2_society', [
    N('blagotvoritelnost', 'благотвор+ительность', 'f', 'B2', 'charity', 'die Wohltätigkeit',
      ex('Комп+ания перечисл+яет часть пр+ибыли на [[благотвор+ительность]].', 'The company donates part of its profit to charity.', 'Das Unternehmen spendet einen Teil des Gewinns für Wohltätigkeit.'),
      ['Compound of бл+аго (“good”) + твор+ить (“do”); preposition: на благотвор+ительность.', 'Aus бл+аго („Wohl“) + твор+ить („tun“); exakt wie dt. Wohl-tätigkeit.']),
    N('petitsiya', 'пет+иция', 'f', 'B2', 'petition', 'die Petition',
      ex('Т+ысячи ж+ителей подпис+али [[пет+ицию]] за н+овый сквер.', 'Thousands of residents signed the petition for a new park.', 'Tausende Anwohner unterschrieben die Petition für einen neuen Park.'),
      ['Common verbs: подп+исать / созд+ать пет+ицию (за / пр+отив чего-то).', 'Verben: подп+исать (unterschreiben) / созд+ать (starten) пет+ицию.']),
    N('svoboda-slova', 'своб+ода сл+ова', 'f', 'B2', 'freedom of speech', 'die Meinungsfreiheit',
      ex('[[Своб+ода сл+ова]] закреплен+а в констит+уции.', 'Freedom of speech is enshrined in the constitution.', 'Die Meinungsfreiheit ist in der Verfassung verankert.'),
      ['Literally “freedom of the word” (Genitive сл+ова); adjective: своб+одный.', 'Wörtlich „Freiheit des Wortes“ (Genitiv сл+ова), entspricht Meinungsfreiheit.']),
    N('ravenstvo', 'р+авенство', 'n', 'B2', 'equality', 'die Gleichheit, die Gleichberechtigung',
      ex('Зак+он гарант+ирует [[р+авенство]] всех п+еред суд+ом.', 'The law guarantees equality of all before the court.', 'Das Gesetz garantiert die Gleichheit aller vor Gericht.'),
      ['Stress on first syllable (ра́венство); also means “equals sign” in maths.', 'Erstbetonung (ра́венство); in der Mathematik auch „Gleichheitszeichen“.']),
    N('migratsiya', 'мигр+ация', 'f', 'B2', 'migration', 'die Migration',
      ex('[[Мигр+ация]] в кр+упные город+а растёт к+аждый год.', 'Migration to big cities is growing every year.', 'Die Migration in Großstädte wächst jedes Jahr.'),
      ['Notice иммигр+ация (into a country) vs эмигр+ация (out of a country).', 'Unterscheide иммигр+ация (Einwanderung) vs. эмигр+ация (Auswanderung).']),
    N('kompromiss', 'компром+исс', 'm', 'B2', 'compromise', 'der Kompromiss',
      ex('П+осле д+олгих сп+оров ст+ороны нашл+и [[компром+исс]].', 'After a long debate the two sides found a compromise.', 'Nach langen Debatten fanden beide Seiten einen Kompromiss.'),
      ['Double -сс in spelling; verbs: найт+и / пойт+и на компром+исс.', 'Schreibung mit Doppel-s; Wendung: пойт+и на компром+исс (= Kompromiss eingehen).'])
  ]);

  // B2 everyday topics (4 × 4 = 16)
  reg('b2_housing', [
    N('kvartplata', 'квартпл+ата', 'f', 'B2', 'monthly rent and housing fees', 'die Miete samt Nebenkosten',
      ex('П+осле рем+онта [[квартпл+ата]] в+ыросла на д+есять проц+ентов.', 'After the renovation, the monthly housing payment rose by ten per cent.', 'Nach der Renovierung stieg die Miete um zehn Prozent.'),
      ['Short for квартирная плата.', 'Kurz für квартирная плата.']),
    N('kapremont', 'капрем+онт', 'm', 'B2', 'major building overhaul', 'die Kernsanierung, Grundinstandsetzung',
      ex('Л+етом в подъ+езде нач+ался [[капрем+онт]].', 'In summer a major overhaul began in the building.', 'Im Sommer begann im Haus eine Grundsanierung.'),
      ['Short for капитальный ремонт.', 'Kurz für капитальный ремонт.']),
    N('zvukoizolyatsiya', 'звукоизол+яция', 'f', 'B2', 'soundproofing', 'die Schalldämmung',
      ex('В ст+аром д+оме плох+ая [[звукоизол+яция]] — сл+ышно сос+едей.', 'The old building has poor soundproofing — you can hear the neighbours.', 'Im Altbau ist die Schalldämmung schlecht — man hört die Nachbarn.'),
      ['From звук (“sound”) + изол+яция; heat insulation is теплоизол+яция.', 'Aus звук („Schall/Ton“) + изол+яция; Wärmedämmung heißt теплоизол+яция.']),
    N('zhilaya-ploshchad', 'жил+ая пл+ощадь', 'f', 'B2', 'living area', 'die Wohnfläche',
      ex('[[Жил+ая пл+ощадь]] +этой кварт+иры — шестьдес+ят м+етров.', 'The living area of this flat is sixty square metres.', 'Die Wohnfläche dieser Wohnung beträgt sechzig Quadratmeter.'),
      ['Contrast with +общая пл+ощадь (total floor space including hallways and kitchen).', 'In Anzeigen oft neben +общая пл+ощадь (= Gesamtfläche inklusive Flur/Küche).'])
  ]);

  reg('b2_relations', [
    N('predatelstvo', 'пред+ательство', 'n', 'B2', 'betrayal', 'der Verrat, der Vertrauensbruch',
      ex('Обм+ан бл+изкого др+уга он воспр+инял как [[пред+ательство]].', 'He saw his close friend’s lie as a betrayal.', 'Die Lüge des engen Freundes empfand er als Verrat.'),
      ['From пред+ать (“to betray”); traitor = пред+атель.', 'Zu пред+ать („verraten“); die verratende Person heißt пред+атель.']),
    N('odinochestvo', 'один+очество', 'n', 'B2', 'loneliness', 'die Einsamkeit',
      ex('В больш+ом г+ороде мн+огие ч+увствуют [[один+очество]].', 'In a big city many people feel loneliness.', 'In einer Großstadt fühlen viele Menschen Einsamkeit.'),
      ['From од+ин (“one/alone”); adjective: один+окий (lonely / single).', 'Zu од+ин („allein“); Adjektiv: один+окий (= einsam / alleinlebend).']),
    N('primirenie', 'примир+ение', 'n', 'B2', 'reconciliation', 'die Versöhnung',
      ex('+Искренний разгов+ор привёл к [[примир+ению]].', 'An honest conversation led to reconciliation.', 'Ein offenes Gespräch führte zur Versöhnung.'),
      ['Built on мир (“peace”); verbs: примир+иться / помир+иться с + Instr.', 'Gebildet von мир („Frieden“); Verben: помир+иться с кем-то (= sich versöhnen).']),
    N('nedorazumenie', 'недоразум+ение', 'n', 'B2', 'misunderstanding', 'das Missverständnis',
      ex('Сс+ора произошл+а из-за прост+ого [[недоразум+ения]].', 'The argument happened because of a simple misunderstanding.', 'Der Streit entstand aus einem einfachen Missverständnis.'),
      ['From р+азум (“reason/understanding”); “by mistake/misunderstanding” = по недоразум+ению.', 'Zu р+азум („Verstand“); Wendung: по недоразум+ению (= versehentlich / aus Missverständnis).'])
  ]);

  reg('b2_health', [
    N('vyzdorovlenie', 'выздоровл+ение', 'n', 'B2', 'recovery', 'die Genesung',
      ex('П+осле опер+ации н+ужен м+есяц на п+олное [[выздоровл+ение]].', 'After the operation a month is needed for full recovery.', 'Nach der OP braucht man einen Monat zur vollständigen Genesung.'),
      ['Built on здор+овый (“healthy”); noun for recovery after illness or surgery.', 'Zu здор+овый („gesund“); Substantiv für die Genesung nach Krankheit/OP.']),
    N('diagnoz', 'ди+агноз', 'm', 'B2', 'diagnosis', 'die Diagnose',
      ex('Без ан+ализов врач не м+ожет пост+авить [[ди+агноз]].', 'Without tests the doctor cannot make a diagnosis.', 'Ohne Laborwerte kann der Arzt keine Diagnose stellen.'),
      ['Masculine noun (vs German die Diagnose); verb is пост+авить ди+агноз (not сделать!).', 'Maskulinum (anders als dt. die Diagnose); festes Verb: пост+авить ди+агноз.']),
    N('profilaktika', 'профил+актика', 'f', 'B2', 'prevention (medical)', 'die Prävention, die Vorsorge',
      ex('Регул+ярный осм+отр — л+учшая [[профил+актика]] бол+езней.', 'Regular check-ups are the best disease prevention.', 'Regelmäßige Untersuchungen sind die beste Vorsorge.'),
      ['Used for preventive medicine and also technical IT maintenance.', 'Sowohl medizinische Vorsorge als auch technische Wartung (профил+актика на сайте).']),
    N('lechenie', 'леч+ение', 'n', 'B1', 'treatment', 'die Behandlung',
      ex('[[Леч+ение]] помогл+о уж+е ч+ерез нед+елю.', 'The treatment helped within just a week.', 'Die Behandlung half schon nach einer Woche.'),
      ['From леч+ить (“to treat”); reflexive леч+иться = undergo treatment.', 'Zu леч+ить („behandeln / heilen“); sich behandeln lassen = леч+иться.'])
  ]);

  reg('b2_travel', [
    N('strahovka', 'страх+овка', 'f', 'B1', 'insurance', 'die Versicherung',
      ex('Перед по+ездкой за гран+ицу оф+ормите медиц+инскую [[страх+овку]].', 'Take out medical insurance before travelling abroad.', 'Schließen Sie vor der Auslandsreise eine Krankenversicherung ab.'),
      ['Derived from страх (“fear”) — literally protection against what you fear; formal: страхов+ание.', 'Historisch von страх („Angst“) abgeleitet; formeller auch страхов+ание.']),
    N('kompensatsiya', 'компенс+ация', 'f', 'B2', 'compensation', 'die Entschädigung',
      ex('При зад+ержке р+ейса пассаж+ир им+еет пр+аво на [[компенс+ацию]].', 'When a flight is delayed, a passenger is entitled to compensation.', 'Bei Flugverspätung hat der Passagier Anspruch auf Entschädigung.'),
      ['Typical verb: выпл+атить / получ+ить компенс+ацию за + Accusative.', 'Verben: выпл+атить (auszahlen) / получ+ить (erhalten) компенс+ацию за + Akk.']),
    N('poterya-bagazha', 'пот+еря багаж+а', 'f', 'B2', 'loss of luggage', 'der Gepäckverlust',
      ex('При [[пот+ере багаж+а]] ср+азу обрат+итесь на ст+ойку в аэропорт+у.', 'If your luggage is lost, go straight to the desk at the airport.', 'Wenden Sie sich bei Gepäckverlust sofort an den Schalter am Flughafen.'),
      ['Notice preposition при + Prepositional (“in case of loss: при пот+ере”); багаж+а is Genitive.', 'Mit при + Präpositiv („im Falle des Verlusts: при пот+ере“); багаж+а = Genitiv.']),
    N('otmena-reysa', 'отм+ена р+ейса', 'f', 'B2', 'flight / trip cancellation', 'die Flugstreichung, der Ausfall',
      ex('Из-за тум+ана объяв+или [[отм+ену р+ейса]].', 'Because of fog, a flight cancellation was announced.', 'Wegen Nebels wurde die Annullierung des Fluges gemeldet.'),
      ['Verb: отмен+ить рейс (cancel a flight); compare задерж+ать рейс (delay a flight).', 'Verb: отмен+ить рейс (streichen) vs. задерж+ать рейс (verspäten).'])
  ]);
})();
