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
      ex('Photography started as a [[hobby]] and became her job.', 'Фотография начиналась как хобби, а стала её работой.', 'Fotografie fing als Hobby an und wurde zu ihrem Beruf.'),
      ['Множественное число пишется через -ies: hobbies.', 'Pluralendung beachten: hobbies (y wird zu ies).']),
    W('hiking', 'noun', 'hiking', 'B1', 'пешие походы', 'Wandern',
      ex('We go [[hiking]] in the mountains every summer.', 'Каждое лето мы ходим в походы в горы.', 'Wir gehen jeden Sommer in den Bergen wandern.'),
      ['Обычно в сочетании go hiking; прогулка в городе — go for a walk.', 'Typische Wendung: go hiking; ein Spaziergang im Alltag ist go for a walk.']),
    W('book', 'verb', 'book', 'A2', 'бронировать', 'buchen, reservieren',
      ex('I’ve [[booked]] a table for eight o’clock.', 'Я забронировал столик на восемь.', 'Ich habe einen Tisch für acht Uhr reserviert.'),
      ['Как и нем. buchen — универсальный глагол бронирования (столик, номер, билет).', 'Wie dt. buchen vielseitig für Tische, Zimmer und Tickets; fully booked = ausgebucht.']),
    W('sold-out', 'adj', 'sold out', 'B1', 'распроданный (о билетах)', 'ausverkauft',
      ex('The concert was [[sold out]] within an hour.', 'Билеты на концерт раскупили за час.', 'Das Konzert war innerhalb einer Stunde ausverkauft.'),
      ['Ставится после глагола (be sold out); перед существительным — с дефисом: a sold-out show.', 'Prädikativ nach be (the tickets are sold out); vor einem Nomen mit Bindestrich: a sold-out show.']),
    W('spare-time', 'noun', 'spare time', 'A2', 'свободное время', 'Freizeit',
      ex('What do you do in your [[spare time]]?', 'Чем ты занимаешься в свободное время?', 'Was machst du in deiner Freizeit?'),
      ['Неисчисляемое; синоним — free time (in your spare / free time).', 'Unzählbar (ohne Artikel/Plural); Synonym zu free time.']),
    W('join', 'verb', 'join', 'B1', 'вступать, записываться (в клуб); присоединяться', 'beitreten; sich anschließen',
      ex('I’ve just [[joined]] a running club.', 'Я только что записался в беговой клуб.', 'Ich bin gerade einem Laufverein beigetreten.'),
      ['Join без предлога: join a club, join us — не «join to».', 'Join ohne Präposition: join a club, join us — nicht „join to“.'])
  ]);

  reg('work', [
    W('shift', 'noun', 'shift', 'B1', 'смена (на работе)', 'Schicht',
      ex('She works the night [[shift]] at the hospital.', 'Она работает в ночную смену в больнице.', 'Sie arbeitet im Krankenhaus in der Nachtschicht.'),
      ['Устойчиво: work the day / night shift, work in shifts (работать посменно).', 'Gängig: work the night shift, work in shifts (= im Schichtdienst arbeiten).']),
    W('promotion', 'noun', 'promotion', 'B1', 'повышение (в должности)', 'Beförderung',
      ex('After two years he got a [[promotion]] to team leader.', 'Через два года его повысили до руководителя команды.', 'Nach zwei Jahren wurde er zum Teamleiter befördert.'),
      ['Глаголы: get a promotion, be promoted to; второе значение — рекламная акция.', 'Wendungen: get a promotion, be promoted to; zweite Bedeutung: Werbeaktion.']),
    W('resign', 'verb', 'resign', 'B2', 'увольняться (по собственному желанию)', 'kündigen (selbst)',
      ex('She [[resigned]] because she wanted to start her own business.', 'Она уволилась, потому что хотела открыть своё дело.', 'Sie hat gekündigt, weil sie sich selbstständig machen wollte.'),
      ['Resign — уйти самому; be fired / be dismissed — быть уволенным.', 'Resign — selbst kündigen; be fired / be dismissed — gekündigt werden.']),
    W('overtime', 'noun', 'overtime', 'B1', 'сверхурочная работа', 'Überstunden',
      ex('I did ten hours of [[overtime]] last week.', 'На прошлой неделе я переработал десять часов.', 'Ich habe letzte Woche zehn Überstunden gemacht.'),
      ['В отличие от нем. Überstunden, в англ. всегда ед. ч.: work / do overtime.', 'Anders als dt. Überstunden ist overtime unzählbar (Singular): do / work overtime.']),
    W('contract', 'noun', 'contract', 'B1', 'договор, контракт', 'Vertrag',
      ex('My [[contract]] ends in December.', 'Мой контракт заканчивается в декабре.', 'Mein Vertrag läuft im Dezember aus.'),
      ['Сущ. произносится с ударением на первый слог CON-tract; глагол («сокращаться / подхватить») — con-TRACT.', 'Betonung: als Nomen CON-tract (Vertrag), als Verb con-TRACT (sich zuziehen / schrumpfen).']),
    W('workload', 'noun', 'workload', 'B2', 'рабочая нагрузка', 'Arbeitsbelastung, Pensum',
      ex('The [[workload]] doubled when two colleagues left.', 'Нагрузка удвоилась, когда ушли двое коллег.', 'Das Arbeitspensum hat sich verdoppelt, als zwei Kollegen gegangen sind.'),
      ['Говорят heavy / manageable workload; ср. нем. Arbeitspensum.', 'Typisch: a heavy / manageable workload (= eine hohe / machbare Arbeitsbelastung).'])
  ]);

  reg('economy', [
    W('price', 'noun', 'price', 'A2', 'цена', 'Preis',
      ex('Food [[prices]] have gone up again.', 'Цены на продукты снова выросли.', 'Die Lebensmittelpreise sind wieder gestiegen.'),
      ['Не путать price (цена в магазине) и prize (приз, награда); предлог — at a price.', 'Nicht verwechseln: price (Preis im Handel) vs. prize (Gewinn / Auszeichnung).']),
    W('afford', 'verb', 'afford', 'B1', 'позволить себе (по деньгам)', 'sich leisten',
      ex('We can’t [[afford]] a new car this year.', 'В этом году мы не можем позволить себе новую машину.', 'Dieses Jahr können wir uns kein neues Auto leisten.'),
      ['Обычно с can / can’t: can afford to buy.', 'Meist mit can / can’t: can afford to buy.']),
    W('loan', 'noun', 'loan', 'B1', 'кредит, заём', 'Kredit, Darlehen',
      ex('They took out a [[loan]] to buy the flat.', 'Они взяли кредит, чтобы купить квартиру.', 'Sie haben einen Kredit aufgenommen, um die Wohnung zu kaufen.'),
      ['Взять кредит — take out a loan; погасить — pay off a loan.', 'Gängige Verben: take out a loan (aufnehmen), pay off / repay a loan (abbezahlen).']),
    W('tax', 'noun', 'tax', 'B1', 'налог', 'Steuer',
      ex('About a third of my salary goes on [[tax]].', 'Около трети зарплаты уходит на налоги.', 'Etwa ein Drittel meines Gehalts geht für Steuern drauf.'),
      ['Основные виды: income tax (подоходный), VAT / sales tax (НДС / с продаж), after tax (после вычета).', 'Typen: income tax (Einkommensteuer), VAT (Mehrwertsteuer), after tax (netto).']),
    W('unemployment', 'noun', 'unemployment', 'B1', 'безработица', 'Arbeitslosigkeit',
      ex('[[Unemployment]] in the region has fallen to five per cent.', 'Безработица в регионе снизилась до пяти процентов.', 'Die Arbeitslosigkeit in der Region ist auf fünf Prozent gesunken.'),
      ['Уровень безработицы — unemployment rate; пособие — unemployment benefit.', 'Arbeitslosenquote = unemployment rate; Arbeitslosengeld = unemployment benefit.']),
    W('budget', 'noun', 'budget', 'B1', 'бюджет', 'Budget, Etat',
      ex('We need to stay within our [[budget]] for the holiday.', 'Нужно уложиться в бюджет на отпуск.', 'Wir müssen im Urlaub im Rahmen unseres Budgets bleiben.'),
      ['Буква d перед g не читается (/ˈbʌdʒɪt/); «бюджетный / недорогой» — budget-friendly.', 'Stummes d (/ˈbʌdʒɪt/); als Adjektiv auch „günstig“: a budget hotel.']),
    W('savings', 'noun', 'savings', 'B1', 'сбережения', 'Ersparnisse',
      ex('She used her [[savings]] to start a small café.', 'На свои сбережения она открыла маленькое кафе.', 'Mit ihren Ersparnissen hat sie ein kleines Café eröffnet.'),
      ['Всегда во множественном числе (как нем. Ersparnisse); счёт — savings account.', 'Immer Plural (wie dt. Ersparnisse); Sparkonto = savings account.']),
    W('recession', 'noun', 'recession', 'B2', 'рецессия, экономический спад', 'Rezession',
      ex('Many small firms closed during the [[recession]].', 'Во время рецессии закрылось много мелких фирм.', 'Während der Rezession haben viele kleine Firmen geschlossen.'),
      ['Пишется с одним -c- и двумя -ss-; предлог — in / during a recession.', 'Rechtschreibung: ein c, doppeltes s; übliche Präposition: in / during a recession.']),
    W('competition', 'noun', 'competition', 'B2', 'конкуренция; соревнование', 'Konkurrenz, Wettbewerb',
      ex('[[Competition]] between the supermarkets keeps prices low.', 'Конкуренция между супермаркетами держит цены низкими.', 'Die Konkurrenz zwischen den Supermärkten hält die Preise niedrig.'),
      ['В значении «конкуренция» — неисчисляемое; в значении «конкурс / турнир» — исчисляемое (a competition).', 'Unzählbar im Sinn von „Wettbewerb / Konkurrenz“; zählbar als „Wettkampf / Preisausschreiben“.'])
  ]);

  reg('wellbeing', [
    W('relax', 'verb', 'relax', 'A2', 'отдыхать, расслабляться', 'sich entspannen',
      ex('I [[relax]] by reading before bed.', 'Перед сном я расслабляюсь за чтением.', 'Vor dem Schlafengehen entspanne ich mich beim Lesen.'),
      ['Без возвратного местоимения: relax (не «relax myself»!), отличие от нем. sich entspannen.', 'Ohne Reflexivpronomen: relax (nicht „relax myself“ — anders als dt. sich entspannen).']),
    W('sleep-well', 'phrase', 'get enough sleep', 'B1', 'высыпаться', 'genug schlafen',
      ex('If you don’t [[get enough sleep]], you can’t concentrate.', 'Если не высыпаться, трудно сосредоточиться.', 'Wenn man nicht genug schläft, kann man sich nicht konzentrieren.'),
      ['Близко к рус. «высыпаться»; sleep является неисчисляемым (enough sleep, a good night’s sleep).', 'Entspricht russ. высыпаться; sleep ist hier unzählbar (a good night’s sleep).']),
    W('anxious', 'adj', 'anxious', 'B2', 'встревоженный, тревожный', 'ängstlich, besorgt',
      ex('I always feel [[anxious]] before exams.', 'Перед экзаменами я всегда нервничаю.', 'Vor Prüfungen bin ich immer nervös und angespannt.'),
      ['Предлог: anxious about (встревожен чем-то); также может значить «сильно хотеть» (anxious to start).', 'Mit about (anxious about the test = besorgt wegen); auch „sehr bemüht“: anxious to help.']),
    W('cope', 'verb', 'cope with', 'B2', 'справляться (с трудностями)', 'zurechtkommen mit, bewältigen',
      ex('How do you [[cope with]] stress at work?', 'Как ты справляешься со стрессом на работе?', 'Wie kommst du mit dem Stress bei der Arbeit zurecht?'),
      ['Всегда с предлогом with: cope with pressure / stress (не путать с manage — управлять).', 'Immer mit with: cope with stress / change; betont das Durchhalten unter Belastung.']),
    W('work-life-balance', 'noun', 'work-life balance', 'B2', 'баланс работы и личной жизни', 'Work-Life-Balance',
      ex('A four-day week has improved my [[work-life balance]].', 'Четырёхдневка улучшила мой баланс работы и жизни.', 'Die Vier-Tage-Woche hat meine Work-Life-Balance verbessert.'),
      ['Англицизм активно используется в немецком (die Work-Life-Balance) без перевода.', 'Im Deutschen direkt als die Work-Life-Balance übernommen; meist mit gut / schlecht / improve.']),
    W('lonely', 'adj', 'lonely', 'B1', 'одинокий', 'einsam',
      ex('After moving to a new city, I felt [[lonely]] at first.', 'После переезда в новый город мне сначала было одиноко.', 'Nach dem Umzug in eine neue Stadt war ich anfangs einsam.'),
      ['Lonely — одиноко (чувство); alone — один (факт): I live alone, but I’m not lonely.', 'Lonely — einsam (Gefühl); alone — allein (Tatsache): I live alone, but I’m not lonely.']),
    W('take-a-break', 'phrase', 'take a break', 'A2', 'сделать перерыв', 'eine Pause machen',
      ex('Let’s [[take a break]] and get some fresh air.', 'Давай сделаем перерыв и подышим свежим воздухом.', 'Lass uns eine Pause machen und frische Luft schnappen.'),
      ['Словосочетание с take (не make!): take a break / have a break (отличие от нем. eine Pause machen).', 'Fest mit take (oder brit. have), niemals „make a break“ — anders als dt. eine Pause machen.'])
  ]);

  reg('digital-life', [
    W('download', 'verb', 'download', 'A2', 'скачивать, загружать', 'herunterladen',
      ex('You can [[download]] the app for free.', 'Приложение можно скачать бесплатно.', 'Sie können die App kostenlos herunterladen.'),
      ['Не путать направление: download — к себе на устройство (herunterladen), upload — в сеть.', 'Richtung merken: download = herunterladen (auf das eigene Gerät), upload = hochladen.']),
    W('upload', 'verb', 'upload', 'B1', 'загружать (в сеть), выкладывать', 'hochladen',
      ex('Please [[upload]] a copy of your passport.', 'Пожалуйста, загрузите копию паспорта.', 'Bitte laden Sie eine Kopie Ihres Reisepasses hoch.'),
      ['Также часто существительное: a fast upload speed (скорость отдачи).', 'Auch als Nomen: upload speed (= Upload-Geschwindigkeit).']),
    W('password', 'noun', 'password', 'A2', 'пароль', 'Passwort',
      ex('Never use the same [[password]] for every account.', 'Никогда не используйте один пароль для всех аккаунтов.', 'Verwende nie dasselbe Passwort für alle Konten.'),
      ['Глаголы: enter / reset / change a password; менеджер паролей — password manager.', 'Kollokationen: enter / reset / change a password; Passwortmanager = password manager.']),
    W('screen-time', 'noun', 'screen time', 'B2', 'время у экрана', 'Bildschirmzeit',
      ex('We limit the kids’ [[screen time]] to an hour a day.', 'Мы ограничиваем детям время у экрана часом в день.', 'Wir begrenzen die Bildschirmzeit der Kinder auf eine Stunde am Tag.'),
      ['Неисчисляемое существительное; популярный термин цифровой гигиены (limit / reduce screen time).', 'Unzählbar; fester Begriff in Betriebssystemen und beim Thema digitale Gesundheit.']),
    W('scam', 'noun', 'scam', 'B2', 'мошенничество, развод', 'Betrug, Abzocke',
      ex('That email about a lottery win is a [[scam]].', 'Письмо о выигрыше в лотерею — это развод.', 'Die E-Mail über einen Lotteriegewinn ist Betrug.'),
      ['Разговорнее, чем fraud; мошенник — scammer, попасться на уловку — fall for a scam.', 'Alltagssprachlicher als fraud; Betrüger = scammer, auf etwas hereinfallen = fall for a scam.']),
    W('subscribe', 'verb', 'subscribe', 'B2', 'подписываться (на канал, рассылку)', 'abonnieren',
      ex('I [[subscribe]] to a few podcasts about history.', 'Я подписан на несколько подкастов об истории.', 'Ich habe ein paar Podcasts über Geschichte abonniert.'),
      ['Subscribe to something: subscribe to a channel.', 'Subscribe to something: einen Kanal abonnieren.']),
    W('settings', 'noun', 'settings', 'B1', 'настройки', 'Einstellungen',
      ex('You can turn off notifications in the [[settings]].', 'Уведомления можно отключить в настройках.', 'Benachrichtigungen kannst du in den Einstellungen ausschalten.'),
      ['Как интерфейс программы — почти всегда во мн. ч. с предлогом in: in settings / in the settings.', 'Für Menüpunkte fast immer im Plural (wie dt. Einstellungen): in settings.'])
  ]);

  reg('society-politics', [
    W('law', 'noun', 'law', 'B1', 'закон; право', 'Gesetz; Recht',
      ex('The new [[law]] comes into force in January.', 'Новый закон вступает в силу в январе.', 'Das neue Gesetz tritt im Januar in Kraft.'),
      ['Конкретный закон — a law; право/юриспруденция в целом — без артикля (study law, break the law).', 'Einzelgesetz = a law; Rechtswissenschaft / Gesetzesordnung = law (ohne Artikel: break the law).']),
    W('protest', 'noun', 'protest', 'B1', 'протест, акция протеста', 'Protest, Demonstration',
      ex('Thousands of people joined the [[protest]] against the cuts.', 'Тысячи людей вышли на протест против сокращений.', 'Tausende Menschen haben sich dem Protest gegen die Kürzungen angeschlossen.'),
      ['Существительное — PRO-test (ударение на первый слог), глагол — pro-TEST.', 'Betonung: als Nomen PRO-test, als Verb pro-TEST (protestieren).']),
    W('human-rights', 'noun', 'human rights', 'B1', 'права человека', 'Menschenrechte',
      ex('The organisation reports on [[human rights]] around the world.', 'Организация публикует доклады о правах человека по всему миру.', 'Die Organisation berichtet weltweit über Menschenrechte.'),
      ['Отдельное право: the right to + сущ./глагол — the right to vote.', 'Ein einzelnes Recht: the right to + Nomen/Verb — the right to vote.']),
    W('debate', 'noun', 'debate', 'B2', 'дебаты, обсуждение', 'Debatte',
      ex('There is a lively [[debate]] about the speed limit.', 'Идёт оживлённая дискуссия об ограничении скорости.', 'Es gibt eine lebhafte Debatte über das Tempolimit.'),
      ['Предлог: debate about / over (более формальная и структурированная дискуссия, чем argument).', 'Präpositionen: debate about / over; geordneter als das oft emotionale argument.']),
    W('policy', 'noun', 'policy', 'B2', 'политика (курс, линия), правила', 'Politik (Kurs), Richtlinie',
      ex('The government’s housing [[policy]] has been heavily criticised.', 'Жилищную политику правительства сильно критикуют.', 'Die Wohnungspolitik der Regierung wurde stark kritisiert.'),
      ['Policy — конкретный курс (housing policy); politics — политика как сфера.', 'Policy — konkreter Kurs (Wohnungspolitik); politics — Politik als Bereich.']),
    W('majority', 'noun', 'majority', 'B2', 'большинство', 'Mehrheit',
      ex('The [[majority]] of voters supported the plan.', 'Большинство избирателей поддержало план.', 'Die Mehrheit der Wähler hat den Plan unterstützt.'),
      ['Антоним — minority; выражение the vast / overwhelming majority (подавляющее большинство).', 'Gegenteil: minority; häufig: the vast / overwhelming majority (= die überwältigende Mehrheit).']),
    W('minister', 'noun', 'minister', 'B1', 'министр', 'Minister(in)',
      ex('The health [[minister]] announced new measures.', 'Министр здравоохранения объявил новые меры.', 'Der Gesundheitsminister hat neue Maßnahmen angekündigt.'),
      ['В Британии премьер-министр — Prime Minister (PM); в Германии — Bundeskanzler / Chancellor.', 'In Großbritannien: Prime Minister; in Deutschland spricht man meist vom Chancellor (Bundeskanzler).']),
    W('opinion', 'noun', 'opinion', 'B1', 'мнение', 'Meinung',
      ex('In my [[opinion]], public transport should be free.', 'По-моему, общественный транспорт должен быть бесплатным.', 'Meiner Meinung nach sollte der Nahverkehr kostenlos sein.'),
      ['Фразы: in my opinion (не «on my opinion»!), have a high/low opinion of somebody.', 'Feste Wendung: in my opinion (nicht „from/on“!); have a strong opinion on something.'])
  ]);
})();
