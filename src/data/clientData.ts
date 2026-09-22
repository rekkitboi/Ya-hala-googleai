export interface ClientProfile {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  imageStatus: 'confirmed' | 'temporary-generated' | 'requires-confirmation';
  contentStatus: 'confirmed' | 'requires-confirmation';
  consentStatus?: 'confirmed' | 'requires-confirmation';
  portraitScale?: number;
  portraitScaleMobile?: number;
  portraitObjectPosition?: string;
  portraitTranslateX?: string;
  portraitTranslateY?: string;
  portraitCropMode?: string;
  displayOrder: number;
  quote?: string;
  quoteAr?: string;
}

export const CLIENTS_HEADER_DATA = {
  eyebrowEn: 'TRUSTED BY PROFESSIONALS',
  eyebrowAr: 'موثوق به من المحترفين',
  headingEn: 'Our Clients',
  headingAr: 'عملاؤنا',
  introEn:
    'People choosing Ya Hala to build confident communication and a deeper connection with Saudi language and culture.',
  introAr:
    'أشخاص اختاروا يا هلا لبناء تواصل واثق واتصال أعمق باللغة والثقافة السعودية.',
};

export const YA_HALA_CLIENTS: ClientProfile[] = [
  {
    id: 'eng-moh-abd',
    name: 'Engineer Mohammed Abdulaziz',
    nameAr: 'المهندس محمد عبدالعزيز',
    role: 'Senior Consultant, Saudi Telecom Company (STC)',
    roleAr: 'مستشار أول، شركة الاتصالات السعودية (STC)',
    description: 'Senior Consultant at Saudi Telecom Company (STC).',
    descriptionAr: 'مستشار أول في شركة الاتصالات السعودية (STC).',
    image: '/assets/Eng. Moh. Abd.png',
    imageStatus: 'confirmed',
    contentStatus: 'confirmed',
    consentStatus: 'requires-confirmation',
    portraitScale: 1,
    portraitObjectPosition: 'center bottom',
    portraitTranslateX: '0%',
    portraitTranslateY: '0%',
    displayOrder: 1,
  },
  {
    id: 'esteve-calzada',
    name: 'Esteve Calzada',
    nameAr: 'إستيفي كالزادا',
    role: 'CEO, Al Hilal Club',
    roleAr: 'الرئيس التنفيذي، نادي الهلال',
    description: 'Studying Arabic with Ya Hala.',
    descriptionAr: 'يتعلم اللغة العربية مع يا هلا.',
    image: '/assets/Esteve Calzada.png',
    imageStatus: 'confirmed',
    contentStatus: 'confirmed',
    consentStatus: 'requires-confirmation',
    portraitScale: 1.65,
    portraitObjectPosition: 'center bottom',
    portraitTranslateX: '8.5%',
    portraitTranslateY: '0%',
    displayOrder: 2,
  },
  {
    id: 'john-weeks',
    name: 'John Weeks',
    nameAr: 'جون ويكس',
    role: 'Healthcare Management Consultant',
    roleAr: 'مستشار في إدارة الرعاية الصحية',
    description: 'Healthcare management consultant and CEO of Worldview Health.',
    descriptionAr: 'مستشار في إدارة الرعاية الصحية والرئيس التنفيذي لشركة Worldview Health.',
    image: '/assets/John Weeks.png',
    imageStatus: 'confirmed',
    contentStatus: 'confirmed',
    consentStatus: 'requires-confirmation',
    portraitScale: 1,
    portraitObjectPosition: 'center bottom',
    portraitTranslateX: '0%',
    portraitTranslateY: '0%',
    displayOrder: 3,
  },
  {
    id: 'sir-michael-dike',
    name: 'Sir Michael Dike',
    nameAr: 'السير مايكل دايك',
    role: 'CEO, New Square Project',
    roleAr: 'الرئيس التنفيذي، مشروع نيو سكوير',
    description: 'Training in Arabic with Ya Hala.',
    descriptionAr: 'يتدرب على اللغة العربية مع يا هلا.',
    image: '/assets/Sir Michael Dike.png',
    imageStatus: 'confirmed',
    contentStatus: 'confirmed',
    consentStatus: 'requires-confirmation',
    portraitScale: 1.48,
    portraitObjectPosition: 'center bottom',
    portraitTranslateX: '0%',
    portraitTranslateY: '14%',
    displayOrder: 4,
  },
];
