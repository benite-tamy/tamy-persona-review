import SectionHeader from '../components/SectionHeader.jsx'
import Panel from '../components/Panel.jsx'

const journeyPhases = [
  {
    phase: 'D0 — Primeiro Contato',
    sub: '< 10 minutos',
    color: 'border-purple-500',
    bgColor: 'bg-purple-50',
    tracks: [
      { label: '🤖 IA', text: 'Welcome message no WhatsApp. Pergunta nome do restaurante, tipo, faturamento estimado. Cria perfil básico automaticamente.' },
      { label: '👤 CS', text: '[Essencial] Email de boas-vindas com vídeo do Pedro "Eu vivia essa dor" (2 min). [Concierge] Call de 15 min com gerente de conta para setup completo.' },
      { label: '🎮 Duolingo', text: '"Missão 1 Desbloqueada: Conhecer sua Tamy 🎯" — primeiro achievement. Barra de progresso: 0% do onboarding.' },
    ],
  },
  {
    phase: 'D1–D3 — Primeiro Valor',
    sub: '💡 Aha Moment',
    color: 'border-blue-500',
    bgColor: 'bg-blue-50',
    tracks: [
      { label: '🤖 IA', text: '[Essencial] Guia o(a) dono(a) a registrar primeiro gasto via foto no WhatsApp. Mostra Daily P&L Card na manhã do D2. Primeiro alerta: "Seu CMV ideal é X%. Vamos descobrir o seu?" [Concierge] Equipe preenche primeiros lançamentos. D2 já tem P&L real.' },
      { label: '👤 CS', text: 'Email D1 "Seu primeiro passo" com micro-tutorial. Pedro: vídeo "Como eu descobri que perdia R$4k/mês sem saber" (story emocional).' },
      { label: '🎮 Duolingo', text: '"🔥 Streak Day 1!" ao registrar primeiro gasto. Badge "Primeiro Lançamento" desbloqueado. Barra: 10% do onboarding completo.' },
    ],
    alert: { color: 'bg-blue-50 border-blue-300', text: 'TARGET: Dono vê primeiro número real (P&L ou CMV vs. benchmark) que ele não sabia. "Meu CMV está em 42%?! Deveria ser 32%..."' },
  },
  {
    phase: 'D4–D7 — Ativação',
    sub: '🔥 Ponto Crítico',
    color: 'border-amber-500',
    bgColor: 'bg-amber-50',
    tracks: [
      { label: '🤖 IA', text: '3+ lançamentos = primeiro relatório semanal. Alerta de anomalia: "Suas compras de proteína subiram 18% vs. semana passada." Sugestão de ajuste de preço por margem.' },
      { label: '👤 CS', text: '[Essencial] Email D5 "Você já economizou X?" com resumo. [Concierge] Call D5 com gerente: "Olha o que encontramos nos seus dados." Pedro: "5 sinais de que seu restaurante está sangrando dinheiro".' },
      { label: '🎮 Duolingo', text: '"🔥 Streak 7 dias!" — badge "Semana Completa". Unlock: benchmarks avançados. Tamy Score aparece pela primeira vez (ex: 35/100). "Quer chegar a 70 em 30 dias?"' },
    ],
    alert: { color: 'bg-amber-50 border-amber-300', text: 'MÉTRICA: D7 activation (3+ interações) prevê 82% de chance de reter no D90.' },
  },
  {
    phase: 'D8–D30 — Profundidade',
    sub: '📊 Hábito Criado',
    color: 'border-green-500',
    bgColor: 'bg-green-50',
    tracks: [
      { label: '🤖 IA', text: 'Relatório semanal consistente. Previsão de fluxo de caixa (14 dias). Análise de margem por prato (Menu Agent). Alerta de sazonalidade: "Próximo mês tem Dia dos Namorados — seu faturamento histórico sobe X%."' },
      { label: '👤 CS', text: '[Essencial] Email D14 "Relatório do mês" + NPS survey. D21 "Já viu seu Tamy Score subir?" [Concierge] Reunião quinzenal. Pedro: série "Donos Inteligentes" (stories reais).' },
      { label: '🎮 Duolingo', text: 'Tamy Score subindo semana a semana. Badges: "CMV Killer", "Caixa Positivo 7d", "Detetive de Custos". Streak 30d = "Mês Completo 🏆". Convite pra comunidade "Donos Inteligentes".' },
    ],
    alert: { color: 'bg-red-50 border-red-300', text: 'GATE D30: NPS < 7 → intervenção humana (call). NPS ≥ 8 → pedido de referral.' },
  },
  {
    phase: 'D31–D90 — Consolidação',
    sub: '🏆 Retenção',
    color: 'border-teal-500',
    bgColor: 'bg-teal-50',
    tracks: [
      { label: '🤖 IA', text: 'Relatório mensal "Suas Conquistas" (quanto economizou, horas salvas, margem recuperada). Simulação de expansão. Previsão de fluxo de caixa mensal. Benchmark comparativo com restaurantes similares.' },
      { label: '👤 CS', text: '[Essencial] Email D60 "Seus 2 meses de evolução" + upsell Concierge se engajamento alto. [Concierge] Revisão trimestral. Pedro: convite para evento/webinar "Donos que viraram o jogo."' },
      { label: '🎮 Duolingo', text: 'Tamy Score > 60 = selo "Restaurante Inteligente 🏅". Ranking anônimo por tipo. Achievement "90 dias = crédito mais barato". Streak 90d = "Lenda da Gestão 👑".' },
    ],
    alert: { color: 'bg-green-50 border-green-300', text: 'GATE D90: ativo + NPS ≥ 8 + Tamy Score > 50 → "Graduated" = retenção prevista > 95%. Se inativo → Pedro liga pessoalmente para os primeiros 100.' },
  },
]

