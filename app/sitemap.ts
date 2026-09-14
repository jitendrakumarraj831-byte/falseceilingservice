import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { CONTENT_UPDATED, siteUrl } from '@/lib/site'

/**
 * `lastModified` uses a fixed content date rather than `new Date()`.
 *
 * `new Date()` here stamps every URL with the build time, so each deploy tells
 * Google the entire site changed. Google drops `lastmod` from its crawl
 * scheduling once the values stop reflecting real edits, which slows pages out
 * of "Discovered – currently not indexed".
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED)
  return [
    { url: siteUrl('/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: siteUrl('/services'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({ url: siteUrl(`/services/${s.slug}`), lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
