/**
 * After `react-router build`: copy the SPA fallback to 404.html so static hosts
 * (Cloudflare Pages, Netlify) show the site's branded "page not found" for unknown URLs.
 */
import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const dir = fileURLToPath(new URL('../build/client/', import.meta.url))
if (existsSync(dir + '__spa-fallback.html')) {
  copyFileSync(dir + '__spa-fallback.html', dir + '404.html')
  console.log('postbuild: wrote build/client/404.html')
}
