import { ArrowRight, Quote } from 'lucide-react'
import type { Route } from './+types/impact'
import { EmptyState } from '~/components/sections/shared/EmptyState'
import { PageHero } from '~/components/sections/shared/PageHero'
import { CtaBand } from '~/components/sections/shared/CtaBand'
import { ButtonLink } from '~/components/ui/Button'
import { ImageSlot, Placeholder, SHOW_PLACEHOLDERS } from '~/components/ui/Placeholder'
import { SplitSection } from '~/components/ui/Section'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { Reviews } from '~/components/sections/shared/Reviews'
import { caseStudies, type CaseStudy } from '~/content/projects'
import { clientSegments, communityActivities, communityThemes } from '~/content/impact'
import { ctaLinks } from '~/content/navigation'
import { testimonials } from '~/content/testimonials'
import { useLocale } from '~/i18n/useLocale'
import type { UiKey } from '~/i18n/ui'
import { metaFor } from '~/lib/page'
import { formatPartialDate } from '~/lib/dates'
import { Img } from '~/components/ui/Img'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('impact', location.pathname)
}

const csFields: { key: keyof CaseStudy; label: UiKey }[] = [
  { key: 'overview', label: 'cs.overview' },
  { key: 'clientContext', label: 'cs.context' },
  { key: 'problem', label: 'cs.problem' },
  { key: 'contribution', label: 'cs.contribution' },
  { key: 'solution', label: 'cs.solution' },
  { key: 'outcome', label: 'cs.outcome' },
]

export default function Impact() {
  const { t, l, locale } = useLocale()
  const cases = caseStudies.filter((c) => c.permission === 'granted')
  const quotes = testimonials.filter((q) => q.permission === 'granted')

  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.impact') }]} eyebrow={t('impact.eyebrow')} title={t('impact.eyebrow')} lead={t('impact.lead')}>
        <ButtonLink to={ctaLinks.consulting}>{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
      </PageHero>

      {/* Professional client portfolio */}
      <SplitSection id="clients" eyebrow={t('impact.clients.eyebrow')} title={t('impact.clients.title')}>
        <ul className="reveal flex flex-wrap gap-2">
          {clientSegments.map((s) => <li key={s.id} className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink">{l(s.title)}</li>)}
        </ul>

        {(cases.length > 0 || SHOW_PLACEHOLDERS) && <h3 className="t-h3 mt-14 text-ink">{t('impact.cases.title')}</h3>}
        {cases.length ? (
          <div className="mt-6 grid gap-6">{cases.map((c) => <CaseStudyCard key={c.slug} c={c} />)}</div>
        ) : SHOW_PLACEHOLDERS && (
          <div className="reveal mt-6 rounded-[var(--radius-card)] border border-dashed border-line-strong bg-surface/60 p-7 md:p-9">
            <p className="text-muted">{t('impact.cases.empty')}</p>
            <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {[...csFields.map((f) => f.label), 'cs.testimonial' as const, 'cs.source' as const].map((k, i) => (
                <li key={k} className="flex items-center gap-3 bg-surface px-4 py-3.5 text-sm text-ink">
                  <span className="font-display text-xs font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>{t(k)}
                </li>
              ))}
            </ol>
            <Placeholder className="mt-6" label="[INSERT APPROVED CASE STUDY · CLIENT PERMISSION REQUIRED]" />
          </div>
        )}
      </SplitSection>

      {/* Social impact */}
      <SplitSection id="community" eyebrow={t('impact.community.eyebrow')} title={t('impact.community.title')} bg="surface">
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
          {communityThemes.map((c) => (
            <li key={c.id} className="reveal bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{l(c.title)}</h3>
              <p className="mt-1 text-[0.9375rem] text-muted">{l(c.body)}</p>
            </li>
          ))}
          <li className="hidden bg-surface sm:block" />
        </ul>
        {communityActivities.length ? (
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {communityActivities.map((a) => (
              <li key={a.id} className="reveal overflow-hidden rounded-2xl bg-mist">
                {a.image && <Img src={a.image} alt={l(a.title)} sizes="(min-width: 640px) 30vw, 100vw" className="aspect-[4/3] w-full object-cover" />}
                <div className="p-4">
                  <p className="font-display font-semibold leading-snug text-ink">{l(a.title)}</p>
                  {(a.organization || a.date) && <p className="mt-1 text-sm text-muted">{[a.organization && l(a.organization), a.date && formatPartialDate(a.date, locale)].filter(Boolean).join(' · ')}</p>}
                  {a.sourceUrl && <a href={a.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-sm font-medium text-accent hover:underline">{t('label.source')} ↗</a>}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="reveal mt-8 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => <ImageSlot key={n} label={`[INSERT DOCUMENTED ACTIVITY ${n} · PHOTO + SOURCE]`} className="aspect-[4/3] rounded-2xl" />)}
          </div>
        )}
        {communityActivities.length === 0 && <p className="mt-4 text-sm text-muted">{t('impact.community.empty')}</p>}
      </SplitSection>

      {/* Reviews & testimonials */}
      <section id="testimonials" aria-labelledby="testimonials-title" className="container-x pb-2 pt-3">
        <div className="mb-4 rounded-[var(--radius-card)] bg-surface p-7 md:p-10">
          <Eyebrow>{t('impact.testimonials.eyebrow')}</Eyebrow>
          <h2 id="testimonials-title" className="t-h2 mt-5">{t('impact.testimonials.title')}</h2>
        </div>
        {quotes.length > 0 && (
          <ul className="mb-4 grid gap-4 md:grid-cols-2">
            {quotes.map((q) => (
              <li key={q.id}>
                <figure className="h-full rounded-[var(--radius-card)] bg-surface p-7">
                  <Quote aria-hidden className="size-6 text-accent" />
                  <blockquote className="mt-4 font-display text-xl font-semibold leading-snug text-ink">“{l(q.quote)}”</blockquote>
                  <figcaption className="mt-6 text-sm"><span className="font-semibold text-ink">{q.name}</span> · <span className="text-muted">{l(q.role)}</span></figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
        <Reviews />
      </section>

      <div className="pt-16" />
      <CtaBand />
    </main>
  )
}

/** Reusable case study layout — renders all eight parts of a case study. */
function CaseStudyCard({ c }: { c: CaseStudy }) {
  const { t, l } = useLocale()
  return (
    <article className="reveal rounded-[var(--radius-card)] border border-line bg-surface p-7 md:p-9">
      <h4 className="t-h3 text-ink">{l(c.title)}</h4>
      <dl className="mt-6 grid gap-5 md:grid-cols-2">
        {csFields.map((f) => (
          <div key={f.key} className="border-t border-line pt-4">
            <dt className="text-xs font-semibold text-muted">{t(f.label)}</dt>
            <dd className="mt-2 text-text">{l(c[f.key] as { en: string; bn?: string })}</dd>
          </div>
        ))}
      </dl>
      {c.sources.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-3 text-sm">{c.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{s.label}</a></li>)}</ul>
      )}
    </article>
  )
}
