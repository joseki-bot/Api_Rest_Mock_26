const pedidos = require("./pedidos.mock.js");

function criarPedido(req, res) {
  let novoId;
  const dados = req.body;

  if (pedidos.length > 0) {
    novoId = pedidos[pedidos.length - 1].id + 1;
  } else {
    novoId = 1;
  }

  if (!dados.cliente || !dados.lanche || dados.valor === undefined) {
    return res.status(400).json({
      error: "ERRO 400: Dados incompletos para verificação do pedido.",
    });
  }

  const novoPedido = {
    id: novoId,
    cliente: dados.cliente,
    lanche: dados.lanche,
    adicionais: dados.adicionais,
    valor: dados.valor,
    status: "pendente",
  };

  pedidos.push(novoPedido);
  return res.status(201).json(novoPedido);
}

/* */

function listarPedidos(req, res) {
  return res.status(200).json(pedidos);
}

/**/

function filtroStatus(req, res) {
  const status = req.query.status;

  if (!status) {
    return res.status(200).json(pedidos);
  }

  const filtro = pedidos.filter((pedido) => {
    return pedido.status === status;
  });

  return res.status(200).json(filtro);
}

/**/

function buscarPorId(req, res) {
  const id = req.params.id;

  const idPedido = pedidos.find((ID) => ID.id === parseInt(id));

  if (!idPedido) {
    return res.status(404).json({
      erro: "Pedido não encontrado",
    });
  }
  return res.status(200).json(idPedido);
}

/**/

function encontrarPedido(id) {
  return pedidos.find((pedido) => pedido.id === Number(id));
}

/* */

function atualizarPedido(req, res) {
  const Pedido = encontrarPedido(req.params.id);
  const { cliente, lanche, adicionais, valor, status } = req.body;

  if (!Pedido) {
    return res.status(404).json("Usuario não encontrado");
  }

  const Att = {
    id: Pedido.id,
    cliente: cliente,
    lanche: lanche,
    adicionais: adicionais,
    valor: valor,
    status: status,
  };

  Object.assign(Pedido, Att);
  return res.status(200).json(Pedido);
}

/* */

function atualizarStatus(req, res) {
  const Pedido = encontrarPedido(req.params.id);
  const { status } = req.body;

  if (!Pedido) {
    return res.status(404).json({
      erro: "Pedido não encontrado",
    });
  }

  if (
    status !== "pendente" &&
    status !== "preparando" &&
    status !== "pronto" &&
    status !== "entregue"
  ) {
    return res.status(400).json("O status: " + status + " é Inválido");
  }

  Pedido.status = status;
  return res.status(200).json(Pedido);
}

/* */

function deletarPedido(req, res) {
  const indice = pedidos.findIndex((pedido) => {
    return pedido.id === Number(req.params.id);
  });

  if (indice === -1) {
    return res.status(404).json({
      erro: "Pedido não encontrado",
    });
  }

  const Salva = encontrarPedido(req.params.id);
  const P = Salva;

  pedidos.splice(indice, 1);
  return res.status(200).json({
    mensagem: "Pedido apagado com sucesso!",
    pedido: P,
  });
}
/*==========================================================*/
/* const id = req.params.id;

  const idPedido = pedidos.find((ID) => ID.id === parseInt(id));

  if (!idPedido) {
    return res.status(404).json({
      erro: "Pedido não encontrado",
    });
  }
  return res.status(200).json(idPedido);
*/
/*=== EXPORTANDO ===*/
module.exports = {
  criarPedido,
  listarPedidos,
  filtroStatus,
  buscarPorId,
  atualizarPedido,
  atualizarStatus,
  deletarPedido,
};
