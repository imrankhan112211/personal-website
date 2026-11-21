import { data } from 'react-router'
import type { Route } from './+types/insights-category'
import { InsightsListing } from '~/components/sections/shared/InsightsListing'
import { PageHero } from '~/components/sections/shared/PageHero'
import { articleCategories, articles } from '~/content/articles'
import { localeFromPath, tr } from '~/i18n/locales'
import { ui } from '~/i18n/ui'
import { useLocale } from '~/i18n/useLocale'
import { breadcrumbSchema } from '~/lib/schema'
import { buildMeta } from '~/lib/seo'

export function loader({ params }: Route.LoaderArgs) {
  const cat = articleCategories.find((c) => c.slug === params.category)
  if (!cat) throw data(null, { status: 404 })
  return { slug: cat.slug }
}

export function meta({ location, params }: Route.MetaArgs) {
  const locale = localeFromPath(location.pathname)
  const cat = articleCategories.find((c) => c.slug === params.category)
  if (!cat) return [{ title: 'Not found' }]
  const path = `/blog/category/${cat.slug}/`
  return buildMeta({
    locale,
    path,
    title: { en: `${cat.name.en} — Insights`, bn: `${cat.name.bn} — লেখা ও ভাবনা` },
    description: { en: `Articles by Abdullah Al Imran on ${cat.name.en.toLowerCase()} — practical guidance for individuals, creators and online businesses.`, bn: `${cat.name.bn} বিষয়ে আব্দুল্লাহ আল ইমরানের লেখা — ব্যক্তি, ক্রিয়েটর ও অনলাইন ব্যবসার জন্য বাস্তবসম্মত নির্দেশনা।` },
    // An empty category is a thin page: keep it out of Google until it has a published article (sitemap does the same).
    noindex: !articles.some((a) => a.category === cat.slug),
    jsonLd: [breadcrumbSchema(locale, [{ name: ui['nav.home'][locale], path: '/' }, { name: ui['nav.insights'][locale], path: '/blog/' }, { name: tr(cat.name, locale), path }])],
  })
}

export default function InsightsCategory({ loaderData }: Route.ComponentProps) {
  const { t, l } = useLocale()
  const cat = articleCategories.find((c) => c.slug === loaderData.slug)!
  return (
    <main id="main">
      <PageHero crumbs={[{ label: t('nav.insights'), to: '/blog/' }, { label: l(cat.name) }]} eyebrow={t('ins.category.eyebrow')} title={l(cat.name)} lead={t('ins.lead')} />
      <InsightsListing category={cat.slug} />
    </main>
  )
}
