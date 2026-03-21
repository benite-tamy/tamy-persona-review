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
    desc: 'O que ela reclama? O que trava seu resultado? O que faz procurar ajuda?',
    summary: 'A principal dor é a falta de clareza e controle financeiro no dia a dia. O negócio vende e funciona, mas a gestão fica confusa, o dinheiro perde rastreabilidade. O dono perde 5-15% de margem por CMV descontrolado, gasta 2h/dia em fechamento manual, e opera como "middleware humano" entre 5 sistemas que não conversam — restaurantes fechando por falta de inteligência financeira, não por falta de cliente.',
    sections: [
      {
        label: 'Internas — dentro do negócio, sob controle do dono',
        items: [
          ['Não sabe o lucro real — confunde faturamento com lucro. "Quanto sobra no fim do mês?" sem resposta clara', 'post', 'Post'],
          ['Gasta 2+ horas/DIA no fechamento de caixa manual e 10-15h/semana em retrabalho com ferramentas desconectadas', 'video', 'Vídeo'],
          ['Perde 5-15% de margem bruta por não controlar CMV — e não sabe que está perdendo', 'post', 'Post educativo'],
          ['Mistura conta PJ com PF — paga escola do filho com dinheiro do caixa', 'video', 'Vídeo'],
          ['Precifica no achismo — "3x o custo" sem considerar fixos e impostos reais', 'post', 'Post'],
          ['Não tem rotina financeira organizada — gestão sempre fica pra depois por excesso de operação', 'video', 'Vídeo Pedro'],
          ['Sente insegurança para decidir porque não tem informações claras — toma decisões no feeling', 'post', 'Post'],
          ['Quer crescer, mas sente que a gestão ainda está desorganizada demais para expandir com segurança', 'artigo', 'Artigo'],
        ],
      },
      {
        label: 'Externas — mercado, parceiros e contexto fora do controle direto',
        items: [
          ['Sem previsão de fluxo de caixa — paga contas no susto. Causa #1 de inadimplência: 41% ABRASEL', 'infog', 'Infográfico'],
          ['Inflação come a margem em silêncio — 44% não conseguem reajustar o cardápio a tempo', 'calc', 'Calculadora'],
          ['Desperdício invisível de 15-20% das compras (R$7-10k/mês no lixo)', 'infog', 'Infográfico'],
          ['Delivery pode ser deficitário: comissão iFood 12-27% + embalagem — opera no vermelho sem perceber', 'calc', 'Calculadora'],
          ['Contador entrega balancete 45 dias depois — inútil pra decisão real-time', 'post', 'Post'],
          ['Dono é o "middleware humano" entre 5 sistemas que não conversam (PDV, iFood, banco, planilha, WhatsApp)', 'video', 'Vídeo'],
        ],
      },
    ],
  },
  {
    num: 'Q02', color: 'border-red-500', labelColor: 'text-red-600',
    title: 'O que tira o sono ou dá medo na persona?',
    desc: 'Medos reais, emocionais e estratégicos — gatilhos de conversão',
    summary: 'O medo de perder o negócio e comprometer a família é emocional e real. Esses medos são gatilhos de conversão: medo de estar sendo roubado sem dados pra provar, medo de cair na malha fina por mistura PF/PJ, medo de abrir segunda unidade sem unit economics. A Tamy responde com "verdade brutal com compaixão" — diz a verdade financeira, mas sempre com o caminho pra resolver.',
    items: [
      ['Medo de descobrir que está no prejuízo — prefere não olhar, adia o diagnóstico', 'video', 'Vídeo'],
      ['Medo de não pagar folha dia 5 — ansiedade sobre o caixa da semana que vem', 'post', 'Post'],
      ['Medo de perder o dinheiro investido para abrir o negócio e todo o esforço não valer a pena', 'video', 'Vídeo Pedro'],
      ['Medo de virar estatística (~30% fecham em 2 anos, ~62,7% em 5 — SEBRAE)', 'infog', 'Infográfico'],
      ['Medo de decepcionar a família que depende do negócio — estabilidade e futuro em risco', 'video', 'Vídeo Pedro'],
      ['Medo de crescer desorganizado e colapsar — "e se a segunda unidade afundar as duas?"', 'artigo', 'Artigo'],
      ['Medo de que IA seja "coisa de empresa grande" — tecnologia inacessível para o seu porte', 'demo', 'Demo'],
      ['Medo de investir em tecnologia e não usar — já abandonou 2-3 sistemas antes', 'post', 'Post'],
      ['Medo do iFood aumentar comissão sem alternativa — dependência de um canal só', 'post', 'Post'],
      ['Medo de estar sendo roubado sem como provar (sem dados para rastrear desvios)', 'post', 'Post'],
      ['Medo de brigas com sócio sobre dinheiro — sem dados neutros para arbitrar o conflito', 'video', 'Vídeo Pedro'],
      ['Medo de cair na malha fina — mistura PF/PJ, ultrapassou limite MEI sem perceber', 'post', 'Post'],
      ['Medo de ficar irrelevante — vê concorrente com tecnologia e dark kitchens crescendo', 'post', 'Post'],
      ['Medo de decisão errada de expansão sem unit economics comprovados', 'artigo', 'Artigo'],
      ['Medo de o negócio virar fonte de estresse permanente em vez de realização pessoal', 'post', 'Post Pedro'],
    ],
  },
  {
    num: 'Q03', color: 'border-orange-500', labelColor: 'text-orange-600',
    title: 'Qual é o principal perigo que a persona ainda não enxerga?',
    desc: 'O problema invisível que pode destruir o negócio — além do que ela já sente',
    summary: 'O faturamento engana. O perigo invisível vai além da ilusão: é competitivo e temporal. Cada dia sem dados é um dia onde o concorrente com gestão precifica melhor, compra melhor e negocia melhor. A Tamy detecta esses sinais antes que seja tarde: queda de margem, CMV subindo, fluxo negativo, benchmark desviando. O relógio tá correndo.',
    items: [
      ['Faturar bem NÃO significa lucrar bem — fatura R$150k/mês e pode estar no prejuízo após pró-labore e impostos', 'post', 'Post educativo'],
      ['Confunde movimento com resultado — se entra dinheiro, acha que está bem. Fluxo de caixa mascara o problema real', 'video', 'Vídeo'],
      ['Morte financeira silenciosa: margem erode 1-2% por mês sem alarme visível', 'infog', 'Infográfico'],
      ['CMV sem controle: cada 1% acima do ideal = R$1-5k/mês perdidos em silêncio', 'calc', 'Calculadora'],
      ['"Síndrome do caderninho" normaliza a bagunça — cada dia sem dados = decisão errada acumulando', 'video', 'Vídeo'],
      ['Concorrente com dados já precifica e compra melhor — distância aumenta exponencialmente', 'post', 'Post'],
      ['Delivery pode ser armadilha de margem negativa disfarçada — comissão 12-27% + embalagem invisível', 'calc', 'Simulador'],
      ['Dependência iFood: plataforma pode aumentar taxa 3-5pp overnight sem aviso', 'post', 'Post'],
      ['Sazonalidade sem previsão = dívida no pico baixo — 41% do setor inadimplentes (ABRASEL)', 'artigo', 'Artigo'],
      ['Expansão prematura: segunda unidade sem unit economics comprovados = fecha as duas', 'artigo', 'Artigo'],
      ['IA já usada por redes grandes (Toast IQ, Ramp Intelligence) — independente vai ser atropelado se não adotar', 'artigo', 'Artigo'],
      ['Margem encolhendo por inflação acumulada — cardápio congelado, custos subindo silenciosamente', 'post', 'Post'],
      ['Dados se degradam — em 2 anos sem registro, banco pede 24 meses de histórico e ele não tem', 'post', 'Post'],
    ],
  },
  {
    num: 'Q04', color: 'border-green-500', labelColor: 'text-green-600',
    title: 'Quais são as maiores oportunidades com a Tamy?',
    desc: 'Ganhos financeiros, eficiência, tempo e evolução como gestor',
    summary: 'A oportunidade é evoluir como gestor e capturar valor imediato: CMV cai 3-5% (= R$3-9k/mês a mais), 10h/semana de retrabalho eliminadas, previsão de caixa que evita o susto do dia 5. Game-changer: Open Finance (Pluggy) automatiza o loop inteiro. 6 agentes + Open Finance + iFood + PIX = empresa financeira, não SaaS.',
    items: [
      ['Lucro real em tempo real — não em 45 dias do contador. Margem líquida visível diariamente', 'demo', 'Demo'],
      ['Reduzir CMV 3-5% = R$3-9k/mês a mais de lucro com a mesma operação', 'calc', 'Calculadora'],
      ['Eliminar 10-15h/semana de retrabalho administrativo com automação', 'demo', 'Demo'],
      ['Alertas proativos: "Seu CMV subiu 4% essa semana" — detecção antes do dano', 'post', 'Screen recording'],
      ['Previsão de fluxo de caixa 14-30 dias — saber antes se vai faltar, zero surpresas dia 5', 'post', 'Post'],
      ['Foto da nota no WhatsApp → despesa categorizada em <30s (Claude Vision + OCR)', 'demo', 'Demo'],
      ['Daily P&L Card às 7h no WhatsApp — resultado do dia anterior sem abrir nada', 'demo', 'Demo'],
      ['6 agentes especializados: Finance (33 skills), Analytics (16), Ops (11), Menu (6), Workflow (18), General (3)', 'infog', 'Infográfico'],
      ['Performance por canal: salão vs. delivery vs. WhatsApp — margem real por canal', 'demo', 'Demo'],
      ['Open Finance integrado (Pluggy): bank sync automático — zero conciliação manual', 'demo', 'Demo'],
      ['4-Layer Memory: quanto mais usa, mais a Tamy entende o negócio específico dele', 'post', 'Post'],
      ['Análise de margem por prato: saber qual item tirar do cardápio e qual impulsionar', 'demo', 'Demo'],
      ['Gamificação Duolingo: streak + badges + Tamy Score = hábito diário de gestão', 'post', 'Post'],
      ['Tomar decisões com segurança baseadas em números — sair do feeling para dados reais', 'post', 'Post Pedro'],
      ['Crescer com segurança — sabendo que tem base financeira sólida para expandir com confiança', 'artigo', 'Artigo'],
    ],
  },
  {
    num: 'Q05', color: 'border-purple-500', labelColor: 'text-purple-600',
    title: 'Existem oportunidades que a persona ainda não enxerga?',
    desc: 'Oportunidades invisíveis — o upside que o(a) dono(a) não percebe',
    summary: 'As oportunidades invisíveis são o endgame da Tamy. O dono compra gestão inteligente (Ramp+Restoke), se vicia na experiência (Duolingo), recebe banco (Toast), e no futuro PDV integrado. Efeito de rede: benchmarks mais precisos a cada restaurante. Data moat de 18 meses — nenhum concorrente copia. Open Finance + histórico = credit scoring com juros até 40% menores.',
    items: [
      ['Lucrar mais sem vender mais — otimizando compras, desperdício e precificação com os mesmos clientes', 'post', 'Post'],
      ['Mais controle não é só organizar bagunça — é liberar margem e melhorar caixa sem crescer faturamento', 'post', 'Post Pedro'],
      ['IA conversacional democratiza o controller: R$189,90 vs R$10k/mês de um analista financeiro', 'post', 'Comparativo'],
      ['Dados valem ouro para negociar com fornecedor, banco e investidor — poder de barganha real', 'artigo', 'Artigo'],
      ['Gestão organizada = pré-requisito para crédito barato. "Score financeiro" para crédito com juros até 40% menores', 'post', 'Post fintech'],
      ['Negócio pode ser franqueável se provar unit economics com dados reais', 'post', 'Post'],
      ['Efeito de rede: benchmarks ficam mais precisos com mais restaurantes na Tamy', 'post', 'Post'],
      ['Data moat de 18 meses — nenhum concorrente copia a profundidade de dados acumulados', 'artigo', 'Artigo'],
      ['Roadmap Toast+Ramp+Restoke+Duolingo: SaaS inteligente → Plataforma gamificada → Fintech+PDV', 'artigo', 'Artigo'],
      ['Comunidade "Donos Inteligentes" — benchmark comparativo, cases compartilhados, peer learning', 'demo', 'Programa'],
      ['Gamificação: streaks, achievements ("CMV Killer"), ranking anonimizado entre pares do mesmo segmento', 'demo', 'Demo'],
      ['"Seu CFO de IA" — o que rede de 500 unidades tinha, agora no WhatsApp por R$189/mês', 'post', 'Post'],
      ['Aprender gestão na prática transforma o negócio atual e o futuro como empreendedor serial', 'post', 'Post Pedro'],
    ],
  },
  {
    num: 'Q06', color: 'border-pink-500', labelColor: 'text-pink-600',
    title: 'Quais são os sonhos da persona?',
    desc: 'Identidade, aspiração e liberdade — o que o(a) dono(a) quer se tornar',
    summary: 'O sonho dessa persona é o espelho do nosso propósito. O mais poderoso para conteúdo: "ir buscar o filho na escola sem medo do caixa" — liberdade é emocional, não financeira. Cadeia: dados organizados → unit economics provados → expansão com confiança → crédito acessível → legado.',
    items: [
      ['Negócio que gera dinheiro sem estar 14h/dia lá — liberdade de tempo real', 'post', 'Storytelling'],
      ['Sair do caos para ter controle e tranquilidade — voltar a amar tocar o próprio negócio', 'video', 'Vídeo Pedro'],
      ['Ser reconhecido como empresário, não "o cara do restaurante" — construir identidade de dono', 'post', 'Post'],
      ['Ir buscar filho na escola sem culpa — liberdade emocional, não só financeira', 'post', 'Post emocional'],
      ['Dar segurança pra família sem estresse — oferecer futuro e estabilidade real', 'video', 'Vídeo Pedro'],
      ['Voltar a amar o negócio — muitos no ponto de burnout sem perceber', 'video', 'Vídeo'],
      ['Abrir segunda unidade com confiança — sabendo os números com precisão antes de expandir', 'artigo', 'Artigo'],
      ['Ser caso de sucesso — "quase fechou e hoje fatura X com Y% de lucro"', 'post', 'Série'],
      ['Controlar 3 unidades do celular pelo WhatsApp — expansão sem perder controle', 'demo', 'Demo'],
      ['Ser o(a) dono(a) que OUTROS donos(as) pedem conselhos — autoridade no setor', 'post', 'Storytelling'],
      ['Acessar crédito sem implorar pro gerente do banco — dados que falam por si', 'post', 'Post fintech'],
      ['Construir legado — negócio que pode passar pros filhos ou vender com valuation real', 'artigo', 'Artigo'],
      ['Selo "Restaurante Inteligente 🏅" — status social de dono que usa dados para decidir', 'post', 'Post'],
    ],
  },
  {
    num: 'Q07', color: 'border-amber-500', labelColor: 'text-amber-600',
    title: 'Quais os preconceitos e crenças limitantes da persona?',
    desc: 'Barreiras mentais que impedem a adoção — objeções de venda disfarçadas',
    summary: 'A barreira não é técnica — é mental e emocional. Os preconceitos são objeções de venda disfarçadas. O produto foi desenhado para destruir cada objeção no momento de uso, não no pitch: modo demo sem dados reais, Daily P&L Card no D1, e WhatsApp-first existem exatamente por causa dessas crenças.',
    sections: [
      {
        label: 'Sobre Gestão e Finanças',
        items: [
          ['"Gestão financeira é coisa de contador" — contador entrega em 45 dias, Tamy em tempo real', 'post', 'Post'],
          ['"Se tá vendendo, tá lucrando" — calcula o seu CMV real agora e descobre a verdade', 'calc', 'Calculadora'],
          ['"Não tenho tempo pra aprender" — setup completo em 5 min, sem treinamento ou manual', 'demo', 'Demo'],
          ['"Meu negócio é simples demais pra sistema" — funciona para quem fatura R$30k/mês', 'post', 'Post'],
          ['"No meu ramo é assim mesmo" — quem organiza, lucra mais. Os dados provam.', 'post', 'Post'],
          ['"Não sou bom com números" — a Tamy é. Você só lê o resultado no WhatsApp.', 'post', 'Post'],
          ['"Preciso organizar antes de começar" — modo demo sem dados reais elimina essa barreira', 'demo', 'Demo'],
          ['Vergonha de mostrar a "bagunça" financeira — a Tamy é confidencial, sem julgamento', 'post', 'Post Pedro'],
        ],
      },
      {
        label: 'Sobre IA e Tecnologia',
        items: [
          ['"IA é coisa de empresa grande" — demo da Dona Maria do boteco prova o contrário', 'demo', 'Demo'],
          ['"Já tentei sistema e ninguém usa em 2 semanas" — Tamy vai atrás, não espera você abrir', 'post', 'Comparativo'],
          ['"Tecnologia é cara" — R$189,90 = menos que 1 prato executivo/dia de margem recuperada', 'post', 'Post'],
          ['"ChatGPT faz de graça" — não tem seus dados, 79+ skills específicas de food service, 150+ benchmarks por segmento, alertas proativos', 'post', 'Side-by-side'],
          ['"WhatsApp não é lugar pra gestão" — é EXATAMENTE onde o dono já está 50x/dia', 'post', 'Post'],
        ],
      },
    ],
  },
  {
    num: 'Q08', color: 'border-indigo-500', labelColor: 'text-indigo-600',
    title: 'Quais os desafios na implementação?',
    desc: 'O que pode impedir a persona de usar o que comprou — pós-venda e retenção',
    summary: 'O maior desafio: 70% do churn acontece nos primeiros 90 dias, e ativação no D7 prevê retenção D90 com 82% de acurácia. Por isso a Tamy é proativa (vai atrás do dono no WhatsApp) e não passiva (esperando abrir app). Meta PMF: retenção >95% para clientes que passaram dos 90 dias.',
    items: [
      ['Dados em 5+ fontes (PDV, iFood, banco, caderno, WhatsApp) — fragmentação dificulta onboarding', 'infog', 'Infográfico'],
      ['Dono é o gargalo — se ele não adotar nos primeiros 7 dias, ninguém adota', 'artigo', 'Artigo'],
      ['Falta de tempo para parar e colocar nova rotina em prática — gestão sempre fica pra depois', 'post', 'Post Pedro'],
      ['Resistência da equipe — "sempre fizemos assim" como bloqueador interno', 'post', 'Post'],
      ['Expectativa de resultado imediato sem alimentar o sistema nos primeiros dias', 'post', 'Post'],
      ['Vergonha de expor a "bagunça" financeira — barreira para o primeiro lançamento real', 'post', 'Post'],
      ['Sazonalidade cria urgências que empurram gestão para depois — meses ruins são exatamente quando mais precisa', 'post', 'Post'],
      ['Cold start D7: ativação no D7 prevê retenção D90 com 82% de acurácia — janela crítica', 'post', 'Pitch'],
      ['Contador como bloqueador: posicionar Tamy como complemento ao contador, não substituto', 'artigo', 'Artigo'],
      ['70% churn nos primeiros 90 dias: Tamy é proativa (WhatsApp), não passiva (app)', 'post', 'Post'],
      ['Streaks + Tamy Score = dono com streak de 30d NÃO cancela — gamificação como retenção', 'demo', 'Gamificação'],
      ['Grupo "Donos Inteligentes" cria custo social de sair — peer pressure positivo como lock-in', 'demo', 'Comunidade'],
    ],
  },
  {
    num: 'Q09', color: 'border-teal-500', labelColor: 'text-teal-600',
    title: 'Como a persona toma decisões de compra?',
    desc: 'Fatores de decisão — o que convence e o que bloqueia a conversão',
    summary: 'A decisão de compra é resolvida por 4 pilares: (1) WhatsApp como canal — zero download, zero login. (2) Modo demo sem dados reais — risco percebido zero. (3) ROI comprovável em 30 dias. (4) Pedro como prova de autoridade — CEO que fundou o Janela Bar (40+ unidades, R$60M) e VIVEU a dor. A confiança não vem de marketing — vem de um fundador que fala a mesma língua.',
    items: [
      ['Simplicidade #1 — funcionar no celular na cozinha, sem treinamento ou manual', 'demo', 'Demo'],
      ['Resultado visível na primeira semana (não no trimestre)', 'post', 'Post'],
      ['R$189,90 = investimento, não custo — ROI 5x em desperdício recuperado', 'post', 'Post'],
      ['Confiança: Pedro = Janela Bar 40+ unidades R$60M — viveu a dor na pele', 'post', 'Post Pedro'],
      ['Prova social: casos de alguém parecido — mesma cidade, mesmo porte, mesmo segmento', 'post', 'Depoimentos'],
      ['IA vai atrás do dono (proativa via WhatsApp), não espera ele abrir app', 'post', 'Post'],
      ['Feita para bares, restaurantes, cafés — especialista no setor, não sistema genérico', 'post', 'Post Pedro'],
      ['Dados seguros: LGPD + criptografia — conformidade garantida desde o D1', 'post', 'Post'],
      ['WhatsApp = zero fricção de canal — onde o dono já está 50x/dia', 'post', 'Post'],
      ['Modo demo sem compromisso (dados fictícios) — zero risco para experimentar', 'demo', 'Demo'],
      ['ROI comprovável em 30 dias — garantia integral se não encontrar R$200/mês de economia', 'calc', 'ROI Calculator'],
      ['Compatível com PDV, banco, iFood que já usa — não substitui, integra', 'post', 'Post'],
    ],
  },
  {
    num: 'Q10', color: 'border-green-500', labelColor: 'text-green-600',
    title: 'Quais os principais objetivos e metas da persona?',
    desc: 'Metas financeiras e operacionais de curto e médio prazo — números concretos',
    summary: 'As metas se encaixam nos objetivos dos Fundamentos. PMF: os primeiros 50-100 clientes vão provar que a Tamy transforma margem de ~5% → 12-15%, CMV de 35-40% → 28-32%, horas admin de 15h/semana → 3h, e fechamento de 2h → <10 min.',
    items: [
      ['Ter clareza real sobre quanto fatura, gasta e realmente lucra — pela primeira vez, sem estimativa', 'post', 'Post Pedro'],
      ['Margem líquida: ~5% → 12-15%', 'post', 'Benchmark'],
      ['CMV: 35-40% → 28-32% (meta por segmento)', 'calc', 'Calculadora'],
      ['Controlar receitas, despesas, contas a pagar e a receber sem depender de contador', 'demo', 'Demo'],
      ['Fluxo de caixa previsível com 30 dias de antecedência — zero surpresas no dia 5', 'demo', 'Demo'],
      ['Horas administrativas: 15h/semana → 3h/semana', 'post', 'Post'],
      ['Separar dinheiro da empresa do pessoal — pró-labore fixo e consciente', 'post', 'Post Pedro'],
      ['Fechamento diário: 2h → <10 min', 'demo', 'Demo'],
      ['Eliminar "cegueira de delivery" — margem real por canal (salão vs. iFood vs. WhatsApp)', 'post', 'Post'],
      ['Desperdício: 15-20% → <10%', 'infog', 'Infográfico'],
      ['Dados prontos pra pedir crédito — 12-24 meses de histórico organizado', 'artigo', 'Artigo'],
      ['Expansão com dados em 12-24 meses — segunda unidade com unit economics comprovados', 'post', 'Checklist'],
      ['Estruturar o negócio para crescer — profissionalizar gestão sem complexidade desnecessária', 'artigo', 'Artigo Pedro'],
    ],
  },
  {
    num: 'Q11', color: 'border-orange-500', labelColor: 'text-orange-600',
    title: 'Qual o perfil do cliente ideal (ICP) dessa persona?',
    desc: 'Demográfico, psicográfico, momento de conversão e jornada de compra',
    summary: 'O ICP é a encarnação da nossa missão. Pragmático (quer número, não gráfico bonito), orgulhoso da comida mas inseguro com gestão, desconfiado de promessas, orientado a urgência, influenciado por pares (referral > ads). Começa pelo WhatsApp, abandona qualquer ferramenta em 72h sem valor, mas indica ativamente se sentir resultado em 30 dias.',
    items: [
      ['Idade: 28-50 anos (concentração 30-45). SEBRAE: 46% entre 30-49 anos', 'infog', 'Infográfico'],
      ['Gênero: 52,7% mulheres / 47,3% homens no setor (ABRASEL 2025). Em delivery/marmitas: 67,34% mulheres', 'infog', 'Infográfico'],
      ['Gastronomia e food service — bares, restaurantes, cafés, hamburguerias, marmitarias, dark kitchens', 'post', 'Post'],
      ['Proprietário(a), sócio(a)-operador(a) — centralizado no dono, processos manuais', 'post', 'Post Pedro'],
      ['Faturamento: R$30k–400k/mês. Estrutura enxuta, baixa estrutura administrativa', 'infog', 'Infográfico'],
      ['Em operação com vendas, mas sem clareza de resultado real — já sente a dor', 'post', 'Post'],
      ['Digital: WhatsApp principal, Instagram como vitrine, YouTube/TikTok pra consumo de conteúdo', 'post', 'Post'],
      ['Busca Google quando tem problema: "como calcular CMV restaurante", "como precificar prato"', 'post', 'SEO'],
      ['Converte quando: mês ruim sem entender por quê, expansão sem dados, IR assustou, briga com sócio', 'post', 'Post'],
      ['Psicográfico: pragmático (quer número, não gráfico bonito), orgulhoso da comida, inseguro com gestão', 'post', 'Post'],
      ['Ciclo de atenção: 15-30 segundos. Abandona ferramenta em <72h sem valor percebido', 'post', 'Post'],
      ['D7 activation = 82% acurácia de retenção D90 — janela crítica de ativação', 'post', 'Pitch'],
      ['Economizou R$500+ no primeiro mês → indica naturalmente. Influenciado por pares > ads', 'post', 'Post'],
      ['Anti-personas: redes 50+ unidades, MEI <R$15k/mês, franqueados de grandes redes, "só emitir NF"', 'post', 'Post'],
    ],
    jornada: [
      { step: 'Aprendizado', desc: 'Vê post sobre CMV, busca no Google. SEO: "como calcular CMV restaurante"' },
      { step: 'Reconhecimento', desc: 'CMV está em 42% (deveria ser 30%). Mês de caixa negativo. Busca soluções, pergunta amigos.' },
      { step: 'Consideração', desc: 'Tamy vs. contador vs. planilha vs. Saipos. Olha preço, facilidade, prova social.' },
      { step: 'Decisão', desc: 'Trial 14 dias grátis. Primeiro número real em <10 min. D7 = 82% acurácia de retenção D90.' },
      { step: 'Expansão', desc: 'Economizou R$500+ no primeiro mês. Indica naturalmente. Referral automático após 30 dias.' },
    ],
  },
  {
    num: 'Q12', color: 'border-slate-500', labelColor: 'text-slate-600',
    title: 'Contexto adicional e conexões estratégicas',
    desc: 'Integração com Fundamentos, Sexy Canvas e mapa de conteúdo',
    summary: 'Q12 conecta tudo: cada pergunta tem conteúdo independente (posts, vídeos, calculadoras) que alimenta o funil. O mapa de conteúdo sai direto das 12 perguntas — cada Q é um pilar editorial autônomo que nutre o funil de topo ao fundo.',
    items: [
      ['A persona é o dono que trabalha mais que qualquer funcionário — não é incompetente, é sobrecarregado e sem ferramentas certas', 'post', 'Post Pedro'],
      ['Pedro é a voz da marca porque é a persona que virou founder — prova social máxima, fala a mesma língua', 'video', 'Vídeo Pedro'],
      ['O conteúdo deve educar, não vender — a venda é consequência da educação e da confiança', 'artigo', 'Artigo'],
      ['Cada pergunta = 3-5 peças de conteúdo independentes (post, vídeo, calculadora, demo)', 'post', 'Content Map'],
      ['Mapa: Dores → Posts educativos, Medos → Vídeos Pedro, Oportunidades → Demos, Sonhos → Storytelling', 'artigo', 'Planejamento'],
      ['Sexy Canvas informa o tom: Ira nas headlines, Preguiça na UX, Liberdade na promessa de valor', 'post', 'Post'],
      ['Fundamentos informam a profundidade: cada feature conecta a um Valor da empresa', 'post', 'Post'],
      ['Anti-personas informam o targeting: quem NÃO gastar CAC — economiza R$200-500/lead descartado', 'post', 'Post'],
      ['Cada interação com a Tamy deve respeitar o tempo escasso do dono — clareza em segundos, não minutos', 'post', 'Post Pedro'],
    ],
  },
]

