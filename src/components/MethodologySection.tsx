import React, { useState } from 'react';
import { METHODOLOGY_STAGES, ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { BookOpen, MessageSquare, Compass, HeartHandshake, CheckCircle } from 'lucide-react';

interface MethodologySectionProps {
  language: Language;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ language }) => {
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <BookOpen className="w-6 h-6 text-[#1F3423]" />;
      case '02':
        return <MessageSquare className="w-6 h-6 text-[#1F3423]" />;
      case '03':
        return <Compass className="w-6 h-6 text-[#1F3423]" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-[#1F3423]" />;
    }
  };

  const getStepDetail = (step: string) => {
    switch (step) {
      case '01':
        return {
          en: 'You start by decoding phonetics, everyday slang, and tonal greetings. Rather than dry grammar memorization, you internalize rhythmic dialect chunks through interactive audio labs.',
          ar: 'تبدأ بفهم النبرات الصوتية والمفردات الدارجة والتحيات اليومية. بدلاً من حفظ القواعد الجافة، تكتسب التراكيب اللغوية الحية عبر تمارين الاستماع التفاعلية.'
        };
      case '02':
        return {
          en: 'Step into simulated Saudi social environments: ordering in a traditional Gahwa, bargaining in a date market, or exchanging congratulations at an invitation.',
          ar: 'محاكاة مواقف اجتماعية سعودية واقعية: الطلب في المقهى الشعبي، الفصال في سوق التمور، أو تبادل التهاني والترحيب في المناسبات.'
        };
      case '03':
        return {
          en: 'Take your learning outside the classroom with faculty-guided trips to Diriyah, Al-Balad, camel heritage centers, and craft workshops across the Kingdom.',
          ar: 'الانطلاق الميداني بصحبة أساتذة المعهد إلى حي الطريف، أسواق جدة القديمة، ميادين الإبل، ومشاغل الحرف التراثية.'
        };
      default:
        return {
          en: 'Join the alumni network, language exchange circles, and community dinners where language bridges become permanent personal and professional friendships.',
          ar: 'الانضمام لمجتمع خريجي يا هلا، جلسات تبادل اللغات، وموائد العشاء الدورية التي تحوّل مهاراتك اللغوية إلى صداقات وفرص مهنية واعدة.'
        };
    }
  };

  return (
    <section
      id="methodology"
      data-theme="light"
      data-header-theme="light"
      className="pt-28 pb-24 relative overflow-hidden bg-[#F9F8F5]"
    >
      {/* Pattern texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("${ASSETS.patternTexture}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-[#1F3423] uppercase tracking-widest font-semibold text-xs md:text-sm mb-4">
            {language === 'en' ? 'HOW YA HALA WORKS' : 'كيف نعمل في يا هلا'}
          </h4>
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'Our 4-Stage Methodology' : 'منهجية المراحل الأربع'}
          </h2>
          <p className="text-base text-gray-600 font-light">
            {language === 'en'
              ? 'A proven, immersive approach connecting classroom instruction with genuine Saudi cultural life.'
              : 'نهج تعليمي مُجرَّب ينقل المتعلم بانسيابية من قاعة التدريب إلى معايشة الثقافة السعودية في الواقع.'}
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {METHODOLOGY_STAGES.map((stage) => {
            const isActive = activeStep === stage.step;
            return (
              <div
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`text-center p-8 rounded-3xl cursor-pointer transition-all duration-300 relative ${
                  isActive
                    ? 'bg-white shadow-xl -translate-y-2 border-2 border-[#1EC672]'
                    : 'bg-white/60 hover:bg-white border border-gray-100 hover:shadow-md'
                }`}
              >
                {/* Number Badge */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-syne font-extrabold text-xl shadow-sm transition-colors ${
                    isActive ? 'bg-[#1EC672] text-[#1F3423]' : 'bg-[#F9F8F5] text-[#1F3423]'
                  }`}
                >
                  {stage.step}
                </div>

                <div className="text-xs uppercase tracking-wider font-semibold text-[#1EC672] mb-1">
                  {language === 'en' ? stage.tagline : stage.taglineAr}
                </div>

                <h3 className="text-xl font-syne font-bold mb-3 text-[#1F3423]">
                  {language === 'en' ? stage.title : stage.titleAr}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  {language === 'en' ? stage.description : stage.descriptionAr}
                </p>

                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1F3423]">
                  {getStepIcon(stage.step)}
                  <span>{isActive ? (language === 'en' ? 'Selected Stage' : 'المرحلة المختارة') : (language === 'en' ? 'Click to inspect' : 'انقر للتفاصيل')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Active Stage Deep Dive */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1F3423] text-[#1EC672] flex items-center justify-center text-2xl font-syne font-bold shrink-0">
            {activeStep}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1EC672]">
                {language === 'en' ? 'STAGE DEEP-DIVE' : 'نظرة تفصيلية على المرحلة'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F3423]" />
              <span className="text-xs text-gray-500 font-medium">
                {METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.tagline}
              </span>
            </div>
            <h4 className="text-xl font-syne font-bold text-[#1F3423] mb-3">
              {language === 'en'
                ? `Stage ${activeStep}: ${METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.title}`
                : `المرحلة ${activeStep}: ${METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.titleAr}`}
            </h4>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {language === 'en' ? getStepDetail(activeStep).en : getStepDetail(activeStep).ar}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[#1EC672] bg-[#1F3423] px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4" />
            <span>{language === 'en' ? 'Interactive Focus' : 'تركيز تطبيقي'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
