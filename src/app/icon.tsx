import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '8px',
          border: '1px solid rgba(34,211,238,0.4)',
        }}
      >
        <span
          style={{
            color: '#22D3EE',
            fontSize: '17px',
            fontWeight: 800,
            fontFamily: 'monospace',
            letterSpacing: '-1px',
          }}
        >
          KP
        </span>
      </div>
    ),
    { ...size }
  )
}
