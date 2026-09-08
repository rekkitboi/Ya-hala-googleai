import React, { useState } from 'react';
import { ASSETS, YA_HALA_PILLARS } from '../data/yaHalaData';
import { Language } from '../types';
import { Sparkles, CheckCircle2, ChevronRight, BookOpen, Target, Eye, Compass } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-[#1EC672]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#1EC672]" />;
      case 2:
        return <Eye className="w-5 h-5 text-[#1EC672]" />;
      default:
        return <Target className="w-5 h-5 text-[#1EC672]" />;
    }
  };

  return (
    <section
      id="why"
      data-theme="dark"
      className="relative py-28 md:py-36 bg-[#0C100E] text-white overflow-hidden"
    >
      {/* Background with texture & subtle radial vignetting */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url("${ASSETS.aboutBg}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E] via-transparent to-[#0C100E] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F3423]/40 via-[#0C100E]/80 to-[#0C100E] pointer-events-none" />

      {/* Radiant glow behind central emblem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1EC672]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block text-[#1EC672] uppercase tracking-[0.22em] font-medium text-xs md:text-sm mb-4">
            {language === 'en' ? 'ABOUT YA HALA' : 'عن معهد يا هلا'}
          </div>
          <h2 className="text-4xl md:text-6xl font-syne font-extrabold mb-6 leading-tight tracking-tight">
            {language === 'en' ? 'More Than a Language School' : 'أكثر من مجرد معهد لغات'}
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
            {language === 'en'
              ? 'Ya Hala is a Saudi language and cultural institute that helps learners speak the language used in everyday life while building a genuine connection with the people, places, and traditions of the Kingdom.'
              : 'يا هلا هو معهد سعودي رائد لتعليم اللهجة والثقافة الحية، يربط المتعلم بحديث الناس اليومي وأصالة المجتمع وكرم الضيافة وتفاصيل الحياة في مدن المملكة.'}
          </p>
        </div>

        {/* Center Logo Emblem */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <div className="relative w-64 md:w-80 h-24 flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group hover:border-[#1EC672]/50 transition-all">
            <img
              src={ASSETS.logoWhite}
              alt="Ya Hala Emblem"
              className="max-h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(30,198,114,0.3)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute -bottom-3 px-3 py-0.5 rounded-full bg-[#1EC672] text-[#1F3423] text-[10px] font-bold font-syne tracking-wider uppercase">
              {language === 'en' ? 'Core Foundation' : 'الأساس المتين'}
            </span>
          </div>
        </div>

        {/* The 4 Architectural Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {YA_HALA_PILLARS.map((pillar, idx) => {
            const isSelected = activeCardIndex === idx;
            return (
              <div
                key={pillar.number}
                onClick={() => setActiveCardIndex(isSelected ? null : idx)}
                className={`group relative rounded-3xl p-7 md:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1F3423]/90 border-2 border-[#1EC672] shadow-2xl scale-[1.02]'
                    : 'glass-card-refined hover:bg-white/10 hover:border-white/25 hover:-translate-y-1'
                }`}
              >
                {/* Pillar Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl md:text-3xl font-syne font-extrabold text-[#1EC672] tracking-tight">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#1EC672]/20 transition-colors">
                      {getPillarIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-syne font-bold mb-3 text-white">
                    {language === 'en' ? pillar.title : pillar.titleAr}
                  </h3>

                  <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                    {language === 'en' ? pillar.description : pillar.descriptionAr}
                  </p>
                </div>

                {/* Pillar Bottom indicator */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#1EC672]">
                  <span>{language === 'en' ? 'Key Principle' : 'ركيزة أساسية'}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md grid sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1EC672] shrink-0" />
            <span className="text-sm font-medium text-white/90">
              {language === 'en' ? 'Living Dialects (Najdi & Hejazi)' : 'اللهجات الحية (النجدية والحجازية)'}
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1EC672] shrink-0" />
            <span className="text-sm font-medium text-white/90">
              {language === 'en' ? 'Native Saudi Cultural Mentors' : 'مرشدون لغويون سعوديون متمرسون'}
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1EC672] shrink-0" />
            <span className="text-sm font-medium text-white/90">
              {language === 'en' ? 'Field Immersion in Souqs & Majalis' : 'تطبيق ميداني في الأسواق والمجالس'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
