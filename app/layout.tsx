import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const devanagari = Noto_Sans_Devanagari({ subsets: ['devanagari'], variable: '--font-devanagari' })

export const metadata: Metadata = { metadataBase: new URL('https://falseceilingservice.com'), title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Arbaz provides gypsum false ceiling, PVC ceiling, WPC wall paneling, fluted panels, grid ceiling and wall partition services in Manimajra, Chandigarh.', alternates: { canonical: 'https://falseceilingservice.com' }, openGraph: { title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Practical ceiling and interior work for homes, offices and shops in Chandigarh.', url: 'https://falseceilingservice.com', siteName: 'False Ceiling Service', type: 'website' }, twitter: { card: 'summary_large_image', title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Ceiling and interior services in Manimajra, Chandigarh.' } }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f8f7f3', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`bg-background ${devanagari.variable}`}><body>{children}</body></html> }
