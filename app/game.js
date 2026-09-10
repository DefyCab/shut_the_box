import * as api from "../db/db.js";
import { createGameService } from "../db/service.js";

const gameService = createGameService(api);

const state = await gameService.getCurrentState("5BN8EB");

const activePlayer = state.currentPlayerName;
const activePlayerSpan = document.getElementById("active-player");

console.log(activePlayer);

activePlayerSpan.innerHTML = `<p>${activePlayer}</p>`;

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
    numbers.id = `tile${i}`;
    numberBoard.appendChild(numbers);
  }
}

renderTiles();

// Jag tänkte att en array var lättare att jobba med men går tilbaka till nodelist igen
const tiles = document.querySelectorAll(".number");

let clickCounter = 0;

function selectTile(tile) {
  if (diceRolls.length < 1) {
    return;
  }
  if (clickCounter === 2 && !tile.classList.contains("number-selected")) {
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

tiles.forEach((tile) => {
  tile.addEventListener("click", () => selectTile(tile));
});

const diceArea = document.querySelector(".dice-area");

const diceRolls = [];

function assingDiceRolls() {
  diceRolls[0] = state.currentDiceRoll.die1 - 1;
  diceRolls[1] = state.currentDiceRoll.die2 - 1;
}

function showDice() {
  for (let j = 0; j < diceRolls.length; j++) {
    const dieBox = document.createElement("div");
    for (let i = 0; i <= diceRolls[j]; i++) {
      const cspan = document.createElement("span");
      cspan.classList.add("pip", dice[diceRolls[j]][i]);
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
  debugger;
  removeOldDice();
  assingDiceRolls();
  showDice();
  rollBoth.disabled = true;
  rollOne.disabled = true;
  rollBoth.classList.add("disabled");
  rollOne.classList.add("disabled");
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

function isShutValid() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-selected")) {
      shutTiles.push(Number(tile.innerHTML));
    }
  });

  const diceSum = diceRolls[0] + diceRolls[1];
  const tileSum = shutTiles[0] + shutTiles[1];

  console.log(`"diceSum:" ${diceSum}`);

  console.log(`"tileSum" ${tileSum}`);
}

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
