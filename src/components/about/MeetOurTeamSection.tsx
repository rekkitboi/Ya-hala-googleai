import React, { useState, useEffect, useRef } from 'react';
import { YA_HALA_TEAM, TEAM_HEADER_DATA } from '../../data/teamData';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';

interface MeetOurTeamSectionProps {
  language: Language;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({ language }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="team"
      data-theme="dark"
      className="py-24 md:py-36 relative overflow-hidden text-white"
    >
      {/* Shared Cinematic Environment Background */}
      <div className="absolute inset-0 z-0 bg-[#0C100E]">
        <img
          src={ASSETS.teamCinematic}
          alt=""
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E] via-[#0C100E]/70 to-[#0C100E]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-[10px]">
              {language === 'en' ? TEAM_HEADER_DATA.eyebrowEn : TEAM_HEADER_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold mb-6 tracking-tight">
            {language === 'en' ? TEAM_HEADER_DATA.headingEn : TEAM_HEADER_DATA.headingAr}
          </h2>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed font-light">
            {language === 'en' ? TEAM_HEADER_DATA.introEn : TEAM_HEADER_DATA.introAr}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {YA_HALA_TEAM.map((member) => {
            const isExpanded = expandedId === member.id;
            const needsTransparent = member.imageStatus !== 'confirmed';

            return (
              <div
                key={member.id}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[3/4] md:aspect-[3/4] cursor-pointer"
                onClick={() => toggleExpand(member.id)}
                onMouseEnter={() => setExpandedId(member.id)}
                onMouseLeave={() => setExpandedId(null)}
              >
                {/* Portrait */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={member.image}
                    alt={language === 'en' ? member.name : member.nameAr}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isExpanded ? 'scale-105 opacity-90' : 'scale-100 opacity-100'
                    }`}
                  />
                  {needsTransparent && (
                    <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-black/60 backdrop-blur-sm text-[8px] uppercase tracking-wider px-2 py-1 rounded text-white/50 border border-white/10">
                      Placeholder
                    </div>
                  )}
                  {/* Controlled Lower Gradient for text visibility */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/80 to-transparent transition-opacity duration-300 ${
                    isExpanded ? 'opacity-100 h-full' : 'opacity-90 h-3/5 top-auto bottom-0'
                  }`} />
                </div>

                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-syne font-bold text-white mb-1">
                    {language === 'en' ? member.name : member.nameAr}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#1EC672] font-bold mb-3">
                    {language === 'en' ? member.role : member.roleAr}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-white/80 font-light leading-relaxed line-clamp-4">
                      {language === 'en' ? member.bio : member.bioAr}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
