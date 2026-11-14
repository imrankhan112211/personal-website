import type { Localized } from '~/i18n/locales'

export type VentureStatus = 'active' | 'developing' | 'confirm'

export type Venture = {
  slug: string
  name: string
  /** Logo path in /public, e.g. '/logos/probfly.svg'. [INSERT OFFICIAL LOGO] */
  logo: string | null
  url: string | null
  description: Localized
  /** Abdullah's role. Shown as a placeholder until `roleVerified` is true. */
  role: Localized | null
  roleVerified: boolean
  status: VentureStatus
  /** Why it exists. null = [INSERT VERIFIED PURPOSE] */
  purpose?: Localized | null
  /** Key activities. Empty = [INSERT KEY ACTIVITIES] */
  activities?: Localized[]
}

// To add a venture: append an object below. Order = display order.
export const ventures: Venture[] = [
  {
    slug: 'probfly-it',
    name: 'Probfly IT',
    logo: '/logos/probfly-it.webp',
    url: 'https://probfly.com',
    description: {
      en: 'Technology and digital solutions company focused on social media solutions, digital brand protection, business automation and related services.',
      bn: 'সোশ্যাল মিডিয়া সলিউশন, ডিজিটাল ব্র্যান্ড সুরক্ষা, বিজনেস অটোমেশন ও সংশ্লিষ্ট সেবা নিয়ে কাজ করা একটি প্রযুক্তি ও ডিজিটাল সলিউশন প্রতিষ্ঠান।',
    },
    role: { en: 'Founder', bn: 'প্রতিষ্ঠাতা' },
    roleVerified: true,
    status: 'active',
  },
  {
    slug: 'kaktaruaa',
    name: 'Kaktaruaa',
    logo: '/logos/kaktaruaa.webp',
    url: 'https://kaktaruaa.org',
    description: {
      en: 'Cyber safety and digital awareness initiative working on online safety, harassment prevention, education and digital protection.',
      bn: 'অনলাইন নিরাপত্তা, হয়রানি প্রতিরোধ, শিক্ষা ও ডিজিটাল সুরক্ষা নিয়ে কাজ করা একটি সাইবার সেফটি ও ডিজিটাল সচেতনতা উদ্যোগ।',
    },
    role: { en: 'Founder', bn: 'প্রতিষ্ঠাতা' },
    roleVerified: true,
    status: 'active',
  },
  {
    slug: 'erazee',
    name: 'Erazee',
    logo: '/logos/erazee.webp',
    url: null,
    description: {
      en: 'Initiative focused on unwanted digital content removal, online risk response and victim support.',
      bn: 'অনাকাঙ্ক্ষিত ডিজিটাল কনটেন্ট অপসারণ, অনলাইন ঝুঁকিতে সাড়া দেওয়া ও ভুক্তভোগীদের সহায়তা নিয়ে কাজ করা একটি উদ্যোগ।',
    },
    role: { en: 'Founder', bn: 'প্রতিষ্ঠাতা' },
    roleVerified: true,
    status: 'developing',
  },
  {
    slug: 'zurvis',
    name: 'Zurvis.io',
    logo: '/logos/zurvis.webp',
    url: 'https://zurvis.io',
    description: {
      en: 'AI customer service and WhatsApp automation platform for businesses.',
      bn: 'ব্যবসার জন্য এআই কাস্টমার সার্ভিস ও হোয়াটসঅ্যাপ অটোমেশন প্ল্যাটফর্ম।',
    },
    role: { en: 'Co-founder', bn: 'সহ-প্রতিষ্ঠাতা' },
    roleVerified: true,
    status: 'active',
  },
]
