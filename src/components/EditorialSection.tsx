import React, { useState } from 'react';
import { EDITORIAL_HIGHLIGHTS } from '../data/yaHalaData';
import { EditorialHighlight, Language } from '../types';
import { Calendar, Clock, ArrowRight, BookOpen, X, Sparkles } from 'lucide-react';

interface EditorialSectionProps {
  language: Language;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ language }) => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialHighlight | null>(null);

  return (
    <section
      id="upcoming"
      data-theme="light"
      data-header-theme="light"
      className="py-24 md:py-32 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Unified Editorial Module with Integrated Header */}
        <div className="glass-neutral-frosted rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/40">
          {/* Integrated Module Header */}
          <div className="mb-10 text-center md:text-left rtl:md:text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/10 backdrop-blur-md border border-[#1F3423]/15 text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
              <span>{language === 'en' ? 'UPCOMING EXPERIENCES & JOURNAL' : 'تجارب قادمة ومقالات مختارة'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-2">
              {language === 'en' ? 'Editorial Highlights' : 'إضاءات ثقافية وأدبية'}
            </h2>
            <p className="text-sm md:text-base text-[#1F3423]/80 font-medium">
              {language === 'en'
                ? 'Deep dives into Saudi linguistic heritage, architectural journeys, and student narratives.'
                : 'مقالات معمقة عن التراث اللغوي، والرحلات المعمارية، وتجارب الطلاب الملهمة في رحاب المملكة.'}
            </p>
          </div>

          {/* 3 Articles Grid with Warm Glass Cards */}
          <div className="grid md:grid-cols-3 gap-8">
          {EDITORIAL_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedArticle(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(item);
                }
              }}
              className="glass-warm-card rounded-2xl overflow-hidden border border-[#1F3423]/12 hover:border-[#1EC672]/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-3 py-1 rounded-full bg-[#1F3423]/95 backdrop-blur-md text-[#1EC672] text-[10px] font-bold tracking-widest uppercase border border-[#1EC672]/20 shadow-sm">
                      {language === 'en' ? item.category : item.categoryAr}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-[#1F3423]/80 mb-3 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#1EC672]" />
                      {language === 'en' ? item.date : item.dateAr}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                      {language === 'en' ? item.readTime : item.readTimeAr}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl mb-3 text-[#1F3423] group-hover:text-[#1EC672] transition-colors leading-snug">
                    {language === 'en' ? item.title : item.titleAr}
                  </h3>

                  <p className="text-sm text-[#1F3423]/75 leading-relaxed font-light line-clamp-3">
                    {language === 'en' ? item.description : item.descriptionAr}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-6 pt-2 border-t border-[#1F3423]/10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                  <span>{language === 'en' ? 'Read Full Story' : 'اقرأ المقال كاملاً'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1F3423] group-hover:text-[#1EC672] transform group-hover:translate-x-1 transition-all rtl:group-hover:-translate-x-1" />
                </span>
                <BookOpen className="w-4 h-4 text-[#1F3423]/40 group-hover:text-[#1EC672] transition-colors" />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in">
          <div className="glass-warm-light rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl border border-[#1F3423]/20">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-full hover:bg-[#1F3423]/10 text-[#1F3423] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-[#1F3423] text-[#1EC672] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                {language === 'en' ? selectedArticle.category : selectedArticle.categoryAr}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-syne font-bold text-[#1F3423] mb-4">
              {language === 'en' ? selectedArticle.title : selectedArticle.titleAr}
            </h3>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-md border border-[#1F3423]/10">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-base text-[#1F3423]/85 leading-relaxed mb-6 font-light">
              {language === 'en' ? selectedArticle.description : selectedArticle.descriptionAr}
            </p>

            <div className="p-4 rounded-2xl bg-[#1F3423]/5 border border-[#1F3423]/12 text-sm text-[#1F3423]">
              <h5 className="font-bold mb-1">
                {language === 'en' ? 'Linguistic Field Note:' : 'ملاحظة لغوية ميدانية:'}
              </h5>
              <p className="text-xs text-[#1F3423]/75 leading-relaxed">
                {language === 'en'
                  ? 'All participants in our upcoming cultural excursions receive a printed dialect glossarium and audio companion app sync.'
                  : 'يحصل جميع المشاركين في رحلاتنا الثقافية على معجم مطبوع لألفاظ المنطقة وتطبيق صوتي مرافق للتدريب.'}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1F3423] text-white text-xs font-bold font-syne uppercase hover:bg-[#1EC672] hover:text-[#0C100E] transition-colors cursor-pointer shadow-sm"
              >
                {language === 'en' ? 'Close Reader' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
