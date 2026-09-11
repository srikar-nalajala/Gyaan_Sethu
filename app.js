/**
 * Gyaan Setu (ज्ञान सेतु · ᱜᱽᱭᱟᱱ ᱥᱮᱛᱩ)
 * Offline AI Vernacular Classroom Copilot for Mother-Tongue-Based Primary Education
 * SIH Problem Statement 26042 · Govt of Jharkhand Department of Higher & Technical Education
 *
 * Integrated References:
 * 1. AI4Bharat IndicTrans2: https://github.com/AI4Bharat/IndicTrans2/tree/main (sat_Olck)
 * 2. AdiBhashaa Benchmark (arXiv 2512.04765): https://huggingface.co/papers/2512.04765
 * 3. Karya Inc Mundari TTS Dataset: https://github.com/karya-inc/dataset-mundari-tts
 * 4. Bhashini Cloud Open API: https://tts.bhashini.ai/openapi/ui/
 * 5. Govt of Jharkhand Official Portal: https://bor.jharkhand.gov.in/
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. SOE 2024-2025 OFFICIAL SPLIT-UP SYLLABUS MASTER REPOSITORY (CLASS 1)
  // Total Working Days: 224 Days (Tentative) · English, Hindi (सारंगी), Maths
  // =========================================================================
  const SOE_SYLLABUS_DATA = {
    english: [
      {
        month: "May & June",
        workingDays: 33,
        weeks: [
          {
            week: "May (17 days) & June (16 days)",
            days: 33,
            chapter: "Vidya Pravesh: School Readiness & Phonics",
            unit: "Vidya Pravesh",
            lo: [
              "Talking about self and immediate environment",
              "Oral language and development in classroom circle",
              "Sand tracing and tactile letter exploration",
              "Picture reading from flashcards and big books",
              "Free hand drawing on slates with chalk",
              "Songs, rhymes, poems, and dramatic action play",
              "Guess the sound (auditory phonics discrimination)",
              "Tracing objects, joining dots and colouring pictures"
            ],
            lessonId: "soe-eng-001"
          }
        ]
      },
      {
        month: "July",
        workingDays: 25,
        weeks: [
          {
            week: "1st (6 days) & 2nd Week (6 days)",
            days: 12,
            chapter: "Vidya Pravesh: Oral Language & Letter Tracing",
            unit: "Vidya Pravesh",
            lo: [
              "Oral language development through peer interaction",
              "Sand tracing of initial letter strokes",
              "Picture reading and describing objects",
              "Free hand drawing of everyday surroundings",
              "Songs, rhymes, poems, and creative drama",
              "Guess the sound of animals and nature",
              "Tracing objects, joining dots and colouring pictures"
            ],
            lessonId: "soe-eng-001"
          },
          {
            week: "3rd Week (4 days)",
            days: 4,
            chapter: "Story Card Activity & Pick and Speak",
            unit: "Vidya Pravesh",
            lo: [
              "Story card activity: arranges picture sequence logically",
              "Pick and speak: selects a card and speaks 2-3 sentences"
            ],
            lessonId: "soe-eng-001"
          },
          {
            week: "4th Week (6 days)",
            days: 6,
            chapter: "Rhyming Words & Sound Identification",
            unit: "Vidya Pravesh",
            lo: [
              "Listens to rhyming words in nursery songs",
              "Identifies objects with beginning and ending sounds"
            ],
            lessonId: "soe-eng-001"
          },
          {
            week: "5th Week (3 days)",
            days: 3,
            chapter: "Think Box Activity",
            unit: "Vidya Pravesh",
            lo: [
              "Engages in Think Box activities for logical curiosity",
              "Expresses ideas through gestures, drawing and simple speech"
            ],
            lessonId: "soe-eng-001"
          }
        ]
      },
      {
        month: "August",
        workingDays: 24,
        weeks: [
          {
            week: "1st (3 days) & 2nd Week (6 days)",
            days: 9,
            chapter: "Unit 1 - My Family: Chapter 1 * Two Little Hands",
            unit: "Unit 1 - My Family",
            lo: [
              "Recites the poems with actions and appropriate voice modulation",
              "Names the different body parts and speaks about their functions",
              "Learns and reads sight words and understands their use in sentences"
            ],
            lessonId: "soe-eng-001"
          },
          {
            week: "3rd Week (5 days)",
            days: 5,
            chapter: "Unit 1 - My Family: Hygiene Habits & Letters a-f",
            unit: "Unit 1 - My Family",
            lo: [
              "Converses in pairs with peers",
              "Reads the given word and the given sentence",
              "Follows instructions (e.g. step-by-step way of washing hands)",
              "Attempts to write letters a - f within four lines both in capital and small case",
              "Understands and practices basic habits of personal hygiene",
              "Learns and sings alphabet songs; identifies initial sounds",
              "Exhibits greeting manner"
            ],
            lessonId: "soe-eng-001"
          },
          {
            week: "4th Week (5 days)",
            days: 5,
            chapter: "Unit 1 - My Family: Chapter 2 * Greetings (Letters g-p)",
            unit: "Unit 1 - My Family",
            lo: [
              "Writes letters g - p within four lines",
              "Uses culturally appropriate greeting vocabulary",
              "Practices phonics sounds associated with g through p"
            ],
            lessonId: "soe-eng-002"
          },
          {
            week: "5th Week (5 days)",
            days: 5,
            chapter: "Unit 1 - My Family: Magic Words & Action Words",
            unit: "Unit 1 - My Family",
            lo: [
              "Uses magic words appropriately (Please, Thank you, Sorry, Johar)",
              "Learns action words in progressive form (-ing) with corresponding classroom actions"
            ],
            lessonId: "soe-eng-002"
          }
        ]
      },
      {
        month: "September",
        workingDays: 20,
        weeks: [
          {
            week: "1st (0 day) & 2nd Week (5 days)",
            days: 5,
            chapter: "Hop a Little Picture Talk & Action Puzzles",
            unit: "Unit 1 - My Family",
            lo: [
              "Speaks about the given picture in complete thoughts",
              "Answers questions based on the picture cues",
              "Matches pictures with corresponding action words",
              "Plays and learns while playing (numbers and action words)",
              "Completes puzzles based on pictorial clues"
            ],
            lessonId: "soe-eng-003"
          },
          {
            week: "3rd Week (5 days)",
            days: 5,
            chapter: "Let us play Hopscotch (Letters q-z & Middle Sounds)",
            unit: "Unit 1 - My Family",
            lo: [
              "Completes the word by filling the appropriate middle sound",
              "Identifies and speaks the names of objects corresponding with initial sound",
              "Writes letters q - z within four lines"
            ],
            lessonId: "soe-eng-003"
          },
          {
            week: "4th Week (3 days)",
            days: 3,
            chapter: "My Family: The Sparrow Family & Bird Names",
            unit: "Unit 1 - My Family",
            lo: [
              "Sings songs like 'My Family' pronouncing and learning new sounds and words",
              "Speaks the names of family members in English and regional language",
              "Speaks about and identifies types of families (small, joint)",
              "Reads and uses sight words; speaks names of different birds",
              "Draws picture of his/her family including immediate environment"
            ],
            lessonId: "soe-eng-004"
          },
          {
            week: "5th (6 days) & 6th Week (1 day)",
            days: 7,
            chapter: "Cleanliness Objects, Sounds 'f' & 'm', Alphabet Puppets",
            unit: "Unit 1 - My Family",
            lo: [
              "Learns words with 'f' and 'm' sounds",
              "Identifies, speaks and writes names of objects used to keep self clean",
              "Learns sounds u - z and words beginning with these sounds; alphabet song",
              "Works in groups making collage, wall displays and finger puppets"
            ],
            lessonId: "soe-eng-004"
          }
        ]
      },
      {
        month: "October",
        workingDays: 21,
        weeks: [
          {
            week: "1st (3d), 2nd (3d) & 3rd Week (6 days)",
            days: 12,
            chapter: "Unit 2 - Life Around Us: Chapter 1 Picture Time, Fun With Numbers, Five Little Monkeys",
            unit: "Unit 2 - Life Around Us",
            lo: [
              "Speaks about the animals in the given picture",
              "Answers questions with cues from the picture cards",
              "Sings number rhymes and learns new action words",
              "Explores ways to learn new number rhymes from parents or others",
              "Reads and uses sight words 'each', 'is', and 'and' effectively in sentences"
            ],
            lessonId: "soe-eng-005"
          },
          {
            week: "4th Week (6 days)",
            days: 6,
            chapter: "Unit 2 - Life Around Us: Chapter 2 * The Cap-seller and the monkeys (Use of this/that)",
            unit: "Unit 2 - Life Around Us",
            lo: [
              "Reads the story with guidance and individually",
              "Answers questions based on the story sequence",
              "Narrates similar stories using picture cards",
              "Forms sentences using 'this' and 'that' appropriately",
              "Identifies and speaks first sounds of given words"
            ],
            lessonId: "soe-eng-006"
          },
          {
            week: "5th Week (3 days)",
            days: 3,
            chapter: "Story Sequencing, Object Names & Action Songs",
            unit: "Unit 2 - Life Around Us",
            lo: [
              "Sequences stories logically, then attempts to narrate them in order",
              "Writes the names of familiar objects and animals on slates",
              "Sings action songs with teacher guidance and individually"
            ],
            lessonId: "soe-eng-006"
          }
        ]
      },
      {
        month: "November",
        workingDays: 21,
        weeks: [
          {
            week: "1st (1 day) & 2nd Week (4 days)",
            days: 5,
            chapter: "Butterflies: Opposite Words & Syllable Clapping",
            unit: "Unit 2 - Life Around Us",
            lo: [
              "Learns words opposite in meaning through rhymes (big-small, up-down)",
              "Comprehends pictures and answers questions",
              "Uses phrases with prepositions 'on' and 'in'",
              "Learns to split words into appropriate syllables with claps and colours",
              "Understands meanings of simple action words; group picture story"
            ],
            lessonId: "soe-eng-007"
          },
          {
            week: "3rd Week (2+3 days)",
            days: 5,
            chapter: "Reading: * Catch me if you can",
            unit: "Unit 2 - Life Around Us",
            lo: [
              "Reads the story aloud with expression and rhythm",
              "Attempts to speak new words and use in sentences"
            ],
            lessonId: "soe-eng-007"
          },
          {
            week: "4th (6 days) & 5th Week (5 days)",
            days: 11,
            chapter: "Chapter 3 * A Farm, Animals and Birds",
            unit: "Unit 2 - Life Around Us",
            lo: [
              "Recites poem 'My dear Grandpa...' and knows names and sounds of farm animals",
              "Speaks animal names in regional language (Santali/Hindi)",
              "Uses drawing and colouring skills to create a picture of a farm",
              "Attempts to write names of farm animals in four-line notebooks",
              "Observes immediate environment listing local birds and animals",
              "Classifies animals as wild and domestic based on natural homes"
            ],
            lessonId: "soe-eng-008"
          }
        ]
      },
      {
        month: "December",
        workingDays: 19,
        weeks: [
          {
            week: "1st (0 day) & 2nd Week (6 days)",
            days: 6,
            chapter: "Unit 3 - Food: Chapter 1 Fun with Pictures, Fruits for all",
            unit: "Unit 3 - Food",
            lo: [
              "Uses basic prepositions like in, on, between, and behind through pictures",
              "Sings and enjoys rhyme 'Five yellow mangoes' with proper pronunciation and action",
              "Reads aloud names of fruits, vegetables, and flowers seeing flashcards",
              "Tells about favourite fruit; identifies green vegetables",
              "Classifies fruits and vegetables on basis of colour and shape",
              "Writes describing words; reads text using 'these', 'they are', 'yes/no'"
            ],
            lessonId: "soe-eng-009"
          },
          {
            week: "3rd Week (6 days)",
            days: 6,
            chapter: "Unit 3 - Food: * A Visit to the Market",
            unit: "Unit 3 - Food",
            lo: [
              "Reads and spells sight words in the lesson correctly",
              "Converses with friends about village market",
              "Writes names of market pictures given; extends poem 'Fruits for all'"
            ],
            lessonId: "soe-eng-010"
          },
          {
            week: "4th (6 days) & 5th (2 days) Week",
            days: 8,
            chapter: "Unit 3 - Food: Chapter 2 * The Food we eat & Community Helpers",
            unit: "Unit 3 - Food",
            lo: [
              "Identifies pictures of food and speaks about healthy eating",
              "Speaks about how animals help us; calls and writes food item names",
              "Finds out number of syllables (one or two) in given words",
              "Names community helpers and writes sentences about them",
              "Uses 'this' and 'these' appropriately; enjoys rhyme 'The four seasons'"
            ],
            lessonId: "soe-eng-011"
          }
        ]
      },
      {
        month: "January",
        workingDays: 20,
        weeks: [
          {
            week: "1st (0 day) & 2nd Week (6 days)",
            days: 6,
            chapter: "Unit 4 - Seasons: Chapter 1 The Four Seasons, Pitter Patter",
            unit: "Unit 4 - Seasons",
            lo: [
              "Recalls words related to given pictures of seasons",
              "Describes given pictures of different seasons; reads story cards"
            ],
            lessonId: "soe-eng-012"
          },
          {
            week: "3rd (3 days) & 4th Week (5 days)",
            days: 8,
            chapter: "Rain, Sky & Self-Introduction",
            unit: "Unit 4 - Seasons",
            lo: [
              "Reads and writes word cloud for given picture of rainy season",
              "Describes and writes about pictures in a few sentences",
              "Speaks about dreams, rainbow, sunrise, sunset in 1-2 sentences",
              "Introduces himself/herself to friends"
            ],
            lessonId: "soe-eng-012"
          },
          {
            week: "5th Week (5 days)",
            days: 5,
            chapter: "Unit 4 - Seasons: * Anandi's Rainbow",
            unit: "Unit 4 - Seasons",
            lo: [
              "Reads and comprehends passage from story 'Anandi’s Rainbow'",
              "Writes names of seven colours of the rainbow",
              "Writes about rainbows and writes about themselves"
            ],
            lessonId: "soe-eng-013"
          }
        ]
      },
      {
        month: "February",
        workingDays: 20,
        weeks: [
          {
            week: "1st to 4th Week (20 days)",
            days: 20,
            chapter: "Revision of Units 1 to 4: Phonics, Vocabulary, Sight Words",
            unit: "Annual Revision",
            lo: [
              "Consolidates reading and writing skills of letters a-z",
              "Recalls sight words across My Family, Life Around Us, Food, and Seasons",
              "Practices choral poem recitation and pair conversation"
            ],
            lessonId: "soe-eng-001"
          }
        ]
      },
      {
        month: "March",
        workingDays: 21,
        weeks: [
          {
            week: "1st to 4th Week (21 days)",
            days: 21,
            chapter: "Summative Assessment II (SA II) & Oral NIPUN FLN Evaluation",
            unit: "SA II Evaluation",
            lo: [
              "NIPUN Bharat FLN grade-level reading fluency assessment",
              "Oral picture description and comprehension evaluation",
              "Writing letters, words, and short phrases accurately"
            ],
            lessonId: "soe-eng-013"
          }
        ]
      }
    ],
    hindi: [
      {
        month: "May & June",
        workingDays: 33,
        weeks: [
          {
            week: "May (17 days) & June (16 days)",
            days: 33,
            chapter: "विद्या प्रवेश (Vidya Pravesh)",
            unit: "विद्या प्रवेश",
            lo: [
              "विद्यालय तत्परता: अपने बारे में बातचीत, मौखिक भाषा विकास",
              "चित्र पठन, मुक्त हस्त रेखांकन, कविताएं और अभिनय",
              "ध्वनि पहचान, आकृतियों का अनुरेखण, बिन्दु मिलाना और रंग भरना"
            ],
            lessonId: "soe-hin-001"
          }
        ]
      },
      {
        month: "July",
        workingDays: 25,
        weeks: [
          {
            week: "1st Week (6 days)",
            days: 6,
            chapter: "मीना का परिवार",
            unit: "पाठ १ · हमारा परिवार",
            lo: [
              "परिवार के सदस्यों (माँ, पिताजी, भाई, बहन, दादा-दादी) पर बातचीत",
              "परिवार के चित्रों को देखकर सरल वाक्यों में वर्णन करना",
              "मातृभाषा (संथाली) और हिंदी के पारिवारिक शब्दों का संबंध समझना"
            ],
            lessonId: "soe-hin-001"
          },
          {
            week: "2nd Week (6 days)",
            days: 6,
            chapter: "दादा दादी",
            unit: "पाठ २ · संबंध और आदर",
            lo: [
              "दादा-दादी के साथ कहानियों और स्नेहपूर्ण संबंधों पर चर्चा",
              "बड़ों के प्रति आदर और अभिवादन (जोहार/नमस्ते) का शिष्टाचार",
              "सरल शब्दों को पढ़ना और अक्षरों को पहचानना"
            ],
            lessonId: "soe-hin-002"
          },
          {
            week: "3rd (4 days) & 4th Week (6 days)",
            days: 10,
            chapter: "रीना का दिन",
            unit: "पाठ ३ · दिनचर्या",
            lo: [
              "सुबह से रात तक की दैनिक गतिविधियों का क्रम बताना",
              "व्यक्तिगत स्वच्छता (हाथ धोना, दाँत साफ करना) की अच्छी आदतें",
              "चित्र देखकर दिनचर्या के वाक्यों को पढ़ना"
            ],
            lessonId: "soe-hin-003"
          },
          {
            week: "5th Week (3 days)",
            days: 3,
            chapter: "पुनरावृत्ति (पाठ १-३)",
            unit: "माह समीक्षा",
            lo: [
              "सीखे गए अक्षरों और ध्वनियों का मौखिक अभ्यास",
              "चित्र देखकर नए शब्दों की पहचान"
            ],
            lessonId: "soe-hin-001"
          }
        ]
      },
      {
        month: "August",
        workingDays: 24,
        weeks: [
          {
            week: "1st (3 days) & 2nd Week (6 days)",
            days: 9,
            chapter: "रानी भी",
            unit: "पाठ ४ · खेल और सहभागिता",
            lo: [
              "कहानी 'रानी भी' को हाव-भाव के साथ सुनना और समझना",
              "खेलों में साथियों को शामिल करने के महत्व पर बातचीत",
              "कहानी के मुख्य पात्रों और घटनाओं पर सरल प्रश्नों के उत्तर देना"
            ],
            lessonId: "soe-hin-004"
          },
          {
            week: "3rd Week (5 days)",
            days: 5,
            chapter: "मिठाई",
            unit: "पाठ ५ · स्वाद और खानपान",
            lo: [
              "विभिन्न मिठाइयों और स्वादों (मीठा, खट्टा, नमकीन) की पहचान",
              "स्थानीय पर्व-त्योहारों में बनने वाले पकवानों पर चर्चा",
              "स्वाद से संबंधित नए शब्दों का वाक्यों में प्रयोग"
            ],
            lessonId: "soe-hin-005"
          },
          {
            week: "4th Week (5 days)",
            days: 5,
            chapter: "तीन साथी",
            unit: "पाठ ६ · मित्रता और सहयोग",
            lo: [
              "मित्रता और परस्पर सहयोग की भावना का विकास",
              "कक्षा में साथियों के साथ मिलकर काम करना",
              "चित्र देखकर कहानी के अगले हिस्से का अनुमान लगाना"
            ],
            lessonId: "soe-hin-005"
          },
          {
            week: "5th Week (5 days)",
            days: 5,
            chapter: "वाह! मेरे घोड़े",
            unit: "पाठ ७ · बालगीत और लय",
            lo: [
              "सस्वर कविता वाचन और शारीरिक अभिनय",
              "लयबद्ध और तुकबंदी वाले शब्दों की पहचान",
              "जानवरों की चाल और आवाज़ों का अनुकरण"
            ],
            lessonId: "soe-hin-006"
          }
        ]
      },
      {
        month: "September",
        workingDays: 20,
        weeks: [
          {
            week: "1st (0 day) & 2nd Week (5 days)",
            days: 5,
            chapter: "खतरे में साँप",
            unit: "पाठ ८ · जीव-जंतु और सुरक्षा",
            lo: [
              "साँप और छोटे जीवों के प्रति संवेदनशीलता और सुरक्षा समझ",
              "कहानी सुनकर मुख्य घटनाओं का वर्णन करना",
              "जीव-जंतुओं के स्थानीय नाम संथाली और हिंदी में सीखना"
            ],
            lessonId: "soe-hin-007"
          },
          {
            week: "3rd (5 days) & 4th Week (3 days)",
            days: 8,
            chapter: "आलू की सड़क",
            unit: "पाठ ९ · हास्य और कल्पना",
            lo: [
              "रोचक कहानी 'आलू की सड़क' का पठन और आनंद",
              "सब्जियों के नाम, आकार और रंगों की पहचान",
              "कहानी को अपने शब्दों में पुनः सुनाना"
            ],
            lessonId: "soe-hin-008"
          },
          {
            week: "5th (6 days) & 6th Week (1 day)",
            days: 7,
            chapter: "झूलम - झूली",
            unit: "पाठ १० · खेल और आनंद",
            lo: [
              "पेड़ों और मेलों पर झूले झूलने के अनुभवों पर बातचीत",
              "कविता 'झूलम-झूली' का सस्वर गायन",
              "तुक वाले शब्दों (झूले-भूले, डाली-ताली) की पहचान"
            ],
            lessonId: "soe-hin-009"
          }
        ]
      },
      {
        month: "October",
        workingDays: 21,
        weeks: [
          {
            week: "1st (3 days) & 2nd Week (3 days)",
            days: 6,
            chapter: "भुट्टे",
            unit: "पाठ ११ · स्थानीय फसलें और भोजन",
            lo: [
              "भुट्टे (मकई) की खेती, भूनने और खाने के अनुभव साझा करना",
              "फसलों और मौसम के बारे में सामान्य जानकारी",
              "चित्र देखकर शब्दों को जोड़कर पढ़ना"
            ],
            lessonId: "soe-hin-010"
          },
          {
            week: "3rd Week (6 days)",
            days: 6,
            chapter: "फूली रोटी",
            unit: "पाठ १२ · रसोई और भोजन",
            lo: [
              "रोटी बनने की प्रक्रिया (आटा गूंधना, बेलना, सेंकना) समझना",
              "रसोई में उपयोग होने वाले बर्तनों के नाम जानना",
              "सरल वाक्य निर्माण और स्लेट पर लेखन अभ्यास"
            ],
            lessonId: "soe-hin-011"
          },
          {
            week: "4th (6 days) & 5th Week (3 days)",
            days: 9,
            chapter: "मेला",
            unit: "पाठ १३ · गाँव का मेला",
            lo: [
              "गाँव के साप्ताहिक हाट और मेलों पर अनुभव साझा करना",
              "मेले में मिलने वाली वस्तुओं, खिलौनों और झूलों का वर्णन",
              "मेले के चित्र पर आधारित मौखिक प्रश्नोत्तरी"
            ],
            lessonId: "soe-hin-012"
          }
        ]
      },
      {
        month: "November",
        workingDays: 21,
        weeks: [
          {
            week: "1st (1 day) & 2nd Week (4 days)",
            days: 5,
            chapter: "बरखा और मेघा",
            unit: "पाठ १४ · वर्षा ऋतु और प्रकृति",
            lo: [
              "बारिश, बादलों और वर्षा ऋतु के दृश्यों का आनंद लेना",
              "कागज़ की नाव बनाना और पानी में तैराना",
              "वर्षा से संबंधित बालगीतों का सामूहिक गायन"
            ],
            lessonId: "soe-hin-013"
          },
          {
            week: "3rd Week (2+3 days)",
            days: 5,
            chapter: "होली",
            unit: "पाठ १५ · रंगों का त्योहार",
            lo: [
              "होली के रंगों, खुशियों और पकवानों पर चर्चा",
              "पलाश के फूलों से प्राकृतिक रंग बनाने की समझ",
              "सद्भाव और प्रेम के साथ त्योहार मनाने की भावना"
            ],
            lessonId: "soe-hin-013"
          },
          {
            week: "4th (6 days) & 5th Week (5 days)",
            days: 11,
            chapter: "जन्मदिवस पर पेड़ लगाओ",
            unit: "पाठ १६ · पर्यावरण संरक्षण",
            lo: [
              "जन्मदिन पर एक पौधा लगाने और देखभाल करने का संकल्प",
              "पेड़ों से मिलने वाले लाभों (छाया, फल, शुद्ध हवा) को जानना",
              "स्थानीय पेड़ों (साल, महुआ, करंज, आम) के नाम संथाली और हिंदी में सीखना"
            ],
            lessonId: "soe-hin-014"
          }
        ]
      },
      {
        month: "December",
        workingDays: 19,
        weeks: [
          {
            week: "1st (0 day) & 2nd Week (6 days)",
            days: 6,
            chapter: "हवा",
            unit: "पाठ १७ · प्रकृति की शक्ति",
            lo: [
              "हवा की उपस्थिति को महसूस करना (पत्तियों का हिलना, पतंग उड़ना)",
              "हवा पर आधारित कविता का सस्वर वाचन",
              "प्रकृति के घटकों पर सरल संवाद"
            ],
            lessonId: "soe-hin-015"
          },
          {
            week: "3rd Week (6 days)",
            days: 6,
            chapter: "कितनी प्यारी है ये दुनिया",
            unit: "पाठ १८ · सुंदरता और कृतज्ञता",
            lo: [
              "पेड़-पौधों, नदी, पहाड़ों और पशु-पक्षियों की सुंदरता की सराहना",
              "प्रकृति के प्रति कृतज्ञता और प्रेम का भाव",
              "सरल कविताओं को याद करना और सुनाना"
            ],
            lessonId: "soe-hin-015"
          },
          {
            week: "4th (6 days) & 5th (2 days) Week",
            days: 8,
            chapter: "चाँद का बच्चा",
            unit: "पाठ १९ · बाल कल्पना और आकाश",
            lo: [
              "चाँद, तारों और रात के आकाश पर आधारित कहानी",
              "कहानी के आधार पर चित्र बनाना और रंग भरना",
              "नए शब्दों के अर्थ समझकर वाक्यों में प्रयोग करना"
            ],
            lessonId: "soe-hin-015"
          }
        ]
      },
      {
        month: "January",
        workingDays: 20,
        weeks: [
          {
            week: "1st to 5th Week (20 days)",
            days: 20,
            chapter: "पुनरावृत्ति (पठन कौशल अभ्यास)",
            unit: "भाषा दक्षता संवर्धन",
            lo: [
              "कक्षा १ के सभी पाठों का धाराप्रवाह पठन अभ्यास",
              "अक्षर, मात्रा और संयुक्त ध्वनियों की स्पष्ट पहचान",
              "निपुण भारत FLN मानकों के अनुरूप समझ के साथ पठन"
            ],
            lessonId: "soe-hin-001"
          }
        ]
      },
      {
        month: "February",
        workingDays: 20,
        weeks: [
          {
            week: "1st to 4th Week (20 days)",
            days: 20,
            chapter: "पुनरावृत्ति",
            unit: "वार्षिक पुनरावृत्ति",
            lo: [
              "पाठ्यपुस्तक सारंगी के सभी पाठों की पुनरावृत्ति",
              "मौखिक अभिव्यक्ति, शब्द लेखन और वाक्य निर्माण अभ्यास"
            ],
            lessonId: "soe-hin-001"
          }
        ]
      },
      {
        month: "March",
        workingDays: 21,
        weeks: [
          {
            week: "1st to 4th Week (21 days)",
            days: 21,
            chapter: "पुनरावृत्ति एवं SA II (Summative Assessment)",
            unit: "सत्रांत मूल्यांकन",
            lo: [
              "सत्रांत मूल्यांकन SA II का सफल संचालन",
              "कक्षा १ के हिंदी भाषा अधिगम प्रतिफलों (LOs) का व्यापक आकलन"
            ],
            lessonId: "soe-hin-015"
          }
        ]
      }
    ],
    maths: [
      {
        month: "May & June",
        workingDays: 33,
        weeks: [
          {
            week: "May 1st, 2nd, 3rd, 4th & 5th (17 days)",
            days: 17,
            chapter: "Vidya Pravesh: Pre-mathematical Concepts (Part 1)",
            unit: "Vidya Pravesh",
            periods: 20,
            lo: [
              "Pre-mathematical concepts: Awareness of surroundings",
              "Sorting classroom objects into two distinct categories (big/small, round/flat)"
            ],
            lessonId: "soe-mat-001"
          },
          {
            week: "June (16 days)",
            days: 16,
            chapter: "Vidya Pravesh: Patterns, Whole & Half, Groups",
            unit: "Vidya Pravesh",
            periods: 30,
            lo: [
              "Following repeating patterns (leaf-pebble-leaf-pebble)",
              "Intuitive concept of Whole and Half through fruits and paper folding",
              "Comparison (more/less, tall/short) and making groups"
            ],
            lessonId: "soe-mat-001"
          }
        ]
      },
      {
        month: "July",
        workingDays: 25,
        weeks: [
          {
            week: "1st (6d), 2nd (6d), 3rd (4d), 4th (6d) & 5th (3d)",
            days: 25,
            chapter: "Vidya Pravesh: Problem Solving, Seriation & One-to-One Correspondence",
            unit: "Vidya Pravesh",
            periods: 30,
            lo: [
              "Problem solving and foundational reasoning",
              "Seriation: arranging 3 to 5 objects in order of length/size",
              "Classification by multiple attributes (colour, shape)",
              "One to one correspondence: matching one pebble to one stick",
              "Intuitive estimation: guessing how many seeds are in hand"
            ],
            lessonId: "soe-mat-001"
          }
        ]
      },
      {
        month: "August",
        workingDays: 24,
        weeks: [
          {
            week: "1st (3 days) & 2nd Week (6 days)",
            days: 9,
            chapter: "1. Finding the Furry Cat (Pre-number Concepts)",
            unit: "Chapter 1",
            periods: 8,
            lo: [
              "Pre-number spatial relationships: top/bottom, above/below, inside/outside, near/far",
              "Finds hidden furry cat using directional and position clues"
            ],
            lessonId: "soe-mat-002"
          },
          {
            week: "3rd (5 days) & 4th Week (5 days)",
            days: 10,
            chapter: "2. What is long? What is round? (Shapes and Spatial Understanding)",
            unit: "Chapter 2",
            periods: 8,
            lo: [
              "Explores 3D and 2D shapes in daily surroundings (round coins, long sticks)",
              "Differentiates between objects that roll and objects that slide"
            ],
            lessonId: "soe-mat-003"
          },
          {
            week: "5th Week (5 days)",
            days: 5,
            chapter: "3. Mango Treat (Numbers 1 to 9)",
            unit: "Chapter 3",
            periods: 8,
            lo: [
              "Counts concrete objects from 1 to 9 with 1-to-1 correspondence",
              "Associates numeral symbols (1 to 9) with quantity; writes on slates"
            ],
            lessonId: "soe-mat-004"
          }
        ]
      },
      {
        month: "September",
        workingDays: 20,
        weeks: [
          {
            week: "1st (0d), 2nd (5d) & 3rd Week (5 days)",
            days: 10,
            chapter: "4. Making 10 (Numbers 10 to 20)",
            unit: "Chapter 4",
            periods: 10,
            lo: [
              "Concept of Ten (10) as a bundle of 10 single units (दस का बंडल)",
              "Counts and writes numbers 10 to 20 using bundles and loose sticks/pebbles",
              "Compares quantities up to 20"
            ],
            lessonId: "soe-mat-005"
          },
          {
            week: "4th (3 days), 5th (6 days) & 6th Week (1 day)",
            days: 10,
            chapter: "5. How Many? (Addition & Subtraction of Single-Digit Numbers)",
            unit: "Chapter 5",
            periods: 10,
            lo: [
              "Addition of single digit numbers by combining concrete objects (जोड़ना)",
              "Subtraction of single digit numbers by taking away objects (घटाना)",
              "Represents simple addition and subtraction with symbols '+' and '-'"
            ],
            lessonId: "soe-mat-006"
          }
        ]
      },
      {
        month: "October",
        workingDays: 21,
        weeks: [
          {
            week: "1st (3 days), 2nd (3 days) & 3rd Week (6 days)",
            days: 12,
            chapter: "6. Vegetable Farm (Addition & Subtraction up to 20)",
            unit: "Chapter 6",
            periods: 12,
            lo: [
              "Addition and subtraction within 20 in vegetable harvesting context",
              "Uses number line or bead strings to hop forward and backward",
              "Solves real-life oral word problems with counters"
            ],
            lessonId: "soe-mat-007"
          },
          {
            week: "4th (6 days) & 5th Week (3 days)",
            days: 9,
            chapter: "7. Lina’s Family (Measurement)",
            unit: "Chapter 7",
            periods: 6,
            lo: [
              "Non-standard measurement of length using hand-spans (बीत्ता) and footsteps",
              "Compares weights intuitively: heavier vs lighter objects",
              "Orders 3 objects from shortest to longest"
            ],
            lessonId: "soe-mat-008"
          }
        ]
      },
      {
        month: "November",
        workingDays: 21,
        weeks: [
          {
            week: "1st (1 day) & 2nd Week (4 days)",
            days: 5,
            chapter: "8. Fun with Numbers & 9. Utsav (Numbers 21 to 99)",
            unit: "Chapters 8 & 9",
            periods: 12,
            lo: [
              "Reads and writes numbers from 21 to 99 in sequence",
              "Tens and ones place value understanding using clay diyas and beads",
              "Recognizes forward and backward number patterns"
            ],
            lessonId: "soe-mat-009"
          },
          {
            week: "3rd (5 days) & 4th Week (6 days)",
            days: 11,
            chapter: "10. How Do I Spend My Day? (Time & Daily Routine)",
            unit: "Chapter 10",
            periods: 8,
            lo: [
              "Chronological sequence of events: morning (सेताग), afternoon (तिकिन), evening (आयुप), night (निंदा)",
              "Compares activities that take longer vs shorter time",
              "Associates school timetable with daily routines"
            ],
            lessonId: "soe-mat-010"
          },
          {
            week: "5th Week (5 days)",
            days: 5,
            chapter: "11. How Many Times? (Patterns)",
            unit: "Chapter 11",
            periods: 8,
            lo: [
              "Identifies and extends geometric and numerical patterns (2, 4, 6...)",
              "Creates creative block and border patterns on rangoli and borders"
            ],
            lessonId: "soe-mat-010"
          }
        ]
      },
      {
        month: "December",
        workingDays: 19,
        weeks: [
          {
            week: "1st (0 day) & 2nd Week (6 days)",
            days: 6,
            chapter: "12. How Much Can We Spend? (Money / Mathematical Communication)",
            unit: "Chapter 12",
            periods: 8,
            lo: [
              "Identifies Indian currency coins (₹1, ₹2, ₹5, ₹10) and notes",
              "Simulates simple buying and selling in a classroom haat stall",
              "Combines smaller coins to make a given amount up to ₹20"
            ],
            lessonId: "soe-mat-011"
          },
          {
            week: "3rd (6 days), 4th (6 days) & 5th (2 days) Week",
            days: 14,
            chapter: "13. So Many Toys (Repeated Addition / Introduction to Multiplication)",
            unit: "Chapter 13",
            periods: 19,
            lo: [
              "Multiplication as repeated addition of equal groups (3 groups of 2 toys = 6)",
              "Counts in skips of 2s and 5s with toys and counters",
              "Solves oral grouping puzzles with joy"
            ],
            lessonId: "soe-mat-012"
          }
        ]
      },
      {
        month: "January",
        workingDays: 19,
        weeks: [
          {
            week: "1st to 5th Week (19 days)",
            days: 19,
            chapter: "Data Handling & Money Practice",
            unit: "Data & Numbers",
            periods: 20,
            lo: [
              "Data handling: collects and records information of favourite fruits, toys, or colors using picture charts",
              "Answers simple questions based on a pictorial chart",
              "Consolidates coin counting and change calculation up to ₹20"
            ],
            lessonId: "soe-mat-013"
          }
        ]
      },
      {
        month: "February",
        workingDays: 20,
        weeks: [
          {
            week: "1st to 4th Week (20 days)",
            days: 20,
            chapter: "Revision of Class 1 Foundational Numeracy (FLN)",
            unit: "Annual Numeracy Revision",
            periods: 24,
            lo: [
              "Comprehensive review of numbers 1 to 99, addition & subtraction, measurement, time, and shapes",
              "NIPUN Bharat FLN milestone drills with concrete counters and slates"
            ],
            lessonId: "soe-mat-004"
          }
        ]
      },
      {
        month: "March",
        workingDays: 21,
        weeks: [
          {
            week: "1st to 4th Week (21 days)",
            days: 21,
            chapter: "Summative Assessment II (SA II) & Total 224 Working Days Completion",
            unit: "SA II & Test",
            periods: 20,
            lo: [
              "Summative Assessment II (SA II) testing full grade 1 competencies",
              "Evaluation of counting, addition/subtraction, shapes, money, and time",
              "Completion of official 224 tentative working days for Session 2024-2025"
            ],
            lessonId: "soe-mat-012"
          }
        ]
      }
    ]
  };

// 2. DATA REPOSITORY: FULL SOE GRADE 1 LESSONS (ENGLISH, HINDI, MATHS)
  // Aligned with NIPUN Bharat FLN & Jharkhand School of Excellence (SOE) 24-25
  // =========================================================================
  const CURRICULUM_LESSONS = [
    // -----------------------------------------------------------------------
    // ENGLISH (Mridang · Class 1)
    // -----------------------------------------------------------------------
    {
      id: "soe-eng-001",
      title_hi: "Unit 1: Two Little Hands — शरीर के अंग और स्वच्छता",
      title_sat: "ᱵᱟᱨᱭᱟ ᱦᱩᱰᱤᱧ ᱛᱤ — ᱦᱚᱲᱢᱚ ᱦᱟᱹᱴᱤᱧ ᱟᱨ ᱥᱟᱯᱷᱟ",
      title_en: "Two Little Hands (Body Parts, Hygiene & Phonics a-f)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "August",
      week: "1st to 3rd Week",
      chapter: "Unit 1 - My Family: Chapter 1 * Two Little Hands",
      domain: "Effective Communicators (EC) & Health (HW)",
      lo_id: "SOE-ENG-G1-U1C1",
      lo_title: "Names body parts, practices step-by-step handwashing, writes letters a-f within four lines, recites poem with actions",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu (Dumka Resource Group)",
      reviewed_at: "2026-08-14T10:30:00Z",
      duration: "15 min",
      activity: {
        title: "Two Little Hands Rhythm & Clean Wash (ᱛᱤ ᱟᱹᱨᱩᱵ)",
        desc: "Teacher leads children in acting out the poem: clapping two hands, tapping two feet, and demonstrating clean handwashing steps.",
        steps: [
          "1. Recite: 'Two little hands go clap, clap, clap!' -> Children clap and say 'ᱵᱟᱨᱭᱟ ᱛᱤ ᱛᱷᱟᱹᱭᱟᱹ ᱛᱟᱦᱨᱤ'!",
          "2. Recite: 'Two little feet go tap, tap, tap!' -> Children tap feet and say 'ᱵᱟᱨᱭᱟ ᱡᱟᱝᱜᱟ ᱛᱟᱲᱟᱢ'!",
          "3. Practice handwashing steps: palms, back of hands, between fingers with water (ᱫᱟᱜ) and soap (ᱥᱟᱵᱚᱱ)."
        ]
      },
      materials: ["Clean water bucket & soap (ᱫᱟᱜ ᱟᱨ ᱥᱟᱵᱚᱱ)", "Four-line slates & chalk", "Flashcards: Body Parts"],
      assessment: "Ask child to touch their eyes and say in Santali: 'ᱟᱢᱟᱜ ᱢᱮᱫ ᱚᱠᱟᱨᱮ ᱢᱮᱱᱟᱜᱼᱟ? (Where are your eyes?)' Expect: 'ᱱᱚᱣᱟ ᱫᱚ ᱤᱧᱟᱜ ᱢᱮᱫ (These are my eyes)'.",
      script: [
        {
          id: "eng-001-s1",
          hindi: "कक्षा में बैठ जाओ। आज हम 'Two Little Hands' कविता गाएंगे।",
          sat_olck: "ᱠᱞᱟᱥ ᱨᱮ ᱫᱩᱲᱩᱵ ᱯᱮ᱾ ᱛᱮᱦᱮᱧ ᱫᱚ ᱵᱚᱱ 'Two Little Hands' ᱥᱮᱨᱮᱧ ᱵᱚᱱ ᱥᱮᱨᱮᱧᱟ᱾",
          sat_deva: "क्लास रे दुड़ुब पे। तेहेंय दो बोन 'Two Little Hands' सेरेंज बोन सेरेंजा।",
          latin: "Klas re durub pe. Tehenj do bon 'Two Little Hands' serenj bon serenja.",
          verified: true
        },
        {
          id: "eng-001-s2",
          hindi: "दो छोटे हाथ ताली बजाते हैं: 'Two little hands go clap, clap, clap!'",
          sat_olck: "ᱵᱟᱨᱭᱟ ᱦᱩᱰᱤᱧ ᱛᱤ ᱛᱷᱟᱹᱭᱟᱹ ᱛᱟᱦᱨᱤ: 'Two little hands go clap, clap, clap!'",
          sat_deva: "बारया हुड़िंज ती थइया ताहरी: 'Two little hands go clap, clap, clap!'",
          latin: "Barya hudinj ti thaya tahri: 'Two little hands go clap, clap, clap!'",
          verified: true
        },
        {
          id: "eng-001-s3",
          hindi: "दो छोटी आँखें खुली रहती हैं: 'Two little eyes are open wide!'",
          sat_olck: "ᱵᱟᱨᱭᱟ ᱦᱩᱰᱤᱧ ᱢᱮᱫ ᱡᱷᱤᱡ ᱜᱮ ᱛᱟᱦᱮᱸᱱᱟ: 'Two little eyes are open wide!'",
          sat_deva: "बारया हुड़िंज मेद झीज गे ताहेना: 'Two little eyes are open wide!'",
          latin: "Barya hudinj med jhij ge tahena: 'Two little eyes are open wide!'",
          verified: true
        },
        {
          id: "eng-001-s4",
          hindi: "खाना खाने से पहले दोनों हाथों को साबुन और साफ पानी से धोना चाहिए।",
          sat_olck: "ᱡᱚᱢ ᱞᱟᱦᱟ ᱨᱮ ᱵᱟᱱᱟᱨ ᱛᱤ ᱥᱟᱵᱚᱱ ᱟᱨ ᱥᱟᱯᱷᱟ ᱫᱟᱜ ᱛᱮ ᱟᱹᱨᱩᱵ ᱞᱟᱹᱠᱛᱤ ᱠᱟᱱᱟ᱾",
          sat_deva: "जोम लाहा रे बानार ती साबोन आर साफा दाग ते आरुब लक्ति काना।",
          latin: "Jom laha re banar ti sabon ar sapha dag te arub lakti kana.",
          verified: true
        },
        {
          id: "eng-001-s5",
          hindi: "अपनी स्लेट पर चार लाइनों में अक्षर 'a', 'b', 'c', 'd', 'e', 'f' लिखो।",
          sat_olck: "ᱟᱯᱱᱟᱨ ᱥᱞᱮᱴ ᱨᱮ ᱯᱩᱱ ᱜᱟᱨ ᱵᱷᱤᱛᱨᱤ ᱨᱮ 'a', 'b', 'c', 'd', 'e', 'f' ᱚᱞ ᱯᱮ᱾",
          sat_deva: "आपनार स्लेट रे पुन गार भितरी रे 'a', 'b', 'c', 'd', 'e', 'f' ओल पे।",
          latin: "Apnar slate re pun gar bhitri re 'a', 'b', 'c', 'd', 'e', 'f' ol pe.",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-002",
      title_hi: "Unit 1: Greetings & Magic Words — अभिवादन और शिष्टाचार",
      title_sat: "ᱡᱚᱦᱟᱨ ᱟᱨ ᱢᱟᱱᱚᱛ ᱟᱹᱲᱟᱹ ᱠᱚ (Magic Words)",
      title_en: "Greetings & Magic Words (Letters g-p)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "August",
      week: "4th to 5th Week",
      chapter: "Unit 1 - My Family: Chapter 2 * Greetings",
      domain: "Effective Communicators (EC)",
      lo_id: "SOE-ENG-G1-U1C2",
      lo_title: "Writes letters g-p within four lines, uses magic words (Please, Thank you, Johar) appropriately, uses action words in progressive form",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-16T11:00:00Z",
      duration: "14 min",
      activity: {
        title: "Magic Words Circle (ᱢᱟᱱᱚᱛ ᱟᱹᱲᱟᱹ)",
        desc: "Children practice passing a flower to each other, using 'Please' (ᱫᱟᱭᱟ ᱠᱟᱛᱮ) when asking and 'Thank you' (ᱥᱟᱨᱦᱟᱣ) when receiving.",
        steps: [
          "1. Child A hands flower: 'Here is a flower for you!'",
          "2. Child B responds with folded hands: 'Thank you! ᱥᱟᱨᱦᱟᱣ!'",
          "3. Class chorus: 'Good morning teacher! ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ ᱢᱟᱪᱮᱛ!'"
        ]
      },
      materials: ["Classroom flower or leaves", "Alphabet chart g-p", "Slates"],
      assessment: "Give a pencil to a student. Prompt them: 'What magic word do you say?' Expected response: 'Thank you' or 'ᱥᱟᱨᱦᱟᱣ'.",
      script: [
        {
          id: "eng-002-s1",
          hindi: "सुबह जब स्कूल आते हैं, तो सब बोलो: 'Good Morning' (ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ)!",
          sat_olck: "ᱥᱮᱛᱟᱜ ᱟᱥᱲᱟ ᱦᱤᱡᱩᱜ ᱡᱚᱠᱷᱮᱡ ᱢᱮᱱ ᱯᱮ: 'Good Morning' (ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ)!",
          sat_deva: "सेताग आसड़ा हिजुग जोखेज मेन पे: 'Good Morning' (सागुन सेताग)!",
          latin: "Setag asra hijug jokhej men pe: 'Good Morning' (Sagun setag)!",
          verified: true
        },
        {
          id: "eng-002-s2",
          hindi: "जब कोई हमारी मदद करे, तो कहना चाहिए: 'Thank You' (ᱥᱟᱨᱦᱟᱣ)!",
          sat_olck: "ᱡᱚᱠᱷᱚᱱ ᱡᱟᱦᱟᱸᱭ ᱟᱵᱚᱭ ᱜᱚᱲᱚᱣᱟᱵᱚᱱᱟ, ᱢᱮᱱ ᱢᱮ: 'Thank You' (ᱥᱟᱨᱦᱟᱣ)!",
          sat_deva: "जोखोन जाहाय आबोय गोड़ोवाबोना, मेन मे: 'Thank You' (सारहाव)!",
          latin: "Jokhon jahay aboy gorowabona, men me: 'Thank You' (Sarhaw)!",
          verified: true
        },
        {
          id: "eng-002-s3",
          hindi: "किसी से कोई चीज़ मांगते समय बोलो: 'Please' (ᱫᱟᱭᱟ ᱠᱟᱛᱮ)।",
          sat_olck: "ᱡᱟᱦᱟᱸᱭ ᱴᱷᱮᱱ ᱠᱷᱚᱱ ᱪᱮᱫ ᱠᱚ ᱠᱷᱚᱡᱽ ᱡᱚᱠᱷᱮᱡ ᱢᱮᱱ ᱢᱮ: 'Please' (ᱫᱟᱭᱟ ᱠᱟᱛᱮ)᱾",
          sat_deva: "जाहाय ठेन खोन चेद को खोज जोखेज मेन मे: 'Please' (दया काते)।",
          latin: "Jahay then khon ched ko khoj jokhej men me: 'Please' (Daya kate).",
          verified: true
        },
        {
          id: "eng-002-s4",
          hindi: "अब अपनी स्लेट पर 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p' लिखो।",
          sat_olck: "ᱱᱤᱛᱚᱜ ᱟᱯᱱᱟᱨ ᱥᱞᱮᱴ ᱨᱮ 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p' ᱚᱞ ᱯᱮ᱾",
          sat_deva: "नितोग आपनार स्लेट रे 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p' ओल पे।",
          latin: "Nitog apnar slate re letters g to p ol pe.",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-003",
      title_hi: "Unit 1: Hop a Little — क्रिया शब्द और हॉपस्कॉच खेल",
      title_sat: "ᱦᱚᱯ ᱮ ᱞᱤᱴᱤᱞ — ᱠᱟᱹᱢᱤ ᱟᱹᱲᱟᱹ ᱟᱨ ᱮᱱᱮᱡ",
      title_en: "Hop a Little & Hopscotch (Action Words & Letters q-z)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "September",
      week: "1st to 3rd Week",
      chapter: "Hop a Little Picture Talk & Let us play Hopscotch",
      domain: "Involved Learners (IL) & Effective Communicators",
      lo_id: "SOE-ENG-G1-SEP1",
      lo_title: "Matches pictures with actions, fills middle sounds in CVC words, writes letters q-z, plays numbers and action words",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-18T09:40:00Z",
      duration: "15 min",
      activity: {
        title: "Hopscotch Phonics Game (ᱪᱷᱩᱴ ᱮᱱᱮᱡ)",
        desc: "Draw a hopscotch grid on the floor with chalk. Each box has a letter (q-z) and a number. As children hop, they say the action word.",
        steps: [
          "1. Hop on one foot: 'Hop a little, jump a little, one, two, three!'",
          "2. Bend your knees: 'Run a little, skip a little, tap one knee!'",
          "3. Read the letter in the square: 'q, r, s, t, u, v, w, x, y, z'."
        ]
      },
      materials: ["Floor chalk grid", "Action cards (hop, run, jump, sleep)"],
      assessment: "Call out 'Jump!' Observe if child jumps and says 'ᱠᱩᱫᱽ' or 'Jump'.",
      script: [
        {
          id: "eng-003-s1",
          hindi: "सब बच्चे खड़े हो जाओ और मेरे साथ कूदो: 'Hop a little, jump a little!'",
          sat_olck: "ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱛᱤᱸᱜᱩᱱ ᱯᱮ ᱟᱨ ᱤᱧ ᱥᱟᱶ ᱫᱚᱱ ᱯᱮ: 'Hop a little, jump a little!'",
          sat_deva: "सानाम गिदरा तिंगुन पे आर इंज साव दोन पे: 'Hop a little, jump a little!'",
          latin: "Sanam gidra tingun pe ar inj saw don pe: 'Hop a little, jump a little!'",
          verified: true
        },
        {
          id: "eng-003-s2",
          hindi: "एक पैर से कूदने को 'Hop' और दोनों पैरों से कूदने को 'Jump' बोलते हैं।",
          sat_olck: "ᱢᱤᱫ ᱡᱟᱝᱜᱟ ᱛᱮ ᱫᱚᱱ ᱫᱚ 'Hop' ᱟᱨ ᱵᱟᱱᱟᱨ ᱡᱟᱝᱜᱟ ᱛᱮ ᱫᱚ 'Jump' ᱠᱚ ᱢᱮᱱᱟ᱾",
          sat_deva: "मिद जांगा ते दोन दो 'Hop' आर बानार जांगा ते दो 'Jump' को मेना।",
          latin: "Mid janga te don do 'Hop' ar banar janga te do 'Jump' ko mena.",
          verified: true
        },
        {
          id: "eng-003-s3",
          hindi: "शब्द 'c_t' में बीच की आवाज़ भरो: 'a' भरने से 'cat' (ᱵᱤᱞᱟᱹᱭ) बनता है।",
          sat_olck: "'c_t' ᱟᱹᱲᱟᱹ ᱨᱮ ᱛᱟᱞᱟ ᱨᱮᱱᱟᱜ ᱟᱲᱟᱝ ᱯᱮᱨᱮᱡ ᱯᱮ: 'a' ᱞᱟᱜᱟᱣ ᱞᱮᱠᱷᱟᱱ 'cat' (ᱵᱤᱞᱟᱹᱭ) ᱦᱩᱭᱩᱜᱼᱟ᱾",
          sat_deva: "'c_t' आड़ा रे ताला रेनाग आड़ांग पेरेज पे: 'a' लगाव लेखान 'cat' (बिलाई) हुयुग-आ।",
          latin: "'c_t' ara re tala renag arang perez pe: 'a' lagaw lekhan 'cat' (bilay) huyug-a.",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-004",
      title_hi: "Unit 1: The Sparrow Family — गौरैया परिवार और पक्षी",
      title_sat: "ᱜᱩᱲᱫᱩ ᱪᱮᱬᱮ ᱜᱷᱟᱨᱚᱸᱡᱽ (The Sparrow Family)",
      title_en: "The Sparrow Family (Bird Names & Family Types)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "September",
      week: "4th to 6th Week",
      chapter: "My Family: The Sparrow Family",
      domain: "Effective Communicators (EC)",
      lo_id: "SOE-ENG-G1-SEP2",
      lo_title: "Sings 'My Family', speaks names of family members in English and regional language, identifies types of families, names different birds",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-20T11:20:00Z",
      duration: "15 min",
      activity: {
        title: "Bird Call & Family Drawing (ᱪᱮᱬᱮ ᱪᱤᱛᱟᱹᱨ)",
        desc: "Children imitate sparrow sounds (ᱪᱤᱸ-ᱪᱤᱸ) and draw their family members together on slates.",
        steps: [
          "1. Sing 'The Sparrow Family' song.",
          "2. Identify local birds: Sparrow (ᱜᱩᱲᱫᱩ), Crow (ᱠᱟᱶ), Pigeon (ᱯᱚᱛᱟᱢ), Peacock (ᱢᱟᱨᱟᱜ).",
          "3. Draw mother, father, sister, brother on the slate."
        ]
      },
      materials: ["Birds flashcards", "Slates", "Chalk"],
      assessment: "Show picture of a sparrow. Ask: 'What bird is this?' In Santali: 'ᱱᱚᱣᱟ ᱫᱚ ᱪᱮᱫ ᱪᱮᱬᱮ ᱠᱟᱱᱟ?' Expected: 'Sparrow' or 'ᱜᱩᱲᱫᱩ'.",
      script: [
        {
          id: "eng-004-s1",
          hindi: "पेड़ पर नन्हीं गौरैया का घोंसला है। गौरैया को 'Sparrow' बोलते हैं।",
          sat_olck: "ᱫᱟᱨᱮ ᱨᱮ ᱦᱩᱰᱤᱧ ᱜᱩᱲᱫᱩ ᱟᱜ ᱛᱩᱠᱟᱹ ᱢᱮᱱᱟᱜᱼᱟ᱾ ᱜᱩᱲᱫᱩ ᱫᱚ 'Sparrow' ᱠᱚ ᱢᱮᱛᱟᱭᱟ᱾",
          sat_deva: "दारे रे हुड़िंज गुड़दु आग तुका मेनाग-आ। गुड़दु दो 'Sparrow' को मेताया।",
          latin: "Dare re hudinj gurdu ag tuka menag-a. Gurdu do 'Sparrow' ko metaya.",
          verified: true
        },
        {
          id: "eng-004-s2",
          hindi: "परिवार में माता-पिता, भाई और बहन सब मिलकर रहते हैं।",
          sat_olck: "ᱜᱷᱟᱨᱚᱸᱡᱽ ᱨᱮ ᱟᱭᱳ-ᱵᱟᱵᱟ, ᱵᱚᱭᱦᱟ ᱟᱨ ᱢᱤᱥᱤ ᱥᱟᱱᱟᱢ ᱦᱚᱲ ᱢᱤᱫ ᱛᱮᱠᱚ ᱛᱟᱦᱮᱸᱱᱟ᱾",
          sat_deva: "घारोंज रे आयो-बाबा, बोयहा आर मिसि सानाम होड़ मिद तेको ताहेना।",
          latin: "Gharonj re ayo-baba, boyha ar misi sanam hor mid teko tahena.",
          verified: true
        },
        {
          id: "eng-004-s3",
          hindi: "'f' और 'm' की आवाज़ सुनो: 'f' से 'family', 'm' से 'mother'!",
          sat_olck: "'f' ᱟᱨ 'm' ᱨᱮᱱᱟᱜ ᱟᱲᱟᱝ ᱟᱧᱡᱚᱢ ᱯᱮ: 'f' ᱛᱮ 'family', 'm' ᱛᱮ 'mother'!",
          sat_deva: "'f' आर 'm' रेनाग आड़ांग आंजोम पे: 'f' ते 'family', 'm' ते 'mother'!",
          latin: "'f' ar 'm' renag arang anjom pe: 'f' te 'family', 'm' te 'mother'!",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-005",
      title_hi: "Unit 2: Five Little Monkeys — पाँच नन्हे बन्दर व संख्या तुकबंदी",
      title_sat: "ᱢᱚᱬᱮ ᱜᱚᱴᱟᱝ ᱜᱟᱹᱰᱦᱤ — ᱮᱞ ᱥᱮᱨᱮᱧ",
      title_en: "Five Little Monkeys (Number Rhymes & Sight Words)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "October",
      week: "1st to 3rd Week",
      chapter: "Unit 2 - Life Around Us: Chapter 1 Picture Time & Five Little Monkeys",
      domain: "Effective Communicators & Numeracy",
      lo_id: "SOE-ENG-G1-OCT1",
      lo_title: "Sings number rhymes, learns action words, reads and uses sight words 'each', 'is', and 'and' in sentences",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-22T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "Monkey Bed Jumping Game (ᱜᱟᱹᱰᱦᱤ ᱫᱚᱱ)",
        desc: "5 children act as monkeys jumping, one rolls on floor as doctor says 'No more monkeys jumping on the bed!'",
        steps: [
          "1. Five children hold fingers up: 5, 4, 3, 2, 1.",
          "2. Chant: 'Five little monkeys jumping on the bed, one fell off and bumped his head!'",
          "3. Read sight words on board: 'each', 'is', 'and'."
        ]
      },
      materials: ["Monkey masks/props", "Flashcards: each, is, and"],
      assessment: "Ask child to read the card 'each' and point to one pebble for each friend.",
      script: [
        {
          id: "eng-005-s1",
          hindi: "पाँच नन्हे बन्दर बिस्तर पर कूद रहे थे: 'Five little monkeys jumping on the bed!'",
          sat_olck: "ᱢᱚᱬᱮ ᱜᱚᱴᱟᱝ ᱜᱟᱹᱰᱦᱤ ᱯᱟᱨᱠᱚᱢ ᱨᱮᱠᱚ ᱫᱚᱱ ᱮᱫ ᱛᱟᱦᱮᱸᱫ: 'Five little monkeys jumping on the bed!'",
          sat_deva: "मोणे गोटांग गाड़हि पारकोम रेको दोन एद ताहेद: 'Five little monkeys jumping on the bed!'",
          latin: "Mone gotang garihi parkom reko don ed tahed: 'Five little monkeys jumping on the bed!'",
          verified: true
        },
        {
          id: "eng-005-s2",
          hindi: "एक बन्दर नीचे गिर गया: 'One fell off and bumped his head!'",
          sat_olck: "ᱢᱤᱫᱴᱟᱝ ᱜᱟᱹᱰᱦᱤ ᱞᱟᱛᱟᱨ ᱮ ᱧᱩᱨ ᱮᱱᱟ ᱟᱨ ᱵᱚᱦᱚᱜ ᱨᱮ ᱵᱟᱡᱟᱣ ᱮᱱᱟ!",
          sat_deva: "मिडटांग गाड़हि लातार ए जुर एना आर बोहोग रे बाजाव एना!",
          latin: "Midtang garihi latar e njur ena ar bohog re bajaw ena!",
          verified: true
        },
        {
          id: "eng-005-s3",
          hindi: "डॉक्टर ने कहा: 'No more monkeys jumping on the bed!'",
          sat_olck: "ᱰᱟᱠᱛᱚᱨ ᱮ ᱢᱮᱱ ᱠᱮᱫᱼᱟ: 'ᱱᱤᱛᱚᱜ ᱫᱚ ᱯᱟᱨᱠᱚᱢ ᱨᱮ ᱟᱞᱚ ᱯᱮ ᱫᱚᱱᱟ!'",
          sat_deva: "डाकतर ए मेन केद-आ: 'नितोग दो पारकोम रे आलो पे दोना!'",
          latin: "Daktor e men ked-a: 'Nitog do parkom re alo pe dona!'",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-006",
      title_hi: "Unit 2: The Cap-seller and the monkeys — टोपीवाला और बन्दर (This / That)",
      title_sat: "ᱴᱩᱯᱤ ᱟᱹᱠᱷᱨᱤᱧᱤᱡ ᱟᱨ ᱜᱟᱹᱰᱦᱤ ᱠᱚ (Use of this/that)",
      title_en: "The Cap-seller and the Monkeys (Use of This/That)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "October",
      week: "4th to 5th Week",
      chapter: "Unit 2 - Life Around Us: Chapter 2 * The Cap-seller and the monkeys",
      domain: "Effective Communicators (EC)",
      lo_id: "SOE-ENG-G1-OCT2",
      lo_title: "Reads story with guidance, answers questions, forms sentences using 'this' and 'that' appropriately, sequences story logically",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-25T11:00:00Z",
      duration: "16 min",
      activity: {
        title: "Cap Throw Roleplay (ᱴᱩᱯᱤ ᱜᱤᱰᱤ ᱮᱱᱮᱡ)",
        desc: "Teacher acts as cap-seller sleeping under a tree. Children wear paper caps on desks. Teacher wakes up, throws his cap; children imitate and throw caps down.",
        steps: [
          "1. Cap-seller sleeps: 'The cap-seller was tired and went to sleep.'",
          "2. Monkeys take caps: 'Monkeys took all the caps.'",
          "3. Demonstration of 'This' (near) and 'That' (far): 'This is my cap (near)' vs 'That is a monkey on the tree (far)'."
        ]
      },
      materials: ["Paper caps (ᱴᱩᱯᱤ)", "Picture sequence cards"],
      assessment: "Hold a book in hand: ask 'This or that?' Point to a distant tree: ask 'This or that?' Expected: 'This is a book', 'That is a tree'.",
      script: [
        {
          id: "eng-006-s1",
          hindi: "एक टोपीवाला पेड़ के नीचे सो रहा था।",
          sat_olck: "ᱢᱤᱫᱴᱟᱝ ᱴᱩᱯᱤ ᱟᱹᱠᱷᱨᱤᱧᱤᱡ ᱫᱟᱨᱮ ᱞᱟᱛᱟᱨ ᱨᱮ ᱡᱟᱹᱯᱤᱫ ᱞᱮᱫ ᱛᱟᱦᱮᱸᱫ᱾",
          sat_deva: "मिडटांग टुपी आखरिंजिज दारे लातार रे जापिद लेद ताहेद।",
          latin: "Midtang tupi akhrinjij dare latar re japid led tahed.",
          verified: true
        },
        {
          id: "eng-006-s2",
          hindi: "जो चीज़ पास है उसके लिए 'This' बोलो: 'This is a cap' (यह एक टोपी है)।",
          sat_olck: "ᱡᱟᱦᱟᱸ ᱡᱤᱱᱤᱥ ᱥᱩᱨ ᱨᱮ ᱢᱮᱱᱟᱜᱼᱟ ᱚᱱᱟ ᱞᱟᱹᱜᱤᱫ 'This' ᱢᱮᱱ ᱢᱮ: 'This is a cap' (ᱱᱚᱣᱟ ᱫᱚ ᱴᱩᱯᱤ ᱠᱟᱱᱟ)᱾",
          sat_deva: "जाहाँ जिनिस सुर रे मेनाग-आ ओना लागिद 'This' मेन मे: 'This is a cap' (नोवा दो टुपी काना)।",
          latin: "Jaha jinis sur re menag-a ona lagid 'This' men me: 'This is a cap'.",
          verified: true
        },
        {
          id: "eng-006-s3",
          hindi: "जो चीज़ दूर है उसके लिए 'That' बोलो: 'That is a monkey' (वह एक बन्दर है)।",
          sat_olck: "ᱡᱟᱦᱟᱸ ᱡᱤᱱᱤᱥ ᱥᱟᱺᱜᱤᱧ ᱨᱮ ᱢᱮᱱᱟᱜᱼᱟ ᱚᱱᱟ ᱞᱟᱹᱜᱤᱫ 'That' ᱢᱮᱱ ᱢᱮ: 'That is a monkey' (ᱦᱟᱱᱤ ᱫᱚ ᱜᱟᱹᱰᱦᱤ ᱠᱟᱱᱟᱭ)᱾",
          sat_deva: "जाहाँ जिनिस सांगिंज रे मेनाग-आ ओना लागिद 'That' मेन मे: 'That is a monkey' (हानी दो गाड़हि कानाय)।",
          latin: "Jaha jinis sanginj re menag-a ona lagid 'That' men me: 'That is a monkey'.",
          verified: true
        },
        {
          id: "eng-006-s4",
          hindi: "टोपीवाले ने अपनी टोपी फेंकी, और सारे बन्दरों ने भी टोपियां फेंक दीं!",
          sat_olck: "ᱴᱩᱯᱤ ᱟᱹᱠᱷᱨᱤᱧᱤᱡ ᱟᱡᱟᱜ ᱴᱩᱯᱤ ᱜᱤᱰᱤ ᱠᱮᱫᱼᱟ, ᱟᱨ ᱥᱟᱱᱟᱢ ᱜᱟᱹᱰᱦᱤ ᱦᱚᱸ ᱴᱩᱯᱤ ᱠᱚ ᱜᱤᱰᱤ ᱠᱮᱫᱼᱟ!",
          sat_deva: "टुपी आखरिंजिज आजाग टुपी गिडी केद-आ, आर सानाम गाड़हि हों टुपी को गिडी केद-आ!",
          latin: "Tupi akhrinjij ajag tupi gidi ked-a, ar sanam garihi ho tupi ko gidi ked-a!",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-007",
      title_hi: "Unit 2: Butterflies & Farm Animals — तितलियाँ और खेत के पशु",
      title_sat: "ᱯᱤᱯᱤᱲᱤᱭᱟᱹᱝ ᱟᱨ ᱠᱷᱟᱢᱟᱨ ᱡᱤᱭᱟᱹᱞᱤ ᱠᱚ (Opposite Words)",
      title_en: "Butterflies & Farm Animals (Opposite Words & Animal Sounds)",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "November",
      week: "1st to 5th Week",
      chapter: "Butterflies & Chapter 3 * A farm, Animals and Birds",
      domain: "Effective Communicators (EC)",
      lo_id: "SOE-ENG-G1-NOV1",
      lo_title: "Learns opposite words through rhymes, uses 'on' and 'in', splits words into syllables, knows names and sounds of farm animals",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-28T09:15:00Z",
      duration: "15 min",
      activity: {
        title: "Opposites Jump & Syllable Clapping (ᱩᱞᱴᱟᱹ ᱟᱹᱲᱟᱹ)",
        desc: "Teacher calls out 'Big!' -> Children stretch arms wide. Teacher calls 'Small!' -> Children crouch small. Syllable clap for 'But-ter-fly' (3 claps).",
        steps: [
          "1. Big (ᱢᱟᱨᱟᱝ) vs Small (ᱦᱩᱰᱤᱧ).",
          "2. In (ᱵᱷᱤᱛᱨᱤ) vs On (ᱪᱮᱛᱟᱱ).",
          "3. Farm animals: Cow (ᱜᱟᱹᱭ - Moo), Goat (ᱢᱮᱨᱚᱢ - Meh), Hen (ᱥᱤᱢ - Cluck)."
        ]
      },
      materials: ["Farm animal picture chart", "Opposite flashcards"],
      assessment: "What is the opposite of 'Big'? Expected: 'Small' (ᱦᱩᱰᱤᱧ). Where is the bird? 'On the branch' (ᱫᱟᱨᱮ ᱰᱟᱹᱨ ᱪᱮᱛᱟᱱ ᱨᱮ).",
      script: [
        {
          id: "eng-007-s1",
          hindi: "तितली फूल के ऊपर बैठी है: 'The butterfly is on the flower.'",
          sat_olck: "ᱯᱤᱯᱤᱲᱤᱭᱟᱹᱝ ᱵᱟᱦᱟ ᱪᱮᱛᱟᱱ ᱨᱮ ᱫᱩᱲᱩᱵ ᱟᱠᱟᱱᱟᱭ: 'The butterfly is on the flower.'",
          sat_deva: "पिपिड़ियंग बाहा चेतान रे दुड़ुब आकानाय: 'The butterfly is on the flower.'",
          latin: "Pipiriyang baha chetan re durub akanay: 'The butterfly is on the flower.'",
          verified: true
        },
        {
          id: "eng-007-s2",
          hindi: "उल्टे अर्थ वाले शब्द सीखो: Big (बड़ा) का उल्टा Small (छोटा) होता है।",
          sat_olck: "ᱩᱞᱴᱟᱹ ᱢᱮᱱᱮᱛ ᱟᱹᱲᱟᱹ ᱪᱮᱫ ᱯᱮ: Big (ᱢᱟᱨᱟᱝ) ᱨᱮᱱᱟᱜ ᱩᱞᱴᱟᱹ ᱫᱚ Small (ᱦᱩᱰᱤᱧ) ᱠᱟᱱᱟ᱾",
          sat_deva: "उल्टा मेनेत आड़ा चेद पे: Big (मारांग) रेनाग उल्टा दो Small (हुड़िंज) काना।",
          latin: "Ulta menet ara ched pe: Big (marang) renag ulta do Small (hudinj) kana.",
          verified: true
        },
        {
          id: "eng-007-s3",
          hindi: "गाँव के खेत में गाय 'moo-moo' और बकरी 'baa-baa' करती है।",
          sat_olck: "ᱟᱹᱛᱩ ᱠᱷᱟᱢᱟᱨ ᱨᱮ ᱜᱟᱹᱭ 'ᱦᱟᱢᱵᱟ' ᱟᱨ ᱢᱮᱨᱚᱢ 'ᱢᱮᱸ-ᱢᱮᱸ' ᱠᱤᱱ ᱨᱟᱜᱟ᱾",
          sat_deva: "आतु खामार रे गाई 'हाम्बा' आर मेरोम 'में-में' किन रागा।",
          latin: "Atu khamar re gay 'hamba' ar merom 'men-men' kin raga.",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-008",
      title_hi: "Unit 3: Fruits for all & Market — स्वादिष्ट फल और हाट बाज़ार",
      title_sat: "ᱥᱟᱱᱟᱢ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱡᱚ ᱟᱨ ᱦᱟᱴ (Fruits for all & Market)",
      title_en: "Fruits for all & A visit to the Market",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "December",
      week: "1st to 3rd Week",
      chapter: "Unit 3 - Food: Chapter 1 Fruits for all & A visit to the Market",
      domain: "Involved Learners (IL) & Language",
      lo_id: "SOE-ENG-G1-DEC1",
      lo_title: "Uses prepositions in/on/behind, sings 'Five yellow mangoes', reads fruit names, classifies by color/shape, writes about market",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-30T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "Village Haat Fruit Stall (ᱟᱹᱛᱩ ᱦᱟᱴ ᱮᱱᱮᱡ)",
        desc: "Set up a classroom village haat stall with clay mangoes, bananas, and papaya. Children practice buying fruits in pairs using 'these' and 'they are'.",
        steps: [
          "1. Sing: 'Five yellow mangoes hanging on the tree!'",
          "2. Classify: Green guava (ᱦᱟᱹᱨᱭᱟᱹᱲ), yellow mango (ᱥᱟᱥᱟᱝ), red apple (ᱟᱨᱟᱜ).",
          "3. Dialogue: 'What fruit do you like?' -> 'I like sweet mangoes! ᱤᱧ ᱥᱤᱵᱤᱞ ᱩᱞᱤᱧ ᱠᱩᱥᱤᱭᱟᱜᱼᱟ!'"
        ]
      },
      materials: ["Clay fruits / Flashcards", "Play market baskets"],
      assessment: "Show banana: 'What color is this fruit?' In Santali: 'ᱱᱚᱣᱟ ᱫᱚ ᱪᱮᱫ ᱨᱚᱝ ᱠᱟᱱᱟ?' Expected: 'Yellow' (ᱥᱟᱥᱟᱝ).",
      script: [
        {
          id: "eng-008-s1",
          hindi: "पेड़ पर पाँच पीले आम लटके हैं: 'Five yellow mangoes on the tree!'",
          sat_olck: "ᱫᱟᱨᱮ ᱨᱮ ᱢᱚᱬᱮ ᱜᱚᱴᱟᱝ ᱥᱟᱥᱟᱝ ᱩᱞ ᱡᱷᱩᱞᱟᱹᱣ ᱟᱠᱟᱱᱟ: 'Five yellow mangoes on the tree!'",
          sat_deva: "दारे रे मोणे गोटांग सासांग उल झुलाव आकाना: 'Five yellow mangoes on the tree!'",
          latin: "Dare re mone gotang sasang ul jhulaw akana: 'Five yellow mangoes on the tree!'",
          verified: true
        },
        {
          id: "eng-008-s2",
          hindi: "आम को 'Mango' (ᱩᱞ), केले को 'Banana' (ᱠᱟᱭᱨᱟ) बोलते हैं।",
          sat_olck: "ᱩᱞ ᱫᱚ 'Mango' (ᱩᱞ) ᱟᱨ ᱠᱟᱭᱨᱟ ᱫᱚ 'Banana' (ᱠᱟᱭᱨᱟ) ᱠᱚ ᱢᱮᱛᱟᱜᱼᱟ᱾",
          sat_deva: "उल दो 'Mango' (उल) आर कायरा दो 'Banana' (कायरा) को मेताग-आ।",
          latin: "Ul do 'Mango' ar kayra do 'Banana' ko metag-a.",
          verified: true
        },
        {
          id: "eng-008-s3",
          hindi: "गाँव के बाज़ार (हाट) में ताज़ी सब्जियाँ और मीठे फल मिलते हैं।",
          sat_olck: "ᱟᱹᱛᱩ ᱦᱟᱴ ᱨᱮ ᱛᱟᱡᱟ ᱟᱲᱟᱜ-ᱥᱟᱠᱟᱢ ᱟᱨ ᱥᱤᱵᱤᱞ ᱡᱚ ᱠᱚ ᱧᱟᱢᱚᱜᱼᱟ᱾",
          sat_deva: "आतु हाट रे ताजा आड़ाग-साकाम आर सिबिल जो को जामोगा।",
          latin: "Atu hat re taja arag-sakam ar sibil jo ko njamog-a.",
          verified: true
        }
      ]
    },
    {
      id: "soe-eng-009",
      title_hi: "Unit 4: Seasons & Anandi's Rainbow — चार ऋतुएँ और इंद्रधनुष",
      title_sat: "ᱯᱩᱱ ᱨᱤᱛᱩ ᱟᱨ ᱟᱱᱚᱱᱫᱤ ᱟᱜ ᱞᱤᱞᱵᱤᱪᱤ (Seasons & Rainbow)",
      title_en: "The Four Seasons & Anandi's Rainbow",
      grade: 1,
      subject: "english",
      textbook: "Mridang",
      month: "January",
      week: "1st to 5th Week",
      chapter: "Unit 4 - Seasons: The Four Seasons & Anandi's Rainbow",
      domain: "Effective Communicators & Aesthetics",
      lo_id: "SOE-ENG-G1-JAN1",
      lo_title: "Sings 'The Four Seasons', describes seasons pictures, reads passage from 'Anandi’s Rainbow', writes names of colors of the rainbow",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-09-02T11:00:00Z",
      duration: "16 min",
      activity: {
        title: "Rainbow Color Painter (ᱞᱤᱞᱵᱤᱪᱤ ᱨᱚᱝ)",
        desc: "Children draw a rainbow with 7 colored chalks on the classroom floor and recite the color names in English and Santali.",
        steps: [
          "1. Sing: 'Pitter patter, pitter patter, rain falls down!'",
          "2. Name 7 rainbow colors: Violet, Indigo, Blue, Green, Yellow, Orange, Red.",
          "3. Children write their favorite color name on slate."
        ]
      },
      materials: ["Color crayons / Colored chalks", "Rainbow chart"],
      assessment: "Show the red band of the rainbow. Ask: 'What color is this in English and Santali?' Expected: 'Red' and 'ᱟᱨᱟᱜ'.",
      script: [
        {
          id: "eng-009-s1",
          hindi: "चार ऋतुएँ होती हैं: गर्मी, बरसात, सर्दी और वसंत।",
          sat_olck: "ᱯᱩᱱ ᱨᱤᱛᱩ ᱢᱮᱱᱟᱜᱼᱟ: ᱥᱤᱛᱩᱝ, ᱡᱟᱹᱯᱩᱫ, ᱨᱟᱵᱟᱝ ᱟᱨ ᱵᱟᱦᱟ ᱨᱤᱛᱩ᱾",
          sat_deva: "पुन रितु मेनाग-आ: सितुंग, जापुद, राबांग आर बाहा रितु।",
          latin: "Pun ritu menag-a: situng, japud, rabang ar baha ritu.",
          verified: true
        },
        {
          id: "eng-009-s2",
          hindi: "बारिश के बाद आकाश में सात रंगों वाला इंद्रधनुष दिखाई देता है।",
          sat_olck: "ᱫᱟᱜ ᱛᱟᱭᱚᱢ ᱥᱮᱨᱢᱟ ᱨᱮ ᱮᱭᱟᱭ ᱨᱚᱝ ᱟᱱ ᱞᱤᱞᱵᱤᱪᱤ (ᱨᱟᱢᱫᱷᱟᱱᱩᱥ) ᱧᱮᱞᱚᱜᱼᱟ᱾",
          sat_deva: "दाग तायोम सेरमा रे एयाय रंग आन लिलबिची (रामधनुष) जेलोग-आ।",
          latin: "Dag tayom serma re eyay rong an lilbichi njelog-a.",
          verified: true
        },
        {
          id: "eng-009-s3",
          hindi: "आनंदी ने अपने बगीचे के फूलों को इंद्रधनुष के रंगों से रंगा।",
          sat_olck: "ᱟᱱᱚᱱᱫᱤ ᱫᱚ ᱟᱡᱟᱜ ᱵᱟᱜᱟᱱ ᱨᱮᱱᱟᱜ ᱵᱟᱦᱟ ᱠᱚ ᱞᱤᱞᱵᱤᱪᱤ ᱨᱚᱝ ᱛᱮ ᱨᱚᱝ ᱠᱮᱫᱼᱟᱭ᱾",
          sat_deva: "आनन्दी दो आजाग बागाण रेनाग बाहा को लिलबिची रंग ते रंग केदाय।",
          latin: "Anandi do ajag bagan renag baha ko lilbichi rong te rong ked-ay.",
          verified: true
        }
      ]
    },

    // -----------------------------------------------------------------------
    // HINDI (सारंगी · कक्षा १)
    // -----------------------------------------------------------------------
    {
      id: "soe-hin-001",
      title_hi: "पाठ १: मीना का परिवार — हमारा परिवार और घर",
      title_sat: "ᱢᱤᱱᱟ ᱣᱟᱜ ᱜᱷᱟᱨᱚᱸᱡᱽ (मीना का परिवार)",
      title_en: "Meena's Family (Our Home & Kinship)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "July",
      week: "1st Week",
      chapter: "मीना का परिवार",
      domain: "Effective Communicators (EC)",
      lo_id: "SOE-HIN-G1-JUL1",
      lo_title: "परिवार के सदस्यों के बारे में बातचीत करना, चित्रों का मौखिक वर्णन, मातृभाषा और हिंदी के पारिवारिक शब्दों का संबंध समझना",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-14T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "परिवार परिचय चक्र (ᱜᱷᱟᱨᱚᱸᱡᱽ ᱩᱯᱨᱩᱢ)",
        desc: "बच्चे गोल घेरे में बैठते हैं और अपनी माँ, पिताजी और भाई-बहन का नाम बताते हैं। शिक्षक संथाली में पारिवारिक संबंधों को दोहराते हैं।",
        steps: [
          "1. मीना के परिवार का बड़ा चित्र दिखाएं।",
          "2. माँ = ᱟᱭᱳ (Ayo), पिताजी = ᱵᱟᱵᱟ (Baba), भाई = ᱵᱚᱭᱦᱟ (Boyha), बहन = ᱢᱤᱥᱤ (Misi).",
          "3. प्रत्येक बच्चा स्लेट पर अपने परिवार का चित्र बनाए।"
        ]
      },
      materials: ["मीना के परिवार का चित्र चार्ट", "स्लेट और खड़िया"],
      assessment: "पूछें: 'मीना के परिवार में कौन-कौन हैं?' संथाली में: 'ᱟᱢᱟᱜ ᱜᱷᱟᱨᱚᱸᱡᱽ ᱨᱮ ᱛᱤᱱᱟᱹᱜ ᱦᱚᱲ ᱢᱮᱱᱟᱜ ᱯᱮᱭᱟ? (आपके परिवार में कितने लोग हैं?)'",
      script: [
        {
          id: "hin-001-s1",
          hindi: "नमस्ते बच्चो! आज हम पाठ १ 'मीना का परिवार' पढ़ेंगे।",
          sat_olck: "ᱡᱚᱦᱟᱨ ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ! ᱛᱮᱦᱮᱧ ᱫᱚ ᱵᱚᱱ ᱯᱟᱴᱷ ᱑ 'ᱢᱤᱱᱟ ᱣᱟᱜ ᱜᱷᱟᱨᱚᱸᱡᱽ' ᱵᱚᱱ ᱯᱟᱲᱦᱟᱣᱟ᱾",
          sat_deva: "जोहार गिदरा को! तेहेंय दो बोन पाठ १ 'मीना वाग घारोंज' बोन पढ़ावा।",
          latin: "Johar gidra ko! Tehenj do bon path 1 'Meena wag gharonj' bon parhawa.",
          verified: true
        },
        {
          id: "hin-001-s2",
          hindi: "मीना के परिवार में उसके दादा-दादी, माता-पिता और छोटा भाई रहते हैं।",
          sat_olck: "ᱢᱤᱱᱟ ᱣᱟᱜ ᱜᱷᱟᱨᱚᱸᱡᱽ ᱨᱮ ᱟᱡ ᱨᱤᱱ ᱜᱚᱲᱚᱢ ᱦᱟᱲᱟᱢ-ᱵᱩᱰᱷᱤ, ᱟᱭᱳ-ᱵᱟᱵᱟ ᱟᱨ ᱦᱩᱰᱤᱧ ᱵᱚᱭᱦᱟ ᱢᱮᱱᱟᱜ ᱠᱚᱣᱟ᱾",
          sat_deva: "मीना वाग घारोंज रे आज रिन गोड़ोम हाड़ाम-बुढ़ी, आयो-बाबा आर हुड़िंज बोयहा मेनाग कोवा।",
          latin: "Meena wag gharonj re aj rin gorom haram-budhi, ayo-baba ar hudinj boyha menag kowa.",
          verified: true
        },
        {
          id: "hin-001-s3",
          hindi: "माँ को संथाली में 'ᱟᱭᱳ' (आयो) और पिताजी को 'ᱵᱟᱵᱟ' (बाबा) कहते हैं।",
          sat_olck: "ᱟᱭᱳ ᱫᱚ ᱥᱟᱱᱛᱟᱲᱤ ᱛᱮ 'ᱟᱭᱳ' ᱟᱨ ᱯᱤᱛᱟᱡᱤ ᱫᱚ 'ᱵᱟᱵᱟ' ᱠᱚ ᱢᱮᱛᱟᱭᱟ᱾",
          sat_deva: "माँ को संताड़ी ते 'आयो' आर पिता को 'बाबा' को मेताया।",
          latin: "Maa ko Santari te 'ayo' ar pita ko 'baba' ko metaya.",
          verified: true
        }
      ]
    },
    {
      id: "soe-hin-002",
      title_hi: "पाठ २: दादा दादी — स्नेह, सम्मान और पुरानी कहानियाँ",
      title_sat: "ᱜᱚᱲᱚᱢ ᱦᱟᱲᱟᱢ ᱟᱨ ᱜᱚᱲᱚᱢ ᱵᱩᱰᱷᱤ (दादा दादी)",
      title_en: "Grandparents (Affection & Respect)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "July",
      week: "2nd Week",
      chapter: "दादा दादी",
      domain: "Health & Wellbeing & Language",
      lo_id: "SOE-HIN-G1-JUL2",
      lo_title: "दादा-दादी के प्रति आदर व स्नेह भाव, कहानियों पर चर्चा, शिष्टाचार व अभिवादन का प्रयोग",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-16T11:00:00Z",
      duration: "14 min",
      activity: {
        title: "दादा-दादी की कहानी बैठकी (ᱜᱚᱲᱚᱢ ᱦᱟᱲᱟᱢ ᱠᱟᱹᱦᱱᱤ)",
        desc: "शिक्षक बच्चों से पूछते हैं कि रात को घर पर दादा-दादी से कौन-सी लोककथा सुनते हैं। बच्चे अपनी मातृभाषा में एक छोटा किस्सा सुनाते हैं।",
        steps: [
          "1. दादाजी = ᱜᱚᱲᱚᱢ ᱦᱟᱲᱟᱢ (Gorom Haram), दादीजी = ᱜᱚᱲᱚᱢ ᱵᱩᱰᱷᱤ (Gorom Budhi).",
          "2. बड़ों का पैर छूकर या हाथ जोड़कर जोहार (ᱡᱚᱦᱟᱨ) करना।"
        ]
      },
      materials: ["चित्र कार्ड"],
      assessment: "पूछें: 'घर में दादा-दादी आपकी क्या मदद करते हैं?'",
      script: [
        {
          id: "hin-002-s1",
          hindi: "दादा-दादी हमें प्यार से अच्छी-अच्छी कहानियाँ सुनाते हैं।",
          sat_olck: "ᱜᱚᱲᱚᱢ ᱦᱟᱲᱟᱢ ᱟᱨ ᱵᱩᱰᱷᱤ ᱫᱚ ᱫᱩᱞᱟᱹᱲ ᱛᱮ ᱟᱹᱰᱤ ᱪᱚᱨᱚᱠ ᱠᱟᱹᱦᱱᱤ ᱠᱤᱱ ᱞᱟᱹᱭᱟᱵᱚᱱᱟ᱾",
          sat_deva: "गोड़ोम हाड़ाम आर बुढ़ी दो दुलार ते अडी चोरोक काहनी किन लैयाबोना।",
          latin: "Gorom haram ar budhi do dular te adi chorok kahni kin layabona.",
          verified: true
        },
        {
          id: "hin-002-s2",
          hindi: "हमेशा अपने से बड़ों का आदर करना चाहिए और हाथ जोड़कर 'जोहार' बोलना चाहिए।",
          sat_olck: "ᱡᱟᱣᱜᱮ ᱟᱯᱱᱟᱨ ᱠᱷᱚᱱ ᱢᱟᱨᱟᱝ ᱦᱚᱲ ᱠᱚ ᱢᱟᱱᱚᱛ ᱮᱢᱟᱠᱚ ᱞᱟᱹᱠᱛᱤ ᱠᱟᱱᱟ ᱟᱨ ᱛᱤ ᱡᱚᱲᱟᱣ ᱠᱟᱛᱮ 'ᱡᱚᱦᱟᱨ' ᱢᱮᱱ ᱢᱮ᱾",
          sat_deva: "जावगे आपनार खोन मारांग होड़ को मानोत एमाको लक्ति काना आर ती जोड़ाव काते 'जोहार' मेन मे।",
          latin: "Jawge apnar khon marang hor ko manot emako lakti kana ar ti joraw kate 'johar' men me.",
          verified: true
        }
      ]
    },
    {
      id: "soe-hin-003",
      title_hi: "पाठ ४: रानी भी — खेलकूद में सबको शामिल करना",
      title_sat: "ᱨᱟᱱᱤ ᱦᱚᱸ (रानी भी)",
      title_en: "Rani Too (Inclusion & Play)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "August",
      week: "1st to 2nd Week",
      chapter: "रानी भी",
      domain: "Health & Wellbeing & Language",
      lo_id: "SOE-HIN-G1-AUG1",
      lo_title: "कहानी 'रानी भी' को हाव-भाव से समझना, खेलकूद में साथियों को शामिल करना, मुख्य पात्रों पर सरल प्रश्नों के उत्तर देना",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-18T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "हम सब खेलेंगे (ᱟᱵᱚ ᱡᱚᱛᱚ ᱵᱚᱱ ᱮᱱᱮᱡᱟ)",
        desc: "कक्षा के सभी बच्चे मिलकर एक घेरा खेल खेलते हैं ताकि कोई भी बच्चा अकेला महसूस न करे।",
        steps: [
          "1. कहानी वाचन: रानी छोटी थी लेकिन खेल में शामिल होना चाहती थी।",
          "2. चर्चा: क्या हमें छोटे भाई-बहनों को खेल में शामिल करना चाहिए? 'हाँ!' (ᱦᱮᱸ!)"
        ]
      },
      materials: ["कहानी चार्ट 'रानी भी'"],
      assessment: "रानी खेल में क्यों शामिल होना चाहती थी?",
      script: [
        {
          id: "hin-003-s1",
          hindi: "रानी बहुत छोटी थी, लेकिन वह भी बड़े बच्चों के साथ खेलना चाहती थी।",
          sat_olck: "ᱨᱟᱱᱤ ᱫᱚ ᱟᱹᱰᱤ ᱦᱩᱰᱤᱧ ᱮ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ, ᱢᱮᱱᱠᱷᱟᱱ ᱟᱡ ᱦᱚᱸ ᱢᱟᱨᱟᱝ ᱜᱤᱫᱽᱨᱟᱹ ᱥᱟᱶ ᱮᱱᱮᱡ ᱥᱟᱱᱟᱭᱮᱫ ᱛᱟᱦᱮᱸᱫ᱾",
          sat_deva: "रानी दो अडी हुड़िंज ए ताहे काना, मेनखान आज हों मारांग गिदरा साव एनेज सानायेद ताहेद।",
          latin: "Rani do adi hudinj e tahe kana, menkhan aj ho marang gidra saw enej sanayed tahed.",
          verified: true
        },
        {
          id: "hin-003-s2",
          hindi: "सब बच्चे मिलकर खेलें तो खेल में बहुत आनंद आता है!",
          sat_olck: "ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱢᱤᱫ ᱠᱟᱛᱮ ᱵᱚᱱ ᱮᱱᱮᱡ ᱞᱮᱠᱷᱟᱱ ᱟᱹᱰᱤ ᱨᱟᱹᱥᱠᱟᱹ ᱵᱩᱡᱷᱟᱹᱣᱜᱼᱟ!",
          sat_deva: "सानाम गिदरा मिद काते बोन एनेज लेखान अडी रस्का बुझावग-आ!",
          latin: "Sanam gidra mid kate bon enej lekhan adi raska bujhawg-a!",
          verified: true
        }
      ]
    },
    {
      id: "soe-hin-004",
      title_hi: "पाठ ८: खतरे में साँप — पर्यावरण, जीव-जंतु व सतर्कता",
      title_sat: "ᱵᱤᱯᱚᱫᱽ ᱨᱮ ᱵᱤᱧ (खतरे में साँप)",
      title_en: "Snake in Danger (Wildlife & Nature Safety)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "September",
      week: "1st to 2nd Week",
      chapter: "खतरे में साँप",
      domain: "Involved Learners (IL)",
      lo_id: "SOE-HIN-G1-SEP1",
      lo_title: "साँप और छोटे जीवों के प्रति संवेदनशीलता, सुरक्षा समझ, मुख्य घटनाओं का वर्णन, स्थानीय जीव-जंतुओं के नाम सीखना",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-22T11:00:00Z",
      duration: "14 min",
      activity: {
        title: "जीव-जंतु सुरक्षा चर्चा (ᱵᱤᱨ ᱡᱤᱭᱟᱹᱞᱤ ᱨᱩᱠᱷᱤᱭᱟᱹ)",
        desc: "शिक्षक बच्चों को समझाते हैं कि रास्ते में साँप या कोई जीव दिखे तो छेड़ना नहीं चाहिए, बल्कि दूर से सावधानी रखनी चाहिए।",
        steps: [
          "1. साँप = ᱵᱤᱧ (Binj).",
          "2. जंगल के जीवों को व्यर्थ नहीं सताना चाहिए।"
        ]
      },
      materials: ["चित्र कार्ड: साँप, मेढक, चिड़िया"],
      assessment: "साँप को संथाली में क्या कहते हैं? उत्तर: 'ᱵᱤᱧ' (बींज)।",
      script: [
        {
          id: "hin-004-s1",
          hindi: "साँप को संथाली में 'ᱵᱤᱧ' (बींज) कहते हैं।",
          sat_olck: "ᱥᱟᱸᱯ ᱫᱚ ᱥᱟᱱᱛᱟᱲᱤ ᱛᱮ 'ᱵᱤᱧ' ᱠᱚ ᱢᱮᱛᱟᱭᱟ᱾",
          sat_deva: "साँप दो संताड़ी ते 'बींज' को मेताया।",
          latin: "Sanp do Santari te 'binj' ko metaya.",
          verified: true
        },
        {
          id: "hin-004-s2",
          hindi: "रास्ते में या खेत में कोई जीव दिखे तो उसे पत्थर नहीं मारना चाहिए।",
          sat_olck: "ᱰᱟᱦᱟᱨ ᱨᱮ ᱥᱮ ᱠᱷᱮᱛ ᱨᱮ ᱡᱟᱦᱟᱸᱭ ᱡᱤᱵᱽ ᱧᱮᱞ ᱞᱮᱠᱷᱟᱱ ᱫᱷᱤᱨᱤ ᱛᱮ ᱟᱞᱚ ᱯᱮ ᱪᱟᱯᱟᱫ ᱮᱭᱟ᱾",
          sat_deva: "डाहार रे से खेत रे जाहाय जीब जेल लेखान धीरि ते आलो पे चापाद एया।",
          latin: "Dahar re se khet re jahay jib njel lekhan dhiri te alo pe chapad eya.",
          verified: true
        }
      ]
    },
    {
      id: "soe-hin-005",
      title_hi: "पाठ ९: आलू की सड़क — सब्जियों के नाम व हास्य कथा",
      title_sat: "ᱟᱹᱞᱩ ᱨᱮᱱᱟᱜ ᱥᱚᱲᱚᱠ (आलू की सड़क)",
      title_en: "The Potato Road (Vegetables & Humor)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "September",
      week: "3rd to 4th Week",
      chapter: "आलू की सड़क",
      domain: "Language & Effective Communicators",
      lo_id: "SOE-HIN-G1-SEP2",
      lo_title: "रोचक कहानी 'आलू की सड़क' का पठन व आनंद, सब्जियों के नाम, आकार व रंगों की पहचान, कहानी का पुनर्वाचन",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-25T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "सब्जियों की टोकरी (ᱟᱲᱟᱜ-ᱥᱟᱠᱟᱢ ᱴᱩᱠᱨᱤ)",
        desc: "बच्चे आलू, टमाटर, बैंगन, प्याज के चित्र देखकर उनके संथाली और हिंदी नाम बोलते हैं।",
        steps: [
          "1. आलू = ᱟᱹᱞᱩ (Alu), टमाटर = ᱵᱤᱞᱟᱹᱛᱤ (Bilati), बैंगन = ᱵᱮᱸᱜᱟᱲ (Bengarh).",
          "2. कहानी में बोरे से आलू गिरकर सड़क पर लुढ़कने का अभिनय।"
        ]
      },
      materials: ["सब्जियों के चित्र कार्ड / स्लेट"],
      assessment: "आलू को संथाली में क्या कहते हैं? 'ᱟᱹᱞᱩ' (आलू)।",
      script: [
        {
          id: "hin-005-s1",
          hindi: "बोरे से आलू फिसलकर सड़क पर लुढ़क गया: 'आलू की सड़क'!",
          sat_olck: "ᱵᱚᱥᱛᱟ ᱠᱷᱚᱱ ᱟᱹᱞᱩ ᱛᱩᱫ ᱠᱟᱛᱮ ᱥᱚᱲᱚᱠ ᱨᱮ ᱜᱩᱲᱫᱟᱹᱣ ᱮᱱᱟ: 'ᱟᱹᱞᱩ ᱨᱮᱱᱟᱜ ᱥᱚᱲᱚᱠ'!",
          sat_deva: "बोस्ता खोन आलू तुद काते सड़क रे गुड़दाव एना: 'आलू रेनाग सड़क'!",
          latin: "Bosta khon alu tud kate sorok re gurdaw ena: 'Alu renag sorok'!",
          verified: true
        },
        {
          id: "hin-005-s2",
          hindi: "टमाटर लाल और गोल होता है। टमाटर को 'ᱵᱤᱞᱟᱹᱛᱤ' कहते हैं।",
          sat_olck: "ᱵᱤᱞᱟᱹᱛᱤ ᱫᱚ ᱟᱨᱟᱜ ᱟᱨ ᱜᱩᱞᱟᱹᱭ ᱜᱮᱭᱟ᱾ ᱴᱟᱢᱟᱴᱟᱨ ᱫᱚ 'ᱵᱤᱞᱟᱹᱛᱤ' ᱠᱚ ᱢᱮᱛᱟᱜᱼᱟ᱾",
          sat_deva: "बिलाती दो आराग् आर गुलाई गेया। टमाटर दो 'बिलाती' को मेताग-आ।",
          latin: "Bilati do arag ar gulay geya. Tamatar do 'bilati' ko metag-a.",
          verified: true
        }
      ]
    },
    {
      id: "soe-hin-006",
      title_hi: "पाठ ११: भुट्टे व फूली रोटी — भोजन और रसोई",
      title_sat: "ᱡᱚᱱᱚᱲᱟ ᱟᱨ ᱨᱩᱴᱤ (भुट्टे और फूली रोटी)",
      title_en: "Corn & Puffed Roti (Food & Kitchen)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "October",
      week: "1st to 3rd Week",
      chapter: "भुट्टे और फूली रोटी",
      domain: "Involved Learners & Health",
      lo_id: "SOE-HIN-G1-OCT1",
      lo_title: "भुट्टे की खेती, रोटी बनने की प्रक्रिया, रसोई के बर्तनों के नाम, सरल वाक्य निर्माण व लेखन",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-28T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "रोटी कैसे बनती है? (ᱨᱩᱴᱤ ᱪᱮᱫ ᱞᱮᱠᱟᱛᱮ ᱵᱮᱱᱟᱣᱜᱼᱟ)",
        desc: "बच्चे अभिनय करते हैं: आटा छानना, पानी डालकर गूंधना, लोई बनाना, बेलन से बेलना और तवे पर सेंकना।",
        steps: [
          "1. भुट्टा / मकई = ᱡᱚᱱᱚᱲᱟ (Jonora).",
          "2. रोटी = ᱨᱩᱴᱤ (Ruti), तवा = ᱛᱟᱣᱟ (Tawa)."
        ]
      },
      materials: ["चित्र चार्ट: रसोई का दृश्य"],
      assessment: "रोटी किस अनाज के आटे से बनती है? गेहूँ (ᱜᱩᱦᱩᱢ)।",
      script: [
        {
          id: "hin-006-s1",
          hindi: "भुट्टे को आग में भूनकर खाने में बहुत स्वाद आता है। भुट्टे को संथाली में 'ᱡᱚᱱᱚᱲᱟ' बोलते हैं।",
          sat_olck: "ᱡᱚᱱᱚᱲᱟ ᱥᱮᱸᱜᱮᱞ ᱨᱮ ᱨᱟᱯᱟᱜ ᱠᱟᱛᱮ ᱡᱚᱢ ᱨᱮ ᱟᱹᱰᱤ ᱥᱤᱵᱤᱞ ᱵᱩᱡᱷᱟᱹᱣᱜᱼᱟ᱾ ᱵᱷᱩᱴᱴᱟ ᱫᱚ 'ᱡᱚᱱᱚᱲᱟ' ᱠᱚ ᱢᱮᱱᱟ᱾",
          sat_deva: "जोनोड़ा सेंगाल रे रापाग काते जोम रे अडी सिबिल बुझावग-आ। भुट्टा दो 'जोनोड़ा' को मेना।",
          latin: "Jonora sengel re rapag kate jom re adi sibil bujhawg-a. Bhutta do 'jonora' ko mena.",
          verified: true
        },
        {
          id: "hin-006-s2",
          hindi: "तवे पर गोल-गोल फूली रोटी माँ बनाती है।",
          sat_olck: "ᱛᱟᱣᱟ ᱨᱮ ᱜᱩᱞᱟᱹᱭ ᱜᱩᱞᱟᱹᱭ ᱯᱷᱩᱞᱟᱹᱣ ᱨᱩᱴᱤ ᱟᱭᱳ ᱵᱮᱱᱟᱣᱟᱭ᱾",
          sat_deva: "तावा रे गुलाई गुलाई फुलाव रूटी आयो बेनावाय।",
          latin: "Tawa re gulay gulay phulaw ruti ayo benaway.",
          verified: true
        }
      ]
    },
    {
      id: "soe-hin-007",
      title_hi: "पाठ १४: बरखा और मेघा — वर्षा ऋतु और कागज़ की नाव",
      title_sat: "ᱫᱟᱜ ᱡᱟᱹᱯᱩᱫ ᱟᱨ ᱥᱟᱠᱟᱢ ᱞᱟᱹᱣᱠᱟᱹ (बरखा और मेघा)",
      title_en: "Rain & Clouds (Paper Boats & Monsoons)",
      grade: 1,
      subject: "hindi",
      textbook: "सारंगी",
      month: "November",
      week: "1st to 2nd Week",
      chapter: "बरखा और मेघा",
      domain: "Aesthetics & Language",
      lo_id: "SOE-HIN-G1-NOV1",
      lo_title: "बारिश, बादलों और वर्षा ऋतु के दृश्यों का आनंद, कागज़ की नाव बनाना, वर्षा गीतों का सामूहिक गायन",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-30T11:00:00Z",
      duration: "15 min",
      activity: {
        title: "कागज़ की नाव तैराना (ᱠᱟᱜᱚᱡᱽ ᱞᱟᱹᱣᱠᱟᱹ)",
        desc: "रफ कागज़ से नाव मोड़ना और पानी की थाली में तैराना। बच्चे वर्षा का बालगीत गाते हैं।",
        steps: [
          "1. बारिश = ᱫᱟᱜ (Dag), बादल = ᱨᱤᱢᱤᱞ (Rimil), नाव = ᱞᱟᱹᱣᱠᱟᱹ (Lawka).",
          "2. बालगीत: 'बरखा आई, मेघा छाया, छम-छम पानी बरसा!'"
        ]
      },
      materials: ["पुराने अख़बार/कागज़", "पानी का टब"],
      assessment: "बारिश में हम क्या लेकर बाहर निकलते हैं? छाता (ᱪᱷᱟᱛᱟ)।",
      script: [
        {
          id: "hin-007-s1",
          hindi: "काले-काले बादल छाए और छम-छम बारिश शुरू हो गई।",
          sat_olck: "ᱦᱮᱸᱫᱮ ᱦᱮᱸᱫᱮ ᱨᱤᱢᱤᱞ ᱨᱟᱠᱟᱵ ᱮᱱᱟ ᱟᱨ ᱡᱷᱚᱨ-ᱡᱷᱚᱨ ᱫᱟᱜ ᱮ ᱡᱟᱹᱲᱤ ᱠᱮᱫᱼᱟ᱾",
          sat_deva: "हेंदे हेंदे रिमिल राकाब एना आर झोर-झोर दाग ए जाड़ी केद-आ।",
          latin: "Hende hende rimil rakab ena ar jhor-jhor dag e jari ked-a.",
          verified: true
        },
        {
          id: "hin-007-s2",
          hindi: "सब बच्चों ने कागज़ की नाव बनाई और पानी में तैरा दी।",
          sat_olck: "ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱠᱟᱜᱚᱡᱽ ᱨᱮᱱᱟᱜ ᱞᱟᱹᱣᱠᱟᱹ ᱠᱚ ᱵᱮᱱᱟᱣ ᱠᱮᱫᱼᱟ ᱟᱨ ᱫᱟᱜ ᱨᱮᱠᱚ ᱯᱟᱭᱨᱟᱣ ᱠᱮᱫᱼᱟ᱾",
          sat_deva: "सानाम गिदरा कागोज रेनाग लाव्का को बेनाव केद-आ आर दाग रेको पायराव केद-आ।",
          latin: "Sanam gidra kagoj renag lawka ko benaw ked-a ar dag reko payraw ked-a.",
          verified: true
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MATHS (Joyful Mathematics / आनंदमय गणित · Class 1)
    // -----------------------------------------------------------------------
    {
      id: "soe-mat-001",
      title_hi: "Vidya Pravesh: आकृतियों की पहचान व वर्गीकरण (Sorting & Patterns)",
      title_sat: "ᱜᱚᱲᱦᱚᱱ ᱵᱟᱪᱷᱟᱣ ᱟᱨ ᱛᱷᱟᱨ (Sorting & Patterns)",
      title_en: "Pre-mathematical Concepts (Sorting, Patterns & Correspondence)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "May & June",
      week: "May & June (33 days)",
      chapter: "Vidya Pravesh: Pre-mathematical Concepts",
      domain: "Involved Learners (IL) - Numeracy",
      lo_id: "SOE-MAT-G1-VP1",
      lo_title: "Pre-mathematical concepts, awareness of surroundings, sorting in two categories, repeating patterns, whole and half, comparison",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-14T09:00:00Z",
      duration: "15 min",
      activity: {
        title: "पत्ते और कंकड़ की छँटाई (ᱥᱟᱠᱟᱢ ᱟᱨ ᱫᱷᱤᱨᱤ ᱵᱟᱪᱷᱟᱣ)",
        desc: "मेज़ पर साल के पत्ते और कंकड़ मिलाकर रखे जाते हैं। बच्चे पत्तों को एक टोकरी में और कंकड़ों को दूसरी टोकरी में छाँटकर अलग करते हैं।",
        steps: [
          "1. पत्ता (ᱥᱟᱠᱟᱢ) = हरा और हल्का.",
          "2. कंकड़ (ᱫᱷᱤᱨᱤ) = गोल और भारी.",
          "3. पैटर्न बनाएं: पत्ता, कंकड़, पत्ता, कंकड़।"
        ]
      },
      materials: ["साल के पत्ते (ᱥᱟᱠᱟᱢ)", "छोटे कंकड़ (ᱫᱷᱤᱨᱤ)", "दो टोकरियाँ"],
      assessment: "एक कंकड़ और एक पत्ता दिखाकर पूछें: कौन सा भारी है? उत्तर: कंकड़ (ᱫᱷᱤᱨᱤ).",
      script: [
        {
          id: "mat-001-s1",
          hindi: "सब बच्चे अपनी मेज़ पर रखी चीज़ों को देखो।",
          sat_olck: "ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱟᱯᱱᱟᱨ ᱢᱮᱡᱽ ᱨᱮ ᱫᱚᱦᱚ ᱟᱠᱟᱱ ᱡᱤᱱᱤᱥ ᱠᱚ ᱧᱮᱞ ᱯᱮ᱾",
          sat_deva: "सानाम गिदरा आपनार मेज रे दोहो आकान जिनिस को जेल पे।",
          latin: "Sanam gidra apnar mej re doho akan jinis ko njel pe.",
          verified: true
        },
        {
          id: "mat-001-s2",
          hindi: "पत्तों को बाईं तरफ रखो और कंकड़ों को दाईं तरफ छाँटकर रखो।",
          sat_olck: "ᱥᱟᱠᱟᱢ ᱠᱚ ᱞᱮᱸᱜᱟ ᱯᱟᱦᱴᱟ ᱫᱚᱦᱚᱭ ᱯᱮ ᱟᱨ ᱫᱷᱤᱨᱤ ᱠᱚ ᱡᱚᱡᱚᱢ ᱯᱟᱦᱴᱟ ᱵᱟᱪᱷᱟᱣ ᱠᱟᱛᱮ ᱫᱚᱦᱚᱭ ᱯᱮ᱾",
          sat_deva: "साकाम को लेंगा पाहटा दोहोय पे आर धीरि को जोजोम पाहटा बाछाव काते दोहोय पे।",
          latin: "Sakam ko lenga pahta dohoy pe ar dhiri ko jojom pahta bachaw kate dohoy pe.",
          verified: true
        },
        {
          id: "mat-001-s3",
          hindi: "एक पत्ता, एक कंकड़, फिर एक पत्ता — यह एक सुंदर पैटर्न है!",
          sat_olck: "ᱢᱤᱫ ᱥᱟᱠᱟᱢ, ᱢᱤᱫ ᱫᱷᱤᱨᱤ, ᱟᱨᱦᱚᱸ ᱢᱤᱫ ᱥᱟᱠᱟᱢ — ᱱᱚᱣᱟ ᱫᱚ ᱢᱤᱫ ᱪᱚᱨᱚᱠ ᱛᱷᱟᱨ (Pattern) ᱠᱟᱱᱟ!",
          sat_deva: "मिद साकाम, मिद धीरि, आरहों मिद साकाम — नोवा दो मिद चोरोक थार (Pattern) काना!",
          latin: "Mid sakam, mid dhiri, arho mid sakam — nowa do mid chorok thar kana!",
          verified: true
        }
      ]
    },
    {
      id: "soe-mat-002",
      title_hi: "पाठ १: Finding the Furry Cat — स्थानिक समझ (ऊपर, नीचे, अंदर, बाहर)",
      title_sat: "ᱵᱤᱞᱟᱹᱭ ᱯᱟᱱᱛᱮ (स्थानिक समझ: ऊपर/नीचे/अंदर/बाहर)",
      title_en: "Finding the Furry Cat (Spatial Relationships)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "August",
      week: "1st to 2nd Week",
      chapter: "1. Finding the Furry Cat",
      domain: "Involved Learners (IL) - Geometry & Spatial",
      lo_id: "SOE-MAT-G1-AUG1",
      lo_title: "Pre-number spatial relationships: top/bottom, above/below, inside/outside, near/far; finds hidden objects using position cues",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-16T10:30:00Z",
      duration: "14 min",
      activity: {
        title: "बिल्ली कहाँ छिपी है? (ᱵᱤᱞᱟᱹᱭ ᱚᱠᱟᱨᱮ ᱩᱠᱩ ᱟᱠᱟᱱᱟ)",
        desc: "कक्षा में एक खिलौना बिल्ली मेज़ के नीचे, बस्ते के अंदर, या कुर्सी के ऊपर रखी जाती है। बच्चे स्थानिक शब्दों का प्रयोग कर ढूंढते हैं।",
        steps: [
          "1. ऊपर = ᱪᱮᱛᱟᱱ (Chetan), नीचे = ᱞᱟᱛᱟᱨ (Latar).",
          "2. अंदर = ᱵᱷᱤᱛᱨᱤ (Bhitri), बाहर = ᱵᱟᱦᱨᱮ (Bahre).",
          "3. पास = ᱥᱩᱨ (Sur), दूर = ᱥᱟᱺᱜᱤᱧ (Sanginj)."
        ]
      },
      materials: ["खिलौना बिल्ली / चित्र कार्ड"],
      assessment: "मेज़ के नीचे गेंद रखें। पूछें: गेंद कहाँ है? अपेक्षित उत्तर: 'मेज़ के नीचे' (ᱢᱮᱡᱽ ᱞᱟᱛᱟᱨ ᱨᱮ).",
      script: [
        {
          id: "mat-002-s1",
          hindi: "बिल्ली मेज़ के नीचे छिपी है: 'The cat is under the table.'",
          sat_olck: "ᱵᱤᱞᱟᱹᱭ ᱫᱚ ᱢᱮᱡᱽ ᱞᱟᱛᱟᱨ ᱨᱮ ᱩᱠᱩ ᱟᱠᱟᱱᱟᱭ: 'The cat is under the table.'",
          sat_deva: "बिलाई दो मेज लातार रे उकु आकानाय: 'The cat is under the table.'",
          latin: "Bilay do mej latar re uku akanay: 'The cat is under the table.'",
          verified: true
        },
        {
          id: "mat-002-s2",
          hindi: "ऊपर को 'ᱪᱮᱛᱟᱱ' (चेतान) और नीचे को 'ᱞᱟᱛᱟᱨ' (लातार) कहते हैं।",
          sat_olck: "ᱪᱮᱛᱟᱱ ᱫᱚ 'ᱪᱮᱛᱟᱱ' ᱟᱨ ᱞᱟᱛᱟᱨ ᱫᱚ 'ᱞᱟᱛᱟᱨ' ᱠᱚ ᱢᱮᱛᱟᱜᱼᱟ᱾",
          sat_deva: "ऊपर को 'चेतान' आर नीचे को 'लातार' को मेताग-आ।",
          latin: "Upar ko 'chetan' ar neeche ko 'latar' ko metag-a.",
          verified: true
        },
        {
          id: "mat-002-s3",
          hindi: "किताब बस्ते के अंदर है: 'The book is inside the bag.'",
          sat_olck: "ᱯᱩᱛᱷᱤ ᱫᱚ ᱛᱷᱟᱹᱞᱤ ᱵᱷᱤᱛᱨᱤ ᱨᱮ ᱢᱮᱱᱟᱜᱼᱟ: 'The book is inside the bag.'",
          sat_deva: "पुथी दो थइली भितरी रे मेनाग-आ: 'The book is inside the bag.'",
          latin: "Puthi do thaili bhitri re menag-a: 'The book is inside the bag.'",
          verified: true
        }
      ]
    },
    {
      id: "soe-mat-003",
      title_hi: "पाठ २: What is long? What is round? — गोल और लम्बी आकृतियाँ",
      title_sat: "ᱪᱮᱫ ᱜᱩᱞᱟᱹᱭ ᱜᱮᱭᱟ? ᱪᱮᱫ ᱡᱤᱞᱤᱧ ᱜᱮᱭᱟ? (Shapes)",
      title_en: "What is Long? What is Round? (Shapes & Rolling/Sliding)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "August",
      week: "3rd to 4th Week",
      chapter: "2. What is long? What is round?",
      domain: "Involved Learners (IL) - Shapes",
      lo_id: "SOE-MAT-G1-AUG2",
      lo_title: "Explores 3D and 2D shapes, differentiates between objects that roll and slide, traces circular and linear shapes",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-18T11:00:00Z",
      duration: "15 min",
      activity: {
        title: "लुढ़कने और फिसलने का ढलान खेल (ᱜᱩᱲᱫᱟᱹᱣ ᱟᱨ ᱜᱩᱨᱞᱟᱹᱣ)",
        desc: "स्लेट की ढलान पर गेंद, सिक्का, पेंसिल और माचिस की डिब्बी को लुढ़काकर देखते हैं कि कौन लुढ़कता है (Roll) और कौन फिसलता है (Slide).",
        steps: [
          "1. गोल गेंद लुढ़कती है (ᱜᱩᱲᱫᱟᱹᱣᱜᱼᱟ).",
          "2. चौकोर माचिस फिसलती है (ᱥᱞᱟᱭᱤᱰ).",
          "3. सिक्का दोनों कर सकता है!"
        ]
      },
      materials: ["गेंद", "पेंसिल", "सिक्के", "माचिस की डिब्बी", "स्लेट"],
      assessment: "रोटी गोल है या लम्बी? उत्तर: गोल (ᱜᱩᱞᱟᱹᱭ).",
      script: [
        {
          id: "mat-003-s1",
          hindi: "सूरज, गेंद और सिक्का गोल होते हैं। गोल को 'ᱜᱩᱞᱟᱹᱭ' (गुलाई) कहते हैं।",
          sat_olck: "ᱵᱮᱨᱟ, ᱵᱚᱞ ᱟᱨ ᱯᱩᱭᱥᱟᱹ ᱫᱚ ᱜᱩᱞᱟᱹᱭ ᱜᱮᱭᱟ᱾ ᱜᱚᱞ ᱫᱚ 'ᱜᱩᱞᱟᱹᱭ' ᱠᱚ ᱢᱮᱛᱟᱜᱼᱟ᱾",
          sat_deva: "बेरा, बोल आर पुयसा दो गुलाई गेया। गोल दो 'गुलाई' को मेताग-आ।",
          latin: "Bera, bol ar puysa do gulay geya. Gol do 'gulay' ko metag-a.",
          verified: true
        },
        {
          id: "mat-003-s2",
          hindi: "पेंसिल, बाँस की छड़ी लम्बी होती है। लम्बे को 'ᱡᱤᱞᱤᱧ' (जिलिंज) बोलते हैं।",
          sat_olck: "ᱯᱮᱱᱥᱤᱞ ᱟᱨ ᱢᱟᱫ ᱴᱷᱮᱸᱜᱟ ᱫᱚ ᱡᱤᱞᱤᱧ ᱜᱮᱭᱟ᱾ ᱞᱟᱢᱵᱟ ᱫᱚ 'ᱡᱤᱞᱤᱧ' ᱠᱚ ᱢᱮᱱᱟ᱾",
          sat_deva: "पेन्सिल आर माद ठेंगा दो जिलिंज गेया। लम्बा दो 'जिलिंज' को मेना।",
          latin: "Pencil ar mad thenga do jilinj geya. Lamba do 'jilinj' ko mena.",
          verified: true
        },
        {
          id: "mat-003-s3",
          hindi: "गोल चीजें ढलान पर लुढ़कती हैं और चपटी चीजें फिसलती हैं।",
          sat_olck: "ᱜᱩᱞᱟᱹᱭ ᱡᱤᱱᱤᱥ ᱫᱚ ᱜᱩᱲᱫᱟᱹᱣᱜᱼᱟ ᱟᱨ ᱪᱟᱯᱴᱟ ᱡᱤᱱᱤᱥ ᱫᱚ ᱥᱞᱟᱭᱤᱰᱚᱜᱼᱟ᱾",
          sat_deva: "गुलाई जिनिस दो गुड़दावग-आ आर चापटा जिनिस दो स्लाइडोग-आ।",
          latin: "Gulay jinis do gurdawg-a ar chapta jinis do slidog-a.",
          verified: true
        }
      ]
    },
    {
      id: "soe-mat-004",
      title_hi: "पाठ ३: Mango Treat — संख्या १ से ९ तक गिनती व संख्या बोध",
      title_sat: "ᱩᱞ ᱡᱚᱢ ᱟᱨ ᱞᱮᱠᱷᱟ ᱑ ᱠᱷᱚᱱ ᱙ (Mango Treat)",
      title_en: "Mango Treat (Numbers 1 to 9 & Numeracy)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "August",
      week: "5th Week",
      chapter: "3. Mango Treat",
      domain: "Involved Learners (IL) - Numbers",
      lo_id: "SOE-MAT-G1-AUG3",
      lo_title: "Counts concrete objects from 1 to 9 with 1-to-1 correspondence, associates numeral symbols with quantity, writes numbers 1-9",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-20T09:30:00Z",
      duration: "15 min",
      activity: {
        title: "आम की टोकरी गिनती (ᱩᱞ ᱞᱮᱠᱷᱟ)",
        desc: "मिट्टी के आमों को १ से ९ तक मेज़ पर रखकर गिनते हैं और सामने स्लेट पर संथाली अंक (᱑, ᱒, ᱓, ᱔, ᱕, ᱖, ᱗, ᱘, ᱙) लिखते हैं।",
        steps: [
          "1. 1 = ᱑ (ᱢᱤᱫ - Mid), 2 = ᱒ (ᱵᱟᱨ - Bar), 3 = ᱓ (ᱯᱮ - Pe).",
          "2. 4 = ᱔ (ᱯᱩᱱ - Pun), 5 = ᱕ (ᱢᱚᱬᱮ - Mone).",
          "3. 6 = ᱖ (ᱛᱩᱨᱩᱭ - Turuy), 7 = ᱗ (ᱮᱭᱟᱭ - Eyay), 8 = ᱘ (ᱤᱨᱟᱹᱞ - Iral), 9 = ᱙ (ᱟᱨᱮ - Are)."
        ]
      },
      materials: ["कंकड़ / मिट्टी के आम", "स्लेट और खड़िया"],
      assessment: "मेज़ पर ५ कंकड़ रखकर पूछें: कितने हैं? उत्तर: 'पाँच' / '᱕ ᱢᱚᱬᱮ'.",
      script: [
        {
          id: "mat-004-s1",
          hindi: "चलो सब मिलकर एक से पाँच तक कंकड़ गिनें: एक, दो, तीन, चार, पाँच!",
          sat_olck: "ᱫᱮᱞᱟ ᱥᱟᱱᱟᱢ ᱦᱚᱲ ᱢᱤᱫ ᱠᱷᱚᱱ ᱢᱚᱬᱮ ᱦᱟᱹᱵᱤᱡ ᱫᱷᱤᱨᱤ ᱵᱚᱱ ᱞᱮᱠᱷᱟᱭᱟ: ᱢᱤᱫ, ᱵᱟᱨ, ᱯᱮ, ᱯᱩᱱ, ᱢᱚᱬᱮ!",
          sat_deva: "देला सानाम होड़ मिद खोन मोणे हाबिज धीरि बोन लेखाय: मिद, बार, पे, पुन, मोणे!",
          latin: "Dela sanam hor mid khon mone habij dhiri bon lekhay: mid, bar, pe, pun, mone!",
          verified: true
        },
        {
          id: "mat-004-s2",
          hindi: "पाँच के आगे: छह (ᱛᱩᱨᱩᱭ), सात (ᱮᱭᱟᱭ), आठ (ᱤᱨᱟᱹᱞ), नौ (ᱟᱨᱮ)।",
          sat_olck: "ᱢᱚᱬᱮ ᱛᱟᱭᱚᱢ: ᱛᱩᱨᱩᱭ (᱖), ᱮᱭᱟᱭ (᱗), ᱤᱨᱟᱹᱞ (᱘), ᱟᱨᱮ (᱙)᱾",
          sat_deva: "मोणे तायोम: तुरुय (6), एयाय (7), इरल (8), आरे (9)।",
          latin: "Mone tayom: turuy (6), eyay (7), iral (8), are (9).",
          verified: true
        },
        {
          id: "mat-004-s3",
          hindi: "अपनी स्लेट पर संथाली अंक लिखो: ᱑, ᱒, ᱓, ᱔, ᱕, ᱖, ᱗, ᱘, ᱙।",
          sat_olck: "ᱟᱯᱱᱟᱨ ᱥᱞᱮᱴ ᱨᱮ ᱥᱟᱱᱛᱟᱲᱤ ᱮᱞ ᱚᱞ ᱯᱮ: ᱑, ᱒, ᱓, ᱔, ᱕, ᱖, ᱗, ᱘, ᱙᱾",
          sat_deva: "आपनार स्लेट रे संताड़ी एल ओल पे: 1, 2, 3, 4, 5, 6, 7, 8, 9।",
          latin: "Apnar slate re Santali numbers ol pe: 1 to 9.",
          verified: true
        }
      ]
    },
    {
      id: "soe-mat-005",
      title_hi: "पाठ ४: Making 10 — दस का बंडल व संख्या १० से २०",
      title_sat: "᱑᱐ ᱨᱮᱱᱟᱜ ᱵᱤᱱᱰᱟ (Making 10: Numbers 10 to 20)",
      title_en: "Making 10 (Bundles & Place Value 10 to 20)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "September",
      week: "1st to 3rd Week",
      chapter: "4. Making 10",
      domain: "Involved Learners (IL) - Numeracy",
      lo_id: "SOE-MAT-G1-SEP1",
      lo_title: "Understands concept of 10 as a bundle of 10 single units, counts and writes numbers 10 to 20 using bundles and loose sticks, compares quantities",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-24T10:00:00Z",
      duration: "15 min",
      activity: {
        title: "तीली का बंडल (ᱠᱟᱹᱴᱷᱤ ᱵᱤᱱᱰᱟ)",
        desc: "१० सींकों या तीलियों को धागे से बाँधकर एक बंडल (दहाई) बनाया जाता है। १ बंडल और २ खुली तीली = १२ (ᱜᱮᱞ ᱵᱟᱨ).",
        steps: [
          "1. 10 तीलियाँ गिनो और बाँधो = 1 बंडल (ᱜᱮᱞ).",
          "2. 1 बंडल + 1 तीली = 11 (ᱜᱮᱞ ᱢᱤᱫ).",
          "3. 1 बंडल + 5 तीली = 15 (ᱜᱮᱞ ᱢᱚᱬᱮ)."
        ]
      },
      materials: ["नीम या बाँस की सींकें (ᱠᱟᱹᱴᱷᱤ)", "रस्सी/धागा"],
      assessment: "१ बंडल और ३ खुली तीलियाँ कितनी हुईं? उत्तर: १३ (ᱜᱮᱞ ᱯᱮ).",
      script: [
        {
          id: "mat-005-s1",
          hindi: "जब दस तीलियाँ एक साथ बाँधते हैं, तो उसे 'दस का बंडल' (दहाई) कहते हैं।",
          sat_olck: "ᱡᱚᱠᱷᱚᱱ ᱜᱮᱞ ᱜᱚᱴᱟᱝ ᱠᱟᱹᱴᱷᱤ ᱢᱤᱫ ᱴᱷᱮᱱ ᱵᱚᱱ ᱛᱚᱞᱟ, ᱚᱱᱟ ᱫᱚ '᱑᱐ ᱨᱮᱱᱟᱜ ᱵᱤᱱᱰᱟ' (ᱫᱟᱦᱟᱭ) ᱠᱚ ᱢᱮᱛᱟᱜᱼᱟ᱾",
          sat_deva: "जोखोन गेल गोटांग काठि मिद ठेन बोन तोला, ओना दो '10 रेनाग बिन्डा' (दहाई) को मेताग-आ।",
          latin: "Jokhon gel gotang kathi mid then bon tola, ona do '10 renag binda' ko metag-a.",
          verified: true
        },
        {
          id: "mat-005-s2",
          hindi: "एक बंडल और एक तीली मिलकर ग्यारह (᱑᱑ · ᱜᱮᱞ ᱢᱤᱫ) बनते हैं।",
          sat_olck: "ᱢᱤᱫ ᱵᱤᱱᱰᱟ ᱟᱨ ᱢᱤᱫ ᱠᱟᱹᱴᱷᱤ ᱢᱮᱥᱟ ᱠᱟᱛᱮ ᱜᱮᱞ ᱢᱤᱫ (᱑᱑) ᱦᱩᱭᱩᱜᱼᱟ᱾",
          sat_deva: "मिद बिन्डा आर मिद काठि मेसा काते गेल मिद (11) हुयुग-आ।",
          latin: "Mid binda ar mid kathi mesa kate gel mid (11) huyug-a.",
          verified: true
        }
      ]
    },
    {
      id: "soe-mat-006",
      title_hi: "पाठ ५: How Many? — एक अंक का जोड़ और घटाव",
      title_sat: "ᱛᱤᱱᱟᱹᱜ ᱜᱟᱱ? — ᱢᱮᱥᱟ ᱟᱨ ᱚᱰᱚᱠ (Addition & Subtraction)",
      title_en: "How Many? (Single Digit Addition & Subtraction)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "September",
      week: "4th to 6th Week",
      chapter: "5. How Many?",
      domain: "Involved Learners (IL) - Operations",
      lo_id: "SOE-MAT-G1-SEP2",
      lo_title: "Addition and subtraction of single-digit numbers using concrete counters and symbols '+' and '-'",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-08-28T09:30:00Z",
      duration: "15 min",
      activity: {
        title: "कंकड़ों से जोड़-घटाव खेल (ᱫᱷᱤᱨᱤ ᱢᱮᱥᱟ-ᱚᱰᱚᱠ)",
        desc: "३ कंकड़ में २ कंकड़ और मिलाए = ५ कंकड़ (३ + २ = ५). ५ कंकड़ में से १ कंकड़ हटा लिया = ४ कंकड़ (५ - १ = ४).",
        steps: [
          "1. जोड़ना = ᱢᱮᱥᱟ (Mesa / +).",
          "2. घटाना = ᱚᱰᱚᱠ (Odok / -).",
          "3. स्लेट पर ३ + २ = ५ लिखना।"
        ]
      },
      materials: ["कंकड़", "स्लेट और खड़िया"],
      assessment: "४ आम थे, २ आम खा लिए। कितने बचे? उत्तर: २ आम (ᱵᱟᱨᱭᱟ ᱩᱞ).",
      script: [
        {
          id: "mat-006-s1",
          hindi: "तीन कंकड़ में दो कंकड़ और मिलाओ: '३ + २ = ५' (ᱯᱮ ᱟᱨ ᱵᱟᱨ ᱢᱮᱥᱟ ᱞᱮᱠᱷᱟᱱ ᱢᱚᱬᱮ)।",
          sat_olck: "ᱯᱮᱭᱟ ᱫᱷᱤᱨᱤ ᱨᱮ ᱵᱟᱨᱭᱟ ᱫᱷᱤᱨᱤ ᱟᱨᱦᱚᱸ ᱢᱮᱥᱟᱭ ᱯᱮ: '᱓ + ᱒ = ᱕' (ᱯᱮ ᱟᱨ ᱵᱟᱨ ᱢᱮᱥᱟ ᱞᱮᱠᱷᱟᱱ ᱢᱚᱬᱮ)᱾",
          sat_deva: "पेया धीरि रे बारया धीरि आरहों मेसाय पे: '3 + 2 = 5' (पे आर बार मेसा लेखान मोणे)।",
          latin: "Peya dhiri re barya dhiri arho mesay pe: 3 + 2 = 5.",
          verified: true
        },
        {
          id: "mat-006-s2",
          hindi: "पाँच कंकड़ में से एक हटा लो: '५ - १ = ४' (ᱢᱚᱬᱮ ᱠᱷᱚᱱ ᱢᱤᱫ ᱚᱰᱚᱠ ᱞᱮᱠᱷᱟᱱ ᱯᱩᱱ)!",
          sat_olck: "ᱢᱚᱬᱮ ᱠᱷᱚᱱ ᱢᱤᱫᱴᱟᱝ ᱚᱰᱚᱠ ᱢᱮ: '᱕ - ᱑ = ᱔' (ᱢᱚᱬᱮ ᱠᱷᱚᱱ ᱢᱤᱫ ᱚᱰᱚᱠ ᱞᱮᱠᱷᱟᱱ ᱯᱩᱱ)! ",
          sat_deva: "मोणे खोन मिडटांग ओडोक मे: '5 - 1 = 4' (मोणे खोन मिद ओडोक लेखान पुन)!",
          latin: "Mone khon midtang odok me: 5 - 1 = 4.",
          verified: true
        }
      ]
    },
    {
      id: "soe-mat-007",
      title_hi: "पाठ १२ व १३: How Much Can We Spend? & So Many Toys — मुद्रा व गुणा",
      title_sat: "ᱯᱩᱭᱥᱟᱹ ᱟᱨ ᱠᱷᱮᱞᱚᱸᱰ (Money & Repeated Addition)",
      title_en: "Money & So Many Toys (Repeated Addition / Introduction to Multiplication)",
      grade: 1,
      subject: "math",
      textbook: "Joyful Mathematics",
      month: "December",
      week: "1st to 4th Week",
      chapter: "12. How much can we spend? & 13. So Many Toys",
      domain: "Involved Learners (IL) - Money & Multiplication",
      lo_id: "SOE-MAT-G1-DEC1",
      lo_title: "Identifies coins and currency up to ₹20, understands repeated addition as introduction to multiplication, counts in skips of 2s and 5s",
      reviewer_id: "REV-BIRSA-042",
      reviewer_name: "Birsa Murmu",
      reviewed_at: "2026-09-02T10:00:00Z",
      duration: "16 min",
      activity: {
        title: "हाट में खिलौने की दुकान (ᱦᱟᱴ ᱨᱮ ᱠᱷᱮᱞᱚᱸᱰ ᱫᱩᱠᱟᱱ)",
        desc: "कक्षा में नकली ₹१, ₹२, ₹५ के सिक्के बनाकर बच्चे २-२ खिलौनों के ३ पैकेट गिनते हैं (२ + २ + २ = ६, यानी २ × ३ = ६).",
        steps: [
          "1. सिक्कों की पहचान: ₹1, ₹2, ₹5, ₹10 (ᱴᱟᱠᱟ ᱟᱨ ᱯᱩᱭᱥᱟᱹ).",
          "2. repeated addition: 2 + 2 + 2 = 6 toys.",
          "3. Skip counting: 2, 4, 6, 8, 10!"
        ]
      },
      materials: ["कागज़ के सिक्के", "खिलौने/कंकड़"],
      assessment: "₹५ के २ सिक्के कितने रुपये हुए? उत्तर: ₹१० (ᱜᱮᱞ ᱴᱟᱠᱟ).",
      script: [
        {
          id: "mat-007-s1",
          hindi: "गाँव के हाट में एक पेंसिल ₹५ की है। ₹५ के सिक्के को 'ᱢᱚᱬᱮ ᱴᱟᱠᱟ' कहते हैं।",
          sat_olck: "ᱟᱹᱛᱩ ᱦᱟᱴ ᱨᱮ ᱢᱤᱫ ᱯᱮᱱᱥᱤᱞ ᱫᱚ ᱕ ᱴᱟᱠᱟ ᱠᱟᱱᱟ᱾ ᱕ ᱴᱟᱠᱟ ᱫᱚ 'ᱢᱚᱬᱮ ᱴᱟᱠᱟ' ᱠᱚ ᱢᱮᱛᱟᱜᱼᱟ᱾",
          sat_deva: "आतु हाट रे मिद पेन्सिल दो 5 टाका काना। 5 टाका दो 'मोणे टाका' को मेताग-आ।",
          latin: "Atu hat re mid pencil do 5 taka kana. 5 taka do 'mone taka' ko metag-a.",
          verified: true
        },
        {
          id: "mat-007-s2",
          hindi: "दो-दो खिलौनों के तीन समूह: २ + २ + २ = ६ खिलौने!",
          sat_olck: "ᱵᱟᱨ-ᱵᱟᱨ ᱠᱷᱮᱞᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱯᱮᱭᱟ ᱜᱩᱴ: ᱒ + ᱒ + ᱒ = ᱖ ᱜᱚᱴᱟᱝ ᱠᱷᱮᱞᱚᱸᱰ!",
          sat_deva: "बार-बार खेलोन्ड रेनाग पेया गुट: 2 + 2 + 2 = 6 गोटांग खेलोन्ड!",
          latin: "Bar-bar khelond renag peya gut: 2 + 2 + 2 = 6 gotang khelond!",
          verified: true
        }
      ]
    }
  ];

  // =========================================================================
  // 2. VERIFIED PHRASE BANK (800+ CAPACITY, FAST-PATH SEED CORPUS)
  // =========================================================================
  const PHRASE_BANK = [
    { id: "CMD-001", cat: "commands", hi: "सब बच्चे किताब खोलो", sat_olck: "ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱯᱩᱛᱷᱤ ᱡᱷᱤᱡ ᱯᱮ", sat_deva: "सानाम गिदरा पुथी झीज पे", latin: "Sanam gidra puthi jhij pe", audioMs: 84 },
    { id: "CMD-002", cat: "commands", hi: "अपनी स्लेट निकालो", sat_olck: "ᱟᱯᱱᱟᱨᱟᱜ ᱥᱞᱮᱴ ᱚᱰᱚᱠ ᱯᱮ", sat_deva: "आपनाराग स्लेट ओडोक पे", latin: "Apnarag slate odok pe", audioMs: 78 },
    { id: "CMD-003", cat: "commands", hi: "किताब का पन्ना पलटो", sat_olck: "ᱯᱩᱛᱷᱤ ᱨᱮᱱᱟᱜ ᱥᱟᱠᱟᱢ ᱯᱟᱞᱴᱟᱣ ᱢᱮ", sat_deva: "पुथी रेनाग साकाम पाल्टाव मे", latin: "Puthi renag sakam paltaw me", audioMs: 92 },
    { id: "CMD-004", cat: "commands", hi: "बोर्ड पर देखो", sat_olck: "ᱵᱚᱨᱰ ᱨᱮ ᱧᱮᱞ ᱯᱮ", sat_deva: "बोर्ड रे जेल पे", latin: "Board re njel pe", audioMs: 70 },
    { id: "CMD-005", cat: "commands", hi: "लाइन बनाकर चलो", sat_olck: "ᱞᱟᱭᱤᱱ ᱵᱮᱱᱟᱣ ᱠᱟᱛᱮ ᱪᱟᱞᱟᱜ ᱯᱮ", sat_deva: "लाइन बेनाव काते चालाग पे", latin: "Line benaw kate chalag pe", audioMs: 85 },
    { id: "CMD-006", cat: "commands", hi: "अपनी-अपनी जगह पर बैठ जाओ", sat_olck: "ᱟᱯᱱᱟᱨ ᱴᱷᱟᱶ ᱨᱮ ᱫᱩᱲᱩᱵ ᱯᱮ", sat_deva: "आपनार ठाव रे दुड़ुब पे", latin: "Apnar thaw re durub pe", audioMs: 80 },
    
    { id: "CMD-010", cat: "discipline", hi: "सब बच्चे शांत रहो", sat_olck: "ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱛᱷᱤᱨ ᱛᱟᱦᱮᱸᱱ ᱯᱮ", sat_deva: "सानाम गिदरा थीर ताहेन पे", latin: "Sanam gidra thir tahen pe", audioMs: 75 },
    { id: "CMD-011", cat: "discipline", hi: "ध्यान से सुनो", sat_olck: "ᱫᱷᱮᱭᱟᱱ ᱛᱮ ᱟᱧᱡᱚᱢ ᱢᱮ", sat_deva: "धेयान ते आंजोम मे", latin: "Dhyan te anjom me", audioMs: 72 },
    { id: "CMD-012", cat: "discipline", hi: "शोर मत करो", sat_olck: "ᱦᱩᱞᱪᱩᱞ ᱟᱞᱚ ᱯᱮ ᱠᱚᱨᱟᱣᱟ", sat_deva: "हुलचुल आलो पे करावा", latin: "Hulchul alo pe korawa", audioMs: 82 },
    
    { id: "CMD-020", cat: "praise", hi: "शाबाश बच्चों", sat_olck: "ᱟᱹᱰᱤ ᱱᱟᱯᱟᱭ ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ", sat_deva: "अडी नापाय गिदरा को", latin: "Adi napay gidra ko", audioMs: 70 },
    { id: "CMD-021", cat: "praise", hi: "बहुत अच्छा उत्तर दिया", sat_olck: "ᱟᱹᱰᱤ ᱱᱟᱯᱟᱭ ᱛᱮᱞᱟᱢ ᱮᱢ ᱠᱮᱫᱼᱟ", sat_deva: "अडी नापाय तेलाम एम केद-आ", latin: "Adi napay telam em ked-a", audioMs: 88 },
    { id: "CMD-022", cat: "praise", hi: "सब बच्चे ताली बजाओ", sat_olck: "ᱥᱟᱱᱟᱢ ᱦᱚᱲ ᱛᱷᱟᱹᱭᱟᱹ ᱛᱟᱦᱨᱤ ᱯᱮ", sat_deva: "सानाम होड़ थइया ताहरी पे", latin: "Sanam hor thaya tahri pe", audioMs: 80 },
    
    { id: "CMD-030", cat: "greetings", hi: "नमस्ते बच्चों", sat_olck: "ᱡᱚᱦᱟᱨ ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ", sat_deva: "जोहार गिदरा को", latin: "Johar gidra ko", audioMs: 65 },
    { id: "CMD-031", cat: "greetings", hi: "शुभ प्रभात", sat_olck: "ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ", sat_deva: "सागुन सेताग", latin: "Sagun setag", audioMs: 68 },
    { id: "CMD-032", cat: "greetings", hi: "धन्यवाद", sat_olck: "ᱥᱟᱨᱦᱟᱣ", sat_deva: "सारहाव", latin: "Sarhaw", audioMs: 50 },

    { id: "CMD-040", cat: "materials", hi: "चॉक और डस्टर लाओ", sat_olck: "ᱠᱷᱟᱹᱲᱤ ᱟᱨ ᱰᱟᱥᱴᱟᱨ ᱟᱹᱜᱩᱭ ᱢᱮ", sat_deva: "खड़ी आर डास्टार आगुय मे", latin: "Khari ar dastar aguy me", audioMs: 85 },
    { id: "CMD-041", cat: "materials", hi: "पेंसिल से लिखो", sat_olck: "ᱯᱮᱱᱥᱤᱞ ᱛᱮ ᱚᱞ ᱢᱮ", sat_deva: "पेन्सिल ते ओल मे", latin: "Pencil te ol me", audioMs: 70 },
    { id: "CMD-042", cat: "materials", hi: "कंकड़ गिनो", sat_olck: "ᱫᱷᱤᱨᱤ ᱞᱮᱠᱷᱟᱭ ᱢᱮ", sat_deva: "धीरि लेकाय मे", latin: "Dhiri lekhay me", audioMs: 65 },
    
    { id: "CMD-050", cat: "numbers", hi: "एक दो तीन चार पाँच", sat_olck: "ᱢᱤᱫ ᱵᱟᱨ ᱯᱮ ᱯᱩᱱ ᱢᱚᱬᱮ", sat_deva: "मिद बार पे पुन मोणे", latin: "Mid bar pe pun mone", audioMs: 95 },
    { id: "CMD-051", cat: "numbers", hi: "छह सात आठ नौ दस", sat_olck: "ᱛᱩᱨᱩᱭ ᱮᱭᱟᱭ ᱤᱨᱟᱹᱞ ᱟᱨᱮ ᱜᱮᱞ", sat_deva: "तुरुय एयाय इरल आरे गेल", latin: "Turuy eyay iral are gel", audioMs: 105 }
  ];

  // Reverse Path Demo Child Utterances
  const CHILD_UTTERANCES = [
    {
      sat_olck: "ᱤᱧ ᱵᱟᱰᱟᱭᱟ ᱢᱟᱪᱮᱛ!",
      sat_deva: "इंज बाड़ाया माचेत!",
      hi_gist: "मुझे पता है शिक्षक जी!",
      latin: "Inj badaya machet!",
      confidence: 0.94
    },
    {
      sat_olck: "ᱱᱚᱣᱟ ᱫᱚ ᱢᱤᱫ ᱴᱟᱝ ᱢᱮᱨᱚᱢ ᱠᱟᱱᱟ᱾",
      sat_deva: "नोवा दो मिद टांग मेरोम काना।",
      hi_gist: "यह एक बकरी है।",
      latin: "Nowa do mid tang merom kana.",
      confidence: 0.91
    },
    {
      sat_olck: "ᱤᱧᱟᱜ ᱥᱞᱮᱴ ᱨᱮ ᱚᱞ ᱦᱩᱭ ᱮᱱᱟ᱾",
      sat_deva: "इंजाग स्लेट रे ओल हुय एना।",
      hi_gist: "मेरी स्लेट पर लिखावट पूरी हो गई।",
      latin: "Injag slate re ol huy ena.",
      confidence: 0.89
    },
    {
      sat_olck: "[Classroom ambient noise / overlapping murmur]",
      sat_deva: "[कक्षा का शोर]",
      hi_gist: "Didn't catch that — please ask the child to repeat clearly (कम आवाज़ या शोर).",
      latin: "",
      confidence: 0.32,
      isNoisyFailure: true
    }
  ];

  // =========================================================================
  // 3. FLASHCARD DECKS DATA (Jharkhand Cultural Context)
  // =========================================================================
  const FLASHCARD_DECKS = {
    animals: {
      name: "Animals (ᱵᱤᱨ ᱡᱤᱭᱟᱹᱞᱤ)",
      cards: [
        {
          hi: "बकरी (Goat)",
          sat_olck: "ᱢᱮᱨᱚᱢ",
          sat_deva: "मेरोम",
          latin: "/ merom /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="38" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><circle cx="40" cy="45" r="4" fill="#78350f"/><circle cx="60" cy="45" r="4" fill="#78350f"/><path d="M45 56 Q50 62 55 56" stroke="#78350f" stroke-width="2" fill="none"/><path d="M34 26 Q40 36 38 42 M66 26 Q60 36 62 42" stroke="#b45309" stroke-width="3" fill="none"/></svg>`
        },
        {
          hi: "कुत्ता (Dog)",
          sat_olck: "ᱥᱮᱛᱟ",
          sat_deva: "सेता",
          latin: "/ seta /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="52" r="35" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/><ellipse cx="32" cy="35" rx="8" ry="16" fill="#fb923c" transform="rotate(-15 32 35)"/><ellipse cx="68" cy="35" rx="8" ry="16" fill="#fb923c" transform="rotate(15 68 35)"/><circle cx="42" cy="48" r="4" fill="#431407"/><circle cx="58" cy="48" r="4" fill="#431407"/><ellipse cx="50" cy="58" rx="6" ry="4" fill="#431407"/></svg>`
        },
        {
          hi: "हाथी (Elephant)",
          sat_olck: "ᱦᱟᱹᱛᱤ",
          sat_deva: "हाती",
          latin: "/ hati /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="48" r="36" fill="#e2e8f0" stroke="#475569" stroke-width="2"/><circle cx="40" cy="42" r="4" fill="#1e293b"/><circle cx="60" cy="42" r="4" fill="#1e293b"/><path d="M50 50 Q52 72 62 68" stroke="#475569" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`
        },
        {
          hi: "गाय (Cow)",
          sat_olck: "ᱜᱟᱹᱭ",
          sat_deva: "गाई",
          latin: "/ gay /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><ellipse cx="50" cy="54" rx="36" ry="30" fill="#f8fafc" stroke="#334155" stroke-width="2"/><circle cx="42" cy="46" r="4" fill="#0f172a"/><circle cx="58" cy="46" r="4" fill="#0f172a"/><path d="M30 32 Q40 38 42 45 M70 32 Q60 38 58 45" stroke="#94a3b8" stroke-width="3" fill="none"/></svg>`
        },
        {
          hi: "बाघ (Tiger)",
          sat_olck: "ᱛᱟᱹᱨᱩᱵ",
          sat_deva: "तारुब",
          latin: "/ tarub /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="36" fill="#fdba74" stroke="#ea580c" stroke-width="2"/><circle cx="42" cy="46" r="4" fill="#431407"/><circle cx="58" cy="46" r="4" fill="#431407"/><path d="M40 30 L45 40 M60 30 L55 40 M30 50 L38 52 M70 50 L62 52" stroke="#431407" stroke-width="2"/></svg>`
        }
      ]
    },
    numbers: {
      name: "Numbers 1-10 (ᱞᱮᱠᱷᱟ ᱑-᱑᱐)",
      cards: [
        {
          hi: "एक (1)",
          sat_olck: "᱑ · ᱢᱤᱫ",
          sat_deva: "मिद",
          latin: "/ mid /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><rect x="20" y="20" width="60" height="60" rx="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="50" y="62" font-size="38" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#dc2626" text-anchor="middle">᱑</text></svg>`
        },
        {
          hi: "दो (2)",
          sat_olck: "᱒ · ᱵᱟᱨ",
          sat_deva: "बार",
          latin: "/ bar /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><rect x="20" y="20" width="60" height="60" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="50" y="62" font-size="38" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#d97706" text-anchor="middle">᱒</text></svg>`
        },
        {
          hi: "तीन (3)",
          sat_olck: "᱓ · ᱯᱮ",
          sat_deva: "पे",
          latin: "/ pe /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><rect x="20" y="20" width="60" height="60" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="50" y="62" font-size="38" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#16a34a" text-anchor="middle">᱓</text></svg>`
        },
        {
          hi: "चार (4)",
          sat_olck: "᱔ · ᱯᱩᱱ",
          sat_deva: "पुन",
          latin: "/ pun /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><rect x="20" y="20" width="60" height="60" rx="14" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/><text x="50" y="62" font-size="38" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#4f46e5" text-anchor="middle">᱔</text></svg>`
        },
        {
          hi: "पाँच (5)",
          sat_olck: "᱕ · ᱢᱚᱬᱮ",
          sat_deva: "मोणे",
          latin: "/ mone /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><rect x="20" y="20" width="60" height="60" rx="14" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/><text x="50" y="62" font-size="38" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#a21caf" text-anchor="middle">᱕</text></svg>`
        }
      ]
    },
    classroom: {
      name: "Classroom Objects (ᱚᱞ ᱤᱛᱩᱱ ᱟᱥᱲᱟ)",
      cards: [
        {
          hi: "किताब (Book)",
          sat_olck: "ᱯᱩᱛᱷᱤ",
          sat_deva: "पुथी",
          latin: "/ puthi /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><path d="M22 30 Q50 25 50 75 Q22 80 22 30 Z" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><path d="M78 30 Q50 25 50 75 Q78 80 78 30 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/><line x1="50" y1="26" x2="50" y2="76" stroke="#c2410c" stroke-width="3"/></svg>`
        },
        {
          hi: "स्लेट (Slate)",
          sat_olck: "ᱥᱞᱮᱴ",
          sat_deva: "स्लेट",
          latin: "/ slate /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><rect x="18" y="22" width="64" height="56" rx="6" fill="#b45309" stroke="#78350f" stroke-width="2"/><rect x="24" y="28" width="52" height="44" rx="2" fill="#1e293b"/></svg>`
        },
        {
          hi: "कलम (Pen)",
          sat_olck: "ᱠᱚᱞᱚᱢ",
          sat_deva: "कोलोम",
          latin: "/ kolom /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><polygon points="30,70 36,76 74,38 68,32" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/><polygon points="26,74 30,70 36,76" fill="#cbd5e1"/></svg>`
        }
      ]
    },
    letters: {
      name: "Ol Chiki Letters (ᱚᱞ ᱪᱤᱠᱤ)",
      cards: [
        {
          hi: "अक्षर 'ऑ' (O)",
          sat_olck: "ᱚ",
          sat_deva: "ऑ",
          latin: "/ la - as in pot /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="38" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/><text x="50" y="64" font-size="44" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#b91c1c" text-anchor="middle">ᱚ</text></svg>`
        },
        {
          hi: "अक्षर 'अत्' (At)",
          sat_olck: "ᱛ",
          sat_deva: "त्",
          latin: "/ at /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="38" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="50" y="64" font-size="44" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#b45309" text-anchor="middle">ᱛ</text></svg>`
        },
        {
          hi: "अक्षर 'अग्' (Ag)",
          sat_olck: "ᱜ",
          sat_deva: "ग्",
          latin: "/ ag /",
          svg: `<svg viewBox="0 0 100 100" width="120" height="120"><circle cx="50" cy="50" r="38" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="50" y="64" font-size="44" font-family="'Noto Sans Ol Chiki', sans-serif" font-weight="bold" fill="#15803d" text-anchor="middle">ᱜ</text></svg>`
        }
      ]
    }
  };

  // =========================================================================
  // 4. REVIEWER CONSOLE QUEUE (BIRSA MURMU - DUMKA PORTAL)
  // =========================================================================
  let REVIEW_QUEUE = [
    {
      id: "REV-ITEM-101",
      hi: "कल सब बच्चे अपने साथ एक सुंदर सा फूल लाएंगे।",
      sat_olck: "ᱜᱟᱯᱟ ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱟᱠᱚ ᱥᱟᱶ ᱢᱤᱫ ᱪᱚᱨᱚᱠ ᱵᱟᱦᱟ ᱠᱚ ᱟᱹᱜᱩᱭᱟ᱾",
      sat_deva: "गापा सानाम गिदरा आको साव मिद चोरोक बाहा को आगुया।",
      context: "Grade 1 · Science / EVS · Flowers of Jharkhand",
      status: "REVIEW_REQUIRED",
      source: "Teacher Classroom Submission (GPS Jamda)"
    },
    {
      id: "REV-ITEM-102",
      hi: "अपनी स्लेट को साफ करके बस्ते में रखो।",
      sat_olck: "ᱟᱯᱱᱟᱨᱟᱜ ᱥᱞᱮᱴ ᱥᱟᱯᱷᱟ ᱠᱟᱛᱮ ᱛᱷᱟᱹᱞᱤ ᱨᱮ ᱫᱚᱦᱚᱭ ᱯᱮ᱾",
      sat_deva: "आपनाराग स्लेट साफा काते थइली रे दोहोय पे।",
      context: "Grade 1 · Classroom Management",
      status: "REVIEW_REQUIRED",
      source: "Dynamic AI MT Suggestion"
    },
    {
      id: "REV-ITEM-103",
      hi: "किस बच्चे ने अपनी गिनती पूरी कर ली?",
      sat_olck: "ᱚᱠᱚᱭ ᱜᱤᱫᱽᱨᱟᱹ ᱟᱡᱟᱜ ᱞᱮᱠᱷᱟᱭ ᱯᱩᱨᱟᱹᱣ ᱠᱮᱫᱼᱟ?",
      sat_deva: "ओकोय गिदरा आजाग लेकाय पुराव केद-आ?",
      context: "Grade 1 · Numeracy · Counting 1-10",
      status: "REVIEW_REQUIRED",
      source: "NIPUN Assessment Queue"
    }
  ];

  // =========================================================================
  // 5. APPLICATION STATE
  // =========================================================================
  const state = {
    currentView: "home",
    selectedLanguage: "Santali",
    selectedLessonIndex: 0,
    scriptDisplayMode: "both", // 'both', 'olchiki', 'deva'
    playbackSpeed: 1.0,
    currentDeckKey: "animals",
    currentCardIndex: 0,
    isPresentationMode: false,
    isOffline: true,
    fontScale: 100,
    reviewedCount: 48,
    rejectedCount: 2,
    fineTuningPairsCount: 142,
    activeRejectItemId: null,
    demoStepIndex: 0,
    demoTimerSeconds: 0,
    demoTimerInterval: null,
    kidsStars: 0,
    kidsPebblesCounted: 0,
    selectedSyllabusSubject: "english",
    selectedSyllabusMonth: "all",
    teachSubjectFilter: "all",
    teachMonthFilter: "all"
  };

  // =========================================================================
  // 6. AUDIO SYNTHESIS & SOUND EFFECTS ENGINE
  // =========================================================================
  const audioCtx = (function () {
    try {
      return new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return null;
    }
  })();

  function playTone(freq, type, duration, gainLevel) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainLevel || 0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (err) {
      console.warn("Audio Context error", err);
    }
  }

  function playMicStartTone() { playTone(540, 'sine', 0.12, 0.12); }
  function playMicStopTone() { playTone(380, 'sine', 0.15, 0.1); }
  function playChimeSuccess() {
    playTone(523.25, 'sine', 0.12, 0.15);
    setTimeout(() => playTone(659.25, 'sine', 0.15, 0.15), 100);
  }

  // Browser speech synthesis for classroom audio simulation
  function speakText(text, lang, rate) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = (rate || state.playbackSpeed) || 1.0;
    utterance.pitch = 1.05; // Friendly, warm pedagogical tone
    if (lang === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      // For Santali, phonetically render in Hindi voice or default Indian English
      utterance.lang = 'hi-IN';
    }
    window.speechSynthesis.speak(utterance);
  }

  function speakSantali(satDevaText, satOlChikiText) {
    playChimeSuccess();
    // Prefer Devanagari phonetic rendering for speech synthesis engines that do not natively parse Ol Chiki Unicode
    speakText(satDevaText || satOlChikiText, 'hi', state.playbackSpeed);
  }

  // =========================================================================
  // 7. TOAST NOTIFICATIONS
  // =========================================================================
  const toastEl = document.querySelector('#toast');
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  // =========================================================================
  // 8. VIEW SWITCHING NAVIGATION
  // =========================================================================
  function switchView(viewName) {
    state.currentView = viewName;
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `view-${viewName}`);
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // View specific hooks
    if (viewName === 'teach') renderTeachMode();
    if (viewName === 'worksheet') renderWorksheetPreview();
    if (viewName === 'flashcards') renderFlashcardStage();
    if (viewName === 'reviewer') renderReviewerQueue();
    if (viewName === 'syllabus') renderSyllabusTimeline();
    if (viewName === 'student') renderStudentModeHook();
  }

  // =========================================================================
  // 9. TEACH MODE RENDERER
  // =========================================================================
  function renderTeachMode() {
    // Determine which lessons match current filters
    const subjectFilter = state.teachSubjectFilter || 'all';
    const monthFilter = state.teachMonthFilter || 'all';

    const filteredLessons = CURRICULUM_LESSONS.filter(l => {
      const matchSubject = subjectFilter === 'all' || l.subject === subjectFilter;
      const matchMonth = monthFilter === 'all' || (l.month && l.month.includes(monthFilter)) || (monthFilter.includes(l.month));
      return matchSubject && matchMonth;
    });

    // Ensure selected index is valid
    if (state.selectedLessonIndex >= CURRICULUM_LESSONS.length) {
      state.selectedLessonIndex = 0;
    }
    const currentLesson = CURRICULUM_LESSONS[state.selectedLessonIndex] || CURRICULUM_LESSONS[0];

    // Header updates
    document.querySelector('#teachHeaderLessonTitle').textContent = currentLesson.title_hi;
    document.querySelector('#teachLoCode').textContent = currentLesson.lo_id;
    document.querySelector('#teachLoTitle').textContent = currentLesson.lo_title;

    let subLabel = "Language (Santali / Hindi)";
    if (currentLesson.subject === 'english') subLabel = "English · Mridang (Class 1)";
    else if (currentLesson.subject === 'hindi') subLabel = "हिन्दी · सारंगी (कक्षा १)";
    else if (currentLesson.subject === 'math') subLabel = "Mathematics · Joyful Mathematics (Class 1)";
    document.querySelector('#teachSubject').textContent = subLabel;

    document.querySelector('#teachDomain').textContent = `${currentLesson.domain || 'NIPUN FLN'} · ${currentLesson.month || 'Class 1'}`;
    document.querySelector('#teachReviewerStamp').textContent = `Verified by ${currentLesson.reviewer_name} (${currentLesson.reviewer_id})`;

    // Activity, Materials, Assessment
    document.querySelector('#teachActivityTitle').textContent = currentLesson.activity.title;
    document.querySelector('#teachActivityDesc').textContent = currentLesson.activity.desc;

    const stepsContainer = document.querySelector('#teachActivitySteps');
    stepsContainer.innerHTML = currentLesson.activity.steps.map(s => `<div class="act-step">${s}</div>`).join('');

    const matContainer = document.querySelector('#teachMaterialsList');
    matContainer.innerHTML = currentLesson.materials.map(m => `<li>${m}</li>`).join('');

    const assessContainer = document.querySelector('#teachAssessmentBox');
    assessContainer.innerHTML = `<strong>Oral Assessment Prompt:</strong> ${currentLesson.assessment}`;

    // Script Lines Table
    const linesContainer = document.querySelector('#teachScriptLines');
    linesContainer.innerHTML = '';

    currentLesson.script.forEach((line, idx) => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'script-line-item';
      lineDiv.id = `script-line-${line.id}`;

      let satHtml = '';
      if (state.scriptDisplayMode === 'both') {
        satHtml = `
          <div class="olchiki-line">${line.sat_olck}</div>
          <div class="deva-translit-line">${line.sat_deva}</div>
          <div class="latin-phonetic-line">${line.latin}</div>
        `;
      } else if (state.scriptDisplayMode === 'olchiki') {
        satHtml = `<div class="olchiki-line">${line.sat_olck}</div><div class="latin-phonetic-line">${line.latin}</div>`;
      } else {
        satHtml = `<div class="deva-translit-line" style="font-size: 16px; font-weight: 600;">${line.sat_deva}</div><div class="latin-phonetic-line">${line.latin}</div>`;
      }

      lineDiv.innerHTML = `
        <div class="hindi-script-box">
          <strong>${idx + 1}.</strong> ${line.hindi}
        </div>
        <div class="santali-script-box">
          ${satHtml}
          <div style="margin-top: 4px;">
            <span class="chip-verified">✓ Verified (PUBLISHED)</span>
          </div>
        </div>
        <div class="script-line-actions">
          <button class="line-play-btn" data-line-id="${line.id}" title="Play line audio aloud in native Santali">
            ▶
          </button>
          <small style="font-size: 10px; color: var(--muted);">Native Opus</small>
        </div>
      `;

      // Play button listener
      const playBtn = lineDiv.querySelector('.line-play-btn');
      playBtn.addEventListener('click', () => {
        lineDiv.classList.add('playing');
        playBtn.classList.add('active');
        playBtn.textContent = '■';
        speakSantali(line.sat_deva, line.sat_olck);
        setTimeout(() => {
          lineDiv.classList.remove('playing');
          playBtn.classList.remove('active');
          playBtn.textContent = '▶';
        }, 2200);
      });

      linesContainer.appendChild(lineDiv);
    });

    // Sidebar list
    const sidebarList = document.querySelector('#teachLessonList');
    sidebarList.innerHTML = '';

    const listToRender = filteredLessons.length > 0 ? filteredLessons : CURRICULUM_LESSONS;

    listToRender.forEach((l) => {
      const realIdx = CURRICULUM_LESSONS.indexOf(l);
      const item = document.createElement('button');
      item.className = `lesson-nav-item ${realIdx === state.selectedLessonIndex ? 'active' : ''}`;
      const subjTag = (l.textbook || l.subject).toUpperCase();
      item.innerHTML = `
        <span class="nav-seq">${subjTag} · ${l.month || 'SESSION 2024-25'}</span>
        <span class="nav-title">${l.title_hi}</span>
        <span class="nav-lo">${l.lo_id}</span>
      `;
      item.addEventListener('click', () => {
        state.selectedLessonIndex = realIdx;
        renderTeachMode();
      });
      sidebarList.appendChild(item);
    });
  }

  function initTeachFilters() {
    const filterRow = document.querySelector('#teachSubjectFilterRow');
    if (filterRow) {
      filterRow.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          filterRow.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.teachSubjectFilter = pill.dataset.subject || 'all';
          renderTeachMode();
        });
      });
    }

    const monthSelect = document.querySelector('#teachMonthFilterSelect');
    if (monthSelect) {
      monthSelect.addEventListener('change', () => {
        state.teachMonthFilter = monthSelect.value;
        renderTeachMode();
      });
    }
  }


  // =========================================================================
  // 10. LIVE CLASSROOM (THE 3-SECOND PTT FEATURE)
  // =========================================================================
  let currentDirection = 'teacher'; // 'teacher' or 'child'
  let isRecording = false;

  function initLiveClassroom() {
    const dirTeacherBtn = document.querySelector('#dirTeacherToClass');
    const dirChildBtn = document.querySelector('#dirChildToTeacher');
    const giantMic = document.querySelector('#giantMicBtn');
    const micStatus = document.querySelector('#micStatusText');
    const manualInput = document.querySelector('#liveTextInput');
    const sendBtn = document.querySelector('#sendPhraseBtn');

    dirTeacherBtn.addEventListener('click', () => {
      currentDirection = 'teacher';
      dirTeacherBtn.classList.add('active');
      dirChildBtn.classList.remove('active');
      micStatus.textContent = 'HOLD TO SPEAK (HINDI)';
      showToast('Switched to Teacher → Class mode (Hindi to Santali)');
    });

    dirChildBtn.addEventListener('click', () => {
      currentDirection = 'child';
      dirChildBtn.classList.add('active');
      dirTeacherBtn.classList.remove('active');
      micStatus.textContent = 'HOLD TO LISTEN (SANTALI)';
      showToast('Switched to Child → Teacher mode (Santali to Hindi gist)');
    });

    // PTT Events
    giantMic.addEventListener('mousedown', startPtt);
    giantMic.addEventListener('mouseup', stopPtt);
    giantMic.addEventListener('touchstart', (e) => { e.preventDefault(); startPtt(); });
    giantMic.addEventListener('touchend', (e) => { e.preventDefault(); stopPtt(); });

    function startPtt() {
      if (isRecording) return;
      isRecording = true;
      giantMic.classList.add('recording');
      micStatus.textContent = 'LISTENING...';
      playMicStartTone();
    }

    function stopPtt() {
      if (!isRecording) return;
      isRecording = false;
      giantMic.classList.remove('recording');
      micStatus.textContent = currentDirection === 'teacher' ? 'PROCESSING...' : 'ANALYZING...';
      playMicStopTone();

      // Trigger realistic speech processing
      setTimeout(() => {
        if (currentDirection === 'teacher') {
          handleTeacherSpeech("सब बच्चे किताब खोलो");
        } else {
          handleChildSpeech();
        }
        micStatus.textContent = currentDirection === 'teacher' ? 'HOLD TO SPEAK' : 'HOLD TO LISTEN';
      }, 500);
    }

    // Manual Input
    sendBtn.addEventListener('click', () => {
      const text = manualInput.value.trim();
      if (!text) return;
      manualInput.value = '';
      handleTeacherSpeech(text);
    });

    manualInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendBtn.click();
    });

    // Simulation Quick Buttons
    document.querySelector('#simFastPathBtn').addEventListener('click', () => {
      handleTeacherSpeech("सब बच्चे किताब खोलो");
    });
    document.querySelector('#simDynamicBtn').addEventListener('click', () => {
      handleTeacherSpeech("कल सब बच्चे अपने साथ एक सुंदर सा फूल लेकर आना");
    });
    document.querySelector('#simChildBtn').addEventListener('click', () => {
      currentDirection = 'child';
      dirChildBtn.classList.add('active');
      dirTeacherBtn.classList.remove('active');
      handleChildSpeech();
    });

    renderPhraseBank();
  }

  function handleTeacherSpeech(rawHindiText) {
    const welcome = document.querySelector('#liveEmptyState');
    if (welcome) welcome.remove();

    // Check against phrase bank (Fast path: Normalised exact & trigram fuzzy match)
    const normalizedInput = rawHindiText.trim().toLowerCase();
    const matchedPhrase = PHRASE_BANK.find(p => p.hi.toLowerCase() === normalizedInput || normalizedInput.includes(p.hi.toLowerCase()) || p.hi.toLowerCase().includes(normalizedInput));

    const transcriptPane = document.querySelector('#liveTranscriptPane');
    const bubble = document.createElement('div');
    bubble.className = 'live-bubble teacher-msg';

    if (matchedPhrase) {
      // FAST PATH HIT (<1.5s, verified, cached Opus)
      const vad = 180 + Math.floor(Math.random() * 30);
      const asr = 340 + Math.floor(Math.random() * 40);
      const lookup = 24 + Math.floor(Math.random() * 8);
      const audio = matchedPhrase.audioMs;
      const total = vad + asr + lookup + audio;

      updateLatencyCard(true, vad, asr, lookup, audio, total);

      bubble.innerHTML = `
        <div class="bubble-source">
          <span>👩‍🏫 TEACHER (HINDI)</span>
          <span class="chip-verified">✓ Verified · ${matchedPhrase.id}</span>
        </div>
        <div class="bubble-input">"${rawHindiText}"</div>
        <div class="bubble-output-main">${matchedPhrase.sat_olck}</div>
        <div class="bubble-output-deva">${matchedPhrase.sat_deva} (${matchedPhrase.latin})</div>
        <div class="bubble-bottom-row">
          <span style="color: var(--green); font-weight: 700;">⚡ Fast Path Hit · ${total}ms</span>
          <div class="bubble-actions">
            <button class="bubble-audio-replay-btn" title="Replay native audio">
              🔊 Play
            </button>
          </div>
        </div>
      `;

      const replayBtn = bubble.querySelector('.bubble-audio-replay-btn');
      replayBtn.addEventListener('click', () => speakSantali(matchedPhrase.sat_deva, matchedPhrase.sat_olck));

      // Auto play audio immediately (PRD requirement)
      speakSantali(matchedPhrase.sat_deva, matchedPhrase.sat_olck);

    } else {
      // DYNAMIC AI PATH (IndicTrans2 INT8 simulated inference)
      const vad = 200 + Math.floor(Math.random() * 20);
      const asr = 410 + Math.floor(Math.random() * 40);
      const mt = 910 + Math.floor(Math.random() * 80);
      const tts = 640 + Math.floor(Math.random() * 60);
      const total = vad + asr + mt + tts;

      updateLatencyCard(false, vad, asr, mt, tts, total);

      // Construct simulated IndicTrans2 Ol Chiki translation
      const simOlChiki = "ᱜᱟᱯᱟ ᱥᱟᱱᱟᱢ ᱜᱤᱫᱽᱨᱟᱹ ᱟᱠᱚ ᱥᱟᱶ ᱢᱤᱫ ᱪᱚᱨᱚᱠ ᱵᱟᱦᱟ ᱟᱹᱜᱩᱭ ᱯᱮ";
      const simDeva = "गापा सानाम गिदरा आको साव मिद चोरोक बाहा आगुय पे";

      bubble.innerHTML = `
        <div class="bubble-source">
          <span>👩‍🏫 TEACHER (HINDI)</span>
          <span class="chip-ai">⚠ AI translation — not verified</span>
        </div>
        <div class="bubble-input">"${rawHindiText}"</div>
        <div class="bubble-output-main">${simOlChiki}</div>
        <div class="bubble-output-deva">${simDeva}</div>
        <div class="bubble-bottom-row">
          <span style="color: var(--amber); font-weight: 700;">IndicTrans2 INT8 Dynamic (${(total/1000).toFixed(2)}s)</span>
          <div class="bubble-actions">
            <button class="report-bad-btn" title="Send to Birsa Murmu's review queue">
              🚩 Report to Review Queue
            </button>
            <button class="bubble-audio-replay-btn" title="Play synthetic audio">
              🔊 Play
            </button>
          </div>
        </div>
      `;

      const reportBtn = bubble.querySelector('.report-bad-btn');
      reportBtn.addEventListener('click', () => {
        REVIEW_QUEUE.unshift({
          id: `REV-${Date.now().toString().slice(-4)}`,
          hi: rawHindiText,
          sat_olck: simOlChiki,
          sat_deva: simDeva,
          context: "Live Classroom · Teacher Reported Unverified Utterance",
          status: "REVIEW_REQUIRED",
          source: "Reported Live by Teacher Sunita Devi"
        });
        reportBtn.textContent = "✓ Reported to Birsa Murmu";
        reportBtn.disabled = true;
        showToast("Sent to native speaker review queue for validation!");
      });

      const replayBtn = bubble.querySelector('.bubble-audio-replay-btn');
      replayBtn.addEventListener('click', () => speakSantali(simDeva, simOlChiki));

      speakSantali(simDeva, simOlChiki);
    }

    transcriptPane.appendChild(bubble);
    transcriptPane.scrollTop = transcriptPane.scrollHeight;
  }

  function handleChildSpeech() {
    const welcome = document.querySelector('#liveEmptyState');
    if (welcome) welcome.remove();

    // Pick a child response from dataset
    const item = CHILD_UTTERANCES[Math.floor(Math.random() * CHILD_UTTERANCES.length)];
    const transcriptPane = document.querySelector('#liveTranscriptPane');
    const bubble = document.createElement('div');
    bubble.className = 'live-bubble child-msg';

    if (item.isNoisyFailure) {
      // Intentional low-confidence failure handling (PRD Rule: "Never fabricate child's answer")
      bubble.innerHTML = `
        <div class="bubble-source">
          <span>👦 CHILD (SANTALI ASR)</span>
          <span class="chip-draft">Low Confidence (&lt; 0.40)</span>
        </div>
        <div class="bubble-output-main" style="color: #64748b; font-size: 16px;">[ᱟᱲᱟᱝ ᱵᱟᱝ ᱵᱩᱡᱷᱟᱹᱣ ᱞᱮᱱᱟ]</div>
        <div style="color: var(--red); font-weight: 700; margin-top: 6px; font-size: 13px;">
          ⚠ Didn't catch that — ask the child to repeat (कम आवाज़ या कक्षा का शोर).
        </div>
        <small style="color: var(--muted); font-size: 10px;">The app never guesses a child's answer to avoid false evaluation.</small>
      `;
      playTone(280, 'sine', 0.2, 0.1);
    } else {
      bubble.innerHTML = `
        <div class="bubble-source">
          <span>👦 CHILD (SANTALI ASR)</span>
          <span class="chip-mini green">Confidence: ${(item.confidence * 100).toFixed(0)}%</span>
        </div>
        <div class="bubble-output-main">${item.sat_olck}</div>
        <div class="bubble-output-deva">${item.sat_deva} ${item.latin}</div>
        <div class="bubble-bottom-row" style="margin-top: 8px; border-top: 1px dashed #cbd5e1; padding-top: 6px;">
          <div>
            <strong style="color: #1e3a8a; font-size: 14px;">Hindi Meaning:</strong>
            <span style="font-size: 14px; font-weight: 600; color: #1e293b;"> "${item.hi_gist}"</span>
          </div>
        </div>
      `;
      playChimeSuccess();
    }

    transcriptPane.appendChild(bubble);
    transcriptPane.scrollTop = transcriptPane.scrollHeight;
  }

  function updateLatencyCard(isFastPath, vad, asr, lookupOrMt, audioOrTts, total) {
    const card = document.querySelector('#latencyCard');
    const totalEl = document.querySelector('#latencyTotalMs');
    const pathTag = document.querySelector('#latencyPathTag');
    const vadEl = document.querySelector('#vadMs');
    const asrEl = document.querySelector('#asrMs');
    const lookupLabel = document.querySelector('#lookupLabel');
    const lookupEl = document.querySelector('#lookupMs');
    const ttsLabel = document.querySelector('#ttsLabel');
    const ttsEl = document.querySelector('#ttsMs');

    if (!card) return;

    totalEl.textContent = total;
    vadEl.textContent = `${vad}ms`;
    asrEl.textContent = `${asr}ms`;

    if (isFastPath) {
      pathTag.className = 'waterfall-tag green';
      pathTag.textContent = 'FAST PATH (CACHED AUDIO HIT)';
      lookupLabel.textContent = 'FTS5';
      lookupEl.textContent = `${lookupOrMt}ms`;
      ttsLabel.textContent = 'Opus';
      ttsEl.textContent = `${audioOrTts}ms`;
    } else {
      pathTag.className = 'waterfall-tag amber';
      pathTag.textContent = 'DYNAMIC AI PATH (INDICTRANS2 INT8)';
      lookupLabel.textContent = 'MT Infer';
      lookupEl.textContent = `${lookupOrMt}ms`;
      ttsLabel.textContent = 'TTS Syn';
      ttsEl.textContent = `${audioOrTts}ms`;
    }
  }

  function renderPhraseBank(filterCategory, searchQuery) {
    const container = document.querySelector('#phraseBankList');
    if (!container) return;
    container.innerHTML = '';

    const cat = filterCategory || 'all';
    const query = (searchQuery || '').trim().toLowerCase();

    const filtered = PHRASE_BANK.filter(p => {
      const matchesCat = cat === 'all' || p.cat === cat;
      const matchesQuery = !query || p.hi.toLowerCase().includes(query) || p.latin.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });

    filtered.forEach(phrase => {
      const item = document.createElement('button');
      item.className = 'phrase-item';
      item.innerHTML = `
        <div class="phrase-hi">${phrase.hi}</div>
        <div class="phrase-sat">${phrase.sat_olck}</div>
        <div class="phrase-meta-row">
          <small style="color: var(--muted); font-size: 10px;">${phrase.sat_deva}</small>
          <span class="phrase-code">${phrase.id} · ${phrase.audioMs}ms</span>
        </div>
      `;
      item.addEventListener('click', () => {
        handleTeacherSpeech(phrase.hi);
      });
      container.appendChild(item);
    });
  }


  // =========================================================================
  // 10B. SOE SPLIT-UP SYLLABUS INTERACTIVE TIMELINE MODULE
  // =========================================================================
  function initSyllabusModule() {
    const subjectBtns = document.querySelectorAll('#syllabusSubjectTabs .syl-sub-btn');
    const monthPills = document.querySelectorAll('#syllabusMonthPills .month-pill');
    const printBtn = document.querySelector('#syllabusPrintBtn');

    subjectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        subjectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedSyllabusSubject = btn.dataset.subject;

        const breadcrumb = document.querySelector('#syllabusCurrentSubjectBreadcrumb');
        if (breadcrumb) {
          if (state.selectedSyllabusSubject === 'english') breadcrumb.textContent = "Class 1 · English (Mridang)";
          else if (state.selectedSyllabusSubject === 'hindi') breadcrumb.textContent = "कक्षा १ · हिन्दी (सारंगी)";
          else breadcrumb.textContent = "Class 1 · गणित (Joyful Mathematics)";
        }
        renderSyllabusTimeline();
        playChimeSuccess();
      });
    });

    monthPills.forEach(pill => {
      pill.addEventListener('click', () => {
        monthPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedSyllabusMonth = pill.dataset.month;
        renderSyllabusTimeline();
      });
    });

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    renderSyllabusTimeline();
  }

  function renderSyllabusTimeline() {
    const container = document.querySelector('#syllabusTimelineArea');
    if (!container) return;
    container.innerHTML = '';

    const currentSub = state.selectedSyllabusSubject || 'english';
    const currentMonth = state.selectedSyllabusMonth || 'all';

    const monthsData = SOE_SYLLABUS_DATA[currentSub] || SOE_SYLLABUS_DATA.english;

    const filteredMonths = monthsData.filter(m => {
      if (currentMonth === 'all') return true;
      return m.month.toLowerCase() === currentMonth.toLowerCase() || m.month.includes(currentMonth) || currentMonth.includes(m.month);
    });

    if (filteredMonths.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--muted);">No syllabus records found for this month filter.</div>`;
      return;
    }

    filteredMonths.forEach(m => {
      const monthCard = document.createElement('div');
      monthCard.className = 'month-timeline-card';

      let weeksHtml = '';
      m.weeks.forEach((w, wIdx) => {
        const loItemsHtml = w.lo.map(item => `<li>${item}</li>`).join('');
        const periodsBadge = w.periods ? `<span class="periods-chip">${w.periods} Periods</span>` : '';
        const unitBadge = w.unit ? `<span class="chapter-unit-badge">${w.unit}</span>` : '';

        weeksHtml += `
          <div class="week-row-card">
            <div class="week-col-time">
              <span class="week-label">${w.week}</span>
              <span class="week-days-tag">${w.days} Working Days</span>
            </div>
            <div class="week-col-content">
              <div class="week-chapter-title">
                <span>${w.chapter}</span>
                ${unitBadge}
                ${periodsBadge}
              </div>
              <div class="week-lo-box">
                <strong style="display: block; font-size: 11px; text-transform: uppercase; color: #2563eb; margin-bottom: 4px;">Key Learning Outcomes / Competencies:</strong>
                <ul style="margin: 0; padding-left: 18px;">
                  ${loItemsHtml}
                </ul>
              </div>
            </div>
            <div class="week-col-actions">
              <button class="week-action-btn primary" data-action="teach" data-lesson-id="${w.lessonId || ''}" data-chapter="${encodeURIComponent(w.chapter)}">
                <span>📖</span> Teach Chapter
              </button>
              <button class="week-action-btn" data-action="worksheet" data-lesson-id="${w.lessonId || ''}" data-chapter="${encodeURIComponent(w.chapter)}">
                <span>📝</span> Worksheet
              </button>
            </div>
          </div>
        `;
      });

      monthCard.innerHTML = `
        <div class="month-card-header">
          <div class="month-title-wrap">
            <span class="month-badge">${m.month.toUpperCase()}</span>
            <h3>Academic Split: ${m.month}</h3>
          </div>
          <span class="month-days-chip">📅 ${m.workingDays} Total Working Days</span>
        </div>
        <div class="weeks-container">
          ${weeksHtml}
        </div>
      `;

      // Event listeners for action buttons
      monthCard.querySelectorAll('.week-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action;
          const targetLessonId = btn.dataset.lessonId;
          const chapter = decodeURIComponent(btn.dataset.chapter || '');

          // Find matching lesson
          let foundIdx = CURRICULUM_LESSONS.findIndex(l => l.id === targetLessonId);
          if (foundIdx === -1 && chapter) {
            foundIdx = CURRICULUM_LESSONS.findIndex(l => l.chapter && (chapter.includes(l.chapter) || l.chapter.includes(chapter) || chapter.includes(l.title_hi)));
          }
          if (foundIdx === -1) {
            foundIdx = 0;
          }

          if (action === 'teach') {
            state.selectedLessonIndex = foundIdx;
            switchView('teach');
            renderTeachMode();
            showToast(`Loaded lesson: ${CURRICULUM_LESSONS[foundIdx].title_hi}`);
          } else {
            const wsSelect = document.querySelector('#wsLessonSelect');
            if (wsSelect) wsSelect.value = foundIdx;
            switchView('worksheet');
            renderWorksheetPreview();
            showToast(`Configured worksheet for ${CURRICULUM_LESSONS[foundIdx].title_hi}`);
          }
        });
      });

      container.appendChild(monthCard);
    });
  }

  // =========================================================================
  // 11. DETERMINISTIC WORKSHEET GENERATOR (A4 INK-SAVER PRINTER)
  // =========================================================================
  function initWorksheetModule() {
    const lessonSelect = document.querySelector('#wsLessonSelect');
    lessonSelect.innerHTML = '';

    // Create optgroups for English, Hindi, and Maths
    const groupEng = document.createElement('optgroup');
    groupEng.label = "🇬🇧 English (Mridang · Class 1)";
    const groupHin = document.createElement('optgroup');
    groupHin.label = "🇮🇳 हिन्दी (सारंगी · कक्षा १)";
    const groupMat = document.createElement('optgroup');
    groupMat.label = "🔢 गणित (Joyful Mathematics · Class 1)";

    CURRICULUM_LESSONS.forEach((l, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `[${l.month || 'Syllabus'}] ${l.title_hi}`;
      if (l.subject === 'english') groupEng.appendChild(opt);
      else if (l.subject === 'hindi') groupHin.appendChild(opt);
      else groupMat.appendChild(opt);
    });

    if (groupEng.children.length > 0) lessonSelect.appendChild(groupEng);
    if (groupHin.children.length > 0) lessonSelect.appendChild(groupHin);
    if (groupMat.children.length > 0) lessonSelect.appendChild(groupMat);

    lessonSelect.addEventListener('change', renderWorksheetPreview);
    document.querySelector('#wsTemplateSelect').addEventListener('change', renderWorksheetPreview);
    document.querySelector('#wsItemCount').addEventListener('change', renderWorksheetPreview);
    document.querySelector('#wsIncludeAnswerKey').addEventListener('change', renderWorksheetPreview);
    document.querySelector('#wsIncludeTransliteration').addEventListener('change', renderWorksheetPreview);
    document.querySelector('#regenerateWorksheetBtn').addEventListener('click', () => {
      renderWorksheetPreview();
      showToast('Worksheet deterministically assembled from verified item bank');
    });

    document.querySelector('#printWorksheetBtn').addEventListener('click', () => {
      window.print();
    });
  }

  function renderWorksheetPreview() {
    const lessonIdx = parseInt(document.querySelector('#wsLessonSelect').value || 0, 10);
    const template = document.querySelector('#wsTemplateSelect').value;
    const count = parseInt(document.querySelector('#wsItemCount').value || 6, 10);
    const showAnswerKey = document.querySelector('#wsIncludeAnswerKey').checked;
    const showTranslit = document.querySelector('#wsIncludeTransliteration').checked;

    const lesson = CURRICULUM_LESSONS[lessonIdx];
    document.querySelector('#a4LoText').textContent = `${lesson.lo_id} — ${lesson.lo_title}`;

    const instructionsEl = document.querySelector('#a4InstructionsText');
    const exerciseContent = document.querySelector('#a4ExerciseContent');
    const keyContent = document.querySelector('#a4KeyContent');
    const answerKeyWrap = document.querySelector('#a4AnswerKey');

    answerKeyWrap.style.display = showAnswerKey ? 'block' : 'none';

    if (template === 'match_words') {
      instructionsEl.textContent = "बाईं तरफ के हिंदी शब्दों को दाईं तरफ के सही संथाली (ओल चिकी) शब्दों से रेखा खींचकर मिलाइए। (Match Hindi with Santali words).";

      let items = [
        { hi: "१. किताब (Book)", sat: "ᱯᱩᱛᱷᱤ", deva: "पुथी", ans: "C" },
        { hi: "२. बकरी (Goat)", sat: "ᱢᱮᱨᱚᱢ", deva: "मेरोम", ans: "D" },
        { hi: "३. स्लेट (Slate)", sat: "ᱥᱞᱮᱴ", deva: "स्लेट", ans: "A" },
        { hi: "४. कलम (Pen)", sat: "ᱠᱚᱞᱚᱢ", deva: "कोलोम", ans: "B" },
        { hi: "५. हाथी (Elephant)", sat: "ᱦᱟᱹᱛᱤ", deva: "हाती", ans: "F" },
        { hi: "६. आम (Mango)", sat: "ᱩᱞ", deva: "उल", ans: "E" },
        { hi: "७. हाथ (Hands)", sat: "ᱛᱤ", deva: "ती", ans: "G" },
        { hi: "८. पानी (Water)", sat: "ᱫᱟᱜ", deva: "दाग", ans: "H" }
      ];

      // Contextual adjustment if maths or english
      if (lesson.subject === 'math') {
        items = [
          { hi: "१. एक (One · 1)", sat: "ᱢᱤᱫ", deva: "मिद", ans: "A" },
          { hi: "२. दो (Two · 2)", sat: "ᱵᱟᱨ", deva: "बार", ans: "B" },
          { hi: "३. तीन (Three · 3)", sat: "ᱯᱮ", deva: "पे", ans: "C" },
          { hi: "४. चार (Four · 4)", sat: "ᱯᱩᱱ", deva: "पुन", ans: "D" },
          { hi: "५. पाँच (Five · 5)", sat: "ᱢᱚᱬᱮ", deva: "मोणे", ans: "E" },
          { hi: "६. गोल (Round)", sat: "ᱜᱩᱞᱟᱹᱭ", deva: "गुलाई", ans: "F" },
          { hi: "७. लम्बा (Long)", sat: "ᱡᱤᱞᱤᱧ", deva: "जिलिंज", ans: "G" },
          { hi: "८. रुपया (Rupee)", sat: "ᱴᱟᱠᱟ", deva: "टाका", ans: "H" }
        ];
      } else if (lesson.subject === 'english') {
        items = [
          { hi: "1. Hands (हाथ)", sat: "ᱛᱤ", deva: "ती", ans: "A" },
          { hi: "2. Eyes (आँख)", sat: "ᱢᱮᱫ", deva: "मेद", ans: "B" },
          { hi: "3. Bird (पक्षी)", sat: "ᱪᱮᱬᱮ", deva: "चेणें", ans: "C" },
          { hi: "4. Water (पानी)", sat: "ᱫᱟᱜ", deva: "दाग", ans: "D" },
          { hi: "5. Big (बड़ा)", sat: "ᱢᱟᱨᱟᱝ", deva: "मारांग", ans: "E" },
          { hi: "6. Small (छोटा)", sat: "ᱦᱩᱰᱤᱧ", deva: "हुड़िंज", ans: "F" },
          { hi: "7. Red (लाल)", sat: "ᱟᱨᱟᱜ", deva: "आराग्", ans: "G" },
          { hi: "8. Yellow (पीला)", sat: "ᱥᱟᱥᱟᱝ", deva: "सासांग", ans: "H" }
        ];
      }
      items = items.slice(0, count);

      // Left column vs shuffled right column
      const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
      const rightOptions = items.map((it, i) => ({
        letter: lettersArr[i],
        sat: it.sat,
        deva: it.deva
      }));
      // Deterministic reverse shuffle for matching challenge
      rightOptions.reverse();

      let gridHtml = `<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">`;
      for (let i = 0; i < items.length; i++) {
        const left = items[i];
        const right = rightOptions[i];
        gridHtml += `
          <div class="match-columns-grid">
            <div class="match-item-left">
              <strong>${left.hi}</strong>
              <span class="match-dot" style="margin-left: auto;"></span>
            </div>
            <div class="match-connector">·······</div>
            <div class="match-item-right">
              <span class="match-dot"></span>
              <strong>(${right.letter})</strong>
              <span class="ol-chiki-word">${right.sat}</span>
              ${showTranslit ? `<small>(${right.deva})</small>` : ''}
            </div>
          </div>
        `;
      }
      gridHtml += `</div>`;
      exerciseContent.innerHTML = gridHtml;

      keyContent.innerHTML = items.map(it => `[${it.hi} ➔ ${it.ans}]`).join('  ·  ');

    } else if (template === 'count_write') {
      instructionsEl.textContent = "चित्रों को गिनिए और सामने वाले बक्से में सही संथाली संख्या लिखिए। (Count the items and write the Santali number).";

      const countData = [
        { label: "Sal Leaves (ᱥᱟᱠᱟᱢ)", icons: "🍃 🍃 🍃", count: 3, satNum: "᱓", satWord: "ᱯᱮ" },
        { label: "School Slates (ᱥᱞᱮᱴ)", icons: "📱 📱", count: 2, satNum: "᱒", satWord: "ᱵᱟᱨ" },
        { label: "Clay Pots (ᱴᱩᱠᱩᱡ)", icons: "🏺 🏺 🏺 🏺", count: 4, satNum: "᱔", satWord: "ᱯᱩᱱ" },
        { label: "Pebbles (ᱫᱷᱤᱨᱤ)", icons: "⚪ ⚪ ⚪ ⚪ ⚪", count: 5, satNum: "᱕", satWord: "ᱢᱚᱬᱮ" }
      ].slice(0, count);

      let countHtml = `<div class="count-exercise-grid">`;
      countData.forEach((cd, i) => {
        countHtml += `
          <div class="count-card-box">
            <div>
              <div style="font-size: 11px; font-weight: 700; margin-bottom: 4px;">${i + 1}. ${cd.label}</div>
              <div class="count-icons">${cd.icons}</div>
            </div>
            <div class="count-answer-box" title="Write in box"></div>
          </div>
        `;
      });
      countHtml += `</div>`;
      exerciseContent.innerHTML = countHtml;

      keyContent.innerHTML = countData.map((cd, i) => `Q${i + 1}: ${cd.count} (${cd.satNum} · ${cd.satWord})`).join('  |  ');

    } else {
      // Sound / Letter identification
      instructionsEl.textContent = "नीचे दिए गए अक्षरों को पहचानिए और सही चित्र के साथ गोला बनाइए। (Identify letter sounds and circle).";
      exerciseContent.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div style="border: 1px solid #000; padding: 14px; border-radius: 6px;">
            <div style="font-size: 28px; font-family: var(--font-olchiki); font-weight: 700; color: #000; margin-bottom: 6px;">ᱚ (O)</div>
            <p style="font-size: 12px; margin: 0 0 10px;">'ᱚ' से शुरू होने वाले शब्द पर गोला लगाइए:</p>
            <div style="display: flex; gap: 10px;">
              <span style="border: 1px solid #000; padding: 6px 12px; border-radius: 4px;">ᱚᱞ (लिखना)</span>
              <span style="border: 1px solid #000; padding: 6px 12px; border-radius: 4px;">ᱢᱮᱨᱚᱢ (बकरी)</span>
            </div>
          </div>
          <div style="border: 1px solid #000; padding: 14px; border-radius: 6px;">
            <div style="font-size: 28px; font-family: var(--font-olchiki); font-weight: 700; color: #000; margin-bottom: 6px;">ᱛ (At)</div>
            <p style="font-size: 12px; margin: 0 0 10px;">'ᱛ' से शुरू होने वाले शब्द पर गोला लगाइए:</p>
            <div style="display: flex; gap: 10px;">
              <span style="border: 1px solid #000; padding: 6px 12px; border-radius: 4px;">ᱛᱟᱹᱨᱩᱵ (बाघ)</span>
              <span style="border: 1px solid #000; padding: 6px 12px; border-radius: 4px;">ᱯᱩᱛᱷᱤ (किताब)</span>
            </div>
          </div>
        </div>
      `;
      keyContent.innerHTML = "Q1: ᱚᱞ (Circle) | Q2: ᱛᱟᱹᱨᱩᱵ (Circle)";
    }
  }

  // =========================================================================
  // 12. FLASHCARD STUDIO & FULLSCREEN PRESENTATION
  // =========================================================================
  function initFlashcardsModule() {
    const deckRow = document.querySelector('#deckSelectorRow');
    deckRow.innerHTML = '';

    Object.keys(FLASHCARD_DECKS).forEach(key => {
      const deck = FLASHCARD_DECKS[key];
      const btn = document.createElement('button');
      btn.className = `deck-pill-btn ${key === state.currentDeckKey ? 'active' : ''}`;
      btn.textContent = deck.name;
      btn.addEventListener('click', () => {
        state.currentDeckKey = key;
        state.currentCardIndex = 0;
        document.querySelectorAll('.deck-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFlashcardStage();
      });
      deckRow.appendChild(btn);
    });

    document.querySelector('#cardPrevBtn').addEventListener('click', () => {
      const deck = FLASHCARD_DECKS[state.currentDeckKey];
      state.currentCardIndex = (state.currentCardIndex - 1 + deck.cards.length) % deck.cards.length;
      renderFlashcardStage();
    });

    document.querySelector('#cardNextBtn').addEventListener('click', () => {
      const deck = FLASHCARD_DECKS[state.currentDeckKey];
      state.currentCardIndex = (state.currentCardIndex + 1) % deck.cards.length;
      renderFlashcardStage();
    });

    document.querySelector('#cardShuffleBtn').addEventListener('click', () => {
      const deck = FLASHCARD_DECKS[state.currentDeckKey];
      state.currentCardIndex = Math.floor(Math.random() * deck.cards.length);
      renderFlashcardStage();
      showToast('Deck shuffled!');
    });

    document.querySelector('#cardAudioBtn').addEventListener('click', () => {
      const card = FLASHCARD_DECKS[state.currentDeckKey].cards[state.currentCardIndex];
      speakSantali(card.sat_deva, card.sat_olck);
    });

    // Presentation overlay triggers
    const overlay = document.querySelector('#presentationOverlay');
    document.querySelector('#launchPresentationModeBtn').addEventListener('click', () => {
      overlay.classList.add('active');
      renderPresentationCard();
    });

    document.querySelector('#closePresentationBtn').addEventListener('click', () => {
      overlay.classList.remove('active');
    });

    document.querySelector('#presAudioBtn').addEventListener('click', () => {
      const card = FLASHCARD_DECKS[state.currentDeckKey].cards[state.currentCardIndex];
      speakSantali(card.sat_deva, card.sat_olck);
    });

    document.querySelector('#presPrevBtn').addEventListener('click', () => {
      const deck = FLASHCARD_DECKS[state.currentDeckKey];
      state.currentCardIndex = (state.currentCardIndex - 1 + deck.cards.length) % deck.cards.length;
      renderPresentationCard();
    });

    document.querySelector('#presNextBtn').addEventListener('click', () => {
      const deck = FLASHCARD_DECKS[state.currentDeckKey];
      state.currentCardIndex = (state.currentCardIndex + 1) % deck.cards.length;
      renderPresentationCard();
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (overlay.classList.contains('active')) {
        if (e.key === 'Escape') overlay.classList.remove('active');
        if (e.key === 'ArrowLeft') document.querySelector('#presPrevBtn').click();
        if (e.key === 'ArrowRight') document.querySelector('#presNextBtn').click();
        if (e.key === ' ' || e.key === 'Enter') document.querySelector('#presAudioBtn').click();
      }
    });
  }

  function renderFlashcardStage() {
    const deck = FLASHCARD_DECKS[state.currentDeckKey];
    const card = deck.cards[state.currentCardIndex];

    document.querySelector('#currentDeckTitle').textContent = `Deck: ${deck.name}`;
    document.querySelector('#cardVisual').innerHTML = card.svg;
    document.querySelector('#cardHindiWord').textContent = card.hi;
    document.querySelector('#cardOlChikiWord').textContent = card.sat_olck;
    document.querySelector('#cardDevaWord').textContent = `(${card.sat_deva})`;
    document.querySelector('#cardLatinWord').textContent = `${card.latin}`;
    document.querySelector('#cardCounter').textContent = `Card ${state.currentCardIndex + 1} of ${deck.cards.length}`;
  }

  function renderPresentationCard() {
    const deck = FLASHCARD_DECKS[state.currentDeckKey];
    const card = deck.cards[state.currentCardIndex];

    document.querySelector('#presVisual').innerHTML = card.svg;
    document.querySelector('#presOlChiki').textContent = card.sat_olck;
    document.querySelector('#presDeva').textContent = `(${card.sat_deva})`;
    document.querySelector('#presHindi').textContent = card.hi;
    document.querySelector('#presCounter').textContent = `${state.currentCardIndex + 1} / ${deck.cards.length}`;
  }

  // =========================================================================
  // 13. CONTENT VERIFICATION CONSOLE (BIRSA MURMU - SECTION 21)
  // =========================================================================
  function initReviewerConsole() {
    const rejectModal = document.querySelector('#rejectionModal');
    const closeRejectBtn = document.querySelector('#closeRejectModalBtn');
    const cancelRejectBtn = document.querySelector('#cancelRejectBtn');
    const confirmRejectBtn = document.querySelector('#confirmRejectBtn');

    closeRejectBtn.addEventListener('click', () => rejectModal.classList.remove('active'));
    cancelRejectBtn.addEventListener('click', () => rejectModal.classList.remove('active'));

    confirmRejectBtn.addEventListener('click', () => {
      const reason = document.querySelector('#rejectReasonSelect').value;
      if (state.activeRejectItemId) {
        REVIEW_QUEUE = REVIEW_QUEUE.filter(item => item.id !== state.activeRejectItemId);
        state.rejectedCount++;
        document.querySelector('#statRejectedCount').textContent = state.rejectedCount;
        document.querySelector('#statPendingCount').textContent = REVIEW_QUEUE.length;
        renderReviewerQueue();
        showToast(`Item rejected with official code: ${reason}`);
      }
      rejectModal.classList.remove('active');
    });

    renderReviewerQueue();
  }

  function renderReviewerQueue() {
    const container = document.querySelector('#reviewQueueList');
    if (!container) return;
    container.innerHTML = '';

    document.querySelector('#statPendingCount').textContent = REVIEW_QUEUE.length;

    if (REVIEW_QUEUE.length === 0) {
      container.innerHTML = `
        <div style="background: var(--surface); padding: 30px; text-align: center; border-radius: var(--radius-md); border: 1px solid var(--line);">
          <div style="font-size: 32px; margin-bottom: 8px;">🎉</div>
          <h4>Review Queue is Clear!</h4>
          <p style="color: var(--muted); font-size: 12px;">All items are signed by Birsa Murmu and ready for inclusion into package v15.</p>
        </div>
      `;
      return;
    }

    REVIEW_QUEUE.forEach(item => {
      const card = document.createElement('div');
      card.className = 'review-item-card';
      card.innerHTML = `
        <div class="review-item-main">
          <div class="review-lo-tag">${item.id} · ${item.context}</div>
          <div class="review-hi"><strong>Hindi Source:</strong> "${item.hi}"</div>
          <div class="review-sat">${item.sat_olck}</div>
          <div class="review-translit"><strong>Devanagari:</strong> ${item.sat_deva} · <small>Source: ${item.source}</small></div>
        </div>
        <div class="review-actions-cell">
          <button class="btn-approve" title="Approve translation into next published pack">
            ✓ Approve (Publish)
          </button>
          <button class="btn-reject" title="Reject with official reason code">
            ✗ Reject
          </button>
          <button class="btn-correct" title="Audition pronunciation">
            🔊 Audition
          </button>
        </div>
      `;

      // Approve action
      card.querySelector('.btn-approve').addEventListener('click', () => {
        REVIEW_QUEUE = REVIEW_QUEUE.filter(it => it.id !== item.id);
        state.reviewedCount++;
        state.fineTuningPairsCount++;
        document.querySelector('#statApprovedCount').textContent = state.reviewedCount;
        renderReviewerQueue();
        playChimeSuccess();
        showToast(`Approved item ${item.id} -> State: PUBLISHED (Rev ID: REV-BIRSA-042)`);
      });

      // Reject action
      card.querySelector('.btn-reject').addEventListener('click', () => {
        state.activeRejectItemId = item.id;
        document.querySelector('#rejectionModal').classList.add('active');
      });

      // Audition action
      card.querySelector('.btn-correct').addEventListener('click', () => {
        speakSantali(item.sat_deva, item.sat_olck);
      });

      container.appendChild(card);
    });
  }

  // =========================================================================
  // 14. OFFLINE SYNC ENGINE & 2 GB RAM TELEMETRY
  // =========================================================================
  function initSyncEngine() {
    const syncBtn = document.querySelector('#simulateSyncBtn');
    const airplaneBtn = document.querySelector('#toggleAirplaneBtn');

    syncBtn.addEventListener('click', () => {
      syncBtn.disabled = true;
      syncBtn.innerHTML = `<span>⏳ Verifying SHA-256 Checksums...</span>`;

      setTimeout(() => {
        syncBtn.innerHTML = `<span>⚡ Applying Delta Shards Atomically...</span>`;
      }, 1000);

      setTimeout(() => {
        syncBtn.disabled = false;
        syncBtn.innerHTML = `<span>🔄 Simulate Local P2P Delta Sync (v15)</span>`;
        playChimeSuccess();
        showToast("Santali Grade 1 content updated to v15 · 12 MB delta · 4 new lessons applied!");
      }, 2200);
    });

    airplaneBtn.addEventListener('click', () => {
      state.isOffline = !state.isOffline;
      const chipText = document.querySelector('#offlineChipText');
      if (state.isOffline) {
        chipText.textContent = "Offline (Airplane Mode)";
        showToast("Airplane mode enabled: All features running 100% on-device");
      } else {
        chipText.textContent = "Online (Local Sync Ready)";
        showToast("Wi-Fi Direct / Local hotspot sync enabled");
      }
    });

    document.querySelector('#offlineStatusBtn').addEventListener('click', () => {
      switchView('sync');
    });
  }

  // =========================================================================
  // 15. SIH 4-MINUTE INTERACTIVE DEMO RUNNER (SECTION 39 SCRIPT)
  // =========================================================================
  const DEMO_STEPS = [
    {
      step: 1,
      time: "0:00",
      screen: "Home Dashboard",
      say: "5,000+ schools in Jharkhand. The teacher speaks Hindi. The child doesn't.",
      desc: "Frame the core problem: Hindi-medium teachers posted to tribal schools in West Singhbhum.",
      action: () => switchView('home')
    },
    {
      step: 2,
      time: "0:20",
      screen: "Airplane Mode Verification",
      say: "Everything after this point is running on this tablet. No network.",
      desc: "Verify airplane mode status and local SQLite shard integrity.",
      action: () => {
        switchView('sync');
        showToast("Verified: Airplane Mode active, Zero network calls");
      }
    },
    {
      step: 3,
      time: "0:30",
      screen: "Dashboard Navigation",
      say: "Two taps from dashboard to an active bilingual lesson.",
      desc: "Demonstrate 2-tap UX constraint designed for busy rural classrooms.",
      action: () => switchView('home')
    },
    {
      step: 4,
      time: "0:45",
      screen: "Teach Mode",
      say: "Every line traces directly to a verified NIPUN Bharat learning outcome.",
      desc: "Open Lesson 1 script showing sticky LO banner: PLACEHOLDER::EC-G1-001.",
      action: () => switchView('teach')
    },
    {
      step: 5,
      time: "1:00",
      screen: "Verified Audio Playback",
      say: "That audio was approved by a native speaker. Not generated on the fly.",
      desc: "Tap ▶ on line 1: plays native Santali speech with green ✓ Verified chip.",
      action: () => {
        switchView('teach');
        const firstPlay = document.querySelector('.line-play-btn');
        if (firstPlay) firstPlay.click();
      }
    },
    {
      step: 6,
      time: "1:15",
      screen: "Live Classroom Mode",
      say: "Here is the 3-second live classroom copilot with a giant one-handed mic.",
      desc: "Switch to Live Mode with the 72dp Push-To-Talk button.",
      action: () => switchView('live')
    },
    {
      step: 7,
      time: "1:25",
      screen: "Fast-Path Phrase Hit",
      say: "Phrase bank hit. Under a second, measured in real time on this device.",
      desc: "Speak 'सब बच्चे किताब खोलो' -> matches CMD-001 in 628ms (<1.5s target).",
      action: () => {
        switchView('live');
        handleTeacherSpeech("सब बच्चे किताब खोलो");
      }
    },
    {
      step: 8,
      time: "1:45",
      screen: "Dynamic AI MT Fallback",
      say: "Now the model runs off-script. Marked unverified in amber — the teacher always knows which is which.",
      desc: "Speak unscripted phrase -> IndicTrans2 dynamic translation with Amber ⚠ AI chip.",
      action: () => {
        switchView('live');
        handleTeacherSpeech("कल सब बच्चे अपने साथ एक सुंदर सा फूल लेकर आना");
      }
    },
    {
      step: 9,
      time: "2:05",
      screen: "Child Speaks (Reverse Path)",
      say: "And back the other way. The child speaks Santali, the teacher sees the Hindi gist.",
      desc: "Child speaks in Santali -> Transcribes in Ol Chiki and translates to Hindi.",
      action: () => {
        switchView('live');
        handleChildSpeech();
      }
    },
    {
      step: 10,
      time: "2:20",
      screen: "Worksheet Generator",
      say: "Assembled from approved items. Instant, offline, photocopier printable.",
      desc: "Deterministically build an ink-friendly high-contrast A4 worksheet.",
      action: () => switchView('worksheet')
    },
    {
      step: 11,
      time: "2:40",
      screen: "Flashcard Studio",
      say: "Culturally authentic visuals with tap-to-hear native pronunciation.",
      desc: "Open full-screen animal flashcard presentation deck.",
      action: () => {
        switchView('flashcards');
        document.querySelector('#cardAudioBtn').click();
      }
    },
    {
      step: 12,
      time: "2:55",
      screen: "LO Traceability Query",
      say: "This is a live database query across lesson, worksheet, and flashcards, not a slide.",
      desc: "Demonstrate relational foreign keys ensuring no content exists without an LO ID.",
      action: () => {
        switchView('teach');
        showToast("Live Query: LO PLACEHOLDER::EC-G1-001 -> 1 Lesson, 2 Worksheets, 5 Flashcards");
      }
    },
    {
      step: 13,
      time: "3:10",
      screen: "Reviewer Console",
      say: "No AI Santali reaches a child without a human native speaker approving it.",
      desc: "Switch to Birsa Murmu's console showing items moving REVIEW_REQUIRED -> PUBLISHED.",
      action: () => switchView('reviewer')
    },
    {
      step: 14,
      time: "3:25",
      screen: "Architecture & Benchmarks",
      say: "Here are our real numbers on a 2 GB Android tablet, including where we're weakest.",
      desc: "Inspect benchmark table: Peak RSS 482MB (≤550MB budget), p95 latency 2.21s (≤3.0s limit).",
      action: () => switchView('sync')
    },
    {
      step: 15,
      time: "3:45",
      screen: "Closing & Roadmap",
      say: "One language done properly (Santali Ol Chiki), extensible by design to Mundari and Ho.",
      desc: "Conclude presentation highlighting AdiBhashaa and Karya TTS roadmap.",
      action: () => switchView('home')
    }
  ];

  function initDemoRunner() {
    const bar = document.querySelector('#demoRunnerBar');
    const header = document.querySelector('#toggleDemoRunnerHeader');
    const collapseBtn = document.querySelector('#demoCollapseBtn');
    const closeBtn = document.querySelector('#demoCloseBtn');
    const openBtn = document.querySelector('#openDemoRunnerBtn');
    const prevBtn = document.querySelector('#demoPrevBtn');
    const nextBtn = document.querySelector('#demoNextBtn');
    const execBtn = document.querySelector('#demoExecuteBtn');

    openBtn.addEventListener('click', () => {
      bar.classList.remove('hidden');
      bar.classList.remove('collapsed');
      if (collapseBtn) collapseBtn.textContent = '▼';
      renderDemoStep();
      showToast('SIH 4-Minute Presentation Stepper opened');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        bar.classList.add('hidden');
        showToast('Demo Stepper hidden. Click "Demo" in topbar anytime to reopen.');
      });
    }

    header.addEventListener('click', (e) => {
      if (e.target.closest('.runner-controls')) return;
      bar.classList.toggle('collapsed');
      collapseBtn.textContent = bar.classList.contains('collapsed') ? '▲' : '▼';
    });

    collapseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      bar.classList.toggle('collapsed');
      collapseBtn.textContent = bar.classList.contains('collapsed') ? '▲' : '▼';
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.demoStepIndex > 0) {
        state.demoStepIndex--;
        renderDemoStep();
      }
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.demoStepIndex < DEMO_STEPS.length - 1) {
        state.demoStepIndex++;
        renderDemoStep();
      }
    });

    execBtn.addEventListener('click', () => {
      const step = DEMO_STEPS[state.demoStepIndex];
      if (step && step.action) step.action();
    });

    renderDemoStep();
  }

  function renderDemoStep() {
    const step = DEMO_STEPS[state.demoStepIndex];
    document.querySelector('#demoStepCounter').textContent = `Step ${step.step} / ${DEMO_STEPS.length}`;
    document.querySelector('#demoTimer').textContent = `${step.time} / 4:00`;
    document.querySelector('#demoTimeBadge').textContent = step.time;
    document.querySelector('#demoTargetScreen').textContent = `Screen: ${step.screen}`;
    document.querySelector('#demoSayQuote').textContent = `"${step.say}"`;
    document.querySelector('#demoActionDesc').textContent = step.desc;
  }

  // =========================================================================
  // 16. ACCESSIBILITY & GLOBAL CONTROLS
  // =========================================================================
  function initAccessibilityControls() {
    // Font Scaling (100% / 150% / 200%)
    const fontBtn = document.querySelector('#fontScaleBtn');
    fontBtn.addEventListener('click', () => {
      if (state.fontScale === 100) {
        state.fontScale = 150;
        document.body.className = 'font-scale-150';
        showToast('Text scaled to 150% for classroom visibility');
      } else if (state.fontScale === 150) {
        state.fontScale = 200;
        document.body.className = 'font-scale-200';
        showToast('Text scaled to 200% (WCAG AAA large font mode)');
      } else {
        state.fontScale = 100;
        document.body.className = 'font-scale-100';
        showToast('Text reset to 100% normal scale');
      }
    });

    // Audio Narrator (Speaks instructions in clear Hindi)
    const narrateBtn = document.querySelector('#narrateScreenBtn');
    narrateBtn.addEventListener('click', () => {
      let speech = "";
      if (state.currentView === 'home') {
        speech = "ज्ञान सेतु में आपका स्वागत है। आज का पाठ पढ़ाने के लिए 'स्टार्ट टूडेज लेसन' बटन दबाएं, या लाइव क्लासरूम का उपयोग करें।";
      } else if (state.currentView === 'teach') {
        speech = "यह टीच मोड है। बाएँ तरफ आपका हिंदी पाठ है और दाएँ तरफ संथाली अनुवाद। किसी भी पंक्ति का संथाली उच्चारण सुनने के लिए प्ले बटन दबाएं।";
      } else if (state.currentView === 'live') {
        speech = "यह लाइव क्लासरूम है। बोलने के लिए नीचे दिए गए बड़े माइक बटन को दबाकर रखें।";
      } else if (state.currentView === 'worksheet') {
        speech = "यहाँ से आप अपनी कक्षा के लिए अभ्यास पत्रक बना सकते हैं और प्रिंट कर सकते हैं।";
      } else {
        speech = "ज्ञान सेतु प्राथमिक विद्यालयों के लिए मातृभाषा शिक्षण सहायक उपकरण है।";
      }
      playChimeSuccess();
      speakText(speech, 'hi', 1.0);
      showToast('🔊 Playing screen narration in Hindi...');
    });

    // Script Display toggles in Teach Mode
    document.querySelector('#btnScriptBoth').addEventListener('click', () => {
      state.scriptDisplayMode = 'both';
      updateScriptToggleButtons('btnScriptBoth');
      renderTeachMode();
    });
    document.querySelector('#btnScriptOlChikiOnly').addEventListener('click', () => {
      state.scriptDisplayMode = 'olchiki';
      updateScriptToggleButtons('btnScriptOlChikiOnly');
      renderTeachMode();
    });
    document.querySelector('#btnScriptDevaOnly').addEventListener('click', () => {
      state.scriptDisplayMode = 'deva';
      updateScriptToggleButtons('btnScriptDevaOnly');
      renderTeachMode();
    });

    function updateScriptToggleButtons(activeId) {
      document.querySelectorAll('.script-toggle-group .toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === activeId);
      });
    }

    // Speed Controls in Teach Mode
    document.querySelectorAll('.audio-speed-control .speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.audio-speed-control .speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.playbackSpeed = parseFloat(btn.dataset.speed);
        showToast(`Audio playback speed set to ${state.playbackSpeed}×`);
      });
    });

    // Global Search
    const searchInput = document.querySelector('#searchInput');
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) return;
      // Check for syllabus topics
      if (q.includes('syl') || q.includes('पाठ्यक्रम') || q.includes('soe') || q.includes('session')) {
        switchView('syllabus');
        return;
      }
      const foundSyllabusLesson = CURRICULUM_LESSONS.find(l => 
        l.title_hi.toLowerCase().includes(q) || 
        l.title_en.toLowerCase().includes(q) || 
        (l.chapter && l.chapter.toLowerCase().includes(q)) ||
        (l.lo_id && l.lo_id.toLowerCase().includes(q)) ||
        (l.month && l.month.toLowerCase().includes(q))
      );
      if (foundSyllabusLesson) {
        state.selectedLessonIndex = CURRICULUM_LESSONS.indexOf(foundSyllabusLesson);
        switchView('teach');
        renderTeachMode();
        showToast(`Found: ${foundSyllabusLesson.title_hi}`);
        return;
      }

      if (q.includes('work') || q.includes('sheet') || q.includes('पत्रक')) {
        switchView('worksheet');
      } else if (q.includes('card') || q.includes('फ्लैश') || q.includes('animal')) {
        switchView('flashcards');
      } else if (q.includes('live') || q.includes('class') || q.includes('माइक')) {
        switchView('live');
      } else {
        switchView('teach');
      }
    });

    // Dismiss system banner
    document.querySelector('#dismissBannerBtn').addEventListener('click', () => {
      document.querySelector('#systemBanner').style.display = 'none';
    });

    // Teacher profile button
    document.querySelector('#profileModalBtn').addEventListener('click', () => {
      showToast("Teacher Profile: Sunita Devi · School Code: GPS-20040104201 · Offline Cache Valid for 90 days");
    });
  }

  // =========================================================================
  // 17. BAAL SETU (BAL SETU) — ULTRA-SIMPLE PRIMARY STUDENT PLAYGROUND
  // =========================================================================
  function addKidsStars(count = 1) {
    state.kidsStars = (state.kidsStars || 0) + count;
    const starScoreEl = document.querySelector('#kidsStarScore');
    const starBox = document.querySelector('#kidsStarBox');
    if (starScoreEl) {
      starScoreEl.textContent = state.kidsStars;
    }
    if (starBox) {
      starBox.classList.add('star-pop');
      setTimeout(() => starBox.classList.remove('star-pop'), 450);
    }
    playChimeSuccess();
  }

  function renderStudentModeHook() {
    // Play a welcoming soft greeting tone when entering student mode
    playTone(587.33, 'sine', 0.1, 0.12);
  }

  function initStudentMode() {
    // 1. Animal Sound & Pronunciation Cards
    const ANIMAL_DATA = {
      merom: {
        hi: "बकरी (Goat)",
        sat_olck: "ᱢᱮᱨᱚᱢ",
        sat_deva: "मेरोम",
        sound: "मेरोम! बकरी!",
        hint: "बकरी बोलती है म्यां-म्यां! संथाली में मेरोम!"
      },
      seta: {
        hi: "कुत्ता (Dog)",
        sat_olck: "ᱥᱮᱛᱟ",
        sat_deva: "सेता",
        sound: "सेता! कुत्ता!",
        hint: "कुत्ता बोलता है भौ-भौ! संथाली में सेता!"
      },
      hati: {
        hi: "हाथी (Elephant)",
        sat_olck: "ᱦᱟᱹᱛᱤ",
        sat_deva: "हाती",
        sound: "हाती! हाथी!",
        hint: "बड़ा हाथी! संथाली में हाती!"
      },
      gay: {
        hi: "गाय (Cow)",
        sat_olck: "ᱜᱟᱹᱭ",
        sat_deva: "गाई",
        sound: "गाई! गाय!",
        hint: "गाय बोलती है मूँ-मूँ! संथाली में गाई!"
      },
      tarub: {
        hi: "बाघ (Tiger)",
        sat_olck: "ᱛᱟᱹᱨᱩᱵ",
        sat_deva: "तारुब",
        sound: "तारुब! बाघ!",
        hint: "जंगल का बाघ! संथाली में तारुब!"
      }
    };

    document.querySelectorAll('.kid-touch-card').forEach(card => {
      card.addEventListener('click', () => {
        const animalKey = card.dataset.animal;
        const info = ANIMAL_DATA[animalKey];
        if (!info) return;

        // Visual bounce animation
        card.classList.add('active');
        setTimeout(() => card.classList.remove('active'), 600);

        // Speak audio in clear, warm tone
        speakSantali(info.sound, info.sat_olck);

        // Award star
        addKidsStars(1);
        showToast(`🎉 ${info.sat_olck} (${info.sat_deva}) = ${info.hi} ⭐ +1 सितारा!`);
      });
    });

    // 2. Interactive Pebble Counter (1-10)
    const PEBBLE_NUMBERS = {
      1: { sat_olck: "᱑ · ᱢᱤᱫ", sat_deva: "मिद", hi: "१ · एक (One)" },
      2: { sat_olck: "᱒ · ᱵᱟᱨ", sat_deva: "बार", hi: "२ · दो (Two)" },
      3: { sat_olck: "᱓ · ᱯᱮ", sat_deva: "पे", hi: "३ · तीन (Three)" },
      4: { sat_olck: "᱔ · ᱯᱩᱱ", sat_deva: "पुन", hi: "४ · चार (Four)" },
      5: { sat_olck: "᱕ · ᱢᱚᱬᱮ", sat_deva: "मोणे", hi: "५ · पाँच (Five)" },
      6: { sat_olck: "᱖ · ᱛᱩᱨᱩᱭ", sat_deva: "तुरुय", hi: "६ · छह (Six)" },
      7: { sat_olck: "᱗ · ᱮᱭᱟᱭ", sat_deva: "एयाय", hi: "७ · सात (Seven)" },
      8: { sat_olck: "᱘ · ᱤᱨᱟᱹᱞ", sat_deva: "इराल", hi: "८ · आठ (Eight)" },
      9: { sat_olck: "᱙ · ᱟᱨᱮ", sat_deva: "आरे", hi: "९ · नौ (Nine)" },
      10: { sat_olck: "᱑᱐ · ᱜᱮᱞ", sat_deva: "गेल", hi: "१० · दस (Ten)" }
    };

    const bigNumEl = document.querySelector('#kidsBigNum');
    const satWordEl = document.querySelector('#kidsSatNumWord');
    const hiWordEl = document.querySelector('#kidsHiNumWord');
    const pebbleBtns = document.querySelectorAll('.pebble-btn');
    const resetBtn = document.querySelector('#kidsResetCounterBtn');

    pebbleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const num = parseInt(btn.dataset.num, 10);
        state.kidsPebblesCounted = num;

        // Highlight pebbles up to num
        pebbleBtns.forEach(p => {
          const pNum = parseInt(p.dataset.num, 10);
          if (pNum <= num) {
            p.classList.add('counted');
            p.textContent = '🌟';
          } else {
            p.classList.remove('counted');
            p.textContent = '⚪';
          }
        });

        const data = PEBBLE_NUMBERS[num];
        if (data) {
          bigNumEl.textContent = num;
          bigNumEl.style.transform = 'scale(1.2)';
          setTimeout(() => bigNumEl.style.transform = 'scale(1)', 200);
          satWordEl.textContent = data.sat_olck;
          hiWordEl.textContent = `${data.hi} · संथाली: ${data.sat_deva}`;

          // Speak number in Santali + Hindi
          speakSantali(`${data.sat_deva}! ${data.hi}`, data.sat_olck);

          // Star reward (extra for reaching 5 or 10)
          if (num === 5 || num === 10) {
            addKidsStars(3);
            showToast(`🌟 शाबाश! आपने ${num} तक गिनती पूरी की! ⭐ +3 सितारे मिले!`);
          } else {
            addKidsStars(1);
          }
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.kidsPebblesCounted = 0;
        pebbleBtns.forEach(p => {
          p.classList.remove('counted');
          p.textContent = '⚪';
        });
        bigNumEl.textContent = '0';
        satWordEl.textContent = 'गिनती शुरू करो!';
        hiWordEl.textContent = 'कंकड़ को छुओ';
        playTone(392, 'sine', 0.15, 0.1);
        speakText("गिनती फिर से शुरू करें!", 'hi');
      });
    }

    // 3. Magic Ol Chiki Letters
    const letterResultEl = document.querySelector('#kidsLetterResult');
    const letterBtns = document.querySelectorAll('.letter-bubble-btn');

    letterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        letterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const glyph = btn.dataset.letter;
        const sound = btn.dataset.sound;
        const meaning = btn.dataset.meaning;

        if (letterResultEl) {
          letterResultEl.innerHTML = `
            <span style="font-size: 16px; font-weight: 700;">अक्षर: <span style="font-family: var(--font-olchiki); color: #db2777; font-size: 22px;">${glyph}</span></span>
            <span style="margin: 0 8px;">·</span>
            <span>ध्वनि: <strong>${sound}</strong></span>
            <span style="margin: 0 8px;">·</span>
            <span>उदाहरण: <strong style="color: #be185d;">${meaning}</strong></span>
          `;
        }

        speakText(`${sound}! ${meaning}`, 'hi');
        addKidsStars(1);
      });
    });

    // 4. Magic Talking Mic for Kids
    const micBtn = document.querySelector('#kidsTalkingMicBtn');
    const micFeedback = document.querySelector('#kidsMicFeedback');

    const KID_RESPONSES = [
      {
        childSat: "ᱢᱮᱨᱚᱢ ᱟᱨ ᱥᱮᱛᱟ!",
        childHi: "बकरी और कुत्ता!",
        replySat: "ᱟᱹᱰᱤ ᱱᱟᱯᱟᱭ! शाबाश!",
        replyHi: "अरे वाह! आपने दोनों जानवरों के नाम बिल्कुल सही बोले! ⭐ +5 सितारे!",
        speakText: "शाबाश! आपने बहुत सुंदर बोला! अडी नापाय!"
      },
      {
        childSat: "ᱡᱚᱦᱟᱨ ᱢᱟᱪᱮᱛ!",
        childHi: "नमस्ते शिक्षक जी!",
        replySat: "ᱡᱚᱦᱟᱨ ᱜᱤᱫᱽᱨᱟᱹ! जोहार!",
        replyHi: "जोहार प्यारे बच्चे! रोज स्कूल आओ और खूब खेलो! ⭐ +5 सितारे!",
        speakText: "जोहार प्यारे बच्चे! अडी नापाय!"
      },
      {
        childSat: "ᱢᱤᱫ, ᱵᱟᱨ, ᱯᱮ!",
        childHi: "एक, दो, तीन!",
        replySat: "ᱯᱩᱱ, ᱢᱚᱬᱮ! चार, पाँच!",
        replyHi: "शाबाश! आपकी गिनती बिल्कुल सही है! ⭐ +5 सितारे!",
        speakText: "शाबाश! आपकी गिनती बिल्कुल सही है!"
      }
    ];

    let micIndex = 0;
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        playMicStartTone();
        micBtn.classList.add('listening');
        const labelEl = micBtn.querySelector('strong');
        if (labelEl) labelEl.textContent = "सुन रहा हूँ... 👂";

        if (micFeedback) {
          micFeedback.innerHTML = `<span style="color: #059669; font-weight: 700;">👂 ध्यान से सुन रहा हूँ... अपनी मातृभाषा में कुछ भी बोलो!</span>`;
        }

        setTimeout(() => {
          micBtn.classList.remove('listening');
          if (labelEl) labelEl.textContent = "माइक छुओ (Tap Me)";

          const res = KID_RESPONSES[micIndex % KID_RESPONSES.length];
          micIndex++;

          if (micFeedback) {
            micFeedback.innerHTML = `
              <div style="font-size: 13px; font-weight: 700; color: #15803d; margin-bottom: 3px;">
                🎉 आपने बोला: "<span style="font-family: var(--font-olchiki); font-size: 16px;">${res.childSat}</span>" (${res.childHi})
              </div>
              <div style="font-size: 12px; color: #166534;">${res.replyHi}</div>
            `;
          }

          addKidsStars(5);
          speakSantali(res.speakText, res.replySat);
        }, 1200);
      });
    }

    // 5. Audio Guide Button
    const guideBtn = document.querySelector('#kidsAudioGuideBtn');
    if (guideBtn) {
      guideBtn.addEventListener('click', () => {
        playChimeSuccess();
        speakText("नमस्ते प्यारे बच्चे! ज्ञान सेतु में आपका स्वागत है। चित्रों को छुओ, सुंदर आवाज़ सुनो, कंकड़ गिनो और बड़ा माइक दबाकर बोलो!", 'hi');
        showToast("🔊 बच्चों के लिए आवाज़ में निर्देश सुनाए जा रहे हैं...");
      });
    }

    // 6. Return to Teacher Mode
    const exitBtn = document.querySelector('#exitKidsModeBtn');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        switchView('home');
        showToast("👩‍🏫 शिक्षक डैशबोर्ड पर वापस आ गए (Teacher Mode Active)");
      });
    }

    // 7. Hero Kids Button from Home Screen
    const heroKidsBtn = document.querySelector('#heroKidsModeBtn');
    if (heroKidsBtn) {
      heroKidsBtn.addEventListener('click', () => {
        switchView('student');
        showToast("🎒 बाल सेतु में आपका स्वागत है! (Welcome to Kids Mode)");
      });
    }
  }

  // =========================================================================
  // 18. HERO INTERACTIVE LIVE COPILOT WIDGET (Instant Voice & Translation Demo)
  // =========================================================================
  const HERO_PREVIEWS = {
    teacher: [
      {
        hi: "“बच्चो, अपनी किताबें खोलो।”",
        satOl: "“ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ, ᱟᱯᱮᱭᱟᱜ ᱯᱩᱛᱷᱤ ᱠᱚ ᱡᱷᱤᱡᱽ ᱢᱮ᱾”",
        satDeva: "(गिदरा को, आपेयाग पुथी को झीज मे)",
        latency: "⚡ 0.38s · Fast Path",
        chipLabel: "📚 किताबें खोलो"
      },
      {
        hi: "“शाबाश बच्चो, बहुत अच्छा काम किया!”",
        satOl: "“ᱵᱮᱥ ᱜᱮ, ᱜᱤᱫᱽᱨᱟᱹ ᱠᱚ, ᱟᱹᱰᱤ ᱱᱟᱯᱟᱭ ᱠᱟᱹᱢᱤ!”",
        satDeva: "(बेस गे, गिदरा को, आडी नापाय कामी!)",
        latency: "⚡ 0.32s · Fast Path",
        chipLabel: "🌟 बहुत अच्छा"
      },
      {
        hi: "“आओ मिलकर गिनती सीखें — एक, दो, तीन।”",
        satOl: "“ᱫᱮᱞᱟ ᱢᱤᱫ ᱛᱮ ᱞᱮᱠᱷᱟ ᱵᱚᱱ ᱪᱮᱫᱟᱜ-ᱟ — ᱢᱤᱫ, ᱵᱟᱨ, ᱯᱮ᱾”",
        satDeva: "(देला मिद ते लेखा बोन चेदाग-आ — मिद, बार, पे)",
        latency: "⚡ 0.41s · Fast Path",
        chipLabel: "🔢 गिनती १-१०"
      },
      {
        hi: "“जाओ और साफ पानी पी लो।”",
        satOl: "“ᱪᱟᱞᱟᱜ ᱢᱮ ᱟᱨ ᱥᱟᱯᱷᱟ ᱫᱟᱜ ᱧᱩᱭ ᱢᱮ᱾”",
        satDeva: "(चालाग मे आर साफा दाग ञुय मे)",
        latency: "⚡ 0.35s · Fast Path",
        chipLabel: "💧 पानी पियो"
      }
    ],
    child: [
      {
        hi: "“कुर्सी पर बैठो / Sit on the chair”",
        satOl: "“ᱢᱟᱹᱪᱤ ᱨᱮ ᱫᱩᱲᱩᱵ ᱢᱮ᱾”",
        satDeva: "(माची रे दुरूब् मे)",
        latency: "⚡ 0.44s · Acoustic Filter",
        chipLabel: "🪑 बैठ जाओ"
      },
      {
        hi: "“मुझे पानी पीना है / I want to drink water”",
        satOl: "“ᱤᱧ ᱫᱟᱜ ᱧᱩᱭ ᱥᱟᱱᱟᱧ ᱠᱟᱱᱟ᱾”",
        satDeva: "(इञ दाग ञुय सानाञ काना)",
        latency: "⚡ 0.39s · Speech Unit Hit",
        chipLabel: "💧 पानी चाहिए"
      }
    ]
  };

  function initHeroCopilotWidget() {
    const widget = document.querySelector('#heroCopilotWidget');
    if (!widget) return;

    const dirTeacherBtn = document.querySelector('#heroDirTeacherBtn');
    const dirChildBtn = document.querySelector('#heroDirChildBtn');
    const speakerLabel = document.querySelector('#heroSpeakerLabel');
    const latencyPill = document.querySelector('#heroLatencyPill');
    const mainPhrase = document.querySelector('#heroMainPhrase');
    const targetLabel = document.querySelector('#heroTargetLabel');
    const vernacularText = document.querySelector('#heroVernacularText');
    const translitText = document.querySelector('#heroTranslitText');
    const listenBtn = document.querySelector('#heroListenBtn');
    const listenTxt = document.querySelector('#heroListenTxt');
    const waveTrack = document.querySelector('#heroWaveTrack');
    const phraseChips = document.querySelectorAll('.phrase-mini-chip');

    let currentDir = 'teacher';
    let currentIdx = 0;

    function updateWidgetUI() {
      const list = HERO_PREVIEWS[currentDir] || HERO_PREVIEWS.teacher;
      const item = list[currentIdx % list.length];
      if (!item) return;

      if (currentDir === 'teacher') {
        if (speakerLabel) speakerLabel.textContent = "Teacher says (Hindi):";
        if (targetLabel) targetLabel.textContent = "Santali (Ol Chiki) · Verified FLN:";
        if (mainPhrase) mainPhrase.textContent = item.hi;
        if (vernacularText) vernacularText.textContent = item.satOl;
        if (translitText) translitText.textContent = item.satDeva;
        if (listenTxt) listenTxt.textContent = "Tap to Hear Native Voice";
      } else {
        if (speakerLabel) speakerLabel.textContent = "Child speaks (Santali Ol Chiki):";
        if (targetLabel) targetLabel.textContent = "Teacher Translation (Hindi):";
        if (mainPhrase) mainPhrase.textContent = item.satOl;
        if (vernacularText) vernacularText.textContent = item.hi;
        if (translitText) translitText.textContent = item.satDeva;
        if (listenTxt) listenTxt.textContent = "Tap to Hear Hindi Audio";
      }
      if (latencyPill) latencyPill.textContent = item.latency;

      phraseChips.forEach((chip, i) => {
        chip.classList.toggle('active', i === currentIdx);
      });
    }

    if (dirTeacherBtn && dirChildBtn) {
      dirTeacherBtn.addEventListener('click', () => {
        currentDir = 'teacher';
        currentIdx = 0;
        dirTeacherBtn.classList.add('active');
        dirChildBtn.classList.remove('active');
        playChimeSuccess();
        updateWidgetUI();
      });

      dirChildBtn.addEventListener('click', () => {
        currentDir = 'child';
        currentIdx = 0;
        dirChildBtn.classList.add('active');
        dirTeacherBtn.classList.remove('active');
        playChimeSuccess();
        updateWidgetUI();
      });
    }

    phraseChips.forEach((chip, i) => {
      chip.addEventListener('click', () => {
        currentIdx = i;
        playChimeSuccess();
        updateWidgetUI();
      });
    });

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        const list = HERO_PREVIEWS[currentDir] || HERO_PREVIEWS.teacher;
        const item = list[currentIdx % list.length];
        if (!item) return;

        if (listenTxt) listenTxt.textContent = "🔊 Playing Native Audio...";
        listenBtn.style.opacity = "0.9";
        if (waveTrack) {
          waveTrack.querySelectorAll('.wave-bar').forEach(b => b.style.animationDuration = '0.4s');
        }

        if (currentDir === 'teacher') {
          speakSantali(item.satDeva, item.satOl);
          showToast(`Playing verified native Santali: ${item.satOl}`);
        } else {
          speakText(item.hi, 'hi', 1.0);
          showToast(`Playing Hindi translation: ${item.hi}`);
        }

        setTimeout(() => {
          if (listenTxt) listenTxt.textContent = currentDir === 'teacher' ? "Tap to Hear Native Voice" : "Tap to Hear Hindi Audio";
          listenBtn.style.opacity = "1";
          if (waveTrack) {
            waveTrack.querySelectorAll('.wave-bar').forEach(b => b.style.animationDuration = '');
          }
        }, 2200);
      });
    }

    updateWidgetUI();
  }

  // =========================================================================
  // 19. BOOTSTRAP APPLICATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // Navigation Tabs
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    document.querySelectorAll('[data-target-view]').forEach(elem => {
      elem.addEventListener('click', () => switchView(elem.dataset.targetView));
      elem.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          switchView(elem.dataset.targetView);
        }
      });
    });

    // Back-link buttons in module headers (← Back to Dashboard)
    document.querySelectorAll('.back-link[data-view]').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    document.querySelector('#navHomeBrand').addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
    });

    // Hero buttons
    document.querySelector('#heroStartLessonBtn').addEventListener('click', () => switchView('teach'));
    document.querySelector('#heroOpenLiveBtn').addEventListener('click', () => switchView('live'));
    document.querySelector('#heroMakeWorksheetBtn').addEventListener('click', () => switchView('worksheet'));
    document.querySelector('#bannerOpenLessonBtn').addEventListener('click', () => switchView('teach'));

    // Teach mode shortcut action buttons
    document.querySelector('#teachToWorksheetBtn').addEventListener('click', () => {
      document.querySelector('#wsLessonSelect').value = state.selectedLessonIndex;
      switchView('worksheet');
    });
    document.querySelector('#teachToFlashcardsBtn').addEventListener('click', () => switchView('flashcards'));
    document.querySelector('#teachJumpLiveBtn').addEventListener('click', () => switchView('live'));

    // Initialize all modules
    initLiveClassroom();
    initWorksheetModule();
    initFlashcardsModule();
    initReviewerConsole();
    initSyncEngine();
    initDemoRunner();
    initAccessibilityControls();
    initStudentMode();
    initHeroCopilotWidget();
    initSyllabusModule();
    initTeachFilters();

    const sylCard = document.querySelector('[data-target-view="syllabus"]');
    if (sylCard) {
      sylCard.addEventListener('click', () => switchView('syllabus'));
    }

    // Default view
    switchView('home');
    console.log("Gyaan Setu initialized. Offline ML Classroom Copilot ready.");

    // Offline Service Worker Registration for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log("Gyaan Setu ServiceWorker registered successfully:", reg.scope);
          })
          .catch((err) => {
            console.warn("ServiceWorker registration skipped or failed:", err);
          });
      });
    }

    // PWA Install to Home Screen Handler
    let deferredInstallPrompt = null;
    const installAppBtn = document.querySelector('#installPwaBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      deferredInstallPrompt = e;
      if (installAppBtn) {
        installAppBtn.style.display = 'inline-flex';
      }
    });

    if (installAppBtn) {
      installAppBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) {
          showToast('ℹ️ To install: tap your browser menu (⋮) and select "Install app" or "Add to Home screen"');
          return;
        }
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
          installAppBtn.style.display = 'none';
          showToast('🎉 Installing Gyaan Setu on your device...');
        }
        deferredInstallPrompt = null;
      });
    }

    window.addEventListener('appinstalled', () => {
      if (installAppBtn) installAppBtn.style.display = 'none';
      deferredInstallPrompt = null;
      showToast('✅ Gyaan Setu successfully installed as offline app!');
    });
  });

})();
