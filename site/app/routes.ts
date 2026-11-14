import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes'
import { pages } from './pages'

// One page list -> English routes at the root + Bengali mirror under /bn/
function tree(locale: 'en' | 'bn') {
  return [
    ...pages.map((p) =>
      p.path === '/'
        ? index(p.file, { id: `${locale}-${p.id}` })
        : route(p.path.slice(1, -1), p.file, { id: `${locale}-${p.id}` }),
    ),
    route('insights/category/:category', 'routes/insights-category.tsx', { id: `${locale}-insights-category` }),
    route('insights/:slug', 'routes/article.tsx', { id: `${locale}-article` }),
  ]
}

export default [
  ...tree('en'),
  ...prefix('bn', tree('bn')),
  route('sitemap.xml', 'routes/sitemap.ts', { id: 'sitemap' }),
  route('llms.txt', 'routes/llms.ts', { id: 'llms' }),
  route('*', 'routes/not-found.tsx', { id: 'not-found' }),
] satisfies RouteConfig
