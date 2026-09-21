import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Play, Sparkles, Film, Clock } from 'lucide-react';
import { ASSETS } from '../data/yaHalaData';
import { Language } from '../types';

interface VideoShowcaseSectionProps {
  language: Language;
}

/**
 * Insert the final YouTube video URL here when available.
 * Supported formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=z_ZWOAGkJ9A&t=38s';

/**
 * Extracts a privacy-enhanced YouTube embed URL from standard YouTube URLs.
 */
const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url || !url.trim()) return null;
  try {
    const trimmed = url.trim();
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = trimmed.match(regExp);
    if (match && match[2] && match[2].length === 11) {
      const videoId = match[2];
      const timeMatch = trimmed.match(/[?&](?:t|start)=(\d+)/);
      const startTime = timeMatch ? `&start=${timeMatch[1]}` : '';
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0${startTime}`;
    }
  } catch {
    return null;
  }
  return null;
};

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ language }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showStatusNotice, setShowStatusNotice] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  const embedUrl = getYouTubeEmbedUrl(YOUTUBE_VIDEO_URL);

  const handlePlayClick = () => {
    if (embedUrl) {
      setIsPlaying(true);
    } else {
      setShowStatusNotice(true);
    }
  };

  const isEn = language === 'en';

  return (
    <section
      id="video-showcase"
      data-theme="light"
      data-header-theme="light"
      className="relative py-20 md:py-28 bg-[#F9F8F5] text-[#1F3423] z-10 border-t border-[#1F3423]/10 overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#1EC672]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#1F3423]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Editorial Text Column (35% - 40% on Desktop) */}
          <div className="lg:col-span-5 text-left rtl:text-right flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1EC672]" aria-hidden="true" />
              <span
                className={`text-[#1EC672] font-semibold text-xs ${
                  isEn ? 'font-syne uppercase tracking-[0.2em]' : 'font-arabic'
                }`}
              >
                {isEn ? 'DISCOVER YA HALA' : 'اكتشف يا هلا'}
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight leading-[1.18] mb-5">
              {isEn
                ? 'See Language and Culture Come to Life'
                : 'شاهد اللغة والثقافة تنبضان بالحياة'}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#1F3423]/75 font-light leading-relaxed mb-6">
              {isEn
                ? 'Step inside the Ya Hala experience and discover how Saudi dialect, cultural understanding, and real-world communication come together.'
                : 'ادخل إلى تجربة يا هلا، واكتشف كيف تجتمع اللهجة السعودية والفهم الثقافي والتواصل الواقعي في رحلة تعليمية متكاملة.'}
            </p>

            {/* Optional Small Supporting Label with Subtle Accent */}
            <div className="pt-4 border-t border-[#1F3423]/10 flex items-center gap-3 text-xs text-[#1F3423]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" aria-hidden="true" />
              <p className="font-light italic">
                {isEn
                  ? 'A glimpse into the Ya Hala learning experience'
                  : 'لمحة عن تجربة التعلّم في يا هلا'}
              </p>
            </div>
          </div>

          {/* Video Showcase Column (60% - 65% on Desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative group">
              {/* Subtle Decorative Accent Corner Border */}
              <div
                className="absolute -top-2 -left-2 rtl:-left-auto rtl:-right-2 w-8 h-8 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#1EC672]/60 rounded-tl-lg rtl:rounded-tl-none rtl:rounded-tr-lg pointer-events-none transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              />

              {/* Main 16:9 Video Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#0C100E] border border-[#1F3423]/15 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                {isPlaying && embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={isEn ? 'Ya Hala Introduction Video' : 'فيديو تعريفي بمعهد يا هلا'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Poster Image */}
                    <img
                      src={ASSETS.heroBg}
                      alt={isEn ? 'Ya Hala Cinematic Video Preview' : 'معاينة فيديو معهد يا هلا'}
                      className="absolute inset-0 w-full h-full object-cover object-[50%_25%] transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark Editorial Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0C100E]/90 via-[#0C100E]/45 to-[#0C100E]/60 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Subtle Radial Vignette for Contrast */}
                    <div
                      className="absolute inset-0 bg-radial from-transparent to-[#0C100E]/70 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top Inside Bar: Branded Video Label & Status */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C100E]/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-syne font-semibold">
                        <Film className="w-3.5 h-3.5 text-[#1EC672]" aria-hidden="true" />
                        <span className={isEn ? 'uppercase tracking-wider' : 'font-arabic'}>
                          {isEn ? 'YA HALA FILM' : 'فيلم يا هلا'}
                        </span>
                      </div>

                      {embedUrl ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1EC672]/20 backdrop-blur-md border border-[#1EC672]/40 text-white text-[11px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672] animate-pulse" aria-hidden="true" />
                          <span>{isEn ? 'Watch Video' : 'مشاهدة الفيديو'}</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C100E]/70 backdrop-blur-md border border-white/10 text-white/80 text-[11px] font-light">
                          <Clock className="w-3 h-3 text-[#1EC672]" aria-hidden="true" />
                          <span>{isEn ? 'Video coming soon' : 'الفيديو قريباً'}</span>
                        </div>
                      )}
                    </div>

                    {/* Center Play Button & Interactive Area */}
                    <div className="relative z-20 flex flex-col items-center justify-center p-4">
                      <div className="relative flex items-center justify-center">
                        {/* Outer gentle ambient pulse ring */}
                        <div
                          className="absolute -inset-3 rounded-full border border-[#1EC672]/30 animate-pulse pointer-events-none"
                          aria-hidden="true"
                        />
                        
                        <button
                          type="button"
                          onClick={handlePlayClick}
                          aria-label={
                            isEn
                              ? 'Play Ya Hala introduction video'
                              : 'تشغيل الفيديو التعريفي لمعهد يا هلا'
                          }
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1EC672] text-[#0C100E] flex items-center justify-center shadow-lg shadow-[#1EC672]/20 hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1EC672]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C100E]"
                        >
                          <Play
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-[#0C100E] translate-x-0.5 rtl:-translate-x-0.5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {/* Smooth Inline Status Notice (When Video URL is not yet connected) */}
                      <AnimatePresence>
                        {showStatusNotice && (
                          <motion.div
                            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            role="status"
                            className="mt-5 px-4 py-2 rounded-xl bg-[#0C100E]/85 backdrop-blur-md border border-[#1EC672]/30 text-white text-xs sm:text-sm font-medium shadow-lg text-center flex items-center gap-2"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#1EC672] shrink-0" aria-hidden="true" />
                            <span>
                              {isEn
                                ? 'The Ya Hala film will be available here soon.'
                                : 'سيكون فيلم يا هلا متاحاً هنا قريباً.'}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Inside Bar: Discreet Subtitle Note */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 pointer-events-none z-10 text-center sm:text-left rtl:sm:text-right">
                      <span className="text-[11px] sm:text-xs text-white/70 font-light drop-shadow-sm">
                        {isEn
                          ? 'A glimpse into the Ya Hala learning experience'
                          : 'لمحة عن تجربة التعلّم في يا هلا'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Editorial Metadata Row Near the Video Frame */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-5 px-2 text-xs text-[#1F3423]/70 font-medium">
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className={
                    isEn
                      ? 'font-syne uppercase tracking-[0.15em] text-[11px]'
                      : 'font-arabic text-xs'
                  }
                >
                  {isEn ? 'YA HALA FILM' : 'فيلم يا هلا'}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#1EC672]" aria-hidden="true" />
                <span
                  className={
                    isEn
                      ? 'font-syne uppercase tracking-[0.15em] text-[11px]'
                      : 'font-arabic text-xs'
                  }
                >
                  {isEn ? 'SAUDI DIALECT' : 'اللهجة السعودية'}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#1EC672]" aria-hidden="true" />
                <span
                  className={
                    isEn
                      ? 'font-syne uppercase tracking-[0.15em] text-[11px]'
                      : 'font-arabic text-xs'
                  }
                >
                  {isEn ? 'CULTURAL IMMERSION' : 'المعايشة الثقافية'}
                </span>
              </div>

              {/* Minimal Bright Green Visual Line Accent */}
              <div className="hidden sm:block w-12 h-[2px] bg-[#1EC672] rounded-full" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
