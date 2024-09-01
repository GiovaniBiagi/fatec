export function interseccao(conjuntoA, conjuntoB) {
  if (conjuntoA.length === 0 || conjuntoB.length === 0) {
    return response.status(400).json({ error: "Conjuntos vazios" });
  }

  if (conjuntoA.length === 0) {
    return response.json(conjuntoB);
  }

  if (conjuntoB.length === 0) {
    return response.json(conjuntoA);
  }

  let interseccao = [];
  const menorConjunto =
    conjuntoA.length > conjuntoB.length ? conjuntoB : conjuntoA;
  const maiorConjunto =
    conjuntoA.length > conjuntoB.length ? conjuntoA : conjuntoB;

  for (let i = 0; i < maiorConjunto.length; i++) {
    for (let j = 0; j < menorConjunto.length; j++) {
      if (maiorConjunto[i] === menorConjunto[j]) {
        interseccao.push(maiorConjunto[i]);
      }
      if (i + 1 === menorConjunto.length) {
        break;
      }
    }
  }

  return interseccao;
}
