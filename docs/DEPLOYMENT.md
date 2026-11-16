# Deployment

The site is fully static. Build it, then upload `site/build/client/`.

```bash
cd site
npm install
npm run build        # outputs site/build/client
```

## Host settings

| Setting | Value |
|---|---|
| Build command | `npm run build` (run in `site/`) |
| Output directory | `site/build/client` |
| Node version | 22 or newer |
| Trailing slashes | Keep them. Pages are `/about/index.html` and canonical URLs end in `/`. |
| 404 handling | Serve `__spa-fallback.html` with status 404 for unknown paths. `public/_redirects` does this on Netlify / Cloudflare Pages. |

## Security headers

`public/_headers` sets the CSP, HSTS, `nosniff`, frame protection, referrer policy and permissions policy, plus long-term caching for hashed `/assets/`. Netlify and Cloudflare Pages read it automatically. On Vercel, S3 + CloudFront or nginx, copy the same headers into that host's configuration.

The CSP allows `'unsafe-inline'` for scripts because React Router inlines a small hydration script on each prerendered page. When the forms get a backend on another domain, add that domain to `connect-src`.

## After the first deploy

1. Verify the domain in **Google Search Console** and **Bing Webmaster Tools**, then submit `https://abdullahalimran.com/sitemap.xml`.
2. Test structured data with Google's Rich Results Test and validator.schema.org (homepage, `/about/biography/`, `/consulting/`).
3. Add `sameAs` profile URLs in `app/content/person.ts` once official profiles are confirmed. They are the strongest signal linking your social accounts to this site.
4. Re-run `npm run assets` after changing the name, title or colours, or replace `public/og-default.png` with a designed share image that uses the approved portrait.

## Cloudflare Pages: exact settings

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `site/build/client` |
| Root directory | *(leave empty, repository root)* |
| Node version | 22 (from `.nvmrc`; or set env `NODE_VERSION=22`) |

The root `npm run build` installs the site's own dependencies (`site/`) and then builds. `404.html` is created automatically after the build, and `_headers` / `_redirects` are copied from `site/public/`.
