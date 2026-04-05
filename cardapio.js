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
          { "nome": "Panqueca - Calábria", "preco": 26.99, "destaque": true },
          { "nome": "Panqueca - Don Calabrese", "preco": 26.99 },
          { "nome": "Panqueca - Carijó", "preco": 26.99 },
          { "nome": "Panqueca - Cremily", "preco": 26.99 },
          { "nome": "Panqueca - Speziato", "preco": 26.99 },
          { "nome": "Panqueca - Milho", "preco": 26.99 },
          { "nome": "Panqueca Da Nonna", "preco": 27.99 },
          { "nome": "Panqueca Mamma Mia", "preco": 27.99 },
          { "nome": "Panqueca - Da Laura", "preco": 28.99 },
          { "nome": "Panqueca - Palmito", "preco": 28.99 },
          { "nome": "Panqueca - Peito de Peru", "preco": 28.99 },
          { "nome": "Panqueca - Presunto", "preco": 28.99 },
          { "nome": "Panqueca - Canadense", "preco": 29.99 },
          { "nome": "Panqueca - Don Pig", "preco": 29.99 },
          { "nome": "Panqueca - Atum", "preco": 30.99 },
          { "nome": "Panqueca - Barbecue", "preco": 30.99 },
          { "nome": "Panqueca - Baronesa", "preco": 30.99 },
          { "nome": "Panqueca - Brócolis", "preco": 30.99 },
          { "nome": "Panqueca - Don Corleone", "preco": 30.99 },
          { "nome": "Panqueca - Don Onofre", "preco": 30.99 },
          { "nome": "Panqueca - Du Chef", "preco": 30.99 },
          { "nome": "Panqueca - Medalhão", "preco": 30.99 },
          { "nome": "Panqueca - 4 Queijos", "preco": 32.99 },
          { "nome": "Panqueca - Portuguesa", "preco": 32.99 },
          { "nome": "Panqueca - 5 Queijos", "preco": 33.99 }
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
          { "nome": "Panqueca - Chocolate", "preco": 24.99 },
          { "nome": "Panqueca - La Creme", "preco": 25.99, "destaque": true },
          { "nome": "Panqueca - Romeu e Julieta", "preco": 25.99 },
          { "nome": "Trufas", "preco": 7.00 }
        ]
      }
    ]
  },
  {
    "id": "massas",
    "label": "Massas",
    "icon": "🍝",
    "categorias": []
  },
  {
    "id": "macarrao-in-box",
    "label": "Macarrão in Box",
    "icon": "🍜",
    "categorias": [
      {
        "titulo": "Macarrão in Box",
        "itens": [
          { "nome": "Macarrão c/ 3 Ingredientes", "preco": 29.99 },
          { "nome": "Macarrão c/ 5 Ingredientes", "preco": 31.99, "destaque": true },
          { "nome": "Macarrão c/ 8 Ingredientes", "preco": 33.99 }
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
          { "nome": "X Burguer", "preco": 14.50 },
          { "nome": "X Bacon", "preco": 14.80 },
          { "nome": "X Egg", "preco": 14.50 },
          { "nome": "X Salada", "preco": 15.00 },
          { "nome": "Pé de Pano", "preco": 15.50 },
          { "nome": "X Salada Bacon", "preco": 15.50 },
          { "nome": "X Bacon Egg", "preco": 15.80 },
          { "nome": "X Burguer Duplo", "preco": 16.00 },
          { "nome": "X Salada Bacon Egg", "preco": 16.50 },
          { "nome": "Mimosa", "preco": 16.50, "destaque": true }
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
          { "nome": "Marylou", "preco": 14.80 },
          { "nome": "X Frango", "preco": 15.80 },
          { "nome": "X Frango Egg", "preco": 15.80 },
          { "nome": "X Frango Salada", "preco": 15.99 },
          { "nome": "X Frango Bacon", "preco": 16.50 },
          { "nome": "X Frango Salada Bacon", "preco": 16.99 },
          { "nome": "X Frango Bacon Egg", "preco": 17.00 },
          { "nome": "Big Bird", "preco": 17.30, "destaque": true },
          { "nome": "X Frango Duplo", "preco": 18.00 },
          { "nome": "X Frango Salada Bacon Egg", "preco": 18.50 }
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
          { "nome": "Risoto 4 Queijos", "preco": 39.99, "destaque": true },
          { "nome": "Risoto Cabotiá com Carne Seca", "preco": 39.99 }
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
        "titulo": "Espetos",
        "itens": [
          { "nome": "Espeto Queijo Coalho", "preco": 8.99 },
          { "nome": "Espeto Frango", "preco": 8.99 },
          { "nome": "Espeto Carne", "preco": 8.99 },
          { "nome": "Espeto Linguiça", "preco": 8.99 },
          { "nome": "Espeto Kafta", "preco": 8.99 }
        ]
      },
      {
        "titulo": "Porções",
        "itens": [
          { "nome": "Amendoim", "preco": 6.00 },
          { "nome": "Pururuca", "preco": 19.00 },
          { "nome": "Salame", "preco": 23.00 },
          { "nome": "Calabresa Acebolada", "preco": 23.00 },
          { "nome": "Carne", "preco": 39.50 },
          { "nome": "Carne Acebolada", "preco": 42.00 },
          { "nome": "Carne com Catupiry", "preco": 42.00 },
          { "nome": "Carne Catupiry e Alho Frito", "preco": 44.00 },
          { "nome": "Carne Catupiry e Bacon", "preco": 44.50 },
          { "nome": "Carne com Parmesão", "preco": 47.50, "destaque": true }
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
        "titulo": "Águas e Refrigerantes",
        "itens": [
          { "nome": "Água sem Gás", "preco": 3.50 },
          { "nome": "Água com Gás", "preco": 3.50 },
          { "nome": "Água Tônica", "preco": 4.50 },
          { "nome": "Coca Cola Lata", "preco": 5.50 },
          { "nome": "Coca Cola Zero Lata", "preco": 5.50 },
          { "nome": "Guaraná Lata Antártica", "preco": 5.50 },
          { "nome": "Fanta Laranja Lata", "preco": 5.50 },
          { "nome": "Fanta Uva Lata", "preco": 5.50 },
          { "nome": "Sprite Lata", "preco": 5.50 },
          { "nome": "H2O Limão", "preco": 7.00 },
          { "nome": "H2O Limoneto", "preco": 7.00 },
          { "nome": "Sprite Lemon Fresh 510ml", "preco": 7.00 }
        ]
      },
      {
        "titulo": "Sucos",
        "itens": [
          { "nome": "Suco Frutas Cítricas", "preco": 3.00 },
          { "nome": "Suco Laranja com Acerola", "preco": 3.00 }
        ]
      },
      {
        "titulo": "Cervejas",
        "itens": [
          { "nome": "Cerveja Heineken Lata 0 Álcool", "preco": 6.00 },
          { "nome": "Cerveja Malzbier Itaipava", "preco": 6.00 },
          { "nome": "Cerveja Império Puro Malte", "preco": 7.49 },
          { "nome": "Cerveja Império Lager", "preco": 7.49 },
          { "nome": "Cerveja Antarctica Subzero", "preco": 7.50 },
          { "nome": "Cerveja Amstel 600ml", "preco": 11.00 },
          { "nome": "Cerveja Antártica", "preco": 12.00 },
          { "nome": "Cerveja Skol", "preco": 13.00 },
          { "nome": "Cerveja Brahma", "preco": 13.00 },
          { "nome": "Cerveja Original 600ml", "preco": 13.00 },
          { "nome": "Cerveja Heineken", "preco": 16.00 }
        ]
      },
      {
        "titulo": "Chopp e Drinks",
        "itens": [
          { "nome": "Chopp Império Puro Malte 350ml", "preco": 7.90 },
          { "nome": "Chopp Império Puro Malte 500ml", "preco": 10.90 },
          { "nome": "Vinho de Chopp Lata 473ml", "preco": 12.00 },
          { "nome": "Caipirinha", "preco": 15.00 }
        ]
      },
      {
        "titulo": "Vinhos",
        "itens": [
          { "nome": "Vinho Taça", "preco": 10.00 },
          { "nome": "Vinho Garrafa", "preco": 30.00 }
        ]
      }
    ]
  },
  {
    "id": "diversos",
    "label": "Diversos",
    "icon": "✨",
    "categorias": []
  }
];
