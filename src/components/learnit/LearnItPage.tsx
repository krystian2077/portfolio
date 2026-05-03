'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BookOpen,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Server,
  Sparkles,
  Terminal,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { learnItContent, type LearnItModule, type LocaleCode } from '@/content/learnit'

const moduleIcons: LucideIcon[] = [Terminal, GitBranch, Database, Globe2, Server, Layers3, Zap, Cloud]
const summaryIcons: LucideIcon[] = [Server, Database, Network, Code2, Boxes, Bot]
const metricIcons: LucideIcon[] = [Layers3, BookOpen, Terminal, Code2]

interface LearnItPageProps {
  locale: string
}

function getContent(locale: string) {
  return learnItContent[(locale === 'en' ? 'en' : 'pl') satisfies LocaleCode]
}

function splitMetric(metric: string) {
  const [value, ...rest] = metric.split(' ')

  if (value === 'praktyczne' || value === 'practical') {
    return {
      value: value === 'praktyczne' ? 'Praktyka' : 'Practice',
      label: metric,
    }
  }

  return {
    value,
    label: rest.join(' '),
  }
}

function MetricCard({ label, index }: { label: string; index: number }) {
  const Icon = metricIcons[index] ?? Terminal
  const metric = splitMetric(label)

  return (
    <div className="group relative min-h-[102px] min-w-0 overflow-hidden rounded-xl border border-[rgba(34,211,238,0.12)] bg-[rgba(8,20,32,0.82)] p-4 transition-colors hover:border-[rgba(34,211,238,0.3)] hover:bg-[#0C2030]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.6),transparent)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(34,211,238,0.18)] bg-[rgba(34,211,238,0.07)]">
          <Icon className="h-4 w-4 text-[#22D3EE]" />
        </div>
        <p className="font-sora break-words text-lg font-semibold leading-tight text-[#F0F9FF]">
          {metric.value}
        </p>
      </div>
      <p className="break-words text-xs leading-relaxed text-[#7EA8BD]">{metric.label}</p>
    </div>
  )
}

function ModuleCard({
  module,
  index,
  detailsLabel,
}: {
  module: LearnItModule
  index: number
  detailsLabel: string
}) {
  const Icon = moduleIcons[index] ?? Terminal
  const previewTopics = module.topics.slice(0, 4)

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.42, delay: Math.min(index * 0.04, 0.22) }}
      className="min-w-0 rounded-2xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5 transition-colors hover:border-[rgba(34,211,238,0.26)] sm:p-6"
    >
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(34,211,238,0.18)] bg-[rgba(34,211,238,0.06)]">
          <Icon className="h-5 w-5 text-[#22D3EE]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="font-dm-mono text-xs text-[#22D3EE]">#{module.number}</span>
          </div>
          <h3 className="font-sora text-lg font-semibold leading-snug text-[#F0F9FF]">
            {module.title}
          </h3>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-[#7EA8BD]">{module.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {module.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-md border border-[rgba(34,211,238,0.15)] bg-[#0C2030] px-2 py-1 font-dm-mono text-[11px] leading-relaxed text-[#7EA8BD]"
          >
            {chip}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {previewTopics.map((topic) => (
          <li key={topic} className="flex gap-2 text-sm leading-relaxed text-[#7EA8BD]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE]" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <details className="group mt-4">
        <summary className="inline-flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-[rgba(34,211,238,0.2)] px-3 py-2 font-dm-mono text-xs text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.06)]">
          {detailsLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
        </summary>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {module.topics.slice(4).map((topic) => (
            <li key={topic} className="flex gap-2 text-sm leading-relaxed text-[#7EA8BD]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(34,211,238,0.55)]" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </details>
    </motion.article>
  )
}

export function LearnItPage({ locale }: LearnItPageProps) {
  const content = getContent(locale)
  const page = content.page
  const heroHeadingLines = page.heroHeading.split('|')

  return (
    <div className="overflow-x-hidden bg-[#050D12]">
      <section className="relative border-b border-[rgba(34,211,238,0.08)] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-w-0 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.18)] bg-[rgba(34,211,238,0.06)] px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-[#22D3EE]" />
                <span className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                  {page.heroLabel}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-sora max-w-4xl break-words text-3xl font-semibold leading-tight text-[#F0F9FF] sm:text-5xl">
                  {heroHeadingLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-[#7EA8BD] sm:text-lg">
                  {page.heroDescription}
                </p>
                <p className="max-w-3xl text-base leading-relaxed text-[#7EA8BD]">
                  {page.heroSecondDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[rgba(34,211,238,0.25)] px-5 py-2.5 text-sm font-semibold text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {page.backToPortfolio}
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9]"
                >
                  {page.viewProjects}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="grid min-w-0 grid-cols-2 gap-3 max-[380px]:grid-cols-1"
            >
              {page.metrics.map((metric, index) => (
                <MetricCard key={metric} label={metric} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-3">
            <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
              {page.introLabel}
            </p>
            <h2 className="font-sora text-2xl font-semibold leading-tight text-[#F0F9FF] sm:text-3xl">
              {page.introHeading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#7EA8BD]">{page.introDescription}</p>
        </section>

        <section className="mt-16 space-y-8">
          <div className="space-y-3">
            <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
              {page.modulesLabel}
            </p>
            <h2 className="font-sora text-2xl font-semibold leading-tight text-[#F0F9FF] sm:text-3xl">
              {page.modulesHeading}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {content.modules.map((module, index) => (
              <ModuleCard
                key={module.number}
                module={module}
                index={index}
                detailsLabel={page.detailsLabel}
              />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="space-y-3">
            <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
              {page.summaryLabel}
            </p>
            <h2 className="font-sora text-2xl font-semibold leading-tight text-[#F0F9FF] sm:text-3xl">
              {page.summaryHeading}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.summary.map((item, index) => {
              const Icon = summaryIcons[index] ?? Code2

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5"
                >
                  <Icon className="mb-4 h-6 w-6 text-[#22D3EE]" />
                  <h3 className="font-sora mb-2 text-base font-semibold text-[#F0F9FF]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#7EA8BD]">{item.body}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[rgba(34,211,238,0.14)] bg-[linear-gradient(135deg,rgba(8,20,32,0.98),rgba(12,32,48,0.76))] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <h2 className="font-sora text-2xl font-semibold leading-tight text-[#F0F9FF]">
                {page.finalHeading}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-[#7EA8BD] sm:text-base">
                {page.finalDescription}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/#projects"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9]"
              >
                {page.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[rgba(34,211,238,0.25)] px-5 py-2.5 text-sm font-semibold text-[#22D3EE] transition-colors hover:bg-[rgba(34,211,238,0.08)]"
              >
                <ArrowLeft className="h-4 w-4" />
                {page.homeCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
