/* ROOT: bauen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, why. */
GT.registerRoot({
  id: 'bauen', verb: 'bauen', ru: 'строить',
  words: [
    {
      id: 'r-bauen-bauen', base: true, pos: 'verb',
      de: 'bauen', forms: { praes: 'baut', praet: 'baute', perf: 'hat gebaut' }, gov: '+ Akk.',
      ru: 'строить; собирать, создавать',
      examples: [
        { de: 'Meine Eltern haben in den Neunzigern ein Haus [[gebaut]].', ru: 'Мои родители построили дом в девяностые.' },
        { de: 'Das Team [[baut]] gerade eine neue Plattform für die Log-Auswertung.', ru: 'Команда сейчас создаёт новую платформу для анализа логов.' }
      ],
      morph: 'bau-en',
      note: 'Слабый глагол: baute, hat gebaut. Используется и про софт: «ein Tool / eine Pipeline bauen». Разговорно: «einen Unfall bauen» — попасть в аварию.',
      why: {
        confidence: 'high',
        root: 'bauen',
        text: 'Состав: корневой глагол bau- + -en.\nПроисхождение: древневерхненемецкое būan значило «жить, обитать» и «возделывать землю» (отсюда der Bauer «крестьянин» и der Ackerbau «земледелие»). Значение «строить» развилось из «обустраивать место для жизни». Индоевропейский корень (*bʰuH-) родственен русскому «быть».\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. bauen; Vasmer: быть',
        evidence: 'Др.-в.-нем. būan «обитать, возделывать землю» → «строить»; и.-е. *bʰuH- «быть, расти, становиться» (родственно рус. «быть»).'
      }
    },
    {
      id: 'r-bauen-aufbauen', prefix: 'auf', sep: 'trennbar', stress: 'áufbauen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'aufbauen', forms: { praes: 'baut auf', praet: 'baute auf', perf: 'hat aufgebaut' }, gov: '+ Akk.; auf + Dat.',
      ru: 'собирать (конструкцию), возводить; создавать с нуля; (auf etw.) основываться на',
      prefixDrill: { ex: 1, meaning: 0, explain: 'auf- здесь означает движение вверх, возведение конструкции («собрать шкаф»).' },
      examples: [
        { sense: 'создавать с нуля (организацию, систему)', de: 'Wir haben das SOC in zwei Jahren von null [[aufgebaut]].', ru: 'Мы с нуля создали SOC за два года.' },
        { sense: 'собирать конструкцию, мебель', de: 'Kannst du mir helfen, den Schrank [[aufzubauen]]?', ru: 'Поможешь мне собрать шкаф?' },
        { sense: 'основываться на (auf + Dat.)', de: 'Der B2-Kurs [[baut]] direkt auf dem B1-Wortschatz [[auf]].', ru: 'Курс B2 напрямую основывается на лексике B1.' }
      ],
      morph: 'auf-bau-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Глагол aufbauen имеет три самостоятельных значения: собирать физическую конструкцию, выстраивать систему/команду с нуля и основываться на чём-то (auf + Dat.).',
      meaningExamples: [{ de: 'einen Schrank aufbauen', ru: 'собрать шкаф' }, { de: 'ein SOC-Team aufbauen', ru: 'выстроить команду SOC' }, { de: 'Der Kurs baut auf A2 auf.', ru: 'Курс опирается на A2.' }],
      note: '«Der Kurs baut auf B1 auf» — курс основывается на B1. «Die Firma / ein Netzwerk / Vertrauen aufbauen» — построить фирму / сеть / доверие. Существительное: der Aufbau.'
    },
    {
      id: 'r-bauen-abbauen', prefix: 'ab', sep: 'trennbar', stress: 'ábbauen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'abbauen', forms: { praes: 'baut ab', praet: 'baute ab', perf: 'hat abgebaut' }, gov: '+ Akk.',
      ru: 'разбирать (конструкцию); сокращать (рабочие места, переработки); снимать (стресс)',
      parallel: 'РАЗбирать / СОкращать',
      drill: { ru: 'сокращать рабочие места', de: 'Stellen ___bauen' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'ab- здесь означает «уменьшение, сокращение» — сокращать рабочие места (ср. рус. со-кращать).' },
      examples: [
        { sense: 'сокращать (рабочие места)', de: 'Die Firma will 200 Stellen [[abbauen]].', ru: 'Фирма хочет сократить 200 рабочих мест.' },
        { sense: 'разбирать (конструкцию, сцену)', de: 'Nach dem Konzert wird die Bühne sofort [[abgebaut]].', ru: 'После концерта сцену сразу разбирают.' },
        { sense: 'снимать стресс / отгуливать переработки', de: 'Nach der Schicht gehe ich joggen, um Stress [[abzubauen]].', ru: 'После смены я иду бегать, чтобы снять стресс.' }
      ],
      morph: 'ab-bau-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abbauen используется и буквально (разбирать конструкцию), и как устоявшийся термин для сокращения рабочих мест, отгуливания переработок и снятия стресса.',
      meaningExamples: [{ de: 'ein Zelt abbauen', ru: 'разобрать палатку' }, { de: 'Stellen / Überstunden abbauen', ru: 'сокращать места / отгуливать переработки' }, { de: 'Stress abbauen', ru: 'снимать стресс' }],
      note: 'Очень частое слово: «Stellen abbauen», «Überstunden abbauen» (отгулять переработки), «Stress abbauen» (снять стресс), «Vorurteile abbauen» (избавиться от предрассудков). Существительное: der Abbau, «der Stellenabbau».'
    },
    {
      id: 'r-bauen-anbauen', prefix: 'an', sep: 'trennbar', stress: 'ánbauen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'anbauen', forms: { praes: 'baut an', praet: 'baute an', perf: 'hat angebaut' }, gov: '+ Akk.',
      ru: 'пристраивать; выращивать (растения)',
      parallel: 'ПРИстраивать',
      prefixDrill: { ex: 0, meaning: 1, explain: 'an- здесь означает «контакт, прикрепление» — пристроить гараж вплотную к дому (рус. при-страивать).' },
      examples: [
        { sense: 'пристраивать к зданию', de: 'Wir wollen eine Garage ans Haus [[anbauen]].', ru: 'Мы хотим пристроить к дому гараж.' },
        { sense: 'выращивать (растения, культуры)', de: 'In dieser Region wird viel Wein [[angebaut]].', ru: 'В этом регионе выращивают много винограда.' }
      ],
      morph: 'an-bau-en',
      meaningType: 'polysemous',
      meaningExplanation: 'anbauen значит и «пристраивать к зданию», и «выращивать сельскохозяйственные культуры» — оба значения обычные словарные.',
      meaningExamples: [{ de: 'eine Garage anbauen', ru: 'пристроить гараж' }, { de: 'Gemüse im Garten anbauen', ru: 'выращивать овощи в саду' }],
      note: 'Второе значение — от старого «bauen = возделывать землю» (см. WHY? у bauen). «Der Anbau» — пристройка или выращивание.'
    },
    {
      id: 'r-bauen-ausbauen', prefix: 'aus', sep: 'trennbar', stress: 'áusbauen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ausbauen', forms: { praes: 'baut aus', praet: 'baute aus', perf: 'hat ausgebaut' }, gov: '+ Akk.',
      ru: 'расширять, развивать; вынимать, демонтировать (деталь)',
      prefixDrill: [
        { ex: 0, meaning: 3, explain: 'aus- здесь означает «расширение, развитие» — расширять оптоволоконную сеть.' },
        { ex: 1, meaning: 0, explain: 'aus- здесь означает «наружу, извлечение» — вынуть старый жёсткий диск.' }
      ],
      examples: [
        { sense: 'расширять, развивать (сеть, инфраструктуру)', de: 'Die Stadt will das Glasfasernetz weiter [[ausbauen]].', ru: 'Город хочет и дальше расширять оптоволоконную сеть.' },
        { sense: 'вынимать, демонтировать (деталь)', de: 'Der Techniker hat die alte Festplatte [[ausgebaut]].', ru: 'Техник вынул старый жёсткий диск.' }
      ],
      morph: 'aus-bau-en',
      meaningType: 'polysemous',
      meaningExplanation: 'У ausbauen два почти противоположных словарных значения: «расширять, развивать» (сеть, инфраструктуру) и «демонтировать, вынимать деталь».',
      meaningExamples: [{ de: 'das Glasfasernetz ausbauen', ru: 'расширять оптоволоконную сеть' }, { de: 'die Festplatte ausbauen', ru: 'вынуть жёсткий диск' }],
      note: 'Два значения, которые кажутся противоположными: «достраивать, расширять» (das Netz, die Zusammenarbeit ausbauen) и «вынимать» (aus = из: ein Teil ausbauen). Существительное: der Ausbau.'
    },
    {
      id: 'r-bauen-umbauen', prefix: 'um', sep: 'trennbar', stress: 'úmbauen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'umbauen', forms: { praes: 'baut um', praet: 'baute um', perf: 'hat umgebaut' }, gov: '+ Akk.',
      ru: 'перестраивать, переделывать',
      parallel: 'ПЕРЕстраивать',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ударная отделяемая um- означает «переделка, перестройка» (рус. пере-страивать).' },
      examples: [
        { de: 'Wir [[bauen]] das Büro gerade [[um]], deshalb arbeiten alle im Homeoffice.', ru: 'Мы сейчас перестраиваем офис, поэтому все работают из дома.' },
        { de: 'Die Architektur muss komplett [[umgebaut]] werden.', ru: 'Архитектуру нужно полностью переделать.' }
      ],
      morph: 'um-bau-en',
      note: 'С ударением на um- — отделяемый (úmbauen). Есть и неотделяемый umbáuen — «обстраивать, окружать постройками» (см. пары ниже). Существительное: der Umbau — перестройка, ремонт.'
    },
    {
      id: 'r-bauen-einbauen', prefix: 'ein', sep: 'trennbar', stress: 'éinbauen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'einbauen', forms: { praes: 'baut ein', praet: 'baute ein', perf: 'hat eingebaut' }, gov: '+ Akk.; in + Akk.',
      ru: 'встраивать, устанавливать (внутрь)',
      parallel: 'ВСТраивать',
      prefixDrill: { ex: 0, meaning: 1, explain: 'ein- здесь означает «встраивание, установка» — встроить проверку в процесс.' },
      examples: [
        { de: 'Wir haben eine zusätzliche Prüfung in den Prozess [[eingebaut]].', ru: 'Мы встроили в процесс дополнительную проверку.' },
        { de: 'Nächste Woche wird die neue Küche [[eingebaut]].', ru: 'На следующей неделе установят новую кухню.' }
      ],
      morph: 'ein-bau-en',
      note: '«Die Einbauküche» — встроенная кухня (в объявлениях об аренде часто «EBK»). «Eingebaut» — встроенный: «eine eingebaute Kamera».'
    },
    {
      id: 'r-bauen-verbauen', prefix: 'ver', sep: 'untrennbar', stress: 'verbáuen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'verbauen', forms: { praes: 'verbaut', praet: 'verbaute', perf: 'hat verbaut' }, gov: '+ Akk.',
      ru: 'загородить постройкой; (перен.) закрыть себе путь; (техн.) установить в устройство',
      parallel: 'ЗАстраивать (вид)',
      prefixDrill: { ex: 0, meaning: 3, explain: 'ver- здесь означает «закрытие, загораживание» — высотка застраивает и закрывает вид.' },
      examples: [
        { sense: 'загородить постройкой (вид)', de: 'Das neue Hochhaus [[verbaut]] uns die ganze Aussicht.', ru: 'Новая высотка закрывает нам весь вид.' },
        { sense: 'закрыть себе путь, испортить шанс (перен.)', de: 'Mit dieser Entscheidung hat er sich die Zukunft [[verbaut]].', ru: 'Этим решением он закрыл себе путь в будущее.' },
        { sense: 'установить внутрь (техн.)', de: 'In diesem Server sind zwei schnelle SSDs [[verbaut]].', ru: 'В этом сервере установлены два быстрых SSD.' }
      ],
      morph: 'ver-bau-en',
      meaningType: 'figurative',
      meaningExplanation: 'Помимо буквального «загородить вид постройкой», verbauen ярко используется образно: «перекрыть себе путь, испортить шанс».',
      meaningExamples: [{ de: 'Die Neubauten verbauen die Sicht.', ru: 'Новостройки загораживают вид (буквально).' }, { de: 'sich die Zukunft verbauen', ru: 'перекрыть себе будущее (образно)' }],
      note: 'Неотделяемый: verbaut (без ge-). Переносное значение прозрачно: «застроить» → «загородить дорогу» → «лишить шанса». В технике «verbaut» — «установлен».'
    },
    {
      id: 'r-bauen-bebauen', prefix: 'be', sep: 'untrennbar', stress: 'bebáuen', pos: 'verb',
      transparency: 'transparent',
      de: 'bebauen', forms: { praes: 'bebaut', praet: 'bebaute', perf: 'hat bebaut' }, gov: '+ Akk.',
      ru: 'застраивать (участок); обрабатывать (землю)',
      parallel: 'ЗАстраивать',
      prefixDrill: { ex: 0, meaning: 1, explain: 'be- здесь обозначает охват участка/поверхности целиком — «застраивать участок».' },
      examples: [
        { sense: 'застраивать участок', de: 'Das Grundstück darf nicht [[bebaut]] werden.', ru: 'Этот участок нельзя застраивать.' },
        { sense: 'обрабатывать землю', de: 'Die Felder werden seit Jahrhunderten [[bebaut]].', ru: 'Эти поля обрабатывают уже много веков.' }
      ],
      morph: 'be-bau-en',
      meaningType: 'polysemous',
      meaningExplanation: 'bebauen применяется к земле в двух значениях: «застраивать участок домами» и «возделывать, обрабатывать поле».',
      meaningExamples: [{ de: 'ein Grundstück bebauen', ru: 'застроить участок' }, { de: 'ein Feld bebauen', ru: 'обрабатывать поле' }],
      note: 'Приставка be- делает глагол переходным: объект — сам участок (das Grundstück bebauen). «Bebaut» — застроенный.'
    },
    {
      id: 'r-bauen-nachbauen', prefix: 'nach', sep: 'trennbar', stress: 'náchbauen', pos: 'verb',
      transparency: 'transparent',
      de: 'nachbauen', forms: { praes: 'baut nach', praet: 'baute nach', perf: 'hat nachgebaut' }, gov: '+ Akk.',
      ru: 'строить копию, воспроизводить (по образцу)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'nach- здесь означает «по образцу, копирование» — точно воспроизвести страницу входа.' },
      examples: [
        { de: 'Die Angreifer haben die Login-Seite der Bank genau [[nachgebaut]].', ru: 'Злоумышленники точно скопировали страницу входа банка.' },
        { de: 'Das Modell haben wir nach alten Fotos [[nachgebaut]].', ru: 'Модель мы воссоздали по старым фотографиям.' }
      ],
      morph: 'nach-bau-en',
      note: '«Nach-» = по образцу, вслед: nachmachen (подражать), nachbauen (копировать конструкцию). В фишинге: «eine nachgebaute Webseite» — поддельный сайт.'
    },
    {
      id: 'r-bauen-bau', pos: 'noun',
      de: 'Bau', article: 'der', plural: 'die Bauten',
      ru: 'строительство; здание, постройка',
      examples: [
        { de: 'Der [[Bau]] der neuen Brücke dauert drei Jahre.', ru: 'Строительство нового моста займёт три года.' },
        { de: 'Das Rechenzentrum ist noch im [[Bau]].', ru: 'Дата-центр ещё строится.' }
      ],
      morph: 'Bau',
      note: '«Im Bau sein» — строиться. «Die Baustelle» — стройка (и разговорно — «недоделанная задача»). Мн. ч. «Bauten» — здания (die Baue — норы животных).'
    },
    {
      id: 'r-bauen-gebaeude', pos: 'noun', transparency: 'transparent',
      de: 'Gebäude', article: 'das', plural: 'die Gebäude',
      ru: 'здание',
      examples: [
        { de: 'In welchem [[Gebäude]] ist das Rechenzentrum?', ru: 'В каком здании находится дата-центр?' },
        { de: 'Das [[Gebäude]] wird am Wochenende evakuiert, weil es eine Übung gibt.', ru: 'На выходных здание эвакуируют, потому что будут учения.' }
      ],
      morph: 'Ge-bäud-e',
      parts: [['Ge-', 'собирательная приставка (как в Gebirge, Gepäck)'], ['bäud', 'основа от bauen (с умлаутом)'], ['-e', 'окончание существительного (циркумфикс Ge-…-e)']],
      note: 'Средний род, мн. ч. не меняется. Модель «Ge- … -e» образует собирательные существительные среднего рода: das Gebirge, das Gemüse.'
    },
    {
      id: 'r-bauen-aufbau', pos: 'noun', transparency: 'figurative',
      de: 'Aufbau', article: 'der',
      ru: 'структура, устройство; создание, сборка',
      examples: [
        { sense: 'структура, устройство', de: 'Der [[Aufbau]] unseres Netzwerks ist ziemlich kompliziert.', ru: 'Структура нашей сети довольно сложная.' },
        { sense: 'сборка, монтаж', de: 'Der [[Aufbau]] des Messestands hat zwei Tage gedauert.', ru: 'Сборка выставочного стенда заняла два дня.' }
      ],
      morph: 'Auf-bau',
      meaningType: 'polysemous',
      meaningExplanation: 'der Aufbau обозначает как процесс сборки/создания, так и саму структуру, устройство (текста, отдела, сети).',
      meaningExamples: [{ de: 'der Aufbau eines Berichts', ru: 'структура отчёта' }, { de: 'der Aufbau der neuen Server', ru: 'сборка и развёртывание новых серверов' }],
      note: 'Про текст, программу, организацию: «der Aufbau eines Textes» — структура текста. Мн. ч. (Aufbauten) почти не нужен.'
    },
    {
      id: 'r-bauen-ausbau', pos: 'noun', transparency: 'figurative',
      de: 'Ausbau', article: 'der',
      ru: 'расширение, развитие (инфраструктуры)',
      examples: [
        { de: 'Der [[Ausbau]] der Infrastruktur kostet Millionen.', ru: 'Развитие инфраструктуры стоит миллионы.' },
        { de: 'Der schnelle [[Ausbau]] der Windenergie ist politisch umstritten.', ru: 'Быстрое развитие ветроэнергетики вызывает политические споры.' }
      ],
      morph: 'Aus-bau',
      note: 'Типичное слово новостей: «der Ausbau von Radwegen / Kitas / Glasfaser».'
    },
    {
      id: 'r-bauen-bauer', pos: 'noun', transparency: 'opaque',
      de: 'Bauer', article: 'der', plural: 'die Bauern',
      ru: 'крестьянин, фермер; пешка (в шахматах)',
      examples: [
        { de: 'Die Eier kaufen wir direkt beim [[Bauern]].', ru: 'Яйца мы покупаем прямо у фермера.' },
        { de: 'Der [[Bauer]] verkauft im Sommer Erdbeeren am Straßenrand.', ru: 'Летом фермер продаёт клубнику у дороги.' }
      ],
      morph: 'Bau-er',
      meaningType: 'polysemous',
      meaningExplanation: 'der Bauer — это и фермер/крестьянин, и шахматная пешка (оба значения закреплены в словаре).',
      meaningExamples: [{ de: 'Gemüse direkt beim Bauern kaufen', ru: 'покупать овощи прямо у фермера' }, { de: 'einen Bauern im Schach opfern', ru: 'пожертвовать пешку в шахматах' }],
      note: 'n-склонение: den / dem / des Bauern. Сегодня чаще говорят «der Landwirt». «Der Bauernhof» — ферма.',
      why: {
        confidence: 'high',
        root: 'bauen',
        text: 'Состав: основа Bau- + -er.\nПроисхождение: древневерхненемецкое gibūro значило «сожитель, сосед по двору / земледелец» — от старого значения bauen («обитать, возделывать землю»). Позже слово закрепилось за крестьянином.\nПрозрачность: непрозрачное — современное bauen («строить») не объясняет значение «фермер», хотя исторически это один корень.',
        source: 'DWDS (Pfeifer), s.v. Bauer',
        evidence: 'Др.-в.-нем. gibūro «сосед, земледелец» к būan («жить, возделывать землю»); родственно bauen.'
      }
    }
  ],
  pairs: [
    {
      a: { stress: 'úmbauen', sep: 'trennbar', ru: 'перестраивать, переделывать', ex: { de: 'Das alte Lager wurde zu Büros [[umgebaut]].', ru: 'Старый склад перестроили под офисы.' } },
      b: { stress: 'umbáuen', sep: 'untrennbar', ru: 'обстраивать, окружать постройками', ex: { de: 'Der Platz ist von Hochhäusern [[umbaut]].', ru: 'Площадь окружена высотками.' } }
    }
  ]
});
