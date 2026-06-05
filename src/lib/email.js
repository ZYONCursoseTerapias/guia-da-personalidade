import { pillars, classifyPillar } from '../data/questions'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const TEMPLATE_CLIENT = import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

async function sendEmail(templateId, params) {
  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) return
  try {
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: templateId,
        user_id: PUBLIC_KEY,
        template_params: params,
      }),
    })
  } catch (e) {
    console.warn('Email error:', e.message)
  }
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

  // E-mail para Sandra (notificação de nova resposta)
  await sendEmail(TEMPLATE_ADMIN, {
    to_name: 'Sandrä Costa',
    client_name: name,
    client_email: email,
    summary,
    date,
  })

  // E-mail para a cliente (resultado)
  if (TEMPLATE_CLIENT) {
    await sendEmail(TEMPLATE_CLIENT, {
      to_name: name,
      client_name: name,
      client_email: email,
      date,
    })
  }
}
