import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'

const HERO_IMG = '/images/abdullah-al-imran-hero-1200.webp'

/**
 * Cinematic hero: black stage, the surname set huge behind a black-and-white cut-out portrait,
 * name + title on the left, ventures + award on the right, profiles and actions along the bottom.
 * The big word is decorative (aria-hidden); the real <h1> is the full name.
 */
export function Hero() {
  const { t, l } = useLocale()
  const socials = person.socials.filter((s) => s.url && s.id in icons)

  return (
    <section aria-labelledby="hero-title" className="container-x pb-2 pt-4 md:pt-6">
      <div className="relative isolate overflow-hidden rounded-[var(--radius-card)] bg-[#08090c] text-white">
        {/* soft spotlight behind the portrait */}
        <span aria-hidden className="absolute left-1/2 top-[18%] -z-10 size-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.13),transparent)]" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col lg:min-h-[min(52rem,calc(100svh-7rem))]">
          {/* stage: giant surname + portrait. In normal flow on small screens, full-bleed behind the text on desktop */}
          <div className="relative h-[25rem] sm:h-[34rem] lg:absolute lg:inset-0 lg:h-auto">
          <p
            aria-hidden
            lang="en"
            className="hero-word pointer-events-none absolute inset-x-0 top-[12%] select-none text-center uppercase text-[#f3f4f6] lg:top-[14%]"
          >
            Imran
          </p>

          {/* portrait */}
          <img
            src={HERO_IMG}
            srcSet={`/images/abdullah-al-imran-hero-600.webp 600w, ${HERO_IMG} 1200w`}
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 70vw, 92vw"
            alt={l(person.name)}
            width={1200}
            height={1305}
            fetchPriority="high"
            decoding="async"
            className="absolute bottom-0 left-1/2 z-10 w-[min(82vw,22rem)] -translate-x-1/2 sm:w-[min(62vw,28rem)] lg:w-[min(42vw,35rem)]"
          />
          </div>

          {/* name / title (left) and ventures / award (right) */}
          <div className="relative z-20 mt-auto grid gap-6 px-6 pb-6 pt-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:items-end lg:gap-10 lg:px-12 lg:pb-12 lg:pt-0">
            <div className="max-w-sm lg:pb-24">
              <h1 id="hero-title" className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">{l(person.name)}</h1>
              <p className="mt-2 text-[0.9375rem] text-white/70">{t('hero.title')}</p>
            </div>

            <span aria-hidden className="hidden w-[min(34vw,26rem)] lg:block" />

            <div className="sm:justify-self-end sm:text-right lg:pb-24">
              <p className="text-[0.9375rem] font-medium text-white">{t('hero.founder')}</p>
              <p className="mt-0.5 text-[0.9375rem] text-white/70">{t('hero.cofounder')}</p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80">
                <span className="size-1.5 rounded-full bg-lime" /> {t('hero.award')}
              </p>
            </div>
          </div>

          {/* bottom bar: profiles (left) + actions (right) */}
          <div className="relative z-20 flex flex-col-reverse gap-5 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:border-0 lg:bg-gradient-to-t lg:from-[#08090c] lg:to-transparent lg:px-12 lg:pb-8 lg:pt-16">
            <ul className="flex items-center gap-2" aria-label={t('bio.socials')}>
              {socials.map((s) => {
                const Icon = icons[s.id as keyof typeof icons]
                return (
                  <li key={s.id}>
                    <a href={s.url!} target="_blank" rel="me noopener noreferrer" aria-label={s.label} className="grid size-10 place-items-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-white hover:text-ink">
                      <Icon />
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink to={ctaLinks.consulting} className="bg-white text-ink hover:bg-lime hover:text-on-lime">{t('cta.book')} <ArrowRight aria-hidden /></ButtonLink>
              <ButtonLink to={ctaLinks.training} variant="outline" className="border-white/30 text-white hover:border-white hover:bg-white/10">{t('cta.invite')}</ButtonLink>
            </div>
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
