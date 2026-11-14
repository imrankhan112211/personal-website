import { ArrowLeft } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { useLocale } from '~/i18n/useLocale'

export function meta() {
  return [{ title: 'Page not found — Abdullah Al Imran' }, { name: 'robots', content: 'noindex' }]
}

export default function NotFound() {
  const { t } = useLocale()
  return (
    <main id="main" className="container-x section-y">
      <p className="t-eyebrow text-accent">404</p>
      <h1 className="t-h1 mt-4 text-ink">{t('404.title')}</h1>
      <p className="t-lead mt-5 max-w-xl text-muted">{t('404.body')}</p>
      <ButtonLink to="/" className="mt-10"><ArrowLeft aria-hidden /> {t('stub.back')}</ButtonLink>
    </main>
  )
}
