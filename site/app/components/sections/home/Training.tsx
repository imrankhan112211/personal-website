import { ArrowRight, GraduationCap, Mic } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { ImageSlot, Placeholder } from '~/components/ui/Placeholder'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { ctaLinks } from '~/content/navigation'
import { recognition } from '~/content/recognition'
import { trainingCategories } from '~/content/training'
import { useLocale } from '~/i18n/useLocale'
import { formatPartialDate } from '~/lib/dates'

export function Training() {
  const { t, l, locale } = useLocale()
  const tedx = recognition.find((r) => r.id === 'tedx-drmc-youth')!
  const cid = recognition.find((r) => r.id === 'cid-police-training')!
  const items = [
    { r: tedx, icon: Mic, photo: '[INSERT APPROVED TEDx PHOTOGRAPH]', detail: '[INSERT TALK TITLE & VERIFIED DETAILS]' },
    { r: cid, icon: GraduationCap, photo: '[INSERT APPROVED CID TRAINING PHOTOGRAPH]', detail: '[CONFIRM SCOPE & TOPIC]' },
  ]
  return (
    <section aria-labelledby="training-title" className="container-x pb-2 pt-16 md:pt-24">
      <div className="bento md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="reveal tile flex flex-col p-7 md:col-span-2 md:p-10 lg:col-span-1">
          <Eyebrow>{t('home.training.eyebrow')}</Eyebrow>
          <h2 id="training-title" className="t-h2 mt-5">{t('home.training.title')}</h2>
          <p className="mt-5 text-muted">{t('home.training.body')}</p>
          <p className="t-eyebrow mt-8 text-muted">{t('home.training.topics')}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {trainingCategories.map((c) => <li key={c.id} className="rounded-full bg-mist px-3 py-1.5 text-[0.8125rem] font-medium text-ink">{l(c.title)}</li>)}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            <ButtonLink to={ctaLinks.training}>{t('cta.invite')} <ArrowRight aria-hidden /></ButtonLink>
            <ButtonLink to="/training/" variant="outline">{t('nav.training')}</ButtonLink>
          </div>
        </div>
        {items.map(({ r, icon: Icon, photo, detail }) => (
          <article key={r.id} className="reveal tile flex flex-col overflow-hidden">
            {r.image ? <img src={r.image} alt={l(r.title)} loading="lazy" className="aspect-[4/3] w-full object-cover" /> : <ImageSlot label={photo} className="aspect-[4/3]" />}
            <div className="flex flex-1 flex-col p-6">
              <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent"><Icon aria-hidden className="size-5" /></span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{l(r.title)}</h3>
              <p className="text-sm text-muted">{l(r.organization)}{r.date ? ` · ${formatPartialDate(r.date, locale)}` : ''}</p>
              <div className="mt-4 text-sm">{r.description ? l(r.description) : <Placeholder label={detail} />}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
