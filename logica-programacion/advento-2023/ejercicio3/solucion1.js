const original = 'abcd'
const modified = 'abcde'

const findNaughtyStep = (original, modified) => {
  const lengthDiff = Math.min(original.length, modified.length)

  for (let i = 0; i < lengthDiff; i++) {
    if (original[i] !== modified[i])
      return original.length < modified.length ? modified[i] : original[i]
  }
  return original.length < modified.length ? modified[lengthDiff] : ''
}

console.log(findNaughtyStep(original, modified))
