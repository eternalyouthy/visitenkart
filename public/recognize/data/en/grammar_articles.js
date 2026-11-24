/* ENGLISH GRAMMAR · Articles: data for the English "Which form?" section (js/forms/en.js, #/articles).
 * Sentences: [text with ___, article 'a' | 'the' | '0' (zero), head noun, count 'c' | 'u' | 'pl' | 'name', reason]
 *   'a' means "indefinite": a or an is COMPUTED from the sound of the word right after the blank (SOUNDS below),
 *   never written by hand. Capitals at the start of a sentence are computed too.
 * Reasons (texts in js/forms/en.js):
 *   a/an: first · one · job · class · rate · whata (countable singular)
 *   the:  known · defined · situation · unique · super · geo · fixedthe · instrument
 *   zero: general · names · fixed · meals · langsub · days · next · whata (uncountable: What nice weather!)
 * GT.whichForm.check('en') lists inconsistent sentences (must be []). */
GT.EN_ARTICLES = {
  sentences: [
    // ---- a / an: first mention, one of many
    ['I saw ___ fox in the garden this morning.', 'a', 'fox', 'c', 'first'],
    ['We need ___ new printer for the office.', 'a', 'printer', 'c', 'first'],
    ['She has ___ old car.', 'a', 'car', 'c', 'first'],
    ['There is ___ email for you.', 'a', 'email', 'c', 'first'],
    ['I had ___ interesting conversation with my boss.', 'a', 'conversation', 'c', 'first'],
    ['Can I ask ___ question?', 'a', 'question', 'c', 'first'],
    ['He lives in ___ small flat near the station.', 'a', 'flat', 'c', 'first'],
    ['I bought ___ umbrella yesterday.', 'a', 'umbrella', 'c', 'first'],
    ['There is ___ problem with the server.', 'a', 'problem', 'c', 'first'],
    ['Would you like ___ apple?', 'a', 'apple', 'c', 'first'],
    ['We stayed in ___ hotel by the sea.', 'a', 'hotel', 'c', 'first'],
    ['Is there ___ bank near here?', 'a', 'bank', 'c', 'first'],
    ['My brother has ___ unusual hobby.', 'a', 'hobby', 'c', 'first'],
    // a / an = one
    ['I\'ll be back in ___ hour.', 'a', 'hour', 'c', 'one'],
    ['The ticket costs ___ hundred euros.', 'a', 'hundred', 'c', 'one'],
    ['Wait ___ minute, please.', 'a', 'minute', 'c', 'one'],
    // jobs and roles
    ['He is ___ teacher.', 'a', 'teacher', 'c', 'job'],
    ['My sister is ___ engineer.', 'a', 'engineer', 'c', 'job'],
    ['She works as ___ nurse.', 'a', 'nurse', 'c', 'job'],
    ['I want to be ___ architect.', 'a', 'architect', 'c', 'job'],
    ['Her father was ___ doctor.', 'a', 'doctor', 'c', 'job'],
    ['He works as ___ IT consultant.', 'a', 'consultant', 'c', 'job'],
    ['My mother is ___ university lecturer.', 'a', 'lecturer', 'c', 'job'],
    // what kind of thing it is
    ['This is ___ really good book.', 'a', 'book', 'c', 'class'],
    ['It was ___ easy decision.', 'a', 'decision', 'c', 'class'],
    ['That\'s ___ great idea!', 'a', 'idea', 'c', 'class'],
    ['Berlin is ___ exciting city.', 'a', 'city', 'c', 'class'],
    ['It\'s ___ honest answer.', 'a', 'answer', 'c', 'class'],
    ['This is ___ unusual situation.', 'a', 'situation', 'c', 'class'],
    ['Spain is ___ European country.', 'a', 'country', 'c', 'class'],
    // rate: a / an = per
    ['I go to the gym three times ___ week.', 'a', 'week', 'c', 'rate'],
    ['The speed limit is 50 km ___ hour.', 'a', 'hour', 'c', 'rate'],
    ['Apples cost two euros ___ kilo.', 'a', 'kilo', 'c', 'rate'],
    // What a …!
    ['What ___ beautiful day!', 'a', 'day', 'c', 'whata'],
    ['What ___ interesting idea!', 'a', 'idea', 'c', 'whata'],
    ['What ___ terrible weather!', '0', 'weather', 'u', 'whata'],

    // ---- the: already known / mentioned
    ['I bought a shirt and a jacket. ___ jacket was cheap.', 'the', 'jacket', 'c', 'known'],
    ['There was a man at the door. ___ man wanted to talk to you.', 'the', 'man', 'c', 'known'],
    ['We watched a film yesterday, but ___ film was boring.', 'the', 'film', 'c', 'known'],
    ['I got an email and a letter. I read ___ letter first.', 'the', 'letter', 'c', 'known'],
    // the: the phrase after the noun says which one
    ['Who is ___ woman in the red coat?', 'the', 'woman', 'c', 'defined'],
    ['___ book on the table is mine.', 'the', 'book', 'c', 'defined'],
    ['Paris is ___ capital of France.', 'the', 'capital', 'c', 'defined'],
    ['I can\'t find ___ keys that you gave me.', 'the', 'keys', 'pl', 'defined'],
    ['___ people who live next door are very friendly.', 'the', 'people', 'pl', 'defined'],
    ['Do you remember ___ name of the hotel?', 'the', 'name', 'c', 'defined'],
    ['___ information on this website is wrong.', 'the', 'information', 'u', 'defined'],
    ['___ coffee in this café is excellent.', 'the', 'coffee', 'u', 'defined'],
    // the: clear from the situation
    ['Can you close ___ window, please? It\'s cold.', 'the', 'window', 'c', 'situation'],
    ['Where are ___ car keys?', 'the', 'keys', 'pl', 'situation'],
    ['Dinner is in ___ oven.', 'the', 'oven', 'c', 'situation'],
    ['Could you pass ___ salt, please?', 'the', 'salt', 'u', 'situation'],
    ['Turn off ___ lights when you leave.', 'the', 'lights', 'pl', 'situation'],
    // the: only one exists
    ['___ sun rises in the east.', 'the', 'sun', 'c', 'unique'],
    ['There are no clouds in ___ sky.', 'the', 'sky', 'c', 'unique'],
    ['I found it on ___ internet.', 'the', 'internet', 'c', 'unique'],
    ['She wants to travel around ___ world.', 'the', 'world', 'c', 'unique'],
    ['___ moon is very bright tonight.', 'the', 'moon', 'c', 'unique'],
    // the: superlatives, first, same, only
    ['This is ___ best pizza in town.', 'the', 'pizza', 'c', 'super'],
    ['He was ___ first person to arrive.', 'the', 'person', 'c', 'super'],
    ['We have ___ same phone.', 'the', 'phone', 'c', 'super'],
    ['She is ___ only student who passed.', 'the', 'student', 'c', 'super'],
    ['It was ___ worst day of my life.', 'the', 'day', 'c', 'super'],

    // ---- zero: plural / uncountable in general, or an unspecified amount
    ['___ dogs are loyal animals.', '0', 'dogs', 'pl', 'general'],
    ['I love ___ music.', '0', 'music', 'u', 'general'],
    ['___ water boils at 100 degrees.', '0', 'water', 'u', 'general'],
    ['She doesn\'t eat ___ meat.', '0', 'meat', 'u', 'general'],
    ['___ money doesn\'t make you happy.', '0', 'money', 'u', 'general'],
    ['I\'m afraid of ___ spiders.', '0', 'spiders', 'pl', 'general'],
    ['___ children need a lot of sleep.', '0', 'children', 'pl', 'general'],
    ['I don\'t drink ___ coffee in the evening.', '0', 'coffee', 'u', 'general'],
    ['We need ___ more information.', '0', 'information', 'u', 'general'],
    ['Do you like ___ cats?', '0', 'cats', 'pl', 'general'],
    ['___ smoking is bad for you.', '0', 'smoking', 'u', 'general'],
    ['I\'m looking for ___ work.', '0', 'work', 'u', 'general'],
    ['He has ___ long hair.', '0', 'hair', 'u', 'general'],
    ['This shop sells ___ furniture.', '0', 'furniture', 'u', 'general'],
    ['___ time is money.', '0', 'time', 'u', 'general'],
    ['___ life is too short.', '0', 'life', 'u', 'general'],
    ['She is interested in ___ politics.', '0', 'politics', 'u', 'general'],
    ['I love ___ nature.', '0', 'nature', 'u', 'general'],

    // ---- names and places
    ['I live in ___ Berlin.', '0', 'Berlin', 'name', 'names'],
    ['___ Germany is in Europe.', '0', 'Germany', 'name', 'names'],
    ['We went to ___ Italy last summer.', '0', 'Italy', 'name', 'names'],
    ['___ Anna is my best friend.', '0', 'Anna', 'name', 'names'],
    ['They climbed ___ Mount Everest.', '0', 'Mount Everest', 'name', 'names'],
    ['Our office is on ___ Oxford Street.', '0', 'Oxford Street', 'name', 'names'],
    ['Have you ever been to ___ Asia?', '0', 'Asia', 'name', 'names'],
    ['We had a picnic by ___ Lake Geneva.', '0', 'Lake Geneva', 'name', 'names'],
    ['___ London is very expensive.', '0', 'London', 'name', 'names'],
    ['She lives in ___ Switzerland.', '0', 'Switzerland', 'name', 'names'],
    ['___ Thames flows through London.', 'the', 'Thames', 'name', 'geo'],
    ['We swam in ___ Mediterranean.', 'the', 'Mediterranean', 'name', 'geo'],
    ['They crossed ___ Atlantic by ship.', 'the', 'Atlantic', 'name', 'geo'],
    ['We went skiing in ___ Alps.', 'the', 'Alps', 'name', 'geo'],
    ['He lives in ___ USA.', 'the', 'USA', 'name', 'geo'],
    ['My cousin lives in ___ Netherlands.', 'the', 'Netherlands', 'name', 'geo'],
    ['She was born in ___ United Kingdom.', 'the', 'United Kingdom', 'name', 'geo'],
    ['___ Danube flows into the Black Sea.', 'the', 'Danube', 'name', 'geo'],
    ['___ Rhine flows through Germany.', 'the', 'Rhine', 'name', 'geo'],
    ['___ Sahara is a huge desert.', 'the', 'Sahara', 'name', 'geo'],

    // ---- fixed phrases
    ['The children are at ___ school.', '0', 'school', 'c', 'fixed'],
    ['I usually go to ___ bed at eleven.', '0', 'bed', 'c', 'fixed'],
    ['I\'m working from ___ home today.', '0', 'home', 'c', 'fixed'],
    ['He goes to ___ work by bike.', '0', 'work', 'u', 'fixed'],
    ['We went there by ___ bus.', '0', 'bus', 'c', 'fixed'],
    ['I can\'t sleep at ___ night.', '0', 'night', 'c', 'fixed'],
    ['He was sent to ___ prison for two years.', '0', 'prison', 'c', 'fixed'],
    ['I drink coffee in ___ morning.', 'the', 'morning', 'c', 'fixedthe'],
    ['Shall we go to ___ cinema tonight?', 'the', 'cinema', 'c', 'fixedthe'],
    ['Turn left, and the bank is on ___ right.', 'the', 'right', 'c', 'fixedthe'],
    ['I\'ll call you in ___ evening.', 'the', 'evening', 'c', 'fixedthe'],
    ['What do you usually have for ___ breakfast?', '0', 'breakfast', 'u', 'meals'],
    ['Let\'s have ___ lunch together.', '0', 'lunch', 'u', 'meals'],
    ['___ dinner is ready!', '0', 'dinner', 'u', 'meals'],
    ['She speaks ___ French fluently.', '0', 'French', 'u', 'langsub'],
    ['My son is good at ___ maths.', '0', 'maths', 'u', 'langsub'],
    ['We play ___ football on Saturdays.', '0', 'football', 'u', 'langsub'],
    ['Do you play ___ chess?', '0', 'chess', 'u', 'langsub'],
    ['I studied ___ history at university.', '0', 'history', 'u', 'langsub'],
    ['She plays ___ piano beautifully.', 'the', 'piano', 'c', 'instrument'],
    ['He\'s learning to play ___ guitar.', 'the', 'guitar', 'c', 'instrument'],
    ['See you on ___ Monday.', '0', 'Monday', 'name', 'days'],
    ['My birthday is in ___ May.', '0', 'May', 'name', 'days'],
    ['She was born in ___ 1995.', '0', '1995', 'name', 'days'],
    ['We\'re moving ___ next month.', '0', 'month', 'c', 'next'],
    ['I met him ___ last year.', '0', 'year', 'c', 'next']
  ],

  /* "a or an" mode: a word or phrase. The article is computed from the first word's SOUND. */
  aan: [
    'hour', 'honest man', 'university', 'umbrella', 'European country', 'MBA', 'one-way ticket', 'uniform', 'egg',
    'useful tip', 'hotel', 'unusual idea', 'apple', 'euro', 'island', 'year', 'X-ray', 'FBI agent', 'USB stick', 'house',
    'orange', 'interview', 'user', 'uncle', 'hospital', 'honour', 'idea', 'elephant', 'opportunity', 'office', 'unit',
    'hour-long meeting', 'MP', 'HR manager', 'ugly building', 'onion', 'unique chance', 'old friend', 'empty room', 'IT company'
  ],

  /* Words whose first SOUND differs from their first LETTER (+ how the start is pronounced).
   * v = vowel sound → an, c = consonant sound → a. Every other word: a vowel letter (a e i o u) = vowel sound.
   * check() refuses risky words (uni-, use-, eu-, one, hour, hon-, abbreviations) that are not listed here. */
  sounds: {
    hour: ['v', '/aʊə/'], 'hour-long': ['v', '/aʊə/'], honest: ['v', '/ˈɒnɪst/'], honour: ['v', '/ˈɒnə/'],
    MBA: ['v', '/em biː eɪ/'], 'X-ray': ['v', '/eks reɪ/'], FBI: ['v', '/ef biː aɪ/'], MP: ['v', '/em piː/'],
    HR: ['v', '/eɪtʃ ɑː/'], IT: ['v', '/aɪ tiː/'],
    university: ['c', '/juː-/'], uniform: ['c', '/juː-/'], unique: ['c', '/juː-/'], unit: ['c', '/juː-/'],
    useful: ['c', '/juː-/'], user: ['c', '/juː-/'], euro: ['c', '/jʊə-/'], European: ['c', '/jʊə-/'],
    'one-way': ['c', '/wʌn/'], one: ['c', '/wʌn/'], USB: ['c', '/juː es biː/'],
    // vowel letter + vowel sound, listed only because they look risky
    unusual: ['v', '/ʌn-/'], umbrella: ['v', '/ʌm-/'], uncle: ['v', '/ʌŋ-/'], ugly: ['v', '/ʌɡ-/'], onion: ['v', '/ʌn-/']
  }
};

