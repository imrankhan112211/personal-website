import type { Route } from './+types/home'
import { About } from '~/components/sections/home/About'
import { Hero } from '~/components/sections/home/Hero'
import { HomeMedia } from '~/components/sections/home/HomeMedia'
import { HomeReviews } from '~/components/sections/home/HomeReviews'
import { Recognition } from '~/components/sections/home/Recognition'
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
      {/* 1 Who I am → 2 What I offer → 3 Who I've worked with → 4 Awards → 5 Press → CTA */}
      <Hero />
      <About />
      <WhatIDo />
      <HomeReviews />
      <Recognition />
      <HomeMedia />
      <div className="pt-14 md:pt-20" />
      <CtaBand />
    </main>
  )
}
