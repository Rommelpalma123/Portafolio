const original = 'abcd'
const modified = 'abcde'

const findNaughtyStep = (original, modified) => {
  let origin = original
  let compare = modified

  if (original.length < modified.length) {
    origin = modified
    compare = original
  }

  return origin.split('').find((mo, index) => mo !== compare[index]) ?? ''
}

console.log(findNaughtyStep(original, modified))
