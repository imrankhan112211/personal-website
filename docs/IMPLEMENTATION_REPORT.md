# abdullahalimran.com — Implementation Report

Final report for Stages 1–7. Status as of 14 November 2026.

**In short:** the frontend is complete. It has 44 prerendered pages (22 English, 22 Bengali) and a generated sitemap, and it passes every automated check below. Before launch it still needs verified content (photos, roles, dates, links), a native Bengali review, a legal review of the policy pages, a form backend and a deployment.

---

## 1. Completed pages

Every page exists in English (root) and Bengali (`/bn/…`). The language toggle always switches to the same page in the other language.

| Page | Route | What it contains |
|---|---|---|
| Home | `/` | Hero with portrait slot and three CTAs; About; What I Do (3 pillars); Areas of Expertise (8); Training & Awareness; Ventures; Selected Impact; Recognition; Media; Latest Insights; final CTA |
| About | `/about/` | Editorial chapters: introduction, biography, background, journey, entrepreneurship, ventures, advocacy, expertise, training, recognition, mission, downloadable profile |
| Biography | `/about/biography/` | Reference page: quick facts, short bio (copy button + word count), long bio, expertise, ventures, advocacy, training, recognition, official profiles |
| Consulting | `/consulting/` | 4 service categories (services, who it's for, typical problems), process, formats, boundaries (no guarantees, not legal advice, focused scope), FAQ, consultation form |
| Training | `/training/` | 4 topic areas, TEDx / CID highlights, workshop gallery, formats, audiences, institutional collaborations, invitation form |
| Ventures | `/ventures/` | Probfly IT, Kaktaruaa, Erazee, Zurvis.io: description, purpose, role, activities, status, website |
| Impact | `/impact/` | Client segments, case-study template, community work, testimonials (published only with permission) |
| Recognition | `/recognition/` | Awards & nominations; speaking; training & institutional recognition; a legend separating nomination, award, speaking, training and participation |
| Media | `/media/` | Filterable archive (news, interviews, features, video, podcasts) and a journalist call-to-action |
| Insights | `/insights/` | Search, category filters, featured article, grid, author box |
| Insights category ×7 | `/insights/category/{slug}/` | Filtered listings with their own metadata |
| Article | `/insights/{slug}/` | Category, title, byline, dates, reading time, cover, table of contents, structured body, sources, share links, author box, related articles. A labelled, noindexed **layout preview** article is shown until the first real article is added. |
| Resources | `/resources/` | Six resource types with "Coming soon" states |
| Contact | `/contact/` | Six inquiry types (`?type=consulting|training|speaking|media|collaboration|general`), form, direct contact, security notice |
| Privacy Policy, Terms of Use | `/privacy/`, `/terms/` | Starter text (noindex until legally reviewed) |
| 404 | any unknown path | Branded "Page not found" (noindex) |

## 2. Reusable components

| Group | Components |
|---|---|
| Layout | `Header` (sticky, "More" dropdown, mobile menu), `Footer`, `LanguageSwitcher`, `Breadcrumbs`, `Wordmark` |
| UI primitives | `Button` / `ButtonLink` (7 variants, locale-aware links), `Badge`, `LocalLink`, `Placeholder`, `ImageSlot`, `Eyebrow`, `SectionHeading`, `SplitSection`, `Prose` |
| Cards | `VentureCard`, `RecognitionRow`, `ArticleCard`, case-study card, testimonial card, media card |
| Shared sections | `PageHero` (light/dark), `CtaBand`, `EmptyState`, `Faq` (+ FAQ schema), `InsightsListing`, `AuthorBox`, `LegalPage` |
| Forms | `InquiryForm` (type-specific fields, validation, honeypot, demo state) |
| Homepage sections | `Hero`, `About`, `WhatIDo`, `Expertise`, `Training`, `Ventures`, `Impact`, `Recognition`, `MediaInsights` |

## 3. Implemented functionality

- **Rendering:** React 19 + Vite 8 + React Router 8 framework mode; every page prerendered to static HTML and hydrated into a client-side app.
- **Bilingual:** `/bn/` mirror of every route; same-page language switching; `lang` attribute; Hind Siliguri for Bengali; Bengali dates; English fallback marked `lang="en"` when a translation is missing.
- **SEO:** unique title and description per page; canonical tags; hreflang (`en`, `bn`, `x-default`); Open Graph and Twitter cards; `sitemap.xml` with language alternates; `robots.txt`.
- **Structured data** (generated from the same content as the visible page): Person, WebSite, ProfilePage, Service, FAQPage, Organization, Article, BreadcrumbList.
- **Forms:** client-side validation with inline and summary errors, focus management, consulting- and training-specific fields, `?type=` preselection, honeypot, and a demo state that says plainly that nothing was sent.
- **Insights:** client-side search, category pages, table of contents from article headings, share links, copy-link, related articles.
- **Performance:** self-hosted fonts with preload, no third-party requests, lazily loaded images with reserved space, CSS-only scroll reveals, hashed assets with long-term caching headers.
- **Security:** CSP, HSTS, nosniff, frame protection, referrer and permissions policies (`public/_headers`); external links use `noopener noreferrer`.
- **Accessibility:** skip link, landmarks, visible focus, 44px touch targets, keyboard-operable menus that close on Escape and return focus, `aria-current`, `aria-invalid`, live regions, reduced-motion support.

## 4. QA results (Stage 7)

| Check | Result |
|---|---|
| Typecheck and production build | Pass, 0 errors |
| Internal links on all 44 pages | 0 broken |
| External links (probfly.com, kaktaruaa.org) | Both return 200 |
| Language toggle links | 264 checked, all point to the correct counterpart |
| Titles and meta descriptions | All unique and within length limits |
| Canonical URL matches page | 44 / 44 |
| Heading order and image alt text | No skipped levels; no images missing alt |
| Structured data | 54 JSON-LD blocks, all valid |
| Responsive layout | 44 pages × 4 widths (375 / 768 / 1024 / 1440): no horizontal scroll |
| Script errors and hydration | 0 errors; all 44 pages hydrate |
| Client-side navigation | Header links, language switch and back button work without reload; title, `lang` and scroll update |
| Mobile menu, "More" menu, skip link, 404 | Pass |
| Forms (EN + BN) | Required, email, minimum-length and consent validation; Bengali messages; demo state |
| axe-core (WCAG 2.2 AA + best practices) | 0 violations on 21 pages scanned |
| Lighthouse (mobile), home / consulting / bn home | 100 / 100 / 100 / 100; LCP 1.2–1.4 s; CLS 0; TBT 0 ms |

Not tested: real devices, screen readers (VoiceOver/TalkBack), Safari and Firefox (Chromium only), and the live host's headers and 404 handling.

## 5. Placeholder content: what to supply

Edit only the **content file**. The matching placeholders on every page update or disappear automatically.

| Supply | Edit | Shows on |
|---|---|---|
| Approved professional portrait (4:5, ≥1200px tall) | `person.portrait` in `content/person.ts`, file in `public/images/` | Home hero, About, author box, Person schema |
| Verified contact email | `person.email` | Footer, Contact |
| Official social profile URLs | `person.socials[].url` | Footer, Biography, Contact, Person `sameAs` |
| Role in each venture | `role` + `roleVerified: true` in `content/ventures.ts` | Home, About, Biography, Ventures |
| Venture logos, purpose, key activities | `logo`, `purpose`, `activities` in `content/ventures.ts` | Ventures, Home |
| Erazee / Zurvis.io websites; Probfly IT / Kaktaruaa status | `url`, `status` in `content/ventures.ts` | Ventures, Footer |
| Diana Award (received 2026) — photo/certificate and source link | `content/recognition.ts` | Home, About, Biography, Recognition |
| TEDx DRMC Youth talk title, date, photo, source | `content/recognition.ts` | Home, Training, Recognition |
| CID Police training (2023) scope, topic, audience, photo | `content/recognition.ts` | Home, Training, Recognition |
| Verified long biography, background, career milestones | `longBio`, `aboutChapters` in `content/about.ts` | About, Biography |
| Downloadable PDF profile | `profilePdf` in `content/about.ts` | About |
| Media coverage (outlet, headline, date, URL) | `content/media.ts` | Home, Media |
| Articles | `content/articles.ts` (the preview disappears automatically) | Home, Insights, sitemap |
| Case studies (with permission) | `content/projects.ts` (`permission: 'granted'`) | Home, Impact |
| Testimonials (with permission) | `content/testimonials.ts` | Impact |
| Community activities, institutional collaborations | `content/impact.ts`, `content/training.ts` | Impact, Training |
| Workshop photos | `public/images/` + Training page gallery | Training |
| Books, guides, courses | `content/resources.ts` | Resources |
| Legal review and effective date | `content/legal.ts` | Privacy, Terms |

List every remaining placeholder with: `grep -rnoE "\[(INSERT|CONFIRM|REVIEW)[^]]*\]" site/app`

## 6. Remaining work (in priority order)

1. **Verified content:** everything in section 5. The portrait, venture roles and recognition details have the most visible impact.
2. **Native Bengali review** of all copy in `content/*.ts` and `i18n/ui.ts`. The Bengali was written carefully, but not by a native editor.
3. **Legal review** of the Privacy Policy and Terms, then remove `noindex` from those pages if desired.
4. **Form backend:** implement `submitInquiry` in `app/lib/forms.ts` (serverless function or form service), set `FORMS_LIVE = true`, add the endpoint to the CSP `connect-src`, add spam protection and rate limiting.
5. **Deploy** per `docs/DEPLOYMENT.md`, then verify the live headers and 404 page, and submit the sitemap to Google Search Console and Bing Webmaster Tools.
6. **First articles:** two or three pieces in the core topics to begin building topical authority.
7. **Share image:** replace `public/og-default.png` with a designed version using the approved portrait.
8. **Event schema** for TEDx once a verified date exists; **Book/Course schema** when real products exist.
9. **Optional analytics:** privacy-friendly and cookieless. Update the Privacy Policy before adding it.
10. **Manual testing** on Safari, Firefox, real phones and with a screen reader.

## 7. Future CMS integration requirements

The site was built so a headless CMS can replace the local content files without changing components.

- **Content model:** recreate the TypeScript types in `app/content/*.ts` as CMS schemas: Person, Venture, Recognition, MediaItem, Article (with `Block[]` body), CaseStudy, Testimonial, TrainingCategory, Resource, PageMeta and UI strings.
- **Localisation:** keep the `{ en, bn? }` field shape, using field-level localisation. A missing `bn` must keep falling back to English.
- **Verification flags:** keep `roleVerified`, `permission: 'granted' | 'pending'`, `sample` and nullable dates and sources. The UI and structured data depend on them to avoid publishing unverified claims.
- **Article body:** `Block` (`h2` with id, `p`, `ul`, `quote`, `note`) maps directly onto Portable Text, Rich Text or MDX. Headings must keep stable ids for the table of contents.
- **Data loading:** replace imports with route `loader` functions that fetch from the CMS at build time. Prerendering then bakes the content into static HTML; `react-router.config.ts` and `app/dynamicPaths.ts` take the slug lists from the CMS.
- **Publishing:** a CMS webhook triggers a host rebuild on publish. Optional: draft preview via a separate preview deployment.
- **Media:** an image CDN with width and height metadata, so layout space stays reserved and responsive `srcset` can be generated.
- **Roles:** the editor publishes only verified content; testimonials and case studies require a recorded permission flag.

Hosted candidates that support this setup include Sanity, Contentful, Storyblok, Strapi and Payload. Choose based on budget, Bengali-editing comfort and whether self-hosting is wanted.

## 8. Project files

| Path | Purpose |
|---|---|
| `site/` | The application (`npm run dev`, `npm run build`, `npm run assets`) |
| `docs/ARCHITECTURE.md` | Architecture, sitemap, design system, content model, roadmap |
| `docs/DEPLOYMENT.md` | Hosting settings, headers, post-launch checklist |
| `docs/IMPLEMENTATION_REPORT.md` | This report |
| `site/README.md` | Day-to-day content editing guide |
| `.claude/skills/` | Installed ui-ux-pro-max skill set |
| `archive/portfolio-v1/` | Earlier placeholder site (safe to delete) |
