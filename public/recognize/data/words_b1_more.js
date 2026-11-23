/* German B1 vocabulary · second batch for the thin B1 topics (8 per topic, 6 for Work).
 * Page comments were checked against the Goethe-Zertifikat B1 Wortliste PDF (printed page = PDF page).
 * Six lemmas are not in the Wortliste and are marked as a B1+ everyday supplement. Examples and translations are original. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function withNote(o, note) { if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; } return o; }
  function N(id, article, de, plural, ru, en, e, note) {
    return withNote({ id: id, pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function V(id, de, forms, gov, ru, en, e, note) {
    return withNote({ id: id, pos: 'verb', de: de, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, gov: gov || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function A(id, pos, de, ru, en, e, note) { return withNote({ id: id, pos: pos, de: de, ru: ru, en: en, examples: [e] }, note); }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('everyday', [
    // Wortliste p. 27
    A('b1-everyday-bisher', 'adv', 'bisher', 'до сих пор, пока что', 'so far, until now',
      ex('[[Bisher]] hat alles gut geklappt.', 'Пока всё шло хорошо.', 'So far everything has gone well.')),
    // Wortliste p. 30
    A('b1-everyday-damals', 'adv', 'damals', 'тогда, в то время (в прошлом)', 'back then, at that time',
      ex('[[Damals]] gab es in unserem Dorf noch kein Internet.', 'Тогда в нашей деревне ещё не было интернета.', 'Back then there was no internet in our village yet.')),
    // not in the Goethe B1 Wortliste — B1+ everyday supplement
    A('b1-everyday-jedenfalls', 'adv', 'jedenfalls', 'во всяком случае, по крайней мере', 'anyway, at any rate',
      ex('Ich weiß nicht, ob er kommt. Ich habe ihn [[jedenfalls]] eingeladen.', 'Не знаю, придёт ли он. Во всяком случае, я его пригласил.', 'I don’t know if he’s coming. I invited him, anyway.')),
    // Wortliste p. 66
    A('b1-everyday-naemlich', 'adv', 'nämlich', 'дело в том, что; а именно', 'you see, because; namely',
      ex('Ich bin müde. Ich habe [[nämlich]] kaum geschlafen.', 'Я устал. Дело в том, что я почти не спал.', 'I’m tired. I hardly slept, you see.'),
      ['Nämlich объясняет причину и не стоит в начале предложения: «Ich habe nämlich…», не «Nämlich habe ich…».', 'Nämlich gives a reason and never comes first in the sentence: “Ich habe nämlich…”, not “Nämlich habe ich…”.']),
    // Wortliste p. 81
    A('b1-everyday-sowieso', 'adv', 'sowieso', 'всё равно, так или иначе', 'anyway, in any case',
      ex('Du musst mich nicht abholen, ich bin [[sowieso]] in der Stadt.', 'Не надо меня забирать, я всё равно в городе.', 'You don’t need to pick me up, I’m in town anyway.')),
    // Wortliste p. 90
    A('b1-everyday-unbedingt', 'adv', 'unbedingt', 'обязательно, непременно', 'definitely, absolutely',
      ex('Den Film musst du [[unbedingt]] sehen!', 'Этот фильм тебе обязательно надо посмотреть!', 'You absolutely have to see that film!')),
    // Wortliste p. 95
    A('b1-everyday-vorher', 'adv', 'vorher', 'заранее, перед этим', 'beforehand, before that',
      ex('Ruf bitte [[vorher]] an, wenn du später kommst.', 'Позвони, пожалуйста, заранее, если придёшь позже.', 'Please call beforehand if you’re going to be late.')),
    // not in the Goethe B1 Wortliste — B1+ everyday supplement
    A('b1-everyday-ausnahmsweise', 'adv', 'ausnahmsweise', 'в виде исключения', 'as an exception, for once',
      ex('Heute darfst du [[ausnahmsweise]] länger aufbleiben.', 'Сегодня в виде исключения тебе можно лечь попозже.', 'You can stay up later today, just this once.'))
  ]);

  reg('people', [
    // Wortliste p. 94
    N('b1-people-verwandte', 'der', 'Verwandte', 'die Verwandten', 'родственник, родственница', 'relative',
      ex('Zu Weihnachten besuchen wir unsere [[Verwandten]] in Polen.', 'На Рождество мы навещаем родственников в Польше.', 'At Christmas we visit our relatives in Poland.'),
      ['Склоняется как прилагательное: ein Verwandter, eine Verwandte, die Verwandten.', 'Declined like an adjective: ein Verwandter, eine Verwandte, die Verwandten.']),
    // Wortliste p. 24
    N('b1-people-bekannte', 'der', 'Bekannte', 'die Bekannten', 'знакомый, знакомая', 'acquaintance',
      ex('Die Wohnung habe ich über einen [[Bekannten]] gefunden.', 'Квартиру я нашёл через знакомого.', 'I found the flat through an acquaintance.'),
      ['Bekannte — не близкий друг (Freund), а знакомый. Склоняется как прилагательное.', 'Bekannte is not a close friend (Freund) but an acquaintance. Declined like an adjective.']),
    // Wortliste p. 33
    N('b1-people-ehe', 'die', 'Ehe', 'die Ehen', 'брак, супружество', 'marriage',
      ex('Nach zwanzig Jahren [[Ehe]] sind sie immer noch glücklich.', 'Спустя двадцать лет брака они всё ещё счастливы.', 'After twenty years of marriage they are still happy.')),
    // Wortliste p. 59
    A('b1-people-ledig', 'adj', 'ledig', 'холостой, незамужняя', 'single, unmarried',
      ex('Im Formular steht: [[ledig]], verheiratet oder geschieden.', 'В анкете есть варианты: не в браке, в браке или в разводе.', 'The form says: single, married or divorced.'),
      ['Официальное слово для анкет. В разговоре чаще Single.', 'The official word on forms. In conversation people often say Single.']),
    // Wortliste p. 87
    V('b1-people-trennen', 'sich trennen', ['trennt sich', 'trennte sich', 'hat sich getrennt'], 'von + Dat.', 'расстаться, разойтись', 'to split up, to separate',
      ex('Sie haben sich nach fünf Jahren [[getrennt]].', 'Они расстались через пять лет.', 'They split up after five years.')),
    // Wortliste p. 84
    V('b1-people-streiten', 'sich streiten', ['streitet sich', 'stritt sich', 'hat sich gestritten'], 'mit + Dat. / über + Akk.', 'ссориться, спорить', 'to argue, to quarrel',
      ex('Die Kinder [[streiten]] sich ständig um die Fernbedienung.', 'Дети постоянно ссорятся из-за пульта.', 'The kids are always fighting over the remote.')),
    // Wortliste p. 58
    V('b1-people-kuemmern', 'sich kümmern', ['kümmert sich', 'kümmerte sich', 'hat sich gekümmert'], 'um + Akk.', 'заботиться; заниматься (чем-то)', 'to take care of, to look after',
      ex('Wer [[kümmert]] sich um den Hund, wenn ihr im Urlaub seid?', 'Кто будет присматривать за собакой, пока вы в отпуске?', 'Who’s looking after the dog while you’re on holiday?')),
    // Wortliste p. 45
    A('b1-people-gemeinsam', 'adj', 'gemeinsam', 'общий; вместе', 'common, shared; together',
      ex('Wir haben viele [[gemeinsame]] Interessen.', 'У нас много общих интересов.', 'We have a lot of interests in common.'))
  ]);

  reg('home', [
    // not in the Goethe B1 Wortliste — B1+ everyday supplement
    N('b1-home-nebenkosten', 'die', 'Nebenkosten', 'die Nebenkosten', 'коммунальные платежи (дополнительно к аренде)', 'utility costs, service charges',
      ex('Die Miete beträgt 700 Euro plus 150 Euro [[Nebenkosten]].', 'Аренда — 700 евро плюс 150 евро коммунальных.', 'The rent is 700 euros plus 150 euros in utilities.'),
      ['Kaltmiete + Nebenkosten = Warmmiete.', 'Kaltmiete + Nebenkosten = Warmmiete (rent including utilities).']),
    // Wortliste p. 49
    N('b1-home-heizung', 'die', 'Heizung', 'die Heizungen', 'отопление; батарея', 'heating; radiator',
      ex('Die [[Heizung]] funktioniert seit gestern nicht.', 'Отопление со вчерашнего дня не работает.', 'The heating hasn’t been working since yesterday.')),
    // Wortliste p. 49
    N('b1-home-hausmeister', 'der', 'Hausmeister', 'die Hausmeister', 'завхоз, управляющий домом (дворник-техник)', 'caretaker, janitor',
      ex('Wegen des tropfenden Wasserhahns rufe ich den [[Hausmeister]] an.', 'Из-за капающего крана позвоню завхозу.', 'I’ll call the caretaker about the dripping tap.')),
    // Wortliste p. 36
    N('b1-home-erdgeschoss', 'das', 'Erdgeschoss', 'die Erdgeschosse', 'первый (цокольный) этаж', 'ground floor',
      ex('Wir wohnen im [[Erdgeschoss]], deshalb ist es oft etwas laut.', 'Мы живём на первом этаже, поэтому часто бывает шумновато.', 'We live on the ground floor, so it’s often a bit noisy.'),
      ['Erdgeschoss — русский «первый этаж». Немецкий erster Stock — это уже русский второй.', 'Erdgeschoss is the ground floor; the German erster Stock is the floor above it.']),
    // Wortliste p. 64
    A('b1-home-moebliert', 'adj', 'möbliert', 'меблированный', 'furnished',
      ex('Für ein halbes Jahr suche ich ein [[möbliertes]] Zimmer.', 'Ищу меблированную комнату на полгода.', 'I’m looking for a furnished room for six months.')),
    // Wortliste: only in an example under „gemeinsam“, p. 45
    V('b1-home-renovieren', 'renovieren', ['renoviert', 'renovierte', 'hat renoviert'], '+ Akk.', 'делать (косметический) ремонт', 'to redecorate, to renovate',
      ex('Bevor wir ausziehen, müssen wir die Wohnung [[renovieren]].', 'Перед выездом нам нужно сделать в квартире ремонт.', 'We have to redecorate the flat before we move out.')),
    // Wortliste p. 21
    V('b1-home-aufraeumen', 'aufräumen', ['räumt auf', 'räumte auf', 'hat aufgeräumt'], '+ Akk.', 'убирать, наводить порядок', 'to tidy up',
      ex('Am Samstag [[räume]] ich endlich den Keller [[auf]].', 'В субботу я наконец разберу подвал.', 'On Saturday I’m finally going to tidy up the cellar.')),
    // Wortliste p. 74
    N('b1-home-reparatur', 'die', 'Reparatur', 'die Reparaturen', 'ремонт, починка', 'repair',
      ex('Die [[Reparatur]] der Waschmaschine hat 120 Euro gekostet.', 'Ремонт стиральной машины стоил 120 евро.', 'The washing machine repair cost 120 euros.'))
  ]);

  reg('food', [
    // Wortliste p. 102
    N('b1-food-zutat', 'die', 'Zutat', 'die Zutaten', 'ингредиент', 'ingredient',
      ex('Für den Kuchen brauchst du nur fünf [[Zutaten]].', 'Для пирога нужно всего пять ингредиентов.', 'You only need five ingredients for the cake.')),
    // Wortliste p. 45
    N('b1-food-gericht', 'das', 'Gericht', 'die Gerichte', 'блюдо', 'dish',
      ex('Welches [[Gericht]] empfehlen Sie heute?', 'Какое блюдо вы сегодня посоветуете?', 'Which dish do you recommend today?'),
      ['Омоним: das Gericht — также «суд».', 'Homonym: das Gericht also means “court (of law)”.']),
    // Wortliste p. 61
    N('b1-food-mahlzeit', 'die', 'Mahlzeit', 'die Mahlzeiten', 'приём пищи, еда', 'meal',
      ex('Das Frühstück ist für mich die wichtigste [[Mahlzeit]].', 'Завтрак для меня — самый важный приём пищи.', 'Breakfast is the most important meal for me.'),
      ['В офисе около полудня «Mahlzeit!» — шутливое приветствие.', 'In German offices around noon, “Mahlzeit!” is a jokey greeting.']),
    // Wortliste p. 45
    N('b1-food-geschmack', 'der', 'Geschmack', 'die Geschmäcker', 'вкус', 'taste, flavour',
      ex('Die Suppe hat einen leicht süßen [[Geschmack]].', 'У супа слегка сладковатый вкус.', 'The soup has a slightly sweet taste.'),
      ['Пословица: Über Geschmack lässt sich nicht streiten — о вкусах не спорят.', 'Proverb: Über Geschmack lässt sich nicht streiten — there’s no accounting for taste.']),
    // Wortliste p. 71
    V('b1-food-probieren', 'probieren', ['probiert', 'probierte', 'hat probiert'], '+ Akk.', 'пробовать', 'to try, to taste',
      ex('[[Probier]] mal den Käse, der ist aus der Region.', 'Попробуй сыр, он местный.', 'Try the cheese, it’s from the region.')),
    // Wortliste p. 76
    A('b1-food-satt', 'adj', 'satt', 'сытый', 'full (after eating)',
      ex('Danke, ich bin schon [[satt]].', 'Спасибо, я уже сыт.', 'Thanks, I’m already full.'),
      ['Переносно: etwas satt haben — «быть сытым по горло».', 'Figuratively: etwas satt haben — to be fed up with something.']),
    // Wortliste p. 76
    A('b1-food-scharf', 'adj', 'scharf', 'острый (о еде, ноже); резкий', 'spicy, hot; sharp',
      ex('Ist das Curry sehr [[scharf]]?', 'Карри очень острое?', 'Is the curry very spicy?')),
    // Wortliste p. 81
    V('b1-food-sparen', 'sparen', ['spart', 'sparte', 'hat gespart'], '+ Akk. / auf + Akk.', 'экономить; копить', 'to save (money)',
      ex('Wir [[sparen]] auf ein neues Auto.', 'Мы копим на новую машину.', 'We’re saving up for a new car.'))
  ]);

  reg('leisure', [
    // Wortliste p. 62
    N('b1-leisure-mannschaft', 'die', 'Mannschaft', 'die Mannschaften', 'команда (спортивная)', 'team',
      ex('Unsere [[Mannschaft]] hat das Spiel 2:1 gewonnen.', 'Наша команда выиграла матч 2:1.', 'Our team won the match 2–1.')),
    // Wortliste p. 87
    N('b1-leisure-training', 'das', 'Training', 'die Trainings', 'тренировка', 'training, practice',
      ex('Das [[Training]] fängt dienstags um sieben an.', 'Тренировка по вторникам начинается в семь.', 'Training starts at seven on Tuesdays.')),
    // Wortliste p. 21
    N('b1-leisure-ausflug', 'der', 'Ausflug', 'die Ausflüge', 'поездка, экскурсия (на день)', 'trip, outing',
      ex('Am Sonntag machen wir einen [[Ausflug]] an den See.', 'В воскресенье мы едем на озеро.', 'On Sunday we’re going on a trip to the lake.')),
    // Wortliste p. 79
    N('b1-leisure-sehenswuerdigkeit', 'die', 'Sehenswürdigkeit', 'die Sehenswürdigkeiten', 'достопримечательность', 'sight, place of interest',
      ex('Die Burg ist die bekannteste [[Sehenswürdigkeit]] der Stadt.', 'Крепость — самая известная достопримечательность города.', 'The castle is the town’s best-known sight.')),
    // Wortliste p. 37
    N('b1-leisure-erlebnis', 'das', 'Erlebnis', 'die Erlebnisse', 'событие, впечатление (пережитое)', 'experience (an event you lived through)',
      ex('Das Konzert im Regen war ein echtes [[Erlebnis]].', 'Концерт под дождём стал настоящим событием.', 'The concert in the rain was a real experience.'),
      ['Erlebnis — то, что пережил. Опыт как знания и навыки — die Erfahrung.', 'Erlebnis is something you lived through. Experience as knowledge and skill is die Erfahrung.']),
    // Wortliste p. 81
    A('b1-leisure-spannend', 'adj', 'spannend', 'захватывающий, интересный', 'exciting, gripping',
      ex('Das Buch war so [[spannend]], dass ich es in einer Nacht gelesen habe.', 'Книга была такой захватывающей, что я прочитал её за ночь.', 'The book was so gripping that I read it in one night.')),
    // Wortliste: only the adjective „entspannend“, p. 36
    V('b1-leisure-entspannen', 'sich entspannen', ['entspannt sich', 'entspannte sich', 'hat sich entspannt'], null, 'расслабляться, отдыхать', 'to relax',
      ex('Am Wochenende will ich mich einfach nur [[entspannen]].', 'На выходных я хочу просто расслабиться.', 'At the weekend I just want to relax.')),
    // Wortliste p. 92
    N('b1-leisure-vergnuegen', 'das', 'Vergnügen', null, 'удовольствие', 'pleasure, fun',
      ex('Viel [[Vergnügen]] beim Konzert!', 'Приятно провести время на концерте!', 'Have fun at the concert!'))
  ]);

  reg('society', [
    // Wortliste p. 12
    N('b1-society-regierung', 'die', 'Regierung', 'die Regierungen', 'правительство', 'government',
      ex('Die [[Regierung]] plant ein neues Gesetz zum Wohnungsbau.', 'Правительство планирует новый закон о жилищном строительстве.', 'The government is planning a new housing law.')),
    // Wortliste p. 12
    N('b1-society-partei', 'die', 'Partei', 'die Parteien', 'партия', 'party (political)',
      ex('Welche [[Partei]] hat die Wahl gewonnen?', 'Какая партия выиграла выборы?', 'Which party won the election?')),
    // Wortliste p. 29
    N('b1-society-buerger', 'der', 'Bürger', 'die Bürger', 'гражданин; житель', 'citizen',
      ex('Die [[Bürger]] können online über das Projekt abstimmen.', 'Жители могут проголосовать за проект онлайн.', 'Citizens can vote on the project online.')),
    // Wortliste p. 83
    N('b1-society-steuer', 'die', 'Steuer', 'die Steuern', 'налог', 'tax',
      ex('Von meinem Gehalt gehen fast 30 Prozent an [[Steuern]] ab.', 'С моей зарплаты почти 30 процентов уходит на налоги.', 'Almost 30 per cent of my salary goes on tax.'),
      ['Омоним: das Steuer — руль.', 'Homonym: das Steuer means steering wheel.']),
    // Wortliste p. 26
    N('b1-society-bevoelkerung', 'die', 'Bevölkerung', null, 'население', 'population',
      ex('Die [[Bevölkerung]] der Stadt ist in zehn Jahren stark gewachsen.', 'За десять лет население города сильно выросло.', 'The town’s population has grown a lot in ten years.')),
    // Wortliste p. 100
    N('b1-society-zeugnis', 'das', 'Zeugnis', 'die Zeugnisse', 'табель, аттестат; характеристика', 'school report; certificate',
      ex('Für die Bewerbung brauche ich eine Kopie meines [[Zeugnisses]].', 'Для заявки мне нужна копия аттестата.', 'I need a copy of my certificate for the application.')),
    // Wortliste p. 21
    N('b1-society-ausbildung', 'die', 'Ausbildung', 'die Ausbildungen', 'профессиональное обучение', 'vocational training',
      ex('Nach der Schule macht er eine [[Ausbildung]] als Elektriker.', 'После школы он учится на электрика.', 'After school he’s training as an electrician.'),
      ['Ausbildung — дуальное обучение профессии (фирма + профшкола), не вуз (Studium).', 'Ausbildung is vocational training (company + vocational school), not university (Studium).']),
    // Wortliste p. 84
    N('b1-society-studium', 'das', 'Studium', 'die Studien', 'учёба в вузе', 'university studies',
      ex('Während des [[Studiums]] habe ich in einem Café gejobbt.', 'Во время учёбы в университете я подрабатывал в кафе.', 'I had a job in a café while I was at university.'))
  ]);

  reg('travel', [
    // Wortliste p. 16
    N('b1-travel-abfahrt', 'die', 'Abfahrt', 'die Abfahrten', 'отправление', 'departure',
      ex('Die [[Abfahrt]] verschiebt sich um zehn Minuten.', 'Отправление переносится на десять минут.', 'Departure is delayed by ten minutes.')),
    // Wortliste p. 75
    N('b1-travel-rueckfahrt', 'die', 'Rückfahrt', 'die Rückfahrten', 'обратная поездка', 'return journey',
      ex('Für die [[Rückfahrt]] habe ich noch kein Ticket.', 'На обратную дорогу у меня ещё нет билета.', 'I haven’t got a ticket for the journey back yet.')),
    // Wortliste p. 32
    N('b1-travel-durchsage', 'die', 'Durchsage', 'die Durchsagen', 'объявление (по громкой связи)', 'announcement',
      ex('Ich habe die [[Durchsage]] am Bahnsteig nicht verstanden.', 'Я не понял объявление на платформе.', 'I didn’t understand the announcement on the platform.')),
    // Wortliste p. 76
    N('b1-travel-schalter', 'der', 'Schalter', 'die Schalter', 'окошко, стойка (кассы, регистрации); выключатель', 'counter, desk; switch',
      ex('Die Tickets bekommen Sie am [[Schalter]] in der Halle.', 'Билеты можно купить в кассе в зале.', 'You can get tickets at the counter in the hall.')),
    // Wortliste p. 34
    V('b1-travel-einsteigen', 'einsteigen', ['steigt ein', 'stieg ein', 'ist eingestiegen'], 'in + Akk.', 'садиться (в транспорт)', 'to get on, to board',
      ex('Bitte [[steigen]] Sie [[ein]], die Türen schließen.', 'Пожалуйста, заходите, двери закрываются.', 'Please board, the doors are closing.')),
    // Wortliste: in examples (p. 50, 83); headword „einsteigen“ p. 34
    V('b1-travel-aussteigen', 'aussteigen', ['steigt aus', 'stieg aus', 'ist ausgestiegen'], 'aus + Dat.', 'выходить (из транспорта)', 'to get off, to get out',
      ex('Wir müssen an der nächsten Haltestelle [[aussteigen]].', 'Нам выходить на следующей остановке.', 'We have to get off at the next stop.')),
    // Wortliste p. 83
    N('b1-travel-stau', 'der', 'Stau', 'die Staus', 'пробка (на дороге)', 'traffic jam',
      ex('Wegen eines Unfalls standen wir eine Stunde im [[Stau]].', 'Из-за аварии мы час стояли в пробке.', 'Because of an accident we were stuck in traffic for an hour.')),
    // Wortliste p. 47
    N('b1-travel-grenze', 'die', 'Grenze', 'die Grenzen', 'граница', 'border',
      ex('An der [[Grenze]] wurden unsere Pässe kontrolliert.', 'На границе проверили наши паспорта.', 'Our passports were checked at the border.'))
  ]);

  reg('authorities', [
    // Wortliste p. 18
    N('b1-auth-anmeldung', 'die', 'Anmeldung', 'die Anmeldungen', 'регистрация (по месту жительства, на курс)', 'registration',
      ex('Für die [[Anmeldung]] beim Bürgeramt brauchen Sie einen Termin.', 'Для регистрации в бюргерамте нужна запись.', 'You need an appointment to register at the citizens’ office.')),
    // not in the Goethe B1 Wortliste — B1+ everyday supplement
    N('b1-auth-staatsangehoerigkeit', 'die', 'Staatsangehörigkeit', 'die Staatsangehörigkeiten', 'гражданство', 'nationality, citizenship',
      ex('Bitte tragen Sie hier Ihre [[Staatsangehörigkeit]] ein.', 'Пожалуйста, укажите здесь своё гражданство.', 'Please enter your nationality here.')),
    // not in the Goethe B1 Wortliste — B1+ everyday supplement
    N('b1-auth-bescheinigung', 'die', 'Bescheinigung', 'die Bescheinigungen', 'справка, подтверждение', 'certificate, confirmation (document)',
      ex('Der Arbeitgeber hat mir eine [[Bescheinigung]] über mein Gehalt ausgestellt.', 'Работодатель выдал мне справку о зарплате.', 'My employer gave me a certificate stating my salary.')),
    // Wortliste p. 99
    N('b1-auth-wohnsitz', 'der', 'Wohnsitz', 'die Wohnsitze', 'место жительства', 'place of residence',
      ex('Mein [[Wohnsitz]] ist seit Mai in Leipzig.', 'С мая моё место жительства — Лейпциг.', 'My place of residence has been Leipzig since May.')),
    // not in the Goethe B1 Wortliste — B1+ everyday supplement
    N('b1-auth-sachbearbeiter', 'der', 'Sachbearbeiter', 'die Sachbearbeiter', 'сотрудник, ведущий дело (в ведомстве)', 'case officer, clerk',
      ex('Die [[Sachbearbeiterin]] hat mir alles genau erklärt.', 'Сотрудница всё мне подробно объяснила.', 'The case officer explained everything to me carefully.'),
      ['Женская форма — die Sachbearbeiterin.', 'Female form: die Sachbearbeiterin.']),
    // Wortliste: only in an example under „die Erklärung“, p. 37
    N('b1-auth-steuererklaerung', 'die', 'Steuererklärung', 'die Steuererklärungen', 'налоговая декларация', 'tax return',
      ex('Bis Ende Juli muss ich meine [[Steuererklärung]] abgeben.', 'До конца июля мне нужно подать налоговую декларацию.', 'I have to submit my tax return by the end of July.')),
    // Wortliste p. 92
    V('b1-auth-verlaengern', 'verlängern', ['verlängert', 'verlängerte', 'hat verlängert'], '+ Akk.', 'продлевать', 'to extend, to renew',
      ex('Ich muss meinen Pass bald [[verlängern]] lassen.', 'Мне скоро нужно продлить паспорт.', 'I need to get my passport renewed soon.')),
    // Wortliste p. 26
    V('b1-auth-bestaetigen', 'bestätigen', ['bestätigt', 'bestätigte', 'hat bestätigt'], '+ Akk.', 'подтверждать', 'to confirm',
      ex('Bitte [[bestätigen]] Sie den Termin per E-Mail.', 'Пожалуйста, подтвердите запись по электронной почте.', 'Please confirm the appointment by email.'))
  ]);

  reg('work', [
    // Wortliste p. 59
    N('b1-work-lebenslauf', 'der', 'Lebenslauf', 'die Lebensläufe', 'резюме, автобиография (CV)', 'CV, résumé',
      ex('Schicken Sie uns bitte Ihren [[Lebenslauf]] und Ihre Zeugnisse.', 'Пришлите нам, пожалуйста, резюме и аттестаты.', 'Please send us your CV and certificates.')),
    // Wortliste p. 86
    N('b1-work-teilzeit', 'die', 'Teilzeit', null, 'неполный рабочий день', 'part-time (work)',
      ex('Seit der Geburt meiner Tochter arbeite ich in [[Teilzeit]].', 'После рождения дочери я работаю неполный день.', 'I’ve been working part-time since my daughter was born.')),
    // Wortliste p. 94
    N('b1-work-vollzeit', 'die', 'Vollzeit', null, 'полный рабочий день', 'full-time (work)',
      ex('Die Stelle ist in [[Vollzeit]], 40 Stunden pro Woche.', 'Должность на полный день, 40 часов в неделю.', 'The job is full-time, 40 hours a week.')),
    // Wortliste p. 39
    N('b1-work-feierabend', 'der', 'Feierabend', null, 'конец рабочего дня, свободное время после работы', 'end of the working day; evening off',
      ex('Nach [[Feierabend]] gehe ich oft noch joggen.', 'После работы я часто ещё иду на пробежку.', 'After work I often go for a run.'),
      ['«Schönen Feierabend!» — пожелание хорошего вечера коллегам.', '“Schönen Feierabend!” — wishing colleagues a nice evening after work.']),
    // Wortliste p. 58
    N('b1-work-kunde', 'der', 'Kunde', 'die Kunden', 'клиент, покупатель', 'customer, client',
      ex('Der [[Kunde]] möchte das Angebot bis Freitag haben.', 'Клиенту нужно предложение до пятницы.', 'The customer wants the quote by Friday.'),
      ['n-склонение: den Kunden, dem Kunden. Женская форма — die Kundin.', 'n-declension: den Kunden, dem Kunden. Female form: die Kundin.']),
    // Wortliste p. 61
    N('b1-work-lohn', 'der', 'Lohn', 'die Löhne', 'заработная плата (обычно почасовая)', 'wage(s), pay',
      ex('Der [[Lohn]] kommt immer am Monatsende aufs Konto.', 'Зарплата всегда приходит на счёт в конце месяца.', 'The wages always arrive in my account at the end of the month.'),
      ['Lohn — чаще почасовая оплата рабочих, Gehalt — месячный оклад служащих.', 'Lohn is usually hourly pay for workers; Gehalt is a monthly salary for employees.'])
  ]);
})();
