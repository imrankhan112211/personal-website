import { Avatar } from '~/components/ui/Avatar'
import reviewImages from '~/content/reviewImages.json'
import { publicPosts, trustedBy } from '~/content/reviews'
import { useLocale } from '~/i18n/useLocale'

const images = reviewImages as { avatars?: Record<string, string> }

/** Logos / photos of organisations and public figures who publicly thanked Abdullah. Each links to the original post. */
export function TrustedBy() {
  const { t } = useLocale()
  const items = trustedBy
    .map((it) => ({ ...it, post: publicPosts.find((p) => p.name === it.name) }))
    .filter((it) => it.post)

  return (
    <section aria-labelledby="trusted-title" className="container-x pb-2 pt-4">
      <div className="tile px-6 py-7 md:px-10">
        <h2 id="trusted-title" className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-muted">{t('trusted.title')}</h2>
        <ul className="mt-6 grid grid-cols-4 gap-x-2 gap-y-4 md:grid-cols-6 xl:grid-cols-12">
          {items.map((it) => (
            <li key={it.name}>
              <a href={it.post!.urls[0]} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-center">
                <Avatar
                  name={it.name}
                  src={images.avatars?.[it.name]}
                  className="size-12 rounded-full text-sm ring-2 ring-white grayscale-[35%] shadow-[0_6px_18px_-8px_rgb(10_20_40/0.35)] transition duration-300 group-hover:scale-105 group-hover:grayscale-0 sm:size-14 md:size-16"
                />
                <span className="line-clamp-2 text-[0.6875rem] font-medium sm:text-xs leading-tight text-text group-hover:text-accent">{it.label ?? it.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
