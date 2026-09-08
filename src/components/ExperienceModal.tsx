import React from 'react';
import { Experience, Language } from '../types';
import { X, MapPin, Clock, CheckCircle2, ArrowRight, Compass } from 'lucide-react';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
  language: Language;
  onBookExperience: (experienceTitle: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  language,
  onBookExperience,
}) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-100 flex flex-col">
        {/* Banner Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden shrink-0">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Close button on image */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1EC672] text-[#1F3423] text-[10px] font-bold tracking-widest uppercase mb-2">
              {language === 'en' ? experience.tag : experience.tagAr}
            </span>
            <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white drop-shadow">
              {language === 'en' ? experience.title : experience.titleAr}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex-1">
          {/* Location & Time Tags */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 mb-6 pb-4 border-b border-gray-100">
            <span className="flex items-center gap-1.5 text-[#1F3423]">
              <MapPin className="w-4 h-4 text-[#1EC672]" />
              {language === 'en' ? experience.location : experience.locationAr}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5 text-gray-700">
              <Clock className="w-4 h-4 text-[#1EC672]" />
              {language === 'en' ? experience.duration : experience.durationAr}
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-6">
            {language === 'en' ? experience.description : experience.descriptionAr}
          </p>

          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F3423] mb-4">
              {language === 'en' ? 'CURATED HIGHLIGHTS & ACTIVITIES' : 'أبرز فعاليات الرحلة الميدانية'}
            </h4>
            <div className="space-y-3">
              {(language === 'en' ? experience.highlights : experience.highlightsAr).map(
                (item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-bold text-gray-500 hover:text-gray-800 uppercase tracking-wider"
            >
              {language === 'en' ? 'Back' : 'رجوع'}
            </button>

            <button
              onClick={() => {
                onClose();
                onBookExperience(experience.title);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1F3423] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#1EC672] hover:text-[#1F3423] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{language === 'en' ? 'Reserve an Experience Slot' : 'حجز مقعد في التجربة'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
