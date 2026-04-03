const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { z } from 'npm:zod@3.25.76'

const BodySchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().optional().default(''),
  services: z.array(z.string()).min(1, 'Mindestens eine Leistung auswählen'),
  ort: z.string().optional().default(''),
  flaeche: z.string().optional().default(''),
  zeitraum: z.string().optional().default(''),
  message: z.string().min(1),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { name, email, phone, services, ort, flaeche, zeitraum, message } = parsed.data

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }

    const fields: { label: string; value: string }[] = []
    fields.push({ label: 'Name', value: name })
    if (phone) fields.push({ label: 'Telefon', value: phone })
    fields.push({ label: 'E-Mail', value: email })
    fields.push({ label: 'Gewünschte Leistung(en)', value: services.join(', ') })
    if (ort) fields.push({ label: 'Ort / Stadtteil', value: ort })
    if (flaeche) fields.push({ label: 'Ungefähre Fläche (m²)', value: flaeche })
    if (zeitraum) fields.push({ label: 'Gewünschter Zeitraum', value: zeitraum })
    fields.push({ label: 'Projektbeschreibung', value: message })

    const fieldRows = fields
      .map(f => `<p style="margin:0 0 8px;"><strong>${escapeHtml(f.label)}:</strong> ${escapeHtml(f.value).replace(/\n/g, '<br>')}</p>`)
      .join('\n')

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;color:#333;max-width:600px;">
        <p>Hallo Lars,</p>
        <p>eine neue Anfrage ist über deine Website eingegangen. Hier sind die Details:</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;">
        ${fieldRows}
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;">
        <p>Viele Grüße,<br>Deine Website</p>
      </div>
    `

    const subjectLine = `Neue Anfrage von ${name} – ${services.join(', ')}`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'LA.SE Innenausbau <info@deutlicht.de>',
        to: ['lase.innenausbau@gmail.com'],
        subject: subjectLine,
        html: htmlBody,
        reply_to: email,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend error:', data)
      return new Response(
        JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Unexpected error:', err)
    return new Response(
      JSON.stringify({ error: 'Interner Serverfehler' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
