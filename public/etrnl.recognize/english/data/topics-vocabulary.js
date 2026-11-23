/* Topic expansion: original examples, observed sense labels only. Blank levels stay unrated. */
(function (E) {
  'use strict';
  E.addTopicEntry = function (row, category, source, construction = false) {
    const [headword, pos, level, ru, en, translation, usage, sense = 'main'] = row;
    const id = E.id(headword, pos, sense);
    if (E.entries[id]) return id;
    const checked = '2026-11-23', url = source || E.dictionary(headword);
    const evidence = construction ? `Проверена грамматическая модель и речевая функция. ${usage} Отдельная CEFR-метка всей фразе не приписывается.` : `Выбрано значение «${ru}» (${pos}). ${usage}${level ? ` В источнике для этого значения наблюдалась метка ${level}.` : ' Явная метка CEFR не заявляется.'}`;
    const rating = level ? { provider: 'Cambridge', level, scope: 'sense', title: 'Cambridge Dictionary', url, evidence, checked } : null;
    E.addEntry({ id, headword, pos, sense, ru, courseLevel: category === 'it' ? 'B2' : 'B1',
      cefr: { level: level || null, status: level ? 'referenced' : 'unrated', scope: level ? 'sense' : null, source: rating, ratings: rating ? [rating] : [], conflict: false },
      examples: [{ en, ru: translation }], categories: [category], familyId: null, core: true,
      morphology: { parts: [headword], parentId: null, relation: pos === 'chunk' ? 'lexical-chunk' : 'base', note: usage },
      semantic: ru, usage, transparency: construction && /give me a hand|walk me through|make it|put me through|work for you|trade-offs/.test(headword) ? 'figurative' : 'transparent',
      audit: { meaning: construction ? 'construction-reviewed' : 'reference-checked', example: 'editorial-reviewed', morphology: 'editorial-reviewed', checked, source: url, evidence },
      sources: [{ title: construction ? 'Grammar / usage reference' : 'Meaning reference', url, status: 'reference-checked', evidence }]
    });
    return id;
  };
  const rows = `
friendship|n|B1|дружба|Our [[friendship]] continued after we moved to different cities.|Наша дружба сохранилась после переезда в разные города.|Friendship with someone; close/lasting friendship.
trust|v|B1|доверять|I [[trust]] her to keep the details private.|Я доверяю ей и уверен, что она не разгласит подробности.|Trust someone to do; не trust to someone.|main|learner
landlord|n|B2|арендодатель|The [[landlord]] agreed to replace the broken lock.|Арендодатель согласился заменить сломанный замок.|Владелец сдаваемой недвижимости; не значение управляющего пабом.
rent|n|A2|арендная плата|The monthly [[rent]] includes water but not electricity.|В ежемесячную арендную плату входит вода, но не электричество.|Pay rent; rent for a flat. Не глагол rent.
deposit|n||возвратный залог при аренде|We received our [[deposit]] back after returning the keys.|После возврата ключей нам вернули залог.|Refundable/security deposit; не банковский вклад и не первоначальный взнос.|rent|learner
heating|n|A2|отопление|The [[heating]] stopped working during the night.|Ночью перестало работать отопление.|Обычно неисчисляемое: central heating.|main|learner
household|n|B2|домохозяйство, живущие вместе люди|Each [[household]] received a separate recycling bin.|Каждому домохозяйству выдали отдельный контейнер для перерабатываемых отходов.|Одна совместно проживающая группа, не обязательно семья.
neighbour|n|A2|сосед|Our [[neighbour]] offered to collect our post while we were away.|Сосед предложил забирать нашу почту, пока нас нет.|US neighbor; сосед по месту проживания, не соседняя страна.
repair|v|A2|ремонтировать|Could someone [[repair]] the front door before Friday?|Может ли кто-нибудь починить входную дверь до пятницы?|Repair a door/device; здесь восстановление физической вещи.
receipt|n|A2|чек, подтверждение покупки|The shop emailed me a [[receipt]] for the headphones.|Магазин прислал мне чек за наушники по электронной почте.|A receipt for something; исчисляемое. Receipt как получение — другое значение.
refund|n|B1|возврат денег|I asked for a [[refund]] because the item was damaged.|Я попросил вернуть деньги, потому что товар был повреждён.|Ask for/get a refund; существительное, не глагол refund.
ingredient|n|B1|ингредиент блюда|The main [[ingredient]] in this sauce is fresh tomato.|Главный ингредиент этого соуса — свежий помидор.|Пищевая составляющая; переносное ingredient of success имеет другую метку.
portion|n|B2|порция еды|Could we order a smaller [[portion]] for the child?|Можно заказать ребёнку порцию поменьше?|A portion of rice; выбран смысл количества еды для одного человека.|main|learner
discount|n||скидка|The shop offers a [[discount]] on returned display models.|Магазин предлагает скидку на возвращённые витринные образцы.|A discount on a price/product; не глагол игнорировать.
purchase|v|B2|приобретать, покупать|You can [[purchase]] a ticket at the information desk.|Билет можно приобрести у информационной стойки.|Формальнее buy; глагол purchase, не существительное покупка.
symptom|n|B2|симптом заболевания|She described each [[symptom]] to the doctor.|Она описала врачу каждый симптом.|A symptom of an illness; исчисляемое существительное.|main|learner
treatment|n|B2|лечение|The clinic explained the proposed [[treatment]] in plain language.|В клинике простыми словами объяснили предлагаемое лечение.|Treatment for an illness; здесь медицинская помощь, не обращение с людьми.|main|learner
prescription|n|B1|рецепт врача|The pharmacy asked to see my [[prescription]].|В аптеке попросили показать мой рецепт.|A prescription for medicine; документ врача, не кулинарный recipe.|main|learner
recover|v|B1|выздоравливать, восстанавливаться после болезни|She needs time to [[recover]] from the operation.|Ей нужно время, чтобы восстановиться после операции.|Recover from an illness/operation; не восстановление удалённого файла.|health
pain|n|A2|физическая боль|He mentioned a sharp [[pain]] in his shoulder.|Он упомянул резкую боль в плече.|Pain in a body part; здесь физическое ощущение, не душевные страдания.
infection|n|B2|инфекция|The doctor checked for signs of an [[infection]].|Врач проверил, нет ли признаков инфекции.|An infection; signs of infection — признаки инфекции.
insurance|n|B2|страхование, страховка|Please bring your health [[insurance]] details to the appointment.|Возьмите на приём данные своей медицинской страховки.|Обычно неисчисляемое: insurance; a policy — отдельный страховой договор.|main|learner
permit|n|C1|официальное разрешение в виде документа|The application requires a valid work [[permit]].|Для подачи заявления нужен действующий документ, разрешающий работу.|A work/parking permit. Существительное; B1 глагола permit сюда не переносится.
document|n|A2|официальный документ|Please bring the original [[document]] and a copy.|Принесите оригинал документа и копию.|Выбран официальный бумажный документ; компьютерный файл — отдельный смысл.
statement|n||банковская выписка|The bank sent a monthly [[statement]] showing all transactions.|Банк прислал месячную выписку со всеми операциями.|Bank statement; не официальное публичное заявление с меткой B2.|bank|learner
proof|n|B2|подтверждение, доказательство|The office asked for [[proof]] of my address.|В учреждении попросили подтверждение моего адреса.|Proof of address/identity; обычно неисчисляемое в таком употреблении.
signature|n|B1|подпись|The form needs your [[signature]] at the bottom.|Внизу бланка нужна ваша подпись.|Written signature; не цифровой криптографический термин.
delay|n|A2|задержка|A signal problem caused a twenty-minute [[delay]].|Из-за проблемы с сигнализацией возникла двадцатиминутная задержка.|A delay of twenty minutes; существительное, не глагол postpone.|main|learner
departure|n|B1|отправление, выезд|Check the [[departure]] time before leaving home.|Проверьте время отправления перед выходом из дома.|Departure time; departure from a station.
platform|n|A2|железнодорожная платформа|Our train leaves from [[platform]] six.|Наш поезд отправляется с шестой платформы.|Railway platform; не программная или политическая платформа.|train|learner
fare|n|B1|стоимость проезда|The evening [[fare]] is lower if you book in advance.|Если заказать заранее, вечерний проезд стоит дешевле.|Bus/train fare; цена поездки, не ticket как документ.|main|learner
luggage|n|A2|багаж|There is enough space for our [[luggage]] above the seats.|Над сиденьями достаточно места для нашего багажа.|Неисчисляемое: luggage; a piece of luggage. US baggage.
accommodation|n|B1|жильё на время поездки или проживания|The organiser will help us find temporary [[accommodation]].|Организатор поможет нам найти временное жильё.|UK обычно неисчисляемое; US accommodations возможно во множественном числе.|main|learner
cancellation|n||отмена запланированного события|We received a notification about the train [[cancellation]].|Мы получили уведомление об отмене поезда.|Train/flight cancellation; не путать с delay.
audience|n|B1|публика, зрители на мероприятии|The [[audience]] stayed to ask questions after the talk.|После доклада слушатели остались задать вопросы.|Публика на конкретном мероприятии; аудитория СМИ — отдельное значение.
exhibition|n|B1|выставка|The photography [[exhibition]] is open until Sunday.|Выставка фотографий открыта до воскресенья.|An exhibition of photographs; on display/on exhibition.
venue|n|B2|место проведения мероприятия|The organisers chose a smaller [[venue]] for the concert.|Организаторы выбрали для концерта площадку поменьше.|A venue for a concert/meeting; не просто location любого объекта.
entertainment|n|B1|развлечения, развлекательные мероприятия|The ticket includes live [[entertainment]] after dinner.|В билет входит развлекательная программа после ужина.|Обычно неисчисляемое в общем значении.
community|n|B2|местное сообщество|The local [[community]] helped organise the festival.|Местное сообщество помогло организовать фестиваль.|Группа людей, связанных местом или общими интересами.
environment|n|B1|окружающая природная среда|The project aims to protect the [[environment]].|Цель проекта — защитить окружающую среду.|The environment: природа; a working environment — отдельный смысл.
promotion|n|B2|повышение в должности|She discussed the requirements for a [[promotion]] with her manager.|Она обсудила с руководителем условия повышения в должности.|Career promotion; не рекламная акция.|career
qualification|n|B1|документально подтверждённая квалификация|This [[qualification]] is recognised by several employers.|Эту квалификацию признают несколько работодателей.|Официальное подтверждение обучения; общая пригодность к работе — другой смысл.
salary|n|B1|фиксированная заработная плата|We discussed the annual [[salary]] during the interview.|На собеседовании мы обсудили годовую зарплату.|Annual/monthly salary; hourly pay обычно wage/wages.
flexible|adj|B2|гибкий, допускающий изменение|The company offers [[flexible]] working hours.|Компания предлагает гибкий рабочий график.|Изменяемый по обстоятельствам; не физически сгибаемый материал.
workload|n||объём работы, рабочая нагрузка|We need to distribute the [[workload]] more evenly.|Нужно распределить рабочую нагрузку более равномерно.|A heavy/manageable workload; объём задач, не скорость выполнения.
stress|n|B1|стресс, напряжение из-за трудностей|She spoke openly about work-related [[stress]].|Она открыто рассказала о стрессе из-за работы.|Under stress; не ударение в слове и не глагол подчёркивать.|main|learner
burnout|n||выгорание из-за длительной перегрузки|The team discussed ways to recognise [[burnout]] early.|Команда обсудила способы рано замечать выгорание.|Обычно неисчисляемое. Подразумевает длительную перегрузку, а не однократную усталость.
privacy|n|B2|неприкосновенность частной жизни|The app gives users more control over their [[privacy]].|Приложение даёт пользователям больше контроля над частной жизнью.|Protect/respect privacy; не полная синонимичность security.
sustainable|adj|C1|экологически устойчивый|The city is investing in [[sustainable]] transport.|Город вкладывается в экологически устойчивый транспорт.|Экологический смысл; источник C1 сохранён как явное расширение темы.
emission|n||выброс вещества в атмосферу|The factory reported lower [[emissions]] after replacing its boilers.|Завод сообщил о снижении выбросов после замены котлов.|В экологическом контексте часто множественное emissions; reduce emissions.
waste|n|B2|отходы|The building has separate containers for food [[waste]].|В здании есть отдельные контейнеры для пищевых отходов.|Неисчисляемое: household/food waste; не waste of time.|material|learner
inflation|n|B2|инфляция, общий рост цен|The survey asked how [[inflation]] had affected household spending.|В опросе спрашивали, как инфляция повлияла на расходы домохозяйств.|Экономическое значение; не процесс надувания.
consumer|n|B2|потребитель|The guide explains what a [[consumer]] can do if a product fails.|В руководстве объясняется, что может сделать потребитель при поломке товара.|Лицо, покупающее для собственного использования; не любой клиент компании.
demand|n|B2|спрос|There is growing [[demand]] for reliable repair services.|Растёт спрос на надёжные ремонтные услуги.|Demand for goods/services; не настойчивое требование.|market
participation|n||участие|The organisers encouraged [[participation]] from all age groups.|Организаторы поощряли участие людей всех возрастов.|Participation in an activity; неисчисляемое в общем значении.
policy|n|B2|согласованная политика, набор правил|The company updated its remote-working [[policy]].|Компания обновила свою политику удалённой работы.|Policy on something; не insurance policy как страховой документ.
assessment|n|B2|оценка, процесс оценивания|The course ends with a practical [[assessment]].|Курс завершается практической оценкой навыков.|Assessment of skills/risks; выбран процесс или результат оценивания.
curriculum|n|B1|учебная программа|The [[curriculum]] includes practical network exercises.|Учебная программа включает практические упражнения по сетям.|Curriculum: содержание обучения; curricula/curriculums — варианты множественного числа.
deployment|n||развёртывание программы|The team postponed the [[deployment]] until the checks passed.|Команда отложила развёртывание до успешного завершения проверок.|Software deployment; не только военное размещение.
repository|n||репозиторий исходного кода и истории изменений|The [[repository]] contains the source code and review guidelines.|В репозитории находятся исходный код и правила ревью.|Code repository; не просто произвольная папка без истории.|code
release|n||выпуск, версия программы|The next [[release]] fixes the reported login issue.|Следующая версия исправляет сообщённую проблему со входом.|Software release; метка B2 музыкального релиза сюда не переносится.|software
outage|n||перерыв в доступности сервиса|The [[outage]] affected the login service for twenty minutes.|Из-за сбоя сервис входа был недоступен двадцать минут.|Service/power outage; длительность недоступности, не любая отдельная ошибка.
bandwidth|n||пропускная способность канала|The connection has enough [[bandwidth]] for several video calls.|Пропускной способности соединения хватает для нескольких видеозвонков.|В сетях — объём передаваемых данных за единицу времени; не задержка ответа.
latency|n||задержка передачи или отклика|High [[latency]] made the remote session difficult to use.|Из-за высокой задержки удалённым сеансом было трудно пользоваться.|Network latency; не синоним bandwidth.
`;
  rows.trim().split('\n').forEach(line => {
    const parts = line.split('|'), [word] = parts;
    const source = word === 'repository' ? 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories' : word === 'deployment' ? 'https://learn.microsoft.com/visualstudio/deployment/deploying-applications-services-and-components' : parts[8] === 'learner' ? `https://dictionary.cambridge.org/dictionary/learner-english/${word}` : E.dictionary(word);
    const category = ['deployment', 'repository', 'release', 'outage', 'bandwidth', 'latency'].includes(word) ? 'it' : ['promotion', 'qualification', 'salary', 'workload', 'policy', 'flexible'].includes(word) ? 'workplace' : 'everyday';
    E.addTopicEntry(parts.slice(0, 8), category, source);
  });
})(ETEnglish);
