import type { Localized } from '~/i18n/locales'

/** Never fabricate. Publish only with `permission: 'granted'`. [INSERT CLIENT TESTIMONIAL WITH PERMISSION] */
export type Testimonial = {
  id: string
  name: string
  role: Localized
  quote: Localized
  image: string | null
  sourceUrl: string | null
  permission: 'granted' | 'pending'
}
export const testimonials: Testimonial[] = []
