import { ArrowRight, ArrowUpRight, BookOpen, Download, MonitorPlay } from 'lucide-react'
import type { Route } from './+types/courses'
import { PageHero } from '~/components/sections/shared/PageHero'
import { ButtonLink } from '~/components/ui/Button'
import { person, SITE_URL } from '~/content/person'
import { productKinds, products, type Product, type ProductKind } from '~/content/products'
import { localeFromPath } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { cn } from '~/lib/utils'

const icons: Record<ProductKind, typeof BookOpen> = { course: MonitorPlay, ebook: BookOpen, free: Download }

/** Product structured data (only for real, listed items). */
function productSchema(p: Product, locale: 'en' | 'bn') {
  const name = (locale === 'bn' && p.title.bn) || p.title.en
  return {
    '@context': 'https://schema.org',
    '@type': p.kind === 'course' ? 'Course' : 'Book',
    name,
    description: (locale === 'bn' && p.description.bn) || p.description.en,
    ...(p.cover ? { image: SITE_URL + p.cover } : {}),
    [p.kind === 'course' ? 'provider' : 'author']: { '@type': 'Person', name: person.name.en, url: SITE_URL + '/' },
    inLanguage: p.language === 'both' ? ['bn', 'en'] : p.language,
    offers: { '@type': 'Offer', url: p.url, price: p.price ?? 0, priceCurrency: 'BDT', availability: 'https://schema.org/InStock' },
  }
}

export function meta({ location }: Route.MetaArgs) {
  const locale = localeFromPath(location.pathname)
  return metaFor('resources', location.pathname, products.map((p) => productSchema(p, locale)))
}

export default function Courses() {
  const { t } = useLocale()
  const groups = productKinds.map((k) => ({ ...k, items: products.filter((p) => p.kind === k.kind) })).filter((g) => g.items.length)

  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.resources') }]} eyebrow={t('res.eyebrow')} title={t('res.title')} lead={t('res.lead')} />

      <div className="container-x grid gap-4 py-4 md:py-6">
        {groups.length === 0 ? <ComingSoon /> : groups.map((g) => <Group key={g.kind} kind={g.kind} title={g.title} body={g.body} items={g.items} />)}
      </div>
    </main>
  )
}

function Group({ kind, title, body, items }: { kind: ProductKind; title: Product['title']; body: Product['title']; items: Product[] }) {
  const { l } = useLocale()
  const Icon = icons[kind]
  return (
    <section aria-labelledby={`${kind}-t`} className="tile p-7 md:p-12">
      <div className="flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mist text-ink"><Icon aria-hidden className="size-5" /></span>
        <div>
          <h2 id={`${kind}-t`} className="t-h2 text-ink">{l(title)}</h2>
          <p className="mt-2 text-muted">{l(body)}</p>
        </div>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => <li key={p.slug}><ProductCard p={p} /></li>)}
      </ul>
    </section>
  )
}

function ProductCard({ p }: { p: Product }) {
  const { t, l, locale } = useLocale()
  const money = (n: number) => `৳${n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')}`
  const action = p.kind === 'course' ? t('res.enroll') : p.kind === 'ebook' ? t('res.buy') : t('res.download')
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-mist">
      <div className={cn('relative aspect-[4/3] overflow-hidden bg-ink', p.kind === 'ebook' && 'aspect-[3/4]')}>
        {p.cover ? (
          <img src={p.cover} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <span aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,var(--accent)_0%,transparent_65%)]" />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink">
          {p.language === 'both' ? 'বাংলা · English' : p.language === 'bn' ? 'বাংলা' : 'English'}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-ink">{l(p.title)}</h3>
        {p.details && <p className="mt-1 text-sm font-medium text-accent">{l(p.details)}</p>}
        <p className="mt-3 text-muted">{l(p.description)}</p>
        {p.highlights?.length ? (
          <ul className="mt-4 grid gap-1.5 text-[0.9375rem] text-text">
            {p.highlights.map((h) => <li key={h.en} className="flex gap-2.5"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{l(h)}</li>)}
          </ul>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-4 pt-7">
          <p className="font-display text-2xl font-bold text-ink">
            {p.price ? money(p.price) : t('res.free')}
            {p.oldPrice ? <s className="ml-2 text-base font-medium text-muted">{money(p.oldPrice)}</s> : null}
          </p>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-accent">
            {action} <ArrowUpRight aria-hidden className="size-4" /><span className="sr-only"> — {l(p.title)}</span>
          </a>
        </div>
      </div>
    </article>
  )
}

function ComingSoon() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="soon-t" className="tile p-7 md:p-12">
      <p className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold text-on-lime">{t('res.soon')}</p>
      <h2 id="soon-t" className="t-h2 mt-5 max-w-2xl text-ink">{t('res.soon.title')}</h2>
      <ul className="mt-10 grid gap-3 md:grid-cols-3">
        {productKinds.map((k) => {
          const Icon = icons[k.kind]
          return (
            <li key={k.kind} className="rounded-2xl bg-mist p-6">
              <Icon aria-hidden className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{l(k.title)}</h3>
              <p className="mt-1.5 text-sm text-muted">{l(k.body)}</p>
            </li>
          )
        })}
      </ul>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8">
        <p className="text-text">{t('res.notify.body')}</p>
        <ButtonLink to="/contact/?type=general">{t('res.notify.cta')} <ArrowRight aria-hidden /></ButtonLink>
      </div>
    </section>
  )
}
