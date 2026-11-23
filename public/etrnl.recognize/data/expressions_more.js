/* Expressions · second batch: 15 idioms + 15 everyday phrases (German). Chunk schema, ru inline,
 * English gloss / examples / notes inline (no separate overlay needed). Original examples. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function X(o, lit, note) {
    o.type = 'chunk';
    // The literal picture goes first in the note, then any usage hint.
    var ru = [lit && lit[0], note && note[0]].filter(Boolean).join(' '), en = [lit && lit[1], note && note[1]].filter(Boolean).join(' ');
    if (ru) { o.note = ru; o.i18n = { en: { note: en } }; }
    return o;
  }
  function I(id, topics, de, register, ru, en, examples, variations, lit, note) {
    return X({ id: 'exp-idiom-' + id, topic: 'idioms', topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] }, lit, note);
  }
  function D(id, topics, de, register, ru, en, examples, variations, note) {
    return X({ id: 'exp-day-' + id, topic: 'everyday', topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] }, null, note);
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    I('tomaten', ['everyday', 'people'], 'Tomaten auf den Augen haben', 'informal', 'не видеть очевидного', 'to be blind to the obvious',
      [ex('Der Schlüssel liegt doch vor dir! Hast du [[Tomaten auf den Augen]]?', 'Да ключ же прямо перед тобой! Ты что, ослеп?', 'The key is right in front of you! Are you blind?')],
      ['Du hast wohl Tomaten auf den Augen!'],
      ['Буквально «иметь помидоры на глазах».', 'Literally “to have tomatoes on your eyes”.']),
    I('schwein', ['everyday'], 'Schwein haben', 'informal', 'повезло, удачно вышло', 'to be lucky',
      [ex('Der Zug hatte Verspätung, da [[hatte]] ich echt [[Schwein]] und habe ihn noch erwischt.', 'Поезд опоздал — мне здорово повезло, и я на него успел.', 'The train was late, so I was really lucky and still caught it.')],
      ['Da hast du aber Schwein gehabt!'],
      ['Буквально «иметь свинью»: свинья в немецкой культуре — символ удачи (Glücksschwein).', 'Literally “to have a pig”: in German culture the pig is a symbol of luck (Glücksschwein).']),
    I('baer', ['everyday', 'people'], 'Jemandem einen Bären aufbinden', 'informal', 'навешать лапшу на уши, разыграть', 'to pull someone’s leg',
      [ex('Du hast im Lotto gewonnen? Du willst mir doch [[einen Bären aufbinden]]!', 'Ты выиграл в лотерею? Да ты мне лапшу на уши вешаешь!', 'You won the lottery? You’re pulling my leg!')],
      ['Lass dir keinen Bären aufbinden.'],
      ['Буквально «привязать кому-то медведя».', 'Literally “to tie a bear onto someone”.']),
    I('brei', ['workcomm', 'everyday'], 'Um den heißen Brei herumreden', 'informal', 'ходить вокруг да около', 'to beat around the bush',
      [ex('Hör auf, [[um den heißen Brei herumzureden]], und sag einfach, was los ist.', 'Хватит ходить вокруг да около, просто скажи, что случилось.', 'Stop beating around the bush and just tell me what’s going on.')],
      ['Red nicht um den heißen Brei herum!'],
      ['Буквально «говорить вокруг горячей каши» — как кот, который боится обжечься.', 'Literally “to talk around the hot porridge” — like a cat afraid of burning itself.']),
    I('nase-voll', ['everyday', 'work'], 'Die Nase voll haben (von etwas)', 'informal', 'быть сытым по горло (чем-то)', 'to be fed up (with something)',
      [ex('Ich [[habe die Nase voll]] von den ständigen Überstunden.', 'Мне надоели вечные переработки.', 'I’m fed up with the constant overtime.')],
      ['Davon habe ich die Nase gestrichen voll. (усилено)'],
      ['Буквально «иметь полный нос».', 'Literally “to have your nose full”.']),
    I('fettnaepfchen', ['people', 'workcomm'], 'Ins Fettnäpfchen treten', 'informal', 'ляпнуть бестактность, попасть впросак', 'to put your foot in it',
      [ex('Ich habe nach ihrem Mann gefragt und bin voll [[ins Fettnäpfchen getreten]] — sie sind geschieden.', 'Я спросил про её мужа и попал впросак — они развелись.', 'I asked about her husband and really put my foot in it — they’re divorced.')],
      [],
      ['Буквально «наступить в горшочек с жиром»: раньше у входа в крестьянский дом стоял горшок с жиром для сапог.', 'Literally “to step into the little pot of fat”: farmhouses once kept a pot of grease for boots by the door.']),
    I('lange-bank', ['work', 'workcomm'], 'Etwas auf die lange Bank schieben', 'neutral', 'откладывать в долгий ящик', 'to put something off',
      [ex('Die Steuererklärung solltest du nicht [[auf die lange Bank schieben]].', 'Налоговую декларацию не стоит откладывать в долгий ящик.', 'You shouldn’t put off your tax return.')],
      [],
      ['Буквально «задвинуть на длинную скамью»: в судах дела складывали в длинные ящики-скамьи.', 'Literally “to push onto the long bench”: courts once stored pending files in long bench-like chests.']),
    I('faden', ['workcomm', 'everyday'], 'Den Faden verlieren', 'neutral', 'потерять нить (разговора, мысли)', 'to lose the thread',
      [ex('Entschuldigung, ich habe [[den Faden verloren]]. Wo war ich?', 'Простите, я потерял нить. На чём я остановился?', 'Sorry, I’ve lost my thread. Where was I?')],
      [],
      null, ['Прямая параллель с русским «потерять нить».', 'A direct parallel to Russian «потерять нить».']),
    I('wolke-sieben', ['people'], 'Auf Wolke sieben schweben', 'informal', 'быть на седьмом небе (обычно от любви)', 'to be on cloud nine',
      [ex('Seit sie verliebt ist, [[schwebt]] sie [[auf Wolke sieben]].', 'С тех пор как она влюбилась, она на седьмом небе.', 'Since she fell in love, she’s been on cloud nine.')],
      [],
      ['Буквально «парить на седьмом облаке». Ср. рус. «седьмое небо», англ. cloud nine.', 'Literally “to float on cloud seven”. Compare English cloud nine.']),
    I('katzensprung', ['travel', 'everyday'], 'Das ist (nur) ein Katzensprung.', 'informal', 'рукой подать, совсем близко', 'it’s a stone’s throw away',
      [ex('Vom Hotel zum Strand [[ist es nur ein Katzensprung]].', 'От отеля до пляжа рукой подать.', 'The beach is just a stone’s throw from the hotel.')],
      [],
      ['Буквально «кошачий прыжок».', 'Literally “a cat’s jump”.']),
    I('zwei-fliegen', ['everyday', 'work'], 'Zwei Fliegen mit einer Klappe schlagen', 'informal', 'убить двух зайцев', 'to kill two birds with one stone',
      [ex('Ich fahre mit dem Rad zur Arbeit — so [[schlage]] ich [[zwei Fliegen mit einer Klappe]]: Sport und kein Stau.', 'Я езжу на работу на велосипеде — убиваю двух зайцев: и спорт, и никаких пробок.', 'I cycle to work — that kills two birds with one stone: exercise and no traffic jams.')],
      [],
      ['Буквально «убить двух мух одной хлопушкой».', 'Literally “to swat two flies with one swatter”.']),
    I('reinen-wein', ['people', 'workcomm'], 'Jemandem reinen Wein einschenken', 'neutral', 'сказать кому-то всю правду (даже неприятную)', 'to tell someone the plain truth',
      [ex('Ich muss dir [[reinen Wein einschenken]]: Das Projekt wird gestrichen.', 'Скажу тебе честно: проект закрывают.', 'I have to be straight with you: the project is being cancelled.')],
      [],
      ['Буквально «налить кому-то чистого вина» — без примесей и обмана.', 'Literally “to pour someone pure wine” — nothing watered down.']),
    I('blatt-mund', ['workcomm', 'people'], 'Sich kein Blatt vor den Mund nehmen', 'informal', 'говорить без обиняков, прямо', 'not to mince your words',
      [ex('Unsere Chefin [[nimmt sich kein Blatt vor den Mund]], wenn etwas schiefläuft.', 'Наша начальница говорит прямо, когда что-то идёт не так.', 'Our boss doesn’t mince her words when something goes wrong.')],
      [],
      ['Буквально «не держать лист перед ртом»: в театре актёры прикрывались листом, говоря дерзости.', 'Literally “not to hold a leaf in front of your mouth”, as actors once did to say something bold.']),
    I('kopf-sand', ['everyday', 'society'], 'Den Kopf in den Sand stecken', 'neutral', 'прятать голову в песок', 'to bury your head in the sand',
      [ex('Bei Problemen nützt es nichts, [[den Kopf in den Sand zu stecken]].', 'Когда есть проблемы, прятать голову в песок бесполезно.', 'When there are problems, burying your head in the sand doesn’t help.')],
      [],
      null, ['Тот же образ страуса, что в русском и английском.', 'The same ostrich image as in Russian and English.']),
    I('teppich', ['society', 'workcomm'], 'Etwas unter den Teppich kehren', 'neutral', 'замять, замести под ковёр', 'to sweep something under the carpet',
      [ex('Die Firma hat den Fehler lange [[unter den Teppich gekehrt]].', 'Фирма долго заметала эту ошибку под ковёр.', 'The company swept the mistake under the carpet for a long time.')],
      [],
      null, ['Тот же образ, что в английском sweep under the carpet.', 'The same image as English “sweep under the carpet”.'])
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    D('na-ja', ['everyday'], 'Na ja …', 'informal', 'ну… как сказать (сомнение, сдержанность)', 'well… (hesitation)',
      [ex('Wie war der Film? — [[Na ja]], ganz okay.', 'Как фильм? — Ну… нормальный.', 'How was the film? — Well… it was okay.')],
      [], ['Интонация решает: протяжное «Na ja» = скорее не понравилось.', 'Intonation matters: a long-drawn “Na ja” means you weren’t impressed.']),
    D('echt-jetzt', ['everyday'], 'Echt jetzt?', 'informal', 'серьёзно? правда?', 'seriously? really?',
      [ex('Der Kurs fällt aus. — [[Echt jetzt]]? Ich bin extra früh aufgestanden!', 'Занятие отменили. — Серьёзно? Я специально рано встал!', 'The class is cancelled. — Seriously? I got up early specially!')],
      ['Echt?', 'Im Ernst?']),
    D('keine-ahnung', ['everyday'], 'Keine Ahnung.', 'informal', 'без понятия', 'no idea',
      [ex('Wann kommt der Bus? — [[Keine Ahnung]], der Fahrplan hängt nicht mehr.', 'Когда придёт автобус? — Без понятия, расписания больше нет.', 'When’s the bus coming? — No idea, the timetable’s gone.')],
      ['Ich habe keine Ahnung.', 'Null Ahnung. (очень разг.)']),
    D('mir-egal', ['everyday', 'people'], 'Das ist mir egal.', 'neutral', 'мне всё равно', 'I don’t mind; I don’t care',
      [ex('Pizza oder Pasta? — [[Das ist mir egal]], such du aus.', 'Пицца или паста? — Мне всё равно, выбирай ты.', 'Pizza or pasta? — I don’t mind, you choose.')],
      ['Ist mir egal.'], ['Может звучать резко («мне плевать»). Мягче: Mir ist beides recht.', 'Can sound rude (“I don’t care”). Softer: Mir ist beides recht.']),
    D('schon-gut', ['everyday', 'people'], 'Schon gut.', 'informal', 'да ладно, всё в порядке (в ответ на извинение)', 'it’s fine, never mind',
      [ex('Tut mir leid, dass ich zu spät bin. — [[Schon gut]], wir haben noch nicht angefangen.', 'Извини, что опоздал. — Да ладно, мы ещё не начали.', 'Sorry I’m late. — It’s fine, we haven’t started yet.')]),
    D('ach-so', ['everyday'], 'Ach so!', 'informal', 'а, вот оно что! понятно', 'oh, I see!',
      [ex('Der Laden hat heute zu, es ist Feiertag. — [[Ach so]], das wusste ich nicht.', 'Магазин сегодня закрыт, праздник. — А, вот оно что, не знал.', 'The shop is closed today, it’s a public holiday. — Oh, I see, I didn’t know.')]),
    D('na-klar', ['everyday'], 'Na klar!', 'informal', 'конечно! само собой', 'sure! of course',
      [ex('Kannst du mir kurz helfen? — [[Na klar]]!', 'Можешь мне помочь? — Конечно!', 'Can you give me a hand? — Sure!')],
      ['Klar!', 'Logisch! (разг.)']),
    D('genau', ['everyday', 'workcomm'], 'Genau.', 'neutral', 'именно, точно (подтверждение)', 'exactly',
      [ex('Wir treffen uns also um acht am Bahnhof? — [[Genau]].', 'Значит, встречаемся в восемь на вокзале? — Именно.', 'So we’re meeting at eight at the station? — Exactly.')],
      [], ['Немцы говорят «Genau» очень часто — как простое «да, так».', 'Germans say “Genau” constantly — often just meaning “yes, that’s right”.']),
    D('stimmt', ['everyday', 'workcomm'], 'Stimmt.', 'neutral', 'верно, точно; сдачи не надо', 'that’s right; keep the change',
      [ex('Das macht 18,50. — Hier sind 20, [[stimmt]] so.', 'С вас 18,50. — Вот 20, сдачи не надо.', 'That’s 18.50. — Here’s 20, keep the change.')],
      ['Das stimmt.', 'Stimmt so. (официанту)'], ['Два значения: «верно» и, при оплате, «сдачи не надо».', 'Two uses: “that’s right” and, when paying, “keep the change”.']),
    D('gute-besserung', ['health'], 'Gute Besserung!', 'neutral', 'выздоравливай(те)!', 'get well soon!',
      [ex('Du bist krank? [[Gute Besserung]]!', 'Ты заболел? Выздоравливай!', 'You’re ill? Get well soon!')]),
    D('viel-erfolg', ['everyday', 'work'], 'Viel Erfolg!', 'neutral', 'удачи! успехов!', 'good luck!',
      [ex('Morgen hast du dein Vorstellungsgespräch? [[Viel Erfolg]]!', 'Завтра у тебя собеседование? Удачи!', 'Your job interview is tomorrow? Good luck!')],
      ['Viel Glück!', 'Toi, toi, toi! (перед экзаменом, выступлением)']),
    D('bis-gleich', ['everyday'], 'Bis gleich! / Bis später!', 'informal', 'до скорого! увидимся!', 'see you soon! see you later!',
      [ex('Ich hole nur schnell Brötchen. [[Bis gleich]]!', 'Я только за булочками. До скорого!', 'I’m just getting some rolls. See you in a bit!')],
      ['Bis dann!', 'Bis morgen!'], ['Bis gleich — через минуты; bis später — позже сегодня.', 'Bis gleich — in a few minutes; bis später — later today.']),
    D('das-waers', ['food', 'everyday'], 'Das wär’s.', 'neutral', 'это всё (в магазине, при заказе)', 'that’s all, thanks',
      [ex('Noch etwas? — Nein, danke, [[das wär’s]].', 'Что-нибудь ещё? — Нет, спасибо, это всё.', 'Anything else? — No thanks, that’s all.')],
      ['Das war’s.'], ['Wär’s — разговорный Konjunktiv II от sein: «это было бы всё».', 'Wär’s is colloquial Konjunktiv II of sein: “that would be all”.']),
    D('was-ist-los', ['everyday', 'people'], 'Was ist los?', 'informal', 'что случилось? в чём дело?', 'what’s up? what’s wrong?',
      [ex('Du siehst müde aus. [[Was ist los]]?', 'Ты выглядишь усталым. Что случилось?', 'You look tired. What’s wrong?')],
      ['Was ist denn los?', 'Was ist hier los? (что тут происходит?)']),
    D('wie-bitte', ['everyday', 'authorities'], 'Wie bitte?', 'neutral', 'простите, что? (переспросить)', 'pardon? sorry?',
      [ex('[[Wie bitte]]? Können Sie das noch einmal sagen?', 'Простите, что? Можете повторить?', 'Pardon? Could you say that again?')],
      [], ['Вежливее, чем «Was?», которое звучит грубовато.', 'More polite than “Was?”, which sounds a bit rude.'])
  ] });
})();
