import type { Localized } from '~/i18n/locales'

export type MediaCategory = 'news' | 'interview' | 'opinion' | 'video' | 'press-release'

export type MediaItem = {
  id: string
  outlet: string
  /** Headline exactly as published, in its original language. */
  headline: string
  language: 'en' | 'bn'
  /** ISO date (Asia/Dhaka) as published. */
  date: string
  url: string
  category: MediaCategory
  /** Optional short summary written for this site. */
  description?: Localized
  /** Related venture / topic, used for grouping. */
  topic?: 'probfly' | 'kaktaruaa' | 'diana-award' | 'awareness' | 'commentary' | 'profile'
}

/**
 * Real, published coverage only — every item links to the original source.
 * Metadata (headline, outlet, date) was read from each page on 14 Nov 2026.
 * Removed as unreachable (404): risingbd.com/positive-bangladesh/news/433708,
 * thebangladeshtoday.com/?p=43950, therisingcampus.com (EMK Center article).
 * Removed at owner's request: two political-commentary items (Daily Janakantha, Feb 2025)
 * and a duplicate Somoy TV upload (youtu.be/4zSuC1e54Fo).
 */
export const media: MediaItem[] = [
  // ── Diana Award 2026 ──
  { id: 'somoy-diana-2026', outlet: 'Somoy TV', headline: 'সাইবার সুরক্ষায় কাজ করে ডায়ানা এওয়ার্ড পেলেন আবদুল্লাহ আল ইমরান', language: 'bn', date: '2026-11-13', url: 'https://www.youtube.com/watch?v=T2DNJcjgurA', category: 'video', topic: 'diana-award' },
  { id: 'inqilab-diana-2026', outlet: 'Daily Inqilab', headline: 'ডায়ানা অ্যাওয়ার্ড পেলেন কাকতাড়ুয়ার আব্দুল্লাহ আল ইমরান', language: 'bn', date: '2026-11-10', url: 'https://dailyinqilab.com/national/news/961006', category: 'news', topic: 'diana-award' },
  { id: 'jagonews-diana-2026', outlet: 'Jago News 24', headline: 'ডায়ানা অ্যাওয়ার্ড পেলেন কাকতাড়ুয়ার আব্দুল্লাহ আল ইমরান', language: 'bn', date: '2026-11-09', url: 'https://www.jagonews24.com/miscellaneous/article/1177518', category: 'news', topic: 'diana-award' },
  { id: 'openpr-diana-2026', outlet: 'openPR', headline: 'Abdullah Al Imran Receives Diana Award 2026 for Promoting Digital Safety in Bangladesh', language: 'en', date: '2026-11-09', url: 'https://www.openpr.com/news/4684841/abdullah-al-imran-receives-diana-award-2026-for-promoting', category: 'press-release', topic: 'diana-award' },
  { id: 'dbu-diana-2026', outlet: 'Daily Bangladesh Update', headline: 'Kaktarua Founder Wins Diana Award', language: 'en', date: '2026-11-08', url: 'https://dailybangladeshupdate.com/entertainment/8589', category: 'news', topic: 'diana-award' },
  { id: 'businessbd-diana-2026', outlet: 'Business Bangladesh', headline: 'ডায়ানা অ্যাওয়ার্ড পেল কাকতাড়ুয়া', language: 'bn', date: '2026-11-08', url: 'https://businessbangladesh.com.bd/article/412112', category: 'news', topic: 'diana-award' },
  { id: 'rupali-diana-2026', outlet: 'Rupali Bangladesh', headline: 'ছোট উদ্যোগের বড় অর্জন, ডায়ানা অ্যাওয়ার্ড পেল কাকতাড়ুয়া', language: 'bn', date: '2026-11-08', url: 'https://www.rupalibangladesh.com/social-media-news/178639', category: 'news', topic: 'diana-award' },
  { id: 'bvnews-diana-2026', outlet: 'BV News 24', headline: 'ছোট উদ্যোগ থেকে আন্তর্জাতিক স্বীকৃতি, ডায়ানা অ্যাওয়ার্ড পেলো কাকতাড়ুয়া', language: 'bn', date: '2026-11-05', url: 'https://www.bvnews24.com/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%A7/news/220785', category: 'news', topic: 'diana-award' },

  // ── Commentary & opinion ──
  { id: 'bondhushava-ai-2025', outlet: 'Bondhushava', headline: 'ব্যক্তিগত সহকারী হয়ে উঠছে এআই, তবে ভুল ব্যবহারে বিপদ!', language: 'bn', date: '2025-06-19', url: 'https://www.bondhushava.com/activities/udsuioe3y2', category: 'news', topic: 'awareness' },
  { id: 'janakantha-honeytrap-2025', outlet: 'Daily Janakantha', headline: 'হানিট্রাপ ও নীরব আর্তনাদ বিষয়ে যা বললেন আবদুল্লাহ আল ইমরান', language: 'bn', date: '2025-03-05', url: 'https://www.dailyjanakantha.com/miscellaneous/news/779334', category: 'news', topic: 'commentary' },
  { id: 'janakantha-opinion-2025', outlet: 'Daily Janakantha', headline: 'অনলাইন ব্যবসায় সফল হতে যে ৮ টি বিষয় মাথায় রাখতে হবে', language: 'bn', date: '2025-02-24', url: 'https://www.dailyjanakantha.com/opinion/news/775956', category: 'opinion', topic: 'commentary' },
  { id: 'kalbela-2024', outlet: 'Kalbela', headline: 'তাসরিফের পোস্ট নিয়ে যা বললেন আব্দুল্লাহ আল ইমরান', language: 'bn', date: '2024-08-16', url: 'https://www.kalbela.com/social-media/112400', category: 'news', topic: 'commentary' },
  { id: 'somoy-copyright-2023', outlet: 'Somoy TV', headline: 'কপিরাইট স্ট্রাইক দিয়ে ডিজিটাল চাঁদাবাজি!', language: 'bn', date: '2023-08-27', url: 'https://www.youtube.com/watch?v=HGM17lE7dIQ', category: 'video', topic: 'commentary' },

  // ── Kaktaruaa awareness programmes ──
  { id: 'dhakatribune-kaktaruaa-2024', outlet: 'Dhaka Tribune', headline: 'Kaktaruaa’s cyber awareness seminar: Fostering safe social media practices for students', language: 'en', date: '2024-11-24', url: 'https://www.dhakatribune.com/bangladesh/event/366157/kaktaruaa%E2%80%99s-cyber-awareness-seminar-fostering', category: 'news', topic: 'kaktaruaa' },
  { id: 'observer-kaktaruaa-2024', outlet: 'Daily Observer', headline: "Imran's Kaktaruaa organized 'First Aid Of Social Media Problems' seminar", language: 'en', date: '2024-11-24', url: 'https://www.observerbd.com/news/499797', category: 'news', topic: 'kaktaruaa' },
  { id: 'prothomalo-nagorik-2024', outlet: 'Prothom Alo (Nagorik)', headline: 'সামাজিক যোগাযোগমাধ্যমে নিরাপত্তায় সচেতনতা সভা', language: 'bn', date: '2024-11-24', url: 'https://nagorik.prothomalo.com/reader/onyu8icvr9', category: 'news', topic: 'kaktaruaa' },
  { id: 'jagonews-seminar-2024', outlet: 'Jago News 24', headline: 'সোশ্যাল মিডিয়ার নিরাপত্তা নিয়ে সচেতনতামূলক সেমিনার', language: 'bn', date: '2024-11-23', url: 'https://www.jagonews24.com/technology/news/983678', category: 'news', topic: 'kaktaruaa' },
  { id: 'deshtv-2024', outlet: 'Desh TV', headline: 'সোশ্যাল মিডিয়া ব্যবহারে সচেতনতামূলক সভা', language: 'bn', date: '2024-11-14', url: 'https://www.desh.tv/social-media/48248', category: 'news', topic: 'awareness' },
  { id: 'bondhushava-2024', outlet: 'Bondhushava', headline: 'সামাজিক যোগাযোগমাধ্যমে নিরাপত্তা', language: 'bn', date: '2024-05-28', url: 'https://www.bondhushava.com/activities/m1cddgemmr', category: 'news', topic: 'awareness' },

  // ── Probfly IT & profile ──
  { id: 'rtv-probfly-2022', outlet: 'RTV', headline: 'বিদেশের মাটিতে সেবা দিচ্ছে ইমরানের প্রোবফ্লাই আইটি', language: 'bn', date: '2022-12-24', url: 'https://rtvonline.com/amp/science/204534', category: 'news', topic: 'probfly' },
  { id: 'ittefaq-probfly-2022', outlet: 'The Daily Ittefaq', headline: 'দেশ ছাড়িয়ে বিদেশে সেবা দিচ্ছে ‘প্রবফ্লাই আইটি’', language: 'bn', date: '2022-04-02', url: 'https://www.ittefaq.com.bd/amp/592273/দেশ-ছাড়িয়ে-বিদেশে-সেবা-দিচ্ছে-‘প্রবফ্লাই-আইটি’', category: 'news', topic: 'probfly' },
  { id: 'observer-probfly-2022', outlet: 'Daily Observer', headline: 'ProbFly IT expands beyond boundary', language: 'en', date: '2022-03-25', url: 'https://www.observerbd.com/news/358721', category: 'news', topic: 'probfly' },
  { id: 'dhakatribune-probfly-2022', outlet: 'Dhaka Tribune', headline: 'ProbFly to provide Bangladeshi IT digital services worldwide', language: 'en', date: '2022-03-24', url: 'https://www.dhakatribune.com/amp/business/266349/probfly-to-provide-bangladeshi-it-digital-services', category: 'news', topic: 'probfly' },
  { id: 'bd24live-probfly-2021', outlet: 'BD24Live', headline: 'দেশের গন্ডি পেরিয়ে ভারত-শ্রীলঙ্কাতেও সেবা দিচ্ছে তরুণ উদ্যোক্তা ইমরানের প্রতিষ্ঠান', language: 'bn', date: '2021-10-31', url: 'https://www.bd24live.com/bangla/409549', category: 'news', topic: 'probfly' },
  { id: 'ntv-en-profile-2021', outlet: 'NTV Online', headline: 'Abdullah Al Imran, A Young Upcoming Entrepreneur In Bangladesh', language: 'en', date: '2021-07-10', url: 'https://malaysia.ntvbd.com/english-news/news-901202', category: 'news', topic: 'profile' },
  { id: 'ntv-interview-2021', outlet: 'NTV Online', headline: 'আবদুল্লাহ আল ইমরান সোশ্যাল মিডিয়া একজন সাইবার নিরাপত্তা বিশেষজ্ঞ', language: 'bn', date: '2021-07-05', url: 'https://malaysia.ntvbd.com/interview/আবদুল্লাহ-আল-ইমরান-সোশ্যাল-মিডিয়া-একজন-সাইবার-নিরাপত্তা-বিশেষজ্ঞ', category: 'interview', topic: 'profile' },
]
