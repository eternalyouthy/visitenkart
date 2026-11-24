/* ENGLISH · Expressions third batch: 12 idioms + 12 everyday phrases + 13 chunks (1 per function) = 37 cards.
 * Checked against existing pack inventory for zero duplicates. Glosses ru / de inline; original examples. */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function nt(n) { return n ? { ru: n[0], de: n[1] } : null; }
  function have(t) { return P.items.filter(function (x) { return x.t === t; })[0]; }
  function add(tab, topic, items, also) {
    var fresh = [];
    items.forEach(function (o) {
      var h = have(o.t);
      if (h) { GT.addMember(h.id, tab, topic); (also || []).forEach(function (m) { GT.addMember(h.id, m[0], m[1]); }); }
      else { if (also) o.alsoIn = also; fresh.push(o); }
    });
    if (fresh.length) GT.register({ tab: tab, topic: topic, items: fresh });
  }
  function X(id, t, level, ru, de, e, note, register) {
    return { id: 'en:x3:' + id, type: 'chunk', pos: 'chunk', t: t, level: level, ru: ru, de: de, examples: [e], note: nt(note), register: register || 'neutral', learnable: true };
  }
  var IDIOMS = [['expressions', 'idioms']], EVERYDAY = [['expressions', 'everyday']];

  add('expressions', 'idioms-people', [
    X('fingers-crossed', 'keep your fingers crossed', 'B1', 'держать кулаки (за удачу)', 'die Daumen drücken',
      ex('I’ve got my driving test today — [[keep your fingers crossed]] for me!', 'У меня сегодня экзамен по вождению — держи за меня кулаки!', 'Ich habe heute meine Fahrprüfung — drück mir die Daumen!'),
      ['По-английски скрещивают пальцы, по-немецки сжимают большой палец (die Daumen drücken), по-русски держат кулаки.', 'Im Englischen kreuzt man die Finger, im Deutschen drückt man die Daumen.']),
    X('put-two-cents', 'put your two cents in', 'B2', 'вставить свои пять копеек (высказаться)', 'seinen Senf dazugeben',
      ex('Everyone else stayed quiet, so I decided to [[put my two cents in]].', 'Все остальные молчали, поэтому я решил вставить своё слово.', 'Alle anderen blieben still, also habe ich meinen Senf dazugegeben.'), null, 'informal'),
    X('bend-over-backwards', 'bend over backwards', 'C1', 'лезть из кожи вон (чтобы помочь, угодить)', 'sich ein Bein ausreißen',
      ex('Our hosts [[bent over backwards]] to make us feel welcome.', 'Хозяева из кожи вон лезли, чтобы мы чувствовали себя как дома.', 'Unsere Gastgeber haben sich ein Bein ausgerissen, damit wir uns wohlfühlen.'), null, 'informal'),
    X('on-cloud-nine', 'on cloud nine', 'B2', 'на седьмом небе (от счастья)', 'auf Wolke sieben',
      ex('Ever since she got the job offer, she’s been [[on cloud nine]].', 'С тех пор как она получила оффер, она просто на седьмом небе.', 'Seit sie das Jobangebot bekommen hat, schwebt sie auf Wolke sieben.'),
      ['По-английски облако № 9, по-немецки Wolke sieben (7), по-русски «на седьмом небе».', 'Auf Englisch Wolke 9, auf Deutsch Wolke sieben (7).'])
  ], IDIOMS);

  add('expressions', 'idioms-situations', [
    X('all-greek', 'it’s all Greek to me', 'B2', 'это для меня китайская грамота (совершенно непонятно)', 'ich verstehe nur Bahnhof',
      ex('Don’t ask me about tax law — [[it’s all Greek to me]].', 'Не спрашивай меня про налоговое право — для меня это китайская грамота.', 'Frag mich nichts über Steuerrecht — ich verstehe nur Bahnhof.'),
      ['Нем. Ich verstehe nur Bahnhof, рус. «китайская грамота».', 'Dt. Ich verstehe nur Bahnhof, russ. «китайская грамота».']),
    X('have-hands-full', 'have your hands full', 'B2', 'иметь дел по горло, быть очень занятым', 'alle Hände voll zu tun haben',
      ex('With two toddlers and a full-time job, they certainly [[have their hands full]].', 'С двумя малышами и полной занятостью у них явно дел по горло.', 'Mit zwei Kleinkindern und Vollzeitjob haben sie alle Hände voll zu tun.')),
    X('jump-deep-end', 'jump in at the deep end', 'B2', 'сразу взяться за сложное дело без подготовки (прыгнуть в омут)', 'ins kalte Wasser springen',
      ex('I started the new job by [[jumping in at the deep end]] on day one.', 'На новой работе меня в первый же день бросили сразу в бой.', 'Ich bin im neuen Job am ersten Tag direkt ins kalte Wasser gesprungen.'),
      ['Как нем. ins kalte Wasser springen.', 'Wie dt. ins kalte Wasser springen.']),
    X('sweep-under-carpet', 'sweep something under the carpet', 'B2', 'замести под ковёр, скрыть проблему', 'etwas unter den Teppich kehren',
      ex('Management tried to [[sweep the safety warning under the carpet]].', 'Руководство попыталось замести предупреждение о безопасности под ковёр.', 'Das Management versuchte, die Sicherheitswarnung unter den Teppich zu kehren.'))
  ], IDIOMS);

  add('expressions', 'idioms-decisions', [
    X('kill-two-birds', 'kill two birds with one stone', 'B2', 'убить двух зайцев одним выстрелом', 'zwei Fliegen mit einer Klappe schlagen',
      ex('Cycling to work [[kills two birds with one stone]]: I save money and stay fit.', 'Езда на работу на велосипеде убивает двух зайцев: экономит деньги и держит в форме.', 'Mit dem Rad zur Arbeit zu fahren schlägt zwei Fliegen mit einer Klappe.'),
      ['Рус. «двух зайцев», нем. «двух мух» (zwei Fliegen), англ. «двух птиц».', 'Russ. „zwei Hasen“, dt. „zwei Fliegen“, engl. „two birds“.']),
    X('wood-for-trees', 'not see the wood for the trees', 'C1', 'за деревьями не видеть леса', 'den Wald vor lauter Bäumen nicht sehen',
      ex('He focused on tiny formatting tweaks and couldn’t [[see the wood for the trees]].', 'Он зациклился на мелких правках оформления и не видел главного.', 'Er achtete nur auf winzige Details und sah den Wald vor lauter Bäumen nicht.'),
      ['В амер. английском чаще forest вместо wood.', 'Im US-Englischen meist forest statt wood.']),
    X('beat-around-bush', 'beat around the bush', 'B2', 'ходить вокруг да около', 'um den heißen Brei herumreden',
      ex('Stop [[beating around the bush]] and tell me what the audit found.', 'Хватит ходить вокруг да около, скажи, что показал аудит.', 'Hör auf, um den heißen Brei herumzureden, und sag, was das Audit ergeben hat.')),
    X('pinch-of-salt', 'take something with a pinch of salt', 'B2', 'относиться к чему-то с долей скепсиса (не принимать всё на веру)', 'etwas mit Vorsicht genießen',
      ex('I’d [[take]] online reviews [[with a pinch of salt]].', 'Я бы относился к отзывам в интернете с долей скепсиса.', 'Ich würde Online-Bewertungen mit Vorsicht genießen.'),
      ['Амер. часто grain of salt.', 'US oft grain of salt.'])
  ], IDIOMS);

  add('expressions', 'everyday-respond', [
    X('what-a-pity', 'What a pity!', 'B1', 'Как жаль!', 'Wie schade!',
      ex('The museum is closed for repairs? [[What a pity]]!', 'Музей закрыт на ремонт? Как жаль!', 'Das Museum hat wegen Renovierung zu? Wie schade!')),
    X('youre-welcome', 'You’re welcome.', 'A2', 'Пожалуйста! Не за что! (ответ на «спасибо»)', 'Gern geschehen. / Bitte schön.',
      ex('Thanks for carrying my bag! — [[You’re welcome]].', 'Спасибо, что помог донести сумку! — Пожалуйста.', 'Danke fürs Tragen! — Gern geschehen.')),
    X('why-not', 'Why not?', 'A2', 'Почему бы и нет?', 'Warum nicht?',
      ex('Shall we grab lunch in the park? — [[Why not]]?', 'Давай пообедаем в парке? — Почему бы и нет?', 'Wollen wir im Park zu Mittag essen? — Warum nicht?')),
    X('search-me', 'Search me.', 'B2', 'Понятия не имею. (разг.)', 'Keine Ahnung, frag mich nicht.',
      ex('Who changed the Wi-Fi password? — [[Search me]]!', 'Кто поменял пароль от Wi-Fi? — Понятия не имею!', 'Wer hat das WLAN-Passwort geändert? — Keine Ahnung!'), null, 'informal'),
    X('out-of-question', 'That’s out of the question!', 'B2', 'Об этом и речи быть не может!', 'Das kommt gar nicht infrage!',
      ex('Sharing the admin password? [[That’s out of the question]]!', 'Передавать админский пароль? Об этом и речи быть не может!', 'Das Admin-Passwort weitergeben? Das kommt gar nicht infrage!')),
    X('bless-you', 'Bless you!', 'A2', 'Будь здоров(а)! (когда кто-то чихнул)', 'Gesundheit!',
      ex('Achoo! — [[Bless you]]!', 'Апчхи! — Будь здоров!', 'Hatschi! — Gesundheit!'))
  ], EVERYDAY);

  add('expressions', 'everyday-arrange', [
    X('dont-sweat-it', 'Don’t sweat it.', 'B2', 'Не парься! Не переживай.', 'Mach dir keinen Kopf!',
      ex('I forgot to bring the notes. — [[Don’t sweat it]], I have a copy.', 'Я забыл конспект. — Не переживай, у меня есть копия.', 'Ich habe die Notizen vergessen. — Mach dir keinen Kopf, ich habe eine Kopie.'), null, 'informal'),
    X('have-fun', 'Have fun!', 'A2', 'Хорошо провести время! Повеселитесь!', 'Viel Spaß!',
      ex('Off to Berlin for the weekend? [[Have fun]]!', 'Едете в Берлин на выходные? Хорошо провести время!', 'Am Wochenende nach Berlin? Viel Spaß!')),
    X('so-far-so-good', 'So far, so good.', 'B1', 'Пока всё идёт хорошо.', 'Soweit alles gut.',
      ex('How’s the new flat? — [[So far, so good]]!', 'Как новая квартира? — Пока всё отлично!', 'Wie ist die neue Wohnung? — Soweit alles gut!')),
    X('long-time-no-see', 'Long time no see!', 'B1', 'Давно не виделись!', 'Lange nicht gesehen!',
      ex('Hey Alex, [[long time no see]]! How have you been?', 'Привет, Алекс, давно не виделись! Как ты?', 'Hey Alex, lange nicht gesehen! Wie geht’s dir?'), null, 'informal'),
    X('help-yourself', 'Help yourself.', 'B1', 'Угощайся! Бери, не стесняйся.', 'Bedien dich! / Greif zu!',
      ex('There’s fresh coffee in the pot — [[help yourself]].', 'В кофейнике свежий кофе — наливай себе, не стесняйся.', 'In der Kanne ist frischer Kaffee — bedien dich.')),
    X('guess-what', 'Guess what!', 'B1', 'Угадай, что случилось! Представляешь!', 'Rate mal!',
      ex('[[Guess what]]! I passed the German exam!', 'Представляешь! Я сдал экзамен по немецкому!', 'Rate mal! Ich habe die Deutschprüfung bestanden!'), null, 'informal')
  ], EVERYDAY);

  add('chunks', 'opinion', [
    X('if-you-ask-me', 'If you ask me, [X].', 'B1', 'если спросишь меня / по-моему, [X]', 'wenn du mich fragst, [X]',
      ex('[[If you ask me]], the meeting could have been an email.', 'По-моему, эту встречу вполне можно было заменить письмом.', 'Wenn du mich fragst, hätte eine E-Mail gereicht.'))
  ]);
  add('chunks', 'agree', [
    X('fair-point-though', 'Fair point, though [X].', 'B2', 'справедливо, однако [X]', 'stimmt schon, aber [X]',
      ex('[[Fair point, though]] we still have to check the cost.', 'Справедливое замечание, но стоимость всё равно нужно проверить.', 'Stimmt schon, aber die Kosten müssen wir trotzdem prüfen.'))
  ]);
  add('chunks', 'clarify', [
    X('give-example', 'Could you give me an example of [X]?', 'B1', 'не могли бы вы привести пример [X]?', 'könnten Sie mir ein Beispiel für [X] geben?',
      ex('[[Could you give me an example of]] a risky request?', 'Можете привести пример рискованного запроса?', 'Könnten Sie mir ein Beispiel für eine riskante Anfrage geben?'))
  ]);
  add('chunks', 'complain', [
    X('look-into-by', 'Please look into this by [date].', 'B2', 'пожалуйста, разберитесь с этим до [дата]', 'bitte prüfen Sie das bis [Datum]',
      ex('The charge appeared twice — [[please look into this by]] Friday.', 'Списание прошло дважды — пожалуйста, разберитесь до пятницы.', 'Die Abbuchung erfolgte doppelt — bitte prüfen Sie das bis Freitag.'))
  ]);
  add('chunks', 'problem', [
    X('keeps-happening', 'The issue keeps happening after [X].', 'B1', 'проблема повторяется снова и снова после [X]', 'das Problem tritt nach [X] immer wieder auf',
      ex('[[The issue keeps happening after]] every restart.', 'Эта ошибка снова появляется после каждой перезагрузки.', 'Das Problem tritt nach jedem Neustart immer wieder auf.'))
  ]);
  add('chunks', 'appointments', [
    X('afternoon-instead', 'Would the afternoon work instead?', 'B1', 'подойдёт ли вместо этого вторая половина дня?', 'würde es stattdessen am Nachmittag passen?',
      ex('Ten is tricky for me — [[would the afternoon work instead]]?', 'Десять часов мне неудобно — подойдёт вторая половина дня?', 'Um zehn ist es schwierig — würde es stattdessen am Nachmittag passen?'))
  ]);
  add('chunks', 'phone', [
    X('calling-about', 'I’m calling about [X].', 'A2', 'я звоню по поводу [X]', 'ich rufe wegen [X] an',
      ex('Hello, [[I’m calling about]] my appointment on Thursday.', 'Здравствуйте, я звоню по поводу моей записи в четверг.', 'Hallo, ich rufe wegen meines Termins am Donnerstag an.'))
  ]);
  add('chunks', 'email', [
    X('attached-find', 'Attached you’ll find [X].', 'B1', 'во вложении вы найдёте [X]', 'im Anhang finden Sie [X]',
      ex('[[Attached you’ll find]] the signed contract.', 'Во вложении вы найдёте подписанный договор.', 'Im Anhang finden Sie den unterschriebenen Vertrag.'))
  ]);
  add('chunks', 'smalltalk', [
    X('week-going', 'How’s your week going so far?', 'B1', 'как проходит неделя?', 'wie läuft deine Woche bisher?',
      ex('Hey Sam, [[how’s your week going so far]]?', 'Привет, Сэм, как проходит неделя?', 'Hey Sam, wie läuft deine Woche bisher?'), null, 'informal')
  ]);
  add('chunks', 'it-standup', [
    X('finishing-moving-on', 'Today I’m finishing [X] and moving on to [Y].', 'B1', 'сегодня заканчиваю [X] и перехожу к [Y]', 'heute mache ich [X] fertig und gehe dann zu [Y] über',
      ex('[[Today I’m finishing]] the tests [[and moving on to]] the docs.', 'Сегодня доделываю тесты и перехожу к документации.', 'Heute mache ich die Tests fertig und gehe dann zur Doku über.'))
  ]);
  add('chunks', 'it-bug', [
    X('get-error-whenever', 'I get this error whenever I [X].', 'B1', 'у меня вылезает эта ошибка каждый раз, когда я [X]', 'dieser Fehler tritt jedes Mal auf, wenn ich [X]',
      ex('[[I get this error whenever I]] upload a large PDF.', 'Эта ошибка появляется каждый раз, когда я загружаю большой PDF.', 'Dieser Fehler tritt jedes Mal auf, wenn ich ein großes PDF hochlade.'))
  ]);
  add('chunks', 'it-help', [
    X('spare-minutes', 'Could you spare a couple of minutes?', 'B1', 'уделишь пару минут?', 'hättest du kurz ein paar Minuten?',
      ex('[[Could you spare a couple of minutes]] to check this log?', 'Найдётся пара минут посмотреть этот лог?', 'Hättest du kurz ein paar Minuten, um in dieses Log zu schauen?'))
  ]);
  add('chunks', 'it-meeting', [
    X('put-pin-in', 'Let’s put a pin in this for now.', 'B2', 'давайте пока отложим этот вопрос', 'lass uns dieses Thema erst mal zurückstellen',
      ex('We’re off topic — [[let’s put a pin in this for now]].', 'Мы ушли от темы — давайте пока отложим этот вопрос.', 'Wir schweifen ab — lass uns dieses Thema erst mal zurückstellen.'))
  ]);
})();
