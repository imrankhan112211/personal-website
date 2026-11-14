import { Plus } from 'lucide-react'
import type { Localized } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'

/** Native <details> accordion: works without JavaScript and is fully crawlable. */
export function Faq({ items }: { items: { q: Localized; a: Localized }[] }) {
  const { l } = useLocale()
  return (
    <div className="border-t border-line">
      {items.map((f, i) => (
        <details key={i} className="group border-b border-line" open={i === 0}>
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            {l(f.q)}
            <Plus aria-hidden className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="pb-6 pr-10 text-muted">{l(f.a)}</p>
        </details>
      ))}
    </div>
  )
}

/** FAQPage schema from the same items rendered on the page. */
export function faqSchema(items: { q: Localized; a: Localized }[], locale: 'en' | 'bn') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: (locale === 'bn' && f.q.bn) || f.q.en,
      acceptedAnswer: { '@type': 'Answer', text: (locale === 'bn' && f.a.bn) || f.a.en },
    })),
  }
}
