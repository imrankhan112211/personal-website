import { ArrowRight, ArrowUpRight, GraduationCap, ShieldCheck, Workflow } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { services } from '~/content/home'
import { framework } from '~/content/homeStory'
import { ventures } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'
import { withUtm } from '~/lib/utm'
import { cn } from '~/lib/utils'

const icons = { protect: ShieldCheck, automate: Workflow, educate: GraduationCap }

/** One look per pillar: navy (Protect), steel blue (Automate), sky (Educate). */
const looks = {
  protect: { card: 'on-ink fill-navy', icon: 'bg-white/10 text-lime', muted: 'text-on-ink-muted', dot: 'bg-lime', btn: 'light' as const, link: 'text-white', chip: 'bg-white/10 text-white hover:bg-white/20', line: 'border-white/15' },
  automate: { card: 'on-ink fill-blue', icon: 'bg-white/10 text-lime', muted: 'text-on-ink-muted', dot: 'bg-lime', btn: 'light' as const, link: 'text-white', chip: 'bg-white/10 text-white hover:bg-white/20', line: 'border-white/15' },
  educate: { card: 'fill-sky ring-1 ring-inset ring-accent/15', icon: 'bg-white text-accent', muted: 'text-muted', dot: 'bg-accent', btn: 'primary' as const, link: 'text-ink', chip: 'bg-white text-ink ring-1 ring-inset ring-accent/15 hover:ring-accent/40', line: 'border-accent/15' },
}

/**
 * The Digital Trust Framework — three pillars, each with its service (what you can ask for)
 * and the ventures behind it. Replaces a separate services list and ventures list.
 */
export function WhatIDo() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="do-title" className="container-x pb-2 pt-16 md:pt-24">
      <SectionHeading id="do-title" eyebrow={t('home.do.eyebrow')} title={t('home.do.title')} className="mb-10 px-1">
        {t('framework.lead')}
      </SectionHeading>
      <ul className="stagger bento md:grid-cols-3">
        {framework.map((p) => {
          const s = services.find((x) => x.id === p.service)!
          const Icon = icons[p.id]
          const k = looks[p.id]
          const vs = p.ventures.map((slug) => ventures.find((v) => v.slug === slug)).filter(Boolean)
          return (
            <li key={p.id} className={cn('lift tile flex flex-col p-7 md:p-9', k.card)}>
              <div className="flex items-center gap-3">
                <span className={cn('grid size-12 place-items-center rounded-2xl', k.icon)}><Icon aria-hidden className="size-6" /></span>
                <span className="font-display text-sm font-bold label-caps uppercase tracking-[0.16em]">{l(p.name)}</span>
              </div>
              <h3 className="t-h3 mt-7">{l(s.title)}</h3>
              <p className={cn('mt-3 text-[1.0625rem] leading-relaxed', k.muted)}>{l(p.line)}</p>
              <div className={cn('mt-7 border-t pt-5', k.line)}>
                <p className={cn('text-xs font-semibold label-caps uppercase tracking-[0.14em]', k.muted)}>{t('framework.through')}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {vs.map((v) => (
                    <li key={v!.slug}>
                      {v!.url ? (
                        <a href={withUtm(v!.url)} target="_blank" rel="noopener noreferrer" className={cn('inline-flex min-h-9 items-center gap-1 rounded-full px-3 text-sm font-medium transition-colors', k.chip)}>
                          {v!.name}{v!.alsoKnownAs?.length ? ` · ${v!.alsoKnownAs.map((a) => a.name).join(', ')}` : ''} <ArrowUpRight aria-hidden className="size-3.5" />
                        </a>
                      ) : (
                        <span className={cn('inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-sm font-medium', k.chip)}>{v!.name} <span className="text-[0.6875rem] opacity-75">· {t('status.developing')}</span></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                <ButtonLink to={s.cta.href} variant={k.btn}>{t(s.cta.key)} <ArrowRight aria-hidden /></ButtonLink>
                <LocalLink to={s.href} className={cn('text-sm font-medium underline-offset-4 hover:underline', k.link)}>
                  {t('cta.learn_more')}<span className="sr-only"> — {l(s.title)}</span>
                </LocalLink>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
