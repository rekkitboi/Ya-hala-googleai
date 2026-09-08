import React, { useState } from 'react';
import { EDITORIAL_HIGHLIGHTS } from '../data/yaHalaData';
import { EditorialHighlight, Language } from '../types';
import { Calendar, Clock, ArrowRight, BookOpen, X } from 'lucide-react';

interface EditorialSectionProps {
  language: Language;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ language }) => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialHighlight | null>(null);

  return (
    <section
      id="upcoming"
      data-theme="light"
      className="py-24 bg-[#F9F8F5] px-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center md:text-left rtl:md:text-right">
          <h4 className="text-[#1F3423] uppercase tracking-widest font-semibold text-xs md:text-sm mb-4">
            {language === 'en' ? 'UPCOMING EXPERIENCES & JOURNAL' : 'تجارب قادمة ومقالات مختارة'}
          </h4>
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-[#222222]">
            {language === 'en' ? 'Editorial Highlights' : 'إضاءات ثقافية وأدبية'}
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {EDITORIAL_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group border border-gray-100"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#1F3423]/90 backdrop-blur-md text-[#1EC672] text-[10px] font-bold tracking-widest uppercase">
                      {language === 'en' ? item.category : item.categoryAr}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1EC672]" />
                      {language === 'en' ? item.date : item.dateAr}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1EC672]" />
                      {language === 'en' ? item.readTime : item.readTimeAr}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl mb-3 text-[#1F3423] group-hover:text-[#1EC672] transition-colors leading-snug">
                    {language === 'en' ? item.title : item.titleAr}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-light line-clamp-3">
                    {language === 'en' ? item.description : item.descriptionAr}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-6 pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F3423] group-hover:text-[#1EC672] transition-colors">
                  <span>{language === 'en' ? 'Read Full Story' : 'اقرأ المقال كاملاً'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-[#1F3423] text-[#1EC672] text-[10px] font-bold tracking-widest uppercase">
                {language === 'en' ? selectedArticle.category : selectedArticle.categoryAr}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-syne font-bold text-[#1F3423] mb-4">
              {language === 'en' ? selectedArticle.title : selectedArticle.titleAr}
            </h3>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {language === 'en' ? selectedArticle.description : selectedArticle.descriptionAr}
            </p>

            <div className="p-4 rounded-2xl bg-[#F9F8F5] border border-gray-200 text-sm text-[#1F3423]">
              <h5 className="font-bold mb-1">
                {language === 'en' ? 'Linguistic Field Note:' : 'ملاحظة لغوية ميدانية:'}
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'All participants in our upcoming cultural excursions receive a printed dialect glossarium and audio companion app sync.'
                  : 'يحصل جميع المشاركين في رحلاتنا الثقافية على معجم مطبوع لألفاظ المنطقة وتطبيق صوتي مرافق للتدريب.'}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1F3423] text-white text-xs font-bold font-syne uppercase hover:bg-[#142317]"
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
