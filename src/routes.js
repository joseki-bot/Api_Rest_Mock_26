/* === IMPORTES === */
const { Router } = require("express");
const routes = Router();

const {
  criarPedido,
  listarPedidos,
  filtroStatus,
  buscarPorId,
  atualizarPedido,
  atualizarStatus,
  deletarPedido,
} = require("./controladores/pedidos.js");

/*======================================================*/

/* === ROTAS === */
routes.get("/", (req, res) => {
  //Servidor rodando
  return res.status(200).json({
    mensagem: "Servidor rodando",
  });
});

routes.post("/pedidos", criarPedido); // Manda os dados

routes.get("/pedidos", listarPedidos); // Mostra todos os pedidos

routes.get("/pedidos", filtroStatus); // Filtro por status

routes.get("/pedidos/:id", buscarPorId); // Biscar por id

routes.put("/pedidos/:id", atualizarPedido); // atualizar um pedido por id

routes.patch("/pedidos/:id/status", atualizarStatus); // muda o status do pedido

routes.delete("/pedidos/:id", deletarPedido); //Apagar pedido
/*======================================================*/

module.exports = routes;
