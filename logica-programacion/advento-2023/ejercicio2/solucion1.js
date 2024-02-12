const test = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

const manufacture = (gifts, materials) => {
  return gifts.filter((item) =>
    item.split('').every((letter) => materials.includes(letter))
  )
}

console.log(manufacture(gifts2, materials2))
