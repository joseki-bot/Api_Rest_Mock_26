const express = require("express");
const routes = require("./routes");
const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
