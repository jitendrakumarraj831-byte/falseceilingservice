import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Arbaz — False Ceiling Designer, Manimajra, Chandigarh'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const photoData = await readFile(join(process.cwd(), 'public/services/gypsum-false-ceiling/1.jpg'))
  const photoSrc = `data:image/jpeg;base64,${Buffer.from(photoData).toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#ffffff' }}>
        <div style={{ position: 'absolute', top: -140, right: -120, width: 560, height: 560, borderRadius: '50%', background: 'rgba(56,189,248,0.30)' }} />
        <div style={{ position: 'absolute', bottom: -160, left: -100, width: 520, height: 520, borderRadius: '50%', background: 'rgba(2,132,199,0.16)' }} />

        <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%', padding: '56px 64px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: 620 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontSize: 26, fontWeight: 700 }}>F</div>
              <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: '#0b2338', letterSpacing: 1 }}>FALSE CEILING&nbsp;<span style={{ color: '#0284c7' }}>SERVICE</span></div>
            </div>

            <div style={{ display: 'flex', marginTop: 34, alignItems: 'center', padding: '9px 20px', borderRadius: 999, border: '2px solid rgba(2,132,199,0.25)', background: 'rgba(255,255,255,0.7)', fontSize: 19, fontWeight: 700, color: '#0284c7', letterSpacing: 2, textTransform: 'uppercase' }}>Manimajra, Chandigarh</div>

            <div style={{ display: 'flex', marginTop: 26, fontSize: 66, fontWeight: 700, color: '#0b2338', lineHeight: 1.08 }}>False Ceiling Designer</div>

            <div style={{ display: 'flex', marginTop: 18, fontSize: 25, color: '#4c6b85', fontWeight: 400 }}>Gypsum · PVC · Grid Ceiling · Wall Partition</div>

            <div style={{ display: 'flex', marginTop: 36, alignItems: 'center', padding: '15px 30px', borderRadius: 999, background: 'linear-gradient(90deg, #0284c7, #38bdf8)', color: '#fff', fontSize: 27, fontWeight: 700 }}>+91 72589 51213</div>
          </div>

          <div style={{ display: 'flex', width: 430, height: 500, borderRadius: 44, overflow: 'hidden', border: '1px solid rgba(186,230,253,0.9)', boxShadow: '0 30px 60px -20px rgba(2,132,199,0.35)' }}>
            <img src={photoSrc} width={430} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
