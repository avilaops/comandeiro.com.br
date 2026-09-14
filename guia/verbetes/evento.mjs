/**
 * Movimento, evento e grupo. Ver `guia/conteudo.mjs` para as regras.
 *
 * Tema do dia fora da curva: a mesa de vinte, o buffet fechado, a fila na
 * porta. O que muda aqui não é o cardápio, é a promessa: em evento o cliente
 * combina antes e cobra depois, então quase todo verbete termina em algo
 * escrito e assinado.
 */

export default [
  {
    slug: "como-atender-uma-mesa-grande",
    tema: "evento",
    titulo: "Como atender uma mesa grande",
    resumo:
      "Definindo antes como a conta vai ser dividida, lançando por pessoa desde o primeiro pedido e mantendo um único responsável pela mesa.",
    corpo: [
      ["p", "Mesa de dez, quinze ou vinte pessoas não é a mesa de quatro multiplicada. O que quebra não é a cozinha: é o fechamento, uma hora depois, quando ninguém lembra quem pediu o quê."],
      ["h", "O combinado que se faz na chegada"],
      ["p", "Antes do primeiro pedido, pergunte: a conta sai junta, dividida por igual ou separada por pessoa? Trinta segundos ali evitam vinte minutos no fim, com o salão cheio e uma mesa inteira em pé esperando."],
      ["p", "Se a resposta for \"separada\", o lançamento precisa ser por pessoa desde o começo. Não dá para separar depois o que foi lançado junto, e é essa a origem de quase toda discussão de conta em mesa grande."],
      ["h", "As regras que fazem funcionar"],
      ["lista", [
        "um único responsável pela mesa, do começo ao fim, sem revezar",
        "pedidos lançados em blocos, para a cozinha produzir junto e servir junto",
        "bebida contada com rigor: é onde mais some item e mais nasce discussão",
        "avisar a cozinha antes do pedido chegar, para ela se organizar",
        "conta fechada e conferida ANTES de levar à mesa",
      ]],
      ["h", "Sobre a taxa de serviço em grupo"],
      ["p", "Muita casa aplica taxa obrigatória acima de certo número de pessoas. Isso precisa estar avisado antes de sentar, no cardápio ou na reserva. Aparecer só na conta é o começo de uma discussão que você perde, mesmo tendo razão sobre o trabalho que deu."],
      ["h", "Servir junto ou servir conforme sai"],
      ["p", "Combine também isso. Mesa grande que pede para servir tudo junto aceita esperar mais; mesa que não combinou nada acha que houve atraso quando o último prato demora dez minutos. É a mesma cozinha, com duas percepções opostas."],
      ["erro", "O erro é aceitar mesa grande sem preparar a casa. Vinte pessoas chegando de surpresa numa sexta ocupam a cozinha por quarenta minutos e atrasam todo o salão, e o prejuízo aparece nas outras mesas, não naquela."],
    ],
    vizinhos: ["como-dividir-a-conta-entre-os-clientes", "como-trabalhar-com-reserva"],
  },

  {
    slug: "como-trabalhar-com-reserva",
    tema: "evento",
    titulo: "Como trabalhar com reserva",
    resumo:
      "Anotando nome, telefone, horário e número de pessoas, confirmando no mesmo dia e definindo por escrito quanto tempo a mesa fica guardada.",
    corpo: [
      ["p", "Reserva resolve um problema e cria outro. Ela dá previsibilidade para a cozinha e para a escala; em compensação, deixa mesa vazia esperando enquanto tem gente na porta."],
      ["h", "O mínimo que toda reserva precisa ter"],
      ["lista", [
        "nome e telefone de quem reservou",
        "dia, horário e número de pessoas",
        "por quanto tempo a mesa fica guardada",
        "se há alguma restrição combinada: aniversário, cadeira de bebê, acessibilidade",
      ]],
      ["h", "A confirmação que evita a mesa vazia"],
      ["p", "Uma mensagem no dia, por volta do meio-dia, pedindo confirmação. Quem desistiu costuma responder, e a mesa volta a ser vendável com horas de antecedência em vez de minutos."],
      ["p", "Sem confirmação, a taxa de reserva que não aparece fica alta o bastante para tornar a reserva um prejuízo, e é isso que faz muita casa desistir do sistema achando que reserva não funciona."],
      ["h", "Tolerância: quinze minutos, avisados"],
      ["p", "Defina um tempo e diga qual é na hora de reservar. Passado o prazo, a mesa entra na fila normal. Isso protege quem está esperando em pé e, o mais importante, protege você de decidir caso a caso com o salão cheio."],
      ["h", "Vale cobrar para reservar?"],
      ["p", "Em casa comum, não: espanta cliente. Faz sentido em jantar de data forte, menu fechado ou grupo grande, onde a ausência custa caro e a casa recusou outras mesas por causa daquela. Quando cobrar, deixe claro se o valor vira consumo."],
      ["erro", "O erro é aceitar reserva por mensagem e não anotar em lugar único. Duas pessoas respondendo o mesmo telefone marcam duas mesas para o mesmo horário, e a casa descobre com as duas famílias na porta."],
    ],
    vizinhos: ["como-atender-uma-mesa-grande", "o-que-e-giro-de-mesa"],
  },

  {
    slug: "como-preparar-a-casa-para-um-dia-cheio",
    tema: "evento",
    titulo: "Como preparar a casa para um dia cheio",
    resumo:
      "Prevendo pela venda dos dias iguais anteriores, encurtando o cardápio, dobrando a preparação prévia e escalando gente a mais na hora do pico.",
    corpo: [
      ["p", "Dia cheio não quebra a casa por falta de esforço. Quebra por decisão que devia ter sido tomada de manhã e acabou sendo tomada às oito da noite, correndo."],
      ["h", "A previsão, que sai do seu próprio histórico"],
      ["p", "Olhe o mesmo dia nas últimas quatro semanas e, se for data especial, o mesmo dia do ano passado. Quantos pedidos, quanto faturou, o que mais saiu. Esse número é melhor do que qualquer palpite, e você já o tem."],
      ["h", "O que se decide antes de abrir"],
      ["lista", [
        "<strong>cardápio menor</strong>: tire o que sai pouco e dá trabalho. Menos itens é mais velocidade em cada um",
        "<strong>preparo dobrado</strong> dos cinco itens mais vendidos, que costumam ser a maior parte da noite",
        "<strong>escala com reforço no pico</strong>, não o dia inteiro: mais gente das 19h às 22h resolve mais barato do que mais gente das 17h às 23h",
        "<strong>compra conferida na véspera</strong>: faltar insumo no meio do movimento é venda perdida com a casa cheia",
        "<strong>troco e maquininha</strong> conferidos, com bateria e bobina",
      ]],
      ["h", "O que combinar com a equipe"],
      ["p", "Diga o que fazer quando acabar um item, quem avisa o salão, quem cuida da fila na porta e até quanto de desconto quem está atendendo pode dar sem procurar você. Exceção decidida no meio do movimento é exceção decidida errado."],
      ["h", "Depois que passar"],
      ["p", "No dia seguinte, quinze minutos: o que faltou, o que sobrou, onde a fila parou. Anote. Na próxima data forte, essa folha vale mais do que toda a intuição acumulada."],
      ["erro", "O erro é preparar comida e esquecer o gargalo. Se a chapa dá conta de trinta pratos por hora, preparar para cinquenta só produz fila mais longa e comida esperando. A capacidade da noite é a do ponto mais estreito, não a da despensa."],
    ],
    vizinhos: ["como-reduzir-o-tempo-de-preparo", "o-que-e-preparacao-previa"],
  },

  {
    slug: "como-cobrar-por-um-evento-fechado",
    tema: "evento",
    titulo: "Como cobrar por um evento fechado",
    resumo:
      "Por pessoa, com mínimo garantido, sinal antecipado e tudo por escrito: o que está incluso, o que é cobrado à parte e até quando dá para alterar.",
    corpo: [
      ["p", "Evento fechado é a casa vendida inteira ou em parte para um grupo, com cardápio combinado. A conta é diferente da do dia normal porque você recusa outras vendas para atender aquela."],
      ["h", "Os três valores da proposta"],
      ["lista", [
        "<strong>valor por pessoa</strong>: o cardápio combinado, por cabeça",
        "<strong>mínimo garantido</strong>: o número que o cliente paga mesmo que apareça menos gente",
        "<strong>sinal</strong>: parte antecipada, que confirma a data e cobre o que você comprou",
      ]],
      ["p", "O mínimo garantido é o item que protege a casa. Sem ele, o cliente reserva para oitenta, você compra para oitenta, chegam cinquenta e o prejuízo é seu. O costume é fechar o número alguns dias antes e cobrar por ele."],
      ["h", "O que precisa estar escrito"],
      ["lista", [
        "o que está incluso: itens, bebida, sobremesa, serviço",
        "o que é cobrado à parte e por quanto",
        "horário de início e de término, e o custo de estender",
        "até quando dá para alterar o número de pessoas",
        "política de cancelamento, com prazos e percentuais",
        "de quem é a responsabilidade por decoração, som e equipamento",
      ]],
      ["p", "Nada disso é desconfiança: é o que impede que a combinação verbal de um mês atrás vire discussão no dia, com convidado ouvindo."],
      ["h", "A conta do preço por pessoa"],
      ["p", "Some o custo dos insumos por pessoa, o custo da equipe extra dividido pelo número de convidados e a parte do custo fixo do dia. Sobre esse total aplique a margem. E lembre de somar o que você deixa de faturar se a casa fechar para o público."],
      ["formula", "preço mínimo por pessoa = (insumo + equipe extra + custo fixo do dia + venda que deixa de existir) ÷ pessoas"],
      ["erro", "O erro é orçar evento com o preço do cardápio. O cardápio já embute margem calculada para o serviço normal, com giro de mesa e venda de bebida ao longo da noite. Evento tem custo de estrutura que a mesa comum não tem, e cobrar o mesmo preço costuma dar prejuízo trabalhando mais."],
    ],
    vizinhos: ["como-atender-uma-mesa-grande", "como-calcular-o-preco-de-venda-de-um-prato"],
  },

  {
    slug: "como-lidar-com-fila-de-espera",
    tema: "evento",
    titulo: "Como lidar com fila de espera",
    resumo:
      "Anotando nome e telefone, dando uma estimativa honesta, avisando por mensagem e deixando o cliente esperar onde ele quiser, não em pé na porta.",
    corpo: [
      ["p", "Fila é sinal bom e risco alto ao mesmo tempo: é demanda que a casa não perdeu ainda, e que pode perder inteira nos próximos vinte minutos."],
      ["h", "O que fazer no primeiro minuto"],
      ["p", "Anote nome, telefone e número de pessoas, e diga uma estimativa de espera. Quem sabe quanto vai esperar tolera muito mais do que quem espera sem saber, e a diferença não é o tempo: é a incerteza."],
      ["h", "A estimativa honesta"],
      ["p", "Dizer \"dez minutos\" para segurar o cliente e entregar em trinta é pior do que dizer trinta. Quem esperou trinta depois de ouvir trinta senta satisfeito; quem esperou trinta depois de ouvir dez senta irritado, e a noite dele começa mal por culpa de uma frase."],
      ["p", "Prefira faixa a número exato: \"entre vinte e trinta minutos\" é verdadeiro e ainda deixa margem."],
      ["h", "Deixar esperar longe"],
      ["p", "Com telefone anotado, o cliente pode dar uma volta, sentar em outro lugar, esperar no carro. Uma mensagem quando a mesa está pronta libera a porta, melhora a experiência e não custa nada."],
      ["h", "A ordem, que precisa ser visível"],
      ["p", "Fila furada é o que mais gera reclamação, e ela quase sempre acontece por engano, não por má fé: mesa de dois que sai e a próxima da lista é de quatro. Combine a regra antes, avise em voz alta quando precisar pular alguém e explique por quê."],
      ["h", "O que reduz a fila sem perder venda"],
      ["lista", [
        "acelerar o giro de mesa, principalmente o fechamento da conta",
        "abrir espaço em pé para bebida, quando a casa permite",
        "reserva em parte das mesas, para diluir os horários de pico",
        "avisar no dia anterior, nas redes, que costuma encher em tal horário",
      ]],
      ["erro", "O erro é não anotar nada e confiar na memória de quem está na porta. No terceiro grupo a ordem já se perdeu, e a briga por lugar acontece na frente de quem está esperando para entrar."],
    ],
    vizinhos: ["o-que-e-giro-de-mesa", "como-trabalhar-com-reserva"],
  },

  {
    slug: "vale-a-pena-abrir-em-feriado",
    tema: "evento",
    titulo: "Vale a pena abrir em feriado",
    resumo:
      "Depende do movimento previsto e do custo dobrado da equipe. Faça a conta do dia: feriado com meia casa costuma dar menos que segunda-feira normal.",
    corpo: [
      ["p", "Feriado tem duas verdades opostas, e as duas são reais: o público tem tempo livre e sai mais, e o custo do dia é bem maior do que o de um dia comum."],
      ["h", "A conta do dia"],
      ["p", "Some o custo real de abrir:"],
      ["formula", "custo do feriado = equipe (com adicional e folga compensatória) + insumo + custo fixo do dia"],
      ["p", "Compare com o faturamento que você espera, tirado do mesmo feriado do ano passado. Se não tiver histórico, use o sábado mais fraco do mês como base pessimista."],
      ["h", "O que muda de verdade"],
      ["lista", [
        "trabalho em feriado tem regra própria de pagamento e de folga: confira com a sua contabilidade e com a convenção da categoria, que muda por cidade",
        "fornecedor não entrega: a compra precisa estar feita antes",
        "equipe quer folgar, e escalar à força custa em rotatividade depois",
        "o público muda: o do almoço de domingo não é o de terça à noite",
      ]],
      ["h", "Feriado não é um só"],
      ["p", "Casa de bairro comercial fecha, porque o público dela está em casa. Casa de bairro residencial, perto de parque ou de praia, lota. Antes de decidir, pergunte de onde vem o seu cliente: ele estará na sua região naquele dia?"],
      ["h", "O meio-termo que costuma valer"],
      ["p", "Abrir só no horário de pico, com cardápio curto e equipe enxuta. Você captura o movimento sem pagar o dia inteiro de estrutura, e a equipe trabalha menos horas no dia que ela queria descansar."],
      ["erro", "O erro é abrir por medo de perder cliente para o concorrente. Feriado com meia casa custa o dia inteiro de equipe cara e devolve pouco, e o cliente que não te encontrou aberto num feriado volta na semana seguinte. O prejuízo do dia não volta."],
    ],
    vizinhos: ["como-preparar-a-casa-para-um-dia-cheio", "o-que-e-ponto-de-equilibrio"],
  },
];
