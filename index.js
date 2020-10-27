const gameBoard = () => {
  console.log('gameBoard start')

  const gameBoardContainer = document.getElementById('game-board')
  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div')
    cell.id = `${i}`
    cell.className = 'cell'
    gameBoardContainer.append(cell)
  }
}
gameBoard()
