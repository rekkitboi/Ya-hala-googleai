import React, { useState } from 'react';
import { ABOUT_PURPOSE_DATA } from '../../data/aboutData';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';
import { Eye, Compass, Heart, Target, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface OurPurposeSectionProps {
  language: Language;
}

export const OurPurposeSection: React.FC<OurPurposeSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<string>('vision');

  const getSectionIcon = (type: string) => {
    switch (type) {
      case 'vision':
        return <Eye className="w-4 h-4 text-[#1EC672]" />;
      case 'mission':
        return <Compass className="w-4 h-4 text-[#1EC672]" />;
      case 'values':
        return <Heart className="w-4 h-4 text-[#1EC672]" />;
      default:
        return <Target className="w-4 h-4 text-[#1EC672]" />;
    }
  };

  const activeSection = ABOUT_PURPOSE_DATA.find((s) => s.id === activeTab) || ABOUT_PURPOSE_DATA[0];

  return (
    <section
      id="purpose"
      data-theme="light"
      className="py-24 md:py-36 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      {/* Subtle architectural oasis texture behind section */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block">
        <img
          src={ASSETS.oasisStoneTerrace}
          alt=""
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F9F8F5]/80 to-[#F9F8F5]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1F3423]/70 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'OUR PURPOSE & FOUNDATIONS' : 'مرتكزاتنا وغايتنا المؤسسية'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'The Foundations of Ya Hala' : 'الأسس التي يقوم عليها معهد يا هلا'}
          </h2>
          <p className="text-base sm:text-lg text-[#1F3423]/75 leading-relaxed font-light">
            {language === 'en'
              ? 'Rooted in Saudi cultural authenticity, educational excellence, and human connection.'
              : 'راسخة في أصالة الثقافة السعودية والتميز التعليمي والتواصل الإنساني العميق.'}
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {ABOUT_PURPOSE_DATA.map((item) => {
            const isCurrent = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-syne font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1F3423] text-white shadow-md'
                    : 'bg-white/80 text-[#1F3423]/75 hover:bg-white hover:text-[#1F3423] border border-[#1F3423]/10'
                }`}
              >
                <span className={`text-[10px] ${isCurrent ? 'text-[#1EC672]' : 'text-[#1F3423]/40'}`}>
                  {item.number}
                </span>
                <span>{language === 'en' ? item.eyebrow : item.eyebrowAr}</span>
              </button>
            );
          })}
        </div>

        {/* Active Purpose Editorial Hero Panel */}
        <div className="bg-white rounded-3xl border border-[#1F3423]/10 p-8 sm:p-12 md:p-14 shadow-sm relative overflow-hidden transition-all duration-300 mb-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col / Metadata */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#1F3423]/10 pb-8 lg:pb-0 lg:pr-10 rtl:lg:pr-0 rtl:lg:pl-10">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#1F3423]/5 flex items-center justify-center border border-[#1F3423]/10">
                  {getSectionIcon(activeSection.type)}
                </div>
                <div>
                  <span className="text-2xl font-syne font-bold text-[#1F3423]">
                    {activeSection.number}
                  </span>
                  <div className="text-xs uppercase tracking-wider text-[#1EC672] font-syne font-bold">
                    {language === 'en' ? activeSection.eyebrow : activeSection.eyebrowAr}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-syne font-bold text-[#1F3423] leading-snug">
                {language === 'en' ? activeSection.title : activeSection.titleAr}
              </h3>
            </div>

            {/* Right Col / Content & Points */}
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-[#1F3423]/85 leading-relaxed font-light mb-8">
                {language === 'en' ? activeSection.summary : activeSection.summaryAr}
              </p>

              {activeSection.points && activeSection.points.length > 0 && (
                <div className="pt-6 border-t border-[#1F3423]/10">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
                    <h4 className="text-xs uppercase tracking-widest font-syne font-bold text-[#1F3423]/70">
                      {language === 'en' ? 'Core Principles & Pillars' : 'المحاور والمرتكزات الأساسية'}
                    </h4>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {activeSection.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-[#F9F8F5] border border-[#1F3423]/5 hover:border-[#1EC672]/30 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#1F3423]/85 leading-snug font-medium">
                          {language === 'en' ? pt.en : pt.ar}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Connected Cards Summary Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ABOUT_PURPOSE_DATA.map((sec) => {
            const isCurrent = sec.id === activeTab;
            return (
              <div
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-[#1F3423] shadow-md ring-1 ring-[#1F3423]/20'
                    : 'bg-white/70 hover:bg-white text-[#1F3423] border-[#1F3423]/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-syne font-bold ${isCurrent ? 'text-[#1EC672]' : 'text-[#1F3423]/50'}`}>
                      {sec.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F3423]/60 font-syne">
                      {language === 'en' ? sec.eyebrow : sec.eyebrowAr}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-syne font-bold leading-snug text-[#1F3423]">
                    {language === 'en' ? sec.title : sec.titleAr}
                  </h4>
                </div>
                
                <div className="mt-5 pt-3 border-t border-[#1F3423]/5 flex items-center justify-between text-xs font-semibold">
                  <span className={isCurrent ? 'text-[#1EC672]' : 'text-[#1F3423]/60'}>
                    {language === 'en' ? 'Explore Pillar' : 'استكشف المرتكز'}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#1EC672] rtl:rotate-180" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
