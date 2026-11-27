/* ROOT: stehen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'stehen', verb: 'stehen', ru: 'стоять',
  words: [
    {
      id: 'r-stehen-stehen', base: true, pos: 'verb',
      de: 'stehen', forms: { praes: 'steht', praet: 'stand', perf: 'hat gestanden' },
      ru: 'стоять; быть написанным (в тексте, логе); идти (об одежде)',
      examples: [
        { sense: 'стоять физически / на паузе', de: 'Der ganze Betrieb [[stand]] zwei Stunden lang still.', ru: 'Вся работа стояла два часа.' },
        { sense: 'быть написанным (в документе, письме)', de: 'Im Vertrag [[steht]], dass die Kündigungsfrist drei Monate beträgt.', ru: 'В договоре написано, что срок уведомления об увольнении — три месяца.' }
      ],
      morph: 'steh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'stehen значит не только «стоять физически», но и «быть написанным» (в письме, договоре, логах: «Was steht im Protokoll?»), а с Dativ про одежду — «быть к лицу» («Die Farbe steht dir gut»).',
      meaningExamples: [{ de: 'Was steht in der E-Mail?', ru: 'Что написано в письме?' }, { de: 'Die Jacke steht dir gut.', ru: 'Эта куртка тебе идёт.' }],
      note: 'На севере и в стандарте Perfekt с haben (hat gestanden), на юге Германии и в Австрии/Швейцарии также ist gestanden. Полезное: «zur Verfügung stehen» — быть в распоряжении.',
      why: {
        confidence: 'high',
        root: 'stehen',
        text: 'Состав: корневой сильный глагол steh- + -en (претерит stand, партицип gestanden).\nПроисхождение: восходит к и.-е. корню *steh₂- («стоять»), который напрямую родственен русскому «стоять» и английскому stand. От него образованы важнейшие слова: verstehen, entstehen, bestehen, Zustand, Abstand, Gegenstand.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. stehen; Vasmer: стоять',
        evidence: 'Др.-в.-нем. stān/stēn (прет. stuont) < и.-е. *steh₂- «стоять» (родств. рус. «стоять», англ. stand).'
      },
      ru_link: { type: 'shared_ancient_root', text: 'stehen и русское «стоять» (а также английское stand) восходят к одному индоевропейскому корню *steh₂-.' }
    },
    {
      id: 'r-stehen-verstehen', prefix: 'ver', sep: 'untrennbar', stress: 'verstéhen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'verstehen', forms: { praes: 'versteht', praet: 'verstand', perf: 'hat verstanden' }, gov: '+ Akk. · sich mit + Dat. verstehen',
      ru: 'понимать; (sich mit jdm. verstehen) ладить с кем-то',
      examples: [
        { sense: 'понимать', de: 'Habe ich Sie richtig [[verstanden]], dass das Update erst am Montag kommt?', ru: 'Я правильно вас понял, что обновление будет только в понедельник?' },
        { sense: 'ладить с кем-то (sich verstehen)', de: 'Wir [[verstehen]] uns im Team alle sehr gut.', ru: 'Мы все в команде очень хорошо ладим.' }
      ],
      morph: 'ver-steh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Переходное verstehen значит «понимать», а возвратное sich gut/schlecht mit jdm. verstehen — «хорошо/плохо ладить с человеком».',
      meaningExamples: [{ de: 'Das verstehe ich gut.', ru: 'Я это хорошо понимаю.' }, { de: 'Ich verstehe mich super mit ihr.', ru: 'Я отлично с ней лажу.' }],
      note: 'Классический пример «смысл ушёл»: к «стоять» в современном языке отношения не имеет. Существительные: «das Verständnis» (понимание), «das Missverständnis» (недоразумение).',
      why: {
        confidence: 'high',
        root: 'stehen',
        text: 'Состав: неотделяемая приставка ver- + stehen («стоять»).\nПроисхождение: др.-в.-нем. firstān, вероятно, развилось из юридического «предстать перед чем-то, защищать дело на суде → хорошо знать, понимать» (как и английское understand).\nПрозрачность: непрозрачное — из «стоять» смысл «понимать» сегодня не выводится.',
        source: 'DWDS (Pfeifer), s.v. verstehen',
        evidence: 'Др.-в.-нем. firstān/firstēn; переход к «понимать» — ранний общезападногерманский сдвиг (ср. англ. understand).'
      }
    },
    {
      id: 'r-stehen-bestehen', prefix: 'be', sep: 'untrennbar', stress: 'bestéhen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'bestehen', forms: { praes: 'besteht', praet: 'bestand', perf: 'hat bestanden' }, gov: '+ Akk. / aus + Dat. / auf + Dat.',
      ru: 'сдать (экзамен, тест); состоять из (aus + Dat.); существовать; настаивать на (auf + Dat.)',
      examples: [
        { sense: 'сдать (экзамен, аудит)', de: 'Sie hat die Zertifizierung beim ersten Versuch [[bestanden]].', ru: 'Она сдала сертификацию с первой попытки.' },
        { sense: 'состоять из (aus + Dat.)', de: 'Ein starkes Passwort [[besteht]] aus mindestens zwölf Zeichen.', ru: 'Надёжный пароль состоит минимум из двенадцати символов.' },
        { sense: 'существовать / иметься (о риске, праве)', de: 'Bei dieser Lücke [[besteht]] akute Gefahr.', ru: 'При этой уязвимости существует острая опасность.' }
      ],
      morph: 'be-steh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'У bestehen четыре важнейших значения, различающихся управлением: + Akk. — «сдать экзамен/пройти проверку», aus + Dat. — «состоять из», без предлога — «существовать», auf + Dat. — «настаивать на».',
      meaningExamples: [{ de: 'die Probezeit bestehen', ru: 'пройти испытательный срок' }, { de: 'aus drei Teilen bestehen', ru: 'состоять из трёх частей' }, { de: 'auf einer Lösung bestehen', ru: 'настаивать на решении' }],
      note: 'Неотделяемый: hat bestanden (без ge-!). «Es besteht kein Grund zur Panik» — нет причин для паники.'
    },
    {
      id: 'r-stehen-entstehen', prefix: 'ent', sep: 'untrennbar', stress: 'entstéhen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'entstehen', forms: { praes: 'entsteht', praet: 'entstand', perf: 'ist entstanden' }, gov: 'durch + Akk. / aus + Dat.',
      ru: 'возникать, появляться, образовываться (об ошибке, ущербе, проблеме)',
      parallel: 'ВОЗникать',
      drill: { ru: 'возникать (о проблеме, ущербе, расходах)', de: 'Dadurch ___stehen hohe Kosten' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'ent- здесь означает «возникновение, появление» — ущерб возник из-за ошибки конфигурации.' },
      examples: [
        { de: 'Durch die Fehlkonfiguration ist ein erheblicher Schaden [[entstanden]].', ru: 'Из-за ошибки конфигурации возник значительный ущерб.' },
        { de: 'Bei der Migration [[entstehen]] oft unerwartete Abhängigkeiten.', ru: 'При миграции часто возникают неожиданные зависимости.' }
      ],
      morph: 'ent-steh-en',
      note: 'ВСЕГДА с sein (ist entstanden — без ge-!). Очень частотно в отчётах: «Wie ist der Fehler entstanden?» — как возникла ошибка?'
    },
    {
      id: 'r-stehen-aufstehen', prefix: 'auf', sep: 'trennbar', stress: 'áufstehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'aufstehen', forms: { praes: 'steht auf', praet: 'stand auf', perf: 'ist aufgestanden' },
      ru: 'вставать (с постели, со стула)',
      parallel: 'ВСТавать',
      drill: { ru: 'вставать (утром, со стула)', de: 'um sechs Uhr ___stehen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'auf- здесь означает движение вверх — «подняться, встать с постели».' },
      examples: [
        { de: 'In der Frühschicht muss ich schon um halb sechs [[aufstehen]].', ru: 'В утреннюю смену мне приходится вставать уже в полшестого.' }
      ],
      morph: 'auf-steh-en',
      note: 'ВСЕГДА с sein (ist aufgestanden), потому что описывает смену положения тела!'
    },
    {
      id: 'r-stehen-anstehen', prefix: 'an', sep: 'trennbar', stress: 'ánstehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'anstehen', forms: { praes: 'steht an', praet: 'stand an', perf: 'hat angestanden' },
      ru: 'предстоять, быть на повестке (о задаче, обновлении); стоять в очереди',
      drill: { ru: 'предстоять (об обновлении, встрече); стоять в очереди', de: 'Was steht diese Woche ___?' },
      examples: [
        { sense: 'предстоять, быть в планах (в офисе)', de: 'Nächste Woche [[steht]] das große Firewall-Update [[an]].', ru: 'На следующей неделе предстоит большое обновление файрвола.' },
        { sense: 'стоять в очереди', de: 'Am Flughafen mussten wir eine Stunde an der Sicherheitskontrolle [[anstehen]].', ru: 'В аэропорту нам пришлось час стоять в очереди на досмотр.' }
      ],
      morph: 'an-steh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'anstehen значит «стоять в очереди» (у кассы, в аэропорту) и очень частотное офисное «предстоять, быть на очереди» («Was steht heute an?» — что сегодня в планах?).',
      meaningExamples: [{ de: 'Was steht heute an?', ru: 'Что сегодня на повестке?' }, { de: 'lange an der Kasse anstehen', ru: 'долго стоять в очереди на кассу' }],
      note: 'Любимый вопрос на дейли-стендапе: «Was steht heute bei dir an?».'
    },
    {
      id: 'r-stehen-feststehen', prefix: 'fest', sep: 'trennbar', stress: 'féststehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'feststehen', forms: { praes: 'steht fest', praet: 'stand fest', perf: 'hat festgestanden' },
      ru: 'быть точно известным, установленным, решённым',
      examples: [
        { de: 'Der Termin für das Audit [[steht]] schon seit März [[fest]].', ru: 'Дата аудита точно определена уже с марта.' },
        { de: 'Eines [[steht]] [[fest]]: Wir müssen die Zugangsdaten sofort zurücksetzen.', ru: 'Одно ясно точно: мы должны немедленно сбросить учётные данные.' }
      ],
      morph: 'fest-steh-en',
      note: 'Непереходная пара к feststellen («установить факт»): «Wir stellen fest, dass…» → «Es steht fest, dass…» («установлено точно, что…»).'
    },
    {
      id: 'r-stehen-zustehen', prefix: 'zu', sep: 'trennbar', stress: 'zústehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'zustehen', forms: { praes: 'steht zu', praet: 'stand zu', perf: 'hat zugestanden' }, gov: '+ Dat.',
      ru: 'причитаться, полагаться по праву (отпуск, компенсация)',
      examples: [
        { de: 'Laut Arbeitsvertrag [[stehen]] mir 30 Urlaubstage pro Jahr [[zu]].', ru: 'По трудовому договору мне полагается 30 дней отпуска в год.' }
      ],
      morph: 'zu-steh-en',
      note: 'Требует Dativ лица («mir steht etw. zu»). От того же корня происходит «zuständig» (компетентный, ответственный за участок).'
    },
    {
      id: 'r-stehen-unterstehen', prefix: 'unter', sep: 'trennbar / untrennbar', stress: 'únterstehen (стоять под крышей) · unterstéhen (подчиняться)', pos: 'verb',
      transparency: 'figurative',
      de: 'unterstehen', forms: { praes: 'steht unter / untersteht', praet: 'stand unter / unterstand', perf: 'hat untergestanden / hat unterstanden' }, gov: '+ Dat. (неотд.)',
      ru: '(неотд., + Dat.) подчиняться (руководителю, закону); (отд.) пережидать дождь под навесом',
      examples: [
        { sense: 'подчиняться (неотд., + Dat.)', de: 'Unser SOC [[untersteht]] direkt dem CISO.', ru: 'Наш SOC подчиняется напрямую CISO.' },
        { sense: 'пережидать дождь под крышей (отд.)', de: 'Bei dem starken Regen haben wir kurz unter dem Dach [[untergestanden]].', ru: 'Во время сильного дождя мы недолго переждали под крышей.' }
      ],
      morph: 'unter-steh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Пара по ударению: неотделяемое unterstéhen + Dat. («подчиняться начальнику, ведомству, закону») и отделяемое únterstehen («стоять под навесом от дождя»).',
      meaningExamples: [{ de: 'Die Daten unterstehen der DSGVO.', ru: 'Эти данные подпадают под действие DSGVO.' }, { de: 'bei Regen unterstehen', ru: 'переждать дождь под крышей' }],
      note: 'В корпоративном контексте практически всегда неотделяемый: «untersteht + Dat.».'
    },
    {
      id: 'r-stehen-beistehen', prefix: 'bei', sep: 'trennbar', stress: 'béistehen', pos: 'verb',
      transparency: 'figurative',
      de: 'beistehen', forms: { praes: 'steht bei', praet: 'stand bei', perf: 'hat beigestanden' }, gov: '+ Dat.',
      ru: 'поддерживать, приходить на помощь (в трудной ситуации)',
      examples: [
        { de: 'Bei dem schweren Incident haben uns die Kollegen aus der Infrastruktur sofort [[beigestanden]].', ru: 'Во время тяжёлого инцидента коллеги из инфраструктуры сразу нас поддержали.' }
      ],
      morph: 'bei-steh-en',
      note: 'Буквально «стоять рядом с кем-то» (+ Dativ).'
    },
    {
      id: 'r-stehen-zustand', pos: 'noun',
      de: 'Zustand', article: 'der', plural: 'die Zustände',
      transparency: 'figurative',
      ru: 'состояние (здоровья, системы, здания)',
      examples: [
        { de: 'Der [[Zustand]] des Patienten ist nach der Operation wieder stabil.', ru: 'Состояние пациента после операции снова стабильное.' }
      ],
      morph: 'Zu-stand',
      note: '«In gutem / schlechtem Zustand sein». Мн. ч. «die Zustände» часто означает «бардак, безобразные порядки» («Das sind ja unmögliche Zustände!»).'
    },
    {
      id: 'r-stehen-abstand', pos: 'noun',
      de: 'Abstand', article: 'der', plural: 'die Abstände',
      transparency: 'transparent',
      ru: 'дистанция, расстояние; интервал (во времени)',
      examples: [
        { de: 'Wir prüfen die Backups in regelmäßigen [[Abständen]].', ru: 'Мы проверяем бэкапы через регулярные интервалы.' }
      ],
      morph: 'Ab-stand',
      note: '«Abstand halten» — соблюдать дистанцию; «mit Abstand am besten» — с большим отрывом лучший.'
    },
    {
      id: 'r-stehen-gegenstand', pos: 'noun',
      de: 'Gegenstand', article: 'der', plural: 'die Gegenstände',
      transparency: 'figurative',
      ru: 'предмет, объект; предмет обсуждения/договора',
      examples: [
        { de: 'Die neuen Sicherheitsregeln sind heute [[Gegenstand]] unserer Besprechung.', ru: 'Новые правила безопасности сегодня — предмет нашего совещания.' }
      ],
      morph: 'Gegen-stand',
      meaningType: 'polysemous',
      meaningExplanation: 'der Gegenstand обозначает физический предмет/вещь (в быту, в бюро находок) и абстрактный «предмет разговора / договора / исследования».',
      meaningExamples: [{ de: 'persönliche Gegenstände', ru: 'личные вещи/предметы' }, { de: 'Gegenstand des Vertrags', ru: 'предмет договора' }],
      note: 'Интересная параллель: Gegen-stand и русское «пред-мет» оба калькируют латинское ob-iectum («брошенное/стоящее напротив»).',
      why: {
        confidence: 'high',
        root: 'stehen',
        text: 'Состав: gegen («напротив») + der Stand («стояние», от stehen).\nПроисхождение: словообразовательная калька XVII–XVIII вв. с латинского obiectum («брошенное перед/напротив», объект). Русское «предмет» (пред + метать «бросать») — калька с той же латинской модели.\nПрозрачность: закреплённое существительное, связь со stehen видна в основе -stand.',
        source: 'DWDS (Pfeifer), s.v. Gegenstand; Vasmer: предмет',
        evidence: 'Калька XVII–XVIII вв. с лат. obiectum (gegen + Stand); русское «предмет» копирует ту же латинскую модель.'
      }
    },
    {
      id: 'r-stehen-verstaendnis', pos: 'noun',
      de: 'Verständnis', article: 'das',
      transparency: 'opaque',
      ru: 'понимание, сочувствие',
      examples: [
        { de: 'Vielen Dank für Ihr [[Verständnis]] während der Wartungsarbeiten!', ru: 'Большое спасибо за ваше понимание во время технических работ!' }
      ],
      morph: 'Ver-ständ-nis',
      note: '«Vielen Dank für Ihr Verständnis!» — главная вежливая формула немецких объявлений и писем про отключения/перебои. «Das Missverständnis» — недоразумение.'
    }
  ],
  pairs: [
    {
      a: { stress: 'únterstehen', sep: 'trennbar · hat untergestanden', ru: 'пережидать дождь под навесом / крышей',
        ex: { de: 'Wir [[standen]] kurz unter dem Vordach [[unter]], bis der Regen aufhörte.', ru: 'Мы недолго постояли под козырьком, пока не кончился дождь.' } },
      b: { stress: 'unterstéhen (+ Dat.)', sep: 'untrennbar · hat unterstanden', ru: 'подчиняться (руководителю, ведомству, закону)',
        ex: { de: 'Alle sensiblen Daten [[unterstehen]] strengen Datenschutzregeln.', ru: 'Все чувствительные данные подпадают под строгие правила защиты данных.' } }
    }
  ]
});
