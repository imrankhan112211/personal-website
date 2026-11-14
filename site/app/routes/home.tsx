import type { Route } from './+types/home'
import { About } from '~/components/sections/home/About'
import { Expertise } from '~/components/sections/home/Expertise'
import { Hero } from '~/components/sections/home/Hero'
import { Impact } from '~/components/sections/home/Impact'
import { HomeReviews } from '~/components/sections/home/HomeReviews'
import { MediaInsights } from '~/components/sections/home/MediaInsights'
import { Recognition } from '~/components/sections/home/Recognition'
import { Training } from '~/components/sections/home/Training'
import { Ventures } from '~/components/sections/home/Ventures'
import { WhatIDo } from '~/components/sections/home/WhatIDo'
import { CtaBand } from '~/components/sections/shared/CtaBand'
import { localeFromPath } from '~/i18n/locales'
import { metaFor } from '~/lib/page'
import { personSchema, websiteSchema } from '~/lib/schema'

export function meta({ location }: Route.MetaArgs) {
  const locale = localeFromPath(location.pathname)
  return metaFor('home', location.pathname, [websiteSchema(locale), personSchema(locale)])
}

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <WhatIDo />
      <Expertise />
      <Training />
      <Ventures />
      <HomeReviews />
      <Impact />
      <Recognition />
      <MediaInsights />
      <div className="pt-14 md:pt-20" />
      <CtaBand />
    </main>
  )
}
