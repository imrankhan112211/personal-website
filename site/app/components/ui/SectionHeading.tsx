import type { ReactNode } from 'react'
import { cn } from '~/lib/utils'

export function Eyebrow({ children, className, tone = 'light' }: { children: ReactNode; className?: string; tone?: 'light' | 'ink' }) {
  return (
    <p className={cn('t-eyebrow flex items-center gap-3', tone === 'light' ? 'text-accent' : 'text-[#9db7f5]', className)}>
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  )
}

/** Renders *words* in a title with the gradient accent; everything else stays plain text. */
export function Highlight({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g)
  return <>{parts.map((p, i) => (i % 2 ? <span key={i} className="text-gradient">{p}</span> : p))}</>
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  children,
  tone = 'light',
  className,
  as: H = 'h2',
}: {
  eyebrow: string
  title: string
  id?: string
  children?: ReactNode
  tone?: 'light' | 'ink'
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={cn('reveal max-w-3xl', className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <H id={id} className="t-h2 mt-5"><Highlight text={title} /></H>
      {children && <div className={cn('t-lead mt-5', tone === 'light' ? 'text-muted' : 'text-on-ink-muted')}>{children}</div>}
    </div>
  )
}
