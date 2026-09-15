import React from 'react';
import { Language } from '../types';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  language: Language;
  onExplorePrograms: () => void;
  onDiscoverExperiences: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExplorePrograms,
  onDiscoverExperiences,
}) => {
  return (
    <section
      id="top"
      data-theme="dark"
      data-header-theme="dark"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto motion-safe:animate-fade-in-up">
        {/* Eyebrow badge: quieter */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-8 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#1EC672]" />
          <span>
            {language === 'en'
              ? 'SAUDI ARABIC & CULTURAL EXPERIENCES'
              : 'اللهجة السعودية والتجارب الثقافية الأصيلة'}
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-syne font-bold uppercase leading-[1.1] md:leading-[1] tracking-tight mb-8 drop-shadow-lg">
          {language === 'en' ? (
            <>
              Learn the Language.<br />
              <span className="text-white/90 font-medium">Live the Culture.</span>
            </>
          ) : (
            <>
              تعلّم اللغة.<br />
              <span className="text-white/90 font-medium">وعِش الثقافة.</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-md">
          {language === 'en'
            ? 'Learn the Saudi Arabic dialect through immersive classes, cultural experiences, and real connections across the Kingdom.'
            : 'أتقن اللهجة السعودية اليومية من خلال فصول تفاعلية، رحلات ثقافية، وروابط إنسانية عميقة تمتد عبر مناطق المملكة.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            id="hero-explore-programs-btn"
            onClick={onExplorePrograms}
            className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-[#1F3423] rounded-full hover:bg-white/90 transition-all duration-300 font-syne font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 cursor-pointer"
          >
            <span>{language === 'en' ? 'EXPLORE PROGRAMS' : 'استكشف البرامج'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </button>
          <button
            id="hero-discover-exp-btn"
            onClick={onDiscoverExperiences}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-black/20 hover:bg-black/40 border border-white/20 text-white rounded-full transition-all duration-300 font-syne font-semibold text-xs uppercase tracking-wider backdrop-blur-md cursor-pointer shadow-sm hover:scale-105"
          >
            <Compass className="w-4 h-4" />
            <span>
              {language === 'en'
                ? 'DISCOVER THE YA HALA EXPERIENCE'
                : 'اكتشف تجارب يا هلا'}
            </span>
          </button>
        </div>

        {/* Quieter integrated conceptual pillars */}
        <div className="mt-16 pt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/70 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#1EC672]" />
            {language === 'en' ? 'Saudi Dialect' : 'اللهجة السعودية'}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#1EC672]" />
            {language === 'en' ? 'Cultural Understanding' : 'الفهم الثقافي'}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#1EC672]" />
            {language === 'en' ? 'Practical Communication' : 'التواصل العملي'}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#1EC672]" />
            {language === 'en' ? 'Everyday Confidence' : 'الثقة اليومية'}
          </span>
        </div>
      </div>
    </section>
  );
};
