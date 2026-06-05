export const pillars = [
  {
    id: 'abertura',
    name: 'Abertura à Experiência',
    color: '#6CC24A',
    subscales: [
      {
        id: 'fantasia',
        name: 'Fantasia',
        questions: [
          { id: 1, text: 'Eu frequentemente imagino novas possibilidades para minha vida.', inverted: false },
          { id: 2, text: 'Gosto de pensar sobre conceitos abstratos.', inverted: false },
          { id: 3, text: 'Tenho uma imaginação ativa.', inverted: false },
          { id: 4, text: 'Raramente me perco em meus pensamentos.', inverted: true },
        ],
      },
      {
        id: 'estetica',
        name: 'Estética',
        questions: [
          { id: 5, text: 'Eu gosto de apreciar arte.', inverted: false },
          { id: 6, text: 'Música é uma parte importante da minha vida.', inverted: false },
          { id: 7, text: 'Desfruto de atividades culturais.', inverted: false },
          { id: 8, text: 'Não tenho interesse em aprender sobre diferentes formas de arte.', inverted: true },
        ],
      },
      {
        id: 'sentimentos',
        name: 'Sentimentos',
        questions: [
          { id: 9, text: 'Aprecio a beleza em minha vida cotidiana.', inverted: false },
          { id: 10, text: 'A natureza me inspira.', inverted: false },
          { id: 11, text: 'Presto atenção aos detalhes estéticos.', inverted: false },
          { id: 12, text: 'Não noto a beleza ao meu redor.', inverted: true },
        ],
      },
      {
        id: 'acoes',
        name: 'Ações Variadas',
        questions: [
          { id: 13, text: 'Muitas vezes penso em soluções criativas para problemas.', inverted: false },
          { id: 14, text: 'Sonho acordada frequentemente.', inverted: false },
          { id: 15, text: 'Tenho muitas ideias criativas.', inverted: false },
          { id: 16, text: 'Não gosto de fantasiar sobre diferentes vidas que poderia viver.', inverted: true },
        ],
      },
      {
        id: 'ideias',
        name: 'Ideias',
        questions: [
          { id: 17, text: 'Gosto de ler livros desafiadores.', inverted: false },
          { id: 18, text: 'Gosto de mudar minha rotina.', inverted: false },
          { id: 19, text: 'Tenho curiosidade sobre diferentes assuntos.', inverted: false },
          { id: 20, text: 'Não gosto de aprender novas coisas.', inverted: true },
        ],
      },
      {
        id: 'valores',
        name: 'Valores',
        questions: [
          { id: 21, text: 'Costumo questionar velhas verdades da sociedade.', inverted: false },
          { id: 22, text: 'Sinto-me confortável mudando de ideia.', inverted: false },
          { id: 23, text: 'Acredito que é desafiando o status quo que evoluímos como pessoas e sociedade.', inverted: false },
          { id: 24, text: 'Sou resistente à novas ideias e abordagens.', inverted: true },
        ],
      },
    ],
  },
  {
    id: 'conscienciosidade',
    name: 'Conscienciosidade',
    color: '#1E6F30',
    subscales: [
      {
        id: 'competencia',
        name: 'Competência',
        questions: [
          { id: 25, text: 'Sinto-me capaz de lidar com a maioria dos problemas que surgem na vida.', inverted: false },
          { id: 26, text: 'Eu me considero uma pessoa eficiente.', inverted: false },
          { id: 27, text: 'Acredito que sou bastante competente.', inverted: false },
          { id: 28, text: 'Não confio nas minhas habilidades.', inverted: true },
        ],
      },
      {
        id: 'ordem',
        name: 'Ordem',
        questions: [
          { id: 29, text: 'Eu gosto de manter tudo em ordem.', inverted: false },
          { id: 30, text: 'Gosto de planejar minhas atividades.', inverted: false },
          { id: 31, text: 'Organizo bem meu espaço de trabalho.', inverted: false },
          { id: 32, text: 'Mantenho minhas coisas desorganizadas.', inverted: true },
        ],
      },
      {
        id: 'senso_dever',
        name: 'Senso de Dever',
        questions: [
          { id: 33, text: 'Eu sempre tento fazer o que é certo.', inverted: false },
          { id: 34, text: 'Tenho um forte senso de dever.', inverted: false },
          { id: 35, text: 'Levo minhas obrigações a sério.', inverted: false },
          { id: 36, text: 'Não me esforço para cumprir minhas responsabilidades.', inverted: true },
        ],
      },
      {
        id: 'realizacoes',
        name: 'Esforço por Realizações',
        questions: [
          { id: 37, text: 'Sou motivada a alcançar meus objetivos.', inverted: false },
          { id: 38, text: 'Trabalho duro para alcançar o sucesso.', inverted: false },
          { id: 39, text: 'Tenho grandes ambições.', inverted: false },
          { id: 40, text: 'Não gosto de me desafiar.', inverted: true },
        ],
      },
      {
        id: 'autodisciplina',
        name: 'Autodisciplina',
        questions: [
          { id: 41, text: 'Sou capaz de me controlar quando necessário.', inverted: false },
          { id: 42, text: 'Eu mantenho o foco no que preciso fazer.', inverted: false },
          { id: 43, text: 'Posso resistir a tentações.', inverted: false },
          { id: 44, text: 'Não sigo com meus planos quando é difícil.', inverted: true },
        ],
      },
      {
        id: 'deliberacao',
        name: 'Deliberação',
        questions: [
          { id: 45, text: 'Penso nas consequências antes de agir.', inverted: false },
          { id: 46, text: 'Sou cuidadosa ao tomar decisões.', inverted: false },
          { id: 47, text: 'Evito correr riscos desnecessários.', inverted: false },
          { id: 48, text: 'Agir sem pensar nas consequências é comum para mim.', inverted: true },
        ],
      },
    ],
  },
  {
    id: 'extroversao',
    name: 'Extroversão',
    color: '#9BE198',
    subscales: [
      {
        id: 'acolhimento',
        name: 'Acolhimento',
        questions: [
          { id: 49, text: 'Gosto de estar rodeada de pessoas.', inverted: false },
          { id: 50, text: 'Facilmente faço amigos.', inverted: false },
          { id: 51, text: 'Gosto de socializar.', inverted: false },
          { id: 52, text: 'Sinto-me desconfortável em grandes grupos.', inverted: true },
        ],
      },
      {
        id: 'gregarismo',
        name: 'Gregarismo',
        questions: [
          { id: 53, text: 'Eu gosto de estar no centro das atenções.', inverted: false },
          { id: 54, text: 'Gosto de participar de atividades sociais.', inverted: false },
          { id: 55, text: 'Prefiro estar com outras pessoas do que sozinha.', inverted: false },
          { id: 56, text: 'Não gosto de conhecer novas pessoas.', inverted: true },
        ],
      },
      {
        id: 'assertividade',
        name: 'Assertividade',
        questions: [
          { id: 57, text: 'Eu tomo a iniciativa em situações sociais.', inverted: false },
          { id: 58, text: 'Não tenho medo de falar em público.', inverted: false },
          { id: 59, text: 'Sou assertiva em expressar minhas opiniões.', inverted: false },
          { id: 60, text: 'Evito liderar grupos.', inverted: true },
        ],
      },
      {
        id: 'atividade',
        name: 'Atividade',
        questions: [
          { id: 61, text: 'Eu sou uma pessoa enérgica.', inverted: false },
          { id: 62, text: 'Gosto de estar ocupada.', inverted: false },
          { id: 63, text: 'Tenho um ritmo de vida acelerado.', inverted: false },
          { id: 64, text: 'Prefiro um ritmo de vida mais lento.', inverted: true },
        ],
      },
      {
        id: 'excitacao',
        name: 'Busca por Excitação',
        questions: [
          { id: 65, text: 'Gosto de experimentar coisas novas.', inverted: false },
          { id: 66, text: 'Procuro aventuras emocionantes.', inverted: false },
          { id: 67, text: 'Desfruto de atividades estimulantes.', inverted: false },
          { id: 68, text: 'Não gosto de desafios.', inverted: true },
        ],
      },
      {
        id: 'emocoes_positivas',
        name: 'Emoções Positivas',
        questions: [
          { id: 69, text: 'Sinto-me frequentemente feliz e entusiasmada.', inverted: false },
          { id: 70, text: 'Tenho uma perspectiva positiva da vida.', inverted: false },
          { id: 71, text: 'Gosto de compartilhar minha alegria com os outros.', inverted: false },
          { id: 72, text: 'Sou uma pessoa pessimista.', inverted: true },
        ],
      },
    ],
  },
  {
    id: 'amabilidade',
    name: 'Amabilidade',
    color: '#EFBE7D',
    subscales: [
      {
        id: 'confianca',
        name: 'Confiança',
        questions: [
          { id: 73, text: 'Eu acredito que a maioria das pessoas é confiável.', inverted: false },
          { id: 74, text: 'Sinto que posso confiar nas pessoas.', inverted: false },
          { id: 75, text: 'Acho que a maioria das pessoas é honesta.', inverted: false },
          { id: 76, text: 'Desconfio das intenções dos outros.', inverted: true },
        ],
      },
      {
        id: 'franqueza',
        name: 'Franqueza',
        questions: [
          { id: 77, text: 'Eu sou direta em minhas opiniões.', inverted: false },
          { id: 78, text: 'Falo o que penso.', inverted: false },
          { id: 79, text: 'Prefiro ser honesta do que diplomática.', inverted: false },
          { id: 80, text: 'Eu escondo meus sentimentos.', inverted: true },
        ],
      },
      {
        id: 'altruismo',
        name: 'Altruísmo',
        questions: [
          { id: 81, text: 'Gosto de ajudar os outros.', inverted: false },
          { id: 82, text: 'Tenho prazer em ser útil.', inverted: false },
          { id: 83, text: 'Sinto-me bem ao fazer algo por alguém.', inverted: false },
          { id: 84, text: 'Não me importo em ajudar os outros.', inverted: true },
        ],
      },
      {
        id: 'complacencia',
        name: 'Complacência',
        questions: [
          { id: 85, text: 'Eu tento evitar conflitos.', inverted: false },
          { id: 86, text: 'Eu sou uma pessoa pacífica.', inverted: false },
          { id: 87, text: 'Prefiro ceder a brigar.', inverted: false },
          { id: 88, text: 'Gosto de criar conflitos.', inverted: true },
        ],
      },
      {
        id: 'modestia',
        name: 'Modéstia',
        questions: [
          { id: 89, text: 'Eu não gosto de me gabar.', inverted: false },
          { id: 90, text: 'Prefiro manter um perfil baixo.', inverted: false },
          { id: 91, text: 'Não sou arrogante.', inverted: false },
          { id: 92, text: 'Eu me gabo frequentemente.', inverted: true },
        ],
      },
      {
        id: 'sensibilidade',
        name: 'Sensibilidade',
        questions: [
          { id: 93, text: 'Eu me importo com os sentimentos dos outros.', inverted: false },
          { id: 94, text: 'Sou sensível às necessidades dos outros.', inverted: false },
          { id: 95, text: 'Tendo a ser empática.', inverted: false },
          { id: 96, text: 'Não me preocupo com os sentimentos dos outros.', inverted: true },
        ],
      },
    ],
  },
  {
    id: 'neuroticismo',
    name: 'Neuroticismo',
    color: '#2d8a4e',
    subscales: [
      {
        id: 'ansiedade',
        name: 'Ansiedade',
        questions: [
          { id: 97, text: 'Eu me preocupo facilmente.', inverted: false },
          { id: 98, text: 'Fico nervosa com frequência.', inverted: false },
          { id: 99, text: 'Sou uma pessoa ansiosa.', inverted: false },
          { id: 100, text: 'Tenho facilidade em relaxar.', inverted: true },
        ],
      },
      {
        id: 'hostilidade',
        name: 'Hostilidade',
        questions: [
          { id: 101, text: 'Fico irritada facilmente.', inverted: false },
          { id: 102, text: 'Tenho um pavio curto.', inverted: false },
          { id: 103, text: 'Sinto raiva frequentemente.', inverted: false },
          { id: 104, text: 'Raramente fico frustrada.', inverted: true },
        ],
      },
      {
        id: 'depressao',
        name: 'Depressão',
        questions: [
          { id: 105, text: 'Fico triste facilmente.', inverted: false },
          { id: 106, text: 'Tenho tendência à melancolia.', inverted: false },
          { id: 107, text: 'Sinto-me frequentemente deprimida.', inverted: false },
          { id: 108, text: 'Raramente fico desanimada.', inverted: true },
        ],
      },
      {
        id: 'autoconsciencia',
        name: 'Autoconsciência',
        questions: [
          { id: 109, text: 'Eu me preocupo com o que os outros pensam de mim.', inverted: false },
          { id: 110, text: 'Sou sensível às críticas.', inverted: false },
          { id: 111, text: 'Fico autoconsciente em situações sociais.', inverted: false },
          { id: 112, text: 'Não me importo com a minha imagem.', inverted: true },
        ],
      },
      {
        id: 'impulsividade',
        name: 'Impulsividade',
        questions: [
          { id: 113, text: 'Eu ajo sem pensar.', inverted: false },
          { id: 114, text: 'Tenho dificuldade em controlar meus impulsos.', inverted: false },
          { id: 115, text: 'Fico impaciente facilmente.', inverted: false },
          { id: 116, text: 'Costumo pensar antes de agir.', inverted: true },
        ],
      },
      {
        id: 'vulnerabilidade',
        name: 'Vulnerabilidade',
        questions: [
          { id: 117, text: 'Eu me sinto facilmente oprimida pelo estresse.', inverted: false },
          { id: 118, text: 'Tenho dificuldade em lidar com a pressão.', inverted: false },
          { id: 119, text: 'Sinto-me vulnerável em situações difíceis a ponto de querer fugir ou me isolar.', inverted: false },
          { id: 120, text: 'Eu lido bem com situações difíceis, pois elas fazem parte da vida e me fortalecem.', inverted: true },
        ],
      },
    ],
  },
]

