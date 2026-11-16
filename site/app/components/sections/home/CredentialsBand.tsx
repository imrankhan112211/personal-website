import { Award, Check } from 'lucide-react'
import { credentials, peopleTrained } from '~/content/homeStory'
import { ventures } from '~/content/ventures'
import { media } from '~/content/media'
import { publicPosts } from '~/content/reviews'
import { useLocale } from '~/i18n/useLocale'

/** Navy band under the hero: credentials, four real numbers, and client countries. Numbers come from the data files. */
export function CredentialsBand() {
  const { t, l, locale } = useLocale()
  const num = (n: number) => n.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')
  const stats = [
    { value: num(publicPosts.length), label: t('stats.thanks') },
    { value: num(media.length), label: t('stats.media') },
    { value: `${num(peopleTrained)}+`, label: t('stats.trained') },
    { value: num(ventures.length), label: t('stats.ventures') },
  ]
  return (
    <section aria-label={t('stats.label')} className="container-x pb-2 pt-4">
      <div className="tile on-ink fill-navy relative overflow-hidden px-6 py-8 md:px-12 md:py-10">
        <span aria-hidden className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-lime/15 blur-3xl" />
        <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-on-ink-muted">
          {credentials.map((c, i) => (
            <li key={c.label.en} className="inline-flex items-center gap-2">
              {i === 0 ? <Award aria-hidden className="size-4 text-lime" /> : <Check aria-hidden className="size-4 text-lime" />}
              <span className={i === 0 ? 'font-semibold text-white' : undefined}>{l(c.label)}</span>
            </li>
          ))}
        </ul>
        <dl className="relative mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">{s.value}</dd>
              <dd className="mx-auto mt-2 max-w-[14rem] text-sm leading-snug text-on-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
