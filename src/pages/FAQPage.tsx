import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FAQ_CATEGORIES } from '../data/faqData';
import { ASSETS } from '../data/yaHalaData';
import { Language, FAQCategory, FAQItem } from '../types';
import {
  Search,
  X,
  ChevronDown,
  Mail,
  HelpCircle,
  FileCheck,
  GraduationCap,
  CreditCard,
  Award,
  Briefcase,
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface FAQPageProps {
  language: Language;
}

// Arabic search normalization helper to support typo-tolerant and diacritic-insensitive search
const normalizeSearchText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip latin accents
    .replace(/[\u064B-\u065F\u0670]/g, '') // strip Arabic diacritics / tashkeel
    .replace(/[أإآ]/g, 'ا') // normalize alef variants
    .replace(/ة/g, 'ه') // normalize teh marbuta
    .replace(/ى/g, 'ي') // normalize alef maksura
    .trim();
};

// Map category IDs to semantic icons
const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'registration':
      return FileCheck;
    case 'programs-learning':
      return GraduationCap;
    case 'costs-payment':
      return CreditCard;
    case 'certificates-progress':
      return Award;
    case 'employment-training':
      return Briefcase;
    case 'support-contact':
      return Headphones;
    default:
      return HelpCircle;
  }
};

export const FAQPage: React.FC<FAQPageProps> = ({ language }) => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const isAr = language === 'ar';
  const displayFont = isAr ? 'font-arabic font-bold' : 'font-syne font-bold';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'reg-placement-test': true, // Open first question as a natural preview
  });

  // Handle URL hash deep linking on mount & change
  useEffect(() => {
    const rawHash = location.hash.replace('#', '');
    if (rawHash) {
      const matchedCategory = FAQ_CATEGORIES.find((cat) => cat.id === rawHash);
      if (matchedCategory) {
        setSelectedCategory(rawHash);
        const timer = setTimeout(() => {
          const el = document.getElementById(rawHash);
          if (el) {
            const headerOffset = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  // Inject dynamic JSON-LD FAQPage schema for SEO and rich snippets
  useEffect(() => {
    const scriptId = 'faq-jsonld-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const allItems: FAQItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: language === 'en' ? 'en-US' : 'ar-SA',
      mainEntity: allItems.map((item) => ({
        '@type': 'Question',
        name: language === 'en' ? item.questionEn : item.questionAr,
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'en' ? item.answerEn : item.answerAr,
        },
      })),
    };

    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [language]);

  // Toggle single accordion question
  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Expand all currently visible items
  const handleExpandAll = (itemsToExpand: FAQItem[]) => {
    const nextState: Record<string, boolean> = { ...openItems };
    itemsToExpand.forEach((item) => {
      nextState[item.id] = true;
    });
    setOpenItems(nextState);
  };

  // Collapse all currently visible items
  const handleCollapseAll = (itemsToCollapse: FAQItem[]) => {
    const nextState: Record<string, boolean> = { ...openItems };
    itemsToCollapse.forEach((item) => {
      nextState[item.id] = false;
    });
    setOpenItems(nextState);
  };

  // Filtered categories and questions based on search query and category selection
  const filteredCategories = useMemo(() => {
    const normalizedQuery = normalizeSearchText(searchQuery);

    return FAQ_CATEGORIES.map((cat) => {
      // If a specific category is selected, skip others (unless searching across all)
      if (selectedCategory !== 'all' && cat.id !== selectedCategory && !normalizedQuery) {
        return null;
      }

      const matchingItems = cat.items.filter((item) => {
        if (!normalizedQuery) return true;

        const qEn = normalizeSearchText(item.questionEn);
        const qAr = normalizeSearchText(item.questionAr);
        const aEn = normalizeSearchText(item.answerEn);
        const aAr = normalizeSearchText(item.answerAr);

        return (
          qEn.includes(normalizedQuery) ||
          qAr.includes(normalizedQuery) ||
          aEn.includes(normalizedQuery) ||
          aAr.includes(normalizedQuery)
        );
      });

      if (matchingItems.length === 0) return null;

      return {
        ...cat,
        items: matchingItems,
      };
    }).filter(Boolean) as FAQCategory[];
  }, [searchQuery, selectedCategory]);

  const totalVisibleQuestions = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const allVisibleItems = useMemo(() => {
    return filteredCategories.flatMap((cat) => cat.items);
  }, [filteredCategories]);

  // Renders text with active mailto link for academy@teachmearabic.co
  const renderAnswerText = (text: string) => {
    const emailTarget = 'academy@teachmearabic.co';
    if (!text.includes(emailTarget)) {
      return text;
    }

    const parts = text.split(emailTarget);
    return (
      <>
        {parts[0]}
        <a
          href={`mailto:${emailTarget}`}
          className="font-medium text-[#1EC672] hover:text-[#1F3423] underline underline-offset-4 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded px-0.5"
        >
          {emailTarget}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="pt-24 pb-20 bg-[#F9F8F5] min-h-screen">
      {/* 1. Page Hero: Compact dark forest-green header banner */}
      <section
        data-theme="dark"
        data-header-theme="dark"
        className="bg-[#1F3423] text-white py-14 sm:py-18 relative overflow-hidden border-b border-[#1EC672]/15"
      >
        {/* Subtle photo background with controlled dark overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url("${ASSETS.oasisGardenPassage}")` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1F3423]/90 via-[#1F3423] to-[#1F3423] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1EC672]/15 border border-[#1EC672]/30 text-[#1EC672] text-[11px] ${displayFont} ${isAr ? '' : 'uppercase tracking-[0.2em]'} mb-4`}>
              <Sparkles className="w-3 h-3 text-[#1EC672]" />
              <span>{language === 'en' ? 'HELP CENTRE' : 'مركز المساعدة'}</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl ${displayFont} text-white tracking-tight mb-4 leading-[1.15]`}>
              {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
            </h1>

            {/* Introduction paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
              {language === 'en'
                ? 'Find clear answers about registration, programs, payment, certificates, training opportunities, and learner support at Ya Hala.'
                : 'تعرّف على إجابات واضحة حول التسجيل والبرامج والدفع والشهادات وفرص التدريب والدعم في معهد يا هلا.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Quick Filter Bar */}
      <section className="bg-white border-b border-[#1F3423]/10 py-5 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Accessible Live Search Input */}
            <div className="relative flex-1 max-w-xl">
              <label htmlFor="faq-search" className="sr-only">
                {language === 'en' ? 'Search questions and answers' : 'ابحث في الأسئلة والإجابات'}
              </label>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-[#1F3423]/50 absolute start-3.5 pointer-events-none" />
                <input
                  id="faq-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === 'en'
                      ? 'Search questions and answers...'
                      : 'ابحث في الأسئلة والإجابات...'
                  }
                  className="w-full ps-10 pe-10 py-2.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/15 text-[#1F3423] text-sm placeholder-[#1F3423]/45 focus:outline-none focus:ring-2 focus:ring-[#1EC672] focus:bg-white transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label={language === 'en' ? 'Clear search' : 'مسح البحث'}
                    className="absolute end-3 text-[#1F3423]/50 hover:text-[#1F3423] p-1 rounded-full hover:bg-[#1F3423]/5 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Controls: Count & Expand/Collapse All */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-[#1F3423]/70">
              <span className="font-medium">
                {language === 'en'
                  ? `${totalVisibleQuestions} ${totalVisibleQuestions === 1 ? 'question' : 'questions'}`
                  : `${totalVisibleQuestions} ${totalVisibleQuestions === 1 ? 'سؤال' : 'أسئلة'}`}
              </span>

              <div className="h-4 w-[1px] bg-[#1F3423]/15" />

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleExpandAll(allVisibleItems)}
                  className="px-2.5 py-1 rounded-lg hover:bg-[#F9F8F5] text-[#1F3423] font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                >
                  {language === 'en' ? 'Expand all' : 'فتح الكل'}
                </button>
                <span className="text-[#1F3423]/30">|</span>
                <button
                  type="button"
                  onClick={() => handleCollapseAll(allVisibleItems)}
                  className="px-2.5 py-1 rounded-lg hover:bg-[#F9F8F5] text-[#1F3423]/70 hover:text-[#1F3423] font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                >
                  {language === 'en' ? 'Collapse all' : 'طي الكل'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main FAQ Content Area (Sidebar & Accordions) */}
      <section className="max-w-7xl mx-auto px-6 pt-8 sm:pt-10">
        
        {/* Mobile & Tablet Category Selector (Horizontal Scrolling Pills) */}
        <div className="lg:hidden mb-6 overflow-x-auto hide-scrollbar -mx-6 px-6">
          <div className="inline-flex gap-2 min-w-max pb-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs ${displayFont} ${isAr ? '' : 'uppercase tracking-wider'} transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                selectedCategory === 'all'
                  ? 'bg-[#1F3423] text-white shadow-xs'
                  : 'bg-white text-[#1F3423]/75 border border-[#1F3423]/10 hover:bg-[#F9F8F5]'
              }`}
            >
              {language === 'en' ? 'All Questions' : 'جميع الأسئلة'}
            </button>

            {FAQ_CATEGORIES.map((category) => {
              const Icon = getCategoryIcon(category.id);
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs ${displayFont} ${isAr ? '' : 'uppercase tracking-wider'} transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                    isActive
                      ? 'bg-[#1F3423] text-white shadow-xs'
                      : 'bg-white text-[#1F3423]/75 border border-[#1F3423]/10 hover:bg-[#F9F8F5]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#1EC672]" />
                  <span>{language === 'en' ? category.titleEn : category.titleAr}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Desktop Sticky Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-40">
            <div className="bg-white rounded-2xl border border-[#1F3423]/10 p-5 shadow-xs">
              <div className={`text-[11px] ${displayFont} ${isAr ? '' : 'uppercase tracking-[0.15em]'} text-[#1EC672] mb-3`}>
                {language === 'en' ? 'CATEGORIES' : 'أقسام الأسئلة'}
              </div>

              <nav className="space-y-1" aria-label="FAQ categories">
                {/* All Questions Button */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    window.history.replaceState(null, '', window.location.pathname);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs ${displayFont} transition-all cursor-pointer text-left rtl:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                    selectedCategory === 'all'
                      ? 'bg-[#1F3423] text-white shadow-xs'
                      : 'text-[#1F3423]/75 hover:bg-[#F9F8F5] hover:text-[#1F3423]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
                    <span>{language === 'en' ? 'All Questions' : 'جميع الأسئلة'}</span>
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      selectedCategory === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-[#1F3423]/5 text-[#1F3423]/60'
                    }`}
                  >
                    {FAQ_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0)}
                  </span>
                </button>

                {/* Individual Categories */}
                {FAQ_CATEGORIES.map((category) => {
                  const Icon = getCategoryIcon(category.id);
                  const isSelected = selectedCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category.id);
                        window.history.replaceState(null, '', `#${category.id}`);
                        const el = document.getElementById(category.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs ${displayFont} transition-all cursor-pointer text-left rtl:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                        isSelected
                          ? 'bg-[#1F3423] text-white shadow-xs'
                          : 'text-[#1F3423]/75 hover:bg-[#F9F8F5] hover:text-[#1F3423]'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        <Icon className="w-3.5 h-3.5 text-[#1EC672] shrink-0" />
                        <span className="truncate">
                          {language === 'en' ? category.titleEn : category.titleAr}
                        </span>
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-[#1F3423]/5 text-[#1F3423]/60'
                        }`}
                      >
                        {category.items.length}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Quick Assistance Card */}
              <div className="mt-6 pt-5 border-t border-[#1F3423]/10">
                <div className="p-4 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/8">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1F3423] mb-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#1EC672]" />
                    <span>{language === 'en' ? 'Direct Contact' : 'تواصل مباشر'}</span>
                  </div>
                  <p className="text-[11px] text-[#1F3423]/70 mb-3 leading-relaxed">
                    {language === 'en'
                      ? 'Have specific questions regarding enterprise or VIP programs?'
                      : 'هل لديك استفسار خاص ببرامج الشركات أو التدريب الخاص؟'}
                  </p>
                  <a
                    href="mailto:academy@teachmearabic.co"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F3423] hover:text-[#1EC672] transition-colors"
                  >
                    <span>academy@teachmearabic.co</span>
                    <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                  </a>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Accordion Rows Column */}
          <main className="lg:col-span-8 space-y-10">
            {filteredCategories.length === 0 ? (
              /* Polished Empty State for 0 search matches */
              <div className="bg-white rounded-2xl border border-[#1F3423]/10 p-10 text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#1EC672]/15 text-[#1EC672] flex items-center justify-center mx-auto mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className={`text-lg ${displayFont} text-[#1F3423] mb-2`}>
                  {language === 'en' ? 'No matching questions found' : 'لم نجد أي أسئلة مطابقة للبحث'}
                </h3>
                <p className="text-sm text-[#1F3423]/70 max-w-md mx-auto mb-6">
                  {language === 'en'
                    ? `We could not find any questions matching "${searchQuery}". Please check your spelling or clear the search filter.`
                    : `لم يتم العثور على أي نتائج مطابقة لـ "${searchQuery}". يرجى التحقق من صحة الكلمات أو مسح البحث.`}
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F3423] text-white hover:bg-[#1EC672] hover:text-[#1F3423] text-xs ${displayFont} ${isAr ? '' : 'uppercase tracking-wider'} transition-all duration-200 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]`}
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Clear search' : 'مسح البحث'}</span>
                </button>
              </div>
            ) : (
              /* Categories and Accordion Groups */
              filteredCategories.map((category, catIdx) => {
                const Icon = getCategoryIcon(category.id);
                return (
                  <section
                    key={category.id}
                    id={category.id}
                    className="scroll-mt-40 space-y-3.5"
                  >
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#1F3423]/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1EC672]/15 text-[#1EC672] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h2 className={`text-lg sm:text-xl ${displayFont} text-[#1F3423] leading-snug`}>
                            {language === 'en' ? category.titleEn : category.titleAr}
                          </h2>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#1F3423]/50">
                        {category.items.length}{' '}
                        {language === 'en'
                          ? category.items.length === 1
                            ? 'item'
                            : 'items'
                          : 'أسئلة'}
                      </span>
                    </div>

                    {/* Question Accordion List */}
                    <div className="space-y-3">
                      {category.items.map((item) => {
                        const isOpen = !!openItems[item.id];
                        const answerId = `faq-answer-${item.id}`;
                        const questionId = `faq-question-${item.id}`;

                        return (
                          <div
                            key={item.id}
                            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                              isOpen
                                ? 'border-[#1EC672]/60 shadow-xs'
                                : 'border-[#1F3423]/10 hover:border-[#1F3423]/25'
                            }`}
                          >
                            {/* Accessible Question Trigger Button */}
                            <button
                              id={questionId}
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={answerId}
                              onClick={() => toggleItem(item.id)}
                              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left rtl:text-right cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] focus-visible:ring-inset"
                            >
                              <span className={`text-sm sm:text-base ${displayFont} text-[#1F3423] group-hover:text-[#1EC672] transition-colors leading-snug`}>
                                {language === 'en' ? item.questionEn : item.questionAr}
                              </span>

                              {/* Trailing Chevron: Smooth rotation without layout drift */}
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                  isOpen
                                    ? 'bg-[#1EC672] text-[#1F3423] rotate-180'
                                    : 'bg-[#F9F8F5] text-[#1F3423]/60 group-hover:text-[#1F3423]'
                                }`}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </button>

                            {/* Accordion Expanded Answer Panel */}
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  id={answerId}
                                  role="region"
                                  aria-labelledby={questionId}
                                  initial={
                                    prefersReducedMotion
                                      ? { opacity: 1, height: 'auto' }
                                      : { opacity: 0, height: 0 }
                                  }
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={
                                    prefersReducedMotion
                                      ? { opacity: 0, height: 0 }
                                      : { opacity: 0, height: 0 }
                                  }
                                  transition={{ duration: 0.25, ease: 'easeOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-[#1F3423]/8 text-sm sm:text-[15px] text-[#1F3423]/80 leading-relaxed font-light text-left rtl:text-right bg-[#F9F8F5]/30">
                                    <p className="pt-2">
                                      {renderAnswerText(
                                        language === 'en' ? item.answerEn : item.answerAr
                                      )}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })
            )}

            {/* 4. Restrained Contact Support Callout at Bottom of FAQ */}
            <div className="rounded-2xl bg-[#1F3423] text-white p-6 sm:p-8 mt-12 border border-[#1EC672]/20 relative overflow-hidden">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{ backgroundImage: `url("${ASSETS.footerTexture}")` }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="max-w-md">
                  <div className={`inline-flex items-center gap-2 text-[10px] ${displayFont} ${isAr ? '' : 'uppercase tracking-widest'} text-[#1EC672] mb-2`}>
                    <Headphones className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'LEARNER SUPPORT' : 'دعم المتعلمين'}</span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl ${displayFont} text-white mb-2`}>
                    {language === 'en' ? 'Still have a question?' : 'ما لقيت إجابة لسؤالك؟'}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                    {language === 'en'
                      ? 'Contact the Ya Hala team and we will help you find the information you need.'
                      : 'تواصل مع فريق يا هلا، وبنساعدك في الوصول للمعلومة اللي تحتاجها.'}
                  </p>
                </div>

                <a
                  href="mailto:academy@teachmearabic.co"
                  className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1EC672] text-[#1F3423] hover:bg-white rounded-xl ${displayFont} ${isAr ? '' : 'text-xs uppercase tracking-wider'} transition-all duration-200 shrink-0 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{language === 'en' ? 'Email the Team' : 'راسل الفريق'}</span>
                </a>
              </div>
            </div>

          </main>
        </div>

      </section>
    </div>
  );
};
