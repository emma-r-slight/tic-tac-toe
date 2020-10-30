const GameBoard = (() => {
  const boardArray = new Array(9).fill('X')

  const _allEqual = (a, b, c) => {
    return a === b && a === c && a !== ''
  }

  const checkWIn = (board) => {
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

  return { checkWIn, boardArray }
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

  const validateCell = (event) => {
    console.log('click')
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
      cell.addEventListener('click', validateCell)
      getBoard.append(cell)
      console.log(cell)
    }
    revealBoard()
  }
  const firstName = document.getElementById('player-1')
  const secondName = document.getElementById('player-2')
  const playerOne = Player(firstName.value, 'X')
  const playerTwo = Player(secondName.value, 'O')
  const formNames = document.getElementById('nameForm')

  const clickListeners = (() => {
    const startButton = document.getElementById('startGame')
    const start = () => startButton.addEventListener('click', startGame)
    return { start }
  })()

  const startGame = () => {
    playerOne.name = firstName.value
    playerTwo.name = secondName.value
    hideImage()
    renderBoard()
    formNames.style.display = 'none'

    const count = 0
    let getWinner = GameBoard.checkWIn(GameBoard.boardArray)
    const cells = document.getElementsByClassName('cell')

    return playerOne, playerTwo
  }

  clickListeners.start()
})()
