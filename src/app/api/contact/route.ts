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
    const CONTACT_TO = process.env.CONTACT_EMAIL || 'krystian@example.com'

    if (!RESEND_API_KEY) {
      // do not fail loudly in development; return success to avoid exposing key absence
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'server_misconfigured' }, { status: 500 })
    }

    const resend = new Resend(RESEND_API_KEY)

    const html = `
      <p><strong>Name:</strong> ${parsed.data.name}</p>
      <p><strong>Email:</strong> ${parsed.data.email}</p>
      <p><strong>Company:</strong> ${parsed.data.company ?? '-'}</p>
      <p><strong>Subject:</strong> ${parsed.data.subject ?? '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${parsed.data.message.replace(/\n/g, '<br/>')}</p>
    `

    await resend.emails.send({
      from: 'Krystian Potaczek <no-reply@krystianpotaczek.dev>',
      to: CONTACT_TO,
      subject: parsed.data.subject
        ? `Portfolio contact: ${parsed.data.subject}`
        : `Portfolio contact from ${parsed.data.name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
