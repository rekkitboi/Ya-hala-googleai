import React, { useState, useEffect, useRef } from "react";
import { METHODOLOGY_STAGES } from "../data/yaHalaData";
import { Language } from "../types";
import { ASSETS } from "../data/yaHalaData";

interface MethodologySectionProps {
  language: Language;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ language }) => {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStepDetail = (step: string) => {
    switch (step) {
      case "01":
        return {
          en: "You start by decoding phonetics, everyday slang, and tonal greetings. Rather than dry grammar memorization, you internalize rhythmic dialect chunks through interactive audio labs.",
          ar: "تبدأ بفهم النبرات الصوتية والمفردات الدارجة والتحيات اليومية. بدلاً من حفظ القواعد الجافة، تكتسب التراكيب اللغوية الحية عبر تمارين الاستماع التفاعلية."
        };
      case "02":
        return {
          en: "Step into simulated Saudi social environments: ordering in a traditional Gahwa, bargaining in a date market, or exchanging congratulations at an invitation.",
          ar: "محاكاة مواقف اجتماعية سعودية واقعية: الطلب في المقهى الشعبي، الفصال في سوق التمور، أو تبادل التهاني والترحيب في المناسبات."
        };
      case "03":
        return {
          en: "Take your learning outside the classroom with faculty-guided trips to Diriyah, Al-Balad, camel heritage centers, and craft workshops across the Kingdom.",
          ar: "الانطلاق الميداني بصحبة أساتذة المعهد إلى حي الطريف، أسواق جدة القديمة، ميادين الإبل، ومشاغل الحرف التراثية."
        };
      default:
        return {
          en: "Join the alumni network, language exchange circles, and community dinners where language bridges become permanent personal and professional friendships.",
          ar: "الانضمام لمجتمع خريجي يا هلا، جلسات تبادل اللغات، وموائد العشاء الدورية التي تحوّل مهاراتك اللغوية إلى صداقات وفرص مهنية واعدة."
        };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="methodology"
      data-theme="light"
      data-header-theme="light"
      className="pt-16 pb-24 md:pt-20 md:pb-32 bg-[#F9F8F5] relative z-10"
    >
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none overflow-hidden rtl:left-0 rtl:right-auto">
        <img 
          src={ASSETS.experienceStone} 
          alt="" 
          className="w-full h-full object-cover object-left" 
          aria-hidden="true" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F5] to-transparent rtl:from-transparent rtl:to-[#F9F8F5]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === "en" ? "Our Methodology" : "منهجيتنا"}
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#1F3423]/10 z-0">
            <div 
              className={`absolute top-0 left-0 h-full bg-[#1EC672] transition-all duration-1000 ease-out rtl:right-0 rtl:left-auto ${isVisible ? "w-full" : "w-0"}`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {METHODOLOGY_STAGES.map((stage, index) => {
              const isActive = activeStep === stage.step;
              const isLast = index === METHODOLOGY_STAGES.length - 1;
              const animationDelay = index * 150;

              return (
                <div 
                  key={stage.step} 
                  className={`flex flex-col relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${animationDelay}ms` }}
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="methodology-explanation"
                    onClick={() => setActiveStep(stage.step)}
                    className="flex flex-row md:flex-col items-center md:text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-2xl w-full text-left rtl:text-right md:text-center rtl:md:text-center"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 mb-0 md:mb-5 transition-all duration-300 font-syne font-bold text-lg relative z-10 ${
                        isActive
                          ? "bg-[#1EC672] text-[#0C100E] scale-110 shadow-lg"
                          : "bg-[#F9F8F5] border border-[#1F3423]/20 text-[#1F3423]/50 group-hover:border-[#1EC672]/60"
                      }`}
                    >
                      {stage.step}
                    </div>

                    <div className="flex-1 md:flex-none pl-5 md:pl-0 rtl:pr-5 rtl:md:pr-0">
                      <h3 className={`text-lg font-syne font-bold mb-1 transition-colors ${isActive ? "text-[#1F3423]" : "text-[#1F3423]/60 group-hover:text-[#1F3423]/80"}`}>
                        {language === "en" ? stage.title : stage.titleAr}
                      </h3>
                      <p className={`text-[11px] uppercase tracking-wider font-medium transition-colors ${isActive ? "text-[#1EC672]" : "text-[#1F3423]/40"}`}>
                        {language === "en" ? stage.tagline : stage.taglineAr}
                      </p>
                    </div>
                  </button>

                  {!isLast && (
                    <div className={`md:hidden absolute top-14 left-7 rtl:left-auto rtl:right-7 w-[1px] h-[calc(100%-1.5rem)] bg-[#1F3423]/10 z-0 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div 
          id="methodology-explanation" 
          className={`mt-12 md:mt-20 max-w-4xl mx-auto relative transition-all duration-700 delay-500 min-h-[160px] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="absolute -top-12 md:-top-20 -left-4 md:-left-12 text-[120px] md:text-[200px] font-syne font-bold text-[#1F3423]/[0.03] pointer-events-none select-none z-0 rtl:-right-4 rtl:-left-auto rtl:md:-right-12 leading-none">
            {activeStep}
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <div className="border-b md:border-b-0 md:border-r border-[#1F3423]/10 rtl:md:border-l rtl:md:border-r-0 pb-4 md:pb-0 md:pr-8 rtl:md:pl-8">
              <h4 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423] leading-tight">
                {language === "en"
                  ? METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.title
                  : METHODOLOGY_STAGES.find((s) => s.step === activeStep)?.titleAr}
              </h4>
            </div>
            <div>
              <p className="text-base md:text-lg text-[#1F3423]/80 leading-relaxed font-light">
                {language === "en" ? getStepDetail(activeStep).en : getStepDetail(activeStep).ar}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
