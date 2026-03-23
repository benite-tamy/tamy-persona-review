import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import ExportButtons from '../components/ExportButtons.jsx'
import { exportPerguntasToPDF } from '../utils/exportToPDF.js'
import { exportPerguntasToDocx } from '../utils/exportToDocx.js'

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
    summary: 'O faturamento engana. O perigo invisível vai além da ilusão: é competitivo e temporal. Toast IQ (EUA), Restoke AI (Austrália) e MarginEdge já são AI-first para restaurantes — redes grandes no exterior já usam IA para precificar, comprar e prever. No Brasil, nenhum concorrente independente tem IA ainda. Mas a janela está fechando: iFood comprou Saipos (Abr/2025), F360 começou IA (2025). Cada dia sem IA financeira é um dia onde o concorrente com dados precifica melhor. A Tamy detecta esses sinais antes que seja tarde.',
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
      ['IA já usada por redes grandes: Toast IQ (148k restaurantes, chat-first), Restoke (foto→custo automático), MarginEdge (forecasting 96% precisão) — independente BR vai ser atropelado se não adotar antes do bundle iFood', 'artigo', 'Artigo'],
      ['Margem encolhendo por inflação acumulada — cardápio congelado, custos subindo silenciosamente', 'post', 'Post'],
      ['Dados se degradam — em 2 anos sem registro, banco pede 24 meses de histórico e ele não tem', 'post', 'Post'],
    ],
  },
  {
    num: 'Q04', color: 'border-green-500', labelColor: 'text-green-600',
    title: 'Quais são as maiores oportunidades com a Tamy?',
    desc: 'Ganhos financeiros, eficiência, tempo e evolução como gestor',
    summary: 'A oportunidade é ter uma IA que faz o trabalho financeiro inteiro — o dono só confirma. CMV cai 3-5% (= R$3-9k/mês a mais), 10h/semana de retrabalho eliminadas, previsão de caixa que evita o susto do dia 5. Game-changer: Open Finance (Pluggy) conecta o banco e automatiza o loop inteiro — a IA reconcilia, categoriza, calcula e alerta sem o dono digitar nada. E ainda ensina: "Seu CMV está em 42%, o ideal é 28-35%. Quer que eu simule um ajuste?"',
    items: [
      ['Lucro real em tempo real — não em 45 dias do contador. Margem líquida visível diariamente', 'demo', 'Demo'],
      ['Reduzir CMV 3-5% = R$3-9k/mês a mais de lucro com a mesma operação', 'calc', 'Calculadora'],
      ['Eliminar 10-15h/semana de retrabalho administrativo com automação', 'demo', 'Demo'],
      ['Alertas proativos: "Seu CMV subiu 4% essa semana" — detecção antes do dano', 'post', 'Screen recording'],
      ['Previsão de fluxo de caixa 14-30 dias — saber antes se vai faltar, zero surpresas dia 5', 'post', 'Post'],
      ['Foto da nota no WhatsApp → IA categoriza, extrai itens, calcula custo em <30s (Claude Vision + OCR). Zero digitação.', 'demo', 'Demo'],
      ['Daily P&L Card às 7h no WhatsApp — a IA calculou o resultado do dia anterior enquanto Carlos dormia', 'demo', 'Demo'],
      ['6 agentes AI especializados (79+ skills): a IA faz P&L, CMV, precificação, alerta, educação financeira. O dono confirma.', 'infog', 'Infográfico'],
      ['Performance por canal: salão vs. delivery vs. WhatsApp — margem real por canal', 'demo', 'Demo'],
      ['Open Finance (Pluggy): banco conectado → IA reconcilia iFood/Rappi com extrato automaticamente. Detecta taxas indevidas. Zero trabalho manual.', 'demo', 'Demo'],
      ['4-Layer Memory: a IA aprende sobre o negócio dele — fornecedores, sazonalidade, padrão de compras. Quanto mais usa, mais inteligente fica.', 'post', 'Post'],
      ['Análise de margem por prato: saber qual item tirar do cardápio e qual impulsionar', 'demo', 'Demo'],
      ['Gamificação Duolingo: streak + badges + Tamy Score = hábito diário de gestão', 'post', 'Post'],
      ['Tomar decisões com segurança baseadas em números — sair do feeling para dados reais', 'post', 'Post Pedro'],
      ['Crescer com segurança — sabendo que tem base financeira sólida para expandir com confiança', 'artigo', 'Artigo'],
    ],
  },
  {
    num: 'Q05', color: 'border-purple-500', labelColor: 'text-purple-600',
    title: 'Existem oportunidades que a persona ainda não enxerga?',
    desc: 'O upside invisível que Carlos e Márcia não percebem que existe no próprio negócio',
    summary: 'Carlos e Márcia não sabem o que não sabem. Acham que para lucrar mais precisam vender mais — mas a maior oportunidade está em otimizar o que já têm. A IA da Tamy não só encontra essas oportunidades — ensina por que existem e o que fazer. "Seu prato mais pedido tem margem 8% menor que o segundo. Se ajustar o preço em R$2, ganha R$1.400/mês." O dono aprende finanças enquanto usa o produto. 12 meses de dados organizados valem crédito com juros 40% menores. Nenhuma dessas oportunidades é visível sem IA — e é exatamente aí que a Tamy entra.',
    items: [
      ['Lucrar mais sem vender mais — otimizar CMV, desperdício e precificação com os mesmos clientes e a mesma operação', 'post', 'Post'],
      ['O prato mais pedido pode ter a pior margem — e tirá-lo do cardápio aumenta lucro sem perder faturamento', 'demo', 'Demo'],
      ['O delivery pode estar destruindo a margem do salão — sair do iFood pode ser mais lucrativo do que parecer', 'calc', 'Calculadora'],
      ['Desperdício de 15-20% é recuperável em 30 dias — R$7-10k/mês de volta ao caixa sem mudar nada na operação', 'infog', 'Infográfico'],
      ['Têm poder de negociação com fornecedor que nunca usaram — sem dados, compram "no grito" e pagam mais', 'artigo', 'Artigo'],
      ['12 meses de histórico financeiro organizado desbloqueiam crédito com juros até 40% menores — sem pedir favor no banco', 'post', 'Post fintech'],
      ['A segunda unidade pode ser viável agora — não precisam de mais capital, só de organizar o CMV da primeira', 'artigo', 'Artigo Pedro'],
      ['A sazonalidade é previsível e pode ser monetizada — mês fraco é oportunidade de renegociar, reformar, treinar', 'post', 'Post'],
      ['Podem delegar a operação e sair do dia a dia — mas só quando tiverem processos documentados com dados reais', 'post', 'Post Pedro'],
      ['O negócio pode ser franqueável — com unit economics provados valem 10-20x o faturamento anual para um comprador', 'post', 'Post'],
      ['A IA ensina gestão financeira no próprio negócio — "CMV significa Custo de Mercadoria Vendida. O seu está em 42%, deveria ser 32%. Isso custa R$8.500/mês." O dono fica mais inteligente a cada interação, sem faculdade', 'post', 'Post Pedro'],
      ['Benchmark contra pares do mesmo segmento revela onde estão perdendo que nunca veriam sozinhos', 'infog', 'Infográfico'],
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
    summary: 'A barreira não é técnica — é mental e emocional. A objeção #1 "não tenho tempo" é destruída pelo paradigma AI-first: a IA faz 95% do trabalho, o dono só confirma. Não precisa aprender sistema, não precisa digitar, não precisa abrir app. A IA vai atrás dele no WhatsApp. Os preconceitos sobre IA ("coisa de empresa grande", "já tentei sistema") são destruídos no momento de uso, não no pitch.',
    sections: [
      {
        label: 'Sobre Gestão e Finanças',
        items: [
          ['"Gestão financeira é coisa de contador" — contador entrega em 45 dias, Tamy em tempo real', 'post', 'Post'],
          ['"Se tá vendendo, tá lucrando" — calcula o seu CMV real agora e descobre a verdade', 'calc', 'Calculadora'],
          ['"Não tenho tempo pra aprender" — não precisa aprender nada. A IA faz tudo: categoriza, calcula, alerta. Você só confirma no WhatsApp. Setup em 5 min.', 'demo', 'Demo'],
          ['"Meu negócio é simples demais pra sistema" — funciona para quem fatura R$30k/mês', 'post', 'Post'],
          ['"No meu ramo é assim mesmo" — quem organiza, lucra mais. Os dados provam.', 'post', 'Post'],
          ['"Não sou bom com números" — a IA é. E ainda ensina: "Margem de contribuição significa quanto sobra depois do custo variável. A sua é 38%." Você aprende sem perceber.', 'post', 'Post'],
          ['"Preciso organizar antes de começar" — modo demo sem dados reais elimina essa barreira', 'demo', 'Demo'],
          ['Vergonha de mostrar a "bagunça" financeira — a Tamy é confidencial, sem julgamento', 'post', 'Post Pedro'],
        ],
      },
      {
        label: 'Sobre IA e Tecnologia',
        items: [
          ['"IA é coisa de empresa grande" — Toast IQ (148k restaurantes) provou que donos adotam IA conversacional. Tamy traz isso pro Brasil a R$189,90, não US$400/mês', 'demo', 'Demo'],
          ['"Já tentei sistema e ninguém usa em 2 semanas" — sistemas esperam você abrir. A IA da Tamy vai atrás: manda o P&L no WhatsApp às 7h, alerta quando CMV sobe, pergunta se quer agir', 'post', 'Comparativo'],
          ['"Tecnologia é cara" — R$189,90/mês. A IA encontra R$3-9k/mês de margem perdida. ROI 15-47x.', 'post', 'Post'],
          ['"ChatGPT faz de graça" — ChatGPT não tem seus dados financeiros, não conecta seu banco, não tem 79 skills de food service, não monitora seu CMV 24/7, e não te ensina o que os números significam', 'post', 'Side-by-side'],
          ['"WhatsApp não é lugar pra gestão" — é EXATAMENTE onde o dono já está 50x/dia', 'post', 'Post'],
        ],
      },
    ],
  },
  {
    num: 'Q08', color: 'border-indigo-500', labelColor: 'text-indigo-600',
    title: 'Quais os desafios na implementação?',
    desc: 'O que pode impedir a persona de usar o que comprou — pós-venda e retenção',
    summary: 'O maior desafio: 70% do churn acontece nos primeiros 90 dias, e ativação no D7 prevê retenção D90 com 82% de acurácia. Por isso a Tamy é proativa (vai atrás do dono no WhatsApp) e não passiva (esperando abrir app). A jornada pós-compra tem 4 fases com desafios distintos: pré-adoção, janela crítica D1-D7, formação de hábito D7-D90, e lock-in de advocacia D90+. Meta PMF: retenção >95% para clientes que passaram dos 90 dias.',
    sections: [
      {
        label: 'Pré-Adoção — Barreiras Antes do Primeiro Uso',
        items: [
          ['Dados fragmentados em 5+ fontes (PDV, iFood, banco, caderno, WhatsApp) — "Por onde começo?"', 'infog', 'Infográfico'],
          ['"Preciso organizar antes de começar" — medo de expor a bagunça antes de ter sistema para ajudar', 'post', 'Post'],
          ['Percepção de que precisa digitar tudo manualmente sem integração com PDV atual', 'demo', 'Demo'],
          ['"Meu contador já faz isso" — posicionar Tamy como complemento em tempo real, não substituto de 45 dias', 'artigo', 'Artigo'],
        ],
      },
      {
        label: 'D1-D7 — Janela Crítica de Ativação',
        items: [
          ['Cold start: primeiros lançamentos sem dados suficientes para insights — frustração de espera por resultado', 'post', 'Post'],
          ['D7 activation = 82% acurácia de retenção D90 — a janela mais crítica de todo o produto', 'post', 'Pitch'],
          ['Dono é o gargalo — se ele não adotar nos primeiros 7 dias, ninguém na equipe adota', 'artigo', 'Artigo'],
          ['Expectativa de resultado imediato sem alimentar o sistema — "por que ainda não vejo nada?"', 'post', 'Post'],
          ['Vergonha de expor a "bagunça" financeira — barreira para o primeiro lançamento real de dados', 'post', 'Post'],
        ],
      },
      {
        label: 'D7-D90 — Formação de Hábito e Retenção',
        items: [
          ['Resistência da equipe — "sempre fizemos assim", bloqueador interno de mudança de rotina', 'post', 'Post'],
          ['Sazonalidade cria urgências que empurram gestão para depois — meses ruins são exatamente quando mais precisa', 'post', 'Post'],
          ['Falta de tempo para nova rotina — gestão sempre fica pra depois com o excesso de operação', 'post', 'Post Pedro'],
          ['70% do churn acontece nos primeiros 90 dias — Tamy proativa (WhatsApp) vs. passiva (app)', 'post', 'Post'],
          ['Comparação com contador: "já pago R$X por mês, por que pagar mais?" — mostrar o gap de 45 dias vs. tempo real', 'artigo', 'Artigo'],
        ],
      },
      {
        label: 'D90+ — Desafios de Retenção e Saída',
        items: [
          ['Perde a urgência quando a situação melhora — "já sei meus números, pra que continuar pagando?" — sem streak visível, cancela', 'post', 'Post'],
          ['Custo de saída percebido como baixo — "planilha serviria" — sem comunidade e benchmark comparativo, churn é fácil', 'post', 'Post'],
          ['Motivação cai quando números melhoram — sem novos objetivos (segunda unidade, crédito, franquia), o produto perde propósito', 'artigo', 'Artigo'],
          ['12 meses de histórico financeiro organizados são difíceis de recriar — mas a persona não percebe esse valor até precisar de crédito', 'artigo', 'Artigo'],
        ],
      },
    ],
  },
  {
    num: 'Q09', color: 'border-teal-500', labelColor: 'text-teal-600',
    title: 'Como a persona toma decisões de compra?',
    desc: 'Fatores de decisão — o que convence e o que bloqueia a conversão em cada etapa',
    summary: 'A decisão de compra é resolvida por 5 pilares: (1) WhatsApp como canal — zero download, zero login. (2) Modo demo sem dados reais — risco percebido zero. (3) ROI comprovável em 30 dias. (4) Pedro como prova de autoridade — CEO que VIVEU a dor. (5) Open Finance (Pluggy) como lock-in natural — uma vez conectado o banco, a IA reconcilia tudo automaticamente e desconectar significa voltar ao caderno. O paradigma "IA faz, dono confirma" destrói a barreira de tempo: não precisa aprender nada, a IA já fez o trabalho.',
    sections: [
      {
        label: 'Gatilhos de Entrada — O Momento de Busca (TOFU)',
        items: [
          ['Mês ruim sem entender por quê — "faturei R$90k e não sei onde foi o dinheiro"', 'post', 'Post Pedro'],
          ['IR assustou: mistura PF/PJ exposta pelo contador — urgência fiscal aguda', 'post', 'Post'],
          ['Briga com sócio sobre dinheiro — precisa de dados neutros para arbitrar sem emoção', 'post', 'Post'],
          ['Expansão planejada sem dados de unit economics — "e se eu abrir e afundar as duas?"', 'artigo', 'Artigo'],
          ['Viu concorrente crescendo com gestão — "ele sabe algo que eu não sei"', 'post', 'Post'],
          ['Indicação de par do setor — mesma cidade, mesmo porte, mesmo problema resolvido', 'post', 'Depoimentos'],
        ],
      },
      {
        label: 'Critérios de Avaliação — O que ele/ela compara (MOFU)',
        items: [
          ['Simplicidade #1 — funcionar no celular na cozinha, sem treinamento ou manual', 'demo', 'Demo'],
          ['Feita para food service — especialista no setor, não sistema genérico que serve qualquer empresa', 'post', 'Post Pedro'],
          ['Compatível com PDV, banco, iFood que já usa — não substitui, integra. Sem migração de dor', 'post', 'Post'],
          ['R$189,90 = investimento, não custo — ROI 5x em desperdício recuperado no primeiro mês', 'post', 'Post'],
          ['Confiança: Pedro = Janela Bar 40+ unidades R$60M — viveu exatamente essa dor', 'post', 'Post Pedro'],
          ['WhatsApp = zero fricção de canal — onde o dono já está 50x/dia, sem app novo para instalar', 'post', 'Post'],
        ],
      },
      {
        label: 'Fatores de Conversão — O que fecha a venda (BOFU)',
        items: [
          ['Trial 14 dias grátis, sem cartão — risco percebido zero, comprometimento zero para experimentar', 'demo', 'Demo'],
          ['Modo demo sem dados reais — primeiro contato sem exposição da bagunça financeira', 'demo', 'Demo'],
          ['Dados seguros: LGPD + criptografia end-to-end — conformidade garantida desde o D1', 'post', 'Post'],
          ['ROI comprovável em 30 dias — garantia integral se não encontrar R$200/mês de economia', 'calc', 'ROI Calculator'],
          ['IA proativa: vai atrás do dono no WhatsApp, não espera abrir app. Open Finance (Pluggy): banco conectado = reconciliação automática. Lock-in natural — desconectar = voltar ao caderno', 'post', 'Post'],
        ],
      },
      {
        label: 'Confirmação Pós-Compra — O que garante que valeu (Retenção)',
        items: [
          ['Resultado visível na primeira semana — primeiro insight acionável em <10 min', 'demo', 'Demo'],
          ['Daily P&L Card às 7h no D1 — "isso foi ontem, sem eu fazer nada"', 'demo', 'Demo'],
          ['Primeiro alerta proativo: "Seu CMV subiu 4%" — Tamy detectou antes do dono perceber', 'demo', 'Demo'],
          ['Economizou R$500+ no primeiro mês → indica naturalmente para outros donos do setor', 'post', 'Post'],
        ],
      },
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
      ['Tolerância zero para fricção — abandona qualquer ferramenta em <72h sem valor percebido concreto', 'post', 'Post'],
      ['Influenciado por pares acima de qualquer anúncio — referral de um colega do setor vale mais que 10 ads', 'post', 'Post'],
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
    desc: 'Mapa de conteúdo, voz da marca, diferencial competitivo e calendário de ativação',
    summary: 'Q12 conecta tudo: cada pergunta é um pilar editorial autônomo, cada dor mapeia para uma feature, e o tom da marca muda por tipo de conteúdo. Pedro é a voz porque é a persona que virou founder. Márcia é a persona invisível — 52,7% do setor é mulher. O diferencial real: nenhum concorrente BR é AI-native. Saipos (iFood), Simpliza, Sischef — zero AI. F360 começou IA para franquias. Tamy é a única com AI que faz tudo + Open Finance + chat-first + educação financeira para o independente. Análise completa na página Competidores.',
    items: [
      ['A persona é o dono que trabalha mais que qualquer funcionário — não é incompetente, é sobrecarregado e sem ferramentas certas', 'post', 'Post Pedro'],
      ['Pedro é a voz da marca porque é a persona que virou founder — prova social máxima, fala a mesma língua do Carlos e da Márcia', 'video', 'Vídeo Pedro'],
      ['Márcia (52,7% do setor) é a persona invisível — 67,34% em delivery/marmitas. Conteúdo deve falar com ELA e com ELE desde o D1', 'post', 'Série Márcia'],
      ['O conteúdo deve educar, não vender — a venda é consequência da educação e da confiança acumulada', 'artigo', 'Artigo'],
      ['Mapa editorial por Q: Q01+Q02+Q03 → Topo de funil (dores, medos, perigos educativos), Q04+Q05+Q06 → Meio (oportunidades, sonhos, aspiração), Q07+Q08+Q09 → Fundo (objeções, desafios, conversão)', 'artigo', 'Planejamento'],
      ['Cada pergunta = 3-5 peças de conteúdo independentes: post educativo, vídeo Pedro, calculadora, demo, artigo de fundo', 'post', 'Content Map'],
      ['Mapa features: Q01 → Daily P&L + CMV Tracker, Q03 → Alertas proativos, Q04 → Open Finance (Pluggy), Q08 → Onboarding streak + gamificação, Q11 → Referral automático D30', 'artigo', 'Product Map'],
      ['Calendário de ativação D0→D90: D0 = "você não é incompetente, é sobrecarregado" / D1-3 = primeiro insight aha (CMV vs benchmark) / D7 = streak badge + Tamy Score / D30 = NPS + pedido de referral / D90 = "Graduado" + expansão', 'post', 'Playbook'],
      ['Voz por tipo de Q: Q01-Q03 → "Verdade brutal com compaixão", Q04-Q06 → "Inspiração + dados concretos", Q07-Q08 → "Empatia + prova imediata", Q09-Q11 → "ROI primeiro, feature depois"', 'artigo', 'Tom de Voz'],
      ['Sexy Canvas informa o tom: Ira nas headlines (dores → "Você trabalha 18h e ainda não sabe quanto lucra?"), Preguiça na UX (simplicidade radical), Liberdade na promessa (sonhos → "negócio no piloto automático")', 'post', 'Post'],
      ['Diferencial competitivo: 0 concorrentes BR com AI-native. Saipos (iFood) = PDV sem AI. Simpliza = freemium raso. Sischef = genérico. F360 = franquias, AI inicial. Tamy = única na intersecção AI-native + financeiro profundo + Brasil-first. Ver página Competidores para análise completa.', 'artigo', 'Comparativo'],
      ['Referências globais validam o modelo: Toast IQ (chat-first, 148k restaurantes), Restoke ($8K/semana economizados), MarginEdge (forecasting 96%). Nenhum opera no BR. Tamy traz isso a R$189,90 com Open Finance (Pluggy) + WhatsApp + IA que ensina.', 'artigo', 'Artigo'],
      ['Anti-personas informam o targeting: quem NÃO gastar CAC — economiza R$200-500/lead descartado (redes 50+, food truck, MEI <R$15k, "só emitir NF")', 'post', 'Post'],
      ['Hipóteses a validar com conteúdo: (verde) "Não sabe lucro" 82% / (amarelo) "WTP R$189,90 por IA" ainda não testado com 20+ / (vermelho) "CAC orgânico <R$500" medir com 50 clientes', 'artigo', 'Hipóteses'],
      ['Cada interação com a Tamy deve respeitar o tempo escasso do dono — clareza em segundos, não minutos. Carlos fecha caixa às 00h30. Márcia acorda às 4h45.', 'post', 'Post Pedro'],
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

          {/* Sections or flat items list */}
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

      <div className="flex justify-end mb-4">
        <ExportButtons
          onExportPDF={() => exportPerguntasToPDF(perguntas)}
          onExportDocx={() => exportPerguntasToDocx(perguntas)}
        />
      </div>

      <div className="space-y-3 mb-6">
        {perguntas.map(p => <PerguntaCard key={p.num} p={p} />)}
      </div>
    </div>
  )
}
