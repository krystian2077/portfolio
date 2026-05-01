'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const badgeItem = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in srgb, var(--accent-cyan) 12%, transparent), transparent)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center"
      >
        {/* Available badge */}
        <motion.div variants={badgeItem}>
          <Badge variant="available">{t('badge')}</Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sora)' }}
        >
          {t('headline1')}{' '}
          <span style={{ color: 'var(--accent-cyan)' }}>{t('headlineAccent')}</span>
          <br />
          {t('headline2')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="max-w-xl text-base sm:text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <Link href="#contact" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
            {t('cta.primary')}
          </Link>
          <Link
            href="#projects"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
          >
            {t('cta.secondary')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-1"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-xs tracking-widest uppercase">{t('scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
