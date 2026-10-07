/**
 * Partner & Collaborator Showcase Data
 * 
 * Simple data structure:
 * New partner logos can be added by:
 * 1. Adding an image file to /public/assets/partners/ (or /src/assets/partners/)
 * 2. Adding one entry to PARTNERS_LIST below.
 */

export interface PartnerOrganization {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  /** Primary logo file sourced from the dedicated partner assets folder */
  logoSrc: string;
  /** High-resolution PNG fallback preserving transparency */
  fallbackSrc: string;
  altEn: string;
  altAr: string;
}

export const PARTNERS_HEADER_DATA = {
  eyebrowEn: 'TRUSTED BY',
  eyebrowAr: 'شُرَكَاءُ النَّجَاح',
  headingEn: 'Our Partners & Collaborators',
  headingAr: 'شركاؤنا والمتعاونون معنا',
  descriptionEn:
    'We collaborate with leading institutions, cultural organizations, educational initiatives, and industry partners that support Arabic learning and cultural exchange.',
  descriptionAr:
    'نتعاون مع كبرى المؤسسات الأكاديمية والهيئات الثقافية والمبادرات التعليمية الرائدة الداعمة لتمكين اللغة العربية والتبادل الحضاري.',
};

export const PARTNERS_LIST: PartnerOrganization[] = [
  {
    id: '1',
    nameEn: 'King Salman Global Academy for Arabic Language',
    nameAr: 'مجمع الملك سلمان العالمي للغة العربية',
    categoryEn: 'Linguistic Authority',
    categoryAr: 'مرجعية لغوية عالمية',
    logoSrc: '/assets/partners/1.webp',
    fallbackSrc: '/assets/partners/1.png',
    altEn: 'King Salman Global Academy for Arabic Language Official Partner Logo',
    altAr: 'شعار مجمع الملك سلمان العالمي للغة العربية',
  },
  {
    id: '2',
    nameEn: 'Ministry of Culture',
    nameAr: 'وزارة الثقافة',
    categoryEn: 'Cultural Custodian',
    categoryAr: 'راعي الثقافة والفنون',
    logoSrc: '/assets/partners/2.webp',
    fallbackSrc: '/assets/partners/2.png',
    altEn: 'Saudi Ministry of Culture Official Partner Logo',
    altAr: 'شعار وزارة الثقافة السعودية',
  },
  {
    id: '3',
    nameEn: 'Royal Commission for AlUla',
    nameAr: 'الهيئة الملكية لمحافظة العلا',
    categoryEn: 'Living Heritage Destination',
    categoryAr: 'وجهة تراثية حية',
    logoSrc: '/assets/partners/3.webp',
    fallbackSrc: '/assets/partners/3.png',
    altEn: 'Royal Commission for AlUla Partner Logo',
    altAr: 'شعار الهيئة الملكية لمحافظة العلا',
  },
  {
    id: '4',
    nameEn: 'Diriyah Company',
    nameAr: 'شركة الدرعية | بوابة الدرعية',
    categoryEn: 'Birthplace of the Kingdom',
    categoryAr: 'مهد انطلاق المملكة',
    logoSrc: '/assets/partners/4.webp',
    fallbackSrc: '/assets/partners/4.png',
    altEn: 'Diriyah Company Partner Logo',
    altAr: 'شعار شركة الدرعية',
  },
  {
    id: '5',
    nameEn: 'Visit Saudi (Saudi Tourism Authority)',
    nameAr: 'روح السعودية | الهيئة السعودية للسياحة',
    categoryEn: 'Tourism & Discovery',
    categoryAr: 'السياحة والاستكشاف',
    logoSrc: '/assets/partners/5.webp',
    fallbackSrc: '/assets/partners/5.png',
    altEn: 'Visit Saudi National Tourism Partner Logo',
    altAr: 'شعار روح السعودية والهيئة السعودية للسياحة',
  },
  {
    id: '6',
    nameEn: 'King Abdulaziz Center for World Culture (Ithra)',
    nameAr: 'مركز الملك عبدالعزيز الثقافي العالمي (إثراء)',
    categoryEn: 'Cultural Hub & Innovation',
    categoryAr: 'منارة الإبداع المعرفي',
    logoSrc: '/assets/partners/6.webp',
    fallbackSrc: '/assets/partners/6.png',
    altEn: 'Ithra King Abdulaziz Center for World Culture Logo',
    altAr: 'شعار مركز الملك عبدالعزيز الثقافي العالمي - إثراء',
  },
  {
    id: '7',
    nameEn: 'Literature, Publishing & Translation Commission',
    nameAr: 'هيئة الأدب والنشر والترجمة',
    categoryEn: 'Literary & Linguistic Publishing',
    categoryAr: 'الأدب والنشر والترجمة',
    logoSrc: '/assets/partners/7.webp',
    fallbackSrc: '/assets/partners/7.png',
    altEn: 'Literature, Publishing and Translation Commission Logo',
    altAr: 'شعار هيئة الأدب والنشر والترجمة',
  },
  {
    id: '8',
    nameEn: 'Heritage Commission',
    nameAr: 'هيئة التراث',
    categoryEn: 'National Cultural Heritage',
    categoryAr: 'حفظ وتوثيق التراث الوطني',
    logoSrc: '/assets/partners/8.webp',
    fallbackSrc: '/assets/partners/8.png',
    altEn: 'Saudi Heritage Commission Partner Logo',
    altAr: 'شعار هيئة التراث السعودية',
  },
  {
    id: '9',
    nameEn: 'King Saud University',
    nameAr: 'جامعة الملك سعود',
    categoryEn: 'Higher Education & Research',
    categoryAr: 'صرح التعليم العالي والأبحاث',
    logoSrc: '/assets/partners/9.webp',
    fallbackSrc: '/assets/partners/9.png',
    altEn: 'King Saud University Partner Logo',
    altAr: 'شعار جامعة الملك سعود',
  },
  {
    id: '10',
    nameEn: 'Princess Nourah bint Abdulrahman University',
    nameAr: 'جامعة الأميرة نورة بنت عبدالرحمن',
    categoryEn: 'Global Academic Center',
    categoryAr: 'الريادة الأكاديمية العالمية',
    logoSrc: '/assets/partners/10.webp',
    fallbackSrc: '/assets/partners/10.png',
    altEn: 'Princess Nourah bint Abdulrahman University Logo',
    altAr: 'شعار جامعة الأميرة نورة بنت عبدالرحمن',
  },
  {
    id: '11',
    nameEn: 'Misk Foundation',
    nameAr: 'مؤسسة محمد بن سلمان (مسك)',
    categoryEn: 'Youth Empowerment & Leadership',
    categoryAr: 'تمكين الشباب والمبادرات المعرفية',
    logoSrc: '/assets/partners/11.webp',
    fallbackSrc: '/assets/partners/11.png',
    altEn: 'Misk Mohammed bin Salman Foundation Partner Logo',
    altAr: 'شعار مؤسسة محمد بن سلمان - مسك',
  },
  {
    id: '12',
    nameEn: 'King Abdulaziz Foundation (Darah)',
    nameAr: 'دارة الملك عبدالعزيز',
    categoryEn: 'Historical Memory & Archives',
    categoryAr: 'الذاكرة التاريخية والتوثيق',
    logoSrc: '/assets/partners/12.webp',
    fallbackSrc: '/assets/partners/12.png',
    altEn: 'King Abdulaziz Foundation for Research and Archives Logo',
    altAr: 'شعار دارة الملك عبدالعزيز للبحوث والتوثيق',
  },
];
