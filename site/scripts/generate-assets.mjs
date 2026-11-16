/**
 * Generates the default social share image and app icons into /public.
 * Run: npm run assets   (re-run after changing name/title/colours)
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const outUrl = new URL('../public/', import.meta.url)
const out = fileURLToPath(outUrl)
const file = (n) => fileURLToPath(new URL(n, outUrl))
await mkdir(out, { recursive: true })

const ink = '#0A1428', ink2 = '#12264A', accent = '#1C5FD0', sky = '#AAB8D0', gold = '#D8B46A'
const font = "'Helvetica Neue', Helvetica, Arial, sans-serif"

const grid = (w, h, step) => {
  let d = ''
  for (let x = step; x < w; x += step) d += `M${x} 0V${h}`
  for (let y = step; y < h; y += step) d += `M0 ${y}H${w}`
  return `<path d="${d}" stroke="white" stroke-opacity="0.05" stroke-width="1"/>`
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.55" cy="1" r="0.7"><stop offset="0" stop-color="${accent}" stop-opacity="0.5"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${ink}"/>
  ${grid(1200, 630, 80)}
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="72" y="72" width="60" height="60" rx="15" fill="white"/>
  <text x="102" y="111" text-anchor="middle" font-family="${font}" font-weight="800" font-size="24" fill="${ink}" letter-spacing="-1">AI</text>
  <text x="152" y="110" font-family="${font}" font-weight="500" font-size="20" fill="${sky}" letter-spacing="3">ABDULLAHALIMRAN.COM</text>
  <text x="72" y="300" font-family="${font}" font-weight="800" font-size="70" fill="white" letter-spacing="-2.5">Abdullah Al Imran</text>
  <text x="72" y="356" font-family="${font}" font-weight="500" font-size="27" fill="${sky}">Technology Entrepreneur · Cyber Safety Advocate</text>
  <text x="72" y="394" font-family="${font}" font-weight="500" font-size="27" fill="${sky}">Founder, Probfly IT and Kaktaruaa</text>
  <rect x="72" y="452" width="232" height="40" rx="20" fill="${gold}"/>
  <text x="188" y="478" text-anchor="middle" font-family="${font}" font-weight="700" font-size="18" fill="#2B2008">The Diana Award 2026</text>
  <text x="72" y="548" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="27" fill="white">Advocating for a safer digital world through</text>
  <text x="72" y="584" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="27" fill="white">technology, awareness and digital protection.</text>
</svg>`

const icon = (size, pad = 0) => {
  const r = Math.round(size * 0.22), inner = size - pad * 2
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${pad ? 0 : r}" fill="${ink}"/>
  <text x="${size / 2}" y="${size / 2 + inner * 0.15}" text-anchor="middle" font-family="${font}" font-weight="800" font-size="${inner * 0.42}" fill="white" letter-spacing="${-inner * 0.015}">AI</text>
</svg>`
}

// Portrait panel on the right: the homepage hero cut-out on the site's light-blue gradient
const heroPath = file('images/abdullah-al-imran-hero-840.webp')
const layers = []
try {
  const bg = Buffer.from(`<svg width="420" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfe6f7"/><stop offset="0.6" stop-color="#e4f0fa"/><stop offset="1" stop-color="#f3eef5"/></linearGradient></defs><rect width="420" height="630" fill="url(#g)"/></svg>`)
  const big = await sharp(heroPath).resize({ height: 500 }).toBuffer()
  const bm = await sharp(big).metadata()
  const person = await sharp(big).extract({ left: Math.max(0, Math.round(bm.width * 0.56 - 210)), top: 0, width: 420, height: 500 }).toBuffer()
  const pm = await sharp(person).metadata()
  const panel = await sharp(bg).composite([{ input: person, left: Math.round((420 - pm.width) / 2), top: 630 - pm.height }]).png().toBuffer()
  layers.push({ input: panel, left: 780, top: 0 })
} catch { /* no hero image yet — text-only card */ }
await sharp(Buffer.from(og)).composite(layers).flatten({ background: ink }).jpeg({ quality: 84, mozjpeg: true }).toFile(file('og-default.jpg'))
// Favicon + app icons: the full background-removed microphone photo (hero image), fitted whole into the square.
const iconSrc = file('images/abdullah-al-imran-hero-840.webp')
for (const [name, size, opaque] of [['favicon-32.png', 32, false], ['favicon-48.png', 48, false], ['apple-touch-icon.png', 180, true], ['icon-192.png', 192, false], ['icon-512.png', 512, false], ['icon-maskable-512.png', 512, true]]) {
  const inner = name.includes('maskable') ? Math.round(size * 0.8) : size
  const img = await sharp(iconSrc).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
  const bg = opaque ? { r: 255, g: 255, b: 255, alpha: 1 } : { r: 0, g: 0, b: 0, alpha: 0 }
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } }).composite([{ input: img, gravity: 'center' }]).png().toFile(file(name))
}
console.log('Generated og-default.jpg and icons in public/')
