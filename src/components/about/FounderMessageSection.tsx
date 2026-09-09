import React from 'react';
import { FOUNDER_MESSAGE_DATA } from '../../data/aboutData';
import { Language } from '../../types';
import { Quote, Sparkles } from 'lucide-react';

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
      className="py-24 md:py-36 bg-[#1F3423] text-white relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1EC672]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0C100E]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Eyebrow badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? FOUNDER_MESSAGE_DATA.eyebrowEn : FOUNDER_MESSAGE_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight">
            {language === 'en' ? FOUNDER_MESSAGE_DATA.headingEn : FOUNDER_MESSAGE_DATA.headingAr}
          </h2>
        </div>

        {/* Editorial Statement Box - No photograph as mandated */}
        <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 md:p-16 shadow-2xl">
          <Quote className="w-12 h-12 text-[#1EC672]/30 mb-8 rtl:rotate-180" />

          {/* Letter / Message Body */}
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed">
            {paragraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 ? 'text-xl md:text-2xl font-normal text-white leading-relaxed' : ''}>
                {para}
              </p>
            ))}
          </div>

          {/* Core Motto Callout */}
          <div className="my-8 py-5 px-6 rounded-2xl bg-[#1EC672]/10 border border-[#1EC672]/25 text-center">
            <span className="font-syne font-extrabold text-lg sm:text-xl text-[#1EC672] tracking-wide">
              {motto}
            </span>
          </div>

          {/* Signature & Attribution */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xl font-syne font-bold text-white">
                {language === 'en' ? FOUNDER_MESSAGE_DATA.founderNameEn : FOUNDER_MESSAGE_DATA.founderNameAr}
              </div>
              <div className="text-sm text-white/70 font-medium">
                {language === 'en' ? FOUNDER_MESSAGE_DATA.founderRoleEn : FOUNDER_MESSAGE_DATA.founderRoleAr}
              </div>
            </div>

            <div className="font-serif italic text-2xl text-[#1EC672]/90 select-none">
              Amin Al Zahrani
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
