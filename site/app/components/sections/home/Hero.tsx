import { ArrowRight, ArrowUpRight, Award, GraduationCap, Layers, Mic } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { Placeholder } from '~/components/ui/Placeholder'
import { focusAreas } from '~/content/home'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { recognition } from '~/content/recognition'
import { ventures } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'
import { formatPartialDate } from '~/lib/dates'
import { cn } from '~/lib/utils'
import { Img } from '~/components/ui/Img'

/** Design E — bento hero: each tile is one fact, linked to the page that proves it. */
export function Hero() {
  const { t, l, locale } = useLocale()
  const award = recognition.find((r) => r.type === 'award')
  const tile = 'pop tile relative overflow-hidden p-6 md:p-7'

  return (
    <section aria-labelledby="hero-title" className="container-x pb-4 pt-4 md:pt-6">
      <div className="bento grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto]">
        {/* Intro */}
        <div className={cn(tile, 'flex flex-col justify-between gap-10 sm:col-span-2 lg:row-span-2 md:p-10')}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-text">
              <span className="size-1.5 rounded-full bg-accent" />
              {t('home.hero.eyebrow')}
            </p>
            <h1 id="hero-title" className="t-display mt-6 text-ink">{l(person.name)}</h1>
            <ul aria-label="Professional title" className="mt-6 flex flex-wrap gap-2">
              {person.titleParts.map((p) => (
                <li key={p.en} className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-text">{l(p)}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="t-lead max-w-xl text-text">{l(person.statement)}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink to={ctaLinks.consulting} size="lg">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
              <ButtonLink to="/impact/" variant="outline" size="lg">{t('cta.explore')}</ButtonLink>
              <ButtonLink to={ctaLinks.training} variant="link" className="ml-1">{t('cta.invite')}</ButtonLink>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <figure className={cn(tile, 'on-ink min-h-[22rem] bg-ink p-0 sm:row-span-2 md:p-0')}>
          {person.portrait ? (
            <Img src={person.portrait} alt={l(person.name)} width={960} height={1280} loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 size-full object-cover" />
          ) : (
            <div data-placeholder role="img" aria-label="Portrait placeholder" className="absolute inset-0 flex flex-col justify-between p-6">
              <div aria-hidden className="bg-hairline-ink absolute inset-0" />
              <span aria-hidden className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[9rem] font-extrabold leading-none tracking-tighter text-white/[0.07]">{person.monogram}</span>
              <Placeholder tone="ink" label="[INSERT APPROVED PORTRAIT · 3:4]" className="relative self-start" />
            </div>
          )}
          <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-4 py-3 text-sm backdrop-blur">
            <span className="block font-display font-bold text-ink">{l(person.name)}</span>
            <span className="text-muted">{t('bento.languages')}</span>
          </figcaption>
        </figure>

        {/* Award */}
        {award && (
          <LocalLink to="/recognition/" className={cn(tile, 'tile-hover group flex flex-col justify-between gap-6 bg-lime text-on-lime')}>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold"><Award aria-hidden className="size-4" />{t('bento.award')}</span>
              <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-tight tracking-tight">{l(award.title)}</p>
              {award.date && <p className="mt-1 text-sm font-medium opacity-80">{formatPartialDate(award.date, locale)}</p>}
            </div>
          </LocalLink>
        )}

        {/* Ventures */}
        <LocalLink to="/ventures/" className={cn(tile, 'tile-hover on-ink group flex flex-col justify-between gap-6 bg-ink text-white')}>
          <div className="flex items-center justify-between text-on-ink-muted">
            <span className="inline-flex items-center gap-2 text-sm font-medium"><Layers aria-hidden className="size-4" />{t('bento.ventures')}</span>
            <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div>
            <p className="font-display text-5xl font-bold tracking-tight">{ventures.length.toLocaleString(locale === 'bn' ? 'bn-BD' : 'en')}</p>
            <p className="mt-2 text-sm text-on-ink-muted">{ventures.map((v) => v.name).join(' · ')}</p>
          </div>
        </LocalLink>

        {/* Speaking & training */}
        <LocalLink to="/training/" className={cn(tile, 'tile-hover group flex flex-col justify-between gap-6 bg-accent text-white sm:col-span-2')}>
          <div className="flex items-center justify-between text-white/80">
            <span className="text-sm font-medium">{t('bento.speaking')}</span>
            <ArrowUpRight aria-hidden className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <Mic aria-hidden className="size-5 shrink-0" /><span className="font-display font-semibold leading-snug">{t('bento.tedx')}</span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <GraduationCap aria-hidden className="size-5 shrink-0" /><span className="font-display font-semibold leading-snug">{t('bento.cid')}</span>
            </li>
          </ul>
        </LocalLink>

        {/* Focus areas */}
        <div className={cn(tile, 'flex flex-col gap-4')}>
          <p className="text-sm font-medium text-muted">{t('bento.focus')}</p>
          <ul className="flex flex-wrap gap-1.5">
            {focusAreas.slice(2).map((f) => <li key={f.en} className="rounded-full bg-mist px-3 py-1.5 text-[0.8125rem] text-text">{l(f)}</li>)}
          </ul>
        </div>

        {/* Book */}
        <LocalLink to={ctaLinks.consulting} className={cn(tile, 'tile-hover group flex flex-col justify-between gap-6')}>
          <p className="font-display text-lg font-semibold leading-snug text-ink">{t('bento.book.title')}</p>
          <span className="inline-flex items-center justify-between gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-accent">
            {t('cta.book')} <ArrowRight aria-hidden className="size-4" />
          </span>
        </LocalLink>
      </div>
    </section>
  )
}
