import React from 'react';
import { ASSETS } from '../../data/yaHalaData';
import { STUDENT_EXPERIENCE_INTRO } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface StudentExperienceHeroProps {
  language: Language;
}

export const StudentExperienceHero: React.FC<StudentExperienceHeroProps> = ({ language }) => {
  return (
    <section
      id="student-hero"
      data-theme="dark"
      className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0C100E] text-white"
    >
      {/* Environmental Oasis Background: Architectural stone arches and palm grove */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.oasisStoneTerrace}
          alt="Saudi Oasis Architectural Terrace"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Directional localized gradient: preserving natural sunlight while guaranteeing text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/70 to-[#0C100E]/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-4">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span className="text-white/95 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
            {language === 'en' ? STUDENT_EXPERIENCE_INTRO.eyebrowEn : STUDENT_EXPERIENCE_INTRO.eyebrowAr}
          </span>
        </div>

        {/* Page Title: Refined, controlled display heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6 leading-tight tracking-tight text-white max-w-3xl mx-auto">
          {language === 'en' ? (
            <>
              Curriculum &{' '}
              <span className="text-white/85 font-light">Student Experience</span>
            </>
          ) : (
            <>
              المنهج و{' '}
              <span className="text-white/85 font-light">التجربة التعليمية</span>
            </>
          )}
        </h1>

        {/* Approved Program Description */}
        <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          {language === 'en'
            ? STUDENT_EXPERIENCE_INTRO.programOverviewEn
            : STUDENT_EXPERIENCE_INTRO.programOverviewAr}
        </p>

        {/* Focus Pillars Strip */}
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto text-xs font-syne font-semibold">
          {STUDENT_EXPERIENCE_INTRO.focusPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white shadow-xs"
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
