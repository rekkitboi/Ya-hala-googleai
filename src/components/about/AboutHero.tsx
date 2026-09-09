import React from 'react';
import { ASSETS } from '../../data/yaHalaData';
import { ABOUT_HERO_DATA } from '../../data/aboutData';
import { Language } from '../../types';
import { Sparkles, ArrowDown } from 'lucide-react';

interface AboutHeroProps {
  language: Language;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ language }) => {
  const scrollToPurpose = () => {
    const el = document.getElementById('purpose');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about-hero"
      data-theme="dark"
      className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0C100E] text-white"
    >
      {/* Background with lush oasis photography and layered emerald treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.aboutBg}
          alt="Saudi Heritage and Oasis Walkway"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0C100E]/70 pointer-events-none" />
        <div className="absolute inset-0 mix-blend-multiply bg-[#1F3423]/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E]/90 via-transparent to-[#0C100E] pointer-events-none" />
      </div>

      {/* Ambient glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#1EC672]/15 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-4">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-[#1EC672]" />
          <span className="text-[#1EC672] uppercase tracking-[0.22em] font-syne font-semibold text-xs md:text-sm">
            {language === 'en' ? ABOUT_HERO_DATA.eyebrowEn : ABOUT_HERO_DATA.eyebrowAr}
          </span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-syne font-extrabold mb-6 leading-[1.12] tracking-tight max-w-4xl mx-auto">
          {language === 'en' ? (
            <>
              Language Opens the Door.{' '}
              <span className="text-[#1EC672] block sm:inline">Culture Makes You Feel at Home.</span>
            </>
          ) : (
            <>
              اللغة تفتح الأبواب..{' '}
              <span className="text-[#1EC672] block sm:inline">والثقافة تشعرك بالانتماء</span>
            </>
          )}
        </h1>

        {/* Supporting idea */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          {language === 'en' ? ABOUT_HERO_DATA.leadEn : ABOUT_HERO_DATA.leadAr}
        </p>

        {/* Scroll down indicator */}
        <button
          onClick={scrollToPurpose}
          className="inline-flex items-center gap-2 text-xs font-syne uppercase tracking-widest text-white/60 hover:text-[#1EC672] transition-colors group cursor-pointer"
          aria-label="Scroll to institutional purpose"
        >
          <span>{language === 'en' ? 'Explore Our Purpose' : 'استكشف رؤيتنا ورسالتنا'}</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
