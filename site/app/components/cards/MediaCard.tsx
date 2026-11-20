import { ArrowUpRight, Newspaper, Play } from 'lucide-react'
import { Badge } from '~/components/ui/Badge'
import { Img } from '~/components/ui/Img'
import type { MediaItem } from '~/content/media'
import mediaImages from '~/content/mediaImages.json'
import { useLocale } from '~/i18n/useLocale'
import { formatPartialDate } from '~/lib/dates'
import { cn } from '~/lib/utils'

const images = mediaImages as Record<string, string>
const ytId = (url: string) => url.match(/[?&]v=([\w-]{11})/)?.[1]

/** One piece of coverage with its published picture; the whole card opens the original source. */
export function MediaCard({ m, compact = false }: { m: MediaItem; compact?: boolean }) {
  const { t, locale } = useLocale()
  const isVideo = Boolean(ytId(m.url))
  const img = images[m.id]

  const thumb = (
    <span className={cn('relative block shrink-0 overflow-hidden bg-ink', compact ? 'aspect-video w-28 rounded-xl sm:w-36' : 'aspect-video w-full')}>
      {img ? (
        <Img
          src={img}
          alt=""
          sizes={compact ? '144px' : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <span aria-hidden className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_90%_at_85%_0%,var(--accent)_0%,transparent_65%)] text-white/80">
          <Newspaper className={compact ? 'size-5' : 'size-8'} />
        </span>
      )}
      {isVideo && (
        <span className="absolute inset-0 grid place-items-center">
          <span className={cn('grid place-items-center rounded-full bg-white/95 text-ink shadow-lg transition-transform group-hover:scale-110', compact ? 'size-8' : 'size-14')}>
            <Play aria-hidden className={cn('ml-0.5', compact ? 'size-3.5' : 'size-6')} />
          </span>
        </span>
      )}
      {!compact && (
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">{m.outlet}</span>
      )}
    </span>
  )

  if (compact) {
    return (
      <a href={m.url} target="_blank" rel="noopener noreferrer" className="tile tile-hover group flex h-full items-center gap-4 overflow-hidden bg-white p-3 ring-1 ring-accent/10">
        {thumb}
        <span className="min-w-0 flex-1 py-1 pr-1">
          <span className="text-xs font-semibold text-accent">{m.outlet}</span>
          <span lang={m.language} className="mt-1 line-clamp-2 block font-display text-[0.95rem] font-semibold leading-snug text-ink group-hover:text-accent">{m.headline}</span>
          <time dateTime={m.date} className="mt-1 block text-xs text-muted">{formatPartialDate(m.date, locale)}</time>
        </span>
        <span className="sr-only">{isVideo ? t('media.watch') : `${t('media.read')} ${m.outlet}`}</span>
      </a>
    )
  }

  return (
    <a href={m.url} target="_blank" rel="noopener noreferrer" className="tile tile-hover group flex h-full flex-col overflow-hidden">
      {thumb}
      <span className="flex flex-1 flex-col p-6">
        <Badge tone={m.category === 'press-release' ? 'outline' : 'neutral'} className="self-start">{t(`media.cat.${m.category}`)}</Badge>
        <span lang={m.language} className="mt-3 block font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">{m.headline}</span>
        <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm text-muted">
          <time dateTime={m.date}>{formatPartialDate(m.date, locale)}</time>
          <span className="inline-flex items-center gap-1 font-medium text-ink">
            {isVideo ? t('media.watch') : `${t('media.read')} ${m.outlet}`}
            <ArrowUpRight aria-hidden className="size-4" />
          </span>
        </span>
      </span>
    </a>
  )
}
