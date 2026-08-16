# Comandeiro — versão em português

Este é o site do Comandeiro em português, para o mercado brasileiro. É onde
está o cliente de hoje: espetaria, bar, pizzaria.

**O README completo — conceito, estratégia dos dois domínios, arquitetura,
deploy e o que o site promete — está em
[`../comandeiro.com/README.md`](../comandeiro.com/README.md).** Um documento só,
porque são um site em duas línguas, não dois projetos.

O que vale saber sem sair daqui:

- **`assets/comandeiro.css` e `assets/comandeiro.js` são idênticos aos do
  `comandeiro.com`.** Mexeu no visual, copie de lá. Nunca edite só um lado.
- **O texto é escrito, não traduzido.** O cardápio da demo tem espeto de carne,
  coração e cerveja 600ml — o cardápio que o leitor brasileiro reconhece.
- **`hreflang` e `canonical` apontam para os dois domínios** nas linhas 9–12 do
  `index.html`. Se mudar um, mude o outro, ou o Google escolhe uma versão e
  enterra a outra.
- **Está no ar.** A zona é ativa na Cloudflare, nos mesmos nameservers do `.com`,
  e o `contato@comandeiro.com.br` encaminha para o Gmail do dono.

Contato do site: `contato@comandeiro.com.br` (o inglês usa `hello@`). Os dois
domínios também respondem em `hello@`, e todos caem na mesma caixa.
