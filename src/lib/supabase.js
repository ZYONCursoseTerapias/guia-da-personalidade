import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null

export async function saveResult({ name, email, answers, scores }) {
  if (!supabase) {
    console.warn('Supabase não configurado — resultado não salvo.')
    return { id: Date.now() }
  }
  const { data, error } = await supabase.from('results').insert([
    { name, email, answers, scores, created_at: new Date().toISOString() },
  ]).select().single()
  if (error) throw error
  return data
}

export async function getAllResults() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('results')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}
