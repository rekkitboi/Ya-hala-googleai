import React from 'react';
import { PROGRAMS } from '../data/yaHalaData';
import { Program, Language } from '../types';
import { Landmark, User, Users, Monitor, ArrowRight, Sparkles } from 'lucide-react';

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
        return <Landmark className="w-5 h-5 text-[#1F3423] transition-colors" />;
      case 'user':
        return <User className="w-5 h-5 text-[#1F3423] transition-colors" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#1F3423] transition-colors" />;
      default:
        return <Monitor className="w-5 h-5 text-[#1F3423] transition-colors" />;
    }
  };

  return (
    <section
      id="programs"
      data-theme="light"
      data-header-theme="light"
      className="py-24 md:py-32 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Unified Programs Module with Integrated Header */}
        <div className="glass-neutral-frosted rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/40">
          {/* Integrated Module Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/10 backdrop-blur-md border border-[#1F3423]/15 text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
              <span>{language === 'en' ? 'OUR PROGRAMS' : 'برامجنا التعليمية'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-[#1F3423] tracking-tight mb-4">
              {language === 'en' ? 'Choose Your Learning Path' : 'اختر مسارك التعليمي'}
            </h2>
            <p className="text-sm md:text-base text-[#1F3423]/85 font-medium leading-relaxed">
              {language === 'en'
                ? 'Flexible, cohort-based and personalized tracks designed for diplomats, professionals, and language enthusiasts.'
                : 'مسارات متنوعة حضورية وافتراضية وخاصة تلائم الدبلوماسيين والتنفيذيين والباحثين وعشاق اللغة العربية.'}
            </p>
          </div>

          {/* Cohesive 4-Card Translucent Deck */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => {
            return (
              <div
                key={program.id}
                className="group glass-warm-card rounded-2xl p-7 border border-[#1F3423]/12 hover:border-[#1EC672]/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative"
              >
                <div>
                  {/* Icon badge with explicit default contrast */}
                  <div className="w-12 h-12 bg-[#1F3423]/10 rounded-xl flex items-center justify-center mb-5 text-[#1F3423] group-hover:bg-[#1F3423] group-hover:text-[#1EC672] transition-colors border border-[#1F3423]/10 shadow-sm">
                    {getIcon(program.iconName)}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1F3423]/85 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
                    <span>{language === 'en' ? program.category : program.categoryAr}</span>
                  </div>

                  <h3 className="text-xl font-syne font-bold mb-2.5 text-[#1F3423]">
                    {language === 'en' ? program.title : program.titleAr}
                  </h3>

                  <p className="text-[#1F3423]/75 mb-6 text-xs sm:text-sm leading-relaxed font-light">
                    {language === 'en' ? program.description : program.descriptionAr}
                  </p>

                  {/* Metadata Container */}
                  <div className="space-y-2 mb-6 p-3 rounded-xl bg-[#1F3423]/5 border border-[#1F3423]/8 text-xs">
                    <div className="text-[#1F3423]/80 font-medium">
                      <strong className="text-[#1F3423]">
                        {language === 'en' ? 'Duration: ' : 'المدة: '}
                      </strong>
                      {language === 'en' ? program.duration : program.durationAr}
                    </div>
                    <div className="text-[#1F3423]/80 font-medium">
                      <strong className="text-[#1F3423]">
                        {language === 'en' ? 'Format: ' : 'النمط: '}
                      </strong>
                      {language === 'en' ? program.format : program.formatAr}
                    </div>
                  </div>
                </div>

                {/* Card Action Controls: Explicit default visibility and keyboard accessibility */}
                <div className="pt-4 border-t border-[#1F3423]/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="text-[#1F3423] hover:text-[#1EC672] focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-md px-1.5 py-1 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                    aria-label={`${language === 'en' ? 'View details for' : 'تفاصيل مسار'} ${language === 'en' ? program.title : program.titleAr}`}
                  >
                    <span>{language === 'en' ? 'View Details' : 'تفاصيل المسار'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1F3423] group-hover:text-[#1EC672] transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                  </button>

                  <button
                    onClick={() => onApplyProgram(program.id)}
                    className="px-3.5 py-1.5 rounded-full bg-[#1F3423] text-white text-[11px] font-bold hover:bg-[#1EC672] hover:text-[#0C100E] focus-visible:ring-2 focus-visible:ring-[#1EC672] transition-colors cursor-pointer"
                    aria-label={`${language === 'en' ? 'Apply for' : 'تقديم على'} ${language === 'en' ? program.title : program.titleAr}`}
                  >
                    {language === 'en' ? 'Apply' : 'تقديم'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};
