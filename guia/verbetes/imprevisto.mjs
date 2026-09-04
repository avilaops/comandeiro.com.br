/**
 * Fora do salão e imprevisto. Ver `guia/conteudo.mjs` para as regras.
 *
 * Tema da noite que deu errado. A regra a mais aqui é de tom: quem procura
 * "internet caiu no restaurante" está com a casa cheia e o problema
 * acontecendo AGORA. O verbete abre pelo que fazer nos próximos cinco
 * minutos, e só depois explica como evitar da próxima vez.
 *
 * Verbete deste tema que começa por prevenção é verbete que chegou tarde.
 */

export default [
  {
    slug: "o-que-fazer-quando-a-internet-cai",
    tema: "imprevisto",
    titulo: "O que fazer quando a internet cai no restaurante",
    resumo:
      "Volte para o papel imediatamente, sem esperar a conexão voltar. A comanda escrita à mão sustenta a noite inteira; o que não se recupera é o pedido perdido enquanto todo mundo olhava o roteador.",
    corpo: [
      ["p", "Agora, nesta ordem:"],
      ["lista", [
        "<strong>Pegue papel e caneta.</strong> Comanda escrita à mão, uma por mesa, com o número da mesa no topo",
        "<strong>Avise a cozinha em voz alta.</strong> Ela precisa saber que o pedido vem em papel, não na tela",
        "<strong>Anote os preços do cardápio impresso.</strong> Se o cardápio é só digital, alguém dita os preços",
        "<strong>Reinicie o roteador uma vez</strong> — uma, não cinco. Enquanto ele volta, a casa já está operando no papel",
        "<strong>Ligue o compartilhamento do celular</strong> para o caixa, se a maquininha depender de internet",
      ]],
      ["p", "O erro que custa a noite é parar a operação esperando a conexão voltar. Ela pode voltar em dois minutos ou em duas horas, e você não tem como saber qual dos dois."],
      ["h", "A maquininha, que é o problema de verdade"],
      ["p", "Sem internet, quem trava não é o pedido: é o pagamento. Maquininha com chip próprio funciona sozinha; a que usa o wi-fi da casa, não."],
      ["p", "Duas saídas imediatas: compartilhar a internet do celular com a maquininha, ou receber por PIX, que só precisa do celular do cliente funcionando."],
      ["h", "Depois, quando o movimento passar"],
      ["p", "Lance no sistema o que foi anotado no papel, ainda naquela noite. No dia seguinte ninguém lembra o que era cada comanda, e o faturamento do dia sai errado."],
      ["h", "Para não depender de sorte na próxima"],
      ["lista", [
        "um bloco de comandas em papel guardado onde todo mundo sabe",
        "cardápio impresso, nem que seja uma folha, com os preços",
        "maquininha com chip próprio, e não só a que usa o wi-fi",
        "PIX ativo e o QR Code impresso no caixa",
        "internet do celular do dono como reserva, testada uma vez",
      ]],
      ["erro", "O erro é a casa nunca ter passado por isso com plano. A primeira queda no meio de uma sexta, sem papel e sem cardápio impresso, custa mais do que um ano de internet reserva."],
    ],
    vizinhos: ["o-que-e-comanda-em-restaurante", "o-que-fazer-quando-o-sistema-sai-do-ar"],
  },

  {
    slug: "o-que-fazer-quando-o-sistema-sai-do-ar",
    tema: "imprevisto",
    titulo: "O que fazer quando o sistema sai do ar",
    resumo:
      "Opere no papel e avise o suporte com o horário e o que aparecia na tela. A casa não para porque um sistema parou, e o registro do que aconteceu é o que faz o problema ser corrigido.",
    corpo: [
      ["p", "Primeiro separe duas coisas que parecem a mesma: <strong>a sua internet caiu</strong> ou <strong>o sistema está fora do ar</strong>. Abra qualquer site no celular usando a rede da casa. Se abrir, o problema é do sistema; se não, é da internet."],
      ["h", "Nos próximos cinco minutos"],
      ["lista", [
        "volte para a comanda de papel, sem esperar",
        "avise o suporte, com o horário exato e o que a tela mostrava",
        "tire uma foto da mensagem de erro, se houver",
        "não fique recarregando: se voltar, você vai perceber",
      ]],
      ["p", "A foto da tela parece detalhe e não é: é a diferença entre o suporte procurar o problema no escuro e ir direto nele."],
      ["h", "O que perguntar ao seu fornecedor, antes de contratar"],
      ["p", "Todo sistema sai do ar em algum momento. O que separa um fornecedor sério é o que ele responde a estas perguntas:"],
      ["lista", [
        "o que acontece com os pedidos que estavam abertos?",
        "em quanto tempo vocês respondem num sábado à noite?",
        "existe modo de funcionamento sem internet?",
        "como eu lanço depois o que foi anotado no papel?",
      ]],
      ["h", "Sobre modo sem internet"],
      ["p", "Muito sistema promete funcionar off-line e entrega uma versão limitada disso: o cardápio continua na tela, mas o pedido não chega à cozinha. Pergunte especificamente <strong>o que continua funcionando</strong>, item por item, em vez de aceitar o sim."],
      ["erro", "O erro é não ter procedimento e improvisar com a casa cheia. Cinco minutos escrevendo o que fazer, num dia calmo, valem mais do que qualquer garantia de fornecedor."],
    ],
    vizinhos: ["o-que-fazer-quando-a-internet-cai", "como-escolher-um-sistema-para-restaurante"],
  },

  {
    slug: "o-que-fazer-quando-acaba-um-item-no-meio-do-movimento",
    tema: "imprevisto",
    titulo: "O que fazer quando acaba um item no meio do movimento",
    resumo:
      "Tire do cardápio na hora, avise o salão antes que alguém peça, e ofereça a troca antes de o cliente perguntar. Item que acaba e continua sendo vendido vira pedido cancelado e cliente irritado.",
    corpo: [
      ["p", "Acabar item numa noite cheia é normal. O que estraga a noite não é a falta: é a casa demorar a assumir a falta."],
      ["h", "Na hora"],
      ["lista", [
        "<strong>Marque como esgotado</strong> no sistema, ou risque do cardápio impresso",
        "<strong>Avise o salão em voz alta</strong>, todos ao mesmo tempo",
        "<strong>Confira os pedidos já lançados</strong> que ainda não foram produzidos",
        "<strong>Fale com quem já pediu</strong>, antes que a pessoa espere quarenta minutos por algo que não vai vir",
      ]],
      ["p", "A terceira linha é a que costuma ser esquecida, e é a que dói: o cliente que já pediu não sabe de nada, e vai descobrir na hora que os outros da mesa forem servidos."],
      ["h", "Como oferecer a troca"],
      ["p", "Chegue com a solução, não com o problema. \"Acabou a picanha, o que o senhor quer?\" transfere o incômodo para o cliente. \"Acabou a picanha, mas tenho a fraldinha, que é do mesmo corte e sai agora\" resolve na mesma frase."],
      ["p", "Quando a espera já foi longa, alguma compensação vale mais do que desculpa: a bebida por conta, a sobremesa, o desconto no item. Combine antes até quanto quem está no salão pode oferecer sozinho, senão essa decisão vira uma ida até o dono no meio do movimento."],
      ["h", "Por que o cardápio digital ajuda aqui"],
      ["p", "Marcar esgotado tira o item da tela de todo mundo na hora, e ninguém mais pede. No cardápio impresso, a mesma informação depende de o garçom lembrar de avisar mesa por mesa."],
      ["h", "Para acontecer menos"],
      ["p", "Confira o estoque dos cinco itens mais vendidos antes de abrir, não durante. E anote o que acabou: item que falta toda sexta não é imprevisto, é compra mal dimensionada."],
      ["erro", "O erro é deixar o item no cardápio esperando que dê para virar. Vende, a cozinha descobre que não tem, o pedido é cancelado, e a mesa já esperou vinte minutos por nada."],
    ],
    vizinhos: ["como-lidar-com-reclamacao-de-cliente", "como-controlar-o-estoque-de-um-restaurante"],
  },

  {
    slug: "o-que-fazer-quando-um-funcionario-falta",
    tema: "imprevisto",
    titulo: "O que fazer quando um funcionário falta",
    resumo:
      "Redistribua as tarefas em vez de esperar substituto, reduza o cardápio se faltou alguém da cozinha, e limite a lotação se faltou alguém do salão. Uma casa com gente a menos precisa aceitar menos gente.",
    corpo: [
      ["p", "A falta em cima da hora acontece. O que decide a noite é a casa reconhecer que está operando com menos, em vez de tentar fazer o mesmo com menos gente."],
      ["h", "Nos primeiros minutos"],
      ["lista", [
        "veja quem da equipe pode entrar, ligando para os mais próximos primeiro",
        "redistribua as tarefas em voz alta, para todo mundo saber quem faz o quê",
        "assuma uma função você mesmo, se for o dono e estiver na casa",
      ]],
      ["h", "Faltou na cozinha"],
      ["p", "Corte o cardápio. Tire os itens mais demorados e os que dependem de uma estação específica. Cardápio menor com uma pessoa a menos sai no tempo; cardápio inteiro não sai, e o atraso contamina todas as mesas."],
      ["h", "Faltou no salão"],
      ["p", "Reduza a lotação, mesmo com mesas livres. Atender bem doze mesas com uma pessoa a menos é melhor do que atender mal dezoito: as seis extras não compensam a reclamação das outras doze."],
      ["p", "É a decisão mais difícil da lista, porque significa recusar cliente com mesa vazia à vista. Mas o custo do serviço ruim aparece depois, e maior."],
      ["h", "Depois da noite"],
      ["p", "Converse com quem faltou, uma vez, sem plateia. Falta isolada acontece com qualquer um; falta repetida é conversa diferente, e ela precisa acontecer para não virar padrão."],
      ["h", "Para depender menos de uma pessoa"],
      ["p", "Treine cada um em pelo menos duas funções. Casa onde só uma pessoa sabe fechar o caixa é casa refém, e não é da pessoa: é do fato de o procedimento nunca ter sido escrito."],
      ["erro", "O erro é abrir do mesmo jeito com gente a menos e torcer. O resultado é o mesmo sempre: atraso em tudo, equipe irritada, cliente reclamando e o dono concluindo que a noite foi ruim, quando ela foi mal dimensionada."],
    ],
    vizinhos: ["como-montar-a-escala-de-folga", "quantos-funcionarios-um-restaurante-pequeno-precisa"],
  },

  {
    slug: "como-lidar-com-cliente-que-nao-paga",
    tema: "imprevisto",
    titulo: "Como lidar com cliente que não paga a conta",
    resumo:
      "Trate como falha de comunicação antes de tratar como má fé, resolva na mesa e em voz baixa, e registre o que aconteceu. Prejuízo pequeno resolvido em silêncio custa menos que uma cena no salão.",
    corpo: [
      ["p", "Acontece por três motivos diferentes, e eles pedem respostas diferentes: a pessoa esqueceu a carteira, discorda do valor, ou não pretende pagar."],
      ["h", "Antes de qualquer coisa"],
      ["p", "Leve a conversa para longe das outras mesas e fale baixo. Uma cena no salão custa mais do que a conta, mesmo que você esteja certo, e ela custa com quem estava jantando ao lado."],
      ["h", "Discordou do valor"],
      ["p", "É o caso mais comum e o mais fácil. Vá com a conta item por item e confira junto com o cliente. Muitas vezes é erro de lançamento nosso, e nesse caso a resposta é corrigir e pedir desculpa, sem discussão."],
      ["p", "Comanda que mostra o que foi pedido, com horário, resolve isso em trinta segundos. É para isso que ela serve, mais do que para controle."],
      ["h", "Esqueceu a forma de pagamento"],
      ["p", "Ofereça PIX, que quase todo mundo tem no celular. Não resolvendo, anote nome, telefone e documento, e combine o dia. A maioria volta e paga: pessoa que esqueceu a carteira está constrangida, não fugindo."],
      ["h", "Não pretende pagar"],
      ["p", "Não segure ninguém, não tome documento, não bloqueie a saída. Você perde a razão na hora, e o valor da conta não paga o problema que isso cria."],
      ["p", "Registre o que der: nome, descrição, horário, o que foi consumido, câmera se houver. Valor alto merece boletim de ocorrência; valor pequeno, quase sempre, merece encerrar o assunto e seguir a noite."],
      ["h", "Como acontecer menos"],
      ["lista", [
        "conta apresentada sempre por escrito, com os itens",
        "pagamento antecipado no balcão e em evento, quando fizer sentido",
        "atenção à mesa que pede muito e demora a fechar",
      ]],
      ["erro", "O erro é transformar uma conta de cinquenta reais numa briga de vinte minutos na frente do salão. O prejuízo da conta é conhecido; o das mesas que não voltam, não."],
    ],
    vizinhos: ["qual-a-diferenca-entre-comanda-e-conta", "como-lidar-com-reclamacao-de-cliente"],
  },

  {
    slug: "o-que-fazer-quando-o-cliente-passa-mal",
    tema: "imprevisto",
    titulo: "O que fazer quando um cliente passa mal na casa",
    resumo:
      "Cuide da pessoa primeiro, guarde a amostra do alimento e registre tudo. A ordem importa: socorro, preservação do que foi servido, e só depois a conversa sobre responsabilidade.",
    corpo: [
      ["p", "É a situação mais séria deste guia, e a que mais se resolve errado por instinto, que manda defender a casa antes de cuidar da pessoa."],
      ["h", "Primeiro, a pessoa"],
      ["lista", [
        "leve para um lugar arejado e sentado",
        "pergunte sobre alergia e sobre remédio de uso contínuo",
        "chame o SAMU (192) diante de falta de ar, inchaço no rosto, desmaio ou dor forte",
        "não ofereça remédio, nem analgésico: pode piorar e a responsabilidade passa a ser sua",
      ]],
      ["p", "Falta de ar ou inchaço no rosto depois de comer pode ser reação alérgica grave, e isso é emergência. Não espere melhorar."],
      ["h", "Depois, o que foi servido"],
      ["p", "Guarde uma amostra do que a pessoa comeu, refrigerada e identificada com data, horário e o nome do prato. Anote quem preparou e a que horas."],
      ["p", "Isso protege os dois lados: se o problema não veio da comida, a amostra é o que prova. Sem ela, sobra a palavra de um contra a do outro, e a casa perde."],
      ["h", "Registre"],
      ["p", "Nome e telefone da pessoa, horário, o que foi consumido, o que ela relatou, o que a casa fez. Papel serve. É o documento que vai importar se houver desdobramento, e ninguém lembra dos detalhes uma semana depois."],
      ["h", "O que não fazer"],
      ["p", "Não admita culpa nem negue no calor do momento, porque você ainda não sabe. Não jogue fora o que sobrou do prato. E não ofereça dinheiro na hora: parece confissão e complica qualquer conversa posterior."],
      ["h", "Prevenção, que é o que de fato resolve"],
      ["lista", [
        "informar alérgenos no cardápio, principalmente leite, ovo, castanha, camarão e glúten",
        "perguntar sobre alergia ao anotar o pedido",
        "separar utensílios e bancada quando o pedido é de alérgico",
        "controle de temperatura e de validade, escrito e conferido",
      ]],
      ["erro", "O erro é tratar como reclamação de cliente. Passar mal não é reclamação: é ocorrência de saúde, e ela pede socorro, amostra e registro — nessa ordem, e antes de qualquer conversa sobre quem tem razão."],
    ],
    vizinhos: ["como-lidar-com-reclamacao-de-cliente", "como-organizar-a-cozinha-de-um-restaurante-pequeno"],
  },
];
