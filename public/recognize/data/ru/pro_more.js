/* RUSSIAN Professional · extra batch (5 per topic × 5 topics = 25 cards).
 * Stress marked with "+" before the stressed vowel (never before ё). Checked against inventory for zero duplicates.
 * Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) {
    return { id: 'ru-pro2-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('workcomm', [
    N('utochnenie', 'уточн+ение', 'n', 'B2', 'clarification, follow-up detail', 'die Rückfrage, die Präzisierung',
      ex('Спас+ибо за б+ыстрое [[уточн+ение]] по зад+аче.', 'Thanks for the quick clarification on the task.', 'Danke für die schnelle Rückfrage zur Aufgabe.'),
      ['From то́чный (“exact”); typical verb: внести уточнение (provide a clarification).', 'Von то́чный („genau“); typische Verbindung: внести уточнение (eine Präzisierung nachreichen).']),
    N('soglasovanie', 'согласов+ание', 'n', 'B2', 'approval, sign-off, coordination', 'die Abstimmung, die Freigabe',
      ex('Бюдж+ет сейч+ас на [[согласов+ании]] у руков+одства.', 'The budget is currently awaiting management approval.', 'Das Budget liegt gerade bei der Leitung zur Freigabe.'),
      ['Preposition на + Prepositional for pending review: на согласовании; Verb: согласовать.', 'Mit на + Präpositiv für laufende Freigabe: на согласовании; Verb: согласовать.']),
    N('otchyotnost', 'отчётность', 'f', 'B2', 'reporting (formal)', 'das Berichtswesen',
      ex('В конц+е кварт+ала гот+овят фин+ансовую [[отчётность]].', 'At the end of the quarter they prepare financial reporting.', 'Am Quartalsende wird das Finanzberichtswesen erstellt.'),
      ['Collective uncountable (like German Berichtswesen); a single report is отчёт.', 'Sammelbegriff ohne Plural (wie dt. Berichtswesen); der Einzelbericht heißt отчёт.']),
    N('obratnaya-svyaz', 'обр+атная связь', 'f', 'B2', 'feedback', 'das Feedback, die Rückmeldung',
      ex('Мне важн+а в+аша [[обр+атная связь]] по мак+ету.', 'Your feedback on the mockup is important to me.', 'Ihr Feedback zum Entwurf ist mir wichtig.'),
      ['Formal Russian term; in IT teams you will also often hear фидбэк.', 'Standardsprachlicher Begriff (wörtl. „Rückkopplung“); in IT-Teams auch oft фидбэк.']),
    N('bloker', 'бл+окер', 'm', 'B2', 'blocker (IT slang)', 'der Blocker, das Hindernis',
      ex('У ком+анды нашёлся [[бл+окер]] — ждём д+оступа от партнёров.', 'The team hit a blocker — we’re waiting for access from partners.', 'Das Team hat einen Blocker — wir warten auf den Zugang der Partner.'),
      ['Direct loanword from English Agile teams; masculine noun, plural бл+океры.', 'Direkter Anglizismus aus agilen Teams; maskulin, Plural бл+океры.'])
  ]);

  reg('dev', [
    N('iskhodny-kod', 'исх+одный код', 'm', 'B2', 'source code', 'der Quellcode',
      ex('Весь [[исх+одный код]] про+екта хран+ится в Git.', 'All of the project’s source code is stored in Git.', 'Der gesamte Quellcode des Projekts liegt in Git.'),
      ['Literally “initial code”; developers often shorten it in speech to исх+одники.', 'Wörtlich „Ausgangscode“; im Entwickleralltag oft verkürzt zu исх+одники (Pl.).']),
    N('vetvlenie', 'ветвл+ение', 'n', 'B2', 'branching', 'die Verzweigung, das Branching',
      ex('Мы в+ыбрали прост+ую мод+ель [[ветвл+ения]] в репозит+ории.', 'We chose a simple branching model in the repository.', 'Wir haben ein einfaches Branching-Modell im Repository gewählt.'),
      ['From ветвь / в+етка (“branch”); in Git teams also бранчев+ание.', 'Zu ветвь / в+етка („Zweig / Branch“); in Git auch einfach бранчи.']),
    N('sliyanie', 'сли+яние', 'n', 'B2', 'merge', 'das Zusammenführen, der Merge',
      ex('П+еред [[сли+янием]] в+еток прог+оните все т+есты.', 'Before merging the branches, run all the tests.', 'Lassen Sie vor dem Zusammenführen der Branches alle Tests laufen.'),
      ['Same word as M&A corporate mergers (сли+яние и поглощ+ение); in IT also мерж.', 'Gilt auch für Firmenfusionen; im Entwicklerjargon neben мерж (Merge) gebräuchlich.']),
    N('refaktoring', 'рефакт+оринг', 'm', 'B2', 'refactoring', 'das Refactoring',
      ex('П+осле [[рефакт+оринга]] м+одуль стал чит+аться гор+аздо л+егче.', 'After refactoring, the module became much easier to read.', 'Nach dem Refactoring war das Modul viel leichter zu lesen.'),
      ['Always masculine in Russian (провести рефакторинг); stress falls on -то-.', 'Im Russischen Maskulinum (anders als dt. Neutrum das Refactoring).']),
    N('testirovanie', 'тест+ирование', 'n', 'B1', 'testing', 'das Testen',
      ex('Автомат+ическое [[тест+ирование]] экон+омит вр+емя п+еред рел+изом.', 'Automated testing saves time before a release.', 'Automatisiertes Testen spart vor einem Release Zeit.'),
      ['Verbal noun from тест+ировать; manual / automated = ручн+ое / авто-.', 'Verbalsubstantiv zu тест+ировать; manuelles vs. automatisiertes Testen = ручное / авто.'])
  ]);

  reg('infra', [
    N('balansirovka', 'балансир+овка нагр+узки', 'f', 'B2', 'load balancing', 'die Lastverteilung',
      ex('[[Балансир+овка нагр+узки]] распредел+яет тр+афик м+ежду трем+я с+ерверами.', 'Load balancing distributes traffic across three servers.', 'Die Lastverteilung verteilt den Traffic auf drei Server.'),
      ['The component itself is балансир+овщик (load balancer); stress shifts: баланс vs балансир+овка.', 'Der Load-Balancer selbst heißt балансир+овщик (von баланс „Gleichgewicht“).']),
    N('diskovoe', 'д+исковое простр+анство', 'n', 'B2', 'disk space', 'der Festplattenspeicher',
      ex('На б+азе д+анных зак+анчивается [[д+исковое простр+анство]].', 'The database is running out of disk space.', 'Auf der Datenbank wird der Festplattenspeicher knapp.'),
      ['Formal equivalent of м+есто на д+иске (used in monitoring and alerts).', 'Förmlicher als м+есто на д+иске; typisch in Monitoring-Alerts und Doku.']),
    N('prostoy', 'прост+ой', 'm', 'B2', 'downtime, idle time', 'die Ausfallzeit, der Stillstand',
      ex('К+аждый час [[прост+оя]] с+ервиса ст+оит комп+ании д+орого.', 'Every hour of service downtime costs the company dearly.', 'Jede Stunde Ausfallzeit kostet das Unternehmen viel Geld.'),
      ['Note stress: прост+ой (noun: downtime / adj: simple); time during incident = вр+емя прост+оя.', 'Beachte den Gleichklang mit прост+ой (Adj. „einfach“); hier Zeit des Stillstands.']),
    N('rezervirovanie', 'резерв+ирование', 'n', 'B2', 'redundancy, backup provisioning', 'die Redundanz, die Sicherung',
      ex('Без [[резерв+ирования]] од+ин отк+аз д+иска ост+авит нас без д+анных.', 'Without redundancy, a single disk failure leaves us without data.', 'Ohne Redundanz lässt uns ein einziger Festplattenausfall ohne Daten.'),
      ['Covers both failover redundancy and seat/resource reservation.', 'Steht sowohl für technische Ausfallsicherheit als auch für Buchung/Reservierung.']),
    N('dostupnost', 'дост+упность', 'f', 'B2', 'availability, uptime; accessibility', 'die Verfügbarkeit; die Barrierefreiheit',
      ex('Мы монит+орим [[дост+упность]] с+ервиса круглос+уточно.', 'We monitor service availability around the clock.', 'Wir überwachen die Verfügbarkeit des Dienstes rund um die Uhr.'),
      ['From д+оступ (“access”); stands for both server uptime (SLA) and UI accessibility (a11y).', 'Zu д+оступ („Zugang“); deckt im Russischen SLA-Verfügbarkeit und Barrierefreiheit ab.'])
  ]);

  reg('security', [
    N('vredonosnaya', 'вредон+осная прогр+амма', 'f', 'B2', 'malicious program, malware', 'das Schadprogramm',
      ex('Фильтр заблок+ировал [[вредон+осную прогр+амму]] во влож+ении.', 'The filter blocked a malicious program in the attachment.', 'Der Filter hat ein Schadprogramm im Anhang blockiert.'),
      ['From вред (“harm”) + нос- (“carry”); plural/short IT slang: вредон+осы.', 'Aus вред („Schaden“) + носить; im IT-Jargon oft kurz вредон+осы (Pl.).']),
    N('politika-bezopasnosti', 'пол+итика безоп+асности', 'f', 'B2', 'security policy', 'die Sicherheitsrichtlinie',
      ex('По [[пол+итике безоп+асности]] пар+оли мен+яют раз в полг+ода.', 'Under the security policy, passwords are changed every six months.', 'Laut Sicherheitsrichtlinie werden Passwörter alle sechs Monate geändert.'),
      ['Notice пол+итика translates English “policy” (rules), not only politics!', 'Wie engl. policy bezeichnet пол+итика hier betriebliche Richtlinien, nicht nur Politik.']),
    N('kontrol-dostupa', 'контр+оль д+оступа', 'm', 'B2', 'access control', 'die Zugriffskontrolle',
      ex('Стр+огий [[контр+оль д+оступа]] сниж+ает риск ут+ечки.', 'Strict access control reduces the risk of a leak.', 'Strenge Zugriffskontrolle senkt das Risiko eines Datenlecks.'),
      ['Role-based access control = ролев+ой контр+оль д+оступа (RBAC); takes Genitive.', 'Rollenbasiert: ролев+ой контр+оль д+оступа; verlangt Genitiv (кого/чего?).']),
    N('patch', 'патч', 'm', 'B2', 'patch (software security fix)', 'der Patch, das Sicherheitsupdate',
      ex('Крит+ический [[патч]] н+ужно пост+авить ещё сег+одня.', 'The critical patch must be installed today.', 'Der kritische Patch muss noch heute eingespielt werden.'),
      ['Masculine loanword; usual verb is пост+авить or накат+ить патч (apply a patch).', 'Maskulines Lehnwort; gängige Verben: пост+авить oder накат+ить патч.']),
    N('audit', 'ауд+ит', 'm', 'B2', 'audit', 'das Audit, die Prüfung',
      ex('Вн+ешний [[ауд+ит]] безоп+асности пройдёт в ноябр+е.', 'The external security audit will take place in November.', 'Das externe Sicherheitsaudit findet im November statt.'),
      ['Stress falls on the last syllable (ауди́т), not the first like in English!', 'Betonung auf dem i (ауди́т), nicht auf dem Anfang wie oft im Englischen/Deutschen.'])
  ]);

  reg('b2_work', [
    N('vilka-zarplaty', 'в+илка зарпл+аты', 'f', 'B2', 'salary range', 'die Gehaltsspanne',
      ex('Хор+оший знак — когд+а в вак+ансии ук+азана [[в+илка зарпл+аты]].', 'It’s a good sign when the job advert states a salary range.', 'Es ist ein gutes Zeichen, wenn die Stellenanzeige die Gehaltsspanne nennt.'),
      ['Literally “salary fork” (min–max range); salary = зарпл+ата (заработная плата).', 'Wörtlich „Gehaltsgabel“ (= Unter- bis Obergrenze der Vergütung).']),
    N('gibridny-format', 'гибр+идный форм+ат', 'm', 'B2', 'hybrid work format', 'das hybride Arbeitsmodell',
      ex('Н+аша ком+анда перешл+а на [[гибр+идный форм+ат]]: два дня в +офисе.', 'Our team switched to a hybrid format: two days in the office.', 'Unser Team ist auf ein hybrides Modell umgestiegen: zwei Tage im Büro.'),
      ['Or simply гибр+ид; preposition на + Accusative: перейт+и на гибр+ид.', 'In Gesprächen oft verkürzt zu гибр+ид; mit auf: перейт+и на гибр+идный форм+ат.']),
    N('nehvatka-kadrov', 'нехв+атка к+адров', 'f', 'B2', 'staff / skills shortage', 'der Fachkräftemangel',
      ex('Из-за [[нехв+атки к+адров]] про+ект сдв+инули на м+есяц.', 'Because of the staff shortage, the project was pushed back a month.', 'Wegen des Fachkräftemangels wurde das Projekt um einen Monat verschoben.'),
      ['From не хват+ать (“to lack”) + к+адры (personnel); takes Genitive.', 'Zu не хват+ать („fehlen“) + к+адры (Personal); im Deutschen Fachkräftemangel.']),
    N('smennaya-rabota', 'см+енная раб+ота', 'f', 'B2', 'shift work', 'der Schichtdienst',
      ex('В техподд+ержке об+ычно [[см+енная раб+ота]] по гр+афику два через два.', 'In tech support there is usually shift work on a two-on, two-off rota.', 'Im Tech-Support gibt es meist Schichtdienst im Zwei-Tage-Rhythmus.'),
      ['Work in shifts = раб+отать посм+енно; individual shift = см+ена.', 'Im Schichtdienst arbeiten = раб+отать посм+енно; eine Schicht = см+ена.']),
    N('perekvalifikatsiya', 'переквалифик+ация', 'f', 'B2', 'retraining, reskilling', 'die Umschulung',
      ex('П+осле десят+и лет в бухг+алтерии он+а прошл+а [[переквалифик+ацию]] в тестир+овщики.', 'After ten years in accounting, she retrained as a QA tester.', 'Nach zehn Jahren in der Buchhaltung machte sie eine Umschulung zur Testerin.'),
      ['Prefix пере- means “re-/over”; verb: пройти переквалификацию or переуч+иться.', 'Vorsilbe пере- bedeutet „um-“; typisches Verb: пройт+и переквалифик+ацию.'])
  ]);
})();
