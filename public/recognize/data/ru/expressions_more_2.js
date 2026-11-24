/* RUSSIAN · Expressions third batch: 10 idioms + 10 everyday phrases + 26 chunks (2 per function) = 46 cards.
 * Stress marked with "+" before the stressed vowel (never before ё). Checked against inventory for zero duplicates.
 * Glosses en / de. Original examples. */
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
    return { id: 'ru-ch2-' + id, topic: fn, topics: topics, t: t, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    I('kitayskaya-gramota', 'кит+айская гр+амота', 'B2', 'informal', 'it’s all Greek to me (completely incomprehensible)', 'böhmische Dörfer, ich verstehe nur Bahnhof',
      ex('В+ысшая матем+атика для мен+я — [[кит+айская гр+амота]].', 'Higher mathematics is all Greek to me.', 'Höhere Mathematik ist für mich ein Buch mit sieben Siegeln.'),
      ['Literally “Chinese writing”: something completely unintelligible.', 'Wörtlich „chinesische Schrift“: etwas völlig Unverständliches.']),
    I('ubits-dvuh-zaytsev', 'уб+ить двух з+айцев', 'B1', 'neutral', 'to kill two birds with one stone', 'zwei Fliegen mit einer Klappe schlagen',
      ex('Я по+еду в центр на велосип+еде — [[убь+ю двух з+айцев]]: и сп+ортом займ+усь, и пр+обок избеж+у.', 'I’ll cycle to the centre — kill two birds with one stone: get exercise and avoid traffic.', 'Ich fahre mit dem Rad ins Zentrum — so schlage ich zwei Fliegen mit einer Klappe.'),
      ['Russian “two hares”, German “two flies”, English “two birds”.', 'Russ. „zwei Hasen“, dt. „zwei Fliegen“, engl. „two birds“.']),
    I('popast-v-tochku', 'поп+асть в т+очку', 'B1', 'neutral', 'to hit the nail on the head', 'den Nagel auf den Kopf treffen',
      ex('Ты [[поп+ал в т+очку]]: пробл+ема +именно в к+эше.', 'You hit the nail on the head: the problem is in the cache.', 'Du hast den Nagel auf den Kopf getroffen: Das Problem liegt genau im Cache.')),
    I('derzhat-kulaki', 'держ+ать кулак+и', 'B1', 'informal', 'to keep one’s fingers crossed', 'die Daumen drücken',
      ex('У теб+я сег+одня собес+едование? [[Держ+у]] за теб+я [[кулак+и]]!', 'Interview today? I’m keeping my fingers crossed for you!', 'Heute Vorstellungsgespräch? Ich drücke dir die Daumen!'),
      ['Colloquial variant: держать кулачки.', 'Umgangssprachlich oft: держать кулачки.']),
    I('pyat-kopeek', 'вст+авить сво+и пять коп+еек', 'B2', 'informal', 'to put one’s two cents in', 'seinen Senf dazugeben',
      ex('Никт+о не спр+ашивал, но он всё равн+о реш+ил [[вст+авить сво+и пять коп+еек]].', 'Nobody asked, yet he still decided to put his two cents in.', 'Niemand hat gefragt, aber er musste trotzdem seinen Senf dazugeben.'),
      ['Literally “to insert one’s five kopecks”.', 'Wörtlich „seine fünf Kopeken dazugeben“.']),
    I('za-derevyami-les', 'за дер+евьями не в+идеть л+еса', 'B2', 'neutral', 'not to see the wood for the trees', 'den Wald vor lauter Bäumen nicht sehen',
      ex('Мы так увлекл+ись м+елкими пр+авками, что [[за дер+евьями не в+идим л+еса]].', 'We got so caught up in tiny edits that we can’t see the wood for the trees.', 'Wir haben uns so in Details verloren, dass wir den Wald vor lauter Bäumen nicht sehen.')),
    I('sobaka-zaryta', 'вот где соб+ака зар+ыта', 'B2', 'informal', 'that’s where the real problem lies', 'da liegt der Hund begraben',
      ex('К+абель отошёл — [[вот где соб+ака зар+ыта]]!', 'The cable came loose — that’s where the real trouble was!', 'Das Kabel war locker — da liegt der Hund begraben!'),
      ['Exact match to German “da liegt der Hund begraben”.', 'Genaue Entsprechung zu dt. „da liegt der Hund begraben“.']),
    I('belka-v-kolese', 'крут+иться как б+елка в колес+е', 'B2', 'informal', 'to be running round in circles / flat out busy', 'im Hamsterrad laufen, alle Hände voll zu tun haben',
      ex('Весь дек+абрь я [[круч+усь как б+елка в колес+е]].', 'All December I’ve been rushing non-stop like a squirrel in a wheel.', 'Den ganzen Dezember renne ich wie ein Eichhörnchen im Laufrad.')),
    I('zasuchiv-rukava', 'раб+отать засуч+ив рукав+а', 'B2', 'neutral', 'to roll up one’s sleeves and work hard', 'die Ärmel hochkrempeln',
      ex('Вр+емени м+ало — придётся [[раб+отать засуч+ив рукав+а]].', 'Time is short — we’ll have to roll up our sleeves and get to work.', 'Die Zeit ist knapp — wir müssen die Ärmel hochkrempeln.')),
    I('popast-vprosak', 'поп+асть впрос+ак', 'B2', 'informal', 'to put one’s foot in it, get into an awkward spot', 'ins Fettnäpfchen treten',
      ex('Я не знал о ег+о увольн+ении и [[поп+ал впрос+ак]] со сво+им вопр+осом.', 'I didn’t know he’d been fired and put my foot in it with my question.', 'Ich wusste nichts von seiner Kündigung und trat mit meiner Frage ins Fettnäpfchen.'))
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    E('kak-zhal', 'Как жаль!', 'A2', 'neutral', 'What a pity!', 'Wie schade!',
      ex('Ты не придёшь на встр+ечу? [[Как жаль]]!', 'You won’t make it to the meeting? What a pity!', 'Du kommst nicht zum Treffen? Wie schade!')),
    E('pochemu-by-i-net', 'Почем+у бы и нет?', 'B1', 'neutral', 'Why not?', 'Warum nicht?',
      ex('По+едем на +озеро в субб+оту? — [[Почем+у бы и нет]]?', 'Shall we go to the lake on Saturday? — Why not?', 'Fahren wir am Samstag an den See? — Warum nicht?')),
    E('ponyatya-ne-imeyu', 'Пон+ятия не им+ею.', 'B1', 'informal', 'I have no idea.', 'Keine Ahnung.',
      ex('Кто закр+ыл окн+о? — [[Пон+ятия не им+ею]].', 'Who closed the window? — I have no idea.', 'Wer hat das Fenster zugemacht? — Keine Ahnung.')),
    E('ni-za-chto', 'Ни за что!', 'B1', 'neutral', 'Not for anything! No way!', 'Auf keinen Fall!',
      ex('Отд+ать пар+оль от адм+инки? [[Ни за что]]!', 'Hand over the admin password? No way!', 'Das Admin-Passwort rausgeben? Auf keinen Fall!')),
    E('ne-perezhivay', 'Не пережив+ай!', 'A2', 'informal', 'Don’t worry!', 'Mach dir keinen Kopf!',
      ex('Ош+ибки быв+ают у всех, [[не пережив+ай]]!', 'Everyone makes mistakes, don’t worry!', 'Fehler passieren jedem, mach dir keinen Kopf!'),
      ['Formal: «Не переживайте!».', 'Höflich: «Не переживайте!».']),
    E('priyatno-provesti', 'При+ятно провест+и вр+емя!', 'A2', 'neutral', 'Have a good time! / Have fun!', 'Viel Spaß!',
      ex('Хор+оших выходн+ых и [[при+ятно провест+и вр+емя]]!', 'Have a great weekend and enjoy yourself!', 'Schönes Wochenende und viel Spaß!')),
    E('poka-vsyo-horosho', 'Пок+а всё хорош+о.', 'A2', 'neutral', 'So far, so good.', 'Soweit alles gut.',
      ex('Как ид+ут дел+а на н+овом м+есте? — [[Пок+а всё хорош+о]].', 'How are things going at the new place? — So far, so good.', 'Wie läuft es am neuen Ort? — Soweit alles gut.')),
    E('davno-ne-videlis', 'Давн+о не в+иделись!', 'A2', 'informal', 'Long time no see!', 'Lange nicht gesehen!',
      ex('Прив+ет, Д+има! [[Давн+о не в+иделись]]!', 'Hi Dima! Long time no see!', 'Hallo Dima! Lange nicht gesehen!')),
    E('bud-zdorov', 'Будь здор+ов!', 'A2', 'informal', 'Bless you! (when someone sneezes)', 'Gesundheit!',
      ex('Апчх+и! — [[Будь здор+ов]]!', 'Achoo! — Bless you!', 'Hatschi! — Gesundheit!'),
      ['To a woman: будь здорова! Formal / plural: будьте здоровы!', 'Zur Frau: будь здорова! Höflich / Plural: будьте здоровы!']),
    E('pozhaluysta-reply', 'Пож+алуйста!', 'A1', 'neutral', 'Here you are. / You’re welcome.', 'Bitte schön!',
      ex('Спас+ибо за бил+ет! — [[Пож+алуйста]]!', 'Thanks for the ticket! — You’re welcome!', 'Danke für das Ticket! — Bitte schön!'),
      ['Means “please”, “here you go” and “you’re welcome”.', 'Heißt „bitte“, „bitte schön“ und „gern geschehen“.'])
  ] });

  GT.register({ tab: 'chunks', items: [
    // opinion (2)
    C('esli-chestno', 'opinion', ['everyday', 'workcomm'], '+Если ч+естно, я д+умаю, что …', 'neutral', 'Honestly, I think that …', 'Ehrlich gesagt glaube ich, dass …',
      ex('[[+Если ч+естно, я д+умаю, что]] ср+оки нереалист+ичны.', 'Honestly, I think the deadlines are unrealistic.', 'Ehrlich gesagt glaube ich, dass die Fristen unrealistisch sind.')),
    C('tochki-zreniya', 'opinion', ['society', 'workcomm'], 'С мо+ей т+очки зр+ения, …', 'formal', 'From my point of view, …', 'Aus meiner Sicht …',
      ex('[[С мо+ей т+очки зр+ения]], безоп+асность важн+ее ск+орости.', 'From my point of view, security matters more than speed.', 'Aus meiner Sicht ist Sicherheit wichtiger als Tempo.')),
    // agree (2)
    C('v-tselom-pravy', 'agree', ['workcomm', 'society'], 'В ц+елом вы пр+авы, но [X].', 'formal', 'On the whole you’re right, but [X].', 'Im Prinzip haben Sie recht, aber [X].',
      ex('[[В ц+елом вы пр+авы, но]] у нас не хват+ает бюдж+ета.', 'On the whole you’re right, but we don’t have the budget.', 'Im Prinzip haben Sie recht, aber uns fehlt das Budget.')),
    C('polnostyu-soglasen', 'agree', ['workcomm', 'everyday'], 'Я п+олностью с в+ами согл+асен (согл+асна).', 'neutral', 'I completely agree with you.', 'Ich stimme Ihnen völlig zu.',
      ex('Н+адо доб+авить ещё од+ин тест. — [[Я п+олностью с в+ами согл+асен]].', 'We need to add one more test. — I completely agree with you.', 'Wir sollten noch einen Test ergänzen. — Ich stimme Ihnen völlig zu.')),
    // clarify (2)
    C('privesti-primer', 'clarify', ['workcomm', 'authorities'], 'М+ожете привест+и прим+ер?', 'neutral', 'Could you give an example?', 'Können Sie ein Beispiel nennen?',
      ex('Не совс+ем пон+ятно пр+авило — [[м+ожете привест+и прим+ер]]?', 'The rule isn’t quite clear — could you give an example?', 'Die Regel ist nicht ganz klar — können Sie ein Beispiel nennen?')),
    C('obyasnit-popodrobnee', 'clarify', ['workcomm', 'authorities'], 'Не могл+и бы вы объясн+ить поподр+обнее?', 'formal', 'Could you explain in a bit more detail?', 'Könnten Sie das etwas genauer erklären?',
      ex('[[Не могл+и бы вы объясн+ить поподр+обнее]], как заполн+ять +эту граф+у?', 'Could you explain in more detail how to fill in this box?', 'Könnten Sie genauer erklären, wie man dieses Feld ausfüllt?')),
    // phone (2)
    C('zvonyu-po-povodu', 'phone', ['authorities', 'health', 'workcomm'], 'Я звон+ю по п+оводу [X].', 'neutral', 'I’m calling about [X].', 'Ich rufe wegen [X] an.',
      ex('Здр+авствуйте, [[я звон+ю по п+оводу]] з+аписи на четв+ерг.', 'Hello, I’m calling about my appointment on Thursday.', 'Guten Tag, ich rufe wegen des Termins am Donnerstag an.')),
    C('ostavit-soobshchenie', 'phone', ['workcomm', 'authorities'], 'Мог+у я ост+авить сообщ+ение?', 'formal', 'Can I leave a message?', 'Kann ich eine Nachricht hinterlassen?',
      ex('+Анны нет на м+есте? [[Мог+у я ост+авить сообщ+ение]]?', 'Anna isn’t at her desk? Can I leave a message?', 'Anna ist nicht am Platz? Kann ich eine Nachricht hinterlassen?')),
    // complain (2)
    C('rassmotret-do', 'complain', ['authorities', 'home'], 'Прош+у рассмотр+еть +этот вопр+ос до [д+аты].', 'formal', 'Please look into this matter by [date].', 'Bitte prüfen Sie diese Angelegenheit bis [Datum].',
      ex('[[Прош+у рассмотр+еть +этот вопр+ос до]] пятн+адцатого числ+а.', 'Please review this matter by the fifteenth.', 'Bitte prüfen Sie diese Sache bis zum 15.')),
    C('ne-ustraivaet', 'complain', ['food', 'home'], 'Мен+я не устр+аивает к+ачество [X].', 'neutral', 'I’m not satisfied with the quality of [X].', 'Die Qualität von [X] stellt mich nicht zufrieden.',
      ex('[[Мен+я не устр+аивает к+ачество]] уб+орки в подъ+езде.', 'I’m not happy with the quality of cleaning in the stairwell.', 'Die Qualität der Treppenhausreinigung gefällt mir nicht.')),
    // problem (2)
    C('povtoryaetsya', 'problem', ['infra', 'dev'], 'Ош+ибка повтор+яется п+осле [X].', 'neutral', 'The error keeps repeating after [X].', 'Der Fehler tritt nach [X] wiederholt auf.',
      ex('[[Ош+ибка повтор+яется п+осле]] к+аждой перезагр+узки.', 'The error keeps happening after every reboot.', 'Der Fehler tritt nach jedem Neustart wieder auf.')),
    C('pereproboval', 'problem', ['everyday', 'dev'], 'Я уж+е перепр+обовал(а) всё, но [X].', 'neutral', 'I’ve already tried everything, but [X].', 'Ich habe schon alles versucht, aber [X].',
      ex('[[Я уж+е перепр+обовал всё, но]] пр+интер не печ+атает.', 'I’ve tried everything already, but the printer won’t print.', 'Ich habe schon alles probiert, aber der Drucker druckt nicht.')),
    // appointments (2)
    C('vtoraya-polovina', 'appointments', ['health', 'authorities'], 'Уд+обно ли вам во втор+ой полов+ине дня?', 'formal', 'Would the afternoon work for you?', 'Passt es Ihnen am Nachmittag?',
      ex('+Утром я з+анят — [[уд+обно ли вам во втор+ой полов+ине дня]]?', 'I’m busy in the morning — does the afternoon suit you?', 'Vormittags bin ich beschäftigt — passt es Ihnen am Nachmittag?')),
    C('boyus-ne-smogu', 'appointments', ['workcomm', 'health'], 'Я бо+юсь, что не смог+у прийт+и в [вр+емя].', 'neutral', 'I’m afraid I won’t be able to make it at [time].', 'Ich fürchte, ich schaffe es um [Zeit] nicht.',
      ex('[[Я бо+юсь, что не смог+у прийт+и в]] д+есять — перенесём на днём на ч+ас?', 'I’m afraid I can’t make ten — shall we move it to one in the afternoon?', 'Ich fürchte, um zehn schaffe ich es nicht — verschieben wir auf ein Uhr nachmittags?')),
    // email (2)
    C('podtverdit-poluchenie', 'email', ['workcomm', 'authorities'], 'Прош+у подтверд+ить получ+ение письм+а.', 'formal', 'Please confirm receipt of this email.', 'Bitte bestätigen Sie den Erhalt dieser E-Mail.',
      ex('Докум+енты во влож+ении. [[Прош+у подтверд+ить получ+ение письм+а]].', 'Documents attached. Please confirm receipt of the email.', 'Unterlagen anbei. Bitte bestätigen Sie den Erhalt.')),
    C('zhdu-otveta', 'email', ['work', 'authorities'], 'Жду в+ашего отв+ета.', 'formal', 'I look forward to your reply.', 'Ich warte auf Ihre Antwort.',
      ex('Спас+ибо заран+ее, [[жду в+ашего отв+ета]].', 'Thanks in advance, looking forward to your reply.', 'Vielen Dank im Voraus, ich freue mich auf Ihre Antwort.')),
    // smalltalk (2)
    C('kak-nedelya', 'smalltalk', ['everyday', 'workcomm'], 'Как прох+одит нед+еля?', 'informal', 'How’s your week going?', 'Wie läuft deine Woche?',
      ex('Прив+ет! [[Как прох+одит нед+еля]]? — Спок+ойно, спас+ибо.', 'Hi! How’s your week going? — Calm, thanks.', 'Hallo! Wie läuft die Woche? — Ruhig, danke.')),
    C('plany-vyhodnye', 'smalltalk', ['everyday', 'people'], 'Как+ие пл+аны на выходн+ые?', 'informal', 'What are your plans for the weekend?', 'Was sind deine Pläne fürs Wochenende?',
      ex('Уж+е п+ятница — [[как+ие пл+аны на выходн+ые]]?', 'It’s Friday already — any plans for the weekend?', 'Schon Freitag — was hast du am Wochenende vor?')),
    // it_standup (2)
    C('pochti-zakonchil', 'it_standup', ['dev', 'workcomm'], 'Я почт+и зак+ончил(а) [X], д+альше займ+усь [Y].', 'neutral', 'I’m almost done with [X]; next I’ll work on [Y].', 'Mit [X] bin ich fast fertig, danach mache ich [Y].',
      ex('[[Я почт+и зак+ончил]] мигр+ацию, [[д+альше займ+усь]] т+естами.', 'I’m almost done with the migration; next I’ll tackle the tests.', 'Mit der Migration bin ich fast fertig, danach mache ich die Tests.')),
    C('beru-v-rabotu', 'it_standup', ['dev', 'workcomm'], 'Сег+одня я бер+у в раб+оту [X].', 'neutral', 'Today I’m picking up [X].', 'Heute nehme ich [X] in Arbeit.',
      ex('[[Сег+одня я бер+у в раб+оту]] т+икет с авториз+ацией.', 'Today I’m picking up the authentication ticket.', 'Heute übernehme ich das Ticket zur Authentifizierung.')),
    // it_bug (2)
    C('vyletaet-oshibka', 'it_bug', ['dev'], 'Вылет+ает ош+ибка к+аждый раз, когд+а я [X].', 'informal', 'An error pops up every time I [X].', 'Es kommt jedes Mal ein Fehler, wenn ich [X].',
      ex('[[Вылет+ает ош+ибка к+аждый раз, когд+а я]] загруж+аю файл б+ольше десят+и мегаб+айт.', 'An error pops up every time I upload a file over 10 MB.', 'Es erscheint ein Fehler, sobald ich eine Datei über 10 MB hochlade.')),
    C('shagi-vosproizvedeniya', 'it_bug', ['dev', 'workcomm'], 'Вот шаг+и для воспроизвед+ения: [X].', 'neutral', 'Here are the steps to reproduce: [X].', 'Hier sind die Schritte zum Reproduzieren: [X].',
      ex('Я прикреп+ил л+оги — [[вот шаг+и для воспроизвед+ения]]: откр+ыть ф+орму и наж+ать «Сохр+анить».', 'I attached the logs — here are the steps to reproduce: open the form and click Save.', 'Ich habe die Logs angehängt — hier sind die Schritte: Formular öffnen und Speichern klicken.')),
    // it_help (2)
    C('para-minut', 'it_help', ['dev', 'workcomm'], 'У теб+я найдётся п+ара мин+ут?', 'informal', 'Could you spare a couple of minutes?', 'Hast du kurz ein paar Minuten?',
      ex('[[У теб+я найдётся п+ара мин+ут]]? Не поним+аю +этот конфл+икт.', 'Could you spare a couple of minutes? I don’t understand this conflict.', 'Hast du kurz zwei Minuten? Ich verstehe diesen Konflikt nicht.')),
    C('podskazat-pochemu', 'it_help', ['dev', 'workcomm'], 'М+ожешь подсказ+ать, почем+у [X]?', 'informal', 'Can you tell me why [X]?', 'Kannst du mir sagen, warum [X]?',
      ex('[[М+ожешь подсказ+ать, почем+у]] сб+орка уп+ала на с+ервере?', 'Can you tell me why the build failed on the server?', 'Kannst du mir sagen, warum der Build auf dem Server fehlgeschlagen ist?')),
    // it_meeting (2)
    C('otlozhim-vopros', 'it_meeting', ['workcomm', 'dev'], 'Дав+айте пок+а отл+ожим +этот вопр+ос.', 'neutral', 'Let’s park this question for now.', 'Lass uns diese Frage erst mal zurückstellen.',
      ex('У нас ост+алось пять мин+ут — [[дав+айте пок+а отл+ожим +этот вопр+ос]].', 'We have five minutes left — let’s park this question for now.', 'Wir haben noch fünf Minuten — stellen wir diese Frage zurück.')),
    C('drugoi-variant', 'it_meeting', ['workcomm', 'dev'], 'Мы могл+и бы рассмотр+еть друг+ой вари+ант?', 'formal', 'Could we consider another option?', 'Könnten wir eine andere Option in Betracht ziehen?',
      ex('+Этот подх+од дорог+ой — [[мы могл+и бы рассмотр+еть друг+ой вари+ант]]?', 'That approach is pricey — could we look at another option?', 'Dieser Ansatz ist teuer — könnten wir eine andere Option prüfen?'))
  ] });
})();
