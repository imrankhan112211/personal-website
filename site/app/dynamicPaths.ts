import { allArticles, articleCategories } from './content/articles'

/** Dynamic paths to prerender (base/English form, trailing slash). */
export const dynamicPaths = [
  ...articleCategories.map((c) => `/insights/category/${c.slug}/`),
  ...allArticles.map((a) => `/insights/${a.slug}/`),
]
