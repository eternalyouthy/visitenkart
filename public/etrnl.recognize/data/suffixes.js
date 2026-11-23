/* German word-formation suffixes (Roots → Suffixes). All learning content in Russian. */

GT.registerSuffix({
  id: 'ung', label: '-ung', gender: 'die', posChange: 'глагол → существительное (всегда die)',
  ru: 'действие, процесс или его результат',
  pattern: 'основа глагола + -ung (множественное число: -ungen)',
  spelling: 'Конечное -en / -n инфинитива отбрасывается: untersuchen → die Untersuchung; entwickeln → die Entwicklung (беглое e часто выпадает).',
  exceptions: 'Не любой глагол образует форму на -ung: lesen → das Lesen (а не «Lesung» в смысле чтения текста; die Lesung — авторские чтения).',
  limitations: 'Обычно образуется от переходных и префиксальных глаголов; для многих простых глаголов используется субстантивированный инфинитив (das Schwimmen).',
  productivity: 'Очень продуктивный суффикс — один из главных сигналов женского рода (die) в немецком.',
  examples: [
    { de: 'die Untersuchung', ru: 'обследование; расследование (от untersuchen)' },
    { de: 'die Verschlüsselung', ru: 'шифрование (от verschlüsseln)' },
    { de: 'die Besprechung', ru: 'совещание (от besprechen)' },
    { de: 'die Einstellung', ru: 'настройка; отношение; приём на работу (от einstellen)' }
  ],
  exercise: {
    question: 'Какой артикль и значение даёт суффикс -ung в слове «die Erkennung»?',
    answer: 'всегда die · процесс или результат действия',
    options: ['всегда die · процесс или результат действия', 'всегда der · исполнитель действия', 'всегда das · уменьшительное значение', 'прилагательное · «без чего-либо»'],
    explain: 'Все существительные на -ung женского рода (die) и обозначают процесс или результат глагольного действия (erkennen → die Erkennung).'
  }
});

GT.registerSuffix({
  id: 'heit', label: '-heit / -keit', gender: 'die', posChange: 'прилагательное → существительное (всегда die)',
  ru: 'свойство, качество, состояние',
  pattern: 'прилагательное + -heit / -keit / -igkeit (мн. ч.: -heiten / -keiten)',
  spelling: '-keit ставится после -ig, -lich, -bar, -sam, -er (möglich → die Möglichkeit, verfügbar → die Verfügbarkeit); -heit — после простых основ и -en (sicher → die Sicherheit, gesund → die Gesundheit). После -los/-haft часто -igkeit (müde → die Müdigkeit).',
  exceptions: 'Выбор между -heit, -keit и -igkeit зависит от окончания основы прилагательного, но часть слов нужно проверять (schnell → die Schnelligkeit).',
  limitations: 'Образует абстрактные существительные; многие из них в обычной речи употребляются только в единственном числе (die Gesundheit).',
  productivity: 'Очень продуктивный способ сделать из прилагательного существительное (всегда die).',
  examples: [
    { de: 'die Sicherheit', ru: 'безопасность (от sicher)' },
    { de: 'die Gesundheit', ru: 'здоровье (от gesund)' },
    { de: 'die Verfügbarkeit', ru: 'доступность системы (от verfügbar)' },
    { de: 'die Möglichkeit', ru: 'возможность (от möglich)' }
  ],
  exercise: {
    question: 'Почему от «verfügbar» образуется «die Verfügbarkeit», а от «sicher» — «die Sicherheit»?',
    answer: 'после -bar/-lich/-ig ставится -keit, а после простой основы — -heit',
    options: ['после -bar/-lich/-ig ставится -keit, а после простой основы — -heit', '-keit меняет род на der, а -heit — на die', '-keit ставится только в IT-терминах', 'это свободные взаимозаменяемые варианты'],
    explain: 'Оба варианта дают женский род (die), но распределены фонетически/морфологически: после суффиксов -bar, -ig, -lich, -sam идёт -keit, а после простых основ — -heit.'
  }
});

