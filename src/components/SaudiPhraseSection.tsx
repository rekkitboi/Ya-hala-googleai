import React, { useState, useEffect } from 'react';
import { SAUDI_PHRASES } from '../data/yaHalaData';
import { SaudiPhrase, Language } from '../types';
import { Volume2, VolumeX, ChevronLeft, ChevronRight, Sparkles, Info } from 'lucide-react';

interface SaudiPhraseSectionProps {
  language: Language;
}

export const SaudiPhraseSection: React.FC<SaudiPhraseSectionProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCulturalNote, setShowCulturalNote] = useState(true);

  const currentPhrase: SaudiPhrase = SAUDI_PHRASES[currentIndex] || SAUDI_PHRASES[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SAUDI_PHRASES.length);
    stopAudio();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SAUDI_PHRASES.length) % SAUDI_PHRASES.length);
    stopAudio();
  };

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  const playAudioPronunciation = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    setIsPlaying(true);

    const win = typeof window !== 'undefined' ? (window as any) : null;
    const hasSpeech = Boolean(win && win.speechSynthesis);

    if (hasSpeech) {
      win.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentPhrase.audioPronunciationText);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85; // Slightly slower for clear dialect articulation
      utterance.pitch = 1.0;

      // Try to find Arabic voice if available
      const voices = win.speechSynthesis.getVoices();
      const arVoice = voices.find(
        (v: any) => v.lang.startsWith('ar') || v.name.includes('Arabic') || v.name.includes('Saudi')
      );
      if (arVoice) {
        utterance.voice = arVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      win.speechSynthesis.speak(utterance);
    } else {
      // Fallback synthesizer chime using Web Audio API
      try {
        const AudioContextClass = win?.AudioContext || win?.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.4);
          gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.8);
        }
        setTimeout(() => setIsPlaying(false), 900);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <section
      id="phrase-feature"
      data-theme="light"
      data-header-theme="light"
      className="py-24 md:py-32 px-6 relative overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Unified Feature Container Card with Integrated Header */}
        <div className="glass-neutral-frosted rounded-[2.5rem] p-7 sm:p-12 md:p-14 text-center shadow-2xl border border-white/40 relative overflow-hidden">
          {/* Integrated Header at the top of the module */}
          <div className="text-center mb-8 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F3423]/10 backdrop-blur-md border border-[#1F3423]/15 text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
              <span>{language === 'en' ? 'DIALECT DISCOVERY' : 'اكتشف تعابير اللهجة السعودية'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-[#1F3423] mb-2">
              {language === 'en' ? 'Living Dialect Phrasebook' : 'قاموس العبارات اليومية الحية'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1F3423]/80 font-medium">
              {language === 'en'
                ? 'Hear authentic native pronunciation and everyday cultural cadence across Saudi regions.'
                : 'استمع إلى النطق الأصيل والتنغيم الطبيعي لأشهر التعابير المستخدمة يومياً في مختلف مناطق المملكة.'}
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1F3423]/15 to-transparent mb-8" />

          {/* Top Dialect Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {SAUDI_PHRASES.map((phrase, idx) => (
              <button
                key={phrase.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  stopAudio();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                  currentIndex === idx
                    ? 'bg-[#1F3423] text-[#1EC672] shadow-sm scale-105 font-bold'
                    : 'bg-[#1F3423]/8 text-[#1F3423] hover:bg-[#1F3423]/15 border border-[#1F3423]/10'
                }`}
              >
                {language === 'en' ? phrase.dialect : phrase.dialectAr}
              </button>
            ))}
          </div>

          {/* Category Tag */}
          <div className="text-[#1F3423] uppercase tracking-widest font-semibold text-xs md:text-sm mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? currentPhrase.category : currentPhrase.categoryAr}</span>
          </div>

          {/* Arabic Phrase with High-Legibility Typeface */}
          <p
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1F3423] mb-5 leading-tight select-all drop-shadow-sm font-arabic"
            dir="rtl"
          >
            {currentPhrase.arabic}
          </p>

          {/* Transliteration */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#1F3423]/85 font-medium mb-3 italic tracking-wide font-syne">
            {currentPhrase.transliteration}
          </p>

          {/* English Meaning */}
          <p className="text-base md:text-lg text-[#1F3423]/75 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            "{language === 'en' ? currentPhrase.englishMeaning : currentPhrase.englishMeaningAr}"
          </p>

          {/* Audio Pronunciation Button & Controls */}
          <div className="flex items-center justify-center gap-6 mb-7">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#1F3423]/10 text-[#1F3423] flex items-center justify-center shadow-sm hover:bg-[#1F3423] hover:text-[#1EC672] border border-[#1F3423]/15 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              aria-label={language === 'en' ? 'Previous Phrase' : 'العبارة السابقة'}
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            {/* Play Button with animated ping indicator */}
            <div className="relative">
              {isPlaying && (
                <div className="absolute inset-0 rounded-full bg-[#1EC672] animate-ping opacity-75" />
              )}
              <button
                id="audio-pronunciation-btn"
                onClick={playAudioPronunciation}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                  isPlaying
                    ? 'bg-[#1F3423] text-[#1EC672] scale-105 border-2 border-[#1EC672]'
                    : 'bg-[#1F3423] text-[#1EC672] hover:scale-105 hover:bg-[#1EC672] hover:text-[#0C100E] border-2 border-[#1EC672]/40'
                }`}
                aria-label={isPlaying ? (language === 'en' ? 'Stop audio' : 'إيقاف الصوت') : (language === 'en' ? 'Listen to native pronunciation' : 'الاستماع للنطق الصوتي')}
                title={isPlaying ? 'Stop playback' : 'Listen to native pronunciation'}
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
              className="w-11 h-11 rounded-full bg-[#1F3423]/10 text-[#1F3423] flex items-center justify-center shadow-sm hover:bg-[#1F3423] hover:text-[#1EC672] border border-[#1F3423]/15 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              aria-label={language === 'en' ? 'Next Phrase' : 'العبارة التالية'}
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          <div className="text-xs text-[#1F3423]/75 font-medium mb-6">
            {isPlaying ? (
              <span className="text-[#1F3423] font-bold inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1EC672] animate-ping" />
                <span>{language === 'en' ? 'Playing dialect audio...' : 'جاري الاستماع للنطق الأصلي...'}</span>
              </span>
            ) : (
              <span>{language === 'en' ? 'Click to listen to native pronunciation' : 'انقر للاستماع إلى النطق الصحيح'}</span>
            )}
          </div>

          {/* Cultural Context Accordion Card */}
          <div className="mt-6 pt-6 border-t border-[#1F3423]/15 text-left rtl:text-right max-w-2xl mx-auto">
            <button
              onClick={() => setShowCulturalNote(!showCulturalNote)}
              className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#1F3423] hover:text-[#1EC672] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1EC672] rounded-md py-1"
            >
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#1F3423]" />
                {language === 'en' ? 'Cultural Context & Etiquette' : 'السياق الثقافي وآداب الاستخدام'}
              </span>
              <span className="text-base font-bold">{showCulturalNote ? '−' : '+'}</span>
            </button>

            {showCulturalNote && (
              <div className="mt-3 p-4 rounded-xl bg-[#1F3423]/5 text-xs md:text-sm text-[#1F3423]/90 leading-relaxed border border-[#1F3423]/10">
                {language === 'en'
                  ? currentPhrase.culturalContext
                  : currentPhrase.culturalContextAr}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
