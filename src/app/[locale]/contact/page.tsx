import { ContactSection } from '@/components/sections'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title = locale === 'pl' ? 'Kontakt — Krystian Potaczek' : 'Contact — Krystian Potaczek'

  const description =
    locale === 'pl'
      ? 'Wyślij wiadomość do Junior Python / Django Developera — odpowiedź konkretnym następnym krokiem.'
      : 'Reach out to a Junior Python / Django Developer — pragmatic replies with clear next steps.'

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${siteUrl}/${l}/contact`]),
  ) as Record<string, string>

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/contact`,
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
    },
    twitter: { title, description },
  }
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-10" aria-hidden />
      <ContactSection />
    </>
  )
}
