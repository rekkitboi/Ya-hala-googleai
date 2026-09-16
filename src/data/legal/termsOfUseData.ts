export interface TermsOfUseSection {
  id: string;
  number: number;
  titleEn: string;
  titleAr: string;
  contentEn: string[];
  contentAr: string[];
}

export const TERMS_OF_USE_DATA: {
  hero: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    prototypeNoticeEn: string;
    prototypeNoticeAr: string;
  };
  sections: TermsOfUseSection[];
} = {
  hero: {
    titleEn: 'Terms of Use',
    titleAr: 'سياسة الاستخدام',
    subtitleEn: 'Rules, guidelines, and legal terms governing the access and use of the Ya Hala digital website and digital demonstration platform.',
    subtitleAr: 'القواعد والضوابط والشروط القانونية الحاكمة لتصفح واستخدام موقع ومنصة يا هلا الرقمية التجريبية.',
    prototypeNoticeEn: 'Prototype notice: These Terms of Use are included for demonstration and internal review and require final legal approval before publication.',
    prototypeNoticeAr: 'تنبيه النموذج الأولي: أُدرجت سياسة الاستخدام هذه لأغراض العرض والمراجعة الداخلية، وتتطلب اعتماداً قانونياً نهائياً قبل النشر.'
  },
  sections: [
    {
      id: 'introduction',
      number: 1,
      titleEn: 'Introduction',
      titleAr: 'المقدمة',
      contentEn: [
        'Welcome to the official digital portal of the Ya Hala Cultural and Dialect Program ("Ya Hala", "we", "our", or "the Academy").',
        'This website is established to present our educational philosophy, showcase our immersive cultural and dialect programs, and provide a digital interface for prospective learners, corporate partners, and cultural enthusiasts exploring Saudi Arabic education.'
      ],
      contentAr: [
        'أهلاً بكم في البوابة الرقمية الرسمية لبرنامج يا هلا لتعليم اللهجة والثقافة السعودية ("يا هلا"، "الأكاديمية"، "المعهد"، أو "نحن").',
        'أُنشئ هذا الموقع للتعريف بفلسفتنا التعليمية، وعرض برامجنا التدريبية والمعايشة الثقافية، وتوفير واجهة رقمية للطلاب والشركات والمهتمين بالتعرف على لغة وثقافة المملكة العربية السعودية.'
      ]
    },
    {
      id: 'acceptance-of-terms',
      number: 2,
      titleEn: 'Acceptance of the Website Terms',
      titleAr: 'الموافقة على شروط استخدام الموقع',
      contentEn: [
        'By browsing, accessing, or interacting with any part of this website, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and all applicable laws and regulations.',
        'If you do not agree with any provision of these website terms, you must refrain from using or browsing this website.'
      ],
      contentAr: [
        'يعد تصفحك أو دخولك أو تفاعلك مع أي جزء من هذا الموقع بمثابة إقرار صريح منك بالاطلاع على شروط الاستخدام هذه وفهمها والموافقة التامة على الالتزام بها وبجميع الأنظمة واللوائح السارية.',
        'إذا كنت لا توافق على أي بند من هذه الشروط، يُرجى التوقف فورًا عن استخدام الموقع وتصفحه.'
      ]
    },
    {
      id: 'prototype-status',
      number: 3,
      titleEn: 'Prototype Status',
      titleAr: 'صفة النموذج الأولي',
      contentEn: [
        'This website currently functions as an interactive management demonstration and design prototype.',
        'Certain educational tracks, field trips, architectural excursions, dates, fee tiers, and planned mobile application features shown throughout the interface represent proposed concepts and prototype previews. All features, availability, and scheduling remain subject to final operational validation and institutional accreditation.'
      ],
      contentAr: [
        'يعمل هذا الموقع حاليًا كنموذج أولي للعرض التجريبي والمراجعة الإدارية والتطويرية.',
        'تمثل بعض المسارات التعليمية، والرحلات الميدانية، والزيارات التراثية، والمواعيد، وميزات التطبيق الذكي المعروضة مفاهيم مقترحة ونماذج مستقبلية قيد التجهيز، وتخضع جميعها للتأكيد التشغيلي النهائي والاعتماد المؤسسي.'
      ]
    },
    {
      id: 'permitted-use',
      number: 4,
      titleEn: 'Permitted Use',
      titleAr: 'الاستخدام المصرح به',
      contentEn: [
        'You are granted a personal, non-exclusive, non-transferable, and revocable license to access and view the website content strictly for personal, non-commercial, and informational purposes.',
        'Users may view course curricula, explore cultural highlights, review institutional methodology, and submit simulated inquiries or applications in good faith.'
      ],
      contentAr: [
        'يُمنح المستخدم ترخيصًا شخصيًا غير حصري وغير قابل للتحويل للاطلاع على محتويات الموقع لأغراض شخصية وتثقيفية واستعلامية مشروعة فقط.',
        'يحق للمستخدم استعراض المناهج الدراسية، والاطلاع على الإضاءات الثقافية، وتعرف منهجية التدريس، وتقديم استفسارات التسجيل بنية صادقة ومشروعة.'
      ]
    },
    {
      id: 'prohibited-use',
      number: 5,
      titleEn: 'Prohibited Use',
      titleAr: 'الاستخدام المحظور',
      contentEn: [
        'When using this website, you are strictly prohibited from:',
        '• Attempting to disrupt, compromise, or circumvent website security, servers, network integrity, or connected infrastructure.',
        '• Reverse engineering, decompiling, or attempting to extract the source code of any script or feature.',
        '• Deploying automated scripts, scrapers, data-mining bots, or spiders to collect text, data, or media without prior written authorization.',
        '• Submitting fictitious, misleading, fraudulent, or malicious information via website forms.',
        '• Using the website or its brand in any manner that infringes applicable intellectual property laws, public decency, or local regulations.'
      ],
      contentAr: [
        'يحظر على المستخدم عند التعامل مع هذا الموقع ما يلي:',
        '• محاولة تعطيل أو اختراق أمن الموقع أو الخوادم أو سلامة الشبكات والبنية التحتية المرتبطة به.',
        '• الهندسة العكسية أو فك التشفير أو محاولة استخراج الشيفرة المصدرية للبرمجيات والمكونات.',
        '• استخدام أدوات الاستخلاص الآلي أو برامج الزحف (Scraping) لجمع البيانات أو النصوص أو الوسائط دون إذن خطي مسبق.',
        '• إدخال معلومات وهمية أو مضللة أو احتيالية أو ضارة عبر نماذج الموقع واستماراته.',
        '• استغلال الموقع أو هويته بأي شكل ينتهك أنظمة الملكية الفكرية أو الذوق العام أو القوانين المعمول بها.'
      ]
    },
    {
      id: 'content-accuracy',
      number: 6,
      titleEn: 'Accuracy and Availability of Website Content',
      titleAr: 'دقة محتوى الموقع ومدى توفره',
      contentEn: [
        'While Ya Hala strives to keep the information on this website accurate and updated, all materials, course outlines, schedules, and preview texts are provided "as is" and "as available".',
        'Ya Hala makes no express or implied warranties regarding the uninterrupted accuracy, completeness, or timeliness of the content, and reserves the right to modify or retract any content without prior notification.'
      ],
      contentAr: [
        'على الرغم من حرص يا هلا على دقة وتحديث البيانات المنشورة على هذا الموقع، فإن كافة المواد وتوصيفات البرامج والمواعيد تُقدّم "كما هي" وبحسب "توفرها الحالي".',
        'لا تقدم الأكاديمية ضمانات صريحة أو ضمنية حول خلو المحتوى من السهو أو اكتماله المطلق، وتحتفظ بالحق الكامل في تعديل أي محتوى أو حذفه في أي وقت دون إشعار مسبق.'
      ]
    },
    {
      id: 'applications-and-interest',
      number: 7,
      titleEn: 'Applications and Expressions of Interest',
      titleAr: 'طلبات التسجيل وإبداء الاهتمام',
      contentEn: [
        'Submitting an inquiry, course registration form, or expression of interest through this prototype website does not constitute a guaranteed acceptance or final enrollment into any Ya Hala program.',
        'All admissions, placement scheduling, cohort seat allocations, and program availability must be officially and individually confirmed by Ya Hala’s admissions office following completion of formal enrollment steps.'
      ],
      contentAr: [
        'لا يعد تقديم استمارة طلب التسجيل أو إبداء الاهتمام عبر هذا الموقع التجريبي قبولاً نهائيًا أو حجزًا مؤكدًا في أي من برامج يا هلا.',
        'تخضع كافة طلبات القبول، وتحديد المواعيد، وتخصيص المقاعد، ومدى توفر الفصول للتأكيد الرسمي المباشر من قبل إدارة القبول والتسجيل في يا هلا بعد استيفاء الإجراءات الرسمية.'
      ]
    },
    {
      id: 'intellectual-property',
      number: 8,
      titleEn: 'Intellectual Property',
      titleAr: 'الملكية الفكرية',
      contentEn: [
        'All content presented on this website—including but not limited to the "Ya Hala" trademark, visual brand identity, logos, graphics, icons, typography arrangements, user interface designs, curriculum frameworks, and proprietary software code—is the exclusive intellectual property of Ya Hala and its licensors.',
        'No portion of this website may be copied, reproduced, republished, modified, distributed, or commercially exploited in any medium without express prior written permission from Ya Hala.'
      ],
      contentAr: [
        'تعد كافة المحتويات المعروضة على هذا الموقع—بما في ذلك العلامة التجارية "يا هلا"، والهوية البصرية، والشعارات، والرسومات، والأيقونات، والتصميمات الفنية، وهياكل المناهج، والشيفرات البرمجية—ملكًا فكريًا حصريًا لـ يا هلا ومرخصيها.',
        'يحظر نسخ أو إعادة إنتاج أو نشر أو تعديل أو توزيع أو استغلال أي جزء من محتويات الموقع لأغراض تجارية دون الحصول على إذن خطي مسبق وصريح من يا هلا.'
      ]
    },
    {
      id: 'media-and-articles',
      number: 9,
      titleEn: 'Images, Articles, and Educational Content',
      titleAr: 'الصور والمقالات والمحتوى التعليمي',
      contentEn: [
        'All cultural photographs, historical imagery, dialect phrase cards, and editorial articles are curated strictly for educational illustration, contextual cultural appreciation, and management prototype demonstration.',
        'Article previews and cultural stories reflect conceptual editorial works; research citations, historical references, and final publications remain subject to scholarly and editorial revisions prior to formal release.'
      ],
      contentAr: [
        'أُدرجت الصور الثقافية والتراثية، وبطاقات اللهجة، والمقالات الأدبية المنشورة على الموقع لأغراض الإيضاح التعليمي، والتعريف بالثقافة، والعرض التجريبي للنموذج.',
        'تعد المقالات التحريرية وقصص التراث معاينات مبدئية قد تخضع للتنقيح والمراجعة والتوثيق التحريري قبل النشر الرسمي النهائي.'
      ]
    },
    {
      id: 'external-links',
      number: 10,
      titleEn: 'External Links',
      titleAr: 'الروابط الخارجية',
      contentEn: [
        'This website may contain hyperlinks directing users to external third-party websites or services (e.g., social media networks or map references) provided solely for user convenience.',
        'Ya Hala exercises no editorial or technical control over third-party platforms, does not endorse their content, and accepts no responsibility for their policies, availability, or privacy practices.'
      ],
      contentAr: [
        'قد يتضمن الموقع روابط إلكترونية خارجية تحيل إلى مواقع أو منصات تابعة لأطراف ثالثة (مثل شبكات التواصل الاجتماعي أو الخرائط) لغرض التيسير على المستخدم فقط.',
        'لا تملك يا هلا أي سيطرة تقنية أو قانونية على تلك المنصات الخارجية، ولا تتبنى محتواها، وتخلي مسؤوليتها عن ممارساتها أو سياسات الخصوصية الخاصة بها.'
      ]
    },
    {
      id: 'technical-availability',
      number: 11,
      titleEn: 'Website Availability and Technical Interruptions',
      titleAr: 'إتاحة الموقع والانقطاعات الفنية',
      contentEn: [
        'Ya Hala endeavours to maintain seamless website operation, but does not guarantee continuous, uninterrupted, error-free, or bug-free availability.',
        'We reserve the right to temporarily suspend, restrict, or modify access to the website or any of its sub-modules at any time without notice for maintenance, server upgrades, or security enhancements.'
      ],
      contentAr: [
        'تسعى يا هلا لضمان عمل الموقع بأعلى كفاءة ممكنة، إلا أنها لا تضمن استمرارية التوفر دون انقطاع أو خلوه التام من الأخطاء الفنية أو التوقف المؤقت.',
        'تحتفظ الأكاديمية بالحق في تعليق الموقع أو تقييد الوصول إليه أو إجراء تحديثات دورية عليه في أي وقت ولأي مدة دون إشعار مسبق لأغراض الصيانة والأمان.'
      ]
    },
    {
      id: 'privacy-and-forms',
      number: 12,
      titleEn: 'Privacy and Form Information',
      titleAr: 'الخصوصية وبيانات النماذج',
      contentEn: [
        'As this website operates in a prototype demonstration environment, form submissions are handled for design validation and workflow demonstration.',
        'Personal information will only be collected and stored when real enterprise backend processing, secure storage, and officially approved data privacy policies are activated in full accordance with national personal data protection regulations.'
      ],
      contentAr: [
        'نظرًا لعمل هذا الموقع ضمن بيئة تجريبية واستعراضية، فإن النماذج الحالية مخصصة لتجربة الاستخدام والتحقق من سير العمليات التصميمية.',
        'لن يتم جمع البيانات الشخصية وحفظها الفعلي إلا بعد تدشين البنية التحتية الخلفية المؤمنة واعتماد سياسة الخصوصية الرسمية المتوافقة مع نظام حماية البيانات الشخصية.'
      ]
    },
    {
      id: 'modifications-to-terms',
      number: 13,
      titleEn: 'Changes to the Website and Terms',
      titleAr: 'تعديل الموقع والشروط',
      contentEn: [
        'Ya Hala reserves the unilateral right to revise, update, amend, or replace these Terms of Use at its sole discretion at any time.',
        'Any modifications become effective immediately upon being posted to this page with an updated revision date. Your continued browsing or use of the website following changes represents your binding acceptance of the updated terms.'
      ],
      contentAr: [
        'تحتفظ يا هلا بالحق المنفرد في تعديل أو تحديث أو استبدال بنود سياسة الاستخدام هذه في أي وقت وفقًا لمتطلبات التطوير والأنظمة.',
        'تسري التعديلات فور نشرها على هذه الصفحة، ويعد استمرارك في تصفح الموقع واستخدامه بعد نشر أي تعديل بمثابة قبول صريح وملزم بالشروط المحدثة.'
      ]
    },
    {
      id: 'contact-information',
      number: 14,
      titleEn: 'Contact Information',
      titleAr: 'معلومات التواصل',
      contentEn: [
        'For general inquiries, institutional communications, or feedback regarding this website prototype, you may contact Ya Hala through our customer service desk or via the official contact mechanisms provided across the website.',
        'Official operational address and legal department contact coordinates are pending final corporate confirmation.'
      ],
      contentAr: [
        'للاستفسارات العامة، أو التواصل المؤسسي، أو تقديم الملاحظات حول هذا الموقع، يمكنكم التواصل مع إدارة يا هلا عبر قنوات التواصل المعتمدة بالموقع.',
        'تخضع بيانات العنوان المقري الرسمي وقنوات الشؤون القانونية للتأكيد المؤسسي النهائي عند الإطلاق الرسمي.'
      ]
    },
    {
      id: 'legal-review-notice',
      number: 15,
      titleEn: 'Internal and Legal Review Notice',
      titleAr: 'إشعار المراجعة الداخلية والقانونية',
      contentEn: [
        'These Terms of Use are drafted for demonstration, stakeholder presentation, and internal review purposes.',
        'They do not replace formal contractual agreements between Ya Hala and its admitted students or institutional corporate clients. Final legal, statutory, and jurisdictional endorsements remain subject to executive confirmation prior to public commercial release.'
      ],
      contentAr: [
        'صيغت سياسة الاستخدام هذه لأغراض العرض التقديمي والمراجعة الإدارية والتطويرية الداخلية.',
        'لا تغني هذه السياسة عن العقود والاتفاقيات الرسمية المبرمة بين يا هلا والطلاب المقبولين أو الشركاء من قطاع الأعمال، وتبقى خاضعة للاعتماد القانوني والتشغيلي النهائي قبل التدشين التجاري.'
      ]
    }
  ]
};
