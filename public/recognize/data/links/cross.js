/* Cross-language sense-level links between the German (de), English (en) and Russian (ru) packs.
 * Always loaded with the app shell so cards can show 'In other languages' without loading other packs.
 * Each entry maps language code -> [itemId, displayText] plus an optional multilingual note { ru, en, de }.
 * Russian displayText uses '+' before the stressed vowel (converted to combining acute on registration). */
GT.link([
  {"de": ["it-sec-schwachstelle", "die Schwachstelle"], "en": ["en:vulnerability:n:main", "vulnerability"], "ru": ["ru-pro-uyazvimost", "уязв+имость"], "note": {"ru": "В нем. и рус. внутренняя форма прозрачна: schwach + Stelle («слабое место»), уязвимый + -ость; англ. vulnerability — от лат. vulnerāre («ранить»).", "en": "In German and Russian the inner form is transparent: schwach + Stelle (“weak spot”), уязвимый (“woundable”) + -ость; English vulnerability is from Latin vulnerāre (“to wound”).", "de": "Im Deutschen und Russischen ist die Bildung durchsichtig: schwach + Stelle, уязвимый („verwundbar“) + -ость; engl. vulnerability stammt aus lat. vulnerāre („verwunden“)."}},
  {"de": ["it-sec-angriff", "der Angriff"], "ru": ["ru-pro-ataka", "ат+ака"]},
  {"de": ["it-sec-angreifer", "der Angreifer"], "ru": ["ru-pro-zloumyshlennik", "злоум+ышленник"], "note": {"ru": "В официальных отчётах: der Angreifer / злоумышленник (букв. «замышляющий зло»).", "en": "Standard term in incident reports: der Angreifer / злоумышленник (lit. “evil-plotter”).", "de": "Standardbegriff in Vorfallsberichten: der Angreifer / злоумышленник (wörtl. „Übel-Planer“)."}},
  {"de": ["it-sec-berechtigung", "die Berechtigung"], "en": ["en:permission:n:main", "permission"]},
  {"de": ["it-sec-verschluesselung", "die Verschlüsselung"], "en": ["en:encryption:n:main", "encryption"], "note": {"ru": "Нем. Verschlüsselung образовано от der Schlüssel («ключ»); англ. encryption — от греч. kryptós («скрытый»).", "en": "German Verschlüsselung is built from der Schlüssel (“key”); English encryption comes from Greek kryptós (“hidden”).", "de": "Dt. Verschlüsselung ist von der Schlüssel abgeleitet; engl. encryption stammt von griech. kryptós („verborgen“)."}},
  {"de": ["it-sec-phishing", "das Phishing"], "en": ["en:phishing:n:main", "phishing"], "ru": ["ru-pro-fishing", "ф+ишинг"], "note": {"ru": "Международный ИБ-термин (1990-е, от англ. fishing — «рыбалка, выуживание данных»).", "en": "International security term (1990s, respelling of fishing — luring users into revealing data).", "de": "Internationaler IT-Sicherheitsbegriff (1990er, zu engl. fishing — „Angeln“ nach Zugangsdaten)."}},
  {"de": ["it-sec-sicherheitsvorfall", "der Sicherheitsvorfall"], "en": ["en:incident:n:main", "incident"], "ru": ["ru-pro-incident", "инцид+ент"], "note": {"ru": "Инцидент ИБ: нем. der Sicherheitsvorfall (или кратко der Vorfall), англ. (security) incident, рус. инцидент (ИБ).", "en": "Security incident: German der Sicherheitsvorfall (or der Vorfall), English (security) incident, Russian инцидент (ИБ).", "de": "Sicherheitsvorfall: dt. der Sicherheitsvorfall (oder der Vorfall), engl. (security) incident, russ. инцидент (ИБ)."}},
  {"de": ["r-fallen-vorfall", "der Vorfall"], "en": ["en:incident:n:main", "incident"], "ru": ["ru-pro-incident", "инцид+ент"]},
  {"de": ["it-sec-firewall", "die Firewall"], "en": ["en:firewall:n:main", "firewall"]},
  {"de": ["it-sec-2fa", "die Zwei-Faktor-Authentifizierung"], "en": ["en:multi-factor-authentication:n:main", "multi-factor authentication"]},
  {"de": ["it-sec-zugriff", "der Zugriff"], "en": ["en:access:n:main", "access"], "ru": ["ru-pro-dostup", "д+оступ"]},
  {"de": ["it-sec-schadsoftware", "die Schadsoftware"], "ru": ["ru-pro-vredonosny", "вредон+осный"], "note": {"ru": "Оба термина построены от корня «вред»: нем. Schad- (der Schaden) + Software; рус. вредоносный («приносящий вред», вредоносное ПО).", "en": "Both terms are built on “harm”: German Schad- (der Schaden) + Software; Russian вредоносный (“harm-carrying”, вредоносное ПО = malware).", "de": "Beide Begriffe enthalten „Schaden“: dt. Schad- (der Schaden) + Software; russ. вредоносный („Schaden tragend“, вредоносное ПО = Schadsoftware)."}},
  {"de": ["it-sec-bedrohung", "die Bedrohung"], "en": ["en:threat:n:main", "threat"], "ru": ["ru-pro5-ugroza", "угр+оза"]},
  {"de": ["it-sec-eindaemmen", "eindämmen"], "en": ["en:containment:n:main", "containment"], "note": {"ru": "Локализация инцидента: нем. глагол eindämmen (от der Damm — «дамба») и англ. существительное containment.", "en": "Incident containment: German verb eindämmen (from der Damm “dyke”) and English noun containment.", "de": "Eindämmung eines Vorfalls: dt. Verb eindämmen (von der Damm) und engl. Substantiv containment."}},
  {"de": ["it-sec-uebergabe", "die Übergabe"], "en": ["en:handover:n:main", "handover"]},
  {"de": ["it-sec-bericht", "der Bericht"], "ru": ["ru-pro-otchyot", "отчёт"]},
  {"de": ["it-sec-ueberwachen", "überwachen"], "en": ["en:monitoring:n:main", "monitoring"], "note": {"ru": "Нем. глагол überwachen («вести наблюдение, мониторить») и англ. существительное monitoring.", "en": "German verb überwachen (“to monitor”) and English noun monitoring.", "de": "Dt. Verb überwachen und engl. Substantiv monitoring."}},
  {"de": ["it-sec-datenleck", "das Datenleck"], "en": ["en:breach:n:main", "breach"], "ru": ["ru-pro-utechka", "ут+ечка"], "note": {"ru": "Утечка данных: нем. das Datenleck и англ. leak родственны (герм. *lek- «течь»); рус. утечка — от у- + течь.", "en": "Data leak / breach: German das Leck and English leak are Germanic cognates; Russian утечка is у- (“away”) + течь (“to flow”).", "de": "Datenleck: dt. das Leck und engl. leak sind germanische Kognaten; russ. утечка besteht aus у- („weg“) + течь („fließen“)."}},
  {"de": ["it-sec-anhang", "der Anhang"], "en": ["en:attachment:n:main", "attachment"]},
  {"de": ["it-sec-passwort", "das Passwort"], "ru": ["ru-pro-parol", "пар+оль"], "note": {"ru": "Род различается: нем. das Passwort (ср. р.), рус. паро́ль (м. р., из фр. parole — «слово»).", "en": "Note the gender: German das Passwort (neuter), Russian паро́ль (masculine, from French parole “word”).", "de": "Genus beachten: dt. das Passwort (Neutrum), russ. паро́ль (Maskulinum, aus frz. parole „Wort“)."}},
  {"de": ["it-sec-zugangsdaten", "die Zugangsdaten"], "en": ["en:credential:n:main", "credential"]},
  {"de": ["it-sec-benutzerkonto", "das Benutzerkonto"], "en": ["en:account:n:main", "account"], "ru": ["ru-r-pis-uchyotnaya-zapis", "учётная з+апись"]},
  {"de": ["it-sec-anmelden", "sich anmelden"], "ru": ["ru-r-hod-vhodit", "вход+ить"], "note": {"ru": "Вход в систему: нем. sich anmelden («заявить о себе»), рус. войти в систему (сущ. вход — ru-r-hod-vhod).", "en": "Logging in: German sich anmelden, Russian войти в систему (noun: вход).", "de": "Anmeldung im System: dt. sich anmelden, russ. войти в систему (Substantiv: вход)."}},
  {"de": ["it-sec-endgeraet", "das Endgerät"], "en": ["en:device:n:main", "device"]},
  {"de": ["it-sec-datenschutz", "der Datenschutz"], "en": ["en:privacy:n:main", "privacy"]},
  {"de": ["it-sec-richtlinie", "die Richtlinie"], "en": ["en:policy:n:main", "policy"]},
  {"de": ["it-sec-vorgabe", "die Vorgabe"], "en": ["en:requirement:n:main", "requirement"]},
  {"de": ["it-dev-anforderung", "die Anforderung"], "en": ["en:requirement:n:main", "requirement"]},
  {"de": ["it-sec-massnahme", "die Maßnahme"], "en": ["en:action:n:main", "action"]},
  {"de": ["it-sec-bewerten", "bewerten"], "en": ["en:evaluate:v:main", "evaluate"]},
  {"de": ["it-sec-auswerten", "auswerten"], "en": ["en:evaluate:v:main", "evaluate"]},
  {"de": ["it-sec-nachweis", "der Nachweis"], "en": ["en:proof:n:main", "proof"]},
  {"de": ["it-sec-sensibilisierung", "die Sensibilisierung"], "en": ["en:raise-awareness:chunk:main", "raise awareness"]},
  {"de": ["it-sec-zertifikat", "das Zertifikat"], "en": ["en:certificate:n:main", "certificate"]},
  {"de": ["it-sec-aktualisieren", "aktualisieren"], "en": ["en:update:n:main", "update"], "ru": ["ru-pro-obnovlenie", "обновл+ение"], "note": {"ru": "Нем. глагол aktualisieren («обновлять») и сущ. англ. update / рус. обновле́ние (от но́вый).", "en": "German verb aktualisieren (“to update”) alongside the nouns English update / Russian обновле́ние (from но́вый “new”).", "de": "Dt. Verb aktualisieren neben den Substantiven engl. update / russ. обновле́ние (von но́вый „neu“)."}},
  {"de": ["it-sec-wiederherstellen", "wiederherstellen"], "en": ["en:restore:v:main", "restore"]},
  {"de": ["it-sec-datensicherung", "die Datensicherung"], "en": ["en:backup:n:main", "backup"], "ru": ["ru-pro-rezervnaya-kopiya", "рез+ервная к+опия"]},
  {"de": ["it-sec-notfallplan", "der Notfallplan"], "en": ["en:contingency-plan:n:main", "contingency plan"]},
  {"de": ["it-infra-server", "der Server"], "en": ["en:server:n:main", "server"], "ru": ["ru-pro-server", "с+ервер"]},
  {"de": ["it-infra-netzwerk", "das Netzwerk"], "en": ["en:network:n:main", "network"], "ru": ["ru-pro-set", "сеть"]},
  {"de": ["it-infra-ausfall", "der Ausfall"], "en": ["en:outage:n:main", "outage"], "ru": ["ru-pro-sboy", "сбой"]},
  {"de": ["r-fallen-ausfallen", "ausfallen"], "en": ["en:break-down:phr:main", "break down"], "ru": ["ru-pro-upast", "уп+асть"], "note": {"ru": "Общий образ падения при отказе техники: нем. ausfallen (от fallen), англ. break down, рус. разг. упа́сть («сервер упал»).", "en": "Shared metaphor of falling/collapsing when a system fails: German ausfallen (from fallen), English break down, Russian colloquial упа́сть (“the server went down”).", "de": "Gemeinsames Bild des Fallens bei Systemausfall: dt. ausfallen (zu fallen), engl. break down, russ. ugs. упа́сть („der Server ist ausgefallen“)."}},
  {"de": ["it-dev-deployen", "deployen"], "en": ["en:deployment:n:main", "deployment"]},
  {"de": ["it-dev-commit", "der Commit"], "en": ["en:commit:n:main", "commit"]},
  {"de": ["it-comm-fehler", "der Fehler"], "en": ["en:bug:n:main", "bug"], "ru": ["ru-pro-oshibka", "ош+ибка"]},
  {"de": ["it-comm-beheben", "beheben"], "en": ["en:remediation:n:main", "remediation"], "ru": ["ru-pro-ispravlyat", "исправл+ять"], "note": {"ru": "Устранение ошибки или уязвимости: глаголы нем. beheben и рус. исправля́ть, англ. сущ. remediation.", "en": "Fixing a bug or vulnerability: verbs German beheben and Russian исправля́ть, English noun remediation.", "de": "Behebung eines Fehlers oder einer Lücke: Verben dt. beheben und russ. исправля́ть, engl. Substantiv remediation."}},
  {"en": ["en:developer:n:main", "developer"], "ru": ["ru-pro-razrabotchik", "разраб+отчик"]},
  {"en": ["en:release:n:software", "release"], "ru": ["ru-pro-reliz", "рел+из"]},
  {"en": ["en:branch:n:main", "branch"], "ru": ["ru-pro-vetka", "в+етка"], "note": {"ru": "В обоих языках «ветка дерева» перенесена на ветку в Git (branch / ве́тка).", "en": "In both languages “tree branch” was extended to a version-control branch (branch / ве́тка).", "de": "In beiden Sprachen wurde „Zweig eines Baumes“ auf den Entwicklungszweig in Git übertragen (branch / ве́тка)."}},
  {"de": ["b1-work-besprechung", "die Besprechung"], "ru": ["ru-pro-soveshchanie", "совещ+ание"], "note": {"ru": "Осторожно с ложным другом: рабочая встреча по-русски — совеща́ние (или встре́ча), а «ми́тинг» (ru-w-miting) — политическая акция.", "en": "Watch out for the false friend: a work meeting in Russian is совеща́ние, whereas ми́тинг (ru-w-miting) is a political rally.", "de": "Vorsicht vor dem falschen Freund: eine Besprechung heißt auf Russisch совеща́ние, während ми́тинг (ru-w-miting) eine politische Kundgebung ist."}},
  {"de": ["it-comm-meeting", "das Meeting"], "ru": ["ru-pro-soveshchanie", "совещ+ание"]},
  {"de": ["pro-office-frist", "die Frist"], "en": ["en:deadline:n:main", "deadline"], "ru": ["ru-pro-srok", "срок"]},
  {"de": ["r-geben-aufgabe", "die Aufgabe"], "en": ["en:task:n:main", "task"], "ru": ["ru-pro-zadacha", "зад+ача"]},
  {"de": ["pro-office-abstimmen", "abstimmen"], "en": ["en:negotiate:v:main", "negotiate"], "ru": ["ru-pro-soglasovyvat", "соглас+овывать"], "note": {"ru": "Согласование в работе: нем. abstimmen, англ. negotiate, рус. согласо́вывать.", "en": "Coordinating and agreeing terms at work: German abstimmen, English negotiate, Russian согласо́вывать.", "de": "Abstimmung im Arbeitsalltag: dt. abstimmen, engl. negotiate, russ. согласо́вывать."}},
  {"de": ["pro-office-abstimmen", "abstimmen"], "ru": ["ru-w-golosovat", "голосов+ать"], "note": {"ru": "Второе значение нем. abstimmen (über + Akk.) — «голосовать».", "en": "Second meaning of German abstimmen (über + acc.) — “to vote”.", "de": "Zweite Bedeutung von dt. abstimmen (über + Akk.) — „wählen, abstimmen“."}},
  {"en": ["en:reminder:n:main", "reminder"], "ru": ["ru-pro-napominanie", "напомин+ание"]},
  {"de": ["it-comm-rueckmeldung", "die Rückmeldung"], "en": ["en:feedback:n:main", "feedback"]},
  {"de": ["pro-office-absprache", "die Absprache"], "en": ["en:arrangement:n:main", "arrangement"]},
  {"de": ["pro-office-prioritaet", "die Priorität"], "en": ["en:priority:n:main", "priority"]},
  {"de": ["pro-office-protokoll", "das Protokoll"], "en": ["en:minutes:n:main", "minutes"]},
  {"de": ["pro-office-auslastung", "die Auslastung"], "en": ["en:workload:n:main", "workload"], "ru": ["ru-pro-nagruzka", "нагр+узка"]},
  {"de": ["b1-work-bewerben", "sich bewerben"], "en": ["en:apply:v:main", "apply"]},
  {"de": ["b1-work-erfahrung", "die Erfahrung"], "en": ["en:experience:n:main", "experience"], "ru": ["ru-w-opyt", "+опыт"]},
  {"de": ["b1-work-kuendigen", "kündigen"], "ru": ["ru-w-uvolnyatsya", "увольн+яться"], "note": {"ru": "Нем. kündigen означает и «уволиться самому», и «уволить сотрудника»; в русском они различаются частицей -ся (уво́литься vs уво́лить).", "en": "German kündigen means both “to resign” and “to dismiss”; Russian distinguishes them with -ся (уво́литься “resign” vs уво́лить “fire”).", "de": "Dt. kündigen heißt sowohl selbst kündigen als auch jemanden entlassen; das Russische unterscheidet mit -ся (уво́литься vs уво́лить)."}},
  {"de": ["b1-work-vertrag", "der Vertrag"], "en": ["en:contract:n:main", "contract"]},
  {"de": ["b1-work-ueberstunde", "die Überstunde"], "en": ["en:overtime:n:main", "overtime"], "ru": ["ru-pro5-sverhurochnye", "сверхур+очные"]},
  {"de": ["b1-work-verantwortlich", "verantwortlich"], "en": ["en:responsible:adj:main", "responsible"]},
  {"de": ["b2-beruf-aufstiegsmoeglichkeit", "die Aufstiegsmöglichkeit"], "en": ["en:opportunity:n:main", "opportunity"]},
  {"de": ["b2-beruf-selbststaendig", "sich selbstständig machen"], "en": ["en:self-employed:adj:main", "self-employed"]},
  {"de": ["b2-beruf-einarbeitung", "die Einarbeitung"], "en": ["en:onboarding:n:main", "onboarding"]},
  {"de": ["b2-beruf-probezeit", "die Probezeit"], "en": ["en:probation:n:main", "probation"]},
  {"de": ["b2-beruf-befoerderung", "die Beförderung"], "en": ["en:promotion:n:career", "promotion"], "ru": ["ru-w-povyshenie", "повыш+ение"]},
  {"de": ["b2-beruf-kuendigungsfrist", "die Kündigungsfrist"], "en": ["en:notice-period:n:main", "notice period"]},
  {"en": ["en:colleague:n:main", "colleague"], "ru": ["ru-w-kollega", "колл+ега"]},
  {"en": ["en:salary:n:main", "salary"], "ru": ["ru-w-zarplata", "зарпл+ата"]},
  {"en": ["en:annual-leave:n:main", "annual leave"], "ru": ["ru-w-otpusk", "+отпуск"]},
  {"en": ["en:line-manager:n:main", "line manager"], "ru": ["ru-w-nachalnik", "нач+альник"]},
  {"en": ["en:manager:n:main", "manager"], "ru": ["ru-r-vod-rukovoditel", "руковод+итель"]},
  {"de": ["r-fuehren-fuehrung", "die Führung"], "en": ["en:management:n:main", "management"], "ru": ["ru-r-vod-rukovodstvo", "руков+одство"], "note": {"ru": "Нем. die Führung (от führen «вести») и рус. руково́дство (рук- «рука» + -вод- «водить») построены на одном образе управления.", "en": "German die Führung (from führen “to lead”) and Russian руково́дство (рук- “hand” + -вод- “lead”) share the same metaphor of leading.", "de": "Dt. die Führung (zu führen) und russ. руково́дство (рук- „Hand“ + -вод- „führen“) nutzen dasselbe Bild des Führens."}},
  {"de": ["r-fuehren-fuehren", "führen"], "en": ["en:manage:v:main", "manage"], "ru": ["ru-r-vod-rukovodit", "руковод+ить"]},
  {"de": ["r-geben-arbeitgeber", "der Arbeitgeber"], "en": ["en:employer:n:main", "employer"]},
  {"de": ["r-stellen-angestellte", "der Angestellte"], "en": ["en:employee:n:main", "employee"]},
  {"en": ["en:employment:n:main", "employment"], "ru": ["ru-w-trudoustroystvo", "трудоустр+ойство"]},
  {"en": ["en:burnout:n:main", "burnout"], "ru": ["ru-w-vygoranie", "выгор+ание"], "note": {"ru": "Рус. выгора́ние — точная поморфемная калька англ. burnout (вы- «до конца» + гор- «гореть»).", "en": "Russian выгора́ние is an exact morpheme-by-morpheme calque of English burnout (вы- “out” + гор- “burn”).", "de": "Russ. выгора́ние ist eine genaue Lehnübersetzung von engl. burnout (вы- „aus“ + гор- „brennen“)."}},
  {"en": ["en:flexible:adj:main", "flexible"], "ru": ["ru-w-grafik", "гр+афик"], "note": {"ru": "Типичное сочетание: flexible working hours / ги́бкий гра́фик.", "en": "Typical collocation: flexible working hours / ги́бкий гра́фик.", "de": "Typische Verbindung: flexible working hours / ги́бкий гра́фик (flexible Arbeitszeiten)."}},
  {"de": ["b1-health-untersuchung", "die Untersuchung"], "en": ["en:check-up:n:main", "check-up"]},
  {"de": ["b1-health-behandeln", "behandeln"], "en": ["en:treatment:n:main", "treatment"], "note": {"ru": "Нем. глагол behandeln («лечить», сущ. die Behandlung) и англ. сущ. treatment.", "en": "German verb behandeln (“to treat”, noun die Behandlung) and English noun treatment.", "de": "Dt. Verb behandeln (Substantiv die Behandlung) und engl. Substantiv treatment."}},
  {"de": ["b1-health-rezept", "das Rezept"], "en": ["en:prescription:n:main", "prescription"], "ru": ["ru-w-recept", "рец+епт"], "note": {"ru": "Из лат. receptum / recipe! («возьми!»). Нем. das Rezept и рус. реце́пт означают и рецепт врача, и кулинарный рецепт; англ. prescription — только медицинский.", "en": "From Latin receptum / recipe! (“take!”). German das Rezept and Russian реце́пт mean both a medical prescription and a cooking recipe; English prescription is medical only.", "de": "Aus lat. receptum / recipe! („nimm!“). Dt. das Rezept und russ. реце́пт bedeuten Arzt- und Kochrezept; engl. prescription ist nur medizinisch."}},
  {"de": ["b1-health-verschreiben", "verschreiben"], "ru": ["ru-r-pis-vypisyvat", "вып+исывать"], "note": {"ru": "Выписать рецепт / лекарство: в обоих языках приставочный глагол от «писать» (ver- + schreiben / вы- + пи́сывать).", "en": "To prescribe medicine: both languages use a prefixed verb of “write” (ver- + schreiben / вы- + пи́сывать).", "de": "Ein Medikament verschreiben: beide Sprachen nutzen ein Präfixverb zu „schreiben“ (ver- + schreiben / вы- + пи́сывать)."}},
  {"de": ["r-schreiben-verschreiben", "verschreiben"], "ru": ["ru-r-pis-vypisyvat", "вып+исывать"]},
  {"de": ["b1-health-krankenkasse", "die Krankenkasse"], "en": ["en:insurance:n:main", "insurance"]},
  {"de": ["b1-health-ueberweisung", "die Überweisung"], "en": ["en:referral:n:main", "referral"], "note": {"ru": "В медицинском значении — направление к врачу-специалисту (die Überweisung / referral).", "en": "In the medical sense: a referral to a specialist (die Überweisung / referral).", "de": "Im medizinischen Sinn: die Überweisung zum Facharzt (engl. referral)."}},
  {"de": ["b1-health-ueberweisung", "die Überweisung"], "ru": ["ru-r-vod-perevod", "перев+од"], "note": {"ru": "В финансовом значении: банковский перевод (die Überweisung / перево́д).", "en": "In the banking sense: a money transfer (die Überweisung / перево́д).", "de": "Im Bankwesen: die Geldüberweisung (die Überweisung / перево́д)."}},
  {"de": ["b1-health-temperatur", "die Temperatur"], "ru": ["ru-w-temperatura", "температ+ура"], "note": {"ru": "Из лат. temperātūra. В обоих языках «у меня температура / ich habe Temperatur» без уточнения значит «повышенная температура, жар».", "en": "From Latin temperātūra. In both languages “у меня температура / ich habe Temperatur” alone means “I have a fever”.", "de": "Aus lat. temperātūra. In beiden Sprachen bedeutet „ich habe Temperatur / у меня температура“ allein schon „erhöhte Temperatur, Fieber“."}},
  {"de": ["b1-health-medizin", "die Medizin"], "ru": ["ru-w-lekarstvo", "лек+арство"]},
  {"de": ["b1-health-husten", "der Husten"], "ru": ["ru-w-kashel", "к+ашель"], "note": {"ru": "Когнаты: др.-в.-нем. huosto и рус. ка́шель восходят к одному и.-е. звукоподражательному корню *kʷās- (DWDS/Pfeifer, Фасмер).", "en": "Cognates: Old High German huosto and Russian ка́шель both go back to the Indo-European onomatopoeic root *kʷās- (DWDS/Pfeifer, Vasmer).", "de": "Kognaten: ahd. huosto und russ. ка́шель gehen auf dieselbe idg. lautmalerische Wurzel *kʷās- zurück (DWDS/Pfeifer, Vasmer)."}},
  {"de": ["b1-health-infektion", "die Infektion"], "en": ["en:infection:n:main", "infection"]},
  {"de": ["b1-health-stress", "der Stress"], "en": ["en:stress:n:main", "stress"]},
  {"de": ["b1-health-erholen", "sich erholen"], "en": ["en:recover:v:health", "recover"]},
  {"de": ["b1-health-pflegen", "pflegen"], "en": ["en:maintain:v:main", "maintain"], "note": {"ru": "Во втором значении нем. pflegen (данные, систему, код) соответствует англ. maintain.", "en": "In its second sense (maintaining data, a system or code), German pflegen matches English maintain.", "de": "In der zweiten Bedeutung (Daten, ein System pflegen) entspricht dt. pflegen dem engl. maintain."}},
  {"de": ["b1-health-fuehlen", "sich fühlen"], "ru": ["ru-w-chuvstvovat", "ч+увствовать себ+я"]},
  {"de": ["b1-health-abhaengig", "abhängig"], "en": ["en:dependent:adj:main", "dependent"], "note": {"ru": "Одинаковая внутренняя форма: нем. ab- + hängen — калька с лат. dē- + pendēre («свисать → зависеть»), откуда англ. dependent.", "en": "Same inner metaphor: German ab- + hängen is a calque of Latin dē- + pendēre (“hang from → depend”), the source of English dependent.", "de": "Gleiches Bild: dt. ab- + hängen ist eine Lehnübersetzung von lat. dē- + pendēre („herabhängen → abhängen“), woraus engl. dependent stammt."}},
  {"de": ["b1-health-vorsichtig", "vorsichtig"], "en": ["en:careful:adj:main", "careful"]},
  {"en": ["en:sick-leave:n:main", "sick leave"], "ru": ["ru-w-bolnichny", "больн+ичный"]},
  {"de": ["b1-health-ergebnis", "das Ergebnis"], "en": ["en:outcome:n:main", "outcome"]},
  {"de": ["b1-everyday-obwohl", "obwohl"], "ru": ["ru-w-hotya", "хот+я"], "note": {"ru": "В отличие от нем. obwohl (придаточное с глаголом в конце), рус. хотя́ порядок слов не меняет.", "en": "Unlike German obwohl (subordinate clause with verb-final order), Russian хотя́ does not change word order.", "de": "Anders als dt. obwohl (Nebensatz mit Verb am Ende) ändert russ. хотя́ die Wortstellung nicht."}},
  {"de": ["b1-everyday-trotzdem", "trotzdem"], "ru": ["ru-w-vsyo-ravno", "всё равн+о"]},
  {"de": ["b1-everyday-erledigen", "erledigen"], "en": ["en:deal-with:phr:main", "deal with"]},
  {"en": ["en:errand:n:main", "errand"], "ru": ["ru-w-delo", "д+ело"]},
  {"de": ["r-kommen-klarkommen", "klarkommen"], "en": ["en:manage:v:cope", "manage"], "ru": ["ru-w-uspevat", "успев+ать"], "note": {"ru": "Справиться с задачей: нем. klarkommen и англ. manage; рус. успева́ть добавляет смысл «справиться вовремя».", "en": "Coping / managing: German klarkommen and English manage; Russian успева́ть specifically means “to manage in time”.", "de": "Zurechtkommen / schaffen: dt. klarkommen und engl. manage; russ. успева́ть heißt speziell „es rechtzeitig schaffen“."}},
  {"en": ["en:decide:v:main", "decide"], "ru": ["ru-w-reshat", "реш+ать"], "note": {"ru": "Рус. реша́ть объединяет два значения: англ. decide (принять решение) и solve (решить задачу).", "en": "Russian реша́ть covers both English decide (“decide to do”) and solve (“solve a problem”).", "de": "Russ. реша́ть deckt zwei Verben ab: engl. decide / dt. entscheiden und solve / lösen."}},
  {"en": ["en:appointment:n:main", "appointment"], "ru": ["ru-r-pis-zapis", "з+апись"]},
  {"en": ["en:relative:n:person", "relative"], "ru": ["ru-w-rodstvennik", "р+одственник"]},
  {"en": ["en:trust:v:main", "trust"], "ru": ["ru-w-doveryat", "довер+ять"]},
  {"en": ["en:landlord:n:main", "landlord"], "ru": ["ru-w-hozyain", "хоз+яин"]},
  {"en": ["en:neighbour:n:main", "neighbour"], "ru": ["ru-w-sosed", "сос+ед"]},
  {"en": ["en:repair:v:main", "repair"], "ru": ["ru-w-remont", "рем+онт"], "note": {"ru": "Англ. глагол repair («чинить») и рус. сущ. ремо́нт (ремонт техники и ремонт квартиры).", "en": "English verb repair and Russian noun ремо́нт (both repairing an item and renovating a flat).", "de": "Engl. Verb repair („reparieren“) und russ. Substantiv ремо́нт (Reparatur und Wohnungsrenovierung)."}},
  {"en": ["en:invoice:n:main", "invoice"], "ru": ["ru-w-schyot", "счёт"]},
  {"en": ["en:discount:n:main", "discount"], "ru": ["ru-w-skidka", "ск+идка"]},
  {"de": ["r-stellen-bestellen", "bestellen"], "ru": ["ru-w-zakazyvat", "зак+азывать"]},
  {"en": ["en:purchase:v:main", "purchase"], "ru": ["ru-w-pokupka", "пок+упка"]},
  {"de": ["r-ziehen-zug", "der Zug"], "ru": ["ru-w-poezd", "п+оезд"], "note": {"ru": "Нем. der Zug образовано от ziehen («тянуть»); рус. по́езд — от е́здить / е́хать.", "en": "German der Zug is derived from ziehen (“to pull”); Russian по́езд comes from е́здить / е́хать (“to go by vehicle”).", "de": "Dt. der Zug ist von ziehen abgeleitet; russ. по́езд stammt von е́здить / е́хать („fahren“)."}},
  {"en": ["en:return-ticket:n:main", "return ticket"], "ru": ["ru-w-bilet", "бил+ет"]},
  {"en": ["en:connection:n:transport", "connection"], "ru": ["ru-w-peresadka", "перес+адка"]},
  {"en": ["en:schedule:n:main", "schedule"], "ru": ["ru-r-pis-raspisanie", "распис+ание"]},
  {"en": ["en:schedule:n:main", "schedule"], "ru": ["ru-w-grafik", "гр+афик"]},
  {"de": ["r-tragen-antrag", "der Antrag"], "en": ["en:application:n:main", "application"], "ru": ["ru-w-zayavlenie", "заявл+ение"]},
  {"de": ["r-tragen-beantragen", "beantragen"], "en": ["en:apply:v:main", "apply"], "ru": ["ru-w-oformlyat", "оформл+ять"]},
  {"en": ["en:document:n:main", "document"], "ru": ["ru-w-dokument", "докум+ент"]},
  {"de": ["r-schreiben-unterschrift", "die Unterschrift"], "en": ["en:signature:n:main", "signature"], "ru": ["ru-r-pis-podpis", "п+одпись"], "note": {"ru": "Нем. die Unterschrift (unter + Schrift) и рус. по́дпись (под + пис-) построены по модели лат. subscriptio (откуда англ. signature / subscription).", "en": "German die Unterschrift (unter + Schrift) and Russian по́дпись (под + пис-) share the structure “under-writing”.", "de": "Dt. die Unterschrift (unter + Schrift) und russ. по́дпись (под + пис-) folgen demselben Bauplan „Unterschriebenes“."}},
  {"en": ["en:environment:n:main", "environment"], "ru": ["ru-w-okruzhayushchaya-sreda", "окруж+ающая сред+а"]},
  {"de": ["r-fallen-abfall", "der Abfall"], "en": ["en:waste:n:material", "waste"], "ru": ["ru-r-hod-othody", "отх+оды"], "note": {"ru": "Нем. der Abfall (ab- + fallen «то, что отпадает») и рус. отхо́ды (от- + ходить «то, что отходит») построены по одной словообразовательной модели.", "en": "German der Abfall (ab- + fallen “what falls off”) and Russian отхо́ды (от- + ходить “what goes off”) share the same derivational metaphor.", "de": "Dt. der Abfall (ab- + fallen) und russ. отхо́ды (от- + ходить „was abgeht“) folgen demselben Wortbildungsbild."}},
  {"de": ["r-nehmen-teilnahme", "die Teilnahme"], "en": ["en:participation:n:main", "participation"]},
  {"en": ["en:exhibition:n:main", "exhibition"], "ru": ["ru-r-stav-vystavka", "в+ыставка"]},
  {"de": ["r-kommen-einkommen", "das Einkommen"], "en": ["en:revenue:n:main", "revenue"], "ru": ["ru-r-hod-dohod", "дох+од"], "note": {"ru": "Нем. das Einkommen (ein- + kommen «то, что входит», ср. англ. income) и рус. дохо́д (до- + ходить «то, что доходит»).", "en": "German das Einkommen (ein- + kommen “what comes in”, cf. English income) and Russian дохо́д (до- + ходить “what reaches you”).", "de": "Dt. das Einkommen (ein- + kommen, vgl. engl. income) und russ. дохо́д (до- + ходить „was ankommt“)."}},
  {"de": ["r-geben-ausgabe", "die Ausgabe"], "en": ["en:expenditure:n:main", "expenditure"], "ru": ["ru-r-hod-rashod", "расх+од"]},
  {"de": ["r-legen-beleg", "der Beleg"], "en": ["en:receipt:n:main", "receipt"]},
  {"de": ["r-schlagen-vorschlag", "der Vorschlag"], "en": ["en:suggestion:n:main", "suggestion"]},
  {"de": ["r-schlagen-vorschlag", "der Vorschlag"], "en": ["en:proposal:n:main", "proposal"]},
  {"de": ["r-schlagen-ratschlag", "der Ratschlag"], "en": ["en:advice:n:main", "advice"]},
  {"de": ["r-halten-verhalten-n", "das Verhalten"], "en": ["en:behaviour:n:main", "behaviour"]},
  {"de": ["r-halten-unterhaltung", "die Unterhaltung"], "en": ["en:entertainment:n:main", "entertainment"]},
  {"de": ["r-stellen-einstellung", "die Einstellung"], "en": ["en:attitude:n:main", "attitude"]},
  {"de": ["r-ziehen-beziehung", "die Beziehung"], "en": ["en:relationship:n:main", "relationship"]},
  {"en": ["en:reliable:adj:main", "reliable"], "ru": ["ru-w-dostoverny", "дост+оверный"], "note": {"ru": "Англ. reliable — о людях, системах и источниках; рус. достове́рный — только об информации и источниках (о людях и технике — «надёжный»).", "en": "English reliable applies to people, systems and sources; Russian достове́рный is used only for information and sources (for people/systems: надёжный).", "de": "Engl. reliable gilt für Menschen, Systeme und Quellen; russ. достове́рный nur für Informationen und Quellen (für Menschen/Technik: надёжный)."}},
  {"de": ["r-stehen-stehen", "stehen"], "ru": ["ru-r-stav-stavit", "ст+авить"], "note": {"ru": "Когнаты по и.-е. корню *steh₂- («стоять», DWDS/Pfeifer, Фасмер): нем. stehen (и англ. stand) ↔ рус. «стоять», а нем. stellen и рус. ста́вить — каузативы («заставить стоять»).", "en": "Indo-European cognates (*steh₂- “to stand”, DWDS/Pfeifer, Vasmer): German stehen (and English stand) ↔ Russian стоять; German stellen and Russian ста́вить are their causatives (“make stand”).", "de": "Indogermanische Kognaten (*steh₂- „stehen“, DWDS/Pfeifer, Vasmer): dt. stehen (und engl. stand) ↔ russ. стоять; dt. stellen und russ. ста́вить sind die Kausative („zum Stehen bringen“)."}},
  {"de": ["r-stellen-stellen", "stellen"], "ru": ["ru-r-stav-stavit", "ст+авить"], "note": {"ru": "Каузативы к корню *steh₂- («стоять»): stellen и ста́вить совпадают и буквально (поставить вертикально), и в устойчивых оборотах (eine Aufgabe stellen = поставить задачу).", "en": "Causatives of *steh₂- (“to stand”): stellen and ста́вить match both literally (“put upright”) and in collocations (eine Aufgabe stellen = поставить задачу “set a task”).", "de": "Kausative zur Wurzel *steh₂- („stehen“): stellen und ста́вить decken sich wörtlich (aufrecht hinstellen) und in Kollokationen (eine Aufgabe stellen = поставить задачу)."}},
  {"de": ["r-stellen-vorstellen", "vorstellen"], "ru": ["ru-r-stav-predstavlyat", "представл+ять"], "note": {"ru": "Полный структурный двойник: vor- / пред- («перед») + stellen / ста́вить — и «знакомить, презентовать», и возвратное sich vorstellen / предста́вить себе́ («вообразить»).", "en": "Full structural twin: vor- / пред- (“in front”) + stellen / ста́вить — both “to introduce/present” and reflexive sich vorstellen / предста́вить себе́ (“to imagine”).", "de": "Voller Strukturzwilling: vor- / пред- („vor“) + stellen / ста́вить — sowohl „bekannt machen, präsentieren“ als auch reflexiv sich vorstellen / предста́вить себе́."}},
  {"de": ["r-stellen-vorstellung", "die Vorstellung"], "en": ["en:performance:n:main", "performance"], "ru": ["ru-r-stav-predstavlenie", "представл+ение"], "note": {"ru": "Нем. die Vorstellung и рус. представле́ние совмещают значения «идея, понятие» и «спектакль, выступление»; англ. performance — только второе.", "en": "German die Vorstellung and Russian представле́ние share both “idea, notion” and “stage performance”; English performance covers the latter.", "de": "Dt. die Vorstellung und russ. представле́ние vereinen „Idee, Begriff“ und „Aufführung“; engl. performance bezeichnet die Aufführung."}},
  {"de": ["r-stellen-ausstellen", "ausstellen"], "ru": ["ru-r-stav-vystavlyat", "выставл+ять"], "note": {"ru": "Параллель aus- / вы- + stellen / ста́вить: и «выставлять на выставке», и «выставлять счёт» (eine Rechnung ausstellen = выставить счёт).", "en": "Parallel aus- / вы- + stellen / ста́вить: both “to exhibit” and “to issue an invoice” (eine Rechnung ausstellen = выставить счёт).", "de": "Parallele aus- / вы- + stellen / ста́вить: sowohl „exponieren“ als auch „eine Rechnung ausstellen“ (выставить счёт)."}},
  {"de": ["r-stellen-zustellen", "zustellen"], "ru": ["ru-r-stav-dostavlyat", "доставл+ять"], "note": {"ru": "Доставлять (почту, заказ): zu- / до- («до цели») + stellen / ста́вить.", "en": "To deliver (mail, an order): zu- / до- (“up to the destination”) + stellen / ста́вить.", "de": "Zustellen / liefern: zu- / до- („bis zum Ziel“) + stellen / ста́вить."}},
  {"de": ["r-stellen-umstellen", "umstellen"], "ru": ["ru-r-stav-perestavlyat", "переставл+ять"], "note": {"ru": "Переставлять на другое место: отд. um- / пере- + stellen / ста́вить.", "en": "To move / rearrange to another spot: separable um- / пере- + stellen / ста́вить.", "de": "An einen anderen Platz stellen: trennbares um- / пере- + stellen / ста́вить."}},
  {"de": ["r-stellen-einstellen", "einstellen"], "en": ["en:employ:v:main", "employ"]},
  {"de": ["r-stellen-herstellen", "herstellen"], "en": ["en:produce:v:main", "produce"]},
  {"de": ["r-stellen-feststellen", "feststellen"], "en": ["en:find-out:phr:main", "find out"]},
  {"de": ["r-stehen-anstehen", "anstehen"], "ru": ["ru-w-ochered", "+очередь"], "note": {"ru": "В бытовом значении нем. anstehen — «стоять в очереди» (рус. о́чередь).", "en": "In its everyday sense German anstehen means “to stand in a queue” (Russian о́чередь).", "de": "Im Alltagssinn bedeutet dt. anstehen „in der Schlange stehen“ (russ. о́чередь)."}},
  {"de": ["r-schreiben-schreiben", "schreiben"], "ru": ["ru-r-pis-pisat", "пис+ать"], "note": {"ru": "Базовые глаголы семейств письма: нем. schreiben (из лат. scrībere, DWDS/Pfeifer) и рус. писа́ть (и.-е. *peyḱ- «пестрить, рисовать», Фасмер).", "en": "Base verbs of the writing families: German schreiben (from Latin scrībere, DWDS/Pfeifer) and Russian писа́ть (IE *peyḱ- “to mark, paint”, Vasmer).", "de": "Grundverben der Wortfamilien „schreiben“: dt. schreiben (aus lat. scrībere, DWDS/Pfeifer) und russ. писа́ть (idg. *peyḱ- „zeichnen, ritzen“, Vasmer)."}},
  {"de": ["r-schreiben-aufschreiben", "aufschreiben"], "ru": ["ru-r-pis-zapisyvat", "зап+исывать"]},
  {"de": ["r-schreiben-unterschreiben", "unterschreiben"], "ru": ["ru-r-pis-podpisyvat", "подп+исывать"], "note": {"ru": "Точная морфологическая параллель (калька с лат. subscribere): неотд. unter- / под- («под») + schreiben / писа́ть.", "en": "Exact morphological parallel (calque of Latin subscribere): inseparable unter- / под- (“under”) + schreiben / писа́ть (“write”).", "de": "Genaue morphologische Parallele (Lehnübersetzung von lat. subscribere): untrennbares unter- / под- („unter“) + schreiben / писа́ть."}},
  {"de": ["r-schreiben-beschreiben", "beschreiben"], "ru": ["ru-r-pis-opisyvat", "оп+исывать"], "note": {"ru": "Параллельная модель: be- / о- («вокруг, со всех сторон») + schreiben / писа́ть.", "en": "Parallel formation: be- / о- (“around, on all sides”) + schreiben / писа́ть (“write”).", "de": "Parallele Bildung: be- / о- („rundum“) + schreiben / писа́ть."}},
  {"de": ["r-schreiben-beschreibung", "die Beschreibung"], "ru": ["ru-r-pis-opisanie", "опис+ание"]},
  {"de": ["r-schreiben-umschreiben", "umschreiben"], "ru": ["ru-r-pis-perepisyvat", "переп+исывать"]},
  {"de": ["r-schreiben-zuschreiben", "zuschreiben"], "ru": ["ru-r-pis-pripisyvat", "прип+исывать"], "note": {"ru": "Структурная параллель: zu- / при- («к чему-то») + schreiben / пи́сывать — и «дописать», и «приписать авторство/причину».", "en": "Structural parallel: zu- / при- (“to, in addition”) + schreiben / пи́сывать — both “to add in writing” and “to attribute to”.", "de": "Strukturelle Parallele: zu- / при- („hinzu“) + schreiben / пи́сывать — sowohl „hinzuschreiben“ als auch „zuschreiben“."}},
  {"de": ["r-gehen-gehen", "gehen"], "ru": ["ru-r-hod-hodit", "ход+ить"], "note": {"ru": "Базовые глаголы семейств движения пешком: нем. gehen и рус. ходи́ть (многонаправленное) / идти́ (однонаправленное).", "en": "Base verbs of the walking families: German gehen and Russian ходи́ть (multidirectional) / идти́ (unidirectional).", "de": "Grundverben der Bewegung zu Fuß: dt. gehen und russ. ходи́ть (unbestimmt) / идти́ (zielgerichtet)."}},
  {"de": ["r-kommen-ankommen", "ankommen"], "ru": ["ru-r-hod-prihodit", "приход+ить"]},
  {"de": ["r-kommen-bekommen", "bekommen"], "ru": ["ru-w-poluchat", "получ+ать"]},
  {"de": ["r-fuehren-fuehren", "führen"], "ru": ["ru-r-vod-vodit", "вод+ить"], "note": {"ru": "Базовые глаголы семейств «вести»: нем. führen (каузатив к fahren, DWDS) и рус. води́ть / вести́.", "en": "Base verbs of the “lead” families: German führen (causative of fahren, DWDS) and Russian води́ть / вести́.", "de": "Grundverben der Familien „führen“: dt. führen (Kausativ zu fahren, DWDS) und russ. води́ть / вести́."}},
  {"de": ["r-fuehren-anfuehren", "anführen"], "ru": ["ru-r-vod-privodit", "привод+ить"], "note": {"ru": "Одинаковый образ: ein Beispiel anführen = привести́ приме́р; führen zu = привести́ к (результату).", "en": "Same metaphor: ein Beispiel anführen = привести́ приме́р (“give an example”); führen zu = привести́ к (“lead to”).", "de": "Gleiches Bild: ein Beispiel anführen = привести́ приме́р; führen zu = привести́ к."}},
  {"de": ["r-fuehren-einfuehren", "einführen"], "ru": ["ru-r-vod-vvodit", "ввод+ить"], "note": {"ru": "Вводить / внедрять (правила, систему): ein- / в- («внутрь») + führen / води́ть.", "en": "To introduce (rules, a system): ein- / в- (“into”) + führen / води́ть.", "de": "Einführen (Regeln, ein System): ein- / в- („hinein“) + führen / води́ть."}},
  {"de": ["r-fuehren-durchfuehren", "durchführen"], "en": ["en:carry-out:phr:main", "carry out"]},
  {"de": ["r-fuehren-ausfuehren", "ausführen"], "en": ["en:perform:v:main", "perform"]},
  {"de": ["r-setzen-uebersetzen", "übersetzen"], "ru": ["ru-r-vod-perevodit", "перевод+ить"], "note": {"ru": "Переводить на другой язык: параллельная модель неотд. über- («через») + setzen и рус. пере- («через») + води́ть.", "en": "To translate into another language: parallel formation with inseparable über- (“across”) + setzen and Russian пере- (“across”) + води́ть.", "de": "In eine andere Sprache übersetzen: parallele Bildung aus untrennbarem über- + setzen und russ. пере- („hinüber“) + води́ть."}},
  {"de": ["r-bauen-bauen", "bauen"], "en": ["en:construct:v:main", "construct"]},
  {"de": ["r-bauen-bau", "der Bau"], "en": ["en:construction:n:main", "construction"]},
  {"de": ["r-bauen-aufbauen", "aufbauen"], "en": ["en:set-up:phr:main", "set up"]},
  {"de": ["r-sprechen-ansprechen", "ansprechen"], "en": ["en:bring-up:phr:main", "bring up"]},
  {"de": ["r-sprechen-aussprechen", "aussprechen"], "en": ["en:express:v:main", "express"]},
  {"de": ["r-sprechen-widersprechen", "widersprechen"], "en": ["en:disagree:v:main", "disagree"]},
  {"de": ["r-sprechen-absprechen", "absprechen"], "en": ["en:arrange:v:main", "arrange"]},
  {"de": ["r-legen-ueberlegen", "überlegen"], "en": ["en:consider:v:main", "consider"]},
  {"de": ["r-legen-festlegen", "festlegen"], "en": ["en:define:v:main", "define"]},
  {"de": ["r-legen-verlegen", "verlegen"], "en": ["en:postpone:v:main", "postpone"]},
  {"de": ["r-nehmen-aufnehmen", "aufnehmen"], "ru": ["ru-r-pis-zapisyvat", "зап+исывать"], "note": {"ru": "В значении «записывать аудио/видео»: нем. aufnehmen, рус. запи́сывать.", "en": "In the sense “to record audio/video”: German aufnehmen, Russian запи́сывать.", "de": "In der Bedeutung „Audio/Video aufnehmen“: dt. aufnehmen, russ. запи́сывать."}},
  {"de": ["r-geben-uebergeben", "übergeben"], "en": ["en:hand-over:phr:main", "hand over"]},
  {"de": ["r-geben-freigeben", "freigeben"], "en": ["en:approve:v:main", "approve"]},
  {"de": ["r-halten-behalten", "behalten"], "ru": ["ru-r-stav-ostavlyat", "оставл+ять"]},
  {"de": ["r-halten-einhalten", "einhalten"], "en": ["en:meet-a-deadline:chunk:main", "meet a deadline"]},
  {"de": ["r-tragen-betragen", "betragen"], "ru": ["ru-r-stav-sostavlyat", "составл+ять"], "note": {"ru": "В значении «составлять (о сумме, цене, сроке)»: нем. betragen, рус. составля́ть.", "en": "In the sense “to amount to (a sum, price, period)”: German betragen, Russian составля́ть.", "de": "In der Bedeutung „betragen (Summe, Preis, Dauer)“: dt. betragen, russ. составля́ть."}},
  {"de": ["ch-opinion-meiner-meinung-nach", "Meiner Meinung nach [Verb] …"], "en": ["en:in-my-opinion:chunk:main", "in my opinion"], "ru": ["ru-ch-po-moemu", "По-м+оему, …"]},
  {"de": ["ch-clarify-was-meinen-sie", "Was meinen Sie genau mit [X]?"], "en": ["en:what-do-you-mean-by:chunk:main", "what do you mean by"], "ru": ["ru-ch-imeete-v-vidu", "Что вы им+еете в вид+у?"]},
  {"de": ["ch-clarify-richtig-verstanden", "Habe ich Sie richtig verstanden, dass [X]?"], "en": ["en:if-i-understand-correctly:chunk:main", "if I understand correctly"], "ru": ["ru-ch-pravilno-ponimayu", "Пр+авильно ли я понима́ю, что …?"]},
  {"de": ["ch-phone-verbinden", "Könnten Sie mich bitte mit [X] verbinden?"], "en": ["en:could-you-put-me-through:chunk:main", "could you put me through"], "ru": ["ru-ch-soedinite", "Соедин+ите меня́, пож+алуйста, с [X]."]},
  {"de": ["exp-day-macht-nichts", "Macht nichts."], "en": ["en:never-mind:chunk:main", "never mind"], "ru": ["ru-ex-ev-nichego-strashnogo", "Ничег+о стр+ашного."]},
  {"de": ["exp-day-kein-ding", "Kein Ding! / Kein Problem!"], "en": ["en:no-worries:chunk:main", "no worries"], "ru": ["ru-ex-ev-bez-problem", "Без пробл+ем."]},
  {"de": ["exp-day-klingt-gut", "Klingt gut!"], "en": ["en:sounds-good:chunk:main", "sounds good"], "ru": ["ru-ex-ev-dogovorilis", "Договор+ились."]},
  {"de": ["ch-standup-gestern-heute", "Gestern habe ich an [X] gearbeitet, heute kümmere ich mich um [Y]."], "en": ["en:i-am-currently-working-on:chunk:main", "I am currently working on"], "ru": ["ru-ch-vchera-zanimalsya", "Вчер+а я занима́лся (занима́лась) [X]."]},
  {"de": ["ch-help-komme-nicht-weiter", "Hast du kurz Zeit? Ich komme bei [X] nicht weiter."], "en": ["en:i-am-blocked-by:chunk:main", "I am blocked by"], "ru": ["ru-ch-bloker", "У меня́ блок+ер: [X]."]},
  {"de": ["ch-agree-da-hast-du-recht", "Da hast du recht, aber [X]."], "ru": ["ru-ch-ty-prav", "Тут ты прав (прав+а)."]},
  {"de": ["ch-complain-beschweren", "Ich möchte mich über [X] beschweren."], "en": ["en:i-would-like-to-make-a-complaint:chunk:main", "I would like to make a complaint"]},
  {"de": ["ch-appointments-termin-bei", "Ich hätte gern einen Termin bei [X]."], "en": ["en:i-would-like-to-book-an-appointment:chunk:main", "I would like to book an appointment"]},
  {"de": ["ch-appointments-verschieben", "Ich muss meinen Termin leider verschieben."], "en": ["en:could-we-reschedule:chunk:main", "could we reschedule"]},
  {"de": ["ch-appointments-passt-es", "Passt es Ihnen am [Tag] um [Uhrzeit]?"], "en": ["en:does-tuesday-work-for-you:chunk:main", "does Tuesday work for you"]},
  {"de": ["ch-email-freue-mich-auf", "Ich freue mich auf Ihre Rückmeldung."], "en": ["en:i-look-forward-to-hearing-from-you:chunk:main", "I look forward to hearing from you"]},
  {"de": ["ch-smalltalk-wochenende", "Wie war dein Wochenende?"], "en": ["en:how-was-your-weekend:chunk:main", "how was your weekend"]},
  {"de": ["exp-idiom-nagel-kopf", "Den Nagel auf den Kopf treffen."], "en": ["en:hit-the-nail-on-the-head:chunk:main", "hit the nail on the head"], "note": {"ru": "Одинаковый образ в немецком и английском: «ударить по шляпке гвоздя» = попасть в самую точку.", "en": "Identical image in German and English: “to hit the nail on the head”.", "de": "Identisches Bild im Deutschen und Englischen: „den Nagel auf den Kopf treffen“."}},
  {"de": ["exp-idiom-eis-brechen", "Das Eis brechen."], "en": ["en:break-the-ice:chunk:main", "break the ice"]},
  {"de": ["exp-idiom-kirche-im-dorf", "Die Kirche im Dorf lassen."], "ru": ["ru-ex-idiom-mukha-slon", "д+елать из м+ухи слон+а"], "note": {"ru": "Оба выражения призывают не преувеличивать («оставить церковь в деревне» / «не делать из мухи слона»; в нем. также aus einer Mücke einen Elefanten machen).", "en": "Both idioms warn against exaggerating (“leave the church in the village” / “make an elephant out of a fly”; German also says aus einer Mücke einen Elefanten machen).", "de": "Beide Redewendungen mahnen, nicht zu übertreiben („die Kirche im Dorf lassen“ / „aus einer Fliege einen Elefanten machen“)."}},
  {"de": ["exp-day-kommt-drauf-an", "Das kommt darauf an."], "en": ["en:it-depends:chunk:main", "it depends"]},
  {"de": ["exp-day-mal-sehen", "Mal sehen."], "ru": ["ru-ex-ev-posmotrim", "Посм+отрим."]},
  {"de": ["exp-day-kriegen-wir-hin", "Das kriegen wir hin."], "en": ["en:we'll-figure-it-out:chunk:main", "we'll figure it out"]},
  {"de": ["exp-day-ehrlich-gesagt", "Ehrlich gesagt, [Verb] …"], "en": ["en:to-be-honest:chunk:main", "to be honest"]},
  {"de": ["exp-day-macht-sinn", "Das macht Sinn."], "en": ["en:that-makes-sense:chunk:main", "that makes sense"]},
  {"de": ["exp-day-gleich-wieder-da", "Ich bin gleich wieder da."], "en": ["en:i'll-be-right-back:chunk:main", "I'll be right back"]},
  {"en": ["en:on-the-other-hand:chunk:main", "on the other hand"], "ru": ["ru-ch-s-odnoy-storony", "С одн+ой стороны́ …, с друг+ой стороны́ …"]},
  {"en": ["en:could-you-repeat-that:chunk:main", "could you repeat that"], "ru": ["ru-ch-povtorite", "Повтор+ите, пож+алуйста."]},
  {"en": ["en:i-will-call-you-back:chunk:main", "I will call you back"], "ru": ["ru-ch-perezvonyu", "Я вам перезвон+ю."]},
  {"de": ["r-stellen-stelle", "die Stelle"], "ru": ["ru-w-mesto", "м+есто"]},
  {"de": ["r-sprechen-gespraech", "das Gespräch"], "ru": ["ru-w-sobesedovanie", "собес+едование"], "note": {"ru": "Оба слова образованы от корня «говорить/беседовать» с приставкой ge- / со- («совместный разговор»); в нем. также das Vorstellungsgespräch.", "en": "Both words are built from “speak/converse” with the collective prefix ge- / со- (“joint conversation”); German also uses das Vorstellungsgespräch.", "de": "Beide Wörter sind mit dem Kollektivpräfix ge- / со- („gemeinsames Gespräch“) gebildet; spezifisch für Bewerbungen: das Vorstellungsgespräch."}},
  {"de": ["r-kommen-auskunft", "die Auskunft"], "ru": ["ru-w-spravka", "спр+авка"], "note": {"ru": "В значении «справка, информация (в справочной)»: die Auskunft / спра́вка.", "en": "In the sense “information (from an information desk)”: die Auskunft / спра́вка.", "de": "In der Bedeutung „Auskunft, Information (am Schalter)“: die Auskunft / спра́вка."}},
  {"de": ["it-sec-anmelden", "sich anmelden"], "ru": ["ru-r-pis-zapisyvatsya", "зап+исываться"], "note": {"ru": "В значении «записаться (на приём, курс), зарегистрироваться»: sich anmelden / запи́сываться.", "en": "In the sense “to sign up (for a course), to book an appointment, to register”: sich anmelden / запи́сываться.", "de": "In der Bedeutung „sich anmelden (für einen Kurs, Termin)“: sich anmelden / запи́сываться."}},
  {"de": ["r-geben-ausgeben", "ausgeben"], "ru": ["ru-r-vod-vyvodit", "вывод+ить"], "note": {"ru": "В ИТ-значении «выводить данные (на экран, в консоль)»: aus- («наружу») + geben / вы- («наружу») + води́ть.", "en": "In the IT sense “to output data (to the screen, console)”: aus- (“out”) + geben / вы- (“out”) + води́ть.", "de": "In der IT-Bedeutung „Daten ausgeben (Konsole, Bildschirm)“: aus- + geben / вы- + води́ть."}},
  {"de": ["r-legen-anlegen", "anlegen"], "ru": ["ru-r-vod-zavodit", "завод+ить"], "note": {"ru": "В офисном и ИТ-значении «создать, завести (тикет, учётную запись, папку)»: anlegen / заводи́ть.", "en": "In the office and IT sense “to create, to open (a ticket, an account, a folder)”: anlegen / заводи́ть.", "de": "Im Büro- und IT-Sinn „anlegen (Ticket, Konto, Ordner)“: anlegen / заводи́ть."}},
  {"de": ["r-kommen-reinkommen", "reinkommen"], "ru": ["ru-r-hod-vhodit", "вход+ить"]},
  {"de": ["r-stellen-umstellen", "umstellen"], "ru": ["ru-r-hod-perehodit", "переход+ить"], "note": {"ru": "В значении «перейти / перевести на новую систему»: umstellen (auf) / переходи́ть (на).", "en": "In the sense “to switch over to a new system”: umstellen (auf) / переходи́ть (на).", "de": "In der Bedeutung „auf ein neues System umstellen / umsteigen“: umstellen (auf) / переходи́ть (на)."}},
  {"en": ["en:convenient:adj:main", "convenient"], "ru": ["ru-r-hod-podhodyashchiy", "подход+ящий"]},
  {"de": ["ch-opinion-ich-bin-der-meinung", "Ich bin der Meinung, dass [X]."], "ru": ["ru-ch-mne-kazhetsya", "Мне к+ажется, что …"]},
  {"en": ["en:i-agree-up-to-a-point:chunk:main", "I agree up to a point"], "ru": ["ru-ch-ne-sovsem", "Не совс+ем так."]},
  {"en": ["en:draw-a-conclusion:chunk:main", "draw a conclusion"], "ru": ["ru-r-vod-vyvod", "в+ывод"], "note": {"ru": "Устойчивое сочетание: draw a conclusion / сде́лать вы́воды.", "en": "Collocation: draw a conclusion / сде́лать вы́воды.", "de": "Feste Verbindung: draw a conclusion / сде́лать вы́воды (Schlüsse ziehen)."}},
  {"de": ["exp-idiom-bahnhof", "Ich verstehe nur Bahnhof."], "en": ["en:x3:all-greek", "it’s all Greek to me"], "ru": ["ru-ex-idiom-kitayskaya-gramota", "кит+айская гр+амота"], "note": {"ru": "Непрозрачная идиома полного непонимания с разными «языковыми/географическими» образами: «вокзал» (нем.), «греческий» (англ.), «китайская грамота» (рус.).", "en": "Idioms for complete incomprehension with three cultural images: “train station” (German), “Greek” (English), “Chinese writing” (Russian).", "de": "Redewendungen für völliges Unverständnis mit drei verschiedenen Bildern: „Bahnhof“ (dt.), „Griechisch“ (engl.), „chinesische Schrift“ (russ.)."}},
  {"de": ["exp-idiom-zwei-fliegen", "Zwei Fliegen mit einer Klappe schlagen"], "en": ["en:x3:kill-two-birds", "kill two birds with one stone"], "ru": ["ru-ex-idiom-ubits-dvuh-zaytsev", "уб+ить двух з+айцев"], "note": {"ru": "Общая структура «одним действием решить две задачи» с разными животными: две мухи (нем.), две птицы (англ.), два зайца (рус.).", "en": "Shared “two goals with one action” pattern using three animals: two flies (German), two birds (English), two hares (Russian).", "de": "Gemeinsame Struktur „zwei Ziele mit einem Schlag“ mit verschiedenen Tieren: zwei Fliegen (dt.), zwei Vögel (engl.), zwei Hasen (russ.)."}},
  {"de": ["exp-idiom-daumen-druecken", "Jemandem die Daumen drücken."], "en": ["en:x3:fingers-crossed", "keep your fingers crossed"], "ru": ["ru-ex-idiom-derzhat-kulaki", "держ+ать кулак+и"], "note": {"ru": "Жесты пожелания удачи: сжимать большие пальцы (нем.), скрестить пальцы (англ.), держать кулаки (рус.).", "en": "Luck gestures across languages: press thumbs (German), cross fingers (English), clench fists (Russian).", "de": "Glücksgesten im Vergleich: Daumen drücken (dt.), Finger kreuzen (engl.), Fäuste halten (russ.)."}},
  {"de": ["exp-idiom-hund-begraben", "Da liegt der Hund begraben."], "ru": ["ru-ex-idiom-sobaka-zaryta", "вот где соб+ака зар+ыта"], "note": {"ru": "Точное совпадение образа в немецком и русском: «вот где собака зарыта».", "en": "Exact match in German and Russian: “that’s where the dog is buried”.", "de": "Genaue Entsprechung im Deutschen und Russischen: „da liegt der Hund begraben“."}},
  {"de": ["exp-idiom-senf-dazugeben", "Seinen Senf dazugeben"], "en": ["en:x3:put-two-cents", "put your two cents in"], "ru": ["ru-ex-idiom-pyat-kopeek", "вст+авить сво+и пять коп+еек"], "note": {"ru": "Непрошеный комментарий: «добавить горчицы» (нем.), «вложить два цента / пять копеек» (англ. / рус.).", "en": "Unsolicited comment: “add mustard” (German), “two cents / five kopecks” (English / Russian).", "de": "Ungebetener Kommentar: „Senf dazugeben“ (dt.), „zwei Cent / fünf Kopeken einwerfen“ (engl. / russ.)."}},
  {"de": ["exp-idiom-wald-baeume", "Den Wald vor lauter Bäumen nicht sehen"], "en": ["en:x3:wood-for-trees", "not see the wood for the trees"], "ru": ["ru-ex-idiom-za-derevyami-les", "за дер+евьями не в+идеть л+еса"]},
  {"de": ["exp-idiom-brei", "Um den heißen Brei herumreden"], "en": ["en:x3:beat-around-bush", "beat around the bush"]},
  {"de": ["exp-idiom-wolke-sieben", "Auf Wolke sieben schweben"], "en": ["en:x3:on-cloud-nine", "on cloud nine"], "ru": ["ru-ex-idiom-sedmoe-nebo", "на седьм+ом н+ебе"], "note": {"ru": "Счастливое состояние: облако/небо 7 (нем., рус.) против облака 9 (англ.).", "en": "Blissful state: cloud/heaven seven (German, Russian) vs cloud nine (English).", "de": "Glücksgefühl: Wolke/Himmel sieben (dt., russ.) gegenüber cloud nine (engl.)."}},
  {"de": ["exp-idiom-fettnaepfchen", "Ins Fettnäpfchen treten"], "ru": ["ru-ex-idiom-popast-vprosak", "поп+асть впрос+ак"]},
  {"de": ["exp-idiom-kaltes-wasser", "Ins kalte Wasser springen."], "en": ["en:x3:jump-deep-end", "jump in at the deep end"]},
  {"de": ["exp-idiom-teppich", "Etwas unter den Teppich kehren"], "en": ["en:x3:sweep-under-carpet", "sweep something under the carpet"]},
  {"de": ["exp-idiom-haende-voll", "Alle Hände voll zu tun haben"], "en": ["en:x3:have-hands-full", "have your hands full"]},
  {"de": ["exp-day-schade", "Schade!"], "en": ["en:x3:what-a-pity", "What a pity!"], "ru": ["ru-ex-ev-kak-zhal", "Как жаль!"]},
  {"de": ["exp-day-warum-nicht", "Warum nicht?"], "en": ["en:x3:why-not", "Why not?"], "ru": ["ru-ex-ev-pochemu-by-i-net", "Почем+у бы и нет?"]},
  {"de": ["exp-day-viel-spass", "Viel Spaß!"], "en": ["en:x3:have-fun", "Have fun!"], "ru": ["ru-ex-ev-priyatno-provesti", "При+ятно провест+и вр+емя!"]},
  {"de": ["exp-day-soweit-alles-gut", "Soweit alles gut."], "en": ["en:x3:so-far-so-good", "So far, so good."], "ru": ["ru-ex-ev-poka-vsyo-horosho", "Пок+а всё хорош+о."]},
  {"de": ["exp-day-kommt-nicht-infrage", "Das kommt gar nicht infrage!"], "en": ["en:x3:out-of-question", "That’s out of the question!"], "ru": ["ru-ex-ev-ni-za-chto", "Ни за что!"]},
  {"de": ["exp-day-keinen-kopf", "Mach dir keinen Kopf!"], "en": ["en:x3:dont-sweat-it", "Don’t sweat it."], "ru": ["ru-ex-ev-ne-perezhivay", "Не пережив+ай!"]},
  {"de": ["ch2-phone-ich-rufe-wegen-an", "Ich rufe wegen [Gen./Dat.] an."], "en": ["en:x3:calling-about", "I’m calling about [X]."], "ru": ["ru-ch2-zvonyu-po-povodu", "Я звон+ю по п+оводу [X]."]},
  {"de": ["ch2-email-im-anhang-sende-ich", "Im Anhang sende ich Ihnen [X]."], "en": ["en:x3:attached-find", "Attached you’ll find [X]."], "ru": ["ru-ch-vo-vlozhenii", "Во влож+ении — [X]."]},
  {"de": ["b1-m2-kuehlschrank", "der Kühlschrank"], "en": ["en:m3:fridge", "fridge"], "ru": ["ru-w3-holodilnik", "холод+ильник"]},
  {"de": ["b1-m2-waschmaschine", "die Waschmaschine"], "en": ["en:m3:washing-machine", "washing machine"], "ru": ["ru-w3-stiralnaya", "стир+альная маш+ина"]},
  {"de": ["b1-m2-kopfschmerzen", "die Kopfschmerzen"], "en": ["en:m3:headache", "headache"], "ru": ["ru-w3-golovnaya-bol", "головн+ая боль"]},
  {"de": ["b2-m2-verschwoerungstheorie", "die Verschwörungstheorie"], "en": ["en:m3:conspiracy-theory", "conspiracy theory"]},
  {"de": ["b2-m2-zensur", "die Zensur"], "en": ["en:m3:censorship", "censorship"], "ru": ["ru-w-cenzura", "ценз+ура"]},
  {"de": ["b2-m2-umschulung", "die Umschulung"], "en": ["en:m3:retraining", "retraining"], "ru": ["ru-pro2-perekvalifikatsiya", "переквалифик+ация"]},
  {"de": ["b2-m2-genesung", "die Genesung"], "ru": ["ru-w3-vyzdorovlenie", "выздоровл+ение"]},
  {"de": ["pro-m2-quellcode", "der Quellcode"], "ru": ["ru-pro2-iskhodny-kod", "исх+одный код"]},
  {"de": ["pro-m2-lastverteilung", "die Lastverteilung"], "en": ["en:it2:load-balancing", "load balancing"], "ru": ["ru-pro2-balansirovka", "балансир+овка нагр+узки"]},
  {"de": ["pro-m2-festplattenspeicher", "der Festplattenspeicher"], "en": ["en:it2:disk-space", "disk space"], "ru": ["ru-pro2-diskovoe", "д+исковое простр+анство"]},
  {"de": ["pro-m2-sicherheitsrichtlinie", "die Sicherheitsrichtlinie"], "en": ["en:it2:security-policy", "security policy"], "ru": ["ru-pro2-politika-bezopasnosti", "пол+итика безоп+асности"]},
  {"de": ["pro-m2-gehaltsspanne", "die Gehaltsspanne"], "en": ["en:it2:salary-range", "salary range"], "ru": ["ru-pro2-vilka-zarplaty", "в+илка зарпл+аты"]},
  {"de": ["exp-idiom-fuenfte-rad", "Das fünfte Rad am Wagen sein"], "en": ["en:x4:fifth-wheel", "fifth wheel"]},
  {"de": ["exp-idiom-katze-im-sack", "Die Katze im Sack kaufen"], "en": ["en:x4:pig-in-poke", "buy a pig in a poke"], "ru": ["ru-ex-idiom-kot-v-meshke", "куп+ить кот+а в мешк+е"], "note": {"ru": "Немецкий и русский используют «кота в мешке», а английский — «поросёнка в мешке» (poke).", "en": "German and Russian buy a “cat in a sack”, while English buys a “pig in a poke”.", "de": "Deutsch und Russisch kaufen eine „Katze im Sack“, Englisch ein „Ferkel im Sack“ (poke)."}},
  {"de": ["exp-idiom-kind-beim-namen", "Das Kind beim Namen nennen"], "en": ["en:x4:call-spade", "call a spade a spade"], "ru": ["ru-ex-idiom-svoimi-imenami", "назыв+ать в+ещи сво+ими имен+ами"]},
  {"de": ["exp-idiom-kopf-ueber-wasser", "Den Kopf über Wasser halten"], "en": ["en:x4:keep-head-above", "keep your head above water"]},
  {"de": ["exp-idiom-eigenen-fuessen", "Auf eigenen Füßen stehen"], "en": ["en:x4:stand-own-feet", "stand on your own two feet"]},
  {"de": ["exp-idiom-mit-feuer-spielen", "Mit dem Feuer spielen"], "en": ["en:x4:play-with-fire", "play with fire"], "ru": ["ru-ex-idiom-igrat-s-ognyom", "игр+ать с огнём"]},
  {"de": ["exp-idiom-rad-neu-erfinden", "Das Rad neu erfinden"], "en": ["en:x4:reinvent-wheel", "reinvent the wheel"], "ru": ["ru-ex-idiom-izobretat-velosiped", "изобрет+ать велосип+ед"], "note": {"ru": "Рус. «изобретать велосипед», нем. и англ. «изобретать колесо».", "en": "Russian “reinvent the bicycle” vs German and English “reinvent the wheel”.", "de": "Russ. „das Fahrrad neu erfinden“ gegenüber dt. und engl. „das Rad neu erfinden“."}},
  {"de": ["exp-idiom-zwischen-zeilen", "Zwischen den Zeilen lesen"], "en": ["en:x4:read-between-lines", "read between the lines"], "ru": ["ru-ex-idiom-chitat-mezhdu-strok", "чит+ать м+ежду строк"]},
  {"de": ["exp-idiom-oel-ins-feuer", "Öl ins Feuer gießen"], "en": ["en:x4:add-fuel-fire", "add fuel to the fire"], "ru": ["ru-ex-idiom-podlivat-masla", "подлив+ать м+асла в ог+онь"]},
  {"de": ["exp-idiom-kuehlen-kopf", "Einen kühlen Kopf bewahren"], "en": ["en:x4:cool-head", "keep a cool head"]},
  {"de": ["exp-day-wie-dem-auch-sei", "Wie dem auch sei."], "en": ["en:x4:be-that-as-it-may", "Be that as it may."], "ru": ["ru-ex-ev-kak-by-to-ni-bylo", "Как бы то ни б+ыло."]},
  {"de": ["exp-day-versteht-sich", "Das versteht sich von selbst."], "en": ["en:x4:goes-without-saying", "That goes without saying."], "ru": ["ru-ex-ev-samo-soboy", "+Это сам+о соб+ой разум+еется."]},
  {"de": ["exp-day-nichts-fuer-ungut", "Nichts für ungut."], "en": ["en:x4:no-offence", "No offence."], "ru": ["ru-ex-ev-bez-obid", "Без об+ид."]},
  {"de": ["exp-day-stein-vom-herzen", "Mir fällt ein Stein vom Herzen."], "en": ["en:x4:weight-off-mind", "That’s a weight off my mind."], "ru": ["ru-ex-ev-kamen-s-dushi", "К+амень с душ+и уп+ал!"]},
  {"de": ["ch3-opinion-fest-ueberzeugt", "Ich bin fest davon überzeugt, dass [X]."], "en": ["en:x4:firmly-convinced", "I’m firmly convinced that [X]."], "ru": ["ru-ch3-ubezhdyon-chto", "Я твёрдо убеждён (убежден+а), что …"]},
  {"de": ["ch3-agree-muss-widersprechen", "Da muss ich dir / Ihnen leider widersprechen."], "en": ["en:x4:afraid-disagree", "I’m afraid I have to disagree there."], "ru": ["ru-ch3-vynuzhden-ne-soglasitsya", "Вынужден(а) не соглас+иться."]},
  {"de": ["ch3-problem-ursache-eingrenzen", "Wir konnten die Ursache inzwischen eingrenzen."], "en": ["en:x4:narrowed-down", "We’ve narrowed down the root cause to [X]."], "ru": ["ru-ch3-lokalizovat-prichinu", "Нам удал+ось локализ+овать прич+ину."]},
  {"de": ["ch3-it_bug-nach-rollback", "Nach dem Rollback lief wieder alles stabil."], "en": ["en:x4:rollback-restored", "Rolling back restored stability."], "ru": ["ru-ch3-posle-otkata", "П+осле отк+ата всё сн+ова зараб+отало."]},
  {"de": ["pro-m3-eskalation", "die Eskalation"], "en": ["en:it3:escalation", "escalation"], "ru": ["ru-pro3-eskalatsiya", "эскал+ация"]},
  {"de": ["pro-m3-machbarkeit", "die Machbarkeit"], "en": ["en:it3:feasibility", "feasibility"], "ru": ["ru-pro3-osushestvimost", "осуществ+имость"]},
  {"de": ["pro-m3-codebasis", "die Codebasis"], "en": ["en:it3:codebase", "codebase"], "ru": ["ru-pro3-kodovaya-baza", "к+одовая б+аза"]},
  {"de": ["pro-m3-abwaertskompatibilitaet", "die Abwärtskompatibilität"], "en": ["en:it3:backward-compatibility", "backward compatibility"], "ru": ["ru-pro3-obratnaya-sovmestimost", "обр+атная совмест+имость"]},
  {"de": ["pro-m3-ausfallsicherheit", "die Ausfallsicherheit"], "ru": ["ru-pro3-otkazoustoychivost", "отказоуст+ойчивость"]},
  {"de": ["pro-m3-skalierbarkeit", "die Skalierbarkeit"], "en": ["en:it3:scalability", "scalability"], "ru": ["ru-pro3-masshtabiruemost", "масштаб+ируемость"]},
  {"de": ["pro-m3-angriffsflaeche", "die Angriffsfläche"], "ru": ["ru-pro3-poverhnost-ataki", "пов+ерхность ат+аки"]},
  {"de": ["pro-m3-vertraulichkeit", "die Vertraulichkeit"], "en": ["en:it3:confidentiality", "confidentiality"], "ru": ["ru-pro3-konfidentsialnost", "конфиденци+альность"]},
  {"de": ["pro-new-typografie", "die Typografie"], "en": ["en:pro3:typography", "typography"], "ru": ["ru-pro4-tipografika", "типогр+афика"]},
  {"de": ["pro-new-farbpalette", "die Farbpalette"], "en": ["en:pro3:colour-palette", "colour palette"], "ru": ["ru-pro4-palitra", "пал+итра"]},
  {"de": ["pro-new-raster", "das Raster"], "en": ["en:pro3:grid-system", "grid system"], "ru": ["ru-pro4-setka", "с+етка"]},
  {"de": ["pro-new-prototyp", "der Prototyp"], "en": ["en:pro3:prototype", "prototype"], "ru": ["ru-pro4-prototip", "протот+ип"]},
  {"de": ["pro-new-lesbarkeit", "die Lesbarkeit"], "en": ["en:pro3:readability", "readability"], "ru": ["ru-pro4-chitaemost", "чит+аемость"]},
  {"de": ["pro-new-kennzahl", "die Kennzahl"], "en": ["en:pro3:metric", "metric"], "ru": ["ru-pro4-metrika", "м+етрика"]},
  {"de": ["pro-new-voreingenommenheit", "die Voreingenommenheit"], "en": ["en:pro3:algorithmic-bias", "algorithmic bias"], "ru": ["ru-pro4-predvzyatost", "предвз+ятость"]},
  {"de": ["pro-new-halluzination", "die Halluzination"], "en": ["en:pro3:hallucination", "hallucination"], "ru": ["ru-pro4-gallyutsinatsiya", "галлюцин+ация"]},
  {"de": ["pro-new-schwellenwert", "der Schwellenwert"], "en": ["en:pro3:threshold", "threshold"], "ru": ["ru-pro4-porog", "пор+ог"]},
  {"de": ["pro-new-trainieren", "trainieren"], "en": ["en:pro3:train", "train"], "ru": ["ru-pro4-obuchat", "обуч+ать"]},
  {"de": ["pro-new-produktvision", "die Produktvision"], "en": ["en:pro3:product-vision", "product vision"], "ru": ["ru-pro4-videnie", "в+идение"]},
  {"de": ["pro-new-zielgruppe", "die Zielgruppe"], "en": ["en:pro3:target-audience", "target audience"], "ru": ["ru-pro4-auditoriya", "аудит+ория"]},
  {"de": ["pro-new-nutzerbeduerfnis", "das Nutzerbedürfnis"], "en": ["en:pro3:user-need", "user need"], "ru": ["ru-pro4-potrebnost", "потр+ебность"]},
  {"de": ["pro-new-abwanderungsrate", "die Abwanderungsrate"], "en": ["en:pro3:churn-rate", "churn rate"], "ru": ["ru-pro4-ottok", "отт+ок"]},
  {"de": ["pro-new-wettbewerbsvorteil", "der Wettbewerbsvorteil"], "en": ["en:pro3:competitive-edge", "competitive edge"], "ru": ["ru-pro4-preimushchestvo", "преим+ущество"]},
  {"de": ["pro-new-kostenvoranschlag", "der Kostenvoranschlag"], "en": ["en:pro3:cost-estimate", "cost estimate"], "ru": ["ru-pro4-smeta", "см+ета"]},
  {"de": ["pro-new-korrekturschleife", "die Korrekturschleife"], "en": ["en:pro3:revision-round", "revision round"], "ru": ["ru-pro4-pravka", "пр+авка"]},
  {"de": ["pro-new-vorauszahlung", "die Vorauszahlung"], "en": ["en:pro3:down-payment", "down payment"], "ru": ["ru-pro4-predoplata", "предопл+ата"]},
  {"de": ["pro-new-stundensatz", "der Stundensatz"], "en": ["en:pro3:hourly-rate", "hourly rate"], "ru": ["ru-pro4-stavka", "ст+авка"]},
  {"de": ["pro-new-verbindlich", "verbindlich"], "en": ["en:pro3:binding", "binding"], "ru": ["ru-pro4-obyazatelny", "обяз+ательный"]},
  {"de": ["pro-new-einwand", "der Einwand"], "en": ["en:pro3:objection", "objection"], "ru": ["ru-pro4-vozrazhenie", "возраж+ение"]},
  {"de": ["pro-new-lampenfieber", "das Lampenfieber"], "en": ["en:pro3:stage-fright", "stage fright"], "ru": ["ru-pro4-volnenie", "волн+ение"]},
  {"de": ["pro-new-veranschaulichen", "veranschaulichen"], "en": ["en:pro3:illustrate", "illustrate"], "ru": ["ru-pro4-illyustrirovat", "иллюстр+ировать"]},
  {"de": ["pro-new-zusammenfassen", "zusammenfassen"], "en": ["en:pro3:summarise", "summarise"], "ru": ["ru-pro4-podytozhit", "подыт+ожить"]},
  {"de": ["pro-new-praegnant", "prägnant"], "en": ["en:pro3:concise", "concise"], "ru": ["ru-pro4-yomky", "ёмкий"]},
  {"de": ["it-dev-code-review", "das Code-Review"], "en": ["en:code-review:n:main", "code review"], "ru": ["ru-w2-kod-revyu", "код-ревь+ю"]},
  {"de": ["it-dev-testumgebung", "die Testumgebung"], "en": ["en:staging:n:main", "staging"], "ru": ["ru-w2-stend", "стенд"], "note": {"ru": "Предрелизная среда: в нем. описательно die Testumgebung («тестовая среда»), в англ. staging, в рус. IT-жаргоне стенд.", "en": "Pre-release environment: descriptive Testumgebung in German, staging in English, and стенд (lit. “test rig”) in Russian.", "de": "Vorab-Testumgebung: beschreibend Testumgebung im Deutschen, staging im Englischen und стенд im Russischen."}},
  {"de": ["it-infra-bandbreite", "die Bandbreite"], "en": ["en:bandwidth:n:main", "bandwidth"], "ru": ["ru-w2-propusknaya", "пропускн+ая сп+особность"]},
  {"de": ["pro-m3-abfindung", "die Abfindung"], "en": ["en:it3:severance-pay", "severance pay"], "ru": ["ru-w2-vyhodnoe-posobie", "выходн+ое пос+обие"]},
  {"de": ["b1-m2-heizkoerper", "der Heizkörper"], "en": ["en:m3:radiator", "radiator"], "ru": ["ru-w3-batareya", "батар+ея"], "note": {"ru": "Батарея отопления: в нем. функционально der Heizkörper («нагревательное тело»), в англ. radiator, в рус. батаре́я.", "en": "Heating radiator: functional der Heizkörper (“heating body”) in German, radiator in English, батаре́я in Russian.", "de": "Heizkörper: funktional der Heizkörper im Deutschen, engl. radiator, russ. батаре́я."}},
  {"de": ["b1-m2-vorspeise", "die Vorspeise"], "en": ["en:m3:starter", "starter"], "ru": ["ru-w3-zakuska", "зак+уска"]},
  {"de": ["pro-new-algorithmus", "der Algorithmus"], "en": ["en:m3:algorithm", "algorithm"], "ru": ["ru-w3-algoritm", "алгор+итм"]},
  {"de": ["b2-m2-gleichberechtigung", "die Gleichberechtigung"], "en": ["en:more:equality", "equality"], "ru": ["ru-w3-ravenstvo", "р+авенство"]},
  {"de": ["pro-m2-freigabe", "die Freigabe"], "en": ["en:it2:sign-off", "sign-off"], "ru": ["ru-pro2-soglasovanie", "согласов+ание"]},
  {"de": ["it-infra-ausfallzeit", "die Ausfallzeit"], "en": ["en:it2:downtime", "downtime"], "ru": ["ru-pro2-prostoy", "прост+ой"]},
  {"de": ["pro-m2-schadprogramm", "das Schadprogramm"], "en": ["en:it2:malware", "malware"], "ru": ["ru-pro2-vredonosnaya", "вредон+осная прогр+амма"]},
  {"de": ["pro-m2-zugriffskontrolle", "die Zugriffskontrolle"], "en": ["en:access-control:n:main", "access control"], "ru": ["ru-pro2-kontrol-dostupa", "контр+оль д+оступа"]},
  {"de": ["pro-m2-schichtdienst", "der Schichtdienst"], "en": ["en:it2:shift-work", "shift work"], "ru": ["ru-pro2-smennaya-rabota", "см+енная раб+ота"]},
  {"de": ["pro-m3-automatisierung", "die Automatisierung"], "en": ["en:it3:automation", "automation"], "ru": ["ru-pro3-avtomatizatsiya", "автоматиз+ация"]},
  {"de": ["pro-m3-wartungsfenster", "das Wartungsfenster"], "en": ["en:it3:maintenance-window", "maintenance window"], "ru": ["ru-pro3-okno-obsluzhivaniya", "окн+о обсл+уживания"], "note": {"ru": "Все три языка используют метафору «окна»: Wartungsfenster / maintenance window / окно обслуживания.", "en": "All three languages share the “window” metaphor: Wartungsfenster, maintenance window, окно обслуживания.", "de": "Alle drei Sprachen nutzen dieselbe „Fenster“-Metapher: Wartungsfenster, maintenance window, окно обслуживания."}},
  {"de": ["pro-m3-penetrationstest", "der Penetrationstest"], "en": ["en:it3:penetration-test", "penetration test"], "ru": ["ru-pro3-pentest", "пент+ест"]},
  {"de": ["pro-m3-stellenbeschreibung", "die Stellenbeschreibung"], "en": ["en:it3:job-description", "job description"], "ru": ["ru-pro3-dolzhnostnaya", "должностн+ая инстр+укция"]},
  {"de": ["pro-m3-eigenverantwortung", "die Eigenverantwortung"], "en": ["en:it3:autonomy", "autonomy"], "ru": ["ru-pro3-samostoyatelnost", "самосто+ятельность"]},
  {"de": ["pro-new-weissraum", "der Weißraum"], "en": ["en:pro3:whitespace", "whitespace"], "ru": ["ru-pro4-otstup", "+отступ"], "note": {"ru": "Пустое пространство в вёрстке: нем. Weißraum, англ. whitespace (букв. «белое пространство»), в рус. обычно говорят отступ или «воздух».", "en": "Negative space in layout: German Weißraum and English whitespace are literal calques; Russian uses отступ (“spacing”) or «воздух» (“breathing room”).", "de": "Leerraum im Layout: dt. Weißraum und engl. whitespace entsprechen einander direkt; russ. отступ („Abstand“)."}},
  {"de": ["pro-new-vorhersage", "die Vorhersage"], "en": ["en:it3:forecast", "forecast"], "ru": ["ru-pro4-prognoz", "прогн+оз"]},
  {"de": ["pro-new-auftraggeber", "der Auftraggeber"], "en": ["en:it2:client", "client"], "ru": ["ru-pro4-zakazchik", "зак+азчик"]},
  {"de": ["pro-new-ausschreibung", "die Ausschreibung"], "en": ["en:it3:tender", "tender"], "ru": ["ru-pro4-tender", "т+ендер"]},
  {"de": ["pro-new-ueberarbeiten", "überarbeiten"], "en": ["en:pro3:refine", "refine"], "ru": ["ru-pro4-dorabatyvat", "дораб+атывать"]},
  {"de": ["b1-authorities-gebuehr", "die Gebühr"], "en": ["en:more:fee", "fee"], "ru": ["ru-w3-poshlina", "п+ошлина"]},
  {"de": ["b1-travel-bahnsteig", "der Bahnsteig"], "en": ["en:platform:n:train", "platform"], "ru": ["ru-w-platforma", "платф+орма"]},
  {"de": ["b1-travel-verspaetung", "die Verspätung"], "en": ["en:delay:n:main", "delay"], "ru": ["ru-w-b2e-zaderzhka", "зад+ержка"]},
  {"de": ["b1-travel-gepaeck", "das Gepäck"], "en": ["en:luggage:n:main", "luggage"], "ru": ["ru-w-bagazh", "баг+аж"]},
  {"de": ["b1-travel-unterkunft", "die Unterkunft"], "en": ["en:accommodation:n:main", "accommodation"], "ru": ["ru-r-zhiv-zhilyo", "жильё"]},
  {"de": ["b1-work-mitarbeiter", "der Mitarbeiter"], "en": ["en:employee:n:main", "employee"], "ru": ["ru-w-sotrudnik", "сотр+удник"]},
  {"de": ["b1-society-wahl", "die Wahl"], "en": ["en:more:election", "election"], "ru": ["ru-w-vybory", "в+ыборы"], "note": {"ru": "Выборы: в нем. обычно ед. ч. (die Wahl), в рус. вы́боры — только мн. ч.", "en": "Note number: German normally uses singular die Wahl (or die Wahlen); Russian вы́боры is plural-only.", "de": "Numerus beachten: dt. meist Singular die Wahl, russ. вы́боры nur im Plural."}},
  {"de": ["b2-wiss-abhaengigkeit", "die Abhängigkeit"], "en": ["en:dependence:n:main", "dependence"], "ru": ["ru-w2-zavisimost", "зав+исимость"], "note": {"ru": "Общая образность во всех трёх языках: hängen («висеть») → Abhängigkeit, dependēre → dependence, висеть → зависимость.", "en": "All three build “dependence” from “hanging”: ab-hängen → Abhängigkeit, Lat. de-pendēre → dependence, за-висеть → зависимость.", "de": "Alle drei bilden „Abhängigkeit“ aus „hängen“: ab-hängen, lat. de-pendēre, russ. за-висеть → зависимость."}},
  {"de": ["b2-recht-aufenthaltstitel", "der Aufenthaltstitel"], "en": ["en:more:residence-permit", "residence permit"], "ru": ["ru-w3-vnzh", "вид на ж+ительство"]},
  {"de": ["r-setzen-gesetz", "das Gesetz"], "en": ["en:more2:law", "law"], "ru": ["ru-w-zakon", "зак+он"], "note": {"ru": "Закон как «установленный порядок»: нем. setzen → Gesetz, др.-сканд. *lagu → law («положенное»), кон («предел») → закон.", "en": "All three link “law” to “that which is laid down”: setzen → Gesetz, Old Norse *lagu → law, кон (“rule/limit”) → закон.", "de": "Alle drei verbinden „Gesetz“ mit „Festgelegtem“: setzen → Gesetz, altnord. *lagu → law, кон („Grenze/Ordnung“) → закон."}},
  {"de": ["pro-new-barrierefreiheit", "die Barrierefreiheit"], "en": ["en:pro3:accessibility", "accessibility"], "note": {"ru": "Цифровая и физическая доступность: нем. буквально «свобода от барьеров» (Barrierefreiheit), англ. accessibility (a11y).", "en": "German frames it literally as “barrier-freedom” (Barrierefreiheit); English uses accessibility (often a11y).", "de": "Dt. betont wörtlich die Abwesenheit von Barrieren (Barrierefreiheit); engl. accessibility (oft a11y)."}},
  {"de": ["b1-m2-schauspieler", "der Schauspieler"], "en": ["en:actor:n:main", "actor"]},
  {"de": ["b1-m2-hilfsbereit", "hilfsbereit"], "en": ["en:helpful:adj:main", "helpful"]},
  {"de": ["b2-wirtschaft-inflation", "die Inflation"], "en": ["en:inflation:n:main", "inflation"]},
  {"de": ["b2-wirtschaft-verbraucher", "der Verbraucher"], "en": ["en:consumer:n:main", "consumer"]},
  {"de": ["pro-m2-testabdeckung", "die Testabdeckung"], "en": ["en:test-coverage:n:main", "test coverage"]},
  {"de": ["b1-m2-mietvertrag", "der Mietvertrag"], "en": ["en:tenancy-agreement:n:main", "tenancy agreement"]},
  {"de": ["b1-m2-sitzplatzreservierung", "die Sitzplatzreservierung"], "en": ["en:seat-reservation:n:main", "seat reservation"]},
  {"de": ["pro-m3-meilenstein", "der Meilenstein"], "en": ["en:milestone:n:main", "milestone"], "note": {"ru": "Калька с римских милевых камней: нем. Meilenstein ↔ англ. milestone.", "en": "Exact parallel from Roman distance stones: German Meile + Stein ↔ English milestone.", "de": "Direkte Parallele von römischen Wegsteinen: dt. Meilenstein ↔ engl. milestone."}},
  {"de": ["b1-m2-grosszuegig", "großzügig"], "en": ["en:more:generous", "generous"]},
  {"de": ["b2-umwelt-klimawandel", "der Klimawandel"], "en": ["en:more:climate-change", "climate change"]},
  {"de": ["b2-umwelt-erneuerbar", "erneuerbar"], "en": ["en:more:renewable", "renewable"]},
  {"de": ["b1-m2-rente", "die Rente"], "en": ["en:m3:pension", "pension"], "note": {"ru": "Осторожно: нем. die Rente — это пенсия по возрасту (не «аренда»); англ. rent в этом значении ложный друг.", "en": "False-friend trap: German die Rente means retirement pension (NOT “rent”!).", "de": "Vorsicht vor Verwechslung: dt. die Rente bedeutet Altersversorgung, nicht engl. rent (Miete)."}},
  {"de": ["b2-m2-erschoepfung", "die Erschöpfung"], "en": ["en:m3:exhaustion", "exhaustion"]},
  {"de": ["b2-psyche-achtsamkeit", "die Achtsamkeit"], "en": ["en:m3:mindfulness", "mindfulness"]},
  {"de": ["b2-m2-schadstoff", "der Schadstoff"], "en": ["en:m3:pollutant", "pollutant"]},
  {"de": ["b2-m2-oekostrom", "der Ökostrom"], "en": ["en:m3:green-energy", "green energy"]},
  {"de": ["b2-m2-mindestlohn", "der Mindestlohn"], "en": ["en:m3:minimum-wage", "minimum wage"]},
  {"de": ["b2-m2-lebenshaltungskosten", "die Lebenshaltungskosten"], "en": ["en:m3:cost-of-living", "cost of living"]},
  {"de": ["b2-m2-gewinn", "der Gewinn"], "en": ["en:m3:profit", "profit"]},
  {"de": ["b2-m2-zuwanderung", "die Zuwanderung"], "en": ["en:m3:immigration", "immigration"]},
  {"de": ["b2-m2-einbuergerung", "die Einbürgerung"], "en": ["en:m3:citizenship", "citizenship"]},
  {"de": ["pro-m2-statusmeldung", "die Statusmeldung"], "en": ["en:it2:status-update", "status update"]},
  {"de": ["pro-m2-versionskontrolle", "die Versionskontrolle"], "en": ["en:it2:version-control", "version control"]},
  {"de": ["pro-m2-fehlerbehebung", "die Fehlerbehebung"], "en": ["en:it2:bug-fix", "bug fix"]},
  {"de": ["pro-m3-laufzeitfehler", "der Laufzeitfehler"], "en": ["en:it2:runtime-error", "runtime error"]},
  {"de": ["pro-m3-speicherleck", "das Speicherleck"], "en": ["en:it2:memory-leak", "memory leak"], "note": {"ru": "Дословная параллель: нем. Speicher (память) + Leck (течь) ↔ англ. memory leak.", "en": "Direct parallel metaphor: German Speicher (“memory”) + Leck (“leak”) ↔ English memory leak.", "de": "Direkte Parallele: dt. Speicher + Leck ↔ engl. memory leak."}},
  {"de": ["pro-m3-betriebszeit", "die Betriebszeit"], "en": ["en:it2:uptime", "uptime"]},
  {"de": ["pro-m3-erpressungstrojaner", "der Erpressungstrojaner"], "en": ["en:it2:ransomware", "ransomware"], "ru": ["ru-pro5-programma-vymogatel", "прогр+амма-вымог+атель"], "note": {"ru": "Все три термина прямо называют вымогательство: нем. Erpressungstrojaner, англ. ransomware (от ransom «выкуп»), рус. программа-вымогатель.", "en": "All three name extortion directly: German Erpressungstrojaner (“extortion Trojan”), English ransomware, Russian программа-вымогатель (“extortionist program”).", "de": "Alle drei betonen die Erpressung: dt. Erpressungstrojaner, engl. ransomware (zu ransom „Lösegeld“), russ. программа-вымогатель."}},
  {"de": ["pro-m3-fluktuation", "die Fluktuation"], "en": ["en:it2:turnover", "turnover"], "note": {"ru": "В HR-контексте нем. die Fluktuation означает текучесть кадров (англ. staff turnover).", "en": "In HR contexts German die Fluktuation specifically means staff turnover.", "de": "Im HR-Kontext entspricht dt. Fluktuation dem engl. staff turnover (Personalwechsel)."}},
  {"de": ["pro-m3-aufwandsschaetzung", "die Aufwandsschätzung"], "en": ["en:it3:effort-estimate", "effort estimate"]},
  {"de": ["pro-m3-entscheidungstraeger", "der Entscheidungsträger"], "en": ["en:it3:decision-maker", "decision-maker"]},
  {"de": ["pro-m3-priorisieren", "priorisieren"], "en": ["en:it3:prioritise", "prioritise"]},
  {"de": ["pro-m3-wartbarkeit", "die Wartbarkeit"], "en": ["en:it3:maintainability", "maintainability"]},
  {"de": ["pro-m3-ausnahmebehandlung", "die Ausnahmebehandlung"], "en": ["en:it3:exception-handling", "exception handling"]},
  {"de": ["pro-m3-datenstruktur", "die Datenstruktur"], "en": ["en:it3:data-structure", "data structure"]},
  {"de": ["b1-people-freundschaft", "die Freundschaft"], "en": ["en:friendship:n:main", "friendship"]},
  {"de": ["b1-home-miete", "die Miete"], "en": ["en:rent:n:main", "rent"]},
  {"de": ["b1-authorities-termin", "der Termin"], "en": ["en:appointment:n:main", "appointment"], "note": {"ru": "Запланированная встреча (у врача, в ведомстве, по работе): нем. der Termin, англ. appointment.", "en": "Scheduled slot (doctor, office, business): German der Termin ↔ English appointment.", "de": "Fest vereinbarter Termin (Arzt, Amt, Geschäft): dt. der Termin ↔ engl. appointment."}},
  {"de": ["b1-work-vorstellungsgespraech", "das Vorstellungsgespräch"], "en": ["en:x2:job-interview", "job interview"]},
  {"de": ["b1-work-kollege", "der Kollege"], "en": ["en:colleague:n:main", "colleague"]},
  {"de": ["b1-work-arbeitslos", "arbeitslos"], "en": ["en:unemployed:adj:main", "unemployed"]},
  {"de": ["b2-arbeitswelt-erreichbarkeit", "die Erreichbarkeit"], "en": ["en:availability:n:main", "availability"]},
  {"de": ["b2-arbeitswelt-arbeitsbelastung", "die Arbeitsbelastung"], "en": ["en:workload:n:main", "workload"]},
  {"de": ["b2-medien-desinformation", "die Desinformation"], "en": ["en:disinformation:n:main", "disinformation"]},
  {"de": ["b2-ges-blutdruck", "der Blutdruck"], "ru": ["ru-w-davlenie", "давл+ение"]},
  {"de": ["b2-reisen-handgepaeck", "das Handgepäck"], "ru": ["ru-w-b2e-ruchnaya-klad", "ручн+ая кладь"]},
  {"de": ["it-dev-datenbank", "die Datenbank"], "ru": ["ru-w2-baza-dannyh", "б+аза д+анных"]},
  {"de": ["it-infra-rechenzentrum", "das Rechenzentrum"], "ru": ["ru-w2-data-tsentr", "д+ата-центр"]},
  {"de": ["pro-m3-berufserfahrung", "die Berufserfahrung"], "ru": ["ru-w2-stazh", "стаж"]},
  {"de": ["b2-wohnen-makler", "der Makler"], "ru": ["ru-w2-rieltor", "ри+елтор"]},
  {"de": ["b2-bez-verlobung", "die Verlobung"], "ru": ["ru-w2-pomolvka", "пом+олвка"]},
  {"de": ["b1-m2-puenktlichkeit", "die Pünktlichkeit"], "ru": ["ru-w3-punktuallnost", "пункту+альность"]},
  {"de": ["b2-m2-wohnflaeche", "die Wohnfläche"], "ru": ["ru-w3-zhilaya-ploshchad", "жил+ая пл+ощадь"]},
  {"de": ["b2-m2-einsamkeit", "die Einsamkeit"], "ru": ["ru-w3-odinochestvo", "один+очество"]},
  {"de": ["b1-m2-vermissen", "vermissen"], "ru": ["ru-w3-skuchat", "скуч+ать"], "note": {"ru": "Управление глаголов различается: нем. jemanden vermissen (+ Akk.), рус. скучать по кому-либо (+ Dat.).", "en": "Verb government differs: German jemanden vermissen (+ acc.), Russian скучать по (+ dat.).", "de": "Rektion beachten: dt. jemanden vermissen (+ Akk.), russ. скучать по + Dat."}},
  {"de": ["pro-m3-abwesenheitsnotiz", "die Abwesenheitsnotiz"], "ru": ["ru-pro3-avtootvetchik", "автоотв+етчик"]},
  {"de": ["pro-new-kontrast", "der Kontrast"], "ru": ["ru-pro4-kontrast", "контр+аст"]},
  {"de": ["pro-new-layout", "das Layout"], "ru": ["ru-pro4-maket", "мак+ет"]},
  {"de": ["pro-new-folie", "die Folie"], "ru": ["ru-pro4-slayd", "слайд"]},
  {"de": ["pro-new-entwerfen", "entwerfen"], "ru": ["ru-pro4-proektirovat", "проект+ировать"]},
  {"de": ["pro-new-generieren", "generieren"], "ru": ["ru-pro4-generirovat", "генер+ировать"]},
  {"de": ["b1-everyday-sofort", "sofort"], "ru": ["ru-w-srazu", "ср+азу"]},
  {"de": ["b1-home-wohnung", "die Wohnung"], "ru": ["ru-w-kvartira", "кварт+ира"]},
  {"de": ["b1-home-vermieter", "der Vermieter"], "ru": ["ru-w-b2e-arendodatel", "арендод+атель"]},
  {"de": ["b1-home-steckdose", "die Steckdose"], "ru": ["ru-w-rozetka", "роз+етка"]},
  {"de": ["b1-food-speisekarte", "die Speisekarte"], "ru": ["ru-w-menyu", "мен+ю"]},
  {"de": ["b1-food-quittung", "die Quittung"], "ru": ["ru-w-kvitanciya", "квит+анция"]},
  {"de": ["b1-travel-flughafen", "der Flughafen"], "ru": ["ru-w-aeroport", "аэроп+орт"]},
  {"de": ["b2-medien-glaubwuerdigkeit", "die Glaubwürdigkeit"], "ru": ["ru-w3-dostovernost", "достов+ерность"]},
  {"de": ["b2-bez-missverstaendnis", "das Missverständnis"], "ru": ["ru-w3-nedorazumenie", "недоразум+ение"]},
  {"en": ["en:m3:pharmacy", "pharmacy"], "ru": ["ru-w-apteka", "апт+ека"]},
  {"en": ["en:responsibility:n:main", "responsibility"], "ru": ["ru-w-obyazannost", "об+язанность"]},
  {"en": ["en:employer:n:main", "employer"], "ru": ["ru-w-rabotodatel", "работод+атель"]},
  {"en": ["en:overtime:n:main", "overtime"], "ru": ["ru-w-pererabotka", "перераб+отка"]},
  {"en": ["en:more:registration", "registration"], "ru": ["ru-w-registraciya", "регистр+ация"]},
  {"en": ["en:more2:tax", "tax"], "ru": ["ru-w-nalog", "нал+ог"]},
  {"en": ["en:more:citizen", "citizen"], "ru": ["ru-w-grazhdanin", "граждан+ин"]},
  {"en": ["en:more:volunteer", "volunteer"], "ru": ["ru-w-volonter", "волонтёр"]},
  {"en": ["en:m3:renew", "renew"], "ru": ["ru-w-prodlevat", "продлев+ать"]},
  {"en": ["en:side-effect:n:main", "side effect"], "ru": ["ru-w-b2e-pobochny", "поб+очный эфф+ект"]},
  {"en": ["en:departure:n:main", "departure"], "ru": ["ru-w-b2e-vylet", "в+ылет"]},
  {"en": ["en:more2:book", "book (to reserve)"], "ru": ["ru-w-b2e-bronirovat", "брон+ировать"], "note": {"ru": "Осторожно: здесь англ. глагол book означает «бронировать» (как нем. buchen), а не «книга».", "en": "Verb sense “to reserve” (like German buchen), not the noun “book”.", "de": "Verb „reservieren“ (wie dt. buchen, nicht „das Buch“)."}},
  {"en": ["en:deadline:n:main", "deadline"], "ru": ["ru-w2-dedlayn", "дедл+айн"]},
  {"en": ["en:agenda:n:main", "agenda"], "ru": ["ru-w2-povestka", "пов+естка дня"]},
  {"en": ["en:virtual-machine:n:main", "virtual machine"], "ru": ["ru-w2-virtualka", "вирту+альная маш+ина"]},
  {"en": ["en:it2:two-factor-auth", "two-factor authentication"], "ru": ["ru-w2-2fa", "двухфакт+орная аутентифик+ация"]},
  {"en": ["en:dizziness:n:main", "dizziness"], "ru": ["ru-w2-golovokruzhenie", "головокруж+ение"]},
  {"en": ["en:m3:visa", "visa"], "ru": ["ru-w2-viza", "в+иза"]},
  {"en": ["en:m3:customs", "customs"], "ru": ["ru-w2-tamozhnya", "там+ожня"]},
  {"en": ["en:m3:waiter", "waiter"], "ru": ["ru-w3-ofitsiant", "офици+ант"]},
  {"en": ["en:m3:boarding-pass", "boarding pass"], "ru": ["ru-w3-posadochny", "пос+адочный тал+он"]},
  {"en": ["en:m3:charity", "charity"], "ru": ["ru-w3-blagotvoritelnost", "благотвор+ительность"]},
  {"en": ["en:m3:petition", "petition"], "ru": ["ru-w3-petitsiya", "пет+иция"]},
  {"en": ["en:m3:freedom-of-speech", "freedom of speech"], "ru": ["ru-w3-svoboda-slova", "своб+ода сл+ова"]},
  {"en": ["en:m3:compromise", "compromise"], "ru": ["ru-w3-kompromiss", "компром+исс"]},
  {"en": ["en:feedback:n:main", "feedback"], "ru": ["ru-pro2-obratnaya-svyaz", "обр+атная связь"]},
  {"en": ["en:it2:blocker", "blocker"], "ru": ["ru-pro2-bloker", "бл+окер"]},
  {"en": ["en:it2:refactoring", "refactoring"], "ru": ["ru-pro2-refaktoring", "рефакт+оринг"]},
  {"en": ["en:it2:patch", "patch"], "ru": ["ru-pro2-patch", "патч"]},
  {"de": ["pro-m4-benutzeroberflaeche", "die Benutzeroberfläche"], "en": ["en:it4:user-interface", "user interface"], "ru": ["ru-pro5-interfeys", "интерф+ейс"]},
  {"de": ["pro-new-datensatz", "der Datensatz"], "en": ["en:pro3:dataset", "dataset"], "ru": ["ru-pro5-dataset", "датас+ет"]},
  {"de": ["pro-m4-ausreisser", "der Ausreißer"], "en": ["en:pro3:outlier", "outlier"], "ru": ["ru-pro4-vybros", "в+ыброс"], "note": {"ru": "Разные образы для аномального значения: нем. der Ausreißer («беглец»), англ. outlier («лежащий снаружи»), рус. вы́брос.", "en": "Different metaphors for a statistical anomaly: German der Ausreißer (“runaway”), English outlier, Russian вы́брос (“something thrown out”).", "de": "Unterschiedliche Bilder für statistische Anomalien: dt. der Ausreißer, engl. outlier, russ. вы́брос („Auswurf“)."}},
  {"de": ["pro-m4-anonymisieren", "anonymisieren"], "en": ["en:it4:anonymise", "anonymise"], "ru": ["ru-pro5-obezlichivat", "обезл+ичивать"], "note": {"ru": "Нем. и англ. используют греч. корень anonym- («без имени»), а рус. обезли́чивать буквально значит «убрать лицо» (без + лицо).", "en": "German and English use Greek anonym- (“nameless”), while Russian обезли́чивать literally means “to remove the face/identity”.", "de": "Dt. und engl. nutzen griech. anonym-, während russ. обезли́чивать wörtlich „entpersönlichen“ (ohne Gesicht) bedeutet."}},
  {"de": ["pro-m4-klassifizieren", "klassifizieren"], "en": ["en:it4:classify", "classify"], "ru": ["ru-pro5-klassifitsirovat", "классифиц+ировать"]},
  {"de": ["pro-m4-kundenbindung", "die Kundenbindung"], "en": ["en:pro3:retention", "retention"], "ru": ["ru-pro4-uderzhanie", "удерж+ание"]},
  {"de": ["pro-m4-konversionsrate", "die Konversionsrate"], "en": ["en:pro3:conversion-rate", "conversion rate"], "ru": ["ru-pro4-konversiya", "конв+ерсия"]},
  {"de": ["pro-m4-retrospektive", "die Retrospektive"], "en": ["en:it4:retrospective", "retrospective"], "ru": ["ru-pro5-retrospektiva", "ретроспект+ива"]},
  {"de": ["pro-m4-geheimhaltungsvereinbarung", "die Geheimhaltungsvereinbarung"], "en": ["en:it4:non-disclosure-agreement", "non-disclosure agreement"], "ru": ["ru-pro5-nda", "соглаш+ение о неразглаш+ении"]},
  {"de": ["pro-m4-nachbesserung", "die Nachbesserung"], "en": ["en:it4:rework", "rework"], "ru": ["ru-pro5-dorabotka", "дораб+отка"]},
  {"de": ["pro-m4-gliederung", "die Gliederung"], "en": ["en:it4:outline", "outline"], "ru": ["ru-pro5-struktura", "структ+ура"]},
  {"de": ["pro-m4-koerpersprache", "die Körpersprache"], "en": ["en:it4:body-language", "body language"], "ru": ["ru-pro5-yazyk-tela", "яз+ык т+ела"], "note": {"ru": "Точная параллель во всех трёх языках: die Körpersprache / body language / язы́к те́ла.", "en": "Exact parallel across all three languages: die Körpersprache, body language, язы́к те́ла.", "de": "Direkte Parallele in allen drei Sprachen: die Körpersprache, body language, язы́к те́ла."}},
  {"de": ["pro-m4-blickkontakt", "der Blickkontakt"], "en": ["en:it4:eye-contact", "eye contact"], "ru": ["ru-pro5-zritelny-kontakt", "зр+ительный конт+акт"]},
  {"de": ["pro-m4-hervorheben", "hervorheben"], "en": ["en:it4:highlight", "highlight"], "ru": ["ru-pro5-podchyorkivat", "подчёркивать"], "note": {"ru": "Три разных физических образа: нем. hervorheben («приподнять вперёд»), англ. highlight («подсветить»), рус. подчёркивать («провести черту снизу»).", "en": "Three distinct physical metaphors: German hervorheben (“lift forward”), English highlight (“shine light on”), Russian подчёркивать (“underline”).", "de": "Drei verschiedene Bilder: dt. hervorheben, engl. highlight („beleuchten“), russ. подчёркивать („unterstreichen“)."}},
  {"de": ["pro-m4-verteiler", "der Verteiler"], "en": ["en:it4:mailing-list", "mailing list"], "ru": ["ru-pro5-rassylka", "расс+ылка"]},
  {"de": ["pro-m4-weiterleiten", "weiterleiten"], "en": ["en:it4:forward", "forward"], "ru": ["ru-pro5-peresylat", "пересыл+ать"]},
  {"de": ["pro-m4-kompilieren", "kompilieren"], "en": ["en:it4:compile", "compile"], "ru": ["ru-pro5-kompilirovat", "компил+ировать"]},
  {"de": ["pro-m4-ueberlastung", "die Überlastung"], "en": ["en:it3:overload", "overload"], "ru": ["ru-pro5-peregruzka", "перегр+узка"], "note": {"ru": "Одинаковая модель «сверх + груз/нагрузка»: über + Last → Überlastung, over + load → overload, пере- + груз → перегру́зка.", "en": "Identical “over + load” word formation: über + Last → Überlastung, over + load → overload, пере- + груз → перегру́зка.", "de": "Gleiches Bildungsmuster „über + Last“: Überlastung, overload, russ. перегру́зка."}},
  {"de": ["pro-m4-datenverlust", "der Datenverlust"], "en": ["en:it4:data-loss", "data loss"], "ru": ["ru-pro5-poterya-dannyh", "пот+еря д+анных"]},
  {"de": ["pro-m3-zwischenspeicher", "der Zwischenspeicher"], "en": ["en:it3:cache", "cache"], "ru": ["ru-pro5-kesh", "кэш"]},
  {"de": ["pro-m3-datenverkehr", "der Datenverkehr"], "en": ["en:it3:network-traffic", "network traffic"], "ru": ["ru-pro5-trafik", "тр+афик"]},
  {"de": ["pro-m4-umleiten", "umleiten"], "en": ["en:it4:reroute", "reroute"], "ru": ["ru-pro5-perenapravlyat", "перенаправл+ять"]},
  {"de": ["it-sec-fehlalarm", "der Fehlalarm"], "en": ["en:it4:false-positive", "false positive"], "ru": ["ru-pro5-lozhnoe-srabatyvanie", "л+ожное сраб+атывание"]},
  {"de": ["pro-m4-rechteausweitung", "die Rechteausweitung"], "en": ["en:privilege-escalation:n:main", "privilege escalation"], "ru": ["ru-pro5-povyshenie-privilegiy", "повыш+ение привил+егий"]},
  {"de": ["pro-m4-gleitzeit", "die Gleitzeit"], "en": ["en:it3:flexitime", "flexitime"], "ru": ["ru-w2-gibkiy-grafik", "г+ибкий гр+афик"], "note": {"ru": "Нем. die Gleitzeit (букв. «скользящее время») соответствует англ. flexitime и рус. ги́бкий гра́фик.", "en": "German die Gleitzeit (lit. “gliding time”) matches English flexitime and Russian ги́бкий гра́фик (“flexible schedule”).", "de": "Dt. die Gleitzeit entspricht engl. flexitime und russ. ги́бкий гра́фик („flexibler Zeitplan“)."}},
  {"de": ["pro-m4-zeiterfassung", "die Zeiterfassung"], "en": ["en:it4:time-tracking", "time tracking"], "ru": ["ru-pro5-uchyot-vremeni", "учёт раб+очего вр+емени"]},
  {"de": ["pro-m4-benutzerfreundlichkeit", "die Benutzerfreundlichkeit"], "en": ["en:usability:n:main", "usability"]},
  {"de": ["pro-m4-zeilenabstand", "der Zeilenabstand"], "en": ["en:it4:line-height", "line height"]},
  {"de": ["pro-m4-nutzerfuehrung", "die Nutzerführung"], "en": ["en:it4:user-flow", "user flow"]},
  {"de": ["pro-m4-datenqualitaet", "die Datenqualität"], "en": ["en:it4:data-quality", "data quality"]},
  {"de": ["pro-m4-datenbereinigung", "die Datenbereinigung"], "en": ["en:it4:data-cleaning", "data cleaning"]},
  {"de": ["pro-m4-anwendungsfall", "der Anwendungsfall"], "en": ["en:it4:use-case", "use case"]},
  {"de": ["pro-m4-fehlerquote", "die Fehlerquote"], "en": ["en:it4:error-rate", "error rate"]},
  {"de": ["pro-m4-nutzerakzeptanz", "die Nutzerakzeptanz"], "en": ["en:it4:user-adoption", "user adoption"]},
  {"de": ["pro-m4-ausrollen", "ausrollen"], "en": ["en:pro3:roll-out", "roll out"]},
  {"de": ["pro-m4-tagessatz", "der Tagessatz"], "en": ["en:pro3:day-rate", "day rate"]},
  {"de": ["pro-m4-pauschale", "die Pauschale"], "en": ["en:it4:flat-fee", "flat fee"]},
  {"de": ["pro-m4-nutzungsrecht", "das Nutzungsrecht"], "en": ["en:it4:usage-rights", "usage rights"]},
  {"de": ["pro-m4-leistungsnachweis", "der Leistungsnachweis"], "en": ["en:it4:timesheet", "timesheet"]},
  {"de": ["pro-m4-ueberleitung", "die Überleitung"], "en": ["en:it4:transition", "transition"]},
  {"de": ["pro-m4-fragerunde", "die Fragerunde"], "en": ["en:it4:qa-session", "Q&A session"]},
  {"de": ["pro-m4-stichpunkt", "der Stichpunkt"], "en": ["en:pro3:bullet-point", "bullet point"]},
  {"de": ["pro-m4-fehlermeldung", "die Fehlermeldung"], "en": ["en:it4:error-message", "error message"]},
  {"de": ["pro-m4-konfigurationsdatei", "die Konfigurationsdatei"], "en": ["en:it4:config-file", "config file"]},
  {"de": ["pro-m4-reproduzieren", "reproduzieren"], "en": ["en:reproduce:v:main", "reproduce"]},
  {"de": ["pro-m4-durchsatz", "der Durchsatz"], "en": ["en:it4:throughput", "throughput"]},
  {"de": ["pro-m4-hochfahren", "hochfahren"], "en": ["en:it4:spin-up", "spin up"]},
  {"de": ["pro-m4-nachhaken", "nachhaken"], "en": ["en:it4:chase-up", "chase up"]},
  {"de": ["pro-m4-gehaltsvorstellung", "die Gehaltsvorstellung"], "en": ["en:it4:salary-expectation", "salary expectation"]},
  {"de": ["pro-m4-stellenausschreibung", "die Stellenausschreibung"], "en": ["en:it4:job-posting", "job posting"]},
  {"de": ["pro-m4-branchenwechsel", "der Branchenwechsel"], "en": ["en:it4:career-switch", "career switch"]},
  {"de": ["pro-m4-tarifvertrag", "der Tarifvertrag"], "en": ["en:it4:collective-agreement", "collective agreement"]},
  {"de": ["pro-m4-fehlkonfiguration", "die Fehlkonfiguration"], "en": ["en:it4:misconfiguration", "misconfiguration"]},
  {"de": ["pro-m4-datenminimierung", "die Datenminimierung"], "en": ["en:it4:data-minimisation", "data minimisation"]},
  {"de": ["it-sec-haerten", "härten"], "en": ["en:it4:hardening", "hardening"]},
  {"de": ["it-sec-lieferkette", "die Lieferkette"], "en": ["en:it4:supply-chain", "supply chain"]},
  {"de": ["b2-arbeitswelt-auslagern", "auslagern"], "en": ["en:it4:outsource", "outsource"]},
  {"de": ["pro-new-schriftart", "die Schriftart"], "ru": ["ru-pro5-shrift", "шрифт"]},
  {"de": ["pro-new-funktionsumfang", "der Funktionsumfang"], "ru": ["ru-pro5-funktsional", "функцион+ал"]},
  {"de": ["pro-new-markteinfuehrung", "die Markteinführung"], "ru": ["ru-pro5-zapusk", "з+апуск"]},
  {"de": ["pro-m4-honorar", "das Honorar"], "ru": ["ru-pro4-gonorar", "гонор+ар"], "note": {"ru": "Оба слова из лат. honorārium, но род разный: нем. das Honorar (ср. р.), рус. гонора́р (м. р.).", "en": "Both borrow Latin honorārium, with different gender: German das Honorar (neuter), Russian гонора́р (masculine).", "de": "Beide aus lat. honorārium, aber verschiedenes Genus: dt. das Honorar (Neutrum), russ. гонора́р (Maskulinum)."}},
  {"de": ["pro-new-einstieg", "der Einstieg"], "ru": ["ru-pro5-vstuplenie", "вступл+ение"]},
  {"de": ["pro-m4-anschaulich", "anschaulich"], "ru": ["ru-pro5-naglyadny", "нагл+ядный"], "note": {"ru": "Одинаковая внутренняя форма «перед глазами»: нем. an-schauen → anschaulich, рус. на-гляд-ный → нагля́дный.", "en": "Same inner form (“right before the eyes”): German an-schauen → anschaulich, Russian на-гляд-ный → нагля́дный.", "de": "Gleiche innere Form („vor Augen“): dt. an-schauen → anschaulich, russ. на-гляд-ный → нагля́дный."}},
  {"de": ["it-sec-blockieren", "blockieren"], "ru": ["ru-pro5-blokirovat", "блок+ировать"]},
  {"de": ["b2-wiss-stichprobe", "die Stichprobe"], "ru": ["ru-pro4-vyborka", "в+ыборка"]},
  {"en": ["en:it4:cluttered", "cluttered"], "ru": ["ru-pro5-peregruzhenny", "перегр+уженный"]},
  {"en": ["en:it4:roadmap", "roadmap"], "ru": ["ru-pro5-dorozhnaya-karta", "дор+ожная к+арта"], "note": {"ru": "Рус. доро́жная ка́рта — точная калька англ. roadmap в значении плана развития продукта.", "en": "Russian доро́жная ка́рта is a direct calque of English roadmap in product planning.", "de": "Russ. доро́жная ка́рта ist eine direkte Lehnübersetzung von engl. roadmap."}},
  {"en": ["en:it4:backlog", "backlog"], "ru": ["ru-pro5-beklog", "бэкл+ог"]},
  {"en": ["en:pro3:briefing", "briefing"], "ru": ["ru-pro5-brif", "бриф"]},
  {"en": ["en:pro3:statement-of-work", "statement of work"], "ru": ["ru-pro5-tz", "техн+ическое зад+ание"]},
  {"en": ["en:it4:non-binding", "non-binding"], "ru": ["ru-pro5-orientirovochny", "ориентир+овочный"]},
  {"en": ["en:it4:scheduling-conflict", "scheduling conflict"], "ru": ["ru-pro5-nakladka", "накл+адка"]},
  {"en": ["en:it4:delegate", "delegate"], "ru": ["ru-pro5-delegirovat", "делег+ировать"]},
  {"en": ["en:build:n:main", "build"], "ru": ["ru-pro5-sborka", "сб+орка"]},
  {"en": ["en:debugging:n:main", "debugging"], "ru": ["ru-pro5-otladka", "отл+адка"]},
  {"en": ["en:rollback:n:main", "rollback"], "ru": ["ru-pro5-otkat", "отк+ат"], "note": {"ru": "Одна и та же физическая метафора: англ. rollback («откатить назад») и рус. отка́т.", "en": "Same physical metaphor in both languages: English rollback and Russian отка́т (“rolling back”).", "de": "Dieselbe physische Metapher in beiden Sprachen: engl. rollback und russ. отка́т („Zurückrollen“)."}},
  {"en": ["en:it3:node", "node"], "ru": ["ru-pro5-uzel", "+узел"]},
  {"en": ["en:it4:redundancy", "redundancy"], "ru": ["ru-pro2-rezervirovanie", "резерв+ирование"]},
  {"en": ["en:it4:cover-letter", "cover letter"], "ru": ["ru-pro5-soprovoditelnoe", "сопровод+ительное письм+о"]}
]);

