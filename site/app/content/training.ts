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

/** Workshop & event gallery (images made by `npm run images`). First item is shown large. */
export const trainingGallery: { src: string; alt: Localized }[] = [
  { src: '/images/kaktaruaa-seminar-2024-panel-1600.webp', alt: { en: 'Panel at the Kaktaruaa seminar “First Aid of Social Media Problems”, EMK Center, Dhaka', bn: 'ইএমকে সেন্টারে কাকতাড়ুয়ার সেমিনার “First Aid of Social Media Problems”-এর প্যানেল' } },
  { src: '/images/kaktaruaa-seminar-2024-award-1600.webp', alt: { en: 'Receiving a memento at the cyber security seminar, EMK Center', bn: 'ইএমকে সেন্টারে সাইবার সিকিউরিটি সেমিনারে সম্মাননা গ্রহণ' } },
  { src: '/images/school-session-speaking-1600.webp', alt: { en: 'Abdullah Al Imran speaking at a student awareness session', bn: 'শিক্ষার্থীদের সচেতনতা সেশনে বক্তব্য রাখছেন আব্দুল্লাহ আল ইমরান' } },
  { src: '/images/school-session-discussion-1600.webp', alt: { en: 'Open discussion with students during an awareness session', bn: 'সচেতনতা সেশনে শিক্ষার্থীদের সঙ্গে উন্মুক্ত আলোচনা' } },
  { src: '/images/school-session-audience-1600.webp', alt: { en: 'Students attending a digital safety session', bn: 'ডিজিটাল নিরাপত্তা সেশনে অংশ নেওয়া শিক্ষার্থীরা' } },
  { src: '/images/school-session-group-1600.webp', alt: { en: 'Group photo with students after an awareness session', bn: 'সচেতনতা সেশন শেষে শিক্ষার্থীদের সঙ্গে গ্রুপ ছবি' } },
]

/** Top-of-page mosaic on the Training page: speaking to audiences (kept different from the gallery). */
export const trainingHeroPhotos: { src: string; alt: Localized }[] = [
  { src: '/images/training-tedx-stage-1000.webp', alt: { en: 'Abdullah Al Imran speaking at TEDx DRMC Youth 2025', bn: 'TEDx DRMC Youth ২০২৫-এ বক্তব্য রাখছেন আব্দুল্লাহ আল ইমরান' } },
  { src: '/images/training-emk-hall-1000.webp', alt: { en: 'A full hall at the Kaktaruaa cyber security seminar, EMK Center, Dhaka', bn: 'ইএমকে সেন্টারে কাকতাড়ুয়ার সাইবার সিকিউরিটি সেমিনারে পূর্ণ হলরুম' } },
  { src: '/images/training-cybernetics-podium-1000.webp', alt: { en: 'Speaking at the “Cybernetics” workshop on robotics and cyber security', bn: 'রোবোটিক্স ও সাইবার সিকিউরিটি বিষয়ক “Cybernetics” কর্মশালায় বক্তব্য' } },
]

/** Institutional collaborations — add verified partners only. [INSERT VERIFIED INSTITUTIONAL COLLABORATIONS] */
export const collaborations: { name: string; logo: string | null; url: string | null }[] = []
