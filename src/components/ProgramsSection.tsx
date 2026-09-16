import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('programs-reveal');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="programs"
      data-theme="light"
      data-header-theme="light"
      className="py-16 md:py-24 bg-white relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* A. Photography-led Introduction */}
        <div id="programs-reveal" className="relative mb-20 md:mb-28">
          <div 
            className={`relative h-[60vh] min-h-[400px] w-full md:w-[75%] lg:w-[65%] mr-auto overflow-hidden transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 rtl:translate-x-12'
            }`}
          >
            <img 
              src={ASSETS.bujairiHero} 
              alt="Ya Hala Programs" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div 
            className={`md:absolute top-1/2 md:-translate-y-1/2 right-0 md:right-[5%] lg:right-[15%] w-full md:w-[45%] lg:w-[40%] bg-[#F9F8F5] p-8 md:p-12 shadow-lg -mt-12 md:mt-0 relative z-10 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 rtl:-translate-x-12'
            }`}
          >
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#1EC672] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
              <span>{language === 'en' ? 'OUR PROGRAMS' : 'برامجنا التعليمية'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-[#1F3423] leading-tight mb-6">
              {language === 'en' ? 'Choose Your Learning Path' : 'اختر مسارك التعليمي'}
            </h2>
            <p className="text-sm md:text-base text-[#1F3423]/80 leading-relaxed font-light mb-8">
              {language === 'en'
                ? 'Flexible, cohort-based and personalized tracks designed for diplomats, professionals, and language enthusiasts.'
                : 'مسارات متنوعة حضورية وافتراضية وخاصة تلائم الدبلوماسيين والتنفيذيين والباحثين وعشاق اللغة العربية.'}
            </p>
            <button
              onClick={() => onApplyProgram('')}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-[#1F3423] text-white rounded-full hover:bg-[#1EC672] hover:text-[#0C100E] transition-all duration-300 font-syne font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>{language === 'en' ? 'Explore Programs' : 'استكشف البرامج'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
            </button>
          </div>
        </div>

        {/* B. Compact Program Comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-[#1F3423]/10">
            {PROGRAMS.map((program) => {
              const isExpanded = expandedId === program.id;
              
              return (
                <div key={program.id} className="border-b border-[#1F3423]/10">
                  {/* Row Header - Semantic button */}
                  <div className="flex flex-col md:flex-row md:items-center py-6 md:py-8 gap-4 md:gap-8 group">
                    <button 
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`program-details-${program.id}`}
                      className="w-full md:w-2/3 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-left rtl:text-right cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-lg"
                      onClick={() => toggleExpand(program.id)}
                    >
                      <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#1EC672] mb-2">
                          <span>{language === 'en' ? program.category : program.categoryAr}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                          {language === 'en' ? program.title : program.titleAr}
                        </h3>
                      </div>
                      
                      <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-[#1F3423]/70 font-light">
                        <span><strong className="font-medium text-[#1F3423]">{language === 'en' ? 'Duration: ' : 'المدة: '}</strong>{language === 'en' ? program.duration : program.durationAr}</span>
                        <span className="hidden lg:inline text-[#1F3423]/20">|</span>
                        <span><strong className="font-medium text-[#1F3423]">{language === 'en' ? 'Format: ' : 'النمط: '}</strong>{language === 'en' ? program.format : program.formatAr}</span>
                      </div>
                    </button>

                    <div className="w-full md:w-1/3 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                      <button
                        type="button"
                        onClick={() => toggleExpand(program.id)}
                        className="flex items-center gap-2 text-xs font-semibold text-[#1F3423] uppercase tracking-wider cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-md"
                        aria-expanded={isExpanded}
                        aria-controls={`program-details-${program.id}`}
                        aria-label={language === 'en' ? 'Toggle details' : 'إظهار التفاصيل'}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 transform rotate-180 transition-transform" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform" />
                        )}
                        <span className="md:hidden">{language === 'en' ? 'Details' : 'تفاصيل'}</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onApplyProgram(program.id);
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#F9F8F5] text-[#1F3423] text-[11px] font-bold uppercase tracking-wider hover:bg-[#1EC672] hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                      >
                        {language === 'en' ? 'Apply' : 'تقديم'}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div id={`program-details-${program.id}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-4 md:pt-0">
                      <p className="text-sm md:text-base text-[#1F3423]/80 leading-relaxed font-light md:w-2/3">
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
                          <span>{language === 'en' ? 'View Program Details' : 'عرض تفاصيل البرنامج'}</span>
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
