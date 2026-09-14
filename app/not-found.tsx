import Link from 'next/link'
import { Footer, Hindi, Navbar } from '@/components/site'
import { services } from '@/lib/services'

/**
 * Rendered for unmatched URLs and for `notFound()` in a route segment.
 *
 * `not-found.tsx` is not a page, so it cannot export `metadata`; it inherits the
 * root layout's site-wide defaults. That is the point of keeping the canonical
 * out of the root layout — this response carries no `<link rel="canonical">`
 * pointing at the homepage, so Google does not file stale URLs under
 * "Alternate page with proper canonical tag".
 */
export default function NotFound() {
  return <>
    <Navbar />
    <main className="bg-sky-glow pt-28">
      <div className="mx-auto max-w-3xl px-5 pb-28 text-center lg:px-8">
        <p className="font-mono text-sm font-bold uppercase tracking-[.2em] text-primary">404</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">This page could not be found<Hindi>यह पेज नहीं मिला</Hindi></h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">The link may be old or mistyped. Here is everything Arbaz works on in Manimajra and Chandigarh:</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">{s.name}</Link></li>)}
        </ul>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center justify-center rounded-full border-2 border-primary/25 bg-white px-5 py-3 text-sm font-bold transition hover:border-primary hover:text-primary">Go to Home</Link>
          <Link href="/services" className="inline-flex items-center justify-center rounded-full border-2 border-primary/25 bg-white px-5 py-3 text-sm font-bold transition hover:border-primary hover:text-primary">All Services</Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
}
