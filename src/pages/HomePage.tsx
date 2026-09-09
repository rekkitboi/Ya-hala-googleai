import React from 'react';
import { Language, Program, Experience } from '../types';
import { Hero } from '../components/Hero';
import { AboutTeaser } from '../components/AboutTeaser';
import { MethodologySection } from '../components/MethodologySection';
import { ProgramsSection } from '../components/ProgramsSection';
import { SaudiPhraseSection } from '../components/SaudiPhraseSection';
import { ExperiencesSection } from '../components/ExperiencesSection';
import { EditorialSection } from '../components/EditorialSection';
import { AppPreviewSection } from '../components/AppPreviewSection';
import { FinalCTA } from '../components/FinalCTA';

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
    <div>
      {/* 1. Cinematic Hero */}
      <Hero
        language={language}
        onExplorePrograms={() => onScrollToSection('programs')}
        onDiscoverExperiences={() => onScrollToSection('experiences')}
      />

      {/* 2. Shortened Homepage Introduction / Teaser linking to /about */}
      <AboutTeaser language={language} />

      {/* 3. Methodology / 4-Stage Pedagogy */}
      <MethodologySection language={language} />

      {/* 4. Programs / Learning Paths */}
      <ProgramsSection
        language={language}
        onSelectProgram={onSelectProgram}
        onApplyProgram={onOpenApplication}
      />

      {/* 5. Dialect Discovery / Interactive Phrase of the Day */}
      <SaudiPhraseSection language={language} />

      {/* 6. Cultural Experiences Showcase */}
      <ExperiencesSection
        language={language}
        onSelectExperience={onSelectExperience}
      />

      {/* 7. Upcoming Experiences & Editorial Stories */}
      <EditorialSection language={language} />

      {/* 8. Ya Hala Mobile App Interactive Preview */}
      <AppPreviewSection language={language} />

      {/* 9. Final Call to Action */}
      <FinalCTA
        language={language}
        onApplyNow={() => onOpenApplication()}
      />
    </div>
  );
};