const hipoteses = [
  { confidence: '🟢 ALTA', label: 'alta', title: '"Dono não sabe o lucro real"', body: 'Pedro viveu isso em 40+ unidades. 82% de restaurantes que fecham citam gestão financeira como causa (ABRASEL/SEBRAE). Essa dor é comprovada, não teórica.', bg: 'bg-green-50 border-green-200' },
  { confidence: '🟢 ALTA', label: 'alta', title: '"WhatsApp é o canal certo"', body: '169M+ usuários BR, 97% urban 4G, dono usa WhatsApp 50x/dia. Zero fricção de canal. Mais efetivo que app ou web.', bg: 'bg-green-50 border-green-200' },
  { confidence: '🟡 MÉDIA', label: 'media', title: '"Dono paga R$189,90/mês por inteligência IA"', body: 'Lógica: menos que 1 prato/dia, ROI 5x em desperdício reduzido. Falta: Willingness to Pay real testada com 20+ restaurantes.', bg: 'bg-amber-50 border-amber-200' },
  { confidence: '🟡 MÉDIA', label: 'media', title: '"Aha moment = primeiro P&L real ou CMV vs. benchmark"', body: 'Founders experimentaram o "wow" quando viram número real. Falta: medir com primeiros 20 clientes qual momento gera o "wow" — pode ser algo diferente.', bg: 'bg-amber-50 border-amber-200' },
  { confidence: '🟡 MÉDIA', label: 'media', title: '"Essencial converte via self-service"', body: 'Lógica: produto simples o suficiente via WhatsApp. Risco: dono Alpha precisa de mais mão na massa do que imaginamos. Testar com inner circle.', bg: 'bg-amber-50 border-amber-200' },
  { confidence: '🔴 BAIXA', label: 'baixa', title: '"CAC < R$500 via orgânico"', body: 'Pedro tem audiência e autoridade. Mas escalar orgânico tem teto. Falta: medir CAC real dos primeiros 50 clientes antes de afirmar.', bg: 'bg-red-50 border-red-200' },
  { confidence: '🟢 ALTA', label: 'alta', title: '"Persona Feminina = 52,7% do mercado"', body: 'ABRASEL 2025 confirmado: mulheres lideram 52,7% do food service, 67,34% em delivery/marmitarias. Tamy precisa de copy, produto e CS que fale diretamente com ELA.', bg: 'bg-green-50 border-green-200' },
  { confidence: '🟡 MÉDIA', label: 'media', title: '"Open Finance acelera ativação"', body: 'Hipótese: bank sync automático (Pluggy Phase 1) reduz friction de onboarding em 60%. Falta: medir com primeiros usuários real vs. manual.', bg: 'bg-amber-50 border-amber-200' },
]

