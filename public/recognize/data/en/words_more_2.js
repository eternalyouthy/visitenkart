/* ENGLISH vocabulary · second extra batch for the thin topics (Leisure, Work, Economy, Wellbeing, Digital life,
 * Society & politics). Everyday words a B1–B2 learner actually needs, not derivatives of existing headwords.
 * A headword that already exists elsewhere is not duplicated: its card is added to the topic (shared progress).
 * Glosses ru / de inline; examples with [[…]]; editorial CEFR study targets. Original examples. */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };   // never duplicate a catalogue headword: share the existing card instead
    return { id: 'en:more2:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'words', topic); });
    GT.register({ tab: 'words', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  reg('leisure', [
    W('hobby', 'noun', 'hobby', 'A2', 'хобби, увлечение', 'Hobby',
      ex('Photography started as a [[hobby]] and became her job.', 'Фотография начиналась как хобби, а стала её работой.', 'Fotografie fing als Hobby an und wurde zu ihrem Beruf.')),
    W('hiking', 'noun', 'hiking', 'B1', 'пешие походы', 'Wandern',
      ex('We go [[hiking]] in the mountains every summer.', 'Каждое лето мы ходим в походы в горы.', 'Wir gehen jeden Sommer in den Bergen wandern.')),
    W('book', 'verb', 'book', 'A2', 'бронировать', 'buchen, reservieren',
      ex('I’ve [[booked]] a table for eight o’clock.', 'Я забронировал столик на восемь.', 'Ich habe einen Tisch für acht Uhr reserviert.')),
    W('sold-out', 'adj', 'sold out', 'B1', 'распроданный (о билетах)', 'ausverkauft',
      ex('The concert was [[sold out]] within an hour.', 'Билеты на концерт раскупили за час.', 'Das Konzert war innerhalb einer Stunde ausverkauft.')),
    W('spare-time', 'noun', 'spare time', 'A2', 'свободное время', 'Freizeit',
      ex('What do you do in your [[spare time]]?', 'Чем ты занимаешься в свободное время?', 'Was machst du in deiner Freizeit?')),
    W('join', 'verb', 'join', 'B1', 'вступать, записываться (в клуб); присоединяться', 'beitreten; sich anschließen',
      ex('I’ve just [[joined]] a running club.', 'Я только что записался в беговой клуб.', 'Ich bin gerade einem Laufverein beigetreten.'),
      ['Join без предлога: join a club, join us — не «join to».', 'Join ohne Präposition: join a club, join us — nicht „join to“.'])
  ]);

  reg('work', [
    W('shift', 'noun', 'shift', 'B1', 'смена (на работе)', 'Schicht',
      ex('She works the night [[shift]] at the hospital.', 'Она работает в ночную смену в больнице.', 'Sie arbeitet im Krankenhaus in der Nachtschicht.')),
    W('promotion', 'noun', 'promotion', 'B1', 'повышение (в должности)', 'Beförderung',
      ex('After two years he got a [[promotion]] to team leader.', 'Через два года его повысили до руководителя команды.', 'Nach zwei Jahren wurde er zum Teamleiter befördert.')),
    W('resign', 'verb', 'resign', 'B2', 'увольняться (по собственному желанию)', 'kündigen (selbst)',
      ex('She [[resigned]] because she wanted to start her own business.', 'Она уволилась, потому что хотела открыть своё дело.', 'Sie hat gekündigt, weil sie sich selbstständig machen wollte.'),
      ['Resign — уйти самому; be fired / be dismissed — быть уволенным.', 'Resign — selbst kündigen; be fired / be dismissed — gekündigt werden.']),
    W('overtime', 'noun', 'overtime', 'B1', 'сверхурочная работа', 'Überstunden',
      ex('I did ten hours of [[overtime]] last week.', 'На прошлой неделе я переработал десять часов.', 'Ich habe letzte Woche zehn Überstunden gemacht.')),
    W('contract', 'noun', 'contract', 'B1', 'договор, контракт', 'Vertrag',
      ex('My [[contract]] ends in December.', 'Мой контракт заканчивается в декабре.', 'Mein Vertrag läuft im Dezember aus.')),
    W('workload', 'noun', 'workload', 'B2', 'рабочая нагрузка', 'Arbeitsbelastung, Pensum',
      ex('The [[workload]] doubled when two colleagues left.', 'Нагрузка удвоилась, когда ушли двое коллег.', 'Das Arbeitspensum hat sich verdoppelt, als zwei Kollegen gegangen sind.'))
  ]);

  reg('economy', [
    W('price', 'noun', 'price', 'A2', 'цена', 'Preis',
      ex('Food [[prices]] have gone up again.', 'Цены на продукты снова выросли.', 'Die Lebensmittelpreise sind wieder gestiegen.')),
    W('afford', 'verb', 'afford', 'B1', 'позволить себе (по деньгам)', 'sich leisten',
      ex('We can’t [[afford]] a new car this year.', 'В этом году мы не можем позволить себе новую машину.', 'Dieses Jahr können wir uns kein neues Auto leisten.'),
      ['Обычно с can / can’t: can afford to buy.', 'Meist mit can / can’t: can afford to buy.']),
    W('loan', 'noun', 'loan', 'B1', 'кредит, заём', 'Kredit, Darlehen',
      ex('They took out a [[loan]] to buy the flat.', 'Они взяли кредит, чтобы купить квартиру.', 'Sie haben einen Kredit aufgenommen, um die Wohnung zu kaufen.')),
    W('tax', 'noun', 'tax', 'B1', 'налог', 'Steuer',
      ex('About a third of my salary goes on [[tax]].', 'Около трети зарплаты уходит на налоги.', 'Etwa ein Drittel meines Gehalts geht für Steuern drauf.')),
    W('unemployment', 'noun', 'unemployment', 'B1', 'безработица', 'Arbeitslosigkeit',
      ex('[[Unemployment]] in the region has fallen to five per cent.', 'Безработица в регионе снизилась до пяти процентов.', 'Die Arbeitslosigkeit in der Region ist auf fünf Prozent gesunken.')),
    W('budget', 'noun', 'budget', 'B1', 'бюджет', 'Budget, Etat',
      ex('We need to stay within our [[budget]] for the holiday.', 'Нужно уложиться в бюджет на отпуск.', 'Wir müssen im Urlaub im Rahmen unseres Budgets bleiben.')),
    W('savings', 'noun', 'savings', 'B1', 'сбережения', 'Ersparnisse',
      ex('She used her [[savings]] to start a small café.', 'На свои сбережения она открыла маленькое кафе.', 'Mit ihren Ersparnissen hat sie ein kleines Café eröffnet.')),
    W('recession', 'noun', 'recession', 'B2', 'рецессия, экономический спад', 'Rezession',
      ex('Many small firms closed during the [[recession]].', 'Во время рецессии закрылось много мелких фирм.', 'Während der Rezession haben viele kleine Firmen geschlossen.')),
    W('competition', 'noun', 'competition', 'B2', 'конкуренция; соревнование', 'Konkurrenz, Wettbewerb',
      ex('[[Competition]] between the supermarkets keeps prices low.', 'Конкуренция между супермаркетами держит цены низкими.', 'Die Konkurrenz zwischen den Supermärkten hält die Preise niedrig.'))
  ]);

  reg('wellbeing', [
    W('relax', 'verb', 'relax', 'A2', 'отдыхать, расслабляться', 'sich entspannen',
      ex('I [[relax]] by reading before bed.', 'Перед сном я расслабляюсь за чтением.', 'Vor dem Schlafengehen entspanne ich mich beim Lesen.')),
    W('sleep-well', 'phrase', 'get enough sleep', 'B1', 'высыпаться', 'genug schlafen',
      ex('If you don’t [[get enough sleep]], you can’t concentrate.', 'Если не высыпаться, трудно сосредоточиться.', 'Wenn man nicht genug schläft, kann man sich nicht konzentrieren.')),
    W('anxious', 'adj', 'anxious', 'B2', 'встревоженный, тревожный', 'ängstlich, besorgt',
      ex('I always feel [[anxious]] before exams.', 'Перед экзаменами я всегда нервничаю.', 'Vor Prüfungen bin ich immer nervös und angespannt.')),
    W('cope', 'verb', 'cope with', 'B2', 'справляться (с трудностями)', 'zurechtkommen mit, bewältigen',
      ex('How do you [[cope with]] stress at work?', 'Как ты справляешься со стрессом на работе?', 'Wie kommst du mit dem Stress bei der Arbeit zurecht?')),
    W('work-life-balance', 'noun', 'work-life balance', 'B2', 'баланс работы и личной жизни', 'Work-Life-Balance',
      ex('A four-day week has improved my [[work-life balance]].', 'Четырёхдневка улучшила мой баланс работы и жизни.', 'Die Vier-Tage-Woche hat meine Work-Life-Balance verbessert.')),
    W('lonely', 'adj', 'lonely', 'B1', 'одинокий', 'einsam',
      ex('After moving to a new city, I felt [[lonely]] at first.', 'После переезда в новый город мне сначала было одиноко.', 'Nach dem Umzug in eine neue Stadt war ich anfangs einsam.'),
      ['Lonely — одиноко (чувство); alone — один (факт): I live alone, but I’m not lonely.', 'Lonely — einsam (Gefühl); alone — allein (Tatsache): I live alone, but I’m not lonely.']),
    W('take-a-break', 'phrase', 'take a break', 'A2', 'сделать перерыв', 'eine Pause machen',
      ex('Let’s [[take a break]] and get some fresh air.', 'Давай сделаем перерыв и подышим свежим воздухом.', 'Lass uns eine Pause machen und frische Luft schnappen.'))
  ]);

  reg('digital-life', [
    W('download', 'verb', 'download', 'A2', 'скачивать, загружать', 'herunterladen',
      ex('You can [[download]] the app for free.', 'Приложение можно скачать бесплатно.', 'Sie können die App kostenlos herunterladen.')),
    W('upload', 'verb', 'upload', 'B1', 'загружать (в сеть), выкладывать', 'hochladen',
      ex('Please [[upload]] a copy of your passport.', 'Пожалуйста, загрузите копию паспорта.', 'Bitte laden Sie eine Kopie Ihres Reisepasses hoch.')),
    W('password', 'noun', 'password', 'A2', 'пароль', 'Passwort',
      ex('Never use the same [[password]] for every account.', 'Никогда не используйте один пароль для всех аккаунтов.', 'Verwende nie dasselbe Passwort für alle Konten.')),
    W('screen-time', 'noun', 'screen time', 'B2', 'время у экрана', 'Bildschirmzeit',
      ex('We limit the kids’ [[screen time]] to an hour a day.', 'Мы ограничиваем детям время у экрана часом в день.', 'Wir begrenzen die Bildschirmzeit der Kinder auf eine Stunde am Tag.')),
    W('scam', 'noun', 'scam', 'B2', 'мошенничество, развод', 'Betrug, Abzocke',
      ex('That email about a lottery win is a [[scam]].', 'Письмо о выигрыше в лотерею — это развод.', 'Die E-Mail über einen Lotteriegewinn ist Betrug.')),
    W('subscribe', 'verb', 'subscribe', 'B2', 'подписываться (на канал, рассылку)', 'abonnieren',
      ex('I [[subscribe]] to a few podcasts about history.', 'Я подписан на несколько подкастов об истории.', 'Ich habe ein paar Podcasts über Geschichte abonniert.'),
      ['Subscribe to something: subscribe to a channel.', 'Subscribe to something: einen Kanal abonnieren.']),
    W('settings', 'noun', 'settings', 'B1', 'настройки', 'Einstellungen',
      ex('You can turn off notifications in the [[settings]].', 'Уведомления можно отключить в настройках.', 'Benachrichtigungen kannst du in den Einstellungen ausschalten.'))
  ]);

  reg('society-politics', [
    W('law', 'noun', 'law', 'B1', 'закон; право', 'Gesetz; Recht',
      ex('The new [[law]] comes into force in January.', 'Новый закон вступает в силу в январе.', 'Das neue Gesetz tritt im Januar in Kraft.')),
    W('protest', 'noun', 'protest', 'B1', 'протест, акция протеста', 'Protest, Demonstration',
      ex('Thousands of people joined the [[protest]] against the cuts.', 'Тысячи людей вышли на протест против сокращений.', 'Tausende Menschen haben sich dem Protest gegen die Kürzungen angeschlossen.')),
    W('human-rights', 'noun', 'human rights', 'B1', 'права человека', 'Menschenrechte',
      ex('The organisation reports on [[human rights]] around the world.', 'Организация публикует доклады о правах человека по всему миру.', 'Die Organisation berichtet weltweit über Menschenrechte.'),
      ['Отдельное право: the right to + сущ./глагол — the right to vote.', 'Ein einzelnes Recht: the right to + Nomen/Verb — the right to vote.']),
    W('debate', 'noun', 'debate', 'B2', 'дебаты, обсуждение', 'Debatte',
      ex('There is a lively [[debate]] about the speed limit.', 'Идёт оживлённая дискуссия об ограничении скорости.', 'Es gibt eine lebhafte Debatte über das Tempolimit.')),
    W('policy', 'noun', 'policy', 'B2', 'политика (курс, линия), правила', 'Politik (Kurs), Richtlinie',
      ex('The government’s housing [[policy]] has been heavily criticised.', 'Жилищную политику правительства сильно критикуют.', 'Die Wohnungspolitik der Regierung wurde stark kritisiert.'),
      ['Policy — конкретный курс (housing policy); politics — политика как сфера.', 'Policy — konkreter Kurs (Wohnungspolitik); politics — Politik als Bereich.']),
    W('majority', 'noun', 'majority', 'B2', 'большинство', 'Mehrheit',
      ex('The [[majority]] of voters supported the plan.', 'Большинство избирателей поддержало план.', 'Die Mehrheit der Wähler hat den Plan unterstützt.')),
    W('minister', 'noun', 'minister', 'B1', 'министр', 'Minister(in)',
      ex('The health [[minister]] announced new measures.', 'Министр здравоохранения объявил новые меры.', 'Der Gesundheitsminister hat neue Maßnahmen angekündigt.')),
    W('opinion', 'noun', 'opinion', 'B1', 'мнение', 'Meinung',
      ex('In my [[opinion]], public transport should be free.', 'По-моему, общественный транспорт должен быть бесплатным.', 'Meiner Meinung nach sollte der Nahverkehr kostenlos sein.'))
  ]);
})();
