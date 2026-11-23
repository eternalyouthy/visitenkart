/* Balanced content expansion. Examples and Russian explanations are original.
   Course levels are editorial study targets, not verified dictionary ratings. */
(function (E) {
  'use strict';
  function addRows(key, category, target, text, expressionKind) {
    const topic = E.topicByKey(key);
    if (!topic) throw new Error('Missing expansion topic: ' + key);
    const ids = text.trim().split('\n').map(line => {
      const [headword, pos, ru, en, translation, usage, variation, variationRu] = line.split('|');
      if (!headword || !usage || (expressionKind && (!variation || !variationRu))) throw new Error('Incomplete expansion row: ' + headword);
      const id = E.id(headword, pos);
      if (!E.entries[id]) {
        E.addTopicEntry([headword, pos, '', ru, en, translation, usage], category, E.dictionary(headword), pos === 'chunk');
        const w = E.entries[id];
        w.courseLevel = target;
        w.audit = { meaning: 'editorial-reviewed', example: 'editorial-reviewed', morphology: 'editorial-reviewed',
          evidence: 'Авторский учебный материал: перевод, контекст и употребление. Ссылка — словарный поиск; отдельная CEFR-метка не подтверждалась.' };
        w.sources = [{ title: 'Dictionary lookup', url: E.dictionary(headword), status: 'reference-link' }];
        if (expressionKind) {
          w.expressionKind = expressionKind; w.why = usage;
          w.variations = [{ en: variation, ru: variationRu }];
          w.transparency = expressionKind === 'idiom' ? 'figurative' : 'transparent';
        }
      }
      return id;
    });
    topic.entryIds = [...new Set([...topic.entryIds, ...ids])];
  }

  addRows('words:home', 'everyday', 'B1', `
utility bill|n|счёт за коммунальные услуги|The [[utility bill]] was higher than usual this month.|В этом месяце счёт за коммунальные услуги был выше обычного.|Pay a utility bill; utilities — электричество, вода и другие коммунальные услуги.
tenancy agreement|n|договор аренды жилья|Read the [[tenancy agreement]] before signing it.|Прочитай договор аренды жилья перед подписанием.|Типично для британского английского; agreement between a landlord and a tenant.
leak|n|протечка|There's a [[leak]] under the kitchen sink.|Под кухонной раковиной протечка.|A water leak; report or fix a leak. В IT тем же словом называют утечку, но здесь речь о воде.
appliance|n|бытовой прибор|The broken [[appliance]] is still under warranty.|На сломавшийся бытовой прибор ещё действует гарантия.|A household appliance: холодильник, стиральная машина и подобная техника; не любое устройство.
furnished|adj|меблированный|We're looking for a [[furnished]] flat near the station.|Мы ищем меблированную квартиру рядом с вокзалом.|A furnished flat уже содержит мебель; unfurnished — без мебели. Состав мебели уточняют отдельно.
`);
  addRows('words:travel', 'everyday', 'B1', `
return ticket|n|билет туда и обратно|I'd like a [[return ticket]] to Manchester, please.|Мне, пожалуйста, билет до Манчестера и обратно.|Британский вариант; в американском английском обычно round-trip ticket.
single ticket|n|билет в одну сторону|I only need a [[single ticket]] because I'm coming back by bus.|Мне нужен только билет в одну сторону: обратно я поеду автобусом.|В британской речи single противопоставляется return; американский вариант — one-way ticket.
diversion|n|объезд; изменение маршрута|The bus is following a [[diversion]] because the main road is closed.|Автобус едет в объезд, потому что главная дорога закрыта.|В транспортном контексте change of route; не отвлечение внимания, другое значение этого слова.
replacement bus|n|автобус вместо отменённого поезда|A [[replacement bus]] will leave from outside the station.|Автобус вместо поезда отправится от здания вокзала.|Часто rail replacement bus/service; уточняйте место посадки, оно может быть не у платформы.
seat reservation|n|бронирование места|Does the fare include a [[seat reservation]]?|Включено ли бронирование места в стоимость проезда?|Билет на поезд и бронирование конкретного места — не всегда одна услуга.
`);
  addRows('words:health', 'everyday', 'B1', `
referral|n|направление к специалисту|The receptionist asked whether I had a [[referral]].|Администратор спросил, есть ли у меня направление.|В этом значении a referral to a specialist; get a referral from a doctor.
check-up|n|профилактический осмотр|I've booked a dental [[check-up]] for next Tuesday.|Я записался на профилактический осмотр у стоматолога на следующий вторник.|Have or go for a check-up; обычно плановый осмотр, а не описание конкретного лечения.
swelling|n|отёк; припухлость|The doctor examined the [[swelling]] around my ankle.|Врач осмотрел припухлость вокруг моей лодыжки.|Describe the location and duration; a swollen ankle — опухшая лодыжка.
dizziness|n|головокружение|I mentioned the [[dizziness]] when I spoke to the nurse.|Разговаривая с медсестрой, я упомянул головокружение.|Обычно неисчисляемое: feel dizzy, experience dizziness; не a dizziness.
side effect|n|побочное действие|The leaflet lists a possible [[side effect]] of the medicine.|В инструкции указано возможное побочное действие лекарства.|Часто во множественном числе side effects; an effect of a medicine, не обязательно аллергия.
`);
  addRows('words:everyday', 'everyday', 'B1', `
errand|n|небольшое поручение; дело вне дома|I need to run an [[errand]] before lunch.|До обеда мне нужно сходить по одному делу.|Run errands — выполнять небольшие бытовые дела, например зайти на почту или в магазин.
reminder|n|напоминание|I set a [[reminder]] so I wouldn't miss the appointment.|Я поставил напоминание, чтобы не пропустить приём.|Set a reminder; a reminder to do something. Также сообщение, напоминающее о действии.
outcome|n|результат; исход|We won't know the [[outcome]] until Friday.|До пятницы мы не узнаем результат.|The outcome of a process or discussion; подчёркивает итог, а не отдельный выполненный шаг.
drawback|n|недостаток|The main [[drawback]] is the long journey to work.|Главный недостаток — долгая дорога на работу.|A drawback of something; an advantage and a drawback удобно сопоставлять при выборе.
alternative|n|другой вариант; альтернатива|Is there an [[alternative]] to taking a taxi?|Есть ли другой вариант, кроме такси?|An alternative to + существительное или -ing; не alternative of в этой модели.
`);

  addRows('professional:work', 'workplace', 'B1', `
onboarding|n|введение нового сотрудника в работу|The [[onboarding]] process includes meeting the team and setting up accounts.|Введение в работу включает знакомство с командой и настройку аккаунтов.|Employee onboarding — адаптация сотрудника; также бывает onboarding пользователей продукта.
probation|n|испытательный срок на работе|My manager scheduled a review before the end of my [[probation]].|Руководитель назначил обсуждение результатов до окончания моего испытательного срока.|В рабочем контексте probation period. Слово имеет и другое, юридическое значение.
notice period|n|срок уведомления об увольнении|We discussed the [[notice period]] during the interview.|Мы обсудили срок уведомления об увольнении на собеседовании.|A notice period — период между уведомлением и завершением работы; конкретные условия зависят от договора.
sick leave|n|отпуск по болезни; больничный|My colleague is on [[sick leave]] this week.|На этой неделе мой коллега на больничном.|Be on sick leave; не on a sick leave. Фраза описывает отсутствие по болезни.
payslip|n|расчётный листок|I checked my [[payslip]] to see how the overtime was recorded.|Я проверил расчётный листок, чтобы увидеть, как учли сверхурочную работу.|В британском английском payslip; в США часто pay stub. Это документ с расчётом зарплаты.
reimbursement|n|возмещение расходов|Please keep the receipts for travel [[reimbursement]].|Сохрани, пожалуйста, чеки для возмещения расходов на поездку.|Reimbursement for expenses; reimburse someone for something. Не то же самое, что зарплата.
overtime|n|сверхурочная работа|We agreed to record all [[overtime]] accurately.|Мы договорились точно учитывать всю сверхурочную работу.|Work overtime; pay for overtime. Обычно неисчисляемое, без множественного окончания -s.
attendance|n|присутствие; посещаемость|Please confirm your [[attendance]] at the workshop.|Подтверди, пожалуйста, своё участие в семинаре.|Attendance at a meeting; confirm attendance — сообщить, что будешь присутствовать.
availability|n|доступность; свободное время|Could you send me your [[availability]] for next week?|Можешь сообщить, когда ты свободен на следующей неделе?|В договорённостях о встречах означает свободные промежутки времени; не обязательно доступность онлайн.
line manager|n|непосредственный руководитель|I discussed the training request with my [[line manager]].|Я обсудил заявку на обучение со своим непосредственным руководителем.|Сотрудник, которому вы непосредственно подчиняетесь; не обязательно руководитель всей организации.
`);
  addRows('professional:dev', 'it', 'B2', `
bug|n|ошибка в программе|The team found a [[bug]] in the password reset flow.|Команда нашла ошибку в процессе сброса пароля.|Report, reproduce, fix a bug; в разработке это дефект программы, не насекомое.
feature|n|функция; возможность продукта|The new [[feature]] lets users export their settings.|Новая функция позволяет пользователям экспортировать настройки.|Implement or release a feature; feature request — запрос на новую возможность.
branch|n|ветка разработки|I created a separate [[branch]] for the change.|Я создал отдельную ветку для изменения.|В системе контроля версий ветка позволяет вести отдельную линию изменений.
commit|n|зафиксированный набор изменений|The last [[commit]] updates the configuration examples.|Последний коммит обновляет примеры конфигурации.|В контексте Git: create, inspect or revert a commit. Здесь существительное, не глагол обещания.
merge|v|объединять изменения; сливать ветки|We can [[merge]] the branch after the checks pass.|Мы можем слить ветку после успешного прохождения проверок.|Merge one branch into another; resolve merge conflicts — разрешить конфликты слияния.
build|n|сборка программы|The latest [[build]] passed the smoke tests.|Последняя сборка прошла базовые проверки работоспособности.|Может обозначать процесс сборки или его результат; здесь результат сборки.
refactor|v|менять структуру кода с сохранением поведения|We plan to [[refactor]] the parser before adding another format.|Мы планируем переработать структуру парсера перед добавлением ещё одного формата.|Refactor code; цель — улучшить внутреннюю структуру при сохранении наблюдаемого поведения.
debugging|n|отладка|Good logs make [[debugging]] easier.|Хорошие журналы облегчают отладку.|Debugging — поиск и устранение причин ошибок; не просто запуск программы в отладчике.
staging|n|предпродукционная среда проверки|We tested the migration in [[staging]] before the production rollout.|Мы проверили миграцию в предпродукционной среде перед внедрением в рабочую.|Часто staging environment; on staging тоже встречается, но in staging естественно для названия среды.
acceptance criteria|n|критерии приёмки|The [[acceptance criteria]] describe what the user must be able to do.|Критерии приёмки описывают, что пользователь должен уметь сделать.|Criteria — множественное число, criterion — единственное. Нужны проверяемые условия готовности.
`);
  addRows('professional:infra', 'it', 'B2', `
hostname|n|имя узла|The alert includes the [[hostname]] of the affected server.|Оповещение содержит имя затронутого сервера.|Имя узла не обязательно совпадает с IP-адресом или публичным доменным именем.
IP address|n|IP-адрес|The device received a new [[IP address]] after reconnecting.|После повторного подключения устройство получило новый IP-адрес.|Assign an IP address; public/private address. Адрес относится к сетевому интерфейсу в конкретном контексте.
router|n|маршрутизатор|The [[router]] forwards packets between the two networks.|Маршрутизатор пересылает пакеты между двумя сетями.|Route traffic between networks; не путайте маршрутизацию с коммутацией внутри одного сегмента.
gateway|n|шлюз|The default [[gateway]] was missing from the configuration.|В конфигурации отсутствовал шлюз по умолчанию.|Default gateway — следующий узел для трафика, которому не подходит более специфичный маршрут.
routing table|n|таблица маршрутизации|Check the [[routing table]] before changing the network settings.|Проверь таблицу маршрутизации перед изменением сетевых настроек.|Contains routes and next hops; lookup выбирает подходящий маршрут, а не просто первый в списке.
nameserver|n|сервер имён|The resolver queried an authoritative [[nameserver]].|Резолвер отправил запрос авторитетному серверу имён.|Nameserver отвечает на запросы об именах; роли авторитетного сервера и рекурсивного резолвера различаются.
certificate|n|цифровой сертификат|The service presented an expired [[certificate]].|Сервис предъявил просроченный цифровой сертификат.|В TLS сертификат связывает идентичность с открытым ключом в рамках доверенной модели; срок — одна из проверок.
failover|n|переключение на резерв|We tested automatic [[failover]] during the maintenance window.|Во время окна обслуживания мы проверили автоматическое переключение на резерв.|Failover переключает работу на резервный ресурс; failback — возвращение к исходному после восстановления.
storage|n|хранилище; дисковое пространство|The database needs more [[storage]] for the archived records.|Базе данных нужно больше дискового пространства для архивных записей.|Обычно неисчисляемое. Storage capacity — вместимость; не то же самое, что оперативная память.
monitoring|n|наблюдение за состоянием системы|Our [[monitoring]] detected a sharp increase in response times.|Наша система мониторинга обнаружила резкий рост времени ответа.|Monitoring собирает и оценивает сигналы; alerting уведомляет об условиях, требующих внимания.
`);
  addRows('professional:security', 'it', 'B2', `
encryption|n|шифрование|The backup service supports [[encryption]] at rest.|Сервис резервного копирования поддерживает шифрование хранимых данных.|Encryption at rest и in transit — разные контексты защиты. Не путайте шифрование с хешированием.
phishing|n|фишинг|The message was part of a [[phishing]] campaign.|Сообщение было частью фишинговой кампании.|Атака через обман и выдачу себя за доверенный источник; phishing email — фишинговое письмо.
breach|n|нарушение безопасности; утечка данных|The team is investigating a possible data [[breach]].|Команда расследует возможную утечку данных.|Data breach относится к нарушению безопасности данных; не каждый incident подтверждает такую утечку.
audit log|n|журнал аудита|The [[audit log]] records who changed the permissions.|Журнал аудита фиксирует, кто изменил права.|Record an event in an audit log; для расследования важны также целостность и полнота записей.
service account|n|служебная учётная запись|The application runs under a dedicated [[service account]].|Приложение работает под отдельной служебной учётной записью.|Предназначена для процесса или сервиса; назначайте необходимые права и учитывайте владельца.
access control|n|управление доступом|The review found a gap in the application's [[access control]].|Проверка выявила пробел в управлении доступом приложения.|Определяет и обеспечивает, кому доступны какие действия и ресурсы; не ограничивается экраном входа.
privilege escalation|n|повышение привилегий|The flaw could allow [[privilege escalation]] from a normal user to an administrator.|Ошибка могла позволить обычному пользователю получить права администратора.|В контексте атаки получение более высоких полномочий; не любое легитимное назначение роли.
threat model|n|модель угроз|We updated the [[threat model]] after adding an external integration.|Мы обновили модель угроз после добавления внешней интеграции.|Описывает активы, предположения, границы доверия и возможные угрозы; не просто список найденных багов.
remediation|n|устранение проблемы безопасности|The report includes a [[remediation]] plan for the exposed service.|Отчёт включает план устранения проблемы открытого сервиса.|Remediation plan or steps — конкретные действия по исправлению; mitigation может лишь уменьшать риск.
containment|n|локализация инцидента|The responders prioritised [[containment]] before restoring the affected machines.|Специалисты сначала сосредоточились на локализации инцидента, а затем на восстановлении машин.|Ограничение распространения и воздействия; не означает, что причина уже полностью устранена.
`);
  addRows('professional:business', 'workplace', 'B2', `
invoice|n|счёт на оплату|Please include the project number on the [[invoice]].|Укажи, пожалуйста, номер проекта в счёте на оплату.|Issue, send or pay an invoice. Receipt подтверждает оплату, invoice запрашивает её.
quotation|n|ценовое предложение|We requested a written [[quotation]] for the installation.|Мы запросили письменное ценовое предложение на установку.|В коммерческом контексте предложение цены и условий; не цитата. Неформально часто quote.
purchase order|n|заказ на закупку|The supplier asked for a [[purchase order]] before shipping the equipment.|Поставщик запросил заказ на закупку перед отправкой оборудования.|Часто PO; документ покупателя, связанный с заказом, а не счёт продавца.
revenue|n|выручка|Subscription [[revenue]] increased during the quarter.|Выручка от подписок выросла за квартал.|Выручка до вычета соответствующих расходов; revenue и profit не взаимозаменяемы.
profit margin|n|маржа прибыли|Higher delivery costs reduced the [[profit margin]].|Рост расходов на доставку снизил маржу прибыли.|Отношение выбранного показателя прибыли к выручке; уточняйте gross, operating или net margin.
expenditure|n|расходы; затраты|The team reviewed its annual [[expenditure]] on software.|Команда пересмотрела годовые расходы на программное обеспечение.|Формальный вариант: expenditure on something. Для отдельных статей часто проще expenses или costs.
payment terms|n|условия оплаты|The [[payment terms]] specify when the invoice must be paid.|Условия оплаты указывают, когда нужно оплатить счёт.|Описывают сроки и другие условия; terms здесь не терминология и не учебные семестры.
milestone|n|контрольная веха проекта|The first [[milestone]] is a working prototype.|Первая контрольная веха — работающий прототип.|Значимая точка или результат проекта; не каждая мелкая задача является milestone.
constraint|n|ограничение|The main [[constraint]] is the limited time available.|Основное ограничение — нехватка времени.|A budget, time or technical constraint; ограничение задаёт границы возможного решения.
contingency plan|n|план действий на случай непредвиденных обстоятельств|We need a [[contingency plan]] in case the supplier misses the deadline.|Нам нужен запасной план на случай срыва срока поставщиком.|A plan for a possible disruption; contingency budget — резерв на непредвиденные расходы.
`);

  addRows('idioms:people', 'chunks', 'B2', `
a blessing in disguise|chunk|неприятность, обернувшаяся удачей|Missing that train was [[a blessing in disguise]] because I met an old friend at the station.|Пропущенный поезд неожиданно обернулся удачей: на вокзале я встретил старого друга.|Первоначально неприятное событие впоследствии принесло пользу. Не подходит, если положительного результата ещё нет.|It turned out to be a blessing in disguise.|В итоге это оказалось к лучшему.
spill the beans|chunk|выболтать секрет|Please don't [[spill the beans]] about the surprise party.|Пожалуйста, не проболтайся о вечеринке-сюрпризе.|Неформально о раскрытии секрета; может быть намеренным или случайным. Буквальные бобы не подразумеваются.|Who spilled the beans?|Кто всё разболтал?
on the fence|chunk|колебаться; не определиться|I'm still [[on the fence]] about accepting the offer.|Я всё ещё не решил, принимать ли предложение.|Об отсутствии окончательного выбора между позициями или вариантами. Sit on the fence иногда звучит как критика нерешительности.|She's on the fence about moving.|Она пока не определилась с переездом.
` , 'idiom');
  addRows('idioms:situations', 'chunks', 'B2', `
bite the bullet|chunk|решиться на неприятный, но необходимый шаг|I need to [[bite the bullet]] and tell them I made a mistake.|Нужно набраться решимости и сказать им, что я ошибся.|Об осознанном принятии неприятного действия, которого хочется избегать. Разговорный регистр; это не призыв к насилию.|We finally bit the bullet and replaced the old boiler.|Мы наконец решились заменить старый котёл.
miss the boat|chunk|упустить возможность|If we wait much longer, we might [[miss the boat]].|Если мы ещё долго будем ждать, можем упустить возможность.|О возможности, которая больше не будет доступна; не обязательно о транспорте.|I missed the boat on those cheap tickets.|Я упустил возможность купить те дешёвые билеты.
in the long run|chunk|в долгосрочной перспективе|Buying a reliable appliance may save money [[in the long run]].|Покупка надёжного прибора может сэкономить деньги в долгосрочной перспективе.|Сопоставляет последствия со временем с немедленным результатом. Не означает непрерывную длительность действия.|It should be cheaper in the long run.|В долгосрочной перспективе это должно обойтись дешевле.
` , 'idiom');
  addRows('idioms:decisions', 'chunks', 'B2', `
call it a day|chunk|закончить работу на сегодня|We've finished the urgent tasks, so let's [[call it a day]].|Мы закончили срочные задачи, так что давайте на сегодня заканчивать.|Завершить текущую работу или занятие; не обязательно навсегда отказаться от проекта.|Shall we call it a day?|Может, на сегодня закончим?
go the extra mile|chunk|сделать больше ожидаемого; особенно постараться|She will [[go the extra mile]] to help a new colleague settle in.|Она особенно постарается помочь новому коллеге освоиться.|Положительная оценка дополнительных усилий сверх ожидаемого. Не обязательно буквально работать сверхурочно.|Thanks for going the extra mile.|Спасибо, что приложил дополнительные усилия.
the tip of the iceberg|chunk|верхушка айсберга|The first complaint may be [[the tip of the iceberg]].|Первая жалоба может оказаться лишь верхушкой айсберга.|Видимая небольшая часть более масштабной, часто скрытой проблемы. Не доказательство её масштаба само по себе.|These delays are just the tip of the iceberg.|Эти задержки — лишь верхушка айсберга.
back to square one|chunk|снова в исходной точке; начинать заново|The test failed, and we were [[back to square one]].|Проверка не удалась, и мы снова оказались в исходной точке.|О ситуации, когда предыдущая попытка не дала нужного продвижения и приходится пересматривать подход.|That puts us back to square one.|Это возвращает нас в исходную точку.
` , 'idiom');
  addRows('everyday-phrases:respond', 'chunks', 'B1', `
I don't mind|chunk|мне всё равно в смысле «оба варианта подходят»|[[I don't mind]] where we sit, as long as it's quiet.|Мне неважно, где мы сядем, лишь бы было тихо.|Мягкое отсутствие предпочтения или возражения. I don't care нередко звучит резче. После mind возможна форма -ing.|I don't mind waiting a little longer.|Я не против подождать ещё немного.
that's a shame|chunk|жаль; как досадно|[[That's a shame]]; I was looking forward to seeing you.|Жаль, я рассчитывал с тобой увидеться.|Реакция сочувствия на неприятную новость. Здесь shame не означает обвинение человека в позоре.|Oh, that's a shame. Maybe next time.|Жаль. Может быть, в следующий раз.
how come|chunk|как так; почему|[[How come]] you're leaving so early?|Как так, ты уходишь настолько рано?|Разговорное why; после how come обычно порядок утверждения: you're leaving, не are you leaving.|How come the shop is closed?|Почему магазин закрыт?
go ahead|chunk|давай; продолжай; можно|[[Go ahead]], I'm listening.|Продолжай, я слушаю.|Разрешает начать или продолжить действие. Значение зависит от ситуации; это не буквальное указание направления.|Can I ask something? — Go ahead.|Можно кое-что спросить? — Конечно.
you never know|chunk|кто знает; всякое бывает|Take a jacket; [[you never know]] how cold it might get.|Возьми куртку: кто знает, насколько похолодает.|Подчёркивает неопределённость или неожиданную возможность, а не буквальную неспособность человека что-либо знать.|You never know, they might say yes.|Кто знает, может, они согласятся.
` , 'everyday');
  addRows('everyday-phrases:arrange', 'chunks', 'B1', `
give me a moment|chunk|дай мне минуту|[[Give me a moment]]; I'll check the address.|Дай мне минуту, я проверю адрес.|Просьба немного подождать; более вежливо Could you give me a moment, please? Минута здесь не точный срок.|Could you give me a moment, please?|Не могли бы вы немного подождать?
I'm on my way|chunk|я уже в пути|[[I'm on my way]] and should be there in twenty minutes.|Я уже в пути и должен быть на месте через двадцать минут.|О движении к месту назначения. Если вы ещё не выехали, точнее сказать I'm about to leave.|I'm on my way to the station.|Я еду на вокзал.
I'll be right back|chunk|я скоро вернусь; я на минуту|[[I'll be right back]]; I just need to get my coat.|Я сейчас вернусь, мне только нужно взять пальто.|Right усиливает близость возвращения; не обозначает направление направо.|I'll be right back with your order.|Я сейчас вернусь с вашим заказом.
what do you reckon|chunk|как думаешь; что скажешь|[[What do you reckon]] we should do next?|Как думаешь, что нам делать дальше?|Неформально, особенно в британской речи. В официальной переписке нейтральнее What do you think?|Friday at six — what do you reckon?|В пятницу в шесть — что скажешь?
it doesn't matter|chunk|это неважно; ничего страшного|[[It doesn't matter]] if we're a few minutes late.|Ничего страшного, если мы опоздаем на несколько минут.|Снижает значимость обстоятельства. Не используйте, чтобы отмахнуться от действительно важной для собеседника проблемы.|It doesn't matter which one you choose.|Неважно, какой ты выберешь.
` , 'everyday');
  addRows('chunks:clarify', 'chunks', 'B1', `
could you be more specific|chunk|не могли бы вы уточнить конкретнее|[[Could you be more specific]] about the problem you're seeing?|Не могли бы вы конкретнее описать наблюдаемую проблему?|Просьба о деталях; полезно назвать, какой именно аспект нужно уточнить.|Could you be a little more specific?|Не могли бы вы выразиться чуть конкретнее?
do you mean that|chunk|вы имеете в виду, что|[[Do you mean that]] we need to submit the form again?|Вы имеете в виду, что нам нужно снова подать бланк?|Проверка интерпретации; после that идёт полное предложение с обычным порядком слов.|Do you mean that the meeting is cancelled?|Вы имеете в виду, что встреча отменена?
`, 'chunk');
  addRows('chunks:opinion', 'chunks', 'B1', `
from my point of view|chunk|с моей точки зрения|[[From my point of view]], the shorter course is more practical.|С моей точки зрения, более короткий курс практичнее.|Вводит личную перспективу; не превращает мнение в установленный факт.|From her point of view, the risk was too high.|С её точки зрения, риск был слишком велик.
as far as I'm concerned|chunk|что касается моего мнения; лично для меня|[[As far as I'm concerned]], we should focus on the urgent tasks first.|По моему мнению, сначала нужно сосредоточиться на срочных задачах.|Часто более твёрдая личная позиция, чем as far as I know, которое ограничивает знания.|As far as I'm concerned, the matter is settled.|Лично для меня вопрос решён.
`, 'chunk');
  addRows('chunks:email', 'chunks', 'B2', `
I would appreciate it if|chunk|буду признателен, если|[[I would appreciate it if]] you could confirm the date by Friday.|Буду признателен, если вы сможете подтвердить дату до пятницы.|Формальная вежливая просьба: appreciate it if + подлежащее + could. Не опускайте it в этой модели.|I'd appreciate it if you could send the details.|Буду признателен, если вы пришлёте подробности.
with reference to|chunk|в связи с; касательно|[[With reference to]] your email, the updated proposal is attached.|В ответ на ваше письмо направляю обновлённое предложение во вложении.|Формальное обозначение письма или вопроса, к которому относится ответ; после to идёт существительное.|With reference to our conversation, I have revised the schedule.|По итогам нашего разговора я пересмотрел расписание.
`, 'chunk');
  addRows('chunks:problem', 'chunks', 'B2', `
it seems to happen at random|chunk|похоже, это происходит случайным образом|[[It seems to happen at random]], even when the settings stay the same.|Похоже, это происходит случайным образом, даже при неизменных настройках.|Seems сохраняет неопределённость: пока не обнаружена закономерность, случайность не доказана.|The failure seems to occur at random.|Кажется, сбой возникает без явной закономерности.
I haven't been able to|chunk|мне пока не удалось|[[I haven't been able to]] reproduce the problem on my laptop.|Мне пока не удалось воспроизвести проблему на моём ноутбуке.|Present Perfect описывает результат попыток до текущего момента; затем инфинитив без дополнительного to.|I haven't been able to reach the supplier yet.|Мне пока не удалось связаться с поставщиком.
`, 'chunk');
  addRows('chunks:appointments', 'chunks', 'B1', `
would another time suit you|chunk|вам подошло бы другое время|[[Would another time suit you]], or should we keep the original appointment?|Вам подошло бы другое время или оставим прежнюю запись?|Suit someone — подходить человеку. Вежливо проверяет готовность изменить время.|Would Thursday morning suit you better?|Вам больше подошёл бы четверг утром?
something has come up|chunk|возникло непредвиденное дело|[[Something has come up]], so I need to move our call.|Возникло непредвиденное дело, поэтому мне нужно перенести наш звонок.|Разговорное объяснение изменения планов без подробностей; предложите новое время, если переносите встречу.|I'm sorry, something unexpected has come up.|Извините, возникло кое-что непредвиденное.
`, 'chunk');
  E.sections.find(s => s.id === 'idioms').ru = 'Полезные идиомы: переносный смысл, регистр и естественные ситуации употребления.';
})(ETEnglish);
