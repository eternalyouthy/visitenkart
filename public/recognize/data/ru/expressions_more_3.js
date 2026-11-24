/* RUSSIAN · Expressions fourth batch: 6 idioms + 4 everyday phrases + 26 chunks (2 per function × 13 functions) = 36 cards.
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
    return { id: 'ru-ch3-' + id, topic: fn, topics: topics, t: t, register: register, en: en, de: de, examples: [e], note: nt(note) };
  }

  GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
    I('kot-v-meshke', 'куп+ить кот+а в мешк+е', 'B2', 'informal', 'to buy a pig in a poke', 'die Katze im Sack kaufen',
      ex('Снач+ала попр+обуй д+емо, чт+обы не [[куп+ить кот+а в мешк+е]].', 'Try the demo first so you don’t buy a pig in a poke.', 'Teste erst die Demo, um nicht die Katze im Sack zu kaufen.'),
      ['Literally “buy a cat in a sack”, matching German die Katze im Sack.', 'Wörtlich „eine Katze im Sack kaufen“.']),
    I('svoimi-imenami', 'назыв+ать в+ещи сво+ими имен+ами', 'B2', 'neutral', 'to call a spade a spade', 'das Kind beim Namen nennen',
      ex('Дав+айте [[назыв+ать в+ещи сво+ими имен+ами]]: рел+из не гот+ов.', 'Let’s call a spade a spade: the release isn’t ready.', 'Nennen wir das Kind beim Namen: Das Release ist nicht fertig.')),
    I('igrat-s-ognyom', 'игр+ать с огнём', 'B2', 'neutral', 'to play with fire', 'mit dem Feuer spielen',
      ex('Не ст+авить обновл+ения безоп+асности — это [[игр+ать с огнём]].', 'Skipping security updates is playing with fire.', 'Sicherheitsupdates wegzulassen heißt, mit dem Feuer zu spielen.')),
    I('izobretat-velosiped', 'изобрет+ать велосип+ед', 'B2', 'informal', 'to reinvent the wheel', 'das Rad neu erfinden',
      ex('Есть гот+овая библиот+ека, не н+адо [[изобрет+ать велосип+ед]].', 'There’s a ready library; no need to reinvent the wheel.', 'Es gibt eine fertige Bibliothek, man muss das Rad nicht neu erfinden.')),
    I('chitat-mezhdu-strok', 'чит+ать м+ежду строк', 'B2', 'neutral', 'to read between the lines', 'zwischen den Zeilen lesen',
      ex('В +этом отк+азе в+ажно [[чит+ать м+ежду строк]].', 'In this rejection it’s important to read between the lines.', 'Bei dieser Absage muss man zwischen den Zeilen lesen.')),
    I('podlivat-masla', 'подлив+ать м+асла в ог+онь', 'B2', 'neutral', 'to add fuel to the fire', 'Öl ins Feuer gießen',
      ex('Резкий отв+ет в чате т+олько [[подл+ил м+асла в ог+онь]].', 'The sharp reply in the chat only added fuel to the fire.', 'Die scharfe Antwort im Chat goss nur Öl ins Feuer.'))
  ] });

  GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
    E('kak-by-to-ni-bylo', 'Как бы то ни б+ыло.', 'C1', 'neutral', 'Be that as it may.', 'Wie dem auch sei.',
      ex('[[Как бы то ни б+ыло]], реш+ение н+ужно прин+ять сег+одня.', 'Be that as it may, we have to make a decision today.', 'Wie dem auch sei, wir müssen heute entscheiden.')),
    E('samo-soboy', '+Это сам+о соб+ой разум+еется.', 'B2', 'neutral', 'That goes without saying.', 'Das versteht sich von selbst.',
      ex('Пар+оли ником+у не передаём — [[+это сам+о соб+ой разум+еется]].', 'We never share passwords — that goes without saying.', 'Passwörter geben wir nie weiter — das versteht sich von selbst.')),
    E('bez-obid', 'Без об+ид.', 'B1', 'informal', 'No offence.', 'Nichts für ungut.',
      ex('[[Без об+ид]], но старый вар+иант был уд+обнее.', 'No offence, but the old version was handier.', 'Nichts für ungut, aber die alte Version war praktischer.')),
    E('kamen-s-dushi', 'К+амень с душ+и уп+ал!', 'B2', 'informal', 'That’s a weight off my mind!', 'Mir fällt ein Stein vom Herzen!',
      ex('С+ервер сн+ова в сет+и? Прямо [[к+амень с душ+и уп+ал]]!', 'The server’s back online? What a weight off my mind!', 'Der Server ist wieder online? Mir fällt ein Stein vom Herzen!'))
  ] });

  GT.register({ tab: 'chunks', items: [
    // opinion (2)
    C('ubezhdyon-chto', 'opinion', ['society', 'workcomm'], 'Я твёрдо убеждён (убежден+а), что …', 'formal', 'I’m firmly convinced that …', 'Ich bin fest davon überzeugt, dass …',
      ex('[[Я твёрдо убеждён, что]] автот+есты экон+омят вр+емя.', 'I’m firmly convinced that automated tests save time.', 'Ich bin fest davon überzeugt, dass automatisierte Tests Zeit sparen.')),
    C('somnevayus-chto', 'opinion', ['workcomm', 'society'], 'Я сомнев+аюсь, что …', 'neutral', 'I doubt that … / I’m sceptical whether …', 'Ich bezweifle, dass …',
      ex('[[Я сомнев+аюсь, что]] мы усп+еем всё за одн+у нед+елю.', 'I doubt we can finish everything in one week.', 'Ich bezweifle, dass wir alles in einer Woche schaffen.')),
    // agree (2)
    C('eto-logichno', 'agree', ['workcomm', 'everyday'], '+Это звуч+ит лог+ично.', 'neutral', 'That makes complete sense.', 'Das leuchtet mir ein.',
      ex('Снач+ала сд+елать бэк+ап? [[+Это звуч+ит лог+ично]].', 'Take a backup first? That makes complete sense.', 'Zuerst ein Backup machen? Das leuchtet ein.')),
    C('vynuzhden-ne-soglasitsya', 'agree', ['workcomm', 'society'], 'Вынужден(а) не соглас+иться.', 'formal', 'I’m afraid I have to disagree.', 'Da muss ich leider widersprechen.',
      ex('С р+остом цен здесь я [[вынужден не соглас+иться]]: т+есты пок+азывают друг+ое.', 'I have to disagree here: tests show otherwise.', 'Da muss ich leider widersprechen: Tests zeigen etwas anderes.')),
    // clarify (2)
    C('mozhno-utochnit', 'clarify', ['workcomm', 'authorities'], 'М+ожно кор+отко уточн+ить [X]?', 'neutral', 'Could I briefly clarify [X]?', 'Darf ich kurz [X] nachfragen?',
      ex('[[М+ожно кор+отко уточн+ить]] ср+оки отпр+авки отчёта?', 'Could I briefly clarify the deadline for sending the report?', 'Darf ich kurz die Frist für den Bericht nachfragen?')),
    C('kak-na-praktike', 'clarify', ['workcomm', 'dev'], 'Как +это в+ыглядит на пр+актике?', 'neutral', 'What does that look like in practice?', 'Wie sieht das in der Praxis aus?',
      ex('Пр+авило понятное, но [[как +это в+ыглядит на пр+актике]]?', 'The rule is clear, but what does that look like in practice?', 'Die Regel ist klar, aber wie sieht das in der Praxis aus?')),
    // phone (2)
    C('kto-sprashivaet', 'phone', ['work', 'authorities'], 'Кт+о ег+о / её спр+ашивает?', 'formal', 'Who may I say is calling?', 'Wen darf ich melden?',
      ex('Сек+унду, переключ+у на отд+ел — [[кт+о ег+о спр+ашивает]]?', 'One moment, transferring you — who’s calling please?', 'Einen Moment, ich verbinde — wen darf ich melden?')),
    C('svyaz-preryvaetsya', 'phone', ['everyday', 'workcomm'], 'Связь прерыв+ается — перезвон+ю чер+ез мин+уту.', 'neutral', 'The line is breaking up — I’ll call right back.', 'Die Verbindung bricht ab — ich rufe gleich zurück.',
      ex('Я в тунн+еле, [[связь прерыв+ается — перезвон+ю чер+ез мин+уту]].', 'I’m in a tunnel, the line’s breaking up — I’ll call right back.', 'Ich bin im Tunnel, die Verbindung bricht ab — ich rufe gleich zurück.')),
    // complain (2)
    C('uzhe-soobshchal', 'complain', ['authorities', 'home'], 'Я уж+е сообщ+ал(а) об +этом [д+ата].', 'formal', 'I already reported this on [date].', 'Ich habe das bereits am [Datum] gemeldet.',
      ex('[[Я уж+е сообщ+ал об +этом]] в пр+ошлый понед+ельник, но отв+ета нет.', 'I already reported this last Monday, yet there’s no reply.', 'Ich habe das bereits letzten Montag gemeldet, aber ohne Antwort.')),
    C('tak-dalshe-nelzya', 'complain', ['home', 'everyday'], 'Так д+альше продолж+аться не м+ожет.', 'neutral', 'This simply can’t go on like this.', 'So kann es nicht weitergehen.',
      ex('Сб+ои к+аждое +утро — [[так д+альше продолж+аться не м+ожет]].', 'Outages every morning — this can’t go on.', 'Jeden Morgen Ausfälle — so kann es nicht weitergehen.')),
    // problem (2)
    C('lokalizovat-prichinu', 'problem', ['infra', 'dev'], 'Нам удал+ось локализ+овать прич+ину.', 'formal', 'We’ve managed to narrow down the cause.', 'Wir konnten die Ursache eingrenzen.',
      ex('[[Нам удал+ось локализ+овать прич+ину]]: истёк сертифик+ат.', 'We narrowed down the cause: a certificate expired.', 'Wir konnten die Ursache eingrenzen: ein Zertifikat ist abgelaufen.')),
    C('tekst-oshibki', 'problem', ['dev', 'infra'], 'Текст ош+ибки так+ой: [X].', 'neutral', 'The error message reads: [X].', 'Die Fehlermeldung lautet: [X].',
      ex('[[Текст ош+ибки так+ой]]: «Д+оступ запрещён».', 'The error message reads: “Access denied”.', 'Die Fehlermeldung lautet: „Zugriff verweigert“.')),
    // appointments (2)
    C('otmenit-vstrechu', 'appointments', ['workcomm', 'health'], 'Мне, к сожал+ению, придётся отмен+ить встр+ечу.', 'formal', 'Unfortunately I have to cancel the meeting.', 'Leider muss ich den Termin absagen.',
      ex('Я прибол+ел — [[мне, к сожал+ению, придётся отмен+ить встр+ечу]] в четв+ерг.', 'I caught a cold — unfortunately I have to cancel Thursday’s meeting.', 'Ich bin krank — leider muss ich den Termin am Donnerstag absagen.')),
    C('kakoy-slot', 'appointments', ['workcomm', 'authorities'], 'Как+ой друг+ой день вам бы подошёл?', 'formal', 'Which other day would suit you?', 'Welcher andere Tag würde Ihnen passen?',
      ex('Сред+а з+анята — [[как+ой друг+ой день вам бы подошёл]]?', 'Wednesday is booked — which other day would work for you?', 'Mittwoch ist belegt — welcher andere Tag würde Ihnen passen?')),
    // email (2)
    C('esli-vozniknut-voprosy', 'email', ['work', 'authorities'], '+Если возн+икнут вопр+осы, пож+алуйста, пиш+ите.', 'formal', 'If you have any questions, please write.', 'Bei Rückfragen schreiben Sie mir gerne.',
      ex('Всё распис+али в ф+айле. [[+Если возн+икнут вопр+осы, пож+алуйста, пиш+ите]].', 'Everything is detailed in the file. If any questions arise, please write.', 'Alles steht in der Datei. Bei Rückfragen schreiben Sie gerne.')),
    C('zaranee-blagodaryu', 'email', ['work', 'authorities'], 'Заран+ее благодар+ю за сод+ействие.', 'formal', 'Thank you in advance for your cooperation.', 'Vielen Dank im Voraus für Ihre Unterstützung.',
      ex('[[Заран+ее благодар+ю за сод+ействие]] в оформл+ении проп+уска.', 'Thank you in advance for your help arranging the pass.', 'Vielen Dank im Voraus für Ihre Unterstützung beim Ausstellen des Ausweises.')),
    // smalltalk (2)
    C('nakonets-pyatnitsa', 'smalltalk', ['everyday', 'workcomm'], 'Након+ец-то п+ятница!', 'informal', 'Friday at last!', 'Endlich Freitag!',
      ex('[[Након+ец-то п+ятница]]! Отл+ичных выходн+ых!', 'Friday at last! Have a great weekend!', 'Endlich Freitag! Schönes Wochenende!')),
    C('budesh-kofe', 'smalltalk', ['workcomm', 'everyday'], 'Я пошёл (пошл+а) за к+офе — теб+е взять?', 'informal', 'I’m grabbing coffee — want one too?', 'Ich hole Kaffee — möchtest du auch einen?',
      ex('Перер+ыв пять мин+ут: [[я пошёл за к+офе — теб+е взять]]?', 'Five-minute break: I’m grabbing coffee — want one?', 'Fünf Minuten Pause: Ich hole Kaffee — magst du auch einen?')),
    // it_standup (2)
    C('zadacha-na-revyu', 'it_standup', ['dev', 'workcomm'], 'Зад+ача сейч+ас на ревь+ю.', 'neutral', 'The task is currently in review.', 'Das Ticket ist jetzt im Review.',
      ex('Код гот+ов, [[зад+ача сейч+ас на ревь+ю]].', 'The code is ready, the task is now in review.', 'Der Code ist fertig, die Aufgabe liegt jetzt im Review.')),
    C('blokery-net', 'it_standup', ['workcomm', 'dev'], 'Бл+океров у мен+я нет.', 'neutral', 'I have no blockers.', 'Blocker habe ich keine.',
      ex('Ид+у по гр+афику, [[бл+океров у мен+я нет]].', 'I’m on schedule, I have no blockers.', 'Ich liege im Plan, Blocker habe ich keine.')),
    // it_bug (2)
    C('posle-otkata', 'it_bug', ['infra', 'dev'], 'П+осле отк+ата всё сн+ова зараб+отало.', 'neutral', 'After the rollback everything worked again.', 'Nach dem Rollback lief wieder alles.',
      ex('Мы отмен+или рел+из — [[п+осле отк+ата всё сн+ова зараб+отало]].', 'We reverted the release — after the rollback everything worked again.', 'Wir haben das Release zurückgerollt — danach lief wieder alles.')),
    C('v-logah-vidno', 'it_bug', ['dev', 'infra'], 'В л+огах чётко в+идно, где п+адает.', 'neutral', 'The logs clearly show where it crashes.', 'In den Logs sieht man genau, wo es abbricht.',
      ex('Глянь на сорок втор+ую стр+оку — [[в л+огах чётко в+идно, где п+адает]].', 'Check line 42 — the logs clearly show where it crashes.', 'Schau in Zeile 42 — in den Logs sieht man genau, wo es abbricht.')),
    // it_help (2)
    C('sam-ne-spravlyus', 'it_help', ['dev', 'infra'], 'Бо+юсь, сам(а) я зд+есь не разбер+усь.', 'neutral', 'I’m afraid I won’t figure this out on my own.', 'Ich fürchte, allein komme ich hier nicht weiter.',
      ex('Час ищ+у прич+ину, но [[бо+юсь, сам я зд+есь не разбер+усь]].', 'Been searching for an hour, afraid I won’t solve this alone.', 'Suche schon eine Stunde — allein komme ich hier nicht weiter.')),
    C('uzhe-proboval', 'it_help', ['dev', 'infra'], 'Я уж+е пр+обовал(а) [X], но не помогл+о.', 'neutral', 'I’ve already tried [X], but it didn’t help.', 'Ich habe [X] schon probiert, aber es half nicht.',
      ex('[[Я уж+е пр+обовал]] пересобра́ть конт+ейнер, [[но не помогл+о]].', 'I’ve already tried rebuilding the container, but it didn’t help.', 'Ich habe schon versucht, den Container neu zu bauen, half aber nicht.')),
    // it_meeting (2)
    C('vizhu-risk', 'it_meeting', ['security', 'workcomm'], 'Я в+ижу зд+есь риск с [X].', 'neutral', 'I see a risk here with [X].', 'Ich sehe hier ein Risiko bei [X].',
      ex('[[Я в+ижу зд+есь риск с]] хран+ением ключей в открытом в+иде.', 'I see a risk here with storing keys in plaintext.', 'Ich sehe hier ein Risiko bei der Speicherung von Schlüsseln im Klartext.')),
    C('vzvesim-plyusy-minusy', 'it_meeting', ['workcomm', 'dev'], 'Дав+айте взв+есим плю́сы и м+инусы.', 'neutral', 'Let’s weigh up the pros and cons.', 'Wägen wir die Vor- und Nachteile ab.',
      ex('Перед в+ыбором базы д+анных [[дав+айте взв+есим плю́сы и м+инусы]].', 'Before choosing a database, let’s weigh up the pros and cons.', 'Vor der Wahl der Datenbank lasst uns Vor- und Nachteile abwägen.'))
  ] });
})();
