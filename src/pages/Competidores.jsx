import SectionHeader from '../components/SectionHeader.jsx'
import Panel from '../components/Panel.jsx'
import StatCard from '../components/StatCard.jsx'

/* ─── DATA ─── */

const marketSignals = [
  {
    date: 'Abr/2025',
    event: 'iFood adquire Saipos + OPDV + 3S Checkout',
    signal: 'Gestao e estrategica para delivery. iFood quer o "all in one". Valida o mercado.',
    tamyResponse: 'Janela de 12-18 meses antes de bundle possivel. Prioridade: stickiness via open finance e literacia financeira.',
    icon: '🍕',
  },
  {
    date: 'Nov/2025',
    event: 'iFood lanca "Gerente Financeiro" com Gen AI no WhatsApp',
    signal: 'iFood validou AI conversacional para financas de restaurantes no Brasil. O padrao de UX e identico ao da Tamy. Mercado aquecendo.',
    tamyResponse: 'Gerente Financeiro so ve dinheiro dentro do iFood Pago. Nao faz P&L, CMV, margem por prato. Tamy cruza TODOS os canais — esse e o moat.',
    icon: '🏦',
  },
  {
    date: 'Fev/2026',
    event: 'Takeat capta R$15M Serie A — "a Toast brasileira"',
    signal: 'Investidores validam vertical SaaS food service BR. Takeat tem DRE + CMV por prato. Competidor mais proximo tecnicamente.',
    tamyResponse: 'Takeat e PDV+financeiro, AI rasa (relatorio automatico). Tamy e AI-native com chat-first, 79 skills e IA que ensina. Janela de 12-18 meses.',
    icon: '🚀',
  },
  {
    date: 'Out/2025',
    event: 'Toast lanca Toast IQ (AI conversacional)',
    signal: 'O maior POS do mundo validou AI-first. Operadores de restaurante adotam chat.',
    tamyResponse: 'Validacao global do modelo Tamy. Somos a versao BR, acessivel e especializada.',
    icon: '🤖',
  },
  {
    date: 'Jul/2025',
    event: 'Stone vende Linx para TOTVS por R$3,05B',
    signal: 'Empresas de pagamento nao conseguem construir software vertical. Especializacao vence.',
    tamyResponse: 'Vertical SaaS + AI especializado e a aposta certa. Nao tente ser generico.',
    icon: '💳',
  },
  {
    date: '2026',
    event: 'Split Payment (Reforma Tributaria)',
    signal: 'Impostos deduzidos automaticamente na venda reduzem capital de giro. Mais controle financeiro e urgente.',
    tamyResponse: 'Tamy prepara Carlos para o Split Payment com fluxo de caixa preditivo.',
    icon: '🏛️',
  },
]

