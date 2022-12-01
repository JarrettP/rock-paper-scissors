function getComputerChoice() {
    computerChoice = Math.floor((Math.random() * 3) + 1).toString(16);
};

function getPlayerChoice(choice) {
    
    if (!choice) {
        choice = prompt("Rock, paper, or scissors?");
    }

    switch(true) {
        case choice.toLowerCase() == 'rock':
            playerChoice = 0x10;
            break;
        case choice.toLowerCase() == 'paper':
            playerChoice = 0x20;
            break;
        case choice.toLowerCase() == 'scissors':
            playerChoice = 0x30;
            break;
    };
};

function numberToString(choice) {
    switch (true) {
        case choice == 0x01:
        case choice == 0x10:
            return 'Rock';
        case choice == 0x02:
        case choice == 0x20:
            return 'Paper';
        case choice == 0x03:
        case choice == 0x30:
            return 'Scissors';
    };
};

function playRound() {

    if (!this.id) {
        getPlayerChoice();
    };
    getPlayerChoice(this.id);

    getComputerChoice();

    round = playerChoice | computerChoice;
    
    switch (true) {
        //DRAW
        case round == 0x11:
        case round == 0x22:
        case round == 0x33:
            console.log('draw');
            return `Both chose ${numberToString(playerChoice)}! It's a draw!`;
        //COMPUTER WINS
        case round == 0x12:
        case round == 0x23:
        case round == 0x31:
            console.log('computer');
            wins--;
            return `${numberToString(computerChoice)} beats ${numberToString(playerChoice)}! You lose!`;
        //PLAYER WINS
        case round == 0x13:
        case round == 0x21:
        case round == 0x32:
            console.log('player');
            wins++;
            return `${numberToString(playerChoice)} beats ${numberToString(computerChoice)}! You win!`;
    };
};

// function game() {   

//     for (let i = 0; i < 5; i++) {
//         playRound();
//      };

//      winner = wins;
//      wins = 0;
//      console.log(winner);

//      switch (true) {
//         //DRAW
//         case winner == 0:
//             return "It's a draw!";
//         //COMPUTER WINS
//         case winner < 0:
//             return "Sorry! You lose!";
//         //PLAYER WINS
//         case winner > 0:
//             return "Congratulations! You win!";
//      };
// };

let wins = 0;
let playerChoice = 0x00;
let computerChoice = 0x00;

const plays = document.querySelectorAll('.play');
plays.forEach(play => play.addEventListener('click', playRound));