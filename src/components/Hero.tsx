import React from 'react';
import { ASSETS } from '../data/yaHalaData';
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
      {/* Localized directional gradient for text readability while preserving the continuous architectural environment */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Eyebrow badge: warm translucent glass */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/95 text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span>
            {language === 'en'
              ? 'SAUDI ARABIC & CULTURAL EXPERIENCES'
              : 'اللهجة السعودية والتجارب الثقافية الأصيلة'}
          </span>
        </div>

        {/* Display Headline: Pure white and warm ivory for natural editorial strength */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold uppercase leading-[1] md:leading-[0.95] tracking-tight mb-6 drop-shadow-md">
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
        <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-sm">
          {language === 'en'
            ? 'Learn the Saudi Arabic dialect through immersive classes, cultural experiences, and real connections across the Kingdom.'
            : 'أتقن اللهجة السعودية اليومية من خلال فصول تفاعلية، رحلات ثقافية، وروابط إنسانية عميقة تمتد عبر مناطق المملكة.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            id="hero-explore-programs-btn"
            onClick={onExplorePrograms}
            className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-[#1F3423] rounded-full hover:bg-[#F9F8F5] transition-all duration-300 font-syne font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 cursor-pointer"
          >
            <span>{language === 'en' ? 'EXPLORE PROGRAMS' : 'استكشف البرامج'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </button>

          <button
            id="hero-discover-exp-btn"
            onClick={onDiscoverExperiences}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full transition-all duration-300 font-syne font-semibold text-xs uppercase tracking-wider backdrop-blur-md cursor-pointer shadow-sm hover:scale-105"
          >
            <Compass className="w-4 h-4" />
            <span>
              {language === 'en'
                ? 'DISCOVER THE YA HALA EXPERIENCE'
                : 'اكتشف تجارب يا هلا'}
            </span>
          </button>
        </div>

        {/* Approved Conceptual Pillars: Replacing unverified location claims */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[11px] uppercase tracking-widest text-white/85 font-semibold">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? 'Saudi Dialect' : 'اللهجة السعودية'}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? 'Cultural Understanding' : 'الفهم الثقافي'}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? 'Practical Communication' : 'التواصل العملي'}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? 'Everyday Confidence' : 'الثقة اليومية'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
