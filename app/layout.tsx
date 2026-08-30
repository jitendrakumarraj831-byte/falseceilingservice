import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const devanagari = Noto_Sans_Devanagari({ subsets: ['devanagari'], variable: '--font-devanagari' })

const ogImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'

export const metadata: Metadata = { metadataBase: new URL('https://falseceilingservice.com'), title: 'False Ceiling Contractor in Chandigarh | Gypsum, PVC & WPC | Arbaz', description: 'Arbaz is a false ceiling and interior contractor in Manimajra, Chandigarh offering gypsum false ceiling, PVC ceiling, WPC wall paneling, fluted panels, grid ceiling and wall partition work. Free WhatsApp photo estimate — quality material, clean finishing, honest pricing.', keywords: ['false ceiling Chandigarh', 'gypsum false ceiling contractor', 'PVC ceiling Manimajra', 'WPC wall panel Chandigarh', 'fluted panel wall design', 'false ceiling near me', 'फॉल्स सीलिंग चंडीगढ़', 'gypsum ceiling contractor Chandigarh'], alternates: { canonical: 'https://falseceilingservice.com' }, openGraph: { title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Gypsum false ceiling, PVC ceiling, WPC wall paneling and interior work for homes, offices and shops in Chandigarh. Free estimate on WhatsApp.', url: 'https://falseceilingservice.com', siteName: 'False Ceiling Service', type: 'website', locale: 'en_IN', images: [{ url: ogImage, width: 1600, height: 1067, alt: 'Modern false ceiling design by Arbaz, Chandigarh' }] }, twitter: { card: 'summary_large_image', title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Ceiling and interior services in Manimajra, Chandigarh. Free WhatsApp photo estimate.', images: [ogImage] } }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0284c7', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`bg-background ${devanagari.variable}`}><body>{children}</body></html> }
