import { allArticles, articleCategories } from '~/content/articles'
import { SITE_URL } from '~/content/person'
import { localizePath } from '~/i18n/locales'
import { pages } from '~/pages'

/**
 * /sitemap.xml — generated at build time from the same page list as the router.
 * Every URL lists its English and Bengali alternates. Noindex pages (sample article, legal) are excluded.
 */
export function loader() {
  const exclude = new Set(['/privacy/', '/terms/'])
  const entries: { path: string; lastmod?: string; priority: string }[] = [
    ...pages.filter((p) => !exclude.has(p.path)).map((p) => ({
      path: p.path,
      priority: p.path === '/' ? '1.0' : ['/about/biography/', '/consulting/', '/training/'].includes(p.path) ? '0.9' : '0.7',
    })),
    ...articleCategories.map((c) => ({ path: `/blog/category/${c.slug}/`, priority: '0.5' })),
    ...allArticles.filter((a) => !a.sample).map((a) => ({ path: `/blog/${a.slug}/`, lastmod: a.updated ?? a.published, priority: '0.6' })),
  ]

  const alt = (path: string) =>
    ['en', 'bn'].map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localizePath(path, l as 'en' | 'bn')}"/>`).join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${path}"/>`

  const urls = entries.flatMap((e) =>
    (['en', 'bn'] as const).map(
      (l) => `  <url>
    <loc>${SITE_URL}${localizePath(e.path, l)}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
    <priority>${e.priority}</priority>
${alt(e.path)}
  </url>`,
    ),
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
