import type { Localized } from '~/i18n/locales'

export type ResourceKind = 'book' | 'ebook' | 'course' | 'program' | 'guide' | 'download'

/** Real resources only. Never invent titles. Each kind shows "Coming soon" while empty. */
export type Resource = { slug: string; kind: ResourceKind; title: Localized; description: Localized; cover: string | null; url: string | null; published: string | null }

export const resourceKinds: { kind: ResourceKind; title: Localized; body: Localized }[] = [
  { kind: 'book', title: { en: 'Books', bn: 'বই' }, body: { en: 'Published books.', bn: 'প্রকাশিত বই।' } },
  { kind: 'ebook', title: { en: 'E-books', bn: 'ই-বুক' }, body: { en: 'Digital books and long-form guides.', bn: 'ডিজিটাল বই ও বিস্তারিত গাইড।' } },
  { kind: 'course', title: { en: 'Online courses', bn: 'অনলাইন কোর্স' }, body: { en: 'Self-paced learning on digital safety.', bn: 'ডিজিটাল নিরাপত্তা নিয়ে নিজের গতিতে শেখার কোর্স।' } },
  { kind: 'program', title: { en: 'Training programmes', bn: 'প্রশিক্ষণ কর্মসূচি' }, body: { en: 'Structured programmes for organisations.', bn: 'প্রতিষ্ঠানের জন্য কাঠামোবদ্ধ কর্মসূচি।' } },
  { kind: 'guide', title: { en: 'Digital guides', bn: 'ডিজিটাল গাইড' }, body: { en: 'Practical checklists and how-tos.', bn: 'বাস্তবসম্মত চেকলিস্ট ও করণীয় নির্দেশিকা।' } },
  { kind: 'download', title: { en: 'Downloads & materials', bn: 'ডাউনলোড ও শিক্ষাসামগ্রী' }, body: { en: 'Educational materials to share.', bn: 'শেয়ার করার মতো শিক্ষাসামগ্রী।' } },
]

export const resources: Resource[] = []
