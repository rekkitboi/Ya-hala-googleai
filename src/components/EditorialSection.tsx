import { useFocusTrap } from "../hooks/useFocusTrap";
import React, { useState, useEffect, useRef } from 'react';
import { EDITORIAL_HIGHLIGHTS } from '../data/yaHalaData';
import { Language, EditorialHighlight } from '../types';
import { Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

interface EditorialSectionProps {
  language: Language;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ language }) => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialHighlight | null>(null);
  const primaryArticle = EDITORIAL_HIGHLIGHTS[0];
  const secondaryArticles = EDITORIAL_HIGHLIGHTS.slice(1, 3);
  
  // Accessibility & focus trap for modal
  const trappedModalRef = useFocusTrap(!!selectedArticle);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedArticle) {
        setSelectedArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

  return (
    <section
      id="editorial"
      data-theme="light"
      data-header-theme="light"
      className="py-16 md:py-24 px-6 bg-[#F9F8F5] relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left rtl:md:text-right max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/10 border border-[#1F3423]/15 text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span>{language === 'en' ? 'UPCOMING EXPERIENCES & JOURNAL' : 'تجارب قادمة ومقالات مختارة'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'Cultural and Literary Highlights' : 'إضاءات ثقافية وأدبية'}
          </h2>
          <p className="text-sm md:text-base text-[#1F3423]/80 font-light">
            {language === 'en'
              ? 'Deep dives into Saudi linguistic heritage, architectural journeys, and student narratives.'
              : 'مقالات معمقة عن التراث اللغوي، والرحلات المعمارية، وتجارب الطلاب الملهمة في رحاب المملكة.'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Primary Story */}
          {primaryArticle && (
            <div className="w-full lg:w-[60%] group cursor-pointer focus-visible:outline-none" onClick={() => setSelectedArticle(primaryArticle)}>
              <button 
                type="button"
                className="w-full text-left rtl:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-lg relative block group"
              >
                <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl relative mb-6">
                  <img
                    src={primaryArticle.image}
                    alt={language === 'en' ? primaryArticle.title : primaryArticle.titleAr}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1F3423] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      {language === 'en' ? primaryArticle.category : primaryArticle.categoryAr}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-[#1F3423]/60 mb-3 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {language === 'en' ? primaryArticle.date : primaryArticle.dateAr}
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {language === 'en' ? primaryArticle.readTime : primaryArticle.readTimeAr}
                  </span>
                </div>
                
                <h3 className="font-syne font-bold text-2xl md:text-3xl mb-4 text-[#1F3423] group-hover:text-[#1EC672] transition-colors leading-tight">
                  {language === 'en' ? primaryArticle.title : primaryArticle.titleAr}
                </h3>
                <p className="text-sm md:text-base text-[#1F3423]/75 leading-relaxed font-light line-clamp-3 mb-6">
                  {language === 'en' ? primaryArticle.description : primaryArticle.descriptionAr}
                </p>
                
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                  <span>{language === 'en' ? 'Explore Story' : 'استكشف المقال'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                </span>
              </button>
            </div>
          )}

          {/* Secondary Stories */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center gap-8 border-t lg:border-t-0 lg:border-l lg:rtl:border-l-0 lg:rtl:border-r border-[#1F3423]/10 pt-8 lg:pt-0 lg:pl-12 lg:rtl:pl-0 lg:rtl:pr-12">
            {secondaryArticles.map((article, idx) => (
              <React.Fragment key={article.id}>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 text-left rtl:text-right cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-lg"
                >
                  <div className="w-full sm:w-1/3 lg:w-full xl:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shrink-0 relative">
                    <img
                      src={article.image}
                      alt={language === 'en' ? article.title : article.titleAr}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#1EC672]">
                        {language === 'en' ? article.category : article.categoryAr}
                      </span>
                    </div>
                    <h4 className="font-syne font-bold text-lg mb-2 text-[#1F3423] group-hover:text-[#1EC672] transition-colors leading-snug line-clamp-2">
                      {language === 'en' ? article.title : article.titleAr}
                    </h4>
<div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#1EC672] mt-1 group-hover:text-[#1F3423] transition-colors">
  <span>{language === "en" ? "Explore Story" : "استكشف المقال"}</span>
  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
</div>
                    <div className="flex items-center gap-4 text-[11px] text-[#1F3423]/50 font-medium mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {language === 'en' ? article.date : article.dateAr}
                      </span>
                    </div>
                  </div>
                </button>
                {idx === 0 && <div className="hidden sm:block lg:hidden xl:block w-full h-[1px] bg-[#1F3423]/10" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0C100E]/80 backdrop-blur-sm animate-in fade-in"
        >
          <div 
            ref={trappedModalRef}
            className="bg-[#F9F8F5] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full hover:bg-[#1F3423]/5 text-[#1F3423] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              aria-label={language === 'en' ? 'Close modal' : 'إغلاق'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-[#1F3423]/5 text-[#1EC672] text-[10px] font-bold tracking-widest uppercase">
                {language === 'en' ? selectedArticle.category : selectedArticle.categoryAr}
              </span>
            </div>

            <h3 id="modal-title" className="text-2xl md:text-4xl font-syne font-bold text-[#1F3423] mb-6 leading-tight">
              {language === 'en' ? selectedArticle.title : selectedArticle.titleAr}
            </h3>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img
                src={selectedArticle.image}
                alt={language === 'en' ? selectedArticle.title : selectedArticle.titleAr}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-sm md:prose-base max-w-none text-[#1F3423]/85 leading-relaxed font-light mb-8">
              <p>{language === 'en' ? selectedArticle.description : selectedArticle.descriptionAr}</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1F3423]/5 text-sm text-[#1F3423]">
              <h5 className="font-bold mb-2">
                {language === 'en' ? 'Prototype Note:' : 'ملاحظة النموذج المبدئي:'}
              </h5>
              <p className="text-xs text-[#1F3423]/75 leading-relaxed">
                {language === 'en'
                  ? 'This preview demonstrates how cultural context and related language resources may appear in future Ya Hala stories.'
                  : 'يوضح هذا النموذج كيف يمكن عرض السياق الثقافي والموارد اللغوية المرتبطة به في مقالات يا هلا مستقبلاً.'}
              </p>
            </div>

            <div className="mt-10 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-8 py-3 rounded-full bg-[#1F3423] text-white text-xs font-bold font-syne uppercase hover:bg-[#1EC672] hover:text-[#0C100E] transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              >
                {language === 'en' ? 'Close' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
