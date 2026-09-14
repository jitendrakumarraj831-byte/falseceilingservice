/**
 * Single source of truth for the canonical origin.
 *
 * Canonical tags, the sitemap and robots.txt must all agree on one spelling of
 * the host. When they drift apart Google reports the difference as
 * "Duplicate without user-selected canonical" in the Page indexing report, so
 * every absolute URL on the site is built from this constant.
 *
 * No trailing slash: paths are appended as `${SITE_URL}/services/...`.
 */
export const SITE_URL = 'https://falseceilingservice.com'

/**
 * Date the page content last meaningfully changed, used for sitemap `lastmod`.
 *
 * Deliberately a constant rather than `new Date()`: a sitemap that stamps every
 * URL with the current build time claims the whole site changed on each deploy,
 * and Google starts ignoring `lastmod` once it stops matching reality. Bump this
 * when service copy or photos actually change.
 */
export const CONTENT_UPDATED = '2026-09-14'

/**
 * Build an absolute URL for a path, in exactly the spelling the canonical tags
 * use. `siteUrl('/')` returns the bare origin (no trailing slash) so sitemap
 * entries and `<link rel="canonical">` are character-for-character identical.
 */
export function siteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized === '/' ? SITE_URL : `${SITE_URL}${normalized.replace(/\/+$/, '')}`
}
