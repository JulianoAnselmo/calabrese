# Panqueca Calabrese Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, responsive landing page for Panqueca Calabrese with dynamic menu categories and daily promotions powered by Firebase Firestore.

**Architecture:** Single `index.html` file with inline CSS and JS. Two external JS data files (`cardapio.js`, `promocoes.js`) serve as local fallbacks. The page fetches data from Firebase Firestore REST API when hosted remotely; when opened as a local file, it uses the JS fallback data directly.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, clamp), vanilla JavaScript, Google Fonts (Bebas Neue + Inter), Firebase Firestore REST API.

**Reference project:** `C:\dev\clientes\marieta` — same Firestore integration pattern.

---

## File Structure

```
calabrese/
├── index.html          # Complete landing page (HTML + inline CSS + inline JS)
├── cardapio.js         # Menu data fallback (loaded via <script src>)
├── promocoes.js        # Daily promotions fallback (loaded via <script src>)
```

- `index.html` — all markup, styles, and logic in one file. ~900-1100 lines.
- `cardapio.js` — defines `var cardapioData = [...]` with 10 categories. Loaded before inline JS.
- `promocoes.js` — defines `var promocoesData = {...}` with 7 days. Loaded before inline JS.

---

## Task 1: Create data files (cardapio.js + promocoes.js)

**Files:**
- Create: `cardapio.js`
- Create: `promocoes.js`

- [ ] **Step 1: Create cardapio.js with all 10 categories**

Create `cardapio.js` in the project root with the complete menu data structure. Each category uses the same format as Marieta (`id`, `label`, `categorias` array with `titulo`, `itens` with `nome`, `desc`, `preco`, `destaque`). Populate with placeholder items based on real categories from the EatFood menu.

```javascript
// ===== CARDÁPIO — PANQUECA CALABRESE =====
// Atualizado via admin (Firestore) ou editando este arquivo diretamente.
// Formato: mesmo do projeto Marieta Bistrô.
var cardapioData = [
  {
    "id": "panquecas-salgadas",
    "label": "Panquecas Salgadas",
    "icon": "🥞",
    "categorias": [
      {
        "titulo": "Panquecas Salgadas",
        "itens": [
          { "nome": "Calabresa", "desc": "Recheio de calabresa acebolada com molho especial da casa", "preco": 25.90, "destaque": true },
          { "nome": "Frango com Catupiry", "desc": "Frango desfiado temperado com catupiry cremoso", "preco": 25.90 },
          { "nome": "Carne Moída", "desc": "Carne moída temperada com ervas e especiarias", "preco": 25.90 },
          { "nome": "Quatro Queijos", "desc": "Blend de muçarela, provolone, catupiry e parmesão", "preco": 27.90 },
          { "nome": "Palmito", "desc": "Recheio cremoso de palmito com molho branco", "preco": 27.90 }
        ]
      }
    ]
  },
  {
    "id": "panquecas-doces",
    "label": "Panquecas Doces",
    "icon": "🍫",
    "categorias": [
      {
        "titulo": "Panquecas Doces",
        "itens": [
          { "nome": "Chocolate", "desc": "Massa de panqueca com recheio generoso de chocolate", "preco": 22.90 },
          { "nome": "Doce de Leite", "desc": "Recheio cremoso de doce de leite artesanal", "preco": 22.90 },
          { "nome": "Morango com Chocolate", "desc": "Morangos frescos com calda de chocolate", "preco": 24.90, "destaque": true },
          { "nome": "Banana com Canela", "desc": "Banana caramelizada com canela e açúcar", "preco": 22.90 }
        ]
      }
    ]
  },
  {
    "id": "massas",
    "label": "Massas",
    "icon": "🍝",
    "categorias": [
      {
        "titulo": "Massas",
        "itens": [
          { "nome": "Lasanha Bolonhesa", "desc": "Camadas de massa fresca com molho bolonhesa e queijo gratinado", "preco": 32.90, "destaque": true },
          { "nome": "Lasanha Frango com Catupiry", "desc": "Frango desfiado com catupiry entre camadas de massa", "preco": 32.90 },
          { "nome": "Nhoque ao Sugo", "desc": "Nhoque de batata artesanal com molho de tomate fresco", "preco": 28.90 },
          { "nome": "Canelone de Carne", "desc": "Canelone recheado com carne temperada e molho especial", "preco": 30.90 }
        ]
      }
    ]
  },
  {
    "id": "macarrao-in-box",
    "label": "Macarrão in Box",
    "icon": "🍜",
    "categorias": [
      {
        "titulo": "Macarrão in Box",
        "itens": [
          { "nome": "Carbonara", "desc": "Macarrão ao molho carbonara cremoso com bacon", "preco": 24.90 },
          { "nome": "Bolonhesa", "desc": "Macarrão com molho bolonhesa caseiro", "preco": 22.90 },
          { "nome": "Alho e Óleo", "desc": "Macarrão no alho e óleo com toque de pimenta", "preco": 19.90 },
          { "nome": "Quatro Queijos", "desc": "Macarrão ao molho cremoso de quatro queijos", "preco": 24.90 }
        ]
      }
    ]
  },
  {
    "id": "lanches-carne",
    "label": "Lanches de Carne",
    "icon": "🍔",
    "categorias": [
      {
        "titulo": "Lanches de Carne",
        "itens": [
          { "nome": "X-Burguer", "desc": "Hambúrguer artesanal, queijo, salada e molho especial", "preco": 22.90 },
          { "nome": "X-Bacon", "desc": "Hambúrguer artesanal com bacon crocante e queijo", "preco": 25.90, "destaque": true },
          { "nome": "X-Tudo", "desc": "Hambúrguer completo com todos os ingredientes", "preco": 28.90 },
          { "nome": "X-Calabresa", "desc": "Hambúrguer com calabresa acebolada e queijo", "preco": 25.90 }
        ]
      }
    ]
  },
  {
    "id": "lanches-frango",
    "label": "Lanches de Frango",
    "icon": "🍗",
    "categorias": [
      {
        "titulo": "Lanches de Frango",
        "itens": [
          { "nome": "Frango Crispy", "desc": "Filé de frango empanado crocante com salada e molho", "preco": 22.90 },
          { "nome": "Frango com Catupiry", "desc": "Frango desfiado com catupiry no pão artesanal", "preco": 24.90 },
          { "nome": "Frango Especial", "desc": "Frango grelhado com queijo, bacon e salada completa", "preco": 26.90, "destaque": true }
        ]
      }
    ]
  },
  {
    "id": "risoto",
    "label": "Risoto",
    "icon": "🍚",
    "categorias": [
      {
        "titulo": "Risoto",
        "itens": [
          { "nome": "Risoto de Frango", "desc": "Risoto cremoso com frango desfiado e temperos especiais", "preco": 30.90 },
          { "nome": "Risoto Calabresa", "desc": "Risoto com calabresa e toque defumado", "preco": 30.90, "destaque": true },
          { "nome": "Risoto Quatro Queijos", "desc": "Risoto cremoso com blend de quatro queijos", "preco": 32.90 }
        ]
      }
    ]
  },
  {
    "id": "porcoes",
    "label": "Porções",
    "icon": "🍟",
    "categorias": [
      {
        "titulo": "Porções",
        "itens": [
          { "nome": "Batata Frita", "desc": "Porção generosa de batata frita crocante", "preco": 18.90 },
          { "nome": "Calabresa Acebolada", "desc": "Porção de calabresa acebolada na chapa", "preco": 22.90 },
          { "nome": "Frango a Passarinho", "desc": "Frango temperado e frito crocante", "preco": 24.90 },
          { "nome": "Mandioca Frita", "desc": "Mandioca frita dourada e crocante", "preco": 18.90 }
        ]
      }
    ]
  },
  {
    "id": "bebidas",
    "label": "Bebidas",
    "icon": "🥤",
    "categorias": [
      {
        "titulo": "Bebidas",
        "itens": [
          { "nome": "Refrigerante Lata", "desc": "Coca-Cola, Guaraná, Sprite", "preco": 6.00 },
          { "nome": "Suco Natural", "desc": "Laranja, limão, maracujá", "preco": 8.90 },
          { "nome": "Água Mineral", "desc": "Com ou sem gás", "preco": 4.00 },
          { "nome": "Milk Shake", "desc": "Chocolate, morango ou ovomaltine", "preco": 16.90, "destaque": true },
          { "nome": "Açaí", "desc": "Açaí cremoso com acompanhamentos", "preco": 18.90 }
        ]
      }
    ]
  },
  {
    "id": "diversos",
    "label": "Diversos",
    "icon": "✨",
    "categorias": [
      {
        "titulo": "Diversos",
        "itens": [
          { "nome": "Marmitex P", "desc": "Marmitex tamanho pequeno com arroz, feijão e mistura", "preco": 15.90 },
          { "nome": "Marmitex G", "desc": "Marmitex tamanho grande completo", "preco": 19.90 }
        ]
      }
    ]
  }
];
```

