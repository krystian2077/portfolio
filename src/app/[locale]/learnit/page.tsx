import type { Metadata } from 'next'
import { LearnItPage } from '@/components/learnit/LearnItPage'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return <LearnItPage locale={locale} />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'en'
      ? 'LearnIT Python + Django + AI Path'
      : 'LearnIT Python + Django + AI - zakres nauki'

  const description =
    locale === 'en'
      ? 'Full backend learning path covering Python, Django, DRF, FastAPI, SQL, Docker, CI/CD, AWS basics and AI-assisted workflow, reinforced with practical exercises and project work.'
      : 'Pełna ścieżka backendowa LearnIT: Python, Django, DRF, FastAPI, SQL, Docker, CI/CD, podstawy AWS i AI-assisted workflow, wzmocniona zadaniami praktycznymi i pracą projektową.'

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${siteUrl}/${l}/learnit`])
  ) as Record<string, string>

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/learnit`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/learnit`,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
    },
    twitter: {
      title,
      description,
    },
  }
}
