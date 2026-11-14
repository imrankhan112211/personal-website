import { useLocation } from 'react-router'
import { localeFromPath, localizePath, tr, type Locale, type Localized } from './locales'
import { ui, type UiKey } from './ui'

export function useLocale() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  return {
    locale,
    /** UI string lookup */
    t: (key: UiKey) => ui[key][locale] ?? ui[key].en,
    /** Localized content lookup */
    l: (v: Localized) => tr(v, locale),
    /** Localize an internal href */
    href: (path: string) => localizePath(path, locale),
  }
}
