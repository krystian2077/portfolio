import { NextResponse } from 'next/server'
import * as z from 'zod'
import { Resend } from 'resend'

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10),
  hp: z.string().optional(),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'invalid_payload' }, { status: 400 })
    }

    // honeypot
    if (parsed.data.hp) {
      return NextResponse.json({ ok: true })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO = process.env.CONTACT_EMAIL || 'krystianpotaczek.dev@gmail.com'
    const CONTACT_FROM = process.env.CONTACT_FROM || 'Krystian Potaczek <onboarding@resend.dev>'

    if (!RESEND_API_KEY) {
      // do not fail loudly in development; return success to avoid exposing key absence
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'server_misconfigured' }, { status: 500 })
    }

    const resend = new Resend(RESEND_API_KEY)

    const html = `
      <p><strong>Name:</strong> ${escapeHtml(parsed.data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(parsed.data.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(parsed.data.company ?? '-')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(parsed.data.subject ?? '-')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(parsed.data.message).replace(/\n/g, '<br/>')}</p>
    `

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: parsed.data.email,
      subject: parsed.data.subject
        ? `Portfolio contact: ${parsed.data.subject}`
        : `Portfolio contact from ${parsed.data.name}`,
      html,
    })

    if (error) {
      console.error('Resend email error', error)
      return NextResponse.json({ error: 'email_failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
