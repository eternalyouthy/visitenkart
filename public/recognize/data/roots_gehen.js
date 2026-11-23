/* ROOT: gehen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'gehen', verb: 'gehen', ru: 'идти, ходить',
  words: [
    {
      id: 'r-gehen-gehen', base: true, pos: 'verb',
      de: 'gehen', forms: { praes: 'geht', praet: 'ging', perf: 'ist gegangen' }, gov: 'zu / in / nach · es geht um + Akk.',
      ru: 'идти, ходить; (es geht) идти (о делах), работать (о технике); (es geht um) речь идёт о',
      examples: [
        { sense: 'идти, ходить пешком', de: 'Ich [[gehe]] nach der Arbeit noch kurz einkaufen.', ru: 'После работы я ещё быстро схожу за покупками.' },
        { sense: 'речь идёт о (es geht um + Akk.)', de: 'In diesem Meeting [[geht]] es um unsere neue Backup-Strategie.', ru: 'На этой встрече речь идёт о нашей новой стратегии бэкапов.' },
        { sense: 'работать, быть возможным (разг.)', de: 'Der Drucker [[geht]] schon wieder nicht.', ru: 'Принтер опять не работает.' }
      ],
      morph: 'geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'gehen — один из самых многозначных глаголов немецкого: физическое «идти», разговорное «работать/функционировать» (das geht nicht), «дела идут» (Wie geht’s?) и «речь идёт о» (es geht um + Akk.).',
      meaningExamples: [{ de: 'zu Fuß gehen', ru: 'идти пешком' }, { de: 'Worum geht es?', ru: 'О чём речь?' }, { de: 'Das geht leider nicht.', ru: 'Так, к сожалению, не получится.' }],
      note: 'Сильный глагол с sein: ging, ist gegangen. «Worum geht es?» — «О чём идёт речь?».',
      why: {
        confidence: 'high',
        root: 'gehen',
        text: 'Состав: корневой сильный глагол geh- + -en (супплетивная основа ging / gegangen).\nПроисхождение: общегерманский глагол (др.-в.-нем. gān/gēn, родственно английскому go); формы прошедшего времени ging / gegangen происходят от родственного удвоенного корня *gang- (отсюда существительное der Gang «ход, коридор»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. gehen',
        evidence: 'Др.-в.-нем. gān/gēn (през.) + gangan (прет. ging, парт. gegangen); отсюда der Gang.'
      }
    },
    {
      id: 'r-gehen-umgehen', prefix: 'um', sep: 'trennbar / untrennbar', stress: 'úmgehen (обходиться с) · umgéhen (обходить)', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'umgehen', forms: { praes: 'geht um / umgeht', praet: 'ging um / umging', perf: 'ist umgegangen / hat umgangen' }, gov: 'mit + Dat. (отд.) / + Akk. (неотд.)',
      ru: '(отд., mit) обращаться с, справляться с; (неотд., + Akk.) обходить (правило, файрвол, защиту)',
      drill: { ru: 'обходить (файрвол, правило)', de: 'die Firewall ___gehen' },
      prefixDrill: { ex: 1, meaning: 1, explain: 'Безударная неотделяемая um- означает «вокруг, в обход» — злоумышленники обошли проверку (hat umgangen).' },
      examples: [
        { sense: 'обращаться с, справляться (отд.: mit + Dat., sein)', de: 'Wir müssen lernen, ruhig mit Stress [[umzugehen]].', ru: 'Нам нужно научиться спокойно справляться со стрессом.' },
        { sense: 'обходить защиту / правило (неотд.: + Akk., haben)', de: 'Die Angreifer haben die Zwei-Faktor-Authentifizierung [[umgangen]].', ru: 'Злоумышленники обошли двухфакторную аутентификацию.' }
      ],
      morph: 'um-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Два разных глагола по ударению: отделяемое úmgehen mit + Dat. («обращаться с чем-то/кем-то», ist umgegangen) и неотделяемое umgéhen + Akk. («обходить правило, защиту», hat umgangen).',
      meaningExamples: [{ de: 'mit sensiblen Daten sicher umgehen', ru: 'безопасно обращаться с чувствительными данными (отд.)' }, { de: 'eine Sperre umgehen', ru: 'обойти блокировку (неотд.)' }],
      note: 'Ключевая пара для SOC и B1/B2! Запомните: «mit + Dat.» → отделяемый (geht um, umgegangen); прямое дополнение «+ Akk.» → неотделяемый (umgeht, umgangen).',
      why: {
        confidence: 'high',
        root: 'gehen',
        text: 'Состав: двойная приставка um- + gehen.\nПроисхождение: в отделяемом úmgehen («ходить вокруг → иметь дело с») ударение на um- и перфект с sein; в неотделяемом umgéhen («обойти стороной, миновать препятствие») ударение на корне и перфект с haben (hat umgangen).\nПрозрачность: ударение и управление (mit vs Akk.) чётко разводят два значения.',
        source: 'DWDS (Pfeifer), s.v. umgehen',
        evidence: 'Пара по ударению: úmgehen mit + Dat. (ist umgegangen) vs umgéhen + Akk. (hat umgangen).'
      }
    },
    {
      id: 'r-gehen-vorgehen', prefix: 'vor', sep: 'trennbar', stress: 'vórgehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vorgehen', forms: { praes: 'geht vor', praet: 'ging vor', perf: 'ist vorgegangen' }, gov: 'gegen + Akk.',
      ru: 'действовать (по плану), поступать; (gegen) принимать меры против; спешить (о часах)',
      parallel: 'ПРОдвигаться / действовать',
      drill: { ru: 'действовать (по шагам, по плану)', de: 'systematisch ___gehen' },
      prefixDrill: { ex: 0, meaning: 3, explain: 'vor- здесь обозначает движение вперёд, пошаговый план действий («действовать систематически»).' },
      examples: [
        { sense: 'действовать (по плану)', de: 'Wie [[gehen]] wir bei diesem Sicherheitsvorfall am besten [[vor]]?', ru: 'Как нам лучше всего действовать при этом инциденте безопасности?' },
        { sense: 'принимать меры против (gegen + Akk.)', de: 'Die Firma [[geht]] rechtlich gegen die Angreifer [[vor]].', ru: 'Компания принимает юридические меры против злоумышленников.' }
      ],
      morph: 'vor-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'vorgehen значит «действовать по плану/методике», «предпринимать меры против» (gegen + Akk.), а про часы — «спешить» (die Uhr geht vor).',
      meaningExamples: [{ de: 'Schritt für Schritt vorgehen', ru: 'действовать шаг за шагом' }, { de: 'Meine Uhr geht fünf Minuten vor.', ru: 'Мои часы спешат на пять минут.' }],
      note: 'Существительное «das Vorgehen» — порядок действий, подход («unser Vorgehen beim Incident»). Всегда с sein.'
    },
    {
      id: 'r-gehen-ausgehen', prefix: 'aus', sep: 'trennbar', stress: 'áusgehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ausgehen', forms: { praes: 'geht aus', praet: 'ging aus', perf: 'ist ausgegangen' }, gov: 'von + Dat.',
      ru: 'исходить из (von + Dat.); идти развлекаться вечером; заканчиваться (о ресурсе); гаснуть',
      drill: { ru: 'исходить из (предположения)', de: 'von einem Fehlalarm ___gehen' },
      examples: [
        { sense: 'исходить из, полагать (von + Dat.)', de: 'Wir [[gehen]] davon [[aus]], dass keine Kundendaten abgeflossen sind.', ru: 'Мы исходим из того, что данные клиентов не утекли.' },
        { sense: 'выходить вечером (в кафе, бар)', de: 'Am Freitagabend [[gehen]] wir mit dem Team [[aus]].', ru: 'В пятницу вечером мы идём с командой куда-нибудь посидеть.' },
        { sense: 'заканчиваться / гаснуть', de: 'Uns [[geht]] bald der Speicherplatz [[aus]].', ru: 'У нас скоро закончится место на диске.' }
      ],
      morph: 'aus-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ausgehen имеет четыре частых значения: «исходить из предположения» (von + Dat.), «идти вечером в кафе/бар», «заканчиваться» (uns geht das Geld aus) и «гаснуть» (das Licht geht aus).',
      meaningExamples: [{ de: 'Ich gehe davon aus, dass es klappt.', ru: 'Я исхожу из того, что всё получится.' }, { de: 'am Wochenende ausgehen', ru: 'выйти погулять/в бар на выходных' }],
      note: 'Фраза «Ich gehe davon aus, dass …» — одна из главных деловых формул немецкого офиса!'
    },
    {
      id: 'r-gehen-eingehen', prefix: 'ein', sep: 'trennbar', stress: 'éingehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'eingehen', forms: { praes: 'geht ein', praet: 'ging ein', perf: 'ist eingegangen' }, gov: 'auf + Akk.',
      ru: 'поступать (о заявках, платежах); (auf + Akk.) останавливаться на вопросе, учитывать, соглашаться на',
      drill: { ru: 'поступать (о сообщениях); реагировать на вопрос', de: 'auf die Frage ___gehen' },
      examples: [
        { sense: 'останавливаться на вопросе, реагировать (auf + Akk.)', de: 'Auf diesen Punkt [[gehe]] ich am Ende der Präsentation noch genauer [[ein]].', ru: 'На этом пункте я остановлюсь подробнее в конце презентации.' },
        { sense: 'поступать (о заявках, письмах)', de: 'Heute Morgen sind zehn neue Meldungen im SOC [[eingegangen]].', ru: 'Сегодня утром в SOC поступило десять новых сообщений.' }
      ],
      morph: 'ein-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'eingehen значит «поступать» (о письмах, заказах, платежах), «подробно разобрать / откликнуться» (auf + Akk. eingehen), а в быту про одежду — «сесть после стирки».',
      meaningExamples: [{ de: 'auf ein Risiko eingehen', ru: 'пойти на риск / разобрать риск' }, { de: 'Die Zahlung ist eingegangen.', ru: 'Платёж поступил.' }],
      note: 'Всегда с sein (кроме устойчивого «ein Risiko eingehen» — пойти на риск, которое тоже с sein: ist ein Risiko eingegangen!).'
    },
    {
      id: 'r-gehen-aufgehen', prefix: 'auf', sep: 'trennbar', stress: 'áufgehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'aufgehen', forms: { praes: 'geht auf', praet: 'ging auf', perf: 'ist aufgegangen' },
      ru: 'открываться (само — о двери, окне); всходить (о солнце); сходиться (о расчёте, плане)',
      parallel: 'ОТкрываться / ВОСходить',
      prefixDrill: { ex: 0, meaning: 1, explain: 'auf- здесь означает открывание — дверь не открывается.' },
      examples: [
        { sense: 'открываться (само)', de: 'Die Tür [[geht]] irgendwie nicht richtig [[auf]].', ru: 'Дверь почему-то плохо открывается.' },
        { sense: 'всходить (о солнце) / сходиться (о плане)', de: 'Unser Plan ist am Ende voll [[aufgegangen]].', ru: 'Наш план в итоге полностью сработал.' }
      ],
      morph: 'auf-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufgehen — непереходная пара к aufmachen: «открываться самому» (дверь, файл), «всходить» (солнце, тесто) и «сходиться, срабатывать» (о расчёте или плане).',
      meaningExamples: [{ de: 'Die Sonne geht um 6 Uhr auf.', ru: 'Солнце встаёт в 6 утра.' }, { de: 'Die Rechnung geht auf.', ru: 'Расчёт сходится.' }],
      note: 'Всегда с sein: ist aufgegangen. Антоним для двери/окна: zugehen («закрываться самому»).'
    },
    {
      id: 'r-gehen-vergehen', prefix: 'ver', sep: 'untrennbar', stress: 'vergéhen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vergehen', forms: { praes: 'vergeht', praet: 'verging', perf: 'ist vergangen' },
      ru: 'проходить (о времени, боли, страхе)',
      parallel: 'ПРОходить (о времени)',
      drill: { ru: 'проходить (о времени)', de: 'Die Zeit ___geht schnell' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'ver- здесь означает уход, исчезновение — время «уходит, проходит».' },
      examples: [
        { de: 'Die Woche ist wieder wie im Flug [[vergangen]].', ru: 'Неделя снова пролетела незаметно.' },
        { de: 'Es sind schon drei Tage [[vergangen]], seit wir den Patch eingespielt haben.', ru: 'Прошло уже три дня с тех пор, как мы поставили патч.' }
      ],
      morph: 'ver-geh-en',
      note: 'Всегда с sein: ist vergangen. Прилагательное «vergangen» — прошлый («im vergangenen Jahr» — в прошлом году). «Die Vergangenheit» — прошлое.'
    },
    {
      id: 'r-gehen-losgehen', prefix: 'los', sep: 'trennbar', stress: 'lósgehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'losgehen', forms: { praes: 'geht los', praet: 'ging los', perf: 'ist losgegangen' },
      ru: 'начинаться (о встрече, фильме); отправляться в путь; срабатывать (о сигнализации)',
      examples: [
        { sense: 'начинаться', de: 'Um 10 Uhr [[geht]] das Audit [[los]].', ru: 'В 10 часов начинается аудит.' },
        { sense: 'срабатывать (о тревоге)', de: 'Mitten in der Nacht ist der Alarm [[losgegangen]].', ru: 'Посреди ночи сработала тревога.' }
      ],
      morph: 'los-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'losgehen значит «начинаться» («Es geht los!»), «выдвигаться в путь» и «срабатывать» (о будильнике или сигнализации).',
      meaningExamples: [{ de: 'Wann geht das Meeting los?', ru: 'Когда начинается встреча?' }, { de: 'Wir müssen jetzt losgehen.', ru: 'Нам уже пора выходить.' }],
      note: '«Los geht’s!» — «Поехали! Начинаем!». Всегда с sein.'
    },
    {
      id: 'r-gehen-mitgehen', prefix: 'mit', sep: 'trennbar', stress: 'mítgehen', pos: 'verb',
      transparency: 'transparent',
      de: 'mitgehen', forms: { praes: 'geht mit', praet: 'ging mit', perf: 'ist mitgegangen' },
      ru: 'пойти вместе (с кем-то); (перен.) поддержать идею/подход',
      parallel: 'идти ВМЕСТЕ',
      prefixDrill: { ex: 0, meaning: 0, explain: 'mit- выражает совместное действие — пойти вместе с коллегами.' },
      examples: [
        { de: 'Ich [[gehe]] heute gern mit in die Kantine [[mit]].', ru: 'Я сегодня с удовольствием пойду с вами в столовую.' }
      ],
      morph: 'mit-geh-en',
      note: 'Всегда с sein: ist mitgegangen.'
    },
    {
      id: 'r-gehen-uebergehen', prefix: 'über', sep: 'trennbar / untrennbar', stress: 'ǘbergehen (переходить) · übergéhen (игнорировать)', pos: 'verb',
      transparency: 'figurative',
      de: 'übergehen', forms: { praes: 'geht über / übergeht', praet: 'ging über / überging', perf: 'ist übergegangen / hat übergangen' }, gov: 'zu / in (отд.) · + Akk. (неотд.)',
      ru: '(отд.) переходить (к теме, в другое состояние); (неотд.) обходить, игнорировать (кого-то, вопрос)',
      examples: [
        { sense: 'перейти к следующему пункту (отд., sein)', de: 'Lass uns zum nächsten Punkt auf der Agenda [[übergehen]].', ru: 'Давай перейдём к следующему пункту повестки.' },
        { sense: 'проигнорировать, обойти вниманием (неотд., haben)', de: 'Er hat meinen Einwand einfach [[übergangen]].', ru: 'Он просто проигнорировал моё возражение.' }
      ],
      morph: 'über-geh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Пара по ударению: отделяемое ǘbergehen zu/in — «переходить к другой теме/состоянию» (sein); неотделяемое übergéhen + Akk. — «обойти стороной, проигнорировать» (haben).',
      meaningExamples: [{ de: 'zum nächsten Thema übergehen', ru: 'перейти к следующей теме (отд.)' }, { de: 'eine Warnung übergehen', ru: 'проигнорировать предупреждение (неотд.)' }],
      note: 'Отличная деловая пара: «zum nächsten Punkt übergehen» (ist übergegangen) vs «jdn. bei einer Beförderung übergehen» (hat übergangen).'
    },
    {
      id: 'r-gehen-zugang', pos: 'noun',
      de: 'Zugang', article: 'der', plural: 'die Zugänge',
      transparency: 'transparent',
      ru: 'доступ, вход (учётная запись; проход в здание)',
      examples: [
        { de: 'Für das Ticketsystem brauche ich noch einen eigenen [[Zugang]].', ru: 'Для тикет-системы мне ещё нужен собственный доступ (учётка).' }
      ],
      morph: 'Zu-gang',
      note: '«Die Zugangsdaten» — логин и пароль. Не путайте: «der Zugang» — вход/учётка, «der Zugriff» — технический доступ к файлу/базе.'
    },
    {
      id: 'r-gehen-ausgang', pos: 'noun',
      de: 'Ausgang', article: 'der', plural: 'die Ausgänge',
      transparency: 'transparent',
      ru: 'выход (из здания); исход (ситуации, дела)',
      examples: [
        { sense: 'выход из помещения', de: 'Der [[Notausgang]] befindet sich links am Ende des Flurs.', ru: 'Аварийный выход находится слева в конце коридора.' },
        { sense: 'исход, результат', de: 'Der [[Ausgang]] der Verhandlung ist noch völlig offen.', ru: 'Исход переговоров пока совершенно неясен.' }
      ],
      morph: 'Aus-gang',
      meaningType: 'polysemous',
      meaningExplanation: 'der Ausgang обозначает физический выход (как на табличках Ausgang / Notausgang) и исход, финал события или переговоров.',
      meaningExamples: [{ de: 'Eingang und Ausgang', ru: 'вход и выход' }, { de: 'ein guter Ausgang', ru: 'благополучный исход' }],
      note: 'Антоним: «der Eingang» (вход; также «der Posteingang» — входящие письма!).'
    },
    {
      id: 'r-gehen-umgang', pos: 'noun',
      de: 'Umgang', article: 'der',
      transparency: 'figurative',
      ru: 'обращение (с данными, техникой, людьми); общение',
      examples: [
        { de: 'Der sichere [[Umgang]] mit Passwörtern ist Teil unserer Schulung.', ru: 'Безопасное обращение с паролями — часть нашего обучения.' }
      ],
      morph: 'Um-gang',
      note: 'От отделяемого úmgehen mit + Dat. Всегда с предлогом mit: «der Umgang mit Daten / Kunden / Stress». Обычно без мн. ч.'
    },
    {
      id: 'r-gehen-vorgang', pos: 'noun',
      de: 'Vorgang', article: 'der', plural: 'die Vorgänge',
      transparency: 'figurative',
      ru: 'процесс, операция; дело/кейс (в ведомстве или системе)',
      examples: [
        { de: 'Der [[Vorgang]] dauert normalerweise nur wenige Sekunden.', ru: 'Эта операция обычно занимает всего несколько секунд.' }
      ],
      morph: 'Vor-gang',
      note: 'Очень часто встречается в интерфейсах («Vorgang abbrechen» — отменить операцию) и в ведомствах («die Vorgangsnummer» — номер вашего дела).'
    }
  ],
  pairs: [
    {
      a: { stress: 'úmgehen (mit + Dat.)', sep: 'trennbar · ist umgegangen', ru: 'обращаться с, справляться с',
        ex: { de: 'Wie [[gehst]] du mit dem Zeitdruck [[um]]?', ru: 'Как ты справляешься с нехваткой времени?' } },
      b: { stress: 'umgéhen (+ Akk.)', sep: 'untrennbar · hat umgangen', ru: 'обходить (правило, файрвол, защиту)',
        ex: { de: 'Die Malware [[umgeht]] klassische Antivirenprogramme.', ru: 'Малварь обходит классические антивирусы.' } }
    },
    {
      a: { stress: 'ǘbergehen (zu / in)', sep: 'trennbar · ist übergegangen', ru: 'переходить (к следующему пункту, в состояние)',
        ex: { de: 'Wir [[gehen]] jetzt zum nächsten Thema [[über]].', ru: 'Сейчас мы перейдём к следующей теме.' } },
      b: { stress: 'übergéhen (+ Akk.)', sep: 'untrennbar · hat übergangen', ru: 'игнорировать, обойти вниманием',
        ex: { de: 'Man darf solche Warnungen nicht [[übergehen]].', ru: 'Такие предупреждения нельзя игнорировать.' } }
    }
  ]
});
