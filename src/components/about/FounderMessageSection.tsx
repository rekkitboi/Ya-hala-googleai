import React, { useEffect, useRef, useState } from 'react';
import { ASSETS } from '../../data/yaHalaData';
import { Language } from '../../types';

interface FounderMessageSectionProps {
  language: Language;
}

export const FounderMessageSection: React.FC<FounderMessageSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founder-message"
      data-theme="light"
      className="py-16 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {/* Environmental Image */}
          <div className="w-full md:w-[45%] h-[50vh] md:h-[80vh] relative z-0 shrink-0 overflow-hidden rtl:order-2">
            <div 
              className={`w-full h-full transform origin-left rtl:origin-right transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            >
              <img
                src={ASSETS.foundersEditorial}
                alt={language === 'en' ? 'A message from our founder' : 'رسالة من المؤسس'}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Reading Panel */}
          <div 
            className={`w-full md:w-[60%] bg-[#F9F8F5] p-8 md:p-16 lg:p-20 relative z-10 -mt-12 md:mt-0 md:-ml-20 rtl:md:ml-0 rtl:md:-mr-20 rtl:order-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="max-w-2xl mx-auto">
              {/* Opening Paragraph */}
              <p className={`text-xl md:text-2xl lg:text-3xl font-syne font-medium text-[#1F3423] leading-snug mb-8 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {language === 'en' 
                  ? 'Language is not just a tool for exchanging information; it is the key that unlocks the human heart and the living culture of a nation.' 
                  : 'اللغة ليست مجرد أداة لتبادل المعلومات؛ بل هي المفتاح الذي يفتح قلوب البشر والثقافة الحية للأمة.'}
              </p>

              {/* Remaining Paragraphs */}
              <div className={`space-y-6 text-base text-[#1F3423]/80 font-light leading-relaxed mb-12 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p>
                  {language === 'en'
                    ? 'When we founded Ya Hala, we saw a gap between formal textbook Arabic and the vibrant, hospitable reality of daily life in Saudi Arabia. We wanted to build a bridge—one where expats, diplomats, and cultural explorers could learn to speak the language exactly as it is spoken in our homes, our markets, and our majlises.'
                    : 'عندما أسسنا معهد يا هلا، لاحظنا الفجوة بين اللغة العربية الأكاديمية والواقع الحي المفعم بالضيافة في الحياة اليومية السعودية. أردنا بناء جسر—حيث يمكن للمقيمين والدبلوماسيين ومستكشفي الثقافة تعلم التحدث باللغة تمامًا كما تُنطق في بيوتنا وأسواقنا ومجالسنا.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Our approach goes beyond grammar. We immerse you in the cultural nuances that make communication authentic. From understanding the poetry of a greeting to mastering the etiquette of Saudi coffee, every lesson is an invitation to belong.'
                    : 'نهجنا يتجاوز القواعد النحوية. نحن نغمرك في التفاصيل الثقافية التي تجعل التواصل أصيلاً. من فهم شاعرية التحية إلى إتقان آداب القهوة السعودية، كل درس هو دعوة للانتماء.'}
                </p>
                <p className="font-medium text-[#1F3423]">
                  {language === 'en'
                    ? 'True fluency is not just being understood; it is feeling at home.'
                    : 'الطلاقة الحقيقية ليست فقط أن تُفهم؛ بل أن تشعر بأنك في وطنك.'}
                </p>
              </div>

              {/* Attribution */}
              <div className={`border-t border-[#1F3423]/10 pt-8 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="text-lg font-syne font-bold text-[#1F3423] mb-1">
                  {language === 'en' ? 'Amin Al Zahrani' : 'أمين الزهراني'}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1EC672]">
                  {language === 'en' ? 'Founder, Ya Hala' : 'مؤسس معهد يا هلا'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
