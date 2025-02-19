/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;
let msg;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.getElementsByClassName("sqr");
const messageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("reset")

/*-------------------------------- Functions --------------------------------*/

function switchPlayerTurn() {
  if (winner) {
    return;
  } else if (winner === false) {
    if (turn === "X") {
      turn = "O";
    } else if (turn === "O") {
      turn = "X";
    }
  }
}

function checkForTie() {
  if (winner) {
    return;
  } else {
    // checks if every square has an empty string when there is no winner
    if (board.every((square) => square !== "")) { 
      tie = true;
    }
  }
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    let firstIndexOfCombo = combo[0];
    let secondIndexOfCombo = combo[1];
    let thirdIndexOfCombo = combo[2];

    if (
      board[firstIndexOfCombo] !== "" &&
      board[firstIndexOfCombo] !== undefined
    ) {
      if (board[firstIndexOfCombo] === board[secondIndexOfCombo]) {
        if (board[firstIndexOfCombo] === board[thirdIndexOfCombo]) {
          winner = true;
          return;
        }
      }
    }
  });
}

function placePiece(index) {
  board[index] = turn;
}

function handleClick(event) {
  const squareIndex = event.target.id;

  if (winner) {
    return;
  }

  if (board[squareIndex] === "X" || board[squareIndex] === "O") {
    return;
  }

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn}'s turn.`;
  } else if (tie === true && winner == false) {
    messageEl.textContent = "Tie Game!";
  } else {
    messageEl.textContent = `Congrats "${turn}", you win!`;
  }
}

function updateBoard() {
  board.forEach((square, index) => {
    squareEls[index].textContent = square;
  });
}

function render() {
  updateBoard();
  updateMessage();
}

function init() {
  // TODO: finish function
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}

init();
/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll(".sqr").forEach((square) => {
  square.addEventListener("click", handleClick);
});

document.getElementById("reset").addEventListener("click", init);

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
