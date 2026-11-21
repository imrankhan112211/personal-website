import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

/** The site/ folder, whether the build runs from site/ or from the repo root. */
const siteRoot = existsSync(join(process.cwd(), 'app/pages.ts')) ? process.cwd() : join(process.cwd(), 'site')

/**
 * Date (YYYY-MM-DD) of the last commit that touched any of these site-relative paths, for <lastmod>.
 * Returns undefined when git isn't available, so the sitemap simply leaves lastmod out rather than guessing.
 */
export function gitLastmod(paths: string[]): string | undefined {
  const files = paths.map((p) => join(siteRoot, p)).filter((p) => existsSync(p))
  if (!files.length) return undefined
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { cwd: siteRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : undefined
  } catch {
    return undefined
  }
}
