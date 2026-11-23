/* German B2 everyday topics · second batch (4 per topic). Original examples and translations. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(o, note) { o.level = 'b2'; if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; } return o; }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('b2_wohnen', [
    W({ id: 'b2-wohnen-eigentumswohnung', pos: 'noun', de: 'Eigentumswohnung', article: 'die', plural: 'die Eigentumswohnungen', ru: 'квартира в собственности', en: 'owner-occupied flat, condo',
      examples: [ex('Statt zu mieten, haben sie sich eine [[Eigentumswohnung]] gekauft.', 'Вместо аренды они купили себе квартиру.', 'Instead of renting, they bought a flat of their own.')] }),
    W({ id: 'b2-wohnen-makler', pos: 'noun', de: 'Makler', article: 'der', plural: 'die Makler', ru: 'риелтор, маклер', en: 'estate agent',
      examples: [ex('Der [[Makler]] verlangt zwei Monatsmieten Provision.', 'Риелтор берёт комиссию в размере двух месячных арендных плат.', 'The estate agent charges two months’ rent as commission.')] },
      ['Женский род: die Maklerin. Комиссия — die Provision / die Courtage.', 'Feminine: die Maklerin. The fee is die Provision / die Courtage.']),
    W({ id: 'b2-wohnen-wg', pos: 'noun', de: 'Wohngemeinschaft', article: 'die', plural: 'die Wohngemeinschaften', ru: 'квартира, которую снимают вместе (коммуна, «вэгэ»)', en: 'flatshare',
      examples: [ex('Während des Studiums habe ich in einer [[Wohngemeinschaft]] mit vier Leuten gewohnt.', 'Во время учёбы я жил в общей квартире с четырьмя людьми.', 'While I was a student I lived in a flatshare with four people.')] },
      ['Почти всегда говорят коротко: die WG [ве-ге]. Соседа по WG называют der Mitbewohner.', 'Almost always shortened to die WG [veh-geh]. A flatmate is der Mitbewohner.']),
    W({ id: 'b2-wohnen-besichtigung', pos: 'noun', de: 'Wohnungsbesichtigung', article: 'die', plural: 'die Wohnungsbesichtigungen', ru: 'просмотр квартиры', en: 'flat viewing',
      examples: [ex('Zur [[Wohnungsbesichtigung]] kamen über dreißig Interessenten.', 'На просмотр квартиры пришло больше тридцати желающих.', 'More than thirty people came to the flat viewing.')] },
      ['Глагол: eine Wohnung besichtigen.', 'Verb: eine Wohnung besichtigen.'])
  ]);

  reg('b2_beziehungen', [
    W({ id: 'b2-bez-trennung', pos: 'noun', de: 'Trennung', article: 'die', plural: 'die Trennungen', ru: 'расставание, разрыв', en: 'separation, break-up',
      examples: [ex('Nach der [[Trennung]] ist er in eine kleinere Wohnung gezogen.', 'После расставания он переехал в квартиру поменьше.', 'After the break-up he moved into a smaller flat.')] },
      ['Глагол: sich trennen (von + Dat.).', 'Verb: sich trennen (von + Dat.).']),
    W({ id: 'b2-bez-schwiegereltern', pos: 'noun', de: 'Schwiegereltern', article: 'die', ru: 'родители мужа или жены', en: 'parents-in-law',
      examples: [ex('Weihnachten feiern wir dieses Jahr bei meinen [[Schwiegereltern]].', 'В этом году Рождество мы празднуем у родителей мужа.', 'This year we’re spending Christmas with my in-laws.')] },
      ['Только мн. ч. Немецкий не различает тёщу и свекровь: обе — die Schwiegermutter.', 'Plural only. German doesn’t distinguish the wife’s and husband’s mother: both are die Schwiegermutter.']),
    W({ id: 'b2-bez-verlobung', pos: 'noun', de: 'Verlobung', article: 'die', plural: 'die Verlobungen', ru: 'помолвка', en: 'engagement',
      examples: [ex('Zur [[Verlobung]] haben sie nur die engste Familie eingeladen.', 'На помолвку они пригласили только самых близких родственников.', 'They only invited close family to the engagement.')] },
      ['Sich verloben — обручиться; der / die Verlobte — жених / невеста (до свадьбы).', 'Sich verloben — to get engaged; der / die Verlobte — fiancé / fiancée.']),
    W({ id: 'b2-bez-partnerschaft', pos: 'noun', de: 'Partnerschaft', article: 'die', plural: 'die Partnerschaften', ru: 'партнёрство; отношения пары', en: 'partnership, relationship',
      examples: [ex('In einer guten [[Partnerschaft]] teilt man sich die Hausarbeit.', 'В хороших отношениях пара делит домашние дела.', 'In a good relationship, you share the housework.')] })
  ]);

  reg('b2_wissenschaft', [
    W({ id: 'b2-wiss-experiment', pos: 'noun', de: 'Experiment', article: 'das', plural: 'die Experimente', ru: 'эксперимент, опыт', en: 'experiment',
      examples: [ex('Das [[Experiment]] musste dreimal wiederholt werden.', 'Эксперимент пришлось повторить три раза.', 'The experiment had to be repeated three times.')] }),
    W({ id: 'b2-wiss-hypothese', pos: 'noun', de: 'Hypothese', article: 'die', plural: 'die Hypothesen', ru: 'гипотеза', en: 'hypothesis',
      examples: [ex('Die Daten bestätigen unsere [[Hypothese]] nur teilweise.', 'Данные подтверждают нашу гипотезу лишь частично.', 'The data only partly confirm our hypothesis.')] }),
    W({ id: 'b2-wiss-stichprobe', pos: 'noun', de: 'Stichprobe', article: 'die', plural: 'die Stichproben', ru: 'выборка; выборочная проверка', en: 'sample; spot check',
      examples: [ex('Die Umfrage basiert auf einer [[Stichprobe]] von 2000 Personen.', 'Опрос основан на выборке из 2000 человек.', 'The survey is based on a sample of 2,000 people.')] },
      ['Второе значение: выборочный контроль — Die Polizei macht Stichproben.', 'Second meaning: a spot check — Die Polizei macht Stichproben.']),
    W({ id: 'b2-wiss-widerlegen', pos: 'verb', de: 'widerlegen', forms: { praes: 'widerlegt', praet: 'widerlegte', perf: 'hat widerlegt' }, gov: '+ Akk.', ru: 'опровергать', en: 'to refute, to disprove',
      examples: [ex('Neue Studien haben diese Theorie inzwischen [[widerlegt]].', 'Новые исследования уже опровергли эту теорию.', 'New studies have since disproved this theory.')] },
      ['wider- здесь неотделяемая приставка: er widerlegt, hat widerlegt.', 'wider- is inseparable here: er widerlegt, hat widerlegt.'])
  ]);

  reg('b2_recht', [
    W({ id: 'b2-recht-anwalt', pos: 'noun', de: 'Anwalt', article: 'der', plural: 'die Anwälte', ru: 'адвокат, юрист', en: 'lawyer',
      examples: [ex('Wegen der Kündigung hat sie sich einen [[Anwalt]] genommen.', 'Из-за увольнения она наняла адвоката.', 'She got a lawyer because of her dismissal.')] },
      ['Женский род: die Anwältin. Полностью: der Rechtsanwalt.', 'Feminine: die Anwältin. Full form: der Rechtsanwalt.']),
    W({ id: 'b2-recht-urteil', pos: 'noun', de: 'Urteil', article: 'das', plural: 'die Urteile', ru: 'приговор, решение суда; суждение', en: 'verdict, ruling; judgement',
      examples: [ex('Das [[Urteil]] wird nächste Woche verkündet.', 'Приговор огласят на следующей неделе.', 'The verdict will be announced next week.')] },
      ['Ср. das Vorurteil — предрассудок, «пред-суждение».', 'Compare das Vorurteil — prejudice, a “pre-judgement”.']),
    W({ id: 'b2-recht-klagen', pos: 'verb', de: 'klagen', forms: { praes: 'klagt', praet: 'klagte', perf: 'hat geklagt' }, gov: 'gegen + Akk.', ru: 'подавать в суд; жаловаться', en: 'to sue; to complain',
      examples: [ex('Die Mieter wollen gegen die Mieterhöhung [[klagen]].', 'Жильцы хотят подать в суд из-за повышения аренды.', 'The tenants want to take the rent increase to court.')] },
      ['klagen gegen + Akk. — судиться; klagen über + Akk. — жаловаться.', 'klagen gegen + Akk. — to sue; klagen über + Akk. — to complain about.']),
    W({ id: 'b2-recht-zeuge', pos: 'noun', de: 'Zeuge', article: 'der', plural: 'die Zeugen', ru: 'свидетель', en: 'witness',
      examples: [ex('Die Polizei sucht [[Zeugen]] für den Unfall.', 'Полиция ищет свидетелей аварии.', 'The police are looking for witnesses to the accident.')] },
      ['n-склонение: den / dem / des Zeugen.', 'Weak noun: den / dem / des Zeugen.'])
  ]);

  reg('b2_gesundheit', [
    W({ id: 'b2-ges-blutdruck', pos: 'noun', de: 'Blutdruck', article: 'der', ru: 'кровяное давление', en: 'blood pressure',
      examples: [ex('Mein Vater muss jeden Morgen seinen [[Blutdruck]] messen.', 'Моему отцу нужно каждое утро мерить давление.', 'My father has to take his blood pressure every morning.')] }),
    W({ id: 'b2-ges-physiotherapie', pos: 'noun', de: 'Physiotherapie', article: 'die', ru: 'физиотерапия, лечебная гимнастика', en: 'physiotherapy',
      examples: [ex('Nach der Knie-OP bekam sie zehn Termine [[Physiotherapie]].', 'После операции на колене ей назначили десять сеансов физиотерапии.', 'After the knee operation she was prescribed ten sessions of physiotherapy.')] },
      ['Разг. die Physio; специалист — der Physiotherapeut.', 'Colloquially die Physio; the therapist is der Physiotherapeut.']),
    W({ id: 'b2-ges-schonen', pos: 'verb', de: 'sich schonen', forms: { praes: 'schont sich', praet: 'schonte sich', perf: 'hat sich geschont' }, ru: 'беречь себя, щадить себя', en: 'to take it easy, to rest',
      examples: [ex('Der Arzt hat gesagt, ich soll mich noch ein paar Tage [[schonen]].', 'Врач сказал, что мне нужно ещё несколько дней поберечься.', 'The doctor said I should take it easy for a few more days.')] })
  ]);

  reg('b2_reisen', [
    W({ id: 'b2-reisen-handgepaeck', pos: 'noun', de: 'Handgepäck', article: 'das', ru: 'ручная кладь', en: 'hand luggage',
      examples: [ex('Flüssigkeiten im [[Handgepäck]] dürfen höchstens 100 Milliliter haben.', 'Жидкости в ручной клади — не больше 100 миллилитров.', 'Liquids in hand luggage may not exceed 100 millilitres.')] }),
    W({ id: 'b2-reisen-rundreise', pos: 'noun', de: 'Rundreise', article: 'die', plural: 'die Rundreisen', ru: 'тур по нескольким местам, круговая поездка', en: 'tour, round trip',
      examples: [ex('Im Sommer machen wir eine [[Rundreise]] durch Schottland.', 'Летом мы едем в тур по Шотландии.', 'This summer we’re doing a tour of Scotland.')] }),
    W({ id: 'b2-reisen-reiseziel', pos: 'noun', de: 'Reiseziel', article: 'das', plural: 'die Reiseziele', ru: 'место назначения, цель поездки', en: 'destination',
      examples: [ex('Portugal ist ein beliebtes [[Reiseziel]] für den Herbst.', 'Португалия — популярное направление для осенних поездок.', 'Portugal is a popular autumn destination.')] })
  ]);

  reg('b2_kultur', [
    W({ id: 'b2-kultur-roman', pos: 'noun', de: 'Roman', article: 'der', plural: 'die Romane', ru: 'роман (книга)', en: 'novel',
      examples: [ex('Ihr erster [[Roman]] wurde in zwölf Sprachen übersetzt.', 'Её первый роман перевели на двенадцать языков.', 'Her first novel was translated into twelve languages.')] },
      ['Не путать: роман (отношения) — die Affäre / die Romanze.', 'Not a love affair: that’s die Affäre / die Romanze.']),
    W({ id: 'b2-kultur-theaterstueck', pos: 'noun', de: 'Theaterstück', article: 'das', plural: 'die Theaterstücke', ru: 'пьеса, спектакль', en: 'play',
      examples: [ex('Das [[Theaterstück]] spielt im Berlin der Zwanzigerjahre.', 'Действие пьесы происходит в Берлине двадцатых годов.', 'The play is set in 1920s Berlin.')] }),
    W({ id: 'b2-kultur-buehne', pos: 'noun', de: 'Bühne', article: 'die', plural: 'die Bühnen', ru: 'сцена', en: 'stage',
      examples: [ex('Als die Band auf die [[Bühne]] kam, haben alle gejubelt.', 'Когда группа вышла на сцену, все закричали от радости.', 'When the band came on stage, everyone cheered.')] }),
    W({ id: 'b2-kultur-regisseur', pos: 'noun', de: 'Regisseur', article: 'der', plural: 'die Regisseure', ru: 'режиссёр', en: 'director (film, theatre)',
      examples: [ex('Der [[Regisseur]] hat für den Film einen Preis gewonnen.', 'Режиссёр получил за фильм премию.', 'The director won an award for the film.')] },
      ['Женский род: die Regisseurin. Произношение французское: [режисёр].', 'Feminine: die Regisseurin. Pronounced the French way.'])
  ]);
  // Words that already exist elsewhere: share the existing card in this topic instead of duplicating it.
  GT.addMember('b1-health-ueberweisung', 'words', 'b2_gesundheit');
})();
