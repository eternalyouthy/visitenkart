/* RUSSIAN · Expressions → Slang: youth and street slang + mat (18+). Categories: slang-crew / slang-react /
 * slang-people / slang-life / slang-rude (GT.EXP_SECTIONS in js/core.js). Each card: gloss en + de, three
 * examples, note, origin and where { en, de }. Stress: + before the stressed vowel in headwords.
 * register 'slang', or 'vulgar' for swear words (the card shows a warning). Examples written for ETRNL. */
(function () {
  'use strict';
  function S(id, topic, t, en, de, exs, note, origin, where, reg) {
    return { id: 'ru-slang-' + id, topic: topic, type: 'chunk', register: reg || 'slang', t: t, en: en, de: de,
      examples: exs.map(function (e) { return { t: e[0], en: e[1], de: e[2] }; }),
      note: { en: note[0], de: note[1] }, origin: { en: origin[0], de: origin[1] }, where: { en: where[0], de: where[1] } };
  }
  var V = 'vulgar';
  GT.register({ tab: 'expressions', type: 'chunk', items: [
    // ---- Greetings & Crew ----
    S('zdarova', 'slang-crew', 'Здар+ова!', 'Hey!, Yo! (greeting)', 'Hi!, Na? (Begrüßung)', [
      ['[[Здарова]], давно не виделись!', 'Yo, long time no see!', 'Hey, lange nicht gesehen!'],
      ['[[Здарова]], мужики!', 'Hey, guys!', 'Na, Jungs!'],
      ['О, [[здарова]]! Ты как тут?', 'Oh, hey! What are you doing here?', 'Oh, hi! Was machst du denn hier?']],
      ['Only with friends; to strangers say «здравствуйте».', 'Nur unter Freunden; zu Fremden «здравствуйте».'],
      ['From «здорово» (“be healthy”) — the old peasant greeting «Здорово!». Stress moved to «здар+ова» in the 1990s–2000s among young men.', 'Von «здорово» („sei gesund“), dem alten Bauerngruß. In den 1990er–2000ern verschob sich die Betonung zu «здар+ова».'],
      ['All of Russia, mostly men and teens.', 'Ganz Russland, vor allem Männer und Jugendliche.']),
    S('che-kak', 'slang-crew', 'Чё как?', 'What’s up?, How’s it going?', 'Was geht?, Wie läuft’s?', [
      ['Привет, [[чё как]]? Всё норм?', 'Hi, what’s up? All good?', 'Hi, was geht? Alles gut?'],
      ['[[Чё как]] на работе?', 'How’s work going?', 'Wie läuft’s auf der Arbeit?'],
      ['Ну [[чё как]], сдал экзамен?', 'So, how’d it go — did you pass?', 'Und, wie war’s, Prüfung bestanden?']],
      ['«Чё» = «что». Answer: «Норм», «Да ничё».', '«Чё» = «что». Antwort: «Норм», «Да ничё».'],
      ['«Чё» is a dialectal/colloquial form known since the 19th century; «Чё как?» became the standard casual greeting in the 2000s.', '«Чё» ist eine Dialekt-/Umgangsform seit dem 19. Jh.; «Чё как?» wurde in den 2000ern zum Standardgruß.'],
      ['Everywhere, in speech and chats.', 'Überall, gesprochen und im Chat.']),
    S('bratan', 'slang-crew', 'брат+ан', 'bro, brother (address)', 'Bruder, Digga (Anrede)', [
      ['[[Братан]], выручи, а?', 'Bro, help me out, will you?', 'Bruder, hilf mir mal, ja?'],
      ['Спасибо, [[братан]], с меня пиво.', 'Thanks, bro, I owe you a beer.', 'Danke, Bruder, ich geb dir ein Bier aus.'],
      ['Мы с ним [[братаны]] со школы.', 'We’ve been brothers since school.', 'Wir sind seit der Schule wie Brüder.']],
      ['Friendly address between young men. Also «бро», «братишка», «брат».', 'Freundliche Anrede unter jungen Männern. Auch «бро», «братишка», «брат».'],
      ['Criminal and army slang of the late USSR; in the 1990s films like «Брат» (1997) made it iconic.', 'Kriminellen- und Armeejargon der späten UdSSR; Filme wie «Брат» (1997) machten es ikonisch.'],
      ['Courtyards, gyms, taxis; slightly “gopnik” in tone.', 'Höfe, Fitnessstudios, Taxis; klingt leicht nach Gopnik.']),
    S('chuvak', 'slang-crew', 'чув+ак', 'dude, guy', 'Typ, Alter', [
      ['Слушай, [[чувак]], ты гений!', 'Listen, dude, you’re a genius!', 'Hör mal, Alter, du bist ein Genie!'],
      ['Там какой-то [[чувак]] тебя ищет.', 'Some guy is looking for you.', 'Da sucht dich irgendein Typ.'],
      ['[[Чувак]], ну ты даёшь!', 'Dude, you’re something else!', 'Alter, du bist ja einer!']],
      ['Address and “some guy”. Female «чувиха» is dated.', 'Anrede und „irgendein Typ“. Weiblich «чувиха» ist veraltet.'],
      ['From 1950s stilyagi (Soviet jazz fans) slang; a popular but unproven story links it to «человек, уважающий высокое искусство».', 'Aus dem Slang der Stiljagi (sowjetische Jazzfans) der 1950er; eine beliebte, unbelegte Legende deutet es als Abkürzung.'],
      ['All ages under ~45, neutral-casual.', 'Alle unter ~45, locker-neutral.']),
    S('koresh', 'slang-crew', 'к+ореш', 'mate, buddy', 'Kumpel, Atze', [
      ['Это мой [[кореш]] со двора.', 'That’s my buddy from the block.', 'Das ist mein Kumpel aus dem Hof.'],
      ['Позвал [[корешей]] на шашлыки.', 'I invited my mates to a barbecue.', 'Ich hab meine Kumpels zum Grillen eingeladen.'],
      ['Мы старые [[кореша]].', 'We’re old mates.', 'Wir sind alte Kumpels.']],
      ['Plural «кореша». A close friend from the same courtyard or school.', 'Plural «кореша». Ein enger Freund aus Hof oder Schule.'],
      ['Thieves’ cant (феня) of the early 20th century, possibly from Hebrew «haver» via Odessa slang or dialect «корешок» (root).', 'Gaunersprache (Fenja) des frühen 20. Jh., evtl. aus hebr. «haver» über Odessa oder dialektal «корешок» (Wurzel).'],
      ['Men 25+, courtyards; younger people say «бро».', 'Männer 25+, Höfe; Jüngere sagen «бро».']),
    S('go', 'slang-crew', 'Го!', 'Let’s go!, Come on!', 'Los!, Komm, lass uns!', [
      ['[[Го]] в кино вечером?', 'Up for the cinema tonight?', 'Lust auf Kino heute Abend?'],
      ['[[Го]] катку!', 'Let’s play a round!', 'Lass uns ’ne Runde zocken!'],
      ['Всё, [[го]], опаздываем!', 'Come on, we’re late!', 'Los, wir sind spät dran!']],
      ['«Го в …» = let’s go to … . Also «погнали», «пошли».', '«Го в …» = lass uns … . Auch «погнали», «пошли».'],
      ['English “go”, via online gaming (Dota, CS) in the 2000s–2010s.', 'Englisch „go“, über Online-Gaming (Dota, CS) in den 2000ern–2010ern.'],
      ['Teens, gamers, chats.', 'Jugendliche, Gamer, Chats.']),
    S('patsany', 'slang-crew', 'пацан+ы', 'guys, the lads', 'Jungs', [
      ['[[Пацаны]], кто со мной?', 'Guys, who’s with me?', 'Jungs, wer kommt mit?'],
      ['[[Пацаны]] сказали — [[пацаны]] сделали.', 'The lads said it, the lads did it.', 'Die Jungs haben’s gesagt, die Jungs haben’s gemacht.'],
      ['Он нормальный [[пацан]].', 'He’s a decent guy.', 'Er ist ein korrekter Typ.']],
      ['«Пацан» = guy; «по-пацански» = by the street code; «чёткий пацан» = a solid guy.', '«Пацан» = Junge; «по-пацански» = nach Straßenkodex; «чёткий пацан» = korrekter Typ.'],
      ['From Ukrainian/southern dialect «пацан» (boy). The TV series «Слово пацана» (2023) about 1980s Kazan street gangs made the “пацанский кодекс” famous again.', 'Aus ukr./südl. Dialekt «пацан» (Junge). Die Serie «Слово пацана» (2023) über Straßengangs im Kasan der 1980er machte den „Jungs-Kodex“ wieder bekannt.'],
      ['Everywhere; the “code” sense — street culture.', 'Überall; die „Kodex“-Bedeutung — Straßenkultur.']),

    // ---- Reactions & Hype ----
    S('zhiza', 'slang-react', 'жиз+а', 'so relatable, that’s life', 'so wahr, kenn ich', [
      ['Понедельник, кофе не помогает… [[жиза]].', 'Monday, coffee isn’t helping… so relatable.', 'Montag, Kaffee hilft nicht… kenn ich.'],
      ['Этот мем — полная [[жиза]].', 'That meme is so real.', 'Das Meme ist so wahr.'],
      ['— Опять забыл зарядку. — [[Жиза]].', '— Forgot my charger again. — Same.', '— Ladegerät wieder vergessen. — Kenn ich.']],
      ['Said about memes and situations you recognise.', 'Über Memes und Situationen, die man kennt.'],
      ['From «жизненно» (true to life), social network VKontakte around 2015.', 'Von «жизненно» (lebensnah), VKontakte um 2015.'],
      ['Teens, students, social media.', 'Teenager, Studis, soziale Medien.']),
    S('kringe', 'slang-react', 'кр+индж', 'cringe, embarrassing', 'cringe, peinlich', [
      ['Он пел в метро? Какой [[кринж]]!', 'He sang in the metro? So cringe!', 'Er hat in der U-Bahn gesungen? Wie cringe!'],
      ['Мои старые фотки — [[кринж]].', 'My old photos are cringe.', 'Meine alten Fotos sind cringe.'],
      ['Не [[кринжуй]], всё нормально.', 'Don’t cringe, it’s fine.', 'Schäm dich nicht, ist doch okay.']],
      ['Adjective «кринжовый», verb «кринжевать».', 'Adjektiv «кринжовый», Verb «кринжевать».'],
      ['English “cringe”; the Russian word of the year 2021 (Gramota.ru).', 'Englisch „cringe“; russisches Wort des Jahres 2021 (Gramota.ru).'],
      ['Under ~30, internet.', 'Unter ~30, Internet.']),
    S('ogon', 'slang-react', 'Ог+онь!', 'It’s fire!, Awesome!', 'Der Hammer!, Mega!', [
      ['Новый трек — просто [[огонь]]!', 'The new track is pure fire!', 'Der neue Track ist der Hammer!'],
      ['Шашлык — [[огонь]]!', 'The shashlik is amazing!', 'Das Schaschlik ist mega!'],
      ['[[Огонь]] платье!', 'That dress is fire!', 'Krasses Kleid!']],
      ['Highest praise for music, food, clothes. Emoji 🔥.', 'Höchstes Lob für Musik, Essen, Kleidung. Emoji 🔥.'],
      ['Old metaphor “fiery” → modern use reinforced by the 🔥 emoji and English “fire” (2010s).', 'Alte Metapher „feurig“ → verstärkt durch 🔥 und engl. „fire“ (2010er).'],
      ['Everywhere, all ages.', 'Überall, alle Altersgruppen.']),
    S('zhest', 'slang-react', 'Жесть!', 'Brutal!, Crazy! (shock)', 'Krass!, Heftig!', [
      ['Он упал с велика прямо в лужу? [[Жесть]]!', 'He fell off his bike into a puddle? Brutal!', 'Er ist vom Fahrrad in die Pfütze gefallen? Heftig!'],
      ['На дорогах сегодня [[жесть]].', 'The roads are insane today.', 'Auf den Straßen ist heute die Hölle los.'],
      ['Фильм — [[жесть]], но мне понравилось.', 'The film is brutal, but I liked it.', 'Der Film ist heftig, aber mir hat er gefallen.']],
      ['Shocking or extreme; sometimes positive.', 'Schockierend oder extrem; manchmal positiv.'],
      ['Literally “tin, sheet metal”: hard and harsh. Youth usage since the late 1990s.', 'Wörtlich „Blech“: hart und rau. Jugendsprache seit Ende der 1990er.'],
      ['Everywhere.', 'Überall.']),
    S('kapets', 'slang-react', 'Кап+ец!', 'Damn!, That’s a disaster!', 'Mist!, Krass!', [
      ['Я опоздал на последний автобус. [[Капец]]!', 'I missed the last bus. Damn!', 'Ich hab den letzten Bus verpasst. Mist!'],
      ['[[Капец]] как холодно.', 'It’s insanely cold.', 'Es ist mega kalt.'],
      ['Телефону [[капец]].', 'The phone is done for.', 'Das Handy ist hinüber.']],
      ['A softened swear word (a polite replacement for «пиздец»). Also an intensifier.', 'Abgeschwächtes Schimpfwort (höfliche Ersatzform für «пиздец»). Auch Verstärker.'],
      ['From «капут» (German “kaputt” via WWII) blended with the mat word; common since the 1990s.', 'Aus «капут» (dt. „kaputt“, über den 2. Weltkrieg) gemischt mit dem Mat-Wort; seit den 1990ern üblich.'],
      ['Everywhere, even with parents.', 'Überall, sogar bei den Eltern.']),
    S('norm', 'slang-react', 'Норм.', 'Fine., OK.', 'Passt., Okay.', [
      ['— Как фильм? — [[Норм]].', '— How was the film? — Fine.', '— Wie war der Film? — Passt.'],
      ['Всё [[норм]], не переживай.', 'It’s all fine, don’t worry.', 'Alles gut, keine Sorge.'],
      ['[[Нормас]]!', 'Pretty good!', 'Ganz gut!']],
      ['Short for «нормально»; playful «нормас», «норм тема».', 'Kurz für «нормально»; verspielt «нормас», «норм тема».'],
      ['Clipped form from SMS and chat culture of the 2000s.', 'Gekürzte Form aus SMS- und Chatkultur der 2000er.'],
      ['Everywhere.', 'Überall.']),
    S('izi', 'slang-react', '+Изи.', 'Easy., Piece of cake.', 'Easy., Ein Klacks.', [
      ['Экзамен? [[Изи]].', 'The exam? Easy.', 'Die Prüfung? Easy.'],
      ['Это [[изи]], сделаю за пять минут.', 'That’s easy, I’ll do it in five minutes.', 'Easy, mach ich in fünf Minuten.'],
      ['[[Изи]] катка.', 'Easy game.', 'Leichtes Spiel.']],
      ['Easy; also «изи-пизи» (= easy-peasy).', 'Leicht; auch «изи-пизи» (= easy-peasy).'],
      ['English “easy”, via gamers (“ez”) in the 2010s.', 'Englisch „easy“, über Gamer („ez“) in den 2010ern.'],
      ['Teens, gamers.', 'Teenager, Gamer.']),
    S('rofl', 'slang-react', 'рофл', 'joke, lol; to joke', 'Witz, lol; scherzen', [
      ['Это [[рофл]] или серьёзно?', 'Is that a joke or for real?', 'Ist das ein Witz oder ernst?'],
      ['Да я [[рофлю]], не обижайся.', 'I’m just joking, don’t be offended.', 'Ich mach nur Spaß, sei nicht beleidigt.'],
      ['Вчера был такой [[рофл]]!', 'Yesterday was hilarious!', 'Gestern war so lustig!']],
      ['Noun «рофл», verb «рофлить», adj. «рофляный».', 'Nomen «рофл», Verb «рофлить», Adj. «рофляный».'],
      ['English “ROFL” (rolling on the floor laughing), borrowed by Russian streamers and gamers in the 2010s.', 'Englisch „ROFL“ (rolling on the floor laughing), von russischen Streamern und Gamern der 2010er übernommen.'],
      ['Teens, Twitch, chats.', 'Teenager, Twitch, Chats.']),

    // ---- People & Attitude ----
    S('krash', 'slang-people', 'краш', 'crush (person you like)', 'Schwarm, Crush', [
      ['Он мой [[краш]] с первого курса.', 'He’s been my crush since first year.', 'Er ist mein Schwarm seit dem ersten Semester.'],
      ['Я [[крашнулась]] в новенького.', 'I’ve got a crush on the new guy.', 'Ich hab mich in den Neuen verknallt.'],
      ['Мой [[краш]] лайкнул фотку!', 'My crush liked my photo!', 'Mein Crush hat mein Foto geliked!']],
      ['Verb «крашнуться в кого-то».', 'Verb «крашнуться в кого-то».'],
      ['English “crush”; peaked around 2019–2020 on TikTok.', 'Englisch „crush“; Höhepunkt um 2019–2020 auf TikTok.'],
      ['Teens, mostly girls.', 'Teenager, vor allem Mädchen.']),
    S('dushnila', 'slang-people', 'душн+ила', 'buzzkill, nitpicker, bore', 'Spaßbremse, Klugscheißer', [
      ['Не будь [[душнилой]], это просто шутка.', 'Don’t be a buzzkill, it’s just a joke.', 'Sei keine Spaßbremse, das ist nur ein Witz.'],
      ['Ну всё, начал [[душнить]].', 'Here we go, he’s nitpicking again.', 'So, jetzt fängt er wieder an zu klugscheißen.'],
      ['Препод — главный [[душнила]] факультета.', 'That lecturer is the biggest bore in the faculty.', 'Der Dozent ist die größte Spaßbremse der Fakultät.']],
      ['Pedantic person who makes the atmosphere heavy. Verb «душнить».', 'Pedantischer Mensch, der die Stimmung drückt. Verb «душнить».'],
      ['From «душно» (stuffy). Spread through internet memes around 2019.', 'Von «душно» (stickig). Über Internet-Memes um 2019 verbreitet.'],
      ['Students, office workers, internet.', 'Studis, Büroleute, Internet.']),
    S('pontovatsya', 'slang-people', 'понтов+аться', 'to show off, to flex', 'angeben, auf dicke Hose machen', [
      ['Хватит [[понтоваться]] своим айфоном.', 'Stop flexing with your iPhone.', 'Hör auf, mit deinem iPhone anzugeben.'],
      ['Это всё [[понты]].', 'That’s all for show.', 'Das ist alles nur Angeberei.'],
      ['[[Понты]] дороже денег.', 'Image is worth more than money.', 'Show ist mehr wert als Geld.']],
      ['Noun «понты»; «понты дороже денег» is a famous ironic saying.', 'Nomen «понты»; «понты дороже денег» ist ein ironischer Spruch.'],
      ['Thieves’ cant: «понт» meant a decoy or a trick to fool a victim; 1990s “new Russians” turned it into showing off.', 'Gaunersprache: «понт» war ein Trick, um Opfer zu täuschen; die „neuen Russen“ der 1990er machten Angeberei daraus.'],
      ['Everywhere.', 'Überall.']),
    S('mazhor', 'slang-people', 'маж+ор', 'rich kid, spoilt kid of rich parents', 'reiches Söhnchen, Bonzenkind', [
      ['Этот [[мажор]] приехал на папиной машине.', 'That rich kid came in his dad’s car.', 'Das Bonzenkind kam mit Papas Auto.'],
      ['Я не [[мажор]], я сам зарабатываю.', 'I’m not a rich kid, I earn my own money.', 'Ich bin kein reiches Söhnchen, ich verdien selbst.'],
      ['Тусовка [[мажоров]].', 'A rich-kids crowd.', 'Eine Bonzenkinder-Clique.']],
      ['Ironic or critical. Feminine «мажорка».', 'Ironisch oder kritisch. Weiblich «мажорка».'],
      ['Music term “major key” (cheerful). In the 1970s–80s, kids of the Soviet elite with access to Western goods.', 'Musikbegriff „Dur“ (fröhlich). In den 1970er–80ern Kinder der Sowjetelite mit Westwaren.'],
      ['Everywhere.', 'Überall.']),
    S('gopnik', 'slang-people', 'г+опник', 'street thug, chav', 'Proll, Assi', [
      ['Вечером у подъезда опять [[гопники]].', 'The thugs are at the entrance again tonight.', 'Abends hängen wieder Prolls vor dem Eingang.'],
      ['Он одевается как [[гопник]].', 'He dresses like a gopnik.', 'Er zieht sich an wie ein Proll.'],
      ['Не ходи там ночью — [[гопота]].', 'Don’t walk there at night — thugs.', 'Geh da nachts nicht lang — Prolls.']],
      ['Stereotype: tracksuit, squatting, sunflower seeds. «Гопота» = a group of them.', 'Klischee: Trainingsanzug, Hocke, Sonnenblumenkerne. «Гопота» = eine Gruppe.'],
      ['Possibly from «ГОП» — 1920s “City Society of Public Care” hostels in Petrograd that housed the homeless; also from «гоп-стоп» (street robbery).', 'Evtl. von «ГОП» — Obdachlosenheimen im Petrograd der 1920er; auch von «гоп-стоп» (Straßenraub).'],
      ['All of Russia; disparaging.', 'Ganz Russland; abwertend.']),
    S('ne-goni', 'slang-people', 'Не гон+и!', 'Stop talking nonsense!, No way!', 'Laber nicht!, Erzähl keinen Quatsch!', [
      ['— Я выиграл миллион. — [[Не гони]]!', '— I won a million. — Stop talking nonsense!', '— Ich hab ’ne Million gewonnen. — Laber nicht!'],
      ['[[Не гони]], успокойся.', 'Don’t panic, calm down.', 'Reg dich ab, beruhig dich.'],
      ['Ты [[гонишь]]!', 'You’re making it up!', 'Du spinnst!']],
      ['«Гнать» = to talk rubbish; also “to panic”.', '«Гнать» = Unsinn reden; auch „in Panik geraten“.'],
      ['From «гнать пургу/дуру» (“drive a blizzard”), Soviet slang.', 'Von «гнать пургу» („einen Schneesturm treiben“), sowjetischer Slang.'],
      ['Everywhere.', 'Überall.']),
    S('chetkiy', 'slang-people', 'чёткий', 'solid, cool, legit', 'korrekt, cool', [
      ['Он [[чёткий]] пацан.', 'He’s a solid guy.', 'Er ist ein korrekter Typ.'],
      ['[[Чётко]]!', 'Cool!', 'Korrekt!'],
      ['[[Чёткая]] тачка.', 'Sweet car.', 'Geile Karre.']],
      ['Reliable, cool. Adv. «чётко» = cool!', 'Zuverlässig, cool. Adv. «чётко» = korrekt!'],
      ['“Precise, clear”; 1990s street slang praised a guy who lives by the rules.', '„Präzise, klar“; Straßenslang der 1990er lobte einen, der nach den Regeln lebt.'],
      ['Courtyards, 90s nostalgia.', 'Höfe, 90er-Nostalgie.']),
    S('loh', 'slang-people', 'лох', 'sucker, loser', 'Trottel, Opfer', [
      ['Не будь [[лохом]], проверь сдачу.', 'Don’t be a sucker, check your change.', 'Sei kein Trottel, prüf das Wechselgeld.'],
      ['Его развели как [[лоха]].', 'They scammed him like a total sucker.', 'Sie haben ihn wie einen Trottel abgezockt.'],
      ['[[Лох]] — это судьба.', 'Being a sucker is fate (meme).', 'Trottel ist man fürs Leben (Meme).']],
      ['Someone easy to cheat; offensive. «Развести лоха» = to scam a sucker.', 'Jemand, der leicht reinzulegen ist; beleidigend. «Развести лоха» = einen Trottel abzocken.'],
      ['Old trader and thieves’ slang: «лох» = peasant, naive buyer (19th century).', 'Alter Händler- und Gaunerslang: «лох» = Bauer, naiver Käufer (19. Jh.).'],
      ['Everywhere; to someone’s face — confrontation.', 'Überall; ins Gesicht gesagt — Streit.']),

    // ---- Money, Chilling & Street ----
    S('babki', 'slang-life', 'б+абки', 'cash, dough', 'Kohle, Knete', [
      ['У меня [[бабок]] до зарплаты не хватит.', 'I won’t have enough cash till payday.', 'Meine Kohle reicht nicht bis zum Gehalt.'],
      ['Он рубит [[бабки]] на крипте.', 'He’s raking in cash with crypto.', 'Er scheffelt Kohle mit Krypto.'],
      ['Где [[бабло]] взять?', 'Where do I get the dough?', 'Woher krieg ich die Kohle?']],
      ['Plural only. Also «бабло», «лавэ». A thousand roubles = «косарь».', 'Nur Plural. Auch «бабло», «лавэ». Tausend Rubel = «косарь».'],
      ['19th-century slang: «бабки» were bones for a game of knucklebones (“бабки”) that served as small stakes.', 'Slang des 19. Jh.: «бабки» waren Knöchelchen für ein Wurfspiel, um die man spielte.'],
      ['Everywhere.', 'Überall.']),
    S('tusit', 'slang-life', 'тус+ить', 'to party, to hang out', 'feiern, abhängen', [
      ['Мы всю ночь [[тусили]] у друзей.', 'We partied all night at our friends’ place.', 'Wir haben die ganze Nacht bei Freunden gefeiert.'],
      ['Где [[тусуемся]] в пятницу?', 'Where are we hanging out on Friday?', 'Wo hängen wir Freitag ab?'],
      ['Это крутая [[тусовка]].', 'That’s a cool crowd.', 'Das ist eine coole Szene.']],
      ['Noun «тусовка» (party; also a scene: «IT-тусовка»).', 'Nomen «тусовка» (Party; auch Szene: «IT-тусовка»).'],
      ['From «тасовать» (to shuffle cards) — people “mixing”. Became youth slang in the 1970s–80s.', 'Von «тасовать» (Karten mischen) — Leute „mischen sich“. Jugendslang seit den 1970er–80ern.'],
      ['Everywhere.', 'Überall.']),
    S('chilit', 'slang-life', 'ч+илить', 'to chill', 'chillen', [
      ['В субботу просто [[чилим]] дома.', 'On Saturday we’re just chilling at home.', 'Am Samstag chillen wir einfach zu Hause.'],
      ['[[Чиллю]] на даче.', 'I’m chilling at the dacha.', 'Ich chille auf der Datscha.'],
      ['Сегодня [[чил]], никуда не иду.', 'Today is chill, I’m not going anywhere.', 'Heute ist Chill, ich geh nirgends hin.']],
      ['Conjugated like a Russian verb: я чилю, ты чилишь.', 'Russisch konjugiert: я чилю, ты чилишь.'],
      ['English “chill”, from the 2010s.', 'Englisch „chill“, seit den 2010ern.'],
      ['Under ~35.', 'Unter ~35.']),
    S('hata', 'slang-life', 'х+ата', 'pad, place (flat)', 'Bude, Wohnung', [
      ['Родители уехали, [[хата]] свободна!', 'My parents are away, the place is free!', 'Die Eltern sind weg, sturmfreie Bude!'],
      ['Снял [[хату]] в центре.', 'I rented a place in the centre.', 'Ich hab ’ne Bude im Zentrum gemietet.'],
      ['Погнали ко мне на [[хату]].', 'Let’s go to my place.', 'Lass uns zu mir gehen.']],
      ['«Свободная хата» = parents away, party time.', '«Свободная хата» = sturmfreie Bude.'],
      ['Ukrainian/southern «хата» (peasant house); in thieves’ cant — a place to stay or a flat to rob.', 'Ukrainisch/südlich «хата» (Bauernhaus); in der Gaunersprache Unterkunft oder Wohnung zum Ausrauben.'],
      ['Everywhere.', 'Überall.']),
    S('svalit', 'slang-life', 'свал+ить', 'to bounce, to clear off', 'abhauen, die Biege machen', [
      ['Тут скучно, давай [[свалим]].', 'It’s boring here, let’s bounce.', 'Hier ist es langweilig, lass uns abhauen.'],
      ['Он [[свалил]] за границу.', 'He emigrated (cleared off abroad).', 'Er ist ins Ausland abgehauen.'],
      ['[[Сваливаем]], менты!', 'Clear off, cops!', 'Abhauen, Bullen!']],
      ['Perfective; imperfective «сваливать». «Свалить за бугор» = emigrate.', 'Vollendet; unvollendet «сваливать». «Свалить за бугор» = auswandern.'],
      ['“To drop, dump” → 20th-century slang for leaving quickly.', '„Abwerfen“ → Slang des 20. Jh. für schnell weggehen.'],
      ['Everywhere.', 'Überall.']),
    S('na-meli', 'slang-life', 'на мел+и', 'broke', 'pleite, blank', [
      ['Не могу пойти, я [[на мели]].', 'Can’t go, I’m broke.', 'Ich kann nicht mitkommen, ich bin pleite.'],
      ['До зарплаты сижу [[на мели]].', 'I’m broke till payday.', 'Bis zum Gehalt bin ich blank.'],
      ['Опять [[на мели]]?', 'Broke again?', 'Schon wieder pleite?']],
      ['Also «без копейки», «голяк».', 'Auch «без копейки», «голяк».'],
      ['Nautical: a ship stuck in shallow water (“run aground”), used for money since the 19th century.', 'Seefahrt: ein Schiff auf Grund gelaufen; für Geld seit dem 19. Jh.'],
      ['Everywhere, all ages.', 'Überall, alle Altersgruppen.']),
    S('dvizh', 'slang-life', 'движ', 'action, something going on; a party', 'Action, was los; Party', [
      ['Есть какой-нибудь [[движ]] на выходных?', 'Anything going on at the weekend?', 'Ist am Wochenende irgendwas los?'],
      ['Там такой [[движ]]!', 'There’s so much going on there!', 'Da ist so viel los!'],
      ['Я за любой [[движ]].', 'I’m up for anything.', 'Ich bin für jede Action zu haben.']],
      ['«Я за любой кипиш, кроме голодовки» — a popular joke.', '«Я за любой кипиш, кроме голодовки» — beliebter Spruch.'],
      ['From «движение» (movement); youth slang of the 2000s–2010s.', 'Von «движение» (Bewegung); Jugendslang der 2000er–2010er.'],
      ['Students, clubs.', 'Studis, Clubs.']),
    S('skinutsya', 'slang-life', 'ск+инуться', 'to chip in (money)', 'zusammenlegen (Geld)', [
      ['Давай [[скинемся]] на пиццу.', 'Let’s chip in for pizza.', 'Lass uns für Pizza zusammenlegen.'],
      ['[[Скинулись]] по пятьсот.', 'We each chipped in 500.', 'Jeder hat 500 dazugegeben.'],
      ['[[Скинь]] мне фотку.', 'Send me the photo.', 'Schick mir das Foto.']],
      ['«Скинуться» = chip in; «скинуть» = send (a file, a photo).', '«Скинуться» = zusammenlegen; «скинуть» = schicken (Datei, Foto).'],
      ['“To throw off/into” — everyone throws money into a common pot; Soviet everyday slang.', '„Hineinwerfen“ — jeder wirft Geld in einen Topf; sowjetischer Alltagsslang.'],
      ['Everywhere.', 'Überall.']),

    // ---- Swearing & Insults (18+) — Russian mat ----
    S('blin', 'slang-rude', 'Блин!', 'Damn!, Darn! (mild)', 'Mist!, Verdammt! (mild)', [
      ['[[Блин]], я ключи забыл!', 'Damn, I forgot my keys!', 'Mist, ich hab die Schlüssel vergessen!'],
      ['Ну [[блин]], опять дождь.', 'Oh darn, rain again.', 'Mann, schon wieder Regen.'],
      ['Да [[блин]], отстань!', 'Ugh, leave me alone!', 'Mensch, lass mich in Ruhe!']],
      ['Not mat, a soft euphemism; fine even with parents. It literally means “pancake”.', 'Kein Mat, sondern weicher Ersatz; auch vor Eltern okay. Wörtlich „Pfannkuchen“.'],
      ['A polite replacement for the mat word «блядь» — same first sounds, harmless meaning.', 'Ein höflicher Ersatz für das Mat-Wort «блядь» — gleicher Anfang, harmlose Bedeutung.'],
      ['Everywhere, all ages.', 'Überall, alle Altersgruppen.']),
    S('pizdets', 'slang-rude', 'Пизд+ец!', 'Fucked up!, Total disaster!', 'Scheiße!, Totale Katastrophe!', [
      ['Машина сломалась. [[Пиздец]]!', 'The car broke down. Fuck!', 'Das Auto ist kaputt. Scheiße!'],
      ['Там полный [[пиздец]].', 'It’s a complete shitshow there.', 'Da ist das totale Chaos.'],
      ['[[Пиздец]] как устал.', 'I’m fucking exhausted.', 'Ich bin scheißmüde.']],
      ['Strong mat. Polite replacements: «капец», «звиздец», «трындец».', 'Starkes Mat. Höfliche Ersatzformen: «капец», «звиздец», «трындец».'],
      ['Mat (Russian obscene vocabulary) is built on four roots; this one is from the word for female genitals. In Russia public mat is an administrative offence; mat is banned in media and films (since 2014).', 'Mat (russisches obszönes Vokabular) basiert auf vier Wurzeln; diese von der Bezeichnung des weiblichen Geschlechts. Öffentliches Mat ist eine Ordnungswidrigkeit; in Medien und Filmen verboten (seit 2014).'],
      ['Very common among friends; never at work or with strangers.', 'Unter Freunden sehr verbreitet; nie auf der Arbeit oder bei Fremden.'], V),
    S('ohuet', 'slang-rude', 'Оху+еть!', 'Holy shit!, Fucking hell!', 'Krass!, Ach du Scheiße!', [
      ['[[Охуеть]], какой вид!', 'Holy shit, what a view!', 'Ach du Scheiße, was für eine Aussicht!'],
      ['Ты [[охуел]]?', 'Have you lost your fucking mind?', 'Bist du völlig bescheuert?'],
      ['Я [[охуел]], когда узнал цену.', 'I was fucking shocked when I saw the price.', 'Ich war total geschockt, als ich den Preis sah.']],
      ['Amazement or outrage. «Ты охуел?» to a stranger = invitation to a fight. Polite: «Офигеть!».', 'Staunen oder Empörung. «Ты охуел?» zu Fremden = Aufforderung zur Schlägerei. Höflich: «Офигеть!».'],
      ['From the mat root «хуй» (male genitals); like most mat, its power is in the root, not the literal meaning.', 'Von der Mat-Wurzel «хуй» (männliches Geschlecht); wie bei Mat üblich zählt die Wurzel, nicht die wörtliche Bedeutung.'],
      ['Among friends. Polite version «офигеть» works everywhere.', 'Unter Freunden. Die höfliche Form «офигеть» geht überall.'], V),
    S('suka', 'slang-rude', 'С+ука!', 'Bitch!; Fuck! (exclamation)', 'Schlampe!; Scheiße! (Ausruf)', [
      ['[[Сука]], больно!', 'Fuck, that hurts!', 'Scheiße, tut das weh!'],
      ['Вот [[сука]], обманул!', 'The bastard, he tricked me!', 'So ein Mistkerl, er hat mich reingelegt!'],
      ['[[Сука]], опять пробка.', 'Fuck, traffic again.', 'Scheiße, schon wieder Stau.']],
      ['As an exclamation — very common. As an insult (esp. to a woman or in prison slang, “snitch”) — very heavy.', 'Als Ausruf — sehr verbreitet. Als Beleidigung (v. a. gegen Frauen oder im Knastslang „Verräter“) — sehr schwer.'],
      ['Literally “female dog”. Not technically mat, but close. In 1950s camps the “сучьи войны” were wars between criminals and “bitches” who collaborated with guards.', 'Wörtlich „Hündin“. Technisch kein Mat, aber nah dran. In Lagern der 1950er gab es „Hündinnen-Kriege“ gegen Kollaborateure.'],
      ['Everywhere among men; to a person — a fight.', 'Unter Männern verbreitet; zu einer Person — Schlägerei.'], V),
    S('mudak', 'slang-rude', 'муд+ак', 'asshole, jerk', 'Arschloch, Idiot', [
      ['Какой-то [[мудак]] поцарапал машину.', 'Some asshole scratched the car.', 'Irgendein Arschloch hat das Auto zerkratzt.'],
      ['Не будь [[мудаком]].', 'Don’t be an asshole.', 'Sei kein Arschloch.'],
      ['Он, конечно, [[мудак]], но смешной.', 'He’s an asshole, sure, but funny.', 'Er ist ein Arschloch, klar, aber witzig.']],
      ['Strong insult; not the worst, but enough for a fight. Milder: «придурок», «козёл».', 'Starke Beleidigung; nicht die schlimmste, aber genug für Prügel. Milder: «придурок», «козёл».'],
      ['From the old word «муде» (testicles); it is on the edge of mat.', 'Vom alten Wort «муде» (Hoden); grenzt an Mat.'],
      ['Everywhere among adults.', 'Unter Erwachsenen überall.'], V),
    S('zaebal', 'slang-rude', 'Заеб+ал!', 'You’re pissing me off!, I’m fed up!', 'Du gehst mir auf den Sack!, Ich hab’s satt!', [
      ['[[Заебал]], отстань!', 'You’re pissing me off, leave me alone!', 'Du nervst, lass mich in Ruhe!'],
      ['Эта работа меня [[заебала]].', 'I’m fucking sick of this job.', 'Ich hab die Schnauze voll von dem Job.'],
      ['Всё, [[заебало]].', 'That’s it, I’m done.', 'Das war’s, ich hab’s satt.']],
      ['Annoyance, exhaustion. Polite: «задолбал», «достал».', 'Ärger, Erschöpfung. Höflich: «задолбал», «достал».'],
      ['From the mat root «еб-» (to fuck), the most productive mat root: hundreds of words.', 'Von der Mat-Wurzel «еб-» (ficken), der produktivsten: Hunderte Wörter.'],
      ['Among friends, often about work. Polite «достал» works with anyone.', 'Unter Freunden, oft über die Arbeit. «достал» geht bei allen.'], V),
    S('poshel-na', 'slang-rude', 'Пошёл на хуй!', 'Fuck off!', 'Verpiss dich!, Fick dich!', [
      ['[[Пошёл на хуй]] со своими советами!', 'Fuck off with your advice!', 'Verpiss dich mit deinen Ratschlägen!'],
      ['Он послал его [[на хуй]].', 'He told him to fuck off.', 'Er hat ihn zum Teufel geschickt.'],
      ['Да [[ну на хуй]]!', 'No fucking way!', 'Echt jetzt?! / Kein Bock!']],
      ['The most famous Russian insult. «Послать на хуй» = tell someone to fuck off. Polite: «Иди ты!», «Отвали!».', 'Die bekannteste russische Beleidigung. «Послать на хуй» = zum Teufel schicken. Höflich: «Иди ты!», «Отвали!».'],
      ['Mat root «хуй». «Послать на три буквы» (“send to the three letters”) is the polite way to describe it — the word has three letters.', 'Mat-Wurzel «хуй». «Послать на три буквы» („zu den drei Buchstaben schicken“) ist die höfliche Umschreibung — das Wort hat drei Buchstaben.'],
      ['Say it to a stranger and expect a fight.', 'Zu Fremden gesagt — rechne mit einer Schlägerei.'], V),
    S('ebtvoyu', 'slang-rude', 'Ёб твою мать!', 'Motherfucker!, Fuck! (exclamation)', 'Verdammte Scheiße!', [
      ['[[Ёб твою мать]], я пролил кофе!', 'Fuck, I spilled my coffee!', 'Verdammte Scheiße, ich hab Kaffee verschüttet!'],
      ['[[Ёпт]], смотри куда едешь!', 'Fuck, watch where you’re driving!', 'Mann, pass auf, wo du hinfährst!'],
      ['[[Ёлки-палки]], опять сломалось!', 'Darn it, it broke again! (polite)', 'Menno, schon wieder kaputt! (höflich)']],
      ['As an exclamation — frustration. Aimed at a person — it insults their mother: guaranteed fight. Polite: «ёлки-палки», «ёкарный бабай».', 'Als Ausruf — Frust. Gegen eine Person — beleidigt die Mutter: garantierte Schlägerei. Höflich: «ёлки-палки».'],
      ['The classic “mother oath” of Russian mat, recorded since the 17th century; scholars link it to pagan formulas.', 'Der klassische „Mutterfluch“ des Mat, seit dem 17. Jh. belegt; Forscher verbinden ihn mit heidnischen Formeln.'],
      ['Builders, drivers, army — the stereotype of “mat as punctuation”.', 'Bauarbeiter, Fahrer, Armee — das Klischee „Mat als Satzzeichen“.'], V),
    S('poputal', 'slang-rude', 'Ты чё, поп+утал?', 'Have you lost your mind?, Who do you think you are?', 'Spinnst du?, Was fällt dir ein?', [
      ['[[Ты чё, попутал]]? Это моё место.', 'Have you lost it? That’s my seat.', 'Spinnst du? Das ist mein Platz.'],
      ['[[Берега попутал]]?', 'Forgot your place?', 'Hast du vergessen, wo dein Platz ist?'],
      ['Извини, брат, я [[попутал]].', 'Sorry, bro, my mistake.', 'Sorry, Bruder, mein Fehler.']],
      ['A street provocation (наезд) before a fight. Best reply: stay calm and apologise or leave.', 'Eine Straßenprovokation (наезд) vor einer Schlägerei. Beste Antwort: ruhig bleiben, entschuldigen oder gehen.'],
      ['Thieves’ cant: «попутать рамсы/берега» — to confuse the rules of the criminal world, i.e. to overstep.', 'Gaunersprache: «попутать рамсы/берега» — die Regeln der Unterwelt verwechseln, also zu weit gehen.'],
      ['Courtyards, bars, prisons.', 'Höfe, Bars, Gefängnisse.'], V)
  ] });
})();
