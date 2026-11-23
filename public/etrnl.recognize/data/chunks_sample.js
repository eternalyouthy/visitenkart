/* Chunks (Redemittel). topic = function id; topics = situations (Words / IT topic ids) for the filter.
 * [X] = variable slot; [[…]] marks the chunk inside an example (used for cloze). ru = meaning. */
GT.register({ tab: 'chunks', items: [
{
  id: 'ch-opinion-meiner-meinung-nach', topic: 'opinion', topics: ['everyday', 'work', 'society', 'workcomm'],
  de: 'Meiner Meinung nach [Verb] …', register: 'neutral',
  ru: 'По-моему, на мой взгляд …',
  examples: [
    { de: '[[Meiner Meinung nach]] ist Homeoffice produktiver.', ru: 'По-моему, из дома работать продуктивнее.' },
    { de: '[[Meiner Meinung nach]] sollten wir zuerst die kritischen Lücken schließen.', ru: 'На мой взгляд, сначала нужно закрыть критические дыры.' }
  ],
  variations: ['Ich finde, dass …', 'Ich denke, …', 'Aus meiner Sicht …'],
  note: 'Глагол идёт СРАЗУ после «nach» (на втором месте): «Meiner Meinung nach ist das zu teuer», а не «Meiner Meinung nach das ist …». Русский порядок слов делает эту ошибку самой частой.'
},
{
  id: 'ch-opinion-ich-bin-der-meinung', topic: 'opinion', topics: ['society', 'work', 'workcomm'],
  de: 'Ich bin der Meinung, dass [X].', register: 'neutral',
  ru: 'Я считаю, что [X].',
  examples: [
    { de: '[[Ich bin der Meinung, dass]] wir mehr Zeit für Tests brauchen.', ru: 'Я считаю, что нам нужно больше времени на тесты.' },
    { de: '[[Ich bin der Meinung, dass]] Kinder weniger am Handy sein sollten.', ru: 'Я считаю, что детям стоит меньше сидеть в телефоне.' }
  ],
  variations: ['Ich bin überzeugt, dass …', 'Ich bin mir sicher, dass …'],
  note: 'После «dass» глагол уходит в конец. Чуть официальнее, чем «Ich finde», — хорошо для дискуссий и устной части экзамена B1.'
},
{
  id: 'ch-agree-da-hast-du-recht', topic: 'agree', topics: ['everyday', 'workcomm'],
  de: 'Da hast du recht, aber [X].', register: 'informal',
  ru: 'Тут ты прав(а), но [X].',
  examples: [
    { de: '[[Da hast du recht]], aber wir haben dafür kein Budget.', ru: 'Тут ты прав, но у нас на это нет бюджета.' },
    { de: '[[Da haben Sie recht]], das habe ich vergessen.', ru: 'Тут вы правы, я об этом забыл.' }
  ],
  variations: ['Das stimmt, aber …', 'Da bin ich ganz deiner Meinung.', 'Da haben Sie recht. (формально)'],
  meaningType: 'colloquial',
  meaningExplanation: 'Обращение на «du» и непринуждённая разговорная конструкция — для общения с коллегами на «ты» и друзьями, но не для официального письма.',
  meaningExamples: [{ de: 'Da hast du recht, aber wir müssen noch testen.', ru: 'Тут ты прав, но нам ещё нужно потестировать.' }],
  note: '«Recht haben» (recht — с маленькой буквы). Сначала согласиться, потом добавить «aber» — вежливый немецкий способ частично возразить.'
},
{
  id: 'ch-agree-anderer-meinung', topic: 'agree', topics: ['society', 'workcomm'],
  de: 'Da bin ich anderer Meinung.', register: 'neutral',
  ru: 'Тут я с вами не согласен / не согласна.',
  examples: [
    { de: '[[Da bin ich anderer Meinung]]: Das Problem ist nicht die Hardware.', ru: 'Тут я не согласен: проблема не в железе.' },
    { de: 'Tut mir leid, aber [[da bin ich anderer Meinung]].', ru: 'Извините, но тут я с вами не согласна.' }
  ],
  variations: ['Das sehe ich anders.', 'Da muss ich widersprechen. (формально)', 'Ich weiß nicht, ob das stimmt.'],
  note: 'Генитив без предлога: «anderer Meinung sein». Чётко, но не грубо. Мягче: «Das sehe ich ein bisschen anders».'
},
{
  id: 'ch-clarify-erklaeren', topic: 'clarify', topics: ['authorities', 'health', 'work', 'workcomm'],
  de: 'Könnten Sie mir bitte [X] erklären?', register: 'formal',
  ru: 'Не могли бы вы объяснить мне [X]?',
  examples: [
    { de: '[[Könnten Sie mir bitte]] den Unterschied [[erklären]]?', ru: 'Не могли бы вы объяснить мне разницу?' },
    { de: '[[Könntest du mir bitte]] kurz die Architektur [[erklären]]?', ru: 'Можешь коротко объяснить мне архитектуру?' }
  ],
  variations: ['Wie meinen Sie das genau?', 'Könnten Sie das bitte noch einmal wiederholen?', 'Könnten Sie bitte etwas langsamer sprechen?'],
  note: 'Konjunktiv II «könnten» делает просьбу вежливой. Объект [X] стоит в середине, «erklären» — в конце.'
},
{
  id: 'ch-clarify-was-meinen-sie', topic: 'clarify', topics: ['work', 'workcomm', 'authorities'],
  de: 'Was meinen Sie genau mit [X]?', register: 'neutral',
  ru: 'Что именно вы имеете в виду под [X]?',
  examples: [
    { de: '[[Was meinen Sie genau mit]] „zeitnah“?', ru: 'Что именно вы имеете в виду под «в ближайшее время»?' },
    { de: '[[Was meinst du genau mit]] „Der Build ist rot“?', ru: 'Что именно ты имеешь в виду под «сборка красная»?' }
  ],
  variations: ['Was bedeutet [X]?', 'Wie ist das gemeint?'],
  note: '«Meinen mit» — иметь в виду под. Для людей не используют «bedeuten»: «Was bedeutest du?» — ошибка; правильно «Was meinst du?».'
},
{
  id: 'ch-clarify-richtig-verstanden', topic: 'clarify', topics: ['authorities', 'work', 'workcomm'],
  de: 'Habe ich Sie richtig verstanden, dass [X]?', register: 'formal',
  ru: 'Я правильно вас понял(а), что [X]?',
  examples: [
    { de: '[[Habe ich Sie richtig verstanden, dass]] ich die Unterlagen per Post schicken muss?', ru: 'Я правильно вас поняла, что документы нужно отправить почтой?' },
    { de: '[[Habe ich dich richtig verstanden]]: Wir rollen erst am Montag aus?', ru: 'Я правильно понял: мы выкатываем только в понедельник?' }
  ],
  variations: ['Das heißt also, …?', 'Wenn ich das richtig verstehe, …'],
  note: 'Отлично подходит, чтобы уточнить детали в Bürgeramt или на встрече. После «dass» глагол в конце.'
},
{
  id: 'ch-complain-beschweren', topic: 'complain', topics: ['home', 'food', 'travel'],
  de: 'Ich möchte mich über [X] beschweren.', register: 'formal',
  ru: 'Я хотел(а) бы пожаловаться на [X].',
  examples: [
    { de: '[[Ich möchte mich über]] den Lärm im Haus [[beschweren]].', ru: 'Я хотел бы пожаловаться на шум в доме.' },
    { de: 'Ich habe mich schon zweimal bei der Hausverwaltung [[beschwert]].', ru: 'Я уже дважды жаловалась в управляющую компанию.' }
  ],
  variations: ['Leider bin ich mit [X] nicht zufrieden.', 'Ich möchte [X] reklamieren.'],
  note: '«Sich über etw. (Akk.) bei jdm. (Dat.) beschweren». Русское «жаловаться на» → немецкое «über», а не «auf». «Reklamieren» — предъявить претензию к бракованному товару.'
},
{
  id: 'ch-problem-problem-mit', topic: 'problem', topics: ['everyday', 'home', 'workcomm'],
  de: 'Ich habe ein Problem mit [X].', register: 'neutral',
  ru: 'У меня проблема с [X].',
  examples: [
    { de: '[[Ich habe ein Problem mit]] meinem Laptop: Er startet nicht mehr.', ru: 'У меня проблема с ноутбуком: он больше не включается.' },
    { de: '[[Ich habe ein Problem mit]] meiner Rechnung.', ru: 'У меня проблема со счётом.' }
  ],
  variations: ['[X] funktioniert nicht richtig.', 'Mit [X] stimmt etwas nicht.'],
  note: '«Mit» + Dativ: mit meinem Laptop, mit meiner Rechnung. Затем объясните во втором предложении — именно так начинаются звонки в немецкую поддержку.'
},
{
  id: 'ch-problem-funktioniert-nicht-mehr', topic: 'problem', topics: ['home', 'infra', 'workcomm'],
  de: '[X] funktioniert seit [Zeit] nicht mehr.', register: 'neutral',
  ru: '[X] не работает с [время] / уже [время].',
  examples: [
    { de: 'Die Heizung [[funktioniert seit]] gestern [[nicht mehr]].', ru: 'Отопление не работает со вчерашнего дня.' },
    { de: 'Der VPN-Zugang [[funktioniert seit]] dem Update [[nicht mehr]].', ru: 'VPN не работает после обновления.' }
  ],
  variations: ['[X] geht nicht mehr. (разг.)', '[X] ist kaputt.'],
  note: 'Настоящее время с «seit» (как и в русском «не работает с …»): Perfekt здесь не нужен. «Seit» + Dativ: seit dem Update, seit einer Woche.'
},
{
  id: 'ch-problem-seit-beschwerden', topic: 'problem', topics: ['health'],
  de: 'Ich habe seit [Zeit] [Beschwerden].', register: 'neutral',
  ru: 'У меня уже [время] [симптомы].',
  examples: [
    { de: '[[Ich habe seit]] drei Tagen Halsschmerzen.', ru: 'У меня уже три дня болит горло.' },
    { de: '[[Ich habe seit]] einer Woche Probleme beim Schlafen.', ru: 'Уже неделю у меня проблемы со сном.' }
  ],
  variations: ['Seit gestern tut mir [Körperteil] weh.', 'Mir ist schwindelig / übel.'],
  note: 'Стандартное начало у врача. «Seit» + Dativ: seit drei Tagen (Dativ мн. ч. на -n), seit einer Woche.'
},
{
  id: 'ch-phone-krankmelden', topic: 'phone', topics: ['health', 'work'],
  de: 'Ich möchte mich heute krankmelden.', register: 'neutral',
  ru: 'Я хотел(а) бы сообщить, что сегодня болею (не выйду на работу).',
  examples: [
    { de: 'Guten Morgen, ich [[möchte mich]] heute [[krankmelden]].', ru: 'Доброе утро, хочу сообщить, что сегодня заболел.' },
    { de: 'Ich habe mich gestern [[krankgemeldet]] und gehe heute zum Arzt.', ru: 'Вчера я взяла больничный, а сегодня иду к врачу.' }
  ],
  variations: ['Ich bin krankgeschrieben.', 'Ich bin leider krank und kann heute nicht kommen.'],
  note: 'Сообщить о болезни нужно в первое же утро. По закону справка от врача (Krankschreibung, AU) нужна с 4-го дня, но работодатель может потребовать раньше. Сейчас врач отправляет её в электронном виде (eAU).'
},
{
  id: 'ch-appointments-termin-bei', topic: 'appointments', topics: ['health', 'authorities'],
  de: 'Ich hätte gern einen Termin bei [X].', register: 'neutral',
  ru: 'Я хотел(а) бы записаться к [X].',
  examples: [
    { de: '[[Ich hätte gern einen Termin bei]] Frau Dr. Lang.', ru: 'Я хотел бы записаться к доктору Ланг.' },
    { de: '[[Ich hätte gern einen Termin]] für eine Vorsorgeuntersuchung.', ru: 'Я хотела бы записаться на профилактический осмотр.' }
  ],
  variations: ['Haben Sie diese Woche noch einen Termin frei?', 'Wann hätten Sie Zeit?'],
  note: '«Termin bei» + человек (Dativ), «Termin für» + цель. Помните: der Termin ≠ термин. Это запись, встреча, а не научный термин.'
},
{
  id: 'ch-appointments-verschieben', topic: 'appointments', topics: ['health', 'work', 'authorities'],
  de: 'Ich muss meinen Termin leider verschieben.', register: 'neutral',
  ru: 'К сожалению, мне нужно перенести запись / встречу.',
  examples: [
    { de: '[[Ich muss meinen Termin]] am Dienstag [[leider verschieben]].', ru: 'К сожалению, мне нужно перенести запись во вторник.' },
    { de: 'Mir ist etwas dazwischengekommen, deshalb [[muss ich]] unseren [[Termin verschieben]].', ru: 'У меня кое-что случилось, поэтому мне нужно перенести нашу встречу.' }
  ],
  variations: ['Mir ist etwas dazwischengekommen.', 'Ich muss den Termin leider absagen.', 'Ginge es auch am Donnerstag?'],
  note: '«Verschieben» — перенести; «absagen» — отменить. «Mir ist etwas dazwischengekommen» — у меня кое-что случилось / непредвиденные обстоятельства. Очень полезно и вежливо.'
},
{
  id: 'ch-appointments-passt-es', topic: 'appointments', topics: ['work', 'workcomm'],
  de: 'Passt es Ihnen am [Tag] um [Uhrzeit]?', register: 'neutral',
  ru: 'Вам удобно в [день] в [время]?',
  examples: [
    { de: '[[Passt es Ihnen am]] Mittwoch [[um]] zehn?', ru: 'Вам удобно в среду в десять?' },
    { de: '[[Passt es dir]] morgen [[um]] neun? Dann gehen wir das Ticket zusammen durch.', ru: 'Тебе удобно завтра в девять? Тогда вместе разберём тикет.' }
  ],
  variations: ['Wie wäre es mit [Tag]?', 'Hätten Sie am [Tag] Zeit?'],
  note: '«Passen» + Dativ: Passt es Ihnen / dir? «Am» — с днями, «um» — со временем на часах.'
},
{
  id: 'ch-phone-verbinden', topic: 'phone', topics: ['authorities', 'work'],
  de: 'Könnten Sie mich bitte mit [X] verbinden?', register: 'formal',
  ru: 'Не могли бы вы соединить меня с [X]?',
  examples: [
    { de: '[[Könnten Sie mich bitte mit]] der Buchhaltung [[verbinden]]?', ru: 'Не могли бы вы соединить меня с бухгалтерией?' },
    { de: '[[Könnten Sie mich bitte mit]] Herrn Krüger [[verbinden]]?', ru: 'Соедините меня, пожалуйста, с господином Крюгером.' }
  ],
  variations: ['Ich rufe wegen [X] an.', 'Kann ich eine Nachricht hinterlassen?', 'Wann ist Frau [X] wieder erreichbar?'],
  note: '«Mit» + Dativ: mit der Buchhaltung, mit Herrn Krüger (Herr → Herrn в Dativ!).'
},
{
  id: 'ch-phone-wegen', topic: 'phone', topics: ['authorities', 'home', 'health'],
  de: 'Ich rufe wegen [X] an.', register: 'neutral',
  ru: 'Я звоню по поводу [X].',
  examples: [
    { de: 'Guten Tag, [[ich rufe wegen]] meiner Rechnung [[an]].', ru: 'Добрый день, я звоню по поводу своего счёта.' },
    { de: '[[Ich rufe wegen]] des Termins am Freitag [[an]].', ru: 'Я звоню по поводу записи на пятницу.' }
  ],
  variations: ['Es geht um [X].', 'Ich habe eine Frage zu [X].'],
  note: '«Wegen» + Genitiv на письме (wegen des Termins); в устной речи слышно и Dativ (wegen dem Termin). «Anrufen» — отделяемый: «an» уходит в конец.'
},
{
  id: 'ch-email-sehr-geehrte', topic: 'email', topics: ['authorities', 'work'],
  de: 'Sehr geehrte Damen und Herren,', register: 'formal',
  ru: 'Уважаемые дамы и господа,',
  examples: [
    { de: '[[Sehr geehrte Damen und Herren]], ich schreibe Ihnen wegen meiner Bestellung.', ru: 'Уважаемые дамы и господа, я пишу вам по поводу своего заказа.' },
    { de: '[[Sehr geehrte]] Frau Schmidt, vielen Dank für Ihre Nachricht.', ru: 'Уважаемая госпожа Шмидт, большое спасибо за ваше сообщение.' }
  ],
  variations: ['Sehr geehrte Frau [Name],', 'Sehr geehrter Herr [Name],', 'Hallo Frau [Name], (полуофициально)'],
  note: 'После запятой продолжайте со следующей строки с маленькой буквы: «ich schreibe Ihnen …». Окончания: geehrte Frau, geehrter Herr. Заканчивайте «Mit freundlichen Grüßen» (без запятой после).'
},
{
  id: 'ch-email-freue-mich-auf', topic: 'email', topics: ['work', 'authorities', 'workcomm'],
  de: 'Ich freue mich auf Ihre Rückmeldung.', register: 'formal',
  ru: 'Буду рад(а) вашему ответу. / Жду вашего ответа.',
  examples: [
    { de: 'Vielen Dank im Voraus. [[Ich freue mich auf Ihre Rückmeldung]].', ru: 'Заранее спасибо. Буду ждать вашего ответа.' },
    { de: '[[Ich freue mich auf deine Rückmeldung]] zum Entwurf.', ru: 'Жду твоего фидбэка по черновику.' }
  ],
  variations: ['Für Rückfragen stehe ich Ihnen gern zur Verfügung.', 'Vielen Dank im Voraus.'],
  note: '«Sich freuen auf» — радоваться тому, что будет; «sich freuen über» — радоваться тому, что уже есть или случилось. Частая путаница.'
},
{
  id: 'ch-smalltalk-wochenende', topic: 'smalltalk', topics: ['everyday', 'work', 'leisure'],
  de: 'Wie war dein Wochenende?', register: 'informal',
  ru: 'Как прошли выходные?',
  examples: [
    { de: 'Na, [[wie war dein Wochenende]]? Warst du wandern?', ru: 'Ну, как выходные? Ходил в поход?' },
    { de: '[[Wie war Ihr Wochenende]]? Hatten Sie schönes Wetter?', ru: 'Как прошли ваши выходные? Погода была хорошая?' }
  ],
  variations: ['Hast du was Schönes gemacht?', 'Und, alles gut bei dir?'],
  meaningType: 'colloquial',
  meaningExplanation: 'Неформальный дружеский small talk на «du» (в понедельник на кухне офиса или в чате с близкими коллегами; на «Sie» будет «Wie war Ihr Wochenende?»).',
  meaningExamples: [{ de: 'Hey, wie war dein Wochenende?', ru: 'Привет, как прошли выходные?' }],
  note: 'Тот самый вопрос понедельничного утра в любом немецком офисе. Достаточно короткого ответа и встречного вопроса: «Ganz entspannt, und deins?»'
},
{
  id: 'ch-standup-gestern-heute', topic: 'it_standup', topics: ['workcomm', 'dev'],
  de: 'Gestern habe ich an [X] gearbeitet, heute kümmere ich mich um [Y].', register: 'neutral',
  ru: 'Вчера я работал(а) над [X], сегодня займусь [Y].',
  examples: [
    { de: '[[Gestern habe ich an]] dem Login-Bug [[gearbeitet]], [[heute kümmere ich mich um]] die Tests.', ru: 'Вчера я работал над багом логина, сегодня займусь тестами.' },
    { de: '[[Heute kümmere ich mich um]] das Ticket mit den Zertifikaten.', ru: 'Сегодня я займусь тикетом с сертификатами.' }
  ],
  variations: ['Blocker habe ich keine.', 'Ich hänge noch an [X].', 'Mit [X] bin ich noch nicht fertig.'],
  note: '«An etw. (Dat.) arbeiten», «sich um etw. (Akk.) kümmern». «Ich hänge an [X]» — я застрял на X (разг.).'
},
{
  id: 'ch-bug-wenn-ich', topic: 'it_bug', topics: ['workcomm', 'dev'],
  de: 'Wenn ich [X], passiert [Y]. Eigentlich sollte [Z].', register: 'neutral',
  ru: 'Когда я [X], происходит [Y]. Вообще-то должно [Z].',
  examples: [
    { de: '[[Wenn ich]] auf „Speichern“ klicke, [[passiert]] gar nichts. [[Eigentlich sollte]] eine Bestätigung kommen.', ru: 'Когда я нажимаю «Сохранить», ничего не происходит. Вообще-то должно появиться подтверждение.' },
    { de: '[[Wenn ich]] die Datei hochlade, [[passiert]] ein Timeout.', ru: 'Когда я загружаю файл, происходит таймаут.' }
  ],
  variations: ['Ich kann den Fehler reproduzieren.', 'Der Fehler tritt nur auf, wenn …', 'Seit dem letzten Release …'],
  note: 'Идеальный баг-репорт из трёх частей: действие → результат → ожидание. После придаточного с wenn главное предложение начинается с глагола: «…, passiert nichts».'
},
{
  id: 'ch-help-komme-nicht-weiter', topic: 'it_help', topics: ['workcomm', 'dev', 'infra'],
  de: 'Hast du kurz Zeit? Ich komme bei [X] nicht weiter.', register: 'informal',
  ru: 'Есть минутка? Я застрял(а) с [X].',
  examples: [
    { de: '[[Hast du kurz Zeit?]] [[Ich komme bei]] der Konfiguration [[nicht weiter]].', ru: 'Есть минутка? Я застрял с конфигурацией.' },
    { de: '[[Ich komme bei]] diesem Ticket einfach [[nicht weiter]].', ru: 'С этим тикетом я никак не могу сдвинуться.' }
  ],
  variations: ['Kannst du mal kurz draufschauen?', 'Weißt du, wer sich mit [X] auskennt?'],
  meaningType: 'colloquial',
  meaningExplanation: 'Живая неформальная просьба о помощи на «du»; оборот «nicht weiterkommen» (букв. «не продвигаться дальше») звучит естественно в командном чате.',
  meaningExamples: [{ de: 'Hast du kurz Zeit? Ich komme bei dem Fehler nicht weiter.', ru: 'Есть минутка? Я застрял с этой ошибкой.' }],
  note: '«Nicht weiterkommen bei + Dat.» — застрять. «Sich mit etw. auskennen» — хорошо разбираться в чём-то.'
},
{
  id: 'ch-meeting-sehe-das-anders', topic: 'it_meeting', topics: ['workcomm', 'work'],
  de: 'Ich sehe das ein bisschen anders, weil [X].', register: 'neutral',
  ru: 'Я смотрю на это немного иначе, потому что [X].',
  examples: [
    { de: '[[Ich sehe das ein bisschen anders]], weil wir das Risiko noch gar nicht bewertet haben.', ru: 'Я смотрю на это немного иначе, потому что мы ещё даже не оценили риск.' },
    { de: 'Guter Punkt, [[ich sehe das]] aber [[ein bisschen anders]].', ru: 'Хорошее замечание, но я вижу это немного по-другому.' }
  ],
  variations: ['Ich bin mir nicht sicher, ob das die beste Lösung ist.', 'Darf ich kurz einen anderen Punkt einbringen?'],
  note: '«Ein bisschen» смягчает несогласие — очень по-немецки в офисе. После «weil» глагол в конце.'
},
{
  id: 'ch-meeting-waere-es-nicht-besser', topic: 'it_meeting', topics: ['workcomm', 'security', 'dev'],
  de: 'Wäre es nicht besser, wenn wir [X] würden?', register: 'neutral',
  ru: 'Не лучше ли было бы, если бы мы [X]?',
  examples: [
    { de: '[[Wäre es nicht besser, wenn]] wir das Update erst testen würden?', ru: 'Не лучше ли было бы сначала протестировать обновление?' },
    { de: '[[Wäre es nicht besser, wenn]] das Team selbst entscheidet?', ru: 'Не лучше ли, чтобы команда решала сама?' }
  ],
  variations: ['Wie wäre es, wenn wir …?', 'Vielleicht könnten wir …'],
  note: 'Предложение в форме вопроса — так оно не звучит как критика. Konjunktiv II (wäre, würden). В разговоре вторая часть может быть и в настоящем времени: «…, wenn das Team selbst entscheidet?»'
}
]});
