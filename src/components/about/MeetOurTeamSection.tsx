import React, { useState } from 'react';
import { TEAM_HEADER_DATA, YA_HALA_TEAM } from '../../data/teamData';
import { Language, TeamMember } from '../../types';


interface MeetOurTeamSectionProps {
  language: Language;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({ language }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="team"
      data-theme="light"
      className="py-24 md:py-36 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1F3423]/70 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? TEAM_HEADER_DATA.eyebrowEn : TEAM_HEADER_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? TEAM_HEADER_DATA.headingEn : TEAM_HEADER_DATA.headingAr}
          </h2>
          <p className="text-base sm:text-lg text-[#1F3423]/80 leading-relaxed font-light">
            {language === 'en' ? TEAM_HEADER_DATA.introEn : TEAM_HEADER_DATA.introAr}
          </p>
        </div>

        {/* TEAM GRID (Unified) */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {YA_HALA_TEAM.map((member: TeamMember) => {
              const hasImage = member.image && !failedImages[member.id];

              return (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-[#1F3423]/10 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#1EC672]/40 transition-all duration-300 group text-left rtl:text-right"
                >
                  <div>
                    {/* Editorial Photographic Portrait Frame */}
                    <div className="w-full aspect-[4/5] overflow-hidden bg-[#0C100E] relative">
                      {hasImage ? (
                        <img
                          src={member.image}
                          alt={language === 'en' ? member.name : member.nameAr}
                          onError={() => handleImageError(member.id)}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F9F8F5]">
                          <div className="w-16 h-16 rounded-full bg-white border border-[#1F3423]/10 flex items-center justify-center mb-3">
                            <span className="font-syne font-bold text-xl text-[#1F3423]">
                              {member.name.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className="text-sm font-syne font-semibold text-[#1F3423]">
                            {language === 'en' ? member.name : member.nameAr}
                          </span>
                        </div>
                      )}
                      
                      {/* Subtle gradient overlay on portrait bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-[11px] font-syne font-semibold uppercase tracking-wider text-[#1EC672]">
                          {language === 'en' ? member.role : member.roleAr}
                        </div>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-5">
                      <h4 className="text-base sm:text-lg font-syne font-bold text-[#1F3423] mb-2 group-hover:text-[#1EC672] transition-colors">
                        {language === 'en' ? member.name : member.nameAr}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#1F3423]/75 leading-relaxed font-light line-clamp-4">
                        {language === 'en' ? member.bio : member.bioAr}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-4 pt-3 border-t border-[#1F3423]/5 flex items-center justify-between text-[11px] text-[#1F3423]/50 font-syne">
                    <span>{language === 'en' ? 'Ya Hala Advisory' : 'استشاري يا هلا'}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]/70" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
