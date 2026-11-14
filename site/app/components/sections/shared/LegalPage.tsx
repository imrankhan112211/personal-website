import { PageHero } from '~/components/sections/shared/PageHero'
import { Placeholder } from '~/components/ui/Placeholder'
import { legalReviewNote } from '~/content/legal'
import type { Localized } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'

export function LegalPage({ title, sections }: { title: string; sections: { title: Localized; body: Localized[] }[] }) {
  const { t, l } = useLocale()
  return (
    <main id="main">
      <PageHero crumbs={[{ label: title }]} eyebrow={t('legal.updated')} title={title} lead={<Placeholder label={legalReviewNote} />} />
      <div className="container-x py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          {sections.map((s, i) => (
            <section key={i} className="border-t border-line py-8 first:border-t-0 first:pt-0">
              <h2 className="t-h3 text-ink">{l(s.title)}</h2>
              <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.8] text-text">{s.body.map((p, j) => <p key={j}>{l(p)}</p>)}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
