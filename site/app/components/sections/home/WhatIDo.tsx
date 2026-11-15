import { ArrowRight, Briefcase, GraduationCap, Mic } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { services } from '~/content/home'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

const icons = { consulting: Briefcase, training: GraduationCap, speaking: Mic }

/** What I offer, each with a direct way to ask for it. */
export function WhatIDo() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="do-title" className="container-x pb-2 pt-16 md:pt-24">
      <SectionHeading id="do-title" eyebrow={t('home.do.eyebrow')} title={t('home.do.title')} className="mb-10 px-1" />
      <ul className="bento md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.id]
          const dark = i === 0
          return (
            <li key={s.id} className={cn('reveal tile flex flex-col p-7 md:p-9', dark && 'on-ink bg-ink text-white')}>
              <Icon aria-hidden className={cn('size-7', dark ? 'text-lime' : 'text-accent')} />
              <h3 className="t-h3 mt-10">{l(s.title)}</h3>
              <p className={cn('mt-3', dark ? 'text-on-ink-muted' : 'text-muted')}>{l(s.body)}</p>
              <ul className="mt-6 grid gap-2 text-[0.9375rem]">
                {s.points.map((pt) => (
                  <li key={pt.en} className="flex gap-2.5"><span aria-hidden className={cn('mt-2 size-1.5 shrink-0 rounded-full', dark ? 'bg-lime' : 'bg-accent')} />{l(pt)}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-9">
                <ButtonLink to={s.cta.href} variant={dark ? 'accent' : 'primary'}>{t(s.cta.key)} <ArrowRight aria-hidden /></ButtonLink>
                <LocalLink to={s.href} className={cn('text-sm font-medium underline-offset-4 hover:underline', dark ? 'text-white' : 'text-ink')}>
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