GT.EN_ARTICLES.sentences.push(
  ["Could I borrow ___ pen? Any colour will do.", "a", "pen", "c", "first"],
  ["We need ___ extension cable. Any short one will do.", "a", "cable", "c", "first"],
  ["I found ___ earring on the pavement this morning.", "a", "earring", "c", "first"],
  ["The walk takes ___ hour and ten minutes.", "a", "hour", "c", "one"],
  ["Please give me ___ second to check the address.", "a", "second", "c", "one"],
  ["Rosa works as ___ electrician.", "a", "electrician", "c", "job"],
  ["My neighbour is ___ union representative.", "a", "representative", "c", "job"],
  ["Sam wants to become ___ airline pilot.", "a", "pilot", "c", "job"],
  ["A cello is ___ string instrument.", "a", "instrument", "c", "class"],
  ["An MRI scan is ___ medical imaging procedure.", "a", "procedure", "c", "class"],
  ["Our choir rehearses twice ___ month.", "a", "month", "c", "rate"],
  ["The lockers cost one euro ___ day.", "a", "day", "c", "rate"],
  ["What ___ unexpected result!", "a", "result", "c", "whata"],
  ["What ___ lovely weather for a walk!", "0", "weather", "u", "whata"],
  ["I ordered a sandwich and a salad, but only ___ sandwich arrived.", "the", "sandwich", "c", "known"],
  ["I saw a fox and two rabbits. A moment later, ___ fox ran into the woods.", "the", "fox", "c", "known"],
  ["Please send me ___ photo you took of us yesterday. There's only one.", "the", "photo", "c", "defined"],
  ["What was ___ name of the person who called?", "the", "name", "c", "defined"],
  ["We're in the lift. Could you press ___ button for the third floor?", "the", "button", "c", "situation"],
  ["It's dark in this kitchen. Can you switch on ___ light?", "the", "light", "c", "situation"],
  ["Look up at the sky. Can you see ___ moon behind that cloud?", "the", "moon", "c", "unique"],
  ["We could see stars in ___ sky above us.", "the", "sky", "c", "unique"],
  ["Of the three options, this is ___ shortest route.", "the", "route", "c", "super"],
  ["The twins were born on ___ same day.", "the", "day", "c", "super"],
  ["As a rule, ___ bicycles take up less space than cars.", "0", "bicycles", "pl", "general"],
  ["You need ___ patience to teach a puppy.", "0", "patience", "u", "general"],
  ["I don't take ___ sugar in my coffee.", "0", "sugar", "u", "general"],
  ["The night train from ___ Vienna was on time.", "0", "Vienna", "name", "names"],
  ["Our friends live near ___ Lake Ontario.", "0", "Lake Ontario", "name", "names"],
  ["The ferry crossed ___ English Channel overnight.", "the", "English Channel", "name", "geo"],
  ["Several capitals lie on ___ Danube.", "the", "Danube", "name", "geo"],
  ["I get to work by ___ tram most mornings.", "0", "tram", "c", "fixed"],
  ["The baby's tired. It's time for ___ bed.", "0", "bed", "c", "fixed"],
  ["My desk is the second one on ___ left.", "the", "left", "c", "fixedthe"],
  ["We usually bake bread in ___ morning.", "the", "morning", "c", "fixedthe"],
  ["Would you like to stay for ___ dinner?", "0", "dinner", "u", "meals"],
  ["We normally have ___ breakfast before seven.", "0", "breakfast", "u", "meals"],
  ["My grandparents speak ___ Polish at home.", "0", "Polish", "u", "langsub"],
  ["Our class plays ___ volleyball on Fridays.", "0", "volleyball", "u", "langsub"],
  ["She plays ___ violin in a string quartet.", "the", "violin", "c", "instrument"],
  ["Leo is learning to play ___ flute.", "the", "flute", "c", "instrument"],
  ["The course starts in ___ October.", "0", "October", "name", "days"],
  ["Our next rehearsal is on ___ Thursday.", "0", "Thursday", "name", "days"],
  ["We signed the new lease ___ last month.", "0", "month", "c", "next"],
  ["I'll be in Leeds ___ next Friday.", "0", "Friday", "name", "next"]
);

