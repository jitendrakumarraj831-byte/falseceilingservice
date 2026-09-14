import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Images, Phone } from 'lucide-react'
import { CTA, Footer, Hindi, Navbar } from '@/components/site'
import { getPhotoAlt, img, services, servicePhoto } from '@/lib/services'
import { SITE_URL } from '@/lib/schema'

const title = 'Our Services | False Ceiling, PVC, Partition & Grid in Chandigarh'
const description = 'All ceiling and interior services offered by Arbaz in Manimajra, Chandigarh — gypsum false ceiling, PVC false ceiling, wall partition and grid ceiling. See photos of completed work for each service.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services', siteName: 'False Ceiling Service', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function ServicesIndexPage() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'False Ceiling & Interior Services in Chandigarh',
    itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE_URL}/services/${s.slug}` })),
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    ],
  }
  return <>
    <Navbar />
    <main className="bg-sky-glow pt-28">
      <div className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-primary"><span className="h-px w-6 bg-primary" />What we do</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">False Ceiling &amp; Interior Services in Chandigarh<Hindi>चंडीगढ़ में फॉल्स सीलिंग और इंटीरियर सेवाएँ</Hindi></h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Arbaz takes up ceiling and partition work for homes, offices and shops in Manimajra and around Chandigarh. Open any service below to see real photos of completed work and what the material suits best.</p>
        <div className="mt-7 flex flex-wrap gap-3"><CTA kind="call"><Phone data-icon="inline-start" /> Call Now</CTA><CTA>Send Photo on WhatsApp</CTA></div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.slug} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <Link href={`/services/${s.slug}`} className="block">
                {s.photoCount > 0
                  ? <div className="relative aspect-[4/3] overflow-hidden"><Image src={img(servicePhoto(s.slug, 1))} alt={getPhotoAlt(s.slug, 1)} fill loading="lazy" className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /></div>
                  : <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-primary-soft/15 text-center"><Images size={26} className="text-primary/50" /><p className="px-4 text-xs font-bold uppercase tracking-wide text-primary/70">Photos coming soon</p></div>}
                <div className="flex flex-col gap-3 p-5">
                  <h2 className="font-serif text-2xl">{s.name}<Hindi>{s.descriptionHi}</Hindi></h2>
                  <p className="text-sm leading-6 text-muted-foreground">{s.descriptionEn}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">View {s.name} details <ArrowUpRight size={15} /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="px-5 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm sm:p-12 md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-3xl">Not sure which one suits your room?<Hindi>कौन-सी सीलिंग आपके कमरे के लिए सही है?</Hindi></h2>
            <p className="mt-2 text-muted-foreground">Send a photo of your room or site on WhatsApp and Arbaz will suggest the right material and give an estimate.</p>
          </div>
          <CTA>Send Photo on WhatsApp</CTA>
        </div>
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
  </>
}