GT.registerSuffix({
  id: 'schaft', label: '-schaft', gender: 'die', posChange: 'существительное / прилагательное → существительное (всегда die)',
  ru: 'совокупность людей, состояние, статус или область деятельности',
  pattern: 'основа + -schaft (мн. ч.: -schaften)',
  spelling: 'Присоединяется к основе без изменений, иногда с соединительным -s- или -en- (der Freund → die Freundschaft; bereit → die Bereitschaft).',
  exceptions: 'Отдельные слова имеют узкое словарное значение: die Wirtschaft («экономика; трактир»), die Botschaft («посольство; послание»).',
  limitations: 'Нельзя свободно прибавить -schaft к любому слову для обозначения коллектива — проверяйте устоявшуюся форму.',
  productivity: 'Умеренно продуктивен; всегда гарантирует женский род (die).',
  examples: [
    { de: 'die Bereitschaft', ru: 'готовность; дежурство on-call (от bereit)' },
    { de: 'die Schwangerschaft', ru: 'беременность (от schwanger)' },
    { de: 'die Mannschaft', ru: 'команда, экипаж (от Mann)' },
    { de: 'die Wissenschaft', ru: 'наука (от wissen)' }
  ],
  exercise: {
    question: 'Какого рода все немецкие существительные на -schaft (die Bereitschaft, die Freundschaft)?',
    answer: 'всегда женского рода (die)',
    options: ['всегда женского рода (die)', 'всегда среднего рода (das)', 'мужского рода (der)', 'зависит от исходного слова'],
    explain: 'Суффикс -schaft на 100 % задаёт женский род (die), независимо от рода исходного слова (der Freund → die Freundschaft).'
  }
});

GT.registerSuffix({
  id: 'er', label: '-er / -in', gender: 'der / die', posChange: 'глагол / существительное → лицо или прибор (der / die)',
  ru: 'исполнитель действия, профессия, житель; техническое устройство',
  pattern: 'основа глагола + -er (der, мн. ч. без изменения) / + -erin (die, мн. ч. -erinnen)',
  spelling: 'Часто появляется умлаут (fahren → der Fahrer, но backen → der Bäcker, schlafen → der Schläfer). Для женского рода добавляется -in: der Angreifer → die Angreiferin.',
  exceptions: 'Не путайте с окончанием сравнительной степени прилагательных (schneller) и окончанием множественного числа (die Kinder).',
  limitations: 'Не каждая профессия образуется на -er (ср. der Arzt, der Spezialist, der Analyst).',
  productivity: 'Очень продуктивен как для профессий, так и для приборов/программ (der Scanner, der Drucker, der Router).',
  examples: [
    { de: 'der Angreifer', ru: 'атакующий, злоумышленник (от angreifen)' },
    { de: 'der Arbeitgeber', ru: 'работодатель (от Arbeit + geben)' },
    { de: 'der Quereinsteiger', ru: 'специалист из другой сферы (от quer + einsteigen)' },
    { de: 'der Drucker', ru: 'принтер (от drucken — печатать)' }
  ],
  exercise: {
    question: 'Как образуется множественное число у существительных деятеля на -er (der Angreifer, der Mitarbeiter)?',
    answer: 'форма не меняется: die Angreifer, die Mitarbeiter',
    options: ['форма не меняется: die Angreifer, die Mitarbeiter', 'добавляется -s: die Angreifers', 'добавляется -en: die Angreiferen', 'всегда добавляется -e: die Angreifere'],
    explain: 'Мужские существительные деятеля на -er во множественном числе сохраняют ту же форму (артикль меняется на die); женские на -in получают -innen (die Angreiferinnen).'
  }
});

