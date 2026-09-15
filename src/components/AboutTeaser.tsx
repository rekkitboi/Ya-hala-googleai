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

        {/* Core pillars summary in quiet text columns */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 max-w-4xl mx-auto mb-12 relative">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left rtl:sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-[#1EC672]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Living Dialects' : 'اللهجات الحية'}
              </div>
            </div>
            <div className="text-sm text-white/60 font-light pl-0 sm:pl-6 rtl:sm:pr-6 rtl:sm:pl-0">
              {language === 'en' ? 'Najdi & Hejazi immersion' : 'انغماس في اللهجات النجدية والحجازية'}
            </div>
          </div>
          
          <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
          
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left rtl:sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-[#1EC672]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Cultural Mentorship' : 'إرشاد ثقافي سعودي'}
              </div>
            </div>
            <div className="text-sm text-white/60 font-light pl-0 sm:pl-6 rtl:sm:pr-6 rtl:sm:pl-0">
              {language === 'en' ? 'Guided by native mentors' : 'بمرافقة مرشدين سعوديين متمرسين'}
            </div>
          </div>
          
          <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
          
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left rtl:sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-[#1EC672]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <div className="font-syne font-bold text-sm text-white">
                {language === 'en' ? 'Practical Communication' : 'تواصل عملي واقعي'}
              </div>
            </div>
            <div className="text-sm text-white/60 font-light pl-0 sm:pl-6 rtl:sm:pr-6 rtl:sm:pl-0">
              {language === 'en' ? 'Everyday situations & life' : 'مواقف حية ومحادثات اجتماعية ومهنية'}
            </div>
          </div>
        </div>

        {/* CTAs to /about */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/about"
            id="discover-our-story-btn"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0C100E] hover:bg-[#F9F8F5] font-syne font-bold text-xs uppercase tracking-wider transition-transform duration-300 hover:scale-105"
          >
            <span>{language === 'en' ? 'Discover Our Story' : 'اكتشف قصتنا ورؤيتنا'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
};
