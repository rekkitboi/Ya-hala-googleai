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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 16, 14, 0.45), rgba(12, 16, 14, 0.65)), url("${ASSETS.heroBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Texture overlays */}
      <div className="absolute inset-0 mix-blend-multiply bg-[#1F3423]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F3423]/30 to-[#0C100E] pointer-events-none" />

      {/* Subtle glowing ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1EC672]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto mt-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#1EC672] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span>
            {language === 'en'
              ? 'SAUDI ARABIC & CULTURAL EXPERIENCES'
              : 'اللهجة السعودية والتجارب الثقافية الأصيلة'}
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-syne font-extrabold uppercase leading-[0.95] md:leading-[0.9] tracking-tight mb-8 drop-shadow-sm">
          {language === 'en' ? (
            <>
              Learn the<br />
              Language.<br />
              <span className="text-[#1EC672]">Live the</span><br />
              Culture.
            </>
          ) : (
            <>
              تعلّم<br />
              اللغة.<br />
              <span className="text-[#1EC672]">وعِش</span><br />
              الثقافة.
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 text-white/90 leading-relaxed">
          {language === 'en'
            ? 'Learn the Saudi Arabic dialect through immersive classes, cultural experiences, and real connections across the Kingdom.'
            : 'أتقن اللهجة السعودية اليومية من خلال فصول تفاعلية، رحلات ثقافية، وروابط إنسانية عميقة تمتد عبر مناطق المملكة.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            id="hero-explore-programs-btn"
            onClick={onExplorePrograms}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1F3423] rounded-full hover:bg-[#F9F8F5] transition-all duration-300 font-syne font-bold text-sm tracking-wider shadow-lg hover:scale-105"
          >
            <span>{language === 'en' ? 'EXPLORE PROGRAMS' : 'استكشف البرامج'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </button>

          <button
            id="hero-discover-exp-btn"
            onClick={onDiscoverExperiences}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/60 text-white rounded-full hover:bg-white hover:text-[#1F3423] transition-all duration-300 font-syne font-bold text-sm tracking-wider backdrop-blur-sm"
          >
            <Compass className="w-4 h-4" />
            <span>
              {language === 'en'
                ? 'DISCOVER THE YA HALA EXPERIENCE'
                : 'اكتشف تجارب يا هلا'}
            </span>
          </button>
        </div>

        {/* Location & Accreditation Badges */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs uppercase tracking-widest text-white/70 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1EC672] animate-pulse" />
            <span>Riyadh Flagship Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
            <span>Historic Jeddah Center</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
            <span>AlUla Cultural Outposts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
            <span>Worldwide Online</span>
          </div>
        </div>
      </div>

      {/* Smooth bottom blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0C100E] pointer-events-none" />
    </section>
  );
};
