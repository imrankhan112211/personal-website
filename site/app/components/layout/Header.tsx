import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { ctaLinks, moreNav, primaryNav } from '~/content/navigation'
import { person } from '~/content/person'
import { useLocale } from '~/i18n/useLocale'
import { cn } from '~/lib/utils'
import { ButtonLink } from '../ui/Button'
import { LocalLink } from '../ui/LocalLink'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Wordmark({ tone = 'light' }: { tone?: 'light' | 'ink' }) {
  const { l, t } = useLocale()
  return (
    <LocalLink to="/" className="group flex min-h-11 items-center gap-3">
      <span
        aria-hidden
        className={cn(
          'grid size-9 place-items-center rounded-[10px] font-display text-[0.8rem] font-extrabold tracking-tight transition-transform duration-300 group-hover:-rotate-6',
          tone === 'light' ? 'bg-ink text-white' : 'bg-white text-ink',
        )}
      >
        {person.monogram}
      </span>
      <span className={cn("whitespace-nowrap font-display text-[1.0625rem] font-bold tracking-tight", tone === "light" && "lg:max-xl:sr-only")}>{l(person.name)}</span>
      <span className="sr-only"> — {t('nav.home')}</span>
    </LocalLink>
  )
}

export function Header() {
  const { t, href } = useLocale()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLLIElement>(null)
  const moreBtnRef = useRef<HTMLButtonElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const moreId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation
  useEffect(() => { setMobileOpen(false); setMoreOpen(false) }, [pathname])

  // Lock scroll + Escape for the mobile sheet
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMobileOpen(false); menuBtnRef.current?.focus() } }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [mobileOpen])

  // "More" dropdown: outside click + Escape
  useEffect(() => {
    if (!moreOpen) return
    const onDown = (e: PointerEvent) => !moreRef.current?.contains(e.target as Node) && setMoreOpen(false)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMoreOpen(false); moreBtnRef.current?.focus() } }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey) }
  }, [moreOpen])

  const navCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200 hover:text-ink',
      isActive ? 'text-ink after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:bg-ink' : 'text-muted',
    )

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="container-x">
      <div
        className={cn(
          'flex h-16 items-center justify-between gap-6 rounded-full pl-4 pr-2.5 transition-[background-color,box-shadow] duration-300',
          scrolled || mobileOpen ? 'bg-surface/90 shadow-[0_12px_40px_-20px_rgb(11_13_18/0.35)] backdrop-blur-md' : 'bg-surface',
        )}
      >
        <Wordmark />

        <nav aria-label={t('nav.main')} className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {primaryNav.map((n) => (
              <li key={n.href}>
                <NavLink to={href(n.href)} className={navCls}>{t(n.key)}</NavLink>
              </li>
            ))}
            <li className="relative" ref={moreRef}>
              <button
                ref={moreBtnRef}
                type="button"
                aria-expanded={moreOpen}
                aria-controls={moreId}
                onClick={() => setMoreOpen((o) => !o)}
                className="inline-flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink"
              >
                {t('nav.more')}
                <ChevronDown aria-hidden className={cn('size-4 transition-transform duration-200', moreOpen && 'rotate-180')} />
              </button>
              <ul
                id={moreId}
                hidden={!moreOpen}
                className="absolute right-0 top-[calc(100%+0.75rem)] w-60 rounded-2xl border border-line bg-surface p-2 shadow-[0_20px_50px_-20px_rgb(14_23_38/0.25)]"
              >
                {moreNav.map((n) => (
                  <li key={n.href}>
                    <NavLink
                      to={href(n.href)}
                      className={({ isActive }) => cn('flex min-h-11 items-center rounded-xl px-3.5 text-[0.9375rem] transition-colors hover:bg-mist', isActive ? 'text-ink font-medium' : 'text-muted')}
                    >
                      {t(n.key)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ButtonLink to={ctaLinks.consulting} size="sm" className="hidden md:inline-flex">{t('cta.book')}</ButtonLink>
          <button
            ref={menuBtnRef}
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-full transition-colors hover:bg-mist lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? t('nav.close') : t('nav.menu')}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      </div>

      {/* Mobile sheet */}
      <div id={menuId} hidden={!mobileOpen} className="mx-5 mt-2 max-h-[calc(100dvh-6.5rem)] overflow-y-auto rounded-[var(--radius-card)] bg-surface shadow-[0_24px_60px_-24px_rgb(11_13_18/0.45)] md:mx-8 lg:hidden">
        <nav aria-label={t('nav.main')} className="container-x flex min-h-full flex-col py-6">
          <ul className="grid gap-0.5">
            {[{ key: 'nav.home' as const, href: '/' }, ...primaryNav, ...moreNav].map((n) => (
              <li key={n.href}>
                <NavLink
                  to={href(n.href)}
                  end={n.href === '/'}
                  className={({ isActive }) => cn('flex min-h-12 items-center border-b border-line font-display text-xl font-semibold tracking-tight', isActive ? 'text-accent' : 'text-ink')}
                >
                  {t(n.key)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 pb-6">
            <ButtonLink to={ctaLinks.consulting} size="lg">{t('cta.book')}</ButtonLink>
            <ButtonLink to={ctaLinks.training} variant="outline" size="lg">{t('cta.invite')}</ButtonLink>
            <LanguageSwitcher className="mt-3 self-start" />
          </div>
        </nav>
      </div>
    </header>
  )
}
