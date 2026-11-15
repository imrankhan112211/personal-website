import { Briefcase, GraduationCap, Handshake, KeyRound, Mail, MessageSquare, Mic, Newspaper, Code2 } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import type { Route } from './+types/contact'
import { InquiryForm } from '~/components/forms/InquiryForm'
import { PageHero } from '~/components/sections/shared/PageHero'
import { Placeholder, SHOW_PLACEHOLDERS } from '~/components/ui/Placeholder'
import { inquiryTypes, type InquiryType } from '~/content/inquiry'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'
import { metaFor } from '~/lib/page'
import { cn } from '~/lib/utils'

export function meta({ location }: Route.MetaArgs) {
  return metaFor('contact', location.pathname)
}

const icons: Record<InquiryType, typeof Mail> = { consulting: Briefcase, training: GraduationCap, speaking: Mic, service: Code2, media: Newspaper, collaboration: Handshake, general: MessageSquare }
const order: InquiryType[] = ['consulting', 'training', 'service', 'media', 'collaboration', 'general']

export default function Contact() {
  const { t, l } = useLocale()
  const [params] = useSearchParams()
  const active = params.get('type')
  const socials = person.socials.filter((s) => s.url)

  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.contact') }]} eyebrow={t('contact.eyebrow')} title={t('contact.title')} lead={t('contact.lead')} />

      <div className="container-x py-14 md:py-20">
        {/* Inquiry paths */}
        <h2 className="t-eyebrow text-muted">{t('contact.paths')}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {order.map((id) => {
            const Icon = icons[id]
            const it = inquiryTypes.find((x) => x.id === id)!
            const on = active === id
            return (
              <li key={id}>
                <Link
                  to={`?type=${id}#message`}
                  preventScrollReset
                  aria-current={on ? 'true' : undefined}
                  className={cn('group flex h-full items-start gap-4 rounded-2xl border p-5 transition-colors', on ? 'border-ink bg-ink text-white' : 'border-line bg-surface hover:border-ink')}
                >
                  <span className={cn('grid size-11 shrink-0 place-items-center rounded-xl', on ? 'bg-white/10 text-white' : 'bg-accent-soft text-accent')}><Icon aria-hidden className="size-5" /></span>
                  <span>
                    <span className={cn('block font-display font-semibold', on ? 'text-white' : 'text-ink')}>{l(it.label)}</span>
                    <span className={cn('mt-0.5 block text-sm', on ? 'text-on-ink-muted' : 'text-muted')}>{t(`contact.path.${id}`)}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <section id="message" aria-labelledby="form-title" className="scroll-mt-28 lg:col-span-8">
            <h2 id="form-title" className="t-h2 mb-8 text-ink">{t('contact.form.title')}</h2>
            <InquiryForm />
          </section>

          <aside className="lg:col-span-4">
            <div className="grid gap-5 lg:sticky lg:top-28">
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
                <h2 className="t-eyebrow text-accent">{t('contact.direct')}</h2>
                {(person.email || SHOW_PLACEHOLDERS) && <div className="mt-5 flex items-center gap-3">
                  <Mail aria-hidden className="size-5 text-muted" />
                  {person.email ? <a href={`mailto:${person.email}`} className="font-medium text-ink hover:text-accent">{person.email}</a> : <Placeholder label="[INSERT VERIFIED CONTACT EMAIL]" />}
                </div>}
                <div className="mt-5 border-t border-line pt-5">
                  {socials.length ? (
                    <ul className="flex flex-wrap gap-2">{socials.map((s) => <li key={s.id}><a href={s.url!} target="_blank" rel="noopener noreferrer me" className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm hover:border-ink">{s.label}</a></li>)}</ul>
                  ) : (
                    <Placeholder label="[INSERT OFFICIAL SOCIAL PROFILE URLS]" />
                  )}
                </div>
                <p className="mt-5 text-sm text-muted">{t('contact.response')}</p>
              </div>
              <p className="flex gap-3 rounded-2xl bg-amber-soft p-5 text-sm text-text">
                <KeyRound aria-hidden className="mt-0.5 size-4 shrink-0 text-amber" />{t('contact.sensitive')}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
