import { ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { Card, Section } from '@/components/ui'
import { buttonVariants } from '@/components/ui/Button'

type ExternalButtonProps = {
  href?: string
  label: string
}

function ExternalButton({ href, label }: ExternalButtonProps) {
  if (!href) {
    return (
      <span
        className="inline-flex h-10 items-center justify-center rounded-lg border border-(--border) px-4 text-sm text-(--text-muted)"
        aria-disabled
      >
        {label}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: 'secondary', size: 'md' }))}
    >
      {label}
      <ExternalLink size={14} />
    </a>
  )
}

function TechPill({ children }: { children: string }) {
  return (
    <span className="font-dm-mono rounded-md border border-(--border) bg-(--bg-card) px-2.5 py-1 text-[11px] text-(--text-secondary)">
      {children}
    </span>
  )
}

export function FeaturedProjectsSection() {
  const t = useTranslations('projects')

  const staymapStack = [
    'Django 5',
    'DRF',
    'PostGIS',
    'Redis',
    'Celery',
    'Channels',
    'Next.js 14',
    'WebSocket',
    'OpenAI',
  ]

  const prokomStack = [
    'Django 5.1',
    'DRF',
    'PostgreSQL',
    'Celery',
    'Redis',
    'Next.js 14',
    'Docker',
    'Nginx',
  ]

  const portfolioStack = [
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS v4',
    'Framer Motion',
    'next-intl',
    'Vercel',
  ]

  return (
    <Section id="projects" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">{t('eyebrow')}</p>
          <h2 className="text-3xl font-semibold leading-tight text-(--text-primary) md:text-4xl">{t('title')}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card padding="lg" className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-(--border) bg-(--bg-accent-deep) px-2.5 py-1 text-xs font-semibold text-(--accent-cyan)">
                {t('staymap.badge')}
              </span>
              <h3 className="text-2xl font-semibold text-(--text-primary)">{t('staymap.title')}</h3>
              <p className="text-sm leading-relaxed text-(--text-secondary) md:text-base">{t('staymap.description')}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {staymapStack.map((tag) => (
                <TechPill key={tag}>{tag}</TechPill>
              ))}
            </div>

            <p className="font-dm-mono text-xs text-(--text-muted)">{t('staymap.stats')}</p>

            <div className="flex flex-wrap gap-3">
              <ExternalButton href="https://staymap-polska.vercel.app/" label={t('actions.liveDemo')} />
              <ExternalButton href="https://github.com/krystian2077/staymap-polska" label={t('actions.github')} />
              <Link href="/projects/staymap-polska" className={cn(buttonVariants({ variant: 'ghost', size: 'md' }))}>
                {t('actions.caseStudy')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </Card>

          <Card padding="lg" className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-(--border) bg-(--bg-accent-deep) px-2.5 py-1 text-xs font-semibold text-(--accent-cyan)">
                {t('prokom.badge')}
              </span>
              <h3 className="text-2xl font-semibold text-(--text-primary)">{t('prokom.title')}</h3>
              <p className="text-sm leading-relaxed text-(--text-secondary) md:text-base">{t('prokom.description')}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {prokomStack.map((tag) => (
                <TechPill key={tag}>{tag}</TechPill>
              ))}
            </div>

            <p className="font-dm-mono text-xs text-(--text-muted)">{t('prokom.stats')}</p>

            <div className="flex flex-wrap gap-3">
              <ExternalButton label={t('prokom.livePending')} />
              <ExternalButton href="https://github.com/krystian2077/prokom-system" label={t('actions.github')} />
              <Link href="/projects/prokom-system" className={cn(buttonVariants({ variant: 'ghost', size: 'md' }))}>
                {t('actions.caseStudy')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </Card>
        </div>

        <Card padding="md" className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-(--text-primary)">{t('portfolio.title')}</h3>
              <p className="max-w-2xl text-sm text-(--text-secondary)">{t('portfolio.description')}</p>
            </div>
            <a
              href="https://github.com/krystian2077"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
            >
              <FolderGit2 size={14} />
              {t('portfolio.cta')}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolioStack.map((tag) => (
              <TechPill key={tag}>{tag}</TechPill>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  )
}


