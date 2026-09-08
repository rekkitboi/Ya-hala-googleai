import React from 'react';
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
      className="py-32 bg-[#1F3423] relative overflow-hidden text-center px-6 border-t border-white/10"
    >
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#1EC672]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#1EC672] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'ENROLLMENT NOW OPEN' : 'التسجيل متاح الآن'}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white mb-8 tracking-tight leading-tight">
          {language === 'en' ? 'Begin Your Ya Hala Journey' : 'ابدأ رحلتك مع معهد يا هلا'}
        </h2>

        <p className="text-lg md:text-xl text-white/85 mb-12 font-light leading-relaxed max-w-xl mx-auto">
          {language === 'en'
            ? 'Take the first step towards fluency, confidence, and authentic cultural connection in the Kingdom today.'
            : 'اتخذ خطوتك الأولى نحو الطلاقة اللغوية والاندماج الثقافي الأصيل في أرجاء المملكة اليوم.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-apply-btn"
            onClick={onApplyNow}
            className="px-10 py-5 bg-[#1EC672] text-[#1F3423] font-syne font-extrabold rounded-full text-base sm:text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1EC672]/20 flex items-center gap-3 tracking-wider uppercase"
          >
            <span>{language === 'en' ? 'APPLY NOW' : 'سجّل الآن'}</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-xs text-white/60">
          <span>{language === 'en' ? '✓ Free initial dialect assessment' : '✓ تقييم مبدئي مجاني لتحديد المستوى'}</span>
          <span>{language === 'en' ? '✓ Flexible scheduling options' : '✓ أوقات مرنة صباحية ومسائية'}</span>
          <span>{language === 'en' ? '✓ Official Certificate included' : '✓ شهادة كفاءة معتمدة'}</span>
        </div>
      </div>
    </section>
  );
};
