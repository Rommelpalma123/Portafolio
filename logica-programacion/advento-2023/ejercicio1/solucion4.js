const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]

const findFirstRepeated = (gifts) => {
  const seen = new Set() // declaramos un objeto especial Set como observador
  for (const gift of gifts) {
    if (seen.has(gift)) return gift
    seen.add(gift)
  }
  return -1
}
console.log(findFirstRepeated(giftIds2))
