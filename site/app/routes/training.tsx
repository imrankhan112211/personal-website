import { ArrowDown, ArrowRight, Building2, GraduationCap, Mic } from 'lucide-react'
import type { Route } from './+types/training'
import { InquiryForm } from '~/components/forms/InquiryForm'
import { EmptyState } from '~/components/sections/shared/EmptyState'
import { PageHero } from '~/components/sections/shared/PageHero'
import { Badge } from '~/components/ui/Badge'
import { buttonStyles } from '~/components/ui/Button'
import { ImageSlot, Placeholder, SHOW_PLACEHOLDERS } from '~/components/ui/Placeholder'
import { Eyebrow, SectionHeading } from '~/components/ui/SectionHeading'
import { pageMeta } from '~/content/pageMeta'
import { recognition } from '~/content/recognition'
import { collaborations, trainingAudiences, trainingCategories, trainingFormats, trainingGallery, trainingHeroPhotos } from '~/content/training'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { Img } from '~/components/ui/Img'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('training', location.pathname)
}

export default function Training() {
  const { t, l } = useLocale()
  const highlights = [
    { r: recognition.find((r) => r.id === 'tedx-drmc-youth')!, icon: Mic, photo: '[INSERT APPROVED TEDx PHOTOGRAPH]', detail: '[INSERT TALK TITLE, DATE & VERIFIED DESCRIPTION]' },
    { r: recognition.find((r) => r.id === 'cid-police-training')!, icon: GraduationCap, photo: '[INSERT APPROVED CID TRAINING PHOTOGRAPH]', detail: '[CONFIRM SCOPE, TOPIC, AUDIENCE & DATE]' },
  ]

  return (
    <main id="main">
      <PageHero
        crumbs={[{ label: t('nav.training') }]}
        eyebrow={t('train.eyebrow')}
        title={l(pageMeta.training.lead!)}
        lead={t('train.intro')}
        aside={
          <div className="grid grid-cols-2 gap-3" style={{ aspectRatio: '1 / 1' }}>
            {trainingHeroPhotos.map((p, i) => (
              <Img key={p.src} src={p.src} alt={l(p.alt)} sizes="(min-width: 1024px) 20vw, 50vw" loading="eager" className={`size-full rounded-[20px] object-cover ${i === 0 ? 'row-span-2' : ''}`} />
            ))}
          </div>
        }
      >
        <a href="#invite" className={buttonStyles({ size: 'lg' })}>{t('cta.invite')} <ArrowRight aria-hidden /></a>
        <a href="#topics" className={buttonStyles({ variant: 'outline', size: 'lg' })}>{t('train.topics.eyebrow')} <ArrowDown aria-hidden /></a>
      </PageHero>

      {/* Topics */}
      <section id="topics" aria-labelledby="topics-title" className="container-x pb-2 pt-3 scroll-mt-20">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface">
          <SectionHeading id="topics-title" eyebrow={t('train.topics.eyebrow')} title={t('train.topics.title')} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-2">
            {trainingCategories.map((c, i) => (
              <section key={c.id} aria-labelledby={`${c.id}-t`} className="reveal bg-surface p-8 md:p-10">
                <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                <h3 id={`${c.id}-t`} className="t-h3 mt-3 text-ink">{l(c.title)}</h3>
                <ul className="mt-6 grid gap-3">
                  {c.items.map((it) => <li key={it.en} className="flex gap-3 text-text"><span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />{l(it)}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section aria-labelledby="highlights-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface">
          <SectionHeading id="highlights-title" eyebrow={t('train.highlights.eyebrow')} title={t('train.highlights.title')} />
          <div className="mt-14 grid gap-14">
            {highlights.map(({ r, icon: Icon, photo, detail }, i) => (
              <article key={r.id} className="reveal grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <div className={i % 2 ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'}>
                  {r.video ? (
                    <video controls playsInline preload="none" poster={r.image ?? undefined} aria-label={l(r.title)} className="aspect-[16/10] w-full rounded-[24px] bg-ink object-contain">
                      <source src={r.video} type="video/mp4" />
                    </video>
                  ) : r.image ? <Img src={r.image} alt={l(r.title)} className="aspect-[16/10] w-full rounded-[24px] object-cover" /> : <ImageSlot label={photo} className="aspect-[16/10] rounded-[24px]" />}
                </div>
                <div className="lg:col-span-5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent"><Icon aria-hidden className="size-5" /></span>
                  <Badge tone={r.type === 'speaking' ? 'accent' : 'neutral'} className="mt-6">{t(`rtype.${r.type}`)}</Badge>
                  <h3 className="t-h3 mt-3 text-ink md:text-[1.75rem]">{l(r.title)}</h3>
                  <p className="mt-1 text-muted">{l(r.organization)}</p>
                  <div className="mt-5">{r.description ? <p className="text-text">{l(r.description)}</p> : <Placeholder label={detail} />}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop gallery */}
      <section aria-labelledby="gallery-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-surface">
          <SectionHeading id="gallery-title" eyebrow={t('train.gallery.eyebrow')} title={t('train.gallery.title')} />
          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4">
            {trainingGallery.map((g, i) => (
              <Img key={g.src} src={g.src} alt={l(g.alt)} sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'} className={`size-full rounded-[20px] object-cover ${['col-span-2 row-span-2', '', '', 'col-span-2', 'col-span-2', 'col-span-2'][i] ?? ''}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Formats, audiences, collaborations */}
      <section aria-labelledby="formats-title" className="container-x pb-2 pt-3">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 bg-mist grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="reveal">
              <Eyebrow>{t('train.formats.eyebrow')}</Eyebrow>
              <h2 id="formats-title" className="t-h2 mt-5">{t('train.formats.title')}</h2>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {trainingFormats.map((f) => (
                <li key={f.title.en} className="reveal rounded-2xl bg-surface p-6 ring-1 ring-inset ring-line">
                  <h3 className="font-display text-lg font-semibold text-ink">{l(f.title)}</h3>
                  <p className="mt-1 text-[0.9375rem] text-muted">{l(f.body)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="t-eyebrow text-muted">{t('train.audience')}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {trainingAudiences.map((a) => <li key={a.en} className="rounded-full bg-surface px-4 py-2 text-sm text-ink ring-1 ring-inset ring-line">{l(a)}</li>)}
            </ul>
            {(collaborations.length > 0 || SHOW_PLACEHOLDERS) && <h2 className="t-eyebrow mt-12 text-muted">{t('train.collab.eyebrow')}</h2>}
            {collaborations.length ? (
              <ul className="mt-5 grid grid-cols-2 gap-3">{collaborations.map((c) => <li key={c.name} className="rounded-xl bg-surface p-4 text-sm ring-1 ring-inset ring-line">{c.name}</li>)}</ul>
            ) : SHOW_PLACEHOLDERS && (
              <EmptyState icon={Building2} title={t('train.collab.empty')} className="mt-5 py-10">
                <Placeholder label="[INSERT VERIFIED INSTITUTIONAL COLLABORATIONS]" />
              </EmptyState>
            )}
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section id="invite" aria-labelledby="invite-title" className="container-x pb-2 pt-3 scroll-mt-20">
        <div className="rounded-[var(--radius-card)] p-7 md:p-12 on-ink bg-ink text-on-ink grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="reveal lg:sticky lg:top-28">
              <Eyebrow tone="ink">{t('train.form.eyebrow')}</Eyebrow>
              <h2 id="invite-title" className="t-h2 mt-5 text-white">{t('train.form.title')}</h2>
              <p className="mt-5 text-on-ink-muted">{t('train.form.body')}</p>
            </div>
          </div>
          <div className="text-text lg:col-span-8">
            <InquiryForm fixedType="training" />
          </div>
        </div>
      </section>
    </main>
  )
}
