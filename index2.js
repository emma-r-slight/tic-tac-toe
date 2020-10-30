const _playerCreate = (name, mark) => {
  return { name, mark }
}

const boardFunctions = (() => {
  const playerOne = _playerCreate('playerOne', 'X')
  const playerTwo = _playerCreate('playerTwo', 'O')

  const showBoard = document.getElementById('showBoard')
  const image = document.getElementById('image')
  const getBoard = document.getElementById('game-board')
  const showWinner = document.getElementById('winner')
  const cells = document.querySelectorAll('.cell')
  const startButton = document.getElementById('startGame')
  const firstName = document.getElementById('player-1')
  const secondName = document.getElementById('player-2')

  const clickListeners = (() => {
    const start = () => startButton.addEventListener('click', startGame)

    const checkCells = () =>
      cells.forEach((cell) => {
        cell.addEventListener('click', validateCell)
      })
    return { start }
  })()

  const hideImage = () => {
    image.classList.remove('show')
    image.classList.add('hide')
  }

  const revealBoard = () => {
    showBoard.classList.remove('hide')
    showBoard.classList.add('show')
  }

  const renderBoard = () => {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      console.log(cell)
      cell.id = `${i}`
      cell.className = 'cell'
      getBoard.append(cell)
      revealBoard()
    }
  }

  const startGame = () => {
    playerOne.name = firstName.value
    playerTwo.name = secondName.value
    hideImage()
    renderBoard()
    console.log(playerOne)
    console.log(playerTwo)
  }

  const validateCell = (event) => {
    if (event.target.innerHTML === '') {
      addMark(event)
    }
  }

  clickListeners.start()
  return
})()

const boardArray = new Array(9).fill('')
const checkWIn = (player) => {
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
    let check = `${board[winCase[0]]} ${board[winCase[1]]} ${board[winCase[2]]}`

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
}
