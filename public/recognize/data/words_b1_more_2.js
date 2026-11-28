/* German B1 vocabulary · third batch (4 per B1 topic, 40 cards total).
 * Checked against existing pack inventory for zero duplicates. Original examples and translations (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function withNote(o, note) { if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; } return o; }
  function N(id, article, de, plural, ru, en, e, note) {
    return withNote({ id: 'b1-m2-' + id, pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function V(id, de, forms, gov, ru, en, e, note) {
    return withNote({ id: 'b1-m2-' + id, pos: 'verb', de: de, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, gov: gov || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function A(id, pos, de, ru, en, e, note) {
    return withNote({ id: 'b1-m2-' + id, pos: pos, de: de, ru: ru, en: en, examples: [e] }, note);
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('everyday', [
    A('irgendwie', 'adv', 'irgendwie', 'как-то, каким-то образом', 'somehow',
      ex('Wir schaffen das [[irgendwie]] bis Freitag.', 'Мы как-нибудь успеем с этим до пятницы.', 'We’ll manage it somehow by Friday.')),
    A('normalerweise', 'adv', 'normalerweise', 'обычно, как правило', 'normally, usually',
      ex('[[Normalerweise]] fange ich um neun Uhr an.', 'Обычно я начинаю в девять часов.', 'Normally I start at nine o’clock.')),
    A('ploetzlich', 'adv', 'plötzlich', 'вдруг, внезапно', 'suddenly',
      ex('[[Plötzlich]] ging das Licht im ganzen Haus aus.', 'Внезапно во всём доме погас свет.', 'Suddenly the lights went out in the whole building.')),
    A('uebrigens', 'adv', 'übrigens', 'кстати, между прочим', 'by the way',
      ex('[[Übrigens]], hast du schon die neue Kollegin kennengelernt?', 'Кстати, ты уже познакомился с новой коллегой?', 'By the way, have you met the new colleague yet?'))
  ]);

  reg('people', [
    A('hilfsbereit', 'adj', 'hilfsbereit', 'отзывчивый, готовый помочь', 'helpful',
      ex('Unsere Nachbarn sind sehr [[hilfsbereit]].', 'Наши соседи очень отзывчивые.', 'Our neighbours are very helpful.')),
    A('grosszuegig', 'adj', 'großzügig', 'щедрый; великодушный', 'generous',
      ex('Sie war sehr [[großzügig]] und hat für alle bezahlt.', 'Она была очень щедрой и заплатила за всех.', 'She was very generous and paid for everyone.')),
    V('vermissen', 'vermissen', ['vermisst', 'vermisste', 'hat vermisst'], '+ Akk.', 'скучать по (кому-то / чему-то)', 'to miss (someone / something)',
      ex('Ich [[vermisse]] meine Familie und meine alten Freunde.', 'Я скучаю по своей семье и старым друзьям.', 'I miss my family and my old friends.'),
      ['Без предлога! Не «vermissen nach», а прямое дополнение: ich vermisse dich.', 'No preposition! Direct object in accusative: ich vermisse dich.'])
  ]);

  reg('home', [
    N('mietvertrag', 'der', 'Mietvertrag', 'die Mietverträge', 'договор аренды', 'tenancy agreement, lease',
      ex('Lies den [[Mietvertrag]] vor der Unterschrift genau durch.', 'Внимательно прочитай договор аренды перед подписанием.', 'Read the tenancy agreement carefully before signing.')),
    N('kuehlschrank', 'der', 'Kühlschrank', 'die Kühlschränke', 'холодильник', 'fridge',
      ex('In der neuen Küche gibt es leider keinen [[Kühlschrank]].', 'На новой кухне, к сожалению, нет холодильника.', 'Unfortunately there is no fridge in the new kitchen.')),
    N('waschmaschine', 'die', 'Waschmaschine', 'die Waschmaschinen', 'стиральная машина', 'washing machine',
      ex('Die [[Waschmaschine]] steht im Bad.', 'Стиральная машина стоит в ванной.', 'The washing machine is in the bathroom.')),
    N('heizkoerper', 'der', 'Heizkörper', 'die Heizkörper', 'батарея, радиатор отопления', 'radiator',
      ex('Der [[Heizkörper]] im Schlafzimmer wird nicht richtig warm.', 'Батарея в спальне плохо греет.', 'The radiator in the bedroom isn’t getting properly warm.'))
  ]);

  reg('food', [
    N('vorspeise', 'die', 'Vorspeise', 'die Vorspeisen', 'закуска, первое блюдо (перед основным)', 'starter, appetiser',
      ex('Als [[Vorspeise]] nehme ich die Tomatensuppe.', 'На закуску я возьму томатный суп.', 'As a starter I’ll have the tomato soup.')),
    N('hauptgericht', 'das', 'Hauptgericht', 'die Hauptgerichte', 'основное блюдо', 'main course',
      ex('Das [[Hauptgericht]] kam leider kalt an den Tisch.', 'Основное блюдо, к сожалению, принесли холодным.', 'Unfortunately the main course arrived cold at the table.')),
    N('sonderangebot', 'das', 'Sonderangebot', 'die Sonderangebote', 'спецпредложение, товар по скидке', 'special offer',
      ex('Kaffee ist diese Woche im [[Sonderangebot]].', 'Кофе на этой неделе по акции.', 'Coffee is on special offer this week.')),
    N('umtausch', 'der', 'Umtausch', 'die Umtausche', 'обмен (товара)', 'exchange (of goods)',
      ex('Der [[Umtausch]] ist mit Kassenzettel innerhalb von 14 Tagen möglich.', 'Обмен по чеку возможен в течение 14 дней.', 'Exchange with a receipt is possible within 14 days.'))
  ]);

  reg('health', [
    N('fieber', 'das', 'Fieber', '', 'температура, жар', 'fever',
      ex('Mein Sohn hat hohes [[Fieber]] und muss im Bett bleiben.', 'У моего сына высокая температура, ему нужно лежать в постели.', 'My son has a high fever and has to stay in bed.'),
      ['Обычно без артикля и без множественного числа: Fieber haben, Fieber messen.', 'Usually without an article or plural: Fieber haben, Fieber messen.']),
    N('kopfschmerzen', 'die', 'Kopfschmerzen', '', 'головная боль', 'headache',
      ex('Seit gestern habe ich starke [[Kopfschmerzen]].', 'Со вчерашнего дня у меня сильно болит голова.', 'I’ve had a bad headache since yesterday.'),
      ['Почти всегда во множественном числе: Kopfschmerzen, Bauchschmerzen, Rückenschmerzen.', 'Almost always plural: Kopfschmerzen, Bauchschmerzen, Rückenschmerzen.']),
    N('medikament', 'das', 'Medikament', 'die Medikamente', 'лекарство, медикамент', 'medication, medicine',
      ex('Nehmen Sie dieses [[Medikament]] dreimal täglich nach dem Essen.', 'Принимайте это лекарство три раза в день после еды.', 'Take this medication three times a day after meals.')),
    N('wartezimmer', 'das', 'Wartezimmer', 'die Wartezimmer', 'приёмная, комната ожидания у врача', 'waiting room',
      ex('Im [[Wartezimmer]] saßen schon zehn Patienten.', 'В комнате ожидания уже сидели десять пациентов.', 'There were already ten patients sitting in the waiting room.'))
  ]);

  reg('work', [
    N('arbeitszeit', 'die', 'Arbeitszeit', 'die Arbeitszeiten', 'рабочее время', 'working hours',
      ex('Meine reguläre [[Arbeitszeit]] endet um 17 Uhr.', 'Моё обычное рабочее время заканчивается в 17:00.', 'My regular working hours end at 5 p.m.')),
    N('puenktlichkeit', 'die', 'Pünktlichkeit', '', 'пунктуальность', 'punctuality',
      ex('In dieser Firma legt man großen Wert auf [[Pünktlichkeit]].', 'В этой компании придают большое значение пунктуальности.', 'In this company great importance is attached to punctuality.')),
    N('teamarbeit', 'die', 'Teamarbeit', '', 'командная работа', 'teamwork',
      ex('Gute [[Teamarbeit]] macht komplexe Projekte deutlich leichter.', 'Хорошая командная работа делает сложные проекты намного проще.', 'Good teamwork makes complex projects much easier.')),
    N('krankmeldung', 'die', 'Krankmeldung', 'die Krankmeldungen', 'уведомление о болезни (больничный)', 'sick note, reporting in sick',
      ex('Schicken Sie Ihre [[Krankmeldung]] bitte direkt an die Personalabteilung.', 'Отправьте уведомление о болезни, пожалуйста, напрямую в отдел кадров.', 'Please send your sick note directly to HR.'))
  ]);

  reg('authorities', [
    N('auslaenderbehoerde', 'die', 'Ausländerbehörde', 'die Ausländerbehörden', 'ведомство по делам иностранцев', 'immigration office',
      ex('Ich brauche dringend einen Termin bei der [[Ausländerbehörde]].', 'Мне срочно нужен приём в ведомстве по делам иностранцев.', 'I urgently need an appointment at the immigration office.')),
    N('einzahlung', 'die', 'Einzahlung', 'die Einzahlungen', 'взнос, внесение денег (на счёт)', 'deposit, payment in',
      ex('Für die [[Einzahlung]] am Schalter brauchen Sie Ihren Ausweis.', 'Для внесения денег в кассе вам понадобится удостоверение личности.', 'You need your ID to pay money in at the counter.')),
    N('auszahlung', 'die', 'Auszahlung', 'die Auszahlungen', 'выплата, снятие средств', 'payout, withdrawal',
      ex('Die [[Auszahlung]] der Kaution dauert bis zu sechs Wochen.', 'Выплата залога занимает до шести недель.', 'Paying out the deposit takes up to six weeks.')),
    N('mahngebuehr', 'die', 'Mahngebühr', 'die Mahngebühren', 'пеня за просрочку, сбор за напоминание', 'late fee, reminder fee',
      ex('Wenn Sie zu spät zahlen, fällt eine [[Mahngebühr]] an.', 'Если заплатить слишком поздно, начисляется пеня за напоминание.', 'If you pay too late, a reminder fee applies.'))
  ]);

  reg('travel', [
    N('schaffner', 'der', 'Schaffner', 'die Schaffner', 'кондуктор, проводник (в поезде)', 'ticket inspector, conductor',
      ex('Der [[Schaffner]] kontrolliert gerade die Fahrkarten im nächsten Wagen.', 'Кондуктор сейчас проверяет билеты в соседнем вагоне.', 'The conductor is checking tickets in the next carriage.')),
    N('sitzplatzreservierung', 'die', 'Sitzplatzreservierung', 'die Sitzplatzreservierungen', 'бронирование места (в поезде)', 'seat reservation',
      ex('Am Freitagabend lohnt sich eine [[Sitzplatzreservierung]] im ICE.', 'В пятницу вечером стоит забронировать место в ICE.', 'On Friday evening a seat reservation on the ICE is worth having.')),
    N('uebernachtung', 'die', 'Übernachtung', 'die Übernachtungen', 'ночёвка, сутки проживания', 'overnight stay',
      ex('Die [[Übernachtung]] mit Frühstück kostet 85 Euro.', 'Ночёвка с завтраком стоит 85 евро.', 'An overnight stay with breakfast costs 85 euros.')),
    N('tankstelle', 'die', 'Tankstelle', 'die Tankstellen', 'автозаправка', 'petrol station',
      ex('Wir müssen vor der Autobahn noch an einer [[Tankstelle]] halten.', 'Перед автобаном нам ещё нужно заехать на заправку.', 'We still need to stop at a petrol station before the motorway.'))
  ]);

  reg('leisure', [
    N('tageskarte', 'die', 'Tageskarte', 'die Tageskarten', 'дневной билет (проездной / в музей)', 'day ticket, day pass',
      ex('Mit einer [[Tageskarte]] kannst du alle drei Museen besuchen.', 'По дневному билету можно посетить все три музея.', 'With a day pass you can visit all three museums.')),
    N('schauspieler', 'der', 'Schauspieler', 'die Schauspieler', 'актёр', 'actor',
      ex('Der Haupt[[schauspieler]] hat das Publikum begeistert.', 'Главный актёр восхитил публику.', 'The lead actor thrilled the audience.')),
    N('schwimmbad', 'das', 'Schwimmbad', 'die Schwimmbäder', 'бассейн', 'swimming pool',
      ex('Sonntags gehe ich morgens gern ins [[Schwimmbad]].', 'По воскресеньям я люблю ходить утром в бассейн.', 'On Sundays I like going to the swimming pool in the morning.')),
    N('flohmarkt', 'der', 'Flohmarkt', 'die Flohmärkte', 'блошиный рынок', 'flea market',
      ex('Auf dem [[Flohmarkt]] habe ich eine alte Lampe gefunden.', 'На блошином рынке я нашёл старую лампу.', 'I found an old lamp at the flea market.'))
  ]);

  reg('society', [
    N('klimaschutz', 'der', 'Klimaschutz', '', 'защита климата', 'climate protection',
      ex('Viele junge Menschen engagieren sich für den [[Klimaschutz]].', 'Многие молодые люди участвуют в движении за защиту климата.', 'Many young people get involved in climate protection.')),
    N('buergerinitiative', 'die', 'Bürgerinitiative', 'die Bürgerinitiativen', 'гражданская инициатива', 'citizens’ initiative',
      ex('Eine [[Bürgerinitiative]] sammelt Unterschriften für mehr Radwege.', 'Гражданская инициатива собирает подписи за увеличение числа велодорожек.', 'A citizens’ initiative is collecting signatures for more cycle paths.')),
    N('pressefreiheit', 'die', 'Pressefreiheit', '', 'свобода прессы', 'freedom of the press',
      ex('Ohne [[Pressefreiheit]] können Journalistinnen nicht unabhängig berichten.', 'Без свободы прессы журналисты не могут вести независимые репортажи.', 'Without freedom of the press, journalists cannot report independently.')),
    N('rente', 'die', 'Rente', 'die Renten', 'пенсия', 'pension, retirement',
      ex('Mein Großvater geht nächstes Jahr in [[Rente]].', 'Мой дедушка в следующем году выходит на пенсию.', 'My grandfather is retiring next year.'),
      ['In Rente gehen — выходить на пенсию.', 'In Rente gehen — to retire.'])
  ]);
})();