const brCompetitors = [
  {
    name: 'iFood (Cris + Gerente Financeiro)',
    owner: 'iFood',
    clients: '300k+ restaurantes na plataforma',
    pricing: 'Incluso no iFood Pago (gratis para quem usa)',
    focus: '"Cris" = metricas iFood no WhatsApp. "Gerente Financeiro" = banking conversacional via GenAI (PIX, boletos, saldo, antecipacao)',
    aiLevel: 'early',
    weakness: 'So ve dados do ecossistema iFood. Carlos tem Stone, Rappi, caixa, fornecedores — tudo invisivel. Nao faz P&L, CMV, margem por prato. E banking, nao gestao financeira.',
    threat: 'high',
  },
  {
    name: 'Takeat',
    owner: 'Independente (Serie A R$15M, Fev/2026)',
    clients: '3.000',
    pricing: 'A partir de R$149/mes',
    focus: 'PDV + DRE tempo real + CMV por prato + precificacao dinamica + conciliacao bancaria + estoque',
    aiLevel: 'early',
    weakness: 'AI rasa — relatorio automatico via WhatsApp no fechamento de caixa. Nao tem chat-first, nao tem copilot conversacional, nao tem proatividade. Mas tem profundidade financeira e R$15M para iterar.',
    threat: 'high',
  },
  {
    name: 'Saipos',
    owner: 'iFood (desde Abr/2025)',
    clients: '18k-25k',
    pricing: 'A partir de R$219,90/mes',
    focus: 'PDV + Delivery + Integracao iFood/Rappi',
    aiLevel: 'none',
    weakness: 'Zero AI financeira. Saiposbot e chatbot de atendimento, nao copilot. Maior risco e bundle gratis com iFood, nao tecnologia.',
    threat: 'high',
  },
  {
    name: 'F360',
    owner: 'Independente (fat. R$40M em 2024, proj. R$55M em 2025)',
    clients: '15k+ PDVs',
    pricing: 'Nao publico (B2B enterprise)',
    focus: 'Reconciliacao multi-canal para franquias + varejo. R$92M recuperados para clientes. Comecou AI: "Gestor 360" boletim financeiro via WhatsApp + alertas automaticos.',
    aiLevel: 'early',
    weakness: 'ICP e franquia 15+ unidades. Nao serve Carlos nem Marcia. Sem CMV por prato, sem recipe costing, sem NF-e food-specific. AI e suporte, nao core.',
    threat: 'medium',
  },
  {
    name: 'Anota AI',
    owner: 'Independente',
    clients: '70k+ restaurantes',
    pricing: 'A partir de R$99/mes',
    focus: 'WhatsApp bot para pedidos + delivery. Financeiro basico: DRE, caixa, contas a pagar/receber. "Tributa AI" para reforma tributaria.',
    aiLevel: 'early',
    weakness: 'Core e operacional (pedidos), nao financeiro. Sem CMV inteligente, sem margem por prato, sem proatividade financeira. AI e para pedidos, nao para gestao.',
    threat: 'medium',
  },
  {
    name: 'Simpliza',
    owner: 'Independente',
    clients: 'N/D',
    pricing: 'Gratis / R$149 / R$199 por mes',
    focus: 'PDV, delivery, caixa, cardapio digital',
    aiLevel: 'none',
    weakness: 'Ancora freemium dificulta upsell. Blog recomenda ChatGPT como "IA para restaurante" — nao tem AI propria. Sem financeiro profundo.',
    threat: 'low',
  },
  {
    name: 'Sischef',
    owner: 'Independente',
    clients: 'N/D',
    pricing: 'A partir de R$99,99/mes',
    focus: 'Gestao em nuvem generica',
    aiLevel: 'none',
    weakness: 'Posicionamento generico. Suporte e o unico diferencial. Sem AI, sem inovacao visivel.',
    threat: 'low',
  },
  {
    name: 'Consumer PDV',
    owner: 'Independente',
    clients: '30k+',
    pricing: 'Gratis + planos pagos',
    focus: 'PDV, mesas, delivery, fiscal',
    aiLevel: 'none',
    weakness: '15 anos de legado tecnologico. Volume alto, inercia alta. Zero sinal de AI roadmap.',
    threat: 'low',
  },
]

