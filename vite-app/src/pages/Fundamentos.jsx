import SectionHeader from '../components/SectionHeader.jsx'
import Panel from '../components/Panel.jsx'

const valores = [
  { title: 'Valor em minutos, não semanas', desc: 'Se o produto não entrega valor em 5 minutos, a gente falhou. Onboarding radical é inegociável.', color: 'border-blue-500' },
  { title: 'AI que age, não só reporta', desc: 'Não é dashboard bonito. É copilot proativo como Ramp: spending intelligence automatizada, insights prescritivos, gamificação Duolingo. "Seu CMV subiu 4% — quer ver o que mudou?"', color: 'border-purple-500' },
  { title: 'Obsessão pelo(a) dono(a) independente', desc: 'O cara que acorda 5h e dorme 1h. A mãe solo que acorda 5h pra levar filho na escola. Todo produto passa pelo filtro: "facilita a vida DELA? E DELE?"', color: 'border-emerald-500' },
  { title: 'Verdade brutal com compaixão', desc: '"Você está perdendo R$3.200/mês nesse prato." Mas sempre com o caminho: "Se ajustar o preço em 12%, a margem volta."', color: 'border-amber-500' },
  { title: 'Engenharia como vantagem competitiva', desc: 'AI-first de verdade — 111+ skills, 6 agentes, 254+ test files, 4-layer memory. Profundidade técnica que incumbentes não copiam em 12 meses.', color: 'border-red-500' },
  { title: 'Velocidade > Perfeição', desc: 'Ship rápido, aprenda rápido, corrija rápido. 80% no mercado > 100% na garagem. Nosso risco é execução comercial, não técnica.', color: 'border-slate-500' },
]

const techStack = [
  { label: 'Frontend', value: 'React 19 + Next.js 15 + Vite + Tailwind CSS' },
  { label: 'Backend', value: 'NestJS + FastAPI + Go' },
  { label: 'AI / Agentes', value: 'LangGraph + 6 agentes, 111+ skills' },
  { label: 'Memória', value: '4-layer: Working (Redis), Episodic (PostgreSQL), Semantic (Weaviate), Business (Redis)' },
  { label: 'Dados', value: 'PostgreSQL + Redis + Weaviate + Neo4j' },
  { label: 'Mensageria', value: 'RabbitMQ' },
  { label: 'Testes', value: '254+ test files, 1661+ unit tests' },
  { label: 'Infra', value: 'Turborepo monorepo, Docker, CI/CD' },
  { label: 'Multimodal', value: '16 skills (OCR, áudio, PDF, planilhas, batch)' },
  { label: 'Open Finance', value: 'Pluggy (Phase 1 completo: bank sync; Phase 2: AI categorization; Phase 3: PIX)' },
  { label: 'Canal', value: 'WhatsApp Business API (principal), Web, Mobile' },
]

const agentes = [
  { name: 'Finance Agent', skills: '33+ skills', desc: 'P&L, CMV, fluxo de caixa, conciliação' },
  { name: 'Analytics Agent', skills: '16+ skills', desc: 'Benchmarks, insights, relatórios' },
  { name: 'Operations Agent', skills: '11+ skills', desc: 'Estoque, fornecedores, prep, desperdício' },
  { name: 'Menu Agent', skills: '6+ skills', desc: 'Engenharia de cardápio, precificação' },
  { name: 'Workflow Agent', skills: '18+ skills', desc: 'Automações, processos, rotinas' },
  { name: 'General Agent', skills: '3+ skills', desc: 'Orquestração e fallback geral' },
]

