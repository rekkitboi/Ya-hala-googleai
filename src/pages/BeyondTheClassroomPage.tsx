import React from 'react';
import { EXPERIENCES, ASSETS } from '../data/yaHalaData';
import { Language, Experience } from '../types';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  MessageSquare, 
  HeartHandshake, 
  Users, 
  HelpCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface BeyondTheClassroomPageProps {
  language: Language;
  onOpenApplication: (programId?: string) => void;
  onSelectExperience: (experience: Experience) => void;
}

export const BeyondTheClassroomPage: React.FC<BeyondTheClassroomPageProps> = ({
  language,
  onOpenApplication,
  onSelectExperience,
}) => {
  const featured = EXPERIENCES[0];
  const supporting = EXPERIENCES.slice(1);

  const learningPillars = [
    {
      id: 'dialect',
      titleEn: 'Saudi Dialect',
      titleAr: 'اللهجة السعودية',
      descEn: 'Absorb colloquial expressions, colloquial idioms, and natural rhythm directly from native speakers in everyday environments.',
      descAr: 'اكتساب المفردات الشعبية، والتعابير الدارجة، ونبرة الحديث التلقائية مباشرة من أهل اللغة في بيئاتهم اليومية.'
    },
    {
      id: 'cultural-understanding',
      titleEn: 'Cultural Understanding',
      titleAr: 'الفهم الثقافي',
      descEn: 'Unpack the traditions, hospitality codes, and historical narratives that give every Saudi greeting and phrase its depth.',
      descAr: 'فهم العادات، وأصول الضيافة، والروايات التاريخية التي تمنح كل تحية وعبارة سعودية معناها العميق.'
    },
    {
      id: 'practical-communication',
      titleEn: 'Practical Communication',
      titleAr: 'التواصل العملي',
      descEn: 'Move beyond textbook syntax to navigate authentic ordering, bartering, complimenting, and storytelling.',
      descAr: 'تجاوز القواعد النظرية إلى ممارسة فعلية للتفاوض، والطلب في المقاهي، وتبادل المجاملات وحكاية القصص.'
    },
    {
      id: 'real-world-practice',
      titleEn: 'Real-World Practice',
      titleAr: 'الممارسة الواقعية',
      descEn: 'Build muscle memory and social ease by engaging with shopkeepers, artisans, guides, and community elders.',
      descAr: 'بناء الطلاقة التلقائية والأريحية الاجتماعية من خلال الحوار المباشر مع الحرفيين، وأصحاب المتاجر، ورواد المجالس.'
    }
  ];

  const whatLearnersPractice = [
    {
      icon: MessageSquare,
      titleEn: 'Listening to Saudi Speech in Context',
      titleAr: 'الاستماع إلى الحديث السعودي في سياقه الحي',
      descEn: 'Tune your ear to varying cadences, Najdi and Hejazi nuances, and ambient background chatter in historic markets and bustling cafes.',
      descAr: 'اعتياد الأذن على تنوع اللهجات وسرعة الكلام اليومي في الأسواق الشعبية والمقاهي والأماكن العامة المفتوحة.'
    },
    {
      icon: HeartHandshake,
      titleEn: 'Using Greetings and Hospitality Expressions',
      titleAr: 'استخدام عبارات الترحيب والضيافة',
      descEn: 'Master responsive greetings like "Ya Hala", "Samm", "Tafaddal", and fireside hospitality phrases with authentic confidence.',
      descAr: 'إتقان الردود الاجتماعية الفورية مثل "يا هلا"، "سم"، "تفضل"، وعبارات إكرام الضيف في المجالس والكشتات.'
    },
    {
      icon: HelpCircle,
      titleEn: 'Asking Questions Naturally',
      titleAr: 'طرح الأسئلة بعفوية وثقة',
      descEn: 'Learn colloquial interrogatives to ask for directions, discuss heritage crafts, and inquire about ingredients comfortably.',
      descAr: 'استخدام صيغ السؤال الدارجة للاستفسار عن الاتجاهات، والتعرف على الحرف اليدوية والمكونات الشعبية دون تردد.'
    },
    {
      icon: Users,
      titleEn: 'Understanding Social Etiquette',
      titleAr: 'فهم أصول اللباقة والذوق الاجتماعي',
      descEn: 'Navigate delicate non-verbal cues: the ceremonial Saudi coffee pour, finjan tilting, majlis seating, and respectful body language.',
      descAr: 'معرفة الإشارات غير اللفظية الدقيقة: تقديم القهوة باليمين، هز الفنجان، ترتيب الجلوس في المجلس، ولباقة المصافحة.'
    },
    {
      icon: ShieldCheck,
      titleEn: 'Building Confidence in Public Situations',
      titleAr: 'بناء الثقة في المواقف العامة',
      descEn: 'Overcome hesitation by applying language under gentle mentor guidance in friendly, supportive real-world interactions.',
      descAr: 'تجاوز حاجز التردد والرهبة من خلال التحدث الفعلي برفقة مرشدين تربويين في مواقف حقيقية داعمة وودودة.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F9F8F5]">
      {/* Editorial Hero: Asymmetric Photographic Layout */}
      <section 
        data-theme="dark" 
        data-header-theme="dark"
        className="relative bg-[#1F3423] text-white overflow-hidden py-20 lg:py-28"
      >
        <div 
          className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: `url("${ASSETS.heroBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3423] via-[#1F3423]/80 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1EC672]/20 border border-[#1EC672]/40 text-[#1EC672] text-xs font-bold uppercase tracking-widest mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'CULTURAL IMMERSION' : 'المعايشة الثقافية الميدانية'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold tracking-tight mb-8 leading-tight">
              {language === 'en' ? 'Beyond the Classroom' : 'ما وراء جدران الفصول'}
            </h1>

            <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-8">
              {language === 'en'
                ? 'Language becomes meaningful when it is used in real places, shared experiences, and everyday conversations. Ya Hala connects classroom learning with cultural encounters that help learners understand Saudi life and practise communication naturally.'
                : 'تكتسب اللغة معناها الحقيقي حين تُستخدم في الأماكن الحية والتجارب المشتركة والمحادثات اليومية. يربط يا هلا بين التعلم في القاعة والتجارب الثقافية التي تساعد المتعلم على فهم الحياة السعودية وممارسة التواصل بصورة طبيعية.'}
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-syne text-white/75">
              <div>
                <span className="block text-[#1EC672] font-bold text-lg">3+</span>
                <span>{language === 'en' ? 'Heritage Hubs' : 'وجهات تاريخية'}</span>
              </div>
              <div>
                <span className="block text-[#1EC672] font-bold text-lg">100%</span>
                <span>{language === 'en' ? 'Native Mentors' : 'مرشدون سعوديون'}</span>
              </div>
              <div>
                <span className="block text-[#1EC672] font-bold text-lg">Najdi & Hejazi</span>
                <span>{language === 'en' ? 'Living Dialects' : 'لهجات حية معايشة'}</span>
              </div>
              <div>
                <span className="block text-[#1EC672] font-bold text-lg">Hands-On</span>
                <span>{language === 'en' ? 'Sensory Learning' : 'ممارسة تطبيقية'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part B: Introduction to Cultural Immersion (The 4 Pillars) */}
      <section 
        data-theme="light" 
        data-header-theme="light"
        className="py-16 md:py-24 max-w-7xl mx-auto px-6"
      >
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold tracking-widest text-[#1EC672] uppercase mb-3">
            {language === 'en' ? 'THE IMMERSION PHILOSOPHY' : 'فلسفة المعايشة الميدانية'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'Connecting Classroom to Culture' : 'ربط قاعة الدرس بنبض الثقافة'}
          </h2>
          <p className="text-base text-[#1F3423]/75 font-light leading-relaxed">
            {language === 'en'
              ? 'Our experiential curriculum is anchored around four interlocked dimensions that turn vocabulary into living memory.'
              : 'يرتكز منهجنا التطبيقي على أربعة أبعاد متكاملة تحول المفردات اللغوية إلى تجربة حية وذاكرة إنسانية راسخة.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPillars.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className="bg-white p-7 rounded-2xl border border-[#1F3423]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1F3423]/5 flex items-center justify-center text-[#1EC672] font-syne font-bold text-sm mb-5">
                  0{idx + 1}
                </div>
                <h3 className="font-syne font-bold text-xl text-[#1F3423] mb-3">
                  {language === 'en' ? pillar.titleEn : pillar.titleAr}
                </h3>
                <p className="text-sm text-[#1F3423]/75 font-light leading-relaxed">
                  {language === 'en' ? pillar.descEn : pillar.descAr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part C: Featured & Varied Experiences Layout */}
      <section 
        data-theme="light" 
        data-header-theme="light"
        className="py-12 max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1EC672] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'CURATED ITINERARIES' : 'مسارات وتجارب مقترحة'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-syne font-bold text-[#1F3423] tracking-tight">
              {language === 'en' ? 'Featured Cultural Journeys' : 'رحلات وتجارب مميزة'}
            </h2>
          </div>
          <p className="text-xs text-[#1F3423]/60 max-w-md font-light">
            {language === 'en'
              ? 'Click any experience to view its detailed breakdown, cultural highlights, and learning outcomes.'
              : 'اضغط على أي تجربة للاطلاع على تفاصيل المسار والمفردات والأنشطة المستهدفة.'}
          </p>
        </div>

        {/* 1. Prominent Featured Experience (Hero Banner Style) */}
        {featured && (
          <div className="mb-14 bg-white rounded-3xl border border-[#1F3423]/10 overflow-hidden shadow-lg transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px]">
                <img
                  src={featured.image}
                  alt={language === 'en' ? featured.title : featured.titleAr}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-5 left-5 rtl:left-auto rtl:right-5">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1F3423] text-white text-[11px] font-bold tracking-widest uppercase shadow-md">
                    {language === 'en' ? 'FEATURED DESTINATION' : 'وجهة رئيسية مميزة'}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#1F3423]/70 mb-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#1EC672]" />
                      {language === 'en' ? featured.location : featured.locationAr}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                      {language === 'en' ? featured.duration : featured.durationAr}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-syne font-bold text-[#1F3423] mb-4 leading-tight">
                    {language === 'en' ? featured.title : featured.titleAr}
                  </h3>

                  <p className="text-sm text-[#1F3423]/80 leading-relaxed font-light mb-6">
                    {language === 'en' ? featured.description : featured.descriptionAr}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F3423] mb-3">
                      {language === 'en' ? 'Key Highlights' : 'أبرز محطات التجربة'}
                    </h4>
                    <ul className="space-y-2">
                      {(language === 'en' ? featured.highlights : featured.highlightsAr).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#1F3423]/75 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectExperience(featured)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1F3423] text-white text-xs font-syne font-bold uppercase tracking-wider hover:bg-[#1EC672] hover:text-[#0C100E] transition-all cursor-pointer shadow-sm"
                >
                  <span>{language === 'en' ? 'Inspect Experience Details' : 'عرض تفاصيل التجربة'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Supporting Experiences: Alternating Image-and-Text Rows */}
        <div className="space-y-8">
          {supporting.map((exp, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div 
                key={exp.id}
                className="bg-white rounded-3xl border border-[#1F3423]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-5 h-64 lg:h-auto min-h-[260px] relative ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={exp.image}
                      alt={language === 'en' ? exp.title : exp.titleAr}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#1F3423] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                        {language === 'en' ? exp.tag : exp.tagAr}
                      </span>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[#1F3423]/60 mb-3 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#1EC672]" />
                          {language === 'en' ? exp.location : exp.locationAr}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                          {language === 'en' ? exp.duration : exp.durationAr}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-syne font-bold text-[#1F3423] mb-3">
                        {language === 'en' ? exp.title : exp.titleAr}
                      </h3>

                      <p className="text-sm text-[#1F3423]/80 leading-relaxed font-light mb-6">
                        {language === 'en' ? exp.description : exp.descriptionAr}
                      </p>

                      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {(language === 'en' ? exp.highlights : exp.highlightsAr).slice(0, 4).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#1F3423]/75">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672] mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1F3423]/10 flex justify-end">
                      <button
                        type="button"
                        onClick={() => onSelectExperience(exp)}
                        className="inline-flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-wider text-[#1F3423] hover:text-[#1EC672] transition-colors cursor-pointer"
                      >
                        <span>{language === 'en' ? 'View Itinerary & Booking' : 'تفاصيل المسار والحجز'}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Part D: Learning Connection */}
      <section 
        data-theme="light" 
        data-header-theme="light"
        className="py-16 md:py-24 max-w-7xl mx-auto px-6"
      >
        <div className="bg-[#1F3423]/5 rounded-3xl p-8 sm:p-12 md:p-16 border border-[#1F3423]/10">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-bold tracking-widest text-[#1EC672] uppercase mb-3">
              {language === 'en' ? 'PRACTICAL COMMUNICATIVE GAINS' : 'المكتسبات التواصلية العملية'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
              {language === 'en' ? 'What Learners Practise in the Field' : 'ما يمارسه المتعلم خلال التجارب'}
            </h2>
            <p className="text-sm sm:text-base text-[#1F3423]/80 font-light leading-relaxed">
              {language === 'en'
                ? 'Every outing is deliberately calibrated to scaffold active speaking in real-world environments with mentor coaching.'
                : 'تُصمم كل جولة بعناية لتحفيز الحديث التلقائي في مواقف حقيقية تحت إشراف وتوجيه المعلمين المتخصصين.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatLearnersPractice.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-[#1F3423]/10 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1F3423] text-[#1EC672] flex items-center justify-center mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-syne font-bold text-lg text-[#1F3423] mb-2 leading-snug">
                    {language === 'en' ? item.titleEn : item.titleAr}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F3423]/75 font-light leading-relaxed">
                    {language === 'en' ? item.descEn : item.descAr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part E: Prototype Disclaimer Note */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="p-6 rounded-2xl bg-[#EBE8E1] border border-[#1F3423]/15 text-xs text-[#1F3423]/80 leading-relaxed text-center sm:text-left rtl:sm:text-right">
          <span className="font-bold text-[#1F3423] block sm:inline mr-2 rtl:mr-0 rtl:ml-2">
            {language === 'en' ? 'Prototype Disclaimer:' : 'تنبيه النموذج التجريبي:'}
          </span>
          {language === 'en'
            ? 'The experiences shown on this prototype demonstrate the proposed direction of Ya Hala’s cultural learning model. Locations, schedules, activities, and availability are subject to confirmation.'
            : 'تعرض التجارب الواردة في هذا النموذج التوجه المقترح لمنهج التعلم الثقافي في يا هلا. تخضع المواقع والمواعيد والأنشطة ومدى التوفر للتأكيد النهائي.'}
        </div>
      </section>

      {/* Part F: Branded Final CTA */}
      <section 
        data-theme="dark" 
        data-header-theme="dark"
        className="max-w-7xl mx-auto px-6"
      >
        <div className="relative rounded-3xl bg-[#1F3423] text-white p-10 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("${ASSETS.footerTexture}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold tracking-tight mb-4 text-white leading-tight">
              {language === 'en' ? 'Begin Your Ya Hala Journey' : 'ابدأ رحلتك مع يا هلا'}
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
              {language === 'en'
                ? 'Combine immersive campus learning with real cultural outings across Saudi Arabia. Express your interest today.'
                : 'اجمع بين الدراسة في القاعات التفاعلية والجولات الميدانية التراثية في ربوع المملكة. سجّل اهتمامك اليوم.'}
            </p>
            <button
              type="button"
              onClick={() => onOpenApplication('in-person')}
              className="px-8 py-4 rounded-full bg-[#1EC672] text-[#0C100E] font-syne font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              <span>{language === 'en' ? 'Apply for In-Person Program' : 'تقديم طلب الانضمام للبرنامج الحضوري'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
