import { ArrowRight, Check } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { ctaLinks } from '~/content/navigation'
import { finalCta } from '~/content/homeStory'
import { useLocale } from '~/i18n/useLocale'

/** `detailed` adds what the first call covers and an honest promise (used on the homepage). */
export function CtaBand({ detailed = false }: { detailed?: boolean }) {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="cta-title" className="container-x pb-4 pt-2">
      <div className="on-ink relative overflow-hidden rounded-[var(--radius-card)] bg-ink text-on-ink">
        <div aria-hidden className="bg-hairline-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden className="absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
        <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-lime/90 blur-2xl" />
        <div className="container-x relative py-24 text-center md:py-32">
          <h2 id="cta-title" className="t-h1 reveal mx-auto max-w-4xl text-white">{t('home.cta.title')}</h2>
          <p className="t-lead mx-auto mt-6 max-w-2xl text-on-ink-muted">{t('home.cta.body')}</p>
          {detailed && (
            <>
              <p className="mt-10 text-sm font-semibold label-caps uppercase tracking-[0.14em] text-lime">{t('cta.covers')}</p>
              <ul className="mx-auto mt-4 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
                {finalCta.covers.map((c) => (
                  <li key={c.en} className="flex gap-2.5 rounded-2xl bg-white/[0.06] p-4 text-[0.9375rem] text-white ring-1 ring-inset ring-white/10">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />{l(c)}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink to={ctaLinks.consulting} variant="light" size="lg">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
            <ButtonLink to={ctaLinks.training} variant="outline-light" size="lg">{t('cta.invite')}</ButtonLink>
            <ButtonLink to={ctaLinks.contact} variant="outline-light" size="lg">{t('cta.contact')}</ButtonLink>
          </div>
          {detailed && <p className="mx-auto mt-8 max-w-2xl text-sm italic text-on-ink-muted">{l(finalCta.honest)}</p>}
        </div>
      </div>
    </section>
  )
}
