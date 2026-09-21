import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { TEAM_HEADER_DATA, YA_HALA_TEAM } from '../../data/teamData';
import { Language, TeamMember } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface MeetOurTeamSectionProps {
  language: Language;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({ language }) => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [openMobileBio, setOpenMobileBio] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Handle interaction for both touch and hover/keyboard
  const handleInteractionStart = (id: string) => {
    setHoveredMember(id);
  };
  const handleInteractionEnd = () => {
    setHoveredMember(null);
  };
  const handleMobileToggle = (id: string) => {
    setOpenMobileBio(prev => prev === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <section
      id="team"
      data-theme="dark"
      className="relative min-h-[90vh] py-16 md:py-24 bg-[#1F3423] text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Cinematic Background */}
      <motion.div 
        initial={{ scale: prefersReducedMotion ? 1 : 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: prefersReducedMotion ? 0.3 : 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={ASSETS.oasisStoneTerrace}
          alt=""
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* Adjusted directional overlays for better contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3423] via-[#1F3423]/70 to-[#1F3423]/30" />
        <div className="absolute inset-0 bg-[#1F3423]/30" />
      </motion.div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 text-left rtl:text-right relative">
          {/* Animated Light Trace */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 1, ease: "easeOut" }}
            className="absolute -bottom-6 left-0 right-0 h-px bg-gradient-to-r from-[#1EC672]/80 via-transparent to-transparent rtl:from-transparent rtl:via-transparent rtl:to-[#1EC672]/80 origin-left rtl:origin-right opacity-30"
          />

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-white/80 uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? TEAM_HEADER_DATA.eyebrowEn : TEAM_HEADER_DATA.eyebrowAr}
            </span>
          </motion.div>
          
          <div className="overflow-hidden mb-5">
            <motion.h2 
              initial={{ y: prefersReducedMotion ? 0 : "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-syne font-bold text-white tracking-tight"
            >
              {language === 'en' ? TEAM_HEADER_DATA.headingEn : TEAM_HEADER_DATA.headingAr}
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed font-light max-w-2xl"
          >
            {language === 'en' ? TEAM_HEADER_DATA.introEn : TEAM_HEADER_DATA.introAr}
          </motion.p>
        </div>

        {/* TEAM STAGE - Single Row Desktop, Horizontal Scroll Mobile */}
        <div className="relative pt-6 pb-16">
          {/* Subtle Shared Grounding Shadow for the entire row */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/40 blur-2xl rounded-full opacity-60 pointer-events-none hidden lg:block" />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-row overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none items-end lg:justify-center gap-4 lg:gap-5 pb-8 lg:pb-0 hide-scrollbar h-auto lg:h-[480px] w-full"
          >
            {YA_HALA_TEAM.map((member: TeamMember) => {
              const isActiveHover = hoveredMember === member.id;
              const isOtherHovered = hoveredMember !== null && hoveredMember !== member.id;
              const isMobileBioOpen = openMobileBio === member.id;
              
              // Panel positioning logic based on data or fallback
              const side = member.bioPanelSide || 'center';
              const isRtl = language === 'ar';
              
              let panelOrigin = 'left-1/2 -translate-x-1/2 rtl:translate-x-1/2';
              if (side === 'left') {
                panelOrigin = isRtl ? 'right-0' : 'left-0';
              } else if (side === 'right') {
                panelOrigin = isRtl ? 'left-0' : 'right-0';
              }

              return (
                <motion.button
                  key={member.id}
                  variants={itemVariants}
                  onMouseEnter={() => handleInteractionStart(member.id)}
                  onMouseLeave={handleInteractionEnd}
                  onFocus={() => handleInteractionStart(member.id)}
                  onBlur={handleInteractionEnd}
                  onClick={() => handleMobileToggle(member.id)}
                  aria-expanded={isMobileBioOpen || isActiveHover}
                  aria-controls={`bio-${member.id}`}
                  className="group relative flex-none w-[260px] sm:w-[280px] lg:w-0 lg:flex-1 snap-center outline-none text-left rtl:text-right cursor-pointer flex flex-col items-center"
                  animate={{
                    opacity: isOtherHovered ? 0.75 : 1,
                    scale: isActiveHover ? 1.03 : (isOtherHovered ? 0.99 : 1),
                    y: isActiveHover ? -12 : 0,
                    zIndex: isActiveHover ? 50 : 10
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Transparent Portrait Container */}
                  <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] flex items-end justify-center">
                    {/* Contact shadow beneath cutout */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-4 bg-black/60 blur-[6px] rounded-[100%] pointer-events-none" />
                    
                    {/* Ambient shadow slightly behind */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-20 bg-black/30 blur-2xl rounded-full pointer-events-none" />

                    {/* Rim Light / Edge Light Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#1EC672]/30 via-[#1EC672]/5 to-transparent blur-3xl opacity-0 z-0 pointer-events-none rounded-full"
                      animate={{ opacity: isActiveHover ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <img
                      src={member.image}
                      alt={language === 'en' ? member.name : member.nameAr}
                      className="w-full h-full object-contain object-bottom z-10 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                      style={{
                        transform: isActiveHover ? `scale(${(member.portraitScale || 1) + 0.04})` : `scale(${member.portraitScale || 1})`,
                        objectPosition: member.portraitObjectPosition || 'center bottom',
                        filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>

                  {/* Universal Name & Role (Resting below for all viewports) */}
                  <div className="text-center w-full mt-5 mb-2 transition-all duration-300">
                    <h4 className="text-lg font-syne font-bold mb-1 transition-colors duration-300 text-white group-hover:text-[#1EC672]">
                      {language === 'en' ? member.name : member.nameAr}
                    </h4>
                    <p className="text-xs uppercase tracking-widest text-white/60 font-syne font-semibold">
                      {language === 'en' ? member.role : member.roleAr}
                    </p>
                    {/* Subtle Interaction Indicator */}
                    <motion.div 
                      className="mt-3 mx-auto w-1 h-1 rounded-full bg-white/30 hidden lg:block"
                      animate={{ opacity: isActiveHover ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Biography Panel (Hover/Focus/Tap State) */}
                  <AnimatePresence>
                    {(isActiveHover || isMobileBioOpen) && (
                      <motion.div
                        id={`bio-${member.id}`}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`absolute top-[60%] lg:top-auto lg:bottom-full lg:mb-4 w-full sm:w-[320px] p-6 rounded-2xl bg-[#0C100E]/90 backdrop-blur-xl border border-white/10 shadow-2xl z-50 text-left rtl:text-right ${panelOrigin}`}
                        style={{ pointerEvents: 'none' }}
                      >
                        <h4 className="text-xl font-syne font-bold text-white mb-1">
                          {language === 'en' ? member.name : member.nameAr}
                        </h4>
                        <div className="text-[11px] uppercase tracking-wider text-[#1EC672] font-syne font-bold mb-4">
                          {language === 'en' ? member.role : member.roleAr}
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed font-light">
                          {language === 'en' ? member.bio : member.bioAr}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
