/** Cliente e autoatendimento. Ver `guia/conteudo.mjs` para as regras de escrita. */

export default [
  {
    slug: "o-que-e-autoatendimento-em-restaurante",
    tema: "cliente",
    titulo: "O que é autoatendimento em restaurante",
    resumo:
      "É o cliente fazendo sozinho parte do que o garçom fazia: consultar o cardápio, montar o pedido e às vezes pagar. O atendimento não some, muda de função.",
    corpo: [
      ["p", "Autoatendimento em restaurante costuma ser o cliente abrindo o cardápio no próprio celular, escolhendo e enviando o pedido sem esperar alguém aparecer."],
      ["h", "O que muda para a casa"],
      ["lista", [
        "o pedido chega na cozinha sem passar por ninguém",
        "o cliente não espera para pedir, o que encurta o tempo de mesa",
        "o garçom deixa de anotar e passa a atender: receber, sugerir, resolver",
        "a letra ilegível e o item digitado errado deixam de existir",
      ]],
      ["h", "O que não muda"],
      ["p", "Alguém continua precisando levar o prato, ler a mesa, perceber quem precisa de algo e resolver o que der errado. Autoatendimento não substitui atendimento; ele tira do garçom a parte que uma tela faz melhor."],
      ["h", "Serve para toda casa?"],
      ["p", "Não. Funciona melhor onde há rodada, repetição e mesa que fica: bar, espetaria, pizzaria. Funciona pior onde o serviço é parte do produto, e onde o público não quer usar o celular na mesa."],
      ["p", "O jeito honesto de descobrir é oferecer as duas formas por um mês e ver o que o seu cliente escolhe, em vez de decidir por intuição."],
      ["erro", "O erro é apresentar o autoatendimento como economia de pessoal. Casa que tira gente do salão ao adotar piora o atendimento e culpa a tecnologia. O ganho está em a mesma equipe atender mais mesas, não em ter menos equipe."],
    ],
    vizinhos: ["como-funciona-pedido-por-qr-code", "o-cliente-precisa-baixar-aplicativo"],
  },

  {
    slug: "como-funciona-pedido-por-qr-code",
    tema: "cliente",
    titulo: "Como funciona pedido por QR Code",
    resumo:
      "O cliente lê o código da mesa, abre o cardápio no navegador, escolhe e envia. O pedido cai direto na cozinha, já identificado com o número da mesa.",
    corpo: [
      ["p", "Cada mesa tem um código diferente. É isso que faz o sistema saber de onde veio o pedido sem ninguém digitar o número."],
      ["h", "O caminho, do lado do cliente"],
      ["lista", [
        "aponta a câmera para o código da mesa",
        "abre o cardápio no navegador, sem instalar nada",
        "escolhe os itens e envia",
        "acompanha o pedido e, dependendo da casa, chama o garçom ou pede a conta",
      ]],
      ["h", "O caminho, do lado da casa"],
      ["p", "O pedido aparece na cozinha com o número da mesa, entra na comanda daquela mesa e soma na conta. O garçom vê que a mesa pediu e leva quando fica pronto."],
      ["h", "A confirmação que evita confusão"],
      ["p", "Mesa digitada pelo cliente e mesa lida pelo código são coisas diferentes. Quando o cliente digita o número, ele erra, e o prato vai para a mesa errada. O código elimina isso, e é a principal razão de ele existir em vez de um cardápio genérico."],
      ["h", "O que a casa precisa decidir antes"],
      ["lista", [
        "o pedido vai direto para a cozinha ou passa por confirmação do salão?",
        "o cliente pode pagar pelo celular ou só pedir?",
        "quem não quiser usar o celular é atendido como?",
      ]],
      ["p", "A terceira é a mais importante e a mais esquecida. Sempre haverá quem não use, e a casa precisa de uma resposta pronta que não constranja ninguém."],
      ["erro", "O erro é deixar o pedido cair na cozinha sem ninguém no salão saber. O cliente pediu, a cozinha produziu, e o prato fica pronto sem ninguém para levar. A tela do salão precisa mostrar o pedido também."],
    ],
    vizinhos: ["o-cliente-precisa-baixar-aplicativo", "como-fazer-cardapio-por-qr-code"],
  },

  {
    slug: "o-cliente-precisa-baixar-aplicativo",
    tema: "cliente",
    titulo: "O cliente precisa baixar aplicativo",
    resumo:
      "Não deveria. Pedir instalação de aplicativo para comer numa mesa é o maior motivo de desistência do autoatendimento. O caminho que funciona abre no navegador.",
    corpo: [
      ["p", "Quando o cardápio ou o pedido exigem instalar um aplicativo, boa parte dos clientes desiste ali: não tem espaço no celular, está com pressa, ou simplesmente não quer mais um ícone para comer uma vez."],
      ["h", "Por que o navegador ganha"],
      ["lista", [
        "abre em segundos, sem loja de aplicativos e sem conta",
        "funciona igual em qualquer celular, novo ou antigo",
        "não ocupa espaço nem pede permissão",
        "atualiza sozinho: o cliente vê sempre a versão certa do cardápio",
      ]],
      ["h", "Quando aplicativo faz sentido"],
      ["p", "Para o cliente que volta toda semana e quer histórico, fidelidade e pedido repetido em um toque. Ou seja: para rede grande com público recorrente e programa de relacionamento."],
      ["p", "Para a casa de bairro, o aplicativo próprio quase sempre é um custo que ninguém instala."],
      ["h", "A pergunta a fazer para o fornecedor"],
      ["p", "\"O meu cliente precisa instalar alguma coisa?\" e \"precisa criar conta para pedir?\". As duas respostas deveriam ser não. Criar conta é quase tão ruim quanto instalar: é uma barreira entre a fome e o pedido."],
      ["erro", "O erro é medir a adoção do autoatendimento sem olhar quantos desistiram no caminho. Se poucos pedem pelo celular, a causa pode não ser \"meu cliente não gosta\": pode ser que o caminho até o cardápio tenha três passos a mais do que deveria."],
    ],
    vizinhos: ["como-funciona-pedido-por-qr-code", "o-que-e-autoatendimento-em-restaurante"],
  },

  {
    slug: "o-que-fazer-quando-o-pedido-sai-errado",
    tema: "cliente",
    titulo: "O que fazer quando o pedido sai errado",
    resumo:
      "Resolver primeiro e apurar depois. O cliente quer comer, não descobrir de quem foi a culpa. E anotar o motivo, porque erro que não vira registro se repete.",
    corpo: [
      ["p", "Pedido errado acontece em toda casa. O que diferencia uma casa da outra não é a frequência, é o que acontece nos dois minutos seguintes."],
      ["h", "A ordem certa"],
      ["lista", [
        "<strong>Reconhecer sem discutir</strong>: o cliente não precisa provar que pediu outra coisa",
        "<strong>Resolver</strong>: refazer com prioridade, e dizer em quanto tempo",
        "<strong>Cuidar da espera</strong>: quem já viu a mesa inteira comendo precisa de alguma coisa agora, nem que seja uma entrada",
        "<strong>Apurar depois</strong>, longe do salão e do cliente",
      ]],
      ["h", "O que não fazer"],
      ["p", "Discutir na frente do cliente de quem foi o erro. Além de constranger a equipe, transforma um problema de dois minutos numa cena que a mesa toda vai lembrar."],
      ["h", "A parte que quase ninguém faz"],
      ["p", "Anotar o motivo. Uma linha basta: item trocado no lançamento, cozinha leu errado, item em falta não avisado. Em um mês esses registros mostram um padrão, e o padrão diz onde consertar."],
      ["p", "Sem registro, a casa vive corrigindo o mesmo erro para sempre, um prato de cada vez."],
      ["h", "Cortesia, sim ou não"],
      ["p", "Depende do tamanho do transtorno e de quanto a casa quer aquele cliente de volta. O que funciona mal é a cortesia automática: vira expectativa e deixa de resolver. O que funciona é resolver rápido e, no erro grande, oferecer algo sem o cliente pedir."],
      ["erro", "O erro é refazer o prato e não avisar o tempo. O cliente que não sabe se vai esperar cinco ou vinte minutos fica com raiva da espera, não do erro."],
    ],
    vizinhos: ["como-lidar-com-reclamacao-de-cliente", "como-saber-quem-lancou-um-pedido"],
  },

  {
    slug: "como-lidar-com-reclamacao-de-cliente",
    tema: "cliente",
    titulo: "Como lidar com reclamação de cliente",
    resumo:
      "Ouvir sem interromper, reconhecer o problema, resolver o que dá para resolver agora e dizer o que será feito. Defender a casa antes de ouvir é o que transforma reclamação em briga.",
    corpo: [
      ["p", "Reclamação é informação entregue de graça por alguém que se deu ao trabalho de falar em vez de simplesmente não voltar. A maioria não fala: vai embora."],
      ["h", "Os quatro passos"],
      ["lista", [
        "<strong>Ouvir até o fim</strong>, sem explicar por cima. Interromper para justificar dobra a irritação",
        "<strong>Reconhecer</strong> o que aconteceu, sem drama e sem discutir a versão",
        "<strong>Resolver agora</strong> o que der: refazer, trocar, tirar da conta",
        "<strong>Dizer o que muda</strong>, quando o problema for de processo",
      ]],
      ["h", "Quem atende a reclamação"],
      ["p", "Quem tem autoridade para resolver. Fazer o cliente repetir a história para três pessoas até chegar em quem decide é pior que o problema original."],
      ["p", "Por isso a equipe precisa saber, antes, o que pode resolver sozinha. \"Pode tirar a sobremesa da conta sem perguntar\" é uma regra que evita dez minutos de espera pelo gerente."],
      ["h", "A reclamação que não tem razão"],
      ["p", "Acontece. Mesmo aí, discutir não traz nada: o cliente não vai mudar de ideia no salão, e a mesa ao lado está ouvindo. Resolver o que for razoável e encerrar costuma custar menos que ganhar a discussão."],
      ["h", "Depois"],
      ["p", "Reclamação repetida sobre o mesmo assunto é processo quebrado, não azar. Duas pessoas reclamando do mesmo prato em uma semana é a receita ou a porção pedindo revisão."],
      ["erro", "O erro é tratar cada reclamação como caso isolado. Sem anotar, a casa nunca percebe que a mesma coisa foi dita quinze vezes no trimestre, e continua achando que foi cliente chato."],
    ],
    vizinhos: ["o-que-fazer-quando-o-pedido-sai-errado", "como-responder-avaliacao-negativa"],
  },

  {
    slug: "como-responder-avaliacao-negativa",
    tema: "cliente",
    titulo: "Como responder avaliação negativa",
    resumo:
      "Responda em público, curto, sem justificar e oferecendo resolver por fora. A resposta não é para quem reclamou: é para os próximos cem que vão ler.",
    corpo: [
      ["p", "Quem escreveu já teve a experiência. Quem lê a sua resposta ainda vai escolher onde comer, e é para essa pessoa que você escreve."],
      ["h", "A estrutura que funciona"],
      ["lista", [
        "agradecer sem ironia",
        "reconhecer o ponto específico que a pessoa levantou",
        "dizer o que já foi feito ou vai ser",
        "convidar para resolver por fora, com um contato",
      ]],
      ["p", "Três ou quatro linhas. Resposta longa em avaliação negativa parece defesa, e defesa longa parece culpa."],
      ["h", "O que não fazer"],
      ["p", "Discutir a versão do cliente em público. Mesmo com razão, a plateia vê uma empresa brigando com um consumidor, e é sempre a empresa que sai pior."],
      ["p", "Também não copiar e colar a mesma resposta em todas. Fica evidente, e passa a mensagem de que ninguém leu."],
      ["h", "Responder as positivas também"],
      ["p", "Custa pouco e muda a média do que o visitante vê: um perfil onde só as reclamações têm resposta parece uma casa que só aparece quando é cobrada."],
      ["h", "A avaliação injusta"],
      ["p", "Existe, e a melhor resposta continua sendo curta e educada. Quem lê reconhece o exagero sozinho, principalmente quando a resposta é serena. Brigar valida a reclamação."],
      ["erro", "O erro é responder na hora da raiva. A resposta escrita dez minutos depois de ler é quase sempre pior que a escrita no dia seguinte, e ela fica pública para sempre."],
    ],
    vizinhos: ["como-lidar-com-reclamacao-de-cliente", "como-pedir-avaliacao-do-cliente"],
  },

  {
    slug: "como-pedir-avaliacao-do-cliente",
    tema: "cliente",
    titulo: "Como pedir avaliação do cliente",
    resumo:
      "No momento em que ele está satisfeito, com um caminho de um toque e sem insistir. Pedir a todo mundo o tempo todo cansa; pedir na hora certa funciona.",
    corpo: [
      ["p", "Avaliação não aparece sozinha em volume suficiente. Quem escreve espontaneamente costuma ser quem ficou muito satisfeito ou muito insatisfeito, e o segundo grupo é mais motivado."],
      ["h", "A hora certa"],
      ["p", "Logo depois de um momento bom: o cliente elogiou o prato, a mesa está rindo, o pedido saiu rápido. Pedir na saída, no meio da conta, pega a pessoa pensando em outra coisa."],
      ["h", "O caminho precisa ser curto"],
      ["p", "Um código na conta, um link no comprovante, uma mensagem depois. Se avaliar exige procurar o perfil da casa e criar conta em algum lugar, quase ninguém vai."],
      ["h", "Não escolher só quem gostou"],
      ["p", "É tentador pedir só para quem sorriu. O problema é que a média fica ótima e você deixa de saber o que está errado, que é justamente o valor da avaliação para a operação."],
      ["h", "O que fazer com o que chegar"],
      ["p", "Ler toda semana e separar em duas pilhas: o que é gosto pessoal e o que é processo. A primeira pilha se agradece; a segunda vira mudança."],
      ["erro", "O erro é oferecer desconto em troca de avaliação positiva. Além de comprar elogio, isso costuma violar as regras das plataformas e pode custar o perfil. Peça a avaliação, não a nota."],
    ],
    vizinhos: ["como-responder-avaliacao-negativa", "como-fazer-o-cliente-voltar"],
  },

  {
    slug: "como-fazer-o-cliente-voltar",
    tema: "cliente",
    titulo: "Como fazer o cliente voltar",
    resumo:
      "Consistência primeiro, motivo para voltar depois. Cliente volta ao lugar onde sabe o que vai encontrar, e desiste do lugar onde a experiência muda a cada visita.",
    corpo: [
      ["p", "Trazer cliente novo custa caro e é o que a maioria das casas tenta. Fazer o mesmo cliente voltar custa pouco e é o que sustenta casa de bairro."],
      ["h", "O que traz de volta, em ordem"],
      ["lista", [
        "<strong>Consistência</strong>: o prato de hoje igual ao de duas semanas atrás. É a razão número um, e a mais difícil",
        "<strong>Tempo previsível</strong>: o cliente aceita esperar quinze minutos se souber que são quinze",
        "<strong>Ser reconhecido</strong>: lembrar do que a pessoa pede vale mais que qualquer desconto",
        "<strong>Motivo</strong>: novidade da semana, dia de algo específico, algo que só existe ali",
      ]],
      ["h", "Por que consistência vem antes"],
      ["p", "Promoção traz gente uma vez. Se a experiência variar, a promoção terá trazido a pessoa para uma decepção, e o dinheiro da promoção comprou um cliente a menos."],
      ["p", "Consistência vem de receita escrita, porção padronizada e processo, não de talento. É por isso que ficha técnica é assunto de marketing tanto quanto de custo."],
      ["h", "O básico que a maioria não faz"],
      ["p", "Saber quem são os clientes que voltam. Não precisa de programa sofisticado: o garçom que reconhece e o dono que cumprimenta já fazem a maior parte do trabalho em casa pequena."],
      ["erro", "O erro é investir em atrair antes de arrumar a consistência. Encher a casa com um problema de padrão é multiplicar o número de pessoas que vão embora sabendo que ali é irregular."],
    ],
    vizinhos: ["como-pedir-avaliacao-do-cliente", "o-que-e-ticket-medio"],
  },
];
