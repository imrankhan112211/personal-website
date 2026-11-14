import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Placeholder } from '~/components/ui/Placeholder'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'

export function Hero() {
  const { t, l, locale } = useLocale()
  const [first, ...rest] = l(person.name).split(' ')

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="bg-hairline absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="container-x relative grid items-end gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-7 lg:pb-6">
          <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow>
          <h1 id="hero-title" className="t-display mt-7 text-ink">
            {locale === 'en' ? (
              <>
                {first}
                <br />
                <span className="text-ink/90">{rest.join(' ')}</span>
              </>
            ) : (
              l(person.name)
            )}
          </h1>

          <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.9375rem] font-medium text-text" aria-label="Professional title">
            {person.titleParts.map((p, i) => (
              <li key={p.en} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="size-1 rounded-full bg-accent" />}
                {l(p)}
              </li>
            ))}
          </ul>

          <p className="t-serif mt-8 max-w-2xl text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] leading-[1.18] text-ink">
            “{l(person.statement)}”
          </p>
          <p className="mt-6 max-w-xl text-[1.0625rem] text-muted">{l(person.heroIntro)}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink to={ctaLinks.consulting} size="lg">
              {t('cta.book')}
              <ArrowRight aria-hidden className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink to="/impact/" variant="outline" size="lg">{t('cta.explore')}</ButtonLink>
            <ButtonLink to={ctaLinks.training} variant="link" className="ml-2">{t('cta.invite')}</ButtonLink>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative lg:col-span-5">
          <Portrait />
        </div>
      </div>
    </section>
  )
}

function Portrait() {
  const { l } = useLocale()
  return (
    <figure className="relative mx-auto w-full max-w-[460px] lg:ml-auto">
      <div aria-hidden className="absolute -right-4 -top-4 hidden h-full w-full rounded-[28px] border border-line-strong sm:block" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink">
        {person.portrait ? (
          <img
            src={person.portrait}
            alt={`${l(person.name)} — ${l(person.titleParts[0])}`}
            width={920}
            height={1150}
            fetchPriority="high"
            className="size-full object-cover"
          />
        ) : (
          <div data-placeholder role="img" aria-label="Portrait placeholder" className="relative flex size-full flex-col justify-between p-6">
            <div aria-hidden className="bg-hairline-ink absolute inset-0" />
            <div aria-hidden className="absolute -bottom-24 -right-16 size-80 rounded-full bg-accent/35 blur-3xl" />
            <span aria-hidden className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[11rem] font-extrabold leading-none tracking-tighter text-white/[0.06]">
              {person.monogram}
            </span>
            <Placeholder tone="ink" label="[INSERT APPROVED PROFESSIONAL PORTRAIT · 4:5]" className="relative self-start" />
          </div>
        )}
        {/* Caption plate */}
        <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
          <p className="font-display text-base font-bold text-ink">{l(person.name)}</p>
          <p className="mt-0.5 text-sm leading-snug text-muted">{l(person.supporting)}</p>
        </figcaption>
      </div>
    </figure>
  )
}
