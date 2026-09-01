/**
 * Conteúdo do guia do Comandeiro.
 *
 * Cada verbete responde UMA pergunta que o dono de restaurante digita no
 * Google. O plano dos 365 está em `docs/comandeiro.com.br/GUIA-GLOSSARIO-365.md`.
 *
 * Regras que valem para todo verbete, e que o gerador não consegue conferir
 * sozinho:
 *
 *   título        é a busca, não uma frase de efeito. "O que é CMV", nunca
 *                 "Entenda o segredo dos custos"
 *   resposta      duas linhas, no começo. Quem chegou pelo Google quer a
 *                 resposta, não a introdução
 *   número        exemplo em escala de restaurante pequeno, não de rede
 *   produto       entra no fim, em uma linha, ou não entra
 *   número volátil  taxa e imposto mudam. Onde muda, o texto ensina a
 *                 ESTRUTURA e manda conferir na fonte, em vez de cravar um
 *                 número que envelhece e vira informação errada na mão de
 *                 quem confiou
 */

import salao from "./verbetes/salao.mjs";
import dinheiro from "./verbetes/dinheiro.mjs";
import fiscal from "./verbetes/fiscal.mjs";
import cozinha from "./verbetes/cozinha.mjs";
import cardapio from "./verbetes/cardapio.mjs";
import tecnologia from "./verbetes/tecnologia.mjs";

export const temas = {
  comanda: { nome: "Comanda, pedido e salão", mes: "Setembro" },
  cozinha: { nome: "Cozinha e produção", mes: "Outubro" },
  cardapio: { nome: "Cardápio e preço", mes: "Novembro" },
  evento: { nome: "Movimento, evento e grupo", mes: "Dezembro" },
  dinheiro: { nome: "Dinheiro, canais e comissão", mes: "Janeiro" },
  equipe: { nome: "Equipe e acesso", mes: "Fevereiro" },
  fiscal: { nome: "Fiscal e legal", mes: "Março" },
  cliente: { nome: "Cliente e autoatendimento", mes: "Abril" },
  datas: { nome: "Datas fortes e demanda", mes: "Maio" },
  imprevisto: { nome: "Fora do salão e imprevisto", mes: "Junho" },
  gestao: { nome: "Gestão, estoque e delegação", mes: "Julho" },
  tecnologia: { nome: "Tecnologia e escolha de sistema", mes: "Agosto" },
};

