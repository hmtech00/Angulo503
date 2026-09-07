# ANGULO 503 — Instruções de uso e edição

Site institucional do restaurante salvadoreño Angulo 503 (Milano), em HTML5 + CSS3 + JavaScript
Vanilla, sem frameworks nem dependências externas (exceto as fontes do Google Fonts).

## Estrutura de arquivos

```
/index.html          → estrutura das 11 seções do site
/style.css            → todo o sistema visual (cores, tipografia, layout, animações)
/script.js            → conteúdo dinâmico (pratos, menu, galeria) + interações
/assets/images/       → pasta para as fotos reais do restaurante (vazia por enquanto)
```

O código está comentado com marcadores `EDITAR AQUI —` em cada ponto pensado para edição futura.

---

## 1. Onde colocar as fotos

Ainda não há fotos reais do Angulo 503 disponíveis, então o site usa blocos de placeholder
elegantes (sem fotos de banco de imagens e sem imagens geradas por IA), cada um com uma legenda
discreta dizendo que tipo de foto deve entrar ali (ex.: "HERO — foto do salão ou prato principal").

Para substituir por fotos reais:

1. Salve os arquivos em `assets/images/` com nomes como:
   `hero.jpg`, `restaurant-interior.jpg`, `restaurant-detail.jpg`, `pupusas-01.jpg`,
   `churrasco-503.jpg`, `chicharron.jpg`, `pescado.jpg`, `camarones.jpg`,
   `gallery-01.jpg` … `gallery-08.jpg`, `full-bleed.jpg`.
2. Em `index.html`, cada bloco de imagem tem um comentário `<!-- EDITAR AQUI — FOTOS: ... -->`
   logo acima mostrando exatamente a tag `<img>` a inserir. Basta colar essa tag dentro do
   elemento indicado (ex. `.hero-media`, `.ristorante-media`, `.location-media`).
3. Na galeria (seção `GALLERY`) e nos pratos (`PIATTI SIGNATURE`), as imagens são geradas pelo
   `script.js` a partir de `galleryData` e `signatureDishes`. Adicione um campo `img: "assets/images/nome.jpg"`
   a cada item nesses arrays e ajuste o `innerHTML` correspondente para usar `<img src="${d.img}">`
   em vez do placeholder — ou peça para eu fazer essa alteração quando as fotos estiverem prontas.

Fotos com melhor luz e composição devem ir no **hero** e no **full-bleed**; fotos verticais nos
blocos `ristorante-media`/`location-media`; e a galeria pode misturar formatos variados.

## 2. Onde colocar o link do menu digital

Arquivo `script.js`, no topo, dentro de `restaurantData`:

```js
menuUrl: "", // exemplo: "https://www.angulo503.it/menu.pdf"
```

Preencha com o link real. O botão **"VEDI IL MENU COMPLETO"** vai abrir esse link em nova aba.
Enquanto estiver vazio, o botão apenas rola até a prévia do menu na própria página (comportamento
seguro, sem link quebrado).

## 3. Onde alterar o telefone

Arquivo `script.js`, em `restaurantData`:

```js
phone: "+39 371 560 1539",
phoneHref: "tel:+393715601539",
```

Também aparece diretamente em `index.html` (header mobile, footer, seção `LOCATION`) — busque por
`+39 371 560 1539` e `tel:+393715601539` para editar em todos os lugares de uma vez.

## 4. Onde alterar o endereço

Arquivo `index.html`, seção `LOCATION` (`<address>`) e no `<footer>`. Também no JSON-LD
(`application/ld+json`) no `<head>`, dentro de `"address"`.

## 5. Onde alterar pratos e preços

Arquivo `script.js`:

- **`signatureDishes`** → os pratos em destaque na seção "SAPORI DA SCOPRIRE" (nome, descrição,
  preço, tamanho do card: `large`/`regular`/`small`).
- **`menuData`** → o cardápio completo mostrado na prévia por categorias (Entradas, Pupusas,
  Platos Fuertes, Postre, Bebidas, Cocktails). Cada categoria é um objeto com `category` e `items`
  (`name` + `price`).

Basta editar esses arrays — o HTML é gerado automaticamente, sem precisar tocar em outro lugar.

## 6. Onde colocar o Instagram

Arquivo `script.js`, em `restaurantData`:

```js
instagramUrl: "", // exemplo: "https://www.instagram.com/angulo503"
```

Enquanto vazio, o link de Instagram permanece oculto no rodapé (nenhum link falso é exibido).
Assim que preenchido, o link aparece automaticamente.

## 7. Como publicar o site

Qualquer serviço de hospedagem de arquivos estáticos funciona, por exemplo:

- **Cloudflare Pages / Workers**, **Netlify** ou **Vercel**: arraste a pasta do projeto ou conecte
  a um repositório Git e publique — não é necessário build.
- **Hospedagem tradicional (FTP/cPanel)**: envie `index.html`, `style.css`, `script.js` e a pasta
  `assets/` para a raiz do domínio.

Antes de publicar:
1. Atualize `<link rel="canonical">` e as tags `og:url`/`og:image` em `index.html` com o domínio
   definitivo.
2. Preencha `menuUrl` e `instagramUrl` em `script.js`, se disponíveis.
3. Substitua os placeholders de foto pelas imagens reais (ver item 1).

---

## O que ainda está pendente / não foi inventado (por design)

Conforme o briefing, o site **não inclui**: sistema de reservas, avaliações, horários de
funcionamento, `priceRange` no schema.org, ou links sociais além do Instagram — todos esses dados
serão adicionados apenas quando confirmados oficialmente pelo restaurante.
