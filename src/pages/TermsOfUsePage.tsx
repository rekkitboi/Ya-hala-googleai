import React, { useState, useMemo } from 'react';
import { TERMS_OF_USE_DATA } from '../data/legal/termsOfUseData';
import { Language } from '../types';
import { 
  ShieldCheck, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  FileCheck,
  AlertTriangle,
  Info
} from 'lucide-react';

interface TermsOfUsePageProps {
  language: Language;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    TERMS_OF_USE_DATA.sections.forEach(sec => {
      all[sec.id] = true;
    });
    setExpandedSections(all);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return TERMS_OF_USE_DATA.sections;

    return TERMS_OF_USE_DATA.sections.filter(sec => {
      const title = (language === 'en' ? sec.titleEn : sec.titleAr).toLowerCase();
      const content = (language === 'en' ? sec.contentEn : sec.contentAr).join(' ').toLowerCase();
      const num = sec.number.toString();
      return title.includes(q) || content.includes(q) || num === q;
    });
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
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'DIGITAL USAGE POLICY' : 'سياسة الاستخدام الرقمي'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold tracking-tight mb-4 text-white">
              {language === 'en' ? TERMS_OF_USE_DATA.hero.titleEn : TERMS_OF_USE_DATA.hero.titleAr}
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
              {language === 'en' ? TERMS_OF_USE_DATA.hero.subtitleEn : TERMS_OF_USE_DATA.hero.subtitleAr}
            </p>

            {/* Prototype Notice Box */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 leading-relaxed">
              <span className="font-bold text-[#1EC672] block sm:inline mr-2 rtl:mr-0 rtl:ml-2">
                {language === 'en' ? 'Prototype Notice:' : 'تنبيه النموذج الأولي:'}
              </span>
              {language === 'en' ? TERMS_OF_USE_DATA.hero.prototypeNoticeEn : TERMS_OF_USE_DATA.hero.prototypeNoticeAr}
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Sticky Table of Contents & Search (4 cols) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Search Box */}
              <div className="bg-white p-5 rounded-2xl border border-[#1F3423]/10 shadow-sm">
                <label htmlFor="terms-of-use-search" className="block text-xs font-bold uppercase tracking-wider text-[#1F3423] mb-2">
                  {language === 'en' ? 'Search Terms of Use' : 'البحث في سياسة الاستخدام'}
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#1F3423]/40 absolute top-3 left-3.5 rtl:left-auto rtl:right-3.5 pointer-events-none" />
                  <input
                    id="terms-of-use-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'en' ? 'e.g., copyright, prototype, form...' : 'مثال: الملكية، النماذج، الاستخدام...'}
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

              {/* Table of Contents List */}
              <div className="bg-white p-6 rounded-2xl border border-[#1F3423]/10 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1F3423]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F3423]">
                    {language === 'en' ? 'Sections Directory' : 'فهرس المواد (15 مادة)'}
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

                <div className="max-h-[380px] overflow-y-auto pr-1 rtl:pr-0 rtl:pl-1 space-y-1">
                  {TERMS_OF_USE_DATA.sections.map((section) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left rtl:text-right p-2.5 rounded-xl transition-all flex items-center gap-2.5 cursor-pointer text-xs ${
                          isActive
                            ? 'bg-[#1F3423] text-white font-bold'
                            : 'hover:bg-[#F9F8F5] text-[#1F3423]/80'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] shrink-0 font-syne ${
                          isActive ? 'bg-[#1EC672] text-[#0C100E] font-bold' : 'bg-[#1F3423]/5 text-[#1F3423]'
                        }`}>
                          {section.number}
                        </span>
                        <span className="truncate">
                          {language === 'en' ? section.titleEn : section.titleAr}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legal Notice Callout */}
              <div className="p-5 rounded-2xl bg-[#1F3423]/5 border border-[#1F3423]/10 text-xs text-[#1F3423]/80 leading-relaxed">
                <span className="font-bold text-[#1F3423] block mb-1">
                  {language === 'en' ? 'Prototype Portal Scope' : 'نطاق الموقع التجريبي'}
                </span>
                <p>
                  {language === 'en'
                    ? 'These Terms govern the public digital portal. Enrolled student regulations are governed by the Ya Hala Student Terms & Conditions.'
                    : 'تحكم هذه الشروط تصفح الموقع الرقمي. أما حقوق ولوائح الطلاب المسجلين فتخضع للشروط والأحكام الأكاديمية.'}
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: 15 Sequential Articles */}
          <main className="lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-[#1F3423]/10 text-center">
                <AlertTriangle className="w-10 h-10 text-[#1EC672] mx-auto mb-4" />
                <h3 className="text-lg font-syne font-bold text-[#1F3423] mb-2">
                  {language === 'en' ? 'No matching sections found' : 'لم يتم العثور على أقسام مطابقة'}
                </h3>
                <p className="text-xs text-[#1F3423]/60 mb-6">
                  {language === 'en' ? 'Reset your search query to see all 15 sections.' : 'أعد ضبط البحث لمشاهدة كافة المواد الـ 15.'}
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
              filteredSections.map((section) => {
                const isExpanded = expandedSections[section.id] !== false; // default expanded

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="bg-white rounded-3xl border border-[#1F3423]/10 overflow-hidden shadow-sm scroll-mt-28 transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 sm:p-7 text-left rtl:text-right flex items-center justify-between hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-8 h-8 rounded-xl bg-[#1F3423] text-[#1EC672] flex items-center justify-center font-syne font-bold text-xs shrink-0">
                          {section.number}
                        </span>
                        <h2 className="text-base sm:text-lg font-syne font-bold text-[#1F3423]">
                          {language === 'en' ? section.titleEn : section.titleAr}
                        </h2>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#1F3423]/50 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#1F3423]/50 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 text-xs sm:text-sm text-[#1F3423]/80 leading-relaxed font-light border-t border-[#1F3423]/5 space-y-3">
                        {(language === 'en' ? section.contentEn : section.contentAr).map((paragraph, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
