import type { Localized } from '~/i18n/locales'

/** Homepage-specific copy. Facts here must match the About and Biography pages. */
export const aboutIntro: Localized[] = [
  {
    en: 'Abdullah Al Imran is a Bangladeshi technology entrepreneur and cyber safety advocate, the founder of Probfly IT and the non-profit Kaktaruaa, and a recipient of The Diana Award (2026).',
    bn: 'আব্দুল্লাহ আল ইমরান বাংলাদেশি প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট, Probfly IT ও অলাভজনক উদ্যোগ কাকতাড়ুয়ার প্রতিষ্ঠাতা এবং দ্য ডায়ানা অ্যাওয়ার্ড (২০২৬) প্রাপ্ত।',
  },
  {
    en: 'Since founding Probfly IT in 2021, he has worked with businesses, brands, media organisations and public figures on social media security and brand protection, and today builds software and automation products with his teams at Probfly IT and Zurvis.io.',
    bn: '২০২১ সালে Probfly IT প্রতিষ্ঠার পর থেকে তিনি ব্যবসা, ব্র্যান্ড, মিডিয়া প্রতিষ্ঠান ও পাবলিক ফিগারদের সঙ্গে সোশ্যাল মিডিয়া নিরাপত্তা ও ব্র্যান্ড সুরক্ষা নিয়ে কাজ করছেন; বর্তমানে Probfly IT ও Zurvis.io-এর টিমের সঙ্গে সফটওয়্যার ও অটোমেশন পণ্য তৈরি করছেন।',
  },
  {
    en: 'Through Kaktaruaa he works to prevent cyberbullying and online harassment, and he has delivered cyber safety training for students, institutions and 45 officers of Bangladesh Police’s CID.',
    bn: 'কাকতাড়ুয়ার মাধ্যমে তিনি সাইবার বুলিং ও অনলাইন হয়রানি প্রতিরোধে কাজ করেন, এবং শিক্ষার্থী, বিভিন্ন প্রতিষ্ঠান ও বাংলাদেশ পুলিশের সিআইডির ৪৫ জন কর্মকর্তাকে সাইবার সেফটি প্রশিক্ষণ দিয়েছেন।',
  },
]

