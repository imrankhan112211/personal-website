import { ArrowUpRight, Play } from 'lucide-react'
import { publicPosts, videoReviews } from '~/content/reviews'
import { useLocale } from '~/i18n/useLocale'

/** Video reviews + wall of public posts. Links only — no copied text or screenshots. */
export function Reviews() {
  const { t, locale } = useLocale()
  const num = (n: number) => n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')
  const totalPosts = publicPosts.reduce((s, p) => s + p.urls.length, 0)

  return (
    <div className="grid gap-4">
      <section aria-labelledby="videos-title" className="rounded-[var(--radius-card)] bg-surface p-7 md:p-10">
        <h3 id="videos-title" className="t-h3 text-ink">{t('rev.videos.title')}</h3>
        <p className="mt-2 max-w-2xl text-muted">{t('rev.videos.body')}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {videoReviews.map((v) => (
            <li key={v.url}>
              <a href={v.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl bg-mist p-5 transition-colors hover:bg-accent hover:text-white">
                <span className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-white group-hover:bg-white group-hover:text-accent"><Play aria-hidden className="ml-0.5 size-4" /></span>
                  <span className="text-xs font-medium text-muted group-hover:text-white/80">{v.author ?? t('rev.reel')}</span>
                </span>
                <span lang={v.language} className="mt-5 font-display font-semibold leading-snug">“{v.caption}”</span>
                <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
                  <span className="text-muted group-hover:text-white/80">{v.views} {t('rev.views')} · {v.reactions} {t('rev.reactions')}</span>
                  <ArrowUpRight aria-hidden className="size-4 shrink-0" />
                </span>
                <span className="sr-only">{t('rev.watch')}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">{t('rev.asof')}</p>
      </section>

      <section aria-labelledby="wall-title" className="rounded-[var(--radius-card)] bg-surface p-7 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 id="wall-title" className="t-h3 text-ink">{t('rev.wall.title')}</h3>
            <p className="mt-2 max-w-2xl text-muted">{t('rev.wall.body')}</p>
          </div>
          <p className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-on-lime">
            {num(publicPosts.length)} {t('rev.count.people')} · {num(totalPosts)} {t('rev.count.posts')}
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {publicPosts.map((p) => (
            <li key={p.name}>
              <a href={p.urls[0]} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line px-4 text-sm text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white">
                {p.name}
                {p.urls.length > 1 && <span className="rounded-full bg-mist px-1.5 text-xs text-muted">×{p.urls.length}</span>}
                <ArrowUpRight aria-hidden className="size-3.5 opacity-60" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
