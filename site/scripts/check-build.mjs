/**
 * Checks the built site (build/client) for common problems. Run after `npm run build`:  npm run check
 * - broken internal links          - one <h1> per page, no skipped heading levels
 * - title / description / canonical present, unique and sensible length
 * - images have alt text            - no editing placeholders left on public pages
 * - valid JSON-LD
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../build/client', import.meta.url))
const pages = new Map()
;(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (f === 'index.html') pages.set('/' + relative(root, d).split('\\').join('/') + (d === root ? '' : '/'), readFileSync(p, 'utf8'))
  }
})(root)
const norm = (p) => (p === '//' ? '/' : p.replace(/\/\/+/g, '/'))
const problems = []
const titles = new Map(), descs = new Map()
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
for (const [rawPath, html] of pages) {
  const path = norm(rawPath)
  const title = dec(html.match(/<title>(.*?)<\/title>/)?.[1] ?? '')
  const desc = dec(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '')
  const canon = html.match(/rel="canonical" href="([^"]+)"/)?.[1]
  const noindex = /name="robots" content="noindex/.test(html)
  if (!title) problems.push(`${path}: missing <title>`)
  if (!noindex) {
    if (title.length > 70) problems.push(`${path}: title is ${title.length} chars (keep ≤ 70)`)
    if (desc.length < 50 || desc.length > 170) problems.push(`${path}: description is ${desc.length} chars (aim for 50–170)`)
    titles.set(title, [...(titles.get(title) ?? []), path])
    descs.set(desc, [...(descs.get(desc) ?? []), path])
  }
  if (!canon) problems.push(`${path}: missing canonical`)
  const h = [...html.matchAll(/<h([1-6])[ >]/g)].map((m) => +m[1])
  if (h.filter((x) => x === 1).length !== 1) problems.push(`${path}: has ${h.filter((x) => x === 1).length} <h1>`)
  h.forEach((lvl, i) => i && lvl > h[i - 1] + 1 && problems.push(`${path}: heading jumps h${h[i - 1]} → h${lvl}`))
  for (const img of html.match(/<img\b[^>]*>/g) ?? []) if (!/\balt=/.test(img)) problems.push(`${path}: image without alt`)
  if (html.includes('data-placeholder')) problems.push(`${path}: editing placeholder visible`)
  for (const b of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(b[1]) } catch { problems.push(`${path}: invalid JSON-LD`) }
  }
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1]
    if (href.startsWith('/assets') || /\.[a-z0-9]+$/i.test(href)) continue
    const target = href.endsWith('/') ? href : href + '/'
    if (![...pages.keys()].some((p) => norm(p) === target)) problems.push(`${path}: broken link ${href}`)
  }
}
for (const [t, ps] of titles) if (ps.length > 1) problems.push(`duplicate title "${t}" on ${ps.join(', ')}`)
for (const [d, ps] of descs) if (ps.length > 1) problems.push(`duplicate description on ${ps.join(', ')}`)
const unique = [...new Set(problems)]
console.log(`Checked ${pages.size} pages.`)
if (unique.length) { console.log(unique.map((p) => '  ✗ ' + p).join('\n')); process.exit(1) }
console.log('  ✓ No problems found.')
