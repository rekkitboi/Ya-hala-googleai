export interface LegalArticle {
  number: number;
  titleEn: string;
  titleAr: string;
  contentEn: string[];
  contentAr: string[];
  notesEn?: string[];
  notesAr?: string[];
}

export interface LegalServiceCategory {
  id: string;
  titleEn: string;
  titleAr: string;
  summaryEn?: string;
  summaryAr?: string;
  pointsEn: string[];
  pointsAr: string[];
}

export interface LegalSection {
  id: string;
  numberPrefix: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  introEn?: string;
  introAr?: string;
  categories?: LegalServiceCategory[];
  articles?: LegalArticle[];
}

export const TERMS_AND_CONDITIONS_DATA: {
  hero: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    prototypeNoticeEn: string;
    prototypeNoticeAr: string;
  };
  sections: LegalSection[];
} = {
  hero: {
    titleEn: 'Terms and Conditions',
    titleAr: 'الشروط والأحكام',
    subtitleEn: 'Comprehensive regulatory, academic, and financial policies governing the Ya Hala learning community.',
    subtitleAr: 'اللوائح التنظيمية والأكاديمية والمالية الشاملة التي تحكم مجتمع التعلم في برنامج يا هلا.',
    prototypeNoticeEn: 'Prototype notice: This page is presented for demonstration and internal review. The final wording remains subject to operational and legal approval.',
    prototypeNoticeAr: 'تنبيه النموذج الأولي: تعرض هذه الصفحة لأغراض العرض والمراجعة الداخلية، وتبقى الصياغة النهائية خاضعة للاعتماد التشغيلي والقانوني.'
  },
  sections: [
    {
      id: 'service-guide',
      numberPrefix: 'Part I',
      titleEn: 'Your Life at Ya Hala (Services Guide)',
      titleAr: 'حياتك في ياهلا (دليل الخدمات)',
      subtitleEn: 'Student services, campus life, safety, and community protocols.',
      subtitleAr: 'الخدمات الطلابية، الحياة داخل الأكاديمية، السلامة، وقنوات التواصل.',
      introEn: 'We are delighted to welcome you to our educational community in the Ya Hala Program for Saudi dialect and cultural immersion. We look forward to your journey being an enriching experience that helps you understand the Saudi dialect, speak it with confidence, and engage meaningfully with Saudi society and culture. The program combines structured learning, practical application, authentic conversational situations, and cultural immersion so that you learn the language as it is spoken in everyday life. This guide is designed to introduce you to the program, services, and core regulations that will help you achieve the greatest benefit from your educational journey.',
      introAr: 'يسعدنا انضمامكم إلى مجتمعنا التعليمي في برنامج ياهلا لتعلم اللهجة والثقافة السعودية، ونتطلع إلى أن تكون رحلتكم تجربة ثرية تساعدكم على فهم اللهجة السعودية والتحدث بها بثقة والتفاعل مع المجتمع والثقافة السعودية. يجمع البرنامج بين التعلم المنظم، والممارسة العملية، والمواقف التواصلية الواقعية، والتجارب الثقافية؛ لتتعلموا اللغة كما تُستخدم في الحياة اليومية. ويهدف هذا الدليل إلى تعريفكم بالبرنامج والخدمات والأنظمة الأساسية التي تساعدكم على تحقيق أقصى استفادة من رحلتكم التعليمية.',
      categories: [
        {
          id: 'educational-programs',
          titleEn: 'Educational Programs',
          titleAr: 'البرامج التعليمية',
          summaryEn: 'The Academy offers in-person programs tailored to meet the diverse needs of learners, including:',
          summaryAr: 'تقدم الأكاديمية برامج حضورية مصممة لتلبية احتياجات مختلف المتعلمين، ومنها:',
          pointsEn: [
            'Ya Hala Group Program: for students wishing to study within a cohort.',
            'Ya Hala Individual Program: for students wishing to study on a one-on-one basis.',
            'Ya Hala Corporate Program: for corporate entities and organizations seeking to train their teams.',
            'Placement testing to ensure appropriate level placement.',
            'Modern, dedicated curricula focused on the Saudi dialect.',
            'Qualified, specialized native instructors.',
            'Applied communicative and cultural enrichment activities.',
            'An engaging, interactive learning environment.'
          ],
          pointsAr: [
            'برنامج يا هلا للمجموعات: للطلاب الراغبين في الدراسة ضمن مجموعة.',
            'برنامج يا هلا للأفراد: للطلاب الراغبين في الدراسة بصورة فردية.',
            'برنامج يا هلا للأعمال: للشركات والجهات الراغبة في تدريب موظفيها.',
            'اختبار تحديد المستوى لضمان التوجيه الدقيق.',
            'مناهج حديثة متخصصة في اللهجة السعودية.',
            'معلمون مؤهلون ومتخصصون في التدريب اللغوي.',
            'أنشطة تطبيقية وثقافية معايشة.',
            'بيئة تعليمية تفاعلية تحفز الممارسة الحية.'
          ]
        },
        {
          id: 'student-services',
          titleEn: 'Student Services',
          titleAr: 'الخدمات الطلابية',
          summaryEn: 'The Academy provides a comprehensive suite of services to support each student:',
          summaryAr: 'توفر الأكاديمية مجموعة متكاملة من الخدمات لدعم الطالب ومساندته:',
          pointsEn: [
            'Student reception, welcoming, and general orientation.',
            'Continuous academic support throughout the term.',
            'Educational guidance and learning pathway counseling.',
            'Technical support for learning platforms and digital resources.',
            'Prompt inquiry response channels.',
            'Follow-up on student complaints, feedback, and development proposals.'
          ],
          pointsAr: [
            'استقبال وإرشاد الطلاب والترحيب بهم.',
            'الدعم الأكاديمي المستمر طوال فترة الدراسة.',
            'الإرشاد التعليمي ومتابعة التقدم الفردي.',
            'الدعم التقني للمنصات والموارد التعليمية.',
            'الرد على الاستفسارات والتساؤلات.',
            'متابعة الشكاوى والمقترحات التطويرية بعناية.'
          ]
        },
        {
          id: 'campus-life',
          titleEn: 'Life Inside the Academy',
          titleAr: 'الحياة داخل الأكاديمية',
          summaryEn: 'To foster an inspiring and respectful learning atmosphere, all students commit to:',
          summaryAr: 'حرصًا على توفير بيئة تعليمية ملهمة ومناسبة، يلتزم جميع الطلاب بما يأتي:',
          pointsEn: [
            'Strict adherence to scheduled lesson timetables and appointments.',
            'Wearing appropriate attire that respects institutional regulations and public decency standards.',
            'Carefully preserving classrooms, shared facilities, and campus grounds.',
            'Using the Academy internet network strictly for legitimate educational purposes.',
            'Maintaining quiet, decorum, and mutual consideration inside campus premises.',
            'Respecting prayer times and designated class breaks.'
          ],
          pointsAr: [
            'الالتزام التام بمواعيد الدراسة والحصص المقررة.',
            'ارتداء ملابس مناسبة تراعي الأنظمة والذوق العام.',
            'المحافظة على نظافة وسلامة القاعات والمرافق العامة.',
            'استخدام شبكة الإنترنت للأغراض التعليمية المصرح بها.',
            'المحافظة على الهدوء والسكينة داخل أروقة الأكاديمية.',
            'احترام أوقات الصلاة والاستراحات المعتمدة.'
          ]
        },
        {
          id: 'safety-measures',
          titleEn: 'Safety',
          titleAr: 'السلامة',
          summaryEn: 'The Academy is dedicated to maintaining a safe environment for all learners and personnel:',
          summaryAr: 'تلتزم الأكاديمية بتوفير بيئة آمنة وصحية لجميع الطلاب ومنسوبيها، وتشمل:',
          pointsEn: [
            'Full implementation of building safety, hazard prevention, and emergency evacuation procedures.',
            'Equipping premises with certified first-aid kits and materials.',
            'Mandatory immediate reporting of any emergency, injury, or safety concern.',
            'Strict compliance with all security and health guidelines within the premises.'
          ],
          pointsAr: [
            'تطبيق إجراءات السلامة المعتمدة وخطط الإخلاء في حالات الطوارئ.',
            'توفير وسائل الإسعافات الأولية والتجهيزات الطبية الوقائية.',
            'الإبلاغ الفوري لإدارة المركز عن أي حالة طارئة أو إصابة.',
            'الالتزام الصارم بتعليمات الأمن والسلامة العامة داخل المبنى.'
          ]
        },
        {
          id: 'privacy-protection',
          titleEn: 'Privacy',
          titleAr: 'الخصوصية',
          summaryEn: 'The Academy places the highest priority on student privacy through:',
          summaryAr: 'تحرص الأكاديمية على حماية خصوصية الطلاب وصون بياناتهم، وذلك من خلال:',
          pointsEn: [
            'Maintaining strict confidentiality over student personal information and contact records.',
            'Restricting data usage exclusively to academic, educational, and internal administrative requirements.',
            'Prohibiting the capture or publication of student photographs or audio-visual recordings except in full accordance with applicable laws or with prior explicit consent when required.'
          ],
          pointsAr: [
            'الحفاظ على السرية التامة للبيانات الشخصية وسجلات التواصل.',
            'استخدام البيانات المدخلة للأغراض التعليمية والإدارية المباشرة فقط.',
            'عدم نشر الصور أو التسجيلات المرئية والصوتية إلا وفق الأنظمة المرعية أو بعد الحصول على الموافقات الصريحة اللازمة عند الاقتضاء.'
          ]
        },
        {
          id: 'activities-and-trips',
          titleEn: 'Trips and Activities',
          titleAr: 'الرحلات والأنشطة',
          summaryEn: 'The Academy organizes cultural immersion programs and field trips designed to reinforce Saudi dialect communication in authentic life settings. Students commit to:',
          summaryAr: 'تنظم الأكاديمية برامج ثقافية ورحلات تعليمية تهدف إلى تعزيز استخدام اللهجة والتواصل في مواقف الحياة الواقعية. ويلتزم الطالب بما يأتي:',
          pointsEn: [
            'Punctual arrival and adherence to meeting times, group schedules, and departure windows.',
            'Following all operational directives and guidelines provided by assigned trip supervisors.',
            'Observing public safety standards and situational awareness at all times.',
            'Respecting local regulations, heritage site policies, and cultural norms at visited venues.'
          ],
          pointsAr: [
            'الالتزام الدقيق بمواعيد التجمع والانطلاق والبرنامج الزمني للجولة.',
            'اتباع توجيهات وتعليمات المشرفين الميدانيين طوال فترة الرحلة.',
            'المحافظة على السلامة العامة والحرص على سلامة الزملاء والمرافق.',
            'احترام الأنظمة والقواعد المعمول بها في المواقع التراثية والجهات المزارة.'
          ]
        },
        {
          id: 'complaints-and-suggestions',
          titleEn: 'Complaints and Suggestions',
          titleAr: 'الشكاوى والاقتراحات',
          summaryEn: 'The Academy welcomes student feedback as an essential pillar of quality enhancement:',
          summaryAr: 'ترحب الأكاديمية بجميع الملاحظات والآراء التي تسهم في تطوير جودة خدماتها وبرامجها:',
          pointsEn: [
            'Students may submit any grievance, inquiry, or suggestion through official approved channels.',
            'Requests may be tracked directly through the Student Services desk.',
            'Decisions may be appealed in accordance with approved institutional procedures.',
            'The Academy commits to reviewing all requests within a reasonable timeframe and under strict confidentiality.'
          ],
          pointsAr: [
            'يمكن للطالب تقديم شكوى أو اقتراح عبر القنوات الرسمية المعتمدة.',
            'متابعة حالة الطلب والردود عبر قسم خدمة الطلاب.',
            'التظلم من القرار الإداري وفق الإجراءات التنظيمية المعتمدة.',
            'تحرص الأكاديمية على معالجة الطلبات خلال مدة زمنية مناسبة وبسرية تامة.'
          ]
        },
        {
          id: 'communication-channels',
          titleEn: 'Communication Channels',
          titleAr: 'التواصل',
          summaryEn: 'For any assistance, inquiry, or operational coordination, learners may reach the Academy via:',
          summaryAr: 'لأي استفسار أو مساعدة يمكن التواصل مع الأكاديمية عبر القنوات التالية:',
          pointsEn: [
            'Student Services Center and Help Desk.',
            'Official institutional email (contact details pending final operational confirmation).',
            'Dedicated WhatsApp customer care line (pending confirmation).',
            'Official Ya Hala Website.',
            'Official verified social media accounts.'
          ],
          pointsAr: [
            'مكتب خدمة وإرشاد الطلاب بالمقر.',
            'البريد الإلكتروني المعتمد (قيد التأكيد التشغيلي للنموذج).',
            'خدمة المحادثة عبر واتساب الرسمية (قيد التأكيد التشغيلي).',
            'بوابة الموقع الإلكتروني الرسمي لبرنامج يا هلا.',
            'حسابات التواصل الاجتماعي الرسمية المعتمدة.'
          ]
        }
      ]
    },
    {
      id: 'academic-guide',
      numberPrefix: 'Part II',
      titleEn: 'Your Journey at Ya Hala (Academic Guide)',
      titleAr: 'رحلتك في ياهلا (الدليل الأكاديمي)',
      subtitleEn: 'Admission, attendance regulations, assessment standards, and student rights.',
      subtitleAr: 'لوائح القبول والتسجيل، الحضور والانضباط، النزاهة الأكاديمية، وحقوق ومسؤوليات الطالب.',
      articles: [
        {
          number: 1,
          titleEn: 'Admission Requirements',
          titleAr: 'شروط القبول',
          contentEn: [
            'Admission to Ya Hala educational programs requires:',
            '• Fully completing the official application form.',
            '• Submitting all required personal and identification documentation.',
            '• Settling the tuition fees according to the financial regulations.',
            '• Successfully passing the placement test and interview when deemed necessary.'
          ],
          contentAr: [
            'يشترط للقبول في البرامج التعليمية:',
            '• استكمال نموذج التسجيل الرسمي بكامل بياناته.',
            '• تقديم كافة الوثائق والمستندات المطلوبة.',
            '• سداد الرسوم المقررة وفقًا لأحكام اللائحة المالية.',
            '• اجتياز اختبار تحديد المستوى والمقابلة الشخصية عند الحاجة.'
          ]
        },
        {
          number: 2,
          titleEn: 'Registration',
          titleAr: 'التسجيل',
          contentEn: [
            'Registration is deemed final and binding only after official written confirmation by the Academy and full completion of all statutory admission prerequisites.'
          ],
          contentAr: [
            'يعد التسجيل نهائيًا ونافذًا بعد تأكيد الأكاديمية الرسمي واستكمال جميع متطلبات وشروط القبول.'
          ]
        },
        {
          number: 3,
          titleEn: 'Placement Test',
          titleAr: 'اختبار تحديد المستوى',
          contentEn: [
            'The Academy may require the student to undergo a diagnostic assessment or oral interview to determine the appropriate proficiency level. The Academy’s determination regarding student level placement is final.'
          ],
          contentAr: [
            'يجوز للأكاديمية إخضاع الطالب لاختبار تقييمي أو مقابلة شخصية لتحديد المستوى التعليمي المناسب، ويعد قرار الأكاديمية في هذا الشأن نهائيًا.'
          ]
        },
        {
          number: 4,
          titleEn: 'Student Level Allocation',
          titleAr: 'توزيع الطلاب',
          contentEn: [
            'Students enrolled in group programs are allocated to respective proficiency cohorts based on diagnostic placement test results and approved institutional academic criteria.'
          ],
          contentAr: [
            'يتم توزيع الطلاب على المستويات الدراسية وفق نتائج اختبار تحديد المستوى والمعايير الأكاديمية المعتمدة في برامج المجموعات.'
          ]
        },
        {
          number: 5,
          titleEn: 'Progression Between Levels',
          titleAr: 'الانتقال بين المستويات',
          contentEn: [
            'A student qualifies for progression to the subsequent proficiency level after satisfactorily meeting all academic passing requirements according to the evaluation criteria set by the Academy.'
          ],
          contentAr: [
            'ينتقل الطالب إلى المستوى التعليمي التالي بعد استيفاء كافة متطلبات النجاح المقررة وفق معايير التقييم المعتمدة في الأكاديمية.'
          ]
        },
        {
          number: 6,
          titleEn: 'Study System',
          titleAr: 'نظام الدراسة',
          contentEn: [
            'The Academy commits to delivering the instructional program in accordance with the published study plan for group cohorts. Enrolled students are obligated to participate actively in all designated academic sessions, workshops, and required activities.'
          ],
          contentAr: [
            'تلتزم الأكاديمية بتنفيذ البرنامج وفق الخطة الدراسية المعلنة في برامج المجموعات، ويجب على الطالب الالتزام التام بجميع الأنشطة الأكاديمية المقررة.'
          ]
        },
        {
          number: 7,
          titleEn: 'Language of Instruction',
          titleAr: 'اللغة المستخدمة',
          contentEn: [
            'The Saudi dialect is adopted as the primary medium of instruction and interpersonal communication within the instructional environment, delivered progressively to match the student’s proficiency level.'
          ],
          contentAr: [
            'تعتمد اللهجة السعودية أساسية في التدريس والتواصل داخل البيئة التعليمية، بما يتناسب مع مستوى الطالب ويتدرج معه نحو الطلاقة.'
          ]
        },
        {
          number: 8,
          titleEn: 'Classroom Participation',
          titleAr: 'المشاركة الصفية',
          contentEn: [
            'Students commit to engaged, positive classroom participation, maintaining professional courtesy and mutual respect towards instructors and classmates during all learning exercises.'
          ],
          contentAr: [
            'يلتزم الطالب بالمشاركة الإيجابية البناءة وإبداء كامل الاحترام والتقدير للمعلمين وزملائه أثناء جميع الأنشطة والتدريبات التعليمية.'
          ]
        },
        {
          number: 9,
          titleEn: 'Attendance',
          titleAr: 'الحضور',
          contentEn: [
            'Students are obligated to attend scheduled lessons at the approved times. Lessons commence and conclude promptly according to the scheduled timetable.',
            '• Group Students: The group proceeds according to its approved calendar, and session times will not be altered or rescheduled due to the absence of an individual student.',
            '• Individual and Corporate Programs: Lessons enjoy greater rescheduling flexibility subject to the specific governing controls detailed below.'
          ],
          contentAr: [
            'يلتزم الطالب بحضور الحصص في المواعيد المعتمدة، وتبدأ الحصة وتنتهي في وقتها المحدد دون إخلال بالجدول.',
            '• طلاب المجموعات: تستمر المجموعة وفق جدولها المعتمد ولا يتغير موعد الحصة أو يتأجل بسبب غياب أحد الطلاب.',
            '• الأفراد والأعمال: تتمتع الحصص بمرونة أكبر في إعادة الجدولة وفق الضوابط والاشتراطات المحددة أدناه.'
          ]
        },
        {
          number: 10,
          titleEn: 'Rescheduling or Cancelling a Lesson',
          titleAr: 'تغيير أو إلغاء الموعد',
          contentEn: [
            '• Group Students: Lesson times cannot be changed or moved due to their commitment to the group cohort calendar.',
            '• Individual and Corporate Programs: A lesson may be changed or cancelled without deducting from the session balance provided the Academy is notified at least 24 hours prior to the scheduled start time. If cancellation is requested with less than 24 hours notice, the session will be counted and deducted from the balance, unless an emergency excuse is formally validated and accepted by the Academy.'
          ],
          contentAr: [
            '• طلاب المجموعات: لا يمكن تغيير موعد الحصة بسبب ارتباطها بالجدول الزمني العام للمجموعة.',
            '• الأفراد والأعمال: يمكن تغيير أو إلغاء الحصة دون احتسابها من الرصيد عند إبلاغ الأكاديمية قبل الموعد بـ 24 ساعة على الأقل. أما الإلغاء خلال مدة تقل عن 24 ساعة فتُحتسب الحصة ضمن الساعات المستهلكة، ما لم يوجد عذر طارئ تقبله الأكاديمية.'
          ]
        },
        {
          number: 11,
          titleEn: 'Excused Absence',
          titleAr: 'الغياب بعذر',
          contentEn: [
            'Acceptable documented excuses include:',
            '• Illness or emergency health conditions.',
            '• Bereavement or urgent family emergencies.',
            '• Accidents and unavoidable force majeure events.',
            '• Emergency official or professional commitments.',
            '• Exceptional unforeseen circumstances approved by the Academy.',
            '• Travel, strictly on the condition of notifying the Academy in advance:',
            '  - Group Students: Notice must be delivered at least 48 hours prior to absence.',
            '  - Individual and Corporate Programs: Rescheduling due to travel is permitted when reported at least 24 hours in advance.',
            'The Academy retains the right to demand official documentary evidence validating any claimed excuse.'
          ],
          contentAr: [
            'تشمل الأعذار المقبولة نظامًا:',
            '• المرض أو الحالة الصحية الطارئة.',
            '• الوفاة أو الظروف العائلية الطارئة.',
            '• الحوادث والظروف القاهرة الخارجة عن الإرادة.',
            '• الالتزامات الرسمية أو المهنية الطارئة المثبتة.',
            '• الحالات الاستثنائية التي تعتمدها إدارة الأكاديمية.',
            '• السفر بشرط إبلاغ الأكاديمية مسبقًا وفق الضوابط التالية:',
            '  - طلاب المجموعات: يجب الإبلاغ عن السفر قبل الغياب بـ 48 ساعة على الأقل.',
            '  - الأفراد والأعمال: يمكن إعادة جدولة الحصة بسبب السفر عند الإبلاغ قبلها بـ 24 ساعة على الأقل.',
            'ويحق للأكاديمية طلب ما يثبت العذر بمستندات رسمية عند الحاجة.'
          ]
        },
        {
          number: 12,
          titleEn: 'Unexcused Absence',
          titleAr: 'الغياب دون عذر',
          contentEn: [
            'Failure to attend without prior notification or an accepted legitimate excuse constitutes unexcused absence. In this event, the class hour is counted as delivered against the student’s subscription allowance and is neither refundable nor subject to compensation.'
          ],
          contentAr: [
            'عدم الحضور دون إشعار مسبق أو عذر مقبول يعد غيابًا غير مبرر، وتُحتسب الحصة من ساعات الاشتراك الفعلية ولا تُعوّض بأي شكل.'
          ]
        },
        {
          number: 13,
          titleEn: 'Late Arrival',
          titleAr: 'التأخر',
          contentEn: [
            'A late arrival grace period of up to 10 minutes is permitted, but the lesson duration will not be extended beyond its scheduled conclusion to compensate for lost time.',
            'If the delay exceeds 25% of the total session duration without a legitimate excuse, the Academy reserves the right to designate the student as absent for that session.'
          ],
          contentAr: [
            'يسمح بالتأخر حتى 10 دقائق من بدء الحصة، ولا يتم تمديد وقت الحصة لتعويض مدة التأخر.',
            'إذا تجاوز وقت التأخر 25% من مدة الحصة الإجمالية دون عذر، فيحق للأكاديمية احتساب الطالب غائبًا عن تلك الحصة.'
          ]
        },
        {
          number: 14,
          titleEn: 'Replacement Lessons',
          titleAr: 'تعويض الحصص',
          contentEn: [
            '• Group Students: An excused absence does not suspend the group cohort and does not entitle the learner to an individual re-delivery of the group class. The Academy assists the student in catching up on missed course content according to available academic resources.',
            '• Individual and Corporate Programs: Any session excused or rescheduled in compliance with the established statutory notice timeframe remains retained in the student’s credit hours balance, and an alternative makeup time is arranged based on instructor availability.'
          ],
          contentAr: [
            '• طلاب المجموعات: الغياب بعذر لا يوقف سير المجموعة ولا يعني إعادة تقديم الحصة الجماعية بشكل فردي، وتساعد الأكاديمية الطالب على استدراك ما فاته وفق الإمكانات المتاحة.',
            '• الأفراد والأعمال: الحصة التي تم الاعتذار عنها أو إعادة جدولتها وفق المدة النظامية المحددة تبقى محفوظة ضمن رصيد الساعات، ويتم تحديد موعد بديل حسب المتاح من الجداول.'
          ]
        },
        {
          number: 15,
          titleEn: 'Subscription Freeze or Temporary Suspension',
          titleAr: 'التجميد والتوقف المؤقت',
          contentEn: [
            'A student may submit a request to freeze their subscription or temporarily suspend remaining hours due to travel, medical reasons, or force majeure, subject to written approval by the Academy.',
            '• Group Students: Upon returning from a freeze, the student will be enrolled in an appropriate incoming cohort matching their level and seat availability; the Academy cannot guarantee re-entry into the identical peer group.',
            '• Individual and Corporate Programs: Remaining hours resume and are rescheduled according to instructor availability and available appointment slots, strictly within the validity term of the purchased package.'
          ],
          contentAr: [
            'يجوز طلب تجميد الاشتراك أو إيقاف الساعات المتبقية مؤقتًا بسبب السفر أو المرض أو الظروف القاهرة، بعد موافقة إدارة الأكاديمية.',
            '• طلاب المجموعات: عند العودة من التجميد يتم إلحاق الطالب بمجموعة مناسبة حسب المستوى وتوفر المقاعد، ولا تضمن الأكاديمية العودة إلى المجموعة ذاتها.',
            '• الأفراد والأعمال: تستأنف الساعات المتبقية وتتم إعادة جدولتها حسب توفر المعلمين والمواعيد الشاغرة، وفي حدود صلاحية الباقة المعتمدة.'
          ]
        },
        {
          number: 16,
          titleEn: 'Maximum Absence',
          titleAr: 'الحد الأعلى للغياب',
          contentEn: [
            '• Group Students: Attendance must not fall below 80% of total level instructional hours. If absence exceeds 20%, the Academy reserves the right to evaluate the student’s academic eligibility to complete and pass the level.',
            '• Individual and Corporate Programs: The percentage absence cap is not applied in the same manner; program completion is contingent upon delivering the contracted hours within the package validity duration.'
          ],
          contentAr: [
            '• طلاب المجموعات: يجب ألا تقل نسبة الحضور عن 80% من إجمالي ساعات المستوى الدراسي، وإذا تجاوز الغياب 20% فيحق للأكاديمية تقييم أهلية الطالب لاجتياز المستوى ومنحه شهادة الإتمام.',
            '• الأفراد والأعمال: لا يطبق حد الغياب بالنسبة المئوية بالطريقة نفسها؛ ويعتمد استكمال البرنامج على إنجاز الساعات المطلوبة خلال مدة صلاحية الباقة.'
          ]
        },
        {
          number: 17,
          titleEn: 'Lesson Cancellation by the Academy',
          titleAr: 'إلغاء الحصة من الأكاديمية',
          contentEn: [
            'If a scheduled lesson is cancelled by the Academy or due to instructor unavailability, the class will not be deducted from the student’s subscription balance, and a mutually convenient replacement session will be scheduled.'
          ],
          contentAr: [
            'إذا ألغيت الحصة بسبب راجع للأكاديمية أو لظروف المعلم، فلا تُحتسب الحصة من ساعات الاشتراك إطلاقًا، ويتم تحديد موعد بديل بالاتفاق مع الطالب.'
          ]
        },
        {
          number: 18,
          titleEn: 'Special Provisions for Business Programs',
          titleAr: 'أحكام خاصة بالأعمال',
          contentEn: [
            '• The training schedule is formally approved through direct coordination with the sponsoring organization’s designated representative.',
            '• All timetable adjustments and rescheduling requests must be submitted exclusively via the accredited corporate coordinator.',
            '• The absence of an individual employee does not warrant re-delivery or repetition of the session if it was conducted for the remainder of the corporate cohort.',
            '• All rescheduling remains contingent upon instructor availability and calendar coordination.'
          ],
          contentAr: [
            '• يعتمد الجدول التدريبي بالتنسيق الرسمي مع ممثل الجهة أو الشركة المعتمد.',
            '• يتم طلب تعديل المواعيد حصريًا من خلال ممثل الجهة المفوض لدى الأكاديمية.',
            '• غياب أحد موظفي الجهة لا يؤدي إلى إعادة الحصة إذا أُقيمت بالفعل لبقية أفراد المجموعة.',
            '• تخضع أية إعادة جدولة لتوفر المعلمين والمواعيد المتاحة لدى الأكاديمية.'
          ]
        },
        {
          number: 19,
          titleEn: 'Assignments',
          titleAr: 'الواجبات',
          contentEn: [
            'The student commits to completing and delivering all required homework, practical tasks, and language practice activities within the scheduled deadlines established by the teaching faculty.'
          ],
          contentAr: [
            'يلتزم الطالب بأداء الواجبات والتكاليف والأنشطة التطبيقية المطلوبة منه في المواعيد المحددة من قبل الهيئة التعليمية.'
          ]
        },
        {
          number: 20,
          titleEn: 'Tests and Assessments',
          titleAr: 'الاختبارات والتقييمات',
          contentEn: [
            'The Academy conducts progress quizzes, conversational assessments, and level evaluations in accordance with the approved curriculum plan. Students are required to adhere strictly to all examination schedules.'
          ],
          contentAr: [
            'تجري الأكاديمية الاختبارات التقييمية وقياسات الأداء اللغوي وفق الخطة المعتمدة، ويجب على الطالب الالتزام بمواعيدها المحددة.'
          ]
        },
        {
          number: 21,
          titleEn: 'Academic Integrity',
          titleAr: 'النزاهة الأكاديمية',
          contentEn: [
            'The student is committed to strict academic honesty. Cheating, plagiarism, impersonation, or any conduct that compromises the integrity and fairness of evaluation is strictly forbidden. The Academy retains the full right to take appropriate disciplinary measures against violators.'
          ],
          contentAr: [
            'يلتزم الطالب بمبادئ الأمانة العلمية، ويمنع منعًا باتًا الغش أو الانتحال أو أي سلوك يخل بنزاهة التقييم والعدالة، ويحق للأكاديمية اتخاذ الإجراءات التأديبية المناسبة بحق المخالف.'
          ]
        },
        {
          number: 22,
          titleEn: 'Student Conduct',
          titleAr: 'الالتزام السلوكي',
          contentEn: [
            'The student is obligated to respect Academy regulations, instructional guidelines, and code of conduct, actively fostering a courteous, welcoming, and positive educational environment.'
          ],
          contentAr: [
            'يلتزم الطالب باحترام الأنظمة والتعليمات والآداب، والمحافظة على بيئة تعليمية إيجابية تسودها المودة والاحترام المتبادل.'
          ]
        },
        {
          number: 23,
          titleEn: 'Protection of Property',
          titleAr: 'المحافظة على الممتلكات',
          contentEn: [
            'The student must exercise care to preserve all Academy facilities, technological assets, furnishings, and grounds, bearing full financial liability for any damage or loss resulting from unlawful use or negligence.'
          ],
          contentAr: [
            'يلتزم الطالب بالمحافظة على مرافق الأكاديمية وممتلكاتها وتجهيزاتها، ويتحمل المسؤولية والتعويض عن أي أضرار تنتج عن الاستخدام غير المشروع أو الإهمال.'
          ]
        },
        {
          number: 24,
          titleEn: 'Violations',
          titleAr: 'المخالفات',
          contentEn: [
            'Any action, behavior, or practice that disrupts the educational process, breaches institutional order, or contravenes public morality inside the Academy constitutes a punishable violation of these regulations.'
          ],
          contentAr: [
            'تعد مخالفةً لأحكام هذه اللائحة كل ممارسة أو سلوك يخل بالعملية التعليمية أو النظام العام أو الآداب العامة داخل أروقة ومرافق الأكاديمية.'
          ]
        },
        {
          number: 25,
          titleEn: 'Disciplinary Measures',
          titleAr: 'العقوبات',
          contentEn: [
            'Depending upon the gravity and circumstances of the violation, the Academy may impose one of the following disciplinary sanctions:',
            '• Formal verbal notice / warning.',
            '• Official written reprimand.',
            '• Deprivation of specific student services, trips, or extracurricular activities.',
            '• Temporary academic suspension.',
            '• Complete termination of program registration.'
          ],
          contentAr: [
            'يجوز للأكاديمية اتخاذ إحدى العقوبات والتدابير الآتية بحسب جسامة المخالفة وظروفها:',
            '• التنبيه الشفهي.',
            '• الإنذار الكتابي.',
            '• الحرمان المؤقت من بعض الخدمات أو الأنشطة والرحلات.',
            '• الإيقاف المؤقت عن الدراسة.',
            '• إنهاء التسجيل في البرنامج بشكل نهائي.'
          ]
        },
        {
          number: 26,
          titleEn: 'Student Rights',
          titleAr: 'حقوق الطالب',
          contentEn: [
            '• Receiving quality education delivered according to approved academic standards.',
            '• Benefiting fully from all announced educational and student services.',
            '• Being treated with dignity, fairness, equality, and professional respect at all times.',
            '• Submitting grievances, complaints, and constructive recommendations through established official procedures.'
          ],
          contentAr: [
            '• الحصول على تعليم متميز وفق المعايير الأكاديمية المعتمدة.',
            '• الاستفادة الكاملة من الخدمات التعليمية والطلابية المعلنة.',
            '• المعاملة باحترام وعدالة وإنصاف في كافة الأوقات.',
            '• تقديم الشكاوى والمقترحات وفق الإجراءات التنظيمية المعتمدة ومتابعتها.'
          ]
        },
        {
          number: 27,
          titleEn: 'Student Responsibilities',
          titleAr: 'واجبات الطالب',
          contentEn: [
            '• Strictly complying with all Academy bylaws, rules, and administrative decisions.',
            '• Preserving Academy property, resources, and learning materials.',
            '• Demonstrating mutual respect toward all faculty members, administrative staff, and fellow peers.',
            '• Maintaining consistent attendance and engaging actively in all instructional components.'
          ],
          contentAr: [
            '• الالتزام التام بالأنظمة واللوائح والقرارات الإدارية.',
            '• المحافظة على ممتلكات الأكاديمية ومرافقها ومقتنياتها.',
            '• احترام أعضاء الهيئة التعليمية والإدارية والزملاء الطلاب.',
            '• الالتزام التام بنسب الحضور والمشاركة الفاعلة.'
          ]
        },
        {
          number: 28,
          titleEn: 'Academy Rights',
          titleAr: 'حقوق الأكاديمية',
          contentEn: [
            'The Academy reserves the full institutional right to organize and supervise educational operations, make necessary academic and administrative determinations, and enforce these regulations in a manner that preserves the quality, integrity, and prestige of its educational programs.'
          ],
          contentAr: [
            'يحق للأكاديمية تنظيم العملية التعليمية، واتخاذ القرارات الأكاديمية والإدارية اللازمة، وتطبيق أحكام هذه اللائحة بما يحقق جودة البرامج التعليمية وتميز مخرجاتها.'
          ]
        }
      ]
    },
    {
      id: 'financial-guide',
      numberPrefix: 'Part III',
      titleEn: 'Your Subscription at Ya Hala (Financial Guide)',
      titleAr: 'اشتراكك في ياهلا (الدليل المالي)',
      subtitleEn: 'Tuition fees, payment schedules, deferral conditions, and refund policies.',
      subtitleAr: 'الرسوم الدراسية، مواعيد السداد، ضوابط التأجيل، وسياسة الاسترداد والإلغاء المالي.',
      articles: [
        {
          number: 1,
          titleEn: 'Tuition Fees',
          titleAr: 'الرسوم الدراسية',
          contentEn: [
            'Tuition fees cover the instructional and student services expressly stated in the program syllabus and description. Fees do not cover any external services or supplementary privileges not explicitly provided for.'
          ],
          contentAr: [
            'تشمل الرسوم الخدمات الموضحة في وصف البرنامج، ولا تشمل أي خدمات لم يرد النص عليها صراحة في وثيقة البرنامج.'
          ]
        },
        {
          number: 2,
          titleEn: 'Additional Fees',
          titleAr: 'الرسوم الإضافية',
          contentEn: [
            'The Academy may levy separate administrative charges on optional or supplementary services, including application processing, official certificate issuance, issuing replacement certificates for lost items, requesting extra academic transcripts, or any other specialized services announced by the Academy.'
          ],
          contentAr: [
            'يجوز فرض رسوم على بعض الخدمات الاختيارية، مثل التسجيل أو الشهادة أو إصدار بدل فاقد للشهادة أو طلب نسخ إضافية أو أي خدمات أخرى تعلنها الأكاديمية.'
          ]
        },
        {
          number: 3,
          titleEn: 'Payment Methods',
          titleAr: 'طرق الدفع',
          contentEn: [
            'The Academy accepts officially approved payment methods (electronic cards, bank transfers, or accredited payment gateways). Payment is deemed valid and effective only upon confirmed receipt of cleared funds into the Academy’s designated bank accounts.'
          ],
          contentAr: [
            'تقبل الأكاديمية وسائل الدفع المعتمدة لديها، ويعد السداد نافذًا ومكتملًا بعد تأكيد استلام المبلغ الفعلي في حسابات الأكاديمية.'
          ]
        },
        {
          number: 4,
          titleEn: 'Payment Deadlines',
          titleAr: 'مواعيد السداد',
          contentEn: [
            'The student is required to settle the total tuition fees in full prior to the designated program start date, unless an alternative installment or billing structure has been officially approved in writing by the Academy.'
          ],
          contentAr: [
            'يلتزم الطالب بسداد الرسوم كاملة قبل بدء البرنامج الدراسي، ما لم تعتمد إدارة الأكاديمية ترتيبًا أو جدولًا ماليًا آخر.'
          ]
        },
        {
          number: 5,
          titleEn: 'Installments',
          titleAr: 'التقسيط',
          contentEn: [
            'The Academy may, at its sole discretion, approve payment of tuition fees in scheduled installments subject to specific terms. Default or failure to meet the installment schedule results in immediate suspension of educational services and portal access, or complete revocation of registration.'
          ],
          contentAr: [
            'يجوز للأكاديمية الموافقة على تقسيط الرسوم وفق ضوابطها المعتمدة، ويترتب على الإخلال بخطة وسداد الأقساط تعليق تقديم الخدمات التعليمية أو إيقاف التسجيل.'
          ]
        },
        {
          number: 6,
          titleEn: 'Proof of Payment',
          titleAr: 'إثبات السداد',
          contentEn: [
            'The student is obligated to retain official receipts, transfer confirmation documents, and payment receipts to present to the financial administration upon request.'
          ],
          contentAr: [
            'يلتزم الطالب بالاحتفاظ بإثبات عملية الدفع والتحويل البنكي لتقديمه للإدارة المالية عند الحاجة.'
          ]
        },
        {
          number: 7,
          titleEn: 'Deferral',
          titleAr: 'التأجيل',
          contentEn: [
            'A student may submit a formal request to defer their program registration prior to the scheduled program commencement date. The request remains subject to evaluation and written approval by the Academy pursuant to its financial policies.'
          ],
          contentAr: [
            'يجوز للطالب طلب تأجيل التسجيل قبل بدء البرنامج، ويخضع الطلب لموافقة الأكاديمية وفق أحكام اللائحة المالية.'
          ]
        },
        {
          number: 8,
          titleEn: 'Deferral Period',
          titleAr: 'مدة التأجيل',
          contentEn: [
            'Deferral is permitted once only, provided that the deferred credit is utilized within a maximum duration not exceeding twelve (12) months from the original program commencement date, unless the Academy explicitly approves an exceptional extension in writing.'
          ],
          contentAr: [
            'يسمح بالتأجيل مرة واحدة فقط، على أن يستخدم الحق في الدراسة خلال مدة لا تتجاوز (12) شهرًا من تاريخ بدء البرنامج الأصلي، ما لم توافق الأكاديمية كتابةً على خلاف ذلك.'
          ]
        },
        {
          number: 9,
          titleEn: 'Withdrawal Before the Program Begins',
          titleAr: 'الانسحاب قبل بدء البرنامج',
          contentEn: [
            'A student may formally withdraw from enrollment prior to the official commencement date of the program. In such cases, the student is entitled to a refund calculated strictly according to the approved refund schedule.'
          ],
          contentAr: [
            'يجوز للطالب الانسحاب من الدراسة قبل بدء البرنامج، ويستحق الاسترداد المالي وفق سياسة ونسب الاسترداد المعتمدة.'
          ]
        },
        {
          number: 10,
          titleEn: 'Withdrawal After the Program Begins',
          titleAr: 'الانسحاب بعد بدء البرنامج',
          contentEn: [
            'Withdrawal after the program has commenced does not entitle the learner to any tuition refund or reimbursement whatsoever, except under strictly extraordinary circumstances recognized and sanctioned by the Academy.'
          ],
          contentAr: [
            'لا يترتب على الانسحاب بعد بدء البرنامج الفعلي استرداد أي جزء من الرسوم، إلا في الحالات الاستثنائية التي تقرها الأكاديمية بموافقة خاصة.'
          ]
        },
        {
          number: 11,
          titleEn: 'Exceptional Cases',
          titleAr: 'الحالات الاستثنائية',
          contentEn: [
            'The Academy administration may examine withdrawal requests arising from certified medical incapacities or unforeseen force majeure events that are substantiated by accredited official documentation.'
          ],
          contentAr: [
            'يجوز للإدارة النظر في حالات الانسحاب الاضطراري الناتجة عن ظروف طبية قاهرة أو حوادث مثبتة بوثائق وتقارير رسمية معتمدة.'
          ]
        },
        {
          number: 12,
          titleEn: 'Refunds',
          titleAr: 'الاسترداد المالي',
          contentEn: [
            'Financial refund requests are calculated and processed according to the following strict statutory percentage tiers:',
            '• 21 days or more prior to program commencement: Full refund, minus applicable bank processing and administrative fees.',
            '• From 20 down to 8 days prior to program commencement: 10% deduction of the total program fee.',
            '• From 7 days down to 48 hours prior to program commencement: 25% deduction of the total program fee.',
            '• Less than 48 hours prior to commencement, or after the program begins: The student is not entitled to any refund whatsoever, except in discretionary cases individually approved by the Academy.'
          ],
          contentAr: [
            'تتم معالجة طلبات الاسترداد المالي وفق الشرائح والنسب النظامية الآتية:',
            '• قبل (21) يومًا أو أكثر من موعد بدء البرنامج: استرداد كامل المبلغ بعد خصم الرسوم البنكية أو المصاريف الإدارية.',
            '• من (20) إلى (8) أيام قبل موعد البدء: يخصم (10%) من إجمالي الرسوم المقررة.',
            '• من (7) أيام إلى (48) ساعة قبل موعد البدء: يخصم (25%) من إجمالي الرسوم المقررة.',
            '• أقل من (48) ساعة قبل البدء، أو بعد بدء البرنامج الفعلي: لا يحق للطالب استرداد الرسوم إطلاقًا، إلا في الحالات الاستثنائية التي توافق عليها إدارة الأكاديمية.'
          ]
        },
        {
          number: 13,
          titleEn: 'Refund Processing Period',
          titleAr: 'مدة إعادة المبالغ',
          contentEn: [
            'Approved refund sums will be reimbursed within fifteen (15) working days from the date the refund application is officially accredited, executed through the same original payment mechanism wherever technically feasible.'
          ],
          contentAr: [
            'تعاد المبالغ المالية المستحقة خلال (15) يوم عمل من تاريخ اعتماد وقبول طلب الاسترداد، وبنفس وسيلة الدفع التي تم بها السداد ما أمكن ذلك فنيًا.'
          ]
        },
        {
          number: 14,
          titleEn: 'Non-Refundable Fees',
          titleAr: 'الرسوم غير المستردة',
          contentEn: [
            'Bank transaction charges, transfer fees, or any operational expenditures disbursed by the Academy to external third-party agencies on the student’s behalf are entirely non-refundable.'
          ],
          contentAr: [
            'لا تسترد الرسوم البنكية أو رسوم التحويل المالي أو أي مبالغ وتكاليف دفعتها الأكاديمية لجهات خارجية وميدانية نيابة عن الطالب.'
          ]
        },
        {
          number: 15,
          titleEn: 'Registration Transfer',
          titleAr: 'تحويل التسجيل',
          contentEn: [
            'A student may request to transfer their registration to another person or defer to an upcoming session prior to the program commencement date, subject to Academy approval, fulfillment of all admission prerequisites, and settlement of administrative transfer charges, if applicable.'
          ],
          contentAr: [
            'يجوز تحويل التسجيل إلى شخص آخر أو إلى موعد دفعة لاحقة قبل بدء البرنامج، بعد موافقة الأكاديمية واستيفاء كامل الشروط وسداد الرسوم الإدارية المقررة إن وجدت.'
          ]
        },
        {
          number: 16,
          titleEn: 'Cancellation by the Student',
          titleAr: 'إلغاء الطالب',
          contentEn: [
            'Any program cancellation request filed by a student is governed directly by the withdrawal, deferral, and statutory refund provisions stipulated in these financial regulations.'
          ],
          contentAr: [
            'يعد طلب الإلغاء المقدم من قبل الطالب خاضعًا لأحكام الانسحاب والتأجيل وسياسة الاسترداد الواردة نصًا في هذه اللائحة.'
          ]
        },
        {
          number: 17,
          titleEn: 'Cancellation by the Academy',
          titleAr: 'إلغاء الأكاديمية',
          contentEn: [
            'In the event that the Academy cancels an instructional program prior to its scheduled start date, the enrolled student shall have the full right to choose between:',
            '• A 100% full refund of all tuition fees paid without deduction.',
            '• Or transferring their registration balance to another equivalent program or subsequent scheduled cohort date.'
          ],
          contentAr: [
            'إذا قامت الأكاديمية بإلغاء البرنامج التدريبي قبل بدايته لأي سبب، فللطالب كامل الخيار بين:',
            '• استرداد كامل الرسوم المدفوعة بنسبة 100% دون أي خصم.',
            '• أو تحويل التسجيل إلى برنامج تدريبي آخر أو موعد قادم تختاره الأكاديمية.'
          ]
        }
      ]
    }
  ]
};
