import React, { useState, useEffect, useRef } from 'react';
import { PROGRAMS, ASSETS } from '../data/yaHalaData';
import { Program, Language } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface ProgramsSectionProps {
  language: Language;
  onSelectProgram: (program: Program) => void;
  onApplyProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  language,
  onSelectProgram,
  onApplyProgram,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollToCompare = () => {
    if (listRef.current) {
      const headerOffset = 100;
      const elementPosition = listRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="programs"
      data-theme="light"
      data-header-theme="light"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* A. Hero Composition - Image & Panel */}
        <div className="relative mb-20 md:mb-32 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div 
            className={`w-full md:w-[65%] lg:w-[65%] h-[400px] md:h-[550px] overflow-hidden relative shadow-2xl transition-all duration-1000 ease-out rtl:order-2 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 rtl:translate-x-12'
            }`}
          >
            <img 
              src={ASSETS.programsHero} 
              alt="Ya Hala Programs" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div 
            className={`w-full md:w-[45%] lg:w-[45%] bg-[#F9F8F5] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.1)] -mt-16 md:mt-0 relative z-10 transition-all duration-1000 delay-200 ease-out md:-ml-24 rtl:md:ml-0 rtl:md:-mr-24 rtl:order-1 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 rtl:-translate-x-12'
            }`}
          >
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#1EC672] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
              <span>{language === 'en' ? 'OUR PROGRAMS' : 'مسارات التعلم'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-[#1F3423] leading-tight mb-6">
              {language === 'en' ? 'Choose Your Learning Path' : 'اختر مسارك التعليمي'}
            </h2>
            <p className="text-base md:text-lg text-[#1F3423]/80 leading-relaxed font-light mb-10">
              {language === 'en'
                ? 'Flexible, cohort-based and personalized tracks designed for diplomats, professionals, and language enthusiasts.'
                : 'مسارات متنوعة حضورية وافتراضية وخاصة تلائم الدبلوماسيين والتنفيذيين والباحثين وعشاق اللغة العربية.'}
            </p>
            <button
              onClick={scrollToCompare}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#1F3423] text-white rounded-full hover:bg-[#1EC672] hover:text-[#0C100E] transition-all duration-300 font-syne font-bold text-[11px] uppercase tracking-wider cursor-pointer"
            >
              <span>{language === 'en' ? 'Explore Programs' : 'استكشف البرامج'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
            </button>
          </div>
        </div>

        {/* B. Compact Program Comparison */}
        <div className="max-w-5xl mx-auto" ref={listRef} id="compare-programs">
          <div className="mb-8 md:mb-12 text-center md:text-left rtl:md:text-right">
            <h3 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423]">
              {language === 'en' ? 'Compare Learning Options' : 'قارن بين مسارات التعلم'}
            </h3>
          </div>
          
          <div className="border-t border-[#1F3423]/10">
            {PROGRAMS.map((program) => {
              const isExpanded = expandedId === program.id;
              
              return (
                <div key={program.id} className="border-b border-[#1F3423]/10">
                  <div className="flex flex-col md:flex-row md:items-center py-6 md:py-8 gap-4 md:gap-6 group">
                    <button 
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`program-details-${program.id}`}
                      className="w-full md:w-3/4 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-left rtl:text-right cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-lg"
                      onClick={() => toggleExpand(program.id)}
                    >
                      <div className="w-full md:w-2/5">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#1EC672] mb-2">
                          <span>{language === 'en' ? program.category : program.categoryAr}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                          {language === 'en' ? program.title : program.titleAr}
                        </h3>
                      </div>
                      
                      <div className="w-full md:w-3/5 flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-[#1F3423]/70 font-light truncate">
                        <span className="truncate"><strong className="font-medium text-[#1F3423]">{language === 'en' ? 'Duration: ' : 'المدة: '}</strong>{language === 'en' ? program.duration : program.durationAr}</span>
                        <span className="hidden lg:inline text-[#1F3423]/20">|</span>
                        <span className="truncate"><strong className="font-medium text-[#1F3423]">{language === 'en' ? 'Format: ' : 'النمط: '}</strong>{language === 'en' ? program.format : program.formatAr}</span>
                      </div>
                    </button>

                    <div className="w-full md:w-1/4 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                      <button
                        type="button"
                        onClick={() => toggleExpand(program.id)}
                        className="flex items-center gap-2 text-xs font-semibold text-[#1F3423] uppercase tracking-wider cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-md"
                        aria-expanded={isExpanded}
                        aria-controls={`program-details-${program.id}`}
                        aria-label={language === 'en' ? 'Toggle details' : 'إظهار التفاصيل'}
                      >
                        <span className="hidden md:inline">{language === 'en' ? 'View details' : 'إظهار التفاصيل'}</span>
                        <span className="md:hidden">{language === 'en' ? 'Details' : 'تفاصيل'}</span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 transform rotate-180 transition-transform" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform" />
                        )}
                      </button>
                      
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onApplyProgram(program.id);
                        }}
                        className="px-6 py-2.5 rounded-full border-2 border-[#1F3423] text-[#1F3423] text-[11px] font-bold uppercase tracking-wider hover:bg-[#1EC672] hover:border-[#1EC672] hover:text-[#0C100E] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                      >
                        {language === 'en' ? 'Apply' : 'تقديم'}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div id={`program-details-${program.id}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-4 md:pt-0">
                      <p className="text-base text-[#1F3423]/80 leading-relaxed font-light md:w-2/3">
                        {language === 'en' ? program.description : program.descriptionAr}
                      </p>
                      <div className="md:w-1/3 flex items-start">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProgram(program);
                          }}
                          className="group inline-flex items-center gap-2 text-[#1EC672] hover:text-[#1F3423] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-md p-1"
                        >
                          <span>{language === 'en' ? 'Full Program Outline' : 'تفاصيل المنهج كاملة'}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
