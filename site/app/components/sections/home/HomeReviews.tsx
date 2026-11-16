import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { Avatar } from '~/components/ui/Avatar'
import reviewImages from '~/content/reviewImages.json'
import { quotes } from '~/content/homeStory'
import { publicPosts, videoReviews } from '~/content/reviews'
import { useLocale } from '~/i18n/useLocale'

const images = reviewImages as { avatars?: Record<string, string> }

/** Client quotes, word for word from their public posts, each linking to the original. */
export function HomeReviews() {
  const { t, l, locale } = useLocale()
  const num = (n: number) => n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')
  const items = quotes.map((q) => ({ ...q, post: publicPosts.find((p) => p.name === q.name) })).filter((q) => q.post)

  return (
    <section aria-labelledby="reviews-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-6 px-1">
        <SectionHeading id="reviews-title" eyebrow={t('home.clients.eyebrow')} title={t('rev.home.title')} />
        <ButtonLink to="/impact/#testimonials" variant="outline">
          {t('rev.home.cta')} <ArrowRight aria-hidden />
        </ButtonLink>
      </div>
      <ul className="stagger bento mt-10 md:grid-cols-2 xl:grid-cols-3">
        {items.map((q) => (
          <li key={q.name}>
            <figure className="lift tile flex h-full flex-col p-7">
              <Quote aria-hidden className="size-7 text-lime" />
              <blockquote lang={q.lang} className="mt-4 flex-1 font-display text-[1.0625rem] font-medium leading-relaxed text-ink">“{q.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Avatar name={q.name} src={images.avatars?.[q.name]} className="size-11 shrink-0 rounded-full text-sm" />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-ink">{q.name}</span>
                  <span className="block text-sm text-muted">{l(q.context)}</span>
                </span>
                <a href={q.post!.urls[0]} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline">
                  {t('rev.view')}<span className="sr-only"> — {q.name}</span> <ArrowUpRight aria-hidden className="size-4" />
                </a>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
