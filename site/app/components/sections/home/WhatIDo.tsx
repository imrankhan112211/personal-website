import { ArrowUpRight, Briefcase, GraduationCap, Rocket } from 'lucide-react'
import { LocalLink } from '~/components/ui/LocalLink'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { pillars } from '~/content/home'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

const styles = [
  { icon: Briefcase, cls: 'bg-surface text-ink', muted: 'text-muted', chip: 'bg-mist text-text' },
  { icon: GraduationCap, cls: 'bg-accent text-white', muted: 'text-white/80', chip: 'bg-white/12 text-white' },
  { icon: Rocket, cls: 'on-ink bg-ink text-white', muted: 'text-on-ink-muted', chip: 'bg-white/10 text-white' },
]

export function WhatIDo() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="do-title" className="container-x pb-2 pt-16 md:pt-24">
      <SectionHeading id="do-title" eyebrow={t('home.do.eyebrow')} title={t('home.do.title')} className="mb-10 px-1" />
      <ul className="bento md:grid-cols-3">
        {pillars.map((p, i) => {
          const s = styles[i]
          return (
            <li key={p.id} className="reveal">
              <LocalLink to={p.href} className={cn('tile tile-hover group flex h-full flex-col p-7 md:p-9', s.cls)}>
                <div className="flex items-center justify-between">
                  <s.icon aria-hidden className="size-7" />
                  <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="t-h3 mt-14">{l(p.title)}</h3>
                <p className={cn('mt-3', s.muted)}>{l(p.body)}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {p.points.map((pt) => <li key={pt.en} className={cn('rounded-full px-3 py-1.5 text-[0.8125rem]', s.chip)}>{l(pt)}</li>)}
                </ul>
              </LocalLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
