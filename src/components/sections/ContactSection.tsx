'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Download, FolderGit2, IdCard, Loader2, Mail, MapPin } from 'lucide-react'
import { useLocale } from 'next-intl'

type FormValues = {
  name: string
  email: string
  company?: string
  subject?: string
  message: string
  hp?: string
}

const inputClass =
  'w-full rounded-lg border border-[rgba(34,211,238,0.15)] bg-[#081420] px-4 py-3 text-sm text-[#F0F9FF] placeholder-[#3A5F73] outline-none transition focus:border-[rgba(34,211,238,0.5)] focus:ring-1 focus:ring-[rgba(34,211,238,0.2)]'

export function ContactSection() {
  const locale = useLocale()
  const isEn = locale === 'en'
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const copy = isEn
    ? {
        minName: 'Min. 2 characters',
        invalidEmail: 'Please enter a valid email address',
        minMessage: 'Message must be at least 10 characters',
        sending: 'Sending...',
        sent: 'Message sent. Thank you!',
        error: 'Something went wrong. Please try again.',
        submit: 'Send message →',
        label: 'CONTACT',
        heading: "Let's talk about working together",
        subheading:
          'I am looking for a Junior Python / Django Developer, Junior Backend Developer, or Junior Full Stack Python Developer role with React / Next.js. I want to grow on real projects, learn from more experienced developers, and build applications that solve concrete business problems.',
        description:
          'I am open to remote, hybrid, or on-site work in Poland. I usually reply within 24 hours.',
        badge: 'Available for work',
        name: 'Full name *',
        namePlaceholder: 'John Smith',
        email: 'Email *',
        emailPlaceholder: 'john@company.com',
        company: 'Company',
        companyPlaceholder: 'Company name (optional)',
        subject: 'Subject',
        subjectPlaceholder: 'Junior Python Developer / collaboration / project question',
        message: 'Message *',
        messagePlaceholder: "Hi, I'd like to talk about...",
        legal:
          'By sending this message, you agree to be contacted back regarding your inquiry.',
        quick: 'Quick contact',
        cv: 'Download PDF',
        availability: 'Availability',
        availabilityValue: 'Remote / hybrid / Poland',
        response: 'I usually reply within 24h',
      }
    : {
        minName: 'Min. 2 znaki',
        invalidEmail: 'Nieprawidłowy email',
        minMessage: 'Min. 10 znaków',
        sending: 'Wysyłanie...',
        sent: '✓ Wiadomość wysłana!',
        error: 'Błąd wysyłania - spróbuj ponownie',
        submit: 'Wyślij wiadomość →',
        label: 'KONTAKT',
        heading: 'Porozmawiajmy o współpracy',
        subheading:
          'Chcę rozwijać się przy realnych projektach, uczyć się od bardziej doświadczonych osób i budować aplikacje, które rozwiązują konkretne problemy biznesowe.',
        description:
          'Jestem otwarty na pracę zdalną, hybrydową lub stacjonarną w Polsce. Odpowiadam zwykle w ciągu 24 godzin.',
        badge: 'Dostępny do pracy',
        name: 'Imię i nazwisko *',
        namePlaceholder: 'Jan Kowalski',
        email: 'Email *',
        emailPlaceholder: 'jan@firma.pl',
        company: 'Firma',
        companyPlaceholder: 'Nazwa firmy (opcjonalnie)',
        subject: 'Temat',
        subjectPlaceholder: 'Junior Python Developer / współpraca / pytanie o projekt',
        message: 'Wiadomość *',
        messagePlaceholder: 'Cześć, chciałbym porozmawiać o...',
        legal:
          'Wysyłając wiadomość, zgadzasz się na kontakt zwrotny w sprawie przesłanego zapytania.',
        quick: 'Szybki kontakt',
        cv: 'Pobierz PDF',
        availability: 'Dostępność',
        availabilityValue: 'Zdalnie / hybrydowo / Polska',
        response: 'Odpowiadam zwykle w ciągu 24h',
      }

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, copy.minName),
        email: z.string().email(copy.invalidEmail),
        company: z.string().optional(),
        subject: z.string().optional(),
        message: z.string().min(10, copy.minMessage),
        hp: z.string().optional(),
      }),
    [copy.invalidEmail, copy.minMessage, copy.minName],
  )

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krystianpotaczek.dev@gmail.com',
      href: 'mailto:krystianpotaczek.dev@gmail.com',
      external: false,
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
      icon: FolderGit2,
      label: 'GitHub',
      value: 'github.com/krystian2077',
      href: 'https://github.com/krystian2077',
      external: true,
      highlight: false,
    },
    {
      icon: Download,
      label: 'Curriculum Vitae',
      value: copy.cv,
      href: '/Krystian_Potaczek_CV.pdf',
      external: true,
      highlight: true,
    },
    {
      icon: MapPin,
      label: copy.availability,
      value: copy.availabilityValue,
      detail: copy.response,
      href: null,
      external: false,
      highlight: false,
    },
  ] as const

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
    status === 'sending'
      ? null
      : status === 'success'
        ? copy.sent
        : status === 'error'
          ? copy.error
          : copy.submit

  const submitBg =
    status === 'success'
      ? 'bg-green-400'
      : status === 'error'
        ? 'bg-red-400'
        : 'bg-[#22D3EE] hover:bg-[#67E8F9]'

  return (
    <section id="contact" className="border-t border-[rgba(34,211,238,0.08)] py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="font-dm-mono mb-3 text-xs tracking-widest text-[#22D3EE] uppercase">
            {copy.label}
          </p>
          <h2 className="mb-3 text-4xl font-semibold text-[#F0F9FF]">
            {copy.heading}
          </h2>
          <p className="mb-4 text-xl font-medium text-[#22D3EE]">{copy.subheading}</p>
          <p className="mb-6 max-w-lg text-[#7EA8BD]">{copy.description}</p>
          <div className="font-dm-mono flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.1)] px-4 py-2 text-sm text-[#4ADE80]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
            </span>
            {copy.badge}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              {...register('hp')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">{copy.name}</label>
              <input {...register('name')} placeholder={copy.namePlaceholder} className={inputClass} autoComplete="name" />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">{copy.email}</label>
              <input
                {...register('email')}
                type="email"
                placeholder={copy.emailPlaceholder}
                className={inputClass}
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">{copy.company}</label>
              <input {...register('company')} placeholder={copy.companyPlaceholder} className={inputClass} />
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">{copy.subject}</label>
              <input {...register('subject')} placeholder={copy.subjectPlaceholder} className={inputClass} />
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#7EA8BD]">{copy.message}</label>
              <textarea {...register('message')} rows={5} placeholder={copy.messagePlaceholder} className={inputClass} />
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
                  {copy.sending}
                </span>
              ) : (
                submitLabel
              )}
            </button>

            <p className="text-xs leading-relaxed text-[#7EA8BD]">{copy.legal}</p>
          </form>

          <aside>
            <h3 className="mb-4 text-sm font-semibold text-[#F0F9FF]">{copy.quick}</h3>

            <div className="space-y-3">
              {contactLinks.map((link) => {
                const cardClass = `flex items-center gap-3 rounded-xl border p-4 transition ${
                  link.href ? 'hover:border-[rgba(34,211,238,0.25)]' : ''
                } ${
                  link.highlight
                    ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.08)]'
                    : 'border-[rgba(34,211,238,0.1)] bg-[#081420]'
                }`
                const content = (
                  <>
                    <link.icon className="h-4 w-4 shrink-0 text-[#22D3EE]" />
                    <div>
                      <p className="text-xs text-[#7EA8BD]">{link.label}</p>
                      <p className="text-sm text-[#F0F9FF]">{link.value}</p>
                      {'detail' in link && (
                        <p className="mt-1 text-xs leading-relaxed text-[#7EA8BD]">{link.detail}</p>
                      )}
                    </div>
                  </>
                )

                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.label} className={cardClass}>
                    {content}
                  </div>
                )
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
