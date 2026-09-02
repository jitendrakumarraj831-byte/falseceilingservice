import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getService, services } from '@/lib/services'

export const alt = 'Service by Arbaz — False Ceiling & Interior Services, Chandigarh'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

function Brand() {
  return (
    <div style={{ position: 'absolute', top: 52, left: 64, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontSize: 28, fontWeight: 700 }}>F</div>
      <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>FALSE CEILING&nbsp;<span style={{ color: '#38bdf8' }}>SERVICE</span></div>
    </div>
  )
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  const size2 = { ...size }

  if (!service || service.photoCount === 0) {
    return new ImageResponse(
      (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: 'linear-gradient(135deg, #0284c7, #0a3a5c)' }}>
          <Brand />
          <div style={{ position: 'absolute', left: 64, right: 64, bottom: 64, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', fontSize: 28, color: '#bae6fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3 }}>Chandigarh</div>
            <div style={{ display: 'flex', fontSize: 66, fontWeight: 700, color: '#fff' }}>{service?.name ?? 'Our Services'}</div>
            <div style={{ display: 'flex', fontSize: 26, color: '#e0f2fe', maxWidth: 900 }}>{service?.descriptionEn ?? 'False ceiling and interior work in Manimajra, Chandigarh.'}</div>
          </div>
        </div>
      ),
      { ...size2 }
    )
  }

  const photoData = await readFile(join(process.cwd(), 'public/services', service.slug, '1.jpg'))
  const photoSrc = `data:image/jpeg;base64,${Buffer.from(photoData).toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#0b2338' }}>
        <img src={photoSrc} width={1200} height={630} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'linear-gradient(180deg, rgba(11,35,56,0.1) 0%, rgba(11,35,56,0.5) 55%, rgba(11,35,56,0.92) 100%)' }} />
        <Brand />
        <div style={{ position: 'absolute', left: 64, right: 64, bottom: 64, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', fontSize: 28, color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3 }}>Chandigarh</div>
          <div style={{ display: 'flex', fontSize: 66, fontWeight: 700, color: '#fff' }}>{service.name}</div>
          <div style={{ display: 'flex', fontSize: 26, color: '#bae6fd', maxWidth: 900 }}>{service.descriptionEn}</div>
        </div>
      </div>
    ),
    { ...size2 }
  )
}
