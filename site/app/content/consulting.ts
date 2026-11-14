import type { Localized } from '~/i18n/locales'

type L = Localized

export const consultingIntro: L = {
  en: 'Practical, preventive advice for people and businesses whose accounts, brands and content live online — from securing a page before something goes wrong to responding when it already has.',
  bn: 'যাঁদের অ্যাকাউন্ট, ব্র্যান্ড ও কনটেন্ট অনলাইনে, তাঁদের জন্য বাস্তবসম্মত ও প্রতিরোধমূলক পরামর্শ — সমস্যা হওয়ার আগেই পেজ সুরক্ষিত করা থেকে শুরু করে সমস্যা হয়ে গেলে করণীয় পর্যন্ত।',
}

export type ServiceCategory = {
  id: string
  number: string
  title: L
  summary: L
  services: L[]
  forWhom: L
  problems: L[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'social-media-security',
    number: '01',
    title: { en: 'Social Media Security & Account Protection', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা ও অ্যাকাউন্ট সুরক্ষা' },
    summary: { en: 'Securing the accounts, pages and business access that your work depends on — and knowing what to do when access is lost.', bn: 'আপনার কাজ যেসব অ্যাকাউন্ট, পেজ ও বিজনেস অ্যাক্সেসের ওপর নির্ভর করে, সেগুলো সুরক্ষিত রাখা — এবং অ্যাক্সেস হারালে কী করতে হবে তা জানা।' },
    services: [
      { en: 'Facebook and Instagram account security consultation', bn: 'ফেসবুক ও ইনস্টাগ্রাম অ্যাকাউন্টের নিরাপত্তা বিষয়ক পরামর্শ' },
      { en: 'Account security assessment', bn: 'অ্যাকাউন্টের নিরাপত্তা মূল্যায়ন' },
      { en: 'Account compromise and recovery guidance', bn: 'হ্যাক হওয়া অ্যাকাউন্ট ও পুনরুদ্ধার বিষয়ক নির্দেশনা' },
      { en: 'Disabled or restricted account issue guidance', bn: 'নিষ্ক্রিয় বা সীমাবদ্ধ অ্যাকাউন্ট বিষয়ক নির্দেশনা' },
      { en: 'Business Manager and Page security', bn: 'বিজনেস ম্যানেজার ও পেজের নিরাপত্তা' },
      { en: 'Access control and account risk assessment', bn: 'অ্যাক্সেস নিয়ন্ত্রণ ও অ্যাকাউন্টের ঝুঁকি মূল্যায়ন' },
      { en: 'Preventive social media security strategies', bn: 'প্রতিরোধমূলক সোশ্যাল মিডিয়া নিরাপত্তা কৌশল' },
    ],
    forWhom: { en: 'Public figures, creators, entrepreneurs and businesses that rely on Facebook, Instagram and Business Manager.', bn: 'যেসব পাবলিক ফিগার, ক্রিয়েটর, উদ্যোক্তা ও ব্যবসা ফেসবুক, ইনস্টাগ্রাম ও বিজনেস ম্যানেজারের ওপর নির্ভরশীল।' },
    problems: [
      { en: 'Lost access to an account or page', bn: 'অ্যাকাউন্ট বা পেজের অ্যাক্সেস হারানো' },
      { en: 'Unknown admins or partners on a Business Manager', bn: 'বিজনেস ম্যানেজারে অচেনা অ্যাডমিন বা পার্টনার' },
      { en: 'Accounts disabled or restricted without clear reason', bn: 'স্পষ্ট কারণ ছাড়া অ্যাকাউন্ট নিষ্ক্রিয় বা সীমাবদ্ধ হওয়া' },
    ],
  },
  {
    id: 'brand-content',
    number: '02',
    title: { en: 'Digital Brand & Content Protection', bn: 'ডিজিটাল ব্র্যান্ড ও কনটেন্ট সুরক্ষা' },
    summary: { en: 'Responding to impersonation, fake pages, counterfeit concerns and content theft through the right platform processes.', bn: 'সঠিক প্ল্যাটফর্ম প্রক্রিয়ার মাধ্যমে ছদ্মবেশ, ভুয়া পেজ, নকল পণ্য ও কনটেন্ট চুরির বিরুদ্ধে পদক্ষেপ।' },
    services: [
      { en: 'Brand impersonation consultation', bn: 'ব্র্যান্ড ছদ্মবেশ বিষয়ক পরামর্শ' },
      { en: 'Fake profile and page protection', bn: 'ভুয়া প্রোফাইল ও পেজ থেকে সুরক্ষা' },
      { en: 'Copyright protection guidance', bn: 'কপিরাইট সুরক্ষা বিষয়ক নির্দেশনা' },
      { en: 'Trademark protection guidance', bn: 'ট্রেডমার্ক সুরক্ষা বিষয়ক নির্দেশনা' },
      { en: 'Unauthorised content usage', bn: 'অনুমতি ছাড়া কনটেন্ট ব্যবহার' },
      { en: 'Counterfeit brand and product concerns', bn: 'নকল ব্র্যান্ড ও পণ্য সংক্রান্ত সমস্যা' },
      { en: 'Content theft and reproduction', bn: 'কনটেন্ট চুরি ও পুনঃপ্রকাশ' },
      { en: 'Platform reporting and takedown strategy', bn: 'প্ল্যাটফর্মে রিপোর্ট ও কনটেন্ট সরানোর কৌশল' },
    ],
    forWhom: { en: 'Brands, e-commerce businesses, creators and public figures whose name, products or content are being misused.', bn: 'যেসব ব্র্যান্ড, ই-কমার্স ব্যবসা, ক্রিয়েটর ও পাবলিক ফিগারের নাম, পণ্য বা কনটেন্টের অপব্যবহার হচ্ছে।' },
    problems: [
      { en: 'Fake pages using your name or logo', bn: 'আপনার নাম বা লোগো ব্যবহার করে ভুয়া পেজ' },
      { en: 'Your photos or videos reposted without permission', bn: 'অনুমতি ছাড়া আপনার ছবি বা ভিডিও পুনঃপ্রকাশ' },
      { en: 'Counterfeit products sold under your brand', bn: 'আপনার ব্র্যান্ডের নামে নকল পণ্য বিক্রি' },
    ],
  },
  {
    id: 'business-risk',
    number: '03',
    title: { en: 'Online Business Safety & Risk Advisory', bn: 'অনলাইন ব্যবসার নিরাপত্তা ও ঝুঁকি বিষয়ক পরামর্শ' },
    summary: { en: 'Seeing the risks in how your online business runs — and planning ahead so one incident doesn’t stop the business.', bn: 'আপনার অনলাইন ব্যবসা পরিচালনার ঝুঁকিগুলো চিহ্নিত করা — এবং আগেভাগে পরিকল্পনা করা, যাতে একটি ঘটনায় পুরো ব্যবসা থেমে না যায়।' },
    services: [
      { en: 'Online business risk assessment', bn: 'অনলাইন ব্যবসার ঝুঁকি মূল্যায়ন' },
      { en: 'E-commerce brand safety', bn: 'ই-কমার্স ব্র্যান্ডের নিরাপত্তা' },
      { en: 'Digital business protection strategy', bn: 'ডিজিটাল ব্যবসা সুরক্ষার কৌশল' },
      { en: 'Social media business risk management', bn: 'সোশ্যাল মিডিয়াভিত্তিক ব্যবসার ঝুঁকি ব্যবস্থাপনা' },
      { en: 'Preventive security planning', bn: 'প্রতিরোধমূলক নিরাপত্তা পরিকল্পনা' },
      { en: 'Digital reputation management', bn: 'ডিজিটাল সুনাম ব্যবস্থাপনা' },
    ],
    forWhom: { en: 'Small and medium-sized online businesses, e-commerce stores and social-first brands.', bn: 'ছোট ও মাঝারি অনলাইন ব্যবসা, ই-কমার্স স্টোর এবং সোশ্যাল মিডিয়াভিত্তিক ব্র্যান্ড।' },
    problems: [
      { en: 'Sales depend on one page or one admin', bn: 'বিক্রি একটি পেজ বা একজন অ্যাডমিনের ওপর নির্ভরশীল' },
      { en: 'No plan for what happens if the page is lost', bn: 'পেজ হারালে কী হবে তার কোনো পরিকল্পনা নেই' },
      { en: 'Brand reputation affected by fake sellers', bn: 'ভুয়া বিক্রেতার কারণে ব্র্যান্ডের সুনাম ক্ষতিগ্রস্ত' },
    ],
  },
  {
    id: 'reputation',
    number: '04',
    title: { en: 'Personal Brand & Digital Reputation Protection', bn: 'পার্সোনাল ব্র্যান্ড ও ডিজিটাল সুনাম সুরক্ষা' },
    summary: { en: 'Protecting the people behind the brand — their accounts, their content and how they are represented online.', bn: 'ব্র্যান্ডের পেছনের মানুষটিকে সুরক্ষা — তাঁর অ্যাকাউন্ট, কনটেন্ট এবং অনলাইনে তাঁকে কীভাবে উপস্থাপন করা হচ্ছে।' },
    services: [
      { en: 'Public figure account protection', bn: 'পাবলিক ফিগারের অ্যাকাউন্ট সুরক্ষা' },
      { en: 'Influencer and creator content protection', bn: 'ইনফ্লুয়েন্সার ও ক্রিয়েটরের কনটেন্ট সুরক্ষা' },
      { en: 'Fake profile and impersonation risks', bn: 'ভুয়া প্রোফাইল ও ছদ্মবেশের ঝুঁকি' },
      { en: 'Digital reputation risk management', bn: 'ডিজিটাল সুনামের ঝুঁকি ব্যবস্থাপনা' },
      { en: 'Online harassment and unwanted content response guidance', bn: 'অনলাইন হয়রানি ও অনাকাঙ্ক্ষিত কনটেন্ট মোকাবিলার নির্দেশনা' },
    ],
    forWhom: { en: 'Celebrities, public figures, influencers and anyone whose personal name is their brand.', bn: 'সেলিব্রিটি, পাবলিক ফিগার, ইনফ্লুয়েন্সার এবং যাঁদের নিজের নামই তাঁদের ব্র্যান্ড।' },
    problems: [
      { en: 'Impersonators contacting fans or followers', bn: 'ছদ্মবেশীরা ভক্ত বা ফলোয়ারদের সঙ্গে যোগাযোগ করছে' },
      { en: 'Harassment or unwanted content circulating online', bn: 'অনলাইনে হয়রানি বা অনাকাঙ্ক্ষিত কনটেন্ট ছড়িয়ে পড়া' },
      { en: 'Several people with access to personal accounts', bn: 'ব্যক্তিগত অ্যাকাউন্টে একাধিক মানুষের অ্যাক্সেস' },
    ],
  },
]

export const process: { title: L; body: L }[] = [
  { title: { en: 'Share your situation', bn: 'পরিস্থিতি জানান' }, body: { en: 'Send a short description through the inquiry form. No passwords or codes — ever.', bn: 'ফর্মের মাধ্যমে সংক্ষেপে পরিস্থিতি জানান। পাসওয়ার্ড বা কোড কখনোই নয়।' } },
  { title: { en: 'Initial review', bn: 'প্রাথমিক পর্যালোচনা' }, body: { en: 'I review whether it falls within my areas of expertise and what kind of consultation fits.', bn: 'বিষয়টি আমার দক্ষতার ক্ষেত্রের মধ্যে পড়ে কি না এবং কোন ধরনের পরামর্শ উপযুক্ত, তা পর্যালোচনা করি।' } },
  { title: { en: 'Consultation', bn: 'পরামর্শ সেশন' }, body: { en: 'We go through the issue together — online or in person — and agree on practical next steps.', bn: 'অনলাইনে বা সরাসরি একসঙ্গে বিষয়টি দেখি এবং বাস্তবসম্মত পরবর্তী পদক্ষেপ ঠিক করি।' } },
  { title: { en: 'Action & prevention', bn: 'পদক্ষেপ ও প্রতিরোধ' }, body: { en: 'You leave with a clear plan to resolve what can be resolved and reduce the risk of it happening again.', bn: 'যা সমাধানযোগ্য তা সমাধানের এবং পুনরায় ঘটার ঝুঁকি কমানোর একটি স্পষ্ট পরিকল্পনা পাবেন।' } },
]

export const formats: { title: L; body: L }[] = [
  { title: { en: 'One-to-one consultation', bn: 'ব্যক্তিগত পরামর্শ' }, body: { en: 'A focused session on your accounts, brand or situation.', bn: 'আপনার অ্যাকাউন্ট, ব্র্যান্ড বা পরিস্থিতি নিয়ে নির্দিষ্ট সেশন।' } },
  { title: { en: 'Online consultation', bn: 'অনলাইন পরামর্শ' }, body: { en: 'Remote sessions for clients in Bangladesh and internationally.', bn: 'বাংলাদেশ ও দেশের বাইরের ক্লায়েন্টদের জন্য অনলাইন সেশন।' } },
  { title: { en: 'Business advisory', bn: 'ব্যবসায়িক পরামর্শ' }, body: { en: 'Risk review and protection planning for an online business.', bn: 'অনলাইন ব্যবসার ঝুঁকি পর্যালোচনা ও সুরক্ষা পরিকল্পনা।' } },
  { title: { en: 'Institutional consultation', bn: 'প্রাতিষ্ঠানিক পরামর্শ' }, body: { en: 'Advice for organisations managing several pages or public accounts.', bn: 'একাধিক পেজ বা পাবলিক অ্যাকাউন্ট পরিচালনাকারী প্রতিষ্ঠানের জন্য পরামর্শ।' } },
  { title: { en: 'Monthly advisory', bn: 'মাসিক অ্যাডভাইজরি' }, body: { en: 'Ongoing support for brands and public figures who want a regular point of contact.', bn: 'নিয়মিত যোগাযোগ রাখতে চান এমন ব্র্যান্ড ও পাবলিক ফিগারদের জন্য চলমান সহায়তা।' } },
]

export const boundaries: { title: L; body: L }[] = [
  { title: { en: 'No guaranteed outcomes', bn: 'নিশ্চিত ফলাফলের প্রতিশ্রুতি নয়' }, body: { en: 'Account recovery, content takedowns and other decisions are made by the platforms. I help you take the right steps, but I cannot guarantee any platform’s decision.', bn: 'অ্যাকাউন্ট পুনরুদ্ধার, কনটেন্ট সরানো ও অন্যান্য সিদ্ধান্ত প্ল্যাটফর্ম নিজে নেয়। আমি সঠিক পদক্ষেপ নিতে সাহায্য করি, তবে কোনো প্ল্যাটফর্মের সিদ্ধান্তের নিশ্চয়তা দিতে পারি না।' } },
  { title: { en: 'Guidance, not legal advice', bn: 'নির্দেশনা, আইনি পরামর্শ নয়' }, body: { en: 'Copyright, trademark and harassment guidance is practical and platform-focused. It is not legal advice or legal representation. Where a legal matter is involved, you may need a qualified legal professional.', bn: 'কপিরাইট, ট্রেডমার্ক ও হয়রানি বিষয়ক নির্দেশনা বাস্তবভিত্তিক ও প্ল্যাটফর্মকেন্দ্রিক। এটি আইনি পরামর্শ বা আইনি প্রতিনিধিত্ব নয়। আইনি বিষয় জড়িত থাকলে আপনার যোগ্য আইনজীবীর সহায়তা প্রয়োজন হতে পারে।' } },
  { title: { en: 'A focused scope', bn: 'নির্দিষ্ট কর্মপরিধি' }, body: { en: 'My work covers social media, digital brands and online content. I don’t provide network security, device security, penetration testing or infrastructure security services.', bn: 'আমার কাজ সোশ্যাল মিডিয়া, ডিজিটাল ব্র্যান্ড ও অনলাইন কনটেন্ট নিয়ে। নেটওয়ার্ক নিরাপত্তা, ডিভাইস নিরাপত্তা, পেনিট্রেশন টেস্টিং বা অবকাঠামো নিরাপত্তা সেবা আমি দিই না।' } },
]

export const consultingFaqs: { q: L; a: L }[] = [
  { q: { en: 'Can you guarantee that my account will be recovered?', bn: 'আমার অ্যাকাউন্ট ফেরত পাওয়ার নিশ্চয়তা দিতে পারবেন?' }, a: { en: 'No. Recovery decisions are made by the platform. What I can do is help you follow the right process, avoid mistakes that make things worse, and secure everything else you still control.', bn: 'না। পুনরুদ্ধারের সিদ্ধান্ত প্ল্যাটফর্ম নেয়। আমি সঠিক প্রক্রিয়া অনুসরণে সাহায্য করতে পারি, পরিস্থিতি খারাপ করে এমন ভুল এড়াতে পারি এবং আপনার নিয়ন্ত্রণে থাকা বাকি সবকিছু সুরক্ষিত করতে পারি।' } },
  { q: { en: 'Do you need my password?', bn: 'আপনার কি আমার পাসওয়ার্ড লাগবে?' }, a: { en: 'No. Please never share passwords or one-time codes with anyone, including me. Consultations are designed so you stay in control of your own accounts.', bn: 'না। পাসওয়ার্ড বা ওটিপি কখনোই কারো সঙ্গে শেয়ার করবেন না, আমার সঙ্গেও নয়। পরামর্শ এমনভাবে করা হয় যাতে নিজের অ্যাকাউন্টের নিয়ন্ত্রণ আপনার হাতেই থাকে।' } },
  { q: { en: 'Is this legal advice?', bn: 'এটি কি আইনি পরামর্শ?' }, a: { en: 'No. I provide technical and platform guidance. For legal claims, contracts or court matters, please consult a qualified lawyer.', bn: 'না। আমি প্রযুক্তিগত ও প্ল্যাটফর্ম বিষয়ক নির্দেশনা দিই। আইনি দাবি, চুক্তি বা আদালতের বিষয়ে যোগ্য আইনজীবীর পরামর্শ নিন।' } },
  { q: { en: 'Do you work with clients outside Bangladesh?', bn: 'বাংলাদেশের বাইরের ক্লায়েন্টদের সঙ্গে কাজ করেন?' }, a: { en: 'Yes, consultations can be held online.', bn: 'হ্যাঁ, অনলাইনে পরামর্শ সেশন করা যায়।' } },
  { q: { en: 'How much does a consultation cost?', bn: 'পরামর্শের খরচ কত?' }, a: { en: 'It depends on the type and scope of the work. Send an inquiry and you’ll receive details for your situation.', bn: 'কাজের ধরন ও পরিধির ওপর নির্ভর করে। জিজ্ঞাসা পাঠালে আপনার পরিস্থিতি অনুযায়ী বিস্তারিত জানানো হবে।' } },
]
