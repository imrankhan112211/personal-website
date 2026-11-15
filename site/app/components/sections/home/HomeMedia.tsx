import { ArrowRight } from 'lucide-react'
import { MediaCard } from '~/components/cards/MediaCard'
import { ButtonLink } from '~/components/ui/Button'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { media } from '~/content/media'
import { useLocale } from '~/i18n/useLocale'

/** Latest coverage; every card opens the original report. */
export function HomeMedia() {
  const { t } = useLocale()
  // Newest first, at most two per topic, so the section shows the range of coverage.
  const perTopic = new Map<string, number>()
  const latest = [...media]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((m) => {
      const n = perTopic.get(m.topic ?? m.id) ?? 0
      perTopic.set(m.topic ?? m.id, n + 1)
      return n < 2
    })
    .slice(0, 6)
  if (!latest.length) return null
  return (
    <section aria-labelledby="media-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="tile p-7 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="media-title" eyebrow={t('home.media.eyebrow')} title={t('home.media.title')} />
          <ButtonLink to="/media/" variant="outline">{t('cta.media')} <ArrowRight aria-hidden /></ButtonLink>
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((m) => <li key={m.id}><MediaCard m={m} compact /></li>)}
        </ul>
      </div>
    </section>
  )
}
