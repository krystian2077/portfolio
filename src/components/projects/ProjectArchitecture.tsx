'use client'

import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Layers,
  Lock,
  Radio,
  Server,
  Shield,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import type { ArchitectureIcon, ProjectArchitectureContent } from '@/content/projectArchitecture'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: EASE, delay },
  }
}

const ICONS: Record<ArchitectureIcon, LucideIcon> = {
  client: Smartphone,
  frontend: Layers,
  api: Server,
  realtime: Radio,
  data: Database,
  async: Cpu,
  users: Globe2,
  backend: Server,
  modules: Boxes,
  security: Shield,
}

type ProjectArchitectureProps = {
  content: ProjectArchitectureContent
  technicalDiagram?: string
  labels?: {
    heading: string
    decisionHeading: string
    technicalDiagram: string
  }
}

export function ProjectArchitecture({ content, technicalDiagram, labels }: ProjectArchitectureProps) {
  const text = {
    heading: labels?.heading ?? 'Architektura systemu',
    decisionHeading: labels?.decisionHeading ?? 'Dlaczego taka architektura?',
    technicalDiagram: labels?.technicalDiagram ?? 'Pokaż techniczny diagram ASCII',
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-8">
          <p
            className="mb-2 text-xs tracking-widest text-[#22D3EE] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            DESIGN
          </p>
          <h2
            className="text-2xl font-bold text-[#F0F9FF] sm:text-3xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {text.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#7EA8BD]">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.08)}
          className="relative overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.14)] bg-[#07131D] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-5"
        >
          <div className="pointer-events-none absolute inset-x-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-[rgba(34,211,238,0.28)] to-transparent xl:block" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.layers.map((layer, index) => {
              const Icon = ICONS[layer.icon]
              const isLast = index === content.layers.length - 1

              return (
                <div key={layer.name} className="relative">
                  <div className="group relative h-full overflow-hidden rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.32)] hover:bg-[#0A1B29] hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(34,211,238,0.18)] bg-[rgba(34,211,238,0.08)] text-[#22D3EE] transition-colors group-hover:border-[rgba(34,211,238,0.34)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className="text-[10px] tracking-widest text-[#3A5F73] uppercase"
                        style={{ fontFamily: 'var(--font-dm-mono)' }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-2 text-base font-semibold text-[#F0F9FF]">{layer.name}</h3>
                    <p className="mb-4 min-h-14 text-sm leading-relaxed text-[#7EA8BD]">
                      {layer.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {layer.elements.map((element) => (
                        <span
                          key={element}
                          className="rounded-full border border-[rgba(34,211,238,0.12)] bg-[rgba(34,211,238,0.06)] px-2.5 py-1 text-[11px] leading-none text-[#A8DCEC]"
                          style={{ fontFamily: 'var(--font-dm-mono)' }}
                        >
                          {element}
                        </span>
                      ))}
                    </div>
                  </div>

                  {!isLast && (
                    <>
                      <div className="absolute top-1/2 -right-3 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(34,211,238,0.18)] bg-[#07131D] text-[#22D3EE] xl:flex">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex justify-center py-1 text-[#22D3EE] md:hidden">
                        <ArrowDown className="h-4 w-4" />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.16)} className="mt-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(34,211,238,0.16)] bg-[rgba(34,211,238,0.07)] text-[#22D3EE]">
              <GitBranch className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-semibold text-[#F0F9FF]">{text.decisionHeading}</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.decisions.map((decision, index) => (
              <div
                key={decision.title}
                className="rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-5 transition duration-300 hover:border-[rgba(34,211,238,0.26)] hover:bg-[#0A1B29]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(34,211,238,0.14)] bg-[rgba(34,211,238,0.07)] text-[#22D3EE]">
                    {index % 2 === 0 ? (
                      <Lock className="h-4 w-4" />
                    ) : (
                      <GitBranch className="h-4 w-4" />
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-[#F0F9FF]">{decision.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">{decision.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {technicalDiagram ? (
          <motion.details
            {...fadeUp(0.2)}
            className="mt-6 rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-4 text-sm text-[#7EA8BD] open:border-[rgba(34,211,238,0.2)]"
          >
            <summary
              className="cursor-pointer text-xs tracking-widest text-[#22D3EE] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              {text.technicalDiagram}
            </summary>
            <pre
              className="mt-4 overflow-x-auto text-xs leading-relaxed text-[#22D3EE]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              {technicalDiagram}
            </pre>
          </motion.details>
        ) : null}
      </div>
    </section>
  )
}
