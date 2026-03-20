import SectionHeader from '../components/SectionHeader.jsx'
import Panel from '../components/Panel.jsx'

const icps = [
  {
    id: 'alpha',
    color: 'border-purple-500',
    bg: 'bg-purple-50',
    accent: 'text-purple-700',
    badge: 'ICP Alpha',
    badgeBg: 'bg-purple-100 text-purple-700',
    faturamento: 'R$30–100k/mês',
    plano: 'Essencial R$189,90',
    perfil: 'Bar, lanchonete, self-service, marmitaria, dark kitchen. 1 unidade, 5–15 funcionários.',
    dor: 'Não sabe o lucro real. Gestão no caderno. CMV descontrolado.',
  },
  {
    id: 'beta',
    color: 'border-blue-500',
    bg: 'bg-blue-50',
    accent: 'text-blue-700',
    badge: 'ICP Beta',
    badgeBg: 'bg-blue-100 text-blue-700',
    faturamento: 'R$100–400k/mês',
    plano: 'Concierge R$549,90',
    perfil: 'Restaurante casual/fine, pizzaria, hamburgueria premium. 1–3 unidades, 15–40 funcionários.',
    dor: 'CMV e custo laboral elevados. Precisa de análise profunda por prato/unidade.',
  },
  {
    id: 'gamma',
    color: 'border-emerald-500',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-700',
    badge: 'ICP Gamma (futuro)',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    faturamento: 'R$400k+/mês',
    plano: 'Enterprise R$349,90+/unidade',
    perfil: 'Multi-unidade, redes, franquias. 40+ funcionários. Relatórios consolidados.',
    dor: 'Visibilidade cross-units. CFO precisa de dados, não o dono diretamente.',
  },
]

const antiPersonas = [
  'Redes grandes (iFood, McDonald\'s) — já têm BI próprio',
  'Catering/eventos — receita esporádica, não recorrente',
  'Bar sem cozinha (só bebida) — CMV diferente, menos complexidade',
  'Quem acha que "tá bem assim" — sem dor de gestão ativa',
  'Donos sem smartphone — barreira de acesso ao WhatsApp',
]

