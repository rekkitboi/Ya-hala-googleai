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
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section eyebrow */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F8F5] text-[#1F3423] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span>{language === 'en' ? 'DIALECT DISCOVERY' : 'اكتشف تعابير اللهجة السعودية'}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-syne font-bold text-[#222222]">
            {language === 'en' ? 'Living Dialect Phrasebook' : 'قاموس العبارات اليومية الحية'}
          </h3>
        </div>

        {/* Feature Container Card */}
        <div className="bg-[#F9F8F5] rounded-3xl p-8 md:p-14 text-center shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Top Dialect Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {SAUDI_PHRASES.map((phrase, idx) => (
              <button
                key={phrase.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  stopAudio();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentIndex === idx
                    ? 'bg-[#1F3423] text-[#1EC672] shadow-sm scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {language === 'en' ? phrase.dialect : phrase.dialectAr}
              </button>
            ))}
          </div>

          {/* Category Tag */}
          <h4 className="text-[#1F3423] uppercase tracking-widest font-semibold text-xs md:text-sm mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1EC672]" />
            <span>{language === 'en' ? currentPhrase.category : currentPhrase.categoryAr}</span>
          </h4>

          {/* Arabic Phrase */}
          <p
            className="text-4xl sm:text-5xl md:text-7xl font-syne font-extrabold text-[#1F3423] mb-6 leading-tight select-all drop-shadow-sm font-arabic"
            dir="rtl"
          >
            {currentPhrase.arabic}
          </p>

          {/* Transliteration */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#222222]/80 font-medium mb-4 italic tracking-wide font-syne">
            {currentPhrase.transliteration}
          </p>

          {/* English Meaning */}
          <p className="text-base md:text-lg text-[#222222]/70 mb-8 max-w-xl mx-auto font-light">
            "{language === 'en' ? currentPhrase.englishMeaning : currentPhrase.englishMeaningAr}"
          </p>

          {/* Audio Pronunciation Button & Controls */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white text-[#1F3423] flex items-center justify-center shadow-md hover:bg-[#1F3423] hover:text-white transition-all"
              aria-label="Previous Phrase"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            {/* Play Button with animated pulse when active */}
            <div className="relative">
              {isPlaying && (
                <div className="absolute inset-0 rounded-full bg-[#1EC672] animate-ping opacity-75" />
              )}
              <button
                id="audio-pronunciation-btn"
                onClick={playAudioPronunciation}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isPlaying
                    ? 'bg-[#1F3423] text-[#1EC672] scale-105'
                    : 'bg-white text-[#1EC672] hover:scale-105 hover:bg-[#1F3423]'
                }`}
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
              className="w-11 h-11 rounded-full bg-white text-[#1F3423] flex items-center justify-center shadow-md hover:bg-[#1F3423] hover:text-white transition-all"
              aria-label="Next Phrase"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          <div className="text-xs text-gray-500 font-medium mb-6">
            {isPlaying ? (
              <span className="text-[#1EC672] font-bold animate-pulse">
                {language === 'en' ? 'Playing dialect audio...' : 'جاري الاستماع للنطق الأصلي...'}
              </span>
            ) : (
              <span>{language === 'en' ? 'Click to listen to native pronunciation' : 'انقر للاستماع إلى النطق الصحيح'}</span>
            )}
          </div>

          {/* Cultural Context Accordion Card */}
          <div className="mt-6 pt-6 border-t border-gray-200/70 text-left rtl:text-right max-w-2xl mx-auto">
            <button
              onClick={() => setShowCulturalNote(!showCulturalNote)}
              className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#1F3423] hover:text-[#1EC672] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#1EC672]" />
                {language === 'en' ? 'Cultural Context & Etiquette' : 'السياق الثقافي وآداب الاستخدام'}
              </span>
              <span>{showCulturalNote ? '−' : '+'}</span>
            </button>

            {showCulturalNote && (
              <div className="mt-3 p-4 rounded-xl bg-white text-xs md:text-sm text-gray-700 leading-relaxed border border-gray-100">
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
