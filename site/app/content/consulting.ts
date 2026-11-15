import type { Localized } from '~/i18n/locales'

type L = Localized

export const consultingIntro: L = {
  en: 'Strategic advice for businesses, brands and public figures whose growth depends on social media and online platforms — protecting what you have built, solving problems when they happen, and planning so they don’t happen again.',
  bn: 'যেসব ব্যবসা, ব্র্যান্ড ও পাবলিক ফিগারের প্রবৃদ্ধি সোশ্যাল মিডিয়া ও অনলাইন প্ল্যাটফর্মের ওপর নির্ভরশীল, তাঁদের জন্য কৌশলগত পরামর্শ — যা গড়ে তুলেছেন তা সুরক্ষিত রাখা, সমস্যা হলে সমাধান করা, আর যাতে আবার না ঘটে সেই পরিকল্পনা।',
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
    id: 'brand-protection',
    number: '01',
    title: { en: 'Business & Brand Protection', bn: 'বিজনেস ও ব্র্যান্ড সুরক্ষা' },
    summary: { en: 'Protecting your business name, brand assets and content from impersonation, misuse and the risks that come with running a business online.', bn: 'ছদ্মবেশ, অপব্যবহার ও অনলাইনে ব্যবসা চালানোর ঝুঁকি থেকে আপনার ব্যবসার নাম, ব্র্যান্ড ও কনটেন্ট সুরক্ষা।' },
    services: [
      { en: 'Brand risk assessment and protection strategy', bn: 'ব্র্যান্ডের ঝুঁকি মূল্যায়ন ও সুরক্ষা কৌশল' },
      { en: 'Impersonation and fake page response', bn: 'ছদ্মবেশ ও ভুয়া পেজের বিরুদ্ধে পদক্ষেপ' },
      { en: 'Copyright and trademark protection guidance', bn: 'কপিরাইট ও ট্রেডমার্ক সুরক্ষা বিষয়ক নির্দেশনা' },
      { en: 'Counterfeit product and unauthorised content concerns', bn: 'নকল পণ্য ও অনুমতিহীন কনটেন্ট সংক্রান্ত সমস্যা' },
      { en: 'Platform reporting and takedown strategy', bn: 'প্ল্যাটফর্মে রিপোর্ট ও কনটেন্ট সরানোর কৌশল' },
      { en: 'Digital reputation management', bn: 'ডিজিটাল সুনাম ব্যবস্থাপনা' },
    ],
    forWhom: { en: 'Brands, e-commerce businesses, media organisations and public figures whose name, products or content carry business value.', bn: 'যেসব ব্র্যান্ড, ই-কমার্স ব্যবসা, মিডিয়া প্রতিষ্ঠান ও পাবলিক ফিগারের নাম, পণ্য বা কনটেন্টের ব্যবসায়িক মূল্য আছে।' },
    problems: [
      { en: 'Fake pages using your name or logo', bn: 'আপনার নাম বা লোগো ব্যবহার করে ভুয়া পেজ' },
      { en: 'Products or content copied and resold', bn: 'পণ্য বা কনটেন্ট নকল করে বিক্রি' },
      { en: 'Brand reputation affected by fake sellers', bn: 'ভুয়া বিক্রেতার কারণে ব্র্যান্ডের সুনাম ক্ষতিগ্রস্ত' },
    ],
  },
  {
    id: 'social-media-solutions',
    number: '02',
    title: { en: 'Social Media Solutions & Incident Response', bn: 'সোশ্যাল মিডিয়া সলিউশন ও ইনসিডেন্ট রেসপন্স' },
    summary: { en: 'Securing the accounts, pages and business assets your work runs on — and responding quickly and correctly when something goes wrong.', bn: 'আপনার কাজ যেসব অ্যাকাউন্ট, পেজ ও বিজনেস অ্যাসেটের ওপর চলে সেগুলো সুরক্ষিত রাখা — এবং সমস্যা হলে দ্রুত ও সঠিকভাবে পদক্ষেপ নেওয়া।' },
    services: [
      { en: 'Security review of accounts, pages and Business Manager', bn: 'অ্যাকাউন্ট, পেজ ও বিজনেস ম্যানেজারের নিরাপত্তা পর্যালোচনা' },
      { en: 'Compromised account and page incident response', bn: 'হ্যাক হওয়া অ্যাকাউন্ট ও পেজের ইনসিডেন্ট রেসপন্স' },
      { en: 'Recovery strategy for lost, disabled or restricted assets', bn: 'হারানো, নিষ্ক্রিয় বা সীমাবদ্ধ অ্যাসেট পুনরুদ্ধারের কৌশল' },
      { en: 'Access control and admin governance', bn: 'অ্যাক্সেস নিয়ন্ত্রণ ও অ্যাডমিন ব্যবস্থাপনা' },
      { en: 'Monetization, copyright-claim and policy issues', bn: 'মনিটাইজেশন, কপিরাইট ক্লেইম ও পলিসি সংক্রান্ত সমস্যা' },
      { en: 'Preventive security planning', bn: 'প্রতিরোধমূলক নিরাপত্তা পরিকল্পনা' },
    ],
    forWhom: { en: 'Public figures, creators, media pages and businesses that depend on Facebook, Instagram, YouTube and Business Manager.', bn: 'যেসব পাবলিক ফিগার, ক্রিয়েটর, মিডিয়া পেজ ও ব্যবসা ফেসবুক, ইনস্টাগ্রাম, ইউটিউব ও বিজনেস ম্যানেজারের ওপর নির্ভরশীল।' },
    problems: [
      { en: 'Lost access to a page, account or channel', bn: 'পেজ, অ্যাকাউন্ট বা চ্যানেলের অ্যাক্সেস হারানো' },
      { en: 'Unknown admins or partners on a Business Manager', bn: 'বিজনেস ম্যানেজারে অচেনা অ্যাডমিন বা পার্টনার' },
      { en: 'Monetization or reach suddenly restricted', bn: 'হঠাৎ মনিটাইজেশন বা রিচ সীমাবদ্ধ হওয়া' },
    ],
  },
  {
    id: 'social-commerce',
    number: '03',
    title: { en: 'Social Commerce Technical Advisory', bn: 'সোশ্যাল কমার্স টেকনিক্যাল অ্যাডভাইজরি' },
    summary: { en: 'Technical advice for businesses that sell through social media — setting up the right structure, tools and safeguards so the business can grow without single points of failure.', bn: 'যেসব ব্যবসা সোশ্যাল মিডিয়ার মাধ্যমে বিক্রি করে তাদের জন্য টেকনিক্যাল পরামর্শ — সঠিক কাঠামো, টুল ও সুরক্ষা ব্যবস্থা, যাতে একটি সমস্যায় পুরো ব্যবসা থেমে না যায়।' },
    services: [
      { en: 'Business asset structure: pages, Business Manager, ad accounts', bn: 'বিজনেস অ্যাসেটের কাঠামো: পেজ, বিজনেস ম্যানেজার, অ্যাড অ্যাকাউন্ট' },
      { en: 'Online business risk assessment', bn: 'অনলাইন ব্যবসার ঝুঁকি মূল্যায়ন' },
      { en: 'Customer communication and automation planning', bn: 'কাস্টমার যোগাযোগ ও অটোমেশন পরিকল্পনা' },
      { en: 'Platform policy compliance for selling online', bn: 'অনলাইনে বিক্রির ক্ষেত্রে প্ল্যাটফর্ম পলিসি মেনে চলা' },
      { en: 'Business continuity planning', bn: 'ব্যবসার ধারাবাহিকতা পরিকল্পনা' },
    ],
    forWhom: { en: 'F-commerce and e-commerce businesses, online shops and social-first brands.', bn: 'এফ-কমার্স ও ই-কমার্স ব্যবসা, অনলাইন শপ এবং সোশ্যাল মিডিয়াভিত্তিক ব্র্যান্ড।' },
    problems: [
      { en: 'Sales depend on one page or one admin', bn: 'বিক্রি একটি পেজ বা একজন অ্যাডমিনের ওপর নির্ভরশীল' },
      { en: 'Ad accounts or shops restricted by policy', bn: 'পলিসির কারণে অ্যাড অ্যাকাউন্ট বা শপ সীমাবদ্ধ' },
      { en: 'No plan for what happens if the page is lost', bn: 'পেজ হারালে কী হবে তার কোনো পরিকল্পনা নেই' },
    ],
  },
  {
    id: 'harassment',
    number: '04',
    title: { en: 'Cyber Harassment & Blackmail Response', bn: 'সাইবার হয়রানি ও ব্ল্যাকমেইল মোকাবিলা' },
    summary: { en: 'Confidential guidance for people facing online harassment, blackmail or the spread of private content — what to do first, what not to do, and how to use platform processes.', bn: 'অনলাইন হয়রানি, ব্ল্যাকমেইল বা ব্যক্তিগত কনটেন্ট ছড়িয়ে পড়ার শিকার মানুষের জন্য গোপনীয় নির্দেশনা — প্রথমে কী করবেন, কী করবেন না, আর প্ল্যাটফর্মের প্রক্রিয়া কীভাবে কাজে লাগাবেন।' },
    services: [
      { en: 'Immediate response guidance for blackmail and sextortion', bn: 'ব্ল্যাকমেইল ও সেক্সটর্শনের ক্ষেত্রে তাৎক্ষণিক করণীয় নির্দেশনা' },
      { en: 'Reporting and removal of harmful or private content', bn: 'ক্ষতিকর বা ব্যক্তিগত কনটেন্ট রিপোর্ট ও সরানো' },
      { en: 'Impersonation and harassment account response', bn: 'ছদ্মবেশী ও হয়রানিকারী অ্যাকাউন্টের বিরুদ্ধে পদক্ষেপ' },
      { en: 'Evidence preservation guidance', bn: 'প্রমাণ সংরক্ষণের নির্দেশনা' },
      { en: 'Referral to legal and law-enforcement channels where needed', bn: 'প্রয়োজনে আইনি ও আইনশৃঙ্খলা বাহিনীর কাছে যাওয়ার দিকনির্দেশনা' },
    ],
    forWhom: { en: 'Individuals, public figures and families facing online harassment or threats.', bn: 'অনলাইন হয়রানি বা হুমকির শিকার ব্যক্তি, পাবলিক ফিগার ও পরিবার।' },
    problems: [
      { en: 'Threats to share private photos or videos', bn: 'ব্যক্তিগত ছবি বা ভিডিও ছড়িয়ে দেওয়ার হুমকি' },
      { en: 'Fake accounts used to harass or defame', bn: 'হয়রানি বা মানহানির জন্য ভুয়া অ্যাকাউন্ট' },
      { en: 'Private content already circulating online', bn: 'ব্যক্তিগত কনটেন্ট অনলাইনে ছড়িয়ে পড়া' },
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
