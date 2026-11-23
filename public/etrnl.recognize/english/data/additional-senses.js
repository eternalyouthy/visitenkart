/* Common missing senses; IDs are appended without changing existing progress keys. */
(function (E) {
  'use strict';
  const rows = `
act|act|v|perform|B1|играть в спектакле или фильме|She wants to [[act]] in a local theatre production.|Она хочет сыграть в постановке местного театра.|Act in a play/film; здесь не «принимать меры».|PERFORM — играть в спектакле или фильме; явная метка B1 в Learner’s Dictionary.|https://dictionary.cambridge.org/dictionary/learner-english/act
act|act|n|deed|B2|поступок, отдельное действие|Returning the lost wallet was an [[act]] of honesty.|Вернуть потерянный кошелёк было честным поступком.|An act of kindness/bravery; исчисляемое существительное.|THING DONE — отдельное действие или поступок, B2.
form|form|n|document|A2|бланк, форма для заполнения|Please complete the online [[form]] before your appointment.|Заполните онлайн-форму до приёма.|Complete/fill in/fill out a form; не форма предмета.|DOCUMENT — документ с полями для сведений, A2.
form|form|n|grammar|B1|грамматическая форма слова|The past [[form]] of go is went.|Форма прошедшего времени глагола go — went.|Past/plural/short form; речь о грамматической форме.|GRAMMAR — форма слова с определённым грамматическим значением, B1.
form|formal|adj|style|B2|строгий, официальный по стилю|Use a [[formal]] style when writing to someone you do not know.|Пишите в официальном стиле, обращаясь к незнакомому человеку.|Formal language/dress; стиль, подходящий для серьёзной ситуации. Официальная процедура — другое значение.|SERIOUS — стиль языка, одежды или поведения, B2.
connect|connection|n|transport|B2|стыковочный рейс, пересадка|We have twenty minutes to catch our [[connection]] to Hamburg.|У нас двадцать минут, чтобы успеть на следующий поезд до Гамбурга.|Catch/miss a connection; следующий этап поездки после пересадки.|TRANSPORT — транспорт, на который пересаживаются для продолжения поездки, B2.
apply|apply|v|relevance|B2|распространяться, относиться к случаю|These rules [[apply]] to temporary accounts too.|Эти правила распространяются и на временные учётные записи.|Apply to someone/something; правило действует. Apply a rule — применять правило, другая конструкция.|RELATE TO/AFFECT — относиться к человеку или ситуации, B2.
relate|relationship|n|connection|B2|связь между явлениями|The chart shows a [[relationship]] between exercise and sleep quality.|График показывает связь между физической активностью и качеством сна.|Relationship between A and B; не обязательно причинность.|CONNECTION — способ связи двух вещей, B2.
support|support|v|encourage|B2|поддерживать идею, выступать за|Most residents [[support]] the plan for a new cycle route.|Большинство жителей поддерживает план новой велосипедной дорожки.|Support a plan/proposal; одобрять и содействовать успеху, а не просто помогать человеку.|ENCOURAGE — согласие с идеей и стремление к её успеху, B2.
support|support|n|backing|B2|поддержка идеи, одобрение|The proposal gained broad [[support]] from the team.|Предложение получило широкую поддержку команды.|Support for a proposal; in support of; неисчисляемое в этом значении.|ENCOURAGEMENT — одобрение идеи, группы или человека, B2.
produce|producer|n|film|B2|продюсер фильма или записи|The film's [[producer]] secured funding for the final scene.|Продюсер фильма обеспечил финансирование последней сцены.|Film/record producer; продюсер организует производство и финансирование, а не обязательно выступает режиссёром.|FILM/MUSIC — организация практической и финансовой стороны производства, B2.
possible|possible|adj|uncertain|B1|возможный, не исключённый|It is [[possible]] that the delivery will arrive tomorrow.|Возможно, доставка придёт завтра.|It is possible that; событие может произойти, но уверенности нет.|NOT CERTAIN — может произойти или оказаться верным, B1.
value|valuable|adj|money|B1|дорогостоящий, имеющий высокую цену|Keep [[valuable]] jewellery in a secure place.|Храните дорогостоящие украшения в безопасном месте.|Valuable objects/jewellery; высокая денежная стоимость. Valuable advice — другой смысл.|MONEY — высокая денежная стоимость предмета, B1.
comfort|comfortable|adj|physical|B1|чувствующий себя удобно, без боли|Are you [[comfortable]], or would you like another cushion?|Вам удобно или принести ещё одну подушку?|О состоянии человека, а не о свойствах стула. Make yourself comfortable.|PHYSICALLY OKAY — человек расслаблен и не испытывает боли, B1.|https://dictionary.cambridge.org/us/dictionary/english/comfortable
comfort|comfortable|adj|situation|B2|спокойно относящийся к ситуации|I am [[comfortable]] with the revised deadline.|Меня устраивает пересмотренный срок.|Comfortable with a situation/idea; отсутствие беспокойства, не физическое удобство.|NO PROBLEMS — не испытывать беспокойства из-за ситуации, B2.|https://dictionary.cambridge.org/us/dictionary/english/comfortable
`;
  rows.trim().split('\n').forEach(line => {
    const [familyId, headword, pos, sense, level, ru, en, translation, usage, evidence, sourceUrl] = line.split('|');
    const family = E.families.find(f => f.id === familyId);
    const members = family.entryIds.map(id => E.entries[id]);
    const existing = members.find(w => w.headword === headword && w.pos === pos) || members.find(w => w.headword === headword);
    if (!existing) throw new Error('Missing lexical template: ' + headword);
    const url = sourceUrl || E.dictionary(headword), checked = '2026-11-23';
    const source = { provider: 'Cambridge', level, scope: 'sense', title: 'Cambridge Dictionary', url, evidence, checked };
    const ratings = [source, ...existing.cefr.ratings.filter(r => r.provider === 'Oxford' && existing.pos === pos).map(r => ({ ...r }))];
    const morphology = { ...existing.morphology, parts: existing.morphology.parts.slice(),
      note: `Отдельное значение слова ${headword}. ${usage} Разбор написания не устанавливает историческое происхождение.` };
    if (morphology.parentId && E.entries[morphology.parentId].headword === headword && E.entries[morphology.parentId].pos === pos) morphology.parentId = null;
    if (existing.pos !== pos) { morphology.parentId = existing.id; morphology.relation = 'conversion'; }
    const id = E.id(headword, pos, sense);
    E.addEntry({ id, headword, pos, sense, ru, courseLevel: level,
      cefr: { level, status: 'referenced', scope: 'sense', source, ratings, conflict: new Set(ratings.map(r => r.level)).size > 1 },
      examples: [{ en, ru: translation }], morphology, semantic: ru,
      transparency: ['transport', 'connection', 'encourage', 'backing', 'situation'].includes(sense) ? 'figurative' : 'transparent',
      usage, categories: existing.categories.slice(), familyId, core: true,
      audit: { meaning: 'reference-checked', example: 'editorial-reviewed', morphology: 'editorial-reviewed', checked, source: url, evidence },
      sources: [{ title: 'Cambridge Dictionary', url, status: 'reference-checked', evidence }]
    });
    family.entryIds.push(id);
  });
  const informal = E.entries[E.id('informal', 'adj')];
  informal.morphology.parentId = E.id('formal', 'adj', 'style');
  informal.semantic = 'строгий официальный стиль → непринуждённый стиль общения';
})(ETEnglish);
