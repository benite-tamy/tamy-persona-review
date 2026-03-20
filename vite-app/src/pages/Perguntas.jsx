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
        'Esquece lançamentos, perde informações e deixa contas passarem sem controle',
        'Não acompanha indicadores financeiros de forma consistente',
        'Não sabe quais são os principais gargalos financeiros do negócio',
        'Tem dificuldade para identificar desperdícios, excessos e oportunidades de economia',
        'Fica muito preso na operação e sem tempo para olhar a gestão',
        'Sente insegurança para decidir porque não tem informações claras',
        'Quer crescer, mas sente que a gestão ainda está desorganizada demais',
        'Procura ajuda porque quer mais controle, clareza e tranquilidade',
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
        'Medo de precisar tirar mais do próprio bolso para salvar a operação',
        'Medo de se endividar por causa do negócio',
        'Medo de perder noites de sono vivendo apagando incêndio financeiro',
        'Medo de nunca ter tranquilidade com o dinheiro da empresa',
        'Medo de o negócio virar fonte de estresse em vez de realização',
        'Medo de que o negócio, que deveria dar liberdade, acabe prendendo',
        'Medo de não dar segurança e futuro melhor para a família',
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
        ['Medo de brigas com sócio sobre dinheiro', 'video', 'Vídeo Pedro'],
        ['Medo de cair na malha fina — mistura PF/PJ, ultrapassou MEI', 'post', 'Post'],
        ['Medo de ficar irrelevante — vê concorrente com tecnologia, dark kitchens crescendo', 'post', 'Post'],
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
  {
    num: 'Q05', color: 'border-purple-500', labelColor: 'text-purple-600',
    title: 'Existem oportunidades que a persona ainda não enxerga?',
    desc: 'Oportunidades invisíveis — upside que o(a) dono(a) não percebe',
    pedro: {
      role: 'CEO — Gestão como alavanca',
      summary: 'O negócio pode render mais, pesar menos e ser mais saudável sem crescer em faturamento. A mudança não está em vender mais, mas em enxergar, decidir e gerir melhor.',
      items: [
        'Pode lucrar mais sem vender mais — ajustando despesas, desperdícios, precificação',
        'Mais controle não é só organizar bagunça — é liberar margem e melhorar caixa',
        'Gestão pode ser mais LEVE — menos desgaste, menos confusão, menos retrabalho',
        'Decisões melhores, mais rápidas e seguras quando entende os números',
        'Aprender gestão na prática muda o negócio atual e o futuro como empreendedor',
        'Sair de sobrevivência para construção — planejar, criar reserva, crescer com segurança',
        'Negócio organizado gera mais lucro, mais paz, mais tempo e mais qualidade de vida',
        'Não precisa ser refém da correria — pode empreender de outro jeito',
      ],
    },
    benites: {
      role: 'CTO — Oportunidades de plataforma e fintech',
      summary: 'As oportunidades invisíveis são o endgame da Tamy. O efeito de rede faz benchmarks ficarem mais precisos a cada restaurante. O data moat de 18 meses impede cópia. Open Finance data + 12-24 meses de histórico = credit scoring para fintech com juros até 40% menores.',
      items: [
        ['Lucrar mais sem vender mais — otimizando compras, desperdício, preço', 'post', 'Post'],
        ['Dados valem ouro para negociar com fornecedor, banco, investidor', 'artigo', 'Artigo'],
        ['IA conversacional democratiza o controller: R$189,90 vs R$10k/mês', 'post', 'Comparativo'],
        ['Gestão organizada = pré-requisito para crédito barato', 'post', 'Post'],
        ['Negócio pode ser franqueável se provar unit economics', 'post', 'Post'],
        ['Efeito de rede: benchmarks ficam mais precisos com mais restaurantes na Tamy', 'post', 'Post'],
        ['Data moat de 18 meses — nenhum concorrente copia', 'artigo', 'Artigo'],
        ['"Score financeiro" para crédito com juros até 40% menores', 'post', 'Post fintech'],
        ['Roadmap Toast+Ramp+Restoke+Duolingo: SaaS → Plataforma → Fintech+PDV', 'artigo', 'Artigo'],
        ['Comunidade "Donos Inteligentes" — benchmark entre restaurantes, cases compartilhados', 'demo', 'Programa'],
        ['Gamificação: streaks de registro, achievements ("CMV Killer"), ranking anônimo', 'demo', 'Demo'],
        ['"Seu CFO de IA" — o que rede de 500 unidades tem, agora no WhatsApp por R$189/mês', 'post', 'Post'],
      ],
    },
  },
  {
    num: 'Q06', color: 'border-pink-500', labelColor: 'text-pink-600',
    title: 'Quais são os sonhos da persona?',
    desc: 'O que inspira e o que o(a) dono(a) quer se tornar',
    pedro: {
      role: 'CEO — Aspirações humanas',
      summary: 'Quer se tornar empreendedor mais maduro, estratégico e dono do próprio negócio. Quer voltar a amar empreender, com clareza e menos peso nas costas.',
      items: [
        'Negócio saudável, lucrativo e que realmente valha a pena',
        'Deixar de "apagar incêndio" e construir algo sólido',
        'Sair do caos para ter controle e tranquilidade',
        'Voltar a amar tocar o próprio negócio',
        'Recuperar orgulho e leveza de empreender',
        'Negócio prosperar sem depender dele para tudo',
        'Ganhar liberdade financeira E de tempo',
        'Oferecer segurança e qualidade de vida para a família',
        'Crescer sem perder controle da operação',
        'Ser reconhecido como empresário, não só quem trabalha muito',
      ],
    },
    benites: {
      role: 'CTO — Sonhos quantificáveis e conteúdo',
      summary: 'O sonho dessa persona é o espelho do nosso propósito. O sonho mais poderoso pra conteúdo: "ir buscar o filho na escola sem medo do caixa" — liberdade é emocional, não financeira.',
      items: [
        ['Negócio que gera dinheiro sem estar 14h/dia lá', 'post', 'Storytelling'],
        ['Ser reconhecido como empresário, não "o cara do restaurante"', 'post', 'Post'],
        ['Abrir segunda unidade com confiança — sabendo os números', 'artigo', 'Artigo'],
        ['Dar segurança pra família sem estresse', 'video', 'Vídeo Pedro'],
        ['Mostrar DRE saudável — "minha margem é 18%"', 'post', 'Post'],
        ['Voltar a amar o negócio (muitos no ponto de burnout)', 'video', 'Vídeo'],
        ['Ser caso de sucesso — "quase fechou e hoje fatura X com Y de lucro"', 'post', 'Série'],
        ['Ir buscar filho na escola sem culpa', 'post', 'Post emocional'],
        ['Controlar 3 unidades do celular pelo WhatsApp', 'demo', 'Demo'],
        ['Construir legado — negócio que pode passar pros filhos ou vender', 'artigo', 'Artigo'],
        ['Acessar crédito sem implorar pro gerente do banco', 'post', 'Post fintech'],
      ],
    },
  },
  {
    num: 'Q07', color: 'border-amber-500', labelColor: 'text-amber-600',
    title: 'Quais os preconceitos e crenças limitantes da persona?',
    desc: 'Barreiras mentais que impedem a adoção — objeções disfarçadas',
    pedro: {
      role: 'CEO — Barreiras emocionais',
      summary: 'A barreira não é técnica — é mental e emocional. Acredita que gestão é difícil, burocrática e desnecessária. Precisa sentir que a solução é simples e feita pra alguém como ela.',
      items: [
        'Organização financeira é complicado demais pra ele',
        'Gestão é "coisa de empresa grande"',
        'Controlar melhor vai exigir muito tempo e burocracia',
        'Olhar para números é chato, difícil e distante da rotina',
        '"Sempre toquei do meu jeito" — resistência à mudança',
        'Se o caixa gira, está tudo bem',
        'O problema é só vender mais, não gerir melhor',
        'Medo de colocar mais uma ferramenta e não usar',
        'Experiências ruins com sistemas complicados',
        '"Não sou bom com financeiro"',
        'Vergonha de mostrar a bagunça ou pedir ajuda',
      ],
    },
    benites: {
      role: 'CTO — Objeções técnicas a destruir',
      summary: 'Os preconceitos são objeções de venda disfarçadas — nossos Valores foram desenhados para destruir cada uma. O produto foi desenhado para destruir cada objeção no momento de uso, não no pitch.',
      items: [
        ['"IA é coisa de empresa grande" — demo Dona Maria do boteco', 'demo', 'Demo'],
        ['"Meu negócio é simples demais pra sistema"', 'post', 'Post'],
        ['"Já tentei sistema e ninguém usa em 2 semanas"', 'post', 'Comparativo'],
        ['"Gestão financeira é coisa de contador"', 'post', 'Post'],
        ['"Se tá vendendo, tá lucrando"', 'calc', 'Calculadora'],
        ['"Não tenho tempo pra aprender" — setup em 5 min', 'demo', 'Demo'],
        ['"Tecnologia é cara" — R$189,90 = menos que prato executivo/dia', 'post', 'Post'],
        ['"No meu ramo é assim mesmo" — QUEM organiza, lucra', 'post', 'Post'],
        ['"ChatGPT faz de graça" — não tem seus dados, 111+ skills, 150+ benchmarks', 'post', 'Side-by-side'],
        ['"WhatsApp não é lugar pra gestão" — é EXATAMENTE o lugar', 'post', 'Post'],
        ['"Preciso organizar antes" — modo demo sem dados reais', 'demo', 'Demo'],
      ],
    },
  },
  {
    num: 'Q08', color: 'border-indigo-500', labelColor: 'text-indigo-600',
    title: 'Quais os desafios na implementação?',
    desc: 'Obstáculos reais que travam a adoção e o uso contínuo',
    pedro: {
      role: 'CEO — Desafios operacionais',
      summary: 'O desafio não é entender o que fazer, mas aplicar com consistência na correria real. Precisa ser simples, prático e fácil de incorporar.',
      items: [
        'Falta de tempo para parar e colocar nova rotina em prática',
        'Excesso de envolvimento na operação — gestão sempre fica pra depois',
        'Dificuldade em manter consistência',
        'Resistência a sair do jeito antigo',
        'Informações espalhadas entre caderno, planilhas, sistema, WhatsApp',
        'Falta de alguém interno com responsabilidade sobre financeiro',
        'Equipe pequena, sobrecarregada ou sem preparo',
        'Cultura de apagar incêndio em vez de planejar',
        'Sensação de que organizar vai dar mais trabalho antes de dar resultado',
        'Baixa familiaridade com tecnologia',
      ],
    },
    benites: {
      role: 'CTO — Desafios técnicos e de retenção',
      summary: 'O maior desafio: 70% do churn acontece nos primeiros 90 dias, e ativação no D7 prevê retenção D90 com 82% de acurácia. Por isso a Tamy é proativa (WhatsApp) e não passiva (app).',
      items: [
        ['Dados em 5+ fontes (PDV, iFood, banco, caderno, WhatsApp)', 'infog', 'Infográfico'],
        ['Dono é o gargalo — se ele não adotar, ninguém adota', 'artigo', 'Artigo'],
        ['Resistência da equipe ("sempre fizemos assim")', 'post', 'Post'],
        ['Expectativa de resultado imediato sem alimentar o sistema', 'post', 'Post'],
        ['Vergonha de expor a "bagunça" financeira', 'post', 'Post'],
        ['Cold start D7: ativação no D7 prevê retenção D90 com 82% de acurácia', 'post', 'Pitch'],
        ['Contador como bloqueador: posicionar como complemento, não substituto', 'artigo', 'Artigo'],
        ['70% churn nos primeiros 90 dias: Tamy é proativa, não passiva', 'post', 'Post'],
        ['Streaks + Tamy Score = dono com 30d streak NÃO cancela', 'demo', 'Gamificação'],
        ['Grupo "Donos Inteligentes" cria custo social de sair — peer pressure positivo', 'demo', 'Comunidade'],
      ],
    },
  },
  {
    num: 'Q09', color: 'border-teal-500', labelColor: 'text-teal-600',
    title: 'Como a persona toma decisões de compra?',
    desc: 'Fatores de decisão — o que convence e o que bloqueia',
    pedro: {
      role: 'CEO — Critérios do dono',
      summary: 'Decide por simplicidade, confiança, aderência à rotina e percepção de retorno. Preço importa mas é avaliado junto com utilidade prática.',
      items: [
        'Simplicidade e facilidade de uso no dia a dia',
        'Combina com rotina corrida de quem está na operação',
        'Vai ajudar de verdade a organizar financeiro',
        'Fala a linguagem dele, clara e sem complicação',
        'Feita para bares, restaurantes, cafés (não genérica)',
        'Percepção real de ganho financeiro',
        'Valor pago faz sentido vs. retorno',
        'Marca transmite confiança',
        'Vai ter apoio e orientação, não ficará sozinho',
        'Segurança para testar sem risco alto',
      ],
    },
    benites: {
      role: 'CTO — 4 pilares de conversão',
      summary: 'A decisão é resolvida por 4 pilares: (1) WhatsApp como canal — zero fricção. (2) Modo demo sem dados reais — risco zero. (3) ROI comprovável em 30 dias. (4) Pedro como prova de autoridade.',
      items: [
        ['Simplicidade #1 — funcionar no celular na cozinha', 'demo', 'Demo'],
        ['Resultado visível na primeira semana (não trimestre)', 'post', 'Post'],
        ['R$189,90 = investimento, não custo — ROI 5x em desperdício', 'post', 'Post'],
        ['Confiança: Pedro = Janela Bar 40+ unidades R$60M', 'post', 'Post'],
        ['Prova social: casos de alguém parecido', 'post', 'Depoimentos'],
        ['IA vai atrás dele (proativa), não espera abrir app', 'post', 'Post'],
        ['WhatsApp = zero fricção de canal', 'post', 'Post'],
        ['Modo demo sem compromisso (dados fictícios)', 'demo', 'Demo'],
        ['ROI em 30 dias comprovável', 'calc', 'ROI Calculator'],
        ['Compatível com PDV, banco, iFood que já usa', 'post', 'Post'],
      ],
    },
  },
  {
    num: 'Q10', color: 'border-green-500', labelColor: 'text-green-600',
    title: 'Quais os principais objetivos e metas da persona?',
    desc: 'Metas financeiras e operacionais de curto e médio prazo',
    pedro: {
      role: 'CEO — Metas do dia a dia',
      summary: 'Quer ganhar controle, melhorar resultado e trazer organização. Transformar esforço em lucro.',
      items: [
        'Aumentar lucro do negócio',
        'Clareza sobre quanto realmente sobra',
        'Organizar melhor o financeiro',
        'Melhorar fluxo de caixa',
        'Reduzir desperdícios e gastos desnecessários',
        'Separar dinheiro empresa/pessoal',
        'Decisões com menos achismo',
        'Rotina de gestão organizada',
        'Planejar próximos meses',
        'Mais resultado com faturamento que já tem',
      ],
    },
    benites: {
      role: 'CTO — Metas quantificadas',
      summary: 'As metas se encaixam nos objetivos dos Fundamentos: margem de ~5% → 12-15%, CMV de 35-40% → 28-32%, horas admin de 15h/semana → 3h, fechamento de 2h → <10 min.',
      items: [
        ['Margem líquida: ~5% → 12-15%', 'post', 'Benchmark'],
        ['CMV: 35-40% → 28-32%', 'calc', 'Calculadora'],
        ['Fluxo de caixa previsível com 30 dias de antecedência', 'demo', 'Demo'],
        ['Horas administrativas: 15h/semana → 3h/semana', 'post', 'Post'],
        ['Pró-labore fixo sem "pegar do caixa"', 'post', 'Post'],
        ['Dados prontos pra pedir crédito', 'artigo', 'Artigo'],
        ['Expansão com dados em 12-24 meses', 'post', 'Checklist'],
        ['Fechamento diário: 2h → <10 min', 'demo', 'Demo'],
        ['Eliminar "cegueira de delivery" — margem real por canal', 'post', 'Post'],
        ['Desperdício: 15-20% → <10%', 'infog', 'Infográfico'],
        ['12-24 meses de dados = crédito estruturado', 'post', 'Post'],
      ],
    },
  },
  {
    num: 'Q11', color: 'border-orange-500', labelColor: 'text-orange-600',
    title: 'Qual o perfil do cliente ideal (ICP)?',
    desc: 'Perfil demográfico, psicográfico e jornada de compra',
    pedro: {
      role: 'CEO — Perfil demográfico',
      summary: 'Dono de pequeno negócio gastronômico, 28-45 anos, operando diretamente, até R$400k/mês. Processos manuais, pouca organização financeira.',
      items: [
        'Idade: 28-45 anos',
        'Gastronomia e food service — bares, restaurantes, cafés, hamburguerias',
        'Proprietário(a), sócio(a)-operador(a)',
        'Micro e pequena empresa, até R$400k/mês',
        'Estrutura enxuta, baixa estrutura administrativa',
        'Modelo centralizado no dono, processos manuais',
        'Em operação com vendas, mas sem clareza de resultado',
        'Já sente dor de gestão mas não tem estrutura robusta',
      ],
    },
    benites: {
      role: 'CTO — ICP enriquecido com dados',
      summary: 'Pragmático, orgulhoso da comida mas inseguro com gestão, desconfiado de promessas. Começa pelo WhatsApp, abandona qualquer ferramenta em 72h sem valor, mas indica ativamente se sentir resultado em 30 dias.',
      items: [
        ['Idade: 28-50 anos (concentração 30-45). SEBRAE: 46% entre 30-49', 'post', 'Dados'],
        ['Gênero: 52,7% mulheres (ABRASEL 2025)', 'post', 'Post'],
        ['Digital: WhatsApp principal, Instagram como vitrine', 'post', 'Post'],
        ['Busca Google quando tem problema: "como calcular CMV restaurante"', 'post', 'SEO'],
        ['Conversão quando: mês ruim, expansão sem dados, IR assustou, concorrente com tech', 'post', 'Post'],
        ['Ciclo de atenção: 15-30 segundos. Abandona em <72h sem valor', 'post', 'Post'],
        ['Funil: Aprendizado → Reconhecimento → Consideração → Decisão → Expansão', 'artigo', 'Artigo'],
        ['D7 activation = 82% acurácia de retenção D90', 'post', 'Pitch'],
        ['Economizou R$500+ no primeiro mês → indica naturalmente', 'post', 'Post'],
      ],
    },
  },
  {
    num: 'Q12', color: 'border-slate-500', labelColor: 'text-slate-600',
    title: 'Informações extra e contexto adicional',
    desc: 'Conexões com Fundamentos, Sexy Canvas e estratégia de conteúdo',
    pedro: {
      role: 'CEO — Contexto e síntese',
      summary: 'Tudo que sabemos converge: a persona é um empreendedor solo com negócio rodando, mas sem visibilidade do resultado real. A Tamy existe pra dar essa visibilidade.',
      items: [
        'A persona é o dono que trabalha mais que qualquer funcionário',
        'Não é incompetente — é sobrecarregado e sem ferramentas certas',
        'Cada interação com a Tamy deve respeitar o tempo escasso dele',
        'Pedro é a voz da marca porque é a persona que virou founder',
        'O conteúdo deve educar, não vender — a venda é consequência da educação',
      ],
    },
    benites: {
      role: 'CTO — Integração estratégica',
      summary: 'Q12 conecta tudo: cada pergunta tem conteúdo independente (posts, vídeos, calculadoras) que alimenta o funil. O mapa de conteúdo sai direto das 12 perguntas.',
      items: [
        ['Cada pergunta = 3-5 peças de conteúdo independentes', 'post', 'Content Map'],
        ['Mapa: Dores → Posts educativos, Medos → Vídeos Pedro, Oportunidades → Demos', 'artigo', 'Planejamento'],
        ['Sexy Canvas informa o tom: Ira nas headlines, Preguiça na UX, Liberdade na promessa', 'post', 'Post'],
        ['Fundamentos informam a profundidade: cada feature conecta a um Valor', 'post', 'Post'],
        ['Anti-personas informam o targeting: quem NÃO gastar CAC', 'post', 'Post'],
      ],
    },
  },
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
    </div>
  )
}
