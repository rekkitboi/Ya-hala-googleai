import React, { useState, useEffect } from 'react';
import { SAUDI_PHRASES } from '../data/yaHalaData';
import { Language } from '../types';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Info, Sparkles } from 'lucide-react';

interface SaudiPhraseSectionProps {
  language: Language;
}

export const SaudiPhraseSection: React.FC<SaudiPhraseSectionProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCulturalNote, setShowCulturalNote] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const currentPhrase = SAUDI_PHRASES[currentIndex];

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const handleNext = () => {
    stopAudio();
    setShowCulturalNote(false);
    setCurrentIndex((prev) => (prev + 1) % SAUDI_PHRASES.length);
  };

  const handlePrev = () => {
    stopAudio();
    setShowCulturalNote(false);
    setCurrentIndex((prev) => (prev - 1 + SAUDI_PHRASES.length) % SAUDI_PHRASES.length);
  };

  const playAudioPronunciation = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    setAudioError(false);
    
    // Use Web Speech API for Arabic pronunciation preview
    const win = window as any;
    if (win && win.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(currentPhrase.arabic);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85; // Slightly slower for clarity
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => {
        setIsPlaying(false);
        setAudioError(true);
      };

      win.speechSynthesis.speak(utterance);
    } else {
      setAudioError(true);
    }
  };

  const stopAudio = () => {
    const win = window as any;
    if (win && win.speechSynthesis) {
      win.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setAudioError(false);
  };

  return (
    <section
      id="phrase-feature"
      data-theme="light"
      data-header-theme="light"
      className="py-16 md:py-24 px-6 relative overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Unified Feature Container */}
        <div className="text-center relative overflow-hidden">
          
          {/* Integrated Header at the top of the module */}
          <div className="text-center mb-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/5 border border-[#1F3423]/10 text-[#1F3423] text-[10px] font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
              <span>{language === 'en' ? 'DIALECT DISCOVERY' : 'اكتشف تعابير اللهجة السعودية'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-[#1F3423] mb-3">
              {language === 'en' ? 'Living Dialect Phrasebook' : 'قاموس العبارات اليومية الحية'}
            </h3>
            <p className="text-sm md:text-base text-[#1F3423]/70 font-light leading-relaxed">
              {language === 'en'
                ? 'A pronunciation preview of everyday cultural cadence across Saudi regions.'
                : 'معاينة النطق والتنغيم الطبيعي لأشهر التعابير المستخدمة يومياً في مختلف مناطق المملكة.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg border border-[#1F3423]/5">
            {/* Top Dialect Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {SAUDI_PHRASES.map((phrase, idx) => (
                <button
                  key={phrase.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    stopAudio();
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                    currentIndex === idx
                      ? 'bg-[#1F3423] text-white shadow-md font-bold'
                      : 'bg-transparent text-[#1F3423]/60 hover:bg-[#1F3423]/5 hover:text-[#1F3423]'
                  }`}
                >
                  {language === 'en' ? (phrase.dialect === 'Universal Saudi' ? 'General Saudi Dialect' : phrase.dialect) : phrase.dialectAr}
                </button>
              ))}
            </div>

            <div className="transition-opacity duration-300">
              {/* Category Tag */}
              <div className="text-[#1F3423]/60 uppercase tracking-widest font-semibold text-[10px] md:text-xs mb-4 flex items-center justify-center gap-2">
                <span>{language === 'en' ? currentPhrase.category : currentPhrase.categoryAr}</span>
              </div>

              {/* Arabic Phrase with High-Legibility Typeface */}
              <p
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1EC672] mb-6 leading-tight select-all drop-shadow-sm font-arabic"
                dir="rtl"
              >
                {currentPhrase.arabic}
              </p>

              {/* Transliteration */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#1F3423]/80 font-medium mb-3 italic tracking-wide font-syne">
                {currentPhrase.transliteration}
              </p>

              {/* English Meaning */}
              <p className="text-base md:text-lg text-[#1F3423]/70 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                "{language === 'en' ? currentPhrase.englishMeaning : currentPhrase.englishMeaningAr}"
              </p>
            </div>

            {/* Audio Pronunciation Button & Controls */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-transparent text-[#1F3423]/60 flex items-center justify-center hover:bg-[#1F3423]/5 hover:text-[#1F3423] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                aria-label={language === 'en' ? 'Previous Phrase' : 'العبارة السابقة'}
              >
                <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
              </button>

              {/* Play Button */}
              <div className="relative">
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full bg-[#1EC672] animate-ping opacity-20" />
                )}
                <button
                  id="audio-pronunciation-btn"
                  onClick={playAudioPronunciation}
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                    isPlaying
                      ? 'bg-[#1F3423] text-[#1EC672] scale-105'
                      : 'bg-[#1F3423] text-white hover:scale-105 hover:bg-[#1EC672] hover:text-[#1F3423]'
                  }`}
                  aria-label={isPlaying ? (language === 'en' ? 'Stop audio' : 'إيقاف الصوت') : (language === 'en' ? 'Listen to Pronunciation' : 'استمع إلى النطق')}
                  title={isPlaying ? 'Stop playback' : 'Listen to Pronunciation'}
                >
                  {isPlaying ? (
                    <VolumeX className="w-8 h-8" />
                  ) : (
                    <Volume2 className="w-8 h-8 ml-0.5" />
                  )}
                </button>
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-transparent text-[#1F3423]/60 flex items-center justify-center hover:bg-[#1F3423]/5 hover:text-[#1F3423] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
                aria-label={language === 'en' ? 'Next Phrase' : 'العبارة التالية'}
              >
                <ChevronRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            </div>
            
            <div className="text-[11px] text-[#1F3423]/50 font-medium mb-8 h-4">
              {audioError ? (
                <span className="text-red-500/80">{language === 'en' ? 'Pronunciation preview unavailable.' : 'معاينة النطق غير متوفرة.'}</span>
              ) : isPlaying ? (
                <span className="text-[#1EC672] font-bold">
                  {language === 'en' ? 'Playing pronunciation preview...' : 'جاري تشغيل معاينة النطق...'}
                </span>
              ) : (
                <span>{language === 'en' ? 'Click to listen to pronunciation preview' : 'انقر للاستماع إلى معاينة النطق'}</span>
              )}
            </div>

            {/* Cultural Context Accordion */}
            <div className="pt-6 border-t border-[#1F3423]/10 text-left rtl:text-right max-w-2xl mx-auto">
              <button
                onClick={() => setShowCulturalNote(!showCulturalNote)}
                className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#1F3423] hover:text-[#1EC672] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-md py-2"
                aria-expanded={showCulturalNote}
              >
                <span className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  {language === 'en' ? 'Cultural Context & Etiquette' : 'السياق الثقافي وآداب الاستخدام'}
                </span>
                <span className="text-lg font-bold leading-none">{showCulturalNote ? '−' : '+'}</span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showCulturalNote ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-sm text-[#1F3423]/70 leading-relaxed font-light">
                  {language === 'en'
                    ? currentPhrase.culturalContext
                    : currentPhrase.culturalContextAr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
