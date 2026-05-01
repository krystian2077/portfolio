import {
  AboutSection,
  FeaturedProjectsSection,
  HeroSection,
  ProofOfWorkSection,
  TimelineSection,
  TrustBarSection,
  ContactSection,
} from '@/components/sections'
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  // locale is available for future dynamic content if needed

  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ProofOfWorkSection />
      <TimelineSection />
      <ContactSection />
    </>
  )
}
