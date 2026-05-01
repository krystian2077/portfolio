'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { BriefcaseBusiness, FolderGit2, IdCard } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Card, Section } from '@/components/ui'
import { cn } from '@/lib/utils'

const ContactSchema = z.object({
  name: z.string().min(1, 'required'),
  email: z.string().email('invalid_email'),
  company: z.string().optional(),
  message: z.string().min(10, 'min_message'),
  hp: z.string().optional(),
})

type ContactForm = z.infer<typeof ContactSchema>

const SIDEBAR_LINKS = [
  {
    icon: FolderGit2,
    href: 'https://github.com/krystian2077',
    labelKey: 'connectGithub' as const,
  },
  {
    icon: IdCard,
    href: 'https://linkedin.com/in/krystianpotaczek',
    labelKey: 'connectLinkedin' as const,
  },
] as const

export function ContactSection() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) })

  async function onSubmit(data: ContactForm) {
    if (data.hp) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" className="border-t border-(--border) py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <p className="font-dm-mono text-xs uppercase tracking-[0.2em] text-(--accent-cyan)">{t('eyebrow')}</p>
          <h2 className="text-3xl font-semibold leading-tight text-(--text-primary) md:text-4xl">{t('title')}</h2>
          <p className="max-w-2xl text-base text-(--text-secondary)">{t('subtitle')}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:gap-14">
          <Card padding="lg" className="space-y-6">
            <p className="text-sm leading-relaxed text-(--text-secondary)">{t('description')}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <input type="text" {...register('hp')} className="hidden" tabIndex={-1} autoComplete="off" />

              <label className="flex flex-col gap-1">
                <span className="text-sm text-(--text-secondary)">{t('name')}</span>
                <input
                  {...register('name')}
                  className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2.5 text-(--text-primary) outline-none ring-(--accent-cyan)/0 transition-[box-shadow] focus:ring-2 focus:ring-(--accent-cyan)/35"
                  autoComplete="name"
                />
                {errors.name && <span className="text-xs text-rose-400">{t(errors.name.message as string)}</span>}
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-sm text-(--text-secondary)">{t('email')}</span>
                <input
                  {...register('email')}
                  type="email"
                  className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2.5 text-(--text-primary) outline-none ring-(--accent-cyan)/0 transition-[box-shadow] focus:ring-2 focus:ring-(--accent-cyan)/35"
                  autoComplete="email"
                />
                {errors.email && <span className="text-xs text-rose-400">{t(errors.email.message as string)}</span>}
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-sm text-(--text-secondary)">{t('company')}</span>
                <input
                  {...register('company')}
                  className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2.5 text-(--text-primary) outline-none ring-(--accent-cyan)/0 transition-[box-shadow] focus:ring-2 focus:ring-(--accent-cyan)/35"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-sm text-(--text-secondary)">{t('message')}</span>
                <textarea
                  {...register('message')}
                  rows={6}
                  className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2.5 text-(--text-primary) outline-none ring-(--accent-cyan)/0 transition-[box-shadow] focus:ring-2 focus:ring-(--accent-cyan)/35"
                />
                {errors.message && (
                  <span className="text-xs text-rose-400">{t(errors.message.message as string)}</span>
                )}
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'inline-flex items-center')}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('sending') : t('send')}
                </button>
                {status === 'success' && <span className="text-sm text-emerald-400">{t('success')}</span>}
                {status === 'error' && <span className="text-sm text-rose-400">{t('error')}</span>}
              </div>
            </form>
          </Card>

          <aside className="flex flex-col gap-6">
            <Card
              padding="md"
              className="space-y-4 border border-(--accent-cyan)/15 bg-(--bg-card) [--card-shine:rgba(34,211,238,0.04)] shadow-[inset_0_1px_0_0_var(--card-shine)]"
            >
              <div className="flex items-start gap-3 rounded-lg border border-emerald-400/25 bg-emerald-400/5 px-3 py-3">
                <BriefcaseBusiness className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden />
                <p className="text-sm leading-relaxed text-(--text-secondary)">{t('openBadge')}</p>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent-cyan)">
                  {t('sidebarTitle')}
                </h3>
                <p className="text-sm leading-relaxed text-(--text-muted)">{t('sidebarIntro')}</p>
              </div>

              <div className="space-y-2">
                {SIDEBAR_LINKS.map(({ href, icon: Icon, labelKey }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'secondary', size: 'md' }),
                      'flex w-full items-center justify-between gap-2',
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon size={18} aria-hidden />
                      {t(labelKey)}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            <Card padding="md" className="space-y-2 border border-dashed border-(--border-hover) bg-(--bg-card)/80">
              <p className="text-sm font-medium text-(--text-primary)">{t('cvLabel')}</p>
              <p className="text-xs leading-relaxed text-(--text-muted)">{t('cvHint')}</p>
            </Card>
          </aside>
        </div>
      </div>
    </Section>
  )
}
