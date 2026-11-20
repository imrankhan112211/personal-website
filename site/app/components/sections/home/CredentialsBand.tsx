import { Check } from 'lucide-react'
import { credentials, stats as totals } from '~/content/homeStory'
import { useLocale } from '~/i18n/useLocale'
import { CountUp } from '~/components/ui/CountUp'

/** Navy band under the hero: credentials, four real numbers, and client countries. Numbers come from the data files. */
export function CredentialsBand() {
  const { t, l, locale } = useLocale()
  const num = (n: number) => n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')
  const stats = [
    { n: totals.thankedPublicly, suffix: '+', label: t('stats.thanks') },
    { n: totals.mediaReports, suffix: '+', label: t('stats.media') },
    { n: totals.peopleTrained, suffix: '+', label: t('stats.trained') },
    { n: totals.ventures, suffix: '+', label: t('stats.ventures') },
  ]
  return (
    <section aria-label={t('stats.label')} className="container-x pb-2 pt-4">
      <div className="tile on-ink fill-navy relative overflow-hidden px-6 py-8 md:px-12 md:py-10">
        <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-on-ink-muted">
          {credentials.map((c, i) => (
            <li key={c.label.en} className="inline-flex items-center gap-2">
              <Check aria-hidden className="size-4 text-lime" />
              <span className={i === 0 ? 'font-semibold text-white' : undefined}>{l(c.label)}</span>
            </li>
          ))}
        </ul>
        <dl className="stagger relative mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"><CountUp value={s.n} format={num} suffix={s.suffix} /></dd>
              <dd className="mx-auto mt-2 max-w-[14rem] text-sm leading-snug text-on-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
