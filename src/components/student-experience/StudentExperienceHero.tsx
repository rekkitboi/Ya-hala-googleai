import React from 'react';
import { ASSETS } from '../../data/yaHalaData';
import { STUDENT_EXPERIENCE_INTRO } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

interface StudentExperienceHeroProps {
  language: Language;
}

export const StudentExperienceHero: React.FC<StudentExperienceHeroProps> = ({ language }) => {
  return (
    <section
      id="student-hero"
      data-theme="dark"
      className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0C100E] text-white"
    >
      {/* Background imagery with emerald wash */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.heroBg}
          alt="Saudi Learning Environment"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0C100E]/75 pointer-events-none" />
        <div className="absolute inset-0 mix-blend-multiply bg-[#1F3423]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E]/90 via-transparent to-[#0C100E] pointer-events-none" />
      </div>

      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#1EC672]/15 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-4">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-[#1EC672]" />
          <span className="text-[#1EC672] uppercase tracking-[0.22em] font-syne font-semibold text-xs md:text-sm">
            {language === 'en' ? STUDENT_EXPERIENCE_INTRO.eyebrowEn : STUDENT_EXPERIENCE_INTRO.eyebrowAr}
          </span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-syne font-extrabold mb-6 leading-[1.12] tracking-tight max-w-4xl mx-auto">
          {language === 'en' ? (
            <>
              Curriculum &{' '}
              <span className="text-[#1EC672]">Student Experience</span>
            </>
          ) : (
            <>
              المنهج و{' '}
              <span className="text-[#1EC672]">التجربة التعليمية</span>
            </>
          )}
        </h1>

        {/* Approved Program Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-3xl mx-auto mb-10">
          {language === 'en'
            ? STUDENT_EXPERIENCE_INTRO.programOverviewEn
            : STUDENT_EXPERIENCE_INTRO.programOverviewAr}
        </p>

        {/* Focus Pillars Strip */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {STUDENT_EXPERIENCE_INTRO.focusPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-syne font-medium text-white/90 backdrop-blur-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1EC672]" />
              <span>{language === 'en' ? pillar.en : pillar.ar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
