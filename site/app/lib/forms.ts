/**
 * Form submission adapter.
 *
 * DEMO MODE: no backend is connected yet, so `submitInquiry` never sends data anywhere
 * and the UI says so explicitly. To go live, replace the body of `submitInquiry` with a
 * POST to a secure endpoint (e.g. a serverless function or a form service) that:
 *   - validates input again server-side,
 *   - checks the `website` honeypot and rate-limits,
 *   - sends over HTTPS only and never logs message bodies.
 * Then set FORMS_LIVE = true.
 */
export const FORMS_LIVE = false

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

export type SubmitResult = { status: 'demo' } | { status: 'sent' } | { status: 'error'; message: string }

export async function submitInquiry(_payload: InquiryPayload): Promise<SubmitResult> {
  if (!FORMS_LIVE) return { status: 'demo' }
  // return fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(_payload) }) ...
  return { status: 'error', message: 'Form endpoint not configured' }
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
