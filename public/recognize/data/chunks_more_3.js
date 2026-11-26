/* Chunks (Redemittel) · fourth batch: 4 distinct frames per function × 13 functions = 52 cards (B1, B2 and C1).
 * Checked against existing inventory for zero duplicates. Original examples (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function C(id, fn, topics, de, register, ru, en, examples, variations, note, lvl) {
    var o = { id: 'ch3-' + fn + '-' + id, topic: fn, topics: topics, de: de, register: register, ru: ru, en: en, examples: examples, variations: variations || [] };
    if (lvl) o.level = lvl;
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }

  GT.register({ tab: 'chunks', items: [
    // Giving your opinion (4)
    C('fest-ueberzeugt', 'opinion', ['society', 'workcomm', 'everyday'], 'Ich bin fest davon überzeugt, dass [X].', 'neutral', 'Я твёрдо убеждён(а), что [X].', 'I’m firmly convinced that [X].',
      [ex('[[Ich bin fest davon überzeugt, dass]] sich mehr Transparenz lohnt.', 'Я твёрдо убеждён, что большая прозрачность себя оправдывает.', 'I’m firmly convinced that greater transparency pays off.')],
      ['Ich bin überzeugt davon, dass …'], ['Сильная позиция для дискуссий B2–C1. После dass глагол в конце.', 'Strong stance for B2–C1 discussions. Verb goes to the end after dass.'], 'b2'),
    C('meines-erachtens', 'opinion', ['workcomm', 'society', 'authorities'], 'Meines Erachtens [Verb] …', 'formal', 'По моему мнению / на мой взгляд …', 'In my estimation / view …',
      [ex('[[Meines Erachtens]] sollte dieses Risiko zuerst bewertet werden.', 'На мой взгляд, этот риск следует оценить в первую очередь.', 'In my view, this risk should be assessed first.')],
      ['Meiner Einschätzung nach …'], ['Книжно-деловой вариант «по-моему» (C1): глагол сразу на втором месте.', 'Formal business style (C1): the verb follows immediately in second position.'], 'c1'),
    C('spricht-viel-dafuer', 'opinion', ['society', 'workcomm'], 'Es spricht viel dafür, dass [X].', 'formal', 'Многое говорит в пользу того, что [X].', 'There’s a lot to suggest that [X].',
      [ex('[[Es spricht viel dafür, dass]] hybride Arbeit bleibt.', 'Многое говорит в пользу того, что гибридный формат останется.', 'There’s a lot to suggest that hybrid work is here to stay.')],
      ['Vieles spricht dafür, …'], ['Хорошо для взвешенного аргумента без категоричности.', 'Great for a balanced, objective argument.'], 'c1'),
    C('skeptisch-ob', 'opinion', ['workcomm', 'society'], 'Ehrlich gesagt bin ich skeptisch, ob [X].', 'neutral', 'Честно говоря, я сомневаюсь, что [X].', 'Honestly, I’m sceptical whether [X].',
      [ex('[[Ehrlich gesagt bin ich skeptisch, ob]] wir den Termin ohne Nachtschicht schaffen.', 'Честно говоря, я сомневаюсь, что мы успеем к сроку без ночной смены.', 'Honestly, I’m sceptical whether we’ll make the deadline without a night shift.')],
      ['Ich habe Zweifel, ob …'], null, 'b2'),

    // Agreeing & disagreeing (4)
    C('leuchtet-ein', 'agree', ['workcomm', 'everyday'], 'Das leuchtet mir ein.', 'neutral', 'Это мне понятно и кажется логичным.', 'That makes sense to me, I see the logic.',
      [ex('Wenn die Datenbank voll ist, hängt der Login — [[das leuchtet mir ein]].', 'Если база переполнена, логин виснет — это логично.', 'If the database is full, login hangs — that makes sense to me.')],
      ['Das ist einleuchtend.'], ['einleuchten + Dativ: звучит убедительнее простого «okay».', 'einleuchten + Dativ: sounds more thoughtful than a plain “okay”.'], 'b2'),
    C('muss-widersprechen', 'agree', ['workcomm', 'society'], 'Da muss ich dir / Ihnen leider widersprechen.', 'formal', 'Здесь мне, к сожалению, придётся с вами не согласиться.', 'I’m afraid I have to disagree with you there.',
      [ex('[[Da muss ich Ihnen leider widersprechen]]: Die Zahlen sagen etwas anderes.', 'Здесь я вынужден с вами не согласиться: цифры говорят о другом.', 'I’m afraid I have to disagree with you there: the figures say otherwise.')],
      ['Dem kann ich so nicht zustimmen.'], ['widersprechen + Dativ (dir / Ihnen), не Akkusativ!', 'widersprechen takes the dative (dir / Ihnen).'], 'b2'),
    C('einerseits-andererseits', 'agree', ['society', 'workcomm', 'everyday'], 'Einerseits [X], andererseits [Y].', 'neutral', 'С одной стороны [X], с другой стороны [Y].', 'On the one hand [X], on the other hand [Y].',
      [ex('[[Einerseits]] spart das Tool Zeit, [[andererseits]] kostet die Einführung Geld.', 'С одной стороны, инструмент экономит время, с другой — внедрение стоит денег.', 'On the one hand the tool saves time; on the other, roll-out costs money.')],
      ['Auf der einen Seite …, auf der anderen Seite …'], null, 'b1'),
    C('trifft-es-genau', 'agree', ['everyday', 'workcomm'], 'Das trifft es genau.', 'neutral', 'Вот именно; в самую точку.', 'That hits the mark exactly.',
      [ex('Wir brauchen klarere Regeln statt neuer Tools. — [[Das trifft es genau]]!', 'Нам нужны более ясные правила, а не новые инструменты. — В самую точку!', 'We need clearer rules rather than new tools. — That hits it exactly!')],
      ['Genau auf den Punkt gebracht.'], null, 'b2'),

    // Asking for clarification (4)
    C('kurz-nachfragen', 'clarify', ['workcomm', 'authorities'], 'Darf ich kurz nachfragen, wie [X] gemeint ist?', 'formal', 'Можно коротко уточнить, что имеется в виду под [X]?', 'May I briefly ask what’s meant by [X]?',
      [ex('[[Darf ich kurz nachfragen, wie]] diese Kennzahl genau [[gemeint ist]]?', 'Можно уточнить, как именно следует понимать этот показатель?', 'May I briefly ask how this metric is meant?')]),
    C('wenn-richtig-verstehe', 'clarify', ['workcomm', 'authorities'], 'Wenn ich Sie richtig verstehe, bedeutet das [X].', 'formal', 'Если я вас правильно понимаю, это означает [X].', 'If I understand you correctly, that means [X].',
      [ex('[[Wenn ich Sie richtig verstehe, bedeutet das]], dass wir noch eine Woche Zeit haben.', 'Если я вас правильно понимаю, это значит, что у нас есть ещё неделя.', 'If I understand you correctly, that means we have another week.')], null, null, 'b2'),
    C('etwas-genauer-fassen', 'clarify', ['workcomm', 'dev'], 'Könnten wir das noch etwas genauer fassen?', 'formal', 'Можем ли мы сформулировать это чуть точнее?', 'Could we define that a bit more precisely?',
      [ex('„Bald“ ist zu vage — [[könnten wir das noch etwas genauer fassen]]?', '«Скоро» — слишком расплывчато, можем сформулировать точнее?', '“Soon” is too vague — could we define that more precisely?')]),
    C('konkret-im-alltag', 'clarify', ['workcomm', 'work'], 'Wie sieht das konkret im Alltag aus?', 'neutral', 'Как это выглядит на практике в повседневной работе?', 'What does that look like in practice day to day?',
      [ex('Die neue Regel klingt gut, aber [[wie sieht das konkret im Alltag aus]]?', 'Новое правило звучит хорошо, но как оно работает на практике каждый день?', 'The new rule sounds good, but what does it look like day to day?')]),

    // Complaining (4)
    C('zeitnahe-loesung', 'complain', ['authorities', 'workcomm', 'home'], 'Ich erwarte eine zeitnahe Lösung bis [Datum].', 'formal', 'Я рассчитываю на оперативное решение до [дата].', 'I expect a prompt solution by [date].',
      [ex('Das Problem besteht seit Mai — [[ich erwarte eine zeitnahe Lösung bis]] Freitag.', 'Проблема тянется с мая — я ожидаю оперативного решения до пятницы.', 'The issue has existed since May — I expect a prompt solution by Friday.')],
      ['Bitte teilen Sie mir bis [Datum] mit, wie wir weiter vorgehen.'], ['Деловое слово zeitnah («в кратчайшие сроки») часто встречается в письмах.', 'zeitnah (“promptly / soon”) is very common in German business correspondence.'], 'c1'),
    C('kann-nicht-bleiben', 'complain', ['home', 'everyday', 'workcomm'], 'So kann das leider nicht bleiben.', 'neutral', 'К сожалению, так оставлять это нельзя.', 'Unfortunately it can’t stay like this.',
      [ex('Im Treppenhaus fällt jeden Abend das Licht aus — [[so kann das leider nicht bleiben]].', 'В подъезде каждый вечер гаснет свет — так это оставлять нельзя.', 'The stairwell light fails every evening — it can’t stay like this.')]),
    C('bereits-hingewiesen', 'complain', ['authorities', 'home'], 'Bereits am [Datum] habe ich auf [X] hingewiesen.', 'formal', 'Уже [дата] я указывал(а) на [X].', 'Back on [date] I already pointed out [X].',
      [ex('[[Bereits am]] 3. April [[habe ich auf]] den Wasserschaden [[hingewiesen]].', 'Ещё 3 апреля я указывал на протечку воды.', 'Back on 3 April I already pointed out the water damage.')],
      [], ['hinweisen auf + Akk. (wies hin, hat hingewiesen).', 'hinweisen auf + Akk.'], 'c1'),
    C('rueckerstattung-betrags', 'complain', ['food', 'authorities'], 'Ich bitte um eine Rückerstattung des Betrags.', 'formal', 'Прошу вернуть уплаченную сумму.', 'I request a refund of the amount.',
      [ex('Da die Lieferung nicht erfolgte, [[bitte ich um eine Rückerstattung des Betrags]].', 'Поскольку доставка не состоялась, прошу вернуть сумму.', 'Since delivery did not take place, I request a refund of the amount.')],
      ['Bitte erstatten Sie den Betrag zurück.'], null, 'b2'),

    // Describing a problem (4)
    C('stoerung-bei', 'problem', ['infra', 'home', 'everyday'], 'Es gibt eine Störung bei [X].', 'neutral', 'Произошёл сбой в работе [X].', 'There is a disruption / fault with [X].',
      [ex('Seit heute Morgen [[gibt es eine Störung bei]] unserem Zahlungssystem.', 'С сегодняшнего утра наблюдается сбой в нашей платёжной системе.', 'Since this morning there has been a disruption to our payment system.')]),
    C('bricht-vorgang-ab', 'problem', ['dev', 'infra'], 'Sobald ich [X] ausführe, bricht der Vorgang ab.', 'neutral', 'Как только я выполняю [X], процесс прерывается.', 'As soon as I run [X], the process aborts.',
      [ex('[[Sobald ich]] den Export [[ausführe, bricht der Vorgang ab]].', 'Как только я запускаю экспорт, операция обрывается.', 'As soon as I run the export, the process aborts.')],
      ['Der Vorgang wird abgebrochen.'], null, 'b2'),
    C('ursache-eingrenzen', 'problem', ['infra', 'dev', 'workcomm'], 'Wir konnten die Ursache inzwischen eingrenzen.', 'formal', 'Нам тем временем удалось локализовать причину.', 'We have now managed to narrow down the cause.',
      [ex('[[Wir konnten die Ursache inzwischen eingrenzen]]: Ein Zertifikat ist abgelaufen.', 'Причину удалось локализовать: истёк срок действия одного сертификата.', 'We’ve narrowed down the cause: a certificate has expired.')],
      ['Die Ursache liegt vermutlich bei …'], null, 'c1'),
    C('fehlermeldung-lautet', 'problem', ['dev', 'infra'], 'Die Fehlermeldung lautet: [X].', 'neutral', 'Сообщение об ошибке гласит: [X].', 'The error message reads: [X].',
      [ex('[[Die Fehlermeldung lautet]]: „Zugriff verweigert“.', 'Текст ошибки: «Доступ запрещён».', 'The error message reads: “Access denied”.')]),

    // Appointments (4)
    C('um-stunde-verschieben', 'appointments', ['workcomm', 'health', 'everyday'], 'Lässt sich der Termin um eine Stunde verschieben?', 'formal', 'Можно ли перенести встречу / приём на час?', 'Can the appointment be moved by an hour?',
      [ex('Mein Zug hat Verspätung — [[lässt sich der Termin um eine Stunde verschieben]]?', 'Мой поезд опаздывает — можно перенести приём на час?', 'My train is delayed — can the appointment be moved by an hour?')]),
    C('ersatztermin-infrage', 'appointments', ['authorities', 'workcomm'], 'Welcher Ersatztermin käme für Sie infrage?', 'formal', 'Какая альтернативная дата могла бы вам подойти?', 'Which alternative date would suit you?',
      [ex('Am Dienstag bin ich unterwegs — [[welcher Ersatztermin käme für Sie infrage]]?', 'Во вторник я в отъезде — какая альтернативная дата вам подойдёт?', 'On Tuesday I’m away — which alternative date would work for you?')],
      [], ['käme — вежливый Konjunktiv II от kommen.', 'käme — polite Konjunktiv II of kommen.'], 'c1'),
    C('termin-absagen', 'appointments', ['health', 'workcomm', 'authorities'], 'Ich muss unseren Termin am [Tag] leider absagen.', 'neutral', 'Мне, к сожалению, придётся отменить нашу встречу в [день].', 'Unfortunately I have to cancel our appointment on [day].',
      [ex('Wegen einer Grippe [[muss ich unseren Termin am]] Montag [[leider absagen]].', 'Из-за гриппа мне придётся отменить нашу встречу в понедельник.', 'Because of flu, I unfortunately have to cancel our Monday appointment.')],
      ['Ich muss den Termin kurzfristig stornieren.']),
    C('naechste-woche-legen', 'appointments', ['workcomm', 'everyday'], 'Könnten wir das Treffen auf nächste Woche legen?', 'neutral', 'Можем ли мы перенести встречу на следующую неделю?', 'Could we schedule the meeting for next week?',
      [ex('Diese Woche ist komplett voll — [[könnten wir das Treffen auf nächste Woche legen]]?', 'Эта неделя полностью забита — можем перенести встречу на следующую?', 'This week is completely packed — could we put the meeting next week?')]),

    // Phone calls (4)
    C('wen-darf-ich-melden', 'phone', ['work', 'authorities'], 'Wen darf ich bitte melden?', 'formal', 'Кого я могу представить / кто звонит?', 'Whom may I say is calling?',
      [ex('Einen Moment, ich stelle Sie durch — [[wen darf ich bitte melden]]?', 'Секунду, я соединю вас — как вас представить?', 'One moment, putting you through — whom may I say is calling?')]),
    C('zurueckrufen', 'phone', ['work', 'authorities', 'workcomm'], 'Könnte Frau / Herr [Name] mich zurückrufen?', 'formal', 'Могла бы госпожа / мог бы господин [Имя] мне перезвонить?', 'Could Ms / Mr [Name] call me back?',
      [ex('Sie ist gerade in einem Gespräch? [[Könnte Frau]] Weber [[mich zurückrufen]]?', 'Она сейчас на разговоре? Могла бы госпожа Вебер мне перезвонить?', 'She’s on another call? Could Ms Weber call me back?')]),
    C('verbindung-bricht-ab', 'phone', ['everyday', 'workcomm'], 'Die Verbindung bricht ab — ich rufe gleich noch einmal an.', 'neutral', 'Связь обрывается — я сейчас перезвоню.', 'The connection is breaking up — I’ll call right back.',
      [ex('Ich sitze gerade im Zug, [[die Verbindung bricht ab — ich rufe gleich noch einmal an]].', 'Я сейчас в поезде, связь пропадает — перезвоню через минуту.', 'I’m on the train, the line is breaking up — I’ll call right back.')]),
    C('heute-erreichbar', 'phone', ['workcomm', 'authorities'], 'Ich bin heute bis [Uhrzeit] unter dieser Nummer erreichbar.', 'formal', 'Сегодня я на связи по этому номеру до [время].', 'I can be reached on this number today until [time].',
      [ex('Falls noch Fragen auftauchen: [[Ich bin heute bis]] 17 Uhr [[unter dieser Nummer erreichbar]].', 'Если появятся вопросы, я сегодня на связи по этому номеру до 17:00.', 'If questions come up, I’m reachable on this number today until 5 p.m.')]),

    // Formal emails (4)
    C('bestaetigen-erhalt', 'email', ['authorities', 'workcomm'], 'Bitte bestätigen Sie den Erhalt dieser Nachricht.', 'formal', 'Пожалуйста, подтвердите получение этого сообщения.', 'Please confirm receipt of this message.',
      [ex('Die Verträge wurden versandt — [[bitte bestätigen Sie den Erhalt dieser Nachricht]].', 'Договоры отправлены — пожалуйста, подтвердите получение сообщения.', 'The contracts have been sent — please confirm receipt of this message.')], null, null, 'b2'),
    C('fuer-rueckfragen', 'email', ['work', 'authorities', 'workcomm'], 'Für Rückfragen stehe ich Ihnen gerne zur Verfügung.', 'formal', 'Если возникнут вопросы, я с радостью в вашем распоряжении.', 'Please don’t hesitate to contact me if you have any questions.',
      [ex('[[Für Rückfragen stehe ich Ihnen gerne zur Verfügung]]. Mit freundlichen Grüßen', 'Если возникнут вопросы, буду рад(а) ответить. С уважением', 'Should you have any questions, I am happy to help. Kind regards')],
      [], ['Классическая завершающая строка любого делового немецкого письма.', 'Classic closing line of a formal German email.'], 'b2'),
    C('anbei-unterlagen', 'email', ['authorities', 'work'], 'Anbei übersende ich Ihnen die gewünschten Unterlagen.', 'formal', 'Во вложении направляю вам запрошенные документы.', 'Attached I am sending you the requested documents.',
      [ex('Wie telefonisch besprochen: [[Anbei übersende ich Ihnen die gewünschten Unterlagen]].', 'Как договорились по телефону, во вложении направляю запрошенные документы.', 'As discussed on the phone, attached are the requested documents.')], null, null, 'c1'),
    C('danke-im-voraus', 'email', ['work', 'authorities', 'workcomm'], 'Ich danke Ihnen im Voraus für Ihre Unterstützung.', 'formal', 'Заранее благодарю вас за поддержку / содействие.', 'Thank you in advance for your support.',
      [ex('[[Ich danke Ihnen im Voraus für Ihre Unterstützung]] in dieser Angelegenheit.', 'Заранее благодарю вас за помощь в этом вопросе.', 'Thank you in advance for your support in this matter.')], null, null, 'b2'),

    // Small talk (4)
    C('lange-nicht-gesehen', 'smalltalk', ['everyday', 'people'], 'Lange nicht gesehen! Wie geht es dir?', 'informal', 'Давно не виделись! Как ты?', 'Long time no see! How are you?',
      [ex('Mensch, Lisa! [[Lange nicht gesehen! Wie geht es dir]] denn?', 'Ого, Лиза! Давно не виделись! Как твои дела?', 'Hey Lisa! Long time no see! How are you doing?')]),
    C('woche-geschafft', 'smalltalk', ['workcomm', 'everyday'], 'Endlich Freitag — die Woche wäre geschafft!', 'informal', 'Наконец-то пятница — неделя позади!', 'Friday at last — we made it through the week!',
      [ex('[[Endlich Freitag — die Woche wäre geschafft]]! Schönes Wochenende!', 'Наконец пятница — с этой неделей всё! Хороших выходных!', 'Friday at last — week done! Have a great weekend!')],
      [], ['wäre geschafft — лёгкий разговорный Konjunktiv с оттенком облегчения.', 'wäre geschafft — colloquial subjunctive expressing relief.']),
    C('kaffee-holen', 'smalltalk', ['workcomm', 'everyday'], 'Ich hole mir kurz einen Kaffee — möchtest du auch einen?', 'informal', 'Я сейчас схожу за кофе — тебе тоже взять?', 'I’m grabbing a coffee — would you like one too?',
      [ex('Kurze Pause? [[Ich hole mir kurz einen Kaffee — möchtest du auch einen]]?', 'Маленький перерыв? Я за кофе — тебе тоже сделать?', 'Quick break? I’m grabbing a coffee — want one too?')]),
    C('urlaub-gewesen', 'smalltalk', ['everyday', 'travel'], 'Wo warst du eigentlich im Urlaub?', 'informal', 'А где ты, кстати, был(а) в отпуске?', 'Where did you go on holiday, by the way?',
      [ex('Du siehst so erholt aus — [[wo warst du eigentlich im Urlaub]]?', 'Выглядишь таким отдохнувшим — где ты был в отпуске?', 'You look so rested — where did you go on holiday?')]),

    // IT · Stand-up (4)
    C('uebernehme-backlog', 'it_standup', ['dev', 'workcomm'], 'Danach übernehme ich [X] aus dem Backlog.', 'neutral', 'После этого я возьму [X] из бэклога.', 'After that I’ll pick up [X] from the backlog.',
      [ex('Wenn die Doku fertig ist, [[übernehme ich]] das Caching-Ticket [[aus dem Backlog]].', 'Когда документация будет готова, возьму тикет про кэширование из бэклога.', 'Once the docs are ready, I’ll pick up the caching ticket from the backlog.')]),
    C('ticket-im-review', 'it_standup', ['dev', 'workcomm'], 'Das Ticket liegt jetzt im Review.', 'neutral', 'Тикет сейчас на ревью.', 'The ticket is in review now.',
      [ex('[[Das Ticket liegt jetzt im Review]] — ich warte noch auf zwei Freigaben.', 'Тикет сейчас в ревью — жду ещё двух апрувов.', 'The ticket is now in review — still waiting on two approvals.')]),
    C('heute-auf-plan', 'it_standup', ['workcomm', 'dev'], 'Heute steht bei mir vor allem [X] auf dem Plan.', 'neutral', 'Сегодня у меня в планах прежде всего [X].', 'Today my main focus is [X].',
      [ex('[[Heute steht bei mir vor allem]] das Update der Firewall-Regeln [[auf dem Plan]].', 'Сегодня у меня в планах прежде всего обновление правил файрвола.', 'Today my main focus is updating the firewall rules.')]),
    C('keine-blocker', 'it_standup', ['workcomm', 'dev'], 'Bei mir gibt es aktuell keine Blocker.', 'neutral', 'На данный момент у меня нет блокеров.', 'I have no blockers at the moment.',
      [ex('Ich liege gut im Zeitplan, [[bei mir gibt es aktuell keine Blocker]].', 'Я иду по графику, блокеров сейчас нет.', 'I’m right on schedule, no blockers on my side.')]),

    // IT · Explaining a bug (4)
    C('nur-unter-bedingung', 'it_bug', ['dev', 'infra'], 'Der Fehler tritt nur unter [X] auf.', 'neutral', 'Ошибка проявляется только в окружении / при условии [X].', 'The bug only shows up under [X].',
      [ex('[[Der Fehler tritt nur unter]] Safari auf dem iPhone [[auf]].', 'Ошибка возникает только в Safari на iPhone.', 'The bug only occurs under Safari on the iPhone.')]),
    C('schritte-ticket', 'it_bug', ['dev', 'workcomm'], 'Ich habe die Schritte zum Reproduzieren ins Ticket geschrieben.', 'neutral', 'Я записал(а) шаги воспроизведения в тикет.', 'I wrote the steps to reproduce into the ticket.',
      [ex('[[Ich habe die Schritte zum Reproduzieren ins Ticket geschrieben]], inklusive Screenshot.', 'Я добавил шаги воспроизведения в тикет вместе со скриншотом.', 'I put the steps to reproduce in the ticket, including a screenshot.')]),
    C('nach-rollback', 'it_bug', ['infra', 'dev'], 'Nach dem Rollback lief wieder alles stabil.', 'neutral', 'После отката всё снова заработало стабильно.', 'After the rollback everything ran stably again.',
      [ex('Wir haben das Release gestoppt — [[nach dem Rollback lief wieder alles stabil]].', 'Мы остановили релиз — после отката всё снова стало стабильно.', 'We stopped the release — after the rollback everything ran smoothly again.')]),
    C('in-den-logs-gesehen', 'it_bug', ['dev', 'infra', 'security'], 'In den Logs sieht man genau, wo es abbricht.', 'neutral', 'В логах точно видно, в каком месте всё падает.', 'You can see in the logs exactly where it fails.',
      [ex('Schau mal hier: [[In den Logs sieht man genau, wo es abbricht]].', 'Посмотри сюда: в логах точно видно, где обрывается запрос.', 'Look here: in the logs you can see right where it breaks.')]),

    // IT · Asking for help (4)
    C('allein-nicht-weiter', 'it_help', ['dev', 'infra'], 'Ich komme an dieser Stelle allein nicht weiter.', 'neutral', 'В этом месте я в одиночку дальше не продвинусь.', 'I can’t get past this point on my own.',
      [ex('Ich habe eine Stunde gesucht, aber [[ich komme an dieser Stelle allein nicht weiter]].', 'Я искал час, но сам здесь дальше не сдвинусь.', 'I searched for an hour, but I can’t get past this point alone.')]),
    C('pair-debugging', 'it_help', ['dev'], 'Hättest du kurz Zeit für ein Pair-Debugging?', 'informal', 'Найдётся пара минут на совместный дебаг?', 'Would you have a minute for quick pair debugging?',
      [ex('[[Hättest du kurz Zeit für ein Pair-Debugging]]? Vier Augen sehen mehr.', 'Есть немного времени на парный дебаг? Две пары глаз видят лучше.', 'Got a minute for quick pair debugging? Four eyes see more.')]),
    C('warum-fehlschlaegt', 'it_help', ['dev', 'infra'], 'Kannst du mir erklären, warum [X] hier fehlschlägt?', 'neutral', 'Можешь объяснить, почему [X] здесь падает?', 'Can you explain why [X] fails here?',
      [ex('[[Kannst du mir erklären, warum]] die Authentifizierung [[hier fehlschlägt]]?', 'Можешь объяснить, почему здесь не проходит аутентификация?', 'Can you explain why authentication fails here?')]),
    C('schon-probiert', 'it_help', ['dev', 'infra'], 'Ich habe schon [X] probiert, aber ohne Erfolg.', 'neutral', 'Я уже пробовал(а) [X], но безуспешно.', 'I’ve already tried [X], without success.',
      [ex('[[Ich habe schon]] einen Neustart [[probiert, aber ohne Erfolg]].', 'Я уже пробовал перезапуск, но без результата.', 'I’ve already tried a restart, without luck.')]),

    // IT · Meetings (4)
    C('risiko-bei', 'it_meeting', ['security', 'workcomm', 'dev'], 'Ich sehe da noch ein Risiko bei [X].', 'neutral', 'Я вижу здесь ещё один риск, связанный с [X].', 'I still see a risk here with [X].',
      [ex('[[Ich sehe da noch ein Risiko bei]] der Speicherung unverschlüsselter Tokens.', 'Я вижу риск в хранении незашифрованных токенов.', 'I still see a risk in storing unencrypted tokens.')]),
    C('welche-alternativen', 'it_meeting', ['workcomm', 'dev'], 'Welche Alternativen haben wir dazu?', 'neutral', 'Какие альтернативы у нас есть к этому варианту?', 'What alternatives do we have to this?',
      [ex('Die Lizenz ist sehr teuer — [[welche Alternativen haben wir dazu]]?', 'Лицензия очень дорогая — какие альтернативы у нас есть?', 'The licence is very expensive — what alternatives do we have?')]),
    C('vor-und-nachteile', 'it_meeting', ['workcomm', 'dev'], 'Können wir die Vor- und Nachteile kurz gegenüberstellen?', 'formal', 'Можем коротко сопоставить плюсы и минусы?', 'Can we briefly compare the pros and cons?',
      [ex('Bevor wir wählen, [[können wir die Vor- und Nachteile kurz gegenüberstellen]]?', 'Прежде чем выбрать, можем сравнить плюсы и минусы?', 'Before we choose, can we briefly weigh the pros and cons?')], null, null, 'b2'),
    C('bevor-wir-entscheiden', 'it_meeting', ['workcomm', 'security'], 'Bevor wir entscheiden, sollten wir [X] berücksichtigen.', 'formal', 'Прежде чем решать, нам стоит учесть [X].', 'Before we decide, we should take [X] into account.',
      [ex('[[Bevor wir entscheiden, sollten wir]] die DSGVO-Vorgaben [[berücksichtigen]].', 'Прежде чем решать, нам нужно учесть требования GDPR.', 'Before we decide, we should take GDPR requirements into account.')], null, null, 'c1')
  ] });
})();

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "chunks",
  "topic": "appointments",
  "items": [
    {
      "id": "telc26-ch-rechtzeitig-bescheid",
      "t": "Bitte geben Sie uns rechtzeitig Bescheid.",
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
      "en": "Please let us know in good time.",
      "ru": "Пожалуйста, сообщите нам заранее.",
      "examples": [
        {
          "t": "Falls Sie den Termin nicht wahrnehmen können, [[geben Sie uns bitte rechtzeitig Bescheid]].",
          "en": "If you cannot attend the appointment, please let us know in good time.",
          "ru": "Если вы не сможете прийти на встречу, пожалуйста, сообщите нам заранее.",
          "de": "Falls Sie den Termin nicht wahrnehmen können, [[geben Sie uns bitte rechtzeitig Bescheid]]."
        }
      ],
      "de": "Bitte geben Sie uns rechtzeitig Bescheid."
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "email",
  "items": [
    {
      "id": "telc26-ch-rechnung-begleichen",
      "t": "Ich werde die Rechnung bis [Datum] begleichen.",
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
      "en": "I will settle the invoice by [date].",
      "ru": "Я оплачу счёт до [дата].",
      "examples": [
        {
          "t": "[[Ich werde die Rechnung bis]] Freitag [[begleichen]].",
          "en": "I will settle the invoice by Friday.",
          "ru": "Я оплачу счёт до пятницы.",
          "de": "[[Ich werde die Rechnung bis]] Freitag [[begleichen]]."
        }
      ],
      "de": "Ich werde die Rechnung bis [Datum] begleichen."
    },
    {
      "id": "telc26-ch-schriftform",
      "t": "[X] bedarf der Schriftform.",
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
      "en": "[X] must be in writing.",
      "ru": "Для [X] требуется письменная форма.",
      "examples": [
        {
          "t": "Laut Entwurf [[bedarf]] eine Änderung der Vereinbarung [[der Schriftform]].",
          "en": "According to the draft, an amendment must be in writing.",
          "ru": "Согласно проекту, для изменения соглашения требуется письменная форма.",
          "de": "Laut Entwurf [[bedarf]] eine Änderung der Vereinbarung [[der Schriftform]]."
        }
      ],
      "de": "[X] bedarf der Schriftform.",
      "note": {
        "en": "Formal German: bedürfen takes the genitive, der Schriftform. The example reports a clause in a draft document; it does not establish a legal rule.",
        "ru": "Формальная конструкция bedürfen + Genitiv: der Schriftform. Пример передаёт условие из проекта документа, а не универсальное юридическое правило."
      }
    },
    {
      "id": "telc26-ch-ab-werk",
      "t": "ab Werk",
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
      "en": "ex works",
      "ru": "с завода",
      "examples": [
        {
          "t": "Das Angebot gilt [[ab Werk]] des Lieferanten.",
          "en": "The quote is ex works at the supplier’s premises.",
          "ru": "В предложении указана отгрузка с завода поставщика.",
          "de": "Das Angebot gilt [[ab Werk]] des Lieferanten."
        }
      ],
      "de": "ab Werk",
      "note": {
        "en": "A commercial delivery expression used in quotations. The actual allocation of costs and duties belongs in the agreed terms.",
        "ru": "Коммерческая формулировка для предложения об отгрузке с предприятия поставщика. Точное распределение расходов и обязанностей определяется конкретными условиями."
      }
    },
    {
      "id": "telc26-ch-nachfrage",
      "t": "Auf Nachfrage senden wir Ihnen [X].",
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
      "en": "On request, we can send you [X].",
      "ru": "По запросу мы можем направить вам [X].",
      "examples": [
        {
          "t": "[[Auf Nachfrage senden wir Ihnen]] das vollständige Datenblatt.",
          "en": "On request, we can send you the complete datasheet.",
          "ru": "По запросу мы можем направить вам полное техническое описание.",
          "de": "[[Auf Nachfrage senden wir Ihnen]] das vollständige Datenblatt."
        }
      ],
      "de": "Auf Nachfrage senden wir Ihnen [X]."
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "it_meeting",
  "items": [
    {
      "id": "telc26-ch-gegenvorschlag",
      "t": "Ich möchte einen Gegenvorschlag machen.",
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
      "en": "I’d like to make a counterproposal.",
      "ru": "Я хотел(а) бы предложить встречный вариант.",
      "examples": [
        {
          "t": "[[Ich möchte einen Gegenvorschlag machen]]: Wir testen zuerst eine kleinere Lösung.",
          "en": "I’d like to make a counterproposal: let’s test a smaller solution first.",
          "ru": "Я хотел бы предложить встречный вариант: сначала проверим более простое решение.",
          "de": "[[Ich möchte einen Gegenvorschlag machen]]: Wir testen zuerst eine kleinere Lösung."
        }
      ],
      "de": "Ich möchte einen Gegenvorschlag machen."
    }
  ]
});

GT.register({
  "tab": "chunks",
  "topic": "complain",
  "items": [
    {
      "id": "telc26-ch-verstaendnis",
      "t": "Wir bitten um Ihr Verständnis.",
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
      "en": "We ask for your understanding.",
      "ru": "Просим отнестись с пониманием.",
      "examples": [
        {
          "t": "Die Lieferung verzögert sich um einen Tag. [[Wir bitten um Ihr Verständnis]].",
          "en": "The delivery is delayed by one day. We ask for your understanding.",
          "ru": "Доставка задерживается на один день. Просим отнестись с пониманием.",
          "de": "Die Lieferung verzögert sich um einen Tag. [[Wir bitten um Ihr Verständnis]]."
        }
      ],
      "de": "Wir bitten um Ihr Verständnis."
    }
  ]
});