export const focusAreas: Localized[] = [
  { en: 'Technology entrepreneurship', bn: 'প্রযুক্তি উদ্যোক্তা' },
  { en: 'Cyber safety advocacy', bn: 'সাইবার সেফটি অ্যাডভোকেসি' },
  { en: 'Social media security', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা' },
  { en: 'Digital brand protection', bn: 'ডিজিটাল ব্র্যান্ড সুরক্ষা' },
  { en: 'Training & awareness', bn: 'প্রশিক্ষণ ও সচেতনতা' },
  { en: 'Online business safety', bn: 'অনলাইন ব্যবসার নিরাপত্তা' },
]

export const pillars = [
  {
    id: 'consulting',
    href: '/consulting/',
    title: { en: 'Consulting & Advisory', bn: 'পরামর্শ ও অ্যাডভাইজরি' },
    body: {
      en: 'One-to-one and business advisory on social media security, account protection, brand impersonation, content protection and online business risk.',
      bn: 'সোশ্যাল মিডিয়া নিরাপত্তা, অ্যাকাউন্ট সুরক্ষা, ব্র্যান্ড ছদ্মবেশ, কনটেন্ট সুরক্ষা ও অনলাইন ব্যবসার ঝুঁকি নিয়ে ব্যক্তিগত ও ব্যবসায়িক পরামর্শ।',
    },
    points: [
      { en: 'Account security & protection', bn: 'অ্যাকাউন্ট নিরাপত্তা ও সুরক্ষা' },
      { en: 'Brand & content protection', bn: 'ব্র্যান্ড ও কনটেন্ট সুরক্ষা' },
      { en: 'Online business risk', bn: 'অনলাইন ব্যবসার ঝুঁকি' },
    ],
  },
  {
    id: 'training',
    href: '/training/',
    title: { en: 'Training & Awareness', bn: 'প্রশিক্ষণ ও সচেতনতা' },
    body: {
      en: 'Workshops, talks and awareness programmes on social media safety, digital brand safety and safe online practices for institutions, organisations and communities.',
      bn: 'শিক্ষাপ্রতিষ্ঠান, সংগঠন ও কমিউনিটির জন্য সোশ্যাল মিডিয়া নিরাপত্তা, ডিজিটাল ব্র্যান্ড সুরক্ষা ও নিরাপদ অনলাইন চর্চা বিষয়ে কর্মশালা, বক্তৃতা ও সচেতনতা কার্যক্রম।',
    },
    points: [
      { en: 'Workshops & sessions', bn: 'কর্মশালা ও সেশন' },
      { en: 'Talks & speaking', bn: 'বক্তৃতা ও আলোচনা' },
      { en: 'Awareness programmes', bn: 'সচেতনতা কার্যক্রম' },
    ],
  },
  {
    id: 'ventures',
    href: '/ventures/',
    title: { en: 'Technology Entrepreneurship', bn: 'প্রযুক্তি উদ্যোক্তা' },
    body: {
      en: 'Building and supporting ventures in digital protection, online safety, social media solutions and business technology.',
      bn: 'ডিজিটাল সুরক্ষা, অনলাইন নিরাপত্তা, সোশ্যাল মিডিয়া সলিউশন ও বিজনেস টেকনোলজি নিয়ে উদ্যোগ গড়ে তোলা ও এগিয়ে নেওয়া।',
    },
    points: [
      { en: 'Probfly IT', bn: 'Probfly IT' },
      { en: 'Kaktaruaa', bn: 'Kaktaruaa' },
      { en: 'Erazee · Zurvis.io', bn: 'Erazee · Zurvis.io' },
    ],
  },
] satisfies { id: string; href: string; title: Localized; body: Localized; points: Localized[] }[]

export const expertise = [
  { title: { en: 'Social Media Security', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা' }, body: { en: 'Protecting Facebook, Instagram and other accounts, pages and Business Manager access from compromise.', bn: 'ফেসবুক, ইনস্টাগ্রামসহ বিভিন্ন অ্যাকাউন্ট, পেজ ও বিজনেস ম্যানেজার অ্যাক্সেস হ্যাক বা বেহাত হওয়া থেকে সুরক্ষা।' } },
  { title: { en: 'Digital Brand Protection', bn: 'ডিজিটাল ব্র্যান্ড সুরক্ষা' }, body: { en: 'Responding to impersonation, fake profiles and pages, and misuse of a brand’s identity online.', bn: 'অনলাইনে ছদ্মবেশ, ভুয়া প্রোফাইল ও পেজ এবং ব্র্যান্ড পরিচয়ের অপব্যবহারের বিরুদ্ধে পদক্ষেপ।' } },
  { title: { en: 'Online Business Safety', bn: 'অনলাইন ব্যবসার নিরাপত্তা' }, body: { en: 'Preventive planning for e-commerce and social-first businesses that depend on their online presence.', bn: 'অনলাইন উপস্থিতির ওপর নির্ভরশীল ই-কমার্স ও সোশ্যাল মিডিয়াভিত্তিক ব্যবসার জন্য প্রতিরোধমূলক পরিকল্পনা।' } },
  { title: { en: 'Digital Content Protection', bn: 'ডিজিটাল কনটেন্ট সুরক্ষা' }, body: { en: 'Addressing content theft, unauthorised reuse and reproduction of original work.', bn: 'কনটেন্ট চুরি, অনুমতি ছাড়া ব্যবহার ও মৌলিক কাজের পুনঃপ্রকাশ মোকাবিলা।' } },
  { title: { en: 'Copyright & Trademark Protection Guidance', bn: 'কপিরাইট ও ট্রেডমার্ক সুরক্ষা নির্দেশনা' }, body: { en: 'Practical guidance on platform processes. Formal legal matters are referred to qualified legal professionals.', bn: 'প্ল্যাটফর্মের প্রক্রিয়া নিয়ে বাস্তবসম্মত নির্দেশনা। আনুষ্ঠানিক আইনি বিষয়ে যোগ্য আইনজীবীর পরামর্শ নেওয়ার কথা বলা হয়।' } },
  { title: { en: 'Digital Reputation Management', bn: 'ডিজিটাল সুনাম ব্যবস্থাপনা' }, body: { en: 'Managing reputation risk for public figures, creators and personal brands.', bn: 'পাবলিক ফিগার, ক্রিয়েটর ও পার্সোনাল ব্র্যান্ডের সুনামের ঝুঁকি ব্যবস্থাপনা।' } },
  { title: { en: 'Online Risk Assessment', bn: 'অনলাইন ঝুঁকি মূল্যায়ন' }, body: { en: 'Reviewing access, ownership and exposure across social and business accounts.', bn: 'সোশ্যাল ও ব্যবসায়িক অ্যাকাউন্টে অ্যাক্সেস, মালিকানা ও ঝুঁকির জায়গাগুলো পর্যালোচনা।' } },
  { title: { en: 'Cyber Safety Awareness', bn: 'সাইবার সেফটি সচেতনতা' }, body: { en: 'Education on phishing, harassment and safe online practices for communities and institutions.', bn: 'কমিউনিটি ও প্রতিষ্ঠানের জন্য ফিশিং, হয়রানি ও নিরাপদ অনলাইন চর্চা বিষয়ে শিক্ষা।' } },
] satisfies { title: Localized; body: Localized }[]

export const impactAreas = [
  { id: 'public-figures', title: { en: 'Public figures & creators', bn: 'পাবলিক ফিগার ও ক্রিয়েটর' }, body: { en: 'Account protection, impersonation response and content protection for people whose name is their brand.', bn: 'যাঁদের নামই তাঁদের ব্র্যান্ড, তাঁদের জন্য অ্যাকাউন্ট সুরক্ষা, ছদ্মবেশ মোকাবিলা ও কনটেন্ট সুরক্ষা।' } },
  { id: 'businesses', title: { en: 'Entrepreneurs & online businesses', bn: 'উদ্যোক্তা ও অনলাইন ব্যবসা' }, body: { en: 'Social media solutions and brand protection for businesses that sell and grow online.', bn: 'অনলাইনে বিক্রি ও প্রবৃদ্ধিনির্ভর ব্যবসার জন্য সোশ্যাল মিডিয়া সলিউশন ও ব্র্যান্ড সুরক্ষা।' } },
  { id: 'community', title: { en: 'Community & awareness', bn: 'কমিউনিটি ও সচেতনতা' }, body: { en: 'Cyber safety education and anti-harassment awareness with institutions and communities.', bn: 'প্রতিষ্ঠান ও কমিউনিটির সঙ্গে সাইবার সেফটি শিক্ষা ও হয়রানি প্রতিরোধে সচেতনতা।' } },
] satisfies { id: string; title: Localized; body: Localized }[]

/** Homepage services: what a visitor can ask for, each with its own call to action. */
export const services: {
  id: 'consulting' | 'training' | 'services'
  href: string
  title: Localized
  body: Localized
  points: Localized[]
  cta: { key: 'cta.book' | 'cta.invite' | 'cta.project'; href: string }
}[] = [
  {
    id: 'consulting',
    href: '/consulting/',
    title: { en: 'Consulting & Advisory', bn: 'পরামর্শ ও অ্যাডভাইজরি' },
    body: {
      en: 'Strategic advice for businesses, brands and public figures on staying secure and in control across social media and online platforms.',
      bn: 'ব্যবসা, ব্র্যান্ড ও পাবলিক ফিগারদের জন্য সোশ্যাল মিডিয়া ও অনলাইন প্ল্যাটফর্মে নিরাপদ ও নিয়ন্ত্রণে থাকার কৌশলগত পরামর্শ।',
    },
    points: [
      { en: 'Business & brand protection', bn: 'বিজনেস ও ব্র্যান্ড সুরক্ষা' },
      { en: 'Social media solutions & incident response', bn: 'সোশ্যাল মিডিয়া সলিউশন ও ইনসিডেন্ট রেসপন্স' },
      { en: 'Social commerce technical advisory', bn: 'সোশ্যাল কমার্সের টেকনিক্যাল অ্যাডভাইজরি' },
      { en: 'Cyber harassment & blackmail response', bn: 'সাইবার হয়রানি ও ব্ল্যাকমেইল মোকাবিলা' },
    ],
    cta: { key: 'cta.book', href: '/contact/?type=consulting' },
  },
  {
    id: 'training',
    href: '/training/',
    title: { en: 'Training & Workshops', bn: 'প্রশিক্ষণ ও কর্মশালা' },
    body: {
      en: 'Practical sessions on social media safety and online business security for institutions, organisations and teams.',
      bn: 'শিক্ষাপ্রতিষ্ঠান, সংগঠন ও টিমের জন্য সোশ্যাল মিডিয়া নিরাপত্তা ও অনলাইন ব্যবসার সুরক্ষা নিয়ে হাতে-কলমে সেশন।',
    },
    points: [
      { en: 'Workshops for teams and staff', bn: 'টিম ও কর্মীদের জন্য কর্মশালা' },
      { en: 'Awareness programmes for students', bn: 'শিক্ষার্থীদের জন্য সচেতনতা কার্যক্রম' },
      { en: 'Sessions for law enforcement & institutions', bn: 'আইনশৃঙ্খলা বাহিনী ও প্রতিষ্ঠানের জন্য সেশন' },
    ],
    cta: { key: 'cta.invite', href: '/contact/?type=training' },
  },
  {
    id: 'services',
    href: '/ventures/',
    title: { en: 'Technology Solutions', bn: 'টেকনোলজি সলিউশন' },
    body: {
      en: 'Delivered with my teams at Probfly IT and Zurvis.io: software, SaaS and automation for businesses, and technical solutions for social media.',
      bn: 'Probfly IT ও Zurvis.io-এর টিমের সঙ্গে: ব্যবসার জন্য সফটওয়্যার, SaaS ও অটোমেশন, এবং সোশ্যাল মিডিয়ার টেকনিক্যাল সলিউশন।',
    },
    points: [
      { en: 'Software & SaaS development', bn: 'সফটওয়্যার ও SaaS ডেভেলপমেন্ট' },
      { en: 'AI customer service & WhatsApp automation', bn: 'এআই কাস্টমার সার্ভিস ও WhatsApp অটোমেশন' },
      { en: 'Social media technical solutions', bn: 'সোশ্যাল মিডিয়া টেকনিক্যাল সলিউশন' },
    ],
    cta: { key: 'cta.project', href: '/contact/?type=service' },
  },
]
