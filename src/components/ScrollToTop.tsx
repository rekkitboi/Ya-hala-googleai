import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';

interface ScrollToTopProps {
  language: Language;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ language }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an anchor hash (e.g. #methodology, #team, etc.)
    if (hash) {
      const targetId = hash.replace('#', '');
      // Delay slightly to ensure destination DOM has mounted
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Otherwise scroll to top on page transition
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  // Sync document title and meta description dynamically
  useEffect(() => {
    let title = 'Ya Hala | Learn Saudi Dialect & Living Culture';
    let description =
      'Ya Hala connects Saudi dialect learning with living cultural immersion in Saudi Arabia.';

    if (pathname === '/about') {
      title =
        language === 'en'
          ? 'About Us | Ya Hala Institute'
          : 'عن المعهد | معهد يا هلا لتعليم اللهجة والثقافة السعودية';
      description =
        language === 'en'
          ? 'Discover the story, vision, founder message, and team behind Ya Hala.'
          : 'تعرف على قصة معهد يا هلا، رؤيتنا ورسالتنا، ورسالة المؤسس وفريق العمل.';
    } else if (pathname === '/student-experience') {
      title =
        language === 'en'
          ? 'Our Curriculum | Ya Hala'
          : 'مناهجنا | معهد يا هلا';
      description =
        language === 'en'
          ? 'Explore our 4-level CEFR curriculum, learning journey, and cultural immersion.'
          : 'استكشف المنهج المعتمد عبر 4 مستويات CEFR، ومسار الرحلة التعليمية، والأنشطة الثقافية.';
    } else if (pathname === '/beyond-the-classroom') {
      title =
        language === 'en'
          ? 'Beyond the Classroom | Ya Hala'
          : 'ما وراء جدران الفصول | معهد يا هلا';
      description =
        language === 'en'
          ? 'Discover Ya Hala cultural immersion, heritage journeys, and real-world field learning experiences across Saudi Arabia.'
          : 'اكتشف تجارب المعايشة الثقافية والرحلات التراثية والتعلم الميداني لبرنامج يا هلا في مختلف مناطق المملكة.';
    } else if (pathname === '/cultural-highlights') {
      title =
        language === 'en'
          ? 'Cultural and Literary Highlights | Ya Hala'
          : 'إضاءات ثقافية وأدبية | معهد يا هلا';
      description =
        language === 'en'
          ? 'Explore curated dialect essays, architectural heritage stories, and cultural reflections from Ya Hala.'
          : 'استكشف مقالات منتقاة حول اللهجة السعودية وقصص التراث المعماري وإضاءات ثقافية من برنامج يا هلا.';
    } else if (pathname === '/terms-and-conditions') {
      title =
        language === 'en'
          ? 'Terms and Conditions | Ya Hala'
          : 'الشروط والأحكام | معهد يا هلا';
      description =
        language === 'en'
          ? 'Official student services charter, academic regulations, attendance policies, and financial guidelines for Ya Hala Program.'
          : 'دليل الخدمات الطلابية واللائحة الأكاديمية وضوابط الحضور واللائحة المالية الرسمية لبرنامج يا هلا.';
    } else if (pathname === '/terms-of-use') {
      title =
        language === 'en'
          ? 'Terms of Use | Ya Hala'
          : 'سياسة الاستخدام | معهد يا هلا';
      description =
        language === 'en'
          ? 'Digital terms of use, intellectual property policies, and legal guidelines governing the Ya Hala demonstration website.'
          : 'شروط الاستخدام الرقمي وسياسات الملكية الفكرية والضوابط القانونية الحاكمة لتصفح موقع يا هلا التجريبي.';
    } else {
      title =
        language === 'en'
          ? 'Ya Hala | Speak Saudi. Live the Culture.'
          : 'معهد يا هلا | تحدث السعودية وعش الثقافة';
      description =
        language === 'en'
          ? 'Learn the authentic Saudi dialect (Najdi & Hejazi) through living cultural immersion.'
          : 'تعلم اللهجة السعودية الأصلية (النجدية والحجازية) من خلال المعايشة الثقافية الحية.';
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [pathname, language]);

  return null;
};
