/* OVERLAY · English notes, usage notes, etymologies (WHY?) & senses for GERMAN Professional, Chunks & Expressions. */
(function () {
  GT.localize('en', {
    "it-sec-schwachstelle": {
      "note": "Also used outside IT: “Die Schwachstelle in deinem Plan ist das Budget”. Typical verbs: eine Schwachstelle finden / melden / ausnutzen / schließen / beheben.",
      "usageNote": "In reports, with management, at the BSI and in the press — “Schwachstelle” (or “Sicherheitslücke”). Within the tech team people also say “Vulnerability”, “Vuln” or simply “die CVE”.",
      "why": {
        "text": "Composition: adjective schwach (“weak”) + noun die Stelle (“place, spot”).\nOrigin: 20th-century determinative compound, originally in engineering and everyday speech — “weak, vulnerable spot”; later established as the standard IT security term for a vulnerability.\nTransparency: figurative, the meaning is easily read from the two parts.",
        "evidence": "Compound of schwach + Stelle (“weak spot”), widespread in engineering and IT security."
      },
      "meaningExplanation": "Schwachstelle is both a general “weak point” (in a plan, argument, design) and the standard IT security term for “vulnerability”.",
      "meaningExamples": [
        "to patch a critical vulnerability (IT)",
        "the weak point in your plan"
      ],
      "parts": [
        "weak",
        "die Stelle — place, spot"
      ]
    },
    "it-sec-angriff": {
      "note": "Verb: angreifen (griff an, hat angegriffen). “Der Angreifer” — attacker; “die Angriffsfläche” — attack surface; “der Angriffsvektor” — attack vector. “Ziel eines Angriffs werden” — to become the target of an attack.",
      "usageNote": "“Angriff / Cyberangriff” is the everyday word. English stays in the names of attack types: “Brute-Force-Angriff”, “Supply-Chain-Angriff”, “Man-in-the-Middle-Angriff”.",
      "why": {
        "text": "Composition: from the verb angreifen (an- + greifen) with ablaut in the stem (griff).\nOrigin: angreifen originally meant “to take hold of something, to seize”, and later “to fall upon, to attack” (the military sense was established by the Early New High German period). Zugriff and begreifen go back to the same root greifen.\nTransparency: figurative — the image of “seizing” in the sense of “attacking” is only weakly felt.",
        "evidence": "Deverbal noun from angreifen (“to take hold of, seize” → “to attack”); root greifen “to grasp, seize”."
      },
      "parts": [
        "on, at",
        "stem of greifen — to grasp, seize"
      ]
    },
    "it-sec-berechtigung": {
      "note": "“Das Berechtigungskonzept” (access control / authorization concept) is a typical German document for audits. “Berechtigungen vergeben / entziehen” — to grant / revoke permissions. Least privilege: “das Prinzip der minimalen Rechte”, though many say “Least Privilege”.",
      "usageNote": "“Berechtigung(en)” or “Rechte” (Admin-Rechte). English “Permissions” appears in user interfaces, but in conversation and audits German is used: “das Berechtigungskonzept”.",
      "why": {
        "text": "Composition: from the verb berechtigen (be- + Recht + -ig-en) + -ung.\nOrigin: das Recht and the adjective recht go back to an Indo-European root meaning “straight, straightened” (hence “straight” → “right, proper” → “law, right”).\nTransparency: transparent — the stem Recht is immediately visible.",
        "evidence": "berechtigen “to entitle, authorize” from Recht (< Gmc. *rehta- “straight, right” < PIE *h₃reǵ-to-)."
      },
      "parts": [
        "inseparable prefix",
        "das Recht — right, law",
        "verb-forming suffix",
        "verb → noun, always die"
      ]
    },
    "it-sec-patch": {
      "note": "“Einspielen” is a very German IT verb: “ein Update / einen Patch / ein Backup einspielen” — to install / apply / restore. “Patchday” — Microsoft’s monthly “Patch Tuesday”.",
      "usageNote": "Everyone says “Patch” and “patchen” (patchte, hat gepatcht). More formally: “das Sicherheitsupdate”. The German verb for installing/applying a patch is “einspielen”.",
      "why": {
        "text": "Composition: unanalysable borrowing from English.\nOrigin: English patch (“piece of cloth used to mend a hole”) was transferred to computing in the mid-20th century — first for physical patches on punched cards and in machine code, then for software fixes. The term entered German directly from IT English.\nTransparency: the image of a patch is clear from English patch.",
        "evidence": "Eng. patch, computing term for a code fix since the 1950s; borrowed into German."
      }
    },
    "it-sec-verschluesselung": {
      "note": "“Schlüssel” — key, including a cryptographic key: “der private / öffentliche Schlüssel”. “Ende-zu-Ende-Verschlüsselung” — end-to-end encryption. Informal imperative: “Verschlüssel(e) die Datei!”",
      "usageNote": "Almost always in German: “Verschlüsselung”, “verschlüsseln”, “entschlüsseln”. “Encryption” is only used in product names.",
      "why": {
        "text": "Composition: from the verb verschlüsseln (ver- + Schlüssel) + -ung.\nOrigin: der Schlüssel (“key”) is formed from the verb schließen (“to lock, close”). In the 20th century verschlüsseln became established as the German equivalent for “to encode, encrypt” (literally “to lock with a key”).\nTransparency: figurative, but the image of a key is completely clear.",
        "evidence": "Schlüssel — derivative of schließen “to lock”; verschlüsseln (20th c.) — “to lock with a key, to encrypt”."
      },
      "parts": [
        "inseparable prefix",
        "der Schlüssel — key",
        "verb → noun, always die"
      ]
    },
    "it-sec-phishing": {
      "note": "Useful collocations: “eine verdächtige Mail melden” — to report a suspicious email, “auf einen Link klicken”, “den Anhang öffnen” — to open the attachment, “der Absender ist gefälscht” — the sender is forged/spoofed.",
      "usageNote": "Only the English word is used. “Die Phishing-Mail” (die Mail / die E-Mail), “die Phishing-Kampagne”, “Spear-Phishing”.",
      "why": {
        "text": "Composition: borrowing from 1990s English IT slang.\nOrigin: a play on English fishing (“angling” for passwords). The spelling with ph- is usually explained by analogy with phreaking (hacking telephone networks), though the exact origin of the spelling is not strictly documented.\nTransparency: borrowed term, understandable via its link to fishing.",
        "evidence": "Attested in the mid-1990s (AOL scene) as a play on fishing; the link of ph- to phreaking is the generally accepted view."
      }
    },
    "it-sec-sicherheitsvorfall": {
      "note": "“Ein Vorfall” is any (unpleasant) incident, outside IT as well. Typical verbs: einen Vorfall melden / bearbeiten / untersuchen / eskalieren / abschließen.",
      "usageNote": "Officially and with management — “Sicherheitsvorfall” / “Vorfall”. In the SOC — “Incident”, “Incident Response”, “das Ticket ist ein echter Incident”.",
      "why": {
        "text": "Composition: die Sicherheit (“security, safety”) + linking -s- + der Vorfall (“incident”).\nOrigin: sicher is an early borrowing from Latin sēcūrus (“carefree, untroubled, safe”). Vorfall is formed from the verb vorfallen (“to happen, occur”, from vor + fallen).\nTransparency: the compound is transparent (“incident in the area of security”), though the link between Vorfall and fallen has faded.",
        "evidence": "sicher < OHG sihhur < Lat. sēcūrus; Vorfall — deverbal noun from vorfallen “to occur”."
      },
      "parts": [
        "die Sicherheit — security, safety",
        "linking element (Fugen-s)",
        "der Vorfall — incident (from vorfallen)"
      ]
    },
    "it-sec-firewall": {
      "note": "“Freischalten” — to open, enable (a port, an account); “sperren” — to block, lock (an account, a port). A very frequent pair in tickets.",
      "usageNote": "Always “die Firewall”. Note the article: die (like “die Wand” — wall). “Die Firewall-Regel” — firewall rule.",
      "why": {
        "text": "Composition: borrowing from English (fire + wall).\nOrigin: in construction, a fire wall (German die Brandmauer) is a fireproof wall preventing fire from spreading to an adjacent room. In the late 20th century the term was transferred to computer networks; the feminine gender (die Firewall) in German is usually linked to the gender of die Wand and die Mauer.\nTransparency: figurative, the building metaphor is easy to understand.",
        "evidence": "Eng. fire wall (“fireproof wall”), used in computer networking since the late 1980s."
      },
      "meaningExplanation": "Originally a fire wall in construction (Brandmauer) that stops fire from spreading further; in IT this image was transferred to a network security barrier.",
      "meaningExamples": [
        "The firewall blocks the traffic (like a protective wall)."
      ]
    },
    "it-sec-2fa": {
      "note": "The letters are pronounced in German: A — “ah”, F — “eff”, M — “emm”. Logging in: “sich anmelden” (standard) or “sich einloggen” (among IT staff). “Pflicht” — mandatory.",
      "usageNote": "Written “Zwei-Faktor-Authentifizierung”. Spoken “2FA” or “MFA” — pronounced in German: “Zwei-Eff-A”, “Em-Eff-A”.",
      "why": {
        "text": "Composition: three-part compound zwei (“two”) + Faktor (“factor”) + Authentifizierung (“authentication”).\nOrigin: Faktor goes back to Latin factor (“maker, agent”, from facere); authentisch goes via Latin to Greek authentikós (“genuine, authentic”). In IT security the compound translates English two-factor authentication.\nTransparency: completely transparent international term.",
        "evidence": "zwei + Faktor (< Lat. factor) + Authentifizierung (< Gk. authentikós “genuine”); equivalent of Eng. two-factor authentication."
      }
    },
    "it-sec-ausnutzen": {
      "note": "Outside IT often negative: “Er nutzt seine Kollegen aus” — he takes advantage of his colleagues. Separable: “Sie nutzen die Lücke aus”.",
      "usageNote": "Standard: “eine Schwachstelle ausnutzen”. Tech slang: “exploiten”; noun — “der Exploit”.",
      "why": {
        "text": "Composition: separable prefix aus- (“to the end, completely”) + nutzen (“to use”).\nOrigin: nutzen is related to der Nutzen (“benefit, use”). With the prefix aus-, the verb means “to use to the full, squeeze all benefit out of” — hence both neutral “to make use of” and negative “to exploit” (people or a vulnerability).\nTransparency: figurative, but the root nutzen and the role of aus- are easily read.",
        "evidence": "nutzen (from Nutzen “benefit”) + aus- (“completely, to exhaustion”) → “to use for one’s own advantage, to exploit”."
      },
      "meaningExplanation": "The verb has several established senses: to exploit a vulnerability (IT), to make good use of an opportunity, and to selfishly take advantage of people.",
      "meaningExamples": [
        "to exploit a security vulnerability",
        "to make the most of the good weather",
        "to take advantage of one’s colleagues"
      ],
      "senses": [
        "to exploit a vulnerability",
        "to take advantage of an opportunity",
        "to take advantage of someone (selfishly)"
      ],
      "parts": [
        "to the end, completely (separable)",
        "stem of nutzen — to use",
        "infinitive ending"
      ]
    },
    "it-sec-zugriff": {
      "note": "“Zugriff auf + acc.”, verb “auf etw. zugreifen”. Compare: “der Zugang” — access as an entry point or account (“Ich brauche einen Zugang für Jira”); “die Zugangsdaten” — login credentials.",
      "usageNote": "“Zugriff” is the standard word. English stays in fixed terms: “Remote Access”, “Access Management”, “Privileged Access”.",
      "why": {
        "text": "Composition: from the verb zugreifen (zu- + greifen) with ablaut in the stem (griff).\nOrigin: zugreifen literally means “to reach out and grab, take hold of”. In 20th-century computer science the noun Zugriff became the standard term for “access” to data and systems.\nTransparency: figurative — the literal image of “reaching for data” can still be felt.",
        "evidence": "Deverbal noun from zugreifen (“to grab, take hold of”); the technical sense “data access” became established in computer science."
      },
      "parts": [
        "to, towards",
        "stem of greifen — to grasp, grab"
      ]
    },
    "it-sec-schadsoftware": {
      "note": "Usually has no plural. “Schadcode” — malicious code. Ransomware stays English, while its consequences are expressed in German: “Die Daten wurden verschlüsselt”.",
      "usageNote": "“Schadsoftware” is used in BSI texts, news and policies; among colleagues “Malware” is just as common. “Der Trojaner” — Trojan.",
      "why": {
        "text": "Composition: stem Schad- (from der Schaden “harm, damage”) + Software.\nOrigin: modern German hybrid compound of the late 20th / early 21st century, coined as a clear German equivalent of English malware (malicious software); Schadprogramm and Schadcode are formed on the same pattern.\nTransparency: completely transparent compound.",
        "evidence": "Modern hybrid compound Schad- (from Schaden “damage”) + Software as the German equivalent of Eng. malware."
      },
      "parts": [
        "der Schaden — harm, damage",
        "die Software — software"
      ]
    },
    "it-sec-alert": {
      "note": "Useful verbs: “ein Alert wird ausgelöst” — an alert is triggered, “einen Alert bearbeiten / schließen / eskalieren”. With non-technical colleagues it is better to say “Warnmeldung” or “Alarm”.",
      "usageNote": "In the SOC people say “der Alert” (some say “das Alert”). Officially in German — “die Warnmeldung” or “der Alarm”. “False Positive” stays English.",
      "why": {
        "text": "Composition: borrowing from English IT language.\nOrigin: English alert came via French alerte from the Italian military call all’erta — literally “to the height!, on the lookout!”. The word Alarm has a similar history (from Italian all’arme — “to arms!”).\nTransparency: unanalysable borrowing.",
        "evidence": "Eng. alert < Fr. alerte < Ital. all’erta (“on the lookout!”, from erta “rise, lookout”)."
      }
    },
    "it-sec-auswerten": {
      "note": "“Die Auswertung” — analysis, evaluation report. Do not confuse with “bewerten” — to assess, rate (“ein Risiko bewerten”).",
      "usageNote": "“Logs auswerten” is the standard phrase. “Analysieren” also works; there is no anglicism here.",
      "why": {
        "text": "Composition: separable prefix aus- + verb stem werten (from der Wert “value”).\nOrigin: the verb became established in the 19th–20th centuries with the meaning “to make full use of the value of something”, and in science and technology — “to process data and extract useful results from it”.\nTransparency: figurative — the root Wert is visible, but “to analyse logs” should be remembered as a distinct sense.",
        "evidence": "aus- + werten (from Wert): “to extract value / a useful result”, later “to process and analyse data”."
      },
      "parts": [
        "out, to the end (separable)",
        "der Wert — value",
        "infinitive ending"
      ]
    },
    "it-sec-melden": {
      "note": "A central word in security policies. “Die Meldepflicht”: under the DSGVO (GDPR), a data breach must be reported to the supervisory authority within 72 hours. “Sich melden” — to get in touch (“Meld dich!”). “Sich krankmelden” — to call in sick.",
      "usageNote": "Always in German: “einen Vorfall melden”, “die Meldung”, “die Meldepflicht”. “Reporten” is rare.",
      "why": {
        "text": "Composition: simple weak verb (meldete, hat gemeldet).\nOrigin: Old High German meldōn meant “to inform, notify, announce” (originally in a legal and judicial context). Hence the modern meanings “to report officially, to register” and derivatives such as anmelden, abmelden, Meldung.\nTransparency: basic verb (and key to a whole family of prefixed verbs).",
        "evidence": "OHG meldōn “to announce, notify, report” (common West Germanic verb)."
      },
      "meaningExplanation": "Transitive melden means “to officially report an incident”, whereas reflexive sich melden means “to get in touch, write/call”.",
      "meaningExamples": [
        "to report an incident immediately",
        "I’ll get in touch with you tomorrow."
      ],
      "senses": [
        "to report, notify",
        "to get in touch (sich melden)"
      ]
    },
    "it-sec-erkennung": {
      "note": "“Angriffserkennung” (Intrusion Detection) appears in laws and BSI publications. “Die Erkennungsrate” — detection rate. Verb: erkennen.",
      "usageNote": "In reports and with management — “Erkennung” (“Angriffserkennung”). In the SOC often “Detection”, “Detection Rule”, “Use Case”.",
      "why": {
        "text": "Composition: from the verb erkennen (er- + kennen “to know”) + suffix -ung.\nOrigin: Old High German irkennen meant “to come to know, recognise, perceive”; in engineering and security the deverbal noun Erkennung became established as “recognition, detection”.\nTransparency: figurative — the root kennen is easy to see.",
        "evidence": "From erkennen (OHG irkennen “to perceive, recognise”, from kennen) + -ung."
      },
      "parts": [
        "achieving a result",
        "stem of kennen — to know",
        "verb → noun, always die"
      ]
    },
    "it-sec-erkennen": {
      "note": "Mixed conjugation: erkannte, erkannt (like kennen). “Die Erkenntnis” — finding, insight (“neue Erkenntnisse aus der Analyse”). “Unerkannt bleiben” — to remain undetected.",
      "usageNote": "Common verb: “Der Angriff wurde früh erkannt”. “Detecten” sounds like slang.",
      "why": {
        "text": "Composition: inseparable prefix er- (achieving a result) + kennen (“to know”).\nOrigin: Old High German irkennen (“to perceive, recognise”); kennen is historically a causative related to können (“to know, be able to”), from the PIE root *ǵneh₃- (“to know”).\nTransparency: figurative — “to bring to knowledge” → “to recognise, detect”.",
        "evidence": "OHG irkennen (er- + kennen < PIE *ǵneh₃- “to know”)."
      },
      "parts": [
        "achieving a result",
        "stem of kennen — to know",
        "infinitive ending"
      ]
    },
    "it-sec-fehlalarm": {
      "note": "The prefix “Fehl-” = erroneously, mis-: die Fehlkonfiguration (misconfiguration), die Fehlbedienung (operator error). “Ein Fehlalarm wird ausgelöst” — a false alarm is triggered. Opposite: “ein echter Treffer” — a true positive / real hit.",
      "usageNote": "In the SOC — “False Positive” (der False Positive, pl. die False Positives). With non-technical colleagues — “Fehlalarm”.",
      "why": {
        "text": "Composition: element Fehl- (“erroneous, false”, related to fehlen/Fehler) + der Alarm (“alarm”).\nOrigin: Alarm entered German in the 15th–16th centuries from the Italian military call all’arme! (“to arms!”). The first element Fehl- indicates falseness or error (cf. Fehlkonfiguration, Fehlschlag).\nTransparency: completely transparent compound.",
        "evidence": "Fehl- (“erroneous, false”) + Alarm (< Ital. all’arme! “to arms!”, 15th–16th c.)."
      },
      "parts": [
        "erroneous, amiss",
        "der Alarm — alarm"
      ]
    },
    "it-sec-bedrohung": {
      "note": "“Drohen” + dative (jdm. drohen), but “bedrohen” + accusative (jdn. bedrohen). “Die Bedrohungslage” — threat landscape / threat situation (a typical word in BSI reports).",
      "usageNote": "“Bedrohung” is the standard word (“die Bedrohungslage” at the BSI). In fixed technical terms English is used: “Threat Intelligence”, “Threat Hunting”, “Threat Actor”.",
      "why": {
        "text": "Composition: from the verb bedrohen (be- + drohen “to threaten”) + -ung.\nOrigin: drohen goes back to Old High German drewen (“to threaten, menace”). The prefix be- makes the verb transitive (jdn. bedrohen instead of jdm. drohen), and Bedrohung denotes a threat as a phenomenon.\nTransparency: completely transparent formation.",
        "evidence": "be- + drohen (< OHG drewen “to threaten”) + -ung."
      },
      "parts": [
        "inseparable prefix (makes transitive)",
        "stem of drohen — to threaten",
        "verb → noun, always die"
      ]
    },
    "it-sec-angreifer": {
      "note": "Plural unchanged: die Angreifer. “Der Täter” — perpetrator (criminal context). “Sich Zugang verschaffen” — to gain access (said of an attacker).",
      "usageNote": "“Angreifer” / “Täter” in reports and news. In the SOC also “Threat Actor”, “APT-Gruppe”.",
      "why": {
        "text": "Composition: from the verb angreifen (“to attack”, an- + greifen “to grasp”) + agent suffix -er.\nOrigin: angreifen shifted from “to take hold of, seize” to “to attack”; Angreifer is the standard word for an attacker (in military affairs, sports and cybersecurity alike).\nTransparency: transparent from the verb angreifen (figurative relative to greifen).",
        "evidence": "From the verb angreifen (an- + greifen) + agent suffix -er."
      },
      "parts": [
        "on, at (angreifen — to attack)",
        "stem of greifen — to grasp",
        "one who does"
      ]
    },
    "it-sec-log": {
      "note": "Gender varies: more often “das Log”, sometimes “der Log”. “Logs auswerten / durchsuchen / weiterleiten” — to analyse / search / forward logs (to the SIEM). “Aufbewahren” — to retain, store.",
      "usageNote": "IT staff say “das Log”, “die Logs”, “Logdatei”. Officially and in documents — “das Protokoll”, “die Protokolldatei”, “protokollieren”.",
      "why": {
        "text": "Composition: borrowing from English IT language (short for logbook / logfile).\nOrigin: in seamanship, English log (“piece of wood”) became the name of the wooden float on a knotted line used to measure a ship’s speed; the readings were recorded in a logbook. From there the term passed into computing for a chronological record of events.\nTransparency: the historical nautical metaphor (ship’s logbook) is usually no longer noticed in IT.",
        "evidence": "Eng. log (“piece of wood → nautical log”) → logbook (17th c.) → computer event log."
      }
    },
    "it-sec-protokollieren": {
      "note": "Verbs in -ieren form their past participle without ge-: protokolliert. “Das Protokoll” is an event log, meeting minutes, and a network protocol (HTTP).",
      "usageNote": "Officially — “protokollieren”, “die Protokollierung”. In conversation — “loggen” (“Wird das geloggt?”).",
      "why": {
        "text": "Composition: noun das Protokoll + suffix -ieren.\nOrigin: Protokoll goes back via Medieval Latin to Greek prōtókollon — literally “first glued sheet” (prôtos “first” + kólla “glue”), a flyleaf glued to the front of a papyrus roll bearing the date and table of contents. Later it came to mean an official chronological record of events.\nTransparency: the verb is transparently formed from Protokoll.",
        "evidence": "From Protokoll < Med. Lat. prōtocollum < Gk. prōtókollon (“first glued sheet of a scroll”)."
      },
      "meaningExplanation": "In IT protokollieren means “to log system events”, while in the office it means “to take minutes of a meeting”.",
      "meaningExamples": [
        "All accesses are logged.",
        "Who is taking minutes for the meeting?"
      ],
      "senses": [
        "to log events (IT)",
        "to take minutes of a meeting"
      ],
      "parts": [
        "das Protokoll — protocol, minutes, log",
        "verb suffix for loanwords",
        "infinitive ending"
      ]
    },
    "it-sec-auffaellig": {
      "note": "“Auffallen” + dative: “Mir ist etwas aufgefallen” — I noticed something. “Unauffällig” — inconspicuous (an attacker behaves unauffällig). “Die Auffälligkeit” — anomaly, finding.",
      "usageNote": "“Auffällig”, “die Auffälligkeit” are standard in reports and conversation. “Anomalie” is also used.",
      "why": {
        "text": "Composition: from the verb auffallen (auf- + fallen “to fall”) + suffix -ig with umlaut.\nOrigin: auffallen developed the meaning “to catch the eye / stand out” (18th c.), whence the adjective auffällig — “conspicuous, deviating from the norm”.\nTransparency: figurative — paired with the verb auffallen, the meaning is easy to remember.",
        "evidence": "From auffallen (“to stand out, catch the eye”, 18th c.) + -ig."
      },
      "meaningExplanation": "From the verb auffallen (“to catch the eye / stand out”): figuratively describes something that stands out sharply from the norm (anomalous traffic, behaviour).",
      "meaningExamples": [
        "anomalous, conspicuous network traffic"
      ],
      "parts": [
        "prefix (auffallen — to stand out)",
        "stem of fallen — to fall (with umlaut)",
        "adjective suffix"
      ]
    },
    "it-sec-verdaechtig": {
      "note": "“Auffällig” — “unusual”, “verdächtig” — “potentially malicious”. “Jdn. verdächtigen” — to suspect someone. “Der/die Verdächtige” — suspect.",
      "usageNote": "Always in German: “verdächtige E-Mail”, “verdächtige Aktivität”. A key word for communicating with office staff.",
      "why": {
        "text": "Composition: noun der Verdacht (“suspicion”, with umlaut) + suffix -ig.\nOrigin: formed in Early New High German from Verdacht (which is historically related to the verb denken “to think”).\nTransparency: transparent from der Verdacht.",
        "evidence": "Derivative of der Verdacht (related to denken/dachte) + -ig."
      },
      "parts": [
        "der Verdacht — suspicion (with umlaut, from denken)",
        "adjective suffix"
      ]
    },
    "it-sec-verdacht": {
      "note": "“Verdacht auf + acc.”: Verdacht auf Grippe (at the doctor’s), Verdacht auf Datenabfluss. “Unter Verdacht stehen” — to be under suspicion. Plural rarely used.",
      "usageNote": "“Verdacht auf + acc.” is standard both in medicine and in security: “Verdacht auf einen Sicherheitsvorfall”.",
      "why": {
        "text": "Composition: prefix Ver- + stem -dacht (from the verb denken “to think”, cf. dachte).\nOrigin: Middle High German verdāht was formed from the verb verdenken (“to think ill of someone, suspect”), whence “suspicion”.\nTransparency: opaque — the meaning “suspicion” cannot be deduced from modern denken alone, though the stem dacht helps remember the form.",
        "evidence": "MHG verdāht, from verdenken (“to think ill of someone”, from denken/dachte)."
      },
      "parts": [
        "inseparable prefix",
        "from denken — to think (dachte)"
      ]
    },
    "it-sec-eindaemmen": {
      "note": "Image: “to surround with a dam”. Classic news phrases: “ein Feuer / eine Pandemie eindämmen”. Incident response phases in German: Erkennung → Eindämmung → Beseitigung → Wiederherstellung.",
      "usageNote": "In an incident response plan — “Eindämmung”. In the SOC people often say “Containment”.",
      "why": {
        "text": "Composition: separable prefix ein- (“within bounds”) + dämmen (from der Damm “dam, dike”).\nOrigin: literally “to hold back (water, a flood) with a dam”; the figurative meaning “to keep within bounds, contain” spread to fires, epidemics and cyberattacks.\nTransparency: figurative, the visual image of a dam is very clear.",
        "evidence": "ein- + dämmen (from der Damm “dam”): “to hold back with a dike” → “to contain, curb”."
      },
      "meaningExplanation": "Literally “to hold back water with a dam” (der Damm): in cybersecurity and the news, the dam metaphor is used for containing an attack, a fire or damage.",
      "meaningExamples": [
        "to hold back floodwaters with a dam (literally)",
        "to contain a cyberattack (figuratively)"
      ],
      "parts": [
        "inwards, within bounds (separable)",
        "der Damm — dam (with umlaut)",
        "infinitive ending"
      ]
    },
    "it-sec-isolieren": {
      "note": "Past participle without ge-: isoliert. “Den Rechner vom Netz nehmen” is an easy-to-understand phrase for non-technical colleagues. In everyday life “isolieren” also means to insulate (Haus isolieren).",
      "usageNote": "“Den Rechner isolieren” is standard. Also “vom Netz nehmen” — to disconnect from the network.",
      "why": {
        "text": "Composition: borrowed stem isol- + suffix -ieren.\nOrigin: entered German in the 18th century from French isoler (< Ital. isolare “to make into an island”, from isola < Lat. īnsula “island”). To disconnect an infected host from the network is literally “to make it an island”.\nTransparency: international verb.",
        "evidence": "18th c. from Fr. isoler < Ital. isolare (“to make into an island”, from isola < Lat. īnsula)."
      }
    },
    "it-sec-eskalieren": {
      "note": "Transitive (to pass on to a higher tier) → haben: “Ich habe das Ticket eskaliert”. Intransitive (to escalate / get out of hand by itself) → sein: “Der Streit ist eskaliert”. “Der Eskalationsweg” — escalation path.",
      "usageNote": "The same verb as in English: “ein Ticket an Level 2 eskalieren”. “Die Eskalationsstufe” — escalation level.",
      "why": {
        "text": "Composition: borrowed stem eskal- + suffix -ieren.\nOrigin: borrowed in the second half of the 20th century from English escalate (“to rise step by step, intensify”), itself a back-formation from escalator (from Latin scāla “ladder, stairs”).\nTransparency: international term (image of moving up a step).",
        "evidence": "From Eng. escalate (20th c., back-formation from escalator < Lat. scāla “staircase, ladder”)."
      },
      "meaningExplanation": "With haben the verb is transitive — “to escalate an incident to a higher tier”; with sein it is intransitive — “a situation/conflict escalated on its own”.",
      "meaningExamples": [
        "I escalated the ticket to the next tier (haben).",
        "The argument escalated (sein)."
      ],
      "senses": [
        "to escalate, pass upwards (haben)",
        "to escalate, intensify on its own (sein)"
      ]
    },
    "it-sec-bereitschaft": {
      "note": "“Bereitschaft haben” — to be on call. “Rufbereitschaft” — on-call duty by phone (you can stay at home). Also “readiness, willingness”: “Bereitschaft zur Zusammenarbeit”.",
      "usageNote": "“Rufbereitschaft” / “Bereitschaftsdienst” — officially and in employment contracts. In teams — “On-Call”, “Ich habe diese Woche On-Call”.",
      "why": {
        "text": "Composition: adjective bereit (“ready”) + suffix -schaft.\nOrigin: bereit (MHG bereit, cognate with English ready) goes back to the same Germanic root as reiten (“to ride”): originally “ready to ride out / set off”. In emergency services and IT it denotes the state of being ready for a call-out (on-call duty).\nTransparency: transparent from bereit.",
        "evidence": "bereit (from the Gmc. root of reiten “ready to ride out”, Eng. ready) + suffix -schaft."
      },
      "parts": [
        "ready",
        "noun suffix, always die"
      ]
    },
    "it-sec-schicht": {
      "note": "Früh-, Spät-, Nachtschicht — early, late, night shift. “Im Schichtbetrieb arbeiten”. The second meaning is “layer” (“die Schicht im Netzwerkmodell”, “die Ozonschicht”).",
      "usageNote": "In the SOC — “Schicht”, “Schichtbetrieb”, “Nachtschicht”. “Shift” is rarely used.",
      "why": {
        "text": "Composition: simple noun (pl. die Schichten).\nOrigin: Middle High German schiht meant “row, order, arrangement”. In mining the word became established in two senses at once: a geological “stratum, layer” and a “working period of one crew” — hence both a network layer (OSI-Schicht) and a work shift in the SOC.\nTransparency: both modern meanings are united by the history of the mining term.",
        "evidence": "MHG schiht “order, row”; in mining the meanings “stratum/layer” and “work shift” developed."
      },
      "meaningExplanation": "The word die Schicht has two distinct meanings (both from mining): a work shift and a layer (in networking, the atmosphere, or a material).",
      "meaningExamples": [
        "I’m on the late shift today.",
        "the layer in the OSI model"
      ]
    },
    "it-sec-uebergabe": {
      "note": "Verb “übergeben” — to hand over (inseparable: übergab, hat übergeben). Careful: reflexive “sich übergeben” means “to throw up / vomit”!",
      "usageNote": "“Schichtübergabe” — shift handover. “Handover” is sometimes used in international teams.",
      "why": {
        "text": "Composition: from the verb übergeben (über- “across, over” + geben “to give”).\nOrigin: deverbal noun from übergeben (“to hand over from one person to another”).\nTransparency: completely transparent formation.",
        "evidence": "From übergeben (über- + geben) on the productive -gabe pattern (cf. Aufgabe, Angabe, Ausgabe)."
      },
      "senses": [
        "shift handover",
        "handover of tasks before leave"
      ],
      "parts": [
        "over, across (“hand over”)",
        "from geben — to give (die Gabe — gift, handing over)"
      ]
    },
    "it-sec-zeitstempel": {
      "note": "“Die Zeitleiste” — timeline (chronology of an incident). “Die Zeitzone” — time zone (a frequent cause of confusion in logs: UTC vs CET/MEZ).",
      "usageNote": "In documents — “Zeitstempel”. In conversation often “Timestamp” (der Timestamp).",
      "why": {
        "text": "Composition: die Zeit (“time”) + der Stempel (“stamp”).\nOrigin: der Stempel goes back to the verb stampfen (“to stamp, press” — a tool for making an impression); in IT the compound Zeitstempel became the German equivalent of English timestamp.\nTransparency: completely transparent compound.",
        "evidence": "Zeit + Stempel (related to stampfen); in computing — equivalent of Eng. timestamp."
      },
      "parts": [
        "die Zeit — time",
        "der Stempel — stamp"
      ]
    },
    "it-sec-ursache": {
      "note": "“Die Ursache für + acc.”: die Ursache für den Ausfall. “Verursachen” — to cause. “Keine Ursache!” — “You’re welcome / Don’t mention it!” (in reply to “Danke”)!",
      "usageNote": "“Ursache”, “Ursachenanalyse” are standard. In tech teams — “Root Cause”, “Root-Cause-Analyse”.",
      "why": {
        "text": "Composition: prefix ur- (“original, primary”) + die Sache (“matter, thing”).\nOrigin: Old High German sahha originally meant “legal dispute, case, grounds of a dispute”; in the 14th–15th centuries the compound ursache became established as “original ground → cause” (cf. Urwald “primeval forest”, Ursprung “origin”).\nTransparency: figurative — both parts are recognisable.",
        "evidence": "MHG ursache from ur- (“original”) + Sache (“case, grounds of a lawsuit”)."
      },
      "parts": [
        "original, primary",
        "die Sache — matter, thing"
      ]
    },
    "it-sec-bericht": {
      "note": "“Über etw. (acc.) berichten” — to report on something. “Der Abschlussbericht” — final report. “Laut Bericht” — according to the report.",
      "usageNote": "“Bericht”, “Abschlussbericht” are standard. “Report” is also used (“der Report”).",
      "why": {
        "text": "Composition: from the verb berichten (be- + richten “to straighten, put in order”).\nOrigin: Middle High German berihten meant “to put in order, settle, explain, inform”, from which in 15th–16th-century business usage the meaning “to report, notify” and the noun der Bericht (“report”) developed.\nTransparency: opaque — modern richten (“to direct, judge”) does not suggest the meaning “report”.",
        "evidence": "From MHG berihten (“to put in order, explain” → “to inform, report”, related to richten)."
      },
      "parts": [
        "inseparable prefix",
        "stem of richten — to direct (berichten — to report)"
      ]
    },
    "it-sec-forensik": {
      "note": "“Die Beweissicherung” — preservation of evidence (crucial before rebooting!). “Ein forensisches Image ziehen” — to take a forensic disk image.",
      "usageNote": "“IT-Forensik”, “forensische Analyse” are standard. “Forensics” is rare in German sentences.",
      "why": {
        "text": "Composition: borrowing (from the adjective forensisch).\nOrigin: from Latin forēnsis (“pertaining to the forum”, from forum — the Roman public square where law courts were held). Thus forensisch literally means “judicial, relating to the courts” — first in forensic medicine, and now in digital forensics as well.\nTransparency: explains the term’s connection with courts and evidence collection.",
        "evidence": "From Lat. forēnsis (“relating to the forum / court”, from forum)."
      }
    },
    "it-sec-spur": {
      "note": "“Spuren verwischen” — to cover one’s tracks. “Aufspüren” — to track down. “Die Spurensicherung” — forensic evidence collection. Also a traffic lane: “die Spur wechseln”.",
      "usageNote": "“Spuren” is the everyday word. The technical term “Artefakte” is also widespread.",
      "why": {
        "text": "Composition: simple noun (pl. die Spuren).\nOrigin: common Germanic word (OHG spor “track, footprint”). From it is derived the verb spüren (“to follow a track → track down, sense, feel”).\nTransparency: basic root (Spur ↔ spüren ↔ aufspüren).",
        "evidence": "OHG spor < Gmc. *spura- “track, trace”; source of spüren and aufspüren."
      }
    },
    "it-sec-hinweis": {
      "note": "“Hinweis auf + acc.”; “Es gibt Hinweise darauf, dass …” — there are indications that … A typical cautious phrasing for management. “Jdn. auf etw. hinweisen” — to point something out to someone.",
      "usageNote": "“Hinweis auf eine Kompromittierung” — sign/indication of compromise. Technically — “IoC” (Indicator of Compromise), pronounced “I-O-C” or “IOCs”.",
      "why": {
        "text": "Composition: from the verb hinweisen (hin- “towards, there” + weisen “to point, show”).\nOrigin: literally “pointing in a direction” — established in the 18th–19th centuries for a hint, notice, or indirect indication (something that “points” to a fact).\nTransparency: figurative, but the root weisen (cf. Ausweis, Beweis, Nachweis) is easy to read.",
        "evidence": "Deverbal noun from hinweisen (hin- + weisen “to point to something”)."
      },
      "meaningExplanation": "Hinweis denotes both an indirect sign/indicator (e.g. of compromise) and a practical tip, hint or note from a colleague.",
      "meaningExamples": [
        "indications of a compromise",
        "Thanks for the helpful tip!"
      ],
      "senses": [
        "indication, sign (of something)",
        "tip, hint, note"
      ],
      "parts": [
        "thither, towards",
        "stem of weisen — to point, show"
      ]
    },
    "it-sec-ueberwachen": {
      "note": "Inseparable: überwachte, hat überwacht (without ge-). Be careful with this word when speaking to colleagues: “Überwachung” can sound like “surveillance of employees” (a topic for the Betriebsrat!). More neutral: “Monitoring”.",
      "usageNote": "“Überwachen”, “die Überwachung” — formal. In IT “Monitoring” (das Monitoring) and “monitoren” are very common.",
      "why": {
        "text": "Composition: inseparable prefix über- (“over”) + wachen (“to stay awake, keep watch”, related to wach “awake”).\nOrigin: literally “to keep watch over something, not take one’s eyes off it” — since the 19th century established in the administrative and technical sense “to supervise, monitor”.\nTransparency: figurative, the root wach (“awake”) is immediately visible.",
        "evidence": "über- (“over”) + wachen (“to keep watch”): “to supervise, monitor” (since the 19th c.)."
      },
      "meaningExplanation": "überwachen means both technical monitoring of servers/networks and surveillance/supervision of an area or people (in an office it can sound like employee surveillance).",
      "meaningExamples": [
        "to monitor all servers around the clock",
        "This area is under video surveillance."
      ],
      "senses": [
        "to monitor systems (IT)",
        "to watch over, supervise, keep under surveillance"
      ],
      "parts": [
        "over (inseparable)",
        "wach — awake",
        "infinitive ending"
      ]
    },
    "it-sec-abwehren": {
      "note": "“Die Abwehr” — defence. The same root appears in “die Feuerwehr” (fire brigade) and “die Bundeswehr” (German armed forces). “Sich wehren” — to defend oneself, resist.",
      "usageNote": "“Einen Angriff abwehren”, “die Abwehr” are standard. There is no English equivalent used in German speech.",
      "why": {
        "text": "Composition: separable prefix ab- (“away, off”) + verb wehren (“to defend, hold back”).\nOrigin: Old High German werien meant “to defend, hold off an enemy”; the same root appears in die Feuerwehr (“fire brigade”) and die Bundeswehr (“federal armed forces”). With ab- it means “to ward off, repel”.\nTransparency: completely transparent formation.",
        "evidence": "ab- (“away, off”) + wehren (< OHG werien “to defend, bar the way”)."
      },
      "parts": [
        "away, off (separable)",
        "stem of sich wehren — to defend oneself",
        "infinitive ending"
      ]
    },
    "it-sec-kompromittiert": {
      "note": "Past participle of “kompromittieren”. “Die Kompromittierung” — compromise. For non-technical colleagues it is simpler to say: “Ihr Konto wurde gehackt / missbraucht”.",
      "usageNote": "“Kompromittiert” is standard in reports. Colloquially — “gehackt”, “übernommen” (taken over).",
      "why": {
        "text": "Composition: past participle of the verb kompromittieren.\nOrigin: borrowed in the 18th century from French compromettre (< Lat. comprōmittere “to make a mutual promise, submit a dispute to an arbitrator”); later it developed the meaning “to expose a reputation or security to risk”.\nTransparency: international term, matching English compromised.",
        "evidence": "18th c. from Fr. compromettre < Lat. comprōmittere; sense “to expose to risk, breach security”."
      }
    },
    "it-sec-erpressung": {
      "note": "Verb: “jdn. erpressen” — to blackmail / extort someone (+ acc.). “Die doppelte Erpressung” — double extortion: data is encrypted and the attackers threaten to publish it. “Anzeige erstatten” / “anzeigen” — to file a police report.",
      "usageNote": "In the news and with the police — “Erpressung”, “Cybererpressung”. In the SOC, the malware itself is called “Ransomware”; “Extortion” is rare.",
      "why": {
        "text": "Composition: from the verb erpressen (er- + pressen “to press, squeeze”) + -ung.\nOrigin: pressen was borrowed from Latin pressāre (“to press hard”); erpressen literally meant “to squeeze out by force (money, a confession)” — hence since the 16th–17th centuries the legal sense “extortion, blackmail”.\nTransparency: figurative, the metaphor of “squeezing out” is clearly visible.",
        "evidence": "er- + pressen (< Lat. pressāre “to press”): literally “to squeeze out by force” → “to extort”."
      },
      "parts": [
        "achieving a result",
        "stem of pressen — to press, squeeze",
        "verb → noun, always die"
      ]
    },
    "it-sec-loesegeld": {
      "note": "“Lösegeld fordern / zahlen” — to demand / pay a ransom. Neuter because of “das Geld”. “Lösen” is used here in its older meaning “to release, set free” (a hostage).",
      "usageNote": "“Lösegeld” is the everyday word, including in official BSI recommendations. “Ransom” is hardly ever used alone.",
      "why": {
        "text": "Composition: stem of the verb lösen (“to release, untie”) + das Geld (“money”).\nOrigin: the compound is attested since the 16th century (in Luther’s Bible translation) with the meaning “money paid to release a prisoner or hostage”. In IT it was transferred to the ransom demanded in ransomware attacks.\nTransparency: figurative — in modern German lösen more often means “to solve a problem” than “to release”.",
        "evidence": "16th-c. compound from lösen (“to release, redeem”) + Geld (“money”) for a prisoner’s ransom."
      },
      "parts": [
        "stem of lösen — to release, redeem",
        "das Geld — money"
      ]
    },
    "it-sec-trojaner": {
      "note": "Plural unchanged: die Trojaner. Originally “Trojaner” means an inhabitant of Troy. “Banking-Trojaner” — banking Trojan.",
      "usageNote": "“Der Trojaner” is the standard German form used by everyone. More formally in full: “das Trojanische Pferd”.",
      "why": {
        "text": "Composition: noun Trojaner (originally “inhabitant of Troy”).\nOrigin: shortening of the computing term Trojanisches Pferd (a calque of Eng. Trojan horse, used in IT since the 1970s–1980s), referring to the ancient myth of the wooden horse inside which Greek soldiers hid.\nTransparency: metaphorical term, transparent via the myth of the Trojan horse.",
        "evidence": "Shortening of Trojanisches Pferd (after Eng. Trojan horse, computing term since the 1970s), from the ancient myth."
      }
    },
    "it-sec-botnetz": {
      "note": "Neuter because of “das Netz”; genitive: des Botnetzes. “Die DDoS-Attacke / der DDoS-Angriff” — DDoS attack.",
      "usageNote": "Written “Botnetz”, in speech also “Botnet”. An infected computer within it is called “der Bot”.",
      "why": {
        "text": "Composition: Bot (short for Roboter) + das Netz (“network”).\nOrigin: the word Robot was introduced by Karel and Josef Čapek in the play R.U.R. (1920) from Czech robota (“forced labour, drudgery”). In IT English it was shortened to bot, and in German combined with Netz.\nTransparency: completely transparent compound.",
        "evidence": "Bot < Robot (K. and J. Čapek, 1920, from Czech robota “forced labour”) + Ger. Netz."
      },
      "parts": [
        "short for Roboter — robot",
        "das Netz — net, network"
      ]
    },
    "it-sec-datenabfluss": {
      "note": "Image of “data flowing out”: “Daten sind abgeflossen” — data leaked/flowed out (Perfekt with sein). Key phrasing for management: “Ein Datenabfluss kann nicht ausgeschlossen werden” — data exfiltration cannot be ruled out.",
      "usageNote": "In reports — “Datenabfluss”. In the SOC — “Exfiltration”, “Daten wurden exfiltriert”.",
      "why": {
        "text": "Composition: die Daten (“data”, pl. of Lat. datum “given”) + der Abfluss (“outflow, drain”, from abfließen “to flow away”).\nOrigin: a liquid metaphor — data “flows out” like water.\nTransparency: figurative, the image of an “outflow of data” is completely clear.",
        "evidence": "Daten (< Lat. data “given things”) + Abfluss (from abfließen “to flow out, drain”)."
      },
      "meaningExplanation": "The word is built on the image of liquid draining away (der Abfluss — outflow, drain), transferred to the unauthorized outflow of data from a network.",
      "meaningExamples": [
        "to prevent data exfiltration (outflow)"
      ],
      "parts": [
        "die Daten — data",
        "der Abfluss — outflow (from abfließen — to flow away)"
      ]
    },
    "it-sec-datenleck": {
      "note": "Neuter because of “das Leck” (leak in a ship). “Die Datenpanne” is a less dramatic word (a mishap/error rather than an attack). Colloquially: “Die Daten wurden geleakt”.",
      "usageNote": "In the news — “Datenleck”, “Datenpanne”. Legally under the DSGVO — “Verletzung des Schutzes personenbezogener Daten”. In IT also “Data Breach”.",
      "why": {
        "text": "Composition: die Daten (“data”) + das Leck (“leak, breach in a hull”).\nOrigin: das Leck entered standard German from Low German and Dutch nautical language (lek “hole/leak in a ship’s hull”, cognate with English leak). In IT it was transferred to a data leak.\nTransparency: figurative, the nautical metaphor of a hull breach is easily read.",
        "evidence": "Daten + das Leck (< Low Ger./Du. lek “leak in a ship”, cognate with Eng. leak)."
      },
      "meaningExplanation": "Literally das Leck is a hole or leak in a ship’s hull or a pipe; in IT this image was transferred to a breach through which data leaks out.",
      "meaningExamples": [
        "a leak in the ship (literally)",
        "to report a major data leak (figuratively)"
      ],
      "parts": [
        "die Daten — data",
        "das Leck — leak, breach"
      ]
    },
    "it-sec-hintertuer": {
      "note": "Also used figuratively outside IT: “sich eine Hintertür offenhalten” — to keep a backdoor / loophole open for oneself.",
      "usageNote": "In the news and with management — “Hintertür”. In the tech team — “Backdoor” (die Backdoor).",
      "why": {
        "text": "Composition: hinter (“behind”) + die Tür (“door”).\nOrigin: the everyday word “back door” has long had the figurative meaning “loophole, secret way out”; in IT it became established as the exact equivalent of English backdoor.\nTransparency: figurative, the image of a “back door” is completely transparent.",
        "evidence": "hinter + Tür (“back door, loophole”); in IT corresponds to Eng. backdoor."
      },
      "meaningExplanation": "Literally “back door”; in cybersecurity it is used metaphorically for a hidden bypass entry into a system (backdoor).",
      "meaningExamples": [
        "to enter the house through the back door (literally)",
        "to find a backdoor in the code (figuratively)"
      ],
      "parts": [
        "hinter — behind",
        "die Tür — door"
      ]
    },
    "it-sec-social-engineering": {
      "note": "Neuter, no plural. “Der CEO-Fraud” — fraud impersonating the CEO (urgent money transfer). Clearer for office staff: “Jemand versucht, Sie zu täuschen”.",
      "usageNote": "Only the English term is used. When explaining it to colleagues, people say: “Manipulation von Menschen”, “Täuschung”.",
      "why": {
        "text": "Composition: borrowed English phrase (social + engineering).\nOrigin: originally a 20th-century political science and sociology term (“reshaping of society”). In the 1990s in computer security (largely popularized by Kevin Mitnick) it acquired the specific meaning “manipulating people to bypass technical defences”.\nTransparency: international IT term.",
        "evidence": "Eng. term from sociology, reinterpreted in the 1990s in cybersecurity as psychological manipulation."
      }
    },
    "it-sec-taeuschen": {
      "note": "“Sich täuschen” — to be mistaken. “Täuschend echt” — deceptively real (“Die Seite sieht täuschend echt aus”). “Enttäuschen” — to disappoint (literally “to free from illusion”).",
      "usageNote": "Everyday German verb; very handy for explaining phishing to non-technical colleagues.",
      "meaningExplanation": "Transitive täuschen means “to deceive, mislead someone”, while reflexive sich täuschen means “to be mistaken oneself”.",
      "meaningExamples": [
        "Phishing emails deceive users.",
        "I was mistaken there."
      ],
      "senses": [
        "to deceive, mislead",
        "to be mistaken (sich täuschen)"
      ]
    },
    "it-sec-gefaelscht": {
      "note": "Past participle of “fälschen”. “Die Fälschung” — forgery, fake. Do not confuse: “falsch” — wrong, incorrect (“die falsche Adresse”), “gefälscht” — deliberately forged/spoofed (“die gefälschte Adresse”).",
      "usageNote": "“Gefälscht” is standard. In the SOC, for a sender address people also say “gespooft” (“Der Absender ist gespooft”).",
      "why": {
        "text": "Composition: past participle of the verb fälschen (“to forge, falsify”, from falsch with umlaut).\nOrigin: the adjective falsch was borrowed in Middle High German from Latin falsus (“false, deceptive”, via Old French fals); from it was formed the verb fälschen (“to make counterfeit”).\nTransparency: completely transparent connection with falsch.",
        "evidence": "From fälschen < falsch (< OFr. fals < Lat. falsus “false, deceptive”)."
      },
      "parts": [
        "past participle prefix",
        "stem of fälschen — to forge (from falsch)",
        "past participle ending"
      ]
    },
    "it-sec-anhang": {
      "note": "Plural with umlaut: die Anhänge. Standard email phrases: “Im Anhang finden Sie …” / “Anbei sende ich Ihnen …”. “Der Anhänger” — trailer; key fob/charm; supporter/fan.",
      "usageNote": "“Der Anhang” is the normal everyday word. “Attachment” is rarely used.",
      "why": {
        "text": "Composition: from the verb anhängen (an- “to, on” + hängen “to hang, attach”).\nOrigin: originally “something hung or attached onto something else” (in book printing — “appendix at the end of a book”); with the advent of email the word naturally shifted to attached files (equivalent to English attachment).\nTransparency: figurative, the image of “something attached to an email” is clear.",
        "evidence": "From anhängen (“to hang on, attach”): first a book appendix, later an email attachment."
      },
      "meaningExplanation": "In email der Anhang is an attached file (attachment), while in documents and books it is an appendix at the end of the text.",
      "meaningExamples": [
        "Please do not open any suspicious attachment.",
        "the details in the appendix to the contract"
      ],
      "senses": [
        "email attachment",
        "appendix to a document"
      ],
      "parts": [
        "to, on",
        "stem of hängen — to hang, attach"
      ]
    },
    "it-sec-absender": {
      "note": "The opposite is “der Empfänger” (recipient). Plural unchanged: die Absender. “Absenden” — to send off, submit (a letter, a form).",
      "usageNote": "“Absender”, “Absenderadresse” are standard. When talking about email headers, technicians also say “Sender”.",
      "why": {
        "text": "Composition: from the verb absenden (ab- “off, away” + senden “to send”) + agent suffix -er.\nOrigin: senden (OHG senten, Eng. send) is historically a causative meaning “to make go on a journey”; with ab- — “to send off from oneself”.\nTransparency: completely transparent formation.",
        "evidence": "From absenden (ab- + senden “to send”, Eng. send) + suffix -er."
      },
      "parts": [
        "off, away",
        "stem of senden — to send",
        "one who does"
      ]
    },
    "it-sec-passwort": {
      "note": "Neuter because of “das Wort”; plural “Passwörter”. “Ein sicheres / schwaches Passwort”, “das Passwort zurücksetzen” — to reset the password. “Der Passwortmanager” — password manager.",
      "usageNote": "“Das Passwort” is the everyday word (in older interfaces also “das Kennwort”). “PIN” is feminine: “die PIN”.",
      "why": {
        "text": "Composition: der Pass (“passage, pass”) + das Wort (“word”).\nOrigin: 20th-century German compound, usually explained as a semi-calque of English password (originally a military watchword required to pass a sentry).\nTransparency: completely transparent compound.",
        "evidence": "Pass (“passage”, via Fr. passe < Lat. passus) + Wort; established in IT after Eng. password."
      },
      "parts": [
        "passage, pass",
        "das Wort — word"
      ]
    },
    "it-sec-zugangsdaten": {
      "note": "Plural only (pluraletantum): die Zugangsdaten. “Zugangsdaten abgreifen” — to harvest/steal login credentials (in phishing).",
      "usageNote": "With colleagues and in policies — “Zugangsdaten” (or “Anmeldedaten”). In the SOC — “Credentials”, “Creds”.",
      "why": {
        "text": "Composition: der Zugang (“entry, access”, from zu- + Gang/gehen) + linking -s- + die Daten (“data”).\nOrigin: modern IT compound — literally “data for entry/access”. die Daten is the plural of Latin datum (“something given”).\nTransparency: completely transparent compound.",
        "evidence": "Zugang (from gehen “entry, access”) + Fugen-s + Daten (< Lat. data)."
      },
      "parts": [
        "der Zugang — access, entry (from gehen)",
        "linking element (Fugen-s)",
        "die Daten — data"
      ]
    },
    "it-sec-benutzerkonto": {
      "note": "Plural: die Benutzerkonten (not “Kontos”). “Das Dienstkonto” / “der Service-Account” — service account. “Ein Konto sperren / entsperren / anlegen / löschen”.",
      "usageNote": "Officially — “Benutzerkonto”, “Konto”. In conversation — “Account” (der Account). Technically — “Benutzer”, “User”.",
      "why": {
        "text": "Composition: der Benutzer (“user”, from benutzen) + das Konto (“account”).\nOrigin: das Konto came in the 15th–16th centuries from Italian banking language (conto “account, calculation” < Lat. computus “computation” — from the same root as Computer). In IT it was transferred by analogy with English user account.\nTransparency: completely transparent compound.",
        "evidence": "Benutzer + Konto (< Ital. conto “account” < Lat. computus, 15th–16th c.)."
      },
      "parts": [
        "der Benutzer — user (from benutzen)",
        "das Konto — account"
      ]
    },
    "it-sec-identitaet": {
      "note": "“Der Identitätsdiebstahl” — identity theft. “Die Identität prüfen / nachweisen” — to verify / prove one’s identity. Nouns ending in -tät are always feminine (die).",
      "usageNote": "“Identität”, “Identitätsmanagement” are standard. Abbreviations remain English: “IAM”, “Identity Provider”.",
      "why": {
        "text": "Composition: unanalysable borrowing (the suffix -tät always gives feminine gender die).\nOrigin: from Late Latin identitās (“sameness”, from idem “the same”). In Identity and Access Management (IAM) it denotes a digital entity confirming that the user or service is who they claim to be.\nTransparency: international term.",
        "evidence": "From Late Lat. identitās (“sameness”, from Lat. idem “the same”)."
      }
    },
    "it-sec-anmelden": {
      "note": "Separable and reflexive: “Ich melde mich an”. To log out — “sich abmelden”. In everyday life: “sich beim Bürgeramt anmelden” — to register one’s address, “sich zum Kurs anmelden” — to sign up for a course.",
      "usageNote": "Standard — “sich anmelden”, “die Anmeldung”. Among IT staff — “sich einloggen”, “der Login”.",
      "why": {
        "text": "Composition: separable prefix an- + verb melden (“to report, announce”).\nOrigin: Old High German meldōn meant “to report, announce”. sich anmelden literally means “to announce one’s arrival”, whence first registering at a doctor’s office or municipal authority, and later logging into a computer system.\nTransparency: figurative, the link with melden is easy to trace.",
        "evidence": "an- + melden (< OHG meldōn “to announce, report”): “to announce oneself” → registration and system login."
      },
      "meaningExplanation": "In IT sich anmelden means “to log into an account”, while in everyday life it means “to sign up for a course/appointment” or “to officially register one’s residence”.",
      "meaningExamples": [
        "to log in with password and 2FA",
        "to register one’s address at the citizens’ office"
      ],
      "senses": [
        "to log into a system (IT)",
        "to sign up, register"
      ],
      "parts": [
        "to, at (separable)",
        "stem of melden — to report, announce",
        "infinitive ending"
      ]
    },
    "it-sec-sperren": {
      "note": "The opposite is “entsperren” / “freischalten”. “Die Karte sperren lassen” — to have one’s bank card blocked. “Vorsorglich” — as a precaution, preventively (useful in reports).",
      "usageNote": "“Sperren” is the standard word for accounts, cards, ports. “Blockieren” is used more often for traffic, IPs, senders.",
      "why": {
        "text": "Composition: root verb sperr- + -en (alongside die Sperre “barrier, lock, block”).\nOrigin: Old High German sperren is formed from the noun der Sparren (“beam, rafter”): originally “to bar a passage with a beam, lock”, whence modern “to block, lock” (a road, a card, an account).\nTransparency: basic root (sperren ↔ entsperren).",
        "evidence": "OHG sperren (from Sparren “beam, rafter”): “to bar with a beam” → “to close, block, lock”."
      }
    },
    "it-sec-freischalten": {
      "note": "Separable: “Ich schalte den Zugang frei”. The opposite is “sperren”. “Die Freischaltung” — activation (e.g. of a new account or SIM card).",
      "usageNote": "“Freischalten” is an everyday word in tickets: a port, an account, a feature. There is no single English loanword used in its place.",
      "why": {
        "text": "Composition: frei- (“free, clear”) + verb schalten (“to switch”).\nOrigin: Old High German scaltan meant “to push, pole (a boat)”, and in the 19th century became established in electrical engineering for switching circuits (einschalten / ausschalten). In telephony and IT freischalten came to mean “to switch access open, enable, activate”.\nTransparency: transparent to modern speakers (frei + schalten).",
        "evidence": "frei + schalten (< OHG scaltan “to push”, since the 19th c. electrical “to switch”)."
      },
      "parts": [
        "free, open (separable element)",
        "stem of schalten — to switch",
        "infinitive ending"
      ]
    },
    "it-sec-zuruecksetzen": {
      "note": "Separable: “Ich setze das Passwort zurück”. “Auf Werkseinstellungen zurücksetzen” — to reset to factory settings.",
      "usageNote": "“Zurücksetzen” is standard in user interfaces and speech. Colloquially — “resetten”.",
      "why": {
        "text": "Composition: separable element zurück- (“back”) + setzen (“to set, put”).\nOrigin: literally “to put back in its former place”; in interfaces and technology it became established as the German equivalent of English reset (“to restore to the initial state”).\nTransparency: figurative, but the structure “back + set” is completely clear.",
        "evidence": "zurück (“back”) + setzen (“to set, place”): “to restore to the initial position” (equivalent of Eng. reset)."
      },
      "parts": [
        "back (separable)",
        "stem of setzen — to set, place",
        "infinitive ending"
      ]
    },
    "it-sec-quarantaene": {
      "note": "“In Quarantäne verschieben” — to move to quarantine; “aus der Quarantäne freigeben” — to release from quarantine. Stress is on the third syllable: qua-ran-TÄ-ne.",
      "usageNote": "“Quarantäne” is used identically in antivirus tools, mail filters and medicine.",
      "why": {
        "text": "Composition: unanalysable borrowing (pl. die Quarantänen).\nOrigin: borrowed in the 17th century via French quarantaine from Italian quarantena (from quaranta “forty”): in 14th–15th-century Venice, ships arriving from plague-stricken ports were kept in isolation for forty days. In IT the same image was transferred to isolating suspicious files and emails.\nTransparency: the historical link to the number 40 is hidden in modern usage.",
        "evidence": "Into German via Fr. quarantaine (17th c.) < Ital. quarantena < quaranta “forty” (40-day isolation of ships in Venice)."
      }
    },
    "it-sec-virenscanner": {
      "note": "“Alarm schlagen” — to raise the alarm. “Der Virenschutz” — antivirus protection. Plural unchanged.",
      "usageNote": "In the office people say “Virenscanner” or “Virenschutz”. In corporate environments increasingly — “EDR”, “Endpoint Protection”.",
      "why": {
        "text": "Composition: die Viren (pl. of Virus) + der Scanner (from Eng. to scan).\nOrigin: English scan goes back to Late Latin scandere (“to climb; to scan verse foot by foot”), from which developed the sense “to examine line by line, scan with a beam”. In German it was combined with Viren.\nTransparency: completely transparent hybrid compound.",
        "evidence": "Viren (< Lat. vīrus) + Eng. scanner (< to scan < Lat. scandere “to scan verse by feet → examine closely”)."
      },
      "parts": [
        "die Viren — viruses",
        "der Scanner — scanner"
      ]
    },
    "it-sec-endgeraet": {
      "note": "Neuter because of “das Gerät”. “Mobile Endgeräte” — mobile devices (a typical phrasing in security policies). “BYOD” is said in English.",
      "usageNote": "Officially — “Endgerät”, “mobile Endgeräte”. In the SOC — “Endpoint”, “Client”.",
      "why": {
        "text": "Composition: stem End- (from das Ende “end”) + das Gerät (“device, equipment”).\nOrigin: das Gerät (MHG geræte) originally meant “equipment, utensils, provisions” (from an older sense of Rat — “stores, means”, also preserved in Hausrat “household goods” and Vorrat “supply, stock”). In networking, an Endgerät is a device at the edge (“end”) of the network.\nTransparency: transparent to modern speakers.",
        "evidence": "End- + Gerät (< MHG geræte “equipment, gear”, related to Rat in the sense “stores, means”)."
      },
      "parts": [
        "das Ende — end",
        "das Gerät — device, appliance"
      ]
    },
    "it-sec-fernzugriff": {
      "note": "“Fern-” = tele- / remote: Fernsehen (television), Fernbedienung (remote control), Fernwartung (remote maintenance). “Per Fernzugriff” — remotely.",
      "usageNote": "Officially — “Fernzugriff”, “Fernwartung” (remote maintenance). In IT often “Remote Access”, “Remote-Zugriff”.",
      "why": {
        "text": "Composition: adjective fern (“far, distant”) + noun der Zugriff (“access”).\nOrigin: in 19th–20th-century German technical terminology the element Fern- productively rendered Greek tele- (“far”): Fernsprecher (“telephone”), Fernsehen (“television”), Fernwartung (“remote maintenance”). Fernzugriff is built on the same pattern.\nTransparency: completely transparent compound.",
        "evidence": "Productive technical model Fern- as the German equivalent of Gk. tele- (Fernsprecher, Fernsehen, Fernwartung)."
      },
      "parts": [
        "fern — far, remote",
        "der Zugriff — access"
      ]
    },
    "it-sec-blockieren": {
      "note": "Verb ending in -ieren: past participle without ge- (blockiert). “Auf die Blocklist setzen” — to put on the blocklist.",
      "usageNote": "“Blockieren” is used for traffic, IP addresses, senders, websites. For user accounts “sperren” is more common.",
      "why": {
        "text": "Composition: stem Block + suffix -ieren.\nOrigin: borrowed in the 17th century from French bloquer (“to blockade a fortress, cut off approaches”), which itself goes back to Germanic Block (“log, block of wood” — “to bar a road with logs”).\nTransparency: international verb, matching English block.",
        "evidence": "17th c. from Fr. bloquer (“to cut off access”, borrowed earlier from Gmc. Block “log, block”)."
      }
    },
    "it-sec-datenschutz": {
      "note": "Distinguish: “Datenschutz” — protection of personal data of individuals (law, DSGVO/GDPR), “Datensicherheit / IT-Sicherheit” — technical protection of all data. “Die DSGVO” (Datenschutz-Grundverordnung) = GDPR.",
      "usageNote": "Always in German: “Datenschutz”, “der/die Datenschutzbeauftragte”, “DSGVO”. “Privacy” is hardly ever used.",
      "why": {
        "text": "Composition: die Daten (“data”) + der Schutz (“protection”, related to schützen).\nOrigin: the legal term became established in Germany from 1970 onwards, when the state of Hesse passed the world’s first data protection act (Hessisches Datenschutzgesetz).\nTransparency: completely transparent compound.",
        "evidence": "Daten + Schutz; the term entered legal usage in West Germany in 1970 (first act in Hesse, 1970)."
      },
      "parts": [
        "die Daten — data",
        "der Schutz — protection (from schützen)"
      ]
    },
    "it-sec-personenbezogen": {
      "note": "The adjective declines: “personenbezogene Daten”, but “die Verarbeitung personenbezogener Daten” (genitive). “Besondere Kategorien” — special categories (health, religion, etc.).",
      "usageNote": "Legal term from the DSGVO (GDPR) — always used in official contexts. In casual speech: “persönliche Daten”.",
      "why": {
        "text": "Composition: die Person(en) (“person”) + bezogen (past participle of beziehen auf “to relate to”).\nOrigin: die Person goes back to Latin persōna (“actor’s mask → role → person, legal person”). The phrase literally means “data relating to a specific person”.\nTransparency: transparent if you know the phrase sich beziehen auf.",
        "evidence": "Person (< Lat. persōna “mask, role, person”) + participle bezogen (from beziehen auf)."
      },
      "parts": [
        "die Person(en) — person, individual",
        "participle of beziehen (auf) — relating to"
      ]
    },
    "it-sec-vertraulich": {
      "note": "Literally “entrusted in confidence”. Typical classification levels: “öffentlich, intern, vertraulich, streng vertraulich”. “Die Vertraulichkeit” — confidentiality (one of the core security objectives).",
      "usageNote": "“Vertraulich”, “streng vertraulich” — classification label and everyday speech. “Confidential” only appears in English templates.",
      "why": {
        "text": "Composition: from the verb vertrauen (ver- + trauen “to trust”) + suffix -lich.\nOrigin: trauen is cognate with the adjective treu (“faithful, loyal”) and English true. vertraulich literally means “based on trust, shared in confidence” → “confidential” (cf. Lat. cōnfīdere → confidential).\nTransparency: figurative, the link with Vertrauen (“trust”) is clearly visible.",
        "evidence": "From vertrauen (related to trauen / treu, cognate with Eng. true) + -lich: “based on trust → confidential”."
      },
      "parts": [
        "inseparable prefix (vertrauen — to trust)",
        "stem of trauen — to trust",
        "adjective suffix"
      ]
    },
    "it-sec-schutzziel": {
      "note": "Neuter because of “das Ziel”. “Betroffen sein” — to be affected (a very frequent phrase in incident reports).",
      "usageNote": "Term used in BSI and ISO documentation: “die drei Schutzziele”. In English materials — “CIA Triad”.",
      "why": {
        "text": "Composition: der Schutz (“protection”) + das Ziel (“goal, objective”).\nOrigin: das Ziel (OHG zil) originally meant “limit, boundary, mark aimed at”. The compound Schutzziel became established in German law, occupational safety and BSI standards.\nTransparency: completely transparent compound.",
        "evidence": "Schutz + Ziel (< OHG zil “boundary, limit, target”)."
      },
      "parts": [
        "der Schutz — protection",
        "das Ziel — goal, objective"
      ]
    },
    "it-sec-verfuegbarkeit": {
      "note": "“Verfügbar” — available. “Zur Verfügung stehen” — to be available / at someone’s disposal (“Ich stehe für Fragen zur Verfügung”). “Über etw. verfügen” — to have something at one’s disposal.",
      "usageNote": "“Verfügbarkeit” is standard (in an SLA: “Verfügbarkeit von 99,9 %”). In operations also “Availability”, “Uptime”.",
      "why": {
        "text": "Composition: adjective verfügbar (from verfügen + -bar) + suffix -keit.\nOrigin: verfügen is formed from fügen (“to join, fit together, arrange”): “to dispose of, have at one’s disposal”. Hence verfügbar — “available to be used”, and the noun Verfügbarkeit.\nTransparency: transparent from the verb verfügen über and the phrase zur Verfügung stehen.",
        "evidence": "From verfügbar < verfügen (“to have at one’s disposal”, from fügen “to join, arrange”) + -keit."
      },
      "parts": [
        "inseparable prefix",
        "stem of verfügen — to have at one’s disposal",
        "“-able”",
        "adjective → noun, always die"
      ]
    },
    "it-sec-richtlinie": {
      "note": "“Eine Richtlinie gilt / tritt in Kraft” — a policy applies / enters into force. “Gegen die Richtlinie verstoßen” — to violate the policy. Also an EU directive: “die NIS-2-Richtlinie”.",
      "usageNote": "“Richtlinie”, “Sicherheitsrichtlinie” are standard in companies. People also say “Policy” (die Policy), especially for technical policies (Gruppenrichtlinie = GPO).",
      "why": {
        "text": "Composition: stem of the verb richten (“to direct, align”) + die Linie (“line”).\nOrigin: die Linie was borrowed from Latin līnea (“flaxen thread, builder’s plumb line, straight line”). Richtlinie literally meant “guiding line, benchmark”, whence since the 19th–20th centuries — “guideline, policy, directive”.\nTransparency: figurative, the image of a “guiding line” is very vivid.",
        "evidence": "richten (“to direct”) + Linie (< Lat. līnea “flaxen thread, cord, line”): “guiding line → policy, directive”."
      },
      "parts": [
        "stem of richten — to direct, align",
        "die Linie — line"
      ]
    },
    "it-sec-vorgabe": {
      "note": "“Vorgaben umsetzen / einhalten” — to implement / comply with requirements. “Vorgeben” — to specify in advance; also “to pretend” (“Er gibt vor, vom Support zu sein”).",
      "usageNote": "“Vorgaben” is a very frequent office word: “gesetzliche Vorgaben”, “die Vorgaben vom Kunden”. No English loanword replaces it in everyday German speech.",
      "why": {
        "text": "Composition: from the verb vorgeben (vor- “in advance, ahead” + geben “to give”).\nOrigin: literally “what is given in advance (as a framework or standard)”; earlier also used in sports (“handicap, head start”), later established in business and technical language as “specification, requirement, target”.\nTransparency: figurative, easily linked to vorgeben.",
        "evidence": "Deverbal noun from vorgeben (vor- + geben “to set in advance”): “prescribed standard, requirement”."
      },
      "parts": [
        "ahead, in advance (vorgeben — to specify)",
        "from geben — to give"
      ]
    },
    "it-sec-massnahme": {
      "note": "“Maßnahmen ergreifen / treffen / umsetzen” — to take / implement measures. “Die Sofortmaßnahme” — immediate measure, “die Gegenmaßnahme” — countermeasure. Spelled with ß.",
      "usageNote": "A key word in reports and audits: “technische und organisatorische Maßnahmen (TOM)”. “Controls” is used when referring to English-language frameworks.",
      "why": {
        "text": "Composition: das Maß (“measure”) + -nahme (deverbal stem from nehmen “to take”).\nOrigin: the compound appeared in the 19th century in business and administrative language — literally “taking a measure” (often compared with the French phrase prendre des mesures “to take measures”).\nTransparency: figurative, both parts are easily recognised.",
        "evidence": "19th-c. compound of Maß (“measure”) + -nahme (from nehmen “to take”); compared with Fr. prendre des mesures."
      },
      "parts": [
        "das Maß — measure",
        "deverbal noun from nehmen — to take"
      ]
    },
    "it-sec-risiko": {
      "note": "Neuter; plural “die Risiken”. “Ein Risiko eingehen / tragen / akzeptieren” — to take / bear / accept a risk. “Das Restrisiko” — residual risk.",
      "usageNote": "“Risiko”, “Risikoanalyse”, “Restrisiko” are standard. “Risk” only appears in English-language tools.",
      "why": {
        "text": "Composition: unanalysable borrowing (pl. die Risiken).\nOrigin: borrowed in the 16th century in the language of trade and maritime insurance from Italian risico / rischio. The further origin of the Italian word itself is debated (theories link it to Greek rhíza “cliff, rock” or Arabic rizq).\nTransparency: international term.",
        "evidence": "16th c. from Ital. risico/rischio (mercantile and maritime law); earlier etymology disputed."
      }
    },
    "it-sec-bewerten": {
      "note": "“Etw. als … bewerten” — to rate / classify something as … Do not confuse with “auswerten” (to analyse data). “Die Bewertung” — assessment, rating; also a customer review (in an online shop).",
      "usageNote": "“Bewerten”, “die Bewertung”, “Risikobewertung” are standard. “Assessment” is used in English frameworks.",
      "why": {
        "text": "Composition: inseparable prefix be- + werten (from der Wert “value, worth”).\nOrigin: literally “to assign a value to, determine the worth or significance of” (parallel to English “evaluate” from “value”).\nTransparency: completely transparent formation.",
        "evidence": "be- + werten (from der Wert “value, worth”): “to determine value, evaluate”."
      },
      "parts": [
        "inseparable prefix (makes transitive)",
        "der Wert — value",
        "infinitive ending"
      ]
    },
    "it-sec-audit": {
      "note": "“Die Abweichung” — non-conformity, finding. “Ein Audit bestehen” — to pass an audit. “Die Revision” in a company means the internal audit department.",
      "usageNote": "“Das Audit” is standard (sometimes “der Audit”). In German also “die Prüfung”, “die Revision” (internal audit).",
      "why": {
        "text": "Composition: unanalysable borrowing from English.\nOrigin: English audit goes back to Latin audītus (“a hearing”, from audīre “to hear”): in the Middle Ages financial accounts were examined by having them read aloud before auditors. Later the term expanded to quality and information security audits.\nTransparency: the historical link with “hearing” (cf. audio) is hidden in modern usage.",
        "evidence": "From Eng. audit < Lat. audītus (“hearing”, from audīre): medieval oral examination of accounts."
      }
    },
    "it-sec-zertifizierung": {
      "note": "“Nach + dat. zertifiziert sein” — to be certified to/under … Also used for people: “eine Zertifizierung machen / ablegen” — to take/pass a certification exam.",
      "usageNote": "“Zertifizierung nach ISO 27001”, “zertifiziert sein” are standard.",
      "why": {
        "text": "Composition: from the verb zertifizieren + suffix -ung.\nOrigin: Medieval Latin certificāre (“to certify, make certain”) is compounded from certus (“certain, reliable”) + facere (“to make”). In German it is formed with the productive chain -ier- + -ung.\nTransparency: international root.",
        "evidence": "From zertifizieren < Med. Lat. certificāre (certus “certain” + facere “to make”) + -ung."
      },
      "parts": [
        "stem from das Zertifikat — certificate",
        "verb suffix for loanwords",
        "verb → noun, always die"
      ]
    },
    "it-sec-nachweis": {
      "note": "“Einen Nachweis erbringen / vorlegen” — to provide / submit proof. Verb “nachweisen” — to prove, demonstrate. “Der Beweis” — proof/evidence (in court), “der Nachweis” — more often documented proof or a certificate/record.",
      "usageNote": "In audits — “Nachweise” (evidence). A very frequent word in German bureaucracy in general.",
      "why": {
        "text": "Composition: from the verb nachweisen (nach- “after, along the trail” + weisen “to point, show”).\nOrigin: nachweisen (“to trace and show reliably → prove”) yielded in the 18th–19th centuries the noun der Nachweis for documentary proof. The whole weisen family (Ausweis, Beweis, Hinweis, Nachweis) is built around the idea of “pointing/showing”.\nTransparency: figurative, easy to remember within the -weis family.",
        "evidence": "Deverbal noun from nachweisen (nach- + weisen “to show, verify”)."
      },
      "parts": [
        "after, following (nachweisen — to prove)",
        "stem of weisen — to point, show"
      ]
    },
    "it-sec-schulung": {
      "note": "Verb “schulen” — to train staff: “Die Mitarbeiter werden regelmäßig geschult”. “Die Weiterbildung” — further/continuing education (broader).",
      "usageNote": "“Schulung” is standard in companies. “Training” is also used; “Awareness-Schulung” is a common hybrid.",
      "why": {
        "text": "Composition: from the verb schulen (“to train, school”, from die Schule) + -ung.\nOrigin: die Schule was borrowed early (OHG scuola) from Latin schola < Greek scholḗ, which originally meant “leisure, free time for discussion and study”.\nTransparency: completely transparent formation from Schule.",
        "evidence": "From schulen < Schule (< Lat. schola < Gk. scholḗ “leisure, learned discussion”) + -ung."
      },
      "parts": [
        "stem of schulen (from die Schule — school)",
        "verb → noun, always die"
      ]
    },
    "it-sec-sensibilisierung": {
      "note": "“Jdn. für etw. sensibilisieren” — to raise someone’s awareness of an issue. False friend alert: “sensibel” means sensitive, NOT English “sensible” (“sensible Daten” = sensitive/confidential data!).",
      "usageNote": "Officially — “Sensibilisierung der Mitarbeiter”. In security teams more often “Awareness”, “Security Awareness”.",
      "why": {
        "text": "Composition: from the verb sensibilisieren (from sensibel “sensitive”) + -ung.\nOrigin: sensibel came from French sensible (< Lat. sēnsibilis “perceptible, sensitive”, from sentīre “to feel”). Making employees “sensitive” to threats literally means raising their alertness (awareness).\nTransparency: explains why German sensibel means “sensitive” rather than English sensible (“reasonable”).",
        "evidence": "From sensibilisieren < sensibel (< Fr. sensible < Lat. sēnsibilis “sensitive”, from sentīre)."
      }
    },
    "it-sec-zertifikat": {
      "note": "“Ein Zertifikat ausstellen / erneuern / widerrufen” — to issue / renew / revoke a certificate. “Gültig / ungültig” — valid / invalid. Also a course completion certificate.",
      "usageNote": "“Das Zertifikat”, “das TLS-Zertifikat” are standard. “Cert” is slang in tech teams.",
      "why": {
        "text": "Composition: unanalysable borrowing (pl. die Zertifikate).\nOrigin: from Medieval Latin certificātum (“certificate, attested document”, from certus “certain, reliable” + facere “to make”). In cryptography and TLS it is a digital document attesting to the authenticity of a public key.\nTransparency: international term.",
        "evidence": "From Med. Lat. certificātum (“that which is certified”, from certus + facere)."
      }
    },
    "it-sec-ablaufen": {
      "note": "Perfekt with sein: “Das Zertifikat ist abgelaufen”. “Der Ablauf” — process, procedure, sequence of events (“der Ablauf eines Incidents”). “Das Ablaufdatum” — expiry date.",
      "usageNote": "“Das Zertifikat / Passwort läuft ab” is standard. “Expiren” is rare slang.",
      "why": {
        "text": "Composition: separable prefix ab- (“down, to the end”) + laufen (“to run, flow”).\nOrigin: from the physical sense “to run/flow down to the end” (like sand in an hourglass or water in a water clock) two meanings developed: “to proceed, unfold” (of a process) and “to expire” (of a validity period).\nTransparency: figurative, the hourglass metaphor makes the meaning vivid.",
        "evidence": "ab- + laufen (“to flow down, run to the end”): image of an hourglass/water clock → “to expire (of a term)”."
      },
      "meaningExplanation": "ablaufen has two frequent dictionary meanings: “to expire” (of a certificate, contract, password) and “to run, proceed, take place” (of a process, meeting).",
      "meaningExamples": [
        "The certificate expires tomorrow.",
        "How did the audit go?"
      ],
      "senses": [
        "to expire (of a period/certificate)",
        "to proceed, go (of a process)"
      ],
      "parts": [
        "off, to the end (separable)",
        "stem of laufen — to run",
        "infinitive ending"
      ]
    },
    "it-sec-signatur": {
      "note": "A handwritten signature is “die Unterschrift”. “Signaturbasierte Erkennung” — signature-based detection. “Die E-Mail-Signatur” — signature block at the end of an email.",
      "usageNote": "“Signatur” is used for an electronic signature, a malware signature, and an email signature block. “Signieren” — to sign (cryptographically).",
      "why": {
        "text": "Composition: unanalysable borrowing (pl. die Signaturen).\nOrigin: from Medieval Latin signātūra (“mark, sign, signature”, from signāre “to mark” < signum “sign”). In IT it covers both a digital cryptographic signature and the characteristic “fingerprint” of a malicious program.\nTransparency: international term.",
        "evidence": "From Med. Lat. signātūra (“mark, signature”, from signāre < signum “sign”)."
      },
      "meaningExplanation": "Signatur means an electronic signature (or signature block in an email), and in antivirus tools and IDS a signature (pattern) of a known threat.",
      "meaningExamples": [
        "to verify a digital signature",
        "new signatures in the antivirus scanner"
      ],
      "senses": [
        "electronic signature",
        "malware signature"
      ]
    },
    "it-sec-segmentierung": {
      "note": "“Sich ausbreiten” — to spread (of malware, an epidemic). “Lateral Movement” is used in English in the SOC; descriptively in German — “seitliche Bewegung im Netz”.",
      "usageNote": "“Netzsegmentierung”, “Segmentierung” are standard. People also say “Netzwerk-Segmente”, “Zonen”.",
      "why": {
        "text": "Composition: noun das Segment + verb suffix -ier- + -ung.\nOrigin: Segment was borrowed from Latin segmentum (“cut-off piece, section”, from secāre “to cut”, from the same root as sector and section). In networking it means dividing a network into isolated zones.\nTransparency: international term.",
        "evidence": "From das Segment (< Lat. segmentum “section, strip”, from secāre “to cut”) + -ier- + -ung."
      },
      "parts": [
        "das Segment — segment, section",
        "verb suffix for loanwords",
        "verb → noun, always die"
      ]
    },
    "it-sec-aktualisieren": {
      "note": "Past participle without ge-: aktualisiert. “Die Seite aktualisieren” — to refresh the page (F5). False friend alert: “aktuell” = current / up-to-date, NOT English “actual” (= tatsächlich / eigentlich).",
      "usageNote": "In user interfaces and manuals — “aktualisieren”, “die Aktualisierung”. In conversation — “updaten” (hat geupdatet) and “das Update”.",
      "why": {
        "text": "Composition: stem from aktuell + suffix -isieren.\nOrigin: aktuell was borrowed in the 19th century from French actuel (< Late Lat. āctuālis “active, belonging to the present moment”). Thus aktualisieren means “to bring up to the current state, to update”.\nTransparency: explains why aktuell means “current”, not English “actual”.",
        "evidence": "From aktuell (< Fr. actuel < Late Lat. āctuālis “present, current”) + -isieren."
      },
      "parts": [
        "stem from aktuell — current",
        "verb suffix for loanwords",
        "infinitive ending"
      ]
    },
    "it-sec-veraltet": {
      "note": "Past participle of “veralten” — to become outdated / obsolete. For unsupported software: “wird nicht mehr unterstützt” — is no longer supported.",
      "usageNote": "“Veraltet” is standard for software and systems. “Legacy” is used in tech teams (“Legacy-System”). “End of Life” also stays English.",
      "why": {
        "text": "Composition: past participle of veralten (ver- + alt “old”).\nOrigin: productive pattern ver- + adjective (“to become [adj.]”, cf. verbessern, verlängern): veralten — “to grow old, become obsolete”.\nTransparency: completely transparent formation.",
        "evidence": "Participle of veralten (ver- “change of state” + alt “old”)."
      },
      "parts": [
        "inseparable prefix (change of state)",
        "alt — old",
        "past participle ending"
      ]
    },
    "it-sec-konfiguration": {
      "note": "“Konfigurieren” — to configure (past participle: konfiguriert). For non-technical users “die Einstellungen” (settings) is clearer.",
      "usageNote": "“Konfiguration”, “falsch konfiguriert”, “die Fehlkonfiguration” are standard. Colloquially — “die Config”, “die Einstellungen”.",
      "why": {
        "text": "Composition: unanalysable borrowing (pl. die Konfigurationen).\nOrigin: from Latin cōnfigūrātio (“shaping, arrangement”, from con- “together” + figūra “form, shape”). First a term in astronomy and chemistry, since the 20th century the setup and parameters of IT systems.\nTransparency: international term.",
        "evidence": "From Lat. cōnfigūrātio (“mutual arrangement, shaping”, from figūra)."
      }
    },
    "it-sec-haerten": {
      "note": "From “hart” — hard. Linking -e- in conjugation: er härtet. “Die Härtung” — hardening (disabling unnecessary services, applying secure settings). In everyday life “sich abhärten” — to toughen oneself up.",
      "usageNote": "“Ein System härten”, “die Härtung” are standard at the BSI. In tech teams also “Hardening”.",
      "why": {
        "text": "Composition: from the adjective hart (“hard”, Eng. hard) with umlaut + -en.\nOrigin: Old High German herten meant “to make hard”, especially in blacksmithing (“to temper metal”). In cybersecurity it was adopted as the direct German equivalent of English hardening (“to strengthen a system’s defences”).\nTransparency: the metaphor of “tempering/hardening” is completely clear.",
        "evidence": "OHG herten (“to make hard, temper”, from hart); in infosec — equivalent of Eng. hardening."
      }
    },
    "it-sec-pentest": {
      "note": "Masculine because of “der Test”. “Einen Pentest beauftragen / durchführen” — to commission / carry out a pentest. “Der Auftraggeber” — client / commissioning party.",
      "usageNote": "Everyone says “Pentest”, “Pentester”. Officially in full — “Penetrationstest”.",
      "why": {
        "text": "Composition: shortening of Penetrationstest (Pen- + Test).\nOrigin: calque and shortening of English penetration test (from Latin penetrāre “to penetrate, enter into” + test): a controlled test of whether an attacker can break into a system.\nTransparency: transparent technical abbreviation.",
        "evidence": "Shortening of Eng. penetration test (< Lat. penetrāre “to penetrate” + test)."
      },
      "parts": [
        "short for Penetration — penetration",
        "der Test — test"
      ]
    },
    "it-sec-lieferkette": {
      "note": "“Der Lieferant” — supplier (weak n-declension: den Lieferanten). “Der Hersteller” — manufacturer, vendor. The word became very frequent in the news after 2020.",
      "usageNote": "“Lieferkette” is the general word (economics, news). In security both “Lieferkette” and “Supply Chain”, “Supply-Chain-Angriff” are used.",
      "why": {
        "text": "Composition: stem of the verb liefern (“to deliver, supply”) + die Kette (“chain”).\nOrigin: liefern was borrowed in the 15th century from French livrer (< Lat. līberāre “to release, hand over”), while Kette is an early borrowing from Latin catēna (“chain”). The compound Lieferkette corresponds to English supply chain.\nTransparency: figurative (image of chain links), both parts are completely clear.",
        "evidence": "liefern (< Fr. livrer < Lat. līberāre) + Kette (< Lat. catēna); equivalent of Eng. supply chain."
      },
      "meaningExplanation": "The image of links in a chain (die Kette), transferred to a connected sequence of suppliers and contractors (if one link breaks, the others are affected).",
      "meaningExamples": [
        "an attack via the supply chain"
      ],
      "parts": [
        "stem of liefern — to supply, deliver",
        "die Kette — chain"
      ]
    },
    "it-sec-wiederherstellen": {
      "note": "Separable part “wieder her”: “Wir stellen die Daten wieder her”. Past participle written as one word: wiederhergestellt. “Die Wiederherstellung” — recovery / restoration (the final phase of incident response).",
      "usageNote": "“Wiederherstellen”, “die Wiederherstellung” are standard in interfaces and plans. In operations also “Restore”, “Recovery”.",
      "why": {
        "text": "Composition: wieder (“again”) + herstellen (“to produce, set up”, her- + stellen).\nOrigin: literally “to put back into working/original order” — established in medicine (“recovery”), conservation and IT (restoring from backup, disaster recovery).\nTransparency: figurative, the structure “again + produce/set up” is easily read.",
        "evidence": "wieder (“again”) + herstellen (“to make, restore to original state”, from stellen)."
      },
      "parts": [
        "again",
        "hither (herstellen — to produce, set up)",
        "stem of stellen — to put, place",
        "infinitive ending"
      ]
    },
    "it-sec-datensicherung": {
      "note": "“Daten sichern” — to back up data (and also “to save / secure” in general). Do not confuse: “Datensicherung” — data backup, “Datensicherheit” — data security.",
      "usageNote": "Officially — “Datensicherung”. In IT everyone says “das Backup” (pl. die Backups).",
      "why": {
        "text": "Composition: die Daten (“data”) + die Sicherung (“securing, safeguarding”, from sichern + -ung).\nOrigin: sichern is formed from sicher (< Lat. sēcūrus “carefree, safe, reliable”). In IT terminology Datensicherung (“the process of creating backup copies”) is distinguished from Datensicherheit (“data security”).\nTransparency: completely transparent compound.",
        "evidence": "Daten + Sicherung (from sichern < sicher < Lat. sēcūrus)."
      },
      "parts": [
        "die Daten — data",
        "stem of sichern — to secure, safeguard",
        "verb → noun, always die"
      ]
    },
    "it-sec-notfallplan": {
      "note": "Plural with umlaut: die Notfallpläne. “Die Geschäftsführung” — executive management. “Den Notfallplan auslösen” — to activate the emergency plan.",
      "usageNote": "“Notfallplan”, “Notfallhandbuch”, “Notfallmanagement” (BSI-Standard 200-4). In English frameworks — “Incident Response Plan”, “BCM”.",
      "why": {
        "text": "Composition: der Notfall (“emergency”) + der Plan (“plan”).\nOrigin: der Plan was borrowed in the 17th–18th centuries from French plan (< Lat. plānus “level, flat”): first “flat drawing, ground plan on paper”, then “plan of action”.\nTransparency: completely transparent compound.",
        "evidence": "Notfall + Plan (< Fr. plan < Lat. plānus “flat” → “ground plan, plan”)."
      },
      "parts": [
        "der Notfall — emergency",
        "der Plan — plan"
      ]
    },
    "it-sec-dienstleister": {
      "note": "“Die Dienstleistung” — service. “Der Auftragsverarbeiter” — data processor under the DSGVO/GDPR (requires a data processing agreement, AVV). Plural unchanged.",
      "usageNote": "“Dienstleister”, “IT-Dienstleister”, “externer Dienstleister” are standard. In the SOC also “MSSP”, “Provider”.",
      "why": {
        "text": "Composition: der Dienst (“service”, from dienen “to serve”) + stem of leisten (“to perform, render”) + -er.\nOrigin: the verb leisten goes back to Old High German leistan (“to follow a track → fulfil an obligation, perform”). The compound Dienstleister became established in the late 20th century for companies providing services (cf. die Dienstleistung).\nTransparency: transparent to modern speakers.",
        "evidence": "Dienst (from dienen) + leisten (< OHG leistan “to fulfil, perform”) + -er."
      },
      "parts": [
        "der Dienst — service",
        "stem of leisten — to render, perform",
        "one who does"
      ]
    },
    "it-comm-ticket": {
      "note": "“Ein Ticket aufmachen / anlegen / erstellen” — to open/create a ticket, “jdm. ein Ticket zuweisen” — to assign a ticket to someone, “Das Ticket liegt bei X” — the ticket is currently with X. In everyday life also a travel/event ticket (= die Fahrkarte).",
      "usageNote": "“Das Ticket” is used everywhere (Jira, ServiceNow). The surrounding verbs are German: aufmachen, anlegen, zuweisen, schließen.",
      "why": {
        "text": "Composition: unanalysable borrowing from English.\nOrigin: English ticket goes back to Old French estiquet(te) (“note, label, slip”), the same French source as étiquette (“label; etiquette”).\nTransparency: unanalysable borrowing.",
        "evidence": "Eng. ticket < OFr. estiquet(te) “label, note” (same source as Fr. étiquette)."
      },
      "meaningExplanation": "In IT das Ticket is an issue or request in Jira or ServiceNow, while in everyday life it is a ticket for transport, a concert or a flight.",
      "meaningExamples": [
        "to open a ticket in Jira",
        "to buy a ticket for the ICE train"
      ]
    },
    "it-comm-meeting": {
      "note": "“Im Meeting sein”, “ein Meeting ansetzen” — to schedule a meeting, “verschieben” — to postpone/reschedule, “absagen” — to cancel. In Scrum teams: “Das klären wir im Daily”.",
      "usageNote": "In IT and startups — “das Meeting”, “das Daily”, “die Retro”. In traditional firms and authorities — “die Besprechung”, officially — “die Sitzung”.",
      "why": {
        "text": "Composition: unanalysable borrowing from English.\nOrigin: English meeting (from the verb to meet) entered German in the 19th century (first for political and sporting gatherings), and in the late 20th century became established in business as “business meeting”.\nTransparency: unanalysable borrowing (neuter gender: das Meeting).",
        "evidence": "Borrowed in the 19th c. from Eng. meeting (< to meet); in the business sense “meeting” since the 20th c."
      }
    },
    "it-comm-fehler": {
      "note": "“Einen Fehler machen” — to make a mistake, “ein Fehler tritt auf” — an error occurs, “Der Fehler liegt an/in …” — the fault lies with/in … Plural is identical to singular: die Fehler.",
      "usageNote": "Developers say “der Bug” for code defects; “der Fehler” is the general word and the only one used with non-IT people. “Die Fehlermeldung” — error message.",
      "why": {
        "text": "Composition: stem of the verb fehlen + suffix -er.\nOrigin: the verb fehlen was borrowed in Middle High German (vælen) from Old French faillir (“to miss, fail, be lacking”, going back to Latin fallere “to deceive”). From it the noun der Fehler (“miss, fault, error”) was formed in the 16th century.\nTransparency: figurative — in modern German fehlen more often means “to be missing/absent” than “to miss the mark”.",
        "evidence": "MHG vælen < OFr. faillir (< Lat. fallere); Fehler formed from fehlen in the 16th c. meaning “miss, mistake”."
      },
      "parts": [
        "stem of fehlen — to miss, be lacking",
        "noun suffix"
      ]
    },
    "it-comm-beheben": {
      "note": "Collocates with Fehler, Problem, Störung, Schwachstelle, Schaden. Strong verb: behob, hat behoben. In status updates: “Der Fehler ist behoben” — the issue is resolved.",
      "usageNote": "Standard and in writing — “beheben”. Among developers — “fixen” (“Ich fixe das gleich”, “hab’s gefixt”).",
      "why": {
        "text": "Composition: inseparable prefix be- + strong verb heben (“to lift”, hob, gehoben).\nOrigin: in the 18th–19th centuries, from the literal sense “to lift and remove from the path” (cf. abheben, aufheben), the figurative meaning “to remove an obstacle, malfunction, error” developed.\nTransparency: opaque — modern heben (“to lift”) does not by itself suggest “to fix”, though it explains the strong forms behob / behoben.",
        "evidence": "be- + heben (“to lift”): “to clear out of the way” → “to remedy a fault, error” (18th–19th c.)."
      },
      "parts": [
        "inseparable prefix",
        "stem of heben — to lift",
        "infinitive ending"
      ]
    },
    "it-comm-rueckmeldung": {
      "note": "Email closing: “Ich freue mich auf Ihre Rückmeldung”. Also: “Ich melde mich zurück” — I’ll get back to you.",
      "usageNote": "“Rückmeldung” is very common in emails; “Feedback” (das Feedback) is used for evaluations and reviews.",
      "why": {
        "text": "Composition: stem rück- (“back”) + die Meldung (“message, report”, from melden).\nOrigin: German determinative compound — literally “return message, reply notification”, established in business correspondence and engineering.\nTransparency: completely transparent compound.",
        "evidence": "Compound of rück- (“back”) + Meldung (“message”), lit. “return message”."
      },
      "parts": [
        "back",
        "die Meldung — message, notification (from melden)"
      ]
    },
    "pro-office-frist": {
      "note": "Standard collocations: “eine Frist einhalten” (to meet a deadline), “eine Frist setzen” (to set a deadline), “eine Frist verlängern” (to extend a deadline). “Fristgerecht” — on time / within the deadline.",
      "usageNote": "In contracts, with auditors and in formal letters — “die Frist” (“die Frist einhalten”). In teams “die Deadline” is also very common.",
      "why": {
        "text": "Composition: simple noun (pl. die Fristen).\nOrigin: Old High German frist meant “period of time, respite”; it became established in business and legal language as a fixed time limit or deadline (hence befristet “fixed-term”, Kündigungsfrist “notice period”).\nTransparency: basic root of business German.",
        "evidence": "OHG frist “space of time, respite” → legal/business “deadline, time limit”."
      }
    },
    "pro-office-zustaendig": {
      "note": "“Zuständig für + acc.” — “in charge of / responsible for (by remit)”. “Die Zuständigkeit” — area of responsibility / jurisdiction (“Zuständigkeiten klären” — to clarify responsibilities).",
      "usageNote": "The main office word for “who handles this?”: “Wer ist dafür zuständig?”. Much more neutral than “verantwortlich” (which can imply blame or personal liability).",
      "why": {
        "text": "Composition: from the verb zustehen (“to belong to by right, fall within someone’s remit”) with the stem ständ- (from stehen) + -ig.\nOrigin: legal and administrative formation of the 18th–19th centuries meaning “having jurisdiction over / being assigned to handle a matter”.\nTransparency: established business and administrative term.",
        "evidence": "From zustehen (“to appertain to, fall under someone’s remit”) + -ig; administrative term since the 18th–19th c."
      },
      "parts": [
        "to, at",
        "from stehen / Stand — to stand",
        "adjective suffix"
      ]
    },
    "pro-office-vertretung": {
      "note": "Verb: “jdn. vertreten” (vertritt, vertrat, hat vertreten) — to stand in for / represent someone. “Die Urlaubsvertretung” — holiday cover. “Die Krankheitsvertretung” — sick-leave cover.",
      "usageNote": "Out-of-office auto-replies always include: “Meine Vertretung übernimmt …” or “In dringenden Fällen wenden Sie sich an meine Vertretung”.",
      "why": {
        "text": "Composition: from the verb vertreten (ver- + treten “to step”) + -ung.\nOrigin: Old High German firtretan (“to step into someone’s place, stand in for someone”); hence “to substitute for, represent interests” and die Vertretung.\nTransparency: the image of “stepping into someone else’s shoes” is easy to remember.",
        "evidence": "From vertreten (“to step into someone’s place”, ver- + treten) + -ung."
      },
      "parts": [
        "inseparable prefix",
        "stem of treten — to step",
        "verb → noun, always die"
      ]
    },
    "pro-office-absprache": {
      "note": "“Wie abgesprochen” is a golden phrase for opening an email (“Wie gestern abgesprochen schicke ich Ihnen…”). “Ohne Absprache” — without prior agreement/consultation.",
      "usageNote": "Very frequent in business emails: “nach Absprache mit …” — in consultation / agreement with …, “wie abgesprochen” — as agreed.",
      "why": {
        "text": "Composition: from the verb absprechen (“to agree on, arrange”, ab- + sprechen “to speak”).\nOrigin: deverbal noun established in business language for a prior arrangement or understanding.\nTransparency: transparent from absprechen / sprechen.",
        "evidence": "From absprechen (ab- + sprechen): “oral/business arrangement”."
      },
      "parts": [
        "prefix (from absprechen — to arrange, agree)",
        "die Sprache — speech, language"
      ]
    },
    "pro-office-ruecksprache": {
      "note": "Fixed verb phrase: “mit jdm. Rücksprache halten” — to consult / check back with someone. A very polite way to avoid saying “yes” rashly.",
      "usageNote": "Standard formula for buying time politely: “Ich halte kurz Rücksprache mit meinem Chef und melde mich dann.”",
      "why": {
        "text": "Composition: rück- (“back”) + die Sprache (“speech, discussion”, from sprechen).\nOrigin: 18th-century administrative compound — literally “talking back, follow-up consultation” before making a decision.\nTransparency: transparent compound.",
        "evidence": "Compound of rück- + Sprache (18th c.): “consultation and alignment before a decision”."
      },
      "parts": [
        "back",
        "die Sprache — speech"
      ]
    },
    "pro-office-abstimmen": {
      "note": "“Die Abstimmung” means both “coordination / quick sync” (“kurze Abstimmung”) and “vote”. Separable verb: “Wir stimmen uns ab”.",
      "usageNote": "In the office — “Wir müssen uns kurz abstimmen” (to align, coordinate). In IT teams also “syncen”.",
      "why": {
        "text": "Composition: ab- + stimmen (from die Stimme “voice; pitch”).\nOrigin: stimmen developed two senses — “to cast one’s voice (to vote)” and “to tune an instrument to pitch”; from both developed the senses of abstimmen — “to take a vote” and “to bring into harmony, coordinate”.\nTransparency: figurative from musical “tuning in unison” and “voice”.",
        "evidence": "ab- + stimmen (< Stimme): 1) to vote; 2) to bring into harmony, coordinate."
      },
      "meaningExplanation": "abstimmen has two distinct workplace meanings: “to coordinate / align” (mit + dat.) and “to vote” (über + acc.).",
      "meaningExamples": [
        "to coordinate actions with the team",
        "to vote on a motion/proposal"
      ],
      "senses": [
        "to coordinate, align",
        "to vote (über + acc.)"
      ],
      "parts": [
        "separable prefix",
        "stem of stimmen — to tune, vote (from die Stimme)",
        "infinitive ending"
      ]
    },
    "pro-office-kapazitaet": {
      "note": "Always feminine (suffix -tät → die). An excellent professional phrasing for politely declining extra work: “Aktuell habe ich dafür leider keine Kapazitäten”.",
      "usageNote": "Used both for people (“Ich habe diese Woche keine Kapazität mehr”) and for hardware (“Speicherkapazität”). In IT chats often shortened to “Kapa”.",
      "why": {
        "text": "Composition: Latin stem kapaz- + suffix -ität (always die).\nOrigin: borrowed from Latin capācitās (“ability to hold, spaciousness”, from capere “to take, hold”). First in physics and engineering, later in economics and management (“workload capacity, available bandwidth”).\nTransparency: international term.",
        "evidence": "From Lat. capācitās (“ability to contain”, from capere); in the 20th c. extended to production and work capacity."
      },
      "meaningExplanation": "In the office die Kapazität is a polite way to say “I do / don’t have free time and bandwidth”, while in engineering it means “storage or processing capacity”.",
      "meaningExamples": [
        "Do you have bandwidth/capacity next week?",
        "the capacity of the hard drive"
      ],
      "senses": [
        "available bandwidth / time of an employee",
        "technical capacity, storage volume"
      ]
    },
    "pro-office-prioritaet": {
      "note": "Always feminine: die Priorität. “Prioritäten setzen” — to set priorities. Verb: “priorisieren” — to prioritize.",
      "usageNote": "“Hohe Priorität” / “Prioritäten setzen”. In tickets and chats shortened to “Prio”: “Das hat Prio 1”.",
      "why": {
        "text": "Composition: Latin stem prior- + suffix -ität (always die).\nOrigin: from Medieval Latin priōritās (“precedence, rank of first”, from Lat. prior “former, first of two”).\nTransparency: international term; note the feminine article die.",
        "evidence": "From Med. Lat. priōritās (< Lat. prior “first, earlier”)."
      }
    },
    "pro-office-schnittstelle": {
      "note": "A very frequent word both in job ads (“Schnittstellenfunktion” — cross-functional liaison role) and in technical documentation.",
      "usageNote": "In IT — both a software interface (API) and the point of contact between two teams (“die Schnittstelle zwischen SOC und IT-Betrieb”).",
      "why": {
        "text": "Composition: der Schnitt (“cut, intersection”, from schneiden) + die Stelle (“place, point”).\nOrigin: 20th-century German technical term coined as the equivalent of English interface — “the point of intersection between two systems”.\nTransparency: figurative, the image of a point of intersection is very clear.",
        "evidence": "Technical compound Schnitt + Stelle (20th c.) as the German equivalent of Eng. interface."
      },
      "meaningExplanation": "Schnittstelle denotes both a software interface (API) in IT and an organizational “point of intersection” / liaison between two company departments.",
      "meaningExamples": [
        "to document an API interface",
        "to work at the interface between two teams"
      ],
      "senses": [
        "software interface (API)",
        "link / point of contact between departments"
      ],
      "parts": [
        "der Schnitt — cut, intersection (from schneiden)",
        "die Stelle — place, spot"
      ]
    },
    "pro-office-urlaubsantrag": {
      "note": "Umlaut in the plural: die Urlaubsanträge. “Genehmigen” — to approve (officially), “ablehnen” — to reject. Verb phrase: “Urlaub beantragen” — to apply for leave.",
      "usageNote": "Always in German: “einen Urlaubsantrag stellen / einreichen / genehmigen”.",
      "why": {
        "text": "Composition: der Urlaub (“holiday, leave”) + -s- + der Antrag (“application, request”).\nOrigin: der Urlaub goes back to Old High German urloub (“permission to leave”, related to erlauben “to allow”); der Antrag comes from antragen (“to submit a proposal or request”).\nTransparency: completely transparent business compound.",
        "evidence": "Urlaub (< OHG urloub “permission”, related to erlauben) + Fugen-s + Antrag."
      },
      "parts": [
        "der Urlaub — leave, holiday",
        "linking element (Fugen-s)",
        "der Antrag — application, request"
      ]
    },
    "pro-office-protokoll": {
      "note": "“Protokoll führen” — to take minutes. “Zu Protokoll geben” — to state for the record.",
      "usageNote": "In the office — “Protokoll schreiben / führen” (to take meeting minutes). In IT — both a network protocol (HTTPS) and the official word for event logs.",
      "why": {
        "text": "Composition: borrowed noun (pl. die Protokolle).\nOrigin: via Medieval Latin from Greek prōtókollon (“first glued sheet of a papyrus roll bearing the table of contents and date”), whence “official record”, and later also “set of rules for data exchange”.\nTransparency: international term.",
        "evidence": "From Med. Lat. prōtocollum < Gk. prōtókollon (“first sheet of a scroll”)."
      },
      "meaningExplanation": "das Protokoll combines three distinct meanings: a record of meeting minutes, a network data-exchange protocol (HTTP/TLS), and an event log.",
      "meaningExamples": [
        "to take minutes in a meeting",
        "a secure network protocol"
      ],
      "senses": [
        "meeting minutes",
        "network protocol (IT)"
      ]
    },
    "pro-office-zeitnah": {
      "note": "If you need a concrete date, it is best to ask (“Was meinen Sie genau mit „zeitnah“? Reicht Freitag?”). “Kurzfristig” — at short notice / on short timescales.",
      "usageNote": "Classic German office word (and a favourite subject of office jokes: “zeitnah” can mean anything from “in an hour” to “in two weeks”).",
      "why": {
        "text": "Composition: die Zeit (“time”) + adjective nah (“near, close”).\nOrigin: modern business compound of the second half of the 20th century — literally “close in time” (without committing to an exact date).\nTransparency: completely transparent compound.",
        "evidence": "Modern business compound Zeit + nah (“in the near term, promptly”)."
      },
      "parts": [
        "die Zeit — time",
        "near, close"
      ]
    },
    "pro-office-abstimmung": {
      "note": "“In Abstimmung mit …” — in coordination/consultation with … Very frequent in email subject lines and calendar invites.",
      "usageNote": "“Eine kurze Abstimmung” — a quick 15-minute sync/call. Also means a “vote”.",
      "why": {
        "text": "Composition: from the verb abstimmen (ab- + stimmen) + suffix -ung (always die).\nOrigin: inherits both meanings of the verb abstimmen — “voting” and “bringing actions into alignment”.\nTransparency: transparent from the verb abstimmen.",
        "evidence": "Deverbal noun from abstimmen + -ung."
      },
      "meaningExplanation": "die Abstimmung denotes both workplace coordination (a quick sync meeting) and a formal voting procedure.",
      "meaningExamples": [
        "a quick sync via Teams",
        "a secret ballot / vote"
      ],
      "senses": [
        "coordination, quick sync",
        "vote, ballot"
      ],
      "parts": [
        "separable prefix",
        "stem of stimmen — to coordinate, vote",
        "verb → noun, always die"
      ]
    },
    "pro-office-auslastung": {
      "note": "Adjective/participle: “Ich bin diese Woche voll ausgelastet” — I’m fully booked / at full capacity this week.",
      "usageNote": "Used both for CPU/hardware (“CPU-Auslastung bei 95 %”) and for staff workload (“Hohe Auslastung im Team”).",
      "why": {
        "text": "Composition: from the verb auslasten (aus- “fully” + die Last “load”) + -ung.\nOrigin: 20th-century economic and technical formation — the degree of utilization of available capacity (of equipment or personnel).\nTransparency: completely transparent formation.",
        "evidence": "From auslasten (aus- + Last “load”) + -ung."
      },
      "meaningExplanation": "die Auslastung is used equally in IT for hardware load (CPU, memory) and in the office for how heavily staff are loaded with tasks.",
      "meaningExamples": [
        "to monitor server load / utilization",
        "full workload in the team"
      ],
      "senses": [
        "server / system load (IT)",
        "team workload / capacity utilization"
      ],
      "parts": [
        "completely, to the limit",
        "die Last — load, burden",
        "verb → noun, always die"
      ]
    },
    "it-dev-deployen": {
      "note": "English verbs take German endings: ich deploye, er deployt, hat deployt. Likewise: “committen” (hat committet), “pushen” (hat gepusht), “mergen” (hat gemergt).",
      "usageNote": "Developers say “deployen” and “das Deployment”. In formal documents — “bereitstellen” or “ausrollen” (to roll out); “live gehen” — to go live.",
      "why": {
        "text": "Composition: English verb deploy + German infinitive ending -en.\nOrigin: English deploy was borrowed from French déployer (“to unfold, spread out” — originally of troops, from Latin displicāre “to unfold”). In IT it became established for rolling out applications.\nTransparency: borrowed IT term.",
        "evidence": "Eng. deploy < Fr. déployer < Lat. displicāre “to unfold”; adapted into German with the suffix -en."
      }
    },
    "it-dev-anforderung": {
      "note": "“Anforderungen erfüllen” — to meet requirements; “Anforderungen an + acc.”. Verb “anfordern” — to request (“Zugriff anfordern”). “Die Herausforderung” — challenge; “überfordert sein” — to be overwhelmed / out of one’s depth.",
      "usageNote": "“Anforderungen” is the standard word (also “die Anforderungsanalyse”). “Requirements” is heard in international teams.",
      "why": {
        "text": "Composition: from the verb anfordern (an- + fordern) + suffix -ung.\nOrigin: the verb fordern (“to demand”) is historically related to vorder (“front, fore”) — “to call forward, demand”. The prefixed verb anfordern (“to request, demand”) yielded the deverbal noun Anforderung.\nTransparency: transparent — the root fordern is immediately recognisable.",
        "evidence": "Deverbal noun from anfordern (an- + fordern “to demand”, historically related to vorder)."
      },
      "parts": [
        "to, towards",
        "stem of fordern — to demand",
        "verb → noun, always die"
      ]
    },
    "it-dev-commit": {
      "note": "Perfekt: “hat committet” (double t). “Der Build ist rot / kaputt” — the build is failing / broken.",
      "usageNote": "Git vocabulary stays English: der Commit, der Branch, der Merge-Request / Pull-Request, committen, pushen, mergen.",
      "why": {
        "text": "Composition: unanalysable borrowing from English.\nOrigin: English commit goes back to Latin committere (“to join together; entrust, commit”). In databases and version control systems commit became established for permanently recording a set of changes.\nTransparency: unanalysable IT anglicism.",
        "evidence": "Eng. commit < Lat. committere “to entrust”; IT term for recording transactions and version snapshots."
      }
    },
    "it-infra-server": {
      "note": "“Der Server ist down / ausgefallen / nicht erreichbar” — the server is down / unreachable. “Das Rechenzentrum” — data centre. “Umziehen” — to migrate (literally: to move house).",
      "usageNote": "Always “der Server”, plural “die Server” (without -s). The verbs are German: hochfahren (boot up), herunterfahren (shut down), neu starten (restart).",
      "why": {
        "text": "Composition: borrowing from English (to serve + -er).\nOrigin: English server literally means “one that serves” (from to serve < Lat. servīre “to serve”). In client–server architecture it was applied to the host serving client requests.\nTransparency: transparent via English serve.",
        "evidence": "Eng. server (< to serve + -er); in computing since the late 20th c., borrowed into German without change of stem."
      }
    },
    "it-infra-ausfall": {
      "note": "Verb “ausfallen” (fiel aus, IST ausgefallen) — Perfekt with sein. In everyday life: “Der Kurs fällt aus” — the class is cancelled. “Die Störung” — disruption/fault; “Wartungsarbeiten” — scheduled maintenance.",
      "usageNote": "Users and management say “Ausfall” or “Störung”. Operations teams also say “Outage”, “Downtime”.",
      "why": {
        "text": "Composition: from the verb ausfallen (aus- “out” + fallen “to fall”).\nOrigin: ausfallen literally means “to fall out”; hence the figurative meanings “to drop out of service / off the schedule” (of equipment, classes, staff) and the noun der Ausfall (“failure, outage, cancellation, absence”).\nTransparency: figurative, the metaphor of “falling out of operation” is easily read.",
        "evidence": "Deverbal noun from ausfallen (“to fall out” → “to fail, be cancelled”); technical sense “equipment failure”."
      },
      "meaningExplanation": "der Ausfall denotes a technical failure/outage of a server, as well as the cancellation of an event or the absence of an employee (e.g. due to illness).",
      "meaningExamples": [
        "a database outage/failure",
        "staff absence due to illness"
      ],
      "parts": [
        "out",
        "stem of fallen — to fall"
      ]
    },
    "it-infra-netzwerk": {
      "note": "Neuter because of “das Werk”. “Sich vernetzen” — to network professionally (as on LinkedIn). “Das Netzteil” — power supply unit / adapter.",
      "usageNote": "“Das Netzwerk” or simply “das Netz” (“im Firmennetz”). Wi-Fi is called “das WLAN” (pronounced “VEH-lahn”), not “Wifi”.",
      "why": {
        "text": "Composition: das Netz (“net”) + das Werk (“work, structure, mesh”).\nOrigin: the word Netzwerk existed in German before computers in the sense “net-like mesh, lattice” (cf. Fachwerk, Mauerwerk). The modern meanings “computer network” and “network of contacts” developed in the 20th century under strong influence from English network.\nTransparency: transparent compound.",
        "evidence": "Originally “mesh, netting” (Netz + Werk); modern senses “computer/social network” established under the influence of Eng. network."
      },
      "parts": [
        "das Netz — net",
        "das Werk — structure, mechanism, mesh"
      ]
    },
    "ch-opinion-meiner-meinung-nach": {
      "note": "The conjugated verb comes IMMEDIATELY after “nach” (in second position): “Meiner Meinung nach ist das zu teuer”, NOT “Meiner Meinung nach das ist …”. English word order makes this one of the most common mistakes."
    },
    "ch-opinion-ich-bin-der-meinung": {
      "note": "After “dass” the conjugated verb goes to the very end. Slightly more formal than “Ich finde” — great for discussions and the speaking part of the B1 exam."
    },
    "ch-agree-da-hast-du-recht": {
      "note": "“Recht haben” (recht spelled with a lowercase r). Agreeing first and then adding “aber” is the polite German way to partially disagree.",
      "meaningExplanation": "Uses informal “du” and a relaxed conversational phrasing — ideal for colleagues you are on “du” terms with and friends, rather than formal correspondence.",
      "meaningExamples": [
        "You’re right there, but we still need to test."
      ]
    },
    "ch-agree-anderer-meinung": {
      "note": "Genitive without a preposition: “anderer Meinung sein”. Clear and direct, yet not rude. For a softer tone: “Das sehe ich ein bisschen anders”."
    },
    "ch-clarify-erklaeren": {
      "note": "Konjunktiv II “könnten” makes the request polite. The object [X] sits in the middle, while the infinitive “erklären” goes to the end."
    },
    "ch-clarify-was-meinen-sie": {
      "note": "“Meinen mit” — to mean by. Do not use “bedeuten” with people as the subject: “Was bedeutest du?” is wrong; for people it is always “Was meinst du?” / “Was meinen Sie?”."
    },
    "ch-clarify-richtig-verstanden": {
      "note": "Great for double-checking details at the Bürgeramt or in a meeting. After “dass” the verb goes to the end."
    },
    "ch-complain-beschweren": {
      "note": "“Sich über etw. (acc.) bei jdm. (dat.) beschweren” — to complain about something to someone. “Reklamieren” is used specifically for claiming a refund/replacement for defective goods."
    },
    "ch-problem-problem-mit": {
      "note": "“Mit” + dative: mit meinem Laptop, mit meiner Rechnung. Then explain the details in the next sentence — this is exactly how calls to German support start."
    },
    "ch-problem-funktioniert-nicht-mehr": {
      "note": "German uses the present tense with “seit” for an state that started in the past and still continues (unlike English “hasn’t worked since”): do not use the Perfekt here. “Seit” + dative: seit dem Update, seit einer Woche."
    },
    "ch-problem-seit-beschwerden": {
      "note": "Standard opening at the doctor’s. Present tense with “seit” + dative: seit drei Tagen (dative plural takes -n), seit einer Woche."
    },
    "ch-phone-krankmelden": {
      "note": "You must report in sick on the very first morning. By law a doctor’s note (Krankschreibung, AU) is required from the 4th calendar day, though an employer may require it from day 1. Today doctors submit it electronically (eAU)."
    },
    "ch-appointments-termin-bei": {
      "note": "“Termin bei” + person/doctor (dative), “Termin für” + purpose. Remember: der Termin means “appointment / date / deadline” (a scientific term is der Fachbegriff)."
    },
    "ch-appointments-verschieben": {
      "note": "“Verschieben” — to postpone/reschedule; “absagen” — to cancel. “Mir ist etwas dazwischengekommen” — something has come up. Very useful and polite."
    },
    "ch-appointments-passt-es": {
      "note": "“Passen” + dative: Passt es Ihnen / dir? Use “am” with days of the week/dates and “um” with clock times."
    },
    "ch-phone-verbinden": {
      "note": "“Mit” + dative: mit der Buchhaltung, mit Herrn Krüger (note the n-declension: Herr → Herrn in the dative!)."
    },
    "ch-phone-wegen": {
      "note": "“Wegen” takes the genitive in writing (wegen des Termins); in spoken German the dative is also common (wegen dem Termin). “Anrufen” is separable: “an” goes to the end of the clause."
    },
    "ch-email-sehr-geehrte": {
      "note": "After the comma, continue on the next line with a LOWERCASE letter: “ich schreibe Ihnen …”. Adjective endings: geehrte Frau, geehrter Herr. Close with “Mit freundlichen Grüßen” (no comma after it)."
    },
    "ch-email-freue-mich-auf": {
      "note": "“Sich freuen auf + acc.” — to look forward to something in the future; “sich freuen über + acc.” — to be happy about something present or past. A very common mix-up."
    },
    "ch-smalltalk-wochenende": {
      "note": "The classic Monday morning question in every German office. A short answer and a return question are enough: “Ganz entspannt, und deins?”",
      "meaningExplanation": "Informal friendly small talk using “du” (on Monday morning in the office kitchen or in chat with close colleagues; with “Sie” it is “Wie war Ihr Wochenende?”).",
      "meaningExamples": [
        "Hey, how was your weekend?"
      ]
    },
    "ch-standup-gestern-heute": {
      "note": "“An etw. (dat.) arbeiten”, “sich um etw. (acc.) kümmern”. “Ich hänge an [X]” — I’m stuck on X (colloquial)."
    },
    "ch-bug-wenn-ich": {
      "note": "The ideal three-part bug report: action → actual result → expected result. After the subordinate clause with wenn, the main clause starts immediately with the conjugated verb: “…, passiert nichts”."
    },
    "ch-help-komme-nicht-weiter": {
      "note": "“Nicht weiterkommen bei + dat.” — to be stuck on. “Sich mit etw. auskennen” — to know one’s way around something.",
      "meaningExplanation": "Natural informal request for help using “du”; the phrase “nicht weiterkommen” (lit. “not get any further”) sounds very idiomatic in team chat.",
      "meaningExamples": [
        "Got a minute? I’m stuck on this error."
      ]
    },
    "ch-meeting-sehe-das-anders": {
      "note": "“Ein bisschen” softens the disagreement — very idiomatic in German office culture. After “weil” the verb goes to the end."
    },
    "ch-meeting-waere-es-nicht-besser": {
      "note": "Framing a suggestion as a question keeps it from sounding like criticism. Uses Konjunktiv II (wäre, würden). In spoken German the if-clause often uses the present indicative instead: “…, wenn das Team selbst entscheidet?”"
    },
    "exp-idiom-uhren-anders": {
      "note": "A very popular, gently ironic phrasing when explaining the quirks of another company, department or region. The verb ticken (to tick) is in the present tense: die Uhren ticken.",
      "why": {
        "text": "Composition: ticken (“to tick”) + die Uhren (“clocks”) + anders (“differently”).\nOrigin: the image of clocks running differently became established in modern German as a metaphor for a distinct way and pace of life (often echoing the 20th-century political slogan “In Bayern gehen die Uhren anders”).\nTransparency: figurative — the image of “clocks ticking differently” is intuitively clear.",
        "evidence": "Figurative expression “die Uhren gehen/ticken anders” — “a different rhythm, different rules”."
      },
      "meaningExplanation": "Literally “the clocks tick differently here” — a metaphor for a different internal pace, culture and set of rules in a company, region or country.",
      "meaningExamples": [
        "In the public sector, things work at a different pace / by different rules."
      ]
    },
    "exp-idiom-bahnhof": {
      "note": "Sounds lively and friendly among colleagues when asking someone to translate jargon into plain language. Not used in formal correspondence.",
      "why": {
        "text": "Composition: verstehen (“to understand”) + nur (“only”) + der Bahnhof (“train station”).\nOrigin: the idiom spread in German in the 1920s; a popular explanation links it to weary First World War soldiers who only wanted to hear one word — “Bahnhof” (the way home) — though the exact origin is not conclusively documented.\nTransparency: opaque idiom — best learned as a whole.",
        "evidence": "Attested since the 1920s; the link to WWI soldiers’ slang is the most widespread explanation."
      },
      "meaningExplanation": "Literally “I only understand [the word] train station” — a colloquial idiom meaning you cannot make head or tail of a complicated or jargon-heavy explanation.",
      "meaningExamples": [
        "With this legalese, it’s all Greek to me."
      ]
    },
    "exp-idiom-nicht-mein-bier": {
      "note": "A related colloquial office variant is “Das ist nicht meine Baustelle” (“that’s not my building site / not my area”).",
      "why": {
        "text": "Composition: das ist nicht mein Bier (lit. “that’s not my beer”).\nOrigin: 20th-century colloquial expression going back to an everyday tavern situation (“someone else’s beer is none of my concern”).\nTransparency: vivid colloquial idiom.",
        "evidence": "20th-c. colloquial expression: “someone else’s beer” → “someone else’s business, not my concern”."
      },
      "meaningExplanation": "Highly colloquial idiom (lit. “that’s not my beer”): used only among close colleagues or friends on “du” terms. With managers and clients, use neutral “Dafür bin ich nicht zuständig”.",
      "meaningExamples": [
        "Whether he arrives late is none of my business."
      ]
    },
    "exp-idiom-nagel-kopf": {
      "note": "Suitable both for office meetings and everyday conversation. Strong verb treffen: trifft, traf, hat getroffen.",
      "why": {
        "text": "Composition: der Nagel (“nail”) + auf den Kopf (“on the head”) + treffen (“to hit”).\nOrigin: craft metaphor attested in German since the 16th century (striking the head of the nail squarely rather than missing and hitting one’s fingers).\nTransparency: figurative — the image is completely clear and matches English.",
        "evidence": "Attested since the 16th c.; metaphor of striking the head of a nail squarely."
      },
      "meaningExplanation": "Literally “to hit the nail on the head” — an accurate hammer blow transferred to a spot-on remark or diagnosis of a problem.",
      "meaningExamples": [
        "With her question she hit the nail on the head."
      ]
    },
    "exp-idiom-kaltes-wasser": {
      "note": "A very frequent idiom when talking about a new job, onboarding or moving abroad. The verb springen takes sein: ist gesprungen.",
      "why": {
        "text": "Composition: in das (ins) kalte Wasser (“into the cold water”) + springen (“to jump”).\nOrigin: transparent metaphor of plunging straight into cold water without easing in step by step — diving straight into a new task.\nTransparency: vivid and easy to read.",
        "evidence": "Fixed figurative phrase: plunging into cold water → starting an unfamiliar task without preparation."
      },
      "meaningExplanation": "Literally “to jump into cold water” — the image of an abrupt start in an unfamiliar task or role where you learn by doing.",
      "meaningExamples": [
        "In the new project he was thrown straight in at the deep end."
      ]
    },
    "exp-idiom-daumen-druecken": {
      "note": "Used with the dative of the person (dir, Ihnen, dem Team). The noun der Daumen means “thumb”.",
      "why": {
        "text": "Composition: der Daumen (“thumb”) + drücken (“to press, squeeze”).\nOrigin: the gesture of clasping one’s thumb inside one’s fist has been known in European tradition since antiquity (mentioned by Pliny the Elder as a sign of goodwill and protection) and became established in German as the gesture for wishing someone good luck.\nTransparency: gesture-based idiom.",
        "evidence": "Traditional gesture of “holding one’s thumb inside one’s fist” to wish someone luck."
      },
      "meaningExplanation": "Literally “to press/hold one’s thumbs” (inside one’s fists) — the standard German equivalent of “keeping one’s fingers crossed” before an exam, interview or release.",
      "meaningExamples": [
        "I’ll keep my fingers tightly crossed for you tomorrow."
      ]
    },
    "exp-idiom-schlauch-stehen": {
      "note": "Great for self-deprecating humour at work (natural when said about yourself; about someone else only as a friendly joke among close colleagues).",
      "why": {
        "text": "Composition: auf dem Schlauch (“on the hose”) + stehen (“to stand”).\nOrigin: 20th-century colloquial metaphor — by standing on a garden hose, you block the flow of water yourself, i.e. you temporarily block your own train of thought.\nTransparency: vivid and clear image.",
        "evidence": "20th-c. colloquial idiom: cutting off the flow of water in a hose → “having a mental block”."
      },
      "meaningExplanation": "Literally “to stand on the hose” — if you step on a garden hose, the water stops flowing; in the same way your train of thought gets temporarily blocked.",
      "meaningExamples": [
        "Give me a quick hint, I’m having a mental block."
      ]
    },
    "exp-idiom-tellerrand": {
      "note": "Very frequently heard in job interviews, job descriptions and team retrospectives. The verb schauen can also be replaced by blicken or gucken.",
      "why": {
        "text": "Composition: der Tellerrand (“rim of a plate”: Teller + Rand) + über … schauen (“to look beyond/over”).\nOrigin: modern figurative idiom of the second half of the 20th century: a horizon limited to the rim of one’s own soup plate is contrasted with a broader view.\nTransparency: completely transparent metaphor.",
        "evidence": "Modern metaphor contrasting a narrow vs broad horizon (the rim of one’s own plate)."
      },
      "meaningExplanation": "Literally “to look beyond the rim of one’s plate” — the image of someone who looks beyond what sits directly in front of them and sees the bigger picture.",
      "meaningExamples": [
        "We need to think outside the box / look beyond our own silo."
      ]
    },
    "exp-idiom-eis-brechen": {
      "note": "Matches English “to break the ice”. Strong verb brechen: bricht, brach, hat gebrochen.",
      "why": {
        "text": "Composition: das Eis (“ice”) + brechen (“to break”).\nOrigin: pan-European metaphor going back to breaking a path through ice for ships (attested already in Early New High German and humanist Latin — glaciem scindere).\nTransparency: figurative, identical to the English metaphor.",
        "evidence": "Pan-European metaphor for overcoming an “icy” social barrier (since the 16th–17th c.)."
      },
      "meaningExplanation": "Used figuratively rather than about frozen water — to describe overcoming initial stiffness or awkwardness in conversation.",
      "meaningExamples": [
        "The ice is broken (the initial tension has disappeared)."
      ]
    },
    "exp-idiom-vier-augen": {
      "note": "Do not confuse with “das Vier-Augen-Prinzip” in auditing and IT security (the four-eyes principle / two-person rule, where a critical change must be approved by a second person).",
      "why": {
        "text": "Composition: unter vier Augen (“under four eyes”).\nOrigin: attested since the 18th century — four eyes belong to exactly two people talking, with no third party present.\nTransparency: figurative arithmetic “two pairs of eyes = just the two of us”.",
        "evidence": "Attested since the 18th c.: “four eyes” = two participants in a conversation with no witnesses."
      },
      "meaningExplanation": "Literally “under four eyes” (two speakers = four eyes, with no outside witnesses). Careful: in IT security “das Vier-Augen-Prinzip” (four-eyes principle) means something different — verification/approval by a second person!",
      "meaningExamples": [
        "I’d like to speak with you in private (one-to-one)."
      ]
    },
    "exp-idiom-nerven-gehen": {
      "note": "Takes the dative of the person (mir, ihm, dem Team) + auf die Nerven (acc.). Forms its Perfekt with sein: ist auf die Nerven gegangen.",
      "why": {
        "text": "Composition: auf die Nerven (“on the nerves”) + gehen (“to go, walk”).\nOrigin: the phrase became established in the 19th–20th centuries when Nerv entered everyday usage for mental strain (parallel to English “to get on someone’s nerves”).\nTransparency: figurative idiom, immediately clear to English speakers.",
        "evidence": "19th–20th-c. phrase meaning “to irritate strongly, fray someone’s nerves”."
      },
      "meaningExplanation": "Literally “to walk on someone’s nerves” — a colloquial idiom for strong irritation; in a formal business context prefer “Das ist störend / lästig”.",
      "meaningExamples": [
        "The noise is getting on my nerves."
      ]
    },
    "exp-idiom-selben-boot": {
      "note": "Exact match with English “to be in the same boat”. Strong verb sitzen: saß, hat gesessen.",
      "why": {
        "text": "Composition: in dem (im) selben Boot (“in the same boat”) + sitzen (“to sit”).\nOrigin: international nautical metaphor going back to the classical image of fellow passengers on the same vessel (cf. Cicero’s “in eadem navi esse”).\nTransparency: completely transparent metaphor.",
        "evidence": "Pan-European metaphor of the shared fate of passengers on a single ship (cf. Lat. in eadem navi)."
      },
      "meaningExplanation": "Literally “to sit in the same boat” — a metaphor for shared fate and mutual dependence, great for defusing friction between departments.",
      "meaningExamples": [
        "With this release we’re all in the same boat."
      ]
    },
    "exp-idiom-eine-karte": {
      "note": "A great example of the figurative sense of setzen (“to place a bet / stake”).",
      "why": {
        "text": "Composition: alles (“everything”) + auf eine Karte (“on one card”) + setzen (“to bet, stake”).\nOrigin: expression from gambling card games (known in German since the 18th century, parallel to French “mettre tout sur une carte”).\nTransparency: transparent gaming metaphor.",
        "evidence": "From the language of card games (18th c.): staking one’s entire sum on a single card."
      },
      "meaningExplanation": "An image from card gambling (staking everything on a single card), transferred to risky all-or-nothing decisions in careers, business and system architecture.",
      "meaningExamples": [
        "We aren’t putting all our eggs in one basket (staking everything on one option)."
      ]
    },
    "exp-idiom-gruenes-licht": {
      "note": "Very common in work emails and meetings. Used with geben (to give) and bekommen / erhalten (to get/receive).",
      "why": {
        "text": "Composition: grünes Licht (“green light”) + geben (“to give”).\nOrigin: 20th-century technical metaphor from railway and traffic signalling (green signal = track/road clear), transferred to permission to start a project.\nTransparency: completely transparent image.",
        "evidence": "20th-c. traffic/railway signal metaphor transferred to approving an action."
      },
      "meaningExplanation": "Metaphor of a green traffic or railway signal — in the office and IT it is the standard phrase for official approval to launch a project or change.",
      "meaningExamples": [
        "Management has given the green light."
      ]
    },
    "exp-idiom-kirche-im-dorf": {
      "note": "Sounds genuinely idiomatic — Germans love using this phrase at work when someone proposes overly drastic measures.",
      "why": {
        "text": "Composition: die Kirche (“church”) + im Dorf (“in the village”) + lassen (“to leave”).\nOrigin: figuratively describes the sensible order of things — the village church belongs right where it stands in the village and shouldn’t be carried off elsewhere; attested since the 19th century (originally in southern German dialects) in the sense “not to go too far, not to exaggerate”.\nTransparency: culturally rooted figurative idiom.",
        "evidence": "Attested since the 19th c. in the sense “to keep a sense of proportion, not exaggerate”."
      },
      "meaningExplanation": "Literally “to leave the church in the village” — a very German idiom urging people not to overreact or blow things out of proportion.",
      "meaningExamples": [
        "Let’s not get carried away, it’s not that bad."
      ]
    },
    "exp-day-kommt-drauf-an": {
      "note": "Prepositional government: ankommen auf + acc. (“Es kommt auf das Risiko an”). With a subordinate clause: “Das kommt darauf an, ob …”.",
      "why": {
        "text": "Composition: impersonal es kommt auf etw. an (“it depends on something”, from ankommen) + pronominal adverb darauf (“on it/that”).\nOrigin: the phrase es kommt darauf an became established in the 17th–18th centuries in the sense “the matter hinges on this / is decided by this”.\nTransparency: fixed conversational-neutral construction.",
        "evidence": "Impersonal es kommt auf etw. an (“to depend on, hinge on”) + darauf."
      },
      "meaningExplanation": "One of the most frequent responses in spoken German (just like English “It depends”). In conversation darauf is almost always shortened to drauf.",
      "meaningExamples": [
        "Depends on what we prioritize."
      ]
    },
    "exp-day-mal-sehen": {
      "note": "Elliptical infinitive phrase (with “wir werden” omitted). In formal written business German prefer “Wir werden sehen” or “Lassen Sie uns abwarten”.",
      "meaningExplanation": "Short conversational formula with the particle mal (from einmal), softening a non-committal answer. In southern Germany “Schauen wir mal” is even more common.",
      "meaningExamples": [
        "Let’s see what the weather is like tomorrow."
      ]
    },
    "exp-day-kriegen-wir-hin": {
      "note": "The verb hinkriegen is separable: “Wir kriegen das hin”, “Ich habe es hingekriegt”.",
      "meaningExplanation": "Encouraging colloquial phrase with the verb hinkriegen (“to manage to do, sort out”). Sounds warm and confident in the office; in formal writing replace with “Das schaffen wir / bekommen wir hin”.",
      "meaningExamples": [
        "We’ll definitely get that sorted by Friday."
      ]
    },
    "exp-day-macht-nichts": {
      "note": "Related polite question: “Macht es dir etwas aus, wenn …?” — “Do you mind if …?”.",
      "meaningExplanation": "Short for “Das macht nichts aus” (“that doesn’t matter / makes no difference”) — the standard friendly reply to an apology.",
      "meaningExamples": [
        "No problem, it can happen to anyone."
      ]
    },
    "exp-day-klingt-gut": {
      "note": "Strong verb klingen (to sound): klingt, klang, hat geklungen. In team chats often simply “Klingt gut 👍”."
    },
    "exp-day-geht-klar": {
      "note": "A slightly more businesslike equivalent is “Geht in Ordnung” (“all right, noted”).",
      "meaningExplanation": "Quick colloquial confirmation in team chat or speech (shorter and livelier than formal “Einverstanden”).",
      "meaningExamples": [
        "All right, I’ll take care of it."
      ]
    },
    "exp-day-ehrlich-gesagt": {
      "note": "When “Ehrlich gesagt” stands at the start of a sentence without a colon pause, the conjugated verb follows immediately (inversion): “Ehrlich gesagt habe ich keine Zeit”."
    },
    "exp-day-so-oder-so": {
      "note": "A handy connector to wrap up a discussion and move on to action."
    },
    "exp-day-lohnt-sich": {
      "note": "Often followed by a zu-infinitive clause: “Es lohnt sich, … zu + inf.”. Used with a noun subject too: “Der Kurs lohnt sich für mich”."
    },
    "exp-day-hauptsache": {
      "note": "In formal writing prefer the full construction with dass: “Die Hauptsache ist, dass wir pünktlich liefern”.",
      "meaningExplanation": "In spoken German, “Hauptsache,” is often followed by main-clause word order (verb in second position) without “dass”: “Hauptsache, es funktioniert”.",
      "meaningExamples": [
        "The main thing is that we make the deadline."
      ]
    },
    "exp-day-macht-sinn": {
      "note": "In everyday speech and in IT “Das macht Sinn” is heard everywhere. In formal written reports, style purists prefer “Das ergibt Sinn” or “Das ist sinnvoll”."
    },
    "exp-day-nur-zur-info": {
      "note": "The ideal short lead-in for Slack/Teams messages when no immediate action is required from your colleague."
    },
    "exp-day-gleich-wieder-da": {
      "note": "In chat “Ich” is often dropped: “Bin gleich wieder da” (the German equivalent of “brb”)."
    },
    "exp-day-kein-ding": {
      "note": "The single word “Gerne!” (“gladly / my pleasure!”) is the most versatile and polite German reply to “Danke”.",
      "meaningExplanation": "“Kein Ding” and “Kein Thema” are informal friendly replies to thanks or a request (on “du” terms); with strangers and management use “Gerne” or “Kein Problem”.",
      "meaningExamples": [
        "Thanks for your help! — No problem!"
      ]
    },
    "exp-day-schauen-wir-mal": {
      "note": "The modal particle “mal” makes a suggestion soft and unpushy — Germans use it in almost every spoken request.",
      "meaningExplanation": "Lively collaborative phrase for starting to look into an issue together (with “du” — Lass uns…, with “Sie” — Lassen Sie uns…).",
      "meaningExamples": [
        "Let’s take a quick look at the logs."
      ]
    }
  });
})();
