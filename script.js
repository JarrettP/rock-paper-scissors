function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3).toString(16)
}

function getPlayerChoice() {
    choice = prompt("Rock, paper, or scissors?")

    switch(true) {
        case choice.toLowerCase() == 'rock':
            playerChoice = 0x10
            break
        case choice.toLowerCase() == 'paper':
            playerChoice = 0x20
            break
        case choice.toLowerCase() == 'scissors':
            playerChoice = 0x30
            break
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

function playRound() {
    
    getPlayerChoice()
    getComputerChoice()

    round = playerChoice | computerChoice
    console.log(round)
    
    switch (true) {
        //DRAW
        case round == 0x11:
        case round == 0x22:
        case round == 0x33:
            console.log('draw')
            return `Both chose ${numberToString(playerChoice)}! It's a draw!`
        //COMPUTER WINS
        case round == 0x12:
        case round == 0x23:
        case round == 0x31:
            console.log('computer')
            return `${numberToString(computerChoice)} beats ${numberToString(playerChoice)}! You lose!`
        //PLAYER WINS
        case round == 0x13:
        case round == 0x21:
        case round == 0x32:
            console.log('player')
            return `${numberToString(playerChoice)} beats ${numberToString(computerChoice)}! You win!`
    }
}

function game(playerChoice, computerChoice) {   


    for (let i = 0; i < 5; i++) {
        
     }
}

let playerChoice = 0x00
let computerChoice = 0x00