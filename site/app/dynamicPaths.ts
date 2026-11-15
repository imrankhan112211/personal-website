import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { articleCategories } from './content/categories'

/** Article slugs from site/articles/*.md (drafts excluded) — read from disk because this runs in Node. */
function articleSlugs(): string[] {
  const dir = fileURLToPath(new URL('../articles', import.meta.url))
  let names: string[] = []
  try { names = readdirSync(dir).filter((f) => f.endsWith('.md')) } catch { return [] }
  const slugs = new Set<string>()
  for (const f of names) {
    if (f.startsWith('_')) continue
    const raw = readFileSync(join(dir, f), 'utf8')
    if (/^---[\s\S]*?\ndraft:\s*true[\s\S]*?\n---/m.test(raw)) continue
    slugs.add(f.replace(/\.bn\.md$|\.md$/, ''))
  }
  return [...slugs]
}

/** Dynamic paths to prerender (base/English form, trailing slash). */
export const dynamicPaths = [
  ...articleCategories.map((c) => `/blog/category/${c.slug}/`),
  ...articleSlugs().map((s) => `/blog/${s}/`),
]
