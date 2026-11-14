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
    logo: null,
    url: 'https://probfly.com',
    description: {
      en: 'Technology and digital solutions company focused on social media solutions, digital brand protection, business automation and related services.',
      bn: 'সোশ্যাল মিডিয়া সলিউশন, ডিজিটাল ব্র্যান্ড সুরক্ষা, বিজনেস অটোমেশন ও সংশ্লিষ্ট সেবা নিয়ে কাজ করা একটি প্রযুক্তি ও ডিজিটাল সলিউশন প্রতিষ্ঠান।',
    },
    role: null,
    roleVerified: false,
    status: 'confirm',
  },
  {
    slug: 'kaktaruaa',
    name: 'Kaktaruaa',
    logo: null,
    url: 'https://kaktaruaa.org',
    description: {
      en: 'Cyber safety and digital awareness initiative working on online safety, harassment prevention, education and digital protection.',
      bn: 'অনলাইন নিরাপত্তা, হয়রানি প্রতিরোধ, শিক্ষা ও ডিজিটাল সুরক্ষা নিয়ে কাজ করা একটি সাইবার সেফটি ও ডিজিটাল সচেতনতা উদ্যোগ।',
    },
    role: null,
    roleVerified: false,
    status: 'confirm',
  },
  {
    slug: 'erazee',
    name: 'Erazee',
    logo: null,
    url: null,
    description: {
      en: 'Initiative focused on unwanted digital content removal, online risk response and victim support.',
      bn: 'অনাকাঙ্ক্ষিত ডিজিটাল কনটেন্ট অপসারণ, অনলাইন ঝুঁকিতে সাড়া দেওয়া ও ভুক্তভোগীদের সহায়তা নিয়ে কাজ করা একটি উদ্যোগ।',
    },
    role: null,
    roleVerified: false,
    status: 'developing',
  },
  {
    slug: 'zurvis',
    name: 'Zurvis.io',
    logo: null,
    url: null,
    description: {
      en: 'Business communication and automation software initiative.',
      bn: 'ব্যবসায়িক যোগাযোগ ও অটোমেশন সফটওয়্যার নিয়ে একটি উদ্যোগ।',
    },
    role: null,
    roleVerified: false,
    status: 'developing',
  },
]
