import { WinnerCombos } from '../helpers/constans.js'

export const whoWinner = (boardToCheck) => {
  for (const combos of WinnerCombos) {
    // revisamos cada una de las posiciones ganadoras
    const [a, b, c] = combos
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  // revisa si en cada una de las posiciones los valores son diferentes de null
  return newBoard.every((square) => square !== null)
}
