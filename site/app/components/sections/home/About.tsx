import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { aboutIntro, focusAreas } from '~/content/home'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'

export function About() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="about-title" className="section-y border-t border-line bg-surface">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="reveal lg:sticky lg:top-28">
            <Eyebrow>{t('home.about.eyebrow')}</Eyebrow>
            <h2 id="about-title" className="t-h2 mt-5">{t('home.about.title')}</h2>
            <blockquote className="mt-10 border-l-2 border-accent pl-6">
              <p className="t-serif text-[clamp(1.4rem,1.15rem+0.9vw,1.85rem)] leading-snug text-ink">{l(person.supporting)}</p>
            </blockquote>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal space-y-6 text-[1.0625rem] leading-[1.75] text-text md:text-lg">
            {aboutIntro.map((p, i) => (
              <p key={i} className={i === 0 ? 't-lead font-medium text-ink' : undefined}>
                {l(p)}
              </p>
            ))}
          </div>

          <div className="reveal mt-12 border-t border-line pt-8">
            <p className="t-eyebrow text-muted">{t('home.focus.label')}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <li key={f.en} className="rounded-full border border-line px-4 py-2 text-sm text-text">{l(f)}</li>
              ))}
            </ul>
          </div>

          <ButtonLink to="/about/" variant="link" className="mt-10 text-base">
            {t('cta.more_about')} <ArrowRight aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
