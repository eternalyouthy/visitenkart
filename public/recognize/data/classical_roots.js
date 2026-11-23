/* Classical Latin & Greek combining elements common in German B1–B2, medical & IT vocabulary.
 * Strict etymology rules: verified DWDS/Pfeifer historical facts; clear limitations against inventing words. */

GT.registerClassical({
  id: 'tele', label: 'tele-', origin: 'Greek',
  ru: 'далеко, на расстоянии (греч. tēle)',
  history: 'Восходит к греческому наречию tēle («далеко, вдали»). С конца XVIII–XIX вв. элемент закрепился в международных технических названиях передачи сигнала на расстояние (Telegraph, Telefon, Telemedizin).',
  limitations: 'Это связанный заимствованный элемент, а не самостоятельное немецкое слово. Не заменяет немецкое fern- в любых словах: по-немецки «телевизор» — der Fernseher (калька с television), а не «Tele-Seher».',
  examples: [
    { de: 'das Telefon', ru: 'телефон (буквально «дальний звук»)' },
    { de: 'die Telekommunikation', ru: 'телекоммуникация' },
    { de: 'die Telemedizin', ru: 'телемедицина, удалённые консультации' }
  ],
  source: 'DWDS (Pfeifer), s.v. tele-'
});

GT.registerClassical({
  id: 'auto', label: 'auto-', origin: 'Greek',
  ru: 'сам, самостоятельно (греч. autós)',
  history: 'От греческого autós («сам»). В немецком дало как научные термины (automatisch «действующий сам по себе», autonom «самоуправляемый»), так и сокращение das Auto (от das Automobil — «самодвижущийся»).',
  limitations: 'В современном немецком самостоятельное das Auto означает именно «автомобиль» (как в Autobahn, Autowerkstatt), тогда как в терминах вроде authentifizieren или automatisch работает исходный греческий элемент «сам». Не путайте два значения.',
  examples: [
    { de: 'automatisch', ru: 'автоматический (действующий сам)' },
    { de: 'die Automatisierung', ru: 'автоматизация' },
    { de: 'authentisch', ru: 'подлинный (греч. authentikós — собственноручный, достоверный)' }
  ],
  source: 'DWDS (Pfeifer), s.v. auto- / authentisch'
});

GT.registerClassical({
  id: 'bio', label: 'bio-', origin: 'Greek',
  ru: 'жизнь, живой (греч. bíos)',
  history: 'От греческого bíos («жизнь»). В XIX–XX вв. элемент стал основой научных терминов (Biologie, Antibiotikum — буквально «против [бактериальной] жизни»), а в быту Германии самостоятельное слово bio закрепилось для органических продуктов.',
  limitations: 'В немецких супермаркетах Bio- (Bio-Milch, Bio-Laden) означает сертифицированное органическое сельское хозяйство — не переносите это бытовое значение на научные термины вроде Biometrie или Antibiotikum.',
  examples: [
    { de: 'das Antibiotikum', ru: 'антибиотик (anti- + bíos)' },
    { de: 'die Biometrie', ru: 'биометрия (bíos + métron «мера»)' },
    { de: 'die Biologie', ru: 'биология' }
  ],
  source: 'DWDS (Pfeifer), s.v. bio- / Antibiotikum'
});

GT.registerClassical({
  id: 'graph', label: 'graph / -grafie', origin: 'Greek',
  ru: 'писать, чертить, изображать (греч. gráphein)',
  history: 'От греческого глагола gráphein («царапать, писать, рисовать»). В немецком используется в названиях методов записи, наук и изображений (Kryptografie, Grafik, Biografie, Paragraph).',
  limitations: 'Орфография в немецком после реформы допускает -grafie (Kryptografie, Fotografie), а в традиционных терминах встречается -graphie. Это связанный элемент — нельзя произвольно собирать с ним немецкие глаголы.',
  examples: [
    { de: 'die Kryptografie', ru: 'криптография («тайнопись»)' },
    { de: 'die Grafik', ru: 'графика, диаграмма' },
    { de: 'der Paragraph', ru: 'параграф (в немецких законах §)' }
  ],
  source: 'DWDS (Pfeifer), s.v. -graph / Grafik'
});

GT.registerClassical({
  id: 'log', label: 'log / -logie', origin: 'Greek',
  ru: 'слово, учение, рассуждение (греч. lógos)',
  history: 'От греческого lógos («слово, речь, разум, учение»). В немецком образует названия наук и системных понятий (Technologie, Neurologie, Dialog, Katalog, logisch).',
  limitations: 'Важнейшее разграничение для IT: компьютерное das Log («лог, журнал событий») НЕ происходит от греческого lógos — оно заимствовано из английского logbook (морской лаг из бревна для замера скорости судна). Одинаковые буквы не означают общий корень.',
  examples: [
    { de: 'die Technologie', ru: 'технология' },
    { de: 'die Psychologie', ru: 'психология' },
    { de: 'der Dialog', ru: 'диалог (dia- «между» + lógos)' }
  ],
  source: 'DWDS (Pfeifer), s.v. -logie / Logik; OED: log'
});

