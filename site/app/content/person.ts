import type { Localized } from '~/i18n/locales'

/**
 * Core identity. Keep this identical everywhere — it feeds visible pages AND Person schema.
 * Only add facts that are verified. Empty values are skipped in structured data.
 */
export const SITE_URL = 'https://abdullahalimran.com'

export const person = {
  name: { en: 'Abdullah Al Imran', bn: 'আব্দুল্লাহ আল ইমরান' } satisfies Localized,
  shortName: 'Imran',
  /** Other spellings people search for (used in Person.alternateName) — only real, used spellings. */
  alternateNames: ['আব্দুল্লাহ আল ইমরান', 'আবদুল্লাহ আল ইমরান'],
  monogram: 'AI',
  title: {
    en: 'Technology Entrepreneur | Cyber Safety Advocate | Trainer | Consultant',
    bn: 'প্রযুক্তি উদ্যোক্তা | সাইবার সেফটি অ্যাডভোকেট | প্রশিক্ষক | পরামর্শক',
  } satisfies Localized,
  titleParts: [
    { en: 'Technology Entrepreneur', bn: 'প্রযুক্তি উদ্যোক্তা' },
    { en: 'Cyber Safety Advocate', bn: 'সাইবার সেফটি অ্যাডভোকেট' },
    { en: 'Trainer', bn: 'প্রশিক্ষক' },
    { en: 'Consultant', bn: 'পরামর্শক' },
  ] satisfies Localized[],
  statement: {
    en: 'Advocating for a safer digital world through technology, awareness and digital protection.',
    bn: 'প্রযুক্তি, সচেতনতা ও ডিজিটাল সুরক্ষার মাধ্যমে একটি নিরাপদ ডিজিটাল বিশ্বের পক্ষে কাজ করছি।',
  } satisfies Localized,
  supporting: {
    en: 'Helping individuals, public figures and online businesses stay secure, protected and prepared in the digital world.',
    bn: 'ব্যক্তি, পাবলিক ফিগার ও অনলাইন ব্যবসাকে ডিজিটাল জগতে নিরাপদ, সুরক্ষিত ও প্রস্তুত থাকতে সহায়তা করছি।',
  } satisfies Localized,
  heroIntro: {
    en: 'I work where technology entrepreneurship meets social media security and digital brand protection — helping people and online businesses protect their accounts, their brands and the content they create.',
    bn: 'প্রযুক্তি উদ্যোক্তা হিসেবে আমি কাজ করি সোশ্যাল মিডিয়া নিরাপত্তা ও ডিজিটাল ব্র্যান্ড সুরক্ষা নিয়ে — যাতে মানুষ ও অনলাইন ব্যবসা তাদের অ্যাকাউন্ট, ব্র্যান্ড এবং নিজেদের তৈরি কনটেন্ট সুরক্ষিত রাখতে পারে।',
  } satisfies Localized,
  /** One sentence, third person — the canonical description used for Person.description, llms.txt and meta tags. */
  description: {
    en: 'Abdullah Al Imran is a Bangladeshi technology entrepreneur and cyber safety advocate, the founder of Probfly IT and Kaktaruaa, and a recipient of The Diana Award (2026).',
    bn: 'আব্দুল্লাহ আল ইমরান বাংলাদেশি প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট, Probfly IT ও কাকতাড়ুয়ার প্রতিষ্ঠাতা এবং দ্য ডায়ানা অ্যাওয়ার্ড (২০২৬) প্রাপ্ত।',
  } satisfies Localized,
  /** Verified personal facts (published in national media, Nov 2026). Used in the Biography quick facts and Person schema. */
  nationality: { en: 'Bangladeshi', bn: 'বাংলাদেশি' } satisfies Localized,
  birthPlace: { en: 'Patuakhali, Bangladesh', bn: 'পটুয়াখালী, বাংলাদেশ' } satisfies Localized,
  education: {
    en: 'BA in Bengali literature, Netrokona University (2024)',
    bn: 'বাংলা সাহিত্যে স্নাতক, নেত্রকোনা বিশ্ববিদ্যালয় (২০২৪)',
  } satisfies Localized,
  alumniOf: 'Netrokona University',
  /** Main portrait (made by `npm run images`) */
  portrait: '/images/abdullah-al-imran-portrait-960.webp' as string | null,
  /** Relaxed photo used on the About page */
  portraitCasual: '/images/abdullah-al-imran-casual-1200.webp' as string | null,
  /** Public contact email */
  email: 'imran@probfly.com' as string | null,
  /**
   * Official profiles — these become Person.sameAs. Add only accounts you control.
   */
  socials: [
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/abdullahalimran001' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullahalimran001' },
    { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/abdullah_al_imran01' },
    { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@abdullahalimran001' },
    { id: 'telegram', label: 'Telegram', url: 'https://t.me/abdullahalimrangroup' },
    { id: 'whatsapp', label: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbCuEENAjPXVlAjBSO1b' },
  ] as { id: string; label: string; url: string | null }[],
}
