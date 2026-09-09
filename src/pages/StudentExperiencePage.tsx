import React from 'react';
import { Language } from '../types';
import { StudentExperienceHero } from '../components/student-experience/StudentExperienceHero';
import { LearningJourneySection } from '../components/student-experience/LearningJourneySection';
import { ProgramLevelsSection } from '../components/student-experience/ProgramLevelsSection';
import { CultureInLearningSection } from '../components/student-experience/CultureInLearningSection';
import { LifeAtYaHalaSection } from '../components/student-experience/LifeAtYaHalaSection';
import { ConnectedTriadSection } from '../components/student-experience/ConnectedTriadSection';
import { StudentExperienceCTA } from '../components/student-experience/StudentExperienceCTA';

interface StudentExperiencePageProps {
  language: Language;
  onOpenApplication: (programId?: string) => void;
}

export const StudentExperiencePage: React.FC<StudentExperiencePageProps> = ({
  language,
  onOpenApplication,
}) => {
  return (
    <div className="min-h-screen">
      {/* 1. Student Experience Hero */}
      <StudentExperienceHero language={language} />

      {/* 2. Emotional Narrative / 6-Stage Learning Journey */}
      <LearningJourneySection language={language} />

      {/* 3. 4 Program Levels Aligned with CEFR */}
      <ProgramLevelsSection language={language} />

      {/* 4. Culture is Part of Learning (8 Topics) */}
      <CultureInLearningSection language={language} />

      {/* 5. Life at Ya Hala (7 Activities Beyond the Classroom) */}
      <LifeAtYaHalaSection language={language} />

      {/* 6. Three Connected Parts Triad */}
      <ConnectedTriadSection language={language} />

      {/* 7. Final Enrollment CTA */}
      <StudentExperienceCTA language={language} onApplyNow={() => onOpenApplication()} />
    </div>
  );
};