export const allQuestions = pillars.flatMap((p) =>
  p.subscales.flatMap((s) => s.questions.map((q) => ({ ...q, pillarId: p.id, subscaleId: s.id })))
)

export function scoreAnswer(value, inverted) {
  if (inverted) return 6 - value
  return value
}

export function computeScores(answers) {
  const scores = {}
  for (const pillar of pillars) {
    let pillarTotal = 0
    scores[pillar.id] = { total: 0, subscales: {} }
    for (const subscale of pillar.subscales) {
      let subscaleTotal = 0
      for (const q of subscale.questions) {
        const raw = answers[q.id] ?? 0
        subscaleTotal += scoreAnswer(raw, q.inverted)
      }
      scores[pillar.id].subscales[subscale.id] = subscaleTotal
      pillarTotal += subscaleTotal
    }
    scores[pillar.id].total = pillarTotal
  }
  return scores
}

export function classifyPillar(score) {
  if (score <= 47) return { label: 'Baixa', color: '#e57373' }
  if (score <= 83) return { label: 'Média', color: '#EFBE7D' }
  return { label: 'Alta', color: '#6CC24A' }
}

export function classifySubscale(score) {
  if (score <= 9) return { label: 'Baixa', color: '#e57373' }
  if (score <= 15) return { label: 'Média', color: '#EFBE7D' }
  return { label: 'Alta', color: '#6CC24A' }
}
