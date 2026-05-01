import type { Metadata, Viewport } from 'next'
import { siteUrl } from '@/lib/site'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050d12' },
    { media: '(prefers-color-scheme: light)', color: '#f0f9ff' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Krystian Potaczek — Portfolio',
  title: {
    default: 'Krystian Potaczek — Junior Python / Django Developer',
    template: '%s — Krystian Potaczek',
  },
  description:
    'Portfolio Junior Python/Django Developera. Projekty full-stack z Django REST Framework, PostgreSQL, PostGIS, Next.js, Celery, WebSocket i AI. Realne aplikacje biznesowe z live demo.',
  openGraph: {
    type: 'website',
    siteName: 'Krystian Potaczek Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krystian Potaczek — Junior Python / Django Developer',
    description:
      'Backend-focused developer building production web apps with Django, PostgreSQL/PostGIS, Next.js and AI-assisted workflow.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
