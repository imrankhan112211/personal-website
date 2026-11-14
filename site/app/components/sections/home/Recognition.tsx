import { ArrowRight } from 'lucide-react'
import { RecognitionRow } from '~/components/cards/RecognitionRow'
import { ButtonLink } from '~/components/ui/Button'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { recognition } from '~/content/recognition'
import { useLocale } from '~/i18n/useLocale'

export function Recognition() {
  const { t } = useLocale()
  return (
    <section aria-labelledby="recognition-title" className="section-y">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="recognition-title" eyebrow={t('home.recognition.eyebrow')} title={t('home.recognition.title')} />
          <ButtonLink to="/recognition/" variant="outline">{t('cta.recognition')} <ArrowRight aria-hidden /></ButtonLink>
        </div>
        <ol className="mt-14 border-b border-line">
          {recognition.filter((r) => r.featured).map((r) => <RecognitionRow key={r.id} r={r} />)}
        </ol>
      </div>
    </section>
  )
}
