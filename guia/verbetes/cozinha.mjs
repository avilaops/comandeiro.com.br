/** Cozinha e produção. Ver `guia/conteudo.mjs` para as regras de escrita. */

export default [
  {
    slug: "o-que-e-tempo-de-preparo",
    tema: "cozinha",
    titulo: "O que é tempo de preparo",
    resumo:
      "É quanto tempo passa entre a cozinha receber o pedido e o prato sair pronto. Não confunda com o tempo que o cliente espera, que começa bem antes.",
    corpo: [
      ["p", "Tempo de preparo é o relógio da cozinha: começa quando o pedido chega lá e para quando o prato está pronto para servir."],
      ["p", "O cliente, porém, mede outra coisa. Para ele o relógio começa quando ele pede, e inclui o tempo até a cozinha ficar sabendo. Essa diferença é onde mora quase toda reclamação de demora."],
      ["h", "Os quatro tempos da noite"],
      ["lista", [
        "<strong>até pedir</strong>: cliente sentado esperando alguém aparecer",
        "<strong>até a cozinha saber</strong>: o pedido andando do salão para a produção",
        "<strong>preparo</strong>: o único que a cozinha controla",
        "<strong>até entregar</strong>: prato pronto esperando alguém levar",
      ]],
      ["p", "A cozinha costuma levar a culpa pelos quatro. Antes de mexer no preparo, vale medir os outros três: eles são mais fáceis de reduzir e quase sempre somam mais."],
      ["h", "Como medir sem cronômetro na mão"],
      ["p", "Numa noite, anote a hora em três momentos de uns dez pedidos: quando o cliente pediu, quando a cozinha recebeu e quando saiu. Uma folha e uma caneta resolvem. O que você vai descobrir costuma surpreender, e não é a cozinha."],
      ["erro", "O erro é prometer tempo no cardápio (\"pronto em 15 minutos\") medindo só o preparo. O cliente conta desde que pediu, e quando o número não bate a promessa vira reclamação em vez de diferencial."],
    ],
    vizinhos: ["como-reduzir-o-tempo-de-preparo", "o-que-e-tela-da-cozinha"],
  },

  {
    slug: "como-reduzir-o-tempo-de-preparo",
    tema: "cozinha",
    titulo: "Como reduzir o tempo de preparo",
    resumo:
      "Antecipando o que dá para antecipar, encurtando o caminho do pedido até a cozinha e tirando da hora do movimento tudo que pode ser feito antes.",
    corpo: [
      ["p", "Reduzir tempo de preparo raramente é cozinhar mais rápido. É tirar coisa do caminho."],
      ["h", "O que costuma funcionar"],
      ["lista", [
        "<strong>Preparação prévia</strong>: tudo que pode ser cortado, temperado, porcionado e separado antes do serviço",
        "<strong>Cardápio menor no dia cheio</strong>: menos itens é menos troca de estação e menos decisão no meio do movimento",
        "<strong>Pedido chegando na hora</strong>: se a cozinha só sabe quando alguém leva o papel, o preparo começa atrasado e a culpa não é dele",
        "<strong>Ordem visível</strong>: quem produz precisa ver o que é mais antigo, não adivinhar",
      ]],
      ["h", "Onde está o gargalo"],
      ["p", "Toda cozinha tem um ponto que segura o resto: a chapa, a fritadeira, o forno, ou uma pessoa. Acelerar qualquer outra coisa não muda o resultado, porque a fila continua parando no mesmo lugar."],
      ["p", "Descobrir qual é custa uma noite de observação. Olhe onde os pratos se acumulam esperando: é ali."],
      ["h", "O que não funciona"],
      ["p", "Colocar mais gente na cozinha pequena costuma piorar. Duas pessoas a mais numa praça apertada disputam a mesma bancada, o mesmo fogão e a mesma pia, e o tempo sobe em vez de cair."],
      ["erro", "O erro é cortar o preparo prévio para \"economizar tempo antes de abrir\". A hora economizada de manhã volta multiplicada às oito da noite, quando o salão está cheio e alguém está cortando cebola."],
    ],
    vizinhos: ["o-que-e-tempo-de-preparo", "o-que-e-preparacao-previa"],
  },

  {
    slug: "o-que-e-preparacao-previa",
    tema: "cozinha",
    titulo: "O que é preparação prévia na cozinha",
    resumo:
      "É deixar pronto antes do serviço tudo o que não precisa ser feito na hora: cortes, temperos, porções e molhos. Em francês se chama mise en place.",
    corpo: [
      ["p", "Preparação prévia é o trabalho que acontece com a casa vazia para que, com a casa cheia, sobre apenas montar e finalizar."],
      ["p", "É a diferença entre uma cozinha que trabalha e uma cozinha que corre."],
      ["h", "O que entra"],
      ["lista", [
        "cortes: carne aparada e porcionada, legumes cortados",
        "temperos e molhos prontos, em recipiente de fácil acesso",
        "porções pesadas e separadas, principalmente do que mais sai",
        "estações abastecidas, com cada coisa no lugar que a mão já procura",
      ]],
      ["h", "Por que ela decide a noite"],
      ["p", "Sem preparação prévia, cada pedido carrega o preparo inteiro. Com ela, o pedido carrega só a finalização. Numa noite de cem pedidos, essa diferença é o que separa sair no tempo de atrasar tudo a partir da terceira mesa."],
      ["h", "O risco a controlar"],
      ["p", "Preparar demais vira desperdício quando o movimento não vem, e vira risco sanitário quando a conservação não é feita direito. Preparação prévia precisa de previsão: quanto costuma sair numa terça é diferente de uma sexta."],
      ["erro", "O erro é preparar sempre a mesma quantidade, independente do dia. Segunda-feira com preparo de sábado é comida que vai para o lixo, e sábado com preparo de segunda é cozinha correndo desde a primeira hora."],
    ],
    vizinhos: ["como-reduzir-o-tempo-de-preparo", "como-medir-o-desperdicio"],
  },

  {
    slug: "o-que-e-fator-de-correcao-dos-alimentos",
    tema: "cozinha",
    titulo: "O que é fator de correção dos alimentos",
    resumo:
      "É o número que corrige o preço do ingrediente pelo que se perde na limpeza. Você compra bruto e usa limpo, e a diferença precisa entrar no custo.",
    corpo: [
      ["p", "Você compra um quilo de carne, apara, e sobram 850 gramas. Você pagou por um quilo e usou 850 gramas: o quilo que de fato entra no prato custa mais do que o da nota."],
      ["p", "O fator de correção é o número que faz esse ajuste."],
      ["formula", "fator de correção = peso bruto ÷ peso limpo"],
      ["formula", "custo real do quilo = preço pago × fator de correção"],
      ["h", "Um exemplo"],
      ["p", "Fraldinha a R$ 42 o quilo. Um quilo bruto rende 850 g depois de aparada:"],
      ["formula", "fator = 1,000 ÷ 0,850 = 1,18<br>custo real = 42 × 1,18 = R$ 49,56 o quilo"],
      ["p", "Quase oito reais de diferença por quilo, que some da ficha técnica de quem usa o preço da nota."],
      ["h", "Como descobrir o seu"],
      ["p", "Uma vez por ingrediente: pese antes de limpar, limpe do jeito que a sua cozinha limpa, pese depois. O fator é seu, não o da tabela, porque depende do corte que você compra e de quem apara."],
      ["h", "Onde ele mais pesa"],
      ["p", "Carne com osso, peixe inteiro, folhas e legumes com casca. Em bebida e industrializado ele é 1, e não precisa de conta."],
      ["erro", "O erro é aplicar um fator de tabela achado na internet. Duas casas compram a mesma peça e aparam diferente; a que apara mais tem custo maior e precisa saber disso."],
    ],
    vizinhos: ["o-que-e-ficha-tecnica-de-prato", "o-que-e-cmv"],
  },

  {
    slug: "como-medir-o-desperdicio",
    tema: "cozinha",
    titulo: "Como medir o desperdício na cozinha",
    resumo:
      "Pesando o que vai para o lixo, separado por motivo, durante uma semana. Sem medir, o desperdício aparece só no CMV, e aí já é tarde para saber a causa.",
    corpo: [
      ["p", "Desperdício é dinheiro que já foi comprado e não vira venda. Ele some no meio do CMV, e é por isso que a maioria das casas sabe que perde sem saber onde."],
      ["h", "A medição que funciona"],
      ["p", "Uma balança e três baldes, por uma semana:"],
      ["lista", [
        "<strong>Pré-preparo</strong>: casca, apara, osso. É o que o fator de correção já prevê",
        "<strong>Produção</strong>: o que queimou, caiu, saiu errado. Este é o evitável",
        "<strong>Prato do cliente</strong>: o que voltou no prato. Diz que a porção está grande ou que o prato não agradou",
      ]],
      ["p", "Pese cada balde no fim do dia e anote. Uma semana de dado já mostra o padrão."],
      ["h", "O que fazer com o número"],
      ["p", "Cada balde aponta uma causa e uma solução diferentes. Pré-preparo alto significa fornecedor ou corte errado. Produção alta significa treino ou equipamento. Prato do cliente alto significa porção ou receita."],
      ["p", "Sem separar, o dono conclui \"minha equipe desperdiça\" e a conversa morre aí, quando o problema podia ser a peça que ele está comprando."],
      ["h", "O desperdício invisível"],
      ["p", "Item que venceu no estoque e item que a casa comprou demais não aparecem em balde nenhum. Esses saem na contagem de estoque, e são os que mais doem porque nem chegaram a virar comida."],
      ["erro", "O erro é medir uma semana, se assustar e nunca mais medir. Uma semana por trimestre já mantém o número vivo e mostra se o que você mudou funcionou."],
    ],
    vizinhos: ["o-que-e-cmv", "o-que-e-preparacao-previa"],
  },

  {
    slug: "como-organizar-a-cozinha-de-um-restaurante-pequeno",
    tema: "cozinha",
    titulo: "Como organizar a cozinha de um restaurante pequeno",
    resumo:
      "Pelo caminho da comida, não pelo espaço disponível: recebimento, guarda, pré-preparo, cocção, montagem e saída, sem o fluxo cruzar com a louça suja.",
    corpo: [
      ["p", "Cozinha pequena não é cozinha grande encolhida. Ela exige uma decisão que a grande pode adiar: em que ordem as coisas acontecem."],
      ["h", "O caminho da comida"],
      ["p", "Organize as estações na sequência em que o alimento anda:"],
      ["lista", [
        "recebimento e guarda (câmara, geladeira, seco)",
        "pré-preparo (bancada, pia de higienização)",
        "cocção (fogão, chapa, forno, fritadeira)",
        "montagem e finalização",
        "saída para o salão",
      ]],
      ["p", "Cada vez que o cozinheiro precisa voltar atrás no caminho, você perde segundos que se multiplicam por cada prato da noite."],
      ["h", "A regra que não se quebra"],
      ["p", "O caminho da comida limpa não cruza com o da louça suja. Quando o espaço obriga a cruzar, separe no <strong>tempo</strong>: a louça só volta por ali em momentos definidos, nunca no meio da montagem."],
      ["h", "O que rende mais em pouco espaço"],
      ["lista", [
        "altura: prateleira acima da bancada vale mais que armário embaixo",
        "o que mais sai fica ao alcance da mão, sem passo",
        "recipiente padronizado, que empilha e cabe nos mesmos lugares",
        "identificação visível, para ninguém abrir três potes procurando um",
      ]],
      ["erro", "O erro é montar a cozinha em volta do equipamento que já foi comprado. Compre depois de desenhar o fluxo: fogão bonito no lugar errado custa mais caro do que fogão simples no lugar certo, todo dia, para sempre."],
    ],
    vizinhos: ["o-que-e-preparacao-previa", "como-reduzir-o-tempo-de-preparo"],
  },
];
