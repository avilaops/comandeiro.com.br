/** Cardápio e preço. Ver `guia/conteudo.mjs` para as regras de escrita. */

export default [
  {
    slug: "como-montar-um-cardapio-de-restaurante",
    tema: "cardapio",
    titulo: "Como montar um cardápio de restaurante",
    resumo:
      "Comece pelo que a sua cozinha consegue fazer bem no movimento, não pelo que você gostaria de servir. Depois calcule o custo de cada item e só então escreva o cardápio.",
    corpo: [
      ["p", "Cardápio não é lista de pratos que você sabe fazer. É a decisão de o que a sua casa vai produzir todo dia, com a cozinha que ela tem, na hora em que o salão está cheio."],
      ["h", "A ordem que evita retrabalho"],
      ["lista", [
        "<strong>Comece pela cozinha</strong>: quais equipamentos você tem e quantas pessoas produzem. Item que precisa de forno numa casa sem forno não entra, por melhor que seja",
        "<strong>Escolha os insumos</strong>: privilegie o que se repete entre pratos. Um ingrediente que serve a quatro itens gira; um que serve a um item vence",
        "<strong>Calcule o custo</strong> de cada candidato, com ficha técnica",
        "<strong>Precifique</strong>, e corte o que não fecha",
        "<strong>Só então escreva</strong> os nomes e as descrições",
      ]],
      ["h", "O teste do movimento"],
      ["p", "Antes de fechar, faça a pergunta que decide: <strong>se chegarem trinta pedidos em vinte minutos, este item sai?</strong> O que não passa nesse teste ou vira item de dia calmo, ou não entra."],
      ["h", "Como agrupar"],
      ["p", "Agrupe pelo jeito que o cliente pede, não pelo jeito que a cozinha produz. Ninguém procura \"pratos de chapa\": procura espetos, porções, bebidas."],
      ["erro", "O erro mais comum é montar o cardápio pelo gosto do dono. O cardápio é o que o seu público compra, com o que a sua cozinha entrega e pelo preço que fecha a conta. O gosto do dono entra na escolha do que fazer bem, não na lista."],
    ],
    vizinhos: ["quantos-itens-deve-ter-um-cardapio", "o-que-e-ficha-tecnica-de-prato"],
  },

  {
    slug: "quantos-itens-deve-ter-um-cardapio",
    tema: "cardapio",
    titulo: "Quantos itens deve ter um cardápio",
    resumo:
      "Menos do que você imagina. Cardápio grande atrasa a decisão do cliente, aumenta o estoque e a perda, e faz a cozinha piorar em tudo por tentar fazer de tudo.",
    corpo: [
      ["p", "Não existe número mágico, mas existe uma direção: quase toda casa pequena tem mais itens do que precisa."],
      ["h", "O que cardápio grande custa"],
      ["lista", [
        "<strong>Estoque</strong>: mais itens é mais ingrediente parado, e ingrediente parado vence",
        "<strong>Cozinha</strong>: mais preparações é mais preparo prévio e mais troca de estação no movimento",
        "<strong>Cliente</strong>: escolha demais atrasa o pedido, e mesa que demora a pedir demora a girar",
        "<strong>Qualidade</strong>: fazer vinte coisas bem é mais difícil que fazer oito",
      ]],
      ["h", "Como descobrir o seu excesso"],
      ["p", "Tire o relatório de vendas dos últimos três meses e ordene por quantidade. Você vai encontrar o padrão de sempre: <strong>uma minoria dos itens responde pela maioria das vendas</strong>."],
      ["p", "Olhe a cauda: os itens que vendem pouco. Para cada um, pergunte se ele traz ingrediente que nenhum outro usa. Se traz, ele custa muito mais do que parece, porque carrega estoque próprio."],
      ["h", "O item que vende pouco e fica"],
      ["p", "Nem todo item de pouca venda deve sair. Alguns existem para não perder a mesa: a opção vegetariana, a do cliente que não come carne vermelha, a da criança. Um só de cada, bem escolhido, resolve."],
      ["erro", "O erro é acrescentar item toda vez que um cliente pede algo que não tem. O cardápio cresce por adição e nunca por subtração, e em dois anos vira uma lista que a cozinha não dá conta e o cliente não lê."],
    ],
    vizinhos: ["o-que-e-engenharia-de-cardapio", "como-montar-um-cardapio-de-restaurante"],
  },

  {
    slug: "o-que-e-engenharia-de-cardapio",
    tema: "cardapio",
    titulo: "O que é engenharia de cardápio",
    resumo:
      "É cruzar quanto cada item vende com quanto ele deixa de margem, para decidir o que destacar, o que ajustar e o que tirar. Duas colunas resolvem.",
    corpo: [
      ["p", "Engenharia de cardápio é uma análise simples com nome grande. Você lista os itens com duas informações e classifica."],
      ["lista", [
        "<strong>Popularidade</strong>: quantas unidades vendeu no período",
        "<strong>Margem de contribuição</strong>: quanto sobra de cada unidade vendida",
      ]],
      ["h", "Os quatro grupos"],
      ["tabela", [
        ["", "Margem alta", "Margem baixa"],
        ["Vende muito", "Destaque e proteja", "Ajuste o custo ou o preço"],
        ["Vende pouco", "Dê visibilidade", "Candidato a sair"],
      ]],
      ["p", "Cada quadrante pede uma ação diferente:"],
      ["lista", [
        "<strong>Vende muito e dá margem</strong>: é o que sustenta a casa. Não mexa no preço sem pensar, e garanta que nunca falte",
        "<strong>Vende muito e dá pouca margem</strong>: atrai gente, então não corte. Reduza o custo ou suba o preço com cuidado",
        "<strong>Vende pouco e dá margem</strong>: o problema é visibilidade. Mude a posição no cardápio, o nome, a descrição, ou treine a sugestão do garçom",
        "<strong>Vende pouco e dá pouca margem</strong>: ocupa espaço no cardápio e no estoque. É o primeiro a sair",
      ]],
      ["h", "Com que frequência"],
      ["p", "Uma vez por trimestre resolve. Mais que isso não dá tempo de a mudança fazer efeito; menos que isso deixa item ruim vivo por tempo demais."],
      ["erro", "O erro é fazer a análise só com o preço de venda, sem a margem. O item mais caro do cardápio pode ser o que menos contribui, se o insumo dele também for o mais caro."],
    ],
    vizinhos: ["o-que-e-margem-de-contribuicao", "quantos-itens-deve-ter-um-cardapio"],
  },

  {
    slug: "o-que-e-cardapio-digital",
    tema: "cardapio",
    titulo: "O que é cardápio digital",
    resumo:
      "É o cardápio numa página que o cliente abre no próprio celular, em geral por QR Code. Muda preço e marca item esgotado na hora, sem reimprimir nada.",
    corpo: [
      ["p", "Cardápio digital é o mesmo cardápio, numa página de internet em vez de papel. O cliente abre pelo celular dele, normalmente lendo um código na mesa."],
      ["h", "O que ele resolve"],
      ["lista", [
        "<strong>Preço desatualizado</strong>: alterar leva segundos e vale para todas as mesas de imediato",
        "<strong>Item esgotado</strong>: marca e o cliente para de pedir o que não tem",
        "<strong>Foto</strong>: cabe foto de todos os itens, o que no impresso sairia caro",
        "<strong>Custo de reimpressão</strong>: deixa de existir",
      ]],
      ["h", "O que ele não resolve"],
      ["p", "Cardápio digital não vende sozinho. Descrição ruim continua ruim na tela, e foto malfeita atrapalha mais do que ajuda. O que muda é a facilidade de corrigir, não a qualidade do conteúdo."],
      ["h", "Substitui o impresso?"],
      ["p", "Depende da casa. Há público que não quer usar o celular para comer, e há mesa sem sinal. A prática que funciona na maioria é ter os dois: o digital como principal, sempre atualizado, e alguns impressos simples e baratos para quem preferir."],
      ["p", "O que não funciona é manter dois cardápios com preços diferentes, e é o que acontece quando o impresso não é reimpresso junto com a mudança."],
      ["erro", "O erro é fazer um PDF e chamar de cardápio digital. PDF abre lento no celular, não se lê sem dar zoom e não permite marcar esgotado. Cardápio digital é página, não arquivo."],
    ],
    vizinhos: ["como-fazer-cardapio-por-qr-code", "como-descrever-um-prato-no-cardapio"],
  },

  {
    slug: "como-fazer-cardapio-por-qr-code",
    tema: "cardapio",
    titulo: "Como fazer cardápio por QR Code",
    resumo:
      "Publique o cardápio numa página, gere um código que aponte para ela e cole na mesa. O código precisa apontar para uma página que você consiga editar depois.",
    corpo: [
      ["p", "O QR Code é só um endereço em forma de desenho. A câmera lê e abre a página. Todo o trabalho está na página, não no código."],
      ["h", "O passo a passo"],
      ["lista", [
        "<strong>Publique o cardápio</strong> numa página de internet que você consiga editar",
        "<strong>Gere o código</strong> apontando para o endereço dessa página",
        "<strong>Teste</strong> com dois ou três celulares diferentes, incluindo um antigo",
        "<strong>Imprima e cole</strong> onde o cliente sentado alcança sem levantar",
      ]],
      ["h", "O erro que obriga a reimprimir tudo"],
      ["p", "Se o código apontar para um arquivo (um PDF, uma imagem), mudar o cardápio muda o endereço, e todos os adesivos das mesas viram lixo. Aponte sempre para um <strong>endereço fixo</strong> cujo conteúdo você troca por dentro."],
      ["p", "É a diferença entre \"o cardápio da minha casa\" e \"o cardápio de março\"."],
      ["h", "Onde colar"],
      ["p", "No tampo, ao alcance de quem está sentado, e não na parede ou no menu em pé que alguém tira da mesa. Adesivo em pé cai; adesivo no tampo sobrevive à limpeza se for laminado."],
      ["h", "Quando o cliente não consegue"],
      ["p", "Sempre haverá quem não leia o código: celular antigo, câmera ruim, pessoa que prefere não usar. A casa precisa ter uma saída pronta, e a mais simples é o garçom com o cardápio na mão, sem drama e sem lição de tecnologia."],
      ["erro", "O erro é imprimir o adesivo antes de testar. Código pequeno demais, impresso com pouco contraste ou colado onde reflete a luz não é lido, e a casa só descobre depois de colar em trinta mesas."],
    ],
    vizinhos: ["o-que-e-cardapio-digital", "o-que-e-comanda-eletronica"],
  },

  {
    slug: "como-descrever-um-prato-no-cardapio",
    tema: "cardapio",
    titulo: "Como descrever um prato no cardápio",
    resumo:
      "Diga o que vai no prato e o que o cliente vai sentir, em uma linha. Descrição serve para tirar dúvida e dar vontade, não para exibir vocabulário.",
    corpo: [
      ["p", "A descrição tem duas funções, nessa ordem: <strong>evitar a pergunta</strong> (\"vem com o quê?\") e <strong>dar vontade</strong>. Quando ela falha na primeira, o garçom vira dicionário e a mesa demora mais para pedir."],
      ["h", "O que colocar"],
      ["lista", [
        "os ingredientes principais, com o nome que o cliente usa",
        "o acompanhamento, se houver",
        "o tamanho ou o rendimento, quando não é óbvio (\"serve duas pessoas\")",
        "uma característica que se sente: defumado, crocante, apimentado",
      ]],
      ["h", "O que tirar"],
      ["p", "Adjetivo genérico não diz nada. \"Delicioso\", \"saboroso\" e \"especial\" ocupam espaço e o cliente pula. Nenhum cardápio anuncia prato ruim, então esses adjetivos não informam."],
      ["p", "Termo técnico de cozinha também sai, a menos que o seu público use. Se precisar explicar o nome, o nome está errado para aquele cardápio."],
      ["h", "O tamanho certo"],
      ["p", "Uma linha, duas no máximo. Cardápio é lido em pé, com fome, muitas vezes com pouca luz. Descrição longa não é lida: é pulada."],
      ["h", "O detalhe que evita reclamação"],
      ["p", "Diga o que <strong>não</strong> vem, quando é uma expectativa comum. \"Não acompanha guarnição\" numa linha economiza uma discussão por noite."],
      ["erro", "O erro é descrever o prato pelo processo (\"selado em fogo alto e finalizado no forno\"). Isso interessa a quem cozinha; o cliente quer saber o que vai chegar e como vai ser comer aquilo."],
    ],
    vizinhos: ["o-que-e-cardapio-digital", "quantos-itens-deve-ter-um-cardapio"],
  },
];
