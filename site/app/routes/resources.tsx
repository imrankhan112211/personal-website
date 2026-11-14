import { ArrowRight, BookOpen, Download, FileText, GraduationCap, Library, MonitorPlay, Presentation } from 'lucide-react'
import type { Route } from './+types/resources'
import { PageHero } from '~/components/sections/shared/PageHero'
import { Badge } from '~/components/ui/Badge'
import { ButtonLink } from '~/components/ui/Button'
import { resourceKinds, resources, type ResourceKind } from '~/content/resources'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('resources', location.pathname)
}

const icons: Record<ResourceKind, typeof BookOpen> = { book: BookOpen, ebook: Library, course: MonitorPlay, program: Presentation, guide: FileText, download: Download }

export default function Resources() {
  const { t, l } = useLocale()
  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.resources') }]} eyebrow={t('res.eyebrow')} title={t('res.eyebrow')} lead={t('res.lead')} />

      <div className="container-x py-16 md:py-24">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resourceKinds.map((k) => {
            const Icon = icons[k.kind]
            const items = resources.filter((r) => r.kind === k.kind)
            return (
              <li key={k.kind} className="reveal">
                <section aria-labelledby={`${k.kind}-t`} className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-mist text-ink"><Icon aria-hidden className="size-5" /></span>
                    {items.length === 0 && <Badge>{t('res.soon')}</Badge>}
                  </div>
                  <h2 id={`${k.kind}-t`} className="t-h3 mt-6 text-ink">{l(k.title)}</h2>
                  <p className="mt-2 text-muted">{l(k.body)}</p>
                  {items.length > 0 && (
                    <ul className="mt-6 grid gap-3 border-t border-line pt-5">
                      {items.map((r) => (
                        <li key={r.slug}>
                          {r.url ? <a href={r.url} className="font-medium text-ink hover:text-accent">{l(r.title)}</a> : <span className="font-medium text-ink">{l(r.title)}</span>}
                          <p className="text-sm text-muted">{l(r.description)}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </li>
            )
          })}
        </ul>

        <aside className="reveal mt-16 grid gap-6 rounded-[28px] bg-mist p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-12">
          <span className="grid size-14 place-items-center rounded-2xl bg-ink text-white"><GraduationCap aria-hidden className="size-6" /></span>
          <div>
            <h2 className="t-h3 text-ink">{t('res.notify.title')}</h2>
            <p className="mt-2 text-muted">{t('res.notify.body')}</p>
          </div>
          <ButtonLink to="/contact/?type=general">{t('cta.contact')} <ArrowRight aria-hidden /></ButtonLink>
        </aside>
      </div>
    </main>
  )
}