const playbook = [
  {
    phase: 'Fase 1 — Inner Circle (D0–D30)',
    goal: 'Meta: 10 clientes pagando, 3 NPS ≥ 8',
    color: 'border-purple-500 bg-purple-50',
    actions: ['10 restaurantes do círculo de Pedro: amigos, conhecidos dos 40+ anos em gastronomia', 'Preço teste: R$99 ou grátis com compromisso de feedback semanal', 'Concierge bruto: Pedro/Benites fazem tudo na mão para entender onde o produto quebra', 'Objetivo: não crescer — entender. Cada feedback é mais valioso que R$10k de receita'],
  },
  {
    phase: 'Fase 2 — Orgânico Estruturado (D30–D60)',
    goal: 'Meta: 30 clientes pagando, CAC < R$300',
    color: 'border-blue-500 bg-blue-50',
    actions: ['Pedro: 2 posts/dia no Instagram com dado real (CMV, P&L, desperdício)', 'Criação de "Calculadora de CMV" gratuita como lead magnet', '3 cases de Carlos e Márcia reais (com nome trocado) — antes/depois', 'Comunidade "Donos Inteligentes" no WhatsApp: Pedro modera, educa, vende indiretamente'],
  },
  {
    phase: 'Fase 3 — Canais Estruturados (D60–D90)',
    goal: 'Meta: 100 clientes pagando, churn < 8%/mês',
    color: 'border-amber-500 bg-amber-50',
    actions: ['Parcerias: contadores de PMEs, Sebrae, associações de bairro, grupos de WhatsApp de donos', 'SDR outbound: lista de bares/restaurantes no iFood, abordagem via WhatsApp com dado personalizado', 'Pedro: webinar quinzenal "Donos Inteligentes — Como saber se seu restaurante está lucrando"', 'Affiliate: cada cliente indicado ganha 1 mês grátis'],
  },
  {
    phase: 'Fase 4 — Paid Media (pós 100)',
    goal: 'Meta: payback < 3 meses, CLTV/CAC > 3x',
    color: 'border-green-500 bg-green-50',
    actions: ['Facebook/Instagram: vídeo do Pedro "Eu descobri que perdia R$4k/mês" (story emocional)', 'Google: "como saber se meu restaurante está lucrando", "controle financeiro restaurante"', 'Influencer: donos de restaurante com 10k-50k seguidores (micro-influencers de nicho)', 'Retargeting: quem viu a calculadora mas não converteu'],
  },
]

const riscos = [
  { level: '🔴 CRÍTICO', title: 'Dependência do WhatsApp Business API', desc: 'Meta pode bloquear/mudar regras overnight. Aconteceu com 0800 (descontinuado), pode acontecer com WhatsApp API. Mitigação: manter canal email como backup, desenvolver mini-app PWA paralelo. Diversificação de canal é roadmap item 1.' },
  { level: '🔴 CRÍTICO', title: 'Pre-PMF sem validação real', desc: '254 test files, 111+ skills, mas ZERO feedback de cliente pagante (até agora). O produto pode ser tecnicamente perfeito e comercialmente errado. Mitigação: primeiros 10 clientes em 30 dias — ou pivote.' },
  { level: '🟠 ALTO', title: 'Persona Feminina Subrepresentada', desc: 'ABRASEL 2025: 52,7% mulheres. Se o produto, copy e CS forem "feitos para o Carlos", perdemos metade do mercado. Mitigação: Dona Márcia como persona co-principal em todo material.' },
  { level: '🟠 ALTO', title: 'Churn por Complexidade', desc: 'Dono Alpha (Essencial) pode abandonar se produto exigir mais de 5 min/dia. Qualquer fricção no onboarding = churn no D7. Mitigação: onboarding em 3 mensagens no WhatsApp.' },
  { level: '🟡 MÉDIO', title: 'Copycat de incumbentes', desc: 'Saipos, Bling ou ERP grande pode lançar "IA no WhatsApp" em 6-12 meses com distribuição existente. Mitigação: velocidade de aprendizado com clientes reais > vantagem técnica.' },
  { level: '🟡 MÉDIO', title: 'Integração iFood (placeholder)', desc: 'A integração com iFood está como placeholder — não há API pública real. Se o ICP depende de delivery, falta feature crítica. Mitigação: priorizar Open Finance + dados manuais primeiro.' },
  { level: '🟢 BAIXO', title: 'Pricing errado', desc: 'R$189,90 pode ser caro para Alpha ou barato para Beta. Teste A/B com inner circle vai revelar WTP real. Risco baixo porque é ajustável sem reescrever produto.' },
]

