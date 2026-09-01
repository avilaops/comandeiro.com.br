/**
 * Gestão, estoque e delegação. Ver `guia/conteudo.mjs` para as regras.
 *
 * Tema do dono que parou de conseguir estar em tudo. Quase todo verbete aqui
 * responde a mesma dor por ângulos diferentes: a casa só funciona com ele
 * dentro. Por isso o texto precisa dar PROCEDIMENTO, não conselho: "delegue
 * mais" não muda nada, "escreva o fechamento em seis linhas e teste com quem
 * vai fazer" muda.
 */

export default [
  {
    slug: "o-que-e-inventario-de-estoque",
    tema: "gestao",
    titulo: "O que é inventário de estoque",
    resumo:
      "É contar, item por item, tudo o que existe na casa num dia definido. É o número que fecha o CMV: sem ele, o custo do mês é chute.",
    corpo: [
      ["p", "Inventário é a contagem física do estoque. Você anda pela casa com uma lista e escreve quanto tem de cada coisa: na câmara, no freezer, na prateleira do seco, no balcão de bebida."],
      ["p", "Parece burocracia até você precisar do CMV. A conta do custo depende de dois inventários, o do começo e o do fim do período, e nenhum sistema inventa esse número por você."],
      ["h", "Para que serve, na prática"],
      ["lista", [
        "fecha a conta do CMV, que sem ele vira estimativa",
        "mostra o que sumiu: a diferença entre o que devia ter e o que tem",
        "aponta o que está parado, comprado e sem girar",
        "avisa o que está perto de vencer, antes de virar lixo",
        "dá base para comprar pelo que falta, não pelo que parece faltar",
      ]],
      ["h", "Como fazer sem virar um dia perdido"],
      ["p", "A regra que faz caber: <strong>sempre no mesmo dia do mês, sempre antes de abrir, sempre na mesma ordem</strong>. Casa vazia, nada entrando nem saindo, e o caminho sempre igual para ninguém pular uma prateleira."],
      ["p", "Duas pessoas rendem mais que uma: uma conta, a outra anota. E conte na unidade em que você compra, não na que usa: se a cerveja vem em caixa de 12, conte caixas e unidades soltas, não some tudo em garrafas."],
      ["h", "Preciso contar tudo, todo mês?"],
      ["p", "Não. Existe um caminho do meio chamado contagem cíclica: os itens caros e de alto giro (carne, bebida, o que mais sai) você conta toda semana; o resto, uma vez por mês. Vinte itens contados semanalmente cobrem a maior parte do dinheiro parado na casa."],
      ["erro", "O erro é contar por estimativa: \"tem mais ou menos meia caixa\". Meia caixa errada em quatro itens já move o CMV em um ponto percentual, e é justamente esse ponto que você está tentando enxergar. Item que não dá para contar inteiro, pese."],
    ],
    vizinhos: ["o-que-e-cmv", "como-controlar-o-estoque-de-um-restaurante"],
  },

  {
    slug: "como-controlar-o-estoque-de-um-restaurante",
    tema: "gestao",
    titulo: "Como controlar o estoque de um restaurante",
    resumo:
      "Com entrada anotada, saída pelo que foi vendido e contagem periódica. Sem os três, você tem compras registradas e nenhuma ideia do que virou venda.",
    corpo: [
      ["p", "Controlar estoque é saber três coisas: o que entrou, o que saiu e o que sobrou. A maioria das casas registra bem a primeira, ignora a segunda e descobre a terceira tarde demais."],
      ["h", "As três pernas"],
      ["lista", [
        "<strong>Entrada</strong>: toda nota de fornecedor lançada, com quantidade e preço. É onde nasce o custo",
        "<strong>Saída</strong>: o que foi consumido. Sai da venda, cruzando o que se vendeu com a ficha técnica de cada prato",
        "<strong>Contagem</strong>: o inventário, que confere se a conta bate com a realidade",
      ]],
      ["p", "A diferença entre o estoque que a conta previa e o que a contagem achou tem nome: quebra. É perda, erro de porção, erro de lançamento ou furto, e só aparece quando as três pernas existem."],
      ["h", "Por onde começar, se hoje não há nada"],
      ["p", "Não comece por tudo. Escolha os dez itens que representam mais dinheiro (quase sempre proteína e bebida) e controle só eles por dois meses. Dez itens bem controlados valem mais do que duzentos controlados pela metade, e o hábito nasce de uma lista que cabe."],
      ["h", "Preciso de sistema para isso?"],
      ["p", "Não para começar. Uma planilha com entrada, saída e contagem funciona muito bem em casa pequena. O sistema economiza o lançamento manual da saída, porque ele já sabe o que foi vendido; se a sua venda ainda é registrada em papel, o sistema não teria de onde tirar esse dado."],
      ["h", "As regras de armazenagem que evitam perda"],
      ["lista", [
        "primeiro que entra, primeiro que sai: o mais velho fica na frente",
        "tudo identificado com data de recebimento e de validade",
        "recebimento conferido na hora, com a nota na mão",
        "quem recebe não é quem compra, quando dá para separar",
      ]],
      ["erro", "O erro é controlar estoque e nunca comparar com a venda. Estoque isolado só diz o que tem; cruzado com a venda, ele diz o que <em>devia</em> ter, e é aí que a perda aparece com nome e valor."],
    ],
    vizinhos: ["o-que-e-inventario-de-estoque", "o-que-e-cmv"],
  },

  {
    slug: "como-delegar-em-um-restaurante",
    tema: "gestao",
    titulo: "Como delegar em um restaurante",
    resumo:
      "Escrevendo o procedimento, entregando junto a decisão e o limite dela, e conferindo o resultado em vez de acompanhar cada passo.",
    corpo: [
      ["p", "Delegar não é pedir para alguém fazer. É transferir a decisão, com um limite claro, e aceitar que vai sair diferente de como você faria."],
      ["p", "O dono que não delega costuma dizer que ninguém faz do jeito certo. Quase sempre o jeito certo nunca foi escrito, mora só na cabeça dele, e cobrar alguém por um padrão invisível é injusto e não funciona."],
      ["h", "O que precisa existir antes"],
      ["lista", [
        "o procedimento escrito, em passos, curto o bastante para ler em pé",
        "o limite da decisão: até quanto de desconto, até que valor de compra, o que exige ligar para você",
        "o que fazer quando fugir do combinado",
        "quando e como você vai conferir",
      ]],
      ["h", "O que dá para delegar primeiro"],
      ["p", "Comece pelo que é repetitivo e conferível: abertura da casa, fechamento de caixa, conferência de recebimento, escala. São tarefas com resultado visível, o que deixa a conferência barata."],
      ["p", "Deixe por último o que envolve dinheiro sem rastro e relação com fornecedor. Não por desconfiança: por ser onde o erro custa mais caro e a correção demora mais a aparecer."],
      ["h", "O teste que mostra se funcionou"],
      ["p", "Saia da casa numa sexta à noite. Se o telefone tocar três vezes, o procedimento está incompleto: cada ligação aponta uma decisão que ninguém sabia que podia tomar. Anote as três, escreva a regra de cada uma, tente de novo no mês seguinte."],
      ["erro", "O erro é delegar a tarefa e reter a decisão. Quem pode executar mas não pode decidir para na primeira exceção, e a casa aprende que tudo passa pelo dono, que é exatamente o que ele queria evitar."],
    ],
    vizinhos: ["como-fazer-a-casa-funcionar-sem-o-dono", "como-treinar-um-garcom-novo"],
  },

  {
    slug: "como-fazer-a-casa-funcionar-sem-o-dono",
    tema: "gestao",
    titulo: "Como fazer a casa funcionar sem o dono",
    resumo:
      "Escrevendo o que hoje só existe na sua cabeça, dando acesso e limite a quem fica, e testando com você fora em dia de movimento de verdade.",
    corpo: [
      ["p", "Quase todo dono de restaurante pequeno é o ponto único de falha da própria casa. Ele sabe o preço de tudo, conhece o fornecedor, resolve a exceção e é o único que abre o caixa. Enquanto está lá, funciona bem, e é justamente por isso que ninguém percebe o problema."],
      ["h", "O que trava a casa quando você falta"],
      ["lista", [
        "senha e acesso que só você tem",
        "preço, desconto e cortesia que só você decide",
        "contato de fornecedor guardado no seu celular",
        "o que fazer quando algo dá errado, que nunca foi combinado",
        "o fechamento, que só você sabe fazer",
      ]],
      ["h", "O caminho, em quatro meses"],
      ["p", "<strong>Mês 1, escrever.</strong> Anote toda vez que alguém te perguntar algo que só você sabe. Em trinta dias você tem a lista do que precisa sair da sua cabeça, e ela é menor do que parecia."],
      ["p", "<strong>Mês 2, procedimentos.</strong> Transforme cada item em um passo a passo curto. Abertura, fechamento, o que fazer com reclamação, até quanto de desconto quem está no salão pode dar."],
      ["p", "<strong>Mês 3, acesso.</strong> Cada pessoa com o próprio acesso e o próprio limite. Sem isso, o procedimento existe mas ninguém tem como cumprir, e a senha compartilhada volta na primeira semana."],
      ["p", "<strong>Mês 4, teste.</strong> Fique fora num sábado à noite, com telefone ligado. Anote toda ligação: cada uma é um buraco do procedimento, e a lista dessa noite é o seu roteiro do mês seguinte."],
      ["h", "Por que isso vale mais do que parece"],
      ["p", "Uma casa que só funciona com o dono dentro não pode ficar doente, não tira férias, não abre a segunda unidade e não vale quase nada na hora de vender. Sair da operação não é conforto: é o que transforma o emprego que você criou em um negócio."],
      ["erro", "O erro é sair de uma vez, cansado, sem ter escrito nada. A casa quebra, o dono conclui que a equipe não dá conta, volta e não tenta mais. Saia por partes, e trate cada falha como procedimento faltando, não como pessoa errada."],
    ],
    vizinhos: ["como-delegar-em-um-restaurante", "cada-funcionario-deve-ter-senha-propria"],
  },

  {
    slug: "quais-indicadores-acompanhar-em-um-restaurante",
    tema: "gestao",
    titulo: "Quais indicadores acompanhar em um restaurante",
    resumo:
      "Cinco bastam: faturamento, CMV, custo de equipe, ticket médio e o que sobra no fim. Mais que isso vira relatório que ninguém abre.",
    corpo: [
      ["p", "Indicador demais é o mesmo que indicador nenhum: quando tudo é acompanhado, nada é olhado. Cinco números, no mesmo dia do mês, resolvem a gestão de uma casa pequena."],
      ["h", "Os cinco"],
      ["lista", [
        "<strong>Faturamento</strong>: quanto entrou. Compare com o mesmo mês do ano passado, não com o mês anterior, porque restaurante tem sazonalidade",
        "<strong>CMV em porcentagem</strong>: quanto da venda foi embora em mercadoria",
        "<strong>Custo de equipe em porcentagem</strong>: folha com encargos dividida pelo faturamento",
        "<strong>Ticket médio</strong>: faturamento dividido pelo número de contas",
        "<strong>Sobra</strong>: o que ficou depois de tudo, inclusive do seu salário",
      ]],
      ["h", "A conta que junta os três primeiros"],
      ["p", "CMV mais custo de equipe é o número que a operação inteira empurra:"],
      ["formula", "custo somado = CMV % + custo de equipe %"],
      ["p", "Ele é útil porque as duas pontas se compensam: uma casa mais artesanal tem CMV menor e equipe maior; uma casa mais industrializada, o contrário. Olhar os dois juntos evita apertar um e estourar o outro."],
      ["h", "Como acompanhar sem virar trabalho"],
      ["p", "Uma planilha, uma linha por mês, cinco colunas. Vinte minutos no mesmo dia de todo mês. O valor não está no número do mês: está na coluna que mostra três meses seguidos na mesma direção."],
      ["h", "O que não vale a pena olhar todo dia"],
      ["p", "Faturamento diário engana: chuva, feriado e jogo mexem no dia e não dizem nada sobre o negócio. Olhe o dia para operar (comprar, escalar) e o mês para decidir."],
      ["erro", "O erro é acompanhar só faturamento. Ele é o número que mais sobe quando a casa vai mal: baixar preço, entrar em aplicativo e vender mais barato aumentam a venda e diminuem a sobra. Faturamento sozinho não distingue crescer de trabalhar de graça."],
    ],
    vizinhos: ["qual-a-margem-de-lucro-de-um-restaurante", "o-que-e-ponto-de-equilibrio"],
  },

  {
    slug: "como-negociar-com-fornecedor",
    tema: "gestao",
    titulo: "Como negociar com fornecedor",
    resumo:
      "Com histórico de consumo na mão, mais de uma cotação e a conversa separada em preço, prazo e frequência de entrega, que são três negociações diferentes.",
    corpo: [
      ["p", "Quem negocia sem saber quanto consome negocia no escuro, e o vendedor sabe disso. A preparação vale mais que a conversa."],
      ["h", "O que ter antes de ligar"],
      ["lista", [
        "quanto você consome por mês de cada item, em quantidade",
        "quanto pagou nos últimos três meses",
        "pelo menos duas cotações de concorrentes, atuais",
        "o que você pode oferecer: volume, prazo de pagamento menor, previsibilidade de pedido",
      ]],
      ["h", "As três negociações que não são a mesma"],
      ["p", "<strong>Preço</strong> é a mais óbvia e a menos flexível. <strong>Prazo de pagamento</strong> é dinheiro de verdade: trinta dias em vez de à vista financia o seu capital de giro sem juros. <strong>Frequência de entrega</strong> muda quanto você precisa manter parado no estoque, e entrega duas vezes por semana pode valer mais que dois por cento de desconto."],
      ["p", "Negociar as três juntas dá margem de troca: você aceita o preço se ganhar prazo, ou aceita pedido maior se ganhar entrega dividida."],
      ["h", "Sobre trocar de fornecedor"],
      ["p", "Preço não é a única variável. Fornecedor que entrega no horário, aceita devolução e atende no sábado tem valor que não aparece na cotação, e descobrir isso trocando por dez centavos costuma sair caro."],
      ["p", "A defesa é não depender de um só nos itens críticos. Dois fornecedores ativos na proteína principal é seguro, e o segundo mantém o primeiro atento."],
      ["h", "O erro de compra que mais custa"],
      ["p", "Comprar volume grande por causa do desconto. O desconto é imediato e visível; o custo é invisível e vem depois, em dinheiro parado, espaço ocupado e perda por validade. Só compensa quando o item gira rápido e não vence."],
      ["erro", "O erro é negociar uma vez por ano, quando o preço já subiu. Revise as principais cotações a cada trimestre, mesmo satisfeito: o mercado se move e o preço que era bom há seis meses raramente ainda é."],
    ],
    vizinhos: ["o-que-e-capital-de-giro", "como-controlar-o-estoque-de-um-restaurante"],
  },
];
