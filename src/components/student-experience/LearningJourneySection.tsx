import React, { useState } from 'react';
import { LEARNING_JOURNEY_STAGES } from '../../data/studentExperienceData';
import { Language } from '../../types';
import { DoorOpen, BookOpen, Sparkles, MessageCircle, TrendingUp, HeartHandshake } from 'lucide-react';

interface LearningJourneySectionProps {
  language: Language;
}

export const LearningJourneySection: React.FC<LearningJourneySectionProps> = ({ language }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const getStepIcon = (id: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 ${isSelected ? 'text-[#1EC672]' : 'text-white/60'}`;
    switch (id) {
      case 'arrive':
        return <DoorOpen className={iconClass} />;
      case 'learn':
        return <BookOpen className={iconClass} />;
      case 'experience':
        return <Sparkles className={iconClass} />;
      case 'practise':
        return <MessageCircle className={iconClass} />;
      case 'progress':
        return <TrendingUp className={iconClass} />;
      case 'belong':
        return <HeartHandshake className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const currentStage = LEARNING_JOURNEY_STAGES[selectedStep];

  return (
    <section
      id="learning-journey"
      data-theme="dark"
      className="py-20 md:py-28 bg-[#0C100E] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'THE LEARNING JOURNEY' : 'مسار الرحلة التعليمية'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white tracking-tight mb-3">
            {language === 'en' ? 'From First Words to True Belonging' : 'من الكلمات الأولى إلى عمق الانتماء'}
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            {language === 'en'
              ? 'A connected 6-stage progression guiding your transformation from novice learner to confident communicator.'
              : 'مسار تصاعدي من ست محطات متكاملة يرشدك في رحلة الانتقال من البداية البسيطة إلى الطلاقة والاندماج الصادق.'}
          </p>
        </div>

        {/* Stepped Interactive Timeline Bar (Translucent Glass Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {LEARNING_JOURNEY_STAGES.map((stage, idx) => {
            const isSelected = selectedStep === idx;

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl transition-all duration-300 border text-left rtl:text-right flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 border-[#1EC672]/70 shadow-sm ring-1 ring-[#1EC672]/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-syne font-bold ${isSelected ? 'text-[#1EC672]' : 'text-white/40'}`}>
                    {stage.step}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                    {getStepIcon(stage.id, isSelected)}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-syne font-medium">
                    {language === 'en' ? `Stage ${idx + 1}` : `المرحلة ${idx + 1}`}
                  </div>
                  <div className={`text-sm font-syne font-bold tracking-wide mt-0.5 ${isSelected ? 'text-[#1EC672]' : 'text-white'}`}>
                    {language === 'en' ? stage.title : stage.titleAr}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused Stage Showcase Card (Refined Translucent Dark Glass) */}
        <div className="glass-subtle-dark border border-white/10 rounded-2xl p-7 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-start text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#1EC672] text-xs font-syne font-semibold uppercase tracking-wider mb-4">
                <span>{language === 'en' ? `Stage ${currentStage.step} of 06` : `الخطوة ${currentStage.step} من 06`}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white tracking-tight mb-2">
                {language === 'en' ? currentStage.title : currentStage.titleAr}
              </h3>

              <div className="text-xs font-syne font-semibold text-[#1EC672] uppercase tracking-wider">
                {language === 'en' ? 'Phase Progression' : 'المرحلة المنهجية'}
              </div>
            </div>

            <div className="lg:col-span-8 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-white/10 lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8 text-left rtl:text-right">
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-light mb-6">
                {language === 'en' ? currentStage.description : currentStage.descriptionAr}
              </p>

              {/* Navigation between steps */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <button
                  onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                  disabled={selectedStep === 0}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-syne font-semibold text-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  {language === 'en' ? '← Previous Stage' : '→ المرحلة السابقة'}
                </button>

                <div className="flex gap-1.5">
                  {LEARNING_JOURNEY_STAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedStep(i)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        selectedStep === i ? 'w-5 bg-[#1EC672]' : 'bg-white/20'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setSelectedStep((prev) => Math.min(LEARNING_JOURNEY_STAGES.length - 1, prev + 1))}
                  disabled={selectedStep === LEARNING_JOURNEY_STAGES.length - 1}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-syne font-semibold text-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Next Stage →' : 'المرحلة التالية ←'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
