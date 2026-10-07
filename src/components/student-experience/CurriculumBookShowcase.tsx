import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Language, BookType } from '../../types';
import { CURRICULUM_BOOKS_BY_LEVEL, LEVEL_ARCHITECTURAL_IMAGES } from '../../data/curriculumBooksData';
import { CurriculumBook3D } from './CurriculumBook3D';
import { BookOpen, Sparkles } from 'lucide-react';

interface CurriculumBookShowcaseProps {
  levelId: string; // 'a1' | 'a2' | 'b1' | 'b2'
  language: Language;
}

export const CurriculumBookShowcase: React.FC<CurriculumBookShowcaseProps> = ({
  levelId,
  language,
}) => {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [featuredBookType, setFeaturedBookType] = useState<BookType>('student-book');
  const [hoveredBookType, setHoveredBookType] = useState<BookType | null>(null);

  // Reset to student-book whenever the level changes
  useEffect(() => {
    setFeaturedBookType('student-book');
    setHoveredBookType(null);
  }, [levelId]);

  const books = CURRICULUM_BOOKS_BY_LEVEL[levelId] || CURRICULUM_BOOKS_BY_LEVEL.a1;
  const featuredBook = books.find((b) => b.type === featuredBookType) || books[0];
  const archInfo = LEVEL_ARCHITECTURAL_IMAGES[levelId] || LEVEL_ARCHITECTURAL_IMAGES.a1;

  // Determine which book goes into each of the 3 fan slots: 'left', 'center', 'right'
  const otherBooks = books.filter((b) => b.type !== featuredBookType);
  const leftBook = otherBooks[0] || books[1];
  const rightBook = otherBooks[1] || books[2];

  const slotAssignments: { book: typeof books[0]; position: 'left' | 'center' | 'right' }[] = [
    { book: leftBook, position: 'left' },
    { book: featuredBook, position: 'center' },
    { book: rightBook, position: 'right' },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center relative py-4 sm:py-6">
      {/* 3D Overlapping Fan Stage */}
      <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={levelId}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{
              duration: prefersReducedMotion ? 0.15 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {slotAssignments.map(({ book, position }) => {
              const isFeatured = book.type === featuredBookType;
              const isHovered = hoveredBookType === book.type;

              return (
                <CurriculumBook3D
                  key={book.id}
                  book={book}
                  isFeatured={isFeatured}
                  fanPosition={position}
                  language={language}
                  prefersReducedMotion={prefersReducedMotion}
                  onClick={() => setFeaturedBookType(book.type)}
                  onHoverStart={() => setHoveredBookType(book.type)}
                  onHoverEnd={() => setHoveredBookType(null)}
                  isHovered={isHovered}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Featured Book Detail & Switcher Deck */}
      <div className="w-full max-w-sm mt-5 sm:mt-6 text-center">
        {/* Book Type Switcher Pills */}
        <div className="inline-flex items-center gap-1.5 p-1 bg-[#1F3423]/5 rounded-xl border border-[#1F3423]/10 mb-3">
          {books.map((b) => {
            const isActive = b.type === featuredBookType;
            return (
              <button
                key={b.type}
                type="button"
                onClick={() => setFeaturedBookType(b.type)}
                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-syne font-bold transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                  isActive
                    ? 'bg-[#1F3423] text-white shadow-xs'
                    : 'text-[#1F3423]/70 hover:text-[#1F3423] hover:bg-[#1F3423]/5'
                }`}
                aria-pressed={isActive}
              >
                {language === 'en' ? b.badgeEn : b.badgeAr}
              </button>
            );
          })}
        </div>

        {/* Featured Book Title Description */}
        <div className="transition-all duration-300">
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#1F3423] font-bold">
            <BookOpen className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="font-arabic">
              {language === 'en' ? featuredBook.titleEn : featuredBook.titleAr}
            </span>
            <span className="text-[#1F3423]/40" aria-hidden="true">
              ·
            </span>
            <span className="font-syne text-[#1EC672]">
              {featuredBook.levelCode}
            </span>
            <span className="text-[#1F3423]/40" aria-hidden="true">
              ·
            </span>
            <span className="text-[#1F3423]/70 font-normal text-[11px]">
              {language === 'en' ? featuredBook.unitsEn : featuredBook.unitsAr}
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-[#1F3423]/65 mt-1 font-light leading-snug">
            {language === 'en' ? featuredBook.subtitleEn : featuredBook.subtitleAr}
          </p>

          {/* Architectural Heritage Note */}
          <div className="mt-2 text-[10px] text-[#1F3423]/50 flex items-center justify-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#1EC672]/70" />
            <span>
              {language === 'en' ? archInfo.altEn : archInfo.altAr}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
