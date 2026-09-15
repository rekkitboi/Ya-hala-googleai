import React, { useEffect, useRef, useState } from 'react';
import { CURRICULUM_LEVELS_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { CheckCircle2, Layers, ChevronDown } from 'lucide-react';
import { ASSETS } from '../../data/yaHalaData';

interface ProgramLevelsSectionProps {
  language: Language;
}

export const ProgramLevelsSection: React.FC<ProgramLevelsSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleLevels, setVisibleLevels] = useState<string[]>([]);
  const [expandedOutcomes, setExpandedOutcomes] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-level-id');
            if (id && !visibleLevels.includes(id)) {
              setVisibleLevels((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.level-chapter');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleLevels]);

  const toggleOutcomes = (id: string) => {
    setExpandedOutcomes(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <section
      ref={sectionRef}
      id="program-levels"
      data-theme="light"
      className="py-20 md:py-32 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-24 md:mb-32 mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-[#1EC672]" />
            <span className="text-[#1F3423]/70 uppercase tracking-[0.2em] font-syne font-semibold text-[11px]">
              {language === 'en' ? 'CURRICULUM FRAMEWORK' : 'الإطار المنهجي المعتمد'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-6">
            {language === 'en' ? 'Four Progressive Program Levels' : 'أربعة مستويات تعليمية متدرجة'}
          </h2>
          <p className="text-base sm:text-lg text-[#1F3423]/80 leading-relaxed font-light">
            {language === 'en'
              ? 'Aligned with the Common European Framework of Reference for Languages (CEFR), guiding you methodically from basic everyday expressions to confident, fluent communication.'
              : 'متوافقة مع الإطار الأوروبي المرجعي المشترك للغات (CEFR)، تأخذ بيدك منهجياً من التعبيرات اليومية البسيطة إلى الطلاقة والاستقلالية الكاملة.'}
          </p>
        </div>

        <div className="relative">
          {/* Central connecting path (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-transparent via-[#1F3423]/10 to-transparent" />
          
          <div className="flex flex-col gap-16 md:gap-32 relative">
            {CURRICULUM_LEVELS_DATA.map((lvl, index) => {
              const isVisible = visibleLevels.includes(lvl.id);
              const isEven = index % 2 !== 0;
              const isExpanded = expandedOutcomes.includes(lvl.id);

              return (
                <div
                  key={lvl.id}
                  data-level-id={lvl.id}
                  className={`level-chapter relative transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Visual / Marker Side */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center`}>
                      <div className="relative inline-block mb-4 md:mb-6">
                        <span className="text-[120px] md:text-[160px] font-syne font-bold text-[#1F3423]/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                          {lvl.cefr}
                        </span>
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#1F3423]/10 bg-white shadow-sm flex flex-col items-center justify-center relative z-10">
                          <span className="text-2xl md:text-4xl font-syne font-bold text-[#1F3423]">
                            {lvl.cefr}
                          </span>
                        </div>
                        {/* Connecting dot for desktop line */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1EC672] z-20 ${
                          isEven ? '-left-8 rtl:left-auto rtl:-right-8' : '-right-8 rtl:right-auto rtl:-left-8'
                        }`} />
                        {/* Connecting line to center path */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-[#1EC672]/30 z-10 ${
                          isEven ? 'left-[-4rem] w-[4rem] rtl:left-auto rtl:right-[-4rem]' : 'right-[-4rem] w-[4rem] rtl:right-auto rtl:left-[-4rem]'
                        }`} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-syne font-bold text-[#1F3423] mb-2 leading-tight relative z-10">
                        {language === 'en' ? lvl.title : lvl.titleAr}
                      </h3>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-[#1EC672] relative z-10">
                        {language === 'en' ? lvl.focus : lvl.focusAr}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-[#1F3423]/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                      <p className="text-base text-[#1F3423]/80 leading-relaxed font-light mb-6 md:mb-8 text-center md:text-left rtl:md:text-right">
                        {language === 'en' ? lvl.description : lvl.descriptionAr}
                      </p>
                      
                      {/* Mobile expand toggle */}
                      <button 
                        className="md:hidden w-full flex items-center justify-center gap-2 py-3 border-t border-[#1F3423]/5 text-[#1F3423] font-syne font-bold text-xs uppercase cursor-pointer"
                        onClick={() => toggleOutcomes(lvl.id)}
                      >
                        {language === 'en' ? 'Key Outcomes' : 'المخرجات الأساسية'}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Outcomes List */}
                      <div className={`md:block overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 md:max-h-96 opacity-0 md:opacity-100 md:mt-0'}`}>
                        <div className="hidden md:block w-8 h-[1px] bg-[#1EC672] mb-6 rtl:ml-auto" />
                        <ul className="space-y-3">
                          {(language === 'en' ? lvl.milestones : lvl.milestonesAr).map((milestone, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-left rtl:text-right">
                              <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-1" />
                              <span className="text-sm text-[#1F3423]/80 leading-relaxed font-medium">
                                {milestone}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                  
                  {/* Vertical connector line on mobile */}
                  {index < CURRICULUM_LEVELS_DATA.length - 1 && (
                    <div className="md:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#1F3423]/10 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
