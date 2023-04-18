let playerTurn, moves, isGameOver, span, restartButton;

playerTurn = "x";
moves = 0;
isGameOver = false;
span = document.getElementsByTagName("span");
restartButton = '<button onclick="playAgain()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

function play(y) {
    if (y.dataset.player == "none" && isGameOver == false) {
        y.innerHTML = playerTurn;
        y.dataset.player = playerTurn;
        moves++;
        if (playerTurn == "x") {
            playerTurn = "o";
        } else if (playerTurn == "o") {
            playerTurn = "x";
        }
    }
    verGanador(1,2,3);
    verGanador(4,5,6);
    verGanador(7,8,9);
    verGanador(1,4,7);
    verGanador(2,5,8);
    verGanador(3,6,9);
    verGanador(1,5,9);
    verGanador(3,5,7);
    if (moves == 9 && isGameOver == false) {
        empate();
    }
}

function verGanador(a, b, c) {
    a--; b--; c--;
    if (
        (span[a].dataset.player === span[b].dataset.player) &&
        (span[b].dataset.player === span[c].dataset.player) && 
        (span[a].dataset.player === span[c].dataset.player) && 
        (span[a].dataset.player === "x" || span[a].dataset.player === "o")&& isGameOver == false
    ) {
        span[a].parentNode.className += " activeBox";
        span[b].parentNode.className += " activeBox";
        span[c].parentNode.className += " activeBox";
        gameOver(a);
    }
}

function playAgain() {
    document
        .getElementsByClassName("alert")[0]
        .parentNode.removeChild(document.getElementsByClassName("alert")[0]);
    resetGame();
    window.isGameOver = false;
    for (let z = 0; z < span.length; z++) {
        span[z].parentNode.className = span[z].parentNode.className.replace("activeBox", "");
    }
}

function resetGame() {
    for (i = 0; i < span.length; i++) {
        span[i].dataset.player = "none";
        span[i].innerHTML = "&nbsp;";
    }
    playerTurn = "x";
}

function gameOver(a) {
    let gameOverAlertElement = `<b>EL JUEGO HA TERMINADO</b><br> Jugador ` + span[a].dataset.player.toUpperCase() + ` ha ganado! <br><br>` + restartButton;
    
    let div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = gameOverAlertElement;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver = true;
    moves = 0;
}

function empate() {
    const empateAlerta = "<b>EMPATE!</b><br><br>" + restartButton;
    const div = document.createElement("div");
    div.className = "alert";
    div.innerHTML = empateAlerta;
    document.getElementsByTagName("body")[0].appendChild(div);
    window.isGameOver = true;
    moves = 0;
}
