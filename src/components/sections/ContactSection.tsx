'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const ContactSchema = z.object({
  name: z.string().min(1, 'required'),
  email: z.string().email('invalid_email'),
  company: z.string().optional(),
  message: z.string().min(10, 'min_message'),
  hp: z.string().optional(),
})

type ContactForm = z.infer<typeof ContactSchema>

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
    // honeypot
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
    <section id="contact">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-(--text-primary)">{t('title')}</h2>
        <p className="mb-6 text-(--text-secondary)">{t('description')}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <input type="text" {...register('hp')} className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-(--text-secondary)">{t('name')}</span>
            <input
              {...register('name')}
              className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2 text-(--text-primary)"
            />
            {errors.name && <span className="mt-1 text-xs text-rose-400">{t(errors.name.message as string)}</span>}
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-(--text-secondary)">{t('email')}</span>
            <input
              {...register('email')}
              className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2 text-(--text-primary)"
            />
            {errors.email && <span className="mt-1 text-xs text-rose-400">{t(errors.email.message as string)}</span>}
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-(--text-secondary)">{t('company')}</span>
            <input {...register('company')} className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2 text-(--text-primary)" />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-(--text-secondary)">{t('message')}</span>
            <textarea
              {...register('message')}
              rows={5}
              className="rounded-lg border border-(--border) bg-(--bg-card) px-3 py-2 text-(--text-primary)"
            />
            {errors.message && <span className="mt-1 text-xs text-rose-400">{t(errors.message.message as string)}</span>}
          </label>

          <div className="flex items-center gap-3 pt-2">
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
      </div>
    </section>
  )
}

