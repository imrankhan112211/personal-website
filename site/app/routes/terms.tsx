import type { Route } from './+types/terms'
import { LegalPage } from '~/components/sections/shared/LegalPage'
import { termsSections } from '~/content/legal'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'

export function meta({ location }: Route.MetaArgs) {
  return [...metaFor('terms', location.pathname), { name: 'robots', content: 'noindex, follow' }]
}

export default function Terms() {
  const { t } = useLocale()
  return <LegalPage title={t('footer.terms')} sections={termsSections} />
}
