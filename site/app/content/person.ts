import type { Localized } from '~/i18n/locales'

/**
 * Core identity. Keep this identical everywhere — it feeds visible pages AND Person schema.
 * Only add facts that are verified. Empty values are skipped in structured data.
 */
export const SITE_URL = 'https://abdullahalimran.com'

export const person = {
  name: { en: 'Abdullah Al Imran', bn: 'আব্দুল্লাহ আল ইমরান' } satisfies Localized,
  shortName: 'Imran',
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
  /** Used for meta descriptions and Person.description */
  description: {
    en: 'Abdullah Al Imran is a technology entrepreneur, cyber safety advocate, trainer and consultant focused on social media security, digital brand protection, online business safety and digital awareness.',
    bn: 'আব্দুল্লাহ আল ইমরান একজন প্রযুক্তি উদ্যোক্তা, সাইবার সেফটি অ্যাডভোকেট, প্রশিক্ষক ও পরামর্শক। তাঁর কাজের মূল ক্ষেত্র সোশ্যাল মিডিয়া নিরাপত্তা, ডিজিটাল ব্র্যান্ড সুরক্ষা, অনলাইন ব্যবসার নিরাপত্তা এবং ডিজিটাল সচেতনতা।',
  } satisfies Localized,
  /** [INSERT APPROVED PORTRAIT] — e.g. '/images/abdullah-al-imran-portrait.jpg' (min 1200px tall, 4:5) */
  portrait: null as string | null,
  /** [INSERT VERIFIED CONTACT EMAIL] */
  email: null as string | null,
  /**
   * Official profiles — these become Person.sameAs. Add only accounts you control.
   * [INSERT OFFICIAL SOCIAL PROFILE URLS]
   */
  socials: [
    { id: 'facebook', label: 'Facebook', url: null },
    { id: 'linkedin', label: 'LinkedIn', url: null },
    { id: 'instagram', label: 'Instagram', url: null },
    { id: 'x', label: 'X', url: null },
    { id: 'youtube', label: 'YouTube', url: null },
  ] as { id: string; label: string; url: string | null }[],
}
