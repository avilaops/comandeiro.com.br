import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { temas, verbetes } from "./conteudo.mjs";

/**
 * Gera as páginas do guia a partir de `conteudo.mjs`.
 *
 * Uso: node guia/gerar.mjs   (a partir da raiz de comandeiro.com.br)
 *
 * Por que gerador e não HTML escrito à mão: são 365 verbetes. Escrever o
 * mesmo cabeçalho, o mesmo rodapé e os mesmos metadados 365 vezes garante que
 * eles vão divergir, e o primeiro a divergir é sempre o que ninguém olha (o
 * canonical, o og:image). Aqui o padrão é um só, e o conteúdo é texto.
 *
 * Saída:
 *   guia/index.html            índice
 *   guia/<slug>/index.html     cada verbete, com URL limpa
 */

const raiz = path.dirname(fileURLToPath(import.meta.url));
const site = path.join(raiz, "..");
const BASE = "https://comandeiro.com.br";

/** Escapa o que vai para atributo ou texto puro. */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** O corpo do verbete é uma lista de blocos, não HTML solto: é o que impede
 *  um texto quebrar a página inteira com uma tag mal fechada. */
function bloco([tipo, valor]) {
  switch (tipo) {
    case "p":
      return `<p>${valor}</p>`;
    case "h":
      return `<h2>${esc(valor)}</h2>`;
    case "formula":
      return `<p class="guia-formula">${valor}</p>`;
    case "lista":
      return `<ul class="guia-lista">${valor.map((i) => `<li>${i}</li>`).join("")}</ul>`;
    case "tabela": {
      const [cabecalho, ...linhas] = valor;
      return `<div class="guia-tabela-wrap"><table class="guia-tabela"><thead><tr>${cabecalho
        .map((c) => `<th>${esc(c)}</th>`)
        .join("")}</tr></thead><tbody>${linhas
        .map((l) => `<tr>${l.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table></div>`;
    }
    case "erro":
      return `<div class="guia-erro"><strong>O erro comum</strong><p>${valor}</p></div>`;
    case "produto":
      // O produto entra no fim e uma vez só. Visualmente separado para o
      // leitor saber que ali acabou a explicação e começou o anúncio.
      return `<div class="guia-produto"><p>${valor}</p></div>`;
    default:
      throw new Error(`Bloco desconhecido: ${tipo}`);
  }
}

const porSlug = new Map(verbetes.map((v) => [v.slug, v]));

function cabeca({ titulo, descricao, url, extraJsonLd }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)} — Guia do Comandeiro</title>
<meta name="description" content="${esc(descricao)}">
<meta name="theme-color" content="#FFF8F0">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${BASE}/og.png">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/comandeiro.css">
<link rel="stylesheet" href="/assets/guia.css">
${extraJsonLd}
</head>
<body>
<a class="skip" href="#main">Pular para o conteúdo</a>
<header>
  <div class="wrap">
    <a class="mark" href="/">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 3h12v16l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 19V3Z"/>
        <path d="M9 8h6M9 12h4"/>
      </svg>
      Comandeiro
    </a>
    <nav>
      <a class="hide-sm" href="/guia/">Guia</a>
      <a class="hide-sm" href="/#pricing">Preço</a>
      <a class="btn btn-ghost" href="https://app.comandeiro.com.br/acesso">Entrar</a>
      <a class="btn" href="https://app.comandeiro.com.br/acesso/criar">Criar conta</a>
    </nav>
  </div>
</header>
`;
}

const RODAPE = `
<footer class="guia-rodape">
  <div class="wrap">
    <p>O Comandeiro é o sistema de pedidos, cozinha e mesas para quem tem salão. <a href="/">Conheça</a> ou <a href="https://app.comandeiro.com.br/acesso/criar">crie a conta do seu restaurante</a>.</p>
  </div>
</footer>
</body>
</html>
`;

/**
 * Dados estruturados de pergunta e resposta.
 *
 * É o que faz o Google entender que a página responde uma pergunta, e é a
 * razão de o título ser a busca. Só a resposta curta entra aqui: colar o texto
 * inteiro num campo de resposta é o tipo de excesso que faz a marcação ser
 * ignorada.
 */
function jsonLdVerbete(v, url) {
  return `<script type="application/ld+json">
${JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: v.titulo,
        acceptedAnswer: { "@type": "Answer", text: v.resumo },
      },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Guia", item: `${BASE}/guia/` },
        { "@type": "ListItem", position: 2, name: v.titulo, item: url },
      ],
    },
  },
  null,
  2,
)}
</script>`;
}

async function gerarVerbete(v) {
  const url = `${BASE}/guia/${v.slug}/`;
  const tema = temas[v.tema];
  if (!tema) throw new Error(`Tema desconhecido em ${v.slug}: ${v.tema}`);

  const vizinhos = (v.vizinhos ?? [])
    .map((slug) => porSlug.get(slug))
    .filter(Boolean)
    .map((o) => `<li><a href="/guia/${o.slug}/">${esc(o.titulo)}</a></li>`)
    .join("");

  // Vizinho que ainda não existe some do HTML em vez de virar link quebrado —
  // o plano tem 365 verbetes e eles não nascem no mesmo dia. Mas some em
  // SILÊNCIO, e silêncio esconde erro de digitação no slug. Por isso o
  // gerador reclama no fim (ver `pendentes`).
  const proximos = vizinhos
    ? `<nav class="guia-proximos" aria-label="Leia também"><h2>Leia também</h2><ul>${vizinhos}</ul></nav>`
    : "";

  const html = `${cabeca({
    titulo: v.titulo,
    descricao: v.resumo,
    url,
    extraJsonLd: jsonLdVerbete(v, url),
  })}
<main id="main" class="guia-artigo">
  <div class="wrap">
    <nav class="guia-migalha" aria-label="Onde você está">
      <a href="/guia/">Guia</a> <span aria-hidden="true">/</span> <span>${esc(tema.nome)}</span>
    </nav>
    <h1>${esc(v.titulo)}</h1>
    <p class="guia-resumo">${esc(v.resumo)}</p>
    ${v.corpo.map(bloco).join("\n    ")}
    ${proximos}
  </div>
</main>
${RODAPE}`;

  const destino = path.join(site, "guia", v.slug);
  await mkdir(destino, { recursive: true });
  await writeFile(path.join(destino, "index.html"), html, "utf8");
  return url;
}

async function gerarIndice() {
  const url = `${BASE}/guia/`;

  const porTema = Object.entries(temas)
    .map(([chave, tema]) => {
      const lista = verbetes.filter((v) => v.tema === chave);
      if (lista.length === 0) return "";
      const itens = lista
        .map((v) => `<li><a href="/guia/${v.slug}/">${esc(v.titulo)}</a><span>${esc(v.resumo)}</span></li>`)
        .join("");
      return `<section class="guia-tema">
      <h2>${esc(tema.nome)}</h2>
      <ul class="guia-indice">${itens}</ul>
    </section>`;
    })
    .filter(Boolean)
    .join("\n");

  const html = `${cabeca({
    titulo: "Guia do restaurante",
    descricao:
      "As perguntas que todo dono de restaurante faz, respondidas direto: CMV, ficha técnica, ticket médio, preço de venda, comissão de aplicativo, nota fiscal e mais.",
    url,
    extraJsonLd: "",
  })}
<main id="main" class="guia-artigo">
  <div class="wrap">
    <h1>Guia do restaurante</h1>
    <p class="guia-resumo">As perguntas que aparecem todo dia em quem toca uma casa com salão, respondidas em português e com número de restaurante pequeno. Sem jargão, sem enrolação antes da resposta.</p>
    ${porTema}
  </div>
</main>
${RODAPE}`;

  await writeFile(path.join(site, "guia", "index.html"), html, "utf8");
  return url;
}

const urls = [];
for (const v of verbetes) urls.push(await gerarVerbete(v));
urls.push(await gerarIndice());

/*
 * Vizinhos apontados que ainda não existem.
 *
 * Não é erro: é a fila do que escrever a seguir, e ela sai do próprio texto em
 * vez de uma lista à parte que envelhece. Se aparecer aqui um slug que você
 * não reconhece, é erro de digitação — e sem este aviso ele sumiria calado.
 */
const existentes = new Set(verbetes.map((v) => v.slug));
const pendentes = new Map();
for (const v of verbetes) {
  for (const alvo of v.vizinhos ?? []) {
    if (existentes.has(alvo)) continue;
    if (!pendentes.has(alvo)) pendentes.set(alvo, []);
    pendentes.get(alvo).push(v.slug);
  }
}

// O sitemap é do site inteiro, não só do guia. Por isso o gerador NÃO o
// reescreve: ele insere as URLs que faltam logo antes do fechamento e deixa
// intacto tudo o que já estava lá, inclusive o que outra pessoa colocou.
//
// Fazia isso à mão e o passo era esquecido: verbete publicado e fora do
// sitemap é verbete que o Google demora meses a achar, que é a única coisa
// que o guia precisa que aconteça.
const arquivoSitemap = path.join(site, "sitemap.xml");
const sitemap = await readFile(arquivoSitemap, "utf8").catch(() => "");
const faltando = urls.filter((u) => !sitemap.includes(u));

if (faltando.length && sitemap.includes("</urlset>")) {
  const bloco = faltando
    .map(
      (u) =>
        `  <url>
    <loc>${u}</loc>
` +
        `    <changefreq>monthly</changefreq><priority>0.6</priority>
  </url>
`,
    )
    .join("");
  await writeFile(arquivoSitemap, sitemap.replace("</urlset>", bloco + "</urlset>"));
}

console.log(`${verbetes.length} verbetes + índice gerados.`);

if (pendentes.size) {
  console.log(`
Apontados e ainda não escritos (${pendentes.size}):`);
  for (const [alvo, origens] of pendentes) {
    console.log(`  ${alvo}  <- ${origens.join(", ")}`);
  }
}
if (faltando.length) {
  console.log(`\nAcrescentadas ao sitemap.xml (${faltando.length}):`);
  for (const u of faltando) console.log(`  ${u}`);
}
