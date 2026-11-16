/** Adds UTM tags to outbound venture links so the venture sites can see traffic from this website. */
export function withUtm(url: string, campaign = 'ventures') {
  try {
    const u = new URL(url)
    u.searchParams.set('utm_source', 'abdullahalimran')
    u.searchParams.set('utm_medium', 'referral')
    u.searchParams.set('utm_campaign', campaign)
    return u.toString()
  } catch {
    return url
  }
}
