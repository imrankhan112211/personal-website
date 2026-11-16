/**
 * Form submission: posts to FormSubmit (formsubmit.co), which emails each inquiry to
 * the inbox below. No account or API key is needed. The very first submission sends a
 * one-time activation email to that inbox; click "Activate" in it and every later
 * message is delivered. To change the inbox, edit FORM_INBOX.
 */
export const FORM_INBOX = 'imran@probfly.com'
const ENDPOINT = `https://formsubmit.co/ajax/${FORM_INBOX}`

export type InquiryPayload = {
  type: string
  name: string
  email: string
  organization?: string
  message: string
  area?: string
  audience?: string
  date?: string
  consent: boolean
  /** Honeypot — must be empty */
  website?: string
}

export type SubmitResult = { status: 'sent' } | { status: 'error'; message: string }

export async function submitInquiry(p: InquiryPayload): Promise<SubmitResult> {
  if (p.website) return { status: 'sent' } // honeypot: pretend success, send nothing
  const body = {
    _subject: `Website inquiry (${p.type}) from ${p.name}`,
    _replyto: p.email,
    _template: 'table',
    _captcha: 'false',
    _honey: '',
    'Inquiry type': p.type,
    Name: p.name,
    Email: p.email,
    Organisation: p.organization || '-',
    ...(p.area ? { 'Consulting area': p.area } : {}),
    ...(p.audience ? { Audience: p.audience } : {}),
    ...(p.date ? { 'Preferred date': p.date } : {}),
    Message: p.message,
    Page: typeof location !== 'undefined' ? location.href : '',
  }
  try {
    const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string }
    if (res.ok && String(json.success) === 'true') return { status: 'sent' }
    return { status: 'error', message: json.message || `HTTP ${res.status}` }
  } catch (e) {
    return { status: 'error', message: e instanceof Error ? e.message : 'Network error' }
  }
}

export type FieldErrors = Partial<Record<'name' | 'email' | 'message' | 'consent' | 'type', 'required' | 'email' | 'short'>>

export function validateInquiry(p: InquiryPayload): FieldErrors {
  const e: FieldErrors = {}
  if (!p.name.trim()) e.name = 'required'
  if (!p.email.trim()) e.email = 'required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(p.email.trim())) e.email = 'email'
  if (!p.type) e.type = 'required'
  if (!p.message.trim()) e.message = 'required'
  else if (p.message.trim().length < 20) e.message = 'short'
  if (!p.consent) e.consent = 'required'
  return e
}
