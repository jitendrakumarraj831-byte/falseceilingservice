import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, Images, Phone } from 'lucide-react'
import { CTA, Footer, Hindi, Navbar } from '@/components/site'
import { getService, getPhotoAlt, img, serviceGallery, services } from '@/lib/services'
import { SITE_URL, getBreadcrumbSchema, getServiceSchema } from '@/lib/schema'
import { whyUsPoints } from '@/lib/content'

const BENTO_SPANS = ['sm:col-span-2 sm:row-span-2', 'sm:col-span-1 sm:row-span-1', 'sm:col-span-1 sm:row-span-2', 'sm:col-span-2 sm:row-span-1', 'sm:col-span-1 sm:row-span-1', 'sm:col-span-1 sm:row-span-1']

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  const title = `${service.name} in Chandigarh | Arbaz`
  const url = `${SITE_URL}/services/${service.slug}`
  return {
    title,
    description: service.descriptionEn,
    alternates: { canonical: url },
    openGraph: { title, description: service.descriptionEn, url, type: 'website', locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description: service.descriptionEn },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const photos = serviceGallery(service.slug)
  const serviceImage = service.photoCount > 0 ? `${SITE_URL}${img(`${service.slug}/1.jpg`)}` : undefined
  const serviceLd = getServiceSchema(service, serviceImage)
  const breadcrumbLd = getBreadcrumbSchema(service)
  return <>
    <Navbar />
    <main className="bg-sky-glow pt-28">
      <div className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <Link href="/#services" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition hover:underline"><ArrowLeft size={16} /> All Services</Link>
        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{service.name}<Hindi>{service.descriptionHi}</Hindi></h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{service.descriptionEn}</p>
        <div className="mt-7 flex flex-wrap gap-3"><CTA kind="call"><Phone data-icon="inline-start" /> Call Now</CTA><CTA service={service.name}>Send Photo on WhatsApp</CTA></div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl">Why Choose Arbaz for {service.name} in Chandigarh?<Hindi>चंडीगढ़ में {service.name} के लिए Arbaz को क्यों चुनें?</Hindi></h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{whyUsPoints.map(([x, hindi]) => <div key={x} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={18} /></span><span className="font-bold">{x}<Hindi>{hindi}</Hindi></span></div>)}</div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <h2 className="mb-6 font-serif text-2xl sm:text-3xl">{service.name} Photo Gallery<Hindi>{service.name} फोटो गैलरी</Hindi></h2>
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-4 sm:grid-flow-dense">
            {photos.map((photo, i) => <div key={photo} className={`relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border sm:aspect-auto ${BENTO_SPANS[i % BENTO_SPANS.length]}`}><Image src={img(photo)} alt={getPhotoAlt(service.slug, i + 1)} fill loading={i === 0 ? undefined : 'lazy'} priority={i === 0} className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" /></div>)}
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

      <div className="px-5 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm sm:p-12 md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-3xl">Get a Free Estimate for {service.name}<Hindi>{service.name} का मुफ्त अनुमान पाएं</Hindi></h2>
            <p className="mt-2 text-muted-foreground">Send your room or site photo on WhatsApp and talk to Arbaz directly.</p>
          </div>
          <CTA service={service.name}>Send Photo on WhatsApp</CTA>
        </div>
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
  </>
}
