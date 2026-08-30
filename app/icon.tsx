import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 20 }}>
        F
      </div>
    ),
    { ...size }
  )
}
