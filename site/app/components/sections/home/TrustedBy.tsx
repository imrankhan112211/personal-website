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
        <h2 id="trusted-title" className="text-center text-sm font-semibold label-caps text-muted">{t('trusted.title')}</h2>
        <div className="marquee mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max gap-6 md:gap-10">
            {[0, 1].map((copy) => (
              <ul key={copy} className={copy ? 'marquee-dup flex gap-6 md:gap-10' : 'flex gap-6 md:gap-10'} aria-hidden={copy ? true : undefined}>
                {items.map((it) => (
                  <li key={it.name} className="w-20 shrink-0 md:w-24">
                    <a href={it.post!.urls[0]} target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : undefined} className="group flex flex-col items-center gap-2 text-center">
                      <Avatar
                        name={it.name}
                        src={images.avatars?.[it.name]}
                        className="size-14 rounded-full text-sm ring-2 ring-white grayscale-[35%] shadow-[0_8px_24px_rgb(0_0_0/0.06)] transition duration-300 group-hover:grayscale-0 md:size-16"
                      />
                      <span className="line-clamp-2 text-[0.6875rem] font-medium leading-tight text-text group-hover:text-accent sm:text-xs">{it.label ?? it.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
