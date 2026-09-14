/** Equipe e acesso. Ver `guia/conteudo.mjs` para as regras de escrita. */

export default [
  {
    slug: "quantos-funcionarios-um-restaurante-pequeno-precisa",
    tema: "equipe",
    titulo: "Quantos funcionários um restaurante pequeno precisa",
    resumo:
      "Depende das mesas, do cardápio e do horário de pico, não do tamanho do salão. Conte por turno cheio, e não pela média do dia.",
    corpo: [
      ["p", "A conta que engana é dividir o número de mesas por um número mágico. A conta que funciona parte do pior momento do dia."],
      ["h", "Conte pelo pico, não pela média"],
      ["p", "Uma casa que fica vazia das 18h às 19h30 e lota das 20h às 22h não precisa de equipe para a média: precisa para as duas horas cheias. Quem dimensiona pela média fica descoberto justamente quando o dinheiro entra."],
      ["h", "As funções que precisam existir"],
      ["lista", [
        "<strong>Salão</strong>: alguém para receber, anotar e servir. A referência comum é uma pessoa para cada cinco a oito mesas, variando muito com o cardápio",
        "<strong>Produção</strong>: quem cozinha. Depende do número de preparações simultâneas, não do número de mesas",
        "<strong>Apoio</strong>: quem lava, repõe e monta. É a função que mais some do planejamento e mais falta na prática",
        "<strong>Caixa e fechamento</strong>: pode acumular com outra função em casa pequena",
      ]],
      ["h", "O que muda a conta para mais"],
      ["p", "Cardápio grande, prato montado na hora, casa com dois andares ou salão comprido, e mesa que fica muito tempo ocupada. Todos aumentam a necessidade sem aumentar o número de mesas."],
      ["h", "O que muda para menos"],
      ["p", "Cardápio curto, preparo prévio bem-feito, cliente pedindo pelo celular e mesa com giro rápido. Quando o garçom deixa de ser digitador de pedido, a mesma equipe atende mais."],
      ["erro", "O erro mais caro é fechar a escala com a equipe exata para o pico. Falta ninguém, e uma falta vira noite ruim. A escala precisa aguentar uma ausência sem quebrar, e é isso que a maioria descobre no primeiro atestado."],
    ],
    vizinhos: ["como-montar-a-escala-de-folga", "quanto-ganha-um-garcom"],
  },

  {
    slug: "como-montar-a-escala-de-folga",
    tema: "equipe",
    titulo: "Como montar a escala de folga",
    resumo:
      "Comece pelos dias de maior movimento e trabalhe para trás. A folga precisa cair onde a casa aguenta perder aquela pessoa, e ser previsível para quem trabalha.",
    corpo: [
      ["p", "Escala é a decisão de quem está presente quando a casa mais precisa. Montar do começo da semana para o fim quase sempre deixa o sábado descoberto."],
      ["h", "A ordem que funciona"],
      ["lista", [
        "marque primeiro os dias de pico, e preencha-os completos",
        "distribua as folgas nos dias mais fracos",
        "confira se nenhuma função ficou sem cobertura em nenhum turno",
        "deixe uma margem: se alguém faltar no pico, quem cobre?",
      ]],
      ["h", "Previsibilidade vale salário"],
      ["p", "Escala publicada em cima da hora é uma das maiores causas de rotatividade em restaurante. Quem trabalha precisa organizar a vida, e escala que muda toda semana faz a pessoa procurar emprego onde ela sabe quando vai folgar."],
      ["p", "Publicar com duas semanas de antecedência custa organização e devolve permanência."],
      ["h", "O rodízio das folgas boas"],
      ["p", "Folga de domingo vale mais que folga de terça para quase todo mundo. Se as folgas boas ficam sempre com os mesmos, o time percebe rápido. Rodar é mais justo e evita o ressentimento que aparece depois na qualidade do atendimento."],
      ["h", "O que a lei exige"],
      ["p", "Existem regras sobre descanso semanal, intervalo entre jornadas e trabalho aos domingos, e elas variam conforme o regime de contratação e a convenção coletiva da categoria na sua região. É assunto para o contador e para o sindicato, não para regra de bolso."],
      ["erro", "O erro é montar a escala sozinho, na véspera, de cabeça. Escala escrita e visível evita a discussão de \"eu achei que hoje era minha folga\", que sempre acontece no dia de movimento."],
    ],
    vizinhos: ["quantos-funcionarios-um-restaurante-pequeno-precisa", "como-reduzir-a-troca-constante-de-equipe"],
  },

  {
    slug: "como-reduzir-a-troca-constante-de-equipe",
    tema: "equipe",
    titulo: "Como reduzir a troca constante de equipe",
    resumo:
      "Escala previsível, treino de verdade nos primeiros dias e alguém que dê retorno. Salário importa, mas raramente é o primeiro motivo de quem sai.",
    corpo: [
      ["p", "Restaurante tem fama de rotatividade alta, e boa parte dela é construída pela própria casa nas duas primeiras semanas de quem entra."],
      ["h", "Por que as pessoas saem"],
      ["lista", [
        "escala imprevisível, que impede organizar a vida",
        "entrar sem treino e ser cobrado como se soubesse",
        "não saber a quem perguntar quando dá errado",
        "sentir que o erro é sempre da pessoa e nunca do processo",
        "salário, que aparece com frequência mas raramente sozinho",
      ]],
      ["h", "O que segura, e custa pouco"],
      ["p", "<strong>Os primeiros três dias.</strong> Quem entra acompanhado de alguém experiente, com uma lista do que precisa saber, fica muito mais. Quem entra e é jogado no salão numa sexta pede as contas em duas semanas."],
      ["p", "<strong>Uma conversa por mês.</strong> Cinco minutos perguntando o que está difícil e o que está funcionando resolve problema pequeno antes de virar pedido de demissão."],
      ["p", "<strong>Escala publicada com antecedência.</strong> É a mudança de maior efeito e menor custo que existe."],
      ["h", "A conta de quem sai"],
      ["p", "Substituir alguém custa o processo seletivo, o tempo de quem treina, a produtividade menor nas primeiras semanas e o erro que o novato comete no salão. Some isso e compare com o que custaria segurar a pessoa: na maioria das vezes, segurar é mais barato."],
      ["erro", "O erro é tratar rotatividade como característica do setor. Casas do mesmo tamanho, na mesma rua, com o mesmo salário, têm rotatividades muito diferentes, e a diferença está quase sempre em quem chefia e em como a escala é feita."],
    ],
    vizinhos: ["como-montar-a-escala-de-folga", "como-treinar-um-garcom-novo"],
  },

  {
    slug: "como-treinar-um-garcom-novo",
    tema: "equipe",
    titulo: "Como treinar um garçom novo",
    resumo:
      "Com uma lista do que ele precisa saber, um acompanhante nos primeiros turnos e um dia calmo para começar. Treino no meio da noite cheia não é treino, é sobrevivência.",
    corpo: [
      ["p", "Quase toda casa treina do mesmo jeito: coloca a pessoa junto de alguém e espera que ela aprenda olhando. Funciona por sorte, e a sorte varia com quem está do lado."],
      ["h", "O que ensinar, nesta ordem"],
      ["lista", [
        "<strong>O mapa</strong>: numeração das mesas, onde fica cada coisa, para onde vai o pedido",
        "<strong>O cardápio</strong>: o que é cada item, o que acompanha, o que costuma ser perguntado. Fazer a pessoa provar os cinco mais vendidos ensina mais que qualquer papel",
        "<strong>O fluxo</strong>: como abrir, como lançar, como fechar",
        "<strong>Os problemas comuns</strong>: item que acabou, cliente reclamando, conta dividida, mesa que quer juntar",
      ]],
      ["h", "O primeiro turno"],
      ["p", "Numa terça, não numa sexta. Com metade das mesas e alguém por perto. O objetivo do primeiro turno não é produzir: é a pessoa completar o ciclo inteiro uma vez, do sentar ao pagar, sem pânico."],
      ["h", "A lista que economiza tempo"],
      ["p", "Escreva uma folha com o que a pessoa precisa saber no fim da primeira semana. Serve para ela conferir sozinha, para quem treina não esquecer nada, e para você saber se o treino aconteceu. Uma folha, não um manual."],
      ["h", "O que costuma faltar"],
      ["p", "Ninguém ensina o que fazer quando dá errado, que é justamente o momento em que a pessoa nova trava. Combine antes: a quem chamar, o que pode resolver sozinha, e o que nunca decidir sem perguntar."],
      ["erro", "O erro é treinar só o sistema e não o atendimento. A pessoa aprende a lançar pedido em uma hora e leva semanas para aprender a ler uma mesa. É no segundo que está a diferença entre um garçom e alguém que carrega prato."],
    ],
    vizinhos: ["como-reduzir-a-troca-constante-de-equipe", "cada-funcionario-deve-ter-senha-propria"],
  },

  {
    slug: "cada-funcionario-deve-ter-senha-propria",
    tema: "equipe",
    titulo: "Cada funcionário deve ter senha própria",
    resumo:
      "Sim. Senha compartilhada torna impossível saber quem fez o quê, e obriga a trocar a senha de todo mundo quando uma pessoa sai.",
    corpo: [
      ["p", "É comum a casa ter uma senha de \"garçom\" que todos usam, e uma de \"caixa\" que dois ou três sabem. Funciona até o dia em que alguma coisa precisa ser explicada."],
      ["h", "O que a senha compartilhada custa"],
      ["lista", [
        "<strong>Não dá para saber quem fez</strong>: cancelamento indevido, desconto estranho, pedido que sumiu — tudo vira \"foi o garçom\"",
        "<strong>Desligar alguém obriga a trocar tudo</strong>: a senha que a pessoa levava na cabeça continua valendo para ela",
        "<strong>Ninguém se sente responsável</strong>: o que é de todos não é de ninguém, e isso vale para senha também",
        "<strong>Some a possibilidade de dar permissão diferente</strong>: se todos usam a mesma conta, todos podem o mesmo",
      ]],
      ["h", "A objeção comum, e a resposta"],
      ["p", "\"Mas é mais rápido com uma senha só.\" É, em um segundo por turno. O custo aparece no dia em que falta dinheiro no caixa e não há como saber de quem foi o turno."],
      ["p", "Se a senha individual está atrapalhando a operação, o problema é o tamanho da senha, não a individualidade. Senha de equipe de salão não precisa ter oito caracteres com símbolo: ela é digitada em pé, várias vezes por noite, num tablet."],
      ["h", "O que fazer quando alguém sai"],
      ["p", "Desativar o acesso da pessoa no mesmo dia, e só o dela. Com conta individual isso leva dez segundos e não afeta ninguém. Com senha compartilhada, é avisar a casa inteira de uma senha nova, o que na prática ninguém faz."],
      ["erro", "O erro é criar conta individual e deixar a senha antiga funcionando \"por enquanto\". As duas coexistem, todo mundo continua usando a velha, e a casa fica com o custo da mudança sem nenhum benefício."],
    ],
    vizinhos: ["como-tirar-o-acesso-de-quem-saiu", "como-saber-quem-lancou-um-pedido"],
  },

  {
    slug: "como-tirar-o-acesso-de-quem-saiu",
    tema: "equipe",
    titulo: "Como tirar o acesso de quem saiu",
    resumo:
      "Desative a conta no mesmo dia do desligamento, junto com a devolução do uniforme e da chave. Desativar preserva o histórico; apagar destrói.",
    corpo: [
      ["p", "Tirar acesso é a parte do desligamento que mais se esquece, porque é a única que não é física. Uniforme volta, chave volta, e a senha continua na cabeça da pessoa."],
      ["h", "Desativar, não apagar"],
      ["p", "Apagar a conta parece mais definitivo e é pior: junto com ela vai o histórico de quem lançou cada pedido nos últimos meses. Se depois for preciso investigar alguma coisa, o rastro sumiu."],
      ["p", "Desativar impede o acesso e mantém o registro. É o que se quer nos dois casos, na saída amigável e na outra."],
      ["h", "A lista do desligamento"],
      ["lista", [
        "desativar o acesso ao sistema",
        "trocar senhas que a pessoa sabia e que são compartilhadas por natureza (wi-fi da casa, por exemplo)",
        "retirar de grupos de mensagem da equipe",
        "revogar acesso a maquininha, conta de aplicativo de entrega e qualquer painel externo",
      ]],
      ["h", "O caso da saída conturbada"],
      ["p", "Quando a saída é ruim, o acesso deve ser cortado <strong>antes</strong> da conversa, não depois. Não é desconfiança generalizada: é procedimento, e vale para todos igualmente, o que evita que pareça pessoal."],
      ["erro", "O erro é deixar para depois do fim de semana. A janela entre o desligamento e o corte do acesso é justamente quando ele importa, e ela costuma cair num sábado."],
    ],
    vizinhos: ["cada-funcionario-deve-ter-senha-propria", "o-que-e-perfil-de-acesso"],
  },

  {
    slug: "o-que-e-perfil-de-acesso",
    tema: "equipe",
    titulo: "O que é perfil de acesso",
    resumo:
      "É o conjunto do que cada função pode ver e fazer no sistema. Serve para o garçom não abrir o relatório de faturamento e a cozinha não ver preço.",
    corpo: [
      ["p", "Perfil de acesso é a resposta para \"quem pode o quê\". Em vez de decidir pessoa por pessoa, você decide por função e encaixa as pessoas."],
      ["h", "Os perfis típicos de um restaurante"],
      ["lista", [
        "<strong>Dono</strong>: tudo, inclusive plano e cobrança",
        "<strong>Administrativo</strong>: tudo da operação, sem mexer na conta da casa",
        "<strong>Gerente</strong>: pedidos, mesas, cardápio e relatório do dia",
        "<strong>Caixa</strong>: pedidos, mesas e pagamentos",
        "<strong>Atendimento</strong>: mesas e pedidos",
        "<strong>Cozinha</strong>: só a tela de produção",
      ]],
      ["h", "Por que restringir, se todo mundo é de confiança"],
      ["p", "Não é sobre desconfiança. É sobre três coisas práticas:"],
      ["lista", [
        "<strong>Erro</strong>: quem não tem o botão não aperta o botão errado no meio do movimento",
        "<strong>Foco</strong>: tela com o que a função não usa atrasa quem está com pressa",
        "<strong>Proteção da pessoa</strong>: quem não tinha acesso não precisa se explicar quando algo dá errado ali",
      ]],
      ["h", "O que costuma ser mal calibrado"],
      ["p", "Duas coisas: <strong>cancelar pedido</strong>, que quase sempre é liberado demais, e <strong>ver faturamento</strong>, que quase sempre é liberado de menos para o gerente que precisa dele para tomar decisão no turno."],
      ["erro", "O erro é dar acesso de administrador para \"resolver mais rápido\". Em três meses metade da equipe é administradora, e aí não existe mais perfil nenhum, só a aparência de um."],
    ],
    vizinhos: ["cada-funcionario-deve-ter-senha-propria", "quem-pode-cancelar-um-pedido"],
  },

  {
    slug: "como-saber-quem-lancou-um-pedido",
    tema: "equipe",
    titulo: "Como saber quem lançou um pedido",
    resumo:
      "Só é possível se cada pessoa entrar com a conta dela. Com conta individual, o sistema registra o autor de cada lançamento, cancelamento e desconto.",
    corpo: [
      ["p", "Essa pergunta aparece sempre depois de um problema: um item cancelado que não devia, um desconto que ninguém autorizou, uma conta fechada errada."],
      ["p", "A resposta depende de uma decisão tomada antes: se a casa usa conta por pessoa ou senha compartilhada. Com senha compartilhada, não há resposta possível."],
      ["h", "O que fica registrado"],
      ["lista", [
        "quem abriu a comanda e quem fechou",
        "quem lançou cada item, e a que horas",
        "quem cancelou o quê, e quando",
        "quem aplicou desconto ou cortesia",
      ]],
      ["h", "Para que serve na prática"],
      ["p", "Menos para punir e mais para <strong>entender</strong>. Quando o mesmo tipo de erro aparece sempre com a mesma pessoa, é sinal de treino faltando. Quando aparece com todo mundo, é sinal de processo confuso, e aí o problema é do dono."],
      ["p", "Casa que usa o registro só para punir ensina a equipe a esconder erro, e erro escondido é sempre mais caro do que erro conhecido."],
      ["h", "O limite do registro"],
      ["p", "Ele diz quem estava logado, não necessariamente quem apertou. Se as pessoas deixam a sessão aberta no tablet do salão, o registro aponta quem entrou de manhã. Por isso a troca de turno no aparelho importa tanto quanto a conta individual."],
      ["erro", "O erro é olhar o registro só depois do problema. Uma olhada mensal nos cancelamentos mostra padrão antes de virar prejuízo, e leva cinco minutos."],
    ],
    vizinhos: ["cada-funcionario-deve-ter-senha-propria", "quem-pode-cancelar-um-pedido"],
  },

  {
    slug: "quem-pode-cancelar-um-pedido",
    tema: "equipe",
    titulo: "Quem pode cancelar um pedido",
    resumo:
      "Quem a casa decidir, e a decisão deveria ser restrita. Cancelamento é a operação que mais some dinheiro sem deixar rastro quando qualquer um pode fazer.",
    corpo: [
      ["p", "Cancelar pedido é necessário: cliente desiste, item acaba, alguém lança na mesa errada. O problema não é o cancelamento, é ele ser fácil demais e invisível."],
      ["h", "Por que restringir"],
      ["p", "Um item lançado e cancelado depois de produzido é comida que saiu do estoque e não virou venda. Se o cancelamento não exige ninguém, a diferença entre \"o cliente desistiu\" e outras coisas some."],
      ["h", "Uma política que funciona"],
      ["lista", [
        "<strong>Antes de a cozinha receber</strong>: qualquer um do salão pode cancelar. Não custou nada ainda",
        "<strong>Depois de a cozinha receber</strong>: precisa de gerente ou administrativo. Aqui já houve custo",
        "<strong>Sempre</strong>: o motivo é registrado, escolhido de uma lista curta",
      ]],
      ["p", "O motivo obrigatório é o detalhe que faz a política funcionar. Sem ele o relatório mostra vinte cancelamentos e nenhuma informação; com ele mostra que dezoito foram \"item em falta\", e aí o problema é o estoque, não a equipe."],
      ["h", "O que olhar depois"],
      ["p", "Uma vez por mês, o total cancelado em reais e a distribuição por motivo. Número subindo é sintoma, e o motivo diz de quê."],
      ["erro", "O erro é proibir cancelamento para o salão inteiro. Aí o garçom pede para o gerente vinte vezes por noite, o gerente empresta a senha dele para não parar o serviço, e a casa volta ao ponto de partida com uma senha de gerente circulando."],
    ],
    vizinhos: ["o-que-e-perfil-de-acesso", "como-saber-quem-lancou-um-pedido"],
  },

  {
    slug: "quanto-ganha-um-garcom",
    tema: "equipe",
    titulo: "Quanto ganha um garçom",
    resumo:
      "O salário-base é definido por convenção coletiva da categoria na sua região, e muda todo ano. Sobre ele entram gorjeta, adicionais e encargos, e é o total que precisa entrar na sua conta.",
    corpo: [
      ["p", "Não existe um número nacional. O piso do garçom sai da <strong>convenção coletiva</strong> do sindicato da categoria na sua cidade ou estado, e ela é renegociada todo ano."],
      ["p", "Por isso qualquer valor escrito aqui estaria errado em algum lugar do Brasil e desatualizado em alguns meses. O que dá para explicar é a estrutura do custo, que não muda."],
      ["h", "O que compõe o que a pessoa recebe"],
      ["lista", [
        "<strong>Salário-base</strong>: o piso da convenção, ou mais, se a casa pagar acima",
        "<strong>Gorjeta</strong>: a taxa de serviço repassada, conforme a regra da convenção e da lei",
        "<strong>Adicionais</strong>: noturno, hora extra, e o que a convenção previr",
        "<strong>Benefícios</strong>: vale-transporte, refeição no local, o que estiver acordado",
      ]],
      ["h", "O que compõe o que a casa paga"],
      ["p", "O custo para a casa é bem maior que o salário. Sobre a remuneração incidem encargos, provisões de férias e décimo terceiro, e o FGTS. A regra de bolso que se usa no setor é que o custo total fica bastante acima do salário nominal, e o multiplicador exato depende do regime da empresa."],
      ["p", "É por isso que a conta de \"posso contratar mais um?\" precisa ser feita com o custo total, e não com o salário combinado."],
      ["h", "Onde confirmar o número da sua região"],
      ["lista", [
        "a convenção coletiva vigente do sindicato da categoria na sua base territorial",
        "o seu contador, que aplica a convenção certa e calcula o custo total",
      ]],
      ["erro", "O erro é combinar remuneração contando com a gorjeta como se fosse salário. Gorjeta varia com o movimento, tem regra própria de distribuição e não substitui o piso. Casa que faz essa conta descobre o problema numa reclamação trabalhista, quando já é tarde."],
    ],
    vizinhos: ["quantos-funcionarios-um-restaurante-pequeno-precisa", "a-taxa-de-10-por-cento-e-obrigatoria"],
  },
];
