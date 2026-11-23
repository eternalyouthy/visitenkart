/* ENGLISH · Expressions second batch: idioms + everyday phrases (by sub-topic), chunks for the thinner functions,
 * and words for the B2 career themes. Glosses ru / de inline; original examples.
 * Existing headwords are never duplicated — the existing card is added to the topic instead. */
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
  // Phrase / idiom / chunk
  function X(id, t, level, ru, de, e, note, register) {
    return { id: 'en:x2:' + id, type: 'chunk', pos: 'chunk', t: t, level: level, ru: ru, de: de, examples: [e], note: nt(note), register: register || 'neutral', learnable: true };
  }
  // Word
  function W(id, pos, t, level, ru, de, e, note) {
    return { id: 'en:x2:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], note: nt(note), learnable: true };
  }
  var IDIOMS = [['expressions', 'idioms']], EVERYDAY = [['expressions', 'everyday']];

  add('expressions', 'idioms-people', [
    X('house-on-fire', 'get on like a house on fire', 'B2', 'сразу найти общий язык, отлично поладить', 'sich auf Anhieb blendend verstehen',
      ex('My new flatmate and I [[get on like a house on fire]].', 'Мы с новым соседом сразу отлично поладили.', 'Mein neuer Mitbewohner und ich verstehen uns blendend.'),
      ['Буквально «ладить, как горящий дом» — быстро и ярко.', 'Wörtlich „sich verstehen wie ein brennendes Haus“ — schnell und heftig.'], 'informal'),
    X('pull-leg', 'pull someone’s leg', 'B2', 'разыгрывать, шутить над кем-то', 'jemanden auf den Arm nehmen',
      ex('Relax, I’m just [[pulling your leg]].', 'Расслабься, я просто шучу.', 'Entspann dich, ich nehme dich nur auf den Arm.'), null, 'informal'),
    X('see-eye-to-eye', 'see eye to eye', 'B2', 'сходиться во взглядах', 'einer Meinung sein',
      ex('My brother and I don’t always [[see eye to eye]] on politics.', 'Мы с братом не всегда сходимся во взглядах на политику.', 'Mein Bruder und ich sind politisch nicht immer einer Meinung.'),
      ['Обычно в отрицании: we don’t see eye to eye.', 'Meist verneint: we don’t see eye to eye.']),
    X('pain-neck', 'a pain in the neck', 'B2', 'зануда; головная боль (о человеке или деле)', 'eine Nervensäge; lästig',
      ex('Filling in these forms is [[a pain in the neck]].', 'Заполнять эти анкеты — сплошная головная боль.', 'Diese Formulare auszufüllen ist total lästig.'), null, 'informal')
  ], IDIOMS);

  add('expressions', 'idioms-situations', [
    X('ball-court', 'the ball is in your court', 'B2', 'теперь твой ход, решать тебе', 'jetzt bist du am Zug',
      ex('I’ve sent them my offer — [[the ball is in their court]] now.', 'Я отправил им предложение — теперь их ход.', 'Ich habe ihnen mein Angebot geschickt — jetzt sind sie am Zug.'),
      ['Из тенниса: мяч на твоей половине корта.', 'Aus dem Tennis: der Ball ist in deiner Spielhälfte.']),
    X('stones-throw', 'a stone’s throw (from)', 'B2', 'рукой подать, совсем рядом', 'nur einen Katzensprung entfernt',
      ex('Our hotel is [[a stone’s throw from]] the beach.', 'От нашего отеля до пляжа рукой подать.', 'Unser Hotel ist nur einen Katzensprung vom Strand entfernt.')),
    X('hot-water', 'be in hot water', 'B2', 'попасть в беду, влипнуть', 'in der Klemme stecken, Ärger haben',
      ex('He’s [[in hot water]] for missing the deadline again.', 'Он влип из-за того, что снова сорвал срок.', 'Er hat Ärger, weil er schon wieder die Frist verpasst hat.'), null, 'informal'),
    X('hit-road', 'hit the road', 'B2', 'отправляться в путь', 'sich auf den Weg machen',
      ex('It’s getting late — we should [[hit the road]].', 'Уже поздно — пора в путь.', 'Es wird spät — wir sollten uns auf den Weg machen.'), null, 'informal')
  ], IDIOMS);

  add('expressions', 'idioms-decisions', [
    X('sleep-on-it', 'sleep on it', 'B2', 'отложить решение до утра, «переспать с мыслью»', 'eine Nacht darüber schlafen',
      ex('It’s a big decision. Let me [[sleep on it]].', 'Это серьёзное решение. Дай мне подумать до утра.', 'Das ist eine große Entscheidung. Lass mich eine Nacht darüber schlafen.'),
      ['Почти дословно как в немецком: eine Nacht darüber schlafen.', 'Fast wörtlich wie im Deutschen: eine Nacht darüber schlafen.']),
    X('play-by-ear', 'play it by ear', 'B2', 'действовать по обстоятельствам', 'spontan entscheiden, abwarten',
      ex('I don’t know when I’ll finish — let’s [[play it by ear]].', 'Не знаю, когда закончу — давай по обстоятельствам.', 'Ich weiß nicht, wann ich fertig bin — lass uns spontan schauen.'),
      ['Из музыки: играть на слух, без нот.', 'Aus der Musik: nach Gehör spielen, ohne Noten.']),
    X('jump-gun', 'jump the gun', 'C1', 'поторопиться, сделать раньше времени', 'voreilig handeln, vorpreschen',
      ex('Let’s not [[jump the gun]] — we haven’t got the results yet.', 'Не будем торопиться — результатов ещё нет.', 'Lass uns nicht vorpreschen — wir haben die Ergebnisse noch nicht.'),
      ['Из спорта: сорваться со старта до выстрела.', 'Aus dem Sport: vor dem Startschuss loslaufen.']),
    X('bite-off', 'bite off more than you can chew', 'C1', 'взять на себя слишком много', 'sich zu viel zumuten',
      ex('With three projects at once, I’ve [[bitten off more than I can chew]].', 'Взяв три проекта сразу, я взвалил на себя слишком много.', 'Mit drei Projekten gleichzeitig habe ich mir zu viel zugemutet.'))
  ], IDIOMS);

  add('expressions', 'everyday-respond', [
    X('same-here', 'Same here.', 'A2', 'у меня тоже; я тоже', 'Ich auch. / Geht mir genauso.',
      ex('I’m exhausted. — [[Same here]].', 'Я без сил. — Я тоже.', 'Ich bin total fertig. — Ich auch.'), null, 'informal'),
    X('i-guess-so', 'I guess so.', 'B1', 'наверное, да; похоже на то', 'Wahrscheinlich schon.',
      ex('So we’re not going? — [[I guess so]].', 'Значит, не идём? — Похоже на то.', 'Wir gehen also nicht? — Wahrscheinlich nicht.'), null, 'informal'),
    X('not-really', 'Not really.', 'A2', 'не очень; не особо', 'Nicht wirklich.',
      ex('Did you enjoy the film? — [[Not really]].', 'Тебе понравился фильм? — Не особо.', 'Hat dir der Film gefallen? — Nicht wirklich.'),
      ['Мягкое «нет»: вежливее, чем просто No.', 'Ein weiches „nein“: höflicher als ein bloßes No.']),
    X('good-for-you', 'Good for you!', 'B1', 'молодец! рад(а) за тебя', 'Schön für dich! / Gut gemacht!',
      ex('I finally passed my driving test! — [[Good for you]]!', 'Я наконец сдал на права! — Молодец!', 'Ich habe endlich die Führerscheinprüfung bestanden! — Super, gut gemacht!'))
  ], EVERYDAY);

  add('expressions', 'everyday-arrange', [
    X('are-you-free', 'Are you free on [day]?', 'A2', 'ты свободен в [день]?', 'Hast du am [Tag] Zeit?',
      ex('[[Are you free on]] Thursday evening?', 'Ты свободен в четверг вечером?', 'Hast du am Donnerstagabend Zeit?')),
    X('count-me-in', 'Count me in.', 'B1', 'я в деле, я с вами', 'Ich bin dabei.',
      ex('We’re going bowling on Friday. — [[Count me in]]!', 'В пятницу идём в боулинг. — Я с вами!', 'Wir gehen am Freitag bowlen. — Ich bin dabei!'),
      ['Противоположное: Count me out.', 'Gegenteil: Count me out.'], 'informal'),
    X('ill-pass', 'I’ll pass.', 'B1', 'я, пожалуй, пас', 'Ich verzichte. / Ohne mich.',
      ex('Fancy another coffee? — Thanks, but [[I’ll pass]].', 'Ещё кофе? — Спасибо, я пас.', 'Noch einen Kaffee? — Danke, ich verzichte.'), null, 'informal'),
    X('see-you-then', 'See you then.', 'A2', 'тогда увидимся', 'Bis dann.',
      ex('Seven at the station? — Perfect. [[See you then]].', 'В семь на вокзале? — Отлично. Тогда увидимся.', 'Um sieben am Bahnhof? — Perfekt. Bis dann.'))
  ], EVERYDAY);

  add('chunks', 'agree', [
    X('couldnt-agree-more', 'I couldn’t agree more.', 'B2', 'полностью согласен', 'Da stimme ich voll und ganz zu.',
      ex('We need more breaks. — [[I couldn’t agree more]].', 'Нам нужно больше перерывов. — Полностью согласен.', 'Wir brauchen mehr Pausen. — Da stimme ich voll und ganz zu.'),
      ['Отрицание здесь значит максимум согласия: «больше согласиться невозможно».', 'Die Verneinung drückt maximale Zustimmung aus: „mehr zustimmen geht nicht“.']),
    X('see-differently', 'I see it differently, because [X].', 'B1', 'я смотрю на это иначе, потому что [X]', 'Ich sehe das anders, weil [X].',
      ex('[[I see it differently, because]] the old system was cheaper.', 'Я смотрю на это иначе: старая система была дешевле.', 'Ich sehe das anders, weil das alte System billiger war.'))
  ]);

  add('chunks', 'complain', [
    X('not-acceptable', 'I’m afraid this isn’t acceptable.', 'B2', 'боюсь, так не пойдёт / это недопустимо', 'Das ist leider nicht akzeptabel.',
      ex('The room hasn’t been cleaned for three days. [[I’m afraid this isn’t acceptable]].', 'В номере не убирали три дня. Боюсь, это недопустимо.', 'Das Zimmer wurde drei Tage nicht geputzt. Das ist leider nicht akzeptabel.'),
      ['I’m afraid смягчает тон, но не силу жалобы.', 'I’m afraid macht den Ton höflicher, nicht die Beschwerde schwächer.']),
    X('been-waiting', 'I’ve been waiting for [time].', 'B1', 'я жду уже [время]', 'Ich warte schon seit [Zeit].',
      ex('[[I’ve been waiting for]] over an hour.', 'Я жду уже больше часа.', 'Ich warte schon seit über einer Stunde.'),
      ['Present perfect continuous: действие началось и продолжается.', 'Present perfect continuous: begonnen und dauert noch an.'])
  ]);

  add('chunks', 'smalltalk', [
    X('plans-weekend', 'Any plans for the weekend?', 'A2', 'есть планы на выходные?', 'Schon Pläne fürs Wochenende?',
      ex('[[Any plans for the weekend]]? — Just relaxing, I think.', 'Есть планы на выходные? — Наверное, просто отдохну.', 'Schon Pläne fürs Wochenende? — Einfach entspannen, glaube ich.'), null, 'informal'),
    X('hows-it-going', 'How’s it going?', 'A2', 'как дела?', 'Wie läuft’s?',
      ex('Hi Sam, [[how’s it going]]? — Not bad, thanks.', 'Привет, Сэм, как дела? — Неплохо, спасибо.', 'Hi Sam, wie läuft’s? — Nicht schlecht, danke.'), null, 'informal')
  ]);

  add('chunks', 'phone', [
    X('good-time', 'Is this a good time to talk?', 'B1', 'тебе / вам сейчас удобно говорить?', 'Passt es gerade zum Telefonieren?',
      ex('Hi, it’s Anna from accounts. [[Is this a good time to talk]]?', 'Здравствуйте, это Анна из бухгалтерии. Вам удобно сейчас говорить?', 'Hallo, hier ist Anna aus der Buchhaltung. Passt es gerade?'))
  ]);

  add('chunks', 'it-standup', [
    X('almost-done', 'I’m almost done with [X].', 'B1', 'я почти закончил [X]', 'Mit [X] bin ich fast fertig.',
      ex('[[I’m almost done with]] the migration script.', 'Я почти закончил скрипт миграции.', 'Mit dem Migrationsskript bin ich fast fertig.')),
    X('pick-up-next', 'Next I’ll pick up [X].', 'B2', 'дальше я возьму [X]', 'Als Nächstes übernehme ich [X].',
      ex('[[Next I’ll pick up]] the login ticket.', 'Дальше возьму тикет с логином.', 'Als Nächstes übernehme ich das Login-Ticket.'),
      ['Pick up a ticket / task — взять задачу в работу.', 'Pick up a ticket / task — eine Aufgabe übernehmen.'])
  ]);

  add('chunks', 'it-bug', [
    X('works-my-machine', 'It works on my machine, but [X].', 'B1', 'у меня на компьютере работает, но [X]', 'Bei mir lokal läuft es, aber [X].',
      ex('[[It works on my machine, but]] it fails on the test server.', 'У меня локально работает, но на тестовом сервере падает.', 'Bei mir lokal läuft es, aber auf dem Testserver schlägt es fehl.'),
      ['Классическая (и немного ироничная) фраза разработчиков.', 'Ein klassischer (und leicht ironischer) Entwicklersatz.'])
  ]);

  add('chunks', 'it-help', [
    X('have-a-minute', 'Do you have a minute?', 'A2', 'у тебя есть минутка?', 'Hast du kurz Zeit?',
      ex('[[Do you have a minute]]? I’m stuck on a merge conflict.', 'Есть минутка? Я застрял на конфликте при слиянии.', 'Hast du kurz Zeit? Ich hänge an einem Merge-Konflikt fest.')),
    X('quick-look', 'Could you take a quick look at [X]?', 'B1', 'можешь быстро глянуть [X]?', 'Kannst du kurz über [X] schauen?',
      ex('[[Could you take a quick look at]] my pull request?', 'Можешь быстро глянуть мой пул-реквест?', 'Kannst du kurz über meinen Pull Request schauen?'))
  ]);

  add('chunks', 'it-meeting', [
    X('take-offline', 'Let’s take this offline.', 'B2', 'давайте обсудим это отдельно (после встречи)', 'Lass uns das außerhalb des Meetings klären.',
      ex('This is getting too detailed — [[let’s take this offline]].', 'Это уже слишком подробно — давайте обсудим отдельно.', 'Das wird zu detailliert — lass uns das separat klären.')),
    X('park-this', 'Can we park this for now?', 'B2', 'давайте пока отложим этот вопрос', 'Können wir das erst mal zurückstellen?',
      ex('We’re running out of time. [[Can we park this for now]]?', 'Время заканчивается. Давайте пока отложим этот вопрос?', 'Uns läuft die Zeit davon. Können wir das erst mal zurückstellen?'),
      ['Park — «припарковать» тему, чтобы вернуться к ней позже.', 'Park — ein Thema „parken“, um später darauf zurückzukommen.'])
  ]);

  add('it', 'career-paths', [
    W('internship', 'noun', 'internship', 'B1', 'стажировка', 'Praktikum',
      ex('She did a three-month [[internship]] at a design agency.', 'Она прошла трёхмесячную стажировку в дизайн-агентстве.', 'Sie hat ein dreimonatiges Praktikum in einer Designagentur gemacht.')),
    W('job-interview', 'noun', 'job interview', 'A2', 'собеседование', 'Vorstellungsgespräch',
      ex('I’ve got a [[job interview]] on Monday.', 'В понедельник у меня собеседование.', 'Ich habe am Montag ein Vorstellungsgespräch.')),
    W('career-change', 'noun', 'career change', 'B2', 'смена профессии', 'beruflicher Neuanfang, Quereinstieg',
      ex('At forty he made a [[career change]] and became a teacher.', 'В сорок он сменил профессию и стал учителем.', 'Mit vierzig hat er sich beruflich neu orientiert und ist Lehrer geworden.')),
    W('skills', 'noun', 'skills', 'B1', 'навыки, умения', 'Fähigkeiten, Kenntnisse',
      ex('The course helped me improve my presentation [[skills]].', 'Курс помог мне улучшить навыки презентации.', 'Der Kurs hat mir geholfen, meine Präsentationsfähigkeiten zu verbessern.'),
      ['Soft skills — гибкие навыки, hard skills — профессиональные.', 'Soft skills — überfachliche, hard skills — fachliche Kompetenzen.']),
    W('retire', 'verb', 'retire', 'B1', 'выходить на пенсию', 'in Rente gehen',
      ex('My father [[retired]] last year after forty years at the same firm.', 'Отец вышел на пенсию в прошлом году — сорок лет в одной фирме.', 'Mein Vater ist letztes Jahr nach vierzig Jahren in derselben Firma in Rente gegangen.'))
  ]);

  add('it', 'world-of-work', [
    W('remote-work', 'noun', 'remote work', 'B1', 'удалённая работа', 'Remote-Arbeit, Homeoffice',
      ex('Since the pandemic, [[remote work]] has become normal in our team.', 'После пандемии удалёнка стала у нас в команде нормой.', 'Seit der Pandemie ist Remote-Arbeit in unserem Team normal.')),
    W('commute', 'noun', 'commute', 'B1', 'дорога на работу и обратно', 'Arbeitsweg, Pendeln',
      ex('My [[commute]] takes an hour each way.', 'Дорога на работу занимает у меня час в одну сторону.', 'Mein Arbeitsweg dauert pro Strecke eine Stunde.'),
      ['Глагол тот же: to commute — ездить на работу.', 'Gleiches Verb: to commute — pendeln.']),
    W('freelancer', 'noun', 'freelancer', 'B2', 'фрилансер', 'Freiberufler(in), Freelancer',
      ex('As a [[freelancer]], she chooses her own projects.', 'Как фрилансер она сама выбирает проекты.', 'Als Freiberuflerin sucht sie sich ihre Projekte selbst aus.'))
  ]);
})();
