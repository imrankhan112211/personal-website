import type { Localized } from '~/i18n/locales'

/**
 * Profile text — written in the third person, the way an encyclopedia or news report would describe him.
 * Every fact here is confirmed by the owner or by published coverage (see docs/PROFILE_FACTS.md for sources).
 * Keep the wording identical on LinkedIn, press kits, Wikidata etc. so search engines and AI see one consistent entity.
 */
export type AboutChapter = { id: string; eyebrow: Localized; title: Localized; body: Localized[]; placeholder?: string }

export const aboutChapters: AboutChapter[] = [
  {
    id: 'biography',
    eyebrow: { en: 'Profile', bn: 'পরিচিতি' },
    title: { en: 'Technology entrepreneur and cyber safety advocate.', bn: 'প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট।' },
    body: [
      {
        en: 'Abdullah Al Imran is a Bangladeshi technology entrepreneur and cyber safety advocate. He is the founder of Probfly IT, a technology company working on social media solutions, digital brand protection and software, and of Kaktaruaa, a non-profit digital safety initiative. He is also the founder of Erazee and a co-founder of Zurvis.io, an AI customer service and WhatsApp automation platform.',
        bn: 'আব্দুল্লাহ আল ইমরান বাংলাদেশি প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট। তিনি সোশ্যাল মিডিয়া সলিউশন, ডিজিটাল ব্র্যান্ড সুরক্ষা ও সফটওয়্যার নিয়ে কাজ করা প্রযুক্তি প্রতিষ্ঠান Probfly IT এবং অলাভজনক ডিজিটাল নিরাপত্তা উদ্যোগ কাকতাড়ুয়ার (Kaktaruaa) প্রতিষ্ঠাতা। এ ছাড়া তিনি Erazee-এর প্রতিষ্ঠাতা এবং এআই কাস্টমার সার্ভিস ও WhatsApp অটোমেশন প্ল্যাটফর্ম Zurvis.io-এর সহ-প্রতিষ্ঠাতা।',
      },
      {
        en: 'In 2026 he received The Diana Award for promoting online safety, preventing cyberbullying and protecting people from digital harassment. He advises businesses, brands and public figures on social media security and brand protection, and delivers cyber safety training for institutions and law enforcement.',
        bn: 'অনলাইন নিরাপত্তা প্রচার, সাইবার বুলিং প্রতিরোধ এবং ডিজিটাল হয়রানি থেকে মানুষকে সুরক্ষায় অবদানের জন্য ২০২৬ সালে তিনি দ্য ডায়ানা অ্যাওয়ার্ড পান। তিনি ব্যবসা, ব্র্যান্ড ও পাবলিক ফিগারদের সোশ্যাল মিডিয়া নিরাপত্তা ও ব্র্যান্ড সুরক্ষা বিষয়ে পরামর্শ দেন এবং বিভিন্ন প্রতিষ্ঠান ও আইনশৃঙ্খলা বাহিনীর জন্য সাইবার সেফটি প্রশিক্ষণ পরিচালনা করেন।',
      },
    ],
  },
  {
    id: 'background',
    eyebrow: { en: 'Early life & education', bn: 'শৈশব ও শিক্ষা' },
    title: { en: 'Where it started.', bn: 'যেখান থেকে শুরু।' },
    body: [
      {
        en: 'Imran was born in Patuakhali, Bangladesh, and grew up in Chattogram, Dhaka and Rajendrapur Cantonment in Gazipur. He completed his secondary and higher secondary education in Rajendrapur and earned a bachelor’s degree in Bengali literature from Netrokona University, completing it in early 2024.',
        bn: 'ইমরানের জন্ম বাংলাদেশের পটুয়াখালীতে। বেড়ে উঠেছেন চট্টগ্রাম, ঢাকা ও গাজীপুরের রাজেন্দ্রপুর ক্যান্টনমেন্টে। রাজেন্দ্রপুরে মাধ্যমিক ও উচ্চমাধ্যমিক শেষ করে নেত্রকোনা বিশ্ববিদ্যালয় থেকে বাংলা সাহিত্যে স্নাতক ডিগ্রি অর্জন করেন (২০২৪ সালের শুরুতে সম্পন্ন)।',
      },
      {
        en: 'His interest in helping others began in childhood. Seeing online volunteer efforts, such as social media campaigns to find blood donors, showed him that technology could be used to help people at scale. He began by helping acquaintances solve social media problems, work that later grew into his companies and his non-profit.',
        bn: 'ছোটবেলা থেকেই মানুষকে সাহায্য করার আগ্রহ ছিল তাঁর। রক্তদাতা খোঁজার মতো অনলাইন স্বেচ্ছাসেবী উদ্যোগ দেখে তিনি বুঝতে পারেন, প্রযুক্তি দিয়েও বহু মানুষকে সাহায্য করা যায়। পরিচিতদের সোশ্যাল মিডিয়া সমস্যার সমাধান দিয়ে শুরু, যা পরে তাঁর প্রতিষ্ঠান ও অলাভজনক উদ্যোগে রূপ নেয়।',
      },
    ],
  },
  {
    id: 'journey',
    eyebrow: { en: 'Career', bn: 'কর্মজীবন' },
    title: { en: 'From solving social media problems to building companies.', bn: 'সোশ্যাল মিডিয়া সমস্যার সমাধান থেকে প্রতিষ্ঠান গড়া।' },
    body: [
      {
        en: 'In 2021 Imran founded Probfly IT with co-founder Azimul Islam Sheblu, describing it as a “problem-solving IT company”. By 2022 the company was serving clients in Bangladesh as well as in India, Sri Lanka and the United States, with services spanning social media solutions, web development and digital brand protection. Today Probfly IT has an office in Dhaka and a registered LLC in the United States.',
        bn: '২০২১ সালে ইমরান সহ-প্রতিষ্ঠাতা আজিমুল ইসলাম শিবলুর সঙ্গে Probfly IT প্রতিষ্ঠা করেন, যাকে তিনি একটি “প্রবলেম সলভিং আইটি কোম্পানি” হিসেবে বর্ণনা করেন। ২০২২ সালের মধ্যে প্রতিষ্ঠানটি বাংলাদেশের পাশাপাশি ভারত, শ্রীলঙ্কা ও যুক্তরাষ্ট্রের ক্লায়েন্টদের সেবা দিতে শুরু করে; সেবার মধ্যে ছিল সোশ্যাল মিডিয়া সলিউশন, ওয়েব ডেভেলপমেন্ট ও ডিজিটাল ব্র্যান্ড সুরক্ষা। বর্তমানে Probfly IT-এর অফিস ঢাকায়, আর যুক্তরাষ্ট্রে একটি নিবন্ধিত LLC রয়েছে।',
      },
      {
        en: 'He has since worked with public figures, creators, media organisations and businesses on social media security and brand protection, and is regularly quoted in the Bangladeshi media on issues such as copyright-strike abuse, online harassment and social media safety.',
        bn: 'এরপর থেকে তিনি পাবলিক ফিগার, ক্রিয়েটর, মিডিয়া প্রতিষ্ঠান ও ব্যবসার সঙ্গে সোশ্যাল মিডিয়া নিরাপত্তা ও ব্র্যান্ড সুরক্ষা নিয়ে কাজ করছেন। কপিরাইট স্ট্রাইকের অপব্যবহার, অনলাইন হয়রানি ও সোশ্যাল মিডিয়া নিরাপত্তার মতো বিষয়ে বাংলাদেশের গণমাধ্যমে নিয়মিত তাঁর মতামত প্রকাশিত হয়।',
      },
    ],
  },
  {
    id: 'entrepreneurship',
    eyebrow: { en: 'Ventures', bn: 'উদ্যোগ' },
    title: { en: 'Four ventures, one focus: a safer digital world.', bn: 'চারটি উদ্যোগ, এক লক্ষ্য: নিরাপদ ডিজিটাল বিশ্ব।' },
    body: [
      {
        en: 'Imran is the founder of Probfly IT (2021; technology and social media solutions), Kaktaruaa (2023; non-profit digital safety initiative) and Erazee (2025; unwanted content removal and online risk response), and a co-founder of Zurvis.io (2026; AI customer service and WhatsApp automation for businesses, also offered as WhatsFly). Azimul Islam Sheblu is his co-founder at Probfly IT and Zurvis.io.',
        bn: 'ইমরান Probfly IT (২০২১; প্রযুক্তি ও সোশ্যাল মিডিয়া সলিউশন), কাকতাড়ুয়া (২০২৩; অলাভজনক ডিজিটাল নিরাপত্তা উদ্যোগ) ও Erazee (২০২৫; অনাকাঙ্ক্ষিত কনটেন্ট অপসারণ ও অনলাইন ঝুঁকি মোকাবিলা)-এর প্রতিষ্ঠাতা এবং Zurvis.io (২০২৬; ব্যবসার জন্য এআই কাস্টমার সার্ভিস ও WhatsApp অটোমেশন, WhatsFly নামেও পরিচিত)-এর সহ-প্রতিষ্ঠাতা। Probfly IT ও Zurvis.io-তে তাঁর সহ-প্রতিষ্ঠাতা আজিমুল ইসলাম শিবলু।',
      },
    ],
  },
  {
    id: 'advocacy',
    eyebrow: { en: 'Kaktaruaa & cyber safety advocacy', bn: 'কাকতাড়ুয়া ও সাইবার সেফটি অ্যাডভোকেসি' },
    title: { en: 'A safer internet is a shared responsibility.', bn: 'নিরাপদ ইন্টারনেট সবার দায়িত্ব।' },
    body: [
      {
        en: 'Founded on 1 July 2023, Kaktaruaa began as an effort to prevent cyberbullying and online harassment among students, raising awareness about fake accounts, defamatory “expose” posts and “crush and confession” pages. It later expanded to support people facing online blackmail, fraud, identity-related harassment and account hacking.',
        bn: '২০২৩ সালের ১ জুলাই কাকতাড়ুয়ার যাত্রা শুরু হয় শিক্ষার্থীদের মধ্যে সাইবার বুলিং ও অনলাইন হয়রানি প্রতিরোধের লক্ষ্যে — ভুয়া অ্যাকাউন্ট, মানহানিকর “এক্সপোজ” পোস্ট এবং “ক্রাশ অ্যান্ড কনফেশন” পেজ নিয়ে সচেতনতা তৈরির মাধ্যমে। পরে ব্ল্যাকমেইল, অনলাইন প্রতারণা, পরিচয়-সংক্রান্ত হয়রানি ও অ্যাকাউন্ট হ্যাকিংয়ের শিকার মানুষকেও সহায়তা দিতে শুরু করে।',
      },
      {
        en: 'According to figures Imran shared with the press in 2026, around 1,200 women have taken Kaktaruaa’s free online courses, its school programmes have reached 2,000–3,000 students across five schools, and 4,000–5,000 people have used the digital safety tools on its website. In November 2024 Kaktaruaa held the seminar “First Aid of Social Media Problems” at the EMK Center in Dhaka, with Cultural Classicists and Probfly IT.',
        bn: '২০২৬ সালে গণমাধ্যমকে ইমরানের দেওয়া তথ্য অনুযায়ী, কাকতাড়ুয়ার বিনামূল্যের অনলাইন কোর্সে প্রায় ১,২০০ নারী অংশ নিয়েছেন, পাঁচটি স্কুলে সচেতনতা কার্যক্রমের মাধ্যমে ২,০০০–৩,০০০ শিক্ষার্থীর কাছে পৌঁছানো হয়েছে, এবং ওয়েবসাইটের ডিজিটাল নিরাপত্তা টুল ব্যবহার করেছেন ৪,০০০–৫,০০০ মানুষ। ২০২৪ সালের নভেম্বরে ঢাকার ইএমকে সেন্টারে Cultural Classicists ও Probfly IT-এর সঙ্গে কাকতাড়ুয়া “ফার্স্ট এইড অব সোশ্যাল মিডিয়া প্রবলেমস” সেমিনার আয়োজন করে।',
      },
    ],
  },
  {
    id: 'experience',
    eyebrow: { en: 'Areas of work', bn: 'কাজের ক্ষেত্র' },
    title: { en: 'Focused expertise.', bn: 'নির্দিষ্ট দক্ষতা।' },
    body: [
      {
        en: 'His work covers business and brand protection, social media security and incident response, social commerce, cyber harassment and blackmail response, and software and automation for businesses. He does not provide network or infrastructure security services.',
        bn: 'তাঁর কাজের ক্ষেত্র বিজনেস ও ব্র্যান্ড সুরক্ষা, সোশ্যাল মিডিয়া নিরাপত্তা ও ইনসিডেন্ট রেসপন্স, সোশ্যাল কমার্স, সাইবার হয়রানি ও ব্ল্যাকমেইল মোকাবিলা, এবং ব্যবসার জন্য সফটওয়্যার ও অটোমেশন। নেটওয়ার্ক বা অবকাঠামো নিরাপত্তা সেবা তিনি দেন না।',
      },
    ],
  },
  {
    id: 'training',
    eyebrow: { en: 'Training & speaking', bn: 'প্রশিক্ষণ ও বক্তৃতা' },
    title: { en: 'Teaching people to protect themselves.', bn: 'মানুষকে নিজেকে সুরক্ষিত রাখতে শেখানো।' },
    body: [
      {
        en: 'In 2023 he trained 45 officers of the Criminal Investigation Department (CID) of Bangladesh Police on social media security, account recovery and the problems people face online. In 2025 he spoke at TEDx DRMC Youth with the talk “The Human Algorithm”.',
        bn: '২০২৩ সালে তিনি বাংলাদেশ পুলিশের অপরাধ তদন্ত বিভাগের (সিআইডি) ৪৫ জন কর্মকর্তাকে সোশ্যাল মিডিয়া নিরাপত্তা, অ্যাকাউন্ট পুনরুদ্ধার ও অনলাইনে মানুষের সাধারণ সমস্যা নিয়ে প্রশিক্ষণ দেন। ২০২৫ সালে TEDx DRMC Youth-এ “The Human Algorithm” শিরোনামে বক্তৃতা দেন।',
      },
    ],
  },
]