GT.registerSuffix({
  id: 'chen', label: '-chen / -lein', gender: 'das', posChange: 'существительное → уменьшительное существительное (всегда das)',
  ru: 'уменьшительно-ласкательное значение (маленький предмет, порция, оттенок мягкости)',
  pattern: 'основа (часто с умлаутом a/o/u → ä/ö/ü) + -chen / -lein (мн. ч. не меняется)',
  spelling: 'Конечное -e (иногда -en) отпадает: die Flasche → das Fläschchen; das Brot → das Brötchen. Вариант -lein чаще встречается после ch/g или на юге Германии (das Büchlein).',
  exceptions: 'У некоторых слов исходное «маленькое» значение стёрлось: das Mädchen («девочка»), das Brötchen («булочка»), das Märchen («сказка»).',
  limitations: 'В деловой переписке и отчётах уменьшительные формы обычно неуместны (кроме устоявшихся слов вроде das Brötchen).',
  productivity: 'Очень продуктивен в живой речи; всегда меняет род на средний (das)!',
  examples: [
    { de: 'das Brötchen', ru: 'булочка (от das Brot)' },
    { de: 'das Mädchen', ru: 'девочка, девушка (всегда das!)' },
    { de: 'das Stündchen', ru: 'часок (от die Stunde)' },
    { de: 'das Päckchen', ru: 'небольшая посылка (от das Paket / Pack)' }
  ],
  exercise: {
    question: 'Почему слово «das Mädchen» среднего рода, хотя обозначает девочку?',
    answer: 'из-за уменьшительного суффикса -chen (все слова на -chen — среднего рода das)',
    options: ['из-за уменьшительного суффикса -chen (все слова на -chen — среднего рода das)', 'это историческое исключение без правила', 'в немецком все слова для детей среднего рода', 'из-за начальной буквы M'],
    explain: 'Грамматический род в немецком определяется суффиксом: любые слова на -chen и -lein всегда имеют артикль das.'
  }
});

GT.registerSuffix({
  id: 'nis', label: '-nis', gender: 'das (чаще) / die', posChange: 'глагол / прилагательное → существительное (das или die)',
  ru: 'результат, факт, состояние или событие',
  pattern: 'основа + -nis (мн. ч.: -nisse — двойное s!)',
  spelling: 'В единственном числе одна s (-nis), во множественном удваивается (-nisse): das Ergebnis → die Ergebnisse.',
  exceptions: 'Около двух третей слов среднего рода (das Ergebnis, das Zeugnis, das Verständnis), но часть — женского (die Kenntnis, die Erkenntnis, die Erlaubnis). Род лучше учить со словом.',
  limitations: 'Ограниченно продуктивный суффикс — новые слова почти не создаются, важно знать частотные B1–B2 существительные.',
  productivity: 'Закреплённые словарные образования (высокая частотность в работе и экзаменах).',
  examples: [
    { de: 'das Ergebnis', ru: 'результат (от ergeben)' },
    { de: 'die Erkenntnis', ru: 'вывод, осознание (от erkennen)' },
    { de: 'das Verständnis', ru: 'понимание (от verstehen)' },
    { de: 'das Arbeitszeugnis', ru: 'характеристика с работы (от zeugen)' }
  ],
  exercise: {
    question: 'Как правильно пишется множественное число слова «das Ergebnis»?',
    answer: 'die Ergebnisse (с двойным ss)',
    options: ['die Ergebnisse (с двойным ss)', 'die Ergebnise (с одной s)', 'die Ergebnissen', 'форма не меняется: die Ergebnis'],
    explain: 'У всех существительных на -nis во множественном числе s удваивается: -nis → -nisse (die Ergebnisse, die Kenntnisse).'
  }
});

GT.registerSuffix({
  id: 'ion', label: '-ion / -tion', gender: 'die', posChange: 'заимствованные существительные (всегда die)',
  ru: 'процесс, действие, организация, результат (международные термины)',
  pattern: 'латинская/международная основа + -ion / -tion (мн. ч.: -ionen)',
  spelling: 'Ударение ВСЕГДА падает на последний слог (-IÓN): die InfekTIÓN, die KonfiguraTIÓN. Сочетание -tion читается как [цйон].',
  exceptions: 'Исключений по роду практически нет — в B1–B2 все существительные на -ion/-tion женского рода (die).',
  limitations: 'Относится к интернациональной и технической лексике; в живой речи часто есть немецкий синоним (die Information / die Auskunft).',
  productivity: 'Продуктивен в технической, деловой и IT-лексике.',
  examples: [
    { de: 'die Infektion', ru: 'инфекция' },
    { de: 'die Operation', ru: 'операция' },
    { de: 'die Konfiguration', ru: 'конфигурация, настройка' },
    { de: 'die Funktion', ru: 'функция' }
  ],
  exercise: {
    question: 'Куда падает ударение и какой артикль у слов на -tion (die Konfiguration, die Operation)?',
    answer: 'ударение на -ión, артикль всегда die',
    options: ['ударение на -ión, артикль всегда die', 'ударение на первый слог, артикль der', 'ударение на корень, артикль das', 'артикль зависит от значения'],
    explain: 'Заимствованные слова на -ion/-tion всегда женского рода (die) с ударением на последний слог (-ión).'
  }
});

