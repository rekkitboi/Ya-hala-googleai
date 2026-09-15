import React, { useEffect, useRef, useState } from 'react';
import { ABOUT_PURPOSE_DATA } from '../../data/yaHalaData';
import { Language } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface OurPurposeSectionProps {
  language: Language;
}

export const OurPurposeSection: React.FC<OurPurposeSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id && !visibleSections.includes(id)) {
              setVisibleSections((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.purpose-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <section
      ref={sectionRef}
      id="purpose"
      data-theme="light"
      className="py-24 md:py-36 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block rtl:left-0 rtl:right-auto">
        <img
          src={ASSETS.oasisStoneTerrace}
          alt=""
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F9F8F5]/80 to-[#F9F8F5] rtl:bg-gradient-to-r" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1F3423]/70 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'OUR PURPOSE & FOUNDATIONS' : 'مرتكزاتنا وغايتنا المؤسسية'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'The Foundations of Ya Hala' : 'الأسس التي يقوم عليها معهد يا هلا'}
          </h2>
          <p className="text-base sm:text-lg text-[#1F3423]/75 leading-relaxed font-light">
            {language === 'en'
              ? 'Rooted in Saudi cultural authenticity, educational excellence, and human connection.'
              : 'راسخة في أصالة الثقافة السعودية والتميز التعليمي والتواصل الإنساني العميق.'}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {ABOUT_PURPOSE_DATA.map((section, index) => {
            const isVisible = visibleSections.includes(section.id);
            const isEven = index % 2 !== 0;

            return (
              <div
                key={section.id}
                data-section-id={section.id}
                className={`purpose-item relative transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-start`}>
                  
                  <div className="w-full md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl md:text-6xl font-syne font-bold text-[#1F3423]/10">
                        {section.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-syne font-bold text-[#1F3423]">
                        {language === 'en' ? section.eyebrow : section.eyebrowAr}
                      </h3>
                    </div>
                    <div className="w-12 h-[1px] bg-[#1EC672] mb-6" />
                  </div>

                  <div className="w-full md:w-2/3">
                    <h4 className="text-2xl md:text-3xl font-syne font-bold text-[#1F3423] leading-snug mb-6">
                      {language === 'en' ? section.title : section.titleAr}
                    </h4>
                    <p className="text-base md:text-lg text-[#1F3423]/80 leading-relaxed font-light mb-8">
                      {language === 'en' ? section.summary : section.summaryAr}
                    </p>
                    
                    {section.points && section.points.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-[#1F3423]/10">
                        {section.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672] shrink-0 mt-2" />
                            <span className="text-sm text-[#1F3423]/75 leading-relaxed font-medium">
                              {language === 'en' ? pt.en : pt.ar}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
