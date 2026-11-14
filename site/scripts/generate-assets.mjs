/**
 * Generates the default social share image and app icons into /public.
 * Run: npm run assets   (re-run after changing name/title/colours)
 * Replace public/og-default.png with a designed image that includes the approved portrait when available.
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const outUrl = new URL('../public/', import.meta.url)
const out = fileURLToPath(outUrl)
const file = (n) => fileURLToPath(new URL(n, outUrl))
await mkdir(out, { recursive: true })

const ink = '#0E1726', ink2 = '#1B2638', accent = '#2B59C3', sky = '#9DB7F5'
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
  <text x="72" y="300" font-family="${font}" font-weight="800" font-size="76" fill="white" letter-spacing="-2.5">Abdullah Al Imran</text>
  <text x="72" y="356" font-family="${font}" font-weight="500" font-size="27" fill="#A9B3C4">Technology Entrepreneur · Cyber Safety Advocate</text>
  <text x="72" y="394" font-family="${font}" font-weight="500" font-size="27" fill="#A9B3C4">Trainer · Consultant</text>
  <rect x="72" y="452" width="200" height="40" rx="20" fill="#C8F169"/>
  <text x="172" y="478" text-anchor="middle" font-family="${font}" font-weight="700" font-size="18" fill="#1D2600">Diana Award 2026</text>
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

// Portrait panel on the right (uses the processed portrait from `npm run images`, if present)
const portraitPath = file('images/abdullah-al-imran-portrait-960.webp')
const layers = []
try {
  const panel = await sharp(portraitPath).resize(400, 630, { fit: 'cover', position: 'top' }).toBuffer()
  const mask = Buffer.from('<svg width="400" height="630"><rect x="0" y="0" width="400" height="630" rx="0" fill="white"/></svg>')
  layers.push({ input: await sharp(panel).composite([{ input: mask, blend: 'dest-in' }]).toBuffer(), left: 800, top: 0 })
} catch { /* no portrait yet — text-only card */ }
await sharp(Buffer.from(og)).composite(layers).png({ compressionLevel: 9 }).toFile(file('og-default.png'))
for (const [name, size, pad] of [['favicon-32.png', 32, 0], ['apple-touch-icon.png', 180, 0], ['icon-192.png', 192, 0], ['icon-512.png', 512, 0], ['icon-maskable-512.png', 512, 80]]) {
  const svg = name === 'apple-touch-icon.png' || name.includes('maskable') ? icon(size, pad).replace(/rx="\d+"/, 'rx="0"') : icon(size, pad)
  await sharp(Buffer.from(svg)).png().toFile(file(name))
}
console.log('Generated og-default.png and icons in public/')