GT.registerClassical({
  id: 'phon', label: 'phon / -fon', origin: 'Greek',
  ru: 'звук, голос (греч. phōnḗ)',
  history: 'От греческого phōnḗ («голос, звук»). Встречается в международных словах, связанных со звуком и связью (Telefon, Mikrofon, Kopfhörer — уже немецкий эквивалент).',
  limitations: 'В современном немецком предпочитается написание -fon (Telefon, Mikrofon, Smartphone сохраняет английскую орфографию). Элемент непродуктивен для свободного словообразования.',
  examples: [
    { de: 'das Telefon', ru: 'телефон' },
    { de: 'das Mikrofon', ru: 'микрофон' },
    { de: 'die Phonetik', ru: 'фонетика (наука о звуках речи)' }
  ],
  source: 'DWDS (Pfeifer), s.v. Telefon / Phonetik'
});

GT.registerClassical({
  id: 'port', label: 'port', origin: 'Latin',
  ru: 'нести, перевозить (лат. portāre)',
  history: 'Латинский глагол portāre («нести, доставлять») через романские и международные заимствования объясняет немецкие Transport, Export, Import, Report, transportieren.',
  limitations: 'Осторожно с ложными сближениями: сетевой der Port (TCP/UDP-порт) и морской Port восходят к другому латинскому слову — portus («гавань, вход»), а не к portāre («нести»).',
  examples: [
    { de: 'der Transport', ru: 'транспорт, перевозка (trans- + portāre)' },
    { de: 'exportieren', ru: 'экспортировать (ex- + portāre)' },
    { de: 'importieren', ru: 'импортировать (in- + portāre)' }
  ],
  source: 'DWDS (Pfeifer), s.v. Transport / Port'
});

GT.registerClassical({
  id: 'skript', label: 'skript / scrib', origin: 'Latin',
  ru: 'писать, записанное (лат. scrībere / scrīptum)',
  history: 'От латинского scrībere («писать», причастие scrīptum «написанное»). Немецкий глагол schreiben сам является очень ранним заимствованием из того же латинского scrībere (ещё до древневерхненемецкого периода), а das Skript и das Manuskript пришли позже через латынь и английский.',
  limitations: 'Нельзя механически чередовать skript- и schreib- в современных словах: в IT говорят das Skript (мн. ч. die Skripte / Skripts), а повседневный глагол — schreiben.',
  examples: [
    { de: 'das Skript', ru: 'скрипт, сценарий; конспект лекций' },
    { de: 'das Manuskript', ru: 'рукопись (лат. manus «рука» + scrīptum)' },
    { de: 'schreiben', ru: 'писать (раннее заимствование из лат. scrībere)' }
  ],
  source: 'DWDS (Pfeifer), s.v. schreiben / Skript'
});

GT.registerClassical({
  id: 'strukt', label: 'strukt / struct', origin: 'Latin',
  ru: 'строить, складывать, устройство (лат. struere / strūctūra)',
  history: 'Восходит к латинскому глаголу struere («складывать, возводить», причастие strūctus). Объясняет целую группу ключевых IT- и деловых слов в немецком: Infrastruktur, Struktur, Konstruktion, Instruktion.',
  limitations: 'В немецком элемент закреплён в готовых международных словах с написанием -strukt- (не -struct-). Живой немецкий глагол с тем же смыслом — bauen (и его семейство aufbauen, umbauen).',
  examples: [
    { de: 'die Infrastruktur', ru: 'инфраструктура (infra- «под, ниже» + strūctūra)' },
    { de: 'die Struktur', ru: 'структура, устройство' },
    { de: 'strukturieren', ru: 'структурировать' }
  ],
  source: 'DWDS (Pfeifer), s.v. Struktur / Infrastruktur'
});

GT.registerClassical({
  id: 'vis', label: 'vis / vid', origin: 'Latin',
  ru: 'видеть, смотреть (лат. vidēre / vīsum)',
  history: 'От латинского vidēre («видеть», основа причастия vīs-). От него в немецком образованы Video, Visum (буквально «просмотрено» — отметка на документе), Revision («пересмотр, проверка»), visuell и Provider (от prōvidēre «предусматривать, обеспечивать»).',
  limitations: 'Исторический корень помогает запомнить связь между Video, Visum и Revision, но это не продуктивная немецкая морфема. Для обычного «видеть» в немецком используется корень sehen.',
  examples: [
    { de: 'das Visum', ru: 'виза (букв. «просмотрено»)' },
    { de: 'die Videosprechstunde', ru: 'видеоконсультация врача' },
    { de: 'visuell', ru: 'визуальный, наглядный' }
  ],
  source: 'DWDS (Pfeifer), s.v. Visum / Video / Revision'
});
