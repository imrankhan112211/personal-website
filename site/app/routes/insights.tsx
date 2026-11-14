import type { Route } from './+types/insights'
import { InsightsListing } from '~/components/sections/shared/InsightsListing'
import { PageHero } from '~/components/sections/shared/PageHero'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('insights', location.pathname)
}

export default function Insights() {
  const { t } = useLocale()
  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.insights') }]} eyebrow={t('ins.eyebrow')} title={t('home.insights.title')} lead={t('ins.lead')} />
      <InsightsListing />
    </main>
  )
}