Note: the `icon` field is an extension of the Marieta format — used only by the landing page's category grid. Firestore data will also include this field.

- [ ] **Step 2: Create promocoes.js with daily promotions**

Create `promocoes.js` in the project root. Same format as Marieta.

```javascript
// ===== PROMOÇÕES DO DIA — PANQUECA CALABRESE =====
// Cada dia pode ter múltiplas promoções (array).
// Array vazio [] = sem promoção = banner não aparece.
// "destaque: true" dá ênfase extra ao texto.
// Atualizado via admin (Firestore) ou editando este arquivo diretamente.
var promocoesData = {
  "domingo":  [],
  "segunda":  [],
  "terca":    [],
  "quarta":   [],
  "quinta":   [],
  "sexta":    [],
  "sabado":   []
};
```

- [ ] **Step 3: Verify files load in browser**

Open `cardapio.js` and `promocoes.js` in the browser console to check for syntax errors.

Run: Open a terminal and start a quick check:
```bash
node -e "require('./cardapio.js'); console.log('cardapio OK');"
```

This won't work since they use `var` not `module.exports`, so instead just open the files and visually verify no trailing commas or syntax errors. Alternatively:

```bash
node -e "eval(require('fs').readFileSync('cardapio.js','utf8')); console.log('cardapioData has', cardapioData.length, 'categories');"
```

Expected: `cardapioData has 10 categories`

```bash
node -e "eval(require('fs').readFileSync('promocoes.js','utf8')); console.log('promocoesData keys:', Object.keys(promocoesData).join(', '));"
```

Expected: `promocoesData keys: domingo, segunda, terca, quarta, quinta, sexta, sabado`

- [ ] **Step 4: Commit**

```bash
git add cardapio.js promocoes.js
git commit -m "feat: add menu and promotions data files"
```

---

## Task 2: Create index.html — document head and CSS custom properties

**Files:**
- Create: `index.html`

This task creates the HTML document structure, meta tags for SEO, font loading, and the complete CSS using custom properties. No sections yet — just the shell.

