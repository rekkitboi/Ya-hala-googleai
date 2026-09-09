import { Program, SaudiPhrase, Experience, EditorialHighlight, MethodologyStage } from '../types';

export const ASSETS = {
  // Logos
  logoWhite: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTqRvKJkoYVxszFR41DKfuRm6ShNAwnWD-YkEOSawWpqyThpZ50_-H-DDU3rPH_giDdhXZMA1V9tqm0l49Mkw3kztuPk9-GZODEQZnfFIpZqkJEzf6OLh8cMuTW1iqS2gQN1PSgFpU6Rtz0qthynqlxJjLSWF9qiq__SgKrwOw-Ev0mfQD0ZmDHeZM9k6LA_f1kUK8TkTaUqCI2f43oZQ7JgzjIwxw8ieozAq0nwXoyyz8QA4ovQMFhYEummVDC2H9NA',
  logoGreen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8TWth7WiB4cmFmWQcsDDoHZW_nMBX2sSSNp9eiqM3OzNnSSIVsPjc6vkMRaylM6L5h5H5_-tyrRtzuPw8L6sbTqna5cNgpI2umAQi64ENC0diYtRBFzzHZgauy1QKqZdnQaoHehyu_3Ht71qiXxYjS3PwKhvVxNyFbUqBVqB4YYdjVFNGcuU5AWoJi-EZbSiqIWWgRUBJ7ble4EOsYFXc4x_bWD_OU2rWtoavWxCqnvDBPhJJXuBWwPLnjvuktMDu4Q',
  logoFooter: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_qJwNI1Rkr7hwxJGBaIRCQOkiNBxtef7dMPdBf0xBGnA5HhoKd6uM4fGXcmVgKJIe1OuCOHt68ykqcsTrdp0O3jiRC60veeiOJ1zGLQ1IkRVRIKdkX-y82ubGZqL3UkUK8Ezl_0zjf9k4kbt8uqm-5fA3Za9NH0bu-u8wtgMMSJcA2s_Mfoqv98H1pzr2vny6r1LPTpnFACjidqmV--wIScBVxAQ3-mJHjvia29bVLnl_744fq9MBqCyH43RaPCcQtA',
  
  // Backgrounds & Images
  heroBg: '/STAI0063_005.Explore_the_wooden_balconies_and_historic_buildings_in_Historic_Jeddah.jpg',
  aboutBg: '/yh-green-about.jpg',
  experienceArch: '/yh-green-experience-1.jpg',
  experienceStone: '/yh-green-experience-2.jpg',
  oasisGardenPassage: '/oasis-garden-passage.jpg',
  oasisStoneTerrace: '/oasis-stone-terrace.jpg',
  patternTexture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUXSgp6ZkK8JVZIWwomwX8YCIqp6rXwzbMIsx74RVG1RJwE-G6wKQHRjp_DOb-ajHe3X5hIncyXS5U7TXhkm_HHoYR3WHg5a8CwMACtcv9iXKWXbp5q20uM4qJufzhEfcwp2GU_awPG0NkcU35dK_PKtXN1rjgdYLDgG55b2-G7FgsEMxBatQ6GyCsllIhdmD_9Iv239jIpNfZdg0FrI5xV4cITj-W0UHi8hcaFBbcV_2ca7Bu6npZ4T_5JrTGag69kw',
  bujairiHero: '/yh-green-experience-1.jpg',
  historicJeddah: '/yh-green-experience-2.jpg',
  footerTexture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaugxfjuP8ulrg9TzRPxbAQF1qjrb7wJhQiIgtXIq4h8vUYfWDoHZHbAv8SVjl5INaMay63xMajA2FhoZXgRwW1-qXvZg6zYiK3Upt3rr-7NPJy4vM8qHhbTLJ8T1Eka09ujMmnnt9H9GQgW9UrozivqXrD6zgbjdQLcaHperoLFqV98zcwYfSZ7c4W9eqXe3qs22L7ZTZ98_Rt81CpyGgGlCyeZEqyEaKtkOYlR6AteNTaE7n0SdaMc7Dc-SInSqaCA',
  
  // Editorial imagery
  diriyahNights: '/yh-green-experience-1.jpg',
  saudiCoffee: '/yh-green-experience-2.jpg',
  alUlaHeritage: '/yh-green-hero.jpg',
};