export default function Personas() {
  return (
    <div>
      <SectionHeader
        label="Definição de Personas"
        title="Nossas Personas"
        desc="Dois retratos vividos do(a) dono(a) de restaurante que a Tamy atende"
      />

      {/* ABRASEL callout */}
      <div className="reveal rounded-2xl border border-purple-200 p-4 mb-6"
        style={{ background: 'linear-gradient(135deg, #fdf2f8, #ede9fe)' }}>
        <p className="text-purple-900 text-sm leading-relaxed">
          <strong>Dado crítico (ABRASEL 2025):</strong> Mulheres lideram <strong>52,7%</strong> das empresas de alimentação fora do lar no Brasil — não 38% como estimávamos.
          Em delivery/marmitarias, são <strong>67,34%</strong>. A Tamy precisa falar com ELE e com ELA desde o dia 1.
        </p>
      </div>

      {/* SEU CARLOS */}
      <div className="reveal mb-6">
        <div className="card-elevated overflow-hidden">
          <div className="p-4 md:p-5" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
            <div className="flex gap-3 items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}>CS</div>
              <div className="text-white">
                <div className="inline-flex px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold mb-1">ICP Alpha</div>
                <h3 className="text-lg md:text-xl font-black text-white">Seu Carlos</h3>
                <p className="text-blue-200 text-sm">Carlos Eduardo Santos, 41 anos · Curitiba, PR</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-5">
            <p className="text-sm font-bold text-gray-800 mb-3">Boteco do Carlão — Bar + petiscos artesanais</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                { label: 'Faturamento', value: 'R$85k/mês' },
                { label: 'Unidades', value: '1' },
                { label: 'Equipe', value: '8 pessoas' },
                { label: 'Plano', value: 'Essencial' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-blue-50 rounded-xl p-2.5 text-center">
                  <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                  <div className="text-sm font-bold text-blue-700">{value}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-3 mb-4 border-l-4 border-blue-400">
              <p className="text-xs text-gray-700 leading-relaxed italic">
                Abriu há 4 anos após ser demitido de uma distribuidora de bebidas. Usou rescisão + empréstimo bancário pra montar o bar. Os primeiros 2 anos foram um inferno — quase fechou 3 vezes. Sobreviveu porque a esposa (professora) segurou as contas de casa. Hoje tem movimento, mas nunca sabe exatamente quanto está lucrando. Ganha bem menos do que pensa.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Rotina Típica</h4>
              <div className="space-y-1.5 text-xs text-gray-600">
                {[
                  ['6h', 'Acorda, vai pro CEASA comprar frescos'],
                  ['8h', 'Recebe fornecedor, confere entregas "no olho"'],
                  ['10h–15h', 'Prep da cozinha, monta cardápio do dia'],
                  ['16h–00h', 'Operação (ele no balcão, picos na cozinha)'],
                  ['00h30', 'Fecha, conta dinheiro na mesa do bar, anota no caderno'],
                  ['1h', 'Chega em casa, família dormindo'],
                ].map(([time, desc]) => (
                  <div key={time} className="flex gap-2">
                    <span className="font-bold text-blue-600 w-16 shrink-0">{time}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-red-50 rounded-xl p-2.5 border border-red-100">
                <div className="font-bold text-red-700 mb-1">😰 Maior Medo</div>
                <p className="text-gray-600">Descobrir que está no prejuízo depois de anos de trabalho. "Trabalho 18h/dia pra quê?"</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-100">
                <div className="font-bold text-amber-700 mb-1">🏆 Sonho</div>
                <p className="text-gray-600">Ter um segundo bar e saber que o primeiro está "no piloto automático" com dados.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-2.5 border border-blue-100">
                <div className="font-bold text-blue-700 mb-1">🔑 Gatilho de Compra</div>
                <p className="text-gray-600">Ver que seu CMV está 12pp acima do benchmark. ROI claro em 5 minutos.</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {['Caderno quadriculado', 'WhatsApp', 'Excel (abandonado)', 'iFood 25%', 'Stone Card'].map(t => (
                <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DONA MÁRCIA */}
      <div className="reveal mb-6">
        <div className="card-elevated overflow-hidden">
          <div className="p-4 md:p-5" style={{ background: 'linear-gradient(135deg, #701a75, #9333ea)' }}>
            <div className="flex gap-3 items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}>DM</div>
              <div className="text-white">
                <div className="inline-flex px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold mb-1">ICP Beta</div>
                <h3 className="text-lg md:text-xl font-black">Dona Márcia</h3>
                <p className="text-purple-200 text-sm">Márcia de Oliveira Santos, 36 anos · São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-5">
            <p className="text-sm font-bold text-gray-800 mb-3">Sabor da Márcia — Marmitaria + delivery premium</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                { label: 'Faturamento', value: 'R$120k/mês' },
                { label: 'Unidades', value: '1 + dark kitchen' },
                { label: 'Equipe', value: '12 pessoas' },
                { label: 'Plano', value: 'Concierge' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-purple-50 rounded-xl p-2.5 text-center">
                  <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                  <div className="text-sm font-bold text-purple-700">{value}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-3 mb-4 border-l-4 border-purple-400">
              <p className="text-xs text-gray-700 leading-relaxed italic">
                Mãe solo de dois filhos (8 e 11 anos). Ex-técnica de enfermagem que abriu a marmitaria durante a pandemia porque precisava de renda enquanto os hospitais demitiam. O que começou com 15 marmitas/dia virou 320 unidades/dia + dark kitchen em 3 anos. É organizada, metódica, mas está no limite — ela é a operação e a gestão. Se ela parar, tudo para.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Rotina Típica</h4>
              <div className="space-y-1.5 text-xs text-gray-600">
                {[
                  ['4h45', 'Acorda, prepara os filhos (deixa marmita pra eles)'],
                  ['5h30', 'Chega na cozinha, supervisiona mise en place'],
                  ['8h', 'Recebe fornecedor, fecha pedidos WhatsApp'],
                  ['11h–14h', 'Pico de produção + delivery (120+ marmitas)'],
                  ['14h30', 'Busca filhos na escola, faz dever junto'],
                  ['19h', 'Fecha caixa, responde clientes, posta em grupos de marmita'],
                  ['22h', 'Planeja cardápio da semana, fecha às 23h30'],
                ].map(([time, desc]) => (
                  <div key={time} className="flex gap-2">
                    <span className="font-bold text-purple-600 w-16 shrink-0">{time}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-red-50 rounded-xl p-2.5 border border-red-100">
                <div className="font-bold text-red-700 mb-1">😰 Maior Medo</div>
                <p className="text-gray-600">Não saber o lucro real por prato — e descobrir que o mais pedido dá prejuízo. "Vendo muito mas fico no zero."</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-100">
                <div className="font-bold text-amber-700 mb-1">🏆 Sonho</div>
                <p className="text-gray-600">Contratar um gerente e tirar 3 semanas de férias sem o negócio afundar. Primeiro apartamento próprio.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-2.5 border border-purple-100">
                <div className="font-bold text-purple-700 mb-1">🔑 Gatilho de Compra</div>
                <p className="text-gray-600">Ver relatório por prato e descobrir que marmita fitness tem margem 8% menor que a tradicional.</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {['iFood (maior volume)', 'Grupos WhatsApp', 'Rappi', 'MEI (limite beirando)', 'Planilha básica'].map(t => (
                <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ICPs comparison */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">ICPs — Segmentação de Mercado</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {icps.map(({ badge, badgeBg, faturamento, plano, perfil, dor, color, bg }) => (
            <Panel key={badge} className={`border-t-4 ${color}`}>
              <span className={`badge-pill ${badgeBg} mb-3 block w-fit`}>{badge}</span>
              <div className="space-y-2 text-xs">
                <div><span className="font-bold text-gray-700">Faturamento:</span> <span className="text-gray-600">{faturamento}</span></div>
                <div><span className="font-bold text-gray-700">Plano:</span> <span className="text-gray-600">{plano}</span></div>
                <div><span className="font-bold text-gray-700">Perfil:</span> <span className="text-gray-600">{perfil}</span></div>
                <div><span className="font-bold text-gray-700">Dor principal:</span> <span className="text-gray-600">{dor}</span></div>
              </div>
            </Panel>
          ))}
        </div>
      </div>

      {/* Anti-personas */}
      <div className="reveal">
        <Panel className="border-t-4 border-red-400">
          <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span>⛔</span> Anti-Personas</h3>
          <p className="text-gray-500 text-xs mb-3">Quem NÃO é nosso cliente (para não desperdiçar CAC)</p>
          <div className="space-y-2">
            {antiPersonas.map(ap => (
              <div key={ap} className="flex gap-2 text-xs text-gray-600">
                <span className="text-red-500 shrink-0 font-bold">✕</span>
                <span>{ap}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}
