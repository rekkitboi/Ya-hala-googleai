import React, { useState } from 'react';
import { Language } from '../types';
import { Smartphone, Sparkles, Check, Play, Award, Volume2 } from 'lucide-react';

interface AppPreviewSectionProps {
  language: Language;
}

export const AppPreviewSection: React.FC<AppPreviewSectionProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [activeDialectTab, setActiveDialectTab] = useState<'najdi' | 'hejazi'>('najdi');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsJoined(true);
    }
  };

  const handlePlayVoice = () => {
    setIsPlayingVoice(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = activeDialectTab === 'najdi' ? 'وش مسوي طال عمرك؟' : 'إيش أخبارك يا غالي؟';
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlayingVoice(false);
      utterance.onerror = () => setIsPlayingVoice(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingVoice(false), 1200);
    }
  };

  return (
    <section
      id="app-preview"
      data-theme="dark"
      className="py-24 md:py-32 bg-[#0C100E] text-white px-6 overflow-hidden relative"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#1EC672]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Copy & Early Access (7 cols on lg) */}
        <div className="lg:col-span-7 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'YA HALA MOBILE APP' : 'تطبيق يا هلا الذكي'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-5 leading-tight tracking-tight text-white">
            {language === 'en' ? (
              <>
                Saudi Dialects <br />
                <span className="text-white/80 font-light">in Your Pocket</span>
              </>
            ) : (
              <>
                اللهجة السعودية <br />
                <span className="text-white/80 font-light">معك أينما كنت</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-8 font-light leading-relaxed max-w-xl">
            {language === 'en'
              ? 'Complement your coursework with bite-sized daily audio lessons, interactive dialect flashcards, native accent playback, and our cultural etiquette compass.'
              : 'عزز مهاراتك اليومية عبر دروس صوتية تفاعلية، بطاقات لهجات نجدية وحجازية، وتوجيهات الإتيكيت الاجتماعي السعودي على مدار الساعة.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-syne font-semibold uppercase tracking-wider text-[#1EC672]">
              {language === 'en' ? 'COMING SOON TO IOS & ANDROID' : 'قريباً على آبل ستور وجوجل بلاي'}
            </span>
            <span className="text-xs text-white/60">
              {language === 'en' ? '• Included for all enrolled students' : '• متاح لكافة طلاب المعهد'}
            </span>
          </div>

          {/* Waitlist Form */}
          {isJoined ? (
            <div className="p-4 rounded-xl bg-white/5 border border-[#1EC672]/40 text-white flex items-center gap-3 max-w-md">
              <Check className="w-5 h-5 text-[#1EC672] shrink-0" />
              <div>
                <p className="font-syne font-bold text-sm text-white">
                  {language === 'en' ? 'You are on the Early Access List' : 'تم تسجيلك بنجاح في قائمة الوصول المبكر!'}
                </p>
                <p className="text-xs text-white/70 mt-0.5">
                  {language === 'en'
                    ? "We'll send your beta testing pass when released."
                    : 'سنرسل لك رابط النسخة التجريبية فور إطلاقها.'}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'en' ? 'Enter email for beta pass...' : 'أدخل بريدك الإلكتروني...'}
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#1EC672] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#1EC672] text-[#0C100E] font-syne font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 cursor-pointer"
              >
                {language === 'en' ? 'GET ACCESS' : 'انضم للقائمة'}
              </button>
            </form>
          )}
        </div>

        {/* Right Phone Mockup (5 cols on lg, scaled gracefully) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-[290px] sm:w-[310px] h-[580px] bg-[#0A0E0C] rounded-[3.2rem] border-[8px] border-white/15 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
            {/* Top Speaker / Dynamic Island */}
            <div className="w-24 h-4 bg-white/15 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black/80 mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* In-App Screen Content */}
            <div className="flex-1 flex flex-col justify-between text-left rtl:text-right px-2">
              {/* App Header */}
              <div>
                <div className="flex items-center justify-between text-[11px] text-white/50 mb-2 font-syne">
                  <span>YA HALA</span>
                  <span className="flex items-center gap-1 text-[#FED65B]">
                    <Award className="w-3.5 h-3.5" /> 14 Day Streak
                  </span>
                </div>
                <h4 className="text-base font-syne font-bold text-white mb-3">
                  {language === 'en' ? "Today's Micro-Lesson" : 'درس اليوم السريع'}
                </h4>

                {/* Dialect Selector Inside App */}
                <div className="grid grid-cols-2 gap-1 p-1 bg-white/5 border border-white/10 rounded-xl mb-3 text-[11px] text-center font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveDialectTab('najdi')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeDialectTab === 'najdi' ? 'bg-[#1EC672] text-[#0C100E]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Najdi (الرياض)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDialectTab('hejazi')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeDialectTab === 'hejazi' ? 'bg-[#1EC672] text-[#0C100E]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Hejazi (جدة)
                  </button>
                </div>

                {/* Interactive Flashcard */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-center mb-3">
                  <span className="text-[10px] text-[#1EC672] uppercase font-bold tracking-widest block mb-1">
                    {activeDialectTab === 'najdi' ? 'RIYADH ESSENTIAL' : 'JEDDAH ESSENTIAL'}
                  </span>
                  <div className="text-xl font-bold font-arabic text-white mb-1">
                    {activeDialectTab === 'najdi' ? 'وش مسوي طال عمرك؟' : 'إيش أخبارك يا غالي؟'}
                  </div>
                  <div className="text-[11px] text-white/70 italic mb-2">
                    {activeDialectTab === 'najdi' ? "Wesh msawwi tāl 'omrak?" : "Eish akhbarak ya ghāli?"}
                  </div>
                  <div className="text-[11px] text-white/90 bg-black/40 py-1 px-3 rounded-full inline-block">
                    "How have you been doing, noble friend?"
                  </div>
                </div>

                {/* Interactive Listening Bar */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={handlePlayVoice}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                        isPlayingVoice ? 'bg-white text-[#0C100E]' : 'bg-[#1EC672] text-[#0C100E]'
                      }`}
                      aria-label="Play native audio note"
                    >
                      <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                    </button>
                    <div>
                      <div className="text-white font-bold text-[10px]">Native Voice Audio</div>
                      <div className="text-[9px] text-white/50">0:08 • Normal Tempo</div>
                    </div>
                  </div>
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingVoice ? 'text-white animate-pulse' : 'text-[#1EC672]'}`} />
                </div>
              </div>

              {/* Bottom Nav Simulation */}
              <div className="pt-3 border-t border-white/10 flex justify-around text-[9px] text-white/50 font-syne">
                <span className="text-[#1EC672] font-bold">Lessons</span>
                <span>Phrases</span>
                <span>Majlis</span>
                <span>Profile</span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
