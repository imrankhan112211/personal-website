import { ArrowRight, ArrowUpRight, Play } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { publicPosts, videoReviews } from '~/content/reviews'
import { useLocale } from '~/i18n/useLocale'

const parseCount = (v: string) => parseFloat(v) * (v.endsWith('M') ? 1e6 : v.endsWith('K') ? 1e3 : 1)

export function HomeReviews() {
  const { t, locale } = useLocale()
  const num = (n: number) => n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')
  const top = [...videoReviews].sort((a, b) => parseCount(b.views) - parseCount(a.views)).slice(0, 2)
  const posts = publicPosts.reduce((s, p) => s + p.urls.length, 0)

  return (
    <section aria-labelledby="reviews-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="bento lg:grid-cols-4">
        <div className="reveal tile flex flex-col justify-between gap-8 p-7 md:p-9 lg:col-span-2">
          <div>
            <Eyebrow>{t('impact.testimonials.eyebrow')}</Eyebrow>
            <h2 id="reviews-title" className="t-h2 mt-5">{t('rev.home.title')}</h2>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {publicPosts.slice(0, 14).map((p) => (
              <li key={p.name}><a href={p.urls[0]} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center rounded-full bg-mist px-3 text-[0.8125rem] text-ink hover:bg-accent hover:text-white">{p.name}</a></li>
            ))}
          </ul>
          <ButtonLink to="/impact/#testimonials" variant="outline" className="self-start">{t('rev.home.cta')} <ArrowRight aria-hidden /></ButtonLink>
        </div>

        <div className="reveal tile flex flex-col justify-between gap-6 bg-lime p-7 text-on-lime md:p-9">
          <p className="text-sm font-semibold">{t('rev.wall.title')}</p>
          <div>
            <p className="font-display text-6xl font-bold tracking-tight">{num(publicPosts.length)}</p>
            <p className="mt-1 font-medium">{t('rev.count.people')}</p>
            <p className="mt-3 text-sm opacity-80">{num(posts)} {t('rev.count.posts')} · {num(videoReviews.length)} {t('rev.videos.title').toLowerCase()}</p>
          </div>
        </div>

        <ul className="reveal grid gap-3 md:gap-4">
          {top.map((v) => (
            <li key={v.url} className="h-full">
              <a href={v.url} target="_blank" rel="noopener noreferrer" className="tile tile-hover on-ink group flex h-full flex-col justify-between gap-4 bg-ink p-6 text-white">
                <span className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-full bg-white text-ink"><Play aria-hidden className="ml-0.5 size-4" /></span>
                  <ArrowUpRight aria-hidden className="size-5 text-on-ink-muted" />
                </span>
                <span>
                  <span className="font-display text-2xl font-bold">{v.views} <span className="text-base font-medium text-on-ink-muted">{t('rev.views')}</span></span>
                  <span lang={v.language} className="mt-1 block text-sm text-on-ink-muted">{v.author ?? `“${v.caption}”`}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
