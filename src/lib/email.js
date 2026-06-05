import { pillars, classifyPillar } from '../data/questions'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

async function sendEmail(params) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) return
  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: params,
    }),
  })
}

export async function sendResultEmail({ name, email, scores }) {
  const summary = pillars
    .map((p) => {
      const score = scores[p.id]?.total ?? 0
      const { label } = classifyPillar(score)
      return `${p.name}: ${score} pts (${label})`
    })
    .join('\n')

  const date = new Date().toLocaleDateString('pt-BR')

  // E-mail para Sandra
  await sendEmail({
    to_email: import.meta.env.VITE_ADMIN_EMAIL || 'terapeutasandracosta@gmail.com',
    to_name: 'Sandrä Costa',
    client_name: name,
    client_email: email,
    summary,
    date,
  })

  // E-mail para a cliente
  await sendEmail({
    to_email: email,
    to_name: name,
    client_name: name,
    client_email: email,
    summary: 'Acesse o link enviado para ver seu resultado completo.',
    date,
  })
}
