import type { Config } from '@react-router/dev/config'
import { dynamicPaths } from './app/dynamicPaths'
import { pages } from './app/pages'

const base = [...pages.map((p) => p.path), ...dynamicPaths]

export default {
  // Static hosting: every page is prerendered to HTML at build time (EN + BN).
  ssr: false,
  prerender: {
    paths: [...base.flatMap((p) => [p, p === '/' ? '/bn/' : `/bn${p}`]), '/sitemap.xml'],
    concurrency: 4,
  },
} satisfies Config
