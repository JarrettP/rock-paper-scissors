function getComputerChoice() {
    return Math.floor(Math.random() * 3).toString(16)
}

function getPlayerChoice(choice) {
    choice = choice.toLowerCase()

    switch(true) {
        case choice == 'rock':
            return 0x10
        case choice == 'paper':
            return 0x20
        case choice == 'scissors':
            return 0x30
    }
}

function numberToString(choice) {
    switch (true) {
        case choice == 0x01:
        case choice == 0x10:
            return 'Rock'
        case choice == 0x02:
        case choice == 0x20:
            return 'Paper'
        case choice == 0x03:
        case choice == 0x30:
            return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    round = playerSelection | computerSelection
    console.log(round)
    
    switch (true) {
        //DRAW
        case round == 0x11:
        case round == 0x22:
        case round == 0x33:
            return `Both chose ${numberToString(playerSelection)}! It's a draw!`
        //COMPUTER WINS
        case round == 0x12:
        case round == 0x23:
        case round == 0x31:
            return `${numberToString(computerSelection)} beats ${numberToString(playerSelection)}! You lose!`
        //PLAYER WINS
        case round == 0x13:
        case round == 0x21:
        case round == 0x32:
            return `${numberToString(playerSelection)} beats ${numberToString(computerSelection)}! You win!`
    }
}

function game() {
    
}

let getPlayerSelection = prompt("Rock, paper, or scissors?")

const playerSelection = getPlayerChoice(getPlayerSelection)
const computerSelection = getComputerChoice()