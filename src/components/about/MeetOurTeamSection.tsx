import React, { useState } from 'react';
import { TEAM_HEADER_DATA, YA_HALA_TEAM } from '../../data/teamData';
import { Language, TeamMember } from '../../types';
import { UserCheck, Sparkles } from 'lucide-react';

interface MeetOurTeamSectionProps {
  language: Language;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({ language }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Separate founder from advisory team to establish an elevated leadership hierarchy
  const founder = YA_HALA_TEAM[0];
  const supportingMembers = YA_HALA_TEAM.slice(1);

  // Neutral Branded Placeholder for founder or missing portraits
  const renderFounderPlaceholder = () => (
    <div className="w-full h-full min-h-[320px] rounded-2xl bg-gradient-to-br from-[#1F3423] to-[#0C100E] border border-white/15 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group shadow-lg">
      {/* Oasis ambient subtle glow */}
      <div className="absolute inset-0 bg-radial from-[#1EC672]/15 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center mb-4 shadow-md group-hover:border-[#1EC672]/50 transition-colors">
          <span className="font-syne font-extrabold text-3xl text-white tracking-widest">
            AZ
          </span>
        </div>
        <h4 className="text-xl font-syne font-bold text-white tracking-wide">
          {language === 'en' ? 'Amin Al Zahrani' : 'أمين الزهراني'}
        </h4>
        <span className="text-xs uppercase tracking-[0.2em] text-[#1EC672] font-syne font-semibold mt-1">
          {language === 'en' ? 'Founder & CEO' : 'المؤسس والرئيس التنفيذي'}
        </span>
        <div className="mt-4 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] text-white/70 font-syne">
          {language === 'en' ? 'Ya Hala Leadership' : 'قيادة يا هلا'}
        </div>
      </div>
    </div>
  );

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

        {/* 1. LEADERSHIP FEATURE: FOUNDER & CEO PROFILE */}
        <div className="bg-white rounded-3xl border border-[#1F3423]/10 p-8 sm:p-12 md:p-14 shadow-sm mb-16 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Founder Visual Frame (Neutral Branded Placeholder) */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="relative w-64 sm:w-72 md:w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                {founder.image && !failedImages[founder.id] ? (
                  <img
                    src={founder.image}
                    alt={language === 'en' ? founder.name : founder.nameAr}
                    onError={() => handleImageError(founder.id)}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  renderFounderPlaceholder()
                )}
              </div>
            </div>

            {/* Founder Details Column */}
            <div className="md:col-span-7 lg:col-span-8 text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3423]/5 border border-[#1F3423]/10 text-xs font-syne font-bold uppercase tracking-wider text-[#1F3423] mb-4">
                <Sparkles className="w-3 h-3 text-[#1EC672]" />
                <span>{language === 'en' ? 'FOUNDER PROFILE' : 'ملف المؤسس'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-bold text-[#1F3423] mb-2">
                {language === 'en' ? founder.name : founder.nameAr}
              </h3>

              <div className="text-sm sm:text-base text-[#1EC672] font-syne font-bold uppercase tracking-wider mb-6">
                {language === 'en' ? founder.role : founder.roleAr}
              </div>

              <p className="text-base sm:text-lg text-[#1F3423]/85 leading-relaxed font-light mb-6">
                {language === 'en' ? founder.bio : founder.bioAr}
              </p>

              <div className="pt-6 border-t border-[#1F3423]/10 flex flex-wrap items-center gap-6 text-xs text-[#1F3423]/70 font-syne font-semibold">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#1EC672]" />
                  <span>{language === 'en' ? 'Curriculum Architect' : 'مطور الرؤية التعليمية'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
                  <span>{language === 'en' ? 'Saudi Cultural Pioneer' : 'رائد الثقافة والتواصل'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. ADVISORY & MULTIDISCIPLINARY TEAM (Magazine-Style Editorial Grid) */}
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-[#1F3423]/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-syne font-bold text-[#1F3423]">
              {language === 'en' ? 'Academic & Cultural Advisors' : 'الهيئة الاستشارية والأكاديمية'}
            </h3>
            <span className="text-xs uppercase tracking-widest text-[#1F3423]/50 font-syne font-semibold">
              {language === 'en' ? 'Multidisciplinary Council' : 'فريق متعدد التخصصات'}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingMembers.map((member: TeamMember) => {
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
