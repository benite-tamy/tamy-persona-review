import SectionHeader from '../components/SectionHeader.jsx'

const sins = [
  { icon: '🔥', name: 'Ira', score: 5, desc: 'Raiva da morte silenciosa, sistemas antiquados, contador 45d atrasado', color: 'bg-red-500' },
  { icon: '😴', name: 'Preguiça', score: 5, desc: 'Foto = despesa em 30s. Daily P&L sem abrir nada. Zero esforço.', color: 'bg-orange-500' },
  { icon: '💰', name: 'Avareza', score: 4, desc: 'ROI 5x. R$3-9k/mês a mais. "Lucre mais sem vender mais."', color: 'bg-amber-500' },
  { icon: '👀', name: 'Inveja', score: 3, desc: 'Benchmarks existem mas falta "seu concorrente já usa e precifica melhor"', color: 'bg-yellow-500' },
  { icon: '👑', name: 'Vaidade', score: 3, desc: '"Ser reconhecido como empresário" — falta posicionar como status/exclusividade', color: 'bg-purple-500' },
  { icon: '🍕', name: 'Gula', score: 2, desc: 'Falta stack de valor: mais lucro + mais tempo + mais dados + mais controle', color: 'bg-pink-500' },
  { icon: '💞', name: 'Luxúria', score: 2, desc: 'Desejo por liberdade — estar em casa às 20h, tirar férias. Falta mostrar o "dia depois"', color: 'bg-rose-500' },
]

const childInner = [
  { icon: '🎮', name: 'Diversão', score: 4, desc: 'Gamificação Duolingo: streaks, badges, Tamy Score, ranking anônimo. Produto que vicia pelo lado positivo.', color: 'bg-blue-500' },
  { icon: '🏆', name: 'Conquista', score: 5, desc: 'Badge "CMV Killer". "Restaurante Inteligente 🏅". "Lenda da Gestão 👑". Progressão visível.', color: 'bg-indigo-500' },
  { icon: '❤️', name: 'Pertencimento', score: 4, desc: 'Comunidade "Donos Inteligentes" no WhatsApp. "Você não está sozinho — 847 donos já estão na jornada."', color: 'bg-red-400' },
  { icon: '🔍', name: 'Curiosidade', score: 4, desc: '"Seu CMV está 8pp acima do benchmark. Quer ver o que está puxando para cima?" — hook permanente.', color: 'bg-cyan-500' },
  { icon: '🌟', name: 'Esperança', score: 5, desc: 'Pedro: "Eu vivê isso. Se ele saiu, você sai." Antes/depois real. Histórias de Carlos e Márcia reais.', color: 'bg-yellow-400' },
  { icon: '🛡️', name: 'Segurança', score: 5, desc: 'Garantia 30 dias. WhatsApp (já usa 50x/dia). Nenhum app novo. Sem risco de adoção.', color: 'bg-green-500' },
  { icon: '✨', name: 'Surpresa', score: 3, desc: '"Seu faturamento de dezembro vai ser X% maior — sazonalidade histórica." Insight que choca pelo acerto.', color: 'bg-violet-500' },
]

