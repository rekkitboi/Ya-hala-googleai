import React from 'react';
import { ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  language: Language;
  onApplyNow: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ language, onApplyNow }) => {
  return (
    <section
      id="start"
      data-theme="dark"
      data-header-theme="dark"
      className="py-24 md:py-32 relative overflow-hidden text-center px-6 z-10"
    >
      {/* Background with progressive darkening towards footer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.experienceStone}
          alt="Saudi Heritage Architecture"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#0C100E]/80 to-[#0C100E]/70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto glass-dark-card rounded-3xl p-8 sm:p-12 md:p-14 border border-white/15 shadow-2xl">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
            {language === 'en' ? 'ENROLLMENT NOW OPEN' : 'التسجيل متاح الآن'}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white mb-4 tracking-tight leading-tight">
          {language === 'en' ? 'Begin Your Ya Hala Journey' : 'ابدأ رحلتك مع يا هلا'}
        </h2>

        <p className="text-base sm:text-lg text-white/85 mb-8 font-light leading-relaxed max-w-xl mx-auto">
          {language === 'en'
            ? 'Take the first step towards fluency, confidence, and authentic cultural connection in the Kingdom today.'
            : 'اتخذ خطوتك الأولى نحو الطلاقة اللغوية والاندماج الثقافي الأصيل في أرجاء المملكة اليوم.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-apply-btn"
            onClick={onApplyNow}
            className="px-8 py-3.5 bg-[#1EC672] text-[#0C100E] font-syne font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>{language === 'en' ? 'APPLY NOW' : 'سجّل الآن'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
          <span>{language === 'en' ? '✓ Initial dialect assessment' : '✓ تقييم مبدئي لتحديد المستوى'}</span>
          <span>{language === 'en' ? '✓ Flexible scheduling' : '✓ أوقات مرنة صباحية ومسائية'}</span>
          <span>{language === 'en' ? '✓ Certificate included' : '✓ شهادة كفاءة معتمدة'}</span>
        </div>
      </div>
    </section>
  );
};
