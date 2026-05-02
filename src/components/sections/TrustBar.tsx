'use client'

import { motion } from 'framer-motion'
import { Rocket, BookOpen, GraduationCap, Bot, Briefcase } from 'lucide-react'

const ITEMS = [
  { icon: Rocket, text: '2 projekty z live demo' },
  { icon: BookOpen, text: '7 książek technicznych' },
  { icon: GraduationCap, text: 'Python+Django+AI (600h+)' },
  { icon: Bot, text: 'Ready4AI — LLM & Agents' },
  { icon: Briefcase, text: '2,5 roku w środowisku IT' },
]

export function TrustBar() {
  return (
    <section className="border-t border-b border-[rgba(34,211,238,0.08)] bg-[#081420] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 items-center gap-4 xl:flex xl:justify-between"
        >
          {ITEMS.map((item, index) => {
            const Icon = item.icon
            const isLast = index === ITEMS.length - 1
            return (
              <div
                key={item.text}
                className={`flex items-center gap-2 ${
                  isLast ? 'col-span-2 justify-center xl:col-span-1 xl:justify-start' : ''
                }`}
              >
                <Icon className="h-4 w-4 shrink-0 text-[#22D3EE]" />
                <span
                  className="whitespace-nowrap text-xs text-[#7EA8BD]"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  {item.text}
                </span>
                {!isLast && (
                  <span className="ml-4 hidden h-4 border-r border-[rgba(34,211,238,0.1)] xl:block" />
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
