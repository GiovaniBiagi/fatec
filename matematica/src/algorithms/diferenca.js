export function diferenca(conjuntoA, conjuntoB) {
  if (!Array.isArray(conjuntoA) || !Array.isArray(conjuntoB)) {
    throw new Error("Ambos os parâmetros devem ser arrays.");
  }

  let diferenca = [];

  // Percorre conjuntoA e adiciona elementos que não estão em conjuntoB
  for (let i = 0; i < conjuntoA.length; i++) {
    let encontrado = false;
    for (let j = 0; j < conjuntoB.length; j++) {
      if (conjuntoA[i] === conjuntoB[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      diferenca.push(conjuntoA[i]);
    }
  }

  // Percorre conjuntoB e adiciona elementos que não estão em conjuntoA
  for (let i = 0; i < conjuntoB.length; i++) {
    let encontrado = false;
    for (let j = 0; j < conjuntoA.length; j++) {
      if (conjuntoB[i] === conjuntoA[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      diferenca.push(conjuntoB[i]);
    }
  }

  return diferenca;
}
