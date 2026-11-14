import type { Localized } from '~/i18n/locales'

/** Blog categories. The `slug` is what you write as `category:` in an article file. */
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
