import StaymapCaseStudy from '@/components/projects/StaymapCaseStudy'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export default function Page() {
  return <StaymapCaseStudy />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const title = 'StayMap Polska — Case Study'
  const description =
    locale === 'en'
      ? 'Production map-first accommodation marketplace in Poland: PostGIS discovery, dynamic pricing, Polish AI search, realtime chat, host panel, and moderation.'
      : 'Produkcyjna platforma marketplace noclegow w Polsce: odkrywanie na mapie (PostGIS), dynamic pricing, AI search po polsku, realtime chat, panel hosta i moderacja.'

  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${siteUrl}/${l}/projects/staymap-polska`])) as Record<
    string,
    string
  >

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/projects/staymap-polska`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/projects/staymap-polska`,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
    },
    twitter: {
      title,
      description,
    },
  }
}

