import React, { useState, useEffect, useRef } from 'react';
import { EDITORIAL_HIGHLIGHTS, ASSETS } from '../data/yaHalaData';
import { Language, EditorialHighlight } from '../types';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  X, 
  Sparkles, 
  Bookmark,
  Share2,
  Check
} from 'lucide-react';

interface CulturalHighlightsPageProps {
  language: Language;
}

export const CulturalHighlightsPage: React.FC<CulturalHighlightsPageProps> = ({ language }) => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialHighlight | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const primaryArticle = EDITORIAL_HIGHLIGHTS[0];
  const secondaryArticles = EDITORIAL_HIGHLIGHTS.slice(1);

  // Focus trap and keyboard handling for modal
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(timer);
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

  const handleShareArticle = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F9F8F5]">
      {/* Editorial Hero: Asymmetric Composition */}
      <section 
        data-theme="dark" 
        data-header-theme="dark"
        className="relative bg-[#1F3423] text-white py-20 lg:py-24 overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: `url("${ASSETS.experienceStone}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3423] via-[#1F3423]/85 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1EC672]/20 border border-[#1EC672]/40 text-[#1EC672] text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'ESSAYS & LINGUISTIC ESSENCE' : 'مقالات ودراسات لغوية وثقافية'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold tracking-tight mb-6 leading-tight">
              {language === 'en' ? 'Cultural and Literary Highlights' : 'إضاءات ثقافية وأدبية'}
            </h1>

            <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-6">
              {language === 'en'
                ? 'Explore stories, ideas, and cultural perspectives that bring the language, heritage, places, and everyday life of Saudi Arabia into closer view.'
                : 'استكشف حكايات وأفكاراً وإضاءات ثقافية تقرّب إليك لغة المملكة وتراثها وأماكنها وتفاصيل حياتها اليومية.'}
            </p>

            <div className="flex items-center gap-6 text-xs text-white/70 font-syne border-t border-white/15 pt-6">
              <span>{language === 'en' ? 'Curated Dialect Articles' : 'مقالات لهجة منتقاة'}</span>
              <span>•</span>
              <span>{language === 'en' ? 'Heritage & Architecture' : 'تراث وعمارة'}</span>
              <span>•</span>
              <span>{language === 'en' ? 'Folklore & Hospitality' : 'أهازيج وتقاليد الضيافة'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Part B: Featured Lead Story (Asymmetric Editorial Presentation) */}
        {primaryArticle && (
          <div className="mb-20">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1EC672] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'FEATURED STORY' : 'المقال الرئيسي المميز'}</span>
            </div>

            <div className="bg-white rounded-3xl border border-[#1F3423]/10 overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px] overflow-hidden group">
                  <img
                    src={primaryArticle.image}
                    alt={language === 'en' ? primaryArticle.title : primaryArticle.titleAr}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 rtl:left-auto rtl:right-5">
                    <span className="px-4 py-1.5 rounded-full bg-[#1F3423] text-white text-[10px] font-bold tracking-widest uppercase shadow-md">
                      {language === 'en' ? primaryArticle.category : primaryArticle.categoryAr}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-[#1F3423]/60 mb-4 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#1EC672]" />
                        {language === 'en' ? primaryArticle.date : primaryArticle.dateAr}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                        {language === 'en' ? primaryArticle.readTime : primaryArticle.readTimeAr}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-syne font-bold text-[#1F3423] mb-4 leading-tight">
                      {language === 'en' ? primaryArticle.title : primaryArticle.titleAr}
                    </h2>

                    <p className="text-sm sm:text-base text-[#1F3423]/80 leading-relaxed font-light mb-8">
                      {language === 'en' ? primaryArticle.description : primaryArticle.descriptionAr}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#1F3423]/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(primaryArticle)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F3423] text-white text-xs font-syne font-bold uppercase tracking-wider hover:bg-[#1EC672] hover:text-[#0C100E] transition-colors cursor-pointer shadow-sm"
                    >
                      <span>{language === 'en' ? 'Read Full Article' : 'قراءة المقال كاملاً'}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                    <span className="text-xs text-[#1F3423]/60 italic">
                      {language === 'en' ? 'Cover Essay' : 'مقال الغلاف'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Part C: Additional Highlights (Varied Editorial Rows) */}
        <div className="mb-20">
          <div className="border-b border-[#1F3423]/10 pb-4 mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl sm:text-3xl font-syne font-bold text-[#1F3423]">
              {language === 'en' ? 'More Cultural Essays & Notes' : 'المزيد من المقالات والدراسات'}
            </h2>
            <span className="text-xs text-[#1F3423]/60 font-medium">
              {language === 'en' ? `${secondaryArticles.length} additional stories` : `${secondaryArticles.length} مقالات إضافية`}
            </span>
          </div>

          <div className="space-y-8">
            {secondaryArticles.map((article, idx) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl border border-[#1F3423]/10 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-5/12 h-60 md:h-52 rounded-2xl overflow-hidden shrink-0 relative group">
                  <img
                    src={article.image}
                    alt={language === 'en' ? article.title : article.titleAr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#1F3423] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      {language === 'en' ? article.category : article.categoryAr}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-[#1F3423]/60 mb-2 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#1EC672]" />
                        {language === 'en' ? article.date : article.dateAr}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                        {language === 'en' ? article.readTime : article.readTimeAr}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-syne font-bold text-[#1F3423] mb-3 leading-snug">
                      {language === 'en' ? article.title : article.titleAr}
                    </h3>

                    <p className="text-sm text-[#1F3423]/75 font-light leading-relaxed mb-6">
                      {language === 'en' ? article.description : article.descriptionAr}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#1F3423]/10">
                    <span className="text-xs text-[#1EC672] font-syne font-bold uppercase tracking-wider">
                      {language === 'en' ? 'Dialect Research' : 'بحث لغوي'}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-2 text-xs font-syne font-bold uppercase tracking-wider text-[#1F3423] hover:text-[#1EC672] transition-colors cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Read Story' : 'قراءة المقال'}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part E: Prototype Note */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#EBE8E1] border border-[#1F3423]/15 text-xs text-[#1F3423]/80 leading-relaxed text-center sm:text-left rtl:sm:text-right">
            <span className="font-bold text-[#1F3423] block sm:inline mr-2 rtl:mr-0 rtl:ml-2">
              {language === 'en' ? 'Editorial Prototype Note:' : 'ملاحظة النموذج التحريري:'}
            </span>
            {language === 'en'
              ? 'These stories are prototype editorial previews. Dates, research details, and final article content may change before publication.'
              : 'تمثل هذه المواد معاينات تحريرية ضمن النموذج الأولي، وقد تتغير التواريخ والتفاصيل البحثية والمحتوى النهائي قبل النشر.'}
          </div>
        </div>
      </div>

      {/* Part D: Article Reader Modal */}
      {selectedArticle && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0C100E]/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            ref={modalRef}
            className="bg-[#F9F8F5] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 md:p-12 relative shadow-2xl border border-[#1F3423]/15"
          >
            {/* Close Button positioned with RTL awareness */}
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full hover:bg-[#1F3423]/10 text-[#1F3423] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              aria-label={language === 'en' ? 'Close article reader' : 'إغلاق نافذة المقال'}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Tag */}
            <div className="mb-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#1F3423]/10 text-[#1EC672] text-[10px] font-bold tracking-widest uppercase inline-block">
                {language === 'en' ? selectedArticle.category : selectedArticle.categoryAr}
              </span>
            </div>

            {/* Title */}
            <h2 
              id="article-modal-title" 
              className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-[#1F3423] mb-4 leading-tight"
            >
              {language === 'en' ? selectedArticle.title : selectedArticle.titleAr}
            </h2>

            {/* Meta Row */}
            <div className="flex items-center gap-4 text-xs text-[#1F3423]/60 mb-6 font-medium pb-6 border-b border-[#1F3423]/10">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1EC672]" />
                {language === 'en' ? selectedArticle.date : selectedArticle.dateAr}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                {language === 'en' ? selectedArticle.readTime : selectedArticle.readTimeAr}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#1EC672]" />
                {language === 'en' ? 'Ya Hala Dispatch' : 'نشرة يا هلا التحريرية'}
              </span>
            </div>

            {/* Hero Image with exact alt text matching article title */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img
                src={selectedArticle.image}
                alt={language === 'en' ? selectedArticle.title : selectedArticle.titleAr}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Main Essay Body */}
            <div className="prose prose-sm sm:prose-base max-w-none text-[#1F3423]/85 leading-relaxed font-light mb-8 space-y-4">
              <p className="text-base sm:text-lg font-normal leading-relaxed text-[#1F3423]">
                {language === 'en' ? selectedArticle.description : selectedArticle.descriptionAr}
              </p>
              <p>
                {language === 'en'
                  ? 'Through structured field immersion, Ya Hala bridges traditional dialect studies with experiential vocabulary. In this research track, learners discover how oral storytelling, communal hospitality rituals, and vernacular architecture embody Saudi cultural pride and linguistic warmth.'
                  : 'من خلال المعايشة الميدانية المنظمة، يربط يا هلا بين دراسة اللهجات والممارسة التطبيقية. في هذا المسار البحثي، يستكشف المتعلمون كيف تجسد الرواية الشفوية، وطقوس الكرم، والعمارة التراثية قيم الأصالة والترحاب في المجتمع السعودي.'}
              </p>
              <p>
                {language === 'en'
                  ? 'Language is not merely an abstract code; it is living history etched into mud-brick walls, scented with cardamom in boiling dallahs, and chanted on seafaring dhows across the Red Sea.'
                  : 'ليست اللغة مجرد مفردات مجردة؛ بل هي تاريخ حي محفور في جدران الطين، وعبق هيل يفوح من دلال القهوة، وأهازيج بحارة تتردد على مراكب البحر الأحمر.'}
              </p>
            </div>

            {/* In-Modal Disclaimer Note */}
            <div className="p-5 rounded-2xl bg-[#1F3423]/5 border border-[#1F3423]/10 text-xs text-[#1F3423]/80 leading-relaxed mb-8">
              <span className="font-bold text-[#1F3423] block mb-1">
                {language === 'en' ? 'Editorial Note:' : 'ملاحظة تحريرية:'}
              </span>
              {language === 'en'
                ? 'These stories are prototype editorial previews. Dates, research details, and final article content may change before publication.'
                : 'تمثل هذه المواد معاينات تحريرية ضمن النموذج الأولي، وقد تتغير التواريخ والتفاصيل البحثية والمحتوى النهائي قبل النشر.'}
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-[#1F3423]/10">
              <button
                type="button"
                onClick={handleShareArticle}
                className="inline-flex items-center gap-2 text-xs font-syne font-bold text-[#1F3423] hover:text-[#1EC672] transition-colors cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-[#1EC672]" />
                    <span>{language === 'en' ? 'Link Copied' : 'تم نسخ الرابط'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>{language === 'en' ? 'Share Story Link' : 'مشاركة المقال'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-8 py-3 rounded-full bg-[#1F3423] text-white text-xs font-bold font-syne uppercase hover:bg-[#1EC672] hover:text-[#0C100E] transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              >
                {language === 'en' ? 'Close Reader' : 'إغلاق القارئ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
