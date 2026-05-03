'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, BookOpen, Code2, Server, Terminal } from 'lucide-react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { learnItContent, type LocaleCode } from '@/content/learnit'
import { Section } from '@/components/ui'

const icons = [BookOpen, Terminal, Server, Bot]

function splitStat(stat: string) {
  const [value, ...rest] = stat.split(' ')

  if (value === 'Backend,') {
    return { value: 'Backend', label: rest.join(' ') }
  }

  if (value === 'Backend') {
    return { value, label: rest.join(' ') }
  }

  if (value === 'Python') {
    return { value: 'Python', label: stat.replace('Python · ', '') }
  }

  return {
    value,
    label: rest.join(' '),
  }
}

function getLocaleContent(locale: string) {
  return learnItContent[(locale === 'en' ? 'en' : 'pl') satisfies LocaleCode]
}

export function LearnItSection() {
  const locale = useLocale()
  const content = getLocaleContent(locale).home

  return (
    <Section id="learnit" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.14)] bg-[linear-gradient(135deg,rgba(8,20,32,0.98),rgba(12,32,48,0.76))] shadow-[0_0_40px_rgba(34,211,238,0.04)]"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:p-10">
          <div className="min-w-0 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.18)] bg-[rgba(34,211,238,0.06)] px-3 py-1">
              <Code2 className="h-3.5 w-3.5 text-[#22D3EE]" />
              <span className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
                {content.label}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-sora text-2xl font-semibold leading-tight text-[#F0F9FF] sm:text-3xl">
                {content.heading}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-[#7EA8BD] sm:text-base">
                {content.description}
              </p>
              <p className="max-w-3xl text-sm leading-relaxed text-[#7EA8BD] sm:text-base">
                {content.secondDescription}
              </p>
            </div>

            <Link
              href="/learnit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#050D12] transition hover:bg-[#67E8F9] active:scale-[0.98]"
            >
              {content.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 max-[380px]:grid-cols-1">
            {content.stats.map((stat, index) => {
              const Icon = icons[index] ?? Terminal
              const { value, label } = splitStat(stat)

              return (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group relative min-h-[118px] min-w-0 overflow-hidden rounded-xl border border-[rgba(34,211,238,0.12)] bg-[rgba(8,20,32,0.82)] p-4 transition-colors hover:border-[rgba(34,211,238,0.3)] hover:bg-[#0C2030]"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.6),transparent)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(34,211,238,0.18)] bg-[rgba(34,211,238,0.07)]">
                    <Icon className="h-[18px] w-[18px] text-[#22D3EE]" />
                  </div>
                  <p className="font-sora break-words text-lg font-semibold leading-tight text-[#F0F9FF]">
                    {value}
                  </p>
                  <p className="mt-1 break-words text-xs leading-relaxed text-[#7EA8BD]">
                    {label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
