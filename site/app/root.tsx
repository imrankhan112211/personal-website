import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from 'react-router'
import type { Route } from './+types/root'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { localeFromPath, localeMeta } from './i18n/locales'
import { ui } from './i18n/ui'
import '@fontsource-variable/inter/index.css'
import '@fontsource-variable/manrope/index.css'
import '@fontsource/hind-siliguri/bengali-400.css'
import '@fontsource/hind-siliguri/bengali-500.css'
import '@fontsource/hind-siliguri/bengali-600.css'
import '@fontsource/hind-siliguri/bengali-700.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url'
import manropeLatin from '@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url'
import banglaRegular from '@fontsource/hind-siliguri/files/hind-siliguri-bengali-400-normal.woff2?url'
import './app.css'

// Fonts are self-hosted (no third-party requests). Preload the two Latin faces used above the fold.
export const links: Route.LinksFunction = () => [
  { rel: 'preload', href: interLatin, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: manropeLatin, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'icon', href: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/manifest.webmanifest' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  return (
    <html lang={localeMeta[locale].htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#eef0f4" />
        <meta name="author" content="Abdullah Al Imran" />
        <Meta />
        <Links />
        {locale === 'bn' && <link rel="preload" href={banglaRegular} as="font" type="font/woff2" crossOrigin="anonymous" />}
      </head>
      <body>
        <a href="#main" className="sr-only z-[100] rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          {ui['nav.skip'][locale]}
        </a>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const status = isRouteErrorResponse(error) ? error.status : 500
  return (
    <main id="main" className="container-x section-y">
      <p className="t-eyebrow text-accent">{status}</p>
      <h1 className="t-h1 mt-4">{status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
      {import.meta.env.DEV && error instanceof Error && <pre className="mt-6 overflow-x-auto text-sm">{error.stack}</pre>}
    </main>
  )
}
