const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]

const findFirstRepeated = (gifts) => {
  return gifts.filter((item, index) => gifts.indexOf(item) !== index)?.[0] ?? -1
}

const firstRepeatId = findFirstRepeated(giftIds)
console.log(firstRepeatId)
