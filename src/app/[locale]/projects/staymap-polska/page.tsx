import StaymapCaseStudy from '@/components/projects/StaymapCaseStudy'
import StaymapCaseStudyEn from '@/components/projects/StaymapCaseStudyEn'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return locale === 'en' ? <StaymapCaseStudyEn /> : <StaymapCaseStudy />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title = 'StayMap Polska — Case Study'
  const description =
    locale === 'en'
      ? 'Full-stack map-first accommodation booking platform in Poland: PostGIS discovery, dynamic pricing, Polish AI search, realtime chat, host panel, and moderation.'
      : 'Full-stackowa platforma rezerwacji noclegów w Polsce: odkrywanie na mapie (PostGIS), dynamic pricing, AI search po polsku, realtime chat, panel hosta i moderacja.'

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${siteUrl}/${l}/projects/staymap-polska`])
  ) as Record<string, string>

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
