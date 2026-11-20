import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'

const HERO_IMG = '/images/abdullah-al-imran-hero-840.webp'

/**
 * Hero: light blue frame (from the owner's banner), the speaking photo on the right,
 * name, title, roles, award, actions and profiles on the left. Stacks on small screens.
 */
export function Hero() {
  const { t, l } = useLocale()
  const socials = person.socials.filter((s) => s.url && s.id in icons)

  return (
    <section aria-labelledby="hero-title" className="container-x pb-2 pt-4 md:pt-6">
      <div className="hero-stage relative isolate overflow-hidden rounded-[var(--radius-card)]">
        <div className="mx-auto grid max-w-[1400px] items-end gap-2 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          {/* text */}
          <div className="hero-enter relative z-10 self-center px-6 pb-2 pt-10 sm:px-10 lg:py-16 lg:pl-14 lg:pr-0">
            <h1 id="hero-title" className="font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              {l(person.name)}
            </h1>
            <p className="mt-4 max-w-xl text-lg font-semibold md:text-xl"><span className="text-gradient">{t('hero.title')}</span></p>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-text">
              <span className="block sm:inline">{t('hero.founder')}</span>
              <span aria-hidden className="hidden sm:inline"> · </span>
              <span className="block whitespace-nowrap sm:inline">{t('hero.cofounder')}</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to={ctaLinks.consulting} size="lg">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
              <ButtonLink to={ctaLinks.training} variant="outline" size="lg" className="bg-white/80">{t('cta.invite')}</ButtonLink>
            </div>

            <ul className="mt-8 flex items-center gap-2" aria-label={t('bio.socials')}>
              {socials.map((s) => {
                const Icon = icons[s.id as keyof typeof icons]
                return (
                  <li key={s.id}>
                    <a href={s.url!} target="_blank" rel="me noopener noreferrer" aria-label={s.label} className="grid size-10 place-items-center rounded-full bg-white/80 text-ink ring-1 ring-[#1b6fc1]/15 transition-colors hover:bg-ink hover:text-white">
                      <Icon />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* photo */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={HERO_IMG}
              srcSet={`/images/abdullah-al-imran-hero-420.webp 420w, ${HERO_IMG} 840w`}
              sizes="(min-width: 1024px) 46vw, 92vw"
              alt={l(person.name)}
              width={840}
              height={640}
              fetchPriority="high"
              decoding="async"
              className="hero-photo-enter w-[min(100%,34rem)] lg:w-full lg:max-w-[42rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Brand marks (Simple Icons, CC0) — lucide no longer ships brand logos. */
const svg = (d: string) =>
  function BrandIcon() {
    return <svg viewBox="0 0 24 24" aria-hidden className="size-[1.05rem] fill-current"><path d={d} /></svg>
  }
const icons = {
  facebook: svg('M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'),
  linkedin: svg('M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'),
  instagram: function InstagramIcon() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="size-[1.05rem] fill-none stroke-current" strokeWidth={2}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.6" cy="6.4" r="1.1" className="fill-current stroke-none" />
      </svg>
    )
  },
  youtube: svg('M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'),
}
