/* Expressions · third batch: 10 idioms + 10 everyday phrases (German). Chunk schema, ru inline,
 * English gloss / examples / notes inline. Checked against existing inventory for zero duplicates. Original examples. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function X(o, lit, note) {
    o.type = 'chunk';
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
    I('hund-begraben', ['workcomm', 'everyday'], 'Da liegt der Hund begraben.', 'informal', 'вот где собака зарыта; в этом-то и вся суть проблемы', 'that’s where the real problem lies',
      [ex('Der Server hat keinen Strom — [[da liegt der Hund begraben]]!', 'У сервера нет питания — вот где собака зарыта!', 'The server has no power — that’s the crux of the problem!')],
      ['Genau da liegt der Hund begraben.'],
      ['Буквально «там зарыта собака» — точное совпадение с русским оборотом.', 'Literally “that’s where the dog is buried” — the exact match to the Russian idiom.']),
    I('alles-in-butter', ['everyday', 'workcomm'], 'Alles in Butter.', 'informal', 'всё в полном порядке, всё идёт как по маслу', 'everything’s fine, all good',
      [ex('Wie läuft das Projekt? — Keine Sorge, [[alles in Butter]].', 'Как идёт проект? — Не переживай, всё в порядке.', 'How’s the project going? — Don’t worry, everything’s fine.')],
      ['Bei uns ist alles in Butter.'],
      ['Буквально «всё в масле».', 'Literally “everything in butter”.']),
    I('haende-voll', ['work', 'everyday'], 'Alle Hände voll zu tun haben', 'neutral', 'иметь дел по горло, быть по уши в работе', 'to have one’s hands full',
      [ex('Vor der Prüfung habe ich [[alle Hände voll zu tun]].', 'Перед экзаменом у меня дел по горло.', 'Before the exam I have my hands full.')],
      ['Wir haben alle Hände voll zu tun.'],
      ['Буквально «иметь обе руки полные дел».', 'Literally “to have both hands full to do”.']),
    I('schlange-stehen', ['everyday', 'authorities'], 'Schlange stehen', 'neutral', 'стоять в очереди', 'to stand in a queue, to queue',
      [ex('Vor der Ausländerbehörde muss man oft lange [[Schlange stehen]].', 'Перед ведомством по делам иностранцев часто приходится долго стоять в очереди.', 'You often have to queue for a long time outside the immigration office.')],
      ['Wir standen eine halbe Stunde Schlange.'],
      ['Буквально «стоять змеёй»: очередь напоминает длинную змею.', 'Literally “to stand like a snake”: a queue winds like a snake.']),
    I('senf-dazugeben', ['people', 'workcomm'], 'Seinen Senf dazugeben', 'informal', 'вставить свои пять копеек (высказаться, когда не просили)', 'to put one’s two cents in',
      [ex('Er muss wirklich zu jedem Thema [[seinen Senf dazugeben]].', 'Ему обязательно нужно вставить свои пять копеек по каждой теме.', 'He really has to put his two cents in on every topic.')],
      ['Gib nicht immer deinen Senf dazu!'],
      ['Буквально «добавить свою горчицу».', 'Literally “to add one’s mustard”.']),
    I('wald-baeume', ['workcomm', 'everyday'], 'Den Wald vor lauter Bäumen nicht sehen', 'neutral', 'за деревьями не видеть леса (не замечать главного за деталями)', 'not to see the wood for the trees',
      [ex('Ich habe ewig nach dem Fehler gesucht und [[den Wald vor lauter Bäumen nicht gesehen]].', 'Я вечность искал ошибку и за деталями не видел очевидного.', 'I searched ages for the bug and couldn’t see the wood for the trees.')],
      [],
      ['Тот же образ, что в русском и английском.', 'The same image as in English and Russian.']),
    I('sauer-apfel', ['everyday', 'work'], 'In den sauren Apfel beißen', 'neutral', 'скрепя сердце принять неприятную необходимость', 'to bite the bullet',
      [ex('Die Wohnung ist teuer, aber wir müssen wohl [[in den sauren Apfel beißen]].', 'Квартира дорогая, но придётся, видимо, смириться и согласиться.', 'The flat is expensive, so we’ll probably just have to bite the bullet.')],
      [],
      ['Буквально «укусить кислое яблоко».', 'Literally “to bite into the sour apple”.']),
    I('leichte-schulter', ['workcomm', 'health'], 'Etwas auf die leichte Schulter nehmen', 'neutral', 'относиться к чему-то легкомысленно, несерьёзно', 'to take something lightly',
      [ex('Diese Warnung solltest du nicht [[auf die leichte Schulter nehmen]].', 'К этому предупреждению не стоит относиться легкомысленно.', 'You shouldn’t take this warning lightly.')],
      [],
      ['Буквально «взять на лёгкое плечо».', 'Literally “to take onto the light shoulder”.']),
    I('ueber-schatten', ['people', 'everyday'], 'Über seinen eigenen Schatten springen', 'neutral', 'переступить через себя (свою гордость, страх, упрямство)', 'to swallow one’s pride, to step out of one’s comfort zone',
      [ex('Es fiel ihm schwer, aber er ist [[über seinen eigenen Schatten gesprungen]] und hat sich entschuldigt.', 'Ему было трудно, но он переступил через себя и извинился.', 'It was hard for him, but he swallowed his pride and apologised.')],
      [],
      ['Буквально «перепрыгнуть через собственную тень».', 'Literally “to jump over one’s own shadow”.']),
    I('loch-bauch', ['people', 'everyday'], 'Jemandem ein Loch in den Bauch fragen', 'informal', 'замучить кого-то расспросами', 'to ask someone twenty questions',
      [ex('Die Kinder haben dem Guide [[ein Loch in den Bauch gefragt]].', 'Дети замучили гида своими вопросами.', 'The children asked the guide non-stop questions.')],
      [],
      ['Буквально «продырявить кому-то живот вопросами».', 'Literally “to ask a hole into someone’s stomach”.'])
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    D('schade', ['everyday', 'people'], 'Schade!', 'neutral', 'жаль! как жаль!', 'what a pity! that’s a shame!',
      [ex('Du kannst morgen nicht kommen? [[Schade]]!', 'Ты завтра не сможешь прийти? Жаль!', 'You can’t come tomorrow? What a pity!')],
      ['Wie schade!', 'Echt schade!']),
    D('gern-geschehen', ['everyday'], 'Gern geschehen.', 'neutral', 'пожалуйста! не за что! (ответ на «спасибо»)', 'you’re welcome',
      [ex('Vielen Dank für die schnelle Hilfe! — [[Gern geschehen]]!', 'Большое спасибо за быструю помощь! — Пожалуйста!', 'Many thanks for the quick help! — You’re welcome!')],
      ['Sehr gerne.', 'Gern!'], ['От глагола geschehen («происходить»): «сделано с радостью».', 'From geschehen (“to happen”): “happily done”.']),
    D('tut-mir-leid', ['everyday', 'people'], 'Tut mir leid.', 'neutral', 'мне жаль / извини(те)', 'I’m sorry',
      [ex('[[Tut mir leid]], dass du so lange warten musstest.', 'Мне жаль, что тебе пришлось так долго ждать.', 'I’m sorry you had to wait so long.')],
      ['Es tut mir wirklich leid.', 'Tut mir echt leid.']),
    D('warum-nicht', ['everyday'], 'Warum nicht?', 'neutral', 'почему бы и нет?', 'why not?',
      [ex('Wollen wir heute Abend essen gehen? — [[Warum nicht]]?', 'Сходим сегодня вечером поужинать? — Почему бы и нет?', 'Shall we go out for dinner tonight? — Why not?')]),
    D('bin-ueberfragt', ['workcomm', 'everyday'], 'Da bin ich überfragt.', 'neutral', 'тут я затрудняюсь ответить / не в курсе', 'I wouldn’t know, you’ve got me there',
      [ex('Wann das neue Gesetz gilt? [[Da bin ich überfragt]].', 'Когда вступит в силу новый закон? Тут я не знаю.', 'When does the new law take effect? I wouldn’t know.')],
      ['Da bin ich leider überfragt.'], ['Вежливый способ сказать «не знаю» на работе или в гостях.', 'A polite way to say “I don’t know” at work or socially.']),
    D('kommt-nicht-infrage', ['everyday', 'people'], 'Das kommt gar nicht infrage!', 'neutral', 'об этом и речи быть не может! ни за что!', 'that’s out of the question!',
      [ex('Unbezahlte Überstunden jeden Tag? [[Das kommt gar nicht infrage]]!', 'Неоплачиваемые переработки каждый день? Об этом и речи нет!', 'Unpaid overtime every day? That’s out of the question!')],
      ['Kommt nicht infrage!'], ['Можно писать in Frage или infrage (рекомендуется infrage).', 'Can be written in Frage or infrage (infrage is recommended).']),
    D('keinen-kopf', ['everyday', 'people'], 'Mach dir keinen Kopf!', 'informal', 'не бери в голову! не переживай!', 'don’t worry about it!',
      [ex('Du hast die Präsentation vergessen? [[Mach dir keinen Kopf]], wir machen das zusammen.', 'Забыл презентацию? Не парься, сделаем вместе.', 'Forgot the presentation? Don’t worry, we’ll do it together.')],
      ['Mach dir keinen Kopf darum.']),
    D('viel-spass', ['everyday', 'leisure'], 'Viel Spaß!', 'neutral', 'приятно провести время! желаю хорошо погулять!', 'have fun!',
      [ex('Ihr fahrt übers Wochenende nach Wien? [[Viel Spaß]]!', 'Едете на выходные в Вену? Хорошо провести время!', 'You’re going to Vienna for the weekend? Have fun!')],
      ['Viel Spaß beim Konzert!'], ['Обратите внимание: Spaß пишется с ß (долгий гласный а).', 'Note the ß in Spaß (long vowel a).']),
    D('keine-ursache', ['everyday'], 'Keine Ursache.', 'neutral', 'не стоит благодарности! не за что', 'don’t mention it, no problem',
      [ex('Danke für deine Geduld! — [[Keine Ursache]].', 'Спасибо за терпение! — Не за что.', 'Thanks for your patience! — Don’t mention it.')],
      [], ['Немного официальнее, чем Kein Ding, хорошо подходит на «Sie».', 'Slightly more formal than Kein Ding; works well with Sie.']),
    D('soweit-alles-gut', ['everyday', 'workcomm'], 'Soweit alles gut.', 'informal', 'пока всё хорошо / в порядке', 'so far so good',
      [ex('Wie läufts in der neuen Firma? — [[Soweit alles gut]], danke.', 'Как дела в новой фирме? — Пока всё отлично, спасибо.', 'How’s it going at the new company? — So far so good, thanks.')],
      ['Bis jetzt alles gut.'])
  ] });
})();
