import type { Localized } from '~/i18n/locales'

export const articleCategories = [
  { slug: 'social-media-security', name: { en: 'Social Media Security', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা' } },
  { slug: 'digital-brand-protection', name: { en: 'Digital Brand Protection', bn: 'ডিজিটাল ব্র্যান্ড সুরক্ষা' } },
  { slug: 'online-business-safety', name: { en: 'Online Business Safety', bn: 'অনলাইন ব্যবসার নিরাপত্তা' } },
  { slug: 'cyber-safety-awareness', name: { en: 'Cyber Safety Awareness', bn: 'সাইবার সেফটি সচেতনতা' } },
  { slug: 'technology-innovation', name: { en: 'Technology & Innovation', bn: 'প্রযুক্তি ও উদ্ভাবন' } },
  { slug: 'entrepreneurship', name: { en: 'Entrepreneurship', bn: 'উদ্যোক্তা' } },
  { slug: 'personal-insights', name: { en: 'Personal Insights & Experiences', bn: 'ব্যক্তিগত ভাবনা ও অভিজ্ঞতা' } },
] satisfies { slug: string; name: Localized }[]

export type ArticleCategory = (typeof articleCategories)[number]['slug']

/** Body blocks — a CMS-friendly format (maps 1:1 to Portable Text / MDX later). */
export type Block =
  | { type: 'h2'; id: string; text: Localized }
  | { type: 'p'; text: Localized }
  | { type: 'ul'; items: Localized[] }
  | { type: 'quote'; text: Localized }
  | { type: 'note'; text: Localized }

export type Article = {
  slug: string
  title: Localized
  excerpt: Localized
  cover: string | null
  category: ArticleCategory
  /** ISO date */
  published: string
  updated?: string
  readingMinutes: number
  body: Block[]
  sources?: { label: string; url: string }[]
  /** Layout preview only: labelled on the page, noindex, excluded from sitemap and schema. */
  sample?: boolean
}

/** Articles written by Abdullah. Add real articles here (newest first is not required). */
const published: Article[] = []

/** Shown only until the first real article exists. */
const layoutPreview: Article = {
  slug: 'article-layout-preview',
  sample: true,
  title: { en: 'Article layout preview', bn: 'লেখার লেআউট প্রিভিউ' },
  excerpt: {
    en: 'A sample showing how articles will look: table of contents, headings, lists, notes and sources. Replace it with the first real article.',
    bn: 'লেখাগুলো কেমন দেখাবে তার একটি নমুনা: সূচিপত্র, শিরোনাম, তালিকা, নোট ও তথ্যসূত্র। প্রথম আসল লেখা দিয়ে এটি প্রতিস্থাপন করুন।',
  },
  cover: null,
  category: 'social-media-security',
  published: '2026-11-14',
  readingMinutes: 2,
  body: [
    { type: 'note', text: { en: 'This is a layout preview, not a published article. It is hidden from search engines and disappears automatically once a real article is added to app/content/articles.ts.', bn: 'এটি একটি লেআউট প্রিভিউ, প্রকাশিত লেখা নয়। এটি সার্চ ইঞ্জিন থেকে লুকানো এবং app/content/articles.ts-এ আসল লেখা যুক্ত হলে স্বয়ংক্রিয়ভাবে সরে যাবে।' } },
    { type: 'p', text: { en: 'Each article opens with a short introduction that tells the reader what problem it addresses and who it is for.', bn: 'প্রতিটি লেখা শুরু হয় একটি ছোট ভূমিকা দিয়ে — লেখাটি কোন সমস্যা নিয়ে এবং কাদের জন্য, তা জানিয়ে।' } },
    { type: 'h2', id: 'structure', text: { en: 'How articles are structured', bn: 'লেখার কাঠামো' } },
    { type: 'p', text: { en: 'Second-level headings become entries in the table of contents, so readers and search engines can see the outline at a glance.', bn: 'দ্বিতীয় স্তরের শিরোনামগুলো সূচিপত্রে যুক্ত হয়, ফলে পাঠক ও সার্চ ইঞ্জিন এক নজরে লেখার কাঠামো দেখতে পারে।' } },
    { type: 'ul', items: [
      { en: 'Clear, descriptive headings', bn: 'স্পষ্ট ও বর্ণনামূলক শিরোনাম' },
      { en: 'Short paragraphs and practical steps', bn: 'ছোট অনুচ্ছেদ ও বাস্তবসম্মত পদক্ষেপ' },
      { en: 'Sources linked at the end', bn: 'শেষে তথ্যসূত্রের লিংক' },
    ] },
    { type: 'h2', id: 'quotes', text: { en: 'Pull quotes and notes', bn: 'উদ্ধৃতি ও নোট' } },
    { type: 'quote', text: { en: 'A pull quote highlights the single most important idea in the article.', bn: 'একটি উদ্ধৃতি লেখার সবচেয়ে গুরুত্বপূর্ণ ভাবনাটিকে তুলে ধরে।' } },
    { type: 'p', text: { en: 'Articles can be written in English, Bengali or both. If a Bengali version is not available, the English text is shown and marked accordingly.', bn: 'লেখা ইংরেজি, বাংলা বা দুই ভাষাতেই হতে পারে। বাংলা সংস্করণ না থাকলে ইংরেজি লেখা দেখানো হয় এবং তা উল্লেখ করা থাকে।' } },
  ],
  sources: [],
}

export const articles: Article[] = published
/** What listings show: real articles, or the layout preview while there are none. */
export const listedArticles: Article[] = published.length ? published : [layoutPreview]
/** Every article page that gets built. */
export const allArticles: Article[] = published.length ? published : [layoutPreview]
