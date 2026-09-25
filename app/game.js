import { modal, modalEndGame } from "../app/components/modal.js";
import { renderTiles } from "./components/renderTiles.js";

import * as api from "../db/db.js";
import { createGameService } from "../app/services/gameService.js";
import { createRoomService } from "./services/roomService.js";

const url = window.location.href;
const urlSplit = url.split("=");
const gameCode = urlSplit[1];

const gameService = createGameService(api);
const roomService = createRoomService(api);

// initital state
if (gameCode !== undefined) {
  updateState();
}

// rendera brickor
renderTiles();

const tiles = document.querySelectorAll(".number");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => selectTile(tile));
});

async function updateState() {
  const state = await gameService.getCurrentState(`${gameCode}`);
  console.log(state);

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
      tile.classList.add("shut-tile");
    }
  });

  tiles.forEach((tile) => {
    if (!tile.classList.contains("shut-tile")) {
      tile.disabled = false;
    }
  });

  return state;
}

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

const diceArea = document.querySelector(".dice-area");

function showDice(diceRolls) {
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
// let clickCounter = 0;

function selectTile(tile) {
  // if (clickCounter === 4 && !tile.classList.contains("number-selected")) {
  //   return;
  // }
  if (tile.classList.contains("number-selected")) {
    tile.classList.remove("number-selected");
    // clickCounter--;
  } else {
    tile.classList.add("number-selected");
    // clickCounter++;
  }
}

const rollbtn = document.getElementById("roll-dice");
rollbtn.addEventListener("click", rollDice);

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", createRoom);

async function createRoom() {
  debugger;
  const create = await roomService.createRoom("Nytt spel", 1);

  const { state } = create;

  const gameCode = state.gameCode;

  window.location.href = `game.html?gameCode=${gameCode}`;

  await updateState();
}

async function rollDice() {
  const diceRolls = [];
  const state = await gameService.getCurrentState(`${gameCode}`);

  if (state.currentDiceRoll !== null) {
    diceRolls[0] = state.currentDiceRoll.die1;

    if (state.currentDiceRoll.diceCount > 1) {
      diceRolls[1] = state.currentDiceRoll.die2;
    }

    showDice(diceRolls);
  } else {
    const diceRolls = [];
    const roll = await gameService.rollDice(`${gameCode}`);
    diceRolls[0] = roll.currentDiceRoll.die1;

    if (roll.currentDiceRoll.diceCount === 2) {
      diceRolls[1] = roll.currentDiceRoll.die2;
    }

    showDice(diceRolls);

    const [{ currentScore }] = roll.players;
    if (roll.validMoves.length === 0) {
      endGame(currentScore);
    }

    const validMoves = roll.validMoves.flat();
    const [{ openNumbers }] = roll.players;

    tiles.forEach((tile) => {
      if (!validMoves.includes(Number(tile.id))) {
        tile.classList.add("number-not-selectable");
        tile.disabled = true;
      }

      if (!openNumbers.includes(Number(tile.id))) {
        tile.classList.remove("number-not-selectable");
        tile.disabled = true;
      }
    });

    rollbtn.disabled = true;
    rollbtn.classList.add("disabled");
  }
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

function sumOfDiceRolls(diceRolls) {
  return diceRolls.reduce((accumulator, current) => accumulator + current, 0);
}

async function isShutValid() {
  const state = await gameService.getCurrentState(`${gameCode}`);
  const diceRolls = [];

  if (state.currentDiceRoll !== null) {
    diceRolls[0] = state.currentDiceRoll.die1;

    if (state.currentDiceRoll.diceCount > 1) {
      diceRolls[1] = state.currentDiceRoll.die2;
    }
  }

  const sumDice = sumOfDiceRolls(diceRolls);
  const shutTiles = selectedTiles();

  const sumTiles = shutTiles.reduce(
    (accumulator, current) => accumulator + current,
    0,
  );

  if (sumDice !== sumTiles) {
    modal("Du måste göra ett giltigt drag!");
    return;
  }

  const move = await gameService.submitMove(`${gameCode}`, {
    selectedNumbers: shutTiles,
  });

  shutSelectedTiles();
  openAllRemainingTilesForSelection();
  rollbtn.classList.remove("disabled");

  setTimeout(() => {
    removeOldDice();
  }, 200);
  updateState();
  rollbtn.disabled = false;
}

function openAllRemainingTilesForSelection() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-not-selectable")) {
      tile.classList.remove("number-not-selectable");
    }
  });
}

function selectedTiles() {
  const shutTiles = [];
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-selected")) {
      shutTiles.push(Number(tile.innerText));
    }
  });

  return shutTiles;
}

function shutSelectedTiles() {
  tiles.forEach((tile) => {
    if (tile.classList.contains("number-selected")) {
      tile.classList.remove("number-selected");
    }
  });
}

const shutTilesButton = document.getElementById("submit-button");
shutTilesButton.addEventListener("click", isShutValid);

function endGame(currentScore) {
  modalEndGame("Spelet är slut!", currentScore, () => {
    window.location.href = "game.html";
  });

  // setTimeout(() => {
  //   window.location.href = "game.html";
  // }, 2000);
}