function renderItem(item, i) {
  if (Array.isArray(item)) {
    const [text, type, label] = item
    return (
      <li key={i} className="flex gap-1.5 text-xs text-gray-700">
        <span className="text-gray-400 shrink-0 mt-0.5">•</span>
        <span>{text}<Tag type={type}>{label}</Tag></span>
      </li>
    )
  }
  return (
    <li key={i} className="flex gap-1.5 text-xs text-gray-700">
      <span className="text-gray-400 shrink-0 mt-0.5">•</span>
      <span>{item}</span>
    </li>
  )
}

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
          {/* Founders attribution */}
          <div className="flex gap-2 pt-3 pb-3">
            <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-lg px-2 py-1">
              <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-black">PS</div>
              <span className="text-xs text-blue-700 font-medium">Pedro Smolka — CEO</span>
            </div>
            <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-100 rounded-lg px-2 py-1">
              <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center text-white text-xs font-black">MB</div>
              <span className="text-xs text-purple-700 font-medium">Matheus Benites — CTO</span>
            </div>
          </div>

          {/* Sections (Q01 Internas/Externas, Q07 Gestão/IA) or flat items list */}
          {p.sections ? (
            <div className="mb-4 space-y-4">
              {p.sections.map(sec => (
                <div key={sec.label}>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">{sec.label}</p>
                  <ul className="space-y-1.5">
                    {sec.items.map((item, i) => renderItem(item, i))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-1.5 mb-4">
              {p.items.map((item, i) => renderItem(item, i))}
            </ul>
          )}

          {/* Jornada de compra (Q11 only) */}
          {p.jornada && (
            <div className="mb-4">
              <p className="text-xs font-bold text-gray-700 mb-2">Jornada de Compra (Funil)</p>
              <div className="flex flex-col sm:flex-row gap-2">
                {p.jornada.map(({ step, desc }, i) => (
                  <div key={step} className="flex-1 bg-gray-50 rounded-xl p-2.5 border border-gray-200 relative">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-5 h-5 rounded-full bg-gray-700 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                      <span className="text-xs font-bold text-gray-800">{step}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
            <p className="text-xs font-semibold text-gray-700 mb-1">Síntese consolidada</p>
            <p className="text-xs text-gray-600 leading-relaxed">{p.summary}</p>
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
        desc="Dores, medos, perigos, oportunidades, sonhos, preconceitos, desafios, decisão, objetivos e ICPs — perspectivas consolidadas de Pedro Smolka (CEO) e Matheus Benites (CTO)"
      />

      <div className="space-y-3 mb-6">
        {perguntas.map(p => <PerguntaCard key={p.num} p={p} />)}
      </div>
    </div>
  )
}
