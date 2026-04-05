# Panqueca Calabrese — Landing Page Design Spec

## Visão Geral

Landing page institucional e comercial para a **Panqueca Calabrese**, restaurante/delivery localizado em Taquaritinga - SP. O site funciona como vitrine digital principal da empresa, integrando site institucional + cardápio dinâmico + WhatsApp + Instagram.

## Dados do Negócio

- **Nome:** Panqueca Calabrese
- **Segmento:** Restaurante / Delivery
- **Endereço:** Av. Paulo Roberto Scandar, 215 - Bela Vista, Taquaritinga - SP, 15900-001
- **Telefone / WhatsApp:** (16) 99733-0681
- **Instagram:** https://www.instagram.com/panqueca.calabrese/
- **Cardápio digital oficial:** https://panquecacalabresetaquaritinga.eatfood.app/category
- **Horário:** Todos os dias, 18h às 23h30
- **Slug Firestore:** `panqueca-calabrese`

## Categorias do Cardápio (10)

1. Bebidas
2. Diversos
3. Lanches de Carne
4. Lanches de Frango
5. Macarrão in Box
6. Massas
7. Panquecas Doces
8. Panquecas Salgadas
9. Porções
10. Risoto

---

## Arquitetura Técnica

### Stack

- **HTML/CSS/JS puro** — arquivo único `index.html` com CSS e JS inline
- **Zero dependências** — sem frameworks, bundlers ou build step
- **Fontes externas:** Google Fonts (Bebas Neue + Inter)

### Integração Firebase Firestore

Mesmo sistema do projeto Marieta Bistrô (`C:\dev\clientes\marieta`):

- **Projeto Firebase:** `clientes-admin-a2258`
- **Slug:** `panqueca-calabrese`
- **Endpoint:** `https://firestore.googleapis.com/v1/projects/clientes-admin-a2258/databases/(default)/documents/restaurants/panqueca-calabrese/data/{docName}`
- **Documentos:** `cardapio` e `promocoes`
- **Fallback:** arquivos locais `cardapio.js` e `promocoes.js`
- **Detecção local:** `location.protocol === 'file:'` → usa arquivos locais
- **Parser:** função `parseFirestoreValue()` para converter formato Firestore → JS

### Estrutura de Dados

**cardapio.js** (adaptado do formato Marieta):

```javascript
var cardapioData = [
  {
    "id": "panquecas-salgadas",
    "label": "Panquecas Salgadas",
    "categorias": [
      {
        "titulo": "Tradicionais",
        "itens": [
          {
            "nome": "Panqueca Calabresa",
            "desc": "Recheio de calabresa com molho especial",
            "preco": 25.90,
            "destaque": true  // opcional
          }
        ],
        "nota": "Observação opcional"  // opcional
      }
    ]
  }
  // ... demais categorias
];
```

**promocoes.js** (mesmo formato Marieta):

```javascript
var promocoesData = {
  "domingo":  [],
  "segunda":  [{ "texto": "Promoção do dia", "destaque": true }],
  "terca":    [],
  "quarta":   [],
  "quinta":   [],
  "sexta":    [],
  "sabado":   []
};
```

### Fluxo de Carregamento

1. Página carrega com HTML estático (SEO-friendly)
2. JS detecta se é local (`file:`) ou remoto
3. Se remoto: busca `cardapio` e `promocoes` do Firestore via REST API
4. Se Firestore falhar ou local: usa `cardapioData` e `promocoesData` dos arquivos JS
5. Renderiza cardápio e promoções dinamicamente no DOM

---

## Identidade Visual

### Paleta de Cores

| Token | Cor | Uso |
|-------|-----|-----|
| `--primary` | `#C41E24` | Vermelho principal — CTAs, destaques, marca |
| `--primary-dark` | `#9A1219` | Hover states |
| `--accent` | `#D4740A` | Laranja queimado — labels secundários |
| `--gold` | `#f0c27a` | Dourado — headlines especiais |
| `--bg-dark` | `#1a0a0a` | Fundo principal |
| `--bg-card` | `rgba(255,255,255,0.04)` | Cards |
| `--border` | `rgba(255,255,255,0.07)` | Bordas sutis |
| `--text` | `#ffffff` | Texto principal |
| `--text-muted` | `rgba(255,255,255,0.6)` | Texto secundário |
| `--whatsapp` | `#25D366` | Botão WhatsApp |

### Tipografia

- **Títulos:** Bebas Neue (bold, uppercase, impactante)
- **Corpo:** Inter (limpo, legível, moderno)
- **Tamanhos:** `clamp()` responsivo — hero title 48-96px, h2 32-48px, body 14-16px

