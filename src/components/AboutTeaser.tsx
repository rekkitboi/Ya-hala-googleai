import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { ArrowRight, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutTeaserProps {
  language: Language;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ language }) => {
  return (
    <section
      id="why"
      data-theme="dark"
      className="relative py-24 md:py-32 bg-[#0C100E] text-white overflow-hidden"
    >
      {/* Background Image with lush green oasis feel & subtle radial vignetting */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.aboutBg}
          alt="Saudi Palm Oasis Sanctuary"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0C100E]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C100E] via-transparent to-[#0C100E] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F3423]/50 via-[#0C100E]/85 to-[#0C100E] pointer-events-none" />
      </div>

      {/* Radiant glow behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#1EC672]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
            {language === 'en' ? 'ABOUT YA HALA' : 'عن معهد يا هلا'}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold mb-6 leading-[1.15] tracking-tight">
          {language === 'en' ? (
            <>
              Language Opens the Door.{' '}
              <span className="text-[#1EC672] block sm:inline">Culture Makes You Feel at Home.</span>
            </>
          ) : (
            <>
              اللغة تفتح الأبواب..{' '}
              <span className="text-[#1EC672] block sm:inline">والثقافة تشعرك بالانتماء</span>
            </>
          )}
        </h2>

        {/* Brief introduction paragraph */}
        <p className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          {language === 'en'
            ? 'Ya Hala connects Saudi dialect learning with cultural understanding. We believe language lives in the warmth of the majlis, the hospitality of the people, and the rhythm of daily life—helping you communicate with natural confidence in the Kingdom.'
            : 'يربط معهد يا هلا بين تعلم اللهجة السعودية الأصيلة والفهم الثقافي العميق. نؤمن بأن اللغة تحيا في كرم المجالس، وعفوية الحديث اليومي، وتفاصيل الحياة في المملكة؛ لتمكينك من التحدث بثقة وانتماء.'}
        </p>

        {/* Core pillars summary pill-strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left rtl:text-right">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1EC672] shrink-0 mt-0.5" />
            <div>
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Living Dialects' : 'اللهجات الحية'}
              </div>
              <div className="text-xs text-white/60 mt-0.5">
                {language === 'en' ? 'Najdi & Hejazi immersion' : 'انغماس في اللهجات النجدية والحجازية'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1EC672] shrink-0 mt-0.5" />
            <div>
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Cultural Mentorship' : 'إرشاد ثقافي سعودي'}
              </div>
              <div className="text-xs text-white/60 mt-0.5">
                {language === 'en' ? 'Guided by native mentors' : 'بمرافقة مرشدين سعوديين متمرسين'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1EC672] shrink-0 mt-0.5" />
            <div>
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Practical Communication' : 'تواصل عملي واقعي'}
              </div>
              <div className="text-xs text-white/60 mt-0.5">
                {language === 'en' ? 'Everyday situations & life' : 'مواقف حية ومحادثات اجتماعية ومهنية'}
              </div>
            </div>
          </div>
        </div>

        {/* CTAs to /about */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/about"
            id="discover-our-story-btn"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1EC672] text-[#1F3423] font-syne font-bold text-sm hover:bg-[#28df83] hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_25px_rgba(30,198,114,0.25)]"
          >
            <span>{language === 'en' ? 'Discover Our Story' : 'اكتشف قصتنا ورؤيتنا'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>

          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white/90 font-syne font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <Users className="w-4 h-4 text-[#1EC672]" />
            <span>{language === 'en' ? 'Meet Our Team' : 'تعرف على فريق العمل'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
