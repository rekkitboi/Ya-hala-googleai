import React, { useEffect, useRef, useState } from 'react';
import { THREE_CONNECTED_PARTS_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface ConnectedTriadSectionProps {
  language: Language;
}

export const ConnectedTriadSection: React.FC<ConnectedTriadSectionProps> = ({ language }) => {
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

  return (
    <section
      ref={sectionRef}
      id="connected-triad"
      data-theme="dark"
      className="py-24 md:py-36 relative overflow-hidden bg-[#080B0A] text-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/80 to-[#080B0A]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? THREE_CONNECTED_PARTS_DATA.eyebrowEn : THREE_CONNECTED_PARTS_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-bold mb-4 tracking-tight leading-tight">
            {language === 'en' ? THREE_CONNECTED_PARTS_DATA.titleEn : THREE_CONNECTED_PARTS_DATA.titleAr}
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className={`hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-white/10 z-0 transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className={`absolute top-0 left-0 h-full bg-[#1EC672] transition-all duration-[2000ms] ease-out rtl:right-0 rtl:left-auto ${
              isVisible ? 'w-full' : 'w-0'
            }`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {THREE_CONNECTED_PARTS_DATA.parts.map((part, index) => {
              const delay = index * 300;
              return (
                <div
                  key={part.number}
                  className={`flex flex-col items-center text-center relative transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {/* Vertical connecting line (mobile) */}
                  {index > 0 && (
                    <div className={`md:hidden absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10 transition-all duration-700 ${
                      isVisible ? 'h-12 opacity-100' : 'h-0 opacity-0'
                    }`} style={{ transitionDelay: `${delay - 150}ms` }} />
                  )}

                  <div className="w-20 h-20 rounded-full bg-[#080B0A] border-2 border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_rgba(30,198,114,0.1)]">
                    <span className="text-2xl font-syne font-bold text-white">
                      {part.number}
                    </span>
                    <div className="absolute inset-0 rounded-full border-2 border-[#1EC672] opacity-0 animate-ping animation-delay-1000" style={{ animationDuration: '3s', animationDelay: `${delay}ms` }} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-4 h-auto md:h-16 flex items-center justify-center">
                    {language === 'en' ? part.title : part.titleAr}
                  </h3>
                  
                  <p className="text-base text-white/70 font-light leading-relaxed max-w-sm">
                    {language === 'en' ? part.description : part.descriptionAr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
