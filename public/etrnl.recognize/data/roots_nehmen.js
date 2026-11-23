/* ROOT: nehmen. Learning content in Russian. */
GT.registerRoot({
  id: 'nehmen', verb: 'nehmen', ru: 'брать',
  words: [
    {
      id: 'r-nehmen-nehmen', base: true, pos: 'verb',
      de: 'nehmen', forms: { praes: 'nimmt', praet: 'nahm', perf: 'hat genommen' }, gov: '+ Akk.',
      ru: 'брать; принимать (лекарство); выбирать (в кафе, транспорте)',
      examples: [
        { sense: 'брать, выбирать', de: 'Ich [[nehme]] den Bus um acht, dann bin ich pünktlich im Büro.', ru: 'Я поеду на автобусе в восемь, тогда приду в офис вовремя.' },
        { sense: 'отключить от сети (vom Netz nehmen)', de: 'Wir müssen den infizierten Server sofort vom Netz [[nehmen]].', ru: 'Нам нужно немедленно отключить заражённый сервер от сети.' }
      ],
      morph: 'nehm-en',
      note: 'Сильный глагол с чередованием e→i и удвоением m: du nimmst, er nimmt, nahm, hat genommen. «Sich Zeit nehmen» — уделить время; «in Kauf nehmen» — мириться с чем-то.',
      why: {
        confidence: 'high',
        root: 'nehmen',
        text: 'Состав: корневой глагол nehm- + -en.\nПроисхождение: древневерхненемецкое neman («брать, принимать») восходит к индоевропейскому корню *nem- («распределять, брать»). В русском родственных глаголов от этой основы нет, но тот же корень — в греческом nómos («закон», ср. «экономика», «автономия»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. nehmen',
        evidence: 'Др.-в.-нем. neman < герм. *nemaną < и.-е. *nem- «брать, распределять».'
      }
    },
    {
      id: 'r-nehmen-annehmen', prefix: 'an', sep: 'trennbar', stress: 'ánnehmen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'annehmen', forms: { praes: 'nimmt an', praet: 'nahm an', perf: 'hat angenommen' }, gov: '+ Akk.',
      ru: 'принимать (предложение, звонок, посылку); предполагать, допускать',
      parallel: 'ПРИнимать',
      examples: [
        { sense: 'принимать (предложение, посылку)', de: 'Ich habe das Jobangebot sofort [[angenommen]].', ru: 'Я сразу принял предложение о работе.' },
        { sense: 'предполагать, полагать', de: 'Ich [[nehme an]], dass der Fehler nach dem letzten Update aufgetreten ist.', ru: 'Я предполагаю, что ошибка появилась после последнего обновления.' }
      ],
      morph: 'an-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'annehmen имеет два очень частых значения: «принимать» (предложение, звонок, посылку) и «предполагать, полагать» (ich nehme an, dass…).',
      meaningExamples: [{ de: 'ein Jobangebot annehmen', ru: 'принять предложение о работе' }, { de: 'Ich nehme an, das war ein Fehlalarm.', ru: 'Полагаю, это было ложное срабатывание.' }],
      note: '«Die Annahme» — приём (посылок) и предположение («meine Annahme war falsch»). «Einen Anruf annehmen» — ответить на звонок.'
    },
    {
      id: 'r-nehmen-aufnehmen', prefix: 'auf', sep: 'trennbar', stress: 'áufnehmen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'aufnehmen', forms: { praes: 'nimmt auf', praet: 'nahm auf', perf: 'hat aufgenommen' }, gov: '+ Akk.',
      ru: 'записывать (аудио/видео); принимать (пациента, в группу); фиксировать (в протокол); брать (кредит)',
      examples: [
        { sense: 'записывать (видео, звук)', de: 'Wird das Webinar [[aufgenommen]], damit ich es später ansehen kann?', ru: 'Вебинар записывают, чтобы я мог посмотреть его позже?' },
        { sense: 'принимать (пациента, нового участника)', de: 'Die Praxis [[nimmt]] leider keine neuen Patienten mehr [[auf]].', ru: 'Кабинет, к сожалению, больше не принимает новых пациентов.' },
        { sense: 'фиксировать (в протокол, список)', de: 'Wir haben diesen Punkt direkt ins Protokoll [[aufgenommen]].', ru: 'Мы сразу внесли этот пункт в протокол.' }
      ],
      morph: 'auf-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufnehmen значит «записывать (аудио/видео)», «принимать (пациента в больницу, нового участника)» и «вносить в протокол/список».',
      meaningExamples: [{ de: 'ein Video / ein Gespräch aufnehmen', ru: 'записать видео / разговор' }, { de: 'einen Patienten im Krankenhaus aufnehmen', ru: 'принять пациента в больницу' }, { de: 'einen Punkt ins Protokoll aufnehmen', ru: 'внести пункт в протокол' }],
      note: 'Также: «Kontakt aufnehmen» — установить контакт; «einen Kredit aufnehmen» — взять кредит. Существительное: die Aufnahme.'
    },
    {
      id: 'r-nehmen-uebernehmen', prefix: 'über', sep: 'untrennbar', stress: 'übernéhmen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'übernehmen', forms: { praes: 'übernimmt', praet: 'übernahm', perf: 'hat übernommen' }, gov: '+ Akk.',
      ru: 'брать на себя (задачу, расходы, ответственность); перенимать, захватывать (аккаунт)',
      parallel: 'ПЕРЕнимать',
      prefixDrill: { ex: 0, meaning: 0, explain: 'неотделяемая über- здесь означает «передача, принятие на себя» — взять на себя смену (рус. пере-нять).' },
      examples: [
        { sense: 'брать на себя (задачу, расходы)', de: 'Ich [[übernehme]] die Frühschicht am Montag.', ru: 'Я возьму на себя утреннюю смену в понедельник.' },
        { sense: 'захватить, перенять (учётку, компанию)', de: 'Der Angreifer hat das Admin-Konto komplett [[übernommen]].', ru: 'Злоумышленник полностью захватил админскую учётку.' }
      ],
      morph: 'über-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'übernehmen значит «взять на себя» (задачу, расходы, ответственность) и «перенять / захватить» (компанию или скомпрометированную учётку).',
      meaningExamples: [{ de: 'Ich übernehme das Ticket.', ru: 'Я возьму этот тикет на себя.' }, { de: 'Die Angreifer haben das Konto übernommen.', ru: 'Атакующие захватили учётную запись.' }],
      note: 'Всегда неотделяемый: übernimmt, übernahm, hat übernommen (без ge-). «Die Krankenkasse übernimmt die Kosten» — страховка оплачивает расходы.'
    },
    {
      id: 'r-nehmen-teilnehmen', prefix: 'teil', sep: 'trennbar', stress: 'téilnehmen', pos: 'verb',
      alsoIn: [['words', 'leisure']], // Wortliste p. 86
      core: true, transparency: 'transparent',
      de: 'teilnehmen', forms: { praes: 'nimmt teil', praet: 'nahm teil', perf: 'hat teilgenommen' }, gov: 'an + Dat.',
      ru: 'участвовать, принимать участие',
      examples: [
        { de: 'Alle Mitarbeiter müssen an der Sicherheits-Schulung [[teilnehmen]].', ru: 'Все сотрудники должны участвовать в обучении по безопасности.' },
        { de: 'Kannst du morgen am Meeting [[teilnehmen]]?', ru: 'Ты сможешь завтра поучаствовать во встрече?' }
      ],
      morph: 'teil-nehm-en',
      note: 'Всегда с «an + Dativ»! «Der Teilnehmer / die Teilnehmerin» — участник; «die Teilnahme» — участие.'
    },
    {
      id: 'r-nehmen-abnehmen', prefix: 'ab', sep: 'trennbar', stress: 'ábnehmen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'abnehmen', forms: { praes: 'nimmt ab', praet: 'nahm ab', perf: 'hat abgenommen' }, gov: '(+ Akk.)',
      ru: 'уменьшаться; худеть; снимать; брать трубку; принимать (работу, приёмка)',
      prefixDrill: { ex: 0, meaning: 2, explain: 'ab- здесь означает «уменьшение, сокращение» — число ложных срабатываний снизилось.' },
      examples: [
        { sense: 'уменьшаться, снижаться', de: 'Nach dem Tuning der Regeln hat die Zahl der Fehlalarme deutlich [[abgenommen]].', ru: 'После тюнинга правил число ложных срабатываний заметно уменьшилось.' },
        { sense: 'худеть', de: 'Seit er mit dem Rad zur Arbeit fährt, hat er vier Kilo [[abgenommen]].', ru: 'С тех пор как он ездит на работу на велосипеде, он похудел на четыре килограмма.' },
        { sense: 'снимать / забирать (у кого-то)', de: 'Soll ich dir die schwere Tasche [[abnehmen]]?', ru: 'Помочь тебе понести тяжёлую сумку?' }
      ],
      morph: 'ab-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abnehmen объединяет несколько частых значений: «уменьшаться», «худеть», «снимать предмет», «брать трубку» и «принимать работу (приёмка)».',
      meaningExamples: [{ de: 'Die Zahl der Alerts nimmt ab.', ru: 'Число алертов снижается.' }, { de: 'Er hat zehn Kilo abgenommen.', ru: 'Он похудел на десять килограммов.' }, { de: 'die Brille abnehmen', ru: 'снять очки' }],
      note: 'В IT и стройке: «ein System / ein Projekt abnehmen» — принять работу («die Abnahme» — приёмка). Антоним по весу/числу: zunehmen.'
    },
    {
      id: 'r-nehmen-zunehmen', prefix: 'zu', sep: 'trennbar', stress: 'zúnehmen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'zunehmen', forms: { praes: 'nimmt zu', praet: 'nahm zu', perf: 'hat zugenommen' },
      ru: 'увеличиваться, расти; набирать вес',
      prefixDrill: { ex: 0, meaning: 2, explain: 'zu- здесь означает «прибавление, рост» — число фишинговых атак быстро растёт.' },
      examples: [
        { sense: 'увеличиваться, расти', de: 'Phishing-Angriffe über SMS [[nehmen]] seit Monaten stark [[zu]].', ru: 'Фишинговые атаки через SMS уже несколько месяцев сильно растут.' },
        { sense: 'набирать вес', de: 'Über Weihnachten habe ich zwei Kilo [[zugenommen]].', ru: 'За Рождество я набрал два килограмма.' }
      ],
      morph: 'zu-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'zunehmen обозначает как рост количества или интенсивности явления, так и набор веса у человека.',
      meaningExamples: [{ de: 'Cyberangriffe nehmen jedes Jahr zu.', ru: 'Кибератаки растут с каждым годом.' }, { de: 'über die Feiertage zunehmen', ru: 'набрать вес за праздники' }],
      note: '«Die Zunahme» — рост, увеличение; «zunehmend» — всё больше («ein zunehmend wichtiges Thema»).'
    },
    {
      id: 'r-nehmen-mitnehmen', prefix: 'mit', sep: 'trennbar', stress: 'mítnehmen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'mitnehmen', forms: { praes: 'nimmt mit', praet: 'nahm mit', perf: 'hat mitgenommen' }, gov: '+ Akk.',
      ru: 'брать с собой; подвезти (кого-то)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'mit- здесь буквально означает «взять с собой» (зонт).' },
      examples: [
        { sense: 'брать с собой', de: '[[Nimm]] deinen Regenschirm [[mit]], es soll später regnen.', ru: 'Возьми с собой зонт, позже обещали дождь.' },
        { sense: 'подвезти кого-то', de: 'Ich fahre sowieso zum Bahnhof, soll ich dich [[mitnehmen]]?', ru: 'Я всё равно еду на вокзал, подвезти тебя?' }
      ],
      morph: 'mit-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'mitnehmen значит и «взять вещь с собой», и «подвезти человека» (на машине).',
      meaningExamples: [{ de: 'den Laptop mitnehmen', ru: 'взять ноутбук с собой' }, { de: 'Soll ich dich zum Bahnhof mitnehmen?', ru: 'Подвезти тебя до вокзала?' }],
      note: 'В кафе: «Zum Hieressen oder zum Mitnehmen?» — здесь или с собой? Разговорно про усталость: «Die Grippe hat mich ziemlich mitgenommen» — грипп меня здорово вымотал.'
    },
    {
      id: 'r-nehmen-unternehmen', prefix: 'unter', sep: 'untrennbar', stress: 'unternéhmen', pos: 'verb',
      transparency: 'figurative',
      de: 'unternehmen', forms: { praes: 'unternimmt', praet: 'unternahm', perf: 'hat unternommen' }, gov: '+ Akk.',
      ru: 'предпринимать (шаги, меры); проводить время, выбираться куда-то',
      examples: [
        { sense: 'предпринимать (действия, меры)', de: 'Wir müssen sofort etwas gegen diese Sicherheitslücke [[unternehmen]].', ru: 'Нам нужно немедленно что-то предпринять против этой уязвимости.' },
        { sense: 'делать что-то в свободное время', de: 'Was [[unternehmt]] ihr am Wochenende?', ru: 'Чем вы займётесь на выходных?' }
      ],
      morph: 'unter-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В деловом контексте unternehmen значит «предпринимать шаги/меры», а в повседневном — «выбираться куда-то, проводить досуг».',
      meaningExamples: [{ de: 'Wir müssen sofort etwas unternehmen.', ru: 'Мы должны немедленно что-то предпринять.' }, { de: 'Was unternehmt ihr am Wochenende?', ru: 'Куда выбираетесь на выходных?' }],
      note: 'Всегда неотделяемый: unternahm, hat unternommen. Субстантивированное «das Unternehmen» — предприятие, фирма.'
    },
    {
      id: 'r-nehmen-einnehmen', prefix: 'ein', sep: 'trennbar', stress: 'éinnehmen', pos: 'verb',
      transparency: 'figurative',
      de: 'einnehmen', forms: { praes: 'nimmt ein', praet: 'nahm ein', perf: 'hat eingenommen' }, gov: '+ Akk.',
      ru: 'принимать (лекарство); выручать, получать (доход); занимать (место, позицию)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ein- здесь означает «внутрь» — принимать таблетки внутрь.' },
      examples: [
        { sense: 'принимать (лекарство)', de: 'Die Tabletten müssen nach dem Essen [[eingenommen]] werden.', ru: 'Таблетки нужно принимать после еды.' },
        { sense: 'занимать (место, позицию)', de: 'Die Log-Dateien [[nehmen]] zu viel Platz auf der Festplatte [[ein]].', ru: 'Лог-файлы занимают слишком много места на жёстком диске.' }
      ],
      morph: 'ein-nehm-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einnehmen имеет три самостоятельных значения: «принимать лекарство», «получать выручку/доход» и «занимать место или позицию».',
      meaningExamples: [{ de: 'Medikamente regelmäßig einnehmen', ru: 'регулярно принимать лекарства' }, { de: 'einen Platz einnehmen', ru: 'занять место' }],
      note: '«Die Einnahmen» (мн. ч.) — доходы (противоположность: die Ausgaben — расходы).'
    },
    {
      id: 'r-nehmen-benehmen', prefix: 'be', sep: 'untrennbar', stress: 'benéhmen', pos: 'verb',
      transparency: 'opaque',
      de: 'sich benehmen', forms: { praes: 'benimmt sich', praet: 'benahm sich', perf: 'hat sich benommen' },
      ru: 'вести себя',
      examples: [
        { de: 'Der Kunde hat sich am Telefon ziemlich unhöflich [[benommen]].', ru: 'Клиент вёл себя по телефону довольно невежливо.' },
        { de: 'Die Kinder haben sich im Restaurant super [[benommen]].', ru: 'Дети прекрасно вели себя в ресторане.' }
      ],
      morph: 'be-nehm-en',
      note: 'Возвратный и неотделяемый: «Benimm dich!» — веди себя прилично! Существительное: «das Benehmen» — манеры, поведение.',
      why: {
        confidence: 'high',
        root: 'nehmen',
        text: 'Состав: неотделяемая приставка be- + nehmen («брать»).\nПроисхождение: средневерхненемецкое benemen значило «отнимать, охватывать», а возвратное sich benehmen с XVII–XVIII вв. закрепилось в значении «держаться, вести себя».\nПрозрачность: непрозрачное — современное значение «вести себя» из буквального «брать» не выводится.',
        source: 'DWDS (Pfeifer), s.v. benehmen',
        evidence: 'Ср.-в.-нем. benemen (к nehmen); возвратное sich benehmen «вести себя» закрепилось с XVII–XVIII вв.'
      }
    },
    {
      id: 'r-nehmen-ausnahme', pos: 'noun', transparency: 'figurative',
      de: 'Ausnahme', article: 'die', plural: 'die Ausnahmen',
      ru: 'исключение',
      examples: [
        { de: 'Für diese Regel gibt es keine [[Ausnahmen]].', ru: 'Для этого правила нет никаких исключений.' },
        { de: 'In der Firewall mussten wir eine [[Ausnahme]] für den Scanner anlegen.', ru: 'В файрволе нам пришлось добавить исключение для сканера.' }
      ],
      morph: 'Aus-nahme',
      note: '«Mit Ausnahme von + Dat.» — за исключением; «ausnahmsweise» — в порядке исключения.'
    },
    {
      id: 'r-nehmen-teilnahme', pos: 'noun', transparency: 'transparent',
      de: 'Teilnahme', article: 'die', plural: 'die Teilnahmen',
      ru: 'участие',
      examples: [
        { de: 'Die [[Teilnahme]] an der Schulung ist für alle Pflicht.', ru: 'Участие в обучении обязательно для всех.' },
        { de: 'Vielen Dank für Ihre [[Teilnahme]] an der Umfrage.', ru: 'Большое спасибо за участие в опросе.' }
      ],
      morph: 'Teil-nahme',
      note: '«Die Teilnahmebescheinigung» — сертификат/справка об участии (часто выдают после курсов и тренингов).'
    },
    {
      id: 'r-nehmen-unternehmen-n', pos: 'noun', transparency: 'figurative',
      de: 'Unternehmen', article: 'das', plural: 'die Unternehmen',
      ru: 'предприятие, компания',
      examples: [
        { de: 'Unser [[Unternehmen]] hat rund 400 Mitarbeiter.', ru: 'В нашей компании около 400 сотрудников.' },
        { de: 'Immer mehr mittelständische [[Unternehmen]] investieren in IT-Sicherheit.', ru: 'Всё больше средних компаний инвестируют в IT-безопасность.' }
      ],
      morph: 'Unter-nehmen',
      note: 'Нейтральнее и солиднее, чем «die Firma» (в официальных письмах и отчётах обычно «das Unternehmen»). Мн. ч. не меняется.'
    },
    {
      id: 'r-nehmen-aufnahme', pos: 'noun', transparency: 'figurative',
      de: 'Aufnahme', article: 'die', plural: 'die Aufnahmen',
      ru: 'запись (аудио/видео); приём (в больницу, организацию)',
      examples: [
        { sense: 'аудио- или видеозапись', de: 'Kannst du mir den Link zur [[Aufnahme]] des Meetings schicken?', ru: 'Можешь прислать мне ссылку на запись встречи?' },
        { sense: 'приём (в больницу, организацию)', de: 'Bei der [[Aufnahme]] im Krankenhaus muss man viele Formulare ausfüllen.', ru: 'При поступлении в больницу нужно заполнить много формуляров.' }
      ],
      morph: 'Auf-nahme',
      meaningType: 'polysemous',
      meaningExplanation: 'die Aufnahme обозначает и аудио-/видеозапись (или снимок), и приём (в больницу, университет, организацию).',
      meaningExamples: [{ de: 'die Aufnahme des Webinars', ru: 'запись вебинара' }, { de: 'die Aufnahme ins Krankenhaus', ru: 'госпитализация (приём в больницу)' }],
      note: 'Сюда же: «die Notaufnahme» — приёмное отделение неотложки.'
    }
  ],
  pairs: []
});
