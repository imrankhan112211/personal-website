/**
 * Turns photos in ../content-inbox into optimised WebP files in public/ (see images.manifest.json).
 * - HEIC is converted with macOS `sips` first; EXIF rotation is applied; faces/subjects are kept via attention crop.
 * - Each photo gets two widths: <out>-<w>.webp. Logos are trimmed and saved at 320px.
 * Run: npm run images
 */
import sharp from 'sharp'
import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const inbox = join(here, '../../content-inbox')
const pub = join(here, '../public')
const m = JSON.parse(readFileSync(join(here, 'images.manifest.json'), 'utf8'))
const tmp = mkdtempSync(join(tmpdir(), 'img-'))

function readable(src) {
  const p = join(inbox, src)
  if (/\.heic$/i.test(src)) {
    const out = join(tmp, src.replace(/[/ ]/g, '_') + '.jpg')
    execFileSync('sips', ['-s', 'format', 'jpeg', p, '--out', out], { stdio: 'ignore' })
    return out
  }
  return p
}
const kb = (f) => Math.round(statSync(f).size / 1024) + ' KB'

for (const ph of m.photos) {
  const input = readable(ph.src)
  for (const w of ph.widths) {
    const h = Math.round((w * ph.aspect[1]) / ph.aspect[0])
    const out = join(pub, `${ph.out}-${w}.webp`)
    mkdirSync(dirname(out), { recursive: true })
    await sharp(input).rotate().resize(w, h, { fit: 'cover', position: sharp.strategy.attention }).webp({ quality: ph.quality ?? 78 }).toFile(out)
    console.log('photo', `${ph.out}-${w}.webp`, `${w}x${h}`, kb(out))
  }
}
for (const lg of m.logos) {
  const out = join(pub, `${lg.out}.webp`)
  mkdirSync(dirname(out), { recursive: true })
  await sharp(join(inbox, lg.src)).trim({ threshold: 10 }).resize(320, 320, { fit: 'inside' }).webp({ quality: 90 }).toFile(out)
  console.log('logo ', `${lg.out}.webp`, kb(out))
}
for (const v of m.videos) {
  const out = join(pub, v.out)
  mkdirSync(dirname(out), { recursive: true })
  copyFileSync(join(inbox, v.src), out)
  console.log('video', v.out, kb(out), extname(out))
}
