export function uniao(conjuntos) {
  let conjuntosUnidos = [];

  for (let i = 0; i < conjuntos.length; i++) {
    for (let j = 0; j < conjuntos[i].length; j++) {
      if (conjuntosUnidos.length === 0) {
        conjuntosUnidos.push(conjuntos[i][j]);
      } else {
        let existe = false;
        for (let k = 0; k < conjuntosUnidos.length; k++) {
          if (conjuntosUnidos[k] === conjuntos[i][j]) {
            existe = true;
            break;
          }
        }
        if (!existe) {
          conjuntosUnidos.push(conjuntos[i][j]);
        }
      }
    }
  }

  return conjuntosUnidos;
}