const lotePrimeiro = [
  {
    slug: "o-que-e-cmv",
    tema: "cardapio",
    titulo: "O que é CMV",
    resumo:
      "CMV é o Custo da Mercadoria Vendida: quanto do seu faturamento foi embora só para comprar o que você vendeu. É a conta que diz se o preço do seu cardápio para em pé.",
    corpo: [
      ["p", "CMV quer dizer Custo da Mercadoria Vendida. Em restaurante, é quanto você gastou de insumo para produzir o que foi vendido num período, comparado com o que entrou de venda no mesmo período."],
      ["p", "A conta não é o que você comprou no mês. É o que você <strong>consumiu</strong>:"],
      ["formula", "CMV = estoque inicial + compras − estoque final"],
      ["p", "E o que interessa é a porcentagem sobre a venda:"],
      ["formula", "CMV % = CMV ÷ faturamento × 100"],
      ["h", "Um exemplo com número de casa pequena"],
      ["p", "Uma espetaria começou o mês com R$ 4.000 de estoque, comprou R$ 18.000 e terminou com R$ 3.000. O consumo foi de R$ 19.000. Se ela faturou R$ 60.000:"],
      ["formula", "19.000 ÷ 60.000 × 100 = 31,7% de CMV"],
      ["p", "De cada R$ 100 vendidos, R$ 31,70 foram embora só em mercadoria. O que sobra ainda precisa pagar equipe, aluguel, energia, imposto e o dono."],
      ["h", "Qual é um CMV bom"],
      ["p", "Não existe número universal, porque depende do que você vende. Bebida costuma ter custo proporcional menor que comida, então casa que vende muita bebida puxa a média para baixo. Rodízio e buffet puxam para cima."],
      ["p", "O número que importa não é o do vizinho, é o <strong>seu do mês passado</strong>. CMV subindo três meses seguidos é sinal de uma destas quatro coisas: fornecedor aumentou, porção cresceu sem ninguém decidir, está havendo perda, ou o preço do cardápio ficou velho."],
      ["erro", "O erro mais comum é usar o valor das <strong>compras</strong> no lugar do consumo. Num mês em que você encheu o estoque, isso mostra um CMV altíssimo que não aconteceu; no mês seguinte, um CMV falsamente ótimo. Sem contar o estoque no começo e no fim, a conta mente nos dois sentidos."],
      ["p", "Contar estoque uma vez por mês, sempre no mesmo dia e antes de abrir, já resolve. Não precisa de sistema para isso: precisa de disciplina e de uma planilha."],
    ],
    vizinhos: ["como-calcular-o-preco-de-venda-de-um-prato", "o-que-e-ficha-tecnica-de-prato"],
  },

  {
    slug: "o-que-e-ficha-tecnica-de-prato",
    tema: "cozinha",
    titulo: "O que é ficha técnica de prato",
    resumo:
      "É a receita escrita com quantidade e custo de cada ingrediente. Serve para você saber quanto custa um prato antes de decidir por quanto vender.",
    corpo: [
      ["p", "Ficha técnica é a receita do prato com três colunas que a receita de casa não tem: <strong>quanto</strong> de cada ingrediente, <strong>quanto custa</strong> aquela quantidade e <strong>quanto rende</strong> no fim."],
      ["p", "Sem ela você não sabe o custo do prato. E sem o custo, o preço do cardápio é chute — às vezes um chute caro demais que espanta cliente, às vezes um barato demais que vende muito e dá prejuízo."],
      ["h", "Como montar, na prática"],
      ["p", "Pegue um prato e escreva:"],
      ["lista", [
        "cada ingrediente, com a quantidade que vai de verdade em uma porção (pese uma vez, não estime)",
        "o preço que você paga pela unidade de compra (o quilo, o litro, a caixa)",
        "o custo daquela quantidade: regra de três simples",
        "o rendimento: quantas porções saem da receita",
      ]],
      ["p", "Some os custos, divida pelo rendimento, e você tem o custo por porção."],
      ["h", "O detalhe que quase todo mundo esquece"],
      ["p", "Você compra o ingrediente <strong>bruto</strong> e usa ele <strong>limpo</strong>. A carne perde no aparo, a cebola perde na casca, a batata perde na descasca. Se você calcula com o preço do quilo cru, o custo real do prato é maior do que o da sua ficha."],
      ["p", "A correção é simples: pese um quilo bruto, limpe, pese de novo. Se sobrou 800 g, o seu quilo limpo custa o preço do quilo bruto dividido por 0,8, ou seja, 25% mais caro do que você achava."],
      ["h", "Um exemplo"],
      ["p", "Espeto de fraldinha com 120 g de carne limpa. A fraldinha custa R$ 42 o quilo, e o aproveitamento depois de aparar é de 85%."],
      ["formula", "quilo limpo = 42 ÷ 0,85 = R$ 49,41<br>carne por espeto = 49,41 × 0,120 = R$ 5,93"],
      ["p", "Somando palito, sal, tempero e a farofa que acompanha, o custo passa de seis reais. Esse é o número que precisa entrar na conta do preço, não os R$ 5,04 que sairiam do preço do quilo bruto."],
      ["erro", "O erro comum é fazer a ficha uma vez e nunca mais olhar. Preço de carne muda, fornecedor muda, porção cresce sozinha quando a cozinha troca de mão. Ficha técnica de dois anos atrás é ficção; revisar as dez principais a cada trimestre já mantém a conta viva."],
    ],
    vizinhos: ["o-que-e-cmv", "como-calcular-o-preco-de-venda-de-um-prato"],
  },

  {
    slug: "como-calcular-o-preco-de-venda-de-um-prato",
    tema: "cardapio",
    titulo: "Como calcular o preço de venda de um prato",
    resumo:
      "Some o custo dos ingredientes, defina qual porcentagem da sua venda pode ser custo de mercadoria e divida. O preço sai da conta, não do preço do concorrente.",
    corpo: [
      ["p", "Existem duas formas de chegar ao preço, e as duas partem do custo da ficha técnica. Sem ficha, nenhuma funciona."],
      ["h", "Pelo CMV desejado"],
      ["p", "É a mais direta. Você decide qual porcentagem da venda pode ser mercadoria e divide o custo por ela."],
      ["formula", "preço = custo do prato ÷ CMV desejado"],
      ["p", "Espeto que custa R$ 6,20 de insumo, com CMV alvo de 30%:"],
      ["formula", "6,20 ÷ 0,30 = R$ 20,67"],
      ["h", "Pelo markup"],
      ["p", "Mesma conta escrita ao contrário: em vez de dividir pela porcentagem, você multiplica por um número. Com CMV alvo de 30%, o multiplicador é 1 ÷ 0,30, ou seja, 3,33."],
      ["formula", "6,20 × 3,33 = R$ 20,65"],
      ["h", "Por que o preço nunca é só isso"],
      ["p", "A conta acima cobre a mercadoria e deixa o resto para pagar equipe, aluguel, energia, imposto, taxa de cartão e o seu lucro. Se a sua estrutura é cara, 30% de CMV pode não sobrar o suficiente; se é enxuta, pode sobrar bastante."],
      ["p", "Por isso o preço final passa por três filtros depois da conta:"],
      ["lista", [
        "o mercado: existe teto do que a sua região paga por aquele item, e ignorá-lo não faz o cliente pagar",
        "o cardápio inteiro: nem todo item precisa da mesma margem. Um pode ser o que atrai e outro o que paga a conta",
        "o número redondo: R$ 20,67 vira R$ 20,00 ou R$ 21,00, e essa escolha custa ou rende dinheiro no volume",
      ]],
      ["erro", "O erro mais caro é precificar copiando o vizinho. Você não conhece o custo dele, o volume dele, nem se ele está ganhando dinheiro. Tem muita casa cobrando barato porque copiou o preço de alguém que estava quebrando."],
    ],
    vizinhos: ["o-que-e-markup", "o-que-e-cmv"],
  },

  {
    slug: "o-que-e-markup",
    tema: "cardapio",
    titulo: "O que é markup",
    resumo:
      "Markup é o número pelo qual você multiplica o custo para chegar ao preço de venda. É a mesma conta do CMV, escrita ao contrário.",
    corpo: [
      ["p", "Markup é um multiplicador. Você tem o custo do prato, multiplica por ele e chega ao preço."],
      ["formula", "preço = custo × markup"],
      ["p", "O markup sai da porcentagem de custo que você aceita:"],
      ["formula", "markup = 1 ÷ CMV desejado"],
      ["tabela", [
        ["CMV desejado", "Markup", "Prato de R$ 6"],
        ["25%", "4,00", "R$ 24,00"],
        ["30%", "3,33", "R$ 20,00"],
        ["35%", "2,86", "R$ 17,15"],
        ["40%", "2,50", "R$ 15,00"],
      ]],
      ["h", "A confusão que custa dinheiro"],
      ["p", "Muita gente confunde markup com margem, e não são a mesma coisa. Markup é sobre o <strong>custo</strong>; margem é sobre o <strong>preço</strong>."],
      ["p", "Um prato de R$ 6 vendido a R$ 20 tem markup de 3,33 e margem de 70%. Quem diz \"trabalho com 70% de markup\" achando que é margem está multiplicando o custo por 1,7 e vendendo o mesmo prato a R$ 10,20 — quase metade do que precisava."],
      ["erro", "O outro erro é usar um markup só para o cardápio inteiro. Bebida e comida têm estruturas de custo diferentes, e item que sai muito aguenta margem menor do que item que sai pouco. Markup único é ponto de partida, não regra."],
    ],
    vizinhos: ["como-calcular-o-preco-de-venda-de-um-prato", "o-que-e-margem-de-contribuicao"],
  },

  {
    slug: "o-que-e-ticket-medio",
    tema: "comanda",
    titulo: "O que é ticket médio",
    resumo:
      "É quanto cada cliente gasta em média na sua casa. Divide o faturamento pelo número de clientes atendidos no mesmo período.",
    corpo: [
      ["p", "Ticket médio é o valor médio que cada cliente deixa na sua casa."],
      ["formula", "ticket médio = faturamento ÷ número de clientes"],
      ["p", "Faturou R$ 12.000 numa semana e atendeu 400 pessoas? Ticket médio de R$ 30."],
      ["h", "Por cliente ou por mesa?"],
      ["p", "As duas contas existem e respondem coisas diferentes. Por <strong>cliente</strong> mostra quanto cada pessoa consome, e é o que diz se a venda sugerida está funcionando. Por <strong>mesa</strong> mostra quanto rende cada lugar do salão, e é o que importa quando você decide quantas mesas caber."],
      ["p", "Escolha uma e mantenha. Comparar o ticket por cliente deste mês com o ticket por mesa do mês passado não diz nada."],
      ["h", "Como aumentar, sem aumentar preço"],
      ["lista", [
        "venda sugerida: a pergunta do garçom no momento certo (\"mais uma rodada?\" antes de a mesa esvaziar) vale mais que qualquer cartaz",
        "combinação: o acompanhamento que vai junto com naturalidade",
        "ordem no cardápio: o que está no alto e destacado sai mais",
        "porção: uma opção maior ao lado da normal levanta a média sem parecer aumento",
      ]],
      ["erro", "O erro é comemorar ticket médio alto sem olhar o movimento. Ticket sobe sozinho quando o número de clientes cai e só os que gastam mais continuam vindo. Os dois números precisam ser lidos juntos, sempre."],
    ],
    vizinhos: ["o-que-e-giro-de-mesa", "o-que-e-comanda-eletronica"],
  },

  {
    slug: "o-que-e-comanda-eletronica",
    tema: "comanda",
    titulo: "O que é comanda eletrônica",
    resumo:
      "É a comanda de papel substituída por um celular, tablet ou pelo aparelho do próprio cliente. O pedido sai de quem anota e chega na cozinha sem ninguém digitar de novo.",
    corpo: [
      ["p", "Na comanda de papel, o pedido passa por três mãos: o garçom escreve, alguém lê na cozinha e alguém digita no caixa no fim. Cada passagem é uma chance de erro, e o papel tem três."],
      ["p", "Na comanda eletrônica o pedido é registrado uma vez e aparece onde precisa: na cozinha para produzir, no caixa para fechar a conta, no relatório para você saber o que vendeu."],
      ["h", "Para que serve, na prática"],
      ["lista", [
        "a cozinha sabe do pedido no instante em que ele é feito, não quando alguém leva o papel",
        "a conta fecha certa, porque o preço vem do cardápio e não da memória de quem soma",
        "você sabe o que vendeu sem contar papel no fim da noite",
        "letra ilegível deixa de existir como causa de prato errado",
      ]],
      ["h", "Preciso comprar equipamento?"],
      ["p", "Não necessariamente. A maioria dos sistemas de hoje roda no navegador, então serve o celular que o garçom já tem e um tablet barato pendurado na parede da cozinha. Equipamento próprio é opção, não exigência."],
      ["h", "Vale a pena em casa pequena?"],
      ["p", "A conta que decide é a do erro. Se a sua casa refaz um prato por noite por pedido errado, e o prato custa R$ 12 de insumo, são cerca de R$ 360 por mês jogados fora — sem contar a mesa que esperou e o cliente que não volta."],
      ["p", "Se o seu movimento é de dez mesas por noite e ninguém erra, papel resolve. O papel para de resolver quando o salão enche."],
      ["erro", "O erro na hora de adotar é tentar mudar tudo numa noite cheia. Comece numa terça, com metade do salão, e deixe o papel de reserva na gaveta pela primeira semana."],
      ["produto", "O Comandeiro faz isso com o aparelho que você já tem, e a implantação é feita por nós: você manda o cardápio como ele existe hoje, nem que seja foto do papel plastificado."],
    ],
    vizinhos: ["o-que-e-comanda-em-restaurante", "o-que-e-tela-da-cozinha"],
  },

  {
    slug: "quanto-custa-abrir-um-restaurante",
    tema: "dinheiro",
    titulo: "Quanto custa abrir um restaurante",
    resumo:
      "Depende do tamanho e da cidade, mas a conta tem sempre quatro partes: ponto, obra e equipamento, estoque inicial e o dinheiro para aguentar os primeiros meses.",
    corpo: [
      ["p", "Não existe número único, e desconfie de quem der um. O que existe é a <strong>estrutura</strong> da conta, e ela é sempre a mesma."],
      ["h", "As quatro partes"],
      ["lista", [
        "<strong>Ponto</strong>: luvas, primeiro aluguel, caução (normalmente três meses) e as adequações que o imóvel exigir",
        "<strong>Obra e equipamento</strong>: cozinha, exaustão, elétrica, mobiliário de salão, geladeira, freezer, fogão ou churrasqueira",
        "<strong>Abertura e licenças</strong>: contrato social, alvará, licença sanitária, corpo de bombeiros, e o contador",
        "<strong>Estoque inicial</strong>: a primeira compra cheia, que é sempre maior do que a de manutenção",
      ]],
      ["h", "A quinta parte, que é a que quebra a maioria"],
      ["p", "Capital de giro. É o dinheiro para pagar aluguel, equipe, fornecedor e imposto <strong>enquanto a casa ainda não se paga</strong>."],
      ["p", "Casa nova costuma levar de seis meses a um ano para o movimento estabilizar. Abrir sem reserva para esse período é o erro que fecha mais restaurante do que comida ruim. A recomendação comum é ter de seis a doze meses de custo fixo guardados, separados do dinheiro da obra."],
      ["h", "Quanto varia por formato"],
      ["p", "Um food truck tem obra pequena e ponto barato, mas equipamento caro e limite de produção. Uma espetaria de bairro com dez mesas tem obra média e estoque simples. Um restaurante de rua com cozinha completa é a conta mais alta das três, em todas as quatro partes."],
      ["erro", "O erro clássico é dimensionar a obra pelo sonho e o capital de giro pelo que sobrou. O certo é o contrário: reserve o giro primeiro e faça a obra com o que restar. Cozinha bonita não paga fornecedor no terceiro mês."],
    ],
    vizinhos: ["o-que-e-capital-de-giro", "qual-a-margem-de-lucro-de-um-restaurante"],
  },

  {
    slug: "quanto-o-ifood-cobra-de-comissao",
    tema: "dinheiro",
    titulo: "Quanto o iFood cobra de comissão",
    resumo:
      "A comissão muda conforme o plano e quem faz a entrega, e há uma taxa de pagamento por cima. O que não muda é a estrutura da conta, e é ela que você precisa saber ler.",
    corpo: [
      ["p", "As porcentagens mudam com o tempo, com o plano contratado e com a região, então cravar um número aqui seria entregar informação que envelhece. O que vale aprender é a <strong>estrutura</strong>, que não muda."],
      ["h", "A conta tem três camadas"],
      ["lista", [
        "<strong>Comissão sobre o pedido</strong>: um percentual do valor. É bem menor quando você entrega e bem maior quando a entrega é feita pelo aplicativo",
        "<strong>Taxa de pagamento</strong>: um percentual a mais para processar o cartão, cobrado por fora da comissão",
        "<strong>Mensalidade ou plano</strong>: dependendo do contrato, um valor fixo somado ao resto",
      ]],
      ["p", "Some as três antes de comparar com qualquer coisa. Comparar só a comissão com só a mensalidade de um sistema é comparar coisas diferentes."],
      ["h", "Como saber o seu número de verdade"],
      ["p", "Não confie na tabela: olhe o seu extrato. Pegue um mês fechado, divida o total de taxas pelo total de vendas do canal e multiplique por cem. Esse é o seu percentual real, com plano, taxa de pagamento e promoções incluídas."],
      ["formula", "custo real do canal % = total de taxas ÷ vendas do canal × 100"],
      ["h", "O que fazer com esse número"],
      ["p", "Ele entra na precificação. Prato que custa R$ 6 e é vendido a R$ 20 no salão deixa uma margem; o mesmo prato vendido pelo aplicativo, com um quarto do valor indo em taxa, deixa outra. Casa que usa o mesmo preço nos dois canais está financiando o canal mais caro com o lucro do mais barato."],
      ["p", "Isso não quer dizer que o aplicativo é ruim. Ele traz cliente que você não alcançaria, e essa é a coisa que ele vende. Quer dizer que ele é um <strong>canal com custo próprio</strong>, e canal com custo próprio precisa de preço próprio."],
      ["erro", "O erro mais comum é olhar só a comissão e esquecer a taxa de pagamento e as promoções em que a casa entrou. É por isso que o percentual do extrato quase sempre é maior do que o da tabela que o dono lembra ter assinado."],
    ],
    vizinhos: ["como-calcular-o-custo-de-cada-canal-de-venda", "como-precificar-para-o-delivery"],
  },

  {
    slug: "a-taxa-de-10-por-cento-e-obrigatoria",
    tema: "comanda",
    titulo: "A taxa de 10% é obrigatória",
    resumo:
      "Não. A taxa de serviço é um costume, não uma obrigação legal: o cliente pode recusar. Mas ela é regulada, e o que você faz com o dinheiro tem regra.",
    corpo: [
      ["p", "A taxa de serviço, os famosos 10%, é uma <strong>gorjeta sugerida</strong>. Não existe lei que obrigue o cliente a pagar, e ele pode pedir para retirar da conta."],
      ["p", "Na prática ela é aceita pela maioria, porque virou costume no Brasil. Mas cobrar como se fosse obrigatória, ou incluir sem avisar, é o que gera reclamação e às vezes autuação por parte dos órgãos de defesa do consumidor."],
      ["h", "O que a casa precisa fazer"],
      ["lista", [
        "deixar claro que existe e que é opcional, no cardápio ou na conta",
        "aceitar a retirada sem constranger o cliente que pedir",
        "repassar o valor à equipe conforme a regra, e não usar como receita da casa",
      ]],
      ["h", "A parte que muita casa erra"],
      ["p", "A distribuição da gorjeta entre os funcionários é regulada por lei, e o que a casa pode ou não reter depende do regime da empresa e do que está previsto em convenção coletiva da categoria. Isso muda de estado para estado e de ano para ano."],
      ["p", "É exatamente o tipo de assunto para conferir com o seu contador e com o sindicato da sua região, e não com um texto na internet — inclusive este. O que dá para afirmar sem risco é o começo: <strong>não é obrigatória para o cliente</strong>."],
      ["erro", "O erro que mais aparece é tratar a taxa como faturamento da casa. Além do problema trabalhista, ela infla o seu faturamento aparente e estraga todo indicador calculado sobre ele, do ticket médio ao CMV."],
    ],
    vizinhos: ["o-que-e-couvert", "como-dividir-a-conta-entre-os-clientes"],
  },

  {
    slug: "o-que-e-nfc-e",
    tema: "fiscal",
    titulo: "O que é NFC-e",
    resumo:
      "É a Nota Fiscal de Consumidor Eletrônica, o documento que substituiu o cupom fiscal de papel na venda ao consumidor final. Ela é emitida pelo sistema e autorizada pela Secretaria da Fazenda.",
    corpo: [
      ["p", "NFC-e quer dizer Nota Fiscal de Consumidor Eletrônica. É o documento fiscal da venda direta ao consumidor, aquele que antes saía da impressora fiscal como cupom."],
      ["p", "Ela é gerada pelo sistema, enviada à Secretaria da Fazenda do seu estado e autorizada em segundos. O que o cliente recebe é o comprovante impresso ou o código para consultar."],
      ["h", "Para que serve"],
      ["lista", [
        "documentar a venda, que é obrigação de quem vende",
        "dar ao cliente o comprovante da compra",
        "alimentar a apuração dos seus impostos",
        "dispensar o equipamento fiscal que antes era exigido",
      ]],
      ["h", "O que muda por estado"],
      ["p", "Aqui está o ponto que confunde: <strong>nem todo estado usa NFC-e</strong>. São Paulo, por exemplo, tem o SAT, um equipamento próprio com regra diferente. Outros estados adotaram a NFC-e integralmente."],
      ["p", "Ou seja, a resposta para \"o que preciso emitir\" depende de onde a sua casa está. Antes de contratar qualquer coisa, confirme com o seu contador qual documento o seu estado exige, porque o sistema que serve para um pode não servir para o outro."],
      ["h", "Preciso emitir para toda venda?"],
      ["p", "A regra geral é sim, toda venda ao consumidor final gera documento fiscal. Existem particularidades por regime e por porte, e é mais um ponto para o contador, não para a internet."],
      ["erro", "O erro caro é deixar a parte fiscal para depois da abertura. Emissor fiscal exige certificado digital, cadastro na Secretaria da Fazenda e configuração de tributação item a item. Casa que abre sem isso pronto passa as primeiras semanas vendendo sem nota, e regularizar depois custa mais do que ter feito antes."],
    ],
    vizinhos: ["quais-impostos-um-restaurante-paga", "restaurante-pode-ser-mei"],
  },
];

/*
 * Os lotes, por tema.
 *
 * Um arquivo por assunto em vez de um arquivão: com 365 verbetes, procurar
 * "o que é markup" num arquivo de dez mil linhas é o tipo de atrito que faz
 * a pessoa desistir de corrigir um erro que ela viu.
 */
export const verbetes = [
  ...lotePrimeiro,
  ...salao,
  ...dinheiro,
  ...fiscal,
  ...cozinha,
  ...cardapio,
  ...tecnologia,
];

/* Slug repetido geraria duas páginas na mesma URL, e a segunda venceria em
   silêncio. Melhor quebrar o build. */
const vistos = new Set();
for (const v of verbetes) {
  if (vistos.has(v.slug)) throw new Error(`Slug repetido: ${v.slug}`);
  vistos.add(v.slug);
}

