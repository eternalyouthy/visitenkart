/* ROOT: fallen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'fallen', verb: 'fallen', ru: 'падать',
  words: [
    {
      id: 'r-fallen-fallen', base: true, pos: 'verb',
      de: 'fallen', forms: { praes: 'fällt', praet: 'fiel', perf: 'ist gefallen' },
      ru: 'падать; снижаться (о температуре, цене); приходиться (о дате)',
      examples: [
        { sense: 'падать физически', de: 'Mir ist das Handy auf den Boden [[gefallen]], aber das Display ist noch heil.', ru: 'У меня телефон упал на пол, но экран всё ещё цел.' },
        { sense: 'снижаться (о температуре, показателях)', de: 'In der Nacht sind die Temperaturen unter null Grad [[gefallen]].', ru: 'Ночью температура упала ниже нуля.' }
      ],
      morph: 'fall-en',
      meaningType: 'polysemous',
      meaningExplanation: 'fallen значит «падать физически», «падать/снижаться» (о температуре, ценах, трафике) и «выпадать на день» (der Feiertag fällt auf einen Montag).',
      meaningExamples: [{ de: 'Die Preise fallen.', ru: 'Цены падают.' }, { de: 'Mein Geburtstag fällt auf einen Freitag.', ru: 'Мой день рождения выпадает на пятницу.' }],
      note: 'Сильный глагол с умлаутом a→ä и sein: du fällst, er fällt; fiel, ist gefallen. «Es fällt mir schwer / leicht» — мне даётся тяжело / легко!',
      why: {
        confidence: 'high',
        root: 'fallen',
        text: 'Состав: корневой сильный глагол fall- + -en.\nПроисхождение: общегерманский глагол (др.-в.-нем. fallan «падать», родственно английскому fall). От корня образована масса ключевых B1-слов: der Fall («случай, падеж»), der Unfall («авария»), der Vorfall («инцидент»), der Ausfall («сбой»), auffallen, gefallen.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. fallen',
        evidence: 'Др.-в.-нем. fallan < герм. *fallan- (родств. англ. fall).'
      }
    },
    {
      id: 'r-fallen-auffallen', prefix: 'auf', sep: 'trennbar', stress: 'áuffallen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'auffallen', forms: { praes: 'fällt auf', praet: 'fiel auf', perf: 'ist aufgefallen' }, gov: '+ Dat.',
      ru: 'бросаться в глаза, обращать на себя внимание (jdm. fällt etw. auf — кто-то замечает)',
      drill: { ru: 'бросаться в глаза / заметить (в логах)', de: 'Mir ist etwas in den Logs ___gefallen' },
      examples: [
        { de: 'Mir ist in den Logs sofort eine seltsame IP-Adresse [[aufgefallen]].', ru: 'Мне в логах сразу бросился в глаза странный IP-адрес.' },
        { de: 'Ist dir [[aufgefallen]], dass der Server heute deutlich langsamer reagiert?', ru: 'Ты заметил, что сервер сегодня заметно медленнее отвечает?' }
      ],
      morph: 'auf-fall-en',
      meaningType: 'figurative',
      meaningExplanation: 'Буквально «падать на глаза»: используется с Dativ лица («Mir fällt auf, dass…» — я замечаю, мне бросается в глаза).',
      meaningExamples: [{ de: 'Das ist mir sofort aufgefallen.', ru: 'Я это сразу заметил.' }],
      note: 'Суперчастотный глагол для SOC и офиса! Подлежащее — то, что заметили; человек — в Dativ («Mir ist etwas aufgefallen»). Отсюда «auffällig» (аномальный, подозрительный).'
    },
    {
      id: 'r-fallen-ausfallen', prefix: 'aus', sep: 'trennbar', stress: 'áusfallen', pos: 'verb',
      alsoIn: [['words', 'travel']], // Wortliste p. 21
      core: true, transparency: 'figurative',
      de: 'ausfallen', forms: { praes: 'fällt aus', praet: 'fiel aus', perf: 'ist ausgefallen' },
      ru: 'выходить из строя, падать (о сервере, сети); отменяться (о встрече, поезде); выпадать (о волосах); получаться (о результате)',
      parallel: 'ВЫпадать / ВЫходить из строя',
      drill: { ru: 'выйти из строя (о сервере); отмениться (о поезде)', de: 'Der Server ist heute Nacht ___gefallen' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'aus- здесь обозначает отключение, выход из работы — система «выпала из строя».' },
      examples: [
        { sense: 'выйти из строя (IT, техника)', de: 'Heute Nacht ist der zentrale VPN-Server für zwanzig Minuten [[ausgefallen]].', ru: 'Сегодня ночью главный VPN-сервер упал на двадцать минут.' },
        { sense: 'отмениться (встреча, поезд, занятие)', de: 'Wegen Krankheit [[fällt]] das heutige Meeting leider [[aus]].', ru: 'Из-за болезни сегодняшняя встреча, к сожалению, отменяется.' }
      ],
      morph: 'aus-fall-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ausfallen имеет три важнейших значения в Германии: «выйти из строя» (сервер, электричество), «отмениться» (поезд DB, встреча, урок) и «выдать результат» («Der Test ist gut ausgefallen»).',
      meaningExamples: [{ de: 'Der Zug fällt heute aus.', ru: 'Поезд сегодня отменён.' }, { de: 'Die Heizung ist ausgefallen.', ru: 'Отопление вышло из строя.' }],
      note: 'Всегда с sein: ist ausgefallen. Существительное: «der Ausfall» (сбой, простой, отмена).'
    },
    {
      id: 'r-fallen-einfallen', prefix: 'ein', sep: 'trennbar', stress: 'éinfallen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einfallen', forms: { praes: 'fällt ein', praet: 'fiel ein', perf: 'ist eingefallen' }, gov: '+ Dat.',
      ru: 'приходить в голову (о мысли, имени, идее)',
      drill: { ru: 'прийти в голову (вспомнить имя, идею)', de: 'Mir fällt der Name gerade nicht ___' },
      examples: [
        { de: 'Mir [[fällt]] der Name dieses Tools gerade einfach nicht [[ein]].', ru: 'Мне сейчас никак не приходит в голову название этого инструмента.' },
        { de: 'Gerade ist mir noch eine gute Lösung [[eingefallen]]!', ru: 'Мне только что пришла в голову ещё одна хорошая идея!' }
      ],
      morph: 'ein-fall-en',
      meaningType: 'figurative',
      meaningExplanation: 'Буквально «падать внутрь [головы]»: используется с Dativ человека («Mir fällt ein…» — я вспоминаю / мне приходит в голову).',
      meaningExamples: [{ de: 'Fällt dir noch etwas ein?', ru: 'Тебе ещё что-нибудь приходит в голову?' }],
      note: 'Всегда с sein и Dativ: «Mir ist gerade etwas eingefallen». Существительное: «der Einfall» — внезапная идея, догадка.'
    },
    {
      id: 'r-fallen-gefallen', prefix: 'ge', sep: 'untrennbar', stress: 'gefállen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'gefallen', forms: { praes: 'gefällt', praet: 'gefiel', perf: 'hat gefallen' }, gov: '+ Dat.',
      ru: 'нравиться (jdm. gefällt etw.)',
      examples: [
        { de: 'Die neue Übersicht im Dashboard [[gefällt]] mir richtig gut.', ru: 'Новый обзор в дашборде мне очень нравится.' },
        { de: 'Wie hat dir die Konferenz in München [[gefallen]]?', ru: 'Как тебе понравилась конференция в Мюнхене?' }
      ],
      morph: 'ge-fall-en',
      note: 'Внимание: Perfekt с HABEN и БЕЗ второго ge- (hat gefallen, а не «ist gegefallen»!). Существительное «der Gefallen» — одолжение («Kannst du mir einen Gefallen tun?»).',
      why: {
        confidence: 'high',
        root: 'fallen',
        text: 'Состав: неотделяемая приставка ge- + fallen («падать»).\nПроисхождение: в др.-в.-нем. gifallan значило «достаться, выпасть по жребию (удачно)», откуда в средневерхненемецком развилось значение «прийтись по душе, понравиться».\nПрозрачность: непрозрачное — современное «падать» не подсказывает смысл «нравиться».',
        source: 'DWDS (Pfeifer), s.v. gefallen',
        evidence: 'Др.-в.-нем. gifallan «выпасть удачно (по жребию)» → ср.-в.-нем. «прийтись по вкусу, понравиться».'
      }
    },
    {
      id: 'r-fallen-durchfallen', prefix: 'durch', sep: 'trennbar', stress: 'dúrchfallen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'durchfallen', forms: { praes: 'fällt durch', praet: 'fiel durch', perf: 'ist durchgefallen' }, gov: 'bei / in + Dat.',
      ru: 'провалиться (на экзамене, проверке, тесте)',
      parallel: 'ПРОвалиться',
      drill: { ru: 'провалиться (на экзамене, тесте)', de: 'bei der Prüfung ___fallen' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'durch- здесь буквально «провалиться насквозь» — не пройти экзамен или аудит.' },
      examples: [
        { de: 'Beim ersten Versuch ist er in der praktischen Prüfung [[durchgefallen]].', ru: 'С первой попытки он провалился на практическом экзамене.' },
        { de: 'Kein System darf beim Sicherheitsaudit [[durchfallen]].', ru: 'Ни одна система не должна провалиться на аудите безопасности.' }
      ],
      morph: 'durch-fall-en',
      note: 'Всегда с sein: ist durchgefallen. Антоним: «bestehen» (сдать экзамен: die Prüfung bestehen).'
    },
    {
      id: 'r-fallen-vorfallen', prefix: 'vor', sep: 'trennbar', stress: 'vórfallen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vorfallen', forms: { praes: 'fällt vor', praet: 'fiel vor', perf: 'ist vorgefallen' },
      ru: 'случаться, происходить (обычно о чём-то неприятном, инциденте)',
      examples: [
        { de: 'Sag mir bitte sofort Bescheid, falls während der Nachtschicht etwas [[vorfällt]].', ru: 'Сразу дай мне знать, если во время ночной смены что-нибудь случится.' },
        { de: 'Was ist gestern im Rechenzentrum eigentlich [[vorgefallen]]?', ru: 'Что вообще вчера произошло в дата-центре?' }
      ],
      morph: 'vor-fall-en',
      note: 'От этого глагола образовано ключевое слово SOC: «der Vorfall / Sicherheitsvorfall» (инцидент безопасности). Всегда с sein.'
    },
    {
      id: 'r-fallen-abfallen', prefix: 'ab', sep: 'trennbar', stress: 'ábfallen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'abfallen', forms: { praes: 'fällt ab', praet: 'fiel ab', perf: 'ist abgefallen' },
      ru: 'отваливаться, опадать (о листьях); снижаться, падать (о давлении, напряжении, нагрузке)',
      parallel: 'ОТваливаться / спадать',
      prefixDrill: { ex: 0, meaning: 2, explain: 'ab- здесь обозначает уменьшение, спад — нагрузка на серверы заметно снизилась.' },
      examples: [
        { sense: 'снижаться, спадать (о показателях)', de: 'Nach Feierabend [[fällt]] die Auslastung der Server deutlich [[ab]].', ru: 'После конца рабочего дня загрузка серверов заметно падает.' },
        { sense: 'опадать, отваливаться', de: 'Im Herbst [[fallen]] die Blätter von den Bäumen [[ab]].', ru: 'Осенью листья опадают с деревьев.' }
      ],
      morph: 'ab-fall-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abfallen значит «отваливаться / опадать» (листья, штукатурка) и техническое «снижаться, падать» (давление, скорость, нагрузка).',
      meaningExamples: [{ de: 'Der Blutdruck fällt ab.', ru: 'Давление падает.' }, { de: 'Die Blätter fallen ab.', ru: 'Листья опадают.' }],
      note: 'Родственное существительное: «der Abfall» — мусор, отходы (буквально «то, что отпадает лишним»).'
    },
    {
      id: 'r-fallen-umfallen', prefix: 'um', sep: 'trennbar', stress: 'úmfallen', pos: 'verb',
      transparency: 'transparent',
      de: 'umfallen', forms: { praes: 'fällt um', praet: 'fiel um', perf: 'ist umgefallen' },
      ru: 'опрокинуться, повалиться, упасть (из вертикального положения)',
      parallel: 'ПЕРЕвернуться / повалиться',
      prefixDrill: { ex: 0, meaning: 2, explain: 'Отделяемая um- здесь обозначает падение набок, опрокидывание.' },
      examples: [
        { de: 'Beim Sturm sind im Park mehrere Bäume [[umgefallen]].', ru: 'Во время бури в парке повалило несколько деревьев.' }
      ],
      morph: 'um-fall-en',
      note: 'Всегда с sein. Разговорно о человеке: «vor Müdigkeit fast umfallen» — буквально валиться с ног от усталости.'
    },
    {
      id: 'r-fallen-zerfallen', prefix: 'zer', sep: 'untrennbar', stress: 'zerfállen', pos: 'verb',
      transparency: 'transparent',
      de: 'zerfallen', forms: { praes: 'zerfällt', praet: 'zerfiel', perf: 'ist zerfallen' }, gov: 'in + Akk.',
      ru: 'распадаться (на части), разрушаться',
      parallel: 'РАСпадаться',
      prefixDrill: { ex: 0, meaning: 1, explain: 'Неотделяемая zer- означает «распад на части».' },
      examples: [
        { de: 'Das Projekt [[zerfiel]] am Ende in drei einzelne Teilprojekte.', ru: 'Проект в итоге распался на три отдельных подпроекта.' }
      ],
      morph: 'zer-fall-en',
      note: 'Неотделяемый с sein (ist zerfallen — без ge-!).'
    },
    {
      id: 'r-fallen-fall', pos: 'noun',
      de: 'Fall', article: 'der', plural: 'die Fälle',
      transparency: 'figurative',
      ru: 'случай, кейс; падение; грамматический падеж',
      examples: [
        { sense: 'случай, дело', de: 'Auf jeden [[Fall]] müssen wir den Vorfall sauber dokumentieren.', ru: 'В любом случае нам нужно аккуратно задокументировать инцидент.' },
        { sense: 'грамматический падеж', de: 'Der Dativ ist der dritte [[Fall]] im Deutschen.', ru: 'Датив — это третий падеж в немецком.' }
      ],
      morph: 'Fall',
      meaningType: 'polysemous',
      meaningExplanation: 'der Fall объединяет три частых значения: «случай / дело» (auf jeden Fall, im Notfall), «падение» и «грамматический падеж».',
      meaningExamples: [{ de: 'für den Fall, dass…', ru: 'на случай, если…' }, { de: 'ein klarer Fall von Phishing', ru: 'явный случай фишинга' }],
      note: 'Устойчивые связки: «auf jeden Fall» (обязательно), «auf keinen Fall» (ни в коем случае), «im schlimmsten Fall» (в худшем случае). Союз «falls» («если вдруг») — от того же корня!'
    },
    {
      id: 'r-fallen-vorfall', pos: 'noun',
      de: 'Vorfall', article: 'der', plural: 'die Vorfälle',
      transparency: 'figurative',
      ru: 'происшествие, инцидент',
      examples: [
        { de: 'Nach dem [[Vorfall]] haben wir alle Regeln im SIEM nachgeschärft.', ru: 'После инцидента мы ужесточили все правила в SIEM.' }
      ],
      morph: 'Vor-fall',
      note: 'Умлаут во мн. ч.: die Vorfälle. В безопасности: «der Sicherheitsvorfall».'
    },
    {
      id: 'r-fallen-zufall', pos: 'noun',
      de: 'Zufall', article: 'der', plural: 'die Zufälle',
      transparency: 'figurative',
      ru: 'случайность, совпадение',
      examples: [
        { de: 'Dass zwei Server genau zur selben Sekunde ausfallen, ist sicher kein [[Zufall]].', ru: 'То, что два сервера упали в одну и ту же секунду, точно не случайность.' }
      ],
      morph: 'Zu-fall',
      note: '«Durch Zufall / zufällig» — случайно. «So ein Zufall!» — «Надо же, какое совпадение!».'
    },
    {
      id: 'r-fallen-abfall', pos: 'noun',
      alsoIn: [['words', 'society']], // Wortliste p. 16
      de: 'Abfall', article: 'der', plural: 'die Abfälle',
      transparency: 'transparent',
      ru: 'мусор, отходы; спад, падение (давления, напряжения)',
      examples: [
        { de: 'In Deutschland muss man den [[Abfall]] sorgfältig trennen.', ru: 'В Германии нужно тщательно сортировать мусор.' }
      ],
      morph: 'Ab-fall',
      note: 'Официальный синоним «der Müll» (в быту чаще Müll, в законах и табличках — Abfall: Bioabfall, Restabfall, Elektroschrott).'
    }
  ]
});