export const YA_HALA_PILLARS = [
  {
    number: '01',
    title: 'Our Mission',
    titleAr: 'رسالتنا',
    description: 'We combine the beauty of Arabic with the richness of Saudi culture through practical and engaging teaching. Every program is designed to make language learning useful, enjoyable, and connected to real life.',
    descriptionAr: 'نجمع بين جمال اللغة العربية وثراء الثقافة السعودية من خلال تدريس عملي ومشوق. كل برنامج مصمم لربط التعلم بالحياة اليومية الحقيقية.'
  },
  {
    number: '02',
    title: 'Our Educational Mission',
    titleAr: 'رسالتنا التعليمية',
    description: 'To make Arabic accessible to learners around the world through high-quality education that combines effective teaching, cultural depth, and thoughtful use of technology.',
    descriptionAr: 'جعل اللغة العربية متاحة للمتعلمين في كل أنحاء العالم عبر تعليم رفيع المستوى يجمع بين البراعة التعليمية والعمق الثقافي والتقنية الحديثة.'
  },
  {
    number: '03',
    title: 'Our Vision',
    titleAr: 'رؤيتنا',
    description: 'To become a leading destination for Saudi Arabic education by creating meaningful bridges between learners, the Arabic language, and the culture of the Kingdom.',
    descriptionAr: 'أن نكون الوجهة الرائدة عالمياً لتعليم اللهجة والثقافة السعودية عبر مد جسور حقيقية بين المتعلم وأصالة المملكة وشعبها.'
  },
  {
    number: '04',
    title: 'Our Goals',
    titleAr: 'أهدافنا',
    description: 'To help learners build practical fluency, communicate with confidence, and form authentic cultural connections through flexible in-person, private, corporate, and online programs.',
    descriptionAr: 'تمكين المتعلم من التحدث بطلاقة وثقة، وبناء روابط ثقافية صادقة عبر برامج مرنة حضورية، وخاصة، ومؤسسية، وعبر الإنترنت.'
  }
];

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    step: '01',
    title: 'LEARN',
    titleAr: 'تعلّم',
    tagline: 'Authentic Dialects',
    taglineAr: 'اللهجات الأصيلة',
    description: 'Master the Najdi and Hejazi dialects through conversational focus, colloquial idioms, and everyday social nuance.',
    descriptionAr: 'إتقان اللهجتين النجدية والحجازية بالتركيز على المحادثة والتعابير اليومية الشائعة.'
  },
  {
    step: '02',
    title: 'PRACTICE',
    titleAr: 'مارس',
    tagline: 'Interactive Majlis',
    taglineAr: 'المجالس التفاعلية',
    description: 'Real-world scenarios with native speakers in hospitable, safe environments that build instinctive response.',
    descriptionAr: 'سيناريوهات واقعية مع متحدثين أصليين في بيئة مضيافة وآمنة تعزز سرعة البديهة والطلاقة.'
  },
  {
    step: '03',
    title: 'EXPLORE',
    titleAr: 'استكشف',
    tagline: 'Living Heritage',
    taglineAr: 'التراث الحي',
    description: 'Guided cultural excursions to historical sites, traditional souqs, art hubs, and local culinary establishments.',
    descriptionAr: 'رحلات ميدانية إرشادية للمواقع التاريخية، الأسواق الشعبية، المعارض الفنية، والمطاعم الأصيلة.'
  },
  {
    step: '04',
    title: 'CONNECT',
    titleAr: 'تواصل',
    tagline: 'Lifelong Fellowship',
    taglineAr: 'روابط مستدامة',
    description: 'Build lasting relationships, business ties, and genuine community belonging across the Kingdom.',
    descriptionAr: 'تكوين صداقات وشبكات مهنية عميقة والاندماج الصادق مع أفراد المجتمع السعودي.'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'in-person',
    title: 'In-Person',
    titleAr: 'التعليم الحضوري',
    category: 'Immersive Campus',
    categoryAr: 'حرم تعليمي تفاعلي',
    description: 'Immersive classroom experience at our dedicated centers across the Kingdom with native Saudi linguists.',
    descriptionAr: 'تجربة تعليمية حضورية ملهمة في مراكزنا بالرياض وجدة مع نخبة من الأساتذة السعوديين.',
    iconName: 'landmark',
    duration: '8 - 12 Weeks (Flexible cohorts)',
    durationAr: '8 - 12 أسبوعاً (دفعات مرنة)',
    format: 'Campus Classrooms + Field Immersion',
    formatAr: 'قاعات مجهزة + رحلات ميدانية',
    audience: 'Expats, diplomats, and visitors living in Saudi Arabia',
    audienceAr: 'المقيمون والدبلوماسيون وزوار المملكة',
    features: [
      'Interactive Majlis seating layout for natural conversation',
      'Weekly guided dialect outings to Al-Balad or Souq Al-Zal',
      'Complimentary Saudi coffee and dates hospitality bar',
      'Accredited Certificate of Dialect & Cultural Competence'
    ],
    featuresAr: [
      'جلسات مجلس تفاعلية تشجع الحوار الطبيعي',
      'جولات ميدانية أسبوعية في الأسواق التراثية',
      'ضيافة القهوة السعودية والتمر الفاخر يومياً',
      'شهادة معتمدة في الكفاءة اللغوية والثقافية'
    ]
  },
  {
    id: 'private-tutoring',
    title: 'Private Tutoring',
    titleAr: 'التدريب الخاص',
    category: 'Bespoke Track',
    categoryAr: 'مسار مخصص',
    description: '1-on-1 sessions tailored to your pace, executive schedule, and specific professional learning goals.',
    descriptionAr: 'جلسات فردية مخصصة لجدولك التنفيذي واحتياجاتك المهنية الخاصة بالسرعة التي تناسبك.',
    iconName: 'user',
    duration: 'Customizable schedule',
    durationAr: 'جدول مرن بالكامل',
    format: 'In-person or VIP Hybrid',
    formatAr: 'حضوري أو عن بعد VIP',
    audience: 'C-Suite executives, ambassadors, researchers, and dignitaries',
    audienceAr: 'المدراء التنفيذيون، السفراء، والباحثون',
    features: [
      'Personalized vocabulary tailored to your industry or diplomatic post',
      'Dedicated Saudi cultural mentor and dialect coach',
      'Flexible scheduling including weekend and evening sessions',
      'Discreet, confidential executive learning environment'
    ],
    featuresAr: [
      'مصطلحات مخصصة لمجال عملك أو مهامك الدبلوماسية',
      'مرشد ثقافي ومدرب لهجة شخصي متفرغ',
      'مرونة قصوى في أوقات الجلسات الصباحية والمسائية',
      'بيئة تدريبية تتسم بالخصوصية والاحترافية العالية'
    ]
  },
  {
    id: 'corporate-groups',
    title: 'Corporate Groups',
    titleAr: 'المجموعات والشركات',
    category: 'Organizational Excellence',
    categoryAr: 'التكامل المؤسسي',
    description: 'Specialized training for organizations to enhance team integration, client relationships, and cultural etiquette.',
    descriptionAr: 'برامج احترافية للشركات والمنظمات لتعزيز الاندماج الثقافي وتطوير علاقات العملاء في السوق السعودي.',
    iconName: 'users',
    duration: '4 - 8 Weeks intensives',
    durationAr: '4 - 8 أسابيع مكثفة',
    format: 'On-site at corporate offices or Ya Hala Hub',
    formatAr: 'في مقر المنشأة أو في فروع المعهد',
    audience: 'Multinational corporations, government contractors, regional HQs',
    audienceAr: 'الشركات متعددة الجنسيات والمقرات الإقليمية بالرياض',
    features: [
      'Saudi business protocol, negotiation nuances & etiquette',
      'Cross-cultural workshop: Understanding Vision 2030 culture',
      'Tailored company jargon and professional greetings',
      'Group cultural dinners and team bonding sessions'
    ],
    featuresAr: [
      'أصول وإتيكيت التعامل وبروتوكول الأعمال السعودي',
      'ورش عمل فهم التحول الثقافي ورؤية السعودية 2030',
      'مصطلحات العمل المشتركة وأساليب التفاوض الودية',
      'أمسيات عشاء سعودية وجلسات تعزيز روح الفريق'
    ]
  },
  {
    id: 'online-learning',
    title: 'Online Learning',
    titleAr: 'التعليم عن بُعد',
    category: 'Global Digital Portal',
    categoryAr: 'بوابة رقمية عالمية',
    description: 'Flexible virtual classes led by native speakers from anywhere in the world with state-of-the-art interactive tools.',
    descriptionAr: 'فصول افتراضية تفاعلية حية بقيادة معلمين سعوديين متحدثين أصليين من أي مكان بالعالم.',
    iconName: 'monitor',
    duration: '6 - 10 Weeks modules',
    durationAr: '6 - 10 أسابيع',
    format: 'Live Interactive Video + Dialect Audio Lab',
    formatAr: 'بث مباشر تفاعلي + معمل صوتيات',
    audience: 'International students, remote professionals, global enthusiasts',
    audienceAr: 'الطلاب والمهنيون والمهتمون بالثقافة حول العالم',
    features: [
      'Live interactive video with native speakers from Riyadh and Jeddah',
      'Dialect speech recognition and pronunciation feedback',
      'Recorded sessions and 24/7 digital resource library',
      'Virtual cultural exchanges with Saudi youth communities'
    ],
    featuresAr: [
      'فصول حية تفاعلية مع أساتذة من الرياض وجدة',
      'تقنيات الاستماع وتحسين نطق مخارج الحروف واللهجة',
      'تسجيلات كاملة للجلسات ومكتبة مصادر متاحة 24/7',
      'لقاءات ثقافية افتراضية مع شباب وشابات الوطن'
    ]
  }
];

