const VAZIO = "VAZIO";
export function partes(conjunto) {
  let partes = [];

  for (let i = 0; i < conjunto.length; i++) {
    if (partes.length === 0) {
      partes.push(VAZIO);
    }
    partes.push(`{${conjunto[i]}}`);
  }

  return partes;
}
