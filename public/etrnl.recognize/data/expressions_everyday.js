/* Expressions -> Everyday Phrases (15 high-frequency German conversational phrases). Learning content in Russian. */
GT.register({ tab: 'expressions', topic: 'everyday', type: 'chunk', items: [
{
  id: 'exp-day-kommt-drauf-an', topic: 'everyday', topics: ['everyday', 'work', 'workcomm'],
  de: 'Das kommt darauf an.', register: 'neutral',
  ru: 'Смотря по обстоятельствам; это зависит от того…',
  examples: [
    { de: 'Wie lange dauert die Analyse? — [[Das kommt darauf an]], wie groß die Logs sind.', ru: 'Сколько займёт анализ? — Смотря какого размера логи.' },
    { de: 'Kommst du heute ins Büro? — [[Kommt drauf an]], wann mein Termin endet.', ru: 'Придёшь сегодня в офис? — Смотря когда закончится моя встреча.' }
  ],
  variations: ['Kommt drauf an. (разг., короче)', 'Es kommt darauf an, ob / wann / wie …'],
  meaningType: 'colloquial',
  meaningExplanation: 'Один из самых частотных ответов в немецкой речи (как английское «It depends»). В разговоре почти всегда сокращают darauf → drauf.',
  meaningExamples: [{ de: 'Kommt drauf an, was wir priorisieren.', ru: 'Зависит от того, что поставим в приоритет.' }],
  note: 'Управление: ankommen auf + Akk. («Es kommt auf das Risiko an»). С придаточным: «Das kommt darauf an, ob …».',
  why: {
    confidence: 'high',
    text: 'Состав: безличное es kommt auf etw. an («зависит от чего-то», от ankommen) + местоименное наречие darauf («на это»).\nПроисхождение: оборот es kommt darauf an закрепился с XVII–XVIII вв. в значении «дело упирается в это / решается этим».\nПрозрачность: устойчивая разговорно-нейтральная конструкция.',
    source: 'DWDS (Pfeifer), s.v. ankommen',
    evidence: 'Безличное es kommt auf etw. an («зависеть от, иметь решающее значение») + darauf.'
  }
},
{
  id: 'exp-day-mal-sehen', topic: 'everyday', topics: ['everyday', 'workcomm'],
  de: 'Mal sehen.', register: 'informal',
  ru: 'Посмотрим; видно будет.',
  examples: [
    { de: 'Schaffen wir das noch vor dem Wochenende? — [[Mal sehen]], ich gebe mein Bestes.', ru: 'Успеем ещё до выходных? — Посмотрим, я сделаю всё возможное.' },
    { de: '[[Mal sehen]], was das Update bringt.', ru: 'Посмотрим, что принесёт обновление.' }
  ],
  variations: ['Schauen wir mal.', 'Mal schauen.', 'Sehen wir mal.'],
  meaningType: 'colloquial',
  meaningExplanation: 'Короткая разговорная формула с частицей mal (от einmal), смягчающая неопределённый ответ. На юге Германии ещё чаще звучит «Schauen wir mal».',
  meaningExamples: [{ de: 'Mal sehen, wie das Wetter morgen wird.', ru: 'Посмотрим, какая завтра будет погода.' }],
  note: 'Безличная форма с инфинитивом (опущено «wir werden»). На письме в деловом контексте лучше «Wir werden sehen» или «Lassen Sie uns abwarten».'
},
{
  id: 'exp-day-kriegen-wir-hin', topic: 'everyday', topics: ['workcomm', 'everyday', 'work'],
  de: 'Das kriegen wir hin.', register: 'informal',
  ru: 'Мы с этим справимся / у нас всё получится / разрулим.',
  examples: [
    { de: 'Keine Panik, [[das kriegen wir hin]]!', ru: 'Без паники, мы это разрулим!' },
    { de: 'Die Deadline ist knapp, aber [[wir kriegen das]] zusammen [[hin]].', ru: 'Дедлайн жёсткий, но вместе мы справимся.' }
  ],
  variations: ['Das schaffen wir schon.', 'Kriegen wir hin!', 'Das bekommen wir hin. (чуть нейтральнее)'],
  meaningType: 'colloquial',
  meaningExplanation: 'Ободряющая разговорная фраза с глаголом hinkriegen («суметь сделать, уладить»). В офисе звучит тепло и уверенно, в официальных письмах заменяется на «Das schaffen wir / bekommen wir hin».',
  meaningExamples: [{ de: 'Bis Freitag kriegen wir das sicher hin.', ru: 'До пятницы мы с этим точно справимся.' }],
  note: 'Глагол hinkriegen — отделяемый: «Wir kriegen das hin», «Ich habe es hingekriegt».'
},
{
  id: 'exp-day-macht-nichts', topic: 'everyday', topics: ['everyday', 'workcomm'],
  de: 'Macht nichts.', register: 'neutral',
  ru: 'Ничего страшного; не беда; неважно.',
  examples: [
    { de: 'Entschuldigung für die Verspätung! — [[Macht nichts]], wir haben gerade erst angefangen.', ru: 'Извините за опоздание! — Ничего страшного, мы только что начали.' },
    { de: 'Ich habe den Link vergessen. — [[Das macht nichts]], schick ihn einfach später.', ru: 'Я забыл ссылку. — Ничего страшного, пришли просто позже.' }
  ],
  variations: ['Das macht gar nichts.', 'Kein Problem.', 'Schon gut.'],
  meaningType: 'colloquial',
  meaningExplanation: 'Сокращение от «Das macht nichts aus» («это ничего не значит / не имеет значения») — стандартный доброжелательный ответ на извинение.',
  meaningExamples: [{ de: 'Macht nichts, kann jedem passieren.', ru: 'Ничего страшного, с каждым бывает.' }],
  note: 'Отрицательная версия вопроса: «Macht es dir etwas aus, wenn …?» — «Ты не против, если …?».'
},
{
  id: 'exp-day-klingt-gut', topic: 'everyday', topics: ['everyday', 'workcomm', 'work'],
  de: 'Klingt gut!', register: 'neutral',
  ru: 'Звучит отлично! Договорились!',
  examples: [
    { de: 'Sollen wir das um 14 Uhr kurz besprechen? — [[Klingt gut]]!', ru: 'Обсудим это коротко в 14:00? — Звучит отлично!' },
    { de: 'Dein Vorschlag [[klingt]] echt [[gut]], lass uns das so machen.', ru: 'Твоё предложение звучит действительно хорошо, давай так и сделаем.' }
  ],
  variations: ['Das klingt nach einem Plan.', 'Hört sich gut an.', 'Super, machen wir so!'],
  note: 'Глагол klingen (звучать): klingt, klang, hat geklungen. В чатах часто просто «Klingt gut 👍».'
},
{
  id: 'exp-day-geht-klar', topic: 'everyday', topics: ['workcomm', 'everyday'],
  de: 'Das geht klar.', register: 'informal',
  ru: 'Договорились; всё понятно, сделаю; без проблем.',
  examples: [
    { de: 'Kannst du das Ticket heute noch schließen? — [[Geht klar]]!', ru: 'Можешь закрыть тикет ещё сегодня? — Сделаю / без проблем!' },
    { de: 'Treffen wir uns um neun? — [[Das geht klar]].', ru: 'Встретимся в девять? — Договорились.' }
  ],
  variations: ['Alles klar!', 'Geht in Ordnung.', 'Wird gemacht!'],
  meaningType: 'colloquial',
  meaningExplanation: 'Быстрое разговорное подтверждение в командном чате или устно (короче и живее официального «Einverstanden»).',
  meaningExamples: [{ de: 'Geht klar, ich kümmere mich darum.', ru: 'Принято, я этим займусь.' }],
  note: 'Чуть более деловой аналог — «Geht in Ordnung» («принято, в порядке»).'
},
{
  id: 'exp-day-ehrlich-gesagt', topic: 'everyday', topics: ['everyday', 'workcomm', 'work'],
  de: 'Ehrlich gesagt, [Verb] …', register: 'neutral',
  ru: 'Честно говоря, …',
  examples: [
    { de: '[[Ehrlich gesagt]] habe ich dieses Tool noch nie benutzt.', ru: 'Честно говоря, я этим инструментом ещё ни разу не пользовался.' },
    { de: '[[Ehrlich gesagt]] finde ich die alte Lösung einfacher.', ru: 'Честно говоря, старое решение кажется мне проще.' }
  ],
  variations: ['Um ehrlich zu sein, …', 'Ganz ehrlich: …'],
  note: 'После «Ehrlich gesagt» в начале предложения сразу идёт глагол (инверсия): «Ehrlich gesagt habe ich keine Zeit» (или ставится двоеточие с паузой в разговорной речи).'
},
{
  id: 'exp-day-so-oder-so', topic: 'everyday', topics: ['everyday', 'workcomm'],
  de: 'So oder so', register: 'neutral',
  ru: 'Так или иначе; в любом случае.',
  examples: [
    { de: '[[So oder so]] müssen wir den Server am Wochenende neu starten.', ru: 'Так или иначе, на выходных нам придётся перезагрузить сервер.' },
    { de: 'Das Problem tritt [[so oder so]] wieder auf, wenn wir nicht patchen.', ru: 'Проблема в любом случае вернётся, если мы не поставим патч.' }
  ],
  variations: ['Auf jeden Fall', 'Wie auch immer', 'Sowieso (всё равно)'],
  note: 'Удобная связка, чтобы подвести итог обсуждения и перейти к действию.'
},
{
  id: 'exp-day-lohnt-sich', topic: 'everyday', topics: ['everyday', 'work', 'workcomm'],
  de: 'Es lohnt sich (nicht).', register: 'neutral',
  ru: 'Это стоит того (не стоит усилий / денег / времени).',
  examples: [
    { de: '[[Es lohnt sich]], diese Alerts zu automatisieren.', ru: 'Стоит автоматизировать эти алерты.' },
    { de: 'Für zwei Tage [[lohnt es sich nicht]], ein Auto zu mieten.', ru: 'На два дня не стоит арендовать машину.' }
  ],
  variations: ['Der Aufwand lohnt sich.', 'Das lohnt sich wirklich!'],
  note: 'Часто строится с инфинитивом с zu: «Es lohnt sich, … zu + Inf.». Лично: «Der Kurs lohnt sich für mich».'
},
{
  id: 'exp-day-hauptsache', topic: 'everyday', topics: ['everyday', 'workcomm'],
  de: 'Hauptsache, [X].', register: 'informal',
  ru: 'Главное, чтобы [X].',
  examples: [
    { de: 'Mir ist egal, welches Tool wir nehmen — [[Hauptsache]], es läuft stabil.', ru: 'Мне всё равно, какой инструмент мы возьмём — главное, чтобы работал стабильно.' },
    { de: '[[Hauptsache]], alle sind gesund!', ru: 'Главное, чтобы все были здоровы!' }
  ],
  variations: ['Die Hauptsache ist, dass … (нейтральнее)'],
  meaningType: 'colloquial',
  meaningExplanation: 'В живой речи после «Hauptsache,» часто идёт прямой порядок слов (как главное предложение), без «dass»: «Hauptsache, es funktioniert».',
  meaningExamples: [{ de: 'Hauptsache, wir schaffen den Termin.', ru: 'Главное, чтобы мы успели к сроку.' }],
  note: 'В официальном тексте лучше полная форма с dass: «Die Hauptsache ist, dass wir pünktlich liefern».'
},
{
  id: 'exp-day-macht-sinn', topic: 'everyday', topics: ['workcomm', 'everyday', 'work'],
  de: 'Das macht Sinn.', register: 'neutral',
  ru: 'В этом есть смысл; это логично.',
  examples: [
    { de: 'Ja, [[das macht Sinn]] — lass uns zuerst die Firewall-Logs prüfen.', ru: 'Да, это логично — давай сначала проверим логи файрвола.' },
    { de: '[[Macht das Sinn]], die Regel noch strenger einzustellen?', ru: 'Имеет ли смысл сделать правило ещё строже?' }
  ],
  variations: ['Das ergibt Sinn. (официальнее / стилистически строже)', 'Das ist sinnvoll.'],
  note: 'В живой речи и в IT «Das macht Sinn» звучит повсюду. В письменных отчётах педанты предпочитают «Das ergibt Sinn» или «Das ist sinnvoll».'
},
{
  id: 'exp-day-nur-zur-info', topic: 'everyday', topics: ['workcomm', 'work'],
  de: 'Nur zur Info: [X].', register: 'neutral',
  ru: 'Просто для информации (FYI): [X].',
  examples: [
    { de: '[[Nur zur Info]]: Ich bin morgen erst ab 10 Uhr erreichbar.', ru: 'Просто для инфы: я завтра на связи только с 10.' },
    { de: '[[Nur zur Info]], das Wartungsfenster wurde auf Sonntag verschoben.', ru: 'Для информации: окно обслуживания перенесли на воскресенье.' }
  ],
  variations: ['Kurz zur Info: …', 'Zur Information: … (официальнее)', 'FYI (в IT-чатах)'],
  note: 'Идеальная короткая подводка для сообщений в Slack/Teams, когда от коллеги не требуется немедленного действия.'
},
{
  id: 'exp-day-gleich-wieder-da', topic: 'everyday', topics: ['workcomm', 'everyday'],
  de: 'Ich bin gleich wieder da.', register: 'neutral',
  ru: 'Я сейчас вернусь (буду через минуту).',
  examples: [
    { de: 'Ich hole mir kurz einen Kaffee, [[ich bin gleich wieder da]].', ru: 'Схожу быстро за кофе, сейчас вернусь.' },
    { de: 'Moment, mein Laptop startet neu — [[bin gleich wieder da]].', ru: 'Секунду, ноутбук перезагружается — скоро вернусь.' }
  ],
  variations: ['Bin gleich zurück.', 'Einen Moment, ich bin sofort wieder da.'],
  note: 'В чате часто опускают «Ich»: «Bin gleich wieder da» (немецкий аналог «brb»).'
},
{
  id: 'exp-day-kein-ding', topic: 'everyday', topics: ['everyday', 'workcomm'],
  de: 'Kein Ding! / Kein Problem!', register: 'informal',
  ru: 'Пустяки! Без проблем! Не за что!',
  examples: [
    { de: 'Danke, dass du das Ticket übernommen hast! — [[Kein Ding]], gerne!', ru: 'Спасибо, что взял тикет на себя! — Да пустяки, не за что!' },
    { de: 'Kannst du mir kurz helfen? — Klar, [[kein Problem]]!', ru: 'Можешь коротко помочь? — Конечно, без проблем!' }
  ],
  variations: ['Kein Thema!', 'Gerne!', 'Nichts zu danken.', 'Keine Ursache!'],
  meaningType: 'colloquial',
  meaningExplanation: '«Kein Ding» и «Kein Thema» — неформальные дружеские ответы на благодарность или просьбу (на «ты»); с незнакомыми и руководством используйте «Gerne» или «Kein Problem».',
  meaningExamples: [{ de: 'Danke für die Hilfe! — Kein Ding!', ru: 'Спасибо за помощь! — Без проблем!' }],
  note: 'Одно слово «Gerne!» («с удовольствием!») — самый универсальный и вежливый немецкий ответ на «Danke».'
},
{
  id: 'exp-day-schauen-wir-mal', topic: 'everyday', topics: ['everyday', 'workcomm'],
  de: 'Lass uns mal schauen.', register: 'informal',
  ru: 'Давай посмотрим (разберёмся вместе).',
  examples: [
    { de: '[[Lass uns mal schauen]], warum der Login fehlschlägt.', ru: 'Давай посмотрим, почему не проходит логин.' },
    { de: '[[Lassen Sie uns gemeinsam schauen]], wie wir das lösen können. (на «Sie»)', ru: 'Давайте вместе посмотрим, как мы можем это решить.' }
  ],
  variations: ['Schauen wir mal zusammen drauf.', 'Gucken wir mal. (север Германии)'],
  meaningType: 'colloquial',
  meaningExplanation: 'Живая кооперативная фраза для начала разбора задачи вдвоём (на «du» — Lass uns…, на «Sie» — Lassen Sie uns…).',
  meaningExamples: [{ de: 'Lass uns mal kurz in die Logs schauen.', ru: 'Давай быстро заглянем в логи.' }],
  note: 'Частица «mal» делает предложение мягким и ненавязчивым — немцы используют её почти в каждой устной просьбе.'
}
]});
