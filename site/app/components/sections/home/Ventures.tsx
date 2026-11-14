import { ArrowRight } from 'lucide-react'
import { VentureCard } from '~/components/cards/VentureCard'
import { ButtonLink } from '~/components/ui/Button'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { ventures } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'

export function Ventures() {
  const { t } = useLocale()
  return (
    <section aria-labelledby="ventures-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-1">
        <SectionHeading id="ventures-title" eyebrow={t('home.ventures.eyebrow')} title={t('home.ventures.title')} />
        <ButtonLink to="/ventures/" variant="outline">{t('cta.all_ventures')} <ArrowRight aria-hidden /></ButtonLink>
      </div>
      <ul className="bento md:grid-cols-2 xl:grid-cols-4">
        {ventures.map((v) => <li key={v.slug}><VentureCard v={v} /></li>)}
      </ul>
    </section>
  )
}
