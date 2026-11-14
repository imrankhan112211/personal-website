import { ArrowUpRight } from 'lucide-react'
import { ctaLinks } from '~/content/navigation'
import { person } from '~/content/person'
import { ventures } from '~/content/ventures'
import { useLocale } from '~/i18n/useLocale'
import type { UiKey } from '~/i18n/ui'
import { Placeholder } from '../ui/Placeholder'
import { LocalLink } from '../ui/LocalLink'
import { Wordmark } from './Header'
import { LanguageSwitcher } from './LanguageSwitcher'

const explore: { key: UiKey; href: string }[] = [
  { key: 'nav.about', href: '/about/' },
  { key: 'nav.biography', href: '/about/biography/' },
  { key: 'nav.impact', href: '/impact/' },
  { key: 'nav.recognition', href: '/recognition/' },
  { key: 'nav.media', href: '/media/' },
  { key: 'nav.insights', href: '/insights/' },
  { key: 'nav.resources', href: '/resources/' },
]
const work: { key: UiKey; href: string }[] = [
  { key: 'nav.consulting', href: '/consulting/' },
  { key: 'nav.training', href: '/training/' },
  { key: 'cta.book', href: ctaLinks.consulting },
  { key: 'cta.invite', href: ctaLinks.training },
  { key: 'nav.contact', href: '/contact/' },
]

export function Footer() {
  const { t, l } = useLocale()
  const socials = person.socials.filter((s) => s.url)
  const linkCls = 'inline-flex min-h-9 items-center text-on-ink-muted transition-colors hover:text-white'

  return (
    <footer className="container-x pb-3 pt-3">
      <div className="on-ink overflow-hidden rounded-[var(--radius-card)] bg-ink text-on-ink">
      <div className="grid gap-12 px-6 pb-10 pt-14 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Wordmark tone="ink" />
          <p className="mt-6 max-w-sm text-on-ink-muted">{l(person.supporting)}</p>
          <p className="mt-4 text-sm text-on-ink-muted">{l(person.title)}</p>
          <div className="mt-6 text-sm">
            {person.email ? (
              <a href={`mailto:${person.email}`} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">{person.email}</a>
            ) : (
              <Placeholder tone="ink" label="[INSERT VERIFIED CONTACT EMAIL]" />
            )}
          </div>
        </div>

        <nav aria-label={t('footer.explore')} className="lg:col-span-2">
          <h2 className="t-eyebrow text-white/60">{t('footer.explore')}</h2>
          <ul className="mt-4 grid">{explore.map((n) => <li key={n.href}><LocalLink to={n.href} className={linkCls}>{t(n.key)}</LocalLink></li>)}</ul>
        </nav>
        <nav aria-label={t('footer.work')} className="lg:col-span-2">
          <h2 className="t-eyebrow text-white/60">{t('footer.work')}</h2>
          <ul className="mt-4 grid">{work.map((n) => <li key={n.href}><LocalLink to={n.href} className={linkCls}>{t(n.key)}</LocalLink></li>)}</ul>
        </nav>
        <nav aria-label={t('footer.ventures')} className="lg:col-span-2">
          <h2 className="t-eyebrow text-white/60">{t('footer.ventures')}</h2>
          <ul className="mt-4 grid">
            {ventures.map((v) => (
              <li key={v.slug}>
                {v.url ? (
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {v.name}<ArrowUpRight aria-hidden className="ml-1 size-3.5" />
                  </a>
                ) : (
                  <LocalLink to="/ventures/" className={linkCls}>{v.name}</LocalLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-2">
          <h2 className="t-eyebrow text-white/60">{t('footer.connect')}</h2>
          {socials.length ? (
            <ul className="mt-4 grid">
              {socials.map((s) => (
                <li key={s.id}><a href={s.url!} target="_blank" rel="noopener noreferrer me" className={linkCls}>{s.label}</a></li>
              ))}
            </ul>
          ) : (
            <Placeholder tone="ink" className="mt-4" label="[INSERT OFFICIAL SOCIAL PROFILE URLS]" />
          )}
          <h2 className="t-eyebrow mt-8 text-white/60">{t('footer.language')}</h2>
          <LanguageSwitcher tone="ink" className="mt-3" />
        </div>
      </div>

      <div className="mx-6 flex flex-col gap-3 border-t border-on-ink-line py-6 md:mx-10 text-sm text-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {l(person.name)}. {t('footer.rights')}</p>
        <ul className="flex gap-5">
          <li><LocalLink to="/privacy/" className="hover:text-white">{t('footer.privacy')}</LocalLink></li>
          <li><LocalLink to="/terms/" className="hover:text-white">{t('footer.terms')}</LocalLink></li>
        </ul>
      </div>
      </div>
    </footer>
  )
}
