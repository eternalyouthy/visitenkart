/* English GRAMMAR · expansion part 3: deduction-present, past-ability, used-to, articles, quantifiers, ed-ing,
 * contrast, zero-conditional. Uses GT.enrichGrammar from grammar_expand_1.js. */
(function () {
  'use strict';
  var X = GT.enrichGrammar;

  X('deduction-present', {
    summary: { ru: 'must — уверен, что да; might / may / could — возможно; can’t — уверен, что нет.', de: 'must — sicher ja; might / may / could — vielleicht; can’t — sicher nein.' },
    ru: '<p>Модальные глаголы умеют выражать <b>вывод о настоящем</b> по признакам:</p><ul>' +
      '<li><b>must</b> — почти уверен: <em>She’s been working for 12 hours. She <b>must be</b> tired.</em></li>' +
      '<li><b>might / may / could</b> — возможно: <em>He <b>might be</b> in a meeting.</em></li>' +
      '<li><b>can’t / couldn’t</b> — почти уверен, что нет: <em>That <b>can’t be</b> Tom — he’s in Spain.</em></li>' +
      '<li>Процесс сейчас: модальный + <b>be + -ing</b>: <em>They <b>must be having</b> dinner.</em></li></ul>' +
      '<p>Для отрицательного вывода — <b>can’t</b>, не <em>mustn’t</em> (это запрет). Про прошлое — урок «Modals of deduction» (must have done).</p>',
    de: '<p>Modalverben drücken auch <b>Vermutungen über die Gegenwart</b> aus — wie deutsches <em>muss / könnte / kann nicht</em>:</p><ul>' +
      '<li><b>must</b> — fast sicher: <em>She <b>must be</b> tired.</em> (Sie muss müde sein.)</li>' +
      '<li><b>might / may / could</b> — vielleicht: <em>He <b>might be</b> in a meeting.</em></li>' +
      '<li><b>can’t / couldn’t</b> — sicher nicht: <em>That <b>can’t be</b> Tom.</em> (Das kann nicht Tom sein.)</li>' +
      '<li>Gerade im Gange: Modal + <b>be + -ing</b>: <em>They <b>must be having</b> dinner.</em></li></ul>' +
      '<p>Verneint: <b>can’t</b>, nicht <em>mustn’t</em> (= nicht dürfen).</p>',
    examples: [
      { t: 'You [[must be]] hungry after that long walk.', ru: 'Ты, наверное, голоден после такой долгой прогулки.', de: 'Du musst nach dem langen Spaziergang hungrig sein.' },
      { t: 'Don’t ring the bell — the baby [[might be sleeping]].', ru: 'Не звони — ребёнок, возможно, спит.', de: 'Nicht klingeln — das Baby könnte schlafen.' },
      { t: 'This bill [[can’t be]] right — we only had two coffees.', ru: 'Этот счёт не может быть правильным — мы взяли только два кофе.', de: 'Diese Rechnung kann nicht stimmen — wir hatten nur zwei Kaffee.' }
    ],
    pitfalls: [
      { title: { ru: 'mustn’t ≠ не может быть', de: 'mustn’t ≠ kann nicht sein' },
        html: { ru: '<span class="wrong">He mustn’t be at home.</span> → <span class="right">He can’t be at home.</span>', de: '<span class="wrong">He mustn’t be at home.</span> → <span class="right">He can’t be at home.</span>' } }
    ],
    drills: [
      { id: 'en-gx-dp-1', kind: 'choice', q: 'Someone’s knocking. It ___ the postman — he usually comes now.', options: ['must be', 'can’t be', 'mustn’t be'], answer: 0,
        explain: { ru: 'Уверенный вывод → must be.', de: 'Sichere Vermutung → must be.' } },
      { id: 'en-gx-dp-2', kind: 'choice', q: 'She ___ be 40! She looks about 25.', options: ['can’t', 'must', 'mustn’t'], answer: 0,
        explain: { ru: 'Уверен, что нет → can’t.', de: 'Sicher nicht → can’t.' } },
      { id: 'en-gx-dp-3', kind: 'gap', q: 'Listen! They ___ (must / argue) again.', answer: 'must be arguing',
        explain: { ru: 'Процесс сейчас → must be + -ing.', de: 'Gerade im Gange → must be + -ing.' } }
    ]
  });

  X('past-ability', {
    summary: { ru: 'could — умел вообще; was able to / managed to — смог в конкретный раз; couldn’t — в обоих случаях.', de: 'could — allgemein konnte; was able to / managed to — hat es einmal geschafft; couldn’t — in beiden Fällen.' },
    ru: '<ul><li><b>could</b> — <b>общая</b> способность в прошлом: <em>I <b>could</b> swim when I was five.</em></li>' +
      '<li><b>was / were able to</b>, <b>managed to</b> — <b>конкретный успешный случай</b>: <em>The fire spread fast, but everyone <b>was able to</b> escape.</em> <span class="wrong">everyone could escape</span> здесь звучит неверно.</li>' +
      '<li><b>managed to</b> подчёркивает трудность: <em>After three hours we <b>managed to</b> fix it.</em></li>' +
      '<li><b>couldn’t</b> подходит и для общего, и для разового: <em>I <b>couldn’t</b> open the door.</em></li>' +
      '<li>С глаголами восприятия (<em>see, hear, smell, understand</em>) <b>could</b> обычен и для разового случая: <em>I could see the sea from my room.</em></li></ul>',
    de: '<ul><li><b>could</b> — <b>allgemeine</b> Fähigkeit in der Vergangenheit: <em>I <b>could</b> swim when I was five.</em></li>' +
      '<li><b>was / were able to</b>, <b>managed to</b> — <b>ein konkreter Erfolg</b> (= hat es geschafft): <em>Everyone <b>was able to</b> escape.</em> Nicht <em>everyone could escape</em>, obwohl Deutsch „konnten“ sagt.</li>' +
      '<li><b>managed to</b> betont die Schwierigkeit (= es gelang uns).</li>' +
      '<li><b>couldn’t</b> passt für beides: <em>I <b>couldn’t</b> open the door.</em></li>' +
      '<li>Bei Wahrnehmungsverben (<em>see, hear, understand</em>) ist <b>could</b> auch für Einzelfälle normal.</li></ul>',
    examples: [
      { t: 'The exam was hard, but I [[managed to]] pass.', ru: 'Экзамен был трудный, но я сумел сдать.', de: 'Die Prüfung war schwer, aber ich habe es geschafft zu bestehen.' },
      { t: 'When I was young, I [[could]] run ten kilometres.', ru: 'В молодости я мог пробежать десять километров.', de: 'Als ich jung war, konnte ich zehn Kilometer laufen.' },
      { t: 'We [[couldn’t]] find a parking space.', ru: 'Мы не смогли найти парковку.', de: 'Wir konnten keinen Parkplatz finden.' }
    ],
    pitfalls: [
      { title: { ru: 'could для разового успеха', de: 'could für einen Einzelerfolg' },
        html: { ru: '<span class="wrong">Yesterday I could finish the report.</span> → <span class="right">Yesterday I managed to / was able to finish the report.</span>', de: '<span class="wrong">Yesterday I could finish the report.</span> → <span class="right">Yesterday I managed to finish the report.</span>' } }
    ],
    drills: [
      { id: 'en-gx-pa-1', kind: 'choice', q: 'The road was blocked, but we ___ get through.', options: ['were able to', 'could', 'can'], answer: 0,
        explain: { ru: 'Конкретный успех → were able to.', de: 'Konkreter Erfolg → were able to.' } },
      { id: 'en-gx-pa-2', kind: 'choice', q: 'My grandfather ___ speak four languages.', options: ['could', 'managed to', 'was able'], answer: 0,
        explain: { ru: 'Общая способность → could.', de: 'Allgemeine Fähigkeit → could.' } },
      { id: 'en-gx-pa-3', kind: 'gap', q: 'I tried, but I ___ (not / can) sleep last night.', answer: 'couldn’t', accepted: ["couldn't", 'could not'],
        explain: { ru: 'Отрицание → couldn’t (и для разового).', de: 'Verneint → couldn’t (auch einmalig).' } }
    ]
  });

  X('used-to', {
    summary: { ru: 'used to do — раньше (а теперь нет); be used to doing — привык; get used to doing — привыкаю.', de: 'used to do — früher (jetzt nicht mehr); be used to doing — gewohnt sein; get used to doing — sich gewöhnen.' },
    ru: '<ul><li><b>used to + V</b> — прошлая привычка или состояние, которых <b>больше нет</b>: <em>I <b>used to smoke</b>.</em> Вопрос/отрицание: <em>Did you <b>use</b> to…? I didn’t <b>use</b> to…</em> (без -d).</li>' +
      '<li><b>be used to + -ing / сущ.</b> — <b>быть привычным</b>: <em>I’m used to <b>getting up</b> early.</em></li>' +
      '<li><b>get used to + -ing / сущ.</b> — <b>привыкать</b>: <em>You’ll get used to <b>driving</b> on the left.</em></li>' +
      '<li>В двух последних <b>to — предлог</b>, поэтому после него -ing.</li>' +
      '<li>Для повторяющихся прошлых действий можно и <b>would</b>: <em>Every summer we would go to the lake.</em> (но не для состояний)</li></ul>',
    de: '<ul><li><b>used to + Verb</b> — frühere Gewohnheit/Zustand, <b>jetzt nicht mehr</b> (= früher …): <em>I <b>used to smoke</b>.</em> Frage/Verneinung: <em>Did you <b>use</b> to…? I didn’t <b>use</b> to…</em></li>' +
      '<li><b>be used to + -ing / Nomen</b> — <b>gewohnt sein</b>: <em>I’m used to <b>getting up</b> early.</em></li>' +
      '<li><b>get used to + -ing / Nomen</b> — <b>sich gewöhnen</b>: <em>You’ll get used to <b>driving</b> on the left.</em></li>' +
      '<li>Bei den letzten beiden ist <b>to eine Präposition</b> → -ing.</li>' +
      '<li>Wiederholte Handlungen in der Vergangenheit auch mit <b>would</b> (nicht für Zustände).</li></ul>',
    tables: [{ caption: { ru: 'Три конструкции', de: 'Drei Konstruktionen' }, head: { ru: ['Форма', 'Смысл', 'Пример'], de: ['Form', 'Bedeutung', 'Beispiel'] }, deCols: [2],
      rows: { ru: [['used to + V', 'раньше', 'I used to live in Kyiv.'], ['be used to + -ing', 'привык', 'I’m used to living alone.'], ['get used to + -ing', 'привыкаю', 'I’m getting used to living alone.']],
              de: [['used to + Verb', 'früher', 'I used to live in Kyiv.'], ['be used to + -ing', 'gewohnt sein', 'I’m used to living alone.'], ['get used to + -ing', 'sich gewöhnen', 'I’m getting used to living alone.']] } }],
    examples: [
      { t: 'There [[used to]] be a cinema here.', ru: 'Раньше здесь был кинотеатр.', de: 'Früher gab es hier ein Kino.' },
      { t: 'She isn’t [[used to]] working at night.', ru: 'Она не привыкла работать ночью.', de: 'Sie ist es nicht gewohnt, nachts zu arbeiten.' },
      { t: 'Did you [[use to]] play an instrument?', ru: 'Ты раньше играл на каком-нибудь инструменте?', de: 'Hast du früher ein Instrument gespielt?' }
    ],
    pitfalls: [
      { title: { ru: 'did + use to', de: 'did + use to' },
        html: { ru: '<span class="wrong">Did you used to…?</span> → <span class="right">Did you use to…?</span>', de: '<span class="wrong">Did you used to…?</span> → <span class="right">Did you use to…?</span>' } },
      { title: { ru: 'be used to + -ing', de: 'be used to + -ing' },
        html: { ru: '<span class="wrong">I’m used to work late.</span> → <span class="right">I’m used to working late.</span>', de: '<span class="wrong">I’m used to work late.</span> → <span class="right">I’m used to working late.</span>' } }
    ],
    drills: [
      { id: 'en-gx-ut-1', kind: 'choice', q: 'I ___ have long hair, but I cut it last year.', options: ['used to', 'am used to', 'get used to'], answer: 0,
        explain: { ru: 'Раньше, сейчас нет → used to.', de: 'Früher, jetzt nicht mehr → used to.' } },
      { id: 'en-gx-ut-2', kind: 'gap', q: 'It took me months to get used to ___ (live) in a big city.', answer: 'living',
        explain: { ru: 'get used to + -ing.', de: 'get used to + -ing.' } },
      { id: 'en-gx-ut-3', kind: 'choice', q: 'Didn’t you ___ work in a bank?', options: ['use to', 'used to', 'using to'], answer: 0,
        explain: { ru: 'После did — use to.', de: 'Nach did → use to.' } }
    ]
  });

  X('articles', {
    summary: { ru: 'a/an — один из многих, впервые; the — известный, единственный; без артикля — вообще.', de: 'a/an — einer von vielen, neu; the — bekannt, einzig; ohne Artikel — allgemein.' },
    ru: '<ul><li><b>a / an</b> — один предмет из многих, впервые упомянут, профессия: <em>I saw <b>a</b> dog. She’s <b>an</b> engineer.</em> an — перед гласным <b>звуком</b>: <em>an hour, a university</em>.</li>' +
      '<li><b>the</b> — собеседник знает, о чём речь: второе упоминание, единственное в своём роде, уточнено: <em><b>the</b> dog I told you about, <b>the</b> sun, <b>the</b> best, <b>the</b> first</em>.</li>' +
      '<li><b>Без артикля</b> — общее значение неисчисляемых и множественных: <em><b>Coffee</b> keeps me awake. <b>Dogs</b> are loyal.</em></li>' +
      '<li>Устойчивые: <em>at home, at work, go to bed, by bus, have breakfast</em> (без артикля); <em>play the piano, the cinema, the news</em>.</li>' +
      '<li>География: без артикля — большинство стран и городов; <b>the</b> — <em>the USA, the UK, the Netherlands</em>, реки, моря, горные цепи.</li></ul>',
    de: '<ul><li><b>a / an</b> — eines von vielen, zum ersten Mal erwähnt, Beruf: <em>She’s <b>an</b> engineer.</em> (Deutsch ohne Artikel: „Sie ist Ingenieurin“!) an vor Vokal<b>laut</b>: <em>an hour, a university</em>.</li>' +
      '<li><b>the</b> — der Hörer weiß, was gemeint ist: zweite Erwähnung, einzigartig, näher bestimmt.</li>' +
      '<li><b>Kein Artikel</b> — allgemeine Bedeutung bei Unzählbarem und Plural: <em><b>Life</b> is short.</em> (Deutsch: „<b>Das</b> Leben ist kurz“!) <em><b>Nature</b>, <b>society</b>, <b>breakfast</b></em>.</li>' +
      '<li>Feste Ausdrücke: <em>at home, at work, go to bed, by bus</em>; <em>play the piano</em>.</li>' +
      '<li>Geografie: meist ohne Artikel; mit <b>the</b>: <em>the USA, the UK, the Netherlands</em>, Flüsse, Meere. Aber <em>Switzerland, Turkey</em> ohne Artikel.</li></ul>',
    examples: [
      { t: 'She works as [[a]] nurse in [[the]] city hospital.', ru: 'Она работает медсестрой в городской больнице.', de: 'Sie arbeitet als Krankenschwester im städtischen Krankenhaus.' },
      { t: '[[Life]] is too short to drink bad coffee.', ru: 'Жизнь слишком коротка, чтобы пить плохой кофе.', de: 'Das Leben ist zu kurz für schlechten Kaffee.' },
      { t: 'It took [[an]] hour to get to [[the]] airport.', ru: 'До аэропорта мы добирались час.', de: 'Wir brauchten eine Stunde zum Flughafen.' }
    ],
    pitfalls: [
      { title: { ru: 'Профессия с a', de: 'Beruf mit a' },
        html: { ru: '<span class="wrong">I am doctor.</span> → <span class="right">I am a doctor.</span>', de: '<span class="wrong">I am doctor.</span> → <span class="right">I am a doctor.</span>' } },
      { title: { ru: 'Общее понятие без the', de: 'Allgemeines ohne the' },
        html: { ru: '<span class="wrong">The money isn’t everything.</span> → <span class="right">Money isn’t everything.</span>', de: '<span class="wrong">The life is beautiful.</span> → <span class="right">Life is beautiful.</span>' } }
    ],
    drills: [
      { id: 'en-gx-art-1', kind: 'choice', q: 'My sister is ___ architect.', options: ['an', 'a', '—'], answer: 0,
        explain: { ru: 'Профессия + гласный звук → an.', de: 'Beruf + Vokallaut → an.' } },
      { id: 'en-gx-art-2', kind: 'choice', q: '___ honesty is important in any relationship.', options: ['—', 'The', 'An'], answer: 0,
        explain: { ru: 'Абстрактное понятие вообще → без артикля.', de: 'Abstraktes allgemein → kein Artikel.' } },
      { id: 'en-gx-art-3', kind: 'choice', q: 'We flew to ___ United States last summer.', options: ['the', '—', 'a'], answer: 0,
        explain: { ru: 'the United States / the USA.', de: 'the United States / the USA.' } }
    ]
  });

  X('quantifiers', {
    summary: { ru: 'many / few — исчисляемые; much / little — неисчисляемые; a few / a little — немного есть, few / little — почти нет.', de: 'many / few — zählbar; much / little — unzählbar; a few / a little — einige, few / little — kaum welche.' },
    ru: '<ul><li><b>Исчисляемые</b> (books, people): <em>many, (a) few, a number of</em>. <b>Неисчисляемые</b> (time, money, advice, information): <em>much, (a) little, an amount of</em>.</li>' +
      '<li><b>a few / a little</b> — немного, но достаточно (позитивно). <b>few / little</b> — мало, почти нет (негативно): <em>Few people came</em> (почти никто).</li>' +
      '<li><b>a lot of / lots of</b> — с обоими, в утверждениях. <b>much / many</b> — чаще в вопросах и отрицаниях: <em>How much? Not many.</em></li>' +
      '<li><b>some</b> — в утверждениях и просьбах/предложениях; <b>any</b> — в вопросах и отрицаниях: <em>Would you like some tea? I don’t have any.</em></li>' +
      '<li>Ловушки: <em>advice, information, news, furniture, luggage, equipment</em> — неисчисляемые в английском.</li></ul>',
    de: '<ul><li><b>Zählbar</b> (books, people): <em>many, (a) few</em>. <b>Unzählbar</b> (time, money, advice, information): <em>much, (a) little</em>.</li>' +
      '<li><b>a few / a little</b> — ein paar / ein bisschen (positiv). <b>few / little</b> — wenige / wenig, kaum (negativ).</li>' +
      '<li><b>a lot of / lots of</b> — für beides, in Aussagesätzen; <b>much / many</b> meist in Fragen und Verneinungen.</li>' +
      '<li><b>some</b> — in Aussagen, Bitten, Angeboten; <b>any</b> — in Fragen und Verneinungen.</li>' +
      '<li>Achtung: <em>advice, information, news, furniture, luggage</em> sind unzählbar — anders als „Ratschläge, Informationen, Möbel“.</li></ul>',
    examples: [
      { t: 'Can I give you [[some]] advice?', ru: 'Можно дать тебе совет?', de: 'Darf ich dir einen Rat geben?' },
      { t: 'There were [[few]] people at the meeting, so we postponed it.', ru: 'На встрече было мало людей, поэтому мы её перенесли.', de: 'Es waren nur wenige Leute beim Treffen, also haben wir es verschoben.' },
      { t: 'How [[much]] luggage do you have?', ru: 'Сколько у вас багажа?', de: 'Wie viel Gepäck haben Sie?' }
    ],
    pitfalls: [
      { title: { ru: 'advice / information без -s', de: 'advice / information ohne -s' },
        html: { ru: '<span class="wrong">many informations</span> → <span class="right">a lot of information</span>; <span class="wrong">an advice</span> → <span class="right">a piece of advice</span>.', de: '<span class="wrong">many informations</span> → <span class="right">a lot of information</span>; <span class="wrong">an advice</span> → <span class="right">a piece of advice</span>.' } }
    ],
    drills: [
      { id: 'en-gx-q-1', kind: 'choice', q: 'Hurry up! We don’t have ___ time.', options: ['much', 'many', 'few'], answer: 0,
        explain: { ru: 'time — неисчисляемое, отрицание → much.', de: 'time unzählbar, Verneinung → much.' } },
      { id: 'en-gx-q-2', kind: 'choice', q: 'The film was so boring that ___ people stayed until the end.', options: ['few', 'a few', 'little'], answer: 0,
        explain: { ru: 'Почти никто (негативно) → few.', de: 'Kaum jemand (negativ) → few.' } },
      { id: 'en-gx-q-3', kind: 'choice', q: 'Could you give me ___ information about the course?', options: ['some', 'an', 'many'], answer: 0,
        explain: { ru: 'information — неисчисляемое; просьба → some.', de: 'information ist unzählbar; Bitte → some.' } }
    ]
  });

  X('ed-ing', {
    summary: { ru: '-ed — что человек чувствует (bored); -ing — что вызывает чувство (boring).', de: '-ed — was man fühlt (bored); -ing — was das Gefühl auslöst (boring).' },
    ru: '<ul><li><b>-ed</b> — <b>чувство</b> человека: <em>I’m <b>bored</b>. She was <b>surprised</b>.</em></li>' +
      '<li><b>-ing</b> — <b>причина</b> чувства (вещь, ситуация или человек): <em>The film is <b>boring</b>. The news was <b>surprising</b>.</em></li>' +
      '<li>Пары: <em>interested/interesting, tired/tiring, excited/exciting, confused/confusing, disappointed/disappointing, embarrassed/embarrassing, worried/worrying, annoyed/annoying, relaxed/relaxing</em>.</li>' +
      '<li>Человек тоже может быть -ing: <em>He’s <b>boring</b></em> = с ним скучно (а не ему скучно!).</li></ul>',
    de: '<ul><li><b>-ed</b> — das <b>Gefühl</b> einer Person: <em>I’m <b>bored</b>.</em> (Mir ist langweilig.)</li>' +
      '<li><b>-ing</b> — die <b>Ursache</b> des Gefühls: <em>The film is <b>boring</b>.</em> (Der Film ist langweilig.)</li>' +
      '<li>Paare: <em>interested/interesting, tired/tiring, excited/exciting, confused/confusing, disappointed/disappointing, embarrassed/embarrassing</em>.</li>' +
      '<li>Auch Personen können -ing sein: <em>He’s <b>boring</b></em> = er ist langweilig (nicht: ihm ist langweilig!).</li></ul>' +
      '<p>Deutsch hat oft ein Wort für beides („langweilig“); Englisch unterscheidet streng.</p>',
    examples: [
      { t: 'I was really [[embarrassed]] when I forgot her name.', ru: 'Мне было очень неловко, когда я забыл её имя.', de: 'Es war mir sehr peinlich, als ich ihren Namen vergaß.' },
      { t: 'The flight was long and [[tiring]].', ru: 'Перелёт был долгим и утомительным.', de: 'Der Flug war lang und anstrengend.' }
    ],
    pitfalls: [
      { title: { ru: 'I’m boring ≠ мне скучно', de: 'I’m boring ≠ mir ist langweilig' },
        html: { ru: '<span class="wrong">I’m boring</span> (= я скучный человек) → <span class="right">I’m bored</span> (= мне скучно).', de: '<span class="wrong">I’m boring</span> (= ich bin ein langweiliger Mensch) → <span class="right">I’m bored</span> (= mir ist langweilig).' } }
    ],
    drills: [
      { id: 'en-gx-ei-1', kind: 'choice', q: 'The results were very ___. We expected more.', options: ['disappointing', 'disappointed'], answer: 0,
        explain: { ru: 'Результаты вызывают чувство → -ing.', de: 'Ergebnisse lösen das Gefühl aus → -ing.' } },
      { id: 'en-gx-ei-2', kind: 'choice', q: 'Are you ___ in joining our team?', options: ['interested', 'interesting'], answer: 0,
        explain: { ru: 'Чувство человека → interested in.', de: 'Gefühl der Person → interested in.' } },
      { id: 'en-gx-ei-3', kind: 'gap', q: 'After the spa day I felt completely ___. (relax)', answer: 'relaxed',
        explain: { ru: 'Чувство → relaxed.', de: 'Gefühl → relaxed.' } }
    ]
  });

  X('contrast', {
    summary: { ru: 'although + предложение; despite / in spite of + сущ. / -ing; however — новое предложение.', de: 'although + Satz; despite / in spite of + Nomen / -ing; however — neuer Satz.' },
    ru: '<ul><li><b>although / even though / though</b> + <b>подлежащее + глагол</b>: <em><b>Although</b> it was raining, we went out.</em> even though — сильнее; though — разговорно, может стоять в конце.</li>' +
      '<li><b>despite / in spite of</b> + <b>существительное или -ing</b>: <em><b>Despite</b> the rain…, <b>In spite of</b> feeling ill…</em> Для придаточного: <em>despite <b>the fact that</b>…</em></li>' +
      '<li><b>however / nevertheless</b> — наречия, начинают <b>новое предложение</b>: <em>It was expensive. <b>However</b>, it was worth it.</em></li>' +
      '<li><b>but</b> — союз внутри предложения: <em>It was expensive, but worth it.</em></li>' +
      '<li><b>whereas / while</b> — сопоставление двух фактов: <em>I like tea, whereas my wife prefers coffee.</em></li></ul>',
    de: '<ul><li><b>although / even though / though</b> + <b>Subjekt + Verb</b> (= obwohl): <em><b>Although</b> it was raining, we went out.</em></li>' +
      '<li><b>despite / in spite of</b> + <b>Nomen oder -ing</b> (= trotz): <em><b>Despite</b> the rain…</em> Mit Satz: <em>despite <b>the fact that</b>…</em></li>' +
      '<li><b>however / nevertheless</b> — Adverbien (= jedoch, trotzdem), beginnen einen <b>neuen Satz</b>.</li>' +
      '<li><b>but</b> — Konjunktion (= aber).</li>' +
      '<li><b>whereas / while</b> — Gegenüberstellung (= während, wohingegen).</li></ul>',
    tables: [{ caption: { ru: 'Что идёт после', de: 'Was folgt' }, head: { ru: ['Слово', 'После него', 'Пример'], de: ['Wort', 'Danach', 'Beispiel'] }, deCols: [2],
      rows: { ru: [['although', 'предложение', 'Although he’s rich, he’s unhappy.'], ['despite', 'сущ. / -ing', 'Despite his money, he’s unhappy.'], ['in spite of', 'сущ. / -ing', 'In spite of being rich, he’s unhappy.'], ['However,', 'новое предложение', 'He’s rich. However, he’s unhappy.']],
              de: [['although', 'Satz', 'Although he’s rich, he’s unhappy.'], ['despite', 'Nomen / -ing', 'Despite his money, he’s unhappy.'], ['in spite of', 'Nomen / -ing', 'In spite of being rich, he’s unhappy.'], ['However,', 'neuer Satz', 'He’s rich. However, he’s unhappy.']] } }],
    examples: [
      { t: '[[Even though]] she was exhausted, she finished the marathon.', ru: 'Хотя она была без сил, она закончила марафон.', de: 'Obwohl sie erschöpft war, beendete sie den Marathon.' },
      { t: '[[In spite of]] having a map, we got lost.', ru: 'Несмотря на карту, мы заблудились.', de: 'Trotz Karte haben wir uns verlaufen.' }
    ],
    pitfalls: [
      { title: { ru: 'despite of', de: 'despite of' },
        html: { ru: '<span class="wrong">despite of the weather</span> → <span class="right">despite the weather</span> / <span class="right">in spite of the weather</span>.', de: '<span class="wrong">despite of the weather</span> → <span class="right">despite the weather</span> / <span class="right">in spite of the weather</span>.' } }
    ],
    drills: [
      { id: 'en-gx-con-1', kind: 'choice', q: '___ the traffic, we arrived on time.', options: ['Despite', 'Although', 'However'], answer: 0,
        explain: { ru: 'Дальше существительное → despite.', de: 'Nomen folgt → despite.' } },
      { id: 'en-gx-con-2', kind: 'choice', q: 'The hotel was cheap. ___, it was very clean.', options: ['However', 'Although', 'Despite'], answer: 0,
        explain: { ru: 'Новое предложение с запятой → However.', de: 'Neuer Satz mit Komma → However.' } },
      { id: 'en-gx-con-3', kind: 'gap', q: 'In spite ___ the cold, they swam in the lake.', answer: 'of',
        explain: { ru: 'in spite of — с of.', de: 'in spite of — mit of.' } }
    ]
  });

  X('zero-conditional', {
    summary: { ru: 'If/when + Present, Present — то, что всегда так: факты, правила, инструкции.', de: 'If/when + Present, Present — was immer gilt: Fakten, Regeln, Anleitungen.' },
    ru: '<ul><li><b>if / when + Present Simple, Present Simple</b> — общая истина или закономерность: <em>If you <b>heat</b> ice, it <b>melts</b>.</em></li>' +
      '<li>if и when здесь почти синонимы («каждый раз, когда»).</li>' +
      '<li>В инструкциях вторая часть — повелительное наклонение: <em>If the light <b>flashes</b>, <b>press</b> reset.</em></li>' +
      '<li>Сравните с First Conditional — конкретная будущая ситуация: <em>If it rains tomorrow, we’ll stay in.</em></li></ul>',
    de: '<ul><li><b>if / when + Present Simple, Present Simple</b> — allgemeine Wahrheit (= wenn … dann immer): <em>If you <b>heat</b> ice, it <b>melts</b>.</em></li>' +
      '<li>if und when sind hier fast gleich („immer wenn“).</li>' +
      '<li>In Anleitungen ist der zweite Teil ein Imperativ: <em>If the light <b>flashes</b>, <b>press</b> reset.</em></li>' +
      '<li>Vergleich First Conditional — konkreter Fall in der Zukunft: <em>If it rains tomorrow, we’ll stay in.</em></li></ul>',
    examples: [
      { t: 'If you [[mix]] red and blue, you [[get]] purple.', ru: 'Если смешать красный и синий, получится фиолетовый.', de: 'Wenn man Rot und Blau mischt, erhält man Lila.' },
      { t: 'If the printer [[jams]], [[open]] the side panel.', ru: 'Если принтер зажевал бумагу, откройте боковую панель.', de: 'Wenn der Drucker klemmt, öffnen Sie die Seitenklappe.' }
    ],
    pitfalls: [
      { title: { ru: 'Для общих истин обычно без will', de: 'Bei allgemeinen Wahrheiten meist ohne will' },
        html: { ru: '<em>If you heat water to 100°C, it will boil</em> тоже возможно, но для закона природы естественнее <span class="right">it boils</span>.', de: '<em>If you heat water to 100°C, it will boil</em> ist auch möglich, natürlicher für ein Naturgesetz: <span class="right">it boils</span>.' } }
    ],
    drills: [
      { id: 'en-gx-zc-1', kind: 'gap', q: 'If plants don’t get enough water, they ___ (die).', answer: 'die',
        explain: { ru: 'Общая истина → Present Simple.', de: 'Allgemeine Wahrheit → Present Simple.' } },
      { id: 'en-gx-zc-2', kind: 'choice', q: 'Which sentence is a general rule?', options: ['When I drink coffee late, I can’t sleep.', 'If I drink coffee now, I won’t sleep tonight.', 'If I had drunk less coffee, I would have slept.'], answer: 0,
        explain: { ru: 'Повторяющаяся закономерность → Present + Present.', de: 'Regelmäßige Folge → Present + Present.' } }
    ]
  });
})();