const globalReferences = [
  {
    name: 'Toast IQ',
    country: 'EUA',
    scale: '148k restaurantes',
    what: 'Chat conversacional sobre o negocio inteiro. Executa acoes dentro do POS via linguagem natural.',
    tamyDiff: 'Toast IQ e add-on sobre POS que custa US$110+/mes. Tamy entrega R$189,90 all-in, sem hardware, com 79 skills financeiras especializadas em food service BR.',
    validation: 'O maior POS do mundo construiu chat-first — confirma que AI conversacional para restaurantes e adotavel.',
    color: 'border-blue-500',
  },
  {
    name: 'Restoke AI',
    country: 'Australia',
    scale: '2k+ restaurantes',
    what: 'Foto de nota fiscal → IA atualiza estoque e custo automaticamente. Alertas de mudanca de preco. ROI: -15.6% food cost.',
    tamyDiff: 'Restoke e operacional (back-of-house). Tamy e financeiro e proativo. Restoke nao opera no Brasil, sem Pluggy, sem WhatsApp.',
    validation: 'Frame ROI funciona: "R$8k economizados por semana". Comunicar em reais economizados, nao em features.',
    color: 'border-emerald-500',
  },
  {
    name: 'xtraCHEF by Toast',
    country: 'EUA',
    scale: 'Base Toast',
    what: 'AP automation + food cost management. Captura notas fiscais linha a linha com ML. Alertas de preco configuraveis.',
    tamyDiff: 'Nao opera no Brasil. Nao integra com iFood/Rappi como fonte de receita. Sem open finance para conciliacao bancaria automatica.',
    validation: 'Prova que nota fiscal → custo automatizado e feature com alta disposicao de pagamento em mercados maduros.',
    color: 'border-amber-500',
  },
  {
    name: 'MarginEdge',
    country: 'EUA',
    scale: '10k+ restaurantes',
    what: '99% automacao de codificacao de notas. Forecasting de vendas com 96%+ precisao. P&L diario. US$330/mes.',
    tamyDiff: 'US$330/mes e 10x mais caro que Tamy Essencial. Nao opera no Brasil. Sem WhatsApp. Sem open finance BR.',
    validation: 'Forecasting proativo (o que VAI acontecer) e o proximo gate de valor. Tamy deve ter isso no roadmap Phase 2.',
    color: 'border-purple-500',
  },
]

const dimensions = [
  {
    icon: '🧠',
    dimension: 'AI que age, nao so reporta',
    others: 'iFood Cris envia metricas da plataforma. Takeat manda relatorio no fechamento. F360 envia boletim bi-semanal. Todos reativos ou agendados.',
    tamy: 'Tamy monitora 24/7 e avisa antes de voce perguntar. "Seu CMV subiu 4 pontos — parece que o preco da carne bovina mudou." Voce confirma ou ignora. A IA age, o operador decide.',
    color: 'border-purple-500',
  },
  {
    icon: '🎯',
    dimension: '79 skills financeiras food service',
    others: 'Takeat tem DRE + CMV (mais profundo). Saipos tem DRE basico. F360 reconcilia. Nenhum tem 79 skills integradas.',
    tamy: 'CMV por categoria, margem por prato, DRE por canal (delivery vs. salao), deteccao de desperdicio, analise de sazonalidade, precificacao com impostos. 79 skills treinadas nas especificidades do food service BR.',
    color: 'border-blue-500',
  },
  {
    icon: '🏦',
    dimension: 'Open Finance automatico (Pluggy)',
    others: 'iFood Gerente Financeiro so ve iFood Pago. F360 reconcilia franquias. Takeat tem conciliacao bancaria propria. Nenhum conecta todas as fontes automaticamente.',
    tamy: 'Conecta banco do Carlos via Pluggy. Reconcilia iFood + Rappi + Stone + Pix + caixa com extrato bancario automaticamente. Detecta taxas indevidas e discrepancias. Stickiness imediata.',
    color: 'border-emerald-500',
  },
  {
    icon: '💬',
    dimension: 'Chat-first sobre financas completas',
    others: 'iFood Cris: chat mas so dados iFood. iFood Gerente Financeiro: chat mas so banking. Nenhum tem chat sobre P&L, CMV, margem cruzando todos os canais.',
    tamy: 'Carlos fala "quanto lucrei essa semana?" as 00h30 pelo WhatsApp e tem P&L completo em 30s — iFood + Rappi + salao + caixa + fornecedores + despesas fixas. Com contexto e recomendacao.',
    color: 'border-pink-500',
  },
  {
    icon: '📚',
    dimension: 'IA que ensina, nao so mostra numeros',
    others: 'Mostram numeros. Takeat explica DRE. iFood mostra benchmark da plataforma. Nenhum transforma cada interacao em micro-aula de gestao financeira.',
    tamy: '"Seu CMV esta em 42% — o ideal para bar e 28-35%. CMV significa Custo de Mercadoria Vendida: a cada R$100 vendidos, R$42 viram custo. Se renegociar a carne, economiza R$1.200/mes." O dono sai mais esperto a cada conversa.',
    color: 'border-amber-500',
  },
  {
    icon: '📱',
    dimension: 'Multi-canal nativo BR',
    others: 'iFood Cris: WhatsApp (so iFood). Takeat: WhatsApp (relatorio). Outros: app ou web.',
    tamy: 'WhatsApp + Web + Telegram integrados. 169M+ usuarios de WhatsApp no Brasil. Chat sobre todas as financas, nao so um canal. Carlos ja usa WhatsApp — Tamy vive onde ele ja esta.',
    color: 'border-teal-500',
  },
]

