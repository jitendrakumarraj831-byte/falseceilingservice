import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://falseceilingservice.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }, ...services.map((s) => ({ url: `https://falseceilingservice.com/services/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 }))] }
