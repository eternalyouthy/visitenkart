/* B2 theme "Berufswege", batch 2: onboarding, employment law, career development & workplace skills. Curated. */
GT.register({ tab: 'it', topic: 'b2_beruf', items: [
{
  id: 'b2-beruf-einarbeitung', level: 'b2', pos: 'noun',
  de: 'Einarbeitung', article: 'die', plural: 'die Einarbeitungen',
  ru: 'ввод в должность, онбординг, освоение работы',
  examples: [
    { de: 'Die [[Einarbeitung]] im neuen SOC-Team war sehr gut strukturiert.', ru: 'Онбординг в новой команде SOC был очень хорошо структурирован.' },
    { de: 'Für die [[Einarbeitung]] rechnen wir ungefähr drei Monate ein.', ru: 'На ввод в должность мы закладываем примерно три месяца.' }
  ],
  morph: 'Ein-arbeit-ung', root: 'Arbeit',
  parts: [['ein-', 'внутрь, вхождение'], ['arbeit', 'основа arbeiten — работать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['einarbeiten', 'sich einarbeiten', 'die Einarbeitungszeit', 'arbeiten', 'die Arbeit'],
  note: 'Глагол: «sich in etw. (Akk.) einarbeiten» — вникнуть в новую задачу/роль; «jdn. einarbeiten» — обучить нового коллегу. В IT также говорят «das Onboarding».',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола einarbeiten (ein- «внутрь» + arbeiten «работать») + -ung.\nПроисхождение: буквально «вхождение в работу» — стандартный немецкий термин для периода адаптации и обучения нового сотрудника.\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS, s.v. Einarbeitung / einarbeiten',
    evidence: 'От einarbeiten (ein- + arbeiten) + -ung.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-probezeit', level: 'b2', pos: 'noun',
  de: 'Probezeit', article: 'die', plural: 'die Probezeiten',
  ru: 'испытательный срок',
  examples: [
    { de: 'In Deutschland dauert die [[Probezeit]] meistens sechs Monate.', ru: 'В Германии испытательный срок обычно длится шесть месяцев.' },
    { de: 'Während der [[Probezeit]] beträgt die Kündigungsfrist nur zwei Wochen.', ru: 'Во время испытательного срока срок уведомления об увольнении составляет всего две недели.' }
  ],
  morph: 'Probe-zeit', root: 'Probe · Zeit',
  parts: [['Probe', 'die Probe — проба, проверка'], ['Zeit', 'die Zeit — время']],
  transparency: 'transparent',
  family: ['die Probe', 'probieren', 'ausprobieren', 'die Zeit', 'die Kündigungsfrist'],
  note: '«Die Probezeit bestehen» — успешно пройти испытательный срок. В немецком трудовом праве во время Probezeit уволить или уволиться можно с уведомлением за 2 недели (без указания причины).',
  why: {
    confidence: 'high',
    text: 'Состав: die Probe («проба, испытание») + die Zeit («время»).\nПроисхождение: Probe вошло в немецкий в XV в. из средневековой латыни proba («проверка, доказательство», от probāre); сложение Probezeit закрепилось в трудовом праве и для водительских прав (2 года для новичков).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Probe / Probezeit',
    evidence: 'Probe (< ср.-лат. proba «проверка») + Zeit («время»).'
  },
  ru_link: null
},
{
  id: 'b2-beruf-befoerderung', level: 'b2', pos: 'noun',
  de: 'Beförderung', article: 'die', plural: 'die Beförderungen',
  ru: 'повышение (по службе); перевозка (пассажиров, грузов)',
  examples: [
    { sense: 'повышение по службе', de: 'Nach drei Jahren hat sie endlich die [[Beförderung]] zur Senior-Analystin bekommen.', ru: 'Через три года она наконец получила повышение до старшего аналитика.' },
    { sense: 'перевозка (официально)', de: 'Die [[Beförderung]] von Fahrrädern ist im ICE nur mit Reservierung möglich.', ru: 'Перевозка велосипедов в ICE возможна только по бронированию.' }
  ],
  morph: 'Be-förder-ung', root: 'fördern',
  parts: [['be-', 'неотделяемая приставка'], ['förder', 'основа fördern — продвигать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['befördern', 'fördern', 'die Förderung', 'befördert werden'],
  meaningType: 'polysemous',
  meaningExplanation: 'die Beförderung имеет два самостоятельных официальных значения: «повышение по службе» (на работе) и «перевозка пассажиров/грузов» (в транспорте и правилах DB).',
  meaningExamples: [{ de: 'eine Beförderung bekommen', ru: 'получить повышение' }, { de: 'die Beförderung von Gepäck', ru: 'перевозка багажа' }],
  note: 'Пассив: «Er wurde zum Teamleiter befördert» — его повысили до тимлида.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола befördern (be- + fördern «продвигать вперёд») + -ung.\nПроисхождение: fördern образовано от vorder («передний») — буквально «двигать вперёд»; отсюда и физическая «перевозка» (доставка вперёд), и карьерное «продвижение/повышение».\nПрозрачность: оба значения восходят к идее «двигать вперёд».',
    source: 'DWDS (Pfeifer), s.v. befördern / fördern',
    evidence: 'От befördern (be- + fördern < vorder «вперёд»): 1) перевозить; 2) повышать по службе.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-arbeitszeugnis', level: 'b2', pos: 'noun',
  de: 'Arbeitszeugnis', article: 'das', plural: 'die Arbeitszeugnisse',
  ru: 'характеристика с места работы (обязательный документ в Германии)',
  examples: [
    { de: 'Bei jeder Bewerbung in Deutschland legt man die letzten [[Arbeitszeugnisse]] bei.', ru: 'При каждом отклике в Германии прикладывают последние характеристики с работы.' },
    { de: 'Vor dem Jobwechsel habe ich ein qualifiziertes [[Arbeitszeugnis]] angefordert.', ru: 'Перед сменой работы я запросил развёрнутую характеристику.' }
  ],
  morph: 'Arbeit-s-zeug-nis', root: 'Arbeit · zeugen',
  parts: [['Arbeit', 'die Arbeit — работа'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Zeugnis', 'das Zeugnis — свидетельство, аттестат']],
  transparency: 'transparent',
  family: ['das Zeugnis', 'das Zwischenzeugnis', 'die Arbeit', 'bezeugen'],
  note: 'В Германии работодатель обязан выдать Arbeitszeugnis по закону. Оно всегда написано вежливым «секретным кодом»: «stets zu unserer vollsten Zufriedenheit» = оценка 1 («отлично»), а «zu unserer Zufriedenheit» = оценка 3! «Das Zwischenzeugnis» — промежуточная характеристика (полезно запросить при смене начальника).',
  why: {
    confidence: 'high',
    text: 'Состав: die Arbeit («работа») + -s- + das Zeugnis («свидетельство, аттестат»).\nПроисхождение: Zeugnis образовано от глагола zeugen («свидетельствовать») + суффикс -nis (мн. ч. с двойным s: -nisse).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Zeugnis / Arbeitszeugnis',
    evidence: 'Arbeit + Fugen-s + Zeugnis (от zeugen «свидетельствовать» + -nis).'
  },
  ru_link: null
},
{
  id: 'b2-beruf-betriebsrat', level: 'b2', pos: 'noun',
  de: 'Betriebsrat', article: 'der', plural: 'die Betriebsräte',
  ru: 'производственный совет (выборный орган защиты прав сотрудников)',
  examples: [
    { de: 'Bei der Einführung neuer Monitoring-Tools muss der [[Betriebsrat]] zustimmen.', ru: 'При внедрении новых инструментов мониторинга производственный совет должен дать согласие.' },
    { de: 'Wenn es Probleme mit Überstunden gibt, kannst du dich an den [[Betriebsrat]] wenden.', ru: 'Если есть проблемы с переработками, можешь обратиться в производственный совет.' }
  ],
  morph: 'Betrieb-s-rat', root: 'Betrieb · Rat',
  parts: [['Betrieb', 'der Betrieb — предприятие'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Rat', 'der Rat — совет']],
  transparency: 'transparent',
  family: ['der Betrieb', 'der Rat', 'beraten', 'die Mitbestimmung'],
  note: 'В немецких компаниях (особенно в IT-безопасности!) Betriebsrat имеет реальное право вето (Mitbestimmung) на любые системы, способные отслеживать действия сотрудников (EDR, логи, DLP).',
  why: {
    confidence: 'high',
    text: 'Состав: der Betrieb («предприятие») + -s- + der Rat («совет»).\nПроисхождение: юридический термин, закреплённый в Германии законом о производственных советах 1920 года (Betriebsrätegesetz); der Rat восходит к др.-в.-нем. rāt («совет, совещательный орган»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Betriebsrat / Rat',
    evidence: 'Betrieb + Fugen-s + Rat («совет»); закреплён в трудовом праве Германии с 1920 г.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-weiterbildung', level: 'b2', pos: 'noun',
  de: 'Weiterbildung', article: 'die', plural: 'die Weiterbildungen',
  ru: 'повышение квалификации, дополнительное обучение',
  examples: [
    { de: 'Die Firma übernimmt die Kosten für meine [[Weiterbildung]] im Bereich Cloud-Security.', ru: 'Компания оплачивает моё повышение квалификации в области облачной безопасности.' },
    { de: 'In der IT ist ständige [[Weiterbildung]] unverzichtbar.', ru: 'В IT постоянное повышение квалификации незаменимо.' }
  ],
  morph: 'Weiter-bild-ung', root: 'bilden',
  parts: [['weiter-', 'дальше'], ['bild', 'основа bilden — образовывать, формировать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['sich weiterbilden', 'die Bildung', 'die Ausbildung', 'die Fortbildung'],
  note: 'Различайте: «die Ausbildung» — первичное профессиональное образование; «die Weiterbildung / Fortbildung» — повышение квалификации и курсы уже в профессии. «Der Bildungsurlaub» — оплачиваемый учебный отпуск (5 дней в году в большинстве земель Германии!).',
  why: {
    confidence: 'high',
    text: 'Состав: weiter («дальше») + die Bildung («образование», от bilden + -ung).\nПроисхождение: die Bildung в XVIII в. закрепилось в значении «образование, формирование личности»; сложение Weiterbildung (XX в.) обозначает обучение уже после получения базовой профессии.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Bildung / Weiterbildung',
    evidence: 'weiter + Bildung (от bilden + -ung); термин непрерывного профобразования.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-kuendigungsfrist', level: 'b2', pos: 'noun',
  de: 'Kündigungsfrist', article: 'die', plural: 'die Kündigungsfristen',
  ru: 'срок уведомления об увольнении или расторжении договора',
  examples: [
    { de: 'Mein Vertrag hat eine [[Kündigungsfrist]] von drei Monaten zum Quartalsende.', ru: 'По моему контракту срок уведомления об увольнении — три месяца к концу квартала.' },
    { de: 'Achte bei der neuen Stelle darauf, dass deine [[Kündigungsfrist]] passt.', ru: 'На новой работе проверь, чтобы подходил твой срок отработки.' }
  ],
  morph: 'Kündigung-s-frist', root: 'kund · Frist',
  parts: [['Kündigung', 'die Kündigung — увольнение, расторжение'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Frist', 'die Frist — срок']],
  transparency: 'transparent',
  family: ['kündigen', 'die Kündigung', 'die Frist', 'zum Monatsende', 'zum Quartalsende'],
  note: '«Drei Monate zum Monatsende / zum Quartalsende» — очень частое условие в немецких IT-контрактах (увольняться нужно заранее!). Работает и для договоров аренды и интернета.',
  why: {
    confidence: 'high',
    text: 'Состав: die Kündigung («расторжение договора / увольнение») + -s- + die Frist («срок»).\nПроисхождение: юридическое определительное сложение — обязательный промежуток между подачей уведомления (Kündigung) и датой прекращения договора.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Kündigungsfrist',
    evidence: 'Kündigung + Fugen-s + Frist («срок уведомления о расторжении»).'
  },
  ru_link: null
},
{
  id: 'b2-beruf-eigeninitiative', level: 'b2', pos: 'noun',
  de: 'Eigeninitiative', article: 'die',
  ru: 'личная инициатива, проактивность',
  examples: [
    { de: 'In der Stellenanzeige werden Selbstständigkeit und [[Eigeninitiative]] erwartet.', ru: 'В вакансии ожидают самостоятельность и проактивность.' },
    { de: 'Er hat aus [[Eigeninitiative]] ein Skript geschrieben, das uns zwei Stunden pro Tag spart.', ru: 'Он по собственной инициативе написал скрипт, который экономит нам два часа в день.' }
  ],
  morph: 'Eigen-initiative', root: 'eigen',
  parts: [['eigen', 'собственный'], ['Initiative', 'die Initiative — инициатива']],
  transparency: 'transparent',
  family: ['eigen', 'die Initiative', 'eigenständig', 'selbstständig'],
  note: 'Обычно без мн. ч. «Aus Eigeninitiative» / «Eigeninitiative zeigen» — проявлять инициативу. Обязательное слово в немецких вакансиях и характеристиках (Arbeitszeugnis).',
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное eigen («собственный») + die Initiative («инициатива»).\nПроисхождение: Initiative пришло в XIX в. через французский из латинского initium («начало»); сложение Eigeninitiative подчёркивает самостоятельный почин без указания сверху.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Initiative / Eigeninitiative',
    evidence: 'eigen + Initiative (< фр. initiative < лат. initium «начало»).'
  },
  ru_link: null
},
{
  id: 'b2-beruf-belastbarkeit', level: 'b2', pos: 'noun',
  de: 'Belastbarkeit', article: 'die',
  ru: 'стрессоустойчивость, выносливость (к рабочим нагрузкам)',
  examples: [
    { de: 'Bei einem schweren Sicherheitsvorfall ist hohe [[Belastbarkeit]] gefragt.', ru: 'При серьёзном инциденте безопасности требуется высокая стрессоустойчивость.' },
    { de: 'In vielen Stellenanzeigen steht „[[Belastbarkeit]] und Flexibilität“.', ru: 'Во многих вакансиях пишут «стрессоустойчивость и гибкость».' }
  ],
  morph: 'Be-last-bar-keit', root: 'Last',
  parts: [['be-', 'неотделяемая приставка'], ['Last', 'die Last — груз, нагрузка'], ['-bar', '«способный выдержать»'], ['-keit', 'прилагательное → существительное, всегда die']],
  transparency: 'figurative',
  family: ['die Last', 'belasten', 'belastbar', 'die Belastung', 'entlasten'],
  meaningType: 'figurative',
  meaningExplanation: 'Технический образ допустимой механической нагрузки на конструкцию (belastbar — «выдерживающий груз»), перенесённый на психологическую стрессоустойчивость человека.',
  meaningExamples: [{ de: 'die Belastbarkeit einer Brücke', ru: 'несущая способность моста (буквально)' }, { de: 'hohe Belastbarkeit im Beruf', ru: 'стрессоустойчивость на работе (образно)' }],
  note: 'Прилагательное: «belastbar» («Ich bin auch unter Zeitdruck belastbar»). В немецких вакансиях «hohe Belastbarkeit» иногда намёк на частые авралы — стоит уточнять на собеседовании.',
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное belastbar (от belasten «нагружать», к die Last «груз» + -bar) + суффикс -keit (всегда die).\nПроисхождение: изначально технический термин про предельную нагрузку на деталь или мост; в XX в. перенесён в психологию и HR в значении «стрессоустойчивость».\nПрозрачность: переносная, но все морфемы полностью читаются.',
    source: 'DWDS, s.v. Belastbarkeit / belasten',
    evidence: 'От belastbar (be- + Last + -bar) + -keit; перенос с механической нагрузки на стрессоустойчивость.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-teamfaehigkeit', level: 'b2', pos: 'noun',
  de: 'Teamfähigkeit', article: 'die',
  ru: 'умение работать в команде',
  examples: [
    { de: 'Neben Fachwissen zählt bei uns vor allem [[Teamfähigkeit]].', ru: 'Помимо профессиональных знаний, у нас особенно ценится умение работать в команде.' },
    { de: 'In einem SOC ist [[Teamfähigkeit]] entscheidend, weil wir im Schichtbetrieb arbeiten.', ru: 'В SOC умение работать в команде решающе важно, потому что мы работаем по сменам.' }
  ],
  morph: 'Team-fähig-keit', root: 'fähig',
  parts: [['Team', 'das Team — команда'], ['fähig', 'способный'], ['-keit', 'прилагательное → существительное, всегда die']],
  transparency: 'transparent',
  family: ['das Team', 'teamfähig', 'fähig', 'die Fähigkeit', 'die Zusammenarbeit'],
  note: 'Обычно без мн. ч. Прилагательное: «teamfähig». По той же продуктивной модели «X-fähigkeit»: Kritikfähigkeit (способность принимать критику), Kommunikationsfähigkeit (коммуникабельность).',
  why: {
    confidence: 'high',
    text: 'Состав: das Team («команда», из англ.) + fähig («способный») + -keit (всегда die).\nПроисхождение: гибридное HR-сложение конца XX века по продуктивной немецкой модели -fähigkeit (как Kommunikationsfähigkeit, Kritikfähigkeit).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Teamfähigkeit / fähig',
    evidence: 'Team (< англ.) + fähig + -keit; современное словообразование по модели -fähigkeit.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-arbeitsmarkt', level: 'b2', pos: 'noun',
  de: 'Arbeitsmarkt', article: 'der', plural: 'die Arbeitsmärkte',
  ru: 'рынок труда',
  examples: [
    { de: 'Auf dem [[Arbeitsmarkt]] sind erfahrene IT-Security-Spezialisten sehr gefragt.', ru: 'На рынке труда опытные специалисты по IT-безопасности очень востребованы.' },
    { de: 'Wie sieht der [[Arbeitsmarkt]] in deiner Branche gerade aus?', ru: 'Как сейчас выглядит рынок труда в твоей отрасли?' }
  ],
  morph: 'Arbeit-s-markt', root: 'Arbeit · Markt',
  parts: [['Arbeit', 'die Arbeit — работа'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Markt', 'der Markt — рынок']],
  transparency: 'transparent',
  family: ['die Arbeit', 'der Markt', 'gefragt sein', 'die Stelle', 'die Bewerbung'],
  note: 'Предлог: «auf dem Arbeitsmarkt» (Dativ). Полезное выражение: «gefragt sein» — быть востребованным.',
  why: {
    confidence: 'high',
    text: 'Состав: die Arbeit («работа») + -s- + der Markt («рынок»).\nПроисхождение: экономическое сложение XIX века; der Markt — раннее заимствование из латинского mercātus («торговля, рынок»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Arbeitsmarkt / Markt',
    evidence: 'Arbeit + Fugen-s + Markt (< лат. mercātus); экономический термин с XIX в.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-bewerbungsunterlagen', level: 'b2', pos: 'noun',
  de: 'Bewerbungsunterlagen', article: 'die', plural: 'die Bewerbungsunterlagen',
  ru: 'пакет документов для отклика на вакансию (резюме, письмо, характеристики)',
  examples: [
    { de: 'Bitte senden Sie uns Ihre vollständigen [[Bewerbungsunterlagen]] als PDF.', ru: 'Пожалуйста, пришлите нам полный пакет документов для отклика в формате PDF.' },
    { de: 'Ich muss meine [[Bewerbungsunterlagen]] am Wochenende auf den neuesten Stand bringen.', ru: 'Мне нужно на выходных обновить свои документы для подачи на вакансии.' }
  ],
  morph: 'Bewerbung-s-unter-lag-en', root: 'werben · legen',
  parts: [['Bewerbung', 'die Bewerbung — заявка на вакансию'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Unterlagen', 'die Unterlagen — документы, материалы (мн. ч.)']],
  transparency: 'transparent',
  family: ['sich bewerben', 'die Bewerbung', 'die Unterlagen', 'der Lebenslauf', 'das Anschreiben'],
  note: 'Употребляется во множественном числе (die Bewerbungsunterlagen). В Германии стандартный пакет: «der Lebenslauf» (резюме), «das Anschreiben» (сопроводительное письмо — в IT всё чаще опционально) и «Arbeitszeugnisse» / сертификаты.',
  why: {
    confidence: 'high',
    text: 'Состав: die Bewerbung («отклик на вакансию») + -s- + die Unterlagen («документы, материалы»).\nПроисхождение: Unterlagen (мн. ч. от Unterlage «подкладка, основание», к unter + liegen/legen) в деловом языке закрепилось как «документы, служащие основанием для рассмотрения дела».\nПрозрачность: прозрачно относительно Bewerbung + Unterlagen.',
    source: 'DWDS (Pfeifer), s.v. Unterlage / Bewerbungsunterlagen',
    evidence: 'Bewerbung + Fugen-s + Unterlagen («официальные документы, материалы»).'
  },
  ru_link: null
}
]});
