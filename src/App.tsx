import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Language, Program, Experience } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StudentExperiencePage } from './pages/StudentExperiencePage';
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

  // Update HTML dir and lang attribute when language changes
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
      {/* Route and Meta Title Synchronizer */}
      <ScrollToTop language={language} />

      {/* Fixed Dynamic Navigation Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenApplication={() => handleOpenApplication()}
      />

      {/* Main Page Routing */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                language={language}
                onOpenApplication={handleOpenApplication}
                onSelectProgram={(program) => setInspectedProgram(program)}
                onSelectExperience={(exp) => setInspectedExperience(exp)}
                onScrollToSection={scrollToSection}
              />
            }
          />

          <Route
            path="/about"
            element={
              <AboutPage
                language={language}
                onOpenApplication={handleOpenApplication}
              />
            }
          />

          <Route
            path="/student-experience"
            element={
              <StudentExperiencePage
                language={language}
                onOpenApplication={handleOpenApplication}
              />
            }
          />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
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
