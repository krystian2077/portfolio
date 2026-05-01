import { useTranslations } from 'next-intl'
import { Section } from '@/components/ui/Section'

export function TrustBarSection() {
  const t = useTranslations('trustBar')

  const facts = [t('fact1'), t('fact2'), t('fact3'), t('fact4'), t('fact5')]

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-card)]/40 py-6">
      <Section as="div">
        <ul className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 xl:grid-cols-5">
          {facts.map((fact) => (
            <li
              key={fact}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text-secondary)]"
            >
              {fact}
            </li>
          ))}
        </ul>
      </Section>
    </section>
  )
}

