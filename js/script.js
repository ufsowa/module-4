
let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';

computerMove = getMoveName(Math.floor(Math.random()*3+1));
playerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));

console.log('moves:', computerMove, playerMove);

if (playerMove != 'nieznany ruch') {
    displayResults(computerMove, playerMove);
} else {
    printMessage("Spróbuj jeszcze raz!");
}

/* Functions */
function getMoveName(argMoveId) {
    if (argMoveId == 1) return 'kamień';
    if (argMoveId == 2) return 'papier';
    if (argMoveId == 3) return 'nożyce';
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch'
}

/**** Rules  ****
* Kamień (1) > Nożyce (3)
* Nozyce (3) > Papier (2)
* Papier (2) > Kamień (1)
*/
function displayResults(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove
    + '! Twój ruch to ' + argPlayerMove + '!');

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
}