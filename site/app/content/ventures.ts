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
  /** Year founded (confirmed by the owner). */
  founded?: number
  /** Other co-founders, by full name. */
  coFounders?: string[]
  /** Key activities. Empty = [INSERT KEY ACTIVITIES] */
  activities?: Localized[]
}

// To add a venture: append an object below. Order = display order.
export const ventures: Venture[] = [
  {
    slug: 'probfly-it',
    founded: 2021,
    coFounders: ['Azimul Islam Sheblu'],
    name: 'Probfly IT',
    logo: '/logos/probfly-it.webp',
    url: 'https://probfly.com',
    description: {
      en: 'Technology company providing social media solutions, digital brand protection, software and business automation, with an office in Dhaka and a US-registered LLC.',
      bn: 'সোশ্যাল মিডিয়া সলিউশন, ডিজিটাল ব্র্যান্ড সুরক্ষা, সফটওয়্যার ও বিজনেস অটোমেশন সেবা দেওয়া প্রযুক্তি প্রতিষ্ঠান; অফিস ঢাকায়, আর যুক্তরাষ্ট্রে নিবন্ধিত একটি LLC রয়েছে।',
    },
    role: { en: 'Founder', bn: 'প্রতিষ্ঠাতা' },
    roleVerified: true,
    status: 'active',
  },
  {
    slug: 'kaktaruaa',
    founded: 2023,
    name: 'Kaktaruaa',
    logo: '/logos/kaktaruaa.webp',
    url: 'https://kaktaruaa.org',
    description: {
      en: 'Non-profit digital safety initiative working to prevent cyberbullying and online harassment and to support people facing blackmail, fraud and account hacking.',
      bn: 'সাইবার বুলিং ও অনলাইন হয়রানি প্রতিরোধ এবং ব্ল্যাকমেইল, প্রতারণা ও অ্যাকাউন্ট হ্যাকিংয়ের শিকার মানুষকে সহায়তায় কাজ করা অলাভজনক ডিজিটাল নিরাপত্তা উদ্যোগ।',
    },
    role: { en: 'Founder', bn: 'প্রতিষ্ঠাতা' },
    roleVerified: true,
    status: 'active',
  },
  {
    slug: 'erazee',
    founded: 2025,
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
    founded: 2026,
    coFounders: ['Azimul Islam Sheblu'],
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
