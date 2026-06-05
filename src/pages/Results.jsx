import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { pillars, classifyPillar, classifySubscale } from '../data/questions'
import { pillarDescriptions, facetDescriptions, ctaText, ctaButton, ctaLink } from '../data/descriptions'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function Results() {
  const navigate = useNavigate()
  const [scores, setScores] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const s = sessionStorage.getItem('guia_scores')
    const u = sessionStorage.getItem('guia_user')
    if (!s || !u) { navigate('/'); return }
    setScores(JSON.parse(s))
    setUser(JSON.parse(u))
  }, [])

  if (!scores || !user) return null

  // Find the dominant trait (highest score)
  const dominantPillar = pillars.reduce((best, p) => {
    const score = scores[p.id]?.total ?? 0
    return score > (scores[best.id]?.total ?? 0) ? p : best
  }, pillars[0])

  const radarData = {
    labels: pillars.map((p) => p.name),
    datasets: [
      {
        label: 'Seu perfil',
        data: pillars.map((p) => Math.round(((scores[p.id]?.total ?? 0) / 120) * 100)),
        backgroundColor: 'rgba(108, 194, 74, 0.2)',
        borderColor: '#1E6F30',
        borderWidth: 2,
        pointBackgroundColor: '#6CC24A',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1E6F30',
      },
    ],
  }

  const radarOptions = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { stepSize: 25, color: '#9ca3af', font: { size: 10 } },
        grid: { color: '#e5e7eb' },
        angleLines: { color: '#e5e7eb' },
        pointLabels: { color: '#1E6F30', font: { size: 12, weight: '600' } },
      },
    },
    plugins: { legend: { display: false } },
  }

  const dominantDesc = pillarDescriptions[dominantPillar.id]
  const dominantTotal = scores[dominantPillar.id]?.total ?? 0
  const { label: dominantLevel, color: dominantColor } = classifyPillar(dominantTotal)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white">
      <header className="py-8 px-4 text-center space-y-2 border-b border-gray-100 bg-white">
        <p className="text-brand-dark text-xs font-medium tracking-widest uppercase">Sandrä Costa · Terapeuta Holística / Comportamental</p>
        <h1 className="text-3xl font-bold text-brand-dark">Guia da Personalidade</h1>
        <p className="text-gray-500 text-sm">
          Olá, <strong>{user.name}</strong>! Aqui está o seu mapa de personalidade.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Radar */}
        <section className="card text-center space-y-4">
          <h2 className="text-xl font-bold text-brand-dark">Sua Pontuação nos 5 Traços</h2>
          <div className="max-w-sm mx-auto">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </section>

        {/* All scores — numbers only */}
        <section className="card space-y-4">
          <h2 className="text-lg font-bold text-brand-dark">Pontuação Total por Traço</h2>
          <p className="text-gray-500 text-sm">Escala de 24 a 120 pontos por traço.</p>
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const total = scores[pillar.id]?.total ?? 0
              const { label, color } = classifyPillar(total)
              const percent = Math.round((total / 120) * 100)
              const isDominant = pillar.id === dominantPillar.id

              return (
                <div key={pillar.id} className={`space-y-2 p-3 rounded-xl transition-all ${isDominant ? 'bg-green-50 border-2 border-brand-medium' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isDominant && (
                        <span className="text-xs bg-brand-medium text-white px-2 py-0.5 rounded-full font-semibold">Traço dominante</span>
                      )}
                      <span className={`font-semibold ${isDominant ? 'text-brand-dark' : 'text-gray-700'}`}>{pillar.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800">{total} pts</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: color }}>{label}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${percent}%`, backgroundColor: isDominant ? pillar.color : '#9ca3af' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Dominant trait — full description */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-brand-medium" />
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Seu traço em destaque</p>
              <h2 className="text-xl font-bold text-brand-dark">{dominantPillar.name}</h2>
            </div>
          </div>

          <div className="card space-y-5">
            {/* What is it */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">O que é este traço?</p>
              <p className="text-gray-600 text-sm leading-loose">{dominantDesc?.what}</p>
            </div>

            {/* Their level */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Seu resultado — <span style={{ color: dominantColor }}>{dominantLevel}</span>
              </p>
              <div className="bg-green-50 border-l-4 rounded-r-xl p-4 space-y-3" style={{ borderColor: dominantColor }}>
                {(dominantDesc?.[dominantLevel] || '').split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-loose">{para}</p>
                ))}
              </div>
            </div>

            {/* Facets scores only — no descriptions */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Facetas do seu traço dominante</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dominantPillar.subscales.map((sub) => {
                  const subScore = scores[dominantPillar.id]?.subscales?.[sub.id] ?? 0
                  const { label: sl, color: sc } = classifySubscale(subScore)
                  const sp = Math.round((subScore / 20) * 100)
                  return (
                    <div key={sub.id} className="bg-gray-50 rounded-xl p-3 space-y-2 text-center">
                      <p className="font-semibold text-gray-700 text-xs leading-tight">{sub.name}</p>
                      <p className="text-xl font-bold" style={{ color: dominantPillar.color }}>{subScore}<span className="text-xs text-gray-400 font-normal">/20</span></p>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white inline-block" style={{ backgroundColor: sc }}>{sl}</span>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full" style={{ width: `${sp}%`, backgroundColor: dominantPillar.color }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Locked traits teaser */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gray-300" />
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Os outros 4 traços</p>
              <h2 className="text-lg font-bold text-gray-500">O que eles revelam sobre você?</h2>
            </div>
          </div>

          <div className="card border-2 border-dashed border-gray-200 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {pillars.filter((p) => p.id !== dominantPillar.id).map((pillar) => {
                const total = scores[pillar.id]?.total ?? 0
                const { label, color } = classifyPillar(total)
                return (
                  <div key={pillar.id} className="relative bg-gray-50 rounded-xl p-4 overflow-hidden">
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-xl z-10">
                      <span className="text-lg">🔒</span>
                    </div>
                    <p className="font-semibold text-gray-700 text-sm">{pillar.name}</p>
                    <p className="text-xl font-bold text-gray-400 mt-1">{total} pts</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white inline-block mt-1" style={{ backgroundColor: color }}>{label}</span>
                  </div>
                )
              })}
            </div>
            <p className="text-center text-sm text-gray-500">
              Suas pontuações estão aqui — mas o que elas <strong>realmente significam</strong> para a sua vida vai muito além de um número.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="card text-center space-y-5 bg-brand-dark text-white border-0">
          <div className="space-y-1">
            <p className="text-brand-light text-xs font-medium tracking-widest uppercase">Próximo passo</p>
            <h3 className="text-2xl font-bold">Entenda o seu mapa completo</h3>
          </div>
          <div className="text-green-100 leading-loose max-w-md mx-auto text-sm space-y-2">
            {ctaText.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-cream text-brand-dark font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            {ctaButton}
          </a>
          <p className="text-green-200 text-xs">Sandrä Costa · Terapeuta Holística / Comportamental</p>
        </section>

        <p className="text-center text-xs text-gray-400 pb-8">
          © {new Date().getFullYear()} Sandrä Costa · Terapeuta Holística / Comportamental
        </p>
      </main>
    </div>
  )
}
