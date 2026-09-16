import React from 'react';
import { Program, Language } from '../types';
import { X, CheckCircle2, Clock, Users, MapPin, ArrowRight } from 'lucide-react';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  language: Language;
  onApply: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  language,
  onApply,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-2">
          <span className="px-3 py-1 rounded-full bg-[#1EC672]/20 text-[#1F3423] text-[11px] font-bold tracking-widest uppercase">
            {language === 'en' ? program.category : program.categoryAr}
          </span>
        </div>

        <h3 className="text-3xl font-syne font-bold text-[#1F3423] mb-4">
          {language === 'en' ? program.title : program.titleAr}
        </h3>

        <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
          {language === 'en' ? program.description : program.descriptionAr}
        </p>

        {/* Quick Specs */}
        <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F9F8F5] border border-gray-200/70 mb-8 text-xs">
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="w-4 h-4 text-[#1EC672]" />
            <div>
              <span className="font-bold text-[#1F3423] block">
                {language === 'en' ? 'Duration' : 'المدة'}
              </span>
              <span>{language === 'en' ? program.duration : program.durationAr}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-4 h-4 text-[#1EC672]" />
            <div>
              <span className="font-bold text-[#1F3423] block">
                {language === 'en' ? 'Learning Format' : 'نمط التدريب'}
              </span>
              <span>{language === 'en' ? program.format : program.formatAr}</span>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            {language === 'en' ? 'RECOMMENDED FOR' : 'الفئة المستهدفة'}
          </h4>
          <p className="text-sm font-medium text-gray-800">
            {language === 'en' ? program.audience : program.audienceAr}
          </p>
        </div>

        {/* What You Receive */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            {language === 'en' ? 'PROGRAM FEATURES & DELIVERABLES' : 'مميزات ومخرجات البرنامج'}
          </h4>
          <div className="space-y-2.5">
            {(language === 'en' ? program.features : program.featuresAr).map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-bold text-gray-500 hover:text-gray-800 uppercase tracking-wider"
          >
            {language === 'en' ? 'Close' : 'إغلاق'}
          </button>

          <button
            onClick={() => {
              onClose();
              onApply(program.id);
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1F3423] text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#1EC672] hover:text-[#1F3423] transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <span>{language === 'en' ? 'Enroll in this Program' : 'الالتحاق بهذا البرنامج'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
