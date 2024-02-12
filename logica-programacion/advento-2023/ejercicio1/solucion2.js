const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]

const findFirstRepeated = (gifts) => {
  const seen = {} // declaramos un observador para encontrar el primer valor repetido
  for (const gift of gifts) {
    // sirve para recorrer cada item del array gifts
    if (seen[gift]) return gift // verificamos por cada posicion si el valor se repite
    seen[gift] = true // por cada valor recorrido se le asigna un valor true
  }
  return -1 // si no encuentra un valor repetido devolvemos un valor -1 en vez de undefined
}

console.log(findFirstRepeated(giftIds2))
