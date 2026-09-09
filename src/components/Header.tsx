import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

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
  }, [location.pathname]);

  const isDarkHeader = isDarkSection && !isScrolled;

  const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);

    if (hash) {
      if (location.pathname === '/') {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${hash}`);
      }
    }
  };

  const isRouteActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname === path;
  };

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
        {/* Left Nav (Pages) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-widest font-syne">
          {/* Home Link */}
          <Link
            to="/"
            className={`transition-all py-1 relative ${
              isRouteActive('/')
                ? 'text-[#1EC672] font-bold'
                : isDarkHeader || (isScrolled && isDarkSection)
                ? 'text-white/85 hover:text-[#1EC672]'
                : 'text-[#1F3423] hover:text-[#1EC672]'
            }`}
          >
            <span>{language === 'en' ? 'HOME' : 'الرئيسية'}</span>
            {isRouteActive('/') && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1EC672] rounded-full" />
            )}
          </Link>

          {/* About Link */}
          <Link
            to="/about"
            className={`transition-all py-1 relative ${
              isRouteActive('/about')
                ? 'text-[#1EC672] font-bold'
                : isDarkHeader || (isScrolled && isDarkSection)
                ? 'text-white/85 hover:text-[#1EC672]'
                : 'text-[#1F3423] hover:text-[#1EC672]'
            }`}
          >
            <span>{language === 'en' ? 'ABOUT' : 'عن المعهد'}</span>
            {isRouteActive('/about') && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1EC672] rounded-full" />
            )}
          </Link>

          {/* Student Experience Link */}
          <Link
            to="/student-experience"
            className={`transition-all py-1 relative ${
              isRouteActive('/student-experience')
                ? 'text-[#1EC672] font-bold'
                : isDarkHeader || (isScrolled && isDarkSection)
                ? 'text-white/85 hover:text-[#1EC672]'
                : 'text-[#1F3423] hover:text-[#1EC672]'
            }`}
          >
            <span>{language === 'en' ? 'STUDENT EXPERIENCE' : 'تجربة الطالب'}</span>
            {isRouteActive('/student-experience') && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1EC672] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Logo (Optical Center) */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="block w-[140px] h-[48px] relative group"
            aria-label="Ya Hala Institute Homepage"
          >
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
          </Link>
        </div>

        {/* Right Nav & Actions */}
        <div className="flex justify-end items-center gap-4 sm:gap-6 text-xs font-semibold font-syne">
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('/', 'methodology')}
              className={`transition-colors py-1 cursor-pointer ${
                isDarkHeader || (isScrolled && isDarkSection)
                  ? 'text-white/85 hover:text-[#1EC672]'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? 'METHODOLOGY' : 'المنهجية'}
            </button>

            <button
              onClick={() => handleNavClick('/', 'programs')}
              className={`transition-colors py-1 cursor-pointer ${
                isDarkHeader || (isScrolled && isDarkSection)
                  ? 'text-white/85 hover:text-[#1EC672]'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? 'PROGRAMS' : 'البرامج'}
            </button>

            <button
              onClick={() => handleNavClick('/', 'experiences')}
              className={`transition-colors py-1 cursor-pointer ${
                isDarkHeader || (isScrolled && isDarkSection)
                  ? 'text-white/85 hover:text-[#1EC672]'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? 'EXPERIENCES' : 'التجارب'}
            </button>

            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLanguage}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                isDarkHeader || (isScrolled && isDarkSection)
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
              title={language === 'en' ? 'Switch to Arabic' : 'التحويل للإنجليزية'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold tracking-wider text-[11px]">
                {language === 'en' ? 'العربية' : 'ENGLISH'}
              </span>
            </button>
          </div>

          {/* Action CTA Button */}
          <button
            id="header-cta-btn"
            onClick={() => onOpenApplication()}
            className={`px-5 py-2.5 font-syne font-bold rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] text-xs tracking-wider cursor-pointer ${
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
            className={`lg:hidden p-2 rounded-lg cursor-pointer ${
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
          <nav className="flex flex-col gap-3 font-syne text-sm font-semibold tracking-wider">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 border-b border-white/10 transition-colors ${
                isRouteActive('/') ? 'text-[#1EC672] font-bold' : 'text-white/80 hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? 'HOME' : 'الرئيسية'}
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 border-b border-white/10 transition-colors ${
                isRouteActive('/about') ? 'text-[#1EC672] font-bold' : 'text-white/80 hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? 'ABOUT' : 'عن المعهد'}
            </Link>

            <Link
              to="/student-experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 border-b border-white/10 transition-colors ${
                isRouteActive('/student-experience')
                  ? 'text-[#1EC672] font-bold'
                  : 'text-white/80 hover:text-[#1EC672]'
              }`}
            >
              {language === 'en' ? 'STUDENT EXPERIENCE' : 'تجربة الطالب'}
            </Link>

            <button
              onClick={() => handleNavClick('/', 'methodology')}
              className="py-2.5 border-b border-white/10 text-left rtl:text-right text-white/80 hover:text-[#1EC672] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'METHODOLOGY' : 'المنهجية'}
            </button>

            <button
              onClick={() => handleNavClick('/', 'programs')}
              className="py-2.5 border-b border-white/10 text-left rtl:text-right text-white/80 hover:text-[#1EC672] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'PROGRAMS' : 'البرامج'}
            </button>

            <button
              onClick={() => handleNavClick('/', 'experiences')}
              className="py-2.5 border-b border-white/10 text-left rtl:text-right text-white/80 hover:text-[#1EC672] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'EXPERIENCES' : 'التجارب'}
            </button>

            <div className="pt-3 flex items-center justify-between">
              <button
                onClick={() => {
                  onToggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-[#1EC672] cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