const moats = [
  {
    icon: '📊',
    title: 'Dados financeiros acumulados',
    desc: 'Quanto mais restaurantes usam a Tamy, mais precisos sao os benchmarks de CMV, margem e sazonalidade. Flywheel: mais clientes → benchmarks melhores → mais valor → mais clientes.',
  },
  {
    icon: '🔒',
    title: 'Open Finance conectado = lock-in real',
    desc: 'Uma vez que Carlos conectou o banco, a Tamy reconcilia automaticamente. Desconectar significa voltar ao caderno. Stickiness natural, sem aprisionamento artificial.',
  },
  {
    icon: '🎓',
    title: 'Literacia financeira nao se replica',
    desc: 'O(a) dono(a) que aprendeu com a Tamy o que e CMV, margem de contribuicao e DRE nao quer voltar para sistema "burro". A educacao e o moat mais duravel.',
  },
  {
    icon: '🤖',
    title: '79 skills especializadas = 18+ meses para copiar',
    desc: 'Cada skill e um especialista treinado nas especificidades do food service BR. Nao e um chatbot generico com GPT wrapper — e inteligencia domain-specific construida em meses.',
  },
]

/* ─── HELPERS ─── */

const ThreatBadge = ({ level }) => {
  const map = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    low: 'bg-green-100 text-green-700 border-green-200',
  }
  const labels = { high: 'Alto', medium: 'Medio', low: 'Baixo' }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border ${map[level]}`}>
      {labels[level]}
    </span>
  )
}

const AIBadge = ({ level }) => {
  const map = {
    none: { bg: 'bg-gray-100 text-gray-500', label: 'Sem AI' },
    early: { bg: 'bg-yellow-100 text-yellow-700', label: 'AI Inicial' },
    native: { bg: 'bg-purple-100 text-purple-700', label: 'AI-Native' },
  }
  const { bg, label } = map[level] || map.none
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${bg}`}>{label}</span>
}

/* ─── PAGE ─── */

