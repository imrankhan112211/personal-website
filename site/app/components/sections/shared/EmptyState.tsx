import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

/** Elegant "nothing published yet" block — never filled with invented content. */
export function EmptyState({ icon: Icon, title, children, className, as: H = 'h3' }: { icon: LucideIcon; title: string; children?: ReactNode; className?: string; as?: 'h2' | 'h3' }) {
  return (
    <div className={cn('reveal rounded-[var(--radius-card)] border border-dashed border-line-strong bg-surface/60 px-6 py-14 text-center md:px-12', className)}>
      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-mist text-ink"><Icon aria-hidden className="size-6" /></span>
      <H className="t-h3 mx-auto mt-6 max-w-xl text-ink">{title}</H>
      {children && <div className="mx-auto mt-3 max-w-xl text-muted">{children}</div>}
    </div>
  )
}
