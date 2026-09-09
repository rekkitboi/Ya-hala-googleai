import React from 'react';
import { THREE_CONNECTED_PARTS_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { Sparkles, ArrowRight, Plus } from 'lucide-react';

interface ConnectedTriadSectionProps {
  language: Language;
}

export const ConnectedTriadSection: React.FC<ConnectedTriadSectionProps> = ({ language }) => {
  return (
    <section
      id="connected-triad"
      data-theme="dark"
      className="py-24 md:py-32 bg-[#1F3423] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1EC672]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? THREE_CONNECTED_PARTS_DATA.eyebrowEn : THREE_CONNECTED_PARTS_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white tracking-tight mb-4">
            {language === 'en' ? THREE_CONNECTED_PARTS_DATA.titleEn : THREE_CONNECTED_PARTS_DATA.titleAr}
          </h2>
          <div className="inline-block text-[#1EC672] font-syne font-bold text-lg md:text-xl tracking-wider uppercase">
            {language === 'en' ? THREE_CONNECTED_PARTS_DATA.subtitleEn : THREE_CONNECTED_PARTS_DATA.subtitleAr}
          </div>
        </div>

        {/* 3 Interconnected Pillars */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {THREE_CONNECTED_PARTS_DATA.parts.map((part, idx) => (
            <div
              key={part.number}
              className="bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative group hover:border-[#1EC672]/50 transition-all duration-300"
            >
              <div>
                <div className="text-4xl font-syne font-extrabold text-[#1EC672] mb-6">
                  {part.number}
                </div>

                <h3 className="text-2xl font-syne font-bold text-white mb-4 leading-snug">
                  {language === 'en' ? part.title : part.titleAr}
                </h3>

                <p className="text-base text-white/80 leading-relaxed font-light">
                  {language === 'en' ? part.description : part.descriptionAr}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-syne font-semibold text-[#1EC672]">
                <span>{language === 'en' ? 'Core Dimension' : 'البعد التأسيسي'}</span>
                <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