export default function Competidores() {
  return (
    <div>
      <SectionHeader
        label="Analise Competitiva"
        title="Competidores & Diferenciacao"
        desc="O mercado BR esta acordando para AI (iFood, Takeat, F360 comecaram). Mas nenhum tem AI como core do produto + financeiro multi-canal profundo + canais BR simultaneamente. A Tamy existe na unica interseccao que ninguem ocupa."
        labelColor="text-red-600"
      />

      {/* ── SECTION 1: Por que agora? ── */}
      <div className="reveal mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Por que Agora?</h3>
        <p className="text-gray-500 text-sm mb-4">
          4 eventos que abriram a janela para a Tamy — e definiram o timing de mercado
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {marketSignals.map(({ date, event, signal, tamyResponse, icon }) => (
            <Panel key={date} className="border-t-4 border-purple-500">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{date}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{event}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{signal}</p>
                  <div className="bg-purple-50 rounded-lg p-2 border-l-2 border-purple-400">
                    <p className="text-xs text-purple-800 leading-relaxed">
                      <strong>Resposta Tamy:</strong> {tamyResponse}
                    </p>
                  </div>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>

      {/* ── SECTION 2: Competidores BR ── */}
      <div className="reveal mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Competidores Brasileiros</h3>
        <p className="text-gray-500 text-sm mb-4">
          O mercado BR esta acordando para AI — iFood, Takeat e F360 comecaram. Mas nenhum tem AI como core do produto, e nenhum cruza todos os canais financeiros.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <StatCard value="0" label="Com AI-native como core (nao add-on)" color="text-red-500" />
          <StatCard value="0" label="Com chat financeiro multi-canal proativo" color="text-red-500" />
          <StatCard value="3" label="Comecaram AI em 2025 (iFood, F360, Takeat)" color="text-amber-500" />
          <StatCard value="79+" label="Skills financeiras especializadas da Tamy" color="text-purple-600" />
        </div>

        <div className="space-y-3">
          {brCompetitors.map(({ name, owner, clients, pricing, focus, aiLevel, weakness, threat }) => (
            <Panel key={name} className={`border-l-4 ${threat === 'high' ? 'border-red-500' : threat === 'medium' ? 'border-amber-500' : 'border-green-500'}`}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                <span className="text-xs text-gray-400">({owner})</span>
                <AIBadge level={aiLevel} />
                <ThreatBadge level={threat} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-2">
                <div>
                  <span className="text-gray-400">Clientes:</span>{' '}
                  <span className="text-gray-700 font-semibold">{clients}</span>
                </div>
                <div>
                  <span className="text-gray-400">Preco:</span>{' '}
                  <span className="text-gray-700 font-semibold">{pricing}</span>
                </div>
                <div>
                  <span className="text-gray-400">Foco:</span>{' '}
                  <span className="text-gray-700">{focus}</span>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-2 border-l-2 border-red-300">
                <p className="text-xs text-red-800 leading-relaxed">
                  <strong>Fraqueza:</strong> {weakness}
                </p>
              </div>
            </Panel>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-900">
            <strong>Risco #1 — iFood Convergencia AI:</strong> iFood tem Cris (metricas AI no WhatsApp) + Gerente Financeiro (banking via GenAI) + Saipos (PDV) + OPDV + 3S Checkout. Se combinar tudo num bundle gratis com P&L e CMV, o threat level pula para critico. <strong>Defesa:</strong> Gerente Financeiro so ve iFood Pago. Cris so ve dados iFood. Carlos tem 4+ fontes de receita. Tamy cruza todas. Monitorar releases semanalmente.
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
            <strong>Risco #2 — Takeat com capital:</strong> R$15M em caixa + 3k clientes + DRE/CMV por prato = base tecnica solida. Se adicionarem chat-first AI nos proximos 12-18 meses, viram competidor direto. <strong>Defesa:</strong> 79 skills especializadas levam 18+ meses para replicar. Open Finance (Pluggy) como lock-in. AI educativa como moat cultural.
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
            <strong>Risco #3 — Precificacao vs. bundle gratis:</strong> Se iFood oferecer Saipos gratis, a pergunta e: "Tamy vale R$189,90/mes em cima do que iFood da de graca?" A resposta precisa ser sim com ROI provavel — R$3-9k/mes de margem recuperada vs. R$189,90.
          </div>
        </div>
      </div>

      {/* ── SECTION 3: Referencias Globais ── */}
      <div className="reveal mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-1">O que o Mundo ja Provou</h3>
        <p className="text-gray-500 text-sm mb-4">
          4 empresas globais que validaram AI-first para food service — e o que a Tamy faz diferente
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {globalReferences.map(({ name, country, scale, what, tamyDiff, validation, color }) => (
            <Panel key={name} className={`border-t-4 ${color}`}>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                <span className="text-xs text-gray-400">({country} — {scale})</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">{what}</p>
              <div className="space-y-2">
                <div className="bg-purple-50 rounded-lg p-2 border-l-2 border-purple-400">
                  <p className="text-xs text-purple-800 leading-relaxed">
                    <strong>Tamy faz diferente:</strong> {tamyDiff}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2 border-l-2 border-blue-400">
                  <p className="text-xs text-blue-800 leading-relaxed">
                    <strong>Validacao:</strong> {validation}
                  </p>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>

      {/* ── SECTION 4: A Interseccao Unica ── */}
      <div className="reveal mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-1">A Interseccao Unica da Tamy</h3>
        <p className="text-gray-500 text-sm mb-4">
          Nenhum concorrente brasileiro ocupa esta posicao hoje. A Tamy existe na interseccao de 3 eixos.
        </p>

        {/* 3-axis visual */}
        <div className="rounded-2xl p-5 mb-6" style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { axis: 'Eixo 1', label: 'AI-Native', desc: 'AI faz tudo. Humano confirma.', icon: '🧠' },
              { axis: 'Eixo 2', label: 'Financeiro Profundo', desc: 'Para independentes, nao franquias.', icon: '💰' },
              { axis: 'Eixo 3', label: 'Brasil-First', desc: 'Open Finance + WhatsApp + PIX.', icon: '🇧🇷' },
            ].map(({ axis, label, desc, icon }) => (
              <div key={axis} className="text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-xs text-purple-300 font-semibold">{axis}</div>
                <div className="text-white font-bold text-sm">{label}</div>
                <div className="text-purple-200 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {[
              { who: 'iFood (Cris + Gerente Financeiro)', has: 'Eixo 1 parcial (AI) + Eixo 3 (Brasil)', miss: 'So ve ecossistema iFood. Sem P&L multi-canal, sem CMV por prato, sem educacao financeira.' },
              { who: 'Takeat', has: 'Eixo 2 (financeiro profundo) + Eixo 3 (Brasil)', miss: 'AI rasa (relatorio automatico). Sem chat-first, sem copilot, sem proatividade real.' },
              { who: 'Saipos, Simpliza, Sischef, Consumer', has: 'Eixo 3 (Brasil)', miss: 'Sem AI, sem financeiro profundo. PDV-first.' },
              { who: 'F360', has: 'Eixo 2 parcial + Eixo 3 parcial', miss: 'ICP franquia. AI inicial (boletins). Nao serve independente.' },
              { who: 'Toast IQ, Restoke, MarginEdge', has: 'Eixo 1 (AI) + Eixo 2 (financeiro)', miss: 'Nao operam no Brasil. Sem Pluggy, sem WhatsApp, sem NF-e.' },
              { who: 'Tamy', has: 'Eixo 1 + 2 + 3', miss: 'Unica na interseccao completa: AI-native + financeiro profundo + Brasil-first.' },
            ].map(({ who, has, miss }, i) => (
              <div key={who} className={`rounded-xl p-3 ${who === 'Tamy' ? 'bg-purple-500/30 border border-purple-400/50' : 'bg-white/10'}`}>
                <div className="flex items-start gap-2">
                  {who === 'Tamy' && <span className="text-yellow-300 font-bold shrink-0">★</span>}
                  <div>
                    <span className={`text-xs font-bold ${who === 'Tamy' ? 'text-yellow-200' : 'text-white'}`}>{who}</span>
                    <span className="text-purple-200 text-xs"> — {has}</span>
                    {who !== 'Tamy' && <p className="text-red-300 text-xs mt-0.5">{miss}</p>}
                    {who === 'Tamy' && <p className="text-green-300 text-xs mt-0.5 font-semibold">{miss}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 dimensions comparison */}
        <div className="space-y-3">
          {dimensions.map(({ icon, dimension, others, tamy, color }) => (
            <Panel key={dimension} className={`border-l-4 ${color}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{dimension}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-red-50 rounded-lg p-2">
                      <div className="text-xs font-bold text-red-600 mb-1">Concorrentes</div>
                      <p className="text-xs text-red-800 leading-relaxed">{others}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2">
                      <div className="text-xs font-bold text-green-600 mb-1">Tamy</div>
                      <p className="text-xs text-green-800 leading-relaxed">{tamy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>

      {/* ── SECTION 5: Moats ── */}
      <div className="reveal mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-1">O que Mantem a Tamy na Frente</h3>
        <p className="text-gray-500 text-sm mb-4">
          4 moats que tornam a Tamy mais dificil de copiar a cada dia que passa
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {moats.map(({ icon, title, desc }) => (
            <div key={title} className="card border-l-4 border-purple-500 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 6: AI-First Paradigm ── */}
      <div className="reveal mb-8">
        <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
          <h3 className="text-white font-bold text-base mb-3">🧠 O Paradigma AI-First da Tamy</h3>
          <p className="text-purple-200 text-xs leading-relaxed mb-4">
            A Tamy nao e um sistema com AI embutida. E uma <strong className="text-white">AI com interface humana</strong>.
            A diferenca e fundamental e muda tudo — da UX ao modelo de negocios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {[
              {
                title: 'AI faz',
                desc: 'Categoriza despesas. Calcula P&L. Detecta anomalias. Reconcilia contas. Precifica pratos. Gera DRE. Identifica desperdicio. Prevee fluxo de caixa.',
                color: 'bg-purple-500/30',
              },
              {
                title: 'Humano confirma',
                desc: 'Carlos olha o resultado e diz "ok" ou "corrige isso". Modelo HITL (Human-in-the-Loop). O dono toma a decisao final, mas a IA faz 95% do trabalho.',
                color: 'bg-blue-500/30',
              },
              {
                title: 'AI ensina',
                desc: '"Seu CMV esta em 42%. O ideal para bar e 28-35%. Isso significa que a cada R$100 vendidos, R$42 viram custo de mercadoria." O dono aprende enquanto usa.',
                color: 'bg-emerald-500/30',
              },
            ].map(({ title, desc, color }) => (
              <div key={title} className={`${color} rounded-xl p-3 border border-white/10`}>
                <h4 className="text-white font-bold text-sm mb-2">{title}</h4>
                <p className="text-purple-200 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-xl p-4 border border-white/20">
            <p className="text-white font-bold text-sm mb-2">A Visao: Automacao Completa</p>
            <p className="text-purple-200 text-xs leading-relaxed mb-3">
              Hoje, Carlos fotografa a nota fiscal e a IA categoriza. Amanha, o banco do Carlos esta conectado via Pluggy e a IA ja sabe que a compra aconteceu antes mesmo da foto. Depois de amanha, a IA negocia com fornecedores, agenda pagamentos e otimiza o cardapio automaticamente.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Foto → Despesa em 30s', 'Banco conectado → Conciliacao automatica', 'AI proativa → Alerta antes do problema', 'AI educativa → Dono aprende financeiro', 'AI autonoma → Negocia, paga, otimiza'].map(step => (
                <span key={step} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-purple-500/40 text-purple-100 border border-purple-400/30">
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="reveal rounded-2xl border border-purple-200 p-5"
        style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}>
        <div className="text-center">
          <p className="text-3xl mb-3">🎯</p>
          <h3 className="font-bold text-purple-900 text-base mb-2">
            "iFood te diz que voce vendeu R$12k na plataforma."
          </h3>
          <p className="text-purple-700 text-sm leading-relaxed max-w-lg mx-auto mb-3">
            <strong>Tamy te diz que voce lucrou R$1.400 no total</strong> — cruzando iFood (27% comissao), Rappi, Stone, caixa, fornecedores e custo fixo. E avisa que o prato de file esta te custando R$180 a cada venda. E ensina o que fazer: "Se renegociar o fornecedor de carne, sua margem sobe 3 pontos."
          </p>
          <p className="text-purple-600 text-xs font-semibold">
            Essa e a diferenca entre ferramentas que veem um pedaco e uma IA que ve tudo, faz tudo, e ensina enquanto faz.
          </p>
        </div>
      </div>
    </div>
  )
}
