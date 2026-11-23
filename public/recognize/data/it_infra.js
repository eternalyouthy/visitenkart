GT.register({ tab: 'it', topic: 'infra', items: [
{
  id: 'it-infra-server', pos: 'noun',
  de: 'Server', article: 'der', plural: 'die Server',
  ru: 'сервер',
  usage: { says: 'english', note: 'Всегда «der Server», мн. ч. «die Server» (без -s). Глаголы — немецкие: hochfahren, herunterfahren, neu starten.' },
  examples: [
    { de: 'Der [[Server]] antwortet seit zehn Minuten nicht mehr.', ru: 'Сервер не отвечает уже десять минут.' },
    { de: 'Nächstes Jahr ziehen wir die meisten [[Server]] in die Cloud um.', ru: 'В следующем году мы переносим большую часть серверов в облако.' }
  ],
  morph: 'Server',
  family: ['hochfahren', 'herunterfahren', 'neu starten', 'der Ausfall', 'das Rechenzentrum'],
  note: '«Der Server ist down / ausgefallen / nicht erreichbar» — сервер лежит / недоступен. «Das Rechenzentrum» — дата-центр. «Umziehen» — мигрировать (буквально: переезжать).',
  why: {
    confidence: 'high',
    text: 'Состав: заимствование из английского (to serve + -er).\nПроисхождение: английское server — буквально «обслуживающий» (от to serve < лат. servīre «служить»). В архитектуре «клиент–сервер» так назвали узел, обслуживающий запросы клиентов.\nПрозрачность: прозрачно через английское serve.',
    source: 'DWDS / OED, s.v. Server / server',
    evidence: 'Англ. server (< to serve + -er); в информатике с конца XX в., заимствовано в немецкий без изменения основы.'
  },
  ru_link: null
},
{
  id: 'it-infra-ausfall', pos: 'noun',
  de: 'Ausfall', article: 'der', plural: 'die Ausfälle',
  ru: 'сбой, отказ, простой',
  usage: { says: 'both', note: 'Пользователи и руководство — «Ausfall» или «Störung». Эксплуатация говорит и «Outage», «Downtime».' },
  examples: [
    { de: 'Der [[Ausfall]] hat fast zwei Stunden gedauert.', ru: 'Сбой длился почти два часа.' },
    { de: 'Heute Nacht ist der Mailserver [[ausgefallen]].', ru: 'Сегодня ночью упал почтовый сервер.' }
  ],
  morph: 'Aus-fall', root: 'fallen',
  parts: [['Aus-', 'из, наружу'], ['Fall', 'основа fallen — падать']],
  transparency: 'figurative',
  family: ['fallen', 'ausfallen', 'der Fall', 'der Unfall', 'auffallen', 'die Störung'],
  meaningType: 'polysemous',
  meaningExplanation: 'der Ausfall обозначает технический сбой/простой сервера, а также отмену события или отсутствие сотрудника (например, по болезни).',
  meaningExamples: [{ de: 'ein Ausfall der Datenbank', ru: 'сбой базы данных' }, { de: 'krankheitsbedingter Ausfall', ru: 'отсутствие сотрудника из-за болезни' }],
  note: 'Глагол «ausfallen» (fiel aus, IST ausgefallen) — Perfekt с sein. В быту: «Der Kurs fällt aus» — занятие отменяется. «Die Störung» — неполадка; «Wartungsarbeiten» — плановые работы.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола ausfallen (aus- «из» + fallen «падать»).\nПроисхождение: ausfallen буквально «выпадать»; отсюда переносные значения «выпадать из строя / из расписания» (о технике, занятиях, сотрудниках) и существительное der Ausfall («отказ, простой, отмена»).\nПрозрачность: переносная, метафора «выпадения из работы» легко считывается.',
    source: 'DWDS (Pfeifer), s.v. ausfallen / Ausfall',
    evidence: 'Отглагольное имя от ausfallen («выпадать» → «отказывать, отменяться»); техническое значение «отказ оборудования».'
  },
  ru_link: null
},
{
  id: 'it-infra-netzwerk', pos: 'noun',
  de: 'Netzwerk', article: 'das', plural: 'die Netzwerke',
  ru: 'сеть',
  usage: { says: 'german', note: '«Das Netzwerk» или коротко «das Netz» («im Firmennetz»). Wi-Fi — это «das WLAN» (произносится «Ве-лан»), а не «Wifi».' },
  examples: [
    { de: 'Das Gerät ist nicht im [[Netzwerk]], wahrscheinlich ist das Kabel locker.', ru: 'Устройства нет в сети, наверное, отошёл кабель.' },
    { de: 'Gäste bekommen ein eigenes WLAN, getrennt vom internen [[Netzwerk]].', ru: 'Гости получают отдельный Wi-Fi, изолированный от внутренней сети.' }
  ],
  morph: 'Netz-werk', root: 'Netz',
  parts: [['Netz', 'das Netz — сеть'], ['Werk', 'das Werk — сооружение, устройство, сплетение']],
  transparency: 'transparent',
  family: ['das Netz', 'vernetzen', 'das Werk', 'das Netzteil', 'das WLAN'],
  note: 'Средний род из-за «das Werk». «Sich vernetzen» — заводить профессиональные контакты (как в LinkedIn). «Das Netzteil» — блок питания.',
  why: {
    confidence: 'high',
    text: 'Состав: das Netz («сеть») + das Werk («изделие, сооружение, сплетение»).\nПроисхождение: слово Netzwerk существовало в немецком ещё до компьютеров в значении «сетевидное сплетение, решётка» (ср. Fachwerk, Mauerwerk). Современные значения «компьютерная сеть» и «сеть контактов» развились в XX в. под сильным влиянием английского network (часто приводят как кальку).\nПрозрачность: прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Netzwerk',
    evidence: 'Первоначально «сплетение, сетка» (Netz + Werk); современные значения «компьютерная/социальная сеть» закрепились под влиянием англ. network.'
  },
  ru_link: null
}
]});
