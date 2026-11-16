import { ArrowRight, Newspaper } from 'lucide-react'
import { useState } from 'react'
import type { Route } from './+types/media'
import { MediaCard } from '~/components/cards/MediaCard'
import { EmptyState } from '~/components/sections/shared/EmptyState'
import { PageHero } from '~/components/sections/shared/PageHero'
import { ButtonLink } from '~/components/ui/Button'
import { media, type MediaCategory } from '~/content/media'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { cn } from '~/lib/utils'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('media', location.pathname)
}

const cats: MediaCategory[] = ['news', 'interview', 'video', 'opinion', 'press-release']

export default function Media() {
  const { t, locale } = useLocale()
  const [cat, setCat] = useState<MediaCategory | 'all'>('all')
  const sorted = [...media].sort((a, b) => b.date.localeCompare(a.date))
  const items = sorted.filter((m) => cat === 'all' || m.category === cat)
  const available = cats.filter((c) => media.some((m) => m.category === c))
  const n = media.length.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')

  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.media') }]} eyebrow={t('media.eyebrow')} title={t('media.eyebrow')} lead={t('media.lead')}>
        {media.length > 0 && <p className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-on-lime">{n} {t('media.count')}</p>}
      </PageHero>

      <div className="container-x pb-2 pt-3">
        {media.length > 0 && (
          <div role="group" aria-label={t('media.filter')} className="mb-4 flex flex-wrap gap-2 rounded-[var(--radius-card)] bg-surface p-3">
            {(['all', ...available] as const).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={cn('inline-flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-medium transition-colors', cat === c ? 'bg-ink text-white' : 'bg-mist text-ink hover:bg-line')}
              >
                {c === 'all' ? t('media.all') : t(`media.cat.${c}`)}
              </button>
            ))}
          </div>
        )}

        {media.length === 0 ? (
          <EmptyState as="h2" icon={Newspaper} title={t('media.empty.title')}><p>{t('media.empty.body')}</p></EmptyState>
        ) : items.length === 0 ? (
          <p className="text-muted">{t('media.none')}</p>
        ) : (
          <ul className="bento md:grid-cols-2 lg:grid-cols-3">
            {items.map((m) => <li key={m.id}><MediaCard m={m} /></li>)}
          </ul>
        )}

        <aside className="on-ink mt-4 grid gap-6 rounded-[var(--radius-card)] bg-ink p-8 text-on-ink md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="t-h3 text-white">{t('media.press.title')}</h2>
            <p className="mt-2 max-w-xl text-on-ink-muted">{t('media.press.body')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/about/biography/" variant="light">{t('media.press.cta')} <ArrowRight aria-hidden /></ButtonLink>
          </div>
        </aside>
      </div>
    </main>
  )
}
