/* Health & Doctor, batch 1. Learning content in Russian: ru = meaning, examples {de, ru, sense?}. */
GT.register({ tab: 'words', topic: 'health', items: [
{
  id: 'b1-health-sprechstunde', pos: 'noun',
  de: 'Sprechstunde', article: 'die', plural: 'die Sprechstunden',
  ru: 'часы приёма (врача, преподавателя, чиновника)',
  examples: [
    { de: 'Die [[Sprechstunde]] ist montags bis freitags von 8 bis 12 Uhr.', ru: 'Часы приёма — с понедельника по пятницу с 8 до 12.' },
    { de: 'Ohne Termin können Sie in die offene [[Sprechstunde]] kommen, aber Sie müssen mit Wartezeit rechnen.', ru: 'Без записи можно прийти в открытые часы приёма, но придётся подождать.' }
  ],
  morph: 'Sprech-stunde', root: 'sprechen',
  parts: [['Sprech-', 'основа sprechen — говорить'], ['Stunde', 'die Stunde — час']],
  transparency: 'transparent',
  family: ['sprechen', 'die Sprache', 'das Gespräch', 'die Stunde', 'die Sprechzeiten', 'die Videosprechstunde'],
  note: 'Время, когда врач принимает пациентов. «Offene Sprechstunde» — приём без записи; «Videosprechstunde» — видеоконсультация. На двери кабинета часто пишут «Sprechzeiten» — это то же самое. Своя Sprechstunde есть и у учителей, и у профессоров.',
  why: {
    confidence: 'high',
    root: 'sprechen',
    text: 'Состав: основа глагола sprechen («говорить») + die Stunde («час»).\nПроисхождение: сложение XIX века — буквально «час для разговора», время, когда врач, преподаватель или чиновник принимает людей для беседы.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Sprechstunde',
    evidence: 'Определительное сложение Sprech- (от sprechen) + Stunde; засвидетельствовано с XIX в. для установленных часов приёма.'
  },
  ru_link: null
},
{
  id: 'b1-health-praxis', pos: 'noun',
  de: 'Praxis', article: 'die', plural: 'die Praxen',
  ru: 'врачебный кабинет, частная практика врача; практика (в отличие от теории)',
  examples: [
    { sense: 'врачебный кабинет', de: 'Die [[Praxis]] ist im zweiten Stock, direkt über der Apotheke.', ru: 'Кабинет врача на третьем этаже, прямо над аптекой.' },
    { sense: 'практика (в отличие от теории)', de: 'In der Theorie klingt das gut, aber in der [[Praxis]] funktioniert es leider nicht.', ru: 'В теории звучит хорошо, но на практике, к сожалению, не работает.' }
  ],
  morph: 'Praxis',
  family: ['praktisch', 'das Praktikum', 'der Praktikant', 'die Arztpraxis', 'die Zahnarztpraxis'],
  meaningType: 'polysemous',
  meaningExplanation: 'Слово Praxis имеет два самостоятельных значения: врачебный кабинет (частная практика) и практический опыт (в противовес теории).',
  meaningExamples: [{ de: 'Die Praxis ist heute geschlossen.', ru: 'Кабинет врача сегодня закрыт.' }, { de: 'In der Praxis funktioniert das anders.', ru: 'На практике это работает иначе.' }],
  note: 'Два значения: помещение и «бизнес» врача («Die Praxis ist heute geschlossen») и практический опыт («Mir fehlt noch die Praxis»). Мн. ч. — die Praxen (не «Praxisse»). «Практиковаться» — это üben, а не Praxis. Внимание: der zweite Stock — это наш третий этаж (первый этаж в Германии — Erdgeschoss).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Praxen).\nПроисхождение: вошло в немецкий в XVI в. через латынь из греческого prâxis («действие, деятельность»). Значение «врачебная практика» по смежности перешло и на место, где врач её ведёт — на кабинет.\nПрозрачность: два значения связаны метонимическим переносом (деятельность → место).',
    source: 'DWDS (Pfeifer), s.v. Praxis',
    evidence: 'Заимствовано в XVI в. из лат. praxis < греч. prâxis «действие, осуществление»; метонимический перенос на помещение врача.'
  },
  ru_link: { type: 'internationalism', text: 'практика: общий греческий корень (prâxis — «действие»). Значение «практика vs теория» совпадает. Но место, куда идёшь к врачу, по-русски — кабинет или клиника, а по-немецки — die Praxis.' }
},
{
  id: 'b1-health-untersuchung', pos: 'noun',
  de: 'Untersuchung', article: 'die', plural: 'die Untersuchungen',
  ru: 'обследование, осмотр; расследование',
  examples: [
    { sense: 'медицинское обследование', de: 'Vor der Operation muss ich noch zu einer [[Untersuchung]] ins Krankenhaus.', ru: 'Перед операцией мне ещё нужно пройти обследование в больнице.' },
    { sense: 'расследование', de: 'Nach dem Vorfall läuft eine interne [[Untersuchung]]. Wir wissen noch nicht, wie die Angreifer reingekommen sind.', ru: 'После инцидента идёт внутреннее расследование. Мы пока не знаем, как злоумышленники проникли внутрь.' }
  ],
  morph: 'Unter-such-ung', root: 'suchen',
  parts: [['unter-', 'неотделяемая приставка'], ['such', 'основа suchen — искать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['suchen', 'die Suche', 'untersuchen', 'besuchen', 'der Besuch', 'versuchen', 'der Versuch'],
  meaningType: 'polysemous',
  meaningExplanation: 'Untersuchung обозначает и медицинский осмотр/обследование, и служебное или полицейское расследование — оба значения обычные словарные, а не метафоры.',
  meaningExamples: [{ de: 'eine medizinische Untersuchung', ru: 'медицинское обследование' }, { de: 'eine interne Untersuchung nach dem Vorfall', ru: 'внутреннее расследование после инцидента' }],
  note: 'У врача: «sich untersuchen lassen» — пройти обследование, «die Vorsorgeuntersuchung» — профилактический осмотр. Ещё это расследование полиции, фирмы или учёных — в безопасности: «die forensische Untersuchung».',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола untersuchen (unter- + suchen) + суффикс -ung.\nПроисхождение: средневерхненемецкое undersuochen уже значило «испытывать, проверять, исследовать» (от suchen «искать»).\nПрозрачность: переносная — корень suchen виден, но современное пространственное значение unter- («под») здесь не действует.',
    source: 'DWDS (Pfeifer), s.v. untersuchen',
    evidence: 'Ср.-в.-нем. undersuochen «испытывать, проверять»; приставка unter- здесь не несёт буквального значения «под».'
  },
  ru_link: null
},
{
  id: 'b1-health-behandeln', pos: 'verb',
  de: 'behandeln', forms: { praes: 'behandelt', praet: 'behandelte', perf: 'hat behandelt' }, gov: '+ Akk.',
  ru: 'лечить; обращаться (с кем-то); рассматривать (тему)',
  examples: [
    { sense: 'лечить', de: 'Welcher Arzt hat Sie bisher [[behandelt]]?', ru: 'Какой врач вас до сих пор лечил?' },
    { sense: 'обращаться (с чем-то / кем-то)', de: 'Bitte [[behandeln]] Sie diese Informationen vertraulich.', ru: 'Пожалуйста, обращайтесь с этой информацией конфиденциально.' },
    { sense: 'рассматривать (тему)', de: 'In der heutigen Sitzung [[behandeln]] wir zuerst Punkt drei.', ru: 'На сегодняшнем заседании мы сначала рассмотрим третий пункт.' }
  ],
  morph: 'be-handel-n', root: 'Hand',
  parts: [['be-', 'неотделяемая приставка, делает глагол переходным (+ Akk.)'], ['handel', 'основа handeln — действовать (исторически от Hand)'], ['-n', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['die Hand', 'handeln', 'der Handel', 'der Händler', 'die Handlung', 'die Behandlung'],
  meaningType: 'polysemous',
  meaningExplanation: 'Глагол behandeln имеет три самостоятельных словарных значения: лечить пациента, обращаться с кем-то/чем-то и рассматривать тему.',
  meaningExamples: [{ de: 'einen Patienten behandeln', ru: 'лечить пациента' }, { de: 'ein Thema in der Sitzung behandeln', ru: 'рассматривать тему на заседании' }, { de: 'Daten vertraulich behandeln', ru: 'обращаться с данными конфиденциально' }],
  note: 'Медицина: «Der Arzt behandelt den Patienten», «sich behandeln lassen», «die Behandlung» — лечение. Также — как обращаются с людьми («Er behandelt mich wie ein Kind») и тема на встрече («Heute behandeln wir nur Punkt 3»). Слабый глагол: behandelte, hat behandelt.',
  why: {
    confidence: 'high',
    text: 'Состав: be- + handeln + -n.\nПроисхождение: глагол handeln восходит к древневерхненемецкому hantalōn «брать в руки, трогать, обходиться» (от die Hand). Приставочное behandeln закрепилось в значении «обходиться с кем-то/чем-то», а позже расширилось до «лечить» и «разбирать тему».\nПрозрачность: переносная — современное handeln («действовать, торговать») напрямую не подсказывает смысл «лечить».',
    source: 'DWDS (Pfeifer), s.v. behandeln / handeln',
    evidence: 'Др.-в.-нем. hantalōn «трогать руками, обходиться» (от Hand); behandeln с XV–XVI вв. — «обходиться с кем-то/чем-то», затем «лечить».'
  },
  ru_link: null
},
{
  id: 'b1-health-rezept', pos: 'noun',
  de: 'Rezept', article: 'das', plural: 'die Rezepte',
  ru: 'рецепт (врача и кулинарный)',
  examples: [
    { sense: 'рецепт врача', de: 'Für dieses Medikament brauchen Sie ein [[Rezept]] vom Arzt.', ru: 'Для этого лекарства нужен рецепт от врача.' },
    { sense: 'кулинарный рецепт', de: 'Das [[Rezept]] für den Kuchen hat mir meine Kollegin geschickt.', ru: 'Рецепт этого пирога мне прислала коллега.' }
  ],
  morph: 'Rezept',
  family: ['rezeptfrei', 'rezeptpflichtig', 'das E-Rezept', 'das Kochrezept'],
  meaningType: 'polysemous',
  meaningExplanation: 'Слово Rezept в немецком одинаково обозначает и врачебный рецепт на лекарство, и кулинарный рецепт блюда.',
  meaningExamples: [{ de: 'ein Rezept vom Hausarzt', ru: 'рецепт от семейного врача' }, { de: 'ein einfaches Rezept für Suppe', ru: 'простой рецепт супа' }],
  note: 'Как и в русском, оба значения. «Rezeptfrei» — без рецепта; «rezeptpflichtig» — только по рецепту. Сейчас врач часто выписывает «E-Rezept», аптека считывает его с карточки страховки. В аптеке: «ein Rezept einlösen» — получить лекарство по рецепту.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Rezepte).\nПроисхождение: от латинского receptum («принятое», от recipere «брать, принимать»): врачебные предписания традиционно начинались словом recipe — «возьми!» (отсюда знак ℞). Позже слово распространилось и на кулинарные рецепты — как в немецком, так и в русском.\nПрозрачность: непроизводная основа; значения совпадают с русским.',
    source: 'DWDS (Pfeifer), s.v. Rezept; Vasmer: рецепт',
    evidence: 'Из лат. receptum (к recipere «брать») и начальной формулы врачебных прописей recipe! («возьми!»).'
  },
  ru_link: { type: 'internationalism', text: 'рецепт: оба слова от латинского receptum. Те же два значения — лёгкое слово.' }
},
{
  id: 'b1-health-erkaeltung', pos: 'noun',
  de: 'Erkältung', article: 'die', plural: 'die Erkältungen',
  ru: 'простуда',
  examples: [
    { de: 'Ich habe mir eine [[Erkältung]] eingefangen und arbeite heute von zu Hause.', ru: 'Я подхватил простуду и сегодня работаю из дома.' },
    { de: 'Gegen eine normale [[Erkältung]] helfen vor allem Ruhe und viel Tee.', ru: 'При обычной простуде лучше всего помогают покой и много чая.' }
  ],
  morph: 'Er-kält-ung', root: 'kalt',
  parts: [['er-', 'переход в состояние'], ['kält', 'kalt — холодный (умлаут в erkälten)'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['kalt', 'die Kälte', 'sich erkälten', 'erkältet sein'],
  note: 'Глагол: «sich erkälten» (Ich habe mich erkältet). Прилагательное: «Ich bin erkältet» — я простужен. Erkältung легче, чем «die Grippe» (грипп). Врачи часто пишут «grippaler Infekt» — это просто сильная простуда, не грипп.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола sich erkälten (er- + kalt с умлаутом) + -ung.\nПроисхождение: sich erkälten буквально значило «охладиться» (er- — переход в состояние + kalt «холодный») и с XVI в. закрепилось в значении «простудиться». Русское «простудиться» (от «стужа») возникло независимо по той же логике.\nПрозрачность: прозрачная — корень kalt легко узнаётся.',
    source: 'DWDS (Pfeifer), s.v. erkälten / Erkältung',
    evidence: 'От возвратного sich erkälten («охладиться, простудиться»), производного от kalt с приставкой er- (XVI в.).'
  },
  ru_link: null
},
{
  id: 'b1-health-verletzen', pos: 'verb',
  de: 'sich verletzen', forms: { praes: 'verletzt sich', praet: 'verletzte sich', perf: 'hat sich verletzt' }, gov: 'sich (Akk.) / sich (Dat.) etw. (Akk.)',
  ru: 'пораниться, получить травму; (verletzen) нарушать (правила, права)',
  examples: [
    { sense: 'пораниться (sich Akk.)', de: 'Beim Fußball habe ich mich am Knie [[verletzt]].', ru: 'Я повредил колено, играя в футбол.' },
    { sense: 'повредить часть тела (sich Dat. + Akk.)', de: 'Ich habe mir beim Kochen die Hand [[verletzt]].', ru: 'Я поранил руку, когда готовил.' },
    { sense: 'нарушать (правила, права)', de: 'Diese Maßnahme darf den Datenschutz nicht [[verletzen]].', ru: 'Эта мера не должна нарушать защиту данных.' }
  ],
  morph: 'ver-letz-en', root: 'letzen',
  parts: [['ver-', 'неотделяемая приставка'], ['letz', 'связанный корень (отдельно не употребляется)'], ['-en', 'окончание инфинитива']],
  transparency: 'opaque',
  family: ['verletzt', 'der/die Verletzte', 'die Verletzung', 'verletzlich', 'unverletzt', 'die Datenschutzverletzung'],
  meaningType: 'polysemous',
  meaningExplanation: 'Возвратное sich verletzen значит «получить травму, пораниться», а переходное verletzen также значит «нарушать правила, права или политику».',
  meaningExamples: [{ de: 'Er hat sich beim Sport verletzt.', ru: 'Он получил травму на спорте.' }, { de: 'eine Sicherheitsrichtlinie verletzen', ru: 'нарушить политику безопасности' }],
  note: 'Следите за падежом: «Ich habe mich verletzt» (Akk.), но с частью тела возвратное местоимение в Dativ, а часть тела — с артиклем, а не с притяжательным: «Ich habe mir den Arm verletzt», а не «meinen Arm». Переносно: «Regeln / den Datenschutz verletzen» — нарушать. В безопасности: «die Datenschutzverletzung» — утечка/нарушение защиты данных.',
  why: {
    confidence: 'high',
    text: 'Состав: ver- + связанный корень -letz- + -en.\nПроисхождение: средневерхненемецкое verletzen образовано от ныне исчезнувшего глагола letzen («задерживать, препятствовать, вредить»). Самостоятельный глагол из языка ушёл, остались verletzen и die Verletzung.\nПрозрачность: непрозрачное — корень -letz- отдельно в современном языке не существует.',
    source: 'DWDS (Pfeifer), s.v. verletzen',
    evidence: 'Ср.-в.-нем. verletzen «повреждать, ранить», к утраченному глаголу letzen «задерживать, вредить».'
  },
  ru_link: null
},
{
  id: 'b1-health-notfall', pos: 'noun',
  de: 'Notfall', article: 'der', plural: 'die Notfälle',
  ru: 'экстренный случай, неотложная ситуация',
  examples: [
    { de: 'Im [[Notfall]] rufen Sie die 112 an.', ru: 'В экстренном случае звоните 112.' },
    { de: 'Das ist kein [[Notfall]], das Ticket kann bis Montag warten.', ru: 'Это не срочно, тикет может подождать до понедельника.' }
  ],
  morph: 'Not-fall', root: 'Not · Fall',
  parts: [['Not', 'die Not — беда, нужда'], ['Fall', 'der Fall — случай']],
  transparency: 'transparent',
  family: ['die Not', 'notwendig', 'der Notarzt', 'die Notaufnahme', 'der Notausgang', 'der Fall', 'der Unfall'],
  note: '«Im Notfall» — ещё и «в крайнем случае». В Германии: 112 — скорая и пожарные, 110 — полиция, 116 117 — дежурный врач, если не опасно для жизни, а кабинеты закрыты. Приёмное отделение — «die Notaufnahme». В IT: «der Notfallplan», «das Notfallmanagement».',
  why: {
    confidence: 'high',
    text: 'Состав: die Not («беда, нужда») + der Fall («случай»).\nПроисхождение: определительное сложение XVII века — буквально «случай беды, крайней нужды». Та же основа Not входит в notwendig («необходимый»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Notfall / Not',
    evidence: 'Сложение die Not («нужда, беда») + der Fall («случай»); засвидетельствовано с XVII в.'
  },
  ru_link: null
},
{
  id: 'b1-health-krankenkasse', pos: 'noun',
  de: 'Krankenkasse', article: 'die', plural: 'die Krankenkassen',
  ru: 'больничная касса (государственная медицинская страховка)',
  examples: [
    { de: 'Bei welcher [[Krankenkasse]] sind Sie versichert?', ru: 'В какой больничной кассе вы застрахованы?' },
    { de: 'Die [[Krankenkasse]] übernimmt die Kosten für die Physiotherapie.', ru: 'Больничная касса оплачивает физиотерапию.' }
  ],
  morph: 'Kranken-kasse', root: 'krank',
  parts: [['Kranken-', 'die Kranken — больные'], ['Kasse', 'die Kasse — касса, фонд']],
  transparency: 'transparent',
  family: ['krank', 'die Krankheit', 'das Krankenhaus', 'die Krankmeldung', 'die Kasse', 'kassieren'],
  note: 'Государственные страховые (TK, AOK, Barmer …). «Gesetzlich versichert» vs «privat versichert» (частную обычно называют «Krankenversicherung»). Разговорно: «Das zahlt die Kasse». При первом визите в квартал показывают «Versichertenkarte» (Gesundheitskarte).',
  why: {
    confidence: 'high',
    text: 'Состав: die Kranken («больные») + die Kasse («касса, фонд»).\nПроисхождение: в средневерхненемецком kranc значило «слабый, немощный»; значение «больной» стало основным в XV–XVI вв., вытеснив старое siech. Kasse пришло в XVI в. из итальянского cassa («ящик, касса»).\nПрозрачность: полностью прозрачное сложение — «фонд для больных».',
    source: 'DWDS (Pfeifer), s.v. krank / Kasse; Vasmer: касса',
    evidence: 'Ср.-в.-нем. kranc «слабый» → «больной» (XV–XVI вв.); Kasse < итал. cassa (XVI в.).'
  },
  ru_link: { type: 'loan_in_russian', text: 'Kasse → касса (заимствовано через немецкий или польский из итальянского cassa). Значение «касса, фонд» совпадает.' }
}
]});
