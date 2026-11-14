import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'
import { Eyebrow } from './SectionHeading'

/** Two-column editorial block: sticky label/heading on the left, content on the right. */
export function SplitSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  bg = 'paper',
}: {
  id?: string
  eyebrow: string
  title: string
  intro?: ReactNode
  children: ReactNode
  className?: string
  bg?: 'paper' | 'surface' | 'mist'
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn('section-y border-t border-line', bg === 'surface' && 'bg-surface', bg === 'mist' && 'bg-mist', className)}
    >
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="reveal lg:sticky lg:top-28">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={id ? `${id}-title` : undefined} className="t-h2 mt-5">{title}</h2>
            {intro && <div className="mt-5 text-muted">{intro}</div>}
          </div>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('reveal space-y-5 text-[1.0625rem] leading-[1.8] text-text md:text-lg [&_strong]:font-semibold [&_strong]:text-ink', className)}>{children}</div>
}
