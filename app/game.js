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

const rollBoth = document.getElementById("roll-both");
rollBoth.addEventListener("click", rollBothDice);

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
