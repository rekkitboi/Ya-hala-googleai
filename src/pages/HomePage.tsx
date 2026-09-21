import React from 'react';
import { Language, Program, Experience } from '../types';
import { Hero } from '../components/Hero';
import { AboutTeaser } from '../components/AboutTeaser';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection';
import { MethodologySection } from '../components/MethodologySection';
import { ProgramsSection } from '../components/ProgramsSection';
import { SaudiPhraseSection } from '../components/SaudiPhraseSection';
import { ExperiencesSection } from '../components/ExperiencesSection';
import { EditorialSection } from '../components/EditorialSection';
import { AppPreviewSection } from '../components/AppPreviewSection';
import { FinalCTA } from '../components/FinalCTA';
import { ASSETS } from '../data/yaHalaData';

interface HomePageProps {
  language: Language;
  onOpenApplication: (programId?: string) => void;
  onSelectProgram: (program: Program) => void;
  onSelectExperience: (experience: Experience) => void;
  onScrollToSection: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onOpenApplication,
  onSelectProgram,
  onSelectExperience,
  onScrollToSection,
}) => {
  return (
    <div className="relative bg-[#F9F8F5]">
      {/* 1 & 2. Opening Sequence with Shared Architectural Background */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroBg}
            alt=""
            className="w-full h-full object-cover object-[50%_12%]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette for header and readability */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F9F8F5] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10">
          <Hero
            language={language}
            onExplorePrograms={() => onScrollToSection('programs')}
            onDiscoverExperiences={() => onScrollToSection('experiences')}
          />
          <AboutTeaser language={language} />
        </div>
      </div>

      {/* 3. Branded Video Showcase */}
      <VideoShowcaseSection language={language} />

      {/* 4. Methodology / 4-Stage Pedagogy */}
      <MethodologySection language={language} />

      {/* 5. Programs / Learning Paths */}
      <ProgramsSection
        language={language}
        onSelectProgram={onSelectProgram}
        onApplyProgram={onOpenApplication}
      />

      {/* 6. Dialect Discovery / Interactive Phrase of the Day */}
      <SaudiPhraseSection language={language} />

      {/* 7. Cultural Experiences Showcase */}
      <ExperiencesSection
        language={language}
        onSelectExperience={onSelectExperience}
      />

      {/* 8. Upcoming Experiences & Editorial Stories */}
      <EditorialSection language={language} />

      {/* 9. Ya Hala Mobile App Interactive Preview */}
      <AppPreviewSection language={language} />

      {/* 10. Final Call to Action */}
      <FinalCTA
        language={language}
        onApplyNow={() => onOpenApplication()}
      />
    </div>
  );
};
