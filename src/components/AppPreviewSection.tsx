import React, { useState } from 'react';
import { Language } from '../types';
import { Smartphone, Sparkles, Check, Play, Award, Volume2, ShieldCheck } from 'lucide-react';

interface AppPreviewSectionProps {
  language: Language;
}

export const AppPreviewSection: React.FC<AppPreviewSectionProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [activeDialectTab, setActiveDialectTab] = useState<'najdi' | 'hejazi'>('najdi');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsJoined(true);
    }
  };

  return (
    <section
      data-theme="dark"
      className="py-28 bg-[#1F3423] text-white px-6 overflow-hidden relative"
    >
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1EC672]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* Left Info & Early Access */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#1EC672] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'YA HALA APP' : 'تطبيق يا هلا الذكي'}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6 leading-tight">
            {language === 'en' ? (
              <>
                Saudi Dialects <br />
                <span className="text-[#1EC672]">in Your Pocket</span>
              </>
            ) : (
              <>
                اللهجة السعودية <br />
                <span className="text-[#1EC672]">معك أينما كنت</span>
              </>
            )}
          </h2>

          <p className="text-base md:text-lg text-white/80 mb-8 font-light leading-relaxed max-w-xl">
            {language === 'en'
              ? 'Complement your coursework with bite-sized daily audio lessons, interactive dialect flashcards, live accent feedback, and our curated cultural etiquette compass.'
              : 'عزز مهاراتك اليومية عبر دروس صوتية تفاعلية، بطاقات لهجات نجدية وحجازية، وتوجيهات الإتيكيت الاجتماعي السعودي على مدار الساعة.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-block px-4 py-2 border border-[#1EC672]/50 bg-[#1EC672]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#1EC672]">
              {language === 'en' ? 'COMING SOON TO IOS & ANDROID' : 'قريباً على آبل ستور وجوجل بلاي'}
            </div>
            <span className="text-xs text-white/60">
              {language === 'en' ? '• Free for enrolled Ya Hala students' : '• مجاناً لكافة طلاب المعهد'}
            </span>
          </div>

          {/* Waitlist Form */}
          {isJoined ? (
            <div className="p-4 rounded-2xl bg-[#1EC672]/20 border border-[#1EC672] text-white flex items-center gap-3 max-w-md">
              <Check className="w-5 h-5 text-[#1EC672] shrink-0" />
              <div>
                <p className="font-bold text-sm">
                  {language === 'en' ? 'You are on the VIP Early Access List!' : 'تم تسجيلك بنجاح في قائمة الوصول المبكر!'}
                </p>
                <p className="text-xs text-white/80">
                  {language === 'en'
                    ? "We'll email you your beta testing pass when released."
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
                placeholder={language === 'en' ? 'Enter your email for beta pass...' : 'أدخل بريدك الإلكتروني...'}
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#1EC672] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-[#1EC672] text-[#1F3423] font-syne font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shrink-0"
              >
                {language === 'en' ? 'GET EARLY ACCESS' : 'انضم للقائمة'}
              </button>
            </form>
          )}
        </div>

        {/* Right Phone Mockup */}
        <div className="relative flex justify-center">
          <div className="relative w-[300px] sm:w-[320px] h-[600px] bg-[#0C100E] rounded-[3.5rem] border-[10px] border-white/20 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
            {/* Top Speaker / Dynamic Island */}
            <div className="w-28 h-5 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>

            {/* In-App Screen Content */}
            <div className="flex-1 flex flex-col justify-between text-left rtl:text-right px-2">
              {/* App Header */}
              <div>
                <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                  <span>YA HALA LEARNER</span>
                  <span className="flex items-center gap-1 text-[#FED65B]">
                    <Award className="w-3.5 h-3.5" /> 14 Day Streak
                  </span>
                </div>
                <h4 className="text-lg font-syne font-bold text-white mb-4">
                  {language === 'en' ? "Today's Micro-Lesson" : 'درس اليوم السريع'}
                </h4>

                {/* Dialect Selector Inside App */}
                <div className="grid grid-cols-2 gap-1 p-1 bg-white/10 rounded-xl mb-4 text-[11px] text-center font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveDialectTab('najdi')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeDialectTab === 'najdi' ? 'bg-[#1EC672] text-[#1F3423]' : 'text-white/80'
                    }`}
                  >
                    Najdi (الرياض)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDialectTab('hejazi')}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeDialectTab === 'hejazi' ? 'bg-[#1EC672] text-[#1F3423]' : 'text-white/80'
                    }`}
                  >
                    Hejazi (جدة)
                  </button>
                </div>

                {/* Interactive Flashcard */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center mb-4">
                  <span className="text-[10px] text-[#1EC672] uppercase font-bold tracking-widest block mb-1">
                    {activeDialectTab === 'najdi' ? 'RIYADH ESSENTIAL' : 'JEDDAH ESSENTIAL'}
                  </span>
                  <div className="text-2xl font-bold font-arabic text-white mb-1">
                    {activeDialectTab === 'najdi' ? 'وش مسوي طال عمرك؟' : 'إيش أخبارك يا غالي؟'}
                  </div>
                  <div className="text-xs text-white/70 italic mb-3">
                    {activeDialectTab === 'najdi' ? 'Wesh msawwi tāl \'omrak?' : 'Eish akhbarak ya ghāli?'}
                  </div>
                  <div className="text-xs text-white/90 bg-black/30 py-1 px-3 rounded-full inline-block">
                    "How have you been doing, noble friend?"
                  </div>
                </div>

                {/* Interactive Listening Bar */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-8 h-8 rounded-full bg-[#1EC672] text-[#1F3423] flex items-center justify-center">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-[11px]">Native Voice Note</div>
                      <div className="text-[10px] text-white/60">0:08 • Normal Tempo</div>
                    </div>
                  </div>
                  <Volume2 className="w-4 h-4 text-[#1EC672]" />
                </div>
              </div>

              {/* Bottom Nav Simulation */}
              <div className="pt-4 border-t border-white/10 flex justify-around text-[10px] text-white/60">
                <span className="text-[#1EC672] font-bold">Lessons</span>
                <span>Phrases</span>
                <span>Majlis</span>
                <span>Profile</span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
};
