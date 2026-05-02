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
    <section className="w-full border-t border-b border-[rgba(34,211,238,0.08)] bg-[#081420] py-6">
      <div className="mx-auto max-w-7xl px-6">
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

        {/* Mobile: 2-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 gap-4 md:hidden"
        >
          {items.map((item, index) => (
            <div
              key={item.text}
              className={`flex items-center gap-2.5 px-6 py-4 ${
                index === items.length - 1 ? 'col-span-2 justify-center' : ''
              }`}
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[#C8E0EC]">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
