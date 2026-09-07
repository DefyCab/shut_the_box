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
  for (i = 1; i <= 9; i++) {
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

function selectTile(tile) {
  if (tile.classList.contains("number-selected")) {
    tile.classList.remove("number-selected");
  } else {
    tile.classList.add("number-selected");
  }
}

tiles.forEach((tile) => {
  tile.addEventListener("click", () => selectTile(tile));
});

function removeSelectedClass() {
  tiles.map((tile) => {
    tile.classList.remove("number-selected");
  });
}

const diceArea = document.querySelector(".dice-area");

const diceRolls = [0, 0];

function randomizeDice() {
  diceRolls[0] = Math.floor(Math.random() * 6);
  diceRolls[1] = Math.floor(Math.random() * 6);
}

function showDice() {
  for (j = 0; j < diceRolls.length; j++) {
    const dieBox = document.createElement("div");
    for (i = 0; i <= diceRolls[j]; i++) {
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
}

function rollBothDice() {
  removeOldDice();
  randomizeDice();
  showDice();
}

function removeOldDice() {
  const dice = document.querySelectorAll(".die");
  const diceArea = document.querySelector(".dice-area");
  if (dice.length != 0) {
    for (i = 0; i < dice.length; i++) {
      diceArea.removeChild(dice[i]);
    }
  }
}
