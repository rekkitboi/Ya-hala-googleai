import React, { useEffect, useRef, useState } from 'react';
import { LIFE_AT_YA_HALA_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface LifeAtYaHalaSectionProps {
  language: Language;
}

export const LifeAtYaHalaSection: React.FC<LifeAtYaHalaSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="life-at-yahala"
      data-theme="light"
      className="py-20 md:py-32 bg-[#F9F8F5] relative overflow-hidden"
    >
      {/* Connected background path */}
      <div className="absolute top-0 bottom-0 left-8 md:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-[#1F3423]/5 via-[#1EC672]/20 to-[#1F3423]/5 rtl:right-8 rtl:left-auto rtl:md:right-1/2 rtl:md:mr-[1px] rtl:md:ml-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border border-[#1F3423]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1F3423] uppercase tracking-widest font-syne font-bold text-[10px]">
              {language === 'en' ? LIFE_AT_YA_HALA_DATA.eyebrowEn : LIFE_AT_YA_HALA_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-6 leading-tight">
            {language === 'en' ? LIFE_AT_YA_HALA_DATA.headingEn : LIFE_AT_YA_HALA_DATA.headingAr}
          </h2>
          <p className="text-base md:text-lg text-[#1F3423]/80 leading-relaxed font-light">
            {language === 'en' ? LIFE_AT_YA_HALA_DATA.leadEn : LIFE_AT_YA_HALA_DATA.leadAr}
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {LIFE_AT_YA_HALA_DATA.activities.map((activity, index) => {
            const isEven = index % 2 === 0;
            const delay = index * 100;
            
            return (
              <div 
                key={activity.id}
                className={`relative transition-all duration-1000 ease-out flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Visual marker dot */}
                <div className="absolute left-8 md:left-1/2 -ml-[4px] md:-ml-[5px] top-4 md:top-1/2 md:-translate-y-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#1EC672] ring-4 ring-white z-10 rtl:right-8 rtl:left-auto rtl:md:right-1/2 rtl:md:-mr-[5px] rtl:md:ml-0" />
                
                {/* Content Side 1 */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 rtl:pr-16 rtl:md:pr-0 text-left rtl:text-right ${isEven ? 'md:order-1 md:text-right rtl:md:text-left' : 'md:order-2'}`}>
                  <span className="text-4xl md:text-5xl font-syne font-bold text-[#1F3423]/5 mb-2 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423] mb-3">
                    {language === 'en' ? activity.title : activity.titleAr}
                  </h3>
                  <p className="text-sm md:text-base text-[#1F3423]/70 font-light leading-relaxed">
                    {language === 'en' ? activity.description : activity.descriptionAr}
                  </p>
                </div>
                
                {/* Content Side 2 (Empty or subtle image placeholder) */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'order-2' : 'order-1'}`}>
                  <div className="w-full h-[1px] bg-[#1F3423]/5 relative">
                    <div className={`absolute top-1/2 -translate-y-1/2 w-16 h-[1px] bg-[#1EC672]/30 ${isEven ? 'left-0' : 'right-0'}`} />
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
