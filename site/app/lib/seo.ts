import type { MetaDescriptor } from 'react-router'
import { localeMeta, localizePath, tr, type Locale, type Localized } from '~/i18n/locales'
import { person, SITE_URL } from '~/content/person'

type MetaInput = {
  locale: Locale
  /** Base (English) path with trailing slash, e.g. "/about/" */
  path: string
  title: Localized
  description: Localized
  image?: string
  type?: 'website' | 'profile' | 'article'
  jsonLd?: object[]
  noindex?: boolean
}

/** Title, description, canonical, hreflang, Open Graph, Twitter and JSON-LD for one page. */
export function buildMeta({ locale, path, title, description, image, type = 'website', jsonLd = [], noindex }: MetaInput): MetaDescriptor[] {
  const name = tr(person.name, locale)
  const pageTitle = tr(title, locale)
  const fullTitle = path === '/' ? pageTitle : `${pageTitle} — ${name}`
  const desc = tr(description, locale)
  const url = SITE_URL + localizePath(path, locale)
  const img = image ? SITE_URL + image : `${SITE_URL}/og-default.png`

  return [
    { title: fullTitle },
    { name: 'description', content: desc },
    ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
    { tagName: 'link', rel: 'canonical', href: url },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: SITE_URL + localizePath(path, 'en') },
    { tagName: 'link', rel: 'alternate', hrefLang: 'bn', href: SITE_URL + localizePath(path, 'bn') },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: SITE_URL + localizePath(path, 'en') },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: name },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: desc },
    { property: 'og:url', content: url },
    { property: 'og:image', content: img },
    ...(image ? [] : [{ property: 'og:image:width', content: '1200' }, { property: 'og:image:height', content: '630' }]),
    { property: 'og:image:alt', content: `${name} — ${pageTitle}` },
    { property: 'og:locale', content: localeMeta[locale].ogLocale },
    { property: 'og:locale:alternate', content: localeMeta[locale === 'en' ? 'bn' : 'en'].ogLocale },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: desc },
    { name: 'twitter:image', content: img },
    { name: 'twitter:image:alt', content: `${name} — ${pageTitle}` },
    ...jsonLd.map((data) => ({ 'script:ld+json': data })),
  ]
}
