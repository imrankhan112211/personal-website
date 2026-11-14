import { ArrowRight, GraduationCap, Mic } from 'lucide-react'
import { ButtonLink } from '~/components/ui/Button'
import { ImageSlot, Placeholder } from '~/components/ui/Placeholder'
import { Eyebrow } from '~/components/ui/SectionHeading'
import { ctaLinks } from '~/content/navigation'
import { recognition } from '~/content/recognition'
import { trainingCategories } from '~/content/training'
import { useLocale } from '~/i18n/useLocale'

export function Training() {
  const { t, l } = useLocale()
  const tedx = recognition.find((r) => r.id === 'tedx-drmc-youth')!
  const cid = recognition.find((r) => r.id === 'cid-police-training')!
  const highlights = [
    { item: tedx, icon: Mic, photo: '[INSERT APPROVED TEDx PHOTOGRAPH]', detail: '[INSERT TALK TITLE & VERIFIED DETAILS]' },
    { item: cid, icon: GraduationCap, photo: '[INSERT APPROVED CID TRAINING PHOTOGRAPH]', detail: '[CONFIRM SCOPE, TOPIC & DATE]' },
  ]

  return (
    <section aria-labelledby="training-title" className="section-y border-t border-line bg-mist">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Photo mosaic */}
        <div className="reveal grid grid-cols-6 grid-rows-[repeat(5,minmax(0,1fr))] gap-3 lg:col-span-6" style={{ aspectRatio: '6 / 5' }}>
          {tedx.image ? (
            <img src={tedx.image} alt={l(tedx.title)} loading="lazy" className="col-span-4 row-span-5 size-full rounded-[20px] object-cover" />
          ) : (
            <ImageSlot label={highlights[0].photo} className="col-span-4 row-span-5 rounded-[20px] bg-[#e4e7ec]" />
          )}
          <ImageSlot label={highlights[1].photo} className="col-span-2 row-span-3 rounded-[20px] bg-[#e4e7ec]" />
          <ImageSlot label="[INSERT WORKSHOP PHOTO]" className="col-span-2 row-span-2 rounded-[20px] bg-[#e4e7ec]" />
        </div>

        {/* Copy */}
        <div className="lg:col-span-6">
          <div className="reveal">
            <Eyebrow>{t('home.training.eyebrow')}</Eyebrow>
            <h2 id="training-title" className="t-h2 mt-5">{t('home.training.title')}</h2>
            <p className="t-lead mt-5 text-muted">{t('home.training.body')}</p>
          </div>

          <ul className="mt-10 grid gap-4">
            {highlights.map(({ item, icon: Icon, detail }) => (
              <li key={item.id} className="reveal flex gap-4 rounded-[20px] border border-line bg-surface p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"><Icon aria-hidden className="size-5" /></span>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-ink">{l(item.title)}</p>
                  <p className="text-sm text-muted">{l(item.organization)}</p>
                  {item.description ? <p className="mt-2 text-sm">{l(item.description)}</p> : <Placeholder className="mt-2" label={detail} />}
                </div>
              </li>
            ))}
          </ul>

          <div className="reveal mt-10">
            <p className="t-eyebrow text-muted">{t('home.training.topics')}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {trainingCategories.map((c) => (
                <li key={c.id} className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink ring-1 ring-inset ring-line">{l(c.title)}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to={ctaLinks.training}>{t('cta.training')} <ArrowRight aria-hidden /></ButtonLink>
            <ButtonLink to="/training/" variant="outline">{t('nav.training')}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
