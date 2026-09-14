import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Devanagari } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const devanagari = Noto_Sans_Devanagari({ subsets: ['devanagari'], variable: '--font-devanagari' })

/**
 * Site-wide defaults only.
 *
 * Metadata set here is inherited by every route that does not define its own,
 * so page-specific fields (title, canonical, Open Graph URL) must NOT live in
 * the root layout — a canonical declared here is emitted on the 404 page and on
 * any route added later, which Google reports as "Alternate page with proper
 * canonical tag". Each page declares its own self-referencing canonical instead.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // `default` is what routes without their own title fall back to (the 404 page).
  // `'%s'` passes child titles through unchanged — each page sets a complete title.
  title: { default: 'False Ceiling Contractor in Chandigarh | Gypsum, PVC & Grid | Arbaz', template: '%s' },
  description: 'Arbaz is a false ceiling and interior contractor in Manimajra, Chandigarh offering gypsum false ceiling, PVC false ceiling, wall partition and grid ceiling work.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0284c7', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`bg-background ${devanagari.variable}`}><body>{children}</body></html> }
