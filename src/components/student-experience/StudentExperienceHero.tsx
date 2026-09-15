import React, { useEffect, useState } from 'react';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';
import { ArrowRight } from 'lucide-react';

interface StudentExperienceHeroProps {
  language: Language;
}

export const StudentExperienceHero: React.FC<StudentExperienceHeroProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCurriculum = () => {
    const el = document.getElementById('program-levels');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
      data-theme="dark"
      data-header-theme="dark"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBg}
          alt="Ya Hala Curriculum"
          className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${
            isVisible ? 'scale-100' : 'scale-105'
          }`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/70 to-[#0C100E]/40" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-12 md:mt-20">
        <div className={`transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1EC672]" />
            <span className="text-[#1EC672] uppercase tracking-[0.2em] font-syne font-semibold text-xs">
              {language === 'en' ? 'CURRICULUM & EXPERIENCE' : 'المنهج والتجربة التعليمية'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-bold text-white mb-8 tracking-tight leading-tight">
            {language === 'en' ? 'Learn the Language.' : 'تعلم اللغة.'}
            <br className="hidden sm:block" />
            <span className="text-white/80 font-light italic">
              {language === 'en' ? ' Live the Culture.' : ' عش الثقافة.'}
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-3xl mx-auto mb-12">
            {language === 'en' 
              ? 'Ya Hala helps non-Arabic speakers communicate confidently in everyday, social, and professional situations in Saudi Arabia. The program brings together Saudi dialect, cultural understanding, listening and speaking practice, with foundational reading and writing.' 
              : 'يساعد معهد يا هلا غير الناطقين بالعربية على التواصل بثقة في المواقف اليومية والاجتماعية والمهنية في السعودية. يجمع البرنامج بين تعلم اللهجة السعودية، والفهم الثقافي، وممارسة الاستماع والتحدث، إلى جانب التأسيس في القراءة والكتابة.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-4 text-white/50 font-syne font-bold text-sm tracking-widest">
              <span className="text-white">A1</span>
              <ArrowRight className="w-3 h-3 text-[#1EC672] rtl:rotate-180" />
              <span className="text-white">A2</span>
              <ArrowRight className="w-3 h-3 text-[#1EC672] rtl:rotate-180" />
              <span className="text-white">B1</span>
              <ArrowRight className="w-3 h-3 text-[#1EC672] rtl:rotate-180" />
              <span className="text-white">B2</span>
            </div>
          </div>

          <button
            onClick={scrollToCurriculum}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0C100E] hover:bg-[#F9F8F5] font-syne font-bold text-xs uppercase tracking-wider transition-transform duration-300 hover:scale-105 shadow-xl cursor-pointer"
          >
            <span>{language === 'en' ? 'Explore the Framework' : 'استكشف الإطار المنهجي'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-y-1 transition-transform rtl:rotate-90 rtl:group-hover:translate-x-0 rtl:group-hover:translate-y-1 rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};
