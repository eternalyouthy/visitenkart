/* RUSSIAN · Expressions second batch: 12 idioms, 12 everyday phrases and chunks for eight more functions
 * (complain, problem, appointments, email, smalltalk, it_bug, it_help, it_meeting) plus one more per existing function.
 * Stress marked with "+" before the stressed vowel (ё needs none). Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function I(id, t, level, register, en, de, e, note) {
    return { id: 'ru-ex-idiom-' + id, t: t, level: level, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }
  function E(id, t, level, register, en, de, e, note) {
    return { id: 'ru-ex-ev-' + id, t: t, level: level, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }
  function C(id, fn, topics, t, register, en, de, e, note) {
    return { id: 'ru-ch-' + id, topic: fn, topics: topics, t: t, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    I('zarubit', 'зарубить на нос+у', 'B2', 'informal', 'to remember once and for all', 'sich etwas hinter die Ohren schreiben',
      ex('[[Заруб+и себ+е на нос+у]]: пар+оли ником+у не сообщ+аем.', 'Get this into your head: we never share passwords with anyone.', 'Schreib dir hinter die Ohren: Passwörter geben wir niemandem.'),
      ['«Нос» here is an old word for a tally stick you notched to remember debts — not the nose.', '«Нос» ist hier ein altes Wort für ein Kerbholz, in das man Schulden einritzte — nicht die Nase.']),
    I('vodit-za-nos', 'в+одить за нос', 'B2', 'informal', 'to string someone along, to lead by the nose', 'jemanden an der Nase herumführen',
      ex('Он уж+е м+есяц [[в+одит нас за нос]] с +этим догов+ором.', 'He’s been stringing us along with this contract for a month.', 'Er führt uns mit diesem Vertrag schon einen Monat an der Nase herum.'),
      ['Same image as German an der Nase herumführen.', 'Dasselbe Bild wie im Deutschen.']),
    I('s-gusya-voda', 'как с г+уся вод+а', 'B2', 'informal', 'like water off a duck’s back', 'es perlt an ihm ab',
      ex('Крит+ика ем+у [[как с г+уся вод+а]].', 'Criticism is like water off a duck’s back to him.', 'Kritik perlt einfach an ihm ab.'),
      ['Literally “like water off a goose”.', 'Wörtlich „wie Wasser von einer Gans“.']),
    I('sest-v-luzhu', 'сесть в л+ужу', 'B2', 'informal', 'to make a fool of yourself', 'sich blamieren',
      ex('Я не подгот+овился и на встр+ече [[сел в л+ужу]].', 'I didn’t prepare and made a fool of myself at the meeting.', 'Ich habe mich nicht vorbereitet und mich im Meeting blamiert.'),
      ['Literally “to sit down in a puddle”.', 'Wörtlich „sich in eine Pfütze setzen“.']),
    I('vilami', 'в+илами по вод+е п+исано', 'B2', 'informal', 'it’s far from certain', 'das steht in den Sternen',
      ex('Повыш+ение пок+а [[в+илами по вод+е п+исано]].', 'The promotion is far from certain yet.', 'Die Beförderung steht noch in den Sternen.'),
      ['Literally “written on water with a pitchfork”.', 'Wörtlich „mit der Heugabel aufs Wasser geschrieben“.']),
    I('deshevo-serdito', 'дёшево и серд+ито', 'B1', 'informal', 'cheap and cheerful', 'günstig und gut',
      ex('Каф+е пр+остое, но [[дёшево и серд+ито]].', 'The café is simple but cheap and cheerful.', 'Das Café ist einfach, aber günstig und gut.'),
      ['Literally “cheap and angry” — serdito once meant “strong, effective”.', 'Wörtlich „billig und böse“ — сердито hieß früher „kräftig, wirksam“.']),
    I('ni-ryba', 'ни рыб+а ни м+ясо', 'B1', 'informal', 'neither fish nor fowl; bland, characterless', 'weder Fisch noch Fleisch',
      ex('Нов+ый дир+ектор как+ой-то [[ни рыб+а ни м+ясо]].', 'The new director is rather bland.', 'Der neue Direktor ist weder Fisch noch Fleisch.'),
      ['Same image as in German.', 'Dasselbe Bild wie im Deutschen.']),
    I('sedmoe-nebo', 'на седьм+ом н+ебе', 'B1', 'informal', 'on cloud nine', 'im siebten Himmel',
      ex('Она получ+ила раб+оту мечт+ы и теп+ерь [[на седьм+ом н+ебе]].', 'She got her dream job and is now on cloud nine.', 'Sie hat ihren Traumjob bekommen und ist jetzt im siebten Himmel.')),
    I('tyanut-kota', 'тян+уть кот+а за хвост', 'B2', 'informal', 'to drag your feet, to stall', 'etwas in die Länge ziehen',
      ex('Хв+атит [[тян+уть кот+а за хвост]], говор+и, что случ+илось.', 'Stop stalling and tell me what happened.', 'Hör auf herumzudrucksen und sag, was passiert ist.'),
      ['Literally “to pull the cat by its tail”.', 'Wörtlich „die Katze am Schwanz ziehen“.']),
    I('delo-v-shlyape', 'дел+о в шл+япе', 'B2', 'informal', 'it’s in the bag', 'die Sache ist geritzt',
      ex('Кли+ент подпис+ал — [[дел+о в шл+япе]]!', 'The client has signed — it’s in the bag!', 'Der Kunde hat unterschrieben — die Sache ist geritzt!'),
      ['Literally “the matter is in the hat”.', 'Wörtlich „die Sache ist im Hut“.']),
    I('kot-naplakal', 'кот напл+акал', 'B1', 'informal', 'next to nothing, very little', 'herzlich wenig',
      ex('Д+енег у нас до зарпл+аты — [[кот напл+акал]].', 'We’ve got next to no money until payday.', 'Bis zum Gehalt haben wir herzlich wenig Geld.'),
      ['Literally “as much as a cat has cried”.', 'Wörtlich „so viel, wie eine Katze geweint hat“.']),
    I('bez-truda', 'Без труд+а не в+ытащишь и р+ыбку из пруд+а.', 'B1', 'neutral', 'no pain, no gain', 'Ohne Fleiß kein Preis.',
      ex('Хоч+ешь в+ыучить язык? [[Без труд+а не в+ытащишь и р+ыбку из пруд+а]].', 'Want to learn a language? No pain, no gain.', 'Du willst eine Sprache lernen? Ohne Fleiß kein Preis.'),
      ['Proverb: “without effort you won’t even pull a little fish out of the pond”.', 'Sprichwort: „ohne Mühe ziehst du nicht einmal ein Fischlein aus dem Teich“.'])
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    E('udachi', 'Уд+ачи!', 'A2', 'neutral', 'Good luck!', 'Viel Glück!',
      ex('З+автра собес+едование? [[Уд+ачи]]!', 'Interview tomorrow? Good luck!', 'Morgen Vorstellungsgespräch? Viel Glück!')),
    E('ponyatno', 'Пон+ятно.', 'A2', 'neutral', 'I see. / Got it.', 'Verstehe. / Alles klar.',
      ex('С+ервер перезагруж+ается, н+ужно пять мин+ут. — [[Пон+ятно]].', 'The server is restarting, it needs five minutes. — Got it.', 'Der Server startet neu, das dauert fünf Minuten. — Verstehe.')),
    E('ser-ezno', 'Серьёзно?', 'A2', 'informal', 'Seriously? Really?', 'Echt? Im Ernst?',
      ex('Он уволился. — [[Серьёзно]]? Почем+у?', 'He’s quit. — Seriously? Why?', 'Er hat gekündigt. — Echt? Warum?')),
    E('vot-imenno', 'Вот +именно.', 'B1', 'neutral', 'Exactly. / That’s just it.', 'Genau. / Eben.',
      ex('Без т+естов нельз+я выпуск+ать рел+из. — [[Вот +именно]].', 'We can’t ship the release without tests. — Exactly.', 'Ohne Tests können wir nicht releasen. — Genau.')),
    E('bez-ponyatiya', 'Без пон+ятия.', 'A2', 'informal', 'No idea.', 'Keine Ahnung.',
      ex('Где ключ+и? — [[Без пон+ятия]].', 'Where are the keys? — No idea.', 'Wo sind die Schlüssel? — Keine Ahnung.')),
    E('vsyo-ravno', 'Мне всё равн+о.', 'A2', 'neutral', 'I don’t mind. / I don’t care.', 'Mir ist das egal.',
      ex('Ч+ай или к+офе? — [[Мне всё равн+о]].', 'Tea or coffee? — I don’t mind.', 'Tee oder Kaffee? — Mir egal.'),
      ['Can sound indifferent; softer: «Мне без разницы» or «Как хочешь».', 'Kann gleichgültig klingen; weicher: «Мне без разницы» oder «Как хочешь».']),
    E('nichego-sebe', 'Ничег+о себ+е!', 'B1', 'informal', 'Wow! / Well I never!', 'Wahnsinn! / Na so was!',
      ex('[[Ничег+о себ+е]], как+ой вид из окн+а!', 'Wow, what a view from the window!', 'Wahnsinn, was für eine Aussicht!'),
      ['Pronounced [ничево́ себе́]. Expresses surprise — good or bad.', 'Aussprache [ничево́ себе́]. Drückt Staunen aus — positiv oder negativ.']),
    E('vsyo-normalno', 'Всё норм+ально.', 'A2', 'informal', 'Everything’s fine.', 'Alles in Ordnung.',
      ex('Ты в п+орядке? — Да, [[всё норм+ально]].', 'Are you okay? — Yes, everything’s fine.', 'Alles okay bei dir? — Ja, alles in Ordnung.')),
    E('pozdravlyayu', 'Поздравл+яю!', 'A2', 'neutral', 'Congratulations!', 'Herzlichen Glückwunsch!',
      ex('Ты сдал экз+амен? [[Поздравл+яю]]!', 'You passed the exam? Congratulations!', 'Du hast die Prüfung bestanden? Herzlichen Glückwunsch!'),
      ['With the occasion: поздравляю с днём рождения / с повышением (с + Instr.).', 'Mit Anlass: поздравляю с днём рождения / с повышением (с + Instr.).']),
    E('tochno', 'Т+очно!', 'A2', 'informal', 'Right! / Oh yes, of course!', 'Stimmt! / Ach ja!',
      ex('Сег+одня же пр+аздник, магаз+ины закр+ыты. — [[Т+очно]]!', 'It’s a public holiday today, the shops are closed. — Oh right!', 'Heute ist doch Feiertag, die Läden haben zu. — Stimmt!')),
    E('ne-volnuysya', 'Не волн+уйся.', 'A2', 'neutral', 'Don’t worry.', 'Keine Sorge.',
      ex('[[Не волн+уйся]], я всё усп+ею.', 'Don’t worry, I’ll get it all done in time.', 'Keine Sorge, ich schaffe das rechtzeitig.'),
      ['Formal / plural: «Не волнуйтесь».', 'Höflich / Plural: «Не волнуйтесь».']),
    E('poka', 'Пок+а! До ск+орого!', 'A1', 'informal', 'Bye! See you soon!', 'Tschüss! Bis bald!',
      ex('Ну всё, [[пок+а]]! [[До ск+орого]]!', 'Right then, bye! See you soon!', 'Also dann, tschüss! Bis bald!'),
      ['Informal only; formal goodbye: «До свидания».', 'Nur informell; förmlich: «До свидания».'])
  ] });

  GT.register({ tab: 'chunks', items: [
    // one more for each existing function
    C('na-moy-vzglyad', 'opinion', ['work', 'society'], 'На мой взгляд, …', 'formal', 'In my view, …', 'Meines Erachtens …',
      ex('[[На мой взгляд]], про+ект н+ужно отлож+ить.', 'In my view, the project should be postponed.', 'Meines Erachtens sollten wir das Projekt verschieben.'),
      ['More formal than «по-моему»: meetings, essays.', 'Förmlicher als «по-моему»: Meetings, Aufsätze.']),
    C('ne-soglasen', 'agree', ['work', 'workcomm', 'society'], 'Я не совс+ем согл+асен, потом+у что …', 'neutral', 'I don’t quite agree, because …', 'Ich bin nicht ganz einverstanden, weil …',
      ex('[[Я не совс+ем согл+асен, потом+у что]] сроки сл+ишком сж+атые.', 'I don’t quite agree, because the deadlines are too tight.', 'Ich bin nicht ganz einverstanden, weil die Fristen zu knapp sind.')),
    C('chto-znachit', 'clarify', ['work', 'authorities'], 'Что зн+ачит [X]?', 'neutral', 'What does [X] mean?', 'Was bedeutet [X]?',
      ex('Извин+ите, [[что зн+ачит]] «апост+иль»?', 'Excuse me, what does “apostille” mean?', 'Entschuldigung, was bedeutet „Apostille“?')),
    C('ne-tuda', 'phone', ['everyday'], 'Вы не туд+а попал+и.', 'neutral', 'You’ve got the wrong number.', 'Sie haben sich verwählt.',
      ex('Здесь нет никак+ого Серг+ея — [[вы не туд+а попал+и]].', 'There’s no Sergei here — you’ve got the wrong number.', 'Hier gibt es keinen Sergej — Sie haben sich verwählt.'),
      ['Literally “you got to the wrong place”.', 'Wörtlich „Sie sind nicht dort angekommen“.']),
    C('gotov-k', 'it_standup', ['workcomm', 'dev'], '[X] гот+ово к ревь+ю.', 'neutral', '[X] is ready for review.', '[X] ist bereit fürs Review.',
      ex('Пул-рекв+ест по авториз+ации [[гот+ов к ревь+ю]].', 'The pull request for authentication is ready for review.', 'Der Pull Request zur Authentifizierung ist bereit fürs Review.'),
      ['Agrees in gender: готов (m), готова (f), готово (n).', 'Kongruenz: готов (m), готова (f), готово (n).']),

    // complain
    C('hochu-pozhalovatsya', 'complain', ['home', 'food'], 'Я хоч+у пож+аловаться на [X].', 'neutral', 'I’d like to complain about [X].', 'Ich möchte mich über [X] beschweren.',
      ex('[[Я хоч+у пож+аловаться на]] шум из сос+едней кварт+иры.', 'I’d like to complain about the noise from the flat next door.', 'Ich möchte mich über den Lärm aus der Nachbarwohnung beschweren.'),
      ['пожаловаться на + Akk.', 'пожаловаться на + Akk.']),
    C('tak-ne-goditsya', 'complain', ['home', 'food', 'authorities'], '+Это неприем+лемо.', 'formal', 'This is unacceptable.', 'Das ist inakzeptabel.',
      ex('Мы ждём рем+онта уж+е м+есяц. [[+Это неприем+лемо]].', 'We’ve been waiting a month for the repair. This is unacceptable.', 'Wir warten seit einem Monat auf die Reparatur. Das ist inakzeptabel.')),
    C('vernut-dengi', 'complain', ['food'], 'Я хоч+у верн+уть д+еньги.', 'neutral', 'I’d like a refund.', 'Ich möchte mein Geld zurück.',
      ex('Т+овар брак+ованный, [[я хоч+у верн+уть д+еньги]].', 'The item is faulty, I’d like a refund.', 'Die Ware ist defekt, ich möchte mein Geld zurück.')),
    // problem
    C('ne-rabotaet', 'problem', ['home', 'everyday'], 'У мен+я не раб+отает [X].', 'neutral', 'My [X] isn’t working.', 'Bei mir funktioniert [X] nicht.',
      ex('[[У мен+я не раб+отает]] интерн+ет с утр+а.', 'My internet hasn’t been working since this morning.', 'Bei mir geht seit heute Morgen das Internet nicht.'),
      ['The broken thing is the subject: у меня не работает принтер.', 'Das Kaputte ist Subjekt: у меня не работает принтер.']),
    C('slomalsya', 'problem', ['home', 'everyday'], '[X] слом+ался.', 'neutral', '[X] has broken.', '[X] ist kaputtgegangen.',
      ex('У нас [[слом+ался]] холод+ильник.', 'Our fridge has broken down.', 'Unser Kühlschrank ist kaputtgegangen.'),
      ['Agrees in gender: сломался (m), сломалась (f), сломалось (n).', 'Kongruenz: сломался (m), сломалась (f), сломалось (n).']),
    C('chto-delat', 'problem', ['everyday', 'authorities'], 'Подскаж+ите, пож+алуйста, что д+елать, если …', 'formal', 'Could you tell me what to do if …', 'Können Sie mir sagen, was ich tun soll, wenn …',
      ex('[[Подскаж+ите, пож+алуйста, что д+елать, если]] я потер+ял пасп+орт?', 'Could you tell me what to do if I’ve lost my passport?', 'Können Sie mir sagen, was ich tun soll, wenn ich meinen Pass verloren habe?'),
      ['Подскажите — the polite standard way to ask for information.', 'Подскажите — die übliche höfliche Art, nach Informationen zu fragen.']),
    // appointments
    C('zapisatsya', 'appointments', ['health', 'authorities'], 'Я хоч+у запис+аться к [X] на [день].', 'neutral', 'I’d like to make an appointment with [X] for [day].', 'Ich möchte einen Termin bei [X] am [Tag].',
      ex('[[Я хоч+у запис+аться к]] терап+евту [[на]] вт+орник.', 'I’d like an appointment with the GP for Tuesday.', 'Ich möchte einen Termin beim Hausarzt am Dienstag.'),
      ['записаться к + Dat. (к врачу), на + Akk. (на вторник).', 'записаться к + Dat. (к врачу), на + Akk. (на вторник).']),
    C('perenesti', 'appointments', ['health', 'work'], 'М+ожно перенест+и встр+ечу на [день]?', 'neutral', 'Can we move the meeting to [day]?', 'Können wir das Treffen auf [Tag] verschieben?',
      ex('[[М+ожно перенест+и встр+ечу на]] четв+ерг?', 'Can we move the meeting to Thursday?', 'Können wir das Treffen auf Donnerstag verschieben?')),
    C('vam-udobno', 'appointments', ['work', 'workcomm'], 'Вам уд+обно в [день] в [время]?', 'formal', 'Does [day] at [time] suit you?', 'Passt es Ihnen am [Tag] um [Uhrzeit]?',
      ex('[[Вам уд+обно в]] п+ятницу [[в]] дв+а час+а?', 'Does Friday at two suit you?', 'Passt es Ihnen am Freitag um zwei?')),
    // email
    C('zdravstvuyte', 'email', ['work', 'authorities'], 'Здр+авствуйте, [Имя Отчество]!', 'formal', 'Dear [name],', 'Sehr geehrte(r) [Name],',
      ex('[[Здр+авствуйте]], Ир+ина Петр+овна!', 'Dear Irina Petrovna,', 'Sehr geehrte Frau Irina Petrowna,'),
      ['Formal emails use first name + patronymic, followed by «!» or «,».', 'Förmliche E-Mails: Vorname + Vatersname, danach «!» oder «,».']),
    C('vo-vlozhenii', 'email', ['work', 'authorities'], 'Во влож+ении — [X].', 'neutral', 'Please find [X] attached.', 'Im Anhang finden Sie [X].',
      ex('[[Во влож+ении]] — счёт за окт+ябрь.', 'Please find the invoice for October attached.', 'Im Anhang finden Sie die Rechnung für Oktober.')),
    C('s-uvazheniem', 'email', ['work', 'authorities'], 'С уваж+ением, [Имя]', 'formal', 'Kind regards, [name]', 'Mit freundlichen Grüßen, [Name]',
      ex('[[С уваж+ением]],\n+Анна Смирн+ова', 'Kind regards,\nAnna Smirnova', 'Mit freundlichen Grüßen\nAnna Smirnova'),
      ['Unlike German, Russian puts a comma after the closing formula.', 'Anders als im Deutschen steht im Russischen ein Komma nach der Grußformel.']),
    // smalltalk
    C('kak-dela', 'smalltalk', ['everyday', 'people'], 'Как дел+а? Как+ие нов+ости?', 'informal', 'How are things? What’s new?', 'Wie geht’s? Was gibt’s Neues?',
      ex('Прив+ет! [[Как дел+а]]? [[Как+ие нов+ости]]?', 'Hi! How are things? What’s new?', 'Hallo! Wie geht’s? Was gibt’s Neues?')),
    C('vyhodnye', 'smalltalk', ['everyday', 'people'], 'Как провёл (провел+а) в+ыходные?', 'informal', 'How was your weekend?', 'Wie war dein Wochenende?',
      ex('[[Как провёл в+ыходные]]? — Отл+ично, б+ыли на д+аче.', 'How was your weekend? — Great, we were at the dacha.', 'Wie war dein Wochenende? — Super, wir waren auf der Datscha.'),
      ['The verb agrees with the person: провёл (m), провела (f).', 'Das Verb richtet sich nach der Person: провёл (m), провела (f).']),
    C('pogoda', 'smalltalk', ['everyday'], 'Ну и погода сег+одня!', 'informal', 'What weather today!', 'Was für ein Wetter heute!',
      ex('[[Ну и пог+ода сег+одня]]! Опять дождь.', 'What weather today! Raining again.', 'Was für ein Wetter heute! Schon wieder Regen.')),
    // it_bug
    C('vosproizvodit', 'it_bug', ['dev', 'workcomm'], 'Баг воспроизв+одится, когд+а …', 'neutral', 'The bug reproduces when …', 'Der Bug tritt auf, wenn …',
      ex('[[Баг воспроизв+одится, когд+а]] польз+ователь в+ыходит из акка+унта.', 'The bug reproduces when the user logs out.', 'Der Bug tritt auf, wenn sich der Nutzer abmeldet.')),
    C('ozhidaemoe', 'it_bug', ['dev', 'workcomm'], 'Ожид+аемый результ+ат — [X], фактич+еский — [Y].', 'neutral', 'Expected result: [X], actual result: [Y].', 'Erwartet: [X], tatsächlich: [Y].',
      ex('[[Ожид+аемый результ+ат]] — ок+но вх+ода, [[фактич+еский]] — б+елый экр+ан.', 'Expected: the login window; actual: a blank white screen.', 'Erwartet: das Login-Fenster; tatsächlich: ein weißer Bildschirm.'),
      ['The standard bug-report formula in Russian teams.', 'Die Standardformel für Bugreports in russischen Teams.']),
    C('u-menya-lokalno', 'it_bug', ['dev'], 'Л+окально всё раб+отает, а на [X] — нет.', 'informal', 'It works locally, but not on [X].', 'Lokal läuft alles, aber auf [X] nicht.',
      ex('[[Л+окально всё раб+отает, а на]] ст+енде [[— нет]].', 'It works locally, but not on the test stand.', 'Lokal läuft alles, aber auf dem Testsystem nicht.'),
      ['стенд — IT slang for a test environment.', 'стенд — IT-Jargon für eine Testumgebung.']),
    // it_help
    C('mozhesh-glyanut', 'it_help', ['dev', 'workcomm'], 'М+ожешь глян+уть [X]?', 'informal', 'Can you have a look at [X]?', 'Kannst du dir [X] mal anschauen?',
      ex('[[М+ожешь глян+уть]] мой код? Что-то не так с ц+иклом.', 'Can you have a look at my code? Something’s wrong with the loop.', 'Kannst du dir meinen Code anschauen? Mit der Schleife stimmt was nicht.'),
      ['глянуть — colloquial for посмотреть.', 'глянуть — umgangssprachlich für посмотреть.']),
    C('est-minutka', 'it_help', ['dev', 'workcomm'], 'У теб+я есть мин+утка?', 'informal', 'Have you got a minute?', 'Hast du kurz Zeit?',
      ex('[[У теб+я есть мин+утка]]? Н+ужен сов+ет по архитект+уре.', 'Have you got a minute? I need advice on the architecture.', 'Hast du kurz Zeit? Ich brauche einen Rat zur Architektur.')),
    C('ne-mogu-razobratsya', 'it_help', ['dev', 'workcomm'], 'Не мог+у разобр+аться с [X].', 'neutral', 'I can’t figure out [X].', 'Ich komme mit [X] nicht klar.',
      ex('[[Не мог+у разобр+аться с]] настр+ойками Docker.', 'I can’t figure out the Docker settings.', 'Ich komme mit den Docker-Einstellungen nicht klar.'),
      ['разобраться с + Instr. — to get to grips with.', 'разобраться с + Instr. — sich in etwas einarbeiten, klarkommen.']),
    // it_meeting
    C('predlagayu', 'it_meeting', ['workcomm', 'dev'], 'Предлаг+аю [X].', 'neutral', 'I suggest [X].', 'Ich schlage vor, [X].',
      ex('[[Предлаг+аю]] сначал+а закр+ыть крит+ические б+аги.', 'I suggest we close the critical bugs first.', 'Ich schlage vor, zuerst die kritischen Bugs zu schließen.')),
    C('obsudim-otdelno', 'it_meeting', ['workcomm'], 'Давайте обсуд+им +это отд+ельно.', 'neutral', 'Let’s discuss this separately.', 'Lass uns das separat besprechen.',
      ex('Т+ема в+ажная, но [[давайте обсуд+им +это отд+ельно]].', 'It’s an important topic, but let’s discuss it separately.', 'Das Thema ist wichtig, aber lass uns das separat besprechen.')),
    C('podvedyom-itogi', 'it_meeting', ['workcomm'], 'Давайте подведём ит+оги.', 'neutral', 'Let’s sum up.', 'Fassen wir zusammen.',
      ex('[[Давайте подведём ит+оги]]: кто что д+елает до п+ятницы?', 'Let’s sum up: who does what by Friday?', 'Fassen wir zusammen: Wer macht was bis Freitag?'))
  ] });
})();
