import type { Localized } from '~/i18n/locales'

export const trainingCategories = [
  {
    id: 'social-media-safety',
    title: { en: 'Social Media Safety', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা' },
    items: [
      { en: 'Social media account security', bn: 'সোশ্যাল মিডিয়া অ্যাকাউন্টের নিরাপত্তা' },
      { en: 'Privacy and account protection', bn: 'গোপনীয়তা ও অ্যাকাউন্ট সুরক্ষা' },
      { en: 'Digital identity protection', bn: 'ডিজিটাল পরিচয় সুরক্ষা' },
      { en: 'Safe social media practices', bn: 'নিরাপদ সোশ্যাল মিডিয়া চর্চা' },
    ],
  },
  {
    id: 'digital-brand-safety',
    title: { en: 'Digital Brand Safety', bn: 'ডিজিটাল ব্র্যান্ড নিরাপত্তা' },
    items: [
      { en: 'Online brand protection', bn: 'অনলাইন ব্র্যান্ড সুরক্ষা' },
      { en: 'Copyright and trademark awareness', bn: 'কপিরাইট ও ট্রেডমার্ক সচেতনতা' },
      { en: 'Impersonation prevention', bn: 'ছদ্মবেশ প্রতিরোধ' },
      { en: 'Content protection', bn: 'কনটেন্ট সুরক্ষা' },
    ],
  },
  {
    id: 'cyber-safety-awareness',
    title: { en: 'Cyber Safety Awareness', bn: 'সাইবার সেফটি সচেতনতা' },
    items: [
      { en: 'Online harassment awareness', bn: 'অনলাইন হয়রানি বিষয়ে সচেতনতা' },
      { en: 'Phishing awareness', bn: 'ফিশিং সচেতনতা' },
      { en: 'Digital safety education', bn: 'ডিজিটাল নিরাপত্তা শিক্ষা' },
      { en: 'Safe internet practices', bn: 'নিরাপদ ইন্টারনেট চর্চা' },
    ],
  },
  {
    id: 'digital-entrepreneurship',
    title: { en: 'Digital Entrepreneurship', bn: 'ডিজিটাল উদ্যোক্তা' },
    items: [
      { en: 'Online business safety', bn: 'অনলাইন ব্যবসার নিরাপত্তা' },
      { en: 'Social media business management', bn: 'সোশ্যাল মিডিয়ায় ব্যবসা ব্যবস্থাপনা' },
      { en: 'Digital brand development', bn: 'ডিজিটাল ব্র্যান্ড গঠন' },
      { en: 'Technology entrepreneurship', bn: 'প্রযুক্তি উদ্যোক্তা' },
    ],
  },
] satisfies { id: string; title: Localized; items: Localized[] }[]

export const trainingFormats: { title: Localized; body: Localized }[] = [
  { title: { en: 'Workshops', bn: 'কর্মশালা' }, body: { en: 'Interactive, hands-on sessions for groups.', bn: 'দলগত অংশগ্রহণমূলক ও হাতে-কলমে সেশন।' } },
  { title: { en: 'Talks & keynotes', bn: 'বক্তৃতা ও মূল বক্তব্য' }, body: { en: 'Talks for events, conferences and campaigns.', bn: 'অনুষ্ঠান, সম্মেলন ও প্রচারণার জন্য বক্তৃতা।' } },
  { title: { en: 'Awareness programmes', bn: 'সচেতনতা কর্মসূচি' }, body: { en: 'Sessions for students, communities and the public.', bn: 'শিক্ষার্থী, কমিউনিটি ও সাধারণ মানুষের জন্য সেশন।' } },
  { title: { en: 'Institutional training', bn: 'প্রাতিষ্ঠানিক প্রশিক্ষণ' }, body: { en: 'Tailored training for teams and organisations.', bn: 'দল ও প্রতিষ্ঠানের প্রয়োজন অনুযায়ী প্রশিক্ষণ।' } },
  { title: { en: 'Online sessions', bn: 'অনলাইন সেশন' }, body: { en: 'Live virtual training for remote audiences.', bn: 'দূরবর্তী অংশগ্রহণকারীদের জন্য লাইভ অনলাইন প্রশিক্ষণ।' } },
]

export const trainingAudiences: Localized[] = [
  { en: 'Educational institutions', bn: 'শিক্ষাপ্রতিষ্ঠান' },
  { en: 'NGOs & social organisations', bn: 'এনজিও ও সামাজিক সংগঠন' },
  { en: 'Event organisers', bn: 'অনুষ্ঠান আয়োজক' },
  { en: 'Businesses & teams', bn: 'ব্যবসা ও টিম' },
  { en: 'Public institutions', bn: 'সরকারি প্রতিষ্ঠান' },
  { en: 'Creators & communities', bn: 'ক্রিয়েটর ও কমিউনিটি' },
]

/** Institutional collaborations — add verified partners only. [INSERT VERIFIED INSTITUTIONAL COLLABORATIONS] */
export const collaborations: { name: string; logo: string | null; url: string | null }[] = []
