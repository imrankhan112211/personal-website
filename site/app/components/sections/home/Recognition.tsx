import { ArrowRight } from 'lucide-react'
import { RecognitionRow } from '~/components/cards/RecognitionRow'
import { ButtonLink } from '~/components/ui/Button'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { recognition } from '~/content/recognition'
import { useLocale } from '~/i18n/useLocale'

export function Recognition() {
  const { t } = useLocale()
  return (
    <section aria-labelledby="recognition-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="tile on-ink fill-navy relative overflow-hidden p-7 md:p-12">
        <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-lime/25 blur-3xl" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="recognition-title" eyebrow={t('home.recognition.eyebrow')} title={t('home.recognition.title')} tone="ink" className="[&>p:first-child]:text-lime" />
          <ButtonLink to="/recognition/" variant="outline-light">{t('cta.recognition')} <ArrowRight aria-hidden /></ButtonLink>
        </div>
        <ol className="mt-10">
          {recognition.filter((r) => r.featured).map((r) => <RecognitionRow key={r.id} r={r} dark />)}
        </ol>
      </div>
    </section>
  )
}
