import SectionHeader from '../components/SectionHeader.jsx'

const sins = [
  { icon: '🔥', name: 'Ira', score: 5, desc: 'Raiva da morte silenciosa, sistemas antiquados, contador 45d atrasado', color: 'bg-red-500' },
  { icon: '😴', name: 'Preguiça', score: 5, desc: 'Foto = despesa em 30s. Daily P&L sem abrir nada. Zero esforço.', color: 'bg-orange-500' },
  { icon: '💰', name: 'Avareza', score: 4, desc: 'ROI 5x. R$3-9k/mês a mais. "Lucre mais sem vender mais."', color: 'bg-amber-500' },
  { icon: '👀', name: 'Inveja', score: 3, desc: 'Benchmarks existem mas falta "seu concorrente já usa e precifica melhor"', color: 'bg-yellow-500' },
  { icon: '👑', name: 'Vaidade', score: 3, desc: '"Ser reconhecido como empresário" — falta posicionar como status/exclusividade', color: 'bg-purple-500' },
  { icon: '🍕', name: 'Gula', score: 2, desc: 'Falta stack de valor: mais lucro + mais tempo + mais dados + mais controle', color: 'bg-pink-500' },
  { icon: '✨', name: 'Luxúria', score: 2, desc: 'Produto prático mas não premium. Falta "seu CFO de IA por R$189/mês"', color: 'bg-rose-500' },
]

const childInner = [
  { icon: '🕊️', name: 'Liberdade', score: 5, desc: 'Core promise: tempo + dinheiro + autonomia. Buscar filho sem culpa.', color: 'bg-sky-500' },
  { icon: '❤️', name: 'Amor', score: 4, desc: '"Voltar a amar o negócio." Pedro viveu a dor. Conexão emocional forte.', color: 'bg-red-400' },
  { icon: '🛡️', name: 'Segurança', score: 4, desc: 'Pedro como prova, modo demo, WhatsApp familiar, LGPD, HITL confirmation.', color: 'bg-green-500' },
  { icon: '🔍', name: 'Curiosidade', score: 3, desc: '"Quanto você perde por mês?" é bom mas falta explorar "descubra" moments.', color: 'bg-cyan-500' },
  { icon: '🤝', name: 'Pertencimento', score: 2, desc: 'ZERO comunidade. Sem "rede de donos inteligentes". Sem tribe.', color: 'bg-indigo-500' },
  { icon: '🎁', name: 'Recompensa', score: 2, desc: 'Sem badges, streaks, milestones, "Tamy Score", relatório de conquistas.', color: 'bg-violet-500' },
  { icon: '🎮', name: 'Diversão', score: 1, desc: 'Gestão financeira = chato. Falta gamificação, rankings, competição saudável.', color: 'bg-blue-500' },
]

const diagItems = [
  {
    tag: 'FORÇAS (5/5)',
    tagColor: 'bg-emerald-100 text-emerald-700',
    borderColor: 'border-emerald-500',
    title: '🔥 Ira + 😴 Preguiça + 🕊️ Liberdade',
    lines: [
      'A tríade perfeita: o(a) dono(a) sente raiva do status quo (morte silenciosa, sistemas falhos), a Tamy resolve com zero esforço (WhatsApp, foto→despesa, P&L automático), e entrega liberdade (tempo, dinheiro, autonomia). Essa combinação é rara e poderosa — é o core positioning da Tamy e não deve mudar.',
      'Ação: Dobrar nessas 3 dimensões em TODA copy, ad, conteúdo e pitch. Sempre começar com Ira (problema), resolver com Preguiça (solução fácil), prometer Liberdade (resultado).',
    ],
  },
  {
    tag: 'FORTES (4/5)',
    tagColor: 'bg-blue-100 text-blue-700',
    borderColor: 'border-blue-500',
    title: '💰 Avareza + ❤️ Amor + 🛡️ Segurança',
    lines: [
      'O ROI está claro (R$3-9k/mês), a conexão emocional é forte (Pedro viveu a dor, "buscar filho sem culpa"), e a segurança existe (modo demo, WhatsApp familiar, HITL). Para chegar a 5/5:',
      'Avareza → "Calculadora de Prejuízo Invisível" como lead magnet viral. Amor → Série "De Volta ao Amor" com histórias reais de donos. Segurança → Garantia "Se não economizar R$500 em 30 dias, devolvemos."',
    ],
  },
  {
    tag: 'MODERADOS (3/5)',
    tagColor: 'bg-amber-100 text-amber-700',
    borderColor: 'border-amber-500',
    title: '👀 Inveja + 👑 Vaidade + 🔍 Curiosidade',
    lines: [
      'Existem elementos mas faltam execução agressiva:',
      'Inveja → "Seu vizinho hamburgueria já reduziu CMV 5% com Tamy. E você?" Benchmark comparativo entre similares. | Vaidade → Selo "Restaurante Inteligente 🏅" para clientes Tamy — status social de usar dados. | Curiosidade → "Descubra seu CMV real em 2 minutos", quiz interativo como entrada de funil.',
    ],
  },
  {
    tag: 'GAPS CRÍTICOS (1-2/5)',
    tagColor: 'bg-red-100 text-red-700',
    borderColor: 'border-red-500',
    title: '🎮 Diversão + 🤝 Pertencimento + 🎁 Recompensa + 🍕 Gula + ✨ Luxúria',
    lines: [
      'Os 5 gaps que separam a Tamy de ser irresistível:',
      '🎮 Diversão (1/5) → Tamy Score (0-100), streaks de registro diário, ranking mensal anonimizado, achievements ("CMV Killer", "Caixa Positivo 30d"). Dono com streak de 30 dias NÃO cancela.',
      '🤝 Pertencimento (2/5) → Comunidade "Donos Inteligentes": grupo WhatsApp por região, benchmark em tempo real, referral como pertencimento ("indique um amigo, ganhem juntos").',
      '🎁 Recompensa (2/5) → Relatório mensal "Suas Conquistas": quanto economizou, horas salvas, margem recuperada. Certificado "Restaurante com Gestão Inteligente" digital.',
      '🍕 Gula (2/5) → Stack de valor em toda copy: "Mais lucro + mais tempo + mais controle + mais dados + mais paz + mais crédito."',
      '✨ Luxúria (2/5) → "Seu CFO de Inteligência Artificial por R$189/mês" — posicionar como luxo acessível. O que só rede de 500 unidades tinha, agora no WhatsApp.',
    ],
  },
]

