import React, { useState } from 'react';
import { ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { Check, Mail } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectProgramId: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectProgramId }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer
      data-theme="dark"
      className="bg-[#1F3423] relative text-white/70 py-16 border-t border-white/10 overflow-hidden"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("${ASSETS.footerTexture}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Column 1: Brand & Bio */}
        <div>
          <img
            src={ASSETS.logoFooter}
            alt="Ya Hala"
            className="h-9 w-auto object-contain mb-6 brightness-0 invert"
          />
          <p className="text-sm text-white/80 mb-6 leading-relaxed font-light">
            {language === 'en'
              ? 'Saudi Arabic & Cultural Experiences. Bridging cultures through immersive language learning in the heart of the Kingdom.'
              : 'معهد يا هلا لتعليم اللهجة والثقافة السعودية. مد جسور التواصل الإنساني عبر برامج لغوية وتجارب ثقافية ملهمة في ربوع المملكة.'}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1EC672] hover:text-[#1F3423] hover:border-[#1EC672] transition-colors"
              aria-label="Twitter X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1EC672] hover:text-[#1F3423] hover:border-[#1EC672] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Programs */}
        <div>
          <h5 className="text-[#1EC672] font-syne font-bold mb-4 uppercase text-xs tracking-wider">
            {language === 'en' ? 'PROGRAMS' : 'البرامج الأكاديمية'}
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => onSelectProgramId('in-person')}
                className="hover:text-white transition-colors text-left rtl:text-right"
              >
                {language === 'en' ? 'In-Person Learning' : 'التعليم الحضوري'}
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectProgramId('online-learning')}
                className="hover:text-white transition-colors text-left rtl:text-right"
              >
                {language === 'en' ? 'Online Programs' : 'البرامج الافتراضية'}
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectProgramId('private-tutoring')}
                className="hover:text-white transition-colors text-left rtl:text-right"
              >
                {language === 'en' ? 'Private Tutoring' : 'التدريب الخاص الفردي'}
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectProgramId('corporate-groups')}
                className="hover:text-white transition-colors text-left rtl:text-right"
              >
                {language === 'en' ? 'Corporate Training' : 'برامج الشركات والمؤسسات'}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Institute & About */}
        <div>
          <h5 className="text-[#1EC672] font-syne font-bold mb-4 uppercase text-xs tracking-wider">
            {language === 'en' ? 'ABOUT' : 'المعهد'}
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#why" className="hover:text-white transition-colors">
                {language === 'en' ? 'Our Story & Mission' : 'قصتنا ورسالتنا'}
              </a>
            </li>
            <li>
              <a href="#methodology" className="hover:text-white transition-colors">
                {language === 'en' ? '4-Stage Methodology' : 'المنهجية التعليمية'}
              </a>
            </li>
            <li>
              <a href="#experiences" className="hover:text-white transition-colors">
                {language === 'en' ? 'Cultural Field Outings' : 'الزيارات الميدانية'}
              </a>
            </li>
            <li>
              <a href="#phrase-feature" className="hover:text-white transition-colors">
                {language === 'en' ? 'Saudi Phrasebook' : 'قاموس العبارات'}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h5 className="text-[#1EC672] font-syne font-bold mb-4 uppercase text-xs tracking-wider">
            {language === 'en' ? 'STAY CONNECTED' : 'ابقَ على تواصل'}
          </h5>
          <p className="text-sm mb-4 leading-relaxed font-light">
            {language === 'en'
              ? 'Join our cultural newsletter for updates on new cohorts, majlis talks, and excursions.'
              : 'اشترك في نشرتنا البريدية لتصلك مواعيد الدفعات الجديدة وجلسات المجلس والرحلات الثقافية.'}
          </p>

          {isSubscribed ? (
            <div className="p-3 rounded-xl bg-[#1EC672]/20 border border-[#1EC672] text-xs text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1EC672]" />
              <span>{language === 'en' ? 'Subscribed successfully! مرحباً بك' : 'تم الاشتراك بنجاح! مرحباً بك'}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center border-b border-white/30 pb-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={language === 'en' ? 'Email Address' : 'عنوان بريدك الإلكتروني'}
                className="bg-transparent border-none p-0 focus:outline-none focus:ring-0 w-full text-white placeholder-white/50 text-sm"
              />
              <button
                type="submit"
                className="text-[#1EC672] text-xs font-bold uppercase hover:text-white transition-colors shrink-0 ml-2"
              >
                {language === 'en' ? 'SUBSCRIBE' : 'اشتراك'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 relative z-10 gap-4">
        <p>© 2026 Ya Hala Cultural Institute. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {language === 'en' ? 'Academic FAQ' : 'الأسئلة الشائعة'}
          </a>
        </div>
      </div>
    </footer>
  );
};
