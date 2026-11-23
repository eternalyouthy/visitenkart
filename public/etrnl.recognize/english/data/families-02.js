/* Batch 02: twenty additional modern teaching families, with no count limit. */
(function (E) {
  'use strict';
  const add = (id, ru, related, categories, note, rows) => E.family({ id, label: id.toUpperCase(), ru, related, categories, note }, rows);
  add('prepare', 'готовить, подготавливать', ['organize', 'decide', 'educate'], ['everyday', 'workplace'],
    'Prepare — самостоятельная современная основа. Не выводите его значение из современного pre- и несуществующего свободного pare в значении готовить.', `
prepare|v|A2|готовить, подготавливать|We need to [[prepare]] a short report.|Нам нужно подготовить короткий отчёт.|prepare||Prepare for something; prepare to do something.
preparation|n|B1|подготовка|The interview requires careful [[preparation]].|Собеседование требует тщательной подготовки.|prepar- + -ation|prepare|Конечное e отпадает; preparation for.
prepared|adj|B1|подготовленный, готовый|We are [[prepared]] for the meeting.|Мы готовы к встрече.|prepare + -ed|prepare|Prepared for — подготовленный к; prepared to do — готовый сделать.
unprepared|adj|B2|неподготовленный|The team was [[unprepared]] for the outage.|Команда не была готова к сбою.|un- + prepared|prepared|Unprepared for something.
preparatory|adj|B2|подготовительный|We held a [[preparatory]] meeting.|Мы провели подготовительное совещание.|prepar- + -atory|prepare|Формальный регистр; не синоним prepared.
`);
  add('succeed', 'добиваться успеха', ['perform', 'achieve', 'evaluate'], ['everyday', 'workplace'],
    'Succeed → success — связь внутри освоенного семейства с изменением основы. Success нельзя получить механическим добавлением -s к succeed.', `
succeed|v|B1|добиваться успеха|You can [[succeed]] with regular practice.|С регулярной практикой ты можешь добиться успеха.|succeed||Succeed in doing something; не succeed to do.
success|n|B1|успех|The launch was a [[success]].|Запуск прошёл успешно.|success|succeed|Освоенная лексическая форма, не свободная суффиксация.
successful|adj|A2|успешный|The team completed a [[successful]] migration.|Команда успешно выполнила миграцию.|success + -ful|success|Successful in/at; -ful пишется с одной l.
successfully|adv|B1|успешно|The update installed [[successfully]].|Обновление успешно установилось.|successful + -ly|successful|Сочетание -ful + -ly даёт -fully.
unsuccessful|adj|B2|неудачный, безуспешный|The first attempt was [[unsuccessful]].|Первая попытка была неудачной.|un- + successful|successful|О результате или человеке в конкретном деле.
unsuccessfully|adv|B2|безуспешно|We tried [[unsuccessfully]] to contact the supplier.|Мы безуспешно пытались связаться с поставщиком.|unsuccessful + -ly|unsuccessful|Наречие относится к попытке или действию.
`);
  /* ACHIEVE is a related learning link, represented by the complete family below. */
  add('perform', 'выполнять; выступать', ['act', 'succeed', 'employ'], ['workplace', 'everyday'],
    'Perform a task и perform on stage — разные значения. Performance может означать исполнение, выступление или производительность.', `
perform|v|B1|выполнять|Only trained staff may [[perform]] this task.|Только обученные сотрудники могут выполнять эту задачу.|perform||Perform a task, a test, an operation.
perform|v|B1|выступать перед публикой|The band will [[perform]] at the festival.|Группа выступит на фестивале.|perform||Perform on stage / at a festival.||stage
performance|n|B1|выступление|Their [[performance]] lasted an hour.|Их выступление длилось час.|perform + -ance|perform~stage|Исчисляемое событие на сцене.
performance|n|B2|производительность, качество работы|The patch improved system [[performance]].|Исправление повысило производительность системы.|perform + -ance|perform|О работе системы; обычно неисчисляемое.||system
performer|n|B1|исполнитель, артист|The [[performer]] thanked the audience.|Исполнитель поблагодарил публику.|perform + -er|perform~stage|Не только певец: артист или исполнитель номера.
outperform|v|B2|превосходить по результатам|The new model may [[outperform]] the old one.|Новая модель может превзойти старую по результатам.|out- + perform|perform|Прямое дополнение, без предлога.
underperform|v|B2|показывать результаты ниже ожидаемых|The service may [[underperform]] during peak hours.|В часы пик сервис может работать хуже ожидаемого.|under- + perform|perform|Сравнение с ожиданиями, не обязательно с другим участником.
`);
  add('support', 'поддерживать', ['help', 'protect', 'depend'], ['everyday', 'workplace', 'it'],
    'Support — самостоятельная основа; не современный шаблон sup- + port. Supportive — оказывающий поддержку, supported — получающий поддержку.', `
support|v|A2|поддерживать|We will [[support]] you during the transition.|Мы поддержим вас во время перехода.|support||Support someone/something, без with после глагола в этой модели.
support|n|B1|поддержка|Contact technical [[support]] if the problem continues.|Свяжитесь с технической поддержкой, если проблема сохранится.|support|support|Конверсия: существительное без нового суффикса.||help
supporter|n|B1|сторонник, болельщик|She is a strong [[supporter]] of public transport.|Она убеждённая сторонница общественного транспорта.|support + -er|support|Не обязательно сотрудник поддержки.
supportive|adj|B2|оказывающий поддержку|My colleagues were very [[supportive]].|Коллеги очень меня поддержали.|support + -ive|support|Supportive of someone/an idea.
supported|adj|B2|поддерживаемый|This is a fully [[supported]] version.|Эта версия полностью поддерживается.|support + -ed|support|В IT: доступна поддержка; не обязательно безопасна во всех условиях.
unsupported|adj|B2|неподдерживаемый|Do not use [[unsupported]] software for sensitive work.|Не используйте неподдерживаемое ПО для работы с конфиденциальными данными.|un- + supported|supported|Также бывает необоснованный; здесь поддержка ПО.
supporting|adj|B2|подтверждающий, вспомогательный|Please attach [[supporting]] documents.|Приложите подтверждающие документы.|support + -ing|support|Supporting evidence/documents — материалы в подтверждение.|figurative
`);
  add('produce', 'производить, создавать', ['create', 'develop', 'form'], ['workplace', 'everyday'],
    'Produce → product включает изменение основы. Productive — результативный, production — производство; reproduce не просто произвести любой новый предмет.', `
produce|v|B1|производить|The factory can [[produce]] spare parts.|Завод может производить запасные части.|produce||Ударение глагола на втором слоге; produce-овощи — отдельное существительное.
product|n|A2|продукт, изделие|The [[product]] is ready for testing.|Продукт готов к тестированию.|product|produce|Лексическая форма с основой product-, не produce + свободный -t.
production|n|B1|производство|The company moved [[production]] to a larger site.|Компания перенесла производство на более крупную площадку.|product- + -ion|product|Процесс, обычно неисчисляемое.
producer|n|B1|производитель|The [[producer]] must provide safety information.|Производитель должен предоставить информацию о безопасности.|produc- + -er|produce|В музыке и кино имеет профессиональные специальные значения.
productive|adj|B2|продуктивный, результативный|We had a [[productive]] meeting.|У нас прошла результативная встреча.|product- + -ive|product|Не то же самое, что industrial или produced.
productivity|n|B2|производительность труда|Better tools can improve [[productivity]].|Более хорошие инструменты могут повысить производительность труда.|productive + -ity|productive|E отпадает перед -ity; измеряет результат относительно затрат.
unproductive|adj|B2|непродуктивный|The discussion became [[unproductive]].|Обсуждение стало непродуктивным.|un- + productive|productive|Не дающий полезного результата.
reproduce|v|B2|воспроизвести|Can you [[reproduce]] the error on another device?|Можете воспроизвести ошибку на другом устройстве?|re- + produce|produce|Здесь повторное получение результата; биологический смысл отдельно.
reproduction|n|B2|воспроизведение, копирование|The licence permits [[reproduction]] for personal use.|Лицензия разрешает копирование для личного использования.|reproduct- + -ion|reproduce|Название процесса; может быть и отдельной копией.
`);
  add('construct', 'строить, конструировать', ['form', 'create', 'develop'], ['workplace', 'it'],
    'Construct — современный глагол. Историческая основа struct рассматривается отдельно; instruct и destroy нельзя представлять как свободные производные construct.', `
construct|v|B2|строить, конструировать|Engineers will [[construct]] a new bridge.|Инженеры построят новый мост.|construct||Формальнее build; construct an argument — отдельное переносное употребление.
construction|n|B2|строительство|Road [[construction]] will begin in May.|Строительство дороги начнётся в мае.|construct + -ion|construct|Здесь процесс, обычно неисчисляемый.
constructive|adj|B2|конструктивный, полезный для улучшения|Please give [[constructive]] feedback.|Давайте конструктивную обратную связь.|construct + -ive|construct|О помощи в улучшении, а не физическом строительстве.|figurative
constructively|adv|B2|конструктивно|We should discuss the issue [[constructively]].|Нам следует обсудить проблему конструктивно.|constructive + -ly|constructive|Способ обсуждения или реакции.
reconstruct|v|B2|восстанавливать, реконструировать|We can [[reconstruct]] the timeline from the logs.|Мы можем восстановить последовательность событий по журналам.|re- + construct|construct|Восстановление картины событий по свидетельствам.|figurative
reconstruction|n|B2|реконструкция, восстановление|The report includes a [[reconstruction]] of the incident.|Отчёт включает восстановленную картину инцидента.|reconstruct + -ion|reconstruct|В этом контексте результат анализа, не строительные работы.|figurative
`);
  add('define', 'определять, давать определение', ['explain', 'evaluate', 'consider'], ['workplace', 'it'],
    'Define → definition связано с изменением основы. Definite означает определённый, а definitely — определённо; это не то же значение, что точно сформулированный термин.', `
define|v|B1|определять, давать определение|We must [[define]] the scope before starting.|Нам нужно определить объём работ до начала.|define||Define a term / a requirement.
definition|n|B1|определение|The document gives a clear [[definition]] of the term.|В документе дано чёткое определение термина.|defin- + -ition|define|Запоминаем словарную форму; не универсальное добавление -ition.
defined|adj|B2|определённый, заданный|The project has clearly [[defined]] goals.|У проекта чётко определённые цели.|define + -ed|define|О сформулированных границах или требованиях.
undefined|adj|B2|неопределённый, не заданный|The variable is [[undefined]].|Переменная не определена.|un- + defined|defined|В языках программирования может быть специальным значением.
redefine|v|B2|переопределять|The team wants to [[redefine]] its priorities.|Команда хочет пересмотреть свои приоритеты.|re- + define|define|Дать новое определение или заново установить.
definite|adj|B1|определённый, несомненный|We need a [[definite]] answer by Friday.|Нам нужен определённый ответ до пятницы.|definite|define|Лексически связанная форма; не define + продуктивный -te.
definitely|adv|B1|определённо, точно|I will [[definitely]] attend the meeting.|Я точно приду на встречу.|definite + -ly|definite|Правильное написание definitely, не definately.
indefinite|adj|B2|неопределённый по сроку|The closure will last for an [[indefinite]] period.|Закрытие продлится неопределённый срок.|in- + definite|definite|An indefinite article — отдельное грамматическое значение.
indefinitely|adv|B2|на неопределённый срок|We cannot postpone the update [[indefinitely]].|Мы не можем откладывать обновление на неопределённый срок.|indefinite + -ly|indefinite|Не обязательно навсегда.
`);
  add('explain', 'объяснять', ['inform', 'define', 'communicate'], ['everyday', 'workplace'],
    'Explain something to someone, а не explain someone something. Explanation меняет основу; explanatory — объясняющий, необъяснимость выражается unexplained или inexplicable с разными оттенками.', `
explain|v|A2|объяснять|Could you [[explain]] the error to me?|Не могли бы вы объяснить мне эту ошибку?|explain||Explain something to someone.
explanation|n|B1|объяснение|We need an [[explanation]] for the delay.|Нам нужно объяснение задержки.|explan- + -ation|explain|Explain → explan-; не механическое explaination.
explained|adj|B2|объяснённый|The process is clearly [[explained]] in the guide.|Процесс чётко объяснён в руководстве.|explain + -ed|explain|Здесь результат объяснения, а не новое действие.
unexplained|adj|B2|необъяснённый|We noticed an [[unexplained]] increase in traffic.|Мы заметили необъяснённый рост трафика.|un- + explained|explained|Объяснения пока нет; не обязательно его невозможно найти.
explanatory|adj|B2|пояснительный|The chart includes an [[explanatory]] note.|К диаграмме приложена пояснительная записка.|explan- + -atory|explanation|О материале, который объясняет.
`);
  add('express', 'выражать', ['communicate', 'explain', 'create'], ['everyday', 'workplace'],
    'Expression бывает выражением мысли, лица или устойчивым оборотом. Expressive — выразительный, expressly — специально или прямо; это не взаимозаменяемые наречия.', `
express|v|B1|выражать|Please [[express]] your concerns clearly.|Чётко выскажите свои опасения.|express||Express an opinion / concern / interest.
expression|n|B2|выражение мысли или чувства|Art is a form of personal [[expression]].|Искусство — форма личного самовыражения.|express + -ion|express|Здесь процесс выражения.
expression|n|B1|выражение, устойчивый оборот|That [[expression]] is common in informal speech.|Это выражение часто встречается в неформальной речи.|express + -ion|express|Лексическая единица; отдельный смысл от выражения чувства.||phrase
expressive|adj|B2|выразительный|She has a very [[expressive]] voice.|У неё очень выразительный голос.|express + -ive|express|Хорошо передающий эмоции или смысл.
expressively|adv|B2|выразительно|He read the poem [[expressively]].|Он выразительно прочитал стихотворение.|expressive + -ly|expressive|Наречие способа исполнения.
expressly|adv|B2|прямо, специально, недвусмысленно|The policy [[expressly]] forbids sharing passwords.|Правила прямо запрещают передачу паролей.|express + -ly|express|Не синоним expressively; лексикализованное значение.|figurative
`);
  add('consider', 'обдумывать; учитывать', ['decide', 'evaluate', 'respect'], ['everyday', 'workplace'],
    'Considerable — значительный, considerate — внимательный к другим. Их нельзя смешивать, хотя написание близко.', `
consider|v|B1|обдумывать, рассматривать|Please [[consider]] the risks before agreeing.|Обдумайте риски, прежде чем соглашаться.|consider||Consider doing; не consider to do.
consideration|n|B2|рассмотрение, учёт|The proposal is under [[consideration]].|Предложение находится на рассмотрении.|consider + -ation|consider|Take into consideration — учитывать.
considerable|adj|B2|значительный|The upgrade requires [[considerable]] effort.|Обновление требует значительных усилий.|consider + -able|consider|Не способный рассматривать; закреплённое значение величины.|opaque
considerably|adv|B2|значительно|The new process is [[considerably]] faster.|Новый процесс значительно быстрее.|considerable + -ly|considerable|Окончание -able меняется на -ably.
considerate|adj|B2|внимательный к другим|It was [[considerate]] of you to warn us.|Было заботливо с твоей стороны предупредить нас.|consider + -ate|consider|Учитывающий чувства и потребности других.|figurative
inconsiderate|adj|B2|невнимательный к другим|Leaving others to finish your work is [[inconsiderate]].|Оставлять другим завершение твоей работы — невнимательно по отношению к ним.|in- + considerate|considerate|Не означает незначительный.
reconsider|v|B2|пересмотреть решение|We should [[reconsider]] our approach.|Нам следует пересмотреть свой подход.|re- + consider|consider|Обдумать заново; не обязательно изменить решение.
`);
  add('evaluate', 'оценивать', ['value', 'consider', 'define'], ['workplace', 'it'],
    'Evaluate — современный глагол, evaluation — процесс оценки. Value — отдельное семейство; связь здесь учебная и смысловая, а не схема удаления букв.', `
evaluate|v|B2|оценивать|We need to [[evaluate]] the available options.|Нам нужно оценить доступные варианты.|evaluate||Evaluate something against criteria.
evaluation|n|B2|оценка, процесс оценивания|The [[evaluation]] will focus on reliability.|Оценка будет сосредоточена на надёжности.|evaluat- + -ion|evaluate|Не обязательно отметка в учебном заведении.
evaluator|n|B2|специалист или инструмент оценки|An independent [[evaluator]] reviewed the results.|Независимый эксперт оценил результаты.|evaluat- + -or|evaluate|Формальное профессиональное слово.
re-evaluate|v|B2|переоценивать, оценивать заново|We should [[re-evaluate]] the risk after the update.|Нам следует заново оценить риск после обновления.|re- + evaluate|evaluate|Также reevaluate; повторная оценка может подтвердить старый вывод.
re-evaluation|n|B2|повторная оценка|The incident prompted a [[re-evaluation]] of our controls.|Инцидент вызвал пересмотр оценки наших мер защиты.|re- + evaluation|evaluation|Также reevaluation.
`);
  add('use', 'использовать; польза', ['apply', 'help', 'value'], ['everyday', 'workplace', 'it'],
    'Useful — полезный, usable — пригодный к использованию. Used to do и be used to doing — разные грамматические конструкции; они не выводятся из одного перевода использовать.', `
use|v|A1|использовать|We [[use]] this tool to check logs.|Мы используем этот инструмент для проверки журналов.|use||Глагол произносится с /z/; существительное — с /s/.
use|n|A2|использование|The room is for staff [[use]] only.|Помещение предназначено только для сотрудников.|use|use|Существительное; make use of — использовать.||noun
user|n|A2|пользователь|Each [[user]] needs a separate account.|Каждому пользователю нужна отдельная учётная запись.|use + -er|use|Конечное e не удваивается.
useful|adj|A2|полезный|That is a [[useful]] suggestion.|Это полезное предложение.|use + -ful|use|Useful for doing; сохраняется e основы.
usefully|adv|B2|с пользой, полезным образом|The time could be spent more [[usefully]].|Это время можно было бы провести с большей пользой.|useful + -ly|useful|Две l в сочетании -ful + -ly.
usefulness|n|B2|полезность|We questioned the [[usefulness]] of the report.|Мы усомнились в полезности отчёта.|useful + -ness|useful|Название качества, обычно неисчисляемое.
useless|adj|B1|бесполезный|The old cable is [[useless]].|Старый кабель бесполезен.|use + -less|use|Отрицание пользы, не просто отсутствия использования.
usable|adj|B2|пригодный к использованию|The backup is still [[usable]].|Резервная копия всё ещё пригодна к использованию.|use + -able|use|Также useable; означает возможность использования.
usability|n|B2|удобство использования|We tested the [[usability]] of the interface.|Мы проверили удобство использования интерфейса.|usable + -ity|usable|В -ability происходит изменение -able; не то же самое, что usefulness.
reuse|v|B2|использовать повторно|We can [[reuse]] the existing components.|Мы можем повторно использовать имеющиеся компоненты.|re- + use|use|Также re-use; отличается от recycle — перерабатывать.
reusable|adj|B2|многоразовый, пригодный к повторному использованию|Use a [[reusable]] container.|Используйте многоразовый контейнер.|re- + usable|usable|Признак предмета, не утверждение о фактическом повторном использовании.
misuse|v|B2|использовать неправильно или во вред|Employees must not [[misuse]] customer data.|Сотрудники не должны злоупотреблять данными клиентов.|mis- + use|use|Mis- — неправильное использование, не отрицание.
misuse|n|B2|неправильное использование, злоупотребление|The policy aims to prevent [[misuse]] of personal data.|Правила направлены на предотвращение неправомерного использования персональных данных.|misuse|misuse|Существительное; misuse of.||noun
unused|adj|B2|неиспользованный|Delete the [[unused]] accounts.|Удалите неиспользуемые учётные записи.|un- + used|use|Не путать с unusual или be unused to doing.
`);
  add('care', 'забота; внимательность', ['help', 'protect', 'responsible'], ['everyday', 'workplace'],
    'Careful — внимательный, caring — заботливый, careless — неосторожный, carefree — беззаботный. Careless и carefree имеют разные оценки.', `
care|n|B1|забота, уход|The patient needs regular [[care]].|Пациенту нужен регулярный уход.|care||Неисчисляемое; take care of — заботиться.
care|v|A2|считать важным, переживать|I [[care]] about the quality of our work.|Мне важно качество нашей работы.|care|care|Care about something; care for может значить ухаживать.||verb
careful|adj|A2|внимательный, осторожный|Be [[careful]] with that cable.|Будьте осторожны с этим кабелем.|care + -ful|care|Careful with/about; be careful to do.
carefully|adv|A2|внимательно, осторожно|Read the instructions [[carefully]].|Внимательно прочитайте инструкции.|careful + -ly|careful|Наречие, две l в -fully.
careless|adj|B1|неосторожный, невнимательный|One [[careless]] click can expose data.|Один неосторожный щелчок может раскрыть данные.|care + -less|care|Негативная оценка недостатка внимательности.
carelessly|adv|B2|небрежно|The files were [[carelessly]] left on the desk.|Файлы небрежно оставили на столе.|careless + -ly|careless|Описывает небрежное действие.
carelessness|n|B2|небрежность, невнимательность|The error was caused by [[carelessness]].|Ошибка возникла из-за невнимательности.|careless + -ness|careless|Название качества или причины ошибки.
caring|adj|B2|заботливый|She is a [[caring]] colleague.|Она заботливая коллега.|care + -ing|care~verb|Здесь качество человека, не форма Continuous.
carefree|adj|B2|беззаботный|We enjoyed a [[carefree]] weekend.|Мы провели беззаботные выходные.|care + free|care|Сложение с free: свободный от забот, не невнимательный.
`);
  add('comfort', 'комфорт; утешать', ['care', 'help', 'secure'], ['everyday'],
    'Comfortable может описывать кресло, самочувствие и положение человека. Comforting — утешающий; discomfort — дискомфорт, а не отсутствие утешителя.', `
comfort|n|B1|комфорт, удобство|The seats offer good [[comfort]] on long journeys.|Сиденья обеспечивают комфорт в долгих поездках.|comfort||Обычно неисчисляемое; comforts — удобства, другое употребление.
comfort|v|B2|утешать|I tried to [[comfort]] my friend.|Я попытался утешить друга.|comfort|comfort|Эмоциональная поддержка, не создание удобного кресла.|figurative|verb
comfortable|adj|A2|удобный|This chair is very [[comfortable]].|Этот стул очень удобный.|comfort + -able|comfort|Ощущение удобства; не convenient — удобный по обстоятельствам.
comfortably|adv|B1|удобно, с комфортом|You can work [[comfortably]] at this desk.|За этим столом можно удобно работать.|comfortable + -ly|comfortable|Окончание -able меняется на -ably.
uncomfortable|adj|B1|неудобный, вызывающий дискомфорт|The chair is [[uncomfortable]].|Стул неудобный.|un- + comfortable|comfortable|Физическое или эмоциональное ощущение; здесь физическое.
uncomfortably|adv|B2|неудобно; неприятно|The room was [[uncomfortably]] warm.|В комнате было неприятно жарко.|uncomfortable + -ly|uncomfortable|Описывает степень неприятного ощущения.
discomfort|n|B2|дискомфорт, неприятное ощущение|The treatment may cause mild [[discomfort]].|Процедура может вызвать лёгкий дискомфорт.|dis- + comfort|comfort|Обычно неисчисляемое.
comforting|adj|B2|утешающий, успокаивающий|It was [[comforting]] to hear a familiar voice.|Было успокаивающе услышать знакомый голос.|comfort + -ing|comfort~verb|Не то же самое, что comfortable.|figurative
`);
  add('responsible', 'ответственный', ['respond', 'care', 'depend'], ['everyday', 'workplace', 'it'],
    'Современная учебная основа responsible. Историческую связь с respond не выдаём за свободное правило respond + -ible.', `
responsible|adj|B1|ответственный за что-либо|She is [[responsible]] for access reviews.|Она отвечает за проверки доступа.|responsible||Responsible for something/doing something.
responsibility|n|B1|ответственность|Data protection is everyone's [[responsibility]].|Защита данных — ответственность каждого.|responsible + -ity|responsible|Изменение -ible → -ibility; take responsibility for.
responsibly|adv|B2|ответственно|Use company resources [[responsibly]].|Ответственно используйте ресурсы компании.|responsible + -ly|responsible|Окончание -ible меняется на -ibly.
irresponsible|adj|B2|безответственный|Sharing passwords is [[irresponsible]].|Передавать пароли безответственно.|ir- + responsible|responsible|Ir- — вариант отрицательного in- перед r.
irresponsibility|n|B2|безответственность|The report criticised the manager's [[irresponsibility]].|В отчёте критиковалась безответственность руководителя.|ir- + responsibility|responsibility|Название качества поведения.
irresponsibly|adv|B2|безответственно|He handled the information [[irresponsibly]].|Он безответственно обошёлся с информацией.|irresponsible + -ly|irresponsible|Наречие образа действия.
`);
  add('possible', 'возможный', ['decide', 'evaluate', 'responsible'], ['everyday', 'workplace'],
    'Possible — возможный, possibly — возможно. Possibility — возможность как вероятность или вариант; способность человека обычно ability.', `
possible|adj|A2|возможный|Is an earlier meeting [[possible]]?|Возможна ли более ранняя встреча?|possible||It is possible to do; a possible solution.
possibly|adv|B1|возможно|The delay could [[possibly]] affect the launch.|Задержка, возможно, повлияет на запуск.|possible + -ly|possible|Окончание -ible → -ibly.
possibility|n|B1|возможность, вероятность|There is a [[possibility]] of rain.|Есть вероятность дождя.|possible + -ity|possible|Possibility of doing / that; не личное умение.
impossible|adj|A2|невозможный|It is [[impossible]] to finish today.|Закончить сегодня невозможно.|im- + possible|possible|Im- — вариант отрицательного in- перед p.
impossibly|adv|B2|невероятно, чрезмерно|The deadline is [[impossibly]] tight.|Срок невероятно жёсткий.|impossible + -ly|impossible|Усилительное переносное употребление.|figurative
impossibility|n|B2|невозможность|The plan ignores the [[impossibility]] of doing two jobs at once.|План не учитывает невозможность одновременно выполнять две работы.|im- + possibility|possibility|Название состояния; может быть исчисляемым о невозможной вещи.
`);
  add('regular', 'регулярный; правильный', ['organize', 'depend', 'differ'], ['everyday', 'workplace'],
    'Regular бывает регулярным, обычным и правильным по форме. Irregular verb — неправильный глагол, не просто редко используемый.', `
regular|adj|A2|регулярный|We need [[regular]] backups.|Нам нужны регулярные резервные копии.|regular||Происходящий через повторяющиеся промежутки.
regularly|adv|B1|регулярно|Check the logs [[regularly]].|Регулярно проверяйте журналы.|regular + -ly|regular|Наречие частотности.
regularity|n|B2|регулярность|The [[regularity]] of the tests matters.|Важна регулярность проверок.|regular + -ity|regular|Название качества; не правило, rule — другое слово.
irregular|adj|B1|нерегулярный|He works [[irregular]] hours.|Он работает по нерегулярному графику.|ir- + regular|regular|Ir- — отрицание; здесь график.
irregular|adj|A2|неправильный по грамматической форме|Write down one [[irregular]] verb.|Запишите один неправильный глагол.|ir- + regular|regular|Закреплённый грамматический смысл.||grammar
irregularly|adv|B2|нерегулярно|The service runs [[irregularly]] in winter.|Зимой транспорт ходит нерегулярно.|irregular + -ly|irregular|О нерегулярном расписании или повторении.
irregularity|n|B2|нарушение, отклонение от нормы|The audit found an [[irregularity]] in the accounts.|Аудит обнаружил нарушение в отчётности.|ir- + regularity|regularity|В отчётности — подозрительное отклонение, не только отсутствие периодичности.|figurative
`);
  add('help', 'помогать; помощь', ['support', 'care', 'use'], ['everyday', 'workplace'],
    'Helpful — полезный или готовый помочь, helpless — беспомощный. Helpless не значит бесполезный: для этого обычно useless.', `
help|v|A1|помогать|Can you [[help]] me check this report?|Можешь помочь мне проверить этот отчёт?|help||Help someone do / to do; оба варианта возможны.
help|n|A2|помощь|Thank you for your [[help]].|Спасибо за помощь.|help|help|Обычно неисчисляемое; не a help в нейтральном значении помощи.||noun
helpful|adj|A2|полезный; готовый помочь|The guide contains [[helpful]] advice.|Руководство содержит полезные советы.|help + -ful|help|Helpful to/for someone; о людях — готовый помочь.
helpfully|adv|B2|услужливо, с готовностью помочь|She [[helpfully]] added a map.|Она любезно добавила карту.|helpful + -ly|helpful|Наречие описывает действие.
unhelpful|adj|B2|не приносящий пользы|That answer was [[unhelpful]].|Этот ответ не помог.|un- + helpful|helpful|Не помогает в данном контексте.
helpless|adj|B2|беспомощный|I felt [[helpless]] during the outage.|Во время сбоя я чувствовал себя беспомощным.|help + -less|help|Не способный помочь себе; не синоним useless.|figurative
helplessly|adv|B2|беспомощно|We watched [[helplessly]] as the water rose.|Мы беспомощно наблюдали, как поднимается вода.|helpless + -ly|helpless|Описывает отсутствие возможности повлиять.
helplessness|n|B2|беспомощность|The situation created a feeling of [[helplessness]].|Ситуация вызвала чувство беспомощности.|helpless + -ness|helpless|Название состояния.
helper|n|B1|помощник|A volunteer [[helper]] showed us the room.|Помощник-волонтёр показал нам комнату.|help + -er|help|Человек, помогающий с задачей.
`);
  add('value', 'ценность; ценить', ['evaluate', 'use', 'respect'], ['everyday', 'workplace'],
    'Valuable — ценный; invaluable — чрезвычайно ценный, а не бесценный в смысле ничего не стоящий. Valueless — не имеющий ценности.', `
value|n|B1|ценность, стоимость|The insurance covers the full [[value]] of the equipment.|Страховка покрывает полную стоимость оборудования.|value||Value for money — соотношение цены и качества.
value|v|B2|ценить|We [[value]] your feedback.|Мы ценим вашу обратную связь.|value|value|Конверсия: глагол оценки важности.||appreciate
valuable|adj|B1|ценный|The interview provided [[valuable]] information.|Собеседование дало ценные сведения.|value + -able|value|Конечное e отпадает; не обязательно дорогой.
invaluable|adj|B2|чрезвычайно ценный, неоценимый|Her experience was [[invaluable]] to the team.|Её опыт был неоценим для команды.|in- + valuable|valuable|Значение не получается обычным отрицанием valuable; запоминаем отдельно.|opaque
valueless|adj|B2|не имеющий ценности|The expired voucher is [[valueless]].|Просроченный ваучер ничего не стоит.|value + -less|value|Value сохраняет e перед -less.
valuation|n|B2|оценка стоимости|We requested an independent [[valuation]] of the property.|Мы запросили независимую оценку стоимости недвижимости.|valu- + -ation|value|О денежной оценке, не любой оценке качества.
undervalue|v|B2|недооценивать|Do not [[undervalue]] your experience.|Не недооценивайте свой опыт.|under- + value|value~appreciate|Считать менее ценным, чем есть.
overvalue|v|B2|переоценивать|Investors sometimes [[overvalue]] new companies.|Инвесторы иногда переоценивают новые компании.|over- + value|value~appreciate|Назначать чрезмерную стоимость или значимость.
`);
  add('respect', 'уважать; уважение', ['consider', 'agree', 'value'], ['everyday', 'workplace'],
    'Respectful — уважительный; respectable — достойный уважения или приличный; respective — соответствующий каждому; respectively — соответственно. Похожие формы не означают одно и то же.', `
respect|v|B1|уважать|We must [[respect]] other people's privacy.|Мы должны уважать частную жизнь других людей.|respect||Respect someone/something без предлога.
respect|n|B1|уважение|She earned the team's [[respect]].|Она заслужила уважение команды.|respect|respect|Respect for someone; show respect.||noun
respectful|adj|B2|уважительный|Keep the discussion [[respectful]].|Сохраняйте уважительный тон обсуждения.|respect + -ful|respect|Respectful towards/to; о поведении или отношении.
respectfully|adv|B2|уважительно|I [[respectfully]] disagree.|Я с уважением выражаю несогласие.|respectful + -ly|respectful|Не respectively — соответственно.
disrespect|n|B2|неуважение|Interrupting can show [[disrespect]].|Перебивание может выражать неуважение.|dis- + respect|respect~noun|Disrespect for someone/something.
disrespectful|adj|B2|неуважительный|That comment was [[disrespectful]].|Этот комментарий был неуважительным.|disrespect + -ful|disrespect|Не отсутствие уважения к самому говорящему, а проявляемое им отношение.
respectable|adj|B2|приличный, достойный уважения|They earned a [[respectable]] income.|Они получали вполне приличный доход.|respect + -able|respect|Здесь удовлетворительный уровень; не respectful.|figurative
respected|adj|B2|уважаемый|She is a widely [[respected]] researcher.|Она исследовательница, пользующаяся широким уважением.|respect + -ed|respect|Получающий уважение, не обязательно проявляющий его.
respective|adj|B2|соответствующий каждому|The teams returned to their [[respective]] offices.|Команды вернулись каждая в свой офис.|respect + -ive|respect|Лексикализованное распределительное значение; не уважительный.|opaque
respectively|adv|B2|соответственно, в названном порядке|Anna and Mark scored 8 and 9, [[respectively]].|Анна и Марк набрали соответственно 8 и 9 баллов.|respective + -ly|respective|Порядок сопоставления важен: Анна — 8, Марк — 9.
`);
  /* A direct learning link need not imply a shared historical root. */
  E.families.find(f => f.id === 'succeed').related = ['perform', 'evaluate', 'develop'];
  E.batches.push({ id: 'families-02', families: 20, status: 'editorial-draft' });
})(ETEnglish);
