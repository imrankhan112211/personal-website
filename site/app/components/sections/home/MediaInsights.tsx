import { ArrowRight, ArrowUpRight, Newspaper } from 'lucide-react'
import { MediaCard } from '~/components/cards/MediaCard'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { Placeholder } from '~/components/ui/Placeholder'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { articleCategories, articles } from '~/content/articles'
import { media } from '~/content/media'
import { useLocale } from '~/i18n/useLocale'

/** Sections 9 + 10 share one editorial band so empty states never feel like dead space. */
export function MediaInsights() {
  const { t, l, locale } = useLocale()
  const latestMedia = [...media].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4)
  const latestArticles = [...articles].sort((a, b) => b.published.localeCompare(a.published)).slice(0, 4)
  const fmt = (d: string) => new Date(d).toLocaleDateString(locale === 'bn' ? 'bn-BD' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <div className="container-x pb-2 pt-16 md:pt-24">
      <div className="bento lg:grid-cols-12">
        {/* Media coverage */}
        <section aria-labelledby="media-title" className="tile p-7 md:p-10 lg:col-span-5">
          <div className="reveal">
            <Eyebrow>{t('home.media.eyebrow')}</Eyebrow>
            <h2 id="media-title" className="t-h2 mt-5">{t('home.media.title')}</h2>
          </div>
          {latestMedia.length ? (
            <ul className="mt-8 grid gap-3">
              {latestMedia.map((m) => <li key={m.id}><MediaCard m={m} compact /></li>)}
            </ul>
          ) : (
            <div className="reveal mt-10">
              <p className="text-muted">{t('home.media.empty')}</p>
              <ul className="mt-6 grid gap-3" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <li key={i} data-placeholder className="flex items-center gap-4 rounded-2xl border border-dashed border-line-strong bg-mist/60 p-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-mist text-muted"><Newspaper className="size-4" /></span>
                    <span className="font-mono text-[0.72rem] text-muted">[INSERT VERIFIED MEDIA ARTICLE URL]</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ButtonLink to="/media/" variant="link" className="mt-8">{t('cta.media')} <ArrowRight aria-hidden /></ButtonLink>
        </section>

        {/* Latest insights */}
        <section aria-labelledby="insights-title" className="tile p-7 md:p-10 lg:col-span-7">
          <div className="reveal">
            <Eyebrow>{t('home.insights.eyebrow')}</Eyebrow>
            <h2 id="insights-title" className="t-h2 mt-5">{t('home.insights.title')}</h2>
          </div>
          {latestArticles.length ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {latestArticles.map((a) => (
                <li key={a.slug}>
                  <LocalLink to={`/insights/${a.slug}/`} className="block h-full rounded-2xl bg-surface p-6 ring-1 ring-inset ring-line hover:ring-line-strong">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{l(articleCategories.find((c) => c.slug === a.category)!.name)}</span>
                    <span className="mt-2 block font-display text-lg font-semibold text-ink">{l(a.title)}</span>
                    <span className="mt-2 block text-sm text-muted">{fmt(a.published)} · {a.readingMinutes} min</span>
                  </LocalLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="reveal mt-10 rounded-2xl bg-mist p-6 md:p-7">
              <p className="text-text">{t('home.insights.empty')}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {articleCategories.map((c) => (
                  <li key={c.slug}>
                    <LocalLink to="/insights/" className="inline-flex min-h-10 items-center rounded-full bg-surface px-4 text-sm text-ink transition-colors hover:bg-accent hover:text-white">
                      {l(c.name)}
                    </LocalLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ButtonLink to="/insights/" variant="link" className="mt-8">{t('cta.insights')} <ArrowRight aria-hidden /></ButtonLink>
        </section>
      </div>
    </div>
  )
}
