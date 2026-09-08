import React from 'react';
import { EXPERIENCES, ASSETS } from '../data/yaHalaData';
import { Experience, Language } from '../types';
import { ArrowRight, Compass, Sparkles, MapPin } from 'lucide-react';

interface ExperiencesSectionProps {
  language: Language;
  onSelectExperience: (experience: Experience) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  language,
  onSelectExperience,
}) => {
  const featured = EXPERIENCES[0];
  const secondaryList = EXPERIENCES.slice(1);

  return (
    <section
      id="experiences"
      data-theme="dark"
      className="relative py-32 bg-[#1F3423] text-white overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.bujairiHero}
          alt="Bujairi Hero"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3423] via-transparent to-[#1F3423]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[#1EC672] uppercase tracking-widest font-semibold text-xs md:text-sm mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'CULTURAL EXPERIENCES' : 'التجارب الثقافية الميدانية'}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-syne font-bold max-w-xl leading-tight">
              {language === 'en' ? 'Saudi Culture, Experienced' : 'عِش الثقافة السعودية بحقيقتها'}
            </h2>
          </div>

          <button
            onClick={() => onSelectExperience(featured)}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white font-semibold hover:text-[#1EC672] transition-colors pb-2 border-b border-white/30 hover:border-[#1EC672] text-xs md:text-sm tracking-wider uppercase font-syne"
          >
            <span>{language === 'en' ? 'VIEW ALL EXPERIENCES' : 'استعراض كافة الرحلات'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        {/* 2-Column Experience Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Featured Card */}
          <div
            onClick={() => onSelectExperience(featured)}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-2xl border border-white/10"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-[#1F3423]/85 backdrop-blur-md text-[#1EC672] text-xs font-bold tracking-wider rounded-full uppercase">
                  {language === 'en' ? featured.tag : featured.tagAr}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/80 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1EC672]" />
                  {language === 'en' ? featured.location : featured.locationAr}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold mb-3 text-white">
                {language === 'en' ? featured.title : featured.titleAr}
              </h3>

              <p className="text-white/85 mb-6 max-w-md text-sm md:text-base leading-relaxed font-light">
                {language === 'en' ? featured.description : featured.descriptionAr}
              </p>

              <span className="inline-flex items-center gap-2 text-[#1EC672] font-semibold text-xs md:text-sm group-hover:text-white transition-colors uppercase tracking-wider font-syne">
                <span>{language === 'en' ? 'EXPLORE THIS EXPERIENCE' : 'استكشف هذه التجربة'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </span>
            </div>
          </div>

          {/* Secondary Grid (Stacked Experiences) */}
          <div className="grid grid-rows-2 gap-6">
            {secondaryList.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectExperience(item)}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer group shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold text-[#1EC672] tracking-widest">
                    {language === 'en' ? item.tag : item.tagAr}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-xs text-white/70 font-light">
                    {language === 'en' ? item.duration : item.durationAr}
                  </span>
                </div>

                <h4 className="text-2xl font-syne font-bold mb-3 text-[#1EC672] group-hover:text-white transition-colors">
                  {language === 'en' ? item.title : item.titleAr}
                </h4>

                <p className="text-white/75 mb-5 text-sm leading-relaxed font-light line-clamp-2">
                  {language === 'en' ? item.description : item.descriptionAr}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:translate-x-2 transition-transform rtl:group-hover:-translate-x-2">
                    <span>{language === 'en' ? 'DISCOVER ITINERARY' : 'تفاصيل المسار'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </span>
                  <Compass className="w-5 h-5 text-white/40 group-hover:text-[#1EC672] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
