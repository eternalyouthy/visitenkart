/* Expressions · fourth batch: 15 idioms + 10 everyday phrases (German; B1, B2 and C1).
 * Checked against existing inventory for zero duplicates. Original examples (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function X(o, lit, note, lvl) {
    o.type = 'chunk';
    if (lvl) o.level = lvl;
    var ru = [lit && lit[0], note && note[0]].filter(Boolean).join(' '), en = [lit && lit[1], note && note[1]].filter(Boolean).join(' ');
    if (ru) { o.note = ru; o.i18n = { en: { note: en } }; }
    return o;
  }
  function I(id, topics, de, register, ru, en, examples, variations, lit, note, lvl) {
    return X({ id: 'exp-idiom-' + id, topic: 'idioms', topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] }, lit, note, lvl);
  }
  function D(id, topics, de, register, ru, en, examples, variations, note, lvl) {
    return X({ id: 'exp-day-' + id, topic: 'everyday', topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] }, null, note, lvl);
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    I('fuenfte-rad', ['work', 'people'], 'Das fünfte Rad am Wagen sein', 'informal', 'быть пятым колесом в телеге (лишним)', 'to be a fifth wheel, to feel superfluous',
      [ex('Ohne klare Aufgabe fühlte ich mich im Meeting wie [[das fünfte Rad am Wagen]].', 'Без чёткой задачи я чувствовал себя на встрече пятым колесом.', 'Without a clear role, I felt like a fifth wheel in the meeting.')],
      [], ['Буквально «быть пятым колесом у повозки».', 'Literally “to be the fifth wheel on the wagon”.'], null, 'b2'),
    I('katze-im-sack', ['food', 'everyday'], 'Die Katze im Sack kaufen', 'informal', 'купить кота в мешке', 'to buy a pig in a poke',
      [ex('Teste die Software erst 14 Tage, statt [[die Katze im Sack zu kaufen]].', 'Сначала протестируй софт 14 дней, вместо того чтобы покупать кота в мешке.', 'Test the software for 14 days first instead of buying a pig in a poke.')],
      [], ['Точное совпадение с русским «купить кота в мешке».', 'Matches Russian “buy a cat in a bag”.'], null, 'b2'),
    I('kind-beim-namen', ['workcomm', 'society'], 'Das Kind beim Namen nennen', 'neutral', 'называть вещи своими именами', 'to call a spade a spade',
      [ex('Wir müssen [[das Kind beim Namen nennen]]: Das Projekt ist gescheitert.', 'Надо назвать вещи своими именами: проект провалился.', 'We have to call a spade a spade: the project has failed.')],
      [], ['Буквально «назвать ребёнка по имени».', 'Literally “to call the child by its name”.'], null, 'b2'),
    I('kopf-ueber-wasser', ['work', 'everyday'], 'Den Kopf über Wasser halten', 'neutral', 'держаться на плаву (справляться в трудный период)', 'to keep one’s head above water',
      [ex('Mit den vielen parallelen Tickets [[halte]] ich gerade so [[den Kopf über Wasser]].', 'С таким числом параллельных тикетов я еле держусь на плаву.', 'With so many parallel tickets, I’m barely keeping my head above water.')],
      [], null, ['В прямом и переносном смысле «не утонуть».', 'Literally and figuratively: stay afloat.'], 'b2'),
    I('eigenen-fuessen', ['people', 'work'], 'Auf eigenen Füßen stehen', 'neutral', 'стоять на собственных ногах (быть самостоятельным)', 'to stand on one’s own two feet',
      [ex('Nach dem Studium wollte sie sofort [[auf eigenen Füßen stehen]].', 'После учёбы она сразу хотела стать самостоятельной.', 'After university she wanted to stand on her own two feet right away.')],
      [], null, null, 'b1'),
    I('mit-feuer-spielen', ['security', 'workcomm'], 'Mit dem Feuer spielen', 'neutral', 'играть с огнём (сильно рисковать)', 'to play with fire',
      [ex('Wer Sicherheitsupdates monatelang aufschiebt, [[spielt mit dem Feuer]].', 'Кто месяцами откладывает обновления безопасности, тот играет с огнём.', 'Anyone who puts off security updates for months is playing with fire.')],
      [], null, null, 'b2'),
    I('steine-in-weg', ['work', 'people'], 'Jemandem Steine in den Weg legen', 'neutral', 'ставить кому-то палки в колёса (мешать)', 'to put obstacles in someone’s way',
      [ex('Statt zu helfen, hat der Lieferant uns nur [[Steine in den Weg gelegt]].', 'Вместо помощи поставщик только чинил нам препятствия.', 'Instead of helping, the supplier only put obstacles in our way.')],
      [], ['Буквально «класть камни на дорогу».', 'Literally “to put stones in someone’s path”.'], null, 'b2'),
    I('ins-schwarze', ['workcomm', 'everyday'], 'Ins Schwarze treffen', 'neutral', 'попасть в яблочко, в самую цель', 'to hit the bull’s-eye',
      [ex('Mit deiner Vermutung hast du genau [[ins Schwarze getroffen]].', 'Своим предположением ты попал прямо в яблочко.', 'With your guess you hit the bull’s-eye.')],
      [], ['Из стрельбы по мишени: чёрный центр — десятка.', 'From target shooting: the black centre is the bull’s-eye.'], null, 'b2'),
    I('aermel-hochkrempeln', ['work', 'workcomm'], 'Die Ärmel hochkrempeln', 'informal', 'засучить рукава (взяться за дело)', 'to roll up one’s sleeves',
      [ex('Jetzt hilft kein Jammern — wir [[krempeln die Ärmel hoch]] und legen los.', 'Жаловаться бесполезно — засучим рукава и начнём.', 'Complaining won’t help — let’s roll up our sleeves and get started.')],
      [], null, null, 'b2'),
    I('zwischen-zeilen', ['people', 'workcomm'], 'Zwischen den Zeilen lesen', 'neutral', 'читать между строк', 'to read between the lines',
      [ex('In dieser E-Mail muss man genau [[zwischen den Zeilen lesen]].', 'В этом письме нужно внимательно читать между строк.', 'In this email you really have to read between the lines.')],
      [], null, null, 'b2'),
    I('rad-neu-erfinden', ['dev', 'workcomm'], 'Das Rad neu erfinden', 'neutral', 'изобретать велосипед', 'to reinvent the wheel',
      [ex('Nutz lieber die Standardbibliothek, statt [[das Rad neu zu erfinden]].', 'Лучше используй стандартную библиотеку, чем изобретать велосипед.', 'Better use the standard library instead of reinventing the wheel.')],
      [], ['В русском «велосипед», в немецком и английском «колесо».', 'Russian uses “bicycle”, German and English use “wheel”.'], null, 'b2'),
    I('kuehlen-kopf', ['security', 'workcomm'], 'Einen kühlen Kopf bewahren', 'neutral', 'сохранять холодную голову (спокойствие)', 'to keep a cool head',
      [ex('Bei einem Systemausfall muss das Team [[einen kühlen Kopf bewahren]].', 'При сбое системы команда должна сохранять хладнокровие.', 'During a system outage the team must keep a cool head.')],
      [], null, null, 'b2'),
    I('heft-in-hand', ['work', 'workcomm'], 'Das Heft in die Hand nehmen', 'neutral', 'взять бразды правления в свои руки', 'to take the reins, take charge',
      [ex('Als die Planung stockte, nahm sie [[das Heft in die Hand]].', 'Когда планирование застопорилось, она взяла инициативу в свои руки.', 'When planning stalled, she took charge.')],
      [], ['das Heft = рукоять меча или ножа; перен. управление.', 'das Heft = hilt/handle; figuratively control.'], null, 'c1'),
    I('holzweg-sein', ['workcomm', 'everyday'], 'Auf dem Holzweg sein', 'informal', 'заблуждаться, идти по ложному следу', 'to be on the wrong track, barking up the wrong tree',
      [ex('Wenn du glaubst, dass es am Browser liegt, [[bist du auf dem Holzweg]].', 'Если ты думаешь, что дело в браузере, ты на ложном пути.', 'If you think it’s the browser, you’re on the wrong track.')],
      [], ['Holzweg — лесная дорога для вывоза дров, которая заканчивается тупиком.', 'A Holzweg was a logging track ending in the woods.'], null, 'c1'),
    I('oel-ins-feuer', ['people', 'workcomm'], 'Öl ins Feuer gießen', 'neutral', 'подливать масла в огонь', 'to add fuel to the fire',
      [ex('Mit dieser scharfen Antwort [[gießt]] du nur [[Öl ins Feuer]].', 'Этим резким ответом ты только подливаешь масла в огонь.', 'With that sharp reply you’re only adding fuel to the fire.')],
      [], null, null, 'b2')
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    D('wie-dem-auch-sei', ['everyday', 'workcomm'], 'Wie dem auch sei.', 'neutral', 'как бы то ни было', 'be that as it may, anyway',
      [ex('[[Wie dem auch sei]], wir müssen bis morgen eine Entscheidung treffen.', 'Как бы то ни было, до завтра нам нужно принять решение.', 'Be that as it may, we have to decide by tomorrow.')], [], null, 'c1'),
    D('versteht-sich', ['everyday', 'workcomm'], 'Das versteht sich von selbst.', 'neutral', 'это само собой разумеется', 'that goes without saying',
      [ex('Dass wir die Daten schützen, [[versteht sich von selbst]].', 'То, что мы защищаем данные, разумеется само собой.', 'It goes without saying that we protect the data.')], [], null, 'b2'),
    D('nichts-fuer-ungut', ['everyday', 'people'], 'Nichts für ungut.', 'informal', 'без обид, не принимай близко к сердцу', 'no offence, no hard feelings',
      [ex('[[Nichts für ungut]], aber dein alter Entwurf gefiel mir besser.', 'Без обид, но твой прежний набросок нравился мне больше.', 'No offence, but I liked your old draft better.')], [], null, 'b2'),
    D('lass-es-mich-wissen', ['everyday', 'workcomm'], 'Lass es mich wissen.', 'neutral', 'дай мне знать, сообщи мне', 'let me know',
      [ex('Wenn du Hilfe brauchst, [[lass es mich wissen]].', 'Если понадобится помощь, дай мне знать.', 'If you need help, let me know.')], ['Lassen Sie es mich bitte wissen.'], null, 'b1'),
    D('passt-mir-gut', ['everyday', 'appointments'], 'Das passt mir gut.', 'neutral', 'мне это хорошо подходит (удобно)', 'that suits me well',
      [ex('Donnerstag um drei? Ja, [[das passt mir gut]].', 'В четверг в три? Да, мне это отлично подходит.', 'Thursday at three? Yes, that suits me well.')], ['Mir passt es prima.'], null, 'b1'),
    D('melde-mich', ['everyday', 'workcomm'], 'Ich melde mich bei dir.', 'neutral', 'я с тобой свяжусь / напишу позже', 'I’ll get in touch with you',
      [ex('Sobald die Freigabe da ist, [[melde ich mich bei dir]].', 'Как только придёт согласование, я тебе напишу.', 'As soon as sign-off arrives, I’ll get back to you.')], ['Ich melde mich wieder bei Ihnen.'], null, 'b1'),
    D('stein-vom-herzen', ['everyday', 'people'], 'Mir fällt ein Stein vom Herzen.', 'neutral', 'у меня камень с души упал', 'that’s a weight off my mind',
      [ex('Der Server läuft wieder — [[mir fällt ein Stein vom Herzen]]!', 'Сервер снова работает — прямо камень с души!', 'The server is back up — what a weight off my mind!')], [], null, 'b2'),
    D('was-solls', ['everyday'], 'Was soll’s!', 'informal', 'была не была! ну и ладно!', 'oh well! what the heck!',
      [ex('Der Zug ist weg — [[was soll’s]], nehmen wir den nächsten und trinken einen Kaffee.', 'Поезд ушёл — ну и ладно, поедем следующим и выпьем кофе.', 'The train’s gone — oh well, let’s take the next one and grab a coffee.')], [], null, 'b2'),
    D('von-mir-aus', ['everyday', 'people'], 'Von mir aus.', 'informal', 'я не против; как хочешь', 'fine by me, go ahead',
      [ex('Sollen wir draußen sitzen? — [[Von mir aus]], gern.', 'Сядем на улице? — Я не против, с удовольствием.', 'Shall we sit outside? — Fine by me, sure.')], [], null, 'b1'),
    D('geschmackssache', ['everyday', 'leisure'], 'Das ist Geschmackssache.', 'neutral', 'это дело вкуса', 'it’s a matter of taste',
      [ex('Minimalismus im Design gefällt nicht jedem — [[das ist Geschmackssache]].', 'Минимализм в дизайне нравится не всем — это дело вкуса.', 'Minimalism in design isn’t for everyone — it’s a matter of taste.')], [], null, 'b2')
  ] });
})();

/* === Content expansion 2026-11-27 (+30 DE Idioms + 25 DE Everyday Phrases) === */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function I(id, topics, de, register, ru, en, examples, lit, note, lvl) {
    var o = { id: 'exp-idiom-x27-' + id, topic: 'idioms', topics: topics, type: 'chunk', de: de, register: register, ru: ru, en: en, examples: examples, level: lvl || 'b2' };
    var ruN = [lit && lit[0], note && note[0]].filter(Boolean).join(' '), enN = [lit && lit[1], note && note[1]].filter(Boolean).join(' ');
    if (ruN) { o.note = ruN; o.i18n = { en: { note: enN } }; }
    return o;
  }
  function D(id, topics, de, register, ru, en, examples, note, lvl) {
    var o = { id: 'exp-day-x27-' + id, topic: 'everyday', topics: topics, type: 'chunk', de: de, register: register, ru: ru, en: en, examples: examples, level: lvl || 'b1' };
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    // idioms-people (6)
    I('ein-herz-und-eine-seele', ['people'], 'Ein Herz und eine Seele sein', 'informal', 'быть душа в душу, не разлей вода', 'to be two peas in a pod, inseparable',
      [ex('Seit der Schulzeit sind die beiden [[ein Herz und eine Seele]].', 'Со школьных лет они двое — не разлей вода.', 'Since school days, those two have been inseparable.')]),
    I('aus-der-haut-fahren', ['people'], 'Aus der Haut fahren', 'informal', 'выйти из себя, потерять терпение', 'to lose one’s temper, fly off the handle',
      [ex('Als die Software zum dritten Mal abstürzte, wäre er fast [[aus der Haut gefahren]].', 'Когда программа упала в третий раз, он чуть не вышел из себя.', 'When the software crashed for the third time, he nearly flew off the handle.')],
      ['Буквально «вылезти из кожи».', 'Literally “to jump out of one’s skin”.']),
    I('jemandem-den-ruecken-staerken', ['people', 'work'], 'Jemandem den Rücken stärken', 'neutral', 'поддержать кого-л., прикрыть тыл', 'to back someone up, have someone’s back',
      [ex('Im schwierigen Gespräch mit dem Kunden hat die Teamleiterin mir [[den Rücken gestärkt]].', 'В трудном разговоре с клиентом тимлид меня поддержала.', 'In the difficult talk with the client, the team lead backed me up.')]),
    I('mit-dem-linken-fuss', ['people', 'everyday'], 'Mit dem linken Fuß zuerst aufstehen', 'informal', 'встать не с той ноги', 'to get up on the wrong side of the bed',
      [ex('Lass ihn kurz in Ruhe — er ist heute wohl [[mit dem linken Fuß zuerst aufgestanden]].', 'Оставь его на минутку в покое — он сегодня, похоже, встал не с той ноги.', 'Leave him alone for a bit — he must have got up on the wrong side of the bed today.')]),
    I('ein-dickes-fell', ['people', 'work'], 'Ein dickes Fell haben', 'informal', 'быть толстокожим, стойким к критике', 'to have thick skin',
      [ex('Im Kundensupport braucht man manchmal einfach [[ein dickes Fell]].', 'В клиентской поддержке порой просто нужно быть толстокожим.', 'In customer support you sometimes simply need thick skin.')]),
    I('jemanden-um-den-finger', ['people'], 'Jemanden um den Finger wickeln', 'informal', 'обвести вокруг пальца; очаровать и подчинить', 'to wrap someone around one’s little finger',
      [ex('Mit ihrem ruhigen Lächeln [[wickelt]] sie sogar strenge Prüfer [[um den Finger]].', 'Своей спокойной улыбкой она очаровывает даже строгих проверяющих.', 'With her calm smile, she wraps even strict examiners around her little finger.')]),

    // idioms-talk (6)
    I('tacheles-reden', ['workcomm', 'people'], 'Tacheles reden', 'informal', 'говорить начистоту, без обиняков', 'to talk turkey, speak plainly',
      [ex('Genug höfliche Floskeln — jetzt müssen wir endlich [[Tacheles reden]].', 'Хватит вежливых отговорок — пора наконец поговорить начистоту.', 'Enough polite filler — now we finally have to speak plainly.')],
      null, ['Из идиша: «прямо по делу».', 'From Yiddish: straight to the point.'], 'c1'),
    I('den-mund-fusselig', ['talk', 'workcomm'], 'Sich den Mund fusselig reden', 'informal', 'говорить до хрипоты, без толку твердить', 'to talk until one is blue in the face',
      [ex('Ich habe mir [[den Mund fusselig geredet]], aber niemand hat die Warnung beachtet.', 'Я уже язык стёр повторять, но никто не обратил внимания на предупреждение.', 'I talked until I was blue in the face, yet nobody heeded the warning.')]),
    I('auf-der-zunge', ['everyday'], 'Es liegt mir auf der Zunge', 'neutral', 'вертится на языке', 'it’s on the tip of my tongue',
      [ex('Wie heißt der Autor noch? [[Es liegt mir auf der Zunge]], aber der Name fällt mir nicht ein.', 'Как же зовут автора? Вертится на языке, но имя никак не вспомню.', 'What’s the author’s name again? It’s on the tip of my tongue, yet I can’t recall it.')]),
    I('kein-geheimnis-machen', ['workcomm'], 'Aus etwas kein Geheimnis machen', 'neutral', 'не делать секрета из чего-л.', 'to make no secret of something',
      [ex('Sie machte [[kein Geheimnis daraus]], dass sie den Entwurf für zu teuer hält.', 'Она не делала секрета из того, что считает проект слишком дорогим.', 'She made no secret of thinking the draft is too expensive.')]),
    I('klartext-sprechen', ['workcomm', 'society'], 'Klartext sprechen', 'neutral', 'говорить предельно ясно и прямо', 'to speak plainly, cut to the chase',
      [ex('Im Abschlussbericht [[spricht]] die Prüferin [[Klartext]] über die Versäumnisse.', 'В итоговом отчёте проверяющая прямо и без прикрас пишет об упущениях.', 'In the final report, the auditor speaks plainly about the shortcomings.')]),
    I('um-den-heissen-kern', ['people', 'workcomm'], 'Auf den Punkt kommen', 'neutral', 'переходить к сути дела', 'to get to the point',
      [ex('Wir haben nur zehn Minuten — komm bitte direkt [[auf den Punkt]].', 'У нас всего десять минут — пожалуйста, переходи сразу к делу.', 'We only have ten minutes — please get straight to the point.')]),

    // idioms-work (6)
    I('ins-rollen-bringen', ['workcomm', 'work'], 'Etwas ins Rollen bringen', 'neutral', 'сдвинуть дело с мёртвой точки, запустить процесс', 'to get the ball rolling, set something in motion',
      [ex('Ein kurzes Treffen hat das Projekt endlich [[ins Rollen gebracht]].', 'Короткая встреча наконец сдвинула проект с мёртвой точки.', 'A brief meeting finally got the project rolling.')]),
    I('ueber-stunden-klagen', ['work'], 'Auf Hochtouren laufen', 'neutral', 'работать на полную мощность / полным ходом', 'to be running at full speed / in full swing',
      [ex('Kurz vor dem Messetermin [[laufen]] die Vorbereitungen [[auf Hochtouren]].', 'Незадолго до выставки подготовка идёт полным ходом.', 'Shortly before the trade fair date, preparations are running in full swing.')]),
    I('hand-in-hand', ['work', 'workcomm'], 'Hand in Hand gehen', 'neutral', 'идти рука об руку, работать слаженно', 'to go hand in hand',
      [ex('Design und Entwicklung müssen bei diesem Produkt [[Hand in Hand gehen]].', 'Дизайн и разработка в этом продукте должны идти рука об руку.', 'Design and engineering must go hand in hand on this product.')]),
    I('seinen-mann-stehen', ['work'], 'Feste im Sattel sitzen', 'neutral', 'крепко сидеть в седле (уверенно держать позицию)', 'to be firmly in the saddle, secure in one’s role',
      [ex('Nach einem Jahr Einarbeitung sitzt sie in der Abteilung [[fest im Sattel]].', 'После года адаптации она уверенно чувствует себя в отделе.', 'After a year of onboarding, she is firmly established in the department.')], null, null, 'c1'),
    I('schritt-fuer-schritt', ['work', 'everyday'], 'Schritt für Schritt vorankommen', 'neutral', 'продвигаться шаг за шагом', 'to make progress step by step',
      [ex('Auch bei großen Umbauten kommt man [[Schritt für Schritt]] ans Ziel.', 'Даже при больших перестройках к цели приходят шаг за шагом.', 'Even with major conversions, you reach the goal step by step.')], null, null, 'b1'),
    I('eine-extra-meile', ['work', 'workcomm'], 'Den Bogen überspannen', 'neutral', 'перегнуть палку, зайти слишком далеко', 'to overstep the mark, push one’s luck',
      [ex('Mit der dritten Nachforderung hat der Kunde [[den Bogen überspannt]].', 'С третьим дополнительным требованием клиент перегнул палку.', 'With the third extra demand, the client pushed things too far.')],
      ['Буквально «перетянуть лук» (чтобы он сломался).', 'Literally “to overdraw the bow”.'], null, 'c1'),

    // idioms-situations (6)
    I('aus-allen-wolken', ['people', 'everyday'], 'Aus allen Wolken fallen', 'informal', 'быть ошарашенным (как с неба свалиться)', 'to be stunned, thunderstruck',
      [ex('Als die plötzliche Kündigung kam, fiel er [[aus allen Wolken]].', 'Когда пришло внезапное увольнение, он был просто ошарашен.', 'When the sudden dismissal arrived, he was completely stunned.')]),
    I('in-der-klemme', ['everyday', 'work'], 'In der Klemme stecken', 'informal', 'попасть в переплёт, в затруднительное положение', 'to be in a tight spot, in a bind',
      [ex('Ohne gültigen Ersatzschlüssel stecken wir jetzt echt [[in der Klemme]].', 'Без запасного ключа мы сейчас действительно влипли.', 'Without a valid spare key, we’re really in a tight spot now.')]),
    I('glueck-im-unglueck', ['everyday'], 'Glück im Unglück haben', 'neutral', 'не было бы счастья, да несчастье помогло (повезло в беде)', 'to have a stroke of luck in a bad situation',
      [ex('Der Laptop fiel herunter, aber die Festplatte blieb ganz — [[Glück im Unglück]].', 'Ноутбук упал, но диск остался цел — повезло в беде.', 'The laptop fell, yet the drive stayed intact — a stroke of luck in bad luck.')]),
    I('auf-messers-schneide', ['society', 'workcomm'], 'Auf Messers Schneide stehen', 'neutral', 'висеть на волоске, быть на острие ножа', 'to be on a knife-edge',
      [ex('Bis zur letzten Abstimmung stand das Ergebnis [[auf Messers Schneide]].', 'До последнего голосования результат висел на волоске.', 'Right up to the final vote, the outcome was on a knife-edge.')], null, null, 'c1'),
    I('kein-blatt-zwischen', ['everyday', 'workcomm'], 'Kein Beinbruch sein', 'informal', 'не беда, не катастрофа', 'not the end of the world, no big deal',
      [ex('Dass wir den frühen Zug verpasst haben, [[ist kein Beinbruch]] — der nächste fährt in zwanzig Minuten.', 'То, что мы опоздали на ранний поезд, не беда — следующий через двадцать минут.', 'Missing the early train isn’t the end of the world — the next one leaves in twenty minutes.')],
      ['Буквально «это не перелом ноги».', 'Literally “it’s not a broken leg”.']),
    I('im-dunkeln-tappen', ['workcomm', 'science'], 'Im Dunkeln tappen', 'neutral', 'действовать вслепую, блуждать в потёмках', 'to be in the dark, grope in the dark',
      [ex('Ohne Logdateien [[tappen]] wir bei der Fehlersuche völlig [[im Dunkeln]].', 'Без логов мы при поиске ошибки совершенно блуждаем в потёмках.', 'Without log files we are completely in the dark when troubleshooting.')]),

    // idioms-decisions (6)
    I('die-notbremse-ziehen', ['workcomm', 'society'], 'Die Notbremse ziehen', 'neutral', 'дёргать стоп-кран (резко остановить рискованный процесс)', 'to pull the emergency brake',
      [ex('Bevor die Kosten explodierten, zog die Projektleitung [[die Notbremse]].', 'Прежде чем расходы взлетели, руководство проекта резко остановило процесс.', 'Before costs spiralled, project management pulled the emergency brake.')]),
    I('auf-nummer-sicher', ['everyday', 'security'], 'Auf Nummer sicher gehen', 'neutral', 'подстраховаться, действовать наверняка', 'to play it safe',
      [ex('Lass uns [[auf Nummer sicher gehen]] und den Vertrag vorher prüfen lassen.', 'Давай подстрахуемся и отдадим договор на проверку заранее.', 'Let’s play it safe and have the contract checked beforehand.')]),
    I('zwei-mal-ueberlegen', ['everyday'], 'Sich etwas zweimal überlegen', 'neutral', 'дважды подумать (прежде чем решиться)', 'to think twice about something',
      [ex('Bei so langen Kündigungsfristen sollte man sich den Vertrag [[zweimal überlegen]].', 'При таких долгих сроках расторжения над договором стоит дважды подумать.', 'With such long notice periods, you should think twice about the contract.')], null, null, 'b1'),
    I('naegel-mit-koepfen', ['work', 'workcomm'], 'Nägel mit Köpfen machen', 'informal', 'делать дело основательно, доводить до конца', 'to do things properly, get down to brass tacks',
      [ex('Genug geplant — lasst uns heute [[Nägel mit Köpfen machen]] und den Termin festlegen.', 'Хватит планировать — давайте сегодня решим всё всерьёз и закрепим дату.', 'Enough planning — let’s settle things properly today and fix the date.')],
      ['Гвозди без шляпки плохо держат — отсюда «делать добротно».', 'Nails without heads don’t hold well — hence doing a solid job.']),
    I('ins-gewissen-reden', ['people', 'everyday'], 'Auf eigene Faust handeln', 'neutral', 'действовать на свой страх и риск / самовольно', 'to act off one’s own bat, go it alone',
      [ex('Ohne Rücksprache solltest du bei diesem Kunden nicht [[auf eigene Faust]] handeln.', 'Без согласования с этим клиентом не стоит действовать на свой страх и риск.', 'Without checking in, you shouldn’t act on your own with this client.')]),
    I('ein-auge-zudruecken', ['everyday', 'work'], 'Ein Auge zudrücken', 'informal', 'закрыть глаза на мелкое нарушение, сделать поблажку', 'to turn a blind eye, let something slide',
      [ex('Weil Sie zum ersten Mal zu spät kommen, [[drücke]] ich heute [[ein Auge zu]].', 'Поскольку вы опоздали впервые, сегодня я закрою на это глаза.', 'Since this is the first time you’re late, I’ll let it slide today.')])
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    // everyday-respond (5)
    D('echt-gesagt', ['everyday'], 'Du sagst es!', 'informal', 'и не говори! точно подмечено!', 'you said it!, tell me about it!',
      [ex('Diese Woche war endlos lang. — [[Du sagst es!]]', 'Эта неделя была бесконечной. — И не говори!', 'This week felt endless. — Tell me about it!')]),
    D('kaum-zu-glauben', ['everyday'], 'Kaum zu glauben!', 'neutral', 'трудно поверить! невероятно!', 'hard to believe!',
      [ex('Der Bau wurde zwei Wochen früher fertig — [[kaum zu glauben]]!', 'Стройку закончили на две недели раньше — трудно поверить!', 'Construction finished two weeks early — hard to believe!')]),
    D('mach-sachen', ['everyday'], 'Ach was!', 'informal', 'да ладно! не может быть! (удивление или отмахнуться)', 'no way!, oh come on!',
      [ex('Du fährst morgen schon nach Wien? [[Ach was]]!', 'Ты уже завтра едешь в Вену? Да ладно!', 'You’re going to Vienna tomorrow already? No way!')]),
    D('hab-ich-mir-gedacht', ['everyday'], 'Das habe ich mir schon gedacht.', 'neutral', 'я так и думал(а)', 'I thought as much.',
      [ex('Der Drucker hat wieder kein Papier. — [[Das habe ich mir schon gedacht]].', 'В принтере снова нет бумаги. — Я так и думал.', 'The printer is out of paper again. — I thought as much.')]),
    D('moment-mal', ['everyday'], 'Moment mal!', 'informal', 'подожди-ка! минуточку!', 'hold on!, wait a second!',
      [ex('[[Moment mal]], hatten wir den Termin nicht auf Donnerstag gelegt?', 'Подожди-ка, разве мы не перенесли встречу на четверг?', 'Hold on, didn’t we move the meeting to Thursday?')]),

    // everyday-opinion (5)
    D('meiner-ansicht-nach', ['everyday', 'workcomm'], 'Meiner Meinung nach …', 'neutral', 'по моему мнению…', 'in my opinion …',
      [ex('[[Meiner Meinung nach]] sollten wir erst die Tests abwarten.', 'По моему мнению, нам стоит сначала дождаться результатов тестов.', 'In my opinion, we should wait for the test results first.')]),
    D('bin-ganz-deiner-meinung', ['everyday', 'workcomm'], 'Da bin ich ganz deiner Meinung.', 'neutral', 'тут я полностью с тобой согласен', 'I completely agree with you there.',
      [ex('Wir brauchen klarere Fristen. — [[Da bin ich ganz deiner Meinung]].', 'Нам нужны более чёткие сроки. — Тут я полностью с тобой согласен.', 'We need clearer deadlines. — I completely agree with you there.')]),
    D('kann-man-so-sehen', ['everyday', 'workcomm'], 'Kann man so sehen.', 'informal', 'можно и так на это посмотреть', 'fair enough, that’s one way to look at it',
      [ex('Es ist streng, aber sicher. — [[Kann man so sehen]], ja.', 'Строго, но надёжно. — Можно и так на это посмотреть, да.', 'It’s strict, yet safe. — That’s one way to look at it, yes.')]),
    D('da-bin-ich-skeptisch', ['everyday', 'workcomm'], 'Da bin ich eher skeptisch.', 'neutral', 'я в этом скорее сомневаюсь', 'I’m rather sceptical about that.',
      [ex('Ob wir das bis Montag schaffen? [[Da bin ich eher skeptisch]].', 'Успеем ли мы это до понедельника? Я в этом скорее сомневаюсь.', 'Whether we’ll finish by Monday? I’m rather sceptical about that.')], null, 'b2'),
    D('auf-keinen-fall', ['everyday'], 'Auf keinen Fall!', 'neutral', 'ни в коем случае!', 'no way!, under no circumstances!',
      [ex('Soll ich das Passwort unverschlüsselt mailen? — [[Auf keinen Fall]]!', 'Отправить пароль незашифрованным письмом? — Ни в коем случае!', 'Should I email the password unencrypted? — Under no circumstances!')]),

    // everyday-arrange (5)
    D('abgemacht', ['everyday', 'appointments'], 'Abgemacht!', 'informal', 'договорились! по рукам!', 'deal!, agreed!',
      [ex('Freitag um zehn vor dem Eingang? — [[Abgemacht]]!', 'В пятницу в десять у входа? — Договорились!', 'Friday at ten outside the entrance? — Deal!')]),
    D('ich-gebe-bescheid', ['everyday', 'workcomm'], 'Ich gebe dir Bescheid.', 'neutral', 'я тебе сообщу / дам знать', 'I’ll let you know.',
      [ex('Sobald die Bestätigung da ist, [[gebe ich dir Bescheid]].', 'Как только придёт подтверждение, я тебе сообщу.', 'As soon as confirmation arrives, I’ll let you know.')]),
    D('verschieben-wir-das', ['everyday', 'appointments'], 'Können wir das kurz verschieben?', 'neutral', 'можем немного перенести это?', 'could we push that back briefly?',
      [ex('Mir kam etwas dazwischen — [[können wir das kurz verschieben]]?', 'У меня возникло срочное дело — можем перенести это?', 'Something came up — could we move that briefly?')]),
    D('ich-bin-unterwegs', ['everyday'], 'Ich bin schon unterwegs.', 'neutral', 'я уже в пути', 'I’m already on my way.',
      [ex('Keine Sorge, [[ich bin schon unterwegs]] und in zehn Minuten da.', 'Не волнуйся, я уже в пути и буду через десять минут.', 'Don’t worry, I’m already on my way and will be there in ten minutes.')]),
    D('bis-morgen', ['everyday'], 'Bis morgen!', 'neutral', 'до завтра!', 'see you tomorrow!',
      [ex('Schönen Feierabend noch und [[bis morgen]]!', 'Хорошего вечера и до завтра!', 'Have a nice evening and see you tomorrow!')]),

    // everyday-comfort (5)
    D('halb-so-schlimm', ['everyday'], 'Das ist halb so schlimm.', 'informal', 'это совсем не так страшно (пустяки)', 'it’s not that bad, could be worse',
      [ex('Ein kleiner Zahlendreher im Entwurf — [[das ist halb so schlimm]].', 'Небольшая опечатка в цифрах в черновике — это не страшно.', 'A minor transposed digit in the draft — it’s not that bad.')]),
    D('alles-wird-gut', ['everyday', 'people'], 'Das wird schon wieder.', 'informal', 'всё наладится, всё пройдёт', 'it’ll be alright, things will get better',
      [ex('Nach dem ersten Schreck beruhigte sie ihn: [[Das wird schon wieder]].', 'После первого испуга она успокоила его: всё наладится.', 'After the initial shock she reassured him: it’ll be alright.')]),
    D('kein-grund-zur-sorge', ['everyday'], 'Kein Grund zur Sorge.', 'neutral', 'повода для беспокойства нет', 'no cause for concern.',
      [ex('Die Werte sind stabil — [[kein Grund zur Sorge]].', 'Показатели стабильны — повода для беспокойства нет.', 'The readings are stable — no need to worry.')], null, 'b2'),
    D('nimm-dir-zeit', ['everyday', 'people'], 'Lass dir ruhig Zeit.', 'informal', 'не торопись, делай спокойно', 'take your time.',
      [ex('Wir haben keinen Druck heute — [[lass dir ruhig Zeit]].', 'Сегодня нас никто не подгоняет — не торопись.', 'There’s no rush today — take your time.')]),
    D('ich-druecke-dir-die-daumen', ['everyday', 'people'], 'Ich drücke dir die Daumen!', 'informal', 'держу за тебя кулаки! удачи!', 'fingers crossed for you!',
      [ex('Morgen ist dein Vorstellungsgespräch? [[Ich drücke dir die Daumen]]!', 'Завтра у тебя собеседование? Держу за тебя кулаки!', 'Your job interview is tomorrow? Fingers crossed for you!')]),

    // everyday-social (5)
    D('herzlichen-glueckwunsch', ['everyday', 'people'], 'Herzlichen Glückwunsch!', 'neutral', 'сердечно поздравляю!', 'congratulations!',
      [ex('Zur bestandenen Prüfung: [[Herzlichen Glückwunsch]]!', 'С успешной сдачей экзамена: поздравляю!', 'On passing your exam: congratulations!')]),
    D('schoenes-wochenende', ['everyday'], 'Schönes Wochenende!', 'neutral', 'хороших выходных!', 'have a nice weekend!',
      [ex('Tschüss alle zusammen, ein [[schönes Wochenende]]!', 'Всем пока, хороших выходных!', 'Bye everyone, have a great weekend!')]),
    D('gesundheit', ['everyday'], 'Gesundheit!', 'neutral', 'будь здоров(а)! (когда чихнули)', 'bless you!',
      [ex('Hatschi! — [[Gesundheit]]! Hast du dir etwas geholt?', 'Апчхи! — Будь здоров! Ты простыл?', 'Achoo! — Bless you! Have you caught something?')]),
    D('guten-appetit', ['everyday', 'food'], 'Guten Appetit!', 'neutral', 'приятного аппетита!', 'enjoy your meal!',
      [ex('Das Essen ist fertig — [[guten Appetit]]!', 'Еда готова — приятного аппетита!', 'Dinner is ready — enjoy your meal!')]),
    D('auf-wiedersehen', ['everyday'], 'Mach’s gut!', 'informal', 'счастливо! всего хорошего! (при прощании)', 'take care!, bye!',
      [ex('Ich muss jetzt los — [[mach’s gut]] und bis nächste Woche!', 'Мне пора бежать — счастливо и до следующей недели!', 'I have to head off now — take care and see you next week!')])
  ] });
})();
