import type { Localized } from '~/i18n/locales'

export const inquiryTypes = [
  { id: 'general', label: { en: 'General inquiry', bn: 'সাধারণ জিজ্ঞাসা' } },
  { id: 'consulting', label: { en: 'Consulting request', bn: 'পরামর্শের অনুরোধ' } },
  { id: 'service', label: { en: 'Technology solution / project', bn: 'টেকনোলজি সলিউশন / প্রজেক্ট' } },
  { id: 'training', label: { en: 'Training invitation', bn: 'প্রশিক্ষণের আমন্ত্রণ' } },
  { id: 'speaking', label: { en: 'Speaking invitation', bn: 'বক্তৃতার আমন্ত্রণ' } },
  { id: 'collaboration', label: { en: 'Business collaboration', bn: 'ব্যবসায়িক সহযোগিতা' } },
  { id: 'media', label: { en: 'Media & interview request', bn: 'গণমাধ্যম ও সাক্ষাৎকারের অনুরোধ' } },
] as const satisfies readonly { id: string; label: Localized }[]

export type InquiryType = (typeof inquiryTypes)[number]['id']
export const isInquiryType = (v: string | null): v is InquiryType => inquiryTypes.some((t) => t.id === v)

export const consultingAreas: { id: string; label: Localized }[] = [
  { id: 'brand-protection', label: { en: 'Business & brand protection', bn: 'বিজনেস ও ব্র্যান্ড সুরক্ষা' } },
  { id: 'social-media-solutions', label: { en: 'Social media solutions & incident response', bn: 'সোশ্যাল মিডিয়া সলিউশন ও ইনসিডেন্ট রেসপন্স' } },
  { id: 'social-commerce', label: { en: 'Social commerce technical advisory', bn: 'সোশ্যাল কমার্সের টেকনিক্যাল অ্যাডভাইজরি' } },
  { id: 'harassment', label: { en: 'Cyber harassment & blackmail response', bn: 'সাইবার হয়রানি ও ব্ল্যাকমেইল মোকাবিলা' } },
  { id: 'not-sure', label: { en: 'Not sure yet', bn: 'এখনও নিশ্চিত নই' } },
]

export const audienceTypes: { id: string; label: Localized }[] = [
  { id: 'school', label: { en: 'School / college / university', bn: 'স্কুল / কলেজ / বিশ্ববিদ্যালয়' } },
  { id: 'ngo', label: { en: 'NGO / social organisation', bn: 'এনজিও / সামাজিক সংগঠন' } },
  { id: 'business', label: { en: 'Business / team', bn: 'ব্যবসা / টিম' } },
  { id: 'institution', label: { en: 'Government / institution', bn: 'সরকারি / প্রাতিষ্ঠানিক' } },
  { id: 'event', label: { en: 'Event / conference', bn: 'অনুষ্ঠান / সম্মেলন' } },
  { id: 'other', label: { en: 'Other', bn: 'অন্যান্য' } },
]
