import React, { useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { PARTNERS_LIST, PARTNERS_HEADER_DATA, PartnerOrganization } from '../data/partnersData';
import { Language } from '../types';

interface PartnersSectionProps {
  language: Language;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ language }) => {
  const isEn = language === 'en';
  const prefersReducedMotion = useReducedMotion();
  const [imageFallbacks, setImageFallbacks] = useState<Record<string, string>>({});

  const handleImageError = (partner: PartnerOrganization) => {
    setImageFallbacks((prev) => {
      const current = prev[partner.id];
      if (!current) {
        return { ...prev, [partner.id]: partner.fallbackSrc };
      }
      return prev;
    });
  };

  // Duplicate for seamless infinite marquee loop (no visible jump)
  const marqueeItems = [...PARTNERS_LIST, ...PARTNERS_LIST];

  return (
    <section
      id="partners"
      data-theme="dark"
      data-header-theme="dark"
      className="relative pt-10 sm:pt-14 md:pt-18 pb-24 sm:pb-28 md:pb-36 text-white overflow-hidden"
      aria-label={isEn ? 'Partners and Collaborators' : 'الشركاء والمتعاونون'}
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* 1. Editorial Section Header: Floating Seamlessly Over the Cinematic Hero Canvas */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/90 text-[10px] sm:text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#1EC672]" aria-hidden="true" />
            <span className={isEn ? 'font-syne uppercase tracking-[0.2em]' : 'font-arabic font-bold'}>
              {isEn ? PARTNERS_HEADER_DATA.eyebrowEn : PARTNERS_HEADER_DATA.eyebrowAr}
            </span>
          </div>

          {/* Display Heading - Reduced slightly in scale to let partner logos command prominence */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold uppercase tracking-tight leading-tight mb-4 text-white drop-shadow-md">
            {isEn ? PARTNERS_HEADER_DATA.headingEn : PARTNERS_HEADER_DATA.headingAr}
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            {isEn ? PARTNERS_HEADER_DATA.descriptionEn : PARTNERS_HEADER_DATA.descriptionAr}
          </p>
        </div>

        {/* 2. Marquee Ribbon: Spanning 85-90% of Desktop Content Width, 15-20% Larger White Logos Floating on Hero */}
        <div className="relative w-full max-w-[92%] sm:max-w-[88%] md:max-w-[86%] lg:max-w-[88%] mx-auto my-6">
          {prefersReducedMotion ? (
            <div className="w-full px-2 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-12 md:gap-16 items-center justify-items-center">
                {PARTNERS_LIST.map((partner) => {
                  const currentImgSrc = imageFallbacks[partner.id] || partner.logoSrc;
                  return (
                    <div
                      key={partner.id}
                      className="flex items-center justify-center h-20 sm:h-24 w-full p-2 transition-opacity duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                    >
                      <img
                        src={currentImgSrc}
                        alt={isEn ? partner.altEn : partner.altAr}
                        onError={() => handleImageError(partner)}
                        className="partner-logo-white max-h-12 sm:max-h-14 md:max-h-16 w-auto max-w-[190px] sm:max-w-[240px] object-contain transition-all duration-300 pointer-events-none select-none drop-shadow-sm"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <span className="sr-only">{isEn ? partner.nameEn : partner.nameAr}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Marquee with Pure Alpha Edge Fade Masks: Seamless transition directly into background image without black overlays */
            <div
              className="marquee-container marquee-mask-fade overflow-hidden py-6 select-none bg-transparent"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
                maskImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
              }}
            >
              {/* Primary Infinite Marquee Track: Smooth GPU-accelerated motion */}
              <div className="animate-marquee-right flex items-center gap-16 sm:gap-22 md:gap-28 px-4">
                {marqueeItems.map((partner, index) => {
                  const currentImgSrc = imageFallbacks[partner.id] || partner.logoSrc;
                  return (
                    <div
                      key={`${partner.id}-${index}`}
                      className="shrink-0 flex items-center justify-center h-20 sm:h-24 px-5 sm:px-7 transition-all duration-300 opacity-85 hover:opacity-100 hover:scale-105 cursor-pointer bg-transparent border-0 shadow-none"
                    >
                      <img
                        src={currentImgSrc}
                        alt={isEn ? partner.altEn : partner.altAr}
                        onError={() => handleImageError(partner)}
                        className="partner-logo-white max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-[66px] w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[280px] object-contain transition-all duration-300 pointer-events-none select-none drop-shadow-sm"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <span className="sr-only">
                        {isEn ? partner.nameEn : partner.nameAr} ({isEn ? partner.categoryEn : partner.categoryAr})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 3. Subtle Editorial Institutional Trust Hairline */}
        <div className="max-w-5xl mx-auto px-4 mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/75 font-light tracking-wide">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#1EC672] shrink-0" aria-hidden="true" />
              <span>
                {isEn ? 'Officially Aligned Pedagogical Standards' : 'معايير تربوية ولغوية معتمدة رسمياً'}
              </span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#1EC672] shrink-0" aria-hidden="true" />
              <span>
                {isEn ? 'Immersion Across Saudi Cultural Landmarks' : 'معايشة ميدانية في المعالم الثقافية الرائدة'}
              </span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#1EC672] shrink-0" aria-hidden="true" />
              <span>
                {isEn ? 'CEFR-Aligned Dialect Certification' : 'مناهج متوافقة مع الإطار الأوروبي المشترك (CEFR)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
