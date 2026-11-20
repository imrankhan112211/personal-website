import { ArrowUpRight } from 'lucide-react'
import type { Route } from './+types/ventures'
import { PageHero } from '~/components/sections/shared/PageHero'
import { CtaBand } from '~/components/sections/shared/CtaBand'
import { Badge, StatusDot } from '~/components/ui/Badge'
import { Placeholder, SHOW_PLACEHOLDERS } from '~/components/ui/Placeholder'
import { ventures } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'
import { withUtm } from '~/lib/utm'
import { metaFor } from '~/lib/page'
import { organizationSchema } from '~/lib/schema'

export function meta({ location }: Route.MetaArgs) {
  const orgs = ventures.filter((v) => v.url).map((v) => organizationSchema({ name: v.name, url: v.url!, description: v.description.en, founder: v.roleVerified, foundingDate: v.founded, coFounders: v.coFounders, alsoKnownAs: v.alsoKnownAs }))
  return metaFor('ventures', location.pathname, orgs)
}

const statusTone = { active: 'success', developing: 'amber', confirm: 'neutral' } as const

export default function Ventures() {
  const { t, l, locale } = useLocale()
  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.ventures') }]} eyebrow={t('home.ventures.eyebrow')} title={t('home.ventures.title')} lead={t('ventures.lead')}>
        <nav aria-label={t('ventures.jump')} className="flex flex-wrap gap-2">
          {ventures.map((v) => (
            <a key={v.slug} href={`#${v.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink hover:border-ink">{v.name}</a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x py-16 md:py-24">
        <div className="grid gap-6">
          {ventures.map((v, i) => (
            <article key={v.slug} id={v.slug} aria-labelledby={`${v.slug}-t`} className="reveal scroll-mt-28 overflow-hidden rounded-[28px] border border-line bg-surface">
              <div className="grid lg:grid-cols-12">
                {/* Identity panel */}
                <div className={`relative flex flex-col justify-between gap-10 p-8 md:p-10 lg:col-span-5 ${i % 2 ? 'bg-mist' : 'on-ink bg-ink text-on-ink'}`}>
                  <div className="flex items-start justify-between gap-4">
                    {v.logo ? (
                      <img src={v.logo} alt={`${v.name} logo`} width={72} height={72} loading="lazy" className="size-18 rounded-2xl bg-white object-contain p-2" />
                    ) : (
                      <span data-placeholder title="[INSERT OFFICIAL LOGO]" className={`grid size-18 place-items-center rounded-2xl border border-dashed font-display text-2xl font-semibold ${i % 2 ? 'border-line-strong text-ink' : 'border-white/30 text-white'}`}>{v.name.slice(0, 1)}</span>
                    )}
                    <Badge tone={i % 2 ? statusTone[v.status] : 'ink'}><StatusDot />{t(`status.${v.status}`)}</Badge>
                  </div>
                  <div>
                    <span className={`font-display text-sm font-semibold ${i % 2 ? 'text-accent' : 'text-[#9db7f5]'}`}>0{i + 1}</span>
                    <h2 id={`${v.slug}-t`} className={`t-h2 mt-2 ${i % 2 ? 'text-ink' : 'text-white'}`}>{v.name}</h2>
                    <div className="mt-6">
                      {v.url ? (
                        <a href={withUtm(v.url)} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center gap-2 font-medium underline underline-offset-[6px] ${i % 2 ? 'text-ink decoration-line-strong hover:text-accent' : 'text-white decoration-white/30 hover:decoration-white'}`}>
                          {new URL(v.url).host} <ArrowUpRight aria-hidden className="size-4" /><span className="sr-only">({t('ventures.website')})</span>
                        </a>
                      ) : null}
                      {v.alsoKnownAs?.map((a) => (
                        <a key={a.url} href={withUtm(a.url)} target="_blank" rel="noopener noreferrer" className={`ml-5 inline-flex min-h-11 items-center gap-2 font-medium underline underline-offset-[6px] ${i % 2 ? 'text-ink decoration-line-strong hover:text-accent' : 'text-white decoration-white/30 hover:decoration-white'}`}>
                          {new URL(a.url).host} <ArrowUpRight aria-hidden className="size-4" />
                        </a>
                      ))}
                      {!v.url && (
                        <span className={i % 2 ? 'text-sm text-muted' : 'text-sm text-on-ink-muted'}>{t('ventures.nosite')}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid content-start gap-8 p-8 md:p-10 lg:col-span-7">
                  <p className="t-lead text-ink">{l(v.description)}</p>
                  <dl className="grid gap-8">
                  {(v.purpose || SHOW_PLACEHOLDERS) && <Detail label={t('ventures.purpose')}>{v.purpose ? l(v.purpose) : <Placeholder label="[INSERT VERIFIED PURPOSE]" />}</Detail>}
                  <Detail label={t('label.role')}>{v.role && v.roleVerified ? <span className="font-medium text-ink">{l(v.role)}</span> : <Placeholder label="[CONFIRM OFFICIAL ROLE]" />}</Detail>
                  {(v.activities?.length || SHOW_PLACEHOLDERS) && <Detail label={t('ventures.activities')}>
                    {v.activities?.length ? (
                      <ul className="grid gap-2">{v.activities.map((a) => <li key={a.en} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-accent" />{l(a)}</li>)}</ul>
                    ) : <Placeholder label="[INSERT KEY ACTIVITIES]" />}
                  </Detail>}
                  {v.founded && <Detail label={t('label.founded')}>{v.founded.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en', { useGrouping: false })}</Detail>}
                  {v.coFounders?.length ? <Detail label={t('label.cofounders')}>{v.coFounders.join(', ')}</Detail> : null}
                  <Detail label={t('label.status')}>{t(`status.${v.status}`)}</Detail>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CtaBand />
    </main>
  )
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-line pt-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <dt className="text-xs font-semibold text-muted">{label}</dt>
      <dd className="text-text">{children}</dd>
    </div>
  )
}
