let pedidos = [
  {
    id: 1,
    cliente: "Roberto",
    lanche: "Humburger com tudo",
    adicionais: ["sem carne", "adicional de queijo"],
    valor: 20,
    status: "preparando",
  },

  {
    id: 2,
    cliente: "Julia",
    lanche: "Humburger Porco",
    adicionais: ["Adicional de Queijo"],
    valor: 15,
    status: "pendente",
  },

  {
    id: 3,
    cliente: "Flávio",
    lanche: "Hamburger estilo Americano",
    adicionais: ["sem katsup", "sem tomate"],
    valor: 13,
    status: "pronto",
  },

  {
    id: 4,
    cliente: "Jose",
    lanche: "Hamburger de Frango",
    adicionais: ["Adicional de Maionese"],
    valor: 10,
    status: "entregue",
  },
];

module.exports = pedidos;
