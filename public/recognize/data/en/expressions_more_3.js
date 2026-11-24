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
