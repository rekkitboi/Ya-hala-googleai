import React, { useState, useEffect } from 'react';
import { EXPERIENCES } from '../data/yaHalaData';
import { Experience, Language } from '../types';
import { MapPin, Clock, ArrowRight, Compass, Sparkles } from 'lucide-react';

interface ExperiencesSectionProps {
  language: Language;
  onSelectExperience: (experience: Experience) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  language,
  onSelectExperience,
}) => {
  const featured = EXPERIENCES[0];
  const secondary = EXPERIENCES.slice(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('experiences-reveal');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiences"
      data-theme="light"
      data-header-theme="light"
      className="py-16 md:py-24 bg-[#F9F8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial composition: Large photograph with overlapping text panel */}
        <div id="experiences-reveal" className="flex flex-col lg:flex-row-reverse relative mb-20 lg:mb-28">
          {/* Large Photograph */}
          <div 
            className={`w-full lg:w-[65%] h-[50vh] lg:h-[70vh] relative z-0 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 rtl:-translate-x-12'
            }`}
          >
            {featured && (
              <img
                src={featured.image}
                alt={language === 'en' ? featured.title : featured.titleAr}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          
          {/* Text Panel crossing image boundary */}
          <div 
            className={`w-full lg:w-[45%] lg:-mr-[10%] lg:mt-16 rtl:lg:-mr-0 rtl:lg:-ml-[10%] relative z-10 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 rtl:translate-x-12'
            }`}
          >
            <div className="bg-white p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1EC672]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
                <span>{language === 'en' ? 'CULTURAL IMMERSION' : 'الانغماس الثقافي الحي'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold mb-6 tracking-tight text-[#1F3423] leading-tight">
                {language === 'en' ? 'Beyond the Classroom' : 'ما وراء جدران الفصول'}
              </h2>
              <p className="text-sm md:text-base text-[#1F3423]/80 font-light leading-relaxed mb-10">
                {language === 'en'
                  ? 'Step into historical quarters, nomadic trails, and coastal alleyways. Language comes alive when paired with coffee traditions, desert campfires, and vibrant souqs.'
                  : 'انطلق في مسارات الطريف التراثية، وأزقة جدة التاريخية، ومخيمات البادية الساحرة. تُكتسب اللغة بعمق حين تمتزج بحديث المجالس وعطر القهوة السعودية.'}
              </p>

              {/* Featured Experience integrated into the panel */}
              {featured && (
                <div className="border-t border-[#1F3423]/10 pt-8">
                  <button
                    type="button"
                    onClick={() => onSelectExperience(featured)}
                    className="w-full text-left rtl:text-right group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-lg p-2 -m-2"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#1F3423] text-white text-[10px] font-bold uppercase tracking-wider">
                        {language === 'en' ? 'FEATURED' : 'المميزة'}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[#1F3423]/70 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {language === 'en' ? featured.location : featured.locationAr}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-syne font-bold mb-3 text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                      {language === 'en' ? featured.title : featured.titleAr}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-wider text-[#1EC672]">
                      <span>{language === 'en' ? 'DISCOVER ITINERARY' : 'تفاصيل المسار'}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Secondary Experiences as text-led rows */}
        <div className="max-w-5xl mx-auto border-t border-[#1F3423]/10">
          {secondary.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectExperience(item)}
              className="w-full text-left rtl:text-right group flex flex-col md:flex-row items-center gap-6 md:gap-12 py-8 border-b border-[#1F3423]/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-lg"
            >
              <div className="w-full md:w-1/4 h-48 md:h-32 shrink-0 overflow-hidden rounded-md">
                <img 
                  src={item.image} 
                  alt={language === 'en' ? item.title : item.titleAr}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2 text-[#1F3423]/60 text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {language === 'en' ? item.location : item.locationAr}
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {language === 'en' ? item.duration : item.durationAr}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-syne font-bold mb-3 text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                  {language === 'en' ? item.title : item.titleAr}
                </h4>
                <p className="text-sm text-[#1F3423]/70 leading-relaxed font-light line-clamp-2 md:line-clamp-1">
                  {language === 'en' ? item.description : item.descriptionAr}
                </p>
              </div>
              <div className="md:shrink-0 flex items-center justify-end w-full md:w-auto mt-2 md:mt-0">
                <span className="w-10 h-10 rounded-full border border-[#1F3423]/20 flex items-center justify-center group-hover:bg-[#1EC672] group-hover:border-[#1EC672] group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 rtl:group-hover:rotate-45 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
