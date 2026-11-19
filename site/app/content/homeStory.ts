import type { Localized } from '~/i18n/locales'

/**
 * Homepage story sections (credentials, problems, Digital Trust Framework, client quotes, final CTA)
 * and the Training page "Who I train" segments. Edit text here — no layout code needed.
 * Facts only: everything below is confirmed by the owner or by published sources.
 */

/** Short credential line under the hero. */
export const credentials: { label: Localized; detail?: Localized }[] = [
  { label: { en: 'TEDx DRMC Youth speaker', bn: 'TEDx DRMC Youth বক্তা' } },
  { label: { en: 'Trainer for entrepreneurs, businesses and students', bn: 'উদ্যোক্তা, ব্যবসা ও শিক্ষার্থীদের প্রশিক্ষক' } },
  { label: { en: 'Probfly IT, UK registered trademark', bn: 'Probfly IT, যুক্তরাজ্যে নিবন্ধিত ট্রেডমার্ক' } },
]

/**
 * Headline numbers (owner-provided totals, Nov 2026). The site lists a verified subset of each —
 * e.g. 99 linked thank-you posts and 26 linked media reports — so totals are shown with "+".
 * People trained is a conservative floor from published figures (~1,200 + 2,000 + 45 = 3,245).
 */
export const stats = {
  thankedPublicly: 399,
  mediaReports: 31,
  peopleTrained: 3000,
  ventures: 4,
}

/** "The problem" — three problems businesses face, each answered by one solution area with its options. */
/** Icon names map to lucide icons in components/sections/home/Problem.tsx. */
export type SolutionIcon = 'share' | 'growth' | 'code' | 'bot' | 'bag' | 'userx' | 'copyright' | 'filex' | 'radar' | 'headset' | 'video' | 'users' | 'cap' | 'landmark'
export const problems: { id: string; icon: 'business' | 'brand' | 'cyber'; area: Localized; title: Localized; cost: Localized; solutions: (Localized & { icon: SolutionIcon })[]; href: string }[] = [
  {
    id: 'business',
    icon: 'business',
    area: { en: 'Business solutions', bn: 'বিজনেস সলিউশন' },
    title: { en: 'Your online business is stuck — or one problem away from stopping', bn: 'অনলাইন ব্যবসা আটকে আছে — বা একটি সমস্যাতেই থেমে যেতে পারে' },
    cost: {
      en: 'Restricted pages and ad accounts, ads that don’t pay back and replies that come too late all turn into lost sales.',
      bn: 'রেস্ট্রিক্টেড পেজ ও অ্যাড অ্যাকাউন্ট, খরচ তুলতে না পারা বিজ্ঞাপন আর দেরিতে উত্তর — সবই শেষে হারানো বিক্রি।',
    },
    solutions: [
      { icon: 'share', en: 'Social media solutions — pages, ad accounts and Business Manager', bn: 'সোশ্যাল মিডিয়া সলিউশন — পেজ, অ্যাড অ্যাকাউন্ট ও বিজনেস ম্যানেজার' },
      { icon: 'growth', en: 'Growth and media buying', bn: 'গ্রোথ ও মিডিয়া বায়িং' },
      { icon: 'code', en: 'Software, SaaS and web development', bn: 'সফটওয়্যার, SaaS ও ওয়েব ডেভেলপমেন্ট' },
      { icon: 'bot', en: 'AI customer service and WhatsApp automation (Zurvis.io, WhatsFly)', bn: 'এআই কাস্টমার সার্ভিস ও WhatsApp অটোমেশন (Zurvis.io, WhatsFly)' },
      { icon: 'bag', en: 'Social commerce setup and advisory', bn: 'সোশ্যাল কমার্স সেটআপ ও পরামর্শ' },
    ],
    href: '/contact/?type=service',
  },
  {
    id: 'brand',
    icon: 'brand',
    area: { en: 'Brand protection', bn: 'ব্র্যান্ড সুরক্ষা' },
    title: { en: 'Your brand is copied, faked or misused', bn: 'আপনার ব্র্যান্ড নকল, ভুয়া বা অপব্যবহার হচ্ছে' },
    cost: {
      en: 'Fake pages and sellers take your customers’ money in your name, and the complaints — and the lost trust — land on you.',
      bn: 'ভুয়া পেজ আর বিক্রেতারা আপনার নামে গ্রাহকের টাকা নেয়, আর অভিযোগ ও আস্থা হারানোর দায় এসে পড়ে আপনার ওপর।',
    },
    solutions: [
      { icon: 'userx', en: 'Impersonation and fake page protection', bn: 'ছদ্মবেশ ও ভুয়া পেজ থেকে সুরক্ষা' },
      { icon: 'copyright', en: 'Copyright and trademark enforcement', bn: 'কপিরাইট ও ট্রেডমার্ক প্রয়োগ' },
      { icon: 'filex', en: 'Counterfeit and unauthorised content takedowns', bn: 'নকল পণ্য ও অনুমতিহীন কনটেন্ট সরানো' },
      { icon: 'radar', en: 'Brand monitoring and reputation management', bn: 'ব্র্যান্ড মনিটরিং ও সুনাম ব্যবস্থাপনা' },
    ],
    href: '/consulting/#brand-protection',
  },
  {
    id: 'cyber',
    icon: 'cyber',
    area: { en: 'Cyber solutions', bn: 'সাইবার সলিউশন' },
    title: { en: 'You — or your people — are targeted online', bn: 'আপনি বা আপনার মানুষরা অনলাইনে টার্গেট হচ্ছেন' },
    cost: {
      en: 'Blackmail, harassment and leaked content do real damage fast, and one clicked link or shared code can hand over an account.',
      bn: 'ব্ল্যাকমেইল, হয়রানি আর ফাঁস হওয়া কনটেন্ট দ্রুত বড় ক্ষতি করে, আর একটি ক্লিক করা লিংক বা শেয়ার করা কোডেই অ্যাকাউন্ট হাতছাড়া হতে পারে।',
    },
    solutions: [
      { icon: 'headset', en: 'One-to-one consultation for blackmail, harassment and leaked content', bn: 'ব্ল্যাকমেইল, হয়রানি ও ফাঁস হওয়া কনটেন্টের জন্য ওয়ান-টু-ওয়ান পরামর্শ' },
      { icon: 'video', en: 'Webinars for entrepreneurs and creators', bn: 'উদ্যোক্তা ও ক্রিয়েটরদের জন্য ওয়েবিনার' },
      { icon: 'users', en: 'Security awareness workshops for teams', bn: 'টিমের জন্য নিরাপত্তা সচেতনতা কর্মশালা' },
      { icon: 'cap', en: 'Seminars for students and schools', bn: 'শিক্ষার্থী ও শিক্ষাপ্রতিষ্ঠানের জন্য সেমিনার' },
      { icon: 'landmark', en: 'Briefings for institutions and law enforcement', bn: 'প্রতিষ্ঠান ও আইনশৃঙ্খলা বাহিনীর জন্য ব্রিফিং' },
    ],
    href: '/consulting/#harassment',
  },
]