GT.registerSuffix({
  id: 'taet', label: '-tät', gender: 'die', posChange: 'прилагательное / международная основа → существительное (всегда die)',
  ru: 'абстрактное качество, свойство, категория (соответствует русскому «-ность / -тет»)',
  pattern: 'международная основа + -tät (мн. ч.: -täten)',
  spelling: 'Ударение всегда на последний слог (-TÄT): die IdentiTÄT, die PrioriTÄT, die KapaziTÄT.',
  exceptions: 'Все существительные на -tät женского рода (die), исключений нет.',
  limitations: 'Используется только с заимствованными латинско-романскими основами (не с исконно немецкими корнями).',
  productivity: 'Высокая частотность в деловой, академической и IT-среде.',
  examples: [
    { de: 'die Identität', ru: 'личность; идентичность (IAM)' },
    { de: 'die Priorität', ru: 'приоритет' },
    { de: 'die Kapazität', ru: 'мощность; загрузка, пропускная способность' },
    { de: 'die Qualität', ru: 'качество' }
  ],
  exercise: {
    question: 'Какой артикль имеют все немецкие слова на -tät (Identität, Priorität, Qualität)?',
    answer: 'всегда die (женский род)',
    options: ['всегда die (женский род)', 'всегда der (мужской род)', 'всегда das (средний род)', 'зависит от перевода в русском'],
    explain: 'В русском «приоритет» и «иммунитет» мужского рода, но в немецком ВСЕ существительные на -tät женского рода (die Priorität, die Identität).'
  }
});

GT.registerSuffix({
  id: 'bar', label: '-bar', gender: '—', posChange: 'глагол → прилагательное',
  ru: '«поддающийся действию, который можно …» (как англ. -able / рус. «-емый, -имый»)',
  pattern: 'основа переходного глагола + -bar (часто с un- для отрицания)',
  spelling: 'Присоединяется прямо к основе глагола: erreich(en) + -bar = erreichbar; mach(en) + -bar = machbar.',
  exceptions: 'У некоторых частых слов значение лексикализовалось: dankbar («благодарный»), furchtbar («ужасный»), offenbar («очевидно»), wunderbar («чудесный»).',
  limitations: 'Продуктивное значение «можно сделать» работает преимущественно с переходными глаголами.',
  productivity: 'Очень продуктивен — заменяет целую пассивную конструкцию с können: «Das ist machbar» = «Das kann man machen».',
  examples: [
    { de: 'erreichbar', ru: 'достижимый; на связи (от erreichen)' },
    { de: 'verfügbar', ru: 'доступный (от verfügen)' },
    { de: 'machbar', ru: 'выполнимый, реальный (от machen)' },
    { de: 'nachvollziehbar', ru: 'понятный, воспроизводимый (от nachvollziehen)' }
  ],
  exercise: {
    question: 'Какую конструкцию заменяет суффикс -bar в фразе «Das Risiko ist kalkulierbar»?',
    answer: 'пассивную возможность: «риск можно просчитать»',
    options: ['пассивную возможность: «риск можно просчитать»', 'отсутствие признака: «без риска»', 'прошедшее время: «риск уже просчитан»', 'исполнителя действия'],
    explain: 'Продуктивный суффикс -bar у переходных глаголов означает «то, что можно сделать» (как английское -able: kalkulierbar = man kann es kalkulieren).'
  }
});

