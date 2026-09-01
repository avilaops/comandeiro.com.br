/**
 * Tecnologia e escolha de sistema. Ver `guia/conteudo.mjs` para as regras.
 *
 * Regra a mais neste tema, e ela custa autodisciplina: aqui o Comandeiro é
 * parte interessada. Verbete que compara modelos de cobrança ou ensina a
 * escolher sistema precisa dar ao leitor os argumentos dos DOIS lados, com
 * a conta na mão, e deixar a decisão com ele.
 *
 * Um guia que vira folheto perde a confiança que trouxe o leitor até ali — e
 * essa confiança é o único ativo que o guia constrói.
 */

export default [
  {
    slug: "o-que-e-ponto-de-venda",
    tema: "tecnologia",
    titulo: "O que é ponto de venda (PDV)",
    resumo:
      "É o lugar onde a venda é registrada e o pagamento é recebido. No restaurante, é onde a comanda vira conta, a conta vira pagamento e a venda vira registro.",
    corpo: [
      ["p", "PDV quer dizer ponto de venda. Pode ser um computador no caixa, um tablet no balcão ou o celular na mão de quem atende: o que define não é o aparelho, é a função."],
      ["h", "O que um ponto de venda faz"],
      ["lista", [
        "registra o que foi vendido, item por item",
        "calcula a conta, com taxa e desconto",
        "recebe o pagamento e registra a forma",
        "emite o documento fiscal, quando integrado",
        "fecha o caixa no fim do turno",
      ]],
      ["h", "PDV e sistema de gestão"],
      ["p", "O ponto de venda cuida do momento da venda. O sistema de gestão cuida do resto: cardápio, estoque, equipe, relatório, cozinha. Muitos produtos fazem os dois e chamam de PDV, o que confunde na hora de comparar."],
      ["p", "Na hora de contratar, pergunte o que exatamente está incluso, porque \"PDV\" sozinho pode significar só a tela do caixa."],
      ["h", "Preciso de um?"],
      ["p", "Se a casa vende no balcão, recebe cartão e emite nota, alguma coisa já faz esse papel, nem que seja a maquininha mais um caderno. A pergunta prática não é se precisa, é se o que faz hoje aguenta o movimento e devolve os números que você precisa no fim do mês."],
      ["erro", "O erro é escolher o ponto de venda pela tela do caixa e descobrir depois que ele não fala com a cozinha nem com o salão. O caixa é o último passo da operação; sistema que só resolve o último passo deixa os outros com você."],
    ],
    vizinhos: ["preciso-de-sistema-em-um-restaurante-pequeno", "o-que-e-comanda-eletronica"],
  },

  {
    slug: "preciso-de-sistema-em-um-restaurante-pequeno",
    tema: "tecnologia",
    titulo: "Preciso de sistema em um restaurante pequeno",
    resumo:
      "Depende de quanto a operação já dói. Caderno e maquininha resolvem por um tempo; o ponto de virada é quando o erro no movimento passa a custar mais do que a mensalidade.",
    corpo: [
      ["p", "A resposta honesta é: nem toda casa precisa, e nenhuma precisa desde o primeiro dia."],
      ["h", "Quando o papel ainda dá conta"],
      ["p", "Casa com poucas mesas, cardápio curto, o dono no salão e movimento previsível funciona muito bem no papel. Muita casa lucrativa opera assim há anos, e trocar por sistema não melhoraria nada."],
      ["h", "Os sinais de que parou de dar"],
      ["lista", [
        "prato refeito por pedido errado acontece toda semana",
        "a conta fecha errada e alguém percebe só no fim do mês",
        "você não sabe qual item vendeu mais no mês passado",
        "a cozinha só sabe do pedido quando alguém leva o papel",
        "o fechamento de caixa leva mais de vinte minutos",
        "você precisa estar presente para a casa funcionar",
      ]],
      ["p", "Um sinal isolado não decide. Três ou mais é a operação avisando que o método atual chegou ao limite."],
      ["h", "A conta que resolve a dúvida"],
      ["p", "Estime o que o método atual custa por mês, em dinheiro:"],
      ["formula", "prato refeito por semana × custo do prato × 4<br>+ horas de fechamento × o valor da sua hora<br>+ o que se perde em conta errada"],
      ["p", "Compare com a mensalidade de um sistema. Se a conta do erro for maior, o sistema se paga; se for menor, ele é conforto, não necessidade — e conforto também pode valer, desde que você saiba que é isso que está comprando."],
      ["erro", "O erro é contratar sistema esperando que ele organize a casa. Sistema registra o que existe: se o cardápio não tem preço definido e a cozinha não tem processo, o sistema só deixa a bagunça mais rápida e mais visível."],
    ],
    vizinhos: ["sistema-por-mensalidade-ou-por-comissao", "o-que-e-ponto-de-venda"],
  },

  {
    slug: "sistema-por-mensalidade-ou-por-comissao",
    tema: "tecnologia",
    titulo: "Sistema por mensalidade ou por comissão",
    resumo:
      "Comissão custa pouco quando você vende pouco e cresce sem teto junto com você. Mensalidade custa igual sempre. A conta vira aos poucos, e o ponto de virada é calculável.",
    corpo: [
      ["p", "Existem dois modelos de cobrança, e a escolha entre eles não é questão de gosto: é aritmética."],
      ["h", "Como cada um se comporta"],
      ["lista", [
        "<strong>Comissão</strong>: um percentual do que você vende. Em mês fraco você paga pouco; em mês forte, muito. O custo acompanha o faturamento para sempre",
        "<strong>Mensalidade</strong>: um valor fixo. Em mês fraco pesa mais; em mês forte, dilui. O custo não acompanha o crescimento",
      ]],
      ["h", "O ponto de virada"],
      ["p", "Descubra em que faturamento os dois se igualam:"],
      ["formula", "faturamento de equilíbrio = mensalidade ÷ percentual da comissão"],
      ["p", "Com uma mensalidade de R$ 300 e uma comissão de 2%:"],
      ["formula", "300 ÷ 0,02 = R$ 15.000 por mês"],
      ["p", "Abaixo de R$ 15.000 de faturamento, a comissão sai mais barata. Acima, a mensalidade. E a diferença cresce: a R$ 60.000, a comissão custaria R$ 1.200 contra os mesmos R$ 300."],
      ["h", "O que cada modelo é bom para"],
      ["p", "<strong>Comissão faz sentido</strong> para quem está começando, para operação sazonal que fica meses parada, e para quem prefere não ter custo fixo. Você paga proporcional ao que ganha, e em mês ruim isso é um alívio real."],
      ["p", "<strong>Mensalidade faz sentido</strong> para quem já tem volume e para quem pretende crescer, porque o custo do sistema para de acompanhar a venda. É previsível, o que ajuda no fluxo de caixa."],
      ["h", "O que conferir em qualquer proposta"],
      ["lista", [
        "a comissão incide sobre a venda bruta ou líquida?",
        "há mensalidade mínima somada à comissão?",
        "a taxa de pagamento está dentro ou é cobrada à parte?",
        "há custo de implantação, de suporte ou por terminal?",
        "o preço muda quando você abre a segunda unidade?",
      ]],
      ["p", "Some tudo antes de comparar. Comparar só a comissão de um com só a mensalidade do outro é comparar coisas diferentes, e é o erro que faz a proposta barata parecer barata."],
      ["erro", "O erro é decidir pelo custo do primeiro mês. O modelo de cobrança é uma decisão de anos: o de comissão fica mais caro exatamente quando a casa vai bem, e sair dele depois de crescer costuma custar uma migração inteira."],
      ["produto", "O Comandeiro cobra valor fixo por casa, sem percentual sobre a venda. É a escolha que fizemos, e a conta acima serve para você conferir se ela é a melhor para o seu caso."],
    ],
    vizinhos: ["preciso-de-sistema-em-um-restaurante-pequeno", "como-escolher-um-sistema-para-restaurante"],
  },

  {
    slug: "como-escolher-um-sistema-para-restaurante",
    tema: "tecnologia",
    titulo: "Como escolher um sistema para restaurante",
    resumo:
      "Liste primeiro os três problemas que você quer resolver, e só depois olhe produto. Sem essa lista, toda demonstração parece boa e todas parecem iguais.",
    corpo: [
      ["p", "Toda demonstração é convincente, porque quem demonstra escolhe o caminho. A defesa contra isso é chegar com a sua lista pronta."],
      ["h", "Antes de olhar qualquer produto"],
      ["p", "Escreva os três problemas que mais doem hoje. Exemplos reais: \"a cozinha demora a saber do pedido\", \"não sei o que vendi\", \"o fechamento leva meia hora\". Três, não dez: com dez, tudo atende."],
      ["h", "As perguntas que separam os produtos"],
      ["lista", [
        "roda no aparelho que eu já tenho, ou preciso comprar?",
        "funciona no celular do garçom, ou só no caixa?",
        "quem cadastra o meu cardápio, eu ou vocês?",
        "quanto tempo até estar funcionando de verdade?",
        "o que acontece quando a internet cai no meio do movimento?",
        "se eu sair, levo meus dados em que formato?",
        "o suporte responde em que horário? Sábado à noite é o horário em que eu preciso",
      ]],
      ["h", "O teste que vale mais que a demonstração"],
      ["p", "Peça para lançar um pedido você mesmo, do jeito que o seu garçom lançaria, sem ninguém guiando. Se você não consegue em um minuto, a sua equipe também não vai conseguir na sexta cheia."],
      ["h", "O que quase ninguém pergunta e devia"],
      ["p", "<strong>Como eu saio.</strong> Sistema é decisão de anos, e a hora de descobrir que os dados não saem é antes de entrar, não depois. Pergunte em que formato você leva o cardápio, o histórico de vendas e o cadastro de clientes."],
      ["erro", "O erro é escolher pela lista de recursos. Todo sistema tem uma lista enorme, e você vai usar uma dezena deles. O que decide é se os seus três problemas somem, e se a sua equipe consegue usar sem treinamento constante."],
    ],
    vizinhos: ["sistema-por-mensalidade-ou-por-comissao", "preciso-de-sistema-em-um-restaurante-pequeno"],
  },
];
