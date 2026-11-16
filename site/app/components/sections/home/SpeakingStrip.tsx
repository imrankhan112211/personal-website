import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { Img } from '~/components/ui/Img'
import { SectionHeading } from '~/components/ui/SectionHeading'
import type { Localized } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'

const photos: { src: string; alt: Localized; caption: Localized }[] = [
  { src: '/images/tedx-drmc-youth-2025-1600.webp', alt: { en: 'Abdullah Al Imran speaking on the TEDx DRMC Youth stage', bn: 'TEDx DRMC Youth মঞ্চে আব্দুল্লাহ আল ইমরান' }, caption: { en: 'TEDx DRMC Youth, 2025', bn: 'TEDx DRMC Youth, ২০২৫' } },
  { src: '/images/kaktaruaa-seminar-2024-1600.webp', alt: { en: 'A full hall at the Kaktaruaa cyber security seminar, EMK Center, Dhaka', bn: 'ঢাকার ইএমকে সেন্টারে কাকতাড়ুয়ার সাইবার সিকিউরিটি সেমিনারে পূর্ণ হলরুম' }, caption: { en: 'Cyber security seminar, EMK Center', bn: 'সাইবার সিকিউরিটি সেমিনার, ইএমকে সেন্টার' } },
  { src: '/images/school-session-speaking-1600.webp', alt: { en: 'Speaking at a student awareness session', bn: 'শিক্ষার্থীদের সচেতনতা সেশনে বক্তব্য' }, caption: { en: 'Student awareness session', bn: 'শিক্ষার্থীদের সচেতনতা সেশন' } },
]

/** Real photos from talks and sessions — the visual proof behind "Educate". */
export function SpeakingStrip() {
  const { t, l } = useLocale()
  return (
    <section aria-labelledby="speak-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-6 px-1">
        <SectionHeading id="speak-title" eyebrow={t('speak.eyebrow')} title={t('speak.title')} />
        <ButtonLink to="/training/" variant="outline">{t('speak.cta')} <ArrowRight aria-hidden /></ButtonLink>
      </div>
      <ul className="stagger mt-10 grid gap-3 md:grid-cols-[1.35fr_1fr_1fr] md:gap-4">
        {photos.map((p) => (
          <li key={p.src}>
            <figure className="group relative overflow-hidden rounded-[var(--radius-card)] bg-ink">
              <Img src={p.src} alt={l(p.alt)} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:aspect-[4/5] md:h-[22rem]" />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/85 via-[#0a1428]/10 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 text-sm font-semibold text-white">{l(p.caption)}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
