const gifts = ['cat', 'game', 'socks']

export function wrapping (gifts) {
  return gifts.map((gift) => {
    const repetir = '*'.repeat(gift.length + 2)
    return `${repetir}\n*${gift}*\n${repetir}`
  })
}

// const wapper = wrapping(gifts)
// console.log(wapper)

const year = 2022
const holidays = ['01/06', '04/01', '12/25']

export const countHours = (year, holidays) => {
  return holidays.filter((holiday) => {
    const date = new Date(`${holiday}/${year}`)
    console.log(date)
    return date.getDay() % 6 !== 0
  }).length * 2
}

/* const count = countHours(year, holidays)
console.log(count) */
