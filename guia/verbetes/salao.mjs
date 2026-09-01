/** Comanda, pedido e salão. Ver `guia/conteudo.mjs` para as regras de escrita. */

export default [
  {
    slug: "o-que-e-comanda-em-restaurante",
    tema: "comanda",
    titulo: "O que é comanda em restaurante",
    resumo:
      "Comanda é o registro do que uma mesa pediu, do primeiro item até o fechamento da conta. É por ela que a cozinha sabe o que produzir e o caixa sabe o que cobrar.",
    corpo: [
      ["p", "Comanda é onde o pedido fica anotado enquanto a mesa está ocupada. Ela nasce quando o cliente senta e pede a primeira coisa, recebe cada item novo ao longo da noite e morre quando a conta é paga."],
      ["p", "É o documento que liga três pessoas que não se falam: quem atende, quem cozinha e quem recebe."],
      ["h", "Para que ela serve, na prática"],
      ["lista", [
        "dizer à cozinha o que produzir e em que ordem",
        "guardar o que a mesa consumiu, para a conta fechar certa no fim",
        "permitir que a mesa peça mais sem recomeçar nada",
        "mostrar depois o que a casa vendeu, item por item",
      ]],
      ["h", "Comanda, pedido e conta"],
      ["p", "As três palavras vivem juntas e não são a mesma coisa. O <strong>pedido</strong> é cada vez que a mesa pede algo. A <strong>comanda</strong> é o acumulado desses pedidos enquanto a mesa está aberta. A <strong>conta</strong> é o valor final, quando a comanda fecha."],
      ["p", "Uma mesa faz vários pedidos, tem uma comanda e recebe uma conta."],
      ["h", "Em papel ou eletrônica"],
      ["p", "A comanda de papel é um bloco: o garçom escreve, arranca a via, leva à cozinha, e no fim alguém soma. A eletrônica registra uma vez e mostra em todo lugar que precisa, sem ninguém digitar de novo."],
      ["p", "As duas funcionam. A diferença aparece quando o salão enche: papel depende de alguém andar com ele, e no movimento é justamente isso que falta."],
      ["erro", "O erro mais comum é deixar comanda aberta depois que a mesa foi embora. Ela não some sozinha, entra no relatório como venda em aberto e estraga o número do dia. Fechar comanda faz parte de limpar a mesa."],
    ],
    vizinhos: ["o-que-e-comanda-eletronica", "qual-a-diferenca-entre-comanda-e-conta"],
  },

  {
    slug: "qual-a-diferenca-entre-comanda-e-conta",
    tema: "comanda",
    titulo: "Qual a diferença entre comanda e conta",
    resumo:
      "A comanda é o registro do que foi pedido enquanto a mesa está aberta. A conta é o valor final, calculado quando a comanda fecha.",
    corpo: [
      ["p", "A confusão é comum porque no fim da noite as duas viram a mesma folha de papel. Mas elas fazem coisas diferentes."],
      ["h", "A comanda acompanha"],
      ["p", "Ela existe enquanto a mesa consome. Cresce a cada rodada, aceita item removido, muda quando o cliente troca de ideia. É um registro vivo, e a cozinha trabalha a partir dela."],
      ["h", "A conta encerra"],
      ["p", "A conta é o resultado: soma dos itens, mais o que a casa cobra (taxa de serviço, couvert), menos o que foi combinado (desconto, cortesia). Ela só faz sentido quando a comanda para de crescer."],
      ["h", "Por que a distinção importa na operação"],
      ["lista", [
        "uma mesa pode ter uma comanda e várias contas, quando o grupo divide o pagamento",
        "o relatório de vendas lê a comanda; o de caixa lê a conta",
        "comanda aberta é mesa ocupada; conta aberta é dinheiro a receber",
      ]],
      ["erro", "Tratar as duas como sinônimo faz a casa perder a resposta para uma pergunta simples: quantas mesas estão ocupadas agora? Se o sistema só conhece contas, ele só sabe quem já pediu para fechar."],
    ],
    vizinhos: ["o-que-e-comanda-em-restaurante", "como-dividir-a-conta-entre-os-clientes"],
  },

  {
    slug: "como-dividir-a-conta-entre-os-clientes",
    tema: "comanda",
    titulo: "Como dividir a conta entre os clientes",
    resumo:
      "Existem três formas: por igual, por pessoa ou por item consumido. A escolha precisa ser feita antes de a mesa começar a pedir, não na hora de pagar.",
    corpo: [
      ["p", "Dividir conta é uma das operações que mais atrasa o fechamento e mais gera discussão no salão. Quase sempre porque a decisão de como dividir só aparece quando a conta chega."],
      ["h", "As três formas"],
      ["lista", [
        "<strong>Por igual</strong>: o total dividido pelo número de pessoas. Rápido, e injusto quando alguém só bebeu água",
        "<strong>Por pessoa</strong>: cada um paga o que consumiu. Justo, e exige que o consumo tenha sido registrado por pessoa desde o começo",
        "<strong>Por item</strong>: o grupo aponta quem levou o quê na hora de pagar. É o mais lento e o que mais erra",
      ]],
      ["h", "A pergunta que resolve antes de começar"],
      ["p", "\"A conta vai junta ou separada?\", feita na primeira rodada, economiza dez minutos no fim. Se for separada, o registro precisa nascer separado; tentar separar depois é reconstruir de memória."],
      ["h", "O custo que ninguém soma"],
      ["p", "Quando a conta é dividida em vários pagamentos, cada um vira um recebimento próprio, com a sua taxa. Uma conta de R$ 300 dividida em seis cartões custa mais em taxa do que a mesma conta em um cartão só, e essa diferença raramente entra na conta do dono."],
      ["erro", "O erro é aceitar dividir por item numa mesa grande em noite cheia. O tempo que o garçom gasta reconstruindo quem comeu o quê é tempo que ele não está atendendo, e a mesa não libera. Em casa com fila, por igual ou por pessoa deveria ser a política."],
    ],
    vizinhos: ["a-taxa-de-10-por-cento-e-obrigatoria", "qual-a-diferenca-entre-comanda-e-conta"],
  },

  {
    slug: "o-que-e-couvert",
    tema: "comanda",
    titulo: "O que é couvert",
    resumo:
      "Couvert é uma entrada servida antes do prato e cobrada à parte. É opcional: o cliente pode recusar, e a casa precisa informar o preço antes de servir.",
    corpo: [
      ["p", "Couvert é aquele pãozinho, pastinha ou porção que chega à mesa antes de o cliente pedir qualquer coisa. Em muitas casas é cobrado por pessoa."],
      ["p", "Ele não é taxa: é <strong>produto</strong>. E como produto, o cliente pode recusar."],
      ["h", "As duas regras que evitam problema"],
      ["lista", [
        "<strong>Avisar antes</strong>: o preço precisa estar no cardápio ou ser informado quando o couvert é oferecido, nunca aparecer só na conta",
        "<strong>Aceitar a recusa</strong>: se o cliente disser que não quer, a casa retira e não cobra",
      ]],
      ["p", "Servir sem perguntar e cobrar depois é a prática que gera reclamação, e é evitável com uma frase do garçom."],
      ["h", "Couvert e couvert artístico"],
      ["p", "São coisas diferentes com o mesmo nome. O couvert de mesa é comida. O <strong>couvert artístico</strong> é o valor cobrado pela música ao vivo, e costuma ser cobrado na entrada, não na mesa. Misturar os dois na mesma linha da conta confunde o cliente e gera contestação."],
      ["erro", "O erro é usar o couvert para maquiar preço baixo no cardápio. O cliente compara o preço do prato na hora de escolher a casa e descobre o acréscimo só no fim. É aí que ele decide não voltar."],
    ],
    vizinhos: ["a-taxa-de-10-por-cento-e-obrigatoria", "o-que-e-ticket-medio"],
  },

  {
    slug: "o-que-e-giro-de-mesa",
    tema: "comanda",
    titulo: "O que é giro de mesa",
    resumo:
      "Giro de mesa é quantas vezes a mesma mesa é ocupada por clientes diferentes no mesmo turno. É o que diz quanto o seu salão rende sem você aumentar preço.",
    corpo: [
      ["p", "Se você tem dez mesas e atendeu trinta grupos numa noite, cada mesa girou três vezes. Esse é o giro."],
      ["formula", "giro = grupos atendidos ÷ número de mesas"],
      ["h", "Por que importa mais do que parece"],
      ["p", "O salão tem um teto físico: o número de mesas. Aumentar faturamento sem obra depende de duas alavancas apenas — quanto cada mesa gasta e quantas vezes ela é usada."],
      ["p", "Uma casa com dez mesas, ticket de R$ 60 e giro 2 fatura R$ 1.200 numa noite. Levando o giro para 3, sem tocar no preço, ela fatura R$ 1.800."],
      ["h", "O que atrasa o giro"],
      ["lista", [
        "o tempo entre sentar e conseguir pedir",
        "o tempo entre pedir e a cozinha saber",
        "o tempo entre pedir a conta e ela chegar",
        "o tempo entre a mesa esvaziar e estar limpa",
      ]],
      ["p", "Os quatro são invisíveis no relatório e todo mundo sente. O terceiro costuma ser o pior: cliente que já decidiu ir embora e espera dez minutos pela conta ocupa mesa e ainda sai com má impressão."],
      ["erro", "O erro é confundir giro alto com atendimento apressado. Girar mais é tirar o tempo morto, não empurrar o cliente. Casa que apressa quem está comendo perde a última rodada, que costuma ser a de maior margem."],
    ],
    vizinhos: ["o-que-e-ticket-medio", "o-que-e-comanda-eletronica"],
  },

  {
    slug: "o-que-e-tela-da-cozinha",
    tema: "cozinha",
    titulo: "O que é tela da cozinha (KDS)",
    resumo:
      "É a tela que mostra os pedidos para quem produz, no lugar do papel espetado. Recebe o pedido no instante em que ele é feito e marca o que já saiu.",
    corpo: [
      ["p", "A sigla KDS vem do inglês e quer dizer sistema de exibição para a cozinha. Na prática é um tablet, monitor ou televisão pendurado onde a produção enxerga, mostrando o que precisa ser feito agora."],
      ["h", "O que ela mostra"],
      ["lista", [
        "os pedidos em aberto, na ordem em que chegaram",
        "de onde veio cada um: mesa, balcão, retirada ou entrega",
        "há quanto tempo cada pedido está esperando",
        "o que já saiu, para ninguém produzir duas vezes",
      ]],
      ["h", "O que ela não deve mostrar"],
      ["p", "Preço, nome de cliente e relatório não têm função na cozinha, e poluem a tela que precisa ser lida de longe por quem está com as mãos ocupadas. Tela de cozinha boa é a que se lê a dois metros, de relance."],
      ["h", "Papel espetado ainda serve?"],
      ["p", "Serve, e por muito tempo serviu bem. Ele deixa de servir por três motivos, sempre os mesmos: alguém precisa levá-lo até lá, ele não avisa há quanto tempo o pedido espera, e quando cai no chão o pedido some sem deixar rastro."],
      ["h", "Precisa de equipamento caro?"],
      ["p", "Não. Se o sistema roda no navegador, serve o tablet mais barato do mercado, preso na parede e ligado na tomada. O que precisa ser bom é o suporte e o wi-fi, não a tela."],
      ["erro", "O erro na adoção é pendurar a tela e manter o papel \"por garantia\". Duas fontes de verdade fazem a cozinha olhar as duas, confiar em nenhuma, e o pedido se perder no meio. Escolha uma, com data marcada para a troca."],
    ],
    vizinhos: ["o-que-e-comanda-eletronica", "o-que-e-giro-de-mesa"],
  },
];
