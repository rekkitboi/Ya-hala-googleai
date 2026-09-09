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
        return <Home className="w-5 h-5 text-[#1EC672]" />;
      case 'coffee':
        return <Coffee className="w-5 h-5 text-[#1EC672]" />;
      case 'customs':
        return <Users className="w-5 h-5 text-[#1EC672]" />;
      case 'occasions':
        return <Calendar className="w-5 h-5 text-[#1EC672]" />;
      case 'markets':
        return <Store className="w-5 h-5 text-[#1EC672]" />;
      case 'regions':
        return <MapPin className="w-5 h-5 text-[#1EC672]" />;
      case 'workplace':
        return <Briefcase className="w-5 h-5 text-[#1EC672]" />;
      case 'proverbs':
        return <Quote className="w-5 h-5 text-[#1EC672]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#1EC672]" />;
    }
  };

  return (
    <section
      id="culture-learning"
      data-theme="dark"
      className="py-24 md:py-36 bg-[#0C100E] text-white relative overflow-hidden"
    >
      {/* Background imagery with subtle overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.aboutBg}
          alt="Saudi Heritage Cultural Ambience"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0C100E]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E] via-transparent to-[#0C100E] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? CULTURAL_LEARNING_DATA.eyebrowEn : CULTURAL_LEARNING_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white tracking-tight mb-6">
            {language === 'en' ? CULTURAL_LEARNING_DATA.titleEn : CULTURAL_LEARNING_DATA.titleAr}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
            {language === 'en' ? CULTURAL_LEARNING_DATA.leadEn : CULTURAL_LEARNING_DATA.leadAr}
          </p>
        </div>

        {/* 8 Cultural Curriculum Themes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CULTURAL_LEARNING_DATA.topics.map((topic, idx) => (
            <div
              key={topic.id}
              className="bg-white/5 border border-white/10 hover:border-[#1EC672]/40 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#1EC672]/20 transition-colors">
                  {getTopicIcon(topic.id)}
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-2 group-hover:text-[#1EC672] transition-colors">
                  {language === 'en' ? topic.title : topic.titleAr}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {language === 'en' ? topic.description : topic.descriptionAr}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-syne font-semibold text-white/40">
                {language === 'en' ? `Theme 0${idx + 1}` : `المحور 0${idx + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
