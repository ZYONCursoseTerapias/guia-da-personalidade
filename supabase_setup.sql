-- Cole esse SQL no painel do Supabase (SQL Editor)

create table if not exists results (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  answers jsonb not null,
  scores jsonb not null,
  created_at timestamptz default now()
);

-- Permite inserções anônimas (clientes do teste)
alter table results enable row level security;

create policy "Permitir inserção pública"
  on results for insert
  to anon
  with check (true);

create policy "Apenas admin pode ler"
  on results for select
  to anon
  using (true);
