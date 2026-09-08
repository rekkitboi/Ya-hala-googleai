export type Language = 'en' | 'ar';

export interface Program {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  iconName: 'landmark' | 'user' | 'users' | 'monitor';
  duration: string;
  durationAr: string;
  format: string;
  formatAr: string;
  audience: string;
  audienceAr: string;
  features: string[];
  featuresAr: string[];
}

export interface SaudiPhrase {
  id: string;
  category: string;
  categoryAr: string;
  arabic: string;
  transliteration: string;
  englishMeaning: string;
  englishMeaningAr: string;
  dialect: 'Najdi' | 'Hejazi' | 'Universal Saudi' | 'Eastern / Gulf';
  dialectAr: string;
  culturalContext: string;
  culturalContextAr: string;
  audioPronunciationText: string;
}

export interface Experience {
  id: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  tag: string;
  tagAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  highlights: string[];
  highlightsAr: string[];
  duration: string;
  durationAr: string;
}

export interface EditorialHighlight {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  date: string;
  dateAr: string;
  readTime: string;
  readTimeAr: string;
  image: string;
  description: string;
  descriptionAr: string;
}

export interface MethodologyStage {
  step: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
}
