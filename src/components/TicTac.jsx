import { useState } from 'react'
import './css/tictac.css'
import confetti from 'canvas-confetti'
import { Square } from './pages/works/Square.jsx'
import { turns } from '../constans.js'
import { whoWinner, checkEndGame } from '../logic/Board.jsx'
import { WinnerModal } from './pages/works/WinnerModal.jsx'
import { Board } from './pages/works/Board.jsx'
import { clearGameStorage, saveGameStorage } from '../logic/storage/index.js'
import pokemon from './../imgs/pokemon.webp'
import { Footer } from '../components/pages/home/Footer'

export function TicTac () {
  const urlpokemon = 'https://rommelpalma123.github.io/api-pokemon-github'
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.x
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.x)
    setWinner(null)

    clearGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return // detiene que se pueda cambiar el estado una vez dado el turno
    const newBoard = [...board] // creamon una copia del board para no mutar el array inicial
    newBoard[index] = turn // cambiamos las posiciones de los turnos
    setBoard(newBoard) // actualiza
    const newTurn = turn === turns.x ? turns.o : turns.x // cambiamos las posiciones o turno
    setTurn(newTurn)

    // guarda la partida
    saveGameStorage({ board: newBoard, turn: newTurn })

    const newWinner = whoWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <div>
      <div className='info-game'>
        <h4>
          En esta seccion podras encontrar unos de mis trabajos como
          desarollador, este trabajo es el famoso juego de tic tac o mas
          conocido como tres en raya, este proyecto esta realizado con react
        </h4>
        <h4>
          El objetivo de este pequeño juego es practicar logica de programacion
          para pasar el juego de la hoja comun a un entorno web y poder ser
          jugado por cualquier persona
        </h4>
      </div>
      <div className='body-tictac'>
        <main className='board'>
          <button onClick={resetGame}>Restart Game</button>
          <Board
            board={board}
            updateBoard={updateBoard}
          />
          <section className='turn'>
            <Square isSelected={turn === turns.x}>{turns.x}</Square>
            <Square isSelected={turn === turns.o}>{turns.o}</Square>
          </section>

          <WinnerModal
            resetGame={resetGame}
            winner={winner}
          />
        </main>
      </div>
      <div className='info-game'>
        <h4>
          Aqui encontraras otro trabajo realizado por mi persona, este trabajo
          consiste en consumir una api, la cual es api pokemon donde se trae una
          lista de todos los pokemons existentes y se muestra por pantalla
        </h4>
        <h4>
          Una vez traida la informacion, se puede seleccionar cualquier tipo de
          pokemon donde se mostrara mas a detalle sobre dicho pokemon y
          adicionalmente las evoluciones que el pokemon tiene
        </h4>
      </div>
      <div className='contenedor-imagen'>
        <a
          className='redireccion-pokemon'
          href={urlpokemon}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={pokemon}
            className='imagen-pokemon'
            alt='pagina de pokemon'
          />
        </a>
      </div>
      <Footer />
    </div>
  )
}
