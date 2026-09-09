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
      className="py-28 md:py-36 bg-[#0C100E] text-white relative overflow-hidden text-center px-6 border-t border-white/10"
    >
      {/* Background imagery */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.experienceStone}
          alt="Saudi Heritage Landscape"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0C100E]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-transparent to-[#0C100E] pointer-events-none" />
      </div>

      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#1EC672]/15 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#1EC672] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'ENROLLMENT OPEN' : 'التسجيل متاح الآن'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-syne font-extrabold text-white mb-6 leading-tight tracking-tight">
          {language === 'en' ? STUDENT_EXPERIENCE_CTA.headingEn : STUDENT_EXPERIENCE_CTA.headingAr}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
          {language === 'en' ? STUDENT_EXPERIENCE_CTA.leadEn : STUDENT_EXPERIENCE_CTA.leadAr}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onApplyNow}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#1EC672] text-[#1F3423] font-syne font-bold text-base hover:bg-[#28df83] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(30,198,114,0.3)] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{language === 'en' ? STUDENT_EXPERIENCE_CTA.ctaBtnEn : STUDENT_EXPERIENCE_CTA.ctaBtnAr}</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};
