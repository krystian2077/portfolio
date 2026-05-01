'use client'

import { useTranslations } from 'next-intl'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui'
// Image not currently used; keep for future screenshots

export default function StaymapCaseStudy() {
  const t = useTranslations('projects.staymap')

  return (
    <Section id="projects-staymap" className="py-20">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">{t('hero.badge')}</p>
          <h1 className="text-3xl font-semibold text-(--text-primary) md:text-4xl">{t('hero.title')}</h1>
          <p className="max-w-3xl text-base text-(--text-secondary)">{t('hero.subtitle')}</p>

          <div className="mt-4 flex gap-3">
            <a
              href={t('hero.links.live')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-(--accent-cyan) px-4 py-2 text-sm font-semibold text-(--bg-primary) hover:bg-(--accent-cyan-light)"
            >
              {t('hero.cta.live')}
            </a>
            <a
              href={t('hero.links.github')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-(--border) px-4 py-2 text-sm text-(--text-primary)"
            >
              {t('hero.cta.github')}
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card padding="lg">
            <h3 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('problem.title')}</h3>
            <p className="text-sm text-(--text-secondary)">{t('problem.body')}</p>
          </Card>

          <Card padding="lg">
            <h3 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('role.title')}</h3>
            <p className="text-sm text-(--text-secondary)">{t('role.body')}</p>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card padding="md">
            <h4 className="mb-2 text-sm font-semibold text-(--text-primary)">{t('architecture.title')}</h4>
            <p className="text-sm text-(--text-secondary)">{t('architecture.body')}</p>
          </Card>

          <Card padding="md">
            <h4 className="mb-2 text-sm font-semibold text-(--text-primary)">{t('features.title')}</h4>
            <ul className="space-y-2 text-sm text-(--text-secondary)">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>• {t(`features.items.${i}`)}</li>
              ))}
            </ul>
          </Card>

          <Card padding="md">
            <h4 className="mb-2 text-sm font-semibold text-(--text-primary)">{t('challenges.title')}</h4>
            <ul className="space-y-2 text-sm text-(--text-secondary)">
              {Array.from({ length: 3 }).map((_, i) => (
                <li key={i}>• {t(`challenges.items.${i}`)}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card padding="md">
          <h4 className="mb-2 text-lg font-semibold text-(--text-primary)">{t('whatILearned.title')}</h4>
          <p className="text-sm text-(--text-secondary)">{t('whatILearned.body')}</p>
        </Card>

        <Card padding="md" className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-(--text-primary)">{t('next.title')}</h4>
            <p className="text-sm text-(--text-secondary)">{t('next.body')}</p>
          </div>
          <div className="flex gap-3">
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

