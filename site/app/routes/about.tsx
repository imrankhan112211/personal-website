import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react'
import type { Route } from './+types/about'
import { RecognitionRow } from '~/components/cards/RecognitionRow'
import { PageHero } from '~/components/sections/shared/PageHero'
import { CtaBand } from '~/components/sections/shared/CtaBand'
import { Badge } from '~/components/ui/Badge'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { ImageSlot, Placeholder, SHOW_PLACEHOLDERS } from '~/components/ui/Placeholder'
import { Prose, SplitSection } from '~/components/ui/Section'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { aboutChapters, mission, profilePdf } from '~/content/about'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { recognition } from '~/content/recognition'
import { ventures } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { Img } from '~/components/ui/Img'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('about', location.pathname)
}

export default function About() {
  const { t, l } = useLocale()
  const [bio, ...rest] = aboutChapters
  const before = rest.slice(0, 3) // background, journey, entrepreneurship
  const after = rest.slice(3) // advocacy, experience, training

  return (
    <main id="main">
      {/* 1. Introduction */}
      <PageHero
        crumbs={[{ label: t('nav.about') }]}
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        lead={<p className="t-serif text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-snug text-ink">“{l(person.statement)}”</p>}
        aside={
          <figure className="relative mx-auto max-w-sm lg:ml-auto">
            {person.portraitCasual ? (
              <Img src={person.portraitCasual} alt={l(person.name)} width={1200} height={1500} className="aspect-[4/5] w-full rounded-[24px] object-cover" />
            ) : (
              <ImageSlot label="[INSERT APPROVED PORTRAIT]" className="aspect-[4/5] rounded-[24px] bg-mist" />
            )}
            <figcaption className="mt-4 text-sm text-muted">{l(person.title)}</figcaption>
          </figure>
        }
      >
        <ButtonLink to={ctaLinks.consulting}>{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
        <ButtonLink to="/about/biography/" variant="outline">{t('about.profile.bio')}</ButtonLink>
      </PageHero>

      {/* 2. Professional biography */}
      <Chapter c={bio} bg="surface" />
      {/* 3–5. Background, journey, entrepreneurship */}
      {before.map((c, i) => <Chapter key={c.id} c={c} bg={i % 2 ? 'surface' : 'paper'} />)}

      {/* 9. Ventures & leadership (placed after entrepreneurship for narrative flow) */}
      <SplitSection id="ventures" eyebrow={t('about.ventures.eyebrow')} title={t('about.ventures.title')} bg="mist">
        <ul className="grid gap-3">
          {ventures.map((v) => (
            <li key={v.slug} className="reveal flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-surface p-5 ring-1 ring-inset ring-line">
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-ink">{v.name}</p>
                <p className="mt-0.5 text-sm text-muted">{v.role && v.roleVerified ? l(v.role) : <Placeholder label="[CONFIRM OFFICIAL ROLE]" />}</p>
              </div>
              {v.url ? (
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline">
                  {new URL(v.url).host} <ArrowUpRight aria-hidden className="size-4" />
                </a>
              ) : (
                <Badge tone="amber">{t('status.developing')}</Badge>
              )}
            </li>
          ))}
        </ul>
        <ButtonLink to="/ventures/" variant="link" className="mt-8">{t('cta.all_ventures')} <ArrowRight aria-hidden /></ButtonLink>
      </SplitSection>

      {/* 6–8. Advocacy, social media security experience, training */}
      {after.map((c, i) => <Chapter key={c.id} c={c} bg={i % 2 ? 'surface' : 'paper'} />)}

      {/* 10. Recognition highlights */}
      <SplitSection id="recognition" eyebrow={t('about.recognition.eyebrow')} title={t('about.recognition.title')} bg="surface">
        <ol className="border-b border-line">{recognition.filter((r) => r.featured).map((r) => <RecognitionRow key={r.id} r={r} />)}</ol>
        <ButtonLink to="/recognition/" variant="link" className="mt-8">{t('cta.recognition')} <ArrowRight aria-hidden /></ButtonLink>
      </SplitSection>

      {/* 11. Mission */}
      <section aria-labelledby="mission-title" className="container-x pb-2 pt-3">
        <div className="on-ink relative overflow-hidden rounded-[var(--radius-card)] bg-ink px-6 py-20 text-on-ink md:py-28">
        <div aria-hidden className="bg-hairline-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container-x relative text-center">
          <Eyebrow tone="ink" className="justify-center">{t('about.mission.eyebrow')}</Eyebrow>
          <h2 id="mission-title" className="sr-only">{t('about.mission.eyebrow')}</h2>
          <p className="t-serif reveal mx-auto mt-8 max-w-4xl text-[clamp(1.75rem,1.2rem+2.2vw,3.25rem)] leading-[1.15] text-white">{l(mission)}</p>
        </div>
      </div>
      </section>

      {/* 12. Downloadable profile */}
      <section aria-labelledby="profile-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface">
          <div className="reveal grid gap-8 rounded-[28px] border border-line bg-surface p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-12">
            <span className="grid size-16 place-items-center rounded-2xl bg-accent-soft text-accent"><FileText aria-hidden className="size-7" /></span>
            <div>
              <p className="t-eyebrow text-accent">{t('about.profile.eyebrow')}</p>
              <h2 id="profile-title" className="t-h3 mt-2 text-ink">{t('about.profile.title')}</h2>
              <p className="mt-2 max-w-xl text-muted">{t('about.profile.body')}</p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink to="/about/biography/">{t('about.profile.bio')} <ArrowRight aria-hidden /></ButtonLink>
              {profilePdf && <ButtonLink to={profilePdf} variant="outline" download>{t('about.profile.download')}</ButtonLink>}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}

function Chapter({ c, bg }: { c: (typeof aboutChapters)[number]; bg: 'paper' | 'surface' }) {
  const { l, t } = useLocale()
  if (!c.body.length && !SHOW_PLACEHOLDERS) return null
  return (
    <SplitSection id={c.id} eyebrow={l(c.eyebrow)} title={l(c.title)} bg={bg}>
      <Prose>
        {c.body.map((p, i) => <p key={i} className={i === 0 ? 't-lead text-ink' : undefined}>{l(p)}</p>)}
        {c.placeholder && SHOW_PLACEHOLDERS && <p><Placeholder label={c.placeholder} /></p>}
      </Prose>
      {c.id === 'training' && (
        <LocalLink to="/training/" className="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-ink underline decoration-line-strong underline-offset-[6px] hover:text-accent hover:decoration-accent">
          {t('home.training.eyebrow')} <ArrowRight aria-hidden className="size-4" />
        </LocalLink>
      )}
    </SplitSection>
  )
}
