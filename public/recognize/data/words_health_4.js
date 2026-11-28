/* Health & Doctor, batch 4: verbs and adjectives. Source: Goethe B1 Wortliste. */
GT.register({ tab: 'words', topic: 'health', items: [
{
  id: 'b1-health-ausruhen', pos: 'verb',
  de: 'sich ausruhen', forms: { praes: 'ruht sich aus', praet: 'ruhte sich aus', perf: 'hat sich ausgeruht' },
  ru: 'отдыхать, передохнуть',
  examples: [
    { de: 'Bleiben Sie zwei Tage zu Hause und [[ruhen]] Sie sich [[aus]].', ru: 'Побудьте два дня дома и отдохните.' },
    { de: 'Nach der Nachtschicht muss ich mich erst mal [[ausruhen]].', ru: 'После ночной смены мне надо сначала отдохнуть.' }
  ],
  morph: 'aus-ruh-en', root: 'Ruhe',
  parts: [['aus-', 'полностью (отделяемая)'], ['ruh', 'основа ruhen / die Ruhe — покой'], ['-en', 'окончание инфинитива']],
  transparency: 'transparent',
  family: ['die Ruhe', 'ruhig', 'die Unruhe', 'beruhigen', 'sich erholen'],
  note: 'Отделяемый и возвратный: «Ich ruhe mich aus». Это короткий физический отдых. Долгое восстановление (после болезни, в отпуске) — «sich erholen». «Lass mich in Ruhe!» — оставь меня в покое!',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка aus- («полностью, вдоволь») + глагол ruhen (от die Ruhe «покой»).\nПроисхождение: die Ruhe (др.-в.-нем. ruowa «покой, отдых») дало глагол ruhen; с aus- — «отдохнуть в полной мере».\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. Ruhe / ausruhen',
    evidence: 'aus- («полностью») + ruhen (к др.-в.-нем. ruowa «покой, отдых»).'
  },
  ru_link: null
},
{
  id: 'b1-health-erholen', pos: 'verb',
  de: 'sich erholen', forms: { praes: 'erholt sich', praet: 'erholte sich', perf: 'hat sich erholt' }, gov: 'von + Dat.',
  ru: 'поправляться, восстанавливаться; отдыхать (набираться сил)',
  examples: [
    { sense: 'восстанавливаться после болезни', de: 'Von der Operation hat er sich gut [[erholt]].', ru: 'После операции он хорошо восстановился.' },
    { sense: 'отдыхать, набираться сил', de: 'Im Urlaub will ich mich einfach nur [[erholen]].', ru: 'В отпуске я хочу просто отдохнуть.' }
  ],
  morph: 'er-hol-en', root: 'holen',
  parts: [['er-', 'достижение результата'], ['hol', 'основа holen — доставать, приносить'], ['-en', 'окончание инфинитива']],
  transparency: 'opaque',
  family: ['die Erholung', 'erholsam', 'holen', 'wiederholen', 'abholen'],
  note: '«Sich von + Dat. erholen»: von einer Krankheit, vom Stress. Существительное: «die Erholung»; «Gute Erholung!» — выздоравливай / хорошо отдохни. «Erholsam» — восстанавливающий, приятный (об отдыхе).',
  why: {
    confidence: 'high',
    text: 'Состав: неотделяемая приставка er- + основа глагола holen («доставать, приносить»).\nПроисхождение: средневерхненемецкое sich erholn значило «наверстать, вернуть утраченное, восполнить силы» (от holen «добывать, возвращать»), откуда современное «восстанавливаться, отдыхать».\nПрозрачность: непрозрачное — по современному holen («сходить за чем-то») значение «поправляться» не угадать.',
    source: 'DWDS (Pfeifer), s.v. erholen',
    evidence: 'Ср.-в.-нем. sich erholn «наверстать, восполнить силы» (к holen) → «восстановиться, отдохнуть».'
  },
  ru_link: null
},
{
  id: 'b1-health-atmen', pos: 'verb',
  de: 'atmen', forms: { praes: 'atmet', praet: 'atmete', perf: 'hat geatmet' },
  ru: 'дышать',
  examples: [
    { de: 'Bitte tief [[atmen]] … und wieder ausatmen.', ru: 'Пожалуйста, глубоко вдохните… и выдохните.' },
    { de: 'Ich kann durch die Nase kaum [[atmen]].', ru: 'Я почти не могу дышать носом.' }
  ],
  morph: 'atm-en', root: 'Atem',
  family: ['der Atem', 'die Atmung', 'einatmen', 'ausatmen', 'die Atemnot'],
  note: 'Основа на согласный + m, поэтому вставное -e-: du atmest, er atmet, geatmet. У врача: «Tief einatmen – ausatmen».',
  why: {
    confidence: 'high',
    text: 'Состав: от существительного der Atem («дыхание») + -en (беглое e выпадает в инфинитиве).\nПроисхождение: др.-в.-нем. ātumōn образовано от ātum («дыхание, дух»).\nПрозрачность: прозрачная пара Atem ↔ atmen.',
    source: 'DWDS (Pfeifer), s.v. atmen / Atem',
    evidence: 'От др.-в.-нем. ātum («дыхание») → ātumōn «дышать».'
  },
  ru_link: null
},
{
  id: 'b1-health-bluten', pos: 'verb',
  de: 'bluten', forms: { praes: 'blutet', praet: 'blutete', perf: 'hat geblutet' },
  ru: 'кровоточить, идти кровью',
  examples: [
    { de: 'Du [[blutest]] ja am Finger!', ru: 'У тебя же палец в крови!' },
    { de: 'Die Wunde hat stark [[geblutet]].', ru: 'Рана сильно кровоточила.' }
  ],
  morph: 'blut-en', root: 'Blut',
  family: ['das Blut', 'blutig', 'die Blutung', 'die Blutprobe', 'der Blutdruck'],
  note: 'Вставное -e- после -t: du blutest, er blutet. У врача: «eine Blutprobe abnehmen» — взять кровь на анализ; «den Blutdruck messen» — измерить давление.',
  why: {
    confidence: 'high',
    text: 'Состав: основа das Blut («кровь») + -en.\nПроисхождение: общегерманское существительное Blut (др.-в.-нем. bluot, родственно английскому blood), от него отымённый глагол bluten (англ. bleed).\nПрозрачность: полностью прозрачная связь с das Blut.',
    source: 'DWDS (Pfeifer), s.v. Blut / bluten',
    evidence: 'Отымённый глагол от das Blut (< герм. *blōþą, родственно англ. blood / bleed).'
  },
  ru_link: null
},
{
  id: 'b1-health-leiden', pos: 'verb',
  de: 'leiden', forms: { praes: 'leidet', praet: 'litt', perf: 'hat gelitten' }, gov: 'an + Dat. / unter + Dat.',
  ru: 'страдать (болезнью, от чего-то)',
  examples: [
    { sense: 'болеть, страдать болезнью (an + Dat.)', de: 'Mein Vater [[leidet]] an Diabetes.', ru: 'Мой отец болеет диабетом.' },
    { sense: 'страдать от ситуации (unter + Dat.)', de: 'Viele Kollegen [[leiden]] unter dem Stress im Projekt.', ru: 'Многие коллеги страдают от стресса в проекте.' }
  ],
  morph: 'leid-en',
  family: ['das Leid', 'leider', 'das Leiden', 'Es tut mir leid.', 'mitleiden'],
  note: '«An + Dat.» — болезнью (an Migräne leiden); «unter + Dat.» — от ситуации (unter der Hitze, unter Stress). «Ich kann ihn nicht leiden» — я его терпеть не могу. Сильный: litt, gelitten.',
  why: {
    confidence: 'high',
    text: 'Состав: сильный корневой глагол leid- + -en (litt, gelitten).\nПроисхождение: древневерхненемецкое līdan изначально значило «идти, проходить (путь)», затем «переносить, претерпевать тяготы» → «страдать». К тому же корню относится глагол leiten («вести» — буквально «заставлять идти»).\nПрозрачность: современное значение «страдать» ушло от древнего глагола движения.',
    source: 'DWDS (Pfeifer), s.v. leiden / leiten',
    evidence: 'Др.-в.-нем. līdan «идти, проходить» → «переносить, страдать»; каузатив к нему — leiten («вести»).'
  },
  ru_link: null
},
{
  id: 'b1-health-pflegen', pos: 'verb',
  de: 'pflegen', forms: { praes: 'pflegt', praet: 'pflegte', perf: 'hat gepflegt' }, gov: '+ Akk.',
  ru: 'ухаживать (за больным); поддерживать, вести (данные, систему)',
  examples: [
    { sense: 'ухаживать за человеком', de: 'Sie [[pflegt]] ihre kranke Mutter zu Hause.', ru: 'Она ухаживает за больной мамой дома.' },
    { sense: 'вести, поддерживать (данные, документацию)', de: 'Wer [[pflegt]] eigentlich die Dokumentation im Wiki?', ru: 'А кто вообще ведёт документацию в вики?' }
  ],
  morph: 'pfleg-en',
  family: ['die Pflege', 'der Pfleger', 'gepflegt', 'die Körperpflege', 'der Pflegefall'],
  meaningType: 'polysemous',
  meaningExplanation: 'В медицине и быту pflegen значит «ухаживать за человеком», а в работе и IT — «аккуратно вести и поддерживать» данные, документацию или систему.',
  meaningExamples: [{ de: 'einen kranken Angehörigen pflegen', ru: 'ухаживать за больным родственником' }, { de: 'die Dokumentation sauber pflegen', ru: 'аккуратно вести документацию' }],
  note: 'О людях («einen Kranken pflegen»), о вещах (сад, кожа) и в IT: «Daten / ein System pflegen» — поддерживать, актуализировать. «Gepflegt» — ухоженный. «Ein Pflegefall» — человек, которому нужен постоянный уход.',
  why: {
    confidence: 'high',
    text: 'Состав: корневой глагол pfleg- + -en.\nПроисхождение: древневерхненемецкое pflegan значило «ручаться, нести ответственность, заботиться». Из «заботиться и поддерживать в порядке» вышли и медицинский уход, и IT-значение «вести, поддерживать документацию/данные».\nПрозрачность: оба значения объединены идеей заботливого поддержания.',
    source: 'DWDS (Pfeifer), s.v. pflegen',
    evidence: 'Др.-в.-нем. pflegan «ручаться, заботиться, ухаживать».'
  },
  ru_link: null
},
{
  id: 'b1-health-schwitzen', pos: 'verb',
  de: 'schwitzen', forms: { praes: 'schwitzt', praet: 'schwitzte', perf: 'hat geschwitzt' },
  ru: 'потеть',
  examples: [
    { de: 'Nachts [[schwitze]] ich stark und habe Fieber.', ru: 'Ночью я сильно потею, и у меня жар.' },
    { de: 'Beim Sport [[schwitzt]] man eben.', ru: 'На спорте человек потеет — это нормально.' }
  ],
  morph: 'schwitz-en',
  family: ['der Schweiß', 'verschwitzt', 'schweißgebadet'],
  note: '«Der Schweiß» — пот. «Verschwitzt» — потный. «Ich bin schweißgebadet» — я весь в поту. Ночную потливость стоит упомянуть у врача.',
  why: {
    confidence: 'high',
    text: 'Состав: корневой глагол schwitz- + -en (рядом существительное der Schweiß «пот»).\nПроисхождение: от общегерманского корня *swait- (родственно английскому sweat «пот / потеть» и латинскому sūdor < и.-е. *sweyd-).\nПрозрачность: базовый корень (Schweiß ↔ schwitzen).',
    source: 'DWDS (Pfeifer), s.v. schwitzen / Schweiß',
    evidence: 'К дер. Schweiß (< др.-в.-нем. sweiz < и.-е. *sweyd-, родственно англ. sweat).'
  },
  ru_link: null
},
{
  id: 'b1-health-frieren', pos: 'verb',
  de: 'frieren', forms: { praes: 'friert', praet: 'fror', perf: 'hat / ist gefroren' },
  ru: 'мёрзнуть; замерзать',
  examples: [
    { sense: 'мёрзнуть (с haben)', de: 'Ich [[friere]], obwohl die Heizung an ist. Vielleicht bekomme ich Fieber.', ru: 'Я мёрзну, хотя отопление включено. Может, у меня поднимается температура.' },
    { sense: 'замёрзнуть (о человеке)', de: 'Ohne Jacke hast du bestimmt [[gefroren]].', ru: 'Без куртки ты наверняка замёрз.' },
    { sense: 'замерзать, превращаться в лёд (с sein)', de: 'Über Nacht ist der kleine See komplett [[gefroren]].', ru: 'За ночь маленькое озеро полностью замёрзло.' }
  ],
  morph: 'frier-en',
  family: ['der Frost', 'gefroren', 'einfrieren', 'der Gefrierschrank', 'kalt'],
  note: '«Ich friere» = «Mir ist kalt» (в разговоре чаще второе — обратите внимание на Dativ). Вода «friert» / «ist gefroren» (с sein) — превращается в лёд. Сильный: fror, gefroren.',
  why: {
    confidence: 'high',
    text: 'Состав: сильный глагол frier- + -en (fror, gefroren).\nПроисхождение: др.-в.-нем. friosan (родственно английскому freeze «замерзать»). Историческое -s- в корне перешло в -r- в глаголе frieren, но сохранилось в родственном существительном der Frost («мороз»).\nПрозрачность: базовый корень (frieren ↔ Frost).',
    source: 'DWDS (Pfeifer), s.v. frieren / Frost',
    evidence: 'Др.-в.-нем. friosan (англ. freeze); чередование s/r (ротацизм) объясняет пару frieren — Frost.'
  },
  ru_link: null
},
{
  id: 'b1-health-sterben', pos: 'verb',
  de: 'sterben', forms: { praes: 'stirbt', praet: 'starb', perf: 'ist gestorben' }, gov: 'an + Dat.',
  ru: 'умирать',
  examples: [
    { de: 'Ihr Großvater ist letztes Jahr [[gestorben]].', ru: 'Её дедушка умер в прошлом году.' },
    { de: 'Er [[starb]] an einem Herzinfarkt.', ru: 'Он умер от инфаркта.' }
  ],
  morph: 'sterb-en',
  family: ['der Tod', 'tot', 'sterblich', 'das Sterben', 'aussterben'],
  note: 'Perfekt с sein: «Er ist gestorben». «An + Dat.» — умереть от: an Krebs, an einer Krankheit. Вежливо: «verstorben»; «ums Leben kommen» — погибнуть (в аварии). Сильный: e→i, starb, gestorben.',
  why: {
    confidence: 'high',
    text: 'Состав: сильный корневой глагол sterb- + -en (stirbt, starb, ist gestorben).\nПроисхождение: древневерхненемецкое sterban восходит к западногерманской основе со значением «коченеть, цепенеть, умирать». К тому же корню относится английское starve (изначально «умирать», затем сузилось до «голодать»).\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. sterben',
    evidence: 'Др.-в.-нем. sterban < зап.-герм. *sterbaną «коченеть, умирать» (родственно англ. starve).'
  },
  ru_link: null
},
{
  id: 'b1-health-stuerzen', pos: 'verb',
  de: 'stürzen', forms: { praes: 'stürzt', praet: 'stürzte', perf: 'ist gestürzt' },
  ru: 'упасть (сильно); рухнуть',
  examples: [
    { de: 'Meine Oma ist in der Küche [[gestürzt]] und hat sich die Hüfte gebrochen.', ru: 'Бабушка упала на кухне и сломала бедро.' },
    { de: 'Bei Glatteis [[stürzen]] viele Radfahrer.', ru: 'В гололёд многие велосипедисты падают.' }
  ],
  morph: 'stürz-en',
  family: ['der Sturz', 'abstürzen', 'der Absturz', 'einstürzen', 'fallen'],
  note: 'Сильнее, чем «fallen»: неудачное, резкое падение. Perfekt с sein. В IT: «Das Programm ist abgestürzt» — программа упала; «der Absturz» — сбой, падение.',
  ru_link: null
},
{
  id: 'b1-health-retten', pos: 'verb',
  de: 'retten', forms: { praes: 'rettet', praet: 'rettete', perf: 'hat gerettet' }, gov: '+ Akk.',
  ru: 'спасать',
  examples: [
    { de: 'Die schnelle Hilfe hat ihm das Leben [[gerettet]].', ru: 'Быстрая помощь спасла ему жизнь.' },
    { de: 'Kannst du die Daten noch [[retten]]?', ru: 'Ты ещё можешь спасти данные?' }
  ],
  morph: 'rett-en',
  family: ['die Rettung', 'der Retter', 'der Rettungswagen', 'der Rettungsdienst'],
  note: '«Jdm. das Leben retten» — спасти кому-то жизнь. «Der Rettungsdienst» — служба скорой помощи. В IT: «Daten retten» — восстановить данные. Вставное -e-: du rettest, er rettet.',
  why: {
    confidence: 'high',
    text: 'Состав: корневой глагол rett- + -en.\nПроисхождение: древневерхненемецкое retten первоначально значило «вырывать, отнимать (у врага), освобождать из опасности», откуда «спасать».\nПрозрачность: базовый корень (ср. die Rettung, der Rettungswagen).',
    source: 'DWDS (Pfeifer), s.v. retten',
    evidence: 'Др.-в.-нем. retten «отнимать, вырывать из беды → спасать».'
  },
  ru_link: null
},
{
  id: 'b1-health-schaden', pos: 'verb',
  de: 'schaden', forms: { praes: 'schadet', praet: 'schadete', perf: 'hat geschadet' }, gov: '+ Dat.',
  ru: 'вредить',
  examples: [
    { de: 'Zu viel Zucker [[schadet]] den Zähnen.', ru: 'Слишком много сахара вредит зубам.' },
    { de: 'Ein Spaziergang kann nicht [[schaden]].', ru: 'Прогулка не повредит.' }
  ],
  morph: 'schad-en',
  family: ['der Schaden', 'schädlich', 'die Schadsoftware', 'beschädigen', 'schade'],
  note: 'Глагол с Dativ (как и русское «вредить кому»): «Das schadet dir / der Gesundheit». Типичная фраза: «Das kann nicht schaden» — хуже не будет. «Schade!» — жаль!',
  why: {
    confidence: 'high',
    text: 'Состав: корневой глагол schad- + -en (рядом der Schaden «вред, ущерб»).\nПроисхождение: общегерманский корень (др.-в.-нем. scadōn «вредить», scado «ущерб»). От него же разговорное восклицание «Schade!» («жаль!») — буквально «какой ущерб!».\nПрозрачность: базовый корень (Schaden, schädlich, Schadsoftware).',
    source: 'DWDS (Pfeifer), s.v. schaden / Schaden / schade',
    evidence: 'Др.-в.-нем. scadōn «вредить» / scado «ущерб»; отсюда же предикативное schade («жаль»).'
  },
  ru_link: null
},
{
  id: 'b1-health-fuehlen', pos: 'verb',
  de: 'sich fühlen', forms: { praes: 'fühlt sich', praet: 'fühlte sich', perf: 'hat sich gefühlt' },
  ru: 'чувствовать себя',
  examples: [
    { de: 'Ich [[fühle]] mich heute nicht so gut, ich glaube, ich werde krank.', ru: 'Я сегодня неважно себя чувствую, кажется, заболеваю.' },
    { de: 'Wie [[fühlen]] Sie sich nach der Behandlung?', ru: 'Как вы себя чувствуете после лечения?' }
  ],
  morph: 'fühl-en', root: 'fühlen',
  family: ['das Gefühl', 'fühlen', 'mitfühlen', 'gefühllos', 'das Mitgefühl'],
  note: 'С прилагательным — без «wie»: «Ich fühle mich müde». Без «sich» fühlen — чувствовать/нащупать что-то: «Ich fühle einen Knoten». «Sich wohlfühlen» — чувствовать себя комфортно.',
  why: {
    confidence: 'high',
    text: 'Состав: корневой глагол fühl- + -en (рядом das Gefühl «чувство»).\nПроисхождение: древневерхненемецкое fuolen (родственно английскому feel) первоначально означало физическое осязание («трогать, нащупывать»), затем перешло на внутреннее ощущение и самочувствие.\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. fühlen',
    evidence: 'Др.-в.-нем. fuolen «ощупывать, воспринимать осязанием» → «чувствовать» (родственно англ. feel).'
  },
  ru_link: null
},
{
  id: 'b1-health-erschoepft', pos: 'adjective',
  de: 'erschöpft',
  ru: 'измотанный, обессиленный',
  examples: [
    { de: 'Nach der Nachtschicht war ich völlig [[erschöpft]].', ru: 'После ночной смены я был совершенно вымотан.' },
    { de: 'Seit Wochen fühle ich mich ständig [[erschöpft]].', ru: 'Уже несколько недель я постоянно чувствую себя без сил.' }
  ],
  morph: 'er-schöpf-t', root: 'schöpfen',
  parts: [['er-', 'до конца, исчерпание'], ['schöpf', 'основа schöpfen — черпать'], ['-t', 'окончание причастия']],
  transparency: 'figurative',
  family: ['die Erschöpfung', 'erschöpfen', 'schöpfen', 'müde', 'kaputt'],
  meaningType: 'figurative',
  meaningExplanation: 'Причастие от erschöpfen (буквально «вычерпать до дна», от schöpfen — черпать): образно описывает человека, у которого «исчерпаны» все силы.',
  meaningExamples: [{ de: 'Nach der Nachtschicht war ich völlig erschöpft.', ru: 'После ночной смены я был совершенно выжат.' }, { de: 'unsere Ressourcen sind erschöpft', ru: 'наши ресурсы исчерпаны' }],
  note: 'Сильнее, чем «müde». Разговорно: «Ich bin total kaputt / fertig». «Die Erschöpfung» — истощение; хроническое — «Burnout» (в немецком тоже).',
  why: {
    confidence: 'high',
    text: 'Состав: причастие II от erschöpfen (er- «до конца» + schöpfen «черпать»).\nПроисхождение: буквально «вычерпанный до дна» — отсюда переносное значение «исчерпавший все силы, измотанный». Ср. русское «исчерпанный» (от «черпать»), построенное по той же метафоре.\nПрозрачность: переносная, образ «вычерпанности» легко запоминается.',
    source: 'DWDS (Pfeifer), s.v. erschöpfen',
    evidence: 'er- + schöpfen («черпать»): буквально «вычерпать до конца» → «истощить силы».'
  },
  ru_link: null
},
{
  id: 'b1-health-blass', pos: 'adjective',
  de: 'blass',
  ru: 'бледный',
  examples: [
    { de: 'Du bist ganz [[blass]]. Geht es dir nicht gut?', ru: 'Ты совсем бледный. Тебе плохо?' },
    { de: 'Nach dem langen Winter sind alle ein bisschen [[blass]].', ru: 'После долгой зимы все немного бледные.' }
  ],
  morph: 'blass',
  family: ['die Blässe', 'erblassen', 'bleich'],
  note: 'Степени: blass, blasser / blässer, am blassesten. «Bleich» — ещё сильнее («белый как полотно»). Переносно: «keine blasse Ahnung haben» — не иметь ни малейшего понятия.',
  ru_link: null
},
{
  id: 'b1-health-schwanger', pos: 'adjective',
  de: 'schwanger',
  ru: 'беременная',
  examples: [
    { de: 'Sie ist im fünften Monat [[schwanger]].', ru: 'Она на пятом месяце беременности.' },
    { de: 'Sind Sie [[schwanger]] oder stillen Sie?', ru: 'Вы беременны или кормите грудью?' }
  ],
  morph: 'schwanger',
  family: ['die Schwangerschaft', 'die Schwangere', 'stillen', 'die Geburt'],
  note: 'Стандартный вопрос у врача и в инструкциях к лекарствам. «Im ... Monat schwanger sein»; мягче — «ein Kind erwarten» (ждать ребёнка).',
  ru_link: null
},
{
  id: 'b1-health-koerperlich', pos: 'adjective',
  de: 'körperlich',
  ru: 'физический, телесный',
  examples: [
    { de: 'Die Arbeit im Lager ist [[körperlich]] sehr anstrengend.', ru: 'Работа на складе физически очень тяжёлая.' },
    { de: '[[Körperlich]] geht es ihm gut, aber psychisch ist er am Ende.', ru: 'Физически у него всё в порядке, но психологически он на пределе.' }
  ],
  morph: 'körper-lich', root: 'Körper',
  parts: [['Körper', 'der Körper — тело'], ['-lich', 'суффикс прилагательного']],
  transparency: 'transparent',
  family: ['der Körper', 'die Körperpflege', 'psychisch', 'geistig'],
  note: 'Противопоставления: «psychisch» — психический, «geistig» — умственный. «Körperliche Arbeit» — физический труд.',
  why: {
    confidence: 'high',
    text: 'Состав: существительное der Körper («тело») + суффикс прилагательного -lich.\nПроисхождение: образовано от Körper (заимствованного в XIII в. из латинского corpus «тело») в XVI в. для обозначения всего, что относится к телу.\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. Körper',
    evidence: 'Körper (< лат. corpus) + суффикс -lich (с XVI в.).'
  },
  ru_link: null
},
{
  id: 'b1-health-nervoes', pos: 'adjective',
  de: 'nervös',
  ru: 'нервный, взволнованный',
  examples: [
    { de: 'Vor dem Bewerbungsgespräch war ich total [[nervös]].', ru: 'Перед собеседованием я ужасно нервничал.' },
    { de: 'Das ständige Piepen macht mich [[nervös]].', ru: 'Этот постоянный писк меня нервирует.' }
  ],
  morph: 'nerv-ös', root: 'Nerv',
  family: ['der Nerv', 'die Nerven', 'nerven', 'nervig', 'die Nervosität'],
  note: '«Du nervst!» / «Das nervt!» — ты достал / это бесит (очень частое, разговорное). «Die Nerven verlieren» — потерять самообладание.',
  why: {
    confidence: 'high',
    text: 'Состав: заимствованное прилагательное (основа Nerv + романский суффикс -ös).\nПроисхождение: пришло в XVIII в. из французского nerveux / латинского nervōsus (от nervus «сухожилие, жила, нерв»). Сначала значило «сильный, жилистый», а с XIX в. закрепилось в значении «взволнованный, нервный».\nПрозрачность: международный корень.',
    source: 'DWDS (Pfeifer), s.v. nervös / Nerv',
    evidence: 'В XVIII в. из фр. nerveux / лат. nervōsus (< nervus «жила, нерв»); психологическое значение с XIX в.'
  },
  ru_link: { type: 'internationalism', text: 'нервный / нерв: оба от латинского nervus. «Nervös» ближе к «волнуюсь» (временное состояние), чем к «нервный характер».' }
},
{
  id: 'b1-health-schwach', pos: 'adjective',
  de: 'schwach',
  ru: 'слабый',
  examples: [
    { de: 'Nach der Grippe fühle ich mich noch etwas [[schwach]].', ru: 'После гриппа я ещё чувствую слабость.' },
    { de: 'Das Passwort ist zu [[schwach]], nimm lieber eins mit 16 Zeichen.', ru: 'Пароль слишком слабый, возьми лучше из 16 символов.' }
  ],
  morph: 'schwach',
  family: ['die Schwäche', 'schwächen', 'die Schwachstelle', 'stark'],
  note: 'Степени с умлаутом: schwach, schwächer, am schwächsten. «Eine Schwäche für etw. haben» — питать слабость к чему-то. В IT: «ein schwaches Passwort», «die Schwachstelle».',
  why: {
    confidence: 'high',
    text: 'Состав: корневое прилагательное (сравнительная степень с умлаутом: schwächer).\nПроисхождение: средневерхненемецкое swach значило «незначительный, скудный, бессильный»; постепенно закрепилось как основной антоним к stark («сильный»).\nПрозрачность: базовый корень (die Schwäche, die Schwachstelle).',
    source: 'DWDS (Pfeifer), s.v. schwach',
    evidence: 'Ср.-в.-нем. swach «малозначительный, немощный, слабый».'
  },
  ru_link: null
},
{
  id: 'b1-health-schaedlich', pos: 'adjective',
  de: 'schädlich', gov: 'für + Akk.',
  ru: 'вредный',
  examples: [
    { de: 'Rauchen ist [[schädlich]] für die Gesundheit.', ru: 'Курение вредно для здоровья.' },
    { de: 'Die Datei enthält [[schädlichen]] Code.', ru: 'Файл содержит вредоносный код.' }
  ],
  morph: 'schäd-lich', root: 'Schaden',
  parts: [['schäd', 'der Schaden — вред, ущерб (с умлаутом)'], ['-lich', 'суффикс прилагательного']],
  transparency: 'transparent',
  family: ['der Schaden', 'schaden', 'unschädlich', 'gesundheitsschädlich', 'die Schadsoftware'],
  note: '«Schädlich für + Akk.». Сложные слова: «gesundheitsschädlich», «umweltschädlich». «Unschädlich» — безвредный.',
  why: {
    confidence: 'high',
    text: 'Состав: основа der Schaden («вред, ущерб» с умлаутом) + суффикс прилагательного -lich.\nПроисхождение: средневерхненемецкое schedelich образовано от schaden («вред, ущерб») — буквально «приносящий ущерб».\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. schädlich / Schaden',
    evidence: 'Ср.-в.-нем. schedelich, производное от Schaden («вред, ущерб») + -lich.'
  },
  ru_link: null
},
{
  id: 'b1-health-abhaengig', pos: 'adjective',
  de: 'abhängig', gov: 'von + Dat.',
  ru: 'зависимый (от)',
  examples: [
    { de: 'Er ist seit Jahren von Schlaftabletten [[abhängig]].', ru: 'Он уже много лет зависим от снотворного.' },
    { de: 'Ob wir heute deployen, ist [[abhängig]] von den Testergebnissen.', ru: 'Будем ли мы сегодня деплоить, зависит от результатов тестов.' }
  ],
  morph: 'ab-häng-ig', root: 'hängen',
  parts: [['ab-', 'от, вниз'], ['häng', 'основа hängen — висеть'], ['-ig', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['hängen', 'abhängen von', 'die Abhängigkeit', 'unabhängig'],
  note: '«Von + Dat.»: von Drogen, vom Wetter. В разговоре чаще: «Das hängt davon ab, ob …» — это зависит от того, … «Unabhängig» — независимый. В IT: «die Abhängigkeiten» — зависимости.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола abhängen (ab- «вниз, от» + hängen «висеть») + -ig.\nПроисхождение: переносное значение «зависеть» (XVIII в.) часто приводят как кальку латинского dēpendere (dē- «вниз» + pendere «висеть», отсюда английское depend). По той же модели устроено и русское «за-висеть».\nПрозрачность: переносная — корень hängen легко виден, метафора «висеть на чём-то» понятна.',
    source: 'DWDS (Pfeifer), s.v. abhängen / abhängig',
    evidence: 'ab- + hängen; в переносном значении (XVIII в.) сопоставляется как калька с лат. dēpendere («свисать» → «зависеть»).'
  },
  ru_link: null
},
{
  id: 'b1-health-vorsichtig', pos: 'adjective',
  de: 'vorsichtig',
  ru: 'осторожный',
  examples: [
    { de: 'Sei [[vorsichtig]], die Treppe ist glatt!', ru: 'Осторожно, лестница скользкая!' },
    { de: 'Mit diesem Medikament sollten Sie beim Autofahren [[vorsichtig]] sein.', ru: 'С этим лекарством будьте осторожны за рулём.' }
  ],
  morph: 'vor-sicht-ig', root: 'sehen',
  parts: [['vor-', 'вперёд, заранее'], ['Sicht', 'die Sicht — вид, взгляд (от sehen)'], ['-ig', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['die Vorsicht', 'sehen', 'die Sicht', 'die Aussicht', 'die Rücksicht'],
  note: 'Буквально «смотрящий вперёд». Табличка: «Vorsicht!» — осторожно! «Vorsicht, Stufe!» — осторожно, ступенька.',
  why: {
    confidence: 'high',
    text: 'Состав: от die Vorsicht (vor- «вперёд» + Sicht от sehen «смотреть») + -ig.\nПроисхождение: средневерхненемецкое vorsiht («предвидение, осмотрительность») — буквально «взгляд вперёд» (ср. лат. prōvidentia и рус. «предусмотрительный»).\nПрозрачность: переносная, но обе части хорошо читаются.',
    source: 'DWDS (Pfeifer), s.v. Vorsicht / vorsichtig',
    evidence: 'От die Vorsicht (vor- + Sicht к sehen): «взгляд вперёд, предусмотрительность» → «осторожный».'
  },
  ru_link: null
},
{
  id: 'b1-health-fit', pos: 'adjective',
  de: 'fit',
  ru: 'в форме, бодрый; (снова) здоровый',
  examples: [
    { sense: 'в хорошей физической форме', de: 'Mit 60 ist sie noch total [[fit]].', ru: 'В 60 она ещё в отличной форме.' },
    { sense: 'снова здоров, в строю', de: 'Bist du wieder [[fit]]? Dann kannst du morgen beim Release helfen.', ru: 'Ты снова в строю? Тогда можешь завтра помочь с релизом.' }
  ],
  morph: 'fit',
  family: ['die Fitness', 'das Fitnessstudio', 'sich fit halten', 'gesund'],
  meaningType: 'colloquial',
  meaningExplanation: 'Короткое повседневное прилагательное: в живой речи немцы используют fit не только про спорт, но и в смысле «выздоровел, бодр, готов работать».',
  meaningExamples: [{ de: 'Bist du wieder fit?', ru: 'Ты уже поправился / снова в строю?' }, { de: 'Heute bin ich nicht ganz fit.', ru: 'Сегодня я не в лучшей форме.' }],
  note: 'Из английского, но значит ещё и «выздоровел»: «Ich bin wieder fit». «Sich fit halten» — поддерживать форму. «Das Fitnessstudio» — спортзал (три s подряд).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: вошло в немецкий в начале XX в. из английского спортивного языка (fit «подходящий, хорошо подготовленный к состязанию»), а затем расширилось до бытового «бодрый, снова здоровый».\nПрозрачность: заимствование.',
    source: 'DWDS (Pfeifer), s.v. fit',
    evidence: 'Заимствовано в начале XX в. из англ. fit (спортивный язык: «в хорошей форме»).'
  },
  ru_link: null
}
]});
