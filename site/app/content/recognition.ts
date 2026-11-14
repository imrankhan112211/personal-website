import type { Localized } from '~/i18n/locales'

/** Never label a nomination as an award. `type` drives the visible label. */
export type RecognitionType = 'award' | 'nomination' | 'speaking' | 'training' | 'participation'

export type Recognition = {
  id: string
  type: RecognitionType
  title: Localized
  organization: Localized
  /** ISO date or year. null = [INSERT VERIFIED DATE] */
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
    id: 'diana-award-nomination',
    type: 'nomination',
    title: { en: 'Diana Award — Nomination', bn: 'ডায়ানা অ্যাওয়ার্ড — মনোনয়ন' },
    organization: { en: 'The Diana Award', bn: 'দ্য ডায়ানা অ্যাওয়ার্ড' },
    date: null,
    description: null, // [INSERT VERIFIED NOMINATION DETAILS]
    image: null,
    sourceUrl: null,
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
    date: null,
    description: null, // [CONFIRM SCOPE, TOPIC AND AUDIENCE OF THE CID TRAINING]
    image: null, // [INSERT APPROVED CID TRAINING PHOTOGRAPH]
    sourceUrl: null,
    featured: true,
  },
]
