import { AboutSection, FeaturedProjectsSection, HeroSection, TrustBarSection } from '@/components/sections'
import { Section } from '@/components/ui'

type AnchorItem = { id: 'stack' | 'experience' | 'contact'; title: string; body: string }

function AnchorPlaceholder({ id, title, body }: AnchorItem) {
  return (
    <Section id={id} className="py-12 sm:py-16">
      <div className="rounded-xl border border-(--border) bg-(--bg-card)/40 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-(--text-primary) sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-(--text-secondary) sm:text-base">{body}</p>
      </div>
    </Section>
  )
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const anchors: AnchorItem[] =
    locale === 'en'
      ? [
          {
            id: 'stack',
            title: 'Tech Stack',
            body: 'Backend, frontend, testing, and DevOps capabilities will be listed here.',
          },
          {
            id: 'experience',
            title: 'Experience',
            body: 'Timeline with education, courses, and work experience will appear here.',
          },
          {
            id: 'contact',
            title: 'Contact',
            body: 'Contact form and direct links will be added here.',
          },
        ]
      : [
          {
            id: 'stack',
            title: 'Stack',
            body: 'Tutaj bedzie pelna mapa technologii backend, frontend, testy i DevOps.',
          },
          {
            id: 'experience',
            title: 'Doswiadczenie',
            body: 'W tej sekcji pojawi sie timeline edukacji, kursow i pracy zawodowej.',
          },
          {
            id: 'contact',
            title: 'Kontakt',
            body: 'Tutaj dodam formularz kontaktowy oraz bezposrednie linki.',
          },
        ]

  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <FeaturedProjectsSection />
      {anchors.map((anchor) => (
        <AnchorPlaceholder key={anchor.id} id={anchor.id} title={anchor.title} body={anchor.body} />
      ))}
    </>
  )
}
