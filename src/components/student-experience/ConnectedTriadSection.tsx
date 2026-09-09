import React from 'react';
import { THREE_CONNECTED_PARTS_DATA } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { Sparkles } from 'lucide-react';

interface ConnectedTriadSectionProps {
  language: Language;
}

export const ConnectedTriadSection: React.FC<ConnectedTriadSectionProps> = ({ language }) => {
  return (
    <section
      id="connected-triad"
      data-theme="dark"
      className="py-20 md:py-32 bg-[#0C100E] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? THREE_CONNECTED_PARTS_DATA.eyebrowEn : THREE_CONNECTED_PARTS_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white tracking-tight mb-2">
            {language === 'en' ? THREE_CONNECTED_PARTS_DATA.titleEn : THREE_CONNECTED_PARTS_DATA.titleAr}
          </h2>
          <div className="text-xs sm:text-sm font-syne font-semibold text-[#1EC672] uppercase tracking-wider">
            {language === 'en' ? THREE_CONNECTED_PARTS_DATA.subtitleEn : THREE_CONNECTED_PARTS_DATA.subtitleAr}
          </div>
        </div>

        {/* 3 Interconnected Pillars (Translucent Dark Glass) */}
        <div className="grid md:grid-cols-3 gap-5 relative">
          {THREE_CONNECTED_PARTS_DATA.parts.map((part) => (
            <div
              key={part.number}
              className="glass-subtle-dark border border-white/10 rounded-xl p-7 flex flex-col justify-between group hover:border-[#1EC672]/40 transition-all duration-300 text-left rtl:text-right"
            >
              <div>
                <div className="text-2xl font-syne font-bold text-[#1EC672] mb-4">
                  {part.number}
                </div>

                <h3 className="text-lg sm:text-xl font-syne font-bold text-white mb-3 leading-snug">
                  {language === 'en' ? part.title : part.titleAr}
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {language === 'en' ? part.description : part.descriptionAr}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-syne font-medium text-white/50">
                <span>{language === 'en' ? 'Core Dimension' : 'البعد التأسيسي'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