- [ ] **Step 1: Create index.html with head, meta tags, and opening body**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panqueca Calabrese | Panquecas, Massas e Delivery em Taquaritinga - SP</title>
  <meta name="description" content="Panqueca Calabrese — panquecas, massas, lanches, risoto e muito mais em Taquaritinga - SP. Peça pelo WhatsApp e receba em casa. Aberto todos os dias das 18h às 23h30.">
  <meta name="keywords" content="panqueca em Taquaritinga, massas em Taquaritinga, delivery em Taquaritinga, restaurante em Taquaritinga, lanches em Taquaritinga, macarrão em Taquaritinga, risoto em Taquaritinga, porções em Taquaritinga">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="Panqueca Calabrese | Panquecas, Massas e Delivery em Taquaritinga - SP">
  <meta property="og:description" content="Panquecas, massas, lanches, risoto e muito mais. Peça pelo WhatsApp e receba em casa. Aberto todos os dias das 18h às 23h30.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">

  <!-- Favicon SVG -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='16' fill='%23C41E24'/%3E%3Ctext x='50' y='68' font-family='sans-serif' font-size='50' font-weight='700' fill='%23fff' text-anchor='middle'%3EPC%3C/text%3E%3C/svg%3E">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    /* ===== CSS VARIABLES ===== */
    :root {
      --primary: #C41E24;
      --primary-dark: #9A1219;
      --accent: #D4740A;
      --gold: #f0c27a;
      --bg-dark: #1a0a0a;
      --bg-card: rgba(255,255,255,0.04);
      --border: rgba(255,255,255,0.07);
      --text: #ffffff;
      --text-muted: rgba(255,255,255,0.6);
      --whatsapp: #25D366;

      --font-display: 'Bebas Neue', sans-serif;
      --font-body: 'Inter', sans-serif;
    }

    /* ===== RESET & BASE ===== */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
    }

    body {
      font-family: var(--font-body);
      background: var(--bg-dark);
      color: var(--text);
      line-height: 1.6;
    }

    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }

    /* ===== UTILITY ===== */
    .section-label {
      color: var(--primary);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .section-label--accent { color: var(--accent); }
    .section-label--gold { color: var(--gold); }

    .section-title {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 48px);
      color: var(--text);
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
      border: none;
      font-family: var(--font-body);
    }
    .btn:hover { transform: translateY(-2px); }
    .btn--primary { background: var(--primary); color: #fff; box-shadow: 0 4px 20px rgba(196,30,36,0.4); }
    .btn--primary:hover { background: var(--primary-dark); }
    .btn--whatsapp { background: var(--whatsapp); color: #fff; box-shadow: 0 4px 20px rgba(37,211,102,0.3); }
    .btn--outline { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.3); }
    .btn--outline:hover { border-color: #fff; }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(196,30,36,0.3), transparent);
      max-width: 600px;
      margin: 0 auto;
    }

    /* ===== NAV ===== */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(26, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(196,30,36,0.3);
      padding: 12px 24px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-brand {
      font-family: var(--font-display);
      font-size: 24px; color: #fff; letter-spacing: 1px;
    }
    .nav-brand span { color: var(--primary); }
    .nav-links { display: flex; gap: 24px; list-style: none; }
    .nav-links a {
      color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.5px; transition: color 0.2s;
    }
    .nav-links a:hover { color: #fff; }
    .nav-toggle {
      display: none; background: none; border: none; color: #fff;
      font-size: 24px; cursor: pointer; padding: 4px;
    }

    /* Mobile menu overlay */
    .nav-mobile {
      display: none; position: fixed; inset: 0; z-index: 99;
      background: rgba(26,10,10,0.98); flex-direction: column;
      align-items: center; justify-content: center; gap: 32px;
    }
    .nav-mobile.open { display: flex; }
    .nav-mobile a {
      font-family: var(--font-display); font-size: 32px; color: #fff;
      letter-spacing: 2px; transition: color 0.2s;
    }
    .nav-mobile a:hover { color: var(--primary); }
    .nav-mobile-close {
      position: absolute; top: 16px; right: 24px;
      background: none; border: none; color: #fff; font-size: 32px; cursor: pointer;
    }

    /* ===== HERO ===== */
    .hero {
      position: relative; min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
      background: linear-gradient(135deg, #1a0a0a 0%, #2d0e0e 50%, #1a0a0a 100%);
    }
    .hero::before {
      content: ''; position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(196,30,36,0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 30%, rgba(200,100,30,0.1) 0%, transparent 50%);
      z-index: 1;
    }
    .hero-deco {
      position: absolute; border-radius: 50%; z-index: 1; opacity: 0.12;
    }
    .hero-deco--1 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, var(--primary), transparent);
      top: -100px; right: -100px;
    }
    .hero-deco--2 {
      width: 300px; height: 300px;
      background: radial-gradient(circle, var(--accent), transparent);
      bottom: -80px; left: -80px;
    }
    .hero-content {
      position: relative; z-index: 2;
      text-align: center; padding: 40px 20px; max-width: 800px;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(196,30,36,0.2); border: 1px solid rgba(196,30,36,0.5);
      color: #ff6b6b; padding: 6px 18px; border-radius: 30px;
      font-size: 13px; font-weight: 600; letter-spacing: 1px;
      text-transform: uppercase; margin-bottom: 24px;
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(48px, 8vw, 96px); line-height: 1;
      letter-spacing: 2px; margin-bottom: 8px; color: #fff;
    }
    .hero-title span { color: var(--primary); }
    .hero-headline {
      font-family: var(--font-display);
      font-size: clamp(24px, 4vw, 42px); line-height: 1.15;
      color: var(--gold); margin-bottom: 20px; letter-spacing: 1px;
    }
    .hero-sub {
      font-size: clamp(15px, 2vw, 18px); color: var(--text-muted);
      max-width: 550px; margin: 0 auto 32px; line-height: 1.6;
    }
    .hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
    .hero-hours {
      margin-top: 28px; font-size: 13px;
      color: rgba(255,255,255,0.5); letter-spacing: 0.5px;
    }
    .hero-hours strong { color: rgba(255,255,255,0.8); }

    /* Hero promo banner */
    .hero-promo {
      display: none; margin-top: 20px;
      background: rgba(196,30,36,0.15); border: 1px solid rgba(196,30,36,0.3);
      border-radius: 8px; padding: 10px 20px;
      position: relative; min-height: 36px;
    }
    .promo-text {
      color: var(--gold); font-size: 14px; font-weight: 600;
      letter-spacing: 0.5px;
      position: absolute; inset: 0; display: flex;
      align-items: center; justify-content: center; padding: 10px 20px;
      opacity: 0; transition: opacity 0.4s;
    }
    .promo-text.active { opacity: 1; position: relative; }

    /* ===== ABOUT ===== */
    .about {
      padding: 80px 24px; max-width: 900px; margin: 0 auto; text-align: center;
    }
    .about p {
      font-size: 16px; color: var(--text-muted); line-height: 1.8;
      max-width: 700px; margin: 0 auto 16px;
    }
    .about-stats {
      display: flex; justify-content: center; gap: 48px;
      margin-top: 40px; flex-wrap: wrap;
    }
    .stat-number {
      font-family: var(--font-display); font-size: 48px;
      color: var(--primary); line-height: 1;
    }
    .stat-text {
      font-size: 13px; color: rgba(255,255,255,0.5);
      text-transform: uppercase; letter-spacing: 1px; margin-top: 4px;
    }

    /* ===== CATEGORIES ===== */
    .categories { padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
    .categories-header { text-align: center; margin-bottom: 48px; }
    .cat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
    .cat-card {
      background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 12px; padding: 28px 20px; text-align: center;
      transition: transform 0.2s, border-color 0.2s; cursor: pointer;
      text-decoration: none; display: block;
    }
    .cat-card:hover {
      transform: translateY(-4px);
      border-color: rgba(196,30,36,0.4);
    }
    .cat-icon { font-size: 36px; margin-bottom: 12px; }
    .cat-name {
      font-family: var(--font-display); font-size: 20px;
      color: #fff; letter-spacing: 1px; margin-bottom: 4px;
    }
    .cat-desc { font-size: 12px; color: rgba(255,255,255,0.45); }
    .cat-cta { text-align: center; margin-top: 36px; }

    /* ===== DIFERENCIAIS ===== */
    .diferenciais {
      padding: 80px 24px; max-width: 1100px; margin: 0 auto; text-align: center;
    }
    .diff-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px; margin-top: 40px;
    }
    .diff-card {
      background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 16px; padding: 32px 24px; text-align: left;
      transition: border-color 0.2s;
    }
    .diff-card:hover { border-color: rgba(196,30,36,0.3); }
    .diff-icon {
      width: 48px; height: 48px; border-radius: 12px;
      background: rgba(196,30,36,0.15);
      display: flex; align-items: center; justify-content: center;
      font-size: 24px; margin-bottom: 16px;
    }
    .diff-title {
      font-family: var(--font-display); font-size: 22px;
      color: #fff; letter-spacing: 0.5px; margin-bottom: 8px;
    }
    .diff-text { font-size: 14px; color: var(--text-muted); line-height: 1.6; }

    /* ===== PROVA SOCIAL ===== */
    .social-proof {
      padding: 80px 24px; background: rgba(196,30,36,0.05); text-align: center;
    }
    .social-inner { max-width: 900px; margin: 0 auto; }
    .social-cards {
      display: flex; gap: 24px; justify-content: center;
      flex-wrap: wrap; margin-top: 40px;
    }
    .social-card {
      background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 16px; padding: 32px 24px;
      flex: 1; min-width: 240px; max-width: 280px;
    }
    .social-card-icon { font-size: 32px; margin-bottom: 12px; }
    .social-card h3 {
      font-family: var(--font-display); font-size: 20px;
      color: #fff; letter-spacing: 0.5px; margin-bottom: 8px;
    }
    .social-card p { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6; }

    /* ===== CTA ===== */
    .cta-section {
      padding: 100px 24px; text-align: center; position: relative; overflow: hidden;
      background: linear-gradient(135deg, #2d0e0e 0%, #1a0a0a 100%);
    }
    .cta-section::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse at center, rgba(196,30,36,0.12) 0%, transparent 70%);
    }
    .cta-inner {
      position: relative; z-index: 2; max-width: 700px; margin: 0 auto;
    }
    .cta-inner .section-title span { color: var(--primary); }
    .cta-sub {
      font-size: 17px; color: var(--text-muted); margin-bottom: 36px; line-height: 1.6;
    }
    .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* ===== LOCALIZAÇÃO ===== */
    .localizacao { padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
    .loc-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 48px; margin-top: 40px; align-items: start;
    }
    .loc-info h3 {
      font-family: var(--font-display); font-size: 24px;
      color: #fff; margin-bottom: 20px; letter-spacing: 0.5px;
    }
    .loc-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
    .loc-item-icon {
      width: 40px; height: 40px; border-radius: 10px;
      background: rgba(196,30,36,0.15);
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; flex-shrink: 0;
    }
    .loc-item-text { font-size: 14px; color: var(--text-muted); line-height: 1.5; }
    .loc-item-text strong {
      color: #fff; display: block; margin-bottom: 2px;
      font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .loc-item-text a { color: var(--primary); }
    .loc-item-text a:hover { text-decoration: underline; }
    .loc-buttons { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
    .loc-map {
      border-radius: 16px; overflow: hidden; height: 320px;
      background: var(--bg-card); border: 1px solid var(--border);
    }
    .loc-map iframe { width: 100%; height: 100%; border: 0; }

    /* ===== FOOTER ===== */
    .footer {
      background: #0d0505; border-top: 1px solid rgba(196,30,36,0.2);
      padding: 48px 24px 24px;
    }
    .footer-inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px;
    }
    .footer-brand {
      font-family: var(--font-display); font-size: 28px;
      color: #fff; letter-spacing: 1px; margin-bottom: 12px;
    }
    .footer-brand span { color: var(--primary); }
    .footer-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.6; max-width: 300px; }
    .footer h4 {
      font-family: var(--font-display); font-size: 18px;
      color: #fff; letter-spacing: 1px; margin-bottom: 16px;
    }
    .footer-links { list-style: none; }
    .footer-links li { margin-bottom: 8px; }
    .footer-links a {
      color: rgba(255,255,255,0.45); font-size: 13px; transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--primary); }
    .footer-bottom {
      max-width: 1100px; margin: 32px auto 0; padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex; justify-content: space-between; align-items: center;
      font-size: 12px; color: rgba(255,255,255,0.3); flex-wrap: wrap; gap: 8px;
    }

    /* ===== WHATSAPP FLOAT ===== */
    .whatsapp-float {
      position: fixed; bottom: 24px; right: 24px; z-index: 999;
      width: 60px; height: 60px; border-radius: 50%;
      background: var(--whatsapp); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-size: 28px; box-shadow: 0 4px 20px rgba(37,211,102,0.4);
      transition: transform 0.2s;
    }
    .whatsapp-float:hover { transform: scale(1.1); }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-toggle { display: block; }
      .loc-grid { grid-template-columns: 1fr; }
      .footer-inner { grid-template-columns: 1fr; gap: 24px; }
    }
    @media (max-width: 600px) {
      .cat-grid { grid-template-columns: repeat(2, 1fr); }
      .about-stats { gap: 24px; }
      .hero-buttons { flex-direction: column; align-items: center; }
      .hero-buttons .btn { width: 100%; max-width: 280px; justify-content: center; }
      .cta-buttons { flex-direction: column; align-items: center; }
      .cta-buttons .btn { width: 100%; max-width: 280px; justify-content: center; }
      .loc-buttons { flex-direction: column; }
      .loc-buttons .btn { width: 100%; justify-content: center; }
    }
  </style>
