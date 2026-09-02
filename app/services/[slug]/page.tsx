import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Images, Phone } from 'lucide-react'
import { CTA, Footer, Hindi, Navbar } from '@/components/site'
import { getService, img, serviceGallery, services } from '@/lib/services'

const BENTO_SPANS = ['sm:col-span-2 sm:row-span-2', 'sm:col-span-1 sm:row-span-1', 'sm:col-span-1 sm:row-span-2', 'sm:col-span-2 sm:row-span-1', 'sm:col-span-1 sm:row-span-1', 'sm:col-span-1 sm:row-span-1']

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  const title = `${service.name} in Chandigarh | Arbaz`
  const url = `https://falseceilingservice.com/services/${service.slug}`
  return {
    title,
    description: service.descriptionEn,
    alternates: { canonical: url },
    openGraph: { title, description: service.descriptionEn, url, type: 'website', locale: 'en_IN', images: service.photoCount > 0 ? [{ url: img(`${service.slug}/1.jpg`), width: 736, height: 981, alt: service.name }] : undefined },
    twitter: { card: 'summary_large_image', title, description: service.descriptionEn, images: service.photoCount > 0 ? [img(`${service.slug}/1.jpg`)] : undefined },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const photos = serviceGallery(service.slug)
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.descriptionEn, areaServed: 'Manimajra, Chandigarh', provider: { '@type': 'LocalBusiness', name: 'Arbaz – False Ceiling & Interior Services', telephone: '+917258951213' } }
  return <>
    <Navbar />
    <main className="bg-sky-glow pt-28">
      <div className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <Link href="/#services" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition hover:underline"><ArrowLeft size={16} /> All Services</Link>
        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{service.name}<Hindi>{service.descriptionHi}</Hindi></h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{service.descriptionEn}</p>
        <div className="mt-7 flex flex-wrap gap-3"><CTA kind="call"><Phone data-icon="inline-start" /> Call Now</CTA><CTA service={service.name}>Send Photo on WhatsApp</CTA></div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-4 sm:grid-flow-dense">
            {photos.map((photo, i) => <div key={photo} className={`relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border sm:aspect-auto ${BENTO_SPANS[i % BENTO_SPANS.length]}`}><Image src={img(photo)} alt={`${service.name} photo ${i + 1}`} fill loading={i === 0 ? undefined : 'lazy'} priority={i === 0} className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" /></div>)}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-dashed border-primary/30 bg-card p-12 text-center sm:p-16">
            <Images size={32} className="text-primary/50" />
            <p className="font-serif text-2xl">Photos coming soon<Hindi>जल्द ही फोटो जोड़ी जाएंगी</Hindi></p>
            <p className="max-w-md text-muted-foreground">Send us your requirement on WhatsApp — Arbaz will share reference photos for {service.name.toLowerCase()} and an estimate directly.</p>
            <CTA service={service.name}>Send Photo on WhatsApp</CTA>
          </div>
        )}
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>
}
