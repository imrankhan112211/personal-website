import type { Localized } from '~/i18n/locales'

export type MediaItem = {
  id: string
  outlet: string
  headline: Localized
  /** ISO date */
  date: string
  thumbnail: string | null
  description: Localized
  /** Original article URL — required. */
  url: string
  category: 'news' | 'interview' | 'feature' | 'video' | 'podcast'
  language: 'en' | 'bn'
}

/** Add only real, published coverage with its original URL. [INSERT VERIFIED MEDIA ARTICLE URL] */
export const media: MediaItem[] = []
