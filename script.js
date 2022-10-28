function numberToString(play) {
    switch (true) {
        case play == 0x01:
            return 'Rock'
        case play == 0x02:
            return 'Paper'
        case play == 0x03:
            return 'Scissors'
    }
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

function getComputerChoice() {
    return Math.floor(Math.random() * 3).toString(16)
}

function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection
}

let getPlayerSelection = prompt("Rock, paper, or scissors?")

const playerSelection = getPlayerChoice(getPlayerSelection)
const computerSelection = getComputerChoice()