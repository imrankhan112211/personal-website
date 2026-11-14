import { localizePath, tr, type Locale } from '~/i18n/locales'
import { person, SITE_URL } from '~/content/person'
import { recognition } from '~/content/recognition'
import { media } from '~/content/media'

const PERSON_ID = `${SITE_URL}/#person`
const SITE_ID = `${SITE_URL}/#website`

/** Person schema — only verified, visible facts. Empty fields are omitted. */
export function personSchema(locale: Locale) {
  const sameAs = person.socials.map((s) => s.url).filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: person.name.en,
    alternateName: person.name.bn,
    url: SITE_URL + '/',
    jobTitle: person.titleParts.map((p) => tr(p, locale)),
    description: tr(person.description, locale),
    ...(person.portrait ? { image: SITE_URL + person.portrait } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    // Only awards actually received (never nominations)
    ...(() => {
      const award = recognition.filter((r) => r.type === 'award').map((r) => r.title.en)
      return award.length ? { award } : {}
    })(),
    knowsAbout: [
      'Social media security',
      'Digital brand protection',
      'Online business safety',
      'Digital content protection',
      'Online reputation management',
      'Cyber safety awareness',
      'Technology entrepreneurship',
    ],
    // affiliation / founder: add once roles in content/ventures.ts are verified
  }
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL + '/',
    name: tr(person.name, locale),
    inLanguage: ['en', 'bn'],
    publisher: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
  }
}

export function breadcrumbSchema(locale: Locale, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE_URL + localizePath(it.path, locale),
    })),
  }
}

/** ProfilePage wrapper for the biography — helps search engines treat it as the canonical profile. */
export function profilePageSchema(locale: Locale, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE_URL + localizePath(path, locale),
    inLanguage: locale,
    mainEntity: {
      ...personSchema(locale),
      // Published coverage about this person, each pointing to the original source
      subjectOf: media.map((m) => ({
        '@type': m.category === 'video' ? 'VideoObject' : 'NewsArticle',
        ...(m.category === 'video' ? { name: m.headline, uploadDate: m.date } : { headline: m.headline, datePublished: m.date }),
        url: m.url,
        inLanguage: m.language,
        publisher: { '@type': 'Organization', name: m.outlet },
      })),
    },
  }
}

export function organizationSchema(o: { name: string; url: string; description: string }) {
  return { '@context': 'https://schema.org', '@type': 'Organization', name: o.name, url: o.url, description: o.description }
}
