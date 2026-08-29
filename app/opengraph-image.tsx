import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'False Ceiling Contractor in Chandigarh | Arbaz'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#f8f7f3',
          color: '#242521',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#b87333',
          }}
        >
          Manimajra, Chandigarh
        </p>
        <p
          style={{
            margin: '28px 0 0',
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            fontFamily: 'Georgia, serif',
            maxWidth: 980,
          }}
        >
          False Ceiling Contractor in Chandigarh
        </p>
        <p style={{ margin: '28px 0 0', fontSize: 32, color: '#6b6d65', maxWidth: 900 }}>
          Gypsum False Ceiling, PVC Ceiling, WPC Wall Paneling &amp; Wall Partition Services
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 56 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 28,
              background: '#b87333',
              color: '#fffaf4',
              fontSize: 22,
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
              marginRight: 20,
            }}
          >
            FC
          </div>
          <p style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>
            FALSE CEILING <span style={{ color: '#b87333' }}>SERVICE</span>
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
