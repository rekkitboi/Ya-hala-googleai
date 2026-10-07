import React, { useState } from 'react';
import { CURRICULUM_LEVELS_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { CheckCircle2, Layers } from 'lucide-react';
import { CurriculumBookShowcase } from './CurriculumBookShowcase';

interface ProgramLevelsSectionProps {
  language: Language;
}

export const ProgramLevelsSection: React.FC<ProgramLevelsSectionProps> = ({ language }) => {
  const [activeLevelId, setActiveLevelId] = useState<string>('a1');
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-arabic font-bold' : 'font-syne font-bold';

  const activeLevel = CURRICULUM_LEVELS_DATA.find((lvl) => lvl.id === activeLevelId) || CURRICULUM_LEVELS_DATA[0];

  return (
    <section
      id="program-levels"
      data-theme="light"
      className="py-20 md:py-28 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className={`text-[#1F3423]/70 ${isAr ? '' : 'uppercase tracking-[0.2em]'} ${displayFont} text-xs`}>
              {language === 'en' ? 'CURRICULUM FRAMEWORK' : 'الإطار المنهجي المعتمد'}
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl ${displayFont} text-[#1F3423] tracking-tight mb-3`}>
            {language === 'en' ? 'Four Progressive Program Levels' : 'أربعة مستويات تعليمية متدرجة'}
          </h2>
          <p className="text-sm sm:text-base text-[#1F3423]/75 leading-relaxed font-light">
            {language === 'en'
              ? 'Aligned with the Common European Framework of Reference for Languages (CEFR), guiding you methodically from basic everyday expressions to fluent, independent communication.'
              : 'متوافقة مع الإطار الأوروبي المرجعي المشترك للغات (CEFR)، تأخذ بيدك منهجياً من التعبيرات اليومية البسيطة إلى الطلاقة والاستقلالية الكاملة.'}
          </p>
        </div>

        {/* Level Progression Switcher Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {CURRICULUM_LEVELS_DATA.map((lvl) => {
            const isSelected = lvl.id === activeLevelId;
            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`p-5 rounded-xl border text-left rtl:text-right transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1F3423] text-white border-[#1F3423] shadow-sm'
                    : 'bg-white hover:bg-white/80 text-[#1F3423] border-[#1F3423]/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-syne font-bold tracking-widest ${isSelected ? 'text-[#1EC672]' : 'text-[#1F3423]/60'}`}>
                      {lvl.cefr}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${isSelected ? 'bg-white/10 text-white' : 'bg-[#1F3423]/5 text-[#1F3423]/70'}`}>
                      {lvl.level.split('|')[0].trim()}
                    </span>
                  </div>
                  <h4 className={`text-sm sm:text-base ${displayFont} leading-tight ${isSelected ? 'text-white' : 'text-[#1F3423]'}`}>
                    {language === 'en' ? lvl.title : lvl.titleAr}
                  </h4>
                </div>
                <div className={`text-xs font-medium mt-3 pt-2.5 border-t ${isSelected ? 'border-white/10 text-[#1EC672]' : 'border-[#1F3423]/10 text-[#1F3423]/60'}`}>
                  {language === 'en' ? lvl.focus : lvl.focusAr}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Level Showcase */}
        <div className="bg-white rounded-2xl border border-[#1F3423]/10 p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Zone: Level Title & Overview */}
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#1F3423]/10 pb-6 lg:pb-0 lg:pr-6 rtl:lg:pr-0 rtl:lg:pl-6 text-left rtl:text-right flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3423]/5 text-[#1F3423] font-syne font-bold text-xs uppercase tracking-wider mb-4 border border-[#1F3423]/10">
                  <span>{activeLevel.level}</span>
                </div>

                <h3 className={`text-xl sm:text-2xl md:text-3xl ${displayFont} text-[#1F3423] mb-2 leading-tight`}>
                  {language === 'en' ? activeLevel.title : activeLevel.titleAr}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-[#1F3423]/70 mb-4">
                  {language === 'en' ? activeLevel.focus : activeLevel.focusAr}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F3423]/10 text-xs text-[#1F3423]/65 leading-relaxed font-light">
                {language === 'en'
                  ? 'Includes Student Book, Workbook, and Conversation Guide with authentic Saudi cultural contexts.'
                  : 'يشمل كتاب الطالب، وكتاب التمارين، ودليل المحادثة المبني على السياق الثقافي والاجتماعي السعودي.'}
              </div>
            </div>

            {/* Center Zone: Interactive Curriculum Book Showcase */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#1F3423]/10 pb-8 lg:pb-0 lg:px-4 flex items-center justify-center">
              <CurriculumBookShowcase
                levelId={activeLevelId}
                language={language}
              />
            </div>

            {/* Right Zone: Competency Target & Key Learning Outcomes */}
            <div className="lg:col-span-4 text-left rtl:text-right">
              <div className="mb-6">
                <h4 className={`text-xs ${isAr ? '' : 'uppercase tracking-widest'} ${displayFont} text-[#1F3423]/50 mb-2`}>
                  {language === 'en' ? 'Competency Target' : 'الهدف التعليمي العام'}
                </h4>
                <p className="text-sm sm:text-base text-[#1F3423]/85 leading-relaxed font-light">
                  {language === 'en' ? activeLevel.description : activeLevel.descriptionAr}
                </p>
              </div>

              <div>
                <h4 className={`text-xs ${isAr ? '' : 'uppercase tracking-widest'} ${displayFont} text-[#1F3423]/50 mb-3`}>
                  {language === 'en' ? 'Key Learning Outcomes' : 'مخرجات التعلم المستهدفة'}
                </h4>
                <div className="grid gap-2.5">
                  {(language === 'en' ? activeLevel.milestones : activeLevel.milestonesAr).map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/5 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1F3423]/85 leading-snug">
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
