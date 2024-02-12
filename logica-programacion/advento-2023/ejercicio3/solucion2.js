const original = 'abcd'
const modified = 'abcde'

const findNaughtyStep = (original, modified) => {
  const lengthDiff = modified.length - original.length

  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i])
      return lengthDiff > 0 ? modified[i] : original[i]
  }
  return lengthDiff > 0 ? modified[original.length] : ''
}

console.log(findNaughtyStep(original, modified))
