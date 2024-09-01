export function classficacao(conjunto) {
  for (let i = 0; i < conjunto.length; i++) {
    for (let j = 0; j < conjunto.length; j++) {
      if (conjunto[i] < conjunto[j]) {
        let temp = conjunto[i];
        conjunto[i] = conjunto[j];
        conjunto[j] = temp;
      }
    }
  }
}
