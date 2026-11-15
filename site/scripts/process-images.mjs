/**
 * Turns photos in ../content-inbox into optimised WebP files in public/ (see images.manifest.json).
 * - HEIC is converted with macOS `sips` first; EXIF rotation is applied; faces/subjects are kept via attention crop.
 * - Each photo gets two widths: <out>-<w>.webp. Logos are trimmed and saved at 320px.
 * Run: npm run images
 */
import sharp from 'sharp'
import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
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

// ── Review screenshots / video thumbnails ──────────────────────────────
// content-inbox/07-testimonials-screenshots/<Person name>.jpg  → matched to a name in reviews.ts
// content-inbox/09-review-avatars/<Person name>.jpg          → small round profile picture (used when there is no screenshot)
// content-inbox/08-video-reviews/<number>.jpg                  → video review number (see LIST.txt there)
const key = (t) => t.normalize('NFKD').toLowerCase().replace(/^\d+\s*[-–.)]\s*/, '').replace(/[^\p{L}\p{N}]+/gu, '')
const reviewsSrc = readFileSync(join(here, '../app/content/reviews.ts'), 'utf8')
const postNames = [...reviewsSrc.matchAll(/name: '((?:[^'\\]|\\.)+)'/g)].map((m) => m[1].replace(/\\'/g, "'"))
const videoCount = (reviewsSrc.match(/caption: '/g) ?? []).length
const imgExt = /\.(jpe?g|png|webp|heic)$/i
const index = { posts: {}, avatars: {}, videos: {} }
const revOut = join(pub, 'images/reviews')
mkdirSync(revOut, { recursive: true })

const postDir = join(inbox, '07-testimonials-screenshots')
if (existsSync(postDir)) {
  for (const f of readdirSync(postDir).filter((f) => imgExt.test(f))) {
    const k = key(f.replace(imgExt, ''))
    const name = postNames.find((n) => key(n) === k)
    if (!name) { console.log('review  (no matching name, skipped):', f); continue }
    const out = join(revOut, `post-${k}.webp`)
    await sharp(readable(join('07-testimonials-screenshots', f))).rotate().resize(480, 480, { fit: 'cover', position: 'top' }).webp({ quality: 72 }).toFile(out)
    index.posts[name] = `/images/reviews/post-${k}.webp`
  }
}
const avDir = join(inbox, '09-review-avatars')
if (existsSync(avDir)) {
  for (const f of readdirSync(avDir).filter((f) => imgExt.test(f))) {
    const k = key(f.replace(imgExt, ''))
    const name = postNames.find((n) => key(n) === k)
    if (!name) { console.log('avatar  (no matching name, skipped):', f); continue }
    const out = join(revOut, `avatar-${k}.webp`)
    await sharp(readable(join('09-review-avatars', f))).rotate().resize(96, 96, { fit: 'cover' }).webp({ quality: 78 }).toFile(out)
    index.avatars[name] = `/images/reviews/avatar-${k}.webp`
  }
}
const vidDir = join(inbox, '08-video-reviews')
if (existsSync(vidDir)) {
  for (const f of readdirSync(vidDir).filter((f) => imgExt.test(f))) {
    const n = parseInt(f, 10)
    if (!(n >= 1 && n <= videoCount)) { console.log('video   (name must start with 1–' + videoCount + ', skipped):', f); continue }
    const out = join(revOut, `video-${n}.webp`)
    await sharp(readable(join('08-video-reviews', f))).rotate().resize(360, 640, { fit: 'cover', position: sharp.strategy.attention }).webp({ quality: 72 }).toFile(out)
    index.videos[n] = `/images/reviews/video-${n}.webp`
  }
}
// ── Media coverage thumbnails ──────────────────────────────────────────
// content-inbox/11-media-thumbnails/<media id>.(img|jpg|png|webp) → 16:9 card image, 800 + 400 wide.
// Pictures far from 16:9 (portraits, panoramas) are placed whole on a blurred copy of themselves.
const mediaSrc = readFileSync(join(here, '../app/content/media.ts'), 'utf8')
const mediaIds = new Set([...mediaSrc.matchAll(/id: '([^']+)'/g)].map((x) => x[1]))
const mediaDir = join(inbox, '11-media-thumbnails')
const mediaIndex = {}
if (existsSync(mediaDir)) {
  mkdirSync(join(pub, 'images/media'), { recursive: true })
  for (const f of readdirSync(mediaDir).filter((f) => /\.(img|jpe?g|png|webp)$/i.test(f)).sort()) {
    const id = f.replace(/\.[^.]+$/, '')
    if (!mediaIds.has(id)) { console.log('media   (no matching id, skipped):', f); continue }
    const input = await sharp(join(mediaDir, f)).rotate().toBuffer()
    const { width, height } = await sharp(input).metadata()
    const ratio = width / height
    for (const w of [800, 400]) {
      const h = Math.round((w * 9) / 16)
      let img
      if (ratio > 1.45 && ratio < 2.05) {
        img = sharp(input).resize(w, h, { fit: 'cover', position: sharp.strategy.attention })
      } else {
        const bg = await sharp(input).resize(w, h, { fit: 'cover' }).blur(18).modulate({ brightness: 0.82 }).toBuffer()
        const fg = await sharp(input).resize(w, h, { fit: 'inside' }).toBuffer()
        img = sharp(bg).composite([{ input: fg, gravity: 'center' }])
      }
      await img.webp({ quality: 76 }).toFile(join(pub, `images/media/${id}-${w}.webp`))
    }
    mediaIndex[id] = `/images/media/${id}-800.webp`
  }
}
writeFileSync(join(here, '../app/content/mediaImages.json'), JSON.stringify(mediaIndex, null, 1) + '\n')
console.log(`media: ${Object.keys(mediaIndex).length} thumbnails`)

writeFileSync(join(here, '../app/content/reviewImages.json'), JSON.stringify(index, null, 1) + '\n')
console.log(`reviews: ${Object.keys(index.posts).length} post images, ${Object.keys(index.avatars).length} avatars, ${Object.keys(index.videos).length} video thumbnails`)
