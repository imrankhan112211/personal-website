import type { Route } from './+types/home'
import { About } from '~/components/sections/home/About'
import { CredentialsBand } from '~/components/sections/home/CredentialsBand'
import { Problem } from '~/components/sections/home/Problem'
import { Hero } from '~/components/sections/home/Hero'
import { HomeMedia } from '~/components/sections/home/HomeMedia'
import { HomeReviews } from '~/components/sections/home/HomeReviews'
import { Recognition } from '~/components/sections/home/Recognition'
import { TrustedBy } from '~/components/sections/home/TrustedBy'
import { SpeakingStrip } from '~/components/sections/home/SpeakingStrip'
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
      {/* Hero → credentials + numbers → trusted by → problem → framework (services) → profile → client words → recognition → press → CTA */}
      <Hero />
      <CredentialsBand />
      <TrustedBy />
      <Problem />
      <WhatIDo />
      <SpeakingStrip />
      <About />
      <HomeReviews />
      <Recognition />
      <HomeMedia />
      <div className="pt-14 md:pt-20" />
      <CtaBand detailed />
    </main>
  )
}
