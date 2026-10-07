import React from 'react';
import { Language } from '../types';
import { StudentExperienceHero } from '../components/student-experience/StudentExperienceHero';
import { ProgramLevelsSection } from '../components/student-experience/ProgramLevelsSection';
import { LifeAtYaHalaSection } from '../components/student-experience/LifeAtYaHalaSection';
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

      {/* 2. Four Progressive Program Levels Aligned with CEFR */}
      <ProgramLevelsSection language={language} />

      {/* 3. Experiences Beyond the Classroom (7 Rich Photographic Activity Cards) */}
      <LifeAtYaHalaSection language={language} />

      {/* 4. Final Enrollment CTA */}
      <StudentExperienceCTA language={language} onApplyNow={() => onOpenApplication()} />
    </div>
  );
};
