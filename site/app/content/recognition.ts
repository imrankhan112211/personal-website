import type { Localized } from '~/i18n/locales'

/** Never label a nomination as an award. `type` drives the visible label. */
export type RecognitionType = 'award' | 'nomination' | 'speaking' | 'training' | 'participation'

export type Recognition = {
  id: string
  type: RecognitionType
  title: Localized
  organization: Localized
  /** ISO date (YYYY-MM-DD), month (YYYY-MM) or year (YYYY). null = [INSERT VERIFIED DATE] */
  date: string | null
  description: Localized | null
  /** Photo or certificate path. null = placeholder */
  image: string | null
  /** Optional short self-hosted video clip */
  video?: string
  sourceUrl: string | null
  /** Show on the homepage */
  featured: boolean
}

export const recognition: Recognition[] = [
  {
    id: 'diana-award-2026',
    type: 'award', // Confirmed recipient
    title: { en: 'The Diana Award 2026', bn: 'দ্য ডায়ানা অ্যাওয়ার্ড ২০২৬' },
    organization: { en: 'The Diana Award', bn: 'দ্য ডায়ানা অ্যাওয়ার্ড' },
    date: '2026-11-04',
    description: {
      en: 'Recipient of The Diana Award, named in its Roll of Honour 2026, announced on 4 November 2026.',
      bn: 'দ্য ডায়ানা অ্যাওয়ার্ড প্রাপ্ত; ২০২৬ সালের ৪ নভেম্বর ঘোষিত রোল অব অনার ২০২৬-এ নাম অন্তর্ভুক্ত।',
    },
    image: '/images/diana-award-2026-1200.webp',
    sourceUrl: 'https://diana-award.org.uk/our-programmes-and-initiatives/award-and-development/roll-of-honour/roll-of-honour-2026',
    featured: true,
  },
  {
    id: 'tedx-drmc-youth',
    type: 'speaking',
    title: { en: 'Speaker, TEDx DRMC Youth', bn: 'বক্তা, TEDx DRMC Youth' },
    organization: { en: 'TEDx DRMC Youth', bn: 'TEDx DRMC Youth' },
    date: '2025-11-01',
    description: {
      en: 'Invited speaker at TEDx DRMC Youth, themed “The Human Algorithm”, held at the DRMC Auditorium on 1 November 2025.',
      bn: '১ নভেম্বর ২০২৫ ডিআরএমসি অডিটোরিয়ামে অনুষ্ঠিত “The Human Algorithm” প্রতিপাদ্যের TEDx DRMC Youth-এ আমন্ত্রিত বক্তা।',
    },
    image: '/images/tedx-drmc-youth-2025-1600.webp',
    sourceUrl: null,
    featured: true,
  },
  {
    id: 'cid-police-training',
    type: 'training',
    title: { en: 'Training session with CID Police', bn: 'সিআইডি পুলিশের সঙ্গে প্রশিক্ষণ সেশন' },
    organization: { en: 'CID, Bangladesh Police', bn: 'সিআইডি, বাংলাদেশ পুলিশ' },
    date: '2023', // exact date not recorded
    description: {
      en: 'Trained 45 CID officers on social media security — how to fix common account problems, account recovery and related issues.',
      bn: 'সোশ্যাল মিডিয়া নিরাপত্তা বিষয়ে সিআইডির ৪৫ জন কর্মকর্তাকে প্রশিক্ষণ — অ্যাকাউন্টের সাধারণ সমস্যার সমাধান, অ্যাকাউন্ট রিকভারি ও সংশ্লিষ্ট বিষয়।',
    },
    image: '/images/cid-training-2023-1600.webp',
    sourceUrl: null,
    featured: false, // kept on the Recognition and Training pages, not highlighted on the homepage
  },
]
