import React from 'react';
import { FOUNDER_MESSAGE_DATA } from '../../data/aboutData';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';
import { Quote } from 'lucide-react';

interface FounderMessageSectionProps {
  language: Language;
}

export const FounderMessageSection: React.FC<FounderMessageSectionProps> = ({ language }) => {
  const paragraphs = language === 'en' ? FOUNDER_MESSAGE_DATA.paragraphsEn : FOUNDER_MESSAGE_DATA.paragraphsAr;
  const motto = language === 'en' ? FOUNDER_MESSAGE_DATA.mottoEn : FOUNDER_MESSAGE_DATA.mottoAr;

  return (
    <section
      id="founder-message"
      data-theme="dark"
      className="py-24 md:py-36 relative overflow-hidden bg-[#0C100E] text-white"
    >
      {/* Rich ambient environmental background (Oasis Garden Passage with warm sunlight & natural flora) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.oasisGardenPassage}
          alt="Saudi Oasis Garden Passage"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic directional gradient keeping the lush garden visible while ensuring deep contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/75 to-[#0C100E]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0C100E]/50 to-[#0C100E] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Eyebrow Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-white/90 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? FOUNDER_MESSAGE_DATA.eyebrowEn : FOUNDER_MESSAGE_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white tracking-tight">
            {language === 'en' ? FOUNDER_MESSAGE_DATA.headingEn : FOUNDER_MESSAGE_DATA.headingAr}
          </h2>
        </div>

        {/* Floating Translucent Glass Letter Panel */}
        <div className="glass-oasis-panel rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Accent light ray */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1EC672]/10 rounded-full blur-3xl pointer-events-none" />

          <Quote className="w-12 h-12 text-[#1EC672]/40 mb-6 rtl:rotate-180" />

          {/* Letter / Message Body with distinguished rhythm */}
          <div className="space-y-6 text-base sm:text-lg text-white/90 font-light leading-relaxed">
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'text-lg sm:text-xl font-normal text-white leading-relaxed' : ''}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Core Motto Callout with Saudi Oasis warmth */}
          <div className="my-10 py-5 px-6 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
            <span className="font-syne font-bold text-base sm:text-lg text-white tracking-wide">
              "{motto}"
            </span>
          </div>

          {/* Signature & Attribution */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left rtl:text-right">
            <div>
              <div className="text-xl font-syne font-bold text-white">
                {language === 'en' ? FOUNDER_MESSAGE_DATA.founderNameEn : FOUNDER_MESSAGE_DATA.founderNameAr}
              </div>
              <div className="text-xs text-[#1EC672] font-semibold tracking-wider uppercase mt-0.5">
                {language === 'en' ? FOUNDER_MESSAGE_DATA.founderRoleEn : FOUNDER_MESSAGE_DATA.founderRoleAr}
              </div>
            </div>

            <div className="font-serif italic text-2xl text-white/50 select-none tracking-wide">
              Amin Al Zahrani
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
