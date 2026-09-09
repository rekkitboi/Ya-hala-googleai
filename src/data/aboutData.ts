export interface PurposeSection {
  id: string;
  type: 'vision' | 'mission' | 'values' | 'objectives';
  number: string;
  title: string;
  titleAr: string;
  eyebrow: string;
  eyebrowAr: string;
  summary: string;
  summaryAr: string;
  points?: { en: string; ar: string }[];
}

export const ABOUT_HERO_DATA = {
  eyebrowEn: 'ABOUT YA HALA',
  eyebrowAr: 'عن معهد يا هلا',
  headingEn: 'Language Opens the Door. Culture Makes You Feel at Home.',
  headingAr: 'اللغة تفتح الأبواب.. والثقافة تشعرك بالانتماء',
  leadEn: 'Ya Hala helps non-Arabic speakers understand Saudi dialect, culture, and everyday communication.',
  leadAr: 'يساعد معهد يا هلا غير الناطقين بالعربية على فهم اللهجة السعودية والثقافة الحية والتواصل اليومي بكل ثقة.',
  introBadgeEn: 'More Than a Language School',
  introBadgeAr: 'أكثر من مجرد معهد لغات',
};

export const ABOUT_PURPOSE_DATA: PurposeSection[] = [
  {
    id: 'vision',
    type: 'vision',
    number: '01',
    eyebrow: 'Our Vision',
    eyebrowAr: 'رؤيتنا',
    title: 'A Global Cultural Gateway to Saudi Arabia',
    titleAr: 'بوابة ثقافية عالمية للمجتمع السعودي',
    summary: 'To become the leading cultural institute bridging global learners with the authentic Saudi dialect and heritage, fostering mutual understanding and lifelong friendships.',
    summaryAr: 'أن نكون المعهد الثقافي الرائد الذي يربط المتعلمين حول العالم باللهجة السعودية الأصيلة وتراث المملكة، معززين التفاهم الإنساني والصداقات الدائمة.',
  },
  {
    id: 'mission',
    type: 'mission',
    number: '02',
    eyebrow: 'Our Mission',
    eyebrowAr: 'رسالتنا',
    title: 'Living Dialects Through Cultural Immersion',
    titleAr: 'تعليم اللهجات الحية من خلال المعايشة الثقافية',
    summary: 'Connecting learners to real Saudi life through natural dialect immersion, native cultural guides, and practical everyday communication.',
    summaryAr: 'ربط المتعلمين بنبض الحياة السعودية الواقعية من خلال الانغماس الطبيعي في اللهجات الحية، بمرافقة مرشدين سعوديين، والتواصل العملي اليومي.',
  },
  {
    id: 'values',
    type: 'values',
    number: '03',
    eyebrow: 'Our Principles & Values',
    eyebrowAr: 'مبادئنا وقيمنا',
    title: 'Grounded in Authenticity and Everyday Life',
    titleAr: 'راسخة في الأصالة وتفاصيل الحياة اليومية',
    summary: 'Our educational philosophy is shaped by authentic Saudi values, communicative utility, and genuine cultural hospitality.',
    summaryAr: 'فلسفتنا التعليمية مبنية على قيم الأصالة السعودية، والتواصل الفعّال، وكرم الضيافة الثقافية الصادقة.',
    points: [
      { en: 'Living dialects over artificial syntax', ar: 'اللهجات الحية بدلاً من القوالب الاصطناعية' },
      { en: 'Cultural understanding as the foundation of language', ar: 'الفهم الثقافي أساس اكتساب اللغة' },
      { en: 'Practical communication for real situations', ar: 'التواصل العملي للمواقف الحياتية الواقعية' },
      { en: 'Learning through everyday Saudi contexts', ar: 'التعلم من خلال سياقات الحياة السعودية' },
      { en: 'Native cultural guidance and hospitality', ar: 'إرشاد ثقافي سعودي أصيل وكرم ضيافة' },
      { en: 'Building confidence in everyday Saudi life', ar: 'بناء الثقة التامة في التعامل اليومي' },
    ],
  },
  {
    id: 'objectives',
    type: 'objectives',
    number: '04',
    eyebrow: 'Our Objectives',
    eyebrowAr: 'أهدافنا',
    title: 'Fluency, Connection, and Belonging',
    titleAr: 'الطلاقة، والتواصل، والشعور بالانتماء',
    summary: 'To empower non-Arabic speakers to participate naturally in Saudi conversations, navigate social and professional situations with ease, and develop a deep appreciation for the Kingdom’s culture.',
    summaryAr: 'تمكين غير الناطقين بالعربية من المشاركة العفوية في الحديث اليومي، والتفاعل بثقة في بيئات العمل والمناسبات الاجتماعية، وتقدير عمق التراث السعودي.',
    points: [
      { en: 'Develop active listening and conversational speaking confidence', ar: 'تطوير مهارات الاستماع والتحدث بطلاقة وثقة' },
      { en: 'Familiarize learners with regional nuance (Najdi, Hejazi, and Universal Saudi)', ar: 'تعريف المتعلم بالتنوع اللغوي السعودي (النجدي، الحجازي، والسعودي العام)' },
      { en: 'Bridge everyday social customs, workplace etiquette, and hospitality', ar: 'الربط بين العادات الاجتماعية وآداب العمل وأصول الضيافة' },
      { en: 'Create an engaging community for continuous practice and shared growth', ar: 'بناء مجتمع تفاعلي للممارسة المستمرة والنمو المشترك' },
    ],
  },
];

