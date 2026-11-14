import type { Localized } from '~/i18n/locales'

/** Case studies. Publish only with client permission. [INSERT APPROVED CASE STUDY] */
export type CaseStudy = {
  slug: string
  area: 'public-figures' | 'businesses' | 'community'
  title: Localized
  overview: Localized
  clientContext: Localized
  problem: Localized
  contribution: Localized
  solution: Localized
  outcome: Localized
  testimonialId?: string
  sources: { label: string; url: string }[]
  permission: 'granted' | 'pending'
}
export const caseStudies: CaseStudy[] = []
