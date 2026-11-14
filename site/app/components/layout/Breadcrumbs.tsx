import { ChevronRight } from 'lucide-react'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'
import { LocalLink } from '../ui/LocalLink'

export function Breadcrumbs({ items, tone = 'light' }: { items: { label: string; to?: string }[]; tone?: 'light' | 'ink' }) {
  const { t } = useLocale()
  const all = [{ label: t('nav.home'), to: '/' }, ...items]
  const ink = tone === 'ink'
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn('flex flex-wrap items-center gap-1.5 text-sm', ink ? 'text-on-ink-muted' : 'text-muted')}>
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden className="size-3.5 opacity-60" />}
            {c.to && i < all.length - 1 ? (
              <LocalLink to={c.to} className={ink ? 'hover:text-white' : 'hover:text-ink'}>{c.label}</LocalLink>
            ) : (
              <span aria-current="page" className={ink ? 'text-white' : 'text-ink'}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
