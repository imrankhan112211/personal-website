import type { ComponentProps } from 'react'
import { Link } from 'react-router'
import { useLocale } from '~/i18n/useLocale'

/** <Link> that keeps the visitor in their current language. */
export function LocalLink({ to, ...rest }: Omit<ComponentProps<typeof Link>, 'to'> & { to: string }) {
  const { href } = useLocale()
  return <Link to={href(to)} {...rest} />
}
