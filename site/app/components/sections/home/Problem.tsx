import {
  ArrowRight, Bot, BriefcaseBusiness, Code2, Copyright, FileX, GraduationCap, Headset, Landmark, LockKeyhole,
  Radar, Share2, ShieldCheck, ShoppingBag, TrendingUp, UserX, Users, Video,
} from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { SectionHeading } from '~/components/ui/SectionHeading'
import { problems, type SolutionIcon } from '~/content/homeStory'
import { ctaLinks } from '~/content/navigation'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

const areaIcons = { business: BriefcaseBusiness, brand: ShieldCheck, cyber: LockKeyhole }
export const solutionIcons: Record<SolutionIcon, typeof Bot> = {
  share: Share2, growth: TrendingUp, code: Code2, bot: Bot, bag: ShoppingBag,
  userx: UserX, copyright: Copyright, filex: FileX, radar: Radar,
  headset: Headset, video: Video, users: Users, cap: GraduationCap, landmark: Landmark,
}

/** One colour per solution area, matching the site palette. */
const looks = {
  business: { head: 'on-ink fill-navy', chip: 'bg-accent-soft text-accent' },
  brand: { head: 'on-ink fill-blue', chip: 'bg-accent-soft text-accent' },
  cyber: { head: 'fill-gold', chip: 'bg-[#f6ecd6] text-[#7a5a14]' },
}

/** Three problems a business faces, each answered by one solution area. */
export function Problem() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="problem-title" className="container-x pb-2 pt-16 md:pt-24">
      <SectionHeading id="problem-title" eyebrow={t('problem.eyebrow')} title={t('problem.title')} className="mb-10 px-1" />
      <ul className="stagger bento md:grid-cols-3">
        {problems.map((p) => {
          const AreaIcon = areaIcons[p.icon]
          const k = looks[p.icon]
          const dark = p.icon !== 'cyber'
          return (
            <li key={p.id} className="lift tile flex flex-col overflow-hidden">
              {/* coloured header: the solution area, clearly named */}
              <div className={cn('relative overflow-hidden px-7 py-7 md:px-8', k.head)}>
                <div className="relative flex items-center gap-4">
                  <span className={cn('grid size-14 shrink-0 place-items-center rounded-2xl ring-1', dark ? 'bg-white/10 text-lime ring-white/15' : 'bg-white/55 text-[#4a3608] ring-white/60')}>
                    <AreaIcon aria-hidden className="size-7" />
                  </span>
                  <h3 className={cn('font-display text-xl font-semibold leading-tight', dark ? 'text-white' : 'text-[#2b2008]')}>{l(p.area)}</h3>
                </div>
                <p className={cn('relative mt-5 font-display text-lg font-semibold leading-snug', dark ? 'text-white' : 'text-[#2b2008]')}>{l(p.title)}</p>
                <p className={cn('relative mt-2 text-[0.9375rem] leading-relaxed', dark ? 'text-on-ink-muted' : 'text-[#4a3608]')}>{l(p.cost)}</p>
              </div>

              {/* solutions, each with its own icon */}
              <div className="flex flex-1 flex-col px-7 pb-7 pt-6 md:px-8">
                <p className="label-caps text-xs font-semibold text-muted">{t('problem.fix')}</p>
                <ul className="mt-3 divide-y divide-line">
                  {p.solutions.map((x) => {
                    const Icon = solutionIcons[x.icon]
                    return (
                      <li key={x.en} className="flex items-center gap-3 py-2.5">
                        <span className={cn('grid size-9 shrink-0 place-items-center rounded-xl', k.chip)}><Icon aria-hidden className="size-[1.125rem]" /></span>
                        <span className="text-[0.9375rem] font-medium leading-snug text-ink">{l(x)}</span>
                      </li>
                    )
                  })}
                </ul>
                <span className="flex-1" />
                <LocalLink to={p.href} className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong px-5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white">
                  {t('problem.cta')} <ArrowRight aria-hidden className="size-4" />
                </LocalLink>
              </div>
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
