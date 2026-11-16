import { ArrowRight, Check, ShieldAlert, TrendingUp, VenetianMask } from 'lucide-react'
import { LocalLink } from '~/components/ui/LocalLink'
import { ButtonLink } from '~/components/ui/Button'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { problems } from '~/content/homeStory'
import { ctaLinks } from '~/content/navigation'
import { useLocale } from '~/i18n/useLocale'

const icons = { growth: TrendingUp, masks: VenetianMask, users: ShieldAlert }

/** The three situations people usually arrive with. */
export function Problem() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="problem-title" className="container-x pb-2 pt-16 md:pt-24">
      <SectionHeading id="problem-title" eyebrow={t('problem.eyebrow')} title={t('problem.title')} className="mb-10 px-1" />
      <ul className="bento md:grid-cols-3">
        {problems.map((p) => {
          const Icon = icons[p.icon]
          return (
            <li key={p.id} className="reveal tile flex flex-col p-7 md:p-9">
              <span className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent"><Icon aria-hidden className="size-6" /></span>
                <span className="label-caps text-xs font-semibold uppercase tracking-[0.14em] text-accent">{l(p.area)}</span>
              </span>
              <h3 className="t-h3 mt-7 text-ink">{l(p.title)}</h3>
              <p className="mt-3 text-muted">{l(p.cost)}</p>
              <div className="mt-6 flex-1 rounded-2xl bg-accent-soft p-5">
                <p className="label-caps text-xs font-semibold uppercase tracking-[0.14em] text-accent">{t('problem.fix')}</p>
                <ul className="mt-3 grid gap-2">
                  {p.solutions.map((x) => (
                    <li key={x.en} className="flex gap-2 text-[0.9375rem] leading-snug text-ink"><Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />{l(x)}</li>
                  ))}
                </ul>
              </div>
              <LocalLink to={p.href} className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent">
                {t('problem.cta')} <ArrowRight aria-hidden className="size-4" />
              </LocalLink>
            </li>
          )
        })}
      </ul>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-card)] bg-accent-soft px-6 py-5 md:px-9">
        <p className="font-display text-lg font-semibold text-ink">{t('problem.bridge')}</p>
        <ButtonLink to={ctaLinks.consulting}>{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
      </div>
    </section>
  )
}
