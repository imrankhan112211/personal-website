import { basePath, localeFromPath } from '~/i18n/locales'
import { pageMeta } from '~/content/pageMeta'
import { pages, type PageId } from '~/pages'
import { buildMeta } from './seo'
import { breadcrumbSchema } from './schema'
import { tr } from '~/i18n/locales'
import { ui } from '~/i18n/ui'

/** Standard meta for a page from its pathname. */
export function metaFor(id: PageId, pathname: string, extraJsonLd: object[] = []) {
  const locale = localeFromPath(pathname)
  const page = pages.find((p) => p.id === id)!
  const m = pageMeta[id]
  const crumbs =
    id === 'home'
      ? []
      : [
          breadcrumbSchema(locale, [
            { name: ui['nav.home'][locale], path: '/' },
            ...(id === 'biography' ? [{ name: ui['nav.about'][locale], path: '/about/' }] : []),
            { name: tr(m.title, locale), path: page.path },
          ]),
        ]
  return buildMeta({ locale, path: basePath(pathname), title: m.title, description: m.description, jsonLd: [...crumbs, ...extraJsonLd] })
}
