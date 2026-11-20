import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { useSearchParams } from 'react-router'
import { Button } from '~/components/ui/Button'
import { LocalLink } from '~/components/ui/LocalLink'
import { audienceTypes, consultingAreas, inquiryTypes, isInquiryType, type InquiryType } from '~/content/inquiry'
import { useLocale } from '~/i18n/useLocale'
import { FORM_INBOX, submitInquiry, validateInquiry, type FieldErrors, type InquiryPayload } from '~/lib/forms'
import { cn } from '~/lib/utils'

const empty = (type: InquiryType): InquiryPayload => ({ type, name: '', email: '', organization: '', message: '', area: '', audience: '', date: '', consent: false, website: '' })

/**
 * Accessible inquiry form with client-side validation.
 * `fixedType` locks the type (consulting / training pages); otherwise ?type= preselects it.
 */
export function InquiryForm({ fixedType, defaultType = 'general', className }: { fixedType?: InquiryType; defaultType?: InquiryType; className?: string }) {
  const { t, l } = useLocale()
  const [params] = useSearchParams()
  const [data, setData] = useState<InquiryPayload>(() => empty(fixedType ?? defaultType))
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [state, setState] = useState<'idle' | 'checking' | 'sent' | 'error'>('idle')
  const resultRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const uid = useId()
  const id = (n: string) => `${uid}-${n}`

  // Preselect type from ?type= after hydration (static HTML renders the default).
  useEffect(() => {
    const q = params.get('type')
    if (!fixedType && isInquiryType(q)) setData((d) => ({ ...d, type: q }))
  }, [params, fixedType])

  const set = <K extends keyof InquiryPayload>(k: K, v: InquiryPayload[K]) => {
    const next = { ...data, [k]: v }
    setData(next)
    if (touched[k as string]) setErrors(validateInquiry(next))
  }
  const blur = (k: string) => {
    setTouched((t) => ({ ...t, [k]: true }))
    setErrors(validateInquiry(data))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateInquiry(data)
    setErrors(errs)
    setTouched({ name: true, email: true, message: true, consent: true, type: true })
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    if (data.website) return // honeypot
    setState('checking')
    const res = await submitInquiry(data)
    setState(res.status)
    requestAnimationFrame(() => resultRef.current?.focus())
  }

  const errText = (k: keyof FieldErrors) => {
    const e = errors[k]
    if (!e || !touched[k]) return null
    return k === 'consent' ? t('form.err.consent') : t(`form.err.${e}`)
  }
  const showSummary = Object.keys(errors).length > 0 && Object.keys(touched).length >= 4

  if (state === 'sent') {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className={cn('rounded-[var(--radius-card)] border border-success/30 bg-success-soft p-7 outline-none md:p-9', className)}>
        <p className="flex items-center gap-2 font-display text-xl font-semibold text-ink"><CheckCircle2 aria-hidden className="size-5 text-success" />{t('form.sent.title')}</p>
        <p className="mt-3 text-text">{t('form.sent.body')}</p>
      </div>
    )
  }

  const type = data.type as InquiryType
  const isConsulting = type === 'consulting'
  const isTraining = type === 'training'

  return (
    <form noValidate onSubmit={onSubmit} className={cn('rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-9', className)}>
      {state === 'error' && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 outline-none">
          <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0" />
          <p>{t('form.error')} <a href={`mailto:${FORM_INBOX}`} className="font-semibold underline">{FORM_INBOX}</a></p>
        </div>
      )}

      {showSummary && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800 outline-none">
          {t('form.err.summary')}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id('name')} label={t('form.name')} error={errText('name')}>
          <input id={id('name')} name="name" autoComplete="name" required value={data.name} onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')} aria-invalid={!!errText('name')} aria-describedby={errText('name') ? id('name-err') : undefined} className={inputCls(!!errText('name'))} />
        </Field>
        <Field id={id('email')} label={t('form.email')} error={errText('email')}>
          <input id={id('email')} name="email" type="email" inputMode="email" autoComplete="email" required value={data.email} onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')} aria-invalid={!!errText('email')} aria-describedby={errText('email') ? id('email-err') : undefined} className={inputCls(!!errText('email'))} />
        </Field>
        <Field id={id('org')} label={t('form.org')} optional={t('form.optional')}>
          <input id={id('org')} name="organization" autoComplete="organization" value={data.organization} onChange={(e) => set('organization', e.target.value)} className={inputCls(false)} />
        </Field>
        {!fixedType ? (
          <Field id={id('type')} label={t('form.type')} error={errText('type')}>
            <select id={id('type')} name="type" required value={data.type} onChange={(e) => set('type', e.target.value)} onBlur={() => blur('type')} className={cn(inputCls(!!errText('type')), 'cursor-pointer')}>
              {inquiryTypes.map((it) => <option key={it.id} value={it.id}>{l(it.label)}</option>)}
            </select>
          </Field>
        ) : isConsulting ? null : <div className="hidden sm:block" />}

        {isConsulting && (
          <Field id={id('area')} label={t('form.area')} optional={t('form.optional')} className={fixedType ? undefined : 'sm:col-span-2'}>
            <select id={id('area')} name="area" value={data.area} onChange={(e) => set('area', e.target.value)} className={cn(inputCls(false), 'cursor-pointer')}>
              <option value="">{t('form.select')}</option>
              {consultingAreas.map((a) => <option key={a.id} value={a.id}>{l(a.label)}</option>)}
            </select>
          </Field>
        )}
        {isTraining && (
          <>
            <Field id={id('aud')} label={t('form.audience')} optional={t('form.optional')}>
              <select id={id('aud')} name="audience" value={data.audience} onChange={(e) => set('audience', e.target.value)} className={cn(inputCls(false), 'cursor-pointer')}>
                <option value="">{t('form.select')}</option>
                {audienceTypes.map((a) => <option key={a.id} value={a.id}>{l(a.label)}</option>)}
              </select>
            </Field>
            <Field id={id('date')} label={t('form.date')} optional={t('form.optional')}>
              <input id={id('date')} name="date" value={data.date} onChange={(e) => set('date', e.target.value)} className={inputCls(false)} />
            </Field>
          </>
        )}

        <Field id={id('msg')} label={t('form.message')} error={errText('message')} help={t('form.message.help')} className="sm:col-span-2">
          <textarea id={id('msg')} name="message" rows={6} required value={data.message} onChange={(e) => set('message', e.target.value)} onBlur={() => blur('message')} aria-invalid={!!errText('message')} aria-describedby={cn(id('msg-help'), errText('message') && id('msg-err'))} className={cn(inputCls(!!errText('message')), 'min-h-36 resize-y py-3')} />
        </Field>

        {/* Honeypot — hidden from people and assistive tech */}
        <div aria-hidden className="absolute left-[-9999px]" >
          <label>Website<input tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set('website', e.target.value)} /></label>
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-text">
            <input type="checkbox" name="consent" checked={data.consent} onChange={(e) => { set('consent', e.target.checked); setTouched((x) => ({ ...x, consent: true })) }} aria-invalid={!!errText('consent')} aria-describedby={errText('consent') ? id('consent-err') : undefined} className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--accent)]" />
            <span>
              {t('form.consent')}{' '}
              <LocalLink to="/privacy/" className="font-medium text-accent underline underline-offset-4">{t('form.privacy.link')}</LocalLink>
            </span>
          </label>
          {errText('consent') && <p id={id('consent-err')} className="mt-2 text-sm font-medium text-red-700">{errText('consent')}</p>}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={state === 'checking'}>
        {state === 'checking' ? t('form.sending') : t('form.submit')} <ArrowRight aria-hidden />
      </Button>
    </form>
  )
}

const inputCls = (invalid: boolean) =>
  cn(
    'block min-h-12 w-full rounded-xl border bg-paper px-4 text-base text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 focus:bg-surface focus:outline-none focus:ring-4',
    invalid ? 'border-red-600 focus:ring-red-100' : 'border-line-strong focus:border-accent focus:ring-accent-soft',
  )

function Field({ id, label, optional, error, help, children, className }: { id: string; label: string; optional?: string; error?: string | null; help?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline gap-2 text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-muted">({optional})</span>}
      </label>
      {children}
      {help && <p id={`${id}-help`} className="mt-2 text-xs leading-relaxed text-muted">{help}</p>}
      {error && <p id={`${id}-err`} className="mt-2 text-sm font-medium text-red-700">{error}</p>}
    </div>
  )
}
