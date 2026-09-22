import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TEAM_HEADER_DATA, YA_HALA_TEAM } from '../../data/teamData';
import { Language, TeamMember } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface MeetOurTeamSectionProps {
  language: Language;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({ language }) => {
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isEn = language === 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="team"
      data-theme="dark"
      data-header-theme="dark"
      className="relative py-12 md:py-16 bg-[#0C100E] text-white z-10 border-t border-[#1F3423]/40 overflow-hidden"
    >
      {/* Atmospheric Garden Background with Controlled Quieted Overlays */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <img
          src={ASSETS.oasisGardenPassage}
          alt=""
          className="w-full h-full object-cover scale-[1.02] opacity-[0.45] pointer-events-none select-none"
          style={{ objectPosition: 'center 40%' }}
          referrerPolicy="no-referrer"
          aria-hidden="true"
        />

        {/* 1. Deep forest green wash */}
        <div className="absolute inset-0 bg-[#0A160E]/45" aria-hidden="true" />

        {/* 2. Vertical atmospheric depth gradient: Keeps upper architectural garden visible */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0C100E]/35 via-[#0C100E]/20 to-[#0C100E]/60"
          aria-hidden="true"
        />

        {/* 3. Quieted stage backdrop behind portrait lineup to prevent foliage competition */}
        <div
          className="absolute bottom-16 sm:bottom-20 left-0 right-0 h-72 sm:h-80 bg-gradient-to-t from-[#0C100E]/75 via-[#0C100E]/35 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* 4. Localized bottom dark gradient behind names, roles, and descriptions */}
        <div
          className="absolute bottom-0 left-0 right-0 h-44 sm:h-52 bg-gradient-to-t from-[#0C100E]/95 via-[#0C100E]/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* 5. Seamless bottom transition fading the garden photograph into shared brand color #0C100E */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-36 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/85 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Ambient Emerald Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[#1EC672]/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Refined Section Header: Connected, balanced two-column composition */}
        <div className="flex flex-col md:flex-row md:items-end gap-5 md:gap-12 lg:gap-16 xl:gap-20 mb-8 md:mb-10 text-left rtl:text-right max-w-6xl">
          <div className="max-w-xl flex-1">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#1EC672]" aria-hidden="true" />
              <span
                className={`text-[#1EC672] font-semibold text-xs ${
                  isEn ? 'font-syne uppercase tracking-[0.2em]' : 'font-arabic'
                }`}
              >
                {isEn ? TEAM_HEADER_DATA.eyebrowEn : TEAM_HEADER_DATA.eyebrowAr}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white tracking-tight leading-[1.15]">
              {isEn ? TEAM_HEADER_DATA.headingEn : TEAM_HEADER_DATA.headingAr}
            </h2>
          </div>

          <div className="max-w-md md:max-w-lg md:pb-1">
            <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
              {isEn ? TEAM_HEADER_DATA.introEn : TEAM_HEADER_DATA.introAr}
            </p>
          </div>
        </div>

        {/* SHARED PORTRAIT STAGE */}
        <div className="relative pt-2 pb-2">
          {/* Subtle Shared Grounding Baseline Shadow Across Entire Stage */}
          <div
            className="absolute bottom-24 left-0 right-0 h-8 bg-black/60 blur-xl rounded-full opacity-60 pointer-events-none hidden lg:block"
            aria-hidden="true"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="flex lg:grid lg:grid-cols-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar items-end gap-5 sm:gap-6 lg:gap-3 xl:gap-5 pb-3 lg:pb-0 w-full"
          >
            {YA_HALA_TEAM.map((member: TeamMember) => {
              const isHovered = hoveredMemberId === member.id;
              const isOtherHovered =
                hoveredMemberId !== null && hoveredMemberId !== member.id;

              const restingScale = member.portraitScale ?? 1;
              const currentScale =
                isHovered && !prefersReducedMotion
                  ? restingScale + 0.03
                  : restingScale;

              const translateX = member.portraitTranslateX || '0%';
              const translateY = member.portraitTranslateY || '0%';

              return (
                <motion.article
                  key={member.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredMemberId(member.id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                  onFocus={() => setHoveredMemberId(member.id)}
                  onBlur={() => setHoveredMemberId(null)}
                  tabIndex={0}
                  className={`group relative flex-none w-[76vw] max-w-[300px] sm:w-[270px] lg:w-auto snap-center outline-none flex flex-col items-center text-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1EC672] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C100E] rounded-2xl p-1.5 ${
                    isOtherHovered ? 'opacity-85' : 'opacity-100'
                  }`}
                >
                  {/* Portrait Stage Frame */}
                  <div className="relative w-full h-[260px] sm:h-[280px] lg:h-[300px] xl:h-[320px] flex items-end justify-center">
                    {/* Primary Contact Shadow under cutout */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130px] sm:w-[150px] h-3 bg-black/80 blur-[6px] rounded-[100%] pointer-events-none z-0"
                      aria-hidden="true"
                    />

                    {/* Ambient Grounding Shadow */}
                    <div
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[180px] h-10 bg-black/40 blur-lg rounded-full pointer-events-none z-0"
                      aria-hidden="true"
                    />

                    {/* Subtle Green Ambient Glow on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#1EC672]/15 via-[#1EC672]/5 to-transparent blur-3xl pointer-events-none rounded-full transition-opacity duration-500 z-0 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Controlled Portrait Viewport (clips bottom overflow for mid-torso crop) */}
                    <div className="relative w-full h-full overflow-hidden flex items-end justify-center z-10">
                      {/* Transparent PNG Portrait Element with Combined X/Y translation, scaling, and hover preservation */}
                      <img
                        id={`${member.id}-portrait`}
                        src={member.image}
                        alt={isEn ? member.name : member.nameAr}
                        className="absolute bottom-0 left-1/2 w-full h-full object-contain object-bottom z-10 select-none pointer-events-none transition-all duration-500 ease-out"
                        referrerPolicy="no-referrer"
                        style={{
                          transform: `translateX(calc(-50% + ${translateX})) translateY(${translateY}) scale(${currentScale})`,
                          transformOrigin: 'center bottom',
                          objectPosition: member.portraitObjectPosition || 'center bottom',
                          filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.45))',
                        }}
                      />
                    </div>
                  </div>

                  {/* Team Member Information */}
                  <div className="w-full pt-3.5 flex flex-col items-center text-center">
                    {/* Subtle Accent Line */}
                    <div
                      className={`w-5 h-[2px] mb-2 rounded-full transition-all duration-300 ${
                        isHovered ? 'w-8 bg-[#1EC672]' : 'bg-white/20'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Team Member Name */}
                    <h3
                      className={`text-base sm:text-lg lg:text-lg font-bold mb-1 transition-colors duration-300 ${
                        isEn ? 'font-syne' : 'font-arabic'
                      } ${isHovered ? 'text-[#1EC672]' : 'text-white'}`}
                    >
                      {isEn ? member.name : member.nameAr}
                    </h3>

                    {/* Professional Role: Consistent min-height for uniform baseline alignment */}
                    <p
                      className={`text-[11px] sm:text-xs font-semibold mb-1.5 leading-snug min-h-[1.75rem] flex items-center justify-center ${
                        isEn
                          ? 'font-syne uppercase tracking-wider text-[#1EC672]'
                          : 'font-arabic text-[#1EC672]'
                      }`}
                    >
                      {isEn ? member.role : member.roleAr}
                    </p>

                    {/* Short Description: Reduced density, 2 lines max on desktop, consistent baseline */}
                    {member.description && (
                      <p className="text-xs text-white/65 font-light leading-relaxed max-w-[240px] line-clamp-2 min-h-[2.25rem] flex items-start justify-center">
                        {isEn ? member.description : member.descriptionAr}
                      </p>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
