# abdullahalimran.com — Architecture & Design System

Stage 1 + Stage 2 deliverable. Living document: update it when the structure changes.

---

## 1. Project inspection (Stage 1)

| Item | Finding |
|---|---|
| Existing app | A placeholder React + Vite portfolio built earlier in this session (generic developer content). It does not match this brief, so it was moved to `archive/portfolio-v1/` (not deleted). |
| Skills | `.claude/skills/` — ui-ux-pro-max, design-system, ui-styling, brand, design, banner-design, slides. |
| Design system output | `design-system/abdullah-al-imran/` came from the old brief and is **superseded** by section 4 of this document. |
| Assets | None. No portraits, logos or photographs yet. Every image slot uses a labelled placeholder. |
| Git | Not a git repository yet. |

## 2. Technical architecture

**React 19 + Vite 8 using React Router 8 framework mode, with `ssr: false` and build-time prerendering.**

- React and Vite, as requested.
- Every route (English and Bengali) is **prerendered to static HTML** at build time. Crawlers and AI search engines get full content, metadata, hreflang and JSON-LD without running JavaScript, which a plain Vite SPA cannot provide.
- After load the site hydrates into a fast client-side app. Deploys to any static host (Cloudflare Pages, Netlify, Vercel static, S3 + CloudFront).
- Route `meta` exports give each page its own title, description, canonical link, hreflang and structured data.
- Tailwind CSS v4 with design tokens defined as CSS variables (`app/app.css`).
- Self-hosted fonts via Fontsource (Inter, Manrope, Hind Siliguri, Instrument Serif). No third-party requests; Latin faces are preloaded and the Bengali face is preloaded on `/bn/` pages.
- Lucide icons. **No animation library:** reveals use CSS scroll-driven animations, so content is never hidden from crawlers and the site ships less JavaScript.
- CMS-ready: all content lives in typed modules in `app/content/`. A future headless CMS only needs to replace those modules with route `loader` calls that return the same types. Components never change.

### Rendering and SEO rules
- Content must be visible in the HTML without JavaScript. Motion is progressive enhancement only.
- Structured data is generated from the same content files as the visible page, so the two cannot drift apart.
- URLs use trailing slashes (`/about/`). Canonical tags and hreflang always point to the trailing-slash form.

## 3. Sitemap

English at the root, Bengali under `/bn/`. Every page exists in both languages.

```
/                         Home
/about/                   About (editorial story)
/about/biography/         Biography (reference page for press, organisers, AI search)
/consulting/              Consulting & advisory (commercial)
/training/                Training & awareness
/ventures/                Ventures & initiatives
/impact/                  Selected Work & Impact (case studies, community, testimonials)
/recognition/             Awards & recognition archive
/media/                   Media coverage archive
/insights/                Blog listing
/insights/category/:cat/  Category listing
/insights/:slug/          Article
/resources/               Books & resources (coming-soon state)
/contact/                 Contact hub (?type=consulting|training|speaking|media|collaboration)
/privacy/  /terms/        Legal
/bn/...                   Bengali mirror of all of the above
```

## 4. Design system (Stage 2)

**Direction: "Editorial Authority."** A quiet, magazine-like layout with strong type, generous whitespace, deep navy and charcoal, and one restrained blue accent. Sections vary in composition (split editorial, indexed lists, dark statement bands, asymmetric mosaics, timelines), so the page never reads as a stack of card grids. No hacker imagery, neon, padlock icons or heavy glassmorphism.

From the ui-ux-pro-max skill we kept the scroll-storytelling page flow, subtle 300–400ms reveal motion with an 8–16px offset, the rule that SEO content is never invisible by default, and the pre-delivery checklist. Its "liquid glass" style and gold accent were rejected because they conflict with the brief.

### Color tokens (`app/app.css`)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0E1726` | Deep navy-charcoal: dark sections, primary buttons |
| `--ink-2` | `#1B2638` | Raised surfaces on dark |
| `--paper` | `#FAFAF8` | Page background (off-white) |
| `--surface` | `#FFFFFF` | Cards |
| `--mist` | `#F1F2F4` | Light gray section background |
| `--line` | `#E3E5E8` | Borders and rules |
| `--text` | `#161C27` | Body text (contrast 16:1) |
| `--text-muted` | `#5A6372` | Secondary text (contrast 5.9:1 on paper) |
| `--accent` | `#2B59C3` | Subtle blue: links, focus, small highlights (5.9:1) |
| `--accent-soft` | `#E9EEFA` | Accent tint backgrounds |
| `--on-ink-muted` | `#A9B3C4` | Muted text on navy (7.4:1) |

### Typography
| Role | Font | Notes |
|---|---|---|
| Display / headings | **Manrope** 600–800 | Tight tracking (−0.025em), balanced wrapping |
| Body / UI | **Inter** 400–600 | 16–18px, line height 1.65 |
| Editorial accent | **Instrument Serif** italic | Used sparingly: brand statement and pull quotes |
| Bengali | **Hind Siliguri** 400–600 | Falls back per glyph; `html[lang=bn]` gets line height 1.8 |

Fluid type scale (clamp): Display 44→88px · H1 38→64 · H2 30→48 · H3 21→26 · Lead 18→21 · Body 16–17 · Caption 13 · Eyebrow 12.5px uppercase with 0.16em tracking.

### Spacing, grid and breakpoints
- 4px base. Section padding is `clamp(72px, 10vw, 144px)` vertically.
- Container: 1240px max, 20px gutter on mobile, 32px on desktop. 12-column grid on large screens.
- Breakpoints: sm 640 · md 768 · lg 1024 · xl 1280. Tested at 375 / 768 / 1024 / 1440.

