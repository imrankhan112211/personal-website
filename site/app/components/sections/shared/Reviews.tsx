import { ArrowUpRight, ChevronDown, Play } from 'lucide-react'
import { Avatar } from '~/components/ui/Avatar'
import reviewImages from '~/content/reviewImages.json'
import { publicPosts, videoReviews, type PublicPost } from '~/content/reviews'
import { useLocale } from '~/i18n/useLocale'

const images = reviewImages as { posts: Record<string, string>; avatars?: Record<string, string>; videos: Record<string, string> }
const FIRST = 24

/** Video reviews + public posts as clickable image cards. Each opens the original Facebook post. */
export function Reviews() {
  const { t, locale } = useLocale()
  const num = (n: number) => n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')
  const totalPosts = publicPosts.reduce((s, p) => s + p.urls.length, 0)
  const [shown, rest] = [publicPosts.slice(0, FIRST), publicPosts.slice(FIRST)]

  return (
    <div className="grid gap-4">
      <section aria-labelledby="videos-title" className="rounded-[var(--radius-card)] bg-surface p-7 md:p-10">
        <h3 id="videos-title" className="t-h3 text-ink">{t('rev.videos.title')}</h3>
        <p className="mt-2 max-w-2xl text-muted">{t('rev.videos.body')}</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {videoReviews.map((v, i) => {
            const thumb = images.videos[String(i + 1)]
            return (
              <li key={v.url}>
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="group relative flex aspect-[9/16] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white">
                  {thumb ? (
                    <img src={thumb} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <span aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,var(--accent)_0%,transparent_60%)] opacity-80" />
                  )}
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink transition-transform group-hover:scale-110">
                    <Play aria-hidden className="ml-0.5 size-5" />
                  </span>
                  <span className="relative p-3">
                    <span lang={v.language} className="line-clamp-2 text-[0.8125rem] font-semibold leading-snug">“{v.caption}”</span>
                    <span className="mt-1.5 block text-xs text-white/75">{v.views} {t('rev.views')}{v.author ? ` · ${v.author}` : ''}</span>
                  </span>
                  <span className="sr-only">{t('rev.watch')}</span>
                </a>
              </li>
            )
          })}
        </ul>
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
        <PostGrid posts={shown} />
        {rest.length > 0 && (
          <details className="group mt-3">
            <summary className="mx-auto flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium text-ink hover:border-ink [&::-webkit-details-marker]:hidden">
              {t('rev.showall')} ({num(publicPosts.length)})
              <ChevronDown aria-hidden className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <PostGrid posts={rest} />
          </details>
        )}
      </section>
    </div>
  )
}

function PostGrid({ posts }: { posts: PublicPost[] }) {
  const { t } = useLocale()
  return (
    <ul className="mt-6 grid grid-flow-dense grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {posts.map((p) => {
        const img = images.posts[p.name]
        return (
          <li key={p.name} className={img ? 'row-span-2' : undefined}>
            <a href={p.urls[0]} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-2xl bg-mist transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgb(11_13_18/0.4)]">
              {img && <img src={img} alt="" loading="lazy" decoding="async" className="aspect-square w-full object-cover" />}
              <span className={img ? 'flex flex-1 flex-col p-3' : 'flex flex-1 items-center gap-3 p-3'}>
                {!img && <Avatar name={p.name} src={images.avatars?.[p.name]} className="size-11 shrink-0 rounded-full text-sm" />}
                <span className="min-w-0">
                  <span className="line-clamp-2 text-sm font-semibold leading-snug text-ink">{p.name}</span>
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-muted group-hover:text-accent">
                    {t('rev.view')}{p.urls.length > 1 ? ` ×${p.urls.length}` : ''} <ArrowUpRight aria-hidden className="size-3.5" />
                  </span>
                </span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
