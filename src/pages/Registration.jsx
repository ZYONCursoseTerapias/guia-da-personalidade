import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Por favor, informe seu nome.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Por favor, informe um e-mail válido.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    sessionStorage.setItem('raio_x_user', JSON.stringify(form))
    navigate('/teste')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Back */}
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-brand-dark text-sm hover:underline">
          ← Voltar
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-brand-dark">Vamos começar!</h2>
          <p className="text-gray-500">Informe seus dados para receber seu resultado personalizado.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Seu nome</label>
            <input
              type="text"
              placeholder="Como posso te chamar?"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-medium text-gray-800 placeholder-gray-400"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Seu e-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-medium text-gray-800 placeholder-gray-400"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <p className="text-xs text-gray-400">
            Seus dados são confidenciais e utilizados apenas para envio do resultado.
          </p>

          <button type="submit" className="btn-primary w-full text-center">
            Iniciar o Teste →
          </button>
        </form>
      </div>
    </div>
  )
}