export const mission: Localized = {
  en: 'To help people and businesses stay secure, protected and prepared in the digital world — through practical advice, awareness and technology that protects.',
  bn: 'বাস্তবসম্মত পরামর্শ, সচেতনতা ও সুরক্ষামূলক প্রযুক্তির মাধ্যমে মানুষ ও ব্যবসাকে ডিজিটাল জগতে নিরাপদ, সুরক্ষিত ও প্রস্তুত থাকতে সাহায্য করা।',
}

/** Short biography (≈100 words) — the version to copy into press kits, event programmes and profiles. */
export const shortBio: Localized = {
  en: 'Abdullah Al Imran is a Bangladeshi technology entrepreneur and cyber safety advocate. He is the founder of Probfly IT, a technology company providing social media solutions, digital brand protection and software, and of Kaktaruaa, a non-profit digital safety initiative; he is also the founder of Erazee and a co-founder of Zurvis.io. In 2026 he received The Diana Award for promoting online safety and preventing cyberbullying. He has trained 45 officers of Bangladesh Police’s Criminal Investigation Department (CID) on social media security and spoke at TEDx DRMC Youth in 2025. He holds a bachelor’s degree in Bengali literature from Netrokona University.',
  bn: 'আব্দুল্লাহ আল ইমরান বাংলাদেশি প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট। তিনি সোশ্যাল মিডিয়া সলিউশন, ডিজিটাল ব্র্যান্ড সুরক্ষা ও সফটওয়্যার নিয়ে কাজ করা প্রযুক্তি প্রতিষ্ঠান Probfly IT এবং অলাভজনক ডিজিটাল নিরাপত্তা উদ্যোগ কাকতাড়ুয়ার প্রতিষ্ঠাতা; এ ছাড়া Erazee-এর প্রতিষ্ঠাতা ও Zurvis.io-এর সহ-প্রতিষ্ঠাতা। অনলাইন নিরাপত্তা প্রচার ও সাইবার বুলিং প্রতিরোধে অবদানের জন্য ২০২৬ সালে তিনি দ্য ডায়ানা অ্যাওয়ার্ড পান। তিনি বাংলাদেশ পুলিশের সিআইডির ৪৫ জন কর্মকর্তাকে সোশ্যাল মিডিয়া নিরাপত্তা বিষয়ে প্রশিক্ষণ দিয়েছেন এবং ২০২৫ সালে TEDx DRMC Youth-এ বক্তৃতা দিয়েছেন। তিনি নেত্রকোনা বিশ্ববিদ্যালয় থেকে বাংলা সাহিত্যে স্নাতক।',
}

