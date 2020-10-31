const GameBoard = (() => {
  const boardArray = new Array(9).fill('')

  const _allEqual = (a, b, c) => {
    return a === b && a === c && a !== ''
  }

  const checkWin = (board) => {
    let winner = null
    const check = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < check.length; i++) {
      if (_allEqual(board[check[i][0]], board[check[i][1]], board[check[i][2]]))
        winner = board[check[i][0]]
    }
  }

  return { checkWin, boardArray }
})()

const DisplayController = (() => {
  const Player = (name, symbol) => {
    return { name, symbol }
  }

  const hideImage = () => {
    const image = document.getElementById('image')
    image.classList.remove('show')
    image.classList.add('hide')
  }

  const revealBoard = () => {
    const showBoard = document.getElementById('showBoard')
    showBoard.classList.remove('hide')
    showBoard.classList.add('show')
  }

  const renderBoard = () => {
    const getBoard = document.getElementById('game-board')
    const gameArray = GameBoard.boardArray
    console.log(gameArray)
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      cell.id = `${i}`
      cell.className = 'cell paper-btn'
      cell.innerHTML = `${gameArray[i]}`
      cell.addEventListener('click', (event) => {
        play(event)
      })
      getBoard.append(cell)
      console.log(cell)
    }
    revealBoard()
  }
  const firstName = document.getElementById('player-1')
  const secondName = document.getElementById('player-2')
  const playerOne = Player(firstName.value, 'X')
  const playerTwo = Player(secondName.value, 'O')

  const clickListeners = (() => {
    const startButton = document.getElementById('startGame')
    const start = () => startButton.addEventListener('click', startGame)

    const resetButton = document.getElementById('reset')
    const resetBtn = () => resetButton.addEventListener('click', renderBoard)
    return { start, resetBtn }
  })()

  const startGame = () => {
    const formNames = document.getElementById('nameForm')

    playerOne.name = firstName.value
    playerTwo.name = secondName.value
    hideImage()
    renderBoard()
    formNames.style.display = 'none'

    return playerOne, playerTwo
  }

  let playerTurn = playerOne

  const play = (event) => {
    const changeTurn = () => {
      if (playerTurn === playerOne) {
        playerTurn = playerTwo
      } else {
        playerTurn = playerOne
      }
    }

    const board = GameBoard.boardArray
    const displayName = document.getElementById('player-turn')
    displayName.innerHTML = playerTurn.name
    event.target.innerHTML = playerTurn.symbol
    board[event.target.id] = playerTurn.symbol
    let getWinner = GameBoard.checkWin(board)
    changeTurn()
    const count = 0
  }

  clickListeners.start()
})()
