{
    let computerCounter = 0;
    let playerCounter = 0;

    document.getElementById('btn-reset').addEventListener('click', function(event) {resetGame()});
    document.getElementById('btn-test').addEventListener('click', function(event) {testResults()});

    document.getElementById('btn-rock').addEventListener('click', function(event) {playGame(1); event.stopPropagation()});
    document.getElementById('btn-paper').addEventListener('click', function(event) {playGame(2); event.stopPropagation()});
    document.getElementById('btn-scissors').addEventListener('click', function(event) {playGame(3); event.stopPropagation()});
    document.body.addEventListener('click', function() {clearMessages()});

    /* Methods */
    const testResults = function (trialsNumber = 10) {
        while (trialsNumber > 0) {
            playGame(getRandomChoice());
            trialsNumber--;
        }
    }

    const resetGame = function () {
        clearResults();
        computerCounter = 0;
        playerCounter = 0;
    }

    const playGame = function (playerInput){
        let computerMove = getMoveName(getRandomChoice());
        let playerMove = getMoveName(playerInput);

        clearMessages();
    
        if (!isPlayerWiner(computerMove, playerMove)){
            if (Math.random() < 0.75){
                computerMove = getMoveName(getRandomChoice());
            }
        }

        console.log('moves:', computerMove, playerMove);

        displayResults(computerMove, playerMove);
    }

    const getMoveName = function (argMoveId) {
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
    const displayResults = function (argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove
        + '! Twój ruch to ' + argPlayerMove + '!');

        if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else if(isPlayerWiner(argComputerMove, argPlayerMove)){
            printMessage('Ty wygrywasz!', ['result','success']);
            playerCounter++;
        } else {
            printMessage('Tym razem przegrywasz :(', ['result','failure']);
            computerCounter++;
        }

        printResult(computerCounter, playerCounter);
    }

    /* Utilities */
    function isPlayerWiner(argComputerMove, argPlayerMove){
        return argComputerMove == 'kamień' && argPlayerMove == 'papier' ||
        argComputerMove == 'papier' && argPlayerMove == 'nożyce' ||
        argComputerMove == 'nożyce' && argPlayerMove == 'kamień';
    }

    function getRandomChoice() {
        return Math.floor(Math.random()*3+1);
    }

}