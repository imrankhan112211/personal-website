import { ArrowRight, Briefcase, Code2, Presentation } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { services } from '~/content/home'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

const icons = { consulting: Briefcase, training: Presentation, services: Code2 }

/** One fill per card: navy (consulting), royal blue (training), sky (technology). */
const looks = [
  { card: 'on-ink fill-navy', icon: 'bg-white/10 text-lime', muted: 'text-on-ink-muted', dot: 'bg-lime', btn: 'light' as const, link: 'text-white' },
  { card: 'on-ink fill-blue', icon: 'bg-white/10 text-lime', muted: 'text-on-ink-muted', dot: 'bg-lime', btn: 'light' as const, link: 'text-white' },
  { card: 'fill-sky ring-1 ring-inset ring-accent/15', icon: 'bg-white text-accent', muted: 'text-muted', dot: 'bg-accent', btn: 'primary' as const, link: 'text-ink' },
]

/** What I offer, each with a direct way to ask for it. */
export function WhatIDo() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="do-title" className="container-x pb-2 pt-16 md:pt-24">
      <SectionHeading id="do-title" eyebrow={t('home.do.eyebrow')} title={t('home.do.title')} className="mb-10 px-1" />
      <ul className="bento md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.id]
          const k = looks[i % looks.length]
          return (
            <li key={s.id} className={cn('reveal tile flex flex-col p-7 md:p-9', k.card)}>
              <span className={cn('grid size-12 place-items-center rounded-2xl', k.icon)}><Icon aria-hidden className="size-6" /></span>
              <h3 className="t-h3 mt-8">{l(s.title)}</h3>
              <p className={cn('mt-3', k.muted)}>{l(s.body)}</p>
              <ul className="mt-6 grid gap-2 text-[0.9375rem]">
                {s.points.map((pt) => (
                  <li key={pt.en} className="flex gap-2.5"><span aria-hidden className={cn('mt-2 size-1.5 shrink-0 rounded-full', k.dot)} />{l(pt)}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-9">
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
