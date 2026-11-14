import type { Localized } from '~/i18n/locales'

/** Community & social impact activities. Add only evidence-based entries. */
export type CommunityActivity = { id: string; title: Localized; description: Localized | null; organization: Localized | null; date: string | null; image: string | null; sourceUrl: string | null }

export const communityThemes: { id: string; title: Localized; body: Localized }[] = [
  { id: 'awareness', title: { en: 'Cyber safety awareness', bn: 'সাইবার সেফটি সচেতনতা' }, body: { en: 'Sessions and campaigns on safe online practices.', bn: 'নিরাপদ অনলাইন চর্চা নিয়ে সেশন ও প্রচারণা।' } },
  { id: 'harassment', title: { en: 'Online harassment prevention', bn: 'অনলাইন হয়রানি প্রতিরোধ' }, body: { en: 'Awareness and response guidance for people facing harassment online.', bn: 'অনলাইনে হয়রানির শিকার মানুষের জন্য সচেতনতা ও করণীয় বিষয়ক নির্দেশনা।' } },
  { id: 'education', title: { en: 'Educational institutions', bn: 'শিক্ষাপ্রতিষ্ঠান' }, body: { en: 'Digital safety education with schools, colleges and universities.', bn: 'স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের সঙ্গে ডিজিটাল নিরাপত্তা শিক্ষা।' } },
  { id: 'community', title: { en: 'Community support', bn: 'কমিউনিটি সহায়তা' }, body: { en: 'Support for individuals affected by online risks.', bn: 'অনলাইন ঝুঁকিতে ক্ষতিগ্রস্ত মানুষের পাশে থাকা।' } },
  { id: 'institutions', title: { en: 'Institutional collaborations', bn: 'প্রাতিষ্ঠানিক সহযোগিতা' }, body: { en: 'Work with organisations and institutions on digital safety.', bn: 'ডিজিটাল নিরাপত্তা নিয়ে বিভিন্ন সংগঠন ও প্রতিষ্ঠানের সঙ্গে কাজ।' } },
]

export const communityActivities: CommunityActivity[] = [
  {
    id: 'kaktaruaa-seminar-2024',
    title: { en: 'Cyber Security Seminar: “First Aid of Social Media Problems”', bn: 'সাইবার সিকিউরিটি সেমিনার: “First Aid of Social Media Problems”' },
    description: { en: 'Kaktaruaa seminar on safe social media practices for students.', bn: 'শিক্ষার্থীদের নিরাপদ সোশ্যাল মিডিয়া চর্চা নিয়ে কাকতাড়ুয়ার সেমিনার।' },
    organization: { en: 'Kaktaruaa', bn: 'Kaktaruaa' },
    date: '2024-11-24',
    image: '/images/kaktaruaa-seminar-2024-1600.webp',
    sourceUrl: 'https://www.dhakatribune.com/bangladesh/event/366157/kaktaruaa%E2%80%99s-cyber-awareness-seminar-fostering',
  },
  {
    id: 'student-sessions',
    title: { en: 'Digital safety sessions with students', bn: 'শিক্ষার্থীদের সঙ্গে ডিজিটাল নিরাপত্তা সেশন' },
    description: null,
    organization: null,
    date: null,
    image: '/images/school-session-group-1600.webp',
    sourceUrl: null,
  },
  {
    id: 'cybernetics-workshop',
    title: { en: '“Cybernetics” — workshop on robotics and cyber security', bn: '“Cybernetics” — রোবটিক্স ও সাইবার সিকিউরিটি কর্মশালা' },
    description: null,
    organization: null,
    date: null,
    image: '/images/cybernetics-workshop-1600.webp',
    sourceUrl: null,
  },
]

export const clientSegments: { id: string; title: Localized }[] = [
  { id: 'public-figures', title: { en: 'Public figures & celebrities', bn: 'পাবলিক ফিগার ও সেলিব্রিটি' } },
  { id: 'creators', title: { en: 'Content creators & influencers', bn: 'কনটেন্ট ক্রিয়েটর ও ইনফ্লুয়েন্সার' } },
  { id: 'entrepreneurs', title: { en: 'Entrepreneurs', bn: 'উদ্যোক্তা' } },
  { id: 'businesses', title: { en: 'Online businesses', bn: 'অনলাইন ব্যবসা' } },
  { id: 'solutions', title: { en: 'Social media solutions', bn: 'সোশ্যাল মিডিয়া সলিউশন' } },
  { id: 'brand-protection', title: { en: 'Digital brand protection', bn: 'ডিজিটাল ব্র্যান্ড সুরক্ষা' } },
]
