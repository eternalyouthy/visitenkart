/* ENGLISH · Expressions fourth batch: 15 idioms + 10 everyday phrases + 52 chunks (4 per function × 13 functions) = 77 cards.
 * B1, B2 and C1 coverage. Checked against existing inventory for zero duplicates. Original examples (ru + de). */
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
    return { id: 'en:x4:' + id, type: 'chunk', pos: 'chunk', t: t, level: level, ru: ru, de: de, examples: [e], note: nt(note), register: register || 'neutral', learnable: true };
  }
  var IDIOMS = [['expressions', 'idioms']], EVERYDAY = [['expressions', 'everyday']];

  // Idioms (15: 5 each across 3 sub-topics)
  add('expressions', 'idioms-people', [
    X('fifth-wheel', 'fifth wheel', 'B2', 'пятое колесо в телеге (лишний человек)', 'das fünfte Rad am Wagen',
      ex('Everyone else was paired up, so I felt like a [[fifth wheel]].', 'Все остальные были парами, и я чувствовал себя пятым колесом.', 'Alle anderen waren zu zweit, da fühlte ich mich wie das fünfte Rad am Wagen.'), null, 'informal'),
    X('stand-own-feet', 'stand on your own two feet', 'B2', 'стоять на собственных ногах (быть самостоятельным)', 'auf eigenen Füßen stehen',
      ex('Once he got his first salary, he could finally [[stand on his own two feet]].', 'Получив первую зарплату, он наконец встал на собственные ноги.', 'Mit seinem ersten Gehalt konnte er endlich auf eigenen Füßen stehen.')),
    X('call-spade', 'call a spade a spade', 'C1', 'называть вещи своими именами', 'das Kind beim Namen nennen',
      ex('Let’s [[call a spade a spade]] — this release isn’t ready.', 'Назовём вещи своими именами — этот релиз не готов.', 'Nennen wir das Kind beim Namen — dieses Release ist nicht fertig.')),
    X('read-between-lines', 'read between the lines', 'B2', 'читать между строк', 'zwischen den Zeilen lesen',
      ex('[[Reading between the lines]], I don’t think they’ll renew the contract.', 'Читая между строк, не думаю, что они продлят контракт.', 'Wenn man zwischen den Zeilen liest, werden sie den Vertrag wohl nicht verlängern.')),
    X('think-outside-box', 'think outside the box', 'B2', 'мыслить нестандартно (выходить за рамки)', 'über den Tellerrand schauen, unkonventionell denken',
      ex('Fixing this budget bottleneck requires [[thinking outside the box]].', 'Чтобы решить эту проблему с бюджетом, нужно мыслить нестандартно.', 'Um diesen Budget-Engpass zu lösen, müssen wir unkonventionell denken.'))
  ], IDIOMS);

  add('expressions', 'idioms-situations', [
    X('keep-head-above', 'keep your head above water', 'B2', 'держаться на плаву (справляться с нагрузкой)', 'den Kopf über Wasser halten',
      ex('With three urgent audits at once, I’m barely [[keeping my head above water]].', 'С тремя срочными аудитами сразу я еле держусь на плаву.', 'Bei drei dringenden Audits gleichzeitig halte ich kaum den Kopf über Wasser.')),
    X('play-with-fire', 'play with fire', 'B2', 'играть с огнём (сильно рисковать)', 'mit dem Feuer spielen',
      ex('Skipping security patches on a live server is [[playing with fire]].', 'Пропускать патчи безопасности на боевом сервере — значит играть с огнём.', 'Sicherheitsupdates auf einem Liveserver auszulassen heißt, mit dem Feuer zu spielen.')),
    X('reinvent-wheel', 'reinvent the wheel', 'B2', 'изобретать велосипед', 'das Rad neu erfinden',
      ex('Use the standard crypto library — don’t [[reinvent the wheel]].', 'Используй стандартную криптобиблиотеку — не изобретай велосипед.', 'Nimm die Standardbibliothek — erfinde das Rad nicht neu.')),
    X('add-fuel-fire', 'add fuel to the fire', 'B2', 'подливать масла в огонь', 'Öl ins Feuer gießen',
      ex('Sending an angry reply will only [[add fuel to the fire]].', 'Гневный ответ только подольёт масла в огонь.', 'Eine wütende Antwort gießt nur Öl ins Feuer.')),
    X('move-goalposts', 'move the goalposts', 'C1', 'менять правила по ходу игры (сдвигать критерии)', 'die Spielregeln mittendrin ändern',
      ex('Every time we finish a sprint, they [[move the goalposts]].', 'Каждый раз, когда мы заканчиваем спринт, они меняют требования.', 'Jedes Mal, wenn wir einen Sprint abschließen, ändern sie die Zielvorgaben.'))
  ], IDIOMS);

  add('expressions', 'idioms-decisions', [
    X('pig-in-poke', 'buy a pig in a poke', 'C1', 'купить кота в мешке', 'die Katze im Sack kaufen',
      ex('Always request a trial before paying — don’t [[buy a pig in a poke]].', 'Всегда просите пробный период перед оплатой — не покупайте кота в мешке.', 'Fordert immer eine Testphase an — kauft nicht die Katze im Sack.'),
      ['Poke — старинное слово для мешка.', 'Poke is an old word for a sack or bag.']),
    X('roll-up-sleeves', 'roll up your sleeves', 'B2', 'засучить рукава (взяться за дело)', 'die Ärmel hochkrempeln',
      ex('There’s a lot to fix, so let’s [[roll up our sleeves]] and start.', 'Исправлять предстоит много, так что засучим рукава и начнём.', 'Es gibt viel zu reparieren, also krempeln wir die Ärmel hoch und fangen an.')),
    X('cool-head', 'keep a cool head', 'B2', 'сохранять холодную голову (спокойствие)', 'einen kühlen Kopf bewahren',
      ex('During a live outage, the most important skill is to [[keep a cool head]].', 'Во время сбоя в проде важнее всего сохранять холодную голову.', 'Bei einem Ausfall ist es am wichtigsten, einen kühlen Kopf zu bewahren.')),
    X('take-reins', 'take the reins', 'C1', 'взять бразды правления в свои руки', 'das Heft in die Hand nehmen',
      ex('When the lead fell ill, Maya stepped up to [[take the reins]].', 'Когда лид заболел, Майя взяла руководство проектом на себя.', 'Als der Lead krank wurde, nahm Maya das Heft in die Hand.')),
    X('bark-wrong-tree', 'bark up the wrong tree', 'B2', 'идти по ложному следу, ошибиться адресом', 'auf dem Holzweg sein',
      ex('If you blame the firewall, you’re [[barking up the wrong tree]] — it’s DNS.', 'Если вините файрвол, вы на ложном пути — дело в DNS.', 'Wenn du die Firewall verdächtigst, bist du auf dem Holzweg — es liegt am DNS.'), null, 'informal')
  ], IDIOMS);

  // Everyday phrases (10: 5 each across 2 sub-topics)
  add('expressions', 'everyday-respond', [
    X('be-that-as-it-may', 'Be that as it may.', 'C1', 'Как бы то ни было.', 'Wie dem auch sei.',
      ex('[[Be that as it may]], we still need an answer by noon.', 'Как бы то ни было, нам всё равно нужен ответ к полудню.', 'Wie dem auch sei, wir brauchen bis mittags eine Antwort.')),
    X('goes-without-saying', 'That goes without saying.', 'B2', 'Это само собой разумеется.', 'Das versteht sich von selbst.',
      ex('Backups must be encrypted — [[that goes without saying]].', 'Бэкапы должны быть зашифрованы — это само собой разумеется.', 'Backups müssen verschlüsselt sein — das versteht sich von selbst.')),
    X('no-offence', 'No offence.', 'B2', 'Без обид.', 'Nichts für ungut.',
      ex('[[No offence]], but the older version was much easier to read.', 'Без обид, но старая версия читалась гораздо легче.', 'Nichts für ungut, aber die ältere Version war viel leichter zu lesen.'),
      ['Амер. написание — No offense.', 'US-Schreibweise: No offense.'], 'informal'),
    X('weight-off-mind', 'That’s a weight off my mind.', 'B2', 'Камень с души упал!', 'Mir fällt ein Stein vom Herzen.',
      ex('The migration finished cleanly? [[That’s a weight off my mind]]!', 'Миграция завершилась чисто? Камень с души!', 'Die Migration ist sauber durchgelaufen? Mir fällt ein Stein vom Herzen!')),
    X('oh-well', 'Oh well!', 'B1', 'Ну и ладно! Была не была!', 'Was soll’s! / Na ja, egal.',
      ex('We missed the bus — [[oh well]], let’s walk through the park.', 'Мы опоздали на автобус — ну и ладно, пройдёмся через парк.', 'Wir haben den Bus verpasst — was soll’s, gehen wir durch den Park.'), null, 'informal')
  ], EVERYDAY);

  add('expressions', 'everyday-arrange', [
    X('be-in-touch', 'I’ll be in touch.', 'B1', 'Я свяжусь с вами / напишу позже.', 'Ich melde mich.',
      ex('Thanks for sending your availability — [[I’ll be in touch]] tomorrow.', 'Спасибо, что прислали свободные слоты — я напишу завтра.', 'Danke für Ihre Terminvorschläge — ich melde mich morgen.')),
    X('fine-by-me', 'Fine by me.', 'B1', 'Меня устраивает. / Я не против.', 'Von mir aus. / Mir passt’s.',
      ex('Shall we start at ten instead of nine? — [[Fine by me]].', 'Начнём в десять вместо девяти? — Я не против.', 'Fangen wir um zehn statt um neun an? — Von mir aus.'), null, 'informal'),
    X('matter-of-taste', 'It’s a matter of taste.', 'B2', 'Это дело вкуса.', 'Das ist Geschmackssache.',
      ex('Some prefer dark mode, others light — [[it’s a matter of taste]].', 'Кто-то любит тёмную тему, кто-то светлую — дело вкуса.', 'Manche mögen den Dark Mode, andere den hellen — das ist Geschmackssache.')),
    X('i-wish', 'I wish!', 'B1', 'Хотелось бы! (но вряд ли)', 'Schön wär’s!',
      ex('Did you get Friday off too? — [[I wish]]!', 'Тебе тоже дали выходной в пятницу? — Хотелось бы!', 'Hast du am Freitag auch frei? — Schön wär’s!'), null, 'informal'),
    X('keep-in-touch', 'Keep in touch!', 'B1', 'Будем на связи! Не пропадай!', 'Bleib in Kontakt! / Lass von dir hören!',
      ex('Good luck in your new role — [[keep in touch]]!', 'Удачи на новой должности — оставайся на связи!', 'Viel Erfolg in der neuen Rolle — bleib in Kontakt!'))
  ], EVERYDAY);

  // Chunks (52: 4 per function × 13 functions)
  add('chunks', 'opinion', [
    X('firmly-convinced', 'I’m firmly convinced that [X].', 'B2', 'я твёрдо убеждён(а), что [X]', 'ich bin fest davon überzeugt, dass [X]',
      ex('[[I’m firmly convinced that]] automated tests save time in the long run.', 'Я твёрдо убеждён, что автотесты экономят время в долгую.', 'Ich bin fest davon überzeugt, dass automatisierte Tests langfristig Zeit sparen.')),
    X('in-my-estimation', 'In my estimation, [X].', 'C1', 'по моей оценке / на мой взгляд, [X]', 'meines Erachtens [X]',
      ex('[[In my estimation]], the upgrade will take two full weekends.', 'По моей оценке, обновление займёт два полных уикенда.', 'Meines Erachtens wird das Upgrade zwei ganze Wochenenden dauern.')),
    X('lot-to-suggest', 'There’s a lot to suggest that [X].', 'C1', 'многое указывает на то, что [X]', 'es spricht viel dafür, dass [X]',
      ex('[[There’s a lot to suggest that]] phishing remains the top entry point.', 'Многое указывает на то, что фишинг остаётся главным вектором входа.', 'Es spricht viel dafür, dass Phishing das Haupteinfallstor bleibt.')),
    X('sceptical-whether', 'Honestly, I’m sceptical whether [X].', 'B2', 'честно говоря, я сомневаюсь, что [X]', 'ehrlich gesagt bin ich skeptisch, ob [X]',
      ex('[[Honestly, I’m sceptical whether]] we can launch without extra QA.', 'Честно говоря, сомневаюсь, что мы сможем запуститься без дополнительного QA.', 'Ehrlich gesagt bin ich skeptisch, ob wir ohne zusätzliches QA starten können.'))
  ]);

  add('chunks', 'agree', [
    X('makes-complete-sense', 'That makes complete sense.', 'B1', 'это абсолютно логично / всё понятно', 'das leuchtet mir völlig ein',
      ex('Splitting the database first? Yes, [[that makes complete sense]].', 'Сначала разделить базу? Да, это абсолютно логично.', 'Zuerst die Datenbank aufteilen? Ja, das leuchtet völlig ein.')),
    X('afraid-disagree', 'I’m afraid I have to disagree there.', 'B2', 'боюсь, здесь я вынужден(а) не согласиться', 'da muss ich leider widersprechen',
      ex('[[I’m afraid I have to disagree there]]: the figures tell a different story.', 'Боюсь, здесь не соглашусь: цифры говорят о другом.', 'Da muss ich leider widersprechen: Die Zahlen sagen etwas anderes.')),
    X('one-hand-other', 'On the one hand [X], on the other hand [Y].', 'B1', 'с одной стороны [X], с другой стороны [Y]', 'einerseits [X], andererseits [Y]',
      ex('[[On the one hand]] it’s cheap, [[on the other hand]] support is slow.', 'С одной стороны, это дёшево, с другой — поддержка медленная.', 'Einerseits ist es günstig, andererseits ist der Support langsam.')),
    X('hits-the-mark', 'That hits the mark.', 'B2', 'в самую точку', 'das trifft es genau',
      ex('Your summary of the root cause really [[hits the mark]].', 'Твоё резюме первопричины бьёт прямо в цель.', 'Deine Zusammenfassung der Ursache trifft es genau.'))
  ]);

  add('chunks', 'clarify', [
    X('briefly-check-mean', 'Could I briefly check what you mean by [X]?', 'B2', 'можно коротко уточнить, что вы имеете в виду под [X]?', 'darf ich kurz nachfragen, wie [X] gemeint ist?',
      ex('[[Could I briefly check what you mean by]] “soft launch”?', 'Можно коротко уточнить, что вы имеете в виду под «мягким запуском»?', 'Darf ich kurz nachfragen, was mit „Soft Launch“ gemeint ist?')),
    X('understand-right', 'So if I understand you right, [X].', 'B1', 'значит, если я вас правильно понял(а), [X]', 'wenn ich Sie richtig verstehe, [X]',
      ex('[[So if I understand you right]], we keep the old API until June.', 'Значит, если я вас правильно понял, старый API остаётся до июня.', 'Wenn ich Sie richtig verstehe, behalten wir die alte API bis Juni.')),
    X('define-precisely', 'Could we define [X] a bit more precisely?', 'B2', 'можем ли мы определить [X] чуть точнее?', 'könnten wir [X] etwas genauer fassen?',
      ex('[[Could we define]] “high priority” [[a bit more precisely]]?', 'Можем ли мы точнее определить, что такое «высокий приоритет»?', 'Könnten wir „hohe Priorität“ etwas genauer fassen?')),
    X('look-like-practice', 'What does that look like in practice?', 'B2', 'как это выглядит на практике?', 'wie sieht das konkret im Alltag aus?',
      ex('The policy sounds strict — [[what does that look like in practice]]?', 'Политика звучит строго — а как она выглядит на практике?', 'Die Richtlinie klingt streng — wie sieht das konkret im Alltag aus?'))
  ]);

  add('chunks', 'complain', [
    X('prompt-resolution', 'I expect a prompt resolution by [date].', 'C1', 'я рассчитываю на оперативное решение до [дата]', 'ich erwarte eine zeitnahe Lösung bis [Datum]',
      ex('This billing error is serious — [[I expect a prompt resolution by]] Friday.', 'Эта ошибка в счёте серьёзная — жду оперативного решения до пятницы.', 'Dieser Abrechnungsfehler ist gravierend — ich erwarte eine zeitnahe Lösung bis Freitag.')),
    X('cant-continue', 'This situation simply can’t continue.', 'B2', 'так дальше просто продолжаться не может', 'so kann das einfach nicht weitergehen',
      ex('Outages every Monday? [[This situation simply can’t continue]].', 'Сбои каждый понедельник? Так дальше продолжаться не может.', 'Jeden Montag Ausfälle? So kann das einfach nicht weitergehen.')),
    X('already-raised', 'I already raised [X] back on [date].', 'B2', 'я уже поднимал(а) вопрос о [X] ещё [дата]', 'ich habe bereits am [Datum] auf [X] hingewiesen',
      ex('[[I already raised]] the broken heating [[back on]] 4 November.', 'Я уже сообщал о сломанном отоплении ещё 4 ноября.', 'Ich habe bereits am 4. November auf die defekte Heizung hingewiesen.')),
    X('ask-full-refund', 'I must ask for a full refund.', 'B2', 'я вынужден(а) просить полный возврат средств', 'ich muss um vollständige Rückerstattung bitten',
      ex('The service was down all week, so [[I must ask for a full refund]].', 'Сервис не работал всю неделю, поэтому я прошу полный возврат.', 'Der Dienst war die ganze Woche offline, daher bitte ich um vollständige Erstattung.'))
  ]);

  add('chunks', 'problem', [
    X('fault-with', 'There appears to be a fault with [X].', 'B2', 'похоже, возникла неисправность в [X]', 'es scheint eine Störung bei [X] zu geben',
      ex('[[There appears to be a fault with]] the card reader at reception.', 'Похоже, неисправен считыватель карт на ресепшене.', 'Es scheint eine Störung am Kartenleser am Empfang zu geben.')),
    X('soon-as-run', 'As soon as I run [X], the process aborts.', 'B2', 'как только я запускаю [X], процесс обрывается', 'sobald ich [X] ausführe, bricht der Vorgang ab',
      ex('[[As soon as I run]] the backup script, [[the process aborts]].', 'Как только запускаю скрипт бэкапа, процесс обрывается.', 'Sobald ich das Backup-Skript starte, bricht der Vorgang ab.')),
    X('narrowed-down', 'We’ve narrowed down the root cause to [X].', 'C1', 'мы сузили первопричину до [X]', 'wir konnten die Ursache auf [X] eingrenzen',
      ex('[[We’ve narrowed down the root cause to]] an expired TLS certificate.', 'Мы сузили первопричину до просроченного TLS-сертификата.', 'Wir konnten die Ursache auf ein abgelaufenes TLS-Zertifikat eingrenzen.')),
    X('error-msg-says', 'The error message says: [X].', 'B1', 'сообщение об ошибке гласит: [X]', 'die Fehlermeldung lautet: [X]',
      ex('[[The error message says]]: “Connection timed out”.', 'Сообщение об ошибке гласит: «Время подключения истекло».', 'Die Fehlermeldung lautet: „Zeitüberschreitung der Verbindung“.'))
  ]);

  add('chunks', 'appointments', [
    X('push-back-hour', 'Can we push the meeting back an hour?', 'B1', 'можем сдвинуть встречу на час позже?', 'können wir das Meeting um eine Stunde nach hinten schieben?',
      ex('I’m stuck in traffic — [[can we push the meeting back an hour]]?', 'Я застрял в пробке — можем перенести встречу на час позже?', 'Ich stecke im Stau — können wir das Meeting um eine Stunde schieben?')),
    X('alternative-slot', 'Which alternative slot would suit you?', 'B2', 'какой другой временной слот вам бы подошёл?', 'welcher Ersatztermin würde Ihnen passen?',
      ex('Tuesday morning is booked — [[which alternative slot would suit you]]?', 'Утро вторника занято — какой другой слот вам подойдёт?', 'Dienstagmorgen ist belegt — welcher Ersatztermin würde Ihnen passen?')),
    X('cancel-meeting', 'I’m sorry, I have to cancel our meeting on [day].', 'B1', 'извините, мне приходится отменить нашу встречу в [день]', 'es tut mir leid, ich muss unseren Termin am [Tag] absagen',
      ex('[[I’m sorry, I have to cancel our meeting on]] Thursday due to illness.', 'Извините, мне приходится отменить встречу в четверг из-за болезни.', 'Es tut mir leid, ich muss unseren Termin am Donnerstag krankheitsbedingt absagen.')),
    X('move-next-week', 'Could we move this to next week?', 'B1', 'можем перенести это на следующую неделю?', 'könnten wir das auf nächste Woche verschieben?',
      ex('Everyone is away on Friday — [[could we move this to next week]]?', 'В пятницу все в отъезде — можем перенести на следующую неделю?', 'Am Freitag sind alle weg — könnten wir das auf nächste Woche legen?'))
  ]);

  add('chunks', 'phone', [
    X('who-is-calling-may', 'May I ask who’s calling?', 'B2', 'могу я спросить, кто звонит?', 'wen darf ich bitte melden?',
      ex('Certainly, let me transfer you — [[may I ask who’s calling]]?', 'Конечно, сейчас переведу — могу я узнать, кто звонит?', 'Gern, ich verbinde Sie — wen darf ich bitte melden?')),
    X('give-call-back', 'Could [Name] give me a call back?', 'B1', 'мог(ла) бы [Имя] мне перезвонить?', 'könnte [Name] mich zurückrufen?',
      ex('If she’s in a meeting, [[could Anna give me a call back]] after four?', 'Если она на встрече, могла бы Анна перезвонить мне после четырёх?', 'Wenn sie in einem Gespräch ist, könnte Anna mich nach vier zurückrufen?')),
    X('line-breaking-up', 'The line is breaking up — I’ll call right back.', 'B1', 'связь прерывается — я сейчас перезвоню', 'die Verbindung bricht ab — ich rufe gleich wieder an',
      ex('Wait, [[the line is breaking up — I’ll call right back]].', 'Подожди, связь пропадает — сейчас перезвоню.', 'Moment, die Verbindung bricht ab — ich rufe gleich wieder an.')),
    X('reachable-until', 'I’m reachable on this number until [time].', 'B2', 'я на связи по этому номеру до [время]', 'ich bin bis [Uhrzeit] unter dieser Nummer erreichbar',
      ex('[[I’m reachable on this number until]] five o’clock today.', 'Сегодня я на связи по этому номеру до пяти часов.', 'Ich bin heute bis siebzehn Uhr unter dieser Nummer erreichbar.'))
  ]);

  add('chunks', 'email', [
    X('feel-free-ask', 'Should you have any questions, feel free to ask.', 'B2', 'если возникнут вопросы, смело обращайтесь', 'bei Rückfragen stehe ich Ihnen gerne zur Verfügung',
      ex('[[Should you have any questions, feel free to ask]]. Kind regards,', 'Если появятся вопросы, обращайтесь. С уважением,', 'Bei Rückfragen melden Sie sich gerne. Mit freundlichen Grüßen')),
    X('thank-cooperation', 'Thank you in advance for your cooperation.', 'B2', 'заранее благодарю за сотрудничество / содействие', 'vielen Dank im Voraus für Ihre Unterstützung',
      ex('[[Thank you in advance for your cooperation]] in completing this form.', 'Заранее благодарю за содействие в заполнении этой формы.', 'Vielen Dank im Voraus für Ihre Unterstützung beim Ausfüllen.')),
    X('appreciate-update', 'I would appreciate an update by [date].', 'C1', 'буду признателен(на) за информацию о статусе до [дата]', 'über eine Rückmeldung bis [Datum] wäre ich dankbar',
      ex('[[I would appreciate an update by]] Wednesday afternoon.', 'Буду признателен за статус к середине дня в среду.', 'Über eine Rückmeldung bis Mittwochnachmittag wäre ich dankbar.')),
    X('files-enclosed', 'Please find the requested files enclosed.', 'C1', 'во вложении направляю запрошенные файлы', 'anbei erhalten Sie die gewünschten Unterlagen',
      ex('As agreed by phone, [[please find the requested files enclosed]].', 'Как мы договорились по телефону, направляю запрошенные файлы во вложении.', 'Wie telefonisch vereinbart, erhalten Sie anbei die gewünschten Unterlagen.'))
  ]);

  add('chunks', 'smalltalk', [
    X('glad-its-friday', 'Glad it’s Friday!', 'A2', 'наконец-то пятница!', 'endlich Freitag!',
      ex('[[Glad it’s Friday]]! Any relaxing plans tonight?', 'Наконец пятница! Есть планы отдохнуть сегодня вечером?', 'Endlich Freitag! Hast du heute Abend entspannte Pläne?'), null, 'informal'),
    X('grabbing-coffee', 'I’m grabbing a coffee — fancy one?', 'B1', 'я за кофе — тебе взять?', 'ich hole mir einen Kaffee — möchtest du auch einen?',
      ex('Quick break? [[I’m grabbing a coffee — fancy one]]?', 'Короткий перерыв? Я за кофе — будешь?', 'Kurze Pause? Ich hole mir einen Kaffee — möchtest du auch einen?'), null, 'informal'),
    X('where-holiday', 'Where did you go on holiday?', 'A2', 'куда ты ездил(а) в отпуск?', 'wo warst du im Urlaub?',
      ex('Great tan! [[Where did you go on holiday]]?', 'Отличный загар! Куда ездил в отпуск?', 'Tolle Bräune! Wo warst du im Urlaub?'), null, 'informal'),
    X('busy-week', 'Has it been a busy week?', 'B1', 'неделя выдалась напряжённой?', 'war es eine stressige Woche?',
      ex('[[Has it been a busy week]] for your team too?', 'У вашей команды тоже была загруженная неделя?', 'War es bei deinem Team auch eine stressige Woche?'))
  ]);

  add('chunks', 'it-standup', [
    X('pull-from-backlog', 'Next I’ll pull [X] from the backlog.', 'B2', 'дальше возьму [X] из бэклога', 'als Nächstes übernehme ich [X] aus dem Backlog',
      ex('Once PR #42 merges, [[next I’ll pull]] the alert cleanup [[from the backlog]].', 'Когда смержим PR #42, возьму из бэклога задачу по очистке алертов.', 'Sobald PR #42 gemergt ist, übernehme ich die Alert-Bereinigung aus dem Backlog.')),
    X('ticket-in-review', 'That ticket is in review now.', 'B1', 'этот тикет сейчас на ревью', 'das Ticket liegt jetzt im Review',
      ex('[[That ticket is in review now]] — waiting for one more approval.', 'Этот тикет сейчас в ревью — жду ещё одного апрува.', 'Das Ticket liegt jetzt im Review — warte noch auf eine Freigabe.')),
    X('main-focus-today', 'Today my main focus is [X].', 'B1', 'сегодня мой главный фокус — [X]', 'heute liegt mein Fokus auf [X]',
      ex('[[Today my main focus is]] finishing the firewall audit.', 'Сегодня мой главный фокус — завершение аудита файрвола.', 'Heute liegt mein Fokus auf dem Abschluss des Firewall-Audits.')),
    X('no-blockers', 'No blockers on my end.', 'B1', 'с моей стороны блокеров нет', 'auf meiner Seite gibt es keine Blocker',
      ex('Everything is on track, [[no blockers on my end]].', 'Всё идёт по плану, с моей стороны блокеров нет.', 'Alles läuft nach Plan, auf meiner Seite keine Blocker.'))
  ]);

  add('chunks', 'it-bug', [
    X('breaks-under', 'It only breaks under [X].', 'B2', 'ломается только при [X]', 'es schlägt nur unter [X] fehl',
      ex('[[It only breaks under]] high load or slow networks.', 'Оно падает только под высокой нагрузкой или при медленной сети.', 'Es schlägt nur unter hoher Last oder bei langsamer Verbindung fehl.')),
    X('added-repro-steps', 'I’ve added the steps to reproduce to the ticket.', 'B2', 'я добавил(а) шаги воспроизведения в тикет', 'ich habe die Schritte zum Reproduzieren ins Ticket geschrieben',
      ex('[[I’ve added the steps to reproduce to the ticket]] along with the logs.', 'Я добавил шаги воспроизведения в тикет вместе с логами.', 'Ich habe die Schritte zum Reproduzieren samt Logs ins Ticket geschrieben.')),
    X('rollback-restored', 'Rolling back restored stability.', 'C1', 'откат версии вернул стабильность', 'nach dem Rollback lief alles wieder stabil',
      ex('We reverted the deploy, and [[rolling back restored stability]].', 'Мы откатили деплой, и откат восстановил стабильную работу.', 'Wir haben das Deploy rückgängig gemacht, und der Rollback stellte die Stabilität wieder her.')),
    X('logs-show-where', 'The logs show right where it fails.', 'B1', 'в логах чётко видно, в каком месте падает', 'in den Logs sieht man genau, wo es abbricht',
      ex('Look at line 42: [[the logs show right where it fails]].', 'Глянь на 42-ю строку: в логах сразу видно, где падает.', 'Schau in Zeile 42: In den Logs sieht man genau, wo es abbricht.'))
  ]);

  add('chunks', 'it-help', [
    X('cant-get-past', 'I can’t get past this on my own.', 'B2', 'я сам(а) не могу сдвинуться дальше в этом месте', 'ich komme hier allein nicht weiter',
      ex('I’ve read the docs twice, and [[I can’t get past this on my own]].', 'Я дважды перечитал доку, и сам дальше не продвинусь.', 'Ich habe die Doku zweimal gelesen und komme hier allein nicht weiter.')),
    X('pair-debugging', 'Got a minute for quick pair debugging?', 'B2', 'найдётся минутка на быстрый совместный дебаг?', 'hättest du kurz Zeit für ein Pair-Debugging?',
      ex('[[Got a minute for quick pair debugging]]? Fresh eyes would help.', 'Есть минутка на быстрый парный дебаг? Свежий взгляд очень помог бы.', 'Hättest du kurz Zeit für ein Pair-Debugging? Ein frischer Blick wäre super.'), null, 'informal'),
    X('explain-why-fails', 'Can you explain why [X] fails here?', 'B1', 'можешь объяснить, почему [X] здесь падает?', 'kannst du erklären, warum [X] hier fehlschlägt?',
      ex('[[Can you explain why]] the token check [[fails here]]?', 'Можешь объяснить, почему проверка токена здесь падает?', 'Kannst du erklären, warum die Token-Prüfung hier fehlschlägt?')),
    X('tried-no-luck', 'I’ve tried [X], with no luck.', 'B1', 'я пробовал(а) [X], но безуспешно', 'ich habe schon [X] probiert, ohne Erfolg',
      ex('[[I’ve tried]] restarting the container, [[with no luck]].', 'Я уже пробовал перезапустить контейнер, но безуспешно.', 'Ich habe schon probiert, den Container neu zu starten — ohne Erfolg.'))
  ]);

  add('chunks', 'it-meeting', [
    X('see-risk-with', 'I still see a risk with [X].', 'B2', 'я всё ещё вижу риск в [X]', 'ich sehe noch ein Risiko bei [X]',
      ex('[[I still see a risk with]] storing keys on the same host.', 'Я всё ещё вижу риск в хранении ключей на том же хосте.', 'Ich sehe noch ein Risiko bei der Speicherung von Schlüsseln auf demselben Host.')),
    X('what-alternatives', 'What alternatives should we look at?', 'B2', 'какие альтернативы стоит рассмотреть?', 'welche Alternativen sollten wir prüfen?',
      ex('Before buying that tool, [[what alternatives should we look at]]?', 'Прежде чем покупать этот инструмент, какие альтернативы стоит рассмотреть?', 'Bevor wir das Tool kaufen: Welche Alternativen sollten wir prüfen?')),
    X('weigh-pros-cons', 'Let’s weigh up the pros and cons.', 'B2', 'давайте взвесим плюсы и минусы', 'lassen Sie uns die Vor- und Nachteile abwägen',
      ex('[[Let’s weigh up the pros and cons]] of moving to a managed DB.', 'Давайте взвесим плюсы и минусы перехода на управляемую БД.', 'Wägen wir die Vor- und Nachteile einer verwalteten Datenbank ab.')),
    X('factor-in', 'Before we decide, we should factor in [X].', 'C1', 'прежде чем решать, нам стоит учесть [X]', 'bevor wir entscheiden, sollten wir [X] einkalkulieren',
      ex('[[Before we decide, we should factor in]] the ongoing maintenance cost.', 'Прежде чем решать, нужно заложить в расчёт стоимость дальнейшей поддержки.', 'Bevor wir entscheiden, sollten wir die laufenden Wartungskosten einkalkulieren.'))
  ]);
})();

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.register({
  "tab": "chunks",
  "topic": "opinion",
  "items": [
    {
      "id": "en:content26:ch-judge",
      "t": "As far as I can judge, [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Насколько я могу судить, [X].",
      "de": "Soweit ich das beurteilen kann, [X].",
      "examples": [
        {
          "t": "[[As far as I can judge]], the plan is realistic.",
          "ru": "Насколько я могу судить, план реалистичен.",
          "de": "Soweit ich das beurteilen kann, ist der Plan realistisch."
        }
      ]
    },
    {
      "id": "en:content26:ch-rule-out",
      "t": "I wouldn’t rule out [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "C1",
      "register": "neutral",
      "ru": "Я бы не стал(а) исключать [X].",
      "de": "Ich würde [X] nicht ausschließen.",
      "examples": [
        {
          "t": "[[I wouldn’t rule out]] a delay.",
          "ru": "Я бы не стал исключать задержку.",
          "de": "Ich würde eine Verzögerung nicht ausschließen."
        }
      ],
      "note": {
        "ru": "Осторожное допущение возможности, а не прогноз.",
        "de": "Eine vorsichtig formulierte Möglichkeit, keine Vorhersage."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "agree",
  "items": [
    {
      "id": "en:content26:ch-hard-to-argue",
      "t": "It’s hard to argue with that.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "С этим трудно поспорить.",
      "de": "Dagegen lässt sich schwer etwas einwenden.",
      "examples": [
        {
          "t": "[[It’s hard to argue with that]], but costs matter too.",
          "ru": "С этим трудно поспорить, но расходы тоже важны.",
          "de": "Dagegen lässt sich schwer etwas einwenden, aber die Kosten sind auch wichtig."
        }
      ]
    },
    {
      "id": "en:content26:ch-aim-method",
      "t": "I agree with the aim, but not the method.",
      "pos": "chunk",
      "type": "chunk",
      "level": "C1",
      "register": "neutral",
      "ru": "Я согласен (согласна) с целью, но не с методом.",
      "de": "Ich stimme dem Ziel zu, aber nicht der Methode.",
      "examples": [
        {
          "t": "[[I agree with the aim, but not the method]]. Let’s consider another approach.",
          "ru": "Я согласен с целью, но не с методом. Давайте рассмотрим другой подход.",
          "de": "Ich stimme dem Ziel zu, aber nicht der Methode. Betrachten wir einen anderen Ansatz."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "clarify",
  "items": [
    {
      "id": "en:content26:ch-talking-about",
      "t": "Are we talking about [X] or [Y]?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "ru": "Речь идёт о [X] или о [Y]?",
      "de": "Geht es um [X] oder um [Y]?",
      "examples": [
        {
          "t": "[[Are we talking about]] the price [[or]] the deadlines?",
          "ru": "Речь идёт о цене или о сроках?",
          "de": "Geht es um den Preis oder um die Termine?"
        }
      ]
    },
    {
      "id": "en:content26:ch-include",
      "t": "What exactly do you include in [X]?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Что именно вы относите к [X]?",
      "de": "Was genau zählen Sie zu [X]?",
      "examples": [
        {
          "t": "[[What exactly do you include in]] additional costs?",
          "ru": "Что именно вы относите к дополнительным расходам?",
          "de": "Was genau zählen Sie zu den zusätzlichen Kosten?"
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "complain",
  "items": [
    {
      "id": "en:content26:ch-resolution",
      "t": "Please explain how you intend to resolve this.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "ru": "Прошу сообщить, как вы планируете решить эту проблему.",
      "de": "Bitte erläutern Sie, wie Sie dieses Problem lösen wollen.",
      "examples": [
        {
          "t": "[[Please explain how you intend to resolve this]]. The heating has been off for three days.",
          "ru": "Прошу сообщить, как вы планируете решить эту проблему. Отопления нет уже третий день.",
          "de": "Bitte erläutern Sie, wie Sie dieses Problem lösen wollen. Die Heizung ist seit drei Tagen ausgefallen."
        }
      ]
    },
    {
      "id": "en:content26:ch-deadline-passed",
      "t": "Unfortunately, the agreed deadline has passed.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "ru": "К сожалению, согласованный срок уже истёк.",
      "de": "Leider ist die vereinbarte Frist bereits abgelaufen.",
      "examples": [
        {
          "t": "[[Unfortunately, the agreed deadline has passed]], and I have not received a reply.",
          "ru": "К сожалению, согласованный срок уже истёк, а ответа я не получил.",
          "de": "Leider ist die vereinbarte Frist bereits abgelaufen, und ich habe keine Antwort erhalten."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "problem",
  "items": [
    {
      "id": "en:content26:ch-even-though",
      "t": "I can’t [X], even though [Y].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "ru": "Не получается [X], хотя [Y].",
      "de": "Ich kann [X] nicht, obwohl [Y].",
      "examples": [
        {
          "t": "[[I can’t]] log in, [[even though]] the password is correct.",
          "ru": "Не получается войти, хотя пароль верный.",
          "de": "Ich kann mich nicht anmelden, obwohl das Passwort richtig ist."
        }
      ]
    },
    {
      "id": "en:content26:ch-only-affects",
      "t": "The issue only affects [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Проблема затрагивает только [X].",
      "de": "Das Problem betrifft nur [X].",
      "examples": [
        {
          "t": "[[The issue only affects]] the mobile version.",
          "ru": "Проблема затрагивает только мобильную версию.",
          "de": "Das Problem betrifft nur die mobile Version."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "appointments",
  "items": [
    {
      "id": "en:content26:ch-earlier",
      "t": "Could we bring the meeting forward by an hour?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Можно ли сдвинуть встречу на час раньше?",
      "de": "Könnten wir das Treffen um eine Stunde vorverlegen?",
      "examples": [
        {
          "t": "[[Could we bring the meeting forward by an hour]]? I need to catch a train.",
          "ru": "Можно ли сдвинуть встречу на час раньше? Мне нужно успеть на поезд.",
          "de": "Könnten wir das Treffen um eine Stunde vorverlegen? Ich muss einen Zug erreichen."
        }
      ],
      "note": {
        "ru": "Bring forward здесь означает перенести раньше: с 15:00 на 14:00. Лучше сразу назвать новое время.",
        "de": "Bring forward bedeutet hier vorverlegen: aus 15 Uhr wird 14 Uhr. Die neue Uhrzeit ausdrücklich nennen."
      }
    },
    {
      "id": "en:content26:ch-local-time",
      "t": "Please confirm the local time of the meeting.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Подтвердите, пожалуйста, местное время встречи.",
      "de": "Bitte bestätigen Sie die Ortszeit des Treffens.",
      "examples": [
        {
          "t": "[[Please confirm the local time of the meeting]]: we are in different time zones.",
          "ru": "Подтвердите, пожалуйста, местное время встречи: у нас разные часовые пояса.",
          "de": "Bitte bestätigen Sie die Ortszeit des Treffens: Wir sind in verschiedenen Zeitzonen."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "phone",
  "items": [
    {
      "id": "en:content26:ch-prefer-email",
      "t": "I’d prefer it if you emailed me.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Мне удобнее, если вы напишете по электронной почте.",
      "de": "Mir wäre es lieber, wenn Sie mir eine E-Mail schreiben würden.",
      "examples": [
        {
          "t": "[[I’d prefer it if you emailed me]]. I can then attach the documents.",
          "ru": "Мне удобнее, если вы напишете по электронной почте. Я смогу приложить документы.",
          "de": "Mir wäre es lieber, wenn Sie mir eine E-Mail schreiben würden. Dann kann ich die Dokumente anhängen."
        }
      ]
    },
    {
      "id": "en:content26:ch-stay-line",
      "t": "Please stay on the line.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "ru": "Оставайтесь, пожалуйста, на линии.",
      "de": "Bitte bleiben Sie in der Leitung.",
      "examples": [
        {
          "t": "[[Please stay on the line]] while I check the information.",
          "ru": "Оставайтесь, пожалуйста, на линии, я уточню информацию.",
          "de": "Bitte bleiben Sie in der Leitung, während ich die Information prüfe."
        }
      ],
      "note": {
        "ru": "Вежливая служебная фраза: собеседника просят не класть трубку.",
        "de": "Höfliche Serviceformel: Der Anrufer soll nicht auflegen."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "email",
  "items": [
    {
      "id": "en:content26:ch-following",
      "t": "Following our conversation, I’m sending [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "ru": "В продолжение нашего разговора направляю [X].",
      "de": "Im Anschluss an unser Gespräch sende ich Ihnen [X].",
      "examples": [
        {
          "t": "[[Following our conversation, I’m sending]] the updated estimate.",
          "ru": "В продолжение нашего разговора направляю обновлённую смету.",
          "de": "Im Anschluss an unser Gespräch sende ich Ihnen den aktualisierten Kostenvoranschlag."
        }
      ]
    },
    {
      "id": "en:content26:ch-please-note",
      "t": "Please note that [X].",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "formal",
      "ru": "Прошу принять к сведению, что [X].",
      "de": "Bitte beachten Sie, dass [X].",
      "examples": [
        {
          "t": "[[Please note that]] the submission deadline has been extended.",
          "ru": "Прошу принять к сведению, что срок подачи продлён.",
          "de": "Bitte beachten Sie, dass die Einreichungsfrist verlängert wurde."
        }
      ],
      "note": {
        "ru": "Формальное уведомление, а не просьба записывать.",
        "de": "Formeller Hinweis, keine Aufforderung zum Mitschreiben."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "smalltalk",
  "items": [
    {
      "id": "en:content26:ch-settling-in",
      "t": "How are you settling in?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "informal",
      "ru": "Как ты здесь осваиваешься?",
      "de": "Wie lebst du dich hier ein?",
      "examples": [
        {
          "t": "[[How are you settling in]]? Have you met the neighbours yet?",
          "ru": "Как ты здесь осваиваешься? Уже познакомился с соседями?",
          "de": "Wie lebst du dich hier ein? Hast du die Nachbarn schon kennengelernt?"
        }
      ]
    },
    {
      "id": "en:content26:ch-lined-up",
      "t": "Got anything interesting lined up?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "informal",
      "ru": "Есть что-нибудь интересное на примете?",
      "de": "Hast du etwas Interessantes vor?",
      "examples": [
        {
          "t": "[[Got anything interesting lined up]] for the weekend?",
          "ru": "На выходные есть что-нибудь интересное на примете?",
          "de": "Hast du am Wochenende etwas Interessantes vor?"
        }
      ],
      "note": {
        "ru": "Разговорное сокращение Have you got …? Речь о планах, а не об очереди.",
        "de": "Informelle Kurzform von Have you got …? Gemeint sind Pläne, keine Warteschlange."
      }
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it-standup",
  "items": [
    {
      "id": "en:content26:ch-waiting-confirmation",
      "t": "I’m waiting for confirmation from [X] before I can continue.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Жду подтверждения от [X], чтобы продолжить.",
      "de": "Ich warte auf die Bestätigung von [X], bevor ich weitermachen kann.",
      "examples": [
        {
          "t": "[[I’m waiting for confirmation from]] the client [[before I can continue]].",
          "ru": "Жду подтверждения от заказчика, чтобы продолжить.",
          "de": "Ich warte auf die Bestätigung des Kunden, bevor ich weitermachen kann."
        }
      ]
    },
    {
      "id": "en:content26:ch-end-day",
      "t": "I expect to finish [X] by the end of the day.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "К концу дня рассчитываю завершить [X].",
      "de": "Ich rechne damit, [X] bis Tagesende abzuschließen.",
      "examples": [
        {
          "t": "[[I expect to finish]] the review [[by the end of the day]].",
          "ru": "К концу дня рассчитываю завершить проверку.",
          "de": "Ich rechne damit, die Prüfung bis Tagesende abzuschließen."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it-bug",
  "items": [
    {
      "id": "en:content26:ch-no-repro",
      "t": "I can’t reproduce the issue with this data.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "С этими данными ошибка не воспроизводится.",
      "de": "Mit diesen Daten kann ich den Fehler nicht reproduzieren.",
      "examples": [
        {
          "t": "[[I can’t reproduce the issue with this data]]. I need another example.",
          "ru": "С этими данными ошибка не воспроизводится. Нужен другой пример.",
          "de": "Mit diesen Daten kann ich den Fehler nicht reproduzieren. Ich brauche ein anderes Beispiel."
        }
      ]
    },
    {
      "id": "en:content26:ch-previous-version",
      "t": "This didn’t happen in the previous version.",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "neutral",
      "ru": "На предыдущей версии этого не было.",
      "de": "In der vorherigen Version ist das nicht passiert.",
      "examples": [
        {
          "t": "[[This didn’t happen in the previous version]]: the search was fast.",
          "ru": "На предыдущей версии этого не было: поиск работал быстро.",
          "de": "In der vorherigen Version ist das nicht passiert: Die Suche war schnell."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it-help",
  "items": [
    {
      "id": "en:content26:ch-check-assumption",
      "t": "Could you check my assumption?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "informal",
      "ru": "Можешь проверить моё предположение?",
      "de": "Könntest du meine Annahme überprüfen?",
      "examples": [
        {
          "t": "[[Could you check my assumption]]? I think the cache is the problem.",
          "ru": "Можешь проверить моё предположение? Кажется, проблема в кэше.",
          "de": "Könntest du meine Annahme überprüfen? Ich glaube, das Problem liegt im Cache."
        }
      ]
    },
    {
      "id": "en:content26:ch-where-start",
      "t": "Could you show me where to start?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B1",
      "register": "informal",
      "ru": "Покажи, пожалуйста, с чего начать.",
      "de": "Könntest du mir zeigen, wo ich anfangen soll?",
      "examples": [
        {
          "t": "[[Could you show me where to start]]? I haven’t worked with this system before.",
          "ru": "Покажи, пожалуйста, с чего начать: я ещё не работал с этой системой.",
          "de": "Könntest du mir zeigen, wo ich anfangen soll? Ich habe noch nicht mit diesem System gearbeitet."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it-meeting",
  "items": [
    {
      "id": "en:content26:ch-criteria",
      "t": "I suggest we agree on the criteria first.",
      "pos": "chunk",
      "type": "chunk",
      "level": "C1",
      "register": "neutral",
      "ru": "Предлагаю сначала согласовать критерии.",
      "de": "Ich schlage vor, dass wir zuerst die Kriterien abstimmen.",
      "examples": [
        {
          "t": "[[I suggest we agree on the criteria first]] and then compare the options.",
          "ru": "Предлагаю сначала согласовать критерии, а потом сравнивать варианты.",
          "de": "Ich schlage vor, dass wir zuerst die Kriterien abstimmen und dann die Optionen vergleichen."
        }
      ]
    },
    {
      "id": "en:content26:ch-responsibility",
      "t": "Who will take responsibility for [X]?",
      "pos": "chunk",
      "type": "chunk",
      "level": "B2",
      "register": "neutral",
      "ru": "Кто возьмёт на себя ответственность за [X]?",
      "de": "Wer übernimmt die Verantwortung für [X]?",
      "examples": [
        {
          "t": "[[Who will take responsibility for]] checking the result?",
          "ru": "Кто возьмёт на себя ответственность за проверку результата?",
          "de": "Wer übernimmt die Verantwortung für die Überprüfung des Ergebnisses?"
        }
      ]
    }
  ]
});

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "chunks",
  "topic": "appointments",
  "items": [
    {
      "id": "en:telc26:ch-rechtzeitig-bescheid",
      "t": "Please let us know in good time.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 10,
          "headword": "rechtzeitig Bescheid geben",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Bitte geben Sie uns rechtzeitig Bescheid.",
      "ru": "Пожалуйста, сообщите нам заранее.",
      "examples": [
        {
          "t": "If you cannot attend the appointment, [[please let us know in good time]].",
          "de": "Falls Sie den Termin nicht wahrnehmen können, geben Sie uns bitte rechtzeitig Bescheid.",
          "ru": "Если вы не сможете прийти на встречу, пожалуйста, сообщите нам заранее."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "email",
  "items": [
    {
      "id": "en:telc26:ch-rechnung-begleichen",
      "t": "I will settle the invoice by [date].",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 27,
          "headword": "eine Rechnung begleichen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Ich werde die Rechnung bis [Datum] begleichen.",
      "ru": "Я оплачу счёт до [дата].",
      "examples": [
        {
          "t": "[[I will settle the invoice by]] Friday.",
          "de": "Ich werde die Rechnung bis Freitag begleichen.",
          "ru": "Я оплачу счёт до пятницы."
        }
      ]
    },
    {
      "id": "en:telc26:ch-schriftform",
      "t": "[X] must be in writing.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 35,
          "headword": "etwas bedarf der Schriftform",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "[X] bedarf der Schriftform.",
      "ru": "Для [X] требуется письменная форма.",
      "examples": [
        {
          "t": "According to the draft, an amendment [[must be in writing]].",
          "de": "Laut Entwurf bedarf eine Änderung der Vereinbarung der Schriftform.",
          "ru": "Согласно проекту, для изменения соглашения требуется письменная форма."
        }
      ],
      "note": {
        "de": "Formelle Konstruktion: bedürfen + Genitiv. Im Beispiel wird eine Vorgabe aus einem Vertragsentwurf wiedergegeben.",
        "ru": "Формальная конструкция bedürfen + Genitiv: der Schriftform. Пример передаёт условие из проекта документа, а не универсальное юридическое правило."
      }
    },
    {
      "id": "en:telc26:ch-ab-werk",
      "t": "ex works",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 25,
          "headword": "ab Werk",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "ab Werk",
      "ru": "с завода",
      "examples": [
        {
          "t": "The quote is [[ex works]] at the supplier’s premises.",
          "de": "Das Angebot gilt ab Werk des Lieferanten.",
          "ru": "В предложении указана отгрузка с завода поставщика."
        }
      ],
      "note": {
        "de": "Kaufmännische Lieferangabe. Die konkreten Kosten und Pflichten ergeben sich aus den vereinbarten Bedingungen.",
        "ru": "Коммерческая формулировка для предложения об отгрузке с предприятия поставщика. Точное распределение расходов и обязанностей определяется конкретными условиями."
      }
    },
    {
      "id": "en:telc26:ch-nachfrage",
      "t": "On request, we can send you [X].",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 12,
          "headword": "auf Nachfrage",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Auf Nachfrage senden wir Ihnen [X].",
      "ru": "По запросу мы можем направить вам [X].",
      "examples": [
        {
          "t": "[[On request, we can send you]] the complete datasheet.",
          "de": "Auf Nachfrage senden wir Ihnen das vollständige Datenblatt.",
          "ru": "По запросу мы можем направить вам полное техническое описание."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it-meeting",
  "items": [
    {
      "id": "en:telc26:ch-gegenvorschlag",
      "t": "I’d like to make a counterproposal.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 21,
          "headword": "einen Gegenvorschlag machen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Ich möchte einen Gegenvorschlag machen.",
      "ru": "Я хотел(а) бы предложить встречный вариант.",
      "examples": [
        {
          "t": "[[I’d like to make a counterproposal]]: let’s test a smaller solution first.",
          "de": "Ich möchte einen Gegenvorschlag machen: Wir testen zuerst eine kleinere Lösung.",
          "ru": "Я хотел бы предложить встречный вариант: сначала проверим более простое решение."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "complain",
  "items": [
    {
      "id": "en:telc26:ch-verstaendnis",
      "t": "We ask for your understanding.",
      "type": "chunk",
      "pos": "chunk",
      "level": "B2",
      "register": "formal",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 29,
          "headword": "um Verständnis bitten",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Wir bitten um Ihr Verständnis.",
      "ru": "Просим отнестись с пониманием.",
      "examples": [
        {
          "t": "The delivery is delayed by one day. [[We ask for your understanding]].",
          "de": "Die Lieferung verzögert sich um einen Tag. Wir bitten um Ihr Verständnis.",
          "ru": "Доставка задерживается на один день. Просим отнестись с пониманием."
        }
      ]
    }
  ]
});

GT.packs.en.byId["en:care:n:main"].examples.push({
  "t": "The patients’ [[care]] is well organised.",
  "de": "Die Betreuung der Patienten ist gut organisiert.",
  "ru": "Уход за пациентами хорошо организован.",
  "sense": {
    "ru": "уход",
    "de": "die Betreuung"
  }
});

(GT.packs.en.byId["en:care:n:main"].sourceRefs || (GT.packs.en.byId["en:care:n:main"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 1,
  "headword": "Betreuung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.en.byId["en:it4:salary-expectation"].examples.push({
  "t": "During the interview, she explained her [[salary expectation]].",
  "de": "Im Gespräch erklärte sie ihre Gehaltsvorstellung.",
  "ru": "На собеседовании она объяснила свои зарплатные ожидания.",
  "sense": {
    "ru": "зарплатные ожидания",
    "de": "die Gehaltsvorstellung"
  }
});

(GT.packs.en.byId["en:it4:salary-expectation"].sourceRefs || (GT.packs.en.byId["en:it4:salary-expectation"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 8,
  "headword": "Gehaltsvorstellung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.en.byId["en:it4:salary-expectation"].plural = "salary expectations";

GT.packs.en.byId["en:maintenance:n:main"].examples.push({
  "t": "The machine is unavailable during [[maintenance]].",
  "de": "Die Maschine ist während der Wartung nicht verfügbar.",
  "ru": "Во время технического обслуживания станок недоступен.",
  "sense": {
    "ru": "техническое обслуживание",
    "de": "die Wartung"
  }
});

(GT.packs.en.byId["en:maintenance:n:main"].sourceRefs || (GT.packs.en.byId["en:maintenance:n:main"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 23,
  "headword": "Wartung",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.en.byId["en:it2:core-hours"].examples.push({
  "t": "The [[core hours]] are shown in the team calendar.",
  "de": "Die Kernzeit wird im Teamkalender angezeigt.",
  "ru": "Обязательные часы присутствия указаны в календаре команды.",
  "sense": {
    "ru": "обязательные часы присутствия",
    "de": "die Kernzeit"
  }
});

(GT.packs.en.byId["en:it2:core-hours"].sourceRefs || (GT.packs.en.byId["en:it2:core-hours"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 19,
  "headword": "Kernzeit",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.en.byId["en:request:n:main"].examples.push({
  "t": "He politely explained his [[request]] on the phone.",
  "de": "Er schilderte sein Anliegen höflich am Telefon.",
  "ru": "Он вежливо изложил свою просьбу по телефону.",
  "sense": {
    "ru": "просьба",
    "de": "das Anliegen"
  }
});

(GT.packs.en.byId["en:request:n:main"].sourceRefs || (GT.packs.en.byId["en:request:n:main"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 16,
  "headword": "Anliegen",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.en.byId["en:request:n:main"].plural = "requests";

GT.packs.en.byId["en:it2:agenda-item"].examples.push({
  "t": "The delivery problems are the first [[agenda item]].",
  "de": "Die Lieferprobleme sind der erste Tagesordnungspunkt.",
  "ru": "Проблемы с доставкой — первый пункт повестки дня.",
  "sense": {
    "ru": "пункт повестки дня",
    "de": "der Tagesordnungspunkt"
  }
});

(GT.packs.en.byId["en:it2:agenda-item"].sourceRefs || (GT.packs.en.byId["en:it2:agenda-item"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 30,
  "headword": "Tagesordnungspunkt",
  "selection": "telc-b2-2026-11-26"
});

GT.packs.en.byId["en:it2:agenda-item"].plural = "agenda items";

GT.packs.en.byId["en:agree:v:main"].examples.push({
  "t": "She [[agrees]] to the proposed schedule.",
  "de": "Sie stimmt dem vorgeschlagenen Zeitplan zu.",
  "ru": "Она соглашается с предложенным графиком.",
  "sense": {
    "ru": "соглашаться",
    "de": "zustimmen"
  }
});

(GT.packs.en.byId["en:agree:v:main"].sourceRefs || (GT.packs.en.byId["en:agree:v:main"].sourceRefs = [])).push({
  "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
  "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
  "page": 31,
  "headword": "zustimmen",
  "selection": "telc-b2-2026-11-26"
});

GT.addMember("en:care:n:main", "it", "med_clinical");

GT.addMember("en:telc26:lehrgang", "it", "career-paths");

GT.addMember("en:telc26:vorkenntnisse", "it", "career-paths");

GT.addMember("en:telc26:zulassung", "it", "career-paths");

GT.addMember("en:telc26:fachwortschatz", "it", "career-paths");

GT.addMember("en:it4:salary-expectation", "it", "fin_hr");

GT.addMember("en:telc26:arbeitsablauf", "it", "ops_trades");

GT.addMember("en:telc26:qualitaetssicherung", "it", "dev");

GT.addMember("en:telc26:richtlinie", "it", "security");

GT.addMember("en:telc26:datenblatt", "it", "ops_trades");

GT.addMember("en:maintenance:n:main", "it", "ops_trades");

GT.addMember("en:telc26:eilzuschlag", "it", "clients");

GT.addMember("en:telc26:nettopreis", "it", "clients");

GT.addMember("en:telc26:bruttopreis", "it", "clients");

GT.addMember("en:telc26:skonto", "it", "clients");

GT.addMember("en:telc26:vorauszahlung", "it", "clients");

GT.addMember("en:it2:core-hours", "it", "legal_labour");

GT.addMember("en:telc26:nebentaetigkeit", "it", "career-paths");

GT.addMember("en:telc26:buchungsbestaetigung", "it", "svc_hotel");

GT.addMember("en:telc26:fahrgemeinschaft", "it", "svc_hotel");

GT.addMember("en:telc26:handwerklich", "it", "career-paths");

GT.addMember("en:telc26:belastbar", "it", "career-paths");

GT.addMember("en:telc26:lernbereit", "it", "career-paths");

GT.addMember("en:telc26:fehlerhaft", "words", "digital-life");

GT.addMember("en:telc26:angemessen", "it", "work");

GT.addMember("en:telc26:absolvieren", "it", "career-paths");

GT.addMember("en:agree:v:main", "it", "work");

GT.addMember("en:telc26:verallgemeinern", "it", "presentations");

GT.addMember("en:telc26:bedingungen", "it", "clients");

GT.addMember("en:telc26:ch-rechtzeitig-bescheid", "it", "work");

GT.addMember("en:telc26:ch-rechnung-begleichen", "it", "fin_accounting");

GT.addMember("en:telc26:ch-schriftform", "it", "legal_contracts");

GT.addMember("en:telc26:ch-ab-werk", "it", "ops_logistics");

GT.addMember("en:telc26:ch-nachfrage", "it", "clients");

GT.addMember("en:telc26:ch-gegenvorschlag", "it", "work");

GT.addMember("en:telc26:ch-verstaendnis", "it", "clients");

GT.packs.en.byId["en:care:n:main"].note = {
  "de": "Unzählbar; take care of — sich kümmern um.\n\nIn dieser Bedeutung meist unzählbar.",
  "ru": "Неисчисляемое; take care of — заботиться.\n\nВ этом значении обычно неисчисляемое."
};

GT.packs.en.byId["en:maintenance:n:main"].note = {
  "de": "Der Wortstamm ändert sich; meist nicht zählbar. Scheduled maintenance — geplante Wartung.\n\nIn dieser Bedeutung meist unzählbar.",
  "ru": "Изменяется основа; обычно неисчисляемое. Scheduled maintenance — плановое обслуживание.\n\nВ этом значении обычно неисчисляемое."
};

GT.packs.en.byId["en:it2:core-hours"].note = {
  "de": "Immer Plural (anders als dt. Singular Kernarbeitszeit); Gleitzeit = flexitime.\n\nIn dieser Bedeutung meist unzählbar.",
  "ru": "Во множественном числе (в отличие от нем. ед. ч. Kernarbeitszeit); гибкий график — flexitime.\n\nВ этом значении обычно неисчисляемое."
};
