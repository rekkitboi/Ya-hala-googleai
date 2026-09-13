import React, { useState } from 'react';
import { METHODOLOGY_STAGES, ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { BookOpen, MessageSquare, Compass, HeartHandshake, CheckCircle, Sparkles } from 'lucide-react';

interface MethodologySectionProps {
  language: Language;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ language }) => {
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <BookOpen className="w-5 h-5 text-[#1F3423]" />;
      case '02':
        return <MessageSquare className="w-5 h-5 text-[#1F3423]" />;
      case '03':
        return <Compass className="w-5 h-5 text-[#1F3423]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#1F3423]" />;
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
      className="py-24 md:py-32 relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Unified Methodology Module with Integrated Header */}
        <div className="glass-neutral-frosted rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/40">
          {/* Section Heading Integrated Directly at Top of Module */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/10 backdrop-blur-md border border-[#1F3423]/15 text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
              <span>{language === 'en' ? 'HOW YA HALA WORKS' : 'كيف نعمل في يا هلا'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
              {language === 'en' ? 'Our 4-Stage Methodology' : 'منهجية المراحل الأربع'}
            </h2>
            <p className="text-sm md:text-base text-[#1F3423]/85 font-medium leading-relaxed">
              {language === 'en'
                ? 'A proven, immersive approach connecting classroom instruction with genuine Saudi cultural life.'
                : 'نهج تعليمي مُجرَّب ينقل المتعلم بانسيابية من قاعة التدريب إلى معايشة الثقافة السعودية في الواقع.'}
            </p>
          </div>

        {/* 4 Stages Grid with Warm Light Glass Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {METHODOLOGY_STAGES.map((stage) => {
            const isActive = activeStep === stage.step;
            return (
              <div
                key={stage.step}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => setActiveStep(stage.step)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(stage.step);
                  }
                }}
                className={`text-center p-7 rounded-2xl cursor-pointer transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                  isActive
                    ? 'glass-warm-light shadow-xl -translate-y-1.5 border-2 border-[#1EC672]'
                    : 'glass-warm-card border border-[#1F3423]/12 hover:border-[#1F3423]/30 hover:shadow-md'
                }`}
              >
                {/* Number Badge */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 font-syne font-extrabold text-lg shadow-sm transition-colors ${
                    isActive ? 'bg-[#1EC672] text-[#0C100E]' : 'bg-[#1F3423]/10 text-[#1F3423]'
                  }`}
                >
                  {stage.step}
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#1F3423]/85 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
                  <span>{language === 'en' ? stage.tagline : stage.taglineAr}</span>
                </div>

                <h3 className="text-xl font-syne font-bold mb-2.5 text-[#1F3423]">
                  {language === 'en' ? stage.title : stage.titleAr}
                </h3>

                <p className="text-xs sm:text-sm text-[#1F3423]/75 leading-relaxed font-light mb-5">
                  {language === 'en' ? stage.description : stage.descriptionAr}
                </p>

                {/* Stage inspection footer with high-contrast icon */}
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#1F3423] pt-3 border-t border-[#1F3423]/10">
                  {getStepIcon(stage.step)}
                  <span>
                    {isActive
                      ? (language === 'en' ? 'Selected Stage' : 'المرحلة المختارة')
                      : (language === 'en' ? 'Click to inspect' : 'انقر للتفاصيل')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Active Stage Deep Dive Panel */}
        <div className="glass-warm-light rounded-2xl p-7 md:p-9 border border-[#1F3423]/15 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1F3423] text-[#1EC672] flex items-center justify-center text-2xl font-syne font-bold shrink-0 shadow-sm">
            {activeStep}
          </div>
          <div className="flex-1 text-center md:text-left rtl:md:text-right">
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-start gap-2.5 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1F3423]">
                {language === 'en' ? 'STAGE DEEP-DIVE' : 'نظرة تفصيلية على المرحلة'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
              <span className="text-xs text-[#1F3423]/70 font-medium">
                {METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.tagline}
              </span>
            </div>
            <h4 className="text-xl font-syne font-bold text-[#1F3423] mb-2.5">
              {language === 'en'
                ? `Stage ${activeStep}: ${METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.title}`
                : `المرحلة ${activeStep}: ${METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.titleAr}`}
            </h4>
            <p className="text-sm md:text-base text-[#1F3423]/85 leading-relaxed font-light">
              {language === 'en' ? getStepDetail(activeStep).en : getStepDetail(activeStep).ar}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[#1EC672] bg-[#1F3423] px-4 py-2 rounded-full shadow-sm">
            <CheckCircle className="w-4 h-4 text-[#1EC672]" />
            <span>{language === 'en' ? 'Interactive Focus' : 'تركيز تطبيقي'}</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
