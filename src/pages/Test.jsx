import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { pillars, allQuestions, computeScores } from '../data/questions'
import { saveResult } from '../lib/supabase'
import { sendResultEmail } from '../lib/email'

const SCALE = [
  { value: 1, label: 'Discordo Totalmente' },
  { value: 2, label: 'Discordo' },
  { value: 3, label: 'Neutro' },
  { value: 4, label: 'Concordo' },
  { value: 5, label: 'Concordo Totalmente' },
]

export default function Test() {
  const navigate = useNavigate()
  const topRef = useRef(null)
  const [user, setUser] = useState(null)
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('guia_answers') || '{}') } catch { return {} }
  })
  const [currentPillarIdx, setCurrentPillarIdx] = useState(() => {
    try { return parseInt(sessionStorage.getItem('guia_pillar') || '0') } catch { return 0 }
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem('guia_user')
    if (!stored) { navigate('/registro'); return }
    setUser(JSON.parse(stored))
  }, [])

  // Scroll to top whenever pillar changes
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentPillarIdx])

  const currentPillar = pillars[currentPillarIdx]
  const pillarQuestions = currentPillar.subscales.flatMap((s) => s.questions)
  const totalAnswered = Object.keys(answers).length
  const progress = Math.round((totalAnswered / allQuestions.length) * 100)
  const pillarAnswered = pillarQuestions.every((q) => answers[q.id] !== undefined)

  function handleAnswer(qId, value) {
    setAnswers((prev) => {
      const updated = { ...prev, [qId]: value }
      sessionStorage.setItem('guia_answers', JSON.stringify(updated))
      return updated
    })
  }

  async function handleNext() {
    if (currentPillarIdx < pillars.length - 1) {
      const next = currentPillarIdx + 1
      sessionStorage.setItem('guia_pillar', String(next))
      setCurrentPillarIdx(next)
    } else {
      setSaving(true)
      try {
        const scores = computeScores(answers)
        const result = { name: user.name, email: user.email, answers, scores }

        // Save and email — silently ignore errors so user always sees result
        try { await saveResult(result) } catch (e) { console.warn('Supabase:', e.message) }
        try { await sendResultEmail(result) } catch (e) { console.warn('Email:', e.message) }

        sessionStorage.setItem('guia_scores', JSON.stringify(scores))
        sessionStorage.setItem('guia_user', JSON.stringify(user))
        sessionStorage.removeItem('guia_answers')
        sessionStorage.removeItem('guia_pillar')
        navigate('/resultado')
      } catch (err) {
        console.error(err)
        navigate('/resultado') // Go to results anyway
      }
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white">
      {/* Scroll anchor */}
      <div ref={topRef} />

      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-brand-dark font-semibold">{currentPillar.name}</span>
            <span className="text-gray-400">{totalAnswered} / {allQuestions.length} respondidas</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: currentPillar.color }}
            />
          </div>
          <div className="flex gap-1">
            {pillars.map((p, i) => (
              <div
                key={p.id}
                className="flex-1 h-1 rounded-full transition-all duration-300"
                style={{ backgroundColor: i <= currentPillarIdx ? p.color : '#e5e7eb' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Pillar header */}
        <div className="text-center space-y-1 py-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: currentPillar.color }}>
            Traço {currentPillarIdx + 1} de {pillars.length}
          </div>
          <h2 className="text-2xl font-bold text-brand-dark">{currentPillar.name}</h2>
        </div>

        {/* Questions grouped by subscale */}
        {currentPillar.subscales.map((subscale) => (
          <div key={subscale.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full" style={{ backgroundColor: currentPillar.color }} />
              <div>
                <p className="font-semibold text-gray-800">{subscale.name}</p>
              </div>
            </div>

            {subscale.questions.map((q) => (
              <div key={q.id} className="card space-y-4">
                <p className="text-gray-700 font-medium leading-snug">{q.text}</p>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-1 sm:justify-between">
                  {SCALE.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => handleAnswer(q.id, s.value)}
                      className={`flex-1 py-2 px-2 rounded-xl text-xs font-medium border-2 transition-all duration-150 ${
                        answers[q.id] === s.value
                          ? 'text-white border-transparent shadow-md scale-105'
                          : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                      }`}
                      style={answers[q.id] === s.value ? { backgroundColor: currentPillar.color, borderColor: currentPillar.color } : {}}
                    >
                      <span className="block text-center font-bold text-sm">{s.value}</span>
                      <span className="block text-center leading-tight">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Next button */}
        <div className="flex justify-end pt-4 pb-8">
          <button
            onClick={handleNext}
            disabled={!pillarAnswered || saving}
            className={`btn-primary text-base px-10 ${(!pillarAnswered || saving) ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            {saving ? 'Calculando resultado...' : currentPillarIdx < pillars.length - 1 ? 'Próximo Traço →' : 'Ver meu Resultado ✦'}
          </button>
        </div>
      </main>
    </div>
  )
}
