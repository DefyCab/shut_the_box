import { modal } from "../app/components/modal.js";
import { renderTiles } from "./components/renderTiles.js";

import * as api from "../db/db.js";
import { createGameService } from "../app/services/gameService.js";

const url = window.location.href;
const urlSplit = url.split("=");
const gameCode = urlSplit[1];

const gameService = createGameService(api);

// rendera brickor
renderTiles();

const tiles = document.querySelectorAll(".number");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => selectTile(tile));
});

async function updateState() {
  const state = await gameService.getCurrentState(`${gameCode}`);

  const [{ currentScore }] = state.players;
  const currentScoreP = document.getElementById("current-score");

  const activePlayer = state.currentPlayerName;
  const activePlayerP = document.getElementById("active-player");

  currentScoreP.innerText = `${currentScore}`;
  activePlayerP.innerText = `${activePlayer}`;

  // Only show open numbers
  const { openNumbers } = state.players[0];

  tiles.forEach((tile) => {
    if (!openNumbers.includes(Number(tile.id))) {
      tile.classList.add("number-not-selectable");
    }
  });

  return state;
}

//Globala variablar
const diceRolls = [];
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
let shutTiles = [];

const diceArea = document.querySelector(".dice-area");

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

// Hantering av brickor
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

async function blockUnvalidMoves() {
  const state = await gameService.getCurrentState(`${gameCode}`);

  const { openNumbers } = state.players[0];

  tiles.forEach((tile) => {
    if (!openNumbers.includes(Number(tile.id))) {
      tile.classList.add("shut-tile");
    }
  });
}

const roll = document.getElementById("roll-both");
roll.addEventListener("click", rollDice);

async function rollDice() {
  
  const roll = await gameService.rollDice(`${gameCode}`);
  diceRolls[0] = roll.currentDiceRoll.die1;

  if (roll.currentDiceRoll.diceCount > 1) {
    diceRolls[1] = roll.currentDiceRoll.die2;
  }

  showDice();
  blockUnvalidMoves();
  roll.disabled = true;
  roll.classList.add("disabled");
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

function sumOfDiceRolls() {
  return diceRolls.reduce((accumulator, current) => accumulator + current, 0);
}

async function isShutValid() {
  const sumDice = sumOfDiceRolls();
  const sumTiles = sumOfSelectedTiles();

  if (sumDice !== sumTiles) {
    modal("Du måste göra ett giltigt drag!");
    shutTiles = [];
    return;
  }

  const move = await gameService.submitMove(`${gameCode}`, {
    selectedNumbers: shutTiles,
  });

  debugger;
  shutSelectedTiles();
  openAllRemainingTilesForSelection();
  roll.classList.remove("disabled");
  setTimeout(() => {
    removeOldDice();
  }, 1500);
  updateState();
  roll.disabled = false;
}

function openAllRemainingTilesForSelection() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-not-selectable")) {
      tile.classList.remove("number-not-selectable");
    }
  });
}

function sumOfSelectedTiles() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-selected")) {
      shutTiles.push(Number(tile.innerText));
    }
    debugger;
  });

  const sumOfSelectedTiles = shutTiles.reduce(
    (accumulator, current) => accumulator + current,
    0,
  );

  return sumOfSelectedTiles;
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
