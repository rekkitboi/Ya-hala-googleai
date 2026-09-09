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
      data-header-theme="dark"
      className="relative py-20 md:py-28 bg-[#0C100E]/75 backdrop-blur-md text-white overflow-hidden border-y border-white/5"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#1EC672]" />
          <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
            {language === 'en' ? 'ABOUT YA HALA' : 'عن معهد يا هلا'}
          </span>
        </div>

        {/* Section Heading: Predominantly clean white */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold mb-4 leading-tight tracking-tight text-white max-w-3xl mx-auto">
          {language === 'en' ? (
            <>
              Language Opens the Door.{' '}
              <span className="text-white/85 font-light block sm:inline">Culture Makes You Feel at Home.</span>
            </>
          ) : (
            <>
              اللغة تفتح الأبواب..{' '}
              <span className="text-white/85 font-light block sm:inline">والثقافة تشعرك بالانتماء</span>
            </>
          )}
        </h2>

        {/* Brief introduction paragraph */}
        <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light max-w-2xl mx-auto mb-8">
          {language === 'en'
            ? 'Ya Hala connects Saudi dialect learning with cultural understanding. We believe language lives in the warmth of the majlis, the hospitality of the people, and the rhythm of daily life—helping you communicate with natural confidence in the Kingdom.'
            : 'يربط معهد يا هلا بين تعلم اللهجة السعودية الأصيلة والفهم الثقافي العميق. نؤمن بأن اللغة تحيا في كرم المجالس، وعفوية الحديث اليومي، وتفاصيل الحياة في المملكة؛ لتمكينك من التحدث بثقة وانتماء.'}
        </p>

        {/* Core pillars summary in translucent dark glass */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto mb-8 text-left rtl:text-right">
          <div className="p-4 rounded-xl glass-subtle-dark border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
            <div>
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Living Dialects' : 'اللهجات الحية'}
              </div>
              <div className="text-xs text-white/60 mt-0.5 font-light">
                {language === 'en' ? 'Najdi & Hejazi immersion' : 'انغماس في اللهجات النجدية والحجازية'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-subtle-dark border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
            <div>
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Cultural Mentorship' : 'إرشاد ثقافي سعودي'}
              </div>
              <div className="text-xs text-white/60 mt-0.5 font-light">
                {language === 'en' ? 'Guided by native mentors' : 'بمرافقة مرشدين سعوديين متمرسين'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-subtle-dark border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#1EC672] shrink-0 mt-0.5" />
            <div>
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Practical Communication' : 'تواصل عملي واقعي'}
              </div>
              <div className="text-xs text-white/60 mt-0.5 font-light">
                {language === 'en' ? 'Everyday situations & life' : 'مواقف حية ومحادثات اجتماعية ومهنية'}
              </div>
            </div>
          </div>
        </div>

        {/* CTAs to /about */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/about"
            id="discover-our-story-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0C100E] hover:bg-[#F9F8F5] font-syne font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105"
          >
            <span>{language === 'en' ? 'Discover Our Story' : 'اكتشف قصتنا ورؤيتنا'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>

          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-white/90 font-syne font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            <Users className="w-3.5 h-3.5 text-[#1EC672]" />
            <span>{language === 'en' ? 'Meet Our Team' : 'تعرف على فريق العمل'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
