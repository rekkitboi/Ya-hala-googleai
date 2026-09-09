import React from 'react';
import { STUDENT_EXPERIENCE_CTA } from '../../data/studentExperienceData';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface StudentExperienceCTAProps {
  language: Language;
  onApplyNow: () => void;
}

export const StudentExperienceCTA: React.FC<StudentExperienceCTAProps> = ({ language, onApplyNow }) => {
  return (
    <section
      id="student-cta"
      data-theme="dark"
      className="py-24 md:py-32 bg-[#0C100E] text-white relative overflow-hidden text-center px-6"
    >
      {/* Background imagery with controlled dark overlay allowing photo to remain visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.experienceStone}
          alt="Saudi Heritage Architecture"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E]/95 via-[#0C100E]/70 to-[#0C100E]/95 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
            {language === 'en' ? 'ENROLLMENT OPEN' : 'التسجيل متاح الآن'}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white mb-4 leading-tight tracking-tight">
          {language === 'en' ? STUDENT_EXPERIENCE_CTA.headingEn : STUDENT_EXPERIENCE_CTA.headingAr}
        </h2>

        <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-8 max-w-xl mx-auto">
          {language === 'en' ? STUDENT_EXPERIENCE_CTA.leadEn : STUDENT_EXPERIENCE_CTA.leadAr}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onApplyNow}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#0C100E] hover:bg-[#F9F8F5] font-syne font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>{language === 'en' ? STUDENT_EXPERIENCE_CTA.ctaBtnEn : STUDENT_EXPERIENCE_CTA.ctaBtnAr}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
