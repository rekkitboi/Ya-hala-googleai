import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenApplication: (preselectedProgram?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenApplication,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Detect current section theme
      const sections = document.querySelectorAll<HTMLElement>('[data-theme]');
      let activeTheme = 'dark';
      const headerCenter = scrollY + 40;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (headerCenter >= top && headerCenter <= top + height) {
          activeTheme = section.getAttribute('data-theme') || 'light';
        }
      });

      setIsDarkSection(activeTheme === 'dark');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHeader = isDarkSection && !isScrolled;

  const navLinks = [
    { href: '#why', labelEn: 'ABOUT', labelAr: 'عن المعهد' },
    { href: '#methodology', labelEn: 'METHODOLOGY', labelAr: 'المنهجية' },
    { href: '#programs', labelEn: 'PROGRAMS', labelAr: 'البرامج' },
    { href: '#phrase-feature', labelEn: 'DIALECTS', labelAr: 'اللهجات' },
    { href: '#experiences', labelEn: 'EXPERIENCES', labelAr: 'التجارب' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? isDarkSection
            ? 'bg-[#0C100E]/85 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-[#F9F8F5]/90 backdrop-blur-xl border-b border-[#1F3423]/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${
          isScrolled ? 'h-[70px]' : 'h-[80px]'
        }`}
      >
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-widest">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 ${
                isDarkHeader || (isScrolled && isDarkSection)
                  ? 'text-white/85 hover:text-[#1EC672]'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? link.labelEn : link.labelAr}
            </a>
          ))}
        </nav>

        {/* Logo (Optical Center) */}
        <div className="flex justify-center">
          <a href="#top" className="block w-[140px] h-[48px] relative group" aria-label="Ya Hala Institute">
            <div className="relative w-full h-full">
              {/* White Logo */}
              <img
                src={ASSETS.logoWhite}
                alt="Ya Hala Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                  isDarkHeader || (isScrolled && isDarkSection) ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Green Logo */}
              <img
                src={ASSETS.logoGreen}
                alt="Ya Hala Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                  isDarkHeader || (isScrolled && isDarkSection) ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </a>
        </div>

        {/* Right Nav & CTA */}
        <div className="flex justify-end items-center gap-4 sm:gap-6 text-xs font-semibold">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isDarkHeader || (isScrolled && isDarkSection)
                    ? 'text-white/85 hover:text-[#1EC672]'
                    : 'text-[#1F3423] hover:text-[#1EC672]'
                }`}
              >
                {language === 'en' ? link.labelEn : link.labelAr}
              </a>
            ))}

            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLanguage}
              className={`flex items-center gap-1.5 px-2 py-1 rounded transition-colors ${
                isDarkHeader || (isScrolled && isDarkSection)
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
              title={language === 'en' ? 'Switch to Arabic' : 'التحويل للإنجليزية'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold tracking-wider">
                {language === 'en' ? 'العربية' : 'ENGLISH'}
              </span>
            </button>
          </div>

          {/* Action CTA Button */}
          <button
            id="header-cta-btn"
            onClick={() => onOpenApplication()}
            className={`px-5 py-2.5 font-syne font-bold rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] text-xs tracking-wider ${
              isDarkHeader || (isScrolled && isDarkSection)
                ? 'bg-white text-[#1F3423] hover:bg-[#F9F8F5]'
                : 'bg-[#1F3423] text-white hover:bg-[#142317]'
            }`}
          >
            {language === 'en' ? 'GET STARTED' : 'ابدأ رحلتك'}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isDarkHeader || (isScrolled && isDarkSection) ? 'text-white' : 'text-[#1F3423]'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C100E] border-b border-white/10 px-6 py-6 text-white animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 font-syne text-sm font-semibold tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 text-white/80 hover:text-[#1EC672] transition-colors"
              >
                {language === 'en' ? link.labelEn : link.labelAr}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  onToggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-[#1EC672]"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English'}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
