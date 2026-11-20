import { ArrowRight } from 'lucide-react'
import { LocalLink } from '~/components/ui/LocalLink'
import { shortBio } from '~/content/about'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'
import { Img } from '~/components/ui/Img'

export function AuthorBox({ className }: { className?: string }) {
  const { t, l } = useLocale()
  return (
    <aside aria-labelledby="author-title" className={cn('grid gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-7 sm:grid-cols-[auto_1fr] md:p-9', className)}>
      {person.portrait ? (
        <Img src={person.portrait} alt="" sizes="80px" width={80} height={80} className="size-20 rounded-2xl object-cover" />
      ) : (
        <span data-placeholder className="grid size-20 place-items-center rounded-2xl bg-ink font-display text-xl font-semibold text-white">{person.monogram}</span>
      )}
      <div>
        <p className="t-eyebrow text-accent">{t('ins.author')}</p>
        <h2 id="author-title" className="mt-2 font-display text-xl font-semibold text-ink">{l(person.name)}</h2>
        <p className="text-sm text-muted">{l(person.title)}</p>
        <p className="mt-3 text-[0.9375rem] text-text">{l(shortBio)}</p>
        <LocalLink to="/about/biography/" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-[6px] hover:text-accent">
          {t('nav.biography')} <ArrowRight aria-hidden className="size-4" />
        </LocalLink>
      </div>
    </aside>
  )
}
