/* usage.says: 'english' | 'german' | 'both': what German IT/security people actually say. */
GT.register({ tab: 'it', topic: 'security', items: [
{
  id: 'it-sec-schwachstelle', pos: 'noun',
  de: 'Schwachstelle', article: 'die', plural: 'die Schwachstellen',
  ru: 'уязвимость; слабое место',
  usage: { says: 'both', note: 'В отчётах, с руководством, у BSI и в прессе — «Schwachstelle» (или «Sicherheitslücke»). Внутри техкоманды также говорят «Vulnerability», «Vuln» или просто «die CVE».' },
  examples: [
    { de: 'Der Scanner hat drei kritische [[Schwachstellen]] gefunden.', ru: 'Сканер нашёл три критические уязвимости.' },
    { de: 'Die [[Schwachstelle]] wird bereits aktiv ausgenutzt, wir müssen heute noch patchen.', ru: 'Уязвимость уже активно эксплуатируется, нам нужно пропатчить сегодня же.' }
  ],
  morph: 'Schwach-stelle', root: 'schwach · Stelle',
  parts: [['schwach', 'слабый'], ['Stelle', 'die Stelle — место']],
  transparency: 'figurative',
  family: ['schwach', 'die Schwäche', 'die Stelle', 'die Sicherheitslücke', 'der Schwachstellenscan'],
  meaningType: 'polysemous',
  meaningExplanation: 'Schwachstelle — это и общее «слабое место» (в плане, аргументе, конструкции), и стандартный термин IT-безопасности «уязвимость».',
  meaningExamples: [{ de: 'eine kritische Schwachstelle patchen', ru: 'закрыть критическую уязвимость (IT)' }, { de: 'die Schwachstelle in deinem Plan', ru: 'слабое место в твоём плане' }],
  note: 'Употребляется и вне IT: «Die Schwachstelle in deinem Plan ist das Budget». Типичные глаголы: eine Schwachstelle finden / melden / ausnutzen / schließen / beheben.',
  why: {
    confidence: 'high',
    root: 'stellen',
    text: 'Состав: прилагательное schwach («слабый») + существительное die Stelle («место»).\nПроисхождение: определительное сложение XX века, первоначально в технике и повседневной речи — «слабое, уязвимое место»; затем закрепилось как стандартный термин IT-безопасности.\nПрозрачность: переносная, смысл легко считывается из двух частей.',
    source: 'DWDS, s.v. Schwachstelle',
    evidence: 'Сложение schwach + Stelle («слабое место»), распространённое в технике и IT-безопасности.'
  },
  ru_link: null
},
{
  id: 'it-sec-angriff', pos: 'noun',
  de: 'Angriff', article: 'der', plural: 'die Angriffe',
  ru: 'атака, нападение',
  usage: { says: 'german', note: '«Angriff / Cyberangriff» — обычное слово. Английский остаётся в названиях типов атак: «Brute-Force-Angriff», «Supply-Chain-Angriff», «Man-in-the-Middle-Angriff».' },
  examples: [
    { de: 'Der [[Angriff]] kam über eine Phishing-Mail.', ru: 'Атака пришла через фишинговое письмо.' },
    { de: 'Wir wissen noch nicht, wer hinter dem [[Angriff]] steckt.', ru: 'Мы пока не знаем, кто стоит за атакой.' }
  ],
  morph: 'An-griff', root: 'greifen',
  parts: [['An-', 'на, к'], ['griff', 'основа greifen — хватать']],
  transparency: 'figurative',
  family: ['greifen', 'angreifen', 'der Angreifer', 'der Griff', 'der Zugriff', 'begreifen', 'die Angriffsfläche'],
  note: 'Глагол: angreifen (griff an, hat angegriffen). «Der Angreifer» — злоумышленник; «die Angriffsfläche» — поверхность атаки; «der Angriffsvektor» — вектор атаки. «Ziel eines Angriffs werden» — стать целью атаки.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола angreifen (an- + greifen) со ступенью чередования в основе (griff).\nПроисхождение: angreifen первоначально значило «взяться за что-то, схватить», а затем и «наброситься, напасть» (военное значение закрепилось к ранненововерхненемецкому периоду). К тому же корню greifen восходят Zugriff и begreifen.\nПрозрачность: переносная — образ «схватить» в значении «атаковать» ощущается слабо.',
    source: 'DWDS (Pfeifer), s.v. angreifen / Angriff',
    evidence: 'Отглагольное имя от angreifen («взяться за, схватить» → «напасть»); корень greifen «хватать».'
  },
  ru_link: null
},
{
  id: 'it-sec-berechtigung', pos: 'noun',
  de: 'Berechtigung', article: 'die', plural: 'die Berechtigungen',
  ru: 'право (доступа), разрешение, полномочие',
  usage: { says: 'german', note: '«Berechtigung(en)» или «Rechte» (Admin-Rechte). Английское «Permissions» встречается в интерфейсах, но в разговоре и на аудитах — по-немецки: «das Berechtigungskonzept».' },
  examples: [
    { de: 'Du hast keine [[Berechtigung]] für diesen Ordner.', ru: 'У тебя нет прав на эту папку.' },
    { de: 'Prüf bitte mal, welche [[Berechtigungen]] der Service-Account hat.', ru: 'Проверь, пожалуйста, какие права у сервисного аккаунта.' }
  ],
  morph: 'Be-recht-ig-ung', root: 'Recht',
  parts: [['be-', 'неотделяемая приставка'], ['Recht', 'das Recht — право'], ['-ig', 'глаголообразующий суффикс'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['das Recht', 'berechtigt', 'die Adminrechte', 'das Berechtigungskonzept'],
  note: '«Das Berechtigungskonzept» (концепция разграничения доступа) — типичный немецкий документ для аудитов. «Berechtigungen vergeben / entziehen» — выдать / отозвать права. Least privilege: «das Prinzip der minimalen Rechte», хотя многие говорят «Least Privilege».',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола berechtigen (be- + Recht + -ig-en) + -ung.\nПроисхождение: das Recht и прилагательное recht восходят к индоевропейскому корню со значением «прямой, выпрямленный» (отсюда «прямой» → «правильный» → «право»). В русском «право» и «правый» развились по похожей семантической модели независимо (корни не родственны).\nПрозрачность: прозрачная — основа Recht сразу видна.',
    source: 'DWDS (Pfeifer), s.v. recht / Recht / berechtigen',
    evidence: 'berechtigen «наделять правом» от Recht (< герм. *rehta- «прямой, правильный» < и.-е. *h₃reǵ-to-).'
  },
  ru_link: null
},
{
  id: 'it-sec-patch', pos: 'noun',
  de: 'Patch', article: 'der', plural: 'die Patches',
  ru: 'патч, исправление',
  usage: { says: 'english', note: 'Все говорят «Patch» и «patchen» (patchte, hat gepatcht). Официальнее: «das Sicherheitsupdate». Немецкий глагол для установки — «einspielen».' },
  examples: [
    { de: 'Der [[Patch]] wird am Wochenende eingespielt.', ru: 'Патч поставят на выходных.' },
    { de: 'Habt ihr die Server schon [[gepatcht]]?', ru: 'Вы уже пропатчили серверы?' }
  ],
  morph: 'Patch',
  family: ['patchen', 'der Patchday', 'das Patch-Management', 'das Sicherheitsupdate', 'einspielen'],
  note: '«Einspielen» — очень немецкий IT-глагол: «ein Update / einen Patch / ein Backup einspielen» — установить / восстановить. «Patchday» — ежемесячный «вторник патчей» Microsoft.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: английское patch («заплатка») в середине XX в. перенесли в вычислительную технику — сначала для «заплаток» на перфокартах и в машинном коде, затем для исправлений программ. В немецкий и русский термин пришёл напрямую из IT-английского.\nПрозрачность: образ заплатки понятен при знании английского patch.',
    source: 'OED / Wiktionary, s.v. patch',
    evidence: 'Англ. patch («заплатка»), компьютерный термин для исправления кода с 1950-х гг.; заимствовано в немецкий и русский.'
  },
  ru_link: null
},
{
  id: 'it-sec-verschluesselung', pos: 'noun',
  de: 'Verschlüsselung', article: 'die', plural: 'die Verschlüsselungen',
  ru: 'шифрование',
  usage: { says: 'german', note: 'Почти всегда по-немецки: «Verschlüsselung», «verschlüsseln», «entschlüsseln». «Encryption» — только в названиях продуктов.' },
  examples: [
    { de: 'Alle Firmenlaptops haben eine [[Verschlüsselung]] der Festplatte.', ru: 'На всех рабочих ноутбуках зашифрован диск.' },
    { de: 'Bitte [[verschlüssel]] die Datei, bevor du sie per Mail schickst.', ru: 'Пожалуйста, зашифруй файл, прежде чем отправлять его по почте.' }
  ],
  morph: 'Ver-schlüssel-ung', root: 'Schlüssel',
  parts: [['ver-', 'неотделяемая приставка'], ['Schlüssel', 'der Schlüssel — ключ'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['der Schlüssel', 'schließen', 'verschlüsseln', 'entschlüsseln', 'das Schloss'],
  note: '«Schlüssel» — ключ, в том числе криптографический: «der private / öffentliche Schlüssel». «Ende-zu-Ende-Verschlüsselung» — сквозное шифрование. Неформальный императив: «Verschlüssel(e) die Datei!»',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола verschlüsseln (ver- + Schlüssel) + -ung.\nПроисхождение: der Schlüssel («ключ») образовано от глагола schließen («запирать»). verschlüsseln в XX в. закрепилось как немецкий эквивалент для «кодировать, шифровать» (буквально «закрывать на ключ»). Русское «шифр» имеет другое происхождение — через европейские языки из арабского ṣifr («ноль»).\nПрозрачность: переносная, но образ ключа полностью читается.',
    source: 'DWDS (Pfeifer), s.v. Schlüssel / schließen; Vasmer: шифр',
    evidence: 'Schlüssel — производное от schließen «запирать»; verschlüsseln (XX в.) — «закрыть ключом, зашифровать».'
  },
  ru_link: null
},
{
  id: 'it-sec-phishing', pos: 'noun',
  de: 'Phishing', article: 'das',
  ru: 'фишинг',
  usage: { says: 'english', note: 'Только английское слово. «Die Phishing-Mail» (die Mail / die E-Mail), «die Phishing-Kampagne», «Spear-Phishing».' },
  examples: [
    { de: 'Die Mail sieht echt aus, ist aber [[Phishing]].', ru: 'Письмо выглядит настоящим, но это фишинг.' },
    { de: 'Einmal im Quartal gibt es bei uns eine Schulung zum Thema [[Phishing]].', ru: 'Раз в квартал у нас проходит обучение по фишингу.' }
  ],
  morph: 'Phishing',
  family: ['die Phishing-Mail', 'die Phishing-Kampagne', 'der Absender', 'verdächtig'],
  note: 'Полезные сочетания: «eine verdächtige Mail melden» — сообщить о подозрительном письме, «auf einen Link klicken», «den Anhang öffnen» — открыть вложение, «der Absender ist gefälscht» — отправитель подделан.',
  why: {
    confidence: 'medium',
    text: 'Состав: заимствование из английского IT-сленга 1990-х годов.\nПроисхождение: обыгрывание английского fishing («рыбалка» — «выуживание» паролей). Написание через ph- обычно объясняют аналогией с phreaking (взлом телефонных сетей), но точное происхождение орфографии документально не зафиксировано.\nПрозрачность: заимствованный термин, понятный по связи с fishing.',
    source: 'OED / Wiktionary, s.v. phishing',
    evidence: 'Зафиксировано в середине 1990-х гг. (среда AOL) как игра с fishing; связь ph- с phreaking — общепринятая, но не строго документированная версия.'
  },
  ru_link: null
},
{
  id: 'it-sec-sicherheitsvorfall', pos: 'noun',
  de: 'Sicherheitsvorfall', article: 'der', plural: 'die Sicherheitsvorfälle',
  ru: 'инцидент безопасности',
  usage: { says: 'both', note: 'Официально и с руководством — «Sicherheitsvorfall» / «Vorfall». В SOC — «Incident», «Incident Response», «das Ticket ist ein echter Incident».' },
  examples: [
    { de: 'Jeder [[Sicherheitsvorfall]] muss sofort gemeldet werden.', ru: 'О каждом инциденте безопасности нужно сообщать немедленно.' },
    { de: 'Nach dem [[Sicherheitsvorfall]] haben wir alle Passwörter zurückgesetzt.', ru: 'После инцидента мы сбросили все пароли.' }
  ],
  morph: 'Sicherheit-s-vorfall', root: 'fallen',
  parts: [['Sicherheit', 'die Sicherheit — безопасность'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Vorfall', 'der Vorfall — происшествие (от vorfallen)']],
  transparency: 'transparent',
  family: ['sicher', 'die Sicherheit', 'der Vorfall', 'vorfallen', 'der Fall', 'der Unfall'],
  note: '«Ein Vorfall» — любое (неприятное) происшествие, и вне IT тоже. Типичные глаголы: einen Vorfall melden / bearbeiten / untersuchen / eskalieren / abschließen.',
  why: {
    confidence: 'high',
    text: 'Состав: die Sicherheit («безопасность») + соединительное -s- + der Vorfall («происшествие»).\nПроисхождение: sicher — раннее заимствование из латинского sēcūrus («беззаботный, спокойный, безопасный»). Vorfall образовано от глагола vorfallen («случаться, происходить», от vor + fallen).\nПрозрачность: сложение прозрачное («происшествие в сфере безопасности»), хотя связь Vorfall с fallen стёрта.',
    source: 'DWDS (Pfeifer), s.v. sicher / Vorfall',
    evidence: 'sicher < др.-в.-нем. sihhur < лат. sēcūrus; Vorfall — отглагольное имя от vorfallen «случаться».'
  },
  ru_link: null
},
{
  id: 'it-sec-firewall', pos: 'noun',
  de: 'Firewall', article: 'die', plural: 'die Firewalls',
  ru: 'файрвол, межсетевой экран',
  usage: { says: 'english', note: 'Всегда «die Firewall». Обратите внимание на артикль: die (как «die Wand» — стена). «Die Firewall-Regel» — правило файрвола.' },
  examples: [
    { de: 'Der Traffic kommt nicht durch, wahrscheinlich blockiert ihn die [[Firewall]].', ru: 'Трафик не проходит, вероятно, его блокирует файрвол.' },
    { de: 'Für den neuen Dienst müssen wir in der [[Firewall]] einen Port freischalten.', ru: 'Для нового сервиса нужно открыть порт на файрволе.' }
  ],
  morph: 'Firewall',
  family: ['die Firewall-Regel', 'freischalten', 'sperren', 'blockieren'],
  meaningType: 'figurative',
  meaningExplanation: 'Изначально fire wall — строительная противопожарная стена (Brandmauer), не пускающая огонь дальше; в IT этот образ перенесли на сетевой экран.',
  meaningExamples: [{ de: 'Die Firewall blockiert den Traffic.', ru: 'Файрвол блокирует трафик (как защитная стена).' }],
  note: '«Freischalten» — открыть, разрешить (порт, аккаунт); «sperren» — заблокировать (аккаунт, порт). Очень частая пара в тикетах.',
  why: {
    confidence: 'high',
    text: 'Состав: заимствование из английского (fire «огонь» + wall «стена»).\nПроисхождение: в строительстве fire wall — противопожарная стена (по-немецки die Brandmauer), не дающая огню перейти в соседнее помещение. В конце XX в. термин перенесли в компьютерные сети; женский род (die Firewall) в немецком обычно связывают с родом слов die Wand и die Mauer.\nПрозрачность: переносная, строительная метафора хорошо понятна.',
    source: 'DWDS / OED, s.v. Firewall / firewall',
    evidence: 'Англ. fire wall («брандмауэр, противопожарная стена»), в компьютерных сетях с конца 1980-х гг.'
  },
  ru_link: null
},
{
  id: 'it-sec-2fa', pos: 'noun',
  de: 'Zwei-Faktor-Authentifizierung', article: 'die',
  ru: 'двухфакторная аутентификация (2FA)',
  usage: { says: 'both', note: 'Пишут «Zwei-Faktor-Authentifizierung». Говорят «2FA» или «MFA» — по-немецки: «Цвай-Эф-А», «Эм-Эф-А».' },
  examples: [
    { de: 'Für den VPN-Zugang ist [[Zwei-Faktor-Authentifizierung]] Pflicht.', ru: 'Для доступа к VPN двухфакторная аутентификация обязательна.' },
    { de: 'Aktivier bitte die [[Zwei-Faktor-Authentifizierung]] für dein GitHub-Konto.', ru: 'Включи, пожалуйста, двухфакторку для своего аккаунта GitHub.' }
  ],
  morph: 'Zwei-Faktor-Authentifizierung',
  family: ['der Faktor', 'authentifizieren', 'die Anmeldung', 'sich anmelden', 'einloggen'],
  note: 'Буквы читаются по-немецки: A — «а», F — «эф», M — «эм». Вход в систему: «sich anmelden» (норма) или «sich einloggen» (среди айтишников). «Pflicht» — обязательно.',
  why: {
    confidence: 'high',
    text: 'Состав: трёхкомпонентное сложение zwei («два») + Faktor («фактор») + Authentifizierung («аутентификация»).\nПроисхождение: Faktor восходит к латинскому factor («делатель, действующее начало», от facere); authentisch — через латынь к греческому authentikós («подлинный»). В IT-безопасности сложение переводит английское two-factor authentication.\nПрозрачность: полностью прозрачный международный термин.',
    source: 'DWDS (Pfeifer), s.v. Faktor / authentisch',
    evidence: 'zwei + Faktor (< лат. factor) + Authentifizierung (< греч. authentikós «подлинный»); эквивалент англ. two-factor authentication.'
  },
  ru_link: null
},
{
  id: 'it-sec-ausnutzen', pos: 'verb',
  de: 'ausnutzen', forms: { praes: 'nutzt aus', praet: 'nutzte aus', perf: 'hat ausgenutzt' }, gov: '+ Akk.',
  ru: 'эксплуатировать (уязвимость); пользоваться (кем-то, чем-то)',
  usage: { says: 'both', note: 'Норма: «eine Schwachstelle ausnutzen». Техсленг: «exploiten»; существительное — «der Exploit».' },
  examples: [
    { sense: 'эксплуатировать уязвимость', de: 'Die Angreifer haben eine bekannte Lücke im VPN [[ausgenutzt]].', ru: 'Злоумышленники проэксплуатировали известную дыру в VPN.' },
    { sense: 'воспользоваться возможностью', de: 'Wir sollten das gute Wetter [[ausnutzen]] und eine Pause draußen machen.', ru: 'Стоит воспользоваться хорошей погодой и сделать перерыв на улице.' },
    { sense: 'пользоваться (кем-то в своих интересах)', de: 'Er [[nutzt]] die Hilfsbereitschaft seiner Kollegen schamlos [[aus]].', ru: 'Он бессовестно пользуется готовностью коллег помочь.' }
  ],
  morph: 'aus-nutz-en', root: 'nutzen',
  parts: [['aus-', 'до конца, полностью (отделяемая)'], ['nutz', 'основа nutzen — использовать'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['nutzen', 'benutzen', 'der Nutzer', 'die Nutzung', 'nützlich', 'der Exploit'],
  meaningType: 'polysemous',
  meaningExplanation: 'Глагол имеет несколько устоявшихся значений: эксплуатировать уязвимость (IT), воспользоваться случаем и корыстно пользоваться людьми.',
  meaningExamples: [{ de: 'eine Sicherheitslücke ausnutzen', ru: 'проэксплуатировать уязвимость' }, { de: 'das gute Wetter ausnutzen', ru: 'воспользоваться хорошей погодой' }, { de: 'seine Kollegen ausnutzen', ru: 'пользоваться коллегами' }],
  note: 'Вне IT — часто с негативом: «Er nutzt seine Kollegen aus» — он пользуется коллегами. Отделяемый: «Sie nutzen die Lücke aus».',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка aus- («до конца, полностью») + nutzen («использовать»).\nПроисхождение: nutzen связано с der Nutzen («польза»). С приставкой aus- глагол значит «использовать до конца, выжать всю пользу» — отсюда и нейтральное «воспользоваться», и негативное «эксплуатировать» (людей или уязвимость).\nПрозрачность: переносная, но корень nutzen и роль aus- легко считываются.',
    source: 'DWDS (Pfeifer), s.v. nutzen / ausnutzen',
    evidence: 'nutzen (к Nutzen «польза») + aus- («полностью, до исчерпания») → «использовать в своих интересах, эксплуатировать».'
  },
  ru_link: null
},
{
  id: 'it-sec-zugriff', pos: 'noun',
  de: 'Zugriff', article: 'der', plural: 'die Zugriffe',
  ru: 'доступ (к данным, системам)',
  usage: { says: 'german', note: '«Zugriff» — обычное слово. Английский остаётся в устойчивых терминах: «Remote Access», «Access Management», «Privileged Access».' },
  examples: [
    { de: 'Ich habe keinen [[Zugriff]] auf das Repository.', ru: 'У меня нет доступа к репозиторию.' },
    { de: 'Wer hat alles [[Zugriff]] auf die Produktionsdatenbank?', ru: 'У кого вообще есть доступ к продовой базе?' }
  ],
  morph: 'Zu-griff', root: 'greifen',
  parts: [['Zu-', 'к, по направлению к'], ['griff', 'основа greifen — хватать']],
  transparency: 'figurative',
  family: ['greifen', 'zugreifen', 'der Angriff', 'der Griff', 'der Zugang', 'die Zugangsdaten'],
  note: '«Zugriff auf + Akk.», глагол «auf etw. zugreifen». Сравните: «der Zugang» — доступ как вход или учётка («Ich brauche einen Zugang für Jira»); «die Zugangsdaten» — логин и пароль.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола zugreifen (zu- + greifen) со ступенью чередования в основе (griff).\nПроисхождение: zugreifen буквально значит «протянуть руку и схватить, взять». В информатике XX в. существительное Zugriff стало стандартным термином для «доступа» к данным и системам.\nПрозрачность: переносная — буквальный образ «хватки к данным» ещё угадывается.',
    source: 'DWDS (Pfeifer), s.v. zugreifen / Zugriff',
    evidence: 'Отглагольное имя от zugreifen («схватить, взять»); техническое значение «доступ к данным» закрепилось в информатике.'
  },
  ru_link: null
},
{
  id: 'it-sec-schadsoftware', pos: 'noun',
  de: 'Schadsoftware', article: 'die',
  ru: 'вредоносное ПО, малварь',
  usage: { says: 'both', note: '«Schadsoftware» — в текстах BSI, новостях и политиках; среди коллег так же часто «Malware». «Der Trojaner» — троян.' },
  examples: [
    { de: 'Auf dem Rechner der Buchhaltung wurde [[Schadsoftware]] gefunden.', ru: 'На компьютере бухгалтерии нашли вредоносное ПО.' },
    { de: 'Die [[Schadsoftware]] hat sich über das ganze Netzwerk verbreitet.', ru: 'Малварь распространилась по всей сети.' }
  ],
  morph: 'Schad-software', root: 'Schaden',
  parts: [['Schad-', 'der Schaden — вред'], ['Software', 'die Software — ПО']],
  transparency: 'transparent',
  family: ['der Schaden', 'schaden', 'schädlich', 'der Schadcode', 'der Trojaner', 'die Ransomware'],
  note: 'Обычно без мн. ч. «Schadcode» — вредоносный код. Ransomware остаётся английским, а последствия — по-немецки: «Die Daten wurden verschlüsselt».',
  why: {
    confidence: 'high',
    text: 'Состав: основа Schad- (от der Schaden «вред») + Software («ПО»).\nПроисхождение: современное немецкое гибридное сложение конца XX — начала XXI в., созданное как понятный немецкий эквивалент английского malware (malicious software); по той же модели образованы Schadprogramm и Schadcode.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Schadsoftware',
    evidence: 'Современное гибридное сложение Schad- (от Schaden «вред») + Software как немецкий аналог англ. malware.'
  },
  ru_link: null
},
{
  id: 'it-sec-alert', pos: 'noun',
  de: 'Alert', article: 'der', plural: 'die Alerts',
  ru: 'алерт, оповещение (от SIEM / EDR)',
  usage: { says: 'english', note: 'В SOC говорят «der Alert» (некоторые — «das Alert»). Официально по-немецки — «die Warnmeldung» или «der Alarm». «False Positive» остаётся английским.' },
  examples: [
    { de: 'Heute Nacht hat das SIEM über 300 [[Alerts]] erzeugt.', ru: 'Сегодня ночью SIEM сгенерировал больше 300 алертов.' },
    { de: 'Ist der [[Alert]] ein False Positive oder ist das echt?', ru: 'Этот алерт — ложное срабатывание или всё по-настоящему?' }
  ],
  morph: 'Alert',
  family: ['die Warnmeldung', 'der Alarm', 'alarmieren', 'auslösen'],
  note: 'Полезные глаголы: «ein Alert wird ausgelöst» — алерт срабатывает, «einen Alert bearbeiten / schließen / eskalieren». С нетехническими коллегами лучше говорить «Warnmeldung» или «Alarm».',
  why: {
    confidence: 'high',
    text: 'Состав: заимствование из английского IT-языка.\nПроисхождение: английское alert пришло через французское alerte из итальянского военного окрика all’erta — буквально «на возвышение!, на стражу!». Слово Alarm имеет сходную историю (от итальянского all’arme — «к оружию!»).\nПрозрачность: непроизводное заимствование.',
    source: 'OED / Wiktionary, s.v. alert; DWDS (Pfeifer), s.v. Alarm',
    evidence: 'Англ. alert < фр. alerte < итал. all’erta («на стражу!», от erta «подъём, склон»).'
  },
  ru_link: null
},
{
  id: 'it-sec-auswerten', pos: 'verb',
  de: 'auswerten', forms: { praes: 'wertet aus', praet: 'wertete aus', perf: 'hat ausgewertet' }, gov: '+ Akk.',
  ru: 'анализировать, обрабатывать (данные, логи)',
  usage: { says: 'german', note: '«Logs auswerten» — стандартная фраза. «Analysieren» тоже подходит; англицизма тут нет.' },
  examples: [
    { de: 'Wir müssen die Firewall-Logs von gestern Nacht [[auswerten]].', ru: 'Нам нужно проанализировать логи файрвола за прошлую ночь.' },
    { de: 'Hast du die Logs schon [[ausgewertet]]?', ru: 'Ты уже разобрал логи?' }
  ],
  morph: 'aus-wert-en', root: 'Wert',
  parts: [['aus-', 'из, до конца (отделяемая)'], ['Wert', 'der Wert — ценность, значение'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['der Wert', 'wert', 'bewerten', 'die Bewertung', 'die Auswertung', 'wertvoll'],
  note: '«Die Auswertung» — анализ, отчёт. Не путать с «bewerten» — оценивать («ein Risiko bewerten»).',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка aus- + основа глагола werten (от der Wert «ценность, значение»).\nПроисхождение: глагол закрепился в XIX–XX вв. со значением «полностью использовать ценность чего-либо», а в науке и технике — «обрабатывать данные, извлекая из них полезный результат».\nПрозрачность: переносная — корень Wert виден, но «анализировать логи» нужно запомнить как отдельное значение.',
    source: 'DWDS (Pfeifer), s.v. werten / auswerten',
    evidence: 'aus- + werten (от Wert): «извлечь ценность / полезный результат», затем «обрабатывать и анализировать данные».'
  },
  ru_link: null
},
{
  id: 'it-sec-melden', pos: 'verb',
  de: 'melden', forms: { praes: 'meldet', praet: 'meldete', perf: 'hat gemeldet' }, gov: 'etw. (Akk.) an/bei + …; sich melden',
  ru: 'сообщать, докладывать; (sich melden) выйти на связь',
  usage: { says: 'german', note: 'Всегда по-немецки: «einen Vorfall melden», «die Meldung», «die Meldepflicht». «Reporten» — редкость.' },
  examples: [
    { sense: 'сообщать, докладывать', de: 'Bitte [[melden]] Sie verdächtige E-Mails sofort an die IT.', ru: 'Пожалуйста, сразу сообщайте в IT о подозрительных письмах.' },
    { sense: 'выйти на связь (sich melden)', de: 'Ich [[melde]] mich, sobald ich mehr weiß.', ru: 'Я дам знать, как только узнаю больше.' }
  ],
  morph: 'meld-en',
  family: ['die Meldung', 'die Rückmeldung', 'sich anmelden', 'sich abmelden', 'sich krankmelden', 'die Meldepflicht'],
  meaningType: 'polysemous',
  meaningExplanation: 'Переходное melden значит «официально сообщать об инциденте», а возвратное sich melden — «выйти на связь, написать/позвонить».',
  meaningExamples: [{ de: 'einen Vorfall sofort melden', ru: 'немедленно сообщить об инциденте' }, { de: 'Ich melde mich morgen bei dir.', ru: 'Я завтра с тобой свяжусь.' }],
  note: 'Центральное слово в политиках безопасности. «Die Meldepflicht»: по DSGVO (GDPR) об утечке данных нужно сообщить в надзорный орган в течение 72 часов. «Sich melden» — выйти на связь («Meld dich!»). «Sich krankmelden» — сообщить, что заболел.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводный слабый глагол (meldete, hat gemeldet).\nПроисхождение: др.-в.-нем. meldōn значило «доносить, извещать, объявлять» (первоначально в юридическом и судебном контексте). Отсюда современные значения «официально сообщать, регистрировать» и производные anmelden, abmelden, Meldung.\nПрозрачность: базовый глагол (и ключ к целому семейству с приставками).',
    source: 'DWDS (Pfeifer), s.v. melden',
    evidence: 'Др.-в.-нем. meldōn «объявлять, извещать, доносить» (общезападногерманский глагол).'
  },
  ru_link: null
}
]});
