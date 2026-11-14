# abdullahalimran.com

The personal brand website for Abdullah Al Imran, built with React + Vite (React Router framework mode). Every page is prerendered to static HTML in English and Bengali.

The architecture, sitemap, design system and roadmap are in [`../docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in build/client (44 prerendered pages + sitemap.xml)
npm run typecheck
npm run assets     # regenerate share image + icons in public/
```

Deploy `build/client/` to any static host. See [`../docs/DEPLOYMENT.md`](../docs/DEPLOYMENT.md) for host settings, security headers and the post-launch Search Console checklist.

## Edit content (no component changes needed)

| What | File |
|---|---|
| Name, title, brand statement, portrait, email, social profiles | `app/content/person.ts` |
| Homepage intro, pillars, expertise, impact areas | `app/content/home.ts` |
| Ventures (add one by appending an object) | `app/content/ventures.ts` |
| Awards, nominations, speaking, training | `app/content/recognition.ts` |
| Media coverage | `app/content/media.ts` |
| Blog articles and categories | `app/content/articles.ts` |
| Case studies / testimonials | `app/content/projects.ts`, `app/content/testimonials.ts` |
| Training topics | `app/content/training.ts` |
| Page titles and meta descriptions (EN/BN) | `app/content/pageMeta.ts` |
| Buttons, labels, navigation text (EN/BN) | `app/i18n/ui.ts` |

Every text field takes `{ en: '…', bn: '…' }`. If `bn` is missing, the site falls back to English.

## Placeholders

Unverified or missing content is rendered as a labelled placeholder, such as `[INSERT VERIFIED DATE]` or `[CONFIRM OFFICIAL ROLE]`. List them all with:

```bash
grep -rnoE "\[(INSERT|CONFIRM)[^]]*\]" app
```

Rules: never invent dates, awards, clients, testimonials, statistics or media coverage. A nomination stays `type: 'nomination'`. Testimonials and case studies need `permission: 'granted'` before they are shown.

## Add images

Put approved photos in `public/images/`, then set the path in the content file (e.g. `image: '/images/tedx-drmc-youth.jpg'`).

| Photo | Suggested file name | Set it in |
|---|---|---|
| Professional portrait (4:5, ≥1200px tall) | `abdullah-al-imran-portrait.jpg` | `app/content/person.ts` → `portrait` |
| TEDx DRMC Youth | `tedx-drmc-youth.jpg` | `app/content/recognition.ts` → `image` |
| CID Police training | `cid-training-2023.jpg` | `app/content/recognition.ts` → `image` |
| Diana Award certificate / announcement | `diana-award-2026.jpg` | `app/content/recognition.ts` → `image` |
| Workshop photos | `workshop-1.jpg`, `workshop-2.jpg`, … | Training page gallery |
| Venture logos (SVG or PNG) | `/logos/probfly.svg`, … | `app/content/ventures.ts` → `logo` |

Tips: JPG or WebP, longest side about 2000px, under ~500 KB each. Use only photos you have permission to publish.
