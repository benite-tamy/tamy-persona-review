import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'

const Tag = ({ type, children }) => {
  const colors = {
    post: 'bg-blue-100 text-blue-700',
    video: 'bg-red-100 text-red-700',
    infog: 'bg-amber-100 text-amber-700',
    calc: 'bg-green-100 text-green-700',
    demo: 'bg-purple-100 text-purple-700',
    artigo: 'bg-gray-100 text-gray-700',
  }
  return <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold ml-1 ${colors[type] || 'bg-gray-100 text-gray-600'}`}>{children}</span>
}

const perguntas = [
  {
    num: 'Q01', color: 'border-blue-500', labelColor: 'text-blue-600',
    title: 'Principais fontes de problema/dor da persona',
    desc: 'O que ela reclama? O que trava seu resultado?',
    pedro: {
      role: 'CEO — Vivência operacional',
      summary: 'A principal dor é a falta de clareza e controle financeiro no dia a dia. O negócio vende e funciona, mas a gestão fica confusa, o dinheiro perde rastreabilidade e as decisões são tomadas sem segurança.',
      items: [
        'Não sabe exatamente quanto sobra no fim do mês',
        'Vende, trabalha muito, mas sente que o dinheiro "some"',
        'Tem dificuldade para entender se o negócio realmente dá lucro',
        'Não consegue enxergar com clareza o fluxo de caixa',
        'Mistura conta pessoal com conta da empresa',
        'Faz a gestão de forma muito manual — planilhas simples, caderno, WhatsApp ou de cabeça',
        'Não tem rotina financeira organizada',
        'Paga contas no susto, sem previsibilidade',
        'Não sabe exatamente para onde o dinheiro está indo',
        'Toma decisões mais no feeling do que nos números',
      ],
    },
    benites: {
      role: 'CTO — Dados e produto',
      summary: 'Essas dores são exatamente a "morte silenciosa" da nossa missão — restaurantes fechando por falta de inteligência financeira, não por falta de cliente.',
      items: [
        ['Não sabe o lucro real — confunde faturamento com lucro', 'post', 'Post'],
        ['Gasta 10-15h/semana em retrabalho com ferramentas desconectadas', 'video', 'Vídeo'],
        ['Perde 5-15% de margem bruta por não controlar CMV', 'post', 'Post educativo'],
        ['Mistura conta PJ com PF — paga escola do filho com dinheiro do caixa', 'video', 'Vídeo'],
        ['Precifica no achismo — "3x o custo" sem considerar fixos e impostos', 'post', 'Post'],
        ['Sem previsão de fluxo de caixa — causa #1 de inadimplência (41% ABRASEL)', 'infog', 'Infográfico'],
        ['Gasta 2+ horas/DIA no fechamento de caixa manual', 'video', 'Vídeo'],
        ['Não sabe qual prato dá lucro e qual dá prejuízo', 'post', 'Post'],
        ['Inflação come a margem em silêncio — 44% não conseguem reajustar a tempo', 'calc', 'Calculadora'],
        ['Desperdício invisível de 15-20% das compras (R$7-10k/mês no lixo)', 'infog', 'Infográfico'],
        ['Delivery pode ser deficitário: comissão iFood 12-27% + embalagem', 'calc', 'Calculadora'],
        ['Contador entrega balancete 45 dias depois — inútil pra decisão', 'post', 'Post'],
        ['Dono é o "middleware humano" entre 5 sistemas que não conversam', 'video', 'Vídeo'],
      ],
    },
  },
  {
    num: 'Q02', color: 'border-red-500', labelColor: 'text-red-600',
    title: 'O que tira o sono ou dá medo na persona?',
    desc: 'Medos reais, emocionais e estratégicos por trás das dores',
    pedro: {
      role: 'CEO — Emocional e familiar',
      summary: 'O medo é de perder dinheiro, perder o negócio e comprometer a vida e a da família. A desorganização financeira é vista como ameaça à estabilidade, autoestima e futuro.',
      items: [
        'Medo de perder o dinheiro que investiu para abrir o negócio',
        'Medo de todo o esforço feito até aqui não valer a pena',
        'Medo de trabalhar muito e não ter retorno financeiro',
        'Medo de faltar dinheiro para sustentar a família',
        'Medo de não conseguir pagar as contas da empresa e de casa',
        'Medo de ver o negócio quebrar depois de tanto esforço e expectativa',
        'Medo de decepcionar a família ou as pessoas que acreditaram nele',
        'Medo de estar errando na gestão e só descobrir quando for tarde demais',
        'Medo de crescer desorganizado e depois cair',
      ],
    },
    benites: {
      role: 'CTO — Medos específicos e mensuráveis',
      summary: 'Cada medo tem uma feature correspondente na Tamy: cashflow prediction, P&L real-time, alertas proativos, benchmarks anônimos por segmento.',
      items: [
        ['Medo de descobrir que está no prejuízo — prefere não olhar', 'video', 'Vídeo'],
        ['Medo de não pagar folha dia 5', 'post', 'Post'],
        ['Medo de virar estatística (~30% em 2 anos, ~62,7% em 5 — SEBRAE)', 'infog', 'Infográfico'],
        ['Medo de decepcionar a família que depende do negócio', 'video', 'Vídeo'],
        ['Medo de crescer desorganizado e colapsar', 'artigo', 'Artigo'],
        ['Medo de que IA seja "coisa de empresa grande"', 'demo', 'Demo'],
        ['Medo de investir em tecnologia e não usar — já abandonou 2-3 sistemas', 'post', 'Post'],
        ['Medo do iFood aumentar comissão sem alternativa', 'post', 'Post'],
        ['Ansiedade porque não sabe se terá caixa na semana que vem', 'post', 'Post'],
        ['Medo de estar sendo roubado sem como provar (sem dados)', 'post', 'Post'],
        ['Medo de decisão errada de expansão sem unit economics', 'artigo', 'Artigo'],
      ],
    },
  },
  {
    num: 'Q03', color: 'border-orange-500', labelColor: 'text-orange-600',
    title: 'Quais são os maiores perigos que a persona enfrenta?',
    desc: 'Riscos reais que ameaçam o negócio (além dos medos subjetivos)',
    pedro: {
      role: 'CEO — Riscos operacionais',
      summary: 'Os maiores perigos são estruturais e silenciosos — acontecem devagar, sem alertas visíveis, até que é tarde demais para recuperar.',
      items: [
        'Perigo de continuar operando no prejuízo sem saber',
        'Perigo de perder o controle do caixa em períodos sazonais',
        'Perigo de endividamento progressivo para tapar buracos',
        'Perigo de não conseguir honrar compromissos com fornecedores',
        'Perigo de crescer sem estrutura de gestão e colapsar',
        'Perigo de depender de uma única fonte de receita',
        'Perigo de não conseguir renovar o negócio com o tempo',
      ],
    },
    benites: {
      role: 'CTO — Riscos mensuráveis',
      summary: 'Cada perigo tem um sinal que a Tamy pode detectar antes que seja tarde: queda de margem, CMV subindo, fluxo negativo, benchmark desviando.',
      items: [
        ['Morte financeira silenciosa: margem erode 1-2% por mês sem alarme', 'infog', 'Infográfico'],
        ['CMV sem controle: cada 1% acima do ideal = R$1-5k/mês perdidos', 'calc', 'Calculadora'],
        ['Dependência iFood: plataforma pode aumentar taxa 3-5pp overnight', 'post', 'Post'],
        ['Sazonalidade sem previsão = dívida no pico baixo', 'artigo', 'Artigo'],
        ['Folha inflando: rotatividade 74%/ano, cada saída custa 3-6 meses', 'post', 'Post'],
        ['Capital de giro negativo: 41% inadimplentes (ABRASEL)', 'infog', 'Infográfico'],
        ['Expansão prematura: segunda unidade sem unit economics = fecha as duas', 'artigo', 'Artigo'],
      ],
    },
  },
  {
    num: 'Q04', color: 'border-green-500', labelColor: 'text-green-600',
    title: 'Quais são as maiores oportunidades com a Tamy?',
    desc: 'O que a persona pode ganhar — o "upside" do produto',
    pedro: {
      role: 'CEO — Oportunidades de valor',
      summary: 'A oportunidade maior não é só economizar — é ter clareza para crescer com confiança e tomar decisões que antes eram impossíveis sem dados.',
      items: [
        'Ter clareza real sobre lucro e rentabilidade — pela primeira vez',
        'Saber exatamente onde está perdendo dinheiro sem precisar de contador',
        'Tomar decisões de preço, cardápio e expansão com dados reais',
        'Recuperar horas de trabalho com automação de gestão',
        'Ter tranquilidade financeira e dormir melhor',
        'Crescer com segurança — sabendo que tem base financeira sólida',
        'Ter um negócio que funciona sem depender 100% de você',
      ],
    },
    benites: {
      role: 'CTO — Oportunidades quantificadas',
      summary: 'As oportunidades são mensuráveis: R$3-9k/mês de margem recuperada, 10-15h/semana economizadas, decisões baseadas em dados, e acesso a crédito via Open Finance.',
      items: [
        ['Recuperar 5-15% de margem bruta via controle de CMV = R$3-9k/mês', 'calc', 'Calculadora'],
        ['Eliminar 10-15h/semana de retrabalho financeiro com automação', 'demo', 'Demo'],
        ['P&L real diário via WhatsApp — sem app, sem login, zero fricção', 'demo', 'Demo'],
        ['Benchmarks do setor: "seu CMV está 8pp acima da média de bares" → ação imediata', 'post', 'Post'],
        ['Open Finance (Pluggy Phase 1): bank sync automático — fim da conciliação manual', 'demo', 'Demo'],
        ['Previsão de fluxo de caixa 14-30 dias = zero surpresas negativas', 'artigo', 'Artigo'],
        ['Score de saúde financeira: crédito mais barato (embedded finance futuro)', 'artigo', 'Artigo'],
        ['Multi-agente especializado: Finance, Analytics, Operations, Menu, Workflow', 'demo', 'Demo'],
        ['Análise de margem por prato: saber qual item tirar do cardápio', 'demo', 'Demo'],
        ['Gamificação Duolingo: streak + badges = hábito diário de gestão', 'post', 'Post'],
      ],
    },
  },
]

const morePerguntas = [
  { num: 'Q05', title: 'O que a persona não enxerga mas deveria?', color: 'border-purple-500' },
  { num: 'Q06', title: 'Qual é o sonho mais profundo da persona?', color: 'border-pink-500' },
  { num: 'Q07', title: 'Quais são os preconceitos e crenças limitantes?', color: 'border-amber-500' },
  { num: 'Q08', title: 'Quais são os maiores desafios de implementação?', color: 'border-indigo-500' },
  { num: 'Q09', title: 'Como a persona toma decisões de compra?', color: 'border-teal-500' },
  { num: 'Q10', title: 'Quais são os objetivos de curto prazo?', color: 'border-green-500' },
  { num: 'Q11', title: 'Quais são os ICPs dentro do ICP?', color: 'border-orange-500' },
  { num: 'Q12', title: 'Informações extra e contexto adicional', color: 'border-slate-500' },
]

function PerguntaCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`reveal card-elevated border-t-4 ${p.color} overflow-hidden`}>
      <button
        className="w-full text-left p-4 md:p-5 flex justify-between items-start gap-3"
        onClick={() => setOpen(o => !o)}
      >
        <div>
          <span className={`text-xs font-bold uppercase tracking-wider ${p.labelColor} block mb-1`}>{p.num}</span>
          <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight">{p.title}</h3>
          {p.desc && <p className="text-gray-500 text-xs mt-1">{p.desc}</p>}
        </div>
        <span className={`text-gray-400 text-lg transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {open && (
        <div className="px-4 pb-5 md:px-5 border-t border-gray-100">
          <div className="dual-panel pt-4">
            {/* Pedro */}
            <div className="bg-blue-50 rounded-xl p-3 md:p-4 border border-blue-100">
              <div className="flex gap-2 items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-black">PS</div>
                <div>
                  <div className="text-xs font-bold text-blue-800">Resposta Pedro</div>
                  <div className="text-xs text-blue-600">{p.pedro.role}</div>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3">
                {p.pedro.items.map((item, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-gray-700">
                    <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-lg p-2.5 border border-blue-100">
                <p className="text-xs font-semibold text-blue-700 mb-0.5">Resumo Pedro</p>
                <p className="text-xs text-gray-600 leading-relaxed">{p.pedro.summary}</p>
              </div>
            </div>

            {/* Benites */}
            <div className="bg-purple-50 rounded-xl p-3 md:p-4 border border-purple-100">
              <div className="flex gap-2 items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs font-black">MB</div>
                <div>
                  <div className="text-xs font-bold text-purple-800">Resposta Benites</div>
                  <div className="text-xs text-purple-600">{p.benites.role}</div>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3">
                {p.benites.items.map((item, i) => {
                  if (Array.isArray(item)) {
                    const [text, type, label] = item
                    return (
                      <li key={i} className="flex gap-1.5 text-xs text-gray-700">
                        <span className="text-purple-400 shrink-0 mt-0.5">•</span>
                        <span>{text}<Tag type={type}>{label}</Tag></span>
                      </li>
                    )
                  }
                  return (
                    <li key={i} className="flex gap-1.5 text-xs text-gray-700">
                      <span className="text-purple-400 shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  )
                })}
              </ul>
              <div className="bg-white rounded-lg p-2.5 border border-purple-100">
                <p className="text-xs font-semibold text-purple-700 mb-0.5">Resumo Benites</p>
                <p className="text-xs text-gray-600 leading-relaxed">{p.benites.summary}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Perguntas() {
  return (
    <div>
      <SectionHeader
        label="12 Perguntas — Start Growth"
        title="12 Perguntas da Persona"
        desc="Dores, medos, perigos, oportunidades, invisíveis, sonhos, preconceitos, desafios, decisão, objetivos, ICPs e extras — respondidas por Pedro (CEO) e Matheus Benites (CTO)"
      />

      <div className="space-y-3 mb-6">
        {perguntas.map(p => <PerguntaCard key={p.num} p={p} />)}
      </div>

      {/* Q05-Q12 summary cards */}
      <h3 className="text-base font-bold text-gray-900 mb-3">Q05 — Q12 (Visão Geral)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {morePerguntas.map(({ num, title, color }) => (
          <div key={num} className={`reveal bg-white rounded-xl border-l-4 ${color} border-y border-r border-gray-100 shadow-sm px-4 py-3`}>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{num}</span>
            <p className="text-sm font-semibold text-gray-700 mt-0.5">{title}</p>
            <p className="text-xs text-gray-400 mt-1 italic">Conteúdo disponível no documento HTML original.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
