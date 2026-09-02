import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const devanagari = Noto_Sans_Devanagari({ subsets: ['devanagari'], variable: '--font-devanagari' })

const ogImage = '/services/gypsum-false-ceiling/4.jpg'

export const metadata: Metadata = { metadataBase: new URL('https://falseceilingservice.com'), title: 'False Ceiling Contractor in Chandigarh | Gypsum & PVC | Arbaz', description: 'Arbaz is a false ceiling and interior contractor in Manimajra, Chandigarh offering gypsum false ceiling, PVC false ceiling and wall partition work. Free WhatsApp photo estimate — quality material, clean finishing, honest pricing.', keywords: ['false ceiling Chandigarh', 'gypsum false ceiling contractor', 'PVC false ceiling Manimajra', 'wall partition Chandigarh', 'false ceiling near me', 'फॉल्स सीलिंग चंडीगढ़', 'gypsum ceiling contractor Chandigarh'], alternates: { canonical: 'https://falseceilingservice.com' }, openGraph: { title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Gypsum false ceiling, PVC false ceiling and wall partition work for homes, offices and shops in Chandigarh. Free estimate on WhatsApp.', url: 'https://falseceilingservice.com', siteName: 'False Ceiling Service', type: 'website', locale: 'en_IN', images: [{ url: ogImage, width: 736, height: 552, alt: 'Modern false ceiling design by Arbaz, Chandigarh' }] }, twitter: { card: 'summary_large_image', title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Ceiling and interior services in Manimajra, Chandigarh. Free WhatsApp photo estimate.', images: [ogImage] } }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0284c7', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`bg-background ${devanagari.variable}`}><body>{children}</body></html> }
