'use client'

import { useTranslations } from 'next-intl'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'

export default function ProkomCaseStudy() {
  const t = useTranslations('projects.prokom')

  return (
    <Section id="projects-prokom" className="py-20">
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">{t('hero.badge')}</p>
          <h1 className="text-3xl font-semibold text-(--text-primary) md:text-4xl">{t('hero.title')}</h1>
          <p className="max-w-3xl text-base text-(--text-secondary)">{t('hero.subtitle')}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={t('hero.links.live')}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: 'primary', size: 'md' }))}
            >
              {t('hero.cta.live')}
            </a>
            <a
              href={t('hero.links.github')}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: 'secondary', size: 'md' }))}
            >
              {t('hero.cta.github')}
            </a>
          </div>
        </div>

        <Card padding="md">
          <h3 className="mb-3 text-lg font-semibold text-(--text-primary)">{t('metrics.title')}</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-dm-mono rounded-md border border-(--border) bg-(--bg-card) px-2.5 py-1 text-xs text-(--text-secondary)"
              >
                {t(`metrics.items.${i}`)}
              </span>
            ))}
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card padding="lg">
            <h3 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('problem.title')}</h3>
            <p className="text-sm text-(--text-secondary)">{t('problem.body')}</p>
          </Card>

          <Card padding="lg">
            <h3 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('myRole.title')}</h3>
            <ul className="space-y-2 text-sm text-(--text-secondary)">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>• {t(`myRole.items.${i}`)}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card padding="md">
          <h3 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('architecture.title')}</h3>
          <p className="mb-4 text-sm text-(--text-secondary)">{t('architecture.body')}</p>
          <pre className="overflow-x-auto rounded-lg border border-(--border) bg-(--bg-primary) p-4 text-xs text-(--text-secondary)">
{`Browser -> Next.js frontend
  -> Django REST API
  -> PostgreSQL + Redis
  -> Celery worker/beat
  -> Nginx reverse proxy`}
          </pre>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card padding="md">
            <h4 className="mb-2 text-sm font-semibold text-(--text-primary)">{t('features.title')}</h4>
            <ul className="space-y-2 text-sm text-(--text-secondary)">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>• {t(`features.items.${i}`)}</li>
              ))}
            </ul>
          </Card>

          <Card padding="md">
            <h4 className="mb-2 text-sm font-semibold text-(--text-primary)">{t('stackRationale.title')}</h4>
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg border border-(--border) bg-(--bg-card) p-3">
                  <p className="font-dm-mono text-xs text-(--accent-cyan)">
                    {t(`stackRationale.items.${i}.tech`)}
                  </p>
                  <p className="mt-1 text-sm text-(--text-secondary)">{t(`stackRationale.items.${i}.why`)}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card padding="md">
          <h4 className="mb-3 text-sm font-semibold text-(--text-primary)">{t('challenges.title')}</h4>
          <div className="grid gap-3 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-(--border) bg-(--bg-card) p-3">
                <p className="font-semibold text-(--text-primary)">{t('challenges.problemLabel')}</p>
                <p className="mt-1 text-sm text-(--text-secondary)">{t(`challenges.items.${i}.problem`)}</p>
                <p className="mt-3 font-semibold text-(--text-primary)">{t('challenges.solutionLabel')}</p>
                <p className="mt-1 text-sm text-(--text-secondary)">{t(`challenges.items.${i}.solution`)}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="md">
          <h4 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('screens.title')}</h4>
          <p className="mb-4 text-sm text-(--text-secondary)">{t('screens.placeholder')}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex min-h-28 items-center justify-center rounded-lg border border-dashed border-(--border-hover) bg-(--bg-card) p-3 text-center text-xs text-(--text-muted)"
              >
                {t(`screens.items.${i}`)}
              </div>
            ))}
          </div>
        </Card>

        <Card padding="md">
          <h4 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('whatILearned.title')}</h4>
          <p className="text-sm text-(--text-secondary)">{t('whatILearned.body')}</p>
        </Card>

        <Card padding="md" className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-(--text-primary)">{t('next.title')}</h4>
            <p className="text-sm text-(--text-secondary)">{t('next.body')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={t('hero.links.live')} target="_blank" rel="noreferrer">
              <Button>{t('hero.cta.live')}</Button>
            </a>
            <a href={t('hero.links.github')} target="_blank" rel="noreferrer">
              <Button variant="secondary">{t('hero.cta.github')}</Button>
            </a>
          </div>
        </Card>
      </div>
    </Section>
  )
}

