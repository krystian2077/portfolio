'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Maximize2, X } from 'lucide-react'
import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export type ScreenshotItem = {
  title: string
  desc: string
  src: string
  alt?: string
}

type ScreenshotLightboxGridLabels = {
  enlargeAria: string
  enlarge: string
  closeAria: string
  previewHeading: string
  note: string
}

type ScreenshotLightboxGridProps = {
  items: ScreenshotItem[]
  className?: string
  imageSizes?: string
  labels?: ScreenshotLightboxGridLabels
}

const DEFAULT_LABELS: ScreenshotLightboxGridLabels = {
  enlargeAria: 'Powiększ screenshot',
  enlarge: 'Powiększ',
  closeAria: 'Zamknij podgląd',
  previewHeading: 'Podgląd widoku',
  note: 'Widok zawiera dane testowe lub zanonimizowane. Publiczne logowanie do paneli pracownika i administratora nie jest udostępniane ze względów bezpieczeństwa.',
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: EASE, delay },
  }
}

export function ScreenshotLightboxGrid({
  items,
  className = 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
  imageSizes = '(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw',
  labels = DEFAULT_LABELS,
}: ScreenshotLightboxGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeItem = activeIndex === null ? null : items[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveIndex(null)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  return (
    <>
      <div className={className}>
        {items.map((screen, i) => (
          <motion.article
            key={screen.src}
            {...fadeUp(i * 0.04)}
            className="group overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.28)] hover:shadow-[0_18px_50px_rgba(34,211,238,0.08)]"
            style={{ backgroundColor: '#081420' }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D12]"
              aria-label={`${labels.enlargeAria}: ${screen.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(34,211,238,0.08)] bg-[#050D12]">
                <Image
                  src={screen.src}
                  alt={screen.alt ?? `PRO-KOM Serwis System - ${screen.title}`}
                  fill
                  sizes={imageSizes}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050D12]/45 via-transparent to-transparent opacity-80" />
                <div className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.28)] bg-[#050D12]/85 px-3 py-1.5 text-xs font-medium text-[#22D3EE] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                  {labels.enlarge}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-semibold text-[#F0F9FF]">{screen.title}</h3>
                <p className="text-sm leading-relaxed text-[#7EA8BD]">{screen.desc}</p>
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#02070B]/90 p-3 backdrop-blur-sm sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="screenshot-lightbox-title"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-7xl overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.18)] bg-[#081420] shadow-[0_30px_120px_rgba(0,0,0,0.55)] lg:grid-cols-[minmax(0,1fr)_360px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute top-3 right-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(34,211,238,0.25)] bg-[#050D12]/90 text-[#F0F9FF] transition-colors hover:border-[rgba(34,211,238,0.55)] hover:text-[#22D3EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
              aria-label={labels.closeAria}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-[52vh] min-h-72 bg-[#050D12] sm:h-[64vh] lg:h-[86vh]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt ?? `PRO-KOM Serwis System - ${activeItem.title}`}
                fill
                sizes="(min-width: 1024px) calc(100vw - 430px), 100vw"
                className="object-contain"
                priority
              />
            </div>

            <aside className="max-h-[40vh] overflow-y-auto border-t border-[rgba(34,211,238,0.12)] p-5 sm:p-6 lg:max-h-[86vh] lg:border-t-0 lg:border-l">
              <p
                className="mb-3 text-xs tracking-widest text-[#22D3EE] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                {labels.previewHeading}
              </p>
              <h2 id="screenshot-lightbox-title" className="text-2xl font-bold text-[#F0F9FF]">
                {activeItem.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#7EA8BD]">{activeItem.desc}</p>
              <div className="mt-6 rounded-xl border border-[rgba(34,211,238,0.1)] bg-[#050D12] p-4">
                <p className="text-xs leading-relaxed text-[#7EA8BD]">{labels.note}</p>
              </div>
            </aside>
          </div>
        </div>
      ) : null}
    </>
  )
}