/**
 * The Digital Trust Framework: three pillars, each backed by a service and the ventures that deliver it.
 * `service` matches an id in home.ts → services (title, points, CTA come from there).
 */
export const framework: { id: 'protect' | 'automate' | 'educate'; name: Localized; line: Localized; service: 'consulting' | 'services' | 'training'; ventures: string[] }[] = [
  {
    id: 'protect',
    name: { en: 'Protect', bn: 'সুরক্ষা' },
    line: { en: 'Secure your accounts, brand and reputation — and respond fast when something goes wrong.', bn: 'অ্যাকাউন্ট, ব্র্যান্ড ও সুনাম সুরক্ষিত রাখা — আর সমস্যা হলে দ্রুত সমাধান।' },
    service: 'consulting',
    ventures: ['probfly-it', 'erazee'],
  },
  {
    id: 'automate',
    name: { en: 'Automate', bn: 'অটোমেশন' },
    line: { en: 'Software, SaaS and messaging automation that let a business grow without losing control.', bn: 'সফটওয়্যার, SaaS ও মেসেজিং অটোমেশন, যাতে ব্যবসা নিয়ন্ত্রণ না হারিয়ে বড় হতে পারে।' },
    service: 'services',
    ventures: ['zurvis', 'probfly-it'],
  },
  {
    id: 'educate',
    name: { en: 'Educate', bn: 'সচেতনতা' },
    line: { en: 'Training and awareness so people can recognise risks and protect themselves.', bn: 'প্রশিক্ষণ ও সচেতনতা, যাতে মানুষ নিজেরাই ঝুঁকি চিনে নিজেকে সুরক্ষিত রাখতে পারে।' },
    service: 'training',
    ventures: ['kaktaruaa'],
  },
]

/**
 * Client quotes — copied word for word from each person's own public Facebook post (linked).
 * `name` must match reviews.ts → publicPosts (photo + link come from there). Owner confirmed permission.
 */
