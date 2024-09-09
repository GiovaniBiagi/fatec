import express from "express";
import { interseccao } from "./algorithms/interseccao.js";
import { classficacao } from "./algorithms/classficacao.js";
import { uniao } from "./algorithms/uniao.js";
import { diferenca } from "./algorithms/diferenca.js";
import { partes } from "./algorithms/partes.js";

const app = express();

app.use(express.json());

app.post("/uniao", (request, response) => {
  const { conjuntos } = request.body;
  if (conjuntos.length === 0) {
    return response.status(400).json({ error: "Conjunto vazio" });
  }

  const conjuntosUnidos = uniao(conjuntos);
  return response.json(conjuntosUnidos);
});

app.post("/classificacao", (request, reponse) => {
  const conjunto = request.body.conjunto;

  const conjuntoClassificado = classficacao(conjunto);

  return reponse.json(conjuntoClassificado);
});

app.post("/interseccao", (request, response) => {
  const { conjuntoA, conjuntoB } = request.body;

  return response.json(interseccao(conjuntoA, conjuntoB));
});

app.post("/diferenca", (request, response) => {
  const { conjuntoA, conjuntoB } = request.body;

  const diff = diferenca(conjuntoA, conjuntoB);

  return response.json(diff);
});

app.post("/partes", (request, response) => {
  const { conjunto } = request.body;
  console.log();
  if (!Array.isArray(conjunto) || conjunto.length < 0) {
    return response.status(400).json({ error: "Conjunto vazio" });
  }

  const conjuntoDasPartes = partes(conjunto);

  return response.json(conjuntoDasPartes);
});

app.listen(3000, () => {
  console.log("Server started on port 3333");
});
