import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { aboutIntro } from '~/content/home'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'
import { Img } from '~/components/ui/Img'

export function About() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="about-title" className="container-x py-2">
      <div className="bento lg:grid-cols-3">
        <div className="reveal tile on-ink fill-navy relative overflow-hidden flex flex-col justify-between gap-8 p-7 md:p-10">
          <div>
            <p className="t-eyebrow text-lime">{t('home.about.eyebrow')}</p>
            <h2 id="about-title" className="t-h2 mt-5 text-white">{t('home.about.title')}</h2>
          </div>
          {person.portraitCasual && (
            <Img src={person.portraitCasual} alt={l(person.name)} sizes="(min-width: 1024px) 25vw, 90vw" className="aspect-[4/3] w-full rounded-2xl object-cover object-top ring-1 ring-white/15" />
          )}
          <ButtonLink to="/about/" variant="light" className="self-start">{t('cta.more_about')} <ArrowRight aria-hidden /></ButtonLink>
        </div>
        <div className="reveal tile p-7 md:p-10 lg:col-span-2">
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-text md:text-lg">
            {aboutIntro.map((p, i) => <p key={i} className={i === 0 ? 't-lead font-medium text-ink' : undefined}>{l(p)}</p>)}
          </div>
          <p className="mt-8 rounded-2xl bg-accent-soft px-5 py-4 font-display text-lg font-semibold leading-snug text-ink">“{l(person.supporting)}”</p>
        </div>
      </div>
    </section>
  )
}
