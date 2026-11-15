import { AlertTriangle, ArrowLeft, ArrowRight, Check, Link2, Plus } from 'lucide-react'
import { useState } from 'react'
import { data } from 'react-router'
import type { Route } from './+types/article'
import { ArticleCard, useDate } from '~/components/cards/ArticleCard'
import { Breadcrumbs } from '~/components/layout/Breadcrumbs'
import { AuthorBox } from '~/components/sections/shared/AuthorBox'
import { Badge } from '~/components/ui/Badge'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { allArticles, articleCategories, listedArticles, type Article, type LocaleContent } from '~/content/articles'
import { ctaLinks } from '~/content/navigation'
import { person, SITE_URL } from '~/content/person'
import { localeFromPath, localizePath, tr, type Locale } from '~/i18n/locales'
import { ui } from '~/i18n/ui'
import { useLocale } from '~/i18n/useLocale'
import { breadcrumbSchema } from '~/lib/schema'
import { buildMeta } from '~/lib/seo'

export function loader({ params }: Route.LoaderArgs) {
  if (!allArticles.some((a) => a.slug === params.slug)) throw data(null, { status: 404 })
  return { slug: params.slug }
}

/** Content for the requested language, falling back to the other one. */
function pick(a: Article, locale: Locale): { c: LocaleContent; lang: Locale; fallback: boolean } {
  const own = a.content[locale]
  if (own) return { c: own, lang: locale, fallback: false }
  const other: Locale = locale === 'en' ? 'bn' : 'en'
  return { c: a.content[other]!, lang: other, fallback: true }
}

function articleSchema(a: Article, locale: Locale) {
  const { c, lang } = pick(a, locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.excerpt,
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    inLanguage: lang,
    author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: person.name.en, url: `${SITE_URL}/about/biography/` },
    publisher: { '@id': `${SITE_URL}/#person` },
    mainEntityOfPage: SITE_URL + localizePath(`/blog/${a.slug}/`, locale),
    ...(a.cover ? { image: SITE_URL + a.cover } : {}),
    articleSection: articleCategories.find((x) => x.slug === a.category)!.name.en,
  }
}

function faqSchema(c: LocaleContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}

export function meta({ location, params }: Route.MetaArgs) {
  const locale = localeFromPath(location.pathname)
  const a = allArticles.find((x) => x.slug === params.slug)
  if (!a) return [{ title: 'Not found' }]
  const path = `/blog/${a.slug}/`
  const { c } = pick(a, locale)
  return buildMeta({
    locale,
    path,
    title: a.title,
    description: a.excerpt,
    image: a.cover ?? undefined,
    type: 'article',
    noindex: a.sample || a.draft,
    jsonLd: a.sample || a.draft
      ? []
      : [
          articleSchema(a, locale),
          ...(c.faq.length ? [faqSchema(c)] : []),
          breadcrumbSchema(locale, [{ name: ui['nav.home'][locale], path: '/' }, { name: ui['nav.insights'][locale], path: '/blog/' }, { name: tr(a.title, locale), path }]),
        ],
  })
}

