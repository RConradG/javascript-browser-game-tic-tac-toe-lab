Sure! Here's an updated version of the README with code snippets explaining the functionality.

---

# Tic-Tac-Toe Game

This project implements a simple Tic-Tac-Toe game using JavaScript, HTML, and CSS. It allows two players to play the game interactively in their web browser.

## Tech Stack

- **HTML**: Defines the structure of the Tic-Tac-Toe board and the game interface.
- **CSS**: Provides styling for the board and the game elements.
- **JavaScript**: Handles the game logic, state updates, and interaction.

## Project Structure

- **index.html**: The main HTML file that sets up the structure of the game.
- **css/style.css**: Contains the styles for the game interface.
- **js/app.js**: Contains the JavaScript logic for the Tic-Tac-Toe game.

## Functionality

### 1. **Game Board Layout**

The game board is displayed as a 3x3 grid using `div` elements. Each square in the grid is clickable, where the player can place their symbol ("X" or "O").

**HTML code for the board:**

```html
<section class="board">
  <div class="sqr" id="0"></div>
  <div class="sqr" id="1"></div>
  <div class="sqr" id="2"></div>
  <div class="sqr" id="3"></div>
  <div class="sqr" id="4"></div>
  <div class="sqr" id="5"></div>
  <div class="sqr" id="6"></div>
  <div class="sqr" id="7"></div>
  <div class="sqr" id="8"></div>
</section>
```

### 2. **Player Turns**

The game alternates between two players: Player "X" and Player "O". Player "X" always starts first.

**JavaScript to handle player turns:**

```javascript
let turn = "X"; // Player X starts

function switchPlayerTurn() {
  if (winner) {
    return;
  } else if (winner === false) {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
}
```

### 3. **Winning Combos**

The game checks for predefined winning combinations. The winning combinations consist of indexes of the squares in a 3x3 grid.

**Winning combinations constant:**

```javascript
const WINNING_COMBOS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Center column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal (top-left to bottom-right)
  [2, 4, 6], // Diagonal (top-right to bottom-left)
];
```

**JavaScript to check for a winner:**

```javascript
function checkForWinner() {
  WINNING_COMBOS.forEach((combo) => {
    const [a, b, c] = combo;
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
      winner = true; // Set winner
    }
  });
}
```

### 4. **Tie Check**

If all the squares are filled and there is no winner, the game will declare a tie.

**JavaScript to check for a tie:**

```javascript
function checkForTie() {
  if (winner) return;
  if (board.every((square) => square !== "")) {
    tie = true; // If all squares are filled, and no winner, it's a tie
  }
}
```

### 5. **Messages**

The game displays different messages based on the current game state: whether it’s a player’s turn, the game is tied, or a player has won.

**JavaScript to update the message:**

```javascript
function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn}'s turn.`;
  } else if (tie && !winner) {
    messageEl.textContent = "Tie Game!";
  } else {
    messageEl.textContent = `Congrats "${turn}", you win!`;
  }
}
```

### 6. **Reset Functionality**

The "Reset" button allows players to start a new game by clearing the board and resetting the game state.

**HTML for the Reset button:**

```html
<button id="reset">Reset</button>
```

**JavaScript to handle reset:**

```javascript
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}

document.getElementById("reset").addEventListener("click", init);
```

### 7. **Game Flow**

The game follows this flow:
1. Player "X" starts.
2. Players take turns by clicking on the squares to place their symbol.
3. After each move, the game checks if there’s a winner or a tie.
4. If a winner is found, the game announces the winner.
5. If all squares are filled and no winner, the game declares a tie.
6. Players can reset the game at any time by clicking the "Reset" button.

**Handling user clicks:**

```javascript
function handleClick(event) {
  const squareIndex = event.target.id;
  if (winner || board[squareIndex] !== "") return; // Prevent overwriting a square

  placePiece(squareIndex); // Place the player's symbol
  checkForWinner(); // Check for a winner
  checkForTie(); // Check for a tie
  switchPlayerTurn(); // Switch the player
  render(); // Update the board and message
}
```

### 8. **Rendering the Game**

After each move, the game board and message are updated to reflect the current game state.

**JavaScript to render the game state:**

```javascript
function updateBoard() {
  board.forEach((square, index) => {
    squareEls[index].textContent = square; // Update each square with its value ("X" or "O")
  });
}

function render() {
  updateBoard();
  updateMessage(); // Display the current game status
}
```

### Example of the Game Flow

1. **Starting the Game**: The game starts with Player "X" taking their turn.
2. **Player Makes a Move**: Player "X" clicks on an empty square to place their symbol. The square’s content is updated, and the game checks for a winner.
3. **Player "O" Makes a Move**: Player "O" clicks an empty square to place their symbol. The game alternates turns until there is a winner or a tie.
4. **Winner Declared**: If a player completes a winning combination, the game announces the winner.
5. **Tie Game**: If no one wins and all squares are filled, the game declares a tie.
6. **Resetting the Game**: After a winner or tie is declared, players can reset the game by clicking the "Reset" button.

## How to Run the Game

1. Clone the repository to your local machine.
2. Open the `index.html` file in any web browser.
3. Start playing by clicking on the squares, alternating between Player "X" and Player "O".
4. Click "Reset" to start a new game.

---

Let me know if you need any additional modifications or further explanations!