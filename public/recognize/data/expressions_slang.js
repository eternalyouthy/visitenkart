/* GERMAN · Expressions → Slang: Berlin street and youth slang (Kiezdeutsch, Jugendsprache) + swearing (18+).
 * Categories: slang-crew / slang-react / slang-people / slang-life / slang-rude (GT.EXP_SECTIONS in js/core.js).
 * Each card: gloss ru + en, three examples, note, origin (history) and where (who says it, where) as { ru, en }.
 * register 'slang', or 'vulgar' for swear words (the card shows a warning). Examples written for ETRNL. */
(function () {
  'use strict';
  function S(id, topic, de, ru, en, exs, note, origin, where, reg) {
    return { id: 'exp-slang-' + id, topic: topic, type: 'chunk', register: reg || 'slang', de: de, ru: ru, en: en,
      examples: exs.map(function (e) { return { de: e[0], ru: e[1], en: e[2] }; }),
      note: { ru: note[0], en: note[1] }, origin: { ru: origin[0], en: origin[1] }, where: { ru: where[0], en: where[1] } };
  }
  var V = 'vulgar';
  GT.register({ tab: 'expressions', type: 'chunk', items: [
    // ---- Greetings & Crew ----
    S('digga', 'slang-crew', 'Digga', 'братан, чувак (обращение к другу)', 'bro, dude (addressing a friend)', [
      ['[[Digga]], wo bist du? Wir warten am Späti.', 'Братан, ты где? Мы ждём у Шпети.', 'Bro, where are you? We’re waiting at the Späti.'],
      ['[[Digga]], was?! Das hat 50 Euro gekostet?', 'Чувак, чего?! Это стоило 50 евро?', 'Dude, what?! That cost 50 euros?'],
      ['Chill mal, [[Digga]], alles gut.', 'Расслабься, братан, всё нормально.', 'Chill, bro, it’s all good.']],
      ['Обращение к другу и восклицание удивления («Digga, was?!»). Пишут и «Digger», «Diggi».', 'An address for a friend and a cry of surprise (“Digga, was?!”). Also spelt “Digger”, “Diggi”.'],
      ['От «Dicker» — «толстяк»; в 1990-е так дружески звали друг друга в Гамбурге. Через немецкий рэп (Gzuz, 187 Strassenbande) слово к 2010-м разошлось по всей стране и потеряло обидный смысл.', 'From “Dicker” (fatty), a friendly nickname in 1990s Hamburg. Through German rap (Gzuz, 187 Strassenbande) it spread nationwide by the 2010s and lost its insulting sense.'],
      ['Школьники и молодёжь до ~30 по всей Германии, особенно Гамбург и Берлин. Взрослые используют иронично.', 'Teens and young adults up to ~30 all over Germany, especially Hamburg and Berlin. Older people use it ironically.']),
    S('alter', 'slang-crew', 'Alter!', 'чувак!; блин! (обращение или удивление)', 'dude!; man! (address or surprise)', [
      ['[[Alter]], hast du das gesehen?', 'Чувак, ты это видел?', 'Dude, did you see that?'],
      ['[[Alter]], ist das teuer hier!', 'Блин, как же тут дорого!', 'Man, it’s expensive here!'],
      ['Ey [[Alter]], gib mir mal das Ladekabel.', 'Эй, чувак, дай-ка зарядку.', 'Hey dude, pass me the charger.']],
      ['Может быть обращением или просто восклицанием. Растянутое «Aaalter!» — сильное удивление или возмущение.', 'Either an address or a pure exclamation. A drawn-out “Aaalter!” means strong surprise or outrage.'],
      ['Буквально «старик», как «старина» в русском. Как обращение к другу известно с 1970-х, а с 1990-х превратилось в универсальное междометие.', 'Literally “old one”, like “old man”. Used for friends since the 1970s; from the 1990s it became an all-purpose interjection.'],
      ['Вся Германия, все возрасты до ~40. Одно из самых частых слов в речи подростков.', 'All of Germany, all ages up to ~40. One of the most frequent words in teenage speech.']),
    S('atze', 'slang-crew', 'Atze', 'кореш, приятель (берлинское)', 'mate, buddy (Berlin)', [
      ['Das ist mein [[Atze]] aus der Schule.', 'Это мой кореш со школы.', 'That’s my buddy from school.'],
      ['Na, [[Atze]], alles fit?', 'Ну что, кореш, всё путём?', 'Hey buddy, all good?'],
      ['Wir sind seit zwanzig Jahren [[Atzen]].', 'Мы кореша уже двадцать лет.', 'We’ve been mates for twenty years.']],
      ['Мн. ч. «Atzen». Тёплое, немного старомодно-берлинское слово.', 'Plural “Atzen”. A warm, slightly old-school Berlin word.'],
      ['Старое берлинское диалектное слово «брат, друг». Вернулось в моду в 2000-е благодаря дуэту «Die Atzen» и хиту «Disco Pogo».', 'An old Berlin dialect word for brother or friend. Revived in the 2000s by the duo “Die Atzen” and their hit “Disco Pogo”.'],
      ['Берлин и Бранденбург, скорее мужики 25+; молодёжь — с иронией.', 'Berlin and Brandenburg, mostly men 25+; younger people use it ironically.']),
    S('was-geht', 'slang-crew', 'Was geht (ab)?', 'как дела?; чё как?', 'what’s up?', [
      ['Ey, [[was geht]]? Lange nicht gesehen!', 'Эй, чё как? Давно не виделись!', 'Hey, what’s up? Long time no see!'],
      ['– [[Was geht ab]] heute? – Nix, chillen.', '— Что сегодня намечается? — Ничего, чилим.', '— What’s on today? — Nothing, chilling.'],
      ['[[Was geht]], Leute? Seid ihr schon da?', 'Как оно, народ? Вы уже на месте?', 'What’s up, guys? Are you there yet?']],
      ['Приветствие вместо «Wie geht’s?». «Was geht ab?» ещё и «что происходит / что намечается».', 'A greeting instead of “Wie geht’s?”. “Was geht ab?” also means “what’s happening / what’s on”.'],
      ['Калька с американского «What’s up?», пришла с хип-хопом в 1990-е (Die Fantastischen Vier, Fettes Brot).', 'A calque of American “What’s up?”, arriving with hip-hop in the 1990s (Die Fantastischen Vier, Fettes Brot).'],
      ['Везде среди молодёжи; в мессенджерах часто «wg?».', 'Everywhere among young people; in messengers often “wg?”.']),
    S('bruder', 'slang-crew', 'Bruder / Bro / Bra', 'брат, братан', 'bro, brother', [
      ['[[Bruder]], du bist der Beste.', 'Брат, ты лучший.', 'Bro, you’re the best.'],
      ['Ich schwör, [[Bra]], ich zahl’s dir morgen zurück.', 'Клянусь, братан, завтра верну.', 'I swear, bro, I’ll pay you back tomorrow.'],
      ['Mach dir keine Sorgen, [[Brudi]].', 'Не парься, братишка.', 'Don’t worry, bro.']],
      ['Обращение к близкому другу. «Bra», «Brudi», «Brudah» — уличные варианты.', 'Address for a close friend. “Bra”, “Brudi”, “Brudah” are street variants.'],
      ['«Bra» и «Brudah» появились в Кицдойче — смешанном языке районов, где растут дети турецких, арабских, курдских семей. Там «брат» — главное слово доверия.', '“Bra” and “Brudah” come from Kiezdeutsch, the mixed speech of neighbourhoods where children of Turkish, Arab and Kurdish families grow up; “brother” is the key word of trust there.'],
      ['Нойкёльн, Кройцберг, Веддинг, а сейчас и вся немецкая молодёжь, особенно в рэпе.', 'Neukölln, Kreuzberg, Wedding — and now young people everywhere, especially in rap.']),
    S('wallah', 'slang-crew', 'Wallah! / Ich schwör!', 'клянусь!, честно!', 'I swear!, for real!', [
      ['[[Wallah]], ich war das nicht!', 'Клянусь, это не я!', 'I swear, it wasn’t me!'],
      ['[[Ich schwör]], der Typ war zwei Meter groß.', 'Отвечаю, этот тип был два метра ростом.', 'I swear, the guy was two metres tall.'],
      ['– Echt jetzt? – [[Wallah]], Bruder.', '— Серьёзно? — Клянусь, брат.', '— Really? — I swear, bro.']],
      ['Подтверждает, что ты не врёшь. Вопросом («Wallah?») — «серьёзно?».', 'Confirms you’re not lying. As a question (“Wallah?”) it means “seriously?”.'],
      ['Из арабского «wa-llāh» — «клянусь Богом». Пришло через Кицдойч; Jugendwort-кандидат 2010-х. «Ich schwör» — немецкая калька.', 'From Arabic “wa-llāh” — “by God”. Came in via Kiezdeutsch and was a youth-word candidate in the 2010s. “Ich schwör” is the German calque.'],
      ['Школьные дворы больших городов. Употребляют и дети без арабских корней.', 'School yards in big cities. Used by kids with no Arab background too.']),
    S('habibi', 'slang-crew', 'Habibi', 'дорогой, братишка (ласково)', 'my dear, buddy (affectionate)', [
      ['[[Habibi]], komm, wir gehen Döner essen.', 'Братишка, пошли поедим дёнер.', 'Buddy, come on, let’s get a döner.'],
      ['Danke, [[Habibi]], du hast mich gerettet.', 'Спасибо, дорогой, ты меня спас.', 'Thanks, my dear, you saved me.'],
      ['[[Habibi]], warum bist du so gestresst?', 'Дорогой, чего ты такой нервный?', 'Buddy, why are you so stressed?']],
      ['Ласковое обращение к другу. К женщине — «Habibti».', 'An affectionate address for a friend. To a woman: “Habibti”.'],
      ['Арабское «мой любимый». В Берлине его слышно на Зонненаллее («арабская улица»), откуда оно ушло в молодёжный сленг и мемы.', 'Arabic for “my beloved”. In Berlin you hear it on Sonnenallee (“Arab Street”), from where it spread into youth slang and memes.'],
      ['Берлин-Нойкёльн, крупные города, соцсети.', 'Berlin-Neukölln, big cities, social media.']),

    // ---- Reactions & Hype ----
    S('krass', 'slang-react', 'Krass!', 'жесть!; офигеть! (и о хорошем, и о плохом)', 'crazy!, wow! (good or bad)', [
      ['Du hast den Job? [[Krass]]!', 'Ты получил работу? Офигеть!', 'You got the job? Crazy!'],
      ['Das Konzert war [[voll krass]].', 'Концерт был просто улёт.', 'The concert was totally insane.'],
      ['[[Krass]], wie kalt es heute ist.', 'Жесть, как сегодня холодно.', 'Crazy how cold it is today.']],
      ['Самая частая реакция у молодёжи. Усиление: «voll krass», «krass gut».', 'The most common youth reaction. Stronger: “voll krass”, “krass gut”.'],
      ['Литературное слово «krass» (из лат. crassus — «грубый, толстый») значило «резкий, вопиющий». В 1980-е молодёжь сделала из него универсальное «вау».', 'The standard word “krass” (Latin crassus, “thick, crude”) meant “blatant, extreme”. In the 1980s young people turned it into an all-purpose “wow”.'],
      ['Вся Германия, от школьников до 50-летних.', 'All of Germany, from schoolkids to 50-year-olds.']),
    S('laeuft', 'slang-react', 'Läuft bei dir!', 'у тебя всё в шоколаде!; круто устроился!', 'you’re killing it!, nice going!', [
      ['Neue Wohnung, neuer Job – [[läuft bei dir]]!', 'Новая квартира, новая работа — у тебя всё в шоколаде!', 'New flat, new job — you’re killing it!'],
      ['Du bist schon wieder hingefallen? [[Läuft bei dir]].', 'Опять упал? Ну ты красавчик (ирония).', 'Fell over again? Going great for you (ironic).'],
      ['– Ich hab 1,0 im Abi. – [[Läuft bei dir]]!', '— У меня высший балл на выпускных. — Красава!', '— I got top marks in my finals. — Nice going!']],
      ['Искренне — похвала, иронично — когда у кого-то что-то пошло не так.', 'Sincerely it’s praise; ironically it’s for when something went wrong.'],
      ['Молодёжное слово года 2014 по версии издательства Langenscheidt. «Es läuft» — «дела идут».', 'Youth word of the year 2014 (Langenscheidt). “Es läuft” — “things are going”.'],
      ['Школы, соцсети, мемы. Сейчас слегка «устарело», поэтому часто звучит иронично.', 'Schools, social media, memes. Now slightly dated, so often ironic.']),
    S('isso', 'slang-react', 'Isso.', 'так и есть; факт', 'that’s how it is; facts', [
      ['– Montags ist die U-Bahn immer voll. – [[Isso]].', '— По понедельникам метро всегда забито. — Факт.', '— The U-Bahn is always packed on Mondays. — Facts.'],
      ['Berlin ist teuer geworden. [[Isso]].', 'Берлин стал дорогим. Так и есть.', 'Berlin has got expensive. That’s how it is.'],
      ['[[Isso]], da kann man nix machen.', 'Так и есть, ничего не поделаешь.', 'That’s just how it is, nothing you can do.']],
      ['Короткое согласие, конец обсуждения.', 'Quick agreement, end of discussion.'],
      ['Слитное «ist so» в быстрой речи. Попало в шорт-лист молодёжного слова 2016.', '“Ist so” run together in fast speech. Shortlisted for youth word 2016.'],
      ['Устная речь и чаты по всей стране.', 'Spoken German and chats everywhere.']),
    S('safe', 'slang-react', 'Safe!', 'точно!, стопудово!', 'for sure!, definitely!', [
      ['– Kommst du heute Abend? – [[Safe]]!', '— Придёшь сегодня вечером? — Стопудово!', '— Are you coming tonight? — For sure!'],
      ['Das wird [[safe]] regnen.', 'Сто процентов будет дождь.', 'It’s definitely going to rain.'],
      ['[[Safe]] nicht, Digga.', 'Точно нет, братан.', 'Definitely not, bro.']],
      ['Произносится по-английски. Значит «sicher», «на сто процентов».', 'Pronounced as in English. Means “sicher”, a hundred percent.'],
      ['Из английского «safe» — «надёжный». В немецком молодёжном сленге с 2000-х стало синонимом «sicher» (оба значат и «безопасный», и «точно»).', 'From English “safe”. Since the 2000s German youth have used it for “sicher”, which means both “safe” and “sure”.'],
      ['Молодёжь до ~25 по всей стране.', 'Young people up to ~25 everywhere.']),
    S('goenn-dir', 'slang-react', 'Gönn dir!', 'балуй себя!, давай, ты заслужил!', 'treat yourself!, go for it!', [
      ['Noch ein Döner? [[Gönn dir]]!', 'Ещё один дёнер? Давай, ты заслужил!', 'Another döner? Treat yourself!'],
      ['Du fliegst nach Bali? [[Gönn dir]]!', 'Летишь на Бали? Красиво живёшь!', 'You’re flying to Bali? Go for it!'],
      ['Ich [[gönn mir]] heute mal ein Taxi.', 'Сегодня побалую себя такси.', 'I’m treating myself to a taxi today.']],
      ['От «gönnen» — «не жалеть, позволить». Бывает с завистью или иронией.', 'From “gönnen” — to grant, not begrudge. Can be envious or ironic.'],
      ['Стало мемом в 2014–2015 гг. через рэп и Instagram; в 2015 — в топе молодёжных слов.', 'Became a meme in 2014–15 via rap and Instagram; top youth word list in 2015.'],
      ['Соцсети, друзья, реклама (бренды его активно используют).', 'Social media, friends, ads (brands love it).']),
    S('cringe', 'slang-react', 'Das ist so cringe.', 'это такой кринж', 'that’s so cringe', [
      ['Er hat im Bus laut gesungen – [[so cringe]].', 'Он громко пел в автобусе — такой кринж.', 'He sang loudly on the bus — so cringe.'],
      ['Mein Vater benutzt Jugendwörter. [[Cringe]]!', 'Мой отец говорит молодёжными словами. Кринж!', 'My dad uses youth slang. Cringe!'],
      ['Das alte Foto ist voll [[cringe]].', 'Это старое фото — сплошной кринж.', 'That old photo is so cringe.']],
      ['Неловко, стыдно за кого-то.', 'Awkward; second-hand embarrassment.'],
      ['Английское «to cringe» — «съёжиться». Молодёжное слово года 2021.', 'English “to cringe” — to shrink back. German youth word of the year 2021.'],
      ['Подростки, TikTok, YouTube.', 'Teenagers, TikTok, YouTube.']),
    S('geil', 'slang-react', 'Geil!', 'круто!, офигенно!', 'awesome!, sick!', [
      ['Das Wetter ist [[geil]] heute.', 'Погода сегодня офигенная.', 'The weather is awesome today.'],
      ['[[Wie geil]] ist das denn!', 'Ну это вообще улёт!', 'How awesome is that!'],
      ['Der Film war nicht so [[geil]].', 'Фильм был так себе.', 'The film wasn’t that great.']],
      ['Сейчас почти нейтрально среди молодых, но в старшем поколении и на работе звучит грубовато.', 'Almost neutral among young people now, but older people and offices still find it a bit crude.'],
      ['Изначально «похотливый, возбуждённый». С 1970–80-х молодёжь стала говорить так обо всём крутом; реклама «Geiz ist geil» (2002) закрепила это значение.', 'Originally “horny, lustful”. From the 1970s–80s young people used it for anything cool; the ad slogan “Geiz ist geil” (2002) cemented it.'],
      ['Повсюду в разговорной речи; не на собеседовании.', 'Everywhere in casual speech; not in a job interview.']),
    S('mies', 'slang-react', 'Mies!', 'отстой!; (и) очень, жёстко', 'lousy!; (also) really, super', [
      ['Das Essen war [[mies]].', 'Еда была отстой.', 'The food was lousy.'],
      ['Der Beat ist [[mies]] gut!', 'Бит жёстко хорош!', 'The beat is insanely good!'],
      ['Mir geht’s heute [[mies]].', 'Мне сегодня хреново.', 'I feel lousy today.']],
      ['Обычно «плохой», но у молодёжи и усилитель: «mies gut» = очень хорошо.', 'Usually “bad”, but young people also use it as an intensifier: “mies gut” = really good.'],
      ['Из идиша «mies» — «гадкий, противный» (ивр. «me’is»). Через берлинский и венский жаргон вошло в общий язык ещё в XIX в.', 'From Yiddish “mies” — nasty (Hebrew me’is). Entered general German via Berlin and Viennese slang in the 19th century.'],
      ['Вся Германия; значение «очень» — в основном рэп и молодёжь.', 'All of Germany; the “very” meaning mostly in rap and among youth.']),

    // ---- People & Attitude ----
    S('ehrenmann', 'slang-people', 'Ehrenmann / Ehrenfrau', 'человек чести; красавчик (за добрый поступок)', 'a real one, a legend (for a kind act)', [
      ['Er hat mir sein letztes Ticket gegeben – [[Ehrenmann]]!', 'Он отдал мне свой последний билет — красавчик!', 'He gave me his last ticket — a real one!'],
      ['Du hast für alle bezahlt? [[Ehrenfrau]]!', 'Ты за всех заплатила? Уважуха!', 'You paid for everyone? Legend!'],
      ['Ein echter [[Ehrenmann]] hält sein Wort.', 'Настоящий мужик держит слово.', 'A real one keeps his word.']],
      ['Похвала за порядочный, щедрый поступок. Противоположность — «Ehrenlos» (бесчестный).', 'Praise for something decent or generous. Opposite: “ehrenlos” (dishonourable).'],
      ['Понятие «чести» (Ehre) важно в уличной культуре и рэпе; в 2018 «Ehrenmann/Ehrenfrau» стало молодёжным словом года.', 'Honour (Ehre) matters in street culture and rap; “Ehrenmann/Ehrenfrau” was youth word of the year 2018.'],
      ['Школы, соцсети, комментарии на YouTube.', 'Schools, social media, YouTube comments.']),
    S('lauch', 'slang-people', 'Lauch', 'дрищ, слабак', 'weakling, noodle (skinny guy)', [
      ['Der [[Lauch]] kann nicht mal die Kiste tragen.', 'Этот дрищ даже ящик донести не может.', 'That noodle can’t even carry the crate.'],
      ['Geh mal ins Gym, du [[Lauch]].', 'Сходи в качалку, дрищ.', 'Hit the gym, you noodle.'],
      ['Früher war ich so ein [[Lauch]].', 'Раньше я был таким дрищом.', 'I used to be such a weakling.']],
      ['Насмешка, между друзьями шутливо. Чужому лучше не говорить.', 'A taunt; teasing among friends. Better not said to strangers.'],
      ['Буквально «лук-порей» — длинный и тонкий. Популярно с середины 2010-х через фитнес-блогеров.', 'Literally “leek” — long and thin. Popular since the mid-2010s via fitness YouTubers.'],
      ['Школы, спортзалы, геймеры.', 'Schools, gyms, gamers.']),
    S('lost', 'slang-people', 'lost sein', 'не в теме, потерянный, не врубаться', 'be clueless, be lost', [
      ['In Mathe bin ich komplett [[lost]].', 'В математике я вообще не врубаюсь.', 'I’m completely lost in maths.'],
      ['Der ist voll [[lost]], der weiß gar nix.', 'Он вообще не в теме, ничего не знает.', 'He’s totally clueless, he knows nothing.'],
      ['Ohne Handy bin ich [[lost]].', 'Без телефона я как без рук.', 'Without my phone I’m lost.']],
      ['О человеке, который не понимает, что происходит.', 'About someone who has no idea what’s going on.'],
      ['Английское «lost». Молодёжное слово года 2020 — года пандемии, когда многие «потерялись».', 'English “lost”. Youth word of the year 2020 — the pandemic year when many felt lost.'],
      ['Подростки и студенты.', 'Teens and students.']),
    S('babo', 'slang-people', 'Babo', 'босс, главный', 'the boss, the big man', [
      ['Im Kiez ist er der [[Babo]].', 'В районе он главный.', 'In the neighbourhood he’s the boss.'],
      ['Wer ist hier der [[Babo]]?', 'Кто тут главный?', 'Who’s the boss here?'],
      ['Spiel nicht den [[Babo]].', 'Не строй из себя босса.', 'Don’t play the big man.']],
      ['Главный, тот, кого уважают. Часто иронично.', 'The one in charge, the one people respect. Often ironic.'],
      ['Из турецкого/курдского «baba» — «отец». Прославилось песней рэпера Haftbefehl «Chabos wissen, wer der Babo ist» (2012); молодёжное слово 2013.', 'From Turkish/Kurdish “baba” — father. Made famous by rapper Haftbefehl’s “Chabos wissen, wer der Babo ist” (2012); youth word 2013.'],
      ['Рэп, Оффенбах, Франкфурт, Берлин.', 'Rap, Offenbach, Frankfurt, Berlin.']),
    S('dicke-hose', 'slang-people', 'auf dicke Hose machen', 'понтоваться, выпендриваться', 'show off, act big', [
      ['Mit seinem Auto [[macht]] er immer [[auf dicke Hose]].', 'Со своей тачкой он вечно понтуется.', 'He always shows off with his car.'],
      ['[[Mach]] nicht [[auf dicke Hose]], du hast kein Geld.', 'Не понтуйся, у тебя денег нет.', 'Don’t act big, you’ve got no money.'],
      ['Im Club [[machen]] alle [[auf dicke Hose]].', 'В клубе все выпендриваются.', 'In the club everyone shows off.']],
      ['Об показной крутости и богатстве.', 'About flaunting toughness or money.'],
      ['Образ: штаны раздуты от толстого кошелька. Выражение известно с 1980-х.', 'The image: trousers bulging with a fat wallet. Known since the 1980s.'],
      ['Вся Германия, разговорная речь.', 'All of Germany, colloquial speech.']),
    S('stress-machen', 'slang-people', 'Mach keinen Stress!', 'не нарывайся!; не устраивай разборок!', 'don’t start trouble!, chill!', [
      ['Ey, [[mach keinen Stress]], wir wollen nur feiern.', 'Эй, не нарывайся, мы просто хотим потусить.', 'Hey, don’t start trouble, we just want to party.'],
      ['Die Typen da [[machen Stress]].', 'Те ребята нарываются.', 'Those guys are starting trouble.'],
      ['Ich will keinen [[Stress]], okay?', 'Мне проблемы не нужны, ок?', 'I don’t want any trouble, okay?']],
      ['На улице «Stress machen / schieben» = искать конфликт, драку. Важная фраза, чтобы разрядить ситуацию.', 'On the street “Stress machen / schieben” means picking a fight. A key phrase for calming things down.'],
      ['Английское «stress» в немецком значит «напряг, ссора»; в Кицдойче — «конфликт с угрозой драки».', 'English “stress” means hassle or a row in German; in Kiezdeutsch, a fight about to happen.'],
      ['Улица, клубы, общественный транспорт ночью.', 'The street, clubs, night trains and buses.']),
    S('aura', 'slang-people', 'Aura haben', 'быть харизматичным, круто себя держать', 'have aura, have presence', [
      ['Der Typ hat einfach [[Aura]].', 'У этого парня просто харизма.', 'That guy just has aura.'],
      ['Du hast gerade minus 1000 [[Aura]].', 'Ты сейчас потерял все очки крутости.', 'You just lost 1000 aura.'],
      ['Wenn sie reinkommt, merkt man ihre [[Aura]].', 'Когда она входит, сразу чувствуется её харизма.', 'When she walks in you feel her aura.']],
      ['Крутость, харизма. «Aura verlieren» — опозориться.', 'Coolness, presence. “Aura verlieren” — to embarrass yourself.'],
      ['Тренд из TikTok («aura points»), молодёжное слово года 2024.', 'A TikTok trend (“aura points”), youth word of the year 2024.'],
      ['Школьники, TikTok.', 'School kids, TikTok.']),
    S('kek', 'slang-people', 'Kek', 'лошара, неудачник', 'loser, dork', [
      ['Was für ein [[Kek]].', 'Вот лошара.', 'What a dork.'],
      ['Sei kein [[Kek]] und komm mit.', 'Не будь лохом, пошли с нами.', 'Don’t be a loser, come with us.'],
      ['Der [[Kek]] hat sich selbst ausgesperrt.', 'Этот лошара запер сам себя снаружи.', 'That dork locked himself out.']],
      ['Мягкая насмешка. Немного детское слово.', 'A mild taunt. A bit childish.'],
      ['Изначально в онлайн-играх «kek» = «lol» (так в корейской раскладке выглядел смех «ㅋㅋㅋ»). В немецкой школе стало значить «лох».', 'In online games “kek” meant “lol” (Korean laughter ㅋㅋㅋ). In German schools it came to mean “loser”.'],
      ['Школьники, геймеры.', 'School kids, gamers.']),

    // ---- Money, Chilling & Street ----
    S('para', 'slang-life', 'Para / Kohle', 'бабки, деньги', 'cash, dough', [
      ['Ich hab keine [[Para]] mehr, Digga.', 'У меня бабок больше нет, братан.', 'I’m out of cash, bro.'],
      ['Der verdient richtig [[Kohle]].', 'Он зарабатывает реально много бабла.', 'He makes serious dough.'],
      ['Leih mir mal zehn Euro, ich hab keine [[Kohle]] dabei.', 'Одолжи десятку, у меня с собой нет денег.', 'Lend me ten euros, I’ve got no cash on me.']],
      ['«Para» — уличное, «Kohle» — разговорное по всей Германии.', '“Para” is street; “Kohle” is colloquial everywhere.'],
      ['«Para» — из турецкого (а туда из персидского) «деньги». «Kohle» (уголь) — с XIX в., когда уголь был ценным товаром, которым даже расплачивались.', '“Para” is Turkish (from Persian) for money. “Kohle” (coal) dates from the 19th century, when coal was valuable enough to pay with.'],
      ['«Para» — Берлин, рэп; «Kohle» — все.', '“Para” — Berlin, rap; “Kohle” — everybody.']),
    S('chillen', 'slang-life', 'chillen', 'чилить, отдыхать, ничего не делать', 'chill, hang out', [
      ['Heute wird nur [[gechillt]].', 'Сегодня только чилим.', 'Today we’re just chilling.'],
      ['[[Chill mal]], das ist doch kein Problem.', 'Успокойся, это вообще не проблема.', 'Chill out, it’s no big deal.'],
      ['Wir [[chillen]] am Wochenende im Park.', 'На выходных чилим в парке.', 'We’re chilling in the park at the weekend.']],
      ['Обычный глагол: ich chille, gechillt. «Chill mal!» — «Остынь!».', 'A regular verb: ich chille, gechillt. “Chill mal!” — “Calm down!”.'],
      ['Английское «to chill» — «охлаждать, остыть». В немецком с 1990-х через хип-хоп и техно-сцену.', 'English “to chill”. In German since the 1990s via hip-hop and the techno scene.'],
      ['Повсеместно, кроме официального языка.', 'Everywhere except formal language.']),
    S('spaeti', 'slang-life', 'der Späti', 'круглосуточный магазинчик (Берлин)', 'late-night corner shop (Berlin)', [
      ['Wir holen noch zwei Mate vom [[Späti]].', 'Возьмём ещё две мате в Шпети.', 'Let’s grab two more Mates from the Späti.'],
      ['Treffen wir uns vorm [[Späti]]?', 'Встретимся у Шпети?', 'Shall we meet outside the Späti?'],
      ['Der [[Späti]] hat bis vier Uhr auf.', 'Шпети работает до четырёх утра.', 'The Späti is open till 4 a.m.']],
      ['Сокращение от «Spätkauf» — «поздняя покупка».', 'Short for “Spätkauf” — “late shop”.'],
      ['Возникли в ГДР для рабочих поздних смен. После объединения стали символом Берлина: пиво, снеки, посиделки на скамейке у входа.', 'Started in East Germany for late-shift workers. After reunification they became a Berlin icon: beer, snacks, sitting on the bench outside.'],
      ['Берлин и Лейпциг; в других городах говорят «Kiosk» или «Büdchen».', 'Berlin and Leipzig; elsewhere people say “Kiosk” or “Büdchen”.']),
    S('bock', 'slang-life', '(keinen) Bock haben', '(не) иметь охоты, (не) хотеть', 'be (not) up for it', [
      ['Ich hab heute [[keinen Bock]] auf Uni.', 'Мне сегодня неохота в универ.', 'I can’t be bothered with uni today.'],
      ['[[Hast du Bock]] auf Kino?', 'Хочешь в кино?', 'Fancy the cinema?'],
      ['Null [[Bock]], Alter.', 'Вообще не охота, чувак.', 'Zero interest, dude.']],
      ['Очень разговорное, но не грубое.', 'Very colloquial but not rude.'],
      ['Возможно, от цыганского «bokh» — «голод». В 1970-е стало молодёжным словом; «Null Bock» — лозунг поколения 80-х.', 'Possibly from Romani “bokh” — hunger. A youth word in the 1970s; “Null Bock” was a slogan of the 1980s generation.'],
      ['Вся Германия, все возрасты.', 'All of Germany, all ages.']),
    S('biege', 'slang-life', 'die Biege machen', 'свалить, смыться', 'bounce, take off', [
      ['Die Party ist langweilig, lass uns [[die Biege machen]].', 'Вечеринка скучная, давай свалим.', 'The party’s boring, let’s bounce.'],
      ['Als die Polizei kam, haben alle [[die Biege gemacht]].', 'Когда приехала полиция, все смылись.', 'When the police came, everyone took off.'],
      ['Ich [[mach]] jetzt [[die Biege]], tschüss!', 'Я сваливаю, пока!', 'I’m off now, bye!']],
      ['Синонимы: «abhauen», «sich verpissen» (грубо).', 'Synonyms: “abhauen”, “sich verpissen” (rude).'],
      ['Буквально «сделать изгиб» — свернуть за угол и исчезнуть. Берлинское выражение с XX в.', 'Literally “make a bend” — turn the corner and vanish. A Berlin phrase from the 20th century.'],
      ['Берлин, Восточная Германия.', 'Berlin, eastern Germany.']),
    S('abhaengen', 'slang-life', 'abhängen', 'тусоваться, зависать', 'hang out', [
      ['Wir [[hängen]] am Kanal [[ab]].', 'Мы зависаем на канале.', 'We’re hanging out by the canal.'],
      ['Wo [[hängt]] ihr heute [[ab]]?', 'Где вы сегодня тусуетесь?', 'Where are you hanging out today?'],
      ['Ich will einfach nur [[abhängen]].', 'Хочу просто ничего не делать.', 'I just want to hang out.']],
      ['Отделяемая приставка: ich hänge ab, abgehangen.', 'Separable verb: ich hänge ab, abgehangen.'],
      ['Калька с английского «hang out». Также «abhängen» = «оторваться от преследователя» — старое значение.', 'A calque of English “hang out”. The older meaning is “to shake someone off”.'],
      ['Повсеместно.', 'Everywhere.']),
    S('kiez', 'slang-life', 'der Kiez', 'свой район, квартал (Берлин)', 'the hood, the neighbourhood (Berlin)', [
      ['Im [[Kiez]] kennt jeder jeden.', 'В районе все друг друга знают.', 'In the hood everyone knows everyone.'],
      ['Das ist mein [[Kiez]], hier bin ich aufgewachsen.', 'Это мой район, я тут вырос.', 'This is my neighbourhood, I grew up here.'],
      ['Wir gehen im [[Kiez]] essen.', 'Пойдём поедим где-нибудь в районе.', 'Let’s eat somewhere in the neighbourhood.']],
      ['Свой квартал с его кафе, Шпети и соседями. Отсюда «Kiezdeutsch».', 'Your own quarter with its cafés, Spätis and neighbours. Hence “Kiezdeutsch”.'],
      ['Слово славянского происхождения: так в средние века называли рыбацкие посёлки славян у Берлина. В Гамбурге «Kiez» — это Санкт-Паули и Репербан.', 'A word of Slavic origin: medieval Slavic fishing settlements near Berlin. In Hamburg “der Kiez” means St. Pauli and the Reeperbahn.'],
      ['Берлин, Гамбург.', 'Berlin, Hamburg.']),
    S('abziehen', 'slang-life', 'jemanden abziehen', 'отжать (ограбить на улице)', 'rob / jack someone', [
      ['Sie haben ihn am Bahnhof [[abgezogen]].', 'Его отжали на вокзале.', 'They jacked him at the station.'],
      ['Pass auf, dass dich keiner [[abzieht]].', 'Смотри, чтоб тебя никто не обул.', 'Watch out nobody robs you.'],
      ['Der Händler hat uns voll [[abgezogen]].', 'Продавец нас конкретно обул.', 'The seller totally ripped us off.']],
      ['Уличный грабёж (телефон, кроссовки) или обман на деньги.', 'Street robbery (phone, sneakers) or getting ripped off.'],
      ['«Abziehen» — «снимать, стягивать»: буквально стянуть с человека куртку или кроссовки. Известно с 1990-х.', '“Abziehen” means “to pull off” — literally pulling a jacket or sneakers off someone. Known since the 1990s.'],
      ['Улица, новости, рэп-тексты.', 'The street, the news, rap lyrics.']),

    // ---- Swearing & Insults (18+) ----
    S('scheisse', 'slang-rude', 'Scheiße!', 'чёрт!, дерьмо!, блин!', 'shit!, damn!', [
      ['[[Scheiße]], ich hab den Bus verpasst!', 'Чёрт, я опоздал на автобус!', 'Shit, I missed the bus!'],
      ['Der Film war echt [[scheiße]].', 'Фильм был полное дерьмо.', 'The film was really shit.'],
      ['Mach keinen [[Scheiß]]!', 'Не делай глупостей!', 'Don’t do anything stupid!']],
      ['Самое частое ругательство в немецком. Мягче: «Mist!», «Scheibe!».', 'The most common German swear word. Softer: “Mist!”, “Scheibe!”.'],
      ['Германское «scheißen» — «испражняться», родственно англ. «shit». Как восклицание с XVIII в. Немцы ругаются «анально», а не сексуально, — классика лингвистики.', 'Germanic “scheißen”, related to English “shit”. An exclamation since the 18th century. German swearing is famously scatological rather than sexual.'],
      ['Повсюду, даже у взрослых; на работе — лучше «Mist».', 'Everywhere, even adults; at work “Mist” is safer.'], V),
    S('arschloch', 'slang-rude', 'Arschloch', 'мудак, урод', 'asshole', [
      ['Der Chef ist ein richtiges [[Arschloch]].', 'Шеф — настоящий мудак.', 'The boss is a real asshole.'],
      ['Sei kein [[Arschloch]].', 'Не будь уродом.', 'Don’t be an asshole.'],
      ['Welches [[Arschloch]] hat hier geparkt?', 'Какой урод тут припарковался?', 'Which asshole parked here?']],
      ['Сильное оскорбление. В Германии оскорбление (Beleidigung) — уголовно наказуемо, бывают штрафы, особенно в адрес полиции.', 'A strong insult. In Germany insulting someone (Beleidigung) is a criminal offence; fines happen, especially towards police.'],
      ['Буквально «дырка в заднице». Известно с XVI в. (Лютер тоже ругался крепко).', 'Literally “arse hole”. Recorded since the 16th century (Luther swore heartily too).'],
      ['Вся Германия; сказать незнакомцу = прямой путь к драке или заявлению в полицию.', 'All of Germany; saying it to a stranger is a straight road to a fight or a police report.'], V),
    S('wichser', 'slang-rude', 'Wichser', 'дрочила, урод', 'wanker, jerk-off', [
      ['Der [[Wichser]] hat mein Fahrrad geklaut.', 'Этот урод украл мой велик.', 'That wanker stole my bike.'],
      ['Was für ein [[Wichser]]!', 'Ну и козёл!', 'What a wanker!'],
      ['Halt’s Maul, du [[Wichser]].', 'Заткнись, придурок.', 'Shut up, you wanker.']],
      ['Очень грубо. Часто с жестом рукой — тоже оскорбление.', 'Very rude. Often with a hand gesture, which is an insult in itself.'],
      ['От «wichsen» — «натирать воском, начищать», позже — «мастурбировать». Ругательством стало в XX в.', 'From “wichsen” — to wax or polish, later to masturbate. An insult since the 20th century.'],
      ['Улица, футбол, драки в барах.', 'The street, football, bar fights.'], V),
    S('hurensohn', 'slang-rude', 'Hurensohn', 'сукин сын (буквально «сын шлюхи»)', 'son of a bitch (lit. “son of a whore”)', [
      ['Der [[Hurensohn]] hat mich angelogen.', 'Этот сукин сын мне соврал.', 'That son of a bitch lied to me.'],
      ['Sag das nie zu jemandem: „[[Hurensohn]]“ heißt Schlägerei.', 'Никогда никому такого не говори: «Hurensohn» — это драка.', 'Never say it to anyone: “Hurensohn” means a fight.'],
      ['Im Rap hört man [[Hurensohn]] ständig.', 'В рэпе «Hurensohn» звучит постоянно.', 'You hear “Hurensohn” all the time in rap.']],
      ['Одно из самых тяжёлых оскорблений — задевает мать. В уличной культуре почти гарантированная драка.', 'One of the heaviest insults — it targets someone’s mother. In street culture almost a guaranteed fight.'],
      ['Калька с арабского/турецкого оскорбления матери («ibn sharmuta», «orospu çocuğu»); через Кицдойч и гангста-рэп 2000-х стало массовым.', 'A calque of Arabic/Turkish mother insults (“ibn sharmuta”, “orospu çocuğu”); mass usage via Kiezdeutsch and 2000s gangsta rap.'],
      ['Рэп, школьные дворы, улица. Знать — да, говорить — нет.', 'Rap, school yards, the street. Know it — don’t say it.'], V),
    S('opfer', 'slang-rude', 'Du Opfer!', 'лох!, терпила!', 'you loser!, you victim!', [
      ['Ey, [[du Opfer]], gib das Handy her!', 'Эй, лох, давай сюда телефон!', 'Hey loser, hand over the phone!'],
      ['Er wird in der Schule als [[Opfer]] gemobbt.', 'В школе его травят, называют терпилой.', 'He gets bullied as a “victim” at school.'],
      ['Nur [[Opfer]] machen sowas.', 'Только лохи так делают.', 'Only losers do that.']],
      ['Унизительно: «жертва», слабак. Используется в травле — будь осторожен.', 'Humiliating: “victim”, weakling. Used in bullying — be careful.'],
      ['Буквально «жертва». Как оскорбление — с 2000-х из Кицдойча; Jugendwort-кандидат 2006.', 'Literally “victim”. As an insult since the 2000s from Kiezdeutsch; a youth-word candidate in 2006.'],
      ['Школы, улица.', 'Schools, the street.'], V),
    S('verpiss-dich', 'slang-rude', 'Verpiss dich!', 'вали отсюда!, отвали!', 'piss off!, get lost!', [
      ['[[Verpiss dich]], ich will dich nicht sehen!', 'Вали отсюда, видеть тебя не хочу!', 'Piss off, I don’t want to see you!'],
      ['Er hat sich einfach [[verpisst]].', 'Он просто свалил.', 'He just buggered off.'],
      ['[[Verpisst euch]] von meinem Hof!', 'Валите с моего двора!', 'Get off my yard!']],
      ['Грубо. В прошедшем времени («hat sich verpisst») — просто «смылся», мягче.', 'Rude. In the past tense (“hat sich verpisst”) it just means “cleared off” and is milder.'],
      ['От «pissen» — «мочиться»: образно — уйти «помочиться» и не вернуться. Армейский жаргон XX в.', 'From “pissen” — the image of going off to piss and not coming back. 20th-century army slang.'],
      ['Повсюду в ссорах.', 'Everywhere in arguments.'], V),
    S('halt-die-fresse', 'slang-rude', 'Halt die Fresse! / Halt’s Maul!', 'заткнись!, закрой пасть!', 'shut your face!, shut up!', [
      ['[[Halt die Fresse]], keiner hat dich gefragt!', 'Заткнись, тебя никто не спрашивал!', 'Shut your face, nobody asked you!'],
      ['[[Halt’s Maul]] und hör zu.', 'Закрой рот и слушай.', 'Shut up and listen.'],
      ['Sonst gibt’s [[was auf die Fresse]].', 'А то в морду получишь.', 'Or you’ll get punched in the face.']],
      ['«Fresse», «Maul» — морда, пасть (о животных). «Was auf die Fresse kriegen» — получить по морде.', '“Fresse”, “Maul” are animal words for mouth/face. “Was auf die Fresse kriegen” = get punched.'],
      ['От «fressen» — «жрать» (о животных). Перенос на человека — грубое расчеловечивание.', 'From “fressen” — how animals eat. Using it for people is deliberately degrading.'],
      ['Улица, ссоры, бары; вежливо — «Sei bitte still».', 'The street, rows, bars; politely: “Sei bitte still”.'], V),
    S('fick-dich', 'slang-rude', 'Fick dich!', 'пошёл на хуй!', 'fuck you!', [
      ['[[Fick dich]], ich mach das nicht!', 'Пошёл ты, не буду я этого делать!', 'Fuck you, I’m not doing it!'],
      ['[[Fick dich]] und deine Regeln.', 'Да пошёл ты со своими правилами.', 'Fuck you and your rules.'],
      ['Er hat „[[Fick dich]]“ gesagt und ist gegangen.', 'Он сказал «пошёл на хуй» и ушёл.', 'He said “fuck you” and left.']],
      ['Самое прямое оскорбление. «Fick deine Mutter» — ещё хуже, это почти вызов на драку.', 'The bluntest insult. “Fick deine Mutter” is worse — practically a challenge to fight.'],
      ['Калька с английского «fuck you», распространилась после 1960-х через фильмы и музыку; раньше немецкий мат был в основном «анальным».', 'A calque of English “fuck you”, spread after the 1960s via films and music; older German swearing was mostly scatological.'],
      ['Ссоры, рэп, фильмы. Никогда — полиции, контролёрам, вышибалам.', 'Rows, rap, films. Never to police, ticket inspectors or bouncers.'], V),
    S('was-guckst-du', 'slang-rude', 'Was guckst du?!', 'чё уставился?!', 'what are you looking at?!', [
      ['[[Was guckst du]]? Willst du Stress?', 'Чё уставился? Проблем хочешь?', 'What are you looking at? Want trouble?'],
      ['[[Was guckst du]], bin ich Kino?', 'Чё пялишься, я тебе кино, что ли?', 'What you staring at, am I a movie?'],
      ['Sorry, ich hab nicht [[geguckt]], alles gut.', 'Извини, я не пялился, всё нормально.', 'Sorry, I wasn’t staring, all good.']],
      ['Классический уличный «наезд» перед дракой. Лучший ответ — спокойно отвести взгляд и уйти.', 'The classic street provocation before a fight. Best answer: calmly look away and walk off.'],
      ['Фраза «Was guckst du, bin ich Kino?» стала мемом благодаря комику Kaya Yanar и его шоу «Was guckst du?!» (2001–2005).', '“Was guckst du, bin ich Kino?” became a meme through comedian Kaya Yanar’s show “Was guckst du?!” (2001–05).'],
      ['Улица, ночные электрички, клубы.', 'The street, night trains, clubs.'], V)
  ] });
})();
