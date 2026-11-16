# কোর্স ও বই যোগ করার নিয়ম (Learning)

পেজ: `abdullahalimran.com/learning/`। কিছু যোগ না করা পর্যন্ত পেজে "Coming soon" দেখায়।

## সবচেয়ে সহজ উপায়

আমাকে প্রতিটা কোর্স বা বইয়ের জন্য এগুলো পাঠান। কভার ছবিটা `content-inbox/10-other/`-এ রাখুন, বাকিটা আমি বসিয়ে দেব।

- নাম
- ১–২ লাইনের বর্ণনা
- কী শিখবে বা কী পাবে: ৩–৪টা পয়েন্ট
- কোর্স, ই-বুক নাকি ফ্রি রিসোর্স
- ভাষা
- দাম (টাকায়), ছাড় থাকলে আগের দামও
- ছোট তথ্য, যেমন "১২টি রেকর্ডেড ক্লাস" বা "৮৬ পৃষ্ঠা"
- কেনার লিংক: যেখানে বিক্রি হয় (কোর্স প্ল্যাটফর্ম, ফর্ম, Facebook পেজ, WhatsApp ইত্যাদি)

## নিজে যোগ করতে চাইলে

`site/app/content/products.ts` ফাইলে `export const products: Product[] = [ ... ]`-এর ভেতরে এরকম একটা ব্লক বসান:

```ts
{
  slug: 'facebook-page-security-course',
  kind: 'course',                // 'course' | 'ebook' | 'free'
  title: { en: 'Facebook Page Security Masterclass', bn: 'ফেসবুক পেজ সিকিউরিটি মাস্টারক্লাস' },
  description: { en: 'One line about the course.', bn: 'কোর্স নিয়ে এক লাইন।' },
  highlights: [
    { en: 'Point one', bn: 'প্রথম পয়েন্ট' },
    { en: 'Point two', bn: 'দ্বিতীয় পয়েন্ট' },
  ],
  language: 'bn',                // 'bn' | 'en' | 'both'
  price: 990,                    // ফ্রি হলে এই লাইন বাদ দিন
  oldPrice: 1500,                // ঐচ্ছিক
  details: { en: '12 recorded lessons', bn: '১২টি রেকর্ডেড ক্লাস' },
  cover: '/images/products/facebook-page-security-course.webp',
  url: 'https://…',              // কেনার লিংক
},
```

উপরের নাম, দাম আর লিংকগুলো শুধু উদাহরণ। আসল তথ্য দিয়ে বদলাবেন।

তারপর `npm run build` চালান। যে ধরনের (কোর্স, ই-বুক বা ফ্রি) অন্তত একটা আইটেম আছে, শুধু সেই অংশটাই দেখাবে।

## যা স্বয়ংক্রিয়ভাবে হয়

- প্রতিটা আইটেমের জন্য Google-এর জন্য Course বা Book structured data তৈরি হয় (দাম, ভাষা, লেখকসহ)।
- পুরনো `/resources/` লিংক নিজে থেকে `/learning/`-এ চলে যায় (হোস্টিংয়ের পর)।