export const SAUDI_PHRASES: SaudiPhrase[] = [
  {
    id: 'phrase-1',
    category: 'Hospitality & Welcome',
    categoryAr: 'كرم الضيافة والترحيب',
    arabic: 'يا هلا والله ومسهلا',
    transliteration: 'Yā Halā Wallāh w Mas-halā',
    englishMeaning: 'A deeply warm, heartfelt welcome with boundless ease and joy.',
    englishMeaningAr: 'ترحيب صادق ينبض بالحفاوة ويفتح الأبواب بالبشر والسرور.',
    dialect: 'Universal Saudi',
    dialectAr: 'لهجة سعودية شاملة',
    culturalContext: 'Used when receiving a guest into one’s home or gathering. It communicates that the guest is family and that their presence brings blessing and ease.',
    culturalContextAr: 'تقال عند استقبال الضيف في المنزل أو المجلس، وتُشعر الضيف بأنه بين أهله وربعه.',
    audioPronunciationText: 'يا هلا والله ومسهلا، نورتونا وشرفتونا'
  },
  {
    id: 'phrase-2',
    category: 'Respect & Honor',
    categoryAr: 'الاحترام والتقدير',
    arabic: 'سمّ وطال عمرك',
    transliteration: 'Samm wa Tāl \'Omrak',
    englishMeaning: '"At your noble service, and may you live a long, blessed life."',
    englishMeaningAr: 'حاضر وأمرك مطاع، ودعاء بطول العمر والبركة.',
    dialect: 'Najdi',
    dialectAr: 'نجدية أصيلة',
    culturalContext: 'The quintessentially polite Najdi response whenever someone calls your name or asks a favor. Derived from "Samm" (say Bismillah and partake).',
    culturalContextAr: 'الرد النجدي الأكثر تهذيباً عندما يناديك أحد أو يطلب أمراً، يعبر عن الاستعداد الفوري للخدمة.',
    audioPronunciationText: 'سم وطال عمرك وأمرك مجاب'
  },
  {
    id: 'phrase-3',
    category: 'Cordial Affection',
    categoryAr: 'المودة واللطف الحجازي',
    arabic: 'على راسي وعيني',
    transliteration: '\'Alā Rāsī wa \'Aynī',
    englishMeaning: '"With pleasure; upon my head and my eyes (with highest regard)."',
    englishMeaningAr: 'بكل سرور وعلى رأسي وعيني لأجلك.',
    dialect: 'Hejazi',
    dialectAr: 'حجازية راقية',
    culturalContext: 'Popular in Jeddah, Makkah, and Madinah to express deep joy in fulfilling someone’s request or showing genuine appreciation for their company.',
    culturalContextAr: 'تعبير حجازي مفعم بالرقة والتقدير، يقال عند تلبية رغبة شخص عزيز أو إكرامه.',
    audioPronunciationText: 'على راسي وعيني ومن عيوني الثنتين'
  },
  {
    id: 'phrase-4',
    category: 'Desert Heritage & Majlis',
    categoryAr: 'أصالة البادية والمجلس',
    arabic: 'قهوة وتمر وشبّة نار',
    transliteration: 'Qahwah wa Tamr wa Shabbit Nār',
    englishMeaning: '"Saudi coffee, succulent dates, and a glowing fireside gathering."',
    englishMeaningAr: 'رمز الكرم والأنس، اجتماع الأصحاب حول الدلة والنار.',
    dialect: 'Universal Saudi',
    dialectAr: 'رمز الضيافة السعودية',
    culturalContext: 'The poetic essence of Saudi winter and desert camping (Kashta), signifying timeless companionship, stories, and the warm aroma of cardamom.',
    culturalContextAr: 'جوهر ليالي الشتاء والكشتات، ترمز إلى الألفة والحديث الطيب ورائحة الهيل والعود.',
    audioPronunciationText: 'قهوة وتمر وشبة نار وجمعة غوالي'
  },
  {
    id: 'phrase-5',
    category: 'Good Fortune & Reassurance',
    categoryAr: 'البشارة والاطمئنان',
    arabic: 'ما يقصّرون وفالك طيّب',
    transliteration: 'Mā Yeqas-seroūn wa Fālak Tayyib',
    englishMeaning: '"Rest assured, nothing will be spared; only good fortune awaits you."',
    englishMeaningAr: 'اطمئن، لن يدخروا جهداً، وبشارتك الخير واليسر.',
    dialect: 'Eastern / Gulf',
    dialectAr: 'شرقية وخليجية',
    culturalContext: 'Said to reassure someone that everyone involved will extend full generosity and that their outcome will be victorious and joyful.',
    culturalContextAr: 'تقال لبث الطمأنينة والتأكيد على أن الجميع يقفون بجانبك والنتيجة طيبة بإذن الله.',
    audioPronunciationText: 'ما يقصرون وفالك طيب وعسى الخير دربك'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'historic-jeddah',
    title: 'Language in Historic Jeddah',
    titleAr: 'لغة التراث في جدة التاريخية',
    location: 'Al-Balad, Jeddah',
    locationAr: 'البلد، جدة',
    tag: 'FEATURED EXPERIENCE',
    tagAr: 'تجربة مميزة',
    image: ASSETS.historicJeddah,
    description: 'Navigate the bustling souqs and coral-stone alleys of Al-Balad while practicing conversational Hejazi Arabic with local merchants, craftsmen, and historians.',
    descriptionAr: 'تجوّل في أزقة البلد الحجرية ومنازل الرواشين وتحدث باللهجة الحجازية العذبة مع أهالي وتجار جدة التاريخية.',
    highlights: [
      'Rawashin architecture architectural vocabulary workshop',
      'Spices & perfume bartering in Souq Al-Alawi with local vendors',
      'Traditional tea tasting in a restored merchant salon',
      'Evening folklore session and poetic banter'
    ],
    highlightsAr: [
      'ورشة مصطلحات العمارة الحجازية ورواشين البلد',
      'ممارسة التفاوض والبيع في سوق العلوي العريق',
      'تذوق الشاي الحجازي في بيت أثري تاريخي',
      'أمسية حكواتي وأهازيج التراث البحري'
    ],
    duration: 'Full Day Immersion (8 Hours)',
    durationAr: 'يوم كامل (8 ساعات)'
  },
  {
    id: 'alula-heritage',
    title: 'AlUla Arts & Heritage',
    titleAr: 'فنون وأصالة العلا',
    location: 'AlUla Oasis & Hegra',
    locationAr: 'واحة العلا ومدائن صالح',
    tag: 'ARCHAEOLOGICAL JOURNEY',
    tagAr: 'رحلة أثرية',
    image: ASSETS.alUlaHeritage,
    description: 'Immerse yourself in Nabataean inscriptions, desert poetry, and canyon stargazing amidst ancient rock-hewn wonders and the fragrant oasis.',
    descriptionAr: 'عش سحر الكلمات والنقوش النبطية القديمة وقصائد الصحراء بين صخور العلا الباسقة وواحات النخيل الغناء.',
    highlights: [
      'Arabic calligraphy and epigraphy workshop on natural slate',
      'Bedouin astronomical lore and star-naming traditions',
      'Oasis citrus grove walk and dialect botanical glossary',
      'Campfire poetry recital under desert skies'
    ],
    highlightsAr: [
      'ورشة الخط العربي وقراءة النقوش الصخرية القديمة',
      'أسماء النجوم والدروب في تراث البادية والرحالة',
      'جولة مزارع الحمضيات ومصطلحات الزراعة والواحة',
      'مجلس شعر وقصيد حول النار في قلب الصحراء'
    ],
    duration: 'Weekend Immersion (3 Days)',
    durationAr: 'عطلة نهاية أسبوع (3 أيام)'
  },
  {
    id: 'culinary-workshops',
    title: 'Culinary Workshops & Saudi Coffee Ritual',
    titleAr: 'فنون المطبخ السعودي وطقوس الدلة',
    location: 'Diriyah & Al-Bujairi, Riyadh',
    locationAr: 'الدرعية والبجيري، الرياض',
    tag: 'SENSORY IMMERSION',
    tagAr: 'تجربة الحواس',
    image: ASSETS.bujairiHero,
    description: 'Learn food vocabulary and culinary idioms while preparing authentic Saudi dishes such as Jareesh and Kabsa alongside master Saudi chefs.',
    descriptionAr: 'تعلم مصطلحات الأكلات الشعبية السعودية وحضّر أشهى أطباق الجريش والكبسة مع كبار الطهاة السعوديين.',
    highlights: [
      'The ceremonial preparation of Saudi Coffee (Qahwa) with cardamom, saffron, and cloves',
      'Spice lexicon: learning the Arabic terms for indigenous wild herbs',
      'Traditional hand-served communal dining etiquette',
      'Recipe booklet inscribed with transliterated kitchen phrases'
    ],
    highlightsAr: [
      'طقوس إعداد القهوة السعودية بالهيل والزعفران والمسمار',
      'قاموس التوابل والأعشاب البرية النجدية العطرية',
      'آداب المائدة السعودية والضيافة في المجلس',
      'كتيب وصفات حصرية بعبارات الطبخ الشعبية'
    ],
    duration: 'Half-Day Masterclass (4 Hours)',
    durationAr: 'نصف يوم (4 ساعات)'
  }
];