</head>
<body>

<!-- Content will be added in subsequent tasks -->

<!-- Data files (fallback) -->
<script src="cardapio.js"></script>
<script src="promocoes.js"></script>

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Open `index.html` in browser. Should show a dark page with no content errors. Check browser console for no JS errors from the loaded data files.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: create index.html shell with CSS custom properties and responsive styles"
```

---

## Task 3: Add navbar and hero section HTML

**Files:**
- Modify: `index.html` (add HTML between `<body>` and the script tags)

- [ ] **Step 1: Add navbar and hero HTML**

Insert the following HTML right after the opening `<body>` tag, before the `<!-- Data files -->` comment:

```html
<!-- NAV -->
<header>
  <nav class="nav" id="nav">
    <div class="nav-brand">PANQUECA <span>CALABRESE</span></div>
    <ul class="nav-links">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#cardapio">Cardápio</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
    <button class="nav-toggle" onclick="document.getElementById('navMobile').classList.add('open')" aria-label="Abrir menu">&#9776;</button>
  </nav>

  <!-- Mobile menu -->
  <div class="nav-mobile" id="navMobile">
    <button class="nav-mobile-close" onclick="document.getElementById('navMobile').classList.remove('open')" aria-label="Fechar menu">&times;</button>
    <a href="#inicio" onclick="document.getElementById('navMobile').classList.remove('open')">Início</a>
    <a href="#cardapio" onclick="document.getElementById('navMobile').classList.remove('open')">Cardápio</a>
    <a href="#sobre" onclick="document.getElementById('navMobile').classList.remove('open')">Sobre</a>
    <a href="#contato" onclick="document.getElementById('navMobile').classList.remove('open')">Contato</a>
  </div>
