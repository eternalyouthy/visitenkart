/* Batch 01: twenty families. Examples and Russian teaching notes are original. */
(function (E) {
  'use strict';
  const add = (id, ru, related, categories, note, rows) => E.family({ id, label: id.toUpperCase(), ru, related, categories, note }, rows);
  add('act', 'действовать; действие', ['perform', 'respond', 'communicate'], ['everyday', 'workplace'],
    'ACT — современная основа act; формы на -ion и -ive входят в освоенное лексическое семейство. React здесь значит реагировать, а не снова играть роль.', `
act|v|B2|действовать, принимать меры|We must [[act]] before the problem gets worse.|Мы должны действовать, пока проблема не усугубилась.|act||Act on advice: действовать по совету.
action|n|B2|действие, меры для решения проблемы|We need immediate [[action]] to protect the files.|Нужны немедленные меры для защиты файлов.|act + -ion|act|Take action — принимать меры; обычно неисчисляемое.
action|n|B1|события, действие фильма|Most of the [[action]] takes place in Berlin.|Большая часть действия происходит в Берлине.|act + -ion|act|Значение событий сюжета отличается от мер по решению проблемы.|figurative|story
active|adj|B1|активный, деятельный|She plays an [[active]] role in the project.|Она активно участвует в проекте.|act + -ive|act|An active role: деятельное участие, а не просто присутствие.
actively|adv|B2|активно, деятельно|We [[actively]] encourage questions.|Мы активно поощряем вопросы.|active + -ly|active|Описывает способ действия.
activity|n|A1|деятельность, занятие|Choose an [[activity]] for the weekend.|Выберите занятие на выходные.|active + -ity|active|Базовая опора семейства; activity — действие или занятие, не только активность.
actor|n|A2|актёр|The [[actor]] answered questions after the film.|Актёр ответил на вопросы после фильма.|act + -or|act|Профессия; act также значит играть роль.
acting|n|B1|актёрская игра|The [[acting]] was excellent.|Актёрская игра была превосходной.|act + -ing|act|Здесь существительное, а не форма Continuous.
react|v|B2|реагировать|How will customers [[react]] to the change?|Как клиенты отреагируют на изменение?|re- + act|act|React to something; re- здесь не означает повторение того же действия.|figurative
reaction|n|B1|реакция, ответ на событие|Her [[reaction]] surprised the team.|Её реакция удивила команду.|react + -ion|react|A reaction to something.
interact|v|B2|взаимодействовать|The two services [[interact]] through an API.|Два сервиса взаимодействуют через API.|inter- + act|act|Interact with: взаимное действие или общение.
interaction|n|B2|взаимодействие|The app encourages [[interaction]] between learners.|Приложение поощряет взаимодействие учащихся.|interact + -ion|interact|Interaction between A and B / with someone.
interactive|adj|B2|интерактивный, реагирующий на действия пользователя|The museum has an [[interactive]] display.|В музее есть интерактивный стенд.|interact + -ive|interact|Здесь интерфейс с обменом информацией; другие значения могут быть выше B2.
inactive|adj|B2|неактивный|Delete accounts that have been [[inactive]] for a year.|Удалите учётные записи, неактивные в течение года.|in- + active|active|In- отрицает признак; не означает внутри.
inactivity|n|B2|бездействие, отсутствие активности|The session ends after ten minutes of [[inactivity]].|Сеанс завершается после десяти минут бездействия.|inactive + -ity|inactive|Неисчисляемое обозначение состояния.
activate|v|B2|активировать|Please [[activate]] your account by email.|Активируйте учётную запись через электронную почту.|active + -ate|active|Конечное e заменяется перед -ate.
activation|n|B2|активация|Account [[activation]] takes a few seconds.|Активация учётной записи занимает несколько секунд.|activate + -ion|activate|Название процесса, не действующее лицо.
`);
  add('form', 'форма; придавать форму', ['create', 'construct', 'organize'], ['everyday', 'workplace'],
    'Form, formal и transform удобно изучать вместе, но это не правило свободного присоединения любого латинского префикса. Inform находится в отдельном современном семействе.', `
form|v|B1|образовывать, создавать|The volunteers will [[form]] a small team.|Добровольцы создадут небольшую команду.|form||Form a group/team — образовать группу или команду.
form|n|A2|форма, вид|Water can take the [[form]] of ice.|Вода может принимать форму льда.|form||Здесь форма вещества, не бланк.||shape
formation|n|B2|образование, формирование|The policy supports the [[formation]] of new businesses.|Эта политика поддерживает создание новых предприятий.|form + -ation|form|Процесс возникновения; не переводится как образование в смысле учёбы.
formal|adj|B2|официальный, формальный|We received a [[formal]] invitation.|Мы получили официальное приглашение.|form + -al|form|Лексическое значение официальности не выводится из формы буквально.|figurative
formally|adv|B2|официально|The board has [[formally]] approved the plan.|Совет официально одобрил план.|formal + -ly|formal|Не путать с formerly: раньше.
informal|adj|B2|неофициальный, непринуждённый|We had an [[informal]] chat after lunch.|После обеда мы неофициально поговорили.|in- + formal|formal|Не inform + -al; отрицание formal.
reform|v|B2|реформировать, улучшать систему|They want to [[reform]] the tax system.|Они хотят реформировать налоговую систему.|re- + form|form|Не обязательно снова сформировать: изменить устройство системы.|figurative
reform|n|B2|реформа|The [[reform]] will affect small businesses.|Реформа затронет малые предприятия.|reform|reform|Переход к существительному без нового суффикса.||change
transform|v|B2|полностью преобразовать|New software could [[transform]] the service.|Новое ПО могло бы полностью преобразовать сервис.|trans- + form|form|Изменение характера или вида; освоенное слово, не свободный шаблон.
transformation|n|B2|преобразование|Digital [[transformation]] takes more than new tools.|Цифровое преобразование требует большего, чем новые инструменты.|transform + -ation|transform|Название процесса и результата.
format|n|B2|формат|Save the report in PDF [[format]].|Сохраните отчёт в формате PDF.|format|form|Format — лексически связанная основа, а не form + продуктивный -at.
format|v|B2|форматировать|Please [[format]] the document consistently.|Оформите документ единообразно.|format|format|Конверсия из существительного; formatting удваивает t.||arrange
`);
  add('connect', 'соединять', ['relate', 'communicate', 'secure'], ['everyday', 'it'],
    'Физическое соединение, сеть и смысловая связь — разные значения. Для connection они представлены отдельными карточками.', `
connect|v|A2|подключать, соединять|Please [[connect]] the printer to the network.|Подключите принтер к сети.|connect||Connect A to B; connect with — также связываться с человеком.
connection|n|B1|соединение, подключение|Check the [[connection]] between the cable and the router.|Проверьте соединение кабеля с маршрутизатором.|connect + -ion|connect|Техническое соединение; connection to a network.
connection|n|B2|взаимосвязь|There is a [[connection]] between sleep and concentration.|Между сном и концентрацией есть взаимосвязь.|connect + -ion|connect|Connection between A and B: смысловая связь.|figurative|relation
connected|adj|B1|подключённый|The device is [[connected]] to the office network.|Устройство подключено к офисной сети.|connect + -ed|connect|Прилагательное состояния; не отдельное прошедшее время.
disconnect|v|B2|отключать, разъединять|Please [[disconnect]] the power before opening the case.|Отключите питание, прежде чем открывать корпус.|dis- + connect|connect|Обратное действие; disconnect A from B.
disconnected|adj|B2|отключённый|The sensor is [[disconnected]] from the system.|Датчик отключён от системы.|disconnect + -ed|disconnect|В этом значении физическое или сетевое состояние.
reconnect|v|B2|подключить снова|Try to [[reconnect]] the device.|Попробуйте снова подключить устройство.|re- + connect|connect|Повторное подключение после разрыва.
connector|n|B2|соединитель, разъём|This [[connector]] does not fit the socket.|Этот разъём не подходит к гнезду.|connect + -or|connect|Здесь предмет, а не человек.
interconnected|adj|B2|взаимосвязанный|These problems are [[interconnected]].|Эти проблемы взаимосвязаны.|inter- + connected|connected|Связаны друг с другом; техническое и переносное употребление.|figurative
`);
  add('employ', 'нанимать; работа по найму', ['manage', 'perform', 'organize'], ['workplace'],
    'Employer даёт работу, employee работает по найму. Unemployed — безработный, self-employed — работающий на себя; эти категории не противоположности по одному суффиксу.', `
employ|v|B1|нанимать, иметь в штате|The company plans to [[employ]] two analysts.|Компания планирует нанять двух аналитиков.|employ||Employ someone as an analyst; employ to do something.
employee|n|B1|наёмный сотрудник|Every [[employee]] receives security training.|Каждый сотрудник проходит обучение безопасности.|employ + -ee|employ|Получает работу; не работодатель.
employer|n|B1|работодатель|Your [[employer]] should explain the policy.|Ваш работодатель должен объяснить правила.|employ + -er|employ|Человек или организация, предоставляющие работу.
employment|n|B1|занятость, работа по найму|She found [[employment]] in a small company.|Она нашла работу в небольшой компании.|employ + -ment|employ|Обычно неисчисляемое; a job, но не an employment в этом значении.
employed|adj|B1|работающий по найму|He is [[employed]] by a local company.|Он работает по найму в местной компании.|employ + -ed|employ|Be employed by / as.
unemployed|adj|B1|безработный|He has been [[unemployed]] since June.|Он безработный с июня.|un- + employed|employed|Прилагательное; an unemployed person.
unemployment|n|B2|безработица|Youth [[unemployment]] has fallen.|Безработица среди молодёжи снизилась.|un- + employment|employment|Неисчисляемое состояние или общественное явление.
self-employed|adj|B2|работающий на себя|She is [[self-employed]] and works from home.|Она работает на себя из дома.|self- + employed|employed|Это занятость, но не работа по найму у работодателя.
`);
  add('develop', 'развивать; разрабатывать', ['create', 'produce', 'evaluate'], ['workplace', 'it'],
    'Develop может значить развиваться, разрабатывать и приобретать со временем. Здесь основной контекст — продукт и профессиональное развитие.', `
develop|v|A2|разрабатывать|We need to [[develop]] a safer login process.|Нам нужно разработать более безопасный процесс входа.|develop||Develop software/skills; глагол может быть переходным и непереходным.
development|n|B1|развитие, разработка|The team focuses on software [[development]].|Команда занимается разработкой ПО.|develop + -ment|develop|Software development обычно неисчисляемое.
developer|n|B2|разработчик|A [[developer]] reviewed the patch.|Разработчик проверил исправление.|develop + -er|develop|Может означать и застройщика; здесь специалист по ПО.
developed|adj|B2|развитый|The region has a well-[[developed]] transport system.|В регионе хорошо развитая транспортная система.|develop + -ed|develop|Well-developed пишется с дефисом перед существительным.
developing|adj|B1|развивающийся|Demand is rising in [[developing]] markets.|Спрос растёт на развивающихся рынках.|develop + -ing|develop|Прилагательное текущего развития; не обязательно Continuous.
underdeveloped|adj|B2|недостаточно развитый|The idea is still [[underdeveloped]].|Идея всё ещё недостаточно проработана.|under- + developed|developed|Under- указывает на недостаточную степень.
redevelop|v|B2|перестраивать, заново осваивать|The council plans to [[redevelop]] the old industrial site.|Муниципалитет планирует перестроить старую промышленную площадку.|re- + develop|develop|Часто о территории; не автоматически синоним переписать ПО.
redevelopment|n|B2|перестройка, реконструкция территории|The [[redevelopment]] will include new homes.|Реконструкция будет включать новое жильё.|redevelop + -ment|redevelop|Название процесса, не отдельное здание.
`);
  add('manage', 'управлять; справляться', ['employ', 'organize', 'responsible'], ['workplace'],
    'Manage a team — управлять, manage to do — суметь. Manageable описывает задачу, с которой можно справиться, а не начальника.', `
manage|v|B1|управлять, руководить|She will [[manage]] the support team.|Она будет руководить командой поддержки.|manage||Manage someone/something без предлога.
manage|v|B1|суметь, справиться|Did you [[manage]] to fix the issue?|Тебе удалось устранить проблему?|manage||Manage to do; не manage doing в этом значении.||cope
manager|n|A2|руководитель|Ask your [[manager]] before changing the schedule.|Спросите руководителя перед изменением графика.|manage + -er|manage|Конечное e не удваивается: manager.
management|n|B1|управление; руководство организации|Good [[management]] reduces unnecessary work.|Хорошее управление сокращает ненужную работу.|manage + -ment|manage|Без лишнего e после g: management; e основы сохраняется.
manageable|adj|B2|посильный, управляемый|Break the project into [[manageable]] tasks.|Разбейте проект на посильные задачи.|manage + -able|manage~cope|Manageable сохраняет e, чтобы g читалась как /dʒ/.
unmanageable|adj|B2|неуправляемый; непосильный|The workload has become [[unmanageable]].|Рабочая нагрузка стала непосильной.|un- + manageable|manageable|Отрицает возможность справиться.
mismanage|v|B2|плохо управлять|Poor controls make it easier to [[mismanage]] public funds.|Слабый контроль облегчает неэффективное распоряжение бюджетными средствами.|mis- + manage|manage|Mis- означает неверное или плохое управление.
mismanagement|n|B2|неэффективное управление|The audit uncovered financial [[mismanagement]].|Аудит выявил неэффективное управление финансами.|mismanage + -ment|mismanage|Обычно неисчисляемое название проблемы.
`);
  add('decide', 'решать, принимать решение', ['consider', 'evaluate', 'prepare'], ['everyday', 'workplace'],
    'Decide → decision включает изменение основы. Decisive бывает решающим и решительным; indecisive — нерешительный.', `
decide|v|A2|решать, принимать решение|We must [[decide]] whether to accept the offer.|Нам нужно решить, принимать ли предложение.|decide||Decide to do / decide whether; make a decision.
decision|n|B1|решение|It was a difficult [[decision]].|Это было трудное решение.|decis- + -ion|decide|Чередование основы decid-/decis-; не правило замены d для всех глаголов.
decisive|adj|B2|решающий|The final test was [[decisive]].|Последний тест оказался решающим.|decis- + -ive|decision|О событии, определяющем результат.
decisive|adj|B2|решительный|We need a [[decisive]] leader.|Нам нужен решительный руководитель.|decis- + -ive|decision|О человеке, способном быстро принимать решения.||person
decisively|adv|B2|решительно|The team acted [[decisively]].|Команда действовала решительно.|decisive + -ly|decisive~person|Наречие способа действия.
indecisive|adj|B2|нерешительный|He is too [[indecisive]] to choose a supplier.|Он слишком нерешителен, чтобы выбрать поставщика.|in- + decisive|decisive~person|In- отрицает решительность.
indecision|n|B2|нерешительность, колебания|Her [[indecision]] delayed the project.|Её нерешительность задержала проект.|in- + decision|decision|Состояние колебаний, не отдельное неверное решение.
undecided|adj|B2|ещё не определившийся|I am still [[undecided]] about the course.|Я ещё не определился с курсом.|un- + decided|decide|Не принял конкретного решения; не обязательно нерешителен по характеру.
`);
  add('inform', 'сообщать, информировать', ['communicate', 'explain', 'form'], ['workplace', 'it'],
    'Современная основа inform изучается отдельно от form. Information в обычном значении неисчисляемое; informative не равно informed.', `
inform|v|B1|сообщать, информировать|Please [[inform]] the team of any changes.|Сообщайте команде о любых изменениях.|inform||Inform someone of/about something; inform someone that...
information|n|A1|информация, сведения|We need more [[information]] about the incident.|Нам нужно больше сведений об инциденте.|inform + -ation|inform|Неисчисляемое: some information, a piece of information.
informed|adj|B2|информированный, осведомлённый|Make an [[informed]] choice.|Сделайте осознанный выбор на основе информации.|inform + -ed|inform|An informed decision — решение на основе достаточных сведений.
uninformed|adj|B2|неосведомлённый|That was an [[uninformed]] comment.|Этот комментарий был сделан без знания дела.|un- + informed|informed|Отсутствие знаний, не намеренная ложь.
informative|adj|B2|информативный, содержательный|The session was short but [[informative]].|Занятие было коротким, но содержательным.|inform + -ative|inform|Предоставляет полезную информацию; не осведомлённый.
misinform|v|B2|неверно информировать|An outdated guide can [[misinform]] users.|Устаревшее руководство может дезинформировать пользователей.|mis- + inform|inform|Не обязательно намеренно вводить в заблуждение.
misinformation|n|B2|недостоверная информация|The campaign aims to reduce [[misinformation]].|Кампания направлена на сокращение распространения недостоверной информации.|mis- + information|information|Неисчисляемое; намеренность из самого слова не следует.
disinformation|n|B2|намеренно ложная информация|The investigation exposed a [[disinformation]] campaign.|Расследование раскрыло кампанию намеренной дезинформации.|dis- + information|information|Лексическое значение намеренного обмана; не общий смысл dis- для всех слов.
`);
  add('communicate', 'общаться, передавать информацию', ['inform', 'connect', 'express'], ['everyday', 'workplace', 'it'],
    'Communicate with — общаться с кем-то; communicate something to someone — передавать что-то кому-то. Community не означает результат добавления -ity к communicate.', `
communicate|v|B1|общаться, передавать информацию|We [[communicate]] with clients by email.|Мы общаемся с клиентами по электронной почте.|communicate||Communicate with; communicate a decision to someone.
communication|n|B1|общение, коммуникация|Clear [[communication]] prevents mistakes.|Чёткое общение предотвращает ошибки.|communicat- + -ion|communicate|В communication конечное e основы отпадает.
communications|n|B2|системы связи|The storm damaged the island's [[communications]].|Шторм повредил системы связи на острове.|communication + -s|communication|Лексическое множественное число: каналы и системы связи.
communicator|n|B2|человек, умеющий передавать мысли|A good [[communicator]] adapts to the audience.|Хороший коммуникатор подстраивается под аудиторию.|communicat- + -or|communicate|Не устройство в этом значении; agent noun на -or.
miscommunication|n|B2|недопонимание из-за сбоя в общении|A [[miscommunication]] led to the wrong delivery.|Недопонимание привело к неправильной доставке.|mis- + communication|communication|Ошибка передачи или понимания сообщения; не обязательно ложь.
`);
  add('create', 'создавать', ['develop', 'produce', 'form'], ['everyday', 'workplace'],
    'Creative — творческий, creation — создание или результат, creativity — творческая способность. Re-create с дефисом помогает отличить воссоздание от recreation — отдыха.', `
create|v|A2|создавать|We want to [[create]] a useful tool.|Мы хотим создать полезный инструмент.|create||Create something; не требует предлога.
creation|n|B2|создание|The policy encourages job [[creation]].|Эта политика поощряет создание рабочих мест.|creat- + -ion|create|Здесь процесс; a creation может быть произведением.
creator|n|B2|создатель|The [[creator]] of the app answered our questions.|Создатель приложения ответил на наши вопросы.|creat- + -or|create|Создатель продукта или произведения.
creative|adj|B1|творческий|We need a [[creative]] solution.|Нам нужно творческое решение.|creat- + -ive|create|Не обязательно художественный: нестандартный подход тоже creative.
creatively|adv|B2|творчески|She approaches problems [[creatively]].|Она подходит к проблемам творчески.|creative + -ly|creative|Наречие способа действия.
creativity|n|B2|творческие способности, креативность|The task encourages [[creativity]].|Задание развивает творческие способности.|creative + -ity|creative|Перед -ity конечное e отпадает.
re-create|v|B2|воссоздавать|We tried to [[re-create]] the original sound.|Мы попытались воссоздать исходное звучание.|re- + create|create|Также recreate; дефис снимает неоднозначность с отдыхом.
`);
  add('educate', 'обучать, давать образование', ['develop', 'prepare', 'inform'], ['everyday', 'workplace'],
    'Education — система и процесс образования; educated — образованный, educational — учебный или познавательный. Не смешивайте -ed и -al.', `
educate|v|B1|обучать, давать образование|We need to [[educate]] staff about phishing.|Нужно обучать сотрудников распознавать фишинг.|educate||Educate someone about/on a topic.
education|n|A2|образование|Access to [[education]] should not depend on income.|Доступ к образованию не должен зависеть от дохода.|educat- + -ion|educate|Обычно неисчисляемое; an education возможно о полученном образовании.
educational|adj|B1|образовательный, учебный|The team produces [[educational]] videos.|Команда создаёт учебные видео.|education + -al|education|О материале или цели обучения.
educated|adj|B2|образованный|She is highly [[educated]].|Она высокообразованна.|educate + -ed|educate|О человеке; an educated guess — обоснованная догадка, отдельное значение.
uneducated|adj|B2|необразованный|The policy should not leave people [[uneducated]].|Эта политика не должна оставлять людей без образования.|un- + educated|educated|О недостатке образования, не о природных способностях.
educator|n|B2|педагог|An experienced [[educator]] designed the course.|Опытный педагог разработал курс.|educat- + -or|educate|Более формальное широкое обозначение, чем teacher.
`);
  add('organize', 'организовывать', ['manage', 'form', 'employ'], ['everyday', 'workplace'],
    'В каталоге последовательно используется вариант -ize. Британские organise/organisation также правильны и принимаются в упражнениях.', `
organize|v|A2|организовывать|We need to [[organize]] a meeting.|Нам нужно организовать встречу.|organize||Британский вариант organise; не делим синхронно на organ + свободный -ize.
organization|n|B1|организация|The [[organization]] supports local schools.|Эта организация поддерживает местные школы.|organiz- + -ation|organize|Здесь учреждение; organisation также верно.
organization|n|B2|организация процесса, упорядочение|The event requires careful [[organization]].|Мероприятие требует тщательной организации.|organiz- + -ation|organize|Неисчисляемое значение процесса.||process
organizer|n|B1|организатор|Contact the [[organizer]] for details.|Свяжитесь с организатором для уточнения деталей.|organiz- + -er|organize|Также organiser.
organized|adj|B1|организованный, собранный|She is very [[organized]] at work.|На работе она очень собранна.|organize + -ed|organize|О человеке с хорошими навыками организации.
disorganized|adj|B2|неорганизованный|The handover was [[disorganized]].|Передача дел была неорганизованной.|dis- + organized|organized|Также disorganised; отрицательный признак.
reorganize|v|B2|реорганизовывать|They plan to [[reorganize]] the department.|Они планируют реорганизовать отдел.|re- + organize|organize|Менять устройство уже существующей организации.
reorganization|n|B2|реорганизация|The [[reorganization]] will take six months.|Реорганизация займёт шесть месяцев.|reorganiz- + -ation|reorganize|Также reorganisation.
organizational|adj|B2|организационный|The delay was caused by [[organizational]] problems.|Задержку вызвали организационные проблемы.|organization + -al|organization|Относится к устройству или работе организации.
`);
  add('apply', 'подавать заявление; применять', ['use', 'prepare', 'employ'], ['everyday', 'workplace', 'it'],
    'Apply for a job и apply a rule — разные модели. Application может быть заявлением, применением или программой; карточки не объединяют их в одно значение.', `
apply|v|B1|подавать заявление|I want to [[apply]] for the position.|Я хочу подать заявление на эту должность.|apply||Apply for a job; apply to a company.
apply|v|B1|применять|We should [[apply]] the same rule to everyone.|Нам следует применять одно правило ко всем.|apply||Apply something to something.||use
application|n|B1|заявление, заявка|Send your [[application]] by Friday.|Отправьте заявление до пятницы.|applic- + -ation|apply|Apply → applic-: изменение основы, не правило для любого -y.
application|n|B2|применение|The theory has a practical [[application]].|У теории есть практическое применение.|applic- + -ation|apply~use|Существительное процесса или конкретного применения.||use
application|n|B2|прикладная программа|Install the [[application]] from a trusted source.|Установите приложение из доверенного источника.|applic- + -ation|apply~use|Вычислительное значение, отдельное от заявления.|figurative|software
applicant|n|B2|соискатель, заявитель|Each [[applicant]] must provide a reference.|Каждый соискатель должен предоставить рекомендацию.|applic- + -ant|apply|Человек, который подаёт заявление.
applicable|adj|B2|применимый|These rules are [[applicable]] to remote workers.|Эти правила применимы к удалённым сотрудникам.|applic- + -able|apply~use|Applicable to; не то же самое, что applied.
applied|adj|B2|прикладной|She studies [[applied]] mathematics.|Она изучает прикладную математику.|apply + -ed|apply~use|Y меняется на i; здесь прилагательное, не прошедшее время.
`);
  add('agree', 'соглашаться', ['communicate', 'respect', 'differ'], ['everyday', 'workplace'],
    'Agree with a person, agree on a plan, agree to a proposal. Agreement — соглашение или согласие; disagree не означает агрессивный спор.', `
agree|v|A2|соглашаться|I [[agree]] with your main point.|Я согласен с твоей основной мыслью.|agree||Agree with someone; agree to do something.
agreement|n|B1|соглашение, договорённость|We reached an [[agreement]] on the deadline.|Мы договорились о сроке.|agree + -ment|agree|Reach an agreement; be in agreement — быть согласным.
disagree|v|B1|не соглашаться|I [[disagree]] with that conclusion.|Я не согласен с этим выводом.|dis- + agree|agree|Disagree with someone/about something.
disagreement|n|B2|разногласие|We had a [[disagreement]] about the budget.|У нас возникло разногласие по поводу бюджета.|disagree + -ment|disagree|Не обязательно ссора.
agreeable|adj|B2|приятный; приемлемый|The proposed date is [[agreeable]] to everyone.|Предложенная дата всех устраивает.|agree + -able|agree|Agreeable to someone: приемлемый; лексическое значение шире простой возможности согласия.|figurative
disagreeable|adj|B2|неприятный|It was a [[disagreeable]] experience.|Это был неприятный опыт.|dis- + agreeable|agreeable|Не означает просто не согласный с мнением.|figurative
`);
  add('differ', 'различаться', ['relate', 'evaluate', 'agree'], ['everyday', 'workplace'],
    'Different — другой или отличающийся, indifferent — безразличный, а не просто неотличающийся. Differently — наречие способа.', `
differ|v|B2|различаться|The two versions [[differ]] in price.|Две версии различаются по цене.|differ||Differ from / differ in.
different|adj|A1|разный, отличающийся|We have [[different]] priorities.|У нас разные приоритеты.|differ + -ent|differ|Different from — нейтральная модель.
difference|n|A2|разница, различие|What is the main [[difference]] between the plans?|В чём основная разница между тарифами?|differ + -ence|differ|Difference between A and B.
differently|adv|B1|по-другому|I would handle it [[differently]].|Я бы разобрался с этим по-другому.|different + -ly|different|Описывает действие, не предмет.
indifferent|adj|B2|безразличный|They seemed [[indifferent]] to our concerns.|Казалось, им безразличны наши опасения.|in- + different|different|Indifferent to; значение нельзя получить простым отрицанием different.|opaque
indifference|n|B2|безразличие|His [[indifference]] upset the team.|Его безразличие расстроило команду.|indiffer- + -ence|indifferent|Состояние отсутствия интереса; -ent/-ence чередуются.
`);
  add('depend', 'зависеть', ['relate', 'responsible', 'support'], ['everyday', 'workplace', 'it'],
    'Depend on — зависеть или полагаться. Dependable — надёжный; dependent — зависимый. Независимость не равна надёжности.', `
depend|v|A2|зависеть|The cost will [[depend]] on the number of users.|Стоимость будет зависеть от числа пользователей.|depend||Depend on; не depend from.
dependent|adj|B2|зависимый|The service is [[dependent]] on an external provider.|Сервис зависит от внешнего поставщика.|depend + -ent|depend|Dependent on something.
dependence|n|B2|зависимость|We want to reduce our [[dependence]] on one supplier.|Мы хотим снизить зависимость от одного поставщика.|depend + -ence|depend|Dependence on; не только зависимость от веществ.
dependency|n|B2|зависимость компонента, необходимый модуль|The update adds a new [[dependency]].|Обновление добавляет новую зависимость.|depend + -ency|depend|Здесь техническое исчисляемое значение.
independent|adj|B1|независимый|We need an [[independent]] review.|Нам нужна независимая проверка.|in- + dependent|dependent|Independent of/from; не unbiased во всех контекстах.
independence|n|B2|независимость|Financial [[independence]] matters to her.|Для неё важна финансовая независимость.|in- + dependence|dependence|Неисчисляемое состояние.
independently|adv|B2|независимо, самостоятельно|Each service can run [[independently]].|Каждый сервис может работать независимо.|independent + -ly|independent|Описывает способ работы.
dependable|adj|B2|надёжный|We need a [[dependable]] backup system.|Нам нужна надёжная система резервного копирования.|depend + -able|depend|Тот, на кого или на что можно положиться.|figurative
`);
  add('relate', 'связывать; относиться', ['connect', 'differ', 'depend'], ['everyday', 'workplace'],
    'Relation описывает связь, relationship — отношения или характер связи. Relative как прилагательное и родственник как существительное имеют отдельные значения.', `
relate|v|B2|быть связанным, относиться|How does this [[relate]] to the incident?|Как это связано с инцидентом?|relate||Relate to; relate A to B — устанавливать связь.
relation|n|B1|связь, отношение|We found a [[relation]] between the two events.|Мы обнаружили связь между двумя событиями.|relat- + -ion|relate|Relation between / in relation to.
relationship|n|B1|отношения|Trust is essential in a working [[relationship]].|Доверие необходимо в рабочих отношениях.|relation + -ship|relation|Также связь между вещами; здесь межличностные отношения.
related|adj|B1|связанный|The two incidents are [[related]].|Эти два инцидента связаны.|relate + -ed|relate|Related to; не relevant во всех контекстах.
unrelated|adj|B2|не связанный|These are two [[unrelated]] problems.|Это две не связанные друг с другом проблемы.|un- + related|related|Unrelated to.
relative|adj|B2|относительный|We compared the [[relative]] costs of the options.|Мы сравнили относительную стоимость вариантов.|relat- + -ive|relate|Оценённый в сравнении с чем-то.
relative|n|A2|родственник|A [[relative]] offered to help.|Родственник предложил помощь.|relative|relative|Конверсия с закреплённым значением человека из семьи.|figurative|person
relatively|adv|B2|относительно, сравнительно|The system is [[relatively]] easy to maintain.|Систему сравнительно легко обслуживать.|relative + -ly|relative|Нужно понимать подразумеваемое сравнение.
`);
  add('protect', 'защищать', ['secure', 'care', 'support'], ['everyday', 'it'],
    'Protect from/against; protection — защита, protective — защищающий. Overprotective описывает чрезмерную опеку, а не просто сильную защиту.', `
protect|v|A2|защищать|Use a strong password to [[protect]] your account.|Используйте надёжный пароль для защиты учётной записи.|protect||Protect A from/against B.
protection|n|B2|защита|The files need better [[protection]].|Файлам нужна более надёжная защита.|protect + -ion|protect|Protection against threats; обычно неисчисляемое.
protective|adj|B2|защитный|Wear [[protective]] clothing in the lab.|Носите защитную одежду в лаборатории.|protect + -ive|protect|Не то же самое, что protected: защищающий, а не защищённый.
protected|adj|B2|защищённый|The folder is [[protected]] by encryption.|Папка защищена шифрованием.|protect + -ed|protect|О состоянии защищаемого объекта.
unprotected|adj|B2|незащищённый|Do not leave sensitive data [[unprotected]].|Не оставляйте конфиденциальные данные незащищёнными.|un- + protected|protected|Отрицание состояния защиты.
protector|n|B2|защитник; защитное приспособление|A screen [[protector]] prevents scratches.|Защитная плёнка предотвращает царапины экрана.|protect + -or|protect|Здесь предмет; -or может называть человека или устройство.
overprotective|adj|B2|чрезмерно опекающий|Her parents can be [[overprotective]].|Её родители иногда чрезмерно её опекают.|over- + protective|protective|О людях и опеке; не общий технический термин.|figurative
`);
  add('secure', 'безопасный; обеспечивать безопасность', ['protect', 'connect', 'responsible'], ['workplace', 'it'],
    'Secure прилагательное и глагол — разные части речи. Security — безопасность, insecurity может быть тревожной неуверенностью; контекст обязателен.', `
secure|adj|B1|безопасный, защищённый|Keep the backup in a [[secure]] location.|Храните резервную копию в защищённом месте.|secure||Secure storage — защищённое хранение.
secure|v|B2|защитить, обезопасить|We need to [[secure]] the network.|Нам нужно защитить сеть.|secure|secure|Конверсия: прилагательное → глагол.||protect
security|n|B1|безопасность, защита от угроз|The team is responsible for network [[security]].|Команда отвечает за сетевую безопасность.|secur- + -ity|secure|Secure → security: e отпадает; не safety во всех контекстах.
securely|adv|B2|надёжно, безопасным способом|Store the keys [[securely]].|Храните ключи безопасным способом.|secure + -ly|secure|Описывает способ хранения или закрепления.
insecure|adj|B2|незащищённый, небезопасный|The old protocol is [[insecure]].|Старый протокол небезопасен.|in- + secure|secure|Техническое значение; психологическая неуверенность — другое значение.
insecure|adj|B2|неуверенный в себе|He feels [[insecure]] in his new role.|В новой роли он чувствует себя неуверенно.|in- + secure|secure|О чувстве человека, не о сетевом протоколе.|figurative|feeling
insecurity|n|B2|неуверенность, чувство незащищённости|Financial [[insecurity]] affects many families.|Финансовая незащищённость затрагивает многие семьи.|in- + security|security|Не автоматически техническая уязвимость.|figurative
`);
  add('respond', 'отвечать, реагировать', ['act', 'communicate', 'responsible'], ['everyday', 'workplace', 'it'],
    'Respond to a request — отвечать на запрос. Response — ответ или реакция; responsive — быстро реагирующий. Responsible находится в отдельном современном семействе.', `
respond|v|B1|отвечать, реагировать|Please [[respond]] to the request by Monday.|Ответьте на запрос до понедельника.|respond||Respond to; не respond on.
response|n|B1|ответ, реакция|We are waiting for a [[response]] from support.|Мы ждём ответа от поддержки.|respons- + -e|respond|Чередование respond-/respons- в освоенном семействе, не свободное правило.
responsive|adj|B2|быстро реагирующий, отзывчивый|The support team is very [[responsive]].|Команда поддержки очень быстро реагирует.|respons- + -ive|response|Responsive to requests; не означает ответственный.
unresponsive|adj|B2|не реагирующий|The server is [[unresponsive]].|Сервер не отвечает.|un- + responsive|responsive|Может описывать систему или человека.
respondent|n|B2|респондент, участник опроса|Each [[respondent]] answered ten questions.|Каждый респондент ответил на десять вопросов.|respond + -ent|respond|Участник исследования; не любой ответивший собеседник.
responder|n|B2|специалист, реагирующий на происшествие|A first [[responder]] arrived within minutes.|Сотрудник экстренной службы прибыл через несколько минут.|respond + -er|respond|First responder — устойчивый термин; incident responder — реагирующий на инциденты.
`);
  E.batches.push({ id: 'families-01', families: 20, status: 'editorial-draft' });
})(ETEnglish);
