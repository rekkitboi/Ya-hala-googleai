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
      className="relative overflow-hidden z-10 bg-[#0C100E] min-h-[60vh] flex items-center"
    >
      {/* Restrained photographic environment */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0C100E] z-10 opacity-70 lg:opacity-50 lg:bg-gradient-to-r lg:from-[#0C100E] lg:via-[#0C100E]/90 lg:to-transparent rtl:lg:bg-gradient-to-l" />
        <img
          src={ASSETS.aboutBg}
          alt="Saudi Heritage Architecture"
          className="w-full h-full object-cover object-right-top md:object-center opacity-80"
          referrerPolicy="no-referrer"
        />
        {/* Gradient transition to footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C100E] to-transparent z-10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="w-full lg:w-[55%] text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1EC672]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? 'ENROLLMENT NOW OPEN' : 'التسجيل متاح الآن'}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-bold text-white mb-6 tracking-tight leading-none">
            {language === 'en' ? 'Begin Your Ya Hala Journey' : 'ابدأ رحلتك مع يا هلا'}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-lg">
            {language === 'en'
              ? 'Take the first step towards fluency, confidence, and authentic cultural connection in the Kingdom today.'
              : 'اتخذ خطوتك الأولى نحو الطلاقة اللغوية والاندماج الثقافي الأصيل في أرجاء المملكة اليوم.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              id="final-apply-btn"
              onClick={onApplyNow}
              className="px-8 py-4 bg-white text-[#0C100E] font-syne font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#1EC672] transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
            >
              <span>{language === 'en' ? 'Apply Now' : 'سجّل الآن'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
            
            <p className="text-xs text-white/50 font-light border-l border-white/20 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4 py-1">
              {language === 'en' 
                ? 'Applications open for upcoming cohorts.' 
                : 'التقديم متاح للدفعات القادمة.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
