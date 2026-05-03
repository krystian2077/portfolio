import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050D12',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
          border: '4px solid rgba(34,211,238,0.4)',
        }}
      >
        <span
          style={{
            color: '#22D3EE',
            fontSize: '72px',
            fontWeight: 700,
            fontFamily: 'monospace',
            letterSpacing: '-2px',
          }}
        >
          KP
        </span>
      </div>
    ),
    { ...size }
  )
}
