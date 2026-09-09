import React from 'react';
import { EXPERIENCES, ASSETS } from '../data/yaHalaData';
import { Experience, Language } from '../types';
import { ArrowRight, Compass, Sparkles, MapPin, Clock } from 'lucide-react';

interface ExperiencesSectionProps {
  language: Language;
  onSelectExperience: (exp: Experience) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  language,
  onSelectExperience,
}) => {
  const featured = EXPERIENCES[0];
  const secondary = EXPERIENCES.slice(1);

  return (
    <section
      id="experiences"
      data-theme="dark"
      className="relative py-24 md:py-36 bg-[#0C100E] text-white overflow-hidden"
    >
      {/* 1. Full-section cultural background image with restrained atmospheric overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.bujairiHero}
          alt="Saudi Historic Bujairi Heritage Architecture"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Restrained dark atmospheric overlay that lets imagery remain genuinely visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E]/90 via-[#0C100E]/70 to-[#0C100E]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[#1F3423]/35 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'CULTURAL IMMERSION' : 'الانغماس الثقافي الحي'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-4 tracking-tight text-white leading-tight">
            {language === 'en' ? 'Beyond the Classroom' : 'ما وراء جدران الفصول'}
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
            {language === 'en'
              ? 'Step into historical quarters, nomadic trails, and coastal alleyways. Language comes alive when paired with coffee traditions, desert campfires, and vibrant souqs.'
              : 'انطلق في مسارات الطريف التراثية، وأزقة جدة التاريخية، ومخيمات البادية الساحرة. تُكتسب اللغة بعمق حين تمتزج بحديث المجالس وعطر القهوة السعودية.'}
          </p>
        </div>

        {/* Asymmetrical Layout: Large Featured Experience + Translucent Glass Secondary Experiences */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* FEATURED EXPERIENCE: Heroic photograph-led anchor card */}
          {featured && (
            <div
              onClick={() => onSelectExperience(featured)}
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer min-h-[460px] md:min-h-[520px] flex flex-col justify-end p-8 sm:p-10 border border-white/15 shadow-xl transition-all duration-500 hover:border-[#1EC672]/50 hover:shadow-2xl"
            >
              {/* Background photo */}
              <img
                src={featured.image}
                alt={language === 'en' ? featured.title : featured.titleAr}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Integrated gradient overlay ensuring high text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/60 to-transparent pointer-events-none" />

              <div className="relative z-10 text-left rtl:text-right">
                {/* Meta pills */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1EC672] text-[#0C100E] text-xs font-syne font-bold uppercase tracking-wider">
                    {language === 'en' ? 'FEATURED JOURNEY' : 'الرحلة المميزة'}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium">
                    <MapPin className="w-3 h-3 text-[#1EC672]" />
                    {language === 'en' ? featured.location : featured.locationAr}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium">
                    <Clock className="w-3 h-3 text-[#1EC672]" />
                    {language === 'en' ? featured.duration : featured.durationAr}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold mb-3 text-white group-hover:text-[#1EC672] transition-colors leading-tight">
                  {language === 'en' ? featured.title : featured.titleAr}
                </h3>

                <p className="text-white/85 mb-6 text-sm sm:text-base leading-relaxed font-light max-w-xl line-clamp-3">
                  {language === 'en' ? featured.description : featured.descriptionAr}
                </p>

                <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-wider text-white group-hover:text-[#1EC672] transition-colors">
                  <span>{language === 'en' ? 'DISCOVER ITINERARY' : 'تفاصيل المسار'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            </div>
          )}

          {/* SECONDARY EXPERIENCES: Translucent dark-glass panels floating over visible background */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondary.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectExperience(item)}
                className="group p-6 sm:p-7 rounded-2xl glass-subtle-dark border border-white/10 hover:border-[#1EC672]/40 hover:bg-black/60 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left rtl:text-right"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-white/70 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#1EC672]" />
                      <span>{language === 'en' ? item.location : item.locationAr}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-medium">
                      {language === 'en' ? item.duration : item.durationAr}
                    </span>
                  </div>

                  {/* White heading with green hover transition */}
                  <h4 className="text-xl sm:text-2xl font-syne font-bold mb-2 text-white group-hover:text-[#1EC672] transition-colors leading-snug">
                    {language === 'en' ? item.title : item.titleAr}
                  </h4>

                  <p className="text-white/75 mb-4 text-xs sm:text-sm leading-relaxed font-light line-clamp-2">
                    {language === 'en' ? item.description : item.descriptionAr}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-wider text-white/90 group-hover:text-[#1EC672] transition-colors">
                    <span>{language === 'en' ? 'DISCOVER ITINERARY' : 'تفاصيل المسار'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                  </span>
                  <Compass className="w-4 h-4 text-white/40 group-hover:text-[#1EC672] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
