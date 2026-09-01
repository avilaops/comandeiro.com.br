/** Dinheiro, canais e comissão. Ver `guia/conteudo.mjs` para as regras de escrita. */

export default [
  {
    slug: "o-que-e-margem-de-contribuicao",
    tema: "cardapio",
    titulo: "O que é margem de contribuição",
    resumo:
      "É quanto sobra de cada venda depois de pagar o custo daquele item. É o dinheiro que fica para cobrir aluguel, equipe e o resto da estrutura.",
    corpo: [
      ["p", "Margem de contribuição é o que cada venda contribui para pagar as contas fixas da casa."],
      ["formula", "margem de contribuição = preço de venda − custo variável"],
      ["p", "Custo variável é o que só existe quando você vende: o insumo do prato, a taxa do cartão, a comissão do aplicativo. Aluguel e salário não entram, porque acontecem mesmo se a casa não vender nada."],
      ["h", "Em número"],
      ["p", "Espeto vendido a R$ 20, com R$ 6,20 de insumo e R$ 0,60 de taxa de cartão:"],
      ["formula", "20,00 − 6,80 = R$ 13,20 de margem de contribuição"],
      ["p", "Cada espeto vendido coloca R$ 13,20 no caixa para pagar o resto. Se a casa tem R$ 26.400 de custo fixo por mês, são 2.000 espetos no mês só para empatar."],
      ["h", "Por que ela é melhor que \"lucro por prato\""],
      ["p", "Lucro por prato exige ratear aluguel e salário entre os itens, e esse rateio é sempre arbitrário. A margem de contribuição não precisa dele: responde direto qual item ajuda mais a pagar a casa."],
      ["p", "É por isso que ela decide o cardápio. O que importa é margem <strong>vezes</strong> quantidade, não a margem sozinha."],
      ["erro", "O erro é olhar só a porcentagem. Um item com 80% de margem que vende três por noite contribui menos que outro com 50% que vende quarenta. Porcentagem alta em item parado não paga aluguel."],
    ],
    vizinhos: ["o-que-e-ponto-de-equilibrio", "o-que-e-markup"],
  },

  {
    slug: "o-que-e-ponto-de-equilibrio",
    tema: "dinheiro",
    titulo: "O que é ponto de equilíbrio",
    resumo:
      "É quanto a casa precisa vender para não ter lucro nem prejuízo. Abaixo dele, você está pagando para trabalhar.",
    corpo: [
      ["p", "Ponto de equilíbrio é o faturamento em que a conta fecha no zero: tudo o que entrou pagou exatamente tudo o que saiu."],
      ["formula", "ponto de equilíbrio = custo fixo ÷ margem de contribuição %"],
      ["h", "Como calcular o seu"],
      ["p", "Primeiro, some o custo fixo do mês: aluguel, salários e encargos, energia, água, internet, contador, software, seguro. Tudo que você paga mesmo com a casa vazia."],
      ["p", "Depois, calcule a margem de contribuição em porcentagem. Se o custo variável (insumo, taxa, comissão) é 40% da venda, a margem é 60%."],
      ["p", "Com R$ 30.000 de custo fixo e 60% de margem:"],
      ["formula", "30.000 ÷ 0,60 = R$ 50.000 por mês"],
      ["p", "Ou cerca de R$ 1.900 por dia numa casa que abre 26 dias. Abaixo disso, o mês fecha no vermelho."],
      ["h", "O que fazer com esse número"],
      ["p", "Ele vira meta diária, e meta diária muda o comportamento da equipe muito mais do que meta mensal. Ninguém sabe o que fazer com \"faltam R$ 18.000 no mês\"; todo mundo entende \"hoje precisamos de R$ 1.900\"."],
      ["erro", "O erro é calcular uma vez por ano. Custo fixo muda: entrou gente, o aluguel reajustou, o software aumentou. Ponto de equilíbrio velho faz a casa achar que está no lucro quando já não está."],
    ],
    vizinhos: ["o-que-e-margem-de-contribuicao", "qual-a-margem-de-lucro-de-um-restaurante"],
  },

  {
    slug: "qual-a-margem-de-lucro-de-um-restaurante",
    tema: "dinheiro",
    titulo: "Qual a margem de lucro de um restaurante",
    resumo:
      "Costuma ficar entre poucos por cento e algo em torno de quinze por cento do faturamento, depois de tudo pago. Restaurante é negócio de margem apertada e giro alto.",
    corpo: [
      ["p", "A margem líquida de um restaurante pequeno costuma ser de um dígito a pouco mais de dez por cento, dependendo do formato, da região e de quanto o dono retira."],
      ["p", "É apertada, e isso explica quase tudo sobre o negócio: por que erro de precificação dói tanto, por que desperdício importa, e por que uma taxa de canal mal calculada come o lucro inteiro."],
      ["h", "Onde o dinheiro vai"],
      ["p", "Uma divisão grosseira, mas útil para conferir a sua:"],
      ["tabela", [
        ["Item", "Faixa comum"],
        ["Mercadoria (CMV)", "28% a 38%"],
        ["Equipe com encargos", "25% a 35%"],
        ["Ocupação (aluguel, energia, água)", "8% a 15%"],
        ["Taxas de cartão e canais", "3% a 10%"],
        ["Impostos", "varia por regime"],
        ["Sobra", "o que restar"],
      ]],
      ["p", "Some as suas e veja o que sobra. Se a soma passa de cem, a resposta está na sua frente."],
      ["h", "A pergunta melhor que essa"],
      ["p", "Comparar a sua margem com a média do setor ajuda pouco, porque a média junta rede grande com casa de bairro. A pergunta útil é outra: <strong>a sua margem deste trimestre é maior que a do anterior?</strong> Essa você responde com o próprio dado, e é a que muda decisão."],
      ["erro", "O erro mais comum é confundir margem com o que sobra na conta bancária. Casa que ainda não pagou o fornecedor do mês tem dinheiro em caixa e nenhum lucro. Lucro se mede no resultado, não no extrato."],
    ],
    vizinhos: ["o-que-e-ponto-de-equilibrio", "o-que-e-cmv"],
  },

  {
    slug: "o-que-e-capital-de-giro",
    tema: "dinheiro",
    titulo: "O que é capital de giro",
    resumo:
      "É o dinheiro que a casa precisa ter para funcionar entre pagar o fornecedor e receber do cliente. Sem ele, a casa lucrativa também quebra.",
    corpo: [
      ["p", "Capital de giro é o dinheiro preso na operação: o estoque na despensa, o que você já pagou e ainda não vendeu, o que vendeu no cartão e ainda não recebeu."],
      ["p", "Restaurante tem uma vantagem aqui, que é receber rápido, e uma armadilha, que é comprar o tempo todo."],
      ["h", "O descompasso que aperta"],
      ["p", "Você paga a carne em sete dias. Recebe o débito em um dia e o crédito em trinta. Paga a folha no quinto dia útil. Se o mês tiver mais crédito que débito, o dinheiro entra depois de sair, e a diferença precisa vir de algum lugar."],
      ["h", "Quanto guardar"],
      ["p", "Para casa em funcionamento, a régua comum é ter em caixa de um a três meses de custo fixo. Para casa <strong>abrindo</strong>, é bem maior: de seis a doze meses, porque o movimento leva meses para estabilizar e nesse período a casa não se paga."],
      ["h", "O sinal de alerta"],
      ["p", "Quando a casa antecipa recebível todo mês para fechar a folha, ela não tem problema de vendas: tem problema de giro. Antecipar é caro e vicia, porque adianta o dinheiro de amanhã para tapar o buraco de hoje, e amanhã o buraco volta maior."],
      ["erro", "O erro na abertura é gastar o giro na obra. Bancada de granito e cozinha bonita não pagam fornecedor no terceiro mês, e é no terceiro mês que a maioria descobre isso."],
    ],
    vizinhos: ["quanto-custa-abrir-um-restaurante", "o-que-e-ponto-de-equilibrio"],
  },

  {
    slug: "como-calcular-o-custo-de-cada-canal-de-venda",
    tema: "dinheiro",
    titulo: "Como calcular o custo de cada canal de venda",
    resumo:
      "Separe o faturamento por canal, some tudo que cada um cobra e divida. O resultado costuma mudar a opinião do dono sobre qual canal vale a pena.",
    corpo: [
      ["p", "Canal é por onde a venda entrou: salão, balcão, retirada, entrega própria e aplicativo. Cada um tem um custo diferente, e quase toda casa trata todos como se tivessem o mesmo."],
      ["h", "A conta, canal por canal"],
      ["lista", [
        "comissão do canal, quando existe",
        "taxa de pagamento (cartão, aplicativo, PIX)",
        "custo de entrega, quando é você quem entrega",
        "embalagem, que no salão é zero e na entrega não é",
        "o desconto das promoções em que você entrou",
      ]],
      ["formula", "custo do canal % = total de custos do canal ÷ vendas do canal × 100"],
      ["h", "Um exemplo que costuma surpreender"],
      ["p", "O mesmo prato, pelo mesmo preço, em três canais:"],
      ["tabela", [
        ["Canal", "O que sai", "Sobra"],
        ["Salão, dinheiro ou PIX", "só o insumo", "maior"],
        ["Salão, cartão de crédito", "insumo + taxa", "média"],
        ["Aplicativo com entrega deles", "insumo + comissão + taxa + embalagem", "menor"],
      ]],
      ["p", "Isso não torna o aplicativo ruim: ele traz cliente que você não alcançaria. Torna ele um canal com <strong>preço próprio</strong>."],
      ["h", "O que fazer depois de saber"],
      ["p", "Duas coisas. Ajustar o preço no canal caro, para a margem parar de pé. E olhar o mix: se 70% da venda vem do canal mais caro, o negócio inteiro está apoiado na perna mais fraca, e vale investir em trazer gente para o salão."],
      ["erro", "O erro é comparar canais só pelo faturamento. O que mais fatura pode ser o que menos contribui, e o dono só descobre quando o mês fecha bem em venda e mal em caixa."],
    ],
    vizinhos: ["quanto-o-ifood-cobra-de-comissao", "como-precificar-para-o-delivery"],
  },

  {
    slug: "como-precificar-para-o-delivery",
    tema: "dinheiro",
    titulo: "Como precificar para o delivery",
    resumo:
      "Parta do preço do salão e some o que só existe na entrega: comissão, taxa e embalagem. Preço igual nos dois canais significa que um está pagando pelo outro.",
    corpo: [
      ["p", "O mesmo prato tem custo diferente conforme o canal. Na entrega entram custos que no salão não existem, e ignorá-los faz o delivery parecer lucrativo quando não é."],
      ["h", "O que entra na conta da entrega"],
      ["lista", [
        "comissão do aplicativo, quando a venda vem por ele",
        "taxa de pagamento",
        "embalagem, tampa, sacola e talher",
        "o entregador, quando a entrega é sua",
        "o retrabalho: pedido que volta, item que chega frio, reembolso",
      ]],
      ["h", "Como chegar ao preço"],
      ["p", "Pegue a margem que você aceita no salão e recomponha o preço com os custos do canal dentro:"],
      ["formula", "preço no canal = (custo do prato + embalagem) ÷ (1 − comissão − taxa − margem alvo)"],
      ["p", "É a mesma lógica do markup. O número sai maior que o do salão, e é para sair."],
      ["h", "Posso cobrar mais caro no aplicativo?"],
      ["p", "Sim, e é prática comum. O que não pode é o cliente descobrir isso como pegadinha: quem compara os dois preços e se sente enganado reclama, com razão. Preço diferente por canal é legítimo quando o custo é diferente, e ele é."],
      ["h", "A alternativa que quase ninguém calcula"],
      ["p", "Antes de subir o preço, olhe a embalagem. É o custo mais fácil de reduzir sem o cliente sentir, e em casa que entrega muito ela pesa mais do que o dono imagina."],
      ["erro", "O erro é montar o cardápio de entrega com os mesmos itens do salão. Prato que depende de estar quente e crocante chega ruim, gera reclamação e reembolso. O cardápio da entrega deveria ter só o que viaja bem."],
    ],
    vizinhos: ["como-calcular-o-custo-de-cada-canal-de-venda", "quanto-o-ifood-cobra-de-comissao"],
  },
];
