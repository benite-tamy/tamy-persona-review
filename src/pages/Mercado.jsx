import SectionHeader from '../components/SectionHeader.jsx'
import Panel from '../components/Panel.jsx'
import StatCard from '../components/StatCard.jsx'

const dados = [
  { dado: 'Faturamento food service BR', valor: 'R$495B/ano (2025)', fonte: 'ABRASEL' },
  { dado: 'Estabelecimentos ativos', valor: '1,8M+', fonte: 'ABRASEL 2025' },
  { dado: 'Independentes', valor: '77% do total', fonte: 'ABRASEL' },
  { dado: 'Empregos diretos', valor: '4,9M (7,9% dos formais)', fonte: 'ABRASEL' },
  { dado: 'Inadimplência no setor', valor: '41%', fonte: 'ABRASEL' },
  { dado: 'Fecham em 2 anos', valor: '~30%', fonte: 'SEBRAE' },
  { dado: 'Fecham em 5 anos', valor: '~62,7%', fonte: 'SEBRAE' },
  { dado: 'Margem líquida média', valor: '~10% (ideal: 10-20%)', fonte: 'SEBRAE/Mercado' },
  { dado: 'Operam como MEI', valor: '68%', fonte: 'Food Connection' },
  { dado: 'WhatsApp no Brasil', valor: '169M+ usuários', fonte: 'DataReportal 2025' },
  { dado: 'Delivery crescimento 2025', valor: '+11%', fonte: 'IFB' },
  { dado: 'Transações delivery digitais', valor: '74%', fonte: 'IFB' },
  { dado: 'Empresas food service lideradas por mulheres', valor: '52,7%', fonte: 'ABRASEL 2025' },
  { dado: 'Delivery/marmitarias lideradas por mulheres', valor: '67,34%', fonte: 'ABRASEL 2025' },
]

const planos = [
  {
    name: 'Essencial',
    price: 'R$189,90',
    period: '/mês',
    badge: 'ICP Alpha — Self-service',
    badgeBg: 'bg-purple-100 text-purple-700',
    color: 'border-purple-500',
    gradient: 'from-purple-600 to-purple-700',
    tagline: 'Faça você mesmo com IA ao lado',
    target: 'Carlos — Bar, lanchonete, self-service, marmitaria, dark kitchen',
    faturamento: 'R$30–100k/mês',
    features: [
      'P&L diário via WhatsApp (sem app, sem login)',
      'OCR de notas e compras por foto',
      'Alertas proativos de CMV e anomalias',
      'Benchmarks por segmento (150+ KPIs)',
      'Streak + badges Duolingo-style',
      'Relatório semanal automatizado',
      '6 agentes especializados (111+ skills)',
      'Open Finance (bank sync via Pluggy)',
    ],
    cta: 'Comece sozinho — a IA guia tudo',
    valueEq: 'Menos que 1 prato/dia = ROI de 5x no primeiro mês',
  },
  {
    name: 'Concierge',
    price: 'R$549,90',
    period: '/mês',
    badge: 'ICP Beta — High-touch',
    badgeBg: 'bg-blue-100 text-blue-700',
    color: 'border-blue-500',
    gradient: 'from-blue-600 to-blue-700',
    tagline: 'A equipe faz tudo por você',
    target: 'Márcia — Restaurante casual, pizzaria, hamburgueria premium',
    faturamento: 'R$100–400k/mês',
    features: [
      'Tudo do Essencial +',
      'Onboarding completo: equipe preenche primeiros dados',
      'Gerente de conta dedicado (Pedro/equipe)',
      'Call semanal de review de KPIs',
      'Relatório profissional mensal (PDF)',
      'Análise profunda por prato/unidade',
      'Integração com PDV/banco (configurada pela equipe)',
      'Priority support WhatsApp (resposta < 2h)',
    ],
    cta: 'A equipe faz tudo — você só decide',
    valueEq: 'Equivalente a 2h de contador — ROI de 8-15x para Beta ICPs',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'R$349,90',
    period: '/mês + R$19,90/unidade extra',
    badge: 'ICP Gamma — Multi-unidade',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    color: 'border-emerald-500',
    gradient: 'from-emerald-600 to-emerald-700',
    tagline: 'Visão consolidada multi-unidade',
    target: 'Mini-redes e franquias — 3–10+ unidades',
    faturamento: 'R$400k–1,5M/mês',
    features: [
      'Tudo do Concierge +',
      'Até 10 unidades incluídas',
      'Visão consolidada de holding',
      'Cada loja comparada em tempo real',
      'Relatório cross-unit automatizado',
      'API integrations customizadas',
      'Dedicated success manager',
    ],
    cta: 'Controle total — cada unidade na palma da mão',
    valueEq: 'Equivalente a um analista financeiro que nunca dorme',
  },
]

