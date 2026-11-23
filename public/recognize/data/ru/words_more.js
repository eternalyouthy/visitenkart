/* RUSSIAN vocabulary · extra batch for the thinnest topics (Everyday, Health, Work, Authorities, B2 Media, B2 Society).
 * Stress marked with "+" before the stressed vowel (ё needs none). Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function N(id, t, gender, level, en, de, e, note) { return { id: 'ru-w-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: note ? { en: note[0], de: note[1] } : undefined }; }
  function V(id, t, aspect, level, forms, en, de, e, note) { return { id: 'ru-w-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: note ? { en: note[0], de: note[1] } : undefined }; }
  function A(id, pos, t, level, en, de, e, note) { return { id: 'ru-w-' + id, pos: pos, t: t, level: level, en: en, de: de, examples: [e], note: note ? { en: note[0], de: note[1] } : undefined }; }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('everyday', [
    A('navernoe', 'adv', 'нав+ерное', 'A2', 'probably', 'wahrscheinlich',
      ex('[[Нав+ерное]], он уж+е ушёл дом+ой.', 'He’s probably gone home already.', 'Er ist wahrscheinlich schon nach Hause gegangen.')),
    A('srazu', 'adv', 'ср+азу', 'A2', 'immediately, right away', 'sofort, gleich',
      ex('Я [[ср+азу]] теб+е перезвон+ю.', 'I’ll call you right back.', 'Ich rufe dich gleich zurück.')),
    A('voobshche', 'adv', 'вообщ+е', 'B1', 'in general; at all', 'überhaupt; im Allgemeinen',
      ex('Я [[вообщ+е]] не п+онял, что он хот+ел.', 'I didn’t understand at all what he wanted.', 'Ich habe überhaupt nicht verstanden, was er wollte.'),
      ['With a negation it means “at all”: вообще не понял. In questions: А ты вообще кто? — Who are you anyway?', 'Mit Verneinung heißt es „überhaupt“: вообще не понял. In Fragen: А ты вообще кто? — Wer bist du überhaupt?']),
    A('vsyo-taki', 'adv', 'всё-так+и', 'B1', 'still, after all', 'doch, trotzdem',
      ex('Я д+олго д+умал, но [[всё-так+и]] куп+ил б+илет.', 'I thought about it for a long time, but bought the ticket after all.', 'Ich habe lange überlegt, aber das Ticket dann doch gekauft.'))
  ]);

  reg('health', [
    N('apteka', 'апт+ека', 'f', 'A2', 'pharmacy', 'die Apotheke',
      ex('[[Апт+ека]] на угл+у раб+отает круглосу+точно.', 'The pharmacy on the corner is open 24 hours.', 'Die Apotheke an der Ecke hat rund um die Uhr geöffnet.')),
    N('tabletka', 'табл+етка', 'f', 'A2', 'pill, tablet', 'die Tablette',
      ex('Прин+имайте по одн+ой [[табл+етке]] п+осле ед+ы.', 'Take one tablet after meals.', 'Nehmen Sie nach dem Essen eine Tablette.')),
    N('prostuda', 'прост+уда', 'f', 'A2', 'cold (illness)', 'die Erkältung',
      ex('У мен+я лёгкая [[прост+уда]], ничег+о страшн+ого.', 'I’ve got a slight cold, nothing serious.', 'Ich habe eine leichte Erkältung, nichts Schlimmes.')),
    N('poliklinika', 'полик+линика', 'f', 'B1', 'outpatient clinic', 'die Poliklinik, das Ärztehaus',
      ex('З+автра я запис+ался к врач+у в [[полик+линику]].', 'Tomorrow I have an appointment at the clinic.', 'Morgen habe ich einen Arzttermin in der Poliklinik.'),
      ['In Russia, a state outpatient clinic where several specialists work — the usual first stop instead of a private GP.', 'In Russland eine staatliche Poliklinik mit mehreren Fachärzten — meist die erste Anlaufstelle statt einer Hausarztpraxis.']),
    N('davlenie', 'давл+ение', 'n', 'B1', 'blood pressure; pressure', 'der Blutdruck; der Druck',
      ex('Врач изм+ерил мне [[давл+ение]].', 'The doctor took my blood pressure.', 'Der Arzt hat meinen Blutdruck gemessen.')),
    V('vyzdoravlivat', 'выздор+авливать', 'impf', 'B1', ['выздор+авливаю, выздор+авливаешь', 'выздор+авливал', 'pf. в+ыздороветь'], 'to recover, to get better', 'gesund werden, genesen',
      ex('[[Выздор+авливай]] скор+ее!', 'Get well soon!', 'Gute Besserung!'),
      ['«Выздоравливай!» / «Выздоравливайте!» is the usual way to say “Get well soon”.', '«Выздоравливай!» / «Выздоравливайте!» ist die übliche Formel für „Gute Besserung!“']),
    N('polis', 'п+олис', 'm', 'B1', 'insurance policy (health insurance card)', 'die Versicherungspolice, die Krankenversicherungskarte',
      ex('В регистрат+уре попрос+или мой [[п+олис]].', 'At reception they asked for my insurance policy.', 'An der Anmeldung wurde nach meiner Versicherungskarte gefragt.'))
  ]);

  reg('work', [
    N('dolzhnost', 'д+олжность', 'f', 'B1', 'position, post', 'die Position, die Stelle',
      ex('На как+ую [[д+олжность]] вы претенд+уете?', 'Which position are you applying for?', 'Auf welche Stelle bewerben Sie sich?')),
    N('obyazannost', 'об+язанность', 'f', 'B1', 'duty, responsibility', 'die Pflicht, die Aufgabe',
      ex('В мо+и [[об+язанности]] вх+одит раб+ота с клие́нтами.', 'My duties include working with clients.', 'Zu meinen Aufgaben gehört die Arbeit mit Kunden.')),
    N('vyhodnoy', 'выходн+ой', 'm', 'A2', 'day off', 'der freie Tag',
      ex('З+автра у мен+я [[выходн+ой]].', 'Tomorrow is my day off.', 'Morgen habe ich frei.'),
      ['An adjective used as a noun (выходной день). Plural выходные — the weekend.', 'Ein substantiviertes Adjektiv (выходной день). Plural выходные — das Wochenende.']),
    N('premiya', 'пр+емия', 'f', 'B1', 'bonus; prize', 'die Prämie, der Bonus; der Preis',
      ex('В к+онце г+ода всем в+ыдали [[пр+емию]].', 'Everyone got a bonus at the end of the year.', 'Am Jahresende haben alle eine Prämie bekommen.')),
    N('rabotodatel', 'работод+атель', 'm', 'B1', 'employer', 'der Arbeitgeber',
      ex('[[Работод+атель]] опл+ачивает к+урсы нем+ецкого.', 'The employer pays for German courses.', 'Der Arbeitgeber bezahlt die Deutschkurse.'),
      ['раб+от(а) + д+ать: literally “work-giver”, like German Arbeit-geber.', 'раб+от(а) + д+ать: wörtlich „Arbeit-geber“ — genau wie im Deutschen.']),
    N('sotrudnik', 'сотр+удник', 'm', 'B1', 'employee, staff member', 'der Mitarbeiter',
      ex('В н+ашем отд+еле пятн+адцать [[сотр+удников]].', 'There are fifteen employees in our department.', 'In unserer Abteilung gibt es fünfzehn Mitarbeiter.')),
    N('uvolnenie', 'увольн+ение', 'n', 'B2', 'dismissal; resignation', 'die Kündigung, die Entlassung',
      ex('П+осле [[увольн+ения]] он откр+ыл сво+ю ф+ирму.', 'After leaving his job he started his own company.', 'Nach der Kündigung hat er seine eigene Firma gegründet.')),
    N('pererabotka', 'перераб+отка', 'f', 'B1', 'overtime; processing (recycling)', 'die Überstunden; die Verarbeitung',
      ex('Все [[перераб+отки]] опл+ачиваются отд+ельно.', 'All overtime is paid separately.', 'Alle Überstunden werden extra bezahlt.'))
  ]);

  reg('authorities', [
    N('registraciya', 'регистр+ация', 'f', 'B1', 'registration', 'die Anmeldung, die Registrierung',
      ex('Для [[регистр+ации]] н+ужен догов+ор ар+енды.', 'You need a tenancy agreement to register.', 'Für die Anmeldung braucht man einen Mietvertrag.')),
    N('anketa', 'анк+ета', 'f', 'A2', 'form, questionnaire', 'der Fragebogen, das Formular',
      ex('Запол+ните, пож+алуйста, [[анк+ету]].', 'Please fill in the form.', 'Füllen Sie bitte den Fragebogen aus.')),
    N('pechat', 'печ+ать', 'f', 'B1', 'stamp, seal', 'der Stempel',
      ex('Без [[печ+ати]] спр+авка недейств+ительна.', 'The certificate is invalid without a stamp.', 'Ohne Stempel ist die Bescheinigung ungültig.')),
    N('nalog', 'нал+ог', 'm', 'B1', 'tax', 'die Steuer',
      ex('[[Нал+ог]] автомат+ически в+ычитают из зарпл+аты.', 'The tax is automatically deducted from the salary.', 'Die Steuer wird automatisch vom Gehalt abgezogen.')),
    N('shtraf', 'штраф', 'm', 'B1', 'fine, penalty', 'das Bußgeld, die Strafe',
      ex('За парк+овку здесь д+ают [[штраф]].', 'You get a fine for parking here.', 'Fürs Parken hier gibt es ein Bußgeld.')),
    N('kvitanciya', 'квит+анция', 'f', 'B1', 'receipt; payment slip (bill)', 'die Quittung; der Zahlschein',
      ex('Сохран+ите [[квит+анцию]] об опл+ате.', 'Keep the payment receipt.', 'Bewahren Sie die Zahlungsquittung auf.')),
    N('grazhdanstvo', 'гражд+анство', 'n', 'B1', 'citizenship, nationality', 'die Staatsangehörigkeit',
      ex('У нег+о дв+ойное [[гражд+анство]].', 'He has dual citizenship.', 'Er hat die doppelte Staatsangehörigkeit.')),
    V('prodlevat', 'продлев+ать', 'impf', 'B1', ['продлев+аю, продлев+аешь', 'продлев+ал', 'pf. продл+ить'], 'to extend, to renew', 'verlängern',
      ex('Мне н+адо [[продл+ить]] в+изу до к+онца м+есяца.', 'I need to renew my visa by the end of the month.', 'Ich muss mein Visum bis Monatsende verlängern.')),
    N('uchrezhdenie', 'учрежд+ение', 'n', 'B2', 'institution, office (official)', 'die Einrichtung, die Behörde',
      ex('В гос+ударственных [[учрежд+ениях]] нужн+о брать тал+он.', 'In state offices you need to take a ticket.', 'In staatlichen Einrichtungen muss man eine Wartenummer ziehen.'))
  ]);

  reg('b2_media', [
    N('istochnik', 'ист+очник', 'm', 'B2', 'source', 'die Quelle',
      ex('Укаж+ите [[ист+очник]] инф+ормации.', 'Please state the source of the information.', 'Geben Sie die Quelle der Information an.')),
    N('zagolovok', 'загол+овок', 'm', 'B2', 'headline, title', 'die Schlagzeile, die Überschrift',
      ex('Гр+омкий [[загол+овок]] не соотв+етствовал т+ексту.', 'The sensational headline didn’t match the text.', 'Die reißerische Schlagzeile passte nicht zum Text.')),
    N('cenzura', 'ценз+ура', 'f', 'B2', 'censorship', 'die Zensur',
      ex('Журнал+исты откр+ыто критик+уют [[ценз+уру]].', 'Journalists openly criticise censorship.', 'Journalisten kritisieren offen die Zensur.')),
    N('kommentariy', 'коммент+арий', 'm', 'B1', 'comment', 'der Kommentar',
      ex('Под п+остом б+ыло т+ысяча [[коммент+ариев]].', 'There were a thousand comments under the post.', 'Unter dem Post gab es tausend Kommentare.')),
    N('reputaciya', 'репут+ация', 'f', 'B2', 'reputation', 'der Ruf, die Reputation',
      ex('Од+ин сканд+ал м+ожет испо́ртить [[репут+ацию]] комп+ании.', 'One scandal can ruin a company’s reputation.', 'Ein Skandal kann den Ruf eines Unternehmens ruinieren.'))
  ]);

  reg('b2_society', [
    N('vybory', 'в+ыборы', 'pl', 'B1', 'election(s)', 'die Wahl(en)',
      ex('[[В+ыборы]] пр+оходят раз в шесть лет.', 'Elections are held every six years.', 'Die Wahlen finden alle sechs Jahre statt.'),
      ['Plural only: выборы прошли. Compare выбор — choice (root -бр-).', 'Nur Plural: выборы прошли. Vergleiche выбор — Wahl, Auswahl (Wurzel -бр-).']),
    N('zakon', 'зак+он', 'm', 'B1', 'law', 'das Gesetz',
      ex('Н+овый [[зак+он]] вступ+ает в с+илу в янв+аре.', 'The new law comes into force in January.', 'Das neue Gesetz tritt im Januar in Kraft.')),
    N('grazhdanin', 'граждан+ин', 'm', 'B1', 'citizen', 'der Bürger, der Staatsbürger',
      ex('К+аждый [[граждан+ин]] им+еет пр+аво на образов+ание.', 'Every citizen has the right to education.', 'Jeder Bürger hat das Recht auf Bildung.'),
      ['Plural: гр+аждане. Female: гражд+анка.', 'Plural: гр+аждане. Weiblich: гражд+анка.']),
    N('volonter', 'волонтёр', 'm', 'B1', 'volunteer', 'der/die Freiwillige',
      ex('[[Волонтёры]] пом+огают пож+илым л+юдям с пок+упками.', 'Volunteers help elderly people with their shopping.', 'Freiwillige helfen älteren Menschen beim Einkaufen.')),
    N('neravenstvo', 'нер+авенство', 'n', 'B2', 'inequality', 'die Ungleichheit',
      ex('Соци+альное [[нер+авенство]] в стран+е растёт.', 'Social inequality in the country is growing.', 'Die soziale Ungleichheit im Land wächst.'))
  ]);
})();
