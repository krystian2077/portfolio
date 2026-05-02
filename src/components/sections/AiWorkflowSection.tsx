'use client'

import { motion } from 'framer-motion'
import { FileText, GraduationCap, GitBranch, MessageSquare, RefreshCw } from 'lucide-react'
import { useLocale } from 'next-intl'

const AI_TOOLS = ['Claude', 'ChatGPT', 'Codex', 'GitHub Copilot', 'Cursor'] as const

const applicationsEn = [
  {
    icon: GitBranch,
    title: 'Code Review before commit',
    description:
      'I analyze changes, architecture, edge cases and potential problems before pushing code.',
  },
  {
    icon: FileText,
    title: 'Technical documentation',
    description:
      'AI helps me prepare BRD, PRD, SDD and TSD faster - I verify the structure, meaning and every key assumption.',
  },
  {
    icon: MessageSquare,
    title: 'Technical decision analysis',
    description:
      'I compare approaches, trade-offs and consequences - for example, when to use PostGIS and when a simpler data model is enough.',
  },
  {
    icon: RefreshCw,
    title: 'Refactoring and optimization',
    description:
      'AI helps identify possible improvements, but I make the final decision after checking the impact on readability, architecture and application behavior.',
  },
  {
    icon: GraduationCap,
    title: 'Learning new technologies',
    description:
      'I use AI as a mentor: asking for explanations, examples, practice questions and comparisons with technologies I already know.',
  },
] as const

const applicationsPl = [
  {
    icon: GitBranch,
    title: 'Code Review przed commitem',
    description:
      'Analizuję zmiany, architekturę, edge case’y i potencjalne problemy zanim wypchnę kod.',
  },
  {
    icon: FileText,
    title: 'Dokumentacja techniczna',
    description:
      'AI pomaga mi szybciej przygotować BRD, PRD, SDD i TSD - ja weryfikuję strukturę, sens i każde kluczowe założenie.',
  },
  {
    icon: MessageSquare,
    title: 'Analiza decyzji technicznych',
    description:
      'Porównuję podejścia, trade-offy i konsekwencje rozwiązań - np. kiedy użyć PostGIS, a kiedy wystarczy prostszy model danych.',
  },
  {
    icon: RefreshCw,
    title: 'Refaktoring i optymalizacja',
    description:
      'AI pomaga znaleźć możliwe usprawnienia, ale decyzję podejmuję ja - po sprawdzeniu wpływu na czytelność, architekturę i działanie aplikacji.',
  },
  {
    icon: GraduationCap,
    title: 'Nauka nowych technologii',
    description:
      'Wykorzystuję AI jako mentora: proszę o wyjaśnienia, przykłady, pytania kontrolne i porównania z technologiami, które już znam.',
  },
] as const

export function AiWorkflowSection() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const applications = isEn ? applicationsEn : applicationsPl

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
          <p className="font-dm-mono text-xs tracking-widest text-[#22D3EE] uppercase">
            AI WORKFLOW
          </p>
          <h2 className="text-3xl font-semibold text-[#F0F9FF]">
            {isEn ? 'AI as a tool, not an oracle' : 'AI jako narzędzie, nie wyrocznia'}
          </h2>
          <p className="text-[#7EA8BD]">
            {isEn
              ? 'I use AI consciously - I verify results, understand the code and take responsibility for technical decisions.'
              : 'Używam AI świadomie - weryfikuję wyniki, rozumiem kod i biorę odpowiedzialność za decyzje.'}
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-6 text-base leading-relaxed text-[#7EA8BD]">
              {isEn
                ? 'Claude, ChatGPT, GitHub Copilot, Codex and Cursor are part of my daily workflow - just like the terminal, documentation and code editor. They help me analyze problems faster, explore solutions, write better documentation, debug and learn new technologies.'
                : 'Claude, ChatGPT, GitHub Copilot, Codex i Cursor są częścią mojego codziennego workflow - podobnie jak terminal, dokumentacja czy edytor kodu. Pomagają mi szybciej analizować problemy, szukać rozwiązań, pisać lepszą dokumentację, debugować i uczyć się nowych technologii.'}
            </p>
            <p className="mb-6 text-base leading-relaxed text-[#7EA8BD]">
              {isEn
                ? 'I do not treat AI as a shortcut or a replacement for thinking. I want to understand and justify every technical decision myself. For me, this is the line between a responsible workflow and blindly generated code.'
                : 'Nie traktuję AI jako skrótu ani zamiennika myślenia. Każdą decyzję techniczną chcę rozumieć i potrafić uzasadnić samodzielnie. To dla mnie granica między odpowiedzialnym workflow a bezrefleksyjnym generowaniem kodu.'}
            </p>

            <blockquote className="my-6 border-l-4 border-[#22D3EE] pl-4">
              <p className="text-lg font-medium text-[#F0F9FF] italic">
                &quot;
                {isEn
                  ? 'I verify every result, understand the code and take full responsibility for what I deliver.'
                  : 'Weryfikuję każdy wynik, rozumiem kod i biorę pełną odpowiedzialność za to, co dostarczam.'}
                &quot;
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-2">
              {AI_TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="font-dm-mono rounded-full border border-[rgba(34,211,238,0.2)] bg-[#0C2030] px-3 py-1 text-xs text-[#22D3EE]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {applications.map((item, i) => (
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
