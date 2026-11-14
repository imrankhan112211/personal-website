/**
 * Serves the production build (build/client) locally, like a static host would.
 * Run: npm run build && npm run preview   →  http://localhost:4173
 */
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../build/client/', import.meta.url))
const port = Number(process.env.PORT) || 4173
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json', '.data': 'text/x-script',
}

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '')
  const file = join(root, clean)
  if (!file.startsWith(root)) return null
  try {
    const s = await stat(file)
    if (s.isDirectory()) return (await stat(join(file, 'index.html')).catch(() => null)) ? join(file, 'index.html') : null
    return file
  } catch { return null }
}

createServer(async (req, res) => {
  const path = req.url || '/'
  // Mirror static hosts: /about → /about/
  if (!extname(path.split('?')[0]) && !path.split('?')[0].endsWith('/')) {
    const [p, q] = path.split('?')
    res.writeHead(301, { Location: `${p}/${q ? `?${q}` : ''}` })
    return res.end()
  }
  const file = await resolve(path)
  const target = file ?? join(root, '__spa-fallback.html')
  const body = await readFile(target)
  res.writeHead(file ? 200 : 404, { 'Content-Type': types[extname(target)] ?? 'application/octet-stream' })
  res.end(body)
}).listen(port, () => console.log(`Production build: http://localhost:${port}`))
