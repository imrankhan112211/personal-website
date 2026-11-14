export const locales = ['en', 'bn'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

/** Localized string. `bn` is optional — missing translations fall back to English. */
export type Localized = { en: string; bn?: string }

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string; ogLocale: string; prefix: string }> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US', prefix: '' },
  bn: { label: 'বাংলা', short: 'বাং', htmlLang: 'bn', ogLocale: 'bn_BD', prefix: '/bn' },
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/bn' || pathname.startsWith('/bn/') ? 'bn' : 'en'
}

/** Strip the locale prefix: "/bn/about/" -> "/about/" */
export function basePath(pathname: string): string {
  const p = localeFromPath(pathname) === 'bn' ? pathname.slice(3) || '/' : pathname
  return withTrailingSlash(p)
}

export function withTrailingSlash(p: string): string {
  const [path, rest = ''] = p.split(/(?=[?#])/)
  return (path.endsWith('/') ? path : `${path}/`) + rest
}

/** "/about/" + "bn" -> "/bn/about/". Leaves external links, anchors and mailto untouched. */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/')) return path
  const clean = withTrailingSlash(path)
  return locale === 'en' ? clean : `/bn${clean === '/' ? '/' : clean}`
}

/** Same page in the other language (all pages exist in both). */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(basePath(pathname), target)
}

/** Resolve a Localized value. Returns the text plus whether it fell back to English. */
export function tr(value: Localized, locale: Locale): string {
  return (locale === 'bn' ? value.bn : undefined) ?? value.en
}
export function isFallback(value: Localized, locale: Locale): boolean {
  return locale === 'bn' && !value.bn
}
