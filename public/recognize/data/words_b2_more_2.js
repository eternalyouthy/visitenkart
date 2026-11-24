/* German B2 vocabulary · third batch (3 per B2 theme + 3 per B2 everyday topic = 39 cards).
 * Checked against existing pack inventory for zero duplicates. Original examples and translations (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(id, o, note) {
    o.id = 'b2-m2-' + id;
    o.level = 'b2';
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }
  function N(id, article, de, plural, ru, en, e, note) {
    return W(id, { pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function A(id, pos, de, ru, en, e, note) {
    return W(id, { pos: pos, de: de, ru: ru, en: en, examples: [e] }, note);
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  // B2 themes (6 × 3 = 18)
  reg('b2_psyche', [
    N('erschoepfung', 'die', 'Erschöpfung', '', 'истощение, сильная усталость', 'exhaustion',
      ex('Nach der langen Prüfungsphase spürte sie tiefe [[Erschöpfung]].', 'После долгого периода экзаменов она почувствовала сильное истощение.', 'After the long exam period she felt deep exhaustion.')),
    N('enttaeuschung', 'die', 'Enttäuschung', 'die Enttäuschungen', 'разочарование', 'disappointment',
      ex('Die Absage war eine große [[Enttäuschung]] für ihn.', 'Отказ стал для него большим разочарованием.', 'The rejection was a big disappointment for him.')),
    N('lebensfreude', 'die', 'Lebensfreude', '', 'жизнерадостность, радость жизни', 'joie de vivre, zest for life',
      ex('Trotz seines Alters hat er seine [[Lebensfreude]] nicht verloren.', 'Несмотря на возраст, он не потерял радости жизни.', 'Despite his age he hasn’t lost his zest for life.'))
  ]);

  reg('b2_medien', [
    N('verschwoerungstheorie', 'die', 'Verschwörungstheorie', 'die Verschwörungstheorien', 'теория заговора', 'conspiracy theory',
      ex('In sozialen Netzwerken verbreiten sich [[Verschwörungstheorien]] besonders schnell.', 'В соцсетях теории заговора распространяются особенно быстро.', 'Conspiracy theories spread especially fast on social media.')),
    N('zensur', 'die', 'Zensur', 'die Zensuren', 'цензура (тж. школьная оценка)', 'censorship (also school grade)',
      ex('Unabhängige Redaktionen lehnen jede politische [[Zensur]] ab.', 'Независимые редакции отвергают любую политическую цензуру.', 'Independent newsrooms reject any political censorship.')),
    N('meinungsbildung', 'die', 'Meinungsbildung', '', 'формирование общественного мнения', 'opinion-forming',
      ex('Vielfältige Medien sind entscheidend für eine freie [[Meinungsbildung]].', 'Разнообразные СМИ решающе важны для свободного формирования мнения.', 'Diverse media are crucial for free opinion-forming.'))
  ]);

  reg('b2_umwelt', [
    N('schadstoff', 'der', 'Schadstoff', 'die Schadstoffe', 'вредное вещество, загрязнитель', 'pollutant, harmful substance',
      ex('Moderne Filter reduzieren die [[Schadstoffe]] in der Luft.', 'Современные фильтры снижают содержание вредных веществ в воздухе.', 'Modern filters reduce pollutants in the air.')),
    N('oekostrom', 'der', 'Ökostrom', '', 'экологически чистая электроэнергия', 'green electricity',
      ex('Immer mehr Haushalte wechseln zu [[Ökostrom]] aus Wind und Sonne.', 'Всё больше домохозяйств переходят на «зелёную» энергию ветра и солнца.', 'More and more households are switching to green electricity from wind and solar.')),
    N('wegwerfgesellschaft', 'die', 'Wegwerfgesellschaft', '', 'общество потребления («одноразовое общество»)', 'throwaway society',
      ex('Reparaturcafés sind ein Gegenmodell zur [[Wegwerfgesellschaft]].', 'Ремонтные кафе — альтернатива обществу одноразовых вещей.', 'Repair cafés are a counter-model to the throwaway society.'))
  ]);

  reg('b2_wirtschaft', [
    N('mindestlohn', 'der', 'Mindestlohn', 'die Mindestlöhne', 'минимальная заработная плата', 'minimum wage',
      ex('Der gesetzliche [[Mindestlohn]] wurde zum Jahresanfang erhöht.', 'Установленную законом минимальную зарплату повысили с начала года.', 'The statutory minimum wage was raised at the start of the year.')),
    N('lebenshaltungskosten', 'die', 'Lebenshaltungskosten', '', 'стоимость жизни, расходы на жизнь', 'cost of living',
      ex('In Großstädten steigen die [[Lebenshaltungskosten]] schneller als die Löhne.', 'В крупных городах стоимость жизни растёт быстрее зарплат.', 'In big cities the cost of living rises faster than wages.'),
      ['Всегда во множественном числе.', 'Always plural.']),
    N('gewinn', 'der', 'Gewinn', 'die Gewinne', 'прибыль; выигрыш', 'profit; prize',
      ex('Trotz höherer Kosten machte das Unternehmen einen stabilen [[Gewinn]].', 'Несмотря на более высокие затраты, компания получила стабильную прибыль.', 'Despite higher costs, the company made a steady profit.'))
  ]);

  reg('b2_gesellschaft', [
    N('zuwanderung', 'die', 'Zuwanderung', 'die Zuwanderungen', 'иммиграция, приток населения', 'immigration',
      ex('Qualifizierte [[Zuwanderung]] soll den Mangel auf dem Arbeitsmarkt lindern.', 'Квалифицированная иммиграция должна смягчить нехватку кадров на рынке труда.', 'Skilled immigration is meant to ease shortages in the labour market.')),
    N('einbuergerung', 'die', 'Einbürgerung', 'die Einbürgerungen', 'натурализация, получение гражданства', 'naturalisation, citizenship',
      ex('Nach fünf Jahren Aufenthalt stellte er den Antrag auf [[Einbürgerung]].', 'После пяти лет проживания он подал заявление на гражданство.', 'After five years of residence he applied for citizenship.')),
    N('grundrecht', 'das', 'Grundrecht', 'die Grundrechte', 'основное (конституционное) право', 'fundamental right',
      ex('Das Briefgeheimnis gehört zu den geschützten [[Grundrechten]].', 'Тайна переписки относится к защищённым основным правам.', 'Privacy of correspondence is one of the protected fundamental rights.'))
  ]);

  reg('b2_bildung', [
    N('umschulung', 'die', 'Umschulung', 'die Umschulungen', 'переквалификация, переобучение', 'retraining',
      ex('Nach zehn Jahren im Einzelhandel begann sie eine [[Umschulung]] zur Entwicklerin.', 'После десяти лет в торговле она начала переобучение на разработчика.', 'After ten years in retail she started retraining as a developer.')),
    N('anerkennung', 'die', 'Anerkennung', '', 'признание (диплома, заслуг)', 'recognition',
      ex('Die [[Anerkennung]] seines ausländischen Abschlusses dauerte vier Monate.', 'Признание его иностранного диплома заняло четыре месяца.', 'Recognition of his foreign degree took four months.')),
    N('nachhilfe', 'die', 'Nachhilfe', '', 'дополнительные занятия, репетиторство', 'tutoring, extra lessons',
      ex('Vor dem Abitur nahm er [[Nachhilfe]] in Mathematik.', 'Перед выпускным экзаменом он брал уроки у репетитора по математике.', 'Before his final exams he took extra maths lessons.'))
  ]);

  // B2 everyday topics (7 × 3 = 21)
  reg('b2_wohnen', [
    N('wohnflaeche', 'die', 'Wohnfläche', 'die Wohnflächen', 'жилая площадь', 'living area, floor space',
      ex('Die Wohnung hat eine [[Wohnfläche]] von 68 Quadratmetern.', 'Жилая площадь квартиры составляет 68 квадратных метров.', 'The flat has a floor area of 68 square metres.')),
    N('kaltmiete', 'die', 'Kaltmiete', 'die Kaltmieten', 'базовая аренда без коммунальных услуг («холодная»)', 'basic rent (excluding utilities)',
      ex('Bei der [[Kaltmiete]] kommen Heizung und Nebenkosten noch dazu.', 'К базовой аренде ещё добавляются отопление и коммунальные расходы.', 'Heating and utility costs are added on top of the basic rent.'),
      ['Аренда с отоплением и коммуналкой — die Warmmiete.', 'Rent including utilities is die Warmmiete.']),
    N('zwischenmiete', 'die', 'Zwischenmiete', 'die Zwischenmieten', 'временная субаренда (пока жилец в отъезде)', 'temporary sublet',
      ex('Für mein Auslandssemester suche ich jemanden zur [[Zwischenmiete]].', 'На время семестра за границей я ищу кого-нибудь в субаренду.', 'I’m looking for someone to sublet my room while I’m abroad for a semester.'))
  ]);

  reg('b2_beziehungen', [
    N('vertrauensbruch', 'der', 'Vertrauensbruch', 'die Vertrauensbrüche', 'нарушение доверия, предательство', 'breach of trust',
      ex('Das Weitererzählen des Geheimnisses war ein schwerer [[Vertrauensbruch]].', 'То, что секрет рассказали другим, стало тяжёлым нарушением доверия.', 'Passing on the secret was a serious breach of trust.')),
    N('einsamkeit', 'die', 'Einsamkeit', '', 'одиночество', 'loneliness',
      ex('Nach dem Umzug in eine fremde Stadt kämpfte er anfangs mit [[Einsamkeit]].', 'После переезда в чужой город он поначалу боролся с одиночеством.', 'After moving to a new city he struggled with loneliness at first.')),
    N('gleichberechtigung', 'die', 'Gleichberechtigung', '', 'равноправие', 'equal rights, equality',
      ex('In einer fairen Beziehung ist [[Gleichberechtigung]] selbstverständlich.', 'В честных отношениях равноправие само собой разумеется.', 'In a fair relationship, equality is a matter of course.'))
  ]);

  reg('b2_wissenschaft', [
    N('studienergebnis', 'das', 'Studienergebnis', 'die Studienergebnisse', 'результат исследования', 'study finding, research result',
      ex('Das [[Studienergebnis]] wurde heute in einer Fachzeitschrift veröffentlicht.', 'Результат исследования опубликовали сегодня в научном журнале.', 'The study result was published in a specialist journal today.')),
    N('langzeitstudie', 'die', 'Langzeitstudie', 'die Langzeitstudien', 'долгосрочное исследование', 'long-term study',
      ex('Erst eine [[Langzeitstudie]] zeigt, ob die Methode dauerhaft wirkt.', 'Только долгосрочное исследование показывает, действует ли метод на длинной дистанции.', 'Only a long-term study shows whether the method works permanently.')),
    N('forschungsprojekt', 'das', 'Forschungsprojekt', 'die Forschungsprojekte', 'исследовательский проект', 'research project',
      ex('Die Universität hat ein neues [[Forschungsprojekt]] zur Batterietechnik gestartet.', 'Университет запустил новый исследовательский проект по технологии аккумуляторов.', 'The university launched a new research project on battery technology.'))
  ]);

  reg('b2_recht', [
    N('rechtsberatung', 'die', 'Rechtsberatung', 'die Rechtsberatungen', 'юридическая консультация', 'legal advice',
      ex('Bei Mietproblemen hilft eine kostenlose [[Rechtsberatung]] beim Mieterverein.', 'При проблемах с арендой помогает бесплатная юридическая консультация в союзе арендаторов.', 'For tenancy issues, free legal advice from the tenants’ association helps.')),
    N('klage', 'die', 'Klage', 'die Klagen', 'иск, судебная жалоба', 'lawsuit, legal claim',
      ex('Nach der unberechtigten Kündigung reichte sie eine [[Klage]] beim Arbeitsgericht ein.', 'После необоснованного увольнения она подала иск в трудовой суд.', 'After the unfair dismissal, she filed a lawsuit with the labour court.')),
    N('schadensersatz', 'der', 'Schadensersatz', '', 'возмещение ущерба', 'damages, compensation',
      ex('Die Versicherung verlangt [[Schadensersatz]] vom Verursacher.', 'Страховая требует возмещения ущерба с виновника.', 'The insurance company is claiming damages from the person responsible.'))
  ]);

  reg('b2_gesundheit', [
    N('ueberweisungsschein', 'der', 'Überweisungsschein', 'die Überweisungsscheine', 'направление (к врачу-специалисту)', 'referral slip',
      ex('Für den Termin beim Kardiologen brauche ich einen [[Überweisungsschein]].', 'Для приёма у кардиолога мне нужно направление.', 'I need a referral slip for the cardiologist appointment.')),
    N('genesung', 'die', 'Genesung', '', 'выздоровление, восстановление', 'recovery',
      ex('Nach der Operation wünschten alle Kollegen ihr eine schnelle [[Genesung]].', 'После операции все коллеги пожелали ей скорейшего выздоровления.', 'After the operation all her colleagues wished her a speedy recovery.')),
    N('impfpass', 'der', 'Impfpass', 'die Impfpässe', 'прививочный паспорт, сертификат о прививках', 'vaccination record',
      ex('Bringen Sie zur Auffrischung bitte Ihren [[Impfpass]] mit.', 'Возьмите на ревакцинацию свой прививочный паспорт.', 'Please bring your vaccination record to the booster appointment.'))
  ]);

  reg('b2_reisen', [
    N('schienenersatzverkehr', 'der', 'Schienenersatzverkehr', '', 'автобусы взамен отменённых поездов', 'rail replacement bus service',
      ex('Wegen Bauarbeiten fahren am Wochenende Busse im [[Schienenersatzverkehr]].', 'Из-за ремонтных работ на выходных вместо поездов ходят автобусы.', 'Because of engineering work, rail replacement buses are running at the weekend.'),
      ['На табло часто сокращённо: SEV.', 'Often abbreviated to SEV on station displays.']),
    N('fahrgastrechte', 'die', 'Fahrgastrechte', '', 'права пассажиров (на транспорте)', 'passenger rights',
      ex('Laut [[Fahrgastrechten]] erhalten Sie bei über 60 Minuten Verspätung Geld zurück.', 'По правам пассажиров при опоздании более чем на 60 минут возвращают часть денег.', 'Under passenger rights you get money back for delays of over 60 minutes.')),
    N('zollkontrolle', 'die', 'Zollkontrolle', 'die Zollkontrollen', 'таможенный контроль', 'customs check',
      ex('An der [[Zollkontrolle]] mussten wir die Koffer öffnen.', 'На таможенном контроле нам пришлось открыть чемоданы.', 'We had to open our suitcases at the customs check.'))
  ]);

  reg('b2_kultur', [
    N('urauffuehrung', 'die', 'Uraufführung', 'die Uraufführungen', 'мировая премьера, первая постановка', 'world premiere',
      ex('Die [[Uraufführung]] des neuen Theaterstücks fand großen Beifall.', 'Премьерная постановка новой пьесы встретила бурные аплодисменты.', 'The world premiere of the new play met with great applause.')),
    N('eintrittspreis', 'der', 'Eintrittspreis', 'die Eintrittspreise', 'цена входного билета', 'admission price',
      ex('Für Studierende gilt im Museum ein ermäßigter [[Eintrittspreis]].', 'Для студентов в музее действует льготная цена билета.', 'A reduced admission price applies for students at the museum.')),
    N('dauerausstellung', 'die', 'Dauerausstellung', 'die Dauerausstellungen', 'постоянная экспозиция', 'permanent exhibition',
      ex('Die [[Dauerausstellung]] zur Stadtgeschichte ist kostenlos zugänglich.', 'Постоянная выставка по истории города открыта бесплатно.', 'The permanent exhibition on the city’s history is free to enter.'))
  ]);
})();