export const quotes: { name: string; context: Localized; quote: string; lang: 'en' | 'bn' }[] = [
  {
    name: 'Cablgram',
    context: { en: 'Digital media, accounts recovered', bn: 'ডিজিটাল মিডিয়া, অ্যাকাউন্ট পুনরুদ্ধার' },
    quote: 'A special thanks to Probfly IT and Abdullah Al Imran for their indispensable assistance in restoring our accounts.',
    lang: 'en',
  },
  {
    name: 'Tanjim Saiara Totini',
    context: { en: 'Actor, official page restored', bn: 'অভিনেত্রী, অফিসিয়াল পেজ পুনরুদ্ধার' },
    quote: 'দীর্ঘ সময় ও পরিশ্রমের মাধ্যমে Abdullah Al Imran এবং Probfly IT আমার অফিসিয়াল পেজটি সফলভাবে রিস্টোর করে দিয়েছেন।',
    lang: 'bn',
  },
  {
    name: 'Odd Signature',
    context: { en: 'Band, page and YouTube channel recovered', bn: 'ব্যান্ড, পেজ ও ইউটিউব চ্যানেল পুনরুদ্ধার' },
    quote: 'We would like to thank Abdullah Al Imran & his team Probfly IT for helping us recover the page and the YouTube channel.',
    lang: 'en',
  },
  {
    name: 'Anica Khan',
    context: { en: 'Creator, payout and monetization fixed', bn: 'ক্রিয়েটর, পেআউট ও মনিটাইজেশন সমাধান' },
    quote: 'Two days ago my page payout got hacked and monetization was disabled. I didn’t even have a verified profile, but Abdullah Al Imran fixed everything in just two days.',
    lang: 'en',
  },
  {
    name: 'Quazi Sabir',
    context: { en: 'Khelbei Bangladesh, YouTube channel recovered', bn: 'খেলবেই বাংলাদেশ, ইউটিউব চ্যানেল পুনরুদ্ধার' },
    quote: 'Clarity, Integrity, Assurance, Trust, Service এই জাতীয় সব শব্দ যোগ করলে আপনি পাবেন Probfly IT',
    lang: 'bn',
  },
  {
    name: 'Rumor Scanner',
    context: { en: 'Fact-checking organisation, page verified', bn: 'ফ্যাক্ট-চেকিং প্রতিষ্ঠান, পেজ ভেরিফাইড' },
    quote: 'Our page is now officially verified. Thanks Probfly IT & Abdullah Al Imran for the support.',
    lang: 'en',
  },
]

/** Final call to action: what the first conversation covers, and an honest promise. */
export const finalCta = {
  covers: [
    { en: 'What happened, and what is still in your control', bn: 'কী ঘটেছে, আর এখনো কী আপনার নিয়ন্ত্রণে আছে' },
    { en: 'The realistic options and what each one involves', bn: 'বাস্তবসম্মত পথগুলো, আর প্রতিটিতে কী কী লাগবে' },
    { en: 'A clear next step — with us or on your own', bn: 'পরিষ্কার পরবর্তী পদক্ষেপ — আমাদের সঙ্গে বা নিজে নিজে' },
  ] as Localized[],
  honest: {
    en: 'If your situation isn’t something I can genuinely help with, I’ll tell you on the first call — and point you to who can.',
    bn: 'আপনার সমস্যা যদি এমন হয় যেখানে আমি সত্যিকারের সাহায্য করতে পারব না, প্রথম কথাতেই তা জানিয়ে দেব — আর কে পারবে সেটাও বলে দেব।',
  } as Localized,
}

/** Training page — who the sessions are for, each with its own enquiry link. */
export const whoITrain: { id: string; icon: 'video' | 'users' | 'cap' | 'landmark'; title: Localized; body: Localized; cta: Localized }[] = [
  {
    id: 'entrepreneurs',
    icon: 'video',
    title: { en: 'Entrepreneurs and creators', bn: 'উদ্যোক্তা ও ক্রিয়েটর' },
    body: { en: 'Webinars and workshops on protecting pages, ad accounts and income — and staying in control as you grow.', bn: 'পেজ, অ্যাড অ্যাকাউন্ট ও আয় সুরক্ষা নিয়ে ওয়েবিনার ও কর্মশালা — যাতে বড় হওয়ার সঙ্গে নিয়ন্ত্রণ না হারান।' },
    cta: { en: 'Host a webinar', bn: 'ওয়েবিনার আয়োজন করুন' },
  },
  {
    id: 'teams',
    icon: 'users',
    title: { en: 'Businesses and teams', bn: 'ব্যবসা ও টিম' },
    body: { en: 'Protecting pages, Business Manager access, ad accounts and brand assets across a team.', bn: 'টিমজুড়ে পেজ, বিজনেস ম্যানেজার অ্যাক্সেস, অ্যাড অ্যাকাউন্ট ও ব্র্যান্ড অ্যাসেট সুরক্ষা।' },
    cta: { en: 'Train my team', bn: 'আমার টিমকে প্রশিক্ষণ দিন' },
  },
  {
    id: 'students',
    icon: 'cap',
    title: { en: 'Students and schools', bn: 'শিক্ষার্থী ও শিক্ষাপ্রতিষ্ঠান' },
    body: { en: 'Seminars on cyberbullying, fake accounts, scams and staying safe on social media.', bn: 'সাইবার বুলিং, ভুয়া অ্যাকাউন্ট, প্রতারণা ও সোশ্যাল মিডিয়ায় নিরাপদ থাকা নিয়ে সেমিনার।' },
    cta: { en: 'Book a seminar', bn: 'সেমিনার বুক করুন' },
  },
  {
    id: 'institutions',
    icon: 'landmark',
    title: { en: 'Institutions and law enforcement', bn: 'প্রতিষ্ঠান ও আইনশৃঙ্খলা বাহিনী' },
    body: { en: 'Practical briefings on how account takeovers, impersonation and recovery work.', bn: 'অ্যাকাউন্ট দখল, ছদ্মবেশ ও পুনরুদ্ধার বাস্তবে কীভাবে কাজ করে, তা নিয়ে ব্যবহারিক ব্রিফিং।' },
    cta: { en: 'Request a briefing', bn: 'ব্রিফিংয়ের অনুরোধ করুন' },
  },
]
