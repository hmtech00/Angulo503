# ANGULO 503 — Instruções de uso e edição

Site institucional do restaurante salvadoreño Angulo 503 (Milano), em HTML5 + CSS3 + JavaScript
Vanilla, sem frameworks nem dependências externas (exceto as fontes do Google Fonts).

## Estrutura de arquivos

```
/index.html          → estrutura das 11 seções do site
/style.css            → todo o sistema visual (cores, tipografia, layout, animações)
/script.js            → conteúdo dinâmico (pratos, menu, galeria) + interações
/assets/images/       → fotos do site (atualmente do Instagram oficial @angulo503_, ver nota abaixo)
```

O código está comentado com marcadores `EDITAR AQUI —` em cada ponto pensado para edição futura.

---

## 1. Onde colocar as fotos

O site já usa fotos reais, extraídas do Instagram oficial **[@angulo503_](https://www.instagram.com/angulo503_)**
(único acervo disponível no momento, sem login — por isso limitado a ~13 posts públicos, em
resolução de thumbnail ~360–640px). Cada imagem foi recortada para remover textos/preços
promocionais sobrepostos, mantendo só a fotografia limpa do prato/ambiente. Onde não havia foto que
representasse fielmente o prato (**Churrasco "503"** e **Pescado Frito**), o placeholder elegante
foi mantido — para não legendar uma foto com um prato que ela não mostra.

**Isso é uma solução temporária.** Fotos de Instagram em baixa resolução ficam nítidas em cards e
na galeria, mas ficam visivelmente suaves/borradas no **hero** e no **full-bleed** (as maiores telas
do site, ~1920px). Assim que houver fotografia profissional em alta resolução, priorize substituir
primeiro `camarones-empanizados.jpg` (hero) e `churrasco-plato.jpg` (full-bleed).

Para substituir qualquer foto por uma nova:

1. Salve o arquivo em `assets/images/` (pode usar o mesmo nome do arquivo atual, para substituir
   direto, ou um nome novo).
2. Em `index.html`, os blocos de foto fixos (hero, il ristorante, full-bleed, location) já têm a
   tag `<img>` — só troque o `src`. Cada um tem um comentário `<!-- EDITAR AQUI — FOTOS: ... -->`
   logo acima.
3. Na galeria (seção `GALLERY`) e nos pratos (`PIATTI SIGNATURE`), as imagens vêm do `script.js`
   a partir de `galleryData` e `signatureDishes`. Edite o campo `img: "assets/images/nome.jpg"`
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
