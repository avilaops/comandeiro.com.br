Concordo. Essa é a arquitetura correta, e ajusta minha conclusão anterior: o `.com.br` indisponível é um bloqueio de implantação, não uma falha da estratégia de domínios.

A topologia ideal fica:

```text
comandeiro.com.br              site comercial Brasil
brasa.comandeiro.com.br        operação da Brasa Mineira
comandeiro.com                 site comercial global
restaurant.comandeiro.com      operação internacional

app.comandeiro.com             painel universal
auth.comandeiro.com            autenticação/SSO
api.comandeiro.com             API central
```

O ponto mais importante é não tentar compartilhar cookies entre `.com` e `.com.br`. Um domínio só pode definir cookies para ele próprio ou para um domínio pai válido; portanto, um cookie de `comandeiro.com` não pode abranger `comandeiro.com.br`. [MDN, Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie)

Eu adotaria:

- Cookies `Secure`, `HttpOnly`, `SameSite=Lax` e preferencialmente host-only.
- Sessão administrativa mantida exclusivamente em `app.comandeiro.com`.
- `auth.comandeiro.com` fazendo SSO por redirecionamento.
- Código de autorização descartável, com expiração curta, `state`, `nonce` e PKCE.
- Nunca transportar JWT de sessão permanentemente na query string.
- Sessões públicas de mesa ou cardápio permanecendo isoladas no hostname do estabelecimento.

O operador poderia acessar:

```text
brasa.comandeiro.com.br/entrar
        ↓
auth.comandeiro.com/authorize
        ↓
app.comandeiro.com/brasa
```

Para resolver o tenant, eu usaria uma tabela explícita de domínios:

```text
hostname                     tenant_id   região   idioma   moeda   status
brasa.comandeiro.com.br      brasa       BR       pt-BR    BRL     ativo
restaurant.comandeiro.com    rest_123    US       en-US    USD     ativo
```

Regras essenciais:

- Normalizar e validar o `Host`.
- Só confiar em `X-Forwarded-Host` vindo do proxy conhecido.
- Procurar correspondência exata no banco.
- Rejeitar host desconhecido, em vez de assumir um tenant padrão.
- Reservar `www`, `app`, `api`, `auth`, `admin`, `status`, `docs`, `mail`, `assets` e `static`.
- CORS com allowlist exata dos domínios ativos; nunca `*` junto com credenciais.
- WebSockets validando `Origin`, tenant e token.
- Callbacks OAuth centralizados e previamente cadastrados.
- Filas, webhooks e eventos sempre carregando `tenantId` e região explicitamente.

Para SEO, os dois domínios também fazem sentido. O Google recomenda URLs distintas, `hreflang` recíproco, conteúdo visivelmente localizado e um seletor de idioma/região; também recomenda evitar redirecionar obrigatoriamente o visitante apenas pelo idioma presumido. [Google Search Central](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=pt-br)

Portanto, a decisão fica sólida:

- `.com.br`: produto, linguagem, moeda, suporte e operação brasileira.
- `.com`: expansão internacional com região, idioma e moeda definidos por tenant.
- `app.comandeiro.com`: sistema administrativo único.
- `api.comandeiro.com`: backend central multitenant.
- `auth.comandeiro.com`: ponte segura entre os dois domínios-base.

Essa estrutura é profissional, escalável e evita duplicar o painel ou o backend por país.
