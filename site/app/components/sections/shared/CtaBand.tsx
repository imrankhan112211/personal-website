import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { ctaLinks } from '~/content/navigation'
import { useLocale } from '~/i18n/useLocale'

export function CtaBand() {
  const { t } = useLocale()
  return (
    <section aria-labelledby="cta-title" className="container-x pb-4 pt-2">
      <div className="on-ink relative overflow-hidden rounded-[var(--radius-card)] bg-ink text-on-ink">
        <div aria-hidden className="bg-hairline-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden className="absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
        <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-lime/90 blur-2xl" />
        <div className="container-x relative py-24 text-center md:py-32">
          <h2 id="cta-title" className="t-h1 reveal mx-auto max-w-4xl text-white">{t('home.cta.title')}</h2>
          <p className="t-lead mx-auto mt-6 max-w-2xl text-on-ink-muted">{t('home.cta.body')}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink to={ctaLinks.consulting} variant="light" size="lg">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
            <ButtonLink to={ctaLinks.training} variant="outline-light" size="lg">{t('cta.invite')}</ButtonLink>
            <ButtonLink to={ctaLinks.contact} variant="outline-light" size="lg">{t('cta.contact')}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
