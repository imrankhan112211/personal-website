import { ArrowUpRight } from 'lucide-react'
import { LocalLink } from '~/components/ui/LocalLink'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { pillars } from '~/content/home'
import { useLocale } from '~/i18n/useLocale'

export function WhatIDo() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="do-title" className="on-ink section-y relative overflow-hidden bg-ink text-on-ink">
      <div aria-hidden className="bg-hairline-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeading id="do-title" tone="ink" eyebrow={t('home.do.eyebrow')} title={t('home.do.title')} />

        <ol className="mt-16 grid border-t border-on-ink-line md:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={p.id} className="reveal group relative border-b border-on-ink-line md:border-b-0 md:[&:not(:first-child)]:border-l">
              <LocalLink to={p.href} className="flex h-full flex-col py-10 md:px-8 md:py-12 md:first:pl-0">
                <span className="font-display text-sm font-semibold text-[#9db7f5]">0{i + 1}</span>
                <h3 className="t-h3 mt-6 text-white">{l(p.title)}</h3>
                <p className="mt-4 text-on-ink-muted">{l(p.body)}</p>
                <ul className="mt-6 space-y-2 text-sm text-on-ink">
                  {p.points.map((pt) => (
                    <li key={pt.en} className="flex items-center gap-3"><span aria-hidden className="h-px w-4 bg-white/30" />{l(pt)}</li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-medium text-white">
                  {t('cta.learn_more')}
                  <span className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors duration-200 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </span>
              </LocalLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
