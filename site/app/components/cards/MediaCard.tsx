import { ArrowUpRight, Play } from 'lucide-react'
import { Badge } from '~/components/ui/Badge'
import type { MediaItem } from '~/content/media'
import { useLocale } from '~/i18n/useLocale'
import { formatPartialDate } from '~/lib/dates'
import { cn } from '~/lib/utils'

const ytId = (url: string) => url.match(/[?&]v=([\w-]{11})/)?.[1]

/** One piece of coverage, always linking to the original source. */
export function MediaCard({ m, compact = false }: { m: MediaItem; compact?: boolean }) {
  const { t, locale } = useLocale()
  const yt = ytId(m.url)
  return (
    <a
      href={m.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('tile tile-hover group flex h-full flex-col overflow-hidden', compact && 'bg-mist')}
    >
      {yt && !compact && (
        <span className="on-ink relative flex aspect-video items-end overflow-hidden bg-ink p-5">
          <span aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/50 blur-2xl" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-14 place-items-center rounded-full bg-white text-ink transition-transform group-hover:scale-110"><Play aria-hidden className="ml-0.5 size-6" /></span>
          </span>
          <span className="relative text-sm font-semibold text-white">{m.outlet}</span>
        </span>
      )}
      <span className={cn('flex flex-1 flex-col', compact ? 'p-5' : 'p-6')}>
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">{m.outlet}</span>
          {!compact && <Badge tone={m.category === 'press-release' ? 'outline' : 'neutral'}>{t(`media.cat.${m.category}`)}</Badge>}
        </span>
        <span lang={m.language} className={cn('mt-2 block font-display font-semibold leading-snug text-ink group-hover:text-accent', compact ? 'text-base' : 'text-lg')}>
          {m.headline}
        </span>
        <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm text-muted">
          <time dateTime={m.date}>{formatPartialDate(m.date, locale)}</time>
          <span className="inline-flex items-center gap-1 font-medium text-ink">
            <span className={compact ? 'sr-only' : undefined}>{yt ? t('media.watch') : `${t('media.read')} ${m.outlet}`}</span>
            <ArrowUpRight aria-hidden className="size-4" />
          </span>
        </span>
      </span>
    </a>
  )
}
