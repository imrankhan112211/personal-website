import { PenLine, Search } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import { NavLink } from 'react-router'
import { ArticleCard } from '~/components/cards/ArticleCard'
import { EmptyState } from '~/components/sections/shared/EmptyState'
import { articleCategories, listedArticles, type ArticleCategory } from '~/content/articles'
import { tr } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'
import { AuthorBox } from './AuthorBox'

/** Blog listing used by /blog/ and /blog/category/:category/ */
export function InsightsListing({ category }: { category?: ArticleCategory }) {
  const { t, l, href, locale } = useLocale()
  const [q, setQ] = useState('')
  const searchId = useId()

  const base = useMemo(() => listedArticles.filter((a) => !category || a.category === category).sort((a, b) => b.published.localeCompare(a.published)), [category])
  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return base
    return base.filter((a) => [tr(a.title, locale), tr(a.excerpt, locale), a.title.en, a.excerpt.en].some((s) => s.toLowerCase().includes(term)))
  }, [q, base, locale])

  const [featured, ...rest] = results
  const chip = ({ isActive }: { isActive: boolean }) =>
    cn('inline-flex min-h-11 items-center whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors', isActive ? 'border-ink bg-ink text-white' : 'border-line bg-surface text-ink hover:border-ink')

  return (
    <div className="container-x py-14 md:py-20">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
        <nav aria-label={t('ins.categories')} className="-mx-5 overflow-x-auto px-5 lg:col-span-8 lg:mx-0 lg:px-0">
          <ul className="flex gap-2 pb-1 lg:flex-wrap">
            <li><NavLink to={href('/blog/')} end className={chip}>{t('ins.all')}</NavLink></li>
            {articleCategories.map((c) => (
              <li key={c.slug}><NavLink to={href(`/blog/category/${c.slug}/`)} className={chip}>{l(c.name)}</NavLink></li>
            ))}
          </ul>
        </nav>
        <div role="search" className="relative lg:col-span-4">
          <label htmlFor={searchId} className="sr-only">{t('ins.search')}</label>
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input id={searchId} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('ins.search.ph')} className="min-h-12 w-full rounded-full border border-line-strong bg-surface pl-11 pr-4 text-base text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent-soft" />
        </div>
      </div>

      <div className="mt-12" aria-live="polite">
        {base.length === 0 ? (
          <EmptyState as="h2" icon={PenLine} title={t('ins.empty.cat')} />
        ) : results.length === 0 ? (
          <p className="py-12 text-center text-muted">{t('ins.noresults')}</p>
        ) : (
          <>
            {featured && (
              <section aria-label={t('ins.featured')}>
                <ArticleCard a={featured} featured as="h2" />
              </section>
            )}
            {rest.length > 0 && (
              <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((a) => <li key={a.slug}><ArticleCard a={a} as="h2" /></li>)}
              </ul>
            )}
          </>
        )}
      </div>

      <AuthorBox className="mt-20" />
    </div>
  )
}
