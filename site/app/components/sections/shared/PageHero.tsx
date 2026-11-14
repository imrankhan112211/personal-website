import type { ReactNode } from 'react'
import { Breadcrumbs } from '~/components/layout/Breadcrumbs'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { cn } from '~/lib/utils'

/** Inner-page hero: breadcrumbs, eyebrow, H1, lead, optional actions and aside. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
  aside,
  tone = 'light',
}: {
  crumbs: { label: string; to?: string }[]
  eyebrow: string
  title: string
  lead?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  tone?: 'light' | 'ink'
}) {
  const ink = tone === 'ink'
  return (
    <section className={cn('relative overflow-hidden border-b', ink ? 'on-ink border-transparent bg-ink text-on-ink' : 'border-line')}>
      <div aria-hidden className={cn('absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]', ink ? 'bg-hairline-ink' : 'bg-hairline')} />
      <div className="container-x relative pb-16 pt-8 md:pb-24 md:pt-10">
        <Breadcrumbs items={crumbs} tone={tone} />
        <div className={cn('mt-12 grid gap-12 md:mt-16', aside && 'lg:grid-cols-12 lg:items-end')}>
          <div className={cn(aside && 'lg:col-span-7')}>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            <h1 className={cn('t-h1 mt-5 max-w-4xl', ink ? 'text-white' : 'text-ink')}>{title}</h1>
            {lead && <div className={cn('t-lead mt-6 max-w-2xl', ink ? 'text-on-ink-muted' : 'text-muted')}>{lead}</div>}
            {children && <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div>}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  )
}
