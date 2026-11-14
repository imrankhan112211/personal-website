import type { Locale } from '~/i18n/locales'

/** Formats "2023", "2023-06" or "2026-11-04" for display. Partial dates stay partial — never invent a day or month. */
export function formatPartialDate(value: string, locale: Locale): string {
  const loc = locale === 'bn' ? 'bn-BD' : 'en-GB'
  const [y, m, d] = value.split('-').map(Number)
  const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1))
  const opts: Intl.DateTimeFormatOptions = d ? { day: 'numeric', month: 'long', year: 'numeric' } : m ? { month: 'long', year: 'numeric' } : { year: 'numeric' }
  return date.toLocaleDateString(loc, { ...opts, timeZone: 'UTC' })
}
