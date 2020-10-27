let player1
let player2
const winner = document.getElementById('winner')
const image = document.getElementById('image')
const showBoard = document.getElementById('showBoard')

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
  showBoard.classList.remove('hide')
  showBoard.classList.add('show')
})

const Player = (name, marker) => {
  return { name, marker }
}

const gameBoard = () => {
  console.log('gameBoard start')
  const showBoard = document.getElementById('game-board')

  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div')
    cell.id = `${i}`
    cell.className = 'cell'
    showBoard.append(cell)
  }
}
gameBoard()
