let player1
let player2
const showWinner = document.getElementById('winner')
const image = document.getElementById('image')

const showBoard = document.getElementById('showBoard')

const Player = (name, marker) => {
  return { name, marker }
}

document.getElementById('addNames').addEventListener('click', () => {
  event.preventDefault()

  const firstName = document.getElementById('player-1').value
  const secondName = document.getElementById('player-2').value
  player1 = Player(firstName, 'X')
  player2 = Player(secondName, 'O')

  console.log(player1)
  console.log(player2)
  image.classList.remove('show')
  image.classList.add('hide')
  gameBoard()
  showBoard.classList.remove('hide')
  showBoard.classList.add('show')
})

const gameBoard = () => {
  console.log('gameBoard start')
  const showBoard = document.getElementById('game-board')

  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div')
    cell.id = `${i}`
    cell.className = 'cell'
    showBoard.append(cell)
  }
  game()
}

const game = () => {
  let playerTurn = player1
  document.getElementById('player-turn')
  let board = Array(9).fill('')
  const count = 0
  let winner = null
  const cells = Array.from(document.querySelector('.cell'))

  const checkWIn = (player) => {
    const player1Win = `${player1.marker} ${player1.marker} ${player1.marker}`
    const player2Win = `${player2.marker} ${player2.marker} ${player2.marker}`

    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    win.forEach((winCase) => {
      let check = `${board[winCase[0]]} ${board[winCase[1]]} ${
        board[winCase[2]]
      }`

      if (check == player1Win) {
        winner = player.name
      } else if (check == player2win) {
        winner = player.name
      }
    })
    if (count === 9 && winner === null) {
      winner = 'Tied'
    }
    if (winner !== null) {
      showWinner.classList.remove('hide')
      showWinner.classList.add('show')
      document.getElementById('won').innerHTML = `${winner}`
    }

    const addMark = (player, cell) => {
      const cellID = cell.id - 1
      board[cellID] = player.marker
      cell.innerText = player.marker
      count++
      checkWin(player)
    }
  }
  const play = (() => {
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const cellId = cell.id - 1
        if (board[cellId] === '' && count < 9 && winner === null) {
          addMark(playerTurn, cell)
          if (playerTurn === player1) {
            playerTurn = player2
          } else if (playerTurn === player2) {
            playerTurn = player1
          }
        }
      })
    })
  })()
}
