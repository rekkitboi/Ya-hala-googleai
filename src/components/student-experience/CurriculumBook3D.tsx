import React from 'react';
import { motion } from 'motion/react';
import { CurriculumBook, Language } from '../../types';
import { ASSETS } from '../../data/yaHalaData';

interface CurriculumBook3DProps {
  book: CurriculumBook;
  isFeatured: boolean;
  fanPosition: 'left' | 'center' | 'right';
  language: Language;
  prefersReducedMotion: boolean;
  onClick: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  isHovered?: boolean;
}

export const CurriculumBook3D: React.FC<CurriculumBook3DProps> = ({
  book,
  isFeatured,
  fanPosition,
  language,
  prefersReducedMotion,
  onClick,
  onHoverStart,
  onHoverEnd,
  isHovered = false,
}) => {
  // Determine fan layout transformations based on slot
  let rotationZ = 0;
  let rotationY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let baseScale = 0.94;
  let zIndex = 15;

  if (fanPosition === 'center') {
    rotationZ = 0;
    rotationY = -2;
    offsetX = 0;
    offsetY = 0;
    baseScale = 1.04;
    zIndex = 30;
  } else if (fanPosition === 'left') {
    rotationZ = -7;
    rotationY = 12;
    offsetX = -68;
    offsetY = 10;
    baseScale = 0.92;
    zIndex = 18;
  } else if (fanPosition === 'right') {
    rotationZ = 7;
    rotationY = -12;
    offsetX = 68;
    offsetY = 10;
    baseScale = 0.92;
    zIndex = 16;
  }

  // Mobile-adjusted offsets (using CSS classes for base and motion for refined delta)
  const isElevated = isHovered;
  const activeZIndex = isElevated ? 40 : zIndex;

  // Stagger / spring motion variants
  const springTransition = prefersReducedMotion
    ? { duration: 0.2 }
    : {
        type: 'spring',
        stiffness: 260,
        damping: 24,
        mass: 0.8,
      };

  return (
    <motion.div
      layout={!prefersReducedMotion}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 25, scale: baseScale * 0.9 }
      }
      animate={{
        opacity: 1,
        x: prefersReducedMotion ? 0 : offsetX,
        y: prefersReducedMotion ? 0 : isElevated ? offsetY - 16 : offsetY,
        rotateZ: prefersReducedMotion ? 0 : rotationZ,
        rotateY: prefersReducedMotion ? 0 : rotationY,
        scale: prefersReducedMotion ? 1 : isElevated ? baseScale * 1.05 : baseScale,
      }}
      transition={springTransition}
      style={{
        zIndex: activeZIndex,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className="absolute top-0 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-xl"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${book.titleAr} / ${book.titleEn} (${book.levelCode})`}
      aria-pressed={isFeatured}
    >
      {/* Dynamic Floor Contact Shadow */}
      <div
        className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-7 rounded-[100%] transition-all duration-300 pointer-events-none ${
          isElevated
            ? 'opacity-40 blur-md scale-110 translate-y-3'
            : isFeatured
            ? 'opacity-65 blur-[6px] scale-100'
            : 'opacity-45 blur-[5px] scale-90'
        }`}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(18,34,22,0.55) 0%, rgba(18,34,22,0.2) 55%, transparent 75%)',
        }}
      />

      {/* 3D Physical Book Assembly */}
      <div
        className={`relative w-[160px] sm:w-[185px] md:w-[195px] h-[235px] sm:w-[185px] sm:h-[270px] md:h-[285px] rounded-r-[5px] rounded-l-[3px] transition-shadow duration-300 ${
          isElevated
            ? 'shadow-[0_30px_60px_-15px_rgba(15,30,20,0.45),0_15px_25px_-5px_rgba(0,0,0,0.2)]'
            : isFeatured
            ? 'shadow-[0_24px_45px_-12px_rgba(15,30,20,0.38),0_10px_18px_-4px_rgba(0,0,0,0.18)]'
            : 'shadow-[0_18px_32px_-10px_rgba(15,30,20,0.3),0_6px_12px_-3px_rgba(0,0,0,0.14)]'
        }`}
      >
        {/* Book Left 3D Spine (Visible physical depth edge) */}
        <div
          className="absolute -left-[18px] sm:-left-[20px] top-[1px] bottom-[1px] w-[18px] sm:w-[20px] rounded-l-[3px] bg-gradient-to-r from-[#DDD8CD] via-[#ECE9E0] to-[#E2DDD3] border-l border-y border-[#1F3423]/15 overflow-hidden flex flex-col justify-between py-2 text-[#1F3423] shadow-inner"
          style={{
            transform: 'rotateY(-60deg) translateZ(0px)',
            transformOrigin: 'right center',
          }}
          aria-hidden="true"
        >
          {/* Spine Top Cap with Ya Hala Forest Green Band */}
          <div className="w-full bg-[#1F3423] h-5 flex items-center justify-center -mt-2">
            <span className="w-1.5 h-1.5 bg-[#1EC672] rotate-45 inline-block" />
          </div>

          {/* Spine Level & Titles */}
          <div className="flex-1 flex flex-col items-center justify-center my-1 overflow-hidden">
            <span className="font-syne font-bold text-[9px] text-[#1F3423] mb-1">
              {book.levelCode}
            </span>
            <div
              className="text-[7.5px] font-bold text-[#1F3423]/80 tracking-widest whitespace-nowrap uppercase font-syne select-none"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              {book.titleEn}
            </div>
          </div>

          {/* Spine Bottom Cap with Forest Green Band */}
          <div className="w-full bg-[#1F3423] h-4 -mb-2" />
        </div>

        {/* Book Top Pages Edge (Physical Pages Thickness block) */}
        <div
          className="absolute -top-[10px] left-0 right-0 h-[10px] bg-gradient-to-b from-[#E6E2D8] to-[#F1EFE9] border-t border-x border-[#1F3423]/10 rounded-t-[2px] overflow-hidden"
          style={{
            transform: 'rotateX(60deg)',
            transformOrigin: 'bottom center',
          }}
          aria-hidden="true"
        >
          {/* Fine paper pages lines simulation */}
          <div
            className="w-full h-full opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #D4CFBF 0px, #D4CFBF 1px, transparent 1px, transparent 3px)',
            }}
          />
        </div>

        {/* Book Front Cover Face */}
        <div className="relative w-full h-full rounded-r-[5px] rounded-l-[2px] bg-gradient-to-br from-[#FAF8F5] via-[#F6F4EE] to-[#EFECE5] border border-[#1F3423]/15 overflow-hidden flex flex-col justify-between">
          {/* Paper Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.04) 1px, transparent 1px)',
              backgroundSize: '8px 8px',
            }}
          />

          {/* Cover Sheen & Studio Light Reflection */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                'linear-gradient(115deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, rgba(0,0,0,0.06) 100%)',
            }}
          />

          {/* Spine Crease / Binding Hinge Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/15 via-black/5 to-transparent pointer-events-none z-10 border-r border-[#1F3423]/5" />

          {/* 1. Cover Header: Ya Hala Protected Logo */}
          <div className="relative z-10 pt-3.5 sm:pt-4 px-3 sm:px-4">
            <div className="h-6 sm:h-7 flex items-center justify-start">
              <img
                src={ASSETS.logoGreen}
                alt="Ya Hala"
                className="h-full w-auto object-contain max-w-[90px] sm:max-w-[105px] drop-shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 2. Cover Main Title & Identity Block */}
          <div className="relative z-10 px-3 sm:px-4 pt-1 sm:pt-1.5 pb-1 text-left rtl:text-right">
            {/* Level Code */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold text-[#1F3423] tracking-tight leading-none mb-1">
              {book.levelCode}
            </div>

            {/* Arabic Book Title */}
            <h3 className="font-arabic font-bold text-sm sm:text-base md:text-lg text-[#1F3423] leading-snug tracking-tight">
              {book.titleAr}
            </h3>

            {/* English Book Title */}
            <div className="font-syne font-bold text-[8px] sm:text-[9.5px] text-[#1F3423]/80 tracking-[0.2em] sm:tracking-[0.22em] uppercase mt-0.5">
              {book.titleEn}
            </div>

            {/* Quiet Authentic Metadata */}
            <div className="mt-2 text-[8px] sm:text-[9px] text-[#1F3423]/65 font-medium leading-tight space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-arabic">المستوى</span>
                <span className="font-syne font-bold">{book.levelCode}</span>
              </div>
              <div className="font-arabic">{book.partAr}</div>
              <div className="font-arabic text-[#1F3423]/55">{book.unitsAr}</div>
            </div>
          </div>

          {/* 3. Architectural Photography Window */}
          <div className="relative z-10 px-2.5 sm:px-3 pt-1 pb-2 flex-1 flex flex-col justify-end">
            <div className="relative w-full h-[85px] sm:h-[105px] md:h-[115px] rounded-[3px] overflow-hidden border border-[#1F3423]/12 shadow-inner bg-[#EFECE5]">
              <img
                src={book.archImage}
                alt={book.archAlt}
                className="w-full h-full object-cover sepia-[0.32] contrast-[0.96] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('.webp')) {
                    target.src = target.src.replace(/\.webp$/, '.jpg');
                  }
                }}
              />
              {/* Subtle vignette for photographic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 4. Deep Forest-Green Bottom Border (Exact Brand Asset) */}
          <div className="relative z-10 w-full h-3.5 sm:h-4 md:h-4.5 bg-[#1F3423] shrink-0 border-t border-[#1EC672]/30 flex items-center justify-end px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]/60 inline-block" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
