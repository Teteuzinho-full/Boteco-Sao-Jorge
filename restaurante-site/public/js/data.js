/* ============================================================
   BOTECO SÃO JORGE — Dados do cardápio
   Edite aqui para alterar produtos, preços e categorias.
   ============================================================ */

const RESTAURANT = {
  name: "Boteco São Jorge",
  city: "Blumenau/SC",
  slogan: "Chopp, cerveja gelada e comida boa",
  phone: "(47) 99999-9999",
  whatsapp: "554799999999", // usar código do país + DDD, sem símbolos
  email: "contato@botecosaojorge.com.br",
  address: "Rua das Palmeiras, 320 — Velha, Blumenau/SC",
  hours: "Terça a sábado, a partir das 18h",
  instagram: "https://instagram.com/botecosaojorge",
  facebook: "https://facebook.com/botecosaojorge",
  minAge: "Ambiente recomendado para maiores de 13 anos, acompanhados dos responsáveis.",
  deliveryFee: 6.0
};

const EVENTS = [
  { day: "Sáb · 22/08", name: "Projeto Samba de Preto", desc: "Roda de samba ao vivo a partir das 21h, com clássicos e releituras.", img: "evento-samba.jpg", tag: "Samba" },
  { day: "Sex · fixo", name: "Muito Pagode", desc: "Roda de pagode pra fechar a semana, a partir das 20h30.", img: "evento-pagode.jpg", tag: "Pagode" },
  { day: "Qui · fixo", name: "Ao Vivo às Quintas", desc: "Música ao vivo a partir das 20h30, com o repertório do Juca.", img: "evento-quinta.jpg", tag: "Ao vivo" },
  { day: "Todo mês", name: "Samba de Raiz no Boteco", desc: "Roda de samba tradicional com instrumentos de corda e percussão — programação mensal fixa.", img: "evento-samba-raiz.jpg", tag: "Samba" }
];

const MENU = [
  {
    category: "Entradas & Petiscos",
    slug: "entradas",
    desc: "Pra começar bem, do jeito que boteco de verdade faz.",
    items: [
      { id: "p01", name: "Rango de Boteco", desc: "Fritas, coração de frango, calabresa acebolada e polenta frita, tudo na mesma travessa.", price: 54.9, img: "petisco-rango.jpg", tags: [] },
      { id: "p02", name: "Bolinho de Feijoada", desc: "Seis unidades com farofa crocante e molho de pimenta artesanal.", price: 32.9, img: "bolinho-feijoada.jpg", tags: [] },
      { id: "p03", name: "Torresmo de Barriga", desc: "Torresmo curado na casa, servido com vinagrete e mandioca frita.", price: 38.9, img: "torresmo.jpg", tags: ["alerg"] },
      { id: "p04", name: "Pastel do Boteco", desc: "Massa fina recheada de carne seca com catupiry, seis unidades.", price: 36.9, img: "pastel.jpg", tags: [] },
      { id: "p05", name: "Provolone na Chapa", desc: "Provolone grelhado com orégano, mel e torradas.", price: 34.9, img: "provolone.jpg", tags: ["veg"] },
      { id: "p06", name: "Aipim com Carne Seca", desc: "Aipim frito coberto com carne seca desfiada e cheiro-verde.", price: 42.9, img: "aipim-carne-seca.jpg", tags: [] }
    ]
  },
  {
    category: "Pratos Principais",
    slug: "pratos",
    desc: "Comida de boteco de respeito, feita na hora e com fartura.",
    items: [
      { id: "p07", name: "Picanha na Chapa", desc: "300g de picanha grelhada, arroz, farofa, vinagrete e fritas.", price: 79.9, img: "picanha.jpg", tags: [] },
      { id: "p08", name: "Costela no Bafo", desc: "Costela bovina lenta, mandioca e molho barbecue da casa.", price: 68.9, img: "costela.jpg", tags: [] },
      { id: "p09", name: "Filé à Parmegiana", desc: "Filé empanado, molho de tomate, muçarela gratinada e arroz.", price: 62.9, img: "parmegiana.jpg", tags: [] },
      { id: "p10", name: "Moqueca de Camarão", desc: "Camarões, leite de coco, dendê e pimentões, acompanha arroz e pirão.", price: 74.9, img: "moqueca.jpg", tags: ["alerg"] },
      { id: "p11", name: "Risoto de Cogumelos", desc: "Arroz arbóreo, mix de cogumelos frescos e parmesão.", price: 58.9, img: "risoto.jpg", tags: ["veg"] }
    ]
  },
  {
    category: "Hambúrgueres",
    slug: "hamburgueres",
    desc: "Pão brioche, blend da casa e ingredientes selecionados.",
    items: [
      { id: "p12", name: "São Jorge Burger", desc: "180g de blend, queijo prato, bacon, cebola caramelizada e molho da casa.", price: 44.9, img: "burger-classico.jpg", tags: [] },
      { id: "p13", name: "Burger do Dragão", desc: "180g de blend, cheddar, costela desfiada e molho picante.", price: 49.9, img: "burger-picante.jpg", tags: [] },
      { id: "p14", name: "Veggie do Boteco", desc: "Hambúrguer de grão-de-bico e cogumelos, queijo e rúcula.", price: 41.9, img: "burger-veggie.jpg", tags: ["veg"] }
    ]
  },
  {
    category: "Sobremesas",
    slug: "sobremesas",
    desc: "Pra fechar a noite com chave de ouro.",
    items: [
      { id: "p15", name: "Pudim de Leite", desc: "Receita da vó, calda de caramelo na medida certa.", price: 18.9, img: "pudim.jpg", tags: ["veg"] },
      { id: "p16", name: "Petit Gâteau", desc: "Bolo de chocolate com recheio cremoso e sorvete de creme.", price: 26.9, img: "petit-gateau.jpg", tags: ["veg"] }
    ]
  },
  {
    category: "Bebidas",
    slug: "bebidas",
    desc: "Chopp sempre gelado e cartas de bebidas pra todo gosto.",
    items: [
      { id: "p17", name: "Chopp Pilsen 500ml", desc: "Tirado na hora, sempre geladinho.", price: 14.9, img: "chopp.jpg", tags: [] },
      { id: "p18", name: "Refrigerante Lata", desc: "Coca-Cola, Guaraná ou Sprite.", price: 7.9, img: "refrigerante.jpg", tags: [] },
      { id: "p19", name: "Suco Natural 400ml", desc: "Maracujá, laranja ou limão.", price: 10.9, img: "suco.jpg", tags: ["veg"] }
    ]
  },
  {
    category: "Drinks",
    slug: "drinks",
    desc: "Coquetéis autorais da casa, feitos por quem entende do assunto.",
    items: [
      { id: "p20", name: "Caipirinha São Jorge", desc: "Cachaça artesanal, limão e um toque de gengibre.", price: 24.9, img: "caipirinha.jpg", tags: [] },
      { id: "p21", name: "Negroni do Boteco", desc: "Gin, Campari e vermute rosso, releitura da casa.", price: 32.9, img: "negroni.jpg", tags: [] },
      { id: "p22", name: "Moscow Mule", desc: "Vodka, gengibre e limão, servido na caneca de cobre.", price: 29.9, img: "moscow-mule.jpg", tags: [] }
    ]
  }
];
