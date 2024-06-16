const playerWinsElement = document.querySelector('#player-wins')
const cpuWinsElement = document.querySelector('#cpu-wins')
const drawElement = document.querySelector('#draws')
const playerSelectionElement = document.querySelector('#player-selection')
const cpuSelectionElement = document.querySelector('#cpu-selection')
const outcomeElement = document.querySelector('#outcome')
const allowedKeypresses = ['ArrowLeft', 'ArrowRight', 'ArrowUp']
const types = {
  rock: {
    value: 2,
  },
  paper: {
    value: 0,
  },
  scissors: {
    value: 1,
  },
}
const wins = {
  playerWins: 0,
  cpuWins: 0,
  draw: 0,
}

document.addEventListener('keyup', (event) => {
  if (allowedKeypresses.includes(event.key)) {
    run(event.key)
  }
})

function cpuEvent() {
  const typesLength = allowedKeypresses.length
  const randomIndex = Math.floor(Math.random() * typesLength)
  const getKeyPress = allowedKeypresses[randomIndex]
  const getCpuValue = assignKeyToValue(getKeyPress)
  cpuSelectionElement.innerHTML = `CPU Selection: ${getCpuValue.toUpperCase()}`
  return getCpuValue
}

function assignKeyToValue(event) {
  switch (event) {
    case 'ArrowLeft':
      return 'rock'
    case 'ArrowRight':
      return 'scissors'
    case 'ArrowUp':
      return 'paper'
  }
}

function checkWinner(playerValue, cpuValue) {
  if (playerValue === cpuValue) {
    wins.draw++
    outcomeElement.innerHTML = 'Winner: DRAW'
    return 'draw'
  } else {
    const playerTypeScore = types[playerValue].value
    const cpuTypeScore = types[cpuValue].value
    if (playerTypeScore > cpuTypeScore) {
      wins.playerWins++
      return 'player'
    }
  }
  wins.cpuWins++
  return 'cpu'
}

function run(event) {
  const playerValue = assignKeyToValue(event)
  playerSelectionElement.innerHTML = `Player Selection: ${playerValue.toUpperCase()}`
  const cpuValue = cpuEvent()
  checkWinner(playerValue, cpuValue)
  playerWinsElement.innerHTML = `Player Wins: ${wins.playerWins}`
  cpuWinsElement.innerHTML = `CPU Wins: ${wins.cpuWins}`
  drawElement.innerHTML = `Draws: ${wins.draw}`
}
