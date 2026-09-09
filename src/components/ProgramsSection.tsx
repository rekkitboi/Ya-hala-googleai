import React from 'react';
import { PROGRAMS } from '../data/yaHalaData';
import { Program, Language } from '../types';
import { Landmark, User, Users, Monitor, ArrowRight, Layers } from 'lucide-react';

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
        return <Landmark className="w-5 h-5 text-[#1F3423] group-hover:text-[#1EC672] transition-colors" aria-hidden="true" />;
      case 'user':
        return <User className="w-5 h-5 text-[#1F3423] group-hover:text-[#1EC672] transition-colors" aria-hidden="true" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#1F3423] group-hover:text-[#1EC672] transition-colors" aria-hidden="true" />;
      default:
        return <Monitor className="w-5 h-5 text-[#1F3423] group-hover:text-[#1EC672] transition-colors" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="programs"
      data-theme="light"
      data-header-theme="light"
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Restrained contextual backdrop letting the historic architecture breathe */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F8F5]/60 via-[#F9F8F5]/80 to-[#F9F8F5]/60 backdrop-blur-md pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-control-light text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-[#1F3423]" />
            <span>{language === 'en' ? 'OUR CURRICULAR TRACKS' : 'مساراتنا التعليمية'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
            {language === 'en' ? 'Choose Your Path' : 'اختر مسارك التعليمي'}
          </h2>
          <p className="text-sm md:text-base text-[#1F3423]/80 font-normal leading-relaxed">
            {language === 'en'
              ? 'Cohort-based and personalized tracks designed for diplomats, professionals, and language enthusiasts seeking conversational fluency.'
              : 'مسارات متنوعة حضورية وافتراضية وخاصة تلائم الدبلوماسيين والتنفيذيين والباحثين وعشاق اللغة العربية.'}
          </p>
        </div>

        {/* 4 Cards Responsive Composition in Warm Translucent Glass */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PROGRAMS.map((program) => {
            return (
              <div
                key={program.id}
                className="group glass-warm-card rounded-2xl p-7 hover:border-[#1EC672]/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon with high-contrast default state */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1F3423]/10 border border-[#1F3423]/15 flex items-center justify-center group-hover:bg-[#1F3423] transition-colors shadow-xs">
                      {getIcon(program.iconName)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F3423] bg-[#1F3423]/8 px-2.5 py-1 rounded-full border border-[#1F3423]/10">
                      {language === 'en' ? program.category : program.categoryAr}
                    </span>
                  </div>

                  <h3 className="text-xl font-syne font-bold mb-2.5 text-[#1F3423] group-hover:text-[#166534] transition-colors leading-snug">
                    {language === 'en' ? program.title : program.titleAr}
                  </h3>

                  <p className="text-[#1F3423]/75 mb-6 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                    {language === 'en' ? program.description : program.descriptionAr}
                  </p>

                  {/* Program Metadata Pills */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#1F3423]/10">
                    <div className="text-xs text-[#1F3423]/80 font-medium flex items-center justify-between">
                      <span className="font-semibold text-[#1F3423]">
                        {language === 'en' ? 'Duration' : 'المدة'}
                      </span>
                      <span className="text-[#1F3423]/90 bg-[#1F3423]/5 px-2 py-0.5 rounded text-[11px]">
                        {language === 'en' ? program.duration : program.durationAr}
                      </span>
                    </div>
                    <div className="text-xs text-[#1F3423]/80 font-medium flex items-center justify-between">
                      <span className="font-semibold text-[#1F3423]">
                        {language === 'en' ? 'Format' : 'النمط'}
                      </span>
                      <span className="text-[#1F3423]/90 bg-[#1F3423]/5 px-2 py-0.5 rounded text-[11px]">
                        {language === 'en' ? program.format : program.formatAr}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons with visible icons and clear focus-visible */}
                <div className="pt-4 border-t border-[#1F3423]/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="text-[#1F3423] hover:text-[#166534] font-syne font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#1EC672] focus-visible:outline-none rounded-md px-1 py-1"
                    aria-label={`${language === 'en' ? 'View details for' : 'تفاصيل'} ${language === 'en' ? program.title : program.titleAr}`}
                  >
                    <span>{language === 'en' ? 'View Details' : 'تفاصيل المسار'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1F3423] group-hover:text-[#166534] transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </button>

                  <button
                    onClick={() => onApplyProgram(program.id)}
                    className="px-3.5 py-1.5 rounded-full bg-[#1F3423] text-white text-xs font-syne font-bold hover:bg-[#1EC672] hover:text-[#0C100E] transition-all duration-200 shadow-xs focus-visible:ring-2 focus-visible:ring-[#1EC672] focus-visible:outline-none"
                    aria-label={`${language === 'en' ? 'Apply to' : 'التقديم على'} ${language === 'en' ? program.title : program.titleAr}`}
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
