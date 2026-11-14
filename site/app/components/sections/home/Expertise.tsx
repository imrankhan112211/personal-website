import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { expertise } from '~/content/home'
import { useLocale } from '~/i18n/useLocale'

export function Expertise() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="expertise-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="mb-10 grid gap-6 px-1 lg:grid-cols-12 lg:items-end">
        <div className="reveal lg:col-span-7">
          <Eyebrow>{t('home.expertise.eyebrow')}</Eyebrow>
          <h2 id="expertise-title" className="t-h2 mt-5">{t('home.expertise.title')}</h2>
        </div>
        <p className="text-muted lg:col-span-4 lg:col-start-9">{t('home.expertise.note')}</p>
      </div>
      <ol className="bento sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((e, i) => (
          <li key={e.title.en} className="reveal tile tile-hover flex flex-col p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-accent-soft font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-8 font-display text-lg font-semibold leading-snug tracking-tight text-ink">{l(e.title)}</h3>
            <p className="mt-2 text-[0.9375rem] text-muted">{l(e.body)}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 px-1"><ButtonLink to="/consulting/" variant="outline">{t('cta.consulting')} <ArrowRight aria-hidden /></ButtonLink></div>
    </section>
  )
}
