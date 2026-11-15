import type { Localized } from '~/i18n/locales'

/** Homepage-specific copy. Facts here must match the About and Biography pages. */
export const aboutIntro: Localized[] = [
  {
    en: 'I’m a technology entrepreneur and cyber safety advocate. My work brings together two things: building technology ventures, and helping people stay safe and in control of their digital lives.',
    bn: 'আমি একজন প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট। আমার কাজে দুটি বিষয় একসঙ্গে চলে — প্রযুক্তিভিত্তিক উদ্যোগ গড়ে তোলা, আর মানুষকে তাদের ডিজিটাল জীবনে নিরাপদ ও নিয়ন্ত্রণে থাকতে সাহায্য করা।',
  },
  {
    en: 'Most of my professional work centres on social media security and digital brand protection: advising individuals, public figures, content creators and online businesses on protecting their accounts, their brands and their content.',
    bn: 'আমার পেশাগত কাজের বড় অংশ সোশ্যাল মিডিয়া নিরাপত্তা ও ডিজিটাল ব্র্যান্ড সুরক্ষা ঘিরে — ব্যক্তি, পাবলিক ফিগার, কনটেন্ট ক্রিয়েটর ও অনলাইন ব্যবসাকে তাদের অ্যাকাউন্ট, ব্র্যান্ড ও কনটেন্ট সুরক্ষায় পরামর্শ দেওয়া।',
  },
  {
    en: 'Alongside consulting, I deliver training and awareness sessions on cyber safety and online business safety, and I’m involved in ventures working on digital protection, online safety and business technology.',
    bn: 'পরামর্শের পাশাপাশি আমি সাইবার নিরাপত্তা ও অনলাইন ব্যবসার নিরাপত্তা বিষয়ে প্রশিক্ষণ ও সচেতনতামূলক সেশন পরিচালনা করি, এবং ডিজিটাল সুরক্ষা, অনলাইন নিরাপত্তা ও বিজনেস টেকনোলজি নিয়ে কাজ করা কয়েকটি উদ্যোগের সঙ্গে যুক্ত আছি।',
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
  cta: { key: 'cta.book' | 'cta.invite' | 'cta.service'; href: string }
}[] = [
  {
    id: 'consulting',
    href: '/consulting/',
    title: { en: 'Consulting & Advisory', bn: 'পরামর্শ ও অ্যাডভাইজরি' },
    body: {
      en: 'For individuals, public figures, creators and online businesses who need to secure, recover or protect their accounts and brand.',
      bn: 'ব্যক্তি, পাবলিক ফিগার, ক্রিয়েটর ও অনলাইন ব্যবসার জন্য — যাঁদের অ্যাকাউন্ট ও ব্র্যান্ড সুরক্ষিত রাখা, ফিরিয়ে আনা বা রক্ষা করা দরকার।',
    },
    points: [
      { en: 'Account security & recovery guidance', bn: 'অ্যাকাউন্ট নিরাপত্তা ও পুনরুদ্ধারে দিকনির্দেশনা' },
      { en: 'Page verification & brand protection', bn: 'পেজ ভেরিফিকেশন ও ব্র্যান্ড সুরক্ষা' },
      { en: 'Impersonation & content protection', bn: 'ছদ্মবেশ ও কনটেন্ট সুরক্ষা' },
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
      { en: 'Sessions for law-enforcement & institutions', bn: 'আইনশৃঙ্খলা বাহিনী ও প্রতিষ্ঠানের জন্য সেশন' },
    ],
    cta: { key: 'cta.invite', href: '/contact/?type=training' },
  },
  {
    id: 'services',
    href: '/consulting/',
    title: { en: 'Services with My Team', bn: 'টিমের সঙ্গে সার্ভিস' },
    body: {
      en: 'Hands-on help delivered with my team: we take on the work of fixing, recovering and securing accounts and pages for you.',
      bn: 'আমার টিমের সঙ্গে সরাসরি কাজ: আপনার অ্যাকাউন্ট ও পেজ ঠিক করা, ফিরিয়ে আনা ও সুরক্ষিত রাখার কাজ আমরা নিজেরাই করে দিই।',
    },
    points: [
      { en: 'Hacked or disabled account & page recovery', bn: 'হ্যাক বা ডিজেবল হওয়া অ্যাকাউন্ট ও পেজ পুনরুদ্ধার' },
      { en: 'Page & profile verification', bn: 'পেজ ও প্রোফাইল ভেরিফিকেশন' },
      { en: 'Monetization, copyright & restriction issues', bn: 'মনিটাইজেশন, কপিরাইট ও রেস্ট্রিকশন সমস্যা' },
    ],
    cta: { key: 'cta.service', href: '/contact/?type=service' },
  },
]
