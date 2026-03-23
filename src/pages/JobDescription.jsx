import SectionHeader from '../components/SectionHeader.jsx'
import Panel from '../components/Panel.jsx'
import StatCard from '../components/StatCard.jsx'
import ExportButtons from '../components/ExportButtons.jsx'
import { exportJobDescriptionToPDF } from '../utils/exportToPDF.js'
import { exportJobDescriptionToDocx } from '../utils/exportToDocx.js'

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PersonaHeader({ initials, badge, name, subtitle, gradient }) {
  return (
    <div className="p-4 md:p-5 rounded-t-2xl" style={{ background: gradient }}>
      <div className="flex gap-3 items-center">
        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        >
          {initials}
        </div>
        <div className="text-white">
          <div className="inline-flex px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold mb-1">
            {badge}
          </div>
          <h3 className="text-lg md:text-xl font-black text-white">{name}</h3>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 mt-4">
      {children}
    </h4>
  )
}

function ResponsabilidadeItem({ number, text, accent }) {
  return (
    <li className="flex gap-2 text-xs text-gray-700">
      <span className={`font-black text-sm ${accent} shrink-0 w-5`}>{number}.</span>
      <span>{text}</span>
    </li>
  )
}

function ObjecaoItem({ question, answer }) {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden">
      <div className="bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
        "{question}"
      </div>
      <div className="bg-green-50 px-3 py-2 text-xs text-green-800 leading-relaxed">
        {answer}
      </div>
    </div>
  )
}

function DiaItem({ time, text, accent }) {
  return (
    <div className="flex gap-2 text-xs text-gray-700">
      <span className={`font-bold ${accent} shrink-0 w-14`}>{time}</span>
      <span>{text}</span>
    </div>
  )
}

