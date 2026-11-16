import type { Localized } from '~/i18n/locales'

/**
 * Homepage story sections (credentials, problems, Digital Trust Framework, client quotes, final CTA)
 * and the Training page "Who I train" segments. Edit text here — no layout code needed.
 * Facts only: everything below is confirmed by the owner or by published sources.
 */

/** Short credential line under the hero. */
export const credentials: { label: Localized; detail?: Localized }[] = [
  { label: { en: 'The Diana Award 2026', bn: 'দ্য ডায়ানা অ্যাওয়ার্ড ২০২৬' } },
  { label: { en: 'TEDx DRMC Youth speaker', bn: 'TEDx DRMC Youth বক্তা' } },
  { label: { en: 'Trainer for entrepreneurs, businesses and students', bn: 'উদ্যোক্তা, ব্যবসা ও শিক্ষার্থীদের প্রশিক্ষক' } },
  { label: { en: 'Probfly IT, UK registered trademark', bn: 'Probfly IT, যুক্তরাজ্যে নিবন্ধিত ট্রেডমার্ক' } },
]

/**
 * People trained across sessions, webinars and free courses — a conservative floor from figures shared with the press (Nov 2026):
 * ~1,200 women in Kaktaruaa's free online courses + 2,000–3,000 students in school programmes + 45 officers = 3,245+ → shown as 3,000+.
 */
export const peopleTrained = 3000

/** "The problem" — three situations that cost a business money, each with how it gets fixed. */
export const problems: { id: string; icon: 'lock' | 'masks' | 'message'; title: Localized; cost: Localized; fix: Localized; href: string }[] = [
  {
    id: 'assets',
    icon: 'lock',
    title: { en: 'Your page, ad account or Business Manager gets restricted', bn: 'পেজ, অ্যাড অ্যাকাউন্ট বা বিজনেস ম্যানেজার রেস্ট্রিক্টেড' },
    cost: {
      en: 'Ads stop, orders stop, and the audience you paid to build is out of reach — every day it stays down costs you sales.',
      bn: 'বিজ্ঞাপন বন্ধ, অর্ডার বন্ধ, টাকা খরচ করে গড়া অডিয়েন্স নাগালের বাইরে — যত দিন বন্ধ থাকে, তত দিন বিক্রি হারান।',
    },
    fix: { en: 'Incident response, recovery strategy and an asset structure that doesn’t hang on one account.', bn: 'ইনসিডেন্ট রেসপন্স, পুনরুদ্ধারের কৌশল, আর এমন অ্যাসেট কাঠামো যা একটি অ্যাকাউন্টের ওপর নির্ভর করে না।' },
    href: '/consulting/#social-media-solutions',
  },
  {
    id: 'brand',
    icon: 'masks',
    title: { en: 'Your brand is copied or impersonated', bn: 'আপনার ব্র্যান্ড নকল বা ছদ্মবেশে ব্যবহার হচ্ছে' },
    cost: {
      en: 'Fake pages and sellers take your customers’ money in your name, and the complaints — and lost trust — land on you.',
      bn: 'ভুয়া পেজ আর বিক্রেতারা আপনার নামে গ্রাহকের টাকা নেয়, আর অভিযোগ ও আস্থা হারানোর দায় এসে পড়ে আপনার ওপর।',
    },
    fix: { en: 'Brand protection: takedowns, trademark and copyright routes, and ongoing monitoring.', bn: 'ব্র্যান্ড সুরক্ষা: টেকডাউন, ট্রেডমার্ক ও কপিরাইটের পথ, আর নিয়মিত নজরদারি।' },
    href: '/consulting/#brand-protection',
  },
  {
    id: 'messages',
    icon: 'message',
    title: { en: 'Customer messages pile up faster than your team can answer', bn: 'গ্রাহকের মেসেজ টিমের উত্তরের চেয়ে দ্রুত জমছে' },
    cost: {
      en: 'Slow replies on WhatsApp, Messenger and Instagram mean lost leads and customers who buy somewhere else.',
      bn: 'WhatsApp, Messenger ও Instagram-এ দেরিতে উত্তর মানে হারানো লিড, আর গ্রাহক অন্য কোথাও কিনে ফেলে।',
    },
    fix: { en: 'AI customer service and messaging automation through Zurvis.io and WhatsFly.', bn: 'Zurvis.io ও WhatsFly-এর মাধ্যমে এআই কাস্টমার সার্ভিস ও মেসেজিং অটোমেশন।' },
    href: '/contact/?type=service',
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
export const whoITrain: { id: string; title: Localized; body: Localized; cta: Localized }[] = [
  {
    id: 'entrepreneurs',
    title: { en: 'Entrepreneurs and creators', bn: 'উদ্যোক্তা ও ক্রিয়েটর' },
    body: { en: 'Webinars and workshops on protecting pages, ad accounts and income — and staying in control as you grow.', bn: 'পেজ, অ্যাড অ্যাকাউন্ট ও আয় সুরক্ষা নিয়ে ওয়েবিনার ও কর্মশালা — যাতে বড় হওয়ার সঙ্গে নিয়ন্ত্রণ না হারান।' },
    cta: { en: 'Host a webinar', bn: 'ওয়েবিনার আয়োজন করুন' },
  },
  {
    id: 'teams',
    title: { en: 'Businesses and teams', bn: 'ব্যবসা ও টিম' },
    body: { en: 'Protecting pages, Business Manager access, ad accounts and brand assets across a team.', bn: 'টিমজুড়ে পেজ, বিজনেস ম্যানেজার অ্যাক্সেস, অ্যাড অ্যাকাউন্ট ও ব্র্যান্ড অ্যাসেট সুরক্ষা।' },
    cta: { en: 'Train my team', bn: 'আমার টিমকে প্রশিক্ষণ দিন' },
  },
  {
    id: 'students',
    title: { en: 'Students and schools', bn: 'শিক্ষার্থী ও শিক্ষাপ্রতিষ্ঠান' },
    body: { en: 'Seminars on cyberbullying, fake accounts, scams and staying safe on social media.', bn: 'সাইবার বুলিং, ভুয়া অ্যাকাউন্ট, প্রতারণা ও সোশ্যাল মিডিয়ায় নিরাপদ থাকা নিয়ে সেমিনার।' },
    cta: { en: 'Book a seminar', bn: 'সেমিনার বুক করুন' },
  },
  {
    id: 'institutions',
    title: { en: 'Institutions and law enforcement', bn: 'প্রতিষ্ঠান ও আইনশৃঙ্খলা বাহিনী' },
    body: { en: 'Practical briefings on how account takeovers, impersonation and recovery work.', bn: 'অ্যাকাউন্ট দখল, ছদ্মবেশ ও পুনরুদ্ধার বাস্তবে কীভাবে কাজ করে, তা নিয়ে ব্যবহারিক ব্রিফিং।' },
    cta: { en: 'Request a briefing', bn: 'ব্রিফিংয়ের অনুরোধ করুন' },
  },
]
