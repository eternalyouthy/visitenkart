/* Editorial pass 02: sense evidence, source scope and spelling-aware morphology. */
(function (E) {
  'use strict';
  const date = '2026-11-23';
  const OUP = 'https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/';
  Object.values(E.entries).forEach(w => {
    w.courseLevel = w.cefr.level;
    if (w.cefr.status === 'referenced') w.cefr.scope = 'sense';
  });
  const rating = (word, pos, sense, level, evidence, path = word) => {
    const w = E.entries[E.id(word, pos, sense)];
    if (!w) throw new Error('Unknown sense in editorial audit: ' + word + '/' + sense);
    const url = path.startsWith('https://') ? path : E.dictionary(path);
    w.cefr = { level, status: 'referenced', scope: 'sense', source: { title: 'Cambridge Dictionary', url, evidence, checked: date } };
  };
  /* Each row is manually matched to the selected meaning and part of speech. */
  const rows = `
actor|n|main|A2|Профессия актёра: IN THEATRE, FILM, ETC.
form|v|main|B2|Начать существовать или создать группу: form a team. Не B1 «составлять часть/основу» и не общий уровень слова из списка Oxford.
react|v|main|B2|Ответ действием или чувством на событие: SAY/DO.
reaction|n|main|B2|Реакция на событие: BEHAVIOUR, не химическая реакция.
interaction|n|main|C1|Общение или взаимное действие двух участников. Не наследует B2 от interact.
form|n|shape|C1|SHAPE: форма или внешний вид. A2 DOCUMENT — отдельное значение.
formation|n|main|C2|Формирование, возникновение: development of something into a thing or shape.
formal|adj|main|C1|OFFICIAL: официальное приглашение; B2 SERIOUS относится к языку, одежде и поведению.
formally|adv|main|C1|OFFICIALLY: официальное одобрение или объявление.
informal|adj|main|B2|Неофициальное, непринуждённое общение.
reform|v|main|C2|Улучшать устройство системы; не re-form со значением сформировать снова.
reform|n|change|C2|Изменение системы к лучшему, IMPROVEMENT.
transformation|n|main|C1|Полное изменение вида или характера; отдельная метка существительного.
format|n|main|C1|Компьютерный формат организации и хранения информации.
employment|n|main|B1|WORK: оплачиваемая работа в организации.
development|n|main|B1|START: разработка нового продукта; не B2 new developments — новые события.
developer|n|main|C1|OF PRODUCT: создатель компьютерного продукта; не C2 застройщик.
developed|adj|main|B2|Развитый, продвинутый: advanced or powerful.
developing|adj|main|B2|О развивающихся странах; пример и перевод уточнены под это значение.
redevelop|v|main|C1|Преобразовывать городскую территорию заменой старой застройки.
redevelopment|n|main|C1|Процесс реконструкции городской территории.
manager|n|main|A2|PERSON: руководитель организации или подразделения.
management|n|main|B2|CONTROL: управление организацией; не просто manager + общий семейный уровень.
decision|n|main|B1|CHOICE: принятое после обдумывания решение.
decisive|adj|main|C1|Сильно определяющий результат: решающий тест.
decisive|adj|person|B2|Быстро и уверенно принимающий решения человек.
decisively|adv|main|C2|Действовать быстро, эффективно и уверенно; отдельная метка наречия.
information|n|main|A2|Фактические сведения; неисчисляемое существительное.
informative|adj|main|C1|Предоставляющий много полезной информации.
communication|n|main|B1|Общение, процесс передачи информации.
creation|n|main|B2|Акт создания или созданный результат; здесь job creation.
creative|adj|main|B1|Использующий оригинальные, необычные идеи.
creatively|adv|main|B2|Способ действия с использованием оригинальных идей.
creativity|n|main|B2|Способность создавать или использовать оригинальные идеи.
education|n|main|B1|Образование как обучение и полученные знания.
educational|adj|main|B2|Относящийся к образованию или дающий знания.
educated|adj|main|B2|Получивший образование и обладающий знаниями.
organization|n|main|B1|GROUP: организация как группа людей с общей целью.
organization|n|process|B1|ARRANGEMENT: подготовка и организация мероприятия; SYSTEM C1 — другое значение.
organizer|n|main|B2|Человек или группа, организующие событие.
organized|adj|main|B2|Организованный человек, умеющий планировать и не терять время.|https://dictionary.cambridge.org/dictionary/learner-english/organized
disorganized|adj|main|B2|Плохо спланированный, лишённый порядка.
reorganize|v|main|C1|Заново организовать ради улучшения.
apply|v|main|B1|REQUEST: официально подавать заявление, apply for a position.
application|n|main|B1|REQUEST: официальная заявка или заявление.
application|n|software|B2|COMPUTER: прикладная программа.
application|n|use|C2|USE: практическое применение; не заявка и не программа.
agree|v|main|A2|Совпадать во мнении с собеседником.
agreement|n|main|B2|Договорённость между сторонами; не наследует A2 глагола agree.
disagree|v|main|B1|Не разделять мнение.
disagreement|n|main|B2|Разногласие или спор по вопросу.
different|adj|main|A1|Отличающийся, не тот же самый; опорная основа семейства.
difference|n|main|A2|NOT THE SAME: различие сравниваемых вариантов.
differently|adv|main|B1|Иным способом, не так же.
indifferent|adj|main|C2|NOT INTERESTED: безразличный, не заинтересованный.
indifference|n|main|C2|Отсутствие интереса, безразличие.
dependent|adj|main|B2|Нуждающийся в ком-либо или чём-либо для продолжения работы.
dependence|n|main|C2|Необходимость полагаться на поставщика для продолжения работы.
independent|adj|main|B2|INFLUENCE: не подверженный влиянию, независимая проверка.|https://dictionary.cambridge.org/dictionary/learner-english/independent
independence|n|main|B2|Самостоятельность, отсутствие необходимости в чужой финансовой помощи.
independently|adv|main|B2|Без контроля или влияния других участников.
relation|n|main|B2|CONNECTION: связь между явлениями; B1 родственник — другое значение.
relationship|n|main|B1|BEHAVIOUR: отношения и поведение людей друг с другом.
unrelated|adj|main|C1|Не имеющий связи с другим событием.
relative|n|person|B1|Родственник, член семьи.
relative|adj|main|C1|COMPARING: оцениваемый в сравнении с другим вариантом.
relatively|adv|main|B2|Сравнительная степень свойства.
protective|adj|main|B2|Защитный предмет одежды; не C1 стремление опекать человека.
secure|adj|main|B2|SAFE: защищённый от опасности.|https://dictionary.cambridge.org/dictionary/learner-english/secure
insecure|adj|main|C2|NOT SAFE: незащищённая система или ситуация.
insecure|adj|feeling|C1|NOT CONFIDENT: неуверенный в себе человек.
response|n|main|B2|Ответ или реакция на обращение.
preparation|n|main|B1|GETTING READY: процесс подготовки.
prepared|adj|main|B1|Готовый справиться с ситуацией; не B2 willing to do.
success|n|main|B1|Достижение желаемого результата.
successful|adj|main|B1|ACHIEVEMENT: достигший нужного результата.|https://dictionary.cambridge.org/dictionary/learner-english/successful
successfully|adv|main|B2|Способ действия с достижением результата.
unsuccessful|adj|main|B2|Не достигший ожидаемого результата.
unsuccessfully|adv|main|C1|Действие, не давшее ожидаемого результата.
performance|n|main|B1|ENTERTAINMENT: сценическое выступление.
performance|n|system|B2|ACTIVITY: насколько хорошо система выполняет работу.
performer|n|main|B1|ENTERTAIN: артист или исполнитель на сцене.
support|n|help|B1|HELP: эмоциональная или практическая помощь.
supporter|n|main|B2|Сторонник идеи или группы; B1 болельщик — отдельное употребление.
product|n|main|B1|THING MADE: продукт, изготовленный для продажи.
production|n|main|B2|MAKING: процесс производства товаров.
producer|n|main|C1|MAKER: производитель товаров; не B2 продюсер фильма или записи.
productive|adj|main|B2|Дающий полезный или значительный результат.
productivity|n|main|C1|Соотношение результата производства и затраченных ресурсов.
unproductive|adj|main|C1|Не дающий положительных результатов; unproductive meeting.
reproduction|n|main|C1|COPY: процесс копирования; не C2 биологическое размножение.
construction|n|main|B2|BUILDING: строительство.
constructive|adj|main|C1|Совет или критика, направленные на улучшение.
definition|n|main|B2|EXPLANATION: точное определение значения слова.
definite|adj|main|B2|Точно установленный, определённый ответ.
definitely|adv|main|B1|Без сомнения, определённо.
indefinitely|adv|main|C2|На срок без установленной даты окончания.
explanation|n|main|B1|Подробности или причины, делающие что-либо понятным.
expression|n|main|B2|SHOWING: выражение мысли или чувства.
expression|n|phrase|B2|WORDS: слово или оборот, употребляемый в ситуации.
expressive|adj|main|C2|Показывающий мысли или чувства, например голос.
consideration|n|main|B2|CAREFUL THINKING: внимательное рассмотрение вопроса.
considerably|adv|main|B2|В значительной, заметной степени.
inconsiderate|adj|main|C1|Не учитывающий чувства других людей.
reconsider|v|main|C1|Повторно обдумать решение с возможностью его изменить.
user|n|main|B1|Пользователь продукта, устройства или сервиса.
useful|adj|main|A2|Помогающий достичь цели.
usefulness|n|main|C1|Качество или состояние полезности.
useless|adj|main|B1|Не приносящий нужной пользы.
misuse|v|main|C1|Использовать неподходящим или не предусмотренным способом.
care|v|verb|B1|WORRY: считать важным, быть заинтересованным в качестве работы.
careful|adj|main|A2|Внимательный и осторожный, чтобы не сделать ошибку.
carefully|adv|main|A2|С большим вниманием.
careless|adj|main|B1|NO ATTENTION: недостаточно внимательный.
carelessly|adv|main|B2|NO ATTENTION: небрежным способом.
caring|adj|main|B2|Добрый и оказывающий эмоциональную поддержку.
carefree|adj|main|C2|Не имеющий забот, не тревожащийся; не careless.
comfortable|adj|main|A2|CLOTHES/FURNITURE: удобный предмет мебели.
uncomfortable|adj|main|B1|Не обеспечивающий физического комфорта.
uncomfortably|adv|main|C1|Вызывающим неприятные ощущения способом или в такой степени.
discomfort|n|main|C1|Физическое или психическое неприятное ощущение.
comforting|adj|main|C2|Уменьшающий печаль или тревогу.
irresponsible|adj|main|B2|Недостаточно учитывающий последствия своих действий.
possibly|adv|main|A2|NOT CERTAIN: неопределённая возможность; не усилительная модель с can/could.
possibility|n|main|B1|Вероятность того, что событие случится.
impossible|adj|main|B1|Не способный случиться или быть выполненным.
impossibility|n|main|C2|Состояние невозможности или невозможная вещь.
irregular|adj|main|B2|TIME/SPACE: без регулярного расписания.
irregular|adj|grammar|B1|RULE: не следующий обычным грамматическим правилам.
helpful|adj|main|B1|Готовый помочь или полезный.
helper|n|main|B2|Человек, помогающий выполнить деятельность.
unhelpful|adj|main|C1|Не улучшающий затруднительную ситуацию.
helpless|adj|main|C1|Не способный помочь себе или другим.
valuable|adj|main|B2|USEFUL: ценные сведения; не B1 дорогой предмет.|https://dictionary.cambridge.org/dictionary/learner-english/valuable
respectful|adj|main|C1|HONOUR: проявляющий вежливость и уважение.
respectfully|adv|main|C2|POLITE: вежливым, уважительным способом.
disrespect|n|main|C1|Отсутствие уважения.
disrespectful|adj|main|C2|Проявляющий неуважение.
respected|adj|main|B2|Пользующийся уважением за качества или достижения.
respective|adj|main|C1|Соответствующий каждому из упомянутых участников.
appointment|n|main|A2|ARRANGEMENT: запись или договорённость о встрече.
arrangement|n|main|B1|PLAN: договорённость о том, как что-либо произойдёт.
opportunity|n|main|B1|Благоприятная ситуация для действия, а не личная способность.
experience|n|main|B1|KNOWLEDGE: опыт, полученный в деятельности.
advice|n|main|A2|Совет о том, как поступить; неисчисляемое существительное.
effort|n|main|B1|ENERGY: затрачиваемые усилия.
purpose|n|main|B1|Причина действия или назначение предмета.
advantage|n|main|B1|USEFUL THING: положительная сторона ситуации.
disadvantage|n|main|B1|Условие, создающее трудности или сниженное преимущество.
challenge|n|main|B1|DIFFICULT JOB: задача, требующая усилий.
solution|n|main|B1|ANSWER: решение проблемы, не химический раствор.
suggestion|n|main|B1|Предложенная идея или план.
choice|n|main|B1|ACT: возможность или акт выбора.
attitude|n|main|B1|OPINION: отношение или настрой.
behaviour|n|main|B1|Поведение человека или животного.
confidence|n|main|B2|CERTAINTY: уверенность в собственных способностях.
concern|n|main|B2|WORRY: опасение или повод для беспокойства.
reliable|adj|main|B1|Надёжный, заслуживающий доверия источник.
convenient|adj|main|B1|Подходящий по времени и обстоятельствам.
aware|adj|main|B2|Осведомлённый о существовании риска или изменении.
requirement|n|main|B2|Обязательное условие или необходимая вещь.
priority|n|main|B2|Вопрос, требующий первоочередного внимания.
feedback|n|main|B2|OPINION: сведения и мнения для оценки результата.
colleague|n|main|A2|Один из совместно работающих людей.
supplier|n|main|B2|Поставщик необходимых товаров или услуг.
customer|n|main|A2|Покупатель товаров или услуг.
contract|n|main|B1|Документированное соглашение сторон, не глагол contract.
budget|n|main|B2|План доходов и расходов.
schedule|n|main|B2|Список дел с запланированным временем.
proposal|n|main|B2|Предложение на рассмотрение, иногда письменное.
progress|n|main|B1|Продвижение к более развитому состоянию.
issue|n|main|B1|PROBLEM: обсуждаемый вопрос или проблема.
task|n|main|B2|WORK: работа или задача, которую нужно выполнить.
request|n|main|B1|Официальная или вежливая просьба.
approve|v|main|B1|AGREE: официально разрешить или принять; не approve of.
confirm|v|main|B1|MAKE CERTAIN: подтвердить договорённость о дате.
postpone|v|main|B1|Перенести событие на более позднее время.
clarify|v|main|C1|EXPLAIN: прояснить дополнительными деталями.
access|n|main|B1|RIGHT: право или возможность пользоваться ресурсом.
permission|n|main|B1|Разрешение сделать действие.
network|n|main|B2|Система связанных компонентов для связи или движения.
device|n|main|B2|MACHINE: устройство с конкретным назначением.
threat|n|main|B2|DAMAGE: возможный источник вреда, а не только словесная угроза.
incident|n|main|B2|Необычное или неприятное событие.
evidence|n|main|B2|Сведения, дающие основания считать утверждение истинным.
update|n|main|B2|Новая версия ранее существовавшего продукта; не B1 глагол сообщать новости.
restore|v|main|B2|Возвращать в прежнее хорошее состояние.
verify|v|main|C1|Убедиться в истинности или правильности сведений.
restrict|v|main|C1|Ограничить доступ или действие.
investigate|v|main|B2|Тщательно изучить происшествие, чтобы установить факты.
figure out|phr|main|B2|Понять после размышления или найти решение; не физическое вычисление фигуры.|figure-out
carry out|phr|main|B1|Выполнить поручение или завершить работу.|https://dictionary.cambridge.org/dictionary/learner-english/carry-out-sth
put off|phr|main|B1|Отложить событие; модель put off doing.|put-off
look into|phr|main|B2|Изучить факты о проблеме.|look-into
look after|phr|main|A2|Присматривать за человеком, животным или вещью.|look-after
deal with|phr|main|B1|TAKE ACTION: заняться проблемой; B2 работа с клиентами — другое употребление.|deal-with
come up with|phr|main|B2|Придумать или предложить идею.|come-up-with
run out of|phr|main|B1|USE: израсходовать запас, после of идёт объект.|https://dictionary.cambridge.org/dictionary/learner-english/run-out
get back to|phr|main|C1|Позднее связаться с человеком, чтобы ответить или сообщить сведения.|get-back-to
follow up|phr|main|B2|Узнать больше или предпринять последующие действия.|follow-up
back up|phr|main|B2|Создать дополнительную копию компьютерных данных; не C2 подкрепить утверждение.|back-up
break down|phr|main|B1|MACHINE: перестать работать.|https://dictionary.cambridge.org/dictionary/learner-english/break-down
work out|phr|main|B2|CALCULATE: вычислить стоимость; не C2 понять причины.|work-out
point out|phr|main|B2|Сообщить детали, на которые собеседник мог не обратить внимания.|point-out
turn down|phr|main|B2|Отказаться от предложения или отклонить запрос.|turn-down
hand over|phr|main|B2|Передать предмет другому человеку.|hand-over
keep up with|phr|main|B2|Успевать за темпом изменений, не отставать.|keep-up-with
pay attention|chunk|main|B1|Внимательно смотреть, слушать или обдумывать.|pay-attention-to
take into account|chunk|main|B2|Учитывать обстоятельство при оценке.|https://dictionary.cambridge.org/dictionary/learner-english/account
as far as I know|chunk|main|B2|Оговорка об ограниченности собственных сведений.|as-so-far-as-i-know
in advance|chunk|main|B1|До назначенного времени или до действия.|in-advance
at the moment|chunk|main|A2|Сейчас, в текущий момент.|at-the-moment
so far|chunk|main|B1|До настоящего момента.|so-far
in the meantime|chunk|main|B2|В промежутке до ожидаемого события.|meantime
reconstruct|v|main|C2|Восстанавливать описание прошлого по сведениям; не C1 строить заново.|reconstruct
reconstruction|n|main|C2|Воссозданное описание события; не C1 восстановление разрушенных построек.|reconstruction
respectable|adj|main|C2|ENOUGH: достаточно хороший уровень дохода; не B2 общественно приемлемое поведение.|respectable
`;
  rows.trim().split('\n').forEach(line => rating(...line.split('|')));

  const edit = (word, pos, sense, values) => Object.assign(E.entries[E.id(word, pos, sense)], values);
  edit('activity', 'n', 'main', { ru: 'занятие для досуга', semantic: 'активность → отдельное занятие для досуга' });
  edit('formal', 'adj', 'main', { ru: 'официальный', semantic: 'форма и установленный порядок → официальный характер' });
  edit('form', 'n', 'shape', { ru: 'очертания, внешний облик', semantic: 'внешний облик предмета или человека',
    examples: [{ en: 'In the dim light, I could only see her [[form]].', ru: 'В тусклом свете я мог различить только её очертания.' }],
    usage: 'Здесь различимый облик, силуэт: SHAPE. Бланк и грамматическая форма имеют отдельные карточки.' });
  edit('organization', 'n', 'process', { ru: 'организация мероприятия', semantic: 'организовывать → подготовка и проведение мероприятия' });
  edit('supporter', 'n', 'main', { ru: 'сторонник идеи или организации' });
  edit('work out', 'phr', 'main', { ru: 'вычислить, рассчитать', semantic: 'получить ответ путём вычисления' });
  edit('informed', 'adj', 'main', { ru: 'основанный на достаточных сведениях', semantic: 'сообщать сведения → учитывающий нужную информацию', usage: 'An informed choice/decision — обоснованный выбор на основе информации. Об осведомлённом человеке нужен другой контекст.' });
  edit('insecurity', 'n', 'main', { ru: 'нестабильность, отсутствие защищённости', semantic: 'безопасность → отсутствие устойчивого безопасного положения', usage: 'Financial insecurity — финансовая нестабильность. Личная неуверенность — другое значение; C2 из LACK OF CONFIDENCE сюда не перенесён.' });
  edit('respectable', 'adj', 'main', { ru: 'вполне приличный, достаточно хороший', semantic: 'оценка приемлемости → достаточно хороший уровень дохода' });
  edit('valuable', 'adj', 'main', { ru: 'ценный, полезный', semantic: 'ценность → полезность сведений' });
  edit('helpful', 'adj', 'main', { ru: 'полезный, помогающий', semantic: 'помощь → помогающий решить задачу' });
  edit('hand over', 'phr', 'main', { ru: 'передать предмет другому человеку' });
  edit('responder', 'n', 'main', { ru: 'сотрудник экстренного реагирования — в first responder', usage: 'Здесь изучается сочетание first responder. Отдельное responder шире: тот, кто отвечает или реагирует. Словарный уровень всего сочетания не установлен.' });
  edit('developing', 'adj', 'main', { ru: 'развивающийся — о стране', examples: [{ en: 'Demand is rising in [[developing]] countries.', ru: 'Спрос растёт в развивающихся странах.' }] });
  edit('meet a deadline', 'chunk', 'main', { examples: [{ en: 'We can still [[meet the deadline]] if we start today.', ru: 'Мы ещё можем уложиться в установленный срок, если начнём сегодня.' }], usage: 'В словаре сочетание задаётся как meet a deadline. В конкретном контексте употребляется the deadline; cloze принимает именно форму предложения.' });
  edit('comfort', 'n', 'main', { examples: [{ en: 'The seats provide extra [[comfort]] on long journeys.', ru: 'Эти сиденья обеспечивают дополнительный комфорт в долгих поездках.' }] });
  edit('considerate', 'adj', 'main', { examples: [{ en: 'It was [[considerate]] of you to warn us.', ru: 'Было очень внимательно с твоей стороны предупредить нас.' }] });
  edit('disinformation', 'n', 'main', { examples: [{ en: 'The investigation exposed a [[disinformation]] campaign.', ru: 'Расследование выявило кампанию намеренного распространения ложной информации.' }] });
  edit('mismanage', 'v', 'main', { examples: [{ en: 'Weak controls allow officials to [[mismanage]] public funds.', ru: 'Слабый контроль позволяет должностным лицам неэффективно распоряжаться бюджетными средствами.' }] });

  const parts = {
    activity: ['activ-', '-ity'], inactivity: ['in-', 'activ-', '-ity'], activate: ['activ-', '-ate'], activation: ['activat-', '-ion'],
    manager: ['manag-', '-er'], creativity: ['creativ-', '-ity'], educated: ['educat-', '-ed'], organized: ['organiz-', '-ed'],
    applied: ['appli-', '-ed'], related: ['relat-', '-ed'], prepared: ['prepar-', '-ed'], productivity: ['productiv-', '-ity'],
    defined: ['defin-', '-ed'], considerably: ['considerab-', '-ly'], user: ['us-', '-er'], usable: ['us-', '-able'],
    usability: ['usabil-', '-ity'], caring: ['car-', '-ing'], comfortably: ['comfortab-', '-ly'], uncomfortably: ['un-', 'comfortab-', '-ly'],
    responsibility: ['responsibil-', '-ity'], responsibly: ['responsib-', '-ly'], irresponsibly: ['ir-', 'responsib-', '-ly'],
    possibly: ['possib-', '-ly'], possibility: ['possibil-', '-ity'], impossibly: ['im-', 'possib-', '-ly'], valuable: ['valu-', '-able'],
    definition: ['definit-', '-ion'], response: ['response']
  };
  Object.values(E.entries).forEach(w => {
    if (parts[w.headword]) w.morphology.parts = parts[w.headword].slice();
    if (w.headword === 'response') w.usage = 'Respond и response — лексически связанные формы с разными основами. Конечное -e не выдаётся за продуктивный суффикс английского словообразования.';
    if (w.headword === 'definition') w.usage = 'Основа definit- в definition отличается от define. Это освоенная форма семейства, не свободное правило добавления -ition к любому глаголу.';
    if (w.headword === 'manager' || w.headword === 'user') w.usage = 'Перед -er конечное немое e основы не повторяется: manage → manager, use → user.';
    if (w.headword === 'management') w.usage = 'Manage + -ment сохраняет конечное e основы: management. Обычно название процесса неисчисляемое; management также может называть руководство компании.';
    if (w.headword === 'explained') { w.entryKind = 'inflected-form'; w.usage = 'В этом предложении explained — past participle в пассивной конструкции. Это не самостоятельный B2-дериват; словарный уровень глагола explain нельзя автоматически объявлять уровнем отдельного прилагательного.'; }
    if (w.headword === 'format' && w.pos === 'n') w.morphology.parentId = null;
    const parent = E.entries[w.morphology.parentId];
    const label = w.morphology.parts.length === 1 && w.morphology.parentId ? 'Лексическая связь; свободное словообразовательное правило не утверждается.' : 'Показаны части написанной формы; изменения основы и продуктивность рассматриваются отдельно.';
    w.morphology.note = `${parent ? `Учебная связь: ${parent.headword} → ${w.headword}. ` : ''}${label} ${w.usage}`;
  });

  const manualSources = {
    'responder': ['https://dictionary.cambridge.org/dictionary/english/first-responder', 'Сочетание first responder — специалист, прибывающий первым при происшествии; отдельный responder имеет более широкое значение.'],
    're-create': ['https://dictionary.cambridge.org/pronunciation/english/recreate', 'Различены recreate в значении воссоздать и recreate в значении отдыхать; совпадение написания не объединяет значения.'],
    'dependency': ['https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file/', 'Зависимость программного проекта — необходимый пакет; значение сверено по документации npm, а не по словарной статье о зависимых территориях.'],
    'take responsibility': [E.dictionary('responsibility'), 'Проверено сочетание take responsibility for; уровень отдельного слова не объявляется уровнем всего блока.'],
    'raise awareness': [E.dictionary('awareness'), 'В статье приведена модель build/increase/raise awareness; существительное awareness не означает предупреждение системы.'],
    'gain experience': ['https://dictionary.cambridge.org/us/thesaurus/gain', 'Gain experience — постепенно получать опыт; сочетание проверено как модель употребления.'],
    'solve a problem': ['https://dictionary.cambridge.org/dictionary/learner-english/solve', 'В статье дана модель solve a problem; это не make a decision.'],
    'reach an agreement': [E.dictionary('come-to-an-arrangement'), 'Reach an agreement обозначает достижение договорённости между сторонами.'],
    'provide feedback': [E.dictionary('feedback'), 'Give/provide feedback — предоставить сведения и мнение для улучшения результата.'],
    'conduct an investigation': [E.dictionary('conduct'), 'Conduct в значении организованно проводить деятельность сочетается с investigation.'],
    'assess the risk': [E.dictionary('assess'), 'Оценить характер и величину риска; уровень всего сочетания отдельно не установлен.'],
    'grant access': [E.dictionary('grant'), 'Grant — официально предоставить разрешение или возможность; access — доступ к ресурсу.'],
    'revoke access': [E.dictionary('revoke'), 'Revoke — официально отозвать ранее выданное разрешение.'],
    'confirm receipt': [E.dictionary('receipt'), 'Receipt здесь получение; confirm receipt — подтвердить, что сообщение или предмет получены.'],
    'draw a conclusion': [E.dictionary('conclusion'), 'В статье приведены модели reach/come to/draw a conclusion.'],
    'set priorities': [E.dictionary('priority'), 'Set priorities — определить порядок первоочередных задач; не приписывается отдельная словарная метка фразе.'],
    'keep a record': [E.dictionary('keep-a-diary-an-account-a-record-etc'), 'Keep a record of — сохранять письменные сведения о событиях или операциях.'],
    'as far as I know': [E.dictionary('as-so-far-as-i-know'), 'Оговорка об ограниченности сведений говорящего.'],
    'in my opinion': ['https://dictionary.cambridge.org/grammar/british-grammar/opinion', 'Грамматический справочник подтверждает вводную модель in my opinion.'],
    'it depends on': [E.dictionary('depending'), 'Depends on вводит условие, от которого зависит результат.'],
    'in the meantime': [E.dictionary('meantime'), 'Временной промежуток до ожидаемого события.'],
    'let me check': ['https://dictionary.cambridge.org/grammar/british-grammar/let', 'Let + объект + инфинитив без to: предложение дать говорящему возможность проверить.'],
    'could you clarify': [E.dictionary('clarify'), 'Модель вежливой просьбы с could you; слово clarify само по себе имеет отдельную CEFR-метку.'],
    'just to confirm': [E.dictionary('confirm'), 'To confirm задаёт цель краткого уточнения договорённости; не отдельная словарная CEFR-единица.'],
    'that makes sense': [E.dictionary('make-sense'), 'Make sense — быть понятным или логичным; подлежащее и время не создают новую идиому.'],
    'I see your point': [E.dictionary('point'), 'See someone’s point — понять мысль или довод; это не обязательно согласие.'],
    'would you mind': ['https://dictionary.cambridge.org/grammar/british-grammar/mind', 'Would you mind + -ing — вежливая просьба; не используется to-infinitive.'],
    'please let me know': ['https://dictionary.cambridge.org/grammar/british-grammar/word-choice-when-or-if', 'Let me know if... — просьба сообщить при возможном изменении; после let инфинитив без to.'],
    'thanks for pointing that out': [E.dictionary('thank'), 'Модель thank someone for doing соединяется с проверенным point something out; уровень всего блока не наследуется от thank.'],
    'I will keep you updated': [E.dictionary('keep-informed'), 'Keep someone informed — держать в курсе; updated передаёт регулярное предоставление свежих сведений в той же конструкции.']
  };
  Object.assign(manualSources, {
    underdeveloped: [E.dictionary('underdeveloped'), 'В Business English есть значение недостаточно продвинутый или развитый по сравнению с возможным/ожидаемым. Метка C2 из раздела о странах сюда не переносится.'],
    insecurity: [E.dictionary('insecurity'), 'В American Dictionary: чувство отсутствия устойчивости или безопасности, включая economic insecurity. Не C2 из LACK OF CONFIDENCE.'],
    account: [E.dictionary('user-account'), 'Business English определяет user account как возможность пользоваться компьютерной системой или сайтом. Уровень банковского счёта не переносится на это значение.'],
    supported: [E.dictionary('technical-support'), 'В контексте версии ПО речь о предоставлении технической поддержки производителем; отдельной CEFR-метки у participial adjective нет.'],
    unsupported: ['https://help.bitsighttech.com/hc/en-us/articles/360010354773-What-is-the-difference-between-supported-and-unsupported-software', 'Источник различает ПО с поддержкой производителя и ПО, для которого такая поддержка закончилась. Это профессиональное значение, без собственной словарной CEFR-метки.']
  });
  const constructedExpressions = new Set(['let me check', 'could you clarify', 'just to confirm', 'I see your point', 'please let me know', 'thanks for pointing that out', 'I will keep you updated', 'it depends on']);
  const needsFurtherSenseCheck = new Set();
  Object.values(E.entries).forEach(w => {
    const lookup = E.dictionaryLookups[w.headword], manual = manualSources[w.headword];
    const primary = w.cefr.status === 'referenced' ? w.cefr.source : null;
    const url = manual ? manual[0] : primary ? primary.url : lookup?.urls[0];
    const evidence = manual ? manual[1] : `Сверено словарное значение «${w.ru}» и его употребление в выбранном контексте. Метка CEFR рассматривается отдельно.`;
    w.audit = { meaning: url && !needsFurtherSenseCheck.has(w.headword) ? constructedExpressions.has(w.headword) ? 'construction-reviewed' : 'reference-checked' : 'needs-sense-check', example: 'editorial-reviewed', morphology: 'editorial-reviewed', checked: date, source: url || null, evidence };
    if (url) w.sources.unshift({ title: manual?.[0].includes('npmjs') ? 'npm documentation: dependencies' : 'Usage reference', url, status: w.audit.meaning, evidence });
    w.cefr.ratings = primary ? [{ level: w.cefr.level, scope: 'sense', provider: 'Cambridge', ...primary }] : [];
    (E.oxfordRatings[w.id] || []).forEach(r => {
      const filename = r.list === 'oxford-3000' ? 'The_Oxford_3000_by_CEFR_level.pdf' : 'The_Oxford_5000_by_CEFR_level.pdf';
      w.cefr.ratings.push({ ...r, provider: 'Oxford', title: r.list === 'oxford-3000' ? 'Oxford 3000' : 'Oxford 5000', url: OUP + filename, evidence: `Список ${r.list}, страница ${r.page}: ${w.headword}, ${w.pos}, ${r.level}. Уровень слова и части речи, не каждого значения.`, checked: date });
    });
    if (!primary) {
      const lexical = w.cefr.ratings.find(r => r.provider === 'Oxford');
      if (lexical) w.cefr = { level: lexical.level, status: 'referenced', scope: 'lexeme-pos', source: lexical, ratings: w.cefr.ratings };
      else w.cefr = { level: null, status: 'unrated', scope: null, source: null, ratings: [] };
    }
    w.cefr.conflict = new Set(w.cefr.ratings.map(r => r.level)).size > 1;
  });
  E.levelOf = w => w.cefr.level;
  E.studyLevelOf = w => w.cefr.level || w.courseLevel;
  E.isCoreLevel = w => ['A1', 'A2', 'B1', 'B2'].includes(E.studyLevelOf(w));
  E.contentSummary = function () {
    const entries = Object.values(E.entries);
    return { total: entries.length, senseRated: entries.filter(w => w.cefr.scope === 'sense').length,
      wordRated: entries.filter(w => w.cefr.scope === 'lexeme-pos').length, unrated: entries.filter(w => !w.cefr.level).length,
      conflicts: entries.filter(w => w.cefr.conflict).length,
      meaningsChecked: entries.filter(w => ['reference-checked', 'construction-reviewed'].includes(w.audit.meaning)).length,
      constructedReviewed: entries.filter(w => w.audit.meaning === 'construction-reviewed').length,
      senseChecksPending: entries.filter(w => !['reference-checked', 'construction-reviewed'].includes(w.audit.meaning)).length,
      b2SenseRated: entries.filter(w => w.cefr.scope === 'sense' && w.cefr.level === 'B2').length };
  };
  E.audit = { checked: date, status: 'source-and-editorial-review', exampleStatus: 'editorial-reviewed',
    note: 'Словарная метка значения, уровень слова в Oxford и учебная цель показываются раздельно. Это каталог и тренажёр, не сертификат полноты программы B2.' };
})(ETEnglish);
