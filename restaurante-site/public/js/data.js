/* ============================================================
   BOTECO SÃO JORGE — Dados do cardápio (cardápio real da casa)
   Preços são estimativas — o dono vai ajustar aos poucos para
   bater com os valores praticados no balcão.
   ============================================================ */

const RESTAURANT = {
  name: "Boteco São Jorge",
  city: "Blumenau/SC",
  slogan: "Chopp, cerveja gelada e comida boa",
  phone: "(47) 99999-9999",
  whatsapp: "554799999999", // usar código do país + DDD, sem símbolos
  email: "contato@botecosaojorge.com.br",
  address: "Rua Curt Hering, 149, Blumenau, Santa Catarina, 89010-030",
  hours: "Terça a sábado, a partir das 18h",
  instagram: "https://instagram.com/botecosaojorge",
  facebook: "https://facebook.com/botecosaojorge",
  minAge: "Ambiente recomendado para maiores de 13 anos, acompanhados dos responsáveis.",
  deliveryFee: 6.0
};

const EVENTS = [
  { day: "Sáb · 22/08", name: "Projeto Samba de Preto", desc: "Roda de samba ao vivo a partir das 21h. Lugar de samba é no boteco.", img: "evento-samba.jpg", tag: "Samba" },
  { day: "Sex · 21/08", name: "Sexta de Muito Pagode", desc: "Grupo Di Tudo ao vivo, a partir das 21h. Entrada free.", img: "evento-pagode.jpg", tag: "Pagode" },
  { day: "Qui · fixo", name: "Ao Vivo às Quintas", desc: "Roda de música ao vivo a partir das 20h30.", img: "evento-quinta.jpg", tag: "Ao vivo" },
  { day: "Todo mês", name: "Samba de Raiz no Boteco", desc: "Roda de samba tradicional com instrumentos de corda e percussão — programação mensal fixa.", img: "evento-samba-raiz.jpg", tag: "Samba" }
];

/* Sequência de Petiscos — menu degustação servido em 3 tempos.
   Não é um item avulso: é uma experiência à parte, com seção própria no site. */
const SEQUENCIA_PETISCOS = {
  title: "Sequência de Petiscos",
  price: 44.9,
  unit: "por pessoa",
  days: "Servimos terça, quarta e quinta",
  img: "sequencia-petiscos.jpg",
  rounds: [
    { name: "Primeiro Tempo", items: ["Batata frita", "Caldinho de feijão", "Mini frigideira do Jorge", "Coxinha da asa empanada e frita"] },
    { name: "Segundo Tempo", items: ["Bolinho de abóbora com charque", "Bolinho de polenta com queijo", "Bolinho de carne recheado com gorgonzola"] },
    { name: "Terceiro Tempo", items: ["Iscas de frango empanado", "Mix de linguiças Blumenau e calabresa, flambadas na cachaça"] }
  ],
  note: "E no final você pode escolher 2 itens que mais gostou para repetir."
};

