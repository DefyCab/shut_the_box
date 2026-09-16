import move from "../mock/move.js";
import state from "../mock/state.js";
import { modal } from "../app/components/modal.js";
import { renderTiles } from "./components/renderTiles.js";

// import * as api from "../db/db.js";
// import { createGameService } from "../db/service.js";

// const gameService = createGameService(api);

// const state = await gameService.getCurrentState("5BN8EB");

// const gameCode =

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

// rendera brickor
renderTiles();

const tiles = document.querySelectorAll(".number");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => selectTile(tile));
});

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

function assingDiceRolls() {
  const { currentDiceRoll } = state;
  diceRolls[0] = currentDiceRoll.die1;

  if (currentDiceRoll.diceCount > 1) {
    diceRolls[1] = currentDiceRoll.die2;
  }
}

// initiala state-värden
const [{ currentScore }] = state.players;
const currentScoreP = document.getElementById("current-score");

const activePlayer = state.currentPlayerName;
const activePlayerP = document.getElementById("active-player");

currentScoreP.innerText = `${currentScore}`;
activePlayerP.innerText = `${activePlayer}`;

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

const validMoves = state.validMoves;
const validMovesCombined = validMoves.flat();
const allMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function blockUnvalidMoves() {
  let noneValidMoves = [];

  allMoves.map((number) => {
    if (!validMovesCombined.includes(number)) {
      noneValidMoves = [...noneValidMoves, number];
    }
  });

  tiles.forEach((tile) => {
    if (noneValidMoves.includes(Number(tile.id))) {
      tile.classList.add("number-not-selectable");
    }
  });
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
  // if (state.currentDiceRoll === null) {
  // gameService.rollDice("5BN8EB");
  assingDiceRolls();
  showDice();
  blockUnvalidMoves();
  rollBoth.disabled = true;
  rollOne.disabled = true;
  rollBoth.classList.add("disabled");
  rollOne.classList.add("disabled");
  // }
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

function isShutValid() {
  const sumDice = sumOfDiceRolls();
  const sumTiles = sumOfSelectedTiles();

  if (sumDice !== sumTiles) {
    modal("Du måste göra ett giltigt drag!");
    shutTiles = [];
    return;
  }

  // const move = gameService.submitMove(`${gameCode}`, {
  //   selectedNumbers: [`${shutTiles}`],
  // });
  const [{ currentScore }] = move.players;
  currentScoreP.innerText = `${currentScore}`;
  shutSelectedTiles();
  openAllRemainingTilesForSelection();
  rollBoth.classList.remove("disabled");
  setTimeout(() => {
    removeOldDice();
  }, 1500);
  rollBoth.disabled = false;
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
  });

  const sumOfSelectedTiles = shutTiles.reduce(
    (accumulator, current) => accumulator + current,
    0,
  );

  return sumOfSelectedTiles;
}

// function toggleShutSelectedTilesButton() {
//   if (!state.updateReason === "DiceRolled") {
//     shutTilesButton.disabled;
//   }
// }

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
