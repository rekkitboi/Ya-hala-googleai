import React, { useState } from 'react';
import { TEAM_HEADER_DATA, YA_HALA_TEAM } from '../../data/teamData';
import { Language, TeamMember } from '../../types';
import { UserCheck, Sparkles, Building2, BookOpen, Compass, FileText, HelpCircle } from 'lucide-react';

interface MeetOurTeamSectionProps {
  language: Language;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({ language }) => {
  const [founderImgError, setFounderImgError] = useState(false);

  // Separate founder from supporting team to give strongest visual hierarchy
  const founder = YA_HALA_TEAM[0];
  const supportingMembers = YA_HALA_TEAM.slice(1);

  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'mohsen-alqaisy':
        return <BookOpen className="w-5 h-5 text-[#1EC672]" />;
      case 'muna-al-baltan':
        return <Compass className="w-5 h-5 text-[#1EC672]" />;
      case 'abdulrahman-alsaramy':
        return <FileText className="w-5 h-5 text-[#1EC672]" />;
      default:
        return <HelpCircle className="w-5 h-5 text-[#1EC672]" />;
    }
  };

  const renderPlaceholderAvatar = (member: TeamMember) => {
    const initials = member.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2);

    return (
      <div className="w-full h-full min-h-[160px] rounded-2xl bg-gradient-to-br from-[#1F3423] to-[#0C100E] border border-white/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
        {/* Subtle geometric pattern lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1EC672_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="w-16 h-16 rounded-full bg-white/5 border border-[#1EC672]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          {getRoleIcon(member.id)}
        </div>
        <span className="font-syne font-bold text-xl text-white tracking-widest uppercase">
          {initials}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/50 font-syne mt-1">
          {language === 'en' ? 'Curated Profile' : 'عضو الفريق'}
        </span>
      </div>
    );
  };

  return (
    <section
      id="team"
      data-theme="light"
      className="py-24 md:py-36 bg-[#F9F8F5] text-[#1F3423] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/5 border border-[#1F3423]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1F3423]/80 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? TEAM_HEADER_DATA.eyebrowEn : TEAM_HEADER_DATA.eyebrowAr}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? TEAM_HEADER_DATA.headingEn : TEAM_HEADER_DATA.headingAr}
          </h2>
          <p className="text-base md:text-lg text-[#1F3423]/75 leading-relaxed font-light max-w-2xl mx-auto">
            {language === 'en' ? TEAM_HEADER_DATA.introEn : TEAM_HEADER_DATA.introAr}
          </p>
        </div>

        {/* 1. FEATURED FOUNDER & CEO PROFILE (Strongest Visual Hierarchy) */}
        <div className="mb-14">
          <div className="bg-[#1F3423] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden border border-[#1EC672]/20">
            {/* Ambient emerald glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1EC672]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Founder Image Column */}
              <div className="md:col-span-5 lg:col-span-4 flex justify-center">
                <div className="relative w-64 sm:w-72 md:w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#1EC672]/30 shadow-2xl bg-[#0C100E]">
                  {!founderImgError ? (
                    <img
                      src={founder.image}
                      alt={language === 'en' ? founder.name : founder.nameAr}
                      onError={() => setFounderImgError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1F3423] to-[#0C100E]">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <Building2 className="w-10 h-10 text-[#1EC672]" />
                      </div>
                      <span className="text-xl font-syne font-bold text-white">Amin Al Zahrani</span>
                      <span className="text-xs text-[#1EC672] font-semibold mt-1">Founder & CEO</span>
                    </div>
                  )}

                  {/* Confirmed Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-[#0C100E]/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-syne font-semibold text-white">
                    <span>{language === 'en' ? 'Founder & CEO' : 'المؤسس والرئيس التنفيذي'}</span>
                    <span className="w-2 h-2 rounded-full bg-[#1EC672] inline-block" />
                  </div>
                </div>
              </div>

              {/* Founder Details Column */}
              <div className="md:col-span-7 lg:col-span-8">
                <div className="inline-block px-3 py-1 rounded-full bg-[#1EC672]/20 text-[#1EC672] text-xs font-syne font-bold uppercase tracking-widest mb-4">
                  {language === 'en' ? 'LEADERSHIP' : 'القيادة والتأسيس'}
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white mb-2">
                  {language === 'en' ? founder.name : founder.nameAr}
                </h3>

                <div className="text-base sm:text-lg text-[#1EC672] font-syne font-bold mb-6">
                  {language === 'en' ? founder.role : founder.roleAr}
                </div>

                <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-light mb-8">
                  {language === 'en' ? founder.bio : founder.bioAr}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10 text-xs text-white/70 font-syne">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <UserCheck className="w-4 h-4 text-[#1EC672]" />
                    <span>{language === 'en' ? 'Academic & Cultural Direction' : 'التوجيه الأكاديمي والثقافي'}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <Building2 className="w-4 h-4 text-[#1EC672]" />
                    <span>{language === 'en' ? 'Ya Hala Institute' : 'معهد يا هلا'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SUPPORTING TEAM MEMBERS (Exact order mandated) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportingMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-[#1F3423]/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Temporary Avatar Placeholder (tasteful abstract, no fake AI faces) */}
                <div className="w-full aspect-[4/3] mb-5 overflow-hidden rounded-xl">
                  {renderPlaceholderAvatar(member)}
                </div>

                {/* Member Name */}
                <h4 className="text-xl font-syne font-bold text-[#1F3423] mb-1 group-hover:text-[#1EC672] transition-colors">
                  {language === 'en' ? member.name : member.nameAr}
                </h4>

                {/* Member Role */}
                <div className="text-xs font-syne font-bold text-[#1F3423]/60 uppercase tracking-wider mb-4">
                  {language === 'en' ? member.role : member.roleAr}
                </div>

                {/* Member Bio */}
                <p className="text-sm text-[#1F3423]/75 leading-relaxed font-light">
                  {language === 'en' ? member.bio : member.bioAr}
                </p>
              </div>

              {/* Status Note Footer */}
              <div className="mt-6 pt-4 border-t border-[#1F3423]/5 flex items-center justify-between text-[11px] text-[#1F3423]/50 font-syne">
                <span>{language === 'en' ? 'Ya Hala Advisory' : 'الفريق الاستشاري'}</span>
                {member.bioStatus === 'requires-confirmation' && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#1F3423]/5 text-[#1F3423]/60">
                    {language === 'en' ? 'Specialist' : 'مختص'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
