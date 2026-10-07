import React from 'react';
import { LIFE_AT_YA_HALA_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import {
  MessageSquare,
  Users,
  UserPlus,
  Gamepad2,
  Palette,
  PartyPopper,
  Compass,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface LifeAtYaHalaSectionProps {
  language: Language;
}

export const LifeAtYaHalaSection: React.FC<LifeAtYaHalaSectionProps> = ({ language }) => {
  const getActivityIcon = (id: string) => {
    switch (id) {
      case 'conversations':
        return <MessageSquare className="w-4 h-4 text-[#1EC672]" />;
      case 'gatherings':
        return <Users className="w-4 h-4 text-[#1EC672]" />;
      case 'group-activities':
        return <UserPlus className="w-4 h-4 text-[#1EC672]" />;
      case 'games':
        return <Gamepad2 className="w-4 h-4 text-[#1EC672]" />;
      case 'cultural-days':
        return <Palette className="w-4 h-4 text-[#1EC672]" />;
      case 'celebrations':
        return <PartyPopper className="w-4 h-4 text-[#1EC672]" />;
      case 'outside-practice':
        return <Compass className="w-4 h-4 text-[#1EC672]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#1EC672]" />;
    }
  };

  return (
    <section
      id="life-at-ya-hala"
      data-theme="light"
      data-header-theme="light"
      className="py-20 md:py-28 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      {/* Decorative ambient background subtle lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1EC672]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1F3423]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F3423]/5 border border-[#1F3423]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1F3423]/80 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? LIFE_AT_YA_HALA_DATA.eyebrowEn : LIFE_AT_YA_HALA_DATA.eyebrowAr}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4 leading-tight">
            {language === 'en' ? LIFE_AT_YA_HALA_DATA.headingEn : LIFE_AT_YA_HALA_DATA.headingAr}
          </h2>

          <p className="text-base sm:text-lg text-[#1F3423]/80 leading-relaxed font-light max-w-2xl">
            {language === 'en' ? LIFE_AT_YA_HALA_DATA.leadEn : LIFE_AT_YA_HALA_DATA.leadAr}
          </p>
        </div>

        {/* 7 Activities Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7">
          {LIFE_AT_YA_HALA_DATA.activities.map((act, idx) => {
            // Editorial grid rhythm: First two cards are larger feature spans (cols 7 and 5), then three cards of 4 cols, then two cards of 6 cols
            let colSpanClass = 'lg:col-span-4';
            if (idx === 0) colSpanClass = 'lg:col-span-7 md:col-span-2';
            else if (idx === 1) colSpanClass = 'lg:col-span-5 md:col-span-2';
            else if (idx === 5) colSpanClass = 'lg:col-span-6 md:col-span-1';
            else if (idx === 6) colSpanClass = 'lg:col-span-6 md:col-span-1';

            const isMajor = idx === 0 || idx === 1;

            return (
              <div
                key={act.id}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-[#1F3423]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(31,52,35,0.12)] hover:border-[#1EC672]/50 transition-all duration-500 flex flex-col ${colSpanClass}`}
              >
                {/* Immersive Photography Container */}
                <div
                  className={`relative overflow-hidden w-full ${
                    isMajor ? 'h-64 sm:h-72 lg:h-80' : 'h-56 sm:h-60'
                  }`}
                >
                  <img
                    src={act.image}
                    alt={language === 'en' ? act.title : act.titleAr}
                    className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim over the photography for contrast & tone continuity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E]/75 via-[#0C100E]/20 to-transparent pointer-events-none" />

                  {/* Top Badges Floating over image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C100E]/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-syne font-semibold tracking-wider">
                      {getActivityIcon(act.id)}
                      <span>
                        {language === 'en'
                          ? act.categoryEn || 'Community Experience'
                          : act.categoryAr || 'تجربة مجتمعية'}
                      </span>
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1F3423] font-syne font-bold text-xs shadow-xs">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag for prominent cards */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 pointer-events-none">
                    <div className="flex items-center gap-2 text-white/90 text-xs font-syne tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672] animate-pulse" />
                      <span>{language === 'en' ? 'Authentic Saudi Interaction' : 'تفاعل سعودي أصيل'}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Text Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left rtl:text-right bg-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-syne font-bold text-[#1F3423] mb-3 leading-snug group-hover:text-[#1EC672] transition-colors duration-300">
                      {language === 'en' ? act.title : act.titleAr}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#1F3423]/80 leading-relaxed font-light">
                      {language === 'en' ? act.description : act.descriptionAr}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1F3423]/10 flex items-center justify-between text-xs font-syne text-[#1F3423]/60 group-hover:text-[#1F3423] transition-colors">
                    <span className="font-semibold tracking-wider uppercase text-[11px] text-[#1F3423]/70">
                      {language === 'en' ? 'Experiential Immersion' : 'معايشة واقعية'}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#1F3423]/5 group-hover:bg-[#1EC672] group-hover:text-[#0C100E] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 rtl:-rotate-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
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
