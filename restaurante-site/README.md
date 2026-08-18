# Boteco São Jorge — Site Institucional & Cardápio Digital

Site completo para o **Boteco São Jorge**, gastrobar em Blumenau/SC, com cardápio digital, carrinho de pedidos integrado ao WhatsApp, formulário de reservas, contato, blog de novidades e estrutura de SEO.

## ⚠️ Nota sobre a stack

O briefing original pedia React/Next.js + TypeScript. Para que o projeto rodasse **sem etapa de build**, pudesse ser aberto direto em qualquer navegador e fosse fácil de hospedar em qualquer serviço (inclusive hospedagem simples/compartilhada), ele foi entregue em **HTML + CSS + JavaScript puro** (vanilla), mantendo a mesma organização de pastas e os mesmos princípios de componentização, SEO e performance pedidos no briefing.

A arquitetura foi pensada para facilitar uma futura migração para Next.js/React, caso deseje: os dados do cardápio já estão isolados em `public/js/data.js` (equivalente a uma camada de "services"), e cada seção do HTML pode virar um componente diretamente.

## Tecnologias

- HTML5 semântico
- CSS3 (sem frameworks — design system próprio em `public/css/style.css`)
- JavaScript vanilla (carrinho, filtros, validação de formulários, integração WhatsApp)
- Google Fonts: Fraunces (títulos), Work Sans (texto), Oswald (rótulos)
- Preparado para Google Analytics 4, Google Search Console, Schema.org

## Estrutura do projeto

```
restaurante-site/
├── public/
│   ├── index.html              → Home
│   ├── cardapio.html           → Cardápio com busca, filtros e carrinho
│   ├── sobre.html               → Sobre / história / equipe
│   ├── reservas.html           → Formulário de reservas
│   ├── contato.html            → Formulário de contato + mapa
│   ├── blog.html               → Listagem de novidades
│   ├── blog-post.html          → Modelo de post individual
│   ├── politica-de-privacidade.html
│   ├── termos-de-uso.html
│   ├── 404.html
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── css/style.css           → Design system completo
│   ├── js/data.js              → Dados do restaurante e do cardápio (edite aqui)
│   ├── js/app.js                → Lógica: carrinho, checkout, validações
│   ├── js/footer.js             → Rodapé injetado dinamicamente (fonte única)
│   └── images/                  → Imagens do site (ver abaixo)
├── .env.example
└── README.md
```

## Como rodar localmente

Não há build necessário. Duas opções:

**1. Abrir direto no navegador**
Basta abrir `public/index.html` com duplo clique.

**2. Servidor local (recomendado, evita bloqueios de CORS em alguns navegadores)**
```bash
cd restaurante-site/public
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Como publicar (deploy)

Qualquer hospedagem de arquivos estáticos funciona: Netlify, Vercel, GitHub Pages, Cloudflare Pages, ou hospedagem compartilhada tradicional. Basta enviar o conteúdo da pasta `public/` para a raiz do domínio.

## Imagens

As imagens usadas em produtos e seções ficam em `public/images/` e `public/images/dishes/`. **Este pacote não inclui fotografias reais do restaurante** — os `<img>` apontam para nomes de arquivo organizados por prato/seção (ex: `picanha.jpg`, `chopp.jpg`) e têm fallback automático para a logo caso o arquivo não exista, para que o site nunca quebre visualmente. Substitua pelas fotos reais do Boteco São Jorge assim que possível, mantendo os mesmos nomes de arquivo (ou atualizando os campos `img` em `js/data.js`).

A logo já está incluída em `public/images/logo-sao-jorge.jpg`.

## Como editar o cardápio (produtos e preços)

Tudo fica em `public/js/data.js`. Cada categoria tem uma lista `items`; para adicionar um prato, copie um item existente e ajuste `id` (único), `name`, `desc`, `price`, `img` e `tags` (`veg` para vegetariano, `alerg` para alergênicos).

## Como alterar informações do restaurante

No topo de `public/js/data.js`, o objeto `RESTAURANT` centraliza telefone, WhatsApp, endereço, horário e redes sociais — altere ali e o site inteiro atualiza (header, footer, botão flutuante e mensagens de pedido).

**Importante:** o campo `whatsapp` deve estar no formato `55` + DDD + número, sem espaços ou símbolos (ex: `554799999999`).

## Como o pedido chega ao restaurante

O checkout monta uma mensagem formatada com todos os itens, observações, tipo de entrega e total, e abre o WhatsApp do restaurante (`wa.me`) com o texto pronto para envio — não é necessário nenhum backend para isso funcionar hoje. A arquitetura em `app.js` já está separada de forma que, no futuro, o `submitOrder()` possa enviar os dados para uma API própria (Mercado Pago, Stripe, sistema de gestão) em vez de (ou além de) abrir o WhatsApp.

## Configuração do Google Analytics

1. Crie uma propriedade GA4 e copie o Measurement ID (formato `G-XXXXXXXXXX`).
2. Em cada página HTML, descomente o bloco `<!-- Google Analytics 4 (placeholder) -->` no `<head>` e substitua `G-XXXXXXXXXX` pelo seu ID.
3. Os eventos já disparam automaticamente: `add_to_cart`, `remove_from_cart`, `begin_checkout`, `purchase`, `whatsapp_click`, `phone_click`, `directions_click`, `form_submit`.

## Configuração do Google Search Console

1. Gere o código de verificação (meta tag) no Search Console.
2. Descomente e preencha a tag `<meta name="google-site-verification" ...>` no `<head>` de `index.html`.
3. Envie `sitemap.xml` pelo próprio Search Console após o deploy.

## Configuração do Google Maps

O mapa em `contato.html` usa um iframe simples (sem necessidade de chave de API). Para trocar pelo endereço real, edite a URL do `<iframe>` com o endereço definitivo do restaurante, ou gere um embed personalizado em [Google Maps → Compartilhar → Incorporar mapa].

## Configuração do WhatsApp

Basta ajustar `whatsapp` em `js/data.js` e os links `https://wa.me/...` já presentes no header, footer e botão flutuante em todas as páginas (busca e substitua o número antigo, se preferir centralizar tudo).

## Variáveis de ambiente

Veja `.env.example`. Como o projeto é 100% estático hoje, essas variáveis servem como referência para quando o site ganhar um backend/build step — nenhuma chave privada deve ser exposta no código-fonte do frontend.

## Roadmap sugerido (funcionalidades futuras)

- Integração real de pagamento (Pix/cartão) via Mercado Pago ou Stripe
- Painel administrativo para gestão de cardápio, pedidos e estoque
- Sistema de cupons e programa de fidelidade
- Reservas com confirmação automática (Google Calendar / e-mail)
- CMS para o blog (hoje o conteúdo é estático em HTML)
- Migração para Next.js caso o projeto cresça e passe a exigir renderização dinâmica/backend próprio
