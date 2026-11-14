import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'

const badge = cva('inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium leading-none', {
  variants: {
    tone: {
      neutral: 'bg-mist text-muted',
      accent: 'bg-accent-soft text-accent-strong',
      success: 'bg-success-soft text-success',
      amber: 'bg-amber-soft text-amber',
      outline: 'border border-line-strong text-text',
      ink: 'bg-white/8 text-on-ink-muted ring-1 ring-inset ring-white/12',
    },
  },
  defaultVariants: { tone: 'neutral' },
})

export function Badge({ tone, className, ...rest }: VariantProps<typeof badge> & HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(badge({ tone }), className)} {...rest} />
}

export function StatusDot({ className }: { className?: string }) {
  return <span aria-hidden className={cn('size-1.5 rounded-full bg-current', className)} />
}