const MENU = [
  {
    category: "Bolinhos & Petiscos",
    slug: "petiscos",
    desc: "Os queridinhos da casa, fritos na hora e feitos pra dividir.",
    items: [
      { id: "b01", name: "Bolinhos Rio do Oeste", desc: "Bolinho de polenta especial, com recheio de queijo. Acompanha maionese, ketchup e mostarda. (6 unid.)", price: 32.9, img: "bolinhos-rio-oeste.jpg", tags: ["veg"] },
      { id: "b02", name: "Bolinhos do Jorge", desc: "Bolinho de carne recheado com um generoso pedaço de queijo gorgonzola. Acompanha maionese, ketchup e mostarda. (4 unid.)", price: 34.9, img: "bolinhos-do-jorge.jpg", tags: [] },
      { id: "b03", name: "Ô Xente", desc: "Bolinho de abóbora com carne seca desfiada e refogada na cebola. Acompanha maionese, ketchup e mostarda. (6 unid.)", price: 33.9, img: "bolinho-o-xente.jpg", tags: [] },
      { id: "b04", name: "Porção Triplo Guerreiro", desc: "Batata frita + bolinho de carne bovina recheado com gorgonzola (6 unid.) + polenta frita + iscas de frango empanada e frita. Acompanha mostarda, ketchup e maionese.", price: 64.9, img: "porcao-triplo-guerreiro.jpg", tags: [] },
      { id: "b05", name: "Sushi de Alemão", desc: "Famoso rolmops (1 unid.). Quer impressionar a menina? Prove!", price: 14.9, img: "", tags: [] },
      { id: "b06", name: "Porco Esbelto", desc: "Porção de torresmo de bacon crocante. Causa dependência física e mental.", price: 36.9, img: "", tags: [] },
      { id: "b07", name: "Coxinha Asinhas do Jorge", desc: "Porção com 8 unidades. Acompanha molho da casa.", price: 38.9, img: "", tags: [] },
      { id: "b08", name: "Batata Tradicional", desc: "Batata sequinha e crocante. Acompanha maionese, ketchup e mostarda.", price: 28.9, img: "", tags: ["veg"] },
      { id: "b09", name: "Polentinha Frita", desc: "Tradicional polenta frita, crocante e quentinha. Acompanha maionese, ketchup e mostarda.", price: 26.9, img: "", tags: ["veg"] },
      { id: "b10", name: "Caldinho de Feijão Copo", desc: "Delicioso caldo de feijão servido no copo.", price: 12.9, img: "caldinho-feijao.jpg", tags: [] }
    ]
  },
  {
    category: "Chapa Quente",
    slug: "chapa",
    desc: "Alegria no pão e na chapa — pra matar a fome com fartura.",
    items: [
      { id: "c01", name: "Mixxta do Jorge", desc: "Chapa com iscas de filé mignon suíno, linguiça Blumenau, calabresa e cebola em pétalas. Acompanha pão, farofa e batata frita especial.", price: 79.9, img: "chapa-mignom.jpg", tags: [] },
      { id: "c02", name: "Chapa de Mignom Suíno", desc: "Chapa de iscas de filé mignon suíno e cebola em pétalas. Acompanha pão, farofa e batata frita especial.", price: 72.9, img: "", tags: [] },
      { id: "c03", name: "Chapa de Frango", desc: "Chapa com iscas de filé de peito de frango e cebola em pétalas. Acompanha pão, farofa, molho e batata especial.", price: 62.9, img: "", tags: [] },
      { id: "c04", name: "Sanduba de Frango Acebolado", desc: "Iscas de frango com pétalas de cebola e queijo muçarela derretido em pão francês, acompanha batata frita tradicional e molhos.", price: 46.9, img: "", tags: [] }
    ]
  },
  {
    category: "Sobremesas",
    slug: "sobremesas",
    desc: "Pra fechar a noite com chave de ouro.",
    items: [
      { id: "s01", name: "Bola de Sorvete", desc: "Bola de sorvete com cobertura de chocolate — se tiver, leva de brinde um biju crocante.", price: 14.9, img: "", tags: ["veg"] },
      { id: "s02", name: "Chapa de Marshmallow", desc: "Com fundo de chocolate ao leite e 70% Nugali. Acompanha biscoito Maria tradicional. Serve 2 pessoas.", price: 32.9, img: "", tags: ["veg"] }
    ]
  },
  {
    category: "Coquetéis",
    slug: "coqueteis",
    desc: "Autorais da casa, com nome e estilo que só o São Jorge tem.",
    items: [
      { id: "d01", name: "Caipirinha Clássica", desc: "Cachaça e limão.", price: 18.9, img: "", tags: [] },
      { id: "d02", name: "Caipirinha Guerreiro", desc: "Vodka, limão siciliano e hortelã.", price: 22.9, img: "caipirinha-guerreiro.jpg", tags: [] },
      { id: "d03", name: "Porradão", desc: "Caipira de mix de frutas da casa com vodka. Equivalente a 6 caipirinhas — feito pra compartilhar.", price: 89.9, img: "porradao.jpg", tags: [] },
      { id: "d04", name: "Marquezine", desc: "Groselha, limão espremido e gin.", price: 26.9, img: "marquezine.jpg", tags: [] },
      { id: "d05", name: "Afrodite", desc: "Morango, espumante e leite condensado.", price: 28.9, img: "afrodite.jpg", tags: [] },
      { id: "d06", name: "Miúdo Bicudo", desc: "Campari, soda e licor de maçã, servido na caneca de elefante.", price: 27.9, img: "miudo-bicudo.jpg", tags: [] },
      { id: "d07", name: "Papagaio Português", desc: "Melancia, gengibre e hortelã, servido na caneca de coruja.", price: 26.9, img: "papagaio-portugues.jpg", tags: [] },
      { id: "d08", name: "Rabo de Galo", desc: "Tradicional bebida de boteco, origem incerta. Cachaça, vermute e bitter.", price: 20.9, img: "", tags: [] },
      { id: "d09", name: "Amolece os Dentes", desc: "Vodka ou cachaça e maracujá.", price: 22.9, img: "", tags: [] },
      { id: "d10", name: "Afundando na Grota", desc: "Underberg e energético.", price: 24.9, img: "", tags: [] },
      { id: "d11", name: "Ladeira Abaixo", desc: "Campari, limão espremido e tônica.", price: 24.9, img: "", tags: [] },
      { id: "d12", name: "Suíte Standart", desc: "Caipira monster em copo de luxúria, 1,5 litros — alegra umas 3 pessoas. Só tem de limão. E sério, equivalente a 6 caipirinhas.", price: 84.9, img: "suite-standart.jpg", tags: [] },
      { id: "d13", name: "Macerado", desc: "Faça seu drink: gelo, frutas maceradas e açúcar. Escolha entre Gin, Vodka, Bacardi ou Saquê.", price: 26.9, img: "macerado.jpg", tags: [] },
      { id: "d14", name: "Batidinha", desc: "Sabores: abacaxi, maracujá ou côco.", price: 22.9, img: "batidinha.jpg", tags: [] },
      { id: "d15", name: "Capismante", desc: "Caipira de frutas da estação feita com espumante.", price: 27.9, img: "", tags: [] },
      { id: "d16", name: "Piriquita Solta", desc: "Espumante e frozen de morangos.", price: 26.9, img: "", tags: [] },
      { id: "d17", name: "Não Duvida", desc: "Copo com cachaça abençoada e uma dose de doce líquido rosa. Vendido em unidade.", price: 12.9, img: "", tags: [] },
      { id: "d18", name: "Caipirinha de Frutas", desc: "Vodka ou cachaça e frutas mistas da casa.", price: 21.9, img: "", tags: [] },
      { id: "d19", name: "Caipirinha de Morango e/ou Kiwi", desc: "Vodka ou cachaça e morango e/ou kiwi.", price: 21.9, img: "", tags: [] },
      { id: "d20", name: "Saquerinha", desc: "Saquê e frutas mistas da casa.", price: 23.9, img: "", tags: [] },
      { id: "d21", name: "Caipiras de Absolut", desc: "Vodka Absolut e fruta a escolher.", price: 26.9, img: "", tags: [] },
      { id: "d22", name: "Marguerita Trad", desc: "Tequila, Cointreau e suco de limão, em taça encrustada com sal.", price: 32.9, img: "", tags: [] },
      { id: "d23", name: "Mojito", desc: "Bacardi, Cointreau, suco de limão, refrigerante de limão e hortelã.", price: 29.9, img: "", tags: [] },
      { id: "d24", name: "Aperol Spritz", desc: "O clássico italiano, refrescante e levemente amargo.", price: 28.9, img: "", tags: [] },
      { id: "d25", name: "Negroni", desc: "Gin, Campari e vermute rosso — releitura da casa.", price: 29.9, img: "", tags: [] }
    ]
  },
  {
    category: "Chopp & Sem Álcool",
    slug: "chopp",
    desc: "Chopp sempre gelado, e opções sem álcool pra todo mundo.",
    items: [
      { id: "e01", name: "Chopp Pilsen 300ml", desc: "Tirado na hora, sempre geladinho.", price: 8.9, img: "", tags: [] },
      { id: "e02", name: "Chopp Pilsen 500ml", desc: "Tirado na hora, sempre geladinho.", price: 14.9, img: "", tags: [] },
      { id: "e03", name: "Chopp Pilsen Litrão", desc: "Pra dividir com a mesa.", price: 28.9, img: "", tags: [] },
      { id: "e04", name: "Chopp Estilos 500ml", desc: "Consultar chopes especiais disponíveis na casa.", price: 24.9, img: "", tags: [] },
      { id: "e05", name: "Refrigerante", desc: "Consulte os sabores disponíveis.", price: 7.9, img: "", tags: ["veg"] },
      { id: "e06", name: "Suco Natural", desc: "Consulte os sabores disponíveis.", price: 10.9, img: "", tags: ["veg"] },
      { id: "e07", name: "Limonada Suíça", desc: "Receita da casa, bem geladinha.", price: 12.9, img: "", tags: ["veg"] },
      { id: "e08", name: "Soda Italiana", desc: "Consulte os sabores disponíveis.", price: 15.9, img: "", tags: ["veg"] },
      { id: "e09", name: "Água com/sem Gás", desc: "Com ou sem gás.", price: 6.9, img: "", tags: ["veg"] }
    ]
  },
  {
    category: "Destilados",
    slug: "destilados",
    desc: "Doses e garrafas das principais marcas — vodka, whisky, gin e tequila.",
    items: [
      { id: "f01", name: "Vodka Absolut", desc: "Dose ou garrafa.", price: 15.9, img: "", tags: [] },
      { id: "f02", name: "Vodka Smirnoff", desc: "Dose ou garrafa.", price: 12.9, img: "", tags: [] },
      { id: "f03", name: "Whisky Jack Daniel's", desc: "Dose ou garrafa. Também disponível Honey e Fire.", price: 22.9, img: "", tags: [] },
      { id: "f04", name: "Whisky Johnnie Walker Red Label", desc: "Dose ou garrafa.", price: 18.9, img: "", tags: [] },
      { id: "f05", name: "Gin Tanqueray", desc: "Dose ou garrafa.", price: 19.9, img: "", tags: [] },
      { id: "f06", name: "Tequila José Cuervo", desc: "Dose servida com sal e limão.", price: 16.9, img: "tequila-dose.jpg", tags: [] },
      { id: "f07", name: "Licor Amarula", desc: "Dose.", price: 14.9, img: "", tags: [] },
      { id: "f08", name: "Cachaça Especial (Amarelinha)", desc: "Dose.", price: 9.9, img: "", tags: [] }
    ]
  }
];
