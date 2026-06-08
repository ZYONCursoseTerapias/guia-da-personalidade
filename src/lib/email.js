import { pillars, classifyPillar, classifySubscale } from '../data/questions'
import { pillarDescriptions, facetDescriptions } from '../data/descriptions'

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
  const dominantPillar = pillars.reduce((best, p) => {
    const score = scores[p.id]?.total ?? 0
    return score > (scores[best.id]?.total ?? 0) ? p : best
  }, pillars[0])

  const dominantScore = scores[dominantPillar.id]?.total ?? 0
  const { label: dominantLabel } = classifyPillar(dominantScore)

  const dominantFacets = dominantPillar.subscales
    .map((sub) => {
      const subScore = scores[dominantPillar.id]?.subscales?.[sub.id] ?? 0
      const { label } = classifySubscale(subScore)
      const facetDesc = facetDescriptions[sub.id]
      const facetText = facetDesc?.[label] || ''
      return `${sub.name}: ${subScore}/20 (${label})\n${facetText}`
    })
    .join('\n\n')

  const otherTraits = pillars
    .filter((p) => p.id !== dominantPillar.id)
    .map((p) => {
      const total = scores[p.id]?.total ?? 0
      const { label } = classifyPillar(total)
      const facets = p.subscales
        .map((sub) => {
          const ss = scores[p.id]?.subscales?.[sub.id] ?? 0
          const { label: sl } = classifySubscale(ss)
          return `  ${sub.name}: ${ss}/20 (${sl})`
        })
        .join('\n')
      return `${p.name}: ${total} pts (${label})\n${facets}`
    })
    .join('\n\n')

  // Resultado completo com todos os traços e todas as facetas (para Sandra)
  const fullDetail = pillars
    .map((p) => {
      const total = scores[p.id]?.total ?? 0
      const { label } = classifyPillar(total)
      const facets = p.subscales
        .map((sub) => {
          const ss = scores[p.id]?.subscales?.[sub.id] ?? 0
          const { label: sl } = classifySubscale(ss)
          return `  ${sub.name}: ${ss}/20 (${sl})`
        })
        .join('\n')
      return `${p.name}: ${total} pts (${label})\n${facets}`
    })
    .join('\n\n')

  const desc = pillarDescriptions[dominantPillar.id]
  const dominantText = (desc?.[dominantLabel] || '').replace(/\n\n/g, '\n\n')

  const date = new Date().toLocaleDateString('pt-BR')

  // E-mail para Sandra — resultado completo com todos os traços e facetas
  await sendEmail(TEMPLATE_ADMIN, {
    to_name: 'Sandrä Costa',
    client_name: name,
    client_email: email,
    full_detail: fullDetail,
    date,
  })

  // E-mail para a cliente — traço dominante com descrição completa
  if (TEMPLATE_CLIENT) {
    await sendEmail(TEMPLATE_CLIENT, {
      to_name: name,
      client_name: name,
      client_email: email,
      dominant_trait: dominantPillar.name,
      dominant_score: `${dominantScore} pts`,
      dominant_level: dominantLabel,
      dominant_what: desc?.what || '',
      dominant_text: dominantText,
      dominant_facets: dominantFacets,
      other_traits: otherTraits,
      date,
    })
  }
}
