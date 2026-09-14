/**
 * Fiscal e legal. Ver `guia/conteudo.mjs` para as regras de escrita.
 *
 * Este tema tem uma regra a mais, e ela não é opcional: **nenhuma alíquota,
 * teto ou prazo é cravado aqui.** Esses números mudam por lei, por estado e
 * por ano. Escrever "o teto do MEI é X" transforma o guia em fonte de erro na
 * mão de quem confiou, e o dano de uma informação fiscal errada é maior que o
 * ganho de parecer específico.
 *
 * O que se ensina é a ESTRUTURA (o que existe, o que decide, o que muda) e
 * para onde ir confirmar.
 */

export default [
  {
    slug: "restaurante-pode-ser-mei",
    tema: "fiscal",
    titulo: "Restaurante pode ser MEI",
    resumo:
      "Em geral sim, para operações pequenas: há ocupações de alimentação na lista do MEI. Mas existe teto de faturamento e limite de um empregado, e é isso que costuma barrar.",
    corpo: [
      ["p", "O MEI, microempreendedor individual, aceita várias ocupações ligadas a alimentação. Para uma operação pequena, o formato costuma ser possível."],
      ["p", "O que decide não é a vontade, são três limites."],
      ["h", "Os três limites"],
      ["lista", [
        "<strong>Faturamento anual</strong>: existe um teto, e ultrapassá-lo obriga a mudar de regime, com cobrança retroativa da diferença",
        "<strong>Empregados</strong>: o MEI pode ter apenas um empregado registrado. Casa com salão, cozinha e caixa raramente cabe aí",
        "<strong>Ocupação</strong>: a atividade precisa estar na lista oficial, e ela é revisada de tempos em tempos",
      ]],
      ["p", "O valor exato do teto já mudou mais de uma vez e continua sendo objeto de projeto de lei. Confirme o número vigente com o seu contador ou no Portal do Empreendedor antes de decidir: qualquer texto na internet, inclusive este, envelhece nesse ponto."],
      ["h", "O sinal de que passou da hora de sair"],
      ["p", "Se você precisa de mais de uma pessoa contratada, ou se o faturamento está encostando no teto, o MEI deixou de servir. Sair antes de estourar é barato; sair depois é pagar retroativo."],
      ["h", "Vale a pena enquanto cabe?"],
      ["p", "Para uma operação pequena de verdade, costuma valer: contribuição mensal fixa, burocracia mínima, abertura imediata. O problema nunca é começar no MEI; é ficar nele depois de crescer."],
      ["erro", "O erro caro é continuar emitindo como MEI depois de passar do teto, na esperança de que ninguém veja. O cruzamento entre nota fiscal e declaração é automático, e a conta chega com multa."],
    ],
    vizinhos: ["quais-impostos-um-restaurante-paga", "o-que-e-nfc-e"],
  },

  {
    slug: "quais-impostos-um-restaurante-paga",
    tema: "fiscal",
    titulo: "Quais impostos um restaurante paga",
    resumo:
      "Depende do regime. No Simples Nacional, a maioria é recolhida num pagamento mensal único; fora dele, os tributos são apurados separadamente.",
    corpo: [
      ["p", "A resposta muda conforme o regime tributário da empresa, e é por isso que a mesma pergunta recebe respostas tão diferentes na internet."],
      ["h", "No MEI"],
      ["p", "Uma contribuição mensal fixa, de valor pequeno, que já inclui a parte previdenciária e o tributo estadual ou municipal conforme a atividade. É o regime mais simples que existe, e o mais limitado."],
      ["h", "No Simples Nacional"],
      ["p", "A maior parte dos restaurantes fica aqui. Vários tributos federais, mais o estadual e o municipal, são recolhidos num documento único mensal. A alíquota não é fixa: sobe conforme a receita acumulada dos últimos doze meses, por faixas."],
      ["p", "O anexo em que a casa se enquadra muda a conta, e essa classificação depende da atividade. É a primeira coisa a conferir com o contador, porque enquadramento errado significa pagar a mais durante meses sem perceber."],
      ["h", "Fora do Simples"],
      ["p", "No Lucro Presumido ou Real, os tributos são apurados um a um, com obrigações acessórias próprias. Faz sentido para operações maiores, e a decisão exige simulação, não regra de bolso."],
      ["h", "O que não muda em nenhum regime"],
      ["lista", [
        "a obrigação de emitir documento fiscal na venda ao consumidor",
        "os encargos sobre a folha, quando há empregados",
        "as obrigações acessórias, que existem mesmo quando não há imposto a pagar",
      ]],
      ["p", "Alíquotas e faixas são revisadas periodicamente, então qualquer número específico aqui teria prazo de validade. A estrutura acima é o que se mantém."],
      ["erro", "O erro é escolher o regime pela conversa com outro dono. O que é ótimo para a casa dele pode ser caro para a sua, porque depende do faturamento, da folha e da margem. Uma simulação com o contador custa uma reunião e pode economizar o ano inteiro."],
    ],
    vizinhos: ["restaurante-pode-ser-mei", "o-que-e-nfc-e"],
  },
];
