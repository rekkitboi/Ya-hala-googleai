import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Smartphone, Check, Play, Volume2, Award } from 'lucide-react';

interface AppPreviewSectionProps {
  language: Language;
}

export const AppPreviewSection: React.FC<AppPreviewSectionProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [activeDialectTab, setActiveDialectTab] = useState<'najdi' | 'hejazi'>('najdi');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('app-preview-reveal');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsJoined(true);
    }
  };

  const handlePlayVoice = () => {
    setIsPlayingVoice(true);
    setTimeout(() => setIsPlayingVoice(false), 2000);
  };

  return (
    <section
      id="digital-companion"
      data-theme="dark"
      data-header-theme="dark"
      className="py-16 md:py-24 relative overflow-hidden bg-[#0a100d] text-white"
    >
      {/* Background gradients for dark environment */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1EC672]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FED65B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div id="app-preview-reveal" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content (7 cols on lg) */}
        <div 
          className={`lg:col-span-7 text-center md:text-left rtl:md:text-right transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 rtl:translate-x-12'
          }`}
        >
          <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="p-2 rounded-full bg-white/10 border border-white/20">
              <Smartphone className="w-5 h-5 text-[#1EC672]" />
            </span>
            <span className="text-white/80 font-syne font-bold uppercase tracking-widest text-xs">
              {language === 'en' ? 'Ya Hala Digital Companion' : 'الرفيق الرقمي لمعهد يا هلا'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold mb-6 text-white leading-tight">
            {language === 'en' ? 'Your Pocket Language Mentor' : 'مرشدك اللغوي في متناول يدك'}
          </h2>
          <p className="text-sm md:text-base text-white/75 font-light leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
            {language === 'en'
              ? 'Extend your learning seamlessly. Access pronunciation playback, dialect flashcards, and Saudi social etiquette guidance 24/7.'
              : 'استمر في التعلم في أي وقت. يوفر التطبيق تشغيل النطق، بطاقات لهجات نجدية وحجازية، وتوجيهات الإتيكيت الاجتماعي السعودي على مدار الساعة.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-syne font-semibold uppercase tracking-wider text-[#1EC672]">
              {language === 'en' ? 'Mobile app concept preview' : 'تصور مبدئي لتطبيق يا هلا'}
            </span>
          </div>

          {/* Waitlist Form */}
          {isJoined ? (
            <div className="p-4 rounded-2xl bg-white/10 border border-[#1EC672]/60 text-white flex items-center gap-3 max-w-md shadow-lg">
              <Check className="w-5 h-5 text-[#1EC672] shrink-0" />
              <div>
                <p className="font-syne font-bold text-sm text-white">
                  {language === 'en' ? 'You are on the Early Access List' : 'تم تسجيلك بنجاح في قائمة الوصول المبكر!'}
                </p>
                <p className="text-xs text-white/75 mt-0.5">
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
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#1EC672] focus:ring-1 focus:ring-[#1EC672] transition-colors"
                aria-label={language === 'en' ? 'Email for beta waitlist' : 'البريد الإلكتروني للانضمام للقائمة'}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#1EC672] text-[#0C100E] font-syne font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672]"
              >
                {language === 'en' ? 'GET ACCESS' : 'انضم للقائمة'}
              </button>
            </form>
          )}
        </div>

        {/* Right Phone Mockup */}
        <div className="lg:col-span-5 relative flex justify-center perspective-[1000px]">
          <div 
            className={`relative w-[290px] sm:w-[310px] h-[580px] bg-[#0A0E0C]/90 backdrop-blur-xl rounded-[3.2rem] border-[6px] border-white/20 shadow-2xl p-4 flex flex-col justify-between overflow-hidden transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-24 rotate-x-12'
            }`}
          >
            {/* Top Speaker / Dynamic Island */}
            <div className="w-24 h-4 bg-white/15 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black/80 mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* In-App Screen Content */}
            <div className="flex-1 flex flex-col justify-between text-left rtl:text-right px-2">
              
              {/* App Header */}
              <div>
                <div className="flex items-center justify-between text-[11px] text-white/60 mb-2 font-syne">
                  <span className="font-bold">YA HALA</span>
                  <span className="flex items-center gap-1 text-[#FED65B] font-semibold">
                    <Award className="w-3.5 h-3.5" /> 14 Day Streak
                  </span>
                </div>
                <h4 className="text-base font-syne font-bold text-white mb-3">
                  {language === 'en' ? "Today's Micro-Lesson" : 'درس اليوم السريع'}
                </h4>

                {/* Dialect Selector Inside App */}
                <div className="grid grid-cols-2 gap-1 p-1 bg-white/10 border border-white/15 rounded-xl mb-3 text-[11px] text-center font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveDialectTab('najdi')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                      activeDialectTab === 'najdi' ? 'bg-[#1EC672] text-[#0C100E] shadow-sm' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Najdi (الرياض)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDialectTab('hejazi')}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                      activeDialectTab === 'hejazi' ? 'bg-[#1EC672] text-[#0C100E] shadow-sm' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Hejazi (جدة)
                  </button>
                </div>

                {/* Interactive Flashcard */}
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-center mb-3">
                  <span className="text-[10px] text-[#1EC672] uppercase font-bold tracking-widest block mb-1">
                    {activeDialectTab === 'najdi' ? 'RIYADH ESSENTIAL' : 'JEDDAH ESSENTIAL'}
                  </span>
                  <div className="text-xl font-bold font-arabic text-white mb-1">
                    {activeDialectTab === 'najdi' ? 'وش مسوي طال عمرك؟' : 'إيش أخبارك يا غالي؟'}
                  </div>
                  <div className="text-[11px] text-white/75 italic mb-2">
                    {activeDialectTab === 'najdi' ? "Wesh msawwi tāl 'omrak?" : "Eish akhbarak ya ghāli?"}
                  </div>
                  <div className="text-[11px] text-white/95 bg-black/60 py-1 px-3 rounded-full inline-block border border-white/10">
                    "How have you been?"
                  </div>
                </div>

                {/* Interactive Listening Bar */}
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs">
                    <button
                      type="button"
                      onClick={handlePlayVoice}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1EC672] ${
                        isPlayingVoice ? 'bg-white text-[#0C100E] scale-105' : 'bg-[#1EC672] text-[#0C100E] hover:scale-105'
                      }`}
                      aria-label={language === "en" ? "Play pronunciation preview" : "تشغيل النطق التجريبي"}
                    >
                      <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                    </button>
                    <div>
                      <div className="text-white font-bold text-[11px]">Pronunciation Preview</div>
                      <div className="text-[9px] text-white/60">0:08 • Normal Tempo</div>
                    </div>
                  </div>
                  <Volume2 className={`w-4 h-4 ${isPlayingVoice ? 'text-white animate-pulse' : 'text-[#1EC672]'}`} />
                </div>
              </div>

              {/* Bottom Nav Simulation */}
              <div className="pt-3 border-t border-white/15 flex justify-around text-[10px] text-white/70 font-syne">
                <span className="text-[#1EC672] font-bold">Lessons</span>
                <span>Phrases</span>
                <span>Majlis</span>
                <span>Profile</span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-28 h-1 bg-white/35 rounded-full mx-auto mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
