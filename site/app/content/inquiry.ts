import type { Localized } from '~/i18n/locales'

export const inquiryTypes = [
  { id: 'general', label: { en: 'General inquiry', bn: 'সাধারণ জিজ্ঞাসা' } },
  { id: 'consulting', label: { en: 'Consulting request', bn: 'পরামর্শের অনুরোধ' } },
  { id: 'training', label: { en: 'Training invitation', bn: 'প্রশিক্ষণের আমন্ত্রণ' } },
  { id: 'speaking', label: { en: 'Speaking invitation', bn: 'বক্তৃতার আমন্ত্রণ' } },
  { id: 'collaboration', label: { en: 'Business collaboration', bn: 'ব্যবসায়িক সহযোগিতা' } },
  { id: 'media', label: { en: 'Media & interview request', bn: 'গণমাধ্যম ও সাক্ষাৎকারের অনুরোধ' } },
] as const satisfies readonly { id: string; label: Localized }[]

export type InquiryType = (typeof inquiryTypes)[number]['id']
export const isInquiryType = (v: string | null): v is InquiryType => inquiryTypes.some((t) => t.id === v)

export const consultingAreas: { id: string; label: Localized }[] = [
  { id: 'social-media-security', label: { en: 'Social media security & account protection', bn: 'সোশ্যাল মিডিয়া নিরাপত্তা ও অ্যাকাউন্ট সুরক্ষা' } },
  { id: 'brand-content', label: { en: 'Digital brand & content protection', bn: 'ডিজিটাল ব্র্যান্ড ও কনটেন্ট সুরক্ষা' } },
  { id: 'business-risk', label: { en: 'Online business safety & risk', bn: 'অনলাইন ব্যবসার নিরাপত্তা ও ঝুঁকি' } },
  { id: 'reputation', label: { en: 'Personal brand & digital reputation', bn: 'পার্সোনাল ব্র্যান্ড ও ডিজিটাল সুনাম' } },
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
