import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useState } from 'react'
import type { Route } from './+types/biography'
import { PageHero } from '~/components/sections/shared/PageHero'
import { Badge } from '~/components/ui/Badge'
import { ButtonLink } from '~/components/ui/Button'
import { Placeholder, SHOW_PLACEHOLDERS } from '~/components/ui/Placeholder'
import { longBio, shortBio, aboutChapters, profileFaqs } from '~/content/about'
import { Faq, faqSchema } from '~/components/sections/shared/Faq'
import { expertise } from '~/content/home'
import { ctaLinks } from '~/content/navigation'
import { person, SITE_URL } from '~/content/person'
import { recognition } from '~/content/recognition'
import { media } from '~/content/media'
import { LocalLink } from '~/components/ui/LocalLink'
import { ventures } from '~/content/ventures'
import { localeFromPath } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { profilePageSchema } from '~/lib/schema'
import { cn } from '~/lib/utils'
import { formatPartialDate } from '~/lib/dates'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('biography', location.pathname, [profilePageSchema(localeFromPath(location.pathname), '/about/biography/'), faqSchema(profileFaqs, localeFromPath(location.pathname))])
}

export default function Biography() {
  const { t, l, locale } = useLocale()
  const socials = person.socials.filter((s) => s.url)
  const chapter = (id: string) => aboutChapters.find((c) => c.id === id)!

  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.about'), to: '/about/' }, { label: t('nav.biography') }]} eyebrow={t('bio.eyebrow')} title={t('bio.title')} lead={t('bio.lead')} />

      <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        {/* Quick facts */}
        <aside className="lg:col-span-4" aria-labelledby="facts-title">
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 lg:sticky lg:top-28">
            <h2 id="facts-title" className="t-eyebrow text-accent">{t('bio.facts')}</h2>
            <dl className="mt-6 grid gap-5 text-[0.9375rem]">
              <Fact label={t('bio.fullname')}><span className="font-semibold text-ink">{person.name.en}</span><span className="block text-muted" lang="bn">{person.name.bn}</span></Fact>
              <Fact label={t('bio.nationality')}>{l(person.nationality)}</Fact>
              <Fact label={t('bio.born')}>{l(person.birthPlace)}</Fact>
              <Fact label={t('bio.education')}>{l(person.education)}</Fact>
              <Fact label={t('bio.protitle')}>{person.titleParts.map((p) => l(p)).join(' · ')}</Fact>
              <Fact label={t('bio.website')}><a href={SITE_URL} className="text-accent hover:underline">abdullahalimran.com</a></Fact>
              <Fact label={t('bio.ventures')}>{ventures.map((v) => v.name).join(', ')}</Fact>
              <Fact label={t('bio.socials')}>
                {socials.length ? (
                  <ul className="grid gap-1">{socials.map((s) => <li key={s.id}><a href={s.url!} rel="me noopener noreferrer" target="_blank" className="text-accent hover:underline">{s.label}</a></li>)}</ul>
                ) : (
                  <Placeholder label="[INSERT OFFICIAL SOCIAL PROFILE URLS]" />
                )}
              </Fact>
            </dl>
          </div>
        </aside>

        {/* Biography body */}
        <article className="lg:col-span-8">
          <BioSection id="short" title={t('bio.short')}>
            <ShortBio />
          </BioSection>

          <BioSection id="long" title={t('bio.long')}>
            {longBio ? longBio.map((p, i) => <p key={i}>{l(p)}</p>) : (
              <>
                {chapter('biography').body.map((p, i) => <p key={i}>{l(p)}</p>)}
                {SHOW_PLACEHOLDERS && <p><Placeholder label="[INSERT VERIFIED LONG BIOGRAPHY]" /></p>}
              </>
            )}
          </BioSection>

          <BioSection id="expertise" title={t('bio.expertise')}>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {expertise.map((e) => <li key={e.title.en} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-accent" />{l(e.title)}</li>)}
            </ul>
          </BioSection>

          <BioSection id="entrepreneurial" title={t('bio.entrepreneurial')}>
            <ul className="grid gap-3">
              {ventures.map((v) => (
                <li key={v.slug} className="rounded-2xl border border-line p-5">
                  <p className="flex flex-wrap items-center gap-3 font-display font-semibold text-ink">
                    {v.name}
                    {v.url && <a href={v.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-sm font-normal text-accent hover:underline">{new URL(v.url).host}<ArrowUpRight aria-hidden className="size-3.5" /></a>}
                  </p>
                  <p className="mt-1 text-[0.9375rem] text-muted">{l(v.description)}</p>
                  <p className="mt-3 text-sm">{v.role && v.roleVerified ? l(v.role) : <Placeholder label="[CONFIRM OFFICIAL ROLE]" />}</p>
                </li>
              ))}
            </ul>
          </BioSection>

          <BioSection id="advocacy" title={t('bio.advocacy')}>
            {chapter('advocacy').body.map((p, i) => <p key={i}>{l(p)}</p>)}
          </BioSection>

          <BioSection id="training" title={t('bio.training')}>
            {chapter('training').body.map((p, i) => <p key={i}>{l(p)}</p>)}
            {SHOW_PLACEHOLDERS && <p><Placeholder label="[INSERT VERIFIED LIST OF TRAINING ACTIVITIES]" /></p>}
          </BioSection>

          <BioSection id="recognition" title={t('bio.recognition')}>
            <ul className="grid gap-3">
              {recognition.map((r) => (
                <li key={r.id} className="flex flex-wrap items-center gap-3">
                  <Badge tone={r.type === 'nomination' ? 'outline' : r.type === 'award' ? 'success' : 'neutral'}>{t(`rtype.${r.type}`)}</Badge>
                  <span className="font-medium text-ink">{l(r.title)}</span>
                  {r.date ? <time dateTime={r.date} className="text-sm text-muted">{formatPartialDate(r.date, locale)}</time> : <Placeholder label="[INSERT VERIFIED DATE]" />}
                </li>
              ))}
            </ul>
          </BioSection>

          <BioSection id="media" title={t('bio.media')}>
            <ul className="grid gap-2 text-base">
              {[...media].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8).map((m) => (
                <li key={m.id} className="flex flex-wrap gap-x-2">
                  <span className="font-semibold text-ink">{m.outlet}:</span>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" lang={m.language} className="text-accent underline-offset-4 hover:underline">{m.headline}</a>
                  <span className="text-muted">({formatPartialDate(m.date, locale)})</span>
                </li>
              ))}
            </ul>
            <p><LocalLink to="/media/" className="font-medium text-ink underline decoration-line-strong underline-offset-[6px] hover:text-accent">{t('bio.media.all')} ({media.length})</LocalLink></p>
          </BioSection>

          <BioSection id="faq" title={t('bio.faq')}>
            <Faq items={profileFaqs} />
          </BioSection>

          <div className="mt-14 flex flex-wrap gap-3">
            <ButtonLink to="/contact/?type=media">{t('media.press.cta')}</ButtonLink>
            <ButtonLink to={ctaLinks.consulting} variant="outline">{t('cta.book')}</ButtonLink>
          </div>
        </article>
      </div>
    </main>
  )
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-text">{children}</dd>
    </div>
  )
}

function BioSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`bio-${id}`} className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 id={`bio-${id}`} className="t-h3 text-ink">{title}</h2>
      <div className="mt-5 space-y-4 text-[1.0625rem] leading-[1.8] text-text">{children}</div>
    </section>
  )
}

function ShortBio() {
  const { t, l } = useLocale()
  const [copied, setCopied] = useState(false)
  const text = l(shortBio)
  const words = text.split(/\s+/).filter(Boolean).length
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard blocked — text remains selectable */ }
  }
  return (
    <div className="rounded-2xl bg-mist p-6">
      <p className="t-lead text-ink">{text}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <span>{words} {t('bio.words')}</span>
        <button type="button" onClick={copy} className={cn('inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 font-medium transition-colors', copied ? 'border-success/40 bg-success-soft text-success' : 'border-line-strong bg-surface text-ink hover:border-ink')}>
          {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
          <span aria-live="polite">{copied ? t('bio.copied') : t('bio.copy')}</span>
        </button>
      </div>
    </div>
  )
}
