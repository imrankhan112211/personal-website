import type { UiKey } from '~/i18n/ui'

type NavItem = { key: UiKey; href: string }

/** Primary header links (desktop). */
export const primaryNav: NavItem[] = [
  { key: 'nav.about', href: '/about/' },
  { key: 'nav.consulting', href: '/consulting/' },
  { key: 'nav.training', href: '/training/' },
  { key: 'nav.ventures', href: '/ventures/' },
  { key: 'nav.resources', href: '/courses/' },
  { key: 'nav.insights', href: '/blog/' },
]

/** Under "More" on desktop; listed in full on mobile. */
export const moreNav: NavItem[] = [
  { key: 'nav.biography', href: '/about/biography/' },
  { key: 'nav.impact', href: '/impact/' },
  { key: 'nav.recognition', href: '/recognition/' },
  { key: 'nav.media', href: '/media/' },
  { key: 'nav.contact', href: '/contact/' },
]

export const ctaLinks = {
  consulting: '/contact/?type=consulting',
  training: '/contact/?type=training',
  contact: '/contact/',
}