### Princípios Visuais

- Fundo escuro com gradientes sutis em vermelho/laranja
- Cards com fundo semi-transparente e bordas sutis
- Hover effects com `translateY(-2px)` e mudança de borda
- Decorações radiais com baixa opacidade (0.10-0.15)
- Visual que transmite fome, sabor, energia e profissionalismo

---

## Estrutura da Página (8 seções + rodapé)

### 1. Navbar (fixa)

- **Posição:** `position: fixed`, topo, z-index alto
- **Background:** escuro com `backdrop-filter: blur(10px)`, borda inferior vermelha sutil
- **Esquerda:** "PANQUECA CALABRESE" (Bebas Neue, "CALABRESE" em vermelho)
- **Direita (desktop):** links Início, Cardápio, Sobre, Contato — scroll suave
- **Mobile:** menu hamburguer com drawer/overlay

### 2. Hero

- **Altura:** `min-height: 100vh`
- **Background:** gradiente escuro com decorações radiais
- **Badge:** "📍 Taquaritinga - SP" em pill vermelho translúcido
- **Título:** "PANQUECA CALABRESE" (Bebas Neue, grande)
- **Headline:** "O sabor que Taquaritinga já conhece" (dourado)
- **Subtítulo:** "Panquecas, massas, lanches, risoto e muito mais. Peça pelo WhatsApp e receba no conforto da sua casa."
- **Botões:**
  - "Ver Cardápio" → link cardápio digital oficial (vermelho)
  - "Pedir no WhatsApp" → `https://wa.me/5516997330681` (verde)
  - "Ver Instagram" → link Instagram (outline)
- **Horário:** "Aberto todos os dias · 18h às 23h30"
- **Promoções dinâmicas:** banner de promoção do dia (dados do Firestore/promocoes.js), rotação automática a cada 4s se múltiplas promoções, oculto se array vazio para o dia

### 3. Sobre a Marca

- **Label:** "Quem Somos" (vermelho, uppercase)
- **Título:** "Mais que panquecas. Uma experiência de sabor."
- **Texto:** 2 parágrafos apresentando a marca como referência local, destacando variedade, praticidade e qualidade
- **Stats:** 3 números em destaque:
  - "10+" Categorias
  - "50+" Itens no cardápio
  - "7" Dias por semana

### 4. Categorias do Cardápio (dinâmico via Firestore)

- **Label:** "Nosso Cardápio" (laranja)
- **Título:** "Escolha sua categoria favorita"
- **Grid:** `repeat(auto-fill, minmax(200px, 1fr))` — responsivo
- **Cards:** 10 categorias, cada uma com:
  - Ícone emoji representativo
  - Nome da categoria (Bebas Neue)
  - Descrição curta
  - Hover: `translateY(-4px)` + borda vermelha
  - Click: abre cardápio digital oficial na categoria correspondente
- **CTA:** botão "Ver Cardápio Completo" → link cardápio digital oficial
- **Dados:** renderizado dinamicamente do `cardapioData` (Firestore ou fallback local)
- **Atualização:** novas categorias adicionadas no admin aparecem automaticamente

### 5. Diferenciais

- **Label:** "Por que pedir na Panqueca Calabrese?"
- **Título:** "Sabor, variedade e praticidade"
- **Grid:** `repeat(auto-fill, minmax(300px, 1fr))` — 2 ou 3 colunas
- **6 cards:**
  1. 📋 Cardápio Variado — mais de 10 categorias
  2. 📱 Pedido Fácil — cardápio digital + WhatsApp
  3. 🔥 Sabor Marcante — qualidade e capricho
  4. 📍 Referência Local — marca conhecida em Taquaritinga
  5. 🕐 Todos os Dias — 18h às 23h30
  6. 🏍️ Delivery Prático — entrega rápida via WhatsApp

### 6. Prova Social

- **Background:** vermelho translúcido sutil (`rgba(196,30,36,0.05)`)
- **Label:** "Presença & Credibilidade"
- **Título:** "Marca presente no dia a dia de Taquaritinga"
- **3 cards:**
  1. 📸 Presença no Instagram — @panqueca.calabrese
  2. 💬 Contato Direto — atendimento pelo WhatsApp
  3. ⭐ Reconhecimento Local — referência em Taquaritinga
- **Nota:** nenhum depoimento fabricado; foco em fatos verificáveis

### 7. CTA Forte

