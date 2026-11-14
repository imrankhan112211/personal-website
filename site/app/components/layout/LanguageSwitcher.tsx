import { Link, useLocation } from 'react-router'
import { localeMeta, locales, switchLocalePath } from '~/i18n/locales'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'

/** EN | বাং toggle — keeps the visitor on the same page in the other language. */
export function LanguageSwitcher({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'ink' }) {
  const { pathname, search, hash } = useLocation()
  const { locale, t } = useLocale()
  return (
    <div
      role="group"
      aria-label={t('footer.language')}
      className={cn(
        'inline-flex items-center rounded-full p-1 text-[0.8125rem] font-medium',
        tone === 'light' ? 'bg-mist' : 'bg-white/8 ring-1 ring-inset ring-white/12',
        className,
      )}
    >
      {locales.map((l) => {
        const active = l === locale
        return (
          <Link
            key={l}
            to={switchLocalePath(pathname, l) + search + hash}
            hrefLang={localeMeta[l].htmlLang}
            lang={localeMeta[l].htmlLang}
            aria-current={active ? 'true' : undefined}
            preventScrollReset
            className={cn(
              'inline-flex min-h-9 min-w-11 items-center justify-center rounded-full px-3 transition-colors duration-200',
              active
                ? tone === 'light' ? 'bg-surface text-ink shadow-sm' : 'bg-white text-ink'
                : tone === 'light' ? 'text-muted hover:text-ink' : 'text-on-ink-muted hover:text-white',
              l === 'bn' && 'font-[family-name:var(--font-bangla)]',
            )}
          >
            {localeMeta[l].short}
            <span className="sr-only"> ({localeMeta[l].label})</span>
          </Link>
        )
      })}
    </div>
  )
}