export default function ArticlePage({ loaderData }: Route.ComponentProps) {
  const { t, l, locale } = useLocale()
  const fmt = useDate()
  const a = allArticles.find((x) => x.slug === loaderData.slug)!
  const cat = articleCategories.find((x) => x.slug === a.category)!
  const { c, lang, fallback } = pick(a, locale)
  const related = listedArticles.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3)
  const url = SITE_URL + localizePath(`/blog/${a.slug}/`, locale)

  return (
    <main id="main">
      <article lang={fallback ? lang : undefined}>
        <header className="container-x pb-2 pt-4 md:pt-6">
          <div className="rounded-[var(--radius-card)] bg-surface px-6 pb-12 pt-7 md:px-12 md:pb-16 md:pt-9">
            <Breadcrumbs items={[{ label: t('nav.insights'), to: '/blog/' }, { label: l(cat.name), to: `/blog/category/${cat.slug}/` }]} />
            {(a.sample || a.draft) && (
              <p className="mt-8 flex gap-3 rounded-2xl border border-amber/40 bg-amber-soft p-4 text-sm text-text">
                <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-amber" />
                <span><Badge tone="amber" className="mr-2">{a.draft ? 'Draft' : t('ins.sample')}</Badge>{a.draft ? 'Visible only in npm run dev.' : c.excerpt}</span>
              </p>
            )}
            {fallback && locale === 'bn' && <p className="mt-6 rounded-xl bg-mist px-4 py-3 text-sm text-text" lang="bn">{t('ins.translation')}</p>}
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <LocalLink to={`/blog/category/${cat.slug}/`} className="text-sm font-semibold uppercase tracking-wider text-accent hover:underline">{l(cat.name)}</LocalLink>
              <h1 className="t-h1 mt-4 text-ink">{c.title}</h1>
              {c.excerpt && <p className="t-lead mt-5 text-muted">{c.excerpt}</p>}
              <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted">
                <span>{t('ins.by')} <LocalLink to="/about/biography/" rel="author" className="font-medium text-ink hover:text-accent">{l(person.name)}</LocalLink></span>
                <span aria-hidden>·</span>
                <span>{t('ins.published')} <time dateTime={a.published}>{fmt(a.published)}</time></span>
                {a.updated && <><span aria-hidden>·</span><span>{t('ins.updated')} <time dateTime={a.updated}>{fmt(a.updated)}</time></span></>}
                <span aria-hidden>·</span>
                <span>{c.readingMinutes} {t('ins.min')}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="container-x pb-2 pt-3">
          <div className="rounded-[var(--radius-card)] bg-surface px-6 py-10 md:px-12 md:py-14">
            {a.cover && <img src={a.cover} alt="" className="mx-auto mb-12 aspect-[16/8] w-full max-w-5xl rounded-[20px] object-cover" />}
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[14rem_1fr]">
              <aside>
                <div className="lg:sticky lg:top-28">
                  {c.toc.length > 0 && (
                    <nav aria-labelledby="toc-title">
                      <h2 id="toc-title" className="t-eyebrow text-muted">{t('ins.toc')}</h2>
                      <ol className="mt-4 grid gap-1 border-l border-line">
                        {c.toc.map((h) => <li key={h.id}><a href={`#${h.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-accent hover:text-ink">{h.text}</a></li>)}
                      </ol>
                    </nav>
                  )}
                  <Share url={url} title={c.title} />
                </div>
              </aside>

              <div className="min-w-0 max-w-[68ch]">
                {c.takeaways.length > 0 && (
                  <section aria-labelledby="takeaways-title" className="mb-10 rounded-2xl bg-lime/60 p-6">
                    <h2 id="takeaways-title" className="font-display text-base font-bold text-on-lime">{t('ins.takeaways')}</h2>
                    <ul className="mt-3 grid gap-2 text-[0.9875rem] text-on-lime">
                      {c.takeaways.map((k, i) => <li key={i} className="flex gap-2"><Check aria-hidden className="mt-1 size-4 shrink-0" />{k}</li>)}
                    </ul>
                  </section>
                )}

                <div className="prose-article" dangerouslySetInnerHTML={{ __html: c.html }} />

                {c.faq.length > 0 && (
                  <section aria-labelledby="faq-title" className="mt-14 border-t border-line pt-8">
                    <h2 id="faq-title" className="t-h3 text-ink">{t('ins.faq')}</h2>
                    <div className="mt-4 border-t border-line">
                      {c.faq.map((f, i) => (
                        <details key={i} className="group border-b border-line" open={i === 0}>
                          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            {f.q}<Plus aria-hidden className="size-5 shrink-0 transition-transform group-open:rotate-45" />
                          </summary>
                          <p className="pb-5 pr-8 text-muted">{f.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {a.sources && a.sources.length > 0 && (
                  <section aria-labelledby="sources-title" className="mt-14 border-t border-line pt-8">
                    <h2 id="sources-title" className="t-h3 text-ink">{t('ins.sources')}</h2>
                    <ol className="mt-4 list-decimal space-y-2 pl-5 text-base">
                      {a.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">{s.label}</a></li>)}
                    </ol>
                  </section>
                )}

                <div className="on-ink mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink p-6 text-white">
                  <div>
                    <p className="font-display text-lg font-bold">{t('ins.cta.title')}</p>
                    <p className="mt-1 text-sm text-on-ink-muted">{t('ins.cta.body')}</p>
                  </div>
                  <ButtonLink to={ctaLinks.consulting} variant="light">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
                </div>

                <AuthorBox className="mt-6" />
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="container-x pb-2 pt-3">
          <div className="rounded-[var(--radius-card)] bg-surface p-7 md:p-12">
            <h2 id="related-title" className="t-h2 text-ink">{t('ins.related')}</h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">{related.map((r) => <li key={r.slug}><ArticleCard a={r} /></li>)}</ul>
          </div>
        </section>
      )}

      <div className="container-x pb-16 pt-6">
        <ButtonLink to="/blog/" variant="outline"><ArrowLeft aria-hidden /> {t('ins.back')}</ButtonLink>
      </div>
    </main>
  )
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
