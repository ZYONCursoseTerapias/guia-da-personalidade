import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white flex flex-col">
      <header className="py-6 px-6 flex justify-center">
        <div className="text-center">
          <p className="text-brand-dark text-sm font-medium tracking-widest uppercase">Sandrä Costa</p>
          <p className="text-gray-500 text-xs tracking-wider">Terapeuta Holística / Comportamental</p>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-2xl w-full text-center space-y-8">

          <div className="inline-flex items-center gap-2 bg-brand-light/30 text-brand-dark px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-medium inline-block"></span>
            Baseado no Big Five
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              Guia da<br />
              <span className="text-brand-medium">Personalidade</span>
            </h1>
            <div className="w-16 h-1 bg-brand-cream mx-auto rounded-full"></div>
          </div>

          {/* Big Five intro */}
          <div className="card text-left space-y-4">
            <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider">O que é o Big Five?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              O Big Five é um modelo de mapeamento da personalidade que organiza as características humanas em <strong className="text-brand-dark">cinco grandes traços</strong>: Abertura à Experiência, Conscienciosidade, Extroversão, Amabilidade e Neuroticismo. Cada um desses traços descreve uma dimensão do comportamento humano, revelando como cada pessoa tende a pensar, sentir e agir nas mais diversas situações da vida.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              O que torna esse modelo tão especial é que ele não coloca as pessoas em caixas. Cada traço é medido em uma <strong className="text-brand-dark">escala variável</strong>, o que significa que você pode apresentar mais ou menos de cada característica. Essa combinação de níveis é única em cada pessoa e forma o seu perfil individual.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Para ir além da superfície, cada traço se divide em <strong className="text-brand-dark">6 facetas</strong>. As facetas são aspectos mais específicos dentro de cada traço e mostram com muito mais precisão como você se comporta nos relacionamentos, no trabalho, na forma como lida com as emoções e nas decisões do cotidiano. Ao todo, são <strong className="text-brand-dark">30 características</strong> que compõem o seu perfil de personalidade completo.
            </p>
          </div>

          {/* About the test */}
          <div className="space-y-4 text-gray-600 text-base leading-relaxed max-w-xl mx-auto">
            <p>
              O <strong className="text-brand-dark">Guia da Personalidade</strong> foi criado para ajudar você a entender melhor seus padrões de comportamento, suas preferências naturais e a forma como se relaciona com o mundo ao seu redor.
            </p>
            <p>Não existem respostas certas ou erradas.</p>
            <p>
              O mais importante é que você responda de forma <strong className="text-brand-dark">espontânea</strong>, sem pensar demais, apenas escolhendo a alternativa que mais se aproxima do que você sente ou faz no dia a dia.
            </p>
            <p>O processo é simples: você verá algumas afirmações e deverá indicar o quanto concorda ou discorda de cada uma.</p>
            <p>Apenas siga sua intuição e confie na primeira resposta que vier à sua mente.</p>
            <p>
              Ao final, você terá um mapa que te ajudará a enxergar com mais clareza suas forças, seus desafios e os caminhos para desenvolver ainda mais o que já faz parte de você.
            </p>
          </div>

          {/* Emotional state notice */}
          <div className="bg-brand-cream/30 border border-brand-cream rounded-2xl px-6 py-4 text-left max-w-xl mx-auto space-y-1">
            <p className="text-sm font-semibold text-brand-dark">⚠ Atenção antes de começar</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Se você viveu alguma situação emocionalmente intensa nas últimas 24 horas, seja algo positivo ou negativo, recomendamos aguardar 48 horas antes de responder. Momentos de grande emoção podem influenciar suas respostas e alterar o resultado.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="card text-center py-4">
              <p className="text-2xl font-bold text-brand-dark">120</p>
              <p className="text-xs text-gray-500 mt-1">afirmações</p>
            </div>
            <div className="card text-center py-4">
              <p className="text-2xl font-bold text-brand-dark">5</p>
              <p className="text-xs text-gray-500 mt-1">traços</p>
            </div>
            <div className="card text-center py-4">
              <p className="text-2xl font-bold text-brand-dark">6</p>
              <p className="text-xs text-gray-500 mt-1">facetas</p>
            </div>
          </div>

          <div className="pt-4">
            <button onClick={() => navigate('/registro')} className="btn-primary text-lg px-12 py-4">
              Iniciar meu Teste
            </button>
            <p className="text-xs text-gray-400 mt-4">Gratuito · Confidencial · Resultado imediato</p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Sandrä Costa · Terapeuta Holística / Comportamental
      </footer>
    </div>
  )
}