const ScoreBar = ({ score, color }) => (
  <div className="flex items-center gap-2 mt-1.5">
    <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
      <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${(score/5)*100}%` }} />
    </div>
    <span className="text-xs font-bold text-gray-600 w-6 shrink-0">{score}/5</span>
  </div>
)

export default function SexyCanvas() {
  const totalSin = sins.reduce((s, { score }) => s + score, 0)
  const totalChild = childInner.reduce((s, { score }) => s + score, 0)

  return (
    <div>
      <SectionHeader
        label="🔥 Sexy Canvas — Análise Emocional"
        title="Sexy Canvas Aplicado à Tamy"
        desc="Metodologia de André Diamand: 14 dimensões emocionais (7 Pecados Capitais + 7 Criança Interior). Baseado em Freud — ID, Ego, Superego."
        labelColor="text-red-600"
      />

      {/* Score overview */}
      <div className="reveal grid grid-cols-2 gap-3 mb-6">
        <div className="card p-4 text-center">
          <div className="text-3xl font-black text-red-500 mb-1">{totalSin}/35</div>
          <div className="text-xs text-gray-500">Pecados Capitais (ID)</div>
          <div className="mt-2 bg-red-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(totalSin/35)*100}%` }} />
          </div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-3xl font-black text-blue-500 mb-1">{totalChild}/35</div>
          <div className="text-xs text-gray-500">Criança Interior (Ego/Superego)</div>
          <div className="mt-2 bg-blue-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${(totalChild/35)*100}%` }} />
          </div>
        </div>
      </div>

      {/* Sins */}
      <div className="reveal mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-0.5 flex-1 bg-red-200" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 shrink-0">7 Pecados Capitais — Gatilhos do ID</span>
          <div className="h-0.5 flex-1 bg-red-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sins.map(({ icon, name, score, desc, color }) => (
            <div key={name} className="bg-white rounded-2xl border border-red-100 shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-bold text-gray-900">{name}</span>
                </div>
              </div>
              <ScoreBar score={score} color={color} />
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Child inner */}
      <div className="reveal mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-0.5 flex-1 bg-blue-200" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 shrink-0">7 Criança Interior — Ego & Superego</span>
          <div className="h-0.5 flex-1 bg-blue-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {childInner.map(({ icon, name, score, desc, color }) => (
            <div key={name} className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-bold text-gray-900">{name}</span>
                </div>
              </div>
              <ScoreBar score={score} color={color} />
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnosis */}
      <div className="reveal space-y-3">
        <div className="card p-4 border-l-4 border-red-400">
          <h4 className="font-bold text-gray-900 text-sm mb-1">🔥 Pontos Fortes — Explorar imediatamente</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Ira (5/5):</strong> "Você merece saber onde vai o seu dinheiro." Raiva é energia de conversão — use nas headlines.
            <strong> Preguiça (5/5):</strong> Foto no WhatsApp → despesa registrada em 30s. Zero esforço é o produto, não o pitch.
            <strong> Conquista (5/5):</strong> Gamificação já está construída — use badges como CTAs de ativação.
            <strong> Segurança (5/5):</strong> Garantia 30 dias + zero app novo = elimina objeção de risco principal.
            <strong> Esperança (5/5):</strong> Pedro é a prova social viva. "Eu vivî 40+ restaurantes — e sei o caminho."
          </p>
        </div>
        <div className="card p-4 border-l-4 border-amber-400">
          <h4 className="font-bold text-gray-900 text-sm mb-1">⚠️ Lacunas — Trabalhar no copy e produto</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Luxúria (2/5):</strong> Falta o "dia depois" — mostrar Carlos chegando em casa às 21h. Mostrar Márcia tirando férias.
            <strong> Vaidade (3/5):</strong> "Restaurante Inteligente 🏅" precisa virar um selo social — Instagram-worthy.
            <strong> Gula (2/5):</strong> Bundle de valor ainda não está claro no pitch: lucro + tempo + dados + crédito + comunidade + peace of mind.
          </p>
        </div>
        <div className="card p-4 border-l-4 border-purple-400">
          <h4 className="font-bold text-gray-900 text-sm mb-1">🎯 Headline Proposta (baseada no canvas)</h4>
          <div className="space-y-2 text-xs">
            <div className="bg-gray-900 rounded-xl p-3">
              <p className="text-white font-bold">"Você trabalha 18h/dia. Merece saber o lucro real — agora, no WhatsApp."</p>
              <p className="text-gray-400 text-xs mt-1">Aciona: Ira + Preguiça + Conquista</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-3">
              <p className="text-white font-bold">"Em 5 minutos, você descobre quanto está perdendo por mês. Grátis."</p>
              <p className="text-gray-400 text-xs mt-1">Aciona: Curiosidade + Avareza + Segurança</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-3">
              <p className="text-white font-bold">"Pedro tinha 40 restaurantes sem saber o lucro real. Hoje, nenhum passa do dia 3 sem alerta da Tamy."</p>
              <p className="text-gray-400 text-xs mt-1">Aciona: Esperança + Pertencimento + Ira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
