import { useState, useEffect } from 'react'
import { getAllResults } from '../lib/supabase'
import { pillars, classifyPillar } from '../data/questions'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'sandra2024'

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [password, setPassword] = useState('')
  const [wrongPass, setWrongPass] = useState(false)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)

  function handleLogin(e) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuth(true)
      loadResults()
    } else {
      setWrongPass(true)
    }
  }

  async function loadResults() {
    setLoading(true)
    try {
      const data = await getAllResults()
      setResults(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!auth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-brand-dark">Painel Administrativo</h1>
            <p className="text-gray-500 text-sm">Guia da Personalidade</p>
          </div>
          <form onSubmit={handleLogin} className="card space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setWrongPass(false) }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-medium"
                placeholder="••••••••"
              />
              {wrongPass && <p className="text-red-500 text-xs mt-1">Senha incorreta.</p>}
            </div>
            <button type="submit" className="btn-primary w-full">Entrar</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-dark text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg">Painel Admin · Guia da Personalidade</h1>
          <p className="text-green-200 text-xs">{results.length} resultado{results.length !== 1 ? 's' : ''} registrado{results.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={() => setAuth(false)} className="text-green-200 text-sm hover:text-white">Sair</button>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {loading ? (
          <p className="text-center text-gray-400 py-12">Carregando...</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-400 py-12">Nenhum resultado ainda.</p>
        ) : (
          <div className="space-y-4">
            {results.map((r) => {
              const isOpen = selected === r.id
              return (
                <div key={r.id} className="card">
                  <button
                    onClick={() => setSelected(isOpen ? null : r.id)}
                    className="w-full text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-dark font-bold text-lg uppercase">
                        {r.name?.[0] || '?'}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{r.name}</p>
                        <p className="text-xs text-gray-400">{r.email} · {new Date(r.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {pillars.map((p) => {
                        const score = r.scores?.[p.id]?.total ?? 0
                        const { label, color } = classifyPillar(score)
                        return (
                          <span key={p.id} className="text-xs px-2 py-1 rounded-full text-white font-medium" style={{ backgroundColor: color }}>
                            {p.name.replace('Pilar da ', '').replace('Pilar do ', '')}: {label}
                          </span>
                        )
                      })}
                    </div>
                    <span className="text-gray-400 ml-2">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 border-t border-gray-100 pt-4 grid grid-cols-1 sm:grid-cols-5 gap-4">
                      {pillars.map((pillar) => {
                        const total = r.scores?.[pillar.id]?.total ?? 0
                        const { label, color } = classifyPillar(total)
                        return (
                          <div key={pillar.id} className="text-center space-y-2">
                            <p className="text-xs font-semibold text-gray-500">{pillar.name.replace('Pilar da ', '').replace('Pilar do ', '')}</p>
                            <div className="text-2xl font-bold" style={{ color: pillar.color }}>{total}</div>
                            <span className="text-xs px-2 py-0.5 rounded-full text-white font-bold" style={{ backgroundColor: color }}>{label}</span>
                            <div className="space-y-1">
                              {pillar.subscales.map((sub) => {
                                const ss = r.scores?.[pillar.id]?.subscales?.[sub.id] ?? 0
                                return (
                                  <div key={sub.id} className="text-xs text-gray-500 flex justify-between gap-1">
                                    <span className="truncate">{sub.name}</span>
                                    <span className="font-medium">{ss}</span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
