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

let diceRollOne = 0;
let diceRollTwo = 0;

function rollDice() {
  diceRollOne = Math.floor(Math.random() * 6);
  diceRollTwo = Math.floor(Math.random() * 6);
}

rollDice();

function showDieRollOne() {
  const dieBox = document.createElement("div");

  for (i = 0; i <= diceRollOne; i++) {
    const cspan = document.createElement("span");
    cspan.classList.add("pip", dice[diceRollOne][i]);
    dieBox.appendChild(cspan);
  }
  dieBox.classList.add("die");
  diceArea.appendChild(dieBox);
}

function showDieRollTwo() {
  const dieBox = document.createElement("div");

  for (i = 0; i <= diceRollTwo; i++) {
    const cspan = document.createElement("span");
    cspan.classList.add("pip", dice[diceRollTwo][i]);
    dieBox.appendChild(cspan);
  }
  dieBox.classList.add("die");
  diceArea.appendChild(dieBox);
}

const currentRollOne = showDieRollOne()
const currentRollTwo = showDieRollTwo()



