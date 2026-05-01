import { ImageResponse } from 'next/og'
import { siteUrl } from '@/lib/site'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OG() {
  let hostLabel = 'portfolio'

  try {
    hostLabel = new URL(siteUrl).host || hostLabel
  } catch {
    // ignore malformed URL in unusual env setups
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          backgroundColor: '#050d12',
          backgroundImage: 'radial-gradient(1200px 600px at 20% -10%, rgba(34,211,238,0.25), transparent)',
          color: '#f0f9ff',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              padding: '10px 14px',
              borderRadius: 12,
              border: '1px solid rgba(34,211,238,0.35)',
              color: '#22d3ee',
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            KP
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Krystian Potaczek
            </div>
            <div style={{ fontSize: 22, color: 'rgba(240,249,255,0.72)', lineHeight: 1.2 }}>
              Junior Python / Django Developer
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Backend-focused • Full-stack aware • AI-assisted workflow
          </div>
          <div style={{ fontSize: 26, color: 'rgba(240,249,255,0.72)', lineHeight: 1.35, maxWidth: 980 }}>
            Django • DRF • PostgreSQL • PostGIS • Celery • WebSockets • Next.js • Docker
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontSize: 20, color: 'rgba(240,249,255,0.55)' }}>
            github.com/krystian2077 • Production-grade projects + live demos
          </div>
          <div style={{ fontSize: 20, color: 'rgba(34,211,238,0.85)', fontVariantNumeric: 'tabular-nums' }}>{hostLabel}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
