import { ArrowRight, ArrowUpRight, Newspaper } from 'lucide-react'
import { useState } from 'react'
import type { Route } from './+types/media'
import { EmptyState } from '~/components/sections/shared/EmptyState'
import { PageHero } from '~/components/sections/shared/PageHero'
import { ButtonLink } from '~/components/ui/Button'
import { ImageSlot, Placeholder } from '~/components/ui/Placeholder'
import { media, type MediaItem } from '~/content/media'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { cn } from '~/lib/utils'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('media', location.pathname)
}

const cats: MediaItem['category'][] = ['news', 'interview', 'feature', 'video', 'podcast']

export default function Media() {
  const { t, l, locale } = useLocale()
  const [cat, setCat] = useState<MediaItem['category'] | 'all'>('all')
  const items = [...media].sort((a, b) => b.date.localeCompare(a.date)).filter((m) => cat === 'all' || m.category === cat)
  const fmt = (d: string) => new Date(d).toLocaleDateString(locale === 'bn' ? 'bn-BD' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.media') }]} eyebrow={t('media.eyebrow')} title={t('media.eyebrow')} lead={t('media.lead')} />

      <div className="container-x py-16 md:py-24">
        <div role="group" aria-label={t('media.filter')} className="mb-12 flex flex-wrap gap-2">
          {(['all', ...cats] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={cn('inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition-colors', cat === c ? 'border-ink bg-ink text-white' : 'border-line bg-surface text-ink hover:border-ink')}
            >
              {c === 'all' ? t('media.all') : t(`media.cat.${c}`)}
            </button>
          ))}
        </div>

        {media.length === 0 ? (
          <>
            <EmptyState as="h2" icon={Newspaper} title={t('media.empty.title')}><p>{t('media.empty.body')}</p></EmptyState>
            <ul aria-hidden className="mt-8 grid gap-5 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <li key={n} className="overflow-hidden rounded-[var(--radius-card)] border border-dashed border-line-strong bg-surface">
                  <ImageSlot label="[THUMBNAIL]" className="aspect-[16/9]" />
                  <div className="grid gap-2 p-5"><Placeholder label="[OUTLET · DATE]" /><Placeholder label="[INSERT VERIFIED MEDIA ARTICLE URL]" /></div>
                </li>
              ))}
            </ul>
          </>
        ) : items.length === 0 ? (
          <p className="text-muted">{t('media.none')}</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((m) => (
              <li key={m.id}>
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-shadow hover:shadow-[0_24px_60px_-30px_rgb(14_23_38/0.35)]">
                  {m.thumbnail ? <img src={m.thumbnail} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" /> : <ImageSlot label={m.outlet} className="aspect-[16/9]" />}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{m.outlet} · {t(`media.cat.${m.category}`)}</p>
                    <h2 lang={m.language} className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-accent">{l(m.headline)}</h2>
                    <p className="mt-2 text-sm text-muted">{l(m.description)}</p>
                    <p className="mt-auto flex items-center justify-between pt-5 text-sm text-muted">
                      <time dateTime={m.date}>{fmt(m.date)}</time>
                      <span className="inline-flex items-center gap-1 font-medium text-ink">{t('media.read')} {m.outlet}<ArrowUpRight aria-hidden className="size-4" /></span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        <aside className="mt-20 grid gap-6 rounded-[28px] bg-ink p-8 text-on-ink md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="t-h3 text-white">{t('media.press.title')}</h2>
            <p className="mt-2 max-w-xl text-on-ink-muted">{t('media.press.body')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/contact/?type=media" variant="light">{t('media.press.cta')} <ArrowRight aria-hidden /></ButtonLink>
            <ButtonLink to="/about/biography/" variant="outline-light">{t('nav.biography')}</ButtonLink>
          </div>
        </aside>
      </div>
    </main>
  )
}
