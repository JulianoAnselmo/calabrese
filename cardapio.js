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