GT.registerSuffix({
  id: 'lich', label: '-lich', gender: '—', posChange: 'существительное / глагол / прилагательное → прилагательное',
  ru: 'относящийся к, регулярность (еже-), свойство или склонность',
  pattern: 'основа (часто с умлаутом) + -lich',
  spelling: 'Часто вызывает умлаут в корне: der Tag → täglich, die Gefahr → gefährlich, der Körper → körperlich, die Woche → wöchentlich (с -t- после -n).',
  exceptions: 'Не путайте близкие пары с разными суффиксами: zeitlich («временной») vs zeitig («ранний»); verständlich («понятный») vs verständig («рассудительный»).',
  limitations: 'Одно из самых многофункциональных окончаний: с единицами времени даёт регулярность (täglich, monatlich), с существительными — отношение (fachlich, beruflich).',
  productivity: 'Очень высокая частотность на уровнях B1–B2.',
  examples: [
    { de: 'verantwortlich', ru: 'ответственный (от verantworten)' },
    { de: 'körperlich', ru: 'физический, телесный (от der Körper)' },
    { de: 'vertraulich', ru: 'конфиденциальный (от vertrauen)' },
    { de: 'täglich / monatlich', ru: 'ежедневный / ежемесячный' }
  ],
  exercise: {
    question: 'Что выражает суффикс -lich в словах «täglich», «wöchentlich», «monatlich»?',
    answer: 'регулярность, повторяемость (каждый день / неделю / месяц)',
    options: ['регулярность, повторяемость (каждый день / неделю / месяц)', 'отсутствие времени', 'возможность что-то сделать', 'принадлежность к языку'],
    explain: 'Со словами времени (Tag, Woche, Monat, Jahr, Stunde) суффикс -lich регулярно образует прилагательные/наречия периодичности.'
  }
});

GT.registerSuffix({
  id: 'ig', label: '-ig', gender: '—', posChange: 'существительное / глагол / наречие → прилагательное',
  ru: 'обладающий признаком, содержащий что-либо, характерный для',
  pattern: 'основа (иногда с умлаутом) + -ig',
  spelling: 'В конце слова в стандартном немецком -ig обычно произносится как мягкое [-ихь] (wichtig, verdächtig), но перед гласной как [г] (wichtige).',
  exceptions: 'Некоторые прилагательные на -ig образованы от наречий времени/места: heute → heutig («сегодняшний»), dort → dortig («тамошний»).',
  limitations: 'От прилагательных на -ig существительное образуется через -keit (abhängig → die Abhängigkeit, zuständig → die Zuständigkeit).',
  productivity: 'Очень продуктивен.',
  examples: [
    { de: 'verdächtig', ru: 'подозрительный (от der Verdacht)' },
    { de: 'auffällig', ru: 'аномальный, бросающийся в глаза (от auffallen)' },
    { de: 'abhängig', ru: 'зависимый (от abhängen)' },
    { de: 'vorsichtig', ru: 'осторожный (от die Vorsicht)' }
  ],
  exercise: {
    question: 'Какой суффикс образует существительное от прилагательного на -ig (например, abhängig, zuständig)?',
    answer: '-keit (die Abhängigkeit, die Zuständigkeit)',
    options: ['-keit (die Abhängigkeit, die Zuständigkeit)', '-heit (die Abhängigheit)', '-ung (die Abhängigung)', '-schaft (die Abhängigschaft)'],
    explain: 'После прилагательных на -ig всегда ставится -keit (артикль die): abhängig → die Abhängigkeit, zuständig → die Zuständigkeit.'
  }
});

GT.registerSuffix({
  id: 'isch', label: '-isch', gender: '—', posChange: 'существительное / имя → прилагательное',
  ru: 'принадлежность (язык, страна, область науки, техника), реже — оценочный оттенок',
  pattern: 'основа + -isch',
  spelling: 'Часто соответствует русскому «-ический / -ский»: technisch, kritisch, logisch, medizinisch, deutsch/russisch.',
  exceptions: 'Иногда пара -lich / -isch различается оценкой: kindlich («по-детски искренний») vs kindisch («ребячливый, несерьёзный»).',
  limitations: 'В названиях языков и национальностей пишется со строчной буквы как прилагательное (russische Kollegen), но с заглавной как название языка (Russisch lernen).',
  productivity: 'Очень продуктивен в науке, IT и названиях стран/языков.',
  examples: [
    { de: 'technisch', ru: 'технический (от die Technik)' },
    { de: 'forensisch', ru: 'криминалистический, форензический (от die Forensik)' },
    { de: 'kritisch', ru: 'критический (от die Kritik)' },
    { de: 'automatisch', ru: 'автоматический' }
  ],
  exercise: {
    question: 'Чем различаются «kindlich» и «kindisch»?',
    answer: 'kindlich — нейтрально «детский», а kindisch — пренебрежительно «ребячливый»',
    options: ['kindlich — нейтрально «детский», а kindisch — пренебрежительно «ребячливый»', 'это полные синонимы', 'kindlich — существительное, kindisch — глагол', 'kindisch означает «без детей»'],
    explain: 'В ряде пар -isch придаёт негативно-оценочный оттенок (kindisch — «ведёт себя как маленький»), тогда как -lich остаётся нейтральным.'
  }
});

