import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ASSETS } from '../data/yaHalaData';
import { Language } from '../types';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenApplication: (initialCourseId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenApplication,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 35);

      // Section theme detector for contrast based on section under header
      const sections = document.querySelectorAll('section');
      let currentTheme: 'dark' | 'light' = 'dark';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check section intersecting the header line (y = 65px)
        if (rect.top <= 65 && rect.bottom >= 65) {
          const themeAttr = section.getAttribute('data-header-theme') || section.getAttribute('data-theme');
          if (themeAttr === 'light' || themeAttr === 'dark') {
            currentTheme = themeAttr;
          }
        }
      });

      setHeaderTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isDark = headerTheme === 'dark';

  const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    if (hash) {
      if (location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`${path}#${hash}`);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          ? isDark
            ? 'bg-[#0C100E]/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-[#F9F8F5]/65 backdrop-blur-xl border-b border-[#1F3423]/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div
        className={`w-full max-w-7xl mx-auto px-6 relative flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-[70px]' : 'h-[80px]'
        }`}
      >
        {/* Left Nav */}
        <div className="flex-1 flex items-center justify-start z-10">
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs font-semibold tracking-wider font-syne whitespace-nowrap">
            {/* Home Link */}
            <Link
              to="/"
              className={`transition-all py-1 relative ${
                isRouteActive('/')
                  ? 'text-[#1EC672] font-bold'
                  : isDark
                  ? 'text-white/90 hover:text-[#1EC672]'
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
                  : isDark
                  ? 'text-white/90 hover:text-[#1EC672]'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
            >
              <span>{language === 'en' ? 'ABOUT' : 'عن يا هلا'}</span>
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
                  : isDark
                  ? 'text-white/90 hover:text-[#1EC672]'
                  : 'text-[#1F3423] hover:text-[#1EC672]'
              }`}
            >
              <span>{language === 'en' ? 'STUDENT EXPERIENCE' : 'تجربة الطالب'}</span>
              {isRouteActive('/student-experience') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1EC672] rounded-full" />
              )}
            </Link>
          </nav>
        </div>

        {/* Logo (Mathematically Locked to True Viewport Center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20 flex items-center justify-center">
          <Link
            to="/"
            className="block w-[130px] xl:w-[140px] h-[44px] xl:h-[48px] relative group"
            aria-label="Ya Hala Homepage"
          >
            <div className="relative w-full h-full">
              {/* White Logo (Visible over dark areas) */}
              <img
                src={ASSETS.logoWhite}
                alt="Ya Hala Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  isDark ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              />
              {/* Green Logo (Visible over light areas) */}
              <img
                src={ASSETS.logoGreen}
                alt="Ya Hala Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  isDark ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              />
            </div>
          </Link>
        </div>

        {/* Right Nav & Actions */}
        <div className="flex-1 flex items-center justify-end z-10">
          <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 text-[11px] xl:text-xs font-semibold font-syne whitespace-nowrap">
            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
              
              {/* Explore Dropdown */}
              <div className="relative group/explore py-4">
                <button
                  className={`flex items-center gap-1 transition-colors cursor-pointer tracking-wider ${
                    isDark
                      ? 'text-white/90 hover:text-[#1EC672]'
                      : 'text-[#1F3423] hover:text-[#1EC672]'
                  }`}
                >
                  {language === 'en' ? 'EXPLORE' : 'استكشف'}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-2 w-48 py-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#1F3423]/10 opacity-0 invisible group-hover/explore:opacity-100 group-hover/explore:visible transition-all duration-300 z-50">
                  <button
                    onClick={() => handleNavClick('/', 'methodology')}
                    className="block w-full text-left rtl:text-right px-5 py-2.5 text-[11px] font-bold text-[#1F3423]/80 hover:text-[#1EC672] hover:bg-[#F9F8F5] transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'METHODOLOGY' : 'المنهجية'}
                  </button>
                  <button
                    onClick={() => handleNavClick('/', 'programs')}
                    className="block w-full text-left rtl:text-right px-5 py-2.5 text-[11px] font-bold text-[#1F3423]/80 hover:text-[#1EC672] hover:bg-[#F9F8F5] transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'PROGRAMS' : 'البرامج'}
                  </button>
                  <button
                    onClick={() => handleNavClick('/', 'experiences')}
                    className="block w-full text-left rtl:text-right px-5 py-2.5 text-[11px] font-bold text-[#1F3423]/80 hover:text-[#1EC672] hover:bg-[#F9F8F5] transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'EXPERIENCES' : 'التجارب'}
                  </button>
                </div>
              </div>

              {/* Language Switcher */}
              <button
                id="lang-toggle-btn"
                onClick={onToggleLanguage}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  isDark
                    ? 'text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20'
                    : 'text-[#1F3423] hover:text-[#1EC672] bg-white/60 hover:bg-white/90 border border-[#1F3423]/15'
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
              className={`px-4 xl:px-5 py-2 xl:py-2.5 font-syne font-bold rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] text-[11px] xl:text-xs tracking-wider cursor-pointer ${
                isDark
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
                isDark ? 'text-white' : 'text-[#1F3423]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              {language === 'en' ? 'ABOUT' : 'عن يا هلا'}
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
