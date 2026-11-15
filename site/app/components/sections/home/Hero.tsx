import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Img } from '~/components/ui/Img'
import { Placeholder } from '~/components/ui/Placeholder'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'

/** Who I am + the two main actions. Everything else on the page supports these. */
export function Hero() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="hero-title" className="container-x pb-2 pt-4 md:pt-6">
      <div className="bento grid-cols-1 lg:grid-cols-3">
        <div className="pop tile flex flex-col justify-between gap-10 p-7 md:p-12 lg:col-span-2">
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
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to={ctaLinks.consulting} size="lg">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
              <ButtonLink to={ctaLinks.training} variant="outline" size="lg">{t('cta.invite')}</ButtonLink>
            </div>
          </div>
        </div>

        <figure className="pop tile on-ink relative min-h-[26rem] overflow-hidden bg-ink p-0">
          {person.portrait ? (
            <Img src={person.portrait} alt={l(person.name)} width={960} height={1280} loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 size-full object-cover" />
          ) : (
            <Placeholder tone="ink" label="[INSERT APPROVED PORTRAIT · 3:4]" className="absolute left-6 top-6" />
          )}
          <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-4 py-3 text-sm backdrop-blur">
            <span className="block font-display font-bold text-ink">{l(person.name)}</span>
            <span className="text-muted">{t('bento.languages')}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
