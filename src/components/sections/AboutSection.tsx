import { useTranslations } from 'next-intl'
import { Card, Section } from '@/components/ui'

export function AboutSection() {
  const t = useTranslations('about')

  return (
    <Section id="about" className="py-20">
      <div className="mx-auto grid max-w-5xl gap-8">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[var(--text-primary)] md:text-4xl">
            {t('title')}
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            {t('intro')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="h-full" padding="lg">
            <h3 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">{t('philosophy.title')}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              {t('philosophy.body')}
            </p>
          </Card>

          <Card className="h-full" padding="lg">
            <h3 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">{t('ai.title')}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              {t('ai.body')}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}

