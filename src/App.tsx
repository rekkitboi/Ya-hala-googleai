import React, { useState, useEffect } from 'react';
import { Language, Program, Experience } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { ProgramsSection } from './components/ProgramsSection';
import { SaudiPhraseSection } from './components/SaudiPhraseSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { EditorialSection } from './components/EditorialSection';
import { AppPreviewSection } from './components/AppPreviewSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ProgramModal } from './components/ProgramModal';
import { ExperienceModal } from './components/ExperienceModal';
import { PROGRAMS } from './data/yaHalaData';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('in-person');
  const [inspectedProgram, setInspectedProgram] = useState<Program | null>(null);
  const [inspectedExperience, setInspectedExperience] = useState<Experience | null>(null);

  // Update HTML dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleOpenApplication = (programId?: string) => {
    if (programId) {
      setSelectedProgramId(programId);
    }
    setIsApplicationOpen(true);
  };

  const handleSelectProgramById = (id: string) => {
    const prog = PROGRAMS.find((p) => p.id === id);
    if (prog) {
      setInspectedProgram(prog);
    } else {
      handleOpenApplication(id);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#F9F8F5] text-[#222222] ${
        language === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* Fixed Dynamic Navigation Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenApplication={() => handleOpenApplication()}
      />

      <main>
        {/* 1. Cinematic Hero */}
        <Hero
          language={language}
          onExplorePrograms={() => scrollToSection('programs')}
          onDiscoverExperiences={() => scrollToSection('experiences')}
        />

        {/* 2. Cinematic About / 4 Pillars Architecture */}
        <AboutSection language={language} />

        {/* 3. Methodology / 4-Stage Pedagogy */}
        <MethodologySection language={language} />

        {/* 4. Programs / Learning Paths */}
        <ProgramsSection
          language={language}
          onSelectProgram={(program) => setInspectedProgram(program)}
          onApplyProgram={(programId) => handleOpenApplication(programId)}
        />

        {/* 5. Dialect Discovery / Interactive Phrase of the Day */}
        <SaudiPhraseSection language={language} />

        {/* 6. Cultural Experiences Showcase */}
        <ExperiencesSection
          language={language}
          onSelectExperience={(exp) => setInspectedExperience(exp)}
        />

        {/* 7. Upcoming Experiences & Editorial Stories */}
        <EditorialSection language={language} />

        {/* 8. Ya Hala Mobile App Interactive Preview */}
        <AppPreviewSection language={language} />

        {/* 9. Final Call to Action */}
        <FinalCTA
          language={language}
          onApplyNow={() => handleOpenApplication()}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        language={language}
        onSelectProgramId={handleSelectProgramById}
      />

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
        language={language}
        preselectedProgramId={selectedProgramId}
      />

      <ProgramModal
        program={inspectedProgram}
        onClose={() => setInspectedProgram(null)}
        language={language}
        onApply={(programId) => {
          setInspectedProgram(null);
          handleOpenApplication(programId);
        }}
      />

      <ExperienceModal
        experience={inspectedExperience}
        onClose={() => setInspectedExperience(null)}
        language={language}
        onBookExperience={(_title) => {
          setInspectedExperience(null);
          handleOpenApplication('in-person');
        }}
      />
    </div>
  );
}
