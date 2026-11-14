import { ArrowRight, Store, UserRound, Users } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Placeholder } from '~/components/ui/Placeholder'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { impactAreas } from '~/content/home'
import { caseStudies } from '~/content/projects'
import { useLocale } from '~/i18n/useLocale'

const icons = { 'public-figures': UserRound, businesses: Store, community: Users } as const

export function Impact() {
  const { t, l } = useLocale()
  const published = caseStudies.filter((c) => c.permission === 'granted')

  return (
    <section aria-labelledby="impact-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="tile grid gap-12 p-7 md:p-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-4">
          <Eyebrow>{t('home.impact.eyebrow')}</Eyebrow>
          <h2 id="impact-title" className="t-h2 mt-5">{t('home.impact.title')}</h2>
          <p className="t-lead mt-5 text-muted">{t('home.impact.body')}</p>
          <ButtonLink to="/impact/" className="mt-9">{t('cta.impact')} <ArrowRight aria-hidden /></ButtonLink>
        </div>

        <ul className="lg:col-span-8">
          {impactAreas.map((a) => {
            const Icon = icons[a.id as keyof typeof icons]
            const cs = published.find((c) => c.area === a.id)
            return (
              <li key={a.id} className="reveal grid gap-5 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[auto_1fr] sm:gap-7 lg:first:pt-2">
                <span className="grid size-14 place-items-center rounded-2xl bg-lime text-on-lime"><Icon aria-hidden className="size-6" /></span>
                <div>
                  <h3 className="t-h3 text-ink">{l(a.title)}</h3>
                  <p className="mt-2 text-muted">{l(a.body)}</p>
                  <div className="mt-4">
                    {cs ? (
                      <p className="text-sm font-medium text-ink">{l(cs.title)}</p>
                    ) : (
                      <Placeholder label="[INSERT APPROVED CASE STUDY · CLIENT PERMISSION REQUIRED]" />
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