- **Background:** gradiente escuro com radial vermelho central
- **Label:** "Bateu a fome?" (dourado)
- **Título:** "Faça seu pedido agora" ("pedido" em vermelho)
- **Subtítulo:** "Escolha seu favorito no cardápio digital e peça pelo WhatsApp."
- **Botões:**
  - "Abrir Cardápio" (vermelho)
  - "Pedir no WhatsApp" (verde)

### 8. Localização & Contato

- **Layout:** grid 2 colunas (info + mapa) no desktop, empilhado no mobile
- **Coluna info:**
  - 📍 Endereço completo
  - 📞 Telefone clicável (`tel:`)
  - 🕐 Horário de funcionamento
  - 📸 Instagram (link)
  - 📋 Cardápio digital (link)
  - Botões: WhatsApp + Abrir no Mapa (Google Maps link)
- **Coluna mapa:** iframe Google Maps embed com o endereço

### 9. Rodapé

- **Background:** `#0d0505` com borda vermelha sutil no topo
- **Grid 3 colunas (desktop):**
  1. Marca + descrição curta
  2. Links Rápidos (Cardápio, Instagram, WhatsApp, Localização)
  3. Contato (telefone, Instagram, endereço)
- **Bottom bar:** copyright 2026 + cidade
- **Mobile:** coluna única

### 10. Botão Flutuante WhatsApp

- **Posição:** fixo, bottom-right (24px)
- **Visual:** círculo verde 60px, ícone WhatsApp, sombra
- **Link:** `https://wa.me/5516997330681`
- **Hover:** `scale(1.1)`
- **z-index:** 999

---

## SEO Local

### Meta Tags

```html
<title>Panqueca Calabrese | Panquecas, Massas e Delivery em Taquaritinga - SP</title>
<meta name="description" content="Panqueca Calabrese — panquecas, massas, lanches, risoto e muito mais em Taquaritinga - SP. Peça pelo WhatsApp e receba em casa. Aberto todos os dias das 18h às 23h30.">
```

### Palavras-chave alvo

- panqueca em Taquaritinga
- massas em Taquaritinga
- delivery em Taquaritinga
- restaurante em Taquaritinga
- lanches em Taquaritinga
- macarrão em Taquaritinga
- risoto em Taquaritinga
- porções em Taquaritinga

### Técnicas

- HTML semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Heading hierarchy correta (h1 → h2 → h3)
- Links descritivos (não "clique aqui")
- Alt text nas imagens
- Schema markup (LocalBusiness) opcional/futuro

---

## Responsividade

### Breakpoints

- **Mobile:** < 600px — coluna única, nav hamburguer, grid 2 colunas para categorias
- **Tablet:** 600-768px — ajustes de gap e padding
- **Desktop:** > 768px — layout completo

### Adaptações Mobile

- Navbar: links escondidos, menu hamburguer com overlay
- Hero: tipografia reduzida via `clamp()`
- Grids: reduzem colunas automaticamente via `auto-fill`
- Localização: empilha mapa abaixo da info
- Rodapé: coluna única
- Botões: full-width em telas pequenas

---

## Arquivos do Projeto

```
calabrese/
├── index.html          # Página completa (HTML + CSS + JS inline)
├── cardapio.js         # Dados do cardápio (fallback local)
├── promocoes.js        # Promoções por dia (fallback local)
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-05-landing-page-design.md
```

---

## Links e Integrações

| Destino | URL |
|---------|-----|
| WhatsApp | `https://wa.me/5516997330681` |
| Instagram | `https://www.instagram.com/panqueca.calabrese/` |
| Cardápio Digital | `https://panquecacalabresetaquaritinga.eatfood.app/category` |
| Google Maps | `https://www.google.com/maps/search/?api=1&query=Av.+Paulo+Roberto+Scandar+215+Taquaritinga+SP` |
| Firestore Cardápio | `https://firestore.googleapis.com/v1/projects/clientes-admin-a2258/databases/(default)/documents/restaurants/panqueca-calabrese/data/cardapio` |
| Firestore Promoções | `https://firestore.googleapis.com/v1/projects/clientes-admin-a2258/databases/(default)/documents/restaurants/panqueca-calabrese/data/promocoes` |

---

## Fora de Escopo

- Backend / servidor próprio
- Sistema de pedidos online (usa cardápio digital externo + WhatsApp)
- Painel admin (já existe no projeto `clientes-admin-a2258`)
- Galeria de fotos (removida por decisão do usuário)
- Depoimentos inventados
- PWA / Service Worker
- Analytics (pode ser adicionado depois)
