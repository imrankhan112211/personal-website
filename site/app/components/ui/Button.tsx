import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

export const buttonStyles = cva(
  'group/btn inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,color,border-color,transform] duration-200 ease-[var(--ease-out-soft)] active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-ink text-on-ink hover:bg-ink-3',
        accent: 'bg-accent text-white hover:bg-accent-strong',
        outline: 'border border-line-strong bg-transparent text-text hover:border-ink hover:bg-surface',
        light: 'bg-white text-ink hover:bg-mist',
        'outline-light': 'border border-white/25 text-on-ink hover:border-white/60 hover:bg-white/5',
        ghost: 'text-text hover:bg-mist',
        link: 'min-h-0 rounded-none px-0 text-text underline decoration-line-strong decoration-1 underline-offset-[6px] hover:decoration-accent hover:text-accent',
      },
      size: {
        md: 'px-5 text-[0.9375rem]',
        lg: 'h-13 px-7 text-base',
        sm: 'min-h-9 px-4 text-sm',
        icon: 'size-11 p-0',
      },
    },
    compoundVariants: [{ variant: 'link', className: 'px-0' }],
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type StyleProps = VariantProps<typeof buttonStyles> & { className?: string; children?: ReactNode }

/** Internal link — automatically localized to the current language. */
export function ButtonLink({ to, variant, size, className, children, ...rest }: StyleProps & { to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  const { href } = useLocale()
  const external = /^(https?:|mailto:|tel:)/.test(to)
  const cls = cn(buttonStyles({ variant, size }), className)
  if (external)
    return (
      <a href={to} className={cls} target={to.startsWith('http') ? '_blank' : undefined} rel={to.startsWith('http') ? 'noopener noreferrer' : undefined} {...rest}>
        {children}
      </a>
    )
  return (
    <Link to={href(to)} className={cls} {...rest}>
      {children}
    </Link>
  )
}

export function Button({ variant, size, className, ...rest }: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...rest} />
}
