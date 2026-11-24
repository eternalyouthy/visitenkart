/* ENGLISH Professional · Bureaucracy & Legal tracks (8 topics × 10 new B2–C2 cards = 80 new + 8 reused memberships).
 * Checked against full English pack inventory for zero duplicates. Original examples and bilingual notes (ru + de). */
(function () {
  'use strict';
  var P = GT._target || GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };
    return {
      id: 'en:pro5:' + id, pos: pos, t: t, level: level,
      ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null
    };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'it', topic); });
    GT.register({ tab: 'it', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  /* ── 01 · Public Offices & Permits (10 new + 1 reused) ───────────────────── */
  GT.addMember('en:more:residence-permit', 'it', 'bureau_offices');
  reg('bureau_offices', [
    W('administrative-decision', 'noun', 'administrative decision', 'C1', 'административное решение, постановление ведомства', 'der Verwaltungsbescheid',
      ex('Every [[administrative decision]] must state the legal basis and how to contest it.', 'Каждое административное решение должно содержать правовое основание и порядок обжалования.', 'Jeder Verwaltungsbescheid muss die Rechtsgrundlage und die Rechtsbehelfsbelehrung enthalten.'),
      ['Официальный письменный вердикт государственного органа (соответствует нем. Bescheid).', 'Entspricht dem deutschen Verwaltungsakt bzw. Bescheid einer Behörde.']),
    W('jurisdiction', 'noun', 'jurisdiction', 'C1', 'подсудность, юрисдикция, компетенция органа', 'die Zuständigkeit, die Gerichtsbarkeit',
      ex('This municipal office has no [[jurisdiction]] over federal tax disputes.', 'Это муниципальное ведомство не обладает юрисдикцией по федеральным налоговым спорам.', 'Diese kommunale Behörde hat keine Zuständigkeit für Bundessteuerstreitigkeiten.'),
      ['Употребляется с предлогом over: have jurisdiction over something («обладать компетенцией в отношении…»).', 'Steht meist mit over: have jurisdiction over a matter / territory.']),
    W('statutory-deadline', 'noun', 'statutory deadline', 'C1', 'установленный законом пресекательный срок', 'die gesetzliche Frist',
      ex('Missing the [[statutory deadline]] usually bars the authority from reviewing your case.', 'Пропуск установленного законом срока обычно лишает ведомство права пересмотреть дело.', 'Das Versäumen der gesetzlichen Frist schließt eine erneute Prüfung meist aus.'),
      ['Statutory означает закреплённый именно в законе, а не внутренним правилом компании.', 'Statutory bezeichnet eine direkt durch Gesetz vorgegebene, nicht verhandelbare Frist.']),
    W('notarised-copy', 'noun', 'notarised copy', 'C1', 'нотариально заверенная копия', 'die beglaubigte Kopie',
      ex('Please attach a [[notarised copy]] of your university degree rather than sending the original.', 'Приложите нотариально заверенную копию диплома вместо того, чтобы отправлять оригинал.', 'Bitte fügen Sie eine beglaubigte Kopie Ihres Abschlusses bei, statt das Original einzusenden.'),
      ['В британском английском пишется notarised, в американском — notarized.', 'BE: notarised, AE: notarized; in Ämtern oft für Zeugnisse und Urkunden verlangt.']),
    W('discretionary-power', 'noun', 'discretionary power', 'C2', 'дискреционное полномочие, свобода усмотрения', 'der Ermessensspielraum',
      ex('Licensing officers hold [[discretionary power]] to grant hardship exceptions.', 'Сотрудники лицензионного отдела обладают правом усмотрения делать исключения в трудных случаях.', 'Sachbearbeiter haben einen Ermessensspielraum, um Härtefallausnahmen zu genehmigen.'),
      ['Означает свободу выбора решения в рамках закона (Ermessen), в отличие от жёсткой обязанности.', 'Beschreibt behördliches Ermessen innerhalb des gesetzlichen Rahmens.']),
    W('administrative-appeal', 'noun', 'administrative appeal', 'C1', 'административная жалоба, досудебное обжалование', 'der Widerspruch (Verwaltungsrecht)',
      ex('Filing an [[administrative appeal]] suspends enforcement until the review board rules.', 'Подача административной жалобы приостанавливает исполнение решения до вердикта комиссии.', 'Das Einlegen eines Widerspruchs schiebt die Vollstreckung bis zur Entscheidung auf.'),
      ['Глаголы: file / lodge an administrative appeal against a ruling.', 'Übliche Verben: file / lodge an administrative appeal (Widerspruch einlegen).']),
    W('exemption', 'noun', 'exemption', 'C1', 'освобождение (от налога, пошлины, требования)', 'die Befreiung, die Ausnahmeregelung',
      ex('Non-profit organisations may apply for a fee [[exemption]] under section 4.', 'Некоммерческие организации могут подать заявление об освобождении от сбора по статье 4.', 'Gemeinnützige Vereine können nach Paragraf 4 eine Gebührenbefreiung beantragen.'),
      ['Предлоги: exemption from something (от чего-либо); прилагательное — exempt.', 'Präposition: exemption from + Nomen; zugehöriges Adjektiv: exempt (befreit).']),
    W('clearance', 'noun', 'clearance', 'C1', 'официальное разрешение, допуск, согласование', 'die Freigabe, die Unbedenklichkeitsbescheinigung',
      ex('Construction cannot begin until environmental [[clearance]] arrives from the ministry.', 'Строительство не может начаться, пока из министерства не придёт экологическое разрешение.', 'Der Bau darf erst beginnen, wenn die umweltrechtliche Freigabe des Ministeriums vorliegt.'),
      ['Встречается в сочетаниях security clearance (допуск к гостайне), tax clearance и customs clearance.', 'Typische Verbindungen: security clearance, tax clearance, customs clearance.']),
    W('stipulate', 'verb', 'stipulate', 'C1', 'прямо оговаривать, предписывать в норме', 'festlegen, vorschreiben',
      ex('The municipal code [[stipulates]] that noise permits expire after ninety days.', 'Муниципальный кодекс предписывает, что разрешения на шум действуют не более девяноста дней.', 'Die Gemeindeordnung schreibt vor, dass Lärmgenehmigungen nach neunzig Tagen ablaufen.'),
      ['Формальный юридический глагол для чётко прописанных условий: stipulate that…', 'Gehobenes Amts- und Vertragsenglisch: stipulate that + Nebensatz.']),
    W('revoke', 'verb', 'revoke', 'C1', 'аннулировать, отзывать (разрешение, статус)', 'widerrufen, entziehen',
      ex('The regulator may [[revoke]] an operating licence if safety checks fail twice.', 'Регулятор вправе отозвать лицензию на деятельность после двух проваленных проверок безопасности.', 'Die Aufsichtsbehörde kann eine Betriebserlaubnis bei zweifachem Sicherheitsmangel widerrufen.'),
      ['Антоним — grant / issue; существительное — revocation (отзыв).', 'Gegenteil: grant / issue; Nomen: revocation (der Widerruf).'])
  ]);

  /* ── 02 · Taxes, Payroll & Social Security (10 new + 1 reused) ───────────── */
  GT.addMember('en:m3:tax-return', 'it', 'bureau_tax');
  reg('bureau_tax', [
    W('withholding-tax', 'noun', 'withholding tax', 'C1', 'налог, удерживаемый у источника выплаты', 'die Quellensteuer',
      ex('Cross-border dividends are normally subject to a fifteen per cent [[withholding tax]].', 'Трансграничные дивиденды обычно облагаются пятнадцатипроцентным налогом у источника.', 'Grenzüberschreitende Dividenden unterliegen meist einer Quellensteuer von fünfzehn Prozent.'),
      ['Налог удерживает плательщик (работодатель или банк) ещё до перевода суммы получателю.', 'Wird direkt vom Auszahlenden einbehalten, noch bevor der Empfänger den Betrag erhält.']),
    W('tax-assessment', 'noun', 'tax assessment', 'C1', 'налоговое уведомление; исчисление налога', 'der Steuerbescheid, die Steuerfestsetzung',
      ex('Check your annual [[tax assessment]] carefully in case work expenses were omitted.', 'Внимательно проверьте годовое налоговое уведомление на случай, если не учли рабочие расходы.', 'Prüfen Sie Ihren jährlichen Steuerbescheid genau, falls Werbungskosten übersehen wurden.'),
      ['Итоговый документ от налоговой службы после обработки декларации (Steuerbescheid).', 'Der amtliche Bescheid des Finanzamts nach Prüfung der Steuererklärung.']),
    W('deductible', 'adj', 'deductible', 'C1', 'подлежащий вычету из налогооблагаемой базы', 'steuerlich absetzbar',
      ex('Home-office equipment is fully [[deductible]] only if used almost exclusively for work.', 'Оборудование для домашнего офиса полностью подлежит вычету, лишь если используется почти исключительно для работы.', 'Arbeitsmittel fürs Homeoffice sind nur voll absetzbar, wenn sie fast ausschließlich beruflich genutzt werden.'),
      ['Часто с наречиями: tax-deductible, fully deductible.', 'Häufig kombiniert zu tax-deductible (steuerlich absetzbar).']),
    W('tax-allowance', 'noun', 'tax allowance', 'C1', 'необлагаемый налогом минимум, налоговая льгота', 'der Steuerfreibetrag',
      ex('Part-time earnings below the basic [[tax allowance]] remain free of income tax.', 'Заработки от подработки ниже базового необлагаемого минимума не облагаются подоходным налогом.', 'Einkünfte unterhalb des Grundfreibetrags bleiben einkommensteuerfrei.'),
      ['Британский термин для необлагаемой суммы; в США чаще говорят tax deduction / standard deduction.', 'Britisches Pendant zum deutschen Grundfreibetrag (US meist standard deduction).']),
    W('social-security-contribution', 'noun', 'social security contribution', 'B2', 'взнос на социальное страхование', 'der Sozialversicherungsbeitrag',
      ex('Employers and staff split monthly [[social security contributions]] down the middle.', 'Работодатели и сотрудники делят ежемесячные взносы на соцстрахование пополам.', 'Arbeitgeber und Beschäftigte teilen sich die monatlichen Sozialversicherungsbeiträge hälftig.'),
      ['Обычно во множественном числе; охватывает пенсионное, медицинское и страхование по безработице.', 'Meist im Plural gebraucht; umfasst Renten-, Kranken- und Arbeitslosenversicherung.']),
    W('tax-bracket', 'noun', 'tax bracket', 'B2', 'налоговый разряд, категория ставки налога', 'die Progressionsstufe, die Steuerstufe',
      ex('A modest raise pushed his income into a higher [[tax bracket]], though only on the top slice.', 'Небольшая прибавка перевела его доход в более высокий налоговый разряд, но лишь в верхней части.', 'Eine leichte Gehaltserhöhung brachte ihn in eine höhere Progressionsstufe — allerdings nur für den Spitzenbetrag.'),
      ['В прогрессивной шкале повышенная ставка действует только на сумму сверх порога разряда.', 'Bei progressiver Besteuerung gilt der höhere Satz nur für den Betrag oberhalb der Schwelle.']),
    W('back-taxes', 'noun', 'back taxes', 'C1', 'недоимка по налогам за прошлые периоды', 'die Steuernachzahlung, die Steuerrückstände (Pl.)',
      ex('After misclassifying contractors, the firm had to pay three years of [[back taxes]] plus interest.', 'После неверной классификации подрядчиков фирме пришлось доплатить налоги за три года с пенями.', 'Nach falscher Einstufung von freien Mitarbeitern musste die Firma drei Jahre Steuern samt Zinsen nachzahlen.'),
      ['Всегда во множественном числе (uncountable plural): owe back taxes.', 'Immer im Plural (back taxes); typisch: owe / pay back taxes.']),
    W('payroll', 'noun', 'payroll', 'B2', 'расчёт заработной платы; штат на выплатах', 'die Lohnbuchhaltung, die Gehaltsliste',
      ex('The finance team runs [[payroll]] on the twenty-fifth of every month.', 'Финансовый отдел проводит начисление зарплаты двадцать пятого числа каждого месяца.', 'Das Finanzteam rechnet die Löhne und Gehälter jeden Monat am fünfundzwanzigsten ab.'),
      ['On the payroll — числиться в штате; run payroll — проводить расчёт зарплат.', 'On the payroll = fest angestellt sein; run payroll = Lohnabrechnung durchführen.']),
    W('fiscal-year', 'noun', 'fiscal year', 'C1', 'финансовый (фискальный) год', 'das Geschäftsjahr, das Fiskaljahr',
      ex('Our [[fiscal year]] runs from April to March rather than following the calendar.', 'Наш финансовый год длится с апреля по март, а не по календарному году.', 'Unser Geschäftsjahr läuft von April bis März statt nach dem Kalenderjahr.'),
      ['12-месячный отчётный период; в британских госорганах также financial year.', 'Zwölfmonatiger Abrechnungszeitraum für Steuern und Bilanz; verkürzt oft FY.']),
    W('tax-audit', 'noun', 'tax audit', 'C1', 'налоговая проверка, выездная ревизия', 'die Betriebsprüfung, die Steuerprüfung',
      ex('Complete travel receipts make surviving a random [[tax audit]] far less stressful.', 'Полный комплект командировочных чеков делает случайную налоговую проверку куда менее нервной.', 'Vollständige Reisebelege machen eine stichprobenartige Betriebsprüfung deutlich entspannter.'),
      ['Глагол — conduct / undergo / trigger a tax audit.', 'Typische Verben: conduct / undergo / trigger a tax audit.'])
  ]);

  /* ── 03 · Official Correspondence & Records (10 new) ────────────────────── */
  reg('bureau_docs', [
    W('power-of-attorney', 'noun', 'power of attorney', 'C1', 'доверенность (официальное полномочие)', 'die Vollmacht',
      ex('My sister collected the passport on my behalf using a signed [[power of attorney]].', 'Сестра получила паспорт вместо меня по подписанной доверенности.', 'Meine Schwester holte den Reisepass mit einer unterschriebenen Vollmacht für mich ab.'),
      ['Обозначает сам документ или право действовать от чужого имени (не переводится как «власть адвоката»!).', 'Bezeichnet die rechtsgeschäftliche Vertretungsmacht — attorney bedeutet hier „Bevollmächtigter“.']),
    W('registered-post', 'noun', 'registered post', 'B2', 'заказное почтовое отправление', 'das Einschreiben',
      ex('Send contract cancellations by [[registered post]] so you have dated proof of delivery.', 'Отправляйте расторжение договора заказным письмом, чтобы иметь доказательство даты вручения.', 'Senden Sie Kündigungen per Einschreiben, damit Sie einen datierten Zustellnachweis haben.'),
      ['В США чаще говорят certified mail; в Великобритании — registered post / recorded delivery.', 'BE: registered post / recorded delivery; AE: certified mail.']),
    W('reference-number', 'noun', 'reference number', 'B2', 'регистрационный / входящий номер дела', 'das Aktenzeichen, die Vorgangsnummer',
      ex('Always quote your [[reference number]] when replying to letters from the immigration office.', 'Всегда указывайте регистрационный номер при ответе на письма из ведомства по делам иностранцев.', 'Geben Sie bei Antworten an die Ausländerbehörde stets Ihr Aktenzeichen an.'),
      ['В официальных письмах без этого номера обращение часто не могут сопоставить с делом.', 'Ohne dieses Zeichen lässt sich ein Schreiben oft keiner laufenden Akte zuordnen.']),
    W('dunning-notice', 'noun', 'dunning notice', 'C2', 'официальное предупреждение об оплате, претензия', 'die Mahnung, die Zahlungserinnerung',
      ex('Before handing the overdue account to debt collectors, the supplier issued a final [[dunning notice]].', 'Прежде чем передать просроченный долг коллекторам, поставщик направил финальное требование об оплате.', 'Bevor die Forderung ans Inkasso ging, schickte der Lieferant eine letzte Mahnung.'),
      ['Специальный финансово-бюрократический термин (нем. Mahnung); в обычной речи также payment reminder.', 'Fachbegriff des Mahnwesens; im Alltag oft payment reminder, formeller: dunning letter.']),
    W('retention-period', 'noun', 'retention period', 'C1', 'обязательный срок хранения документов или данных', 'die Aufbewahrungsfrist',
      ex('Commercial invoices are subject to a ten-year statutory [[retention period]].', 'На коммерческие счета распространяется установленный законом десятилетний срок хранения.', 'Für Geschäftsrechnungen gilt eine gesetzliche Aufbewahrungsfrist von zehn Jahren.'),
      ['Используется и в бухгалтерии, и в GDPR/комплаенсе (удаление данных по истечении срока).', 'Gilt sowohl in der Buchhaltung als auch im Datenschutz (Löschpflicht nach Fristablauf).']),
    W('certified-extract', 'noun', 'certified extract', 'C1', 'заверенная выписка (из реестра или акта)', 'der beglaubigte Auszug',
      ex('The bank requested a [[certified extract]] from the commercial register dated within two weeks.', 'Банк запросил заверенную выписку из торгового реестра не старше двух недель.', 'Die Bank verlangte einen beglaubigten Handelsregisterauszug, nicht älter als zwei Wochen.'),
      ['Например, extract from the commercial register (Handelsregisterauszug) или birth register.', 'Typisch: certified extract from the commercial register (Handelsregisterauszug).']),
    W('affidavit', 'noun', 'affidavit', 'C2', 'письменное показание под присягой', 'die eidesstattliche Versicherung',
      ex('When original records were lost in a flood, he submitted a sworn [[affidavit]] instead.', 'Когда оригиналы документов погибли при наводнении, он подал взамен письменное заявление под присягой.', 'Als die Originalakten bei einer Flut verloren gingen, reichte er eine eidesstattliche Versicherung ein.'),
      ['Латинизм (буквально «он засвидетельствовал»); ложь в affidavit преследуется как лжесвидетельство.', 'Lateinischer Fachbegriff; falsche Angaben in einem Affidavit sind strafbar.']),
    W('acknowledgement-of-receipt', 'noun', 'acknowledgement of receipt', 'C1', 'уведомление / расписка о получении', 'die Empfangsbestätigung',
      ex('Wait for the automated [[acknowledgement of receipt]] to confirm your application arrived intact.', 'Дождитесь автоматического подтверждения получения, чтобы убедиться, что заявление дошло целиком.', 'Warten Sie auf die automatische Empfangsbestätigung, damit der vollständige Eingang sicher ist.'),
      ['Важно в бюрократии как доказательство соблюдения срока подачи.', 'Wichtig im Verwaltungsverfahren als Nachweis für die fristgerechte Zustellung.']),
    W('enclosed', 'adj', 'enclosed', 'B2', 'приложенный в конверт / пакет документов', 'anbei, beigefügt',
      ex('Please find the signed declaration [[enclosed]] along with copies of both IDs.', 'Просим принять приложенную подписанную декларацию вместе с копиями обоих удостоверений.', 'Anbei erhalten Sie die unterschriebene Erklärung samt Kopien beider Ausweise.'),
      ['Для бумажных писем — enclosed (отсюда аббревиатура Enc. внизу письма); для e-mail — attached.', 'Für Postsendungen: enclosed (Abk. Enc.); für E-Mails sagt man attached.']),
    W('file-a-claim', 'verb', 'file a claim', 'C1', 'подать официальное требование, заявление или иск', 'einen Anspruch anmelden, Klage einreichen',
      ex('Passengers have up to two years to [[file a claim]] for cancelled-flight compensation.', 'У пассажиров есть до двух лет, чтобы подать требование о компенсации за отменённый рейс.', 'Fluggäste haben bis zu zwei Jahre Zeit, einen Entschädigungsanspruch geltend zu machen.'),
      ['Универсальный оборот для страховых, трудовых, судебных и транспортных требований.', 'Feste Kollokation im Versicherungs-, Arbeits- und Prozessrecht.'])
  ]);

  /* ── 04 · Contracts & Civil Law (10 new + 2 reused) ─────────────────────── */
  GT.addMember('en:it4:non-disclosure-agreement', 'it', 'legal_contracts');
  GT.addMember('en:it3:liability', 'it', 'legal_contracts');
  reg('legal_contracts', [
    W('breach-of-contract', 'noun', 'breach of contract', 'C1', 'нарушение условий договора', 'der Vertragsbruch, die Vertragsverletzung',
      ex('Subcontracting client data without written approval constitutes a material [[breach of contract]].', 'Передача данных клиента субподрядчику без письменного согласия является существенным нарушением договора.', 'Die Weitergabe von Kundendaten an Subunternehmer ohne schriftliche Zustimmung stellt einen wesentlichen Vertragsbruch dar.'),
      ['Существенное нарушение — material breach of contract.', 'Schwerwiegender Fall: material breach of contract (wesentliche Vertragsverletzung).']),
    W('indemnify', 'verb', 'indemnify', 'C2', 'возмещать убытки, ограждать от претензий третьих лиц', 'schadlos halten, freistellen',
      ex('The vendor agrees to [[indemnify]] the client against third-party patent claims.', 'Поставщик обязуется оградить клиента от патентных претензий третьих лиц и возместить ущерб.', 'Der Anbieter verpflichtet sich, den Kunden von Patentansprüchen Dritter freizustellen.'),
      ['Конструкция: indemnify someone against / from losses or claims; существительное — indemnity.', 'Muster: indemnify somebody against claims (von Ansprüchen Dritter freistellen).']),
    W('force-majeure', 'noun', 'force majeure', 'C1', 'форс-мажор, обстоятельства непреодолимой силы', 'die höhere Gewalt',
      ex('Port closures due to extreme storms triggered the [[force majeure]] clause.', 'Закрытие портов из-за экстремальных штормов привело в действие оговорку о форс-мажоре.', 'Hafenschließungen durch schwere Stürme lösten die Klausel über höhere Gewalt aus.'),
      ['Заимствовано из французского права; освобождает от ответственности за задержку вне контроля сторон.', 'Aus dem Französischen; befreit bei unabwendbaren Ereignissen vorübergehend von der Leistungspflicht.']),
    W('liquidated-damages', 'noun', 'liquidated damages', 'C2', 'заранее согласованная договорная неустойка', 'der pauschalisierte Schadensersatz, die Vertragsstrafe',
      ex('Late handover triggers [[liquidated damages]] capped at five per cent of the contract value.', 'Просрочка сдачи влечёт заранее согласованную неустойку, ограниченную пятью процентами суммы договора.', 'Eine verspätete Übergabe löst einen pauschalierten Schadensersatz von höchstens fünf Prozent des Vertragswerts aus.'),
      ['Всегда во множественном числе, но глагол может согласовываться как с суммой; отличается от penalty («карательный штраф»).', 'Immer im Plural; vorab vereinbarte Schadenspauschale (im Common Law streng von unzulässigen „penalties“ abgegrenzt).']),
    W('statute-of-limitations', 'noun', 'statute of limitations', 'C1', 'срок исковой давности', 'die Verjährungsfrist',
      ex('Wait too long to sue and the [[statute of limitations]] will extinguish your claim.', 'Если затянуть с иском, срок исковой давности погасит ваше требование.', 'Wer zu lange mit einer Klage wartet, verliert den Anspruch durch Ablauf der Verjährungsfrist.'),
      ['В гражданском праве означает срок, по истечении которого требование нельзя взыскать через суд.', 'Frist, nach deren Ablauf ein Anspruch gerichtlich nicht mehr durchsetzbar ist.']),
    W('severability-clause', 'noun', 'severability clause', 'C2', 'оговорка о делимости (автономности) положений договора', 'die salvatorische Klausel',
      ex('A [[severability clause]] keeps the rest of the agreement intact if one term proves invalid.', 'Оговорка о делимости сохраняет силу остального договора, если один из пунктов признан недействительным.', 'Eine salvatorische Klausel erhält den übrigen Vertrag wirksam, falls eine Einzelbestimmung unwirksam ist.'),
      ['Соответствует немецкой salvatorische Klausel почти в каждом коммерческом договоре.', 'Standardklausel am Vertragsende, entsprechend der deutschen salvatorischen Klausel.']),
    W('warranty', 'noun', 'warranty', 'B2', 'гарантия, заверение качества (по договору или закону)', 'die Gewährleistung, die Garantie',
      ex('The supplier gave a two-year [[warranty]] covering structural defects in every unit.', 'Поставщик предоставил двухлетнюю гарантию на конструктивные дефекты каждого изделия.', 'Der Lieferant gab eine zweijährige Gewährleistung auf Konstruktionsfehler jedes Geräts.'),
      ['Under warranty — на гарантии; в праве также express vs implied warranty.', 'Under warranty = noch innerhalb der Garantiezeit; oft auch in Verträgen als Zusicherung (representation & warranty).']),
    W('termination-for-cause', 'noun', 'termination for cause', 'C1', 'расторжение договора ввиду существенного нарушения / уважительной причины', 'die außerordentliche Kündigung aus wichtigem Grund',
      ex('Repeated failure to pay licences entitles us to immediate [[termination for cause]].', 'Систематическая неуплата за лицензии даёт нам право на немедленное расторжение по веской причине.', 'Wiederholter Zahlungsverzug berechtigt uns zur fristlosen Kündigung aus wichtigem Grund.'),
      ['Антоним — termination for convenience (расторжение без указания причины с уведомлением).', 'Gegenstück: termination for convenience (ordentliche Kündigung ohne besonderen Grund).']),
    W('out-of-court-settlement', 'noun', 'out-of-court settlement', 'C1', 'досудебное / внесудебное мировое соглашение', 'der außergerichtliche Vergleich',
      ex('Both companies reached an [[out-of-court settlement]] to avoid years of costly litigation.', 'Обе компании заключили внесудебное мировое соглашение, чтобы избежать многолетних судебных тяжб.', 'Beide Unternehmen einigten sich außergerichtlich, um jahrelange Prozesskosten zu vermeiden.'),
      ['Частые глаголы: reach / negotiate / agree to an out-of-court settlement.', 'Typische Verben: reach / negotiate / accept an out-of-court settlement.']),
    W('legally-enforceable', 'adj', 'legally enforceable', 'C1', 'обладающий юридической силой и подлежащий принудительному исполнению', 'rechtsverbindlich, gerichtlich durchsetzbar',
      ex('An unsigned letter of intent is rarely [[legally enforceable]] as a full supply contract.', 'Неподписанное письмо о намерениях редко имеет юридическую силу полноценного договора поставки.', 'Eine nicht unterzeichnete Absichtserklärung ist selten als vollwertiger Liefervertrag einklagbar.'),
      ['Важное различие: не просто lawful («законный»), а именно защищаемый судом (enforceable).', 'Betont nicht nur Rechtmäßigkeit, sondern die tatsächliche Einklagbarkeit vor Gericht.'])
  ]);

  /* ── 05 · Copyright & Intellectual Property (10 new + 1 reused) ─────────── */
  GT.addMember('en:it4:usage-rights', 'it', 'legal_ip');
  reg('legal_ip', [
    W('intellectual-property', 'noun', 'intellectual property', 'B2', 'интеллектуальная собственность', 'das geistige Eigentum',
      ex('All [[intellectual property]] created during employment remains vested in the company.', 'Вся интеллектуальная собственность, созданная за время работы по найму, принадлежит компании.', 'Sämtliches während des Arbeitsverhältnisses geschaffene geistige Eigentum steht dem Unternehmen zu.'),
      ['Обычно сокращается до IP (IP rights, IP portfolio); охватывает авторское право, патенты и товарные знаки.', 'Meist als IP abgekürzt; umfasst Urheberrecht, Patente, Marken und Designs.']),
    W('copyright-infringement', 'noun', 'copyright infringement', 'C1', 'нарушение авторских прав', 'die Urheberrechtsverletzung',
      ex('Embedding unlicensed stock photos on a commercial site counts as [[copyright infringement]].', 'Размещение нелицензированных стоковых фото на коммерческом сайте считается нарушением авторских прав.', 'Das Einbinden unlizenzierter Stockfotos auf einer Firmenwebsite gilt als Urheberrechtsverletzung.'),
      ['Глагол — infringe copyright (обратите внимание: без предлога on в современном юрязыке).', 'Verb: infringe copyright / commit copyright infringement.']),
    W('cease-and-desist-letter', 'noun', 'cease-and-desist letter', 'C1', 'официальная претензия о прекращении нарушения', 'die Abmahnung, die Unterlassungsaufforderung',
      ex('The studio received a [[cease-and-desist letter]] demanding they pull the lookalike logo immediately.', 'Студия получила досудебную претензию с требованием немедленно убрать похожий логотип.', 'Das Studio erhielt eine Abmahnung mit der Aufforderung, das verwechslungsfähige Logo sofort zu entfernen.'),
      ['Юридическое требование прекратить нарушение до обращения в суд (соответствует нем. Abmahnung).', 'Entspricht weitgehend der deutschen Abmahnung vor einer gerichtlichen Klage.']),
    W('trademark', 'noun', 'trademark', 'B2', 'товарный знак, зарегистрированный бренд', 'die Marke, das Warenzeichen',
      ex('Before launching across Europe, check whether the product name conflicts with a registered [[trademark]].', 'Перед запуском в Европе проверьте, не конфликтует ли название продукта с чужим товарным знаком.', 'Prüfen Sie vor dem Europastart, ob der Produktname mit einer eingetragenen Marke kollidiert.'),
      ['Символ ™ — незарегистрированный знак, ® — зарегистрированный (registered trademark).', '™ steht für beanspruchte Zeichen, ® ausschließlich für amtlich eingetragene Marken.']),
    W('trade-secret', 'noun', 'trade secret', 'C1', 'коммерческая тайна, секрет производства', 'das Geschäftsgeheimnis',
      ex('Pricing formulas and customer lists are protected as a [[trade secret]], not via patents.', 'Формулы ценообразования и списки клиентов охраняются как коммерческая тайна, а не патентами.', 'Preiskalkulationen und Kundenlisten werden als Geschäftsgeheimnis geschützt, nicht durch Patente.'),
      ['В отличие от патента, не требует регистрации и не раскрывается публично, но зависит от режима секретности.', 'Im Gegensatz zum Patent nicht öffentlich hinterlegt, erfordert aber aktive Geheimhaltungsmaßnahmen.']),
    W('royalty', 'noun', 'royalty', 'C1', 'роялти, авторское / лицензионное вознаграждение', 'die Lizenzgebühr, die Tantieme',
      ex('The songwriter earns a small [[royalty]] every time the track is licensed for a film.', 'Автор песни получает небольшое роялти каждый раз, когда трек лицензируют для фильма.', 'Die Komponistin erhält eine Lizenzgebühr, sobald der Titel für einen Film lizenziert wird.'),
      ['Часто во множественном числе: pay royalties on sales; royalty-free — без регулярных отчислений за использование.', 'Oft im Plural royalties; royalty-free bedeutet ohne laufende Nutzungsgebühren (nicht zwingend kostenlos).']),
    W('non-exclusive-licence', 'noun', 'non-exclusive licence', 'C1', 'неисключительная (простая) лицензия', 'die einfache Lizenz',
      ex('Under a [[non-exclusive licence]], the photographer can sell the same image to other clients.', 'По неисключительной лицензии фотограф вправе продавать этот же снимок другим клиентам.', 'Bei einer einfachen Lizenz darf der Fotograf dasselbe Bild auch an andere Kunden verkaufen.'),
      ['В британском варианте существительное — licence, глагол — license; в США оба слова через s.', 'BE: Nomen licence, Verb license; AE schreibt beides mit s (license).']),
    W('plagiarism', 'noun', 'plagiarism', 'B2', 'плагиат, присвоение чужого текста или идеи', 'das Plagiat',
      ex('Uncited passages lifted straight from a white paper led to accusations of [[plagiarism]].', 'Непроцитированные фрагменты, скопированные прямо из отчёта, привели к обвинениям в плагиате.', 'Unzitierte Passagen direkt aus einem Whitepaper führten zu Plagiatsvorwürfen.'),
      ['Обратите внимание на произношение и написание: pla-gia-rism; глагол — plagiarise.', 'Betonung auf der ersten Silbe; zugehöriges Verb: plagiarise (plagiieren).']),
    W('fair-use', 'noun', 'fair use', 'C1', 'добросовестное использование (исключение в авторском праве)', 'die zulässige Nutzung (Fair Use)',
      ex('Brief excerpts quoted in a critical book review often qualify as [[fair use]].', 'Короткие цитаты в критической рецензии на книгу часто подпадают под добросовестное использование.', 'Kurze Zitate in einer kritischen Buchrezension fallen häufig unter Fair Use.'),
      ['Термин права США; в праве Великобритании и ЕС аналогичную роль играют более узкие правила fair dealing / Schranken.', 'US-Rechtsbegriff; im britischen und deutschen Recht gelten engere Schrankenregelungen (fair dealing / Zitatrecht).']),
    W('public-domain', 'noun', 'public domain', 'B2', 'общественное достояние', 'die Gemeinfreiheit (Public Domain)',
      ex('Once statutory copyright expires, classic recordings enter the [[public domain]].', 'Когда установленный законом срок авторского права истекает, классические записи переходят в общественное достояние.', 'Sobald die gesetzliche Schutzfrist abläuft, werden klassische Werke gemeinfrei.'),
      ['Обычно с артиклем: in the public domain, enter the public domain.', 'Fast immer mit Artikel: in the public domain (gemeinfrei).'])
  ]);

  /* ── 06 · Criminal Law & Courts (10 new) ─────────────────────────────────── */
  reg('legal_criminal', [
    W('indictment', 'noun', 'indictment', 'C2', 'обвинительный акт, предъявление тяжкого обвинения', 'die Anklageschrift, die Anklageerhebung',
      ex('Prosecutors unsealed a formal [[indictment]] charging three executives with wire fraud.', 'Прокуратура обнародовала официальное обвинительное заключение в адрес трёх руководителей за мошенничество.', 'Die Staatsanwaltschaft veröffentlichte eine Anklageschrift gegen drei Manager wegen Betrugs.'),
      ['Произносится без звука c: /ɪnˈdaɪt.mənt/. Глагол — indict (предъявлять обвинение).', 'Stummes c in der Aussprache (/ɪnˈdaɪt.mənt/); Verb: indict (anklagen).']),
    W('prosecution', 'noun', 'prosecution', 'C1', 'уголовное преследование; сторона обвинения', 'die Strafverfolgung; die Staatsanwaltschaft',
      ex('The [[prosecution]] called two forensic accountants to explain the falsified ledgers.', 'Сторона обвинения вызвала двух судебных аудиторов для разбора поддельных книг учёта.', 'Die Staatsanwaltschaft lud zwei forensische Wirtschaftsprüfer zu den gefälschten Büchern vor.'),
      ['Антоним в суде — the defence (сторона защиты); глагол — prosecute.', 'Gegenseite im Strafprozess: the defence; zugehöriges Verb: prosecute.']),
    W('acquittal', 'noun', 'acquittal', 'C2', 'оправдание по суду, оправдательный приговор', 'der Freispruch',
      ex('Insufficient forensic evidence resulted in a full [[acquittal]] on all counts.', 'Недостаточность криминалистических улик привела к полному оправданию по всем пунктам обвинения.', 'Unzureichende Beweise führten zu einem vollständigen Freispruch in allen Anklagepunkten.'),
      ['Глагол — acquit someone of something («оправдать кого-то в чём-то»); антоним — conviction.', 'Verb: acquit somebody of a charge; Gegenteil: conviction (Verurteilung).']),
    W('embezzlement', 'noun', 'embezzlement', 'C2', 'растрата, присвоение вверенных средств', 'die Veruntreuung, die Unterschlagung',
      ex('Internal auditors uncovered systematic [[embezzlement]] disguised as phantom vendor invoices.', 'Внутренние аудиторы выявили систематическую растрату, замаскированную под фиктивные счета поставщиков.', 'Interne Prüfer deckten systematische Veruntreuung über Scheinrechnungen auf.'),
      ['Присвоение денег лицом, которому они были законно доверены по службе; глагол — embezzle.', 'Veruntreuung anvertrauter Gelder im Amt oder Unternehmen; Verb: embezzle.']),
    W('perjury', 'noun', 'perjury', 'C2', 'лжесвидетельство, заведомо ложные показания под присягой', 'der Meineid, die falsche uneidliche Aussage',
      ex('Knowingly lying under oath exposes any witness to prosecution for [[perjury]].', 'Заведомая ложь под присягой грозит любому свидетелю уголовным преследованием за лжесвидетельство.', 'Wer wissentlich unter Eid lügt, macht sich des Meineids strafbar.'),
      ['Commit perjury — совершить лжесвидетельство; глагол — perjure oneself.', 'Kollokation: commit perjury; reflexives Verb: perjure oneself.']),
    W('remand', 'noun', 'remand', 'C2', 'содержание под стражей до суда; возвращение дела', 'die Untersuchungshaft',
      ex('Fearing the suspect might flee abroad, the magistrate ordered him held on [[remand]].', 'Опасаясь бегства подозреваемого за границу, судья оставил его под стражей до суда.', 'Aus Sorge vor Fluchtgefahr ordnete der Ermittlungsrichter Untersuchungshaft an.'),
      ['On remand (BE) / remanded in custody — находиться в СИЗО до приговора.', 'Feste Wendung: be kept on remand / remanded in custody (= in U-Haft sitzen).']),
    W('presumption-of-innocence', 'noun', 'presumption of innocence', 'C1', 'презумпция невиновности', 'die Unschuldsvermutung',
      ex('Every defendant is protected by the [[presumption of innocence]] until guilt is proven.', 'Каждый обвиняемый защищён презумпцией невиновности, пока вина не доказана судом.', 'Jeder Angeklagte steht unter dem Schutz der Unschuldsvermutung, bis die Schuld bewiesen ist.'),
      ['Фундаментальный принцип уголовного процесса.', 'Grundprinzip des Rechtsstaats: bis zum Beweis der Schuld gilt man als unschuldig.']),
    W('mitigating-circumstances', 'noun', 'mitigating circumstances', 'C1', 'смягчающие вину обстоятельства', 'mildernde Umstände (Pl.)',
      ex('Early restitution and full cooperation weighed heavily as [[mitigating circumstances]].', 'Добровольное возмещение ущерба и полное содействие были учтены как веские смягчающие обстоятельства.', 'Frühzeitige Wiedergutmachung und volle Kooperation fielen als mildernde Umstände stark ins Gewicht.'),
      ['Антоним — aggravating circumstances (отягчающие обстоятельства).', 'Gegenteil: aggravating circumstances (strafverschärfende Umstände).']),
    W('verdict', 'noun', 'verdict', 'C1', 'вердикт, решение суда или коллегии присяжных', 'das Urteil, der Wahrspruch',
      ex('After six hours of deliberation, the jury returned a unanimous [[verdict]].', 'После шести часов совещания присяжные вынесли единогласный вердикт.', 'Nach sechsstündiger Beratung verkündete die Jury ein einstimmiges Urteil.'),
      ['Reach / return / deliver a verdict (присяжные выносят виновен/не виновен); меру наказания затем назначает судья (sentence).', 'Return / reach a verdict (Schuldfrage); das Strafmaß heißt danach sentence.']),
    W('testify', 'verb', 'testify', 'C1', 'давать свидетельские показания в суде', 'aussagen (vor Gericht), bezeugen',
      ex('Former employees were subpoenaed to [[testify]] before the commercial court.', 'Бывших сотрудников вызвали повесткой дать свидетельские показания в хозяйственном суде.', 'Ehemalige Mitarbeiter wurden vorgeladen, um vor dem Gericht auszusagen.'),
      ['Предлоги: testify about something, testify against / for somebody; существительное — testimony.', 'Testify against somebody; zugehöriges Nomen: testimony (die Zeugenaussage).'])
  ]);

  /* ── 07 · Employment & Labour Law (10 new + 2 reused) ───────────────────── */
  GT.addMember('en:it4:collective-agreement', 'it', 'legal_labour');
  GT.addMember('en:it3:severance-pay', 'it', 'legal_labour');
  reg('legal_labour', [
    W('unfair-dismissal', 'noun', 'unfair dismissal', 'C1', 'неправомерное (необоснованное) увольнение', 'die ungerechtfertigte Kündigung, der Kündigungsschutzfall',
      ex('He challenged his firing as [[unfair dismissal]] because no warnings had ever been issued.', 'Он оспорил увольнение как неправомерное, поскольку выговоров ранее никогда не объявлялось.', 'Er klagte wegen ungerechtfertigter Kündigung, da zuvor nie eine Abmahnung erfolgt war.'),
      ['Сравните с wrongful dismissal (нарушение формальных условий увольнения по договору, например срока уведомления).', 'Abgrenzung: unfair dismissal (sachlich ungerechtfertigt) vs. wrongful dismissal (Vertragsverstoß bei Kündigungsfrist).']),
    W('non-compete-clause', 'noun', 'non-compete clause', 'C1', 'пункт о неконкуренции после увольнения', 'das nachvertragliche Wettbewerbsverbot',
      ex('Overbroad [[non-compete clauses]] that block someone from working anywhere are often struck down.', 'Слишком широкие условия о неконкуренции, мешающие работать где бы то ни было, суды часто отменяют.', 'Zu weit gefasste Wettbewerbsverbote, die jede Anschlussbeschäftigung blockieren, werden oft für unwirksam erklärt.'),
      ['Ограничивает переход к конкурентам на оговорённый срок и часто требует компенсации (Karenzentschädigung).', 'Beschränkt den Wechsel zur Konkurrenz; in vielen Ländern nur mit Karenzentschädigung wirksam.']),
    W('works-council', 'noun', 'works council', 'C1', 'производственный совет (орган работников на предприятии)', 'der Betriebsrat',
      ex('In Germany, introducing employee-monitoring software requires consulting the [[works council]].', 'В Германии внедрение ПО для контроля сотрудников требует согласования с производственным советом.', 'In Deutschland erfordert die Einführung von Mitarbeiter-Tracking die Mitbestimmung des Betriebsrats.'),
      ['Типичный европейский институт (Betriebsrat), отличный от внешнего профсоюза (trade union).', 'Entspricht dem deutschen Betriebsrat auf Unternehmensebene (im Unterschied zur Gewerkschaft / union).']),
    W('collective-redundancy', 'noun', 'collective redundancy', 'C1', 'массовое сокращение персонала', 'die Massenentlassung, der Personalabbau',
      ex('Before announcing a [[collective redundancy]], management must enter formal consultation.', 'Перед объявлением массового сокращения руководство обязано начать официальные консультации.', 'Vor einer Massenentlassung muss die Geschäftsleitung förmliche Konsultationen führen.'),
      ['Для сокращения должности в целом — redundancy (уже есть в Infra как отказоустойчивость).', 'Bezeichnet betriebsbedingten Abbau mehrerer Stellen mit besonderen Anzeigepflichten.']),
    W('grievance-procedure', 'noun', 'grievance procedure', 'C1', 'официальная процедура подачи и разбора трудовых жалоб', 'das betriebliche Beschwerdeverfahren',
      ex('Follow the internal [[grievance procedure]] first so complaints are logged in writing.', 'Сначала пройдите внутреннюю процедуру разбора жалоб, чтобы претензии были зафиксированы письменно.', 'Nutzen Sie zunächst das interne Beschwerdeverfahren, damit Vorfälle schriftlich erfasst sind.'),
      ['Охватывает жалобы на условия труда, дискриминацию, травлю или расчёт зарплаты.', 'Förmlicher innerbetrieblicher Weg bei Konflikten, Benachteiligung oder Abrechnungsfehlern.']),
    W('employment-tribunal', 'noun', 'employment tribunal', 'C1', 'суд / трибунал по трудовым спорам', 'das Arbeitsgericht',
      ex('Because mediation failed, the former manager brought her claim to an [[employment tribunal]].', 'Поскольку медиация не дала результата, бывшая менеджер передала иск в трудовой суд.', 'Da die Mediation scheiterte, zog die frühere Managerin vor das Arbeitsgericht.'),
      ['Британский термин для специализированного трудового суда (нем. Arbeitsgericht).', 'Britische Bezeichnung für das Arbeitsgericht.']),
    W('constructive-dismissal', 'noun', 'constructive dismissal', 'C2', 'вынужденное увольнение из-за грубого нарушения со стороны работодателя', 'die erzwungene Eigenkündigung (wegen Vertragsbruch des Arbeitgebers)',
      ex('Slashing her salary without consent amounted to [[constructive dismissal]] in law.', 'Урезание её зарплаты без согласия юридически приравнивалось к вынужденному увольнению.', 'Die einseitige Gehaltskürzung ohne Zustimmung kam rechtlich einer erzwungenen Kündigung gleich.'),
      ['Сотрудник формально увольняется сам, но суд признаёт вину работодателя, создавшего нетерпимые условия.', 'Arbeitnehmer kündigt selbst wegen schwerer Pflichtverletzung des Arbeitgebers — rechtlich wie Kündigung gewertet.']),
    W('mutual-termination-agreement', 'noun', 'mutual termination agreement', 'C1', 'соглашение о прекращении трудового договора по обоюдному согласию', 'der Aufhebungsvertrag',
      ex('Both sides signed a [[mutual termination agreement]] with severance and a neutral reference.', 'Обе стороны подписали соглашение о прекращении договора с выходным пособием и нейтральной рекомендацией.', 'Beide Seiten unterzeichneten einen Aufhebungsvertrag samt Abfindung und wohlwollendem Zeugnis.'),
      ['Полный аналог немецкого Aufhebungsvertrag; может влиять на пособие по безработице.', 'Entspricht dem deutschen Aufhebungsvertrag (oft mit möglicher Sperrzeit beim Arbeitslosengeld).']),
    W('statutory-entitlement', 'noun', 'statutory entitlement', 'C1', 'минимально гарантированное законом право работника', 'der gesetzliche Anspruch',
      ex('Contract clauses cannot waive a worker’s [[statutory entitlement]] to paid annual leave.', 'Условия договора не могут отменять законное право работника на оплачиваемый отпуск.', 'Vertragsklauseln dürfen den gesetzlichen Anspruch auf bezahlten Jahresurlaub nicht aushebeln.'),
      ['Обязательный минимум, ниже которого договор опуститься не вправе.', 'Gesetzlicher Mindestanspruch, der vertraglich nicht unterschritten werden darf.']),
    W('garden-leave', 'noun', 'garden leave', 'C2', 'оплачиваемое освобождение от работы в период отработки', 'die bezahlte Freistellung (während der Kündigungsfrist)',
      ex('Senior sales staff are often placed on [[garden leave]] during their three-month notice period.', 'Старших менеджеров по продажам нередко освобождают от работы с сохранением зарплаты на три месяца отработки.', 'Führungskräfte im Vertrieb werden während ihrer dreimonatigen Kündigungsfrist oft bezahlt freigestellt.'),
      ['Работодатель платит оклад, но закрывает доступ к системам и клиентам до окончания срока уведомления.', 'Beschäftigte erhalten weiter Gehalt, bleiben aber von Kunden und Systemen getrennt (Freistellung).'])
  ]);

  /* ── 08 · Compliance, Privacy & Corporate (10 new + 1 reused) ────────────── */
  GT.addMember('en:it3:compliance', 'it', 'legal_corporate');
  reg('legal_corporate', [
    W('due-diligence', 'noun', 'due diligence', 'C1', 'комплексная проверка объекта сделки или партнёра', 'die Sorgfaltsprüfung (Due Diligence)',
      ex('Investors halted the buyout after legal [[due diligence]] uncovered undisclosed lawsuits.', 'Инвесторы остановили сделку после того, как юридическая проверка вскрыла скрытые судебные иски.', 'Investoren stoppten die Übernahme, nachdem die rechtliche Due Diligence verschwiegene Klagen aufdeckte.'),
      ['Неисчисляемое: conduct due diligence; применяется при M&A, санкциях и проверке поставщиков.', 'Unzählbar: conduct due diligence; zentral bei Unternehmenskäufen und Lieferkettenprüfung.']),
    W('fiduciary-duty', 'noun', 'fiduciary duty', 'C2', 'фидуциарная обязанность (действовать добросовестно в интересах доверителя)', 'die Treuepflicht, die Treuhänderpflicht',
      ex('Company directors owe a strict [[fiduciary duty]] to put the enterprise ahead of personal gain.', 'Директора компании несут строгую фидуциарную обязанность ставить интересы фирмы выше личной выгоды.', 'Vorstände unterliegen einer strengen Treuepflicht, das Unternehmenswohl über Eigeninteressen zu stellen.'),
      ['Произносится /fɪˈdjuː.ʃər.i/; ключевой термин корпоративного права и управления фондами.', 'Rechtliche Pflicht zu Loyalität und Sorgfalt gegenüber Gesellschaftern oder Mandanten.']),
    W('whistleblower', 'noun', 'whistleblower', 'C1', 'информатор о внутренних нарушениях или злоупотреблениях', 'der Hinweisgeber (Whistleblower)',
      ex('EU rules protect any [[whistleblower]] who reports fraud through an internal hotline.', 'Правила ЕС защищают любого информатора, сообщающего о нарушениях через внутреннюю горячую линию.', 'EU-Regeln schützen Hinweisgeber, die Betrug über ein internes Meldesystem anzeigen.'),
      ['Охраняется директивами о защите осведомителей от преследования и увольнения.', 'Hinweisgeberschutz schützt vor arbeitsrechtlichen Repressalien nach Meldung von Missständen.']),
    W('conflict-of-interest', 'noun', 'conflict of interest', 'B2', 'конфликт интересов', 'der Interessenkonflikt',
      ex('Board members must disclose any [[conflict of interest]] before voting on vendor contracts.', 'Члены совета обязаны раскрыть любой конфликт интересов до голосования по контрактам с подрядчиками.', 'Vorstandsmitglieder müssen jeden Interessenkonflikt offenlegen, bevor über Lieferantenverträge abgestimmt wird.'),
      ['Глаголы: declare / disclose / avoid a conflict of interest.', 'Typische Verben: declare / disclose / manage a conflict of interest.']),
    W('anti-money-laundering', 'noun', 'anti-money laundering', 'C1', 'противодействие отмыванию преступных доходов (AML)', 'die Geldwäscheprävention',
      ex('Under [[anti-money laundering]] rules, banks verify beneficial owners before opening accounts.', 'По правилам противодействия отмыванию средств банки проверяют бенефициаров до открытия счёта.', 'Nach Vorgaben zur Geldwäscheprävention prüfen Banken vor Kontoeröffnung die wirtschaftlich Berechtigten.'),
      ['В бизнес-среде обычно сокращается до AML (AML checks, AML officer).', 'Im Finanzwesen meist als AML abgekürzt (z. B. AML-Prüfung, KYC/AML).']),
    W('insolvency', 'noun', 'insolvency', 'C1', 'несостоятельность, неплатёжеспособность (банкротство)', 'die Insolvenz, die Zahlungsunfähigkeit',
      ex('Directors face personal liability if they delay filing for [[insolvency]] once cash runs out.', 'Директора несут личную ответственность, если затягивают с заявлением о несостоятельности при отсутствии ликвидности.', 'Geschäftsführer haften persönlich, wenn sie einen Insolvenzantrag bei Zahlungsunfähigkeit verschleppen.'),
      ['В британском праве для компаний говорят insolvency / liquidation; bankruptcy чаще относится к физлицам (в США — и к фирмам).', 'In Großbritannien bei Firmen meist insolvency (bankruptcy eher für Privatpersonen; in den USA beides).']),
    W('regulatory-sanction', 'noun', 'regulatory sanction', 'C1', 'санкция или штраф со стороны регулятора', 'die aufsichtsrechtliche Sanktion',
      ex('Ignoring mandatory incident-reporting windows invites severe [[regulatory sanctions]].', 'Игнорирование обязательных сроков отчётности об инцидентах влечёт жёсткие санкции регулятора.', 'Wer gesetzliche Meldefristen ignoriert, riskiert empfindliche aufsichtsrechtliche Sanktionen.'),
      ['Санкция органа надзора (штраф, запрет, предписание), не путать со значением «одобрение» (sanction as approval).', 'Aufsichtsbehördliche Maßnahme (Bußgeld, Auflage), nicht die Bedeutung „Genehmigung“.']),
    W('data-protection-officer', 'noun', 'data protection officer', 'C1', 'уполномоченный по защите персональных данных (DPO)', 'der Datenschutzbeauftragte',
      ex('Our [[data protection officer]] reviews every new analytics tool for GDPR compliance.', 'Наш уполномоченный по защите данных проверяет каждый новый инструмент аналитики на соответствие GDPR.', 'Unser Datenschutzbeauftragter prüft jedes neue Analysetool auf DSGVO-Konformität.'),
      ['По GDPR обязателен во многих компаниях; сокращённо — DPO.', 'Nach DSGVO in vielen Unternehmen gesetzlich vorgeschrieben; abgekürzt DPO.']),
    W('corporate-governance', 'noun', 'corporate governance', 'C1', 'корпоративное управление и система контроля в компании', 'die Unternehmensführung (Corporate Governance)',
      ex('Sound [[corporate governance]] separates executive management from independent oversight.', 'Надёжное корпоративное управление разделяет операционное руководство и независимый надзор.', 'Gute Corporate Governance trennt operative Geschäftsführung von unabhängiger Kontrolle.'),
      ['Система правил, отчётности и баланса интересов между советом директоров, менеджментом и акционерами.', 'Ordnungsrahmen für Leitung, Kontrolle und Transparenz zwischen Vorstand, Aufsichtsrat und Eignern.']),
    W('articles-of-association', 'noun', 'articles of association', 'C2', 'устав компании, учредительный регламент', 'der Gesellschaftsvertrag, die Satzung',
      ex('Amending the company’s [[articles of association]] requires a supermajority shareholder vote.', 'Изменение устава компании требует квалифицированного большинства голосов акционеров.', 'Eine Änderung der Satzung erfordert eine qualifizierte Mehrheit der Gesellschafter.'),
      ['Всегда во множественном числе; в США аналог для корпораций чаще называют bylaws.', 'Immer im Plural; britisch für Unternehmenssatzung (US bei Corporations oft bylaws).'])
  ]);
})();
