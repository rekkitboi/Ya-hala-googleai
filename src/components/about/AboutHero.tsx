import React from 'react';
import { ASSETS } from '../../data/yaHalaData';
import { ABOUT_HERO_DATA } from '../../data/aboutData';
import { Language } from '../../types';
import { ArrowDown } from 'lucide-react';

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
      className="relative min-h-[72vh] md:min-h-[78vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0C100E] text-white"
    >
      {/* Photographic background with controlled, visible overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.aboutBg}
          alt="Saudi Oasis Walkway and Heritage Architecture"
          className="w-full h-full object-cover object-[center_35%] scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Directional gradient ensuring high text legibility while keeping photo visible across the frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C100E]/90 via-[#0C100E]/60 to-transparent rtl:bg-gradient-to-l pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Left-aligned editorial composition on desktop */}
        <div className="max-w-2xl text-left rtl:text-right">
          {/* Restrained eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? ABOUT_HERO_DATA.eyebrowEn : ABOUT_HERO_DATA.eyebrowAr}
            </span>
          </div>

          {/* Large but controlled, predominantly white display heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white tracking-tight leading-[1.18] mb-6">
            {language === 'en' ? (
              <>
                Language Opens the Door.{' '}
                <span className="text-white/85 font-light block sm:inline">Culture Makes You Feel at Home.</span>
              </>
            ) : (
              <>
                اللغة تفتح الأبواب..{' '}
                <span className="text-white/85 font-light block sm:inline">والثقافة تشعرك بالانتماء</span>
              </>
            )}
          </h1>

          {/* Concise, readable supporting text */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-8 max-w-xl">
            {language === 'en' ? ABOUT_HERO_DATA.leadEn : ABOUT_HERO_DATA.leadAr}
          </p>

          {/* Quiet transition indicator */}
          <button
            onClick={scrollToPurpose}
            className="inline-flex items-center gap-2 text-xs font-syne uppercase tracking-widest text-white/70 hover:text-[#1EC672] transition-colors group cursor-pointer pt-2"
            aria-label="Scroll to institutional purpose"
          >
            <span>{language === 'en' ? 'Explore Our Purpose' : 'استكشف أهدافنا ورسالتنا'}</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#1EC672]" />
          </button>
        </div>
      </div>
    </section>
  );
};
