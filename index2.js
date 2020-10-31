const GameBoard = (() => {
  const boardArray = new Array(9).fill('')

  const _showResults = (playerWon) => {
    console.log(playerWon)
    const winner = document.getElementById('resultBox')
    winner.classList.remove('hide')
    winner.classList.add('show')
    const result = document.getElementById('result')
    if (`${playerWon}` === 'Tied') {
      result.textContent = 'Game Tied!'
    } else {
      result.textContent = `${playerWon} wins!`
    }
  }

  const checkWin = (playBoard, person, count) => {
    const winner1 = 'X X X'
    const winner2 = 'O O O'

    const winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winCases.forEach((item) => {
      let win = `${playBoard[item[0]]} ${playBoard[item[1]]} ${
        playBoard[item[2]]
      }`
      if (win === winner1) {
        winner = person.name
        console.log(winner)
        _showResults(winner)
      } else if (win === winner2) {
        winner = person.name
        console.log(winner)
        _showResults(winner)
      }
    })
    if (count === 9) {
      _showResults('TIED')
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
    const resetBtn = () => resetButton.addEventListener('click', resetBoard)
    return { start, resetBtn }
  })()

  const resetBoard = () => {
    const cells = document.getElementsByClassName('cell')
    console.log(cells)
    for (let cell of cells) {
      cell.innerHTML = ''
    }
  }

  const startGame = () => {
    const formNames = document.getElementById('nameForm')

    playerOne.name = firstName.value
    playerTwo.name = secondName.value
    hideImage()
    renderBoard()
    formNames.style.display = 'none'
    firstName.value = ''
    secondName.value = ''
    return playerOne, playerTwo
  }

  let playerTurn = playerOne
  let count = 0
  const play = (event) => {
    const changeTurn = () => {
      if (playerTurn === playerOne) {
        playerTurn = playerTwo
      } else {
        playerTurn = playerOne
      }
    }

    const playBoard = GameBoard.boardArray
    const displayName = document.getElementById('player-turn')
    displayName.innerHTML = playerTurn.name
    if (event.target.innerHTML !== '') return
    else {
      event.target.innerHTML = playerTurn.symbol
      playBoard[event.target.id] = playerTurn.symbol
      count++
      let getWinner = GameBoard.checkWin(playBoard, playerTurn, count)
      changeTurn()
    }
  }

  clickListeners.start()
  clickListeners.resetBtn()
})()
