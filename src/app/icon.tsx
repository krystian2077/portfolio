import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050d12',
          color: '#22d3ee',
          fontSize: 18,
          fontWeight: 900,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
          borderRadius: 8,
          border: '1px solid rgba(34,211,238,0.35)',
        }}
      >
        KP
      </div>
    ),
    {
      ...size,
    },
  )
}
