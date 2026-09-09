import React, { useState } from 'react';
import { CURRICULUM_LEVELS_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

interface ProgramLevelsSectionProps {
  language: Language;
}

export const ProgramLevelsSection: React.FC<ProgramLevelsSectionProps> = ({ language }) => {
  const [activeLevelId, setActiveLevelId] = useState<string>('a1');

  const activeLevel = CURRICULUM_LEVELS_DATA.find((lvl) => lvl.id === activeLevelId) || CURRICULUM_LEVELS_DATA[0];

  return (
    <section
      id="program-levels"
      data-theme="light"
      className="py-24 md:py-32 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/5 border border-[#1F3423]/10 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1F3423]/80 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'CURRICULUM FRAMEWORK' : 'الإطار المنهجي المعتمد'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'Four Progressive Program Levels' : 'أربعة مستويات تعليمية متدرجة'}
          </h2>
          <p className="text-base md:text-lg text-[#1F3423]/75 leading-relaxed font-light">
            {language === 'en'
              ? 'Aligned with the Common European Framework of Reference for Languages (CEFR), guiding you methodically from basic everyday expressions to fluent, independent communication.'
              : 'متوافقة مع الإطار الأوروبي المرجعي المشترك للغات (CEFR)، تأخذ بيدك منهجياً من التعبيرات اليومية البسيطة إلى الطلاقة والاستقلالية الكاملة.'}
          </p>
        </div>

        {/* Level Progression Switcher Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {CURRICULUM_LEVELS_DATA.map((lvl) => {
            const isSelected = lvl.id === activeLevelId;
            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`p-5 rounded-2xl border text-left rtl:text-right transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1F3423] text-white border-[#1F3423] shadow-lg scale-[1.02]'
                    : 'bg-white hover:bg-white/80 text-[#1F3423] border-[#1F3423]/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-syne font-extrabold tracking-widest ${isSelected ? 'text-[#1EC672]' : 'text-[#1F3423]/60'}`}>
                      {lvl.cefr}
                    </span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${isSelected ? 'bg-white/10 text-white' : 'bg-[#1F3423]/5 text-[#1F3423]/70'}`}>
                      {lvl.level.split('|')[0].trim()}
                    </span>
                  </div>
                  <h4 className={`text-base sm:text-lg font-syne font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#1F3423]'}`}>
                    {language === 'en' ? lvl.title : lvl.titleAr}
                  </h4>
                </div>
                <div className={`text-xs font-medium mt-3 pt-3 border-t ${isSelected ? 'border-white/10 text-[#1EC672]' : 'border-[#1F3423]/10 text-[#1F3423]/60'}`}>
                  {language === 'en' ? lvl.focus : lvl.focusAr}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Level Showcase */}
        <div className="bg-white rounded-3xl border border-[#1F3423]/10 p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden transition-all duration-500">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#1F3423]/10 pb-6 lg:pb-0 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1EC672]/15 text-[#1F3423] font-syne font-bold text-xs uppercase tracking-wider mb-4">
                <span>{activeLevel.level}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold text-[#1F3423] mb-3">
                {language === 'en' ? activeLevel.title : activeLevel.titleAr}
              </h3>

              <div className="text-sm font-syne font-semibold text-[#1F3423]/70">
                {language === 'en' ? activeLevel.focus : activeLevel.focusAr}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest font-syne font-bold text-[#1F3423]/50 mb-2">
                  {language === 'en' ? 'Competency Target' : 'الهدف التعليمي العام'}
                </h4>
                <p className="text-lg sm:text-xl text-[#1F3423]/90 leading-relaxed font-light">
                  {language === 'en' ? activeLevel.description : activeLevel.descriptionAr}
                </p>
              </div>

              <div className="pt-6 border-t border-[#1F3423]/10">
                <h4 className="text-xs uppercase tracking-widest font-syne font-bold text-[#1F3423]/50 mb-4">
                  {language === 'en' ? 'Key Learning Milestones' : 'أبرز مخرجات التعلم'}
                </h4>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {(language === 'en' ? activeLevel.milestones : activeLevel.milestonesAr).map((milestone, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-[#1F3423]/85 leading-snug">
                        {milestone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
