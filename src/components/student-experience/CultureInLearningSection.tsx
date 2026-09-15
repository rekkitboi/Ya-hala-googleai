import React, { useEffect, useRef, useState } from 'react';
import { CULTURAL_LEARNING_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface CultureInLearningSectionProps {
  language: Language;
}

export const CultureInLearningSection: React.FC<CultureInLearningSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Group topics into three themes
  const groupedThemes = [
    {
      id: 'social',
      title: 'Social Life and Hospitality',
      titleAr: 'الحياة الاجتماعية وكرم الضيافة',
      items: CULTURAL_LEARNING_DATA.topics.filter(t => ['majlis', 'coffee', 'social-customs'].includes(t.id))
    },
    {
      id: 'places',
      title: 'Places and Occasions',
      titleAr: 'المعالم والمناسبات',
      items: CULTURAL_LEARNING_DATA.topics.filter(t => ['occasions', 'markets', 'regions'].includes(t.id))
    },
    {
      id: 'context',
      title: 'Language in Context',
      titleAr: 'اللغة في سياقها العملي',
      items: CULTURAL_LEARNING_DATA.topics.filter(t => ['workplace', 'proverbs'].includes(t.id))
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="cultural-learning"
      data-theme="light"
      className="py-16 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-0">
          {/* Large Photograph */}
          <div className="w-full md:w-[45%] lg:w-[45%] h-[50vh] md:h-[85vh] relative z-0 shrink-0 overflow-hidden rtl:order-2">
            <div 
              className={`w-full h-full transform origin-left rtl:origin-right transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            >
              <img
                src={ASSETS.curriculumCulture}
                alt={language === 'en' ? CULTURAL_LEARNING_DATA.titleEn : CULTURAL_LEARNING_DATA.titleAr}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Reading Panel */}
          <div 
            className={`w-full md:w-[55%] lg:w-[55%] bg-[#F9F8F5] p-8 md:p-14 lg:p-20 relative z-10 -mt-16 md:mt-0 md:-ml-16 rtl:md:ml-0 rtl:md:-mr-16 rtl:order-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="mb-10 text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
                <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
                  {language === 'en' ? CULTURAL_LEARNING_DATA.eyebrowEn : CULTURAL_LEARNING_DATA.eyebrowAr}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-5 leading-tight">
                {language === 'en' ? CULTURAL_LEARNING_DATA.titleEn : CULTURAL_LEARNING_DATA.titleAr}
              </h2>
              <p className="text-sm md:text-base text-[#1F3423]/80 leading-relaxed font-light">
                {language === 'en' ? CULTURAL_LEARNING_DATA.leadEn : CULTURAL_LEARNING_DATA.leadAr}
              </p>
            </div>

            <div className="space-y-10">
              {groupedThemes.map((theme, index) => (
                <div key={theme.id} className="text-left rtl:text-right">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-syne font-bold text-[#1F3423]/20">0{index + 1}</span>
                    <h3 className="text-lg md:text-xl font-syne font-bold text-[#1F3423] border-b border-[#1EC672]/30 pb-1 inline-block">
                      {language === 'en' ? theme.title : theme.titleAr}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4 pt-2">
                    {theme.items.map((topic) => (
                      <li key={topic.id} className="pb-4 border-b border-[#1F3423]/5 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]/50 mt-2 shrink-0" />
                          <div>
                            <h4 className="text-sm font-syne font-bold text-[#1F3423] mb-1">
                              {language === 'en' ? topic.title : topic.titleAr}
                            </h4>
                            <p className="text-xs text-[#1F3423]/70 font-light leading-relaxed">
                              {language === 'en' ? topic.description : topic.descriptionAr}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
