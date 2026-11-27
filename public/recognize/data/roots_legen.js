/* ROOT: legen. Learning content in Russian. */
GT.registerRoot({
  id: 'legen', verb: 'legen', ru: 'класть (горизонтально)',
  words: [
    {
      id: 'r-legen-legen', base: true, pos: 'verb',
      de: 'legen', forms: { praes: 'legt', praet: 'legte', perf: 'hat gelegt' }, gov: '+ Akk.; sich legen',
      ru: 'класть (горизонтально); (sich legen) ложиться; стихать',
      examples: [
        { sense: 'класть горизонтально', de: '[[Leg]] die Schlüssel bitte auf den Tisch.', ru: 'Положи, пожалуйста, ключи на стол.' },
        { sense: 'ложиться (sich legen)', de: 'Ich bin müde und [[lege]] mich kurz ins Bett.', ru: 'Я устал и прилягу ненадолго.' }
      ],
      morph: 'leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'legen значит «класть горизонтально», а sich legen — «ложиться» и «стихать, утихать» (о ветре, шторме, волнении).',
      meaningExamples: [{ de: 'den Schlüssel auf den Tisch legen', ru: 'положить ключ на стол' }, { de: 'Der Sturm hat sich gelegt.', ru: 'Шторм утих.' }],
      note: 'Слабый глагол (в отличие от сильного liegen — лежать). Куда? → Akkusativ: «auf den Tisch legen». «Wert auf etw. legen» — придавать чему-то большое значение.',
      why: {
        confidence: 'high',
        root: 'legen',
        text: 'Состав: корневой глагол leg- + -en.\nПроисхождение: древневерхненемецкое leggen — каузативный глагол к liegen («заставить лежать», т. е. «положить»). Восходит к индоевропейскому корню *legʰ-, родственному русским «лежать» и «ложить(ся)».\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. legen; Vasmer: лежать',
        evidence: 'Др.-в.-нем. leggen < герм. *lagjaną (каузатив к liegen) < и.-е. *legʰ- (родственно рус. «лежать»).'
      }
    },
    {
      id: 'r-legen-ueberlegen', prefix: 'über', sep: 'untrennbar', stress: 'überlégen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'überlegen', forms: { praes: 'überlegt', praet: 'überlegte', perf: 'hat überlegt' }, gov: '(sich Dat.) etw. (Akk.)',
      ru: 'обдумывать, размышлять, прикидывать',
      examples: [
        { de: 'Ich muss mir das Angebot noch einmal in Ruhe [[überlegen]].', ru: 'Мне нужно ещё раз спокойно обдумать это предложение.' },
        { de: 'Lass uns kurz [[überlegen]], wie wir das Problem lösen können.', ru: 'Давай быстро подумаем, как мы можем решить эту проблему.' }
      ],
      morph: 'über-leg-en',
      note: 'Неотделяемый (ударение на -leg-): hat überlegt (без ge-). Часто с «sich» в Dativ: «Ich überlege mir das». Отделяемая пара ǘberlegen — «накинуть сверху» (см. ниже).',
      why: {
        confidence: 'high',
        root: 'legen',
        text: 'Состав: неотделяемая приставка über- + legen («класть»).\nПроисхождение: в ранненововерхненемецком überlegen значило «подсчитывать, сопоставлять, взвешивать» (вероятно, из перекладывания счётных фишек или наложения мерки), откуда с XVI–XVII вв. развилось значение «обдумывать».\nПрозрачность: непрозрачное — современное значение «размышлять» из буквального «класть» не выводится.',
        source: 'DWDS (Pfeifer), s.v. überlegen',
        evidence: 'С XVI–XVII вв. «подсчитывать, взвешивать» → «обдумывать»; исторически производное от legen.'
      }
    },
    {
      id: 'r-legen-anlegen', prefix: 'an', sep: 'trennbar', stress: 'ánlegen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'anlegen', forms: { praes: 'legt an', praet: 'legte an', perf: 'hat angelegt' }, gov: '+ Akk.',
      ru: 'создавать (аккаунт, папку, тикет); вкладывать (деньги); пристёгивать (ремень)',
      prefixDrill: { ex: 2, meaning: 4, explain: 'an- здесь означает «надевание, прикладывание к себе» — пристегнуть ремень безопасности.' },
      examples: [
        { sense: 'создавать (учётку, папку, файл в IT)', de: 'Kannst du für die neue Kollegin ein Benutzerkonto [[anlegen]]?', ru: 'Можешь создать учётную запись для новой коллеги?' },
        { sense: 'вкладывать (деньги)', de: 'Er möchte sein Geld langfristig [[anlegen]].', ru: 'Он хочет вложить свои деньги на долгий срок.' },
        { sense: 'пристёгивать (ремень), надевать', de: 'Bitte [[legen]] Sie vor dem Start den Sicherheitsgurt [[an]].', ru: 'Пожалуйста, пристегните ремень безопасности перед взлётом.' }
      ],
      morph: 'an-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Глагол anlegen используется в трёх разных сферах: «создавать учётку/папку/тикет» (IT), «вкладывать деньги» и «пристёгивать ремень».',
      meaningExamples: [{ de: 'einen neuen Benutzer anlegen', ru: 'создать нового пользователя (IT)' }, { de: 'Geld langfristig anlegen', ru: 'вложить деньги на долгий срок' }, { de: 'den Sicherheitsgurt anlegen', ru: 'пристегнуть ремень безопасности' }],
      note: 'В IT «ein Konto / ein Ticket / einen Ordner anlegen» — стандартный глагол для «создать» (наряду с erstellen).'
    },
    {
      id: 'r-legen-festlegen', prefix: 'fest', sep: 'trennbar', stress: 'féstlegen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'festlegen', forms: { praes: 'legt fest', praet: 'legte fest', perf: 'hat festgelegt' }, gov: '+ Akk.; sich auf + Akk.',
      ru: 'устанавливать, фиксировать (сроки, правила); (sich festlegen) определиться',
      examples: [
        { sense: 'устанавливать, фиксировать (правила, сроки)', de: 'Im Meeting haben wir die nächsten Schritte [[festgelegt]].', ru: 'На встрече мы зафиксировали следующие шаги.' },
        { sense: 'определиться, принять твёрдое решение (sich auf)', de: 'Ich möchte mich heute noch nicht auf einen Termin [[festlegen]].', ru: 'Я пока не хочу сегодня жёстко фиксировать дату.' }
      ],
      morph: 'fest-leg-en',
      note: 'fest = твёрдо: «твёрдо положить» → зафиксировать. Очень часто в проектах и политиках: «Richtlinien / Fristen festlegen».'
    },
    {
      id: 'r-legen-ablegen', prefix: 'ab', sep: 'trennbar', stress: 'áblegen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ablegen', forms: { praes: 'legt ab', praet: 'legte ab', perf: 'hat abgelegt' }, gov: '+ Akk.',
      ru: 'сдавать (экзамен, тест); сохранять, складывать (файлы, документы); снимать, оставлять (верхнюю одежду); избавляться (от привычки)',
      prefixDrill: { ex: 2, meaning: 1, explain: 'ab- здесь означает «вниз, с поверхности» — снять куртку и положить её.' },
      examples: [
        { sense: 'сдавать (экзамен, сертификацию)', de: 'Nächsten Monat will ich die B2-Prüfung [[ablegen]].', ru: 'В следующем месяце я хочу сдать экзамен B2.' },
        { sense: 'сохранять, складывать (файлы, документы)', de: 'Wo hast du den Abschlussbericht [[abgelegt]]?', ru: 'Куда ты сохранил итоговый отчёт?' },
        { sense: 'снимать (верхнюю одежду)', de: 'Komm rein, du kannst deine Jacke hier [[ablegen]].', ru: 'Заходи, можешь оставить куртку здесь.' }
      ],
      morph: 'ab-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ablegen чаще всего значит «сдавать экзамен» (eine Prüfung ablegen) и «сохранять, подшивать файлы/документы», а также вежливое «снимать верхнюю одежду» и «избавляться от привычки».',
      meaningExamples: [{ de: 'die B1-Prüfung ablegen', ru: 'сдать экзамен B1' }, { de: 'Dateien im richtigen Ordner ablegen', ru: 'сохранить файлы в нужной папке' }],
      note: 'В офисе и IT «Dateien ablegen» — положить/сохранить файлы в папку («die Ablage» — папка, архив, буфер обмена в «Zwischenablage»).'
    },
    {
      id: 'r-legen-auflegen', prefix: 'auf', sep: 'trennbar', stress: 'áuflegen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'auflegen', forms: { praes: 'legt auf', praet: 'legte auf', perf: 'hat aufgelegt' }, gov: '(+ Akk.)',
      ru: 'класть трубку (телефона); класть сверху',
      prefixDrill: { ex: 0, meaning: 2, explain: 'auf- здесь означает «на поверхность, сверху» — положить телефонную трубку обратно на аппарат.' },
      examples: [
        { sense: 'класть трубку (завершать звонок)', de: 'Er war wütend und hat einfach [[aufgelegt]].', ru: 'Он разозлился и просто бросил трубку.' },
        { sense: 'класть сверху (компресс, повязку)', de: 'Bei Kopfschmerzen hilft es, ein kaltes Tuch [[aufzulegen]].', ru: 'При головной боли помогает положить холодный компресс.' }
      ],
      morph: 'auf-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В телефонном разговоре auflegen значит «положить трубку (завершить звонок)», а в быту и медицине — «положить сверху (компресс, повязку)».',
      meaningExamples: [{ de: 'Er hat einfach aufgelegt.', ru: 'Он просто повесил трубку.' }, { de: 'einen kalten Umschlag auflegen', ru: 'приложить холодный компресс' }],
      note: '«Bitte legen Sie nicht auf!» — пожалуйста, не кладите трубку! (стандартная фраза поддержки). В разговорной речи также «ставить музыку, диджеить» («Heute legt ein bekannter DJ auf»).'
    },
    {
      id: 'r-legen-verlegen', prefix: 'ver', sep: 'untrennbar', stress: 'verlégen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'verlegen', forms: { praes: 'verlegt', praet: 'verlegte', perf: 'hat verlegt' }, gov: '+ Akk.',
      ru: 'переносить (встречу, срок); прокладывать (кабель); затерять (положить не туда)',
      parallel: 'ПЕРЕносить (срок)',
      prefixDrill: { ex: 0, meaning: 4, explain: 'ver- здесь означает «перемещение в другое место или на другое время» — перенести встречу на вторник.' },
      examples: [
        { sense: 'переносить (встречу, место проведения)', de: 'Wir haben das Meeting auf Dienstag [[verlegt]].', ru: 'Мы перенесли встречу на вторник.' },
        { sense: 'прокладывать (кабель, трубы)', de: 'Im Büro werden gerade neue Netzwerkkabel [[verlegt]].', ru: 'В офисе сейчас прокладывают новые сетевые кабели.' },
        { sense: 'затерять, положить и забыть куда', de: 'Ich habe schon wieder meinen Ausweis [[verlegt]].', ru: 'Я опять куда-то задевал свой пропуск.' }
      ],
      morph: 'ver-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'verlegen имеет три самостоятельных значения: «перенести встречу/срок», «проложить кабель/трубы» и «затерять вещь (положить и забыть куда)».',
      meaningExamples: [{ de: 'das Meeting auf morgen verlegen', ru: 'перенести встречу на завтра' }, { de: 'neue Netzwerkkabel verlegen', ru: 'проложить новые сетевые кабели' }, { de: 'Ich habe meinen Ausweis verlegt.', ru: 'Я куда-то задевал свой пропуск.' }],
      note: 'Неотделяемый: hat verlegt. Прилагательное «verlegen» (другое значение!) — смущённый, неловкий.'
    },
    {
      id: 'r-legen-belegen', prefix: 'be', sep: 'untrennbar', stress: 'belégen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'belegen', forms: { praes: 'belegt', praet: 'belegte', perf: 'hat belegt' }, gov: '+ Akk.',
      ru: 'подтверждать (фактами, документами); записываться на (курс); занимать (место, память)',
      prefixDrill: { ex: 0, meaning: 2, explain: 'be- направляет действие на объект — «подкрепить, подтвердить факт логами».' },
      examples: [
        { sense: 'подтверждать (документами, логами)', de: 'Die Logs [[belegen]], dass der Zugriff von außen kam.', ru: 'Логи подтверждают, что доступ был извне.' },
        { sense: 'записываться на (курс)', de: 'Ich habe einen B2-Kurs an der Volkshochschule [[belegt]].', ru: 'Я записался на курс B2 в народной школе (VHS).' },
        { sense: 'занимать (место на диске, в отеле)', de: 'Die alten Backups [[belegen]] fast den gesamten Speicherplatz.', ru: 'Старые бэкапы занимают почти всё место на диске.' }
      ],
      morph: 'be-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'У belegen три частых словарных значения: «подтверждать фактами/документами», «записываться на курс» и «занимать место или память на диске».',
      meaningExamples: [{ de: 'den Vorfall mit Logs belegen', ru: 'подтвердить инцидент логами' }, { de: 'einen Deutschkurs belegen', ru: 'записаться на курс немецкого' }, { de: '90 % des Speichers sind belegt.', ru: '90 % памяти занято.' }],
      note: 'В бутербродах: «ein belegtes Brötchen» — бутерброд (буквально «булочка, покрытая чем-то»). Существительное: der Beleg.'
    },
    {
      id: 'r-legen-vorlegen', prefix: 'vor', sep: 'trennbar', stress: 'vórlegen', pos: 'verb',
      transparency: 'transparent',
      de: 'vorlegen', forms: { praes: 'legt vor', praet: 'legte vor', perf: 'hat vorgelegt' }, gov: 'jdm. (Dat.) etw. (Akk.)',
      ru: 'предъявлять, представлять (документ, отчёт)',
      parallel: 'ПРЕДъявлять',
      prefixDrill: { ex: 0, meaning: 0, explain: 'vor- здесь означает «перед кем-то, предъявление» — предъявить паспорт и договор (рус. пред-ъявлять).' },
      examples: [
        { de: 'Beim Bürgeramt müssen Sie Ihren Pass und den Mietvertrag [[vorlegen]].', ru: 'В Бюргерамте нужно предъявить паспорт и договор аренды.' },
        { de: 'Bis Freitag müssen wir dem Auditor alle Nachweise [[vorlegen]].', ru: 'До пятницы нам нужно представить аудитору все подтверждения.' }
      ],
      morph: 'vor-leg-en',
      note: 'Буквально «положить перед кем-то». Очень часто в учреждениях и на аудитах: «einen Nachweis / ein Attest vorlegen».'
    },
    {
      id: 'r-legen-auslegen', prefix: 'aus', sep: 'trennbar', stress: 'áuslegen', pos: 'verb',
      transparency: 'figurative',
      de: 'auslegen', forms: { praes: 'legt aus', praet: 'legte aus', perf: 'hat ausgelegt' }, gov: '+ Akk.',
      ru: 'толковать, интерпретировать; заплатить за кого-то вперёд; раскладывать',
      prefixDrill: { ex: 2, meaning: 3, explain: 'aus- здесь означает «расширение, выкладка» — разложить брошюры у входа.' },
      examples: [
        { sense: 'толковать, интерпретировать (правило, закон)', de: 'Diese Regel kann man sehr streng [[auslegen]].', ru: 'Это правило можно толковать очень строго.' },
        { sense: 'заплатить за кого-то (временно)', de: 'Ich [[lege]] das Geld fürs Mittagessen [[aus]], du kannst es mir später geben.', ru: 'Я заплачу за обед, потом отдашь.' },
        { sense: 'раскладывать (товар, брошюры)', de: 'Am Eingang sind Informationsbroschüren [[ausgelegt]].', ru: 'У входа разложены информационные брошюры.' }
      ],
      morph: 'aus-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'auslegen значит «истолковывать (правило, закон)», «заплатить за кого-то временно» и «раскладывать (товар, брошюры)».',
      meaningExamples: [{ de: 'eine Regel streng auslegen', ru: 'строго толковать правило' }, { de: 'Kannst du das Geld kurz für mich auslegen?', ru: 'Можешь временно заплатить за меня?' }],
      note: '«Geld für jdn. auslegen» — заплатить за коллегу/друга, чтобы он потом вернул (очень часто в офисе!).'
    },
    {
      id: 'r-legen-zulegen', prefix: 'zu', sep: 'trennbar', stress: 'zúlegen', pos: 'verb',
      transparency: 'figurative',
      de: 'sich zulegen', forms: { praes: 'legt sich zu', praet: 'legte sich zu', perf: 'hat sich zugelegt' }, gov: 'sich (Dat.) etw. (Akk.)',
      ru: 'обзавестись, купить себе; (без sich) прибавить (вес, темп)',
      prefixDrill: { ex: 1, meaning: 2, explain: 'zu- здесь означает «прибавление, рост» — цены продолжили расти.' },
      examples: [
        { sense: 'купить себе, обзавестись (sich Dat.)', de: 'Ich habe mir endlich einen ergonomischen Stuhl [[zugelegt]].', ru: 'Я наконец-то купил себе эргономичное кресло.' },
        { sense: 'прибавить (в весе, темпе, цене)', de: 'In den letzten Monaten haben die Preise weiter [[zugelegt]].', ru: 'За последние месяцы цены ещё выросли.' }
      ],
      morph: 'zu-leg-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Возвратное sich (Dat.) etw. zulegen значит «купить себе, обзавестись», а без sich — «прибавить (в весе, темпе, цене)».',
      meaningExamples: [{ de: 'Ich habe mir einen neuen Monitor zugelegt.', ru: 'Я обзавёлся новым монитором.' }, { de: 'Im zweiten Quartal hat der Umsatz zugelegt.', ru: 'Во втором квартале оборот вырос.' }],
      note: 'Разговорное, но очень живое: «sich (Dat.) einen neuen Laptop / einen Hund zulegen».'
    },
    {
      id: 'r-legen-anlage', pos: 'noun', transparency: 'figurative',
      de: 'Anlage', article: 'die', plural: 'die Anlagen',
      ru: 'приложение (к письму, документу); установка, оборудование; вложение денег',
      examples: [
        { sense: 'приложение к письму/документу', de: 'In der [[Anlage]] sende ich Ihnen meinen Lebenslauf.', ru: 'Во вложении я отправляю вам своё резюме.' },
        { sense: 'техническая установка, комплекс', de: 'Die Produktions[[anlage]] ist vom Büro-Netzwerk getrennt.', ru: 'Производственная установка отделена от офисной сети.' },
        { sense: 'финансовое вложение', de: 'Ein Tagesgeldkonto ist eine sichere [[Anlage]].', ru: 'Накопительный счёт — надёжное вложение.' }
      ],
      morph: 'An-lage',
      meaningType: 'polysemous',
      meaningExplanation: 'die Anlage — одно из самых многозначных деловых слов: «приложение к письму», «техническая установка/оборудование» и «финансовое вложение».',
      meaningExamples: [{ de: 'Die Rechnung finden Sie in der Anlage.', ru: 'Счёт вы найдёте во вложении.' }, { de: 'eine moderne Industrieanlage', ru: 'современная промышленная установка' }],
      note: 'В официальных письмах «in der Anlage» = «im Anhang» (во вложении). «Die Klimaanlage» — кондиционер; «die Musikanlage» — аудиосистема.'
    },
    {
      id: 'r-legen-grundlage', pos: 'noun', transparency: 'transparent',
      de: 'Grundlage', article: 'die', plural: 'die Grundlagen',
      ru: 'основа, база, фундамент',
      examples: [
        { de: 'Die Risikobewertung ist die [[Grundlage]] für unsere Entscheidung.', ru: 'Оценка рисков — это основа для нашего решения.' },
        { de: 'Im ersten Teil des Kurses lernen wir die [[Grundlagen]] der Netzwerksicherheit.', ru: 'В первой части курса мы изучаем основы сетевой безопасности.' }
      ],
      morph: 'Grund-lage',
      parts: [['Grund-', 'der Grund — основание, дно'], ['Lage', 'die Lage — положение (от liegen/legen)']],
      note: '«Auf Grundlage von + Dat.» — на основании чего-то. «Die Grundlagen» (мн. ч.) — азы, основы предмета.'
    },
    {
      id: 'r-legen-beleg', pos: 'noun', transparency: 'figurative',
      de: 'Beleg', article: 'der', plural: 'die Belege',
      ru: 'чек, квитанция; документальное подтверждение',
      examples: [
        { de: 'Für die Reisekostenabrechnung brauche ich alle [[Belege]].', ru: 'Для отчёта по командировке мне нужны все чеки.' },
        { de: 'Gibt es dafür einen schriftlichen [[Beleg]]?', ru: 'Есть ли этому письменное подтверждение?' }
      ],
      morph: 'Be-leg',
      note: 'В Германии для налоговой и командировок «Belege sammeln» — собирать чеки и квитанции.'
    },
    {
      id: 'r-legen-vorlage', pos: 'noun', transparency: 'figurative',
      de: 'Vorlage', article: 'die', plural: 'die Vorlagen',
      ru: 'шаблон, образец; предъявление (документа)',
      examples: [
        { sense: 'шаблон, образец', de: 'Hast du eine [[Vorlage]] für den Incident-Bericht?', ru: 'У тебя есть шаблон отчёта об инциденте?' },
        { sense: 'предъявление (документа)', de: 'Das Medikament gibt es nur gegen [[Vorlage]] eines Rezepts.', ru: 'Лекарство выдают только по предъявлении рецепта.' }
      ],
      morph: 'Vor-lage',
      meaningType: 'polysemous',
      meaningExplanation: 'die Vorlage обозначает и «шаблон, образец» (документа, тикета), и «предъявление» (например, паспорта или рецепта).',
      meaningExamples: [{ de: 'eine Vorlage für den Incident-Bericht', ru: 'шаблон для отчёта об инциденте' }, { de: 'nur gegen Vorlage des Ausweises', ru: 'только при предъявлении удостоверения' }],
      note: 'В офисе «die Vorlage» = Template («E-Mail-Vorlage», «Berichtsvorlage»).'
    }
  ],
  pairs: [
    {
      a: { stress: 'ǘberlegen', sep: 'trennbar', ru: 'накинуть поверх, положить сверху', ex: { de: 'Es ist kühl — [[leg]] dir eine Decke [[über]].', ru: 'Прохладно — накинь на себя плед.' } },
      b: { stress: 'überlégen', sep: 'untrennbar', ru: 'обдумывать, размышлять', ex: { de: 'Ich habe mir das gut [[überlegt]].', ru: 'Я это хорошо обдумал.' } }
    }
  ]
});
