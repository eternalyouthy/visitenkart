/* Append-only content: canonical IDs, original examples, editorial study targets.
   Add rows to the relevant collection and reference their IDs from a topic below. */
(function (E) {
  'use strict';
  const add = (text, category, level, expressionKind) => text.trim().split('\n').map(line => {
    const [headword, pos, ru, en, translation, why, variation, variationRu] = line.split('|');
    const id = E.id(headword, pos), existed = !!E.entries[id];
    E.addTopicEntry([headword, pos, '', ru, en, translation, why], category, E.dictionary(headword), pos === 'chunk');
    const w = E.entries[id];
    if (!existed) {
      w.courseLevel = level;
      // Lookup links are supplied for further reading, not claimed as verified evidence.
      w.audit = { meaning: 'editorial-reviewed', example: 'editorial-reviewed', morphology: 'editorial-reviewed',
        evidence: 'Редакционное объяснение и авторский пример. Словарная CEFR-метка не заявляется; ссылка предназначена для самостоятельной проверки.' };
      w.sources[0].status = 'reference-link';
      w.sources[0].title = 'Dictionary lookup';
      w.sources[0].evidence = w.audit.evidence;
    }
    if (expressionKind) {
      w.expressionKind = expressionKind;
      w.why = why;
      w.variations = [{ en: variation, ru: variationRu }];
      if (expressionKind === 'idiom') w.transparency = 'figurative';
    }
    return id;
  });
  const idioms = add(`
it's not my cup of tea|chunk|это не моё; мне это не по вкусу|[[It's not my cup of tea]], but I can see why you enjoy it.|Это не моё, но я понимаю, почему тебе это нравится.|О предпочтении, а не о качестве вещи. Разговорная мягкая оценка; с человеком лучше не использовать.|Horror films aren't really my cup of tea.|Фильмы ужасов мне не очень по вкусу.
break the ice|chunk|разрядить обстановку; начать общение|A quick introduction can [[break the ice]] at the start of a meeting.|Короткое знакомство помогает разрядить обстановку в начале встречи.|Образ льда передаёт первоначальную скованность. Речь об облегчении первого общения, а не о решении конфликта.|She broke the ice by asking about our weekend.|Она сняла неловкость вопросом о наших выходных.
hit the nail on the head|chunk|попасть в точку|You [[hit the nail on the head]] when you said the instructions were unclear.|Ты попал в точку, сказав, что инструкции были непонятными.|Так хвалят точное наблюдение или объяснение причины. Это переносное употребление, не инструкция о гвоздях.|You've hit the nail on the head.|Ты совершенно точно подметил.
under the weather|chunk|неважно себя чувствовать|I'm feeling [[under the weather]], so I'll stay home today.|Мне нездоровится, поэтому сегодня я останусь дома.|Разговорное обозначение недомогания, обычно лёгкого. Не описывает конкретный симптом или диагноз.|She's a bit under the weather today.|Ей сегодня немного нездоровится.
on the same page|chunk|одинаково понимать ситуацию|Let's check that we're [[on the same page]] before we continue.|Прежде чем продолжить, проверим, что мы одинаково понимаем ситуацию.|Общая страница — образ общего понимания. Это не обязательно согласие со всеми деталями.|Are we all on the same page about the deadline?|Мы все одинаково понимаем срок?
a piece of cake|chunk|проще простого|After all that practice, the interview felt like [[a piece of cake]].|После всей этой практики собеседование показалось очень лёгким.|Неформальная оценка простоты задачи. Может звучать самоуверенно, если другой человек с ней мучается.|The setup was a piece of cake.|Настройка оказалась проще простого.
once in a blue moon|chunk|крайне редко|We eat out [[once in a blue moon]] because we prefer cooking at home.|Мы крайне редко едим вне дома, потому что предпочитаем готовить сами.|Устойчивая гипербола о редком событии; точный календарный интервал не подразумевается.|He calls once in a blue moon.|Он звонит крайне редко.
cost an arm and a leg|chunk|стоить целое состояние|Repairs can [[cost an arm and a leg]] if you wait too long.|Ремонт может обойтись в целое состояние, если слишком долго тянуть.|Неформальное преувеличение высокой цены. В официальной смете лучше expensive или costly.|That laptop cost me an arm and a leg.|Тот ноутбук обошёлся мне в целое состояние.
get the ball rolling|chunk|дать делу ход; начать процесс|Let's [[get the ball rolling]] by agreeing on the first task.|Давайте начнём с согласования первой задачи.|Движущийся мяч — образ запущенного процесса. После by используйте форму на -ing.|Who wants to get the ball rolling?|Кто хочет начать?
keep an eye on|chunk|присматривать за; следить за|Could you [[keep an eye on]] my bag while I buy a ticket?|Можешь присмотреть за моей сумкой, пока я покупаю билет?|О внимательном наблюдении за человеком, вещью или процессом. После on нужен объект.|I'll keep an eye on the service overnight.|Я прослежу за работой сервиса ночью.
the last straw|chunk|последняя капля|Another cancelled meeting was [[the last straw]], so I asked for a new schedule.|Ещё одна отменённая встреча стала последней каплей, и я попросил новое расписание.|Последнее событие после серии проблем, из-за которого терпение заканчивается. Не просто самая серьёзная проблема.|That delay was the last straw.|Эта задержка стала последней каплей.
out of the blue|chunk|совершенно неожиданно|An old friend called me [[out of the blue]] yesterday.|Вчера мне совершенно неожиданно позвонил старый друг.|Выражение описывает отсутствие ожидания или предупреждения; событие может быть приятным или неприятным.|The offer came out of the blue.|Предложение пришло совершенно неожиданно.
learn the ropes|chunk|освоиться; разобраться в работе|It takes time to [[learn the ropes]] in a new team.|Нужно время, чтобы разобраться в работе новой команды.|Об освоении практических процедур и правил. Часто относится к новой работе, не к изучению теории.|A colleague helped me learn the ropes.|Коллега помог мне освоиться.
cut corners|chunk|экономить за счёт качества; халтурить|We must not [[cut corners]] when testing the backup process.|Нельзя экономить на качестве проверки резервного копирования.|О пропуске необходимых шагов ради скорости или экономии. Обычно отрицательная оценка; не любая оптимизация.|They cut corners to meet the deadline.|Они сэкономили на качестве, чтобы уложиться в срок.
better late than never|chunk|лучше поздно, чем никогда|You finally replied — [[better late than never]]!|Ты наконец ответил — лучше поздно, чем никогда!|Поговорка о запоздалом действии. Может выражать поддержку или лёгкий упрёк: интонация и отношения важны.|Well, better late than never.|Что ж, лучше поздно, чем никогда.
`, 'chunks', 'B2', 'idiom');
  // The first eight idioms form an accessible B1 teaching set; no dictionary rating is inferred.
  idioms.slice(0, 8).forEach(id => { E.entries[id].courseLevel = 'B1'; });
  const everyday = add(`
it depends|chunk|зависит от обстоятельств|[[It depends]] — how much time do we have?|Смотря по обстоятельствам: сколько у нас времени?|Самостоятельный ответ, когда нельзя дать однозначное да или нет. Если называете условие, используйте depends on + существительное или вопросительное придаточное.|It depends on the weather.|Это зависит от погоды.
fair enough|chunk|ладно, принимается; резонно|[[Fair enough]], we can try your suggestion first.|Ладно, принимается, можем сначала попробовать твой вариант.|Признаёт довод или принимает объяснение без обязательного энтузиазма. Нейтральная интонация помогает не звучать пренебрежительно.|Fair enough, I hadn't thought of that.|Резонно, я об этом не подумал.
we'll figure it out|chunk|мы разберёмся; что-нибудь придумаем|Don't worry about the route; [[we'll figure it out]] together.|Не переживай о маршруте: мы вместе разберёмся.|Figure something out — найти решение или понять. It стоит между figure и out. Фраза поддерживает, но не обещает конкретного результата.|We'll figure out a way to get there.|Мы придумаем, как туда добраться.
sounds good|chunk|звучит хорошо; договорились|[[Sounds good]] — let's meet outside the station at six.|Договорились: встретимся у вокзала в шесть.|Разговорное сокращение That sounds good. Естественная реакция на предложение или план.|That sounds good to me.|Мне этот вариант подходит.
no worries|chunk|ничего страшного; не за что|[[No worries]], we can move the call to tomorrow.|Ничего страшного, можем перенести звонок на завтра.|Неформальная реакция на извинение или благодарность. В серьёзной жалобе может звучать слишком беспечно.|No worries, happy to help.|Не за что, рад помочь.
take your time|chunk|не торопись|[[Take your time]]; the next train isn't for another hour.|Не торопись: следующий поезд только через час.|Даёт собеседнику время без давления. Это разрешение не спешить, а не просьба быть медленным.|Take your time with the form.|Не торопись заполнять бланк.
let me know|chunk|дай знать; сообщи мне|[[Let me know]] if you need any help with the boxes.|Дай знать, если понадобится помощь с коробками.|После let — объект и инфинитив без to: let me know. Нейтральная просьба сообщить информацию.|Let me know when you arrive.|Сообщи, когда приедешь.
that works for me|chunk|мне это подходит|[[That works for me]]; Friday afternoon is free.|Мне это подходит: в пятницу днём я свободен.|Work for someone здесь означает подходить по времени или условиям. Так принимают практическую договорённость.|Would ten o'clock work for you?|Тебе подойдёт десять часов?
I'll get back to you|chunk|я вернусь к тебе с ответом|[[I'll get back to you]] once I've checked the train times.|Я вернусь с ответом, когда проверю расписание поездов.|Get back to someone — ответить позже после проверки. Желательно назвать срок, особенно на работе.|Can I get back to you tomorrow?|Можно я отвечу тебе завтра?
never mind|chunk|неважно; ничего страшного|[[Never mind]], I've found the address myself.|Неважно, я уже сам нашёл адрес.|Снимает прежний вопрос или успокаивает после мелкой неудачи. Резкая интонация может звучать раздражённо.|Never mind, we can try again.|Ничего страшного, можно попробовать ещё раз.
I see what you mean|chunk|понимаю, что ты имеешь в виду|[[I see what you mean]]; the instructions could be clearer.|Понимаю, что ты имеешь в виду: инструкции могли бы быть яснее.|Подтверждает понимание мысли. Не обязательно означает полное согласие с выводом.|I see what you mean, but I still prefer the first option.|Я понимаю твою мысль, но всё же предпочитаю первый вариант.
it's up to you|chunk|решать тебе|[[It's up to you]] whether we walk or take the bus.|Тебе решать, пойдём ли мы пешком или поедем на автобусе.|Передаёт выбор другому человеку. Поддерживающая интонация отличает свободу выбора от равнодушия.|It's entirely up to you.|Это полностью на твоё усмотрение.
`, 'chunks', 'B1', 'everyday');
  const work = add(`
agenda|n|повестка встречи|The [[agenda]] includes a short discussion of the new schedule.|В повестку входит короткое обсуждение нового расписания.|On the agenda — в повестке; set an agenda — составить повестку.
minutes|n|протокол встречи|Please send the [[minutes]] to everyone who attended.|Пожалуйста, отправь протокол всем участникам встречи.|В этом значении существительное употребляется во множественном числе: take the minutes — вести протокол.
action item|n|конкретная задача по итогам встречи|Each [[action item]] needs an owner and a deadline.|У каждой задачи по итогам встречи должны быть ответственный и срок.|Не просто обсуждаемая тема: конкретное действие, которое нужно выполнить.
annual leave|n|ежегодный отпуск|I'm on [[annual leave]] next week.|На следующей неделе я в ежегодном отпуске.|Take annual leave; be on annual leave. Типично для британской рабочей речи.
handover|n|передача дел|We arranged a [[handover]] before my colleague left the team.|Мы организовали передачу дел до ухода коллеги из команды.|Существительное handover; глагол hand over пишется раздельно.
follow-up|n|последующее уточнение или действие|I'll send a [[follow-up]] after the meeting.|После встречи я отправлю уточняющее сообщение.|Существительное и определение пишутся с дефисом; глагол follow up — раздельно.
`, 'workplace', 'B1');
  const dev = add(`
source code|n|исходный код|The [[source code]] is stored in a private repository.|Исходный код хранится в закрытом репозитории.|Обычно неисчисляемое: review source code, а не a source code.
code review|n|проверка кода коллегами|The change needs a [[code review]] before it is merged.|Перед слиянием изменения нужна проверка кода.|Review a change; address review comments — исправить замечания к коду.
pull request|n|запрос на слияние изменений|I opened a [[pull request]] for the bug fix.|Я открыл запрос на слияние исправления ошибки.|Open, review, merge a pull request. Сокращение PR зависит от контекста.
regression|n|повторное появление ошибки после изменения|The update introduced a [[regression]] in the login flow.|Обновление привело к регрессии в процессе входа.|В разработке: раньше работавшее поведение сломалось после изменения.
test coverage|n|покрытие тестами|High [[test coverage]] does not guarantee that the software is correct.|Высокое покрытие тестами не гарантирует правильность программы.|Показатель того, какая часть кода выполнялась тестами; не доказательство качества проверок.
rollback|n|откат изменения|We prepared a [[rollback]] before deploying the update.|Перед развёртыванием обновления мы подготовили откат.|Существительное rollback; глагол roll back. Откат может затрагивать код и состояние данных.
`, 'it', 'B2');
  const infra = add(`
server|n|сервер|The [[server]] stopped responding during the update.|Во время обновления сервер перестал отвечать.|Может обозначать программу или машину, предоставляющую сервис; уточняйте контекст.
subnet|n|подсеть|The database runs in a separate [[subnet]].|База данных работает в отдельной подсети.|A subnet is part of a larger network; separate subnet само по себе не означает изоляцию доступа.
firewall|n|межсетевой экран|The [[firewall]] blocks incoming connections to that port.|Межсетевой экран блокирует входящие подключения к этому порту.|Allow or block traffic; firewall rule — правило фильтрации.
load balancer|n|балансировщик нагрузки|The [[load balancer]] sends requests to healthy servers.|Балансировщик отправляет запросы работоспособным серверам.|Distribute traffic across servers — распределять трафик между серверами.
virtual machine|n|виртуальная машина|We created a [[virtual machine]] to test the installation.|Мы создали виртуальную машину для проверки установки.|Create, start, stop a virtual machine; обычное сокращение VM.
cloud service|n|облачный сервис|The team uses a [[cloud service]] for file storage.|Команда использует облачный сервис для хранения файлов.|Managed service — управляемый сервис; cloud не означает отсутствие своей ответственности за настройки.
patch management|n|управление установкой обновлений|Our [[patch management]] process includes testing and scheduling.|Наш процесс управления обновлениями включает тестирование и планирование.|Patch — исправление; management здесь охватывает учёт, проверку и развёртывание.
DNS record|n|запись DNS|We updated the [[DNS record]] to point to the new address.|Мы обновили запись DNS, указав новый адрес.|DNS record — отдельная запись, а не весь DNS-сервер; тип записи определяет её назначение.
`, 'it', 'B2');
  const security = add(`
authentication|n|аутентификация; проверка заявленной идентичности|The service requires [[authentication]] before showing account details.|Сервис требует аутентификации перед показом данных аккаунта.|Authentication проверяет заявленную идентичность; authorization определяет разрешённые действия.
authorization|n|авторизация; проверка полномочий|The request failed because of an [[authorization]] error.|Запрос завершился неудачно из-за ошибки проверки полномочий.|Успешный вход сам по себе не означает право выполнять любое действие.
least privilege|n|принцип минимальных привилегий|We apply [[least privilege]] when assigning roles.|При назначении ролей мы применяем принцип минимальных привилегий.|Предоставляют только права, необходимые для задачи; apply the principle of least privilege.
incident response|n|реагирование на инциденты|The [[incident response]] plan lists the people we must contact.|В плане реагирования перечислены люди, с которыми нужно связаться.|Respond to an incident; incident response team — команда реагирования.
attack surface|n|поверхность атаки|Disabling unused services can reduce the [[attack surface]].|Отключение неиспользуемых сервисов может уменьшить поверхность атаки.|Совокупность доступных точек взаимодействия, через которые систему могут атаковать.
multi-factor authentication|n|многофакторная аутентификация|We enabled [[multi-factor authentication]] for administrator accounts.|Мы включили многофакторную аутентификацию для администраторов.|MFA использует разные категории факторов; два пароля не создают два разных фактора.
identity provider|n|поставщик удостоверений|The application redirects users to the [[identity provider]].|Приложение перенаправляет пользователей к поставщику удостоверений.|IdP проверяет идентичность и выдаёт утверждения о ней; роли зависят от используемого протокола.
security architecture|n|архитектура безопасности|The team reviewed the [[security architecture]] before adding remote access.|Перед добавлением удалённого доступа команда проверила архитектуру безопасности.|Описывает устройство защитных механизмов и границ доверия, а не только список продуктов.
credential|n|учётные данные; средство подтверждения идентичности|The leaked [[credential]] was revoked immediately.|Скомпрометированные учётные данные немедленно отозвали.|Часто во множественном числе credentials; значение шире одного пароля и зависит от системы.
`, 'it', 'B2');
  const business = add(`
stakeholder|n|заинтересованная сторона|Each [[stakeholder]] received a summary of the proposal.|Каждая заинтересованная сторона получила краткое изложение предложения.|Человек или организация, чьи интересы затрагивает решение; не обязательно акционер shareholder.
negotiate|v|вести переговоры; согласовывать условия|We need to [[negotiate]] a realistic delivery date.|Нужно согласовать реалистичный срок поставки.|Negotiate with someone about something; negotiate terms.
counterproposal|n|встречное предложение|We sent a [[counterproposal]] with a shorter contract period.|Мы отправили встречное предложение с более коротким сроком договора.|Ответ на предложение с изменёнными условиями, а не простой отказ.
deliverable|n|согласованный результат работы|The final report is the main [[deliverable]] for this project.|Итоговый отчёт — основной согласованный результат проекта.|Проверяемый результат, который нужно передать; не сама деятельность.
scope|n|объём и границы работ|We agreed on the [[scope]] before estimating the cost.|Мы согласовали объём работ перед оценкой стоимости.|In scope и out of scope — входит или не входит в согласованные границы.
feasible|adj|осуществимый|The proposal is technically [[feasible]], but we need more time.|Предложение технически осуществимо, но нам нужно больше времени.|Feasible описывает практическую осуществимость; это не обещание выгодности.
subject to approval|chunk|при условии одобрения|The revised budget is [[subject to approval]] by the finance team.|Пересмотренный бюджет действует при условии одобрения финансовым отделом.|Subject to вводит условие; подчёркивает, что решение ещё не окончательное.
for your consideration|chunk|на ваше рассмотрение|I've attached a revised proposal [[for your consideration]].|Прилагаю пересмотренное предложение на ваше рассмотрение.|Формальная вежливая формула письма; после for требуется существительное.
could we reach a compromise|chunk|могли бы мы найти компромисс|[[Could we reach a compromise]] on the delivery schedule?|Могли бы мы найти компромисс по графику поставки?|Reach a compromise on something; вежливая попытка согласовать разные позиции.
to summarise the key points|chunk|подводя итог основным положениям|[[To summarise the key points]], we need a clear owner and a realistic deadline.|Подводя итог: нам нужны ответственный и реалистичный срок.|Маркер заключения в презентации или встрече; после него кратко повторите главное.
`, 'workplace', 'B2');

  const makeTopic = (section, id, label, description, scenario, ids, studyTarget = 'B1–B2') => ({
    id, key: section + ':' + id, label, description, scenario, studyTarget, group: 'Learning topics', entryIds: [...new Set(ids)]
  });
  const legacy = E.sections.find(s => s.id === 'it');
  const old = id => legacy.topics.find(t => t.id === id).entryIds;
  const chunkIds = (...topics) => E.sections.find(s => s.id === 'chunks').topics.filter(t => topics.includes(t.id)).flatMap(t => t.entryIds);
  E.sections.push({ id: 'professional', label: 'Professional', ru: 'Рабочая коммуникация, разработка, инфраструктура, безопасность и деловой английский.', topics: [
    makeTopic('professional', 'work', 'Work & Office', 'Встречи, письма, коллеги, передача дел и рабочие договорённости.', 'Ты — коллега. Обсуди со мной повестку встречи, передачу дел и задачи после обсуждения.', [...old('workcomm'), ...E.topicEntries('words:work').map(w => w.id), ...work, ...chunkIds('email', 'it-standup')]),
    makeTopic('professional', 'dev', 'IT & Development', 'Разработка, проверка кода, тестирование и выпуск изменений.', 'Ты — разработчик на проверке кода. Уточни требования, тесты и план отката.', [...old('dev'), ...dev, ...chunkIds('it-bug')]),
    makeTopic('professional', 'infra', 'Infrastructure', 'Сети, серверы, облачные сервисы и системное администрирование.', 'Ты — дежурный инженер. Обсуди со мной недоступность сервиса, сетевые проверки и восстановление.', [...old('infra'), ...infra]),
    makeTopic('professional', 'security', 'Security', 'Уязвимости, реагирование, IAM, привилегии и архитектура безопасности.', 'Ты — руководитель команды. Спроси о проверке доступа, инциденте и границах доверия.', [...old('security'), ...security]),
    makeTopic('professional', 'business', 'B2 Business English', 'Переговоры, презентации, формальные письма и согласование условий.', 'Ты — партнёр по рабочему проекту. Обсуди со мной сроки, встречное предложение и компромисс; затем попроси краткое итоговое письмо.', [...business, ...chunkIds('email', 'it-meeting'), ...E.topicEntries('words:world-of-work').map(w => w.id)], 'B2')
  ] });
  E.sections.push({ id: 'idioms', label: 'Idioms', ru: '15 полезных идиом: переносный смысл, регистр и естественные ситуации употребления.', topics: [
    makeTopic('idioms', 'people', 'People & communication', 'Предпочтения, знакомство и общее понимание.', 'Ты — новый знакомый. Обсуди со мной интересы и впечатления, используя идиомы в подходящем контексте.', idioms.slice(0, 5)),
    makeTopic('idioms', 'situations', 'Everyday situations', 'Простые задачи, редкие события, стоимость и начало дела.', 'Ты — друг. Обсуди со мной планы, покупки и помощь с повседневными задачами.', idioms.slice(5, 10)),
    makeTopic('idioms', 'decisions', 'Work & reactions', 'Неожиданности, освоение работы, качество и реакция на трудности.', 'Ты — коллега. Поговори со мной об освоении новой работы, задержках и качестве результата.', idioms.slice(10))
  ] });
  E.sections.push({ id: 'everyday-phrases', label: 'Everyday Phrases', ru: 'Естественные разговорные ответы: договориться, поддержать, уточнить или отложить ответ.', topics: [
    makeTopic('everyday-phrases', 'respond', 'Responding naturally', 'Короткие реакции, согласие и поддержка.', 'Ты — друг. Предлагай планы и рассказывай о мелких трудностях; я отвечу естественными фразами.', everyday.slice(0, 6)),
    makeTopic('everyday-phrases', 'arrange', 'Making arrangements', 'Договорённости, уточнения и свобода выбора.', 'Ты — знакомый. Договорись со мной о встрече и уточни детали поездки.', everyday.slice(6))
  ] });
  // Keep legacy sections and keys resolvable without offering duplicate topic scopes.
  E.navigationSections = () => E.sections.filter(s => s.id !== 'it');
})(ETEnglish);
