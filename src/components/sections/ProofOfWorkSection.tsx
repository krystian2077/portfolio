import { useTranslations } from 'next-intl'
import { Card, Section } from '@/components/ui'

type ItemKey =
  | 'djangoDrf'
  | 'postgis'
  | 'celeryRedis'
  | 'channelsWebsocket'
  | 'jwtGoogle'
  | 'dockerCompose'
  | 'nextAppRouter'
  | 'testing'
  | 'aiIntegration'
  | 'swagger'

const ITEM_KEYS: ItemKey[] = [
  'djangoDrf',
  'postgis',
  'celeryRedis',
  'channelsWebsocket',
  'jwtGoogle',
  'dockerCompose',
  'nextAppRouter',
  'testing',
  'aiIntegration',
  'swagger',
]

export function ProofOfWorkSection() {
  const t = useTranslations('proofOfWork')

  return (
    <Section id="stack" className="py-20">
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
          {ITEM_KEYS.map((key) => (
            <Card key={key} padding="md" className="h-full">
              <h3 className="mb-2 text-base font-semibold text-(--text-primary)">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-(--text-secondary)">
                {t(`items.${key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

