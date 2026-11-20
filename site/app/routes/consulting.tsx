import { ArrowDown, ArrowRight, Ban, KeyRound, Scale, Target } from 'lucide-react'
import type { Route } from './+types/consulting'
import { InquiryForm } from '~/components/forms/InquiryForm'
import { Faq, faqSchema } from '~/components/sections/shared/Faq'
import { PageHero } from '~/components/sections/shared/PageHero'
import { buttonStyles } from '~/components/ui/Button'
import { Eyebrow, SectionHeading } from '~/components/ui/SectionHeading'
import { boundaries, consultingFaqs, consultingIntro, formats, process, serviceCategories } from '~/content/consulting'
import { pageMeta } from '~/content/pageMeta'
import { localeFromPath } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'

export function meta({ location }: Route.MetaArgs) {
  const locale = localeFromPath(location.pathname)
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pageMeta.consulting.lead!.en,
    serviceType: serviceCategories.map((c) => c.title.en),
    provider: { '@id': 'https://abdullahalimran.com/#person' },
    areaServed: 'Worldwide',
  }
  return metaFor('consulting', location.pathname, [service, faqSchema(consultingFaqs, locale)])
}

const boundaryIcons = [Scale, Ban, Target]

export default function Consulting() {
  const { t, l } = useLocale()
  return (
    <main id="main">
      <PageHero
        tone="ink"
        crumbs={[{ label: t('nav.consulting') }]}
        eyebrow={t('consult.eyebrow')}
        title={l(pageMeta.consulting.lead!)}
        lead={l(consultingIntro)}
      >
        <a href="#book" className={buttonStyles({ variant: 'light', size: 'lg' })}>{t('cta.book')} <ArrowRight aria-hidden /></a>
        <a href="#services" className={buttonStyles({ variant: 'outline-light', size: 'lg' })}>{t('consult.services')} <ArrowDown aria-hidden /></a>
      </PageHero>

      {/* Service categories */}
      <section id="services" aria-labelledby="services-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface">
          <h2 id="services-title" className="sr-only">{t('consult.services')}</h2>
          <nav aria-label={t('consult.jump')} className="reveal -mt-4 mb-16 flex flex-wrap gap-2">
            {serviceCategories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-ink">
                <span className="font-display text-xs text-accent">{c.number}</span>{l(c.title)}
              </a>
            ))}
          </nav>

          <div className="grid gap-6">
            {serviceCategories.map((c) => (
              <article key={c.id} id={c.id} aria-labelledby={`${c.id}-t`} className="reveal scroll-mt-28 grid gap-10 rounded-[28px] border border-line bg-surface p-7 md:p-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <span aria-hidden className="font-display text-5xl font-semibold text-[#6b8bd6]">{c.number}</span>
                  <h3 id={`${c.id}-t`} className="t-h3 mt-4 text-ink md:text-[1.75rem]">{l(c.title)}</h3>
                  <p className="mt-4 text-muted">{l(c.summary)}</p>
                  <div className="mt-8 rounded-2xl bg-mist p-5">
                    <p className="text-xs font-semibold text-muted">{t('consult.for')}</p>
                    <p className="mt-2 text-[0.9375rem] text-text">{l(c.forWhom)}</p>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xs font-semibold text-muted">{t('consult.services')}</p>
                  <ul className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
                    {c.services.map((s) => (
                      <li key={s.en} className="flex gap-3 border-b border-line py-3.5 text-[0.9375rem] text-ink">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />{l(s)}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-xs font-semibold text-muted">{t('consult.problems')}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.problems.map((p) => <li key={p.en} className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm text-accent-strong">{l(p)}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface">
          <SectionHeading id="process-title" eyebrow={t('consult.process.eyebrow')} title={t('consult.process.title')} />
          <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
            {process.map((s, i) => (
              <li key={i} className="reveal relative">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink font-display font-semibold text-white">{i + 1}</span>
                  {i < process.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-line-strong md:block" />}
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">{l(s.title)}</h3>
                <p className="mt-2 text-muted">{l(s.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formats + boundaries */}
      <section aria-labelledby="formats-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="reveal">
              <Eyebrow>{t('consult.formats.eyebrow')}</Eyebrow>
              <h2 id="formats-title" className="t-h2 mt-5">{t('consult.formats.title')}</h2>
            </div>
            <ul className="mt-10 border-t border-line">
              {formats.map((f) => (
                <li key={f.title.en} className="reveal border-b border-line py-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{l(f.title)}</h3>
                  <p className="mt-1 text-muted">{l(f.body)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="reveal rounded-[28px] bg-ink-2 p-8 text-on-ink md:p-10">
              <Eyebrow tone="ink">{t('consult.bounds.eyebrow')}</Eyebrow>
              <h2 className="t-h3 mt-5 text-white md:text-[1.75rem]">{t('consult.bounds.title')}</h2>
              <ul className="mt-8 grid gap-7">
                {boundaries.map((b, i) => {
                  const Icon = boundaryIcons[i]
                  return (
                    <li key={b.title.en} className="flex gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white"><Icon aria-hidden className="size-5" /></span>
                      <div>
                        <h3 className="font-display font-semibold text-white">{l(b.title)}</h3>
                        <p className="mt-1 text-[0.9375rem] text-on-ink-muted">{l(b.body)}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface grid gap-12 lg:grid-cols-12">
          <SectionHeading id="faq-title" className="lg:col-span-4" eyebrow={t('consult.faq.eyebrow')} title={t('consult.faq.title')} />
          <div className="reveal lg:col-span-7 lg:col-start-6"><Faq items={consultingFaqs} /></div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="book" aria-labelledby="book-title" className="container-x pb-2 pt-3 scroll-mt-20">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-mist grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="reveal lg:sticky lg:top-28">
              <Eyebrow>{t('consult.form.eyebrow')}</Eyebrow>
              <h2 id="book-title" className="t-h2 mt-5">{t('consult.form.title')}</h2>
              <p className="mt-5 text-muted">{t('consult.form.body')}</p>
              <p className="mt-8 flex gap-3 rounded-2xl border border-line bg-surface p-4 text-sm text-text">
                <KeyRound aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />{t('contact.sensitive')}
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <InquiryForm fixedType="consulting" />
          </div>
        </div>
      </section>
    </main>
  )
}
