import { Award } from 'lucide-react'
import type { Route } from './+types/recognition'
import { RecognitionRow, recognitionTone } from '~/components/cards/RecognitionRow'
import { EmptyState } from '~/components/sections/shared/EmptyState'
import { PageHero } from '~/components/sections/shared/PageHero'
import { Badge } from '~/components/ui/Badge'
import { recognition, type RecognitionType } from '~/content/recognition'
import { useLocale } from '~/i18n/useLocale'
import type { UiKey } from '~/i18n/ui'
import { metaFor } from '~/lib/page'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('recognition', location.pathname)
}

const groups: { id: string; title: UiKey; types: RecognitionType[] }[] = [
  { id: 'awards', title: 'rec.group.awards', types: ['award', 'nomination'] },
  { id: 'speaking', title: 'rec.group.speaking', types: ['speaking', 'participation'] },
  { id: 'training', title: 'rec.group.training', types: ['training'] },
]
const types: RecognitionType[] = ['award', 'nomination', 'speaking', 'training', 'participation']

export default function RecognitionPage() {
  const { t } = useLocale()
  return (
    <main id="main">
      <PageHero
        crumbs={[{ label: t('nav.recognition') }]}
        eyebrow={t('rec.eyebrow')}
        title={t('rec.eyebrow')}
        lead={t('rec.lead')}
      />

      <div className="container-x py-16 md:py-24">
        {groups.map((g) => {
          const items = recognition.filter((r) => g.types.includes(r.type))
          return (
            <section key={g.id} aria-labelledby={`${g.id}-t`} className="mb-20 last:mb-0">
              <h2 id={`${g.id}-t`} className="t-h2 text-ink">{t(g.title)}</h2>
              {items.length ? (
                <ol className="mt-8 border-b border-line">{items.map((r) => <RecognitionRow key={r.id} r={r} detailed />)}</ol>
              ) : (
                <EmptyState icon={Award} title={t('rec.empty')} className="mt-8" />
              )}
            </section>
          )
        })}
      </div>
    </main>
  )
}
