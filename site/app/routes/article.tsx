import { AlertTriangle, ArrowLeft, Check, Link2 } from 'lucide-react'
import { useState } from 'react'
import { data } from 'react-router'
import type { Route } from './+types/article'
import { ArticleCard, useDate } from '~/components/cards/ArticleCard'
import { Breadcrumbs } from '~/components/layout/Breadcrumbs'
import { AuthorBox } from '~/components/sections/shared/AuthorBox'
import { Badge } from '~/components/ui/Badge'
import { ButtonLink } from '~/components/ui/Button'
import { ImageSlot } from '~/components/ui/Placeholder'
import { LocalLink } from '~/components/ui/LocalLink'
import { allArticles, articleCategories, listedArticles, type Article, type Block } from '~/content/articles'
import { person, SITE_URL } from '~/content/person'
import { isFallback, localeFromPath, localizePath, tr, type Locale } from '~/i18n/locales'
import { ui } from '~/i18n/ui'
import { useLocale } from '~/i18n/useLocale'
import { breadcrumbSchema } from '~/lib/schema'
import { buildMeta } from '~/lib/seo'

export function loader({ params }: Route.LoaderArgs) {
  if (!allArticles.some((a) => a.slug === params.slug)) throw data(null, { status: 404 })
  return { slug: params.slug }
}

function articleSchema(a: Article, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: tr(a.title, locale),
    description: tr(a.excerpt, locale),
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    inLanguage: isFallback(a.title, locale) ? 'en' : locale,
    author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: person.name.en, url: `${SITE_URL}/about/biography/` },
    publisher: { '@id': `${SITE_URL}/#person` },
    mainEntityOfPage: SITE_URL + localizePath(`/insights/${a.slug}/`, locale),
    ...(a.cover ? { image: SITE_URL + a.cover } : {}),
    articleSection: articleCategories.find((c) => c.slug === a.category)!.name.en,
  }
}

export function meta({ location, params }: Route.MetaArgs) {
  const locale = localeFromPath(location.pathname)
  const a = allArticles.find((x) => x.slug === params.slug)
  if (!a) return [{ title: 'Not found' }]
  const path = `/insights/${a.slug}/`
  return buildMeta({
    locale,
    path,
    title: a.title,
    description: a.excerpt,
    image: a.cover ?? undefined,
    type: 'article',
    noindex: a.sample,
    jsonLd: a.sample
      ? []
      : [articleSchema(a, locale), breadcrumbSchema(locale, [{ name: ui['nav.home'][locale], path: '/' }, { name: ui['nav.insights'][locale], path: '/insights/' }, { name: tr(a.title, locale), path }])],
  })
}

