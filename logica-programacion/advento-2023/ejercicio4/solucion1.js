const a = 'hola (odnum)'
const b = '(olleh) (dlrow)!'
const c = 'sa(u(cla)atn)s'

const decode = (message) => {
  const regex = /\(([^()]+)\)/

  while (message.includes('(')) {
    const match = message.match(regex)[1]
    const effects = match.split('').reverse().join('')
    message = message.replace(`(${match})`, effects)
  }

  return message
}
console.log(decode(a))
console.log(decode(b))

console.log(decode(c))
