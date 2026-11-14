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

export const communityActivities: CommunityActivity[] = []

export const clientSegments: { id: string; title: Localized }[] = [
  { id: 'public-figures', title: { en: 'Public figures & celebrities', bn: 'পাবলিক ফিগার ও সেলিব্রিটি' } },
  { id: 'creators', title: { en: 'Content creators & influencers', bn: 'কনটেন্ট ক্রিয়েটর ও ইনফ্লুয়েন্সার' } },
  { id: 'entrepreneurs', title: { en: 'Entrepreneurs', bn: 'উদ্যোক্তা' } },
  { id: 'businesses', title: { en: 'Online businesses', bn: 'অনলাইন ব্যবসা' } },
  { id: 'solutions', title: { en: 'Social media solutions', bn: 'সোশ্যাল মিডিয়া সলিউশন' } },
  { id: 'brand-protection', title: { en: 'Digital brand protection', bn: 'ডিজিটাল ব্র্যান্ড সুরক্ষা' } },
]
