(function (E) {
  'use strict';
  E.categories = [
    { id: 'everyday', label: 'Everyday', description: 'Практический словарь для повседневных ситуаций.' },
    { id: 'workplace', label: 'Workplace', description: 'Рабочие задачи, встречи, договорённости и обратная связь.' },
    { id: 'it', label: 'IT & Security', description: 'Инфраструктура, доступ и объяснение инцидентов.' },
    { id: 'phrasal', label: 'Phrasal verbs', description: 'Фразовые глаголы с отдельными значениями и моделями управления.' },
    { id: 'collocations', label: 'Collocations', description: 'Слова, которые естественно употребляются вместе.' },
    { id: 'chunks', label: 'Expressions', description: 'Готовые речевые блоки для живого общения.' }
  ];
  /* Vocabulary shared with families is referenced, never duplicated. */
  const rows = `
appointment|n|B1|запись на приём, назначенная встреча|I need to reschedule my [[appointment]].|Мне нужно перенести запись на приём.|Make/reschedule an appointment.|everyday
arrangement|n|B1|договорённость|We have an [[arrangement]] to share the costs.|Мы договорились разделить расходы.|An arrangement with someone; make arrangements.|everyday
opportunity|n|B1|возможность, благоприятный случай|This is an [[opportunity]] to learn something new.|Это возможность научиться чему-то новому.|An opportunity to do, не личная способность ability.|everyday
experience|n|B1|опыт|Previous [[experience]] is useful but not required.|Предыдущий опыт полезен, но не обязателен.|Опыт — неисчисляемое; a memorable experience — отдельное событие.|everyday
advice|n|B1|совет, советы|Could you give me some [[advice]]?|Не могли бы вы дать мне совет?|Неисчисляемое: a piece of advice, не an advice.|everyday
effort|n|B1|усилие|Learning a language takes time and [[effort]].|Изучение языка требует времени и усилий.|Make an effort; put effort into something.|everyday
purpose|n|B1|цель, назначение|What is the [[purpose]] of this form?|Для чего нужен этот бланк?|The purpose of; on purpose — намеренно, другой оборот.|everyday
advantage|n|B1|преимущество|Working nearby has one clear [[advantage]].|У работы поблизости есть одно явное преимущество.|An advantage over; take advantage of — отдельный оборот.|everyday
disadvantage|n|B1|недостаток|The main [[disadvantage]] is the travel time.|Главный недостаток — время в пути.|Недостаток варианта, не личная вина.|everyday
challenge|n|B1|сложная задача, вызов|Finding enough time is a real [[challenge]].|Найти достаточно времени — действительно сложная задача.|Meet/face a challenge.|everyday
solution|n|B1|решение проблемы|We need a practical [[solution]].|Нам нужно практическое решение.|Solution to a problem; decision — решение-выбор.|everyday
suggestion|n|B1|предложение, идея|Do you have a better [[suggestion]]?|Есть предложение получше?|Make a suggestion; не do a suggestion.|everyday
choice|n|B1|выбор|You have a [[choice]] between two courses.|У вас есть выбор между двумя курсами.|Make a choice; choice of something.|everyday
attitude|n|B1|отношение, настрой|Her positive [[attitude]] helped the team.|Её позитивный настрой помог команде.|Attitude to/towards someone or something.|everyday
behaviour|n|B1|поведение|The trainer explained the dog's [[behaviour]].|Дрессировщик объяснил поведение собаки.|Обычно неисчисляемое; US behavior.|everyday
confidence|n|B1|уверенность|Practice will build your [[confidence]].|Практика укрепит твою уверенность.|Confidence in someone; уверенность в себе — self-confidence.|everyday
concern|n|B2|опасение, повод для беспокойства|My main [[concern]] is the cost.|Моё главное опасение связано со стоимостью.|Raise/express a concern.|everyday
available|adj|B1|доступный, имеющийся в наличии|Are any rooms [[available]] tonight?|Есть ли свободные номера на сегодня?|Available to people / for use; не всегда accessible.|everyday
reliable|adj|B1|надёжный|We need a [[reliable]] source of information.|Нам нужен надёжный источник информации.|О человеке, системе или сведениях, на которые можно положиться.|everyday
convenient|adj|B1|удобный по времени или обстоятельствам|Would Friday be [[convenient]] for you?|Вам было бы удобно в пятницу?|Не comfortable — удобный физически.|everyday
reasonable|adj|B1|разумный, приемлемый|The price seems [[reasonable]].|Цена кажется приемлемой.|Разумный по величине или обоснованию, не обязательно дешёвый.|everyday
aware|adj|B1|осведомлённый, понимающий|Are you [[aware]] of the changes?|Вы знаете об изменениях?|Aware of / aware that.|everyday
avoid|v|B1|избегать|Try to [[avoid]] making the same mistake.|Старайтесь не повторять ту же ошибку.|Avoid doing; не avoid to do.|everyday
afford|v|B1|позволить себе по средствам или времени|We cannot [[afford]] to replace it now.|Сейчас мы не можем позволить себе это заменить.|Afford to do; обычно с can/could.|everyday
deadline|n|B1|крайний срок|The [[deadline]] is next Friday.|Крайний срок — следующая пятница.|Meet/miss a deadline; by Friday — не позже пятницы.|workplace
requirement|n|B1|требование|A valid certificate is a [[requirement]].|Действующий сертификат — обязательное требование.|A requirement for; meet a requirement.|workplace
priority|n|B1|приоритет|Customer safety is our main [[priority]].|Безопасность клиентов — наш главный приоритет.|Set priorities; take priority over.|workplace
feedback|n|B2|обратная связь|Could you give me some [[feedback]] on the draft?|Не могли бы вы дать обратную связь по черновику?|Неисчисляемое в этом значении.|workplace
colleague|n|B1|коллега|A [[colleague]] offered to cover my shift.|Коллега предложил подменить меня на смене.|Colleague обычно человек из профессиональной среды.|workplace
supplier|n|B1|поставщик|The [[supplier]] confirmed the delivery date.|Поставщик подтвердил дату доставки.|Supplier of something; не обязательно производитель.|workplace
customer|n|B1|клиент, покупатель|The [[customer]] asked for a refund.|Клиент попросил возврат денег.|Customer покупает товары или услуги.|workplace
contract|n|B1|договор, контракт|Read the [[contract]] before signing.|Прочитайте договор перед подписанием.|Sign/renew a contract.|workplace
budget|n|B1|бюджет|The project is still within [[budget]].|Проект всё ещё укладывается в бюджет.|Within/over budget; set a budget.|workplace
schedule|n|B1|расписание, график|We need to update the [[schedule]].|Нам нужно обновить график.|Ahead of/behind schedule.|workplace
proposal|n|B2|предложение, проект на рассмотрение|The board accepted our [[proposal]].|Совет принял наше предложение.|A proposal to do / for something.|workplace
progress|n|B1|прогресс, продвижение|We made good [[progress]] this week.|На этой неделе мы хорошо продвинулись.|Make progress; неисчисляемое.|workplace
issue|n|B1|проблема, вопрос для решения|We need to discuss one more [[issue]].|Нам нужно обсудить ещё один вопрос.|An issue with something; не только техническая ошибка.|workplace
task|n|B1|задача|This [[task]] should take about an hour.|Эта задача должна занять примерно час.|Complete/assign a task.|workplace
request|n|B1|запрос, просьба|Your [[request]] has been approved.|Ваш запрос одобрен.|Make/submit a request; request for something.|workplace
approve|v|B1|одобрять|Only a manager can [[approve]] this expense.|Только руководитель может одобрить этот расход.|Approve something; approve of — считать приемлемым, другая модель.|workplace
confirm|v|B1|подтверждать|Please [[confirm]] the date by email.|Подтвердите дату по электронной почте.|Confirm something / confirm that.|workplace
arrange|v|B1|организовать, договориться|Can you [[arrange]] a meeting for tomorrow?|Можешь организовать встречу на завтра?|Arrange to do; arrange something with someone.|workplace
postpone|v|B1|отложить|We had to [[postpone]] the launch.|Нам пришлось отложить запуск.|Postpone doing / postpone something until a date.|workplace
clarify|v|B2|прояснять, уточнять|Could you [[clarify]] the last point?|Не могли бы вы уточнить последний пункт?|Clarify something; не обязательно исправлять ошибку.|workplace
access|n|B1|доступ|You need permission to get [[access]] to this folder.|Для доступа к этой папке нужно разрешение.|Access to; неисчисляемое.|it
permission|n|B1|разрешение|Ask for [[permission]] before installing software.|Запросите разрешение перед установкой ПО.|Обычно неисчисляемое; permissions в IT — набор прав.|it
account|n|B1|учётная запись|Each person should have a separate [[account]].|У каждого должна быть отдельная учётная запись.|Create/disable an account; не делиться паролями.|it
network|n|B1|сеть|The office [[network]] is unavailable.|Офисная сеть недоступна.|Connect to a network.|it
device|n|B1|устройство|Please restart the [[device]].|Перезапустите устройство.|Device — устройство, devise — глагол придумывать.|it
backup|n|B2|резервная копия|Keep a recent [[backup]] in a separate location.|Храните свежую резервную копию в отдельном месте.|Существительное backup; глагол back up — раздельно.|it
threat|n|B2|угроза|The team assessed the [[threat]].|Команда оценила угрозу.|A threat to something; угроза не равна уязвимости.|it
vulnerability|n|B2|уязвимость|The patch fixes a known [[vulnerability]].|Исправление устраняет известную уязвимость.|Слабость системы; её наличие не доказывает эксплуатацию.|it
incident|n|B2|инцидент|We are investigating a security [[incident]].|Мы расследуем инцидент безопасности.|Событие, требующее реагирования; не всякое предупреждение означает инцидент.|it
evidence|n|B2|свидетельства, доказательные данные|Preserve the [[evidence]] before changing the system.|Сохраните доказательные данные перед изменением системы.|В обычном значении неисчисляемое; a piece of evidence.|it
update|n|B1|обновление|Install the security [[update]] after testing.|Установите обновление безопасности после тестирования.|Существительное; update также глагол.|it
restore|v|B2|восстанавливать|We need to [[restore]] the files from a backup.|Нам нужно восстановить файлы из резервной копии.|Restore from a backup; не гарантирует пригодность самой копии.|it
verify|v|B2|проверять достоверность|Please [[verify]] the sender before opening the attachment.|Проверьте отправителя перед открытием вложения.|Verify проверяет истинность или соответствие; не просто посмотреть.|it
restrict|v|B2|ограничивать|We should [[restrict]] access to the folder.|Нам следует ограничить доступ к папке.|Restrict access to; ограничение прав по необходимости.|it
investigate|v|B2|расследовать, исследовать причину|The team will [[investigate]] the unusual traffic.|Команда расследует необычный трафик.|Investigate something без into после глагола в этой модели.|it
attachment|n|B1|вложение|Do not open an unexpected [[attachment]].|Не открывайте неожиданное вложение.|An email attachment; не обязательно вредоносное.|it
find out|phr|B1|выяснить|We need to [[find out]] why the service stopped.|Нам нужно выяснить, почему сервис остановился.|Find out something / find something out; узнать новые сведения.|phrasal
figure out|phr|B1|разобраться, понять решение|Can you [[figure out]] what went wrong?|Можешь разобраться, что пошло не так?|Figure it out: местоимение между глаголом и частицей.|phrasal
carry out|phr|B1|выполнять, проводить|We will [[carry out]] the checks tomorrow.|Завтра мы проведём проверки.|Carry out a task/check; carry it out.|phrasal
set up|phr|B1|настроить, организовать|We need to [[set up]] a test account.|Нам нужно настроить тестовую учётную запись.|Set it up; существительное setup/set-up отдельно от глагола.|phrasal
put off|phr|B1|откладывать|Do not [[put off]] the update again.|Не откладывайте обновление снова.|Put it off; put off doing something.|phrasal
bring up|phr|B1|поднять тему|I will [[bring up]] the issue at the meeting.|Я подниму этот вопрос на встрече.|Bring it up; не путать с воспитанием ребёнка.|phrasal
look into|phr|B2|изучить, расследовать|We will [[look into]] the complaint.|Мы разберёмся с жалобой.|Look into it; неразделяемая модель в этом значении.|phrasal
look after|phr|B1|присматривать, заботиться|Could you [[look after]] the plants?|Не мог бы ты присмотреть за растениями?|Look after them; неразделяемая модель.|phrasal
deal with|phr|B1|заниматься проблемой, разбираться с|Who will [[deal with]] this request?|Кто займётся этим запросом?|Deal with it; неразделяемая модель.|phrasal
come up with|phr|B1|придумать, предложить|Can you [[come up with]] a better name?|Можешь придумать название получше?|Come up with it; три элемента сохраняются.|phrasal
run out of|phr|B1|исчерпать запас|We might [[run out of]] storage space.|У нас может закончиться место для хранения.|Run out of something; нельзя выбрасывать of перед объектом.|phrasal
get back to|phr|B1|вернуться с ответом|I will [[get back to]] you after the meeting.|Я вернусь к тебе с ответом после встречи.|Get back to someone; не буквальное возвращение предмета.|phrasal
follow up|phr|B2|продолжить работу по вопросу|We should [[follow up]] on the request.|Нам следует вернуться к этому запросу и проверить его состояние.|Follow up on something; follow-up как определение пишется с дефисом.|phrasal
back up|phr|B1|создавать резервную копию|Remember to [[back up]] your files.|Не забудьте сделать резервную копию файлов.|Back them up; существительное backup пишется слитно.|phrasal
break down|phr|B1|ломаться, выходить из строя|Old equipment can [[break down]] without warning.|Старое оборудование может неожиданно выйти из строя.|Непереходное значение поломки; break a task down — другое значение.|phrasal
work out|phr|B1|найти решение, вычислить|We need to [[work out]] the total cost.|Нам нужно вычислить общую стоимость.|Work it out; физическая тренировка — другой смысл.|phrasal
point out|phr|B1|указать, обратить внимание|I should [[point out]] one important detail.|Мне стоит обратить внимание на одну важную деталь.|Point it out; point out that...|phrasal
turn down|phr|B1|отклонить предложение|She may [[turn down]] the job offer.|Она может отклонить предложение работы.|Turn it down; уменьшить громкость — другой смысл.|phrasal
hand over|phr|B1|передать ответственность или предмет|Please [[hand over]] the keys to reception.|Передайте ключи на стойку регистрации.|Hand them over; ответственность передаётся явно.|phrasal
keep up with|phr|B1|успевать за изменениями или темпом|It is hard to [[keep up with]] every update.|Трудно успевать следить за всеми обновлениями.|Keep up with something; модель не разделяется.|phrasal
make a decision|chunk|B1|принять решение|We need to [[make a decision]] today.|Нам нужно принять решение сегодня.|Make, а не do; связано с семейством decide.|collocations
meet a deadline|chunk|B1|уложиться в срок|We can still [[meet a deadline]] if we start early.|Мы всё ещё можем уложиться в срок, если начнём заранее.|Meet/miss a deadline.|collocations
take responsibility|chunk|B1|взять ответственность|Someone must [[take responsibility]] for the error.|Кто-то должен взять ответственность за ошибку.|Take responsibility for something.|collocations
raise awareness|chunk|B2|повышать осведомлённость|The campaign aims to [[raise awareness]] of phishing.|Кампания направлена на повышение осведомлённости о фишинге.|Raise awareness of/about; не rise awareness.|collocations
pay attention|chunk|B1|обращать внимание|Please [[pay attention]] to the warning.|Обратите внимание на предупреждение.|Pay attention to something.|collocations
gain experience|chunk|B1|набираться опыта|The role will help you [[gain experience]].|Эта работа поможет вам набраться опыта.|Gain experience; experience здесь неисчисляемое.|collocations
make progress|chunk|B1|продвигаться, делать успехи|We can [[make progress]] without rushing.|Мы можем продвигаться без спешки.|Make progress, не do progress.|collocations
solve a problem|chunk|B1|решить проблему|This tool can [[solve a problem]] that affects many users.|Этот инструмент может решить проблему, затрагивающую многих пользователей.|Solve a problem; make a decision — другая модель.|collocations
reach an agreement|chunk|B1|достичь договорённости|We hope to [[reach an agreement]] this week.|Мы надеемся договориться на этой неделе.|Reach an agreement with someone on something.|collocations
provide feedback|chunk|B2|дать обратную связь|Please [[provide feedback]] on the draft.|Дайте обратную связь по черновику.|Provide/give feedback; обычно неисчисляемое.|collocations
conduct an investigation|chunk|B2|провести расследование|The team will [[conduct an investigation]].|Команда проведёт расследование.|Conduct/carry out an investigation; формальная речь.|collocations
assess the risk|chunk|B2|оценить риск|We must [[assess the risk]] before deployment.|Перед развёртыванием нужно оценить риск.|Assess — определить величину и характер риска.|collocations
grant access|chunk|B2|предоставить доступ|Only the owner can [[grant access]].|Только владелец может предоставить доступ.|Grant access to something; не подразумевает бессрочные права.|collocations
revoke access|chunk|B2|отозвать доступ|We should [[revoke access]] when the contract ends.|По окончании договора доступ следует отозвать.|Revoke — отменить выданное разрешение.|collocations
confirm receipt|chunk|B2|подтвердить получение|Please [[confirm receipt]] of this email.|Подтвердите получение этого письма.|Формальная переписка; receipt здесь получение, не чек.|collocations
draw a conclusion|chunk|B2|сделать вывод|We cannot [[draw a conclusion]] from one example.|Нельзя сделать вывод по одному примеру.|Draw a conclusion from evidence.|collocations
set priorities|chunk|B1|расставить приоритеты|We need to [[set priorities]] for the next month.|Нам нужно расставить приоритеты на следующий месяц.|Set priorities, не put priorities в этой модели.|collocations
keep a record|chunk|B1|вести запись, сохранять сведения|Please [[keep a record]] of the changes.|Ведите запись изменений.|Keep a record of something.|collocations
make an effort|chunk|B1|приложить усилие|We should [[make an effort]] to include everyone.|Нам следует постараться вовлечь всех.|Make an effort to do something.|collocations
take into account|chunk|B2|учитывать|We must [[take into account]] the extra cost.|Мы должны учитывать дополнительные расходы.|Take something into account — тоже допустимый порядок.|collocations
as far as I know|chunk|B1|насколько мне известно|[[As far as I know]], the meeting is still on.|Насколько мне известно, встреча всё ещё состоится.|Ограничивает утверждение имеющимися знаниями.|chunks
in my opinion|chunk|B1|по моему мнению|[[In my opinion]], we need more time.|По моему мнению, нам нужно больше времени.|Не in my mind в значении обычного вводного мнения.|chunks
to be honest|chunk|B1|честно говоря|[[To be honest]], I did not understand the last point.|Честно говоря, я не понял последний пункт.|Разговорное вводное выражение; учитывайте тон.|chunks
it depends on|chunk|B1|это зависит от|[[It depends on]] the delivery date.|Это зависит от даты доставки.|После on требуется дополнение.|chunks
as a result|chunk|B1|в результате|[[As a result]], the service was unavailable.|В результате сервис был недоступен.|Вводит следствие; as a result of + причина.|chunks
on the other hand|chunk|B1|с другой стороны|[[On the other hand]], the cheaper option needs more maintenance.|С другой стороны, более дешёвый вариант требует больше обслуживания.|Показывает иной аспект сравнения.|chunks
in advance|chunk|B1|заранее|Please let us know [[in advance]].|Сообщите нам заранее.|In advance of something — перед событием.|chunks
at the moment|chunk|B1|в данный момент|We have no spare devices [[at the moment]].|Сейчас у нас нет запасных устройств.|Текущая ситуация, не обязательно постоянная.|chunks
from now on|chunk|B1|с этого момента|[[From now on]], use the new form.|С этого момента используйте новый бланк.|Обозначает начало нового порядка.|chunks
so far|chunk|B1|пока что, до сих пор|[[So far]], we have found no errors.|Пока что мы не нашли ошибок.|Часто с Present Perfect, если период продолжается.|chunks
in the meantime|chunk|B2|тем временем|[[In the meantime]], please use the backup service.|Тем временем используйте резервный сервис.|Действие в промежутке ожидания.|chunks
let me check|chunk|B1|дай(те) я проверю|[[Let me check]] the schedule.|Дайте я проверю расписание.|После let + объект используется инфинитив без to.|chunks
could you clarify|chunk|B1|не могли бы вы уточнить|[[Could you clarify]] what you mean by active users?|Не могли бы вы уточнить, что подразумеваете под активными пользователями?|Вежливая просьба; смысл уточнения задаётся продолжением.|chunks
just to confirm|chunk|B1|чтобы уточнить и подтвердить|[[Just to confirm]], are we meeting at ten?|Уточню: мы встречаемся в десять?|Полезно перед повторением договорённости.|chunks
that makes sense|chunk|B1|это логично, теперь понятно|[[That makes sense]] now that you have explained it.|Теперь, после твоего объяснения, это понятно.|Не буквальное делать смысл.|chunks
I see your point|chunk|B1|я понимаю твою мысль|[[I see your point]], but I am still concerned about the cost.|Я понимаю твою мысль, но меня всё ещё беспокоит стоимость.|Понимание аргумента не обязательно означает согласие.|chunks
would you mind|chunk|B1|вы не против, не могли бы вы|[[Would you mind]] sending the report again?|Не могли бы вы отправить отчёт ещё раз?|Would you mind + -ing; не to send.|chunks
please let me know|chunk|B1|пожалуйста, сообщите мне|[[Please let me know]] if anything changes.|Пожалуйста, сообщите мне, если что-нибудь изменится.|Let someone know; без to перед know.|chunks
thanks for pointing that out|chunk|B1|спасибо, что обратил(и) на это внимание|[[Thanks for pointing that out]]; I will correct it.|Спасибо, что обратили на это внимание; я исправлю.|После for — -ing; point that out — разделяемая модель.|chunks
I will keep you updated|chunk|B1|я буду держать вас в курсе|[[I will keep you updated]] as the investigation continues.|Я буду держать вас в курсе по ходу расследования.|Keep someone updated on something.|chunks
`;
  rows.trim().split('\n').forEach(line => {
    const [headword, pos, level, ru, en, exru, usage, category] = line.trim().split('|');
    const existing = Object.values(E.entries).find(w => w.headword === headword && w.pos === pos && w.sense === 'main');
    if (existing) { if (!existing.categories.includes(category)) existing.categories.push(category); return; }
    E.addEntry({ id: E.id(headword, pos), headword, pos, sense: 'main', ru,
      cefr: { level, status: 'estimate', source: null }, examples: [{ en, ru: exru }],
      morphology: { parts: [headword], parentId: null, relation: pos === 'phr' ? 'phrasal-verb' : pos === 'chunk' ? 'lexical-chunk' : 'base', note: usage },
      semantic: ru, transparency: pos === 'phr' || pos === 'chunk' ? 'figurative' : 'transparent', usage,
      categories: [category], familyId: null, core: true,
      sources: [{ title: `Cambridge Dictionary: ${headword}`, url: E.dictionary(headword), status: 'reference-link' }]
    });
  });

  E.grammar = [
    { id: 'grammar:perfect', label: 'Past simple & present perfect', level: 'B1', ru: 'Past Simple привязывает событие к завершённому прошлому времени: I updated it yesterday. Present Perfect связывает прошлое с настоящим результатом или незавершённым периодом: I have updated it, so it is ready now. С yesterday обычно не употребляют Present Perfect.', example: 'I have updated the server, so you can use it now.', translation: 'Я обновил сервер, так что теперь им можно пользоваться.', question: 'I ___ the server yesterday.', options: ['updated', 'have updated', 'have been update'], answer: 'updated', explain: 'Yesterday задаёт завершённое прошлое время: нужен Past Simple.', source: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect' },
    { id: 'grammar:conditionals', label: 'First & second conditionals', level: 'B1', ru: 'First Conditional: if + Present Simple, will + инфинитив для реальной будущей возможности. Second Conditional: if + Past Simple, would + инфинитив для гипотетической ситуации. Прошедшая форма во втором типе выражает дистанцию от реальности, а не обязательно прошлое время.', example: 'If we had more time, we would test another option.', translation: 'Если бы у нас было больше времени, мы бы проверили ещё один вариант.', question: 'If we had more time, we ___ another option.', options: ['would test', 'will tested', 'had testing'], answer: 'would test', explain: 'Гипотетическая ситуация: if + Past Simple сочетается с would + инфинитив.', source: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/conditionals-zero-first-second' },
    { id: 'grammar:passive', label: 'Passive voice', level: 'B1', ru: 'Пассив строится из be в нужном времени и past participle. Он выдвигает на первый план объект действия: The account was disabled. Исполнитель может быть указан через by, если это важно. Не всякая форма be + -ed — однозначно пассив: это также бывает описанием состояния.', example: 'The account was disabled by the administrator.', translation: 'Учётная запись была отключена администратором.', question: 'The account ___ by the administrator yesterday.', options: ['was disabled', 'disabled', 'was disable'], answer: 'was disabled', explain: 'Объект получил действие: нужен was + past participle disabled.', source: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/passives' },
    { id: 'grammar:modals', label: 'Obligation & advice', level: 'B1', ru: 'Must not выражает запрет, do not have to — отсутствие необходимости. Should обычно даёт совет. После модального глагола стоит инфинитив без to: must check, should wait.', example: 'You must not share your password.', translation: 'Нельзя передавать свой пароль другим.', question: 'Which phrase means «в этом нет необходимости»?', options: ['do not have to', 'must not', 'cannot'], answer: 'do not have to', explain: 'Do not have to снимает обязанность. Must not запрещает действие.', source: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/modals-permission-obligation' },
    { id: 'grammar:patterns', label: 'Verb patterns', level: 'B1', ru: 'Дополнение определяется глаголом: avoid doing, consider doing, decide to do, manage to do. Один русский перевод не позволяет выбрать модель. Help допускает и help someone do, и help someone to do.', example: 'We decided to postpone the update.', translation: 'Мы решили отложить обновление.', question: 'Please avoid ___ untrusted attachments.', options: ['opening', 'to open', 'open'], answer: 'opening', explain: 'После avoid используется форма -ing: avoid opening.', source: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/verbs-followed-ing-or-infinitive-1' },
    { id: 'grammar:relative', label: 'Defining relative clauses', level: 'B1', ru: 'Определительное придаточное уточняет, о каком объекте идёт речь. Who обычно относится к людям, which — к предметам; that возможно в обоих случаях в defining clauses. Объектное местоимение иногда опускается: the tool we use. Подлежащее опустить нельзя.', example: 'The colleague who reported the issue is on leave.', translation: 'Коллега, который сообщил о проблеме, в отпуске.', question: 'The colleague ___ reported the issue is on leave.', options: ['who', 'what', 'where'], answer: 'who', explain: 'Коллега — человек; who выполняет роль подлежащего придаточного.', source: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/relative-clauses-defining-relative-clauses' },
    { id: 'grammar:deduction', label: 'Modals of deduction', level: 'B2', ru: 'Must может выражать сильный вывод по данным, а не приказ. Might/could — возможность, cannot — вывод о невозможности. Для прошлого: must have + past participle. Степень уверенности выбирают по свидетельствам, а не только по грамматике.', example: 'The service might have stopped during the update.', translation: 'Возможно, сервис остановился во время обновления.', question: 'Which phrase expresses an uncertain past possibility?', options: ['might have stopped', 'must stop', 'has to stop'], answer: 'might have stopped', explain: 'Might have + past participle выражает предположение о прошлом без уверенности.', source: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/modals-deductions-about-past' },
    { id: 'grammar:hedging', label: 'Cautious professional claims', level: 'B2', ru: 'В профессиональной речи may/might/could, appears to и evidence suggests помогают отделять наблюдение от вывода. This proves — сильнее, чем this suggests. Выбирайте степень уверенности, которую действительно поддерживают данные.', example: 'The logs suggest that the account may have been compromised.', translation: 'Журналы указывают, что учётная запись могла быть скомпрометирована.', question: 'Which claim leaves room for uncertainty?', options: ['The evidence suggests a possible breach.', 'This proves there was a breach.', 'A breach definitely occurred.'], answer: 'The evidence suggests a possible breach.', explain: 'Suggests и possible обозначают вывод с неопределённостью; proves и definitely заявляют уверенность.', source: 'https://www.phrasebank.manchester.ac.uk/being-cautious/' }
  ];
})(ETEnglish);