export const FOUNDER_MESSAGE_DATA = {
  eyebrowEn: 'A MESSAGE FROM OUR FOUNDER',
  eyebrowAr: 'رسالة المؤسس',
  headingEn: 'Why Ya Hala Began',
  headingAr: 'لماذا بدأ معهد يا هلا',
  founderNameEn: 'Amin Al Zahrani',
  founderNameAr: 'أمين الزهراني',
  founderRoleEn: 'Founder & CEO, Ya Hala',
  founderRoleAr: 'المؤسس والرئيس التنفيذي، معهد يا هلا',
  signatureAttributionEn: 'Founder & CEO',
  signatureAttributionAr: 'المؤسس والرئيس التنفيذي',
  
  // Approved founder message paragraphs
  paragraphsEn: [
    "Ya Hala’s story began with a simple idea: anyone living in Saudi Arabia needs more than Arabic lessons. They need to understand the people, communicate with confidence, and experience the culture around them.",
    "We noticed that many non-Arabic speakers learn Arabic vocabulary and grammar, yet still struggle when they encounter the Saudi dialect or find themselves in an everyday situation.",
    "That is where Ya Hala began.",
    "We created a learning experience that uses Saudi culture as a gateway to the dialect, bringing learners closer to the words, expressions, and situations they encounter in daily life.",
    "Our goal is not only to help you learn the Saudi dialect. We want you to understand it, connect with its culture, and use it confidently in your everyday life.",
  ],
  mottoEn: "Ya Hala. Speak Saudi. Live the culture.",
  
  paragraphsAr: [
    "بدأت قصة يا هلا من فكرة بسيطة: كل من يقيم في المملكة العربية السعودية يحتاج إلى أكثر من مجرد دروس في قواعد اللغة. يحتاج إلى فهم الناس، والتواصل معهم بثقة، وخوض تجربة الثقافة المحيطة به بصدق.",
    "لاحظنا أن الكثير من غير الناطقين بالعربية يتعلّمون المفردات والقواعد، لكنهم ما زالوا يواجهون تحدياً حقيقياً عندما يسمعون اللهجة السعودية أو يجدون أنفسهم في مواقف الحياة اليومية.",
    "من هنا انطلقت رحلة يا هلا.",
    "ابتكرنا تجربة تعليمية تتخذ من الثقافة السعودية بوابة لاكتساب اللهجة، وتقرّب المتعلمين من الكلمات والتعابير والمواقف التي يصادفونها يومياً.",
    "هدفنا ليس فقط أن تتعلّم اللهجة السعودية؛ بل أن تفهمها، وتتصل بثقافتها، وتتحدث بها بكل ثقة في حياتك اليومية.",
  ],
  mottoAr: "يا هلا.. تحدث بالسعودي، وعش الثقافة.",
};
