import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Arbaz — False Ceiling & Interior Services, Manimajra, Chandigarh'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const photoData = await readFile(join(process.cwd(), 'public/services/gypsum-false-ceiling/1.jpg'))
  const photoSrc = `data:image/jpeg;base64,${Buffer.from(photoData).toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#0b2338' }}>
        <img src={photoSrc} width={1200} height={630} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'linear-gradient(180deg, rgba(11,35,56,0.15) 0%, rgba(11,35,56,0.55) 55%, rgba(11,35,56,0.92) 100%)' }} />
        <div style={{ position: 'absolute', top: 52, left: 64, display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontSize: 32, fontWeight: 700 }}>F</div>
          <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>FALSE CEILING&nbsp;<span style={{ color: '#38bdf8' }}>SERVICE</span></div>
        </div>
        <div style={{ position: 'absolute', left: 64, right: 64, bottom: 56, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', fontSize: 58, fontWeight: 700, color: '#fff', lineHeight: 1.08, maxWidth: 1000 }}>False Ceiling &amp; Interior Contractor in Chandigarh</div>
          <div style={{ display: 'flex', fontSize: 27, color: '#bae6fd', fontWeight: 600 }}>Gypsum · PVC · Grid Ceiling · Wall Partition — Manimajra, Chandigarh</div>
          <div style={{ display: 'flex', fontSize: 24, color: '#ffffff' }}>Call / WhatsApp: +91 72589 51213 — Free Photo Estimate</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