export default function Fundamentos() {
  return (
    <div>
      <SectionHeader
        label="Missão 1 — Os Sócios"
        title="Fundamentos da Tamy Food"
        desc="Missão, visão, valores, propósito e objetivos — base estratégica do negócio"
      />

      {/* Missão + Visão */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 reveal">
        <Panel style={{ borderTop: '4px solid hsl(255,55%,52%)' }}>
          <span className="section-label">01 — Missão</span>
          <div className="text-sm font-bold text-purple-700 bg-purple-50 rounded-xl p-3 mb-3">
            Eliminar a morte silenciosa de restaurantes por falta de inteligência financeira e operacional.
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            82% dos restaurantes que fecham citam gestão financeira como causa. Não é falta de talento culinário, não é falta de cliente. É falta de visibilidade.
          </p>
          <div className="bg-gray-50 rounded-xl p-3 border-l-4 border-purple-400">
            <p className="text-xs text-gray-700 italic leading-relaxed">
              "Democratizar inteligência financeira e operacional para negócios de alimentação na América Latina, usando AI para que nenhum restaurante feche por falta de informação — começando pelo Brasil."
            </p>
          </div>
        </Panel>

        <Panel style={{ borderTop: '4px solid #2563EB' }}>
          <span className="section-label text-blue-600">02 — Visão de Futuro</span>
          <div className="text-sm font-bold text-blue-700 bg-blue-50 rounded-xl p-3 mb-3">
            Ser o sistema operacional completo — financeiro, operacional e fintech — de todo negócio de alimentação independente na América Latina.
          </div>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600 shrink-0">5 anos:</span>
              <span>50.000+ restaurantes na LATAM. Embedded finance gerando 2-3x o ARR de SaaS. O "Toast+Ramp+Restoke+Duolingo da gastronomia LATAM".</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-600 shrink-0">10 anos:</span>
              <span>Tamy é sinônimo de gestão inteligente para food service na LatAm. PDV integrado como extensão natural.</span>
            </div>
          </div>
        </Panel>
      </div>

      {/* Propósito + Objetivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 reveal">
        <Panel style={{ borderTop: '4px solid #059669' }}>
          <span className="section-label text-emerald-600">04 — Propósito Real</span>
          <div className="text-sm font-bold text-emerald-700 bg-emerald-50 rounded-xl p-3 mb-3">
            O propósito real é econômico e social ao mesmo tempo.
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            41% dos estabelecimentos de food service estão inadimplentes (ABRASEL). ~62,7% não sobrevivem 5 anos (SEBRAE). O propósito da Tamy não é "vender software" — é <strong>reduzir a taxa de mortalidade de restaurantes independentes no Brasil</strong>.
          </p>
        </Panel>

        <Panel style={{ borderTop: '4px solid #F59E0B' }}>
          <span className="section-label text-amber-600">05 — Objetivo de Verdade</span>
          <div className="text-sm font-bold text-amber-700 bg-amber-50 rounded-xl p-3 mb-3">
            Construir a empresa de tecnologia para food service mais importante da América Latina.
          </div>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="bg-green-50 rounded-lg p-2 border-l-2 border-green-400">
              <strong className="text-green-700">O que já temos:</strong> Produto técnico robusto (111+ skills, 6 agentes, 254+ test files). Motor de Ferrari na garagem.
            </div>
            <div className="bg-amber-50 rounded-lg p-2 border-l-2 border-amber-400">
              <strong className="text-amber-700">O que falta:</strong> GTM execution — ir ao mercado, validar PMF, construir máquina de aquisição.
            </div>
          </div>
        </Panel>
      </div>

      {/* Valores */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">03 — Valores e Princípios na Prática</h3>
        <p className="text-gray-500 text-sm mb-4">O que defendemos e como operamos no dia a dia</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {valores.map(({ title, desc, color }) => (
            <Panel key={title} className={`border-t-4 ${color}`}>
              <h4 className="font-bold text-gray-900 text-sm mb-2">{title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
            </Panel>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Stack Técnico</h3>
        <p className="text-gray-500 text-sm mb-4">Arquitetura do monorepo Tamy Food</p>
        <Panel>
          <div className="divide-y divide-gray-100">
            {techStack.map(({ label, value }) => (
              <div key={label} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
                <span className="text-xs font-bold text-purple-700 w-28 shrink-0 pt-0.5">{label}</span>
                <span className="text-xs text-gray-600 leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* 6 Agentes */}
      <div className="reveal">
        <h3 className="text-lg font-bold text-gray-900 mb-1">6 Agentes Especializados</h3>
        <p className="text-gray-500 text-sm mb-4">111+ skills total distribuídas em 6 agentes LangGraph</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agentes.map(({ name, skills, desc }) => (
            <div key={name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, hsl(255,95%,67%), hsl(270,80%,65%))' }}>
                🤖
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{name}</div>
                <div className="text-purple-600 text-xs font-semibold">{skills}</div>
                <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