</header>

<!-- HERO -->
<section class="hero" id="inicio">
  <div class="hero-deco hero-deco--1"></div>
  <div class="hero-deco hero-deco--2"></div>

  <div class="hero-content">
    <div class="hero-badge">📍 Taquaritinga - SP</div>
    <h1 class="hero-title">PANQUECA <span>CALABRESE</span></h1>
    <p class="hero-headline">O sabor que Taquaritinga já conhece</p>
    <p class="hero-sub">Panquecas, massas, lanches, risoto e muito mais. Peça pelo WhatsApp e receba no conforto da sua casa.</p>

    <div class="hero-buttons">
      <a href="https://panquecacalabresetaquaritinga.eatfood.app/category" target="_blank" rel="noopener" class="btn btn--primary">🍽️ Ver Cardápio</a>
      <a href="https://wa.me/5516997330681" target="_blank" rel="noopener" class="btn btn--whatsapp">📱 Pedir no WhatsApp</a>
      <a href="https://www.instagram.com/panqueca.calabrese/" target="_blank" rel="noopener" class="btn btn--outline">📸 Ver Instagram</a>
    </div>

    <p class="hero-hours">Aberto todos os dias · <strong>18h às 23h30</strong></p>

    <!-- Promoções dinâmicas (preenchido via JS) -->
    <div class="hero-promo" id="heroPromo">
      <div id="promoContent"></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Open in browser and verify**

Open `index.html`. Verify:
- Navbar visible at top with brand name
- Hero section fills viewport
- Three buttons visible and clickable
- On narrow viewport (< 768px): hamburger icon appears, nav links hidden
- Click hamburger → mobile overlay opens
- Click X or link → overlay closes

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add navbar and hero section with mobile menu"
```

---

## Task 4: Add about, categories, and diferenciais sections HTML

**Files:**
- Modify: `index.html` (insert after hero section, before script tags)

- [ ] **Step 1: Add about section**

Insert after the closing `</section>` of the hero:

```html
<main>

<!-- ABOUT -->
<section class="about" id="sobre">
  <p class="section-label">Quem Somos</p>
  <h2 class="section-title">Mais que panquecas. Uma experiência de sabor.</h2>
  <p>A Panqueca Calabrese é referência em Taquaritinga quando o assunto é sabor, variedade e praticidade. Do clássico ao surpreendente, nosso cardápio reúne panquecas, massas, lanches, risoto, porções e muito mais — tudo pensado pra matar sua fome de verdade.</p>
  <p>Peça pelo WhatsApp, acompanhe pelo Instagram e receba na sua casa com a qualidade que você já conhece.</p>

  <div class="about-stats">
    <div>
      <div class="stat-number">10+</div>
      <div class="stat-text">Categorias</div>
    </div>
    <div>
      <div class="stat-number">50+</div>
      <div class="stat-text">Itens no cardápio</div>
    </div>
    <div>
      <div class="stat-number">7</div>
      <div class="stat-text">Dias por semana</div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- CATEGORIES -->