GT.registerSuffix({
  id: 'los', label: '-los', gender: '—', posChange: 'существительное → прилагательное',
  ru: '«без чего-либо, лишённый» (аналог английского -less)',
  pattern: 'существительное (иногда с соединительным -s- / -en-) + -los',
  spelling: 'Часто появляется соединительное -s- (die Arbeit → arbeitslos, der Zweifel → zweifellos) или -en- (die Kosten → kostenlos).',
  exceptions: 'Не путайте с отделяемой глагольной приставкой los- («начинать, отрываться»: losgehen, losfahren) — это разные модели!',
  limitations: 'Обычно соответствует фразе «ohne + существительное»: kostenlos = ohne Kosten, problemlos = ohne Probleme.',
  productivity: 'Очень продуктивен и почти всегда полностью прозрачен.',
  examples: [
    { de: 'kostenlos', ru: 'бесплатный (без затрат)' },
    { de: 'problemlos', ru: 'беспроблемный, без проблем' },
    { de: 'arbeitslos', ru: 'безработный (без работы)' },
    { de: 'sinnlos', ru: 'бессмысленный (без смысла)' }
  ],
  exercise: {
    question: 'Что означает суффикс -los в словах «problemlos», «kostenlos», «arbeitslos»?',
    answer: 'отсутствие признака («без …»)',
    options: ['отсутствие признака («без …»)', 'начало движения', 'возможность выполнить действие', 'высокая степень признака'],
    explain: 'Суффикс прилагательных -los соответствует предлогу ohne («без») и английскому -less: problemlos = без проблем.'
  }
});

GT.registerSuffix({
  id: 'ieren', label: '-ieren', gender: '—', posChange: 'заимствованные глаголы (всегда слабые, Perfekt БЕЗ ge-!)',
  ru: 'образует глаголы из международных и технических основ (соответствует русскому «-ировать»)',
  pattern: 'основа + -ieren (Prät.: -ierte, Perf.: hat/ist …-iert)',
  spelling: 'Ударение ВСЕГДА на -ÍER-: protokolLIÉRen, isolIÉRen, eskalIÉRen, funktionIÉRen.',
  exceptions: 'Главная грамматическая особенность: в Partizip II НИКОГДА не ставится ge-! Не «geprotokolliert», а «protokolliert»!',
  limitations: 'Все глаголы на -ieren спрягаются слабо (правильно), но вспомогательный глагол зависит от смысла (haben: ich habe eskaliert; sein при изменении состояния: der Streit ist eskaliert).',
  productivity: 'Крайне продуктивен в IT, науке, медицине и деловом немецком.',
  examples: [
    { de: 'protokollieren', ru: 'протоколировать, логировать (hat protokolliert)' },
    { de: 'isolieren', ru: 'изолировать (hat isoliert)' },
    { de: 'eskalieren', ru: 'эскалировать; обостряться (hat / ist eskaliert)' },
    { de: 'informieren', ru: 'информировать (hat informiert)' }
  ],
  exercise: {
    question: 'Как правильно образовать Partizip II от глагола «protokollieren»?',
    answer: 'protokolliert (без приставки ge-)',
    options: ['protokolliert (без приставки ge-)', 'geprotokolliert', 'protokollierten', 'geprotokollieren'],
    explain: 'Все глаголы на -ieren имеют ударение на суффиксе -íer- и поэтому ВСЕГДА образуют Partizip II без приставки ge-: protokolliert, isoliert, installiert.'
  }
});
