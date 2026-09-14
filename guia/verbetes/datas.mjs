/**
 * Datas fortes e demanda. Ver `guia/conteudo.mjs` para as regras.
 *
 * Regra a mais neste tema: data forte é onde mais se publica conselho genérico
 * ("capriche na decoração", "faça um menu especial"), e conselho genérico não
 * ajuda ninguém a decidir. Todo verbete aqui precisa terminar em NÚMERO ou em
 * decisão: quanto comprar, quanto cobrar, abrir ou não abrir.
 */

export default [
  {
    slug: "como-se-preparar-para-o-dia-das-maes",
    tema: "datas",
    titulo: "Como se preparar para o Dia das Mães",
    resumo:
      "É o almoço mais cheio do ano na maioria das casas, e ele quebra pelo mesmo motivo todo ano: mesa grande, tudo no mesmo horário e cardápio longo demais para dar conta.",
    corpo: [
      ["p", "O Dia das Mães concentra três dificuldades no mesmo domingo: mesa de seis a doze pessoas, chegada quase toda entre meio-dia e uma e meia, e famílias que ficam mais tempo sentadas do que num domingo comum."],
      ["h", "O que decide o dia, na véspera"],
      ["lista", [
        "<strong>Cardápio curto</strong>, e curto de verdade: seis a oito pratos. É o item que mais salva a cozinha",
        "<strong>Reserva com horário escalonado</strong>: 11h30, 12h, 12h30, 13h. Todo mundo às 12h30 é o que trava o dia",
        "<strong>Preparo dobrado</strong> dos itens do cardápio reduzido",
        "<strong>Equipe reforçada no pico</strong>, não o dia inteiro",
        "<strong>Sobremesa pronta</strong>: a família fica mais tempo, e sobremesa que demora prende a mesa",
      ]],
      ["h", "A conta do giro de mesa"],
      ["p", "Neste dia a mesa demora mais. Se num domingo comum ela gira em 1h20 e no Dia das Mães em 2h, a mesma casa atende quase metade das pessoas no mesmo tempo:"],
      ["formula", "atendimentos = horas de serviço ÷ tempo médio da mesa × número de mesas"],
      ["p", "Com 4 horas de almoço e 10 mesas: a 1h20 dá 30 atendimentos; a 2h, 20. Planejar compra e equipe pelo número do domingo comum é a origem do \"comprei demais\" ou do \"faltou\"."],
      ["h", "Menu fechado, vale a pena?"],
      ["p", "Ajuda muito na cozinha e reduz o tempo de decisão na mesa. Mas afasta a família que quer escolher, e o público do Dia das Mães costuma querer escolher. O meio-termo que funciona é cardápio curto do jeito normal, em vez de menu único."],
      ["h", "Sobre o preço"],
      ["p", "Subir o preço só naquele dia é percebido, e mal. Se o custo do dia é maior, prefira um cardápio com pratos de ticket mais alto a um aumento visível no mesmo prato de sempre."],
      ["erro", "O erro é aceitar reserva sem escalonar horário. Doze mesas chegando às 12h30 entram na cozinha ao mesmo tempo, e a última sai depois das duas — com toda a fila da porta esperando."],
    ],
    vizinhos: ["como-preparar-a-casa-para-um-dia-cheio", "como-atender-uma-mesa-grande"],
  },

  {
    slug: "vale-a-pena-abrir-no-natal-e-ano-novo",
    tema: "datas",
    titulo: "Vale a pena abrir no Natal e no Ano Novo",
    resumo:
      "Depende de onde fica a casa e de quem é o seu cliente. Bairro residencial esvazia; região turística lota. Faça a conta do dia antes, porque a equipe custa muito mais nessas datas.",
    corpo: [
      ["p", "São as duas datas em que o custo da equipe mais sobe e a demanda mais varia de casa para casa. Não existe resposta única, e quem responde por você provavelmente não conhece o seu bairro."],
      ["h", "As perguntas que respondem por você"],
      ["lista", [
        "o seu cliente está na sua região nesse dia, ou viajou?",
        "a casa fica em bairro residencial, comercial, turístico ou de passagem?",
        "no ano passado, quanto foi o movimento? (a resposta mais confiável)",
        "a equipe quer trabalhar, ou você vai escalar à força?",
      ]],
      ["h", "A conta"],
      ["formula", "custo do dia = equipe (com adicional e folga) + insumo + custo fixo"],
      ["p", "Compare com o faturamento esperado. Sem histórico, use o domingo mais fraco do mês como base pessimista — e decida com esse número, não com a esperança."],
      ["h", "O que muda de verdade nessas datas"],
      ["p", "<strong>Ceia de 24 e de 31</strong> é serviço de noite única, com público que reserva com antecedência e espera algo diferente. Dá dinheiro quando a casa está preparada e é frustração quando é improviso."],
      ["p", "<strong>25 e 1º</strong> costumam ser almoços fracos quase em toda parte, com exceção de região turística e de estrada. Abrir por abrir nesses dois dias raramente se paga."],
      ["h", "O meio-termo que costuma valer mais"],
      ["p", "Fechar nos dias fracos e abrir nas vésperas, quando as pessoas saem para confraternizar. A semana antes do Natal costuma render mais que o Natal, e quase ninguém planeja para ela."],
      ["h", "A conversa com a equipe"],
      ["p", "Combine a escala com antecedência real, um mês antes. Escalar em cima da hora nessas datas custa em rotatividade, e o custo aparece em janeiro, quando você precisa contratar de novo."],
      ["erro", "O erro é decidir por medo de perder para o concorrente. Feriado com meia casa custa o dia inteiro de equipe cara e devolve pouco. O cliente que não te achou aberto volta na semana seguinte; o prejuízo do dia não volta."],
    ],
    vizinhos: ["vale-a-pena-abrir-em-feriado", "como-preparar-a-casa-para-um-dia-cheio"],
  },

  {
    slug: "o-que-fazer-nos-meses-fracos",
    tema: "datas",
    titulo: "O que fazer nos meses fracos",
    resumo:
      "Reduza custo variável, use o tempo para o que não cabe no mês cheio, e não invente promoção que destrua a margem. Mês fraco é para atravessar com caixa, não para forçar movimento a qualquer preço.",
    corpo: [
      ["p", "Todo restaurante tem meses fracos, e eles são previsíveis: começo do ano, mês de chuva, período de férias escolares em algumas regiões. Previsível é planejável."],
      ["h", "O que reduzir"],
      ["lista", [
        "escala mais enxuta, principalmente nos dias de semana",
        "compra menor e mais frequente, para não deixar dinheiro parado",
        "horário reduzido nos dias que historicamente não pagam a abertura",
      ]],
      ["p", "Repare que nenhum desses é \"cortar qualidade\". Insumo pior no mês fraco espanta justamente o cliente fiel, que é quem sustenta o mês fraco."],
      ["h", "O que fazer com o tempo que sobra"],
      ["p", "Mês fraco é o único momento em que dá para fazer o que o mês cheio não deixa: treinar equipe, revisar ficha técnica, refazer as fotos do cardápio, renegociar com fornecedor, contar estoque com calma, arrumar o que está quebrado."],
      ["p", "Casa que atravessa o mês fraco só esperando passar chega no mês cheio do mesmo jeito que estava."],
      ["h", "Sobre promoção"],
      ["p", "Desconto grande traz movimento e pode trazer prejuízo maior, porque o custo do prato não caiu junto. Antes de anunciar, faça a conta:"],
      ["formula", "margem de contribuição = preço com desconto − custo do prato"],
      ["p", "Se ela ficar perto de zero, a promoção só gera trabalho. O que costuma funcionar melhor é promoção que aumenta o valor sem cortar preço: bebida junto do prato, sobremesa por um valor pequeno, combinação de dois itens."],
      ["h", "O que o mês fraco exige antes de chegar"],
      ["p", "Capital de giro. Casa que gasta o caixa do mês bom não atravessa o mês ruim, e é aí que a conta de fornecedor atrasa. A regra prática é separar, nos meses bons, o suficiente para pagar um mês inteiro de custo fixo."],
      ["erro", "O erro é reagir ao mês fraco com aumento de investimento em anúncio. Público que não está saindo não sai por causa de anúncio, e o dinheiro gasto ali falta no mês seguinte."],
    ],
    vizinhos: ["o-que-e-capital-de-giro", "o-que-e-margem-de-contribuicao"],
  },

  {
    slug: "como-usar-a-data-comemorativa-para-vender-mais",
    tema: "datas",
    titulo: "Como usar a data comemorativa para vender mais",
    resumo:
      "Escolha poucas datas que combinam com a sua casa, prepare com duas semanas de antecedência e avise quem já é cliente. Data que não combina com o que você vende só dá trabalho.",
    corpo: [
      ["p", "Existem dezenas de datas no calendário, e a maioria não serve para a sua casa. Escolher três ou quatro por ano e fazê-las bem rende mais do que tentar todas."],
      ["h", "Quais escolher"],
      ["p", "As que combinam com o que a casa já é. Espetaria vai bem em data de confraternização e de jogo; casa de almoço executivo vai bem em Dia das Mães e Dia dos Pais; bar vai bem em véspera de feriado."],
      ["p", "Forçar Dia dos Namorados numa casa de família com mesa comunitária é gastar em algo que o seu público não vai comprar ali."],
      ["h", "As duas semanas antes"],
      ["lista", [
        "decidir o que vai ser oferecido, e escrever",
        "conferir se o fornecedor entrega antes da data",
        "avisar quem já é cliente — é o público mais barato de alcançar",
        "abrir reserva, se a data pede",
        "combinar a escala com a equipe",
      ]],
      ["h", "Avisar quem já é cliente"],
      ["p", "Quem já foi na sua casa custa muito menos para trazer de volta do que um desconhecido. Uma mensagem para a lista de contatos, um aviso nas redes e um cartaz na porta cobrem quase todo o resultado que uma data comemorativa dá numa casa pequena."],
      ["h", "Depois, o que quase ninguém faz"],
      ["p", "Anote o resultado no mesmo dia: quantas pessoas, quanto faturou, o que saiu, o que sobrou, o que faltou. No ano seguinte essa folha vale mais do que qualquer ideia nova, e ela leva dez minutos para ser escrita."],
      ["erro", "O erro é decidir na véspera. Data comemorativa preparada em cima da hora vira insumo caro comprado com pressa, equipe avisada de última hora e cliente que não ficou sabendo — três problemas que a antecedência resolve de graça."],
    ],
    vizinhos: ["como-fazer-o-cliente-voltar", "como-preparar-a-casa-para-um-dia-cheio"],
  },

  {
    slug: "como-prever-o-movimento-do-restaurante",
    tema: "datas",
    titulo: "Como prever o movimento do restaurante",
    resumo:
      "Pelo seu próprio histórico do mesmo dia da semana, ajustado por clima, feriado e evento na região. Quatro semanas de anotação já dão uma previsão melhor que qualquer palpite.",
    corpo: [
      ["p", "Previsão de movimento não exige sistema nem planilha complicada. Exige anotar, sempre, três números por dia: quantas pessoas, quantos pedidos, quanto faturou."],
      ["h", "A base: o mesmo dia da semana"],
      ["p", "Terça se parece com terça, não com sexta. Compare sempre o mesmo dia da semana, e use a média das últimas quatro ocorrências dele."],
      ["formula", "previsão = média das últimas 4 terças × ajuste"],
      ["h", "Os ajustes que mais pesam"],
      ["lista", [
        "<strong>chuva</strong>: derruba salão e costuma subir entrega",
        "<strong>véspera de feriado</strong>: sobe forte; o feriado em si, depende da região",
        "<strong>dia de pagamento</strong>: primeiros dias do mês e dia 15 costumam subir",
        "<strong>evento na região</strong>: jogo, show, festa da cidade mudam tudo, para cima ou para baixo",
        "<strong>fim de mês</strong>: costuma cair, principalmente em bairro residencial",
      ]],
      ["h", "Para que serve a previsão"],
      ["p", "Para três decisões que custam dinheiro: <strong>quanto comprar</strong>, <strong>quanta gente escalar</strong> e <strong>quanto preparar antes</strong>. Errar para cima vira desperdício; errar para baixo vira venda perdida com a casa cheia."],
      ["h", "O caderno basta"],
      ["p", "Uma linha por dia, com data, dia da semana, tempo, número de pessoas e faturamento. Em dois meses você tem um padrão melhor do que a intuição de dez anos, porque a intuição lembra das noites marcantes, não das comuns."],
      ["h", "O que a previsão não faz"],
      ["p", "Ela não adivinha o dia atípico. Serve para o normal, que é a maioria dos dias, e é justamente onde a compra e a escala se ajustam. Para o atípico existe o preparo de dia cheio, que é outra coisa."],
      ["erro", "O erro é prever pelo mês anterior em vez do mesmo dia da semana. Restaurante tem semana com formato próprio, e comparar a média do mês com uma terça mistura sexta cheia com segunda vazia — e some com a informação que interessa."],
    ],
    vizinhos: ["como-preparar-a-casa-para-um-dia-cheio", "quais-indicadores-acompanhar-em-um-restaurante"],
  },

  {
    slug: "o-que-fazer-em-dia-de-chuva",
    tema: "datas",
    titulo: "O que fazer em dia de chuva",
    resumo:
      "Reduza a escala do salão, reforce a entrega e corte o preparo do que só sai na mesa. Chuva não diminui a fome: muda o lugar onde as pessoas comem.",
    corpo: [
      ["p", "Chuva esvazia salão e enche entrega. Casa que só opera o salão perde o dia; casa que atende os dois canais só troca de canal."],
      ["h", "Quando a previsão já mostra chuva"],
      ["lista", [
        "escala menor no salão, maior no que sustenta a entrega",
        "preparo reduzido do que só sai na mesa, mantido do que viaja bem",
        "atenção ao tempo de entrega: chuva atrasa entregador, e o cliente conta a partir do pedido",
        "avisar nas redes que a casa está entregando — parece óbvio e é o que traz o pedido",
      ]],
      ["h", "O que vende na chuva"],
      ["p", "Prato quente, porção maior, comida que aquece. Salada e prato leve caem. Se o cardápio de entrega puder ter destaque diferente no dia de chuva, é aí que ele rende."],
      ["h", "O que viaja mal"],
      ["p", "Fritura perde o ponto, massa com molho continua cozinhando, item montado na hora chega desmontado. Vale saber quais itens do seu cardápio não deveriam sair para entrega, e é melhor descobrir isso testando do que pela reclamação."],
      ["h", "A casa que não faz entrega"],
      ["p", "Chuva forte é um bom dia para fazer o que o movimento normal não deixa: contagem de estoque, treinamento, limpeza pesada, manutenção. Reduza a escala, avise a equipe antes e aproveite o dia em vez de esperar cliente que não vem."],
      ["erro", "O erro é manter a escala inteira e o preparo inteiro esperando que a chuva passe. Ela passa às nove da noite, com a comida já preparada, a equipe paga e o salão vazio."],
    ],
    vizinhos: ["como-prever-o-movimento-do-restaurante", "como-precificar-para-o-delivery"],
  },
];
