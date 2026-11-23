/* Health & Doctor, batch 3: illnesses, body, lifestyle, life events. Source: Goethe B1 Wortliste. */
GT.register({ tab: 'words', topic: 'health', items: [
{
  id: 'b1-health-grippe', pos: 'noun',
  de: 'Grippe', article: 'die',
  ru: 'грипп',
  examples: [
    { de: 'Die halbe Abteilung liegt mit [[Grippe]] im Bett.', ru: 'Пол-отдела лежит с гриппом.' },
    { de: 'Das ist keine Erkältung, das ist eine echte [[Grippe]].', ru: 'Это не простуда, это настоящий грипп.' }
  ],
  morph: 'Grippe',
  family: ['die Erkältung', 'der grippale Infekt', 'die Grippeimpfung', 'die Grippewelle'],
  note: 'В немецком — женского рода (а «грипп» — мужского). «Die Grippewelle» — эпидемия гриппа. В больничном часто пишут «grippaler Infekt» — это всего лишь сильная простуда.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (в немецком женского рода: die Grippe).\nПроисхождение: заимствовано во второй половине XVIII в. из французского grippe (оттуда же пришло и русское «грипп»). Дальнейшее происхождение самого французского слова спорное (обсуждают связь с фр. gripper «схватывать» или с рус. «хрип»).\nПрозрачность: интернационализм, но обратите внимание на женский род die Grippe.',
    source: 'DWDS (Pfeifer), s.v. Grippe; Vasmer: грипп',
    evidence: 'Заимствовано в XVIII в. из фр. grippe; дальнейшая этимология французского слова спорная.'
  },
  ru_link: { type: 'internationalism', text: 'грипп: оба слова заимствованы из французского grippe. Обратите внимание на род: die Grippe, но «грипп» (м. р.).' }
},
{
  id: 'b1-health-schnupfen', pos: 'noun',
  de: 'Schnupfen', article: 'der',
  ru: 'насморк',
  examples: [
    { de: 'Ich habe seit gestern [[Schnupfen]] und Halsschmerzen.', ru: 'Со вчерашнего дня у меня насморк и болит горло.' },
    { de: 'Mit einem leichten [[Schnupfen]] gehe ich trotzdem ins Büro.', ru: 'С лёгким насморком я всё равно иду в офис.' }
  ],
  morph: 'Schnupfen',
  family: ['schnupfen', 'das Taschentuch', 'die Nase', 'die Nasentropfen'],
  note: 'Обычно без артикля: «Ich habe Schnupfen». Типичные фразы: «Meine Nase läuft» — у меня течёт из носа; «Meine Nase ist zu» — нос заложен.',
  why: {
    confidence: 'high',
    text: 'Состав: существительное der Schnupfen (рядом глагол schnupfen «втягивать носом»).\nПроисхождение: от средневерхненемецкого snupfen («втягивать воздух носом, сопеть, шмыгать») — слово звукоподражательного характера, называющее главный симптом насморка.\nПрозрачность: связь с действием «шмыгать носом» просматривается через глагол schnupfen.',
    source: 'DWDS (Pfeifer), s.v. Schnupfen / schnupfen',
    evidence: 'От ср.-в.-нем. snupfen («втягивать воздух носом, сопеть»), экспрессивно-звукоподражательное образование.'
  },
  ru_link: null
},
{
  id: 'b1-health-husten', pos: 'noun',
  de: 'Husten', article: 'der',
  ru: 'кашель',
  examples: [
    { de: 'Gegen den [[Husten]] hilft dieser Tee wirklich gut.', ru: 'От кашля этот чай очень хорошо помогает.' },
    { de: 'Der Kollege [[hustet]] schon seit Tagen.', ru: 'Коллега кашляет уже несколько дней.' }
  ],
  morph: 'Husten', root: 'husten',
  family: ['husten', 'der Hustensaft', 'der Reizhusten'],
  note: 'Без артикля в «Ich habe Husten». Глагол — то же слово: «husten» (hustet, hustete, hat gehustet). «Der Hustensaft» — сироп от кашля.',
  why: {
    confidence: 'high',
    text: 'Состав: существительное der Husten и глагол husten имеют общую основу.\nПроисхождение: древневерхненемецкое huosto восходит к индоевропейской звукоподражательной основе *kʷās-, к которой относится и русское «кашель» (через германский сдвиг согласных k → h).\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Husten; Vasmer: кашель',
    evidence: 'Др.-в.-нем. huosto < и.-е. звукоподражательного *kʷās- (родственно рус. «кашель»).'
  },
  ru_link: null
},
{
  id: 'b1-health-infektion', pos: 'noun',
  de: 'Infektion', article: 'die', plural: 'die Infektionen',
  ru: 'инфекция, заражение',
  examples: [
    { de: 'Die Wunde hat sich entzündet, es ist eine [[Infektion]].', ru: 'Рана воспалилась, это инфекция.' },
    { de: 'Nach der [[Infektion]] mit der Schadsoftware mussten wir alle Rechner neu aufsetzen.', ru: 'После заражения вредоносным ПО нам пришлось переустановить все компьютеры.' }
  ],
  morph: 'Infektion',
  family: ['infizieren', 'sich infizieren', 'infiziert', 'der Infekt', 'die Entzündung'],
  note: 'И в медицине, и в IT: «Der Rechner ist infiziert». В быту «заразиться» — «sich anstecken (bei jdm.)». «Die Entzündung» — воспаление.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Infektionen).\nПроисхождение: из позднелатинского īnfectio («окрашивание, пропитывание», от īnficere «пропитывать, отравлять, заражать»). В медицине закрепилось для заражения, а в конце XX в. перешло и в компьютерную безопасность.\nПрозрачность: международный термин, совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. Infektion',
    evidence: 'Из позднелат. īnfectio («пропитывание, заражение», к īnficere).'
  },
  ru_link: { type: 'internationalism', text: 'инфекция: оба слова от латинского infectio. Значение то же, в том числе в IT.' }
},
{
  id: 'b1-health-virus', pos: 'noun',
  de: 'Virus', article: 'der', plural: 'die Viren',
  ru: 'вирус',
  examples: [
    { de: 'Gegen einen [[Virus]] helfen Antibiotika nicht.', ru: 'Против вируса антибиотики не помогают.' },
    { de: 'Das Antivirenprogramm hat einen [[Virus]] gefunden.', ru: 'Антивирус нашёл вирус.' }
  ],
  morph: 'Virus',
  family: ['die Viren', 'viral', 'das Antivirenprogramm', 'die Bakterie'],
  note: 'Возможны оба рода: в списке Goethe и в разговоре — «der Virus», в медицине и по Duden — «das Virus». Правильны оба. Мн. ч.: die Viren.',
  why: {
    confidence: 'high',
    text: 'Состав: латинское заимствование (мн. ч. die Viren).\nПроисхождение: латинское vīrus значило «слизь, сок, яд». В XIX в. слово приняли в биологию для обозначения возбудителей болезней, а в 1980-х перенесли в IT для саморазмножающегося вредоносного кода.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Virus',
    evidence: 'Из лат. vīrus («слизь, яд»); биологическое значение с XIX в., компьютерное — с 1980-х гг.'
  },
  ru_link: { type: 'internationalism', text: 'вирус: оба слова от латинского virus («яд»).' }
},
{
  id: 'b1-health-haut', pos: 'noun',
  de: 'Haut', article: 'die', plural: 'die Häute',
  ru: 'кожа',
  examples: [
    { de: 'Ich habe sehr empfindliche [[Haut]] und vertrage diese Creme nicht.', ru: 'У меня очень чувствительная кожа, и этот крем мне не подходит.' },
    { de: 'Tragen Sie die Salbe direkt auf die [[Haut]] auf.', ru: 'Наносите мазь прямо на кожу.' }
  ],
  morph: 'Haut',
  family: ['der Hautarzt', 'die Hautärztin', 'der Ausschlag', 'häuten', 'hautnah'],
  note: '«Der Hautarzt» — дерматолог. «Der Ausschlag» — сыпь. Идиома: «Ich fühle mich nicht wohl in meiner Haut» — мне не по себе. Мн. ч. «Häute» встречается редко.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводная основа (мн. ч. die Häute).\nПроисхождение: общегерманское слово (др.-в.-нем. hūt, родственно английскому hide «шкура»), восходит к индоевропейскому корню со значением «покрывать» (того же корня латинское cutis «кожа»).\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Haut',
    evidence: 'Др.-в.-нем. hūt < герм. *hūdiz «кожа, шкура» (родственно англ. hide и лат. cutis).'
  },
  ru_link: null
},
{
  id: 'b1-health-knochen', pos: 'noun',
  de: 'Knochen', article: 'der', plural: 'die Knochen',
  ru: 'кость',
  examples: [
    { de: 'Auf dem Röntgenbild sieht man, dass der [[Knochen]] gebrochen ist.', ru: 'На рентгене видно, что кость сломана.' },
    { de: 'Nach dem Sturz tun mir alle [[Knochen]] weh.', ru: 'После падения у меня болят все кости.' }
  ],
  morph: 'Knochen',
  family: ['der Knochenbruch', 'knochig', 'brechen', 'der Bruch'],
  note: '«Der Knochenbruch» — перелом. Мн. ч. не меняется: die Knochen. Разговорно: «Ich bin bis auf die Knochen nass» — промок до нитки.',
  ru_link: null
},
{
  id: 'b1-health-magen', pos: 'noun',
  de: 'Magen', article: 'der', plural: 'die Mägen',
  ru: 'желудок',
  examples: [
    { de: 'Ich habe seit dem Abendessen Probleme mit dem [[Magen]].', ru: 'После ужина у меня проблемы с желудком.' },
    { de: 'Nehmen Sie die Tabletten nicht auf leeren [[Magen]].', ru: 'Не принимайте таблетки на голодный желудок.' }
  ],
  morph: 'Magen',
  family: ['die Magenschmerzen', 'der Bauch', 'die Magen-Darm-Grippe', 'satt'],
  note: '«Der Magen» — орган; «der Bauch» — живот целиком. «Magenschmerzen» — боль в желудке; «Magen-Darm» — кишечная инфекция. Мн. ч.: Mägen (также Magen).',
  ru_link: null
},
{
  id: 'b1-health-herz', pos: 'noun',
  de: 'Herz', article: 'das', plural: 'die Herzen',
  ru: 'сердце',
  examples: [
    { de: 'Mein [[Herz]] schlägt in letzter Zeit manchmal sehr schnell.', ru: 'В последнее время у меня иногда очень быстро бьётся сердце.' },
    { de: 'Sie hat Probleme mit dem [[Herzen]] und darf keinen Sport machen.', ru: 'У неё проблемы с сердцем, и ей нельзя заниматься спортом.' }
  ],
  morph: 'Herz',
  family: ['herzlich', 'der Herzinfarkt', 'die Herzkrankheit', 'das Herzklopfen', 'barmherzig'],
  note: 'Неправильное склонение: das Herz, des Herzens, dem Herzen, das Herz (Akk.). «Der Herzinfarkt» — инфаркт. «Herzlich» — сердечный, тёплый («Herzliche Grüße»).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводная основа (неправильное склонение: des Herzens, dem Herzen).\nПроисхождение: древневерхненемецкое herza (родственно английскому heart) восходит к индоевропейскому корню *ḱḗr(d)- («сердце»), от которого происходят и русское «сердце», и латинское cor, cordis (ср. «кордиамин», «аккорд»).\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Herz; Vasmer: сердце',
    evidence: 'Др.-в.-нем. herza < герм. *hertōn- < и.-е. *ḱḗr(d)- (родственно рус. «сердце» и лат. cor).'
  },
  ru_link: { type: 'shared_ancient_root', text: '«сердце» и Herz восходят к одному индоевропейскому корню со значением «сердце» (сюда же латинское cor, cordis). Надёжно установленное родство.' }
},
{
  id: 'b1-health-koerper', pos: 'noun',
  de: 'Körper', article: 'der', plural: 'die Körper',
  ru: 'тело, организм',
  examples: [
    { de: 'Hör auf deinen [[Körper]] und mach mal eine Pause.', ru: 'Прислушайся к своему организму и сделай перерыв.' },
    { de: 'Nach zwei Wochen hat sich der [[Körper]] an das neue Medikament gewöhnt.', ru: 'Через две недели организм привык к новому лекарству.' }
  ],
  morph: 'Körper',
  family: ['körperlich', 'die Körperpflege', 'die Körpertemperatur', 'die Körperverletzung'],
  note: 'Прилагательное «körperlich» — физический («körperlich anstrengend»). Юридический термин: «die Körperverletzung» — телесные повреждения. Мн. ч. не меняется.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Körper).\nПроисхождение: заимствовано в XIII в. из латинского corpus («тело», в основе косвенных падежей corpor-; оттуда же «корпус», «корпорация»). Постепенно вытеснило исконно немецкое der Leib в нейтральной речи.\nПрозрачность: связь с латинским corpus («корпус») хорошо видна.',
    source: 'DWDS (Pfeifer), s.v. Körper',
    evidence: 'Ср.-в.-нем. korper (XIII в.) < лат. corpus (corpor- «тело»).'
  },
  ru_link: null
},
{
  id: 'b1-health-atem', pos: 'noun',
  de: 'Atem', article: 'der',
  ru: 'дыхание',
  examples: [
    { de: 'Nach der Treppe war ich völlig außer [[Atem]].', ru: 'После лестницы я совсем запыхался.' },
    { de: 'Halten Sie bitte kurz den [[Atem]] an.', ru: 'Задержите, пожалуйста, ненадолго дыхание.' }
  ],
  morph: 'Atem', root: 'atmen',
  family: ['atmen', 'die Atmung', 'die Atemnot', 'einatmen', 'ausatmen'],
  note: '«Außer Atem sein» — запыхаться. «Den Atem anhalten» — задержать дыхание. «Die Atemnot» — одышка (важный симптом, о нём стоит сказать врачу!).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводная основа (рядом глагол atmen «дышать»).\nПроисхождение: древневерхненемецкое ātum («дыхание, дух») восходит к индоевропейской основе *ētmén- (родственно санскритскому ātmán- «дыхание, душа»).\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Atem',
    evidence: 'Др.-в.-нем. ātum < герм. *ēþmaz < и.-е. *ētmén- (родственно санскр. ātmán-).'
  },
  ru_link: null
},
{
  id: 'b1-health-gesundheit', pos: 'noun',
  de: 'Gesundheit', article: 'die',
  ru: 'здоровье; «Будь здоров!» (когда чихают)',
  examples: [
    { sense: 'здоровье', de: 'Zu viel Stress ist schlecht für die [[Gesundheit]].', ru: 'Слишком много стресса вредно для здоровья.' },
    { sense: '«Будь здоров!»', de: 'Hatschi! – [[Gesundheit]]! – Danke.', ru: 'Апчхи! — Будь здоров! — Спасибо.' }
  ],
  morph: 'Gesund-heit', root: 'gesund',
  parts: [['gesund', 'здоровый'], ['-heit', 'прилагательное → существительное, всегда die']],
  transparency: 'transparent',
  family: ['gesund', 'ungesund', 'gesundheitlich', 'die Gesundheitskarte', 'das Gesundheitsamt'],
  meaningType: 'polysemous',
  meaningExplanation: 'Существительное Gesundheit означает «здоровье», но также используется как самостоятельная формула вежливости «Будь здоров!», когда кто-то чихнул.',
  meaningExamples: [{ de: 'Gesundheit ist am wichtigsten.', ru: 'Здоровье важнее всего.' }, { de: 'Hatschi! — Gesundheit!', ru: 'Апчхи! — Будь здоров!' }],
  note: 'Когда кто-то чихает — «Gesundheit!», в ответ «Danke!». «Aus gesundheitlichen Gründen» — по состоянию здоровья (вежливо и без подробностей — удобно для рабочих писем).',
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное gesund («здоровый») + суффикс -heit.\nПроисхождение: gesund (др.-в.-нем. gisunt, родственно английскому sound «здоровый, исправный») первоначально значило «сильный, невредимый».\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. gesund',
    evidence: 'gesund (< др.-в.-нем. gisunt «невредимый, сильный», родственно англ. sound) + -heit.'
  },
  ru_link: null
},
{
  id: 'b1-health-ernaehrung', pos: 'noun',
  de: 'Ernährung', article: 'die',
  ru: 'питание',
  examples: [
    { de: 'Eine gesunde [[Ernährung]] ist wichtiger als jede Diät.', ru: 'Здоровое питание важнее любой диеты.' },
    { de: 'Seit ich meine [[Ernährung]] umgestellt habe, schlafe ich besser.', ru: 'С тех пор как я изменил питание, я лучше сплю.' }
  ],
  morph: 'Er-nähr-ung', root: 'nähren',
  parts: [['er-', 'достижение результата'], ['nähr', 'основа nähren — кормить, питать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['ernähren', 'sich ernähren', 'nähren', 'nahrhaft', 'die Nahrung', 'die Nahrungsmittel'],
  note: '«Die Ernährung» — как человек обычно питается; «die Diät» — специальная диета или диета для похудения. Глагол: «sich gesund ernähren» — правильно питаться.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола ernähren (er- + nähren «питать») + -ung.\nПроисхождение: глагол nähren (др.-в.-нем. nerien) первоначально значило «спасать, сохранять живым» (каузатив к genesen «выжить, выздороветь»), откуда развилось значение «поддерживать жизнь пищей → кормить, питать».\nПрозрачность: прозрачная относительно современного nähren и die Nahrung («пища»).',
    source: 'DWDS (Pfeifer), s.v. nähren / ernähren',
    evidence: 'nähren < др.-в.-нем. nerien «спасать, сохранять живым» (каузатив к genesen) → «питать, кормить».'
  },
  ru_link: null
},
{
  id: 'b1-health-diaet', pos: 'noun',
  de: 'Diät', article: 'die', plural: 'die Diäten',
  ru: 'диета',
  examples: [
    { de: 'Ich mache gerade eine [[Diät]] und esse abends nichts mehr.', ru: 'Я сейчас на диете и по вечерам больше не ем.' },
    { de: 'Nach der Operation muss er eine strenge [[Diät]] einhalten.', ru: 'После операции ему нужно соблюдать строгую диету.' }
  ],
  morph: 'Diät',
  family: ['die Ernährung', 'abnehmen', 'das Gewicht', 'diätetisch'],
  note: '«Eine Diät machen» — сидеть на диете. Забавный факт: «die Diäten» (мн. ч.) — это ещё и зарплата депутатов.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Diäten).\nПроисхождение: «диета» заимствована через латынь из греческого díaita («образ жизни, режим питания»). А омоним die Diäten («суточные, вознаграждение депутатов») — исторически другое слово, от средневекового латинского diēta («подённая оплата», к diēs «день»).\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Diät / Diäten',
    evidence: 'Diät «режим питания» < греч. díaita; Diäten «суточные» — отдельный омоним от ср.-лат. diēta (< diēs «день»).'
  },
  ru_link: { type: 'internationalism', text: 'диета: оба слова от греческого díaita («образ жизни»).' }
},
{
  id: 'b1-health-gewicht', pos: 'noun',
  de: 'Gewicht', article: 'das', plural: 'die Gewichte',
  ru: 'вес',
  examples: [
    { sense: 'вес (масса тела)', de: 'Sie sollten ein bisschen [[Gewicht]] verlieren.', ru: 'Вам стоит немного похудеть.' },
    { sense: 'вес, значимость (перен.)', de: 'Sein Wort hat im Team großes [[Gewicht]].', ru: 'Его слово в команде имеет большой вес.' }
  ],
  morph: 'Ge-wicht', root: 'wiegen',
  parts: [['Ge-', 'именная приставка'], ['wicht', 'от wiegen / wägen — весить, взвешивать']],
  transparency: 'figurative',
  family: ['wiegen', 'wichtig', 'das Übergewicht', 'abnehmen', 'zunehmen'],
  meaningType: 'figurative',
  meaningExplanation: 'Помимо физического веса тела или предмета, слово das Gewicht часто употребляется образно — как «значимость, весомость» аргумента или слова.',
  meaningExamples: [{ de: 'das Gewicht kontrollieren', ru: 'контролировать вес (буквально)' }, { de: 'Seine Meinung hat großes Gewicht.', ru: 'Его мнение имеет большой вес (образно).' }],
  note: 'Средний род. «Das Übergewicht» — лишний вес. «Ich wiege 80 Kilo» (wiegen, wog, gewogen). «Wichtig» (важный) — из того же корня: то, что имеет вес.',
  why: {
    confidence: 'high',
    text: 'Состав: приставка Ge- + основа -wicht (к глаголу wiegen / wägen «взвешивать»).\nПроисхождение: средневерхненемецкое gewiht образовано от глагола wegen/wiegen («весить, взвешивать»). От той же основы происходит прилагательное wichtig — буквально «имеющий вес → важный».\nПрозрачность: переносная — чередование g/ch делает связь с wiegen менее заметной на глаз.',
    source: 'DWDS (Pfeifer), s.v. Gewicht / wichtig',
    evidence: 'Ср.-в.-нем. gewiht (от wiegen/wägen «весить»); от него же производно wichtig («весомый → важный»).'
  },
  ru_link: null
},
{
  id: 'b1-health-vitamin', pos: 'noun',
  de: 'Vitamin', article: 'das', plural: 'die Vitamine',
  ru: 'витамин',
  examples: [
    { de: 'Im Winter nehme ich zusätzlich [[Vitamin]] D.', ru: 'Зимой я дополнительно принимаю витамин D.' },
    { de: 'Obst und Gemüse haben viele [[Vitamine]].', ru: 'В фруктах и овощах много витаминов.' }
  ],
  morph: 'Vitamin',
  family: ['vitaminreich', 'die Ernährung', 'gesund'],
  note: 'Средний род: das Vitamin. Ударение на последний слог: Vita-MIN. Шутка: «Vitamin B» — связи, блат (B — Beziehungen): «Den Job hat er nur durch Vitamin B bekommen».',
  why: {
    confidence: 'high',
    text: 'Состав: научный термин (лат. vīta + Amin).\nПроисхождение: термин предложил в 1912 году биохимик Казимир Функ (англ. vitamine) из латинского vīta («жизнь») и химического названия Amin, поскольку первые открытые им вещества были аминами.\nПрозрачность: международный научный термин.',
    source: 'DWDS (Pfeifer), s.v. Vitamin',
    evidence: 'Образовано К. Функом в 1912 г. из лат. vīta («жизнь») + Amin.'
  },
  ru_link: { type: 'internationalism', text: 'витамин: один и тот же научный термин (латинское vita + амин).' }
},
{
  id: 'b1-health-stress', pos: 'noun',
  de: 'Stress', article: 'der',
  ru: 'стресс',
  examples: [
    { de: 'Vor dem Release haben wir immer viel [[Stress]].', ru: 'Перед релизом у нас всегда много стресса.' },
    { de: 'Mach dir keinen [[Stress]], das schaffen wir schon.', ru: 'Не нервничай, мы справимся.' }
  ],
  morph: 'Stress',
  family: ['stressig', 'gestresst', 'stressen', 'der Termindruck'],
  note: '«Stress haben», «gestresst sein», «Das ist stressig». «Mach dir keinen Stress!» — не переживай / не спеши. «Stress mit jdm. haben» — иметь с кем-то проблемы.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: заимствовано в середине XX в. из английского stress («давление, напряжение», популяризовано в медицине Гансом Селье). Само английское слово — сокращение от distress (из старофранцузского destrece < лат. distringere «стягивать, сжимать»).\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Stress; OED: stress',
    evidence: 'Заимствовано в XX в. из англ. stress (< distress < ст.-фр. destrece < лат. distringere).'
  },
  ru_link: { type: 'internationalism', text: 'стресс: оба слова заимствованы из английского stress.' }
},
{
  id: 'b1-health-sucht', pos: 'noun',
  de: 'Sucht', article: 'die', plural: 'die Süchte',
  ru: 'зависимость, пристрастие',
  examples: [
    { de: 'Rauchen ist eine [[Sucht]], die man nicht unterschätzen sollte.', ru: 'Курение — это зависимость, которую не стоит недооценивать.' },
    { de: 'Für viele Jugendliche ist das Handy fast eine [[Sucht]].', ru: 'Для многих подростков телефон — почти зависимость.' }
  ],
  morph: 'Sucht',
  family: ['süchtig', 'die Eifersucht', 'die Sehnsucht', 'das Suchtmittel', 'siech (устар.: больной)'],
  note: 'Не от «suchen» (искать), хотя похоже: слово родственно старому «siech» (больной). «Süchtig nach + Dat.» — зависимый от. Тот же элемент в «Eifersucht» (ревность) и «Sehnsucht» (тоска).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное существительное (мн. ч. die Süchte).\nПроисхождение: несмотря на внешнее сходство, Sucht НЕ происходит от suchen («искать»). Древневерхненемецкое suht значило «болезнь» и родственно устаревшему siech («больной», англ. sick). От «болезнь» развилось значение «болезненная тяга, зависимость» (ср. Eifersucht «ревность», Sehnsucht «тоска»).\nПрозрачность: непрозрачное — созвучие с suchen обманчиво.',
    source: 'DWDS (Pfeifer), s.v. Sucht',
    evidence: 'Др.-в.-нем. suht «болезнь», к siech («больной», англ. sick); к глаголу suchen этимологически не относится.'
  },
  ru_link: null
},
{
  id: 'b1-health-droge', pos: 'noun',
  de: 'Droge', article: 'die', plural: 'die Drogen',
  ru: 'наркотик',
  examples: [
    { de: 'Er hat früher [[Drogen]] genommen, aber jetzt ist er clean.', ru: 'Раньше он принимал наркотики, но сейчас завязал.' },
    { de: 'Alkohol ist auch eine [[Droge]].', ru: 'Алкоголь — это тоже наркотик.' }
  ],
  morph: 'Droge',
  family: ['drogenabhängig', 'die Drogerie', 'das Medikament', 'die Sucht'],
  note: 'Только наркотики! Лекарство — «ein Medikament». А «die Drogerie» (dm, Rossmann) продаёт косметику и бытовые товары — не наркотики и не рецептурные лекарства; за ними — в «die Apotheke».',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Drogen).\nПроисхождение: заимствовано в XVII в. из французского drogue, которое восходит к средненидерландскому droge (vate) — буквально «сухие (бочки / товары)», т. е. сушёные пряности и лекарственные травы. Во второй половине XX в. в немецком Droge сузилось до «наркотик», а die Drogerie сохранило старое торговое значение.\nПрозрачность: объясняет, почему Drogerie (dm, Rossmann) не имеет отношения к наркотикам.',
    source: 'DWDS (Pfeifer), s.v. Droge / Drogerie',
    evidence: 'Через фр. drogue < ср.-нидерл. droge (vate) «сухие товары, травы»; сужение до «наркотик» в XX в.'
  },
  ru_link: null
},
{
  id: 'b1-health-nichtraucher', pos: 'noun',
  de: 'Nichtraucher', article: 'der', plural: 'die Nichtraucher',
  ru: 'некурящий',
  examples: [
    { de: 'Ich bin seit drei Jahren [[Nichtraucher]].', ru: 'Я уже три года не курю.' },
    { de: 'Das ist ein [[Nichtraucher]]zimmer, rauchen dürfen Sie nur auf dem Balkon.', ru: 'Это номер для некурящих, курить можно только на балконе.' }
  ],
  morph: 'Nicht-rauch-er', root: 'rauchen',
  parts: [['Nicht-', 'не'], ['rauch', 'основа rauchen — курить'], ['-er', 'тот, кто делает']],
  transparency: 'transparent',
  family: ['rauchen', 'der Raucher', 'die Raucherin', 'die Nichtraucherin', 'der Rauch', 'das Rauchverbot'],
  note: 'После «sein» роль без артикля: «Ich bin Nichtraucher». Женский род: Nichtraucherin. «Mit dem Rauchen aufhören» — бросить курить.',
  why: {
    confidence: 'high',
    text: 'Состав: отрицание nicht + der Raucher (от rauchen «дымить, курить» + -er).\nПроисхождение: rauchen образовано от der Rauch («дым»); значение «курить табак» закрепилось в XVII в. (сначала говорили Tabak trinken — буквально «пить табак»!).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. rauchen / Rauch',
    evidence: 'rauchen (от Rauch «дым»); значение «курить табак» с XVII в.; Nichtraucher — сложение XIX–XX вв.'
  },
  ru_link: null
},
{
  id: 'b1-health-schwangerschaft', pos: 'noun',
  de: 'Schwangerschaft', article: 'die', plural: 'die Schwangerschaften',
  ru: 'беременность',
  examples: [
    { de: 'Während der [[Schwangerschaft]] darf sie dieses Medikament nicht nehmen.', ru: 'Во время беременности ей нельзя принимать это лекарство.' },
    { de: 'Die Kollegin hat uns von ihrer [[Schwangerschaft]] erzählt.', ru: 'Коллега рассказала нам о своей беременности.' }
  ],
  morph: 'Schwanger-schaft', root: 'schwanger',
  parts: [['schwanger', 'беременная'], ['-schaft', 'суффикс существительного, всегда die']],
  transparency: 'transparent',
  family: ['schwanger', 'die Geburt', 'der Mutterschutz', 'die Elternzeit'],
  note: 'На работе: «der Mutterschutz» — декретная защита (около 6 недель до и 8 недель после родов), «die Elternzeit» — отпуск по уходу за ребёнком (для обоих родителей).',
  ru_link: null
},
{
  id: 'b1-health-geburt', pos: 'noun',
  de: 'Geburt', article: 'die', plural: 'die Geburten',
  ru: 'рождение; роды',
  examples: [
    { sense: 'рождение', de: 'Herzlichen Glückwunsch zur [[Geburt]] eurer Tochter!', ru: 'Поздравляем с рождением дочки!' },
    { sense: 'роды', de: 'Die [[Geburt]] hat zwölf Stunden gedauert.', ru: 'Роды длились двенадцать часов.' }
  ],
  morph: 'Geburt', root: 'gebären',
  family: ['geboren', 'gebären', 'der Geburtstag', 'die Geburtsurkunde', 'der Geburtsort'],
  meaningType: 'polysemous',
  meaningExplanation: 'Слово die Geburt обозначает и факт появления на свет («рождение»), и сам медицинский процесс («роды»).',
  meaningExamples: [{ de: 'Herzlichen Glückwunsch zur Geburt!', ru: 'Поздравляем с рождением ребёнка!' }, { de: 'Die Geburt dauerte sechs Stunden.', ru: 'Роды длились шесть часов.' }],
  note: '«Ich bin 1990 geboren» (от «gebären» — рожать). Документы: «die Geburtsurkunde» — свидетельство о рождении, «der Geburtsort» — место рождения. На открытке: «Herzlichen Glückwunsch zur Geburt!»',
  why: {
    confidence: 'high',
    text: 'Состав: существительное die Geburt (рядом глагол gebären «рожать», причастие geboren).\nПроисхождение: древневерхненемецкое giburt образовано от глагола beran («носить, вынашивать», родственно английскому bear и birth). Тот же индоевропейский корень *bʰer- («нести») лежит в русских словах «брать» и «бремя» («беременная»).\nПрозрачность: связь с geboren хорошо видна.',
    source: 'DWDS (Pfeifer), s.v. Geburt / gebären; Vasmer: бремя',
    evidence: 'Др.-в.-нем. giburt к beran («нести, рожать») < и.-е. *bʰer- (родственно англ. birth и рус. «бремя»).'
  },
  ru_link: null
},
{
  id: 'b1-health-tod', pos: 'noun',
  de: 'Tod', article: 'der', plural: 'die Tode',
  ru: 'смерть',
  examples: [
    { de: 'Nach dem [[Tod]] ihres Mannes ist sie zu ihrer Tochter gezogen.', ru: 'После смерти мужа она переехала к дочери.' },
    { de: 'Rauchen kann zum [[Tod]] führen.', ru: 'Курение может привести к смерти.' }
  ],
  morph: 'Tod', root: 'tot',
  family: ['tot', 'tödlich', 'sterben', 'der/die Tote', 'todmüde'],
  note: 'Орфография: «der Tod» (существительное, с d), «tot» (прилагательное, с t): «Er ist tot». Соболезнования: «Mein herzliches Beileid». Разговорно: «todmüde» — смертельно устал.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное существительное der Tod (рядом прилагательное tot «мёртвый»).\nПроисхождение: общегерманское существительное (др.-в.-нем. tōd, родственно английскому death), образованное от того же корня, что и прилагательное tot (англ. dead). Разница в написании d/t закрепилась для различения частей речи.\nПрозрачность: базовый корень.',
    source: 'DWDS (Pfeifer), s.v. Tod / tot',
    evidence: 'Др.-в.-нем. tōd < герм. *dauþuz (родственно англ. death), при прилагательном tot (< *daudaz, англ. dead).'
  },
  ru_link: null
}
]});
