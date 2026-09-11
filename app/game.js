import state from "../mock/state.js";
// import * as api from "../db/db.js";
// import { createGameService } from "../db/service.js";

// const gameService = createGameService(api);

// const state = await gameService.getCurrentState("5BN8EB");

const dice = [
  ["center"],
  ["top-left", "bottom-right"],
  ["top-left", "center", "bottom-right"],
  ["top-left", "top-right", "bottom-left", "bottom-right"],
  ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
  [
    "top-left",
    "top-right",
    "middle-left",
    "middle-right",
    "bottom-left",
    "bottom-right",
  ],
];

const numberBoard = document.querySelector(".number-board");

function renderTiles() {
  for (let i = 1; i <= 9; i++) {
    const numbers = document.createElement("button");
    numbers.classList.add("number");
    numbers.innerText = i;
    numbers.id = `${i}`;
    numberBoard.appendChild(numbers);
  }
}

renderTiles();

const validMoves = state.validMoves;
const validMovesCombined = validMoves.flat();

const [{ currentScore }] = state.players;
const currentScoreP = document.getElementById("current-score");

const activePlayer = state.currentPlayerName;
const activePlayerP = document.getElementById("active-player");

currentScoreP.innerText = `${currentScore}`;
activePlayerP.innerText = `${activePlayer}`;

const tiles = document.querySelectorAll(".number");

let clickCounter = 0;

function selectTile(tile) {
  if (diceRolls.length < 1) {
    return;
  }
  if (clickCounter === 4 && !tile.classList.contains("number-selected")) {
    return;
  }
  if (tile.classList.contains("number-selected")) {
    tile.classList.remove("number-selected");
    clickCounter--;
  } else {
    tile.classList.add("number-selected");
    clickCounter++;
  }
}

const allMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function blockTilesNotValidMoves() {
  validMovesCombined.forEach((move) => {
    tiles.classList.add("not-allowed");
  });
}
// tiles.forEach((tile) => {
//   if (tile.classList.contains("not-allowed")) {
//   }
// });
blockTilesNotValidMoves();

tiles.forEach((tile) => {
  tile.addEventListener("click", () => selectTile(tile));
});

const diceArea = document.querySelector(".dice-area");

const diceRolls = [];

function assingDiceRolls() {
  diceRolls[0] = state.currentDiceRoll.die1;
  diceRolls[1] = state.currentDiceRoll.die2;
}

function showDice() {
  for (let j = 0; j < diceRolls.length; j++) {
    const dieBox = document.createElement("div");
    const diceRollsCountDown = [diceRolls[0] - 1, diceRolls[1] - 1];
    for (let i = 0; i < diceRolls[j]; i++) {
      const cspan = document.createElement("span");
      cspan.classList.add("pip", dice[diceRollsCountDown[j]][i]);
      dieBox.appendChild(cspan);
    }
    dieBox.classList.add("die");
    diceArea.appendChild(dieBox);
  }
}

const rollOne = document.getElementById("roll-one");
rollOne.addEventListener("click", rollOneDie);

const rollBoth = document.getElementById("roll-both");
rollBoth.addEventListener("click", rollBothDice);

function rollOneDie() {
  removeOldDice();
  randomizeDice();
  diceRolls.pop();
  showDice();
  rollBoth.disabled = true;
  rollOne.disabled = true;
  rollBoth.classList.add("disabled");
  rollOne.classList.add("disabled");
}

function rollBothDice() {
  // if (!state.currentDiceRoll === null) {
  //   gameService.rollDice("5BN8EB");
  removeOldDice();
  assingDiceRolls();
  showDice();
  rollBoth.disabled = true;
  rollOne.disabled = true;
  rollBoth.classList.add("disabled");
  rollOne.classList.add("disabled");
  // }
  // console.log("Tärningarna är redan slagna");
  // return;
}

function removeOldDice() {
  const dice = document.querySelectorAll(".die");
  const diceArea = document.querySelector(".dice-area");
  if (dice.length != 0) {
    for (let i = 0; i < dice.length; i++) {
      diceArea.removeChild(dice[i]);
    }
  }
}

const shutTiles = [];

function isShutValid() {}

function sumOfSelectedTiles() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-selected")) {
      shutTiles.push(Number(tile.innerHTML));
    }
  });

  const sumOfSelectedTiles = shutTiles.reduce(
    (accumulator, current) => accumulator + current,
    0,
  );

  return sumOfSelectedTiles;
}

// TODO: låt [valid-moves] göra att brickor som inte är i spel blir mörkare / oklickbara
// Jämför om markerade brickors totala summa motsvarar summan av tärningarna
// Gör en ny klass som visar markerad bricka genom ändra färg på border
// Aktivera knappar
// använd tile.id för att disabla knappar från validmoves listan

// function submitMove() {
//   gameService.submitMoves(validatedTile[0], validatedTile[1]);
// }

function shutSelectedTiles() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-selected")) {
      discardUsedTiles(tile.id);
    }
  });
}

function discardUsedTiles(id) {
  const tileToRemove = document.getElementById(`${id}`);
  tileToRemove.classList.add("shut-tile");
}

const shutTilesButton = document.getElementById("submit-button");
shutTilesButton.addEventListener("click", isShutValid);