<section class="categories" id="cardapio">
  <div class="categories-header">
    <p class="section-label section-label--accent">Nosso Cardápio</p>
    <h2 class="section-title">Escolha sua categoria favorita</h2>
  </div>
  <div class="cat-grid" id="catGrid">
    <!-- Rendered dynamically by JS -->
  </div>
  <div class="cat-cta">
    <a href="https://panquecacalabresetaquaritinga.eatfood.app/category" target="_blank" rel="noopener" class="btn btn--primary">📋 Ver Cardápio Completo</a>
  </div>
</section>

<div class="divider"></div>

<!-- DIFERENCIAIS -->
<section class="diferenciais">
  <p class="section-label">Por que pedir na Panqueca Calabrese?</p>
  <h2 class="section-title">Sabor, variedade e praticidade</h2>

  <div class="diff-grid">
    <div class="diff-card">
      <div class="diff-icon">📋</div>
      <div class="diff-title">Cardápio Variado</div>
      <div class="diff-text">Mais de 10 categorias: panquecas, massas, lanches, risoto, porções e muito mais. Tem opção pra todo tipo de fome.</div>
    </div>
    <div class="diff-card">
      <div class="diff-icon">📱</div>
      <div class="diff-title">Pedido Fácil</div>
      <div class="diff-text">Escolha pelo cardápio digital e peça direto no WhatsApp. Sem complicação, sem cadastro, sem app.</div>
    </div>
    <div class="diff-card">
      <div class="diff-icon">🔥</div>
      <div class="diff-title">Sabor Marcante</div>
      <div class="diff-text">Comida feita com capricho, visual que dá fome e gosto que faz voltar. Qualidade que você sente na primeira garfada.</div>
    </div>
    <div class="diff-card">
      <div class="diff-icon">📍</div>
      <div class="diff-title">Referência Local</div>
      <div class="diff-text">Marca conhecida em Taquaritinga. Presença forte no Instagram e reconhecida por quem é da cidade.</div>
    </div>
    <div class="diff-card">
      <div class="diff-icon">🕐</div>
      <div class="diff-title">Todos os Dias</div>
      <div class="diff-text">Aberto de segunda a domingo, das 18h às 23h30. Sempre pronto quando bater a fome.</div>
    </div>
    <div class="diff-card">
      <div class="diff-icon">🏍️</div>
      <div class="diff-title">Delivery Prático</div>
      <div class="diff-text">Receba na sua casa com rapidez. Peça pelo WhatsApp e acompanhe seu pedido sem estresse.</div>
    </div>
  </div>
</section>

<div class="divider"></div>
```

- [ ] **Step 2: Open in browser, scroll through sections**

Verify about section shows stats, categories grid is empty (will be filled by JS), and diferenciais grid shows 6 cards.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add about, categories placeholder, and diferenciais sections"
```

---

## Task 5: Add prova social, CTA, localização, and footer HTML

**Files:**
- Modify: `index.html` (insert after diferenciais divider, before `</main>` — also add closing `</main>`)

- [ ] **Step 1: Add remaining sections**

Insert after the last `<div class="divider"></div>` from Task 4:

```html
<!-- PROVA SOCIAL -->
<section class="social-proof">
  <div class="social-inner">
    <p class="section-label">Presença & Credibilidade</p>
    <h2 class="section-title">Marca presente no dia a dia de Taquaritinga</h2>

    <div class="social-cards">
      <div class="social-card">
        <div class="social-card-icon">📸</div>
        <h3>Presença no Instagram</h3>
        <p>Acompanhe novidades, promoções e pratos no @panqueca.calabrese. Conteúdo real, comida de verdade.</p>
      </div>
      <div class="social-card">
        <div class="social-card-icon">💬</div>
        <h3>Contato Direto</h3>
        <p>Atendimento rápido e pessoal pelo WhatsApp. Tire dúvidas, faça pedidos e receba atualizações.</p>
      </div>
      <div class="social-card">
        <div class="social-card-icon">⭐</div>
        <h3>Reconhecimento Local</h3>
        <p>Cardápio variado para diferentes gostos. Opção de referência pra quem busca sabor em Taquaritinga.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <div class="cta-inner">
    <p class="section-label section-label--gold">Bateu a fome?</p>
    <h2 class="section-title">Faça seu <span>pedido</span> agora</h2>
    <p class="cta-sub">Escolha seu favorito no cardápio digital e peça pelo WhatsApp. Sabor, praticidade e qualidade na sua porta.</p>
    <div class="cta-buttons">
      <a href="https://panquecacalabresetaquaritinga.eatfood.app/category" target="_blank" rel="noopener" class="btn btn--primary">📋 Abrir Cardápio</a>
      <a href="https://wa.me/5516997330681" target="_blank" rel="noopener" class="btn btn--whatsapp">📱 Pedir no WhatsApp</a>
    </div>
  </div>
</section>

<!-- LOCALIZAÇÃO -->
<section class="localizacao" id="contato">
  <p class="section-label" style="text-align:center">Onde Estamos</p>
  <h2 class="section-title" style="text-align:center">Localização & Contato</h2>

  <div class="loc-grid">
    <div class="loc-info">
      <h3>Encontre a Panqueca Calabrese</h3>

      <div class="loc-item">
        <div class="loc-item-icon">📍</div>
        <div class="loc-item-text">
          <strong>Endereço</strong>
          Av. Paulo Roberto Scandar, 215 - Bela Vista<br>Taquaritinga - SP, 15900-001
        </div>
      </div>

      <div class="loc-item">
        <div class="loc-item-icon">📞</div>
        <div class="loc-item-text">
          <strong>Telefone / WhatsApp</strong>
          <a href="tel:+5516997330681">(16) 99733-0681</a>
        </div>
      </div>

      <div class="loc-item">
        <div class="loc-item-icon">🕐</div>
        <div class="loc-item-text">
          <strong>Horário</strong>
          Todos os dias · 18h às 23h30
        </div>
      </div>

      <div class="loc-item">
        <div class="loc-item-icon">📸</div>
        <div class="loc-item-text">
          <strong>Instagram</strong>
          <a href="https://www.instagram.com/panqueca.calabrese/" target="_blank" rel="noopener">@panqueca.calabrese</a>
        </div>
      </div>

      <div class="loc-item">
        <div class="loc-item-icon">📋</div>
        <div class="loc-item-text">
          <strong>Cardápio Digital</strong>
          <a href="https://panquecacalabresetaquaritinga.eatfood.app/category" target="_blank" rel="noopener">Acesse o cardápio completo</a>
        </div>
      </div>

      <div class="loc-buttons">
        <a href="https://wa.me/5516997330681" target="_blank" rel="noopener" class="btn btn--whatsapp" style="padding:12px 20px;font-size:13px">📱 WhatsApp</a>
        <a href="https://www.google.com/maps/search/?api=1&query=Av.+Paulo+Roberto+Scandar+215+Taquaritinga+SP" target="_blank" rel="noopener" class="btn btn--outline" style="padding:12px 20px;font-size:13px">🗺️ Abrir no Mapa</a>
      </div>
    </div>

    <div class="loc-map" id="mapContainer">
      <!-- Google Maps iframe loaded lazily by JS -->
    </div>
  </div>
</section>

</main>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand">PANQUECA <span>CALABRESE</span></div>
      <p class="footer-desc">Sabor, variedade e praticidade em Taquaritinga - SP. Panquecas, massas, lanches e muito mais, todos os dias das 18h às 23h30.</p>
    </div>
    <div>
      <h4>Links Rápidos</h4>
      <ul class="footer-links">
        <li><a href="https://panquecacalabresetaquaritinga.eatfood.app/category" target="_blank" rel="noopener">Cardápio Digital</a></li>
        <li><a href="https://www.instagram.com/panqueca.calabrese/" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="https://wa.me/5516997330681" target="_blank" rel="noopener">WhatsApp</a></li>
        <li><a href="#contato">Localização</a></li>
      </ul>
    </div>
    <div>
      <h4>Contato</h4>
      <ul class="footer-links">
        <li><a href="tel:+5516997330681">(16) 99733-0681</a></li>
        <li><a href="https://www.instagram.com/panqueca.calabrese/" target="_blank" rel="noopener">@panqueca.calabrese</a></li>
        <li><span style="font-size:12px;color:rgba(255,255,255,0.35)">Av. Paulo Roberto Scandar, 215<br>Bela Vista - Taquaritinga/SP</span></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Panqueca Calabrese. Todos os direitos reservados.</span>
    <span>Taquaritinga - SP</span>
  </div>
</footer>

<!-- WhatsApp Float -->
<a href="https://wa.me/5516997330681" target="_blank" rel="noopener" class="whatsapp-float" title="Pedir no WhatsApp">💬</a>
```

