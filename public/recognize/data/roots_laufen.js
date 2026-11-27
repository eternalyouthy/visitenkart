/* ROOT: laufen. Learning content in Russian (ru); English meanings inline (en). */
GT.registerRoot({
  id: 'laufen', verb: 'laufen', ru: 'бегать; идти пешком; работать (о технике)', en: 'to run; to walk; to run (machines, programs)',
  words: [
    {
      id: 'r-laufen-laufen', base: true, pos: 'verb',
      de: 'laufen', forms: { praes: 'läuft', praet: 'lief', perf: 'ist gelaufen' },
      ru: 'бегать; (разг.) идти пешком; работать, идти (о технике, программе, процессе, фильме)', en: 'to run; (colloq.) to walk; to run, to be running (machines, programs, processes, films)',
      examples: [
        { sense: 'работать (о сервисе, программе)', de: 'Der Dienst [[läuft]] seit dem Neustart wieder stabil.', ru: 'Сервис после перезапуска снова работает стабильно.', en: 'The service has been running stably again since the restart.' },
        { sense: 'идти пешком', de: 'Bis zum Bahnhof sind es nur zehn Minuten, wir [[laufen]].', ru: 'До вокзала всего десять минут, пойдём пешком.', en: 'It’s only ten minutes to the station — we’ll walk.' }
      ],
      morph: 'lauf-en',
      meaningType: 'polysemous',
      meaningExplanation: 'laufen — «бегать», в разговорной речи часто просто «идти пешком», а также «работать, функционировать» (Server, Programm, Motor) и «идти, протекать» (Film, Projekt, Vertrag): «Wie läuft’s?» — как дела?',
      meaningExamples: [{ de: 'Wie läuft das Projekt?', ru: 'Как идёт проект?' }, { de: 'Was läuft heute im Kino?', ru: 'Что сегодня идёт в кино?' }],
      note: 'Сильный глагол: läuft, lief, ist gelaufen (Perfekt с sein). Умлаут в 2–3 л. ед. ч.: du läufst, er läuft.',
      i18n: { en: {
        meaningExplanation: 'laufen means “to run”, in everyday speech often just “to walk”, and also “to work, to function” (server, program, engine) and “to go, to be on” (film, project, contract): “Wie läuft’s?” — how’s it going?',
        note: 'Strong verb: läuft, lief, ist gelaufen (Perfekt with sein). Umlaut in 2nd/3rd person singular: du läufst, er läuft.' } },
      why: {
        confidence: 'high',
        root: 'laufen',
        text: 'Состав: корневой сильный глагол lauf- + -en.\nПроисхождение: др.-в.-нем. (h)louffan, герм. *hlaupan-; родственен английскому leap («прыгать») и голландскому lopen. Значение «работать (о машине)» — более позднее переносное развитие. От корня: Lauf, Ablauf, Verlauf, Läufer.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. laufen',
        evidence: 'Др.-в.-нем. (h)louf(f)an, герм. *hlaupan- «прыгать, бежать»; соответствия: англ. leap, нидерл. lopen, гот. -hlaupan.',
        i18n: { en: {
          text: 'Composition: strong root verb lauf- + -en.\nOrigin: Old High German (h)louffan, Germanic *hlaupan-; cognate with English leap and Dutch lopen. The sense “to run (of a machine)” is a later figurative development. From the root: Lauf, Ablauf, Verlauf, Läufer.\nTransparency: base root of the family.',
          evidence: 'OHG (h)louf(f)an, Germanic *hlaupan- “to jump, to run”; cognates: English leap, Dutch lopen, Gothic -hlaupan.' } }
      }
    },
    {
      id: 'r-laufen-ablaufen', prefix: 'ab', sep: 'trennbar', stress: 'áblaufen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ablaufen', forms: { praes: 'läuft ab', praet: 'lief ab', perf: 'ist abgelaufen' },
      ru: 'истекать (о сроке); проходить, протекать (о процессе); стекать (о воде)', en: 'to expire; to go, to proceed (a process); to drain away (water)',
      parallel: 'ИСтекать',
      drill: { ru: 'истекать (о сертификате, пароле)', en: 'to expire (a certificate, a password)', de: 'Das Zertifikat ___läuft morgen' },
      prefixDrill: { ex: 0, meaning: 3, explain: 'ab- = завершение: срок «добегает до конца» — истекает.' },
      examples: [
        { sense: 'истекать (о сроке)', de: 'Das TLS-Zertifikat [[läuft]] in drei Tagen [[ab]].', ru: 'TLS-сертификат истекает через три дня.', en: 'The TLS certificate expires in three days.' },
        { sense: 'проходить (о процессе)', de: 'Wie ist die Migration am Wochenende [[abgelaufen]]?', ru: 'Как прошла миграция на выходных?', en: 'How did the migration go at the weekend?' }
      ],
      morph: 'ab-lauf-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ablaufen — «истечь» (срок, пароль, лицензия, продукт), «пройти, протекать» (процесс, встреча) и буквальное «стекать» (вода в раковине).',
      meaningExamples: [{ de: 'Die Milch ist abgelaufen.', ru: 'У молока истёк срок годности.' }, { de: 'Alles ist gut abgelaufen.', ru: 'Всё прошло хорошо.' }],
      note: 'Существительное: der Ablauf — ход, порядок действий, процесс («Arbeitsablauf» — рабочий процесс).',
      i18n: { en: {
        meaningExplanation: 'ablaufen means “to expire” (a deadline, password, licence, product), “to go, to proceed” (a process, a meeting) and literally “to drain away” (water in a sink).',
        note: 'Noun: der Ablauf — procedure, sequence, process (“Arbeitsablauf” — workflow).' } }
    },
    {
      id: 'r-laufen-auslaufen', prefix: 'aus', sep: 'trennbar', stress: 'áuslaufen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'auslaufen', forms: { praes: 'läuft aus', praet: 'lief aus', perf: 'ist ausgelaufen' },
      ru: 'вытекать, протекать; заканчиваться, истекать (договор, поддержка продукта); выходить из порта', en: 'to leak; to run out, to expire (a contract, product support); to leave port',
      prefixDrill: [
        { ex: 0, meaning: 0, explain: 'aus- = наружу: жидкость выходит наружу — вытекает.' },
        { ex: 1, meaning: 2, explain: 'aus- = до конца: договор «добегает до конца» и заканчивается.' }
      ],
      examples: [
        { sense: 'вытекать', de: 'Aus der Kaffeemaschine ist Wasser [[ausgelaufen]].', ru: 'Из кофемашины вытекла вода.', en: 'Water leaked out of the coffee machine.' },
        { sense: 'заканчиваться (о договоре, поддержке)', de: 'Der Support für Windows 10 [[läuft]] bald [[aus]].', ru: 'Поддержка Windows 10 скоро заканчивается.', en: 'Support for Windows 10 is running out soon.' }
      ],
      morph: 'aus-lauf-en',
      meaningType: 'polysemous',
      meaningExplanation: 'auslaufen — «вытечь» (жидкость), «закончиться, истечь» (договор, модель, поддержка продукта) и о корабле — «выйти из порта».',
      meaningExamples: [{ de: 'Mein Vertrag läuft Ende Juni aus.', ru: 'Мой договор заканчивается в конце июня.' }, { de: 'Das Schiff läuft aus.', ru: 'Корабль выходит из порта.' }],
      i18n: { en: { meaningExplanation: 'auslaufen means “to leak” (a liquid), “to run out, to expire” (a contract, a model, product support) and, of a ship, “to leave port”.' } }
    },
    {
      id: 'r-laufen-verlaufen', prefix: 'ver', sep: 'untrennbar', stress: 'verláufen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'verlaufen', forms: { praes: 'verläuft', praet: 'verlief', perf: 'ist verlaufen · hat sich verlaufen' },
      ru: 'проходить, протекать (о событии); (sich) заблудиться', en: 'to go, to proceed (an event); (sich) to get lost',
      drill: { ru: 'заблудиться (пешком)', en: 'to get lost (on foot)', de: 'Ich habe mich in der Altstadt ___laufen' },
      prefixDrill: { ex: 1, meaning: 0, explain: 'ver- = ошибка, «мимо»: свернуть не туда и заблудиться.' },
      examples: [
        { sense: 'проходить (о событии)', de: 'Das Audit ist ohne Probleme [[verlaufen]].', ru: 'Аудит прошёл без проблем.', en: 'The audit went off without any problems.' },
        { sense: 'заблудиться (sich)', de: 'Ich habe mich auf dem Campus total [[verlaufen]].', ru: 'Я совсем заблудился на территории кампуса.', en: 'I got completely lost on the campus.' }
      ],
      morph: 'ver-lauf-en',
      meaningType: 'polysemous',
      meaningExplanation: 'verlaufen — «пройти, протекать» (встреча, болезнь, процесс; Perfekt с sein) и «sich verlaufen» — заблудиться пешком (на машине: sich verfahren).',
      meaningExamples: [{ de: 'Die Krankheit verläuft meist mild.', ru: 'Болезнь обычно протекает легко.' }, { de: 'Wir haben uns im Wald verlaufen.', ru: 'Мы заблудились в лесу.' }],
      note: 'Существительное: der Verlauf — ход, течение; в браузере «der Verlauf» — история посещений!',
      i18n: { en: {
        meaningExplanation: 'verlaufen means “to go, to proceed” (a meeting, an illness, a process; Perfekt with sein) and “sich verlaufen” — to get lost on foot (by car: sich verfahren).',
        note: 'Noun: der Verlauf — course, progress; in a browser “der Verlauf” is the history!' } }
    },
    {
      id: 'r-laufen-einlaufen', prefix: 'ein', sep: 'trennbar', stress: 'éinlaufen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einlaufen', forms: { praes: 'läuft ein', praet: 'lief ein', perf: 'ist eingelaufen' },
      ru: 'прибывать (о поезде, корабле — «входить»); садиться (об одежде после стирки); поступать (о письмах, заявках)', en: 'to arrive, to pull in (train, ship); to shrink (clothes); to come in (letters, requests)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ein- = внутрь: поезд «вбегает» внутрь вокзала — прибывает.' },
      examples: [
        { sense: 'прибывать (о поезде)', de: 'Der Zug aus Berlin [[läuft]] gleich auf Gleis 5 [[ein]].', ru: 'Поезд из Берлина сейчас прибывает на пятый путь.', en: 'The train from Berlin is about to arrive at platform 5.' },
        { sense: 'сесть после стирки', de: 'Der Pullover ist beim Waschen [[eingelaufen]].', ru: 'Свитер сел после стирки.', en: 'The jumper shrank in the wash.' }
      ],
      morph: 'ein-lauf-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einlaufen — «войти, прибыть» (поезд, корабль, спортсмены на поле), «сесть» (ткань при стирке) и офиц. «поступить» (письма, заявки).',
      meaningExamples: [{ de: 'Die Spieler laufen ein.', ru: 'Игроки выходят на поле.' }, { de: 'Die Jeans ist eingelaufen.', ru: 'Джинсы сели.' }],
      i18n: { en: { meaningExplanation: 'einlaufen means “to come in, to arrive” (a train, a ship, players onto the pitch), “to shrink” (fabric in the wash) and officially “to come in” (letters, requests).' } }
    },
    {
      id: 'r-laufen-anlaufen', prefix: 'an', sep: 'trennbar', stress: 'ánlaufen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'anlaufen', forms: { praes: 'läuft an', praet: 'lief an', perf: 'ist angelaufen' },
      ru: 'начинаться, запускаться (о проекте, производстве, кампании); запотевать (об очках, стекле)', en: 'to start up, to get under way (a project, production, a campaign); to steam up (glasses, a window)',
      drill: { ru: 'стартовать (о проекте)', en: 'to get under way (a project)', de: 'Das Projekt ___läuft im Mai' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'an- = начало: проект «разбегается» — стартует.' },
      examples: [
        { sense: 'стартовать', de: 'Die neue Awareness-Kampagne [[läuft]] nächste Woche [[an]].', ru: 'Новая кампания по осведомлённости стартует на следующей неделе.', en: 'The new awareness campaign gets under way next week.' },
        { sense: 'запотевать', de: 'Mit der Maske [[laufen]] meine Brillengläser ständig [[an]].', ru: 'В маске у меня постоянно запотевают очки.', en: 'With the mask on, my glasses keep steaming up.' }
      ],
      morph: 'an-lauf-en',
      meaningType: 'polysemous',
      meaningExplanation: 'anlaufen — «начать работу, стартовать» (проект, мотор, производство) и «запотеть, потускнеть» (стекло, очки, серебро).',
      meaningExamples: [{ de: 'Die Produktion läuft an.', ru: 'Производство запускается.' }, { de: 'Das Fenster ist angelaufen.', ru: 'Окно запотело.' }],
      note: 'Существительное: der Anlauf — разбег; попытка («im zweiten Anlauf» — со второй попытки).',
      i18n: { en: {
        meaningExplanation: 'anlaufen means “to start up, to get going” (a project, an engine, production) and “to steam up, to tarnish” (glass, glasses, silver).',
        note: 'Noun: der Anlauf — run-up; attempt (“im zweiten Anlauf” — at the second attempt).' } }
    },
    {
      id: 'r-laufen-ueberlaufen', prefix: 'über', sep: 'trennbar', stress: 'ǘberlaufen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'überlaufen', forms: { praes: 'läuft über', praet: 'lief über', perf: 'ist übergelaufen' },
      ru: 'переливаться через край; перейти на сторону противника', en: 'to overflow; to defect (to the other side)',
      prefixDrill: { ex: 0, meaning: 3, explain: 'Отделяемое über- = поверх: вода течёт поверх края — переливается.' },
      examples: [{ de: 'Die Badewanne ist [[übergelaufen]], weil ich das Wasser vergessen habe.', ru: 'Ванна переполнилась, потому что я забыл про воду.', en: 'The bath overflowed because I forgot about the water.' }],
      morph: 'über-lauf-en',
      note: 'В IT: «Pufferüberlauf» (der Überlauf) — переполнение буфера (buffer overflow). Причастие «überlaufen» (неотд.) — переполненный людьми: «Der Strand ist total überlaufen».',
      i18n: { en: { note: 'In IT: “Pufferüberlauf” (der Überlauf) — buffer overflow. The participle “überlaufen” (insep.) — overcrowded: “Der Strand ist total überlaufen”.' } }
    },
    {
      id: 'r-laufen-durchlaufen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchlaufen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'durchlaufen', forms: { praes: 'läuft durch', praet: 'lief durch', perf: 'ist durchgelaufen' },
      ru: 'пройти полностью, отработать до конца (о процессе, скрипте, задании); пробежать насквозь; протечь (о кофе через фильтр)', en: 'to run to completion (a process, a script, a job); to run through; to drip through (coffee)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'Отделяемое durch- = до конца: скрипт отработал от начала до конца.' },
      examples: [{ de: 'Ist das Backup-Skript heute Nacht [[durchgelaufen]]?', ru: 'Скрипт бэкапа отработал этой ночью до конца?', en: 'Did the backup script run through last night?' }],
      morph: 'durch-lauf-en',
      note: 'Сравните неотделяемое durchláufen — «пройти через (этапы, обучение)» — см. пары ниже. Существительное: der Durchlauf — прогон (теста).',
      i18n: { en: { note: 'Compare inseparable durchláufen — “to go through (stages, training)” — see the pairs below. Noun: der Durchlauf — a run (of a test).' } }
    },
    {
      id: 'r-laufen-zulaufen', prefix: 'zu', sep: 'trennbar', stress: 'zúlaufen', pos: 'verb',
      transparency: 'transparent',
      de: 'zulaufen', forms: { praes: 'läuft zu', praet: 'lief zu', perf: 'ist zugelaufen' }, gov: 'auf + Akk.',
      ru: 'бежать навстречу, к кому-то; (о животном) прибиться', en: 'to run towards; (an animal) to stray to someone',
      prefixDrill: { ex: 0, meaning: 1, explain: 'zu- = направление к кому-то: ребёнок бежит прямо к отцу.' },
      examples: [{ de: 'Das Kind ist sofort auf seinen Vater [[zugelaufen]].', ru: 'Ребёнок сразу побежал к отцу.', en: 'The child ran straight to his father.' }],
      morph: 'zu-lauf-en',
      note: '«Eine zugelaufene Katze» — кошка, которая прибилась к дому. «Spitz zulaufen» — сужаться к концу.',
      i18n: { en: { note: '“Eine zugelaufene Katze” — a stray cat that has adopted the household. “Spitz zulaufen” — to taper to a point.' } }
    },
    {
      id: 'r-laufen-lauf', pos: 'noun', article: 'der', plural: 'die Läufe',
      de: 'Lauf', ru: 'бег, забег; ход, течение', en: 'run, race; course',
      examples: [{ de: 'Im [[Lauf]] des Tages kamen noch drei Alerts rein.', ru: 'В течение дня поступили ещё три алерта.', en: 'Three more alerts came in during the day.' }],
      note: '«Im Laufe der Zeit» — со временем; «der Testlauf» — тестовый прогон.',
      i18n: { en: { note: '“Im Laufe der Zeit” — over time; “der Testlauf” — test run.' } }
    },
    {
      id: 'r-laufen-ablauf', pos: 'noun', article: 'der', plural: 'die Abläufe',
      de: 'Ablauf', ru: 'ход, порядок действий, процесс; истечение (срока)', en: 'procedure, process, sequence; expiry',
      examples: [{ de: 'Kannst du mir kurz den [[Ablauf]] bei einem Sicherheitsvorfall erklären?', ru: 'Можешь вкратце объяснить порядок действий при инциденте?', en: 'Can you briefly explain the procedure for a security incident?' }],
      morph: 'Ab-lauf'
    },
    {
      id: 'r-laufen-verlauf', pos: 'noun', article: 'der', plural: 'die Verläufe',
      de: 'Verlauf', ru: 'ход, течение (процесса); история (браузера, чата)', en: 'course, progress; history (browser, chat)',
      examples: [{ de: 'Im [[Verlauf]] des Browsers haben wir die Phishing-Seite gefunden.', ru: 'В истории браузера мы нашли фишинговую страницу.', en: 'We found the phishing page in the browser history.' }],
      morph: 'Ver-lauf'
    },
    {
      id: 'r-laufen-laufzeit', pos: 'noun', article: 'die', plural: 'die Laufzeiten',
      de: 'Laufzeit', ru: 'срок действия (договора, кредита); время выполнения (программы)', en: 'term (of a contract, a loan); runtime (of a program)',
      examples: [{ de: 'Der Vertrag hat eine [[Laufzeit]] von zwei Jahren.', ru: 'Договор заключён на два года.', en: 'The contract has a term of two years.' }],
      morph: 'Lauf-zeit'
    },
    {
      id: 'r-laufen-laufend', pos: 'adj',
      de: 'laufend', ru: 'текущий, постоянный; (adv.) постоянно', en: 'current, ongoing; (adv.) constantly',
      examples: [{ de: 'Ich halte dich auf dem [[Laufenden]].', ru: 'Я буду держать тебя в курсе.', en: 'I’ll keep you posted.' }],
      morph: 'lauf-end',
      note: '«Auf dem Laufenden halten/bleiben» — держать/быть в курсе; «laufende Kosten» — текущие расходы.',
      i18n: { en: { note: '“Auf dem Laufenden halten/bleiben” — to keep/stay up to date; “laufende Kosten” — running costs.' } }
    }
  ],
  pairs: [
    {
      a: { stress: 'dúrchlaufen', sep: 'trennbar · ist durchgelaufen', ru: 'пробежать насквозь; отработать до конца (о процессе)', en: 'to run through; to run to completion',
        ex: { de: 'Der Testlauf ist ohne Fehler [[durchgelaufen]].', ru: 'Тестовый прогон прошёл без ошибок.', en: 'The test run completed without errors.' } },
      b: { stress: 'durchláufen', sep: 'untrennbar · hat durchlaufen', ru: 'пройти через (этапы, обучение, проверку)', en: 'to go through (stages, training, a review)',
        ex: { de: 'Jeder neue Kollege [[durchläuft]] ein Onboarding-Programm.', ru: 'Каждый новый сотрудник проходит программу адаптации.', en: 'Every new colleague goes through an onboarding programme.' } }
    }
  ]
});
