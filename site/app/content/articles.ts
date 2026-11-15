/**
 * Blog articles are Markdown files in `site/articles/`:
 *   my-article.md      → English version   → /blog/my-article/
 *   my-article.bn.md   → Bengali version   → /bn/blog/my-article/
 * Either file alone is fine. Files starting with "_" or marked `draft: true` are only visible in `npm run dev`.
 * See docs/WRITING_ARTICLES.md for the format.
 */
import { Marked } from 'marked'
import { parse as parseYaml } from 'yaml'
import type { Localized } from '~/i18n/locales'
import { articleCategories, type ArticleCategory } from './categories'

export { articleCategories, type ArticleCategory }

export type TocItem = { id: string; text: string }
export type LocaleContent = {
  title: string
  excerpt: string
  html: string
  toc: TocItem[]
  takeaways: string[]
  faq: { q: string; a: string }[]
  readingMinutes: number
}

export type Article = {
  slug: string
  title: Localized
  excerpt: Localized
  cover: string | null
  category: ArticleCategory
  /** ISO date */
  published: string
  updated?: string
  readingMinutes: number
  /** Per-language body (from Markdown). */
  content: { en?: LocaleContent; bn?: LocaleContent }
  sources?: { label: string; url: string }[]
  /** Example/template article: noindex, never listed, excluded from sitemap and schema. */
  sample?: boolean
  draft?: boolean
}

const DEV = Boolean(import.meta.env?.DEV)
const files = import.meta.glob('../../articles/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const slugify = (t: string) =>
  t.toLowerCase().normalize('NFC').replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{M}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'section'

function renderMarkdown(md: string) {
  const toc: TocItem[] = []
  const used = new Map<string, number>()
  const marked = new Marked({ gfm: true })
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens)
        const plain = text.replace(/<[^>]+>/g, '')
        let id = slugify(plain)
        const n = used.get(id) ?? 0
        used.set(id, n + 1)
        if (n) id = `${id}-${n}`
        if (depth === 2) toc.push({ id, text: plain })
        return `<h${depth} id="${id}">${text}</h${depth}>\n`
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const ext = /^https?:\/\//.test(href) && !href.includes('abdullahalimran.com')
        return `<a href="${href}"${title ? ` title="${title}"` : ''}${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`
      },
    },
  })
  const html = marked.parse(md, { async: false }) as string
  return { html, toc }
}

function parseFile(raw: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta = (m ? parseYaml(m[1]) : {}) as Record<string, any>
  const body = (m ? m[2] : raw).trim()
  const { html, toc } = renderMarkdown(body)
  const words = body.replace(/[#>*_`\-[\]()]/g, ' ').split(/\s+/).filter(Boolean).length
  const content: LocaleContent = {
    title: String(meta.title ?? 'Untitled'),
    excerpt: String(meta.description ?? meta.excerpt ?? ''),
    html,
    toc,
    takeaways: Array.isArray(meta.takeaways) ? meta.takeaways.map(String) : [],
    faq: Array.isArray(meta.faq) ? meta.faq.map((f: any) => ({ q: String(f.q ?? f.question ?? ''), a: String(f.a ?? f.answer ?? '') })).filter((f: any) => f.q && f.a) : [],
    readingMinutes: Math.max(1, Math.round(words / 200)),
  }
  return { meta, content }
}

const toISO = (d: unknown) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d).slice(0, 10) : '')

function load(): Article[] {
  const bySlug = new Map<string, { en?: ReturnType<typeof parseFile>; bn?: ReturnType<typeof parseFile>; underscore: boolean }>()
  for (const [path, raw] of Object.entries(files)) {
    const name = path.split('/').pop()!.replace(/\.md$/, '')
    let parsed: ReturnType<typeof parseFile>
    try {
      parsed = parseFile(raw)
    } catch (err) {
      // A formatting mistake in one article must not break the whole site.
      console.error(`\n[articles] Skipped "${name}.md" — check the lines between the --- markers:\n  ${(err as Error).message.split('\n')[0]}\n`)
      continue
    }
    const isBn = name.endsWith('.bn')
    const base = isBn ? name.slice(0, -3) : name
    const slug = base.replace(/^_+/, '')
    const entry = bySlug.get(slug) ?? { underscore: base.startsWith('_') }
    entry[isBn ? 'bn' : 'en'] = parsed
    bySlug.set(slug, entry)
  }
  const out: Article[] = []
  for (const [slug, e] of bySlug) {
    const primary = (e.en ?? e.bn)!
    const meta = { ...(e.bn?.meta ?? {}), ...(e.en?.meta ?? {}) }
    const category = articleCategories.some((c) => c.slug === meta.category) ? (meta.category as ArticleCategory) : 'technology-innovation'
    out.push({
      slug,
      title: { en: (e.en ?? primary).content.title, bn: e.bn?.content.title },
      excerpt: { en: (e.en ?? primary).content.excerpt, bn: e.bn?.content.excerpt },
      cover: meta.cover ? String(meta.cover) : null,
      category,
      published: toISO(meta.date ?? meta.published) || '2026-01-01',
      updated: toISO(meta.updated) || undefined,
      readingMinutes: primary.content.readingMinutes,
      content: { en: e.en?.content, bn: e.bn?.content },
      sources: Array.isArray(meta.sources)
        ? meta.sources.map((s: any) => (typeof s === 'string' ? { label: s, url: s } : { label: String(s.label ?? s.url), url: String(s.url) })).filter((s: any) => s.url)
        : [],
      sample: Boolean(meta.sample),
      draft: Boolean(meta.draft) || e.underscore,
    })
  }
  return out.sort((a, b) => b.published.localeCompare(a.published))
}

const all = load()

/** Real, published articles (drafts and samples excluded). */
export const articles: Article[] = all.filter((a) => !a.draft && !a.sample)
/** What listings show. In `npm run dev`, drafts are listed too so you can preview them. */
export const listedArticles: Article[] = DEV ? all.filter((a) => !a.sample || articles.length === 0) : articles
/** Every article page that gets built (the sample stays reachable but unlisted and noindex). */
export const allArticles: Article[] = DEV ? all : all.filter((a) => !a.draft)