- [ ] **Step 2: Open in browser, scroll all sections**

Verify all 8 sections + footer render correctly. Check:
- Prova social with 3 cards
- CTA with 2 buttons
- Localização with contact info (map placeholder empty — filled by JS later)
- Footer with 3 columns
- WhatsApp float visible at bottom-right
- Mobile: footer stacks to 1 column, loc-grid stacks

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add social proof, CTA, location, footer, and WhatsApp float"
```

---

## Task 6: Add JavaScript — Firestore integration, category rendering, promotions, lazy map

**Files:**
- Modify: `index.html` (add inline `<script>` block before the closing `</body>`)

- [ ] **Step 1: Add the complete inline JavaScript**

Insert the following `<script>` block after the `<script src="promocoes.js"></script>` line and before `</body>`:

```html
<script>
(function() {
  // ===== FIRESTORE CONFIG =====
  var FIRESTORE_PROJECT = 'clientes-admin-a2258';
  var RESTAURANT_SLUG = 'panqueca-calabrese';
  var FIRESTORE_BASE = 'https://firestore.googleapis.com/v1/projects/' + FIRESTORE_PROJECT + '/databases/(default)/documents/restaurants/' + RESTAURANT_SLUG + '/data/';
  var isLocal = location.protocol === 'file:';

  // ===== FIRESTORE PARSER (same as Marieta) =====
  function parseFirestoreValue(val) {
    if (val.stringValue !== undefined) return val.stringValue;
    if (val.booleanValue !== undefined) return val.booleanValue;
    if (val.integerValue !== undefined) return Number(val.integerValue);
    if (val.doubleValue !== undefined) return val.doubleValue;
    if (val.nullValue !== undefined) return null;
    if (val.arrayValue) return (val.arrayValue.values || []).map(parseFirestoreValue);
    if (val.mapValue) {
      var obj = {};
      var fields = val.mapValue.fields || {};
      for (var key in fields) obj[key] = parseFirestoreValue(fields[key]);
      return obj;
    }
    return val;
  }

  function fetchFirestore(docName) {
    return fetch(FIRESTORE_BASE + docName)
      .then(function(r) { return r.json(); })
      .then(function(doc) {
        if (doc.fields && doc.fields.content) {
          return parseFirestoreValue(doc.fields.content);
        }
        return null;
      });
  }

  // ===== CATEGORY ICON MAP =====
  var defaultIcons = {
    'panquecas-salgadas': '🥞',
    'panquecas-doces': '🍫',
    'massas': '🍝',
    'macarrao-in-box': '🍜',
    'lanches-carne': '🍔',
    'lanches-frango': '🍗',
    'risoto': '🍚',
    'porcoes': '🍟',
    'bebidas': '🥤',
    'diversos': '✨'
  };

  var defaultDescs = {
    'panquecas-salgadas': 'Recheios irresistíveis',
    'panquecas-doces': 'Sobremesa perfeita',
    'massas': 'Sabor tradicional',
    'macarrao-in-box': 'Prático e saboroso',
    'lanches-carne': 'Pra fome grande',
    'lanches-frango': 'Crocantes e suculentos',
    'risoto': 'Cremoso e especial',
    'porcoes': 'Para compartilhar',
    'bebidas': 'Refrescantes e geladas',
    'diversos': 'Surpresas do cardápio'
  };

  // ===== RENDER CATEGORIES =====
  function renderCategorias(data) {
    var grid = document.getElementById('catGrid');
    if (!grid) return;
    grid.innerHTML = '';

    data.forEach(function(tab) {
      var card = document.createElement('a');
      card.className = 'cat-card';
      card.href = 'https://panquecacalabresetaquaritinga.eatfood.app/category';
      card.target = '_blank';
      card.rel = 'noopener';

      var icon = tab.icon || defaultIcons[tab.id] || '🍽️';
      var desc = defaultDescs[tab.id] || '';

      card.innerHTML =
        '<div class="cat-icon">' + icon + '</div>' +
        '<div class="cat-name">' + tab.label + '</div>' +
        '<div class="cat-desc">' + desc + '</div>';

      grid.appendChild(card);
    });
  }

  // ===== RENDER PROMOÇÕES (same pattern as Marieta) =====
  function renderPromocoes(data) {
    var dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    var hoje = dias[new Date().getDay()];
    var block = document.getElementById('heroPromo');
    var content = document.getElementById('promoContent');
    if (!block || !content) return;

    var promos = data[hoje];
    if (!promos || promos.length === 0) return;

    promos.forEach(function(promo, i) {
      var span = document.createElement('span');
      span.className = 'promo-text' + (i === 0 ? ' active' : '');
      span.textContent = promo.texto;
      content.appendChild(span);
    });

    block.style.display = '';

    if (promos.length > 1) {
      var current = 0;
      setInterval(function() {
        var texts = content.querySelectorAll('.promo-text');
        texts[current].classList.remove('active');
        current = (current + 1) % texts.length;
        texts[current].classList.add('active');
      }, 4000);
    }
  }

  // ===== LOAD DATA =====
  if (!isLocal) {
    fetchFirestore('cardapio')
      .then(function(data) { if (data) renderCategorias(data); else renderCategorias(cardapioData); })
      .catch(function() { renderCategorias(cardapioData); });

    fetchFirestore('promocoes')
      .then(function(data) { if (data) renderPromocoes(data); else renderPromocoes(promocoesData); })
      .catch(function() { renderPromocoes(promocoesData); });
  } else {
    renderCategorias(cardapioData);
    renderPromocoes(promocoesData);
  }

  // ===== LAZY LOAD GOOGLE MAPS =====
  var mapContainer = document.getElementById('mapContainer');
  if (mapContainer) {
    var mapObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var iframe = document.createElement('iframe');
          iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d-48.5094!3d-21.4050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f0!2sPanqueca+Calabrese!5e0!3m2!1spt-BR!2sbr';
          iframe.allowFullscreen = true;
          iframe.loading = 'lazy';
          iframe.title = 'Localização Panqueca Calabrese';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.border = '0';
          mapContainer.appendChild(iframe);
          mapObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    mapObserver.observe(mapContainer);
  }

  // ===== SCROLL: HIDE/SHOW NAV =====
  var lastScroll = 0;
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function() {
    var current = window.pageYOffset;
    if (current > lastScroll && current > 80) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  });
  nav.style.transition = 'transform 0.3s ease';
})();
</script>
```

- [ ] **Step 2: Open in browser and verify all dynamic features**

Check:
- Category grid populated with 10 cards (from local data since opened as `file:`)
- Each card shows icon, name, description
- Cards link to EatFood menu
- Promotions banner hidden (all days empty in default data)
- Edit `promocoes.js` temporarily to add a promo for today's day, reload — verify promo appears
- Scroll down to map section — iframe loads lazily
- Scroll down and up — navbar hides/shows
- Browser console: no errors

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Firestore integration, category rendering, promotions, and lazy map"
```

