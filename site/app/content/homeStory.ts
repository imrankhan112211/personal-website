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
  { label: { en: 'Trained 45 CID officers, 2023', bn: 'সিআইডির ৪৫ কর্মকর্তাকে প্রশিক্ষণ, ২০২৩' } },
  { label: { en: 'Probfly IT, UK registered trademark', bn: 'Probfly IT, যুক্তরাজ্যে নিবন্ধিত ট্রেডমার্ক' } },
]

/** Countries with clients (Dhaka Tribune, 24 Mar 2022, plus Bangladesh). */
export const clientCountries: Localized[] = [
  { en: 'Bangladesh', bn: 'বাংলাদেশ' },
  { en: 'India', bn: 'ভারত' },
  { en: 'Sri Lanka', bn: 'শ্রীলঙ্কা' },
  { en: 'United States', bn: 'যুক্তরাষ্ট্র' },
]

/** Students reached through Kaktaruaa school programmes (figure shared with the press, Nov 2026). */
export const studentsReached = 2000

/** "The problem" — the three situations people come with. */
export const problems: { id: string; icon: 'lock' | 'masks' | 'shield'; title: Localized; body: Localized }[] = [
  {
    id: 'account',
    icon: 'lock',
    title: { en: 'Your account or page is hacked, restricted or disabled', bn: 'অ্যাকাউন্ট বা পেজ হ্যাক, রেস্ট্রিক্টেড বা ডিজেবল' },
    body: {
      en: 'Years of audience and income can disappear overnight, and the platform’s help pages rarely tell you what actually works.',
      bn: 'বছরের পর বছরের অডিয়েন্স ও আয় এক রাতে হারিয়ে যেতে পারে, আর প্ল্যাটফর্মের হেল্প পেজে কী আসলে কাজ করে তা খুব কমই বলা থাকে।',
    },
  },
  {
    id: 'brand',
    icon: 'masks',
    title: { en: 'Someone is impersonating your brand', bn: 'কেউ আপনার ব্র্যান্ডের ছদ্মবেশ নিচ্ছে' },
    body: {
      en: 'Fake pages and copied content mislead your customers, take your sales and damage the trust you have built.',
      bn: 'ভুয়া পেজ আর কপি করা কনটেন্ট আপনার গ্রাহকদের বিভ্রান্ত করে, বিক্রি কেড়ে নেয় আর গড়ে তোলা আস্থা নষ্ট করে।',
    },
  },
  {
    id: 'harassment',
    icon: 'shield',
    title: { en: 'You are facing harassment, blackmail or leaked content', bn: 'হয়রানি, ব্ল্যাকমেইল বা ব্যক্তিগত কনটেন্ট ফাঁস' },
    body: {
      en: 'The first hours matter most. Knowing what to do — and what not to do — changes the outcome.',
      bn: 'প্রথম কয়েক ঘণ্টাই সবচেয়ে গুরুত্বপূর্ণ। কী করবেন আর কী করবেন না, তা জানা থাকলে ফলাফল বদলে যায়।',
    },
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
    id: 'students',
    title: { en: 'Students', bn: 'শিক্ষার্থী' },
    body: { en: 'Cyberbullying, fake accounts, scams and staying safe on social media.', bn: 'সাইবার বুলিং, ভুয়া অ্যাকাউন্ট, প্রতারণা ও সোশ্যাল মিডিয়ায় নিরাপদ থাকা।' },
    cta: { en: 'Book a school session', bn: 'স্কুল সেশন বুক করুন' },
  },
  {
    id: 'institutions',
    title: { en: 'Schools and institutions', bn: 'শিক্ষাপ্রতিষ্ঠান ও সংগঠন' },
    body: { en: 'Awareness programmes for teachers, parents, NGOs and community organisations.', bn: 'শিক্ষক, অভিভাবক, এনজিও ও সামাজিক সংগঠনের জন্য সচেতনতা কার্যক্রম।' },
    cta: { en: 'Plan a programme', bn: 'কার্যক্রম পরিকল্পনা করুন' },
  },
  {
    id: 'law-enforcement',
    title: { en: 'Police and law enforcement', bn: 'পুলিশ ও আইনশৃঙ্খলা বাহিনী' },
    body: { en: 'How account takeovers, impersonation and recovery work in practice — as delivered to 45 CID officers.', bn: 'অ্যাকাউন্ট দখল, ছদ্মবেশ ও পুনরুদ্ধার বাস্তবে কীভাবে কাজ করে — যেমনটা সিআইডির ৪৫ কর্মকর্তাকে শেখানো হয়েছে।' },
    cta: { en: 'Request a briefing', bn: 'ব্রিফিংয়ের অনুরোধ করুন' },
  },
  {
    id: 'teams',
    title: { en: 'Businesses and teams', bn: 'ব্যবসা ও টিম' },
    body: { en: 'Protecting pages, Business Manager access, ad accounts and brand assets across a team.', bn: 'টিমজুড়ে পেজ, বিজনেস ম্যানেজার অ্যাক্সেস, অ্যাড অ্যাকাউন্ট ও ব্র্যান্ড অ্যাসেট সুরক্ষা।' },
    cta: { en: 'Train my team', bn: 'আমার টিমকে প্রশিক্ষণ দিন' },
  },
]
