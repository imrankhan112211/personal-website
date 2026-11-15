/** Single source of truth for every static page. Used by routes.ts, prerender and the sitemap. */
export const pages = [
  { path: '/', file: 'routes/home.tsx', id: 'home' },
  { path: '/about/', file: 'routes/about.tsx', id: 'about' },
  { path: '/about/biography/', file: 'routes/biography.tsx', id: 'biography' },
  { path: '/consulting/', file: 'routes/consulting.tsx', id: 'consulting' },
  { path: '/training/', file: 'routes/training.tsx', id: 'training' },
  { path: '/ventures/', file: 'routes/ventures.tsx', id: 'ventures' },
  { path: '/impact/', file: 'routes/impact.tsx', id: 'impact' },
  { path: '/recognition/', file: 'routes/recognition.tsx', id: 'recognition' },
  { path: '/media/', file: 'routes/media.tsx', id: 'media' },
  { path: '/blog/', file: 'routes/insights.tsx', id: 'insights' },
  { path: '/resources/', file: 'routes/resources.tsx', id: 'resources' },
  { path: '/contact/', file: 'routes/contact.tsx', id: 'contact' },
  { path: '/privacy/', file: 'routes/privacy.tsx', id: 'privacy' },
  { path: '/terms/', file: 'routes/terms.tsx', id: 'terms' },
] as const

export type PageId = (typeof pages)[number]['id']
