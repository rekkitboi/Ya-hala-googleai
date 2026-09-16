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
      className="py-20 md:py-28 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1F3423]/70 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? LIFE_AT_YA_HALA_DATA.eyebrowEn : LIFE_AT_YA_HALA_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-[#1F3423] tracking-tight mb-3">
            {language === 'en' ? LIFE_AT_YA_HALA_DATA.headingEn : LIFE_AT_YA_HALA_DATA.headingAr}
          </h2>
          <p className="text-sm sm:text-base text-[#1F3423]/75 leading-relaxed font-light">
            {language === 'en' ? LIFE_AT_YA_HALA_DATA.leadEn : LIFE_AT_YA_HALA_DATA.leadAr}
          </p>
        </div>

        {/* 7 Activities Bento / Flow Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LIFE_AT_YA_HALA_DATA.activities.map((act, idx) => (
            <div
              key={act.id}
              className={`bg-white rounded-xl border border-[#1F3423]/10 p-6 shadow-xs hover:border-[#1EC672]/40 transition-all duration-300 flex flex-col justify-between text-left rtl:text-right ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#1F3423]/5 border border-[#1F3423]/10 flex items-center justify-center mb-4">
                  {getActivityIcon(act.id)}
                </div>

                <h3 className="text-base sm:text-lg font-syne font-bold text-[#1F3423] mb-2 leading-snug">
                  {language === 'en' ? act.title : act.titleAr}
                </h3>

                <p className="text-xs sm:text-sm text-[#1F3423]/75 leading-relaxed font-light">
                  {language === 'en' ? act.description : act.descriptionAr}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1F3423]/5 flex items-center justify-between text-[11px] font-syne text-[#1F3423]/50">
                <span>{language === 'en' ? 'Community Life' : 'الحياة المجتمعية'}</span>
                <span className="font-bold text-[#1EC672]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
