import React, { useState } from 'react';
import { ABOUT_PURPOSE_DATA } from '../../data/aboutData';
import { Language } from '../../types';
import { Eye, Compass, Heart, Target, CheckCircle2, ChevronRight } from 'lucide-react';

interface OurPurposeSectionProps {
  language: Language;
}

export const OurPurposeSection: React.FC<OurPurposeSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<string>('vision');

  const getSectionIcon = (type: string) => {
    switch (type) {
      case 'vision':
        return <Eye className="w-5 h-5 text-[#1EC672]" />;
      case 'mission':
        return <Compass className="w-5 h-5 text-[#1EC672]" />;
      case 'values':
        return <Heart className="w-5 h-5 text-[#1EC672]" />;
      default:
        return <Target className="w-5 h-5 text-[#1EC672]" />;
    }
  };

  const activeSection = ABOUT_PURPOSE_DATA.find((s) => s.id === activeTab) || ABOUT_PURPOSE_DATA[0];

  return (
    <section
      id="purpose"
      data-theme="light"
      className="py-24 md:py-32 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1F3423]/70 uppercase tracking-[0.2em] font-syne font-semibold text-xs md:text-sm block mb-3">
            {language === 'en' ? 'OUR PURPOSE' : 'مرتكزاتنا وغايتنا'}
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-[#1F3423] tracking-tight">
            {language === 'en' ? 'The Foundations of Ya Hala' : 'الأسس التي يقوم عليها معهد يا هلا'}
          </h2>
          <div className="w-16 h-1 bg-[#1EC672] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {ABOUT_PURPOSE_DATA.map((item) => {
            const isCurrent = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs md:text-sm font-syne font-bold transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1F3423] text-white shadow-lg scale-105'
                    : 'bg-white/80 text-[#1F3423]/70 hover:bg-white hover:text-[#1F3423] border border-[#1F3423]/10'
                }`}
              >
                <span>{item.number}</span>
                <span>{language === 'en' ? item.eyebrow : item.eyebrowAr}</span>
              </button>
            );
          })}
        </div>

        {/* Active Purpose Editorial Hero Card */}
        <div className="bg-white rounded-3xl border border-[#1F3423]/10 p-8 md:p-14 shadow-[0_20px_50px_rgba(31,52,35,0.06)] relative overflow-hidden transition-all duration-500">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Col / Metadata */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#1F3423]/10 pb-6 lg:pb-0 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F3423]/5 flex items-center justify-center border border-[#1F3423]/10">
                  {getSectionIcon(activeSection.type)}
                </div>
                <div>
                  <span className="text-3xl font-syne font-extrabold text-[#1EC672]">
                    {activeSection.number}
                  </span>
                  <div className="text-xs uppercase tracking-widest text-[#1F3423]/60 font-syne font-semibold">
                    {language === 'en' ? activeSection.eyebrow : activeSection.eyebrowAr}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-syne font-bold text-[#1F3423] leading-snug">
                {language === 'en' ? activeSection.title : activeSection.titleAr}
              </h3>
            </div>

            {/* Right Col / Content & Points */}
            <div className="lg:col-span-8">
              <p className="text-lg md:text-xl text-[#1F3423]/85 leading-relaxed font-normal mb-8">
                {language === 'en' ? activeSection.summary : activeSection.summaryAr}
              </p>

              {activeSection.points && activeSection.points.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#1F3423]/10">
                  <h4 className="text-xs uppercase tracking-widest font-syne font-bold text-[#1F3423]/60 mb-4">
                    {language === 'en' ? 'Core Elements' : 'العناصر والمحاور الرئيسية'}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {activeSection.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#1F3423]/90 leading-snug">
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

        {/* 4 Connected Cards Summary Grid below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {ABOUT_PURPOSE_DATA.map((sec) => {
            const isCurrent = sec.id === activeTab;
            return (
              <div
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#1F3423] text-white border-[#1F3423] shadow-md'
                    : 'bg-white hover:bg-white/80 text-[#1F3423] border-[#1F3423]/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-syne font-bold tracking-widest ${isCurrent ? 'text-[#1EC672]' : 'text-[#1F3423]/50'}`}>
                      {sec.number}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isCurrent ? 'text-white/80' : 'text-[#1F3423]/70'}`}>
                      {language === 'en' ? sec.eyebrow : sec.eyebrowAr}
                    </span>
                  </div>
                  <h4 className={`text-base font-syne font-bold leading-snug line-clamp-2 ${isCurrent ? 'text-white' : 'text-[#1F3423]'}`}>
                    {language === 'en' ? sec.title : sec.titleAr}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isCurrent ? 'text-[#1EC672]' : 'text-[#1F3423]/70'}>
                    {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
