import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { YA_HALA_CLIENTS, CLIENTS_HEADER_DATA, ClientProfile } from '../data/clientData';
import { Language } from '../types';
import { ASSETS } from '../data/yaHalaData';

interface OurClientsSectionProps {
  language: Language;
}

const getInitials = (name: string): string => {
  const cleaned = name.replace(/Eng\.|Sir/gi, '').trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return (parts[0] ? parts[0].slice(0, 2) : 'YH').toUpperCase();
};

export const OurClientsSection: React.FC<OurClientsSectionProps> = ({ language }) => {
  const [hoveredClientId, setHoveredClientId] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const prefersReducedMotion = useReducedMotion();

  const isEn = language === 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
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
      id="our-clients"
      data-theme="dark"
      data-header-theme="dark"
      className="relative py-14 md:py-18 bg-[#0C100E] text-white z-10 border-t border-b border-[#1F3423]/40 overflow-hidden"
    >
      {/* Atmosphere Background Image & Controlled Lighter Overlays */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <img
          src={ASSETS.experienceStone}
          alt=""
          className="w-full h-full object-cover scale-[1.02] opacity-[0.62] pointer-events-none select-none"
          style={{ objectPosition: 'center 42%' }}
          referrerPolicy="no-referrer"
          aria-hidden="true"
        />
        {/* 1. Restrained dark base overlay */}
        <div className="absolute inset-0 bg-[#0C100E]/30" aria-hidden="true" />
        {/* 2. Subtle vertical gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0C100E]/42 via-[#0C100E]/16 to-[#0C100E]/48"
          aria-hidden="true"
        />
        {/* 3. Localized bottom gradient behind the profile text */}
        <div
          className="absolute bottom-0 left-0 right-0 h-44 sm:h-48 bg-gradient-to-t from-[#0C100E]/65 via-[#0C100E]/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Ambient Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#1EC672]/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-10 mb-9 md:mb-11 text-left rtl:text-right">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1EC672]" aria-hidden="true" />
              <span
                className={`text-[#1EC672] font-semibold text-xs ${
                  isEn ? 'font-syne uppercase tracking-[0.2em]' : 'font-arabic'
                }`}
              >
                {isEn ? CLIENTS_HEADER_DATA.eyebrowEn : CLIENTS_HEADER_DATA.eyebrowAr}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white tracking-tight leading-[1.15]">
              {isEn ? CLIENTS_HEADER_DATA.headingEn : CLIENTS_HEADER_DATA.headingAr}
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-white/70 font-light leading-relaxed">
            {isEn ? CLIENTS_HEADER_DATA.introEn : CLIENTS_HEADER_DATA.introAr}
          </p>
        </div>

        {/* SHARED PORTRAIT STAGE */}
        <div className="relative pt-2 pb-4">
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
            className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar items-end gap-6 sm:gap-8 lg:gap-8 pb-3 lg:pb-0 w-full"
          >
            {YA_HALA_CLIENTS.map((client: ClientProfile) => {
              const isHovered = hoveredClientId === client.id;
              const isOtherHovered =
                hoveredClientId !== null && hoveredClientId !== client.id;
              const isImageActuallyLoaded = Boolean(loadedImages[client.id]);

              const restingScale = client.portraitScale ?? 1;
              const currentScale =
                isHovered && !prefersReducedMotion
                  ? restingScale + 0.03
                  : restingScale;
              const translateX = client.portraitTranslateX || '0%';
              const translateY = client.portraitTranslateY || '0%';

              return (
                <motion.article
                  key={client.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredClientId(client.id)}
                  onMouseLeave={() => setHoveredClientId(null)}
                  onFocus={() => setHoveredClientId(client.id)}
                  onBlur={() => setHoveredClientId(null)}
                  tabIndex={0}
                  className={`group relative flex-none w-[80vw] max-w-[340px] sm:w-[320px] lg:w-auto snap-center outline-none flex flex-col items-center text-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1EC672] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C100E] rounded-2xl p-1.5 ${
                    isOtherHovered ? 'opacity-85' : 'opacity-100'
                  }`}
                >
                  {/* Portrait Stage Frame */}
                  <div className="relative w-full h-[280px] sm:h-[300px] lg:h-[320px] flex items-end justify-center">
                    {/* Primary Contact Shadow under cutout */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] sm:w-[160px] h-3 bg-black/80 blur-[6px] rounded-[100%] pointer-events-none z-0"
                      aria-hidden="true"
                    />

                    {/* Ambient Grounding Shadow */}
                    <div
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[190px] h-10 bg-black/40 blur-lg rounded-full pointer-events-none z-0"
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
                      {/* Image Element with Absolute Center Anchoring, Custom Scale, and Translation */}
                      <img
                        id={`${client.id}-portrait`}
                        ref={(imgEl) => {
                          if (imgEl && imgEl.complete && imgEl.naturalWidth > 1) {
                            if (!loadedImages[client.id]) {
                              setLoadedImages((prev) => ({ ...prev, [client.id]: true }));
                            }
                          }
                        }}
                        src={encodeURI(client.image)}
                        alt={isEn ? client.name : client.nameAr}
                        onLoad={(e) => {
                          const img = e.currentTarget;
                          if (img.naturalWidth > 1 && img.naturalHeight > 1) {
                            setLoadedImages((prev) => ({ ...prev, [client.id]: true }));
                          } else {
                            setLoadedImages((prev) => ({ ...prev, [client.id]: false }));
                          }
                        }}
                        onError={() => {
                          setLoadedImages((prev) => ({ ...prev, [client.id]: false }));
                        }}
                        className={`absolute bottom-0 left-1/2 w-full h-full object-contain object-bottom z-10 select-none pointer-events-none transition-all duration-500 ease-out ${
                          isImageActuallyLoaded
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                        }`}
                        referrerPolicy="no-referrer"
                        style={{
                          transform: `translateX(calc(-50% + ${translateX})) translateY(${translateY}) scale(${currentScale})`,
                          transformOrigin: 'center bottom',
                          objectPosition:
                            client.portraitObjectPosition || 'center bottom',
                          filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.45))',
                        }}
                      />

                      {/* Editorial Freestanding Silhouette (shown when 1x1 placeholder or waiting for file upload) */}
                      {!isImageActuallyLoaded && (
                        <div className="relative w-full h-full flex flex-col items-center justify-end z-10">
                          <svg
                            viewBox="0 0 240 320"
                            className={`w-auto h-[88%] max-h-[300px] transition-all duration-500 ${
                              isHovered
                                ? 'scale-[1.03] filter drop-shadow(0 16px 28px rgba(30,198,114,0.3))'
                                : 'filter drop-shadow(0 14px 20px rgba(0,0,0,0.6))'
                            }`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <defs>
                              <linearGradient
                                id={`bustGrad-${client.id}`}
                                x1="120"
                                y1="30"
                                x2="120"
                                y2="310"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0%" stopColor="#223929" />
                                <stop offset="60%" stopColor="#152419" />
                                <stop offset="100%" stopColor="#0B130E" />
                              </linearGradient>
                              <linearGradient
                                id={`rimGrad-${client.id}`}
                                x1="40"
                                y1="40"
                                x2="200"
                                y2="300"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0%" stopColor="#1EC672" stopOpacity="0.75" />
                                <stop offset="35%" stopColor="#1EC672" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#1EC672" stopOpacity="0.05" />
                              </linearGradient>
                            </defs>
                            {/* Head */}
                            <circle
                              cx="120"
                              cy="85"
                              r="44"
                              fill={`url(#bustGrad-${client.id})`}
                              stroke={`url(#rimGrad-${client.id})`}
                              strokeWidth="1.5"
                            />
                            {/* Shoulders & Torso */}
                            <path
                              d="M48 290 C48 215, 78 170, 98 158 C105 174, 112 180, 120 180 C128 180, 135 174, 142 158 C162 170, 192 215, 192 290 Z"
                              fill={`url(#bustGrad-${client.id})`}
                              stroke={`url(#rimGrad-${client.id})`}
                              strokeWidth="1.5"
                            />
                            {/* Monogram Seal */}
                            <circle
                              cx="120"
                              cy="224"
                              r="26"
                              fill="#0C100E"
                              stroke="#1EC672"
                              strokeWidth="1.5"
                            />
                            <text
                              x="120"
                              y="230"
                              textAnchor="middle"
                              fontFamily="sans-serif"
                              fontSize="14"
                              fontWeight="bold"
                              fill="#1EC672"
                              letterSpacing="0.08em"
                            >
                              {getInitials(client.name)}
                            </text>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Client Information */}
                  <div className="w-full pt-4 flex flex-col items-center text-center">
                    {/* Subtle Accent Line */}
                    <div
                      className={`w-5 h-[2px] mb-2.5 rounded-full transition-all duration-300 ${
                        isHovered
                          ? 'w-9 bg-[#1EC672]'
                          : 'bg-white/20'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Client Name */}
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-1 transition-colors duration-300 ${
                        isEn ? 'font-syne' : 'font-arabic'
                      } ${
                        isHovered ? 'text-[#1EC672]' : 'text-white'
                      }`}
                    >
                      {isEn ? client.name : client.nameAr}
                    </h3>

                    {/* Professional Role */}
                    <p
                      className={`text-xs sm:text-[13px] font-semibold mb-2 leading-snug line-clamp-2 ${
                        isEn
                          ? 'font-syne uppercase tracking-wider text-[#1EC672]'
                          : 'font-arabic text-[#1EC672]'
                      }`}
                    >
                      {isEn ? client.role : client.roleAr}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed max-w-[280px] line-clamp-3">
                      {isEn ? client.description : client.descriptionAr}
                    </p>
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
