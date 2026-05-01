import { useTranslations } from 'next-intl'
import { Card, Section } from '@/components/ui'

const POINT_KEYS = ['review', 'docs', 'debate', 'refactor', 'learning'] as const

export function AiWorkflowSection() {
  const t = useTranslations('aiWorkflow')

  return (
    <Section className="py-20">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-(--text-primary) md:text-4xl">
            {t('title')}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {POINT_KEYS.map((point) => (
            <Card key={point} padding="md" className="h-full">
              <p className="text-sm leading-relaxed text-(--text-secondary)">{t(`points.${point}`)}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
