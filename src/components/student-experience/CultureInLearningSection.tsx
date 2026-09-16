import React from 'react';
import { CULTURAL_LEARNING_DATA } from '../../data/studentExperienceData';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';
import {
  Sparkles,
  Coffee,
  Users,
  Calendar,
  Store,
  MapPin,
  Briefcase,
  Quote,
  Home,
} from 'lucide-react';

interface CultureInLearningSectionProps {
  language: Language;
}

export const CultureInLearningSection: React.FC<CultureInLearningSectionProps> = ({ language }) => {
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'majlis':
        return <Home className="w-4 h-4 text-[#1EC672]" />;
      case 'coffee':
        return <Coffee className="w-4 h-4 text-[#1EC672]" />;
      case 'customs':
        return <Users className="w-4 h-4 text-[#1EC672]" />;
      case 'occasions':
        return <Calendar className="w-4 h-4 text-[#1EC672]" />;
      case 'markets':
        return <Store className="w-4 h-4 text-[#1EC672]" />;
      case 'regions':
        return <MapPin className="w-4 h-4 text-[#1EC672]" />;
      case 'workplace':
        return <Briefcase className="w-4 h-4 text-[#1EC672]" />;
      case 'proverbs':
        return <Quote className="w-4 h-4 text-[#1EC672]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#1EC672]" />;
    }
  };

  return (
    <section
      id="culture-learning"
      data-theme="dark"
      className="py-20 md:py-32 bg-[#0C100E] text-white relative overflow-hidden"
    >
      {/* Background imagery with controlled dark overlay allowing photo to remain visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.aboutBg}
          alt="Saudi Heritage Cultural Ambience"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E]/90 via-[#0C100E]/70 to-[#0C100E]/95 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? CULTURAL_LEARNING_DATA.eyebrowEn : CULTURAL_LEARNING_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white tracking-tight mb-3">
            {language === 'en' ? CULTURAL_LEARNING_DATA.titleEn : CULTURAL_LEARNING_DATA.titleAr}
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            {language === 'en' ? CULTURAL_LEARNING_DATA.leadEn : CULTURAL_LEARNING_DATA.leadAr}
          </p>
        </div>

        {/* 8 Cultural Curriculum Themes Grid in Translucent Dark Glass */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CULTURAL_LEARNING_DATA.topics.map((topic, idx) => (
            <div
              key={topic.id}
              className="glass-subtle-dark border border-white/10 hover:border-[#1EC672]/40 rounded-xl p-5 transition-all duration-300 hover:bg-black/50 group flex flex-col justify-between text-left rtl:text-right"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-[#1EC672]/15 transition-colors">
                  {getTopicIcon(topic.id)}
                </div>

                <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-[#1EC672] transition-colors leading-snug">
                  {language === 'en' ? topic.title : topic.titleAr}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  {language === 'en' ? topic.description : topic.descriptionAr}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/10 text-[10px] font-syne font-medium text-white/40">
                {language === 'en' ? `Theme 0${idx + 1}` : `المحور 0${idx + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
