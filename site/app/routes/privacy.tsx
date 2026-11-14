import type { Route } from './+types/privacy'
import { LegalPage } from '~/components/sections/shared/LegalPage'
import { privacySections } from '~/content/legal'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'

export function meta({ location }: Route.MetaArgs) {
  return [...metaFor('privacy', location.pathname), { name: 'robots', content: 'noindex, follow' }]
}

export default function Privacy() {
  const { t } = useLocale()
  return <LegalPage title={t('footer.privacy')} sections={privacySections} />
}
