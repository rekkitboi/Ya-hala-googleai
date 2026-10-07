import { FAQCategory } from '../types';

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'registration',
    titleEn: 'Registration',
    titleAr: 'التسجيل',
    items: [
      {
        id: 'reg-placement-test',
        questionEn: 'Do I need to take a placement test before registering?',
        questionAr: 'هل لازم أسوي اختبار تحديد المستوى قبل التسجيل؟',
        answerEn:
          'No. The placement test is not mandatory, but it helps us identify the level that best matches your Arabic-language skills. If you are a complete beginner, you can start directly at the beginner level without taking the test.',
        answerAr:
          'لا، اختبار تحديد المستوى مو إلزامي، لكنه يساعدنا نحدد المستوى الأنسب لك حسب مهاراتك في اللغة العربية. وإذا كنت مبتدئ، تقدر تبدأ مباشرة من المستوى المبتدئ بدون ما تسوي الاختبار.',
      },
      {
        id: 'reg-change-program',
        questionEn: 'Can I change my program after registering?',
        questionAr: 'هل أقدر أغيّر البرنامج بعد التسجيل؟',
        answerEn:
          'Yes. You can change your program after registration. Contact us by email or WhatsApp, and the Ya Hala team will help you select the appropriate program and complete the change process.',
        answerAr:
          'نعم، تقدر تغيّر البرنامج بعد التسجيل. تواصل معنا عن طريق البريد الإلكتروني أو الواتساب، وفريق أكاديمية يا هلا بيساعدك في اختيار البرنامج المناسب وإكمال إجراءات التغيير.',
      },
      {
        id: 'reg-before-classes',
        questionEn: 'Do I need to register before classes begin?',
        questionAr: 'هل لازم أسجّل قبل ما تبدأ الدراسة؟',
        answerEn:
          'Yes. You need to register before classes begin so we can prepare your program and learning requirements and ensure that you receive the full benefit of the program.',
        answerAr:
          'نعم، لازم تسجّل قبل بداية الدراسة عشان نقدر نجهّز لك البرنامج وكل متطلبات التعلّم، ونضمن لك الاستفادة الكاملة من البرنامج.',
      },
      {
        id: 'reg-how-to-register',
        questionEn: 'How can I register for a course?',
        questionAr: 'كيف أقدر أسجّل في الدورة؟',
        answerEn:
          'Choose the program that suits you from the training-program options, then enter your details and preferred contact method. The relevant team will contact you as soon as possible to complete the registration process. You can register through the Ya Hala homepage.',
        answerAr:
          'اختَر البرنامج المناسب لك من قائمة «خيارات البرامج التدريبية»، وبعدها سجّل بياناتك ووسيلة التواصل. بيتواصل معك الفريق المختص بأسرع وقت لإكمال إجراءات التسجيل. وتقدر تسجّل من خلال الصفحة الرئيسية لموقع أكاديمية يا هلا.',
      },
    ],
  },
  {
    id: 'programs-learning',
    titleEn: 'Programs and Learning',
    titleAr: 'البرامج والتعلّم',
    items: [
      {
        id: 'prog-beginners',
        questionEn: 'Do you offer courses for beginners?',
        questionAr: 'هل عندكم دورات للمبتدئين؟',
        answerEn:
          'Yes. We offer courses for complete beginners, as well as programs for different levels through to advanced proficiency. If you are unsure of your level, you can take a placement test to help us recommend the most suitable program.',
        answerAr:
          'نعم، عندنا دورات تناسب المبتدئين من الصفر، بالإضافة إلى برامج لمختلف المستويات حتى الإتقان. وإذا ما كنت متأكد من مستواك، تقدر تسوي اختبار تحديد المستوى عشان نساعدك تختار البرنامج الأنسب لك.',
      },
      {
        id: 'prog-non-arabic-speakers',
        questionEn: 'Are your programs designed for non-Arabic speakers?',
        questionAr: 'هل برامجكم مخصصة لغير الناطقين بالعربية؟',
        answerEn: 'Yes. All our programs are specifically designed for non-Arabic speakers.',
        answerAr: 'نعم، كل برامجنا مصممة خصيصًا لغير الناطقين بالعربية.',
      },
      {
        id: 'prog-master-short-time',
        questionEn: 'Can I master Arabic in a short period?',
        questionAr: 'هل أقدر أتقن اللغة العربية في وقت قصير؟',
        answerEn:
          'Within three to six months, you may reach a level that supports basic communication in daily life and at work. More advanced fluency requires additional time and may take up to a year, depending on your commitment and practice.',
        answerAr:
          'خلال 3 إلى 6 أشهر، تقدر توصل لمستوى يساعدك على التواصل الأساسي في حياتك اليومية وعملك. أما الطلاقة المتقدمة، فتحتاج وقت أطول وقد توصل إلى سنة، حسب التزامك وممارستك.',
      },
      {
        id: 'prog-learn-remotely',
        questionEn: 'Can I learn remotely?',
        questionAr: 'هل أقدر أتعلم عن بُعد؟',
        answerEn: 'Yes. We offer online programs for individuals and groups.',
        answerAr: 'نعم، نقدم برامج أونلاين للأفراد والمجموعات.',
      },
      {
        id: 'prog-blended-learning',
        questionEn: 'What is the blended-learning program?',
        questionAr: 'وش هو برنامج التعلّم المدمج؟',
        answerEn:
          'It is a program that combines in-person and online learning, providing the advantages of both approaches.',
        answerAr:
          'هو برنامج يجمع بين التعلّم الحضوري والتعلّم عن بُعد، ويتميز بمزايا الطريقتين.',
      },
    ],
  },
  {
    id: 'costs-payment',
    titleEn: 'Costs and Payment',
    titleAr: 'التكاليف والدفع',
    items: [
      {
        id: 'cost-program-cost',
        questionEn: 'How much does the program cost?',
        questionAr: 'كم تكلفة البرنامج؟',
        answerEn:
          'You only pay the subscription fee, and we provide all the learning materials you need.',
        answerAr: 'تدفع بس قيمة الاشتراك، وإحنا نوفر لك كل مستلزمات التعلّم.',
      },
      {
        id: 'cost-group-discounts',
        questionEn: 'Are discounts available for groups or companies?',
        questionAr: 'هل فيه خصومات للمجموعات أو الشركات؟',
        answerEn:
          'Yes. Special discounts are available. For details, contact us at academy@teachmearabic.co.',
        answerAr:
          'نعم، فيه خصومات خاصة. للتفاصيل، تواصل معنا عبر: academy@teachmearabic.co',
      },
      {
        id: 'cost-additional-fees',
        questionEn: 'Are there any additional fees?',
        questionAr: 'هل فيه رسوم إضافية؟',
        answerEn: 'No, except for optional nominal fees for certain external activities.',
        answerAr: 'لا، إلا رسوم رمزية اختيارية لبعض الأنشطة الخارجية.',
      },
      {
        id: 'cost-refund-policy',
        questionEn: 'Can I receive a refund if I am unable to continue?',
        questionAr: 'هل أقدر أسترد الرسوم إذا ما قدرت أكمل؟',
        answerEn:
          'Yes. You may receive a refund for unused lessons if you have a valid reason, after contacting us by email.',
        answerAr:
          'نعم، تقدر تسترد رسوم الدروس اللي ما استفدت منها إذا كان عندك سبب مقنع، بعد التواصل معنا عبر البريد الإلكتروني.',
      },
      {
        id: 'cost-remote-payment',
        questionEn: 'Can I pay remotely?',
        questionAr: 'هل أقدر أدفع عن بُعد؟',
        answerEn:
          'Yes. Several payment methods are available, including Apple Pay, Visa, Mastercard, bank transfer, and point-of-sale payments, as well as installment options through Tabby and Tamara.',
        answerAr:
          'نعم، تتوفر عدة طرق للدفع، منها: أبل باي، وفيزا، وماستركارد، والتحويل البنكي، ونقاط البيع، بالإضافة إلى خيارات التقسيط عن طريق تابي وتمارا.',
      },
      {
        id: 'cost-installments',
        questionEn: 'Are installment plans available?',
        questionAr: 'هل فيه تقسيط؟',
        answerEn: 'Yes. Installment plans are available through Tabby or Tamara.',
        answerAr: 'نعم، عن طريق تابي (Tabby) أو تمارا (Tamara).',
      },
    ],
  },
  {
    id: 'certificates-progress',
    titleEn: 'Certificates and Progress',
    titleAr: 'الشهادات والتقدّم',
    items: [
      {
        id: 'cert-provide-certificates',
        questionEn: 'Do you provide certificates?',
        questionAr: 'هل تمنحون شهادات؟',
        answerEn:
          'Yes. You receive a certificate of attendance and a level-completion certificate after every three months.',
        answerAr: 'نعم، نعطيك شهادة حضور وشهادة إتمام مستوى بعد كل 3 أشهر.',
      },
      {
        id: 'cert-complete-duration',
        questionEn: 'How long does the complete program take?',
        questionAr: 'كم مدة البرنامج كامل؟',
        answerEn:
          'If you start from the beginning, the complete program takes approximately one year, equivalent to 288 to 360 hours, divided into four levels.',
        answerAr:
          'إذا بتبدأ من الصفر، يستغرق البرنامج تقريبًا سنة وحدة، بما يعادل من 288 إلى 360 ساعة، ومقسّم على 4 مستويات.',
      },
    ],
  },
  {
    id: 'employment-training',
    titleEn: 'Employment and Training',
    titleAr: 'التوظيف والتدريب',
    items: [
      {
        id: 'emp-tamheer-opportunities',
        questionEn: 'Are Tamheer opportunities available?',
        questionAr: 'هل فيه فرص تمهير؟',
        answerEn: 'Yes. Send your CV by email and write “Tamheer” in the subject line.',
        answerAr: 'نعم، أرسل سيرتك الذاتية على البريد الإلكتروني واكتب «تمهير» في عنوان الرسالة.',
      },
      {
        id: 'emp-work-as-instructor',
        questionEn: 'Can I apply to work with you as an instructor?',
        questionAr: 'هل أقدر أشتغل معكم كمدرّس؟',
        answerEn:
          'Yes. We welcome qualified instructors. Send your CV and write “Employment Application” in the subject line.',
        answerAr:
          'نعم، نرحّب بالمدرّسين الأكفاء. أرسل سيرتك الذاتية واكتب «طلب توظيف» في عنوان الرسالة.',
      },
    ],
  },
  {
    id: 'support-contact',
    titleEn: 'Support and Contact',
    titleAr: 'الدعم والتواصل',
    items: [
      {
        id: 'sup-technical-support',
        questionEn: 'Is technical support available?',
        questionAr: 'هل فيه دعم فني؟',
        answerEn: 'Yes. Technical support is available through WhatsApp or email.',
        answerAr: 'نعم، عن طريق الواتساب أو البريد الإلكتروني.',
      },
      {
        id: 'sup-study-hours',
        questionEn: 'What are the study hours?',
        questionAr: 'وش أوقات الدراسة؟',
        answerEn: 'Study hours are available from 9:00 a.m. to 8:00 p.m., depending on learner preferences.',
        answerAr: 'من الساعة 9 الصباح إلى 8 المساء، حسب رغبة المتعلّمين.',
      },
      {
        id: 'sup-contact-instructor',
        questionEn: 'How can I contact the instructor?',
        questionAr: 'كيف أتواصل مع المدرّس؟',
        answerEn: 'You can communicate through the WhatsApp group or contact the instructor directly.',
        answerAr: 'عبر مجموعة الواتساب أو التواصل المباشر مع المدرّس.',
      },
      {
        id: 'sup-org-collaboration',
        questionEn: 'Our organization would like to collaborate. Who should we contact?',
        questionAr: 'نحن جهة ونرغب بالتعاون، من نتواصل معه؟',
        answerEn: 'Contact us through WhatsApp or email.',
        answerAr: 'عن طريق الواتساب أو البريد الإلكتروني.',
      },
      {
        id: 'sup-location',
        questionEn: 'Where is Ya Hala located?',
        questionAr: 'وين موقع أكاديمية يا هلا؟',
        answerEn: 'Anas Ibn Malik Road, Al Yasmin District, Riyadh, Kingdom of Saudi Arabia.',
        answerAr: 'طريق أنس بن مالك – حي الياسمين – الرياض – المملكة العربية السعودية.',
      },
    ],
  },
];