---

## Task 7: Final verification and polish

**Files:**
- Modify: `index.html` (minor fixes if needed)

- [ ] **Step 1: Test responsive breakpoints**

Open in browser, use DevTools responsive mode:
- **375px (mobile):** hamburger menu works, hero buttons stack vertically, cat-grid 2 columns, footer 1 column, loc-grid stacks
- **768px (tablet):** nav links appear, grids adjust
- **1200px+ (desktop):** full layout, all grids at max columns

- [ ] **Step 2: Test all links**

Click every link and verify it opens the correct destination:
- WhatsApp links → `https://wa.me/5516997330681`
- Instagram links → `https://www.instagram.com/panqueca.calabrese/`
- Cardápio links → `https://panquecacalabresetaquaritinga.eatfood.app/category`
- Google Maps link → Maps with address
- Phone link → triggers tel: protocol
- Internal nav links → smooth scroll to sections

- [ ] **Step 3: Test promotions rotation**

Edit `promocoes.js` to add 2 promos for today's day:

```javascript
"sabado": [{ "texto": "Panqueca em dobro no sábado!" }, { "texto": "Delivery grátis até 20h", "destaque": true }]
```

(Use the actual current day name.) Reload and verify:
- Promo banner appears below hero hours
- Text rotates every 4 seconds with fade transition
- Remove the test promos and revert `promocoes.js`

- [ ] **Step 4: Validate HTML**

Check the browser console for any errors or warnings. Verify:
- No 404s for resources
- No JS errors
- Google Fonts loading correctly (text renders in Bebas Neue / Inter)

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Panqueca Calabrese landing page

Landing page with:
- Responsive design (mobile-first)
- Firebase Firestore integration for dynamic menu and promotions
- Local data fallback (cardapio.js, promocoes.js)
- SEO meta tags for local search
- WhatsApp integration
- Lazy-loaded Google Maps
- Auto-hiding navbar on scroll"
```

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Data files (cardapio.js + promocoes.js) | Create: `cardapio.js`, `promocoes.js` |
| 2 | HTML shell with CSS | Create: `index.html` |
| 3 | Navbar + Hero HTML | Modify: `index.html` |
| 4 | About + Categories + Diferenciais | Modify: `index.html` |
| 5 | Social + CTA + Location + Footer | Modify: `index.html` |
| 6 | JavaScript (Firestore, rendering, map) | Modify: `index.html` |
| 7 | Final verification and polish | Modify: `index.html` |
