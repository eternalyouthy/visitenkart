/* RUSSIAN · Words: Health, Travel, Work, Authorities (A2–B1). */
GT.register({ tab: 'words', topic: 'health', items: [
{
  id: 'ru-w-bolet', pos: 'verb', level: 'A2', aspect: 'impf', t: 'бол+еть',
  forms: { praes: 'бол+ею, бол+еешь · бол+ит, бол+ят', praet: 'бол+ел', perf: 'pf. забол+еть' },
  en: 'to be ill; to hurt, to ache', de: 'krank sein; wehtun, schmerzen',
  examples: [
    { sense: { en: 'to be ill', de: 'krank sein' }, t: 'Я [[бол+ею]] уже́ неде́лю.', en: 'I’ve been ill for a week.', de: 'Ich bin schon seit einer Woche krank.' },
    { sense: { en: 'to hurt', de: 'wehtun' }, t: 'У меня́ [[бол+ит]] голова́.', en: 'I have a headache.', de: 'Ich habe Kopfschmerzen.' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'Two verbs share one infinitive: болеть (болею, болеешь) “to be ill” — also “to be a fan” («болеть за команду») — and болеть (болит, болят) “to hurt”, used only in the 3rd person with «у меня».', de: 'Zwei Verben mit demselben Infinitiv: болеть (болею, болеешь) „krank sein“ — auch „Fan sein“ («болеть за команду») — und болеть (болит, болят) „wehtun“, nur 3. Person mit «у меня».' },
  meaningExamples: [{ t: 'Я бол+ею за «Спарта́к».', en: 'I support Spartak.', de: 'Ich bin Fan von Spartak.' }, { t: 'Что у вас бол+ит?', en: 'Where does it hurt?', de: 'Was tut Ihnen weh?' }]
},
{
  id: 'ru-w-vrach', pos: 'noun', level: 'A2', t: 'врач', gender: 'm', plural: 'врач+и',
  en: 'doctor', de: 'der Arzt, die Ärztin',
  examples: [{ t: 'Мне ну́жно к [[врач+у]].', en: 'I need to see a doctor.', de: 'Ich muss zum Arzt.' }],
  note: { en: 'Masculine even for a woman: «она хороший врач». Stress moves to the ending: врача́, врачу́.', de: 'Maskulin auch für Frauen: «она хороший врач». Betonung wandert auf die Endung: врача́, врачу́.' }
},
{
  id: 'ru-w-bolnichny', pos: 'noun', level: 'B1', t: 'больн+ичный', gender: 'm',
  en: 'sick note, sick leave (colloquial)', de: 'die Krankschreibung (ugs.)',
  examples: [{ t: 'Врач дал мне [[больн+ичный]] на три дня.', en: 'The doctor gave me a sick note for three days.', de: 'Die Ärztin hat mich drei Tage krankgeschrieben.' }],
  meaningType: 'colloquial',
  meaningExplanation: { en: 'Short for «больничный лист» (sick-leave certificate): the adjective became a noun. Fully normal at work, but official documents use the full form.', de: 'Kurz für «больничный лист» (Krankschein): das Adjektiv wurde zum Substantiv. Im Büro völlig normal, in Dokumenten steht die volle Form.' },
  meaningExamples: [{ t: 'Я на больн+ичном.', en: 'I’m on sick leave.', de: 'Ich bin krankgeschrieben.' }, { t: 'взять больн+ичный', en: 'to take sick leave', de: 'sich krankschreiben lassen' }]
},
{
  id: 'ru-w-temperatura', pos: 'noun', level: 'A2', t: 'температ+ура', gender: 'f',
  en: 'temperature; fever', de: 'die Temperatur; das Fieber',
  examples: [{ t: 'У ребёнка высо́кая [[температ+ура]].', en: 'The child has a high fever.', de: 'Das Kind hat hohes Fieber.' }],
  note: { en: '«У меня температура» alone already means “I have a fever”.', de: '«У меня температура» allein heißt schon „Ich habe Fieber“.' }
},
{
  id: 'ru-w-kashel', pos: 'noun', level: 'B1', t: 'к+ашель', gender: 'm',
  en: 'cough', de: 'der Husten',
  examples: [{ t: 'У меня́ си́льный [[к+ашель]].', en: 'I have a bad cough.', de: 'Ich habe starken Husten.' }],
  note: { en: 'Fleeting vowel: ка́шель → ка́шля, от ка́шля (cough medicine: «лекарство от кашля»).', de: 'Flüchtiger Vokal: ка́шель → ка́шля. Hustenmittel: «лекарство от кашля».' }
},
{
  id: 'ru-w-lekarstvo', pos: 'noun', level: 'A2', t: 'лек+арство', gender: 'n', plural: 'лек+арства',
  en: 'medicine, medication', de: 'das Medikament, die Arznei',
  examples: [{ t: 'Принима́йте [[лек+арство]] три ра́за в день.', en: 'Take the medicine three times a day.', de: 'Nehmen Sie das Medikament dreimal täglich.' }],
  note: { en: 'Medicine FOR an illness = «от»: лекарство от головной боли.', de: 'Mittel GEGEN eine Krankheit = «от»: лекарство от головной боли.' }
},
{
  id: 'ru-w-recept', pos: 'noun', level: 'B1', t: 'рец+епт', gender: 'm', plural: 'рец+епты',
  en: 'prescription; recipe', de: 'das Rezept (Arzt und Küche)',
  examples: [
    { sense: { en: 'prescription', de: 'ärztliches Rezept' }, t: 'Э́то лека́рство продаю́т то́лько по [[рец+епту]].', en: 'This medicine is sold only on prescription.', de: 'Dieses Medikament gibt es nur auf Rezept.' },
    { sense: { en: 'recipe', de: 'Kochrezept' }, t: 'Да́й мне [[рец+епт]] э́того пирога́!', en: 'Give me the recipe for this pie!', de: 'Gib mir das Rezept für diesen Kuchen!' }
  ],
  meaningType: 'polysemous',
  meaningExplanation: { en: 'Exactly like German Rezept: a doctor’s prescription and a cooking recipe. English needs two words.', de: 'Genau wie das deutsche Rezept: ärztliche Verordnung und Kochrezept.' },
  meaningExamples: [{ t: 'вы́писать рец+епт', en: 'to write a prescription', de: 'ein Rezept ausstellen' }, { t: 'рец+епт борща́', en: 'a borscht recipe', de: 'ein Borschtsch-Rezept' }]
},
{
  id: 'ru-w-chuvstvovat', pos: 'verb', level: 'A2', aspect: 'impf', t: 'ч+увствовать себ+я',
  forms: { praes: 'ч+увствую, ч+увствуешь', praet: 'ч+увствовал', perf: 'pf. почу́вствовать' },
  en: 'to feel (well / unwell)', de: 'sich fühlen',
  examples: [{ t: 'Как вы [[ч+увствуете себ+я]]?', en: 'How are you feeling?', de: 'Wie fühlen Sie sich?' }],
  note: { en: 'The first в is silent: [чу́ствовать]. «Чувствую себя хорошо / плохо» — adverb, not adjective.', de: 'Das erste в ist stumm: [чу́ствовать]. «Чувствую себя хорошо / плохо» — mit Adverb, nicht Adjektiv.' }
}
]});

GT.register({ tab: 'words', topic: 'travel', items: [
{
  id: 'ru-w-poezd', pos: 'noun', level: 'A2', t: 'п+оезд', gender: 'm', plural: 'поезд+а',
  en: 'train', de: 'der Zug',
  examples: [{ t: '[[П+оезд]] отправля́ется в 8:15.', en: 'The train leaves at 8:15.', de: 'Der Zug fährt um 8:15 ab.' }],
  note: { en: 'Plural with stressed -а: поезда́ (like города́, дома́). By train: «на поезде».', de: 'Plural auf betontes -а: поезда́ (wie города́, дома́). Mit dem Zug: «на поезде».' }
},
{
  id: 'ru-w-bilet', pos: 'noun', level: 'A2', t: 'бил+ет', gender: 'm', plural: 'бил+еты',
  en: 'ticket', de: 'die Fahrkarte, das Ticket',
  examples: [{ t: 'Я купи́л [[бил+ет]] туда́ и обра́тно.', en: 'I bought a return ticket.', de: 'Ich habe eine Hin- und Rückfahrkarte gekauft.' }]
},
{
  id: 'ru-w-opazdyvat', pos: 'verb', level: 'A2', aspect: 'impf', t: 'оп+аздывать', gov: 'на + Acc.',
  forms: { praes: 'оп+аздываю, оп+аздываешь', praet: 'оп+аздывал', perf: 'pf. опозд+ать (опозд+аю)' },
  en: 'to be late', de: 'sich verspäten, zu spät kommen',
  examples: [{ t: 'Извини́те, я [[опозд+ал]] на встре́чу.', en: 'Sorry, I was late for the meeting.', de: 'Entschuldigung, ich bin zu spät zum Termin gekommen.' }],
  note: { en: 'Late FOR = «на» + accusative: опоздать на поезд (to miss the train). The train is late: «поезд опаздывает».', de: 'Zu spät ZU = «на» + Akkusativ: опоздать на поезд (den Zug verpassen). Der Zug hat Verspätung: «поезд опаздывает».' }
},
{
  id: 'ru-w-peresadka', pos: 'noun', level: 'B1', t: 'перес+адка', gender: 'f',
  en: 'change, transfer (between trains, flights)', de: 'das Umsteigen',
  examples: [{ t: 'Мы лети́м с [[перес+адкой]] в Стамбу́ле.', en: 'We fly with a change in Istanbul.', de: 'Wir fliegen mit Umstieg in Istanbul.' }],
  parts: [['пере-', { en: 'across, from one to another', de: 'hinüber, von einem zum anderen' }], ['-сад-', { en: 'sit', de: 'sitzen, setzen' }], ['-ка', { en: 'noun suffix', de: 'Substantivsuffix' }]],
  transparency: 'transparent'
},
{
  id: 'ru-w-ostanovka', pos: 'noun', level: 'A2', t: 'остан+овка', gender: 'f',
  en: '(bus) stop; stopping', de: 'die Haltestelle; das Anhalten',
  examples: [{ t: 'Вам выходи́ть на сле́дующей [[остан+овке]].', en: 'You get off at the next stop.', de: 'Sie steigen an der nächsten Haltestelle aus.' }]
},
{
  id: 'ru-w-doroga', pos: 'noun', level: 'A2', t: 'дор+ога', gender: 'f', plural: 'дор+оги',
  en: 'road; way; journey', de: 'die Straße; der Weg; die Reise',
  examples: [{ t: 'Как прошла́ [[дор+ога]]?', en: 'How was the journey?', de: 'Wie war die Fahrt?' }],
  note: { en: 'Also an adjective дорого́й “expensive / dear” — a different word: доро́га vs дорога́я.', de: 'Nicht verwechseln mit дорого́й „teuer / lieb“: доро́га vs дорога́я.' }
},
{
  id: 'ru-w-komandirovka', pos: 'noun', level: 'B1', t: 'командир+овка', gender: 'f',
  en: 'business trip', de: 'die Dienstreise',
  examples: [{ t: 'На сле́дующей неде́ле я в [[командир+овке]].', en: 'Next week I’m on a business trip.', de: 'Nächste Woche bin ich auf Dienstreise.' }],
  note: { en: 'From командировать “to send on an assignment” (cf. German kommandieren in the old sense “to dispatch”).', de: 'Von командировать „dienstlich entsenden“ (vgl. abkommandieren).' }
}
]});

GT.register({ tab: 'words', topic: 'work', items: [
{
  id: 'ru-w-zarplata', pos: 'noun', level: 'A2', t: 'зарпл+ата', gender: 'f',
  en: 'salary, wages', de: 'das Gehalt, der Lohn',
  examples: [{ t: '[[Зарпл+ату]] перево́дят пя́того числа́.', en: 'The salary is transferred on the 5th.', de: 'Das Gehalt wird am Fünften überwiesen.' }],
  parts: [['зар-', { en: 'short for зарабо́тная “earned”', de: 'kurz für зарабо́тная „verdient“' }], ['пл+ата', { en: 'pay', de: 'Zahlung' }]],
  note: { en: 'A Soviet-era clipped compound: зарабо́тная пла́та. Raise: «повышение зарплаты».', de: 'Sowjetische Kurzform: зарабо́тная пла́та. Gehaltserhöhung: «повышение зарплаты».' }
},
{
  id: 'ru-w-otpusk', pos: 'noun', level: 'A2', t: '+отпуск', gender: 'm', plural: 'отпуск+а',
  en: 'leave, holiday (from work)', de: 'der Urlaub',
  examples: [{ t: 'Я в [[+отпуске]] до конца́ ме́сяца.', en: 'I’m on holiday until the end of the month.', de: 'Ich bin bis Monatsende im Urlaub.' }],
  note: { en: 'Only leave from work. School/university holidays are «каникулы». Maternity leave: «декретный отпуск».', de: 'Nur Urlaub von der Arbeit. Schul-/Semesterferien sind «каникулы». Elternzeit (Mutterschutz): «декретный отпуск».' }
},
{
  id: 'ru-w-sobesedovanie', pos: 'noun', level: 'B1', t: 'собес+едование', gender: 'n',
  en: 'job interview', de: 'das Vorstellungsgespräch',
  examples: [{ t: 'За́втра у меня́ [[собес+едование]].', en: 'I have a job interview tomorrow.', de: 'Morgen habe ich ein Vorstellungsgespräch.' }],
  parts: [['со-', { en: 'together', de: 'zusammen' }], ['-бесед-', { en: 'conversation', de: 'Gespräch' }], ['-ование', { en: 'process noun', de: 'Vorgangssubstantiv' }]]
},
{
  id: 'ru-w-uvolnyatsya', pos: 'verb', level: 'B1', aspect: 'impf', t: 'увольн+яться',
  forms: { praes: 'увольн+яюсь, увольн+яешься', praet: 'увольн+ялся', perf: 'pf. ув+олиться (ув+олюсь)' },
  en: 'to quit, to resign (from a job)', de: 'kündigen (selbst)',
  examples: [{ t: 'Она́ [[ув+олилась]] и уе́хала в Берли́н.', en: 'She quit her job and moved to Berlin.', de: 'Sie hat gekündigt und ist nach Berlin gezogen.' }],
  note: { en: 'Reflexive = you leave yourself. Without -ся the employer fires you: «его уволили» (he was fired).', de: 'Reflexiv = man kündigt selbst. Ohne -ся kündigt der Arbeitgeber: «его уволили» (er wurde entlassen).' }
},
{
  id: 'ru-w-rezyume', pos: 'noun', level: 'B1', t: 'резюм+е', gender: 'n',
  en: 'CV, résumé', de: 'der Lebenslauf',
  examples: [{ t: 'Пришли́те, пожа́луйста, [[резюм+е]].', en: 'Please send your CV.', de: 'Bitte schicken Sie Ihren Lebenslauf.' }],
  note: { en: 'Indeclinable neuter loanword from French: «в резюме», «моё резюме».', de: 'Undeklinierbares Neutrum aus dem Französischen: «в резюме», «моё резюме».' }
},
{
  id: 'ru-w-nachalnik', pos: 'noun', level: 'A2', t: 'нач+альник', gender: 'm',
  en: 'boss, head', de: 'der Chef, der Vorgesetzte',
  examples: [{ t: 'Мой [[нач+альник]] сейча́с в о́тпуске.', en: 'My boss is on holiday now.', de: 'Mein Chef ist gerade im Urlaub.' }],
  note: { en: 'From нача́ло (beginning, head) + -ник. More formal: руководи́тель (see the -ВОД- family).', de: 'Von нача́ло (Anfang, Spitze) + -ник. Formeller: руководи́тель (siehe Familie -ВОД-).' }
},
{
  id: 'ru-w-opyt', pos: 'noun', level: 'B1', t: '+опыт', gender: 'm',
  en: 'experience; experiment', de: 'die Erfahrung; das Experiment',
  examples: [{ t: 'У меня́ пять лет [[+опыта]] в SOC.', en: 'I have five years of SOC experience.', de: 'Ich habe fünf Jahre Erfahrung im SOC.' }],
  note: { en: '«Опыт работы» — work experience (on CVs). In science «опыт» also means an experiment.', de: '«Опыт работы» — Berufserfahrung (im Lebenslauf). In der Naturwissenschaft auch „Experiment“.' }
},
{
  id: 'ru-w-kollega', pos: 'noun', level: 'A2', t: 'колл+ега', gender: 'm',
  en: 'colleague', de: 'der Kollege, die Kollegin',
  examples: [{ t: 'Познако́мьтесь, э́то моя́ [[колл+ега]] Ни́на.', en: 'Meet my colleague Nina.', de: 'Darf ich vorstellen: meine Kollegin Nina.' }],
  note: { en: 'A common-gender noun: «мой коллега» for a man, «моя коллега» for a woman — the ending -а stays.', de: 'Ein Wort für beide Geschlechter: «мой коллега» (Mann), «моя коллега» (Frau) — die Endung bleibt -а.' }
}
]});

GT.register({ tab: 'words', topic: 'authorities', items: [
{
  id: 'ru-w-zayavlenie', pos: 'noun', level: 'B1', t: 'заявл+ение', gender: 'n',
  en: 'application (written); statement', de: 'der Antrag; die Erklärung',
  examples: [{ t: 'На́до написа́ть [[заявл+ение]] на о́тпуск.', en: 'You have to write a leave application.', de: 'Man muss einen Urlaubsantrag schreiben.' }],
  note: { en: '«Подать заявление» — to submit an application; «заявление в полицию» — a police report.', de: '«Подать заявление» — einen Antrag stellen; «заявление в полицию» — eine Anzeige bei der Polizei.' }
},
{
  id: 'ru-w-spravka', pos: 'noun', level: 'B1', t: 'спр+авка', gender: 'f', plural: 'спр+авки',
  en: 'certificate (official note); information', de: 'die Bescheinigung; die Auskunft',
  examples: [{ t: 'Мне нужна́ [[спр+авка]] с рабо́ты.', en: 'I need a certificate from work.', de: 'Ich brauche eine Bescheinigung vom Arbeitgeber.' }],
  note: { en: 'Russian bureaucracy runs on справки. «Справочная» — information desk.', de: 'Die russische Bürokratie lebt von справки. «Справочная» — Auskunftsschalter.' }
},
{
  id: 'ru-w-ochered', pos: 'noun', level: 'A2', t: '+очередь', gender: 'f',
  en: 'queue, line; turn', de: 'die Schlange, die Warteschlange; die Reihe (dran sein)',
  examples: [{ t: 'Кто после́дний в [[+очереди]]?', en: 'Who’s last in the queue?', de: 'Wer ist der Letzte in der Schlange?' }],
  note: { en: '«Кто последний?» is how you join a queue in Russia. «Теперь ваша очередь» — it’s your turn now. Also: очередь задач (task queue).', de: '«Кто последний?» — so stellt man sich in Russland an. «Теперь ваша очередь» — jetzt sind Sie dran. Auch: Aufgabenwarteschlange.' }
},
{
  id: 'ru-w-oformlyat', pos: 'verb', level: 'B1', aspect: 'impf', t: 'оформл+ять',
  forms: { praes: 'оформл+яю, оформл+яешь', praet: 'оформл+ял', perf: 'pf. оф+ормить (оф+ормлю)' },
  en: 'to process, to issue (documents); to apply for; to design', de: 'ausstellen, beantragen (Dokumente); gestalten',
  examples: [{ t: 'Я [[оф+ормил]] ви́зу за неде́лю.', en: 'I got my visa processed in a week.', de: 'Ich habe das Visum in einer Woche bekommen.' }],
  note: { en: 'Literally “to give a form to”. Used both for the applicant and the office: «оформить документы, кредит, заказ».', de: 'Wörtlich „in Form bringen“. Für Antragsteller und Behörde: «оформить документы, кредит, заказ».' }
},
{
  id: 'ru-w-pasport', pos: 'noun', level: 'A2', t: 'п+аспорт', gender: 'm', plural: 'паспорт+а',
  en: 'passport; identity document', de: 'der Pass; der Personalausweis',
  examples: [{ t: 'Покажи́те, пожа́луйста, ваш [[п+аспорт]].', en: 'Please show your passport.', de: 'Bitte zeigen Sie Ihren Ausweis.' }],
  note: { en: 'In Russia the internal паспорт is the identity card; for travel abroad there is the «загранпаспорт».', de: 'In Russland ist der Inlandspass das Ausweisdokument; für Auslandsreisen gibt es den «загранпаспорт».' }
},
{
  id: 'ru-w-dokument', pos: 'noun', level: 'A2', t: 'докум+ент', gender: 'm', plural: 'докум+енты',
  en: 'document; (pl.) papers, ID', de: 'das Dokument; (Pl.) Papiere, Ausweis',
  examples: [{ t: 'Ва́ши [[докум+енты]], пожа́луйста.', en: 'Your papers, please.', de: 'Ihre Papiere, bitte.' }]
}
]});
