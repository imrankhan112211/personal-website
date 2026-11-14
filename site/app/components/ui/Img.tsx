import type { ImgHTMLAttributes } from 'react'

/**
 * Responsive image for files made by `npm run images` (name-<width>.webp, plus a half-width sibling).
 * Pass the large file as `src`; the half-size version is added to srcSet automatically.
 */
export function Img({ src, sizes = '(min-width: 1024px) 50vw, 100vw', loading = 'lazy', ...rest }: ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const m = src.match(/^(.*)-(\d+)\.webp$/)
  const srcSet = m ? `${m[1]}-${Number(m[2]) / 2}.webp ${Number(m[2]) / 2}w, ${src} ${m[2]}w` : undefined
  return <img src={src} srcSet={srcSet} sizes={srcSet ? sizes : undefined} loading={loading} decoding="async" {...rest} />
}
