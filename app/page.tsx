import type { Metadata } from 'next'
import Site from '@/components/site'

export const metadata: Metadata = {
  title: 'False Ceiling Contractor in Chandigarh | Gypsum, PVC & Grid | Arbaz',
  description: 'Arbaz is a false ceiling and interior contractor in Manimajra, Chandigarh offering gypsum false ceiling, PVC false ceiling, wall partition and grid ceiling work. Free WhatsApp photo estimate — quality material, clean finishing, honest pricing.',
  keywords: ['false ceiling Chandigarh', 'gypsum false ceiling contractor', 'PVC false ceiling Manimajra', 'wall partition Chandigarh', 'grid ceiling Chandigarh', 'false ceiling near me', 'फॉल्स सीलिंग चंडीगढ़', 'gypsum ceiling contractor Chandigarh'],
  alternates: { canonical: '/' },
  openGraph: { title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Gypsum false ceiling, PVC false ceiling, wall partition and grid ceiling work for homes, offices and shops in Chandigarh. Free estimate on WhatsApp.', url: '/', siteName: 'False Ceiling Service', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title: 'False Ceiling Contractor in Chandigarh | Arbaz', description: 'Ceiling and interior services in Manimajra, Chandigarh. Free WhatsApp photo estimate.' },
}

export default function Home() {
  return <Site />
}
