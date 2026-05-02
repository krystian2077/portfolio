'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lightbulb, Bot } from 'lucide-react'

const STATS = [
  { value: '2', label: 'projekty produkcyjne z live demo' },
  { value: '12+', label: 'technologii w aktywnym użyciu' },
  { value: '600h+', label: 'nauki Python, Django i AI' },
  { value: '2,5 roku', label: 'doświadczenia w środowisku IT' },
]

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#050D12' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-12 space-y-3"
        >
          <p
            className="text-xs uppercase tracking-widest text-[#22D3EE]"
            style={{ fontFamily: 'var(--font-dm-mono)' }}
          >
            O MNIE
          </p>
          <h2
            className="text-3xl font-bold leading-tight text-[#F0F9FF] md:text-4xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Od technikum do produkcyjnych aplikacji Django
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">

          {/* Left column — personal story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[rgba(34,211,238,0.3)] flex-shrink-0">
                <Image
                  src="/images/krystian-potaczek.jpg"
                  alt="Krystian Potaczek"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F0F9FF]">
                  Krystian Potaczek
                </div>
                <div className="text-xs text-[#7EA8BD] font-['DM_Mono']">
                  Junior Python / Django Developer
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed text-[#7EA8BD]">
              Nie trafiłem do programowania przypadkowo. Interesuje mnie od technikum — zacząłem od
              podstaw sieci i sprzętu, potem coraz głębiej w kod. Przez ponad 2 lata pracowałem w PRO-KOM
              i miałem kontakt z realnym klientem, realnym problemem i realnym procesem biznesowym.
              Dlatego gdy buduję aplikacje, patrzę nie tylko na kod, ale też na to, czy system rozwiązuje
              prawdziwy problem.
            </p>

            {/* Filozofia developera */}
            <div className="rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 shrink-0 text-[#22D3EE]" />
                <span className="text-sm font-semibold text-[#F0F9FF]">Filozofia developera</span>
              </div>
              <p className="text-sm leading-relaxed text-[#7EA8BD]">
                Nie zaczynam od frameworka. Najpierw rozumiem problem, użytkownika i proces.
                Dopiero potem dobieram technologię i projektuję architekturę.
              </p>
            </div>

            {/* AI Workflow */}
            <div className="rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5">
              <div className="mb-2 flex items-center gap-2">
                <Bot className="h-5 w-5 shrink-0 text-[#22D3EE]" />
                <span className="text-sm font-semibold text-[#F0F9FF]">AI-assisted workflow</span>
              </div>
              <p className="text-sm leading-relaxed text-[#7EA8BD]">
                Używam Claude, ChatGPT i Copilota świadomie — jako narzędzia, nie wyrocznie.
                Weryfikuję każdy wynik, rozumiem kod, biorę pełną odpowiedzialność za to co dostarczam.
              </p>
            </div>
          </motion.div>

          {/* Right column — 2×2 stats grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 content-start gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.value}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-[rgba(34,211,238,0.12)] bg-[#081420] p-5 hover:border-[rgba(34,211,238,0.25)] transition-colors cursor-default"
              >
                <p
                  className="mb-1 text-4xl font-bold text-[#22D3EE]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-[#7EA8BD]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
