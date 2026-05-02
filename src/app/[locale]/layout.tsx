import type { Metadata } from 'next'
import { Sora, DM_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '../globals.css'

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

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sora.variable} ${dmMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
