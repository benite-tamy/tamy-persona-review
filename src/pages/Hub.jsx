import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'

const cards = [
  {
    to: '/fundamentos',
    emoji: '📚',
    title: 'Fundamentos',
    desc: 'Missão, visão, valores, propósito e tech stack. 79+ skills, 6 agentes, 4-layer memory.',
    color: 'border-purple-500',
    textColor: 'text-purple-600',
    bg: 'hover:bg-purple-50',
  },
  {
    to: '/personas',
    emoji: '👥',
    title: 'Personas & ICPs',
    desc: 'Seu Carlos (Alpha) e Dona Márcia (Beta). Anti-personas. ICP completo.',
    color: 'border-blue-500',
    textColor: 'text-blue-600',
    bg: 'hover:bg-blue-50',
  },
  {
    to: '/perguntas',
    emoji: '❓',
    title: '12 Perguntas',
    desc: 'Q01–Q12: Dores, medos, perigos, oportunidades, invisíveis, sonhos, preconceitos e mais.',
    color: 'border-emerald-500',
    textColor: 'text-emerald-600',
    bg: 'hover:bg-emerald-50',
  },
  {
    to: '/mercado',
    emoji: '📊',
    title: 'Mercado & Planos',
    desc: 'R$495B TAM. 1,8M+ estabelecimentos. Planos Essencial R$189 e Concierge R$549.',
    color: 'border-amber-500',
    textColor: 'text-amber-600',
    bg: 'hover:bg-amber-50',
  },
  {
    to: '/sexy-canvas',
    emoji: '🔥',
    title: 'Sexy Canvas',
    desc: '14 dimensões emocionais: 7 Pecados Capitais + 7 Criança Interior. Metodologia André Diamand.',
    color: 'border-red-500',
    textColor: 'text-red-600',
    bg: 'hover:bg-red-50',
  },
  {
    to: '/estrategia',
    emoji: '🚀',
    title: 'Estratégia & Execução',
    desc: 'Jornada D0→D90. Hipóteses. Playbook 100. Health Score. Riscos existenciais. Founders.',
    color: 'border-teal-500',
    textColor: 'text-teal-600',
    bg: 'hover:bg-teal-50',
  },
]

const stats = [
  { value: '79+', label: 'Skills desenvolvidas', color: 'text-purple-600' },
  { value: '6', label: 'Agentes especializados', color: 'text-blue-600' },
  { value: 'R$495B', label: 'TAM Brasil food service', color: 'text-emerald-600' },
  { value: '1,8M+', label: 'Estabelecimentos ativos', color: 'text-amber-600' },
  { value: '52,7%', label: 'Empresas lideradas por mulheres', color: 'text-pink-600' },
  { value: '254+', label: 'Test files no monorepo', color: 'text-indigo-600' },
]

export default function Hub() {
  return (
    <div className="animate-[slideUp_0.4s_ease-out]">
      <SectionHeader
        label="North Star Document"
        title="Bem-vindo ao Hub"
        desc="Toda decisão estratégica da Tamy Food parte daqui. Explore a persona unificada de Matheus Benites (CTO) e Pedro Smolka (CEO)."
      />

      {/* Callout banner */}
      <div
        className="rounded-2xl p-4 md:p-5 mb-6 border border-purple-200"
        style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}
      >
        <div className="flex gap-3 items-start">
          <span className="text-2xl shrink-0">⭐</span>
          <div>
            <p className="font-bold text-purple-900 text-sm md:text-base">Este é o North Star da Tamy Food</p>
            <p className="text-purple-700 text-xs md:text-sm mt-1 leading-relaxed">
              Toda decisão de produto, GTM, CS e pricing deve ser tomada com base nas personas, dados e hipóteses documentadas aqui.
              Antes de qualquer feature ou campanha, pergunte: <strong>"Isso resolve a dor do Carlos ou da Márcia?"</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Page cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
        {cards.map(({ to, emoji, title, desc, color, textColor, bg }) => (
          <Link
            key={to}
            to={to}
            className={`group bg-white rounded-2xl border-t-4 ${color} border-x border-b border-gray-100 shadow-sm p-4 md:p-5 transition-all duration-200 ${bg} hover:shadow-md`}
          >
            <div className="text-2xl mb-2">{emoji}</div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{title}</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-3">{desc}</p>
            <span className={`text-xs font-bold ${textColor} group-hover:underline`}>Explorar →</span>
          </Link>
        ))}
      </div>

      {/* Quick stats */}
      <div
        className="rounded-2xl border border-blue-200 p-4 md:p-6"
        style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}
      >
        <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
          <span>📈</span> Quick Stats — Tamy Food
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {stats.map(({ value, label, color }) => (
            <div key={label} className="bg-white/70 rounded-xl p-3 text-center">
              <div className={`text-xl md:text-2xl font-black ${color} leading-none mb-1`}>{value}</div>
              <div className="text-xs text-gray-500 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABRASEL callout */}
      <div className="mt-4 rounded-2xl border border-pink-200 p-4 flex gap-3 items-start"
        style={{ background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)' }}>
        <span className="text-xl shrink-0">👩‍🍳</span>
        <p className="text-pink-800 text-xs md:text-sm leading-relaxed">
          <strong>Dado crítico ABRASEL 2025:</strong> Mulheres lideram 52,7% das empresas de alimentação fora do lar no Brasil — e 67,34% de delivery/marmitarias.
          A Tamy precisa falar com ELE e com ELA desde o Dia 1. Por isso temos dois ICPs principais: <strong>Seu Carlos</strong> e <strong>Dona Márcia</strong>.
        </p>
      </div>
    </div>
  )
}
