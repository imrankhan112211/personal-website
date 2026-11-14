import { ImageIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

/**
 * Clearly labelled slot for content that is not yet verified or supplied.
 * Search the codebase for `data-placeholder` / "[INSERT" to find every one.
 */
export function Placeholder({ label, className, tone = 'light' }: { label: string; className?: string; tone?: 'light' | 'ink' }) {
  return (
    <span
      data-placeholder
      className={cn(
        'inline-flex items-center rounded-md border border-dashed px-2 py-0.5 font-mono text-[0.72rem] leading-relaxed tracking-tight',
        tone === 'light' ? 'border-amber/40 bg-amber-soft/60 text-amber' : 'border-white/25 bg-white/5 text-on-ink-muted',
        className,
      )}
    >
      {label}
    </span>
  )
}

/** Image-shaped placeholder that keeps layout space reserved (no CLS when the real image arrives). */
export function ImageSlot({ label, className, children, tone = 'light' }: { label: string; className?: string; children?: ReactNode; tone?: 'light' | 'ink' }) {
  return (
    <div
      data-placeholder
      role="img"
      aria-label={label}
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        tone === 'light' ? 'bg-mist text-muted' : 'bg-ink-2 text-on-ink-muted',
        className,
      )}
    >
      {children ?? (
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <ImageIcon aria-hidden className="size-5" />
          <span className="font-mono text-[0.7rem] leading-snug">{label}</span>
        </div>
      )}
    </div>
  )
}
