import ProkomCaseStudy from '@/components/projects/ProkomCaseStudy'
import ProkomCaseStudyEn from '@/components/projects/ProkomCaseStudyEn'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return locale === 'en' ? <ProkomCaseStudyEn /> : <ProkomCaseStudy />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const title = 'PRO-KOM Serwis System — Case Study'
  const description =
    locale === 'en'
      ? 'Advanced electronics repair management system with client/staff/admin panels, Kanban workflow, Celery automation, RBAC, audit log, and secure deployment with Docker, Nginx and TLS. Live demo: prokomserwis.pl.'
      : 'Zaawansowany system zarzadzania naprawami elektroniki: panele klienta/pracownika/admina, Kanban, automatyzacja Celery, RBAC, audit log oraz wdrozenie produkcyjne (Docker + Nginx + TLS). Live demo: prokomserwis.pl.'

  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${siteUrl}/${l}/projects/prokom-system`])) as Record<
    string,
    string
  >

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/projects/prokom-system`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/projects/prokom-system`,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
    },
    twitter: {
      title,
      description,
    },
  }
}

