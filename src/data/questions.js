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
          { id: 1, text: 'Costumo imaginar como minha vida poderia ser diferente.', inverted: false },
          { id: 2, text: 'Gosto de pensar em ideias que não têm resposta fácil.', inverted: false },
          { id: 3, text: 'Minha cabeça vive criando histórias e cenários.', inverted: false },
          { id: 4, text: 'Raramente fico imersa nos meus próprios pensamentos.', inverted: true },
        ],
      },
      {
        id: 'estetica',
        name: 'Estética',
        questions: [
          { id: 5, text: 'Arte me toca de verdade, seja uma música, um quadro ou um filme.', inverted: false },
          { id: 6, text: 'Música faz parte da minha vida de um jeito que vai além do entretenimento.', inverted: false },
          { id: 7, text: 'Gosto de ir a exposições, peças de teatro, shows ou museus.', inverted: false },
          { id: 8, text: 'Não sinto interesse em explorar arte ou cultura.', inverted: true },
        ],
      },
      {
        id: 'sentimentos',
        name: 'Sentimentos',
        questions: [
          { id: 9, text: 'Noto a beleza nas coisas simples do dia a dia.', inverted: false },
          { id: 10, text: 'A natureza me acalma e me inspira.', inverted: false },
          { id: 11, text: 'Presto atenção em como as coisas são apresentadas visualmente.', inverted: false },
          { id: 12, text: 'Raramente presto atenção na beleza das coisas ao meu redor.', inverted: true },
        ],
      },
      {
        id: 'acoes',
        name: 'Ações Variadas',
        questions: [
          { id: 13, text: 'Quando tenho um problema, costumo pensar em soluções fora do óbvio.', inverted: false },
          { id: 14, text: 'Passo tempo considerável pensando em situações que ainda não aconteceram.', inverted: false },
          { id: 15, text: 'Novas ideias surgem na minha cabeça com frequência.', inverted: false },
          { id: 16, text: 'Não costumo ficar imaginando como seria se minha vida fosse diferente.', inverted: true },
        ],
      },
      {
        id: 'ideias',
        name: 'Ideias',
        questions: [
          { id: 17, text: 'Gosto de ler livros que me fazem pensar.', inverted: false },
          { id: 18, text: 'Gosto quando minha rotina muda e traz algo diferente.', inverted: false },
          { id: 19, text: 'Tenho curiosidade sobre assuntos variados, mesmo que não tenham nada a ver com minha vida.', inverted: false },
          { id: 20, text: 'Não sinto vontade de aprender coisas novas.', inverted: true },
        ],
      },
      {
        id: 'valores',
        name: 'Valores',
        questions: [
          { id: 21, text: 'Costumo questionar regras e crenças que todo mundo aceita sem pensar.', inverted: false },
          { id: 22, text: 'Não tenho dificuldade em mudar de opinião quando encontro argumentos melhores.', inverted: false },
          { id: 23, text: 'Acredito que questionar o que já está estabelecido é o que nos faz crescer.', inverted: false },
          { id: 24, text: 'Tenho dificuldade em aceitar formas novas de fazer as coisas.', inverted: true },
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
          { id: 25, text: 'Me sinto capaz de lidar com a maioria dos problemas que aparecem na minha vida.', inverted: false },
          { id: 26, text: 'Me considero uma pessoa que resolve as coisas bem.', inverted: false },
          { id: 27, text: 'Confio na minha capacidade de fazer bem o que me proponho a fazer.', inverted: false },
          { id: 28, text: 'Com frequência duvido da minha própria capacidade.', inverted: true },
        ],
      },
      {
        id: 'ordem',
        name: 'Ordem',
        questions: [
          { id: 29, text: 'Gosto de ter tudo organizado e no lugar certo.', inverted: false },
          { id: 30, text: 'Prefiro planejar o que vou fazer antes de começar.', inverted: false },
          { id: 31, text: 'Mantenho meu espaço de trabalho organizado.', inverted: false },
          { id: 32, text: 'Meu espaço costuma ficar bagunçado.', inverted: true },
        ],
      },
      {
        id: 'senso_dever',
        name: 'Senso de Dever',
        questions: [
          { id: 33, text: 'Faço o que é certo mesmo quando é mais difícil.', inverted: false },
          { id: 34, text: 'Levo muito a sério os compromissos que assumo.', inverted: false },
          { id: 35, text: 'Cumpro o que prometo, mesmo quando não tenho vontade.', inverted: false },
          { id: 36, text: 'Tenho dificuldade em cumprir minhas responsabilidades.', inverted: true },
        ],
      },
      {
        id: 'realizacoes',
        name: 'Reforço por Realizações',
        questions: [
          { id: 37, text: 'Sou movida por metas e objetivos.', inverted: false },
          { id: 38, text: 'Me dedico de verdade para alcançar o que quero.', inverted: false },
          { id: 39, text: 'Tenho objetivos grandes para a minha vida.', inverted: false },
          { id: 40, text: 'Não sinto necessidade de me desafiar ou ir além do que já faço.', inverted: true },
        ],
      },
      {
        id: 'autodisciplina',
        name: 'Autodisciplina',
        questions: [
          { id: 41, text: 'Consigo me controlar quando preciso resistir a algo.', inverted: false },
          { id: 42, text: 'Consigo manter o foco mesmo quando a tarefa é difícil ou chata.', inverted: false },
          { id: 43, text: 'Consigo resistir a tentações quando tenho um objetivo em mente.', inverted: false },
          { id: 44, text: 'Desisto dos meus planos quando as coisas ficam difíceis.', inverted: true },
        ],
      },
      {
        id: 'deliberacao',
        name: 'Ponderação',
        questions: [
          { id: 45, text: 'Penso nas consequências antes de tomar uma decisão.', inverted: false },
          { id: 46, text: 'Tomo decisões com cuidado, sem pressa.', inverted: false },
          { id: 47, text: 'Evito me arriscar quando não é necessário.', inverted: false },
          { id: 48, text: 'Costumo agir sem pensar nas consequências.', inverted: true },
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
          { id: 49, text: 'Gosto de estar com pessoas ao meu redor.', inverted: false },
          { id: 50, text: 'Faço amizades com facilidade.', inverted: false },
          { id: 51, text: 'Gosto de conhecer pessoas e criar conexões.', inverted: false },
          { id: 52, text: 'Me sinto desconfortável em grupos grandes.', inverted: true },
        ],
      },
      {
        id: 'gregarismo',
        name: 'Gregarismo',
        questions: [
          { id: 53, text: 'Gosto de ser o centro das atenções.', inverted: false },
          { id: 54, text: 'Gosto de participar de eventos e reuniões sociais.', inverted: false },
          { id: 55, text: 'Prefiro estar acompanhada a ficar sozinha.', inverted: false },
          { id: 56, text: 'Não tenho interesse em conhecer pessoas novas.', inverted: true },
        ],
      },
      {
        id: 'assertividade',
        name: 'Assertividade',
        questions: [
          { id: 57, text: 'Costumo tomar a iniciativa nas situações, sem esperar os outros.', inverted: false },
          { id: 58, text: 'Me sinto à vontade para falar na frente de um grupo.', inverted: false },
          { id: 59, text: 'Expresso minha opinião com segurança, mesmo quando é diferente da maioria.', inverted: false },
          { id: 60, text: 'Evito assumir o papel de liderança em grupos.', inverted: true },
        ],
      },
      {
        id: 'atividade',
        name: 'Atividade',
        questions: [
          { id: 61, text: 'Sou uma pessoa cheia de energia.', inverted: false },
          { id: 62, text: 'Me sinto melhor quando estou com muita coisa para fazer.', inverted: false },
          { id: 63, text: 'Vivo em um ritmo acelerado e gosto disso.', inverted: false },
          { id: 64, text: 'Prefiro um ritmo de vida mais tranquilo.', inverted: true },
        ],
      },
      {
        id: 'excitacao',
        name: 'Busca por Sensações',
        questions: [
          { id: 65, text: 'Gosto de experimentar coisas que nunca fiz antes.', inverted: false },
          { id: 66, text: 'Procuro experiências que me tirem da zona de conforto.', inverted: false },
          { id: 67, text: 'Gosto de atividades que me deixam animada e agitada.', inverted: false },
          { id: 68, text: 'Prefiro evitar situações que me desafiam demais.', inverted: true },
        ],
      },
      {
        id: 'emocoes_positivas',
        name: 'Emoções Positivas',
        questions: [
          { id: 69, text: 'Me sinto feliz e animada na maior parte do tempo.', inverted: false },
          { id: 70, text: 'Vejo a vida de forma otimista.', inverted: false },
          { id: 71, text: 'Gosto de celebrar as coisas boas com as pessoas que amo.', inverted: false },
          { id: 72, text: 'Costumo esperar o pior das situações.', inverted: true },
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
          { id: 73, text: 'Acredito que a maioria das pessoas tem boas intenções.', inverted: false },
          { id: 74, text: 'Me sinto à vontade para confiar nas pessoas.', inverted: false },
          { id: 75, text: 'Acredito que a maioria das pessoas é honesta.', inverted: false },
          { id: 76, text: 'Fico desconfiada das intenções das pessoas.', inverted: true },
        ],
      },
      {
        id: 'franqueza',
        name: 'Franqueza',
        questions: [
          { id: 77, text: 'Sou direta e falo o que penso.', inverted: false },
          { id: 78, text: 'Expresso o que sinto sem rodeios.', inverted: false },
          { id: 79, text: 'Prefiro dizer a verdade mesmo que ela seja difícil de ouvir.', inverted: false },
          { id: 80, text: 'Costumo esconder o que sinto das pessoas.', inverted: true },
        ],
      },
      {
        id: 'altruismo',
        name: 'Altruísmo',
        questions: [
          { id: 81, text: 'Gosto de ajudar as pessoas ao meu redor.', inverted: false },
          { id: 82, text: 'Me sinto bem quando sou útil para alguém.', inverted: false },
          { id: 83, text: 'Fazer algo por alguém me traz uma satisfação genuína.', inverted: false },
          { id: 84, text: 'Ajudar os outros não é algo que me motiva.', inverted: true },
        ],
      },
      {
        id: 'complacencia',
        name: 'Complacência',
        questions: [
          { id: 85, text: 'Faço o que posso para evitar brigas e desentendimentos.', inverted: false },
          { id: 86, text: 'Prefiro a paz a ter razão.', inverted: false },
          { id: 87, text: 'Prefiro ceder do que entrar em conflito.', inverted: false },
          { id: 88, text: 'Não me incomoda criar conflito quando acho necessário.', inverted: true },
        ],
      },
      {
        id: 'modestia',
        name: 'Modéstia',
        questions: [
          { id: 89, text: 'Não gosto de ficar falando das minhas conquistas.', inverted: false },
          { id: 90, text: 'Prefiro não chamar atenção para mim mesma.', inverted: false },
          { id: 91, text: 'Me relaciono com as pessoas de forma simples, sem me colocar acima de ninguém.', inverted: false },
          { id: 92, text: 'Costumo falar bastante sobre minhas conquistas e qualidades.', inverted: true },
        ],
      },
      {
        id: 'sensibilidade',
        name: 'Sensibilidade',
        questions: [
          { id: 93, text: 'Me importo com o que as pessoas ao meu redor estão sentindo.', inverted: false },
          { id: 94, text: 'Percebo quando alguém precisa de ajuda, mesmo sem pedir.', inverted: false },
          { id: 95, text: 'Consigo me colocar no lugar dos outros com facilidade.', inverted: false },
          { id: 96, text: 'Os sentimentos dos outros não influenciam muito nas minhas decisões.', inverted: true },
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
          { id: 97, text: 'Me preocupo facilmente, mesmo com coisas pequenas.', inverted: false },
          { id: 98, text: 'Fico nervosa com mais frequência do que gostaria.', inverted: false },
          { id: 99, text: 'A ansiedade faz parte do meu dia a dia.', inverted: false },
          { id: 100, text: 'Consigo relaxar e me desligar com facilidade.', inverted: true },
        ],
      },
      {
        id: 'hostilidade',
        name: 'Raiva',
        questions: [
          { id: 101, text: 'Me irrito com facilidade.', inverted: false },
          { id: 102, text: 'Perco a paciência rápido.', inverted: false },
          { id: 103, text: 'Sinto raiva com frequência.', inverted: false },
          { id: 104, text: 'Raramente fico frustrada ou irritada.', inverted: true },
        ],
      },
      {
        id: 'depressao',
        name: 'Depressão',
        questions: [
          { id: 105, text: 'Fico triste com facilidade.', inverted: false },
          { id: 106, text: 'Passo períodos me sentindo para baixo sem motivo claro.', inverted: false },
          { id: 107, text: 'Com frequência me sinto sem energia e sem vontade de nada.', inverted: false },
          { id: 108, text: 'Raramente fico desanimada ou para baixo.', inverted: true },
        ],
      },
      {
        id: 'autoconsciencia',
        name: 'Constrangimento',
        questions: [
          { id: 109, text: 'Me preocupo muito com o que as pessoas pensam de mim.', inverted: false },
          { id: 110, text: 'Críticas me afetam bastante.', inverted: false },
          { id: 111, text: 'Em situações sociais, fico muito preocupada com a impressão que estou causando.', inverted: false },
          { id: 112, text: 'Não me preocupo com a opinião que os outros têm de mim.', inverted: true },
        ],
      },
      {
        id: 'impulsividade',
        name: 'Impulsividade',
        questions: [
          { id: 113, text: 'Ajo antes de pensar nas consequências.', inverted: false },
          { id: 114, text: 'Tenho dificuldade em resistir ao que quero no momento.', inverted: false },
          { id: 115, text: 'A impaciência toma conta de mim com facilidade.', inverted: false },
          { id: 116, text: 'Costumo pensar bem antes de tomar qualquer atitude.', inverted: true },
        ],
      },
      {
        id: 'vulnerabilidade',
        name: 'Vulnerabilidade ao Estresse',
        questions: [
          { id: 117, text: 'O estresse me derruba com facilidade.', inverted: false },
          { id: 118, text: 'Tenho dificuldade em lidar com situações de muita pressão.', inverted: false },
          { id: 119, text: 'Quando as coisas ficam difíceis, sinto vontade de fugir ou me fechar.', inverted: false },
          { id: 120, text: 'Lido bem com situações difíceis e não me deixo abalar por elas.', inverted: true },
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
