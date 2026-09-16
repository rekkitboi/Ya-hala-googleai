import React, { useState } from 'react';
import { METHODOLOGY_STAGES } from '../data/yaHalaData';
import { Language } from '../types';

interface MethodologySectionProps {
  language: Language;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ language }) => {
  const [activeStep, setActiveStep] = useState<string>('01');

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
      className="py-24 md:py-32 bg-[#F9F8F5] relative overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'Our 4-Stage Methodology' : 'منهجية المراحل الأربع'}
          </h2>
          <p className="text-base text-[#1F3423]/70 font-light leading-relaxed">
            {language === 'en'
              ? 'A proven, immersive approach connecting classroom instruction with genuine Saudi cultural life.'
              : 'نهج تعليمي مُجرَّب ينقل المتعلم بانسيابية من قاعة التدريب إلى معايشة الثقافة السعودية في الواقع.'}
          </p>
        </div>

        {/* Cleaner connected progression */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#1F3423]/10 z-0">
            <div 
              className="absolute top-0 left-0 h-full bg-[#1EC672] transition-all duration-500 ease-out rtl:right-0 rtl:left-auto"
              style={{ width: `${(parseInt(activeStep) - 1) * 33.33}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {METHODOLOGY_STAGES.map((stage, index) => {
              const isActive = activeStep === stage.step;
              const isLast = index === METHODOLOGY_STAGES.length - 1;
              return (
                <div key={stage.step} className="flex flex-col relative group">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="methodology-explanation"
                    onClick={() => setActiveStep(stage.step)}
                    className="flex flex-row md:flex-col items-center md:text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-2xl w-full text-left rtl:text-right md:text-center rtl:md:text-center"
                  >
                    {/* Step Marker */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 mb-0 md:mb-6 transition-all duration-300 font-syne font-bold text-lg relative z-10 ${
                        isActive
                          ? 'bg-[#1EC672] text-[#0C100E] scale-110 shadow-lg'
                          : 'bg-white border border-[#1F3423]/10 text-[#1F3423]/60 group-hover:border-[#1EC672]/50'
                      }`}
                    >
                      {stage.step}
                    </div>

                    {/* Title & Tagline */}
                    <div className="flex-1 md:flex-none pl-4 md:pl-0 rtl:pr-4 rtl:md:pr-0">
                      <h3 className={`text-lg font-syne font-bold mb-1 transition-colors ${isActive ? 'text-[#1F3423]' : 'text-[#1F3423]/60 group-hover:text-[#1F3423]/80'}`}>
                        {language === 'en' ? stage.title : stage.titleAr}
                      </h3>
                      <p className={`text-xs uppercase tracking-wider font-medium transition-colors ${isActive ? 'text-[#1EC672]' : 'text-[#1F3423]/40'}`}>
                        {language === 'en' ? stage.tagline : stage.taglineAr}
                      </p>
                    </div>
                  </button>
                  {/* Vertical line on mobile connecting to next item */}
                  {!isLast && (
                    <div className="md:hidden absolute top-14 left-7 rtl:left-auto rtl:right-7 w-[1px] h-[calc(100%-1rem)] bg-[#1F3423]/10 z-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Focused Explanation */}
        <div id="methodology-explanation" className="mt-16 md:mt-24 max-w-3xl mx-auto text-center transition-all duration-500 min-h-[120px]">
          <h4 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423] mb-4">
            {language === 'en'
              ? METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.title
              : METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.titleAr}
          </h4>
          <p className="text-base md:text-lg text-[#1F3423]/80 leading-relaxed font-light">
            {language === 'en' ? getStepDetail(activeStep).en : getStepDetail(activeStep).ar}
          </p>
        </div>
      </div>
    </section>
  );
};
