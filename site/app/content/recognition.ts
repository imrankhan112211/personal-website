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
    image: null,
    sourceUrl: 'https://diana-award.org.uk/our-programmes-and-initiatives/award-and-development/roll-of-honour/roll-of-honour-2026',
    featured: true,
  },
  {
    id: 'tedx-drmc-youth',
    type: 'speaking',
    title: { en: 'Speaker, TEDx DRMC Youth', bn: 'বক্তা, TEDx DRMC Youth' },
    organization: { en: 'TEDx DRMC Youth', bn: 'TEDx DRMC Youth' },
    date: null,
    description: null, // [INSERT TALK TITLE AND VERIFIED DESCRIPTION]
    image: null, // [INSERT APPROVED TEDx PHOTOGRAPH]
    sourceUrl: null,
    featured: true,
  },
  {
    id: 'cid-police-training',
    type: 'training',
    title: { en: 'Training session with CID Police', bn: 'সিআইডি পুলিশের সঙ্গে প্রশিক্ষণ সেশন' },
    organization: { en: 'CID, Bangladesh Police', bn: 'সিআইডি, বাংলাদেশ পুলিশ' },
    date: '2023', // exact date not recorded
    description: null, // [CONFIRM SCOPE, TOPIC AND AUDIENCE OF THE CID TRAINING]
    image: null, // [INSERT APPROVED CID TRAINING PHOTOGRAPH]
    sourceUrl: null,
    featured: true,
  },
]
