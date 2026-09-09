import React from 'react';
import { Language } from '../types';
import { AboutHero } from '../components/about/AboutHero';
import { OurPurposeSection } from '../components/about/OurPurposeSection';
import { FounderMessageSection } from '../components/about/FounderMessageSection';
import { MeetOurTeamSection } from '../components/about/MeetOurTeamSection';
import { FinalCTA } from '../components/FinalCTA';

interface AboutPageProps {
  language: Language;
  onOpenApplication: (programId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language, onOpenApplication }) => {
  return (
    <div className="min-h-screen">
      {/* 1. Dedicated About Hero */}
      <AboutHero language={language} />

      {/* 2. Institutional Purpose: Vision, Mission, Principles & Values, Objectives */}
      <OurPurposeSection language={language} />

      {/* 3. Founder's Message: Editorial Layout without Photo */}
      <FounderMessageSection language={language} />

      {/* 4. Meet Our Team: Amin Al Zahrani featured first with photo, followed by advisors */}
      <MeetOurTeamSection language={language} />

      {/* 5. Final CTA */}
      <FinalCTA language={language} onApplyNow={() => onOpenApplication()} />
    </div>
  );
};
