import { cn } from '~/lib/utils'

const palettes = [
  'bg-accent text-white',
  'bg-lime text-on-lime',
  'bg-ink text-white',
  'bg-accent-soft text-accent-strong',
  'bg-[#ffe1d6] text-[#7a2b12]',
  'bg-[#dff3ea] text-[#145c3d]',
]

export function initials(name: string) {
  const words = name.replace(/[^\p{L}\p{N}\s]/gu, ' ').trim().split(/\s+/).filter(Boolean)
  return ((words[0]?.[0] ?? '') + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase()
}

/** Image if available, otherwise coloured initials (stable colour per name). */
export function Avatar({ name, src, className }: { name: string; src?: string; className?: string }) {
  const tone = palettes[[...name].reduce((a, c) => a + c.codePointAt(0)!, 0) % palettes.length]
  return src ? (
    <img src={src} alt="" loading="lazy" decoding="async" className={cn('object-cover', className)} />
  ) : (
    <span aria-hidden className={cn('grid place-items-center font-display font-semibold', tone, className)}>{initials(name)}</span>
  )
}
