/* B2 theme "Berufswege". Not from an official list (there is no Goethe B2 Wortliste); curated. */
GT.register({ tab: 'it', topic: 'b2_beruf', items: [
{
  id: 'b2-beruf-werdegang', level: 'b2', pos: 'noun',
  de: 'Werdegang', article: 'der', plural: 'die Werdegänge',
  ru: 'профессиональный путь, биография (карьерная)',
  examples: [
    { de: 'Erzählen Sie uns bitte kurz etwas über Ihren beruflichen [[Werdegang]].', ru: 'Расскажите, пожалуйста, коротко о своём профессиональном пути.' },
    { de: 'Ihr [[Werdegang]] ist ungewöhnlich, aber sehr interessant.', ru: 'У вас необычный, но очень интересный путь.' }
  ],
  morph: 'Werde-gang', root: 'werden',
  parts: [['Werde-', 'основа werden — становиться'], ['Gang', 'der Gang — ход, путь (от gehen)']],
  transparency: 'figurative',
  family: ['werden', 'gehen', 'der Gang', 'der Lebenslauf'],
  meaningType: 'figurative',
  meaningExplanation: 'Слово буквально означает «путь становления» (werden + Gang) — это образ пути, перенесённый на профессиональную биографию.',
  meaningExamples: [{ de: 'beruflicher Werdegang', ru: 'профессиональный путь (биография)' }],
  note: 'Стандартная просьба на собеседовании: «Erzählen Sie etwas über Ihren Werdegang». Обычно с «beruflich». Формальнее, чем «Karriere»; в резюме раздел часто называется «Beruflicher Werdegang».',
  why: {
    confidence: 'high',
    text: 'Состав: основа глагола werden («становиться») + der Gang («ход, путь»).\nПроисхождение: сложение XIX века — буквально «путь становления», закрепившееся в значении «путь развития, профессиональная биография».\nПрозрачность: переносная, но образ «хода становления» хорошо читается.',
    source: 'DWDS (Pfeifer), s.v. Werdegang',
    evidence: 'Сложение основы werden («становиться») + der Gang («ход, путь»); засвидетельствовано с XIX в.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-laufbahn', level: 'b2', pos: 'noun',
  de: 'Laufbahn', article: 'die', plural: 'die Laufbahnen',
  ru: 'карьера, профессиональный путь',
  examples: [
    { de: 'Nach dem Studium hat sie eine [[Laufbahn]] in der IT-Sicherheit eingeschlagen.', ru: 'После учёбы она выбрала карьеру в IT-безопасности.' },
    { de: 'Das Jahr im Ausland war für ihre berufliche [[Laufbahn]] sehr wichtig.', ru: 'Год за границей был очень важен для её карьеры.' }
  ],
  morph: 'Lauf-bahn', root: 'laufen',
  parts: [['Lauf-', 'der Lauf — бег (от laufen)'], ['Bahn', 'die Bahn — дорожка, путь']],
  transparency: 'figurative',
  family: ['laufen', 'der Lauf', 'die Bahn', 'der Lebenslauf', 'verlaufen'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально Laufbahn — «беговая дорожка», но в деловом языке слово закрепилось образно в значении «карьера, профессиональный путь».',
  meaningExamples: [{ de: 'die Laufbahn im Stadion', ru: 'беговая дорожка на стадионе (буквально)' }, { de: 'eine berufliche Laufbahn einschlagen', ru: 'начать профессиональную карьеру (образно)' }],
  note: '«Eine Laufbahn einschlagen» — выбрать профессиональный путь (устойчивое выражение). Немного книжно; в разговоре говорят «Karriere» или «mein Weg». Буквально — «беговая дорожка».',
  why: {
    confidence: 'high',
    text: 'Состав: der Lauf («бег») + die Bahn («дорожка, путь»).\nПроисхождение: с XVII в. обозначало беговую дорожку или ристалище; в XVIII в. развилось переносное значение «жизненный, служебный путь» (параллельно французскому carrière, изначально тоже «дорога, ристалище»).\nПрозрачность: переносная — буквальный образ дорожки для бега хорошо заметен.',
    source: 'DWDS (Pfeifer), s.v. Laufbahn',
    evidence: 'С XVII в. — «беговая дорожка»; в XVIII в. закрепился перенос на служебный путь и карьеру.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-quereinsteiger', level: 'b2', pos: 'noun',
  de: 'Quereinsteiger', article: 'der', plural: 'die Quereinsteiger',
  ru: 'человек, пришедший в профессию из другой сферы (без профильного образования)',
  examples: [
    { de: 'Viele Kollegen im SOC sind [[Quereinsteiger]], zum Beispiel aus der Physik.', ru: 'Многие коллеги в SOC пришли из других областей, например из физики.' },
    { de: 'Als [[Quereinsteigerin]] musste sie sich vieles selbst beibringen.', ru: 'Придя из другой сферы, ей пришлось многому учиться самой.' }
  ],
  morph: 'Quer-ein-steig-er', root: 'steigen',
  parts: [['quer-', 'поперёк, сбоку'], ['ein-', 'внутрь (einsteigen — садиться, входить)'], ['steig', 'основа steigen — подниматься, входить'], ['-er', 'тот, кто совершает действие']],
  transparency: 'figurative',
  family: ['steigen', 'einsteigen', 'der Einstieg', 'der Quereinstieg', 'aufsteigen', 'der Aufstieg', 'die Quereinsteigerin'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «тот, кто заходит поперёк / сбоку» (quer + einsteigen): образ входа в профессию не по прямой учебной траектории, а из другой сферы.',
  meaningExamples: [{ de: 'als Quereinsteiger in die IT wechseln', ru: 'перейти в IT из другой профессии' }],
  note: 'В Германии традиционно важны формальные квалификации, поэтому слово звучит часто — особенно в IT: «Quereinstieg in die IT». «Quer» — поперёк. Женский род: die Quereinsteigerin.',
  why: {
    confidence: 'high',
    text: 'Состав: quer («поперёк, сбоку») + Einsteiger (от einsteigen «войти, сесть в транспорт»).\nПроисхождение: современное немецкое образование второй половины XX века — образ человека, который «садится в поезд» профессии не с начальной станции, а заходит сбоку из другой сферы.\nПрозрачность: переносная, метафора живая и понятная.',
    source: 'DWDS, s.v. Quereinsteiger',
    evidence: 'Современное сложение quer + Einsteiger (конец XX в.) для обозначения входа в профессию без стандартного начального обучения.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-weiterentwickeln', level: 'b2', pos: 'verb',
  de: 'sich weiterentwickeln', forms: { praes: 'entwickelt sich weiter', praet: 'entwickelte sich weiter', perf: 'hat sich weiterentwickelt' },
  ru: 'развиваться дальше, расти (профессионально)',
  examples: [
    { de: 'Ich möchte mich fachlich [[weiterentwickeln]], am liebsten in Richtung Incident Response.', ru: 'Я хочу расти профессионально, лучше всего в сторону Incident Response.' },
    { de: 'In der alten Firma hatte ich kaum Möglichkeiten, mich [[weiterzuentwickeln]].', ru: 'В старой фирме у меня почти не было возможностей развиваться.' }
  ],
  morph: 'weiter-ent-wickel-n', root: 'wickeln',
  parts: [['weiter-', 'дальше (отделяемая часть)'], ['ent-', 'раз-, раскрытие'], ['wickel', 'основа wickeln — заворачивать'], ['-n', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['wickeln', 'entwickeln', 'die Entwicklung', 'der Entwickler', 'die Weiterentwicklung', 'die Weiterbildung'],
  note: 'Ключевое слово для собеседований и ежегодных разговоров с начальником («Wo sehen Sie sich in fünf Jahren?»). Отделяемый: «Ich entwickle mich weiter»; с zu: «weiterzuentwickeln» (zu внутри). «Fachlich» — профессионально, «persönlich» — лично.',
  why: {
    confidence: 'high',
    text: 'Состав: weiter- («дальше») + ent- («раз-») + wickeln («заворачивать») + -n.\nПроисхождение: entwickeln буквально значило «развернуть свёрнутое». Переносное значение «развивать» закрепилось в XVIII в. — часто приводят как кальку французского développer («развёртывать»). Русское «раз-вивать» использует ту же метафору.\nПрозрачность: переносная — в обычной речи связь с wickeln («заворачивать») почти не ощущается.',
    source: 'DWDS (Pfeifer), s.v. entwickeln',
    evidence: 'Буквально «развёртывать» (ent- + wickeln); переносное «развивать» в XVIII в. связывают с влиянием фр. développer и лат. explicare.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-aufstiegsmoeglichkeit', level: 'b2', pos: 'noun',
  de: 'Aufstiegsmöglichkeit', article: 'die', plural: 'die Aufstiegsmöglichkeiten',
  ru: 'возможность карьерного роста',
  examples: [
    { de: 'In kleinen Firmen gibt es oft wenige [[Aufstiegsmöglichkeiten]].', ru: 'В маленьких фирмах часто мало возможностей для роста.' },
    { de: 'Welche [[Aufstiegsmöglichkeiten]] hätte ich in diesem Team?', ru: 'Какие возможности для роста у меня были бы в этой команде?' }
  ],
  morph: 'Aufstieg-s-möglich-keit', root: 'steigen',
  parts: [['Aufstieg', 'der Aufstieg — подъём (от aufsteigen)'], ['-s-', 'соединительный элемент (Fugen-s)'], ['möglich', 'возможный'], ['-keit', 'прилагательное → существительное, всегда die']],
  transparency: 'figurative',
  family: ['steigen', 'aufsteigen', 'der Aufstieg', 'möglich', 'die Möglichkeit', 'befördert werden', 'die Beförderung'],
  meaningType: 'figurative',
  meaningExplanation: 'Пространственный образ «подъёма вверх» (Aufstieg — восхождение), перенесённый на продвижение по карьерной лестнице.',
  meaningExamples: [{ de: 'gute Aufstiegsmöglichkeiten in der Firma', ru: 'хорошие перспективы карьерного роста в компании' }],
  note: 'Чаще во мн. ч. Связанные глаголы: «beruflich aufsteigen» — расти по службе, «befördert werden» — получить повышение. -s- в середине — соединительный звук (Fugen-s), частый после -stieg, -ung, -heit, -keit.',
  why: {
    confidence: 'high',
    text: 'Состав: der Aufstieg («подъём») + соединительное -s- + die Möglichkeit («возможность»).\nПроисхождение: Aufstieg — отглагольное существительное от aufsteigen («подниматься вверх»), переносно обозначающее карьерный рост; -s- — соединительный элемент без самостоятельного значения.\nПрозрачность: переносная (метафора подъёма вверх), но состав полностью понятен.',
    source: 'DWDS (Pfeifer), s.v. Aufstieg / möglich',
    evidence: 'Сложение Aufstieg (от aufsteigen «подниматься») + Fugen-s + Möglichkeit (от möglich, к mögen).'
  },
  ru_link: null
},
{
  id: 'b2-beruf-gehaltsverhandlung', level: 'b2', pos: 'noun',
  de: 'Gehaltsverhandlung', article: 'die', plural: 'die Gehaltsverhandlungen',
  ru: 'переговоры о зарплате',
  examples: [
    { de: 'Vor der [[Gehaltsverhandlung]] habe ich mir die üblichen Gehälter in der Branche angeschaut.', ru: 'Перед переговорами о зарплате я посмотрел обычные зарплаты в отрасли.' },
    { de: 'In der [[Gehaltsverhandlung]] sollte man eine konkrete Zahl nennen.', ru: 'На переговорах о зарплате стоит называть конкретную цифру.' }
  ],
  morph: 'Gehalt-s-verhandl-ung', root: 'handeln',
  parts: [['Gehalt', 'das Gehalt — зарплата, оклад'], ['-s-', 'соединительный элемент (Fugen-s)'], ['verhandl', 'основа verhandeln — вести переговоры'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['das Gehalt', 'die Gehälter', 'verhandeln', 'die Verhandlung', 'handeln'],
  note: '«Das Gehalt» (мн. ч. Gehälter) — месячный оклад в офисе; «der Lohn» — зарплата, часто почасовая. В Германии обсуждают годовую сумму брутто: «Jahresgehalt brutto». Осторожно: «der Gehalt» (мужской род) — содержание, например «der Alkoholgehalt».',
  why: {
    confidence: 'high',
    text: 'Состав: das Gehalt («оклад») + -s- + die Verhandlung («переговоры»).\nПроисхождение: Gehalt исторически образовано от глагола halten («держать, содержать»): сначала «содержание» (ср. der Gehalt «содержание вещества»), затем с XVIII в. в среднем роде — «денежное содержание, оклад». verhandeln — от handeln («вести дела»).\nПрозрачность: сложение прозрачное, хотя историческая связь Gehalt с halten сегодня уже неочевидна.',
    source: 'DWDS (Pfeifer), s.v. Gehalt / verhandeln',
    evidence: 'Gehalt < halten/behalten («содержание» → «оклад» в среднем роде с XVIII в.); verhandeln от handeln.'
  },
  ru_link: null
},
{
  id: 'b2-beruf-fachkraft', level: 'b2', pos: 'noun',
  de: 'Fachkraft', article: 'die', plural: 'die Fachkräfte',
  ru: 'квалифицированный специалист',
  examples: [
    { de: 'In der IT-Sicherheit fehlen überall [[Fachkräfte]].', ru: 'В IT-безопасности везде не хватает специалистов.' },
    { de: 'Die Firma sucht eine [[Fachkraft]] für Informationssicherheit.', ru: 'Фирма ищет специалиста по информационной безопасности.' }
  ],
  morph: 'Fach-kraft', root: 'Fach · Kraft',
  parts: [['Fach', 'das Fach — предмет, специальность'], ['Kraft', 'die Kraft — сила; здесь: работник']],
  transparency: 'figurative',
  family: ['das Fach', 'fachlich', 'der Fachmann', 'die Kraft', 'die Arbeitskraft', 'der Fachkräftemangel'],
  note: 'Всегда женского рода (die Fachkraft), даже о мужчине. «Der Fachkräftemangel» — нехватка специалистов — постоянная тема в немецких новостях и политике. В вакансиях: «Fachkraft für …».',
  why: {
    confidence: 'high',
    text: 'Состав: das Fach («специальность») + die Kraft («сила», в сложениях — «работник»).\nПроисхождение: das Fach изначально значило «отделение, полка, отсек» и переносно стало обозначать отдельную область знаний или специальность. Вторая часть -kraft в сложениях (Arbeitskraft, Lehrkraft, Fachkraft) метонимически называет самого работника.\nПрозрачность: переносная — обе части употреблены в развившихся переносных значениях.',
    source: 'DWDS (Pfeifer), s.v. Fach / Kraft',
    evidence: 'Fach «отсек, полка» → «специальность»; -kraft — метонимия «рабочая сила → работник».'
  },
  ru_link: null
},
{
  id: 'b2-beruf-selbststaendig', level: 'b2', pos: 'phrase',
  de: 'sich selbstständig machen', forms: { praes: 'macht sich selbstständig', praet: 'machte sich selbstständig', perf: 'hat sich selbstständig gemacht' },
  ru: 'открыть своё дело, начать работать на себя',
  examples: [
    { de: 'Nach zehn Jahren im Konzern hat er sich als Berater [[selbstständig gemacht]].', ru: 'После десяти лет в корпорации он начал работать на себя как консультант.' },
    { de: 'Viele Pentester [[machen sich]] irgendwann [[selbstständig]].', ru: 'Многие пентестеры рано или поздно уходят во фриланс.' }
  ],
  morph: 'selbst-ständ-ig', root: 'stehen',
  parts: [['selbst', 'сам'], ['ständ', 'от stehen / Stand — стоять'], ['-ig', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['selbst', 'stehen', 'die Selbstständigkeit', 'der/die Selbstständige', 'der Freiberufler'],
  note: 'Пишется и «selbständig». В вакансиях «selbstständig arbeiten» значит «работать самостоятельно», а не «быть ИП»! «Der Freiberufler» — фрилансер (особый налоговый статус в Германии).',
  why: {
    confidence: 'high',
    text: 'Состав: selbst («сам») + -ständig (от stehen «стоять») + -ig.\nПроисхождение: прилагательное закрепилось в XVIII в. в значении «опирающийся на самого себя, независимый»; отсюда деловой оборот sich selbstständig machen («начать своё дело»). Русское «самостоятельный» построено по той же внутренней форме.\nПрозрачность: переносная — образ «стоять самому» хорошо просматривается.',
    source: 'DWDS (Pfeifer), s.v. selbstständig',
    evidence: 'Образование XVIII в. из selbst + -ständig (к stehen/Stand) со значением «независимый, опирающийся на себя».'
  },
  ru_link: { type: 'shared_ancient_root', text: '«самостоятельный» устроен так же: сам + стоять, как selbst + stehen. Корни «стоять» и stehen родственны (индоевропейское *steh₂-) — надёжно установленное родство.' }
}
]});
