import { useTranslations } from 'next-intl'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const ITEM_KEYS = [
  'student',
  'learnit',
  'ready4ai',
  'projects',
  'prokomJob',
  'technikum',
] as const

export function TimelineSection() {
  const t = useTranslations('timeline')

  return (
    <Section id="experience" className="py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">{t('eyebrow')}</p>
          <h2 className="text-3xl font-semibold leading-tight text-(--text-primary) md:text-4xl">{t('title')}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid gap-4">
          {ITEM_KEYS.map((key) => (
            <Card key={key} padding="md" className="flex items-start gap-4">
              <div className="w-28 text-sm font-mono text-(--text-muted)">{t(`items.${key}.date`)}</div>
              <div>
                <h3 className="text-lg font-semibold text-(--text-primary)">{t(`items.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-(--text-secondary)">{t(`items.${key}.body`)}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

