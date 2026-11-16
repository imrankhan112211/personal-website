# চূড়ান্ত রিভিউ: abdullahalimran.com

তারিখ: ১৬ নভেম্বর ২০২৬ · অবস্থা: **প্রকাশের জন্য প্রস্তুত** (নিচের "লাইভের আগে অবশ্যই" অংশটুকু ছাড়া)

---

## ১. কী যাচাই করা হয়েছে, আর ফলাফল

সব ৪৪টা পেজ (ইংরেজি ২২ + বাংলা ২২) বিল্ড করে একটা অডিট স্ক্রিপ্ট দিয়ে পরীক্ষা করা হয়েছে।

| পরীক্ষা | ফলাফল |
|---|---|
| ভাঙা ইন্টারনাল লিংক, হারানো ছবি | ০টা |
| প্রতিটা পেজে একটাই H1 | ✓ সব পেজে |
| ছবির alt text | ✓ সব ছবিতে আছে |
| অনন্য title ও meta description | ✓ কোনোটা দুবার নেই, দৈর্ঘ্য ৫০–১৭০ অক্ষরের মধ্যে |
| canonical ও hreflang (EN ↔ BN) | ✓ সব পেজে |
| Open Graph শেয়ার ছবি | ✓ নতুন ছবি, ৬০ KB (আগে ৭৯৫ KB ছিল) |
| Structured data (JSON-LD) | ✓ সব বৈধ: Person, ProfilePage, Organization ×6, Service, FAQPage ×4, WebSite, BreadcrumbList ×40 |
| ফাঁকা placeholder, "TODO", "lorem" | ০টা (প্রকাশিত পেজে) |
| sitemap.xml, robots.txt, llms.txt | ✓ হালনাগাদ (Learning, সেবা, প্রশ্নোত্তর সহ) |
| মোবাইলে পাশে স্ক্রল | ✓ নেই (৩৭৫, ৭৬৮, ১০২৪, ১২৮০, ১৪৪০, ১৯২০ px) |
| গতি (লোকালে মাপা) | LCP ০.১ সেকেন্ড, CLS ০.০০৪ |
| অ্যানিমেশন | ✓ "reduced motion" চালু থাকলে নিজে থেকে বন্ধ হয় |
| রঙের পাঠযোগ্যতা | ✓ মূল জায়গাগুলো WCAG AA (৪.৫:১) এর ওপরে |

> নোট: Lighthouse চালানোর অনুমতি এই সেশনে ছিল না, তাই গতি ব্রাউজারের Performance API দিয়ে মাপা হয়েছে। লাইভ হওয়ার পর https://pagespeed.web.dev এ একবার পরীক্ষা করে নেবেন।

## ২. SEO ও AEO (Google + AI) এ যা করা আছে

- **একই পরিচিতি সব জায়গায়:** "Abdullah Al Imran is a Bangladeshi technology entrepreneur and cyber safety advocate, the founder of Probfly IT and Kaktaruaa, and a recipient of The Diana Award (2026)." এটা আছে meta, Person schema, llms.txt, About ও Biography পেজে।
- **Person schema:** জন্মস্থান, শিক্ষা, জাতীয়তা, পুরস্কার, প্রতিষ্ঠিত প্রতিষ্ঠান আর ৬টা সোশ্যাল প্রোফাইল (sameAs)।
- **Organization schema:** প্রতিটা ভেঞ্চারের জন্য, প্রতিষ্ঠার সাল আর সহ-প্রতিষ্ঠাতাসহ। Zurvis.io-এর সাথে WhatsFly-এর বিকল্প নামও দেওয়া আছে।
- **"Who is Abdullah Al Imran?" প্রশ্নোত্তর:** Biography পেজে আর llms.txt-এ (FAQPage schema-সহ)। AI সহকারী আর Google-এর উত্তরের বক্সে এই ধরনের লেখাই বেশি উঠে আসে।
- **২৬টা প্রকাশিত প্রতিবেদন:** প্রতিটা আসল উৎসে লিংক করা, আর ProfilePage schema-তে `subjectOf` হিসেবে দেওয়া।
- **ভেঞ্চারের লিংক:** সবগুলোতে UTM (`utm_source=abdullahalimran`) যোগ করা, যাতে Probfly, Zurvis, WhatsFly আর Kaktaruaa নিজেদের analytics-এ দেখতে পারে কত মানুষ এই সাইট থেকে গেছে।
- **পুরনো লিংক:** `/insights/` → `/blog/` আর `/resources/`, `/courses/` → `/learning/` স্থায়ীভাবে (301) পুনর্নির্দেশিত।