/* B1/B2 vocabulary expansion (2026-11): new Words cards linked to each other and to existing cards. */
GT.link([
  {"de":["b1-m3-streichholz","das Streichholz"],"ru":["ru-w4-spichka","сп+ичка"]},
  {"de":["b1-m3-fundbuero","das Fundbüro"],"en":["en:m4:lost-property-office","lost property office"],"ru":["ru-w4-byuro-nakhodok","бюр+о нах+одок"]},
  {"de":["b1-m3-geschlecht","das Geschlecht"],"en":["en:m4:gender","gender"],"ru":["ru-w4-pol","пол"]},
  {"de":["b1-m3-ehepaar","das Ehepaar"],"ru":["ru-w4-suprugi","супр+уги"]},
  {"de":["b1-m3-heimat","die Heimat"],"en":["en:m4:homeland","homeland"],"ru":["ru-w4-rodina","р+одина"]},
  {"de":["b1-m3-herkunft","die Herkunft"],"en":["en:m4:background","background"],"ru":["ru-w4-proiskhozhdenie","происхожд+ение"]},
  {"de":["b1-m3-geduld","die Geduld"],"ru":["ru-w4-terpenie","терп+ение"]},
  {"de":["b1-m3-humor","der Humor"],"en":["en:m4:sense-of-humour","sense of humour"],"ru":["ru-w4-chuvstvo-yumora","ч+увство +юмора"]},
  {"de":["b1-m3-klingel","die Klingel"],"en":["en:m4:doorbell","doorbell"],"ru":["ru-w4-zvonok","звон+ок"]},
  {"de":["b1-m3-briefkasten","der Briefkasten"],"en":["en:m4:letterbox","letterbox"],"ru":["ru-w4-pochtovyy-yashchik","почт+овый +ящик"]},
  {"de":["b1-m3-leitung","die Leitung"],"en":["en:m4:pipe","pipe"],"ru":["ru-w4-truba","труб+а"]},
  {"de":["b1-m3-schloss","das Schloss"],"ru":["ru-w4-zamok","зам+ок"],"note":{"ru":"Любопытная параллель: нем. Schloss — и дверной замо́к, и за́мок-дворец; в русском эти значения различает только ударение.","en":"A neat parallel: German Schloss means both “lock” and “castle”; Russian has the same pair, told apart only by stress: замо́к (lock) and за́мок (castle).","de":"Schöne Parallele: Schloss heißt Türschloss und Burg; im Russischen ebenso, nur die Betonung unterscheidet: замо́к (Türschloss) und за́мок (Burg)."}},
  {"de":["b1-m3-muelltonne","die Mülltonne"],"en":["en:m4:wheelie-bin","wheelie bin"],"ru":["ru-w4-musornyy-konteyner","м+усорный конт+ейнер"]},
  {"de":["b1-m3-kanne","die Kanne"],"en":["en:m4:jug","jug"],"ru":["ru-w4-kuvshin","кувш+ин"]},
  {"de":["b1-m3-gewuerz","das Gewürz"],"en":["en:m4:spice","spice"],"ru":["ru-w4-pryanost","пр+яность"]},
  {"de":["b1-m3-scheibe","die Scheibe"],"en":["en:m4:slice","slice"],"ru":["ru-w4-lomtik","л+омтик"]},
  {"de":["b1-m3-imbiss","der Imbiss"],"en":["en:m4:snack-bar","snack bar"],"ru":["ru-w4-zakusochnaya","зак+усочная"]},
  {"de":["b1-m3-braten","der Braten"],"en":["en:m4:roast","roast"],"ru":["ru-w4-zharkoe","жарк+ое"]},
  {"de":["b1-m3-verletzung","die Verletzung"],"en":["en:m4:injury","injury"],"ru":["ru-w2-travma","тр+авма"]},
  {"de":["b1-m3-gymnastik","die Gymnastik"],"ru":["ru-w4-gimnastika","гимн+астика"]},
  {"de":["b1-m3-fluessigkeit","die Flüssigkeit"],"en":["en:m4:fluid","fluid"],"ru":["ru-w4-zhidkost","ж+идкость"]},
  {"de":["b1-m3-werkstatt","die Werkstatt"],"en":["en:m4:workshop","workshop"],"ru":["ru-w4-masterskaya","мастерск+ая"]},
  {"de":["b1-m3-kantine","die Kantine"],"en":["en:m4:canteen","canteen"],"ru":["ru-w4-stolovaya","стол+овая"]},
  {"de":["b1-m3-beschaeftigung","die Beschäftigung"],"en":["en:employment:n:main","employment"],"ru":["ru-w4-zanyatost","з+анятость"]},
  {"de":["b1-m3-handwerker","der Handwerker"],"en":["en:m4:tradesman","tradesman"],"ru":["ru-w4-master","м+астер"]},
  {"de":["b1-m3-lager","das Lager"],"en":["en:m4:warehouse","warehouse"],"ru":["ru-r-lozh-sklad","склад"]},
  {"de":["b1-m3-landwirtschaft","die Landwirtschaft"],"en":["en:m4:agriculture","agriculture"],"ru":["ru-w4-selskoe-khozyaystvo","с+ельское хоз+яйство"]},
  {"de":["b1-m3-urkunde","die Urkunde"],"ru":["ru-w3-svidetelstvo","свид+етельство"]},
  {"de":["b1-m3-botschaft","die Botschaft"],"en":["en:m4:embassy","embassy"],"ru":["ru-w4-posolstvo","пос+ольство"]},
  {"de":["b1-m3-wohnort","der Wohnort"],"en":["en:m4:place-of-residence","place of residence"],"ru":["ru-w4-mesto-zhitelstva","м+есто ж+ительства"]},
  {"de":["b1-m3-konsulat","das Konsulat"],"en":["en:m4:consulate","consulate"],"ru":["ru-w4-konsulstvo","к+онсульство"]},
  {"de":["b1-m3-zoll","der Zoll"],"en":["en:m3:customs","customs"],"ru":["ru-w2-tamozhnya","там+ожня"]},
  {"de":["b1-m3-visum","das Visum"],"en":["en:m3:visa","visa"],"ru":["ru-w2-viza","в+иза"]},
  {"de":["b1-m3-ausfahrt","die Ausfahrt"],"ru":["ru-w4-sezd","съезд"]},
  {"de":["b1-m3-faehre","die Fähre"],"en":["en:m4:ferry","ferry"],"ru":["ru-w4-parom","пар+ом"]},
  {"de":["b1-m3-kreuzung","die Kreuzung"],"en":["en:m4:junction","junction"],"ru":["ru-w4-perekryostok","перекрёсток"]},
  {"de":["b1-m3-fahrbahn","die Fahrbahn"],"en":["en:m4:carriageway","carriageway"],"ru":["ru-w4-proezzhaya-chast","про+езжая часть"]},
  {"de":["b1-m3-kennzeichen","das Kennzeichen"],"en":["en:m4:number-plate","number plate"],"ru":["ru-w4-nomernoy-znak","номерн+ой знак"]},
  {"de":["b1-m3-kurve","die Kurve"],"en":["en:m4:bend","bend"],"ru":["ru-w4-povorot","повор+от"]},
  {"de":["b1-m3-orchester","das Orchester"],"en":["en:m4:orchestra","orchestra"]},
  {"de":["b1-m3-gedicht","das Gedicht"],"en":["en:m4:poem","poem"]},
  {"de":["b1-m3-bewohner","der Bewohner"],"en":["en:m4:resident","resident"],"ru":["ru-r-zhiv-zhitel","ж+итель"]},
  {"de":["b1-m3-oeffentlichkeit","die Öffentlichkeit"],"en":["en:m4:general-public","general public"]},
  {"de":["b1-m3-gewerkschaft","die Gewerkschaft"],"en":["en:m4:trade-union","trade union"]},
  {"de":["b1-m3-presse","die Presse"],"en":["en:m4:press","press"]},
  {"de":["b2-m3-selbstachtung","die Selbstachtung"],"en":["en:m4:self-respect","self-respect"]},
  {"de":["b2-m3-rueckhalt","der Rückhalt"],"en":["en:m4:emotional-support","emotional support"]},
  {"de":["b2-m3-gegendarstellung","die Gegendarstellung"],"ru":["ru-w4-oproverzhenie","опроверж+ение"]},
  {"de":["b2-m3-quellenangabe","die Quellenangabe"],"ru":["ru-w4-ssylka-na-istochnik","сс+ылка на ист+очник"]},
  {"de":["b2-m3-leserschaft","die Leserschaft"],"ru":["ru-w4-chitatelskaya-auditoriya","чит+ательская аудит+ория"]},
  {"de":["b2-m3-verschwendung","die Verschwendung"],"en":["en:m4:wastage","wastage"]},
  {"de":["b2-m3-lebensraum","der Lebensraum"],"en":["en:m4:habitat","habitat"]},
  {"de":["b2-m3-duerre","die Dürre"],"en":["en:more:drought","drought"]},
  {"de":["b2-m3-absatz","der Absatz"],"en":["en:m4:sales-volume","sales volume"]},
  {"de":["b2-m3-wahlkreis","der Wahlkreis"],"en":["en:m4:constituency","constituency"]},
  {"de":["b2-m3-wissensluecke","die Wissenslücke"],"en":["en:m4:knowledge-gap","knowledge gap"]},
  {"de":["b2-m3-wahlfach","das Wahlfach"],"en":["en:m4:optional-subject","optional subject"]},
  {"de":["b2-m3-anwesenheitspflicht","die Anwesenheitspflicht"],"en":["en:m4:compulsory-attendance","compulsory attendance"]},
  {"de":["b2-m3-uebergabeprotokoll","das Übergabeprotokoll"],"ru":["ru-w4-akt-priyoma-peredachi","акт приёма-перед+ачи"]},
  {"de":["b2-m3-mietrueckstand","der Mietrückstand"],"ru":["ru-w4-zadolzhennost-po-arende","зад+олженность по ар+енде"]},
  {"de":["b2-m3-hausverwaltung","die Hausverwaltung"],"ru":["ru-w-b2e-uk","управл+яющая комп+ания"]},
  {"de":["b2-m3-aussprache","die Aussprache"],"ru":["ru-w4-otkrovennyy-razgovor","откров+енный разгов+ор"]},
  {"de":["b2-m3-kraenkung","die Kränkung"],"ru":["ru-w-b2e-obida","об+ида"]},
  {"de":["b2-m3-versoehnung","die Versöhnung"],"ru":["ru-w3-primirenie","примир+ение"]},
  {"de":["b2-m3-gespraechsbereitschaft","die Gesprächsbereitschaft"],"ru":["ru-w4-gotovnost-k-dialogu","гот+овность к диал+огу"]},
  {"de":["b2-m3-nachsorge","die Nachsorge"],"ru":["ru-w4-posleduyushchee-nablyudenie","посл+едующее наблюд+ение"]},
  {"de":["b2-m3-pflegebedarf","der Pflegebedarf"],"ru":["ru-w4-potrebnost-v-ukhode","потр+ебность в ух+оде"]},
  {"de":["b2-m3-zweitmeinung","die Zweitmeinung"],"ru":["ru-w4-vtoroe-mnenie","втор+ое мн+ение"]},
  {"de":["b2-m3-teilstrecke","die Teilstrecke"],"ru":["ru-w4-uchastok-puti","уч+асток пут+и"]},
  {"de":["b2-m3-umbuchungsgebuehr","die Umbuchungsgebühr"],"ru":["ru-w4-sbor-za-perebronirovanie","сбор за перебронир+ование"]},
  {"de":["b2-m3-gepaeckaufbewahrung","die Gepäckaufbewahrung"],"ru":["ru-w4-kamera-khraneniya","к+амера хран+ения"]},
  {"de":["b2-m3-wettbewerbsfaehig","wettbewerbsfähig"],"en":["en:m4:competitive","competitive"],"ru":["ru-w4-competitive","конкурентоспос+обный"]},
  {"de":["b2-m3-familienfreundlich","familienfreundlich"],"en":["en:m4:family-friendly","family-friendly"]},
  {"de":["b2-m3-einbehalten","einbehalten"],"en":["en:m4:retain","retain"],"ru":["ru-w4-retain","удерж+ать"]},
  {"de":["b2-m3-grosshandel","der Großhandel"],"en":["en:m4:wholesale-trade","wholesale trade"],"ru":["ru-w4-wholesale-trade","опт+овая торг+овля"]},
  {"de":["b2-m3-versandhandel","der Versandhandel"],"en":["en:m4:mail-order","mail order"]},
  {"de":["b2-m3-fachschule","die Fachschule"],"en":["en:m4:vocational-college","vocational college"]},
  {"de":["b2-m3-respektlos","respektlos"],"en":["en:disrespectful:adj:main","disrespectful"],"ru":["ru-w4-disrespectful","неуваж+ительный"]},
  {"de":["b2-m3-duzen","duzen"],"en":["en:m4:be-on-first-name-terms","be on first-name terms"],"ru":["ru-w4-be-on-first-name-terms","обращ+аться на ты"],"note":{"ru":"В английском нет различия «ты/вы»: ближайший аналог — обращаться друг к другу по имени (be on first-name terms).","en":"English has no ты/вы or du/Sie distinction; the closest equivalent is being on first-name terms.","de":"Im Englischen gibt es kein du/Sie; am nächsten kommt „be on first-name terms“ (sich beim Vornamen nennen)."}},
  {"de":["b2-m3-siezen","siezen"],"ru":["ru-w4-address-formally","обращ+аться на вы"]},
  {"de":["b2-m3-beeindrucken","beeindrucken"],"en":["en:m4:impress","impress"],"ru":["ru-w4-impress","впечатл+ить"]},
  {"de":["b2-m3-streitgespraech","das Streitgespräch"],"en":["en:more2:debate","debate"],"ru":["ru-w4-heated-debate","пол+емика"]},
  {"de":["b2-m3-herunterladen","herunterladen"],"en":["en:more2:download","download"],"ru":["ru-w4-download","скач+ать"]},
  {"de":["b2-m3-navigieren","navigieren"],"en":["en:m4:navigate","navigate"],"ru":["ru-w4-navigate","ориент+ироваться"]},
  {"de":["b2-m3-ankuendigung","die Ankündigung"],"ru":["ru-w4-advance-notice","ан+онс"]},
  {"de":["b2-m3-betaeubungsspritze","die Betäubungsspritze"],"ru":["ru-w4-anaesthetic-injection","обезб+оливающий ук+ол"]},
  {"de":["b2-m3-innovativ","innovativ"],"en":["en:m4:innovative","innovative"]},
  {"de":["b2-m3-berufsabschluss","der Berufsabschluss"],"en":["en:m4:vocational-qualification","vocational qualification"],"ru":["ru-w4-berufsabschluss","профессион+альная квалифик+ация"]},
  {"de":["b2-m3-berufspraktikum","das Berufspraktikum"],"en":["en:m4:work-placement","work placement"],"ru":["ru-w4-berufspraktikum","произв+одственная пр+актика"]},
  {"de":["b2-m3-spezialisierung","die Spezialisierung"],"en":["en:m4:specialisation","specialisation"],"ru":["ru-w4-spezialisierung","специализ+ация"]},
  {"de":["b2-m3-familienbetrieb","der Familienbetrieb"],"en":["en:m4:family-run-business","family-run business"],"ru":["ru-w4-familienbetrieb","сем+ейное предпри+ятие"]},
  {"de":["b2-m3-zeitarbeit","die Zeitarbeit"],"en":["en:m4:agency-work","agency work"]},
  {"de":["b2-m3-belegschaft","die Belegschaft"],"en":["en:m4:workforce","workforce"],"ru":["ru-w4-belegschaft","трудов+ой коллект+ив"]},
  {"de":["b2-m3-verguetung","die Vergütung"],"en":["en:m4:remuneration","remuneration"],"ru":["ru-w4-verguetung","вознагражд+ение"]},
  {"de":["b2-m3-mengenrabatt","der Mengenrabatt"],"en":["en:m4:bulk-discount","bulk discount"]},
  {"de":["b2-m3-zahlungsempfaenger","der Zahlungsempfänger"],"en":["en:m4:payee","payee"],"ru":["ru-w4-zahlungsempfaenger","получ+атель платеж+а"]},
  {"de":["b2-m3-bestellnummer","die Bestellnummer"],"en":["en:m4:order-reference","order reference"]},
  {"de":["b2-m3-zukunftsorientiert","zukunftsorientiert"],"en":["en:m4:forward-looking","forward-looking"]},
  {"de":["b2-m3-hilfsorganisation","die Hilfsorganisation"],"en":["en:m4:aid-organisation","aid organisation"],"ru":["ru-w4-hilfsorganisation","гуманит+арная организ+ация"]},
  {"de":["b2-m3-betreuungsangebot","das Betreuungsangebot"],"en":["en:m4:childcare-provision","childcare provision"]},
  {"de":["b2-m3-arbeitslosenversicherung","die Arbeitslosenversicherung"],"en":["en:m4:unemployment-insurance","unemployment insurance"],"ru":["ru-w4-arbeitslosenversicherung","страхов+ание от безраб+отицы"]},
  {"de":["b2-m3-arbeitsunfaehigkeit","die Arbeitsunfähigkeit"],"ru":["ru-w4-arbeitsunfaehigkeit","нетрудоспос+обность"]},
  {"de":["b2-m3-platzwunde","die Platzwunde"],"en":["en:m4:laceration","laceration"],"ru":["ru-w4-platzwunde","рв+аная р+ана"]},
  {"de":["b2-m3-flugverbindung","die Flugverbindung"],"ru":["ru-w4-flugverbindung","авиасообщ+ение"]},
  {"de":["b2-m3-reibungslos","reibungslos"],"ru":["ru-w4-reibungslos","без зам+инок"]},
  {"de":["b2-m3-prognose","die Prognose"],"en":["en:it3:forecast","forecast"],"ru":["ru-pro4-prognoz","прогн+оз"]},
  {"de":["pro-b6-schichtplan","der Schichtplan"],"en":["en:m4:shift-rota","shift rota"],"ru":["ru-w4-grafik-smen","гр+афик смен"]},
  {"en":["en:m4:marital-status","marital status"],"ru":["ru-w4-semeynoe-polozhenie","сем+ейное полож+ение"]},
  {"de":["b2-recht-bearbeitungszeit","die Bearbeitungszeit"],"en":["en:m4:processing-time","processing time"],"ru":["ru-w4-srok-rassmotreniya","срок рассмотр+ения"]},
  {"de":["b2-psyche-gelassenheit","die Gelassenheit"],"en":["en:m4:composure","composure"]},
  {"de":["b2-psyche-anspannung","die Anspannung"],"en":["en:m4:tension","tension"]},
  {"de":["b2-medien-schlagzeile","die Schlagzeile"],"en":["en:m4:headline","headline"],"ru":["ru-w-zagolovok","загол+овок"]},
  {"de":["b2-medien-berichterstattung","die Berichterstattung"],"en":["en:m4:news-coverage","news coverage"],"ru":["ru-w4-osveshchenie","освещ+ение"]},
  {"de":["b2-wirtschaft-kaufkraft","die Kaufkraft"],"en":["en:m4:purchasing-power","purchasing power"]},
  {"de":["b2-gesellschaft-wahlbeteiligung","die Wahlbeteiligung"],"en":["en:m4:voter-turnout","voter turnout"],"ru":["ru-w4-yavka","+явка"]},
  {"de":["b2-gesellschaft-mitspracherecht","das Mitspracherecht"],"en":["en:m4:have-a-say","have a say"],"ru":["ru-w4-pravo-golosa","пр+аво г+олоса"]},
  {"de":["b2-gesellschaft-chancengleichheit","die Chancengleichheit"],"en":["en:m4:equal-opportunity","equal opportunity"],"ru":["ru-w4-ravenstvo-vozmozhnostey","р+авенство возм+ожностей"]},
  {"de":["b2-bildung-zulassungsvoraussetzung","die Zulassungsvoraussetzung"],"en":["en:m4:entry-requirement","entry requirement"]},
  {"en":["en:m4:self-motivated","self-motivated"],"ru":["ru-w4-eigeninitiativ","инициат+ивный"]},
  {"en":["en:m4:care-worker","care worker"],"ru":["ru-w4-sidelka","сид+елка"]},
  {"de":["b1-health-patient","der Patient"],"ru":["ru-w4-patsient","паци+ент"]},
  {"de":["b2-medien-reichweite","die Reichweite"],"ru":["ru-w4-okhvat","охв+ат"]},
  {"de":["b1-m2-buergerinitiative","die Bürgerinitiative"],"ru":["ru-w4-initsiativnaya-gruppa","инициат+ивная гр+уппа"]},
  {"de":["b2-gesellschaft-interessenkonflikt","der Interessenkonflikt"],"en":["en:pro5:conflict-of-interest","conflict of interest"],"ru":["ru-w4-konflikt-interesov","конфл+икт интер+есов"]},
  {"de":["pro-b6-instandhaltung","die Instandhaltung"],"ru":["ru-w4-soderzhanie","содерж+ание"]},
  {"en":["en:respect:n:noun","respect"],"ru":["ru-w4-uvazhenie","уваж+ение"]},
  {"de":["b2-ges-unvertraeglichkeit","die Unverträglichkeit"],"ru":["ru-w4-neperenosimost","неперенос+имость"]},
  {"en":["en:m4:rebuttal","rebuttal"],"ru":["ru-w4-oproverzhenie","опроверж+ение"]},
  {"de":["b2-m3-ausblick","der Ausblick"],"en":["en:vf:n:outlook","outlook"]}
]);

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.link([
  {
    "ru": [
      "ru-content26-leisure-uvlechenie",
      "увлеч+ение"
    ],
    "en": [
      "en:more2:hobby",
      "hobby"
    ],
    "de": [
      "b1-leisure-hobby",
      "das Hobby"
    ]
  },
  {
    "ru": [
      "ru-content26-leisure-dosug",
      "дос+уг"
    ],
    "de": [
      "b1-leisure-freizeit",
      "die Freizeit"
    ]
  },
  {
    "ru": [
      "ru-content26-leisure-koncert",
      "конц+ерт"
    ],
    "de": [
      "b1-leisure-konzert",
      "das Konzert"
    ]
  },
  {
    "ru": [
      "ru-r-stav-vystavka",
      "вы́ставка"
    ],
    "en": [
      "en:exhibition:n:main",
      "exhibition"
    ],
    "de": [
      "b1-leisure-ausstellung",
      "die Ausstellung"
    ]
  },
  {
    "ru": [
      "ru-content26-leisure-zritel",
      "зр+итель"
    ],
    "de": [
      "b1-leisure-zuschauer",
      "der Zuschauer"
    ]
  },
  {
    "ru": [
      "ru-content26-leisure-roman",
      "ром+ан"
    ],
    "de": [
      "b2-kultur-roman",
      "der Roman"
    ]
  },
  {
    "ru": [
      "ru-content26-leisure-orchestra",
      "орк+естр"
    ],
    "en": [
      "en:m4:orchestra",
      "orchestra"
    ],
    "de": [
      "b1-m3-orchester",
      "das Orchester"
    ]
  },
  {
    "ru": [
      "ru-content26-leisure-poem",
      "стихотвор+ение"
    ],
    "en": [
      "en:m4:poem",
      "poem"
    ],
    "de": [
      "b1-m3-gedicht",
      "das Gedicht"
    ]
  },
  {
    "ru": [
      "ru-content26-society-uchastie",
      "уч+астие"
    ],
    "en": [
      "en:participation:n:main",
      "participation"
    ],
    "de": [
      "r-nehmen-teilnahme",
      "die Teilnahme"
    ]
  },
  {
    "ru": [
      "ru-content26-society-obrazovanie",
      "образов+ание"
    ],
    "en": [
      "en:education:n:main",
      "education"
    ]
  },
  {
    "ru": [
      "ru-content26-society-ekzamen",
      "экз+амен"
    ],
    "de": [
      "b1-society-pruefung",
      "die Prüfung"
    ]
  },
  {
    "ru": [
      "ru-content26-edu-stipendiya",
      "стип+ендия"
    ],
    "de": [
      "b2-bildung-stipendium",
      "das Stipendium"
    ]
  },
  {
    "ru": [
      "ru-content26-edu-uchebny-plan",
      "уч+ебный план"
    ],
    "en": [
      "en:curriculum:n:main",
      "curriculum"
    ]
  },
  {
    "ru": [
      "ru-content26-edu-kvalifikaciya",
      "квалифик+ация"
    ],
    "en": [
      "en:qualification:n:main",
      "qualification"
    ]
  },
  {
    "ru": [
      "ru-content26-edu-samoobrazovanie",
      "самообразов+ание"
    ],
    "de": [
      "b2-bildung-selbststudium",
      "das Selbststudium"
    ]
  },
  {
    "ru": [
      "ru-pro2-obratnaya-svyaz",
      "обра́тная связь"
    ],
    "en": [
      "en:feedback:n:main",
      "feedback"
    ],
    "de": [
      "it-comm-rueckmeldung",
      "die Rückmeldung"
    ]
  },
  {
    "ru": [
      "ru-content26-edu-poseshchaemost",
      "посещ+аемость"
    ],
    "en": [
      "en:attendance:n:main",
      "attendance"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-inflyaciya",
      "инфл+яция"
    ],
    "en": [
      "en:inflation:n:main",
      "inflation"
    ],
    "de": [
      "b2-wirtschaft-inflation",
      "die Inflation"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-pokupatelnaya",
      "покуп+ательная спос+обность"
    ],
    "en": [
      "en:m4:purchasing-power",
      "purchasing power"
    ],
    "de": [
      "b2-wirtschaft-kaufkraft",
      "die Kaufkraft"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-spros",
      "спрос"
    ],
    "en": [
      "en:demand:n:market",
      "demand"
    ],
    "de": [
      "b2-wirtschaft-nachfrage",
      "die Nachfrage"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-konkurenciya",
      "конкур+енция"
    ],
    "en": [
      "en:more2:competition",
      "competition"
    ],
    "de": [
      "b2-wirtschaft-wettbewerb",
      "der Wettbewerb"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-potrebitel",
      "потреб+итель"
    ],
    "en": [
      "en:consumer:n:main",
      "consumer"
    ],
    "de": [
      "b2-wirtschaft-verbraucher",
      "der Verbraucher"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-sberezheniya",
      "сбереж+ения"
    ],
    "en": [
      "en:more2:savings",
      "savings"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-rassrochka",
      "расср+очка"
    ],
    "de": [
      "b2-wirtschaft-ratenzahlung",
      "die Ratenzahlung"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-pribyl",
      "пр+ибыль"
    ],
    "en": [
      "en:m3:profit",
      "profit"
    ],
    "de": [
      "b2-m2-gewinn",
      "der Gewinn"
    ]
  },
  {
    "ru": [
      "ru-content26-econ-byudzhet",
      "бюдж+ет"
    ],
    "en": [
      "en:budget:n:main",
      "budget"
    ]
  },
  {
    "ru": [
      "ru-content26-sci-issledovanie",
      "иссл+едование"
    ],
    "de": [
      "b2-wiss-forschung",
      "die Forschung"
    ]
  },
  {
    "ru": [
      "ru-content26-sci-eksperiment",
      "эксперим+ент"
    ],
    "de": [
      "b2-wiss-experiment",
      "das Experiment"
    ]
  },
  {
    "ru": [
      "ru-content26-sci-nablyudenie",
      "наблюд+ение"
    ],
    "en": [
      "en:observation:n:main",
      "observation"
    ]
  },
  {
    "ru": [
      "ru-content26-sci-dokazatelstvo",
      "доказ+ательство"
    ],
    "en": [
      "en:evidence:n:main",
      "evidence"
    ]
  },
  {
    "ru": [
      "ru-content26-sci-prichina",
      "прич+ина"
    ],
    "de": [
      "it-sec-ursache",
      "die Ursache"
    ]
  },
  {
    "ru": [
      "ru-content26-sci-izmerenie",
      "измер+ение"
    ],
    "de": [
      "b2-m3-messung",
      "die Messung"
    ]
  },
  {
    "ru": [
      "ru-content26-psy-napryazhenie",
      "напряж+ение"
    ],
    "en": [
      "en:m4:tension",
      "tension"
    ],
    "de": [
      "b2-psyche-anspannung",
      "die Anspannung"
    ]
  },
  {
    "ru": [
      "ru-content26-psy-vosstanovlenie",
      "восстановл+ение"
    ],
    "de": [
      "b2-psyche-erholung",
      "die Erholung"
    ]
  },
  {
    "ru": [
      "ru-content26-psy-ustoichivost",
      "уст+ойчивость"
    ],
    "en": [
      "en:m3:resilience",
      "resilience"
    ]
  },
  {
    "ru": [
      "ru-content26-psy-razocharovanie",
      "разочаров+ание"
    ],
    "de": [
      "b2-m2-enttaeuschung",
      "die Enttäuschung"
    ]
  },
  {
    "ru": [
      "ru-content26-culture-recenziya",
      "рец+ензия"
    ],
    "de": [
      "b2-kultur-rezension",
      "die Rezension"
    ]
  },
  {
    "ru": [
      "ru-content26-culture-postanovka",
      "постан+овка"
    ],
    "de": [
      "b2-kultur-inszenierung",
      "die Inszenierung"
    ]
  },
  {
    "ru": [
      "ru-content26-culture-mnogoobrazie",
      "многообр+азие"
    ],
    "de": [
      "b2-gesellschaft-vielfalt",
      "die Vielfalt"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-predposylka",
      "предпос+ылка"
    ],
    "en": [
      "en:content26:c1-premise",
      "premise"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-dopushchenie",
      "допущ+ение"
    ],
    "en": [
      "en:content26:c1-assumption",
      "assumption"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-obosnovanie",
      "обоснов+ание"
    ],
    "en": [
      "en:content26:c1-justification",
      "justification"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-dvusmyslennost",
      "двусм+ысленность"
    ],
    "en": [
      "en:content26:c1-ambiguity",
      "ambiguity"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-protivorechie",
      "противор+ечие"
    ],
    "en": [
      "en:content26:c1-contradiction",
      "contradiction"
    ],
    "de": [
      "r-sprechen-widerspruch",
      "der Widerspruch"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-soglasovannost",
      "соглас+ованность"
    ],
    "en": [
      "en:content26:c1-consistency",
      "consistency"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-ogovorka",
      "огов+орка"
    ],
    "en": [
      "en:content26:c1-caveat",
      "caveat"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-oblast-primeneniya",
      "+область примен+ения"
    ],
    "en": [
      "en:content26:c1-scope",
      "scope of application"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-nyuans",
      "ню+анс"
    ],
    "en": [
      "en:content26:c1-nuance",
      "nuance"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-obobshchenie",
      "обобщ+ение"
    ],
    "en": [
      "en:content26:c1-generalisation",
      "generalisation"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-obosnovanny",
      "обосн+ованный"
    ],
    "en": [
      "en:content26:c1-justified",
      "justified"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-posledovatelny",
      "посл+едовательный"
    ],
    "en": [
      "en:content26:c1-coherent",
      "coherent"
    ]
  },
  {
    "ru": [
      "ru-pro4-ubeditelny",
      "убеди́тельный"
    ],
    "en": [
      "en:content26:c1-convincing",
      "convincing"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-proizvolny",
      "произв+ольный"
    ],
    "en": [
      "en:content26:c1-arbitrary",
      "arbitrary"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-kosvenny",
      "к+освенный"
    ],
    "en": [
      "en:content26:c1-indirect",
      "indirect"
    ]
  },
  {
    "ru": [
      "ru-content26-c1-sootnoshenie",
      "соотнош+ение"
    ],
    "en": [
      "en:content26:c1-ratio",
      "ratio"
    ]
  },
  {
    "ru": [
      "ru-content26-office-razreshenie",
      "разреш+ение"
    ],
    "en": [
      "en:permit:n:main",
      "permit"
    ]
  },
  {
    "ru": [
      "ru-content26-office-vedomstvo",
      "в+едомство"
    ],
    "de": [
      "b1-authorities-behoerde",
      "die Behörde"
    ]
  },
  {
    "ru": [
      "ru-content26-office-zayavitel",
      "заяв+итель"
    ],
    "en": [
      "en:applicant:n:main",
      "applicant"
    ],
    "de": [
      "pro-b5-antragsteller",
      "der Antragsteller"
    ]
  },
  {
    "ru": [
      "ru-content26-office-reshenie",
      "администрат+ивное реш+ение"
    ],
    "en": [
      "en:pro5:administrative-decision",
      "administrative decision"
    ],
    "de": [
      "pro-b5-verwaltungsakt",
      "der Verwaltungsakt"
    ]
  },
  {
    "ru": [
      "ru-content26-office-obzhalovanie",
      "обж+алование"
    ],
    "en": [
      "en:pro5:administrative-appeal",
      "administrative appeal"
    ],
    "de": [
      "r-sprechen-widerspruch",
      "der Widerspruch"
    ]
  },
  {
    "ru": [
      "ru-w-registraciya",
      "регистра́ция"
    ],
    "en": [
      "en:more:registration",
      "registration"
    ],
    "de": [
      "b1-auth-anmeldung",
      "die Anmeldung"
    ]
  },
  {
    "ru": [
      "ru-content26-tax-deklaraciya",
      "нал+оговая деклар+ация"
    ],
    "en": [
      "en:m3:tax-return",
      "tax return"
    ],
    "de": [
      "b1-auth-steuererklaerung",
      "die Steuererklärung"
    ]
  },
  {
    "ru": [
      "ru-content26-tax-vznos",
      "страхов+ой взнос"
    ],
    "en": [
      "en:pro5:social-security-contribution",
      "social security contribution"
    ]
  },
  {
    "ru": [
      "ru-w-nalog",
      "нало́г"
    ],
    "en": [
      "en:more2:tax",
      "tax"
    ],
    "de": [
      "b1-society-steuer",
      "die Steuer"
    ]
  },
  {
    "ru": [
      "ru-content26-docs-uvedomlenie",
      "уведомл+ение о вруч+ении"
    ],
    "en": [
      "en:pro5:acknowledgement-of-receipt",
      "acknowledgement of receipt"
    ]
  },
  {
    "ru": [
      "ru-content26-docs-hranenie",
      "срок хран+ения"
    ],
    "en": [
      "en:pro5:retention-period",
      "retention period"
    ]
  },
  {
    "ru": [
      "ru-content26-docs-nomer",
      "регистраци+онный н+омер"
    ],
    "en": [
      "en:pro5:reference-number",
      "reference number"
    ],
    "de": [
      "pro-b5-aktenzeichen",
      "das Aktenzeichen"
    ]
  },
  {
    "ru": [
      "ru-w3-doverennost",
      "дове́ренность"
    ],
    "en": [
      "en:pro5:power-of-attorney",
      "power of attorney"
    ],
    "de": [
      "b2-recht-vollmacht",
      "die Vollmacht"
    ]
  },
  {
    "ru": [
      "ru-content26-contract-uslovie",
      "усл+овие догов+ора"
    ],
    "de": [
      "pro-b5-vertragsklausel",
      "die Vertragsklausel"
    ]
  },
  {
    "ru": [
      "ru-content26-contract-narushenie",
      "наруш+ение догов+ора"
    ],
    "en": [
      "en:pro5:breach-of-contract",
      "breach of contract"
    ]
  },
  {
    "ru": [
      "ru-content26-contract-otvetstvennost",
      "отв+етственность"
    ],
    "en": [
      "en:it3:liability",
      "liability"
    ]
  },
  {
    "ru": [
      "ru-content26-contract-neustoyka",
      "неуст+ойка"
    ],
    "de": [
      "pro-b5-vertragsstrafe",
      "die Vertragsstrafe"
    ]
  },
  {
    "ru": [
      "ru-content26-contract-ushcherb",
      "возмещ+ение ущ+ерба"
    ],
    "de": [
      "b2-m2-schadensersatz",
      "der Schadensersatz"
    ]
  },
  {
    "ru": [
      "ru-r-govor-dogovor",
      "догово́р"
    ],
    "en": [
      "en:contract:n:main",
      "contract"
    ],
    "de": [
      "b1-work-vertrag",
      "der Vertrag"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-copyright",
      "+авторское пр+аво"
    ],
    "de": [
      "pro-b5-urheberrecht",
      "das Urheberrecht"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-trademark",
      "тов+арный знак"
    ],
    "en": [
      "en:pro5:trademark",
      "trademark"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-royalty",
      "лицензи+онный сбор"
    ],
    "de": [
      "pro-b5-lizenzgebuehr",
      "die Lizenzgebühr"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-secret",
      "комм+ерческая т+айна"
    ],
    "en": [
      "en:pro5:trade-secret",
      "trade secret"
    ],
    "de": [
      "pro-b5-geschaeftsgeheimnis",
      "das Geschäftsgeheimnis"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-plagiarism",
      "плаги+ат"
    ],
    "en": [
      "en:pro5:plagiarism",
      "plagiarism"
    ],
    "de": [
      "pro-b5-plagiat",
      "das Plagiat"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-domain",
      "общ+ественное досто+яние"
    ],
    "en": [
      "en:pro5:public-domain",
      "public domain"
    ],
    "de": [
      "pro-b5-gemeinfreiheit",
      "die Gemeinfreiheit"
    ]
  },
  {
    "ru": [
      "ru-content26-ip-usage",
      "пр+аво исп+ользования"
    ],
    "en": [
      "en:it4:usage-rights",
      "usage rights"
    ],
    "de": [
      "pro-m4-nutzungsrecht",
      "das Nutzungsrecht"
    ]
  },
  {
    "ru": [
      "ru-content26-crime-obvinenie",
      "обвин+ительное заключ+ение"
    ],
    "en": [
      "en:pro5:indictment",
      "indictment"
    ],
    "de": [
      "pro-b5-anklageschrift",
      "die Anklageschrift"
    ]
  },
  {
    "ru": [
      "ru-content26-crime-prokuratura",
      "прокурат+ура"
    ],
    "en": [
      "en:pro5:prosecution",
      "prosecution"
    ],
    "de": [
      "pro-b5-staatsanwaltschaft",
      "die Staatsanwaltschaft"
    ]
  },
  {
    "ru": [
      "ru-content26-crime-presumption",
      "през+умпция невин+овности"
    ],
    "en": [
      "en:pro5:presumption-of-innocence",
      "presumption of innocence"
    ],
    "de": [
      "pro-b5-unschuldsvermutung",
      "die Unschuldsvermutung"
    ]
  },
  {
    "ru": [
      "ru-content26-crime-acquittal",
      "оправд+ательный пригов+ор"
    ],
    "en": [
      "en:pro5:acquittal",
      "acquittal"
    ],
    "de": [
      "pro-b5-freispruch",
      "der Freispruch"
    ]
  },
  {
    "ru": [
      "ru-content26-crime-appeal",
      "апелл+яция"
    ],
    "de": [
      "pro-b5-berufung",
      "die Berufung"
    ]
  },
  {
    "ru": [
      "ru-content26-labour-collective",
      "коллект+ивный догов+ор"
    ],
    "en": [
      "en:it4:collective-agreement",
      "collective agreement"
    ]
  },
  {
    "ru": [
      "ru-content26-labour-notice",
      "срок уведомл+ения об увольн+ении"
    ],
    "en": [
      "en:notice-period:n:main",
      "notice period"
    ],
    "de": [
      "b2-beruf-kuendigungsfrist",
      "die Kündigungsfrist"
    ]
  },
  {
    "ru": [
      "ru-content26-labour-termination",
      "соглаш+ение о расторж+ении"
    ],
    "en": [
      "en:pro5:mutual-termination-agreement",
      "mutual termination agreement"
    ],
    "de": [
      "pro-b5-aufhebungsvertrag",
      "der Aufhebungsvertrag"
    ]
  },
  {
    "ru": [
      "ru-content26-labour-parental",
      "+отпуск по ух+оду за ребёнком"
    ],
    "de": [
      "pro-b5-elternzeit",
      "die Elternzeit"
    ]
  },
  {
    "ru": [
      "ru-pro3-ispytatelny",
      "испыта́тельный срок"
    ],
    "de": [
      "b2-beruf-probezeit",
      "die Probezeit"
    ]
  },
  {
    "ru": [
      "ru-content26-corp-ustav",
      "уст+ав"
    ],
    "en": [
      "en:pro5:articles-of-association",
      "articles of association"
    ],
    "de": [
      "pro-b5-satzung",
      "die Satzung"
    ]
  },
  {
    "ru": [
      "ru-content26-corp-diligence",
      "к+омплексная пров+ерка"
    ],
    "en": [
      "en:pro5:due-diligence",
      "due diligence"
    ]
  },
  {
    "ru": [
      "ru-content26-corp-compliance",
      "соблюд+ение тр+ебований"
    ],
    "en": [
      "en:it3:compliance",
      "compliance"
    ]
  },
  {
    "ru": [
      "ru-content26-corp-privacy",
      "защ+ита персон+альных д+анных"
    ],
    "de": [
      "it-sec-datenschutz",
      "der Datenschutz"
    ]
  },
  {
    "ru": [
      "ru-content26-corp-insolvency",
      "неплатёжеспос+обность"
    ],
    "en": [
      "en:pro5:insolvency",
      "insolvency"
    ]
  },
  {
    "ru": [
      "ru-content26-corp-governance",
      "корпорат+ивное управл+ение"
    ],
    "en": [
      "en:pro5:corporate-governance",
      "corporate governance"
    ]
  },
  {
    "ru": [
      "ru-content26-hotel-occupancy",
      "загр+узка гост+иницы"
    ],
    "en": [
      "en:pro6:occupancy-rate",
      "occupancy rate"
    ],
    "de": [
      "pro-b6-belegungsquote",
      "die Belegungsquote"
    ]
  },
  {
    "ru": [
      "ru-content26-hotel-checkout",
      "п+оздний в+ыезд"
    ],
    "en": [
      "en:pro6:late-checkout",
      "late checkout"
    ],
    "de": [
      "pro-b6-spaetabreise",
      "die Spätabreise"
    ]
  },
  {
    "ru": [
      "ru-content26-hotel-housekeeping",
      "уб+орка н+омера"
    ],
    "en": [
      "en:pro6:housekeeping",
      "housekeeping"
    ],
    "de": [
      "pro-b6-zimmerreinigung",
      "die Zimmerreinigung"
    ]
  },
  {
    "ru": [
      "ru-content26-hotel-noshow",
      "неза+езд"
    ],
    "en": [
      "en:pro6:no-show",
      "no-show"
    ]
  },
  {
    "ru": [
      "ru-content26-hotel-deposit",
      "зал+ог"
    ],
    "en": [
      "en:deposit:n:rent",
      "deposit"
    ],
    "de": [
      "b2-wohnen-kaution",
      "die Kaution"
    ]
  },
  {
    "ru": [
      "ru-content26-gastro-hygiene",
      "пищев+ая гиги+ена"
    ],
    "en": [
      "en:pro6:food-hygiene",
      "food hygiene"
    ],
    "de": [
      "pro-b6-lebensmittelhygiene",
      "die Lebensmittelhygiene"
    ]
  },
  {
    "ru": [
      "ru-content26-gastro-allergens",
      "маркир+овка аллерг+енов"
    ],
    "de": [
      "pro-b6-allergenkennzeichnung",
      "die Allergenkennzeichnung"
    ]
  },
  {
    "ru": [
      "ru-content26-gastro-table",
      "брон+ирование ст+олика"
    ],
    "de": [
      "pro-b6-tischreservierung",
      "die Tischreservierung"
    ]
  },
  {
    "ru": [
      "ru-content26-gastro-dish",
      "бл+юдо дня"
    ],
    "de": [
      "pro-b6-tagesgericht",
      "das Tagesgericht"
    ]
  },
  {
    "ru": [
      "ru-content26-gastro-service",
      "с+ервисный сбор"
    ],
    "en": [
      "en:pro6:service-charge",
      "service charge"
    ]
  },
  {
    "ru": [
      "ru-content26-gastro-perishable",
      "скороп+ортящийся"
    ],
    "en": [
      "en:pro6:perishable",
      "perishable"
    ]
  },
  {
    "ru": [
      "ru-content26-retail-stocktake",
      "инвентариз+ация"
    ],
    "en": [
      "en:pro6:stocktake",
      "stocktake"
    ],
    "de": [
      "pro-b6-inventur",
      "die Inventur"
    ]
  },
  {
    "ru": [
      "ru-content26-retail-warranty",
      "гарант+ийная прет+ензия"
    ],
    "en": [
      "en:pro6:warranty-claim",
      "warranty claim"
    ]
  },
  {
    "ru": [
      "ru-content26-retail-exchange",
      "обм+ен тов+ара"
    ],
    "de": [
      "b1-m2-umtausch",
      "der Umtausch"
    ]
  },
  {
    "ru": [
      "ru-w-kassa",
      "ка́сса"
    ],
    "de": [
      "b1-food-kasse",
      "die Kasse"
    ]
  },
  {
    "ru": [
      "ru-content26-account-balance",
      "бухг+алтерский бал+анс"
    ],
    "en": [
      "en:pro6:balance-sheet",
      "balance sheet"
    ],
    "de": [
      "pro-b6-bilanz",
      "die Bilanz"
    ]
  },
  {
    "ru": [
      "ru-content26-account-receivable",
      "дебит+орская зад+олженность"
    ],
    "en": [
      "en:pro6:accounts-receivable",
      "accounts receivable"
    ]
  },
  {
    "ru": [
      "ru-content26-account-payable",
      "кредит+орская зад+олженность"
    ],
    "en": [
      "en:pro6:accounts-payable",
      "accounts payable"
    ]
  },
  {
    "ru": [
      "ru-content26-account-depreciation",
      "амортиз+ация"
    ],
    "en": [
      "en:pro6:depreciation",
      "depreciation"
    ],
    "de": [
      "pro-b6-abschreibung",
      "die Abschreibung"
    ]
  },
  {
    "ru": [
      "ru-content26-account-liquidity",
      "ликв+идность"
    ],
    "en": [
      "en:pro6:liquidity",
      "liquidity"
    ],
    "de": [
      "pro-b6-liquiditaet",
      "die Liquidität"
    ]
  },
  {
    "ru": [
      "ru-content26-account-cashflow",
      "д+енежный пот+ок"
    ],
    "en": [
      "en:it4:cash-flow",
      "cash flow"
    ]
  },
  {
    "ru": [
      "ru-content26-account-audit",
      "бухг+алтерский ауд+ит"
    ],
    "de": [
      "pro-b6-buchpruefung",
      "die Buchprüfung"
    ]
  },
  {
    "ru": [
      "ru-pro5-prosrochka",
      "просро́чка"
    ],
    "de": [
      "pro-b6-zahlungsverzug",
      "der Zahlungsverzug"
    ]
  },
  {
    "ru": [
      "ru-content26-market-funnel",
      "вор+онка прод+аж"
    ],
    "en": [
      "en:pro6:sales-funnel",
      "sales funnel"
    ]
  },
  {
    "ru": [
      "ru-content26-market-release",
      "пресс-рел+из"
    ],
    "en": [
      "en:pro6:press-release",
      "press release"
    ],
    "de": [
      "pro-b6-pressemitteilung",
      "die Pressemitteilung"
    ]
  },
  {
    "ru": [
      "ru-content26-market-positioning",
      "позицион+ирование бр+енда"
    ],
    "en": [
      "en:pro6:brand-positioning",
      "brand positioning"
    ]
  },
  {
    "ru": [
      "ru-content26-market-share",
      "д+оля р+ынка"
    ],
    "en": [
      "en:pro6:market-share",
      "market share"
    ]
  },
  {
    "ru": [
      "ru-content26-market-campaign",
      "рекл+амная камп+ания"
    ],
    "de": [
      "pro-b6-werbekampagne",
      "die Werbekampagne"
    ]
  },
  {
    "ru": [
      "ru-content26-hr-screening",
      "отб+ор кандид+атов"
    ],
    "en": [
      "en:pro6:candidate-screening",
      "candidate screening"
    ],
    "de": [
      "pro-b6-bewerberauswahl",
      "die Bewerberauswahl"
    ]
  },
  {
    "ru": [
      "ru-content26-hr-appraisal",
      "оц+енка результ+атов раб+оты"
    ],
    "de": [
      "pro-b6-leistungsbeurteilung",
      "die Leistungsbeurteilung"
    ]
  },
  {
    "ru": [
      "ru-content26-hr-file",
      "л+ичное д+ело"
    ],
    "de": [
      "pro-b6-personalakte",
      "die Personalakte"
    ]
  },
  {
    "ru": [
      "ru-content26-hr-package",
      "компенсаци+онный пак+ет"
    ],
    "en": [
      "en:pro6:compensation-package",
      "compensation package"
    ]
  },
  {
    "ru": [
      "ru-pro3-tekuchest",
      "теку́честь ка́дров"
    ],
    "en": [
      "en:it3:staff-turnover",
      "staff turnover"
    ],
    "de": [
      "pro-m3-fluktuation",
      "die Fluktuation"
    ]
  },
  {
    "ru": [
      "ru-w-trudoustroystvo",
      "трудоустро́йство"
    ],
    "en": [
      "en:employment:n:main",
      "employment"
    ],
    "de": [
      "b1-m3-beschaeftigung",
      "die Beschäftigung"
    ]
  },
  {
    "ru": [
      "ru-content26-med-history",
      "ан+амнез"
    ],
    "en": [
      "en:pro6:patient-history",
      "patient history"
    ],
    "de": [
      "pro-b6-anamnese",
      "die Anamnese"
    ]
  },
  {
    "ru": [
      "ru-content26-med-consent",
      "информ+ированное согл+асие"
    ],
    "en": [
      "en:pro6:informed-consent",
      "informed consent"
    ]
  },
  {
    "ru": [
      "ru-content26-med-contraindication",
      "противопоказ+ание"
    ],
    "en": [
      "en:pro6:contraindication",
      "contraindication"
    ]
  },
  {
    "ru": [
      "ru-content26-med-dosage",
      "дозир+овка"
    ],
    "en": [
      "en:pro6:dosage",
      "dosage"
    ],
    "de": [
      "pro-b6-dosierung",
      "die Dosierung"
    ]
  },
  {
    "ru": [
      "ru-content26-med-summary",
      "выписн+ой эпикр+из"
    ],
    "en": [
      "en:pro6:discharge-summary",
      "discharge summary"
    ],
    "de": [
      "pro-b6-entlassungsbericht",
      "der Entlassungsbericht"
    ]
  },
  {
    "ru": [
      "ru-w3-lechenie",
      "лече́ние"
    ],
    "en": [
      "en:treatment:n:main",
      "treatment"
    ]
  },
  {
    "ru": [
      "ru-content26-log-supply",
      "цеп+очка пост+авок"
    ],
    "en": [
      "en:it4:supply-chain",
      "supply chain"
    ],
    "de": [
      "it-sec-lieferkette",
      "die Lieferkette"
    ]
  },
  {
    "ru": [
      "ru-content26-log-customs",
      "там+оженное оформл+ение"
    ],
    "en": [
      "en:pro6:customs-clearance",
      "customs clearance"
    ],
    "de": [
      "pro-b6-zollabfertigung",
      "die Zollabfertigung"
    ]
  },
  {
    "ru": [
      "ru-content26-log-consignment",
      "тр+анспортная накладн+ая"
    ],
    "de": [
      "pro-b6-frachtbrief",
      "der Frachtbrief"
    ]
  },
  {
    "ru": [
      "ru-content26-log-picking",
      "комплект+ация зак+аза"
    ],
    "en": [
      "en:pro6:order-picking",
      "order picking"
    ],
    "de": [
      "pro-b6-kommissionierung",
      "die Kommissionierung"
    ]
  },
  {
    "ru": [
      "ru-content26-log-cold",
      "холодов+ая цепь"
    ],
    "en": [
      "en:pro6:cold-chain",
      "cold chain"
    ]
  },
  {
    "ru": [
      "ru-content26-log-tracking",
      "отсл+еживание отправл+ения"
    ],
    "de": [
      "pro-b6-sendungsverfolgung",
      "die Sendungsverfolgung"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-blueprint",
      "чертёж"
    ],
    "en": [
      "en:pro6:blueprint",
      "blueprint"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-commissioning",
      "ввод в эксплуат+ацию"
    ],
    "en": [
      "en:pro6:commissioning",
      "commissioning"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-safety",
      "охр+ана труд+а"
    ],
    "de": [
      "pro-b6-arbeitssicherheit",
      "die Arbeitssicherheit"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-ppe",
      "ср+едства индивиду+альной защ+иты"
    ],
    "de": [
      "pro-b6-schutzausruestung",
      "die Schutzausrüstung"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-maintenance",
      "техн+ическое обсл+уживание"
    ],
    "en": [
      "en:maintenance:n:main",
      "maintenance"
    ],
    "de": [
      "pro-b6-instandhaltung",
      "die Instandhaltung"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-defects",
      "устран+ение деф+ектов"
    ],
    "de": [
      "pro-b6-maengelbeseitigung",
      "die Mängelbeseitigung"
    ]
  },
  {
    "ru": [
      "ru-pro5-akt-priyomki",
      "акт приёмки"
    ],
    "de": [
      "pro-b6-abnahmeprotokoll",
      "das Abnahmeprotokoll"
    ]
  },
  {
    "ru": [
      "ru-content26-root-pridumyvat",
      "прид+умывать"
    ],
    "en": [
      "en:come-up-with:phr:main",
      "come up with"
    ]
  },
  {
    "ru": [
      "ru-content26-root-zamenyat",
      "замен+ять"
    ],
    "de": [
      "r-setzen-ersetzen",
      "ersetzen"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-judge",
      "Наск+олько я мог+у суд+ить, [X]."
    ],
    "en": [
      "en:content26:ch-judge",
      "As far as I can judge, [X]."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-rule-out",
      "Я бы не стал(а) исключ+ать [X]."
    ],
    "en": [
      "en:content26:ch-rule-out",
      "I wouldn’t rule out [X]."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-hard-to-argue",
      "С +этим тр+удно посп+орить."
    ],
    "en": [
      "en:content26:ch-hard-to-argue",
      "It’s hard to argue with that."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-aim-method",
      "Я согл+асен (согл+асна) с ц+елью, но не с м+етодом."
    ],
    "en": [
      "en:content26:ch-aim-method",
      "I agree with the aim, but not the method."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-talking-about",
      "Речь идёт о [X] или о [Y]?"
    ],
    "en": [
      "en:content26:ch-talking-about",
      "Are we talking about [X] or [Y]?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-include",
      "Что +именно вы отн+осите к [X]?"
    ],
    "en": [
      "en:content26:ch-include",
      "What exactly do you include in [X]?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-resolution",
      "Прош+у сообщ+ить, как вы план+ируете реш+ить +эту пробл+ему."
    ],
    "en": [
      "en:content26:ch-resolution",
      "Please explain how you intend to resolve this."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-deadline-passed",
      "К сожал+ению, соглас+ованный срок уж+е истёк."
    ],
    "en": [
      "en:content26:ch-deadline-passed",
      "Unfortunately, the agreed deadline has passed."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-even-though",
      "Не получ+ается [X], хот+я [Y]."
    ],
    "en": [
      "en:content26:ch-even-though",
      "I can’t [X], even though [Y]."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-only-affects",
      "Пробл+ема затр+агивает т+олько [X]."
    ],
    "en": [
      "en:content26:ch-only-affects",
      "The issue only affects [X]."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-earlier",
      "М+ожно ли сдв+инуть встр+ечу на час р+аньше?"
    ],
    "en": [
      "en:content26:ch-earlier",
      "Could we bring the meeting forward by an hour?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-local-time",
      "Подтверд+ите, пож+алуйста, м+естное вр+емя встр+ечи."
    ],
    "en": [
      "en:content26:ch-local-time",
      "Please confirm the local time of the meeting."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-prefer-email",
      "Мне уд+обнее, +если вы нап+ишете по электр+онной п+очте."
    ],
    "en": [
      "en:content26:ch-prefer-email",
      "I’d prefer it if you emailed me."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-stay-line",
      "Остав+айтесь, пож+алуйста, на л+инии."
    ],
    "en": [
      "en:content26:ch-stay-line",
      "Please stay on the line."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-following",
      "В продолж+ение н+ашего разгов+ора направл+яю [X]."
    ],
    "en": [
      "en:content26:ch-following",
      "Following our conversation, I’m sending [X]."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-please-note",
      "Прош+у прин+ять к св+едению, что [X]."
    ],
    "en": [
      "en:content26:ch-please-note",
      "Please note that [X]."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-settling-in",
      "Как ты здесь осв+аиваешься?"
    ],
    "en": [
      "en:content26:ch-settling-in",
      "How are you settling in?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-lined-up",
      "Есть как+ие-нибудь интер+есные пл+аны?"
    ],
    "en": [
      "en:content26:ch-lined-up",
      "Got anything interesting lined up?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-waiting-confirmation",
      "Жду подтвержд+ения от [X], чт+обы прод+олжить."
    ],
    "en": [
      "en:content26:ch-waiting-confirmation",
      "I’m waiting for confirmation from [X] before I can continue."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-end-day",
      "К конц+у дня рассч+итываю заверш+ить [X]."
    ],
    "en": [
      "en:content26:ch-end-day",
      "I expect to finish [X] by the end of the day."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-no-repro",
      "С +этими д+анными ош+ибка не воспроизв+одится."
    ],
    "en": [
      "en:content26:ch-no-repro",
      "I can’t reproduce the issue with this data."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-previous-version",
      "На предыд+ущей в+ерсии +этого не б+ыло."
    ],
    "en": [
      "en:content26:ch-previous-version",
      "This didn’t happen in the previous version."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-check-assumption",
      "М+ожешь пров+ерить моё предполож+ение?"
    ],
    "en": [
      "en:content26:ch-check-assumption",
      "Could you check my assumption?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-where-start",
      "Покаж+и, пож+алуйста, с чег+о нач+ать."
    ],
    "en": [
      "en:content26:ch-where-start",
      "Could you show me where to start?"
    ]
  },
  {
    "ru": [
      "ru-content26-ch-criteria",
      "Предлаг+аю снач+ала согласов+ать крит+ерии."
    ],
    "en": [
      "en:content26:ch-criteria",
      "I suggest we agree on the criteria first."
    ]
  },
  {
    "ru": [
      "ru-content26-ch-responsibility",
      "Кто возьмёт на себ+я отв+етственность за [X]?"
    ],
    "en": [
      "en:content26:ch-responsibility",
      "Who will take responsibility for [X]?"
    ]
  },
  {
    "ru": [
      "ru-content26-contract-davnost",
      "срок исков+ой д+авности"
    ],
    "en": [
      "en:pro5:statute-of-limitations",
      "statute of limitations"
    ],
    "de": [
      "pro-b5-verjaehrung",
      "die Verjährung"
    ]
  },
  {
    "ru": [
      "ru-content26-hr-recruitment",
      "подб+ор персон+ала"
    ],
    "en": [
      "en:pro6:talent-acquisition",
      "talent acquisition"
    ],
    "de": [
      "pro-b6-personalbeschaffung",
      "die Personalbeschaffung"
    ]
  },
  {
    "ru": [
      "ru-content26-med-confidentiality",
      "врач+ебная т+айна"
    ],
    "en": [
      "en:pro6:medical-confidentiality",
      "medical confidentiality"
    ],
    "de": [
      "pro-b6-schweigepflicht",
      "die Schweigepflicht"
    ]
  }
]);

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.link([
  {
    "ru": [
      "ru-telc26-beratung",
      "консульт+ация"
    ],
    "en": [
      "en:telc26:beratung",
      "consultation"
    ],
    "de": [
      "telc26-beratung",
      "die Beratung"
    ]
  },
  {
    "ru": [
      "ru-telc26-betreuung",
      "ух+од"
    ],
    "en": [
      "en:care:n:main",
      "care"
    ],
    "de": [
      "telc26-betreuung",
      "die Betreuung"
    ]
  },
  {
    "ru": [
      "ru-telc26-branche",
      "+отрасль"
    ],
    "en": [
      "en:telc26:branche",
      "industry"
    ],
    "de": [
      "telc26-branche",
      "die Branche"
    ]
  },
  {
    "ru": [
      "ru-telc26-einzelhandel",
      "р+озничная торг+овля"
    ],
    "en": [
      "en:telc26:einzelhandel",
      "retail"
    ],
    "de": [
      "telc26-einzelhandel",
      "der Einzelhandel"
    ]
  },
  {
    "ru": [
      "ru-telc26-maschinenbau",
      "машиностро+ение"
    ],
    "en": [
      "en:telc26:maschinenbau",
      "mechanical engineering"
    ],
    "de": [
      "telc26-maschinenbau",
      "der Maschinenbau"
    ]
  },
  {
    "ru": [
      "ru-telc26-lehrgang",
      "уч+ебный курс"
    ],
    "en": [
      "en:telc26:lehrgang",
      "training course"
    ],
    "de": [
      "b2-m3-lehrgang",
      "der Lehrgang"
    ]
  },
  {
    "ru": [
      "ru-telc26-vorkenntnisse",
      "предвар+ительные зн+ания"
    ],
    "en": [
      "en:telc26:vorkenntnisse",
      "prior knowledge"
    ],
    "de": [
      "b2-bildung-vorkenntnisse",
      "die Vorkenntnisse"
    ]
  },
  {
    "ru": [
      "ru-telc26-zulassung",
      "д+опуск к обуч+ению"
    ],
    "en": [
      "en:telc26:zulassung",
      "admission"
    ],
    "de": [
      "telc26-zulassung",
      "die Zulassung"
    ]
  },
  {
    "ru": [
      "ru-telc26-fachwortschatz",
      "профессион+альная л+ексика"
    ],
    "en": [
      "en:telc26:fachwortschatz",
      "specialist vocabulary"
    ],
    "de": [
      "b2-m3-fachwortschatz",
      "der Fachwortschatz"
    ]
  },
  {
    "ru": [
      "ru-telc26-beglaubigte-uebersetzung",
      "зав+еренный перев+од"
    ],
    "en": [
      "en:telc26:beglaubigte-uebersetzung",
      "certified translation"
    ],
    "de": [
      "telc26-beglaubigte-uebersetzung",
      "die beglaubigte Übersetzung"
    ]
  },
  {
    "ru": [
      "ru-telc26-einzelunternehmer",
      "индивиду+альный предприним+атель"
    ],
    "en": [
      "en:telc26:einzelunternehmer",
      "sole proprietor"
    ],
    "de": [
      "telc26-einzelunternehmer",
      "der Einzelunternehmer"
    ]
  },
  {
    "ru": [
      "ru-telc26-stellengesuch",
      "объявл+ение о п+оиске раб+оты"
    ],
    "en": [
      "en:telc26:stellengesuch",
      "job-seeking advertisement"
    ],
    "de": [
      "telc26-stellengesuch",
      "das Stellengesuch"
    ]
  },
  {
    "ru": [
      "ru-telc26-gehaltsvorstellung",
      "зарпл+атные ожид+ания"
    ],
    "en": [
      "en:it4:salary-expectation",
      "salary expectation"
    ],
    "de": [
      "pro-m4-gehaltsvorstellung",
      "die Gehaltsvorstellung"
    ]
  },
  {
    "ru": [
      "ru-telc26-arbeitsverhaeltnis",
      "трудов+ые отнош+ения"
    ],
    "en": [
      "en:telc26:arbeitsverhaeltnis",
      "employment relationship"
    ],
    "de": [
      "telc26-arbeitsverhaeltnis",
      "das Arbeitsverhältnis"
    ]
  },
  {
    "ru": [
      "ru-telc26-lohnfortzahlung",
      "сохран+ение з+аработной пл+аты"
    ],
    "en": [
      "en:telc26:lohnfortzahlung",
      "continued payment of wages"
    ],
    "de": [
      "telc26-lohnfortzahlung",
      "die Lohnfortzahlung"
    ]
  },
  {
    "ru": [
      "ru-telc26-verschwiegenheitspflicht",
      "об+язанность сохран+ять конфиденци+альность"
    ],
    "en": [
      "en:telc26:verschwiegenheitspflicht",
      "duty of confidentiality"
    ],
    "de": [
      "b2-m3-verschwiegenheitspflicht",
      "die Verschwiegenheitspflicht"
    ]
  },
  {
    "ru": [
      "ru-telc26-arbeitsablauf",
      "раб+очий проц+есс"
    ],
    "en": [
      "en:telc26:arbeitsablauf",
      "workflow"
    ],
    "de": [
      "telc26-arbeitsablauf",
      "der Arbeitsablauf"
    ]
  },
  {
    "ru": [
      "ru-telc26-anweisung",
      "указ+ание"
    ],
    "en": [
      "en:telc26:anweisung",
      "instruction"
    ],
    "de": [
      "telc26-anweisung",
      "die Anweisung"
    ]
  },
  {
    "ru": [
      "ru-telc26-verbesserungsvorschlag",
      "предлож+ение по улучш+ению"
    ],
    "en": [
      "en:telc26:verbesserungsvorschlag",
      "suggestion for improvement"
    ],
    "de": [
      "telc26-verbesserungsvorschlag",
      "der Verbesserungsvorschlag"
    ]
  },
  {
    "ru": [
      "ru-telc26-gefahrenstelle",
      "оп+асный уч+асток"
    ],
    "en": [
      "en:telc26:gefahrenstelle",
      "hazardous area"
    ],
    "de": [
      "telc26-gefahrenstelle",
      "die Gefahrenstelle"
    ]
  },
  {
    "ru": [
      "ru-telc26-stromschlag",
      "уд+ар электр+ическим т+оком"
    ],
    "en": [
      "en:telc26:stromschlag",
      "electric shock"
    ],
    "de": [
      "telc26-stromschlag",
      "der Stromschlag"
    ]
  },
  {
    "ru": [
      "ru-telc26-ersthelfer",
      "сотр+удник, об+ученный п+ервой п+омощи"
    ],
    "en": [
      "en:telc26:ersthelfer",
      "first aider"
    ],
    "de": [
      "telc26-ersthelfer",
      "der Ersthelfer"
    ]
  },
  {
    "ru": [
      "ru-telc26-evakuierung",
      "эваку+ация"
    ],
    "en": [
      "en:telc26:evakuierung",
      "evacuation"
    ],
    "de": [
      "telc26-evakuierung",
      "die Evakuierung"
    ]
  },
  {
    "ru": [
      "ru-telc26-fluchtweg",
      "путь эваку+ации"
    ],
    "en": [
      "en:telc26:fluchtweg",
      "escape route"
    ],
    "de": [
      "telc26-fluchtweg",
      "der Fluchtweg"
    ]
  },
  {
    "ru": [
      "ru-telc26-gehoerschutz",
      "ср+едства защ+иты сл+уха"
    ],
    "en": [
      "en:telc26:gehoerschutz",
      "hearing protection"
    ],
    "de": [
      "b2-m3-gehoerschutz",
      "der Gehörschutz"
    ]
  },
  {
    "ru": [
      "ru-telc26-notausgang",
      "авар+ийный в+ыход"
    ],
    "en": [
      "en:telc26:notausgang",
      "emergency exit"
    ],
    "de": [
      "telc26-notausgang",
      "der Notausgang"
    ]
  },
  {
    "ru": [
      "ru-telc26-rutschgefahr",
      "оп+асность поскользн+уться"
    ],
    "en": [
      "en:telc26:rutschgefahr",
      "slip hazard"
    ],
    "de": [
      "telc26-rutschgefahr",
      "die Rutschgefahr"
    ]
  },
  {
    "ru": [
      "ru-telc26-sammelstelle",
      "м+есто сб+ора"
    ],
    "en": [
      "en:telc26:sammelstelle",
      "assembly point"
    ],
    "de": [
      "telc26-sammelstelle",
      "die Sammelstelle"
    ]
  },
  {
    "ru": [
      "ru-telc26-schutzbrille",
      "защ+итные очк+и"
    ],
    "en": [
      "en:telc26:schutzbrille",
      "safety goggles"
    ],
    "de": [
      "telc26-schutzbrille",
      "die Schutzbrille"
    ]
  },
  {
    "ru": [
      "ru-telc26-schutzhelm",
      "защ+итная к+аска"
    ],
    "en": [
      "en:telc26:schutzhelm",
      "hard hat"
    ],
    "de": [
      "telc26-schutzhelm",
      "der Schutzhelm"
    ]
  },
  {
    "ru": [
      "ru-telc26-qualitaetssicherung",
      "обесп+ечение к+ачества"
    ],
    "en": [
      "en:telc26:qualitaetssicherung",
      "quality assurance"
    ],
    "de": [
      "telc26-qualitaetssicherung",
      "die Qualitätssicherung"
    ]
  },
  {
    "ru": [
      "ru-telc26-richtlinie",
      "руковод+ящий пр+инцип"
    ],
    "en": [
      "en:telc26:richtlinie",
      "guideline"
    ],
    "de": [
      "it-sec-richtlinie",
      "die Richtlinie"
    ]
  },
  {
    "ru": [
      "ru-telc26-vorgehen",
      "пор+ядок д+ействий"
    ],
    "en": [
      "en:telc26:vorgehen",
      "procedure"
    ],
    "de": [
      "telc26-vorgehen",
      "das Vorgehen"
    ]
  },
  {
    "ru": [
      "ru-telc26-datenblatt",
      "техн+ическое опис+ание"
    ],
    "en": [
      "en:telc26:datenblatt",
      "datasheet"
    ],
    "de": [
      "b2-m3-datenblatt",
      "das Datenblatt"
    ]
  },
  {
    "ru": [
      "ru-telc26-muster",
      "образ+ец"
    ],
    "en": [
      "en:telc26:muster",
      "sample"
    ],
    "de": [
      "telc26-muster",
      "das Muster"
    ]
  },
  {
    "ru": [
      "ru-telc26-aussteller",
      "уч+астник в+ыставки"
    ],
    "en": [
      "en:telc26:aussteller",
      "exhibitor"
    ],
    "de": [
      "telc26-aussteller",
      "der Aussteller"
    ]
  },
  {
    "ru": [
      "ru-telc26-grosshaendler",
      "опт+овый продав+ец"
    ],
    "en": [
      "en:telc26:grosshaendler",
      "wholesaler"
    ],
    "de": [
      "telc26-grosshaendler",
      "der Großhändler"
    ]
  },
  {
    "ru": [
      "ru-telc26-wettbewerber",
      "конкур+ент"
    ],
    "en": [
      "en:telc26:wettbewerber",
      "competitor"
    ],
    "de": [
      "telc26-wettbewerber",
      "der Wettbewerber"
    ]
  },
  {
    "ru": [
      "ru-content26-trade-maintenance",
      "техни́ческое обслу́живание"
    ],
    "en": [
      "en:maintenance:n:main",
      "maintenance"
    ],
    "de": [
      "it-infra-wartung",
      "die Wartung"
    ]
  },
  {
    "ru": [
      "ru-telc26-preisnachlass",
      "сниж+ение цен+ы"
    ],
    "en": [
      "en:telc26:preisnachlass",
      "price reduction"
    ],
    "de": [
      "b2-m3-preisnachlass",
      "der Preisnachlass"
    ]
  },
  {
    "ru": [
      "ru-telc26-eilzuschlag",
      "допл+ата за ср+очность"
    ],
    "en": [
      "en:telc26:eilzuschlag",
      "express surcharge"
    ],
    "de": [
      "b2-m3-eilzuschlag",
      "der Eilzuschlag"
    ]
  },
  {
    "ru": [
      "ru-telc26-nettopreis",
      "цен+а без НДС"
    ],
    "en": [
      "en:telc26:nettopreis",
      "net price"
    ],
    "de": [
      "telc26-nettopreis",
      "der Nettopreis"
    ]
  },
  {
    "ru": [
      "ru-telc26-bruttopreis",
      "цен+а с НДС"
    ],
    "en": [
      "en:telc26:bruttopreis",
      "gross price"
    ],
    "de": [
      "telc26-bruttopreis",
      "der Bruttopreis"
    ]
  },
  {
    "ru": [
      "ru-telc26-sonderwunsch",
      "ос+обое пожел+ание"
    ],
    "en": [
      "en:telc26:sonderwunsch",
      "special request"
    ],
    "de": [
      "telc26-sonderwunsch",
      "der Sonderwunsch"
    ]
  },
  {
    "ru": [
      "ru-telc26-skonto",
      "ск+идка за доср+очную опл+ату"
    ],
    "en": [
      "en:telc26:skonto",
      "early payment discount"
    ],
    "de": [
      "telc26-skonto",
      "das Skonto"
    ]
  },
  {
    "ru": [
      "ru-pro4-predoplata",
      "предопла́та"
    ],
    "en": [
      "en:telc26:vorauszahlung",
      "advance payment"
    ],
    "de": [
      "pro-new-vorauszahlung",
      "die Vorauszahlung"
    ]
  },
  {
    "ru": [
      "ru-w3-rabochiy-den",
      "рабо́чий день"
    ],
    "en": [
      "en:telc26:werktag",
      "working day"
    ],
    "de": [
      "telc26-werktag",
      "der Werktag"
    ]
  },
  {
    "ru": [
      "ru-telc26-versand",
      "отпр+авка"
    ],
    "en": [
      "en:telc26:versand",
      "dispatch"
    ],
    "de": [
      "telc26-versand",
      "der Versand"
    ]
  },
  {
    "ru": [
      "ru-telc26-artikelnummer",
      "арт+икул"
    ],
    "en": [
      "en:telc26:artikelnummer",
      "item number"
    ],
    "de": [
      "telc26-artikelnummer",
      "die Artikelnummer"
    ]
  },
  {
    "ru": [
      "ru-telc26-artikelbezeichnung",
      "наименов+ание тов+ара"
    ],
    "en": [
      "en:telc26:artikelbezeichnung",
      "item description"
    ],
    "de": [
      "telc26-artikelbezeichnung",
      "die Artikelbezeichnung"
    ]
  },
  {
    "ru": [
      "ru-telc26-bestandskunde",
      "д+ействующий кли+ент"
    ],
    "en": [
      "en:telc26:bestandskunde",
      "existing customer"
    ],
    "de": [
      "telc26-bestandskunde",
      "der Bestandskunde"
    ]
  },
  {
    "ru": [
      "ru-telc26-kundennummer",
      "н+омер кли+ента"
    ],
    "en": [
      "en:telc26:kundennummer",
      "customer number"
    ],
    "de": [
      "telc26-kundennummer",
      "die Kundennummer"
    ]
  },
  {
    "ru": [
      "ru-telc26-neukunde",
      "н+овый кли+ент"
    ],
    "en": [
      "en:telc26:neukunde",
      "new customer"
    ],
    "de": [
      "telc26-neukunde",
      "der Neukunde"
    ]
  },
  {
    "ru": [
      "ru-telc26-mahnung",
      "тр+ебование об опл+ате"
    ],
    "en": [
      "en:telc26:mahnung",
      "payment demand"
    ],
    "de": [
      "pro-b6-mahnung",
      "die Mahnung"
    ]
  },
  {
    "ru": [
      "ru-telc26-lastschrift",
      "прям+ое спис+ание"
    ],
    "en": [
      "en:telc26:lastschrift",
      "direct debit"
    ],
    "de": [
      "telc26-lastschrift",
      "die Lastschrift"
    ]
  },
  {
    "ru": [
      "ru-telc26-zahlungserinnerung",
      "напомин+ание об опл+ате"
    ],
    "en": [
      "en:telc26:zahlungserinnerung",
      "payment reminder"
    ],
    "de": [
      "telc26-zahlungserinnerung",
      "die Zahlungserinnerung"
    ]
  },
  {
    "ru": [
      "ru-telc26-nettoverdienst",
      "з+аработок п+осле в+ычетов"
    ],
    "en": [
      "en:telc26:nettoverdienst",
      "net earnings"
    ],
    "de": [
      "telc26-nettoverdienst",
      "der Nettoverdienst"
    ]
  },
  {
    "ru": [
      "ru-telc26-bruttoverguetung",
      "вознагражд+ение до в+ычетов"
    ],
    "en": [
      "en:telc26:bruttoverguetung",
      "gross remuneration"
    ],
    "de": [
      "telc26-bruttoverguetung",
      "die Bruttovergütung"
    ]
  },
  {
    "ru": [
      "ru-telc26-rentenversicherung",
      "пенси+онное страхов+ание"
    ],
    "en": [
      "en:telc26:rentenversicherung",
      "pension insurance"
    ],
    "de": [
      "telc26-rentenversicherung",
      "die Rentenversicherung"
    ]
  },
  {
    "ru": [
      "ru-telc26-pflegeversicherung",
      "страхов+ание на сл+учай потр+ебности в ух+оде"
    ],
    "en": [
      "en:telc26:pflegeversicherung",
      "long-term care insurance"
    ],
    "de": [
      "b2-m3-pflegeversicherung",
      "die Pflegeversicherung"
    ]
  },
  {
    "ru": [
      "ru-telc26-kernzeit",
      "обяз+ательные час+ы прис+утствия"
    ],
    "en": [
      "en:it2:core-hours",
      "core hours"
    ],
    "de": [
      "telc26-kernzeit",
      "die Kernzeit"
    ]
  },
  {
    "ru": [
      "ru-telc26-wechselschicht",
      "раб+ота в черед+ующиеся см+ены"
    ],
    "en": [
      "en:telc26:wechselschicht",
      "rotating shift"
    ],
    "de": [
      "telc26-wechselschicht",
      "die Wechselschicht"
    ]
  },
  {
    "ru": [
      "ru-telc26-freistellung",
      "освобожд+ение от раб+оты"
    ],
    "en": [
      "en:telc26:freistellung",
      "leave of absence"
    ],
    "de": [
      "telc26-freistellung",
      "die Freistellung"
    ]
  },
  {
    "ru": [
      "ru-pro5-otgul",
      "отгу́л"
    ],
    "en": [
      "en:telc26:freizeitausgleich",
      "time off in lieu"
    ],
    "de": [
      "telc26-freizeitausgleich",
      "der Freizeitausgleich"
    ]
  },
  {
    "ru": [
      "ru-telc26-werkvertrag",
      "догов+ор подр+яда"
    ],
    "en": [
      "en:telc26:werkvertrag",
      "contract for work and services"
    ],
    "de": [
      "b2-m3-werkvertrag",
      "der Werkvertrag"
    ]
  },
  {
    "ru": [
      "ru-w2-podrabotka",
      "подрабо́тка"
    ],
    "en": [
      "en:telc26:nebentaetigkeit",
      "secondary employment"
    ],
    "de": [
      "pro-m3-nebentaetigkeit",
      "die Nebentätigkeit"
    ]
  },
  {
    "ru": [
      "ru-r-pros-prosba",
      "про́сьба"
    ],
    "en": [
      "en:request:n:main",
      "request"
    ],
    "de": [
      "telc26-anliegen",
      "das Anliegen"
    ]
  },
  {
    "ru": [
      "ru-telc26-entgegenkommen",
      "гот+овность пойт+и навстр+ечу"
    ],
    "en": [
      "en:telc26:entgegenkommen",
      "goodwill"
    ],
    "de": [
      "telc26-entgegenkommen",
      "das Entgegenkommen"
    ]
  },
  {
    "ru": [
      "ru-telc26-buchungsbestaetigung",
      "подтвержд+ение брон+ирования"
    ],
    "en": [
      "en:telc26:buchungsbestaetigung",
      "booking confirmation"
    ],
    "de": [
      "b2-reisen-buchungsbestaetigung",
      "die Buchungsbestätigung"
    ]
  },
  {
    "ru": [
      "ru-telc26-fahrgemeinschaft",
      "совм+естные по+ездки на маш+ине"
    ],
    "en": [
      "en:telc26:fahrgemeinschaft",
      "carpool"
    ],
    "de": [
      "b2-m3-fahrgemeinschaft",
      "die Fahrgemeinschaft"
    ]
  },
  {
    "ru": [
      "ru-telc26-besprechungsraum",
      "перегов+орная к+омната"
    ],
    "en": [
      "en:telc26:besprechungsraum",
      "meeting room"
    ],
    "de": [
      "telc26-besprechungsraum",
      "der Besprechungsraum"
    ]
  },
  {
    "ru": [
      "ru-telc26-gewerbegebiet",
      "пром+ышленная з+она"
    ],
    "en": [
      "en:telc26:gewerbegebiet",
      "industrial estate"
    ],
    "de": [
      "telc26-gewerbegebiet",
      "das Gewerbegebiet"
    ]
  },
  {
    "ru": [
      "ru-telc26-tagesordnungspunkt",
      "пункт пов+естки дня"
    ],
    "en": [
      "en:it2:agenda-item",
      "agenda item"
    ],
    "de": [
      "pro-m2-tagesordnungspunkt",
      "der Tagesordnungspunkt"
    ]
  },
  {
    "ru": [
      "ru-telc26-ergebnisprotokoll",
      "проток+ол пр+инятых реш+ений"
    ],
    "en": [
      "en:telc26:ergebnisprotokoll",
      "decision minutes"
    ],
    "de": [
      "telc26-ergebnisprotokoll",
      "das Ergebnisprotokoll"
    ]
  },
  {
    "ru": [
      "ru-telc26-verlaufsprotokoll",
      "проток+ол х+ода обсужд+ения"
    ],
    "en": [
      "en:telc26:verlaufsprotokoll",
      "discussion minutes"
    ],
    "de": [
      "telc26-verlaufsprotokoll",
      "das Verlaufsprotokoll"
    ]
  },
  {
    "ru": [
      "ru-telc26-vorbesprechung",
      "предвар+ительное обсужд+ение"
    ],
    "en": [
      "en:telc26:vorbesprechung",
      "preliminary meeting"
    ],
    "de": [
      "telc26-vorbesprechung",
      "die Vorbesprechung"
    ]
  },
  {
    "ru": [
      "ru-telc26-abdeckung",
      "защ+итная кр+ышка"
    ],
    "en": [
      "en:telc26:abdeckung",
      "protective cover"
    ],
    "de": [
      "telc26-abdeckung",
      "die Abdeckung"
    ]
  },
  {
    "ru": [
      "ru-telc26-usb-anschluss",
      "USB-порт"
    ],
    "en": [
      "en:telc26:usb-anschluss",
      "USB port"
    ],
    "de": [
      "telc26-usb-anschluss",
      "der USB-Anschluss"
    ]
  },
  {
    "ru": [
      "ru-telc26-handwerklich",
      "рем+есленный"
    ],
    "en": [
      "en:telc26:handwerklich",
      "manual"
    ],
    "de": [
      "b2-m3-handwerklich",
      "handwerklich"
    ]
  },
  {
    "ru": [
      "ru-telc26-belastbar",
      "стрессоуст+ойчивый"
    ],
    "en": [
      "en:telc26:belastbar",
      "resilient"
    ],
    "de": [
      "telc26-belastbar",
      "belastbar"
    ]
  },
  {
    "ru": [
      "ru-telc26-lernbereit",
      "гот+овый уч+иться"
    ],
    "en": [
      "en:telc26:lernbereit",
      "willing to learn"
    ],
    "de": [
      "telc26-lernbereit",
      "lernbereit"
    ]
  },
  {
    "ru": [
      "ru-telc26-teamfaehig",
      "ум+еющий раб+отать в ком+анде"
    ],
    "en": [
      "en:telc26:teamfaehig",
      "able to work in a team"
    ],
    "de": [
      "telc26-teamfaehig",
      "teamfähig"
    ]
  },
  {
    "ru": [
      "ru-telc26-verhandlungssicher",
      "своб+одно влад+еющий язык+ом"
    ],
    "en": [
      "en:telc26:verhandlungssicher",
      "business fluent"
    ],
    "de": [
      "telc26-verhandlungssicher",
      "verhandlungssicher"
    ]
  },
  {
    "ru": [
      "ru-telc26-gewissenhaft",
      "доброс+овестный"
    ],
    "en": [
      "en:telc26:gewissenhaft",
      "conscientious"
    ],
    "de": [
      "telc26-gewissenhaft",
      "gewissenhaft"
    ]
  },
  {
    "ru": [
      "ru-telc26-faellig",
      "подлеж+ащий опл+ате"
    ],
    "en": [
      "en:telc26:faellig",
      "due"
    ],
    "de": [
      "telc26-faellig",
      "fällig"
    ]
  },
  {
    "ru": [
      "ru-telc26-fehlerhaft",
      "ош+ибочный"
    ],
    "en": [
      "en:telc26:fehlerhaft",
      "faulty"
    ],
    "de": [
      "telc26-fehlerhaft",
      "fehlerhaft"
    ]
  },
  {
    "ru": [
      "ru-telc26-angemessen",
      "ум+естный"
    ],
    "en": [
      "en:telc26:angemessen",
      "appropriate"
    ],
    "de": [
      "telc26-angemessen",
      "angemessen"
    ]
  },
  {
    "ru": [
      "ru-telc26-absolvieren",
      "пройт+и"
    ],
    "en": [
      "en:telc26:absolvieren",
      "complete"
    ],
    "de": [
      "b2-m3-absolvieren",
      "absolvieren"
    ]
  },
  {
    "ru": [
      "ru-telc26-protokollieren",
      "протокол+ировать"
    ],
    "en": [
      "en:telc26:protokollieren",
      "take minutes"
    ],
    "de": [
      "it-sec-protokollieren",
      "protokollieren"
    ]
  },
  {
    "ru": [
      "ru-telc26-nachvollziehen",
      "пон+ять"
    ],
    "en": [
      "en:telc26:nachvollziehen",
      "follow the reasoning"
    ],
    "de": [
      "b2-m3-nachvollziehen",
      "nachvollziehen"
    ]
  },
  {
    "ru": [
      "ru-telc26-widersprechen",
      "противор+ечить"
    ],
    "en": [
      "en:telc26:widersprechen",
      "contradict"
    ],
    "de": [
      "r-sprechen-widersprechen",
      "widersprechen"
    ]
  },
  {
    "ru": [
      "ru-telc26-zustimmen",
      "соглаш+аться"
    ],
    "en": [
      "en:agree:v:main",
      "agree"
    ],
    "de": [
      "b2-recht-zustimmen",
      "zustimmen"
    ]
  },
  {
    "ru": [
      "ru-w4-retain",
      "удержа́ть"
    ],
    "en": [
      "en:telc26:einbehalten",
      "withhold"
    ],
    "de": [
      "b2-m3-einbehalten",
      "einbehalten"
    ]
  },
  {
    "ru": [
      "ru-telc26-abbuchen",
      "сп+исывать со счёта"
    ],
    "en": [
      "en:telc26:abbuchen",
      "debit"
    ],
    "de": [
      "telc26-abbuchen",
      "abbuchen"
    ]
  },
  {
    "ru": [
      "ru-telc26-begleichen",
      "оплат+ить"
    ],
    "en": [
      "en:telc26:begleichen",
      "settle"
    ],
    "de": [
      "telc26-begleichen",
      "begleichen"
    ]
  },
  {
    "ru": [
      "ru-telc26-einrasten",
      "защёлкиваться"
    ],
    "en": [
      "en:telc26:einrasten",
      "click into place"
    ],
    "de": [
      "telc26-einrasten",
      "einrasten"
    ]
  },
  {
    "ru": [
      "ru-r-da-peredavat",
      "передава́ть"
    ],
    "en": [
      "en:telc26:ausrichten",
      "pass on"
    ],
    "de": [
      "telc26-ausrichten",
      "ausrichten"
    ]
  },
  {
    "ru": [
      "ru-telc26-verallgemeinern",
      "обобщ+ать"
    ],
    "en": [
      "en:telc26:verallgemeinern",
      "generalise"
    ],
    "de": [
      "telc26-verallgemeinern",
      "verallgemeinern"
    ]
  },
  {
    "ru": [
      "ru-telc26-bedingungen",
      "усл+овия пост+авки и опл+аты"
    ],
    "en": [
      "en:telc26:bedingungen",
      "terms of delivery and payment"
    ],
    "de": [
      "telc26-bedingungen",
      "die Liefer- und Zahlungsbedingungen"
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-rechtzeitig-bescheid",
      "Пож+алуйста, сообщ+ите нам зар+анее."
    ],
    "en": [
      "en:telc26:ch-rechtzeitig-bescheid",
      "Please let us know in good time."
    ],
    "de": [
      "telc26-ch-rechtzeitig-bescheid",
      "Bitte geben Sie uns rechtzeitig Bescheid."
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-rechnung-begleichen",
      "Я оплач+у счёт до [д+ата]."
    ],
    "en": [
      "en:telc26:ch-rechnung-begleichen",
      "I will settle the invoice by [date]."
    ],
    "de": [
      "telc26-ch-rechnung-begleichen",
      "Ich werde die Rechnung bis [Datum] begleichen."
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-schriftform",
      "Для [X] тр+ебуется п+исьменная ф+орма."
    ],
    "en": [
      "en:telc26:ch-schriftform",
      "[X] must be in writing."
    ],
    "de": [
      "telc26-ch-schriftform",
      "[X] bedarf der Schriftform."
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-ab-werk",
      "с зав+ода"
    ],
    "en": [
      "en:telc26:ch-ab-werk",
      "ex works"
    ],
    "de": [
      "telc26-ch-ab-werk",
      "ab Werk"
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-nachfrage",
      "По запр+осу мы м+ожем напр+авить вам [X]."
    ],
    "en": [
      "en:telc26:ch-nachfrage",
      "On request, we can send you [X]."
    ],
    "de": [
      "telc26-ch-nachfrage",
      "Auf Nachfrage senden wir Ihnen [X]."
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-gegenvorschlag",
      "Я хот+ел(а) бы предлож+ить встр+ечный вар+иант."
    ],
    "en": [
      "en:telc26:ch-gegenvorschlag",
      "I’d like to make a counterproposal."
    ],
    "de": [
      "telc26-ch-gegenvorschlag",
      "Ich möchte einen Gegenvorschlag machen."
    ]
  },
  {
    "ru": [
      "ru-telc26-ch-verstaendnis",
      "Пр+осим отнест+ись с поним+анием."
    ],
    "en": [
      "en:telc26:ch-verstaendnis",
      "We ask for your understanding."
    ],
    "de": [
      "telc26-ch-verstaendnis",
      "Wir bitten um Ihr Verständnis."
    ]
  }
]);
