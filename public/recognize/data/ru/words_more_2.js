/* RUSSIAN vocabulary · second extra batch: Professional (Work & Office, IT & Development, Infrastructure, Security,
 * B2 World of Work) and B2 everyday topics. Stress marked with "+" before the stressed vowel (ё needs none).
 * Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) { return { id: 'ru-w2-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) }; }
  function V(id, t, aspect, level, forms, en, de, e, note) { return { id: 'ru-w2-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: nt(note) }; }
  function reg(tab, topic, items) { GT.register({ tab: tab, topic: topic, items: items }); }

  reg('it', 'workcomm', [
    N('dedlayn', 'дедл+айн', 'm', 'B1', 'deadline', 'die Deadline, die Frist',
      ex('[[Дедл+айн]] по пр+оекту — п+ятница.', 'The project deadline is Friday.', 'Die Deadline für das Projekt ist Freitag.'),
      ['Office slang; neutral: срок.', 'Büro-Jargon; neutral: срок.']),
    N('povestka', 'пов+естка дня', 'f', 'B2', 'agenda', 'die Tagesordnung',
      ex('Перв+ый пункт [[пов+естки дня]] — бюдж+ет.', 'The first item on the agenda is the budget.', 'Der erste Punkt der Tagesordnung ist das Budget.')),
    N('protokol', 'прот+окол', 'm', 'B2', 'minutes (of a meeting); protocol', 'das Protokoll',
      ex('Кто сег+одня ведёт [[прот+окол]] совещ+ания?', 'Who’s taking the minutes today?', 'Wer führt heute das Protokoll?')),
    N('planyorka', 'планёрка', 'f', 'B2', 'short team meeting, briefing', 'die Teambesprechung, das Daily',
      ex('[[Планёрка]] к+аждый д+ень в д+евять ноль-ноль.', 'The team briefing is every day at nine sharp.', 'Die Teambesprechung ist jeden Tag um neun Uhr.'),
      ['From план: a quick planning meeting.', 'Von план: eine kurze Planungsbesprechung.'])
  ]);

  reg('it', 'dev', [
    N('ficha', 'ф+ича', 'f', 'B2', 'feature (IT slang)', 'das Feature',
      ex('+Эту [[ф+ичу]] в+ыкатим в сл+едующем рел+изе.', 'We’ll ship this feature in the next release.', 'Dieses Feature rollen wir im nächsten Release aus.'),
      ['From English feature; neutral: функция, возможность.', 'Von engl. feature; neutral: функция, возможность.']),
    V('razvyortyvat', 'развёртывать', 'impf', 'B2', ['развёртываю, развёртываешь', 'развёртывал', 'pf. разверн+уть'], 'to deploy; to unfold', 'bereitstellen, deployen; entfalten',
      ex('Нов+ую в+ерсию [[разверн+ули]] н+очью.', 'The new version was deployed overnight.', 'Die neue Version wurde nachts deployt.'),
      ['Slang: задеплоить, выкатить.', 'Jargon: задеплоить, выкатить.']),
    N('baza-dannyh', 'б+аза д+анных', 'f', 'B1', 'database', 'die Datenbank',
      ex('Кли+енты хран+ятся в отд+ельной [[б+азе д+анных]].', 'Customers are stored in a separate database.', 'Die Kunden werden in einer separaten Datenbank gespeichert.'),
      ['Short: БД (бэ-дэ), slang: база.', 'Kurz: БД, Jargon: база.']),
    N('kod-revyu', 'код-ревь+ю', 'n', 'B2', 'code review', 'das Code-Review',
      ex('На [[код-ревь+ю]] нашл+и две ош+ибки.', 'Two bugs were found in code review.', 'Beim Code-Review wurden zwei Fehler gefunden.'),
      ['Indeclinable: на код-ревью, после код-ревью.', 'Indeklinabel: на код-ревью, после код-ревью.']),
    N('zavisimost', 'зав+исимость', 'f', 'B2', 'dependency; addiction', 'die Abhängigkeit',
      ex('Н+ужно обнов+ить [[зав+исимости]] пр+оекта.', 'We need to update the project’s dependencies.', 'Wir müssen die Abhängigkeiten des Projekts aktualisieren.')),
    N('stend', 'стенд', 'm', 'B2', 'test environment, staging (IT slang); stand, booth', 'die Testumgebung; der Messestand',
      ex('На [[ст+енде]] всё раб+отает, а в пр+оде — нет.', 'Everything works on staging but not in production.', 'Auf dem Testsystem läuft alles, in Produktion nicht.'),
      ['Outside IT: a stand at a trade fair.', 'Außerhalb der IT: ein Messestand.'])
  ]);

  reg('it', 'infra', [
    N('virtualka', 'вирту+альная маш+ина', 'f', 'B2', 'virtual machine', 'die virtuelle Maschine',
      ex('Подним+и нов+ую [[вирту+альную маш+ину]] для т+естов.', 'Spin up a new virtual machine for testing.', 'Setz eine neue virtuelle Maschine für Tests auf.'),
      ['Slang: виртуалка. «Поднять» = to spin up.', 'Jargon: виртуалка. «Поднять» = aufsetzen.']),
    N('data-tsentr', 'д+ата-центр', 'm', 'B2', 'data centre', 'das Rechenzentrum',
      ex('Наш+и с+ерверы сто+ят в [[д+ата-центре]] под М+осквой.', 'Our servers are in a data centre near Moscow.', 'Unsere Server stehen in einem Rechenzentrum bei Moskau.')),
    N('propusknaya', 'пропускн+ая сп+особность', 'f', 'B2', 'bandwidth, throughput', 'die Bandbreite, der Durchsatz',
      ex('[[Пропускн+ой сп+особности]] кан+ала не хват+ает.', 'The channel doesn’t have enough bandwidth.', 'Die Bandbreite der Leitung reicht nicht aus.')),
    V('perezagruzhat', 'перезагруж+ать', 'impf', 'B1', ['перезагруж+аю, перезагруж+аешь', 'перезагруж+ал', 'pf. перезагруз+ить'], 'to restart, to reboot', 'neu starten',
      ex('Попр+обуй [[перезагруз+ить]] р+оутер.', 'Try restarting the router.', 'Versuch, den Router neu zu starten.'),
      ['Noun: перезагрузка. Also figurative: a fresh start.', 'Substantiv: перезагрузка. Auch bildlich: Neustart.']),
    N('monitoring', 'монит+оринг', 'm', 'B2', 'monitoring', 'das Monitoring, die Überwachung',
      ex('[[Монит+оринг]] показ+ал скач+ок нагр+узки в три н+очи.', 'Monitoring showed a load spike at 3 a.m.', 'Das Monitoring zeigte um drei Uhr nachts eine Lastspitze.'))
  ]);

  reg('it', 'security', [
    N('shifrovanie', 'шифров+ание', 'n', 'B2', 'encryption', 'die Verschlüsselung',
      ex('Все д+анные перед+аются со [[шифров+анием]].', 'All data is transmitted encrypted.', 'Alle Daten werden verschlüsselt übertragen.'),
      ['From шифр (cipher). Verb: шифровать / зашифровать.', 'Von шифр (Chiffre). Verb: шифровать / зашифровать.']),
    N('2fa', 'двухфакт+орная аутентифик+ация', 'f', 'B2', 'two-factor authentication', 'die Zwei-Faktor-Authentifizierung',
      ex('Включ+ите [[двухфакт+орную аутентифик+ацию]] в настр+ойках.', 'Turn on two-factor authentication in the settings.', 'Aktivieren Sie die Zwei-Faktor-Authentifizierung in den Einstellungen.'),
      ['Short: 2FA (два-эф-а).', 'Kurz: 2FA.']),
    N('log', 'лог', 'm', 'B2', 'log (file)', 'das Log, die Protokolldatei',
      ex('В [[л+огах]] в+идно, откуд+а был вход.', 'The logs show where the login came from.', 'In den Logs sieht man, woher der Login kam.'),
      ['Usually plural: логи, в логах. Formal: журнал событий.', 'Meist Plural: логи, в логах. Formell: журнал событий.'])
  ]);

  reg('it', 'b2_work', [
    N('podrabotka', 'подраб+отка', 'f', 'B2', 'side job', 'der Nebenjob',
      ex('По в+ыходным у нег+о [[подраб+отка]] в каф+е.', 'He has a side job in a café at weekends.', 'Am Wochenende hat er einen Nebenjob im Café.')),
    N('gibkiy-grafik', 'г+ибкий гр+афик', 'm', 'B2', 'flexible working hours', 'flexible Arbeitszeiten, Gleitzeit',
      ex('Гл+авный пл+юс +этой раб+оты — [[г+ибкий гр+афик]].', 'The main advantage of this job is flexible hours.', 'Der größte Vorteil dieses Jobs sind die flexiblen Arbeitszeiten.')),
    N('vyhodnoe-posobie', 'выходн+ое пос+обие', 'n', 'B2', 'severance pay', 'die Abfindung',
      ex('При сокращ+ении полаг+ается [[выходн+ое пос+обие]].', 'Redundancy entitles you to severance pay.', 'Bei betriebsbedingter Kündigung steht einem eine Abfindung zu.')),
    N('stazh', 'стаж', 'm', 'B2', 'length of service, work experience', 'die Berufserfahrung, die Dienstjahre',
      ex('Для +этой д+олжности н+ужен [[стаж]] от трёх лет.', 'This position requires at least three years’ experience.', 'Für diese Stelle braucht man mindestens drei Jahre Berufserfahrung.'))
  ]);

  reg('words', 'b2_housing', [
    N('rieltor', 'ри+елтор', 'm', 'B2', 'estate agent', 'der Makler',
      ex('[[Ри+елтор]] показ+ал нам пять кварт+ир за д+ень.', 'The estate agent showed us five flats in one day.', 'Der Makler hat uns an einem Tag fünf Wohnungen gezeigt.')),
    N('zhilye-usloviya', 'жил+ищные усл+овия', 'pl', 'B2', 'housing conditions', 'die Wohnverhältnisse',
      ex('Мол+одые с+емьи хот+ят улучш+ить [[жил+ищные усл+овия]].', 'Young families want to improve their housing conditions.', 'Junge Familien wollen ihre Wohnverhältnisse verbessern.'))
  ]);

  reg('words', 'b2_relations', [
    N('pomolvka', 'пом+олвка', 'f', 'B2', 'engagement', 'die Verlobung',
      ex('[[Пом+олвку]] отпразд+новали в узк+ом круг+у.', 'They celebrated the engagement with just close friends and family.', 'Die Verlobung wurde im kleinen Kreis gefeiert.')),
    N('suprug', 'супр+уг', 'm', 'B2', 'spouse, husband (formal)', 'der Ehepartner, der Gatte',
      ex('Укаж+ите в анк+ете д+анные [[супр+уга]].', 'Enter your spouse’s details on the form.', 'Geben Sie im Formular die Daten Ihres Ehepartners an.'),
      ['Feminine: супруга. Formal; in speech: муж / жена.', 'Feminin: супруга. Förmlich; im Alltag: муж / жена.'])
  ]);

  reg('words', 'b2_health', [
    N('medosmotr', 'медосм+отр', 'm', 'B2', 'medical check-up', 'die ärztliche Untersuchung',
      ex('Перед раб+отой н+ужно пройт+и [[медосм+отр]].', 'You have to have a medical before starting the job.', 'Vor Arbeitsbeginn muss man eine ärztliche Untersuchung machen.')),
    N('golovokruzhenie', 'головокруж+ение', 'n', 'B2', 'dizziness', 'der Schwindel',
      ex('Утр+ом у мен+я б+ыло сильное [[головокруж+ение]].', 'This morning I felt very dizzy.', 'Heute Morgen war mir sehr schwindelig.'),
      ['голова + кружиться (to spin).', 'голова (Kopf) + кружиться (sich drehen).']),
    N('travma', 'тр+авма', 'f', 'B2', 'injury; trauma', 'die Verletzung; das Trauma',
      ex('Он получ+ил [[тр+авму]] на тренир+овке.', 'He got injured in training.', 'Er hat sich beim Training verletzt.'))
  ]);

  reg('words', 'b2_travel', [
    N('viza', 'в+иза', 'f', 'B1', 'visa', 'das Visum',
      ex('Для по+ездки н+ужна [[в+иза]]?', 'Do you need a visa for the trip?', 'Braucht man für die Reise ein Visum?')),
    N('tamozhnya', 'там+ожня', 'f', 'B2', 'customs', 'der Zoll',
      ex('На [[там+ожне]] нас пров+ерили б+ыстро.', 'We got through customs quickly.', 'Beim Zoll ging die Kontrolle schnell.'))
  ]);
  // Cards that already exist in another topic: shared, not duplicated.
  GT.addMember('ru-w-komandirovka', 'it', 'workcomm');
  GT.addMember('ru-w-uvolnenie', 'it', 'b2_work');
})();
