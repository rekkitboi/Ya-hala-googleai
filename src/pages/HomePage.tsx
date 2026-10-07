import React from 'react';
import { Language, Program, Experience } from '../types';
import { Hero } from '../components/Hero';
import { PartnersSection } from '../components/PartnersSection';
import { AboutTeaser } from '../components/AboutTeaser';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection';
import { MethodologySection } from '../components/MethodologySection';
import { ProgramsSection } from '../components/ProgramsSection';
import { OurClientsSection } from '../components/OurClientsSection';
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
      {/* 1 & 2. Unified Hero + Partners Canvas: Continuous Architectural Hero Image */}
      <div className="relative overflow-hidden">
        {/* Continuous Hero Background extending seamlessly into the Partners section */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* Sharp, cinematic Hero Base Image extending across both Hero and Partners */}
          <img
            src={ASSETS.heroBg}
            alt=""
            className="w-full h-full object-cover object-[50%_20%]"
            referrerPolicy="no-referrer"
          />
          {/* Top subtle vignette for header navigation contrast */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

          {/* Base cinematic scrim across the full canvas */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Gradually darkens the image slightly toward the partner area for optimal contrast without blurring */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/65 pointer-events-none" />

          {/* Elegant fade transition at the base of the Partners section into the About Ya Hala section */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0C100E] via-[#0C100E]/70 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10">
          <Hero
            language={language}
            onExplorePrograms={() => onScrollToSection('programs')}
            onDiscoverExperiences={() => onScrollToSection('experiences')}
          />

          {/* 2. Trusted By & Partners: Naturally integrated directly into the hero environment */}
          <PartnersSection language={language} />
        </div>
      </div>

      {/* 3. About Teaser & Cultural Pillars */}
      <AboutTeaser language={language} />

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

      {/* 6. Trusted By Professionals / Our Clients */}
      <OurClientsSection language={language} />

      {/* 7. Dialect Discovery / Interactive Phrase of the Day */}
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
