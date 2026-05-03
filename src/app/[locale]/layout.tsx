import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://krystianpotaczek.pl'),
  title: {
    default: 'Krystian Potaczek — Junior Python / Django Developer',
    template: '%s | Krystian Potaczek',
  },
  description:
    'Portfolio Junior Python/Django Developera. Projekty full-stack z Django REST Framework, PostgreSQL, PostGIS, Next.js, Celery, WebSocket i AI. Realne aplikacje biznesowe z live demo.',
  keywords: [
    'Junior Python Developer',
    'Django Developer',
    'Python Django',
    'Django REST Framework',
    'backend developer polska',
    'junior developer portfolio',
    'Krystian Potaczek',
  ],
  authors: [{ name: 'Krystian Potaczek' }],
  creator: 'Krystian Potaczek',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://krystianpotaczek.pl',
    title: 'Krystian Potaczek — Junior Python / Django Developer',
    description: 'Portfolio Junior Python/Django Developera z realnymi projektami i live demo.',
    siteName: 'Krystian Potaczek Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Krystian Potaczek — Junior Python / Django Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krystian Potaczek — Junior Python / Django Developer',
    description: 'Portfolio Junior Python/Django Developera z realnymi projektami.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const messages = await getMessages()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
