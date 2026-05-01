import { useTranslations } from 'next-intl'
import { Card, Section } from '@/components/ui'

const GROUP_KEYS = [
  'backend',
  'database',
  'frontend',
  'devops',
  'authSecurity',
  'testing',
  'aiTools',
  'devTools',
] as const

const GROUP_ITEMS: Record<(typeof GROUP_KEYS)[number], string[]> = {
  backend: ['python', 'django', 'drf', 'fastapi', 'flask', 'geodjango', 'celery', 'sqlalchemy'],
  database: ['postgres', 'redis', 'alembic'],
  frontend: ['next', 'react', 'typescript', 'tailwind', 'framer'],
  devops: ['docker', 'nginx', 'ghactions', 'aws', 'vercel', 'render'],
  authSecurity: ['jwt', 'googleOAuth', 'csrf', 'rateLimiting', 'tls'],
  testing: ['pytest', 'playwright', 'coverage', 'faker'],
  aiTools: ['openai', 'langchain', 'ollama', 'mcp', 'prompt'],
  devTools: ['git', 'cursor', 'claude', 'copilot', 'postman', 'swagger'],
}

export function TechStackSection() {
  const t = useTranslations('techStack')

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

        <div className="grid gap-4 lg:grid-cols-2">
          {GROUP_KEYS.map((groupKey) => (
            <Card key={groupKey} padding="md" className="space-y-4">
              <h3 className="text-base font-semibold text-(--text-primary)">
                {t(`groups.${groupKey}.title`)}
              </h3>

              <div className="flex flex-wrap gap-2">
                {GROUP_ITEMS[groupKey].map((itemKey) => (
                  <div key={itemKey} className="group relative">
                    <span className="font-dm-mono inline-flex cursor-default rounded-md border border-(--border) bg-(--bg-card) px-2.5 py-1 text-[11px] text-(--text-secondary) transition-colors group-hover:border-(--border-hover) group-hover:text-(--text-primary)">
                      {t(`groups.${groupKey}.items.${itemKey}.label`)}
                    </span>
                    <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-64 -translate-x-1/2 rounded-lg border border-(--border-hover) bg-(--bg-primary) px-3 py-2 text-xs text-(--text-secondary) shadow-lg group-hover:block">
                      <span className="font-semibold text-(--text-primary)">{t('usedIn')}:</span>{' '}
                      {t(`groups.${groupKey}.items.${itemKey}.usedIn`)}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
