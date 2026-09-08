import React from 'react';
import { PROGRAMS } from '../data/yaHalaData';
import { Program, Language } from '../types';
import { Landmark, User, Users, Monitor, ArrowRight, Check } from 'lucide-react';

interface ProgramsSectionProps {
  language: Language;
  onSelectProgram: (program: Program) => void;
  onApplyProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  language,
  onSelectProgram,
  onApplyProgram,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'landmark':
        return <Landmark className="w-6 h-6" />;
      case 'user':
        return <User className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="programs"
      data-theme="light"
      className="py-24 bg-[#F9F8F5] px-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h4 className="text-[#1F3423] uppercase tracking-widest font-semibold text-xs md:text-sm mb-4">
            {language === 'en' ? 'OUR PROGRAMS' : 'برامجنا التعليمية'}
          </h4>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-[#222222] tracking-tight mb-4">
            {language === 'en' ? 'Choose Your Path' : 'اختر مسارك التعليمي'}
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light">
            {language === 'en'
              ? 'Flexible, cohort-based and personalized tracks designed for diplomats, professionals, and language enthusiasts.'
              : 'مسارات متنوعة حضورية وافتراضية وخاصة تلائم الدبلوماسيين والتنفيذيين والباحثين وعشاق اللغة العربية.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => {
            return (
              <div
                key={program.id}
                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#F9F8F5] rounded-2xl flex items-center justify-center mb-6 text-[#1F3423] group-hover:bg-[#1F3423] group-hover:text-[#1EC672] transition-colors shadow-sm">
                    {getIcon(program.iconName)}
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1EC672] mb-1">
                    {language === 'en' ? program.category : program.categoryAr}
                  </div>

                  <h3 className="text-xl md:text-2xl font-syne font-bold mb-3 text-[#222222]">
                    {language === 'en' ? program.title : program.titleAr}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed font-light">
                    {language === 'en' ? program.description : program.descriptionAr}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500 font-medium">
                      <strong className="text-[#1F3423]">
                        {language === 'en' ? 'Duration: ' : 'المدة: '}
                      </strong>
                      {language === 'en' ? program.duration : program.durationAr}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      <strong className="text-[#1F3423]">
                        {language === 'en' ? 'Format: ' : 'النمط: '}
                      </strong>
                      {language === 'en' ? program.format : program.formatAr}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="text-[#1F3423] group-hover:text-[#1EC672] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5"
                  >
                    <span>{language === 'en' ? 'View Details' : 'تفاصيل المسار'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                  </button>

                  <button
                    onClick={() => onApplyProgram(program.id)}
                    className="px-3 py-1.5 rounded-full bg-[#1F3423] text-white text-[11px] font-bold hover:bg-[#1EC672] hover:text-[#1F3423] transition-colors"
                  >
                    {language === 'en' ? 'Apply' : 'تقديم'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