export default function ArticlePage({ loaderData }: Route.ComponentProps) {
  const { t, l, locale } = useLocale()
  const fmt = useDate()
  const a = allArticles.find((x) => x.slug === loaderData.slug)!
  const cat = articleCategories.find((c) => c.slug === a.category)!
  const toc = a.body.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2')
  const fallback = isFallback(a.title, locale)
  const related = listedArticles.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3)
  const url = SITE_URL + localizePath(`/insights/${a.slug}/`, locale)

  return (
    <main id="main">
      <article lang={fallback ? 'en' : undefined}>
        <header className="border-b border-line">
          <div className="container-x pb-12 pt-8 md:pb-16">
            <Breadcrumbs items={[{ label: t('nav.insights'), to: '/insights/' }, { label: l(cat.name), to: `/insights/category/${cat.slug}/` }]} />
            {a.sample && (
              <p className="mt-8 flex gap-3 rounded-2xl border border-amber/40 bg-amber-soft p-4 text-sm text-text">
                <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-amber" />
                <span><Badge tone="amber" className="mr-2">{t('ins.sample')}</Badge>{l(a.excerpt)}</span>
              </p>
            )}
            {fallback && <p className="mt-6 rounded-xl bg-mist px-4 py-3 text-sm text-text" lang="bn">{t('ins.translation')}</p>}
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <LocalLink to={`/insights/category/${cat.slug}/`} className="text-sm font-semibold uppercase tracking-wider text-accent hover:underline">{l(cat.name)}</LocalLink>
              <h1 className="t-h1 mt-4 text-ink">{l(a.title)}</h1>
              <p className="t-lead mt-5 text-muted">{l(a.excerpt)}</p>
              <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted">
                <span>{t('ins.by')} <LocalLink to="/about/biography/" rel="author" className="font-medium text-ink hover:text-accent">{l(person.name)}</LocalLink></span>
                <span aria-hidden>·</span>
                <span>{t('ins.published')} <time dateTime={a.published}>{fmt(a.published)}</time></span>
                {a.updated && <><span aria-hidden>·</span><span>{t('ins.updated')} <time dateTime={a.updated}>{fmt(a.updated)}</time></span></>}
                <span aria-hidden>·</span>
                <span>{a.readingMinutes} {t('ins.min')}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="container-x py-12 md:py-16">
          {a.cover ? <img src={a.cover} alt="" className="mx-auto aspect-[16/8] w-full max-w-5xl rounded-[24px] object-cover" /> : <ImageSlot label="[INSERT COVER IMAGE · 16:8]" className="mx-auto aspect-[16/8] max-w-5xl rounded-[24px]" />}

          <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-[14rem_1fr]">
            <aside className="lg:order-none">
              <div className="lg:sticky lg:top-28">
                {toc.length > 0 && (
                  <nav aria-labelledby="toc-title">
                    <h2 id="toc-title" className="t-eyebrow text-muted">{t('ins.toc')}</h2>
                    <ol className="mt-4 grid gap-1 border-l border-line">
                      {toc.map((h) => <li key={h.id}><a href={`#${h.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-accent hover:text-ink">{l(h.text)}</a></li>)}
                    </ol>
                  </nav>
                )}
                <Share url={url} title={l(a.title)} />
              </div>
            </aside>

            <div className="max-w-[68ch] text-[1.0625rem] leading-[1.85] text-text md:text-lg">
              {a.body.map((b, i) => <BlockView key={i} b={b} />)}
              {a.sources && a.sources.length > 0 && (
                <section aria-labelledby="sources-title" className="mt-14 border-t border-line pt-8">
                  <h2 id="sources-title" className="t-h3 text-ink">{t('ins.sources')}</h2>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-base">
                    {a.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">{s.label}</a></li>)}
                  </ol>
                </section>
              )}
              <AuthorBox className="mt-14" />
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section-y border-t border-line bg-mist">
          <div className="container-x">
            <h2 id="related-title" className="t-h2 text-ink">{t('ins.related')}</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">{related.map((r) => <li key={r.slug}><ArticleCard a={r} /></li>)}</ul>
          </div>
        </section>
      )}

      <div className="container-x pb-20 pt-4">
        <ButtonLink to="/insights/" variant="outline"><ArrowLeft aria-hidden /> {t('ins.back')}</ButtonLink>
      </div>
    </main>
  )
}

function BlockView({ b }: { b: Block }) {
  const { l } = useLocale()
  switch (b.type) {
    case 'h2':
      return <h2 id={b.id} className="t-h3 mb-4 mt-12 scroll-mt-28 text-ink md:text-[1.75rem]">{l(b.text)}</h2>
    case 'p':
      return <p className="mb-6">{l(b.text)}</p>
    case 'ul':
      return <ul className="mb-6 grid gap-2 pl-1">{b.items.map((it, i) => <li key={i} className="flex gap-3"><span aria-hidden className="mt-[0.85em] h-px w-4 shrink-0 bg-accent" />{l(it)}</li>)}</ul>
    case 'quote':
      return <blockquote className="t-serif my-10 border-l-2 border-accent pl-6 text-[1.6rem] leading-snug text-ink">{l(b.text)}</blockquote>
    case 'note':
      return <p className="mb-8 rounded-2xl bg-accent-soft p-5 text-base text-accent-strong">{l(b.text)}</p>
  }
}

function Share({ url, title }: { url: string; title: string }) {
  const { t } = useLocale()
  const [copied, setCopied] = useState(false)
  const u = encodeURIComponent(url)
  const links = [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: 'X', href: `https://x.com/intent/post?url=${u}&text=${encodeURIComponent(title)}` },
  ]
  return (
    <div className="mt-10">
      <h2 className="t-eyebrow text-muted">{t('ins.share')}</h2>
      <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
        {links.map((s) => (
          <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm text-ink hover:border-ink">{s.label}</a></li>
        ))}
        <li>
          <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* ignore */ } }} className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-line px-4 text-sm text-ink hover:border-ink">
            {copied ? <Check aria-hidden className="size-4 text-success" /> : <Link2 aria-hidden className="size-4" />}
            <span aria-live="polite">{copied ? t('ins.copied') : t('ins.copy')}</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