const ScoreBar = ({ score, color }) => (
  <div className="flex items-center gap-2 mt-1.5">
    <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
      <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${(score / 5) * 100}%` }} />
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
      <div className="reveal grid grid-cols-3 gap-3 mb-6">
        <div className="card p-4 text-center">
          <div className="text-3xl font-black text-red-500 mb-1">{totalSin}/35</div>
          <div className="text-xs text-gray-500">Pecados Capitais (ID)</div>
          <div className="mt-2 bg-red-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(totalSin / 35) * 100}%` }} />
          </div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-3xl font-black text-blue-500 mb-1">{totalChild}/35</div>
          <div className="text-xs text-gray-500">Criança Interior (Ego/Superego)</div>
          <div className="mt-2 bg-blue-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${(totalChild / 35) * 100}%` }} />
          </div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-3xl font-black text-purple-600 mb-1">46/70</div>
          <div className="text-xs text-gray-500">Score Total (66%)</div>
          <div className="mt-2 bg-purple-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '66%' }} />
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
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{icon}</span>
                <span className="font-bold text-gray-900">{name}</span>
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
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 shrink-0">7 Criança Interior — Necessidades do Superego</span>
          <div className="h-0.5 flex-1 bg-blue-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {childInner.map(({ icon, name, score, desc, color }) => (
            <div key={name} className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{icon}</span>
                <span className="font-bold text-gray-900">{name}</span>
              </div>
              <ScoreBar score={score} color={color} />
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnóstico Estratégico */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Diagnóstico Estratégico</h3>
        <p className="text-gray-500 text-sm mb-4">O que já é forte, o que está moderado e os 5 gaps críticos que impedem a Tamy de ser irresistível.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {diagItems.map(({ tag, tagColor, borderColor, title, lines }) => (
            <div key={tag} className={`card p-4 border-t-4 ${borderColor}`}>
              <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${tagColor}`}>{tag}</span>
              <h4 className="font-bold text-gray-900 text-sm mb-2">{title}</h4>
              {lines.map((line, i) => (
                <p key={i} className="text-xs text-gray-600 leading-relaxed mt-1">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Insight de Founder */}
      <div className="reveal rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <h3 className="text-white font-bold text-base mb-3">💡 Insight de Founder: A Equação Sexy da Tamy</h3>
        <p className="text-blue-200 text-xs leading-relaxed mb-3">
          A Tamy já é <strong className="text-white">funcionalmente superior</strong> (79+ skills, 6 agentes, 4-Layer Memory, reflection system). O produto tecnicamente mata qualquer concorrente. Mas sexy ≠ funcional. Sexy é emocional.
        </p>
        <p className="text-blue-200 text-xs mb-3">Os 3 movimentos que transformam a Tamy de "ferramenta útil" em "produto irresistível":</p>
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white text-xs font-bold mb-1">1. Gamificação + Recompensa</p>
            <p className="text-blue-200 text-xs leading-relaxed">
              Tamy Score (0-100), streaks, achievements. Transforma gestão financeira de obrigação em jogo. Diversão (1→4), Recompensa (2→4). Hack de retenção: dono com streak de 30 dias NÃO cancela.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white text-xs font-bold mb-1">2. Comunidade "Donos Inteligentes"</p>
            <p className="text-blue-200 text-xs leading-relaxed">
              Grupo WhatsApp por região, benchmark comparativo em tempo real, cases compartilhados. Pertencimento (2→4). Hack de aquisição: referral orgânico dentro da comunidade.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white text-xs font-bold mb-1">3. Posicionamento Premium</p>
            <p className="text-blue-200 text-xs leading-relaxed">
              "Seu CFO de IA" não é software barato. É luxo acessível — o que a rede de 500 unidades tem, agora no WhatsApp por R$189/mês. Concierge (R$549) = VIP com humano dedicado — vaidade pura. Gula (2→4), Luxúria (2→4).
            </p>
          </div>
        </div>
        <div className="mt-4 bg-white/10 rounded-xl p-3 border border-white/20">
          <p className="text-white font-bold text-sm">Score atual: 46/70 (66%) → Score pós-implementação projetado: 58/70 (83%)</p>
          <p className="text-blue-200 text-xs mt-1">Delta de +12 pontos em 3 sprints de produto.</p>
        </div>
      </div>
    </div>
  )
}