function CompetidorTable({ rows, accentHeader }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-xs min-w-[340px]">
        <thead>
          <tr>
            <th className={`text-left px-2 py-1.5 font-bold ${accentHeader} rounded-tl-lg bg-gray-50`}>
              Competidor
            </th>
            <th className="text-left px-2 py-1.5 font-bold text-gray-600 bg-gray-50 rounded-tr-lg">
              Por que falha com essa persona
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ competitor, reason }, i) => (
            <tr key={competitor} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
              <td className="px-2 py-1.5 font-semibold text-gray-800 whitespace-nowrap">{competitor}</td>
              <td className="px-2 py-1.5 text-gray-600 leading-relaxed">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Marcia data
// ---------------------------------------------------------------------------

const marciaResponsabilidades = [
  'Gestao financeira — fechamento de caixa, pagamentos, fornecedores, DAS/MEI',
  'Producao e qualidade — supervisao de 12 funcionarios, 320 marmitas/dia',
  'Marketing e vendas — grupos WhatsApp, iFood, Rappi, Instagram',
  'Logistica de delivery — rotas, embalagens, horarios de pico',
  'RH operacional — contratacao, treinamento, escalas, ferias',
  'Compras e estoque — CEASA, fornecedores, negociacao',
  'Maternidade — 2 filhos (8 e 11), escola, deveres, refeicoes',
]

const marciaTem = [
  'iPhone com dados',
  'Instagram / Canva basico',
  'WhatsApp avancado',
  'iFood gestao',
]

const marciaFalta = [
  'Planilha financeira',
  'Analise de margem por prato',
  'Fluxo de caixa projetado',
  'Precificacao tecnica',
  'DRE / P&L mensal',
]

const marciaPerfil = [
  { label: 'Resiliente', desc: 'abriu negocio na pandemia quando demitida' },
  { label: 'Organizada por necessidade', desc: 'nao por formacao' },
  { label: 'Desconfiada de tecnologia', desc: '2 apps ja abandonados' },
  { label: 'Motivada pelos filhos', desc: 'seguranca acima de tudo' },
  { label: 'Pragmatica', desc: 'se nao funciona em 5 min, abandona' },
]

const marciaMotivacoes = [
  'Sair da garagem — ter espaco proprio',
  'Contratar gerente e sair as 15h',
  'Criar linha de marmitas fit (margem maior)',
  'Ferias (3 dias na praia seria luxo)',
  'Provar que da conta — ser vista como empresaria, nao "a mulher da marmita"',
]

const marciaDiaAntes = [
  { time: '4h45', text: 'Acorda, prepara filhos' },
  { time: '5h30', text: 'Chega na cozinha' },
  { time: '8h', text: 'Recebe fornecedor, fecha pedidos WhatsApp' },
  { time: '11h–14h', text: 'Pico producao + delivery' },
  { time: '14h30', text: 'Busca filhos' },
  { time: '19h', text: 'Fecha caixa MANUAL (1h30)' },
  { time: '22h', text: 'Planeja cardapio' },
  { time: '23h30', text: 'Dorme exausta, sem saber se lucrou' },
]

const marciaDiaDepois = [
  { time: '4h45', text: 'Acorda, abre WhatsApp — "Ontem: R$4.200, margem 55%, tudo OK"' },
  { time: '5h30', text: 'Chega na cozinha tranquila (dados ja conferidos)' },
  { time: '8h', text: 'Fornecedor — Tamy ja sugeriu lista de compras otimizada' },
  { time: '11h–14h', text: 'Foco na producao (gestao no piloto automatico)' },
  { time: '14h30', text: 'Busca filhos SEM ansiedade' },
  { time: '17h', text: 'Fecha o dia em 5 min (P&L diario ja pronto)' },
  { time: '20h', text: 'Revisa relatorio semanal, planeja cardapio COM dados de margem' },
  { time: '22h', text: 'Dorme sabendo EXATAMENTE quanto lucrou' },
]

const marciaROI = [
  { value: 'R$3.600–6.000', label: 'Economia CMV/mes (reducao 3-5%)' },
  { value: '48h/mes', label: 'Tempo economizado (12h/semana)' },
  { value: 'R$2.400', label: 'Reducao desperdicio/mes' },
  { value: 'R$72–100k', label: 'ROI anual total estimado' },
  { value: 'R$6.599', label: 'Custo Tamy (R$549,90/mes x 12)' },
  { value: '11–15x', label: 'ROI sobre o investimento' },
]

const marciaObjecoes = [
  {
    question: 'Nao tenho tempo pra mais um sistema',
    answer: 'No Concierge, a equipe faz tudo. No D2 voce ja tem P&L sem digitar nada.',
  },
  {
    question: 'R$549 e caro',
    answer: 'Voce perde R$3–6k/mes sem saber. Em 30 dias o ROI ja paga o ano inteiro.',
  },
  {
    question: 'Ja tentei app e nao funcionou',
    answer: 'Tamy nao e app. E WhatsApp + equipe que faz tudo pra voce.',
  },
  {
    question: 'Meus dados sao seguros?',
    answer: 'LGPD compliant, criptografia, servidores no Brasil. Nenhum dado e compartilhado.',
  },
  {
    question: 'Preciso ver pra crer',
    answer: '14 dias gratis. Se nao mostrar valor no D3, cancela sem custo.',
  },
]

const marciaCompetidores = [
  { competitor: 'Saipos (iFood)', reason: 'UX masculina, exige setup (ela nao tem tempo), sem Concierge' },
  { competitor: 'Simpliza', reason: 'Freemium = sem suporte real, raso em financeiro por prato' },
  { competitor: 'Sischef', reason: 'ERP generico, dashboard complexa, zero mobile-first' },
  { competitor: 'Planilha YouTube', reason: 'Nao atualiza sozinha, sem insight, morre em 2 semanas' },
  { competitor: 'Contador mensal', reason: 'R$500–1.5k/mes, dados com 45 dias de atraso, nao decide nada' },
]

// ---------------------------------------------------------------------------
// Carlos data
// ---------------------------------------------------------------------------

const carlosResponsabilidades = [
  'Gestao financeira — caixa no caderno, contas a pagar, folha',
  'Operacao do bar — ele no balcao, supervisao da cozinha',
  'Compras — CEASA (6h), fornecedores, negociacao',
  'Marketing — boca a boca, iFood 25%, WhatsApp clientes',
  'RH — 8 funcionarios, escala, treinamento',
  'Manutencao — equipamentos, reformas, licencas',
  'Familia — esposa professora, filho, domingo no futebol (quando da)',
]

const carlosTem = [
  'WhatsApp',
  'Stone Card (maquininha)',
  'Celular Android',
]

const carlosFalta = [
  'Qualquer controle financeiro digital',
  'Analise de CMV',
  'Fluxo de caixa',
  'Precificacao tecnica',
  'P&L mensal',
]

const carlosPerfil = [
  { label: 'Resiliente', desc: 'sobreviveu quase fechando 3 vezes' },
  { label: 'Orgulhoso', desc: 'construiu do zero com rescisao' },
  { label: 'Workaholic', desc: '18h/dia, domingos inclusos' },
  { label: 'Desconfiado', desc: 'de "firula tech" que nao entrega resultado' },
  { label: 'Leal', desc: 'se funciona, ele fica para sempre' },
]

const carlosMotivacoes = [
  'Abrir segundo bar perto do estadio',
  'Folga no domingo pra levar filho no futebol',
  'Bar no piloto automatico (sem ele ter que estar la)',
  'Reformar a cozinha (equipamentos novos)',
  'Filho falar "pai, seu bar e demais"',
]

const carlosDiaAntes = [
  { time: '6h', text: 'CEASA — compra frescos no olho' },
  { time: '8h', text: 'Recebe fornecedor, confere entregas sem lista' },
  { time: '10h–15h', text: 'Prep da cozinha, monta cardapio do dia' },
  { time: '16h–00h', text: 'Operacao (ele no balcao, picos na cozinha)' },
  { time: '00h30', text: 'Fecha caixa no caderno (40 min)' },
  { time: '1h', text: 'Chega em casa, familia ja dormindo' },
]

const carlosDiaDepois = [
  { time: '6h', text: 'CEASA — Tamy ja sugeriu o que comprar com base em vendas' },
  { time: '8h', text: 'Fornecedor — confere com lista Tamy no WhatsApp' },
  { time: '10h–15h', text: 'Prep sem ansiedade sobre margem' },
  { time: '16h–00h', text: 'Operacao — ve vendas em tempo real no WhatsApp' },
  { time: '00h15', text: 'Fecha em 5 min (foto do caixa = P&L automatico)' },
  { time: '00h30', text: 'Casa — ve no WhatsApp: "Hoje: R$3.800, margem 42%, CMV OK"' },
]

const carlosROI = [
  { value: 'R$2.550–4.250', label: 'Economia CMV/mes (reducao 3-5%)' },
  { value: '40h/mes', label: 'Tempo economizado (10h/semana)' },
  { value: 'R$1.500', label: 'Reducao desperdicio/mes' },
  { value: 'R$48–68k', label: 'ROI anual total estimado' },
  { value: 'R$2.279', label: 'Custo Tamy (R$189,90/mes x 12)' },
  { value: '21–30x', label: 'ROI sobre o investimento' },
]

const carlosObjecoes = [
  {
    question: 'R$189 e caro pra bar',
    answer: 'Voce perde R$2–4k/mes sem saber. R$189 e menos que a perda de um final de semana.',
  },
  {
    question: 'Ja tentei sistema e nao usei',
    answer: 'Tamy e WhatsApp. Foto do caderno = lancamento em 30 segundos.',
  },
  {
    question: 'Nao preciso, meu bar ta indo',
    answer: '42% dos bares fecham por falta de gestao financeira. "Tando" nao e "lucrando".',
  },
  {
    question: 'Isso e coisa de empresa grande',
    answer: 'E exatamente o oposto. Tamy foi feita pro dono que faz tudo sozinho.',
  },
  {
    question: 'Minha mulher cuida das contas',
    answer: 'Tamy ajuda ela tambem. Menos 10h/semana contando moeda.',
  },
]

const carlosCompetidores = [
  { competitor: 'Saipos', reason: 'Onboarding longo, precisa de PC, curva de aprendizado' },
  { competitor: 'Simpliza', reason: 'Sem AI, entrada manual, nao gera insight' },
  { competitor: 'Sischef', reason: 'Dashboard complexa, nao fala a lingua dele' },
  { competitor: 'Caderno', reason: 'Zero insight, zero previsibilidade, 40 min/dia perdidos' },
  { competitor: 'Contador', reason: 'R$500+/mes, dados atrasados 45 dias, nao ajuda a decidir' },
]

// ---------------------------------------------------------------------------
// Sales toolkit data
// ---------------------------------------------------------------------------

const scriptAnchors = {
  marcia: [
    'Voce sabe a margem real de cada marmita?',
    'Quanto tempo voce gasta fechando caixa por semana?',
    'E se voce pudesse sair as 15h todo dia?',
    'Imagina abrir o WhatsApp e ver exatamente quanto lucrou ontem',
    'No Concierge, a gente faz tudo — voce so confere',
  ],
  carlos: [
    'Quanto voce acha que perde de CMV por mes?',
    'Se eu mostrar seu lucro real em 5 minutos, voce ficaria?',
    'Voce fecha caixa em quanto tempo? E se fosse 5 minutos?',
    'Seu CMV ta em quanto? A maioria dos bares perde 10% sem saber',
    'R$189 por mes. Menos que a perda de um final de semana',
  ],
}

const contentCalendar = [
  { mes: 1, tema: '"Voce sabe seu lucro real?"', dor: 'Q01', persona: 'Ambos', formato: 'Post + Video curto' },
  { mes: 2, tema: '"CMV: o assassino silencioso"', dor: 'Q03', persona: 'Carlos', formato: 'Infografico + Calculadora' },
  { mes: 3, tema: '"Delivery: lucro ou ilusao?"', dor: 'Q05', persona: 'Marcia', formato: 'Video + Post' },
  { mes: 4, tema: '"Mae empreendedora: a maioria invisivel"', dor: 'Positioning', persona: 'Marcia', formato: 'Video depoimento' },
]

const metricasPersona = [
  { metrica: 'Margem bruta alvo', marcia: '18–25%', carlos: '15–25%' },
  { metrica: 'CMV alvo (atual → meta)', marcia: '32–38% → 28–33%', carlos: '28–35% → 24–30%' },
  { metrica: 'Tempo admin (antes → depois)', marcia: '15h/sem → 3h/sem', carlos: '12h/sem → 2h/sem' },
  { metrica: 'Aha moment', marcia: 'Relatorio por prato', carlos: 'CMV vs benchmark' },
  { metrica: 'Churn D90 target', marcia: '<3%/mes', carlos: '<5%/mes' },
]

// ---------------------------------------------------------------------------
// Export data builders
// ---------------------------------------------------------------------------

function buildExportPersonas() {
  return [
    {
      name: 'Dona Márcia — ICP Beta (Persona Primária)',
      sections: [
        { label: 'Responsabilidades', items: marciaResponsabilidades },
        { label: 'Ferramentas que tem', items: marciaTem },
        { label: 'O que falta', items: marciaFalta },
        { label: 'Perfil pessoal', items: marciaPerfil.map(p => ({ label: p.label, desc: p.desc })) },
        { label: 'Motivações e Sonhos', items: marciaMotivacoes },
        { label: 'Dia na Vida — Antes', items: marciaDiaAntes.map(d => `${d.time}: ${d.text}`) },
        { label: 'Dia na Vida — Depois (com Tamy)', items: marciaDiaDepois.map(d => `${d.time}: ${d.text}`) },
        { label: 'ROI Estimado', items: marciaROI.map(r => `${r.value} — ${r.label}`) },
        { label: 'Objeções + Respostas', items: marciaObjecoes.map(o => `"${o.question}" → ${o.answer}`) },
        { label: 'Por que competidores falham', items: marciaCompetidores.map(c => `${c.competitor}: ${c.reason}`) },
      ],
    },
    {
      name: 'Seu Carlos — ICP Alpha',
      sections: [
        { label: 'Responsabilidades', items: carlosResponsabilidades },
        { label: 'Ferramentas que tem', items: carlosTem },
        { label: 'O que falta', items: carlosFalta },
        { label: 'Perfil pessoal', items: carlosPerfil.map(p => ({ label: p.label, desc: p.desc })) },
        { label: 'Motivações e Sonhos', items: carlosMotivacoes },
        { label: 'Dia na Vida — Antes', items: carlosDiaAntes.map(d => `${d.time}: ${d.text}`) },
        { label: 'Dia na Vida — Depois (com Tamy)', items: carlosDiaDepois.map(d => `${d.time}: ${d.text}`) },
        { label: 'ROI Estimado', items: carlosROI.map(r => `${r.value} — ${r.label}`) },
        { label: 'Objeções + Respostas', items: carlosObjecoes.map(o => `"${o.question}" → ${o.answer}`) },
        { label: 'Por que competidores falham', items: carlosCompetidores.map(c => `${c.competitor}: ${c.reason}`) },
      ],
    },
  ]
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export function JobDescription() {
  const exportPersonas = buildExportPersonas()

  return (
    <div>
      {/* ------------------------------------------------------------------ */}
      {/* 1. Header */}
      {/* ------------------------------------------------------------------ */}
      <SectionHeader
        label="Sales Enablement"
        title="Job Description — Nossas Personas"
        desc="Se fossemos contratar nossas personas, esse seria o cargo. Guia completo para vendas, marketing e produto."
      />

      <div className="flex justify-end mb-4">
        <ExportButtons
          onExportPDF={() => exportJobDescriptionToPDF(exportPersonas)}
          onExportDocx={() => exportJobDescriptionToDocx(exportPersonas)}
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Por que Marcia Primeiro */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="reveal rounded-2xl p-4 md:p-5 mb-8 border border-pink-200"
        style={{ background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)' }}
      >
        <p className="text-pink-900 font-black text-base md:text-lg mb-2">
          Marcia nao e nicho — Marcia e a MAIORIA
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          <div className="bg-white/70 rounded-xl p-3 text-center">
            <div className="text-2xl font-black text-pink-700">52,7%</div>
            <div className="text-xs text-gray-600 mt-0.5">das empresas de food service sao lideradas por mulheres (ABRASEL 2025)</div>
          </div>
          <div className="bg-white/70 rounded-xl p-3 text-center">
            <div className="text-2xl font-black text-purple-700">67,34%</div>
            <div className="text-xs text-gray-600 mt-0.5">em delivery e marmitarias especificamente</div>
          </div>
          <div className="bg-white/70 rounded-xl p-3 flex items-center justify-center">
            <p className="text-xs text-pink-800 font-semibold text-center leading-relaxed">
              Nenhum competidor (Saipos, Simpliza, Sischef) fala com ela. Essa e a brecha.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. DONA MARCIA */}
      {/* ------------------------------------------------------------------ */}
      <div className="reveal mb-8">
        <div className="card-elevated overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <PersonaHeader
            initials="DM"
            badge="ICP Beta — Persona Primaria"
            name="Dona Marcia"
            subtitle="Marcia de Oliveira Santos, 36 anos · Sao Paulo, SP"
            gradient="linear-gradient(135deg, #701a75, #9333ea)"
          />

          <div className="p-4 md:p-5 space-y-4">

            {/* a) Cargo + Resumo */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-0.5">Cargo</p>
              <p className="text-sm font-black text-gray-900">Fundadora-Operadora — Marmitaria + Dark Kitchen</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 border-l-4 border-purple-400">
              <p className="text-xs text-gray-700 leading-relaxed italic">
                Mae solo de 2 filhos, ex-tecnica de enfermagem. Abriu marmitaria na pandemia. Opera 320 marmitas/dia com 12 funcionarios. Fatura R$120k/mes mas nao sabe a margem real por prato. Se ela parar, tudo para. Plano: Concierge R$549,90/mes.
              </p>
            </div>

            {/* b) Responsabilidades */}
            <div>
              <SectionTitle>Responsabilidades Principais</SectionTitle>
              <ul className="space-y-1.5">
                {marciaResponsabilidades.map((r, i) => (
                  <ResponsabilidadeItem key={i} number={i + 1} text={r} accent="text-purple-600" />
                ))}
              </ul>
            </div>

            {/* c) Requisitos Tecnicos */}
            <div>
              <SectionTitle>Requisitos Tecnicos</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                  <p className="text-xs font-bold text-green-700 mb-2">O que tem</p>
                  <ul className="space-y-1">
                    {marciaTem.map((t) => (
                      <li key={t} className="flex gap-2 text-xs text-gray-700">
                        <span className="text-green-500 font-bold">+</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">O que falta</p>
                  <ul className="space-y-1">
                    {marciaFalta.map((t) => (
                      <li key={t} className="flex gap-2 text-xs text-gray-700">
                        <span className="text-red-500 font-bold">—</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* d) Perfil Pessoal */}
            <div>
              <SectionTitle>Perfil Pessoal</SectionTitle>
              <div className="flex flex-wrap gap-1.5">
                {marciaPerfil.map(({ label, desc }) => (
                  <span
                    key={label}
                    title={desc}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-2 space-y-0.5">
                {marciaPerfil.map(({ label, desc }) => (
                  <p key={label} className="text-xs text-gray-500">
                    <span className="font-semibold text-purple-700">{label}:</span> {desc}
                  </p>
                ))}
              </div>
            </div>

            {/* e) Motivacoes */}
            <div>
              <SectionTitle>Motivacoes e Sonhos</SectionTitle>
              <ul className="space-y-1.5">
                {marciaMotivacoes.map((m, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-700">
                    <span className="text-purple-500 font-black">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* f) Dia na Vida */}
            <div>
              <SectionTitle>Dia na Vida: Antes vs Depois da Tamy</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="text-xs font-black text-red-700 mb-2 uppercase tracking-wider">Antes (hoje)</p>
                  <div className="space-y-1.5">
                    {marciaDiaAntes.map(({ time, text }) => (
                      <DiaItem key={time} time={time} text={text} accent="text-red-600" />
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                  <p className="text-xs font-black text-green-700 mb-2 uppercase tracking-wider">Depois (D30+ Tamy Concierge)</p>
                  <div className="space-y-1.5">
                    {marciaDiaDepois.map(({ time, text }) => (
                      <DiaItem key={time} time={time} text={text} accent="text-green-700" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* g) ROI */}
            <div>
              <SectionTitle>ROI Estimado</SectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {marciaROI.map(({ value, label }) => (
                  <div key={label} className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
                    <div className="text-sm font-black text-green-700 leading-tight">{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* h) Objecoes */}
            <div>
              <SectionTitle>Top 5 Objecoes + Respostas</SectionTitle>
              <div className="space-y-2">
                {marciaObjecoes.map((o, i) => (
                  <ObjecaoItem key={i} question={o.question} answer={o.answer} />
                ))}
              </div>
            </div>

            {/* i) Competidores */}
            <div>
              <SectionTitle>Por que os Competidores Falham com Marcia</SectionTitle>
              <CompetidorTable rows={marciaCompetidores} accentHeader="text-purple-700" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 4. SEU CARLOS */}
      {/* ------------------------------------------------------------------ */}
      <div className="reveal mb-8">
        <div className="card-elevated overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <PersonaHeader
            initials="CS"
            badge="ICP Alpha"
            name="Seu Carlos"
            subtitle="Carlos Eduardo Santos, 41 anos · Curitiba, PR"
            gradient="linear-gradient(135deg, #1e3a8a, #2563eb)"
          />

          <div className="p-4 md:p-5 space-y-4">

            {/* a) Cargo + Resumo */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-0.5">Cargo</p>
              <p className="text-sm font-black text-gray-900">Fundador-Operador — Bar + Petiscos Artesanais</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 border-l-4 border-blue-400">
              <p className="text-xs text-gray-700 leading-relaxed italic">
                41 anos, Curitiba. Abriu bar com rescisao + emprestimo apos demissao. 8 funcionarios, 1 unidade, R$85k/mes. Fecha caixa no caderno as 00h30. Nao sabe se esta lucrando. Plano: Essencial R$189,90/mes.
              </p>
            </div>

            {/* b) Responsabilidades */}
            <div>
              <SectionTitle>Responsabilidades Principais</SectionTitle>
              <ul className="space-y-1.5">
                {carlosResponsabilidades.map((r, i) => (
                  <ResponsabilidadeItem key={i} number={i + 1} text={r} accent="text-blue-600" />
                ))}
              </ul>
            </div>

            {/* c) Requisitos Tecnicos */}
            <div>
              <SectionTitle>Requisitos Tecnicos</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                  <p className="text-xs font-bold text-green-700 mb-2">O que tem</p>
                  <ul className="space-y-1">
                    {carlosTem.map((t) => (
                      <li key={t} className="flex gap-2 text-xs text-gray-700">
                        <span className="text-green-500 font-bold">+</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">O que falta</p>
                  <ul className="space-y-1">
                    {carlosFalta.map((t) => (
                      <li key={t} className="flex gap-2 text-xs text-gray-700">
                        <span className="text-red-500 font-bold">—</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* d) Perfil Pessoal */}
            <div>
              <SectionTitle>Perfil Pessoal</SectionTitle>
              <div className="flex flex-wrap gap-1.5">
                {carlosPerfil.map(({ label }) => (
                  <span key={label} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-2 space-y-0.5">
                {carlosPerfil.map(({ label, desc }) => (
                  <p key={label} className="text-xs text-gray-500">
                    <span className="font-semibold text-blue-700">{label}:</span> {desc}
                  </p>
                ))}
              </div>
            </div>

            {/* e) Motivacoes */}
            <div>
              <SectionTitle>Motivacoes e Sonhos</SectionTitle>
              <ul className="space-y-1.5">
                {carlosMotivacoes.map((m, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-700">
                    <span className="text-blue-500 font-black">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* f) Dia na Vida */}
            <div>
              <SectionTitle>Dia na Vida: Antes vs Depois da Tamy</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="text-xs font-black text-red-700 mb-2 uppercase tracking-wider">Antes (hoje)</p>
                  <div className="space-y-1.5">
                    {carlosDiaAntes.map(({ time, text }) => (
                      <DiaItem key={time} time={time} text={text} accent="text-red-600" />
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                  <p className="text-xs font-black text-green-700 mb-2 uppercase tracking-wider">Depois (D30+ Tamy Essencial)</p>
                  <div className="space-y-1.5">
                    {carlosDiaDepois.map(({ time, text }) => (
                      <DiaItem key={time} time={time} text={text} accent="text-green-700" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* g) ROI */}
            <div>
              <SectionTitle>ROI Estimado</SectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {carlosROI.map(({ value, label }) => (
                  <div key={label} className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
                    <div className="text-sm font-black text-green-700 leading-tight">{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* h) Objecoes */}
            <div>
              <SectionTitle>Top 5 Objecoes + Respostas</SectionTitle>
              <div className="space-y-2">
                {carlosObjecoes.map((o, i) => (
                  <ObjecaoItem key={i} question={o.question} answer={o.answer} />
                ))}
              </div>
            </div>

            {/* i) Competidores */}
            <div>
              <SectionTitle>Por que os Competidores Falham com Carlos</SectionTitle>
              <CompetidorTable rows={carlosCompetidores} accentHeader="text-blue-700" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 5. CONTADOR PARCEIRO */}
      {/* ------------------------------------------------------------------ */}
      <div className="reveal mb-8">
        <div className="card-elevated overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <PersonaHeader
            initials="RC"
            badge="Canal B2B2C"
            name="Contador Parceiro"
            subtitle="Roberto C., 44 anos · 280 clientes PME, 45 em food service"
            gradient="linear-gradient(135deg, #064e3b, #059669)"
          />

          <div className="p-4 md:p-5 space-y-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-0.5">Cargo</p>
              <p className="text-sm font-black text-gray-900">Contador Estrategico — Canal B2B2C</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-3 border-l-4 border-emerald-400">
              <p className="text-xs text-gray-700 leading-relaxed italic">
                Hoje faz lancamentos manuais para 45 clientes food service. Gasta 60% do tempo em tarefas operacionais de baixo valor. Quer sair do lancamento manual para advisory de alto valor. Tamy como parceiro tecnologico — ele indica, a Tamy entrega os dados, ele interpreta.
              </p>
            </div>

            <div>
              <SectionTitle>Proposta de Valor para o Contador</SectionTitle>
              <ul className="space-y-2">
                {[
                  'Reduz 70% do tempo operacional com clientes food service — contador faz advisory, nao data entry',
                  'Revenue share por indicacao: cada cliente indicado = comissao mensal recorrente enquanto ativo',
                  'Dashboard do contador: visao consolidada de todos os clientes, alertas proativos, DRE pronto para analise',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-700">
                    <span className="text-emerald-600 font-black">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 6. SALES TOOLKIT */}
      {/* ------------------------------------------------------------------ */}
      <div className="reveal">
        <SectionHeader
          label="Sales Enablement"
          title="Sales Toolkit"
          desc="Scripts, calendario de conteudo e metricas de sucesso por persona."
          labelColor="text-amber-600"
        />

        {/* a) Script Anchors */}
        <Panel className="mb-4">
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
            Script Anchors — Perguntas de Abertura
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-black text-purple-700 mb-2 uppercase">Para Marcia (Concierge)</p>
              <ul className="space-y-1.5">
                {scriptAnchors.marcia.map((s, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-700">
                    <span className="text-purple-400 font-black shrink-0">»</span>
                    <span className="italic">"{s}"</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black text-blue-700 mb-2 uppercase">Para Carlos (Essencial)</p>
              <ul className="space-y-1.5">
                {scriptAnchors.carlos.map((s, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-700">
                    <span className="text-blue-400 font-black shrink-0">»</span>
                    <span className="italic">"{s}"</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>

        {/* b) Content Calendar */}
        <Panel className="mb-4">
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
            Calendario de Conteudo — 4 Meses
          </h4>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs min-w-[480px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-2 py-1.5 font-bold text-gray-600 rounded-tl-lg">Mes</th>
                  <th className="text-left px-2 py-1.5 font-bold text-gray-600">Tema</th>
                  <th className="text-left px-2 py-1.5 font-bold text-gray-600">Dor</th>
                  <th className="text-left px-2 py-1.5 font-bold text-gray-600">Persona</th>
                  <th className="text-left px-2 py-1.5 font-bold text-gray-600 rounded-tr-lg">Formato</th>
                </tr>
              </thead>
              <tbody>
                {contentCalendar.map(({ mes, tema, dor, persona, formato }, i) => (
                  <tr key={mes} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-2 py-1.5 font-black text-amber-600">{mes}</td>
                    <td className="px-2 py-1.5 text-gray-800 font-medium">{tema}</td>
                    <td className="px-2 py-1.5">
                      <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">{dor}</span>
                    </td>
                    <td className="px-2 py-1.5">
                      <span className={`px-1.5 py-0.5 rounded-full font-semibold ${
                        persona === 'Marcia' ? 'bg-purple-100 text-purple-700' :
                        persona === 'Carlos' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>{persona}</span>
                    </td>
                    <td className="px-2 py-1.5 text-gray-600">{formato}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        {/* c) Metricas de Sucesso */}
        <Panel>
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
            Metricas de Sucesso por Persona
          </h4>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs min-w-[400px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-2 py-1.5 font-bold text-gray-600 rounded-tl-lg">Metrica</th>
                  <th className="text-left px-2 py-1.5 font-bold text-purple-700">Marcia (Concierge)</th>
                  <th className="text-left px-2 py-1.5 font-bold text-blue-700 rounded-tr-lg">Carlos (Essencial)</th>
                </tr>
              </thead>
              <tbody>
                {metricasPersona.map(({ metrica, marcia, carlos }, i) => (
                  <tr key={metrica} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-2 py-1.5 font-semibold text-gray-800">{metrica}</td>
                    <td className="px-2 py-1.5 text-purple-700 font-medium">{marcia}</td>
                    <td className="px-2 py-1.5 text-blue-700 font-medium">{carlos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default JobDescription
