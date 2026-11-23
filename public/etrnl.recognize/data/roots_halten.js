/* ROOT: halten. Learning content in Russian. */
GT.registerRoot({
  id: 'halten', verb: 'halten', ru: 'держать; останавливаться',
  words: [
    {
      id: 'r-halten-halten', base: true, pos: 'verb',
      de: 'halten', forms: { praes: 'hält', praet: 'hielt', perf: 'hat gehalten' }, gov: '+ Akk.; von + Dat.; für + Akk.',
      ru: 'держать; останавливаться (транспорт); (halten von) думать о; (halten für) считать кем-то/чем-то',
      examples: [
        { sense: 'держать', de: 'Kannst du bitte kurz meine Tasche [[halten]]?', ru: 'Можешь, пожалуйста, секунду подержать мою сумку?' },
        { sense: 'останавливаться (о транспорте)', de: '[[Hält]] dieser Zug auch am Ostbahnhof?', ru: 'Этот поезд останавливается и на Восточном вокзале?' },
        { sense: 'считать чем-то / кем-то (für + Akk.)', de: 'Ich [[halte]] diese E-Mail für einen Phishing-Versuch.', ru: 'Я считаю это письмо попыткой фишинга.' }
      ],
      morph: 'halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Базовый глагол halten имеет несколько самостоятельных значений: «держать», «останавливаться» (о транспорте), «считать кем-то/чем-то» (halten für).',
      meaningExamples: [{ de: 'Hält der Zug in Hannover?', ru: 'Поезд останавливается в Ганновере?' }, { de: 'Ich halte das für riskant.', ru: 'Я считаю это рискованным.' }],
      note: 'Сильный глагол с умлаутом: du hältst, er hält, hielt, hat gehalten. «Was hältst du davon?» — что ты об этом думаешь? «Sich an etw. halten» — придерживаться чего-то («sich an Regeln halten»).',
      why: {
        confidence: 'high',
        root: 'halten',
        text: 'Состав: корневой глагол halt- + -en.\nПроисхождение: древневерхненемецкое haltan означало «пасти (скот), стеречь, беречь, удерживать» (родственно английскому hold). Из «удерживать» развились значения «останавливать(ся)», «сохранять» и «придерживаться мнения».\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. halten',
        evidence: 'Др.-в.-нем. haltan «пасти, стеречь, держать» < герм. *haldaną (родственно англ. hold).'
      }
    },
    {
      id: 'r-halten-behalten', prefix: 'be', sep: 'untrennbar', stress: 'behálten', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'behalten', forms: { praes: 'behält', praet: 'behielt', perf: 'hat behalten' }, gov: '+ Akk.',
      ru: 'оставлять себе, сохранять; удерживать в памяти, запоминать',
      prefixDrill: { ex: 0, meaning: 2, explain: 'be- делает действие направленным на объект («оставить чек при себе, сохранить»).' },
      examples: [
        { sense: 'оставлять себе, сохранять', de: 'Den Kassenbon sollten Sie für die Garantie [[behalten]].', ru: 'Чек стоит сохранить для гарантии.' },
        { sense: 'удерживать в памяти, помнить', de: 'Ich kann mir Namen leider schlecht [[behalten]].', ru: 'Я, к сожалению, плохо запоминаю имена.' }
      ],
      morph: 'be-halt-en',
      note: 'Неотделяемый: behielt, hat behalten. «Im Kopf behalten» — держать в голове; «für sich behalten» — оставить при себе (не рассказывать).'
    },
    {
      id: 'r-halten-erhalten', prefix: 'er', sep: 'untrennbar', stress: 'erhálten', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'erhalten', forms: { praes: 'erhält', praet: 'erhielt', perf: 'hat erhalten' }, gov: '+ Akk.',
      ru: 'получать (официально); сохранять, поддерживать',
      prefixDrill: { ex: 0, meaning: 1, explain: 'er- здесь выражает получение результата — официально «получить заявку».' },
      examples: [
        { sense: 'получать (официальный синоним bekommen)', de: 'Wir haben Ihre Bewerbung [[erhalten]] und melden uns bald.', ru: 'Мы получили вашу заявку и скоро свяжемся с вами.' },
        { sense: 'сохранять (в прежнем виде)', de: 'Das alte Gebäude ist sehr gut [[erhalten]].', ru: 'Старое здание очень хорошо сохранилось.' }
      ],
      morph: 'er-halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'erhalten — официальный синоним bekommen («получать»), но также значит «сохранять в прежнем состоянии».',
      meaningExamples: [{ de: 'Ihre E-Mail habe ich erhalten.', ru: 'Ваше письмо я получил.' }, { de: 'Arbeitsplätze erhalten', ru: 'сохранить рабочие места' }],
      note: 'В деловых письмах и отчётах «erhalten» — стандарт вместо разговорного «bekommen». «Erhalten bleiben» — сохраниться.'
    },
    {
      id: 'r-halten-enthalten', prefix: 'ent', sep: 'untrennbar', stress: 'enthálten', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'enthalten', forms: { praes: 'enthält', praet: 'enthielt', perf: 'hat enthalten' }, gov: '+ Akk.',
      ru: 'содержать (в себе); (sich enthalten) воздерживаться (при голосовании)',
      examples: [
        { sense: 'содержать в себе', de: 'Der Anhang [[enthält]] wahrscheinlich Schadcode — bitte nicht öffnen.', ru: 'Во вложении, вероятно, вредоносный код — пожалуйста, не открывайте.' },
        { sense: 'включено в цену / договор', de: 'Im Preis ist das Frühstück bereits [[enthalten]].', ru: 'Завтрак уже включён в цену.' }
      ],
      morph: 'ent-halt-en',
      note: 'Очень часто на упаковках и в IT: «enthält Nüsse», «die Datei enthält personenbezogene Daten».'
    },
    {
      id: 'r-halten-anhalten', prefix: 'an', sep: 'trennbar', stress: 'ánhalten', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'anhalten', forms: { praes: 'hält an', praet: 'hielt an', perf: 'hat angehalten' }, gov: '(+ Akk.)',
      ru: 'останавливать(ся); длиться, не прекращаться; задерживать (дыхание)',
      examples: [
        { sense: 'останавливать(ся) (транспорт, процесс)', de: 'Der Bus hat plötzlich [[angehalten]], weil ein Fahrradfahrer über Rot fuhr.', ru: 'Автобус резко остановился, потому что велосипедист проехал на красный.' },
        { sense: 'продолжаться, держаться (о погоде, проблеме)', de: 'Die Störung [[hält]] leider noch [[an]], wir arbeiten an einer Lösung.', ru: 'Сбой, к сожалению, всё ещё продолжается, мы работаем над решением.' },
        { sense: 'задерживать (дыхание)', de: 'Bitte [[halten]] Sie beim Röntgen kurz den Atem [[an]].', ru: 'Пожалуйста, задержите ненадолго дыхание во время рентгена.' }
      ],
      morph: 'an-halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'У anhalten три частых значения: «останавливать(ся)» (транспорт), «продолжаться, не спадать» (о дожде, проблеме) и «задерживать дыхание».',
      meaningExamples: [{ de: 'Der Bus hält vor dem Büro an.', ru: 'Автобус останавливается перед офисом.' }, { de: 'Die Störung hält seit gestern an.', ru: 'Сбой продолжается со вчерашнего дня.' }],
      note: '«Anhaltend» — продолжительный («anhaltende Schmerzen», «anhaltender Regen»).'
    },
    {
      id: 'r-halten-einhalten', prefix: 'ein', sep: 'trennbar', stress: 'éinhalten', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einhalten', forms: { praes: 'hält ein', praet: 'hielt ein', perf: 'hat eingehalten' }, gov: '+ Akk.',
      ru: 'соблюдать (правила, сроки, политику, диету)',
      prefixDrill: { ex: 0, meaning: 4, explain: 'ein- здесь означает «соблюдение рамок, удержание в границах» — соблюсти 72-часовой срок.' },
      examples: [
        { de: 'Wir müssen die 72-Stunden-Frist der DSGVO unbedingt [[einhalten]].', ru: 'Мы обязаны соблюсти 72-часовой срок по DSGVO.' },
        { de: 'Alle Abteilungen müssen die neuen Sicherheitsregeln [[einhalten]].', ru: 'Все отделы должны соблюдать новые правила безопасности.' }
      ],
      morph: 'ein-halt-en',
      note: 'Ключевой глагол для compliance, аудитов и быта: «einen Termin / eine Frist / Regeln / ein Versprechen einhalten». «Die Einhaltung» — соблюдение.'
    },
    {
      id: 'r-halten-unterhalten', prefix: 'unter', sep: 'untrennbar', stress: 'unterhálten', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'sich unterhalten', forms: { praes: 'unterhält sich', praet: 'unterhielt sich', perf: 'hat sich unterhalten' }, gov: 'mit + Dat.; über + Akk.',
      ru: 'беседовать, разговаривать; (без sich) развлекать; содержать (семью, здание)',
      examples: [
        { sense: 'беседовать, общаться (sich mit + Dat. über + Akk.)', de: 'In der Mittagspause habe ich mich lange mit einer Kollegin aus HR [[unterhalten]].', ru: 'В обеденный перерыв я долго общался с коллегой из HR.' },
        { sense: 'развлекать (без sich)', de: 'Der Film war einfach, aber er hat uns gut [[unterhalten]].', ru: 'Фильм был простым, но хорошо нас развлёк.' }
      ],
      morph: 'unter-halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'С sich (sich unterhalten) глагол значит «беседовать», без sich — «развлекать» или «содержать (финансово)».',
      meaningExamples: [{ de: 'Wir haben uns lange unterhalten.', ru: 'Мы долго беседовали.' }, { de: 'die Gäste gut unterhalten', ru: 'хорошо развлекать гостей' }],
      note: 'Неотделяемый (ударение на -halt-): unterhielt sich, hat sich unterhalten (без ge-). Отделяемая пара únterhalten — «подставлять снизу» (см. ниже).',
      why: {
        confidence: 'high',
        root: 'halten',
        text: 'Состав: неотделяемая приставка unter- + halten («держать»).\nПроисхождение: в средневерхненемецком unterhalten значило «поддерживать (снизу), обеспечивать средствами к существованию», откуда с XVII–XVIII вв. развилось «поддерживать беседу, занимать разговором / развлекать» (под влиянием французского entretenir).\nПрозрачность: непрозрачное — из современных unter («под») и halten («держать») значение «беседовать» не выводится.',
        source: 'DWDS (Pfeifer), s.v. unterhalten',
        evidence: 'Ср.-в.-нем. «поддерживать, содержать»; значение «беседовать / развлекать» с XVII–XVIII вв. (часто связывают с фр. entretenir).'
      }
    },
    {
      id: 'r-halten-aushalten', prefix: 'aus', sep: 'trennbar', stress: 'áushalten', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'aushalten', forms: { praes: 'hält aus', praet: 'hielt aus', perf: 'hat ausgehalten' }, gov: '+ Akk.',
      ru: 'выдерживать, терпеть (нагрузку, боль, шум, жару)',
      parallel: 'ВЫдерживать',
      prefixDrill: { ex: 0, meaning: 2, explain: 'aus- здесь означает «до конца, полностью» — выдерживать шум до конца (рус. вы-держивать).' },
      examples: [
        { de: 'Ich [[halte]] diesen Lärm im Großraumbüro kaum noch [[aus]].', ru: 'Я уже едва выдерживаю этот шум в опенспейсе.' },
        { de: '[[Hält]] der Server diese Last überhaupt [[aus]]?', ru: 'Сервер вообще выдержит такую нагрузку?' }
      ],
      morph: 'aus-halt-en',
      note: 'И про людей («Schmerzen / Stress aushalten»), и про технику («eine Belastung aushalten»). «Nicht auszuhalten» — невыносимо.'
    },
    {
      id: 'r-halten-abhalten', prefix: 'ab', sep: 'trennbar', stress: 'ábhalten', pos: 'verb',
      transparency: 'transparent',
      de: 'abhalten', forms: { praes: 'hält ab', praet: 'hielt ab', perf: 'hat abgehalten' }, gov: 'jdn. (Akk.) von + Dat.; + Akk.',
      ru: 'удерживать (кого-то от чего-то), отвлекать; проводить (собрание)',
      parallel: 'Удерживать (от)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ab- здесь означает «прочь, в стороне» — удержать кого-то в стороне от работы, отвлечь.' },
      examples: [
        { sense: 'удерживать от, отвлекать (von + Dat.)', de: 'Entschuldigung, ich will dich nicht von der Arbeit [[abhalten]].', ru: 'Извини, не хочу тебя отвлекать от работы.' },
        { sense: 'проводить (собрание, выборы)', de: 'Einmal im Quartal [[halten]] wir ein großes Team-Meeting [[ab]].', ru: 'Раз в квартал мы проводим большую командную встречу.' }
      ],
      morph: 'ab-halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abhalten von + Dat. значит «удерживать, отвлекать кого-то от дела», а с существительным события — «проводить (собрание, выборы)».',
      meaningExamples: [{ de: 'Sorry, ich will dich nicht von der Arbeit abhalten.', ru: 'Извини, не хочу отвлекать тебя от работы.' }, { de: 'eine Sitzung abhalten', ru: 'провести заседание' }],
      note: 'Вежливая офисная фраза: «Ich will Sie nicht länger abhalten» — не буду вас больше задерживать.'
    },
    {
      id: 'r-halten-aufhalten', prefix: 'auf', sep: 'trennbar', stress: 'áufhalten', pos: 'verb',
      transparency: 'figurative',
      de: 'aufhalten', forms: { praes: 'hält auf', praet: 'hielt auf', perf: 'hat aufgehalten' }, gov: '+ Akk.; sich aufhalten',
      ru: 'задерживать (кого-то), останавливать; (sich aufhalten) находиться, пребывать',
      examples: [
        { sense: 'задерживать, останавливать', de: 'Der Stau auf der Autobahn hat uns fast eine Stunde [[aufgehalten]].', ru: 'Пробка на автобане задержала нас почти на час.' },
        { sense: 'находиться, пребывать (sich aufhalten)', de: 'Wie lange [[halten]] Sie sich beruflich in Deutschland [[auf]]?', ru: 'Как долго вы находитесь в Германии по работе?' }
      ],
      morph: 'auf-halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Переходное aufhalten значит «задерживать, останавливать», а возвратное sich aufhalten — «находиться, пребывать где-то».',
      meaningExamples: [{ de: 'Ich will Sie nicht lange aufhalten.', ru: 'Не хочу вас долго задерживать.' }, { de: 'Sie hält sich oft in Berlin auf.', ru: 'Она часто бывает в Берлине.' }],
      note: 'От возвратного значения «sich aufhalten» происходит очень важное для жизни в Германии слово «der Aufenthalt» (пребывание) и «der Aufenthaltstitel» (ВНЖ).'
    },
    {
      id: 'r-halten-verhalten', prefix: 'ver', sep: 'untrennbar', stress: 'verhálten', pos: 'verb',
      transparency: 'opaque',
      de: 'sich verhalten', forms: { praes: 'verhält sich', praet: 'verhielt sich', perf: 'hat sich verhalten' },
      ru: 'вести себя, действовать (о человеке или системе)',
      examples: [
        { sense: 'вести себя (о человеке, в ситуации)', de: 'Wie soll ich mich [[verhalten]], wenn ich eine verdächtige Mail bekomme?', ru: 'Как мне поступать, если я получил подозрительное письмо?' },
        { sense: 'вести себя (о программе, системе)', de: 'Nach dem Patch [[verhält]] sich der Prozess plötzlich auffällig.', ru: 'После патча процесс вдруг ведёт себя подозрительно.' }
      ],
      morph: 'ver-halt-en',
      note: 'Шире и нейтральнее, чем «sich benehmen» (которое только про манеры). В SOC часто: «auffälliges Verhalten» — подозрительное поведение системы или пользователя.',
      why: {
        confidence: 'high',
        root: 'halten',
        text: 'Состав: неотделяемая приставка ver- + halten («держать»).\nПроисхождение: изначально возвратное sich verhalten значило «держать себя определённым образом, сдерживаться», откуда развилось нейтральное «вести себя, проявлять себя».\nПрозрачность: непрозрачное — современное значение не выводится напрямую из ver- + «держать».',
        source: 'DWDS (Pfeifer), s.v. verhalten',
        evidence: 'Ср.-в.-нем. sich verhalten «удерживать себя, держаться определённым образом» → «вести себя».'
      }
    },
    {
      id: 'r-halten-festhalten', prefix: 'fest', sep: 'trennbar', stress: 'fésthalten', pos: 'verb',
      transparency: 'transparent',
      de: 'festhalten', forms: { praes: 'hält fest', praet: 'hielt fest', perf: 'hat festgehalten' }, gov: '+ Akk.; an + Dat.',
      ru: 'крепко держать; фиксировать письменно (в протоколе, отчёте); держаться за (an + Dat.)',
      examples: [
        { sense: 'фиксировать письменно (в отчёте, протоколе)', de: 'Alle wichtigen Schritte sollten wir im Protokoll [[festhalten]].', ru: 'Все важные шаги стоит зафиксировать в протоколе.' },
        { sense: 'крепко держаться (sich an + Dat.)', de: 'In der vollen Straßenbahn musste ich mich gut [[festhalten]].', ru: 'В полном трамвае мне пришлось крепко держаться.' }
      ],
      morph: 'fest-halt-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Помимо физического «крепко держаться» (sich festhalten), в деловой речи festhalten стандартно значит «зафиксировать письменно в протоколе/отчёте».',
      meaningExamples: [{ de: 'Bitte im Bus gut festhalten!', ru: 'Держитесь крепко в автобусе!' }, { de: 'alle Ergebnisse im Protokoll festhalten', ru: 'зафиксировать все итоги в протоколе' }],
      note: 'Очень полезно на совещаниях: «Halten wir das kurz fest» — давай коротко зафиксируем это.'
    },
    {
      id: 'r-halten-inhalt', pos: 'noun', transparency: 'figurative',
      de: 'Inhalt', article: 'der', plural: 'die Inhalte',
      ru: 'содержание, содержимое, контент',
      examples: [
        { de: 'Der [[Inhalt]] der E-Mail war verschlüsselt.', ru: 'Содержимое письма было зашифровано.' },
        { de: 'Kannst du mir kurz den [[Inhalt]] des Berichts zusammenfassen?', ru: 'Можешь коротко пересказать мне содержание отчёта?' }
      ],
      morph: 'In-halt',
      note: '«Das Inhaltsverzeichnis» — оглавление; «inhaltlich» — по содержанию («inhaltlich bin ich einverstanden»).'
    },
    {
      id: 'r-halten-verhalten-n', pos: 'noun', transparency: 'opaque',
      de: 'Verhalten', article: 'das',
      ru: 'поведение (человека, системы)',
      examples: [
        { de: 'Der EDR erkennt Schadsoftware anhand ihres [[Verhaltens]].', ru: 'EDR распознаёт вредоносное ПО по его поведению.' },
        { de: 'Sein [[Verhalten]] im Meeting hat viele Kollegen überrascht.', ru: 'Его поведение на встрече удивило многих коллег.' }
      ],
      morph: 'Ver-halten',
      note: 'Без мн. ч. В безопасности: «die Verhaltensanalyse» — поведенческий анализ.'
    },
    {
      id: 'r-halten-unterhaltung', pos: 'noun', transparency: 'opaque',
      de: 'Unterhaltung', article: 'die', plural: 'die Unterhaltungen',
      ru: 'беседа, разговор; развлечение',
      examples: [
        { sense: 'беседа, разговор', de: 'Danke für die nette [[Unterhaltung]], wir sehen uns morgen!', ru: 'Спасибо за приятный разговор, увидимся завтра!' },
        { sense: 'развлечение', de: 'Abends schaue ich manchmal eine Serie zur [[Unterhaltung]].', ru: 'По вечерам я иногда смотрю сериал для развлечения.' }
      ],
      morph: 'Unter-halt-ung',
      meaningType: 'polysemous',
      meaningExplanation: 'die Unterhaltung, как и глагол unterhalten, имеет два значения: «разговор, беседа» и «развлечение, индустрия развлечений».',
      meaningExamples: [{ de: 'eine nette Unterhaltung beim Kaffee', ru: 'приятная беседа за кофе' }, { de: 'gute Unterhaltung am Abend', ru: 'хорошее развлечение на вечер' }],
      note: 'Не путать с «der Unterhalt» (алименты / содержание семьи).'
    },
    {
      id: 'r-halten-aufenthalt', pos: 'noun', transparency: 'opaque',
      de: 'Aufenthalt', article: 'der', plural: 'die Aufenthalte',
      ru: 'пребывание (в стране, больнице, городе)',
      examples: [
        { de: 'Für den [[Aufenthalt]] in Deutschland braucht man einen gültigen Aufenthaltstitel.', ru: 'Для пребывания в Германии нужен действительный вид на жительство.' },
        { de: 'Wie war Ihr [[Aufenthalt]] in der Klinik?', ru: 'Как прошло ваше пребывание в клинике?' }
      ],
      morph: 'Auf-enthalt',
      note: 'Ключевые слова немецкой бюрократии: «die Aufenthaltserlaubnis» / «der Aufenthaltstitel» — вид на жительство; «die Niederlassungserlaubnis» — ПМЖ.'
    }
  ],
  pairs: [
    {
      a: { stress: 'únterhalten', sep: 'trennbar', ru: 'подставлять снизу, держать под чем-то', ex: { de: '[[Halt]] bitte den Eimer [[unter]], die Leitung tropft!', ru: 'Подставь, пожалуйста, ведро снизу, труба капает!' } },
      b: { stress: 'unterhálten', sep: 'untrennbar', ru: 'беседовать (sich); развлекать; содержать', ex: { de: 'Wir haben uns eine Stunde lang [[unterhalten]].', ru: 'Мы проговорили целый час.' } }
    }
  ]
});
