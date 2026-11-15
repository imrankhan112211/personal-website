import type { Localized } from '~/i18n/locales'

/**
 * Courses & Books — add one object per product. Never invent titles, prices or numbers.
 * While a list is empty its section is hidden; when everything is empty the page shows "Coming soon".
 * How to add a product (Bengali): docs/ADDING_PRODUCTS.md
 */
export type ProductKind = 'course' | 'ebook' | 'free'

export type Product = {
  slug: string
  kind: ProductKind
  title: Localized
  /** One or two sentences. */
  description: Localized
  /** 3–4 short points: what the buyer learns or gets. */
  highlights?: Localized[]
  /** Language of the course/book itself. */
  language: 'bn' | 'en' | 'both'
  /** Price in BDT, e.g. 990. Leave out for free items. */
  price?: number
  /** Optional original price to show as discounted. */
  oldPrice?: number
  /** Short facts, e.g. { en: '12 recorded lessons', bn: '১২টি রেকর্ডেড ক্লাস' } or { en: '86 pages', bn: '৮৬ পৃষ্ঠা' }. */
  details?: Localized
  /** Cover image in public/, e.g. '/images/products/my-course.webp'. */
  cover?: string
  /** Where people buy, enrol or download (course platform, form, Facebook page…). */
  url: string
}

export const productKinds: { kind: ProductKind; title: Localized; body: Localized }[] = [
  { kind: 'course', title: { en: 'Recorded courses', bn: 'রেকর্ডেড কোর্স' }, body: { en: 'Learn at your own pace, from real cases and practical experience.', bn: 'নিজের গতিতে শিখুন — বাস্তব কেস ও হাতে-কলমে অভিজ্ঞতা থেকে।' } },
  { kind: 'ebook', title: { en: 'E-books', bn: 'ই-বুক' }, body: { en: 'Practical guides you can keep and come back to.', bn: 'হাতের কাছে রাখার মতো বাস্তবসম্মত গাইড।' } },
  { kind: 'free', title: { en: 'Free resources', bn: 'ফ্রি রিসোর্স' }, body: { en: 'Checklists and guides, free to download and share.', bn: 'চেকলিস্ট ও গাইড — বিনামূল্যে ডাউনলোড ও শেয়ার করুন।' } },
]

export const products: Product[] = []
