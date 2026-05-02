'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Download, FolderGit2, IdCard, Loader2, Mail } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Min. 2 znaki'),
  email: z.string().email('Nieprawidłowy email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Min. 10 znaków'),
  hp: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const CONTACT_LINKS = [
  {
    icon: FolderGit2,
    label: 'GitHub',
    value: 'github.com/krystian2077',
    href: 'https://github.com/krystian2077',
    external: true,
    highlight: false,
  },
  {
    icon: IdCard,
    label: 'LinkedIn',
    value: 'linkedin.com/in/krystian-potaczek',
    href: 'https://www.linkedin.com/in/krystian-potaczek-952968257/',
    external: true,
    highlight: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kontakt wkrótce',
    href: '#',
    external: false,
    highlight: false,
  },
  {
    icon: Download,
    label: 'Curriculum Vitae',
    value: 'Pobierz PDF',
    href: '#',
    external: false,
    highlight: true,
  },
] as const

const inputClass =
  'w-full rounded-lg border border-[rgba(34,211,238,0.15)] bg-[#081420] px-4 py-3 text-sm text-[#F0F9FF] placeholder-[#3A5F73] outline-none transition focus:border-[rgba(34,211,238,0.5)] focus:ring-1 focus:ring-[rgba(34,211,238,0.2)]'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
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

  const submitLabel =
    status === 'sending' ? null
    : status === 'success' ? '✓ Wiadomość wysłana!'
    : status === 'error' ? 'Błąd wysyłania — spróbuj ponownie'
    : 'Wyślij wiadomość →'

  const submitBg =
    status === 'success' ? 'bg-green-400'
    : status === 'error' ? 'bg-red-400'
    : 'bg-[#22D3EE] hover:bg-[#67E8F9]'

  return (
    <section id="contact" className="border-t border-[rgba(34,211,238,0.08)] py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Centered header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-3 font-dm-mono text-xs uppercase tracking-widest text-[#22D3EE]">
            KONTAKT
          </p>
          <h2 className="mb-3 text-4xl font-semibold text-[#F0F9FF]">
            Szukasz juniora który dowiezie projekt?
          </h2>
          <p className="mb-4 text-xl font-medium text-[#22D3EE]">Porozmawiajmy.</p>
          <p className="mb-6 max-w-lg text-[#7EA8BD]">
            Otwarty na propozycje: Junior Python / Django Developer, remote lub hybrid. Odpowiem w
            ciągu 24 godzin.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.1)] px-4 py-2 font-dm-mono text-sm text-[#4ADE80]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
            </span>
            Open to work
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">

          {/* Left: Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot */}
            <input
              type="text"
              {...register('hp')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">Imię i nazwisko *</label>
              <input
                {...register('name')}
                placeholder="Jan Kowalski"
                className={inputClass}
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">Email *</label>
              <input
                {...register('email')}
                type="email"
                placeholder="jan@firma.pl"
                className={inputClass}
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">Firma</label>
              <input
                {...register('company')}
                placeholder="Nazwa firmy (opcjonalne)"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">Wiadomość *</label>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Cześć, chciałbym..."
                className={inputClass}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full rounded-lg py-3 font-semibold text-[#050D12] transition disabled:opacity-70 ${submitBg}`}
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wysyłanie...
                </span>
              ) : (
                submitLabel
              )}
            </button>
          </form>

          {/* Right: Contact info */}
          <aside>
            <h3 className="mb-4 text-sm font-semibold text-[#F0F9FF]">Szybki kontakt</h3>

            <div className="space-y-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-3 rounded-xl border p-4 transition hover:border-[rgba(34,211,238,0.25)] ${
                    link.highlight
                      ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.08)]'
                      : 'border-[rgba(34,211,238,0.1)] bg-[#081420]'
                  }`}
                >
                  <link.icon className="h-4 w-4 shrink-0 text-[#22D3EE]" />
                  <div>
                    <p className="text-xs text-[#7EA8BD]">{link.label}</p>
                    <p className="text-sm text-[#F0F9FF]">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-[rgba(74,222,128,0.15)] bg-[#081420] p-4">
              <p className="text-sm leading-relaxed text-[#7EA8BD]">
                🟢 Dostępny do pracy
                <br />
                Remote lub hybrid · Polska
                <br />
                Odpowiem w ciągu 24h
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
