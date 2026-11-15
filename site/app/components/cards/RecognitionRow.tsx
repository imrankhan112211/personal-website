import { ArrowUpRight } from 'lucide-react'
import { Badge } from '~/components/ui/Badge'
import { ImageSlot, Placeholder } from '~/components/ui/Placeholder'
import type { Recognition, RecognitionType } from '~/content/recognition'
import { useLocale } from '~/i18n/useLocale'
import { formatPartialDate } from '~/lib/dates'
import { Img } from '~/components/ui/Img'

/** Distinct, honest labels: a nomination is never shown as an award. */
export const recognitionTone: Record<RecognitionType, 'accent' | 'outline' | 'neutral' | 'success'> = {
  award: 'success',
  nomination: 'outline',
  speaking: 'accent',
  training: 'neutral',
  participation: 'neutral',
}

export function RecognitionRow({ r, detailed = false, dark = false }: { r: Recognition; detailed?: boolean; dark?: boolean }) {
  const { t, l, locale } = useLocale()
  return (
    <li className={`reveal grid gap-x-8 gap-y-4 border-t py-8 md:grid-cols-12 ${dark ? 'border-white/15' : 'border-line'}`}>
      {detailed && (
        <div className="md:col-span-3">
          {r.image ? (
            <Img src={r.image} alt={l(r.title)} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          ) : (
            <ImageSlot label="[INSERT PHOTO OR CERTIFICATE]" className="aspect-[4/3] rounded-2xl" />
          )}
        </div>
      )}
      <div className={detailed ? 'md:col-span-6' : 'md:col-span-8'}>
        <Badge tone={recognitionTone[r.type]}>{t(`rtype.${r.type}`)}</Badge>
        <h3 className={`mt-3 font-display text-xl font-semibold tracking-tight md:text-2xl ${dark ? 'text-white' : 'text-ink'}`}>{l(r.title)}</h3>
        <p className={`mt-1 ${dark ? 'text-on-ink-muted' : 'text-muted'}`}>{l(r.organization)}</p>
        {detailed && (
          <div className="mt-4 text-text">
            {r.description ? <p>{l(r.description)}</p> : <Placeholder label="[INSERT VERIFIED DESCRIPTION]" />}
          </div>
        )}
      </div>
      <dl className={detailed ? 'grid content-start gap-3 text-sm md:col-span-3' : 'grid content-start gap-3 text-sm md:col-span-4 md:justify-items-end'}>
        <div>
          <dt className="sr-only">{t('rec.date')}</dt>
          <dd>{r.date ? <time dateTime={r.date} className={`tabular-nums ${dark ? 'text-on-ink-muted' : 'text-muted'}`}>{formatPartialDate(r.date, locale)}</time> : <Placeholder label="[INSERT VERIFIED DATE]" />}</dd>
        </div>
        <div>
          <dt className="sr-only">{t('label.source')}</dt>
          <dd>
            {r.sourceUrl ? (
              <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center gap-1 font-medium hover:underline ${dark ? 'text-lime' : 'text-accent'}`}>
                {t('label.source')} <ArrowUpRight aria-hidden className="size-4" />
              </a>
            ) : (
              <Placeholder label="[INSERT SUPPORTING SOURCE]" />
            )}
          </dd>
        </div>
      </dl>
    </li>
  )
}
