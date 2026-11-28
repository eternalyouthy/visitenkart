/* RUSSIAN · Professional: Work & Office, IT & Development, Infrastructure, Security (B1–B2, SOC-weighted). */
GT.register({ tab: 'it', topic: 'workcomm', items: [
{
  id: 'ru-pro-soveshchanie', pos: 'noun', level: 'B1', t: 'совещ+ание', gender: 'n',
  en: '(work) meeting', de: 'die Besprechung, das Meeting',
  examples: [{ t: '[[Совещ+ание]] перенесли́ на четы́ре.', en: 'The meeting was moved to four.', de: 'Die Besprechung wurde auf vier verschoben.' }],
  note: { en: 'The standard word for a work meeting (NOT «митинг»). Informal: «встреча», online: «созвон».', de: 'Das Standardwort für eine Besprechung (NICHT «митинг»). Lockerer: «встреча», online: «созвон».' }
},
{
  id: 'ru-pro-srok', pos: 'noun', level: 'B1', t: 'срок', gender: 'm', plural: 'срок+и',
  en: 'deadline; period, term', de: 'die Frist, der Termin; der Zeitraum',
  examples: [
    { sense: { en: 'deadline', de: 'Frist' }, t: 'Мы не успева́ем в [[срок]].', en: 'We won’t make the deadline.', de: 'Wir schaffen die Frist nicht.' },
    { sense: { en: 'period, term', de: 'Zeitraum' }, t: '[[Срок]] де́йствия па́спорта — де́сять лет.', en: 'The passport is valid for ten years.', de: 'Der Pass ist zehn Jahre gültig.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'Both a point in time (the deadline) and a length of time (validity period, term of office, even a prison sentence — «получить срок»).', de: 'Sowohl ein Zeitpunkt (Frist) als auch eine Zeitspanne (Gültigkeit, Amtszeit, sogar Haftstrafe — «получить срок»).' },
  meaningExamples: [{ t: 'сорва́ть сроки', en: 'to miss the deadlines', de: 'die Fristen reißen' }, { t: 'срок го́дности', en: 'expiry date', de: 'Haltbarkeitsdatum' }]
},
{
  id: 'ru-pro-zadacha', pos: 'noun', level: 'A2', t: 'зад+ача', gender: 'f', plural: 'зад+ачи',
  en: 'task; problem (to solve)', de: 'die Aufgabe',
  examples: [{ t: 'Я заведу́ [[зад+ачу]] в Джи́ре.', en: 'I’ll create a task in Jira.', de: 'Ich lege eine Aufgabe in Jira an.' }],
  note: { en: '«Поставить задачу» — to assign a task; «решить задачу» — to solve it. A ticket is often just «задача» or «тикет».', de: '«Поставить задачу» — eine Aufgabe stellen; «решить задачу» — sie lösen. Ein Ticket heißt oft «задача» oder «тикет».' }
},
{
  id: 'ru-pro-soglasovyvat', pos: 'verb', level: 'B2', aspect: 'impf', t: 'соглас+овывать', gov: 'с + Instr.',
  forms: { praes: 'соглас+овываю, соглас+овываешь', praet: 'соглас+овывал', perf: 'pf. согласов+ать (соглас+ую)' },
  en: 'to coordinate, to get approval for', de: 'abstimmen, genehmigen lassen',
  examples: [{ t: 'На́до [[согласов+ать]] сро́ки с заказчиком.', en: 'We need to agree the deadlines with the client.', de: 'Wir müssen die Fristen mit dem Kunden abstimmen.' }],
  note: { en: 'The key office verb: you «согласуете» a plan, budget or text with someone to get their OK. Noun: согласова́ние.', de: 'Das zentrale Büroverb: Plan, Budget oder Text mit jemandem abstimmen. Substantiv: согласова́ние.' }
},
{
  id: 'ru-pro-otchyot', pos: 'noun', level: 'B1', t: 'отчёт', gender: 'm', plural: 'отчёты',
  en: 'report', de: 'der Bericht',
  examples: [{ t: 'Пришли́ [[отчёт]] до конца́ дня.', en: 'Send the report by the end of the day.', de: 'Schick den Bericht bis Tagesende.' }],
  parts: [['от-', { en: 'back, in return', de: 'zurück' }], ['-чёт', { en: 'count (cf. счёт)', de: 'Zählen (vgl. счёт)' }]],
  note: { en: 'Literally “accounting back”. «Отчитаться» — to report on one’s work.', de: 'Wörtlich „Rechenschaft“. «Отчитаться» — über seine Arbeit berichten.' }
},
{
  id: 'ru-pro-sozvon', pos: 'noun', level: 'B1', t: 'созв+он', gender: 'm',
  en: '(video) call (colloquial)', de: 'der Call, die Videokonferenz (ugs.)',
  examples: [{ t: 'У меня́ [[созв+он]] в два, напишу́ по́сле.', en: 'I have a call at two, I’ll write after.', de: 'Ich habe um zwei einen Call, ich schreibe danach.' }],
  meaningType: 'colloquial',
  meaningExplanation: { en: 'Office slang from созвониться (to call each other). Very common in IT teams; in formal writing say «видеоконференция» or «звонок».', de: 'Büro-Jargon von созвониться (sich anrufen). In IT-Teams sehr üblich; formell: «видеоконференция» oder «звонок».' },
  meaningExamples: [{ t: 'Созвон+имся за́втра?', en: 'Shall we have a call tomorrow?', de: 'Telefonieren wir morgen?' }, { t: 'ежедн+евный созв+он', en: 'daily call', de: 'täglicher Call' }]
},
{
  id: 'ru-pro-napominanie', pos: 'noun', level: 'B1', t: 'напомин+ание', gender: 'n',
  en: 'reminder', de: 'die Erinnerung (Hinweis)',
  examples: [{ t: 'Пост+авлю [[напомин+ание]] на понеде́льник.', en: 'I’ll set a reminder for Monday.', de: 'Ich stelle eine Erinnerung für Montag ein.' }],
  note: { en: 'From напомнить “to remind” (на- + помнить “remember”). Polite follow-up: «Напоминаю, что…»', de: 'Von напомнить „erinnern“ (на- + помнить). Höfliche Nachfrage: «Напоминаю, что…»' }
}
]});

GT.register({ tab: 'it', topic: 'dev', items: [
{
  id: 'ru-pro-razrabotchik', pos: 'noun', level: 'B1', t: 'разраб+отчик', gender: 'm', plural: 'разраб+отчики',
  en: 'developer', de: 'der Entwickler',
  examples: [{ t: 'Спроси́ у [[разраб+отчиков]], когда́ бу́дет фикс.', en: 'Ask the developers when the fix will be ready.', de: 'Frag die Entwickler, wann der Fix kommt.' }],
  parts: [['раз-', { en: 'thoroughly, apart', de: 'gründlich' }], ['-работ-', { en: 'work', de: 'Arbeit' }], ['-чик', { en: 'person', de: 'Person' }]],
  note: { en: 'From разрабо́тать (to develop). «Разработка» — development; in slang «разраб».', de: 'Von разрабо́тать (entwickeln). «Разработка» — Entwicklung; Slang: «разраб».' }
},
{
  id: 'ru-pro-reliz', pos: 'noun', level: 'B1', t: 'рел+из', gender: 'm',
  en: 'release', de: 'das Release',
  examples: [{ t: '[[Рел+из]] запланиро́ван на сре́ду.', en: 'The release is planned for Wednesday.', de: 'Das Release ist für Mittwoch geplant.' }]
},
{
  id: 'ru-pro-oshibka', pos: 'noun', level: 'A2', t: 'ош+ибка', gender: 'f', plural: 'ош+ибки',
  en: 'error, mistake; bug', de: 'der Fehler; der Bug',
  examples: [{ t: 'В ло́гах ви́дна [[ош+ибка]] авториза́ции.', en: 'An authentication error is visible in the logs.', de: 'In den Logs sieht man einen Authentifizierungsfehler.' }],
  note: { en: 'In IT speech also «баг». «По ошибке» — by mistake.', de: 'Im IT-Jargon auch «баг». «По ошибке» — versehentlich.' }
},
{
  id: 'ru-pro-testirovat', pos: 'verb', level: 'B1', aspect: 'impf', t: 'тест+ировать',
  forms: { praes: 'тест+ирую, тест+ируешь', praet: 'тест+ировал', perf: 'pf. протест+ировать' },
  en: 'to test', de: 'testen',
  examples: [{ t: 'Сна́чала [[протест+ируем]] на стенде.', en: 'First we’ll test it on the staging environment.', de: 'Zuerst testen wir es auf der Testumgebung.' }],
  note: { en: '«Стенд» is the usual word for a test environment in Russian IT.', de: '«Стенд» ist im russischen IT-Jargon die Testumgebung.' }
},
{
  id: 'ru-pro-vetka', pos: 'noun', level: 'B1', t: 'в+етка', gender: 'f', plural: 'в+етки',
  en: 'branch (of a tree, in Git); (metro) line; thread', de: 'der Zweig, der Branch; die (U-Bahn-)Linie; der Thread',
  examples: [
    { sense: { en: 'Git branch', de: 'Git-Branch' }, t: 'Сде́лай но́вую [[в+етку]] от мастера.', en: 'Create a new branch from master.', de: 'Leg einen neuen Branch von master an.' },
    { sense: { en: 'metro line', de: 'U-Bahn-Linie' }, t: 'Переходи́те на кра́сную [[в+етку]].', en: 'Change to the red line.', de: 'Steigen Sie in die rote Linie um.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'The basic meaning “small branch of a tree” is extended to anything that branches off: a Git branch, a metro or railway line, a discussion thread.', de: 'Grundbedeutung „kleiner Zweig“, übertragen auf alles, was abzweigt: Git-Branch, U-Bahn- oder Bahnlinie, Diskussionsthread.' },
  meaningExamples: [{ t: 'в+етка де́рева', en: 'a tree branch', de: 'ein Ast' }, { t: 'в+етка обсужде́ния', en: 'a discussion thread', de: 'ein Diskussionsstrang' }]
}
]});

GT.register({ tab: 'it', topic: 'infra', items: [
{
  id: 'ru-pro-server', pos: 'noun', level: 'B1', t: 'с+ервер', gender: 'm', plural: 'с+ерверы',
  en: 'server', de: 'der Server',
  examples: [{ t: '[[С+ервер]] не отвеча́ет.', en: 'The server is not responding.', de: 'Der Server antwortet nicht.' }],
  note: { en: 'Both се́рвер and серве́р are heard; се́рвер is the common IT pronunciation.', de: 'Man hört се́рвер und серве́р; се́рвер ist die übliche Aussprache in der IT.' }
},
{
  id: 'ru-pro-set', pos: 'noun', level: 'B1', t: 'сеть', gender: 'f', plural: 'с+ети',
  en: 'network; chain (of shops)', de: 'das Netz(werk); die (Laden-)Kette',
  examples: [{ t: 'Компью́тер отключи́ли от [[с+ети]].', en: 'The computer was disconnected from the network.', de: 'Der Rechner wurde vom Netzwerk getrennt.' }],
  note: { en: 'Soft-sign feminine: в сети́ (online, in the network — stress on the ending after в / на).', de: 'Feminin auf -ь: в сети́ (im Netz, online — nach в / на Endbetonung).' }
},
{
  id: 'ru-pro-sboy', pos: 'noun', level: 'B2', t: 'сбой', gender: 'm', plural: 'сб+ои',
  en: 'failure, outage, glitch', de: 'die Störung, der Ausfall',
  examples: [{ t: 'Из-за [[сб+оя]] сервис не рабо́тал два часа́.', en: 'Because of an outage the service was down for two hours.', de: 'Wegen einer Störung war der Dienst zwei Stunden ausgefallen.' }],
  note: { en: 'From сбиться (to go off track). «Технический сбой» — the standard phrase in user notifications.', de: 'Von сбиться (aus dem Takt geraten). «Технический сбой» — Standardformulierung in Störungsmeldungen.' }
},
{
  id: 'ru-pro-rezervnaya-kopiya', pos: 'noun', level: 'B2', t: 'рез+ервная к+опия', gender: 'f',
  en: 'backup', de: 'die Sicherungskopie, das Backup',
  examples: [{ t: 'Восстано́вим да́нные из [[рез+ервной к+опии]].', en: 'We’ll restore the data from the backup.', de: 'Wir stellen die Daten aus dem Backup wieder her.' }],
  note: { en: 'Colloquially «бэкап». «Резервное копирование» — the backup process.', de: 'Umgangssprachlich «бэкап». «Резервное копирование» — der Sicherungsvorgang.' }
},
{
  id: 'ru-pro-nagruzka', pos: 'noun', level: 'B2', t: 'нагр+узка', gender: 'f',
  en: 'load; workload', de: 'die Last; die Arbeitsbelastung',
  examples: [{ t: '[[Нагр+узка]] на проце́ссор вы́росла до девяно́ста проце́нтов.', en: 'CPU load rose to 90 percent.', de: 'Die CPU-Last stieg auf neunzig Prozent.' }],
  note: { en: '«Нагрузка на сервер» (server load), «большая нагрузка на работе» (heavy workload).', de: '«Нагрузка на сервер» (Serverlast), «большая нагрузка на работе» (hohe Arbeitsbelastung).' }
},
{
  id: 'ru-pro-obnovlenie', pos: 'noun', level: 'B1', t: 'обновл+ение', gender: 'n',
  en: 'update', de: 'das Update, die Aktualisierung',
  examples: [{ t: 'Устано́вите [[обновл+ение]] безопа́сности.', en: 'Install the security update.', de: 'Installieren Sie das Sicherheitsupdate.' }],
  parts: [['об-', { en: 'around, fully', de: 'rundum' }], ['-нов-', { en: 'new', de: 'neu' }], ['-ление', { en: 'process noun', de: 'Vorgangssubstantiv' }]],
  transparency: 'transparent'
},
{
  id: 'ru-pro-upast', pos: 'verb', level: 'B1', aspect: 'pf', t: 'уп+асть',
  forms: { praes: 'упад+у, упадёшь', praet: 'уп+ал', perf: 'impf. пад+ать' },
  en: 'to fall; (IT, colloquial) to crash, to go down', de: 'fallen; (IT, ugs.) abstürzen, ausfallen',
  examples: [{ t: 'Ночью [[уп+ал]] почто́вый се́рвер.', en: 'The mail server went down at night.', de: 'In der Nacht ist der Mailserver ausgefallen.' }],
  meaningType: 'figurative',
  meaningExplanation: { en: 'A system “falls” when it stops working: «сервер упал», «сайт лежит» (the site is down). Getting it back: «поднять сервер».', de: 'Ein System „fällt“, wenn es ausfällt: «сервер упал», «сайт лежит» (die Seite ist down). Wieder hochfahren: «поднять сервер».' },
  meaningExamples: [{ t: 'Сайт лежит.', en: 'The website is down.', de: 'Die Website ist down.' }, { t: 'подн+ять с+ервер', en: 'to bring the server back up', de: 'den Server wieder hochfahren' }]
}
]});

GT.register({ tab: 'it', topic: 'security', items: [
{
  id: 'ru-pro-uyazvimost', pos: 'noun', level: 'B2', t: 'уязв+имость', gender: 'f', plural: 'уязв+имости',
  en: 'vulnerability', de: 'die Schwachstelle, die Sicherheitslücke',
  examples: [{ t: 'В плаги́не нашли́ крити́ческую [[уязв+имость]].', en: 'A critical vulnerability was found in the plugin.', de: 'Im Plugin wurde eine kritische Schwachstelle gefunden.' }],
  parts: [['уязв-', { en: 'wound (уязвить)', de: 'verwunden (уязвить)' }], ['-им-', { en: '-able', de: '-bar' }], ['-ость', { en: 'abstract noun', de: 'Abstraktum' }]],
  transparency: 'transparent',
  note: { en: 'уязвимый = “woundable, vulnerable” + -ость (like English -ity / German -keit).', de: 'уязвимый = „verwundbar“ + -ость (wie deutsch -keit).' }
},
{
  id: 'ru-pro-ataka', pos: 'noun', level: 'B1', t: 'ат+ака', gender: 'f',
  en: 'attack', de: 'der Angriff',
  examples: [{ t: 'Мы ви́дим [[ат+аку]] на пере́бор паро́лей.', en: 'We see a password brute-force attack.', de: 'Wir sehen einen Brute-Force-Angriff auf Passwörter.' }],
  note: { en: '«Атака перебором» / «брутфорс» — brute force. Verb: атакова́ть.', de: '«Атака перебором» / «брутфорс» — Brute Force. Verb: атакова́ть.' }
},
{
  id: 'ru-pro-vredonosny', pos: 'adj', level: 'B2', t: 'вредон+осный',
  en: 'malicious', de: 'schädlich, bösartig (Schadsoftware)',
  examples: [{ t: 'Анти́вирус нашёл [[вредон+осный]] файл.', en: 'The antivirus found a malicious file.', de: 'Der Virenscanner hat eine schädliche Datei gefunden.' }],
  parts: [['вред-', { en: 'harm', de: 'Schaden' }], ['-о-', { en: 'linking vowel', de: 'Fugenvokal' }], ['-нос-', { en: 'carry', de: 'tragen' }], ['-ный', { en: 'adjective', de: 'Adjektiv' }]],
  transparency: 'transparent',
  note: { en: 'Literally “harm-carrying”. «Вредоносное ПО» (ПО = программное обеспечение) = malware.', de: 'Wörtlich „Schaden tragend“. «Вредоносное ПО» (ПО = Software) = Schadsoftware.' }
},
{
  id: 'ru-pro-dostup', pos: 'noun', level: 'B1', t: 'д+оступ', gender: 'm',
  en: 'access', de: 'der Zugang, der Zugriff',
  examples: [{ t: 'У подря́дчика не должно́ быть [[д+оступа]] к прод-се́рверу.', en: 'The contractor must not have access to the production server.', de: 'Der Dienstleister darf keinen Zugriff auf den Produktivserver haben.' }],
  note: { en: 'Access TO = «к» + dative. «Права доступа» — access rights; «закрыть доступ» — to revoke access.', de: 'Zugriff AUF = «к» + Dativ. «Права доступа» — Zugriffsrechte; «закрыть доступ» — Zugriff entziehen.' }
},
{
  id: 'ru-pro-utechka', pos: 'noun', level: 'B2', t: 'ут+ечка', gender: 'f',
  en: 'leak', de: 'das Leck, der Abfluss (Daten)',
  examples: [{ t: 'Была́ ли [[ут+ечка]] да́нных?', en: 'Was there a data leak?', de: 'Gab es einen Datenabfluss?' }],
  parts: [['у-', { en: 'away', de: 'weg' }], ['-теч-', { en: 'flow (течь)', de: 'fließen (течь)' }], ['-ка', { en: 'noun', de: 'Substantiv' }]],
  transparency: 'transparent',
  note: { en: 'у- “away” + течь “to flow”: something flows away. Used for water, gas and data alike.', de: 'у- „weg“ + течь „fließen“: etwas fließt weg. Für Wasser, Gas und Daten gleichermaßen.' }
},
{
  id: 'ru-pro-parol', pos: 'noun', level: 'A2', t: 'пар+оль', gender: 'm', plural: 'пар+оли',
  en: 'password', de: 'das Passwort',
  examples: [{ t: 'Никому́ не сообща́йте свой [[пар+оль]].', en: 'Never tell anyone your password.', de: 'Geben Sie Ihr Passwort niemandem weiter.' }],
  note: { en: 'Masculine, unlike German das Passwort. «Сменить / сбросить пароль» — change / reset the password.', de: 'Maskulin! «Сменить / сбросить пароль» — Passwort ändern / zurücksetzen.' }
},
{
  id: 'ru-pro-zloumyshlennik', pos: 'noun', level: 'B2', t: 'злоум+ышленник', gender: 'm', plural: 'злоум+ышленники',
  en: 'attacker, intruder (lit. evil-plotter)', de: 'der Angreifer, der Täter',
  examples: [{ t: '[[Злоум+ышленник]] получи́л доступ к по́чте.', en: 'The attacker gained access to the mailbox.', de: 'Der Angreifer hat Zugriff auf das Postfach erlangt.' }],
  parts: [['зло-', { en: 'evil', de: 'böse' }], ['-умышл-', { en: 'intend (умысел)', de: 'beabsichtigen (умысел)' }], ['-енник', { en: 'person', de: 'Person' }]],
  transparency: 'transparent',
  note: { en: 'The standard word in reports and the press; «хакер» is more colloquial and not always negative.', de: 'Das Standardwort in Berichten und Presse; «хакер» ist umgangssprachlicher.' }
},
{
  id: 'ru-pro-fishing', pos: 'noun', level: 'B1', t: 'ф+ишинг', gender: 'm',
  en: 'phishing', de: 'das Phishing',
  examples: [{ t: 'Э́то письмо́ похо́же на [[ф+ишинг]].', en: 'This email looks like phishing.', de: 'Diese E-Mail sieht nach Phishing aus.' }],
  note: { en: 'Adjective: фи́шинговое письмо́ (phishing email).', de: 'Adjektiv: фи́шинговое письмо́ (Phishing-Mail).' }
},
{
  id: 'ru-pro-incident', pos: 'noun', level: 'B1', t: 'инцид+ент', gender: 'm', plural: 'инцид+енты',
  en: 'incident', de: 'der Vorfall',
  examples: [{ t: 'Мы зарегистри́ровали [[инцид+ент]] вы́сокой кри́тичности.', en: 'We registered a high-severity incident.', de: 'Wir haben einen Vorfall mit hoher Kritikalität erfasst.' }],
  note: { en: '«Инцидент информационной безопасности» (ИБ) — the formal term in SOC reports.', de: '«Инцидент информационной безопасности» (ИБ) — Fachbegriff in SOC-Berichten.' }
}
]});
