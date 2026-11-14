import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { expertise } from '~/content/home'
import { useLocale } from '~/i18n/useLocale'

export function Expertise() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="expertise-title" className="section-y">
      <div className="container-x">
        <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>{t('home.expertise.eyebrow')}</Eyebrow>
            <h2 id="expertise-title" className="t-h2 mt-5">{t('home.expertise.title')}</h2>
          </div>
          <p className="text-muted lg:col-span-4 lg:col-start-9">{t('home.expertise.note')}</p>
        </div>

        <ol className="mt-14 grid gap-x-12 md:grid-cols-2">
          {expertise.map((e, i) => (
            <li key={e.title.en} className="reveal group grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-7 transition-colors">
              <span className="font-display text-sm font-semibold tabular-nums text-muted transition-colors duration-200 group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{l(e.title)}</h3>
                <p className="mt-2 text-muted">{l(e.body)}</p>
              </div>
            </li>
          ))}
        </ol>

        <ButtonLink to="/consulting/" variant="outline" className="mt-10">
          {t('cta.consulting')} <ArrowRight aria-hidden />
        </ButtonLink>
      </div>
    </section>
  )
}