export default function Estrategia() {
  return (
    <div>
      <SectionHeader
        label="Estratégia & Execução"
        title="Jornada, Hipóteses & Playbook"
        desc="Jornada do cliente D0→D90, hipóteses pré-PMF, Playbook dos primeiros 100, Health Score e riscos existenciais"
      />

      {/* JOURNEY */}
      <h3 className="text-lg font-bold text-gray-900 mb-1 mt-2">Jornada do Cliente — D0 → D90</h3>
      <p className="text-gray-500 text-sm mb-4">3 tracks paralelas: IA (automático), CS Humano (Pedro/equipe), Gamificação (Duolingo-style)</p>

      <div className="space-y-3 mb-8">
        {journeyPhases.map(({ phase, sub, color, bgColor, tracks, alert }) => (
          <div key={phase} className={`reveal card border-l-4 ${color} overflow-hidden`}>
            <div className={`px-4 py-3 ${bgColor} border-b border-gray-100 flex items-center justify-between`}>
              <h4 className="font-bold text-gray-900 text-sm">{phase}</h4>
              <span className="text-xs text-gray-500">{sub}</span>
            </div>
            <div className="px-4 py-3 space-y-2">
              {tracks.map(({ label, text }) => (
                <div key={label} className="flex gap-2 text-xs">
                  <span className="font-bold text-gray-700 w-20 shrink-0">{label}</span>
                  <span className="text-gray-600 leading-relaxed">{text}</span>
                </div>
              ))}
              {alert && (
                <div className={`mt-2 rounded-lg p-2 border text-xs font-semibold text-gray-700 ${alert.color}`}>
                  {alert.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* HIPÓTESES */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">Hipóteses a Validar — Pre-PMF Honesto</h3>
      <p className="text-gray-500 text-sm mb-4">Não construímos no achismo — mas hipóteses precisam de dados de clientes reais.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {hipoteses.map(({ confidence, title, body, bg }) => (
          <div key={title} className={`reveal rounded-2xl border p-3 md:p-4 ${bg}`}>
            <div className="text-xs font-bold text-gray-600 mb-1">{confidence}</div>
            <h4 className="font-bold text-gray-900 text-sm mb-2">{title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* PLAYBOOK */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">Playbook — Primeiros 100 Clientes</h3>
      <p className="text-gray-500 text-sm mb-4">4 fases de aquisição, da mais manual para a mais escalável</p>

      <div className="space-y-3 mb-8">
        {playbook.map(({ phase, goal, color, actions }) => (
          <div key={phase} className={`reveal rounded-2xl border-l-4 border-t border-r border-b border-gray-100 ${color} p-4 md:p-5`}>
            <div className="flex items-start justify-between gap-2 mb-3">
              <h4 className="font-bold text-gray-900 text-sm">{phase}</h4>
              <span className="text-xs text-gray-500 shrink-0 text-right">{goal}</span>
            </div>
            <ul className="space-y-1.5">
              {actions.map((a, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-700">
                  <span className="font-bold shrink-0 text-gray-400">{i+1}.</span>
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WEEKLY TARGETS */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">Alvos Semanais — 20 Semanas → 100 Clientes</h3>
      <p className="text-gray-500 text-sm mb-4">Progressão de 5 clientes/semana com mix de canais</p>

      <div className="overflow-x-auto mb-6 reveal">
        <table className="w-full text-xs border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-3 py-2 text-left font-bold text-gray-900">Semanas</th>
              <th className="px-3 py-2 text-left font-bold text-gray-900">Fase</th>
              <th className="px-3 py-2 text-center font-bold text-gray-900">Meta/Semana</th>
              <th className="px-3 py-2 text-center font-bold text-gray-900">Cumulativo</th>
              <th className="px-3 py-2 text-left font-bold text-gray-900">Foco</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2 text-gray-700">1-4</td>
              <td className="px-3 py-2"><span className="inline-block px-2 py-1 rounded bg-purple-100 text-purple-700 font-bold">Fase 1</span></td>
              <td className="px-3 py-2 text-center text-gray-700">5</td>
              <td className="px-3 py-2 text-center font-bold text-gray-900">20</td>
              <td className="px-3 py-2 text-gray-600">Inner Circle (rede Pedro)</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2 text-gray-700">5-10</td>
              <td className="px-3 py-2"><span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 font-bold">Fase 2</span></td>
              <td className="px-3 py-2 text-center text-gray-700">5</td>
              <td className="px-3 py-2 text-center font-bold text-gray-900">50</td>
              <td className="px-3 py-2 text-gray-600">{"Referral + Conteúdo (K-factor > 1.5)"}</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2 text-gray-700">11-16</td>
              <td className="px-3 py-2"><span className="inline-block px-2 py-1 rounded bg-amber-100 text-amber-700 font-bold">Fase 3</span></td>
              <td className="px-3 py-2 text-center text-gray-700">5</td>
              <td className="px-3 py-2 text-center font-bold text-gray-900">80</td>
              <td className="px-3 py-2 text-gray-600">B2B2C (Contadores, Associações)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-gray-700">17-20</td>
              <td className="px-3 py-2"><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 font-bold">Fase 4</span></td>
              <td className="px-3 py-2 text-center text-gray-700">5+</td>
              <td className="px-3 py-2 text-center font-bold text-gray-900">100+</td>
              <td className="px-3 py-2 text-gray-600">Paid Ads (Meta, Google)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Panel className="reveal mb-8">
        <h4 className="font-bold text-gray-900 mb-2">💡 Insight: Hormozi ($100M Leads)</h4>
        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          <strong>Warm {">"} Cold.</strong> Começar com quem já confia (rede Pedro), expandir com referral, estruturar canais escaláveis (contadores), depois paid. Se referral funcionar (K-factor {">"}1.5), talvez paid nem seja necessário nos primeiros 6 meses.
        </p>
        <p className="text-xs text-gray-700 font-semibold leading-relaxed border-t pt-3 mt-3">
          <strong>Janela de oportunidade:</strong> 12-18 meses antes que iFood/Saipos/Conta Azul acordem e lancem módulo financeiro similar. <strong>Velocidade {">"}perfeição.</strong>
        </p>
      </Panel>

      {/* RISCOS */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">Riscos Existenciais — Pre-mortem Munger</h3>
      <p className="text-gray-500 text-sm mb-4">"Se a Tamy falhar em 2 anos, qual foi a causa?" — Charlie Munger</p>

      <div className="space-y-2 mb-8">
        {riscos.map(({ level, title, desc }) => (
          <div key={title} className={`reveal card p-3 md:p-4 ${level.includes('CRÍTICO') ? 'border-l-4 border-red-500 bg-red-50/50' : level.includes('ALTO') ? 'border-l-4 border-orange-400 bg-orange-50/50' : level.includes('MÉDIO') ? 'border-l-4 border-amber-400 bg-amber-50/50' : 'border-l-4 border-green-400 bg-green-50/50'}`}>
            <div className="flex items-start gap-2">
              <span className="text-xs font-bold text-gray-500 shrink-0 w-20">{level}</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PRÉ-MORTEM EXERCISE */}
      <div className="bg-gray-900 text-white rounded-2xl p-5 md:p-6 mb-8 reveal">
        <h3 className="text-lg font-bold mb-3">💀 Exercício de Pré-Mortem (Kahneman)</h3>
        <p className="text-sm text-gray-300 mb-4">Imagine que é março de 2027 e a Tamy falhou. Qual foi a causa mais provável?</p>

        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-red-500">
            <p className="text-xs font-bold text-red-300 mb-1">Cenário 1: Rejeição de Mercado</p>
            <p className="text-xs text-gray-300">"Não conseguimos convencer restaurantes a pagar"</p>
            <p className="text-xs text-gray-400 mt-1">→ <strong>Risco #1 é GTM, não técnico.</strong> Invista 80% em retenção D0-D7. Se não segura cliente em 1 semana, produto pode ser ótimo que não importa.</p>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-yellow-500">
            <p className="text-xs font-bold text-yellow-300 mb-1">Cenário 2: Churn Estrutural</p>
            <p className="text-xs text-gray-300">"Conseguimos clientes mas todos cancelaram em 90 dias"</p>
            <p className="text-xs text-gray-400 mt-1">→ <strong>Risco #1 é onboarding/aha moment.</strong> Foco em Customer Journey (D0-D30 é 80% do sucesso). Ativação D7 = 82% de acurácia em retenção D90.</p>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-blue-500">
            <p className="text-xs font-bold text-blue-300 mb-1">Cenário 3: Competição Acelerada</p>
            <p className="text-xs text-gray-300">"Um incumbente lançou algo similar"</p>
            <p className="text-xs text-gray-400 mt-1">{"→ "}<strong>Risco #1 é velocidade.</strong>{" Nunca competir em features — competir em velocidade de execução e go-to-market. Aprendizado + iteração rápida > produto perfeito."}</p>
          </div>
        </div>

        <p className="text-xs font-bold text-gray-300 mt-4 pt-4 border-t border-gray-700">Saiba qual é o SEU risco principal e invista 80% da energia lá.</p>
      </div>

      {/* HEALTH SCORE */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">Health Score Framework</h3>
      <p className="text-gray-500 text-sm mb-4">5 dimensões para prever churn antes que aconteça — Fórmula detalhada</p>

      <Panel className="reveal mb-4">
        <h4 className="font-bold text-gray-900 text-sm mb-3">Scoring Detalhado (Total 100 pontos)</h4>
        <div className="space-y-2.5 mb-4">
          {[
            {
              name: '1. Frequência de Uso',
              pts: '30 pts',
              desc: '0-1/semana = 0 pts | 2-3 = 15 pts | 4+ = 30 pts',
              color: 'bg-purple-50 border-purple-200'
            },
            {
              name: '2. Profundidade de Dados',
              pts: '25 pts',
              desc: 'Só P&L = 5 pts | P&L + CMV = 15 pts | 3+ módulos = 25 pts',
              color: 'bg-blue-50 border-blue-200'
            },
            {
              name: '3. Recência',
              pts: '20 pts',
              desc: '> 7 dias = 0 pts | 3-7 dias = 10 pts | < 3 dias = 20 pts',
              color: 'bg-green-50 border-green-200'
            },
            {
              name: '4. Completude',
              pts: '15 pts',
              desc: '< 30% dados = 0 pts | 30-70% = 8 pts | > 70% = 15 pts',
              color: 'bg-amber-50 border-amber-200'
            },
            {
              name: '5. Sentimento (NPS proxy)',
              pts: '10 pts',
              desc: 'Detractor = 0 pts | Passive = 5 pts | Promoter = 10 pts',
              color: 'bg-red-50 border-red-200'
            },
          ].map(({ name, pts, desc, color }) => (
            <div key={name} className={`border rounded-lg p-2.5 ${color}`}>
              <div className="flex items-start justify-between mb-1">
                <div className="font-bold text-xs text-gray-900">{name}</div>
                <span className="font-black text-sm text-gray-700">{pts}</span>
              </div>
              <div className="text-xs text-gray-600">{desc}</div>
            </div>
          ))}
        </div>

        <h4 className="font-bold text-gray-900 text-sm mb-3 mt-4 pt-4 border-t">Tiers de Ação</h4>
        <div className="space-y-2">
          {[
            { tier: '80-100 🏆 Champion', action: 'Pedir referral, case study, upsell' },
            { tier: '50-79 ✅ Healthy', action: 'Manter engajamento, educar features, monitorar' },
            { tier: '30-49 ⚠️ At Risk', action: 'Email "perdemos você", call CS, intervenção proativa' },
            { tier: '0-29 🚨 Critical', action: 'Call urgente Pedro (primeiros 100), diagnóstico gratuito, meta 0% sem intervenção em 48h' },
          ].map(({ tier, action }) => (
            <div key={tier} className="border rounded-lg p-2.5 bg-gray-50 flex gap-2">
              <span className="font-bold text-xs text-gray-900 flex-1">{tier}</span>
              <span className="text-xs text-gray-600 flex-1 text-right">{action}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs font-bold text-gray-900 mb-1">📊 Meta Benchmark</p>
          <p className="text-xs text-gray-700"><strong>{"43% das perdas de clientes SMB acontecem nos primeiros 90 dias."}</strong>{" Health Score inverte isso: clientes > 50 em D30 → 95%+ retenção em D90."}</p>
        </div>
      </Panel>

      {/* FOUNDERS */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">Founders — Autoridade & Execução</h3>
      <div className="dual-panel reveal">
        <Panel className="border-t-4 border-blue-500">
          <div className="flex gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white font-black shrink-0">PS</div>
            <div>
              <div className="font-bold text-gray-900">Pedro Smolka — CEO & Co-Founder</div>
              <div className="text-xs text-blue-600">Visão Operacional</div>
            </div>
          </div>
          <ul className="space-y-1.5 text-xs text-gray-600">
            <li className="flex gap-1.5"><span className="text-blue-400">•</span><span><strong>Co-fundador Janela Bar:</strong> 40+ unidades, R$ 60M em 2026, expansão internacional</span></li>
            <li className="flex gap-1.5"><span className="text-blue-400">•</span><span><strong>Co-fundador Grupo Rua:</strong> holding de bares e restaurantes</span></li>
            <li className="flex gap-1.5"><span className="text-blue-400">•</span><span><strong>Sócio Soft Ice Cream:</strong> rede de sorveterias, 3 lojas</span></li>
            <li className="flex gap-1.5"><span className="text-blue-400">•</span><span><strong>Fundador Mesa Boteco e A Martita:</strong> marmitaria pra mãe</span></li>
            <li className="flex gap-1.5"><span className="text-blue-400">•</span><span><strong>VIVEU a dor na pele:</strong> 40+ anos em gastronomia operacional, escala real, decisões com dados</span></li>
            <li className="flex gap-1.5"><span className="text-blue-400">•</span><span className="italic">"Eu sou o dono de restaurante que precisava da Tamy e ela não existia. Então eu criei."</span></li>
          </ul>
        </Panel>
        <Panel className="border-t-4 border-purple-500">
          <div className="flex gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black shrink-0">MB</div>
            <div>
              <div className="font-bold text-gray-900">Matheus Benites — CTO & Co-Founder</div>
              <div className="text-xs text-purple-600">Dados e Produto</div>
            </div>
          </div>
          <ul className="space-y-1.5 text-xs text-gray-600">
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>7+ anos eng. software:</strong> NuORDER/Lightspeed, Rock Content, Easy Carros</span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>Especialista em AI, LLMs, sistemas distribuídos, fintech</strong></span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>Construiu Tamy desde o dia 0:</strong> 111+ skills, 6 agentes especializados (Finance 33+, Analytics 16+, Operations 11+, Menu 6+, Workflow 18+, General 3+), 150+ benchmarks, 254+ test files</span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>Arquitetou integração Open Finance (Pluggy):</strong> sync bancário automático</span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>4-layer memory system:</strong> Working, Episodic, Semantic, Business</span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>16 skills multimodais:</strong> processamento de documentos (OCR, áudio, PDF, planilhas)</span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span><strong>Blog papode.dev,</strong> 6.900+ seguidores LinkedIn</span></li>
            <li className="flex gap-1.5"><span className="text-purple-400">•</span><span className="italic">"Eu construo a tecnologia que torna acessível o que antes só rede grande tinha."</span></li>
          </ul>
        </Panel>
      </div>
    </div>
  )
}
