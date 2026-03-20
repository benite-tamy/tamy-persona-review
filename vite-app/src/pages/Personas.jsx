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
  'Food trucks e ambulantes — sem operação fixa, margem e fluxo imprevisíveis',
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

            {/* Frase que Define */}
            <div className="mt-4 p-3 rounded-xl border-l-4 border-purple-500 bg-purple-50">
              <p className="text-xs text-gray-700 italic font-semibold">
                "Eu sei que tem coisa errada, mas não tenho tempo de parar pra descobrir o quê."
              </p>
            </div>

            {/* Medos — Full List */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">😰 Medos (5)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Não pagar folha no dia 5</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Perder o investimento de R$ 180k</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Descobrir que está no prejuízo</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Ter que fechar e voltar a ser empregado</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Ouvir "eu avisei" da esposa</span></li>
              </ul>
            </div>

            {/* Sonhos — Full List */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">🏆 Sonhos (5)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Abrir segunda unidade perto do estádio</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Folga no domingo pra levar filho no futebol</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Não precisar estar no bar pra funcionar</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Reformar a cozinha (equipamentos novos)</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Filho falar "pai, seu bar é demais"</span></li>
              </ul>
            </div>

            {/* O que o Converte */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">🔑 O que o Converte (4)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <span>Pedro falando a língua dele</span></li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <span>Ver primeiro número real ("CMV 43%?!")</span></li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <span>Foto do caderno = WhatsApp em 30s</span></li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <span>R$ 189,90 é menos que perda semanal</span></li>
              </ul>
            </div>

            {/* Anti-triggers */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">⛔ Anti-triggers (4)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>Dashboard com 20 gráficos</span></li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>Email marketing corporativo</span></li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>"Agende uma demo"</span></li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>Linguagem de MBA/consultoria</span></li>
              </ul>
            </div>

            {/* Tech Trauma */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">🖥️ Trauma com Tecnologia</h4>
              <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                  <strong>Já tentou 3 sistemas antes.</strong> Tentou o Saipos, uma planilha do YouTube, e um app de controle financeiro. Todos morreram em 2-3 semanas.
                </p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong>Por que Tamy é diferente:</strong> não tem app para instalar, não tem login para lembrar, não tem dashboard novo para aprender. É o WhatsApp que ele já usa 50x/dia. A barreira de adoção é zero.
                </p>
              </div>
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

            {/* Frase que Define */}
            <div className="mt-4 p-3 rounded-xl border-l-4 border-purple-500 bg-purple-50">
              <p className="text-xs text-gray-700 italic font-semibold">
                "Eu trabalho mais que qualquer um, mas no fim do mês não sei se sobrou alguma coisa pra mim."
              </p>
            </div>

            {/* Medos — Full List */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">😰 Medos (5)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Não conseguir pagar as meninas</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Filhos perceberem o estresse</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Crescer e perder controle total</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>iFood aumentar comissão pra 30%+</span></li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">•</span> <span>Ser "só a mulher da marmita"</span></li>
              </ul>
            </div>

            {/* Sonhos — Full List */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">🏆 Sonhos (5)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Ter espaço próprio (sair da garagem)</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Contratar gerente e sair às 15h</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Criar linha de marmitas fit</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Férias (3 dias na praia seria luxo)</span></li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">•</span> <span>Provar que dá conta</span></li>
              </ul>
            </div>

            {/* O que a Converte */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">🔑 O que a Converte (4)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-purple-500 font-bold">✓</span> <span>Outra dona mostrando que funciona</span></li>
                <li className="flex gap-2"><span className="text-purple-500 font-bold">✓</span> <span>"Zero esforço" (não tem 1 minuto sobrando)</span></li>
                <li className="flex gap-2"><span className="text-purple-500 font-bold">✓</span> <span>Segurança: dados seguros, LGPD</span></li>
                <li className="flex gap-2"><span className="text-purple-500 font-bold">✓</span> <span>Pedro contando história da Martita</span></li>
              </ul>
            </div>

            {/* Anti-triggers */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">⛔ Anti-triggers (4)</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>Linguagem condescendente</span></li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>App novo pra instalar</span></li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>Dashboard tipo planilha de contador</span></li>
                <li className="flex gap-2"><span className="text-red-400 font-bold">✕</span> <span>Vendedor homem explicando finanças</span></li>
              </ul>
            </div>

            {/* Tech Trauma */}
            <div className="mt-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">🖥️ Trauma com Tecnologia</h4>
              <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                  <strong>Tentou 2 apps antes.</strong> Um app de marmitaria e o Trello para organizar produção. Ambos morreram em semanas — sem tempo para configurar, sem suporte, sem resultado visível.
                </p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong>Por que Tamy é diferente:</strong> no Concierge, a <em>equipe</em> faz o setup. Márcia não precisa aprender nada. No D2 já tem o P&L pronto — ela nunca precisou digitar um dado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTADOR-PARCEIRO */}
      <div className="reveal mb-6">
        <div className="card-elevated overflow-hidden">
          <div className="p-4 md:p-5" style={{ background: 'linear-gradient(135deg, #064e3b, #065f46)' }}>
            <div className="flex gap-3 items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}>CP</div>
              <div className="text-white">
                <div className="inline-flex px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold mb-1">Canal B2B2C</div>
                <h3 className="text-lg md:text-xl font-black text-white">O Contador-Parceiro</h3>
                <p className="text-emerald-200 text-sm">Roberto Almeida, 44 anos · São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-5">
            <p className="text-sm font-bold text-gray-800 mb-3">Escritório Contábil Almeida — 280 clientes PME, 45 no food service</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                { label: 'Clientes PME', value: '280' },
                { label: 'Clientes food', value: '45' },
                { label: 'Mensalidade média', value: 'R$800/cliente' },
                { label: 'Modelo', value: 'B2B2C parceiro' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-emerald-50 rounded-xl p-2.5 text-center">
                  <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                  <div className="text-sm font-bold text-emerald-700">{value}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-3 mb-4 border-l-4 border-emerald-400">
              <p className="text-xs text-gray-700 leading-relaxed italic">
                Contador de PMEs há 18 anos. Especializou em food service por acidente — clientes de bar e restaurante são 30% dos seus contratos. Sabe que 60% deles vão fechar em 5 anos. Sofre toda virada de mês quando os clientes chegam com "a caixinha" de recibos desorganizados. Quer focar em advisory de alto valor mas fica preso no lançamento manual de dados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-4">
              <div className="bg-red-50 rounded-xl p-2.5 border border-red-100">
                <div className="font-bold text-red-700 mb-1">😰 Dor Principal</div>
                <p className="text-gray-600">Clientes chegam com caixinha de receita no dia 30. Passa 3 dias lançando dados em vez de fazer advisory. "Sou refém da desorganização dos meus clientes."</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-100">
                <div className="font-bold text-amber-700 mb-1">🏆 Sonho</div>
                <p className="text-gray-600">Clientes chegam com dados prontos. Ele foca em estratégia tributária, planejamento, crescimento. Cobra mais por hora, trabalha menos.</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-2.5 border border-emerald-100">
                <div className="font-bold text-emerald-700 mb-1">🔑 Por que indica Tamy</div>
                <p className="text-gray-600">Reduz 60% do trabalho de lançamento. O cliente paga a Tamy, Roberto cobra por advisory. É ganha-ganha sem canibalizar receita.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl border-l-4 border-emerald-500 bg-emerald-50">
              <p className="text-xs text-gray-700 italic font-semibold">
                "Se meus clientes de restaurante usarem Tamy, eu paro de ser digitador e começo a ser consultor de verdade."
              </p>
            </div>

            <div className="mt-4 bg-blue-50 rounded-xl p-3 border border-blue-100">
              <h4 className="text-xs font-bold text-blue-800 mb-2">📊 Por que este canal é estratégico</h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span><span>1 contador com 45 clientes food = 45 leads qualificados em 1 visita</span></li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span><span>Relacionamento de confiança já existe (cliente já paga R$800/mês pro contador)</span></li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span><span>CAC via B2B2C &lt; R$150 (vs. R$500 via paid)</span></li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold">→</span><span>Brasil tem ~120k contabilistas ativos — canal quase inexplorado por concorrentes</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="reveal mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Comparação: Seu Carlos vs. Dona Márcia</h3>
        <Panel className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-2.5 font-bold text-gray-700 bg-gray-50">Dimensão</th>
                <th className="text-left p-2.5 font-bold text-blue-700 bg-blue-50">Seu Carlos</th>
                <th className="text-left p-2.5 font-bold text-purple-700 bg-purple-50">Dona Márcia</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Idade/Contexto</td>
                <td className="p-2.5 text-gray-600">41 anos, casado, 1 filho</td>
                <td className="p-2.5 text-gray-600">36 anos, separada, 2 filhos (mãe solo)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Negócio</td>
                <td className="p-2.5 text-gray-600">Bar + petiscos</td>
                <td className="p-2.5 text-gray-600">Marmitaria + delivery</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Faturamento</td>
                <td className="p-2.5 text-gray-600">R$ 85k/mês</td>
                <td className="p-2.5 text-gray-600">R$ 120k/mês</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Canal Principal</td>
                <td className="p-2.5 text-gray-600">Balcão (75%) + iFood (25%)</td>
                <td className="p-2.5 text-gray-600">iFood (40%) + WhatsApp direto (35%) + Presencial (25%)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Maturidade Digital</td>
                <td className="p-2.5 text-gray-600">Baixa (Android antigo, sem PDV)</td>
                <td className="p-2.5 text-gray-600">Média (iPhone, Instagram ativo, Canva)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Relação com Dinheiro</td>
                <td className="p-2.5 text-gray-600">Mistura PF/PJ, "tiro o que preciso"</td>
                <td className="p-2.5 text-gray-600">Trauma de dívida, paga tudo em dia mas sem reserva</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Motivação Principal</td>
                <td className="p-2.5 text-gray-600">Autonomia + orgulho (ser dono)</td>
                <td className="p-2.5 text-gray-600">Segurança dos filhos + provar que dá conta</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Plano Natural</td>
                <td className="p-2.5 text-gray-600">Essencial (faz ele mesmo)</td>
                <td className="p-2.5 text-gray-600">Concierge (zero tempo sobrando)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Aha Moment Provável</td>
                <td className="p-2.5 text-gray-600">CMV real vs. benchmark ("43%?!")</td>
                <td className="p-2.5 text-gray-600">Margem iFood vs. salão ("3% vs. 22%?!")</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Medo #1</td>
                <td className="p-2.5 text-gray-600">Ter que fechar e voltar a ser empregado</td>
                <td className="p-2.5 text-gray-600">Não dar segurança pros filhos</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-2.5 font-bold text-gray-700">Sonho #1</td>
                <td className="p-2.5 text-gray-600">Abrir segunda unidade</td>
                <td className="p-2.5 text-gray-600">Ter espaço próprio (sair da garagem)</td>
              </tr>
            </tbody>
          </table>
        </Panel>
      </div>

      {/* INSIGHT ESTRATÉGICO */}
      <div className="reveal mb-6">
        <div className="rounded-2xl p-4 md:p-5 border border-pink-200"
          style={{ background: 'linear-gradient(135deg, #fdf2f8, #f3e8ff)' }}>
          <h3 className="text-sm font-bold text-gray-900 mb-2">⚡ Insight Estratégico</h3>
          <p className="text-xs text-gray-700 mb-4 leading-relaxed">
            A <strong>Márcia é 52,7% do mercado</strong> e ninguém fala com ela. A maioria dos SaaS de restaurante tem UX, copy e marketing feito por homens, para homens. <strong>"Dona Márcia" não é nicho — é a MAIORIA.</strong>
          </p>
          <div className="space-y-1.5 text-xs text-gray-600">
            <h4 className="font-bold text-gray-800 mb-2">5 Ações imediatas:</h4>
            <ol className="space-y-1.5 ml-4">
              <li className="flex gap-2"><span className="font-bold text-pink-600">1.</span> <span>Cases femininos no conteúdo desde D1</span></li>
              <li className="flex gap-2"><span className="font-bold text-pink-600">2.</span> <span>Pedro conta a história da própria mãe (A Martita — marmitaria)</span></li>
              <li className="flex gap-2"><span className="font-bold text-pink-600">3.</span> <span>Comunidade "Donas Inteligentes" como sub-grupo</span></li>
              <li className="flex gap-2"><span className="font-bold text-pink-600">4.</span> <span>Copy sem viés: não é "ele" nem "ela" — é "dono(a)"</span></li>
              <li className="flex gap-2"><span className="font-bold text-pink-600">5.</span> <span>Convidar fundadora mulher pra webinars e conteúdo colaborativo</span></li>
            </ol>
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
