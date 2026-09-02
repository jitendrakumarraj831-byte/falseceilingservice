import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getService, services } from '@/lib/services'

export const alt = 'False Ceiling Designer, Manimajra, Chandigarh'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

function Backdrop() {
  return (
    <>
      <div style={{ position: 'absolute', top: -140, right: -120, width: 560, height: 560, borderRadius: '50%', background: 'rgba(56,189,248,0.30)' }} />
      <div style={{ position: 'absolute', bottom: -160, left: -100, width: 520, height: 520, borderRadius: '50%', background: 'rgba(2,132,199,0.16)' }} />
    </>
  )
}

function Brand() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontSize: 26, fontWeight: 700 }}>F</div>
      <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: '#0b2338', letterSpacing: 1 }}>FALSE CEILING&nbsp;<span style={{ color: '#0284c7' }}>SERVICE</span></div>
    </div>
  )
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  const name = service?.name ?? 'Our Services'
  const desc = service?.descriptionEn ?? 'False ceiling and interior work in Manimajra, Chandigarh.'

  const textBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', width: 620 }}>
      <Brand />
      <div style={{ display: 'flex', marginTop: 34, alignItems: 'center', padding: '9px 20px', borderRadius: 999, border: '2px solid rgba(2,132,199,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: 19, fontWeight: 700, color: '#0284c7', letterSpacing: 2, textTransform: 'uppercase' }}>Manimajra, Chandigarh</div>
      <div style={{ display: 'flex', marginTop: 22, fontSize: 20, fontWeight: 700, color: '#38bdf8', letterSpacing: 2, textTransform: 'uppercase' }}>False Ceiling Designer</div>
      <div style={{ display: 'flex', marginTop: 12, fontSize: 60, fontWeight: 700, color: '#0b2338', lineHeight: 1.08 }}>{name}</div>
      <div style={{ display: 'flex', marginTop: 18, fontSize: 24, color: '#4c6b85', maxWidth: 600 }}>{desc}</div>
      <div style={{ display: 'flex', marginTop: 32, alignItems: 'center', padding: '15px 30px', borderRadius: 999, background: 'linear-gradient(90deg, #0284c7, #38bdf8)', color: '#fff', fontSize: 27, fontWeight: 700 }}>+91 72589 51213</div>
    </div>
  )

  if (!service || service.photoCount === 0) {
    return new ImageResponse(
      (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#ffffff', padding: '56px 64px', alignItems: 'center' }}>
          <Backdrop />
          <div style={{ position: 'relative', display: 'flex' }}>{textBlock}</div>
        </div>
      ),
      { ...size }
    )
  }

  const photoData = await readFile(join(process.cwd(), 'public/services', service.slug, '1.jpg'))
  const photoSrc = `data:image/jpeg;base64,${Buffer.from(photoData).toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#ffffff' }}>
        <Backdrop />
        <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%', padding: '56px 64px', alignItems: 'center', justifyContent: 'space-between' }}>
          {textBlock}
          <div style={{ display: 'flex', width: 430, height: 500, borderRadius: 44, overflow: 'hidden', border: '1px solid rgba(186,230,253,0.9)', boxShadow: '0 30px 60px -20px rgba(2,132,199,0.35)' }}>
            <img src={photoSrc} width={430} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
