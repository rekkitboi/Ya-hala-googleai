import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FOUNDER_MESSAGE_DATA } from '../../data/aboutData';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';

interface FounderMessageSectionProps {
  language: Language;
}

export const FounderMessageSection: React.FC<FounderMessageSectionProps> = ({ language }) => {
  const prefersReducedMotion = useReducedMotion();
  // Use the remaining paragraphs for the text blocks (excluding the first paragraph which is used as the anchor statement)
  const paragraphs = language === 'en' 
    ? FOUNDER_MESSAGE_DATA.paragraphsEn.slice(1) 
    : FOUNDER_MESSAGE_DATA.paragraphsAr.slice(1);
    
  return (
    <section
      id="founder"
      data-theme="dark"
      className="relative pt-24 md:pt-36 pb-12 bg-[#1F3423] text-white overflow-hidden"
    >
      {/* Short top gradient band connecting from the light Purpose section without washing out the entire section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F9F8F5] to-transparent z-10 opacity-40 pointer-events-none" />

      {/* Background Environment - Visually distinct from Team section but contiguous */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={ASSETS.oasisStoneTerrace}
          alt=""
          className="w-full h-full object-cover object-[center_20%] opacity-20 transform scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3423]/95 via-[#1F3423]/90 to-[#1F3423]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEADING SIDE: Anchor Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
              <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
                {language === 'en' ? 'Why Ya Hala Began' : 'لماذا بدأ يا هلا'}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (language === 'en' ? -30 : 30) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.3 : 0.9, delay: prefersReducedMotion ? 0 : 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold text-white tracking-tight leading-[1.15]"
            >
              {language === 'en' ? (
                <>
                  Anyone living in Saudi Arabia needs <span className="text-[#1EC672]">more than Arabic lessons.</span>
                </>
              ) : (
                <>
                  كل من يقيم في المملكة يحتاج إلى <span className="text-[#1EC672]">أكثر من مجرد دروس في اللغة العربية.</span>
                </>
              )}
            </motion.h2>
          </div>

          {/* OPPOSITE SIDE: Paced Editorial Text Blocks */}
          <div className="lg:col-span-7 relative">
            {/* Narrative Line connecting founder text down to the team section */}
            <div className="absolute top-0 bottom-[-200px] left-0 rtl:left-auto rtl:right-0 w-px bg-gradient-to-b from-transparent via-[#1EC672]/30 to-[#1EC672]/5 hidden lg:block" />
            
            <div className="lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10 pt-4 lg:pt-0 space-y-6 lg:space-y-8 max-w-2xl">
              {paragraphs.map((para, idx) => {
                // First paragraph is slightly larger, remaining are body-copy size
                const isFirst = idx === 0;
                const textClass = isFirst 
                  ? 'text-lg sm:text-xl font-normal text-white/90' 
                  : 'text-base sm:text-lg font-light text-white/80';
                  
                return (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, delay: prefersReducedMotion ? 0 : 0.3 + (idx * 0.1) }}
                    className={`${textClass} leading-[1.75]`}
                  >
                    {para}
                  </motion.p>
                );
              })}

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 1, delay: prefersReducedMotion ? 0 : 0.7 }}
                className="pt-8 mt-4 border-t border-white/10"
              >
                <div className="font-syne font-bold text-xl text-white mb-1">
                  {language === 'en' ? FOUNDER_MESSAGE_DATA.founderNameEn : FOUNDER_MESSAGE_DATA.founderNameAr}
                </div>
                <div className="text-xs text-[#1EC672] font-semibold tracking-wider uppercase mb-4 mt-1">
                  {language === 'en' ? FOUNDER_MESSAGE_DATA.signatureAttributionEn : FOUNDER_MESSAGE_DATA.signatureAttributionAr}
                </div>
                
                {/* Restrained Signature Treatment */}
                <div className="font-serif italic text-3xl sm:text-4xl text-white/30 select-none tracking-wide">
                  Amin Al Zahrani
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