/** Long biography: the chapters above, in order, form the full reference text. */
export const longBio: Localized[] | null = aboutChapters
  .filter((c) => ['biography', 'background', 'journey'].includes(c.id))
  .flatMap((c) => c.body)

/**
 * "Who is Abdullah Al Imran?" — direct questions and answers for search engines and AI assistants.
 * Shown on the Biography page and published as FAQPage structured data.
 */
export const profileFaqs: { q: Localized; a: Localized }[] = [
  {
    q: { en: 'Who is Abdullah Al Imran?', bn: 'আব্দুল্লাহ আল ইমরান কে?' },
    a: {
      en: 'Abdullah Al Imran is a Bangladeshi technology entrepreneur and cyber safety advocate, the founder of Probfly IT and Kaktaruaa, and a recipient of The Diana Award (2026).',
      bn: 'আব্দুল্লাহ আল ইমরান বাংলাদেশি প্রযুক্তি উদ্যোক্তা ও সাইবার সেফটি অ্যাডভোকেট, Probfly IT ও কাকতাড়ুয়ার প্রতিষ্ঠাতা এবং দ্য ডায়ানা অ্যাওয়ার্ড (২০২৬) প্রাপ্ত।',
    },
  },
  {
    q: { en: 'What companies has Abdullah Al Imran founded?', bn: 'আব্দুল্লাহ আল ইমরান কোন কোন প্রতিষ্ঠান গড়েছেন?' },
    a: {
      en: 'He founded Probfly IT (2021), the non-profit Kaktaruaa (2023) and Erazee (2025), and co-founded Zurvis.io (2026), an AI customer service and WhatsApp automation platform.',
      bn: 'তিনি Probfly IT (২০২১), অলাভজনক উদ্যোগ কাকতাড়ুয়া (২০২৩) ও Erazee (২০২৫) প্রতিষ্ঠা করেছেন এবং এআই কাস্টমার সার্ভিস ও WhatsApp অটোমেশন প্ল্যাটফর্ম Zurvis.io (২০২৬)-এর সহ-প্রতিষ্ঠাতা।',
    },
  },
  {
    q: { en: 'Why did Abdullah Al Imran receive The Diana Award?', bn: 'আব্দুল্লাহ আল ইমরান কেন দ্য ডায়ানা অ্যাওয়ার্ড পেয়েছেন?' },
    a: {
      en: 'He received The Diana Award in 2026 for promoting online safety, preventing cyberbullying and protecting people from digital harassment through Kaktaruaa.',
      bn: 'কাকতাড়ুয়ার মাধ্যমে অনলাইন নিরাপত্তা প্রচার, সাইবার বুলিং প্রতিরোধ ও ডিজিটাল হয়রানি থেকে মানুষকে সুরক্ষায় অবদানের জন্য ২০২৬ সালে তিনি এই পুরস্কার পান।',
    },
  },
  {
    q: { en: 'What does Abdullah Al Imran do?', bn: 'আব্দুল্লাহ আল ইমরান কী কাজ করেন?' },
    a: {
      en: 'He advises businesses, brands and public figures on social media security and brand protection, runs technology companies building software and automation, and delivers cyber safety training, including for Bangladesh Police’s CID.',
      bn: 'তিনি ব্যবসা, ব্র্যান্ড ও পাবলিক ফিগারদের সোশ্যাল মিডিয়া নিরাপত্তা ও ব্র্যান্ড সুরক্ষায় পরামর্শ দেন, সফটওয়্যার ও অটোমেশন তৈরি করা প্রযুক্তি প্রতিষ্ঠান পরিচালনা করেন এবং বাংলাদেশ পুলিশের সিআইডিসহ বিভিন্ন প্রতিষ্ঠানে সাইবার সেফটি প্রশিক্ষণ দেন।',
    },
  },
  {
    q: { en: 'What services does Abdullah Al Imran offer?', bn: 'আব্দুল্লাহ আল ইমরান কী কী সেবা দেন?' },
    a: {
      en: 'Through Probfly IT he offers three kinds of services: social media solutions (page, ad account and Business Manager problems, growth and media buying), brand protection solutions (impersonation and fake page takedowns, copyright and trademark enforcement) and business solutions (software, SaaS and WhatsApp automation). He also offers one-to-one consultation for cyber harassment and blackmail, and cyber safety training.',
      bn: 'প্রবফ্লাই আইটির মাধ্যমে তিনি তিন ধরনের সেবা দেন: সোশ্যাল মিডিয়া সলিউশন (পেজ, অ্যাড অ্যাকাউন্ট ও বিজনেস ম্যানেজারের সমস্যা, গ্রোথ ও মিডিয়া বায়িং), ব্র্যান্ড প্রোটেকশন সলিউশন (ফেক পেজ ও ছদ্মবেশ সরানো, কপিরাইট ও ট্রেডমার্ক সুরক্ষা) এবং বিজনেস সলিউশন (সফটওয়্যার, SaaS ও হোয়াটসঅ্যাপ অটোমেশন)। এছাড়া সাইবার হয়রানি ও ব্ল্যাকমেইলের ক্ষেত্রে ওয়ান-টু-ওয়ান পরামর্শ এবং সাইবার সেফটি প্রশিক্ষণ দেন।',
    },
  },
  {
    q: { en: 'Where is Abdullah Al Imran from?', bn: 'আব্দুল্লাহ আল ইমরানের বাড়ি কোথায়?' },
    a: {
      en: 'He was born in Patuakhali, Bangladesh, and grew up in Chattogram, Dhaka and Rajendrapur in Gazipur. He studied Bengali literature at Netrokona University.',
      bn: 'তাঁর জন্ম পটুয়াখালীতে; বেড়ে উঠেছেন চট্টগ্রাম, ঢাকা ও গাজীপুরের রাজেন্দ্রপুরে। তিনি নেত্রকোনা বিশ্ববিদ্যালয়ে বাংলা সাহিত্যে পড়াশোনা করেছেন।',
    },
  },
  {
    q: {
      en: 'Are there other people named Abdullah Al Imran?',
      bn: 'আরও কি আব্দুল্লাহ আল ইমরান নামে কেউ আছেন?',
    },
    a: {
      en: 'Yes — it is a common Bangladeshi name, and a journalist and a data scientist share it. This site is about the technology entrepreneur based in Dhaka who founded Probfly IT and Kaktaruaa and received The Diana Award in 2026. If a page mentions Probfly IT, Kaktaruaa or the 2026 Diana Award, it is about him.',
      bn: 'হ্যাঁ — এটি বাংলাদেশে খুব পরিচিত নাম; একজন সাংবাদিক ও একজন ডেটা সায়েন্টিস্টেরও একই নাম। এই সাইটটি ঢাকায় কর্মরত সেই প্রযুক্তি উদ্যোক্তাকে নিয়ে, যিনি Probfly IT ও কাকতাড়ুয়ার প্রতিষ্ঠাতা এবং ২০২৬ সালে দ্য ডায়ানা অ্যাওয়ার্ড পেয়েছেন। কোনও পেজে Probfly IT, কাকতাড়ুয়া বা ২০২৬ সালের ডায়ানা অ্যাওয়ার্ডের উল্লেখ থাকলে সেটি তাঁর সম্পর্কেই।',
    },
  },
]

/** Downloadable PDF profile. Set a real path in /public when available — never a fake link. */
export const profilePdf: string | null = null
