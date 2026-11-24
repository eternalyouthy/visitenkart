/* ENGLISH · Expressions → Slang: American street slang, much of it from African American English (AAE) and
 * hip-hop, plus swearing (18+). Categories: slang-crew / slang-react / slang-people / slang-life / slang-rude
 * (GT.EXP_SECTIONS in js/core.js). Each card: gloss ru + de, three examples, note, origin and where { ru, de }.
 * register 'slang', or 'vulgar' for swear words (the card shows a warning). Examples written for ETRNL. */
(function () {
  'use strict';
  function S(id, topic, t, ru, de, exs, note, origin, where, reg) {
    return { id: 'en:slang:' + id, topic: topic, type: 'chunk', pos: 'chunk', register: reg || 'slang', learnable: true,
      t: t, ru: ru, de: de, examples: exs.map(function (e) { return { t: e[0], ru: e[1], de: e[2] }; }),
      note: { ru: note[0], de: note[1] }, origin: { ru: origin[0], de: origin[1] }, where: { ru: where[0], de: where[1] } };
  }
  var V = 'vulgar';
  GT.register({ tab: 'expressions', type: 'chunk', items: [
    // ---- Greetings & Crew ----
    S('whats-good', 'slang-crew', 'What’s good?', 'как оно?, чё как?', 'Was geht?', [
      ['Yo, [[what’s good]]? Haven’t seen you in a minute.', 'Йоу, чё как? Сто лет тебя не видел.', 'Yo, was geht? Hab dich ewig nicht gesehen.'],
      ['[[What’s good]] for tonight? Any parties?', 'Что сегодня намечается? Тусовки есть?', 'Was geht heute Abend? Irgendwelche Partys?'],
      ['— [[What’s good]], bro? — Nothing much, you?', '— Как оно, бро? — Да ничего, а ты?', '— Was geht, Bro? — Nicht viel, und bei dir?']],
      ['Приветствие и вопрос «что интересного». Варианты: «What up?», «Wassup?», «Sup?».', 'Begrüßung und Frage „was ist los?“. Varianten: „What up?“, „Wassup?“, „Sup?“.'],
      ['Из афроамериканского английского (AAE) Нью-Йорка 1990-х; мировым стало через хип-хоп.', 'Aus dem afroamerikanischen Englisch (AAE) im New York der 1990er; weltweit bekannt durch Hip-Hop.'],
      ['США, особенно Северо-Восток; молодёжь по всему миру.', 'USA, besonders der Nordosten; Jugendliche weltweit.']),
    S('homie', 'slang-crew', 'homie', 'кореш, близкий друг', 'Kumpel, Homie', [
      ['This is my [[homie]] from the block.', 'Это мой кореш с района.', 'Das ist mein Kumpel aus dem Viertel.'],
      ['My [[homies]] always got my back.', 'Мои кореша всегда за меня.', 'Meine Jungs halten immer zu mir.'],
      ['Thanks, [[homie]], I owe you one.', 'Спасибо, кореш, я твой должник.', 'Danke, Homie, ich schulde dir was.']],
      ['Близкий друг, «свой». Женский вариант — «homegirl».', 'Enger Freund. Weiblich: „homegirl“.'],
      ['От «homeboy» — «парень из родного района»; слово известно с 1940-х в чикано- и афроамериканских общинах, массовым стало с рэпом 1990-х.', 'Von „homeboy“ — „Junge aus der Heimat“; seit den 1940ern in Chicano- und afroamerikanischen Communities, durch Rap der 1990er massenhaft.'],
      ['Калифорния, вся США; немного «ретро», но жив.', 'Kalifornien, ganz USA; etwas retro, aber lebendig.']),
    S('fam', 'slang-crew', 'fam', 'братва, свои (о близких друзьях)', 'Familie, Bruder (enge Freunde)', [
      ['Thanks for pulling up, [[fam]].', 'Спасибо, что подтянулись, братва.', 'Danke, dass ihr gekommen seid, Leute.'],
      ['You good, [[fam]]?', 'Ты как, брат?', 'Alles gut, Bruder?'],
      ['These guys are [[fam]], they’re cool.', 'Эти ребята свои, они нормальные.', 'Die Jungs gehören zur Familie, die sind okay.']],
      ['Друзья, которые как семья; обращение к одному или группе.', 'Freunde, die wie Familie sind; Anrede an eine oder mehrere Personen.'],
      ['Сокращение от «family». Популярно с 2000-х в AAE, затем в лондонском сленге (MLE).', 'Kurz für „family“. Seit den 2000ern in AAE beliebt, dann auch im Londoner Slang (MLE).'],
      ['США, Лондон, соцсети.', 'USA, London, soziale Medien.']),
    S('bruh', 'slang-crew', 'bruh', 'брат, чувак; ну ты чего (досада)', 'Bruder, Alter (auch genervt)', [
      ['[[Bruh]], you forgot the keys again?', 'Чувак, ты опять забыл ключи?', 'Alter, du hast schon wieder die Schlüssel vergessen?'],
      ['[[Bruuuh]]… that’s not funny.', 'Ну бра-ат… это не смешно.', 'Alteeer… das ist nicht witzig.'],
      ['What’s up, [[bruh]]?', 'Как дела, брат?', 'Was geht, Bruder?']],
      ['С протяжной интонацией — досада или неверие; это ещё и мем.', 'Gedehnt gesprochen — Frust oder Unglauben; auch ein Meme.'],
      ['Южноамериканский AAE-вариант «brother/bro». С 2010-х — интернет-мем «bruh moment».', 'Südstaaten-AAE-Variante von „brother/bro“. Seit den 2010ern Internetmeme „bruh moment“.'],
      ['Везде; важно: слово на «n», которое афроамериканцы говорят между собой, НЕ для чужих — за него могут реально избить.', 'Überall; wichtig: Das N-Wort, das Schwarze untereinander benutzen, ist NICHT für Außenstehende — dafür kann man wirklich verprügelt werden.']),
    S('dawg', 'slang-crew', 'dawg', 'братан, друг', 'Digga, Alter', [
      ['You good, [[dawg]]?', 'Ты в порядке, братан?', 'Alles gut, Digga?'],
      ['[[Dawg]], that was crazy!', 'Братан, это было безумие!', 'Digga, das war krass!'],
      ['Me and my [[dawgs]] going out tonight.', 'Мы с пацанами сегодня идём гулять.', 'Ich und meine Jungs gehen heute aus.']],
      ['Дружеское мужское обращение.', 'Freundschaftliche Anrede unter Männern.'],
      ['Вариант «dog» — «верный пёс, друг». В 1990-е популяризирован Snoop Dogg и шоу «American Idol» (Randy Jackson: «Yo, dawg»).', 'Variante von „dog“ — treuer Freund. In den 1990ern durch Snoop Dogg und „American Idol“ (Randy Jackson: „Yo, dawg“) bekannt.'],
      ['США, хип-хоп.', 'USA, Hip-Hop.']),
    S('squad', 'slang-crew', 'the squad', 'наша банда, компания друзей', 'die Crew, die Clique', [
      ['The whole [[squad]] is coming tonight.', 'Вся наша банда придёт сегодня.', 'Die ganze Crew kommt heute Abend.'],
      ['[[Squad]] goals!', 'Вот это компания!', 'Crew-Ziele!'],
      ['She rolled in with her [[squad]].', 'Она пришла со своей компанией.', 'Sie kam mit ihrer Clique.']],
      ['Компания друзей. «Squad goals» — «идеальная компания».', 'Freundesgruppe. „Squad goals“ — „die perfekte Clique“.'],
      ['Военное слово «отделение»; в хип-хопе 1990-х — «своя команда».', 'Militärisch „Trupp“; im Hip-Hop der 1990er „die eigene Crew“.'],
      ['Повсеместно у молодёжи.', 'Überall bei Jugendlichen.']),
    S('my-guy', 'slang-crew', 'my guy', 'мой человек, братан', 'mein Bester, mein Freund', [
      ['[[My guy]]! Long time!', 'Братан! Сколько лет!', 'Mein Bester! Lange nicht gesehen!'],
      ['He’s [[my guy]], I trust him.', 'Он мой человек, я ему доверяю.', 'Er ist mein Mann, ich vertraue ihm.'],
      ['Thanks, [[my guy]].', 'Спасибо, дружище.', 'Danke, mein Freund.']],
      ['Тёплое, нейтральное обращение; подходит и для незнакомца в дружелюбном тоне.', 'Warme, neutrale Anrede; auch für Fremde in freundlichem Ton.'],
      ['Обычные слова, ставшие формулой в AAE и спортивной культуре 2010-х.', 'Gewöhnliche Wörter, die im AAE und in der Sportkultur der 2010er zur Formel wurden.'],
      ['Вся США, спортзалы, баскетбол.', 'Ganz USA, Fitnessstudios, Basketball.']),

    // ---- Reactions & Hype ----
    S('bet', 'slang-react', 'Bet.', 'Договорились., Замётано.', 'Abgemacht., Geht klar.', [
      ['— Meet at six? — [[Bet]].', '— Встречаемся в шесть? — Замётано.', '— Treffen um sechs? — Geht klar.'],
      ['You think you can beat me? [[Bet]].', 'Думаешь, обыграешь меня? Ну давай.', 'Du glaubst, du schlägst mich? Wetten.'],
      ['[[Bet]], I’ll bring the snacks.', 'Договорились, снеки с меня.', 'Abgemacht, ich bring die Snacks.']],
      ['Короткое «да, договорились». Иронично — «ну-ну, посмотрим».', 'Kurzes „ja, abgemacht“. Ironisch — „na, mal sehen“.'],
      ['От «You bet!» — «можешь поспорить». В AAE сократилось до «Bet» (1990-е), а через Twitter стало массовым.', 'Von „You bet!“. Im AAE zu „Bet“ verkürzt (1990er), über Twitter massentauglich.'],
      ['Молодёжь США, чаты.', 'US-Jugend, Chats.']),
    S('no-cap', 'slang-react', 'no cap', 'без шуток, отвечаю', 'ohne Scheiß, ich schwör', [
      ['That was the best burger I ever had, [[no cap]].', 'Это был лучший бургер в моей жизни, отвечаю.', 'Das war der beste Burger meines Lebens, ich schwör.'],
      ['Stop [[capping]], you weren’t there.', 'Хватит врать, тебя там не было.', 'Hör auf zu lügen, du warst nicht da.'],
      ['[[No cap]], I’m tired as hell.', 'Без шуток, я жутко устал.', 'Ohne Scheiß, ich bin total fertig.']],
      ['«Cap» = враньё. «That’s cap» — «это враньё», эмодзи 🧢.', '„Cap“ = Lüge. „That’s cap“ — „das ist gelogen“, Emoji 🧢.'],
      ['«To cap» в AAE с начала XX в. значило «хвастаться, преувеличивать». Атлантский рэп 2010-х (Future, Young Thug) сделал «no cap» мировым.', '„To cap“ hieß im AAE seit dem frühen 20. Jh. „angeben, übertreiben“. Atlanta-Rap der 2010er (Future, Young Thug) machte „no cap“ weltweit bekannt.'],
      ['Gen Z, TikTok, рэп.', 'Gen Z, TikTok, Rap.']),
    S('lit', 'slang-react', 'It’s lit!', 'Это огонь!, Тут жара!', 'Der Hammer!, Hier geht’s ab!', [
      ['The party last night [[was lit]]!', 'Вечеринка вчера была огонь!', 'Die Party gestern war der Hammer!'],
      ['This song is [[lit]].', 'Этот трек — огонь.', 'Der Song ist mega.'],
      ['It’s about to get [[lit]] in here.', 'Сейчас тут начнётся жара.', 'Gleich geht’s hier richtig ab.']],
      ['О вечеринке, концерте, атмосфере.', 'Über Party, Konzert, Stimmung.'],
      ['«Lit» — «зажжённый»; с начала XX в. значило «пьяный». В 2010-е, через трэп, — «круто, весело».', '„Lit“ — „angezündet“; seit dem frühen 20. Jh. „betrunken“. In den 2010ern durch Trap: „geil, lustig“.'],
      ['Молодёжь; к 2020-м слегка устарело.', 'Jugend; seit den 2020ern etwas veraltet.']),
    S('sheesh', 'slang-react', 'Sheesh!', 'Ого-го!, Ничего себе!', 'Boah!, Krass!', [
      ['[[Sheesh]], look at that car!', 'Ого-го, ты глянь на эту тачку!', 'Boah, guck dir das Auto an!'],
      ['[[Sheeeesh]], you look good!', 'Ничего себе, отлично выглядишь!', 'Boah, siehst du gut aus!'],
      ['[[Sheesh]], calm down.', 'Ну ёлки, успокойся.', 'Mann, beruhig dich.']],
      ['Протяжное — восхищение; короткое — досада.', 'Gedehnt — Bewunderung; kurz — Ärger.'],
      ['Эвфемизм от «Jesus» (1940-е). Новая жизнь — TikTok-мем 2021 г.', 'Euphemismus für „Jesus“ (1940er). Neues Leben als TikTok-Meme 2021.'],
      ['TikTok, школы, спорт.', 'TikTok, Schulen, Sport.']),
    S('bussin', 'slang-react', 'bussin’', 'офигенно вкусно, огонь', 'mega lecker, der Hammer', [
      ['Your mom’s mac and cheese is [[bussin’]].', 'Мак-энд-чиз твоей мамы — просто огонь.', 'Die Mac and Cheese von deiner Mama sind mega lecker.'],
      ['This pizza is [[bussin’]] fr.', 'Эта пицца реально огонь.', 'Die Pizza ist echt der Hammer.'],
      ['Is it good? — [[Bussin’]]!', '— Вкусно? — Обалдеть!', '— Schmeckt’s? — Mega!']],
      ['В основном о еде. «fr» = «for real».', 'Meist über Essen. „fr“ = „for real“.'],
      ['Из AAE: «bust» — «взрываться» (вкусом). Распространился через TikTok около 2020 г.', 'Aus dem AAE: „bust“ — explodieren (vor Geschmack). Über TikTok um 2020 verbreitet.'],
      ['Gen Z, фуд-блоги.', 'Gen Z, Food-Blogs.']),
    S('deadass', 'slang-react', 'deadass', 'серьёзно, на полном серьёзе', 'im Ernst, ohne Witz', [
      ['I’m [[deadass]] moving to LA next month.', 'Я на полном серьёзе переезжаю в Лос-Анджелес.', 'Ich zieh im Ernst nach LA.'],
      ['[[Deadass]]?', 'Серьёзно?', 'Im Ernst?'],
      ['That’s [[deadass]] the worst movie ever.', 'Это реально худший фильм в мире.', 'Das ist ohne Witz der schlechteste Film aller Zeiten.']],
      ['Грубоватое, только между друзьями.', 'Etwas derb, nur unter Freunden.'],
      ['Нью-йоркский AAE (Бруклин, Бронкс) 1990–2000-х.', 'New Yorker AAE (Brooklyn, Bronx) der 1990er–2000er.'],
      ['Нью-Йорк и онлайн.', 'New York und online.']),
    S('facts', 'slang-react', 'Facts.', 'Факт., Так и есть.', 'Fakt., Stimmt genau.', [
      ['— Mondays suck. — [[Facts]].', '— Понедельники — отстой. — Факт.', '— Montage sind scheiße. — Fakt.'],
      ['[[Facts]], bro, I said the same thing.', 'Точно, брат, я то же самое говорил.', 'Fakt, Bro, hab ich auch gesagt.'],
      ['That’s [[facts]].', 'Это правда.', 'Das ist Fakt.']],
      ['Полное согласие.', 'Volle Zustimmung.'],
      ['AAE и хип-хоп 2000-х: «спитить факты» = говорить правду.', 'AAE und Hip-Hop der 2000er: „spitting facts“ = die Wahrheit sagen.'],
      ['Везде у молодёжи.', 'Überall bei Jugendlichen.']),
    S('say-less', 'slang-react', 'Say less.', 'Понял, не продолжай., Уже бегу.', 'Sag nichts mehr., Bin dabei.', [
      ['— There’s free pizza. — [[Say less]].', '— Там бесплатная пицца. — Уже бегу.', '— Es gibt Gratis-Pizza. — Bin dabei.'],
      ['[[Say less]], I got you.', 'Понял, я всё сделаю.', 'Alles klar, ich regel das.'],
      ['You need a ride? [[Say less]].', 'Подвезти? Без вопросов.', 'Brauchst du ’ne Fahrt? Kein Ding.']],
      ['«Больше слов не надо, я в деле».', '„Mehr musst du nicht sagen, ich bin dabei.“'],
      ['AAE 2010-х, через рэп и Twitter.', 'AAE der 2010er, über Rap und Twitter.'],
      ['Молодёжь США.', 'US-Jugend.']),

    // ---- People & Attitude ----
    S('salty', 'slang-people', 'salty', 'обиженный, злой (из-за мелочи)', 'eingeschnappt, angepisst', [
      ['He’s still [[salty]] about losing the game.', 'Он всё ещё злится, что проиграл.', 'Er ist immer noch angepisst, weil er verloren hat.'],
      ['Why you so [[salty]]?', 'Чего ты такой надутый?', 'Warum bist du so eingeschnappt?'],
      ['Don’t get [[salty]], it was a joke.', 'Не обижайся, это шутка.', 'Sei nicht eingeschnappt, war nur ein Witz.']],
      ['Мелкая обида, зависть.', 'Kleiner Ärger, Neid.'],
      ['Моряцкий сленг XIX в. («salty» — грубый, резкий); в AAE 1930-х — «злой». Геймеры 2010-х сделали массовым.', 'Seemannsslang des 19. Jh. („salty“ — rau); im AAE der 1930er „wütend“. Gamer der 2010er machten es populär.'],
      ['Геймеры, спорт, школы.', 'Gamer, Sport, Schulen.']),
    S('extra', 'slang-people', 'extra', 'слишком, перебор (о поведении)', 'too much, übertrieben', [
      ['A limo for a picnic? That’s so [[extra]].', 'Лимузин на пикник? Это перебор.', 'Eine Limo fürs Picknick? Total übertrieben.'],
      ['She’s always [[extra]] on Instagram.', 'В инстаграме она вечно перебарщивает.', 'Auf Instagram ist sie immer drüber.'],
      ['Don’t be [[extra]], just say sorry.', 'Не устраивай драму, просто извинись.', 'Mach kein Drama, entschuldige dich einfach.']],
      ['Слишком драматично или напоказ.', 'Zu dramatisch oder zu sehr auf Show.'],
      ['AAE и ЛГБТ-сленг 2000-х; массовым стало в 2010-е.', 'AAE- und LGBTQ-Slang der 2000er; massenhaft in den 2010ern.'],
      ['Повсеместно.', 'Überall.']),
    S('flex', 'slang-people', 'flex', 'понтоваться, хвастаться', 'angeben, flexen', [
      ['He’s always [[flexing]] his new sneakers.', 'Он вечно понтуется новыми кроссами.', 'Er flext ständig mit seinen Sneakers.'],
      ['Weird [[flex]], but okay.', 'Странный повод хвастаться, но ладно.', 'Seltsamer Flex, aber okay.'],
      ['Stop [[flexing]], we know you’re rich.', 'Хватит понтоваться, мы знаем, что ты богатый.', 'Hör auf zu flexen, wir wissen, dass du reich bist.']],
      ['Хвастаться. Сущ. «a flex» — повод для хвастовства.', 'Angeben. Nomen „a flex“ — Grund zum Angeben.'],
      ['«Напрягать мышцы» напоказ; в хип-хопе 1990-х — показывать богатство.', '„Muskeln anspannen“; im Hip-Hop der 1990er — Reichtum zeigen.'],
      ['Рэп, Instagram.', 'Rap, Instagram.']),
    S('bougie', 'slang-people', 'bougie', 'пафосный, косит под богатого', 'snobistisch, schickimicki', [
      ['She only drinks oat-milk lattes, so [[bougie]].', 'Пьёт только латте на овсяном, такая пафосная.', 'Sie trinkt nur Hafermilch-Latte, so schickimicki.'],
      ['This restaurant is too [[bougie]] for me.', 'Этот ресторан для меня слишком пафосный.', 'Das Restaurant ist mir zu schick.'],
      ['Look at you, all [[bougie]] in your new coat.', 'Гляньте, какой важный в новом пальто.', 'Guck dich an, ganz fein im neuen Mantel.']],
      ['Шутливо, без злобы.', 'Scherzhaft, ohne Bosheit.'],
      ['От «bourgeois»; в AAE 1960-х — о чернокожем среднем классе, «отрывающемся от корней». Песня Migos «Bad and Boujee» (2016) вернула моду.', 'Von „bourgeois“; im AAE der 1960er über die schwarze Mittelschicht. Migos’ „Bad and Boujee“ (2016) machte es wieder populär.'],
      ['Повсюду.', 'Überall.']),
    S('og', 'slang-people', 'OG', 'старая гвардия; легенда', 'Urgestein, Legende', [
      ['My grandpa is the [[OG]] of this block.', 'Мой дед — легенда района.', 'Mein Opa ist das Urgestein im Viertel.'],
      ['She’s an [[OG]] fan, she’s been here since day one.', 'Она фанатка с самого начала.', 'Sie ist Fan der ersten Stunde.'],
      ['This is the [[OG]] recipe.', 'Это оригинальный рецепт.', 'Das ist das Originalrezept.']],
      ['Тот, кто был первым или давно в теме; «оригинальный».', 'Jemand, der zuerst da war; „original“.'],
      ['«Original Gangster» — банды Лос-Анджелеса 1980-х; через рэп (Ice-T, «O.G.», 1991) стало уважительным словом.', '„Original Gangster“ — Gangs in L.A. der 1980er; über Rap (Ice-T, „O.G.“, 1991) zum Ehrentitel.'],
      ['Повсюду.', 'Überall.']),
    S('throw-shade', 'slang-people', 'throw shade', 'язвить, исподтишка поддеть', 'jemanden dissen, sticheln', [
      ['Was that a compliment or are you [[throwing shade]]?', 'Это комплимент или ты подкалываешь?', 'War das ein Kompliment oder stichelst du?'],
      ['She [[threw]] so much [[shade]] at him.', 'Она его так красиво уделала.', 'Sie hat ihn so gedisst.'],
      ['No [[shade]], but your haircut is weird.', 'Без обид, но стрижка странная.', 'Nichts für ungut, aber dein Haarschnitt ist komisch.']],
      ['Тонкое, но заметное презрение.', 'Feine, aber spürbare Verachtung.'],
      ['Из афроамериканской и латиноамериканской ЛГБТ-культуры балов Нью-Йорка 1980-х (фильм «Paris Is Burning», 1990).', 'Aus der schwarzen und Latino-LGBTQ-Ballkultur New Yorks der 1980er (Film „Paris Is Burning“, 1990).'],
      ['Соцсети, шоу, офисные сплетни.', 'Soziale Medien, Shows, Büroklatsch.']),
    S('sus', 'slang-people', 'sus', 'подозрительный, мутный', 'verdächtig, sus', [
      ['That guy is acting kinda [[sus]].', 'Этот тип ведёт себя мутно.', 'Der Typ verhält sich irgendwie verdächtig.'],
      ['Red is [[sus]]!', 'Красный — подозрительный!', 'Rot ist sus!'],
      ['Why you whispering? That’s [[sus]].', 'Чего шепчешься? Подозрительно.', 'Warum flüsterst du? Das ist sus.']],
      ['Сокращение от «suspicious».', 'Kurz für „suspicious“.'],
      ['Полицейский жаргон («suspect»), в AAE с 1990-х; мировым стало через игру «Among Us» (2020).', 'Polizeijargon („suspect“), im AAE seit den 1990ern; weltweit durch das Spiel „Among Us“ (2020).'],
      ['Геймеры, школы, соцсети.', 'Gamer, Schulen, soziale Medien.']),
    S('goat', 'slang-people', 'the GOAT', 'величайший всех времён', 'der Größte aller Zeiten', [
      ['Jordan is [[the GOAT]].', 'Джордан — величайший всех времён.', 'Jordan ist der Größte aller Zeiten.'],
      ['You brought me coffee? You’re [[the GOAT]].', 'Ты принёс мне кофе? Ты лучший.', 'Du hast mir Kaffee gebracht? Du bist der Beste.'],
      ['Who’s [[the GOAT]] of rap?', 'Кто величайший в рэпе?', 'Wer ist der Größte im Rap?']],
      ['Greatest Of All Time. Эмодзи 🐐.', 'Greatest Of All Time. Emoji 🐐.'],
      ['Мухаммед Али называл себя «the Greatest»; аббревиатура закрепилась после альбома LL Cool J «G.O.A.T.» (2000).', 'Muhammad Ali nannte sich „the Greatest“; die Abkürzung setzte sich nach LL Cool Js Album „G.O.A.T.“ (2000) durch.'],
      ['Спорт, рэп, повседневная похвала.', 'Sport, Rap, Alltagslob.']),

    // ---- Money, Chilling & Street ----
    S('bread', 'slang-life', 'bread', 'бабки, бабло', 'Kohle, Knete', [
      ['I gotta work this weekend, I need the [[bread]].', 'В выходные надо работать, мне нужны бабки.', 'Ich muss am Wochenende arbeiten, ich brauch die Kohle.'],
      ['He’s making that [[bread]] now.', 'Он теперь хорошо зарабатывает.', 'Der verdient jetzt richtig Kohle.'],
      ['Get that [[bread]]!', 'Зарабатывай бабки!', 'Mach Kohle!']],
      ['Синонимы: «guap», «cheddar», «bands» (пачки по $1000), «racks».', 'Synonyme: „guap“, „cheddar“, „bands“ (Bündel zu $1000), „racks“.'],
      ['Джазовый сленг 1930–40-х: хлеб = то, на что живёшь. Позже «dough» (тесто) — та же логика.', 'Jazz-Slang der 1930er–40er: Brot = Lebensunterhalt. „Dough“ (Teig) folgt derselben Logik.'],
      ['США, рэп.', 'USA, Rap.']),
    S('crib', 'slang-life', 'the crib', 'хата, дом', 'die Bude, mein Zuhause', [
      ['Come chill at my [[crib]] after school.', 'Приходи после школы ко мне на хату.', 'Komm nach der Schule zu mir in die Bude.'],
      ['Nice [[crib]]!', 'Классная хата!', 'Schöne Bude!'],
      ['I’m back at the [[crib]].', 'Я уже дома.', 'Ich bin wieder zu Hause.']],
      ['Дом, квартира.', 'Haus, Wohnung.'],
      ['Буквально «детская кроватка»; в AAE 1990-х — дом. Шоу «MTV Cribs» (с 2000 г.) сделало слово всемирным.', 'Wörtlich „Kinderbett“; im AAE der 1990er „Zuhause“. Die Show „MTV Cribs“ (ab 2000) machte es weltbekannt.'],
      ['США.', 'USA.']),
    S('chillin', 'slang-life', 'just chillin’', 'просто отдыхаю', 'nur am Chillen', [
      ['— What you doing? — Nothing, [[just chillin’]].', '— Чем занят? — Ничем, просто чилю.', '— Was machst du? — Nix, nur am Chillen.'],
      ['We were [[chillin’]] at the park all day.', 'Мы весь день зависали в парке.', 'Wir haben den ganzen Tag im Park gechillt.'],
      ['[[Chill]], bro, it’s fine.', 'Остынь, брат, всё нормально.', 'Chill, Bro, alles gut.']],
      ['-in’ вместо -ing — норма разговорной речи.', '-in’ statt -ing ist in der Umgangssprache normal.'],
      ['«Chill out» из AAE 1970-х — «успокоиться»; в 1980-е хип-хоп сделал «chillin’» стилем жизни.', '„Chill out“ aus dem AAE der 1970er; in den 1980ern machte Hip-Hop „chillin’“ zum Lebensgefühl.'],
      ['Везде.', 'Überall.']),
    S('slide-through', 'slang-life', 'slide through', 'заскочить, заглянуть', 'vorbeikommen, vorbeischauen', [
      ['We’re at the park, [[slide through]] later.', 'Мы в парке, заскакивай попозже.', 'Wir sind im Park, komm später vorbei.'],
      ['I might [[slide through]] after work.', 'Может, загляну после работы.', 'Vielleicht schau ich nach der Arbeit vorbei.'],
      ['[[Pull up]], we’re outside.', 'Подъезжай, мы на улице.', 'Komm vorbei, wir sind draußen.']],
      ['Неформальное приглашение. Также «pull up».', 'Lockere Einladung. Auch „pull up“.'],
      ['AAE 2010-х; «slide» — «скользнуть».', 'AAE der 2010er; „slide“ — „gleiten“.'],
      ['Молодёжь США.', 'US-Jugend.']),
    S('dip', 'slang-life', 'dip', 'свалить, смыться', 'abhauen, sich verziehen', [
      ['This party’s dead, let’s [[dip]].', 'Тут скукота, давай свалим.', 'Die Party ist tot, lass uns abhauen.'],
      ['I’m about to [[dip]].', 'Я сейчас сваливаю.', 'Ich hau gleich ab.'],
      ['He [[dipped]] without paying.', 'Он смылся, не заплатив.', 'Er ist ohne zu zahlen abgehauen.']],
      ['Короткое «уйти».', 'Kurz für „gehen“.'],
      ['«Dip out» в AAE 1990-х; сокращено до «dip».', '„Dip out“ im AAE der 1990er; verkürzt zu „dip“.'],
      ['Повсюду у молодёжи.', 'Überall bei Jugendlichen.']),
    S('finna', 'slang-life', 'finna', 'собираюсь, вот-вот (= going to)', 'gleich, ich werd (= going to)', [
      ['I’m [[finna]] grab some food, you want something?', 'Я собираюсь взять поесть, тебе что-то надо?', 'Ich hol mir gleich was zu essen, willst du was?'],
      ['It’s [[finna]] rain.', 'Сейчас дождь пойдёт.', 'Gleich regnet’s.'],
      ['We [[finna]] go out.', 'Мы сейчас пойдём гулять.', 'Wir gehen gleich raus.']],
      ['Только в речи, не в письме на работе.', 'Nur gesprochen, nicht in Arbeitsmails.'],
      ['Из «fixing to» в южном и афроамериканском английском; грамматическая черта AAE, а не просто сленг.', 'Von „fixing to“ im Südstaaten- und afroamerikanischen Englisch; ein grammatisches Merkmal des AAE, nicht nur Slang.'],
      ['Юг США, AAE, соцсети.', 'US-Süden, AAE, soziale Medien.']),
    S('kicks', 'slang-life', 'kicks', 'кроссы, кроссовки', 'Sneaker, Treter', [
      ['Fresh [[kicks]]!', 'Свежие кроссы!', 'Frische Sneaker!'],
      ['I spent all my money on [[kicks]].', 'Я все деньги потратил на кроссы.', 'Ich hab mein ganzes Geld für Sneaker ausgegeben.'],
      ['Don’t step on my [[kicks]]!', 'Не наступи мне на кроссы!', 'Tritt mir nicht auf die Sneaker!']],
      ['Кроссовки, особенно модные.', 'Turnschuhe, besonders angesagte.'],
      ['С 1900-х «kicks» = обувь (то, чем пинают). Культ кроссовок вырос из баскетбола и хип-хопа 1980-х (Run-DMC «My Adidas»).', 'Seit 1900 „kicks“ = Schuhe (womit man tritt). Sneaker-Kult aus Basketball und Hip-Hop der 1980er (Run-DMC „My Adidas“).'],
      ['Сникерхеды, улица.', 'Sneakerheads, Straße.']),
    S('the-hood', 'slang-life', 'the hood', 'район (обычно бедный)', 'das Viertel, die Hood', [
      ['I grew up in [[the hood]].', 'Я вырос на районе.', 'Ich bin in der Hood aufgewachsen.'],
      ['Everybody in [[the hood]] knows him.', 'Его весь район знает.', 'Jeder im Viertel kennt ihn.'],
      ['He’s still [[hood]], even with money.', 'Он всё ещё пацан с района, хоть и при деньгах.', 'Er ist immer noch Hood, trotz Geld.']],
      ['Свой, обычно бедный район. Прил. «hood» — «уличный, простой».', 'Das eigene, meist arme Viertel. Adj. „hood“ — „von der Straße“.'],
      ['Сокращение от «neighborhood»; в AAE 1960–70-х, затем фильм «Boyz n the Hood» (1991).', 'Kurz für „neighborhood“; im AAE der 1960er–70er, dann Film „Boyz n the Hood“ (1991).'],
      ['США, рэп, кино.', 'USA, Rap, Kino.']),

    // ---- Swearing & Insults (18+) ----
    S('shit', 'slang-rude', 'shit', 'дерьмо; чёрт!; вещи, барахло', 'Scheiße; Mist!; Zeug', [
      ['Oh [[shit]], I forgot my wallet!', 'Чёрт, я забыл кошелёк!', 'Oh Scheiße, ich hab mein Portemonnaie vergessen!'],
      ['Grab your [[shit]], we’re leaving.', 'Хватай свои манатки, уходим.', 'Schnapp dein Zeug, wir gehen.'],
      ['That movie was the [[shit]]!', 'Этот фильм был просто бомба!', 'Der Film war der Hammer!']],
      ['Многозначное: «the shit» = отлично, но «shit» = плохо. «No shit!» = «да ладно / ясное дело».', 'Vieldeutig: „the shit“ = super, aber „shit“ = schlecht. „No shit!“ = „echt / na klar“.'],
      ['Древнеанглийское «scitte» (понос), родственно нем. «Scheiße».', 'Altenglisch „scitte“, verwandt mit dt. „Scheiße“.'],
      ['Везде в разговоре; на ТВ «запикивают».', 'Überall in der Umgangssprache; im TV wird es überpiept.'], V),
    S('bullshit', 'slang-rude', 'bullshit', 'херня, враньё', 'Bullshit, Schwachsinn', [
      ['That’s [[bullshit]] and you know it.', 'Это херня, и ты это знаешь.', 'Das ist Bullshit und das weißt du.'],
      ['Stop [[bullshitting]] me.', 'Хватит мне врать.', 'Hör auf, mich zu verarschen.'],
      ['[[Bullshit]]! He never said that.', 'Брехня! Он такого не говорил.', 'Schwachsinn! Das hat er nie gesagt.']],
      ['Враньё, чушь. Мягче: «BS», «bull».', 'Lüge, Unsinn. Milder: „BS“, „bull“.'],
      ['Буквально «бычье дерьмо»; американский солдатский сленг начала XX в.', 'Wörtlich „Bullenkacke“; US-Soldatenslang des frühen 20. Jh.'],
      ['Повсюду; на работе говорят «BS».', 'Überall; im Büro sagt man „BS“.'], V),
    S('asshole', 'slang-rude', 'asshole', 'мудак, урод', 'Arschloch', [
      ['Don’t be an [[asshole]].', 'Не будь уродом.', 'Sei kein Arschloch.'],
      ['Some [[asshole]] took my parking spot.', 'Какой-то урод занял моё место.', 'Irgendein Arschloch hat meinen Parkplatz genommen.'],
      ['He’s kind of an [[asshole]] when he’s drunk.', 'Пьяный он тот ещё мудак.', 'Betrunken ist er ein ziemliches Arschloch.']],
      ['Сильное оскорбление поведения человека.', 'Starke Beleidigung für jemandes Verhalten.'],
      ['Американская форма британского «arsehole»; известно с XIV в.', 'Amerikanische Form des britischen „arsehole“; seit dem 14. Jh. belegt.'],
      ['Везде; незнакомцу — риск драки.', 'Überall; zu Fremden — Prügelrisiko.'], V),
    S('wtf', 'slang-rude', 'What the fuck?!', 'какого хрена?!, что за херня?!', 'Was zum Teufel?!, What the fuck?!', [
      ['[[What the fuck]] did you just say?', 'Ты что, блин, сейчас сказал?', 'Was zum Teufel hast du gerade gesagt?'],
      ['[[What the fuck]] is this?', 'Что это за херня?', 'Was ist das für ’ne Scheiße?'],
      ['[[WTF]], the bus left early!', 'Какого хрена, автобус ушёл раньше!', 'WTF, der Bus ist zu früh abgefahren!']],
      ['В чатах «WTF». Помягче: «What the heck?», «What the hell?».', 'Im Chat „WTF“. Milder: „What the heck?“, „What the hell?“.'],
      ['«Fuck» — с XV в.; табуированное до 1960-х, потом прорвалось в кино и музыку.', '„Fuck“ seit dem 15. Jh.; bis in die 1960er tabu, dann in Film und Musik.'],
      ['Везде, особенно онлайн.', 'Überall, besonders online.'], V),
    S('motherfucker', 'slang-rude', 'motherfucker', 'ублюдок; (среди своих) братан', 'Motherfucker, Mistkerl', [
      ['That [[motherfucker]] stole my phone!', 'Этот ублюдок украл мой телефон!', 'Der Mistkerl hat mein Handy geklaut!'],
      ['This [[motherfucking]] printer again!', 'Опять этот грёбаный принтер!', 'Schon wieder dieser verdammte Drucker!'],
      ['Samuel L. Jackson says “[[motherfucker]]” in every movie.', 'Сэмюэл Л. Джексон говорит «motherfucker» в каждом фильме.', 'Samuel L. Jackson sagt in jedem Film „motherfucker“.']],
      ['Одно из самых сильных ругательств. Между близкими друзьями иногда — почти ласково, но чужому — драка.', 'Eines der stärksten Schimpfwörter. Unter engen Freunden manchmal fast liebevoll — zu Fremden: Prügelei.'],
      ['Американское слово XIX в., сильно связано с AAE; через блюз, рэп и кино (Тарантино) стало знаменитым.', 'Amerikanisches Wort aus dem 19. Jh., stark mit AAE verbunden; durch Blues, Rap und Kino (Tarantino) berühmt.'],
      ['Рэп, кино, улица.', 'Rap, Kino, Straße.'], V),
    S('bitch', 'slang-rude', 'bitch', 'сука; (о ситуации) засада', 'Schlampe, Miststück; (Situation) Mist', [
      ['Life’s a [[bitch]].', 'Жизнь — сука.', 'Das Leben ist ein Miststück.'],
      ['Stop [[bitching]] about it.', 'Хватит ныть.', 'Hör auf zu jammern.'],
      ['Never call a woman a [[bitch]] — that’s how fights start.', 'Никогда не называй женщину «bitch» — так начинаются драки.', 'Nenn nie eine Frau „bitch“ — so fangen Schlägereien an.']],
      ['Об женщине — тяжёлое оскорбление; о мужчине («you’re my bitch») — унижение. «To bitch» = ныть.', 'Für Frauen eine schwere Beleidigung; für Männer („you’re my bitch“) eine Demütigung. „To bitch“ = jammern.'],
      ['Древнеанглийское «bicce» — «самка собаки»; ругательство с XV в.', 'Altenglisch „bicce“ — Hündin; Schimpfwort seit dem 15. Jh.'],
      ['Рэп, ссоры. Знать — да, говорить — почти никогда.', 'Rap, Streits. Kennen — ja, sagen — fast nie.'], V),
    S('gtfo', 'slang-rude', 'Get the fuck out of here!', 'вали отсюда!; (удивление) да ладно!', 'Verpiss dich!; (Staunen) Echt jetzt?!', [
      ['[[Get the fuck out of here]]! Now!', 'Вали отсюда! Сейчас же!', 'Verpiss dich! Sofort!'],
      ['You won the lottery? [[Get the fuck outta here]]!', 'Ты выиграл в лотерею? Да ладно!', 'Du hast im Lotto gewonnen? Echt jetzt?!'],
      ['[[GTFO]] with that nonsense.', 'Иди ты со своей чушью.', 'Hör auf mit dem Quatsch.']],
      ['Два значения: прогнать или (весело) «не может быть!». Мягче: «Get outta here!».', 'Zwei Bedeutungen: wegschicken oder (fröhlich) „unmöglich!“. Milder: „Get outta here!“.'],
      ['Нью-йоркская речь XX в.; «get out of here» как удивление — от итало- и афроамериканцев.', 'New Yorker Sprache des 20. Jh.; „get out of here“ als Staunen von Italo- und Afroamerikanern.'],
      ['Нью-Йорк, кино.', 'New York, Kino.'], V),
    S('punk', 'slang-rude', 'punk / punk-ass', 'сопляк, слабак (вызов)', 'Weichei, Wichtigtuer (Provokation)', [
      ['What you gonna do, [[punk]]?', 'И что ты сделаешь, сопляк?', 'Was willst du machen, Weichei?'],
      ['That [[punk-ass]] ran away.', 'Этот слабак убежал.', 'Der Feigling ist abgehauen.'],
      ['Don’t call me a [[punk]].', 'Не называй меня сопляком.', 'Nenn mich nicht Weichei.']],
      ['На улице — «слово-вызов»: назвать так = предложить драться.', 'Auf der Straße ein Kampfwort: Wer so redet, fordert zum Kampf.'],
      ['С XVI в. «punk» — проститутка, потом — «никчёмный парень». Фраза Клинта Иствуда «Do you feel lucky, punk?» (1971).', 'Seit dem 16. Jh. „punk“ — Prostituierte, später „Nichtsnutz“. Clint Eastwood: „Do you feel lucky, punk?“ (1971).'],
      ['Улица, тюремный жаргон, фильмы.', 'Straße, Gefängnisjargon, Filme.'], V),
    S('sob', 'slang-rude', 'son of a bitch', 'сукин сын', 'Hurensohn, Mistkerl', [
      ['That [[son of a bitch]] lied to me!', 'Этот сукин сын мне соврал!', 'Der Mistkerl hat mich angelogen!'],
      ['[[Son of a bitch]]! I hit my toe.', 'Сукин сын! Палец ушиб.', 'Verdammt! Ich hab mir den Zeh gestoßen.'],
      ['You lucky [[son of a bitch]]!', 'Ну ты везунчик, сукин сын!', 'Du glücklicher Mistkerl!']],
      ['Как оскорбление — сильно; как восклицание боли — почти нейтрально. Аббр. «SOB».', 'Als Beleidigung stark; als Schmerzausruf fast neutral. Abk. „SOB“.'],
      ['Известно с XVIII в.; как и в других языках, бьёт по матери.', 'Seit dem 18. Jh.; wie in anderen Sprachen trifft es die Mutter.'],
      ['США, кино, Юг.', 'USA, Kino, Süden.'], V)
  ] });
})();
