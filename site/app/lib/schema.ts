import { localizePath, tr, type Locale } from '~/i18n/locales'
import { person, SITE_URL } from '~/content/person'
import { recognition } from '~/content/recognition'
import { media } from '~/content/media'
import { ventures } from '~/content/ventures'

const PERSON_ID = `${SITE_URL}/#person`
const SITE_ID = `${SITE_URL}/#website`

/** Person schema — only verified, visible facts. Empty fields are omitted. */
export function personSchema(locale: Locale) {
  // Own accounts first, then third-party pages about him: sameAs is what search engines use to
  // decide that all of these describe one entity, and not someone else with the same name.
  const sameAs = [...person.socials.map((s) => s.url), ...person.referenceProfiles.map((r) => r.url)].filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: person.name.en,
    alternateName: person.alternateNames,
    ...(person.email ? { email: `mailto:${person.email}` } : {}),
    url: SITE_URL + '/',
    jobTitle: person.titleParts.map((p) => tr(p, locale)),
    description: tr(person.description, locale),
    disambiguatingDescription: tr(person.disambiguatingDescription, locale),
    ...(person.portrait ? { image: SITE_URL + person.portrait } : {}),
    nationality: { '@type': 'Country', name: 'Bangladesh' },
    birthPlace: { '@type': 'Place', name: person.birthPlace.en },
    workLocation: { '@type': 'Place', name: person.workLocation.en },
    alumniOf: { '@type': 'CollegeOrUniversity', name: person.alumniOf },
    knowsLanguage: ['bn', 'en'],
    ...(sameAs.length ? { sameAs } : {}),
    // Only awards actually received (never nominations)
    ...(() => {
      const award = recognition.filter((r) => r.type === 'award').map((r) => r.title.en)
      return award.length ? { award } : {}
    })(),
    knowsAbout: [
      'Social media solutions',
      'Brand protection solutions',
      'Business solutions for online businesses',
      'Facebook page and account recovery',
      'Brand impersonation and fake page takedown',
      'WhatsApp Business API automation',
      'Cyber safety training',
      'Social media security',
      'Digital brand protection',
      'Cyberbullying prevention',
      'Online harassment response',
      'Social commerce',
      'Cyber safety awareness',
      'Technology entrepreneurship',
      'Business automation',
    ],
    // Verified venture roles (Founder / Co-founder)
    ...(() => {
      const orgs = ventures.filter((v) => v.roleVerified).map((v) => ({ '@type': 'Organization', name: v.name, ...(v.url ? { url: v.url } : {}) }))
      return orgs.length ? { worksFor: orgs, founder: orgs } : {}
    })(),
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

export function organizationSchema(o: { name: string; url: string; description: string; founder?: boolean; foundingDate?: number; coFounders?: string[]; alsoKnownAs?: { name: string; url: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: o.name,
    url: o.url,
    description: o.description,
    ...(o.foundingDate ? { foundingDate: String(o.foundingDate) } : {}),
    ...(o.alsoKnownAs?.length ? { alternateName: o.alsoKnownAs.map((a) => a.name), sameAs: o.alsoKnownAs.map((a) => a.url) } : {}),
    ...(o.founder ? { founder: [{ '@id': PERSON_ID }, ...(o.coFounders ?? []).map((name) => ({ '@type': 'Person', name }))] } : {}),
  }
}
