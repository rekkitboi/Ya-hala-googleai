import React, { useState, useMemo } from 'react';
import { TERMS_AND_CONDITIONS_DATA } from '../data/legal/termsAndConditionsData';
import { Language } from '../types';
import { 
  FileText, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  GraduationCap, 
  CreditCard, 
  AlertCircle,
  Clock,
  Calendar,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface TermsAndConditionsPageProps {
  language: Language;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState('service-guide');
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});

  const toggleArticle = (key: string) => {
    setExpandedArticles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    TERMS_AND_CONDITIONS_DATA.sections.forEach(sec => {
      sec.articles?.forEach(art => {
        all[`${sec.id}-${art.number}`] = true;
      });
    });
    setExpandedArticles(all);
  };

  const collapseAll = () => {
    setExpandedArticles({});
  };

  // Filtered sections and articles based on search query
  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return TERMS_AND_CONDITIONS_DATA.sections;

    return TERMS_AND_CONDITIONS_DATA.sections.map(sec => {
      const matchSecTitle = (language === 'en' ? sec.titleEn : sec.titleAr).toLowerCase().includes(q);
      const matchSecIntro = (language === 'en' ? sec.introEn : sec.introAr)?.toLowerCase().includes(q);

      const matchingCategories = sec.categories?.filter(cat => {
        const title = (language === 'en' ? cat.titleEn : cat.titleAr).toLowerCase();
        const points = (language === 'en' ? cat.pointsEn : cat.pointsAr).join(' ').toLowerCase();
        return title.includes(q) || points.includes(q);
      });

      const matchingArticles = sec.articles?.filter(art => {
        const title = (language === 'en' ? art.titleEn : art.titleAr).toLowerCase();
        const content = (language === 'en' ? art.contentEn : art.contentAr).join(' ').toLowerCase();
        const num = art.number.toString();
        return title.includes(q) || content.includes(q) || num === q;
      });

      if (matchSecTitle || matchSecIntro || (matchingCategories && matchingCategories.length > 0) || (matchingArticles && matchingArticles.length > 0)) {
        return {
          ...sec,
          categories: matchingCategories,
          articles: matchingArticles
        };
      }
      return null;
    }).filter(Boolean) as typeof TERMS_AND_CONDITIONS_DATA.sections;
  }, [searchQuery, language]);

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'service-guide':
        return Shield;
      case 'academic-guide':
        return GraduationCap;
      case 'financial-guide':
        return CreditCard;
      default:
        return FileText;
    }
  };

  return (
    <div className="pt-24 pb-24 bg-[#F9F8F5]">
      {/* Header Banner */}
      <section 
        data-theme="dark" 
        data-header-theme="dark"
        className="bg-[#1F3423] text-white py-16 lg:py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1EC672]/20 border border-[#1EC672]/40 text-[#1EC672] text-xs font-bold uppercase tracking-widest mb-6">
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'OFFICIAL REGULATIONS & CHARTER' : 'اللوائح والسياسات الرسمية'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold tracking-tight mb-4 text-white">
              {language === 'en' ? TERMS_AND_CONDITIONS_DATA.hero.titleEn : TERMS_AND_CONDITIONS_DATA.hero.titleAr}
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
              {language === 'en' ? TERMS_AND_CONDITIONS_DATA.hero.subtitleEn : TERMS_AND_CONDITIONS_DATA.hero.subtitleAr}
            </p>

            {/* Prototype Notice Box */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 leading-relaxed">
              <span className="font-bold text-[#1EC672] block sm:inline mr-2 rtl:mr-0 rtl:ml-2">
                {language === 'en' ? 'Prototype Notice:' : 'تنبيه النموذج الأولي:'}
              </span>
              {language === 'en' ? TERMS_AND_CONDITIONS_DATA.hero.prototypeNoticeEn : TERMS_AND_CONDITIONS_DATA.hero.prototypeNoticeAr}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statutory Policy Highlights Bar */}
      <section className="bg-white border-b border-[#1F3423]/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1F3423]/70 mb-4">
            {language === 'en' ? 'Core Regulatory Timeframes & Thresholds at a Glance' : 'أبرز المهل والنسب النظامية المعتمدة في اللائحة'}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10">
              <span className="block text-xs font-bold text-[#1EC672] font-syne">24 Hours</span>
              <span className="text-[11px] text-[#1F3423]/80 leading-tight block mt-1">
                {language === 'en' ? 'Rescheduling notice for 1-on-1 & business' : 'مهلة إعادة جدولة الأفراد والأعمال'}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10">
              <span className="block text-xs font-bold text-[#1EC672] font-syne">48 Hours</span>
              <span className="text-[11px] text-[#1F3423]/80 leading-tight block mt-1">
                {language === 'en' ? 'Travel notice for group students' : 'إشعار السفر لطلاب المجموعات'}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10">
              <span className="block text-xs font-bold text-[#1EC672] font-syne">10 Minutes</span>
              <span className="text-[11px] text-[#1F3423]/80 leading-tight block mt-1">
                {language === 'en' ? 'Tardiness grace period allowed' : 'مهلة التأخر المسموح بها'}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10">
              <span className="block text-xs font-bold text-[#1EC672] font-syne">80% Attendance</span>
              <span className="text-[11px] text-[#1F3423]/80 leading-tight block mt-1">
                {language === 'en' ? 'Minimum cohort passing rate (max 20% absence)' : 'الحد الأدنى لحضور المستوى (أقصى غياب 20%)'}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10">
              <span className="block text-xs font-bold text-[#1EC672] font-syne">12 Months</span>
              <span className="text-[11px] text-[#1F3423]/80 leading-tight block mt-1">
                {language === 'en' ? 'Maximum deferral validity period' : 'الحد الأقصى للاستفادة من التأجيل'}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10">
              <span className="block text-xs font-bold text-[#1EC672] font-syne">15 Working Days</span>
              <span className="text-[11px] text-[#1F3423]/80 leading-tight block mt-1">
                {language === 'en' ? 'Refund disbursement timeframe' : 'مهلة إعادة مبالغ الاسترداد'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body: Sticky Navigation & Articles */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Sticky Table of Contents & Search (4 cols) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Search Box */}
              <div className="bg-white p-5 rounded-2xl border border-[#1F3423]/10 shadow-sm">
                <label htmlFor="terms-search" className="block text-xs font-bold uppercase tracking-wider text-[#1F3423] mb-2">
                  {language === 'en' ? 'Search Terms & Articles' : 'البحث في المواد واللوائح'}
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#1F3423]/40 absolute top-3 left-3.5 rtl:left-auto rtl:right-3.5 pointer-events-none" />
                  <input
                    id="terms-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'en' ? 'e.g., refund, attendance, 24...' : 'مثال: الاسترداد، الحضور، 24...'}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/15 text-sm text-[#1F3423] placeholder:text-[#1F3423]/40 focus:outline-none focus:ring-2 focus:ring-[#1EC672]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute top-2.5 right-3 rtl:right-auto rtl:left-3 text-xs text-[#1F3423]/60 hover:text-[#1F3423]"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white p-6 rounded-2xl border border-[#1F3423]/10 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1F3423]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F3423]">
                    {language === 'en' ? 'Table of Contents' : 'فهرس اللوائح'}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={expandAll}
                      className="text-[11px] text-[#1EC672] font-semibold hover:underline cursor-pointer"
                    >
                      {language === 'en' ? 'Expand all' : 'فتح الكل'}
                    </button>
                    <span className="text-xs text-[#1F3423]/30">|</span>
                    <button
                      type="button"
                      onClick={collapseAll}
                      className="text-[11px] text-[#1F3423]/60 font-semibold hover:underline cursor-pointer"
                    >
                      {language === 'en' ? 'Collapse' : 'طي الكل'}
                    </button>
                  </div>
                </div>

                <nav className="space-y-2">
                  {TERMS_AND_CONDITIONS_DATA.sections.map((section) => {
                    const IconComp = getSectionIcon(section.id);
                    const isActive = activeSectionId === section.id;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left rtl:text-right p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${
                          isActive
                            ? 'bg-[#1F3423] text-white shadow-sm'
                            : 'hover:bg-[#F9F8F5] text-[#1F3423]/80'
                        }`}
                      >
                        <IconComp className={`w-4 h-4 mt-0.5 shrink-0 ${isActive ? 'text-[#1EC672]' : 'text-[#1F3423]/50'}`} />
                        <div>
                          <span className={`block text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-[#1EC672]' : 'text-[#1F3423]/50'}`}>
                            {section.numberPrefix}
                          </span>
                          <span className={`text-xs font-syne font-bold leading-tight block ${isActive ? 'text-white' : 'text-[#1F3423]'}`}>
                            {language === 'en' ? section.titleEn : section.titleAr}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Assistance Box */}
              <div className="p-5 rounded-2xl bg-[#1F3423]/5 border border-[#1F3423]/10 text-xs text-[#1F3423]/80 leading-relaxed">
                <span className="font-bold text-[#1F3423] block mb-1">
                  {language === 'en' ? 'Student Services Inquiries' : 'استفسارات خدمة وإرشاد الطلاب'}
                </span>
                <p>
                  {language === 'en'
                    ? 'Need clarification on admission, rescheduling, or financial deferrals? Contact the student services coordinator at the Academy.'
                    : 'هل تحتاج إلى توضيح بشأن القبول، أو إعادة الجدولة، أو التأجيل المالي؟ تواصل مع مكتب شؤون الطلاب بالأكاديمية.'}
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Sections & Articles (8 cols) */}
          <main className="lg:col-span-8 space-y-16">
            {filteredData.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-[#1F3423]/10 text-center">
                <AlertCircle className="w-10 h-10 text-[#1EC672] mx-auto mb-4" />
                <h3 className="text-lg font-syne font-bold text-[#1F3423] mb-2">
                  {language === 'en' ? 'No matching articles found' : 'لم يتم العثور على مواد مطابقة'}
                </h3>
                <p className="text-xs text-[#1F3423]/60 mb-6">
                  {language === 'en'
                    ? 'Try searching with different keywords such as "absence", "refund", "24", or reset the search.'
                    : 'جرب البحث بكلمات أخرى مثل "غياب"، "استرداد"، "24"، أو إعادة ضبط البحث.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2.5 rounded-full bg-[#1F3423] text-white text-xs font-syne font-bold uppercase hover:bg-[#1EC672] hover:text-[#0C100E] transition-colors"
                >
                  {language === 'en' ? 'Clear Search' : 'مسح البحث'}
                </button>
              </div>
            ) : (
              filteredData.map((section) => {
                const IconComp = getSectionIcon(section.id);
                return (
                  <section 
                    key={section.id} 
                    id={section.id}
                    className="bg-white rounded-3xl border border-[#1F3423]/10 p-6 sm:p-10 shadow-sm scroll-mt-28"
                  >
                    {/* Section Header */}
                    <div className="border-b border-[#1F3423]/10 pb-6 mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3423]/5 text-[#1EC672] text-[11px] font-bold uppercase tracking-wider mb-3">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{section.numberPrefix}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-syne font-bold text-[#1F3423] mb-2">
                        {language === 'en' ? section.titleEn : section.titleAr}
                      </h2>
                      <p className="text-sm text-[#1F3423]/70 font-light mb-4">
                        {language === 'en' ? section.subtitleEn : section.subtitleAr}
                      </p>
                      {section.introEn && (
                        <div className="p-4 rounded-xl bg-[#F9F8F5] border border-[#1F3423]/10 text-xs sm:text-sm text-[#1F3423]/80 leading-relaxed font-light">
                          {language === 'en' ? section.introEn : section.introAr}
                        </div>
                      )}
                    </div>

                    {/* Part I: Categories Presentation (Services Guide) */}
                    {section.categories && section.categories.length > 0 && (
                      <div className="space-y-6">
                        {section.categories.map((category, catIdx) => (
                          <div 
                            key={category.id}
                            className="p-6 rounded-2xl bg-[#F9F8F5] border border-[#1F3423]/10"
                          >
                            <div className="flex items-baseline gap-3 mb-3">
                              <span className="text-xs font-bold text-[#1EC672] font-syne">
                                0{catIdx + 1}
                              </span>
                              <h3 className="text-lg font-syne font-bold text-[#1F3423]">
                                {language === 'en' ? category.titleEn : category.titleAr}
                              </h3>
                            </div>

                            {category.summaryEn && (
                              <p className="text-xs text-[#1F3423]/75 mb-3 font-light">
                                {language === 'en' ? category.summaryEn : category.summaryAr}
                              </p>
                            )}

                            <ul className="space-y-2">
                              {(language === 'en' ? category.pointsEn : category.pointsAr).map((point, ptIdx) => (
                                <li key={ptIdx} className="flex items-start gap-2.5 text-xs text-[#1F3423]/80 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672] mt-1.5 shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Part II & III: Sequentially Numbered Legal Articles */}
                    {section.articles && section.articles.length > 0 && (
                      <div className="space-y-4">
                        {section.articles.map((article) => {
                          const articleKey = `${section.id}-${article.number}`;
                          const isExpanded = expandedArticles[articleKey] !== false; // default expanded

                          return (
                            <div 
                              key={articleKey}
                              className="rounded-2xl border border-[#1F3423]/10 overflow-hidden bg-[#F9F8F5] transition-colors"
                            >
                              <button
                                type="button"
                                onClick={() => toggleArticle(articleKey)}
                                className="w-full p-4 sm:p-5 text-left rtl:text-right flex items-center justify-between hover:bg-black/5 transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="px-2.5 py-1 rounded-lg bg-[#1F3423] text-white text-xs font-syne font-bold">
                                    {language === 'en' ? `Art. ${article.number}` : `المادة (${article.number})`}
                                  </span>
                                  <h3 className="text-sm sm:text-base font-syne font-bold text-[#1F3423]">
                                    {language === 'en' ? article.titleEn : article.titleAr}
                                  </h3>
                                </div>
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4 text-[#1F3423]/50 shrink-0" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-[#1F3423]/50 shrink-0" />
                                )}
                              </button>

                              {isExpanded && (
                                <div className="p-4 sm:p-6 pt-0 sm:pt-0 border-t border-[#1F3423]/5 text-xs sm:text-sm text-[#1F3423]/80 leading-relaxed font-light space-y-2.5">
                                  {(language === 'en' ? article.contentEn : article.contentAr).map((para, pIdx) => (
                                    <p key={pIdx} className="leading-relaxed">
                                      {para}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
