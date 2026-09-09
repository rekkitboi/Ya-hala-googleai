import React, { useEffect, useState } from 'react';
import { ASSETS } from '../data/yaHalaData';

interface SectionFocalPoint {
  id: string;
  positionDesktop: string;
  positionMobile: string;
  scale: number;
}

const SECTION_FOCAL_POINTS: SectionFocalPoint[] = [
  { id: 'top', positionDesktop: '50% 12%', positionMobile: '50% 10%', scale: 1.0 },
  { id: 'why', positionDesktop: '50% 26%', positionMobile: '52% 22%', scale: 1.02 },
  { id: 'methodology', positionDesktop: '50% 42%', positionMobile: '48% 38%', scale: 1.04 },
  { id: 'programs', positionDesktop: '50% 36%', positionMobile: '50% 32%', scale: 1.02 },
  { id: 'phrase-feature', positionDesktop: '50% 55%', positionMobile: '52% 48%', scale: 1.05 },
  { id: 'experiences', positionDesktop: '50% 46%', positionMobile: '50% 42%', scale: 1.03 },
  { id: 'upcoming', positionDesktop: '50% 32%', positionMobile: '48% 30%', scale: 1.02 },
  { id: 'app-preview', positionDesktop: '50% 50%', positionMobile: '52% 46%', scale: 1.04 },
  { id: 'start', positionDesktop: '50% 64%', positionMobile: '50% 58%', scale: 1.01 },
];

export const EnvironmentalBackground: React.FC = () => {
  const [activeFocal, setActiveFocal] = useState<SectionFocalPoint>(SECTION_FOCAL_POINTS[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    // Check reduced motion
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionMedia.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionMedia.addEventListener('change', handleMotionChange);

    // Track active section as user scrolls through the homepage
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetLine = scrollY + windowHeight * 0.35; // point of user focus

      const sections = SECTION_FOCAL_POINTS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + rect.height;
        return { item, top, bottom };
      }).filter(Boolean) as { item: SectionFocalPoint; top: number; bottom: number }[];

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        if (targetLine >= sec.top && targetLine <= sec.bottom) {
          setActiveFocal(sec.item);
          return;
        }
      }

      // If at the very top
      if (scrollY < 100 && sections.length > 0) {
        setActiveFocal(sections[0].item);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionMedia.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentPosition = isMobile ? activeFocal.positionMobile : activeFocal.positionDesktop;
  const currentScale = prefersReducedMotion ? 1.0 : activeFocal.scale;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* High-Resolution Environmental Architectural Image */}
      <img
        src={ASSETS.heroBg}
        alt="Historic Jeddah Architectural Environment"
        className="w-full h-full object-cover transition-all ease-out"
        style={{
          objectPosition: currentPosition,
          transform: `scale(${currentScale})`,
          transitionDuration: prefersReducedMotion ? '0ms' : '1100ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'object-position, transform',
        }}
        referrerPolicy="no-referrer"
      />

      {/* Restrained Localized Environmental Grading:
          Preserves original coral stone, wooden Rawashin balconies, turquoise accents,
          and warm natural sunlight without a heavy black or muddy green wash */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Very subtle top vignette to frame the header seamlessly */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/35 via-black/10 to-transparent pointer-events-none" />
    </div>
  );
};
