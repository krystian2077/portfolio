import {
  AboutSection,
  AiWorkflowSection,
  BooksSection,
  FeaturedProjectsSection,
  HeroSection,
  ProofOfWorkSection,
  TechStackSection,
  TimelineSection,
  TrustBarSection,
  ContactSection,
} from '@/components/sections'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const title = 'Krystian Potaczek — Junior Python / Django Developer'

  const description =
    locale === 'en'
      ? 'Portfolio of a Junior Python/Django developer. Full-stack projects with Django REST Framework, PostgreSQL/PostGIS, Next.js, Celery, WebSockets and AI. Real business apps with live demos.'
      : 'Portfolio Junior Python/Django Developera. Projekty full-stack z Django REST Framework, PostgreSQL, PostGIS, Next.js, Celery, WebSocket i AI. Realne aplikacje biznesowe z live demo.'

  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${siteUrl}/${l}`])) as Record<string, string>

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ProofOfWorkSection />
      <TechStackSection />
      <TimelineSection />
      <BooksSection />
      <AiWorkflowSection />
      <ContactSection />
    </>
  )
}
