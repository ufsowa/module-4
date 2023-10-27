document.getElementById('btn-rock').addEventListener('click', function() {playGame(1)});
document.getElementById('btn-paper').addEventListener('click', function() {playGame(2)});
document.getElementById('btn-scissors').addEventListener('click', function() {playGame(3)});
  
/* Functions */
function playGame(playerInput){
    let computerMove = 'nieznany ruch';
    let playerMove = 'nieznany ruch';
    clearMessages();

    computerMove = getMoveName(Math.floor(Math.random()*3+1));
    playerMove = getMoveName(playerInput);

    console.log('moves:', computerMove, playerMove);

    displayResults(computerMove, playerMove);
}

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

    if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier' ||
        argComputerMove == 'papier' && argPlayerMove == 'nożyce' ||
        argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
}