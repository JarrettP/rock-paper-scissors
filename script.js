let computerChoice = ''

function getComputerChoice() {
    choice = math.floor(math.random() * 3) + 1

    if (choice == 1) {
        computerChoice = 'Rock'
    } else if (choice == 2) {
        computerChoice = 'Paper'
    } else if (choice == 3) {
        computerChoice = 'Scissors'
    }
}