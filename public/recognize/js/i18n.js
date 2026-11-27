/* Language metadata + learning-hint templates per KNOWN language.
 * The interface (buttons, tabs, labels) stays English. Everything here is learning content
 * (hints, prompts, explanations) and therefore follows the "I know" language.
 * To add a language: add it to GT.LANGS, add a GT.HINTS entry, create a pack (see README.md). */
(function () {
  'use strict';

  GT.LANGS = {
    ru: {
      code: 'ru', name: 'Russian', native: 'Русский', short: 'RU', brand: 'RUSSIAN',
      speech: 'ru-RU', voiceLang: /^ru([-_]|$)/i, voiceRegion: /ru[-_]RU/i,
      testPhrase: 'Здра́вствуйте! Я отвеча́ю за информацио́нную безопа́сность.',
      // names of the learned language as used inside templates of each known language
      nameIn: { en: 'Russian', de: 'Russisch' }, adjIn: { ru: 'русский', en: 'Russian', de: 'Russisch' }
    },
    en: {
      code: 'en', name: 'English', native: 'English', short: 'EN', brand: 'ENGLISH',
      speech: 'en-GB', voiceLang: /^en([-_]|$)/i, voiceRegion: /en[-_](GB|US)/i,
      testPhrase: 'Good morning! I am responsible for information security.',
      nameIn: { ru: 'английский', de: 'Englisch' }, adjIn: { ru: 'английский', en: 'English', de: 'Englisch' }
    },
    de: {
      code: 'de', name: 'German', native: 'Deutsch', short: 'DE', brand: 'DEUTSCH',
      speech: 'de-DE', voiceLang: /^de([-_]|$)/i, voiceRegion: /de[-_]DE/i,
      testPhrase: 'die Sprechstunde. Guten Tag! Ich bin für die IT-Sicherheit zuständig.',
      nameIn: { ru: 'немецкий', en: 'German' }, adjIn: { ru: 'немецкий', en: 'German', de: 'Deutsch' }
    }
  };
  GT.KNOW_ORDER = ['ru', 'en', 'de'];
  GT.LEARN_ORDER = ['de', 'en', 'ru'];

  /* Learning hints, written in the KNOWN language. {L} = learned language name in that language. */
  GT.HINTS = {
    ru: {
      pickMeaning: 'Выберите точное значение выделенного слова/выражения:',
      restoreWord: 'Восстановите слово или выражение по контексту ({L} язык).',
      fillGrammar: 'Заполните пропуск правильной грамматической формой.',
      prefixQ: 'Какое значение приставки «{P}» работает в этом предложении?',
      particleQ: 'Какое значение частицы «{P}» работает в этом предложении?',
      allMeanings: 'Все значения:',
      opaque: 'Слово «{W}» («{M}») нельзя напрямую вывести из базового слова «{B}» («{BM}»). Запоминайте его как самостоятельное значение.',
      opaqueGeneric: 'Современное значение слова «{W}» разошлось с базовым значением корня — запоминайте его отдельно.',
      register: {
        formal: 'Формально: вежливая форма, учреждения, письма, незнакомые люди.',
        neutral: 'Нейтрально: подходит почти везде — на работе и в быту.',
        informal: 'Неформально: с друзьями и близкими коллегами.',
        slang: 'Сленг: улица, друзья, соцсети. Не для работы и официальных ситуаций.',
        vulgar: 'Грубо / мат: только среди своих, и то не со всеми.',
        vulgarWarn: 'Это мат или очень грубое слово. Знать полезно, чтобы понимать улицу, рэп и фильмы. Но скажешь не тому человеку и не в том месте — могут и лицо подровнять. С незнакомыми, на работе и при старших — никогда.',
        literary: 'Книжно-выразительно: родом из классики, но понятно носителям в живой речи, эссе и разговоре — главное, без пафоса.',
        ironic: 'Иронично: литературная формула с тонкой усмешкой — уместна в умном разговоре, статье или дружеском споре.',
        elevated: 'Возвышенно-образно: сильная литературная метафора для точных описаний, писем и глубоких разговоров.'
      },
      studio: {
        mixed: 'Смешанный режим: узнавание в контексте ({LS} → {KS}), перевод, пропуск в предложении и словообразование вперемешку.',
        recognition: 'Направление {LS} → {KS}: вы видите предложение и выбираете точное значение выделенного слова.',
        translation: 'Направление {KS} → {LS}: по значению вспоминаете и вводите слово или фразу.',
        derivative: 'Словообразование: даётся базовое слово семьи и контекст — нужно образовать нужное однокоренное слово.',
        cloze: 'Пропуск в предложении: восстановите слово в нужной форме. Над полем всегда написано, что именно нужно сделать.',
        builder: 'Соберите предложение: нажимайте на слова по порядку. Сверху перевод.',
        duel: 'Дуэль внутри семьи: в предложении пропуск, а варианты — родственные слова с разными приставками и суффиксами.',
        family: 'Дан корень. За 90 секунд напишите как можно больше слов этой семьи.',
        match: 'Соедините слова с их значениями: сначала слово, потом значение (или наоборот).',
        odd: 'Из четырёх слов три — одной семьи (или темы). Найдите лишнее.',
        dictation: 'Диктант: предложение звучит вслух, впишите пропущенное слово. Кнопка динамика повторяет, «Slower» — медленнее.',
        blitz: '60 секунд: подходит ли значение к слову? Отвечайте как можно быстрее, стрелками ← и →.',
        gender: 'Род существительных на скорость: der / die / das или мужской / женский / средний.',
        affix: 'Приставки и суффиксы: значения в контексте, род и часть речи по суффиксу.',
        grammar: 'Грамматика из всех тем: выбор формы, пропуски и порядок слов, с объяснением.',
        h: {
          asIs: 'Вставьте слово в словарной форме — менять ничего не нужно.',
          verb: 'Нужен глагол в правильной форме: проспрягайте его (лицо, число, время).',
          noun: 'Нужно существительное в правильной форме: число или падеж.',
          adj: 'Нужно прилагательное или наречие в правильной форме (окончание).',
          form: 'Поставьте слово в форму, которая подходит к предложению.',
          split: 'Ответ из двух частей (например, глагол и отделяемая приставка или частица): введите обе части по порядку через пробел.',
          multi: 'Выражение из нескольких частей: введите все пропущенные части по порядку через пробел.',
          chunkForm: 'Вставьте выражение, подогнав его под предложение (лицо, время, формы слов).',
          phrase: 'Нужна целая фраза или выражение, а не одно слово.',
          withArticle: 'Существительное: можно ввести с артиклем (der / die / das).',
          infinitive: 'Глагол: введите словарную форму (инфинитив).',
          dictForm: 'Введите слово в словарной форме.',
          derive: 'Образуйте от базового слова однокоренное слово с этим значением (в словарной форме).',
          dictation: 'Послушайте предложение и впишите пропущенное.',
          builder: 'Соберите предложение из слов по порядку.',
          builderAlt: 'Порядок слов иногда бывает гибким. Если ваш вариант тоже звучит естественно — хорошо, но запомните образец.',
          duel: 'Какое слово из этой семьи подходит по смыслу? Форму не учитываем — выберите слово.',
          oddRoot: 'У трёх слов общий корень. Какое слово лишнее?',
          oddTopic: 'Три слова из одной темы. Какое слово лишнее?',
          genderDe: 'Какой артикль у этого существительного?',
          gender: 'Какого рода это существительное?',
          family: 'Пишите слова этой семьи в словарной форме — по одному, с Enter.',
          match: 'Соедините слово с его значением.',
          blitz: 'Значение подходит к слову? Быстро: ✓ или ✗.',
          lMeaning: 'Значение', lDict: 'Словарная форма', lStart: 'Начало', lFamily: 'Семья слов',
          lExample: 'Пример', lTranslation: 'Перевод', lFirst: 'Начало предложения'
        },
        truth: 'Честно: эта вкладка — разминка. Здесь вы закрепляете слова и формы, но заговорить на языке только отсюда не получится.\n\nЛучшая тренировка — живая речь. Смотрите видео и повторяйте за говорящими, чтобы ставить произношение и интонацию. И главное — разговаривайте: сами производите речь.\n\nНе обязательно с носителями — с кем угодно, с кем вам интересно. Найдите сообщества, клубы, чаты и созвоны, где говорят на этом языке: всё это можно, не выходя из дома.\n\nНравится разговаривать с нейросетью — разговаривайте с нейросетью. Нравится вести диалоги с самим собой на другом языке — тоже вариант, если вам это в радость. Но живой собеседник всё-таки лучше.\n\nИ не ждите, что нейросеть поправит ваш акцент. Она не слышит, как именно вы говорите, — она видит только расшифровку вашей речи текстом. Если нейросеть обещает подсказать, как правильно произносить, — она вам врёт.\n\nТак что потыкайте здесь, а потом идите и поговорите с кем-нибудь.'
      },
      missing: 'Перевод ещё не готов — показан оригинал.',
      prompt: {
        intro: 'Давай потренируем разговорный {ADJ} язык. Читаю и понимаю на слух лучше, чем говорю; активный словарный запас слабее.',
        topic: 'Тема: ', scenario: 'Сценарий: ', scenarioDefault: 'реалистичная бытовая ситуация, в которой эти слова нужны естественным образом. Роль выбери сам.',
        words: 'Слова, которые я только что выучил(а):', chunks: 'Фразы, которые я хочу использовать:', rules: 'Правила:',
        r1: '1. Разыграй со мной этот сценарий. Говори со мной ТОЛЬКО на языке, который я учу ({LN}), и оставайся в роли. Начни с одной короткой реплики.',
        r2: '2. Заставляй меня активно использовать слова и фразы из списка: создавай ситуации и задавай вопросы, где они нужны. Сам(а) их все не используй. Если я какие-то избегаю — мягко подталкивай к ним.',
        r3: '3. Твой язык — уровня {LVL}: короткие предложения, частотная лексика, без редких идиом. Говори естественно, как носитель.',
        r4: '4. НЕ перебивай и не исправляй меня посреди фразы. Сначала ответь в роли. Потом, в КОНЦЕ каждого обмена репликами, добавь короткий блок «Исправления:» — максимум 3 главные ошибки: мой вариант → правильный вариант + короткое объяснение ПО-РУССКИ. Если ошибок нет, напиши «Исправления: ✓».',
        r5: '5. Примерно через 10 обменов заверши сцену и скажи по-русски, какие слова и фразы я использовал(а) правильно, а какие избегал(а) или употребил(а) с ошибками.',
        start: 'Начинай. Сама ролевая игра — только на изучаемом языке.'
      }
    },
    en: {
      pickMeaning: 'Choose the exact meaning of the highlighted word or phrase:',
      restoreWord: 'Restore the {L} word or phrase from the context.',
      fillGrammar: 'Fill the gap with the correct grammatical form.',
      prefixQ: 'Which meaning of the prefix “{P}” is at work in this sentence?',
      particleQ: 'Which meaning of the particle “{P}” is at work in this sentence?',
      allMeanings: 'All meanings:',
      opaque: 'The word “{W}” (“{M}”) cannot be derived directly from the base word “{B}” (“{BM}”). Learn it as a meaning of its own.',
      opaqueGeneric: 'The modern meaning of “{W}” has drifted away from the root — learn it separately.',
      register: {
        formal: 'Formal: polite address, offices, letters, people you don’t know.',
        neutral: 'Neutral: fits almost everywhere — at work and in everyday life.',
        informal: 'Informal: with friends and close colleagues.',
        slang: 'Slang: the street, friends, social media. Not for work or formal situations.',
        vulgar: 'Vulgar / swearing: only among close friends, and not with all of them.',
        vulgarWarn: 'This is a swear word or very rude slang. Worth knowing so you understand the street, rap and films. Say it to the wrong person in the wrong place and you might get your face rearranged. Never with strangers, at work or around older people.',
        literary: 'Literary & expressive: born in classic literature, still understood by native speakers in essays and conversation — best used lightly, without melodrama.',
        ironic: 'Ironic: a literary turn of phrase with dry wit — natural in sharp conversation, essays or friendly debate.',
        elevated: 'Elevated & vivid: a strong literary image suited to precise descriptions, letters and thoughtful conversation.'
      },
      studio: {
        mixed: 'Mixed mode: recognition in context ({LS} → {KS}), translation, cloze and word formation, shuffled together.',
        recognition: 'Direction {LS} → {KS}: you see a sentence and pick the exact meaning of the highlighted word.',
        translation: 'Direction {KS} → {LS}: recall the word or phrase from its meaning and type it.',
        derivative: 'Word formation: you get the base word of a family plus a context and form the right relative.',
        cloze: 'Cloze: restore the word in the right form inside the sentence. The line above the field always says what is expected.',
        builder: 'Sentence builder: tap the words in order. The translation is at the top.',
        duel: 'Family duel: a sentence with a gap, and the options are relatives with different prefixes and suffixes.',
        family: 'You get a root. Write as many words of its family as you can in 90 seconds.',
        match: 'Match words with their meanings: tap a word, then its meaning (or the other way round).',
        odd: 'Three of four words share a family (or a topic). Find the odd one out.',
        dictation: 'Dictation: the sentence is read aloud; type the missing word. The speaker button repeats it, “Slower” slows it down.',
        blitz: '60 seconds: does the meaning fit the word? Answer as fast as you can with ← and →.',
        gender: 'Noun gender at speed: der / die / das, or masculine / feminine / neuter.',
        affix: 'Prefixes and suffixes: meanings in context, gender and part of speech from the suffix.',
        grammar: 'Grammar from every topic: choose the form, fill the gap, put words in order — with an explanation.',
        h: {
          asIs: 'Use the word in its dictionary form — no change needed.',
          verb: 'A verb in the right form is needed: conjugate it (person, number, tense).',
          noun: 'A noun in the right form is needed: number or case.',
          adj: 'An adjective or adverb in the right form (ending) is needed.',
          form: 'Put the word into the form that fits the sentence.',
          split: 'The answer has two parts (e.g. a verb and its separable prefix or particle): type both in order, separated by a space.',
          multi: 'A multi-part expression: type all missing parts in order, separated by spaces.',
          chunkForm: 'Insert the expression and adapt it to the sentence (person, tense, word forms).',
          phrase: 'A whole phrase or expression is needed, not a single word.',
          withArticle: 'A noun: you may type it with its article (der / die / das).',
          infinitive: 'A verb: type its dictionary form (infinitive).',
          dictForm: 'Type the word in its dictionary form.',
          derive: 'Form a word of the same family with this meaning (dictionary form).',
          dictation: 'Listen to the sentence and type what is missing.',
          builder: 'Put the words in the right order.',
          builderAlt: 'Word order is sometimes flexible. If your version also sounds natural, fine — but remember the model.',
          duel: 'Which word of this family fits the meaning? Ignore the form — just pick the word.',
          oddRoot: 'Three words share a root. Which one is the odd one out?',
          oddTopic: 'Three words come from one topic. Which one is the odd one out?',
          genderDe: 'Which article does this noun take?',
          gender: 'What gender is this noun?',
          family: 'Type words of this family in their dictionary form — one at a time, press Enter.',
          match: 'Match each word with its meaning.',
          blitz: 'Does the meaning fit the word? Quick: ✓ or ✗.',
          lMeaning: 'Meaning', lDict: 'Dictionary form', lStart: 'Starts with', lFamily: 'Word family',
          lExample: 'Example', lTranslation: 'Translation', lFirst: 'Sentence starts with'
        },
        truth: 'Honestly: this tab is a warm-up. Here you consolidate words and forms, but you won’t learn to speak a language from this alone.\n\nThe best training is live speech. Watch videos and repeat after the speakers to shape your pronunciation and intonation. And above all, talk — produce speech yourself.\n\nNot necessarily with native speakers — with anyone you find interesting. Look for communities, clubs, chats and calls where people speak the language: all of it is possible without leaving home.\n\nIf you enjoy talking to an AI, talk to an AI. If you enjoy holding dialogues with yourself in another language, that works too, as long as it’s fun for you. But a living person is still better.\n\nAnd don’t expect an AI to fix your accent. It doesn’t hear how you actually sound — it only sees a text transcript of your speech. If an AI promises to tell you how to pronounce things correctly, it’s lying to you.\n\nSo tap around here a bit, then go and talk to someone.'
      },
      missing: 'Translation not available yet — showing the original.',
      prompt: {
        intro: 'Let’s practise spoken {ADJ}. I read and understand better than I speak; my active vocabulary is weaker.',
        topic: 'Topic: ', scenario: 'Scenario: ', scenarioDefault: 'a realistic everyday situation in which these words come up naturally. Choose the roles yourself.',
        words: 'Words I have just learned:', chunks: 'Phrases I want to use:', rules: 'Rules:',
        r1: '1. Play this scenario with me. Speak to me ONLY in the language I am learning ({LN}) and stay in your role. Start with one short line.',
        r2: '2. Make me actively use the words and phrases from the list: create situations and ask questions where they are needed. Don’t use them all yourself. If I avoid some, nudge me gently towards them.',
        r3: '3. Keep your language at {LVL} level: short sentences, frequent vocabulary, no rare idioms. Speak naturally, like a native speaker.',
        r4: '4. Do NOT interrupt or correct me mid-sentence. First answer in your role. Then, at the END of each exchange, add a short “Correction:” block — at most 3 main mistakes: my version → correct version + a short explanation IN ENGLISH. If there are no mistakes, write “Correction: ✓”.',
        r5: '5. After about 10 exchanges, end the scene and tell me in English which words and phrases I used correctly and which I avoided or used with mistakes.',
        start: 'Go ahead. The role-play itself only in the language I am learning.'
      }
    },
    de: {
      pickMeaning: 'Wähle die genaue Bedeutung des markierten Wortes oder Ausdrucks:',
      restoreWord: 'Ergänze das Wort oder den Ausdruck ({L}) aus dem Kontext.',
      fillGrammar: 'Fülle die Lücke mit der richtigen grammatischen Form.',
      prefixQ: 'Welche Bedeutung des Präfixes „{P}“ wirkt in diesem Satz?',
      particleQ: 'Welche Bedeutung der Partikel „{P}“ wirkt in diesem Satz?',
      allMeanings: 'Alle Bedeutungen:',
      opaque: 'Das Wort „{W}“ („{M}“) lässt sich nicht direkt aus dem Grundwort „{B}“ („{BM}“) ableiten. Lerne es als eigene Bedeutung.',
      opaqueGeneric: 'Die heutige Bedeutung von „{W}“ hat sich von der Wurzel entfernt — lerne sie separat.',
      register: {
        formal: 'Formell: höfliche Anrede, Behörden, Briefe, fremde Menschen.',
        neutral: 'Neutral: passt fast überall — bei der Arbeit und im Alltag.',
        informal: 'Informell: mit Freunden und vertrauten Kollegen.',
        slang: 'Slang: Straße, Freunde, Social Media. Nicht für die Arbeit oder formelle Situationen.',
        vulgar: 'Vulgär / Schimpfwort: nur unter engen Freunden, und auch da nicht mit allen.',
        vulgarWarn: 'Das ist ein Schimpfwort oder sehr derber Slang. Gut zu kennen, um Straße, Rap und Filme zu verstehen. Sagst du es zur falschen Person am falschen Ort, kann es was auf die Fresse geben. Nie bei Fremden, auf der Arbeit oder bei Älteren.',
        literary: 'Literarisch-ausdrucksstark: stammt aus der Klassik, ist Muttersprachlern aber heute noch vertraut — am besten ohne Pathos verwendet.',
        ironic: 'Ironisch: eine literarische Wendung mit trockenem Witz — passt in kluge Gespräche, Essays oder Debatten.',
        elevated: 'Gehoben & bildhaft: eine prägnante literarische Metapher für genaue Beschreibungen, Briefe und tiefere Gespräche.'
      },
      studio: {
        mixed: 'Gemischter Modus: Wiedererkennen im Kontext ({LS} → {KS}), Übersetzung, Lückentext und Wortbildung durcheinander.',
        recognition: 'Richtung {LS} → {KS}: Du siehst einen Satz und wählst die genaue Bedeutung des markierten Wortes.',
        translation: 'Richtung {KS} → {LS}: Aus der Bedeutung das Wort oder den Ausdruck abrufen und eintippen.',
        derivative: 'Wortbildung: Du bekommst das Grundwort einer Familie und einen Kontext und bildest das passende verwandte Wort.',
        cloze: 'Lückentext: Ergänze das Wort in der richtigen Form im Satz. Über dem Feld steht immer, was verlangt ist.',
        builder: 'Satzbau: Tippe die Wörter in der richtigen Reihenfolge an. Oben steht die Übersetzung.',
        duel: 'Familien-Duell: ein Satz mit Lücke, und die Optionen sind Verwandte mit verschiedenen Präfixen und Suffixen.',
        family: 'Du bekommst eine Wurzel. Schreib in 90 Sekunden so viele Wörter ihrer Familie wie möglich.',
        match: 'Ordne Wörter ihren Bedeutungen zu: erst das Wort, dann die Bedeutung (oder umgekehrt).',
        odd: 'Drei von vier Wörtern gehören zu einer Familie (oder einem Thema). Finde das, das nicht passt.',
        dictation: 'Diktat: Der Satz wird vorgelesen; tippe das fehlende Wort ein. Der Lautsprecher wiederholt, „Slower“ spricht langsamer.',
        blitz: '60 Sekunden: Passt die Bedeutung zum Wort? Antworte so schnell wie möglich mit ← und →.',
        gender: 'Genus im Tempo: der / die / das oder maskulin / feminin / neutrum.',
        affix: 'Präfixe und Suffixe: Bedeutungen im Kontext, Genus und Wortart nach dem Suffix.',
        grammar: 'Grammatik aus allen Themen: Form wählen, Lücke füllen, Wörter ordnen — mit Erklärung.',
        h: {
          asIs: 'Setze das Wort in der Grundform ein — nichts ändern.',
          verb: 'Gesucht ist ein Verb in der richtigen Form: konjugiere es (Person, Zahl, Zeit).',
          noun: 'Gesucht ist ein Nomen in der richtigen Form: Zahl oder Kasus.',
          adj: 'Gesucht ist ein Adjektiv oder Adverb in der richtigen Form (Endung).',
          form: 'Bring das Wort in die Form, die zum Satz passt.',
          split: 'Die Antwort hat zwei Teile (z. B. ein Verb und sein trennbares Präfix oder seine Partikel): tippe beide in der Reihenfolge, mit Leerzeichen.',
          multi: 'Ein mehrteiliger Ausdruck: tippe alle fehlenden Teile in der Reihenfolge, mit Leerzeichen.',
          chunkForm: 'Setze den Ausdruck ein und pass ihn an den Satz an (Person, Zeit, Wortformen).',
          phrase: 'Gesucht ist ein ganzer Ausdruck, nicht nur ein Wort.',
          withArticle: 'Ein Nomen: Du kannst es mit Artikel eingeben (der / die / das).',
          infinitive: 'Ein Verb: Gib die Grundform (Infinitiv) ein.',
          dictForm: 'Gib das Wort in der Grundform ein.',
          derive: 'Bilde ein Wort derselben Familie mit dieser Bedeutung (Grundform).',
          dictation: 'Hör dir den Satz an und tippe ein, was fehlt.',
          builder: 'Bring die Wörter in die richtige Reihenfolge.',
          builderAlt: 'Die Wortstellung ist manchmal flexibel. Wenn deine Version auch natürlich klingt — gut, aber merk dir das Muster.',
          duel: 'Welches Wort dieser Familie passt zur Bedeutung? Die Form ist egal — wähle das Wort.',
          oddRoot: 'Drei Wörter haben dieselbe Wurzel. Welches passt nicht?',
          oddTopic: 'Drei Wörter stammen aus einem Thema. Welches passt nicht?',
          genderDe: 'Welchen Artikel hat dieses Nomen?',
          gender: 'Welches Genus hat dieses Nomen?',
          family: 'Tippe Wörter dieser Familie in der Grundform — eins nach dem anderen, mit Enter.',
          match: 'Ordne jedes Wort seiner Bedeutung zu.',
          blitz: 'Passt die Bedeutung zum Wort? Schnell: ✓ oder ✗.',
          lMeaning: 'Bedeutung', lDict: 'Grundform', lStart: 'Beginnt mit', lFamily: 'Wortfamilie',
          lExample: 'Beispiel', lTranslation: 'Übersetzung', lFirst: 'Satzanfang'
        },
        truth: 'Ehrlich gesagt: Dieser Tab ist Aufwärmen. Hier festigst du Wörter und Formen, aber sprechen lernst du davon allein nicht.\n\nDas beste Training ist lebendige Sprache. Schau Videos und sprich den Leuten nach, um Aussprache und Intonation zu formen. Und vor allem: Rede — produziere selbst Sprache.\n\nNicht unbedingt mit Muttersprachlern — mit wem auch immer, der dich interessiert. Such dir Communities, Clubs, Chats und Calls, in denen die Sprache gesprochen wird: Das geht alles von zu Hause aus.\n\nDu redest gern mit einer KI? Dann rede mit einer KI. Du führst gern Dialoge mit dir selbst in einer anderen Sprache? Auch das geht, solange es dir Spaß macht. Aber ein lebendiger Mensch ist trotzdem besser.\n\nUnd erwarte nicht, dass eine KI deinen Akzent korrigiert. Sie hört nicht, wie du tatsächlich klingst — sie sieht nur eine Textabschrift deiner Sprache. Wenn eine KI verspricht, dir die richtige Aussprache beizubringen, lügt sie dich an.\n\nAlso: Tipp hier ein bisschen herum — und dann geh und rede mit jemandem.'
      },
      missing: 'Übersetzung noch nicht vorhanden — Original wird angezeigt.',
      prompt: {
        intro: 'Lass uns gesprochenes {ADJ} üben. Ich lese und verstehe besser, als ich spreche; mein aktiver Wortschatz ist schwächer.',
        topic: 'Thema: ', scenario: 'Szenario: ', scenarioDefault: 'eine realistische Alltagssituation, in der diese Wörter natürlich vorkommen. Wähle die Rollen selbst.',
        words: 'Wörter, die ich gerade gelernt habe:', chunks: 'Wendungen, die ich benutzen möchte:', rules: 'Regeln:',
        r1: '1. Spiel dieses Szenario mit mir. Sprich mit mir NUR in der Sprache, die ich lerne ({LN}), und bleib in deiner Rolle. Beginne mit einem kurzen Satz.',
        r2: '2. Bring mich dazu, die Wörter und Wendungen aus der Liste aktiv zu benutzen: Schaffe Situationen und stelle Fragen, in denen sie nötig sind. Benutze sie nicht alle selbst. Wenn ich manche vermeide, schubse mich sanft dorthin.',
        r3: '3. Dein Sprachniveau ist {LVL}: kurze Sätze, häufiger Wortschatz, keine seltenen Redewendungen. Sprich natürlich wie ein Muttersprachler.',
        r4: '4. Unterbrich und korrigiere mich NICHT mitten im Satz. Antworte zuerst in deiner Rolle. Füge dann AM ENDE jedes Austauschs einen kurzen Block „Korrektur:“ hinzu — höchstens 3 Hauptfehler: meine Version → richtige Version + kurze Erklärung AUF DEUTSCH. Wenn es keine Fehler gibt, schreib „Korrektur: ✓“.',
        r5: '5. Beende die Szene nach etwa 10 Wechseln und sag mir auf Deutsch, welche Wörter und Wendungen ich richtig benutzt und welche ich vermieden oder falsch verwendet habe.',
        start: 'Fang an. Das Rollenspiel selbst nur in der Sprache, die ich lerne.'
      }
    }
  };

  /** Hint text in the known language with placeholders filled. */
  GT.hint = function (path, vars) {
    var src = GT.HINTS[GT.know] || GT.HINTS.ru;
    var v = path.split('.').reduce(function (o, k) { return o && o[k]; }, src);
    if (v == null) v = path.split('.').reduce(function (o, k) { return o && o[k]; }, GT.HINTS.en);
    if (typeof v !== 'string') return v;
    var L = GT.LANGS[GT.learn], K = GT.LANGS[GT.know];
    var base = { L: (L.nameIn && L.nameIn[GT.know]) || L.name, LS: L.short, KS: K.short, LN: L.native, ADJ: (L.adjIn && L.adjIn[GT.know]) || L.name };
    vars = Object.assign(base, vars || {});
    return v.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
  };
})();
