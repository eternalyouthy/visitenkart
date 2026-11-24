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
