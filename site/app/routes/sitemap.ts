import { articleCategories, articles } from '~/content/articles'
import { SITE_URL } from '~/content/person'
import { localizePath } from '~/i18n/locales'
import { gitLastmod } from '~/lib/lastmod.server'
import { pages, type PageId } from '~/pages'

/**
 * /sitemap.xml — generated at build time from the same page list as the router.
 * Every URL lists its English and Bengali alternates. Left out: noindex pages (legal, sample article)
 * and blog categories with no published articles yet (thin pages; they're noindex until they have posts).
 * <lastmod> comes from the article dates, or for static pages from the last git commit to their source files.
 */

/** Content files each static page is built from, besides its route file (site-relative). */
const pageSources: Partial<Record<PageId, string[]>> = {
  home: ['app/content/home.ts', 'app/content/homeStory.ts', 'app/content/reviews.ts', 'app/content/testimonials.ts', 'app/components/sections/home'],
  about: ['app/content/about.ts'],
  biography: ['app/content/about.ts', 'app/content/person.ts'],
  consulting: ['app/content/consulting.ts'],
  training: ['app/content/training.ts'],
  ventures: ['app/content/ventures.ts', 'app/content/projects.ts'],
  impact: ['app/content/impact.ts'],
  recognition: ['app/content/recognition.ts'],
  media: ['app/content/media.ts', 'app/content/mediaImages.json'],
  resources: ['app/content/products.ts'],
  contact: ['app/content/inquiry.ts'],
}

const latest = (dates: (string | undefined)[]) => dates.filter(Boolean).sort().at(-1)
const articleDate = (a: (typeof articles)[number]) => a.updated ?? a.published

export function loader() {
  const exclude = new Set(['/privacy/', '/terms/'])
  const newestArticle = latest(articles.map(articleDate))

  const entries: { path: string; lastmod?: string; priority: string }[] = [
    ...pages.filter((p) => !exclude.has(p.path)).map((p) => ({
      path: p.path,
      lastmod: p.id === 'insights' ? latest([newestArticle, gitLastmod([`app/${p.file}`])]) : gitLastmod([`app/${p.file}`, ...(pageSources[p.id] ?? [])]),
      priority: p.path === '/' ? '1.0' : ['/about/biography/', '/consulting/', '/training/'].includes(p.path) ? '0.9' : '0.7',
    })),
    ...articleCategories
      .map((c) => ({ c, posts: articles.filter((a) => a.category === c.slug) }))
      .filter(({ posts }) => posts.length > 0)
      .map(({ c, posts }) => ({ path: `/blog/category/${c.slug}/`, lastmod: latest(posts.map(articleDate)), priority: '0.5' })),
    ...articles.map((a) => ({ path: `/blog/${a.slug}/`, lastmod: articleDate(a), priority: '0.8' })),
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
