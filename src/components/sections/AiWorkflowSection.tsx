'use client'

import { motion } from 'framer-motion'
import { FileText, GraduationCap, GitBranch, MessageSquare, RefreshCw } from 'lucide-react'

const AI_TOOLS = ['Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Ollama (local)'] as const

const APPLICATIONS = [
  {
    icon: GitBranch,
    title: 'Code Review przed commitem',
    description: 'Analizuję architekturę i potencjalne problemy zanim wypchnę kod.',
  },
  {
    icon: FileText,
    title: 'Dokumentacja techniczna',
    description: 'BRD, PRD, TSD — AI przyspiesza pisanie, ja weryfikuję każde zdanie.',
  },
  {
    icon: MessageSquare,
    title: 'Debatowanie decyzji',
    description: 'Dlaczego PostGIS a nie prosta kolumna? AI jako partner do dyskusji.',
  },
  {
    icon: RefreshCw,
    title: 'Refaktoring i optymalizacja',
    description: 'AI proponuje, ja decyduję. Zawsze rozumiem co i dlaczego.',
  },
  {
    icon: GraduationCap,
    title: 'Nauka nowych technologii',
    description: 'AI jako mentor — tłumaczy koncepty, zadaje pytania, sprawdza rozumienie.',
  },
] as const

export function AiWorkflowSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-3"
        >
          <p className="font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            AI WORKFLOW
          </p>
          <h2 className="text-3xl font-semibold text-[#F0F9FF]">
            AI jako narzędzie, nie wyrocznia
          </h2>
          <p className="text-[#7EA8BD]">
            Używam AI świadomie — weryfikuję, rozumiem kod, biorę odpowiedzialność.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-6 text-base leading-relaxed text-[#7EA8BD]">
              Claude, ChatGPT, GitHub Copilot i Cursor to moje codzienne narzędzia pracy — tak
              samo jak terminal czy edytor kodu. Pomagają mi szybciej analizować problemy, pisać
              lepszy kod i uczyć się nowych technologii.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[#7EA8BD]">
              Ale każdy commit jest mój. Każdą decyzję techniczną rozumiem i potrafię uzasadnić
              bez pomocy AI. To jest dla mnie granica między narzędziem a protezą.
            </p>

            <blockquote className="my-6 border-l-4 border-[#22D3EE] pl-4">
              <p className="text-lg font-medium italic text-[#F0F9FF]">
                &quot;Weryfikuję każdy wynik, rozumiem kod, biorę pełną odpowiedzialność.&quot;
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-2">
              {AI_TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[rgba(34,211,238,0.2)] bg-[#0C2030] px-3 py-1 font-dm-mono text-xs text-[#22D3EE]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {APPLICATIONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#081420] p-4"
              >
                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F0F9FF]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#7EA8BD]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