const cmvBenchmarks = [
  { segmento: 'Bar / petiscos', cmv: '28-35%', margem: '15-25%' },
  { segmento: 'Marmitaria', cmv: '32-38%', margem: '12-20%' },
  { segmento: 'Pizzaria', cmv: '30-36%', margem: '14-22%' },
  { segmento: 'Hamburgueria', cmv: '33-40%', margem: '12-20%' },
  { segmento: 'Self-service', cmv: '35-42%', margem: '10-18%' },
  { segmento: 'Restaurante casual', cmv: '28-35%', margem: '15-25%' },
]

export default function Mercado() {
  return (
    <div>
      <SectionHeader
        label="Dados Compartilhados"
        title="Mercado & Planos"
        desc="Fontes verificadas — ABRASEL, SEBRAE, IFB, DataReportal 2025"
      />

      {/* Big stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 reveal">
        <StatCard value="R$495B" label="TAM food service Brasil" color="text-purple-600" />
        <StatCard value="1,8M+" label="Estabelecimentos ativos" color="text-blue-600" />
        <StatCard value="62,7%" label="Fecham em 5 anos (SEBRAE)" color="text-red-500" />
        <StatCard value="52,7%" label="Empresas lideradas por mulheres" color="text-pink-600" />
      </div>

      {/* Data table */}
      <div className="reveal card overflow-hidden mb-6">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
          <h3 className="font-bold text-gray-900 text-sm">Dados de Mercado Verificados</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-2 text-gray-600 font-semibold">Dado</th>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold">Valor</th>
                <th className="text-left px-4 py-2 text-gray-600 font-semibold hidden sm:table-cell">Fonte</th>
              </tr>
            </thead>
            <tbody>
              {dados.map(({ dado, valor, fonte }, i) => (
                <tr key={dado} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-4 py-2.5 text-gray-700">{dado}</td>
                  <td className="px-4 py-2.5 font-bold text-purple-700">{valor}</td>
                  <td className="px-4 py-2.5 text-gray-400 hidden sm:table-cell">{fonte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* COMPETITIVE MAP */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">O que Seu Carlos Compara — 5 Alternativas Reais</h3>
        <p className="text-gray-500 text-sm mb-4">Quando Carlos avalia a Tamy, ele não compara com o Saipos. Compara com o que usa hoje.</p>
        <div className="overflow-x-auto card">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-3 font-bold text-gray-700">Alternativa</th>
                <th className="text-left p-3 font-bold text-gray-700">Preço/mês</th>
                <th className="text-left p-3 font-bold text-red-600">Por que falha para Carlos</th>
                <th className="text-left p-3 font-bold text-green-600">Vantagem Tamy</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  alt: '📓 Caderno + feeling (atual)',
                  price: 'Grátis',
                  fail: '2h/dia no fechamento manual. Zero insight. Descobre o problema 45 dias depois.',
                  win: 'P&L automático no WhatsApp. 5min/dia. Insight no D1.',
                },
                {
                  alt: '🧾 Contador mensalista',
                  price: 'R$500–1.500/mês',
                  fail: 'Entrega balancete 45 dias depois. Não fala food service. Não dá alerta proativo.',
                  win: '3x mais barato. Tempo real. Benchmarks específicos por segmento.',
                },
                {
                  alt: '💼 Conta Azul / Nibo',
                  price: 'R$89–249/mês',
                  fail: 'Genérico. Não entende CMV, não fala food. Dashboard complexo. Carlos abandona em semanas.',
                  win: 'Especialista food service. WhatsApp (zero fricção). AI proativa.',
                },
                {
                  alt: '📱 Saipos / PDV genérico',
                  price: 'R$150–300/mês',
                  fail: 'Foco operacional (pedidos, caixa). Não resolve P&L, margem real, CMV. Agora é do iFood.',
                  win: 'Financeiro primeiro. "Qual prato dá lucro?" não "quantos pedidos hoje?"',
                },
                {
                  alt: '📊 Planilha do YouTube',
                  price: 'Grátis',
                  fail: 'Carlos já tentou. Configuração complexa, abandona em 2 semanas. Dado morto.',
                  win: 'Zero configuração. Foto no WhatsApp → dado lançado em 30s.',
                },
              ].map(({ alt, price, fail, win }, i) => (
                <tr key={alt} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                  <td className="p-3 font-semibold text-gray-800">{alt}</td>
                  <td className="p-3 text-gray-600 whitespace-nowrap">{price}</td>
                  <td className="p-3 text-red-700 leading-relaxed">{fail}</td>
                  <td className="p-3 text-green-700 leading-relaxed">{win}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-xl border border-orange-200 bg-orange-50 p-3 text-xs text-orange-900">
          <strong>⚠️ Risco iFood+Saipos (Abril 2025):</strong> iFood adquiriu a Saipos e agora tem acesso a 300k+ restaurantes cadastrados. Se lançarem módulo financeiro via Saipos nos próximos 18-24 meses, o canal de distribuição será o maior do setor. Defesa da Tamy: velocidade de PMF + data moat de clientes ativos + especialização financeira que PDV não replica.
        </div>
      </div>

      {/* CMV benchmarks */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Benchmarks de CMV por Segmento</h3>
        <p className="text-gray-500 text-sm mb-4">O que a Tamy usa para gerar o primeiro alerta de valor</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {cmvBenchmarks.map(({ segmento, cmv, margem }) => (
            <div key={segmento} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
              <div className="text-xs font-bold text-gray-700 mb-2">{segmento}</div>
              <div className="flex gap-3">
                <div>
                  <div className="text-xs text-gray-400">CMV ideal</div>
                  <div className="text-sm font-bold text-amber-600">{cmv}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Margem liq.</div>
                  <div className="text-sm font-bold text-green-600">{margem}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UNIT ECONOMICS */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Unit Economics — O Modelo Financeiro</h3>
        <p className="text-gray-500 text-sm mb-4">Por que o negócio é defensável — LTV, CAC e payback calculados</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[
            { label: 'LTV Essencial', value: 'R$3.798', sub: 'Churn 5%/mês → 20 meses avg', color: 'text-purple-600' },
            { label: 'LTV Concierge', value: 'R$6.599', sub: 'Churn 3%/mês → ~33 meses avg', color: 'text-blue-600' },
            { label: 'CAC alvo', value: '< R$500', sub: 'Orgânico < R$200, B2B2C < R$150', color: 'text-green-600' },
            { label: 'Payback', value: '2–3 meses', sub: 'R$500 CAC ÷ R$189,90 = 2,6 meses', color: 'text-amber-600' },
          ].map(({ label, value, sub, color }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className={`text-xl font-black ${color}`}>{value}</div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">{sub}</div>
            </div>
          ))}
        </div>

        <div className="card overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <h4 className="font-bold text-gray-900 text-xs">Modelo de Churn — O Elefante na Sala</h4>
          </div>
          <div className="p-4 space-y-3 text-xs text-gray-600">
            <div className="flex gap-3 items-start">
              <span className="text-red-500 font-bold shrink-0">⚠️</span>
              <div>
                <strong className="text-gray-800">Involuntary churn estrutural:</strong> ~30% dos restaurantes fecham em 2 anos (~1,3%/mês de churn estrutural embutido). Isso não é falha do produto — é o mercado. Mas importa para o modelo.
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-500 font-bold shrink-0">✓</span>
              <div>
                <strong className="text-gray-800">Defesa 1 — ICP com maior sobrevivência:</strong> Beta (R$100-400k/mês) tem taxa de sobrevivência 40% maior que Alpha. Concierge = mais estável.
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-500 font-bold shrink-0">✓</span>
              <div>
                <strong className="text-gray-800">Defesa 2 — Tamy reduz a própria causa de churn:</strong> clientes que usam Tamy têm melhor controle financeiro → menor probabilidade de fechar. O produto que reduz seu próprio churn estrutural.
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0">→</span>
              <div>
                <strong className="text-gray-800">LTV:CAC alvo:</strong> Essencial 7,6x | Concierge 13,2x. SaaS saudável começa em 3x. Tamy está bem posicionado mesmo com churn estrutural.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLANOS */}
      <div className="reveal">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Nossos Planos</h3>
        <p className="text-gray-500 text-sm mb-4">Três planos em produção — self-service para Alpha, concierge para Beta, enterprise para Gamma</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {planos.map(({ name, price, period, badge, badgeBg, color, gradient, tagline, target, faturamento, features, cta, valueEq, popular }) => (
            <div key={name} className={`card-elevated border-t-4 ${color} overflow-hidden`}>
              {popular && (
                <div className="text-center py-1.5 text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, hsl(255,95%,67%), hsl(270,80%,65%))' }}>
                  ⭐ Maior ROI para ICP Beta
                </div>
              )}
              <div className={`p-4 md:p-5 text-white bg-gradient-to-br ${gradient}`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-black">{name}</h3>
                    <p className="text-white/80 text-xs mt-0.5">{tagline}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black">{price}</div>
                    <div className="text-white/70 text-xs">{period}</div>
                  </div>
                </div>
                <span className={`badge-pill ${badgeBg} text-xs`}>{badge}</span>
              </div>

              <div className="p-4 md:p-5">
                <div className="mb-3 text-xs text-gray-600">
                  <strong className="text-gray-800">Para quem:</strong> {target}
                  <br /><strong className="text-gray-800">Faturamento:</strong> {faturamento}
                </div>

                <ul className="space-y-1.5 mb-4">
                  {features.map(f => (
                    <li key={f} className="flex gap-2 text-xs text-gray-700">
                      <span className="text-green-500 shrink-0 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-green-50 rounded-xl p-2.5 border border-green-100 mb-3">
                  <p className="text-xs text-green-700 font-medium">💰 {valueEq}</p>
                </div>

                <div className="bg-gray-900 rounded-xl p-3 text-center">
                  <p className="text-white text-xs font-bold">{cta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-4 reveal rounded-2xl border border-emerald-200 p-4 flex gap-3 items-start"
          style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)' }}>
          <span className="text-2xl shrink-0">🛡️</span>
          <div>
            <p className="font-bold text-emerald-900 text-sm">Garantia de 30 dias — sem perguntas</p>
            <p className="text-emerald-700 text-xs mt-1 leading-relaxed">
              Se em 30 dias a Tamy não trouxer clareza financeira ao seu restaurante, devolvemos 100% do investimento. Sem burocracia, sem processo. Essa garantia existe porque sabemos que o produto entrega — e porque o risco não pode ser do(a) dono(a) que já trabalha 18h/dia.
            </p>
          </div>
        </div>

        {/* Value Equation (Hormozi) */}
        <div className="mt-6 reveal">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Equação de Valor (Hormozi)</h3>
          <Panel style={{ background: '#111827', borderTop: '4px solid #3b82f6' }}>
            <p className="text-white text-xs leading-relaxed mb-4 font-mono">
              VALOR = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)
            </p>
            <div className="space-y-3 text-xs text-gray-200">
              <div>
                <strong className="text-blue-300">Essencial:</strong> Alto valor (sonho + confiança), esforço moderado, delay curto (ativa em D2-D3)
              </div>
              <div>
                <strong className="text-blue-300">Concierge:</strong> Máximo valor (sonho + zero esforço), delay curto, sacrifice mínimo
              </div>
              <div>
                <strong className="text-blue-300">Enterprise:</strong> Máximo valor consolidado + visão de holding, sacrifice zero (delegation)
              </div>
            </div>
          </Panel>
        </div>

        {/* Bonus Stacks */}
        <div className="mt-6 reveal">
          <h3 className="text-lg font-bold text-gray-900 mb-3">O que Vem em Cada Plano</h3>
          <div className="space-y-3">
            {/* Essencial Bonus Stack */}
            <Panel className="border-t-4 border-purple-500">
              <div className="mb-3">
                <h4 className="font-bold text-gray-900 text-sm">Essencial — Inclusos:</h4>
              </div>
              <ul className="space-y-1.5">
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-purple-500 shrink-0 font-bold">✓</span>
                  <span>Calculadora de CMV interativa</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-purple-500 shrink-0 font-bold">✓</span>
                  <span>Benchmarks do setor (150+ indicadores)</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-purple-500 shrink-0 font-bold">✓</span>
                  <span>Daily P&L Card no WhatsApp</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-purple-500 shrink-0 font-bold">✓</span>
                  <span>Acesso à comunidade "Donos Inteligentes"</span>
                </li>
              </ul>
            </Panel>

            {/* Concierge Bonus Stack */}
            <Panel className="border-t-4 border-blue-500">
              <div className="mb-3">
                <h4 className="font-bold text-gray-900 text-sm">Concierge — Tudo do Essencial +</h4>
              </div>
              <ul className="space-y-1.5">
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-blue-500 shrink-0 font-bold">✓</span>
                  <span>Gerente de conta dedicado</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-blue-500 shrink-0 font-bold">✓</span>
                  <span>Relatório mensal de fornecedores</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-blue-500 shrink-0 font-bold">✓</span>
                  <span>Simulação de precificação personalizada</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-blue-500 shrink-0 font-bold">✓</span>
                  <span>Onboarding guiado (setup completo pela equipe)</span>
                </li>
                <li className="flex gap-2 text-xs text-gray-700">
                  <span className="text-blue-500 shrink-0 font-bold">✓</span>
                  <span>Prioridade no suporte — atende em até 2h</span>
                </li>
              </ul>
            </Panel>
          </div>
        </div>

        {/* Positioning Note */}
        <div className="mt-6 reveal rounded-2xl border border-amber-300 p-4"
          style={{ background: 'linear-gradient(135deg, #fef3c7, #fcd34d)' }}>
          <div className="space-y-2 text-xs text-amber-900">
            <p>
              <strong>"Toast+Ramp+Restoke+Duolingo"</strong> é como explicamos a visão para investidores e mercado tech.
            </p>
            <p>
              Para o(a) dono(a) de restaurante, somos simplesmente: <strong>"Sua inteligência financeira no WhatsApp — saiba seu lucro real, reduza custos, tome decisões com dados."</strong>
            </p>
            <p className="pt-1 border-t border-amber-300">
              Duas línguas, uma missão.
            </p>
          </div>
        </div>

        {/* Visão de Futuro */}
        <div className="mt-6 reveal rounded-2xl border border-teal-200 p-4"
          style={{ background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' }}>
          <p className="font-bold text-teal-900 text-sm mb-2">🚀 Visão de Futuro</p>
          <p className="text-teal-800 text-xs leading-relaxed">
            Tiramos as pessoas e deixamos 100% IA recebendo, preenchendo, automatizando e gerenciando tudo. Gerentes de conta viram suporte/CS. Modelo Toast+Ramp+Restoke+Duolingo: <strong>SaaS inteligente</strong> (Ramp spending intelligence + Restoke ops) → <strong>Plataforma gamificada</strong> (Duolingo engagement) → <strong>Fintech completa</strong> (Toast endgame) → <strong>PDV integrado</strong> (futuro). Quando atingirmos 10k clientes, dados de margem por segmento da Tamy valem mais que qualquer pesquisa de mercado no Brasil.
          </p>
        </div>

        {/* Roadmap */}
        <div className="mt-6 reveal">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Roadmap — 3 Passos</h3>

          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <Panel className="flex-1 border-t-4 border-purple-500">
                <h4 className="font-bold text-gray-900 text-sm mb-1">SaaS Inteligente (2026)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ramp spending intelligence, OCR, Restoke food costing, Duolingo gamificação. WhatsApp-first.
                </p>
              </Panel>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <Panel className="flex-1 border-t-4 border-blue-500">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Plataforma Operacional (2027)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Restoke++ inventário/fornecedores, Ramp++ benchmarks, Duolingo++ comunidade. Data moat.
                </p>
              </Panel>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
              <Panel className="flex-1 border-t-4 border-emerald-500">
                <h4 className="font-bold text-gray-900 text-sm mb-1">Fintech + PDV (2028-29)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Toast endgame: antecipação, crédito PJ, conta digital, PDV próprio.
                </p>
              </Panel>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>Por quê:</strong> Toast gera 80%+ da receita em fintech. Ramp salva $16B+ via spending intelligence. Restoke elimina back-of-house manual. Duolingo retém 30M+ DAU com gamificação. <strong>Tamy combina as 4 forças.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