export const EDITORIAL_HIGHLIGHTS: EditorialHighlight[] = [
  {
    id: 'editorial-1',
    title: 'Diriyah Nights: At-Turaif Through Najdi Adobe Poetry',
    titleAr: 'ليالي الدرعية: أصالة حي الطريف بلغة الشعر النجدي',
    category: 'HERITAGE & ARCHITECTURE',
    categoryAr: 'تراث وعمارة',
    date: 'Autumn 2026',
    dateAr: 'خريف 2026',
    readTime: '5 min read',
    readTimeAr: 'قراءة في 5 دقائق',
    image: ASSETS.diriyahNights,
    description: 'How the mud-brick palaces of the first Saudi state continue to inspire modern expressions of resilience, communal solidarity, and welcoming language.',
    descriptionAr: 'كيف تروي قلاع الطريف الطينية حكاية البدايات وقيم الصمود والكرم التي شكّلت لهجة وروح نجد الأصيلة.'
  },
  {
    id: 'editorial-2',
    title: 'The Art of the Dallah: A Sensory Vocabulary',
    titleAr: 'فن الدلة: قاموس حسي لقهوة الكرم والشهامة',
    category: 'CULTURAL ANTHROPOLOGY',
    categoryAr: 'أنثروبولوجيا الثقافة',
    date: 'Curated Digest',
    dateAr: 'مقال مختار',
    readTime: '4 min read',
    readTimeAr: 'قراءة في 4 دقائق',
    image: ASSETS.saudiCoffee,
    description: 'From "Sab Al-Finjan" to shaking the cup, discover the intricate non-verbal signals and noble terms that govern the UNESCO-inscribed Saudi coffee service.',
    descriptionAr: 'من صبة الفنجان باليسار واليمين إلى هز الفنجان، اكتشف لغة الإشارات الرمزية في تقديم القهوة السعودية المعتمدة باليونيسكو.'
  },
  {
    id: 'editorial-3',
    title: 'Coastal Expressions: The Living Language of the Red Sea',
    titleAr: 'تعبيرات الساحل: لغة البحر الأحمر الحية من ينبع إلى فرسان',
    category: 'DIALECT STUDIES',
    categoryAr: 'دراسات اللهجات',
    date: 'Field Research',
    dateAr: 'بحث ميداني',
    readTime: '6 min read',
    readTimeAr: 'قراءة في 6 دقائق',
    image: ASSETS.historicJeddah,
    description: 'An exploration of seafaring idioms, pearl diving chants (Nahmah), and maritime folklore preserved in the vibrant coastal dialects of western Saudi Arabia.',
    descriptionAr: 'استكشاف لمصطلحات البحارة وأهازيج الغوص على اللؤلؤ والحكايات الشعبية المحفوظة في لهجات الساحل الغربي.'
  }
];
