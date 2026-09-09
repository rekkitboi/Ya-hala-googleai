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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden"
    >
      {/* Environmental Oasis Background with high clarity and visible sunlight */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.heroBg}
          alt="Saudi Heritage Oasis Landscape"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Localized directional gradient for text readability while preserving natural sunlight and landscape */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E]/80 via-black/35 to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Eyebrow badge: warm translucent glass */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-sm">
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
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-black/25 border border-white/40 text-white rounded-full hover:bg-white hover:text-[#1F3423] transition-all duration-300 font-syne font-semibold text-xs uppercase tracking-wider backdrop-blur-md cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>
              {language === 'en'
                ? 'DISCOVER THE YA HALA EXPERIENCE'
                : 'اكتشف تجارب يا هلا'}
            </span>
          </button>
        </div>

        {/* Location & Presence Indicators: Subtle & grounded */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[11px] uppercase tracking-widest text-white/75 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>Riyadh Flagship Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>Historic Jeddah Center</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>AlUla Cultural Outposts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span>Worldwide Online</span>
          </div>
        </div>
      </div>

      {/* Atmospheric transition to following section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0C100E] to-transparent pointer-events-none" />
    </section>
  );
};
