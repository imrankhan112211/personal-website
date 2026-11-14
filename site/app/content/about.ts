import type { Localized } from '~/i18n/locales'

/**
 * About-page chapters. `body` holds only verified, general statements.
 * `placeholder` marks what still needs real, verified content.
 */
export type AboutChapter = { id: string; eyebrow: Localized; title: Localized; body: Localized[]; placeholder?: string }

export const aboutChapters: AboutChapter[] = [
  {
    id: 'biography',
    eyebrow: { en: 'Professional biography', bn: 'পেশাগত জীবনী' },
    title: { en: 'Working where technology meets trust.', bn: 'প্রযুক্তি আর আস্থার সংযোগস্থলে কাজ।' },
    body: [
      { en: 'Abdullah Al Imran is a technology entrepreneur, cyber safety advocate, trainer and consultant. His work sits at the intersection of technology entrepreneurship, social media security, digital brand protection, online business safety and digital awareness.', bn: 'আব্দুল্লাহ আল ইমরান একজন প্রযুক্তি উদ্যোক্তা, সাইবার সেফটি অ্যাডভোকেট, প্রশিক্ষক ও পরামর্শক। তাঁর কাজের ক্ষেত্র প্রযুক্তি উদ্যোক্তা, সোশ্যাল মিডিয়া নিরাপত্তা, ডিজিটাল ব্র্যান্ড সুরক্ষা, অনলাইন ব্যবসার নিরাপত্তা ও ডিজিটাল সচেতনতার সংযোগস্থলে।' },
      { en: 'He helps individuals, public figures, content creators and online businesses protect their digital presence — their social media accounts, online brands and digital content.', bn: 'তিনি ব্যক্তি, পাবলিক ফিগার, কনটেন্ট ক্রিয়েটর ও অনলাইন ব্যবসাকে তাদের ডিজিটাল উপস্থিতি — সোশ্যাল মিডিয়া অ্যাকাউন্ট, অনলাইন ব্র্যান্ড ও ডিজিটাল কনটেন্ট — সুরক্ষায় সহায়তা করেন।' },
    ],
    placeholder: '[INSERT VERIFIED PROFESSIONAL BIOGRAPHY]',
  },
  {
    id: 'background',
    eyebrow: { en: 'Personal & educational background', bn: 'ব্যক্তিগত ও শিক্ষাগত পটভূমি' },
    title: { en: 'Where it started.', bn: 'যেখান থেকে শুরু।' },
    body: [],
    placeholder: '[INSERT VERIFIED PERSONAL AND EDUCATIONAL BACKGROUND]',
  },
  {
    id: 'journey',
    eyebrow: { en: 'Professional journey', bn: 'পেশাগত যাত্রা' },
    title: { en: 'From technology and digital business to digital protection.', bn: 'প্রযুক্তি ও ডিজিটাল ব্যবসা থেকে ডিজিটাল সুরক্ষায়।' },
    body: [
      { en: 'His background is in technology and digital business. Over time, his work has focused increasingly on the risks people and businesses face online — and on helping them prevent and respond to those risks.', bn: 'তাঁর পটভূমি প্রযুক্তি ও ডিজিটাল ব্যবসায়। সময়ের সঙ্গে সঙ্গে তাঁর কাজ ক্রমশ মানুষ ও ব্যবসার অনলাইন ঝুঁকি এবং সেই ঝুঁকি প্রতিরোধ ও মোকাবিলায় সহায়তার দিকে কেন্দ্রীভূত হয়েছে।' },
    ],
    placeholder: '[INSERT VERIFIED CAREER MILESTONES WITH DATES]',
  },
  {
    id: 'entrepreneurship',
    eyebrow: { en: 'Technology entrepreneurship', bn: 'প্রযুক্তি উদ্যোক্তা' },
    title: { en: 'Building ventures that protect.', bn: 'সুরক্ষার জন্য উদ্যোগ গড়া।' },
    body: [
      { en: 'He is involved in several technology ventures and initiatives — Probfly IT, Kaktaruaa, Erazee and Zurvis.io — covering social media solutions, digital brand protection, cyber safety awareness, online risk response and business automation.', bn: 'তিনি কয়েকটি প্রযুক্তি উদ্যোগ ও কার্যক্রমের সঙ্গে যুক্ত — Probfly IT, Kaktaruaa, Erazee ও Zurvis.io — যেগুলো সোশ্যাল মিডিয়া সলিউশন, ডিজিটাল ব্র্যান্ড সুরক্ষা, সাইবার সেফটি সচেতনতা, অনলাইন ঝুঁকি মোকাবিলা ও বিজনেস অটোমেশন নিয়ে কাজ করে।' },
    ],
    placeholder: '[CONFIRM OFFICIAL ROLE IN EACH VENTURE]',
  },
  {
    id: 'advocacy',
    eyebrow: { en: 'Cyber safety advocacy', bn: 'সাইবার সেফটি অ্যাডভোকেসি' },
    title: { en: 'A safer internet is a shared responsibility.', bn: 'নিরাপদ ইন্টারনেট সবার দায়িত্ব।' },
    body: [
      { en: 'Alongside his professional work, he advocates for cyber safety and digital awareness — including online safety, harassment prevention and digital protection education.', bn: 'পেশাগত কাজের পাশাপাশি তিনি সাইবার সেফটি ও ডিজিটাল সচেতনতার পক্ষে কাজ করেন — যার মধ্যে রয়েছে অনলাইন নিরাপত্তা, হয়রানি প্রতিরোধ ও ডিজিটাল সুরক্ষা বিষয়ক শিক্ষা।' },
    ],
  },
  {
    id: 'experience',
    eyebrow: { en: 'Social media security & digital protection', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা ও ডিজিটাল সুরক্ষা' },
    title: { en: 'Focused expertise, deliberately narrow.', bn: 'নির্দিষ্ট ও কেন্দ্রীভূত দক্ষতা।' },
    body: [
      { en: 'His expertise is specifically in social media security, account protection, digital brand protection, digital content protection, copyright and trademark protection guidance, online reputation management, cyber safety awareness and digital risk management.', bn: 'তাঁর দক্ষতা নির্দিষ্টভাবে সোশ্যাল মিডিয়া নিরাপত্তা, অ্যাকাউন্ট সুরক্ষা, ডিজিটাল ব্র্যান্ড সুরক্ষা, ডিজিটাল কনটেন্ট সুরক্ষা, কপিরাইট ও ট্রেডমার্ক সুরক্ষা নির্দেশনা, অনলাইন সুনাম ব্যবস্থাপনা, সাইবার সেফটি সচেতনতা ও ডিজিটাল ঝুঁকি ব্যবস্থাপনায়।' },
      { en: 'He has worked with public figures, entrepreneurs, content creators and online businesses.', bn: 'তিনি পাবলিক ফিগার, উদ্যোক্তা, কনটেন্ট ক্রিয়েটর ও অনলাইন ব্যবসার সঙ্গে কাজ করেছেন।' },
    ],
  },
  {
    id: 'training',
    eyebrow: { en: 'Training & awareness', bn: 'প্রশিক্ষণ ও সচেতনতা' },
    title: { en: 'Teaching people to protect themselves.', bn: 'মানুষকে নিজেকে সুরক্ষিত রাখতে শেখানো।' },
    body: [
      { en: 'He delivers training and awareness sessions on cyber safety, social media safety and online business safety. His activities include a speaker appearance at TEDx DRMC Youth and a training activity with CID Police.', bn: 'তিনি সাইবার সেফটি, সোশ্যাল মিডিয়া নিরাপত্তা ও অনলাইন ব্যবসার নিরাপত্তা বিষয়ে প্রশিক্ষণ ও সচেতনতামূলক সেশন পরিচালনা করেন। তাঁর কার্যক্রমের মধ্যে রয়েছে TEDx DRMC Youth-এ বক্তা হিসেবে অংশগ্রহণ এবং সিআইডি পুলিশের সঙ্গে একটি প্রশিক্ষণ কার্যক্রম।' },
    ],
    placeholder: '[INSERT VERIFIED LIST OF TRAINING ACTIVITIES]',
  },
]

export const mission: Localized = {
  en: 'To help people and businesses stay secure, protected and prepared in the digital world — through practical advice, awareness and technology that protects.',
  bn: 'বাস্তবসম্মত পরামর্শ, সচেতনতা ও সুরক্ষামূলক প্রযুক্তির মাধ্যমে মানুষ ও ব্যবসাকে ডিজিটাল জগতে নিরাপদ, সুরক্ষিত ও প্রস্তুত থাকতে সাহায্য করা।',
}

/** Biography page */
export const shortBio: Localized = {
  en: 'Abdullah Al Imran is a technology entrepreneur, cyber safety advocate, trainer and consultant. He works on social media security, digital brand protection, online business safety and digital awareness, helping individuals, public figures, content creators and online businesses protect their accounts, brands and content.',
  bn: 'আব্দুল্লাহ আল ইমরান একজন প্রযুক্তি উদ্যোক্তা, সাইবার সেফটি অ্যাডভোকেট, প্রশিক্ষক ও পরামর্শক। তিনি সোশ্যাল মিডিয়া নিরাপত্তা, ডিজিটাল ব্র্যান্ড সুরক্ষা, অনলাইন ব্যবসার নিরাপত্তা ও ডিজিটাল সচেতনতা নিয়ে কাজ করেন এবং ব্যক্তি, পাবলিক ফিগার, কনটেন্ট ক্রিয়েটর ও অনলাইন ব্যবসাকে তাদের অ্যাকাউন্ট, ব্র্যান্ড ও কনটেন্ট সুরক্ষায় সহায়তা করেন।',
}

/** Long biography — must be supplied and verified. Leave `null` until then. */
export const longBio: Localized[] | null = null

/** Downloadable PDF profile. Set a real path in /public when available — never a fake link. */
export const profilePdf: string | null = null