## ৩. সাইটের কাঠামো (চূড়ান্ত)

**হোমপেজ:**
1. হিরো
2. ক্রেডেনশিয়াল ও সংখ্যা
3. Trusted by (১২টা লোগো)
4. The Problem → তিনটা সমাধানের ভাগ: Business solutions, Brand protection, Cyber solutions
5. Digital Trust Framework (Protect / Automate / Educate)
6. On stage and in the room (ছবি)
7. Who is Abdullah Al Imran?
8. In their own words (৬টা উক্তি)
9. Recognition
10. In the press
11. শেষের CTA

**অন্য পেজ:**
- About, Biography
- Consulting (৪টা ভাগ)
- Training (Who I train সহ)
- Ventures (৪টা)
- Learning
- Blog
- Impact (৯৯টা রিভিউ, ১০টা ভিডিও)
- Recognition, Media (২৬টা)
- Contact
- Privacy, Terms

সব পেজ বাংলাতেও আছে।

## ৪. লাইভের আগে অবশ্যই করতে হবে

1. **হোস্টিং ও ডোমেইন:** `site/build/client` ফোল্ডারটা Netlify বা Cloudflare Pages-এ তুলুন। ধাপগুলো `docs/DEPLOYMENT.md`-এ আছে।
2. **যোগাযোগ ফর্ম চালু করা:** এখন ফর্ম "demo mode"-এ, কিছু পাঠায় না। Netlify Forms (বিনামূল্যে) বা Formspree দিয়ে `site/app/lib/forms.ts`-এ একটা জায়গা বদলালেই চালু হবে। **এটা না করলে ক্লায়েন্টের মেসেজ আসবে না।**
3. **Google Search Console:** সাইট যোগ করে `sitemap.xml` জমা দিন।
4. **Privacy ও Terms:** এখন `noindex` (Google-এ দেখায় না)। একবার পড়ে নিশ্চিত হলে index চালু করা যায়।

## ৫. আপনার কাছ থেকে যা এখনো বাকি (সাইট চলবে, তবে দিলে আরও ভালো)

| বিষয় | কোথায় দেখাবে |
|---|---|
| UK ট্রেডমার্ক নম্বর (UK00…) | ক্রেডেনশিয়াল লাইনে যাচাইয়ের লিংকসহ |
| সেবার শুরুর দাম (চাইলে) | সেবার কার্ড |
| প্রথম কোর্স বা ই-বুক | Learning পেজ (`docs/ADDING_PRODUCTS.md` দেখুন) |
| ৩–৪টা ব্লগ লেখা | Blog (`docs/WRITING_ARTICLES.md` দেখুন) |
| ভিডিও রিভিউ ৫-এর একটা স্ক্রিনশট | Impact পেজ |
| US LLC-এর নিবন্ধিত নাম ও স্টেট | Organization schema |

## ৬. পরের ধাপে কী করলে সবচেয়ে বেশি লাভ

1. **ব্লগ লেখা (মাসে ২–৪টা):** র‍্যাংকিং আর আন্তর্জাতিক ক্লায়েন্ট আনার সবচেয়ে বড় উপায়। ইংরেজিতে "Facebook ad account restricted — what to do", "How to stop brand impersonation" ধরনের লেখা।
2. **Wikidata আইটেম:** `docs/PROFILE_FACTS.md`-এর ধাপ অনুযায়ী। Google Knowledge Panel-এর জন্য।
3. **সব প্রোফাইলের লেখা মিলিয়ে নেওয়া:** LinkedIn, Facebook, Instagram একই পরিচিতি দিয়ে (`docs/PROFILE_FACTS.md`)।
4. **একটা ফ্রি লিড-ম্যাগনেট:** যেমন "Business Page Safety Checklist" PDF। Learning পেজে ইমেইলের বিনিময়ে দেওয়া যায়।
