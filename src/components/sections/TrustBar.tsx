'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'

const ITEMS = [
  { emoji: '🚀', text: '2 projekty z live demo' },
  { emoji: '⚙️', text: 'Django / DRF / PostgreSQL' },
  { emoji: '🧠', text: '600h+ Python + Django + AI' },
  { emoji: '🤖', text: 'AI-assisted workflow' },
  { emoji: '💼', text: '2,5 roku w środowisku IT' },
]

const ITEMS_EN = [
  { emoji: '🚀', text: '2 projects with live demos' },
  { emoji: '⚙️', text: 'Django / DRF / PostgreSQL' },
  { emoji: '🧠', text: '600h+ Python + Django + AI' },
  { emoji: '🤖', text: 'AI-assisted workflow' },
  { emoji: '💼', text: '2.5 years in an IT environment' },
]

const Separator = () => (
  <div className="hidden w-px flex-shrink-0 bg-[rgba(34,211,238,0.15)] md:block" style={{ height: '24px' }} />
)

export function TrustBar() {
  const locale = useLocale()
  const items = locale === 'en' ? ITEMS_EN : ITEMS

  return (
    <section className="w-full border-t border-b border-[rgba(34,211,238,0.08)] bg-[#081420] py-6 sm:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Desktop: flex row with separators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="hidden items-center justify-center md:flex"
        >
          {items.map((item, index) => (
            <div key={item.text} className="flex items-center">
              <div className="flex items-center gap-2.5 px-8 py-2">
                <span className="text-xl">{item.emoji}</span>
                <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[#C8E0EC]">
                  {item.text}
                </span>
              </div>
              {index < items.length - 1 && <Separator />}
            </div>
          ))}
        </motion.div>

        {/* Mobile: centered responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto grid max-w-sm grid-cols-1 gap-3 sm:max-w-2xl sm:grid-cols-2 md:hidden"
        >
          {items.map((item, index) => (
            <div
              key={item.text}
              className={`flex min-w-0 items-center justify-center gap-2.5 rounded-lg border border-[rgba(34,211,238,0.12)] bg-[rgba(5,13,18,0.35)] px-4 py-3 text-center ${
                index === items.length - 1 ? 'sm:col-span-2' : ''
              }`}
            >
              <span className="shrink-0 text-lg leading-none">{item.emoji}</span>
              <span className="min-w-0 text-sm font-semibold leading-5 tracking-wide text-[#C8E0EC]">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
