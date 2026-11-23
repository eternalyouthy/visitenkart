/* ROOT: tragen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'tragen', verb: 'tragen', ru: 'нести, носить',
  words: [
    {
      id: 'r-tragen-tragen', base: true, pos: 'verb',
      de: 'tragen', forms: { praes: 'trägt', praet: 'trug', perf: 'hat getragen' }, gov: '+ Akk.',
      ru: 'нести (груз); носить (одежду, очки); нести (ответственность, расходы)',
      examples: [
        { sense: 'носить (одежду, маску, очки)', de: 'Im Rechenzentrum müssen alle Besucher einen Ausweis sichtbar [[tragen]].', ru: 'В дата-центре все посетители должны носить пропуск на видном месте.' },
        { sense: 'нести (ответственность, расходы)', de: 'Die Firma [[trägt]] die gesamten Kosten für die Weiterbildung.', ru: 'Компания берёт на себя все расходы на повышение квалификации.' }
      ],
      morph: 'trag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'tragen объединяет три частых значения: «нести физически» (чемодан), «носить на себе» (одежду, очки, пропуск) и деловое «нести расходы / ответственность / риск».',
      meaningExamples: [{ de: 'eine Brille tragen', ru: 'носить очки' }, { de: 'die Verantwortung tragen', ru: 'нести ответственность' }],
      note: 'Сильный глагол с умлаутом a→ä: du trägst, er trägt; trug, hat getragen. От этого корня образованы der Vertrag (договор), der Antrag (заявление), der Auftrag (заказ), der Beitrag (вклад/взнос)!',
      why: {
        confidence: 'high',
        root: 'tragen',
        text: 'Состав: корневой сильный глагол trag- + -en.\nПроисхождение: общегерманский глагол (др.-в.-нем. tragan «нести, тащить»). Дал огромный пласт деловой лексики B1–B2: Vertrag («договор»), Antrag («заявление»), Auftrag («поручение, заказ»), Beitrag («взнос, вклад»), übertragen («передавать данные»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. tragen',
        evidence: 'Др.-в.-нем. tragan < герм. *dragan- «тащить, нести».'
      }
    },
    {
      id: 'r-tragen-eintragen', prefix: 'ein', sep: 'trennbar', stress: 'éintragen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'eintragen', forms: { praes: 'trägt ein', praet: 'trug ein', perf: 'hat eingetragen' }, gov: 'etw. (Akk.) in + Akk. · sich eintragen',
      ru: 'вносить, записывать (в список, календарь, базу, формуляр)',
      parallel: 'ВНосить (в список)',
      drill: { ru: 'вносить (в календарь, таблицу, формуляр)', de: 'den Termin im Kalender ___tragen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'ein- здесь означает «внутрь списка/системы» — внести запись в календарь или формуляр.' },
      examples: [
        { de: 'Bitte [[tragen]] Sie Ihre Arbeitszeiten bis Freitag im System [[ein]].', ru: 'Пожалуйста, внесите свои рабочие часы в систему до пятницы.' },
        { de: 'Ich habe den Termin direkt in unseren gemeinsamen Kalender [[eingetragen]].', ru: 'Я сразу внёс встречу в наш общий календарь.' }
      ],
      morph: 'ein-trag-en',
      note: 'Существительное «der Eintrag» (мн. ч. die Einträge) — запись (например, «ein Eintrag im Log» — запись в логе, «DNS-Eintrag» — DNS-запись!).'
    },
    {
      id: 'r-tragen-uebertragen', prefix: 'über', sep: 'untrennbar', stress: 'übertrágen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'übertragen', forms: { praes: 'überträgt', praet: 'übertrug', perf: 'hat übertragen' }, gov: '+ Akk. (auf + Akk. / an + Akk.)',
      ru: 'передавать (данные по сети, инфекцию, права/задачу); транслировать (в эфире)',
      parallel: 'ПЕРЕдавать / ПЕРЕносить',
      drill: { ru: 'передавать (данные по сети, права)', de: 'Daten verschlüsselt ___tragen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'Неотделяемая über- означает «перенос на другую сторону» — передавать данные с одного узла на другой.' },
      examples: [
        { sense: 'передавать данные (IT)', de: 'Sensible Daten werden ausschließlich verschlüsselt [[übertragen]].', ru: 'Чувствительные данные передаются исключительно в зашифрованном виде.' },
        { sense: 'передавать задачу / инфекцию / транслировать', de: 'Das Virus wird hauptsächlich über die Luft [[übertragen]].', ru: 'Вирус передаётся преимущественно по воздуху.' }
      ],
      morph: 'über-trag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Неотделяемое übertragen используется в IT («передавать данные»), в медицине («передавать инфекцию»), в офисе («передавать полномочия/задачу») и в медиа («транслировать матч/выступление»).',
      meaningExamples: [{ de: 'Daten per HTTPS übertragen', ru: 'передавать данные по HTTPS' }, { de: 'eine Krankheit übertragen', ru: 'передавать болезнь' }, { de: 'ein Spiel live übertragen', ru: 'транслировать матч в прямом эфире' }],
      note: 'Всегда неотделяемый (hat übertragen — без ge-!). «Die Datenübertragung» — передача данных.'
    },
    {
      id: 'r-tragen-beitragen', prefix: 'bei', sep: 'trennbar', stress: 'béitragen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'beitragen', forms: { praes: 'trägt bei', praet: 'trug bei', perf: 'hat beigetragen' }, gov: 'zu + Dat.',
      ru: 'вносить вклад (в общее дело), способствовать (чему-то)',
      parallel: 'ВНОсить вклад',
      examples: [
        { de: 'Regelmäßige Schulungen [[tragen]] viel zur IT-Sicherheit [[bei]].', ru: 'Регулярные тренинги вносят большой вклад в IT-безопасность.' },
        { de: 'Jeder im Team hat zur schnellen Lösung [[beigetragen]].', ru: 'Каждый в команде поспособствовал быстрому решению.' }
      ],
      morph: 'bei-trag-en',
      note: 'Всегда с предлогом zu + Dativ («zu etwas beitragen»). Существительное: «der Beitrag» (вклад; членский/страховой взнос; пост в соцсети/статья).'
    },
    {
      id: 'r-tragen-beantragen', prefix: 'be', sep: 'untrennbar', stress: 'beántragen', pos: 'verb',
      alsoIn: [['words', 'authorities']], // Wortliste p. 23
      core: true, transparency: 'transparent',
      de: 'beantragen', forms: { praes: 'beantragt', praet: 'beantragte', perf: 'hat beantragt' }, gov: '+ Akk.',
      ru: 'подавать официальное заявление / заявку на (отпуск, визу, права доступа, паспорт)',
      examples: [
        { de: 'Für das neue Projekt muss ich erst Admin-Rechte [[beantragen]].', ru: 'Для нового проекта мне сначала нужно запросить (подать заявку на) админ-права.' },
        { de: 'Wir müssen den neuen Reisepass rechtzeitig beim Bürgeramt [[beantragen]].', ru: 'Нам нужно вовремя подать заявление на новый загранпаспорт в Bürgeramt.' }
      ],
      morph: 'be-an-trag-en',
      note: 'Внимание: СЛАБЫЙ глагол! (Потому что образован от существительного der Antrag, а не напрямую от tragen): beantragte, hat beantragt (НЕ «beantrug»!).'
    },
    {
      id: 'r-tragen-vertragen', prefix: 'ver', sep: 'untrennbar', stress: 'vertrágen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vertragen', forms: { praes: 'verträgt', praet: 'vertrug', perf: 'hat vertragen' }, gov: '+ Akk. · sich mit + Dat. vertragen',
      ru: 'переносить (лекарство, еду, критику, жару); (sich vertragen) ладить, мириться',
      examples: [
        { sense: 'переносить (лекарство, продукт, нагрузку)', de: 'Ich [[vertrage]] dieses Antibiotikum leider nicht gut.', ru: 'Я, к сожалению, плохо переношу этот антибиотик.' },
        { sense: 'ладить, мириться (sich vertragen)', de: 'Nach dem Streit haben sich die beiden Kollegen wieder [[vertragen]].', ru: 'После ссоры оба коллеги снова помирились.' }
      ],
      morph: 'ver-trag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Переходное vertragen значит «хорошо/плохо переносить» (еду, лекарство, критику, климат), а возвратное sich vertragen — «ладить между собой, помириться».',
      meaningExamples: [{ de: 'Keine Laktose vertragen', ru: 'не переносить лактозу' }, { de: 'Wir vertragen uns gut.', ru: 'Мы хорошо ладим.' }],
      note: 'От возвратного sich vertragen («прийти к согласию») исторически происходит слово «der Vertrag» (договор)!'
    },
    {
      id: 'r-tragen-betragen', prefix: 'be', sep: 'untrennbar', stress: 'betrágen', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'betragen', forms: { praes: 'beträgt', praet: 'betrug', perf: 'hat betragen' }, gov: '+ Akk. (число/сумма)',
      ru: 'составлять (о сумме, сроке, размере, проценте)',
      examples: [
        { de: 'Die Kündigungsfrist [[beträgt]] laut Vertrag drei Monate.', ru: 'Срок уведомления об увольнении по договору составляет три месяца.' },
        { de: 'Die gesamte Ausfallzeit hat nur zwölf Minuten [[betragen]].', ru: 'Общее время простоя составило всего двенадцать минут.' }
      ],
      morph: 'be-trag-en',
      note: 'Стандартный деловой глагол для цифр и сумм. Существительное: «der Betrag» (сумма денег, например в банковском переводе!).'
    },
    {
      id: 'r-tragen-vortragen', prefix: 'vor', sep: 'trennbar', stress: 'vórtragen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'vortragen', forms: { praes: 'trägt vor', praet: 'trug vor', perf: 'hat vorgetragen' }, gov: '+ Akk.',
      ru: 'выступать с докладом, излагать, презентовать (перед аудиторией)',
      parallel: 'ПРЕДставлять доклад',
      drill: { ru: 'выступать с докладом, излагать (перед аудиторией)', de: 'die Ergebnisse im Meeting ___tragen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'vor- означает «перед публикой» — изложить, представить итоги аудитории.' },
      examples: [
        { de: 'Nächste Woche [[trage]] ich unsere Quartalszahlen vor der Geschäftsführung [[vor]].', ru: 'На следующей неделе я докладываю наши квартальные показатели перед руководством.' }
      ],
      morph: 'vor-trag-en',
      note: 'Существительное: «der Vortrag» (доклад, лекция, презентация — «einen Vortrag halten»).'
    },
    {
      id: 'r-tragen-ertragen', prefix: 'er', sep: 'untrennbar', stress: 'ertrágen', pos: 'verb',
      transparency: 'figurative',
      de: 'ertragen', forms: { praes: 'erträgt', praet: 'ertrug', perf: 'hat ertragen' }, gov: '+ Akk.',
      ru: 'выносить, терпеть (боль, шум, ситуацию)',
      examples: [
        { de: 'Die Zahnschmerzen waren kaum noch zu [[ertragen]].', ru: 'Зубную боль уже почти невозможно было терпеть.' }
      ],
      morph: 'er-trag-en',
      note: 'Чуть эмоциональнее/книжнее, чем «aushalten» (оба означают «выдерживать, терпеть»). «Unerträglich» — невыносимый.'
    },
    {
      id: 'r-tragen-austragen', prefix: 'aus', sep: 'trennbar', stress: 'áustragen', pos: 'verb',
      transparency: 'transparent',
      de: 'austragen', forms: { praes: 'trägt aus', praet: 'trug aus', perf: 'hat ausgetragen' }, gov: '+ Akk.',
      ru: 'разносить (почту, газеты); вычёркивать (из списка); проводить (матч), решать (конфликт)',
      parallel: 'РАЗносить / ВЫчёркивать',
      prefixDrill: { ex: 0, meaning: 0, explain: 'aus- здесь означает «наружу, из списка» — выписать себя из рассылки (антоним к eintragen).' },
      examples: [
        { sense: 'отписаться / вычеркнуть из списка (антоним к eintragen)', de: 'Du kannst dich jederzeit aus dem Newsletter [[austragen]].', ru: 'Ты можешь в любой момент отписаться от рассылки.' },
        { sense: 'разносить почту / газеты', de: 'Als Schüler hat er morgens Zeitungen [[ausgetragen]].', ru: 'Школьником он по утрам разносил газеты.' }
      ],
      morph: 'aus-trag-en',
      meaningType: 'polysemous',
      meaningExplanation: 'austragen значит «отписаться / вычеркнуть из списка» (антоним eintragen), «разносить почту/газеты» и «разрешать конфликт / проводить соревнование».',
      meaningExamples: [{ de: 'sich aus einer Liste austragen', ru: 'удалить себя из списка' }, { de: 'einen Konflikt offen austragen', ru: 'открыто решать конфликт' }],
      note: 'Удобная пара антонимов: sich eintragen (записаться) ↔ sich austragen (выписаться).'
    },
    {
      id: 'r-tragen-antrag', pos: 'noun',
      alsoIn: [['words', 'authorities']], // Wortliste p. 19
      de: 'Antrag', article: 'der', plural: 'die Anträge',
      transparency: 'figurative',
      ru: 'заявление, заявка (официальная)',
      examples: [
        { de: 'Ich habe gestern einen [[Antrag]] auf Homeoffice gestellt.', ru: 'Я вчера подал заявление на удалённую работу.' }
      ],
      morph: 'An-trag',
      note: 'Устойчивые глаголы: «einen Antrag stellen / einreichen / ausfüllen / genehmigen / ablehnen». «Der Urlaubsantrag» — заявление на отпуск.'
    },
    {
      id: 'r-tragen-auftrag', pos: 'noun',
      de: 'Auftrag', article: 'der', plural: 'die Aufträge',
      transparency: 'figurative',
      ru: 'заказ, поручение, задание',
      examples: [
        { de: 'Wir haben einen externen Dienstleister mit dem Pentest im [[Auftrag]] der Firma beauftragt.', ru: 'Мы поручили внешнему подрядчику провести пентест по заказу компании.' }
      ],
      morph: 'Auf-trag',
      note: '«Der Auftraggeber» — заказчик; «der Auftragnehmer» — исполнитель/подрядчик. «Im Auftrag von …» (в письмах часто сокр. «i. A.») — по поручению …'
    },
    {
      id: 'r-tragen-beitrag', pos: 'noun',
      de: 'Beitrag', article: 'der', plural: 'die Beiträge',
      transparency: 'transparent',
      ru: 'взнос (в страховку, клуб); вклад; пост, публикация, репортаж',
      examples: [
        { sense: 'страховой / членский взнос', de: 'Der [[Beitrag]] zur Krankenversicherung wird automatisch vom Gehalt abgezogen.', ru: 'Взнос на медицинскую страховку автоматически удерживается из зарплаты.' },
        { sense: 'вклад / пост / репортаж', de: 'Vielen Dank für deinen hilfreichen [[Beitrag]] im Forum!', ru: 'Большое спасибо за твой полезный пост на форуме!' }
      ],
      morph: 'Bei-trag',
      meaningType: 'polysemous',
      meaningExplanation: 'der Beitrag — это «денежный взнос» (в страховку, фитнес-клуб, Rundfunkbeitrag), «вклад в общее дело» и «пост/статья/репортаж» в медиа или на форуме.',
      meaningExamples: [{ de: 'der monatliche Mitgliedsbeitrag', ru: 'ежемесячный членский взнос' }, { de: 'einen Beitrag zu etw. leisten', ru: 'внести вклад во что-то' }],
      note: 'Умлаут во мн. ч.: die Beiträge. «Einen Beitrag leisten» — внести вклад.'
    },
    {
      id: 'r-tragen-betrag', pos: 'noun',
      de: 'Betrag', article: 'der', plural: 'die Beträge',
      transparency: 'opaque',
      ru: 'сумма (денежная)',
      examples: [
        { de: 'Bitte überweisen Sie den offenen [[Betrag]] innerhalb von 14 Tagen.', ru: 'Пожалуйста, переведите неоплаченную сумму в течение 14 дней.' }
      ],
      morph: 'Be-trag',
      note: 'Главное слово на счетах (Rechnung) и в банковских переводах (Überweisung): «der Rechnungsbetrag» — сумма счёта.'
    }
  ]
});
