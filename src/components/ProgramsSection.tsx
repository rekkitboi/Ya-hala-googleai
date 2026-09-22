import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PROGRAMS } from '../data/yaHalaData';
import { Program, Language } from '../types';
import { ArrowRight, Check, ChevronDown, ChevronUp, Clock, Layers, Sparkles } from 'lucide-react';

interface ProgramsSectionProps {
  language: Language;
  onSelectProgram: (program: Program) => void;
  onApplyProgram: (programId: string) => void;
}

type FilterKey = 'all' | 'in-person' | 'online' | 'personalized';

interface FilterOption {
  key: FilterKey;
  labelEn: string;
  labelAr: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { key: 'all', labelEn: 'All Programs', labelAr: 'جميع البرامج' },
  { key: 'in-person', labelEn: 'In-Person', labelAr: 'حضوري' },
  { key: 'online', labelEn: 'Online', labelAr: 'عن بُعد' },
  { key: 'personalized', labelEn: 'Personalized', labelAr: 'برامج مخصصة' },
];

const getFormatBadge = (id: string, lang: Language): string => {
  switch (id) {
    case 'in-person':
      return lang === 'en' ? 'CAMPUS LEARNING' : 'تعليم حضوري';
    case 'online-learning':
      return lang === 'en' ? 'LIVE ONLINE' : 'تعليم مباشر عن بُعد';
    case 'private-tutoring':
      return lang === 'en' ? 'ONE-TO-ONE' : 'تدريب فردي';
    case 'corporate-groups':
      return lang === 'en' ? 'ORGANIZATIONS' : 'برامج المؤسسات';
    default:
      return '';
  }
};

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  language,
  onSelectProgram,
  onApplyProgram,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  const prefersReducedMotion = useReducedMotion();

  const toggleFeatures = (programId: string) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [programId]: !prev[programId],
    }));
  };

  const filteredPrograms = PROGRAMS.filter((program) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'in-person') return program.id === 'in-person';
    if (activeFilter === 'online') return program.id === 'online-learning';
    if (activeFilter === 'personalized') {
      return program.id === 'private-tutoring' || program.id === 'corporate-groups';
    }
    return true;
  });

  // Balanced grid layout according to number of filtered programs
  const getGridClasses = () => {
    if (filteredPrograms.length === 1) {
      return 'grid grid-cols-1 max-w-[360px] mx-auto';
    }
    if (filteredPrograms.length === 2) {
      return 'grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-5 lg:gap-6';
    }
    return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6';
  };

  return (
    <section
      id="programs"
      data-theme="light"
      data-header-theme="light"
      className="py-16 md:py-24 bg-[#F9F8F5] relative z-10 border-t border-[#1F3423]/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* A. Section Introduction - Editorial Heading Layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-10 md:mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#1EC672] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
              <span>{language === 'en' ? 'OUR PROGRAMS' : 'برامجنا التعليمية'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight leading-[1.15]">
              {language === 'en' ? 'Choose Your Learning Path' : 'اختر مسارك التعليمي'}
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#1F3423]/75 font-light leading-relaxed">
            {language === 'en'
              ? 'Flexible learning formats designed around different schedules, goals, and ways of learning.'
              : 'مسارات تعليمية مرنة صُممت لتناسب مختلف الجداول والأهداف وأساليب التعلّم.'}
          </p>
        </div>

        {/* B. Program Format Filter - Segmented Control */}
        <div className="flex items-center justify-center mb-8 md:mb-10">
          <div
            role="group"
            aria-label={language === 'en' ? 'Program format filters' : 'تصفية نمط البرامج'}
            className="inline-flex p-1.5 rounded-2xl bg-white border border-[#1F3423]/12 shadow-xs overflow-x-auto max-w-full hide-scrollbar gap-1.5"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(option.key)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-syne font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                    isActive
                      ? 'bg-[#1EC672] text-[#1F3423] shadow-xs'
                      : 'bg-transparent text-[#1F3423]/70 hover:text-[#1F3423] hover:bg-[#F9F8F5]'
                  }`}
                >
                  {language === 'en' ? option.labelEn : option.labelAr}
                </button>
              );
            })}
          </div>
        </div>

        {/* C. Program Comparison Cards Grid */}
        <div className={getGridClasses()}>
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => {
              const isFeatured = program.id === 'in-person';
              const isFeaturesExpanded = !!expandedFeatures[program.id];
              const features = language === 'en' ? program.features : program.featuresAr;
              const initialFeatures = features.slice(0, 3);
              const remainingFeatures = features.slice(3);
              const hasMoreFeatures = remainingFeatures.length > 0;

              return (
                <motion.div
                  key={program.id}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 ${
                    isFeatured
                      ? 'border-2 border-[#1EC672] shadow-md hover:shadow-lg'
                      : 'border border-[#1F3423]/12 shadow-xs hover:shadow-md'
                  } p-5 sm:p-6 overflow-hidden`}
                >
                  {/* 1. Header Row: Format badge, Category, and Featured indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1EC672] bg-[#1EC672]/10 px-2 py-0.5 rounded-md shrink-0">
                        {getFormatBadge(program.id, language)}
                      </span>
                      <span className="text-[11px] font-medium text-[#1F3423]/55 uppercase tracking-wider truncate">
                        {language === 'en' ? program.category : program.categoryAr}
                      </span>
                    </div>

                    {/* Featured Path Badge */}
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1EC672] text-[#1F3423] text-[10px] font-syne font-bold uppercase tracking-wider shadow-xs shrink-0">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{language === 'en' ? 'FEATURED' : 'المسار المميز'}</span>
                      </span>
                    )}
                  </div>

                  {/* 2. Program Title: Compact & Consistent */}
                  <h3 className="text-xl sm:text-2xl font-syne font-bold text-[#1F3423] mb-2 leading-tight tracking-tight text-left rtl:text-right">
                    {language === 'en' ? program.title : program.titleAr}
                  </h3>

                  {/* 3. Program Short Description: Clamped with uniform height */}
                  <p className="text-xs sm:text-sm text-[#1F3423]/75 leading-relaxed font-light mb-3.5 line-clamp-3 min-h-[3.75rem] text-left rtl:text-right">
                    {language === 'en' ? program.description : program.descriptionAr}
                  </p>

                  {/* 4. Compact Duration and Format Metadata Rows */}
                  <div className="space-y-2 py-2.5 border-y border-[#1F3423]/8 mb-3.5 text-left rtl:text-right">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#1EC672] shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F3423]/50 block leading-tight">
                          {language === 'en' ? 'Duration' : 'المدة'}
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-[#1F3423] leading-snug block">
                          {language === 'en' ? program.duration : program.durationAr}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Layers className="w-3.5 h-3.5 text-[#1EC672] shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F3423]/50 block leading-tight">
                          {language === 'en' ? 'Format' : 'النمط'}
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-[#1F3423] leading-snug block">
                          {language === 'en' ? program.format : program.formatAr}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5. Recommended For: Compact container */}
                  <div className="rounded-lg bg-[#F9F8F5] p-3 border border-[#1F3423]/6 mb-3.5 text-left rtl:text-right">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#1F3423]/50 mb-1 leading-tight">
                      {language === 'en' ? 'Recommended For' : 'الفئة المستهدفة'}
                    </div>
                    <div className="text-xs text-[#1F3423]/85 font-medium leading-snug line-clamp-3 min-h-[2.5rem]">
                      {language === 'en' ? program.audience : program.audienceAr}
                    </div>
                  </div>

                  {/* 6. Program Features: Top 3 by default + Show More */}
                  <div className="mb-4 text-left rtl:text-right">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#1F3423] mb-2.5">
                      {language === 'en' ? 'Program Features' : 'مميزات البرنامج'}
                    </div>
                    <ul className="space-y-2">
                      {initialFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#1F3423]/85 leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-[#1EC672] shrink-0 mt-0.5" />
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Smooth expandable features */}
                    <AnimatePresence initial={false}>
                      {isFeaturesExpanded && (
                        <motion.div
                          initial={prefersReducedMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={prefersReducedMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 pt-2">
                            {remainingFeatures.map((feature, idx) => (
                              <li
                                key={`extra-${idx}`}
                                className="flex items-start gap-2 text-xs text-[#1F3423]/85 leading-snug"
                              >
                                <Check className="w-3.5 h-3.5 text-[#1EC672] shrink-0 mt-0.5" />
                                <span className="flex-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {hasMoreFeatures && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFeatures(program.id);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1F3423]/70 hover:text-[#1EC672] transition-colors mt-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded py-0.5 px-1 -mx-1"
                        aria-expanded={isFeaturesExpanded}
                      >
                        <span>
                          {isFeaturesExpanded
                            ? language === 'en'
                              ? 'Show Less'
                              : 'عرض أقل'
                            : language === 'en'
                              ? 'Show More'
                              : 'عرض المزيد'}
                        </span>
                        {isFeaturesExpanded ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* 7. Card Actions - Pushed to bottom */}
                  <div className="mt-auto pt-3.5 border-t border-[#1F3423]/10 space-y-2">
                    <button
                      type="button"
                      onClick={() => onApplyProgram(program.id)}
                      className="group w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-[#1F3423] text-white hover:bg-[#1EC672] hover:text-[#1F3423] rounded-xl font-syne font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] focus-visible:ring-offset-2"
                    >
                      <span>
                        {language === 'en' ? 'Apply for This Program' : 'التقديم على البرنامج'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectProgram(program)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1F3423]/65 hover:text-[#1F3423] hover:bg-[#F9F8F5] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                    >
                      <span>
                        {language === 'en' ? 'View Full Details' : 'عرض التفاصيل كاملة'}
                      </span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
