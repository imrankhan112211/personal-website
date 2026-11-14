import { ArrowUpRight } from 'lucide-react'
import { Badge, StatusDot } from '~/components/ui/Badge'
import { Placeholder } from '~/components/ui/Placeholder'
import type { Venture } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'

const statusTone = { active: 'success', developing: 'amber', confirm: 'neutral' } as const

export function VentureCard({ v }: { v: Venture }) {
  const { t, l } = useLocale()
  return (
    <article className="reveal tile tile-hover group flex h-full flex-col p-7 md:p-8">
      <div className="flex items-start justify-between gap-4">
        {v.logo ? (
          <img src={v.logo} alt={`${v.name} logo`} width={56} height={56} loading="lazy" className="size-14 rounded-2xl object-contain" />
        ) : (
          <span data-placeholder title="[INSERT OFFICIAL LOGO]" className="grid size-14 place-items-center rounded-2xl border border-dashed border-line-strong bg-mist font-display text-lg font-bold text-ink">
            {v.name.slice(0, 1)}
          </span>
        )}
        <Badge tone={statusTone[v.status]}>
          <StatusDot />
          {t(`status.${v.status}`)}
        </Badge>
      </div>

      <h3 className="t-h3 mt-7 text-ink">{v.name}</h3>
      <p className="mt-3 text-muted">{l(v.description)}</p>

      <dl className="mt-6 border-t border-line pt-5 text-sm">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <dt className="text-muted">{t('label.role')}</dt>
          <dd>{v.role && v.roleVerified ? <span className="font-medium text-ink">{l(v.role)}</span> : <Placeholder label="[CONFIRM OFFICIAL ROLE]" />}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-7">
        {v.url ? (
          <a
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
          >
            {t('cta.visit')} <span className="sr-only">— {v.name}</span>
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        ) : (
          <span className="inline-flex min-h-11 items-center text-sm text-muted">{t('status.developing')}</span>
        )}
      </div>
    </article>
  )
}