GT.EN_ARTICLES.aan.push(
  "union meeting",
  "unicorn costume",
  "one-off payment",
  "one-bedroom flat",
  "honorary member",
  "honesty box",
  "hourly service",
  "eulogy",
  "MRI scan",
  "LCD screen",
  "ID card",
  "EU citizen",
  "UK resident",
  "DVD player",
  "UN agency",
  "emergency exit",
  "annual pass",
  "used bike",
  "yellow envelope",
  "wooden gate",
  "outdoor concert",
  "upper shelf",
  "open window",
  "history lesson"
);

Object.assign(GT.EN_ARTICLES.sounds, {
  union: ['c', '/juː-/'], unicorn: ['c', '/juː-/'], 'one-off': ['c', '/wʌn-/'], 'one-bedroom': ['c', '/wʌn-/'],
  honorary: ['v', '/ɒn-/'], honesty: ['v', '/ɒn-/'], hourly: ['v', '/aʊə-/'], eulogy: ['c', '/juː-/'],
  MRI: ['v', '/em ɑːr aɪ/'], LCD: ['v', '/el siː diː/'], ID: ['v', '/aɪ diː/'], EU: ['v', '/iː juː/'],
  UK: ['c', '/juː keɪ/'], DVD: ['c', '/diː viː diː/'], UN: ['c', '/juː en/'], used: ['c', '/juːzd/']
});
