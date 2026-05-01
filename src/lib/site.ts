/**
 * Canonical site URL for SEO (metadataBase, sitemap, OG).
 *
 * Prefer `NEXT_PUBLIC_SITE_URL` in production once you attach a domain.
 * On Vercel, `VERCEL_URL` exists during build/runtime — we derive https://...
 */
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit && explicit.startsWith('http')) return explicit.replace(/\/$/, '')

  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`

  return 'http://localhost:3000'
}

export const siteUrl = getSiteUrl()
