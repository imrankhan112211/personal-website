import { ArrowUpRight } from 'lucide-react'
import { Badge } from '~/components/ui/Badge'
import { ImageSlot } from '~/components/ui/Placeholder'
import { LocalLink } from '~/components/ui/LocalLink'
import { articleCategories, type Article } from '~/content/articles'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

export function useDate() {
  const { locale } = useLocale()
  return (d: string) => new Date(d).toLocaleDateString(locale === 'bn' ? 'bn-BD' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function ArticleCard({ a, featured = false, as: H = 'h3' }: { a: Article; featured?: boolean; as?: 'h2' | 'h3' }) {
  const { t, l } = useLocale()
  const fmt = useDate()
  const cat = articleCategories.find((c) => c.slug === a.category)!
  return (
    <article className={cn('group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover: shadow-[0_8px_24px_rgb(0_0_0/0.06)]', featured && 'lg:flex-row')}>
      {a.cover ? (
        <img src={a.cover} alt="" loading="lazy" className={cn('w-full object-cover', featured ? 'aspect-[16/10] lg:w-1/2' : 'aspect-[16/9]')} />
      ) : (
        <ImageSlot label="[INSERT COVER IMAGE]" className={cn(featured ? 'aspect-[16/10] lg:aspect-auto lg:w-1/2' : 'aspect-[16/9]')} />
      )}
      <div className={cn('flex flex-1 flex-col p-6', featured && 'md:p-10')}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-accent">{l(cat.name)}</span>
          {a.sample && <Badge tone="amber">{t('ins.sample')}</Badge>}
        </div>
        <H className={cn('mt-3 font-display font-semibold tracking-tight text-ink', featured ? 'text-2xl md:text-3xl' : 'text-xl')}>
          <LocalLink to={`/blog/${a.slug}/`} className="after:absolute after:inset-0 group-hover:text-accent">{l(a.title)}</LocalLink>
        </H>
        <p className="mt-3 text-muted">{l(a.excerpt)}</p>
        <p className="mt-auto flex items-center justify-between pt-6 text-sm text-muted">
          <span><time dateTime={a.published}>{fmt(a.published)}</time> · {a.readingMinutes} {t('ins.min')}</span>
          <ArrowUpRight aria-hidden className="size-4 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </p>
      </div>
    </article>
  )
}
