function numberToString(play) {
    switch (true) {
        case play == 1:
            return 'Rock'
        case play == 2:
            return 'Paper'
        case play == 3:
            return 'Scissors'
    }
}

function getPlayerChoice() {
    
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()