### Components (variants)
- **Button:** `primary` (navy), `accent` (blue), `outline`, `ghost`, `link`. Minimum height 44px, pill radius.
- **Card:** 20px radius, 1px line border, no heavy shadow. Hover lifts 2px with a soft shadow.
- **Badge / status:** neutral, accent, success (active), amber (developing), outline (nomination).
- **Placeholder:** dashed border with a `[INSERT …]` label, so missing verified content is obvious and easy to find.
- **Navigation:** sticky header that gains a background on scroll, a desktop "More" menu, a mobile full-height sheet and a language switcher.
- **Forms:** visible labels, inline errors, helper text, consent notice, and a clearly labelled demo-submission state.

### Motion principles
- Reveal: opacity plus a 12px rise, ~400ms, via CSS `animation-timeline: view()`. Browsers without support just show the content.
- Hover and focus: 150–250ms colour and transform changes only.
- Everything is disabled under `prefers-reduced-motion`.

## 5. Folder structure

```
site/
  react-router.config.ts     ssr:false + prerender all EN/BN paths
  app/
    root.tsx                 Document shell, fonts, <html lang>, global JSON-LD
    routes.ts                Generates the EN + /bn/ route trees from one page list
    app.css                  Tokens, type scale, utilities
    routes/                  One module per page (shared by both languages)
    components/
      layout/                Header, Footer, LanguageSwitcher, MobileNav, Breadcrumbs
      ui/                    Button, Badge, Card, Placeholder, Container, SectionHeading
      cards/                 VentureCard, AwardCard, MediaCard, ArticleCard, CaseStudyCard, TestimonialCard
      sections/home/         Homepage sections
      sections/shared/       CtaBand, PageHero, EmptyState
    content/                 Structured content (CMS-ready, typed)
      person.ts  biography.ts  ventures.ts  recognition.ts  media.ts
      projects.ts  testimonials.ts  training.ts  articles.ts  navigation.ts
    i18n/
      locales.ts             Locale type, path helpers (localizePath, switchLocalePath)
      ui.ts                  UI strings for EN + BN
    lib/
      seo.ts                 buildMeta(): title, description, canonical, hreflang, OG, Twitter
      schema.ts              JSON-LD builders: Person, WebSite, BreadcrumbList, Article…
      utils.ts
  public/                    robots.txt, favicon, og image, sitemap.xml (generated)
```

## 6. Content model

Every user-facing string is `Localized = { en: string; bn?: string }`. A missing `bn` falls back to English and that element is marked `lang="en"`.

```ts
Venture      { slug, name, logo?, url?, description, purpose, role (verified flag), activities[], status: 'active'|'developing'|'confirm' }
Recognition  { id, title, organization, date?, type: 'award'|'nomination'|'speaking'|'training'|'participation', description, image?, sourceUrl?, verified }
MediaItem    { id, outlet, headline, date, thumbnail?, description, url, category }
CaseStudy    { slug, title, clientContext, problem, contribution, solution, outcome, testimonialId?, sources[], permission }
Testimonial  { id, name, role, quote, image?, sourceUrl?, permission: 'granted'|'pending' }
Article      { slug, title, excerpt, cover?, category, author, published, updated?, readingMinutes, body (MDX later), sources[] }
TrainingTopic{ category, items[] }
```

Fields marked `verified: false` or `permission: 'pending'` render as labelled placeholders and are **excluded from structured data**.

## 7. Development roadmap

1. ✅ Stage 1: inspection and architecture (this document)
2. ✅ Stage 2: design system (tokens, type, components)
3. ✅ Stage 3: homepage (EN + BN), header, footer, language switcher, SEO meta and JSON-LD
4. ✅ Stage 4: inner pages (About, Biography, Consulting, Training, Ventures, Impact, Recognition, Media, Insights + category + article, Resources, Contact, legal). 44 prerendered pages.
5. ◐ Stage 5: Bengali UI and page copy written for every page. Native-speaker review still needed.
6. ✅ Stage 6: SEO and technical optimisation
   - `sitemap.xml` generated at build (`app/routes/sitemap.ts`) with EN/BN hreflang pairs; noindex pages excluded. `robots.txt` points to it.
   - Default share image (1200×630), favicons, app icons and web manifest via `npm run assets` (`scripts/generate-assets.mjs`).
   - Security and cache headers in `public/_headers`, 404 fallback in `public/_redirects` (see `docs/DEPLOYMENT.md`).
   - Audits: no heading-level skips or missing alt text on all 44 pages; axe-core reports 0 WCAG 2.2 AA violations on 21 pages scanned (EN + BN); Lighthouse mobile scores 100/100/100/100 on home, consulting and `/bn/` (LCP 1.2–1.4 s, CLS 0, TBT 0 ms).
   - Event schema for TEDx deferred until a verified date exists (Event requires `startDate`).
7. ✅ Stage 7: full QA and final report. See `docs/IMPLEMENTATION_REPORT.md`.

### Stage 4 notes
- **Forms** (`app/lib/forms.ts`) run in demo mode (`FORMS_LIVE = false`). They validate input and clearly tell the visitor nothing was sent. Connecting a backend means replacing one function.
- **Articles** use structured body blocks (`h2`, `p`, `ul`, `quote`, `note`) that map directly to a headless CMS. Until a real article exists, a labelled, `noindex` "Article layout preview" shows the template.
- **Structured data added:** ProfilePage + Person (biography), Service + FAQPage (consulting), Organization (ventures with a website), Article + BreadcrumbList (articles), BreadcrumbList on every inner page.
